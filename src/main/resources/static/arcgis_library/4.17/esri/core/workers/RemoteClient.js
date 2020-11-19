define(["require", "exports", "../Error", "../events", "../promiseUtils", "./registry", "./utils", "../../views/support/Scheduler"], function (require, exports, EsriError, events_1, promiseUtils_1, registry_1, utils_1, Scheduler_1) {
    "use strict";
    var CLOSE = utils_1.MessageType.CLOSE, ABORT = utils_1.MessageType.ABORT, INVOKE = utils_1.MessageType.INVOKE, RESPONSE = utils_1.MessageType.RESPONSE, OPEN_PORT = utils_1.MessageType.OPEN_PORT, ON = utils_1.MessageType.ON;
    /**
     * Queue that throttle message processing.
     */
    var InvokeMessageQueue = /** @class */ (function () {
        function InvokeMessageQueue(invoke) {
            this._timer = null;
            this._cancelledJobIds = new Set();
            this._invokeMessages = [];
            this._invoke = invoke;
            this._timer = null;
            this._process = this._process.bind(this);
        }
        InvokeMessageQueue.prototype.push = function (message) {
            if (message.type === utils_1.MessageType.ABORT) {
                this._cancelledJobIds.add(message.jobId);
            }
            else {
                this._invokeMessages.push(message);
                if (this._timer === null) {
                    this._timer = setTimeout(this._process, 0);
                }
            }
        };
        InvokeMessageQueue.prototype.clear = function () {
            this._invokeMessages.length = 0;
            this._cancelledJobIds.clear();
            this._timer = null;
        };
        InvokeMessageQueue.prototype._process = function () {
            this._timer = null;
            for (var _i = 0, _a = this._invokeMessages; _i < _a.length; _i++) {
                var message = _a[_i];
                if (!this._cancelledJobIds.has(message.jobId)) {
                    this._invoke(message);
                }
            }
            this._cancelledJobIds.clear();
            this._invokeMessages.length = 0;
        };
        return InvokeMessageQueue;
    }());
    var RemoteClient = /** @class */ (function () {
        //--------------------------------------------------------------------------
        //
        //  Lifecycle
        //
        //--------------------------------------------------------------------------
        function RemoteClient(_port, options) {
            var _this = this;
            this._port = _port;
            this._outJobs = new Map();
            this._inJobs = new Map();
            this._invokeQueue = new InvokeMessageQueue(function (message) { return _this._onInvokeMessage(message); });
            this._responseQueue = [];
            this._client = options.client;
            this._onMessage = this._onMessage.bind(this);
            this._channel = options.channel;
            if (options.scheduler) {
                this._frameTask = options.scheduler.registerTask(Scheduler_1.Task.REMOTE_CLIENT, function (budget) { return _this._update(budget); }, function () { return _this._responseQueue.length > 0; });
            }
            this._port.addEventListener("message", this._onMessage);
            this._port.start();
        }
        RemoteClient.connect = function (Module) {
            var channel = new MessageChannel();
            var client;
            // instantiate the module
            if (typeof Module === "function") {
                client = new Module();
            }
            else if ("default" in Module && typeof Module.default === "function") {
                /*eslint-disable */
                client = new Module.default();
                /*eslint-enable */
            }
            else {
                client = Module;
            }
            var remoteClient = new RemoteClient(channel.port1, { channel: channel, client: client });
            if (typeof client === "object" && "remoteClient" in client) {
                client.remoteClient = remoteClient;
            }
            // store instance to prevent GC
            RemoteClient.clients.set(remoteClient, client);
            return channel.port2;
        };
        /**
         * Load worker module from the workers registry or resolve as `null` if id not found.
         *
         * @ignore
         */
        RemoteClient.loadWorker = function (moduleId) {
            var loader = registry_1.registry[moduleId];
            return loader ? loader() : promiseUtils_1.resolve(null);
        };
        //--------------------------------------------------------------------------
        //
        //  Public Methods
        //
        //--------------------------------------------------------------------------
        /**
         *
         */
        RemoteClient.prototype.close = function () {
            this._post({ type: CLOSE });
            this._close();
        };
        RemoteClient.prototype.isBusy = function () {
            return this._outJobs.size > 0;
        };
        /**
         * Invokes a method on the other thread.
         *
         * @param methodName the name or path to the method to be invoked
         * @param data Parameters passed to the method with name `methodName`
         * @param {Object} [options]
         * @param {Object} [options.signal] the signal to abort the execution
         * @param {Object} [options.transferList] an array of Transferable objects
         */
        RemoteClient.prototype.invoke = function (methodName, data, options) {
            var _this = this;
            var signal = options && options.signal;
            var transferList = options && options.transferList;
            if (!this._port) {
                return promiseUtils_1.reject(new EsriError("worker:port-closed", "Cannot call invoke('" + methodName + "'), port is closed", {
                    methodName: methodName,
                    data: data
                }));
            }
            var jobId = utils_1.newJobId();
            return promiseUtils_1.create(function (resolve, reject) {
                var abortHandle = promiseUtils_1.onAbortOrThrow(signal, function () {
                    var _a;
                    var outJob = _this._outJobs.get(jobId);
                    if (!outJob) {
                        return;
                    }
                    _this._outJobs.delete(jobId);
                    (_a = outJob.abortHandle) === null || _a === void 0 ? void 0 : _a.remove();
                    _this._post({ type: ABORT, jobId: jobId });
                    reject(promiseUtils_1.createAbortError());
                });
                var job = {
                    resolve: resolve,
                    reject: reject,
                    abortHandle: abortHandle,
                    debugInfo: methodName
                };
                _this._outJobs.set(jobId, job);
                _this._post({
                    type: INVOKE,
                    jobId: jobId,
                    methodName: methodName,
                    abortable: signal != null
                }, data, transferList);
            });
        };
        RemoteClient.prototype.on = function (eventType, listener) {
            var channel = new MessageChannel();
            this._port.postMessage({
                type: utils_1.MessageType.ON,
                eventType: eventType,
                port: channel.port2
            }, [channel.port2]);
            function eventHandler(message) {
                listener(message.data);
            }
            channel.port1.addEventListener("message", eventHandler);
            channel.port1.start();
            return {
                remove: function () {
                    channel.port1.postMessage({
                        type: utils_1.MessageType.CLOSE
                    });
                    channel.port1.close();
                    channel.port1.removeEventListener("message", eventHandler);
                }
            };
        };
        RemoteClient.prototype.openPort = function () {
            var channel = new MessageChannel();
            this._post({ type: OPEN_PORT, port: channel.port2 });
            return channel.port1;
        };
        //--------------------------------------------------------------------------
        //
        //  Private Methods
        //
        //--------------------------------------------------------------------------
        /**
         * Method to terminate all communications.
         */
        RemoteClient.prototype._close = function () {
            this._channel && (this._channel = null);
            this._port.removeEventListener("message", this._onMessage);
            this._port.close();
            this._outJobs.forEach(function (job) {
                var _a;
                (_a = job.abortHandle) === null || _a === void 0 ? void 0 : _a.remove();
                job.reject(promiseUtils_1.createAbortError("Worker closing, aborting job calling '" + job.debugInfo + "'"));
            });
            this._inJobs.clear();
            this._outJobs.clear();
            this._invokeQueue.clear();
            this._port = this._client = null;
            if (this._frameTask) {
                this._frameTask.remove();
            }
            this._frameTask = null;
            this._responseQueue = null;
        };
        /**
         * Methode processing the message coming from the remote side.
         * @param event
         */
        RemoteClient.prototype._onMessage = function (event) {
            var message = utils_1.receiveMessage(event);
            if (!message) {
                return;
            }
            switch (message.type) {
                // transfer a response to a promise
                case RESPONSE:
                    this._onResponseMessage(message);
                    break;
                // Invoke method on loaded module
                case INVOKE:
                    this._invokeQueue.push(message);
                    break;
                // Existing job cancellation
                case ABORT:
                    this._onAbortMessage(message);
                    break;
                // The other client closed the connection
                case CLOSE:
                    this._onCloseMessage();
                    break;
                // open of a new port
                case OPEN_PORT:
                    this._onOpenPortMessage(message);
                    break;
                // adds a listener on an event
                case ON:
                    this._onOnMessage(message);
                    break;
            }
        };
        /**
         * An existing job is being canceled
         * @param message
         */
        RemoteClient.prototype._onAbortMessage = function (message) {
            var inJobs = this._inJobs;
            var jobId = message.jobId;
            var job = inJobs.get(jobId);
            this._invokeQueue.push(message);
            if (!job) {
                return;
            }
            // A job is cancelable only if the call to invoke() had a signal
            if (job.controller) {
                job.controller.abort();
            }
            inJobs.delete(jobId);
        };
        /**
         * Processing the closing message coming from a call to `connection.close()`
         * in the other thread.
         */
        RemoteClient.prototype._onCloseMessage = function () {
            var client = this._client;
            // We first close the connection and cancel out going jobs
            this._close();
            // Then we destroy the instantiated module.
            // Only happening when `this` is the owner of the instantiated module.
            if (client && "destroy" in client && RemoteClient.clients.get(this) === client) {
                client.destroy();
            }
            RemoteClient.clients.delete(this);
            if (client && client.remoteClient) {
                client.remoteClient = null;
            }
        };
        RemoteClient.prototype._onInvokeMessage = function (message) {
            var _this = this;
            var methodName = message.methodName, jobId = message.jobId, data = message.data, abortable = message.abortable;
            var controller = abortable ? promiseUtils_1.createAbortController() : null;
            var inJobs = this._inJobs;
            var thisArgs = this._client;
            var func = thisArgs[methodName];
            var resultOrPromise;
            try {
                if (!func && methodName && methodName.indexOf(".") !== -1) {
                    var split = methodName.split(".");
                    for (var i = 0; i < split.length - 1; i++) {
                        thisArgs = thisArgs[split[i]];
                        func = thisArgs[split[i + 1]];
                    }
                }
                if (typeof func !== "function") {
                    throw new TypeError(methodName + " is not a function");
                }
                resultOrPromise = func.call(thisArgs, data, {
                    client: this,
                    signal: controller ? controller.signal : null
                });
            }
            catch (error) {
                this._post({
                    type: RESPONSE,
                    jobId: jobId,
                    error: utils_1.toInvokeError(error)
                });
                return;
            }
            if (!promiseUtils_1.isPromiseLike(resultOrPromise)) {
                this._post({
                    type: RESPONSE,
                    jobId: jobId
                }, resultOrPromise);
            }
            else {
                inJobs.set(jobId, { controller: controller, promise: resultOrPromise });
                resultOrPromise.then(function (result) {
                    if (!inJobs.has(jobId)) {
                        return;
                    }
                    inJobs.delete(jobId);
                    _this._post({
                        type: RESPONSE,
                        jobId: jobId
                    }, result);
                }, function (error) {
                    if (!inJobs.has(jobId)) {
                        return;
                    }
                    inJobs.delete(jobId);
                    if (!promiseUtils_1.isAbortError(error)) {
                        _this._post({
                            type: RESPONSE,
                            jobId: jobId,
                            error: utils_1.toInvokeError(error || {
                                message: "Error encountered at method " + methodName
                            })
                        });
                    }
                });
            }
        };
        RemoteClient.prototype._onOpenPortMessage = function (message) {
            new RemoteClient(message.port, { client: this._client });
        };
        RemoteClient.prototype._onOnMessage = function (message) {
            var port = message.port;
            var handle = this._client.on(message.eventType, function (event) {
                port.postMessage(event);
            });
            var closeHandle = events_1.on(message.port, "message", function (event) {
                var message = utils_1.receiveMessage(event);
                if (message.type === utils_1.MessageType.CLOSE) {
                    closeHandle.remove();
                    handle.remove();
                    port.close();
                }
            });
        };
        RemoteClient.prototype._onResponseMessage = function (message) {
            if (this._frameTask) {
                this._responseQueue.push(message);
            }
            else {
                this._handleResponse(message);
            }
        };
        RemoteClient.prototype._update = function (budget) {
            while (!budget.done && this._responseQueue.length > 0) {
                this._handleResponse(this._responseQueue.shift());
                budget.madeProgress();
            }
        };
        RemoteClient.prototype._handleResponse = function (message) {
            var _a;
            var jobId = message.jobId, error = message.error, data = message.data;
            var outJobs = this._outJobs;
            if (!outJobs.has(jobId)) {
                return;
            }
            var job = outJobs.get(jobId);
            outJobs.delete(jobId);
            (_a = job.abortHandle) === null || _a === void 0 ? void 0 : _a.remove();
            if (error) {
                job.reject(EsriError.fromJSON(JSON.parse(error)));
            }
            else {
                job.resolve(data);
            }
        };
        RemoteClient.prototype._post = function (message, data, transferList) {
            return utils_1.postMessage(this._port, message, data, transferList);
        };
        RemoteClient.clients = new Map();
        return RemoteClient;
    }());
    return RemoteClient;
});

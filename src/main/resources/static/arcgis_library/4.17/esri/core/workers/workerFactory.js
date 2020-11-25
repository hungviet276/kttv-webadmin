// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../config ../../intl ../has ../Logger ../promiseUtils ./loaderConfig ./utils ./WorkerFallback".split(" "),function(A,f,c,h,r,a,v,w,t,l,g){function u(b){return c.__awaiter(this,void 0,void 0,function(){return c.__generator(this,function(f){return[2,w.create(function(f){function m(k){if(k=l.receiveMessage(k))switch(k.type){case x:k=b;var g=h.workers.loaderUrl||t.DEFAULT_LOADER_URL,d;null!=h["default"]?(d=c.__assign({},h),delete d["default"],d=JSON.parse(JSON.stringify(d))):
d=JSON.parse(JSON.stringify(h));d.locale=r.getLocale();d.has={"csp-restrictions":a("csp-restrictions"),"esri-2d-debug":0,"esri-2d-update-debug":a("esri-2d-update-debug"),"esri-atomics":a("esri-atomics"),"esri-secure-context":a("esri-secure-context"),"esri-shared-array-buffer":a("esri-shared-array-buffer"),"esri-tiles-debug":a("esri-tiles-debug"),"esri-webgl-max-texture-size":a("esri-webgl-max-texture-size"),"esri-webgl-texture-float":a("esri-webgl-texture-float"),"esri-workers-arraybuffer-transfer":a("esri-workers-arraybuffer-transfer"),
"host-webworker":1};var e=h.workers.loaderConfig,e=t.default({baseUrl:e.baseUrl,locale:r.getLocale(),has:c.__assign({"csp-restrictions":a("csp-restrictions"),"dojo-test-sniff":0,"host-webworker":1},e.has),map:c.__assign({},e.map),paths:c.__assign({},e.paths),packages:e.packages||[]});k.postMessage({type:y,configure:{esriConfig:d,loaderUrl:g,loaderConfig:e}});break;case z:b.removeEventListener("message",m),b.removeEventListener("error",n),f(b)}}function n(a){a.preventDefault();b.removeEventListener("message",
m);b.removeEventListener("error",n);p.warn("Failed to create Worker. Fallback to execute module in main thread",a);b=new g;b.addEventListener("message",m);b.addEventListener("error",n)}b.addEventListener("message",m);b.addEventListener("error",n)})]})})}Object.defineProperty(f,"__esModule",{value:!0});f.createWorker=void 0;var p=v.getLogger("esri.core.workers");a.add("esri-workers-arraybuffer-transfer",!a("safari")||12<=a("safari"));var z=l.MessageType.CONFIGURED,y=l.MessageType.CONFIGURE,x=l.MessageType.HANDSHAKE,
q;try{q=URL.createObjectURL(new Blob(['var globalId\x3d0,outgoing\x3dnew Map,configured\x3d!1,HANDSHAKE\x3d0,CONFIGURE\x3d1,CONFIGURED\x3d2,OPEN\x3d3,OPENED\x3d4,RESPONSE\x3d5,INVOKE\x3d6,ABORT\x3d7;function createAbortError(){var error\x3dnew Error("Aborted");return error.name\x3d"AbortError",error}function receiveMessage(event){return event\x26\x26event.data?"string"\x3d\x3dtypeof event.data?JSON.parse(event.data):event.data:null}function invokeStaticMessage(methodName,data,options){var signal\x3doptions\x26\x26options.signal,jobId\x3dglobalId++;return new Promise((function(resolve,reject){if(signal){if(signal.aborted)return reject(createAbortError());signal.addEventListener("abort",(function(){outgoing.get(jobId)\x26\x26(outgoing.delete(jobId),self.postMessage({type:ABORT,jobId:jobId}),reject(createAbortError()))}))}outgoing.set(jobId,{resolve:resolve,reject:reject}),self.postMessage({type:INVOKE,jobId:jobId,methodName:methodName,abortable:null!\x3dsignal,data:data})}))}function messageHandler(event){var message\x3dreceiveMessage(event);if(message){var jobId\x3dmessage.jobId;switch(message.type){case CONFIGURE:var configuration\x3dmessage.configure;if(configured)return;configured\x3d!0,self.dojoConfig\x3dconfiguration.loaderConfig,self.importScripts(configuration.loaderUrl),"function"\x3d\x3dtypeof require.config\x26\x26require.config(configuration.loaderConfig),self.esriConfig\x3dconfiguration.esriConfig,self.postMessage({type:CONFIGURED});break;case OPEN:var modulePath\x3dmessage.modulePath;require(["esri/core/workers/RemoteClient"],(function(RemoteClient){RemoteClient.loadWorker(modulePath).then((function(Module){return Module||new Promise((function(resolve){require([modulePath],resolve)}))})).then((function(Module){var port\x3dRemoteClient.connect(Module);self.postMessage({type:OPENED,jobId:jobId,data:port},[port])}))}));break;case RESPONSE:if(outgoing.has(jobId)){var deferred\x3doutgoing.get(jobId);outgoing.delete(jobId),message.error?deferred.reject(JSON.parse(message.error)):deferred.resolve(message.data)}}}}self.addEventListener("message",messageHandler),self.postMessage({type:HANDSHAKE});'],
{type:"text/javascript"}))}catch(b){}f.createWorker=function(){return c.__awaiter(this,void 0,void 0,function(){var b;return c.__generator(this,function(c){if(!a("esri-workers"))return[2,u(new g)];if(q)try{b=new Worker(q)}catch(B){p.warn("Failed to create Worker. Fallback to execute module in main thread",event),b=new g}else p.warn("Failed to create Worker. Fallback to execute module in main thread",event),b=new g;return[2,u(b)]})})}});
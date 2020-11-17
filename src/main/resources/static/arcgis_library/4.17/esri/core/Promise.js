// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ./Accessor ./maybe ./promiseUtils ./accessorSupport/decorators/subclass".split(" "),function(g,e,f,k,l,d,h){Object.defineProperty(e,"__esModule",{value:!0});e.EsriPromise=e.EsriPromiseMixin=void 0;var n=function(){function b(c){var a=this;this.instance=c;this._resolver=d.createDeferred();this._status=0;this._resolvingPromises=[];this._resolver.promise.then(function(){a._status=1;a._cleanUp()},function(){a._status=2;a._cleanUp()})}b.prototype.addResolvingPromise=function(c){this._resolvingPromises.push(c);
this._tryResolve()};b.prototype.isResolved=function(){return 1===this._status};b.prototype.isRejected=function(){return 2===this._status};b.prototype.isFulfilled=function(){return 0!==this._status};b.prototype.abort=function(){this._resolver.reject(d.createAbortError())};b.prototype.when=function(c,a){return this._resolver.promise.then(c,a)};b.prototype._cleanUp=function(){this._allPromise=this._resolvingPromises=this._allPromise=null};b.prototype._tryResolve=function(){var c=this;if(!this.isFulfilled()){var a=
d.createDeferred(),m=f.__spreadArrays(this._resolvingPromises,[l.assumeNonNull(a.promise)]),b=this._allPromise=d.all(m);b.then(function(){c.isFulfilled()||c._allPromise!==b||c._resolver.resolve(c.instance)},function(a){c.isFulfilled()||c._allPromise!==b||d.isAbortError(a)||c._resolver.reject(a)});a.resolve()}};return b}();e.EsriPromiseMixin=function(b){return function(c){function a(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];a=c.apply(this,a)||this;a._promiseProps=new n(a);a.addResolvingPromise(d.resolve());
return a}f.__extends(a,c);a.prototype.isResolved=function(){return this._promiseProps.isResolved()};a.prototype.isRejected=function(){return this._promiseProps.isRejected()};a.prototype.isFulfilled=function(){return this._promiseProps.isFulfilled()};a.prototype.when=function(a,b){var c=this;return d.create(function(a,b){c._promiseProps.when(a,b)}).then(a,b)};a.prototype.catch=function(a){return this.when(null,a)};a.prototype.addResolvingPromise=function(a){a&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in
a?a.when():a)};return a=f.__decorate([h.subclass("esri.core.Promise")],a)}(b)};g=function(b){function c(){return null!==b&&b.apply(this,arguments)||this}f.__extends(c,b);return c=f.__decorate([h.subclass("esri.core.Promise")],c)}(e.EsriPromiseMixin(k));e.EsriPromise=g});
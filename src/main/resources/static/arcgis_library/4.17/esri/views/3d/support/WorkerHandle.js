// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Logger ../../../core/promiseUtils ../../../core/workers".split(" "),function(g,f,h,k,c,l){Object.defineProperty(f,"__esModule",{value:!0});f.WorkerHandle=void 0;var m=k.getLogger("esri.views.3d.support.WorkerHandle");g=function(){function b(d,a,b,e){var c=this;void 0===e&&(e={});this._methodName=a;this._promise=l.open(d,h.__assign(h.__assign({},e),{scheduler:b})).then(function(a){void 0===c._thread?(c._thread=a,c._promise=null):a.close()});this._promise.catch(function(a){return m.error("Failed to initialize "+
d+" worker: "+a)})}b.prototype.destroy=function(){this._thread&&(this._thread.close(),this._thread=null);this._promise=null};b.prototype.invoke=function(d,a){var b=this;void 0===a&&(a=null);if(this._thread){var e=this.getTransferList(d);return this._thread.invoke(this._methodName,d,{transferList:e,signal:a})}return this._promise?this._promise.then(function(){c.throwIfAborted(a);return b.invoke(d,a)}):c.reject(null)};b.prototype.broadcast=function(b,a){var d=this;return this._thread?c.all(this._thread.broadcast(a,
b)).then(function(){}):this._promise?this._promise.then(function(){return d.broadcast(b,a)}):c.reject()};Object.defineProperty(b.prototype,"promise",{get:function(){return this._promise},enumerable:!1,configurable:!0});return b}();f.WorkerHandle=g});
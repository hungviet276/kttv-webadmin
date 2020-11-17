// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/Evented ../../../../../core/maybe ../../../../../core/accessorSupport/diffUtils".split(" "),function(e,c,d,g,h,k){Object.defineProperty(c,"__esModule",{value:!0});c.DataTileSource=c.DataTileSubscription=void 0;var f=function(){function a(b){this._abortController=new AbortController;this.requests={pending:[],done:[]};this.tile=b}Object.defineProperty(a.prototype,"signal",{get:function(){return this._abortController.signal},enumerable:!1,configurable:!0});
a.prototype.add=function(b){this.requests.done.push(b);b.request.end&&(this.resolved=!0)};a.prototype.abort=function(){this._abortController.abort()};return a}();c.DataTileSubscription=f;e=function(){function a(b){this.events=new g;this._subscriptions=new Map;this._serviceQueryInfo={outSpatialReference:b.outSR};this._serviceInfo=b.serviceInfo;this._onRequest=b.onRequest}a.prototype.queryLastEditDate=function(){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(b){throw Error("Service does not support query type");
})})};a.prototype.query=function(b,a){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(b){throw Error("Service does not support query");})})};Object.defineProperty(a.prototype,"geometryType",{get:function(){return this._serviceInfo.geometryType},enumerable:!1,configurable:!0});a.prototype.update=function(b){k.diff(b,this._sourceQueryInfo)&&(this._sourceQueryInfo=b)};a.prototype.updateSubscriptions=function(){};a.prototype.setViewState=function(b){};a.prototype.subscribe=
function(b){var a=new f(b);this._subscriptions.set(b.id,a)};a.prototype.unsubscribe=function(b){var a=this.get(b.id);h.isSome(a)&&a.abort();this._subscriptions.delete(b.id)};a.prototype.pause=function(){};a.prototype.resume=function(){};a.prototype.get=function(b){return this._subscriptions.has(b)?this._subscriptions.get(b):null};a.prototype.enableEvent=function(b,a){};return a}();c.DataTileSource=e});
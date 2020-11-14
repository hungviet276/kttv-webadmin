// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Promise ../../../../core/promiseUtils ../../../../core/workers ../../../../core/accessorSupport/decorators".split(" "),function(d,k,a,l,e,m,f){Object.defineProperty(k,"__esModule",{value:!0});d=function(d){function b(c){c=d.call(this,c)||this;c._startupResolver=e.createResolver();c.isReady=!1;return c}a.__extends(b,d);b.prototype.initialize=function(){this._controller=e.createAbortController();this.addResolvingPromise(this._startWorker(this._controller.signal))};
b.prototype.destroy=function(){this._controller.abort();this._connection&&this._connection.close()};Object.defineProperty(b.prototype,"tileRenderer",{set:function(c){this.client.tileRenderer=c},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"closed",{get:function(){return this._connection.closed},enumerable:!1,configurable:!0});b.prototype.startup=function(c,h,b){return a.__awaiter(this,void 0,void 0,function(){var g,e,d,f;return a.__generator(this,function(a){switch(a.label){case 0:return[4,
this.when()];case 1:return a.sent(),g=this._controller.signal,e=Array.isArray(b.source)?{transferList:b.source,signal:g}:void 0,d=c.tileInfo.toJSON(),f={service:b,config:h,tileInfo:d},[4,this._connection.invoke("startup",f,e)];case 2:return a.sent(),this._startupResolver.resolve(),this._set("isReady",!0),[2]}})})};b.prototype.updateTiles=function(c){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];
case 1:return a.sent(),[2,e.ignoreAbortErrors(this._connection.invoke("updateTiles",c))]}})})};b.prototype.update=function(c,h){return a.__awaiter(this,void 0,void 0,function(){var b;return a.__generator(this,function(a){switch(a.label){case 0:return b={config:c,pause:h},[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("update",b)]}})})};b.prototype.invalidate=function(c){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,
this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("invalidate",c)]}})})};b.prototype.resume=function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,e.ignoreAbortErrors(this._connection.invoke("controller.resume"))]}})})};b.prototype.setHighlight=function(c){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,
this._startupResolver.promise];case 1:return a.sent(),[2,e.ignoreAbortErrors(this._connection.invoke("controller.setHighlight",c))]}})})};b.prototype.refresh=function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,e.ignoreAbortErrors(this._connection.invoke("controller.refresh"))]}})})};b.prototype.setViewState=function(c){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,
function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,e.ignoreAbortErrors(this._connection.invoke("setViewState",c.toJSON()))]}})})};b.prototype.queryFeatures=function(c,b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.queryFeatures",c.toJSON(),b)]}})})};b.prototype.queryObjectIds=function(c,
b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.queryObjectIds",c.toJSON(),b)]}})})};b.prototype.queryFeatureCount=function(c,b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.queryFeatureCount",
c.toJSON(),b)]}})})};b.prototype.queryExtent=function(c,b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){return[2,this._connection.invoke("controller.queryExtent",c.toJSON(),b)]})})};b.prototype.queryLatestObservations=function(c,b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.queryLatestObservations",
c.toJSON(),b)]}})})};b.prototype.queryStatistics=function(c){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.queryStatistics",c)]}})})};b.prototype.getObjectId=function(c){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),
[2,this._connection.invoke("controller.getObjectId",c)]}})})};b.prototype.getDisplayId=function(c){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.getDisplayId",c)]}})})};b.prototype.getFeature=function(c){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];
case 1:return a.sent(),[2,this._connection.invoke("controller.getFeature",c)]}})})};b.prototype.getAggregate=function(c){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.getAggregate",c)]}})})};b.prototype.getAggregateValueRanges=function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,
this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.getAggregateValueRanges")]}})})};b.prototype.mapValidDisplayIds=function(b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.mapValidDisplayIds",b)]}})})};b.prototype.onEdits=function(b){return a.__awaiter(this,void 0,void 0,function(){var c,g,d;
return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),c=b.addedFeatures,g=b.deletedFeatures,d=b.updatedFeatures,[2,e.ignoreAbortErrors(this._connection.invoke("controller.onEdits",{addedFeatures:c,deletedFeatures:g,updatedFeatures:d}))]}})})};b.prototype.enableEvent=function(b,d){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];
case 1:return a.sent(),[2,e.ignoreAbortErrors(this._connection.invoke("controller.enableEvent",{name:b,value:d}))]}})})};b.prototype._startWorker=function(b){return a.__awaiter(this,void 0,void 0,function(){var c,d;return a.__generator(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),c=this,[4,m.open("Pipeline",{client:this.client,strategy:"dedicated",signal:b})];case 1:return c._connection=a.sent(),[3,3];case 2:return d=a.sent(),e.throwIfNotAbortError(d),[3,3];case 3:return[2]}})})};
a.__decorate([f.property()],b.prototype,"isReady",void 0);a.__decorate([f.property()],b.prototype,"client",void 0);a.__decorate([f.property()],b.prototype,"tileRenderer",null);return b=a.__decorate([f.subclass("esri.views.2d.layers.support.FeatureLayerProxy")],b)}(l.EsriPromise);k.default=d});
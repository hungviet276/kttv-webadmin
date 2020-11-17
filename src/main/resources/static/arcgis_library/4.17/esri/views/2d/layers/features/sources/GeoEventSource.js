// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/has ../../../../../core/maybe ../../../../../core/libs/rbush/rbush ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/OptimizedGeometry ../../../../../layers/graphics/data/StreamFeatureManager ../../../../../layers/graphics/sources/connections/GeoEventConnection ../../../../../layers/graphics/sources/connections/WebSocketConnection ./DataTileSource ../support/FeatureSetReaderJSON".split(" "),function(q,n,g,J,f,u,l,
r,v,w,x,y,t){function z(b,a,d,c,h,e,k){var f=0===b.path.indexOf("wss://")||0===b.path.indexOf("ws://");b={source:b,sourceSpatialReference:a,spatialReference:d,geometryType:c,filter:h,maxReconnectionAttempts:e,maxReconnectionInterval:k};return f?new x.WebSocketConnection(b):new w.default(b)}function A(b,a){var d=b.weakClone(),c=l.quantizeX(a,b.geometry.coords[0]);b=l.quantizeY(a,b.geometry.coords[1]);d.geometry=new r.default([],[c,b]);return d}function B(b){switch(b){case "esriGeometryPoint":return A;
default:return function(a,d){var c=a.weakClone(),h=new r.default;a=l.quantizeOptimizedGeometry(h,a.geometry,!1,!1,b,d,!1,!1);c.geometry=a;return c}}}function C(b){switch(b){case "esriGeometryPoint":return function(a){return{minX:a.geometry.coords[0],minY:a.geometry.coords[1],maxX:a.geometry.coords[0],maxY:a.geometry.coords[1]}};default:return function(a){var d=Infinity,c=Infinity,b=-Infinity,e=-Infinity;a.geometry.forEachVertex(function(a,h){d=Math.min(d,a);c=Math.min(c,h);b=Math.max(b,a);e=Math.max(e,
h)});return{minX:d,minY:c,maxX:b,maxY:e}}}}function m(b,a){a=u(9,C(a));a.load(b);return a}function p(b,a){return b.search({minX:a.bounds[0],minY:a.bounds[1],maxX:a.bounds[2],maxY:a.bounds[3]})}Object.defineProperty(n,"__esModule",{value:!0});n.GeoEventSource=void 0;var D=function(){function b(a,d){this.onUpdate=a;this._geometryType=d;this._objectIdToFeature=new Map}Object.defineProperty(b.prototype,"_features",{get:function(){var a=[];this._objectIdToFeature.forEach(function(d){return a.push(d)});
return a},enumerable:!1,configurable:!0});b.prototype.add=function(a){this._objectIdToFeature.set(a.objectId,a);this._index=null};b.prototype.get=function(a){return this._objectIdToFeature.has(a)?this._objectIdToFeature.get(a):null};b.prototype.forEach=function(a){this._objectIdToFeature.forEach(a)};b.prototype.search=function(a){this._index||(this._index=m(this._features,this._geometryType));return p(this._index,a)};b.prototype.removeById=function(a){var d=this._objectIdToFeature.get(a);return d?
(this._objectIdToFeature.delete(a),this._index=null,d):null};b.prototype.update=function(a,d){this.onUpdate(a,d)};Object.defineProperty(b.prototype,"size",{get:function(){return this._objectIdToFeature.size},enumerable:!1,configurable:!0});return b}();q=function(b){function a(a){var c=b.call(this,a)||this;c.type="geoevent";c._dataReceiveEventEnabled=!1;c._updateInfo={websocket:0,client:0};var d=a.outSR,e=a.serviceInfo,f=e.geometryType,g=e.objectIdField,E=e.timeInfo,l=e.purgeOptions,F=e.source,G=e.spatialReference,
H=e.serviceFilter,I=e.maxReconnectionAttempts,n=e.maxReconnectionInterval,e=new D(c._onUpdate.bind(c),f),g=new v.default(e,g,E,l),d=z(F,G,d,f,H,I,n);c._store=e;c._manager=g;c._connection=d;c._quantize=B(f);c._handles=[c._connection.on("feature",function(a){return c._onFeature(a)}),c._connection.watch("connectionStatus",function(a){return c.events.emit("connectionStatus",a)}),c._connection.watch("errorString",function(a){return c.events.emit("errorString",a)})];var m=performance.now();c._updateIntervalId=
setInterval(function(){var d=performance.now(),b=d-m;2500<b&&(m=d,d=Math.round(c._updateInfo.client/(b/1E3)),b=Math.round(c._updateInfo.websocket/(b/1E3)),c._updateInfo.client=0,c._updateInfo.websocket=0,c.events.emit("updateRate",{client:d,websocket:b}));a.canAcceptRequest()&&c._manager.checkForUpdates()},16);return c}g.__extends(a,b);a.prototype.destroy=function(){clearInterval(this._updateIntervalId);this._handles.forEach(function(a){return a.remove()});this._connection.destroy()};a.prototype._fetchDataTile=
function(){};a.prototype.enableEvent=function(a,c){"data-received"===a&&(this._dataReceiveEventEnabled=c)};Object.defineProperty(a.prototype,"updating",{get:function(){return!1},enumerable:!1,configurable:!0});a.prototype.subscribe=function(a){b.prototype.subscribe.call(this,a);var c=this._getTileFeatures(a);this._onRequest({tile:a,id:a.key.id,features:c,end:!0},"new")};a.prototype.unsubscribe=function(a){b.prototype.unsubscribe.call(this,a)};a.prototype.forEachRequest=function(a,c){var b=this._subscriptions.get(a),
d=b.tile,b=b.signal;a={tile:d,id:a,features:this._getTileFeatures(d),end:!0};c(a,{signal:b})};a.prototype.resend=function(a){return g.__awaiter(this,void 0,void 0,function(){var b=this;return g.__generator(this,function(c){this._subscriptions.forEach(function(c){c=c.tile;c={tile:c,id:c.id,features:b._getTileFeatures(c),end:!0};b._onRequest(c,"update",a)});return[2]})})};a.prototype._getTileFeatures=function(a){var c=this,b=this._store.search(a).map(function(b){return c._quantize(b,a.transform)});
return t.FeatureSetReaderJSON.fromOptimizedFeatures(b,this.geometryType,a.transform)};a.prototype._onFeature=function(a){this._updateInfo.websocket++;try{this._dataReceiveEventEnabled&&this.events.emit("feature",a);var b=l.convertFromFeature(a,this.geometryType,!1,!1,this._serviceInfo.objectIdField);this._manager.add(b)}catch(h){}};a.prototype._onUpdate=function(a,b){return g.__awaiter(this,void 0,void 0,function(){var c,d,k=this;return g.__generator(this,function(e){c=f.andThen(a,function(a){return m(a,
k.geometryType)});d=f.andThen(b,function(a){return m(a,k.geometryType)});f.isSome(a)&&(this._updateInfo.client+=a.length);this._subscriptions.forEach(function(a,b){var e=a.tile;a=f.andThen(c,function(a){return p(a,e)});a=f.andThen(a,function(a){return a.map(function(a){return k._quantize(a,e.transform)})});a=f.andThen(a,function(a){return t.FeatureSetReaderJSON.fromOptimizedFeatures(a,k.geometryType,e.transform)});var g=f.andThen(d,function(a){return p(a,e)}),g=f.andThen(g,function(a){return a.map(function(a){return a.objectId})});
k._onRequest({tile:e,id:b,features:a,remove:f.unwrapOr(g,[]),end:!0},"update")});return[2]})})};return a}(y.DataTileSource);n.GeoEventSource=q});
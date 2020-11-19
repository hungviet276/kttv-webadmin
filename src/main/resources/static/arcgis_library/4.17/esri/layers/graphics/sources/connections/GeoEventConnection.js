// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../geometry ../../../../request ../../../../core/Error ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/decorators ../../../FeatureLayer ./WebSocketConnection ../../../../tasks/operations/query ../../../../tasks/support/Query".split(" "),function(q,r,d,t,w,n,x,k,y,z,A,B,u,C){Object.defineProperty(r,"__esModule",{value:!0});var m=x.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"),
D={maxQueryDepth:5,maxRecordCountFactor:3};q=function(q){function g(a){return q.call(this,d.__assign(d.__assign({},D),a))||this}d.__extends(g,q);g.prototype._open=function(){return d.__awaiter(this,void 0,void 0,function(){var a,c,b,e,f;return d.__generator(this,function(h){switch(h.label){case 0:return[4,this._fetchServiceDefinition(this._config.source)];case 1:return a=h.sent(),a.timeInfo.trackIdField||m.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect."),
[4,this._fetchWebSocketUrl(a.streamUrls,this._config.spatialReference)];case 2:return c=h.sent(),this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),[4,this._buddyServicesQuery];case 3:return h.sent(),[4,this._tryCreateWebSocket(c)];case 4:return h.sent(),b=this._config,e=b.filter,f=b.outFields,this.destroyed||this._setFilter(e,f),[2]}})})};g.prototype._onMessage=function(a){var c;try{c=this._enrich(JSON.parse(a.data)),this._featureZScaler&&this._featureZScaler(c.geometry)}catch(b){m.error(new n("geoevent-connection",
"Failed to parse message",b));return}this.onFeature(c)};g.prototype._fetchServiceDefinition=function(a){return d.__awaiter(this,void 0,void 0,function(){var c,b,e,f;return d.__generator(this,function(h){switch(h.label){case 0:return c={f:"json"},b=w(a.path,{query:c,responseType:"json"}),[4,b];case 1:return e=h.sent(),this._serviceDefinition=f=e.data,[2,f]}})})};g.prototype._fetchWebSocketUrl=function(a,c){return d.__awaiter(this,void 0,void 0,function(){var b,e,f,h;return d.__generator(this,function(d){b=
a[0];e=b.urls;f=b.token;h=this._inferWebSocketBaseUrl(e);return[2,h+"/subscribe?outSR\x3d"+c.wkid+(f?"\x26token\x3d"+f:"")]})})};g.prototype._inferWebSocketBaseUrl=function(a){if(1===a.length)return a[0];for(var c=0;c<a.length;c++){var b=a[c];if(-1!==b.indexOf("wss"))return b}m.error(new n("geoevent-connection","Unable to infer WebSocket url",a));return null};g.prototype._setFilter=function(a,c){return d.__awaiter(this,void 0,void 0,function(){var b,e,f,h,g,v,p=this;return d.__generator(this,function(d){b=
this._websocket;if(k.isNone(b)||k.isNone(a)&&k.isNone(c))return[2];e=JSON.stringify({filter:this._serializeFilter(a,c)});f=!1;h=y.createResolver();g=function(){f||(p.destroyed||p._websocket!==b||m.error(new n("geoevent-connection","Server timed out when setting filter")),h.reject())};v=function(a){a=JSON.parse(a.data);a.filter&&(a.error&&(m.error(new n("geoevent-connection","Failed to set service filter",a.error)),p._set("errorString","Could not set service filter - "+a.error),h.reject(a.error)),
b.onmessage=p._onMessage.bind(p),f=!0,h.resolve())};b.onmessage=v;b.send(e);setTimeout(g,1E4);return[2,h.promise]})})};g.prototype._serializeFilter=function(a,c){var b={};if(k.isNone(a)&&k.isNone(c))return b;if(k.isSome(a)&&a.geometry)try{var e=t.fromJSON(a.geometry);if("extent"!==e.type)throw new n("Expected extent but found type "+e.type);b.geometry=JSON.stringify(e.shiftCentralMeridian())}catch(f){m.error(new n("geoevent-connection","Encountered an error when setting connection geometryDefinition",
f))}k.isSome(a)&&a.where&&"1 \x3d 1"!==a.where&&(b.where=a.where);k.isSome(c)&&(b.outFields=c.join(","));return b};g.prototype._enrich=function(a){if(!this._relatedFeatures)return a;var c=a.attributes[this._serviceDefinition.relatedFeatures.joinField];if(!this._relatedFeatures.has(c))return m.warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",a),a;var b=this._relatedFeatures.get(c),c=b.attributes,b=b.geometry,e;for(e in c)a.attributes[e]=c[e];b&&(a.geometry=
b);a.geometry||a.centroid||m.error(new n("geoevent-connection","Found malformed feature - no geometry found",a));return a};g.prototype._queryBuddyServices=function(){return d.__awaiter(this,void 0,void 0,function(){var a,c,b,e,f,h,g,k,p,l;return d.__generator(this,function(d){switch(d.label){case 0:return d.trys.push([0,3,,4]),a=this._serviceDefinition,c=a.relatedFeatures,b=a.keepLatestArchive,e=this._queryRelatedFeatures(c),f=this._queryArchive(b),[4,e];case 1:return d.sent(),[4,f];case 2:h=d.sent();
if(!h)return[2];g=0;for(k=h.features;g<k.length;g++)p=k[g],this.onFeature(this._enrich(p));return[3,4];case 3:return l=d.sent(),m.error(new n("geoevent-connection","Encountered an error when querying buddy services",{error:l})),[3,4];case 4:return[2]}})})};g.prototype._queryRelatedFeatures=function(a){return d.__awaiter(this,void 0,void 0,function(){var c;return d.__generator(this,function(b){switch(b.label){case 0:return a?[4,this._queryBuddy(a.featuresUrl)]:[2];case 1:return c=b.sent(),this._addRelatedFeatures(c),
[2]}})})};g.prototype._queryArchive=function(a){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(c){return a?[2,this._queryBuddy(a.featuresUrl)]:[2,void 0]})})};g.prototype._queryBuddy=function(a){return d.__awaiter(this,void 0,void 0,function(){var c,b,e,f,h,g,m,p,l,n;return d.__generator(this,function(d){switch(d.label){case 0:return c=new A({url:a}),[4,c.load()];case 1:return b=d.sent().capabilities,e=b.query.supportsMaxRecordCountFactor,f=b.query.supportsPagination,
h=b.query.supportsCentroid,g=this._config.maxRecordCountFactor,m=c.capabilities.query.maxRecordCount,p=e?m*g:m,l=new C,l.outFields=k.unwrapOr(this._config.outFields,["*"]),l.where=k.unwrapOr(k.get(this._config.filter,"where"),"1\x3d1"),l.returnGeometry=!0,l.returnExceededLimitFeatures=!0,l.outSpatialReference=t.SpatialReference.fromJSON(this._config.spatialReference),h&&(l.returnCentroid=!0),e&&(l.maxRecordCountFactor=g),f?(l.num=p,c.destroy(),[2,this._queryPages(a,l)]):[4,u.executeQuery(a,l,this._config.sourceSpatialReference)];
case 2:return n=d.sent(),c.destroy(),[2,n.data]}})})};g.prototype._queryPages=function(a,c,b,e){void 0===b&&(b=[]);void 0===e&&(e=0);return d.__awaiter(this,void 0,void 0,function(){var f;return d.__generator(this,function(d){switch(d.label){case 0:return c.start=e*c.num,[4,u.executeQuery(a,c,this._config.sourceSpatialReference)];case 1:f=d.sent().data;if(f.exceededTransferLimit&&e<this._config.maxQueryDepth)return f.features.forEach(function(a){return b.push(a)}),[2,this._queryPages(a,c,b,e+1)];
b.forEach(function(a){return f.features.push(a)});return[2,f]}})})};g.prototype._addRelatedFeatures=function(a){var c=new Map,b=this._serviceDefinition.relatedFeatures.joinField,d=0;for(a=a.features;d<a.length;d++){var f=a[d];c.set(f.attributes[b],f)}this._relatedFeatures=c};return g=d.__decorate([z.subclass("esri.layers.graphics.sources.connections.GeoEventConnection")],g)}(B.WebSocketConnection);r.default=q});
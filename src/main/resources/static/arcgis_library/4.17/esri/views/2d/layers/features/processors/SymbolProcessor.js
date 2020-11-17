// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/Error ../../../../../core/has ../../../../../core/Logger ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators ../../../../../core/accessorSupport/diffUtils ../../../../../geometry/SpatialReference ../../../engine/webgl/definitions ../../../engine/webgl/collisions/CollisionGrid ../../../engine/webgl/mesh/factories/matcherUtils ../../../engine/webgl/mesh/factories/WGLMeshFactory ../../../engine/webgl/mesh/templates/WGLTemplateStore ../../../engine/webgl/util/BidiText ../textUtils ./BaseProcessor ../support/AttributeStore".split(" "),
function(w,x,g,P,C,D,k,n,E,y,F,G,H,I,J,K,L,M,N,O){Object.defineProperty(x,"__esModule",{value:!0});D.getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");w=function(t){function c(){var d=null!==t&&t.apply(this,arguments)||this;d.type="symbol";return d}g.__extends(c,t);c.prototype.destroy=function(){};Object.defineProperty(c.prototype,"supportsTileUpdates",{get:function(){return!0},enumerable:!1,configurable:!0});c.prototype.update=function(d,a){return g.__awaiter(this,void 0,void 0,
function(){var b,f;return g.__generator(this,function(c){b=a.schema.processors[0];if("symbol"!==b.type)return[2];f=y.diff(this._schema,b);if(!y.hasDiff(f,"mesh"))return[2];C("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",f);d.mesh=!0;d.why.mesh.push("Symbology changed");this._schema=b;this._factory=this._createFactory(b);this._factory.update(b,this.tileStore.tileScheme.tileInfo);return[2]})})};c.prototype.onTileData=function(d,a,b){n.throwIfAborted(b);return this._onTileData(d,
a,b)};c.prototype.onTileError=function(d,a,b){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:d.id,error:a},{signal:b.signal})};c.prototype._createFactory=function(d){var a=this,b=this.service,f=b.geometryType,c=b.objectIdField,b=b.fields,e=F.fromJSON(this.spatialReference),b={geometryType:f,fields:b,spatialReference:e};this._store=e=new K.WGLTemplateStore(function(b,d){return a.remoteClient.invoke("tileRenderer.getMaterialItems",b,d)},!1);this._matcher=I.createMatcher(d.mesh.matcher,
e,b);return new J.WGLMeshFactory(f,c,e)};c.prototype._onTileData=function(d,a,b){return g.__awaiter(this,void 0,void 0,function(){var f,c,e,l,m,r,u,v,z,A,p,B;return g.__generator(this,function(q){switch(q.label){case 0:f=a.type;c=a.addOrUpdate;e=a.remove;l=a.end;if(!c)return m={type:f,addOrUpdate:null,remove:e,clear:!1,end:l},[2,this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:d.id,data:m},b)];r=this._processFeatures(d,c,b);u=b.signal;q.label=1;case 1:return q.trys.push([1,3,,4]),[4,r];
case 2:return v=q.sent(),z=k.andThen(v,function(a){return a.message}),A=k.andThen(v,function(a){return a.transferList})||[],m={type:f,addOrUpdate:z,remove:e,clear:!1,end:l},p={transferList:k.unwrap(A)||[],signal:u},n.throwIfAborted(p),[2,this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:d.id,data:m},p)];case 3:return B=q.sent(),this._handleError(d,B,b),[3,4];case 4:return[2]}})})};c.prototype._processFeatures=function(d,a,b){return g.__awaiter(this,void 0,void 0,function(){var c,h,e,l,m;
return g.__generator(this,function(f){switch(f.label){case 0:if(k.isNone(a)||!a.hasFeatures)return[2,null];c={transform:d.transform,hasZ:!1,hasM:!1};h=this._factory;e={viewingMode:"",scale:d.scale};return[4,this._matcher];case 1:return l=f.sent(),n.throwIfAborted(b),m=this._getLabelInfos(d,a),[4,h.analyze(a.getCursor(),l,c,e)];case 2:return f.sent(),n.throwIfAborted(b),[2,this._writeFeatureSet(d,a,c,m,h)]}})})};c.prototype._writeFeatureSet=function(d,a,b,c,h){var e=h.createMeshData(a.getApproximateSize()),
f={viewingMode:"",scale:d.scale};for(a=a.getCursor();a.next();)try{var m=a.getDisplayId(),r=k.isSome(c)?c.get(m):null;h.writeCursor(e,a,b,f,d.level,r)}catch(u){}return this._encodeDisplayData(e)};c.prototype._encodeDisplayData=function(d){var a={},b=[];d.encode(a,b);return{message:a,transferList:b}};c.prototype._handleError=function(d,a,b){if(!n.isAbortError(a))return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:d.id,error:a.message},{signal:b.signal})};c.prototype._shouldDiscard=
function(d,a){switch(this.service.geometryType){case "esriGeometryPoint":return a=a.readLegacyPointGeometry(),!a||d.checkOverlap(a.x,a.y);case "esriGeometryPolygon":return a=a.readLegacyCentroid(),!a||d.checkOverlap(a.x,a.y);default:return!1}};c.prototype._markUsed=function(d,a){switch(this.service.geometryType){case "esriGeometryPoint":var b=a.readLegacyPointGeometry();a=b.x;b=b.y;return d.markUsed(a,b);case "esriGeometryPolygon":return b=a.readLegacyCentroid(),a=b.x,b=b.y,d.markUsed(a,b)}};c.prototype._getLabelInfos=
function(d,a){var b=k.andThen(this._schema.mesh.labels,function(a){return a.filter(function(a){var b=d.scale;return(!a.minScale||a.minScale>=b)&&(!a.maxScale||a.maxScale<=b)})});if(k.isNone(b)||0===b.length)return null;var c=new Map,h=new H.CollisionGrid(G.COLLISION_EARLY_REJECT_BUCKET_SIZE),e=a.getCursor();a=function(){var a=e.getDisplayId();if(l._shouldDiscard(h,e))return c.has(a)||c.set(a,null),"continue";for(var d=!1,f=[],g=O.isAggregateId(a),k=g&&1!==e.readAttribute("cluster_count")?"aggregate":
"feature",n=function(b){if(b.target!==k)return"continue";var c=e.getStorage(),c=g&&"feature"===k?c.getComputedStringAtIndex(e.readAttribute("referenceId"),b.fieldIndex):c.getComputedStringAtIndex(a,b.fieldIndex);if(!c)return"continue";var c=L.bidiText(c.toString()),h=c[1];l._store.getMosaicItem(b.symbol,M.codepoints(c[0])).then(function(a){f[b.index]={glyphs:a.glyphMosaicItems,rtl:h,index:b.index}});d=!0},p=0;p<b.length;p++)n(b[p]);c.set(a,f);d&&l._markUsed(h,e)};for(var l=this;e.next();)a();return c};
return c=g.__decorate([E.subclass("esri.views.2d.layers.features.processors.SymbolProcessor")],c)}(N.default);x.default=w});
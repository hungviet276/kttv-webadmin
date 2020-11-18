// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/promiseUtils ../../../../../../symbols/support/defaults ./WGLDynamicFillTemplate ./WGLDynamicLineTemplate ./WGLDynamicMarkerTemplate ./WGLDynamicTextTemplate ./WGLFillTemplate ./WGLLineTemplate ./WGLMarkerTemplate ./WGLTextTemplate ../../util/Lock ../../util/Result ../../../../layers/features/schemaUtils ../../../../layers/features/textUtils".split(" "),function(r,k,e,y,z,l,n,A,B,C,D,p,
t,m,u,v,g,q,E){function h(d,a){var b=d.length;d.push(null);a.then(function(a){return d[b]=a});return d}function w(d){return!!(d&1)}Object.defineProperty(k,"__esModule",{value:!0});k.WGLTemplateStore=k.isDynamicId=void 0;var f=z.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),x=[];k.isDynamicId=w;r=function(){function d(a,b){this._templateIdCounter=this._idCounter=1;this._idToTemplateGroup=new Map;this._symbolToTemplate=new Map;this._fetchQueue=[];this._idToResolver=new Map;
this._cimTemplateCache=new Map;this._cimAnalyses=[];this._lock=new v.default;this._fetchResource=a;this._joinOnUTurn=b}Object.defineProperty(d.prototype,"_markerError",{get:function(){return this._errorTemplates.marker[0]},enumerable:!1,configurable:!0});Object.defineProperty(d.prototype,"_fillError",{get:function(){return this._errorTemplates.fill[0]},enumerable:!1,configurable:!0});Object.defineProperty(d.prototype,"_lineError",{get:function(){return this._errorTemplates.line[0]},enumerable:!1,
configurable:!0});Object.defineProperty(d.prototype,"_textError",{get:function(){return this._errorTemplates.line[0]},enumerable:!1,configurable:!0});d.prototype.createTemplateGroup=function(a,b){this._initErrorTemplates();var c=a.hash;if(this._symbolToTemplate.has(c))return this._symbolToTemplate.get(c);var d=[];b&&this._createMeshTemplates(d,b,!0);this._createMeshTemplates(d,a,!1);a=this._createGroupId("expanded-cim"===a.type);this._idToTemplateGroup.set(a,d);this._symbolToTemplate.set(c,a);return a};
d.prototype.getTemplateGroup=function(a){return this._idToTemplateGroup.has(a)?this._idToTemplateGroup.get(a):x};d.prototype.getDynamicTemplateGroup=function(a){if(!this._idToTemplateGroup.has(a))return x;w(a)||f.error("mapview-template-store","Id "+a+" does not refer to a dynamic template");return this._idToTemplateGroup.get(a)};d.prototype.getMosaicItem=function(a,b){var c=this,d=this._createTemplateId(),e=l.create(function(a){return c._idToResolver.set(d,a)});this._fetchQueue.push({symbol:a,id:d,
glyphIds:b});return e};d.prototype.finalize=function(a){return this._fetchQueue.length||this._lock.isHeld()?v.withLock(this._lock,this._fetchAllQueuedResources.bind(this),a):l.resolve()};d.prototype._initErrorTemplates=function(){this._errorTemplates||(this._errorTemplates={fill:this._createMeshTemplates([],q.createSymbolSchema(n.errorPolygonSymbol2D),!1),marker:this._createMeshTemplates([],q.createSymbolSchema(n.errorPointSymbol2D),!1),line:this._createMeshTemplates([],q.createSymbolSchema(n.errorPolylineSymbol2D),
!1)})};d.prototype._fetchAllQueuedResources=function(a){var b=this;if(!this._fetchQueue.length)return l.resolve();var c=this._fetchQueue,d=this._cimAnalyses;this._fetchQueue=[];this._cimAnalyses=[];return l.all(d).then(function(){return b._fetchResource(c,a).then(function(a){for(var c=0;c<a.length;c++){var d=a[c],e=d.id,d=d.mosaicItem;b._idToResolver.get(e)(d);b._idToResolver.delete(e)}})}).catch(function(a){l.isAbortError(a)?b._fetchQueue=b._fetchQueue.concat(c):"worker:port-closed"!==a.name&&f.error(y("mapview-template-store",
"Unable to fetch requested texture resources",a))})};d.prototype._createGroupId=function(a){return this._idCounter++<<1|(a?1:0)};d.prototype._createTemplateId=function(){return this._templateIdCounter++};d.prototype._createSMS=function(a){return e.__awaiter(this,void 0,void 0,function(){var b;return e.__generator(this,function(c){switch(c.label){case 0:return[4,this.getMosaicItem(a)];case 1:return b=c.sent().spriteMosaicItem,g.ok(b,f)?[2,m.default.fromSimpleMarker(a,b)]:[2,this._markerError]}})})};
d.prototype._createPMS=function(a){return e.__awaiter(this,void 0,void 0,function(){var b;return e.__generator(this,function(c){switch(c.label){case 0:return[4,this.getMosaicItem(a)];case 1:return b=c.sent().spriteMosaicItem,g.ok(b,f)?[2,m.default.fromPictureMarker(a,b)]:[2,this._markerError]}})})};d.prototype._createSFS=function(a,b){return e.__awaiter(this,void 0,void 0,function(){var c;return e.__generator(this,function(d){switch(d.label){case 0:return[4,this.getMosaicItem(a)];case 1:return c=
d.sent().spriteMosaicItem,g.ok(c,f)?[2,p.default.fromSimpleFill(a,c,b)]:[2,this._fillError]}})})};d.prototype._createPFS=function(a,b){return e.__awaiter(this,void 0,void 0,function(){var c;return e.__generator(this,function(d){switch(d.label){case 0:return[4,this.getMosaicItem(a)];case 1:return c=d.sent().spriteMosaicItem,g.ok(c,f)?[2,p.default.fromPictureFill(a,c,b)]:[2,this._fillError]}})})};d.prototype._createSLS=function(a,b){return e.__awaiter(this,void 0,void 0,function(){var b;return e.__generator(this,
function(c){switch(c.label){case 0:return[4,this.getMosaicItem(a)];case 1:return b=c.sent().spriteMosaicItem,g.ok(b,f)?[2,t.default.fromSimpleLine(a,b,this._joinOnUTurn)]:[2,this._lineError]}})})};d.prototype._createLMS=function(a){return e.__awaiter(this,void 0,void 0,function(){var b;return e.__generator(this,function(c){switch(c.label){case 0:return[4,this.getMosaicItem(a)];case 1:return b=c.sent().spriteMosaicItem,g.ok(b,f)?[2,m.default.fromLineSymbolMarker(a,b)]:[2,this._markerError]}})})};d.prototype._createTS=
function(a){return e.__awaiter(this,void 0,void 0,function(){var b;return e.__generator(this,function(c){switch(c.label){case 0:return[4,this.getMosaicItem(a)];case 1:return b=c.sent().glyphMosaicItems,[2,u.default.fromText(a,b)]}})})};d.prototype._createCIMText=function(a){return e.__awaiter(this,void 0,void 0,function(){var b;return e.__generator(this,function(c){switch(c.label){case 0:return[4,this.getMosaicItem(a.cim,E.codepoints(a.text))];case 1:return b=c.sent().glyphMosaicItems,a.cim.mosaicHash=
a.materialHash,g.ok(b,f)?[2,u.default.fromCIMText(a,b)]:[2,this._textError]}})})};d.prototype._createCIMFill=function(a){return e.__awaiter(this,void 0,void 0,function(){var b;return e.__generator(this,function(c){switch(c.label){case 0:return a.cim.mosaicHash=a.materialHash,[4,this.getMosaicItem(a.cim)];case 1:return b=c.sent().spriteMosaicItem,g.ok(b,f)?[2,p.default.fromCIMFill(a,b)]:[2,this._fillError]}})})};d.prototype._createCIMLine=function(a){return e.__awaiter(this,void 0,void 0,function(){var b;
return e.__generator(this,function(c){switch(c.label){case 0:return a.cim.mosaicHash=a.materialHash,[4,this.getMosaicItem(a.cim)];case 1:return b=c.sent().spriteMosaicItem,g.ok(b,f)?[2,t.default.fromCIMLine(a,b,this._joinOnUTurn)]:[2,this._lineError]}})})};d.prototype._createCIMMarker=function(a){return e.__awaiter(this,void 0,void 0,function(){var b;return e.__generator(this,function(c){switch(c.label){case 0:return a.cim.mosaicHash=a.materialHash,[4,this.getMosaicItem(a.cim)];case 1:return b=c.sent().spriteMosaicItem,
g.ok(b,f)?[2,m.default.fromCIMMarker(a,b)]:[2,this._markerError]}})})};d.prototype._createCIM=function(a){return e.__awaiter(this,void 0,void 0,function(){var b,c,d=this;return e.__generator(this,function(e){b=a.templateHash;if(this._cimTemplateCache.has(b))return[2,this._cimTemplateCache.get(b)];switch(a.type){case "marker":c=this._createCIMMarker(a);break;case "line":c=this._createCIMLine(a);break;case "fill":c=this._createCIMFill(a);break;case "text":c=this._createCIMText(a)}c.then(function(a){return d._cimTemplateCache.set(b,
a)});return[2,c]})})};d.prototype._createDynamicCIM=function(a){var b=a.templateHash;if(this._cimTemplateCache.has(b))return this._cimTemplateCache.get(b);var c;switch(a.type){case "marker":c=C.default.fromCIMMarker(a);break;case "line":c=B.default.fromCIMLine(a);break;case "fill":c=A.default.fromCIMFill(a);break;case "text":c=D.default.fromCIMText(a)}this._cimTemplateCache.set(b,c);return c};d.prototype._createPrimitiveMeshTemplates=function(a,b,c){switch(b.type){case "esriSMS":return h(a,this._createSMS(b));
case "esriPMS":return h(a,this._createPMS(b));case "esriSFS":return h(a,this._createSFS(b,c));case "line-marker":return h(a,this._createLMS(b));case "esriPFS":return h(a,this._createPFS(b,c));case "esriSLS":return h(a,this._createSLS(b,!1));case "esriTS":return h(a,this._createTS(b));default:return f.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"),a}};d.prototype._createMeshTemplates=function(a,b,c){if(-1!==b.type.indexOf("3d"))return f.error("3D symbols are not supported with MapView"),
a;if("expanded-cim"===b.type){c=0;for(var d=b.layers;c<d.length;c++)b=d[c],"function"===typeof b.materialHash?a.push(this._createDynamicCIM(b)):h(a,this._createCIM(b));return a}if("composite-symbol"===b.type){for(var d=0,e=b.layers;d<e.length;d++)b=e[d],this._createPrimitiveMeshTemplates(a,b,c);return a}return"cim"===b.type||"label"===b.type||"web-style"===b.type?a:this._createPrimitiveMeshTemplates(a,b,c)};return d}();k.WGLTemplateStore=r});
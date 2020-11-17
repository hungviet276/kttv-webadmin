// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../Graphic ../../../core/Accessor ../../../core/Collection ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../layers/buildingSublayers/BuildingGroupSublayer ./BuildingComponentSublayerView3D ./BuildingSublayerView3D ./LayerView3D ./i3s/BuildingFilterUtil ./i3s/I3SUtil ./support/layerViewUpdatingProperties ../../layers/BuildingSceneLayerView".split(" "),
function(E,F,d,l,q,m,r,h,n,t,p,e,u,v,w,x,y,z,A,B){var C=r.getLogger("esri.views.3d.layers.BuildingSceneLayerView3D"),D=w.BuildingSublayerView3DMixin(q,u);return function(k){function b(){var a=null!==k&&k.apply(this,arguments)||this;a.sublayerViews=new m;a._abortController=n.createAbortController();a._loadingComponents=0;return a}d.__extends(b,k);Object.defineProperty(b.prototype,"filterExpression",{get:function(){var a=this.layer.activeFilterId,c=null!=a?this.layer.filters.find(function(c){return c.id===
a}):null;return(c=null!=c?c.filterBlocks.find(function(a){return"solid"===a.filterMode.type}):null)?c.filterExpression:null},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"filterExpressions",{get:function(){var a=this.layer.activeFilterId,c=null!=a?this.layer.filters.find(function(c){return c.id===a}):null;return c&&c.filterBlocks?c.filterBlocks.toArray().map(function(a){return[a.filterExpression,y.parseFilterMode(a)]}):[]},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,
"updatingProgressValue",{get:function(){var a=this.sublayerViews,c=this._loadingComponents+(a?a.length:0);return a.reduce(function(a,c){return a+c.updatingProgress},0)/c},enumerable:!1,configurable:!0});b.prototype.isUpdating=function(){return 0<this._loadingComponents||this.sublayerViews&&this.sublayerViews.some(function(a){return a.updating})};b.prototype.initialize=function(){z.checkSpatialReference(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode);this.initializeSubLayerViews(this.layer.sublayers,
this)};b.prototype.destroy=function(){this.sublayerViews&&(this.sublayerViews.forEach(function(a){return a.destroy()}),this.sublayerViews=null);this._abortController.abort();this._abortController=null};b.prototype.initializeSubLayerViews=function(a,c){var b=this,d=this,e=this.view;a.forEach(function(a){if(!a.isEmpty)if("building-group"===a.type){var f=new D({sublayer:a,view:e,parent:c});b.initializeSubLayerViews(a.sublayers,f)}else"mesh"===a.geometryType&&(b._loadingComponents++,a.load({signal:b._abortController.signal}).then(function(){var f=
new v({sublayer:a,layerView:d,view:e,parent:c});b.sublayerViews.push(f);b.handles.add([p.init(f,"updating",function(){return b.notifyChange("updating")},!0),p.init(f,"updatingProgress",function(){return b.notifyChange("updatingProgressValue")},!0)])}).catch(function(c){t.isAbortError(c)||C.error("Error while creating view for sublayer "+a.id+"\nLayer: "+b.layer.url+"\n",c)}).then(function(){b._loadingComponents--;b.notifyChange("updating");b.notifyChange("updatingProgressValue")}))})};b.prototype.getGraphicFromIntersectorMetadata=
function(a){for(var c=0,b=this.sublayerViews.items;c<b.length;c++){var d=b[c];if(d.sublayer.uid===a.sublayerUid)return d.getGraphicFromIntersectorMetadata(a)}return null};b.prototype.fetchPopupFeatures=function(a,c){return d.__awaiter(this,void 0,void 0,function(){var b;return d.__generator(this,function(d){if(!h.isSome(c)||!c.clientGraphics||0===c.clientGraphics.length)return[2,void 0];b=this._findComponent(c.clientGraphics[0].sourceLayer);return h.isNone(b)?[2,void 0]:[2,b.fetchPopupFeatures(a,
c)]})})};b.prototype.whenGraphicBounds=function(a){var c=this._findComponent(a.sourceLayer);return h.isNone(c)?n.reject():c.whenGraphicBounds(a)};b.prototype._findComponent=function(a){return this.sublayerViews.find(function(c){return a===c.sublayer})};b.prototype.highlight=function(a){a instanceof l?a=[a]:a instanceof m&&(a=a.toArray());var c=[];if(Array.isArray(a)&&0<a.length&&a[0]instanceof l){for(var b=new Map,d=0;d<a.length;d++){var e=a[d],g=b.get(e.sourceLayer);null==g&&(g=[],b.set(e.sourceLayer,
g));g.push(e)}this.sublayerViews.forEach(function(a){var d=b.get(a.sublayer);d&&c.push(a.highlight(d))})}return{remove:function(){return c.forEach(function(a){return a.remove()})},pause:function(){return c.forEach(function(a){return a.pause()})},resume:function(){return c.forEach(function(a){return a.resume()})}}};b.prototype.getUsedMemory=function(){return this.sublayerViews.reduce(function(a,b){return a+b.getUsedMemory()},0)};b.prototype.getUnloadedMemory=function(){return this.sublayerViews.reduce(function(a,
b){return a+b.getUnloadedMemory()},0)};b.prototype.ignoresMemoryFactor=function(){return!1};d.__decorate([e.property()],b.prototype,"sublayerViews",void 0);d.__decorate([e.property({readOnly:!0,dependsOn:["layer.filters","layer.activeFilterId"]})],b.prototype,"filterExpression",null);d.__decorate([e.property({readOnly:!0,dependsOn:["layer.filters","layer.activeFilterId"]})],b.prototype,"filterExpressions",null);d.__decorate([e.property(A.updatingProgress)],b.prototype,"updatingProgress",void 0);d.__decorate([e.property({readOnly:!0})],
b.prototype,"updatingProgressValue",null);return b=d.__decorate([e.subclass("esri.views.3d.layers.BuildingSceneLayerView3D")],b)}(x.LayerView3D(B))});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../request ../../../core/Collection ../../../core/Handles ../../../core/promiseUtils ../../../core/scheduling ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../geometry/Extent ../../../geometry/support/webMercatorUtils ../../../layers/support/kmlUtils ../../../support/GraphicsCollection ../engine/Bitmap ../engine/BitmapContainer ./LayerView2D ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),function(B,C,e,q,r,t,h,u,v,g,w,p,l,
k,x,y,z,m,A){return function(n){function b(){var a=null!==n&&n.apply(this,arguments)||this;a._handles=new t;a._bitmapIndex=new Map;a._mapImageContainer=new y.BitmapContainer;a._featuresMap=new Map;a.allVisiblePoints=new k.GraphicsCollection;a.allVisiblePolylines=new k.GraphicsCollection;a.allVisiblePolygons=new k.GraphicsCollection;a.allVisibleMapImages=new r;return a}e.__extends(b,n);b.prototype.hitTest=function(a,d){var c=this;if(this.suspended||!this._pointsView&&!this._polylinesView&&!this._polygonsView)return h.resolve(null);
a=[this._pointsView.hitTest(a,d),this._polylinesView.hitTest(a,d),this._polygonsView.hitTest(a,d)];return h.all(a).then(function(a){return a.filter(function(a){a&&(a.layer=c.layer,a.sourceLayer=c.layer);return!!a})[0]||null})};b.prototype.update=function(a){this._polygonsView&&this._polygonsView.processUpdate(a);this._polylinesView&&this._polylinesView.processUpdate(a);this._pointsView&&this._pointsView.processUpdate(a)};b.prototype.attach=function(){var a=this;this._handles.add([this.allVisibleMapImages.on("change",
function(d){d.added.forEach(function(c){return a._addMapImage(c)});d.removed.forEach(function(c){return a._removeMapImage(c)})})]);this.container.addChild(this._mapImageContainer);this._polygonsView=new m.default({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:function(){return a.requestUpdate()}});this.container.addChild(this._polygonsView.container);this._polylinesView=new m.default({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:function(){return a.requestUpdate()}});
this.container.addChild(this._polylinesView.container);this._pointsView=new m.default({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:function(){return a.requestUpdate()}});this.container.addChild(this._pointsView.container);this.watch("layer.visibleSublayers",function(){return a._refreshCollections()});this._fetchingPromise=this._fetchService().then(function(){a._fetchingPromise=null;a.notifyChange("updating")})};b.prototype.detach=function(){this._handles.removeAll();this._mapImageContainer.removeAllChildren();
this.container.removeAllChildren();this._bitmapIndex.clear();this._polygonsView&&(this._polygonsView.destroy(),this._polygonsView=null);this._polylinesView&&(this._polylinesView.destroy(),this._polylinesView=null);this._pointsView&&(this._pointsView.destroy(),this._pointsView=null)};b.prototype.moveStart=function(){};b.prototype.viewChange=function(){this._polygonsView.viewChange();this._polylinesView.viewChange();this._pointsView.viewChange()};b.prototype.moveEnd=function(){};b.prototype.isUpdating=
function(){return null!=this._fetchingPromise||this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating};b.prototype._addMapImage=function(a){var d=this;this.view.spatialReference.isWGS84&&q(a.href,{responseType:"image"}).then(function(c){c=c.data;var b=w.fromJSON(a.extent);p.canProject(b,d.view.spatialReference)&&(b=p.project(b,d.view.spatialReference));var f=new x.Bitmap(c);f.x=b.xmin;f.y=b.ymax;f.resolution=b.width/c.naturalWidth;f.rotation=a.rotation;d._mapImageContainer.addChild(f);
d._bitmapIndex.set(a,f)})};b.prototype._fetchService=function(){var a=this;this._handles.remove("refresh-collections");return this._getParsedKML().then(function(b){return a._fetchSublayerService(a.layer,b)})};b.prototype._fetchSublayerService=function(a,b){var c=this;a=a.sublayers;if(!a||0===a.length)return h.resolve();var d=[];a.forEach(function(a){var f=v.whenTrueOnce(a,"visible").then(function(){return a.load()}).then(function(){return c._getGraphicsForSublayer(a,b)}).then(function(b){return h.create(function(d){a.networkLink?
d():(c._featuresMap.set(a,b),c._handles.add(u.schedule(function(){c._refreshCollections();d()}),"refresh-collections"))})}).then(function(){return c._fetchSublayerService(a,a.sourceJSON||b)});a.visible&&d.push(f)});return h.all(d).then(function(){})};b.prototype._getParsedKML=function(){return l.fetchService(this.layer.url,this.view.spatialReference,this.layer.refreshInterval).then(function(a){return l.parseKML(a.data)})};b.prototype._getGraphicsForSublayer=function(a,b){return e.__awaiter(this,void 0,
void 0,function(){var c,d,f,g,h,k;return e.__generator(this,function(e){switch(e.label){case 0:c=null;d=b.sublayers.some(function(b){c=b;return b.id===a.id});if(!d)return[2,null];f={};return(g=c.points)?[4,l.getGraphics(c.points)]:[3,2];case 1:g=e.sent(),e.label=2;case 2:return f.points=g,(h=c.polylines)?[4,l.getGraphics(c.polylines)]:[3,4];case 3:h=e.sent(),e.label=4;case 4:return f.polylines=h,(k=c.polygons)?[4,l.getGraphics(c.polygons)]:[3,6];case 5:k=e.sent(),e.label=6;case 6:return[2,(f.polygons=
k,f.mapImages=c.mapImages,f)]}})})};b.prototype._refreshCollections=function(){var a=this,b=this.get("layer.visibleSublayers");this.allVisiblePoints.removeAll();this.allVisiblePolylines.removeAll();this.allVisiblePolygons.removeAll();this.allVisibleMapImages.removeAll();b&&b.length&&b.forEach(function(b){if(b=a._featuresMap.get(b))a.allVisiblePoints.addMany(b.points),a.allVisiblePolylines.addMany(b.polylines),a.allVisiblePolygons.addMany(b.polygons),a.allVisibleMapImages.addMany(b.mapImages)})};b.prototype._removeMapImage=
function(a){var b=this._bitmapIndex.get(a);b&&(this._mapImageContainer.removeChild(b),this._bitmapIndex.delete(a))};e.__decorate([g.property()],b.prototype,"_pointsView",void 0);e.__decorate([g.property()],b.prototype,"_polylinesView",void 0);e.__decorate([g.property()],b.prototype,"_polygonsView",void 0);e.__decorate([g.property()],b.prototype,"_fetchingPromise",void 0);e.__decorate([g.property({dependsOn:["_fetchingPromise","_pointsView.updating","_polygonsView.updating","_polylinesView.updating"]})],
b.prototype,"updating",void 0);return b=e.__decorate([g.subclass("esri.views.2d.layers.KMLLayerView2D")],b)}(z.LayerView2DMixin(A))});
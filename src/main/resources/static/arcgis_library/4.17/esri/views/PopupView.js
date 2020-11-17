// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/arrayUtils ../core/maybe ../core/promiseUtils ../core/accessorSupport/decorators".split(" "),function(u,c,f,r,e,p,t){Object.defineProperty(c,"__esModule",{value:!0});c.PopupView=void 0;c.PopupView=function(c){return function(c){function d(){return null!==c&&c.apply(this,arguments)||this}f.__extends(d,c);d.prototype.fetchPopupFeatures=function(a,g){return f.__awaiter(this,void 0,void 0,function(){var b,q,h,m,n,k,l,d,c;return f.__generator(this,function(e){switch(e.label){case 0:return[4,
this.when()];case 1:return e.sent(),[4,this._prepareFetchPopupFeatures(a,g)];case 2:return b=e.sent(),q=b.location,h=b.queryArea,m=b.layerViewsAndGraphics,n=b.clientOnlyGraphics,k=p.resolve(n),l=this._queryLayerPopupFeatures({queryArea:h,layerViewsAndGraphics:m,options:g}),d=l.map(function(b){return b.promise}),c=p.eachAlwaysValues(f.__spreadArrays([k],d)).then(r.flatten),[2,{location:q,clientOnlyGraphics:n,allGraphicsPromise:c,promisesPerLayerView:l}]}})})};d.prototype._queryLayerPopupFeatures=function(a){var g=
a.queryArea,b=a.options;return a.layerViewsAndGraphics.map(function(a){var h=a.layerView;a={clientGraphics:a.graphics,event:e.isSome(b)?b.event:null,signal:e.isSome(b)?b.signal:null,defaultPopupTemplateEnabled:e.isSome(b)?!!b.defaultPopupTemplateEnabled:!1};a=h.fetchPopupFeatures(g,a);return{layerView:h,promise:a}})};d.prototype._isValidPopupGraphic=function(a,g){return a&&!!a.getEffectivePopupTemplate(e.isSome(g)&&g.defaultPopupTemplateEnabled)};d.prototype._prepareFetchPopupFeatures=function(a,
g){return f.__awaiter(this,void 0,void 0,function(){var b,d,h,m,c,k,l,e;return f.__generator(this,function(f){switch(f.label){case 0:return[4,this._popupHitTestGraphics(a,g)];case 1:return b=f.sent(),d=b.clientGraphics,h=b.queryArea,m=b.location,c=this._getFetchPopupLayerViews(),k=this._graphicsPerFetchPopupLayerView(d,c),l=k.layerViewsAndGraphics,e=k.clientOnlyGraphics,[2,{clientOnlyGraphics:e,layerViewsAndGraphics:l,queryArea:h,location:m}]}})})};d.prototype._popupHitTestGraphics=function(a,g){return f.__awaiter(this,
void 0,void 0,function(){var b,d,h,c,e,k,l=this;return f.__generator(this,function(f){switch(f.label){case 0:return[4,this.popupHitTest(a)];case 1:return b=f.sent(),d=b.results,h=b.mapPoint,c=d.filter(function(a){return l._isValidPopupGraphic(a.graphic,g)}),e=c.length?c[0].mapPoint:null,k=c.map(function(a){return a.graphic}),[2,{clientGraphics:k,queryArea:h,location:h||e}]}})})};d.prototype._getFetchPopupLayerViews=function(){var a=this,c=[];this.allLayerViews.forEach(function(b){a._isValidPopupLayerView(b)&&
c.push(b)});e.isSome(this.graphicsView)&&this._isValidPopupLayerView(this.graphicsView)&&c.push(this.graphicsView);return c.reverse()};d.prototype._isValidPopupLayerView=function(a){return e.isSome(a)&&(!("layer"in a)||!a.suspended)&&"fetchPopupFeatures"in a};d.prototype._graphicsPerFetchPopupLayerView=function(a,c){var b=[],d=new Map;c=c.map(function(a){var b=[];"layer"in a?d.set(a.layer,b):d.set(a.graphics,b);return{layerView:a,graphics:b}});for(var e=0;e<a.length;e++){var f=a[e],g=d.get(f.layer)||
null;g?g.push(f):b.push(f)}return{layerViewsAndGraphics:c,clientOnlyGraphics:b}};return d=f.__decorate([t.subclass("esri.views.PopupView")],d)}(c)}});
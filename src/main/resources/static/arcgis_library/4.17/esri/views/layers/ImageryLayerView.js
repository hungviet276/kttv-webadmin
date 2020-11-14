// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Error ../../core/maybe ../../core/promiseUtils ../../core/accessorSupport/decorators ../../geometry/Point ../../layers/support/commonProperties ../../tasks/support/Query ./support/popupUtils".split(" "),function(z,a,c,l,u,v,e,m,w,x,y){Object.defineProperty(a,"__esModule",{value:!0});a.ImageryLayerView=void 0;a.ImageryLayerView=function(a){return function(a){function d(){var b=null!==a&&a.apply(this,arguments)||this;b.view=null;return b}c.__extends(d,a);d.prototype.fetchPopupFeatures=
function(a,d){return c.__awaiter(this,void 0,void 0,function(){var b,e,f,n,g,h,p,k,q,r,t;return c.__generator(this,function(c){switch(c.label){case 0:b=this.layer;if(!a)return[2,v.reject(new l("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:b}))];e=b.popupEnabled;f=y.getFetchPopupTemplate(b,d);if(!e||!u.isSome(f))throw new l("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:e,popupTemplate:f});return[4,f.getRequiredFields()];
case 1:return n=c.sent(),g=new x,g.geometry=a,g.outFields=n,g.outSpatialReference=a.spatialReference,h=this.view.resolution,p="2d"===this.view.type?new m(h,h,this.view.spatialReference):new m(.5*h,.5*h,this.view.spatialReference),k=f.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},q=k.returnTopmostRaster,r=k.showNoDataRecords,t={returnDomainValues:!0,returnTopmostRaster:q,pixelSize:p,showNoDataRecords:r},[2,b.queryVisibleRasters(g,t).then(function(a){return a})]}})})};d.prototype.canResume=
function(){var b;return!a.prototype.canResume.call(this)||(null===(b=this.timeExtent)||void 0===b?0:b.isEmpty)?!1:!0};c.__decorate([e.property()],d.prototype,"layer",void 0);c.__decorate([e.property({dependsOn:["timeExtent"]})],d.prototype,"suspended",void 0);c.__decorate([e.property(w.combinedViewLayerTimeExtentProperty)],d.prototype,"timeExtent",void 0);c.__decorate([e.property()],d.prototype,"view",void 0);return d=c.__decorate([e.subclass("esri.views.layers.ImageryLayerView")],d)}(a)}});
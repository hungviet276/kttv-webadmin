// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/accessorSupport/decorators ../../../layers/support/ExportImageParameters ./DynamicLayerView3D ../../layers/MapImageLayerView ../../support/drapedUtils".split(" "),function(k,l,c,d,e,f,g,h){return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.updateWhenStationary=!0;return a}c.__extends(a,b);a.prototype.initialize=function(){var a=this;this.imageParameters=new e.ExportImageParameters({view:this.view,layer:this.layer});this.updatingHandles.add(this.imageParameters,
"version",function(){a.updatingHandles.addPromise(a.refreshDebounced())})};a.prototype.destroy=function(){this.imageParameters&&(this.imageParameters.destroy(),this.imageParameters=null)};a.prototype.createFetchPopupFeaturesQueryGeometry=function(a,b){return h.createQueryGeometry(a,b,this.view)};a.prototype.getFetchOptions=function(){return{timeExtent:this.imageParameters.timeExtent,timestamp:this.refreshTimestamp}};return a=c.__decorate([d.subclass("esri.views.3d.layers.MapImageLayerView3D")],a)}(g.MapImageLayerView(f))});
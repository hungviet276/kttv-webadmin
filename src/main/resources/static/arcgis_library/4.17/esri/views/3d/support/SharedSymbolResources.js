// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/arrayUtils ../../../core/Handles ./TextureCollection ../webgl-engine/lib/screenSizePerspectiveUtils".split(" "),function(f,d,h,k,l,g){Object.defineProperty(d,"__esModule",{value:!0});d.SharedSymbolResources=void 0;f=function(){function c(a){this.streamDataRequester=this.textures=null;this.graphicsOwners=[];this.cimSymbolRasterizer=this.screenSizePerspectiveHandles=null;this.viewState=a.viewState;this.stage=a.stage;this.pointsOfInterest=a.pointsOfInterest;this.objectResourceCache=
a.objectResourceCache;this.streamDataRequester=a.resourceController.createStreamDataRequester(3);this.textures=new l.default(this.streamDataRequester,a.stage,{preMultiplyAlpha:!0,wrap:{s:33071,t:33071}},a.resourceController.scheduler);this.screenSizePerspectiveSettings=g.getSettings(a.viewingMode);this.screenSizePerspectiveSettingsLabels=g.getLabelSettings(a.viewingMode)}c.prototype.destroy=function(){this.textures.destroy();this.streamDataRequester=this.textures=null};c.prototype.addGraphicsOwner=
function(a){var b=this;if(!a)return{remove:function(){}};this.graphicsOwners.push(a);var c="layer"in a?a.watch("layer.screenSizePerspectiveEnabled",function(){return b.updateScreenSizePerspectiveEnabled()}):null;this.updateScreenSizePerspectiveEnabled();return{remove:function(){c&&(c.remove(),h.removeUnordered(b.graphicsOwners,a),b.updateScreenSizePerspectiveEnabled())}}};c.prototype.updateScreenSizePerspectiveEnabled=function(){var a=this,b=this.graphicsOwners.some(function(a){return!0===a.get("layer.screenSizePerspectiveEnabled")});
b&&!this.screenSizePerspectiveHandles?(this.screenSizePerspectiveHandles=new k,b=function(){return a.updateScreenSizePerspectiveSettings()},this.screenSizePerspectiveHandles.add([this.pointsOfInterest.centerOnSurfaceInfrequent.watch("distance",b,!0),this.viewState.events.on("camera-projection-changed",b)]),this.updateScreenSizePerspectiveSettings()):!b&&this.screenSizePerspectiveHandles&&(this.screenSizePerspectiveHandles.destroy(),this.screenSizePerspectiveHandles=null)};c.prototype.updateScreenSizePerspectiveSettings=
function(){e.distance=this.pointsOfInterest.centerOnSurfaceInfrequent.distance;e.fovY=this.viewState.camera.fovY;this.screenSizePerspectiveSettings.update(e);this.screenSizePerspectiveSettingsLabels.update(e);this.stage.renderView.setNeedsRender()};return c}();d.SharedSymbolResources=f;var e={distance:0,fovY:0};d.default=f});
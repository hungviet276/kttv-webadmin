// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Handles ../../../../core/MapUtils ../../../../core/maybe ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ./Deconflictor ./LabelDeconflictor ../../support/geometryUtils ../../../support/Scheduler".split(" "),function(k,f,l,n,p,m,q,r,g,t,u,v){function h(e){e=e.layer;return!(!e||!e.featureReduction||"selection"!==e.featureReduction.type)}function w(e){(e=e.graphics3DGraphics)&&e.forEach(function(d){return d.clearVisibilityFlag(3)})}
Object.defineProperty(f,"__esModule",{value:!0});f.GraphicsDeconflictor=void 0;k=function(e){function d(){var a=null!==e&&e.apply(this,arguments)||this;a._handles=new n;a._contexts=new Map;a._viewState=new g.DeconflictorViewState;a.visibilityGroup=0;a._iconMarginFactor=-.1;return a}l.__extends(d,e);Object.defineProperty(d.prototype,"labels",{get:function(){return this._labels},enumerable:!1,configurable:!0});Object.defineProperty(d.prototype,"viewState",{get:function(){return this._viewState},enumerable:!1,
configurable:!0});d.prototype.initialize=function(){var a=this;this._handles.add([this.view.watch("state.camera",function(){a.updateViewState();a.setDirty()}),this.view.watch("map.ground.opacity",function(b,c){1!==b&&1!==c||a.setDirty()}),q.init(this.view,"slicePlane",function(){a.updateSlicePlane();a.slicePlaneChanged()})]);this._frameTask=this.view.resourceController.scheduler.registerTask(v.Task.GRAPHICS_DECONFLICTOR,function(b){return a.update(b)},function(){return a.needsUpdate()});this._labels=
new t.LabelDeconflictor({view:this.view,parent:this})};d.prototype.destroy=function(){this._labels.destroy();this._labels=null;this._handles.destroy();this._handles=null;this._frameTask&&(this._frameTask.remove(),this._frameTask=null)};Object.defineProperty(d.prototype,"iconMarginFactor",{get:function(){return this._iconMarginFactor},set:function(a){this._iconMarginFactor=a;this.setDirty()},enumerable:!1,configurable:!0});d.prototype.setDirty=function(){0<this._contexts.size&&(e.prototype.setDirty.call(this),
this._labels.setDirty())};d.prototype.update=function(a){e.prototype.update.call(this,a);this.needsUpdate()||this._labels.setDirty()};d.prototype.setInitialIconVisibilityFlag=function(a,b){a=!(this._graphicSupportsDeconfliction(b)&&h(a));b.setVisibilityFlag(3,a,0)};d.prototype.updateViewState=function(){this.view&&this.view.state&&(this._viewState.camera.copyFrom(this.view.state.camera),this.updateSlicePlane())};d.prototype.updateSlicePlane=function(){var a=this.view?this.view.slicePlane:null;m.isSome(a)&&
u.boundedPlane.transform(a,this._viewState.camera.viewMatrix,this._viewState.slicePlane);this._viewState.slicePlaneEnabled=m.isSome(a)};d.prototype.slicePlaneChanged=function(){p.someMap(this._contexts,function(a,b){return b.symbolCreationContext.slicePlaneEnabled})&&this.setDirty()};d.prototype.addGraphicsOwner=function(a){var b=this,c=this._contexts.get(a);null==c&&(c=new Map,this._contexts.set(a,c),this.setDirty());return{addGraphic:function(d){return b.addGraphic(a,c,d)},removeGraphic:function(a){return b.removeGraphic(c,
a)},labelingInfoChange:function(){return b._labels.enabledChanged(a,c)},featureReductionChange:function(){return b.enabledChanged(a,c)},slicePlaneEnabledChange:function(){return b._slicePlaneEnabledChanged(a,c)},clear:function(){return c.forEach(function(a){return b.removeGraphic(c,a.graphics3DGraphic)})}}};d.prototype.removeGraphicsOwner=function(a){var b=this,c=this._contexts.get(a);c&&(c.forEach(function(a){return b.removeGraphic(c,a.graphics3DGraphic)}),this._contexts.delete(a),this.setDirty())};
d.prototype.addGraphic=function(a,b,c){var d=c.graphic.uid;c=new g.DeconflictorGraphic(c,a.symbolCreationContext.slicePlaneEnabled);b.set(d,c);h(a)&&this.addToActiveGraphics(c);a.labelsEnabled&&this._labels.addToActiveGraphics(c)};d.prototype.removeGraphic=function(a,b){b=b.graphic.uid;var c=a.get(b);c&&(this.removeFromActiveGraphics(c),this._labels.removeFromActiveGraphics(c),a.delete(b),this.setDirty())};d.prototype.enabledChanged=function(a,b){var c=h(a);c||w(a);this.modifyGraphics(b,c)};d.prototype._slicePlaneEnabledChanged=
function(a,b){var c=a.symbolCreationContext.slicePlaneEnabled;b.forEach(function(a){return a.slicePlaneEnabled=c});this.setDirty()};d.prototype.getGraphicsLayers=function(a){return a._graphics};d.prototype._graphicSupportsDeconfliction=function(a){if(a.isDraped)return!1;a=a._graphics;if(!a||!a.length)return!1;for(var b=0;b<a.length;b++)if(this.layerSupportsDeconfliction(a[b]))return!0;return!1};return d=l.__decorate([r.subclass("esri.views.3d.layers.graphics.GraphicsDeconflictor")],d)}(g.Deconflictor);
f.GraphicsDeconflictor=k});
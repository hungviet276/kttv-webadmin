// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/maybe ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ./VisualElement ../../support/geometryUtils ../../support/LaserLineRenderer ../../webgl-engine/shaders/Laserlines.glsl".split(" "),function(f,c,h,b,k,g,l,e,m,n){Object.defineProperty(c,"__esModule",{value:!0});c.LaserlineVisualElement=void 0;f=function(c){function a(d){var a=c.call(this,d.view)||this;a._angleCutoff=n.defaultAngleCutoff;a._style={};a._heightManifoldTarget=
g.vec3f64.create();a._heightManifoldEnabled=!1;a._intersectsLine=e.lineSegment.create();a._intersectsLineEnabled=!1;a._intersectsLineInfinite=!1;a._pathVerticalPlaneBuffers=null;a.applyProps(d);return a}h.__extends(a,c);a.prototype.createResources=function(){this.ensureRenderer()};a.prototype.destroyResources=function(){this.disposeRenderer()};a.prototype.updateVisibility=function(a){this.syncHeightManifold();this.syncIntersectsLine();this.syncPathVerticalPlane()};Object.defineProperty(a.prototype,
"angleCutoff",{get:function(){return this._angleCutoff},set:function(a){this._angleCutoff!==a&&(this._angleCutoff=a,this.syncAngleCutoff())},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"style",{get:function(){return this._style},set:function(a){this._style=a;this.syncStyle()},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"heightManifoldTarget",{get:function(){return this._heightManifoldEnabled?this._heightManifoldTarget:null},set:function(a){b.isSome(a)?(k.vec3.copy(this._heightManifoldTarget,
a),this._heightManifoldEnabled=!0):this._heightManifoldEnabled=!1;this.syncRenderer();this.syncHeightManifold()},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"intersectsWorldUpAtLocation",{set:function(a){if(b.isNone(a))this.intersectsLine=null;else{var d=this.view.renderCoordsHelper.worldUpAtPosition(a,p);this.intersectsLine=e.lineSegment.fromValues(a,d);this.intersectsLineInfinite=!0}},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"intersectsLine",{get:function(){return this._intersectsLineEnabled?
this._intersectsLine:null},set:function(a){b.isSome(a)?(e.lineSegment.copy(a,this._intersectsLine),this._intersectsLineEnabled=!0):this._intersectsLineEnabled=!1;this.syncIntersectsLine();this.syncRenderer()},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"intersectsLineInfinite",{get:function(){return this._intersectsLineInfinite},set:function(a){this._intersectsLineInfinite=a;this.syncIntersectsLineInfinite()},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,
"pathVerticalPlane",{get:function(){return this._pathVerticalPlaneBuffers},set:function(a){this._pathVerticalPlaneBuffers=a;this.syncPathVerticalPlane();this.syncRenderer()},enumerable:!1,configurable:!0});a.prototype.syncRenderer=function(){this.attached&&(this._intersectsLineEnabled||this._heightManifoldEnabled||b.isSome(this._pathVerticalPlaneBuffers))?this.ensureRenderer():this.disposeRenderer()};a.prototype.ensureRenderer=function(){b.isSome(this.renderer)||(this.renderer=new m.LaserLineRenderer(this.view.renderCoordsHelper,
void 0,{contrastControlEnabled:!0}),this.syncStyle(),this.syncHeightManifold(),this.syncIntersectsLine(),this.syncIntersectsLineInfinite(),this.syncPathVerticalPlane(),this.syncAngleCutoff(),this.view._stage&&this.view._stage.addRenderPlugin(this.renderer.renderSlots,this.renderer))};a.prototype.syncStyle=function(){b.isNone(this.renderer)||(this.renderer.setParameterValues(this._style),null!=this._style.intersectsLineRadius&&(this.renderer.intersectsLineRadius=this._style.intersectsLineRadius))};
a.prototype.syncAngleCutoff=function(){b.isNone(this.renderer)||this.renderer.setParameterValues({angleCutoff:this._angleCutoff})};a.prototype.syncHeightManifold=function(){b.isNone(this.renderer)||(this.renderer.heightManifoldEnabled=this._heightManifoldEnabled&&this.visible,this._heightManifoldEnabled&&(this.renderer.heightManifoldTarget=this._heightManifoldTarget))};a.prototype.syncIntersectsLine=function(){b.isNone(this.renderer)||(this.renderer.intersectsLineEnabled=this._intersectsLineEnabled&&
this.visible,this._intersectsLineEnabled&&(this.renderer.intersectsLineSegment=this._intersectsLine))};a.prototype.syncIntersectsLineInfinite=function(){b.isNone(this.renderer)||(this.renderer.intersectsLineInfinite=this._intersectsLineInfinite)};a.prototype.syncPathVerticalPlane=function(){b.isNone(this.renderer)||(this.renderer.pathVerticalPlaneEnabled=b.isSome(this._pathVerticalPlaneBuffers)&&this.visible,b.isSome(this._pathVerticalPlaneBuffers)&&(this.renderer.pathVerticalPlaneBuffers=this._pathVerticalPlaneBuffers))};
a.prototype.disposeRenderer=function(){b.isSome(this.renderer)&&this.view._stage&&(this.view._stage.removeRenderPlugin(this.renderer),this.renderer=null)};return a}(l.VisualElement);c.LaserlineVisualElement=f;var p=g.vec3f64.create()});
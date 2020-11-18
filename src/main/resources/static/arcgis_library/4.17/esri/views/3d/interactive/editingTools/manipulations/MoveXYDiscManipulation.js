// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../Color ../../../../../core/Handles ../../../../../core/maybe ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../../../support/elevationInfoUtils ../../Manipulator3D ../dragEventPipeline3D ../settings ./config ./Manipulation ./moveUtils ../snapping/SnapToScene ../../../support/stack ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/materials/ColorMaterial ../../../../interactive/dragEventPipeline".split(" "),
function(h,d,n,p,q,r,k,t,u,f,v,w,x,y,e,z,A,B,m,C,D,E,l){Object.defineProperty(d,"__esModule",{value:!0});d.MoveXYDiscManipulation=void 0;h=function(d){function c(a){var b=d.call(this)||this;b._handles=new q;b._snapToScene=new B.SnapToScene;b._discMaterial=b._createMaterial();b._discMaterialTransparent=b._createMaterial(.5);b._scale=1;b._radius=e.DISC_RADIUS;b._view=a.view;b._tool=a.tool;null!=a.snapToScene&&(b.snapToScene=a.snapToScene);null!=a.radius&&(b._radius=a.radius);b._createManipulator();
b.forEachManipulator(function(a){return b._tool.manipulators.add(a)});return b}n.__extends(c,d);c.prototype.destroy=function(){var a=this;this._handles.destroy();this.forEachManipulator(function(b){a._tool.manipulators.remove(b);b.destroy()});this._manipulator=this._view=this._tool=null};c.prototype.forEachManipulator=function(a){a(this._manipulator,1)};Object.defineProperty(c.prototype,"displayScale",{get:function(){return this._scale},set:function(a){this._scale=a;this._updateManipulatorTransform()},
enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"snapToScene",{get:function(){return this._snapToScene.enabled},set:function(a){this._snapToScene.enabled=a},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"radius",{get:function(){return this._radius},set:function(a){a!==this._radius&&(this._radius=a,this._updateManipulator())},enumerable:!1,configurable:!0});c.prototype.createGraphicDragPipeline=function(a,b){var c=this,d=a.graphic,e=v.getGraphicEffectiveElevationInfo(d),
g=r.unwrap(d.geometry).spatialReference;return A.createGraphicMoveDragPipeline(a,b,function(a){return c.createDragPipeline(a,e,g)})};c.prototype.createDragPipeline=function(a,b,c){var d=this,e=this._view;return l.createManipulatorDragEventPipeline(this._manipulator,function(g,f,h,k){f=f.next(l.dragAtLocation(e,g.elevationAlignedLocation)).next(x.screenToMapXYAtLocation(e,g.elevationAlignedLocation,b,c)).next(d._snapToScene.createDragEventPipelineStep(e,b),d._snapToScene.next).next(l.addScreenDelta());
a(g,f,h,k)})};c.prototype._updateManipulatorTransform=function(){var a=k.mat4.fromScaling(m.sm4d.get(),u.vec3.set(m.sv3d.get(),this.displayScale,this.displayScale,this.displayScale));this._manipulator.modelTransform=a};c.prototype._createManipulator=function(){this._manipulator=new w.Manipulator3D({view:this._view,worldSized:!1,autoScaleRenderObjects:!1,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:f.vec3f64.fromValues(0,0,1)},worldOriented:!0});this._updateManipulator()};
c.prototype._updateManipulator=function(){var a=new C(D.createCylinderGeometry(e.DISC_HEIGHT,1,e.GEOMETRY_SEGMENTS,f.vec3f64.fromValues(0,0,1),f.vec3f64.fromValues(0,0,0)),"graphic-transform-disc"),b=k.mat4.fromScaling(t.mat4f64.create(),f.vec3f64.fromValues(this._radius,this._radius,this._radius));this._manipulator.renderObjects=[{geometry:a,material:this._discMaterial,transform:b,stateMask:2},{geometry:a,material:this._discMaterialTransparent,transform:b,stateMask:1}];this._manipulator.radius=this._radius/
e.DISC_RADIUS*e.DISC_COLLISION_RADIUS};c.prototype._createMaterial=function(a){void 0===a&&(a=1);var b=p.toUnitRGBA(y.colors.main);b[3]*=a;a=new E({color:b,transparent:1!==a,cullFace:2},"move-xy-disc");a.renderOccluded=2;return a};Object.defineProperty(c.prototype,"test",{get:function(){return{discManipulator:this._manipulator}},enumerable:!1,configurable:!0});return c}(z.Manipulation);d.MoveXYDiscManipulation=h});
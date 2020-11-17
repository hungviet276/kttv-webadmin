// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/mathUtils ../../../../../core/screenUtils ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/vec2 ../../../../../core/libs/gl-matrix-2/vec2f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../camera/constraintUtils ../InteractiveController ../../utils/navigationUtils ../../../support/geometryUtils".split(" "),function(h,c,f,q,r,k,l,m,d,e,n,t,g,p){Object.defineProperty(c,
"__esModule",{value:!0});c.ZoomController=void 0;h=function(c){function b(a){a=c.call(this,a)||this;a.view=null;a.tmpP=e.vec3f64.create();a.tmpN=e.vec3f64.create();a.tmpP0=m.vec2f64.create();a.tmpPoi=e.vec3f64.create();a.tmpRayDir=e.vec3f64.create();a.dragBeginPoint=r.createScreenPointArray();a.normalizedAnchorPoint=m.vec2f64.create();a.constraintOptions={selection:15,interactionType:1,interactionFactor:0,interactionStartCamera:null,interactionDirection:e.vec3f64.create(),tiltMode:0};a.plane=p.plane.create();
return a}f.__extends(b,c);Object.defineProperty(b.prototype,"intersectionHelper",{get:function(){return this.view.sceneIntersectionHelper},enumerable:!1,configurable:!0});b.prototype.begin=function(a){this.active&&(l.vec2.copy(this.dragBeginPoint,a),g.normalizeCoordinate(this.beginCamera,a,this.normalizedAnchorPoint),this.intersectionHelper.intersectScreenFreePointFallback(a,this.tmpP),d.vec3.subtract(this.tmpN,this.beginCamera.eye,this.beginCamera.center),d.vec3.normalize(this.tmpN,this.tmpN),0>
this.tmpN[1]&&d.vec3.negate(this.tmpN,this.tmpN),p.plane.fromPositionAndNormal(this.tmpP,this.tmpN,this.plane),this.constraintOptions.interactionStartCamera=this.beginCamera)};b.prototype.update=function(a){if(this.active){g.intersectPlaneFromScreenPoint(this.plane,this.currentCamera,this.dragBeginPoint,this.tmpPoi)||d.vec3.copy(this.tmpPoi,this.currentCamera.center);g.normalizeCoordinate(this.currentCamera,a,this.tmpP0);var b=4*(this.tmpP0[1]-this.normalizedAnchorPoint[1]);l.vec2.copy(this.normalizedAnchorPoint,
this.tmpP0);d.vec3.subtract(this.tmpRayDir,this.tmpPoi,this.currentCamera.eye);var c=d.vec3.length(this.tmpRayDir),e=c*(1-b);d.vec3.copy(this.constraintOptions.interactionDirection,this.tmpRayDir);d.vec3.scale(this.constraintOptions.interactionDirection,this.constraintOptions.interactionDirection,q.sign(b)/c);var f=this.view.state.constraints.minimumPoiDistance;0<=b&&e<f&&(e=f,b=-(e-c)/c);1E-6>Math.abs(c-e)||(d.vec3.scale(this.tmpRayDir,this.tmpRayDir,b),d.vec3.add(this.currentCamera.eye,this.currentCamera.eye,
this.tmpRayDir),d.vec3.lerp(this.currentCamera.center,this.currentCamera.center,this.tmpPoi,b),this.currentCamera.center[2]=this.tmpPoi[2]>this.beginCamera.center[2]?Math.max(this.beginCamera.center[2],this.currentCamera.center[2]):Math.min(this.beginCamera.center[2],this.currentCamera.center[2]),this.currentCamera.markViewDirty(),this.constraintOptions.interactionFactor=n.pixelDistanceToInteractionFactor(this.dragBeginPoint,a),n.applyAll(this.view,this.currentCamera,this.constraintOptions))}};b.prototype.end=
function(){this.active&&this.finishController()};f.__decorate([k.property({constructOnly:!0})],b.prototype,"view",void 0);return b=f.__decorate([k.subclass("esri.views.3d.state.controllers.local.ZoomController")],b)}(t.InteractiveController);c.ZoomController=h});
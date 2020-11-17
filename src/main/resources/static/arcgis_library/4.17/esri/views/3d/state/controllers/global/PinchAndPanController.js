// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/mathUtils ../../../../../core/screenUtils ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec2 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../camera/constraintUtils ../../../input/util ../InteractiveController ../momentum/PanPlanarMomentumController ../momentum/PanSphericalMomentumController ../momentum/RotationMomentumController ../momentum/ZoomPlanarMomentumController ../momentum/ZoomSphericalMomentumController ../../utils/navigationUtils ../../utils/navigationUtils ../../../support/geometryUtils ../../../support/mathUtils ../../../webgl-engine/lib/Camera ../../../../navigation/PanPlanarMomentumEstimator ../../../../navigation/PanSphericalMomentumEstimator ../../../../navigation/RotationMomentumEstimator ../../../../navigation/ZoomMomentumEstimator".split(" "),
function(q,k,p,v,f,r,t,w,x,g,l,e,u,y,z,A,B,C,D,d,m,h,E,F,G,H,I,J){Object.defineProperty(k,"__esModule",{value:!0});k.PinchAndPanController=void 0;q=function(k){function c(a){a=k.call(this,a)||this;a.view=null;a.smoothRotation=new u.ExponentialFalloff(.05);a.rotationAxis=l.vec3f64.create();a.panningPlane=h.plane.create();a.smoothScaling=new u.ExponentialFalloff(.05);a.zoomCenterScreen=f.createScreenPointArray();a.zoomMomentumEstimator=new J.ZoomMomentumEstimator;a.rotationMomentumEstimator=new I.RotationMomentumEstimator;
a.panSphericalMomentumEstimator=new H.PanSphericalMomentumEstimator;a.panPlanarMomentumEstimator=new G.PanPlanarMomentumEstimator;a.adjustedSphere=h.sphere.create();a.tmp3d=l.vec3f64.create();a.tmpMat=w.mat4f64.create();a.tmpAxisAngle=h.axisAngle.create();a.tmpScreenPointArray=f.createScreenPointArray();a.beginScreenPoint=f.createScreenPointArray();a.beginScenePoint=l.vec3f64.create();a.screenPickPoint=f.createScreenPointArray();a.panMode=m.PanMode.Horizontal;a.tmpInteractionDirection=l.vec3f64.create();
a.constraintOptions={selection:15,interactionType:0,interactionFactor:0,interactionStartCamera:new F.default,interactionDirection:null,tiltMode:0};return a}p.__extends(c,k);Object.defineProperty(c.prototype,"intersectionHelper",{get:function(){return this.view.sceneIntersectionHelper},enumerable:!1,configurable:!0});c.prototype.begin=function(a){if(this.active){var b=this.view.navigation.momentumEnabled;this.zoomMomentumEstimator.enabled=b;this.rotationMomentumEstimator.enabled=b;this.panPlanarMomentumEstimator.enabled=
b;this.panSphericalMomentumEstimator.enabled=b;this.beginHeading=-E.cyclicalPI.normalize(v.deg2rad(this.view.camera.heading));this.beginRadius=a.radius;this.pointerCount=a.pointers.size;this.beginAngle=a.angle;this.smoothRotation.reset();f.screenPointObjectToArray(a.center,this.screenPickPoint);x.vec2.copy(this.beginScreenPoint,this.screenPickPoint);b=d.pickPointAndInitSphere(this.intersectionHelper,this.beginCamera,this.screenPickPoint,!0);this.scenePickPoint=b.scenePickPoint;this.sphere=b.sphere;
g.vec3.copy(this.beginScenePoint,this.scenePickPoint);this.panMode=d.decidePanMode(this.beginCamera,this.sphere,this.scenePickPoint);this.panMode===m.PanMode.Vertical&&(this.beginCamera.aboveGround?this.preparePlanarPanModeOverground(a):this.preparePlanarPanMode(a));this.constraintOptions.interactionStartCamera.copyFrom(this.beginCamera)}};c.prototype.preparePlanarPanModeOverground=function(a){var b=g.vec3.negate(this.tmp3d,this.beginCamera.viewForward);h.plane.fromPositionAndNormal(this.scenePickPoint,
b,this.panningPlane);var n=f.createScreenPointArray(this.screenPickPoint[0],0),b=l.vec3f64.create(),c=g.vec3.length(this.beginCamera.eye);this.adjustedSphere.radius=c<this.sphere.radius?c-100:this.sphere.radius;d.sphereOrPlanePointFromScreenPoint(this.adjustedSphere,this.beginCamera,n,b);n=f.createRenderScreenPointArray3();this.beginCamera.projectPoint(b,n);this.screenPickPoint[1]=Math.min(this.screenPickPoint[1],.9*n[1]);this.intersectionHelper.intersectScreen(this.screenPickPoint,this.scenePickPoint)&&
h.plane.fromPositionAndNormal(this.scenePickPoint,h.plane.normal(this.panningPlane),this.panningPlane);a=f.screenPointObjectToArray(a.center,this.tmpScreenPointArray);d.intersectPlaneFromScreenPoint(this.panningPlane,this.beginCamera,a,this.beginScenePoint)};c.prototype.preparePlanarPanMode=function(a){var b=g.vec3.negate(this.tmp3d,this.beginCamera.viewForward);h.plane.fromPositionAndNormal(this.scenePickPoint,b,this.panningPlane);var c=h.sphere.angleToSilhouette(this.sphere,this.currentCamera.eye),
b=h.axisAngle.fromPoints(this.currentCamera.eye,this.scenePickPoint,this.tmpAxisAngle),c=-b[3]-(this.currentCamera.aboveGround?.25:.025)*c;if(0<c){var e=t.mat4.identity(this.tmpMat);t.mat4.rotate(e,e,-c,b);g.vec3.subtract(this.scenePickPoint,this.scenePickPoint,this.sphere.center);g.vec3.transformMat4(this.scenePickPoint,this.scenePickPoint,e);g.vec3.add(this.scenePickPoint,this.scenePickPoint,this.sphere.center);h.plane.setOffsetFromPoint(this.panningPlane,this.scenePickPoint,this.panningPlane);
a=f.screenPointObjectToArray(a.center,this.tmpScreenPointArray);d.intersectPlaneFromScreenPoint(this.panningPlane,this.beginCamera,a,this.beginScenePoint)}};c.prototype.update=function(a){if(this.active){this.currentCamera.copyFrom(this.beginCamera);var b=1<a.pointers.size;this.panMode===m.PanMode.Horizontal?(b&&this.zoomSpherical(a),this.panningSpherical(a),b&&this.rotateSpherical(a)):(b&&this.zoomPlanar(a),this.panningPlanar(a),b&&this.rotatePlanar(a));this.currentCamera.markViewDirty()}};c.prototype.end=
function(a){a.pointers.size===this.pointerCount&&this.update(a);this.finishController();if(a=this.zoomMomentumEstimator.evaluateMomentum())return this.panMode===m.PanMode.Horizontal?new D.ZoomSphericalMomentumController({view:this.view,momentum:a,screenCenter:this.zoomCenterScreen,sceneCenter:this.beginScenePoint,radius:this.sphere.radius}):new C.ZoomPlanarMomentumController({view:this.view,momentum:a,zoomCenter:this.beginScenePoint});if(a=this.rotationMomentumEstimator.evaluateMomentum())return new B.RotationMomentumController({view:this.view,
momentum:a,center:this.sphere.center,axis:this.rotationAxis});if(this.panMode===m.PanMode.Horizontal){if(a=this.panSphericalMomentumEstimator.evaluateMomentum())return new A.PanSphericalMomentumController({view:this.view,momentum:a})}else if(a=this.panPlanarMomentumEstimator.evaluateMomentum())return new z.PanPlanarMomentumController({view:this.view,momentum:a});return null};c.prototype.zoomSpherical=function(a){var b=this.beginRadius/a.radius;this.smoothScaling.gain=.001875*Math.min(Math.max(a.radius,
40),120);this.smoothScaling.update(b);d.applyZoomOnSphere(this.sphere,this.currentCamera,this.smoothScaling.value);f.screenPointObjectToArray(a.center,this.zoomCenterScreen);this.zoomMomentumEstimator.add(this.smoothScaling.value,.001*a.timestamp);this.constraintOptions.interactionType=1;this.constraintOptions.interactionFactor=e.pixelDistanceToInteractionFactor(a.radius-this.beginRadius);e.applyAll(this.view,this.currentCamera,this.constraintOptions)};c.prototype.panningSpherical=function(a){var b=
f.screenPointObjectToArray(a.center,this.tmpScreenPointArray);d.sphereOrPlanePointFromScreenPoint(this.sphere,this.currentCamera,b,this.tmp3d);d.preserveHeadingThreshold(this.beginScenePoint,g.vec3.dot(this.currentCamera.up,this.beginScenePoint),this.sphere.radius,this.beginHeading,this.view.camera.tilt,this.beginCamera)?(d.applyPanSphericalPreserveHeading(this.sphere,this.currentCamera,this.beginScenePoint,this.tmp3d,this.beginHeading,this.view.camera.tilt,!1),this.panSphericalMomentumEstimator.addMomentumPreserveHeading(b,
this.tmp3d,.001*a.timestamp,this.beginCamera,this.sphere,this.beginHeading,this.view.camera.tilt)):(d.applyPanSphericalDirectRotation(this.sphere,this.currentCamera,this.beginScenePoint,this.tmp3d,this.view.camera.tilt,!1),this.panSphericalMomentumEstimator.addMomentumDirectRotation(b,this.tmp3d,.001*a.timestamp,this.beginCamera,this.sphere.radius,this.view.camera.tilt));this.constraintOptions.interactionType=4;this.constraintOptions.interactionFactor=e.pixelDistanceToInteractionFactor(this.screenPickPoint,
b);e.applyAll(this.view,this.currentCamera,this.constraintOptions)};c.prototype.rotateSpherical=function(a){g.vec3.normalize(this.rotationAxis,this.scenePickPoint);this.currentCamera.aboveGround||g.vec3.negate(this.rotationAxis,this.rotationAxis);var b=this.smoothRotation.value,c=d.normalizeRotationDelta(a.angle-b),b=b+c;this.smoothRotation.gain=.00125*Math.min(Math.max(a.radius,40),120);this.smoothRotation.update(b);c=this.smoothRotation.value-this.beginAngle;this.rotationMomentumEstimator.add(c,
.001*a.timestamp);d.applyRotation(this.currentCamera,this.sphere.center,h.axisAngle.wrapAxisAngle(this.rotationAxis,c));this.constraintOptions.interactionType=2;this.constraintOptions.interactionFactor=e.pixelDistanceToInteractionFactor(a.radius*b);e.applyAll(this.view,this.currentCamera,this.constraintOptions)};c.prototype.panningPlanar=function(a){var b=f.screenPointObjectToArray(a.center,this.tmpScreenPointArray);d.intersectPlaneFromScreenPoint(this.panningPlane,this.currentCamera,b,this.tmp3d)&&
(d.applyPanPlanar(this.currentCamera,this.beginScenePoint,this.tmp3d),this.panPlanarMomentumEstimator.add(b,this.tmp3d,.001*a.timestamp),this.constraintOptions.interactionType=4,this.constraintOptions.interactionFactor=e.pixelDistanceToInteractionFactor(this.beginScreenPoint,b),this.constraintOptions.interactionDirection=this.view.renderCoordsHelper.worldUpAtPosition(this.currentCamera.eye,this.tmpInteractionDirection),e.applyAll(this.view,this.currentCamera,this.constraintOptions),this.constraintOptions.interactionDirection=
null)};c.prototype.zoomPlanar=function(a){var b=this.beginRadius/a.radius;this.smoothScaling.gain=.001875*Math.min(Math.max(a.radius,40),120);this.smoothScaling.update(b);this.zoomMomentumEstimator.add(this.smoothScaling.value,.001*a.timestamp);d.applyZoomToPoint(this.currentCamera,this.beginScenePoint,this.smoothScaling.value,this.view.state.constraints.minimumPoiDistance);this.constraintOptions.interactionType=1;this.constraintOptions.interactionFactor=e.pixelDistanceToInteractionFactor(a.radius-
this.beginRadius);e.applyAll(this.view,this.currentCamera,this.constraintOptions)};c.prototype.rotatePlanar=function(a){g.vec3.copy(this.rotationAxis,this.beginScenePoint);this.currentCamera.aboveGround||g.vec3.negate(this.rotationAxis,this.rotationAxis);var b=this.smoothRotation.value,c=a.angle-b,c=d.normalizeRotationDelta(c);this.smoothRotation.gain=.00125*Math.min(Math.max(a.radius,40),120);this.smoothRotation.update(b+c);b=this.smoothRotation.value-this.beginAngle;this.rotationMomentumEstimator.add(b,
.001*a.timestamp);d.applyRotation(this.currentCamera,this.sphere.center,h.axisAngle.wrapAxisAngle(this.rotationAxis,b));this.constraintOptions.interactionType=2;this.constraintOptions.interactionFactor=e.pixelDistanceToInteractionFactor(a.radius*b);e.applyAll(this.view,this.currentCamera,this.constraintOptions)};p.__decorate([r.property({constructOnly:!0})],c.prototype,"view",void 0);return c=p.__decorate([r.subclass("esri.views.3d.state.controllers.global.PinchAndPanController")],c)}(y.InteractiveController);
k.PinchAndPanController=q});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/screenUtils ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../camera/constraintUtils ./MomentumController ../../utils/navigationUtils ../../../support/geometryUtils".split(" "),function(h,c,d,l,e,k,m,n,f,g){Object.defineProperty(c,"__esModule",{value:!0});c.ZoomSphericalMomentumController=void 0;h=function(c){function b(a){a=c.call(this,a)||this;a.interactionType=1;a.radius=0;a.tmpSceneCenter=k.vec3f64.create();
a.tmpZoomAxisAngle=g.axisAngle.create();a.sphere=g.sphere.create();return a}d.__extends(b,c);Object.defineProperty(b.prototype,"screenCenter",{set:function(a){this._set("screenCenter",l.createScreenPointArray(a[0],a[1]))},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"sceneCenter",{set:function(a){this._set("sceneCenter",k.vec3f64.clone(a))},enumerable:!1,configurable:!0});b.prototype.initialize=function(){this.sphere.radius=this.radius};b.prototype.momentumStep=function(a,b){a=
this.momentum.valueDelta(0,a);f.applyZoomOnSphere(this.sphere,b,a);this.constraintOptions.interactionType=1;m.applyAll(this.view,b,this.constraintOptions);f.sphereOrPlanePointFromScreenPoint(this.sphere,b,this.screenCenter,this.tmpSceneCenter);g.axisAngle.fromPoints(this.sceneCenter,this.tmpSceneCenter,this.tmpZoomAxisAngle);f.applyRotation(b,this.sphere.center,this.tmpZoomAxisAngle);this.constraintOptions.interactionType=4};d.__decorate([e.property({constructOnly:!0})],b.prototype,"momentum",void 0);
d.__decorate([e.property({constructOnly:!0})],b.prototype,"screenCenter",null);d.__decorate([e.property({constructOnly:!0})],b.prototype,"sceneCenter",null);d.__decorate([e.property({constructOnly:!0})],b.prototype,"radius",void 0);return b=d.__decorate([e.subclass("esri.views.3d.state.controllers.momentum.ZoomSphericalMomentumController")],b)}(n.MomentumController);c.ZoomSphericalMomentumController=h});
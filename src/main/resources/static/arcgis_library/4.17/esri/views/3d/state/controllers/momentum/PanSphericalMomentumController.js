// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ./MomentumController ../../utils/navigationUtils".split(" "),function(g,a,e,h,f,k,l,m){Object.defineProperty(a,"__esModule",{value:!0});a.PanSphericalMomentumController=void 0;var n=k.vec3f64.create(),d=k.vec3f64.create();g=function(a){function c(b){b=a.call(this,b)||this;b.interactionType=4;return b}e.__extends(c,a);c.prototype.momentumStep=
function(b,a){var c=this.momentum.value1(b);b=this.momentum.value2(b);f.vec3.copy(d,a.eye);f.vec3.normalize(d,d);f.vec3.cross(this.momentum.axis2,d,this.momentum.axis1);m.applyRotationWithTwoAxes(a,n,this.momentum.axis1,c,this.momentum.axis2,b)};e.__decorate([h.property({constructOnly:!0})],c.prototype,"momentum",void 0);return c=e.__decorate([h.subclass("esri.views.3d.state.controllers.momentum.PanSphericalMomentumController")],c)}(l.MomentumController);a.PanSphericalMomentumController=g});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Accessor ../../../core/accessorSupport/decorators ./AltitudeConstraint ./ClipDistanceConstraint ./CollisionConstraint ./TiltConstraint".split(" "),function(e,b,c,l,d,f,g,h,k){Object.defineProperty(b,"__esModule",{value:!0});b.Constraints=void 0;e=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.tilt=new k.default;a.altitude=new f.default;a.clipDistance=new g.default;a.collision=new h.default;return a}c.__extends(a,b);c.__decorate([d.property({type:k.default})],
a.prototype,"tilt",void 0);c.__decorate([d.property({type:f.default})],a.prototype,"altitude",void 0);c.__decorate([d.property({type:g.default})],a.prototype,"clipDistance",void 0);c.__decorate([d.property({type:h.default})],a.prototype,"collision",void 0);return a=c.__decorate([d.subclass("esri.views.3d.constraints.Constraints")],a)}(l);b.Constraints=e;b.default=e});
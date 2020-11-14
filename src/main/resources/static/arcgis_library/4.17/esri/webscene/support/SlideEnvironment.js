// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/accessorSupport/decorators ../Lighting".split(" "),function(f,b,c,h,g,d){Object.defineProperty(b,"__esModule",{value:!0});b.SlideEnvironment=void 0;f=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.lighting=new d;return a}c.__extends(a,b);e=a;a.prototype.clone=function(){return new e({lighting:d.prototype.clone.call(this.lighting)})};var e;c.__decorate([g.property({type:d,json:{write:!0}})],a.prototype,"lighting",
void 0);return a=e=c.__decorate([g.subclass("esri.webscene.Environment")],a)}(h.JSONSupport);b.SlideEnvironment=f});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators ../../geometry/support/jsonUtils".split(" "),function(l,m,a,g,h,d,k){var e=h.getLogger("esri.tasks.support.ProjectParameters");return function(f){function b(c){c=f.call(this,c)||this;c.geometries=null;c.outSpatialReference=null;c.transformation=null;c.transformForward=null;return c}a.__extends(b,f);Object.defineProperty(b.prototype,"outSR",{get:function(){e.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead.");
return this.outSpatialReference},set:function(c){e.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead.");this.outSpatialReference=c},enumerable:!1,configurable:!0});b.prototype.toJSON=function(){var c=this.geometries.map(function(a){return a.toJSON()}),b=this.geometries[0],a={};a.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON());a.inSR=b.spatialReference.wkid||JSON.stringify(b.spatialReference.toJSON());a.geometries=JSON.stringify({geometryType:k.getJsonType(b),
geometries:c});this.transformation&&(a.transformation=this.transformation.wkid||JSON.stringify(this.transformation));null!=this.transformForward&&(a.transformForward=this.transformForward);return a};a.__decorate([d.property()],b.prototype,"geometries",void 0);a.__decorate([d.property({json:{read:{source:"outSR"}}})],b.prototype,"outSpatialReference",void 0);a.__decorate([d.property({json:{read:!1}})],b.prototype,"outSR",null);a.__decorate([d.property()],b.prototype,"transformation",void 0);a.__decorate([d.property()],
b.prototype,"transformForward",void 0);return b=a.__decorate([d.subclass("esri.tasks.support.ProjectParameters")],b)}(g.JSONSupport)});
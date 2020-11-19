// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(c,a,d,f,e){Object.defineProperty(a,"__esModule",{value:!0});a.MeshColor=void 0;c=function(a){function b(b){return a.call(this,b)||this}d.__extends(b,a);b.prototype.clone=function(){throw Error("not implemented");};d.__decorate([e.property({readOnly:!0,json:{read:!1,write:{isRequired:!0,ignoreOrigin:!0,enabled:!0}}})],b.prototype,"type",void 0);return b=d.__decorate([e.subclass("esri.geometry.support.MeshColor")],
b)}(f.JSONSupport);a.MeshColor=c;a.default=c});
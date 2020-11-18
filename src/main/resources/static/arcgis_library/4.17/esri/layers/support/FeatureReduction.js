// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(c,a,d,f,e){Object.defineProperty(a,"__esModule",{value:!0});a.FeatureReduction=void 0;c=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.type=null;return b}d.__extends(b,a);d.__decorate([e.property({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],b.prototype,"type",void 0);return b=d.__decorate([e.subclass("esri.layers.support.FeatureReduction")],
b)}(f.JSONSupport);a.FeatureReduction=c;a.default=c});
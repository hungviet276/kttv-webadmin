// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass".split(" "),function(f,b,c,h,d,g){Object.defineProperty(b,"__esModule",{value:!0});b.Element=b.ElementMixin=void 0;b.ElementMixin=function(b){return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.description=null;a.label=null;a.visibilityExpression=null;return a}c.__extends(a,b);c.__decorate([d.property({type:String,json:{write:!0}})],
a.prototype,"description",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"visibilityExpression",void 0);return a=c.__decorate([g.subclass("esri.form.elements.ElementMixin")],a)}(b)};f=function(b){function e(a){a=b.call(this,a)||this;a.type=null;return a}c.__extends(e,b);c.__decorate([d.property()],e.prototype,"type",void 0);return e=c.__decorate([g.subclass("esri.form.elements.Element")],
e)}(b.ElementMixin(h.JSONSupport));b.Element=f});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/accessorSupport/decorators"],function(g,a,d,f){Object.defineProperty(a,"__esModule",{value:!0});a.GoToMixin=void 0;a.GoToMixin=function(a){return function(a){function c(){for(var b=[],e=0;e<arguments.length;e++)b[e]=arguments[e];b=a.apply(this,b)||this;b.goToOverride=null;b.view=null;return b}d.__extends(c,a);c.prototype.callGoTo=function(b){var a=this.view;return this.goToOverride?this.goToOverride(a,b):a.goTo(b.target,b.options)};d.__decorate([f.property()],
c.prototype,"goToOverride",void 0);d.__decorate([f.property()],c.prototype,"view",void 0);return c=d.__decorate([f.subclass("esri.widgets.support.GoTo")],c)}(a)}});
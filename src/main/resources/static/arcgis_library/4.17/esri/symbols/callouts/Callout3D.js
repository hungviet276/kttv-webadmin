// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(f,g,b,e,c){return function(d){function a(a){a=d.call(this,a)||this;a.visible=!0;return a}b.__extends(a,d);a.prototype.clone=function(){};b.__decorate([c.property({type:["line"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0);b.__decorate([c.property({readOnly:!0})],a.prototype,"visible",void 0);return a=b.__decorate([c.subclass("esri.symbols.callouts.Callout3D")],
a)}(e.JSONSupport)});
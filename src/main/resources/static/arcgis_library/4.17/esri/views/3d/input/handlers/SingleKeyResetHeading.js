// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","./SingleKey"],function(b,a,e,f){Object.defineProperty(a,"__esModule",{value:!0});a.SingleKeyResetHeading=void 0;b=function(a){function c(c,b,d){d=a.call(this,b,d)||this;d.view=c;d.key=b;return d}e.__extends(c,a);c.prototype.activate=function(){this.view.goTo({heading:0}).catch(function(){})};return c}(f.SingleKey);a.SingleKeyResetHeading=b});
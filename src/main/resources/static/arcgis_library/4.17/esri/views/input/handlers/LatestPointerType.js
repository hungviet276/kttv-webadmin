// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../InputHandler"],function(d,a,e,f){Object.defineProperty(a,"__esModule",{value:!0});a.LatestPointerType=void 0;d=function(a){function c(g){var b=a.call(this,!0)||this;b._onChange=g;b._value="mouse";b.registerIncoming("pointer-down",function(a){b._setValue("touch"===a.data.native.pointerType?"touch":"mouse")});b._moveHandler=b.registerIncoming("pointer-move",function(a){b._setValue("touch"===a.data.native.pointerType?"touch":"mouse")});b._moveHandler.pause();return b}
e.__extends(c,a);c.prototype._setValue=function(a){a!==this._value&&("touch"===a?this._moveHandler.resume():this._moveHandler.pause(),this._value=a,this._onChange(a))};return c}(f.InputHandler);a.LatestPointerType=d});
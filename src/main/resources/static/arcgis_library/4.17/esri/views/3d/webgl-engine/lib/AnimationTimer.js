// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/maybe","../../../../layers/support/timeUtils"],function(d,c,e,f){Object.defineProperty(c,"__esModule",{value:!0});c.AnimationTimer=void 0;d=function(){function b(a){void 0===a&&(a=!0);this.enabled=a;this._time=0}Object.defineProperty(b.prototype,"time",{get:function(){return e.isSome(this._forcedTime)?this._forcedTime:f.Milliseconds(this._time)},enumerable:!1,configurable:!0});b.prototype.advance=function(a){this.enabled&&(this._time+=a)};b.prototype.stopAtTime=
function(a){this._forcedTime=a};return b}();c.AnimationTimer=d});
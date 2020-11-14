// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","./MomentumEstimator"],function(f,c,g,h){Object.defineProperty(c,"__esModule",{value:!0});c.RotationMomentumEstimator=void 0;f=function(c){function b(a,e,d,b){void 0===a&&(a=3);void 0===e&&(e=.01);void 0===d&&(d=.95);void 0===b&&(b=12);return c.call(this,a,e,d,b)||this}g.__extends(b,c);b.prototype.add=function(a,b){if(this.value.hasLastValue){var d=this.value.lastValue;for(a-=d;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;a=d+a}c.prototype.add.call(this,
a,b)};return b}(h.MomentumEstimator);c.RotationMomentumEstimator=f});
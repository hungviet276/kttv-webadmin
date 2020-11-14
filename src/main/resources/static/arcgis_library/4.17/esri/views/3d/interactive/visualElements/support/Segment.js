// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64"],function(c,a,e,d){Object.defineProperty(a,"__esModule",{value:!0});a.EuclideanSegment=void 0;c=function(){function a(a,b){void 0===a&&(a=d.vec3f64.create());void 0===b&&(b=d.vec3f64.create());this.startRenderSpace=a;this.endRenderSpace=b;this.type="euclidean"}a.prototype.eval=function(a,b){e.vec3.lerp(b,this.startRenderSpace,this.endRenderSpace,a)};return a}();a.EuclideanSegment=
c});
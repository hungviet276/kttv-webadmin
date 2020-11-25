// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/Error","../../core/has"],function(f,a,d,b,c){Object.defineProperty(a,"__esModule",{value:!0});a.check=void 0;var e={checkMajorWebPerformanceCaveat:!0};a.check=function(a){a=d.__assign(d.__assign({},e),a);return c("esri-webgl")?a.checkMajorWebPerformanceCaveat&&c("esri-webgl-major-performance-caveat")?new b("webgl:major-performance-caveat-detected","Your WebGL implementation doesn't seem to support hardware accelerated rendering. Check your browser settings or if your GPU is in a blocklist."):
c("esri-webgl-high-precision-fragment")?c("esri-webgl-vertex-shader-samplers")?c("esri-webgl-element-index-uint")?c("esri-webgl-standard-derivatives")?c("esri-webgl-instanced-arrays")?null:new b("webgl:instanced-arrays-required","WebGL support for instanced rendering is required but not supported."):new b("webgl:standard-derivatives-required","WebGL support for standard derivatives is required but not supported."):new b("webgl:element-index-uint-required","WebGL support for uint vertex indices is required but not supported."):
new b("webgl:vertex-shader-samplers-required","WebGL support for vertex shader samplers is required but not supported."):new b("webgl:high-precision-fragment-required","WebGL support for high precision fragment shaders is required but not supported."):new b("webgl:required","WebGL is required but not supported.")}});
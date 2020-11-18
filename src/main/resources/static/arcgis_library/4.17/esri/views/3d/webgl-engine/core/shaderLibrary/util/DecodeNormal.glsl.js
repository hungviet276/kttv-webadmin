// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces"],function(f,a,d,e){Object.defineProperty(a,"__esModule",{value:!0});a.DecodeNormal=void 0;a.DecodeNormal=function(a){var c=e.glsl(b||(b=d.__makeTemplateObject(["\n    vec3 decodeNormal(vec2 f) {\n      float z \x3d 1.0 - abs(f.x) - abs(f.y);\n      return vec3(f + sign(f) * min(z, 0.0), z);\n    }\n  "],["\n    vec3 decodeNormal(vec2 f) {\n      float z \x3d 1.0 - abs(f.x) - abs(f.y);\n      return vec3(f + sign(f) * min(z, 0.0), z);\n    }\n  "])));
a.fragment.code.add(c);a.vertex.code.add(c)};var b});
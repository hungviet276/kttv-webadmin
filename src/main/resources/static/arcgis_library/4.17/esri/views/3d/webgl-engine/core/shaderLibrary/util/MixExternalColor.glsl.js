// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","./ColorConversion.glsl","../../shaderModules/interfaces"],function(f,a,d,e,b){Object.defineProperty(a,"__esModule",{value:!0});a.MixExternalColor=void 0;a.MixExternalColor=function(a){a.include(e.ColorConversion);a.code.add(b.glsl(c||(c=d.__makeTemplateObject(["\n    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {\n      // workaround for artifacts in OSX using Intel Iris Pro\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475\n      vec3 internalMixed \x3d internalColor * textureColor;\n      vec3 allMixed \x3d internalMixed * externalColor;\n\n      if (mode \x3d\x3d ",
") {\n        return allMixed;\n      }\n      else if (mode \x3d\x3d ",") {\n        return internalMixed;\n      }\n      else if (mode \x3d\x3d ",") {\n        return externalColor;\n      }\n      else {\n        // tint (or something invalid)\n        float vIn \x3d rgb2v(internalMixed);\n        vec3 hsvTint \x3d rgb2hsv(externalColor);\n        vec3 hsvOut \x3d vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);\n        return hsv2rgb(hsvOut);\n      }\n    }\n\n    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {\n      // workaround for artifacts in OSX using Intel Iris Pro\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475\n      float internalMixed \x3d internalOpacity * textureOpacity;\n      float allMixed \x3d internalMixed * externalOpacity;\n\n      if (mode \x3d\x3d ",
") {\n        return internalMixed;\n      }\n      else if (mode \x3d\x3d ",") {\n        return externalOpacity;\n      }\n      else {\n        // multiply or tint (or something invalid)\n        return allMixed;\n      }\n    }\n  "],["\n    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {\n      // workaround for artifacts in OSX using Intel Iris Pro\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475\n      vec3 internalMixed \x3d internalColor * textureColor;\n      vec3 allMixed \x3d internalMixed * externalColor;\n\n      if (mode \x3d\x3d ",
") {\n        return allMixed;\n      }\n      else if (mode \x3d\x3d ",") {\n        return internalMixed;\n      }\n      else if (mode \x3d\x3d ",") {\n        return externalColor;\n      }\n      else {\n        // tint (or something invalid)\n        float vIn \x3d rgb2v(internalMixed);\n        vec3 hsvTint \x3d rgb2hsv(externalColor);\n        vec3 hsvOut \x3d vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);\n        return hsv2rgb(hsvOut);\n      }\n    }\n\n    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {\n      // workaround for artifacts in OSX using Intel Iris Pro\n      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475\n      float internalMixed \x3d internalOpacity * textureOpacity;\n      float allMixed \x3d internalMixed * externalOpacity;\n\n      if (mode \x3d\x3d ",
") {\n        return internalMixed;\n      }\n      else if (mode \x3d\x3d ",") {\n        return externalOpacity;\n      }\n      else {\n        // multiply or tint (or something invalid)\n        return allMixed;\n      }\n    }\n  "])),b.glsl.int(1),b.glsl.int(2),b.glsl.int(3),b.glsl.int(2),b.glsl.int(3)))};var c});
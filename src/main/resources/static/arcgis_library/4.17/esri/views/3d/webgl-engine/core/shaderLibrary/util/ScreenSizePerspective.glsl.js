// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces","../../../materials/internal/MaterialUtil"],function(q,d,a,c,e){function f(b){b.vertex.code.add(c.glsl(g||(g=a.__makeTemplateObject(["\n    float screenSizePerspectiveMinSize(float size, vec4 factor) {\n      float nonZeroSize \x3d 1.0 - step(size, 0.0);\n\n      return (\n        factor.z * (\n          1.0 +\n          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding\n          nonZeroSize *\n          2.0 * factor.w / (\n            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1\n          )\n        )\n      );\n    }\n  "],
["\n    float screenSizePerspectiveMinSize(float size, vec4 factor) {\n      float nonZeroSize \x3d 1.0 - step(size, 0.0);\n\n      return (\n        factor.z * (\n          1.0 +\n          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding\n          nonZeroSize *\n          2.0 * factor.w / (\n            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1\n          )\n        )\n      );\n    }\n  "]))));b.vertex.code.add(c.glsl(h||
(h=a.__makeTemplateObject(["\n    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {\n      return absCosAngle * absCosAngle * absCosAngle;\n    }\n  "],["\n    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {\n      return absCosAngle * absCosAngle * absCosAngle;\n    }\n  "]))));b.vertex.code.add(c.glsl(k||(k=a.__makeTemplateObject(["\n    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {\n      return vec4(\n        min(params.x / (distanceToCamera - params.y), 1.0),\n        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),\n        params.z,\n        params.w\n      );\n    }\n  "],
["\n    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {\n      return vec4(\n        min(params.x / (distanceToCamera - params.y), 1.0),\n        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),\n        params.z,\n        params.w\n      );\n    }\n  "]))));b.vertex.code.add(c.glsl(l||(l=a.__makeTemplateObject(["\n    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {\n      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));\n    }\n  "],
["\n    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {\n      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));\n    }\n  "]))));b.vertex.code.add(c.glsl(m||(m=a.__makeTemplateObject(["\n    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {\n      return applyScreenSizePerspectiveScaleFactorFloat(\n        size,\n        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)\n      );\n    }\n  "],
["\n    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {\n      return applyScreenSizePerspectiveScaleFactorFloat(\n        size,\n        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)\n      );\n    }\n  "]))));b.vertex.code.add(c.glsl(n||(n=a.__makeTemplateObject(["\n    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {\n      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);\n    }\n  "],
["\n    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {\n      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);\n    }\n  "]))));b.vertex.code.add(c.glsl(p||(p=a.__makeTemplateObject(["\n    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {\n      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));\n    }\n  "],
["\n    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {\n      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));\n    }\n  "]))))}Object.defineProperty(d,"__esModule",{value:!0});d.ScreenSizePerspective=void 0;d.ScreenSizePerspective=f;(function(b){b.bindUniforms=function(b,a){a.screenSizePerspective&&(e.bindScreenSizePerspective(a.screenSizePerspective,b,"screenSizePerspective"),
e.bindScreenSizePerspective(a.screenSizePerspectiveAlignment||a.screenSizePerspective,b,"screenSizePerspectiveAlignment"))}})(f=d.ScreenSizePerspective||(d.ScreenSizePerspective={}));var g,h,k,l,m,n,p});
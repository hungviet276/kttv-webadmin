// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],function(h,a,c,g,d){Object.defineProperty(a,"__esModule",{value:!0});a.OutputDepth=void 0;a.OutputDepth=function(b,a){b.fragment.include(g.RgbaFloatEncoding);3===a.output?(b.extensions.add("GL_OES_standard_derivatives"),b.fragment.code.add(d.glsl(e||(e=c.__makeTemplateObject(["\n      float _calculateFragDepth(const in float depth) {\n        // calc polygon offset\n        const float SLOPE_SCALE \x3d 2.0;\n        const float BIAS \x3d 2.0 * .000015259;    // 1 / (2^16 - 1)\n        float m \x3d max(abs(dFdx(depth)), abs(dFdy(depth)));\n        float result \x3d depth + SLOPE_SCALE * m + BIAS;\n        return clamp(result, .0, .999999);\n      }\n\n      void outputDepth(float _linearDepth) {\n        gl_FragColor \x3d float2rgba(_calculateFragDepth(_linearDepth));\n      }\n    "],
["\n      float _calculateFragDepth(const in float depth) {\n        // calc polygon offset\n        const float SLOPE_SCALE \x3d 2.0;\n        const float BIAS \x3d 2.0 * .000015259;    // 1 / (2^16 - 1)\n        float m \x3d max(abs(dFdx(depth)), abs(dFdy(depth)));\n        float result \x3d depth + SLOPE_SCALE * m + BIAS;\n        return clamp(result, .0, .999999);\n      }\n\n      void outputDepth(float _linearDepth) {\n        gl_FragColor \x3d float2rgba(_calculateFragDepth(_linearDepth));\n      }\n    "]))))):
1===a.output&&b.fragment.code.add(d.glsl(f||(f=c.__makeTemplateObject(["\n      void outputDepth(float _linearDepth) {\n        gl_FragColor \x3d float2rgba(_linearDepth);\n      }\n    "],["\n      void outputDepth(float _linearDepth) {\n        gl_FragColor \x3d float2rgba(_linearDepth);\n      }\n    "]))))};var e,f});
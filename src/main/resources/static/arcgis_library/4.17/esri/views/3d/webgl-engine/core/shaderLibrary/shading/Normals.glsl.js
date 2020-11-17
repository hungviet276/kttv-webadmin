// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces"],function(k,a,c,d){Object.defineProperty(a,"__esModule",{value:!0});a.Normals=void 0;a.Normals=function(b,a){b=b.fragment;b.code.add(d.glsl(e||(e=c.__makeTemplateObject(["\n    struct ShadingNormalParameters {\n      vec3 normalView;\n      vec3 viewDirection;\n    } shadingParams;\n    "],["\n    struct ShadingNormalParameters {\n      vec3 normalView;\n      vec3 viewDirection;\n    } shadingParams;\n    "]))));1===a.doubleSidedMode?
b.code.add(d.glsl(f||(f=c.__makeTemplateObject(["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return dot(params.normalView, params.viewDirection) \x3e 0.0 ? normalize(-params.normalView) : normalize(params.normalView);\n      }\n    "],["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return dot(params.normalView, params.viewDirection) \x3e 0.0 ? normalize(-params.normalView) : normalize(params.normalView);\n      }\n    "])))):2===a.doubleSidedMode?
b.code.add(d.glsl(g||(g=c.__makeTemplateObject(["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);\n      }\n    "],["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);\n      }\n    "])))):b.code.add(d.glsl(h||(h=c.__makeTemplateObject(["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return normalize(params.normalView);\n      }\n    "],
["\n      vec3 shadingNormal(ShadingNormalParameters params) {\n        return normalize(params.normalView);\n      }\n    "]))))};var e,f,g,h});
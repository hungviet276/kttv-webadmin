// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../shaderModules/interfaces"],function(e,a,c,d){Object.defineProperty(a,"__esModule",{value:!0});a.ScreenSpacePass=void 0;a.ScreenSpacePass=function(a){a.attributes.add("position","vec2");a.varyings.add("uv","vec2");a.vertex.code.add(d.glsl(b||(b=c.__makeTemplateObject(["\n    void main(void) {\n      gl_Position \x3d vec4(position, 0.0, 1.0);\n      uv \x3d position * 0.5 + vec2(0.5);\n    }\n  "],["\n    void main(void) {\n      gl_Position \x3d vec4(position, 0.0, 1.0);\n      uv \x3d position * 0.5 + vec2(0.5);\n    }\n  "]))))};
var b});
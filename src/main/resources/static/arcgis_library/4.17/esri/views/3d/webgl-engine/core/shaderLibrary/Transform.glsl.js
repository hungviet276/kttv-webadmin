// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../shaderModules/interfaces"],function(g,a,b,c){Object.defineProperty(a,"__esModule",{value:!0});a.Transform=void 0;a.Transform=function(a,f){f.linearDepth?a.vertex.code.add(c.glsl(d||(d=b.__makeTemplateObject(["\n    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {\n      vec4 eye \x3d view * vec4(pos, 1.0);\n      depth \x3d (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;\n      return proj * eye;\n    }\n    "],
["\n    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {\n      vec4 eye \x3d view * vec4(pos, 1.0);\n      depth \x3d (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;\n      return proj * eye;\n    }\n    "])))):a.vertex.code.add(c.glsl(e||(e=b.__makeTemplateObject(["\n    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {\n      // Make sure the order of operations is the same as in transformPositionWithDepth.\n      return proj * (view * vec4(pos, 1.0));\n    }\n    "],
["\n    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {\n      // Make sure the order of operations is the same as in transformPositionWithDepth.\n      return proj * (view * vec4(pos, 1.0));\n    }\n    "]))))};var d,e});
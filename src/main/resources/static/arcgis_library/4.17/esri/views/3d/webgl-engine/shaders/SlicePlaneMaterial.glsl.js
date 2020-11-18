// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../core/shaderModules/interfaces","../core/shaderModules/ShaderBuilder"],function(h,b,c,d,g){Object.defineProperty(b,"__esModule",{value:!0});b.build=void 0;b.build=function(){var a=new g.ShaderBuilder;a.extensions.add("GL_OES_standard_derivatives");a.vertex.uniforms.add("proj","mat4").add("view","mat4");a.attributes.add("position","vec3");a.attributes.add("uv0","vec2");a.varyings.add("vUV","vec2");a.vertex.code.add(d.glsl(e||(e=c.__makeTemplateObject(["\n    void main(void) {\n      vUV \x3d uv0;\n      gl_Position \x3d proj * view * vec4(position, 1.0);\n    }\n  "],
["\n    void main(void) {\n      vUV \x3d uv0;\n      gl_Position \x3d proj * view * vec4(position, 1.0);\n    }\n  "]))));a.fragment.uniforms.add("backgroundColor","vec4").add("gridColor","vec4").add("ratio","float").add("gridWidth","float");a.fragment.code.add(d.glsl(f||(f=c.__makeTemplateObject(["\n    void main() {\n      const float LINE_WIDTH \x3d 1.0;\n\n      vec2 uvScaled \x3d vUV * gridWidth;\n      vec2 gridUV \x3d (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));\n      vec2 grid \x3d (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);\n\n      // mask aliasing along edges\n      grid.x *\x3d step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);\n      grid.y *\x3d step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);\n\n      float gridFade \x3d max(grid.x, grid.y);\n\n      float gridAlpha \x3d gridColor.a * gridFade;\n\n      // premultiply alpha in output\n      gl_FragColor \x3d\n        vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +\n        vec4(gridColor.rgb, 1.0) * gridAlpha;\n    }\n  "],
["\n    void main() {\n      const float LINE_WIDTH \x3d 1.0;\n\n      vec2 uvScaled \x3d vUV * gridWidth;\n      vec2 gridUV \x3d (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));\n      vec2 grid \x3d (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);\n\n      // mask aliasing along edges\n      grid.x *\x3d step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);\n      grid.y *\x3d step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);\n\n      float gridFade \x3d max(grid.x, grid.y);\n\n      float gridAlpha \x3d gridColor.a * gridFade;\n\n      // premultiply alpha in output\n      gl_FragColor \x3d\n        vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +\n        vec4(gridColor.rgb, 1.0) * gridAlpha;\n    }\n  "]))));
return a};var e,f});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../webgl-engine/core/shaderLibrary/hud/AlignPixel.glsl ../webgl-engine/core/shaderModules/interfaces ../webgl-engine/core/shaderModules/ShaderBuilder".split(" "),function(k,b,c,g,d,h){Object.defineProperty(b,"__esModule",{value:!0});b.build=void 0;b.build=function(){var a=new h.ShaderBuilder;a.attributes.add("position","vec3");a.attributes.add("color","vec4");a.attributes.add("size","float");a.varyings.add("vcolor","vec4");a.varyings.add("vsize","float");a.vertex.uniforms.add("transform",
"mat4").add("viewport","vec4").add("pixelRatio","float");a.include(g.AlignPixel);a.vertex.code.add(d.glsl(e||(e=c.__makeTemplateObject(["\n    void main(void) {\n      vec4 posProj \x3d transform * vec4(position, 0);\n      gl_Position \x3d alignToPixelCenter(posProj, viewport.zw);\n      vcolor \x3d color / 1.2;\n      vsize \x3d size * 5.0 * pixelRatio;\n      gl_PointSize \x3d vsize;\n    }\n  "],["\n    void main(void) {\n      vec4 posProj \x3d transform * vec4(position, 0);\n      gl_Position \x3d alignToPixelCenter(posProj, viewport.zw);\n      vcolor \x3d color / 1.2;\n      vsize \x3d size * 5.0 * pixelRatio;\n      gl_PointSize \x3d vsize;\n    }\n  "]))));
a.fragment.code.add(d.glsl(f||(f=c.__makeTemplateObject(["\n    void main() {\n      float cap \x3d 0.7;\n      float scale \x3d 1.0 / cap;\n      float helper \x3d clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);\n      float alpha \x3d clamp((cap - helper) * scale, 0.0, 1.0);\n      float intensity \x3d alpha * alpha * alpha;\n      if (vsize \x3c 3.0) {\n        intensity *\x3d 0.5;\n      }\n      gl_FragColor \x3d vec4(vcolor.xyz, intensity);\n    }\n  "],["\n    void main() {\n      float cap \x3d 0.7;\n      float scale \x3d 1.0 / cap;\n      float helper \x3d clamp(length(abs(gl_PointCoord - vec2(0.5))), 0.0, cap);\n      float alpha \x3d clamp((cap - helper) * scale, 0.0, 1.0);\n      float intensity \x3d alpha * alpha * alpha;\n      if (vsize \x3c 3.0) {\n        intensity *\x3d 0.5;\n      }\n      gl_FragColor \x3d vec4(vcolor.xyz, intensity);\n    }\n  "]))));
return a};var e,f});
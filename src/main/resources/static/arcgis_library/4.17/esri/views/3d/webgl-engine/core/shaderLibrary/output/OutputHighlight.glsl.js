// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces"],function(g,a,e,f){function b(a){a.fragment.uniforms.add("depthTex","sampler2D");a.fragment.uniforms.add("highlightViewportPixelSz","vec4");a.fragment.code.add(f.glsl(d||(d=e.__makeTemplateObject(["\n    void outputHighlight() {\n      vec4 fragCoord \x3d gl_FragCoord;\n\n      float sceneDepth \x3d texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;\n      if (fragCoord.z \x3e sceneDepth + 5e-7) {\n        gl_FragColor \x3d vec4(1.0, 1.0, 0.0, 1.0);\n      }\n      else {\n        gl_FragColor \x3d vec4(1.0, 0.0, 1.0, 1.0);\n      }\n    }\n  "],
["\n    void outputHighlight() {\n      vec4 fragCoord \x3d gl_FragCoord;\n\n      float sceneDepth \x3d texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;\n      if (fragCoord.z \x3e sceneDepth + 5e-7) {\n        gl_FragColor \x3d vec4(1.0, 1.0, 0.0, 1.0);\n      }\n      else {\n        gl_FragColor \x3d vec4(1.0, 0.0, 1.0, 1.0);\n      }\n    }\n  "]))))}Object.defineProperty(a,"__esModule",{value:!0});a.OutputHighlight=void 0;a.OutputHighlight=b;
(function(a){a.bindOutputHighlight=function(a,b,c){a.bindTexture(c.highlightDepthTexture,5);b.setUniform1i("depthTex",5);b.setUniform4f("highlightViewportPixelSz",0,0,c.inverseViewport[0],c.inverseViewport[1])}})(b=a.OutputHighlight||(a.OutputHighlight={}));var d});
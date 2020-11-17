// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../Slice.glsl ../Transform.glsl ../attributes/NormalAttribute.glsl ../attributes/TextureCoordinateAttribute.glsl ../attributes/VertexNormal.glsl ../output/OutputDepth.glsl ../output/OutputHighlight.glsl ../shading/VisualVariables.glsl ../util/AlphaDiscard.glsl ../../shaderModules/interfaces".split(" "),function(F,e,c,f,g,B,h,C,D,E,k,l,d){Object.defineProperty(e,"__esModule",{value:!0});e.DefaultMaterialAuxiliaryPasses=void 0;e.DefaultMaterialAuxiliaryPasses=function(a,
b){var e=a.vertex.code,m=a.fragment.code;if(1===b.output||3===b.output)a.include(g.Transform,{linearDepth:!0}),a.include(h.TextureCoordinateAttribute,b),a.include(k.VisualVariables,b),a.include(D.OutputDepth,b),a.include(f.Slice,b),a.vertex.uniforms.add("nearFar","vec2"),a.varyings.add("depth","float"),b.hasColorTexture&&a.fragment.uniforms.add("tex","sampler2D"),e.add(d.glsl(n||(n=c.__makeTemplateObject(["\n      void main(void) {\n        vpos \x3d calculateVPos();\n        vpos \x3d subtractOrigin(vpos);\n        vpos \x3d addVerticalOffset(vpos, localOrigin);\n        gl_Position \x3d transformPositionWithDepth(proj, view, vpos, nearFar, depth);\n        forwardTextureCoordinates();\n      }\n    "],
["\n      void main(void) {\n        vpos \x3d calculateVPos();\n        vpos \x3d subtractOrigin(vpos);\n        vpos \x3d addVerticalOffset(vpos, localOrigin);\n        gl_Position \x3d transformPositionWithDepth(proj, view, vpos, nearFar, depth);\n        forwardTextureCoordinates();\n      }\n    "])))),a.include(l.DiscardOrAdjustAlpha,b),m.add(d.glsl(p||(p=c.__makeTemplateObject(["\n      void main(void) {\n        discardBySlice(vpos);\n        ","\n        outputDepth(depth);\n      }\n    "],
["\n      void main(void) {\n        discardBySlice(vpos);\n        ","\n        outputDepth(depth);\n      }\n    "])),b.hasColorTexture?d.glsl(q||(q=c.__makeTemplateObject(["\n        vec4 texColor \x3d texture2D(tex, vuv0);\n        discardOrAdjustAlpha(texColor);"],["\n        vec4 texColor \x3d texture2D(tex, vuv0);\n        discardOrAdjustAlpha(texColor);"]))):""));2===b.output&&(a.include(g.Transform,{linearDepth:!1}),a.include(B.NormalAttribute,b),a.include(C.VertexNormal,b),a.include(h.TextureCoordinateAttribute,
b),a.include(k.VisualVariables,b),b.hasColorTexture&&a.fragment.uniforms.add("tex","sampler2D"),a.vertex.uniforms.add("viewNormal","mat4"),a.varyings.add("vPositionView","vec3"),e.add(d.glsl(r||(r=c.__makeTemplateObject(["\n      void main(void) {\n        vpos \x3d calculateVPos();\n        vpos \x3d subtractOrigin(vpos);\n        ","\n        vpos \x3d addVerticalOffset(vpos, localOrigin);\n        gl_Position \x3d transformPosition(proj, view, vpos);\n        forwardTextureCoordinates();\n      }\n    "],
["\n      void main(void) {\n        vpos \x3d calculateVPos();\n        vpos \x3d subtractOrigin(vpos);\n        ","\n        vpos \x3d addVerticalOffset(vpos, localOrigin);\n        gl_Position \x3d transformPosition(proj, view, vpos);\n        forwardTextureCoordinates();\n      }\n    "])),0===b.normalType?d.glsl(t||(t=c.__makeTemplateObject(["\n        vNormalWorld \x3d dpNormalView(vvLocalNormal(normalModel()));"],["\n        vNormalWorld \x3d dpNormalView(vvLocalNormal(normalModel()));"]))):
"")),a.include(f.Slice,b),a.include(l.DiscardOrAdjustAlpha,b),m.add(d.glsl(u||(u=c.__makeTemplateObject(["\n      void main() {\n        discardBySlice(vpos);\n        ","\n\n        ","\n        gl_FragColor \x3d vec4(vec3(0.5) + 0.5 * normal, 1.0);\n      }\n    "],["\n      void main() {\n        discardBySlice(vpos);\n        ","\n\n        ","\n        gl_FragColor \x3d vec4(vec3(0.5) + 0.5 * normal, 1.0);\n      }\n    "])),b.hasColorTexture?d.glsl(v||(v=c.__makeTemplateObject(["\n        vec4 texColor \x3d texture2D(tex, vuv0);\n        discardOrAdjustAlpha(texColor);"],
["\n        vec4 texColor \x3d texture2D(tex, vuv0);\n        discardOrAdjustAlpha(texColor);"]))):"",3===b.normalType?d.glsl(w||(w=c.__makeTemplateObject(["\n            vec3 normal \x3d screenDerivativeNormal(vPositionView);"],["\n            vec3 normal \x3d screenDerivativeNormal(vPositionView);"]))):d.glsl(x||(x=c.__makeTemplateObject(["\n            vec3 normal \x3d normalize(vNormalWorld);\n            if (gl_FrontFacing \x3d\x3d false) normal \x3d -normal;"],["\n            vec3 normal \x3d normalize(vNormalWorld);\n            if (gl_FrontFacing \x3d\x3d false) normal \x3d -normal;"]))))));
4===b.output&&(a.include(g.Transform,{linearDepth:!1}),a.include(h.TextureCoordinateAttribute,b),a.include(k.VisualVariables,b),b.hasColorTexture&&a.fragment.uniforms.add("tex","sampler2D"),e.add(d.glsl(y||(y=c.__makeTemplateObject(["\n      void main(void) {\n        vpos \x3d calculateVPos();\n        vpos \x3d subtractOrigin(vpos);\n        vpos \x3d addVerticalOffset(vpos, localOrigin);\n        gl_Position \x3d transformPosition(proj, view, vpos);\n        forwardTextureCoordinates();\n      }\n    "],
["\n      void main(void) {\n        vpos \x3d calculateVPos();\n        vpos \x3d subtractOrigin(vpos);\n        vpos \x3d addVerticalOffset(vpos, localOrigin);\n        gl_Position \x3d transformPosition(proj, view, vpos);\n        forwardTextureCoordinates();\n      }\n    "])))),a.include(f.Slice,b),a.include(l.DiscardOrAdjustAlpha,b),a.include(E.OutputHighlight),m.add(d.glsl(z||(z=c.__makeTemplateObject(["\n      void main() {\n        discardBySlice(vpos);\n        ","\n        outputHighlight();\n      }\n    "],
["\n      void main() {\n        discardBySlice(vpos);\n        ","\n        outputHighlight();\n      }\n    "])),b.hasColorTexture?d.glsl(A||(A=c.__makeTemplateObject(["\n        vec4 texColor \x3d texture2D(tex, vuv0);\n        discardOrAdjustAlpha(texColor);"],["\n        vec4 texColor \x3d texture2D(tex, vuv0);\n        discardOrAdjustAlpha(texColor);"]))):"")))};var n,q,p,t,r,v,w,x,u,y,A,z});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/shaderLibrary/ForwardLinearDepth.glsl ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/Transform.glsl ../core/shaderLibrary/output/OutputHighlight.glsl ../core/shaderLibrary/shading/NormalUtils.glsl ../core/shaderLibrary/shading/ReadShadowMap.glsl ../core/shaderLibrary/shading/Water.glsl ../core/shaderLibrary/shading/WaterDistortion.glsl ../core/shaderLibrary/util/AlphaDiscard.glsl ../core/shaderModules/interfaces ../core/shaderModules/ShaderBuilder".split(" "),
function(C,f,d,w,g,x,y,h,z,A,k,e,c,B){Object.defineProperty(f,"__esModule",{value:!0});f.build=void 0;f.build=function(b){var a=new B.ShaderBuilder;a.include(x.Transform,{linearDepth:!1});a.attributes.add("position","vec3");a.attributes.add("uv0","vec2");a.vertex.uniforms.add("proj","mat4").add("view","mat4").add("localOrigin","vec3");a.vertex.uniforms.add("waterColor","vec4");0===b.output&&(a.include(h.NormalUtils,b),a.include(w.ForwardLinearDepth,b),a.varyings.add("vuv","vec2"),a.varyings.add("vpos",
"vec3"),a.varyings.add("vnormal","vec3"),a.varyings.add("vtbnMatrix","mat3"),a.vertex.code.add(c.glsl(l||(l=d.__makeTemplateObject(["\n      void main(void) {\n        if (waterColor.a \x3c ",") {\n          // Discard this vertex\n          gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n          return;\n        }\n\n        vuv \x3d uv0;\n        vpos \x3d position;\n\n        vnormal \x3d getLocalUp(vpos, localOrigin);\n        vtbnMatrix \x3d getTBNMatrix(vnormal);\n\n        gl_Position \x3d transformPosition(proj, view, vpos);\n        forwardLinearDepth();\n      }\n    "],
["\n      void main(void) {\n        if (waterColor.a \x3c ",") {\n          // Discard this vertex\n          gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n          return;\n        }\n\n        vuv \x3d uv0;\n        vpos \x3d position;\n\n        vnormal \x3d getLocalUp(vpos, localOrigin);\n        vtbnMatrix \x3d getTBNMatrix(vnormal);\n\n        gl_Position \x3d transformPosition(proj, view, vpos);\n        forwardLinearDepth();\n      }\n    "])),c.glsl.float(e.symbolAlphaCutoff))),a.include(k.WaterDistortion,
b),a.include(g.Slice,b),b.receiveShadows&&a.include(z.ReadShadowMap,b),a.include(A.Water,b),a.fragment.uniforms.add("waterColor","vec4").add("lightingMainDirection","vec3").add("lightingMainIntensity","vec3").add("camPos","vec3").add("timeElapsed","float").add("view","mat4"),a.fragment.code.add(c.glsl(m||(m=d.__makeTemplateObject(["\n      void main() {\n        discardBySlice(vpos);\n        vec3 localUp \x3d vnormal;\n        // the created normal is in tangent space\n        vec4 tangentNormalFoam \x3d getSurfaceNormalAndFoam(vuv, timeElapsed);\n\n        // we rotate the normal according to the tangent-bitangent-normal-Matrix\n        vec3 n \x3d normalize(vtbnMatrix * tangentNormalFoam.xyz);\n        vec3 v \x3d -normalize(vpos - camPos);\n        vec3 l \x3d normalize(-lightingMainDirection);\n        float shadow \x3d ",
";\n        vec4 vPosView \x3d view*vec4(vpos, 1.0);\n        vec4 final \x3d vec4(getSeaColor(n, v, l, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz), waterColor.w);\n\n        // gamma correction\n        gl_FragColor \x3d delinearizeGamma(final);\n        gl_FragColor \x3d highlightSlice(gl_FragColor, vpos);\n      }\n    "],["\n      void main() {\n        discardBySlice(vpos);\n        vec3 localUp \x3d vnormal;\n        // the created normal is in tangent space\n        vec4 tangentNormalFoam \x3d getSurfaceNormalAndFoam(vuv, timeElapsed);\n\n        // we rotate the normal according to the tangent-bitangent-normal-Matrix\n        vec3 n \x3d normalize(vtbnMatrix * tangentNormalFoam.xyz);\n        vec3 v \x3d -normalize(vpos - camPos);\n        vec3 l \x3d normalize(-lightingMainDirection);\n        float shadow \x3d ",
";\n        vec4 vPosView \x3d view*vec4(vpos, 1.0);\n        vec4 final \x3d vec4(getSeaColor(n, v, l, waterColor.rgb, lightingMainIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz), waterColor.w);\n\n        // gamma correction\n        gl_FragColor \x3d delinearizeGamma(final);\n        gl_FragColor \x3d highlightSlice(gl_FragColor, vpos);\n      }\n    "])),b.receiveShadows?c.glsl(n||(n=d.__makeTemplateObject(["1.0 - readShadowMap(vpos, linearDepth)"],["1.0 - readShadowMap(vpos, linearDepth)"]))):
"1.0")));2===b.output&&(a.include(h.NormalUtils,b),a.include(k.WaterDistortion,b),a.include(g.Slice,b),a.varyings.add("vpos","vec3"),a.varyings.add("vuv","vec2"),a.vertex.code.add(c.glsl(p||(p=d.__makeTemplateObject(["\n        void main(void) {\n          if (waterColor.a \x3c ",") {\n            // Discard this vertex\n            gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n            return;\n          }\n\n          vuv \x3d uv0;\n          vpos \x3d position;\n\n          gl_Position \x3d transformPosition(proj, view, vpos);\n        }\n    "],
["\n        void main(void) {\n          if (waterColor.a \x3c ",") {\n            // Discard this vertex\n            gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n            return;\n          }\n\n          vuv \x3d uv0;\n          vpos \x3d position;\n\n          gl_Position \x3d transformPosition(proj, view, vpos);\n        }\n    "])),c.glsl.float(e.symbolAlphaCutoff))),a.fragment.uniforms.add("timeElapsed","float"),a.fragment.code.add(c.glsl(q||(q=d.__makeTemplateObject(["\n        void main() {\n          discardBySlice(vpos);\n\n          // the created normal is in tangent space and foam\n          vec4 tangentNormalFoam \x3d getSurfaceNormalAndFoam(vuv, timeElapsed);\n          tangentNormalFoam.xyz \x3d normalize(tangentNormalFoam.xyz);\n\n          gl_FragColor \x3d vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);\n        }\n    "],
["\n        void main() {\n          discardBySlice(vpos);\n\n          // the created normal is in tangent space and foam\n          vec4 tangentNormalFoam \x3d getSurfaceNormalAndFoam(vuv, timeElapsed);\n          tangentNormalFoam.xyz \x3d normalize(tangentNormalFoam.xyz);\n\n          gl_FragColor \x3d vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);\n        }\n    "])))));5===b.output&&(a.varyings.add("vpos","vec3"),a.vertex.code.add(c.glsl(r||(r=d.__makeTemplateObject(["\n        void main(void) {\n          if (waterColor.a \x3c ",
") {\n            // Discard this vertex\n            gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n            return;\n          }\n\n          vpos \x3d position;\n          gl_Position \x3d transformPosition(proj, view, vpos);\n        }\n    "],["\n        void main(void) {\n          if (waterColor.a \x3c ",") {\n            // Discard this vertex\n            gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n            return;\n          }\n\n          vpos \x3d position;\n          gl_Position \x3d transformPosition(proj, view, vpos);\n        }\n    "])),
c.glsl.float(e.symbolAlphaCutoff))),a.fragment.uniforms.add("waterColor","vec4"),a.fragment.code.add(c.glsl(t||(t=d.__makeTemplateObject(["\n        void main() {\n          gl_FragColor \x3d waterColor;\n        }\n    "],["\n        void main() {\n          gl_FragColor \x3d waterColor;\n        }\n    "])))));4===b.output&&(a.include(y.OutputHighlight),a.varyings.add("vpos","vec3"),a.vertex.code.add(c.glsl(u||(u=d.__makeTemplateObject(["\n      void main(void) {\n        if (waterColor.a \x3c ",
") {\n          // Discard this vertex\n          gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n          return;\n        }\n\n        vpos \x3d position;\n        gl_Position \x3d transformPosition(proj, view, vpos);\n      }\n    "],["\n      void main(void) {\n        if (waterColor.a \x3c ",") {\n          // Discard this vertex\n          gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n          return;\n        }\n\n        vpos \x3d position;\n        gl_Position \x3d transformPosition(proj, view, vpos);\n      }\n    "])),
c.glsl.float(e.symbolAlphaCutoff))),a.include(g.Slice,b),a.fragment.code.add(c.glsl(v||(v=d.__makeTemplateObject(["\n      void main() {\n        discardBySlice(vpos);\n        outputHighlight();\n      }\n    "],["\n      void main() {\n        discardBySlice(vpos);\n        outputHighlight();\n      }\n    "])))));return a};var l,n,m,p,q,r,t,u,v});
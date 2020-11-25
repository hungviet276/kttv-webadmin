// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/shaderLibrary/Slice.glsl ../core/shaderLibrary/hud/AlignPixel.glsl ../core/shaderLibrary/hud/HUD.glsl ../core/shaderModules/interfaces ../core/shaderModules/ShaderBuilder".split(" "),function(z,e,a,v,w,x,c,y){function f(d,b,a){3===a.length?d.setUniform4f(b,a[0],a[1],a[2],1):d.setUniform4fv(b,a)}Object.defineProperty(e,"__esModule",{value:!0});e.LineCallout=e.build=void 0;e.build=function(d){var b=new y.ShaderBuilder;b.include(w.AlignPixel);b.include(x.HUD,d);
b.include(v.Slice,d);b.attributes.add("uv0","vec2");b.vertex.uniforms.add("lineSize","float").add("pixelToNDC","vec2").add("borderSize","float").add("screenOffset","vec2");b.varyings.add("coverageSampling","vec4");b.varyings.add("lineSizes","vec2");b.vertex.code.add(c.glsl(g||(g=a.__makeTemplateObject(["\n    void main(void) {\n      ProjectHUDAux projectAux;\n      vec4 endPoint \x3d projectPositionHUD(projectAux);\n\n      vec3 vpos \x3d projectAux.posModel;\n      if (rejectBySlice(vpos)) {\n        gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n        return;\n      }\n    ",
"\n\n    ","\n      // Add view dependent polygon offset to get exact same original starting point. This is mostly\n      // used to get the correct depth value\n      vec3 posView \x3d (view * vec4(position, 1.0)).xyz;\n      applyHUDViewDependentPolygonOffset(auxpos1.w, projectAux.absCosAngle, posView);\n      vec4 startPoint \x3d proj * vec4(posView, 1.0);\n      // Apply screen offset to both start and end point\n      vec2 screenOffsetNorm \x3d screenOffsetScaled * 2.0 / viewport.zw;\n      startPoint.xy +\x3d screenOffsetNorm * startPoint.w;\n      endPoint.xy +\x3d screenOffsetNorm * endPoint.w;\n      // Align start and end to pixel origin\n      vec4 startAligned \x3d alignToPixelOrigin(startPoint, viewport.zw);\n      vec4 endAligned \x3d alignToPixelOrigin(endPoint, viewport.zw);\n    ",
"\n      vec4 projectedPosition \x3d mix(startAligned, endAligned, uv0.y);\n      // The direction of the line in screen space\n      vec2 screenSpaceDirection \x3d normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);\n      vec2 perpendicularScreenSpaceDirection \x3d vec2(screenSpaceDirection.y, -screenSpaceDirection.x);\n    ","\n      float halfPixelSize \x3d lineSizeScaled * 0.5;\n      // Calculate a pixel offset from the edge of the pixel, s.t. we keep the line aligned\n      // to pixels if it has a full pixel size. Since pixel aligned biases to the bottom-left,\n      // we bias the size to the right (for odd sizes) to balance out the bias. Grow sub-pixel\n      // sizes towards the left or right s.t. there is a smooth transition (e.g. from 2 to 3 px).\n      float halfWholePixelSize \x3d floor(lineSizeScaled) * 0.5;\n      float halfPixelSizeInt \x3d floor(halfWholePixelSize);\n\n      // Sub-pixel offset if we need to grow sub-pixels to the left\n      float subpixelOffset \x3d -fract(lineSizeScaled) * float(halfWholePixelSize \x3e 0.0);\n\n      // Pixel offset aligning to whole pixels and adding subpixel offset if needed\n      float pixelOffset \x3d -halfPixelSizeInt + subpixelOffset;\n\n      // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size\n      float padding \x3d 1.0 + borderSizeScaled;\n      vec2 ndcOffset \x3d (pixelOffset - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;\n\n      // Offset x/y from the center of the line in screen space\n      projectedPosition.xy +\x3d perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;\n\n      // Compute a coverage varying which we can use in the fragment shader to determine\n      // how much a pixel is actually covered by the line (i.e. to anti alias the line).\n      // This works by computing two coordinates that can be linearly interpolated and then\n      // subtracted to find out how far away from the line edge we are.\n      float edgeDirection \x3d (uv0.x * 2.0 - 1.0);\n\n      float halfBorderSize \x3d 0.5 * borderSizeScaled;\n      float halfPixelSizeAndBorder \x3d halfPixelSize + halfBorderSize;\n      float outerEdgeCoverageSampler \x3d edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);\n\n      float isOneSided \x3d float(lineSizeScaled \x3c 2.0 \x26\x26 borderSize \x3c 2.0);\n\n      coverageSampling \x3d vec4(\n        // Edge coordinate\n        outerEdgeCoverageSampler,\n\n        // Border edge coordinate\n        outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,\n\n        // Line offset\n        halfPixelSize - 0.5,\n\n        // Border offset\n        halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)\n      );\n\n      lineSizes \x3d vec2(lineSizeScaled, borderSizeScaled);\n\n      gl_Position \x3d projectedPosition;\n    }\n  "],
["\n    void main(void) {\n      ProjectHUDAux projectAux;\n      vec4 endPoint \x3d projectPositionHUD(projectAux);\n\n      vec3 vpos \x3d projectAux.posModel;\n      if (rejectBySlice(vpos)) {\n        gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n        return;\n      }\n    ","\n\n    ","\n      // Add view dependent polygon offset to get exact same original starting point. This is mostly\n      // used to get the correct depth value\n      vec3 posView \x3d (view * vec4(position, 1.0)).xyz;\n      applyHUDViewDependentPolygonOffset(auxpos1.w, projectAux.absCosAngle, posView);\n      vec4 startPoint \x3d proj * vec4(posView, 1.0);\n      // Apply screen offset to both start and end point\n      vec2 screenOffsetNorm \x3d screenOffsetScaled * 2.0 / viewport.zw;\n      startPoint.xy +\x3d screenOffsetNorm * startPoint.w;\n      endPoint.xy +\x3d screenOffsetNorm * endPoint.w;\n      // Align start and end to pixel origin\n      vec4 startAligned \x3d alignToPixelOrigin(startPoint, viewport.zw);\n      vec4 endAligned \x3d alignToPixelOrigin(endPoint, viewport.zw);\n    ",
"\n      vec4 projectedPosition \x3d mix(startAligned, endAligned, uv0.y);\n      // The direction of the line in screen space\n      vec2 screenSpaceDirection \x3d normalize(endAligned.xy / endAligned.w - startAligned.xy / startAligned.w);\n      vec2 perpendicularScreenSpaceDirection \x3d vec2(screenSpaceDirection.y, -screenSpaceDirection.x);\n    ","\n      float halfPixelSize \x3d lineSizeScaled * 0.5;\n      // Calculate a pixel offset from the edge of the pixel, s.t. we keep the line aligned\n      // to pixels if it has a full pixel size. Since pixel aligned biases to the bottom-left,\n      // we bias the size to the right (for odd sizes) to balance out the bias. Grow sub-pixel\n      // sizes towards the left or right s.t. there is a smooth transition (e.g. from 2 to 3 px).\n      float halfWholePixelSize \x3d floor(lineSizeScaled) * 0.5;\n      float halfPixelSizeInt \x3d floor(halfWholePixelSize);\n\n      // Sub-pixel offset if we need to grow sub-pixels to the left\n      float subpixelOffset \x3d -fract(lineSizeScaled) * float(halfWholePixelSize \x3e 0.0);\n\n      // Pixel offset aligning to whole pixels and adding subpixel offset if needed\n      float pixelOffset \x3d -halfPixelSizeInt + subpixelOffset;\n\n      // Compute full ndc offset, adding 1px padding for doing anti-aliasing and the border size\n      float padding \x3d 1.0 + borderSizeScaled;\n      vec2 ndcOffset \x3d (pixelOffset - padding + uv0.x * (lineSizeScaled + padding + padding)) * pixelToNDC;\n\n      // Offset x/y from the center of the line in screen space\n      projectedPosition.xy +\x3d perpendicularScreenSpaceDirection * ndcOffset * projectedPosition.w;\n\n      // Compute a coverage varying which we can use in the fragment shader to determine\n      // how much a pixel is actually covered by the line (i.e. to anti alias the line).\n      // This works by computing two coordinates that can be linearly interpolated and then\n      // subtracted to find out how far away from the line edge we are.\n      float edgeDirection \x3d (uv0.x * 2.0 - 1.0);\n\n      float halfBorderSize \x3d 0.5 * borderSizeScaled;\n      float halfPixelSizeAndBorder \x3d halfPixelSize + halfBorderSize;\n      float outerEdgeCoverageSampler \x3d edgeDirection * (halfPixelSizeAndBorder + halfBorderSize + 1.0);\n\n      float isOneSided \x3d float(lineSizeScaled \x3c 2.0 \x26\x26 borderSize \x3c 2.0);\n\n      coverageSampling \x3d vec4(\n        // Edge coordinate\n        outerEdgeCoverageSampler,\n\n        // Border edge coordinate\n        outerEdgeCoverageSampler - halfPixelSizeAndBorder * isOneSided,\n\n        // Line offset\n        halfPixelSize - 0.5,\n\n        // Border offset\n        halfBorderSize - 0.5 + halfPixelSizeAndBorder * (1.0 - isOneSided)\n      );\n\n      lineSizes \x3d vec2(lineSizeScaled, borderSizeScaled);\n\n      gl_Position \x3d projectedPosition;\n    }\n  "])),
d.occlusionTestEnabled?c.glsl(h||(h=a.__makeTemplateObject(["\n      if (!testVisibilityHUD(endPoint)) {\n        gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n        return;\n      }"],["\n      if (!testVisibilityHUD(endPoint)) {\n        gl_Position \x3d vec4(1e38, 1e38, 1e38, 1.0);\n        return;\n      }"]))):"",d.screenSizePerspectiveEnabled?c.glsl(k||(k=a.__makeTemplateObject(["\n      vec4 perspectiveFactor \x3d screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);\n      vec2 screenOffsetScaled \x3d applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);\n        "],
["\n      vec4 perspectiveFactor \x3d screenSizePerspectiveScaleFactor(projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);\n      vec2 screenOffsetScaled \x3d applyScreenSizePerspectiveScaleFactorVec2(screenOffset, perspectiveFactor);\n        "]))):c.glsl(l||(l=a.__makeTemplateObject(["\n      vec2 screenOffsetScaled \x3d screenOffset;\n        "],["\n      vec2 screenOffsetScaled \x3d screenOffset;\n        "]))),d.depthHudEnabled?d.depthHudAlignStartEnabled?c.glsl(m||
(m=a.__makeTemplateObject(["endAligned \x3d vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);"],["endAligned \x3d vec4(endAligned.xy / endAligned.w * startAligned.w, startAligned.zw);"]))):c.glsl(n||(n=a.__makeTemplateObject(["startAligned \x3d vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);"],["startAligned \x3d vec4(startAligned.xy / startAligned.w * endAligned.w, endAligned.zw);"]))):"",d.screenSizePerspectiveEnabled?c.glsl(p||(p=a.__makeTemplateObject(["\n      float lineSizeScaled \x3d applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);\n      float borderSizeScaled \x3d applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);\n        "],
["\n      float lineSizeScaled \x3d applyScreenSizePerspectiveScaleFactorFloat(lineSize, perspectiveFactor);\n      float borderSizeScaled \x3d applyScreenSizePerspectiveScaleFactorFloat(borderSize, perspectiveFactor);\n        "]))):c.glsl(q||(q=a.__makeTemplateObject(["\n      float lineSizeScaled \x3d lineSize;\n      float borderSizeScaled \x3d borderSize;\n        "],["\n      float lineSizeScaled \x3d lineSize;\n      float borderSizeScaled \x3d borderSize;\n        "])))));b.fragment.uniforms.add("color",
"vec4");b.fragment.uniforms.add("borderColor","vec4");b.fragment.code.add(c.glsl(r||(r=a.__makeTemplateObject(["\n    void main() {\n      // Mix between line and border coverage offsets depending on whether we need\n      // a border (based on the sidedness).\n      vec2 coverage \x3d min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);\n\n      // Mix between border and line color based on the line coverage (conceptually the line\n      // blends on top of the border background).\n      //\n      // Anti-alias by blending final result using the full (including optional border) coverage\n      // and the color alpha\n      float borderAlpha \x3d color.a * borderColor.a * coverage.y;\n      float colorAlpha \x3d color.a * coverage.x;\n\n      float finalAlpha \x3d mix(borderAlpha, 1.0, colorAlpha);\n\n    ",
"\n  }\n  "],["\n    void main() {\n      // Mix between line and border coverage offsets depending on whether we need\n      // a border (based on the sidedness).\n      vec2 coverage \x3d min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);\n\n      // Mix between border and line color based on the line coverage (conceptually the line\n      // blends on top of the border background).\n      //\n      // Anti-alias by blending final result using the full (including optional border) coverage\n      // and the color alpha\n      float borderAlpha \x3d color.a * borderColor.a * coverage.y;\n      float colorAlpha \x3d color.a * coverage.x;\n\n      float finalAlpha \x3d mix(borderAlpha, 1.0, colorAlpha);\n\n    ",
"\n  }\n  "])),d.depthHudEnabled?c.glsl(t||(t=a.__makeTemplateObject(["\n      if (finalAlpha \x3c 0.01) {\n        discard;\n      }\n      "],["\n      if (finalAlpha \x3c 0.01) {\n        discard;\n      }\n      "]))):c.glsl(u||(u=a.__makeTemplateObject(["\n      // Compute the finalRgb, but keep it pre-multiplied (for unpre-multiplied you\n      // need to divide by finalAlpha). We avoid the division here by setting the\n      // appropriate blending function in the material.\n      vec3 finalRgb \x3d mix(borderColor.rgb * borderAlpha, color.rgb, colorAlpha);\n      gl_FragColor \x3d vec4(finalRgb, finalAlpha);\n      "],
["\n      // Compute the finalRgb, but keep it pre-multiplied (for unpre-multiplied you\n      // need to divide by finalAlpha). We avoid the division here by setting the\n      // appropriate blending function in the material.\n      vec3 finalRgb \x3d mix(borderColor.rgb * borderAlpha, color.rgb, colorAlpha);\n      gl_FragColor \x3d vec4(finalRgb, finalAlpha);\n      "])))));return b};(function(a){a.bindUniforms=function(b,a,c){f(b,"color",a.color);b.setUniform1f("pixelRatio",c);b.setUniform2f("screenOffset",
a.screenOffset[0]*c,a.screenOffset[1]*c);null!==a.borderColor?(f(b,"borderColor",a.borderColor),b.setUniform1f("borderSize",c)):(b.setUniform4f("borderColor",0,0,0,0),b.setUniform1f("borderSize",0))}})(e.LineCallout||(e.LineCallout={}));var h,k,l,m,n,p,q,g,t,u,r});
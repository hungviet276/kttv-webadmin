// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../util/ScreenSizePerspective.glsl","../../shaderModules/interfaces"],function(r,e,c,q,d){function f(a,b){a.include(q.ScreenSizePerspective);a.attributes.add("position","vec3");a.attributes.add("normal","vec3");a.attributes.add("auxpos1","vec4");a.vertex.uniforms.add("proj","mat4");a.vertex.uniforms.add("view","mat4");a.vertex.uniforms.add("viewNormal","mat4");a.vertex.uniforms.add("viewport","vec4");a.vertex.uniforms.add("camPos","vec3");a.vertex.uniforms.add("polygonOffset",
"float");a.vertex.uniforms.add("cameraGroundRelative","float");a.vertex.uniforms.add("pixelRatio","float");a.vertex.uniforms.add("perDistancePixelRatio","float");a.vertex.uniforms.add("uRenderTransparentlyOccludedHUD","float");b.verticalOffsetEnabled&&a.vertex.uniforms.add("verticalOffset","vec4");b.screenSizePerspectiveEnabled&&a.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4");a.vertex.uniforms.add("hudVisibilityTexture","sampler2D");a.vertex.defines.addFloat("SMALL_OFFSET_ANGLE",.984807753012208);
a.vertex.code.add(d.glsl(g||(g=c.__makeTemplateObject(["\n    struct ProjectHUDAux {\n      vec3 posModel;\n      vec3 posView;\n      vec3 vnormal;\n\n      float distanceToCamera;\n      float absCosAngle;\n    };\n  "],["\n    struct ProjectHUDAux {\n      vec3 posModel;\n      vec3 posView;\n      vec3 vnormal;\n\n      float distanceToCamera;\n      float absCosAngle;\n    };\n  "]))));a.vertex.code.add(d.glsl(h||(h=c.__makeTemplateObject(["\n    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {\n      float pointGroundSign \x3d sign(pointGroundDistance);\n\n      if (pointGroundSign \x3d\x3d 0.0) {\n        pointGroundSign \x3d cameraGroundRelative;\n      }\n\n      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground\n      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise\n      float groundRelative \x3d cameraGroundRelative * pointGroundSign;\n\n      // view angle dependent part of polygon offset emulation\n      // we take the absolute value because the sign that is dropped is\n      // instead introduced using the ground-relative position of the symbol and the camera\n      if (polygonOffset \x3e .0) {\n        float cosAlpha \x3d clamp(absCosAngle, 0.01, 1.0);\n\n        float tanAlpha \x3d sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;\n        float factor \x3d (1.0 - tanAlpha / viewport[2]);\n\n        // same side of the terrain\n        if (groundRelative \x3e 0.0) {\n          posView *\x3d factor;\n        }\n        // opposite sides of the terrain\n        else {\n          posView /\x3d factor;\n        }\n      }\n\n      return groundRelative;\n    }\n  "],
["\n    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {\n      float pointGroundSign \x3d sign(pointGroundDistance);\n\n      if (pointGroundSign \x3d\x3d 0.0) {\n        pointGroundSign \x3d cameraGroundRelative;\n      }\n\n      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground\n      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise\n      float groundRelative \x3d cameraGroundRelative * pointGroundSign;\n\n      // view angle dependent part of polygon offset emulation\n      // we take the absolute value because the sign that is dropped is\n      // instead introduced using the ground-relative position of the symbol and the camera\n      if (polygonOffset \x3e .0) {\n        float cosAlpha \x3d clamp(absCosAngle, 0.01, 1.0);\n\n        float tanAlpha \x3d sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;\n        float factor \x3d (1.0 - tanAlpha / viewport[2]);\n\n        // same side of the terrain\n        if (groundRelative \x3e 0.0) {\n          posView *\x3d factor;\n        }\n        // opposite sides of the terrain\n        else {\n          posView /\x3d factor;\n        }\n      }\n\n      return groundRelative;\n    }\n  "]))));
a.vertex.code.add(d.glsl(k||(k=c.__makeTemplateObject(["\n    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {\n      float distanceToCamera \x3d length(posView);\n\n      // Compute offset in world units for a half pixel shift\n      float pixelOffset \x3d distanceToCamera * perDistancePixelRatio * 0.5;\n\n      // Apply offset along normal in the direction away from the ground surface\n      vec3 modelOffset \x3d normalModel * cameraGroundRelative * pixelOffset;\n\n      // Apply the same offset also on the view space position\n      vec3 viewOffset \x3d (viewNormal * vec4(modelOffset, 1.0)).xyz;\n\n      posModel +\x3d modelOffset;\n      posView +\x3d viewOffset;\n    }\n  "],
["\n    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {\n      float distanceToCamera \x3d length(posView);\n\n      // Compute offset in world units for a half pixel shift\n      float pixelOffset \x3d distanceToCamera * perDistancePixelRatio * 0.5;\n\n      // Apply offset along normal in the direction away from the ground surface\n      vec3 modelOffset \x3d normalModel * cameraGroundRelative * pixelOffset;\n\n      // Apply the same offset also on the view space position\n      vec3 viewOffset \x3d (viewNormal * vec4(modelOffset, 1.0)).xyz;\n\n      posModel +\x3d modelOffset;\n      posView +\x3d viewOffset;\n    }\n  "]))));
a.vertex.code.add(d.glsl(l||(l=c.__makeTemplateObject(["\n    vec4 projectPositionHUD(out ProjectHUDAux aux) {\n      // centerOffset is in view space and is used to implement world size offsetting\n      // of labels with respect to objects. It also pulls the label towards the viewer\n      // so that the label is visible in front of the object.\n      vec3 centerOffset \x3d auxpos1.xyz;\n\n      // The pointGroundDistance is the distance of the geometry to the ground and is\n      // negative if the point is below the ground, or positive if the point is above\n      // ground.\n      float pointGroundDistance \x3d auxpos1.w;\n\n      aux.posModel \x3d position;\n      aux.posView \x3d (view * vec4(aux.posModel, 1.0)).xyz;\n      aux.vnormal \x3d normal;\n\n      applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);\n\n      // Screen sized offset in world space, used for example for line callouts\n      // Note: keep this implementation in sync with the CPU implementation, see\n      //   - MaterialUtil.verticalOffsetAtDistance\n      //   - HUDMaterial.applyVerticalOffsetTransformation\n\n      aux.distanceToCamera \x3d length(aux.posView);\n\n      vec3 viewDirObjSpace \x3d normalize(camPos - aux.posModel);\n      float cosAngle \x3d dot(aux.vnormal, viewDirObjSpace);\n\n      aux.absCosAngle \x3d abs(cosAngle);\n\n      ",
"\n\n      ","\n\n      ","\n\n      float groundRelative \x3d applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);\n\n      ","\n\n      vec4 posProj \x3d proj * vec4(aux.posView, 1.0);\n\n      ","\n\n      ","\n\n      // constant part of polygon offset emulation\n      posProj.z -\x3d groundRelative * polygonOffset * posProj.w;\n      return posProj;\n    }\n  "],["\n    vec4 projectPositionHUD(out ProjectHUDAux aux) {\n      // centerOffset is in view space and is used to implement world size offsetting\n      // of labels with respect to objects. It also pulls the label towards the viewer\n      // so that the label is visible in front of the object.\n      vec3 centerOffset \x3d auxpos1.xyz;\n\n      // The pointGroundDistance is the distance of the geometry to the ground and is\n      // negative if the point is below the ground, or positive if the point is above\n      // ground.\n      float pointGroundDistance \x3d auxpos1.w;\n\n      aux.posModel \x3d position;\n      aux.posView \x3d (view * vec4(aux.posModel, 1.0)).xyz;\n      aux.vnormal \x3d normal;\n\n      applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);\n\n      // Screen sized offset in world space, used for example for line callouts\n      // Note: keep this implementation in sync with the CPU implementation, see\n      //   - MaterialUtil.verticalOffsetAtDistance\n      //   - HUDMaterial.applyVerticalOffsetTransformation\n\n      aux.distanceToCamera \x3d length(aux.posView);\n\n      vec3 viewDirObjSpace \x3d normalize(camPos - aux.posModel);\n      float cosAngle \x3d dot(aux.vnormal, viewDirObjSpace);\n\n      aux.absCosAngle \x3d abs(cosAngle);\n\n      ",
"\n\n      ","\n\n      ","\n\n      float groundRelative \x3d applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);\n\n      ","\n\n      vec4 posProj \x3d proj * vec4(aux.posView, 1.0);\n\n      ","\n\n      ","\n\n      // constant part of polygon offset emulation\n      posProj.z -\x3d groundRelative * polygonOffset * posProj.w;\n      return posProj;\n    }\n  "])),b.screenSizePerspectiveEnabled?b.verticalOffsetEnabled||1===b.screenCenterOffsetUnitsEnabled?"vec4 perspectiveFactor \x3d screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":
"":"",b.verticalOffsetEnabled?b.screenSizePerspectiveEnabled?"float verticalOffsetScreenHeight \x3d applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight \x3d verticalOffset.x;":"",b.verticalOffsetEnabled?d.glsl(m||(m=c.__makeTemplateObject(["\n            float worldOffset \x3d clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);\n            vec3 modelOffset \x3d aux.vnormal * worldOffset;\n            aux.posModel +\x3d modelOffset;\n            vec3 viewOffset \x3d (viewNormal * vec4(modelOffset, 1.0)).xyz;\n            aux.posView +\x3d viewOffset;\n            // Since we elevate the object, we need to take that into account\n            // in the distance to ground\n            pointGroundDistance +\x3d worldOffset;"],
["\n            float worldOffset \x3d clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);\n            vec3 modelOffset \x3d aux.vnormal * worldOffset;\n            aux.posModel +\x3d modelOffset;\n            vec3 viewOffset \x3d (viewNormal * vec4(modelOffset, 1.0)).xyz;\n            aux.posView +\x3d viewOffset;\n            // Since we elevate the object, we need to take that into account\n            // in the distance to ground\n            pointGroundDistance +\x3d worldOffset;"]))):
"",1!==b.screenCenterOffsetUnitsEnabled?d.glsl(n||(n=c.__makeTemplateObject(["\n            // Apply x/y in view space, but z in screen space (i.e. along posView direction)\n            aux.posView +\x3d vec3(centerOffset.x, centerOffset.y, 0.0);\n\n            // Same material all have same z !\x3d 0.0 condition so should not lead to\n            // branch fragmentation and will save a normalization if it's not needed\n            if (centerOffset.z !\x3d 0.0) {\n              aux.posView -\x3d normalize(aux.posView) * centerOffset.z;\n            }\n          "],
["\n            // Apply x/y in view space, but z in screen space (i.e. along posView direction)\n            aux.posView +\x3d vec3(centerOffset.x, centerOffset.y, 0.0);\n\n            // Same material all have same z !\x3d 0.0 condition so should not lead to\n            // branch fragmentation and will save a normalization if it's not needed\n            if (centerOffset.z !\x3d 0.0) {\n              aux.posView -\x3d normalize(aux.posView) * centerOffset.z;\n            }\n          "]))):"",
1===b.screenCenterOffsetUnitsEnabled?b.screenSizePerspectiveEnabled?"float centerOffsetY \x3d applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY \x3d centerOffset.y;":"",1===b.screenCenterOffsetUnitsEnabled?"posProj.xy +\x3d vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""));a.vertex.code.add(d.glsl(p||(p=c.__makeTemplateObject(["\n    bool testVisibilityHUD(vec4 posProj) {\n      // For occlusion testing, use the nearest pixel center to avoid\n      // subpixel filtering messing up the color we use to test for\n      vec4 posProjCenter \x3d alignToPixelCenter(posProj, viewport.zw);\n\n      vec4 occlusionPixel \x3d texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);\n\n      // the red pixel here indicates that the occlusion pixel passed the depth test against solid geometry and was written\n      // the green pixel stores transparency of transparent geometry (1.0 -\x3e fully transparent)\n      // note that we also check against green \x3d\x3d 0.0, i.e. transparent geometry that has opaque parts\n\n      // thus we render visible pixels that are occluded by semi-transparent (but not fully transparent!) geometry here\n      if (uRenderTransparentlyOccludedHUD \x3e 0.5) {\n        // multiplying by uRenderTransparentlyOccludedHUD allows us to ignore the second condition if\n        // uRenderTransparentlyOccludedHUD \x3d 0.75\n        return occlusionPixel.r * occlusionPixel.g \x3e 0.0 \x26\x26 occlusionPixel.g * uRenderTransparentlyOccludedHUD \x3c 1.0;\n      }\n\n      // and visible pixels that are not occluded by semi-transparent geometry here\n      return occlusionPixel.r * occlusionPixel.g \x3e 0.0 \x26\x26 occlusionPixel.g \x3d\x3d 1.0;\n    }\n  "],
["\n    bool testVisibilityHUD(vec4 posProj) {\n      // For occlusion testing, use the nearest pixel center to avoid\n      // subpixel filtering messing up the color we use to test for\n      vec4 posProjCenter \x3d alignToPixelCenter(posProj, viewport.zw);\n\n      vec4 occlusionPixel \x3d texture2D(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);\n\n      // the red pixel here indicates that the occlusion pixel passed the depth test against solid geometry and was written\n      // the green pixel stores transparency of transparent geometry (1.0 -\x3e fully transparent)\n      // note that we also check against green \x3d\x3d 0.0, i.e. transparent geometry that has opaque parts\n\n      // thus we render visible pixels that are occluded by semi-transparent (but not fully transparent!) geometry here\n      if (uRenderTransparentlyOccludedHUD \x3e 0.5) {\n        // multiplying by uRenderTransparentlyOccludedHUD allows us to ignore the second condition if\n        // uRenderTransparentlyOccludedHUD \x3d 0.75\n        return occlusionPixel.r * occlusionPixel.g \x3e 0.0 \x26\x26 occlusionPixel.g * uRenderTransparentlyOccludedHUD \x3c 1.0;\n      }\n\n      // and visible pixels that are not occluded by semi-transparent geometry here\n      return occlusionPixel.r * occlusionPixel.g \x3e 0.0 \x26\x26 occlusionPixel.g \x3d\x3d 1.0;\n    }\n  "]))))}
Object.defineProperty(e,"__esModule",{value:!0});e.HUD=void 0;e.HUD=f;(function(a){(function(a){a[a.OCCLUDED=0]="OCCLUDED";a[a.NOTOCCLUDED=1]="NOTOCCLUDED";a[a.BOTH=2]="BOTH";a[a.COUNT=3]="COUNT"})(a.TransparentRenderStyle||(a.TransparentRenderStyle={}));a.bindUniforms=function(b,c){b.setUniform1f("uRenderTransparentlyOccludedHUD",c.renderTransparentlyOccludedHUD===a.TransparentRenderStyle.OCCLUDED?1:c.renderTransparentlyOccludedHUD===a.TransparentRenderStyle.NOTOCCLUDED?0:.75)};a.bindVisibilityTexture=
function(a,c,d){c.setUniform1i("hudVisibilityTexture",1);a.bindTexture(d.hudVisibilityTexture,1);a.setActiveTexture(0)}})(f=e.HUD||(e.HUD={}));var g,h,k,m,n,l,p});
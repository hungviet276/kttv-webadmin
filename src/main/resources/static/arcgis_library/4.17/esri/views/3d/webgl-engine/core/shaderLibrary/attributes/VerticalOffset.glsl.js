// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../util/ScreenSizePerspective.glsl","../../shaderModules/interfaces"],function(v,d,e,t,f){function h(a,g){var b=a.vertex.code;g.verticalOffsetEnabled?(a.vertex.uniforms.add("verticalOffset","vec4"),g.screenSizePerspectiveEnabled&&(a.include(t.ScreenSizePerspective),a.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),b.add(f.glsl(k||(k=e.__makeTemplateObject(["\n    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      float viewDistance \x3d length((view * vec4(worldPos, 1.0)).xyz);\n      ",
"\n      ","\n      // Screen sized offset in world space, used for example for line callouts\n      float worldOffset \x3d clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);\n      return worldNormal * worldOffset;\n    }\n\n    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      return worldPos + calculateVerticalOffset(worldPos, localOrigin);\n    }\n    "],["\n    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      float viewDistance \x3d length((view * vec4(worldPos, 1.0)).xyz);\n      ",
"\n      ","\n      // Screen sized offset in world space, used for example for line callouts\n      float worldOffset \x3d clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);\n      return worldNormal * worldOffset;\n    }\n\n    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {\n      return worldPos + calculateVerticalOffset(worldPos, localOrigin);\n    }\n    "])),1===g.viewingMode?f.glsl(l||(l=e.__makeTemplateObject(["vec3 worldNormal \x3d normalize(worldPos + localOrigin);"],
["vec3 worldNormal \x3d normalize(worldPos + localOrigin);"]))):f.glsl(m||(m=e.__makeTemplateObject(["vec3 worldNormal \x3d vec3(0.0, 0.0, 1.0);"],["vec3 worldNormal \x3d vec3(0.0, 0.0, 1.0);"]))),g.screenSizePerspectiveEnabled?f.glsl(n||(n=e.__makeTemplateObject(["\n          float cosAngle \x3d dot(worldNormal, normalize(worldPos - camPos));\n          float verticalOffsetScreenHeight \x3d screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);"],
["\n          float cosAngle \x3d dot(worldNormal, normalize(worldPos - camPos));\n          float verticalOffsetScreenHeight \x3d screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);"]))):f.glsl(p||(p=e.__makeTemplateObject(["\n          float verticalOffsetScreenHeight \x3d verticalOffset.x;"],["\n          float verticalOffsetScreenHeight \x3d verticalOffset.x;"])))))):b.add(f.glsl(q||(q=e.__makeTemplateObject(["\n    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }\n    "],
["\n    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }\n    "]))))}function r(a,g,b,c){void 0===c&&(c=u);c.screenLength=a.screenLength;c.perDistance=Math.tan(.5*g)/(.5*b);c.minWorldLength=a.minWorldLength;c.maxWorldLength=a.maxWorldLength;return c}Object.defineProperty(d,"__esModule",{value:!0});d.calculateVerticalOffsetFactors=d.VerticalOffset=void 0;d.VerticalOffset=h;(function(a){a.bindUniforms=function(a,b,c){b.verticalOffset&&(b=r(b.verticalOffset,c.camera.fovY,
c.camera.fullViewport[3]),a.setUniform4f("verticalOffset",b.screenLength*(c.camera.pixelRatio||1),b.perDistance,b.minWorldLength,b.maxWorldLength))}})(h=d.VerticalOffset||(d.VerticalOffset={}));d.calculateVerticalOffsetFactors=r;var u={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0},l,m,n,p,k,q});
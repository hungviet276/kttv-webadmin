// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/libs/gl-matrix-2/mat4","../../../../../../core/libs/gl-matrix-2/mat4f32"],function(h,a,f,g){Object.defineProperty(a,"__esModule",{value:!0});a.View=void 0;(function(c){function a(d,b,a){f.mat4.translate(e,a,b);d.setUniform3fv("localOrigin",b);d.setUniformMatrix4fv("view",e)}c.bindCamPosition=function(d,b,a){d.setUniform3f("camPos",a[3]-b[0],a[7]-b[1],a[11]-b[2])};c.bindProjectionMatrix=function(a,b){a.setUniformMatrix4fv("proj",b)};c.bindNearFar=
function(a,b){a.setUniform2fv("nearFar",b)};c.bindViewCustomOrigin=a;c.bindView=function(d,b){a(d,b.origin,b.camera.viewMatrix)};c.bindViewport=function(a,b){a.setUniform4fv("viewport",b.camera.fullViewport)}})(a.View||(a.View={}));var e=g.mat4f32.create()});
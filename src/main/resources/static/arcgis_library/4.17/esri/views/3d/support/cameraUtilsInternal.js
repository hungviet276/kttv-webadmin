// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/mathUtils","../../../core/libs/gl-matrix-2/vec3","../../../core/libs/gl-matrix-2/vec3f64"],function(p,c,k,a,d){Object.defineProperty(c,"__esModule",{value:!0});c.directionToHeadingTilt=c.createDirectionUp=void 0;var m=d.vec3f64.create(),l=d.vec3f64.create();c.createDirectionUp=function(){return{direction:d.vec3f64.create(),up:d.vec3f64.create()}};c.directionToHeadingTilt=function(f,e,c,g,d){var b=m;a.vec3.normalize(b,f);var h=a.vec3.dot(b,g),n=0<h,h=Math.abs(h);
.99<h&&(h=Math.abs(a.vec3.dot(e,g)),.99>h?(a.vec3.copy(b,e),n&&a.vec3.scale(b,b,-1)):b=null);e=0;b&&(a.vec3.scale(l,g,a.vec3.dot(g,b)),a.vec3.subtract(b,b,l),e=a.vec3.dot(b,d)/(a.vec3.length(b)*a.vec3.length(d)),a.vec3.cross(l,b,d),e=(0<a.vec3.dot(l,g)?1:-1)*k.rad2deg(k.acosClamped(e)));f=k.rad2deg(k.acosClamped(-a.vec3.dot(g,f)/a.vec3.length(f)));if(!c)return{heading:e,tilt:f};c.heading=e;c.tilt=f;return c}});
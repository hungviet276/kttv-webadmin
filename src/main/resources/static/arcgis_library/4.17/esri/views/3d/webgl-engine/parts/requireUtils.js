// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/global"],function(f,a,e){Object.defineProperty(a,"__esModule",{value:!0});a.removeLoadedShaderModules=void 0;a.removeLoadedShaderModules=function(){var b,a=null===(b=e.require)||void 0===b?void 0:b.modules;if(a){b=0;for(var c=Object.keys(a);b<c.length;b++){var d=c[b];-1!==d.search(".glsl")&&delete a[d]}}}});
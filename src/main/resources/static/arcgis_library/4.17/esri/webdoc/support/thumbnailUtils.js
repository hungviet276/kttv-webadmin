// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,c){Object.defineProperty(c,"__esModule",{value:!0});c.getOptimalThumbnailSize=void 0;var e={width:600,height:400};c.getOptimalThumbnailSize=function(d,a){a=a||e;var b=a.width;a=a.height;var c=b/a;1.5>c?a=b/1.5:1.5<c&&(b=1.5*a);b>d.width&&(a*=d.width/b,b=d.width);a>d.height&&(b*=d.height/a,a=d.height);return{width:Math.round(b),height:Math.round(a)}}});
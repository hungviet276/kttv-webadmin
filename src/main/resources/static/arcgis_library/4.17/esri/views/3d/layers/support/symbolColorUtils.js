// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/mathUtils","../../../../core/maybe"],function(m,a,e,h){Object.defineProperty(a,"__esModule",{value:!0});a.encodeSymbolColor=a.parseColorMixMode=void 0;a.parseColorMixMode=function(c){switch(c){case "multiply":return 1;case "ignore":return 2;case "replace":return 3;case "tint":return 4;default:return 1}};a.encodeSymbolColor=function(c,a,b){if(h.isNone(c)||2===a)b[0]=255,b[1]=255,b[2]=255,b[3]=255;else{var g=e.clamp(Math.round(c[3]*f),0,f);a=0===g||4===
a?0:3===a?k:l;b[0]=e.clamp(Math.round(c[0]*d),0,d);b[1]=e.clamp(Math.round(c[1]*d),0,d);b[2]=e.clamp(Math.round(c[2]*d),0,d);b[3]=g+a}};var d=255,f=85,k=f,l=2*f});
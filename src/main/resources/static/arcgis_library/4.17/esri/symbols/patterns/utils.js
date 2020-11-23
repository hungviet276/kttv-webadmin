// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./Pattern3D","./StylePattern3D"],function(f,a,e,d){function b(a,c,b){if(!a)return a;switch(a.type){case "style":return c=new d,c.read(a,b),c}}Object.defineProperty(a,"__esModule",{value:!0});a.symbol3dPatternProperty=a.read=void 0;a.read=b;a.symbol3dPatternProperty={types:{key:"type",base:e,typeMap:{style:d}},json:{read:b,write:!0}}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,a){Object.defineProperty(a,"__esModule",{value:!0});a.createCache=void 0;a.createCache=function(){var c,b;return{invalidate:function(){c=b=void 0},result:function(a,e){if(c)for(var d=0;d<a.length;d++)c[d]!==a[d]&&(b=void 0);b||(b=e(),c=a);return b}}}});
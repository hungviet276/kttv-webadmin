// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(t,d){Object.defineProperty(d,"__esModule",{value:!0});d.createMapping=void 0;d.createMapping=function(d,r,l){var e=[],b=[];return{results:b,map:function(f){for(var m=f.map(d),g=b.slice(),c=0,a=0;a<f.length;a++){var n=f[a],p=m[a];if(p===e[c])b[a]=g[c],l(n,g[c],a),c++;else{for(var q=!1,k=1;k<e.length+1;k++){var h=(c+k)%e.length;if(e[h]===p){b[a]=g[h];l(f[a],g[h],a);c=h+1;q=!0;break}}q||(b[a]=r(n,a))}}b.length=f.length;e=m}}}});
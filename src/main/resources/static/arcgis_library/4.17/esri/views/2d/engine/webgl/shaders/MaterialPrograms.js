// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../webgl","./sources/resolver"],function(n,g,m,k){Object.defineProperty(g,"__esModule",{value:!0});g.createProgramTemplate=void 0;var l=function(a){var c={},d;for(d in a){for(var e=d,b=void 0,b=""+e[0].toUpperCase(),h=1;h<e.length;h++){var f=e[h];f===f.toUpperCase()?(b+="_",b+=f):b+=f.toUpperCase()}c[b]=a[d]}return m.glslifyDefineMap(c)};g.createProgramTemplate=function(a,c,d){var e=a+a.substring(a.lastIndexOf("/")),b=c+c.substring(c.lastIndexOf("/"));return{name:name,
attributes:d,shaders:function(a){return{vertexShader:l(a)+k.resolveIncludes(e+".vert"),fragmentShader:l(a)+k.resolveIncludes(b+".frag")}}}}});
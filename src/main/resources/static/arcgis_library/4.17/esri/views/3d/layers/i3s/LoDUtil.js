// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/libs/gl-matrix-2/vec3"],function(r,k,l){function p(d,c,e){for(;0<d;){var a=c.indexOf(d);if(0<=a)return a;d=e.getParentId(d)}return c.indexOf(d)}function q(d,c,e){for(var a=[c.remove[0]],b=[];1===a.length;)for(var k=a.pop(),h=b.length=0;h<c.load.length;h++){for(var g=c.load[h],f=e.getParentId(g);f!==k;)g=f,f=e.getParentId(g);f=a.indexOf(g);0>f&&(f=a.length,a.push(g),b.push([]));b[f].push(c.load[h])}c.load=a;for(h=0;h<a.length;h++)1<b[h].length?d.push({remove:[a[h]],
load:b[h]}):a[h]=b[h][0]}Object.defineProperty(k,"__esModule",{value:!0});k.splitWorkEntry=k.splitWorkEntries=k.sortFrontToBack=k.nodeDiff=void 0;k.nodeDiff=function(d,c,e){for(var a=0;a<c.length;a++)m[a]=!1,g[a]=null;for(a=0;a<d.length;a++)n[a]=!1,f[a]=null;for(a=0;a<c.length;a++){var b=p(c[a],d,e);0<=b&&(m[a]=!0,null!=f[b]?f[b].push(c[a]):f[b]=[c[a]])}for(a=0;a<d.length;a++)b=p(d[a],c,e),0<=b&&(n[a]=!0,null!=g[b]?g[b].push(d[a]):g[b]=[d[a]]);e=[];for(a=0;a<d.length;a++)null!=f[a]||n[a]||e.push({load:[],
remove:[d[a]]});for(a=0;a<c.length;a++)null!=g[a]||m[a]||e.push({load:[c[a]],remove:[]});for(a=0;a<c.length;a++)null!=g[a]&&(1<g[a].length||g[a][0]!==c[a])&&e.push({load:[c[a]],remove:g[a]});for(a=0;a<d.length;a++)null!=f[a]&&(1<f[a].length||f[a][0]!==d[a])&&e.push({load:f[a],remove:[d[a]]});return e};var n=[!1],f=[null],m=[!1],g=[null];k.sortFrontToBack=function(d,c,e){return d.sort(function(a,b){if(0===a.load.length&&0===b.load.length)return 0;if(0===a.load.length)return-1;if(0===b.load.length)return 1;
if(0===a.remove.length&&0===b.remove.length)return a=e.getRenderCenter(a.load[0]),b=e.getRenderCenter(b.load[0]),l.vec3.dot(a,c)-l.vec3.dot(b,c);if(0===a.remove.length)return-1;if(0===b.remove.length)return 1;if(1===a.load.length&&1===b.load.length)return a=e.getRenderCenter(a.load[0]),b=e.getRenderCenter(b.load[0]),l.vec3.dot(a,c)-l.vec3.dot(b,c);if(1===a.load.length)return-1;if(1===b.load.length)return 1;a=e.getRenderCenter(a.remove[0]);b=e.getRenderCenter(b.remove[0]);return l.vec3.dot(a,c)-l.vec3.dot(b,
c)})};k.splitWorkEntries=function(d,c,e){for(var a=0;a<d.length;++a){var b=d[a];b.load.length>c&&1===b.remove.length&&q(d,b,e)}};k.splitWorkEntry=q});
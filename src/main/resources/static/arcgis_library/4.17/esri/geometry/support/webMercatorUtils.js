// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../core/lang ../SpatialReference ./geodesicConstants ./spatialReferenceUtils".split(" "),function(w,c,m,n,p,f){function q(a,b,g,c,d){var e;if("x"in a&&"x"in d)b=b(a.x,a.y,r,c),d.x=b[0],d.y=b[1];else if("xmin"in a&&"xmin"in d)e=b(a.xmin,a.ymin,r,c),d.xmin=e[0],d.ymin=e[1],b=b(a.xmax,a.ymax,r,c),d.xmax=b[0],d.ymax=b[1];else if("paths"in a&&"paths"in d||"rings"in a&&"rings"in d){e="paths"in a?a.paths:a.rings;var h=[],l=void 0;for(a=0;a<e.length;a++){var f=e[a],l=[];h.push(l);
for(var k=0;k<f.length;k++)l.push(b(f[k][0],f[k][1],[0,0],c)),2<f[k].length&&l[k].push(f[k][2]),3<f[k].length&&l[k].push(f[k][3])}"paths"in d?d.paths=h:d.rings=h}else if("points"in a&&"points"in d){e=a.points;h=[];for(a=0;a<e.length;a++)h[a]=b(e[a][0],e[a][1],[0,0],c),2<e[a].length&&h[a].push(e[a][2]),3<e[a].length&&h[a].push(e[a][3]);d.points=h}else if("type"in a&&"mesh"===a.type&&"type"in d&&"mesh"===d.type&&(e=a.vertexAttributes&&a.vertexAttributes.position,h=d.vertexAttributes&&d.vertexAttributes.position,
e))for(l=[0,0],a=0;a<e.length;a+=3)b(e[a],e[a+1],l,c),h[a]=l[0],h[a+1]=l[1];d.spatialReference=g;return d}function v(a,b){a=a&&(null!=a.wkid||null!=a.wkt?a:a.spatialReference);b=b&&(null!=b.wkid||null!=b.wkt?b:b.spatialReference);return a&&b?f.equals(b,a)?!0:f.isWebMercator(b)&&f.isWGS84(a)||f.isWebMercator(a)&&f.isWGS84(b):!1}function t(a,b,g){void 0===g&&(g=[0,0]);89.99999<b?b=89.99999:-89.99999>b&&(b=-89.99999);b*=.017453292519943;g[0]=.017453292519943*a*p.earthRadius;g[1]=p.halfEarthRadius*Math.log((1+
Math.sin(b))/(1-Math.sin(b)));return g}function u(a,b,g,c){void 0===g&&(g=[0,0]);void 0===c&&(c=!1);a=a/p.earthRadius*57.29577951308232;g[0]=c?a:a-360*Math.floor((a+180)/360);g[1]=57.29577951308232*(Math.PI/2-2*Math.atan(Math.exp(-1*b/p.earthRadius)));return g}Object.defineProperty(c,"__esModule",{value:!0});c.webMercatorToGeographic=c.geographicToWebMercator=c.xyToLngLat=c.lngLatToXY=c.project=c.canProject=void 0;var r=[0,0];c.canProject=v;c.project=function(a,b){var c=a&&a.spatialReference;b=b&&
(null!=b.wkid||null!=b.wkt?b:b.spatialReference);return v(c,b)?f.equals(c,b)?m.clone(a):f.isWebMercator(b)?q(a,t,n.WebMercator,!1,m.clone(a)):f.isWGS84(b)?q(a,u,n.WGS84,!1,m.clone(a)):null:null};c.lngLatToXY=t;c.xyToLngLat=u;c.geographicToWebMercator=function(a,b,c){void 0===b&&(b=!1);void 0===c&&(c=m.clone(a));return q(a,t,n.WebMercator,b,c)};c.webMercatorToGeographic=function(a,b,c){void 0===b&&(b=!1);void 0===c&&(c=m.clone(a));return q(a,u,n.WGS84,b,c)}});
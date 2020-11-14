// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../geometry","../../core/libs/gl-matrix-2/vec2","./coordsUtils"],function(r,c,n,p,q){Object.defineProperty(c,"__esModule",{value:!0});c.nearestCoordinate=void 0;c.nearestCoordinate=function(a,b){var c=b.spatialReference;b=[b.x,b.y];var e=Number.POSITIVE_INFINITY,h=0,k=0,d=[0,0],f=0;for(a="extent"===a.type?[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]:a.rings;f<a.length;f++)for(var l=a[f],g=0;g<l.length-1;g++){q.projectPointOnLine(d,
b,l,g);var m=p.vec2.distance(b,d);m<e&&(e=m,h=d[0],k=d[1])}return{coordinate:new n.Point({x:h,y:k,spatialReference:c}),distance:e}}});
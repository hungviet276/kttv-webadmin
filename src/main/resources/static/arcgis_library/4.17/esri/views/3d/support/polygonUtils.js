// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./projectionUtils"],function(g,a,f){Object.defineProperty(a,"__esModule",{value:!0});a.polygonToPolygon=void 0;a.polygonToPolygon=function(b,c,d,a){void 0===d&&(d=c.spatialReference);void 0===a&&(a=0);var e=[];if(!f.pathsToPaths(b.rings,b.hasZ,b.hasM,b.spatialReference,e,d,a))return!1;c.rings=e;c.spatialReference=d;c.hasZ=b.hasZ;c.hasM=b.hasM;return!0}});
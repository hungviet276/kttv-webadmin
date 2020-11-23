// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,a){Object.defineProperty(a,"__esModule",{value:!0});a.getElevationAtPoint=void 0;a.getElevationAtPoint=function(a,b,c){void 0===c&&(c="ground");return a.getElevation(b.x,b.y,b.z||0,b.spatialReference,c)}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../geometry/support/jsonUtils"],function(f,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.decodeGeometries=a.encodeGeometries=void 0;a.encodeGeometries=function(a){return{geometryType:b.getJsonType(a[0]),geometries:a.map(function(a){return a.toJSON()})}};a.decodeGeometries=function(a,c,d){var e=b.getGeometryType(c);return a.map(function(a){a=e.fromJSON(a);a.spatialReference=d;return a})}});
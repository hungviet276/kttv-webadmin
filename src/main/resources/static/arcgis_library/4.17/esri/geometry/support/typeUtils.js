// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/jsonMap"],function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.typeKebabDictionary=a.featureGeometryTypeKebabDictionary=a.isFeatureGeometryType=void 0;a.isFeatureGeometryType=function(a){return"point"===a||"multipoint"===a||"polyline"===a||"polygon"===a};a.featureGeometryTypeKebabDictionary=b.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});a.typeKebabDictionary=
b.strict()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})});
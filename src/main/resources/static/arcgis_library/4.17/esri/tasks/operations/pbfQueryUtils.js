// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./pbfFeatureServiceParser"],function(k,b,g){Object.defineProperty(b,"__esModule",{value:!0});b.parsePBFFeatureQuery=void 0;b.parsePBFFeatureQuery=function(a,b){var c=g.parseFeatureQuery(a,b);a=c.queryResult.featureResult;b=c.queryResult.queryGeometry;c=c.queryResult.queryGeometryType;if(a&&a.features&&a.features.length&&a.objectIdFieldName)for(var h=a.objectIdFieldName,d=0,f=a.features;d<f.length;d++){var e=f[d];e.attributes&&(e.objectId=e.attributes[h])}a&&(a.queryGeometry=
b,a.queryGeometryType=c);return a}});
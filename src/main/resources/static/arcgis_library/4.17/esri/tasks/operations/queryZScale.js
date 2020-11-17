// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./zscale"],function(e,b,d){Object.defineProperty(b,"__esModule",{value:!0});b.applyFeatureSetZUnitScaling=void 0;b.applyFeatureSetZUnitScaling=function(b,c,a){if(a&&a.features&&a.hasZ&&(b=d.getGeometryZScaler(a.geometryType,c,b.outSpatialReference)))for(c=0,a=a.features;c<a.length;c++)b(a[c].geometry)}});
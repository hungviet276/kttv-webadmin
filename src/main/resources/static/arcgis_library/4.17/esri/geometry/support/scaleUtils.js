// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/unitUtils"],function(f,b,d){function e(c,a){a=d.getMetersPerUnitForSR(a);return c/(a*d.inchesPerMeter*96)}Object.defineProperty(b,"__esModule",{value:!0});b.getExtentForScale=b.getScaleForResolution=b.getResolutionForScale=b.getScale=void 0;b.getScale=function(c,a){a=a||c.extent;c=c.width;var b=d.getMetersPerUnitForSR(a&&a.spatialReference);return a&&c?a.width/c*b*d.inchesPerMeter*96:0};b.getResolutionForScale=e;b.getScaleForResolution=function(c,a){a=d.getMetersPerUnitForSR(a);
return c*a*d.inchesPerMeter*96};b.getExtentForScale=function(c,a){var b=c.extent;c=c.width;a=e(a,b.spatialReference);return b.clone().expand(a*c/b.width)}});
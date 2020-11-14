// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../core/compilerUtils","../core/maybe","../symbols/support/unitConversionUtils"],function(r,c,p,d,q){function m(a,b){return d.isNone(b)||!b.mode?a?"absolute-height":"on-the-ground":b.mode}function k(a,b){return m(d.isSome(a)?a.hasZ:!1,b)}function n(a){var b=l(a);return k(a.geometry,b)}function l(a){return a.layer&&"elevationInfo"in a.layer?a.layer.elevationInfo:null}Object.defineProperty(c,"__esModule",{value:!0});c.getConvertedElevation=c.getZForElevationMode=c.hasGraphicFeatureExpressionInfo=
c.getGraphicEffectiveElevationInfo=c.getGraphicEffectiveElevationMode=c.getGeometryEffectiveElevationMode=c.getEffectiveElevationMode=void 0;c.getEffectiveElevationMode=m;c.getGeometryEffectiveElevationMode=k;c.getGraphicEffectiveElevationMode=n;c.getGraphicEffectiveElevationInfo=function(a){var b=l(a);a=k(a.geometry,b);b=d.isSome(b)&&"on-the-ground"!==a?d.unwrapOr(b.offset,0)*q.getMetersPerUnit(d.unwrapOr(b.unit,"meters")):0;return{mode:a,offset:b}};c.hasGraphicFeatureExpressionInfo=function(a){if("on-the-ground"===
n(a))return!1;a=l(a);a=d.isSome(a)&&a.featureExpressionInfo?a.featureExpressionInfo.expression:null;return!(!a||"0"===a)};c.getZForElevationMode=function(a,b,f){if(!d.isNone(f)&&f.mode){var c=a.hasZ?a.z:0,g=d.isSome(f.offset)?f.offset:0;switch(f.mode){case "absolute-height":return c-g;case "on-the-ground":return 0;case "relative-to-ground":return a=(b.elevationProvider.getElevation(a.x,a.y,a.z,a.spatialReference,"ground")||0)+g,c-a;case "relative-to-scene":return a=(b.elevationProvider.getElevation(a.x,
a.y,a.z,a.spatialReference,"scene")||0)+g,c-a}}};c.getConvertedElevation=function(a,b,c,e){void 0===e&&(e=null);if(!d.isNone(c)){var g=d.isSome(e)?e.mode:"absolute-height";if("on-the-ground"===g)return 0;var h=b.hasZ?b.z:0,f=d.isSome(c.offset)?c.offset:0;switch(c.mode){case "absolute-height":h+=f;break;case "on-the-ground":h=a.elevationProvider.getElevation(b.x,b.y,0,b.spatialReference,"ground")||0;break;case "relative-to-ground":c=(a.elevationProvider.getElevation(b.x,b.y,b.z,b.spatialReference,
"ground")||0)+f;h+=c;break;case "relative-to-scene":c=(a.elevationProvider.getElevation(b.x,b.y,b.z,b.spatialReference,"scene")||0)+f,h+=c}e=d.isSome(e)&&d.isSome(e.offset)?e.offset:0;switch(g){case "absolute-height":return h-e;case "relative-to-ground":return c=(a.elevationProvider.getElevation(b.x,b.y,b.z,b.spatialReference,"ground")||0)+e,h-c;case "relative-to-scene":return c=(a.elevationProvider.getElevation(b.x,b.y,b.z,b.spatialReference,"scene")||0)+e,h-c;default:return p.neverReached(g),null}}}});
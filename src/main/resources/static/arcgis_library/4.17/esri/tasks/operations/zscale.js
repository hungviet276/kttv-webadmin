// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/unitUtils","../../geometry/support/spatialReferenceUtils"],function(q,g,h,m){function n(b,c,d){if(null==b.hasM||b.hasZ)for(b=0;b<c.length;b++)for(var f=0,a=c[b];f<a.length;f++){var e=a[f];2<e.length&&(e[2]*=d)}}function p(b,c,d){if(b)for(var f=0;f<b.length;f++){var a=b[f].geometry,e=d;if(a&&a.spatialReference&&!m.equals(a.spatialReference,c)&&(e=h.getMetersPerVerticalUnitForSR(a.spatialReference)/e,1!==e))if("x"in a)null!=a.z&&(a.z*=e);else if("rings"in a)n(a,
a.rings,e);else if("paths"in a)n(a,a.paths,e);else if("points"in a&&(null==a.hasM||a.hasZ))for(var k=0,a=a.points;k<a.length;k++){var l=a[k];2<l.length&&(l[2]*=e)}}}Object.defineProperty(g,"__esModule",{value:!0});g.unapplyEditsZUnitScaling=g.getGeometryZScaler=void 0;g.getGeometryZScaler=function(b,c,d){if(!c||!d||d.vcsWkid||m.equals(c,d))return null;c=h.getMetersPerVerticalUnitForSR(c);d=h.getMetersPerVerticalUnitForSR(d);var f=c/d;if(1===f)return null;switch(b){case "point":case "esriGeometryPoint":return function(a){a&&
null!=a.z&&(a.z*=f)};case "polyline":case "esriGeometryPolyline":return function(a){if(a){var e=0;for(a=a.paths;e<a.length;e++)for(var b=0,d=a[e];b<d.length;b++){var c=d[b];2<c.length&&(c[2]*=f)}}};case "polygon":case "esriGeometryPolygon":return function(a){if(a){var e=0;for(a=a.rings;e<a.length;e++)for(var b=0,d=a[e];b<d.length;b++){var c=d[b];2<c.length&&(c[2]*=f)}}};case "multipoint":case "esriGeometryMultipoint":return function(a){if(a){var b=0;for(a=a.points;b<a.length;b++){var c=a[b];2<c.length&&
(c[2]*=f)}}};default:return null}};g.unapplyEditsZUnitScaling=function(b,c,d){if((b||c)&&d){var f=h.getMetersPerVerticalUnitForSR(d);p(b,d,f);p(c,d,f)}}});
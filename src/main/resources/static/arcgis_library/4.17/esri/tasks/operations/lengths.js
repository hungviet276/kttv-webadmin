// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/jsonMap"],function(k,a,g){Object.defineProperty(a,"__esModule",{value:!0});a.lengthsToRESTParameters=void 0;var h=new g.default({preserveShape:"preserve-shape"});a.lengthsToRESTParameters=function(b){var d=b.toJSON(),a=d.lengthUnit,e=d.geodesic,f=d.calculationType,c={};c.polylines=JSON.stringify(d.polylines);b=b.polylines[0].spatialReference;c.sr=b.wkid?b.wkid:JSON.stringify(b.toJSON());a&&(c.lengthUnit=a);e&&(c.geodesic=e);f&&(c.calculationType=h.toJSON(f));
return c}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/maybe","./lineGraphicVisualElementUtils","./pointGraphicVisualElementUtils"],function(e,a,b,c,d){Object.defineProperty(a,"__esModule",{value:!0});a.createVisualElements=void 0;a.createVisualElements=function(a){switch(b.unwrap(a.graphic.geometry).type){case "point":return d.createVisualElements(a);case "polygon":case "polyline":return c.createVisualElements(a);default:return null}}});
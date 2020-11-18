// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../CIMCursor","../CIMOperators"],function(b,a,d,e){Object.defineProperty(a,"__esModule",{value:!0});a.CIMMarkerPlacementHelper=void 0;b=function(){function a(){}a.getPlacement=function(a,b,f){var c=e.getPlacementOperator(b);if(!c)return null;a=d.cloneAndDecodeGeometry(a);return c.execute(a,b,f)};return a}();a.CIMMarkerPlacementHelper=b});
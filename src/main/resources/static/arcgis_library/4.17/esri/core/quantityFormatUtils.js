// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./unitFormatUtils"],function(g,a,e){Object.defineProperty(a,"__esModule",{value:!0});a.formatDMS=a.formatImperialArea=a.formatImperialVerticalLength=a.formatImperialLength=a.formatMetricArea=a.formatMetricVerticalLength=a.formatMetricLength=a.formatDecimal=void 0;a.formatDecimal=function(a,d,c,b,f){void 0===b&&(b=2);void 0===f&&(f="abbr");return e.formatDecimal(a,d.toUnit(c).value,c,b,f)};a.formatMetricLength=function(a,d,c,b){void 0===c&&(c=2);void 0===b&&(b="abbr");
if("length"!==d.measure)throw Error("quantity is not a length");return e.formatMetricLength(a,d.value,d.unit,c,b)};a.formatMetricVerticalLength=function(a,d,c,b){void 0===c&&(c=2);void 0===b&&(b="abbr");if("length"!==d.measure)throw Error("quantity is not a length");return e.formatMetricVerticalLength(a,d.value,d.unit,c,b)};a.formatMetricArea=function(a,d,c,b){void 0===c&&(c=2);void 0===b&&(b="abbr");if("area"!==d.measure)throw Error("quantity is not an area");return e.formatMetricArea(a,d.value,
d.unit,c,b)};a.formatImperialLength=function(a,d,c,b){void 0===c&&(c=2);void 0===b&&(b="abbr");if("length"!==d.measure)throw Error("quantity is not a length");return e.formatImperialLength(a,d.value,d.unit,c,b)};a.formatImperialVerticalLength=function(a,d,c,b){void 0===c&&(c=2);void 0===b&&(b="abbr");if("length"!==d.measure)throw Error("quantity is not a length");return e.formatImperialVerticalLength(a,d.value,d.unit,c,b)};a.formatImperialArea=function(a,d,c,b){void 0===c&&(c=2);void 0===b&&(b="abbr");
if("area"!==d.measure)throw Error("quantity is not an area");return e.formatImperialArea(a,d.value,d.unit,c,b)};a.formatDMS=function(a){if("angle"!==a.measure)throw Error("quantity is not an angle");return e.formatDMS(a.value,a.unit)}});
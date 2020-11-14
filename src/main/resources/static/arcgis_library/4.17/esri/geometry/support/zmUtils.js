// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,d){Object.defineProperty(d,"__esModule",{value:!0});d.updateSupportFromPoint=void 0;d.updateSupportFromPoint=function(e,c,d){void 0===d&&(d=!1);var a=e.hasM,b=e.hasZ;Array.isArray(c)?4!==c.length||a||b?3===c.length&&d&&!a?(b=!0,a=!1):3===c.length&&a&&b&&(b=a=!1):b=a=!0:(b=!b&&c.hasZ&&(!a||c.hasM),a=!a&&c.hasM&&(!b||c.hasZ));e.hasZ=b;e.hasM=a}});
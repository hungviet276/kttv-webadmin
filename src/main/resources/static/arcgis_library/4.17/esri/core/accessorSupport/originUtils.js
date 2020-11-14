// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../multiOriginJSONSupportUtils"],function(d,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.updateOrigins=void 0;a.updateOrigins=function(a){a&&a.writtenProperties&&a.writtenProperties.forEach(function(a){var b=a.target;a.newOrigin&&a.oldOrigin!==a.newOrigin&&c.isMultiOriginJSONMixin(b)&&b.updateOrigin(a.propName,a.newOrigin)})}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/maybe","../../../../support/elevationInfoUtils"],function(g,a,e,f){Object.defineProperty(a,"__esModule",{value:!0});a.disableDisplayOnGrab=a.canMoveZ=void 0;a.canMoveZ=function(b,c){void 0===c&&(c=f.getGraphicEffectiveElevationInfo(b));return"on-the-ground"===c.mode||e.isNone(b.geometry)||!b.geometry.hasZ?!1:!0};a.disableDisplayOnGrab=function(b,c){var d=null,a=b.events.on("grab-changed",function(a){e.isSome(d)&&(d.remove(),d=null);"start"===a.action&&
(d=b.disableDisplay());c&&c(a)});return{remove:function(){e.isSome(d)&&d.remove();a.remove()}}}});
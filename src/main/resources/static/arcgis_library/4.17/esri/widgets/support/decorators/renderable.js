// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./propUtils"],function(e,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.renderable=void 0;a.renderable=function(a){var d="string"===typeof a?c.splitProps(a):a;return function(b,a){b.hasOwnProperty("_renderableProps")||(b._renderableProps=b._renderableProps?b._renderableProps.slice():[]);b=b._renderableProps;d?b.push.apply(b,c.normalizePropNames(d,a)):b.push(a)}}});
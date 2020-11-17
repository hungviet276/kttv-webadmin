// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/maybe"],function(e,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.extractSafeScaleBounds=a.scaleBoundsPredicate=a.occludeesSupported=a.highlightsSupported=void 0;a.highlightsSupported=function(b){return b&&"function"===typeof b.highlight};a.occludeesSupported=function(b){return b&&"function"===typeof b.occlude};a.scaleBoundsPredicate=function(b,a,d){return c.isNone(b)||b>d&&(0===a||b<a)};a.extractSafeScaleBounds=function(a){return{minScale:a.minScale||
0,maxScale:a.maxScale||0}}});
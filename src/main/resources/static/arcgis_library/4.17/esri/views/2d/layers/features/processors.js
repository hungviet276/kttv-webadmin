// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","@dojo/framework/shim/Promise"],function(c,a){Object.defineProperty(a,"__esModule",{value:!0});a.loadProcessorModule=void 0;a.loadProcessorModule=function(a){return"heatmap"===a?new Promise(function(a,b){c(["./processors/HeatmapProcessor"],a,b)}):new Promise(function(a,b){c(["./processors/SymbolProcessor"],a,b)})}});
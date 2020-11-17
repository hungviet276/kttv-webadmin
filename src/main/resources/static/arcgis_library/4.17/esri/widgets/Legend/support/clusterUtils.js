// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/arrayUtils","../../../renderers/visualVariables/SizeVariable"],function(g,c,d,e){Object.defineProperty(c,"__esModule",{value:!0});c.getClusterSizeVariable=void 0;var f=function(a,b){a=a.featuresTilingScheme.getClosestInfoForScale(a.scale).level;return b.levels?b.levels[a]:null};c.getClusterSizeVariable=function(a,b){if(!(a&&"visualVariables"in a&&a.visualVariables))return null;a=d.find(a.visualVariables,function(a){return"size"===a.type});return(b=f(b,a))?
new e({field:a.field,minSize:b[2].size,minDataValue:b[2].value,maxSize:b[3].size,maxDataValue:b[3].value}):null}});
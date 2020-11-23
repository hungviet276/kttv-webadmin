// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/accessorSupport/ensureType"],function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.transparencyToOpacity=a.opacityToTransparency=void 0;a.opacityToTransparency=function(a){a=b.ensureInteger(100*(1-a));return Math.max(0,Math.min(a,100))};a.transparencyToOpacity=function(a){return Math.max(0,Math.min(1-a/100,1))}});
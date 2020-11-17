// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../renderers/support/heatmapUtils"],function(b,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.HeatmapSource=void 0;b=function(){function a(){this.gradient=null;this.width=this.height=512}a.prototype.render=function(a){c.drawHeatmap(a,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)};return a}();a.HeatmapSource=b});
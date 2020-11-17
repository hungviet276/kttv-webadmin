// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,a){Object.defineProperty(a,"__esModule",{value:!0});a.Path=void 0;e=function(){function a(){this.segments=[]}Object.defineProperty(a.prototype,"time",{get:function(){return this.segments.reduce(function(c,b){return c+b.time},0)},enumerable:!1,configurable:!0});a.prototype.interpolateComponentsAt=function(c,b){c=Math.min(Math.max(c,0),1);c*=this.time;for(var a=0,h=0,f=this.definition,k=0;k<this.segments.length;k++){var g=this.segments[k],d=g.definition;if(c<=
g.time||k===this.segments.length-1)return b=this.segmentInterpolateComponentsAt(g,c/g.time,b),b.pan=f.hasPan?(a+d.compared.pan*b.pan)/f.compared.pan:1,b.rotate=f.hasRotate?(h+d.compared.rotate*b.rotate)/f.compared.rotate:1,c=b.zoom*(d.compared.targetZoom-d.compared.sourceZoom)+d.compared.sourceZoom,a=this.segments[0].definition.compared.sourceZoom,h=this.segments[this.segments.length-1].definition.compared.targetZoom,b.zoom=f.hasZoom?(c-a)/(h-a):1,b;c-=g.time;a+=d.compared.pan;h+=d.compared.rotate}};
a.prototype.segmentInterpolateComponentsAt=function(a,b,e){return a.interpolateComponentsAt(b,e)};return a}();a.Path=e;a.default=e});
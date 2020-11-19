// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./DepthRange"],function(b,a,e){Object.defineProperty(a,"__esModule",{value:!0});a.RenderSubmitSystem=void 0;b=function(){function a(a){this._objects=a}a.prototype.submit=function(a,c){this._objects.preSubmit(c);c=this._objects.visibleObjects;for(var d=0;d<c.length;d++){var b=c[d];b.renderable.material.submit(a,b)}};a.prototype.queryShadowCasterDepthRange=function(a){return this._objects.visibleObjects.length?e.computeDepthRange(a,this._objects.visibleObjects):null};return a}();
a.RenderSubmitSystem=b});
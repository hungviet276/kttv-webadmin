// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../Camera"],function(c,a,e){Object.defineProperty(a,"__esModule",{value:!0});a.LevelSelector=void 0;c=function(){function a(b,a){this.thresholdScale=1;this._camera=new e.default;this._worldSpaceRadius=b;this._thresholds=a.map(function(b){return b})}a.prototype.updateCamera=function(b){this._camera.copyFrom(b)};a.prototype.selectLevel=function(b,a){b=this._camera.computeScreenPixelSizeAt(b);a=this._worldSpaceRadius*a/b;b=this._thresholds;for(var c=-1,d=0;d<b.length;++d)a>=
b[d]*this.thresholdScale&&(c=d);return c};return a}();a.LevelSelector=c});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","./brushes","./webgl/WGLContainer"],function(b,a,e,f,d){Object.defineProperty(a,"__esModule",{value:!0});a.BitmapContainer=void 0;b=function(c){function a(){return null!==c&&c.apply(this,arguments)||this}e.__extends(a,c);a.prototype.prepareRenderPasses=function(a){var b=this,d=a.registerRenderPass({name:"bitmap",brushes:[f.brushes.bitmap],target:function(){return b.children}});return e.__spreadArrays(c.prototype.prepareRenderPasses.call(this,a),[d])};return a}(d.default);
a.BitmapContainer=b});
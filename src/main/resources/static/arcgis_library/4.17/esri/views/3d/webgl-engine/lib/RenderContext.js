// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./Camera"],function(h,k,b){return function(){function a(a,c,d,e,f,g){this.camera=null;this.lastFrameCamera=new b.default;this.slot=this.pass=0;this.highlightDepthTexture=null;this.renderOccludedMask=13;this.hasOccludees=!1;this.rctx=a;this.offscreenRenderingHelper=c;this.scenelightingData=d;this.shadowMap=e;this.ssaoHelper=f;this.sliceHelper=g}a.prototype.resetRenderOccludedMask=function(){this.renderOccludedMask=13};Object.defineProperty(a.prototype,"isHighlightPass",
{get:function(){return 4===this.pass},enumerable:!1,configurable:!0});return a}()});
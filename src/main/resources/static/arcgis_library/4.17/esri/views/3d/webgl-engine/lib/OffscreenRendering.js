// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./RenderTargetHelper"],function(h,e,k){Object.defineProperty(e,"__esModule",{value:!0});e.OffscreenRendering=void 0;h=function(){function a(b,a){this._rctx=b;this._compositingHelper=a;this._currentRenderTarget=0;this.dimensions={width:4,height:4};this._needLastFrameColorTexture=!1;this._background={type:"color",color:[0,0,0,1]};var c=this.renderTargetHelper=new k.RenderTargetHelper(this._rctx);this.mainColorTarget0=c.registerColorTarget({name:"mainColorTarget0"});this.mainColorTarget1=
c.registerColorTarget({name:"mainColorTarget1"});b=function(b){return c.registerColorTarget({name:b,dataType:5126,samplingMode:9728})};this.colorFloatTarget=b("colorFloatTarget");this.alphaFloatTarget=b("alphaFloatTarget");this.mainDepth=c.registerDepthTarget({name:"mainDepth"});this.linearDepth=c.registerColorTarget({name:"linearDepth",samplingMode:9728});this.normal=c.registerColorTarget({name:"normal"});this.highlight=c.registerColorTarget({name:"highlight",dataType:32819});this.hudVisibility=
c.registerColorTarget({name:"hudVisibility",dataType:32819});this.tmpColor=c.registerColorTarget({name:"tmpColor"});this.tmpDepth=c.registerDepthTarget({name:"tmpDepth"})}a.prototype.dispose=function(){this.renderTargetHelper.dispose()};Object.defineProperty(a.prototype,"width",{get:function(){return this.dimensions.width},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"height",{get:function(){return this.dimensions.height},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,
"background",{get:function(){return this._background},set:function(b){this._background=b},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"currentColorTarget",{get:function(){return 0===this._currentRenderTarget?this.mainColorTarget0:this.mainColorTarget1},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"previousColorTarget",{get:function(){return 0===this._currentRenderTarget?this.mainColorTarget1:this.mainColorTarget0},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,
"currentRenderTarget",{get:function(){return this._currentRenderTarget},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"framebuffer",{get:function(){return this.renderTargetHelper.getFramebuffer(this.dimensions,this.currentColorTarget,this.mainDepth)},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"colorTexture",{get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.currentColorTarget)},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,
"depthTexture",{get:function(){return this.renderTargetHelper.getAllocatedDepthTexture(this.mainDepth)},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"linearDepthTexture",{get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.linearDepth)},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"lastFrameColorTexture",{get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.previousColorTarget)},enumerable:!1,configurable:!0});
Object.defineProperty(a.prototype,"normalTexture",{get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.normal)},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"highlightTexture",{get:function(){return this.renderTargetHelper.getAllocatedColorTexture(this.highlight)},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"hudVisibilityTexture",{get:function(){return this.getColorTexture(this.hudVisibility)},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,
"tmpColorTexture",{get:function(){return this.getColorTexture(this.tmpColor)},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"mainColorTexture",{get:function(){return this.getColorTexture(this.currentColorTarget)},enumerable:!1,configurable:!0});a.prototype.advanceCurrentRenderTarget=function(){this._currentRenderTarget=0===this._currentRenderTarget&&this._needLastFrameColorTexture?1:0};a.prototype.initializeFrame=function(b){var a=this._rctx;this.dimensions.width=b.fullWidth;this.dimensions.height=
b.fullHeight;this.bindTarget(this.currentColorTarget,this.mainDepth);a.setClearStencil(0);b=this._background.color;a.setClearColor(b[0]*b[3],b[1]*b[3],b[2]*b[3],b[3]);a.clearSafe(17664)};a.prototype.composite=function(){this._compositingHelper.composite(this.colorTexture,0)};a.prototype.renderAndComposite=function(b,a){this.renderToTargets(b,this.tmpColor,this.mainDepth,l);this._compositingHelper.composite(this.getColorTexture(this.tmpColor),a)};a.prototype.renderHUDVisibility=function(b){this.renderToTargets(b,
this.hudVisibility,this.mainDepth,m)};a.prototype.compositeTransparentTerrainOntoHUDVisibility=function(){var b=this;this.renderToTargets(function(){b._compositingHelper.compositeSpecial(b.getColorTexture(b.tmpColor),2)},this.hudVisibility,this.mainDepth)};a.prototype.renderOITPass=function(b,a){var c,d;switch(a){case 0:c=this.colorFloatTarget;d=[0,0,0,0];break;case 1:c=this.alphaFloatTarget;d=[1,1,1,1];break;case 2:c=this.tmpColor,d=[0,0,0,0]}this.renderToTargets(b,c,this.mainDepth,d,!1)};a.prototype.compositeTransparentTerrainOntoMain=
function(){this.bindFramebuffer();this._compositingHelper.composite(this.getColorTexture(this.tmpColor),2)};a.prototype.compositeOccludedOntoMain=function(b){this.bindFramebuffer();this._compositingHelper.composite(this.getColorTexture(this.tmpColor),2,b)};a.prototype.compositeTransparentOntoOpaque=function(){this.bindFramebuffer();this._compositingHelper.compositeTransparent(this.getColorTexture(this.colorFloatTarget),this.getColorTexture(this.alphaFloatTarget),this.getColorTexture(this.tmpColor))};
a.prototype.bindFramebuffer=function(){this._rctx.bindFramebuffer(this.framebuffer)};a.prototype.renderDepthDetached=function(b){this.bindTarget(this.currentColorTarget);b();this.bindTarget(this.currentColorTarget,this.mainDepth)};a.prototype.disposeTarget=function(b){this.renderTargetHelper.disposeTargetResource(b)};Object.defineProperty(a.prototype,"needLastFrameColorTexture",{get:function(){return this._needLastFrameColorTexture},set:function(b){!b&&this._needLastFrameColorTexture&&(this._currentRenderTarget=
0,this.disposeTarget(this.mainColorTarget1));this._needLastFrameColorTexture=b},enumerable:!1,configurable:!0});a.prototype.renderToTargets=function(b,a,c,d,e,f){var g=this._rctx;a=this.bindTarget(a,c);c=0;d&&(g.setClearColor(d[0],d[1],d[2],Math.max(1E-13,d[3])),c|=16384);e&&(c|=256);f&&(c|=1024);g.clearSafe(c,!0===f?255:!1===f?0:f);b();g.gl.flush();this.bindTarget(this.currentColorTarget,this.mainDepth);return a};a.prototype.bindTarget=function(a,e){a=this.renderTargetHelper.getFramebuffer(this.dimensions,
a,e);this._rctx.bindFramebuffer(a);return a};a.prototype.getColorTexture=function(a){return this.renderTargetHelper.getColorTexture(a,this.dimensions)};a.prototype.getGpuMemoryUsage=function(){var a=0;this.renderTargetHelper&&(a+=this.renderTargetHelper.getGpuMemoryUsage());return a};return a}();e.OffscreenRendering=h;var l=[0,0,0,0],m=[0,1,0,1]});
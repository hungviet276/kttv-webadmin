// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../webgl/FramebufferObject ../../../webgl/Renderbuffer ../../../webgl/Texture ../../../webgl/Util".split(" "),function(l,h,g,k,n,m,p){Object.defineProperty(h,"__esModule",{value:!0});h.RenderTargetHelper=void 0;var q={dataType:5121},r={};l=function(){function e(a){this.rctx=a;this._activeTargets=new Set;this._depthTextures=new Map;this._depthBuffers=new Map;this._colorTextures=new Map;this._framebuffers=new Map;this._nextId=1;this.depthTextureSupported=a.capabilities.depthTexture}
e.prototype.dispose=function(){this._depthBuffers.forEach(function(a){return a.dispose()});this._depthBuffers.clear();this._depthTextures.forEach(function(a){return a.dispose()});this._depthTextures.clear();this._colorTextures.forEach(function(a){return a.dispose()});this._colorTextures.clear();this._framebuffers.forEach(function(a){return a.dispose()});this._framebuffers.clear()};e.prototype.disposeTargetResource=function(a){a=a.id;this._activeTargets.has(a)&&(this._activeTargets.delete(a),this._depthTextures.has(a)&&
(this._depthTextures.get(a).dispose(),this._depthTextures.delete(a)),this._depthBuffers.has(a)&&(this._depthBuffers.get(a).dispose(),this._depthBuffers.delete(a)),this._colorTextures.has(a)&&(this._colorTextures.get(a).dispose(),this._colorTextures.delete(a)))};e.prototype.getDepthTexture=function(a,c){if(this.depthTextureSupported){var b=this._depthTextures.get(a.id);!b||b.descriptor.width===c.width&&b.descriptor.height===c.height||(b.dispose(),b=void 0);b||(b=new m(this.rctx,{target:3553,pixelFormat:34041,
dataType:34042,samplingMode:9728,wrapMode:33071,width:c.width,height:c.height}),this._depthTextures.set(a.id,b),this._activeTargets.add(a.id));return b}};e.prototype.getAllocatedDepthTexture=function(a){return this._depthTextures.get(a.id)};e.prototype.getDepthBuffer=function(a,c){if(!this.depthTextureSupported){var b=this._depthBuffers.get(a.id);b?b.descriptor.width===c.width&&b.descriptor.height===c.height||b.resize(c.width,c.height):(b=new n(this.rctx,g.__assign({internalFormat:34041},c)),this._depthBuffers.set(a.id,
b),this._activeTargets.add(a.id));return b}};e.prototype.getColorTexture=function(a,c){var b=this._colorTextures.get(a.id);!b||b.descriptor.width===c.width&&b.descriptor.height===c.height||(b.dispose(),b=void 0);b||(b=new m(this.rctx,{target:3553,pixelFormat:6408,dataType:a.dataType,samplingMode:null!=a.samplingMode?a.samplingMode:9729,wrapMode:33071,width:c.width,height:c.height}),this._colorTextures.set(a.id,b),this._activeTargets.add(a.id));return b};e.prototype.getAllocatedColorTexture=function(a){return this._colorTextures.get(a.id)};
e.prototype.registerDepthTarget=function(a){void 0===a&&(a={});var c=this._nextId++;return g.__assign(g.__assign({id:c},r),a)};e.prototype.registerColorTarget=function(a){void 0===a&&(a={});var c=this._nextId++;return g.__assign(g.__assign({id:c},q),a)};e.prototype.getFramebuffer=function(a,c,b){var e=this.getKey(c,b),d=this._framebuffers.get(e);c=this.getColorTexture(c,a);if(this.depthTextureSupported){var f=b?this.getDepthTexture(b,a):void 0;if(!d)return d=b?new k(this.rctx,{colorTarget:0,depthStencilTarget:4},
c,f):new k(this.rctx,{colorTarget:0,depthStencilTarget:0},c),this._framebuffers.set(e,d),d;if(b=d.width!==a.width||d.height!==a.height||d.colorTexture!==c||d.depthStencilTexture!==f)d.detachColorTexture(),d.detachDepthStencilTexture(),d.resize(a.width,a.height),d.attachColorTexture(c),d.attachDepthStencilTexture(f);return d}f=b?this.getDepthBuffer(b,a):void 0;if(!d)return d=new k(this.rctx,{colorTarget:0,depthStencilTarget:b?3:0},c,f),this._framebuffers.set(e,d),d;if(b=d.width!==a.width||d.height!==
a.height||d.colorTexture!==c)d.detachColorTexture(),d.detachDepthStencilBuffer(),d.resize(a.width,a.height),d.attachColorTexture(c),d.attachDepthStencilBuffer(f);return d};e.prototype.getKey=function(a,c){return a.id+"_"+(c?c.id:"X")+"_"+a.name+(c?"_"+c.name:"")};e.prototype.getGpuMemoryUsage=function(){var a=0,c=new Set,b=function(b){c.has(b)||(c.add(b),a+=p.getGpuMemoryUsage(b))};this._depthTextures.forEach(b);this._colorTextures.forEach(b);this._depthBuffers.forEach(b);this._framebuffers.forEach(b);
return a};return e}();h.RenderTargetHelper=l});
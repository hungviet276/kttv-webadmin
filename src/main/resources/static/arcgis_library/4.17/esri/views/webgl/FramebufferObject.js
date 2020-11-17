// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/has ../../core/Logger ../../core/maybe ./Renderbuffer ./Texture".split(" "),function(t,u,p,v,q,m,n,k){var r=q.getLogger("esri.views.webgl.FrameBufferObject");return function(){function c(a,b,f,e){var h,d;this._stencilAttachment=this._depthAttachment=this._glName=this._context=null;this._colorAttachments=new Map;this._initialized=!1;this._context=a;this._desc=p.__assign({},b);this._id=c._nextId++;m.isSome(a.instanceCounter)&&a.instanceCounter.increment(4,this);
if(f){var g=void 0;if(Array.isArray(f))for(h=0;h<f.length;h++){g=f[h];b=g.attachmentPoint;var g=g.texture,l=g instanceof k?g:new k(a,g),g=l.descriptor;this._colorAttachments.set(b,l);this._validateColorAttachmentPoint(b);this._validateTextureDimensions(g,this._desc)}else f instanceof k?(g=f.descriptor,this._colorAttachments.set(36064,f)):(g=f,this._colorAttachments.set(36064,new k(a,f))),0!==(null===(h=this._desc)||void 0===h?void 0:h.colorTarget)&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),
this._validateTextureDimensions(g,this._desc)}e instanceof n?(a=null!==(d=this._desc.depthStencilTarget)&&void 0!==d?d:3,2===a?this._stencilAttachment=e:1===a||3===a?this._depthAttachment=e:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),c._validateBufferDimensions(e.descriptor,this._desc)):e&&(this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),
d=void 0,e instanceof k?(this._depthStencilTexture=e,d=this._depthStencilTexture.descriptor):(d=e,this._depthStencilTexture=new k(this._context,d)),this._validateTextureDimensions(d,this._desc))}c.prototype.dispose=function(){if(this._context){var a=this._context,b=a.getBoundFramebufferObject();this._disposeColorAttachments();this._disposeDepthStencilAttachments();this._glName&&(a.gl.deleteFramebuffer(this._glName),this._glName=null);m.isSome(a.instanceCounter)&&a.instanceCounter.decrement(4,this);
a.bindFramebuffer(b);this._context=null}};Object.defineProperty(c.prototype,"id",{get:function(){return this._id},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"glName",{get:function(){return this._glName},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"descriptor",{get:function(){return this._desc},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"colorTexture",{get:function(){var a=this._colorAttachments.get(36064);return a&&a instanceof k?
a:null},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"colorAttachment",{get:function(){return this._colorAttachments.get(36064)},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"depthStencilAttachment",{get:function(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"depthStencilTexture",{get:function(){return this._depthStencilTexture},enumerable:!1,configurable:!0});
Object.defineProperty(c.prototype,"width",{get:function(){return this._desc.width},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"height",{get:function(){return this._desc.height},enumerable:!1,configurable:!0});c.prototype.getColorTexture=function(a){return(a=this._colorAttachments.get(a))&&a instanceof k?a:null};c.prototype.attachColorTexture=function(a,b){void 0===b&&(b=36064);if(a){this._validateColorAttachmentPoint(b);this._validateTextureDimensions(a.descriptor,this._desc);
this._disposeColorAttachments();if(this._initialized){this._context.bindFramebuffer(this);var f=this._context.gl;f.framebufferTexture2D(f.FRAMEBUFFER,b,f.TEXTURE_2D,a.glName,0)}this._colorAttachments.set(b,a)}};c.prototype.detachColorTexture=function(a){void 0===a&&(a=36064);var b=this._colorAttachments.get(a);if(b instanceof k){if(this._initialized){this._context.bindFramebuffer(this);var f=this._context.gl;f.framebufferTexture2D(f.FRAMEBUFFER,a,f.TEXTURE_2D,null,0)}this._colorAttachments.delete(a);
return b}};c.prototype.attachDepthStencilTexture=function(a){if(a){var b=a.descriptor;34041!==b.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!");34042!==b.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8_WEBGL!");this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!");this._validateTextureDimensions(b,this._desc);
this._desc.depthStencilTarget&&4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4);this._disposeDepthStencilAttachments();this._initialized&&(this._context.bindFramebuffer(this),b=this._context.gl,b.framebufferTexture2D(b.FRAMEBUFFER,b.DEPTH_STENCIL_ATTACHMENT,b.TEXTURE_2D,a.glName,0));this._depthStencilTexture=a}};c.prototype.detachDepthStencilTexture=function(){var a=this._depthStencilTexture;if(a&&this._initialized){this._context.bindFramebuffer(this);var b=this._context.gl;this._context.gl.framebufferTexture2D(b.FRAMEBUFFER,
b.DEPTH_STENCIL_ATTACHMENT,b.TEXTURE_2D,null,0)}this._depthStencilTexture=null;return a};c.prototype.attachDepthStencilBuffer=function(a){if(a){var b=a.descriptor;34041!==b.internalFormat&&33189!==b.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat");c._validateBufferDimensions(b,this._desc);this._disposeDepthStencilAttachments();this._desc.depthStencilTarget=34041===b.internalFormat?3:1;this._initialized&&(this._context.bindFramebuffer(this),b=this._context.gl,
b.framebufferRenderbuffer(b.FRAMEBUFFER,1===this._desc.depthStencilTarget?b.DEPTH_ATTACHMENT:b.DEPTH_STENCIL_ATTACHMENT,b.RENDERBUFFER,a.glName));this._depthAttachment=a}};c.prototype.detachDepthStencilBuffer=function(){var a=this._context.gl,b=this._depthAttachment;b&&this._initialized&&(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(a.FRAMEBUFFER,1===this._desc.depthStencilTarget?a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,null));this._depthAttachment=null;return b};
c.prototype.copyToTexture=function(a,b,f,c,h,d,g){(0>a||0>b||0>h||0>d)&&console.error("Offsets cannot be negative!");(0>=f||0>=c)&&console.error("Copy width and height must be greater than zero!");var e=this._desc,k=g.descriptor;3553!==g.descriptor.target&&console.error("Texture target must be TEXTURE_2D!");(a+f>e.width||b+c>e.height||h+f>k.width||d+c>k.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");e=this._context;e.bindTexture(g);e.bindFramebuffer(this);
e.gl.copyTexSubImage2D(3553,0,h,d,a,b,f,c)};c.prototype.readPixels=function(a,b,f,c,h,d,g){(0>=f||0>=c)&&console.error("Copy width and height must be greater than zero!");g||console.error("Target memory is not initialized!");this._context.bindFramebuffer(this);this._context.gl.readPixels(a,b,f,c,h,d,g)};c.prototype.resize=function(a,b){var c=this._desc;if(c.width!==a||c.height!==b)if(this._initialized){c.width=a;c.height=b;this._colorAttachments.forEach(function(c){c&&c.resize(a,b)});if(null!=this._depthStencilTexture)this._depthStencilTexture.resize(a,
b);else if(this._depthAttachment||this._stencilAttachment)this._depthAttachment&&this._depthAttachment.resize(a,b),this._stencilAttachment&&this._stencilAttachment.resize(a,b);this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null);this._initialized=!1}else c.width=a,c.height=b,this._colorAttachments.forEach(function(c){c&&c.resize(a,b)}),this._depthStencilTexture&&this._depthStencilTexture.resize(a,b)};c.prototype.initialize=function(){var a,b,c,e;if(this._initialized)return!1;
var h=this._context,d=h.gl;this._glName&&d.deleteFramebuffer(this._glName);var g=d.createFramebuffer(),l=this._desc,m=null!==(a=l.colorTarget)&&void 0!==a?a:1;a=null!==(b=l.width)&&void 0!==b?b:1;b=null!==(c=l.height)&&void 0!==c?c:1;d.bindFramebuffer(d.FRAMEBUFFER,g);0===this._colorAttachments.size&&(0===m?this._colorAttachments.set(36064,new k(h,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:l.width,height:l.height})):(c=new n(h,{internalFormat:32854,width:a,
height:b}),this._colorAttachments.set(36064,c)));this._colorAttachments.forEach(function(a,b){a&&(a instanceof k?d.framebufferTexture2D(d.FRAMEBUFFER,b,d.TEXTURE_2D,a.glName,0):d.framebufferRenderbuffer(d.FRAMEBUFFER,d.COLOR_ATTACHMENT0,d.RENDERBUFFER,a.glName))});c=null!==(e=l.depthStencilTarget)&&void 0!==e?e:0;switch(c){case 1:case 3:this._depthAttachment||(this._depthAttachment=new n(h,{internalFormat:1===l.depthStencilTarget?33189:34041,width:a,height:b}));d.framebufferRenderbuffer(d.FRAMEBUFFER,
1===c?d.DEPTH_ATTACHMENT:d.DEPTH_STENCIL_ATTACHMENT,d.RENDERBUFFER,this._depthAttachment.glName);break;case 2:this._stencilAttachment||(this._stencilAttachment=new n(h,{internalFormat:36168,width:a,height:b}));d.framebufferRenderbuffer(d.FRAMEBUFFER,d.STENCIL_ATTACHMENT,d.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:this._depthStencilTexture||(h.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),
this._depthStencilTexture=new k(h,{target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:a,height:b})),d.framebufferTexture2D(d.FRAMEBUFFER,d.DEPTH_STENCIL_ATTACHMENT,d.TEXTURE_2D,this._depthStencilTexture.glName,0)}this._glName=g;return this._initialized=!0};c.prototype._disposeColorAttachments=function(){var a=this;this._colorAttachments.forEach(function(b,c){if(b instanceof k){if(a._initialized){a._context.bindFramebuffer(a);var e=a._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,
c,e.TEXTURE_2D,null,0)}b.dispose()}else b instanceof WebGLRenderbuffer&&(e=a._context.gl,a._initialized&&(a._context.bindFramebuffer(a),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,null)),a._context.gl.deleteRenderbuffer(b))});this._colorAttachments.clear()};c.prototype._disposeDepthStencilAttachments=function(){var a=this._context.gl;this._depthAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(a.FRAMEBUFFER,1===this._desc.depthStencilTarget?
a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,null)),this._depthAttachment.dispose(),this._depthAttachment=null);this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.STENCIL_ATTACHMENT,a.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null);this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,
a.TEXTURE_2D,null,0)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)};c._validateBufferDimensions=function(a,b){console.assert(0<=a.width&&0<=a.height);void 0!==b.width&&0<=b.width&&void 0!==b.height&&0<=b.height?b.width===a.width&&b.height===a.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(b.width=a.width,b.height=a.height)};c.prototype._validateTextureDimensions=function(a,b){console.assert(0<=a.width&&0<=a.height);3553!==a.target&&console.error("Texture type must be TEXTURE_2D!");
void 0!==b.width&&0<=b.width&&void 0!==b.height&&0<=b.height?b.width===a.width&&b.height===a.height||console.error("Color attachment texture must match the framebuffer's!"):(b.width=a.width,b.height=a.height)};c.prototype._validateColorAttachmentPoint=function(a){if(-1===c._MAX_COLOR_ATTACHMENTS){var b=this._context.capabilities.drawBuffers;c._MAX_COLOR_ATTACHMENTS=b?this._context.gl.getParameter(b.MAX_COLOR_ATTACHMENTS):1}a-=36064;a+1>c._MAX_COLOR_ATTACHMENTS&&r.error("esri.FrameBufferObject","illegal attachment point for color attachment: "+
(a+1)+". Implementation supports up to "+c._MAX_COLOR_ATTACHMENTS+" color attachments")};c._nextId=0;c._MAX_COLOR_ATTACHMENTS=-1;return c}()});
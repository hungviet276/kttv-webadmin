// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../webgl","../../VertexStream"],function(k,g,l,m){Object.defineProperty(g,"__esModule",{value:!0});g.Blur=void 0;var n=[1,0],p=[0,1];k=function(){function d(){this._blurFBO=null;this._size=[0,0];this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",
fsPath:"post-processing/blit",attributes:{a_position:0}}}}d.prototype.dispose=function(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)};d.prototype.draw=function(a,e,b){var c=a.context,h=b.type;b=b.radius;0!==b&&(this._createOrResizeResources(a),this._quad||(this._quad=new m(c,[-1,-1,1,-1,-1,1,1,1])),c=this._quad,c.bind(),"blur"===h?this._gaussianBlur(a,e,b):this._radialBlur(a,e),c.unbind())};d.prototype._gaussianBlur=function(a,e,b){var c=a.context,h=a.pixelRatio,f=a.state.size,d=this._quad,
h=[Math.round(h*f[0]),Math.round(h*f[1])],f=this._blurFBO;a=a.painter.materialManager.getProgram(a,this._programDesc.gaussianBlur,[{name:"radius",value:Math.ceil(b)}]);c.bindProgram(a);c.setBlendingEnabled(!1);c.bindFramebuffer(f);c.bindTexture(e.colorTexture,4);a.setUniform1i("u_colorTexture",4);a.setUniform2fv("u_texSize",h);a.setUniform2fv("u_direction",n);a.setUniform1f("u_sigma",b);d.draw();c.bindFramebuffer(e);c.setStencilWriteMask(0);c.setStencilTestEnabled(!1);c.setDepthWriteEnabled(!1);c.setDepthTestEnabled(!1);
c.bindTexture(f.colorTexture,5);a.setUniform1i("u_colorTexture",5);a.setUniform2fv("u_direction",p);d.draw();c.setBlendingEnabled(!0);c.setBlendFunction(1,771);c.setStencilTestEnabled(!0)};d.prototype._radialBlur=function(a,e){var b=a.context,c=a.painter.materialManager,d=this._programDesc,f=this._quad,g=this._blurFBO;b.bindFramebuffer(g);var k=c.getProgram(a,d.radialBlur);b.bindProgram(k);b.setBlendingEnabled(!1);b.bindTexture(e.colorTexture,4);k.setUniform1i("u_colorTexture",4);f.draw();b.bindFramebuffer(e);
b.setStencilWriteMask(0);b.setStencilTestEnabled(!1);b.setDepthWriteEnabled(!1);b.setDepthTestEnabled(!1);b.setBlendingEnabled(!0);a=c.getProgram(a,d.blit);b.bindProgram(a);b.bindTexture(g.colorTexture,5);a.setUniform1i("u_texture",5);b.setBlendFunction(1,771);f.draw()};d.prototype._createOrResizeResources=function(a){var d=a.context,b=a.pixelRatio,c=a.state.size;a=Math.round(b*c[0]);b=Math.round(b*c[1]);this._blurFBO&&this._size[0]===a&&this._size[1]===b||(this._size[0]=a,this._size[1]=b,this._blurFBO?
this._blurFBO.resize(a,b):this._blurFBO=new l.FramebufferObject(d,{colorTarget:0,depthStencilTarget:0,width:a,height:b},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:a,height:b}))};return d}();g.Blur=k});
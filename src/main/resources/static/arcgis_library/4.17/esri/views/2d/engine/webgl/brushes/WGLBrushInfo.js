// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/libs/gl-matrix-2/vec4f32 ../../../../webgl ./WGLBrush ../shaders/BackgroundPrograms ../shaders/TileInfoPrograms".split(" "),function(k,l,p,q,f,r,m,n){Object.defineProperty(l,"__esModule",{value:!0});k=function(g){function d(){var a=null!==g&&g.apply(this,arguments)||this;a._color=q.vec4f32.fromValues(1,0,0,1);return a}p.__extends(d,g);d.prototype.dispose=function(){this._outlineProgram&&(this._outlineProgram.dispose(),this._outlineProgram=null);this._tileInfoProgram&&
(this._tileInfoProgram.dispose(),this._tileInfoProgram=null);this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null);this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),this._tileInfoVertexArrayObject=null);this._canvas=null};d.prototype.prepareState=function(a){a=a.context;a.setBlendingEnabled(!0);a.setBlendFunctionSeparate(1,771,1,771);a.setColorMask(!0,!0,!0,!0);a.setStencilWriteMask(0);a.setStencilTestEnabled(!1)};
d.prototype.draw=function(a,b){a=a.context;if(b.isReady){this._loadWGLResources(a);a.bindVAO(this._outlineVertexArrayObject);a.bindProgram(this._outlineProgram);this._outlineProgram.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs);this._outlineProgram.setUniform2f("u_coord_range",b.coordRange[0],b.coordRange[1]);this._outlineProgram.setUniform1f("u_depth",0);this._outlineProgram.setUniform4fv("u_color",this._color);a.drawArrays(3,0,4);a.bindVAO();var h=this._getTexture(a,b);h&&(a.bindVAO(this._tileInfoVertexArrayObject),
a.bindProgram(this._tileInfoProgram),a.bindTexture(h,0),this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3",b.transforms.dvs),this._tileInfoProgram.setUniform1f("u_depth",0),this._tileInfoProgram.setUniform2f("u_coord_ratio",b.coordRange[0]/b.size[0],b.coordRange[1]/b.size[1]),this._tileInfoProgram.setUniform2f("u_delta",8,8),this._tileInfoProgram.setUniform2f("u_dimensions",h.descriptor.width,h.descriptor.height),a.drawArrays(5,0,4),a.bindVAO())}};d.prototype._loadWGLResources=function(a){if(!this._outlineProgram||
!this._tileInfoProgram){var b=f.createProgram(a,m.background),h=f.createProgram(a,n.tileInfo),d={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},e=new Int8Array([0,0,1,0,1,1,0,1]),e=f.BufferObject.createVertex(a,35044,e),e=new f.VertexArrayObject(a,m.background.attributes,d,{geometry:e}),c=new Int8Array([0,0,1,0,0,1,1,1]),c=f.BufferObject.createVertex(a,35044,c);a=new f.VertexArrayObject(a,n.tileInfo.attributes,d,{geometry:c});this._outlineProgram=b;this._tileInfoProgram=
h;this._outlineVertexArrayObject=e;this._tileInfoVertexArrayObject=a}};d.prototype._getTexture=function(a,b){if(b.texture&&b.triangleCountReportedInDebug===b.triangleCount)return b.texture;b.triangleCountReportedInDebug=b.triangleCount;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","300"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var d=b.triangleCount,g=b.key.id;
0<b.triangleCount&&(g+=", "+d);var e=this._canvas,c=e.getContext("2d");c.font="24px sans-serif";c.textAlign="left";c.textBaseline="top";c.clearRect(0,0,300,32);1E5<d?(c.fillStyle="red",c.fillRect(0,0,300,32),c.fillStyle="black"):(c.clearRect(0,0,300,32),c.fillStyle="blue");c.fillText(g,0,0);b.texture=new f.Texture(a,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071},e);return b.texture};return d}(r.default);l.default=k});
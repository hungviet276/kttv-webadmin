// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/libs/gl-matrix-2/vec4f32 ../../../../webgl ./WGLBrush ../shaders/BackgroundPrograms".split(" "),function(f,g,k,l,d,m,h){Object.defineProperty(g,"__esModule",{value:!0});f=function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a._color=l.vec4f32.fromValues(1,0,0,1);a._initialized=!1;return a}k.__extends(b,e);b.prototype.dispose=function(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null);this._solidVertexArrayObject&&
(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)};b.prototype.prepareState=function(a,c){a=a.context;a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);a.setStencilTestEnabled(!0);a.setBlendingEnabled(!1);a.setColorMask(!1,!1,!1,!1);a.setStencilOp(7680,7680,7681);a.setStencilWriteMask(255);a.setStencilFunctionSeparate(1032,516,c.stencilRef,255)};b.prototype.draw=function(a,c){a=a.context;this._initialized||this._initialize(a);a.bindVAO(this._solidVertexArrayObject);a.bindProgram(this._solidProgram);
this._solidProgram.setUniformMatrix3fv("u_dvsMat3",c.transforms.dvs);this._solidProgram.setUniform2fv("u_coord_range",c.coordRange);this._solidProgram.setUniform1f("u_depth",0);this._solidProgram.setUniform4fv("u_color",this._color);a.drawArrays(5,0,4);a.bindVAO()};b.prototype._initialize=function(a){if(this._initialized)return!0;var c=d.createProgram(a,h.background);if(!c)return!1;var b=new Int8Array([0,0,1,0,0,1,1,1]),b=d.BufferObject.createVertex(a,35044,b);a=new d.VertexArrayObject(a,h.background.attributes,
{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:b});this._solidProgram=c;this._solidVertexArrayObject=a;return this._initialized=!0};return b}(m.default);g.default=f});
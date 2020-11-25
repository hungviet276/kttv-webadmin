// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/shaderLibrary/util/View.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ./MeasurementArrow.glsl ../../../webgl/Program ../../../webgl/renderState @dojo/framework/shim/Promise".split(" "),function(l,d,f,h,m,e,k,n,p,q,g){Object.defineProperty(d,"__esModule",{value:!0});d.MeasurementArrowTechniqueConfiguration=d.MeasurementArrowTechnique=
void 0;e=function(c){function a(a,b){return c.call(this,a,b)||this}f.__extends(a,c);a.prototype.initializeProgram=function(r){var b=a.shader.get().build();return new q(r.rctx,b.generateSource("vertex"),b.generateSource("fragment"),n.Default3D)};a.prototype.bindPass=function(a,b,c){h.View.bindProjectionMatrix(this.program,c.camera.projectionMatrix);this.program.setUniform1f("width",b.width);this.program.setUniform1f("outlineSize",b.outlineSize);this.program.setUniform4fv("outlineColor",b.outlineColor);
this.program.setUniform1f("stripeLength",b.stripeLength);this.program.setUniform4fv("stripeEvenColor",b.stripeEvenColor);this.program.setUniform4fv("stripeOddColor",b.stripeOddColor)};a.prototype.bindDraw=function(a){h.View.bindView(this.program,a)};a.prototype.initializePipeline=function(){return g.makePipelineState({polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:513},depthWrite:g.defaultDepthWriteParams,colorWrite:g.defaultColorWriteParams})};Object.defineProperty(a.prototype,
"primitiveType",{get:function(){return 5},enumerable:!1,configurable:!0});a.shader=new m.ReloadableShaderModule(p,function(){return new Promise(function(a,b){l(["./MeasurementArrow.glsl"],a,b)})});return a}(e.ShaderTechnique);d.MeasurementArrowTechnique=e;e=function(c){function a(){var a=null!==c&&c.apply(this,arguments)||this;a.polygonOffsetEnabled=!1;return a}f.__extends(a,c);f.__decorate([k.parameter()],a.prototype,"polygonOffsetEnabled",void 0);return a}(k.ShaderTechniqueConfiguration);d.MeasurementArrowTechniqueConfiguration=
e});
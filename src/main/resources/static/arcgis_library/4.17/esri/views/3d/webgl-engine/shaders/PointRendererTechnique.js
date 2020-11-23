// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ../lib/StencilUtils ./PointRenderer.glsl ../../../webgl/Program ../../../webgl/renderState @dojo/framework/shim/Promise".split(" "),function(l,e,b,m,f,g,n,k,p,q,h){Object.defineProperty(e,"__esModule",{value:!0});e.PointRendererTechniqueConfiguration=e.PointRendererTechnique=void 0;f=function(c){function a(a,
d){return c.call(this,a,d)||this}b.__extends(a,c);a.prototype.initializeProgram=function(r){var d=a.shader.get(),b=this.configuration,d=d.build({output:b.output,slicePlaneEnabled:b.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,drawScreenSize:b.drawScreenSize});return new q(r.rctx,d.generateSource("vertex"),d.generateSource("fragment"),n.Default3D)};a.prototype.initializePipeline=function(){return h.makePipelineState({depthTest:{func:513},depthWrite:h.defaultDepthWriteParams,
colorWrite:h.defaultColorWriteParams,stencilWrite:this.configuration.sceneHasOcludees?k.stencilWriteMaskOn:null,stencilTest:this.configuration.sceneHasOcludees?k.stencilBaseAllZerosParams:null})};a.shader=new m.ReloadableShaderModule(p,function(){return new Promise(function(a,b){l(["./PointRenderer.glsl"],a,b)})});return a}(f.ShaderTechnique);e.PointRendererTechnique=f;f=function(c){function a(){var a=null!==c&&c.apply(this,arguments)||this;a.output=0;a.slicePlaneEnabled=!1;a.drawScreenSize=!1;a.sceneHasOcludees=
!1;return a}b.__extends(a,c);b.__decorate([g.parameter({count:7})],a.prototype,"output",void 0);b.__decorate([g.parameter()],a.prototype,"slicePlaneEnabled",void 0);b.__decorate([g.parameter()],a.prototype,"drawScreenSize",void 0);b.__decorate([g.parameter()],a.prototype,"sceneHasOcludees",void 0);return a}(g.ShaderTechniqueConfiguration);e.PointRendererTechniqueConfiguration=f});
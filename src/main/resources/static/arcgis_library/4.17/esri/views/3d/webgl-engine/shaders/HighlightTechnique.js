// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ../lib/DefaultVertexAttributeLocations ./HighlightComposition.glsl ../../../webgl/Program ../../../webgl/renderState ../../../webgl/renderState @dojo/framework/shim/Promise".split(" "),function(k,d,f,l,e,h,m,n,p,q,g){Object.defineProperty(d,"__esModule",{value:!0});d.HighlightCompositionTechniqueConfiguration=d.HighlightCompositionTechnique=
void 0;e=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}f.__extends(a,b);a.prototype.initializeProgram=function(c){var b=a.shader.get().build(this.configuration);return new p(c.rctx,b.generateSource("vertex"),b.generateSource("fragment"),m.Default3D)};a.prototype.bindApplyPass=function(c){this.program.setUniform1i("tex",0);this.program.setUniform1i("origin",1);this.configuration.gridOptimization&&this.program.setUniform1i("coverageTex",2);this.program.setUniform4fv("color",
c.color);this.program.setUniform4fv("haloColor",c.haloColor);this.program.setUniform1f("outlineSize",8.6);this.program.setUniform1f("blurSize",.4);this.program.setUniform4f("opacities",c.haloOpacity,c.haloOpacityOccluded,c.fillOpacity,c.fillOpacityOccluded)};a.prototype.initializePipeline=function(){return 1===this.configuration.highlightStage?g.makePipelineState({blending:q.separateBlendingParams(770,1,771,771),colorWrite:g.defaultColorWriteParams}):g.makePipelineState({colorWrite:g.defaultColorWriteParams})};
Object.defineProperty(a.prototype,"primitiveType",{get:function(){return this.configuration.gridOptimization?4:5},enumerable:!1,configurable:!0});a.shader=new l.ReloadableShaderModule(n,function(){return new Promise(function(c,a){k(["./HighlightComposition.glsl"],c,a)})});return a}(e.ShaderTechnique);d.HighlightCompositionTechnique=e;e=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.highlightStage=0;a.gridOptimization=!1;return a}f.__extends(a,b);f.__decorate([h.parameter({count:3})],
a.prototype,"highlightStage",void 0);f.__decorate([h.parameter()],a.prototype,"gridOptimization",void 0);return a}(h.ShaderTechniqueConfiguration);d.HighlightCompositionTechniqueConfiguration=e});
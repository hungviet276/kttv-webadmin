// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/shaderLibrary/util/TextureOnly.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../core/shaderTechnique/ShaderTechniqueConfiguration ./DefaultVertexAttributeLocations ../../../webgl/Program ../../../webgl/renderState @dojo/framework/shim/Promise".split(" "),function(h,c,f,k,l,d,g,m,n,e){Object.defineProperty(c,"__esModule",{value:!0});c.TextureTechniqueConfiguration=c.TextureTechnique=void 0;d=function(b){function a(){return null!==
b&&b.apply(this,arguments)||this}f.__extends(a,b);a.prototype.initializeProgram=function(b){var c=a.shader.get().build();return new n(b.rctx,c.generateSource("vertex"),c.generateSource("fragment"),m.Default3D)};a.prototype.initializePipeline=function(){return this.configuration.hasAlpha?e.makePipelineState({blending:e.separateBlendingParams(770,1,771,771),colorWrite:e.defaultColorWriteParams}):e.makePipelineState({colorWrite:e.defaultColorWriteParams})};a.shader=new l.ReloadableShaderModule(k,function(){return new Promise(function(a,
b){h(["../core/shaderLibrary/util/TextureOnly.glsl"],a,b)})});return a}(d.ShaderTechnique);c.TextureTechnique=d;d=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.hasAlpha=!1;return a}f.__extends(a,b);f.__decorate([g.parameter()],a.prototype,"hasAlpha",void 0);return a}(g.ShaderTechniqueConfiguration);c.TextureTechniqueConfiguration=d});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../webgl ../../core/shaderLibrary/attributes/VertexPosition.glsl ../../core/shaderTechnique/ReloadableShaderModule ../../core/shaderTechnique/ShaderTechnique ../../core/shaderTechnique/ShaderTechniqueConfiguration ../../shaders/sources/edgeRenderer/EdgeShaderProgram.glsl ../../../../webgl/renderState @dojo/framework/shim/Promise".split(" "),function(l,g,e,m,n,p,k,d,q,h){Object.defineProperty(g,"__esModule",{value:!0});g.EdgeShaderTechnique=void 0;k=function(d){function f(){return null!==
d&&d.apply(this,arguments)||this}e.__extends(f,d);f.prototype.bindPass=function(b,a){b=this.program;var c=a.edgeRenderParameters;a=a.bindParameters;n.VertexPosition.bindViewProjTransform(b,c.viewProjectionTransform);b.setUniformMatrix3fv("uTransformNormal_ViewFromGlobal",c.transformNormal_ViewFromGlobal);b.setUniformMatrix4fv("uProj",a.camera.projectionMatrix);b.setUniform2f("uDepthBias",.5,-4E-4);b.setUniform2f("uPixelToNDC",2/a.camera.fullViewport[2],2/a.camera.fullViewport[3]);b.setUniform2f("uNDCToPixel",
a.camera.fullViewport[2]/2,a.camera.fullViewport[3]/2);b.setUniform1f("uDistanceFalloffFactor",c.distanceFalloffFactor);b.setUniform2f("uViewportDimInv",1/a.camera.fullViewport[2],1/a.camera.fullViewport[3]);b.setUniform1f("uPixelRatio",a.camera.pixelRatio||1)};f.prototype.initializeProgram=function(b){var a=f.shader.get(),c=this.configuration,c=a.build({slicePlaneEnabled:c.slicePlaneEnabled,sliceHighlightDisabled:c.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,silhouette:c.silhouette,legacy:c.legacy,
antialiasing:c.antialiasing,mode:c.mode,doublePrecisionRequiresObfuscation:c.doublePrecisionRequiresObfuscation});return new m.Program(b.rctx,c.generateSource("vertex"),c.generateSource("fragment"),a.attributeLocations)};f.prototype.initializePipeline=function(b){return(b=b.rctx.capabilities.blendMinMax)?h.makePipelineState({blending:h.separateBlendingParams(1,1,0,1,32774,b.MAX),depthTest:{func:515},colorWrite:h.defaultColorWriteParams}):h.makePipelineState({depthTest:{func:515},depthWrite:h.defaultDepthWriteParams,
colorWrite:h.defaultColorWriteParams})};f.shader=new p.ReloadableShaderModule(q,function(){return new Promise(function(b,a){l(["../../shaders/sources/edgeRenderer/EdgeShaderProgram.glsl"],b,a)})});return f}(k.ShaderTechnique);g.EdgeShaderTechnique=k;(function(g){var f=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.slicePlaneEnabled=!1;a.sliceHighlightDisabled=!1;a.silhouette=!1;a.legacy=!1;a.antialiasing=!1;a.mode=0;a.doublePrecisionRequiresObfuscation=!1;return a}e.__extends(a,
b);e.__decorate([d.parameter()],a.prototype,"slicePlaneEnabled",void 0);e.__decorate([d.parameter()],a.prototype,"sliceHighlightDisabled",void 0);e.__decorate([d.parameter()],a.prototype,"silhouette",void 0);e.__decorate([d.parameter()],a.prototype,"legacy",void 0);e.__decorate([d.parameter()],a.prototype,"antialiasing",void 0);e.__decorate([d.parameter({count:3})],a.prototype,"mode",void 0);e.__decorate([d.parameter()],a.prototype,"doublePrecisionRequiresObfuscation",void 0);return a}(d.ShaderTechniqueConfiguration);
g.Configuration=f})(k=g.EdgeShaderTechnique||(g.EdgeShaderTechnique={}));g.EdgeShaderTechnique=k});
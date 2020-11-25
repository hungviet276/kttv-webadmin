// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/shaderLibrary/util/View.glsl ../core/shaderTechnique/ReloadableShaderModule ../core/shaderTechnique/ShaderTechnique ../lib/DefaultVertexAttributeLocations ./SlicePlaneMaterial.glsl ../../../webgl/Program ../../../webgl/renderState ../../../webgl/renderState @dojo/framework/shim/Promise".split(" "),function(g,b,h,d,k,c,l,m,n,p,e){Object.defineProperty(b,"__esModule",{value:!0});b.SlicePlaneMaterialTechnique=void 0;c=function(b){function a(){return null!==b&&b.apply(this,
arguments)||this}h.__extends(a,b);a.prototype.initializeProgram=function(b){var f=a.shader.get().build();return new n(b.rctx,f.generateSource("vertex"),f.generateSource("fragment"),l.Default3D)};a.prototype.bindPass=function(b,a,c){d.View.bindProjectionMatrix(this.program,c.camera.projectionMatrix);this.program.setUniform4fv("backgroundColor",a.backgroundColor);this.program.setUniform4fv("gridColor",a.gridColor);this.program.setUniform1f("gridWidth",a.gridWidth)};a.prototype.bindDraw=function(a){d.View.bindView(this.program,
a)};a.prototype.initializePipeline=function(){return e.makePipelineState({blending:p.separateBlendingParams(1,1,771,771),depthTest:{func:513},colorWrite:e.defaultColorWriteParams})};a.shader=new k.ReloadableShaderModule(m,function(){return new Promise(function(a,b){g(["./SlicePlaneMaterial.glsl"],a,b)})});return a}(c.ShaderTechnique);b.SlicePlaneMaterialTechnique=c});
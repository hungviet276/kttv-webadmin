// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/buffer/InterleavedLayout ../core/shaderLibrary/util/AlphaDiscard.glsl ../lib/GLMaterialTexture ../lib/intersectorUtils ../lib/Material ../lib/StencilUtils ../lib/Util ./internal/bufferWriterUtils ./internal/MaterialUtil ../shaders/DefaultMaterialTechnique ../shaders/RealisticTreeTechnique ../../../webgl/renderState ../../../webgl/renderState".split(" "),
function(k,Q,l,z,e,f,w,A,B,C,D,m,E,F,q,x,G,H,r){var t=E.assert;k=function(c){function b(a,d){d=c.call(this,d)||this;d.supportsEdges=!0;d.techniqueConfig=new x.DefaultMaterialTechniqueConfiguration;d.params=q.copyParameters(a,I);d.vertexBufferLayout=b.getVertexBufferLayout(d.params);d.instanceBufferLayout=a.instanced?b.getInstanceBufferLayout(d.params):null;return d}l.__extends(b,c);b.prototype.isVisibleInPass=function(a){return 3===a?this.params.castShadows:!0};b.prototype.isVisible=function(){var a=
this.params;if(!c.prototype.isVisible.call(this)||0===a.layerOpacity)return!1;var d=a.instanced,b=a.vertexColors,e=a.symbolColors,d=!!d&&-1<d.indexOf("color"),f=a.vvColorEnabled,h="replace"===a.colorMixMode,n=0<a.opacity,a=a.externalColor&&0<a.externalColor[3];return b&&(d||f||e)?h?!0:n:b?h?a:n:d||f||e?h?!0:n:h?a:n};b.prototype.setParameterValues=function(a){var d=this.params,b;for(b in a)"instanced"===b&&t(a.instanced===d.instanced,"Can not change instanced attributes"),"textureId"===b&&t(d.textureId,
"Can only change texture of material that already has a texture"),"vertexColors"===b&&!0===a[b]&&a[b]!==d[b]&&t(d.vertexColors,"Can not enable vertex colors after DefaultMaterial creation"),d[b]=a[b];this.parametersChanged()};b.prototype.getParameters=function(){return this.params};b.prototype.getTechniqueConfig=function(a){this.techniqueConfig.output=a;this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId;this.techniqueConfig.hasColorTexture=!!this.params.textureId;this.techniqueConfig.vertexTangents=
this.params.vertexTangents;this.techniqueConfig.instanced=!!this.params.instanced;this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision;this.techniqueConfig.vvSize=this.params.vvSizeEnabled;this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset;this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective;this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled;this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled;
this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode;this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals?!0:!1;0===a&&(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering||(this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0),this.techniqueConfig.instancedColor=
!!this.params.instanced&&-1<this.params.instanced.indexOf("color"),this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,
this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic);return this.techniqueConfig};b.prototype.intersect=function(a,b,g,c,f,h,n){if(null!==this.params.verticalOffset){var d=c.camera;e.vec3.set(u,g[12],g[13],g[14]);g=null;switch(c.viewingMode){case 1:g=
e.vec3.normalize(y,u);break;case 2:g=e.vec3.copy(y,J)}var k=0;if(null!==this.params.verticalOffset){var p=e.vec3.subtract(K,u,d.eye),l=e.vec3.length(p),p=e.vec3.scale(p,p,1/l),m=null;this.params.screenSizePerspective&&(m=e.vec3.dot(g,p));k+=q.verticalOffsetAtDistance(d,l,this.params.verticalOffset,m,this.params.screenSizePerspective)}e.vec3.scale(g,g,k);e.vec3.transformMat3(v,g,c.transform.inverseRotation);f=e.vec3.subtract(L,f,v);h=e.vec3.subtract(M,h,v)}q.intersectTriangleGeometry(a,b,c,f,h,C.getVerticalOffsetObject3D(c.verticalOffset),
n)};b.prototype.getGLMaterial=function(a){if(0===a.output||1===a.output||2===a.output||3===a.output||4===a.output)return new N(a)};b.prototype.createBufferWriter=function(){return new O(this.vertexBufferLayout,this.instanceBufferLayout)};b.getVertexBufferLayout=function(a){var b=a.textureId||a.normalTextureId||a.metallicRoughnessTextureId||a.emissiveTextureId||a.occlusionTextureId,c=w.newLayout().vec3f("position").vec3f("normal");a.vertexTangents&&c.vec4f("tangent");b&&c.vec2f("uv0");a.vertexColors&&
c.vec4u8("color");a.symbolColors&&c.vec4u8("symbolColor");return c};b.getInstanceBufferLayout=function(a){var b=w.newLayout(),b=a.instancedDoublePrecision?b.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):b.mat4f("model").mat4f("modelNormal");a.instanced&&-1<a.instanced.indexOf("color")&&(b=b.vec4f("instanceColor"));a.instanced&&-1<a.instanced.indexOf("featureAttribute")&&(b=b.vec4f("instanceFeatureAttribute"));return b};return b}(D.Material);var N=function(c){function b(a){var b=
this,b=a.material,b=c.call(this,l.__assign(l.__assign({},a),b.getParameters()))||this;b.updateParameters();return b}l.__extends(b,c);b.prototype.updateParameters=function(){this.selectPipelines();this.selectSlot();var a=this.material.getParameters();this.updateTexture(a.textureId);this.technique=a.treeRendering?this.techniqueRep.acquireAndReleaseExisting(G.RealisticTreeTechnique,this.material.getTechniqueConfig(this.output),this.technique):this.techniqueRep.acquireAndReleaseExisting(x.DefaultMaterialTechnique,
this.material.getTechniqueConfig(this.output),this.technique)};b.prototype.selectSlot=function(){this.slot=this.material.getParameters().transparent?this.material.getParameters().writeDepth?5:8:3};b.prototype.selectPipelines=function(){var a=this.material.getParameters(),b=0===this.output?a.transparent&&H.separateBlendingParams(770,1,771,771):null,c=function(c){return r.makePipelineState({blending:b,culling:P(a),depthTest:{func:513},depthWrite:a.writeDepth&&r.defaultDepthWriteParams,colorWrite:r.defaultColorWriteParams,
stencilWrite:a.sceneHasOcludees?m.stencilWriteMaskOn:null,stencilTest:a.sceneHasOcludees?c?m.stencilToolMaskBaseParams:m.stencilBaseAllZerosParams:null})};this.pipelineState=c(!1);this.occludeePipelineState=c(!0)};b.prototype._updateShadowState=function(a){a.shadowMappingEnabled!==this.material.getParameters().shadowMappingEnabled&&(this.material.setParameterValues({shadowMappingEnabled:a.shadowMappingEnabled}),this.updateParameters())};b.prototype._updateOccludeeState=function(a){a.hasOccludees!==
this.material.getParameters().sceneHasOcludees&&(this.material.setParameterValues({sceneHasOcludees:a.hasOccludees}),this.updateParameters())};b.prototype.ensureParameters=function(a){0===this.output&&(this._updateShadowState(a),this._updateOccludeeState(a))};b.prototype.bind=function(a,b){a.bindProgram(this.technique.program);this.technique.bindPass(a,this.material.getParameters(),b);this.bindTexture(a,this.technique.program)};b.prototype.beginSlot=function(a){return a===this.slot};b.prototype.getPipelineState=
function(a,b){return b?this.occludeePipelineState:this.pipelineState};return b}(B);(k||(k={})).COLOR_GAMMA=2.1;var I={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,
doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,
1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:z.mat3f64.create(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:A.defaultMaskAlphaCutoff,textureAlphaPremultiplied:!1,sceneHasOcludees:!1},O=function(){function c(b,a){this.vertexBufferLayout=b;this.instanceBufferLayout=a}c.prototype.allocate=function(b){return this.vertexBufferLayout.createBuffer(b)};c.prototype.elementCount=function(b){return b.indices.position.length};c.prototype.write=
function(b,a,c,e){F.writeDefaultAttributes(a,this.vertexBufferLayout,b.transformation,b.invTranspTransformation,c,e)};return c}(),P=function(c){var b;b=c.cullFace?0!==c.cullFace:c.slicePlaneEnabled?!1:!c.transparent&&!c.doubleSided;return b&&{face:1===c.cullFace?1028:1029,mode:2305}},L=f.vec3f64.create(),M=f.vec3f64.create(),J=f.vec3f64.fromValues(0,0,1),y=f.vec3f64.create(),v=f.vec3f64.create(),u=f.vec3f64.create(),K=f.vec3f64.create();return k});
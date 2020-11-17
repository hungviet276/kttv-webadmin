// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/maybe ../../../../../../core/libs/gl-matrix-2/vec3 ../../../../../../core/libs/gl-matrix-2/vec3f32 ../../../../../../core/libs/gl-matrix-2/vec4 ../../../../../../core/libs/gl-matrix-2/vec4f32 ../../../../../../core/libs/gl-matrix-2/vec4f64 ./ComponentTechnique ./shader/ComponentShader.glsl ../../../core/material/MaterialBase ../../../core/shaderLibrary/util/AlphaDiscard.glsl".split(" "),function(k,f,c,g,l,m,h,n,p,q,u,b,v){function w(c){switch(c){case 0:return 0;
case 1:return 1;case 2:return 2;case 3:return 7}}Object.defineProperty(f,"__esModule",{value:!0});f.ComponentParametersVarying=f.ComponentParametersUniform=f.CommonMaterialParameters=f.ComponentMaterial=void 0;k=function(e){function a(){var d=e.call(this)||this;d.baseColor=n.vec4f32.fromValues(1,1,1,1);d.usePBR=!1;d.mrrFactors=m.vec3f32.fromValues(1,1,.5);d.emissiveFactor=m.vec3f32.fromValues(0,0,0);d.baseColorTexture=null;d.metallicRoughnessTexture=null;d.emissionTexture=null;d.occlusionTexture=
null;d.normalTexture=null;d.overlayTexOffset=p.vec4f64.fromValues(-1,-1,-1,-1);d.overlayTexScale=p.vec4f64.fromValues(0,0,0,0);d.overlayColorInner=null;d.overlayColorOuter=null;d.overlayHighlightInner=null;d.overlayHighlightOuter=null;d.overlayNormalInner=null;d.overlayNormalOuter=null;d.objectOpacity=1;d.commonMaterialParameters=new r;d.componentParameters=new t;d.alphaCutoff=v.defaultMaskAlphaCutoff;d.alphaDiscardMode=1;d.isIntegratedMesh=!1;d.polygonOffsetEnabled=!1;d.sceneHasOcludees=!1;d._techniqueConfig=
new q.ComponentTechniqueConfiguration;return d}c.__extends(a,e);a.prototype.dispose=function(d){this._technique&&(d.release(this._technique),this._technique=void 0);this.normalTexture=this.occlusionTexture=this.emissionTexture=this.metallicRoughnessTexture=this.baseColorTexture=null};a.prototype.getTechnique=function(d,a,c){var b=this._techniqueConfig;b.hasVertexColors=c.colors;b.hasNormals=c.normals;b.vertexTextureCoordinates=c.textureCoordinates;b.usePBR=this.usePBR;b.hasMetalnessAndRoughnessTexture=
g.isSome(this.metallicRoughnessTexture);b.hasEmissionTexture=g.isSome(this.emissionTexture);b.hasOcclusionTexture=g.isSome(this.occlusionTexture);b.hasNormalTexture=g.isSome(this.normalTexture);b.transparencyPassType=0===a.identifier&&null!=a.transparencyPassType?a.transparencyPassType:3;this.dirty&&(b.componentData=this.componentParameters.type,b.cullFace=this.commonMaterialParameters.cullFace,b.doubleSidedMode=this.commonMaterialParameters.doubleSided?1:0,b.baseColorTexture=g.isSome(this.baseColorTexture),
c=this._computeWhichMaterialPass(),b.blendingEnabled=1===c||2===c,b.alphaDiscardMode=this.alphaDiscardMode,b.integratedMeshMode=this.isIntegratedMesh?this.overlayColorInner||this.overlayColorOuter?this.overlayNormalInner||this.overlayNormalOuter?3:2:1:0,b.polygonOffsetEnabled=this.polygonOffsetEnabled,this._setClean());b.slicePlaneEnabled=a.slicePlaneEnabled&&this.commonMaterialParameters.slicePlaneEnabled;1===a.identifier?(b.output=3,b.vertexDiscardMode=0):2===a.identifier?(b.output=4,b.vertexDiscardMode=
0):(2===this._computeWhichMaterialPass()?b.vertexDiscardMode=a.transparent?2:1:b.vertexDiscardMode=0,b.output=w(a.subPass),0===a.subPass?(b.receiveAmbientOcclusion=a.ambientOcclusionEnabled,b.sceneHasOcludees=a.sceneHasOcludees,b.receiveShadows=a.shadowsEnabled,b.ssrEnabled=a.ssrParams.ssrEnabled):(b.receiveAmbientOcclusion=!1,b.receiveShadows=!1));return this._technique=d.repository.acquireAndReleaseExisting(q.ComponentTechnique,b,this._technique)};a.prototype.submit=function(b,a){var c=a.renderable.geometry,
d=a.components,e=a.renderable.drawParameters;a=a.renderable.meta.cameraDepthSquared;var f=d.geometryRanges,d=d.highlightRanges;switch(this._computeWhichMaterialPass()){case 0:b.materialOpaque.submitDraw(this,c,f,e,a);break;case 1:b.materialTransparent.submitDraw(this,c,f,e,a);break;case 2:b.materialOpaque.submitDraw(this,c,f,e,a);b.materialTransparent.submitDraw(this,c,f,e,a);break;case 3:b.materialIntegratedMesh.submitDraw(this,c,f,e,a),(this.overlayHighlightInner||this.overlayHighlightOuter)&&b.highlightIntegratedMesh.submitDraw(this,
c,f,e,a)}g.isSome(b.shadowMap)&&2!==this.componentParameters.castShadows&&b.shadowMap.submitDraw(this,c,f,e,a);g.isSome(b.highlight)&&g.isSome(d)&&b.highlight.submitDraw(this,c,d,e,a)};Object.defineProperty(a.prototype,"attributeLocations",{get:function(){return u.attributeLocations},enumerable:!1,configurable:!0});a.prototype._computeWhichMaterialPass=function(){return this.isIntegratedMesh?3:1>this.objectOpacity?1:0===this.componentParameters.opaqueOverride?0:1>this.baseColor[3]||0===this.alphaDiscardMode||
3===this.alphaDiscardMode?1:2===this.componentParameters.transparent?0:0===this.componentParameters.transparent?1:2};c.__decorate([b.parameter({vectorOps:h.vec4})],a.prototype,"baseColor",void 0);c.__decorate([b.parameter()],a.prototype,"usePBR",void 0);c.__decorate([b.parameter({vectorOps:l.vec3})],a.prototype,"mrrFactors",void 0);c.__decorate([b.parameter({vectorOps:l.vec3})],a.prototype,"emissiveFactor",void 0);c.__decorate([b.parameter({dispose:!0})],a.prototype,"baseColorTexture",void 0);c.__decorate([b.parameter({dispose:!0})],
a.prototype,"metallicRoughnessTexture",void 0);c.__decorate([b.parameter({dispose:!0})],a.prototype,"emissionTexture",void 0);c.__decorate([b.parameter({dispose:!0})],a.prototype,"occlusionTexture",void 0);c.__decorate([b.parameter({dispose:!0})],a.prototype,"normalTexture",void 0);c.__decorate([b.parameter({vectorOps:{equals:h.vec4.exactEquals,copy:h.vec4.copy}})],a.prototype,"overlayTexOffset",void 0);c.__decorate([b.parameter({vectorOps:{equals:h.vec4.exactEquals,copy:h.vec4.copy}})],a.prototype,
"overlayTexScale",void 0);c.__decorate([b.parameter()],a.prototype,"overlayColorInner",void 0);c.__decorate([b.parameter()],a.prototype,"overlayColorOuter",void 0);c.__decorate([b.parameter()],a.prototype,"overlayHighlightInner",void 0);c.__decorate([b.parameter()],a.prototype,"overlayHighlightOuter",void 0);c.__decorate([b.parameter()],a.prototype,"overlayNormalInner",void 0);c.__decorate([b.parameter()],a.prototype,"overlayNormalOuter",void 0);c.__decorate([b.parameter()],a.prototype,"objectOpacity",
void 0);c.__decorate([b.parameterBlock()],a.prototype,"commonMaterialParameters",void 0);c.__decorate([b.parameterBlock()],a.prototype,"componentParameters",void 0);c.__decorate([b.parameter()],a.prototype,"alphaCutoff",void 0);c.__decorate([b.parameter()],a.prototype,"alphaDiscardMode",void 0);c.__decorate([b.parameter()],a.prototype,"isIntegratedMesh",void 0);c.__decorate([b.parameter()],a.prototype,"polygonOffsetEnabled",void 0);c.__decorate([b.parameter()],a.prototype,"sceneHasOcludees",void 0);
return a}(b.MaterialBase);f.ComponentMaterial=k;var r=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;a.doubleSided=!1;a.cullFace=2;a.slicePlaneEnabled=!0;return a}c.__extends(a,e);c.__decorate([b.parameter()],a.prototype,"doubleSided",void 0);c.__decorate([b.parameter()],a.prototype,"cullFace",void 0);c.__decorate([b.parameter()],a.prototype,"slicePlaneEnabled",void 0);return a}(b.MaterialParameterBlock);f.CommonMaterialParameters=r;var t=function(e){function a(){var a=null!==
e&&e.apply(this,arguments)||this;a.externalColor=n.vec4f32.fromValues(1,1,1,1);a.externalColorMixMode=1;a.castShadows=0;return a}c.__extends(a,e);Object.defineProperty(a.prototype,"transparent",{get:function(){return 1>this.externalColor[3]?0:2},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"opaqueOverride",{get:function(){return 3===this.externalColorMixMode&&1===this.externalColor[3]?0:2},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"visible",{get:function(){return 0<
this.externalColor[3]?0:2},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"type",{get:function(){return 0},enumerable:!1,configurable:!0});c.__decorate([b.parameter({vectorOps:h.vec4})],a.prototype,"externalColor",void 0);c.__decorate([b.parameter()],a.prototype,"externalColorMixMode",void 0);c.__decorate([b.parameter()],a.prototype,"castShadows",void 0);return a}(b.MaterialParameterBlock);f.ComponentParametersUniform=t;k=function(e){function a(){var a=null!==e&&e.apply(this,arguments)||
this;a.texture=null;a.transparent=2;a.opaqueOverride=2;a.castShadows=2;return a}c.__extends(a,e);Object.defineProperty(a.prototype,"type",{get:function(){return 1},enumerable:!1,configurable:!0});c.__decorate([b.parameter()],a.prototype,"texture",void 0);c.__decorate([b.parameter()],a.prototype,"transparent",void 0);c.__decorate([b.parameter()],a.prototype,"opaqueOverride",void 0);c.__decorate([b.parameter()],a.prototype,"castShadows",void 0);return a}(b.MaterialParameterBlock);f.ComponentParametersVarying=
k});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/libs/gl-matrix-2/vec2f32 ../../support/buffer/InterleavedLayout ../lib/GLMaterial ../lib/Material ../lib/Util ./internal/bufferWriterUtils ./internal/MaterialUtil ../shaders/LineCalloutTechnique".split(" "),function(k,x,l,c,p,q,r,b,f,m,g){k=function(b){function a(h,d){d=b.call(this,d)||this;d.techniqueConfig=new g.LineCalloutTechniqueConfiguration;d.params=m.copyParameters(h,t);d._uniqueMaterialIdentifier=a.uniqueMaterialIdentifier(d.params);return d}
l.__extends(a,b);Object.defineProperty(a.prototype,"uniqueMaterialIdentifier",{get:function(){return this._uniqueMaterialIdentifier},enumerable:!1,configurable:!0});a.prototype.dispose=function(){};a.prototype.getGLMaterial=function(a){return 0===a.output?new u(a):void 0};a.prototype.getPassParameters=function(){return this.params};a.prototype.getTechniqueConfig=function(a){this.techniqueConfig.occlusionTestEnabled=this.params.occlusionTest;this.techniqueConfig.verticalOffset=!!this.params.verticalOffset;
this.techniqueConfig.screenSizePerspective=!!this.params.screenSizePerspective;this.techniqueConfig.depthHudEnabled=a;this.techniqueConfig.depthHudAlignStartEnabled=!!this.params.depthHUDAlignStart;this.techniqueConfig.screenCenterOffsetUnitsEnabled="screen"===this.params.centerOffsetUnits?1:0;this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled;return this.techniqueConfig};a.prototype.intersect=function(){};a.prototype.createBufferWriter=function(){return new v};a.prototype.setParameterValues=
function(h){m.updateParameters(this.params,h)&&(this._uniqueMaterialIdentifier=a.uniqueMaterialIdentifier(this.params),this.parametersChanged())};a.prototype.getParameters=function(){return this.params};a.uniqueMaterialIdentifier=function(a){return JSON.stringify({screenOffset:a.screenOffset||[0,0],centerOffsetUnits:a.centerOffsetUnits||"world"})};return a}(r.Material);var u=function(b){function a(a){a=b.call(this,a)||this;a.isRenderSlot=!0;a.updateParameters();return a}l.__extends(a,b);a.prototype.updateParameters=
function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(g.LineCalloutTechnique,this.material.getTechniqueConfig(!1),this.technique);this.depthTechnique=this.techniqueRep.acquireAndReleaseExisting(g.LineCalloutTechnique,this.material.getTechniqueConfig(!0),this.depthTechnique)};a.prototype.beginSlot=function(a){switch(a){case 20:return this.isRenderSlot=!0;case 21:return this.isRenderSlot=!1,!0}return!1};a.prototype.getTechnique=function(){return this.isRenderSlot?this.technique:this.depthTechnique};
a.prototype.bind=function(a,b){var d=this.getTechnique();a.bindProgram(d.program);d.bindPass(a,this.material.getPassParameters(),b)};return a}(q.GLMaterial),t={verticalOffset:null,screenSizePerspective:null,screenOffset:[0,0],color:[0,0,0,1],size:1,borderColor:null,occlusionTest:!1,shaderPolygonOffset:1E-5,depthHUDAlignStart:!1,centerOffsetUnits:"world",slicePlaneEnabled:!1},w=p.newLayout().vec3f(b.VertexAttrConstants.POSITION).vec3f(b.VertexAttrConstants.NORMAL).vec2f(b.VertexAttrConstants.UV0).vec4f(b.VertexAttrConstants.AUXPOS1),
n=[c.vec2f32.fromValues(0,0),c.vec2f32.fromValues(1,0),c.vec2f32.fromValues(0,1),c.vec2f32.fromValues(1,0),c.vec2f32.fromValues(1,1),c.vec2f32.fromValues(0,1)],v=function(){function c(){this.vertexBufferLayout=w}c.prototype.allocate=function(a){return this.vertexBufferLayout.createBuffer(a)};c.prototype.elementCount=function(a){return 6*a.indices[b.VertexAttrConstants.POSITION].length};c.prototype.write=function(a,c,d,e){f.writePosition(c.indices[b.VertexAttrConstants.POSITION],c.vertexAttr[b.VertexAttrConstants.POSITION].data,
a.transformation,d.position,e,6);f.writeNormal(c.indices[b.VertexAttrConstants.NORMAL],c.vertexAttr[b.VertexAttrConstants.NORMAL].data,a.invTranspTransformation,d.normal,e,6);f.writeBufferVec4(c.indices[b.VertexAttrConstants.AUXPOS1],c.vertexAttr[b.VertexAttrConstants.AUXPOS1].data,d.auxpos1,e,6);for(a=0;a<n.length;++a)d.uv0.setVec(e+a,n[a])};return c}();return k});
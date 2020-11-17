// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,b){Object.defineProperty(b,"__esModule",{value:!0});b.ShaderTechnique=void 0;d=function(){function a(a,c){c&&(this._config=c.snapshot());this._program=this.initializeProgram(a);a.commonUniformStore&&(this._commonUniformStore=a.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program));this._pipeline=this.initializePipeline(a)}a.prototype.dispose=function(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),
this._program.dispose(),this._program=null)};a.prototype.reload=function(a){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose());this._program=this.initializeProgram(a);this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)};Object.defineProperty(a.prototype,"program",{get:function(){return this._program},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"pipeline",{get:function(){return this._pipeline},
enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"key",{get:function(){return this._config.key},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"configuration",{get:function(){return this._config},enumerable:!1,configurable:!0});a.prototype.bindPass=function(a,c,b){};a.prototype.bindMaterial=function(a,c,b){};a.prototype.bindDraw=function(a,b,d){};a.prototype.bindPipelineState=function(a){a.setPipelineState(this.pipeline)};a.prototype.ensureAttributeLocations=function(a){this.program.assertCompatibleVertexAttributeLocations(a)};
Object.defineProperty(a.prototype,"primitiveType",{get:function(){return 4},enumerable:!1,configurable:!0});return a}();b.ShaderTechnique=d});
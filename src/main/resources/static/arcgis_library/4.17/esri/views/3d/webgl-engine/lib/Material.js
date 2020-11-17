// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/maybe","./DefaultVertexAttributeLocations","./IdGen"],function(d,c,e,f,g){Object.defineProperty(c,"__esModule",{value:!0});c.materialPredicate=c.Material=void 0;d=function(){function b(a){this.supportsEdges=!1;this._visible=!0;this._renderOccluded=1;this._insertOrder=this._renderPriority=0;this._vertexAttributeLocations=f.Default3D;this.id=b._idGen.gen(a)}b.prototype.dispose=function(){};b.prototype.update=function(a){return!1};Object.defineProperty(b.prototype,
"visible",{get:function(){return this._visible},set:function(a){a!==this._visible&&(this._visible=a,this.parametersChanged())},enumerable:!1,configurable:!0});b.prototype.isVisibleInPass=function(a){return!0};Object.defineProperty(b.prototype,"renderOccluded",{get:function(){return this._renderOccluded},set:function(a){a!==this._renderOccluded&&(this._renderOccluded=a,this.parametersChanged())},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"renderPriority",{get:function(){return this._renderPriority},
set:function(a){a!==this._renderPriority&&(this._renderPriority=a,this.parametersChanged())},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"insertOrder",{get:function(){return this._insertOrder},set:function(a){a!==this._insertOrder&&(this._insertOrder=a,this.parametersChanged())},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"vertexAttributeLocations",{get:function(){return this._vertexAttributeLocations},enumerable:!1,configurable:!0});b.prototype.isVisible=
function(){return this._visible};b.prototype.parametersChanged=function(){e.isSome(this.materialRepository)&&this.materialRepository.materialChanged(this)};b._idGen=new g.IdGen;return b}();c.Material=d;c.materialPredicate=function(b,a){return b.isVisible()&&b.isVisibleInPass(a.pass)&&0!==(b.renderOccluded&a.renderOccludedMask)}});
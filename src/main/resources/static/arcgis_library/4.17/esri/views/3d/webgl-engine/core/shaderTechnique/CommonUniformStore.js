// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/arrayUtils"],function(d,c,e){Object.defineProperty(c,"__esModule",{value:!0});c.CommonUniformStore=void 0;d=function(){function a(){this._uniforms={proj:[],shadowMapDistance:[],viewportPixelSz:[],lightingMainDirection:[]}}a.prototype.dispose=function(){this._uniforms=null};a.prototype.getPrograms=function(b){return this._uniforms[b]||[]};a.prototype.subscribeProgram=function(b){for(var a in this._uniforms)b.hasUniform(a)&&this._uniforms[a].push(b)};
a.prototype.unsubscribeProgram=function(a){for(var b in this._uniforms)e.removeUnordered(this._uniforms[b],a)};return a}();c.CommonUniformStore=d});
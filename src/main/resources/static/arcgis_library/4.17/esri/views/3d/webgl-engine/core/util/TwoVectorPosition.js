// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f32","../../../../../core/libs/gl-matrix-2/vec3f64"],function(e,b,d,f,h){Object.defineProperty(b,"__esModule",{value:!0});b.TwoVectorPosition=void 0;e=function(){function a(c){this._low=f.vec3f32.create();this._high=f.vec3f32.create();c&&this.set(c)}Object.defineProperty(a.prototype,"low",{get:function(){return this._low},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,
"high",{get:function(){return this._high},enumerable:!1,configurable:!0});a.prototype.set=function(c){var a=this._low,b=this._high;d.vec3.copy(a,c);d.vec3.sub(b,c,a)};a.prototype.setElements=function(c,a,b){d.vec3.set(g,c,a,b);this.set(g)};a.prototype.get=function(a){return d.vec3.add(a,this._low,this._high)};a.prototype.getLowScaled=function(a){return d.vec3.scale(a,this._low,1)};return a}();b.TwoVectorPosition=e;var g=h.vec3f64.create()});
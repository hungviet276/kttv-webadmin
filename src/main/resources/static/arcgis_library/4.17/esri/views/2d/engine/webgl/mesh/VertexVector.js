// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../Utils","./VertexBuffer","../util/Writer"],function(h,e,l,m,g){Object.defineProperty(e,"__esModule",{value:!0});e.VertexVectors=void 0;var k=function(){function b(a,b){this.data=a;this.stride=b}Object.defineProperty(b.prototype,"vertexCount",{get:function(){var a=this.data.length/(this.stride/4);a!==(a|0)&&console.debug("Corrupted stride");return a},enumerable:!1,configurable:!0});b.prototype.transfer=function(a,b){var c=this.data.buffer();a.vertexCount=this.vertexCount;
a.data=c;a.stride=this.stride;b.push(c)};return b}();e.default=k;h=function(){function b(a,b,c){void 0===c&&(c=!1);this.geometryType=a;this.indexVector=new g.default(Uint32Array,6*b);this.namedVectors={};a=l.getStrides(a,c);for(var f in a){c=a[f];var d=void 0;switch(c%4){case 0:case 2:d=new g.default(Uint32Array,c*b);break;case 1:case 3:d=new g.default(Uint8Array,c*b)}this.namedVectors[f]=new k(d,c)}}b.prototype.get=function(a){return this.namedVectors[a].data};b.prototype.getVector=function(a){return this.namedVectors[a]};
b.prototype.transfer=function(a,b){var c=this.indexVector.buffer(),f={};b.push(c);for(var d in this.namedVectors){var e=this.namedVectors[d];f[d]={};e.transfer(f[d],b)}a.geometryType=this.geometryType;a.indexBuffer=c;a.namedBuffers=f;this.destroy()};b.prototype.intoBuffers=function(){var a=m.VertexBuffers.fromVertexVectors(this);this.destroy();return a};b.prototype.destroy=function(){this.namedVectors=this.indexVector=null};return b}();e.VertexVectors=h});
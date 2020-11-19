// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/libs/gl-matrix-2/vec2"],function(g,d,h){Object.defineProperty(d,"__esModule",{value:!0});d.BufferViewVec2Impl=void 0;g=function(){function c(a,b,f,c,e){void 0===f&&(f=0);this.TypedArrayConstructor=a;this.elementCount=2;a=this.TypedArrayConstructor;void 0===c&&(c=2*a.BYTES_PER_ELEMENT);var d=0===b.byteLength?0:f;this.typedBuffer=null==e?new a(b,d):new a(b,d,(e-f)/a.BYTES_PER_ELEMENT);this.typedBufferStride=c/a.BYTES_PER_ELEMENT;this.count=Math.ceil(this.typedBuffer.length/
this.typedBufferStride);this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}c.prototype.getVec=function(a,b){return h.vec2.set(b,this.typedBuffer[a*this.typedBufferStride],this.typedBuffer[a*this.typedBufferStride+1])};c.prototype.setVec=function(a,b){this.typedBuffer[a*this.typedBufferStride]=b[0];this.typedBuffer[a*this.typedBufferStride+1]=b[1]};c.prototype.get=function(a,b){return this.typedBuffer[a*this.typedBufferStride+b]};c.prototype.set=function(a,b,c){this.typedBuffer[a*
this.typedBufferStride+b]=c};c.prototype.setValues=function(a,b,c){this.typedBuffer[a*this.typedBufferStride]=b;this.typedBuffer[a*this.typedBufferStride+1]=c};c.prototype.copyFrom=function(a,b,c){var d=this.typedBuffer,e=b.typedBuffer;a*=this.typedBufferStride;b=c*b.typedBufferStride;d[a]=e[b];d[a+1]=e[b+1]};Object.defineProperty(c.prototype,"buffer",{get:function(){return this.typedBuffer.buffer},enumerable:!1,configurable:!0});c.ElementCount=2;return c}();d.BufferViewVec2Impl=g});
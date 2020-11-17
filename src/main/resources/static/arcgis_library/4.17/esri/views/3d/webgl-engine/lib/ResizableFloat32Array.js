// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/mathUtils"],function(e,d,f){Object.defineProperty(d,"__esModule",{value:!0});d.ResizableFloat32Array=void 0;e=function(){function b(a){null==a?a=16:65536>a&&(a=f.nextHighestPowerOfTwo(a));this._array=new Float32Array(a);this._size=0}b.prototype.resize=function(a,b){this._size=a;if(this._size>this._array.length){for(a=this._array.length||1;a<this._size;)a*=2;var c=new Float32Array(a);b&&c.set(this._array);this._array=c;return!0}c=2*this._size;if(c<=this._array.length){for(a=
this._array.length;a>=c;)a=Math.floor(a/2);c=new Float32Array(a);b&&c.set(this._array.subarray(0,a));this._array=c;return!0}return!1};b.prototype.append=function(a){var b=this._size;this.resize(this._size+a.length,!0);this._array.set(a,b)};b.prototype.erase=function(a,b){for(;a<b;++a)this._array[a]=0};Object.defineProperty(b.prototype,"array",{get:function(){return this._array},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"size",{get:function(){return this._size},enumerable:!1,
configurable:!0});return b}();d.ResizableFloat32Array=e});
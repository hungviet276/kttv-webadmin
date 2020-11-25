// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../lib/AutoDisposable"],function(e,d,f,g){Object.defineProperty(d,"__esModule",{value:!0});d.BucketedObjectStore=d.BucketStorable=void 0;e=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a._bucket=null;a._bucketIndex=0;return a}f.__extends(a,b);Object.defineProperty(a.prototype,"bucketKey",{get:function(){return this._bucket.key},enumerable:!1,configurable:!0});return a}(g.AutoDisposable);d.BucketStorable=e;e=function(){function b(){this._buckets=
new Map;this._count=0}b.prototype.add=function(a,c){a=this._getBucket(a);c._bucket=a;c._bucketIndex=a.count;a._data.push(c);this._count++};b.prototype.remove=function(a){var c=a._bucket._data,b=c[c.length-1];c[a._bucketIndex]=b;b._bucketIndex=a._bucketIndex;c.pop();this._count--;a._bucket=null;a._bucketIndex=0};b.prototype.updateKey=function(a,b){this.remove(a);this.add(b,a)};b.prototype.getBucket=function(a){return this._getBucket(a).data};b.prototype.forEach=function(a){this._buckets.forEach(function(b){a(b.data,
b.key)})};Object.defineProperty(b.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0});b.prototype._getBucket=function(a){var b=this._buckets.get(a);if(b)return b;b=new h(a);this._buckets.set(a,b);return b};return b}();d.BucketedObjectStore=e;var h=function(){function b(a){this.key=a;this._data=[]}Object.defineProperty(b.prototype,"data",{get:function(){return this._data},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"count",{get:function(){return this._data.length},
enumerable:!1,configurable:!0});return b}()});
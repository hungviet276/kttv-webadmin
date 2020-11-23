// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Evented ../../../core/MapUtils ./GraphicsMap".split(" "),function(l,k,n,p,m,q){Object.defineProperty(k,"__esModule",{value:!0});k.LimitGraphicsMap=void 0;l=function(b){function a(c){var a=b.call(this)||this;a._limit=c;a._all=new q.GraphicsMap;a._active=new r(a);a._pending=new Map;a._handle=a._all.on("change",function(c){return a._handleChanges(c)});return a}n.__extends(a,b);a.prototype.destroy=function(){this._handle.remove()};Object.defineProperty(a.prototype,
"length",{get:function(){return this._active.length},enumerable:!1,configurable:!0});a.prototype.toArray=function(){return this._active.toArray()};a.prototype.find=function(a){return this._active.find(a)};a.prototype.forEach=function(a){this._active.forEach(a)};a.prototype.addMany=function(a){this._all.addMany(a)};a.prototype.removeManyByObjectId=function(a){this._all.removeManyByObjectId(a)};a.prototype._handleChanges=function(a){var c=this,b=a.removed;if(0<this._pending.size)for(var b=[],e=0,g=
a.removed;e<g.length;e++){var f=g[e];this._pending.delete(f.objectId)||b.push(f)}e=this._limit-this._active.length+b.length;e<a.added.length&&(this._active.removeMany(b),b=[],d.reset(1-this._limit/(this._active.length+a.added.length)),this._active.forEach(function(a){d.sample()&&(b.push(a),c._pending.set(a.objectId,a))}),e=this._limit-this._active.length+b.length);var h=a.added;if(e<a.added.length)for(h=[],d.reset(e/a.added.length),g=0,a=a.added;g<a.length;g++)f=a[g],d.sample()?h.push(f):this._pending.set(f.objectId,
f);f=e-h.length;0<f&&0<this._pending.size&&(d.reset(f/this._pending.size),this._pending.forEach(function(a){d.sample()&&(h.push(a),c._pending.delete(a.objectId))}));this._active.addAndRemove(h,b)};return a}(p);k.LimitGraphicsMap=l;var d=new (function(){function b(){this.percentage=1;this.last=-1;this.index=0}b.prototype.reset=function(a){this.percentage=a;this.last=-1};b.prototype.sample=function(){var a=Math.floor(this.index*this.percentage);++this.index;if(a===this.last)return!1;this.last=a;return!0};
return b}()),r=function(){function b(a){this._parent=a;this._map=new Map}Object.defineProperty(b.prototype,"length",{get:function(){return this._map.size},enumerable:!1,configurable:!0});b.prototype.forEach=function(a){this._map.forEach(function(b){return a(b)})};b.prototype.find=function(a){var b;m.someMap(this._map,function(c){return a(c)?(b=c,!0):!1});return b};b.prototype.toArray=function(){return m.valuesOfMap(this._map)};b.prototype.addAndRemove=function(a,b){for(var c=0;c<a.length;c++){var d=
a[c];this._map.set(d.objectId,d)}for(c=0;c<b.length;c++)d=b[c],this._map.delete(d.objectId);(0<a.length||0<b.length)&&this._parent.emit("change",{added:a,removed:b})};b.prototype.removeMany=function(a){for(var b=0;b<a.length;b++)this._map.delete(a[b].objectId);0<a.length&&this._parent.emit("change",{added:[],removed:a})};return b}()});
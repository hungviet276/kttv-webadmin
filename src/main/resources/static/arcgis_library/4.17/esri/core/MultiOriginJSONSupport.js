// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ./Accessor ./ReadOnlyMultiOriginJSONSupport ./accessorSupport/PropertyOrigin ./accessorSupport/utils ./accessorSupport/write ./accessorSupport/decorators/subclass".split(" "),function(m,e,g,n,p,h,k,q,l){Object.defineProperty(e,"__esModule",{value:!0});e.MultiOriginJSONSupport=e.MultiOriginJSONMixin=void 0;var r=function(c){c=function(c){function d(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];return c.apply(this,a)||this}g.__extends(d,c);d.prototype.clear=
function(a,b){void 0===b&&(b="user");return k.getProperties(this).store.delete(a,h.nameToId(b))};d.prototype.write=function(a,b){void 0===a&&(a={});a=a||{};q.default(this,a,b);return a};d.prototype.setAtOrigin=function(a,b,c){k.getProperties(this).setAtOrigin(a,b,h.nameToId(c))};d.prototype.removeOrigin=function(a){var b=k.getProperties(this).store;a=h.nameToId(a);for(var c=0,d=b.keys(a);c<d.length;c++){var f=d[c];b.originOf(f)===a&&b.set(f,b.get(f,a),6)}};d.prototype.updateOrigin=function(a,b){var c=
k.getProperties(this).store;b=h.nameToId(b);for(var d=this.get(a),f=b+1;f<h.OriginIdNum;++f)c.delete(a,f);c.set(a,d,b)};d.prototype.toJSON=function(a){return this.write({},a)};return d=g.__decorate([l.subclass("esri.core.WriteableMultiOriginJSONSupport")],d)}(c);c.prototype.toJSON.isDefaultToJSON=!0;return c};e.MultiOriginJSONMixin=function(c){return function(c){function d(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];return c.apply(this,a)||this}g.__extends(d,c);return d=g.__decorate([l.subclass("esri.core.MultiOriginJSONSupport")],
d)}(r(p.ReadOnlyMultiOriginJSONMixin(c)))};m=function(c){function e(){return null!==c&&c.apply(this,arguments)||this}g.__extends(e,c);return e=g.__decorate([l.subclass("esri.core.MultiOriginJSONSupport")],e)}(e.MultiOriginJSONMixin(n));e.MultiOriginJSONSupport=m});
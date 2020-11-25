// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ./core/JSONSupport ./core/mathUtils ./core/accessorSupport/decorators ./core/accessorSupport/ensureType ./geometry/Point ./views/3d/support/mathUtils".split(" "),function(p,q,e,l,m,d,f,g,n){return function(k){function b(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];a=k.apply(this,a)||this;a.position=new g([0,0,0]);a.heading=0;a.tilt=0;a.fov=55;return a}e.__extends(b,k);h=b;b.prototype.normalizeCtorArgs=function(a,b,c,d){a&&"object"===typeof a&&("x"in a||
Array.isArray(a))&&(a={position:a},null!=b&&(a.heading=b),null!=c&&(a.tilt=c),null!=d&&(a.fov=d));return a};b.prototype.writePosition=function(a,b,c,d){var e=a.clone();e.x=f.ensureNumber(a.x||0);e.y=f.ensureNumber(a.y||0);e.z=a.hasZ?f.ensureNumber(a.z||0):a.z;b[c]=e.write(null,d)};b.prototype.readPosition=function(a,b){var c=new g;c.read(a,b);c.x=f.ensureNumber(c.x||0);c.y=f.ensureNumber(c.y||0);c.z=c.hasZ?f.ensureNumber(c.z||0):c.z;return c};b.prototype.equals=function(a){return a?this.tilt===a.tilt&&
this.heading===a.heading&&this.fov===a.fov&&this.position.equals(a.position):!1};b.prototype.clone=function(){return new h({position:this.position.clone(),heading:this.heading,tilt:this.tilt,fov:this.fov})};var h;e.__decorate([d.property({type:g,json:{write:{isRequired:!0}}})],b.prototype,"position",void 0);e.__decorate([d.writer("position")],b.prototype,"writePosition",null);e.__decorate([d.reader("position")],b.prototype,"readPosition",null);e.__decorate([d.property({type:Number,nonNullable:!0,
json:{write:{isRequired:!0}}}),d.cast(function(a){return n.cyclicalDeg.normalize(f.ensureNumber(a))})],b.prototype,"heading",void 0);e.__decorate([d.property({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),d.cast(function(a){return m.clamp(f.ensureNumber(a),-180,180)})],b.prototype,"tilt",void 0);e.__decorate([d.property({type:Number,nonNullable:!0,json:{read:!1,write:!1}})],b.prototype,"fov",void 0);return b=h=e.__decorate([d.subclass("esri.Camera")],b)}(l.JSONSupport)});
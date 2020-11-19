// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/accessorSupport/decorators ../rest/identify ./Task".split(" "),function(h,k,c,d,f,g){return function(e){function b(a){a=e.call(this,a)||this;a.gdbVersion=null;a.url=null;return a}c.__extends(b,e);b.prototype.execute=function(a,b){this.gdbVersion&&!a.gdbVersion&&(a.gdbVersion=this.gdbVersion);return f.identify(this.url,a,b)};c.__decorate([d.property()],b.prototype,"gdbVersion",void 0);c.__decorate([d.property()],b.prototype,"url",void 0);return b=c.__decorate([d.subclass("esri.tasks.IdentifyTask")],
b)}(g)});
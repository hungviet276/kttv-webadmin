// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Color ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators".split(" "),function(k,l,b,d,g,h,e){return function(f){function a(a){a=f.call(this,a)||this;a.color=new d([0,0,0,1]);return a}b.__extends(a,f);c=a;a.prototype.clone=function(){return new c(h.clone({color:this.color}))};var c;b.__decorate([e.property({type:d,json:{write:!0}})],a.prototype,"color",void 0);return a=c=b.__decorate([e.subclass("esri.webmap.background.ColorBackground")],
a)}(g.JSONSupport)});
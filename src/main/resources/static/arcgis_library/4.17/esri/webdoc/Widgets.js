// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ./widgets/Range ./widgets/TimeSlider".split(" "),function(l,m,b,f,g,c,h,k){return function(e){function a(a){a=e.call(this,a)||this;a.range=null;a.timeSlider=null;return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d(g.clone({range:this.range,timeSlider:this.timeSlider}))};var d;b.__decorate([c.property({type:h,json:{write:!0}})],a.prototype,"range",void 0);b.__decorate([c.property({type:k,
json:{write:!0}})],a.prototype,"timeSlider",void 0);return a=d=b.__decorate([c.subclass("esri.webdoc.Widgets")],a)}(f.JSONSupport)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/JSONSupport ../core/accessorSupport/decorators ../webdoc/applicationProperties/Viewing".split(" "),function(h,k,b,f,d,g){return function(e){function a(a){a=e.call(this,a)||this;a.viewing=null;return a}b.__extends(a,e);c=a;a.prototype.clone=function(){return new c({viewing:this.viewing?this.viewing.clone():null})};var c;b.__decorate([d.property({type:g,json:{write:!0}})],a.prototype,"viewing",void 0);return a=c=b.__decorate([d.subclass("esri.webscene.ApplicationProperties")],
a)}(f.JSONSupport)});
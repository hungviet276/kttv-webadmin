// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(g,h,b,f,c){return function(e){function a(a){a=e.call(this,a)||this;a.field=null;a.order=null;return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d({field:this.field,order:this.order})};var d;b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"field",void 0);b.__decorate([c.property({type:["asc","desc"],json:{write:!0}})],a.prototype,"order",void 0);return a=
d=b.__decorate([c.subclass("esri.popup.support.RelatedRecordsInfoFieldOrder")],a)}(f.JSONSupport)});
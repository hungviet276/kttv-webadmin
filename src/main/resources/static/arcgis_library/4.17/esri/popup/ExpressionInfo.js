// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators"],function(g,h,b,f,c){return function(e){function a(a){a=e.call(this,a)||this;a.name=null;a.title=null;a.expression=null;a.returnType=null;return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})};var d;b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"title",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"expression",void 0);b.__decorate([c.property({type:["string","number"],json:{write:!0}})],a.prototype,"returnType",void 0);return a=d=b.__decorate([c.subclass("esri.popup.ExpressionInfo")],a)}(f.JSONSupport)});
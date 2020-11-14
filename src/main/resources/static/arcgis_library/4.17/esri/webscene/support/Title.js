// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(e,f,b,h,g){Object.defineProperty(f,"__esModule",{value:!0});e=function(c){function a(){var a=null!==c&&c.apply(this,arguments)||this;a.text="";return a}b.__extends(a,c);d=a;a.prototype.clone=function(){return new d({text:this.text})};var d;b.__decorate([g.property({type:String,json:{write:{isRequired:!0}}})],a.prototype,"text",void 0);return a=d=b.__decorate([g.subclass("esri.webscene.support.Title")],
a)}(h.JSONSupport);f.default=e});
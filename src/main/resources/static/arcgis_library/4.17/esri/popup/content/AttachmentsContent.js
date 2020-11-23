// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/accessorSupport/decorators","./Content"],function(g,h,b,c,f){return function(e){function a(a){a=e.call(this,a)||this;a.displayType=null;a.type="attachments";return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d({displayType:this.displayType})};var d;b.__decorate([c.property({type:["preview","list"],json:{write:!0}})],a.prototype,"displayType",void 0);b.__decorate([c.property({type:["attachments"],readOnly:!0,json:{read:!1,write:!0}})],
a.prototype,"type",void 0);return a=d=b.__decorate([c.subclass("esri.popup.content.AttachmentsContent")],a)}(f)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Accessor ../../core/Identifiable ../../core/accessorSupport/decorators".split(" "),function(h,k,b,f,g,c){return function(e){function a(a){a=e.call(this,a)||this;a.active=!1;a.className=null;a.disabled=!1;a.id=null;a.indicator=!1;a.title=null;a.type=null;a.visible=!0;return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,
visible:this.visible})};var d;b.__decorate([c.property()],a.prototype,"active",void 0);b.__decorate([c.property()],a.prototype,"className",void 0);b.__decorate([c.property()],a.prototype,"disabled",void 0);b.__decorate([c.property()],a.prototype,"id",void 0);b.__decorate([c.property()],a.prototype,"indicator",void 0);b.__decorate([c.property()],a.prototype,"title",void 0);b.__decorate([c.property()],a.prototype,"type",void 0);b.__decorate([c.property()],a.prototype,"visible",void 0);return a=d=b.__decorate([c.subclass("esri.support.actions.ActionBase")],
a)}(g.IdentifiableMixin(f))});
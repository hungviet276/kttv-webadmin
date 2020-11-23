// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/accessorSupport/decorators","./ActionBase"],function(g,h,b,d,f){return function(e){function a(a){a=e.call(this,a)||this;a.image=null;a.type="button";return a}b.__extends(a,e);c=a;a.prototype.clone=function(){return new c({active:this.active,className:this.className,disabled:this.disabled,id:this.id,indicator:this.indicator,title:this.title,visible:this.visible,image:this.image})};var c;b.__decorate([d.property()],a.prototype,"image",void 0);return a=
c=b.__decorate([d.subclass("esri.support.Action.ActionButton")],a)}(f)});
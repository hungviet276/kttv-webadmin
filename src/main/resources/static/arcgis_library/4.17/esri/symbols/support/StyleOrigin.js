// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Accessor ../../core/accessorSupport/decorators ../../portal/Portal".split(" "),function(h,k,b,f,c,g){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.portal=null;return a}b.__extends(a,d);e=a;a.prototype.clone=function(){return new e({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})};var e;b.__decorate([c.property({type:String})],a.prototype,"name",void 0);b.__decorate([c.property({type:String})],
a.prototype,"styleUrl",void 0);b.__decorate([c.property({type:String})],a.prototype,"styleName",void 0);b.__decorate([c.property({type:g})],a.prototype,"portal",void 0);return a=e=b.__decorate([c.subclass("esri.symbols.support.StyleOrigin")],a)}(f)});
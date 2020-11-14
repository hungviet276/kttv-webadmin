// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Color ../../core/JSONSupport ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators ./materialUtils".split(" "),function(c,b,d,g,h,k,l,e,f){Object.defineProperty(b,"__esModule",{value:!0});b.Symbol3DOutline=void 0;c=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.color=new g([0,0,0,1]);a.size=l.px2pt(1);a.stipplePattern=null;a.stippleOffColor=null;return a}d.__extends(a,b);c=a;a.prototype.clone=function(){return new c({color:k.isSome(this.color)?
this.color.clone():null,size:this.size,stipplePattern:this.stipplePattern?this.stipplePattern.slice():null,stippleOffColor:this.stippleOffColor?this.stippleOffColor.clone():null})};var c;d.__decorate([e.property(f.colorAndTransparencyProperty)],a.prototype,"color",void 0);d.__decorate([e.property(f.screenSizeProperty)],a.prototype,"size",void 0);d.__decorate([e.property(f.stipplePatternProperty)],a.prototype,"stipplePattern",void 0);d.__decorate([e.property({type:g})],a.prototype,"stippleOffColor",
void 0);return a=c=d.__decorate([e.subclass("esri.symbols.support.Symbol3DOutline")],a)}(h.JSONSupport);b.Symbol3DOutline=c;b.default=c});
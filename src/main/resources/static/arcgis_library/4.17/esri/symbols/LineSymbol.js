// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/screenUtils ../core/accessorSupport/decorators ./Symbol".split(" "),function(g,h,b,e,c,f){return function(d){function a(a){a=d.call(this,a)||this;a.type="simple-line";a.width=.75;return a}b.__extends(a,d);a.prototype.hash=function(){return this.type+"."+this.width};b.__decorate([c.enumeration({esriSLS:"simple-line"},{readOnly:!0})],a.prototype,"type",void 0);b.__decorate([c.property({type:Number,cast:e.toPt,json:{write:!0}})],a.prototype,"width",void 0);return a=
b.__decorate([c.subclass("esri.symbols.LineSymbol")],a)}(f)});
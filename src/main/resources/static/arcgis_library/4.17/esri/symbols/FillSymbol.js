// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/accessorSupport/decorators ./SimpleLineSymbol ./Symbol".split(" "),function(g,h,b,c,e,f){return function(d){function a(a){a=d.call(this,a)||this;a.outline=null;a.type=null;return a}b.__extends(a,d);a.prototype.hash=function(){return this.type+"."+(this.outline&&this.outline.hash())};b.__decorate([c.property({types:{key:"type",base:null,defaultKeyValue:"simple-line",typeMap:{"simple-line":e}},json:{default:null,write:!0}})],a.prototype,"outline",void 0);b.__decorate([c.property({type:["simple-fill",
"picture-fill"],readOnly:!0})],a.prototype,"type",void 0);return a=b.__decorate([c.subclass("esri.symbols.FillSymbol")],a)}(f)});
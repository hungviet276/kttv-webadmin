// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Collection ../core/lang ../core/accessorSupport/decorators ./LineSymbol3DLayer ./PathSymbol3DLayer ./Symbol3D".split(" "),function(n,p,c,b,e,f,g,h,l){var k=b.ofType({base:null,key:"type",typeMap:{line:g,path:h}}),m=b.ofType({base:null,key:"type",typeMap:{line:g,path:h}});return function(b){function a(a){a=b.call(this,a)||this;a.symbolLayers=new k;a.type="line-3d";return a}c.__extends(a,b);d=a;a.prototype.clone=function(){return new d({styleOrigin:e.clone(this.styleOrigin),
symbolLayers:e.clone(this.symbolLayers),thumbnail:e.clone(this.thumbnail)})};a.fromSimpleLineSymbol=function(a){return new d({symbolLayers:[g.fromSimpleLineSymbol(a)]})};var d;c.__decorate([f.property({type:k,json:{type:m}})],a.prototype,"symbolLayers",void 0);c.__decorate([f.enumeration({LineSymbol3D:"line-3d"},{readOnly:!0})],a.prototype,"type",void 0);return a=d=c.__decorate([f.subclass("esri.symbols.LineSymbol3D")],a)}(l)});
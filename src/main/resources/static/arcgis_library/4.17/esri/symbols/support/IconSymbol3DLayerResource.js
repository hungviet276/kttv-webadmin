// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/jsonMap ../../core/JSONSupport ../../core/urlUtils ../../core/accessorSupport/decorators ../../support/persistableUrlUtils".split(" "),function(c,b,d,h,k,f,e,g){Object.defineProperty(b,"__esModule",{value:!0});b.defaultPrimitive=b.IconSymbol3DLayerResource=void 0;var l=h.strict()({circle:"circle",square:"square",cross:"cross",x:"x",kite:"kite",triangle:"triangle"});c=function(b){function a(a){return b.call(this,a)||this}d.__extends(a,b);c=a;a.prototype.readHref=
function(a,b,c){return a?g.fromJSON(a,c):b.dataURI};a.prototype.writeHref=function(a,b,c,d){a&&(f.isDataProtocol(a)?b.dataURI=a:(b.href=g.toJSON(a,d),f.isAbsolute(b.href)&&(b.href=f.normalize(b.href))))};a.prototype.clone=function(){return new c({href:this.href,primitive:this.primitive})};var c;d.__decorate([e.property({type:String,json:{write:!0,read:{source:["href","dataURI"]}}})],a.prototype,"href",void 0);d.__decorate([e.reader("href")],a.prototype,"readHref",null);d.__decorate([e.writer("href",
{href:{type:String},dataURI:{type:String}})],a.prototype,"writeHref",null);d.__decorate([e.enumeration(l)],a.prototype,"primitive",void 0);return a=c=d.__decorate([e.subclass("esri.symbols.support.IconSymbol3DLayerResource")],a)}(k.JSONSupport);b.IconSymbol3DLayerResource=c;b.defaultPrimitive="circle";b.default=c});
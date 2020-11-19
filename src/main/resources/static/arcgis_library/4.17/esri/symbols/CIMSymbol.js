// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/lang ../core/promiseUtils ../core/string ../core/accessorSupport/decorators ../layers/support/fieldUtils ./Symbol".split(" "),function(n,p,b,g,h,k,c,l,m){return function(e){function a(a){a=e.call(this,a)||this;a.data=null;a.type="cim";return a}b.__extends(a,e);d=a;a.prototype.readData=function(a,b){return b};a.prototype.writeData=function(a,b){if(a)for(var c in a)b[c]=a[c]};a.prototype.collectRequiredFields=function(a,c){return b.__awaiter(this,void 0,void 0,
function(){var d,f,e;return b.__generator(this,function(b){switch(b.label){case 0:if("CIMSymbolReference"!==this.data.type)return[3,2];d=this.data;f=d.primitiveOverrides;if(!f)return[3,2];e=f.map(function(b){return l.collectArcadeFieldNames(a,c,b.valueExpressionInfo.expression)});return[4,h.all(e)];case 1:b.sent(),b.label=2;case 2:return[2]}})})};a.prototype.clone=function(){return new d({data:g.clone(this.data)})};a.prototype.hash=function(){return k.numericHash(JSON.stringify(this.data)).toString()};
var d;b.__decorate([c.property({json:{write:!1}})],a.prototype,"color",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"data",void 0);b.__decorate([c.reader("data",["symbol"])],a.prototype,"readData",null);b.__decorate([c.writer("data")],a.prototype,"writeData",null);b.__decorate([c.enumeration({CIMSymbolReference:"cim"},{readOnly:!0})],a.prototype,"type",void 0);return a=d=b.__decorate([c.subclass("esri.symbols.CIMSymbol")],a)}(m)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType".split(" "),function(a,b,d,f,g,e,h){Object.defineProperty(b,"__esModule",{value:!0});b.SlideVisibleLayer=void 0;a=function(b){function c(a){a=b.call(this,a)||this;a.id="";a.sublayerIds=null;return a}d.__extends(c,b);a=c;c.prototype.clone=function(){return new a({id:this.id,sublayerIds:g.clone(this.sublayerIds)})};var a;d.__decorate([e.property({type:String,
json:{write:!0}})],c.prototype,"id",void 0);d.__decorate([e.property({type:[h.Integer],json:{read:{source:"subLayerIds"},write:{target:"subLayerIds"}}})],c.prototype,"sublayerIds",void 0);return c=a=d.__decorate([e.subclass("esri.webscene.support.SlideVisibleLayer")],c)}(f.JSONSupport);b.SlideVisibleLayer=a;b.default=a});
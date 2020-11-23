// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(a,b,d,f,e){Object.defineProperty(b,"__esModule",{value:!0});b.LegendOptions=void 0;a=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a.title=null;return a}d.__extends(c,b);a=c;c.prototype.clone=function(){return new a({title:this.title})};var a;d.__decorate([e.property({type:String,json:{write:!0}})],c.prototype,"title",void 0);return c=a=d.__decorate([e.subclass("esri.renderers.support.LegendOptions")],
c)}(f.JSONSupport);b.LegendOptions=a;b.default=a});
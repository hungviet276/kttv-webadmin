// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Color ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(h,k,b,f,g,c){return function(e){function a(a){a=e.call(this,a)||this;a.color=null;a.ratio=null;return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d({color:this.color,ratio:this.ratio})};var d;b.__decorate([c.property({type:f,json:{write:!0}})],a.prototype,"color",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"ratio",void 0);return a=
d=b.__decorate([c.subclass("esri.renderers.support.HeatmapColorStop")],a)}(g.JSONSupport)});
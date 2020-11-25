// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../geometry ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../geometry/support/jsonUtils".split(" "),function(b,l,d,g,h,e,k,f){b=function(b){function c(a){a=b.call(this,a)||this;a.extendHow="default-curve-extension";a.polylines=null;a.trimExtendTo=null;return a}d.__extends(c,b);d.__decorate([e.property({type:String,json:{write:!0}})],c.prototype,"extendHow",void 0);d.__decorate([e.property({type:[g.Polyline],json:{read:{reader:function(a){return a?
a.map(function(a){return f.fromJSON(a)}):null}},write:{writer:function(a,b){b.polylines=a.map(function(a){return a.toJSON()})}}}})],c.prototype,"polylines",void 0);d.__decorate([e.property({json:{read:{reader:function(a){return a?f.fromJSON(a):null}},write:{writer:function(a,b){b.trimExtendTo=a.toJSON()}}}})],c.prototype,"trimExtendTo",void 0);return c=d.__decorate([e.subclass("esri.tasks.support.TrimExtendParameters")],c)}(h.JSONSupport);b.from=k.default(b);return b});
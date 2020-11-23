// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../geometry/support/jsonUtils".split(" "),function(c,k,d,f,e,g,h){c=function(c){function b(a){a=c.call(this,a)||this;a.bevelRatio=null;a.geometries=null;a.offsetDistance=null;a.offsetHow=null;a.offsetUnit=null;return a}d.__extends(b,c);d.__decorate([e.property({type:Number,json:{write:!0}})],b.prototype,"bevelRatio",void 0);d.__decorate([e.property({json:{read:{reader:function(a){return a?
a.map(function(a){return h.fromJSON(a)}):null}},write:{writer:function(a,b){b.geometries=a.map(function(a){return a.toJSON()})}}}})],b.prototype,"geometries",void 0);d.__decorate([e.property({type:Number,json:{write:!0}})],b.prototype,"offsetDistance",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"offsetHow",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],b.prototype,"offsetUnit",void 0);return b=d.__decorate([e.subclass("esri.tasks.support.OffsetParameters")],
b)}(f.JSONSupport);c.from=g.default(c);return c});
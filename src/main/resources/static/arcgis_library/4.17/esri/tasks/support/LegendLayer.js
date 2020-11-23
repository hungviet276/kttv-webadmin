// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(f,g,b,e,c){return function(d){function a(a){a=d.call(this,a)||this;a.layerId=null;a.subLayerIds=null;a.title=null;return a}b.__extends(a,d);b.__decorate([c.property({json:{write:!0}})],a.prototype,"layerId",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"subLayerIds",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"title",void 0);return a=b.__decorate([c.subclass("esri/tasks/support/LegendLayer")],
a)}(e.JSONSupport)});
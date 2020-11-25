// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../geometry ../../../core/JSONSupport ../../../core/accessorSupport/decorators".split(" "),function(f,d,b,g,h,c){Object.defineProperty(d,"__esModule",{value:!0});d.QueryTableDataSource=void 0;f=function(d){function a(a){a=d.call(this,a)||this;a.type="query-table";return a}b.__extends(a,d);e=a;a.prototype.clone=function(){var a,b=this.spatialReference,c=this.geometryType,b={workspaceId:this.workspaceId,query:this.query,oidFields:this.oidFields,spatialReference:null!==
(a=null===b||void 0===b?void 0:b.clone())&&void 0!==a?a:void 0,geometryType:c};return new e(b)};var e;b.__decorate([c.enumeration({queryTable:"query-table"})],a.prototype,"type",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"workspaceId",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"query",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"oidFields",void 0);b.__decorate([c.property({type:g.SpatialReference,
json:{write:!0}})],a.prototype,"spatialReference",void 0);b.__decorate([c.enumeration(g.featureGeometryTypeKebabDictionary)],a.prototype,"geometryType",void 0);return a=e=b.__decorate([c.subclass("esri.layers.support.source.QueryTableDataSource")],a)}(h.JSONSupport);d.QueryTableDataSource=f});
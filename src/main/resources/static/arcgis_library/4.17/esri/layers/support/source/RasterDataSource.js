// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/JSONSupport","../../../core/accessorSupport/decorators"],function(f,b,c,g,d){Object.defineProperty(b,"__esModule",{value:!0});b.RasterDataSource=void 0;f=function(b){function a(a){a=b.call(this,a)||this;a.type="raster";return a}c.__extends(a,b);e=a;a.prototype.clone=function(){return new e({workspaceId:this.workspaceId,dataSourceName:this.dataSourceName})};var e;c.__decorate([d.enumeration({raster:"raster"})],a.prototype,"type",void 0);c.__decorate([d.property({type:String,
json:{write:!0}})],a.prototype,"dataSourceName",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"workspaceId",void 0);return a=e=c.__decorate([d.subclass("esri.layers.support.source.RasterDataSource")],a)}(g.JSONSupport);b.RasterDataSource=f});
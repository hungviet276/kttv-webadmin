// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/lang ../core/accessorSupport/decorators ./PointCloudRenderer".split(" "),function(h,k,b,f,c,g){return function(e){function a(a){a=e.call(this,a)||this;a.type="point-cloud-rgb";a.field=null;return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d(b.__assign(b.__assign({},this.cloneProperties()),{field:f.clone(this.field)}))};var d;b.__decorate([c.enumeration({pointCloudRGBRenderer:"point-cloud-rgb"})],a.prototype,"type",void 0);b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"field",void 0);return a=d=b.__decorate([c.subclass("esri.renderers.PointCloudRGBRenderer")],a)}(g)});
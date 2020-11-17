// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/lang ../core/accessorSupport/decorators ./PointCloudRenderer ./support/LegendOptions ./support/pointCloud/ColorUniqueValueInfo".split(" "),function(l,m,b,e,c,d,h,k){return function(g){function a(a){a=g.call(this,a)||this;a.type="point-cloud-unique-value";a.field=null;a.fieldTransformType=null;a.colorUniqueValueInfos=null;a.legendOptions=null;return a}b.__extends(a,g);f=a;a.prototype.clone=function(){return new f(b.__assign(b.__assign({},this.cloneProperties()),
{field:e.clone(this.field),fieldTransformType:e.clone(this.fieldTransformType),colorUniqueValueInfos:e.clone(this.colorUniqueValueInfos),legendOptions:e.clone(this.legendOptions)}))};var f;b.__decorate([c.enumeration({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],a.prototype,"type",void 0);b.__decorate([c.property({json:{write:!0},type:String})],a.prototype,"field",void 0);b.__decorate([c.property({type:d.fieldTransformTypeKebabDict.apiValues,json:{type:d.fieldTransformTypeKebabDict.jsonValues,
read:d.fieldTransformTypeKebabDict.read,write:d.fieldTransformTypeKebabDict.write}})],a.prototype,"fieldTransformType",void 0);b.__decorate([c.property({type:[k.default],json:{write:!0}})],a.prototype,"colorUniqueValueInfos",void 0);b.__decorate([c.property({type:h.default,json:{write:!0}})],a.prototype,"legendOptions",void 0);return a=f=b.__decorate([c.subclass("esri.renderers.PointCloudUniqueValueRenderer")],a)}(d)});
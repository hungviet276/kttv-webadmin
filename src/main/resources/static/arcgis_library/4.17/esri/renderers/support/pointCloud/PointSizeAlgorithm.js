// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/jsonMap ../../../core/JSONSupport ../../../core/accessorSupport/decorators".split(" "),function(b,a,d,f,g,e){Object.defineProperty(a,"__esModule",{value:!0});a.PointSizeAlgorithm=a.typeKebabDictionary=void 0;a.typeKebabDictionary=new f.default({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});b=function(b){function c(){return null!==b&&b.apply(this,arguments)||this}d.__extends(c,b);d.__decorate([e.property({type:a.typeKebabDictionary.apiValues,
readOnly:!0,nonNullable:!0,json:{type:a.typeKebabDictionary.jsonValues,read:!1,write:a.typeKebabDictionary.write}})],c.prototype,"type",void 0);return c=d.__decorate([e.subclass("esri.renderers.support.pointCloud.PointSizeAlgorithm")],c)}(g.JSONSupport);a.PointSizeAlgorithm=b;a.default=b});
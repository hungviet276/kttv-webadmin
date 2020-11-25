// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/accessorSupport/decorators","./PointSizeAlgorithm"],function(a,b,d,e,f){Object.defineProperty(b,"__esModule",{value:!0});b.PointSizeSplatAlgorithm=void 0;a=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a.type="splat";a.scaleFactor=1;return a}d.__extends(c,b);a=c;c.prototype.clone=function(){return new a({scaleFactor:this.scaleFactor})};var a;d.__decorate([e.enumeration({pointCloudSplatAlgorithm:"splat"})],c.prototype,"type",
void 0);d.__decorate([e.property({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c.prototype,"scaleFactor",void 0);return c=a=d.__decorate([e.subclass("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c)}(f.default);b.PointSizeSplatAlgorithm=a;b.default=a});
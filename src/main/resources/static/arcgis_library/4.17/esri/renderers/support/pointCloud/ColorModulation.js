// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/JSONSupport","../../../core/accessorSupport/decorators"],function(c,b,d,f,e){Object.defineProperty(b,"__esModule",{value:!0});b.ColorModulation=void 0;c=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.field=null;a.minValue=0;a.maxValue=255;return a}d.__extends(a,b);c=a;a.prototype.clone=function(){return new c({field:this.field,minValue:this.minValue,maxValue:this.maxValue})};var c;d.__decorate([e.property({type:String,json:{write:!0}})],
a.prototype,"field",void 0);d.__decorate([e.property({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"minValue",void 0);d.__decorate([e.property({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"maxValue",void 0);return a=c=d.__decorate([e.subclass("esri.renderers.support.pointCloud.ColorModulation")],a)}(f.JSONSupport);b.ColorModulation=c;b.default=c});
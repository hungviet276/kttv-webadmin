// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(f,g,b,e,c){return function(d){function a(){return null!==d&&d.apply(this,arguments)||this}b.__extends(a,d);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"timeDataCumulative",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"timeOffset",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"timeOffsetUnits",void 0);
b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"useTime",void 0);return a=b.__decorate([c.subclass("esri.layers.support.LayerTimeOptions")],a)}(e.JSONSupport)});
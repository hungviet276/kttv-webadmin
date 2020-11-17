// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/accessorSupport/decorators ./VisualVariable ./support/OpacityStop".split(" "),function(k,l,c,d,g,h){return function(e){function b(a){a=e.call(this,a)||this;a.type="opacity";a.normalizationField=null;return a}c.__extends(b,e);f=b;Object.defineProperty(b.prototype,"cache",{get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"stops",{set:function(a){a&&
Array.isArray(a)&&(a=a.filter(function(a){return!!a}),a.sort(function(a,b){return a.value-b.value}));this._set("stops",a)},enumerable:!1,configurable:!0});b.prototype.clone=function(){return new f({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(function(a){return a.clone()}),legendOptions:this.legendOptions&&this.legendOptions.clone()})};b.prototype.getAttributeHash=function(){return e.prototype.getAttributeHash.call(this)+
"-"+this.normalizationField};b.prototype._interpolateData=function(){return this.stops&&this.stops.map(function(a){return a.value||0})};var f;c.__decorate([d.property({readOnly:!0,dependsOn:["valueExpression","stops"]})],b.prototype,"cache",null);c.__decorate([d.property({type:["opacity"],json:{type:["transparencyInfo"]}})],b.prototype,"type",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"normalizationField",void 0);c.__decorate([d.property({type:[h],json:{write:!0}})],
b.prototype,"stops",null);return b=f=c.__decorate([d.subclass("esri.renderers.visualVariables.OpacityVariable")],b)}(g)});
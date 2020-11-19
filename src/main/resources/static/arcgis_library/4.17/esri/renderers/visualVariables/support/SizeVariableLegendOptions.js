// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/accessorSupport/decorators","./VisualVariableLegendOptions"],function(g,h,b,e,f){return function(c){function a(){var a=null!==c&&c.apply(this,arguments)||this;a.customValues=null;return a}b.__extends(a,c);d=a;a.prototype.clone=function(){return new d({title:this.title,showLegend:this.showLegend,customValues:this.customValues&&this.customValues.slice(0)})};var d;b.__decorate([e.property({type:[Number],json:{write:!0}})],a.prototype,"customValues",
void 0);return a=d=b.__decorate([e.subclass("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],a)}(f)});
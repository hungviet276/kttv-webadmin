// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./unitUtils"],function(e,f,b){return function(){function a(a,d){this.measure=b.measureForUnit(d);this.value=a;this.unit=d}Object.defineProperty(a.prototype,"isBaseUnit",{get:function(){return b.isBaseUnit(this.unit)},enumerable:!1,configurable:!0});a.prototype.toUnit=function(c){return new a(b.convertUnit(this.value,this.unit,c),c)};a.prototype.toBaseUnit=function(){return this.toUnit(b.baseUnitForUnit(this.unit))};return a}()});
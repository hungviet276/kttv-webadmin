// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,c){Object.defineProperty(c,"__esModule",{value:!0});c.Timeline=void 0;d=function(){function b(){this._names=new Map}b.prototype.begin=function(a){this._names.has(a)||(this._names.set(a,!1),-1!==a.indexOf("Brush")&&this.record("Esri.FirstDraw"),performance.mark("Esri."+a+".Start"))};b.prototype.end=function(a){this._names.has(a)&&!this._names.get(a)&&(this._names.set(a,!0),performance.mark("Esri."+a+".End"))};b.prototype.record=function(a){this._names.has(a)||
(this._names.set(a,!0),performance.mark("Esri."+a))};return b}();c.Timeline=d});
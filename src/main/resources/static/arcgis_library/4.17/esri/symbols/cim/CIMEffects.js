// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/lang"],function(b,a,c){Object.defineProperty(a,"__esModule",{value:!0});a.clone=a.SimpleGeometryCursor=void 0;b=function(){function a(a){this._geometry=a}a.prototype.next=function(){var a=this._geometry;this._geometry=null;return a};return a}();a.SimpleGeometryCursor=b;a.clone=function(a){return c.clone(a)}});
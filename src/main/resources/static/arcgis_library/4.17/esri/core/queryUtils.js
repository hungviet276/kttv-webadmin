// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(h,c){Object.defineProperty(c,"__esModule",{value:!0});c.createQueryParamsHelper=void 0;var g=function(){function e(d){void 0===d&&(d={});this._options=d}e.prototype.toQueryParams=function(d){var e=this;if(!d)return null;var f=d.toJSON(),c={};Object.keys(f).forEach(function(a){var b=e._options[a];if(b){var d="boolean"!==typeof b&&b.name?b.name:a;a="boolean"!==typeof b&&b.getter?b.getter(f):f[a];null!=a&&(Array.isArray(a)?(b=a[0],b="number"===typeof b||"string"===
typeof b):b=!1,c[d]=b?a.join(","):"object"===typeof a?JSON.stringify(a):a)}else c[a]=f[a]},this);return c};return e}();c.createQueryParamsHelper=function(c){return new g(c)}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../core/urlUtils"],function(l,a,e,k){function h(c,a,e){var f={},d;for(d in c)if("declaredClass"!==d){var b=c[d];if(null!=b&&"function"!==typeof b)if(Array.isArray(b)){f[d]=[];for(var g=0;g<b.length;g++)f[d][g]=h(b[g])}else"object"===typeof b?(b.toJSON&&(b=b.toJSON(e&&e[d])),f[d]=a?b:JSON.stringify(b)):f[d]=b}return f}Object.defineProperty(a,"__esModule",{value:!0});a.encode=a.parseUrl=a.asValidOptions=void 0;a.asValidOptions=function(c,a){c={query:c};a&&(c=e.__assign(e.__assign({},
a),c));return c};a.parseUrl=function(a){return"string"===typeof a?k.urlToObject(a):a};a.encode=h});
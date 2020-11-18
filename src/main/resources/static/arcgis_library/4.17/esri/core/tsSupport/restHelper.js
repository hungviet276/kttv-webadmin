// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["../Logger","../deprecate"],function(f,g){g.deprecated(f.getLogger("esri.core.tsSupport.restHelper"),"helpers from esri.core.tsSupport are no longer required",{replacement:"use helpers from TSLib by enabling the TypeScript compiler importHelpers option",version:"4.16",see:"https://github.com/Microsoft/tslib#readme"});return function(b,e){var d={},a;for(a in b)Object.prototype.hasOwnProperty.call(b,a)&&0>e.indexOf(a)&&(d[a]=b[a]);if(null!=b&&"function"===typeof Object.getOwnPropertySymbols){var c=
0;for(a=Object.getOwnPropertySymbols(b);c<a.length;c++)0>e.indexOf(a[c])&&(d[a[c]]=b[a[c]])}return d}});
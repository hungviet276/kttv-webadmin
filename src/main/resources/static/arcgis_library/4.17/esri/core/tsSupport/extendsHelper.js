// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["../Logger","../deprecate"],function(d,e){e.deprecated(d.getLogger("esri.core.tsSupport.extendsHelper"),"helpers from esri.core.tsSupport are no longer required",{replacement:"use helpers from TSLib by enabling the TypeScript compiler importHelpers option",version:"4.16",see:"https://github.com/Microsoft/tslib#readme"});return function(){var d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])};
return function(b,a){function c(){this.constructor=b}d(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}}()});
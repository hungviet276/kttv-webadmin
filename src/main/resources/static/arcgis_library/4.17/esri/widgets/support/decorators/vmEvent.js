// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./propUtils"],function(e,b,c){Object.defineProperty(b,"__esModule",{value:!0});b.vmEvent=void 0;b.vmEvent=function(b){return function(a){a.hasOwnProperty("_delegatedEventNames")||(a._delegatedEventNames=a._delegatedEventNames?a._delegatedEventNames.slice():[]);a=a._delegatedEventNames;var d=Array.isArray(b)?b:c.splitProps(b);a.push.apply(a,d)}}});
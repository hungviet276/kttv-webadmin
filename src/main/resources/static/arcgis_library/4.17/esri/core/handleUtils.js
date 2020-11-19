// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./maybe"],function(d,a,c){function b(a){return{remove:function(){a&&(a(),a=void 0)}}}Object.defineProperty(a,"__esModule",{value:!0});a.timeoutHandle=a.destroyHandle=a.refHandle=a.makeHandle=a.handlesGroup=void 0;a.handlesGroup=function(a){return b(function(){return a.forEach(function(a){return c.isSome(a)&&a.remove()})})};a.makeHandle=b;a.refHandle=function(a){return b(function(){var b=a();c.isSome(b)&&b.remove()})};a.destroyHandle=function(a){return b(function(){return a.destroy()})};
a.timeoutHandle=function(a,b){var c=setTimeout(a,b);return{remove:function(){return clearTimeout(c)}}}});
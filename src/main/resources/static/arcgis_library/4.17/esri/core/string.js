// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./object","@dojo/framework/shim/string"],function(g,a,e,b){function d(a){return null==a?"":a}Object.defineProperty(a,"__esModule",{value:!0});a.numericHash=a.escapeRegExpString=a.replace=void 0;var f=/\{([^\}]+)\}/g;Object.defineProperty(a,"endsWith",{enumerable:!0,get:function(){return b.endsWith}});Object.defineProperty(a,"startsWith",{enumerable:!0,get:function(){return b.startsWith}});Object.defineProperty(a,"padEnd",{enumerable:!0,get:function(){return b.padEnd}});
Object.defineProperty(a,"padStart",{enumerable:!0,get:function(){return b.padStart}});Object.defineProperty(a,"includes",{enumerable:!0,get:function(){return b.includes}});a.replace=function(a,c){return a.replace(f,"object"===typeof c?function(a,b){return d(e.getDeepValue(b,c))}:function(a,b){return d(c(b))})};a.escapeRegExpString=function(a,c){return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,function(a){return c&&-1!==c.indexOf(a)?a:"\\"+a})};a.numericHash=function(a){for(var c=0,b=0;b<a.length;b++)c=
(c<<5)-c+a.charCodeAt(b),c|=0;return c}});
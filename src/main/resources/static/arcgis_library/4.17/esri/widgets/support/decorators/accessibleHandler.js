// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib"],function(g,b,e){function f(d){return function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];c=a.type;if(a instanceof KeyboardEvent||"keyup"===c||"keydown"===c||"keypress"===c){if("Enter"===a.key||" "===a.key)a.preventDefault(),a.stopPropagation(),a.target.click()}else d.call.apply(d,e.__spreadArrays([this,a],b))}}Object.defineProperty(b,"__esModule",{value:!0});b.accessibleHandler=void 0;b.accessibleHandler=function(){return function(b,a){if(!b[a])throw new TypeError("Cannot auto bind undefined function '"+
a+"'");return{value:f(b[a])}}}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./definition"],function(e,b,d){Object.defineProperty(b,"__esModule",{value:!0});b.createExpression=void 0;b.createExpression=function(a){if(null===a||"string"===typeof a||"boolean"===typeof a||"number"===typeof a)a=["literal",a];if(!Array.isArray(a)||0===a.length)throw Error("Expression must be a non empty array");var c=a[0];if("string"!==typeof c)throw Error("First element of expression must be a string");var b=d.ops[c];if(void 0===b)throw Error('Invalid expression operator "'+
c+'"');if(!b)throw Error('Unimplemented expression operator "'+c+'"');return b.parse(a)}});
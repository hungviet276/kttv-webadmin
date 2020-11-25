// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./expression"],function(f,d,e){Object.defineProperty(d,"__esModule",{value:!0});d.HasID=d.Slice=d.Length=d.IndexOf=d.In=d.Has=d.Get=d.At=void 0;f=function(){function b(a,c){this.index=a;this.array=c}b.parse=function(a){if(3!==a.length)throw Error('"at" expects 2 arguments.');var c=e.createExpression(a[1]);a=e.createExpression(a[2]);return new b(c,a)};b.prototype.evaluate=function(a,c){var b=this.index.evaluate(a,c);a=this.array.evaluate(a,c);if(0>b||b>=a.length)throw Error('"at" index out of bounds.');
if(b!==Math.floor(b))throw Error('"at" index must be an integer.');return a[b]};return b}();d.At=f;f=function(){function b(a,c){this.key=a;this.obj=c}b.parse=function(a){var c;switch(a.length){case 2:return c=e.createExpression(a[1]),new b(c);case 3:return c=e.createExpression(a[1]),a=e.createExpression(a[2]),new b(c,a);default:throw Error('"get" expects 1 or 2 arguments');}};b.prototype.evaluate=function(a,c){var b=this.key.evaluate(a,c);return this.obj?this.obj.evaluate(a,c)[b]:a.values[b]};return b}();
d.Get=f;f=function(){function b(a,b){this.key=a;this.obj=b}b.parse=function(a){var c;switch(a.length){case 2:return c=e.createExpression(a[1]),new b(c);case 3:return c=e.createExpression(a[1]),a=e.createExpression(a[2]),new b(c,a);default:throw Error('"has" expects 1 or 2 arguments');}};b.prototype.evaluate=function(a,b){var c=this.key.evaluate(a,b);return this.obj?(a=this.obj.evaluate(a,b),c in a):void 0!==a.values[c]};return b}();d.Has=f;f=function(){function b(a,b){this.key=a;this.vals=b}b.parse=
function(a){if(3!==a.length)throw Error('"in" expects 2 arguments');return new b(e.createExpression(a[1]),e.createExpression(a[2]))};b.prototype.evaluate=function(a,b){var c=this.key.evaluate(a,b);return-1!==this.vals.evaluate(a,b).indexOf(c)};return b}();d.In=f;f=function(){function b(a,b,d){this.item=a;this.array=b;this.from=d}b.parse=function(a){if(3>a.length||4<a.length)throw Error('"index-of" expects 3 or 4 arguments.');var c=e.createExpression(a[1]),d=e.createExpression(a[2]);return 4===a.length?
(a=e.createExpression(a[3]),new b(c,d,a)):new b(c,d)};b.prototype.evaluate=function(a,b){var c=this.item.evaluate(a,b),d=this.array.evaluate(a,b);if(this.from){a=this.from.evaluate(a,b);if(a!==Math.floor(a))throw Error('"index-of" index must be an integer.');return d.indexOf(c,a)}return d.indexOf(c)};return b}();d.IndexOf=f;f=function(){function b(a){this.arg=a}b.parse=function(a){if(2!==a.length)throw Error('"length" expects 2 arguments.');a=e.createExpression(a[1]);return new b(a)};b.prototype.evaluate=
function(a,b){a=this.arg.evaluate(a,b);if("string"===typeof a||Array.isArray(a))return a.length;throw Error('"length" expects string or array.');};return b}();d.Length=f;f=function(){function b(a,b,d){this.array=a;this.from=b;this.to=d}b.parse=function(a){if(3>a.length||4<a.length)throw Error('"slice" expects 2 or 3 arguments.');var c=e.createExpression(a[1]),d=e.createExpression(a[2]);return 4===a.length?(a=e.createExpression(a[3]),new b(c,d,a)):new b(c,d)};b.prototype.evaluate=function(a,b){var c=
this.array.evaluate(a,b),d=this.from.evaluate(a,b);if(0>d||d>=c.length)throw Error('"slice" index out of bounds.');if(d!==Math.floor(d))throw Error('"slice" index must be an integer.');if(this.to){a=this.to.evaluate(a,b);if(0>a||a>=c.length)throw Error('"slice" index out of bounds.');if(a!==Math.floor(a))throw Error('"slice" index must be an integer.');return c.slice(d,a)}return c.slice(d)};return b}();d.Slice=f;f=function(){function b(){}b.parse=function(a){if(1!==a.length)throw Error('"has-id" expects no arguments');
return new b};b.prototype.evaluate=function(a,b){return void 0!==a.id};return b}();d.HasID=f});
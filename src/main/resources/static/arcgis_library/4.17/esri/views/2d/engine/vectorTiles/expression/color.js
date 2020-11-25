// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../Color","./expression"],function(d,c,g,e){Object.defineProperty(c,"__esModule",{value:!0});c.ToRgba=c.Rgba=c.Rgb=void 0;var f=function(){function b(a){this.args=a}b.parse=function(a){if(4!==a.length)throw Error('"rgb" expects 3 arguments.');a=a.slice(1).map(function(a){return e.createExpression(a)});return new b(a)};b.prototype.evaluate=function(a,b){var h=this.args[1].evaluate(a,b),c=this.args[2].evaluate(a,b);a=this.args[3].evaluate(a,b);return"rgb("+Math.round(h)+
","+Math.round(c)+","+Math.round(a)+")"};return b}();c.Rgb=f;d=function(){function b(a){this.args=a}b.parse=function(a){if(5!==a.length)throw Error('"rgba" expects 4 arguments.');a=a.slice(1).map(function(a){return e.createExpression(a)});return new f(a)};b.prototype.evaluate=function(a,b){var c=this.args[1].evaluate(a,b),d=this.args[2].evaluate(a,b),e=this.args[3].evaluate(a,b);a=this.args[4].evaluate(a,b);return"rgb("+Math.round(c)+","+Math.round(d)+","+Math.round(e)+","+a+")"};return b}();c.Rgba=
d;d=function(){function b(a){this.color=a}b.parse=function(a){if(2!==a.length)throw Error('"to-rgba" expects 1 argument.');a=e.createExpression(a[1]);return new b(a)};b.prototype.evaluate=function(a,b){return(new g(this.color.evaluate(a,b))).toRgba()};return b}();c.ToRgba=d});
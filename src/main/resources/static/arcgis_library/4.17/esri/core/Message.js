// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./object"],function(g,h,e){function f(c,d){return c.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,function(a,b){if(""===b)return"$";a=e.getDeepValue(b,d);a=null==a?"":a;if("undefined"===typeof a)throw Error('could not find key "'+b+'" in template');return a.toString()})}return function(){function c(d,a,b){this.name=d;this.details=b;this.message=void 0;this instanceof c&&(this.message=a&&f(a,b)||"")}c.prototype.toString=function(){return"["+this.name+"]: "+this.message};
return c}()});
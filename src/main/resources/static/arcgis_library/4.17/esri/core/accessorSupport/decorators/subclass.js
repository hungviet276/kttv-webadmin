// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../has ../extensions ../metadata".split(" "),function(r,f,p,t,m,g){function q(e,a){return null==a.get?void 0===a.value?function(){return this.__accessor__.store.get(e)}:function(){var c=this.__accessor__.store;return c.has(e)?c.get(e):a.value}:function(){return this.__accessor__.getterComputed(e,a)}}function n(e){var a=e.prototype,c=a.declaredClass,h=g.getOwnClassMetadata(a).properties;m.processClassMetadatas(h,c);for(var b={},a=function(a){var c=h[a];b[a]={enumerable:!0,
configurable:!0,get:q(a,c),set:function(b){var d=this.__accessor__;if(void 0===d)Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b});else if(!Object.isFrozen(this)){if(d.initialized&&c.readOnly)throw new TypeError("[accessor] cannot assign to read-only property '"+a+"' of "+this.declaredClass);if(2===d.lifecycle&&c.constructOnly)throw new TypeError("[accessor] cannot assign to construct-only property '"+a+"' of "+this.declaredClass);d.set(a,b)}}}},c=0,f=Object.getOwnPropertyNames(h);c<
f.length;c++)a(f[c]);Object.defineProperties(e.prototype,b)}Object.defineProperty(f,"__esModule",{value:!0});f.processClass=f.subclass=void 0;var k=new Set,l=new Set;f.subclass=function(e){return function(a){a.prototype.declaredClass=e;m.processPrototypeMetadatas(g.getOwnClassMetadata(a.prototype).properties,e);n(a);for(var c=[],f=[],b=a.prototype;b;)b.hasOwnProperty("initialize")&&!k.has(b.initialize)&&(k.add(b.initialize),c.push(b.initialize)),b.hasOwnProperty("destroy")&&!l.has(b.destroy)&&(l.add(b.destroy),
f.push(b.destroy)),b=Object.getPrototypeOf(b);k.clear();l.clear();b=function(a){function b(){for(var e=[],d=0;d<arguments.length;d++)e[d]=arguments[d];d=a.apply(this,e)||this;if(d.constructor===b&&"function"===typeof d.postscript){c.length&&Object.defineProperty(d,"initialize",{enumerable:!1,configurable:!0,value:function(){for(var a=c.length-1;0<=a;a--)c[a].call(this)}});if(f.length){var g=!1;Object.defineProperty(d,"destroy",{enumerable:!1,configurable:!0,value:function(){if(!g){g=!0;for(var a=
0;a<f.length;a++)f[a].call(this)}}})}d.postscript.apply(d,e)}return d}p.__extends(b,a);return b}(a);b.__accessorMetadata__=g.getOwnClassMetadata(a.prototype);b.prototype.declaredClass=e;return b}};f.processClass=n});
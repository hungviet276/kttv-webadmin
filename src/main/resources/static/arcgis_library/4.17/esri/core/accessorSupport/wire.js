// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../maybe","./utils"],function(r,g,k,f){function l(b,a,c){a=f.splitPath(a);if(Array.isArray(a)){for(var e=[],d=0;d<a.length;d++)e.push((new h(a[d],c)).install(b));return new m(e)}b=(new h(a,c)).install(b);return new n(b)}Object.defineProperty(g,"__esModule",{value:!0});g.wire=g.create=void 0;var h=function(){function b(a,b){this.path=a;this.callback=b;this.conditional=this.chain=null;if(-1<a.indexOf(".")){if(a=f.parseConditionalPath(a))this.path=a.fullPath,this.conditional=
a.conditional;this.chain=f.pathToArray(this.path)}else"?"===a[a.length-1]&&(this.path=a.slice(0,a.length-1),this.conditional=[!0],this.chain=[this.path]);this.callback=b;return this}b.prototype.install=function(a){a=this.chain?new p(this,a):new q(this,a);return a};b.prototype.notify=function(a){this.callback(a,this.path)};return b}(),q=function(){function b(a,b){var c;this.binding=a;this.target=b;null===(c=f.getProperties(b))||void 0===c?void 0:c.addCursor(this.binding.path,this)}b.prototype.destroy=
function(){var a;this.target&&(null===(a=f.getProperties(this.target))||void 0===a?void 0:a.removeCursor(this.binding.path,this),this.target=this.binding=null)};b.prototype.propertyDestroyed=function(a,b){var c;null===(c=f.getProperties(this.target))||void 0===c?void 0:c.removeCursor(b,this)};b.prototype.propertyInvalidated=function(){this.binding&&this.binding.notify(this.target)};b.prototype.propertyCommitted=function(){this.binding&&this.binding.notify(this.target)};return b}(),p=function(){function b(a,
b){this.binding=a;this.target=b;this.stack=[];this.properties=k.assumeNonNull(f.getProperties(b));a=a.chain[0];this.stack.push({properties:this.properties,propertyName:a});this.properties.addCursor(a,this);this.moveForward();return this}b.prototype.destroy=function(){for(;;){var a=this.stack.pop();if(null==a)break;a.properties.removeCursor(a.propertyName,this)}this.target=this.binding=null};b.prototype.propertyDestroyed=function(a,b){this.moveBackward(a,b)};b.prototype.propertyInvalidated=function(){this.binding&&
this.binding.notify(this.target)};b.prototype.propertyCommitted=function(a,b){this.binding&&(this.moveBackward(a,b),this.moveForward(),this.binding.notify(this.target))};b.prototype.moveBackward=function(a,b){for(var c=this.stack,d=c[c.length-1];d.properties!==a&&d.propertyName!==b;)d.properties.removeCursor(d.propertyName,this),c.pop(),d=c[c.length-1]};b.prototype.moveForward=function(){var a=this.stack,b=a[a.length-1];if(1!==a.length||!this.binding.conditional||!this.binding.conditional[a.length-
1]||b.properties.metadatas[b.propertyName])if(b=b.properties.internalGet(b.propertyName),(b=f.getProperties(b))&&this.binding.chain&&a.length<this.binding.chain.length){var e=this.binding.chain[a.length];this.binding.conditional&&this.binding.conditional[a.length]&&!b.metadatas[e]||(this.stack.push({properties:b,propertyName:e}),b.addCursor(e,this),this.moveForward())}};return b}(),m=function(){function b(a){this.cursors=a}b.prototype.remove=function(){for(var a=this.cursors;0<a.length;)a.pop().destroy();
this.cursors=null};return b}(),n=function(){function b(a){this.cursor=a}b.prototype.remove=function(){this.cursor=k.destroyMaybe(this.cursor)};return b}();g.create=function(b,a){b=f.splitPath(b);if(Array.isArray(b)){for(var c=[],e=0;e<b.length;e++)c.push(new h(b[e],a));return function(a){for(var b=[],d=0;d<c.length;d++)b[d]=c[d].install(a);return new m(b)}}var d=new h(b,a);return function(a){return new n(d.install(a))}};g.wire=l;g.default=l});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../ArrayPool ../lang ../ReentrantObjectPool ../scheduling ./get ./utils ./wire".split(" "),function(E,b,z,q,A,B,h,m,r){function t(a){l.has(a)?f.splice(f.indexOf(a),1):l.add(a);f.push(a);n||(n=B.schedule(u))}function v(a){if(!a.removed){var g=a.callback,c=a.path,d=a.oldValue,b=a.target,e=h.valueOf(b,a.propertyPath,!0);q.equals(d,e)||(a.oldValue=e,g.call(b,e,d,c,b))}}function u(){for(var a=10;n&&a--;){n=null;var g=f;f=k.acquire();l.clear();for(var c=k.acquire(),d=0,b=g;d<b.length;d++){var e=
b[d],h=e.uid;v(e);h===e.uid&&e.removed&&c.push(e)}for(d=0;d<f.length;d++)e=f[d],e.removed&&(c.push(e),l.delete(e),f.splice(d,1),--d);for(d=0;d<c.length;d++)w.pool.release(c[d]);k.release(g);k.release(c);p.forEach(function(a){return a()})}}function C(a,g,c){var d=m.parse(a,g,c,function(a,c,g){var b=h.valueOf(a,c,!0),e,f,x=r.wire(a,c,function(a,c){a.__accessor__.destroyed||e&&e.uid!==f?d.remove():(e||(e=w.pool.acquire(a,c,b,g),f=e.uid,b=null),t(e))});return{remove:m.once(function(){x.remove();e&&(e.uid!==
f||e.removed||(e.removed=!0,t(e)),e=null);d=x=b=null})}});return d}function D(a,b,c){var d=m.parse(a,b,c,function(a,c,b){var e=h.valueOf(a,c,!0),g=!1;return r.wire(a,c,function(a,c){if(!a||a.__accessor__.destroyed)d.remove();else if(!g&&c){g=!0;var f=h.valueOf(a,c,!0);q.equals(e,f)||b.call(a,f,e,c,a);e=h.valueOf(a,c,!0);g=!1}})});return d}function y(a,b,c,d){void 0===d&&(d=!1);return!a.__accessor__||a.__accessor__.destroyed?{remove:function(){}}:d?D(a,b,c):C(a,b,c)}Object.defineProperty(b,"__esModule",
{value:!0});b.isValueInUse=b.watch=b.afterDispatch=b.dispatch=b.removeTarget=b.dispatchTarget=void 0;var w=function(){function a(){this.uid=0;this.callback=this.oldValue=this.path=this.target=null;this.removed=!1;this.propertyPath=null}a.prototype.acquire=function(b,c,d,f){this.target=b;this.path=c;this.oldValue=d;this.callback=f;this.propertyPath=m.pathToStringOrArray(c);this.uid=++a.uid;this.removed=!1};a.prototype.release=function(){this.target=this.path=this.propertyPath=this.callback=this.oldValue=
null;this.uid=++a.uid;this.removed=!0};a.pool=new A.ReentrantObjectPool(a);a.uid=0;return a}(),k=new z,l=new Set,f=k.acquire(),n;b.dispatchTarget=function(a){for(var b=k.copy(f),c=0;c<b.length;c++){var d=b[c];d.target===a&&(v(d),l.delete(d),f.splice(f.indexOf(d),1))}};b.removeTarget=function(a){for(var b=0;b<f.length;b++){var c=f[b];c.target===a&&(c.removed=!0)}};b.dispatch=u;var p=new Set;b.afterDispatch=function(a){p.add(a);return{remove:function(){p.delete(a)}}};b.watch=y;b.isValueInUse=function(a){return f.some(function(b){return b.oldValue===
a})};b.default=y});
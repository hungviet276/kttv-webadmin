//>>built
define(["dojo","dijit","dojox"],function(m,v,t){m.provide("dojox.lang.aspect");(function(){var h=t.lang.aspect,p=Array.prototype,n=[],e,q=function(){this.next_before=this.prev_before=this.next_around=this.prev_around=this.next_afterReturning=this.prev_afterReturning=this.next_afterThrowing=this.prev_afterThrowing=this;this.counter=0};m.extend(q,{add:function(a){var b=m.isFunction(a),d={advice:a,dynamic:b};this._add(d,"before","",b,a);this._add(d,"around","",b,a);this._add(d,"after","Returning",b,
a);this._add(d,"after","Throwing",b,a);++this.counter;return d},_add:function(a,b,d,c,g){var f=b+d;if(c||g[b]||d&&g[f])b="next_"+f,f="prev_"+f,(a[f]=this[f])[b]=a,(a[b]=this)[f]=a},remove:function(a){this._remove(a,"before");this._remove(a,"around");this._remove(a,"afterReturning");this._remove(a,"afterThrowing");--this.counter},_remove:function(a,b){var d="next_"+b;b="prev_"+b;a[d]&&(a[d][b]=a[b],a[b][d]=a[d])},isEmpty:function(){return!this.counter}});var u=function(){return function(){var a=arguments.callee,
b=a.advices,d,c,g,f;e&&n.push(e);e={instance:this,joinPoint:a,depth:n.length,around:b.prev_around,dynAdvices:[],dynIndex:0};try{for(c=b.prev_before;c!=b;c=c.prev_before)c.dynamic?(e.dynAdvices.push(g=new c.advice(e)),(f=g.before)&&f.apply(g,arguments)):(f=c.advice,f.before.apply(f,arguments));try{d=(b.prev_around==b?a.target:h.proceed).apply(this,arguments)}catch(k){e.dynIndex=e.dynAdvices.length;for(c=b.next_afterThrowing;c!=b;c=c.next_afterThrowing)g=c.dynamic?e.dynAdvices[--e.dynIndex]:c.advice,
(f=g.afterThrowing)&&f.call(g,k),(f=g.after)&&f.call(g);throw k;}e.dynIndex=e.dynAdvices.length;for(c=b.next_afterReturning;c!=b;c=c.next_afterReturning)g=c.dynamic?e.dynAdvices[--e.dynIndex]:c.advice,(f=g.afterReturning)&&f.call(g,d),(f=g.after)&&f.call(g);var r=a._listeners;for(c in r)c in p||r[c].apply(this,arguments)}finally{for(c=0;c<e.dynAdvices.length;++c)g=e.dynAdvices[c],g.destroy&&g.destroy();e=n.length?n.pop():null}return d}};h.advise=function(a,b,d){"object"!=typeof a&&(a=a.prototype);
var c=[];b instanceof Array||(b=[b]);for(var g=0;g<b.length;++g){var f=b[g];if(f instanceof RegExp)for(var e in a)m.isFunction(a[e])&&f.test(e)&&c.push(e);else m.isFunction(a[f])&&c.push(f)}m.isArray(d)||(d=[d]);return h.adviseRaw(a,c,d)};h.adviseRaw=function(a,b,d){if(!b.length||!d.length)return null;for(var c={},g=d.length,f=b.length-1;0<=f;--f){var e=b[f],k=a[e],h=Array(g),l=k.advices;l||(l=a[e]=u(),l.target=k.target||k,l.targetName=e,l._listeners=k._listeners||[],l.advices=new q,l=l.advices);
for(k=0;k<g;++k)h[k]=l.add(d[k]);c[e]=h}return[a,c]};h.unadvise=function(a){if(a){var b=a[0];a=a[1];for(var d in a){for(var c=b[d],e=c.advices,f=a[d],h=f.length-1;0<=h;--h)e.remove(f[h]);if(e.isEmpty()){f=!0;e=c._listeners;if(e.length)for(h in e)if(!(h in p)){f=!1;break}f?b[d]=c.target:(h=b[d]=m._listener.getDispatcher(),h.target=c.target,h._listeners=e)}}}};h.getContext=function(){return e};h.getContextStack=function(){return n};h.proceed=function(){for(var a=e.joinPoint,b=a.advices,d=e.around;d!=
b;d=e.around)if(e.around=d.prev_around,d.dynamic){var d=e.dynAdvices[e.dynIndex++],c=d.around;if(c)return c.apply(d,arguments)}else return d.advice.around.apply(d.advice,arguments);return a.target.apply(e.instance,arguments)}})()});
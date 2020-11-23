// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib @dojo/framework/shim/AbortController ./clock ./Error ./events ./Logger ./maybe @dojo/framework/shim/Promise".split(" "),function(J,b,E,F,G,y,z,H,n){function A(a){return Promise.all(a)}function h(a){return new Promise(function(b,c){try{a(b,c)}catch(d){Promise.resolve().then(function(){return c(d)})}})}function r(a){void 0===a&&(a="Aborted");return new y("AbortError",a)}function t(){return new F.default}function B(a){if(C(a))throw r();}function p(a){return n.isSome(a)?
"aborted"in a?a:a.signal:a}function C(a){a=p(a);return n.isSome(a)&&a.aborted}function u(a,b){a=p(a);if(!n.isNone(a))if(a.aborted)b();else return z.once(a,"abort",function(){return b()})}function k(a){return a&&"AbortError"===a.name}function v(){var a=null,b=h(function(b,e){a={promise:void 0,resolve:b,reject:e}});a.promise=b;return a}function w(a){if(a){if("function"!==typeof a.forEach){var b=Object.keys(a),c=b.map(function(b){return a[b]});return w(c).then(function(a){var e={};b.forEach(function(b,
c){return e[b]=a[c]});return e})}var d=q;return h(function(b){var e=[],c=a.length;0===c&&b(e);a.forEach(function(a){var g={promise:a||d(a)};e.push(g);g.promise.then(function(a){g.value=a}).catch(function(a){g.error=a}).then(function(){--c;0===c&&b(e)})})})}}function q(a){void 0===a&&(a=void 0);return Promise.resolve(a)}function D(a,b,c){void 0===b&&(b=void 0);var e=t();u(c,function(){return e.abort()});return h(function(c,d){var g=setTimeout(function(){g=0;c(b)},a);u(e,function(){g&&(clearTimeout(g),
d(r()))})})}function x(a){return a&&"object"===typeof a&&"then"in a&&"function"===typeof a.then?a:q(a)}Object.defineProperty(b,"__esModule",{value:!0});b.always=b.createResolver=b.debounce=b.when=b.isPromiseLike=b.timeout=b.after=b.resolve=b.reject=b.first=b.eachAlwaysValues=b.isThenable=b.eachAlways=b.createDeferred=b.logOnError=b.ignoreAbortErrors=b.isAbortError=b.onAbortOrThrow=b.onAbort=b.throwIfNotAbortError=b.throwIfAbortError=b.isAborted=b.throwIfAborted=b.createAbortController=b.createAbortError=
b.create=b.filter=b.all=void 0;var I=H.getLogger("esri");b.all=A;b.filter=function(a,b){var c=a.slice();return A(a.map(function(a,c){return b(a,c)})).then(function(a){return c.filter(function(b,c){return a[c]})})};b.create=h;b.createAbortError=r;b.createAbortController=t;b.throwIfAborted=B;b.isAborted=C;b.throwIfAbortError=function(a){if(k(a))throw a;};b.throwIfNotAbortError=function(a){if(!k(a))throw a;};b.onAbort=u;b.onAbortOrThrow=function(a,b){a=p(a);if(!n.isNone(a))return B(a),z.once(a,"abort",
function(){return b(r())})};b.isAbortError=k;b.ignoreAbortErrors=function(a){return a.catch(function(a){if(!k(a))throw a;})};b.logOnError=function(a,b){return a.catch(function(a){k(a)||(b=n.isSome(b)?b:I,b.error(a))})};b.createDeferred=v;b.eachAlways=w;b.isThenable=function(a){return a&&"function"===typeof a.then};b.eachAlwaysValues=function(a){return w(a).then(function(a){return a.filter(function(a){return!!a.value}).map(function(a){return a.value})})};b.first=function(a){return a&&a.length?h(function(b,
c){for(var e=0;e<a.length;e++)a[e].then(b,c)}):q()};b.reject=function(a){return Promise.reject(a)};b.resolve=q;b.after=D;b.timeout=function(a,b,c,d){var e=c&&"abort"in c?c:null;null!=d||e||(d=c);var f=setTimeout(function(){f=0;e&&e.abort()},b),m=function(){throw d||new y("promiseUtils:timeout","The wrapped promise did not resolve within "+b+" ms");};return a.then(function(a){if(0===f)throw m();clearTimeout(f);return a},function(a){clearTimeout(f);throw 0===f?m():a;})};b.isPromiseLike=function(a){return a&&
"function"===typeof a.then};b.when=x;b.debounce=function(a,b){void 0===b&&(b=-1);var c,e,g,f,m=null,h=function(){for(var d=[],l=0;l<arguments.length;l++)d[l]=arguments[l];if(c)return e=d,f&&f.reject(r()),f=v(),d=n.assumeNonNull(f.promise),m&&(l=m,m=null,l.abort()),d;g=f||v();f=null;if(0<b){var k=t(),q=c=x(a.apply(void 0,E.__spreadArrays(d,[k.signal])));D(b).then(function(){c===q&&(f?k.abort():m=k)})}else c=1,c=x(a.apply(void 0,d));var d=function(){var a=e;e=g=c=m=null;null!=a&&h.apply(void 0,a)},
l=c,p=g;l.then(d,d);l.then(p.resolve,p.reject);return n.assumeNonNull(p.promise)};return h};b.createResolver=function(){var a,b,c=h(function(c,e){a=c;b=e}),d=function(b){a(b)};d.resolve=function(b){return a(b)};d.reject=function(a){return b(a)};d.timeout=function(a,b){return G.default.setTimeout(function(){return d.reject(b)},a)};d.promise=c;return d};b.always=function(a,b){return a.then(b,b)}});
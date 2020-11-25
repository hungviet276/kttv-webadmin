// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../intl"],function(x,d,l){function r(a,b){return a-b}function t(a,b){var c;c=Number(a.toFixed(b));c<a?a=c+1/Math.pow(10,b):(a=c,c-=1/Math.pow(10,b));c=Number(c.toFixed(b));a=Number(a.toFixed(b));return[c,a]}function u(a,b,c,g,e){a=k(a,b,c,g);b=null==a.next||a.next<=e;return(null==a.previous||a.previous<=e)&&b||a.previous+a.next<=2*e}function m(a){a=String(a);var b=a.match(v);if(b&&b[1])return{integer:b[1].split("").length,fractional:b[3]?b[3].split("").length:0};if(-1<
a.toLowerCase().indexOf("e")&&(b=a.split("e"),a=b[0],b=b[1],a&&b)){a=Number(a);var b=Number(b),c=0<b;c||(b=Math.abs(b));a=m(a);c?(a.integer+=b,a.fractional=b>a.fractional?0:a.fractional-b):(a.fractional+=b,a.integer=b>a.integer?1:a.integer-b);return a}return{integer:0,fractional:0}}function k(a,b,c,g){var e={previous:null,next:null};if(null!=c){var f=a-c;e.previous=Math.floor(Math.abs(100*(b-c-f)/f))}null!=g&&(f=g-a,e.next=Math.floor(Math.abs(100*(g-b-f)/f)));return e}Object.defineProperty(d,"__esModule",
{value:!0});d.format=d.round=d.percentChange=d.numDigits=void 0;var v=/^-?(\d+)(\.(\d+))?$/i;d.numDigits=m;d.percentChange=k;d.round=function(a,b){void 0===b&&(b={});a=a.slice(0);var c=b.tolerance,c=void 0===c?2:c,g=b.strictBounds,g=void 0===g?!1:g;b=b.indexes;b=void 0===b?a.map(function(a,b){return b}):b;b.sort(r);for(var e=0;e<b.length;e++){var f=b[e],d=a[f],k=0===f?null:a[f-1],l=f===a.length-1?null:a[f+1],q=m(d).fractional;if(q){for(var n=0,h=!1,p=void 0;n<=q&&!h;)h=t(d,n),p=g&&0===e?h[1]:h[0],
h=u(d,p,k,l,c),n++;h&&(a[f]=p)}}return a};var w={maximumFractionDigits:20};d.format=function(a){return l.formatNumber(a,w)}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../Color","./colors"],function(n,b,h,f,e){function k(a){var d=[],c;for(c in a){var b=Number(c);isNaN(b)||d.push({colors:a[c].map(function(a){return new f(a)}),numClasses:b})}return{name:a.name,tags:h.__spreadArrays(a.tags),colors:a.stops.map(function(a){return new f(a)}),colorsForClassBreaks:d}}function g(a){return Array.isArray(a["2"]&&a["2"][0])}Object.defineProperty(b,"__esModule",{value:!0});b.byTag=b.byName=b.names=b.all=void 0;b.all=function(){var a=
[],d;for(d in e){var c=e[d];g(c)||a.push(k(c))}return a};b.names=function(){var a=[],d;for(d in e){var c=e[d];g(c)||a.push(c.name)}return a};b.byName=function(a){var d=null,c;for(c in e){var b=e[c];if(!g(b)&&b.name===a){d=k(b);break}}return d};b.byTag=function(a){var b=a.includedTags,c=a.excludedTags;if(!b&&!c)return[];var f=!(b&&b.length),h=!(c&&c.length),m=[];a=function(a){var d=e[a];if(!g(d)){a=f?!0:b.every(function(a){return-1<d.tags.indexOf(a)});var l=!h&&c.every(function(a){return-1<d.tags.indexOf(a)});
a&&!l&&m.push(k(d))}};for(var l in e)a(l);return m}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./maybe"],function(e,c,f){function g(a){if(0===a.size)throw Error("Set is empty");return a.values().next().value}function h(a){if(0===a.size)throw Error("Set is empty");var d=void 0,b=!1;a.forEach(function(a){b||(d=a,b=!0)});return f.assumeNonNull(d)}Object.defineProperty(c,"__esModule",{value:!0});c.reduceSet=c.firstOfSet=c.SetFromValues=c.valuesOfSet=c.someSet=void 0;c.someSet=Set.prototype.entries?function(a,d){a=a.entries();for(var b=a.next();!b.done;b=a.next())if(d(b.value[0]))return!0;
return!1}:function(a,d){var b=!0;a.forEach(function(a){b&&(b=!d(a))});return!b};e=!!Set.prototype.values;var k=!!Array.from;c.valuesOfSet=e&&k?function(a){return Array.from(a.values())}:function(a){var d=Array(a.size),b=0;a.forEach(function(a){return d[b++]=a});return d};c.SetFromValues=e?function(a){return new Set(a)}:function(a){for(var d=new Set,b=0;b<a.length;b++)d.add(a[b]);return d};c.firstOfSet=e?g:h;c.reduceSet=function(a,d,b){var c=b;a.forEach(function(a){return c=d(a,c)});return c}});
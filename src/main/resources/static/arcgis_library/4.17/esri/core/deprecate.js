// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./has"],function(l,b,f){function g(b,d,a){void 0===a&&(a={});if(f("esri-deprecation-warnings")){var c=a.replacement,e=a.version,h=a.see;a=a.warnOnce;c&&(d+="\n\t\ud83d\udee0\ufe0f Replacement: "+c);e&&(d+="\n\t\u2699\ufe0f Version: "+e);h&&(d+="\n\t\ud83d\udd17 See "+h+" for more details.");c=d;e=a;void 0===e&&(e=!1);e&&k.has(c)||(e&&k.add(c),b.warn("\ud83d\uded1 DEPRECATED - "+c))}}Object.defineProperty(b,"__esModule",{value:!0});b.deprecated=b.deprecatedProperty=b.deprecatedFunction=
b.deprecatedModule=void 0;var k=new Set;b.deprecatedModule=function(b,d,a){void 0===a&&(a={});f("esri-deprecation-warnings")&&g(b,"Module: "+d,a)};b.deprecatedFunction=function(b,d,a){void 0===a&&(a={});if(f("esri-deprecation-warnings")){var c=a.moduleName;g(b,"Function: "+((c?c+"::":"")+d+"()"),a)}};b.deprecatedProperty=function(b,d,a){void 0===a&&(a={});if(f("esri-deprecation-warnings")){var c=a.moduleName;g(b,"Property: "+((c?c+"::":"")+d),a)}};b.deprecated=g});
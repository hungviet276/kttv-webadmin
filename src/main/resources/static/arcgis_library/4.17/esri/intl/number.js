// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","@dojo/framework/shim/WeakMap","../core/maybe","./locale"],function(m,a,e,k,d){function f(g){var b=g||h;if(!c.has(b)){var a=d.getLocale(),a=l[d.getLocale()]||a;c.set(b,new Intl.NumberFormat(a,g))}return k.assumeNonNull(c.get(b))}Object.defineProperty(a,"__esModule",{value:!0});a.formatNumber=a.convertNumberFormatToIntlOptions=a.getFormatter=void 0;var l={ar:"ar-u-nu-latn"},c=new e.default,h={};d.beforeLocaleChange(function(){c=new e.default;h={}});a.getFormatter=f;a.convertNumberFormatToIntlOptions=
function(a){void 0===a&&(a={});var b={};null!=a.digitSeparator&&(b.useGrouping=a.digitSeparator);null!=a.places&&(b.minimumFractionDigits=b.maximumFractionDigits=a.places);return b};a.formatNumber=function(a,b){return f(b).format(a)}});
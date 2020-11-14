// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Basemap ../../core/string ../../support/arcadeOnDemand ../../support/basemapUtils".split(" "),function(v,b,l,n,p,q,r){function g(a){return p.padStart(a,2,"0")}function m(a,c,b){if("date"===c||"number"===c){"number"===c&&(a=new Date(a));c=b?a.getFullYear():a.getUTCFullYear();var e=g((b?a.getMonth():a.getUTCMonth())+1),d=g(b?a.getDate():a.getUTCDate()),h=g(b?a.getHours():a.getUTCHours()),t=g(b?a.getMinutes():a.getUTCMinutes());a=g(b?a.getSeconds():a.getUTCSeconds());
a="TIMESTAMP'"+c+"-"+e+"-"+d+" "+h+":"+t+":"+a+"'"}return a}function h(a,c){if(c instanceof Date)return"date";if("number"===typeof c)return"number";if("string"===typeof c&&(a=a.getField(c),"\x3cnow\x3e"!==c.toLowerCase()&&a&&"date"===a.type))return"field"}Object.defineProperty(b,"__esModule",{value:!0});b.castIntegerFieldToFloat=b.isIntegerField=b.getBasemapId=b.getBasemapGroup=b.getDateType=b.getDateDiffSQL=b.getNormalizationType=b.getFieldsList=b.unitValueInDays=b.defaultBasemapGroups=void 0;b.defaultBasemapGroups=
{light:"streets gray topo terrain national-geographic oceans osm gray-vector streets-vector topo-vector streets-relief-vector streets-navigation-vector".split(" "),dark:["satellite","hybrid","dark-gray","dark-gray-vector","streets-night-vector"]};b.unitValueInDays={years:365,months:30,days:1,hours:1/24,minutes:1/1440,seconds:1/86400,milliseconds:1/864E5};var u=["integer","small-integer"],k=null;b.getFieldsList=function(a){return l.__awaiter(this,void 0,void 0,function(){var c,b,e,f,g;return l.__generator(this,
function(d){switch(d.label){case 0:return c=a.field,b=a.normalizationField,e=a.valueExpression,f=[],e?k?[3,2]:[4,q.loadArcade()]:[3,3];case 1:k=g=d.sent().arcadeUtils,d.label=2;case 2:f=k.extractFieldNames(e),d.label=3;case 3:return c&&f.push(c),b&&f.push(b),[2,f]}})})};b.getNormalizationType=function(a){var b=a.normalizationType;b||(a.normalizationField?b="field":null!=a.normalizationTotal&&(b="percent-of-total"));return b};b.getDateDiffSQL=function(a,c,d,e){var f=a.hasQueryEngine;d=m(d,h(a,d),f);
a=m(c,h(a,c),f);a="("+d+" - "+a+")";f&&(a="("+a+" * "+b.unitValueInDays.milliseconds+")");e=b.unitValueInDays[e];f="/";1>e&&(e=1/e,f="*");return{sqlExpression:1===e?a:"("+a+" "+f+" "+e+")",sqlWhere:null}};b.getDateType=h;b.getBasemapGroup=function(a,c){void 0===c&&(c=b.defaultBasemapGroups);for(var d in c)if(-1<c[d].indexOf(a))return d};b.getBasemapId=function(a,b,d){void 0===d&&(d=!0);var c=null;"string"===typeof a&&-1<b.indexOf(a)?c=a:a instanceof n&&(c=r.getWellKnownBasemapId(a));return d?c||"gray":
c};b.isIntegerField=function(a,b){return(a=b&&a.getField(b))&&-1<u.indexOf(a.type)};b.castIntegerFieldToFloat=function(a){return"cast("+a+" as float)"}});
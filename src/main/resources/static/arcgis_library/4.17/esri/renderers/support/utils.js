// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../core/arrayUtils ../../core/Logger ../../core/unitUtils ../../intl/date ./numberUtils ../visualVariables/support/ColorStop".split(" "),function(B,d,w,x,g,n,l,y){function t(a,c,e){var b="";0===c?b=p.lt+" ":c===e&&(b=p.gt+" ");return b+a}function q(a){var c=a.minValue,e=a.maxValue,b=a.isFirstBreak?"":p.gt+" ";a="percent-of-total"===a.normalizationType?p.pct:"";c=null==c?"":l.format(c);e=null==e?"":l.format(e);return b+c+a+" "+p.ld+" "+e+a}function k(a,c){return"normalizationField"in
a&&a.normalizationField?{type:"normalized-field",field:a.field,normalizationField:a.normalizationField}:"field"in a&&a.field?{type:"field",field:a.field}:"valueExpression"in a&&a.valueExpression?{type:"expression",expression:a.valueExpression,title:a.valueExpressionTitle,returnType:c}:null}Object.defineProperty(d,"__esModule",{value:!0});d.getAttributes=d.getAttribute=d.createUniqueValueLabel=d.calculateDateFormatInterval=d.updateClassBreak=d.setLabelsForClassBreaks=d.createClassBreakLabel=d.updateColorStops=
d.createColorStops=d.timelineDateFormatOptions=d.meterIn=void 0;var u=x.getLogger("esri.renderers.support.utils"),p={lte:"\x3c\x3d",gte:"\x3e\x3d",lt:"\x3c",gt:"\x3e",pct:"%",ld:"\u2013"},z={millisecond:0,second:1,minute:2,hour:3,day:4,month:5,year:6},A={millisecond:"long-month-day-year-long-time",second:"long-month-day-year-long-time",minute:"long-month-day-year-short-time",hour:"long-month-day-year-short-time",day:"long-month-day-year",month:"long-month-day-year",year:"year"};d.meterIn={inches:g.convertUnit(1,
"meters","inches"),feet:g.convertUnit(1,"meters","feet"),"us-feet":g.convertUnit(1,"meters","us-feet"),yards:g.convertUnit(1,"meters","yards"),miles:g.convertUnit(1,"meters","miles"),"nautical-miles":g.convertUnit(1,"meters","nautical-miles"),millimeters:g.convertUnit(1,"meters","millimeters"),centimeters:g.convertUnit(1,"meters","centimeters"),decimeters:g.convertUnit(1,"meters","decimeters"),meters:g.convertUnit(1,"meters","meters"),kilometers:g.convertUnit(1,"meters","kilometers"),"decimal-degrees":1/
g.lengthToDegrees(1,"meters")};d.timelineDateFormatOptions=n.convertDateFormatToIntlOptions("short-date");d.createColorStops=function(a){var c=a.values,e=a.colors,b=a.labelIndexes,r=a.isDate,f=a.dateFormatOptions;return c.map(function(a,d){var h=null;if(!b||-1<b.indexOf(d)){var v=void 0;(v=r?n.formatDate(a,f):l.format(a))&&(h=t(v,d,c.length-1))}return new y({value:a,color:e[d],label:h})})};d.updateColorStops=function(a){var c=a.stops,e=a.changes,b=a.isDate,r=a.dateFormatOptions,f=c.map(function(a){return a.value});
a=[];for(var h=0;h<e.length;h++){var d=e[h];a.push(d.index);f[d.index]=d.value}var g=l.round(f,{indexes:a});c.forEach(function(a,e){a.value=f[e];if(null!=a.label){var d=void 0,h=null;(d=b?n.formatDate(g[e],r):l.format(g[e]))&&(h=t(d,e,c.length-1));a.label=h}})};d.createClassBreakLabel=q;d.setLabelsForClassBreaks=function(a){var c=a.classBreakInfos,e=a.normalizationType,b=[];if(c&&c.length)if("standard-deviation"===a.classificationMethod)u.warn("setLabelsForClassBreaks","cannot set labels for class breaks generated using 'standard-deviation' method.");
else if(a.round){b.push(c[0].minValue);for(a=0;a<c.length;a++)b.push(c[a].maxValue);b=l.round(b);c.forEach(function(a,c){a.label=q({minValue:0===c?b[0]:b[c],maxValue:b[c+1],isFirstBreak:0===c,normalizationType:e})})}else c.forEach(function(a,b){a.label=q({minValue:a.minValue,maxValue:a.maxValue,isFirstBreak:0===b,normalizationType:e})})};d.updateClassBreak=function(a){if("standard-deviation"===a.classificationMethod)u.warn("updateClassBreak","cannot update labels for class breaks generated using 'standard-deviation' method.");
else{var c=a.classBreaks,e=a.change,b=e.index,e=e.value,d=c.length,f=-1,h=-1;0===b?f=b:b===d?h=b-1:(h=b-1,f=b);a=a.normalizationType;b=null;-1<f&&f<d&&(b=c[f],b.minValue=e,b.label=q({minValue:b.minValue,maxValue:b.maxValue,isFirstBreak:0===f,normalizationType:a}));-1<h&&h<d&&(b=c[h],b.maxValue=e,b.label=q({minValue:b.minValue,maxValue:b.maxValue,isFirstBreak:0===h,normalizationType:a}))}};d.calculateDateFormatInterval=function(a){a=a.map(function(a){return new Date(a)});for(var c=a.length,e=Infinity,
b=null,d=0;d<c-1;d++){for(var f=a[d],h=[],g=Infinity,l=null,k=d+1;k<c;k++){var m=a[k],m=f.getFullYear()!==m.getFullYear()&&"year"||f.getMonth()!==m.getMonth()&&"month"||f.getDate()!==m.getDate()&&"day"||f.getHours()!==m.getHours()&&"hour"||f.getMinutes()!==m.getMinutes()&&"minute"||f.getSeconds()!==m.getSeconds()&&"second"||"millisecond",n=z[m];n<g&&(g=n,l=m);h.push(m)}g<e&&(e=g,b=l)}return b};d.createUniqueValueLabel=function(a){var c=a.value,e=a.domain,b=a.fieldInfo;a=a.dateFormatInterval;var d=
String(c);(e=e&&"codedValues"in e&&e.codedValues?e.getName(c):null)?d=e:"number"===typeof c&&(d=b&&"date"===b.type?n.formatDate(c,a&&n.convertDateFormatToIntlOptions(A[a])):l.format(c));return d};d.getAttribute=k;d.getAttributes=function(a,d){var e=[];if("class-breaks"===a.type||"heatmap"===a.type)e.push(k(a,"number"));else if("unique-value"===a.type){var b=a.authoringInfo;if(b&&"relationship"===b.type){if(b.field1&&b.field2){var c=b.field2.field,f=b.field2.normalizationField;e.push(k({field:b.field1.field,
normalizationField:b.field1.normalizationField}));e.push(k({field:c,normalizationField:f}))}}else c=a.uniqueValueInfos[0],b=null,c&&c.value&&(c=typeof a.uniqueValueInfos[0].value,"string"===c||"number"===c)&&(b=c),e.push(k(a,b)),[a.field2,a.field3].forEach(function(a){return a&&e.push({type:"field",field:a})})}else"dot-density"===a.type&&a.attributes.forEach(function(a){return e.push(k(a,"number"))});(a=d?d(a):"visualVariables"in a?a.visualVariables:null)&&a.forEach(function(a){return e.push(k(a,
"number"))});return w.unique(e.filter(Boolean),function(a,b){return"field"===a.type&&"field"===b.type?a.field===b.field:"normalized-field"===a.type&&"normalized-field"===b.type?a.field===b.field&&a.normalizationField===b.normalizationField:"expression"===a.type&&"expression"===b.type?a.expression===b.expression:!1})}});
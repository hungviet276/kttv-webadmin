// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../Color ../../../core/maybe ../../../intl/date ../../../renderers/support/utils ../../../renderers/visualVariables/SizeVariable".split(" "),function(r,b,f,l,p,q,m){Object.defineProperty(b,"__esModule",{value:!0});b.getFillFromColor=b.getStopChanges=b.getSizesFromVariable=b.getPathForSizeStops=b.getDeviationValues=b.formatDateLabel=void 0;b.formatDateLabel=function(a){return p.formatDate(new Date(a),q.timelineDateFormatOptions)};b.getDeviationValues=function(a,n,c){if(!l.isSome(n)||
!l.isSome(a))return[];for(var b=[],d=-1*c;d<=c;d++)0!==d&&b.push(n+d*a);return b};b.getPathForSizeStops=function(a){var b=a.min,c=a.pathHeight,e=a.pathWidth,d=a.topWidth*e,e=a.bottomWidth*e,g=a.max-b;return"M"+d+" 0 L"+d+" "+Math.round(c-(a.topValue-b)/g*c)+" L"+e+" "+Math.round(c-(a.bottomValue-b)/g*c)+" L"+e+" "+c+" L0 "+c+" L0 0 Z"};b.getSizesFromVariable=function(a){var b=a.maxSize;a=a.minSize;b instanceof m&&(b=b.stops[0].size);a instanceof m&&(a=a.stops[0].size);return[b,a]};b.getStopChanges=
function(a,b,c){for(var e=c.length-1,d=c[0],g=c[e]-d,f=b-a,h=[],k=1;k<e;k++)h.push({index:k,value:(c[k]-d)/g*f+a});h.unshift({index:0,value:a});h.push({index:e,value:b});return h};b.getFillFromColor=function(a){return a instanceof f?a.toCss(!0):f.fromString(a).toCss(!0)}});
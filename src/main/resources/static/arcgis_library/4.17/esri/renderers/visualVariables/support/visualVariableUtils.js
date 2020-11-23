// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../Color ../../../Graphic ../../../core/compilerUtils ../../../core/Logger ../../../core/maybe ../../support/utils ./sizeVariableUtils".split(" "),function(H,h,v,C,D,E,m,F,q){function w(a,b,c){if(a="visualVariables"in a&&a.visualVariables?a.visualVariables.filter(function(a){return"color"===a.type})[0]:a)if("esri.renderers.visualVariables.ColorVariable"!==a.declaredClass)p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");
else{var d="number"===typeof b,f=d?null:b,e=f&&f.attributes,g=d?b:null,h=a.field,k=a.cache;b=k.ipData;var l=k.hasExpression,k=a.cache.compiledFunc;if(!h&&!l)return(c=a.stops)&&c[0]&&c[0].color;if("number"!==typeof g)if(l){if(!m.isSome(c)||!m.isSome(c.arcade)){p.error("Use of arcade expressions requires an arcade context");return}g=c.arcade.arcadeUtils;h=g.getViewInfo({viewingMode:c.viewingMode,scale:c.scale,spatialReference:c.spatialReference});f=g.createExecContext(f,h);k||(k=g.createSyntaxTree(a.valueExpression),
k=g.createFunction(k),a.cache.compiledFunc=k);g=g.executeFunction(k,f)}else e&&(g=e[h]);f=a.normalizationField;e=e?parseFloat(e[f]):void 0;if(null!=g&&(!f||d||!isNaN(e)&&0!==e)&&(isNaN(e)||d||(g/=e),d=u(g,b)))return e=d[0],b=d[1],c=e===b?a.stops[e].color:v.blendColors(a.stops[e].color,a.stops[b].color,d[2],m.isSome(c)?c.color:void 0),new v(c)}}function x(a,b,c){if(a="visualVariables"in a&&a.visualVariables?a.visualVariables.filter(function(a){return"opacity"===a.type})[0]:a)if("esri.renderers.visualVariables.OpacityVariable"!==
a.declaredClass)p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");else{var d="number"===typeof b,f=d?null:b,e=f&&f.attributes,g=d?b:null,h=a.field,k=a.cache;b=k.ipData;var l=k.hasExpression,k=a.cache.compiledFunc;if(!h&&!l)return(a=a.stops)&&a[0]&&a[0].opacity;if("number"!==typeof g)if(l){if(m.isNone(c)||m.isNone(c.arcade)){p.error("Use of arcade expressions requires an arcade context");return}g=c.arcade.arcadeUtils;c=g.getViewInfo({viewingMode:c.viewingMode,
scale:c.scale,spatialReference:c.spatialReference});c=g.createExecContext(f,c);k||(f=g.createSyntaxTree(a.valueExpression),k=g.createFunction(f),a.cache.compiledFunc=k);g=g.executeFunction(k,c)}else e&&(g=e[h]);c=a.normalizationField;e=e?parseFloat(e[c]):void 0;if(null!=g&&(!c||d||!isNaN(e)&&0!==e)&&(isNaN(e)||d||(g/=e),d=u(g,b))){b=d[0];e=d[1];if(b===e)return a.stops[b].opacity;b=a.stops[b].opacity;return b+(a.stops[e].opacity-b)*d[2]}}}function y(a,b,c){if(a="visualVariables"in a&&a.visualVariables?
a.visualVariables.filter(function(a){return"rotation"===a.type})[0]:a)if("esri.renderers.visualVariables.RotationVariable"!==a.declaredClass)p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");else{var d=a.axis||"heading",f="heading"===d&&"arithmetic"===a.rotationType?90:0,d="heading"===d&&"arithmetic"===a.rotationType?-1:1,e="number"===typeof b?null:b,g=e&&e.attributes,h=a.field,k=a.cache.hasExpression;b=a.cache.compiledFunc;var l=0;if(!h&&!k)return l;
if(k){if(m.isNone(c)||m.isNone(c.arcade)){p.error("Use of arcade expressions requires an arcade context");return}g=c.arcade.arcadeUtils;c=g.getViewInfo({viewingMode:c.viewingMode,scale:c.scale,spatialReference:c.spatialReference});c=g.createExecContext(e,c);b||(b=g.createSyntaxTree(a.valueExpression),b=g.createFunction(b),a.cache.compiledFunc=b);l=g.executeFunction(b,c)}else g&&(l=g[h]||0);return l="number"!==typeof l||isNaN(l)?null:f+d*l}}function G(a,b,c){var d="number"===typeof b,f=d?null:b,e=
f&&f.attributes,g=d?b:null;b=a.cache.compiledFunc;if(a.cache.isScaleDriven)f=m.isSome(c)?c.scale:void 0,c=m.isSome(c)?c.view:void 0,null==f||c&&"3d"===c.type?(f=c=null,(f=a.stops)?(c=f[0].value,f=f[f.length-1].value):(c=a.minDataValue||0,f=a.maxDataValue||0),c=(c+f)/2):c=f,g=c;else if(!d)switch(a.inputValueType){case "expression":if(m.isNone(c)||m.isNone(c.arcade)){p.error("Use of arcade expressions requires an arcade context");return}g=c.arcade.arcadeUtils;c=g.getViewInfo({viewingMode:c.viewingMode,
scale:c.scale,spatialReference:c.spatialReference});c=g.createExecContext(f,c);b||(f=g.createSyntaxTree(a.valueExpression),b=g.createFunction(f),a.cache.compiledFunc=b);g=g.executeFunction(b,c);break;case "field":e&&(g=e[a.field]);break;case "unknown":g=null}if(!q.isValidNumber(g))return null;if(d||!a.normalizationField)return g;a=e?parseFloat(e[a.normalizationField]):null;return q.isValidNumber(a)&&0!==a?g/a:null}function r(a,b,c){if(a="visualVariables"in a&&a.visualVariables?a.visualVariables.filter(function(a){return"size"===
a.type})[0]:a)if("esri.renderers.visualVariables.SizeVariable"!==a.declaredClass)p.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");else{var d=G(a,b,c);b=z(d,a,b,c,a.cache.ipData);return null===b||void 0===b||isNaN(b)?0:b}}function n(a,b,c){return null==a?null:q.isSizeVariable(a)?r(a,b,c):q.isValidNumber(a)?a:null}function A(a,b,c){return q.isValidNumber(c)&&a>c?c:q.isValidNumber(b)&&a<b?b:a}function z(a,b,c,d,f){switch(b.transformationType){case "additive":return d=
n(b.minSize,c,d),a+(d||b.minDataValue);case "constant":return a=(a=b.stops)&&a.length&&a[0].size,null==a&&(a=b.minSize),n(a,c,d);case "clamped-linear":f=(a-b.minDataValue)/(b.maxDataValue-b.minDataValue);var e=n(b.minSize,c,d);c=n(b.maxSize,c,d);d=m.isSome(d)?d.shape:void 0;a<=b.minDataValue?b=e:a>=b.maxDataValue?b=c:"area"===b.scaleBy&&d?(d=(b="circle"===d)?t*Math.pow(e/2,2):e*e,d+=f*((b?t*Math.pow(c/2,2):c*c)-d),b=b?2*Math.sqrt(d/t):Math.sqrt(d)):b=e+f*(c-e);return b;case "proportional":return f=
m.isSome(d)?d.shape:void 0,a/=b.minDataValue,e=n(b.minSize,c,d),b=n(b.maxSize,c,d),d=null,d="circle"===f?2*Math.sqrt(a*Math.pow(e/2,2)):"square"===f||"diamond"===f||"image"===f?Math.sqrt(a*Math.pow(e,2)):a*e,A(d,e,b);case "stops":return f=u(a,f),e=f[0],a=f[1],f=f[2],e===a?b=n(b.stops[e].size,c,d):(e=n(b.stops[e].size,c,d),b=n(b.stops[a].size,c,d),b=e+(b-e)*f),b;case "real-world-size":return f=(m.isSome(d)&&d.resolution?d.resolution:1)*F.meterIn[b.valueUnit],e=n(b.minSize,c,d),d=n(b.maxSize,c,d),b=
b.valueRepresentation,c=null,c="area"===b?2*Math.sqrt(a/t)/f:"radius"===b||"distance"===b?2*a/f:a/f,A(c,e,d);case "identity":return a;case "unknown":return null}}function u(a,b){if(b){var c=0,d=b.length-1;b.some(function(b,e){if(a<b)return d=e,!0;c=e;return!1});return[c,d,(a-b[c])/(b[d]-b[c])]}}Object.defineProperty(h,"__esModule",{value:!0});h.getAllSizes=h.getVisualVariableValues=h.getSizeRangeAtScale=h.getSizeForValue=h.getSizeFromNumberOrVariable=h.getSize=h.getRotationAngle=h.getOpacity=h.getColor=
h.viewScaleRE=void 0;var p=E.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),B=new C,t=Math.PI;h.viewScaleRE=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;h.getColor=w;h.getOpacity=x;h.getRotationAngle=y;h.getSize=r;h.getSizeFromNumberOrVariable=n;h.getSizeForValue=z;h.getSizeRangeAtScale=function(a,b,c){var d=c&&"3d"===c.type;if(!(a.cache.isScaleDriven&&d||b))return null;c={scale:b,view:c};b=n(a.minSize,B,c);a=n(a.maxSize,B,c);if(null!=b||null!=a)return b>a&&(c=a,a=b,b=c),{minSize:b,
maxSize:a}};h.getVisualVariableValues=function(a,b,c){if(a.visualVariables){var d=[],f=[],e=[],g=[],h=[],k=0;for(a=a.visualVariables;k<a.length;k++){var l=a[k];switch(l.type){case "color":f.push(l);break;case "opacity":e.push(l);break;case "rotation":h.push(l);break;case "size":g.push(l)}}f.forEach(function(a){var e=w(a,b,c);d.push({variable:a,value:e})});e.forEach(function(a){var e=x(a,b,c);d.push({variable:a,value:e})});h.forEach(function(a){var e=y(a,b,c);d.push({variable:a,value:e})});g.forEach(function(a){var e=
r(a,b,c);d.push({variable:a,value:e})});return d.filter(function(a){return null!=a.value})}};h.getAllSizes=function(a,b,c){for(var d=["proportional","proportional","proportional"],f=0;f<a.length;f++){var e=a[f],g=e.useSymbolValue?"symbol-value":r(e,b,c);switch(e.axis){case "width":d[0]=g;break;case "depth":d[1]=g;break;case "height":d[2]=g;break;case "width-and-depth":d[0]=g;d[1]=g;break;case "all":case void 0:case null:d[0]=g;d[1]=g;d[2]=g;break;default:D.neverReached(e.axis)}}return d}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ./FunctionWrapper ./ImmutableArray ./ImmutablePathArray ./ImmutablePointArray ../core/promiseUtils ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../core/number ../geometry/support/coordsUtils ../core/maybe".split(" "),function(A,c,U,t,V,w,W,I,B,J,x,K,L,M,X,Y){function v(a,b,d){return""===b||null===b||void 0===b||b===d||b===d?a:a=a.split(b).join(d)}function C(a){return a instanceof D||a instanceof U||
a instanceof E}function N(a){return f(a)||m(a)||l(a)||n(a)||null===a||a===c.voidOperation||"number"===typeof a?!0:!1}function f(a){return"string"===typeof a||a instanceof String}function n(a){return"boolean"===typeof a}function m(a){return"number"===typeof a}function p(a){return a instanceof Array}function r(a){return a instanceof t}function l(a){return a instanceof Date}function F(a,b){if(!1===isNaN(a)){if(void 0===b||null===b||""===b)return a.toString();b=v(b,"\u2030","");b=v(b,"\u00a4","");return M.format(a,
{pattern:b})}return a.toString()}function y(a,b){a=c.MomentLibrary.Moment(a);return void 0===b||null===b||""===b?a.format():a.format(O(b))}function O(a){return a.replace(/(LTS)|L|l/g,function(a){return"["+a+"]"})}function e(a,b,d){switch(d){case "\x3e":return a>b;case "\x3c":return a<b;case "\x3e\x3d":return a>=b;case "\x3c\x3d":return a<=b}return!1}function P(a,b){if(a===b||null===a&&b===c.voidOperation||null===b&&a===c.voidOperation)return!0;if(l(a)&&l(b))return a.getTime()===b.getTime();if(a instanceof
V||a instanceof w)return a.equalityTest(b);if(a instanceof x&&b instanceof x){var d=void 0,g=void 0,d=a.cache._arcadeCacheId,g=b.cache._arcadeCacheId;if(void 0!==d&&null!==d)return d===g}return void 0!==a&&void 0!==b&&null!==a&&null!==b&&"object"===typeof a&&"object"===typeof b&&(a._arcadeCacheId===b._arcadeCacheId&&void 0!==a._arcadeCacheId&&null!==a._arcadeCacheId||a._underlyingGraphic===b._underlyingGraphic&&void 0!==a._underlyingGraphic&&null!==a._underlyingGraphic)?!0:!1}function q(a,b){if(f(a))return a;
if(null===a)return"";if(m(a))return F(a,b);if(n(a))return a.toString();if(l(a))return y(a,b);if(a instanceof B)return JSON.stringify(a.toJSON());if(p(a)){b=[];for(var d=0;d<a.length;d++)b[d]=z(a[d]);return"["+b.join(",")+"]"}if(a instanceof t){b=[];for(d=0;d<a.length();d++)b[d]=z(a.get(d));return"["+b.join(",")+"]"}return null!==a&&"object"===typeof a&&void 0!==a.castToText?a.castToText():C(a)?"object, Function":""}function Q(a,b){if(f(a))return a;if(null===a)return"";if(m(a))return F(a,b);if(n(a))return a.toString();
if(l(a))return y(a,b);if(a instanceof B)return a instanceof I?'{"xmin":'+a.xmin.toString()+',"ymin":'+a.ymin.toString()+","+(a.hasZ?'"zmin":'+a.zmin.toString()+",":"")+(a.hasM?'"mmin":'+a.mmin.toString()+",":"")+'"xmax":'+a.xmax.toString()+',"ymax":'+a.ymax.toString()+","+(a.hasZ?'"zmax":'+a.zmax.toString()+",":"")+(a.hasM?'"mmax":'+a.mmax.toString()+",":"")+'"spatialReference":'+G(a.spatialReference)+"}":G(a.toJSON(),function(a,b){return a.key===b.key?0:"spatialReference"===a.key?1:"spatialReference"===
b.key||a.key<b.key?-1:a.key>b.key?1:0});if(p(a)){b=[];for(var d=0;d<a.length;d++)b[d]=z(a[d]);return"["+b.join(",")+"]"}if(a instanceof t){b=[];for(d=0;d<a.length();d++)b[d]=z(a.get(d));return"["+b.join(",")+"]"}return null!==a&&"object"===typeof a&&void 0!==a.castToText?a.castToText():C(a)?"object, Function":""}function z(a){return null===a?"null":n(a)||m(a)||f(a)?JSON.stringify(a):a instanceof B||a instanceof t||a instanceof Array?Q(a):a instanceof Date?JSON.stringify(y(a,"")):null!==a&&"object"===
typeof a&&void 0!==a.castToText?a.castToText():"null"}function h(a,b){return m(a)?a:null===a||""===a?0:l(a)?NaN:n(a)?a?1:0:p(a)||""===a||void 0===a?NaN:void 0!==b&&f(a)?(b=v(b,"\u2030",""),b=v(b,"\u00a4",""),M.parse(a,{pattern:b})):a===c.voidOperation?0:Number(a)}function R(a,b){var d;b.fields.some(function(b){b.name===a&&(d=b.domain);return!!d});return d}function G(a,b){b||(b={});"function"===typeof b&&(b={cmp:b});var d="boolean"===typeof b.cycles?b.cycles:!1,c=b.cmp&&function(a){return function(b){return function(d,
c){return a({key:d,value:b[d]},{key:c,value:b[c]})}}}(b.cmp),k=[];return function S(a){a&&a.toJSON&&"function"===typeof a.toJSON&&(a=a.toJSON());if(void 0!==a){if("number"===typeof a)return isFinite(a)?""+a:"null";if("object"!==typeof a)return JSON.stringify(a);var b,g;if(Array.isArray(a)){g="[";for(b=0;b<a.length;b++)b&&(g+=","),g+=S(a[b])||"null";return g+"]"}if(null===a)return"null";if(-1!==k.indexOf(a)){if(d)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON");
}var e=k.push(a)-1,h=Object.keys(a).sort(c&&c(a));g="";for(b=0;b<h.length;b++){var f=h[b],l=S(a[f]);l&&(g&&(g+=","),g+=JSON.stringify(f)+":"+l)}k.splice(e,1);return"{"+g+"}"}}(a)}function u(a,b){if(b instanceof x)a.push(b.hasZ?b.hasM?[b.x,b.y,b.z,b.m]:[b.x,b.y,b.z]:[b.x,b.y]);else throw Error("Invalid Argument");}Object.defineProperty(c,"__esModule",{value:!0});c.binaryOperator=c.MomentLibrary=c.tick=c.toStringArray=c.autoCastArrayOfPointsToMultiPoint=c.autoCastArrayOfPointsToPolyline=c.autoCastArrayOfPointsToPolygon=
c.autoCastFeatureToGeometry=c.stableStringify=c.getDomain=c.getDomainCode=c.getDomainValue=c.fixNullGeometry=c.fixSpatialReference=c.toBoolean=c.toDateM=c.toDate=c.toNumber=c.toStringExplicit=c.toNumberArray=c.toString=c.equalityTest=c.greaterThanLessThan=c.standardiseDateFormat=c.formatDate=c.formatNumber=c.generateUUID=c.pcCheck=c.isDate=c.isImmutableArray=c.isFeatureSetCollection=c.isFeatureSet=c.isArray=c.isNumber=c.isBoolean=c.isString=c.defaultUndefined=c.isSimpleType=c.isFunctionParameter=
c.multiReplace=c.continueResult=c.breakResult=c.voidOperation=c.SizzleFunction=c.ReturnResult=c.ImplicitResult=c.NativeFunction=c.SizzleFunctionE=c.NativeFunctionE=c.ImplicitResultE=c.ReturnResultE=void 0;A=function(){return function(a){this.value=a}}();c.ReturnResultE=A;var T=function(){return function(a){this.value=a}}();c.ImplicitResultE=T;var D=function(){return function(a){this.fn=a}}();c.NativeFunctionE=D;var E=function(){return function(a){this.fn=a}}();c.SizzleFunctionE=E;c.NativeFunction=
D;c.ImplicitResult=T;c.ReturnResult=A;c.SizzleFunction=E;c.voidOperation={type:"VOID"};c.breakResult={type:"BREAK"};c.continueResult={type:"CONTINUE"};c.multiReplace=v;c.isFunctionParameter=C;c.isSimpleType=N;c.defaultUndefined=function(a,b){return void 0===a?b:a};c.isString=f;c.isBoolean=n;c.isNumber=m;c.isArray=p;c.isFeatureSet=function(a){return!0===(a&&a.declaredRootClass&&"esri.arcade.featureset.support.FeatureSet"===a.declaredRootClass)};c.isFeatureSetCollection=function(a){return!0===(a&&a.declaredRootClass&&
"esri.arcade.featureSetCollection"===a.declaredRootClass)};c.isImmutableArray=r;c.isDate=l;c.pcCheck=function(a,b,d){if(a.length<b||a.length>d)throw Error("Function called with wrong number of Parameters");};c.generateUUID=function(){var a=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var d=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"===b?d:d&3|8).toString(16)})};c.formatNumber=F;c.formatDate=y;c.standardiseDateFormat=O;c.greaterThanLessThan=
function(a,b,d){if(null===a){if(null===b||b===c.voidOperation)return e(null,null,d);if(m(b))return e(0,b,d);if(f(b)||n(b))return e(0,h(b),d);if(l(b))return e(0,b.getTime(),d)}if(a===c.voidOperation){if(null===b||b===c.voidOperation)return e(null,null,d);if(m(b))return e(0,b,d);if(f(b)||n(b))return e(0,h(b),d);if(l(b))return e(0,b.getTime(),d)}else if(m(a)){if(m(b))return e(a,b,d);if(n(b))return e(a,h(b),d);if(null===b||b===c.voidOperation)return e(a,0,d);if(f(b))return e(a,h(b),d);if(l(b))return e(a,
b.getTime(),d)}else if(f(a)){if(f(b))return e(q(a),q(b),d);if(l(b))return e(h(a),b.getTime(),d);if(m(b))return e(h(a),b,d);if(null===b||b===c.voidOperation)return e(h(a),0,d);if(n(b))return e(h(a),h(b),d)}else if(l(a)){if(l(b))return e(a,b,d);if(null===b||b===c.voidOperation)return e(a.getTime(),0,d);if(m(b))return e(a.getTime(),b,d);if(n(b)||f(b))return e(a.getTime(),h(b),d)}else if(n(a)){if(n(b))return e(a,b,d);if(m(b))return e(h(a),h(b),d);if(l(b))return e(h(a),b.getTime(),d);if(null===b||b===
c.voidOperation)return e(h(a),0,d);if(f(b))return e(h(a),h(b),d)}return!P(a,b)||"\x3c\x3d"!==d&&"\x3e\x3d"!==d?!1:!0};c.equalityTest=P;c.toString=q;c.toNumberArray=function(a){var b=[];if(!1===p(a))return null;if(a instanceof t){for(var d=0;d<a.length();d++)b[d]=h(a.get(d));return b}for(d=0;d<a.length;d++)b[d]=h(a[d]);return b};c.toStringExplicit=Q;c.toNumber=h;c.toDate=function(a,b){return l(a)?a:f(a)&&(a=c.MomentLibrary.Moment(a,[void 0===b||null===b||""===b?c.MomentLibrary.Moment.ISO_8601:b]),
a.isValid())?a.toDate():null};c.toDateM=function(a,b){return l(a)?c.MomentLibrary.Moment(a):f(a)&&(a=c.MomentLibrary.Moment(a,[void 0===b||null===b||""===b?c.MomentLibrary.Moment.ISO_8601:b]),a.isValid())?a:null};c.toBoolean=function(a){return n(a)?a:f(a)?(a=a.toLowerCase(),"true"===a?!0:!1):m(a)?0===a||isNaN(a)?!1:!0:!1};c.fixSpatialReference=function(a,b){if(Y.isNone(a))return null;if(null===a.spatialReference||void 0===a.spatialReference)a.spatialReference=b;return a};c.fixNullGeometry=function(a){return null===
a?null:a instanceof x?"NaN"===a.x||null===a.x||isNaN(a.x)?null:a:a instanceof K?0===a.rings.length?null:a:a instanceof L?0===a.paths.length?null:a:a instanceof J?0===a.points.length?null:a:a instanceof I?"NaN"===a.xmin||null===a.xmin||isNaN(a.xmin)?null:a:null};c.getDomainValue=function(a,b){if(!a||!a.domain)return b;var d=null;if("string"===a.field.type||"esriFieldTypeString"===a.field.type)b=q(b);else{if(null===b||void 0===b)return null;if(""===b)return b;b=h(b)}for(var c=0;c<a.domain.codedValues.length;c++){var k=
a.domain.codedValues[c];k.code===b&&(d=k)}return null===d?b:d.name};c.getDomainCode=function(a,b){if(!a||!a.domain)return b;var c=null;b=q(b);for(var g=0;g<a.domain.codedValues.length;g++){var k=a.domain.codedValues[g];k.name===b&&(c=k)}return null===c?b:c.code};c.getDomain=function(a,b,c,g){void 0===c&&(c=null);if(!b||!b.fields)return null;for(var d=null,e=0;e<b.fields.length;e++){var h=b.fields[e];h.name.toLowerCase()===a.toString().toLowerCase()&&(d=h)}if(null===d)throw Error("Field not found");
var f,l;g||(g=c&&b.typeIdField&&c._field(b.typeIdField));null!=g&&b.types.some(function(a){return a.id===g?((f=a.domains&&a.domains[d.name])&&"inherited"===f.type&&(f=R(d.name,b),l=!0),!0):!1});l||f||(f=R(a,b));return{field:d,domain:f}};c.stableStringify=G;c.autoCastFeatureToGeometry=function(a){if(null===a)return null;for(var b=[],c=0;c<a.length;c++){var g=a[c];g&&(g.declaredClass&&"esri.arcade.Feature"===g.declaredClass||"FeatureSetReader"===g.type)?b.push(g.geometry()):b.push(g)}return b};c.autoCastArrayOfPointsToPolygon=
function(a,b){if(p(a)||r(a)){var c=!1,g=!1,k=[];if(p(a)){for(var e=0;e<a.length;e++){var f=a[e];u(k,f)}0<k.length&&(b=a[0].spatialReference,c=a[0].hasZ,g=a[0].hasM)}else if(a instanceof w)k=a._elements,0<k.length&&(c=a._hasZ,g=a._hasM,b=a.get(0).spatialReference);else if(r(a)){for(var e=0,h=a.toArray();e<h.length;e++)f=h[e],u(k,f);0<k.length&&(b=a.get(0).spatialReference,c=!0===a.get(0).hasZ,g=!0===a.get(0).hasM)}else throw Error("Invalid Argument");if(0===k.length)return null;!1===X.isClockwise(k,
g,c)&&(k=k.slice(0).reverse());return new K({rings:[k],spatialReference:b,hasZ:c,hasM:g})}return a};c.autoCastArrayOfPointsToPolyline=function(a,b){if(p(a)||r(a)){var c=!1,g=!1,k=[];if(p(a)){for(var e=0;e<a.length;e++){var f=a[e];u(k,f)}0<k.length&&(b=a[0].spatialReference,c=!0===a[0].hasZ,g=!0===a[0].hasM)}else if(a instanceof w)k=a._elements,0<k.length&&(c=a._hasZ,g=a._hasM,b=a.get(0).spatialReference);else if(r(a)){for(var e=0,h=a.toArray();e<h.length;e++)f=h[e],u(k,f);0<k.length&&(b=a.get(0).spatialReference,
c=!0===a.get(0).hasZ,g=!0===a.get(0).hasM)}return 0===k.length?null:new L({paths:[k],spatialReference:b,hasZ:c,hasM:g})}return a};c.autoCastArrayOfPointsToMultiPoint=function(a,b){if(p(a)||r(a)){var c=!1,g=!1,e=[];if(p(a)){for(var f=0;f<a.length;f++){var h=a[f];u(e,h)}0<e.length&&(b=a[0].spatialReference,c=!0===a[0].hasZ,g=!0===a[0].hasM)}else if(a instanceof w)e=a._elements,0<e.length&&(c=a._hasZ,g=a._hasM,b=a.get(0).spatialReference);else if(r(a)){for(var f=0,l=a.toArray();f<l.length;f++)h=l[f],
u(e,h);0<e.length&&(b=a.get(0).spatialReference,c=!0===a.get(0).hasZ,g=!0===a.get(0).hasM)}return 0===e.length?null:new J({points:e,spatialReference:b,hasZ:c,hasM:g})}return a};c.toStringArray=function(a,b){void 0===b&&(b=!1);var c=[];if(null===a)return c;if(!0===p(a)){for(var e=0;e<a.length;e++){var f=q(a[e]);""===f&&!0!==b||c.push(f)}return c}if(a instanceof t){for(e=0;e<a.length();e++)f=q(a.get(e)),""===f&&!0!==b||c.push(f);return c}return N(a)?(f=q(a),""===f&&!0!==b||c.push(f),c):[]};var H=0;
c.tick=function(a){H++;return 0===H%100?(H=0,W.create(function(b){setTimeout(function(){b(a)},0)})):a};c.MomentLibrary={Moment:null};c.binaryOperator=function(a,b,c){switch(c){case "\x26":return a&b;case "|":return a|b;case "^":return a^b;case "\x3c\x3c":return a<<b;case "\x3e\x3e":return a>>b;case "\x3e\x3e\x3e":return a>>>b}}});
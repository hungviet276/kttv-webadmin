// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../Logger ../ensureType ../get ../metadata ../set".split(" "),function(t,e,n,f,l,h,p){function q(a){var b=0,c=a;if(f.isLongFormType(a))return f.ensureLongFormType(a);for(;Array.isArray(c)&&1===c.length&&"string"!==typeof c[0]&&"number"!==typeof c[0];)c=c[0],b++;return f.isOneOf(c)?0===b?f.ensureOneOf(c):f.ensureNArrayTyped(f.ensureOneOf(c),b):1===b?f.ensureArray(c):1<b?f.ensureNArray(c,b):a.from?a.from:f.default(a)}function m(a,b){return function(c){c=+a(c);null!=b.step&&
(c=Math.round(c/b.step)*b.step);null!=b.min&&(c=Math.max(b.min,c));null!=b.max&&(c=Math.min(b.max,c));return c}}Object.defineProperty(e,"__esModule",{value:!0});e.ensureRange=e.propertyJSONMeta=e.property=void 0;var r=n.getLogger("esri.core.accessorSupport.decorators.property");e.property=function(a){void 0===a&&(a={});return function(b,c,g){if(b===Function.prototype)throw Error("Inappropriate use of @property() on a static field: "+b.name+"."+c+". Accessor does not support static properties.");var d=
h.getOwnPropertyMetadata(b,c);g&&(g.get||g.set?(d.get=g.get||d.get,d.set=g.set||d.set):"value"in g&&("value"in a&&r.warn('@property() will redefine the value of "'+c+'" on "'+b.constructor.name+'" already defined in the metadata',a),d.value=a.value=g.value));null!=a.readOnly&&(d.readOnly=a.readOnly);if(b=a.aliasOf){var e="string"===typeof b?b:b.source;b="string"===typeof b?null:!0===b.overridable;var k;d.dependsOn=[e];d.get=function(){var a=l.default(this,e);if("function"===typeof a){k||(k=e.split(".").slice(0,
-1).join("."));var b=l.default(this,k);b&&(a=a.bind(b))}return a};d.readOnly||(d.set=b?function(a){void 0!==a?this._override(c,a):this._clearOverride(c)}:function(a){p.default(this,e,a)})}b=a.type;g=a.types;d.cast||(b?d.cast=q(b):g&&(Array.isArray(g)?d.cast=f.ensureArrayTyped(f.ensureOneOfType(g[0])):d.cast=f.ensureOneOfType(g)));a.range&&(d.cast=m(d.cast,a.range));h.mergeProperty(d,a)}};e.propertyJSONMeta=function(a,b,c){a=h.getOwnPropertyMetadata(a,c);a.json||(a.json={});a=a.json;void 0!==b&&(a.origins||
(a.origins={}),a.origins[b]||(a.origins[b]={}),a=a.origins[b]);return a};e.ensureRange=m});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/screenUtils ../../../../engine/webgl/color ../../../../engine/webgl/definitions ../../../../engine/webgl/enums ../../../../engine/webgl/visualVariablesUtils ../../../../../3d/layers/support/FastSymbolUpdates".split(" "),function(w,d,p,g,q,r,h,t,u){function m(a){return{value:a.value,size:g.toPt(a.size)}}function k(a){return a.map(function(a){return m(a)})}function l(a){return"string"===typeof a||"number"===typeof a?g.toPt(a):{type:"size",expression:a.expression,
stops:k(a.stops)}}function v(a){var e={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"===typeof a.field)if(a.stops){if(8<a.stops.length)return null;var c=a.stops;for(a=0;8>a;++a){var d=c[Math.min(a,c.length-1)];e.values[a]=d.value;e.opacities[a]=d.opacity}}else return null;else if(a.stops&&0<=a.stops.length)for(c=a.stops&&0<=a.stops.length&&a.stops[0].opacity,a=0;8>a;a++)e.values[a]=Infinity,e.opacities[a]=c;else return null;return e}Object.defineProperty(d,"__esModule",{value:!0});
d.convertVisualVariables=d.getVisualVariablesFields=d.normalizeSizeElement=d.normalizeSizeStops=d.stopToSizeStop=d.getVisualVariableSizeValueRepresentationRatio=void 0;d.getVisualVariableSizeValueRepresentationRatio=function(a,e){if(!a||!e)return a;switch(e){case "radius":case "distance":return 2*a;case "area":return Math.sqrt(a)}return a};d.stopToSizeStop=m;d.normalizeSizeStops=k;d.normalizeSizeElement=l;d.getVisualVariablesFields=function(a){var e=a&&0<a.length?{}:null;e&&a.forEach(function(a){var c=
a.type;a.field&&(e[c]=a.field)});return e};var n=function(a){var e=[],c=[];a=k(a);for(var d=a.length,b=0;6>b;b++){var f=a[Math.min(b,d-1)];e.push(f.value);c.push(null==f.size?r.NAN_MAGIC_NUMBER:g.pt2px(f.size))}return{values:new Float32Array(e),sizes:new Float32Array(c)}};d.convertVisualVariables=function(a){var e=a&&0<a.length?{}:null,c=e?{}:null;if(!e)return{vvFields:e,vvRanges:c};for(var d=0;d<a.length;d++){var b=a[d],f=b.type;b.field&&(e[f]=b.field);if("size"===f)switch(c.size||(c.size={}),t.getTypeOfSizeVisualVariable(b)){case h.WGLVVFlag.SIZE_MINMAX_VALUE:c.size.minMaxValue=
{minDataValue:b.minDataValue,maxDataValue:b.maxDataValue,minSize:l(b.minSize),maxSize:l(b.maxSize)};break;case h.WGLVVFlag.SIZE_SCALE_STOPS:c.size.scaleStops={stops:k(b.stops)};break;case h.WGLVVFlag.SIZE_FIELD_STOPS:if(b.levels){var f={},g;for(g in b.levels)f[g]=n(b.levels[g]);c.size.fieldStops={type:"level-dependent",levels:f}}else c.size.fieldStops=p.__assign({type:"static"},n(b.stops));break;case h.WGLVVFlag.SIZE_UNIT_VALUE:c.size.unitValue={unit:b.valueUnit,valueRepresentation:b.valueRepresentation}}else if("color"===
f){if(b=u.convertVisualVariables([b],{modelSize:null,symbolSize:null,unitInMeters:1,transformation:null}))for(c.color=b.color,b=0;32>b;b+=4)q.premultiplyAlpha(c.color.colors,b,!0)}else"opacity"===f?c.opacity=v(b):"rotation"===f&&(c.rotation={type:b.rotationType})}return{vvFields:e,vvRanges:c}}});
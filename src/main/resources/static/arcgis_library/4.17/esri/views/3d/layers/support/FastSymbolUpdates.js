// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/compilerUtils ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/mat3 ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../renderers/support/utils ../../support/debugFlags".split(" "),function(N,k,C,y,D,E,g,u,F,G,z,H){function n(a){return null!==a&&void 0!==a}function m(a){return"number"===
typeof a}function q(a){return"string"===typeof a}function h(a,b){a&&a.push(b)}function l(a,b,c,d,f){var e=a.minSize,k=a.maxSize;if(a.expression)return h(f,"Could not convert size info: expression not supported"),!1;if(a.useSymbolValue)return a=d.symbolSize[c],b.minSize[c]=a,b.maxSize[c]=a,b.offset[c]=b.minSize[c],b.factor[c]=0,b.type[c]=1,!0;if(n(a.field)){if(n(a.stops)){if(2===a.stops.length&&m(a.stops[0].size)&&m(a.stops[1].size))return A(a.stops[0].size,a.stops[1].size,a.stops[0].value,a.stops[1].value,
b,c),b.type[c]=1,!0;h(f,"Could not convert size info: stops only supported with 2 elements");return!1}if(m(e)&&m(k)&&n(a.minDataValue)&&n(a.maxDataValue))return A(e,k,a.minDataValue,a.maxDataValue,b,c),b.type[c]=1,!0;if(null!=z.meterIn[a.valueUnit])return b.minSize[c]=-Infinity,b.maxSize[c]=Infinity,b.offset[c]=0,b.factor[c]=1/z.meterIn[a.valueUnit],b.type[c]=1,!0;if("unknown"===a.valueUnit)return h(f,"Could not convert size info: proportional size not supported"),!1;h(f,"Could not convert size info: scale-dependent size not supported");
return!1}if(!n(a.field)){if(a.stops&&a.stops[0]&&m(a.stops[0].size))return b.minSize[c]=a.stops[0].size,b.maxSize[c]=a.stops[0].size,b.offset[c]=b.minSize[c],b.factor[c]=0,b.type[c]=1,!0;if(m(e))return b.minSize[c]=e,b.maxSize[c]=e,b.offset[c]=e,b.factor[c]=0,b.type[c]=1,!0}h(f,"Could not convert size info: unsupported variant of sizeInfo");return!1}function A(a,b,c,d,f,e){d=0<Math.abs(d-c)?(b-a)/(d-c):0;f.minSize[e]=0<d?a:b;f.maxSize[e]=0<d?b:a;f.offset[e]=a-c*d;f.factor[e]=d}function I(a,b,c,d){if(a.normalizationField||
a.valueRepresentation)return h(d,"Could not convert size info: unsupported property"),null;var f=a.field;if(null!=f&&!q(f))return h(d,"Could not convert size info: field is not a string"),null;if(!b.size)b.size={field:a.field,minSize:[0,0,0],maxSize:[0,0,0],offset:[0,0,0],factor:[0,0,0],type:[0,0,0]};else if(a.field)if(!b.size.field)b.size.field=a.field;else if(a.field!==b.size.field)return h(d,"Could not convert size info: multiple fields in use"),null;switch(a.axis){case "width":return(f=l(a,b.size,
0,c,d))?b:null;case "height":return(f=l(a,b.size,2,c,d))?b:null;case "depth":return(f=l(a,b.size,1,c,d))?b:null;case "width-and-depth":return(f=l(a,b.size,0,c,d))&&l(a,b.size,1,c,d),f?b:null;case null:case void 0:case "all":return(f=(f=(f=l(a,b.size,0,c,d))&&l(a,b.size,1,c,d))&&l(a,b.size,2,c,d))?b:null;default:return h(d,'Could not convert size info: unknown axis "'+a.axis+'""'),null}}function J(a,b,c){for(var d=0;3>d;++d){var f=b.unitInMeters;1===a.type[d]&&(f*=b.modelSize[d],a.type[d]=2);a.minSize[d]/=
f;a.maxSize[d]/=f;a.offset[d]/=f;a.factor[d]/=f}if(0!==a.type[0])b=0;else if(0!==a.type[1])b=1;else if(0!==a.type[2])b=2;else return h(c,"No size axis contains a valid size or scale"),!1;for(d=0;3>d;++d)0===a.type[d]&&(a.minSize[d]=a.minSize[b],a.maxSize[d]=a.maxSize[b],a.offset[d]=a.offset[b],a.factor[d]=a.factor[b],a.type[d]=a.type[b]);return!0}function B(a,b,c){a[4*b+0]=c.r/255;a[4*b+1]=c.g/255;a[4*b+2]=c.b/255;a[4*b+3]=c.a}function K(a,b,c){if(a.normalizationField)return h(c,"Could not convert color info: unsupported property"),
null;if(q(a.field))if(a.stops){if(8<a.stops.length)return h(c,"Could not convert color info: too many color stops"),null;b.color={field:a.field,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};c=a.stops;for(a=0;8>a;++a){var d=c[Math.min(a,c.length-1)];b.color.values[a]=d.value;B(b.color.colors,a,d.color)}}else return h(c,"Could not convert color info: missing stops or colors"),null;else if(a.stops&&0<=a.stops.length)for(c=a.stops&&0<=a.stops.length&&
a.stops[0].color,b.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},a=0;8>a;a++)b.color.values[a]=Infinity,B(b.color.colors,a,c);else return h(c,"Could not convert color info: no field and no colors/stops"),null;return b}function L(a,b,c){if(a.normalizationField)return h(c,"Could not convert opacity info: unsupported property"),null;if(q(a.field))if(a.stops){if(8<a.stops.length)return h(c,"Could not convert opacity info: too many opacity stops"),
null;b.opacity={field:a.field,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};c=a.stops;for(a=0;8>a;++a){var d=c[Math.min(a,c.length-1)];b.opacity.values[a]=d.value;b.opacity.opacityValues[a]=d.opacity}}else return h(c,"Could not convert opacity info: missing stops or opacities"),null;else if(a.stops&&0<=a.stops.length)for(c=a.stops&&0<=a.stops.length&&a.stops[0].opacity,b.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]},a=0;8>a;a++)b.opacity.values[a]=Infinity,
b.opacity.opacityValues[a]=c;else return h(c,"Could not convert opacity info: no field and no opacities/stops"),null;return b}function v(a,b,c){a=2===c&&"arithmetic"===a.rotationType;b.offset[c]=a?90:0;b.factor[c]=a?-1:1;b.type[c]=1}function M(a,b,c){if(!q(a.field))return h(c,"Could not convert rotation info: field is not a string"),null;if(!b.rotation)b.rotation={field:a.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};else if(a.field)if(!b.rotation.field)b.rotation.field=a.field;else if(a.field!==
b.rotation.field)return h(c,"Could not convert rotation info: multiple fields in use"),null;switch(a.axis){case "tilt":return v(a,b.rotation,0),b;case "roll":return v(a,b.rotation,1),b;case null:case void 0:case "heading":return v(a,b.rotation,2),b;default:return h(c,'Could not convert rotation info: unknown axis "'+a.axis+'""'),null}}function w(a,b,c){if(!a)return null;var d=!b.supportedTypes||!!b.supportedTypes.size,f=!b.supportedTypes||!!b.supportedTypes.color,e=!b.supportedTypes||!!b.supportedTypes.rotation,
k=!!b.supportedTypes&&!!b.supportedTypes.opacity,g=a.reduce(function(a,g){if(!a)return a;if(g.valueExpression)return h(c,"Could not convert visual variables: arcade expressions not supported"),null;switch(g.type){case "size":return d?I(g,a,b,c):a;case "color":return f?K(g,a,c):a;case "opacity":return k?L(g,a,c):null;case "rotation":return e?M(g,a,c):a;default:return C.neverReached(g),null}},{size:null,color:null,opacity:null,rotation:null});return 0<a.length&&g&&!g.size&&!g.color&&!g.opacity&&!g.rotation||
g&&g.size&&!J(g.size,b,c)?null:g}function r(a,b,c){if(!!a!==!!b||a&&a.field!==b.field)return!1;if(a&&"rotation"===c)for(c=0;3>c;c++)if(a.type[c]!==b.type[c]||a.offset[c]!==b.offset[c]||a.factor[c]!==b.factor[c])return!1;return!0}function x(a,b){var c={vvSizeEnabled:!1,vvSizeMinSize:null,vvSizeMaxSize:null,vvSizeOffset:null,vvSizeFactor:null,vvSizeValue:null,vvColorEnabled:!1,vvColorValues:null,vvColorColors:null,vvOpacityEnabled:!1,vvOpacityValues:null,vvOpacityOpacities:null,vvSymbolAnchor:null,
vvSymbolRotationMatrix:null},d=a&&null!=a.size;a&&a.size?(c.vvSizeEnabled=!0,c.vvSizeMinSize=a.size.minSize,c.vvSizeMaxSize=a.size.maxSize,c.vvSizeOffset=a.size.offset,c.vvSizeFactor=a.size.factor):a&&d&&(c.vvSizeValue=b.transformation.scale);if(a&&d){c.vvSymbolAnchor=b.transformation.anchor;c.vvSymbolRotationMatrix=E.mat3f64.create();g.mat4.identity(p);var f=b.transformation.rotation[2],d=b.transformation.rotation[0],e=b.transformation.rotation[1];b=p;void 0===b&&(b=u.mat4f64.create());f=f||0;d=
d||0;e=e||0;0!==f&&g.mat4.rotateZ(b,b,-f/180*Math.PI);0!==d&&g.mat4.rotateX(b,b,d/180*Math.PI);0!==e&&g.mat4.rotateY(b,b,e/180*Math.PI);D.mat3.fromMat4(c.vvSymbolRotationMatrix,p)}a&&a.color&&(c.vvColorEnabled=!0,c.vvColorValues=a.color.values,c.vvColorColors=a.color.colors);a&&a.opacity&&(c.vvOpacityEnabled=!0,c.vvOpacityValues=a.opacity.values,c.vvOpacityOpacities=a.opacity.opacityValues);return c}Object.defineProperty(k,"__esModule",{value:!0});k.evaluateModelTransformScale=k.evaluateModelTransform=
k.getMaterialParams=k.updateFastSymbolUpdatesState=k.initFastSymbolUpdatesState=k.convertVisualVariables=void 0;k.convertVisualVariables=w;k.initFastSymbolUpdatesState=function(a,b){return!a||H.DISABLE_FAST_UPDATES?{enabled:!1}:(a=w(a.visualVariables,b))?{enabled:!0,visualVariables:a,materialParameters:x(a,b),requiresShaderTransformation:a&&null!=a.size}:{enabled:!1}};k.updateFastSymbolUpdatesState=function(a,b,c){if(!b||!a.enabled)return!1;var d=a.visualVariables;b=w(b.visualVariables,c);if(!(b&&
r(d.size,b.size,"size")&&r(d.color,b.color,"color")&&r(d.rotation,b.rotation,"rotation")&&r(d.opacity,b.opacity,"opacity")))return!1;a.visualVariables=b;a.materialParameters=x(b,c);a.requiresShaderTransformation=b&&null!=b.size;return!0};k.getMaterialParams=x;var t;(function(a){var b=u.mat4f64.create(),c=G.vec3f64.create();a.evaluateModelTransform=function(a,f,e){if(!a.vvSizeEnabled)return e;g.mat4.copy(b,e);e=a.vvSymbolRotationMatrix;g.mat4.set(p,e[0],e[1],e[2],0,e[3],e[4],e[5],0,e[6],e[7],e[8],
0,0,0,0,1);g.mat4.multiply(b,b,p);for(e=0;3>e;++e)c[e]=y.clamp(a.vvSizeOffset[e]+f[0]*a.vvSizeFactor[e],a.vvSizeMinSize[e],a.vvSizeMaxSize[e]);g.mat4.scale(b,b,c);g.mat4.translate(b,b,a.vvSymbolAnchor);return b};a.evaluateModelTransformScale=function(a,b,c){if(!b.vvSizeEnabled)return F.vec3.set(a,1,1,1);for(var d=0;3>d;++d)a[d]=y.clamp(b.vvSizeOffset[d]+c[0]*b.vvSizeFactor[d],b.vvSizeMinSize[d],b.vvSizeMaxSize[d]);return a}})(t||(t={}));var p=u.mat4f64.create();k.evaluateModelTransform=t.evaluateModelTransform;
k.evaluateModelTransformScale=t.evaluateModelTransformScale});
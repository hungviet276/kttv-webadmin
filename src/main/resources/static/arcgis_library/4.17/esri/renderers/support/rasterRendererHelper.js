// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Color ../../rasterRenderers ../../core/arrayUtils ../../core/maybe ../../core/unitUtils ../../layers/support/RasterInfo ../../renderers/support/ClassBreakInfo ../../renderers/support/colorRampUtils ../../renderers/support/UniqueValueInfo ../../tasks/support/ClassBreaksDefinition ../../tasks/support/generateRendererUtils ../../tasks/support/MultipartColorRamp".split(" "),function(P,f,v,n,p,k,h,H,I,J,x,K,L,M,t){function A(a,b){a=B(a,null===b||void 0===b?void 0:b.variableName);
var d=a.bandCount,c=b||{};b=c.bandIds;c=c.stretchType;if(null===b||void 0===b?0:b.some(function(a){return a>=d}))b=null;var e=h.unwrap(a.statistics),g=h.unwrap(a.histograms);1<d?(b=(null===b||void 0===b?0:b.length)?b:C(a),e=null==e?null:b.map(function(a){return e[a]}),g=null==g?null:b.map(function(a){return g[a]})):b=[0];null==c&&(c=N(a));var f=!1;switch(c){case "none":f=!1;break;case "percent-clip":f=!(null===g||void 0===g?0:g.length);break;default:f=!(null===e||void 0===e?0:e.length)}a=new p.RasterStretchRenderer({stretchType:c,
dynamicRangeAdjustment:f,colorRamp:1===(null===b||void 0===b?void 0:b.length)&&"scientific"===a.dataType?D:null,outputMin:0,outputMax:255,gamma:1===b.length?[1]:[1,1,1],useGamma:!1});"percent-clip"===c?a.maxPercent=a.minPercent=.25:"standard-deviation"===c&&(a.numberOfStandardDeviations=2);if(!f)if("percent-clip"===c)a.histograms=g;else if("min-max"===c||"standard-deviation"===c)a.statistics=e;return a}function B(a,b){if(null==b)return a;var d=h.unwrap(a.statistics),c=h.unwrap(a.histograms),e=a.multidimensionalInfo;
if(b&&h.isSome(e)){var g=k.find(e.variables,function(a){return a.name===b}),e=g.statistics,g=g.histograms;if(null===e||void 0===e?0:e.length)d=e;if(null===g||void 0===g?0:g.length)c=g}return I.fromJSON(v.__assign(v.__assign({},a.toJSON()),{statistics:d,histograms:c}))}function C(a){var b=a.bandCount;if(1===b)return null;if(2===b)return[0];a=a.keyProperties&&a.keyProperties.BandProperties;var d;if(a&&a.length===b){var c=E(a);a=c.red;var e=c.green,g=c.blue,c=c.nir;null!=a&&null!=e&&null!=g?d=[a,e,g]:
null!=c&&null!=a&&null!=e&&(d=[c,a,e])}!d&&3<=b&&(d=[0,1,2]);return d}function E(a){for(var b,d={},c=0;c<a.length;c++){var e=a[c],g=null===(b=e.BandName)||void 0===b?void 0:b.toLowerCase();"red"===g?d.red=c:"green"===g?d.green=c:"blue"===g?d.blue=c:"nearinfrared"===g||"nearinfrared_1"===g||"nir"===g?d.nir=c:e.WavelengthMax&&e.WavelengthMin&&(g=e.WavelengthMin,e=e.WavelengthMax,null==d.blue&&410<=g&&480>=g&&480<=e&&540>=e?d.blue=c:null==d.green&&490<=g&&560>=g&&560<=e&&610>=e?d.green=c:null==d.red&&
595<=g&&670>=g&&660<=e&&730>=e?d.red=c:null==d.nir&&700<=g&&860>=g&&800<=e&&950>=e&&(d.nir=c))}return d}function N(a){var b="percent-clip",d=a.pixelType,c=a.dataType,e=a.histograms;a=a.statistics;"u8"!==d||"processed"!==c&&h.isSome(e)&&h.isSome(a)?"u8"===d||"elevation"===c||"scientific"===c?b="min-max":h.isSome(e)?b="percent-clip":h.isSome(a)&&(b=b="min-max"):b="none";return b}function F(a,b){if(!q(a,b))return null;a=a.attributeTable;var d=r(a,b),c=l(a,"red"),e=l(a,"green"),g=l(a,"blue"),f=[],h=new Set,
k=!!(c&&e&&g);a.features.forEach(function(a){var b=a.attributes[d.name];h.has(a.attributes[d.name])||null==b||(h.add(b),f.push(new K({value:a.attributes[d.name],label:a.attributes[d.name],symbol:{type:"simple-fill",style:"solid",outline:null,color:k?new n([a.attributes[c.name],a.attributes[e.name],a.attributes[g.name],1]):new n([0,0,0,0])}})))});if(!k){var w=x.convertColorRampToColormap(O,f.length);f.forEach(function(a,b){return a.symbol.color=new n(w[b].slice(1,4))})}return new p.UniqueValueRenderer({field:d.name,
uniqueValueInfos:f})}function r(a,b){var d=k.find(a.fields,function(a){return"string"===a.type&&(b===a.name.toLowerCase()||-1<a.name.toLowerCase().indexOf("class"))});d||(d=k.find(a.fields,function(a){return"string"===a.type}))||(d=l(a,"value"));return d}function l(a,b){return k.find(a.fields,function(a){return a.name.toLowerCase()===b})}function q(a,b){var d=a.attributeTable;a=a.bandCount;return!h.isSome(d)||1<a||b&&null==k.find(d.fields,function(a){return a.name.toLowerCase()===b.toLowerCase()})?
!1:!0}function m(a){var b=a.bandCount;a=a.colormap;return h.isSome(a)&&a.length&&1===b}function G(a){if(!m(a))return null;var b,d=a.attributeTable;a=a.colormap;if(h.isSome(d)){var c=l(d,"value"),e=r(d);"string"===e.type&&(b={},d.features.forEach(function(a){a=a.attributes;b[a[c.name]]=e?a[e.name]:a[c.name]}))}return p.RasterColormapRenderer.createFromColormap(h.unwrap(a),b)}function u(a){return"elevation"===a.dataType}function y(a){var b=a.attributeTable;return 1===a.bandCount&&(h.isSome(b)||h.isSome(a.histograms))}
Object.defineProperty(f,"__esModule",{value:!0});f.createClassBreaksRenderer=f.isClassBreaksSupported=f.createShadedReliefRenderer=f.isShadedReliefRendererSupported=f.createColormapRenderer=f.isColormapRendererSupported=f.isUVRendererSupported=f.getClassField=f.createUVRenderer=f.getWellKnownBandIndexes=f.getDefaultBandCombination=f.createStretchRenderer=f.getDefaultInterpolation=f.getSupportedRendererTypes=f.createDefaultRenderer=void 0;var D=t.fromJSON({type:"multipart",colorRamps:[{fromColor:[0,
0,255],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]}),O=t.fromJSON(x.PREDEFINED_JSON_COLOR_RAMPS[0]);f.createDefaultRenderer=function(a,b){var d=a.attributeTable,c=a.colormap,e=a.dataType;return"vector-uv"===e||"vector-magdir"===e?new p.VectorFieldRenderer:h.isSome(c)&&(c=G(a),h.isSome(c))||h.isSome(d)&&(c=F(a),h.isSome(c))?c:A(a,b)};f.getSupportedRendererTypes=function(a){var b=["raster-stretch"];m(a)&&b.push("raster-colormap");q(a)&&
b.push("unique-value");y(a)&&b.push("class-breaks");u(a)&&b.push("raster-shaded-relief");return b};f.getDefaultInterpolation=function(a,b,d){var c=k.find(["nearest","bilinear","cubic","majority"],function(a){return a===(null===d||void 0===d?void 0:d.toLowerCase())});return"Map"===b?null!==c&&void 0!==c?c:"bilinear":"thematic"===a.dataType||a.attributeTable||a.colormap?"nearest"===c||"majority"===c?c:"nearest":null!==c&&void 0!==c?c:"bilinear"};f.createStretchRenderer=A;f.getDefaultBandCombination=
C;f.getWellKnownBandIndexes=E;f.createUVRenderer=F;f.getClassField=r;f.isUVRendererSupported=q;f.isColormapRendererSupported=m;f.createColormapRenderer=G;f.isShadedReliefRendererSupported=u;f.createShadedReliefRenderer=function(a,b){if(!u(a))return null;a=a.extent;a=a.width*H.getMetersPerUnitForSR(a.spatialReference);return new p.RasterShadedReliefRenderer({hillshadeType:null!==b&&void 0!==b?b:"multi-directional",scalingType:5E6<a?"adjusted":"none"})};f.isClassBreaksSupported=y;f.createClassBreaksRenderer=
function(a,b){a=B(a,null===b||void 0===b?void 0:b.variableName);var d=a.attributeTable;if(!y(a))return null;var c=h.isSome(a.histograms)?a.histograms[0]:null,e=(null===b||void 0===b?void 0:b.numClasses)||4,g=null===b||void 0===b?void 0:b.colors;if(g&&g.length!==e)return null;var f=(null===b||void 0===b?void 0:b.field)||"value",l=[];if(h.isSome(d)){var n=k.find(d.fields,function(a){return"count"===a.name.toLowerCase()}),w=k.find(d.fields,function(a){return a.name.toLowerCase()===f.toLowerCase()}),
f=w.name,q=d.features.length,r=0;d.features.forEach(function(a){return r+=a.attributes[n.name]/q});d.features.forEach(function(a){var b=a.attributes[w.name];a=a.attributes[n.name];if(0<a){a=Math.max(1,Math.round(a/q/r*1E3));for(var c=0;c<a;c++)l.push(b)}})}else{a=a.pixelType;var m=(c.max-c.min)/c.size,u=(a=-1<a.indexOf("s")||-1<a.indexOf("u"))&&1===m?Math.floor(c.min+.5):c.min,v=a&&1===m?Math.floor(c.max-.5):c.max,z=c.size,t=0;c.counts.forEach(function(a){return t+=a/z});c.counts.forEach(function(a,
b){if(0<a){a=Math.max(1,Math.round(a/z/t*1E3));b=0===b?u:b===z-1?v:c.min+m*(b+.5);for(var d=0;d<a;d++)l.push(b)}})}a=M.createGenerateRendererClassBreaks({values:l,normalizationTotal:null,definition:new L({classificationMethod:(null===b||void 0===b?void 0:b.classificationMethod)||"equal-interval",breakCount:e})});g||(g=x.convertColorRampToColormap((null===b||void 0===b?void 0:b.colorRamp)||D,e,!0).map(function(a){return a.slice(1)}));b=a.classBreaks.map(function(a,b){return new J({minValue:a.minValue,
maxValue:a.maxValue,label:a.label,symbol:{type:"simple-fill",color:g[b]}})});return new p.ClassBreaksRenderer({field:f,classBreakInfos:b})}});
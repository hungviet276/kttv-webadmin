// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(m,b){function e(a){if(a)return null!=a.listMode?a.listMode:void 0}function f(a){if(a)return null!=a.minScale?a.minScale:void 0}function g(a){if(a)return null!=a.maxScale?a.maxScale:void 0}function h(a){if(a&&a.listMode!==k.hideChildren&&"wmts"!==a.type)return"group"===a.type?"layers":"sublayers"}function l(a,b){a&&a.sort(function(a,d){a=b.indexOf(a.uid);d=b.indexOf(d.uid);return a>d?-1:a<d?1:0})}Object.defineProperty(b,"__esModule",{value:!0});b.findSelectedItem=
b.getItemLayers=b.sortChildLayersToIds=b.sortLayersToIds=b.isLayerOutsideScaleRange=b.canDisplayLayer=b.canSortSublayers=b.getNormalizedChildLayerProperty=b.findLayerVisibilityMode=b.findLayerMaxScale=b.findLayerMinScale=b.findLayerListMode=void 0;var k={hide:"hide",hideChildren:"hide-children"};b.findLayerListMode=e;b.findLayerMinScale=f;b.findLayerMaxScale=g;b.findLayerVisibilityMode=function(a){if(!a)return"inherited";var b=a.get("layer.capabilities.exportMap.supportsSublayerVisibility");if("boolean"===
typeof b)return b?"independent":"inherited";b=a.get("capabilities.exportMap.supportsSublayerVisibility");return"boolean"===typeof b?b?"independent":"inherited":null!=a.visibilityMode?a.visibilityMode:"independent"};b.getNormalizedChildLayerProperty=h;b.canSortSublayers=function(a){a=a&&(a.get("layer.layer")||a.layer);if(!a)return!1;a=a.get("capabilities.exportMap.supportsSublayersChanges");return"boolean"===typeof a?a:!0};b.canDisplayLayer=function(a){return e(a)!==k.hide};b.isLayerOutsideScaleRange=
function(a,b){if(!a||isNaN(b))return!1;var c=f(a);a=g(a);c=!isNaN(c)&&0<c&&b>c;b=!isNaN(a)&&0<a&&b<a;return c||b};b.sortLayersToIds=l;b.sortChildLayersToIds=function(a,b){if(a=null===a||void 0===a?void 0:a.layer){var c=h(a);c&&(a=a.get(c),l(a,b))}};b.getItemLayers=function(a){return(a=null===a||void 0===a?void 0:a.layer)&&"group"===a.type?a.layers:null};b.findSelectedItem=function(a,b){var c,d=null===(c=a.layer)||void 0===c?void 0:c.uid;return d&&b.find(function(a){var b;return(null===(b=a.layer)||
void 0===b?void 0:b.uid)===d})}});
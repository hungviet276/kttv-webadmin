// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../core/compilerUtils ../../core/Error ../HeightModelInfo ../../layers/support/arcgisLayerUrl".split(" "),function(v,b,l,f,h,r){function t(a,d,c){if(!g(a)||!g(d))return 4;if(null==a||null==d)return 0;if(!c&&a.heightUnit!==d.heightUnit)return 1;if(a.heightModel!==d.heightModel)return 2;switch(a.heightModel){case "gravity-related-height":return 0;case "ellipsoidal":return a.vertCRS===d.vertCRS?0:3;default:return 4}}function g(a){return null==a||null!=a.heightModel&&null!=
a.heightUnit}function m(a){var d=a.url&&r.parse(a.url);return(null!=(a.spatialReference&&a.spatialReference.vcsWkid)||!d||"ImageServer"!==d.serverType)&&"heightModelInfo"in a&&a.heightModelInfo?a.heightModelInfo:n(a)?h.deriveUnitFromSR(u,a.spatialReference):null}function p(a){if("unknown"===a.type||!("capabilities"in a))return!1;switch(a.type){case "csv":case "feature":case "geojson":case "ogc-feature":return!0;case "imagery":case "map-image":case "tile":case "vector-tile":case null:return!1;default:return l.neverReached(a),
!1}}function n(a){return p(a)?!!(a.capabilities&&a.capabilities.data&&a.capabilities.data.supportsZ):q(a)}function q(a){switch(a.type){case "building-scene":case "elevation":case "integrated-mesh":case "point-cloud":case "scene":return!0;case "base-dynamic":case "base-elevation":case "base-tile":case "bing-maps":case "csv":case "geojson":case "feature":case "geo-rss":case "graphics":case "group":case "imagery":case "imagery-tile":case "kml":case "map-image":case "map-notes":case "ogc-feature":case "open-street-map":case "route":case "stream":case "tile":case "unknown":case "unsupported":case "vector-tile":case "wcs":case "web-tile":case "wms":case "wmts":case null:break;
default:l.neverReached(a)}return!1}Object.defineProperty(b,"__esModule",{value:!0});b.mayHaveHeightModelInfo=b.deriveHeightModelInfoFromLayer=b.rejectLayerError=b.validateWebSceneError=void 0;b.validateWebSceneError=function(a,d){if(!a)return null;if(!g(a))return new f("webscene:unsupported-height-model-info","The vertical coordinate system of the scene is not supported",{heightModelInfo:a});var c=a.heightUnit;a=h.deriveUnitFromSR(a,d).heightUnit;return c!==a?new f("webscene:incompatible-height-unit",
"The vertical units of the scene ("+c+") must match the horizontal units of the scene ("+a+")",{verticalUnit:c,horizontalUnit:a}):null};b.rejectLayerError=function(a,d,c){var b=m(a),g=t(b,d,c),e=null;if(b){var k=h.deriveUnitFromSR(b,a.spatialReference).heightUnit;c||k===b.heightUnit||(e=new f("layerview:unmatched-height-unit","The vertical units of the layer must match the horizontal units ("+k+")",{horizontalUnit:k}))}if(!("heightModelInfo"in a&&null!=a.heightModelInfo||null!=a.spatialReference)&&
n(a)||4===g||e)return new f("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:b,error:e});e=null;switch(g){case 1:a=b.heightUnit||"unknown";c=d.heightUnit||"unknown";e=new f("layerview:incompatible-height-unit","The vertical units of the layer ("+a+") must match the vertical units of the scene ("+c+")",{layerUnit:a,sceneUnit:c});break;case 2:a=b.heightModel||"unknown";c=d.heightModel||"unknown";e=new f("layerview:incompatible-height-model",
"The height model of the layer ("+a+") must match the height model of the scene ("+c+")",{layerHeightModel:a,sceneHeightModel:c});break;case 3:a=b.vertCRS||"unknown",c=d.vertCRS||"unknown",e=new f("layerview:incompatible-vertical-datum","The vertical datum of the layer ("+a+") must match the vertical datum of the scene ("+c+")",{layerDatum:a,sceneDatum:c})}return e?new f("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:b,
sceneHeightModelInfo:d,error:e}):null};b.deriveHeightModelInfoFromLayer=m;b.mayHaveHeightModelInfo=function(a){return null!=a.layers||q(a)||p(a)||"heightModelInfo"in a};var u=new h({heightModel:"gravity-related-height"})});
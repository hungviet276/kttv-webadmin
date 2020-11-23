// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../TimeExtent ../../core/accessorSupport/utils ../../core/accessorSupport/write ../../support/persistableUrlUtils ../../symbols/support/ElevationInfo ../../webdoc/support/opacityUtils".split(" "),function(m,a,c,f,g,h,k,l,d){Object.defineProperty(a,"__esModule",{value:!0});a.combinedViewLayerTimeExtentProperty=a.opacityDrawingInfo=a.opacity=a.readOnlyService=a.elevationInfo=a.legendEnabled=a.url=a.labelsVisible=a.popupEnabled=a.screenSizePerspectiveEnabled=void 0;a.screenSizePerspectiveEnabled=
{type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader:function(a,b){if(null==b.screenSizePerspective&&"defaults"===this.originOf("screenSizePerspectiveEnabled"))g.getProperties(this).store.set("screenSizePerspectiveEnabled",!1,0);else return b.screenSizePerspective}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer:function(a,b,e,c){"defaults"===this.originOf("screenSizePerspectiveEnabled")&&a?b[e]=a:h.willPropertyWrite(this,"screenSizePerspectiveEnabled",
{},c)&&(b[e]=a)}}}}}};a.popupEnabled={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:function(a,b){return!b.disablePopup}},write:{enabled:!0,writer:function(a,b,c){b[c]=!a}}}};a.labelsVisible={type:Boolean,value:!0,json:{name:"showLabels",write:!0}};a.url={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:k.write}}};a.legendEnabled={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}};a.elevationInfo=
{value:null,type:l,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};a.readOnlyService=function(a){return{type:a,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}};a.opacity={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}};a.opacityDrawingInfo=c.__assign(c.__assign({},a.opacity),{json:c.__assign(c.__assign({},a.opacity.json),{origins:{"web-document":c.__assign(c.__assign({},a.opacity.json.origins["web-document"]),
{write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}})},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:function(a,b,c){if((!c||"service"===c.origin)&&b.drawingInfo&&void 0!==b.drawingInfo.transparency)return d.transparencyToOpacity(b.drawingInfo.transparency);if(b.layerDefinition&&b.layerDefinition.drawingInfo&&void 0!==b.layerDefinition.drawingInfo.transparency)return d.transparencyToOpacity(b.layerDefinition.drawingInfo.transparency)}}})});
a.combinedViewLayerTimeExtentProperty={type:f,dependsOn:"view.timeExtent layer.timeExtent layer.timeInfo layer.timeOffset layer.timeOffset.value layer.timeOffset.unit layer.useViewTime".split(" "),readOnly:!0,get:function(){var a,b;if(null===(a=this.layer)||void 0===a||!a.timeInfo)return null;a=null===(b=this.view)||void 0===b?void 0:b.timeExtent;b=this.layer.timeExtent;b=this.layer.useViewTime?a&&b?a.intersection(b):a||b:b;if(!b||b.isEmpty)return b;b=(a=this.layer.timeOffset)?b.offset(-a.value,a.unit):
b;a=this._get("timeExtent");return b.equals(a)?a:b}}});
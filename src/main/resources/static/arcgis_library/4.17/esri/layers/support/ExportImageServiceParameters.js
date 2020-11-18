// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators ./imageryRendererUtils ./MosaicRule ./RasterFunction".split(" "),function(g,e,d,h,m,c,f,n,p){Object.defineProperty(e,"__esModule",{value:!0});e.ExportImageServiceParameters=void 0;var k=new h.default({RSP_NearestNeighbor:"nearest",RSP_BilinearInterpolation:"bilinear",RSP_CubicConvolution:"cubic",RSP_Majority:"majority"}),l=new h.default({esriNoDataMatchAny:"any",esriNoDataMatchAll:"all"});
g=function(e){function a(){var b=null!==e&&e.apply(this,arguments)||this;b.layer=null;b.adjustAspectRatio=void 0;b.bandIds=void 0;b.compression=void 0;b.compressionQuality=void 0;b.compressionTolerance=.01;b.format=null;b.interpolation=null;b.noData=null;b.noDataInterpretation=void 0;b.pixelType=void 0;b.lercVersion=2;return b}d.__extends(a,e);a.prototype.writeAdjustAspectRatio=function(b,q,a){10.3>this.layer.version||(q[a]=b)};a.prototype.writeCompressionQuality=function(b,a,c){this.format&&-1<this.format.toLowerCase().indexOf("jpg")&&
null!=b&&(a[c]=b)};a.prototype.writeCompressionTolerance=function(b,a,c){"lerc"===this.format&&null!=b&&(a[c]=b)};a.prototype.writeLercVersion=function(b,a,c){"lerc"===this.format&&10.5<=this.layer.version&&(a[c]=b)};Object.defineProperty(a.prototype,"version",{get:function(){var b=this.layer;b.bandIds;b.format;b.compressionQuality;b.compressionTolerance;b.interpolation;b.noData;b.noDataInterpretation;b.mosaicRule;b.renderingRule;b.adjustAspectRatio;b.pixelFilter;b.renderer;b.definitionExpression;
return(this._get("version")||0)+1},set:function(b){this._set("version",b)},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"mosaicRule",{get:function(){var b=this.layer,a=b.mosaicRule,b=b.definitionExpression;a?b&&b!==a.where&&(a=a.clone(),a.where=b):b&&(a=new n({where:b}));return a},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"renderingRule",{get:function(){var b=this.layer,a=b.renderingRule,c=b.pixelFilter,b=!b.format||-1<b.format.indexOf("jpg")||-1<b.format.indexOf("png"),
a=this._addResampleRasterFunction(a);b&&!c&&(a=this.combineRendererWithRenderingRule());return a},enumerable:!1,configurable:!0});a.prototype.combineRendererWithRenderingRule=function(){var b,a=this.layer,c=a.rasterInfo,d=a.renderingRule,e=a.renderer;return e&&f.isSupportedRendererType(e)?f.combineRenderingRules(f.convertRendererToRenderingRule(e,{rasterAttributeTable:c.attributeTable,pixelType:c.pixelType,dataType:c.dataType,bandProperties:null===(b=c.keyProperties)||void 0===b?void 0:b.BandProperties,
convertColorRampToColormap:10.6>a.version}),d):d};a.prototype._addResampleRasterFunction=function(b){var a,c=null;"vector-field"===(null===(a=this.layer.renderer)||void 0===a?void 0:a.type)&&(a={},c=this.layer.renderingRule,c&&"Resample"===c.functionName||(c="esriImageServiceDataTypeVector-UV"===this.layer.serviceDataType?7:10,a.rasterFunction="Resample",a.rasterFunctionArguments={ResamplingType:c,InputCellSize:{x:this.layer.pixelSizeX,y:this.layer.pixelSizeY}}),c=p.fromJSON(a));return f.combineRenderingRules(c,
b)};d.__decorate([c.property()],a.prototype,"layer",void 0);d.__decorate([c.property({json:{write:!0}})],a.prototype,"adjustAspectRatio",void 0);d.__decorate([c.writer("adjustAspectRatio")],a.prototype,"writeAdjustAspectRatio",null);d.__decorate([c.property({json:{write:!0}}),c.aliasOf("layer.bandIds")],a.prototype,"bandIds",void 0);d.__decorate([c.property({json:{write:!0}})],a.prototype,"compression",void 0);d.__decorate([c.property({json:{write:!0}}),c.aliasOf("layer.compressionQuality")],a.prototype,
"compressionQuality",void 0);d.__decorate([c.writer("compressionQuality")],a.prototype,"writeCompressionQuality",null);d.__decorate([c.property({json:{write:!0}}),c.aliasOf("layer.compressionTolerance")],a.prototype,"compressionTolerance",void 0);d.__decorate([c.writer("compressionTolerance")],a.prototype,"writeCompressionTolerance",null);d.__decorate([c.property({json:{write:!0}}),c.aliasOf("layer.format")],a.prototype,"format",void 0);d.__decorate([c.property({type:String,json:{read:{reader:k.read},
write:{writer:k.write}}}),c.aliasOf("layer.interpolation")],a.prototype,"interpolation",void 0);d.__decorate([c.property({json:{write:!0}}),c.aliasOf("layer.noData")],a.prototype,"noData",void 0);d.__decorate([c.property({type:String,json:{read:{reader:l.read},write:{writer:l.write}}}),c.aliasOf("layer.noDataInterpretation")],a.prototype,"noDataInterpretation",void 0);d.__decorate([c.property({json:{write:!0}})],a.prototype,"pixelType",void 0);d.__decorate([c.property({json:{write:!0}})],a.prototype,
"lercVersion",void 0);d.__decorate([c.writer("lercVersion")],a.prototype,"writeLercVersion",null);d.__decorate([c.property({type:Number,dependsOn:"layer.adjustAspectRatio layer.bandIds layer.format layer.compressionQuality layer.compressionTolerance layer.definitionExpression layer.interpolation layer.noData layer.noDataInterpretation layer.mosaicRule layer.renderingRule layer.pixelFilter layer.renderer lercVersion pixelType".split(" ")})],a.prototype,"version",null);d.__decorate([c.property({dependsOn:["layer.mosaicRule",
"layer.definitionExpression"],json:{write:!0}})],a.prototype,"mosaicRule",null);d.__decorate([c.property({dependsOn:["layer.renderingRule","layer.renderer","layer.rasterInfo","layer.format"],json:{write:!0}})],a.prototype,"renderingRule",null);return a=d.__decorate([c.subclass("esri.layers.mixins.ExportImageServiceParameters")],a)}(m.JSONSupport);e.ExportImageServiceParameters=g});
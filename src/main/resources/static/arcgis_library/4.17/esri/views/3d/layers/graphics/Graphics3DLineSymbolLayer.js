// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../Color ../../../../geometry ../../../../core/Error ../../../../core/maybe ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec4f64 ../../../../geometry/support/aaBoundingBox ../../../../renderers/support/renderingInfoUtils ./ElevationAligners ./elevationAlignmentUtils ./ElevationContext ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolLayer ./lineUtils ../support/FastSymbolUpdates ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/lineStippleUtils ../../webgl-engine/materials/RibbonLineMaterial".split(" "),
function(u,n,f,A,x,B,h,l,C,D,p,E,F,r,G,H,I,t,v,y,J,K,L,M,z){Object.defineProperty(n,"__esModule",{value:!0});n.Graphics3DLineSymbolLayer=void 0;u=function(n){function b(a,c,b,d){a=n.call(this,a,c,b,d)||this;a._uniformSize=1;return a}f.__extends(b,n);b.prototype.doLoad=function(){return f.__awaiter(this,void 0,void 0,function(){var a;return f.__generator(this,function(c){this._vvConvertOptions={modelSize:[1,1,1],symbolSize:[1,1,1],unitInMeters:1,transformation:{anchor:[0,0,0],scale:[1,1,1],rotation:[0,
0,0]},supportedTypes:{size:!0,color:!0,opacity:!0,rotation:!1}};this._fastUpdates=this._context.renderer&&this._context.renderer.visualVariables&&0<this._context.renderer.visualVariables.length?y.initFastSymbolUpdatesState(this._context.renderer,this._vvConvertOptions):{enabled:!1};if(!this._drivenProperties.size){a=null!=this.symbolLayer.size?this.symbolLayer.size:l.px2pt(1);if(0>a)throw new B("graphics3dlinesymbollayer:invalid-size","Symbol sizes may not be negative values");this._uniformSize=a}return[2]})})};
b.prototype.getMaterialParameters=function(a){var c=h.get(this.symbolLayer,"material","color"),c=this._getCombinedOpacityAndColor(c);a={width:1,color:c,polygonOffset:!0,join:this.symbolLayer.join||"miter",cap:this.symbolLayer.cap||"butt",transparent:1>c[3]||this.needsDrivenTransparentPass,slicePlaneEnabled:this._context.slicePlaneEnabled,isClosed:a,stipplePattern:this.symbolLayer.stipplePattern?M.createStipplePattern(this.symbolLayer.stipplePattern.map(l.pt2px)):null,stippleOffColor:this.symbolLayer.stippleOffColor?
A.toUnitRGBA(this.symbolLayer.stippleOffColor):null,stippleIntegerRepeats:!0};this._drivenProperties.size?this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size&&(a.width=l.pt2px(1)):(c=null!=this.symbolLayer.size?this.symbolLayer.size:l.px2pt(1),a.width=l.pt2px(c));return this._fastUpdates&&this._fastUpdates.visualVariables?f.__assign(f.__assign({},a),this._fastUpdates.materialParameters):a};Object.defineProperty(b.prototype,"lineMaterial",{get:function(){h.isNone(this._lineMaterial)&&
(this._lineMaterial=new z(this.getMaterialParameters(!1),this._getIdHint("_ribbonlinemat")),this._context.stage.add(3,this._lineMaterial));return this._lineMaterial},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"ringMaterial",{get:function(){h.isNone(this._ringMaterial)&&(this._ringMaterial=new z(this.getMaterialParameters(!0),this._getIdHint("_ribbonlinemat")),this._context.stage.add(3,this._ringMaterial));return this._ringMaterial},enumerable:!1,configurable:!0});b.prototype.destroy=
function(){n.prototype.destroy.call(this);h.isSome(this._lineMaterial)&&(this._context.stage.remove(3,this._lineMaterial.id),this._lineMaterial=null);h.isSome(this._ringMaterial)&&(this._context.stage.remove(3,this._ringMaterial.id),this._ringMaterial=null)};b.prototype.getDrivenSize=function(a){return this._drivenProperties.size&&a.size?l.pt2px(E.getDriverAxisSizeValueAny(a.size)):1};b.prototype.getSizeFeatureAttributeData=function(a){return this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size?
t.getAttributeValue(this._fastUpdates.visualVariables.size.field,a):null};b.prototype.getDrivenColor=function(a){var c=D.vec4f64.fromValues(1,1,1,1);this._drivenProperties.color&&a.color&&(c[0]=a.color[0],c[1]=a.color[1],c[2]=a.color[2],0<a.color.length&&(c[3]=a.color[3]));this._drivenProperties.opacity&&a.opacity&&(c[3]=a.opacity);return c};b.prototype.getColorFeatureAttributeData=function(a){return this._fastUpdates.enabled&&this._fastUpdates.visualVariables.color?t.getAttributeValue(this._fastUpdates.visualVariables.color.field,
a):null};b.prototype.getOpacityFeatureAttributeData=function(a){return this._fastUpdates.enabled&&this._fastUpdates.visualVariables.opacity?t.getAttributeValue(this._fastUpdates.visualVariables.opacity.field,a):null};b.prototype.createGraphics3DGraphic=function(a){var c=a.graphic,g=c.geometry;if(!this._validateGeometryType(c.geometry,b.validGeometryTypes,this.symbolLayer.type)||!this._validateGeometry(g))return null;var g="graphic"+c.uid,d=this.setGraphicElevationContext(c,new G.ElevationContext);
this.ensureDrapedStatus("on-the-ground"===d.mode);return this.draped?this._createAsOverlay(a,this._context.layer.uid):this._createAs3DShape(a,d,g,c.uid)};b.prototype.applyRendererDiff=function(a,c){for(var b in a.diff)switch(b){case "visualVariables":if(y.updateFastSymbolUpdatesState(this._fastUpdates,c,this._vvConvertOptions))h.isSome(this._lineMaterial)&&this._lineMaterial.setParameterValues(this._fastUpdates.materialParameters),h.isSome(this._ringMaterial)&&this._ringMaterial.setParameterValues(this._fastUpdates.materialParameters);
else return!1;break;default:return!1}return!0};b.prototype.layerOpacityChanged=function(){h.isSome(this._lineMaterial)&&this.updateMaterialLayerOpacity(this._lineMaterial);h.isSome(this._ringMaterial)&&this.updateMaterialLayerOpacity(this._ringMaterial);return!0};b.prototype.updateMaterialLayerOpacity=function(a){var c=a.getParameters().color,b=h.get(this.symbolLayer,"material","color"),b=this._getCombinedOpacity(b);a.setParameterValues({color:[c[0],c[1],c[2],b],transparent:1>b||this.needsDrivenTransparentPass})};
b.prototype.layerElevationInfoChanged=function(a,c,g){var d=this._elevationContext.mode;g=r.elevationModeChangeUpdateType(b.elevationModeChangeTypes,g,d);if(g!==r.SymbolUpdateType.UPDATE)return g;var m=r.needsElevationUpdates2D(d);return this.updateGraphics3DGraphicElevationInfo(a,c,function(){return m})};b.prototype.slicePlaneEnabledChanged=function(){h.isSome(this._lineMaterial)&&this._lineMaterial.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});h.isSome(this._ringMaterial)&&
this._ringMaterial.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});return!0};b.prototype.physicalBasedRenderingChanged=function(){return!0};b.prototype.pixelRatioChanged=function(){return!0};b.prototype._getGeometryAsPolygonOrPolyline=function(a){switch(a.type){case "extent":if(a instanceof x.Extent)return x.Polygon.fromExtent(a);break;case "polygon":case "polyline":return a}return null};b.prototype._createAs3DShape=function(a,c,b,d){var m=this._getGeometryAsPolygonOrPolyline(a.graphic.geometry),
g="polygon"===m.type?m.rings:m.paths,q=[],e=[],n=[],w=p.create(),k=v.geometryToRenderInfo(m,this._context.elevationProvider,this._context.renderCoordsHelper,c);this._logGeometryCreationWarnings(k,g,"polygon"===m.type?"rings":"paths","LineSymbol3DLayer");for(g=0;g<k.lines.length;g++){var l=k.lines[g],f=l.position,l=l.mapPosition;if(h.isSome(this._context.clippingExtent)&&(p.empty(w),p.expandWithBuffer(w,l),!p.intersectsClippingArea(w,this._context.clippingExtent)))continue;f=this._createGeometryData(a,
f,l,m.type);f=new J(f,b+"path"+g);q.push(f);e.push("polygon"===m.type?this.ringMaterial:this.lineMaterial);n.push(C.mat4f64.IDENTITY)}if(0===q.length)return null;a=new K({geometries:q,materials:e,transformations:n,castShadow:!1,metadata:{layerUid:this._context.layer.uid,graphicUid:d},idHint:b});q=new I(this,a,q,null,null,F.perVertexElevationAligner,c);q.alignedSampledElevation=k.sampledElevation;q.needsElevationUpdates=r.needsElevationUpdates2D(c.mode);return q};b.prototype._createGeometryData=function(a,
b,g,d){var c=this._fastUpdates.enabled&&this._fastUpdates.visualVariables.color;return v.createGeometryData({removeDuplicateStartEnd:"polygon"===d?1:0,uniformSize:this._uniformSize,attributeData:{position:b,mapPosition:g,size:this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size?null:this.getDrivenSize(a.renderingInfo),color:c?null:this.getDrivenColor(a.renderingInfo),sizeFeature:this.getSizeFeatureAttributeData(a.graphic),colorFeature:this.getColorFeatureAttributeData(a.graphic),opacityFeature:this.getOpacityFeatureAttributeData(a.graphic)}})};
b.prototype._createAsOverlay=function(a,b){var c=a.graphic,d=this._getGeometryAsPolygonOrPolyline(c.geometry),m="polygon"===d.type?d.rings:d.paths,h="polygon"===d.type?this.ringMaterial:this.lineMaterial;h.renderPriority=this._renderPriority;var l=[],e=p.create(),n=p.empty(),f=v.geometryToRenderInfoDraped(d,this._context.overlaySR);this._logGeometryCreationWarnings(f,m,"polygon"===d.type?"rings":"paths","LineSymbol3DLayer");if(0<m.length){m=f.lines;for(f=0;f<m.length;++f){var k=m[f];p.empty(e);p.expandWithBuffer(e,
k.position);p.intersectsClippingArea(e,this._context.clippingExtent)&&(p.expand(n,e),k=this._createGeometryData(a,k.position,null,d.type),k=new L(k),k.data.layerUid=b,k.data.graphicUid=c.uid,k.material=h,k.center=[.5*(e[0]+e[3]),.5*(e[1]+e[4]),0],k.bsRadius=.5*Math.sqrt((e[3]-e[0])*(e[3]-e[0])+(e[4]-e[1])*(e[4]-e[1])),l.push(k))}return new H(this,l,n)}return null};b.validGeometryTypes=["polyline","polygon","extent"];b.elevationModeChangeTypes={definedChanged:r.SymbolUpdateType.RECREATE,staysOnTheGround:r.SymbolUpdateType.NONE,
onTheGroundChanged:r.SymbolUpdateType.RECREATE};return b}(t.Graphics3DSymbolLayer);n.Graphics3DLineSymbolLayer=u;n.default=u});
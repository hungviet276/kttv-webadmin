// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/mathUtils ../../../../../../core/mathUtils ../../../../../../core/maybe ../../../../../../core/screenUtils ../../alignmentUtils ../../color ../../definitions ../../enums ../../number ../../collisions/Metric ../../materialKey/MaterialKey ./meshUtils ./segmentUtils ./WGLTextTemplate".split(" "),function(B,C,H,I,J,D,q,l,K,y,E,L,M,m,F,z,N,G,O){Object.defineProperty(C,"__esModule",{value:!0});
var P=J.getLogger("esri.views.2d.engine.webgl.WGLLabelTemplate"),Q=function(g){var e=new Map;return function(a){e.has(a)||e.set(a,g(a));return e.get(a)}}(function(g){var e=0;if(0===g)return Infinity;for(;!(g%2);)e++,g/=2;return e}),A=function(g,e){return m.i1616to32(Math.round(8*g),Math.round(8*e))};B=function(g){function e(a,d,b,c){var f=g.call(this,a,b.font.size,b.haloSize||0,b.color&&E.premultiplyAlphaRGBAArray(b.color)||0,b.haloColor&&E.premultiplyAlphaRGBAArray(b.haloColor)||0,b.horizontalAlignment,
b.verticalAlignment,N.isMapAligned(d.labelPlacement)?1:0,b.font.decoration,!1,b.angle||0,b.xoffset,b.yoffset,b.lineWidth,b.lineHeight,null,null)||this;f._outLineLabelAngle=0;f._refPlacementPadding=0;f._refPlacementDirX=0;f._refPlacementDirY=0;f._refOffsetX=0;f._refOffsetY=0;f.geometryType=M.WGLGeometryType.LABEL;var h;h=!!d.minScale&&c.scaleToZoom(d.minScale)||0;h=D.clamp(h,0,25.5);c=!!d.maxScale&&c.scaleToZoom(d.maxScale)||255;c=D.clamp(c,0,25.5);d=y.getAlignmentFromPlacement(d.labelPlacement);var e=
d[1];f._xAlignD=d[0];f._yAlignD=e;f._minZoom=h;f._maxZoom=c;f._refPlacementPadding=K.pt2px(b.haloSize)+L.TEXT_PLACEMENT_PADDING;a=z.LabelMaterialKey.load(a);a.sdf=!0;f._materialKey=a.data;return f}H.__extends(e,g);e.fromLabelClass=function(a,d){if("center-along"===a.labelPlacement){var b=a.symbol;b.xoffset=0;b.yoffset=0;b.angle=0;b.font.decoration="none"}return new e(a.materialKey,a,a.symbol,d)};Object.defineProperty(e.prototype,"_shapedBox",{get:function(){return l.unwrap(this._shapingInfo).bounds},
enumerable:!1,configurable:!0});e.prototype.bindReferenceTemplate=function(a){var d=y.getXDirection(this._xAlignD),b=y.getYDirection(this._yAlignD);this._refOffsetY=this._refOffsetX=0;if(l.isNone(a))this._refSymbolAndPlacementOffset=m.i8888to32(0,0,Math.floor(127*d+127),Math.floor(127*b+127));else{if("circle"===a.boundsType&&(d||b))var c=Math.sqrt(d*d+b*b),d=d/c,b=b/c;c=Math.max(a.height,a.width);this._refSymbolAndPlacementOffset=m.i8888to32(4*this._refPlacementPadding,c,Math.floor(127*d+127),Math.floor(127*
b+127));this._referenceSize=c;this._refPlacementDirX=d;this._refPlacementDirY=b;this._refOffsetX=a.xOffset;this._refOffsetY=a.yOffset}};e.prototype.writeMesh=function(a,d,b,c,f,e){if(!l.isNone(this._shapingInfo)){var h=[],r=this._shapingInfo;if(b="esriGeometryPolygon"===b.geometryType?b.readLegacyCentroid():b.readLegacyGeometry()){this.current={out:a,outVecs:d,outMetrics:h,inId:f,inShaping:r,zoomLevel:e};switch(c){case "esriGeometryPolyline":this._placeLineLabels(b);break;case "esriGeometryPoint":case "esriGeometryPolygon":this._placePointLabels(b);
break;default:d="Geometry of type "+c+" is not supported",void 0===d&&(d="mapview-labeling"),P.error(I(d,"mapview-labeling"))}a.writeMetrics(this.current.outMetrics)}}};e.prototype._isVisible=function(a,d){var b=Math.floor(10*this.current.zoomLevel);return Math.floor(10*a)<=b&&b<=Math.floor(10*d)};e.prototype._placePointLabels=function(a){var d=this.current;this._writeGlyphs(d.out,d.outVecs,d.inId,a,d.outMetrics)};e.prototype._placeLineLabels=function(a){a=G.smoothPaths(a.paths,this.current.inShaping.bounds.width);
for(var d=this._placeSubdivGlyphs.bind(this),b=(this._shapedBox.width+128)/4,c=0;c<a.length;c++)G.pathDivide(a[c],b,d)};e.prototype._placeSubdivGlyphs=function(a,d,b,c){var f=Q(d);b=q.log2(Math.min(b,c-b)/(4+this._shapedBox.width/4/2));f=Math.max(this._minZoom,this.current.zoomLevel+2-(0===d?b:Math.min(f,b)));b=this._shapedBox.width/2*Math.pow(2,this.current.zoomLevel-f);this.current.inShaping.isMultiline?0===d&&this._placeStraight(a,f):this._placeCurved(a,f,b)};e.prototype._placeStraight=function(a,
d){var b=this.current;this._writeGlyphs(b.out,b.outVecs,b.inId,a,b.outMetrics,d)};e.prototype._placeCurved=function(a,d,b){var c={from:this.current.out.currentDisplayRecordCount(),count:-1},c=new F.default(this.current.inId,c,a.x,a.y,d),f=a.clone(),e=(180/Math.PI*a.angle+180)%360;this._outLineLabelAngle=Math.round(180/Math.PI*a.angle%360*(254/360));this._placeFirst(f,c,d,1);this._placeBack(a,f,c,d,b,1);this._placeForward(a,f,c,d,b,1);this._outLineLabelAngle=Math.round(254/360*e);this._placeFirst(f,
c,d,0);this._placeBack(a,f,c,d,b,0);this._placeForward(a,f,c,d,b,0);c.range.count=this.current.out.currentDisplayRecordCount()-c.range.from;c.bounds&&this.current.outMetrics.push(c)};e.prototype._placeBack=function(a,d,b,c,f,e){var h=a.clone();for(a=a.backwardLength+0;h.prev()&&!(a>=f);)this._placeOnSegment(h,d,b,a,c,-1,e),a+=h.length+0};e.prototype._placeForward=function(a,d,b,c,f,e){var h=a.clone();for(a=a.remainingLength+0;h.next()&&!(a>=f);)this._placeOnSegment(h,d,b,a,c,1,e),a+=h.length+0};e.prototype._placeFirst=
function(a,d,b,c){for(var f=this.current.inShaping,e=f.glyphs,u=this.current.zoomLevel,r=this.current,R=r.out,g=r.outVecs,r=r.inId,t=A(a.x,a.y),v=0;v<e.length;v++){var k=e[v],p=k.x>f.bounds.x?c:1-c,p=Math.max(0,u+q.log2(Math.abs(k.x+k.width/2-f.bounds.x)/(p*a.remainingLength+(1-p)*a.backwardLength+0))),p=Math.max(b,p);k.maxZoom=25;k.angle=a.angle+(1-c)*Math.PI;k.minZoom=p;this._writeGlyph(R,g,k,r,t);c&&this._isVisible(k.minZoom,k.maxZoom)&&d.add(k.bounds,0,0)}};e.prototype._placeOnSegment=function(a,
d,b,c,f,e,u){for(var h=this.current.inShaping.glyphs,g=this.current,m=g.out,t=g.outVecs,g=g.inId,v=this.current.inShaping,k=this.current.zoomLevel,p=A(a.x+a.dx/a.length*-e*c,a.y+a.dy/a.length*-e*c),l=0;l<h.length;l++){var n=h[l],w=n.x>v.bounds.x?u:1-u;if(w&&1===e||!w&&-1===e){var x=Math.abs(n.x+n.width/2-v.bounds.x),w=Math.max(0,k+q.log2(x/c)-.1),x=Math.max(f,k+q.log2(x/(c+a.length+0)));0!==w&&(n.angle=a.angle+(1-u)*Math.PI,n.minZoom=x,n.maxZoom=w,this._writeGlyph(m,t,n,g,p),u&&this._isVisible(n.minZoom,
n.maxZoom)&&b.add(n.bounds,a.x-d.x,a.y-d.y))}}};e.prototype._writeGlyphs=function(a,d,b,c,e,h){void 0===h&&(h=this._minZoom);var f=this._shapingInfo;if(!(l.isNone(f)||0>c.x||512<=c.x||0>c.y||512<=c.y)){var g=a.currentDisplayRecordCount(),m=A(c.x+this._refOffsetX,c.y-this._refOffsetY);c=new F.default(b,{from:g,count:-1},c.x+this._refOffsetX,c.y-this._refOffsetY,h);for(var g=0,q=f.glyphs;g<q.length;g++){var t=q[g];t.minZoom=h;t.maxZoom=this._maxZoom;this._writeGlyph(a,d,t,b,m)}c.range.count=a.currentDisplayRecordCount()-
c.range.from;c.bounds=f.boundsT;a=z.LabelMaterialKey.load(this._materialKey);c.setPlacementOffset(a.vvSizeFieldStops||a.vvSizeMinMaxValue||a.vvSizeScaleStops||a.vvSizeUnitValue,this._referenceSize,this._refPlacementPadding,this._refPlacementDirX,this._refPlacementDirY);e.push(c)}};e.prototype._writeGlyph=function(a,d,b,c,e){var f=z.MaterialKeyBase.load(this._materialKey);f.textureBinding=b.textureBinding;var g=d.indexVector.length,m=d.getVector("geometry").vertexCount,l=this._writeIndices(d);d=this._writeVertex(d,
c,e,b);a.writeDisplayRecord(this.geometryType,f.data,m,d,g,l)};e.prototype._writeVertexCommon=function(a,d,b,c){var e=this._color,g=this._haloColor,l=m.i8888to32(0,0,this._size,this._haloSize);c=m.i8888to32(Math.floor(10*Math.max(c.minZoom,this._minZoom)),Math.floor(10*Math.min(c.maxZoom,this._maxZoom)),this._outLineLabelAngle,0);a.push(b);a.push(d);a.push(e);a.push(g);a.push(l);a.push(this._refSymbolAndPlacementOffset);a.push(c)};return e}(O.default);C.default=B});
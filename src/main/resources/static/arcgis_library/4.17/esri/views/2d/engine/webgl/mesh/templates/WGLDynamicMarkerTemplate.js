// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/maybe ../../../../../../core/screenUtils ../../../../../../core/libs/gl-matrix-2/mat2df32 ../../../../../../core/libs/gl-matrix-2/vec2f32 ../../color ../../definitions ../../number ../../materialKey/MaterialKey ./util ./WGLBaseMarkerTemplate ./WGLDynamicMeshTemplate ../../util/Result".split(" "),function(k,t,y,z,A,B,h,C,D,l,x,m,E,f,F,G,H){Object.defineProperty(t,"__esModule",{value:!0});
var I=D.vec2f32.create(),J=C.mat2df32.create(),K=A.getLogger("esri.views.2d.engine.webgl.WGLDynamicMarkerTemplate");k=function(k){function d(a){var b=k.call(this,a)||this;b._cimMarkerLayer=a;f.isFunction(a.color)?b._dynamicPropertyMap.set("_fillColor",function(b,e,c){return l.premultiplyAlphaRGBA(a.color(b,e,c))}):b._fillColor=l.premultiplyAlphaRGBA(a.color);f.isFunction(a.outlineColor)?b._dynamicPropertyMap.set("_outlineColor",function(b,e,c){return l.premultiplyAlphaRGBA(a.outlineColor(b,e,c))}):
b._outlineColor=l.premultiplyAlphaRGBA(a.outlineColor);f.isFunction(a.size)?b._dynamicPropertyMap.set("_size",function(b,e,c){return h.pt2px(a.size(b,e,c))}):b._size=h.pt2px(a.size);f.isFunction(a.scaleX)?b._dynamicPropertyMap.set("_scaleX",a.scaleX):b._scaleX=a.scaleX;f.isFunction(a.offsetX)?b._dynamicPropertyMap.set("xOffset",function(b,e,c){return h.pt2px(a.offsetX(b,e,c))}):b.xOffset=h.pt2px(a.offsetX);f.isFunction(a.offsetY)?b._dynamicPropertyMap.set("yOffset",function(b,e,c){return h.pt2px(a.offsetY(b,
e,c))}):b.yOffset=h.pt2px(a.offsetY);f.isFunction(a.outlineWidth)?b._dynamicPropertyMap.set("_outlineWidth",function(b,e,c){return h.pt2px(a.outlineWidth(b,e,c))}):b._outlineWidth=h.pt2px(a.outlineWidth);f.isFunction(a.rotation)?b._dynamicPropertyMap.set("_angle",a.rotation):b._angle=a.rotation;b._scaleFactor=B.unwrapOr(a.scaleFactor,1);b._markerPlacement=a.markerPlacement;b.effects=a.effects;b._bitSet=(1===a.alignment?1:0)|(a.colorLocked?1:0)<<1|(a.scaleSymbolsProportionally?1:0)<<3;b._materialKey=
a.materialKey;return b}y.__extends(d,k);d.fromCIMMarker=function(a){return new d(a)};d.prototype.bindFeature=function(a,b,f){var e=this,c=a.readLegacyFeature();this._dynamicPropertyMap.forEach(function(a,d){e[d]=a(c,b,f)});a=this._cimMarkerLayer.materialHash;a="function"===typeof a?a(c,b,f):a;if((a=this._materialCache.get(a))&&H.ok(a.spriteMosaicItem)&&a.spriteMosaicItem){a=a.spriteMosaicItem;var k=this._cimMarkerLayer.sizeRatio,g=a.width/a.height*this._scaleX,d=this._cimMarkerLayer.rotateClockwise?
this._angle:-this._angle,n=this._size,p=n*g,l=this.xOffset,t=this.yOffset;this.xOffset*=this._scaleFactor;this.yOffset*=this._scaleFactor;var q=this._cimMarkerLayer.scaleSymbolsProportionally&&this._cimMarkerLayer.frameHeight?this._size/h.pt2px(this._cimMarkerLayer.frameHeight):1,u=this._outlineWidth*q,v=h.pt2px(this._cimMarkerLayer.referenceSize),w=q=0,r=this._cimMarkerLayer.anchorPoint;r&&(this._cimMarkerLayer.isAbsoluteAnchorPoint?this._size&&(q=-r.x/(this._size*g),w=r.y/this._size):(q=r.x,w=r.y));
this._sizeOutlineWidth=m.i8888to32(Math.round(Math.min(Math.sqrt(128*p),255)),Math.round(Math.min(Math.sqrt(128*n),255)),Math.round(Math.min(Math.sqrt(128*u),255)),Math.round(Math.min(Math.sqrt(128*v),255)));this.angle=d;this._bitestAndDistRatio=m.i8888to32(0,0,this._bitSet,Math.round(Math.min(64*k,255)));g=a.rect.x+x.SPRITE_PADDING;d=a.rect.y+x.SPRITE_PADDING;u=g+a.width;v=d+a.height;this._texUpperLeft=m.i1616to32(g,d);this._texUpperRight=m.i1616to32(u,d);this._texBottomLeft=m.i1616to32(g,v);this._texBottomRight=
m.i1616to32(u,v);g=E.MarkerMaterialKey.load(this._materialKey);g.sdf=a.sdf;g.pattern=!0;g.textureBinding=a.textureBinding;this._materialKey=g.data;this._anchorX=.5-(.5+q)*a.width/a.width;this._anchorY=.5-(.5+w)*a.height/a.height;p=p*k*this._scaleFactor;n=n*k*this._scaleFactor;p*=a.rect.width/a.width;n*=a.rect.height/a.height;this._computedWidth=p;this._computedHeight=n;this._applyTransformation(J,I);this.xOffset=l;this.yOffset=t}else K.error(z("mapview-cim","Encountered an error when binding feature"))};
return d}(F.default(G.default));t.default=k});
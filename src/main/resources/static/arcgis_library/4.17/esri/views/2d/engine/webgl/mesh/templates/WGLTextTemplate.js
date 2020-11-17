// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/screenUtils ../../alignmentUtils ../../color ../../materialKey/MaterialKey ./WGLBaseTextTemplate ./WGLMeshTemplate ../../util/BidiText".split(" "),function(h,k,m,f,n,g,t,p,q,l){Object.defineProperty(k,"__esModule",{value:!0});h=function(h){function d(a,e,c,d,g,k,l,m,p,q,u,v,w,x,y,z,A,r){void 0===r&&(r=!1);var b=h.call(this)||this;b._xOffset=f.pt2px(v);b._yOffset=f.pt2px(w);b._decoration=p||"none";b._color=d;b._haloColor=g;b._haloSize=Math.min(Math.floor(5*
f.pt2px(f.toPt(c))),127);b._size=Math.min(Math.round(f.pt2px(e)),127);e=Math.min(Math.round(f.pt2px(e)),127);b._referenceSize=Math.round(Math.sqrt(256*e));b._scale=b._size/24;b._angle=u;b._justify=n.getJustification(k||"center");b._xAlignD=n.getXAnchorDirection(k||"center");b._yAlignD=n.getYAnchorDirection(l||"baseline");b._baseline="baseline"===(l||"baseline");b._bitset=(1===m?1:0)|(q?1:0)<<1;a=t.MaterialKeyBase.load(a);a.sdf=!0;b._materialKey=a.data;b._lineWidth=f.pt2px(x)||512;b._lineHeight=y||
1;b._textPlacement=z;b.effects=A;b._isCIM=r;return b}m.__extends(d,h);d.fromText=function(a,e){var c=new d(a.materialKey,a.font.size,a.haloSize||0,a.color&&g.premultiplyAlphaRGBAArray(a.color)||0,a.haloColor&&g.premultiplyAlphaRGBAArray(a.haloColor)||0,a.horizontalAlignment,a.verticalAlignment,0,a.font.decoration,!1,a.angle||0,a.xoffset,a.yoffset,a.lineWidth,a.lineHeight,null,null,!1);a=l.bidiText(a.text)[1];c.bindTextInfo(e,a);return c};d.fromCIMText=function(a,e){var c=a.scaleFactor||1,c=new d(a.materialKey,
a.size*a.sizeRatio*c,a.outlineSize*a.sizeRatio,g.premultiplyAlphaRGBA(a.color),g.premultiplyAlphaRGBA(a.outlineColor),a.horizontalAlignment,a.verticalAlignment,a.alignment,a.decoration,a.colorLocked,a.angle,a.offsetX*a.sizeRatio*c,a.offsetY*a.sizeRatio*c,512,1,a.markerPlacement,a.effects,!0);a=l.bidiText(a.text)[1];c.bindTextInfo(e,a);return c};return d}(p.default(q.default));k.default=h});
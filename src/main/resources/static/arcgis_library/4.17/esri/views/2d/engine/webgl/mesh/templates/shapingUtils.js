// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/libs/gl-matrix-2/mat2d ../../../../../../core/libs/gl-matrix-2/mat2df32 ../../../../../../core/libs/gl-matrix-2/vec2 ../../../../../../core/libs/gl-matrix-2/vec2f32 ../../alignmentUtils ../../number ../../Rect ../../collisions/BoundingBox".split(" "),function(H,t,k,q,x,B,D,m,E,y){Object.defineProperty(t,"__esModule",{value:!0});t.shapeGlyphs=t.ShapingInfo=t.ShapedGlyph=void 0;var F=Math.PI/180,A=function(){function c(a,b,d,g){this._rotationT=q.mat2df32.create();
this.minZoom=this._yBounds=this._xBounds=0;this.maxZoom=255;var c=d.rect,f=new Float32Array(8);a*=g;b*=g;var h=d.code?c.width*g:d.metrics.width,n=d.code?c.height*g:d.metrics.height;f[0]=a;f[1]=b;f[2]=a+h;f[3]=b;f[4]=a;f[5]=b+n;f[6]=a+h;f[7]=b+n;this._data=f;this._setTextureCoords(c);this._scale=g;this._mosaic=d;this.x=a;this.y=b}Object.defineProperty(c.prototype,"width",{get:function(){return this._mosaic.metrics.width*this._scale},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,
"mosaic",{get:function(){return this._mosaic},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"angle",{get:function(){return this._angle},set:function(a){this._angle=a;k.mat2d.identity(this._rotationT);k.mat2d.rotate(this._rotationT,this._rotationT,-a);this._setOffsets(this._data)},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"xTopLeft",{get:function(){return this._data[0]},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"yTopLeft",{get:function(){return this._data[1]},
enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"xBottomRight",{get:function(){return this._data[6]},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"yBottomRight",{get:function(){return this._data[7]},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"texcoords",{get:function(){return this._texcoords},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"textureBinding",{get:function(){return this._mosaic.textureBinding},enumerable:!1,
configurable:!0});Object.defineProperty(c.prototype,"offsets",{get:function(){this._offsets||this._setOffsets(this._data);return this._offsets},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"char",{get:function(){return String.fromCharCode(this._mosaic.code)},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"code",{get:function(){return this._mosaic.code},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"bounds",{get:function(){var a=this._mosaic.metrics,
b=a.width*this._scale,d=Math.abs(a.height)*this._scale,a=new Float32Array(8);a[0]=this.x;a[1]=this.y;a[2]=this.x+b;a[3]=this.y;a[4]=this.x;a[5]=this.y+d;a[6]=this.x+b;a[7]=this.y+d;b=k.mat2d.multiply(q.mat2df32.create(),this._rotationT,this._T);q.mat2df32.transformMany(a,a,b);for(var d=b=Infinity,c=0,e=0,f=0;4>f;f++)var h=a[2*f],n=a[2*f+1],b=Math.min(b,h),d=Math.min(d,n),c=Math.max(c,h),e=Math.max(e,n);a=c-b;e-=d;return new y.default(b+a/2,d+e/2,a,e)},enumerable:!1,configurable:!0});c.prototype.setTransform=
function(a){this._T=a;this._offsets=null};c.prototype._setOffsets=function(a){this._offsets||(this._offsets={upperLeft:0,upperRight:0,lowerLeft:0,lowerRight:0});var b=this._offsets,d=new Float32Array(8),c=k.mat2d.multiply(q.mat2df32.create(),this._rotationT,this._T);q.mat2df32.transformMany(d,a,c);b.upperLeft=m.i1616to32(8*d[0],8*d[1]);b.upperRight=m.i1616to32(8*d[2],8*d[3]);b.lowerLeft=m.i1616to32(8*d[4],8*d[5]);b.lowerRight=m.i1616to32(8*d[6],8*d[7])};c.prototype._setTextureCoords=function(a){var b=
a.x,d=a.y,c=a.width;a=a.height;this._texcoords={upperLeft:m.i1616to32(b,d),upperRight:m.i1616to32(b+c,d),lowerLeft:m.i1616to32(b,d+a),lowerRight:m.i1616to32(b+c,d+a)}};return c}();t.ShapedGlyph=A;var G=function(c,a){return{code:0,page:0,sdf:!0,rect:new E.default(0,0,11,8),textureBinding:a,metrics:{advance:0,height:4,width:c,left:0,top:0}}},C=function(){function c(a,b,c){this._rotation=0;this._decorate(a,b,c);this.glyphs=a;this.bounds=this._createBounds(a);this.isMultiline=1<b.length;this._hasRotation=
0!==c.angle;this._T=this._createGlyphTransform(this.bounds,c);for(b=0;b<a.length;b++)a[b].setTransform(this._T)}c.prototype.setRotation=function(a){if(0!==a||0!==this._rotation){this._rotation=a;var b=this._T;a=k.mat2d.fromRotation(q.mat2df32.create(),a);k.mat2d.multiply(b,a,b);b=0;for(a=this.glyphs;b<a.length;b++)a[b].setTransform(this._T)}};c.prototype._decorate=function(a,b,c){if(c.decoration&&"none"!==c.decoration&&a.length){var d=c.scale;c="underline"===c.decoration?30:20;for(var e=a[0].textureBinding,
f=0;f<b.length;f++){var h=b[f];a.push(new A(h.startX*d,h.startY*d+c*d,G((h.width+h.glyphWidthEnd)*d,e),1))}}};Object.defineProperty(c.prototype,"boundsT",{get:function(){var a=this.bounds,b=x.vec2.set(B.vec2f32.create(),a.x,a.y);x.vec2.transformMat2d(b,b,this._T);return this._hasRotation?(a=Math.max(a.width,a.height),new y.default(b[0],b[1],a,a)):new y.default(b[0],b[1],a.width,a.height)},enumerable:!1,configurable:!0});c.prototype._createBounds=function(a){for(var b=Infinity,c=Infinity,g=0,e=0,f=
0;f<a.length;f++)var h=a[f],b=Math.min(b,h.xTopLeft),c=Math.min(c,h.yTopLeft),g=Math.max(g,h.xTopLeft+h.width),e=Math.max(e,h.yBottomRight);a=g-b;e-=c;return new y.default(b+a/2,c+e/2,a,e)};c.prototype._createGlyphTransform=function(a,b){var c=F*b.angle,g=q.mat2df32.create(),e=B.vec2f32.create();k.mat2d.translate(g,g,x.vec2.set(e,b.xOffset,-b.yOffset));b.isCIM?k.mat2d.rotate(g,g,c):(k.mat2d.translate(g,g,x.vec2.set(e,a.x,a.y)),k.mat2d.rotate(g,g,c),k.mat2d.translate(g,g,x.vec2.set(e,-a.x,-a.y)));
return g};return c}();t.ShapingInfo=C;var z=function(){return function(c,a,b,d,g,e){this.startY=this.startX=this.glyphWidthEnd=0;this.start=Math.max(0,Math.min(a,b));this.end=Math.max(0,Math.max(a,b));this.end<c.length&&(this.glyphWidthEnd=c[this.end].metrics.width);this.width=d;this.yMin=g;this.yMax=e}}();t.shapeGlyphs=function(c,a,b){var d=b.scale,g=[],e=[],f=1/b.scale*b.maxLineWidth,h=a?c.length-1:0,n=a?-1:c.length;a=a?-1:1;for(var l=h,r=0,k=0,p=l,m=p,t=0,u=Infinity,v=0;l!==n;){var w=c[l],q=w.code,
w=w.metrics,x=Math.abs(w.top);10!==q&&32!==q&&(u=Math.min(u,x),v=Math.max(v,x+w.height));10===q?(l!==h&&(e.push(new z(c,p,l-a,r,u,v)),u=Infinity,v=0),r=0,p=l+a,m=l+a,k=0):32===q?(m=l+a,k=0,t=w.advance,r+=w.advance):(r>f&&(m!==p?(q=m-2*a,r-=t,e.push(new z(c,p,q,r-k,u,v)),u=Infinity,v=0,p=m,r=k):(e.push(new z(c,p,l-a,r,u,v)),u=Infinity,v=0,m=p=l,r=0)),r+=w.advance,k+=w.advance);l+=a}f=new z(c,p,l-a,r,u,v);0<=f.start&&f.end<c.length&&e.push(f);for(f=0;f<e.length;f++);h=e[0].yMin;n=b.vAlign;f=b.hAlign;
a=n===D.VAlign.Baseline?1:0;h=(1-a)*-h+(e[e.length-1].yMax+b.lineHeight*(e.length-1)+("underline"===b.decoration?4:0)-h)/2*(a?0:n-1)+-26*(a?1:0);for(n=0;n<e.length;n++)for(l=e[n],k=l.start,a=l.end,l=l.width/2*(f+1)*-1-3,r=n*b.lineHeight+h-3,e[n].startX=l,e[n].startY=r;k<=a;k++)p=c[k],10!==p.code&&(m=new A(l+p.metrics.left,r-p.metrics.top,p,d),l+=p.metrics.advance,g.push(m));return new C(g,e,b)}});
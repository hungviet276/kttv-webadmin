// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/maybe ../../../core/libs/gl-matrix-2/mat3 ../../../core/libs/gl-matrix-2/mat3f32 ../../../core/libs/gl-matrix-2/vec2f32 ../../../layers/support/rasterFunctions/pixelUtils ./DisplayObject ../../webgl/rasterUtils".split(" "),function(l,e,m,n,f,p,h,q,r,k){Object.defineProperty(e,"__esModule",{value:!0});e.RasterBitmap=void 0;var t={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,
1,1],colormap:null,colormapOffset:null,type:"stretch"};l=function(e){function c(a,b,g){void 0===a&&(a=null);void 0===b&&(b=null);void 0===g&&(g=null);var d=e.call(this)||this;d._textureInvalidated=!0;d._memoryUsed=null;d.stencilRef=0;d.coordScale=[1,1];d._symbolizerParameters=null;d.height=null;d.pixelRatio=1;d.resolution=0;d.rotation=0;d._source=null;d.rawPixelData=null;d._suspended=!1;d._bandIds=null;d._interpolation=null;d._transformGrid=null;d.width=null;d.x=0;d.y=0;d.transforms={dvs:p.mat3f32.create()};
d.source=a;d.transformGrid=b;d.interpolation=g;return d}m.__extends(c,e);Object.defineProperty(c.prototype,"symbolizerParameters",{get:function(){return this._symbolizerParameters||t},set:function(a){this._symbolizerParameters=a},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"source",{get:function(){return this._source},set:function(a){this._source=a;this._rasterTexture&&(this._rasterTexture.dispose(),this._memoryUsed=this._rasterTextureBandIds=this._rasterTexture=null)},enumerable:!1,
configurable:!0});Object.defineProperty(c.prototype,"suspended",{get:function(){return this._suspended},set:function(a){this._suspended&&!a&&this.stage&&(this.ready(),this.requestRender());this._suspended=a},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"bandIds",{get:function(){return this._bandIds},set:function(a){this._bandIds=a;this.invalidateTexture()},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"interpolation",{get:function(){return this._interpolation},
set:function(a){this._interpolation=a;this._rasterTexture&&this._rasterTexture.setSamplingMode("bilinear"===a||"cubic"===a?9729:9728)},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"transformGrid",{get:function(){return this._transformGrid},set:function(a){this._transformGrid=a;this._transformGridTexture&&(this._transformGridTexture.dispose(),this._memoryUsed=this._transformGridTexture=null)},enumerable:!1,configurable:!0});c.prototype.invalidateTexture=function(){this._textureInvalidated||
(this._textureInvalidated=!0,this.requestRender())};c.prototype.setTransform=function(a){var b=f.mat3.identity(this.transforms.dvs),g=a.toScreenNoRotation([0,0],this.x,this.y),d=this.resolution/this.pixelRatio/a.resolution,c=d*this.width,d=d*this.height,e=Math.PI*this.rotation/180;f.mat3.translate(b,b,h.vec2f32.fromValues(g[0],g[1]));f.mat3.translate(b,b,h.vec2f32.fromValues(c/2,d/2));f.mat3.rotate(b,b,-e);f.mat3.translate(b,b,h.vec2f32.fromValues(-c/2,-d/2));f.mat3.scaleByVec2(b,b,h.vec2f32.fromValues(c,
d));f.mat3.multiply(this.transforms.dvs,a.displayViewMat3,b)};c.prototype.getTextures=function(){if(!this._rasterTexture)return null;var a=[],b=[];this._transformGridTexture&&(b.push(this._transformGridTexture),a.push("u_transformGrid"));this._rasterTexture&&(b.push(this._rasterTexture),a.push("u_image"));this._colormapTexture&&(b.push(this._colormapTexture),a.push("u_colormap"));return{names:a,textures:b}};c.prototype.getMemoryUsage=function(){if(n.isNone(this._memoryUsed)){var a=this.getTextures();
if(null==a)return 0;this._memoryUsed=a.textures.map(function(b){return b.descriptor.width*b.descriptor.height*4}).reduce(function(b,a){return b+a})}return this._memoryUsed};c.prototype.onAttach=function(){this.invalidateTexture()};c.prototype.onDetach=function(){this.invalidateTexture()};c.prototype.updateTexture=function(a){var b,c,d;a=a.context;this.stage?this._textureInvalidated&&(this._textureInvalidated=!1,b=(b=this.source)&&b.pixels&&0<b.pixels.length,this._createOrDestroyRasterTexture(a),this._rasterTexture&&
(b?(this._updateColormapTexture(a),this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=k.createTransformTexture(a,this.transformGrid))):this._rasterTexture.setData(null)),this.suspended||(this.ready(),this.requestRender())):(null===(b=this._rasterTexture)||void 0===b?void 0:b.dispose(),null===(c=this._transformGridTexture)||void 0===c?void 0:c.dispose(),null===(d=this._colormapTexture)||void 0===d?void 0:d.dispose(),this._colormapTexture=this._transformGridTexture=this._rasterTextureBandIds=
this._rasterTexture=null)};c.prototype._createOrDestroyRasterTexture=function(a){var b=this.source?q.extractBands(this.source,this.bandIds):null;if(b&&b.pixels&&0<b.pixels.length){var c=null==this._rasterTextureBandIds&&null==this.bandIds||this._rasterTextureBandIds&&this.bandIds&&this._rasterTextureBandIds.join("")===this.bandIds.join("");if(this._rasterTexture){if(c)return;this._rasterTexture.dispose();this._rasterTexture=this._rasterTextureBandIds=null}this._rasterTexture=k.createRasterTexture(a,
b,this.interpolation||"nearest");this._rasterTextureBandIds=this.bandIds}else this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=this._rasterTextureBandIds=null)};c.prototype._updateColormapTexture=function(a){var b=this._colormap,c=this.symbolizerParameters.colormap;if(!c)this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormap=null;else if(!b)this._colormapTexture=k.createColormapTexture(a,c),this._colormap=c;else if(c.length!==b.length||
c.some(function(a,c){return a!==b[c]}))this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=k.createColormapTexture(a,c),this._colormap=c};return c}(r.DisplayObject);e.RasterBitmap=l});
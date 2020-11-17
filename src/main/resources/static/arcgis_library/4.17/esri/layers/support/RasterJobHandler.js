// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Error ../../core/promiseUtils ../../core/workers ./PixelBlock".split(" "),function(m,n,a,g,k,l,h){return function(){function d(){this._workerThread=null;this._destroyed=!1}d.prototype.initialize=function(){return a.__awaiter(this,void 0,void 0,function(){var b;return a.__generator(this,function(a){switch(a.label){case 0:return[4,l.open("RasterWorker")];case 1:return b=a.sent(),this._destroyed?b.close():this._workerThread=b,[2]}})})};d.prototype.destroy=function(){this._destroyed=
!0;this._workerThread&&(this._workerThread.close(),this._workerThread=null)};d.prototype.decode=function(b,f){return a.__awaiter(this,void 0,void 0,function(){var c;return a.__generator(this,function(a){switch(a.label){case 0:if(!this._workerThread)throw new g("raster-jobhandler:no-connection","no available worker connection");return[4,this._workerThread.invoke("decode",b,f)];case 1:return c=a.sent(),[2,c?new h(c):null]}})})};d.prototype.symbolize=function(b,f){return a.__awaiter(this,void 0,void 0,
function(){var c,e;return a.__generator(this,function(a){switch(a.label){case 0:if(!this._workerThread)throw new g("raster-jobhandler:no-connection","no available worker connection");c={extent:b.extent&&b.extent.toJSON(),pixelBlock:b.pixelBlock.toJSON(),simpleStretchParams:b.simpleStretchParams,bandIds:b.bandIds};return[4,this._workerThread.invoke("symbolize",c,f)];case 1:return e=a.sent(),[2,e?new h(e):null]}})})};d.prototype.updateSymbolizer=function(b,f){return a.__awaiter(this,void 0,void 0,function(){var c;
return a.__generator(this,function(a){switch(a.label){case 0:if(!this._workerThread)throw new g("raster-jobhandler:no-connection","no available worker connection");c=b&&b.renderer&&"raster-stretch"===b.renderer.type&&b.renderer.histograms;return[4,k.all(this._workerThread.broadcast("updateSymbolizer",{symbolizerJSON:b.toJSON(),histograms:c},f))];case 1:return a.sent(),[2]}})})};d.prototype.stretch=function(b,f){return a.__awaiter(this,void 0,void 0,function(){var c,e;return a.__generator(this,function(a){switch(a.label){case 0:if(!this._workerThread)throw new g("raster-jobhandler:no-connection",
"no available worker connection");if(!b||!b.pixelBlock)return[2,null];c={srcPixelBlock:b.pixelBlock.toJSON(),stretchParams:b.stretchParams};return[4,this._workerThread.invoke("stretch",c,f)];case 1:return e=a.sent(),[2,e?new h(e):null]}})})};d.prototype.mosaicAndTransform=function(b,f){return a.__awaiter(this,void 0,void 0,function(){var c,e;return a.__generator(this,function(d){switch(d.label){case 0:if(!this._workerThread)throw new g("raster-jobhandler:no-connection","no available worker connection");
if(!(b&&b.srcPixelBlocks&&0<b.srcPixelBlocks.length))return[2,null];c=a.__assign(a.__assign({},b),{srcPixelBlocks:b.srcPixelBlocks.map(function(a){return a?a.toJSON():null})});return[4,this._workerThread.invoke("mosaicAndTransform",c,f)];case 1:return e=d.sent(),[2,e?new h(e):null]}})})};return d}()});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/maybe"],function(b,a,d){Object.defineProperty(a,"__esModule",{value:!0});a.RenderTexture=void 0;b=function(){function a(e,a){var c=this;this._textureRep=e;this._textureId=a;this._textureRef=d.applySome(this._textureId,function(a){return c._textureRep.acquire(a)})}a.prototype.dispose=function(){var a=this;this._textureRef=d.applySome(this._textureId,function(e){a._textureRep.release(e)})};a.prototype.bind=function(a,c,b,f,g){d.isSome(this._textureRef)&&
(c.setUniform1i(b,f),a.bindTexture(this._textureRef.glTexture,f),g&&(a=this._textureRef.glTexture,c.setUniform2f(g,a.descriptor.width,a.descriptor.height)))};return a}();a.RenderTexture=b});
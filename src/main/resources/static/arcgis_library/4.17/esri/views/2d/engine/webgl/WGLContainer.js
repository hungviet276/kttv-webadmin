// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/has ../../../../core/maybe ../brushes ../Container ./ClippingInfo ./enums".split(" "),function(g,h,l,q,f,m,n,p,e){Object.defineProperty(h,"__esModule",{value:!0});g=function(d){function a(){var c=null!==d&&d.apply(this,arguments)||this;c.name=c.constructor.name;return c}l.__extends(a,d);Object.defineProperty(a.prototype,"clips",{set:function(c){this._clips=c;this.children.forEach(function(b){return b.clips=c});this._updateClippingInfo()},enumerable:!1,
configurable:!0});a.prototype.doRender=function(c){this.updateTransitionProperties(c.deltaTime);var b=this.createRenderParams(c),k=b.painter,a=b.globalOpacity,d=b.profiler,a=b.drawPhase===e.WGLDrawPhase.LABEL?1:a*this.computedOpacity;d.recordContainerStart(this.name);k.beforeRenderLayer(b,this._clippingInfos?255:0,a);this.updateTransforms(c.state);this.renderChildren(b);k.compositeLayer(b,a);d.recordContainerEnd()};a.prototype.renderChildren=function(c){f.isNone(this._renderPasses)&&(this._renderPasses=
this.prepareRenderPasses(c.painter));for(var b=0,a=this._renderPasses;b<a.length;b++){var d=a[b];try{d.render(c)}catch(r){}}};a.prototype.createRenderParams=function(c){return c};a.prototype.prepareRenderPasses=function(c){var b=this;return[c.registerRenderPass({name:"clip",brushes:[m.brushes.clip],target:function(){return b._clippingInfos},drawPhase:e.WGLDrawPhase.MAP|e.WGLDrawPhase.LABEL|e.WGLDrawPhase.LABEL_ALPHA|e.WGLDrawPhase.DEBUG})]};a.prototype.updateTransforms=function(c){for(var b=0,a=this.children;b<
a.length;b++)a[b].setTransform(c)};a.prototype.onAttach=function(){d.prototype.onAttach.call(this);this._updateClippingInfo()};a.prototype.onDetach=function(){d.prototype.onDetach.call(this);this._updateClippingInfo()};a.prototype._updateClippingInfo=function(){var a=this;f.isSome(this._clippingInfos)&&(this._clippingInfos.forEach(function(a){return a.destroy()}),this._clippingInfos=null);if(this.stage){var b=this._clips;f.isSome(b)&&b.length&&(this._clippingInfos=b.items.map(function(b){return p.default.fromClipArea(a.stage,
b)}));this.requestRender()}};return a}(n.Container);h.default=g});
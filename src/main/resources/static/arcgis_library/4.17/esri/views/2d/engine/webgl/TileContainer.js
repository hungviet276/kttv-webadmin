// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ./enums ./WGLContainer ./brushes/WGLBrushInfo ./brushes/WGLBrushStencil".split(" "),function(g,d,e,f,h,k,l){Object.defineProperty(d,"__esModule",{value:!0});d.sortByLevel=void 0;d.sortByLevel=function(b,a){return 0!==b.key.level-a.key.level?b.key.level-a.key.level:0!==b.key.row-a.key.row?b.key.row-a.key.row:b.key.col-a.key.col};g=function(b){function a(a){var c=b.call(this)||this;c._tileInfoView=a;return c}e.__extends(a,b);a.prototype.renderChildren=function(a){this.sortChildren(d.sortByLevel);
this.setStencilReference();b.prototype.renderChildren.call(this,a)};a.prototype.createRenderParams=function(a){var c=a.state;return e.__assign(e.__assign({},b.prototype.createRenderParams.call(this,a)),{requiredLevel:this._tileInfoView.getClosestInfoForScale(c.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(c.scale)})};a.prototype.prepareRenderPasses=function(a){var c=this,m=a.registerRenderPass({name:"stencil",brushes:[l.default],drawPhase:f.WGLDrawPhase.DEBUG|f.WGLDrawPhase.MAP,
target:function(){return c.getStencilTarget()}}),d=a.registerRenderPass({name:"tileInfo",brushes:[k.default],drawPhase:f.WGLDrawPhase.DEBUG,target:function(){return c.children},has:"esri-tiles-debug"});return e.__spreadArrays(b.prototype.prepareRenderPasses.call(this,a),[m,d])};a.prototype.getStencilTarget=function(){return this.children};a.prototype.updateTransforms=function(a){for(var c=0,b=this.children;c<b.length;c++){var d=b[c],e=this._tileInfoView.getTileResolution(d.key);d.setTransform(a,e)}};
a.prototype.setStencilReference=function(){for(var a=1,c=0,b=this.children;c<b.length;c++)b[c].stencilRef=a++};return a}(h.default);d.default=g});
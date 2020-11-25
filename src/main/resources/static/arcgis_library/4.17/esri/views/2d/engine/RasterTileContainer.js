// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../geometry/support/aaBoundingRect ../engine/brushes ./RasterTile ./webgl/enums ./webgl/TileContainer".split(" "),function(e,b,f,h,k,l,g,m){Object.defineProperty(b,"__esModule",{value:!0});b.RasterTileContainer=void 0;e=function(c){function a(){return null!==c&&c.apply(this,arguments)||this}f.__extends(a,c);a.prototype.createTile=function(d){var a=this._tileInfoView.getTileBounds(h.create(),d);return new l.RasterTile(d,a,this._tileInfoView.tileInfo.size)};a.prototype.destroyTile=
function(){};a.prototype.prepareRenderPasses=function(a){var d=this,b=a.registerRenderPass({name:"bitmap (tile)",brushes:[k.brushes.raster],target:function(){return d.children.map(function(a){return a.bitmap})},drawPhase:g.WGLDrawPhase.MAP});return f.__spreadArrays(c.prototype.prepareRenderPasses.call(this,a),[b])};a.prototype.doRender=function(a){this.visible&&a.drawPhase===g.WGLDrawPhase.MAP&&c.prototype.doRender.call(this,a)};return a}(m.default);b.RasterTileContainer=e});
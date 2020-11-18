// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/accessorSupport/decorators","../engine/BitmapTileContainer"],function(f,a,c,d,e){Object.defineProperty(a,"__esModule",{value:!0});a.BitmapTileLayerView2D=void 0;a.BitmapTileLayerView2D=function(a){return function(a){function b(){return null!==a&&a.apply(this,arguments)||this}c.__extends(b,a);b.prototype.attach=function(){this.view.timeline.record(this.layer.title+" (BitmapTileLayer) Attach");this._bitmapView=new e.BitmapTileContainer(this._tileInfoView);
this.container.addChild(this._bitmapView)};b.prototype.detach=function(){this.container.removeChild(this._bitmapView);this._bitmapView.removeAllChildren()};return b=c.__decorate([d.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],b)}(a)}});
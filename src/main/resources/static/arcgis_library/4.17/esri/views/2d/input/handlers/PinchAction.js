// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../input/DragEventSeparator","../../../input/InputHandler"],function(f,a,g,h,k){Object.defineProperty(a,"__esModule",{value:!0});a.PinchRotateAndZoom=void 0;f=function(a){function d(d){var b=a.call(this,!0)||this;b.view=d;b.registerIncoming("drag",function(a){return b._handleDrag(a)});b.registerIncoming("pointer-down",function(){return b.stopMomentumNavigation()});var e=b.view.mapViewNavigation;b.dragEventSeparator=new h.DragEventSeparator({start:function(a,
c){e.pinch.begin(b.view,c.data);c.stopPropagation()},update:function(a,c){e.pinch.update(b.view,c.data);c.stopPropagation()},end:function(a,c){e.pinch.end(b.view);c.stopPropagation()},condition:function(a){return 2<=a}});return b}g.__extends(d,a);d.prototype._handleDrag=function(a){this.dragEventSeparator.handle(a)};d.prototype.stopMomentumNavigation=function(){this.view.mapViewNavigation.pinch.stopMomentumNavigation()};return d}(k.InputHandler);a.PinchRotateAndZoom=f});
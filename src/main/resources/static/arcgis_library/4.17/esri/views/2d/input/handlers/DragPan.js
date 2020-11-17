// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../input/DragEventSeparator ../../../input/InputHandler ../../../input/handlers/support".split(" "),function(e,a,g,h,k,l){Object.defineProperty(a,"__esModule",{value:!0});a.DragPan=void 0;e=function(a){function d(d,m,e){var b=a.call(this,!0)||this;b.view=d;b.pointerAction=m;b.registerIncoming("drag",e,function(a){return b._handleDrag(a)});b.registerIncoming("pointer-down",function(){return b.stopMomentumNavigation()});var f=b.view.mapViewNavigation;b.dragEventSeparator=
new h.DragEventSeparator({start:function(a,c){f.pan.begin(b.view,c.data);c.stopPropagation()},update:function(a,c){f.pan.update(b.view,c.data);c.stopPropagation()},end:function(a,c){f.pan.end(b.view,c.data);c.stopPropagation()},condition:function(a,c){return 1===a&&l.eventMatchesPointerAction(c.data,b.pointerAction)}});return b}g.__extends(d,a);d.prototype._handleDrag=function(a){var d=this.view.mapViewNavigation;d.pinch.zoomMomentum||d.pinch.rotateMomentum?this.stopMomentumNavigation():this.dragEventSeparator.handle(a)};
d.prototype.stopMomentumNavigation=function(){this.view.mapViewNavigation.pan.stopMomentumNavigation()};return d}(k.InputHandler);a.DragPan=e});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/clock ../../../core/MapUtils ../InputHandler ./support".split(" "),function(e,c,k,l,m,n,p){Object.defineProperty(c,"__esModule",{value:!0});c.SingleAndDoubleClick=c.DefaultParameters=void 0;c.DefaultParameters={maximumDoubleClickDelay:250,maximumDoubleClickDistance:10,maximumDoubleTouchDelay:350,maximumDoubleTouchDistance:35};e=function(e){function b(a,g,f,b,h){void 0===a&&(a=c.DefaultParameters.maximumDoubleClickDelay);void 0===g&&(g=c.DefaultParameters.maximumDoubleClickDistance);
void 0===f&&(f=c.DefaultParameters.maximumDoubleTouchDelay);void 0===b&&(b=c.DefaultParameters.maximumDoubleTouchDistance);void 0===h&&(h=l.default);var d=e.call(this,!1)||this;d.maximumDoubleClickDelay=a;d.maximumDoubleClickDistance=g;d.maximumDoubleTouchDelay=f;d.maximumDoubleTouchDistance=b;d._clock=h;d._pointerState=new Map;d._click=d.registerOutgoing("click");d._doubleClick=d.registerOutgoing("double-click");d.registerIncoming("immediate-click",d._handleImmediateClick.bind(d));d.registerIncoming("pointer-drag",
d._handlePointerDrag.bind(d));d.registerIncoming("drag",d._handleDrag.bind(d));return d}k.__extends(b,e);b.prototype.onUninstall=function(){this._pointerState.forEach(function(a){null!=a.doubleClickTimeout&&(a.doubleClickTimeout.remove(),a.doubleClickTimeout=null)})};Object.defineProperty(b.prototype,"hasPendingInputs",{get:function(){return m.someMap(this._pointerState,function(a){return null!=a.doubleClickTimeout})},enumerable:!1,configurable:!0});b.prototype._pointerId=function(a){a=a.native;return"mouse"===
a.pointerType?a.pointerId+":"+a.button:""+a.pointerType};b.prototype._handleImmediateClick=function(a){var b=a.data,f=this._pointerId(b),c=this._pointerState.get(f);if(c){var e="touch"===b.native.pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;p.manhattanDistance(c.event.data,b)>e?(this._clearDoubleClickTimeout(f,!0),this._startClick(a)):(this._clearDoubleClickTimeout(f,!1),this._doubleClick.emit(c.event.data,void 0,c.event.modifiers))}else this._startClick(a)};b.prototype._startClick=
function(a){var b=this,c=this._pointerId(a.data);this._pointerState.set(c,{event:a,doubleClickTimeout:this._clock.setTimeout(function(){return b._doubleClickTimeoutExceeded(c)},"touch"===a.data.native.pointerType?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay)});this.refreshHasPendingInputs()};b.prototype._handlePointerDrag=function(a){a=this._pointerId(a.data.currentEvent);this._clearDoubleClickTimeout(a,!0)};b.prototype._handleDrag=function(a){a=this._pointerId(a.data.pointer);this._clearDoubleClickTimeout(a,
!0)};b.prototype._clearDoubleClickTimeout=function(a,b){var c=this._pointerState.get(a);c&&(c.doubleClickTimeout.remove(),c.doubleClickTimeout=null,b&&this._doubleClickTimeoutExceeded(a),this._pointerState.delete(a),this.refreshHasPendingInputs())};b.prototype._doubleClickTimeoutExceeded=function(a){var b=this._pointerState.get(a);this._click.emit(b.event.data,void 0,b.event.modifiers);b.doubleClickTimeout=null;this._pointerState.delete(a);this.refreshHasPendingInputs()};return b}(n.InputHandler);
c.SingleAndDoubleClick=e});
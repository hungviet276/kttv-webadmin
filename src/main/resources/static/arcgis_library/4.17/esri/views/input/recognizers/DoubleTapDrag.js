// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/clock ../../../core/MapUtils ../../../core/screenUtils ../DragEventSeparator ../InputHandler ./SingleAndDoubleClick ./support".split(" "),function(l,g,m,n,p,h,q,r,k,t){Object.defineProperty(g,"__esModule",{value:!0});g.DoubleTapDrag=void 0;l=function(g){function d(b,a,c,f,d){void 0===b&&(b=k.DefaultParameters.maximumDoubleClickDelay);void 0===a&&(a=k.DefaultParameters.maximumDoubleClickDistance);void 0===c&&(c=k.DefaultParameters.maximumDoubleTouchDelay);
void 0===f&&(f=k.DefaultParameters.maximumDoubleTouchDistance);void 0===d&&(d=n.default);var e=g.call(this,!1)||this;e.maximumDoubleClickDelay=b;e.maximumDoubleClickDistance=a;e.maximumDoubleTouchDelay=c;e.maximumDoubleTouchDistance=f;e._clock=d;e._doubleTapDragReady=!1;e._doubleTapDragActive=!1;e._dragStartCenter=h.createScreenPoint(0,0);e._pointerState=new Map;e._doubleTapDrag=e.registerOutgoing("double-tap-drag");e._dragEventSeparator=new q.DragEventSeparator({start:function(b,a){return e._dragStart(b,
a)},update:function(b,a){return e._dragUpdate(a)},end:function(b,a){return e._dragEnd(a)}});e.registerIncoming("drag",function(a){return e._dragEventSeparator.handle(a)});e.registerIncoming("pointer-down",function(a){return e._handlePointerDown(a)});e.registerIncoming("pointer-up",function(){return e._handlePointerUp()});return e}m.__extends(d,g);d.prototype.onUninstall=function(){this._pointerState.forEach(function(b){null!=b.doubleTapTimeout&&(b.doubleTapTimeout.remove(),b.doubleTapTimeout=null)})};
Object.defineProperty(d.prototype,"hasPendingInputs",{get:function(){return p.someMap(this._pointerState,function(b){return null!=b.doubleTapTimeout})},enumerable:!1,configurable:!0});d.prototype._clearPointerDown=function(b){var a=this._pointerState.get(b);a&&(a.doubleTapTimeout.remove(),a.doubleTapTimeout=null,this._pointerState.delete(b),this.refreshHasPendingInputs())};d.prototype._createDoubleTapDragData=function(b,a,c){return{action:b,delta:a,button:c.button,buttons:c.buttons,pointer:c.pointer,
pointers:c.pointers,pointerType:c.pointerType,timestamp:c.timestamp}};d.prototype._dragStart=function(b,a){if(this._doubleTapDragReady&&1===b){this._doubleTapDragReady=!1;this._doubleTapDragActive=!0;var c=a.data;b=a.modifiers;this._dragStartCenter=c.center;c=this._createDoubleTapDragData("begin",h.createScreenPoint(0,0),c);this._doubleTapDrag.emit(c,void 0,b);a.stopPropagation()}};d.prototype._dragUpdate=function(b){if(this._doubleTapDragActive){var a=b.data,c=b.modifiers,f=a.center,f=h.createScreenPoint(f.x-
this._dragStartCenter.x,f.y-this._dragStartCenter.y),a=this._createDoubleTapDragData("update",f,a);this._doubleTapDrag.emit(a,void 0,c);b.stopPropagation()}};d.prototype._dragEnd=function(b){if(this._doubleTapDragActive){var a=b.data,c=b.modifiers,f=a.center,f=h.createScreenPoint(f.x-this._dragStartCenter.x,f.y-this._dragStartCenter.y),a=this._createDoubleTapDragData("end",f,a);this._doubleTapDrag.emit(a,void 0,c);this._doubleTapDragActive=!1;b.stopPropagation()}};d.prototype._handlePointerDown=function(b){var a=
b.data,c=this._pointerId(a),f=this._pointerState.get(c),d=a.native.pointerType;f?(d="touch"===d?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance,this._clearPointerDown(c),t.manhattanDistance(f.event.data,a)>d?this._storePointerDown(b):this._doubleTapDragReady=!0):this._storePointerDown(b)};d.prototype._handlePointerUp=function(){this._doubleTapDragReady=!1};d.prototype._pointerId=function(b){var a=b.native;b=a.pointerId;var c=a.button,a=a.pointerType;return"mouse"===a?b+":"+c:""+a};
d.prototype._storePointerDown=function(b){var a=this,c=b.data,d=c.native.pointerType,g=this._pointerId(c),c=this._clock.setTimeout(function(){return a._clearPointerDown(g)},"touch"===d?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay);this._pointerState.set(g,{event:b,doubleTapTimeout:c});this.refreshHasPendingInputs()};return d}(r.InputHandler);g.DoubleTapDrag=l});
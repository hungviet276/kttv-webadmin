// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../core/has ../../core/screenUtils ../../core/libs/pep/pep ./keys ./gamepad/GamepadSource".split(" "),function(h,f,e,m,n,p,q){Object.defineProperty(f,"__esModule",{value:!0});f.BrowserEventSource=void 0;var k=e("trident"),l=e("edge"),r=e("chrome"),t=e("ff"),u=e("safari");h=function(){function d(a,b){var c=this;this.input=b;this._active={};this._activePointerCaptures=new Set;this._keyDownState=new Set;this._eventId=1;this._browserTouchPanningEnabled=!1;this._element=a;n.applyLocal(a);
a.getAttribute("tabindex")||a.setAttribute("tabindex","0");this._eventHandlers={"key-down":this._handleKey,"key-up":this._handleKey,"pointer-down":this._handlePointer,"pointer-move":this._handlePointerPreventDefault,"pointer-up":this._handlePointerPreventDefault,"pointer-enter":this._handlePointer,"pointer-leave":this._handlePointer,"pointer-cancel":this._handlePointer,"mouse-wheel":this._handleMouseWheel,"pointer-capture-lost":this._handlePointerCaptureLost};this._updateTouchAction();this._element.addEventListener("keydown",
this._preventAltKeyDefault);this._gamepadSource=new q.GamepadSource(a,this.input);this._gamepadSource.onEvent=function(a){return c._callback("gamepad",a)}}d.prototype.destroy=function(){var a=this;this.activeEvents=this._callback=null;this._activePointerCaptures.forEach(function(b){a._releasePointerCaptureSafe(b)});this._gamepadSource&&(this._gamepadSource.destroy(),this._gamepadSource=null);this._activePointerCaptures=null;this._removeTouchAction();this._element.removeEventListener("keydown",this._preventAltKeyDefault)};
Object.defineProperty(d.prototype,"browserTouchPanningEnabled",{get:function(){return this._browserTouchPanningEnabled},set:function(a){this._browserTouchPanningEnabled=a;this._updateTouchAction();this._updateTouchEventHandling()},enumerable:!1,configurable:!0});Object.defineProperty(d.prototype,"onEventReceived",{set:function(a){this._callback=a},enumerable:!1,configurable:!0});Object.defineProperty(d.prototype,"activeEvents",{set:function(a){var b=this,c;for(c in this._active)a&&a.has(c)||(this._element.removeEventListener(g[c],
this._active[c]),delete this._active[c]);a&&a.forEach(function(a){if(!b._active[a]&&g[a]){var c=(b._eventHandlers[a]||b._handleDefault).bind(b,a);b._element.addEventListener(g[a],c);b._active[a]=c}});this._gamepadSource.hasEventListeners=a&&a.has("gamepad")},enumerable:!1,configurable:!0});d.prototype.setPointerCapture=function(a,b){b?(this._element.setPointerCapture(a.pointerId),this._activePointerCaptures.add(a.pointerId)):(this._releasePointerCaptureSafe(a.pointerId),this._activePointerCaptures.delete(a.pointerId))};
d.prototype._updateTouchAction=function(){this._element.classList.remove(this._browserTouchPanningEnabled?"esri-view-surface--touch-none":"esri-view-surface--touch-pan");this._element.classList.add(this._browserTouchPanningEnabled?"esri-view-surface--touch-pan":"esri-view-surface--touch-none")};d.prototype._updateTouchEventHandling=function(){this._browserTouchPanningEnabled?this._element.addEventListener("touchmove",this._preventMultiTouchPanning):this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)};
d.prototype._removeTouchAction=function(){this._element.classList.remove("esri-view-surface--touch-none");this._element.classList.remove("esri-view-surface--touch-pan");this._element.removeEventListener("touchmove",this._preventMultiTouchPanning)};d.prototype._releasePointerCaptureSafe=function(a){try{this._element.hasPointerCapture&&!this._element.hasPointerCapture(a)||this._element.releasePointerCapture(a)}catch(b){}};d.prototype._updateNormalizedPointerLikeEvent=function(a,b){a=m.createScreenPointFromNativeEvent(this._element,
a);d.test.disableSubpixelCoordinates&&(a.x=Math.round(a.x),a.y=Math.round(a.y));b.x=a.x;b.y=a.y;return b};d.prototype._handleKey=function(a,b){var c=p.eventKey(b);c&&"key-up"===a&&this._keyDownState.delete(c);b={native:b,key:c,repeat:c&&this._keyDownState.has(c)};c&&"key-down"===a&&this._keyDownState.add(b.key);this._callback(a,b)};d.prototype._handlePointer=function(a,b){b=this._updateNormalizedPointerLikeEvent(b,{native:b,x:0,y:0,pointerType:b.pointerType,button:b.button,buttons:b.buttons,eventId:this._eventId++});
this._callback(a,b)};d.prototype._handlePointerPreventDefault=function(a,b){var c=this._updateNormalizedPointerLikeEvent(b,{native:b,x:0,y:0,pointerType:b.pointerType,button:b.button,buttons:b.buttons,eventId:this._eventId++});b.preventDefault();this._callback(a,c)};d.prototype._handleMouseWheel=function(a,b){var c=b.deltaY;switch(b.deltaMode){case 0:if(k||l)c=c/document.documentElement.clientHeight*600;break;case 1:c*=30;break;case 2:c*=900}k||l?c*=.7:r||u?c*=.6:t&&(c*=1.375);var d=Math.abs(c);100<
d&&(c=c/d*200/(1+Math.exp(-.02*(d-100))));b=this._updateNormalizedPointerLikeEvent(b,{native:b,x:0,y:0,deltaY:c});this._callback(a,b)};d.prototype._handlePointerCaptureLost=function(a,b){this._activePointerCaptures.delete(b.pointerId);this._handleDefault(a,b)};d.prototype._handleDefault=function(a,b){var c={native:b};b.preventDefault();this._callback(a,c)};d.prototype._preventAltKeyDefault=function(a){"Alt"===a.key&&a.preventDefault()};d.prototype._preventMultiTouchPanning=function(a){1<a.touches.length&&
a.preventDefault()};d.test={disableSubpixelCoordinates:!1};return d}();f.BrowserEventSource=h;var g={"key-down":"keydown","key-up":"keyup","pointer-down":"pointerdown","pointer-up":"pointerup","pointer-move":"pointermove","mouse-wheel":"wheel","pointer-capture-got":"gotpointercapture","pointer-capture-lost":"lostpointercapture","context-menu":"contextmenu","pointer-enter":"pointerenter","pointer-leave":"pointerleave","pointer-cancel":"pointercancel",focus:"focus",blur:"blur"}});
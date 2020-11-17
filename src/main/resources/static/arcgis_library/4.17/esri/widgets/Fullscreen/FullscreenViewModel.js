// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Accessor ../../core/Logger ../../core/accessorSupport/decorators".split(" "),function(k,l,c,g,h,d){var e=h.getLogger("esri.widgets.Fullscreen.FullscreenViewModel");return function(f){function b(a){a=f.call(this,a)||this;a._vendorInfo=null;a._fullscreenStyle="width: 100%; height: 100%;";a.view=null;a._errorHandler=a._errorHandler.bind(a);a._stateHandler=a._stateHandler.bind(a);return a}c.__extends(b,f);b.prototype.destroy=function(){this._removeFullscreenListeners();
this.view=null};Object.defineProperty(b.prototype,"element",{get:function(){return this.get("view.container")},set:function(a){void 0===a?this._clearOverride("element"):this._override("element",a)},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this.element?this._isSupported()?this._isActive()?"active":"ready":"feature-unsupported":"disabled"},enumerable:!1,configurable:!0});b.prototype.enter=function(){this._enterFullscreen()};b.prototype.exit=function(){this._exitFullscreen()};
b.prototype.toggle=function(){this._isActive()?this._exitFullscreen():this._enterFullscreen()};b.prototype._isSupported=function(){this._removeFullscreenListeners();var a=this._getVendorInfo(this.element);this._addFullscreenListeners(a);this._vendorInfo=a;return!!a};b.prototype._isActive=function(){return this._vendorInfo?!!document[this._vendorInfo.propertyName]:!1};b.prototype._stateHandler=function(){this.notifyChange("state");"active"===this.state?this._addStyle():this._removeStyle()};b.prototype._errorHandler=
function(a){e.error("fullscreen request failed",a)};b.prototype._getVendorInfo=function(a){if(a){if(a.requestFullscreen)return{enterName:"requestFullscreen",exitName:"exitFullscreen",errorEventName:"fullscreenerror",changeEventName:"fullscreenchange",propertyName:"fullscreen"};if(a.webkitRequestFullScreen)return{enterName:"webkitRequestFullscreen",exitName:"webkitCancelFullScreen",errorEventName:"webkitfullscreenerror",changeEventName:"webkitfullscreenchange",propertyName:"webkitIsFullScreen"};if(a.mozRequestFullScreen)return{enterName:"mozRequestFullScreen",
exitName:"mozCancelFullScreen",errorEventName:"mozfullscreenerror",changeEventName:"mozfullscreenchange",propertyName:"mozFullScreen"};if(a.msRequestFullscreen)return{enterName:"msRequestFullscreen",exitName:"msExitFullscreen",errorEventName:"MSFullscreenError",changeEventName:"MSFullscreenChange",propertyName:"msFullscreenElement"}}};b.prototype._enterFullscreen=function(){if("feature-unsupported"===this.state)e.warn("The fullscreen API is not supported in this browser.");else{var a=this.element;
a&&(a[this._vendorInfo.enterName].call(a),this.notifyChange("state"))}};b.prototype._addStyle=function(){var a=this.element;a&&a.setAttribute("style",this._fullscreenStyle)};b.prototype._removeStyle=function(){var a=this.element;a&&a.removeAttribute("style")};b.prototype._exitFullscreen=function(){"feature-unsupported"!==this.state&&this.element&&(document[this._vendorInfo.exitName].call(document),this.notifyChange("state"))};b.prototype._addFullscreenListeners=function(a){a&&(document.addEventListener(a.changeEventName,
this._stateHandler),document.addEventListener(a.errorEventName,this._errorHandler))};b.prototype._removeFullscreenListeners=function(){var a=this._vendorInfo;this._vendorInfo&&(document.removeEventListener(a.changeEventName,this._stateHandler),document.removeEventListener(a.errorEventName,this._errorHandler))};c.__decorate([d.property({dependsOn:["view.container"]})],b.prototype,"element",null);c.__decorate([d.property({dependsOn:["element"],readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property()],
b.prototype,"view",void 0);c.__decorate([d.property()],b.prototype,"enter",null);c.__decorate([d.property()],b.prototype,"exit",null);c.__decorate([d.property()],b.prototype,"toggle",null);return b=c.__decorate([d.subclass("esri.widgets.Fullscreen.FullscreenViewModel")],b)}(g)});
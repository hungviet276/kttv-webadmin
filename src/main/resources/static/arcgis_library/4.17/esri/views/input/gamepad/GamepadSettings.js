// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Accessor ../../../core/Collection ../../../core/accessorSupport/decorators ./GamepadInputDevice".split(" "),function(k,l,c,g,e,d,h){return function(f){function a(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];b=f.apply(this,b)||this;b.devices=new e;b.enabledFocusMode="document";return b}c.__extends(a,f);c.__decorate([d.property({type:e.ofType(h),readOnly:!0})],a.prototype,"devices",void 0);c.__decorate([d.property({type:["document","view","none"]})],
a.prototype,"enabledFocusMode",void 0);return a=c.__decorate([d.subclass("esri.views.input.gamepad.GamepadSettings")],a)}(g)});
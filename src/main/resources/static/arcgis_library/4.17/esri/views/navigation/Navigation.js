// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Accessor ../../core/accessorSupport/decorators ./gamepad/GamepadSettings".split(" "),function(g,h,b,f,c,d){return function(e){function a(a){a=e.call(this,a)||this;a.browserTouchPanEnabled=!0;a.gamepad=new d;a.momentumEnabled=!0;a.mouseWheelZoomEnabled=!0;return a}b.__extends(a,e);b.__decorate([c.property({type:Boolean})],a.prototype,"browserTouchPanEnabled",void 0);b.__decorate([c.property({type:d,nonNullable:!0})],a.prototype,"gamepad",void 0);b.__decorate([c.property({type:Boolean})],
a.prototype,"momentumEnabled",void 0);b.__decorate([c.property({type:Boolean})],a.prototype,"mouseWheelZoomEnabled",void 0);return a=b.__decorate([c.subclass("esri.views.navigation.Navigation")],a)}(f)});
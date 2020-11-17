// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../input/InputHandler"],function(a,b,d,e){Object.defineProperty(b,"__esModule",{value:!0});b.PointerDownCancelAnimation=void 0;a=function(b){function a(a,d){var c=b.call(this,!0)||this;c.view=a;c.registerIncoming("pointer-down",d,function(){return c.view.state.stopActiveCameraController()});return c}d.__extends(a,b);return a}(e.InputHandler);b.PointerDownCancelAnimation=a});
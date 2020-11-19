// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../InputHandler"],function(a,b,c,d){Object.defineProperty(b,"__esModule",{value:!0});b.PreventContextMenu=void 0;a=function(b){function a(){var a=b.call(this,!0)||this;a.registerIncoming("context-menu",function(a){a.data.native.preventDefault()});return a}c.__extends(a,b);return a}(d.InputHandler);b.PreventContextMenu=a;b.default=a});
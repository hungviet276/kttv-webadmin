// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../support/geometryUtils"],function(d,e,c){var b=c.boundedPlane.create();return function(){function a(){this._worldPlane=b}Object.defineProperty(a.prototype,"isEnabled",{get:function(){return this.plane!==b},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"plane",{get:function(){return this._worldPlane},set:function(a){this._worldPlane=a?a:b},enumerable:!1,configurable:!0});return a}()});
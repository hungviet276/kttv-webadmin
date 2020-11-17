// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../core/Version"],function(c,a,d,e){Object.defineProperty(a,"__esModule",{value:!0});a.Version=void 0;c=function(a){function b(b,c){return a.call(this,b,c,"webscene")||this}d.__extends(b,a);Object.defineProperty(b.prototype,"supportsGround",{get:function(){return this.since(1,8)},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"supportsVisibleElevationLayersInSlides",{get:function(){return this.lessThan(1,8)},enumerable:!1,configurable:!0});return b}(e.Version);
a.Version=c;a.default=c});
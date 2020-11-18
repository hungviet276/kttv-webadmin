// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Evented ../../../../core/HandleOwner ../../../../core/accessorSupport/decorators".split(" "),function(c,d,e,f,g,h){Object.defineProperty(d,"__esModule",{value:!0});c=function(b){function a(){return null!==b&&b.apply(this,arguments)||this}e.__extends(a,b);a.prototype.onFeature=function(a){this.emit("feature",a)};return a=e.__decorate([h.subclass("esri.layers.graphics.sources.connections.StreamConnection")],a)}(f.EventedMixin(g.HandleOwner));d.default=
c});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators"],function(f,g,b,e,c){return function(d){function a(){return null!==d&&d.apply(this,arguments)||this}b.__extends(a,d);Object.defineProperty(a.prototype,"canZoomIn",{get:function(){return!!this.get("view.ready")},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"canZoomOut",{get:function(){return!!this.get("view.ready")},enumerable:!1,configurable:!0});b.__decorate([c.property({dependsOn:["view.ready"],
readOnly:!0})],a.prototype,"canZoomIn",null);b.__decorate([c.property({dependsOn:["view.ready"],readOnly:!0})],a.prototype,"canZoomOut",null);b.__decorate([c.property()],a.prototype,"view",void 0);return a=b.__decorate([c.subclass("esri.widgets.Zoom.ZoomConditions3D")],a)}(e)});
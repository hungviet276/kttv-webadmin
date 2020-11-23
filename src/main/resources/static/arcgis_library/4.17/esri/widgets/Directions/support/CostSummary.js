// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Accessor ../../../core/accessorSupport/decorators ./directionsUtils".split(" "),function(g,h,b,f,c,d){return function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;a.messages=null;return a}b.__extends(a,e);Object.defineProperty(a.prototype,"primary",{get:function(){var a=this.get("directionsViewModel.lastRoute.routeResults.0.directions"),b=this.directionsViewModel.impedanceAttribute,c=this.get("directionsViewModel.routeParameters.directionsLengthUnits");
return d.isTimeUnits(b.units)?d.formatTime(a.totalTime,{unit:b.units.replace("esriNAU","")}):d.formatDistance(this.messages,a.totalLength,{toUnits:c})},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"secondary",{get:function(){var a=this.get("directionsViewModel.lastRoute.routeResults.0.directions"),b=this.get("directionsViewModel.routeParameters.directionsLengthUnits");return d.isTimeUnits(this.directionsViewModel.impedanceAttribute.units)?d.formatDistance(this.messages,a.totalLength,
{toUnits:b}):d.formatTime(a.totalTime)},enumerable:!1,configurable:!0});b.__decorate([c.property()],a.prototype,"directionsViewModel",void 0);b.__decorate([c.property()],a.prototype,"messages",void 0);b.__decorate([c.property({dependsOn:["directionsViewModel.lastRoute"],readOnly:!0})],a.prototype,"primary",null);b.__decorate([c.property({dependsOn:["directionsViewModel.lastRoute"],readOnly:!0})],a.prototype,"secondary",null);return a=b.__decorate([c.subclass("esri.widgets.Directions.support.CostSummary")],
a)}(f)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Handles ../../core/Logger ../../core/promiseUtils ../../core/unitUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../views/3d/interactive/measurementTools/directLineMeasurement3D/DirectLineMeasurement3DTool ../support/commonProperties ../support/InteractiveToolViewModel".split(" "),function(r,t,c,h,k,l,e,m,d,n,p,q){var f=k.getLogger("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel");return function(g){function a(b){b=
g.call(this,b)||this;b.supportedViewType="3d";b._handles=new h;b._userUnitOptions=null;b._userUnit=null;return b}c.__extends(a,g);a.prototype.initialize=function(){var b=this;this._handles.add([m.init(this,"unit",function(a){b.tool&&(b.tool.model.unit=a)})])};a.prototype.destroy=function(){this._handles.destroy();this._handles=null};Object.defineProperty(a.prototype,"state",{get:function(){return this.isDisabled?"disabled":this.tool?this.tool.state:"ready"},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,
"measurement",{get:function(){if(!this.tool)return null;var b=this.tool.model,a=b.measurementMode,c="geodesic"===a,d=b.validMeasurement;return{mode:a,directDistance:{text:c?null:b.triangleView.directLabel,state:d&&!c?"available":"unavailable"},horizontalDistance:{text:b.triangleView.horizontalLabel,state:d?"available":"unavailable"},verticalDistance:{text:b.triangleView.verticalLabel,state:d?"available":"unavailable"}}},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"unitOptions",
{get:function(){return this._filteredOrAllUnits(this._userUnitOptions)},set:function(b){this._userUnitOptions=b;this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"unit",{get:function(){return this._userUnit?this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit):this._findSelectableUnit(this.defaultUnit)},set:function(b){this._userUnit=b?this._findSelectableUnit(b,this._userUnit):null;this.notifyChange("unit")},
enumerable:!1,configurable:!0});a.prototype.start=function(){return this.createTool()};a.prototype.clear=function(){this.removeTool()};a.prototype.newMeasurement=function(){l.ignoreAbortErrors(this.start())};a.prototype.clearMeasurement=function(){this.clear()};a.prototype.createToolParams=function(){var b=this;return{toolConstructor:n,constructorArguments:function(){return{unit:b.unit}}}};a.prototype.logUnsupportedError=function(){f.error("DirectLineMeasurement3D widget is not implemented for MapView")};
a.prototype.logError=function(){for(var b=[],a=0;a<arguments.length;a++)b[a]=arguments[a];f.error.apply(f,b)};a.prototype._findSelectableUnit=function(b,a){var c=this.unitOptions;return-1!==c.indexOf(b)?b:a?this._findSelectableUnit(a):c[0]};a.prototype._filteredOrAllUnits=function(a){if(!a)return e.measurementLengthUnits.slice();a=a.filter(function(a){return-1!==e.measurementLengthUnits.indexOf(a)});return 0===a.length?e.measurementLengthUnits.slice():a};c.__decorate([d.property({dependsOn:["isDisabled",
"tool.state"],readOnly:!0})],a.prototype,"state",null);c.__decorate([d.property({dependsOn:"view.ready tool.model.triangleView tool.model.directDistance tool.model.horizontalDistance tool.model.verticalDistance tool.model.geodesicDistance tool.model.measurementMode".split(" "),readOnly:!0})],a.prototype,"measurement",null);c.__decorate([d.property()],a.prototype,"tool",void 0);c.__decorate([d.property(p.defaultUnitPropertyMetadata)],a.prototype,"defaultUnit",void 0);c.__decorate([d.property({dependsOn:["view.spatialReference"]})],
a.prototype,"unitOptions",null);c.__decorate([d.property({dependsOn:["unitOptions","defaultUnit"]})],a.prototype,"unit",null);return a=c.__decorate([d.subclass("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel")],a)}(q.InteractiveToolViewModel)});
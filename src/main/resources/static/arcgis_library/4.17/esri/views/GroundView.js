// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Accessor ../core/Collection ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators ./support/GroundViewElevationSampler".split(" "),function(l,m,b,f,d,g,h,c,k){return function(e){function a(a){a=e.call(this,a)||this;a.handles=new g;a.view=null;a.layerViews=new d;return a}b.__extends(a,e);a.prototype.initialize=function(){var a=this;this.handles.add(h.when(this,"view.map.ground",function(a){return a.load()}));this.handles.add(this.layerViews.on("after-changes",
function(){return a.layerViewsAfterChangesHandler()}))};a.prototype.destroy=function(){this._set("view",null);this.handles&&(this.handles.destroy(),this.handles=null)};Object.defineProperty(a.prototype,"elevationSampler",{get:function(){return this.view&&"2d"!==this.view.type&&this.view.ready&&this.view.basemapTerrain&&this.view.basemapTerrain.ready?new k({view:this.view}):null},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"updating",{get:function(){return this.suspended?!1:this.layerViews.some(function(a){return a.updating})},
enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"suspended",{get:function(){return!this.view||this.view.suspended},enumerable:!1,configurable:!0});a.prototype.layerViewsAfterChangesHandler=function(){var a=this;this.handles.remove("updating");this.handles.add(this.layerViews.map(function(b){return b.watch("updating",function(){return a.updateUpdating()},!0)}).toArray(),"updating");this.updateUpdating()};a.prototype.updateUpdating=function(){this.notifyChange("updating")};b.__decorate([c.property({readOnly:!0,
dependsOn:["view.ready","view.basemapTerrain?.ready"]})],a.prototype,"elevationSampler",null);b.__decorate([c.property({type:Boolean,dependsOn:["suspended"],readOnly:!0})],a.prototype,"updating",null);b.__decorate([c.property({constructOnly:!0})],a.prototype,"view",void 0);b.__decorate([c.property({type:d,readOnly:!0})],a.prototype,"layerViews",void 0);b.__decorate([c.property({readOnly:!0,dependsOn:["view.suspended"]})],a.prototype,"suspended",null);return a=b.__decorate([c.subclass("esri.views.GroundView")],
a)}(f)});
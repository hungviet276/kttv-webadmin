// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/compilerUtils ../../core/Evented ../../core/watchUtils ../../core/accessorSupport/decorators ../../support/basemapDefinitions ../../support/basemapUtils ../../support/basemapUtils".split(" "),function(n,p,c,f,h,k,d,l,m,e){return function(g){function b(a){a=g.call(this,a)||this;a._basemapCache={};a.nextBasemap=e.ensureType("hybrid",a._basemapCache);a.view=null;a.toggle=a.toggle.bind(a);return a}c.__extends(b,g);b.prototype.initialize=function(){k.init(this,
"nextBasemap",function(a){a&&!a.loaded&&a.load().catch(function(){})})};b.prototype.destroy=function(){this.view=null;e.destroyCache(this._basemapCache);this._basemapCache=null};Object.defineProperty(b.prototype,"activeBasemap",{get:function(){return e.ensureType(this.get("view.map.basemap")||"topo",this._basemapCache)},enumerable:!1,configurable:!0});b.prototype.castNextBasemap=function(a){return e.ensureType(a,this._basemapCache)};Object.defineProperty(b.prototype,"state",{get:function(){return this.get("view.ready")?
"ready":"disabled"},enumerable:!1,configurable:!0});b.prototype.toggle=function(){if("disabled"!==this.state){var a=this.activeBasemap,b=this.nextBasemap;this.view.map.basemap=b;this.nextBasemap=a;this.emit("toggle",{previous:a,current:b})}};b.getThumbnailUrl=function(a){if(!a)return null;var b=a.thumbnailUrl;return b?b:(b=m.getWellKnownBasemapId(a))?l.esriBasemapDefinitions[b].thumbnailUrl:(a=a.baseLayers.find(function(a){return!!f.typeCast(a)().get("portalItem.thumbnailUrl")}))?f.typeCast(a)().get("portalItem.thumbnailUrl"):
null};c.__decorate([d.property({dependsOn:["view.map.basemap"],readOnly:!0})],b.prototype,"activeBasemap",null);c.__decorate([d.property()],b.prototype,"nextBasemap",void 0);c.__decorate([d.cast("nextBasemap")],b.prototype,"castNextBasemap",null);c.__decorate([d.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);c.__decorate([d.property()],b.prototype,"view",void 0);c.__decorate([d.property()],b.prototype,"toggle",null);return b=c.__decorate([d.subclass("esri.widgets.BasemapToggle.BasemapToggleViewModel")],
b)}(h.EventedAccessor)});
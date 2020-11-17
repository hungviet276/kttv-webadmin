// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib @dojo/framework/shim/AbortController ../../../core/Accessor ../../../core/Handles ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators".split(" "),function(m,n,c,f,g,h,k,l,d){return function(e){function a(b){b=e.call(this,b)||this;b._handles=new h;b.compatibilityFunction=null;b.error=null;b.state="loading";b.view=null;return b}c.__extends(a,e);a.prototype.initialize=function(){var b=this;this._handles.add(l.init(this,["basemap.loadStatus",
"compatibilityFunction","view.basemapTerrain?.tilingScheme","view.ready","view.spatialReference"],function(){return b.refresh()}))};a.prototype.destroy=function(){this._cancelCompatibilityCheck();this._handles.destroy();this.view=this.compatibilityFunction=this.basemap=this._handles=null};Object.defineProperty(a.prototype,"basemap",{set:function(b){var a=this._get("basemap");a&&a.cancelLoad();b&&b.load().catch(function(){});this._set("basemap",b)},enumerable:!1,configurable:!0});a.prototype.refresh=
function(){var b=this;this._cancelCompatibilityCheck();this._set("state","loading");var a=this.get("basemap.loadStatus");if("loaded"===a||"failed"===a)this.compatibilityFunction?(a=new f.default,this.compatibilityFunction(this,{signal:a.signal}).then(function(){b._set("state","ready");b._set("error",null)}).catch(function(a){k.isAbortError(a)||(b._set("state","error"),b._set("error",a))}),this._lastCompatibilityCheckController=a):"loaded"===a?(this._set("state","ready"),this._set("error",null)):(this._set("state",
"error"),this._set("error",this.basemap.loadError))};a.prototype._cancelCompatibilityCheck=function(){this._lastCompatibilityCheckController&&(this._lastCompatibilityCheckController.abort(),this._lastCompatibilityCheckController=null)};c.__decorate([d.property()],a.prototype,"basemap",null);c.__decorate([d.property()],a.prototype,"compatibilityFunction",void 0);c.__decorate([d.property({readOnly:!0})],a.prototype,"error",void 0);c.__decorate([d.property({readOnly:!0})],a.prototype,"state",void 0);
c.__decorate([d.property()],a.prototype,"view",void 0);return a=c.__decorate([d.subclass("esri.widgets.BasemapGallery.support.BasemapGalleryItem")],a)}(g)});
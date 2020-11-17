// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../Graphic ../../../../core/Accessor ../../../../core/Collection ../../../../core/Handles ../../../../core/promiseUtils ../../../../core/watchUtils ../../../../core/accessorSupport/decorators ../../../../core/accessorSupport/diffUtils ../../../../layers/Layer ../../../../layers/graphics/hydratedFeatures ../../../../tasks/support/Query ./constants ./Graphics3DCore ./Graphics3DElevationAlignment ./Graphics3DObjectStates ./Graphics3DScaleVisibility ./graphicUtils ../../../support/WatchUpdatingTracking".split(" "),
function(C,D,c,f,l,m,n,g,p,d,q,r,t,u,v,w,x,y,z,A,B){var h={remove:function(){},pause:function(){},resume:function(){}};return function(k){function b(a){a=k.call(this,a)||this;a.graphicsCore=null;a.elevationAlignment=new x.default;a.watchUpdatingTracking=new B.WatchUpdatingTracking;a.handles=new n;a.suspendResumeExtent=null;return a}c.__extends(b,k);b.prototype.normalizeCtorArgs=function(a){var b=null;a.scaleVisibilityEnabled&&(a=c.__assign({},a),delete a.scaleVisibilityEnabled,b=new z);var e=new w.Graphics3DCore({owner:a.owner,
layer:a.layer,preferredUpdatePolicy:0,graphicSymbolSupported:!0});return c.__assign(c.__assign({},a),{graphicsCore:e,scaleVisibility:b})};b.prototype.initialize=function(){var a=this;this.scaleVisibility&&"minScale"in this.layer&&this.watchUpdatingTracking.add(this.layer,"scaleRangeId",function(){return a.scaleVisibility.layerMinMaxScaleChangeHandler()});this.elevationAlignment&&"elevationInfo"in this.layer&&this.watchUpdatingTracking.add(this.layer,"elevationInfo",function(b,e){q.diff(b,e)&&a.watchUpdatingTracking.addPromise(a.graphicsCore.elevationInfoChange())})};
b.prototype.setup=function(){return c.__awaiter(this,void 0,void 0,function(){var a,b,e,d=this;return c.__generator(this,function(c){switch(c.label){case 0:a=function(a,b,c){return d.graphicsCore.spatialIndex.queryGraphicUIDsInExtent(a,b,c)},this.elevationAlignment.setup(this.owner,a,this.graphicsCore,this.view.elevationProvider),this.scaleVisibility&&"minScale"in this.layer&&(b=this.owner.view.basemapTerrain,this.scaleVisibility.setup(this.owner,this.layer,a,this.graphicsCore,b)),this._set("objectStates",
new y.Graphics3DObjectStates(this.graphicsCore)),c.label=1;case 1:return c.trys.push([1,3,,4]),[4,this.graphicsCore.setup({elevationAlignment:this.elevationAlignment,scaleVisibility:this.scaleVisibility,objectStates:this.objectStates})];case 2:return c.sent(),[3,4];case 3:e=c.sent();if(g.isAbortError(e))return[2];throw e;case 4:if(this.destroyed)return[2];this.handles.add(this.view.watch("clippingArea",function(){return d.updateClippingExtent()},!0));this.updateClippingExtent();this.setupSuspendResumeExtent();
this.graphicsCore.startCreateGraphics();return[2]}})})};b.prototype.destroy=function(){this.handles&&(this.handles.destroy(),this.handles=null);this.watchUpdatingTracking.destroy();this.elevationAlignment&&(this.elevationAlignment.destroy(),this._set("elevationAlignment",null));this.scaleVisibility&&(this.scaleVisibility.destroy(),this._set("scaleVisibility",null));this.objectStates&&(this.objectStates.destroy(),this._set("objectStates",null));this.graphicsCore&&(this.graphicsCore.destroy(),this._set("graphicsCore",
null))};Object.defineProperty(b.prototype,"suspended",{get:function(){return!(!this.scaleVisibility||!this.scaleVisibility.suspended)},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"updating",{get:function(){return!!(this.graphicsCore&&this.graphicsCore.updating||this.scaleVisibility&&this.scaleVisibility.updating||this.watchUpdatingTracking&&this.watchUpdatingTracking.updating)},enumerable:!1,configurable:!0});b.prototype.getGraphicFromGraphicUid=function(a){if(this.owner.loadedGraphics){var b=
this.owner.loadedGraphics.find(function(b){return b.uid===a});if(b)return t.hydrateGraphic(b,this.layer instanceof r?this.layer:null)}};b.prototype.whenGraphicBounds=function(a,b){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(a,b):g.reject()};b.prototype.computeAttachmentOrigin=function(a,b){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(a,b):null};b.prototype.getSymbolLayerSize=function(a,b){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(a,b):null};
b.prototype.occlude=function(a){var b=this.objectStates.acquireSet(1,null),c=b.handle;this.objectStates.setUid(b.set,a.uid);return c};b.prototype.highlight=function(a){if(a instanceof u)return h;if("number"===typeof a||a instanceof f)return this.highlight([a]);a instanceof m&&(a=a.toArray());if(Array.isArray(a)&&0<a.length){if(a[0]instanceof f){var b=a.map(function(a){return a.uid}),c=this.objectStates.acquireSet(0,null);a=c.set;c=c.handle;this.objectStates.setUids(a,b);return c}if("number"===typeof a[0])return b=
a,c=this.objectStates.acquireSet(0,null),a=c.set,c=c.handle,this.objectStates.setObjectIds(a,b),c}return h};b.prototype.updateClippingExtent=function(){this.graphicsCore.setClippingExtent(this.view.clippingArea,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()};b.prototype.updateSuspendResumeExtent=function(){this.suspendResumeExtent=A.enlargeExtent(this.graphicsCore.computedExtent,this.suspendResumeExtent,v.SUSPEND_RESUME_EXTENT_OPTIMISM,this.graphicsCore.extentPadding);this.scaleVisibility.setExtent(this.suspendResumeExtent)};
b.prototype.setupSuspendResumeExtent=function(){var a=this;this.scaleVisibility&&(p.init(this.graphicsCore,"computedExtent",function(b){return a.updateSuspendResumeExtent()},!0),this.graphicsCore.watch("extentPadding",function(b){return a.updateSuspendResumeExtent()}))};c.__decorate([d.property({constructOnly:!0})],b.prototype,"owner",void 0);c.__decorate([d.property({constructOnly:!0})],b.prototype,"layer",void 0);c.__decorate([d.property({readOnly:!0,aliasOf:"owner.view"})],b.prototype,"view",void 0);
c.__decorate([d.property({constructOnly:!0})],b.prototype,"graphicsCore",void 0);c.__decorate([d.property({constructOnly:!0})],b.prototype,"scaleVisibility",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"elevationAlignment",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"objectStates",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"watchUpdatingTracking",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["scaleVisibility.suspended"]})],b.prototype,
"suspended",null);c.__decorate([d.property({readOnly:!0,dependsOn:["graphicsCore.updating","scaleVisibility.updating","watchUpdatingTracking.updating"]})],b.prototype,"updating",null);return b=c.__decorate([d.subclass("esri.views.3d.layers.graphics.Graphics3DGraphicLikeLayerView")],b)}(l)});
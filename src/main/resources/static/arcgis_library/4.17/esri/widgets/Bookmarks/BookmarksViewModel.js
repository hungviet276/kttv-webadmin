// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Viewpoint ../../core/Collection ../../core/Error ../../core/Evented ../../core/Logger ../../core/promiseUtils ../../core/accessorSupport/decorators ../../webdoc/support/Thumbnail ../../webmap/Bookmark ../support/GoTo".split(" "),function(H,I,c,A,B,n,C,D,u,f,E,w,F){var p=D.getLogger("esri.widgets.Bookmarks.BookmarksViewModel"),x=B.ofType(w),G={width:128,height:128,format:"png"},y={takeScreenshot:!0,captureViewpoint:!0,captureRotation:!0,captureScale:!0};return function(z){function b(a){a=
z.call(this,a)||this;a.activeBookmark=null;return a}c.__extends(b,z);b.prototype.destroy=function(){this.view=null;this._set("activeBookmark",null)};Object.defineProperty(b.prototype,"bookmarks",{get:function(){return this.get("view.map.bookmarks")||new x},set:function(a){void 0===a?this._clearOverride("bookmarks"):this._override("bookmarks",a)},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){var a=this.get("view");return a&&!a.ready?"loading":"ready"},enumerable:!1,
configurable:!0});Object.defineProperty(b.prototype,"view",{get:function(){return this._get("view")},set:function(a){a&&"2d"!==a.type&&p.error(new n("view:invalid-view","SceneView is not supported",{view:a}));this._set("view",a)},enumerable:!1,configurable:!0});b.prototype.createBookmark=function(a){return c.__awaiter(this,void 0,void 0,function(){var b,h,e,k,g,f,q,r,t,l,m;return c.__generator(this,function(d){switch(d.label){case 0:b=this.view;if(!b)return h=new n("create-bookmark:invalid-view",
"Cannot create a bookmark without a view."),p.error(h),[2,u.reject(h)];e=c.__assign(c.__assign({},y),a);k=e.takeScreenshot;g=e.screenshotSettings;f=e.captureExtent;q=e.captureViewpoint;r=e.captureRotation;t=e.captureScale;return k?[4,this._createThumbnail(g)]:[3,2];case 1:return m=d.sent(),[3,3];case 2:m=void 0,d.label=3;case 3:return l=m,[2,new w(c.__assign(c.__assign({},l&&{thumbnail:l}),(q||f)&&{viewpoint:this._createViewpoint({view:b,captureScale:t,captureRotation:r})}))]}})})};b.prototype.editBookmark=
function(a,b){return c.__awaiter(this,void 0,void 0,function(){var h,e,d,g,f,q,r,t,l,m,v;return c.__generator(this,function(k){switch(k.label){case 0:h=this.view;if(!h)return e=new n("edit-bookmark:invalid-view","Cannot edit a bookmark without a view."),p.error(e),[2,u.reject(e)];d=c.__assign(c.__assign({},y),b);g=d.takeScreenshot;f=d.screenshotSettings;q=d.captureExtent;r=d.captureViewpoint;t=d.captureRotation;l=d.captureScale;return g?[4,this._createThumbnail(f)]:[3,2];case 1:return v=k.sent(),
[3,3];case 2:v=void 0,k.label=3;case 3:if(m=v)a.thumbnail=m;if(r||q)a.viewpoint=this._createViewpoint({view:h,captureScale:l,captureRotation:t});this.emit("bookmark-edit",{bookmark:a});return[2,a]}})})};b.prototype.goTo=function(a){var b=this;if(!this.view)return a=new n("go-to:invalid-view","Cannot go to a bookmark without a view"),p.error(a),u.reject(a);var c=null===a||void 0===a?void 0:a.viewpoint;if(!c)return a=new n("go-to:invalid-bookmark","Cannot go to a bookmark that does not contain a 'viewpoint'.",
{bookmark:a}),p.error(a),u.reject(a);this._set("activeBookmark",a);c=this.callGoTo({target:c});this.emit("select-bookmark",{bookmark:a});this.emit("bookmark-select",{bookmark:a});c.catch(function(){}).then(function(){return b._set("activeBookmark",null)});return c};b.prototype._createThumbnail=function(a){return c.__awaiter(this,void 0,void 0,function(){var b;return c.__generator(this,function(d){switch(d.label){case 0:return[4,this.view.takeScreenshot(c.__assign(c.__assign({},G),a))];case 1:return b=
d.sent(),[2,new E.default({url:b.dataUrl})]}})})};b.prototype._createViewpoint=function(a){var b,c,e=a.view,f=a.captureRotation;a=a.captureScale;var g=null===(b=e.viewpoint)||void 0===b?void 0:b.clone();return new A({targetGeometry:null===(c=e.extent)||void 0===c?void 0:c.clone(),rotation:f&&(null===g||void 0===g?void 0:g.rotation)||0,scale:a&&(null===g||void 0===g?void 0:g.scale)||0})};c.__decorate([f.property({readOnly:!0})],b.prototype,"activeBookmark",void 0);c.__decorate([f.property({type:x,
dependsOn:["view","view.map","view.map.bookmarks"]})],b.prototype,"bookmarks",null);c.__decorate([f.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);c.__decorate([f.property({value:null})],b.prototype,"view",null);return b=c.__decorate([f.subclass("esri.widgets.Bookmarks.BookmarksViewModel")],b)}(F.GoToMixin(C.EventedAccessor))});
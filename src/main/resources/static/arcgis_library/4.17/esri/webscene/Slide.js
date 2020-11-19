// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../Basemap ../Viewpoint ../core/asyncUtils ../core/Collection ../core/collectionUtils ../core/JSONSupport ../core/Logger ../core/promiseUtils ../core/accessorSupport/decorators ../core/accessorSupport/ensureType ../core/libs/gl-matrix-2/vec3 ../core/libs/gl-matrix-2/vec3f64 ../layers/Layer ../support/basemapUtils ../views/3d/support/mathUtils ../webdoc/support/Thumbnail ./Lighting ./support/Description ./support/SlideEnvironment ./support/SlideGround ./support/SlideVisibleLayer ./support/Title".split(" "),
function(P,Q,b,D,E,F,r,G,H,I,h,e,p,v,t,J,w,K,f,L,k,x,y,z,l){function A(b){if("building-scene"===b.type||"map-image"===b.type)return b.allSublayers.toArray()}function B(b){if(b=A(b))return b.filter(function(c){return c.visible}).map(function(c){return c.id})}function M(b,c){b=c-b;b>m&&(b-=u);b<-m&&(b+=u);return b}var N=0,n=r.ofType(z.default),O=I.getLogger("esri.webscene.Slide"),u=86400,m=43200;return function(m){function c(a){a=m.call(this,a)||this;a._applyToController=null;a.id=Date.now().toString(16)+
"-slide-"+N++;a.title=new l.default;a.description=new k.default;a.thumbnail=new f.default;a.viewpoint=null;a.basemap=null;a.ground=null;a.environment=new x.SlideEnvironment;a.visibleLayers=new n;return a}b.__extends(c,m);c.prototype.destroy=function(){this.visibleLayers.removeAll();this.basemap=null;this.thumbnail&&this.thumbnail.destroy();this.thumbnail=this.title=this.description=null};c.prototype.castTitle=function(a){return"string"===typeof a?new l.default({text:a}):p.ensureType(l.default,a)};
c.prototype.castDescription=function(a){return"string"===typeof a?new k.default({text:a}):p.ensureType(k.default,a)};c.prototype.castThumbnail=function(a){return"string"===typeof a?new f.default({url:a}):p.ensureType(f.default,a)};c.prototype.castBasemap=function(a){return w.ensureType(a)};Object.defineProperty(c.prototype,"visibleLayers",{set:function(a){this._set("visibleLayers",G.referenceSetter(a,this._get("visibleLayers"),n))},enumerable:!1,configurable:!0});c.prototype.castVisibleLayers=function(a){return a&&
"function"===typeof a.map?a.map(function(a){if("string"===typeof a)return{id:a};if(a instanceof J){var d=B(a);return{id:a.id,sublayerIds:d}}if(a.id)return{id:a.id,sublayerIds:a.sublayerIds};O.warn('Invalid visible layer, expected { id }, Layer or "id"');return a}):null};c.prototype.clone=function(){return new this.constructor({id:this.id,title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||
null,basemap:this.basemap&&this.basemap.clone()||null,ground:this.ground&&this.ground.clone()||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||null})};c.prototype._updateVisibleLayersFrom=function(a){var b=this,d=[];return h.eachAlways(this._allLayers(a.map).map(function(b){return a.whenLayerView(b).then(function(a){if(a.visible){var c=B(b);d.push(new z.default({id:a.layer.id,sublayerIds:c}))}})}).toArray()).then(function(){b.visibleLayers.removeAll();
b.visibleLayers.addMany(d)})};c.prototype.updateFrom=function(a,c){var d=this;c={screenshot:b.__assign({format:"jpeg",quality:80,width:120,height:75,disableSlice:!0},c&&c.screenshot)};return a.when(function(){d.viewpoint=a.viewpoint.clone();d.environment.lighting=L.prototype.clone.apply(a.environment.lighting);d.basemap=a.map.basemap&&a.map.basemap.clone()||null;d.ground=a.map.ground?y.default.fromGround(a.map.ground):null;return d._updateVisibleLayersFrom(a)}).then(function(){return a.takeScreenshot(c.screenshot)}).then(function(a){d.thumbnail=
new f.default({url:a.dataUrl});return d})};c.prototype.applyTo=function(a,c){return b.__awaiter(this,void 0,void 0,function(){var d,q,g,e,f=this;return b.__generator(this,function(C){switch(C.label){case 0:return this._applyToController&&this._applyToController.abort(),this._applyToController=d=h.createAbortController(),q=h.onAbortOrThrow(c,function(){return d.abort()}),g=b.__assign(b.__assign({animate:!0},c),{signal:this._applyToController.signal}),[4,F.result(function(){return b.__awaiter(f,void 0,
void 0,function(){return b.__generator(this,function(c){switch(c.label){case 0:return[4,this._applyBasemap(a,g)];case 1:return c.sent(),this._applyLayerVisibility(a),this._applyGround(a),[4,this._applyViewpoint(a,g)];case 2:return c.sent(),[2]}})})}())];case 1:e=C.sent();this._applyToController===d&&(this._applyToController=null);null===q||void 0===q?void 0:q.remove();d=q=null;if(!1===e.ok)throw e.error;return[2,this]}})})};c.prototype._applyBasemap=function(a,c){return b.__awaiter(this,void 0,void 0,
function(){var d;return b.__generator(this,function(b){switch(b.label){case 0:if(!this.basemap)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,this.basemap.load(c)];case 2:return b.sent(),[3,4];case 3:d=b.sent();if(h.isAbortError(d))throw d;return[3,4];case 4:a.map.basemap=w.clonePreservingTiledLayers(this.basemap,a.map.basemap),b.label=5;case 5:return[2]}})})};c.prototype._applyGround=function(a){this.ground&&(a.map.ground=this.ground.cloneAndApplyTo(a.map.ground))};c.prototype._allLayers=
function(a){var c=new r;this._collectLayers(a,c);this._collectLayers(a.ground,c);return c};c.prototype._collectLayers=function(a,c){var b=this;a.layers.forEach(function(a){c.add(a);a.layers&&b._collectLayers(a,c)})};c.prototype._applyLayerVisibility=function(a){var c=this;this.visibleLayers&&this._allLayers(a.map).forEach(function(a){var b=c.visibleLayers.find(function(c){return c.id===a.id});a.visible=null!=b;var d=b&&b.sublayerIds,b=A(a);d&&b&&b.forEach(function(a){return a.visible=0<=d.indexOf(a.id)})})};
c.prototype._applyViewpoint=function(a,c){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(b){switch(b.label){case 0:if(!this.viewpoint||c.ignoreViewpoint)return[3,5];this.viewpoint.camera.fov=a.camera.fov;return c.animate&&this.get("environment.lighting.date")?[4,this._animateToLighting(a,c)]:[3,2];case 1:return b.sent(),[2];case 2:if(!c.animate)return[3,4];a.environment.updateLighting(this.environment.lighting.clone());return[4,a.goTo(this.viewpoint,c)];case 3:b.sent(),
b.label=4;case 4:a.viewpoint=this.viewpoint,b.label=5;case 5:return a.environment.updateLighting(this.environment.lighting.clone()),[2]}})})};c.prototype._animateToLighting=function(a,c){return b.__awaiter(this,void 0,void 0,function(){var d,e,g,f=this;return b.__generator(this,function(b){d=null;"global"===a.viewingMode&&(d=this._animateLightingWithCamera(a));a.environment.lighting.cameraTrackingEnabled=!1;a.environment.lighting.directShadowsEnabled=this.environment.lighting.directShadowsEnabled;
null!=this.environment.lighting.displayUTCOffset&&(a.environment.lighting.displayUTCOffset=this.environment.lighting.displayUTCOffset);e=a.goTo(this.viewpoint,c);g=function(){d&&d.remove();a.environment.lighting.cameraTrackingEnabled=!0};return[2,e.then(function(){a.environment.updateLighting(f.environment.lighting.clone());g()},function(a){g();throw a;})]})})};c.prototype._getTime=function(a){var c=a.getTime();a=3600*a.getUTCHours()+60*a.getUTCMinutes()+a.getUTCSeconds();return[c,a]};c.prototype._setTime=
function(a,c,b){a.setTime(c);a.setUTCHours(b/3600);a.setUTCMinutes(b%3600/60);a.setUTCSeconds(b%3600%60);return a};c.prototype._animateLightingWithCamera=function(a){var c=this,b=this._getTime(new Date(a.environment.lighting.date.toString())),e=b[0],f=b[1],b=this._getTime(this.environment.lighting.date),l=b[0],m=M(f,b[1]),h=a.renderCoordsHelper,k=t.vec3f64.create();h.toRenderCoords(a.camera.position,k);var p=t.vec3f64.create();h.toRenderCoords(this.viewpoint.camera.position,p);var n=t.vec3f64.create(),
r=new Date;return a.watch("camera",function(b){h.toRenderCoords(b.position,n);var d=v.vec3.squaredDistance(k,n),g=v.vec3.squaredDistance(p,n);b=0;0!==d+g&&(b=d/(d+g));d=e+(l-e)*b;b=K.moduloPositive(f+m*b,u);a.environment.lighting.date=c._setTime(r,d,b)})};c.createFrom=function(a,b){return(new this).updateFrom(a,b)};b.__decorate([e.property({type:String,json:{write:{isRequired:!0}}})],c.prototype,"id",void 0);b.__decorate([e.property({type:l.default,json:{default:function(){return new l.default({text:""})},
write:{isRequired:!0}}})],c.prototype,"title",void 0);b.__decorate([e.cast("title")],c.prototype,"castTitle",null);b.__decorate([e.property({type:k.default,json:{write:{overridePolicy:function(a){return{enabled:!(!a||!a.text)}}}}})],c.prototype,"description",void 0);b.__decorate([e.cast("description")],c.prototype,"castDescription",null);b.__decorate([e.property({type:f.default,json:{default:function(){return new f.default({url:""})},write:{isRequired:!0}}})],c.prototype,"thumbnail",void 0);b.__decorate([e.cast("thumbnail")],
c.prototype,"castThumbnail",null);b.__decorate([e.property({type:E,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"viewpoint",void 0);b.__decorate([e.property({type:D,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],c.prototype,"basemap",void 0);b.__decorate([e.cast("basemap")],c.prototype,"castBasemap",null);b.__decorate([e.property({type:y.default,json:{write:!0}})],c.prototype,"ground",void 0);b.__decorate([e.property({type:n,json:{write:{isRequired:!0}}})],c.prototype,"visibleLayers",
null);b.__decorate([e.cast("visibleLayers")],c.prototype,"castVisibleLayers",null);b.__decorate([e.property({type:x.SlideEnvironment,json:{write:!0}})],c.prototype,"environment",void 0);return c=b.__decorate([e.subclass("esri.webscene.Slide")],c)}(H.JSONSupport)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ./geometry ./core/Collection ./core/collectionUtils ./core/JSONSupport ./core/lang ./core/Loadable ./core/loadAll ./core/Logger ./core/maybe ./core/promiseUtils ./core/urlUtils ./core/accessorSupport/decorators ./portal/Portal ./portal/PortalItem ./support/basemapDefinitions ./webdoc/support/writeUtils @dojo/framework/shim/Promise".split(" "),function(A,J,e,B,l,t,C,D,E,F,G,u,p,q,f,v,H,w,x){var I=0,y=G.getLogger("esri.Basemap");return function(h){function c(a){var b=h.call(this,
a)||this;b.id=null;b.portalItem=null;b.spatialReference=null;b.thumbnailUrl=null;b.title="Basemap";b.id=Date.now().toString(16)+"-basemap-"+I++;b.baseLayers=new l;b.referenceLayers=new l;var d=function(a){a.parent&&a.parent!==b&&"remove"in a.parent&&a.parent.remove(a);a.parent=b;"elevation"===a.type&&y.error("Layer '"+a.title+", id:"+a.id+"' of type '"+a.type+"' is not supported as a basemap layer and will therefore be ignored.")};b.baseLayers.on("after-add",function(a){return d(a.item)});b.referenceLayers.on("after-add",
function(a){return d(a.item)});b.baseLayers.on("after-remove",function(a){a.item.parent=null});b.referenceLayers.on("after-remove",function(a){a.item.parent=null});return b}e.__extends(c,h);k=c;c.prototype.initialize=function(){var a=this;this.when().catch(function(b){y.error("#load()","Failed to load basemap (title: '"+a.title+"', id: '"+a.id+"')",b)});this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)};c.prototype.destroy=function(){for(var a,b=0,d=this.baseLayers.removeAll();b<
d.length;b++){var c=d[b];c.destroy()}b=0;for(d=this.referenceLayers.removeAll();b<d.length;b++)c=d[b],c.destroy();this.baseLayers.destroy();this.referenceLayers.destroy();null===(a=this.portalItem)||void 0===a?void 0:a.destroy();this.portalItem=null};c.prototype.normalizeCtorArgs=function(a){a&&"resourceInfo"in a&&(this._set("resourceInfo",a.resourceInfo),a=e.__assign({},a),delete a.resourceInfo);return a};Object.defineProperty(c.prototype,"baseLayers",{set:function(a){this._set("baseLayers",t.referenceSetter(a,
this._get("baseLayers")))},enumerable:!1,configurable:!0});c.prototype._writeBaseLayers=function(a,b,d){var c=[];a&&(d=e.__assign(e.__assign({},d),{layerContainerType:"basemap"}),this.baseLayers.forEach(function(a){a=x.getLayerJSON(a,d.webmap?d.webmap.getLayerJSONFromResourceInfo(a):null,d);u.isSome(a)&&c.push(a)}),this.referenceLayers.forEach(function(a){a=x.getLayerJSON(a,d.webmap?d.webmap.getLayerJSONFromResourceInfo(a):null,d);u.isSome(a)&&(a.isReference=!0,c.push(a))}));b.baseMapLayers=c};Object.defineProperty(c.prototype,
"referenceLayers",{set:function(a){this._set("referenceLayers",t.referenceSetter(a,this._get("referenceLayers")))},enumerable:!1,configurable:!0});c.prototype.writeTitle=function(a,b){b.title=a||"Basemap"};c.prototype.load=function(a){this.addResolvingPromise(this._loadFromSource(a));return p.resolve(this)};c.prototype.loadAll=function(){var a=this;return F.loadAll(this,function(b){b(a.baseLayers,a.referenceLayers)})};c.prototype.clone=function(){var a={id:this.id,title:this.title,portalItem:this.portalItem,
baseLayers:this.baseLayers.slice(),referenceLayers:this.referenceLayers.slice()};this.loaded&&(a.loadStatus="loaded");return(new k({resourceInfo:this.resourceInfo})).set(a)};c.prototype.read=function(a,b){this.resourceInfo||this._set("resourceInfo",{data:a,context:b});h.prototype.read.call(this,a,b)};c.prototype.write=function(a,b){a=a||{};b&&b.origin||(b=e.__assign({origin:"web-map"},b));h.prototype.write.call(this,a,b);!this.loaded&&this.resourceInfo&&this.resourceInfo.data.baseMapLayers&&(a.baseMapLayers=
this.resourceInfo.data.baseMapLayers.map(function(a){a=D.clone(a);a.url&&q.isProtocolRelative(a.url)&&(a.url="https:"+a.url);a.templateUrl&&q.isProtocolRelative(a.templateUrl)&&(a.templateUrl="https:"+a.templateUrl);return a}));return a};c.prototype._loadFromSource=function(a){return e.__awaiter(this,void 0,void 0,function(){var b,c,r,g,f,m,n=this;return e.__generator(this,function(d){switch(d.label){case 0:return b=this,c=b.resourceInfo,r=b.portalItem,p.throwIfAborted(a),g=[],c?(f=c.context?c.context.url:
null,g.push(this._loadLayersFromJSON(c.data,f,a)),c.data.id&&!c.data.title&&(m=c.data.id,g.push(w.getBasemapTitle(m).then(function(a){a&&n.read({title:a},c.context)})))):r&&g.push(this._loadFromItem(r,a)),[4,p.all(g)];case 1:return d.sent(),[2]}})})};c.prototype._loadLayersFromJSON=function(a,b,c){return e.__awaiter(this,void 0,void 0,function(){var d,f,z,m,n,h,k,l;return e.__generator(this,function(e){switch(e.label){case 0:return d=this.resourceInfo&&this.resourceInfo.context,f=this.portalItem&&
this.portalItem.portal||d&&d.portal||null,z=d&&"web-scene"===d.origin?"web-scene":"web-map",[4,new Promise(function(a,b){A(["./portal/support/layersCreator"],a,b)})];case 1:return m=e.sent(),n=[],p.throwIfAborted(c),a.baseMapLayers&&Array.isArray(a.baseMapLayers)&&(h={context:{origin:z,url:b,portal:f,layerContainerType:"basemap"},defaultLayerType:"DefaultTileLayer"},k=m.populateOperationalLayers(this.baseLayers,a.baseMapLayers.filter(function(a){return!a.isReference}),h),n.push(k),l=m.populateOperationalLayers(this.referenceLayers,
a.baseMapLayers.filter(function(a){return a.isReference}),h),n.push(l)),[4,p.eachAlways(n)];case 2:return e.sent(),[2]}})})};c.prototype._loadFromItem=function(a,b){return e.__awaiter(this,void 0,void 0,function(){var c,f,g;return e.__generator(this,function(d){switch(d.label){case 0:return[4,a.load(b)];case 1:return c=d.sent(),[4,c.fetchData("json",b)];case 2:return f=d.sent(),g=q.urlToObject(a.itemUrl),this._set("resourceInfo",{data:f.baseMap,context:{origin:"web-map",portal:a.portal||v.getDefault(),
url:g}}),this.read(this.resourceInfo.data,this.resourceInfo.context),this.read({spatialReference:f.spatialReference},this.resourceInfo.context),this.read({title:a.title,thumbnailUrl:a.thumbnailUrl},{origin:"portal-item",portal:a.portal||v.getDefault(),url:g}),[2,this._loadLayersFromJSON(this.resourceInfo.data,g,b)]}})})};c.fromId=function(a){return(a=w.esriBasemapDefinitions[a])?k.fromJSON(a):null};var k;e.__decorate([f.property({json:{write:{ignoreOrigin:!0,target:"baseMapLayers",writer:function(a,
b,c,e){this._writeBaseLayers(a,b,e)}},origins:{"web-scene":{write:{ignoreOrigin:!0,target:{baseMapLayers:{type:l}},writer:function(a,b,c,e){this._writeBaseLayers(a,b,e)}}}}}})],c.prototype,"baseLayers",null);e.__decorate([f.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],c.prototype,"id",void 0);e.__decorate([f.property({type:H})],c.prototype,"portalItem",void 0);e.__decorate([f.property()],c.prototype,"referenceLayers",null);e.__decorate([f.property({readOnly:!0})],c.prototype,"resourceInfo",
void 0);e.__decorate([f.property({type:B.SpatialReference})],c.prototype,"spatialReference",void 0);e.__decorate([f.property()],c.prototype,"thumbnailUrl",void 0);e.__decorate([f.property({type:String,json:{origins:{"web-scene":{write:{isRequired:!0}}}}})],c.prototype,"title",void 0);e.__decorate([f.writer("title")],c.prototype,"writeTitle",null);return c=k=e.__decorate([f.subclass("esri.Basemap")],c)}(C.JSONSupportMixin(E))});
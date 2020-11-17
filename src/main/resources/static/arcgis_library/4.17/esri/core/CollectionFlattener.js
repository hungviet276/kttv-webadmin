// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ./Collection ./Handles ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass".split(" "),function(p,q,c,k,m,b,n){return function(l){function a(e){e=l.call(this,e)||this;e._handles=new m;e.root=null;return e}c.__extends(a,l);a.prototype.initialize=function(){var e=this;this._handles.add(this.rootCollectionNames.map(function(a){return e.watch("root."+a,function(){return e.updateCollections()},!0)}));this.updateCollections()};a.prototype.destroy=function(){this.root=
null;this.refresh();this._handles.destroy();this._handles=null};a.prototype.updateCollections=function(){var e=this;this._collections=this.rootCollectionNames.map(function(a){return e.get("root."+a)}).filter(function(a){return null!=a});this.refresh()};a.prototype.refresh=function(){var a=this,c=this._handles;c.remove("collections");this.removeAll();for(var f=[],d=[],g=0,b=this._collections;g<b.length;g++){var h=b[g];this._processCollection(f,d,h)}this.push.apply(this,d);for(d=0;d<f.length;d++)h=
f[d],c.add(h.on("after-changes",function(){return a.refresh()}),"collections")};a.prototype._createNewInstance=function(a){return new k(a)};a.prototype._processCollection=function(a,c,b){var d=this;b&&(a.push(b),b.forEach(function(b){b&&(d.itemFilterFunction&&!d.itemFilterFunction(b)||c.push(b),d.getChildrenFunction&&d._processCollection(a,c,d.getChildrenFunction(b)))}))};c.__decorate([b.property()],a.prototype,"rootCollectionNames",void 0);c.__decorate([b.property()],a.prototype,"root",void 0);c.__decorate([b.property()],
a.prototype,"getChildrenFunction",void 0);c.__decorate([b.property()],a.prototype,"itemFilterFunction",void 0);return a=c.__decorate([n.subclass("esri.core.CollectionFlattener")],a)}(k)});
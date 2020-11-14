// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Evented ../../../../core/maybe ../../../../core/libs/rbush/rbush ../../../../geometry/support/aaBoundingBox ./Store2D".split(" "),function(k,g,l,m,h,n,p,q){Object.defineProperty(g,"__esModule",{value:!0});g.FeatureStore2D=g.featureAdapter=void 0;g.featureAdapter={getObjectId:function(e){return e.getObjectId()},getAttributes:function(e){return e.readAttributes()},getAttribute:function(e,d){return e.readAttribute(d)},cloneWithGeometry:function(e,d){return e},
getGeometry:function(e){return e.readHydratedGeometry()},getCentroid:function(e,d){return e.readCentroid()}};k=function(e){function d(a,b){var c=e.call(this,a,b)||this;c.featureAdapter=g.featureAdapter;c.events=new m;c._featureSetsByInstance=new Map;c._objectIdToDisplayId=new Map;c._spatialIndexInvalid=!0;c._index=n(9,function(a){return{minX:c._storage.getXMin(a),minY:c._storage.getYMin(a),maxX:c._storage.getXMax(a),maxY:c._storage.getYMax(a)}});return c}l.__extends(d,e);Object.defineProperty(d.prototype,
"storeStatistics",{get:function(){return{featureCount:0,vertexCount:0}},enumerable:!1,configurable:!0});d.prototype.onTileData=function(a,b,c){if(h.isNone(b.addOrUpdate))return b;this._featureSetsByInstance.set(b.addOrUpdate.instance,b.addOrUpdate);this._storage=c;b.addOrUpdate._storage=c;for(var f=b.addOrUpdate.getCursor();f.next();){var d=f.getObjectId(),e;e=f.getIndex();e|=f.instance<<16;var g=this._objectIdToDisplayId.get(d);g||(g=c.createDisplayId(),this._objectIdToDisplayId.set(d,g),this._spatialIndexInvalid=
!0);f.setDisplayId(g);c.setInstanceId(g,e);this.setComputedAttributes(c,f,g,a.scale)}"update"===b.type&&(this._spatialIndexInvalid=!0);this.events.emit("changed");return b};d.prototype.forEach=function(a){var b=this;this._objectIdToDisplayId.forEach(function(c){c=b._storage.getInstanceId(c);c=b._lookupFeature(c);a(c)})};d.prototype.forEachUnsafe=function(a){var b=this;this._objectIdToDisplayId.forEach(function(c){var f=b._storage.getInstanceId(c);c=65535&f;f=b._getFeatureSet((4294901760&f)>>>16);
f.setIndex(c);a(f)})};d.prototype.forEachInBounds=function(a,b){var c=0;for(a=this._searchIndex(a);c<a.length;c++){var f=this.lookupFeatureByDisplayId(a[c],this._storage);b(h.unwrap(f))}};d.prototype.forEachBounds=function(a,b,c){this._rebuildIndex();for(var f=[0,0,0,0],d=0;d<a.length;d++){var e=a[d].getDisplayId();f[0]=this._storage.getXMin(e);f[1]=this._storage.getYMin(e);f[2]=this._storage.getXMax(e);f[3]=this._storage.getYMax(e);b(p.fromRect(c,f))}};d.prototype.sweepFeatures=function(a,b){var c=
this;this._objectIdToDisplayId.forEach(function(d,e){a.has(d)||(b.releaseDisplayId(d),c._objectIdToDisplayId.delete(e))});this.events.emit("changed")};d.prototype.sweepFeatureSets=function(a){var b=this;this._featureSetsByInstance.forEach(function(c,d){a.has(d)||b._featureSetsByInstance.delete(d)})};d.prototype.lookupObjectId=function(a,b){a=this.lookupFeatureByDisplayId(a,b);return h.isNone(a)?null:a.getObjectId()};d.prototype.lookupDisplayId=function(a){return this._objectIdToDisplayId.get(a)};
d.prototype.lookupFeatureByDisplayId=function(a,b){a=b.getInstanceId(a);return this._lookupFeature(a)};d.prototype.lookupByDisplayIdUnsafe=function(a){var b=this._storage.getInstanceId(a);a=65535&b;b=this._getFeatureSet((4294901760&b)>>>16);if(!b)return null;b.setIndex(a);return b};d.prototype.hasInstance=function(a){return this._featureSetsByInstance.has(a)};d.prototype._rebuildIndex=function(){var a=this;if(this._spatialIndexInvalid){this._index.clear();var b=[];this._objectIdToDisplayId.forEach(function(c){var d=
a._storage.getInstanceId(c);a._storage.setBounds(c,a._lookupFeature(d))&&b.push(c)});this._index.load(b);this._spatialIndexInvalid=!1}};d.prototype._lookupFeature=function(a){var b=65535&a;a=this._getFeatureSet((4294901760&a)>>>16);if(!a)return null;a=a.getCursor();a.setIndex(b);return a};d.prototype._getFeatureSet=function(a){return this._featureSetsByInstance.get(a)};d.prototype._searchIndex=function(a){this._rebuildIndex();return this._index.search({minX:a[0],minY:a[1],maxX:a[2],maxY:a[3]})};return d}(q.Store2D);
g.FeatureStore2D=k});
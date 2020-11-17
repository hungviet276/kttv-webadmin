// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../geometry ../../../../../core/Evented ../../../../../core/has ../../../../../core/maybe ../../../../../core/accessorSupport/diffUtils ../../../../../geohash/GeohashTree ../../../../../geohash/geohashUtils ../../../../../geometry/support/geodesicConstants ../../../../../geometry/support/spatialReferenceUtils ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/OptimizedFeature ../../../../../layers/graphics/OptimizedGeometry ../../../../../layers/graphics/data/projectionSupport ../../../engine/webgl/definitions ../Store2D ./FeatureSetReaderJSON".split(" "),
function(B,t,r,y,G,C,v,D,H,z,x,I,E,F,J,A,m,K,L){Object.defineProperty(t,"__esModule",{value:!0});t.ClusterStore=void 0;var M=function(m){function e(a,b,c,d,f){var k=this;b=new J.default([],[b,c]);k=m.call(this,b,d,null,a)||this;k.geohashBoundsInfo=f;return k}r.__extends(e,m);Object.defineProperty(e.prototype,"count",{get:function(){return this.attributes.cluster_count},enumerable:!1,configurable:!0});e.create=function(a,b,c,d,f,k,m,p){b=new e(b,c,d,k,m);b.displayId=a.createDisplayId(!0);b.referenceId=
p;b.tileLevel=f;return b};e.prototype.update=function(a,b,c,d,f,k){this.geometry.coords[0]=a;this.geometry.coords[1]=b;this.tileLevel=c;this.attributes=d;this.geohashBoundsInfo=f;this.referenceId=null;this.referenceId=k;return this};e.prototype.toJSON=function(){return{objectId:this.objectId,referenceId:1===this.attributes.cluster_count?this.referenceId:null,attributes:r.__assign(r.__assign({},this.attributes),{clusterId:this.objectId}),geometry:{x:this.geometry.coords[0],y:this.geometry.coords[1]}}};
return e}(F.default);B=function(t){function e(a,b,c){var d=t.call(this,a,c)||this;d.events=new G;d._geohashLevel=0;d._aggregateValueRanges={};d._aggregateValueRangesChanged=!1;d._geohashBuf=[];d._clusters=new Map;d._tiles=new Map;d.geometryInfo=a.geometryInfo;d._spatialReference=b;d._projectionSupportCheck=A.checkProjectionSupport(b,y.SpatialReference.WGS84);d._bitsets.geohash=c.getBitset(c.createBitset());d._bitsets.inserted=c.getBitset(c.createBitset());return d}r.__extends(e,t);e.prototype.updateSchema=
function(a,b){return r.__awaiter(this,void 0,void 0,function(){var c,d;return r.__generator(this,function(f){switch(f.label){case 0:c=this._schema,f.label=1;case 1:return f.trys.push([1,4,,5]),[4,t.prototype.updateSchema.call(this,a,b)];case 2:return f.sent(),[4,this._projectionSupportCheck];case 3:return f.sent(),[3,5];case 4:return f.sent(),[3,5];case 5:d=D.diff(c,b);a.mesh&&(a.targets.aggregate=!0);if(!b||v.isNone(d)&&!a.source&&!a.storage.filters)return[2];if(D.hasDiff(d,"params.fields")||!this._tree||
a.source)this._tree=new H.GeohashTree(b.params.fields,this._statisticFields),this._rebuildTree(),C("esri-2d-update-debug")&&console.debug("Aggregate mesh needs update due to tree changing");C("esri-2d-update-debug")&&console.debug("Applying Update - ClusterStore:",d);a.mesh=!0;a.targets[b.name]=!0;this._aggregateValueRanges={};return[2]}})})};e.prototype.sweepFeatures=function(a,b){var c=this;this._bitsets.inserted.forEachSet(function(d){a.has(d)||(d=b.lookupByDisplayIdUnsafe(d),c._remove(d))})};
e.prototype.sweepClusters=function(a,b){var c=this;this._clusters.forEach(function(d,f){d&&d.tileLevel!==b&&(a.releaseDisplayId(d.displayId),c._clusters.delete(f))})};e.prototype.onTileData=function(a,b,c,d,f,k){if(!this._schema||v.isNone(b.addOrUpdate))return b;d=this._tree;for(var e=this._getTransforms(a,this._spatialReference),p=b.addOrUpdate.getCursor();p.next();)this._update(p,f,d);if(!k)return b;f=[];this._getClustersForTile(f,a,this._schema.params.clusterRadius,c,d,e);b.type="replace"===b.type?
"replace":"update";b.addOrUpdate=L.FeatureSetReaderJSON.fromOptimizedFeatures(f,"esriGeometryPoint");b.addOrUpdate._storage=c;for(p=b.addOrUpdate.getCursor();p.next();)f=p.getDisplayId(),this._bitsets.computed.unset(f),this.setComputedAttributes(c,p,f,a.scale);this._aggregateValueRangesChanged&&b.end&&(this.events.emit("valueRangesChanged",{valueRanges:this._aggregateValueRanges}),this._aggregateValueRangesChanged=!1);return b};e.prototype.onTileUpdate=function(a){var b=this,c=a.added;a=a.removed;
c.length&&this._setGeohashLevel(c[0].level);if(this._schema){var d=this._schema.params.clusterRadius;a.forEach(function(a){b._tiles.delete(a.key.id);b._markTileClustersForDeletion(a,d)})}};e.prototype.getAggregate=function(a){var b=null;this._clusters.forEach(function(c){c&&c.displayId===a&&(b=c.toJSON())});return b};e.prototype.getDisplayId=function(a){return(a=this._clusters.get(a))?a.displayId:null};e.prototype.getDisplayIdForReferenceId=function(a){var b;this._clusters.forEach(function(c){c&&
c.referenceId===a&&(b=c.displayId)});return b};e.prototype.getAggregateValueRanges=function(){return this._aggregateValueRanges};e.prototype._rebuildTree=function(){this._bitsets.computed.clear();this._bitsets.inserted.clear();this._tree&&this._tree.clear()};e.prototype._remove=function(a){var b=a.getDisplayId(),c=a.getXHydrate(),d=a.getYHydrate(),f=this._geohashBuf[2*b],k=this._geohashBuf[2*b+1];this._bitsets.inserted.has(b)&&(this._bitsets.inserted.unset(b),this._tree.removeCursor(a,c,d,f,k,this._geohashLevel))};
e.prototype._update=function(a,b,c){var d=a.getDisplayId(),f=this._bitsets.inserted;b=b.isVisible(d);var k=f.has(d);b!==k&&(b?(b=a.getXHydrate(),k=a.getYHydrate(),this._setGeohash(d,b,k)&&(c.insertCursor(a,d,b,k,this._geohashBuf[2*d],this._geohashBuf[2*d+1],this._geohashLevel),f.set(d))):this._remove(a))};e.prototype._setGeohash=function(a,b,c){if(this._bitsets.geohash.has(a))return!0;var d=this._geohashBuf;if(this._spatialReference.isWebMercator)b=b/x.earthRadius*57.29577951308232,z.setGeohashBuf(d,
a,57.29577951308232*(Math.PI/2-2*Math.atan(Math.exp(-1*c/x.earthRadius))),b-360*Math.floor((b+180)/360),12);else{c=A.project({x:b,y:c},this._spatialReference,y.SpatialReference.WGS84);if(!c)return!1;z.setGeohashBuf(d,a,c.y,c.x,12)}this._bitsets.geohash.set(a);return!0};e.prototype._getClustersForTile=function(a,b,c,d,f,k,e){void 0===e&&(e=!0);var p=this._schema.params.clusterPixelBuffer;c*=2;var t=this._getGeohashLevel(b.key.level),u=Math.pow(2,b.key.level)*Math.ceil(m.TILE_SIZE/c),n=Math.ceil(p/
c)+0,g=Math.ceil(m.TILE_SIZE/c),q=b.key,p=Math.floor(q.col*m.TILE_SIZE/c)-n;c=Math.floor(q.row*m.TILE_SIZE/c)-n;for(var q=p+g+2*n,n=c+g+2*n,l=b.tileInfoView.getLODInfoAt(b.key.level),h=p;h<=q;h++)for(var p=function(c){var g=h;l.wrap&&(g=0>h?h+u:h%u);var p=l.wrap&&0>h,m=l.wrap&&h%u!==h;c=w._lookupCluster(d,l,b.key.level,g,c,t,f);if(v.isSome(c)){g=v.andThen(k,function(a){return p?a.left:m?a.right:a.tile});if(e&&v.isNone(g)||!c.count)return"continue";if(v.isSome(g)&&e){var n=c.geometry.clone(),q=c.attributes;
n.coords[0]=E.quantizeX(g,n.coords[0]);n.coords[1]=E.quantizeY(g,n.coords[1]);1===c.count&&v.isSome(c.referenceId)&&(q=r.__assign(r.__assign({},c.attributes),{referenceId:c.referenceId}));g=new F.default(n,q);g.displayId=c.displayId;a.push(g)}}},w=this,g=c;g<=n;g++)p(g)};e.prototype._getGeohashLevel=function(a){return Math.min(Math.ceil(a/2+2),12)};e.prototype._setGeohashLevel=function(a){a=this._getGeohashLevel(a);a=1*(Math.floor(a/1)+1)-1;this._geohashLevel!==a&&(this._geohashLevel=a,this._rebuildTree())};
e.prototype._getTransforms=function(a,b){var c={originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]};b=I.getInfo(b);if(!b)return{tile:c,left:null,right:null};var d=b.valid;b=d[0];var f=d[1],d=r.__assign(r.__assign({},c),{translate:[f,a.bounds[3]]});a=r.__assign(r.__assign({},c),{translate:[b-f+a.bounds[0],a.bounds[3]]});return{tile:c,left:d,right:a}};e.prototype._getClusterId=function(a,b,c){return(a&15)<<28|(b&16383)<<14|c&16383};e.prototype._markForDeletion=
function(a,b,c){a=this._getClusterId(a,b,c);this._clusters.delete(a)};e.prototype._getClusterBounds=function(a,b,c){var d=this._schema.params.clusterRadius,f=2*d;b=c%2?b*f:b*f+d;var e=c*f,d=e/m.TILE_SIZE;c=(b+f)/m.TILE_SIZE;f=(e-f)/m.TILE_SIZE;b=a.getXForColumn(b/m.TILE_SIZE);d=a.getYForRow(d);c=a.getXForColumn(c);a=a.getYForRow(f);return[b,d,c,a]};e.prototype._lookupCluster=function(a,b,c,d,f,e,m){var k=this._getClusterId(c,d,f),t=this._clusters.get(k),u=this._getClusterBounds(b,d,f);b=u[0];d=u[1];
f=u[2];var u=u[3],n={x:b,y:d},g={x:f,y:u},q=0,l=0,h=0,w=0;if(this._spatialReference.isWebMercator)h=n.x/x.earthRadius*57.29577951308232,q=h-360*Math.floor((h+180)/360),l=57.29577951308232*(Math.PI/2-2*Math.atan(Math.exp(-1*n.y/x.earthRadius))),h=g.x/x.earthRadius*57.29577951308232,h-=360*Math.floor((h+180)/360),w=57.29577951308232*(Math.PI/2-2*Math.atan(Math.exp(-1*g.y/x.earthRadius)));else{l=A.project(n,this._spatialReference,y.SpatialReference.WGS84);g=A.project(g,this._spatialReference,y.SpatialReference.WGS84);
if(!l||!g)return null;q=l.x;l=l.y;h=g.x;w=g.y}q>h&&(h=180);n={geohashX:0,geohashY:0};g={geohashX:0,geohashY:0};z.setGeohashXY(n,l,q,e);z.setGeohashXY(g,w,h,e);l=n.geohashX;h=n.geohashY;w=g.geohashX;g=g.geohashY;q={xLL:l,yLL:h,xTR:w,yTR:g,level:e};l=m.getRegionStatistics(l,h,w,g,e);e=l.count;h=l.xTotal;g=l.yTotal;m=l.referenceId;h=e?h/e:0;g=e?g/e:0;if(0===e)return this._clusters.set(k,null),null;l=r.__assign({cluster_count:e},l.attributes);a=v.isSome(t)?t.update(h,g,c,l,q,m):M.create(a,k,h,g,c,l,q,
m);0===e&&(a.geometry.coords[0]=(b+f)/2,a.geometry.coords[1]=(d+u)/2);this._clusters.set(k,a);this._updateAggregateValueRangeForCluster(a,a.tileLevel);return a};e.prototype._updateAggregateValueRangeForCluster=function(a,b){var c=this._aggregateValueRanges[b]||{minValue:Infinity,maxValue:0},d=c.minValue,e=c.maxValue;c.minValue=Math.min(d,a.count);c.maxValue=Math.max(e,a.count);this._aggregateValueRanges[b]=c;if(d!==c.minValue||e!==c.maxValue)this._aggregateValueRangesChanged=!0};e.prototype._markTileClustersForDeletion=
function(a,b){var c=2*b;b=Math.ceil(m.TILE_SIZE/c);for(var d=a.key,e=Math.floor(d.col*m.TILE_SIZE/c),c=Math.floor(d.row*m.TILE_SIZE/c),d=e;d<e+b;d++)for(var k=c;k<c+b;k++)this._markForDeletion(a.key.level,d,k)};return e}(K.Store2D);t.ClusterStore=B});
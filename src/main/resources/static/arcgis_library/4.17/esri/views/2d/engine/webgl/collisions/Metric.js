// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/Logger ../../../../../core/libs/gl-matrix-2/vec2f32 ../definitions ./BoundingBox ../util/serializationUtils".split(" "),function(g,h,k,l,e,q,r){Object.defineProperty(h,"__esModule",{value:!0});var m=k.getLogger("esri/views/2d/engine/webgl/collisions/Metric");g=function(){function c(a,b,d,n,c){this.id=a;this.range=b;this.boxes=null;this.minZoom=-1;this.placementPadding=this.offsetY=this.offsetX=this.directionY=this.directionX=this.size=0;this.anchor=l.vec2f32.fromValues(d,
n);this.baseZoom=c}c.prototype.add=function(a,b,d){a.x+=b;a.y+=d;this.bounds?(this.boxes?this.boxes.push(a):(this.boxes=[this.bounds,a],this.bounds=this.bounds.clone()),this.bounds.extend(a)):this.bounds=a};c.prototype.computeIndex=function(){var a=Math.floor(this.anchor[1]/e.COLLISION_BUCKET_SIZE);this.xBucket=Math.floor(this.anchor[0]/e.COLLISION_BUCKET_SIZE);this.yBucket=a;a=e.TILE_SIZE/e.COLLISION_BUCKET_SIZE;this.hasVV?this.yOverflow=this.xOverflow=a:(this.xOverflow=Math.min(a,Math.ceil(2*this.bounds.width/
e.COLLISION_BUCKET_SIZE)),this.yOverflow=Math.min(a,Math.ceil(2*this.bounds.height/e.COLLISION_BUCKET_SIZE)))};c.prototype.findCollisionDelta=function(a){var b=this.bounds.findCollisionDelta(a.bounds),d=this.boxes&&this.boxes.length,c=a.boxes&&a.boxes.length;return Math.abs(b)>e.COLLISION_MAX_ZOOM_DELTA||!d&&!c?b:d&&c?this._boxesToBoxes(a):d?this._boxesToBox(a):this._boxToBoxes(a)};c.prototype.computeVVOffset=function(a,b){b||m.error("mapview-labeling","Unable to compute label offset. Expected an evaluator function but found "+
b);var d=this.size;this.hasVV&&(a=b(a),d=isNaN(a)||null==a||Infinity===a?this.size:a);this._computeOffset(d)};c.prototype.setPlacementOffset=function(a,b,d,c,f){this.hasVV=a;this.size=b;this.placementPadding=Math.round(d);this.directionX=c;this.directionY=f};c.prototype.clone=function(){var a=new c(this.id,this.range,this.anchor[0],this.anchor[1],this.baseZoom);a.minZoom=this.minZoom;this.bounds&&(a.bounds=this.bounds.clone());this.boxes&&(a.boxes=this.boxes.map(function(a){return a.clone()}));a.xBucket=
this.xBucket;a.yBucket=this.yBucket;a.xOverflow=this.xOverflow;a.yOverflow=this.yOverflow;a.hasVV=this.hasVV;a.size=this.size;a.directionX=this.directionX;a.directionY=this.directionY;a.offsetX=this.offsetX;a.offsetY=this.offsetY;return a};c.prototype._boxToBoxes=function(a){var b=-Infinity,d=0;for(a=a.boxes;d<a.length;d++)var c=this.bounds.findCollisionDelta(a[d]),b=Math.max(c,b);return b};c.prototype._boxesToBox=function(a){for(var b=this.boxes[0].findCollisionDelta(a.bounds),d=1;d<this.boxes.length;d++)var c=
this.boxes[d].findCollisionDelta(a.bounds),b=Math.max(c,b);return b};c.prototype._boxesToBoxes=function(a){for(var b=-Infinity,c=0;c<this.boxes.length;c++)for(var n=this.boxes[c],f=0,e=a.boxes;f<e.length;f++)var p=n.findCollisionDelta(e[f]),b=Math.max(p,b);return b};c.prototype._computeOffset=function(a){this.offsetX=this.directionX*(a/2+this.placementPadding);this.offsetY=this.directionY*(a/2+this.placementPadding)};c.prototype.serialize=function(a){a.push(this.id);this.bounds.serialize(a);a.push(this.range.from);
a.push(this.range.count);a.push(this.anchor[0]);a.push(this.anchor[1]);a.push(this.baseZoom);a.push(this.hasVV?1:0);a.push(this.size);a.writeF32(this.directionX);a.writeF32(this.directionY);a.push(this.offsetX);a.push(this.offsetY);a.push(this.placementPadding);r.serializeList(a,this.boxes);return a};c.deserialize=function(a){var b=a.readInt32(),d=q.default.deserialize(a),e=a.readInt32(),f=a.readInt32(),g={from:e,count:f},p=a.readInt32(),h=a.readInt32(),k=a.readInt32(),e=a.readInt32(),f=a.readInt32(),
l=a.readF32(),m=a.readF32(),t=a.readInt32(),u=a.readInt32(),v=a.readInt32();a=r.deserializeList(a,q.default);b=new c(b,g,p,h,k);b.bounds=d;b.boxes=a;b.setPlacementOffset(!!e,f,v,l,m);b.offsetX=t;b.offsetY=u;b.computeIndex();e||b._computeOffset(f);return b};return c}();h.default=g});
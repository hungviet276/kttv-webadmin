// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/arrayUtils ../../../../core/maybe ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../geometry/support/aaBoundingRect ../../support/projectionUtils @dojo/framework/shim/Promise".split(" "),function(E,e,A,B,F,k,G,p,w,x){function r(a,b){return h.intersects(a,b)?h.contains(a,b)?0:2:1}function C(a,b){return h.intersects(a,b)?h.contains(a,b)?1:2:0}function D(a,b,c,d){a=b.getComponentAabb(c,
a,m);b=b.getObjectTransform(c);for(c=0;8>c;++c)f[0]=c&1?a[0]:a[3],f[1]=c&2?a[1]:a[4],f[2]=c&4?a[2]:a[5],k.vec3.transformMat3(f,f,b.rotationScale),k.vec3.add(f,f,b.position),d[3*c]=f[0],d[3*c+1]=f[1],d[3*c+2]=f[2];return d}Object.defineProperty(e,"__esModule",{value:!0});e.boundingBoxTop=e.createGetFeatureExtent=e.boundingBoxCornerPoints=e.filterWithMask=e.testMaskWithGeometry=e.computeMaskNodeMBS=e.acquireMaskFilterContext=e.processFilterGeometry=e.loadGeometryEngine=e.isGeometryEngineLoaded=void 0;
var h;e.isGeometryEngineLoaded=function(){return!!h};e.loadGeometryEngine=function(){return A.__awaiter(this,void 0,void 0,function(){return A.__generator(this,function(a){switch(a.label){case 0:return h?[2,h]:[4,new Promise(function(a,c){E(["../../../../geometry/geometryEngine"],a,c)})];case 1:return h=a.sent(),[2,h]}})})};e.processFilterGeometry=function(a,b){if(!a)return null;if("disjoint"===b&&"polygon"===a.type){var c=Array(a.rings.length);for(b=0;b<a.rings.length;++b){var d=w.fromValues(Infinity,
Infinity,-Infinity,-Infinity);w.expandWithNestedArray(d,a.rings[b]);c[b]={type:"polygon",rings:[a.rings[b]],spatialReference:a.spatialReference,aabr:d}}c.sort(function(a,c){return a.aabr[0]-c.aabr[0]});var u=new Set,e=new B.PositionHint;a=function(a){var b=c[a];for(a+=1;a<c.length;++a){var d=c[a];if(d.aabr[0]>=b.aabr[2])break;u.add(d)}u.forEach(function(a){b!==a&&(a.aabr[2]<=b.aabr[0]?u.delete(a):h.intersects(b,a)&&(b.rings=b.rings.concat(a.rings),w.expand(b.aabr,a.aabr),delete b._geVersion,u.delete(a),
a=B.indexOf(c,a,c.length,e),c.splice(a,1)))});u.add(b)};for(b=0;b<c.length;++b)a(b);for(a=0;a<c.length;a++)delete c[a].aabr;return c}return[a]};e.acquireMaskFilterContext=function(a,b,c,d,e){b=b.renderSpatialReference;var u=new Map,f={rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],hasZ:!1,hasM:!1,type:"polygon",spatialReference:c};f.rings[0][3]=f.rings[0][0];var k,m;switch(a){case "intersects":k=function(a,b){return h.intersects(a,b)?0:2};m=r;break;case "contains":k=function(a,b){return h.contains(a,b)?
2:1};m=r;break;default:k=function(a,b){return h.disjoint(a,b)?2:1},m=C}return{collection:d,object:e,type:a,maskSR:c,renderSR:b,aabbCache:u,triangle:f,positions:{indices:null,data:null,stride:0,startIndex:0,endIndex:0},triangleTest:k,geometryTest:m}};e.computeMaskNodeMBS=function(a,b){var c={x:a[0],y:a[1],hasZ:!1,hasM:!1,type:"point",spatialReference:b.maskSR};a=b.maskSR.isWGS84||b.maskSR.isWebMercator?h.geodesicBuffer(c,a[3],1):h.buffer(c,a[3],1);a.type="polygon";return a};e.testMaskWithGeometry=
function(a,b,c){switch(c){case "intersects":case "contains":return r(a,b);case "disjoint":return C(a,b)}};var H=Math.pow(2,-32);e.filterWithMask=function(a,b,c){var d=c.collection,e=c.object,f=c.renderSR,h=c.maskSR,t=c.geometryTest,p=c.aabbCache,g=p.get(b);if(!g){var n=d.getObjectTransform(e);d.getComponentAabb(e,b,m);for(var l=[[m[0],m[1],0],[m[0],m[4],0],[m[3],m[4],0],[m[3],m[1],0]],g=0;4>g;++g)k.vec3.transformMat3(l[g],l[g],n.rotationScale),k.vec3.add(l[g],l[g],n.position),x.vectorToVector(l[g],
f,l[g],h);g={rings:[l],hasZ:!1,hasM:!1,type:"polygon",spatialReference:h};g.rings[0][4]=g.rings[0][0];p.set(b,g)}switch(t(a,g)){case 1:return!1;case 0:return!0}var t=c.triangle,p=c.triangleTest,g=c.positions,n=t.rings[0][0],l=t.rings[0][1],q=t.rings[0][2],v=d.getObjectTransform(e);d.getComponentPositions(e,b,g);b=g.indices;for(var d=g.data,e=g.stride,w=g.endIndex,g=g.startIndex;g<w;g+=3){var r=e*b[g+0],y=e*b[g+1],z=e*b[g+2];k.vec3.set(n,d[r+0],d[r+1],d[r+2]);k.vec3.set(l,d[y+0],d[y+1],d[y+2]);k.vec3.set(q,
d[z+0],d[z+1],d[z+2]);k.vec3.transformMat3(n,n,v.rotationScale);k.vec3.transformMat3(l,l,v.rotationScale);k.vec3.transformMat3(q,q,v.rotationScale);k.vec3.add(n,n,v.position);k.vec3.add(l,l,v.position);k.vec3.add(q,q,v.position);x.vectorToVector(n,f,n,h);x.vectorToVector(l,f,l,h);x.vectorToVector(q,f,q,h);if(!(Math.abs((l[0]-n[0])*(q[1]-n[1])-(l[1]-n[1])*(q[0]-n[0]))<H))switch(delete t._geVersion,p(a,t)){case 1:return!1;case 0:return!0}}switch(c.type){case "intersects":return!1;default:return!0}};
e.boundingBoxCornerPoints=D;e.createGetFeatureExtent=function(a,b,c){var d=new Float64Array(24);return function(e){var f=e.meta.featureExtents;if(F.isNone(f)){f=new Float64Array(6*e.meta.featureIds.length);e.meta.featureExtents=f;for(var h=0;h<f.length;h+=6)f[h]=Number.POSITIVE_INFINITY}f=new Float64Array(f.buffer,6*e.index*Float64Array.BYTES_PER_ELEMENT,6);f[0]===Number.POSITIVE_INFINITY&&(D(e.index,c,e.meta.objectHandle,d),x.bufferToBuffer(d,b,0,d,a,0,8)?p.expandWithBuffer(p.NEGATIVE_INFINITY,d,
0,8,f):p.set(f,p.ZERO));return f}};e.boundingBoxTop=function(a,b,c,d){a=b.getComponentAabb(c,a,m);b=b.getObjectTransform(c);d[0]=0;d[1]=0;for(c=d[2]=0;8>c;++c)f[0]=c&1?a[0]:a[3],f[1]=c&2?a[1]:a[4],f[2]=a[5],k.vec3.transformMat3(f,f,b.rotationScale),k.vec3.add(f,f,b.position),d[0]+=f[0],d[1]+=f[1],d[2]+=f[2];d[0]/=8;d[1]/=8;d[2]/=8;return d};var m=p.create(),f=G.vec3f64.create()});
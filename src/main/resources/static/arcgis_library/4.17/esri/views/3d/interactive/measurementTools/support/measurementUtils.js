// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../../../geometry/geometryEngine ../../../../../geometry/Polygon ../../../../../geometry/SpatialReference ../../../../../geometry/support/geodesicUtils ../../../support/mathUtils ../../../support/pointUtils ../../../support/projectionUtils".split(" "),function(z,A,d,m,u,v,w,t,x,n,p){var q;(function(f){f.boundingSphere=function(a,b){var c=b.center;d.vec3.set(c,0,0,0);for(var l=0;l<a.length;++l)d.vec3.add(c,
c,a[l]);d.vec3.scale(c,c,1/a.length);for(var e=0,l=0;l<a.length;++l)e=Math.max(e,d.vec3.squaredDistance(c,a[l]));b.radius=Math.sqrt(e)};f.bestFitPlane=function(a,b){if(3>a.length)throw Error("need at least 3 points to fit a plane");x.planeFromPoints(a[0],a[1],a[2],b)};f.planePointDistance=function(a,b){return d.vec3.dot(a,b)+a[3]};f.segmentLengthEuclidean=function(a,b,c){return n.pointToVector(a,h,c)&&n.pointToVector(b,k,c)?d.vec3.distance(h,k):0};f.segmentLengthGeodesic=function(a,b){if(!n.pointToWGS84ComparableLonLat(a,
h)||!n.pointToWGS84ComparableLonLat(b,k))return 0;a={distance:null};t.inverseGeodeticSolver(a,[h[0],h[1]],[k[0],k[1]]);return a.distance};f.segmentLengthGeodesicVector=function(a,b){var c={distance:null};t.inverseGeodeticSolver(c,[a[0],a[1]],[b[0],b[1]]);return c.distance};f.triangleAreaEuclidean=function(a,b,c){return.5*Math.abs((b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]))};f.triangleAreaGeodesic=function(a,b,c,d){var e=y;if(!p.vectorToWGS84ComparableLonLat(a,d,h)||!p.vectorToWGS84ComparableLonLat(b,
d,k)||!p.vectorToWGS84ComparableLonLat(c,d,r))return 0;e.setPoint(0,0,h);e.setPoint(0,1,k);e.setPoint(0,2,r);return Math.abs(u.geodesicArea(e,"square-meters"))};f.tangentFrame=function(a,b,c){Math.abs(a[0])>Math.abs(a[1])?d.vec3.set(b,0,1,0):d.vec3.set(b,1,0,0);d.vec3.cross(c,a,b);d.vec3.normalize(b,b);d.vec3.cross(b,c,a);d.vec3.normalize(c,c)};f.fitHemisphere=function(a,b,c){void 0===b&&(b=null);void 0===c&&(c=!0);var f=function(a,b){if(0===b[0]&&0===b[1]&&0===b[2])return!1;for(var c=0;c<a.length;++c)if(-1E-6>
d.vec3.dot(b,a[c]))return!1;return!0};if(0===a.length)return!1;if(1===a.length)return b&&d.vec3.copy(b,a[0]),!0;d.vec3.set(g,0,0,0);for(var e=0;e<a.length;++e)d.vec3.add(g,g,a[e]);d.vec3.normalize(g,g);if(f(a,g))return b&&d.vec3.copy(b,g),!0;if(!c)return!1;for(e=0;e<a.length;++e)for(c=0;c<a.length;++c)if(e!==c&&(d.vec3.cross(g,a[e],a[c]),d.vec3.normalize(g,g),f(a,g)))return b&&d.vec3.copy(b,g),!0;return!1};f.compareSets=function(a,b){if(a===b)return!0;if(a.size!==b.size)return!1;for(var c=0;c<a.size;++c)if(!b.has(a[c]))return!1;
return!0}})(q||(q={}));var h=m.vec3f64.create(),k=m.vec3f64.create(),r=m.vec3f64.create(),y=new v({rings:[[h,k,r]],spatialReference:w.WGS84}),g=m.vec3f64.create();return q});
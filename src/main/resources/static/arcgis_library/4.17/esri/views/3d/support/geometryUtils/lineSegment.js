// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/mathUtils ../../../../core/ObjectStack ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../stack".split(" "),function(A,c,q,y,f,p,l){function r(b){return b?{origin:p.vec3f64.clone(b.origin),vector:p.vec3f64.clone(b.vector)}:{origin:p.vec3f64.create(),vector:p.vec3f64.create()}}function u(b,a){var d=z.get();d.origin=b;d.vector=a;return d}function v(b,a,d){void 0===d&&(d=r());f.vec3.copy(d.origin,b);f.vec3.copy(d.vector,a);return d}
function w(b,a){a=f.vec3.subtract(l.sv3d.get(),a,b.origin);var d=f.vec3.dot(b.vector,a),c=f.vec3.dot(b.vector,b.vector),d=q.clamp(d/c,0,1);b=f.vec3.subtract(l.sv3d.get(),f.vec3.scale(l.sv3d.get(),b.vector,d),a);return f.vec3.dot(b,b)}function x(b,a,d,c,k){var g=b.vector,e=b.origin;a=f.vec3.subtract(l.sv3d.get(),a,e);e=f.vec3.length(g);a=f.vec3.dot(g,a)/e;f.vec3.scale(k,g,q.clamp(a,d,c));return f.vec3.add(k,k,b.origin)}function t(b,a,d,c){var k=b.origin,g=f.vec3.add(l.sv3d.get(),k,b.vector);b=a.origin;
var e=f.vec3.add(l.sv3d.get(),b,a.vector),h=l.sv3d.get();a=l.sv3d.get();h[0]=k[0]-b[0];h[1]=k[1]-b[1];h[2]=k[2]-b[2];a[0]=e[0]-b[0];a[1]=e[1]-b[1];a[2]=e[2]-b[2];if(1E-6>Math.abs(a[0])&&1E-6>Math.abs(a[1])&&1E-6>Math.abs(a[2]))return!1;e=l.sv3d.get();e[0]=g[0]-k[0];e[1]=g[1]-k[1];e[2]=g[2]-k[2];if(1E-6>Math.abs(e[0])&&1E-6>Math.abs(e[1])&&1E-6>Math.abs(e[2]))return!1;var g=h[0]*a[0]+h[1]*a[1]+h[2]*a[2],n=a[0]*e[0]+a[1]*e[1]+a[2]*e[2],m=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],p=(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])*
m-n*n;if(1E-6>Math.abs(p))return!1;h=(g*n-(h[0]*e[0]+h[1]*e[1]+h[2]*e[2])*m)/p;g=(g+n*h)/m;d&&(h=q.clamp(h,0,1),g=q.clamp(g,0,1));d=l.sv3d.get();n=l.sv3d.get();d[0]=k[0]+h*e[0];d[1]=k[1]+h*e[1];d[2]=k[2]+h*e[2];n[0]=b[0]+g*a[0];n[1]=b[1]+g*a[1];n[2]=b[2]+g*a[2];c.tA=h;c.tB=g;c.pA=d;c.pB=n;c.distance2=f.vec3.squaredDistance(d,n);return!0}Object.defineProperty(c,"__esModule",{value:!0});c.closestLineSegmentDistance2=c.closestLineSegmentPoint=c.closestRayDistance2=c.projectPointClamp=c.pointAt=c.projectPoint=
c.distance=c.distance2=c.fromPoints=c.fromValues=c.copy=c.wrap=c.create=void 0;c.create=r;c.wrap=u;c.copy=function(b,a){void 0===a&&(a=r());return v(b.origin,b.vector,a)};c.fromValues=v;c.fromPoints=function(b,a,d){void 0===d&&(d=r());f.vec3.copy(d.origin,b);f.vec3.subtract(d.vector,a,b);return d};c.distance2=w;c.distance=function(b,a){return Math.sqrt(w(b,a))};c.projectPoint=function(b,a,d){return x(b,a,0,1,d)};c.pointAt=function(b,a,d){return f.vec3.add(d,b.origin,f.vec3.scale(d,b.vector,a))};c.projectPointClamp=
x;c.closestRayDistance2=function(b,a){if(t(b,u(a.origin,a.direction),!1,m)){a=m.tA;var d=m.pB,c=m.distance2;if(0<=a&&1>=a)return c;if(0>a)return f.vec3.squaredDistance(b.origin,d);if(1<a)return f.vec3.squaredDistance(f.vec3.add(l.sv3d.get(),b.origin,b.vector),d)}return null};c.closestLineSegmentPoint=function(b,a,c){return t(b,a,!0,m)?(f.vec3.copy(c,m.pA),!0):!1};c.closestLineSegmentDistance2=function(b,a){return t(b,a,!0,m)?m.distance2:null};var m={tA:0,tB:0,pA:p.vec3f64.create(),pB:p.vec3f64.create(),
distance2:0},z=new y.ObjectStack(function(){return{origin:null,vector:null}})});
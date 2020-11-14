// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/mathUtils ../../../../core/ObjectPool ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ./FeatureTileDescriptor3D ../../state/Frustum ../../support/FrustumExtentIntersection ../../support/geometryUtils".split(" "),function(n,l,t,u,k,v,m,g,w,f){Object.defineProperty(l,"__esModule",{value:!0});l.FeatureTileVisibility3D=void 0;n=function(){function b(a){this.surfaceElevation=0;this.cache=new Map;a=a.renderCoordsHelper;this.frustum=
new g.Frustum({renderCoordsHelper:a});this.extendedFrustum=new g.Frustum({renderCoordsHelper:a});this.intersector=new w.FrustumExtentIntersection({renderCoordsHelper:a});this.renderCoordsHelper=a}b.prototype.begin=function(a,d){this.surfaceElevation=d;this.aboveGround=this.renderCoordsHelper.getAltitude(a.eye)>d;this.frustum.update(a);this.shortenFrustumFarPlane(this.frustum);this.updateExtendedFrustum(a,d)};b.prototype.end=function(){this.cache.clear()};b.prototype.calculate=function(a){if(this.allTilesInvisible)return 0;
var d=1===this.renderCoordsHelper.viewingMode&&a.lij[0]>=x&&a.lij[0]<y,c=this.getOrCalculateSingleTileVisibility(a,!d);return 0!==c&&d?this.calculateAggregatedChildrenVisibility(a):c};b.prototype.shortenFrustumFarPlane=function(a){for(var d=a.mutablePoints,c=0,b=g.Frustum.nearFarLineIndices;c<b.length;c++){var h=b[c],f=h[1],h=d[h[0]];k.vec3.subtract(e,d[f],h);k.vec3.scale(e,e,z);k.vec3.add(d[f],h,e)}a.updatePoints(d)};b.prototype.calculateAggregatedChildrenVisibility=function(a){var d=0,c=this.cache.get(a.id);
if(null!=c)return c;c=p.acquire();a.getChildren(c);for(var b=0;b<c.length;b++){var e=this.calculate(c[b]);if(0!==e&&(d=e,2===e))break}p.release(c);this.cache.set(a.id,d);return d};b.prototype.getOrCalculateSingleTileVisibility=function(a,d){var c=this.cache.get(a.id);if(null!=c)return c;c=this.calculateSingleTileVisibility(a);d&&this.cache.set(a.id,c);return c};b.prototype.calculateSingleTileVisibility=function(a){if(!this.aboveGround&&1===this.renderCoordsHelper.viewingMode&&a.lij[0]<A){if(0===this.calculateSingleTileVisibilitySided(a,
!1))return this.calculateSingleTileVisibilitySided(a,!0)}else return this.calculateSingleTileVisibilitySided(a,this.aboveGround)};b.prototype.calculateSingleTileVisibilitySided=function(a,d){this.intersector.update(a.extent,a.tilingScheme.spatialReference,this.surfaceElevation,d);return this.intersector.isVisibleInFrustum(this.extendedFrustum)?this.intersector.isVisibleInFrustum(this.frustum,!0)?2:1:0};b.prototype.updateExtendedFrustum=function(a,d){var c=this.renderCoordsHelper;this.extendedFrustum.update(a);
this.shortenFrustumFarPlane(this.extendedFrustum);var b=this.renderCoordsHelper.worldUpAtPosition(a.eye,e);this.aboveGround||k.vec3.negate(b,b);b=t.acosClamped(-k.vec3.dot(b,a.viewForward));this.allTilesInvisible=b>(Math.PI+a.fovY)/2;if(!this.allTilesInvisible&&(this.hasExtendedFrustum=b>a.fovY/2)){a=this.extendedFrustumParameters(d);d=this.extendedFrustum.mutablePoints;for(b=0;4>b;b++){var h=a.pointIndices[b],g=d[h],l=c.getAltitude(g);if(a.needsAltitudeAdjustment(l)){this.renderCoordsHelper.worldUpAtPosition(g,
e);switch(h){case 4:case 7:case 0:case 3:f.plane.projectVector(this.extendedFrustum.planes[0],e,e);break;case 5:case 6:case 1:case 2:f.plane.projectVector(this.extendedFrustum.planes[1],e,e)}k.vec3.scale(e,e,a.direction);this.renderCoordsHelper.intersectInfiniteManifold(f.ray.wrap(g,e),a.zWithMargin,g)}}this.extendedFrustum.updatePoints(d);f.plane.fromPoints(d[0],d[1],d[2],q);f.plane.fromPoints(d[1],d[2],d[3],r);0>k.vec3.dot(f.plane.normal(q),f.plane.normal(r))&&(c=this.extendedFrustum.mutablePoints,
this.aboveGround?(a=[c[1],c[0]],c[0]=a[0],c[1]=a[1]):(a=[c[2],c[3]],c[3]=a[0],c[2]=a[1]),this.extendedFrustum.updatePoints(c))}};b.prototype.extendedFrustumParameters=function(a){return this.aboveGround?this.extendedFrustumParametersAboveSurface(a,1):this.extendedFrustumParametersBelowSurface(a,1)};b.prototype.extendedFrustumParametersAboveSurface=function(a,b){var c=a-b;return{zWithMargin:c,pointIndices:g.Frustum.planePointIndices.bottom,direction:-1,needsAltitudeAdjustment:function(a){return a>
c}}};b.prototype.extendedFrustumParametersBelowSurface=function(a,b){var c=a+b;return{zWithMargin:c,pointIndices:g.Frustum.planePointIndices.top,direction:1,needsAltitudeAdjustment:function(a){return a<c}}};return b}();l.FeatureTileVisibility3D=n;var x=2,y=6,A=12,z=.95,e=v.vec3f64.create(),q=f.plane.create(),r=f.plane.create(),p=new u(Array,function(b){4!==b.length&&(b[0]=new m.FeatureTileDescriptor3D,b[1]=new m.FeatureTileDescriptor3D,b[2]=new m.FeatureTileDescriptor3D,b[3]=new m.FeatureTileDescriptor3D)},
function(b){b[0].release();b[1].release();b[2].release();b[3].release()});l.default=n});
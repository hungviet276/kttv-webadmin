// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ./common ../../support/geometryUtils ../../support/mathUtils".split(" "),function(w,f,g,h,m,k,q){function p(a,b,c){void 0===c&&(c=m.defaultApplyOptions);if(!a.state.isLocal)return 0;var d=a.state.constraints.distance;if(!a.pointsOfInterest.surfaceOrigin.renderLocation||Infinity===d)return 0;n.min=0;n.max=d;var d=n,e=c.interactionType;if(0!==e){var f=d.min,h=d.max,l=c.interactionStartCamera;c=c.interactionFactor;
var e=1===e||4===e,k=p(a,l),l=0===k?0:g.vec3.distance(l.eye,a.pointsOfInterest.surfaceOrigin.renderLocation);d.min=f;d.max=h;m.adjustRangeForInteraction(k,l,e,c,.05*l,d)}a=g.vec3.distance(b.eye,a.pointsOfInterest.surfaceOrigin.renderLocation);a=n.max-a;return-1E-6<=a?0:a}Object.defineProperty(f,"__esModule",{value:!0});f.applyDistanceConstraint=f.getDistanceConstraintError=void 0;f.getDistanceConstraintError=p;f.applyDistanceConstraint=function(a,b,c){void 0===c&&(c=m.defaultApplyOptions);var d=p(a,
b,c);if(0===d)return!1;var e=a.pointsOfInterest.surfaceOrigin,d=g.vec3.distance(b.eye,a.pointsOfInterest.surfaceOrigin.renderLocation)+d,f=g.vec3.copy(r,b.eye);c=m.interactionDirectionTowardsConstraintMinimization(b,c.interactionDirection,q.directionFromTo(t,b.eye,a.pointsOfInterest.surfaceOrigin.renderLocation),u);return k.sphere.intersectRay(k.sphere.wrap(d,e.renderLocation),k.ray.wrap(b.eye,c),b.eye)?(e=g.vec3.subtract(v,b.eye,f),g.vec3.add(b.center,b.center,e),b.markViewDirty(),e=a.renderCoordsHelper.getAltitude(b.center),
a.renderCoordsHelper.intersectInfiniteManifold(b.ray,e,b.center),b.markViewDirty(),!0):!1};var n={min:0,max:0},r=h.vec3f64.create(),v=h.vec3f64.create(),u=h.vec3f64.create(),t=h.vec3f64.create()});
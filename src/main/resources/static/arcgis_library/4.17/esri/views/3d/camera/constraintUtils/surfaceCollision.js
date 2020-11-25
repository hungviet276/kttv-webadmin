// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../../../../core/libs/gl-matrix-2/vec3f64","../intersectionUtils"],function(m,b,d,k,l){Object.defineProperty(b,"__esModule",{value:!0});b.applySurfaceCollisionConstraint=void 0;b.applySurfaceCollisionConstraint=function(e,a,f){void 0===f&&(f=0);var c=e.state.constraints;if(!c.collision.enabled)return!1;var g=l.surfaceElevationBelowEye(e,a),b=e.renderCoordsHelper.getAltitude(a.eye),c=g+c.collision.elevationMargin;if(b>=c)return!1;
g=d.vec3.length(a.eye);d.vec3.subtract(h,a.center,a.eye);e.renderCoordsHelper.setAltitude(c,a.eye);1===f?d.vec3.add(a.center,a.eye,h):2===f&&d.vec3.scale(a.center,a.center,(g-b+c)/g);a.markViewDirty();return!0};var h=k.vec3f64.create()});
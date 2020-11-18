// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../../core/libs/gl-matrix-2/vec4f64"],function(c,b,d,e){Object.defineProperty(b,"__esModule",{value:!0});b.Node=b.NodeBase=void 0;c=function(){return function(c,b){this.id=c;this.mbs=b;this.renderMbs=e.vec4f64.fromArray([0,0,0,-1]);this.imModificationImpact=4}}();b.NodeBase=c;c=function(c){function b(a,b,d,e,f,g,h,k,l,m){a=c.call(this,a,d)||this;a.index=b;a.childCount=e;a.level=f;a.resources=g;a.version=h;a.lodMetric=k;a.maxError=l;a.numFeatures=m;a.failed=
!1;a.hasModifications=!1;a.cacheState=0;a.vertexCount=0;a.memory=0;return a}d.__extends(b,c);return b}(c);b.Node=c});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ./featureExpressionInfoUtils ./graphicUtils ../../webgl-engine/lib/Object3DStateSet".split(" "),function(p,F,x,z,q,m,h,A,B,C){p=function(){function c(a,b,c,d){this.graphics3DSymbolLayer=a;this.instanceIndex=b;this.elevationAligner=c;this.elevationContext=d;this.type="lod-instance";this.alignedSampledElevation=
0;this.needsElevationUpdates=this.isElevationSource=!1}c.prototype.initialize=function(){};c.prototype.setVisibility=function(a){var b=this.lodRenderer.instanceData;return a!==b.getVisible(this.instanceIndex)?(b.setVisible(this.instanceIndex,a),!0):!1};c.prototype.destroy=function(){null!=this.instanceIndex&&(this.lodRenderer.instanceData.removeInstance(this.instanceIndex),this.graphics3DSymbolLayer.notifyDestroyGraphicLayer(this))};c.prototype.alignWithElevation=function(a,b,c){this.elevationAligner&&
(A.setContextFeature(this.elevationContext.featureExpressionInfoContext,c),a=this.elevationAligner(this,this.elevationContext,a,b),null!=a&&(this.alignedSampledElevation=a))};c.prototype.getBSRadius=function(){var a=this.lodRenderer;return a.baseBoundingSphere.radius*a.instanceData.getCombinedMaxScaleFactor(this.instanceIndex)};c.prototype.getCenterObjectSpace=function(a){void 0===a&&(a=m.vec3f64.create());this.lodRenderer.instanceData.getCombinedLocalTransform(this.instanceIndex,f);return q.vec3.transformMat4(a,
this.lodRenderer.baseBoundingSphere.center,f)};c.prototype.getBoundingBoxObjectSpace=function(a){void 0===a&&(a=h.create());this.lodRenderer.instanceData.getCombinedLocalTransform(this.instanceIndex,f);var b=this.lodRenderer.baseBoundingBox;h.empty(a);for(var c=0;8>c;++c)q.vec3.set(d,0===(c&1)?b[0]:b[3],0===(c&2)?b[1]:b[4],0===(c&4)?b[2]:b[5]),q.vec3.transformMat4(d,d,f),h.expandPointInPlace(a,d);return a};c.prototype.computeAttachmentOrigin=function(a){this.lodRenderer.instanceData.getGlobalTransform(this.instanceIndex,
f);a.render.origin[0]+=f[12];a.render.origin[1]+=f[13];a.render.origin[2]+=f[14];a.render.num++};c.prototype.getProjectedBoundingBox=function(a,c,m,D,p){return x.__awaiter(this,void 0,void 0,function(){var b,v,r,e,t,u,g,n,y;return x.__generator(this,function(l){switch(l.label){case 0:b=this.getBoundingBoxObjectSpace(p);v=E;r=h.isPoint(b)?1:v.length;this.lodRenderer.instanceData.getGlobalTransform(this.instanceIndex,f);for(e=0;e<r;e++)t=v[e],d[0]=b[t[0]],d[1]=b[t[1]],d[2]=b[t[2]],q.vec3.transformMat4(d,
d,f),k[3*e+0]=d[0],k[3*e+1]=d[1],k[3*e+2]=d[2];if(!a(k,0,r))return[2,null];h.empty(b);u=null;this.calculateRelativeScreenBounds&&(u=this.calculateRelativeScreenBounds());for(e=0;e<3*r;e+=3){for(g=0;3>g;g++)b[g]=Math.min(b[g],k[e+g]),b[g+3]=Math.max(b[g+3],k[e+g]);u&&m.push({location:k.slice(e,e+3),screenSpaceBoundingRect:u})}if(!c)return[3,5];h.center(b,w);if("absolute-height"===this.elevationContext.mode)return[3,5];n=void 0;y=B.demResolutionForBoundingBox(b,c);l.label=1;case 1:return l.trys.push([1,
3,,4]),[4,c.service.queryElevation(w[0],w[1],D,y,"ground")];case 2:return n=l.sent(),[3,4];case 3:return l.sent(),n=null,[3,4];case 4:null!=n&&h.offset(b,0,0,-this.alignedSampledElevation+n),l.label=5;case 5:return[2,b]}})})};c.prototype.addObjectState=function(a,b){var c=this;0===a&&(a=C.generateObject3DStateId(a),this.addHighlightId(a),b.addExternal(function(a){c.removeHighlightId(a)},a))};c.prototype.removeObjectState=function(a){this.highlights&&this.highlights.forEach(function(b){return a.remove(b)})};
c.prototype.addHighlightId=function(a){this.highlights=this.highlights||new Set;this.highlights.add(a);this.lodRenderer.instanceData.setHighlight(this.instanceIndex,!0)};c.prototype.removeHighlightId=function(a){this.highlights&&(this.highlights.delete(a),this.lodRenderer.instanceData.setHighlight(this.instanceIndex,0<this.highlights.size),0===this.highlights.size&&(this.highlights=null))};Object.defineProperty(c.prototype,"lodRenderer",{get:function(){return this.graphics3DSymbolLayer.lodRenderer},
enumerable:!1,configurable:!0});return c}();var k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],d=m.vec3f64.create(),w=m.vec3f64.create(),E=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]],f=z.mat4f64.create();return p});
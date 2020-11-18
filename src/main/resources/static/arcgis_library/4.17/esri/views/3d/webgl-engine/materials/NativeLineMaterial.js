// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Logger ../../../../core/maybe ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/geometryUtils ../../support/buffer/BufferView ../lib/geometryDataUtils ../lib/GLMaterial ../lib/Material ../lib/Util ./internal/bufferWriterUtils ./internal/DefaultBufferWriter ./internal/MaterialUtil ./renderers/utils ../shaders/NativeLineTechnique".split(" "),
function(G,ba,H,N,z,x,O,d,k,b,P,Q,R,S,t,T,A,I,U,J){var V=N.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial");G=function(k){function a(c,a){a=k.call(this,a)||this;a.techniqueConfig=new J.NativeLineTechniqueConfiguration;a.params=I.copyParameters(c,W);return a}H.__extends(a,k);a.prototype.setParameterValues=function(c){var a=this.params,b;for(b in c)a[b]=c[b];this.parametersChanged()};a.prototype.getParameters=function(){return this.params};a.prototype.getTechniqueConfig=function(c){this.techniqueConfig.output=
c;this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled;this.techniqueConfig.vertexColors=this.params.vertexColors;this.techniqueConfig.transparent=1>this.params.color[3]||1>this.params.width;c=z.isSome(this.params.stipplePattern);this.techniqueConfig.stippleEnabled=c;this.techniqueConfig.stippleOffColorEnabled=c&&z.isSome(this.params.stippleOffColor);this.techniqueConfig.stippleIntegerRepeatsEnabled=c&&this.params.stippleIntegerRepeats;this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees;
return this.techniqueConfig};a.prototype.getPassParameters=function(){return this.params};a.prototype.intersect=function(c,a,b,d,h,m,l,g,e){e?I.intersectDrapedRenderLineGeometry(c,d,m,1,l):this.intersectLineGeometry(c,a,b,d,l)};a.prototype.intersectLineGeometry=function(c,a,f,r,k){if(r.options.selectionMode&&!U.isInstanceHidden(a))if(t.isTranslationMatrix(f)){a=c.data.getVertexAttr().position.data;var m=r.camera,l=X;O.vec2.copy(l,r.point);d.vec3.set(y[0],l[0]-2,l[1]+2,0);d.vec3.set(y[1],l[0]+2,l[1]+
2,0);d.vec3.set(y[2],l[0]+2,l[1]-2,0);d.vec3.set(y[3],l[0]-2,l[1]-2,0);for(var g=0;4>g;g++)m.unprojectPoint(y[g],q[g]);b.plane.fromPoints(m.eye,q[0],q[1],C);b.plane.fromPoints(m.eye,q[1],q[2],D);b.plane.fromPoints(m.eye,q[2],q[3],E);b.plane.fromPoints(m.eye,q[3],q[0],F);c=Number.MAX_VALUE;for(g=0;g<a.length-5;g+=3)if(h[0]=a[g]+f[12],h[1]=a[g+1]+f[13],h[2]=a[g+2]+f[14],n[0]=a[g+3]+f[12],n[1]=a[g+4]+f[13],n[2]=a[g+5]+f[14],!(0>b.plane.signedDistance(C,h)&&0>b.plane.signedDistance(C,n)||0>b.plane.signedDistance(D,
h)&&0>b.plane.signedDistance(D,n)||0>b.plane.signedDistance(E,h)&&0>b.plane.signedDistance(E,n)||0>b.plane.signedDistance(F,h)&&0>b.plane.signedDistance(F,n))){m.projectPoint(h,u);m.projectPoint(n,v);if(0>u[2]&&0<v[2]){d.vec3.subtract(p,h,n);var e=m.frustum,B=-b.plane.signedDistance(e.planes[4],h),e=B/d.vec3.dot(p,b.plane.normal(e.planes[4]));d.vec3.scale(p,p,e);d.vec3.add(h,h,p);m.projectPoint(h,u)}else if(0<u[2]&&0>v[2])d.vec3.subtract(p,n,h),e=m.frustum,B=-b.plane.signedDistance(e.planes[4],n),
e=B/d.vec3.dot(p,b.plane.normal(e.planes[4])),d.vec3.scale(p,p,e),d.vec3.add(n,n,p),m.projectPoint(n,v);else if(0>u[2]&&0>v[2])continue;u[2]=0;v[2]=0;e=b.lineSegment.distance2(b.lineSegment.fromPoints(u,v,K),l);e<c&&(c=e,d.vec3.copy(L,h),d.vec3.copy(M,n))}f=r.rayBeginPoint;r=r.rayEndPoint;4>c&&(c=Number.MAX_VALUE,b.lineSegment.closestLineSegmentPoint(b.lineSegment.fromPoints(L,M,K),b.lineSegment.fromPoints(f,r,Y),w)&&(d.vec3.subtract(w,w,f),c=d.vec3.length(w),d.vec3.scale(w,w,1/c),c/=d.vec3.distance(f,
r)),k(c,w))}else V.error("intersection assumes a translation-only matrix")};a.prototype.computeAttachmentOrigin=function(c,a){c=c.data;return(c="getVertexAttr"in c?c.getVertexAttr():"vertexAttr"in c?c.vertexAttr:null)?Q.computeAttachmentOriginLines(c[t.VertexAttrConstants.POSITION],null,!1,a):null};a.prototype.createBufferWriter=function(){var a=this.params.vertexColors?A.PositionColorLayout:A.PositionLayout;return z.isNone(this.params.stipplePattern)?new A.DefaultBufferWriter(a):new Z(a.clone().vec3f(t.VertexAttrConstants.AUXPOS1))};
a.prototype.getGLMaterial=function(a){return 0===a.output||4===a.output?new aa(a):void 0};return a}(S.Material);var aa=function(b){function a(a){a=b.call(this,a)||this;a.updateParameters();return a}H.__extends(a,b);a.prototype.updateParameters=function(){this.technique=this.techniqueRep.acquireAndReleaseExisting(J.NativeLineTechnique,this.material.getTechniqueConfig(this.output),this.technique)};a.prototype.beginSlot=function(a){return 3===a};a.prototype._updateOccludeeState=function(a){a.hasOccludees!==
this.material.getParameters().sceneHasOcludees&&(this.material.setParameterValues({sceneHasOcludees:a.hasOccludees}),this.updateParameters())};a.prototype.ensureParameters=function(a){0===this.output&&this._updateOccludeeState(a)};a.prototype.bind=function(a,b){a.bindProgram(this.technique.program);this.technique.bindPass(a,this.material.getPassParameters(),b)};a.prototype.getPipelineState=function(a,b){return b?this.technique.opaqueOccludeeState:this.technique.pipeline};return a}(R.GLMaterial),Z=
function(){function b(a){this.vertexBufferLayout=a}b.prototype.allocate=function(a){return this.vertexBufferLayout.createBuffer(a)};b.prototype.elementCount=function(a){return a.indices[t.VertexAttrConstants.POSITION].length};b.prototype.write=function(a,b,d,f){T.writeDefaultAttributes(b,this.vertexBufferLayout,a.transformation,a.invTranspTransformation,d,f);this.writeAuxpos1(a,b,d,f)};b.prototype.writeAuxpos1=function(a,b,d,f){var c=d.getField(t.VertexAttrConstants.AUXPOS1,P.BufferViewVec3f);d=b.indices[t.VertexAttrConstants.POSITION];
b=b.vertexAttr[t.VertexAttrConstants.POSITION].data;a=a.transformation;var k=c.typedBufferStride,c=c.typedBuffer;f*=k;for(var m=0;m<d.length;m+=2)for(var l=3*d[m],g=b[l],e=b[l+1],h=b[l+2],l=a[0]*g+a[4]*e+a[8]*h+a[12],n=a[1]*g+a[5]*e+a[9]*h+a[13],g=a[2]*g+a[6]*e+a[10]*h+a[14],e=0;2>e;++e)c[f]=l,c[f+1]=n,c[f+2]=g,f+=k};return b}(),W={color:[1,1,1,1],vertexColors:!1,slicePlaneEnabled:!1,width:1,stipplePattern:null,stippleIntegerRepeats:!1,stippleOffColor:null,sceneHasOcludees:!1},h=k.vec3f64.create(),
n=k.vec3f64.create(),p=k.vec3f64.create(),w=k.vec3f64.create(),u=x.createRenderScreenPointArray3(),v=x.createRenderScreenPointArray3(),L=k.vec3f64.create(),M=k.vec3f64.create(),K=b.lineSegment.create(),Y=b.lineSegment.create(),X=k.vec3f64.create(),y=[x.createRenderScreenPointArray3(),x.createRenderScreenPointArray3(),x.createRenderScreenPointArray3(),x.createRenderScreenPointArray3()],q=[k.vec3f64.create(),k.vec3f64.create(),k.vec3f64.create(),k.vec3f64.create()],C=b.plane.create(),D=b.plane.create(),
E=b.plane.create(),F=b.plane.create();return G});
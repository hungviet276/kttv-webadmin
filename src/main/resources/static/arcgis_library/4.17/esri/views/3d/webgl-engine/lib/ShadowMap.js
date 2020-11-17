// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f64 ./Camera ./DefaultTextureUnits ./glUtil3D ./Util ../../../webgl/FramebufferObject ../../../webgl/Texture ../../../webgl/Util".split(" "),
function(V,Q,R,ka,E,x,b,c,H,B,W,X,la,ma,na,q,oa,pa,qa){function u(a,m){b.vec2.set(Y,a[m],a[m+3]);return Y}var ra=function(){return function(){this.camera=new la.default;this.lightMat=x.mat4f64.create()}}();V=function(){function c(a,b){this.rctx=a;this.viewingMode=b;this._enabled=!1;this.maxTextureSize=this.textureSize=0;this.numCascades=1;this.maxNumCascades=4;this.splitSchemeLambda=0;this.warp=!0;this.cascadeDistances=[0,0,0,0,0];this.cascades=[];this.emptyTexture=na.createEmptyTexture(this.rctx);
this.maxTextureSize=this.rctx.parameters.maxTextureSize;for(a=0;4>a;++a)this.cascades.push(new ra)}c.prototype.dispose=function(){this.emptyTexture.dispose();this.emptyTexture=null;this.discardDepthTexture()};Object.defineProperty(c.prototype,"maxCascades",{get:function(){return this.maxNumCascades},set:function(a){this.maxNumCascades=R.clamp(Math.floor(a),1,4)},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"enabled",{get:function(){return this._enabled},set:function(a){(this._enabled=
a)||this.discardDepthTexture()},enumerable:!1,configurable:!0});c.prototype.getDepthTexture=function(){return this.depthTexture};c.prototype.getCascades=function(){for(var a=0;a<this.numCascades;++a)S[a]=this.cascades[a];S.length=this.numCascades;return S};c.prototype.prepare=function(m,c,p){q.assert(this.enabled);this.textureSize=this.computeTextureSize(m.fullWidth,m.fullHeight);this.assertDepthTexture();E.mat4.multiply(Z,m.projectionMatrix,m.viewMatrix);var d=p.near,f=p.far;2>d&&(d=2);2>f&&(f=2);
d>=f&&(d=2,f=4);this.numCascades=Math.min(1+Math.floor(q.logWithBase(f/d,4)),this.maxNumCascades);var M=(f-d)/this.numCascades,n=Math.pow(f/d,1/this.numCascades),f=d;for(p=0;p<this.numCascades+1;++p)this.cascadeDistances[p]=R.lerp(f,d,this.splitSchemeLambda),f*=n,d+=M;E.mat4.invert(aa,Z);p=1===this.viewingMode?m.eye:H.vec3.set(T,0,0,1);E.mat4.lookAt(ba,[0,0,0],[-c[0],-c[1],-c[2]],p);M=m.viewMatrix;m=m.projectionMatrix;for(p=0;p<this.numCascades;++p){n=this.cascades[p];d=-this.cascadeDistances[p];
f=-this.cascadeDistances[p+1];d=(m[10]*d+m[14])/Math.abs(m[11]*d+m[15]);f=(m[10]*f+m[14])/Math.abs(m[11]*f+m[15]);q.assert(d<f);for(var e=0;8>e;++e){W.vec4.set(ca,0===e%4||3===e%4?-1:1,0===e%4||1===e%4?-1:1,4>e?d:f,1);W.vec4.transformMat4(r[e],ca,aa);for(var h=0;3>h;++h)r[e][h]/=r[e][3]}H.vec3.negate(T,r[0]);E.mat4.translate(da,ba,T);n.camera.viewMatrix=da;for(e=0;8>e;++e)H.vec3.transformMat4(r[e],r[e],n.camera.viewMatrix);H.vec3.copy(y,r[0]);H.vec3.copy(z,r[0]);for(e=1;8>e;++e)for(h=0;3>h;++h)y[h]=
Math.min(y[h],r[e][h]),z[h]=Math.max(z[h],r[e][h]);y[2]-=200;z[2]+=200;n.camera.near=-z[2];n.camera.far=-y[2];if(this.warp){d=1/r[0][3];f=1/r[4][3];q.assert(d<f);var e=d+Math.sqrt(d*f),f=Math.sin(R.acosClamped(M[2]*c[0]+M[6]*c[1]+M[10]*c[2])),e=e/f,d=r,x=e,F=f,f=ea,v=fa,k=sa,h=ga,e=ha;b.vec2.set(w,0,0);for(var g=0;4>g;++g)b.vec2.add(w,w,d[g]);b.vec2.scale(w,w,.25);b.vec2.set(I,0,0);for(g=4;8>g;++g)b.vec2.add(I,I,d[g]);b.vec2.scale(I,I,.25);b.vec2.lerp(G[0],d[4],d[5],.5);b.vec2.lerp(G[1],d[5],d[6],
.5);b.vec2.lerp(G[2],d[6],d[7],.5);b.vec2.lerp(G[3],d[7],d[4],.5);for(var C=0,A=b.vec2.squaredDistance(G[0],w),g=1;4>g;++g){var J=b.vec2.squaredDistance(G[g],w);J<A&&(A=J,C=g)}b.vec2.subtract(l,G[C],d[C+4]);g=l[0];l[0]=-l[1];l[1]=g;b.vec2.subtract(U,I,w);0>b.vec2.dot(U,l)&&b.vec2.negate(l,l);b.vec2.lerp(l,l,U,F);b.vec2.normalize(l,l);C=F=void 0;F=C=b.vec2.dot(b.vec2.subtract(D,d[0],w),l);for(g=1;8>g;++g)A=b.vec2.dot(b.vec2.subtract(D,d[g],w),l),A<F?F=A:A>C&&(C=A);b.vec2.copy(f,w);b.vec2.scale(D,l,
F-x);b.vec2.add(f,f,D);for(var J=-1,B=1,g=x=A=0;8>g;++g){b.vec2.subtract(N,d[g],f);b.vec2.normalize(N,N);var O=l[0]*N[1]-l[1]*N[0];0<O?O>J&&(J=O,A=g):O<B&&(B=O,x=g)}q.verify(0<J,"leftArea");q.verify(0>B,"rightArea");b.vec2.scale(K,l,F);b.vec2.add(K,K,w);b.vec2.scale(L,l,C);b.vec2.add(L,L,w);P[0]=-l[1];P[1]=l[0];v=q.rayRay2D(f,d[x],L,b.vec2.add(D,L,P),1,v);k=q.rayRay2D(f,d[A],L,D,1,k);h=q.rayRay2D(f,d[A],K,b.vec2.add(D,K,P),1,h);d=q.rayRay2D(f,d[x],K,D,1,e);q.verify(v,"rayRay");q.verify(k,"rayRay");
q.verify(h,"rayRay");q.verify(d,"rayRay");k=ea;d=fa;f=ga;h=ha;e=n.camera.projectionMatrix;b.vec2.subtract(t,f,h);b.vec2.scale(t,t,.5);a[0]=t[0];a[1]=t[1];a[2]=0;a[3]=t[1];a[4]=-t[0];a[5]=0;a[6]=t[0]*t[0]+t[1]*t[1];a[7]=t[0]*t[1]-t[1]*t[0];a[8]=1;a[6]=-b.vec2.dot(u(a,0),k);a[7]=-b.vec2.dot(u(a,1),k);k=b.vec2.dot(u(a,0),f)+a[6];v=b.vec2.dot(u(a,1),f)+a[7];g=b.vec2.dot(u(a,0),h)+a[6];h=b.vec2.dot(u(a,1),h)+a[7];k=-(k+g)/(v+h);a[0]+=a[1]*k;a[3]+=a[4]*k;a[6]+=a[7]*k;k=1/(b.vec2.dot(u(a,0),f)+a[6]);v=1/
(b.vec2.dot(u(a,1),f)+a[7]);a[0]*=k;a[3]*=k;a[6]*=k;a[1]*=v;a[4]*=v;a[7]*=v;a[2]=a[1];a[5]=a[4];a[8]=a[7];a[7]+=1;k=b.vec2.dot(u(a,1),d)+a[7];v=b.vec2.dot(u(a,2),d)+a[8];g=b.vec2.dot(u(a,1),f)+a[7];h=b.vec2.dot(u(a,2),f)+a[8];k=-.5*(k/v+g/h);a[1]+=a[2]*k;a[4]+=a[5]*k;a[7]+=a[8]*k;k=b.vec2.dot(u(a,1),d)+a[7];v=b.vec2.dot(u(a,2),d)+a[8];g=-v/k;a[1]*=g;a[4]*=g;a[7]*=g;e[0]=a[0];e[1]=a[1];e[2]=0;e[3]=a[2];e[4]=a[3];e[5]=a[4];e[6]=0;e[7]=a[5];e[8]=0;e[9]=0;e[10]=1;e[11]=0;e[12]=a[6];e[13]=a[7];e[14]=0;
e[15]=a[8];n.camera.projectionMatrix[10]=2/(y[2]-z[2]);n.camera.projectionMatrix[14]=-(y[2]+z[2])/(y[2]-z[2])}else E.mat4.ortho(n.camera.projectionMatrix,y[0],z[0],y[1],z[1],n.camera.near,n.camera.far);E.mat4.multiply(n.lightMat,n.camera.projectionMatrix,n.camera.viewMatrix);d=this.textureSize/2;n.camera.viewport[0]=0===p%2?0:d;n.camera.viewport[1]=0===Math.floor(p/2)?0:d;n.camera.viewport[2]=d;n.camera.viewport[3]=d}this.lastOrigin=null;c=this.rctx;c.bindFramebuffer(this.fbo);c.bindTexture(null,
7);c.setClearColor(1,1,1,1);c.clearSafe(16640)};c.prototype.finish=function(a){q.assert(this.enabled);this.rctx.bindFramebuffer(a)};c.prototype.bind=function(a,b){var c=this.rctx;c.bindTexture(this.enabled?this.depthTexture:this.emptyTexture,b);c.bindProgram(a);a.setUniform1i("depthTex",b);a.setUniform1f("depthHalfPixelSz",this.enabled?.5/this.textureSize:-1);a.setUniform1i("shadowMapNum",this.numCascades);a.setUniform4f("shadowMapDistance",this.cascadeDistances[0],1<this.numCascades?this.cascadeDistances[1]:
Infinity,2<this.numCascades?this.cascadeDistances[2]:Infinity,3<this.numCascades?this.cascadeDistances[3]:Infinity)};c.prototype.bindToAllPrograms=function(a){a=a.getProgramsUsingUniform("shadowMapDistance");for(var b=0;b<a.length;b++)this.bind(a[b],ma.DefaultTextureUnits.SHADOW_MAP)};c.prototype.bindView=function(a,b){if(this.enabled){var c=this.lastOrigin;if(!c||c[0]!==b[0]||c[1]!==b[1]||c[2]!==b[2])for(this.lastOrigin=this.lastOrigin||B.vec3f64.create(),H.vec3.copy(this.lastOrigin,b),c=0;c<this.numCascades;++c){E.mat4.translate(ia,
this.cascades[c].lightMat,b);for(var d=0;16>d;++d)ja[16*c+d]=ia[d]}a.setUniformMatrix4fv("shadowMapMatrix",ja)}};c.prototype.computeTextureSize=function(a,b){return Math.min(this.maxTextureSize,2*Math.pow(2,Math.round(.5*Math.log(a*a+b*b)*Math.LOG2E+.35)))};c.prototype.assertDepthTexture=function(){if(null==this.depthTexture||this.depthTexture.descriptor.width!==this.textureSize)this.discardDepthTexture(),this.depthTexture=new pa(this.rctx,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,
samplingMode:9728,flipped:!0,width:this.textureSize,height:this.textureSize}),this.fbo=new oa(this.rctx,{colorTarget:0,depthStencilTarget:1,width:this.textureSize,height:this.textureSize},this.depthTexture)};c.prototype.discardDepthTexture=function(){this.fbo&&(this.fbo.dispose(),this.fbo=null);this.depthTexture&&(this.depthTexture.dispose(),this.depthTexture=null)};c.prototype.getGpuMemoryUsage=function(){return qa.getGpuMemoryUsage(this.fbo)};Object.defineProperty(c.prototype,"test",{get:function(){var a=
this;return{maxNumCascades:this.maxNumCascades,cascades:this.cascades,textureSize:this.textureSize,set splitSchemeLambda(b){a.splitSchemeLambda=b},get splitSchemeLambda(){return a.splitSchemeLambda},set warp(b){a.warp=b},get warp(){return a.warp}}},enumerable:!1,configurable:!0});return c}();var da=x.mat4f64.create(),Z=x.mat4f64.create(),aa=x.mat4f64.create(),ca=X.vec4f64.create(),r=[];for(Q=0;8>Q;++Q)r.push(X.vec4f64.create());var y=B.vec3f64.create(),z=B.vec3f64.create(),ea=c.vec2f64.create(),fa=
c.vec2f64.create(),sa=c.vec2f64.create(),ga=c.vec2f64.create(),ha=c.vec2f64.create(),ba=x.mat4f64.create(),T=B.vec3f64.create(),S=[],ia=x.mat4f64.create(),ja=new Float32Array(64),w=c.vec2f64.create(),I=c.vec2f64.create(),G=[c.vec2f64.create(),c.vec2f64.create(),c.vec2f64.create(),c.vec2f64.create()],l=c.vec2f64.create(),U=c.vec2f64.create(),D=c.vec2f64.create(),N=c.vec2f64.create(),K=c.vec2f64.create(),L=c.vec2f64.create(),P=c.vec2f64.create(),Y=c.vec2f64.create(),t=c.vec2f64.create(),a=ka.mat3f64.create();
return V});
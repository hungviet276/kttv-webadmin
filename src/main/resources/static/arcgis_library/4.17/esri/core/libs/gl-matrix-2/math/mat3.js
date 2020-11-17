// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./common"],function(H,c,r){function v(a,b,d){var y=b[0],c=b[1],g=b[2],h=b[3],k=b[4],l=b[5],m=b[6],p=b[7];b=b[8];var n=d[0],q=d[1],f=d[2],w=d[3],t=d[4],u=d[5],r=d[6],x=d[7];d=d[8];a[0]=n*y+q*h+f*m;a[1]=n*c+q*k+f*p;a[2]=n*g+q*l+f*b;a[3]=w*y+t*h+u*m;a[4]=w*c+t*k+u*p;a[5]=w*g+t*l+u*b;a[6]=r*y+x*h+d*m;a[7]=r*c+x*k+d*p;a[8]=r*g+x*l+d*b;return a}function G(a,b,d){a[0]=b[0]-d[0];a[1]=b[1]-d[1];a[2]=b[2]-d[2];a[3]=b[3]-d[3];a[4]=b[4]-d[4];a[5]=b[5]-d[5];a[6]=b[6]-d[6];a[7]=b[7]-
d[7];a[8]=b[8]-d[8];return a}Object.defineProperty(c,"__esModule",{value:!0});c.sub=c.mul=c.equals=c.exactEquals=c.multiplyScalarAndAdd=c.multiplyScalar=c.subtract=c.add=c.frob=c.str=c.projection=c.normalFromMat4=c.normalFromMat4Legacy=c.fromQuat=c.fromMat2d=c.fromScaling=c.fromRotation=c.fromTranslation=c.scaleByVec2=c.scale=c.rotate=c.translate=c.multiply=c.determinant=c.adjoint=c.invert=c.transpose=c.identity=c.set=c.copy=c.fromMat4=void 0;c.fromMat4=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];
a[3]=b[4];a[4]=b[5];a[5]=b[6];a[6]=b[8];a[7]=b[9];a[8]=b[10];return a};c.copy=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];return a};c.set=function(a,b,d,y,c,g,h,k,l,m){a[0]=b;a[1]=d;a[2]=y;a[3]=c;a[4]=g;a[5]=h;a[6]=k;a[7]=l;a[8]=m;return a};c.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};c.transpose=function(a,b){if(a===b){var d=b[1],c=b[2],e=b[5];a[1]=b[3];a[2]=b[6];a[3]=d;a[5]=b[7];a[6]=c;
a[7]=e}else a[0]=b[0],a[1]=b[3],a[2]=b[6],a[3]=b[1],a[4]=b[4],a[5]=b[7],a[6]=b[2],a[7]=b[5],a[8]=b[8];return a};c.invert=function(a,b){var d=b[0],c=b[1],e=b[2],g=b[3],h=b[4],k=b[5],l=b[6],m=b[7];b=b[8];var p=b*h-k*m,n=-b*g+k*l,q=m*g-h*l,f=d*p+c*n+e*q;if(!f)return null;f=1/f;a[0]=p*f;a[1]=(-b*c+e*m)*f;a[2]=(k*c-e*h)*f;a[3]=n*f;a[4]=(b*d-e*l)*f;a[5]=(-k*d+e*g)*f;a[6]=q*f;a[7]=(-m*d+c*l)*f;a[8]=(h*d-c*g)*f;return a};c.adjoint=function(a,b){var d=b[0],c=b[1],e=b[2],g=b[3],h=b[4],k=b[5],l=b[6],m=b[7];
b=b[8];a[0]=h*b-k*m;a[1]=e*m-c*b;a[2]=c*k-e*h;a[3]=k*l-g*b;a[4]=d*b-e*l;a[5]=e*g-d*k;a[6]=g*m-h*l;a[7]=c*l-d*m;a[8]=d*h-c*g;return a};c.determinant=function(a){var b=a[3],d=a[4],c=a[5],e=a[6],g=a[7],h=a[8];return a[0]*(h*d-c*g)+a[1]*(-h*b+c*e)+a[2]*(g*b-d*e)};c.multiply=v;c.translate=function(a,b,d){var c=b[0],e=b[1],g=b[2],h=b[3],k=b[4],l=b[5],m=b[6],p=b[7];b=b[8];var n=d[0];d=d[1];a[0]=c;a[1]=e;a[2]=g;a[3]=h;a[4]=k;a[5]=l;a[6]=n*c+d*h+m;a[7]=n*e+d*k+p;a[8]=n*g+d*l+b;return a};c.rotate=function(a,
b,d){var c=b[0],e=b[1],g=b[2],h=b[3],k=b[4],l=b[5],m=b[6],p=b[7];b=b[8];var n=Math.sin(d);d=Math.cos(d);a[0]=d*c+n*h;a[1]=d*e+n*k;a[2]=d*g+n*l;a[3]=d*h-n*c;a[4]=d*k-n*e;a[5]=d*l-n*g;a[6]=m;a[7]=p;a[8]=b;return a};c.scale=function(a,b,d){var c=d[0],e=d[1];d=d[2];a[0]=c*b[0];a[1]=c*b[1];a[2]=c*b[2];a[3]=e*b[3];a[4]=e*b[4];a[5]=e*b[5];a[6]=d*b[6];a[7]=d*b[7];a[8]=d*b[8];return a};c.scaleByVec2=function(a,b,d){var c=d[0];d=d[1];a[0]=c*b[0];a[1]=c*b[1];a[2]=c*b[2];a[3]=d*b[3];a[4]=d*b[4];a[5]=d*b[5];return a};
c.fromTranslation=function(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=b[0];a[7]=b[1];a[8]=1;return a};c.fromRotation=function(a,b){var d=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=d;a[2]=0;a[3]=-d;a[4]=b;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};c.fromScaling=function(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=0;a[4]=b[1];a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};c.fromMat2d=function(a,b){a[0]=b[0];a[1]=b[1];a[2]=0;a[3]=b[2];a[4]=b[3];a[5]=0;a[6]=b[4];a[7]=b[5];a[8]=1;return a};c.fromQuat=function(a,b){var d=
b[0],c=b[1],e=b[2];b=b[3];var g=d+d,h=c+c,k=e+e,d=d*g,l=c*g,c=c*h,m=e*g,p=e*h,e=e*k,g=b*g,h=b*h;b*=k;a[0]=1-c-e;a[3]=l-b;a[6]=m+h;a[1]=l+b;a[4]=1-d-e;a[7]=p-g;a[2]=m-h;a[5]=p+g;a[8]=1-d-c;return a};c.normalFromMat4Legacy=function(a,b){var d=b[0],c=b[1],e=b[2],g=b[4],h=b[5],k=b[6],l=b[8],m=b[9];b=b[10];var p=b*h-k*m,n=-b*g+k*l,q=m*g-h*l,f=d*p+c*n+e*q;if(!f)return null;f=1/f;a[0]=p*f;a[1]=(-b*c+e*m)*f;a[2]=(k*c-e*h)*f;a[3]=n*f;a[4]=(b*d-e*l)*f;a[5]=(-k*d+e*g)*f;a[6]=q*f;a[7]=(-m*d+c*l)*f;a[8]=(h*d-
c*g)*f;return a};c.normalFromMat4=function(a,b){var d=b[0],c=b[1],e=b[2],g=b[3],h=b[4],k=b[5],l=b[6],m=b[7],p=b[8],n=b[9],q=b[10],f=b[11],r=b[12],t=b[13],u=b[14];b=b[15];var F=d*k-c*h,x=d*l-e*h,z=d*m-g*h,v=c*l-e*k,A=c*m-g*k,B=e*m-g*l,C=p*t-n*r,D=p*u-q*r,p=p*b-f*r,E=n*u-q*t,n=n*b-f*t,q=q*b-f*u,f=F*q-x*n+z*E+v*p-A*D+B*C;if(!f)return null;f=1/f;a[0]=(k*q-l*n+m*E)*f;a[1]=(l*p-h*q-m*D)*f;a[2]=(h*n-k*p+m*C)*f;a[3]=(e*n-c*q-g*E)*f;a[4]=(d*q-e*p+g*D)*f;a[5]=(c*p-d*n-g*C)*f;a[6]=(t*B-u*A+b*v)*f;a[7]=(u*z-
r*B-b*x)*f;a[8]=(r*A-t*z+b*F)*f;return a};c.projection=function(a,b,d){a[0]=2/b;a[1]=0;a[2]=0;a[3]=0;a[4]=-2/d;a[5]=0;a[6]=-1;a[7]=1;a[8]=1;return a};c.str=function(a){return"mat3("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+")"};c.frob=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2)+Math.pow(a[2],2)+Math.pow(a[3],2)+Math.pow(a[4],2)+Math.pow(a[5],2)+Math.pow(a[6],2)+Math.pow(a[7],2)+Math.pow(a[8],2))};c.add=function(a,b,d){a[0]=b[0]+d[0];a[1]=
b[1]+d[1];a[2]=b[2]+d[2];a[3]=b[3]+d[3];a[4]=b[4]+d[4];a[5]=b[5]+d[5];a[6]=b[6]+d[6];a[7]=b[7]+d[7];a[8]=b[8]+d[8];return a};c.subtract=G;c.multiplyScalar=function(a,b,d){a[0]=b[0]*d;a[1]=b[1]*d;a[2]=b[2]*d;a[3]=b[3]*d;a[4]=b[4]*d;a[5]=b[5]*d;a[6]=b[6]*d;a[7]=b[7]*d;a[8]=b[8]*d;return a};c.multiplyScalarAndAdd=function(a,b,d,c){a[0]=b[0]+d[0]*c;a[1]=b[1]+d[1]*c;a[2]=b[2]+d[2]*c;a[3]=b[3]+d[3]*c;a[4]=b[4]+d[4]*c;a[5]=b[5]+d[5]*c;a[6]=b[6]+d[6]*c;a[7]=b[7]+d[7]*c;a[8]=b[8]+d[8]*c;return a};c.exactEquals=
function(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]};c.equals=function(a,b){var d=a[0],c=a[1],e=a[2],g=a[3],h=a[4],k=a[5],l=a[6],m=a[7];a=a[8];var p=b[0],n=b[1],q=b[2],f=b[3],w=b[4],t=b[5],u=b[6],v=b[7];b=b[8];return Math.abs(d-p)<=r.EPSILON*Math.max(1,Math.abs(d),Math.abs(p))&&Math.abs(c-n)<=r.EPSILON*Math.max(1,Math.abs(c),Math.abs(n))&&Math.abs(e-q)<=r.EPSILON*Math.max(1,Math.abs(e),Math.abs(q))&&Math.abs(g-f)<=
r.EPSILON*Math.max(1,Math.abs(g),Math.abs(f))&&Math.abs(h-w)<=r.EPSILON*Math.max(1,Math.abs(h),Math.abs(w))&&Math.abs(k-t)<=r.EPSILON*Math.max(1,Math.abs(k),Math.abs(t))&&Math.abs(l-u)<=r.EPSILON*Math.max(1,Math.abs(l),Math.abs(u))&&Math.abs(m-v)<=r.EPSILON*Math.max(1,Math.abs(m),Math.abs(v))&&Math.abs(a-b)<=r.EPSILON*Math.max(1,Math.abs(a),Math.abs(b))};c.mul=v;c.sub=G});
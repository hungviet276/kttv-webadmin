// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/mathUtils ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../lib/LongVectorMath ./Lightsources".split(" "),function(C,c,x,n,y,h,l){function p(d){return(d+1)*(d+1)}function t(d){return x.clamp(Math.floor(Math.sqrt(d)-1),0,2)}function q(d,b,a){var c=d[0],f=d[1];d=d[2];a=a||[];a.length=p(b);0<=b&&(a[0]=.28209479177);1<=b&&(a[1]=.4886025119*c,a[2]=.4886025119*d,a[3]=.4886025119*f);2<=b&&(a[4]=1.09254843059*c*f,a[5]=1.09254843059*
f*d,a[6]=.31539156525*(3*d*d-1),a[7]=1.09254843059*c*d,a[8]=.54627421529*(c*c-f*f));return a}function u(d,b){d=p(d);b=b||{r:[],g:[],b:[]};b.r.length=b.g.length=b.b.length=d;for(var a=0;a<d;a++)b.r[a]=b.g[a]=b.b[a]=0;return b}function v(d,b){for(var a=t(b.r.length),c=0;c<d.length;c++){var f=d[c];n.vec3.negate(r,f.direction);q(r,a,g);h.elementwiseProduct(g,m);h.scalarProduct(g,f.intensity[0],k);h.add(b.r,k);h.scalarProduct(g,f.intensity[1],k);h.add(b.g,k);h.scalarProduct(g,f.intensity[2],k);h.add(b.b,
k)}return b}function w(d,b){q(r,0,g);for(var a=0;a<d.length;a++){var c=d[a];b.r[0]+=g[0]*m[0]*c.intensity[0]*4*Math.PI;b.g[0]+=g[0]*m[0]*c.intensity[1]*4*Math.PI;b.b[0]+=g[0]*m[0]*c.intensity[2]*4*Math.PI}return b}Object.defineProperty(c,"__esModule",{value:!0});c.combineLights=c.projectAmbientLights=c.projectFillLights=c.initSHCoefficients=c.computeCoefficients=c.orderFromNumberOfCoefficients=c.numberOfCoefficientsInBand=c.numberOfCoefficients=void 0;c.numberOfCoefficients=p;c.numberOfCoefficientsInBand=
function(d){return 2*d+1};c.orderFromNumberOfCoefficients=t;c.computeCoefficients=q;c.initSHCoefficients=u;c.projectFillLights=v;c.projectAmbientLights=w;c.combineLights=function(d,b,a){u(b,a.sphericalHarmonics.sh);n.vec3.set(a.main.intensity,0,0,0);var c=!1,f=z,g=A;b=B;f.length=0;g.length=0;for(var k=b.length=0;k<d.length;k++){var e=d[k];e instanceof l.MainLight&&!c?(n.vec3.copy(a.main.direction,e.direction),a.main.intensity[0]=e.intensity[0],a.main.intensity[1]=e.intensity[1],a.main.intensity[2]=
e.intensity[2],a.main.castShadows=e.castShadows,c=!0):e instanceof l.MainLight||e instanceof l.FillLight?f.push(e):e instanceof l.AmbientLight?g.push(e):e instanceof l.SphericalHarmonicsLight&&b.push(e)}v(f,a.sphericalHarmonics.sh);w(g,a.sphericalHarmonics.sh);for(d=0;d<b.length;d++)e=b[d],h.add(a.sphericalHarmonics.sh.r,e.sh.r),h.add(a.sphericalHarmonics.sh.g,e.sh.g),h.add(a.sphericalHarmonics.sh.b,e.sh.b)};var z=[],A=[],B=[],g=[0],k=[0],r=y.vec3f64.create(),m=[3.141593,2.094395,2.094395,2.094395,
.785398,.785398,.785398,.785398,.785398]});
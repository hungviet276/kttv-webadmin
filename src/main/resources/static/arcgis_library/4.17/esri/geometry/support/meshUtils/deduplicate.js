// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/mathUtils"],function(E,n,D){function v(f,d,a){var r=f.byteLength/(4*d),n=new Uint32Array(f,0,r*d);f=new Uint32Array(r);var l=a&&a.minReduction||0,h=a&&a.originalIndices||null,e=a&&a.componentOffsets||null,c=0;if(e)for(a=0;a<e.length-1;a++){var t=e[a+1]-e[a];t>c&&(c=t)}else c=r;var p=Math.floor(1.1*c)+1;if(null==m||m.length<2*p)m=new Uint32Array(D.nextHighestPowerOfTwo(2*p));for(a=0;a<2*p;a++)m[a]=0;var c=0,w=(t=!!e&&!!h)?h.length:r,u=t?new Uint32Array(h.length):
null,x=0!==l?Math.ceil(7.84*1.96/(l*l)*l*(1-l)):w,q=1,v=e?e[1]:w;for(a=0;a<w;a++){if(a===x){var b=1-c/a;if(b+1.96*Math.sqrt(b*(1-b)/a)<l)return null;x*=2}if(a===v){for(b=0;b<2*p;b++)m[b]=0;if(h)for(b=e[q-1];b<e[q];b++)u[b]=f[h[b]];v=e[++q]}for(var A=t?h[a]:a,b=A*d,k,g=k=0;g<d;g++)k=n[b+g]+k|0,k=k+(k<<11)+(k>>>2)|0;k>>>=0;for(var g=k%p,B=c;0!==m[2*g+1];){if(m[2*g]===k){var C=m[2*g+1]-1,y=C*d;a:{for(var z=0;z<d;z++)if(n[b+z]!==n[y+z]){y=!1;break a}y=!0}if(y){B=f[C];break}}g++;g>=p&&(g-=p)}B===c&&(m[2*
g]=k,m[2*g+1]=A+1,c++);f[A]=B}if(0!==l&&1-c/r<l)return null;if(t){for(a=e[q-1];a<u.length;a++)u[a]=f[h[a]];f=u}r=new Uint32Array(d*c);for(a=c=0;a<w;a++)if(f[a]===c){b=(t?h[a]:a)*d;l=n;e=b;p=r;u=c*d;x=d;for(q=0;q<x;q++)p[u+q]=l[e+q];c++}if(h&&!t){d=new Uint32Array(h.length);for(a=0;a<d.length;a++)d[a]=f[h[a]];f=d}return{buffer:r.buffer,indices:f,uniqueCount:c}}Object.defineProperty(n,"__esModule",{value:!0});n.deduplicate=void 0;n.deduplicate=v;var m=null;n.default=v});
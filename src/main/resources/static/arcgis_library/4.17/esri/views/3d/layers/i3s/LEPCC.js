// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Error"],function(C,l,k){function x(a,g,k){return{identifier:String.fromCharCode.apply(null,new Uint8Array(a,k+r.identifierOffset,r.identifierLength)),version:g.getUint16(k+r.versionOffset,!0),checksum:g.getUint32(k+r.checksumOffset,!0)}}function v(a,g,k){var c=[];g=t(a,g,c);for(var b=[],h=0;h<c.length;h++){b.length=0;g=t(a,g,b);for(var d=0;d<b.length;d++)k.push(b[d]+c[h])}return g}function t(a,g,q){var c=new DataView(a,g),b=c.getUint8(0),h=b&31,d=!!(b&
32),e=(b&192)>>6,b=0;if(0===e)b=c.getUint32(1,!0),g+=5;else if(1===e)b=c.getUint16(1,!0),g+=3;else if(2===e)b=c.getUint8(1),g+=2;else throw new k("lepcc-decode-error","Bad count type");if(d)throw new k("lepcc-decode-error","LUT not implemented");a=new Uint8Array(a,g,Math.ceil(b*h/8));for(var e=d=c=0,f=-1>>>32-h,l=0;l<b;l++){for(;d<h;)c|=a[e]<<d,d+=8,e+=1;q[l]=c&f;c>>>=h;d-=h;32<d+h&&(c|=a[e-1]>>8-d)}return g+e}Object.defineProperty(l,"__esModule",{value:!0});l.decodeIntensity=l.decodeRGB=l.decodeXYZ=
void 0;var r={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};l.decodeXYZ=function(a){var g,q,c,b,h,d,e,f,l,t,y,u,m=new DataView(a,0),n=0;b=x(a,m,n);c=b.identifier;b=b.version;n+=r.byteCount;if("LEPCC     "!==c)throw new k("lepcc-decode-error","Bad identifier");if(1<b)throw new k("lepcc-decode-error","Unknown version");var p=n;g=m.getUint32(p+0,!0);q=m.getUint32(p+4,!0);c=m.getFloat64(p+8,!0);b=m.getFloat64(p+16,!0);h=m.getFloat64(p+24,!0);d=m.getFloat64(p+
32,!0);e=m.getFloat64(p+40,!0);f=m.getFloat64(p+48,!0);l=m.getFloat64(p+56,!0);t=m.getFloat64(p+64,!0);y=m.getFloat64(p+72,!0);u=m.getUint32(p+80,!0);m.getUint32(p+84,!0);n+=88;if(q*Math.pow(2,32)+g!==a.byteLength)throw new k("lepcc-decode-error","Bad size");m=new Float64Array(3*u);g=[];q=[];u=[];p=[];n=v(a,n,g);n=v(a,n,q);n=v(a,n,u);n=v(a,n,p);if(n!==a.byteLength)throw new k("lepcc-decode-error","Bad length");for(var w=n=a=0;w<g.length;w++)for(var n=n+g[w],z=0,A=0;A<q[w];A++){var z=z+u[a],B=p[a];
m[3*a]=Math.min(d,c+2*l*z);m[3*a+1]=Math.min(e,b+2*t*n);m[3*a+2]=Math.min(f,h+2*y*B);a++}return{errorX:l,errorY:t,errorZ:y,result:m}};l.decodeRGB=function(a){var g,l,c,b,h,d,e=new DataView(a,0),f=0;b=x(a,e,f);c=b.identifier;b=b.version;f+=r.byteCount;if("ClusterRGB"!==c)throw new k("lepcc-decode-error","Bad identifier");if(1<b)throw new k("lepcc-decode-error","Unknown version");d=f;g=e.getUint32(d+0,!0);l=e.getUint32(d+4,!0);c=e.getUint32(d+8,!0);b=e.getUint16(d+12,!0);h=e.getUint8(d+14);d=e.getUint8(d+
15);f+=16;if(l*Math.pow(2,32)+g!==a.byteLength)throw new k("lepcc-decode-error","Bad size");if((2===h||1===h)&&0===d){if(3*b+c+f!==a.byteLength||256<b)throw new k("lepcc-decode-error","Bad count");e=new Uint8Array(a,f,3*b);b=new Uint8Array(a,f+3*b,c);f=new Uint8Array(3*c);for(a=0;a<c;a++)g=b[a],f[3*a]=e[3*g],f[3*a+1]=e[3*g+1],f[3*a+2]=e[3*g+2];return f}if(0===h&&0===d){if(3*c+f!==a.byteLength||0!==b)throw new k("lepcc-decode-error","Bad count");return(new Uint8Array(a,f)).slice()}if(2>=h&&1===d){if(f+
3!==a.byteLength||1!==b)throw new k("lepcc-decode-error","Bad count");b=e.getUint8(f);g=e.getUint8(f+1);e=e.getUint8(f+2);f=new Uint8Array(3*c);for(a=0;a<c;a++)f[3*a]=b,f[3*a+1]=g,f[3*a+2]=e;return f}throw new k("lepcc-decode-error","Bad method "+h+","+d);};l.decodeIntensity=function(a){var g,l,c,b,h,d=new DataView(a,0),e=0;b=x(a,d,e);c=b.identifier;b=b.version;e+=r.byteCount;if("Intensity "!==c)throw new k("lepcc-decode-error","Bad identifier");if(1<b)throw new k("lepcc-decode-error","Unknown version");
var f=e;g=d.getUint32(f+0,!0);l=d.getUint32(f+4,!0);c=d.getUint32(f+8,!0);b=d.getUint16(f+12,!0);h=d.getUint8(f+14);d.getUint8(f+15);e+=16;if(l*Math.pow(2,32)+g!==a.byteLength)throw new k("lepcc-decode-error","Bad size");d=new Uint16Array(c);if(8===h){if(c+e!==a.byteLength)throw new k("lepcc-decode-error","Bad size");h=new Uint8Array(a,e,c)}else if(16===h){if(2*c+e!==a.byteLength)throw new k("lepcc-decode-error","Bad size");h=new Uint16Array(a,e,c)}else if(h=[],t(a,e,h)!==a.byteLength)throw new k("lepcc-decode-error",
"Bad size");for(a=0;a<c;a++)d[a]=h[a]*b;return d}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../PixelBlock"],function(J,q,I){function H(d){var l=d.altitude,a=d.azimuth,r=d.hillshadeType,f=d.pixelSizePower,B=d.pixelSizeFactor,t=d.scalingType,p=d.isGCS,w=d.resolution,m="multi-directional"===r?2*d.zFactor:d.zFactor,x=w.x,e=w.y;d=m/(8*x);var u=m/(8*e);p&&.001<m&&(d/=111E3,u/=111E3);"adjusted"===t&&(p?(d=111E3*x,u=111E3*e,d=(m+Math.pow(d,f)*B)/(8*d),u=(m+Math.pow(u,f)*B)/(8*u)):(d=(m+Math.pow(x,f)*B)/(8*x),u=(m+Math.pow(e,f)*B)/(8*e)));var k=(90-l)*Math.PI/180,l=Math.cos(k),
h=(360-a+90)*Math.PI/180,a=Math.sin(k)*Math.cos(h),k=Math.sin(k)*Math.sin(h),f=[315,270,225,360,180,0],B=[60,60,60,60,60,90],m=new Float32Array([3,5,3,2,1,4]),g=m.reduce(function(a,d){return a+d}),m=m.map(function(a){return a/g}),t="multi-directional"===r?f.length:1,p=new Float32Array(6),e=new Float32Array(6),x=new Float32Array(6);if("multi-directional"===r)for(var n=0;n<t;n++)l=B[n],a=f[n],k=(90-l)*Math.PI/180,l=Math.cos(k),h=(360-a+90)*Math.PI/180,a=Math.sin(k)*Math.cos(h),k=Math.sin(k)*Math.sin(h),
p[n]=l,e[n]=a,x[n]=k;else p.fill(l),e.fill(a),x.fill(k);return{resolution:w,factor:[d,u],sinZcosA:a,sinZsinA:k,cosZ:l,sinZcosAs:e,sinZsinAs:x,cosZs:p,weights:m,hillshadeType:["traditional","multi-directional"].indexOf(r)}}Object.defineProperty(q,"__esModule",{value:!0});q.tintHillshade=q.hillshade=q.calculateHillshadeParams=void 0;var G=function(d){return d&&"esri.layers.support.PixelBlock"===d.declaredClass&&d.pixels&&0<d.pixels.length};q.calculateHillshadeParams=H;q.hillshade=function(d,l){if(!G(d))return d;
var a=d.width,r=d.height,f=d.mask,B=new Uint8Array(a*r);f&&B.set(f);var t=H(l),p=t.factor,w=t.sinZcosA,m=t.sinZsinA,x=t.cosZ,e=t.sinZcosAs,u=t.sinZsinAs,k=t.cosZs,t=t.weights,h=p[0],p=p[1];l=l.hillshadeType;for(var g=d.pixels[0],n=new Uint8Array(a*r),C,q,D,y,F,z,E,A,v=1;v<r-1;v++)for(var c=v*a,b=1;b<a-1;b++)if(f&&!f[c+b])n[c+b]=0;else{y=8;if(f&&(y=f[c-a+b-1]+f[c-a+b]+f[c-a+b+1]+f[c+b-1]+f[c+b+1]+f[c+a+b-1]+f[c+a+b]+f[c+a+b+1],7>y)){n[c+b]=0;B[c+b]=0;continue}7===y?(C=f[c-a+b-1]?g[c-a+b-1]:g[c+b],
q=f[c-a+b]?g[c-a+b]:g[c+b],D=f[c-a+b+1]?g[c-a+b+1]:g[c+b],y=f[c+b-1]?g[c+b-1]:g[c+b],F=f[c+b+1]?g[c+b+1]:g[c+b],z=f[c+a+b-1]?g[c+a+b-1]:g[c+b],E=f[c+a+b]?g[c+a+b]:g[c+b],A=f[c+a+b+1]?g[c+a+b+1]:g[c+b]):(C=g[c-a+b-1],q=g[c-a+b],D=g[c-a+b+1],y=g[c+b-1],F=g[c+b+1],z=g[c+a+b-1],E=g[c+a+b],A=g[c+a+b+1]);y=(D+F+F+A-(C+y+y+z))*h;C=(z+E+E+A-(C+q+q+D))*p;q=Math.sqrt(1+y*y+C*C);D=0;if("traditional"===l)z=255*(x+m*C-w*y)/q,0>z&&(z=0),D=z;else for(E=u.length,A=0;A<E;A++)z=255*(k[A]+u[A]*C-e[A]*y)/q,0>z&&(z=0),
D+=z*t[A];n[c+b]=D&255}for(v=0;v<r;v++)n[v*a]=n[v*a+1],n[(v+1)*a-1]=n[(v+1)*a-2];for(v=1;v<a-1;v++)n[v]=n[v+a],n[v+(r-1)*a]=n[v+(r-2)*a];return new I({width:a,height:r,pixels:[n],mask:f?B:null,pixelType:"u8",validPixelCount:d.validPixelCount,statistics:[{minValue:0,maxValue:255}]})};q.tintHillshade=function(d,l,a,r){if(G(d)&&G(l)){var f=r.min,q=d.pixels[0],t=l.mask;l=l.pixels[0];r=255.00001/(r.max-f);for(var p=new Uint8ClampedArray(l.length),w=new Uint8ClampedArray(l.length),m=new Uint8ClampedArray(l.length),
x=a.length-1,e=0;e<l.length;e++)if(!t||0!==t[e]){var u=Math.floor((l[e]-f)*r),k=a[0>u?0:u>x?x:u],u=k[0],h=q[e],k=h*k[1],g=k*(1-Math.abs(u%2-1)),h=h-k;switch(Math.floor(u)){case 0:p[e]=k+h;w[e]=g+h;m[e]=h;break;case 1:p[e]=g+h;w[e]=k+h;m[e]=h;break;case 2:p[e]=h;w[e]=k+h;m[e]=g+h;break;case 3:p[e]=h;w[e]=g+h;m[e]=k+h;break;case 4:p[e]=g+h;w[e]=h;m[e]=k+h;break;case 5:case 6:p[e]=k+h,w[e]=h,m[e]=g+h}}d.pixels=[p,w,m];d.updateStatistics()}}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,d){Object.defineProperty(d,"__esModule",{value:!0});d.fill=d.copy=void 0;d.copy=function(c,f,a){var g=c.typedBuffer;c=c.typedBufferStride;var h=f.typedBuffer,b=f.typedBufferStride;f=a?a.count:f.count;var e=(a&&a.dstIndex?a.dstIndex:0)*c;a=(a&&a.srcIndex?a.srcIndex:0)*b;for(var d=0;d<f;++d)g[e]=h[a],g[e+1]=h[a+1],g[e+2]=h[a+2],g[e+3]=h[a+3],e+=c,a+=b};d.fill=function(c,d,a,g,h,b){var e=c.typedBuffer,f=c.typedBufferStride;c=b?b.count:c.count;b=(b&&b.dstIndex?
b.dstIndex:0)*f;for(var k=0;k<c;++k)e[b]=d,e[b+1]=a,e[b+2]=g,e[b+3]=h,b+=f}});
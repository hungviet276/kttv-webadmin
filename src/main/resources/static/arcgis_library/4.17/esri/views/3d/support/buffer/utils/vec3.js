// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,b){Object.defineProperty(b,"__esModule",{value:!0});b.copy=void 0;b.copy=function(c,d,a){var b=c.typedBuffer;c=c.typedBufferStride;var f=d.typedBuffer,g=d.typedBufferStride;d=a?a.count:d.count;var e=(a&&a.dstIndex?a.dstIndex:0)*c;a=(a&&a.srcIndex?a.srcIndex:0)*g;for(var h=0;h<d;++h)b[e]=f[a],b[e+1]=f[a+1],b[e+2]=f[a+2],e+=c,a+=g}});
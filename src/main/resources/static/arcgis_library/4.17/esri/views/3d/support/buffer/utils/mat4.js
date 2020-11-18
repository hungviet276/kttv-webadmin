// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,b){Object.defineProperty(b,"__esModule",{value:!0});b.copy=void 0;b.copy=function(c,d,a){var b=c.typedBuffer;c=c.typedBufferStride;var k=d.typedBuffer,f=d.typedBufferStride;d=a?a.count:d.count;var g=(a&&a.dstIndex?a.dstIndex:0)*c;a=(a&&a.srcIndex?a.srcIndex:0)*f;for(var h=0;h<d;++h){for(var e=0;16>e;++e)b[g+e]=k[a+e];g+=c;a+=f}}});
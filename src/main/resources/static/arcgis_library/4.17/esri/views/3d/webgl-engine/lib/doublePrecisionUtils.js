// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,a){function f(g,c,a){for(var b=0;b<a;++b)c[2*b]=g[b],c[2*b+1]=g[b]-c[2*b]}Object.defineProperty(a,"__esModule",{value:!0});a.encodeDoubleArraySplit=a.decodeDoubleArray=a.encodeDoubleArray=a.encodeDouble=void 0;a.encodeDouble=function(a,c){d[0]=a;d[1]=a-d[0];c[0]=d[0];c[1]=d[1]};a.encodeDoubleArray=f;a.decodeDoubleArray=function(a,c,d){for(var b=0;b<d;++b)c[b]=a[2*b]+a[2*b+1]};a.encodeDoubleArraySplit=function(a,c,k,b){for(var e=0;e<b;++e)h[0]=a[e],f(h,d,1),
c[e]=d[0],k[e]=d[1]};var h=new Float64Array(1),d=new Float32Array(2)});
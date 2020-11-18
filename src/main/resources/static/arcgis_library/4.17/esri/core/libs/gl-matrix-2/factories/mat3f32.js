// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(m,c){Object.defineProperty(c,"__esModule",{value:!0});c.createView=c.fromValues=c.clone=c.create=void 0;c.create=function(){var a=new Float32Array(9);a[0]=1;a[4]=1;a[8]=1;return a};c.clone=function(a){var b=new Float32Array(9);b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};c.fromValues=function(a,b,c,e,f,g,h,k,l){var d=new Float32Array(9);d[0]=a;d[1]=b;d[2]=c;d[3]=e;d[4]=f;d[5]=g;d[6]=h;d[7]=k;d[8]=l;return d};
c.createView=function(a,b){return new Float32Array(a,b,9)}});
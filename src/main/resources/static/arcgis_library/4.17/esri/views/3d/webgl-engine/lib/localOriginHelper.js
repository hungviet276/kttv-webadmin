// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(k,c){Object.defineProperty(c,"__esModule",{value:!0});c.applyToViewMatrix=c.applyToModelMatrix=void 0;c.applyToModelMatrix=function(b,a){var e=-b[0],d=-b[1];b=-b[2];var c=a[3],f=a[7],g=a[11],h=a[15];a[0]+=c*e;a[1]+=c*d;a[2]+=c*b;a[4]+=f*e;a[5]+=f*d;a[6]+=f*b;a[8]+=g*e;a[9]+=g*d;a[10]+=g*b;a[12]+=h*e;a[13]+=h*d;a[14]+=h*b};c.applyToViewMatrix=function(b,a){var c=b[0],d=b[1];b=b[2];a[12]+=c*a[0]+d*a[4]+b*a[8];a[13]+=c*a[1]+d*a[5]+b*a[9];a[14]+=c*a[2]+d*a[6]+b*a[10];
a[14]+=c*a[3]+d*a[7]+b*a[11]}});
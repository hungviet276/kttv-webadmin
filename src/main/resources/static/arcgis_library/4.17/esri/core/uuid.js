// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./global"],function(f,c,d){Object.defineProperty(c,"__esModule",{value:!0});c.generateUUID=void 0;c.generateUUID=function(){var b=e.getRandomValues(new Uint16Array(8));b[3]=b[3]&4095|16384;b[4]=b[4]&16383|32768;var a=function(a){return b[a].toString(16)};return a(0)+a(1)+"-"+a(2)+"-"+a(3)+"-"+a(4)+"-"+a(5)+a(6)+a(7)};var e=d.crypto||d.msCrypto});
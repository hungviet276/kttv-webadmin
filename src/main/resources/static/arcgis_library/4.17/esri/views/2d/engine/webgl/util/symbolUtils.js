// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,b){Object.defineProperty(b,"__esModule",{value:!0});b.keyFromSymbol=void 0;b.keyFromSymbol=function(a){switch(a.type){case "esriSMS":return a.style+"."+a.path;case "esriSLS":return a.style+"."+a.cap;case "esriSFS":return""+a.style;case "esriPFS":case "esriPMS":return a.imageData?a.imageData:""+a.url+a.width+a.height;default:return a.mosaicHash?a.mosaicHash:JSON.stringify(a)}}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,a){function d(b,c){return b.typeKeywords?-1<b.typeKeywords.indexOf(c):!1}Object.defineProperty(a,"__esModule",{value:!0});a.removeTypeKeyword=a.hasTypeKeyword=a.addTypeKeyword=void 0;a.addTypeKeyword=function(b,c){if(!d(b,c)){var a=b.typeKeywords;a?a.push(c):b.typeKeywords=[c]}};a.hasTypeKeyword=d;a.removeTypeKeyword=function(b,a){if(b=b.typeKeywords)a=b.indexOf(a),-1<a&&b.splice(a,1)}});
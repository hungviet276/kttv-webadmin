// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,a){Object.defineProperty(a,"__esModule",{value:!0});a.createView=a.fromRotationTranslationValues=a.fromValues=a.clone=a.create=void 0;a.create=function(){return[0,0,0,1,0,0,0,0]};a.clone=function(b){return[b[0],b[1],b[2],b[3],b[4],b[5],b[6],b[7]]};a.fromValues=function(b,a,f,g,c,d,e,k){return[b,a,f,g,c,d,e,k]};a.fromRotationTranslationValues=function(b,a,f,g,c,d,e){c*=.5;d*=.5;e*=.5;return[b,a,f,g,c*g+d*f-e*a,d*g+e*b-c*f,e*g+c*a-d*b,-c*b-d*a-e*f]};a.createView=
function(a,h){return new Float64Array(a,h,8)}});
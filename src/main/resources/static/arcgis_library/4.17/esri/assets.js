// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./request","./core/urlUtils"],function(b,a,d,e){function c(a){return e.join(b.toUrl("."),"../",a)}Object.defineProperty(a,"__esModule",{value:!0});a.getAssetUrl=a.fetchAsset=void 0;a.fetchAsset=function(a,b){return d(c(a),b)};a.getAssetUrl=c});
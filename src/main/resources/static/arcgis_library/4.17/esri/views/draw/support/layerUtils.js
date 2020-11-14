// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,b){Object.defineProperty(b,"__esModule",{value:!0});b.addUniqueLayer=void 0;b.addUniqueLayer=function(a,b){b&&a&&a.map&&(a=a.map,a.layers.find(function(a){return a===b})||a.add(b))}});
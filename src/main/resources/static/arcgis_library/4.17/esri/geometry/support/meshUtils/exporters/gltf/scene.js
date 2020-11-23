// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(b,a){Object.defineProperty(a,"__esModule",{value:!0});a.Scene=void 0;b=function(){function a(){this.name="";this.nodes=[]}a.prototype.addNode=function(a){if(0<=this.nodes.indexOf(a))throw Error("Node already added");this.nodes.push(a)};a.prototype.forEachNode=function(a){this.nodes.forEach(a)};return a}();a.Scene=b});
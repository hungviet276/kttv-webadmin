// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(d,c){Object.defineProperty(c,"__esModule",{value:!0});c.Asset=void 0;d=function(){function b(){this.copyright="";this.defaultScene=0;this.generator="";this._scenes=[]}b.prototype.addScene=function(a){if(0<=this._scenes.indexOf(a))throw Error("Scene already added");this._scenes.push(a)};b.prototype.removeScene=function(a){a=this._scenes.indexOf(a);0<=a&&this._scenes.splice(a,1)};b.prototype.forEachScene=function(a){this._scenes.forEach(a)};return b}();c.Asset=
d});
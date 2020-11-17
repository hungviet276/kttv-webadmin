// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","./MemoryBuffer"],function(e,a,f,c){Object.defineProperty(a,"__esModule",{value:!0});a.PointElementMemoryBuffer=a.TriangleIndexBuffer=void 0;e=function(a){function b(){return a.call(this,12)||this}f.__extends(b,a);b.prototype.add=function(a,b,c){var d=this.array;d.push(a);d.push(b);d.push(c)};return b}(c);a.TriangleIndexBuffer=e;c=function(a){function b(){return a.call(this,4)||this}f.__extends(b,a);b.prototype.add=function(a){this.array.push(a)};return b}(c);a.PointElementMemoryBuffer=
c});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,c){Object.defineProperty(c,"__esModule",{value:!0});c.add=c.scalarProduct=c.elementwiseProduct=c.dotProduct=void 0;c.dotProduct=function(d,c){for(var b=0,a=0;a<d.length;a++)b+=d[a]*c[a];return b};c.elementwiseProduct=function(d,c,b){b=b||d;b.length=d.length;for(var a=0;a<d.length;a++)b[a]=d[a]*c[a];return b};c.scalarProduct=function(d,c,b){b=b||d;b.length=d.length;for(var a=0;a<d.length;a++)b[a]=d[a]*c;return b};c.add=function(d,c,b){b=b||d;b.length=d.length;
for(var a=0;a<d.length;a++)b[a]=d[a]+c[a];return b}});
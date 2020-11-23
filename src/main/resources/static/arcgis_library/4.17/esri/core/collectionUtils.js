// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./Collection"],function(e,b,d){Object.defineProperty(b,"__esModule",{value:!0});b.castForReferenceSetter=b.referenceSetter=void 0;b.referenceSetter=function(a,c,b){void 0===b&&(b=d);c||(c=new b);if(c===a)return c;c.removeAll();a&&(Array.isArray(a)||"items"in a&&Array.isArray(a.items))?c.addMany(a):a&&c.add(a);return c};b.castForReferenceSetter=function(a){return a}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,a){Object.defineProperty(a,"__esModule",{value:!0});a.deserializeList=a.serializeList=void 0;a.serializeList=function(b,c){if(null===c)b.push(0);else{b.push(c.length);for(var a=0;a<c.length;a++)c[a].serialize(b);return b}};a.deserializeList=function(a,c,e){for(var d=a.readInt32(),d=Array(d),b=0;b<d.length;b++)d[b]=c.deserialize(a,e);return d}});
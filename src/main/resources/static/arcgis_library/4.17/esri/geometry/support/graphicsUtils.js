// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Collection","../../core/maybe","../Extent"],function(l,c,g,h,k){Object.defineProperty(c,"__esModule",{value:!0});c.graphicsExtent=void 0;c.graphicsExtent=function(a){if(!a||!a.length)return null;var d=h.unwrap(g.isCollection(a)?a.getItemAt(0).geometry:a[0].geometry),e=d.extent&&d.extent.clone(),b=d;null===e&&(e=new k(b.x,b.y,b.x,b.y,d.spatialReference));for(var f=1;f<a.length;f++){var b=d=h.unwrap(g.isCollection(a)?a.getItemAt(f).geometry:a[f].geometry),c=d.extent;
null===c&&(c=new k(b.x,b.y,b.x,b.y,d.spatialReference));e=e.union(c)}return 0>e.width&&0>e.height?null:e}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../views/2d/engine/webgl/enums","../../views/2d/engine/webgl/materialKey/MaterialKey"],function(e,d,a,f){Object.defineProperty(d,"__esModule",{value:!0});d.ExpandedCIM=void 0;var g={marker:a.WGLGeometryType.MARKER,fill:a.WGLGeometryType.FILL,line:a.WGLGeometryType.LINE,text:a.WGLGeometryType.TEXT};e=function(){function a(a,b,c){this.layers=a;this.data=b;this.hash=this._createHash();this.rendererKey=c;for(b=0;b<a.length;b++)c=a[b],c.materialKey=f.createMaterialKey(g[c.type],
this.rendererKey,!1,!1)}Object.defineProperty(a.prototype,"type",{get:function(){return"expanded-cim"},enumerable:!1,configurable:!0});a.prototype._createHash=function(){for(var a="",b=0,c=this.layers;b<c.length;b++)a+=c[b].templateHash;return a};return a}();d.ExpandedCIM=e});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/Logger ./Graphics3DExtrudeSymbolLayer ./Graphics3DIconSymbolLayer ./Graphics3DLineSymbolLayer ./Graphics3DMeshFillSymbolLayer ./Graphics3DObjectSymbolLayer ./Graphics3DPathSymbolLayer ./Graphics3DPolygonFillSymbolLayer ./Graphics3DTextSymbolLayer ./Graphics3DWaterSymbolLayer".split(" "),function(u,a,c,d,h,k,l,m,n,p,q,r){Object.defineProperty(a,"__esModule",{value:!0});a.setSymbolClass=a.make=void 0;var t=c.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayerFactory");
a.make=function(a,b,c,d){var g=e[a.type]&&e[a.type][b.type]||f[b.type];return g?new g(a,b,c,d):(t.error("GraphicsLayerFactory#make","unknown symbol type "+b.type),null)};var f={icon:h.default,object:m.default,line:k.default,path:n.default,fill:p.default,extrude:d.default,text:q.default,water:r.default};a.setSymbolClass=function(a,b){f[a]=b};var e={"mesh-3d":{fill:l.default}}});
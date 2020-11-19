// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../renderers ../../core/Error ../../core/maybe ../../core/promiseUtils ../heuristics/outline ../heuristics/sizeRange ./support/utils ../support/adapters/support/layerUtils ../symbology/location".split(" "),function(B,k,e,v,p,l,w,x,y,t,q,u){function z(g){return e.__awaiter(this,void 0,void 0,function(){var a,f,b,d,c;return e.__generator(this,function(h){switch(h.label){case 0:if(!g||!g.layer)throw new p("location-renderer:missing-parameters","'layer' parameter is required");
a=e.__assign({},g);a.symbolType=a.symbolType||"2d";f=[0,2,1,3];b=q.createLayerAdapter(a.layer,f);a.layer=b;if(!b)throw new p("location-renderer:invalid-parameters","'layer' must be one of these types: "+q.getLayerTypeLabels(f).join(", "));d=l.isSome(a.signal)?{signal:a.signal}:null;return[4,b.load(d)];case 1:h.sent();c=b.geometryType;a.outlineOptimizationEnabled="polygon"===c?a.outlineOptimizationEnabled:!1;a.sizeOptimizationEnabled="point"===c||"multipoint"===c||"polyline"===c?a.sizeOptimizationEnabled:
!1;if("mesh"===c)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none";else{if("3d-volumetric-uniform"===a.symbolType&&"point"!==c)throw new p("location-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new p("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");
}return[2,a]}})})}function A(g,a){return e.__awaiter(this,void 0,void 0,function(){var f,b,d,c,h;return e.__generator(this,function(e){switch(e.label){case 0:return f=g.locationScheme,d=b=null,[4,t.getBasemapInfo(g.basemap,g.view)];case 1:c=e.sent();b=l.isSome(c.basemapId)?c.basemapId:null;d=l.isSome(c.basemapTheme)?c.basemapTheme:null;if(f)return[2,{scheme:u.cloneScheme(f),basemapId:b,basemapTheme:d}];if(h=u.getSchemes({basemap:b,basemapTheme:d,geometryType:a,worldScale:-1<g.symbolType.indexOf("3d-volumetric"),
view:g.view}))f=h.primaryScheme,b=h.basemapId,d=h.basemapTheme;return[2,{scheme:f,basemapId:b,basemapTheme:d}]}})})}Object.defineProperty(k,"__esModule",{value:!0});k.createRenderer=void 0;k.createRenderer=function(g){return e.__awaiter(this,void 0,void 0,function(){var a,f,b,d,c,h,k,l,m,r,q,n;return e.__generator(this,function(e){switch(e.label){case 0:return[4,z(g)];case 1:return a=e.sent(),f=a.layer.geometryType,[4,A(a,f)];case 2:b=e.sent();d=b.scheme;if(!d)throw new p("location-renderer:insufficient-info",
"Unable to find location scheme");c=a.view;h=a.layer;k=a.signal;return[4,w.all([a.outlineOptimizationEnabled?x({view:c,layer:h,signal:k}):null,a.sizeOptimizationEnabled?y({view:c,layer:h,signal:k}):null])];case 3:return l=e.sent(),m=l[0],r=l[1],q=m&&m.opacity,n=new v.SimpleRenderer({symbol:t.createSymbol(f,{type:a.symbolType,color:d.color,size:t.getSymbolSizeFromScheme(d,f),outline:t.getSymbolOutlineFromScheme(d,f,q),meshInfo:{colorMixMode:a.colorMixMode,edgesType:a.edgesType}})}),m&&m.visualVariables&&
m.visualVariables.length&&(n.visualVariables=m.visualVariables.map(function(a){return a.clone()})),r&&r.minSize&&(n.visualVariables?n.visualVariables.push(r.minSize):n.visualVariables=[r.minSize]),[2,{renderer:n,locationScheme:u.cloneScheme(d),basemapId:b.basemapId,basemapTheme:b.basemapTheme}]}})})}});
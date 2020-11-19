// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Error ../../core/maybe ../../core/promiseUtils ../../intl/messages ../../renderers/support/AuthoringInfo ../../renderers/support/AuthoringInfoVisualVariable ../../renderers/support/numberUtils ../../renderers/visualVariables/OpacityVariable ../heuristics/outline ./size ./type ./support/utils ../statistics/predominantCategories ../statistics/summaryStatistics ../statistics/support/predominanceUtils ../support/adapters/support/layerUtils ../symbology/predominance".split(" "),
function(ea,q,g,k,y,K,H,L,Q,R,S,T,U,V,x,W,X,Y,z,A){function Z(b){return g.__awaiter(this,void 0,void 0,function(){var a,e,c,f,d,h,n,r;return g.__generator(this,function(l){switch(l.label){case 0:if(!(b&&b.layer&&b.view&&b.fields&&b.fields.length))throw new k("predominance-renderer:missing-parameters","'layer', 'view' and 'fields' parameters are required");if(2>b.fields.length)throw new k("predominance-renderer:invalid-parameters","Minimum 2 fields are required");if(10<b.fields.length)throw new k("predominance-renderer:invalid-parameters",
"Maximum 10 fields are supported");a=g.__assign({},b);a.symbolType=a.symbolType||"2d";a.defaultSymbolEnabled=null==a.defaultSymbolEnabled?!0:a.defaultSymbolEnabled;a.includeOpacityVariable=b.includeOpacityVariable||!1;a.includeSizeVariable=b.includeSizeVariable||!1;a.sortBy=null==a.sortBy?"count":a.sortBy;e=[0,2,1,3];c=z.createLayerAdapter(a.layer,e);a.layer=c;if(!c)throw new k("predominance-renderer:invalid-parameters","'layer' must be one of these types: "+z.getLayerTypeLabels(e).join(", "));f=
y.isSome(a.signal)?{signal:a.signal}:null;return[4,c.load(f)];case 1:l.sent();d=c.geometryType;h=-1<a.symbolType.indexOf("3d");a.outlineOptimizationEnabled="polygon"===d?a.outlineOptimizationEnabled:!1;a.includeSizeVariable||(a.sizeOptimizationEnabled="point"===d||"multipoint"===d||"polyline"===d?a.sizeOptimizationEnabled:!1);if("mesh"===d)a.symbolType="3d-volumetric",a.colorMixMode=a.colorMixMode||"replace",a.edgesType=a.edgesType||"none",a.sizeOptimizationEnabled=!1;else{if(h&&("polyline"===d||
"polygon"===d))throw new k("predominance-renderer:not-supported","3d symbols are not supported for polyline and polygon layers");if(-1<a.symbolType.indexOf("3d-volumetric")&&(!a.view||"3d"!==a.view.type))throw new k("predominance-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}n=a.fields.map(function(a){return a.name});if(r=x.verifyBasicFieldValidity(c,n,"predominance-renderer:invalid-parameters"))throw r;
return[2,a]}})})}function aa(b){return g.__awaiter(this,void 0,void 0,function(){var a,e,c,f,d;return g.__generator(this,function(h){switch(h.label){case 0:return a=b.predominanceScheme,c=e=null,[4,x.getBasemapInfo(b.basemap,b.view)];case 1:f=h.sent();e=y.isSome(f.basemapId)?f.basemapId:null;c=y.isSome(f.basemapTheme)?f.basemapTheme:null;if(a)return[2,{scheme:A.cloneScheme(a),basemapId:e,basemapTheme:c}];if(d=A.getSchemes({basemap:e,basemapTheme:c,geometryType:b.geometryType,numColors:b.numColors,
theme:b.theme,worldScale:b.worldScale,view:b.view}))a=d.primaryScheme,e=d.basemapId,c=d.basemapTheme;return[2,{scheme:a,basemapId:e,basemapTheme:c}]}})})}function ba(b,a,e,c){return g.__awaiter(this,void 0,void 0,function(){var f,d,h,n,r,l,u,m,p,t,M,N,v,O,C,k,D,q,E,F,w,B,y,I,J,z,A,P;return g.__generator(this,function(G){switch(G.label){case 0:return[4,H.loadMessageBundle("esri/smartMapping/t9n/smartMapping")];case 1:return f=G.sent(),d=b.layer,h={layer:b.layer,view:b.view,signal:b.signal},[4,K.all([W({layer:d,
fields:c,view:b.view,signal:b.signal}),b.outlineOptimizationEnabled?T(h):null])];case 2:return n=G.sent(),r=n[0],l=n[1],(u=r)&&r.predominantCategoryInfos||(u={predominantCategoryInfos:c.map(function(a){return{value:a,count:0}})}),m=l&&l.opacity,[4,V.createRenderer({layer:d,basemap:b.basemap,valueExpression:a.valueExpression,valueExpressionTitle:f.predominantCategory,numTypes:-1,defaultSymbolEnabled:b.defaultSymbolEnabled,sortBy:b.sortBy,typeScheme:e,statistics:{uniqueValueInfos:u.predominantCategoryInfos},
legendOptions:b.legendOptions,outlineOptimizationEnabled:!1,sizeOptimizationEnabled:b.includeSizeVariable&&b.sizeOptimizationEnabled?!1:b.sizeOptimizationEnabled,symbolType:b.symbolType,colorMixMode:b.colorMixMode,edgesType:b.edgesType,view:b.view,signal:b.signal})];case 3:p=G.sent();t=p.renderer;M=p.basemapId;N=p.basemapTheme;v=p.uniqueValueInfos;O=p.excludedUniqueValueInfos;C=t.uniqueValueInfos;k={};D=0;for(q=b.fields;D<q.length;D++)E=q[D],F=d.getField(E.name),k[F.name]=E.label||F&&F.alias||E.name;
C.forEach(function(a,b){var c=k[a.value];a.label=c;v[b].label=c});b.includeSizeVariable&&(w=d.geometryType,B=null,"polygon"===w?(y=e,I=y.sizeScheme,J=I.background,t.backgroundFillSymbol=x.createSymbol(w,{type:b.symbolType,color:J.color,outline:x.getSymbolOutlineFromScheme(J,w,m)}),B=I.marker.size,w="point"):"polyline"===w?(z=e,B=z.width):(A=e,B=A.size),P=x.createColors(e.colors,C.length),C.forEach(function(a,c){var d=x.createSymbol(w,{type:b.symbolType,color:P[c],size:B,outline:x.getSymbolOutlineFromScheme(e,
w,m),meshInfo:{colorMixMode:b.colorMixMode,edgesType:b.edgesType}});a.symbol=d;v[c].symbol=d.clone()}));l&&l.visualVariables&&l.visualVariables.length&&(t.visualVariables=l.visualVariables.map(function(a){return a.clone()}));t.authoringInfo=new L({type:"predominance",fields:g.__spreadArrays(c)});return[2,{renderer:t,predominantCategoryInfos:v,excludedCategoryInfos:O,predominanceScheme:e,basemapId:M,basemapTheme:N}]}})})}function ca(b,a,e){return g.__awaiter(this,void 0,void 0,function(){var c;return g.__generator(this,
function(f){switch(f.label){case 0:return[4,H.loadMessageBundle("esri/smartMapping/t9n/smartMapping")];case 1:return c=f.sent(),[2,U.createVisualVariables({layer:b.layer,basemap:b.basemap,valueExpression:a.valueExpression,sqlExpression:a.statisticsQuery.sqlExpression,sqlWhere:a.statisticsQuery.sqlWhere,sizeScheme:e,sizeOptimizationEnabled:b.sizeOptimizationEnabled,worldScale:-1<b.symbolType.indexOf("3d-volumetric"),legendOptions:{title:c.sumOfCategories},view:b.view,signal:b.signal})]}})})}function da(b,
a){return g.__awaiter(this,void 0,void 0,function(){var e,c,f,d,h,n,r,l,u;return g.__generator(this,function(m){switch(m.label){case 0:return[4,H.loadMessageBundle("esri/smartMapping/t9n/smartMapping")];case 1:return e=m.sent(),[4,X({layer:b.layer,valueExpression:a.valueExpression,sqlExpression:a.statisticsQuery.sqlExpression,sqlWhere:a.statisticsQuery.sqlWhere,view:b.view,signal:b.signal})];case 2:return c=m.sent(),f=null==c.avg||null==c.stddev,d=1/b.fields.length*100,h=f?100:c.avg+1.285*c.stddev,
100<h&&(h=100),n=R.round([d,h],{strictBounds:!0}),r=new S({valueExpression:a.valueExpression,stops:[{value:n[0],opacity:.15},{value:n[1],opacity:1}],legendOptions:{title:e.strengthOfPredominance}}),l=new Q({type:"opacity",minSliderValue:c.min,maxSliderValue:c.max}),u=new L({visualVariables:[l]}),[2,{visualVariable:r,statistics:c,defaultValuesUsed:f,authoringInfo:u}]}})})}Object.defineProperty(q,"__esModule",{value:!0});q.createRenderer=void 0;q.createRenderer=function(b){return g.__awaiter(this,void 0,
void 0,function(){var a,e,c,f,d,h,n,r,l,u,m,p,t,k,q,v;return g.__generator(this,function(g){switch(g.label){case 0:return[4,Z(b)];case 1:return a=g.sent(),e=a.layer,[4,aa({basemap:a.basemap,geometryType:e.geometryType,numColors:a.fields.length,predominanceScheme:a.predominanceScheme,worldScale:-1<a.symbolType.indexOf("3d-volumetric"),view:a.view})];case 2:return c=g.sent(),f=c.scheme,d=a.fields.map(function(a){return a.name}),h=Y.getPredominanceExpressions(e,d),n=ba(a,h.predominantCategory,f,d),r=
a.includeSizeVariable?ca(a,h.size,f.sizeScheme):null,l=a.includeOpacityVariable?da(a,h.opacity):null,[4,K.all([n,r,l])];case 3:return u=g.sent(),m=u[0],p=u[1],t=u[2],k=[],q=[],p&&(Array.prototype.push.apply(k,p.visualVariables.map(function(a){return a.clone()})),delete p.sizeScheme,m.size=p,Array.prototype.push.apply(q,p.authoringInfo.visualVariables.map(function(a){return a.clone()}))),t&&(k.push(t.visualVariable.clone()),m.opacity=t,Array.prototype.push.apply(q,t.authoringInfo.visualVariables.map(function(a){return a.clone()}))),
k.length&&(v=m.renderer.visualVariables||[],Array.prototype.push.apply(v,k),m.renderer.visualVariables=v,m.renderer.authoringInfo.visualVariables=q),[2,m]}})})}});
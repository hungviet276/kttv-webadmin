// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/has ../../../../core/screenUtils ../../../../core/unitUtils ../../../../core/libs/rbush/rbush ../../../../geometry/support/aaBoundingRect ../../../../geometry/support/contains ../../../../geometry/support/extentUtils ../../../../geometry/support/jsonUtils ../../../../geometry/support/normalizeUtils ./GraphicStoreItem ./graphicsUtils".split(" "),function(A,B,x,D,E,F,G,p,y,H,I,J,v,r){function w(f,e,a,c,b){u.minX=e;u.minY=a;u.maxX=c;u.maxY=b;return f.search(u)}
Object.defineProperty(B,"__esModule",{value:!0});var u={minX:0,minY:0,maxX:0,maxY:0},t=p.create(),z=[];A=function(){function f(e,a,c,b,k,l){this._graphics=b;this._onAdd=k;this._onRemove=l;this._index=G(9,D("csp-restrictions")?function(a){return{minX:a.bounds[0],minY:a.bounds[1],maxX:a.bounds[2],maxY:a.bounds[3]}}:[".bounds[0]",".bounds[1]",".bounds[2]",".bounds[3]"]);this._itemByGraphic=new Map;this._currentLevel=-Infinity;this._tileInfoView=e;this._uidFieldName=c;if(a=e.getClosestInfoForScale(a))this._currentLevel=
a.level,this._resolution=this._tileInfoView.getTileResolution(a.level);this._metersPerUnit=F.getMetersPerUnit(e.spatialReference)}f.prototype.hitTest=function(e,a,c,b,k){e=J.normalizeMapX(e,this._tileInfoView.spatialReference);var l=.5*b*c;t[0]=e-l;t[1]=a-l;t[2]=e+l;t[3]=a+l;c=.5*b*(c+50);c=w(this._index,e-c,a-c,e+c,a+c);if(!c||0===c.length)return[];for(var l={x:e,y:a},h=[],d,f=0;f<c.length;f++){var g=c[f];if(g.graphic.visible)switch(I.getJsonType(g.geometry)){case "esriGeometryPoint":d=g.symbol;
if(!d)continue;var m=g.geometry,n=m.x,q=m.y,C=b*this._metersPerUnit,m=void 0;switch(d.type){case "esriTS":m=r.getTextSymbolBounds(n,q,d,g.size,b,k);break;case "expanded-cim":m=r.getCIMMarkerBounds(n,q,d,b,C,k);break;case "esriSMS":case "esriPMS":m=r.getMarkerSymbolBounds(n,q,d,b,C,k)}y.polygonContainsPoint(m,l)&&h.push(g);break;case "esriGeometryPolyline":d=g.symbol;if(!d||!d.layers.length)continue;d=1.5*b*window.devicePixelRatio*E.pt2px(d.layers[0].width);r.isPointOnPolyline(g.geometry,e,a,d)&&h.push(g);
break;case "esriGeometryEnvelope":d=g.geometry;d=p.fromValues(d.xmin,d.ymin,d.xmax,d.ymax);p.intersects(d,t)&&h.push(g);break;case "esriGeometryPolygon":if(y.polygonContainsPoint(g.geometry,l)){h.push(g);break}d=H.getPolygonExtent(g.geometry);if(Math.abs(d.ymax-d.ymin)<5*b||Math.abs(d.xmax-d.xmin)<5*b)d=p.fromValues(d.xmin,d.ymin,d.xmax,d.ymax),p.intersects(d,t)&&h.push(g);break;case "esriGeometryMultipoint":if(d=g.symbol)for(n=g.geometry.points,m=void 0,q=0;q<n.length;q++)if(m="esriTS"===d.type?
r.getTextSymbolBounds(n[q][0],n[q][1],d,g.size,b,k):r.getMarkerSymbolBounds(n[q][0],n[q][1],d,b,b*this._metersPerUnit,k),y.polygonContainsPoint(m,l)){h.push(g);break}}}h.sort(function(a,b){var c=r.graphicGeometryToNumber(a.graphic),d=r.graphicGeometryToNumber(b.graphic);return c===d?b.zorder-a.zorder:c-d});return h.map(function(a){return a.graphic})};f.prototype.getGraphicsData=function(e,a,c){var b=w(this._index,a.bounds[0],a.bounds[1],a.bounds[2],a.bounds[3]);if(0===b.length||0===c.length)return[];
b.sort(function(a,b){return a.zorder-b.zorder});b[0].insertAfter=-1;for(var k=1;k<b.length;k++)b[k].insertAfter=b[k-1].graphic.uid;b.sort(function(a,b){return a.graphic.uid-b.graphic.uid});c.sort(function(a,b){return a.uid-b.uid});var l=k=0,h,d=[];a={originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]};for(var f=0;f<c.length;f++){for(var g=c[f],l=-2;k<b.length;)if(h=b[k],k++,g.uid===h.graphic.uid){l=h.insertAfter;break}if(h.geometry&&-2!==l){var m=h.getGeometryQuantized(a),
n=x.__assign({},h.graphic.attributes);n[this._uidFieldName]=g.uid;null==h.groupId&&(h.groupId=e.createTemplateGroup(h.symbol,null));d.push({centroid:v.default.getCentroidQuantized(h,a),geometry:m,attributes:n,symbol:h.symbol,groupId:h.groupId,insertAfter:l})}}return d};f.prototype.getGraphicData=function(e,a,c){var b=this._itemByGraphic.get(c);if(!b)return null;var k=w(this._index,a.bounds[0],a.bounds[1],a.bounds[2],a.bounds[3]);k.sort(function(a,b){return a.zorder-b.zorder});var f=k.indexOf(b),k=
0===f||-1===f?-1:k[f-1].graphic.uid;a={originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]};var f=b.getGeometryQuantized(a),h=x.__assign({},b.graphic.attributes);h[this._uidFieldName]=c.uid;null==b.groupId&&(b.groupId=e.createTemplateGroup(b.symbol,null));return{centroid:v.default.getCentroidQuantized(b,a),geometry:f,attributes:h,symbol:b.symbol,groupId:b.groupId,insertAfter:k}};f.prototype.queryTileData=function(e,a){var c=p.pad(a.bounds,50*a.resolution,
p.create()),c=w(this._index,c[0],c[1],c[2],c[3]),b=[];this._createTileGraphics(b,e,c,{originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]});return b};f.prototype.has=function(e){return this._itemByGraphic.has(e)};f.prototype.getBounds=function(e){return this._itemByGraphic.has(e)?this._itemByGraphic.get(e).bounds:null};f.prototype.addOrModify=function(e,a,c){if(e)return this.has(e)&&this.remove(e),this._onAdd(e),a=v.default.acquire(e,a,c,this._resolution,
this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference),this._itemByGraphic.set(e,a),c&&this._index.insert(a),a.bounds};f.prototype.remove=function(e){if(this._itemByGraphic.has(e)){this._onRemove(e);var a=this._itemByGraphic.get(e);this._index.remove(a);this._itemByGraphic.delete(e)}};f.prototype.updateZ=function(){for(var e=this._graphics.items,a,c=0;c<e.length;c++)if(a=e[c],a=this._itemByGraphic.get(a))a.zorder=c};f.prototype.update=function(e,a,c){var b=this._itemByGraphic.get(e);
b.groupId=null;var f=p.clone(b.bounds);b.size[0]=b.size[1]=0;this._index.remove(b);b.set(e,a,c,this._resolution,this._resolution*this._metersPerUnit,this._tileInfoView.spatialReference);c&&this._index.insert(b);return{oldBounds:f,newBounds:b.bounds}};f.prototype.updateLevel=function(e){var a=this;this._currentLevel!==e&&(this._currentLevel=e,this._resolution=this._tileInfoView.getTileResolution(e),this._index.clear(),z.length=0,this._itemByGraphic.forEach(function(c){c.updateBounds(a._resolution,
a._resolution*a._metersPerUnit,a._tileInfoView.spatialReference);c.geometry&&z.push(c)}),this._index.load(z))};f.prototype.clear=function(){this._itemByGraphic.clear();this._index.clear()};f.prototype._createTileGraphics=function(e,a,c,b){var f=this._uidFieldName;c.sort(function(a,b){return a.zorder-b.zorder});for(var l,h,d,p,g=0;g<c.length;g++){d=c[g];l=d.graphic;h=d.getGeometryQuantized(b);p=0===g?-1:c[g-1].graphic.uid;var m=x.__assign({},d.graphic.attributes);m[f]=l.uid;null==d.groupId&&(d.groupId=
a.createTemplateGroup(d.symbol,null));e.push({centroid:v.default.getCentroidQuantized(d,b),geometry:h,attributes:m,symbol:d.symbol,groupId:d.groupId,insertAfter:p})}};return f}();B.default=A});
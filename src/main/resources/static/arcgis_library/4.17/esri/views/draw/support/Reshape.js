// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../geometry ../../../Graphic ../../../core/Evented ../../../core/Handles ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../geometry/support/coordsUtils ../../../symbols/SimpleMarkerSymbol ./drawUtils ./GraphicMover ./layerUtils ../../input/InputManager".split(" "),function(P,Q,d,p,n,z,x,t,r,g,v,u,A,B,C,D){var E=function(){return function(d,b,a){this.graphic=d;this.mover=b;this.selected=a;this.type="reshape-start"}}(),
F=function(){return function(d,b,a){this.graphic=d;this.mover=b;this.selected=a;this.type="reshape"}}(),G=function(){return function(d,b,a){this.graphic=d;this.mover=b;this.selected=a;this.type="reshape-stop"}}(),H=function(){return function(d,b,a){this.mover=d;this.dx=b;this.dy=a;this.type="move-start"}}(),I=function(){return function(d,b,a){this.mover=d;this.dx=b;this.dy=a;this.type="move"}}(),J=function(){return function(d,b,a){this.mover=d;this.dx=b;this.dy=a;this.type="move-stop"}}(),K=function(){return function(d){this.added=
d;this.type="vertex-select"}}(),L=function(){return function(d){this.removed=d;this.type="vertex-deselect"}}(),M=function(){return function(d,b,a,c){this.added=d;this.graphic=b;this.oldGraphic=a;this.vertices=c;this.type="vertex-add"}}(),N=function(){return function(d,b,a,c){this.removed=d;this.graphic=b;this.oldGraphic=a;this.vertices=c;this.type="vertex-remove"}}(),O=["Backspace","Delete"];return function(y){function b(a){a=y.call(this,a)||this;a._handles=new x;a._graphicAttributes={esriSketchTool:"box"};
a._mover=null;a._viewHandles=new x;a._totalDx=0;a._totalDy=0;a.type="reshape";a.callbacks={onReshapeStart:function(){},onReshape:function(){},onReshapeStop:function(){},onMoveStart:function(){},onMove:function(){},onMoveStop:function(){}};a.graphic=null;a.handleGraphics=[];a.handleHoverSymbol=new u({style:"circle",size:8,color:[33,205,255],outline:{color:[0,12,255],width:1}});a.handleSelectionSymbol=new u({style:"circle",size:8,color:[255,255,255],outline:{color:[0,12,255],width:1}});a.handleSymbol=
new u({style:"circle",size:6,color:[33,205,255],outline:{color:[0,12,255],width:1}});a.layer=null;a.midpointGraphics=[];a.midpointSymbol=new u({style:"circle",size:6,color:[200,200,200],outline:{color:[100,100,100],width:1}});a.enableMidpoints=!0;a.selectedHandles=[];a.view=null;return a}d.__extends(b,y);b.prototype.initialize=function(){var a=this;this._setup();this._handles.add([r.whenOnce(this,"view.ready",function(){var c=a.view;C.addUniqueLayer(c,a.layer);a._viewHandles.add([c.on("key-down",
function(c){return a._keyDownHandler(c)},D.ViewEventPriorities.TOOL)])}),r.pausable(this,"graphic",function(){return a.refresh()}),r.pausable(this,"layer",function(c,b){b&&(a._clearSelection(),a._resetGraphics(b));a.refresh()}),r.pausable(this,"enableMidpoints",function(){a.refresh()})])};b.prototype.destroy=function(){this._reset();this._mover&&this._mover.destroy();this._mover=null;this._handles.removeAll();this._handles=null;this._viewHandles.removeAll();this._viewHandles=null};Object.defineProperty(b.prototype,
"state",{get:function(){var a=!!this.get("view.ready"),c=!(!this.get("graphic")||!this.get("layer"));return a&&c?"active":a?"ready":"disabled"},enumerable:!1,configurable:!0});b.prototype.isUIGraphic=function(a){var c=[];this.graphic&&c.push(this.graphic);c.concat(this.handleGraphics,this.midpointGraphics);return c.length&&-1<c.indexOf(a)};b.prototype.refresh=function(){this._reset();this._setup()};b.prototype.reset=function(){this.graphic=null};b.prototype.clearSelection=function(){this._clearSelection()};
b.prototype.removeSelectedHandles=function(){this.selectedHandles.length&&this._removeVertex(this.selectedHandles)};b.prototype._setup=function(){this.graphic&&this.layer&&(this._setupGraphics(),this._setupMover())};b.prototype._reset=function(){this._clearSelection();this._resetGraphicStateVars();this._resetGraphics();this._mover&&this._mover.destroy();this._mover=null;this.view.cursor="default"};b.prototype._resetGraphicStateVars=function(){this._totalDy=this._totalDx=0};b.prototype._resetGraphics=
function(a){if(a=a||this.layer)a.removeMany(this.handleGraphics),a.removeMany(this.midpointGraphics);this.handleGraphics.forEach(function(a){return a.destroy()});this.midpointGraphics.forEach(function(a){return a.destroy()});this._set("handleGraphics",[]);this._set("midpointGraphics",[]);this._set("selectedHandles",[])};b.prototype._setupGraphics=function(){var a=t.unwrap(this.graphic.geometry),c=v.geometryToCoordinates(a.clone());if("polygon"===a.type)for(a=0;a<c.length;a++){var b=c[a],d=b[b.length-
1];b[0][0]===d[0]&&b[0][1]===d[1]&&2<b.length&&b.pop()}this._set("handleGraphics",this._createHandleGraphics(c));this.enableMidpoints&&this._set("midpointGraphics",this._createMidpointGraphics(c));this._saveRelatedIndices(this.handleGraphics);this.layer.addMany(this.midpointGraphics);this.layer.addMany(this.handleGraphics)};b.prototype._createHandleGraphics=function(a){var c=this._graphicAttributes,b=this.handleSymbol,w=this.view.spatialReference,f=[];null===a||void 0===a?void 0:a.forEach(function(a,
m){a.forEach(function(a,e){f.push(new n({geometry:new p.Point({x:a[0],y:a[1],spatialReference:w}),symbol:b,attributes:d.__assign(d.__assign({},c),{pathIndex:m,pointIndex:e})}))})});return f};b.prototype._createMidpointGraphics=function(a){var c=this,b=this._graphicAttributes,w=this.midpointSymbol,f=this.view.spatialReference,h=[];null===a||void 0===a?void 0:a.forEach(function(a,m){a.forEach(function(e,k){var l=e[0],q=e[1];e=a[k+1]?k+1:0;if("polygon"===t.get(c.graphic.geometry,"type")||0!==e){var g=
a[e],l=v.getMidpoint([l,q],[g[0],g[1]]);h.push(new n({geometry:new p.Point({x:l[0],y:l[1],spatialReference:f}),symbol:w,attributes:d.__assign(d.__assign({},b),{pathIndex:m,pointIndexStart:k,pointIndexEnd:e})}))}})});return h};b.prototype._saveRelatedIndices=function(a){if(a)for(var c=a.map(function(a){a=a.geometry;return{x:a.x,y:a.y}}),b=0;b<c.length;b++){for(var d=[],f=0;f<c.length;f++)if(b!==f){var h=c[b],e=c[f];h.x===e.x&&h.y===e.y&&d.push(f)}a[b].attributes.relatedGraphicIndices=d}};b.prototype._setupMover=
function(){var a=this;this._mover=new B({enableMoveAllGraphics:!1,graphics:[].concat(this.handleGraphics,this.graphic,this.midpointGraphics),view:this.view,callbacks:{onGraphicClick:function(c){return a._onGraphicClickCallback(c)},onGraphicMoveStart:function(c){return a._onGraphicMoveStartCallback(c)},onGraphicMove:function(c){return a._onGraphicMoveCallback(c)},onGraphicMoveStop:function(c){return a._onGraphicMoveStopCallback(c)},onGraphicPointerOver:function(c){return a._onGraphicPointerOverCallback(c)},
onGraphicPointerOut:function(c){return a._onGraphicPointerOutCallback(c)}}})};b.prototype._onGraphicClickCallback=function(a){var c=a.graphic;if(c===this.graphic)this.clearSelection();else if(-1<this.midpointGraphics.indexOf(c)){if(a.viewEvent.stopPropagation(),2!==a.viewEvent.button){a=this.graphic.clone();var b=this._createHandleFromMidpoint(c);this.refresh();this._emitVertexAddEvent([c],a,b)}}else-1<this.handleGraphics.indexOf(c)&&(a.viewEvent.stopPropagation(),2===a.viewEvent.button?this._removeVertex(c):
(a.viewEvent.native.shiftKey||this._clearSelection(),-1===this.selectedHandles.indexOf(c)?this._addToSelection(c):this._removeFromSelection(c,!0)))};b.prototype._onGraphicMoveStartCallback=function(a){var c=a.graphic;this._resetGraphicStateVars();if(c===this.graphic)c=a.dx,a=a.dy,this.handleGraphics.forEach(function(a){return a.visible=!1}),this.midpointGraphics.forEach(function(a){return a.visible=!1}),this._clearSelection(),this._emitMoveStartEvent(c,a);else{if(-1<this.midpointGraphics.indexOf(c)){this._clearSelection();
a=this.graphic.clone();var b=this._createHandleFromMidpoint(c);this._emitVertexAddEvent([c],a,b);this._addToSelection(c)}else-1===this.selectedHandles.indexOf(c)&&(this._clearSelection(),this._addToSelection(c));this._emitReshapeStartEvent(c)}};b.prototype._onGraphicMoveCallback=function(a){var c=a.graphic,b=a.dx;a=a.dy;this._totalDx+=b;this._totalDy+=a;c===this.graphic?this._emitMoveEvent(b,a):(this._syncGeometryAfterHandleMove(c,b,a),this._emitReshapeEvent(c))};b.prototype._onGraphicMoveStopCallback=
function(a){var c=a.graphic,b=a.dx;a=a.dy;this._totalDx+=b;this._totalDy+=a;if(c===this.graphic){c=0;for(b=[].concat(this.handleGraphics,this.midpointGraphics);c<b.length;c++)b[c].visible=!0;this._syncGraphicsWithGeometry();this._emitMoveStopEvent()}else this._syncGeometryAfterHandleMove(c,b,a),-1<this.midpointGraphics.indexOf(c)&&this.refresh(),this._emitReshapeStopEvent(c);this._resetGraphicStateVars()};b.prototype._syncGraphicsWithGeometry=function(){var a=this.graphic.geometry,a="polyline"===
a.type?a.paths:a.rings;this._updateHandleGraphicLocations(a);this._updateMidpointGraphicLocations(a)};b.prototype._updateHandleGraphicLocations=function(a){for(var c=0,b=this.handleGraphics;c<b.length;c++){var d=b[c],f=d.attributes,f=a[f.pathIndex][f.pointIndex];d.set("geometry",new p.Point(f[0],f[1],this.view.spatialReference))}};b.prototype._updateMidpointGraphicLocations=function(a){for(var c=0,b=this.midpointGraphics;c<b.length;c++){var d=b[c],f=d.attributes,h=f.pathIndex,e=a[h][f.pointIndexStart],
f=a[h][f.pointIndexEnd],e=v.getMidpoint([e[0],e[1]],[f[0],f[1]]);d.geometry=new p.Point({x:e[0],y:e[1],spatialReference:this.view.spatialReference})}};b.prototype._syncGeometryAfterHandleMove=function(a,b,d){var c=t.unwrap(this.graphic.geometry).clone(),f="polyline"===c.type?c.paths:c.rings,h=a.attributes,e=h.pathIndex,k=h.pointIndex,m=a.geometry,h=m.x,m=m.y,l=f[e].length-1;f[e][k]=[h,m];"polygon"===c.type&&(0===k?f[e][l]=[h,m]:k===l&&(f[e][0]=[h,m]));if(-1<this.handleGraphics.indexOf(a)){e=0;for(l=
a.attributes.relatedGraphicIndices;e<l.length;e++){var k=l[e],k=this.handleGraphics[k],g=k.attributes;f[g.pathIndex][g.pointIndex]=[h,m];k.geometry=a.geometry}h=0;for(m=this.selectedHandles;h<m.length;h++)if(k=m[h],k!==a){var e=k.attributes,l=e.pathIndex,g=e.pointIndex,n=e.relatedGraphicIndices,e=A.cloneMove(k.geometry,b,d,this.view),p=f[l].length-1;f[l][g]=[e.x,e.y];k.geometry=e;"polygon"===c.type&&(0===g?f[l][p]=[e.x,e.y]:g===p&&(f[l][0]=[e.x,e.y]));l=0;for(g=n;l<g.length;l++)k=g[l],k=this.handleGraphics[k],
n=k.attributes,f[n.pathIndex][n.pointIndex]=[e.x,e.y],k.geometry=e}this._updateMidpointGraphicLocations(f)}this.graphic.geometry=c};b.prototype._onGraphicPointerOverCallback=function(a){a=a.graphic;-1<this.handleGraphics.indexOf(a)&&-1===this.selectedHandles.indexOf(a)&&(a.symbol=this.handleHoverSymbol);this.view.cursor="pointer"};b.prototype._onGraphicPointerOutCallback=function(a){a=a.graphic;-1<this.handleGraphics.indexOf(a)&&-1===this.selectedHandles.indexOf(a)&&(a.symbol=this.handleSymbol);this.view.cursor=
"default"};b.prototype._createHandleFromMidpoint=function(a){var c=this._graphicAttributes,b=[],g=t.unwrap(this.graphic.geometry).clone(),f=a.attributes,h=f.pathIndex,e=f.pointIndexStart,k=f.pointIndexEnd,f=a.geometry,e=0===k?e+1:k,k="polyline"===g.type?g.paths:g.rings;k[h].splice(e,0,[f.x,f.y]);a.attributes=d.__assign(d.__assign({},c),{pathIndex:h,pointIndex:e,relatedGraphicIndices:[]});b.push({coordinates:k[h][e],componentIndex:h,vertexIndex:e});this.graphic.geometry=g;return b};b.prototype._removeHandles=
function(a){var b=t.unwrap(this.graphic.geometry).clone(),d="polygon"===b.type?b.rings:b.paths,g=[];a instanceof n&&(a=[a]);for(var f=0,h=a;f<h.length;f++){var e=h[f].geometry;a=e.x;for(var e=e.y,k=0;k<d.length;k++)for(var q=d[k],l=0;l<q.length;l++){var p=q[l],r=p[1];a===p[0]&&e===r&&(g.push({coordinates:d[k][l],componentIndex:k,vertexIndex:l}),d[k].splice(Number(l),1))}}if("polygon"===b.type)for(f=0;f<d.length;f++)h=d[f],e=h[0],a=e[0],e=e[1],q=h[h.length-1],k=q[0],q=q[1],(1===h.length||3>h.length&&
a===k&&e===q)&&d.splice(d.indexOf(h),1),2<h.length&&(a!==k||e!==q)&&h.push(h[0]);else for(a=0;a<d.length;a++)e=d[a],1===e.length&&d.splice(d.indexOf(e),1);this.graphic.geometry=b;return g};b.prototype._addToSelection=function(a){a instanceof n&&(a=[a]);for(var b=0,d=a;b<d.length;b++)d[b].symbol=this.handleSelectionSymbol;this._set("selectedHandles",this.selectedHandles.concat(a));this._emitSelectEvent(a)};b.prototype._removeFromSelection=function(a,b){b=b?this.handleHoverSymbol:this.handleSymbol;
a instanceof n&&(a=[a]);for(var c=0,d=a;c<d.length;c++){var f=d[c];this.selectedHandles.splice(this.selectedHandles.indexOf(f),1);this._set("selectedHandles",this.selectedHandles);f.symbol=b}this._emitDeselectEvent(a)};b.prototype._clearSelection=function(){if(this.selectedHandles.length){for(var a=this.selectedHandles,b=0,d=this.selectedHandles;b<d.length;b++){var g=d[b];g&&(g.symbol=this.handleSymbol)}this._set("selectedHandles",[]);this._emitDeselectEvent(a)}};b.prototype._keyDownHandler=function(a){-1<
O.indexOf(a.key)&&!a.repeat&&this.selectedHandles.length&&this._removeVertex(this.selectedHandles)};b.prototype._removeVertex=function(a){if(!("polygon"===this.graphic.geometry.type&&4>this.handleGraphics.length||3>this.handleGraphics.length)){var b=this.graphic.clone();a instanceof n&&(a=[a]);var d=this._removeHandles(a);this.refresh();this._emitVertexRemoveEvent(a,b,d)}};b.prototype._emitMoveStartEvent=function(a,b){a=new H(this.graphic,a,b);this.emit("move-start",a);if(this.callbacks.onMoveStart)this.callbacks.onMoveStart(a)};
b.prototype._emitMoveEvent=function(a,b){a=new I(this.graphic,a,b);this.emit("move",a);if(this.callbacks.onMove)this.callbacks.onMove(a)};b.prototype._emitMoveStopEvent=function(){var a=new J(this.graphic,this._totalDx,this._totalDy);this.emit("move-stop",a);if(this.callbacks.onMoveStop)this.callbacks.onMoveStop(a)};b.prototype._emitReshapeStartEvent=function(a){a=new E(this.graphic,a,this.selectedHandles);this.emit("reshape-start",a);if(this.callbacks.onReshapeStart)this.callbacks.onReshapeStart(a)};
b.prototype._emitReshapeEvent=function(a){a=new F(this.graphic,a,this.selectedHandles);this.emit("reshape",a);if(this.callbacks.onReshape)this.callbacks.onReshape(a)};b.prototype._emitReshapeStopEvent=function(a){a=new G(this.graphic,a,this.selectedHandles);this.emit("reshape-stop",a);if(this.callbacks.onReshapeStop)this.callbacks.onReshapeStop(a)};b.prototype._emitSelectEvent=function(a){a=new K(a);this.emit("select",a);if(this.callbacks.onVertexSelect)this.callbacks.onVertexSelect(a)};b.prototype._emitDeselectEvent=
function(a){a=new L(a);this.emit("deselect",a);if(this.callbacks.onVertexDeselect)this.callbacks.onVertexDeselect(a)};b.prototype._emitVertexAddEvent=function(a,b,d){a=new M(a,this.graphic,b,d);this.emit("vertex-add",a);if(this.callbacks.onVertexAdd)this.callbacks.onVertexAdd(a)};b.prototype._emitVertexRemoveEvent=function(a,b,d){a=new N(a,this.graphic,b,d);this.emit("vertex-remove",a);if(this.callbacks.onVertexRemove)this.callbacks.onVertexRemove(a)};d.__decorate([g.property({readOnly:!0})],b.prototype,
"type",void 0);d.__decorate([g.property()],b.prototype,"callbacks",void 0);d.__decorate([g.property()],b.prototype,"graphic",void 0);d.__decorate([g.property({readOnly:!0})],b.prototype,"handleGraphics",void 0);d.__decorate([g.property()],b.prototype,"handleHoverSymbol",void 0);d.__decorate([g.property()],b.prototype,"handleSelectionSymbol",void 0);d.__decorate([g.property()],b.prototype,"handleSymbol",void 0);d.__decorate([g.property()],b.prototype,"layer",void 0);d.__decorate([g.property({readOnly:!0})],
b.prototype,"midpointGraphics",void 0);d.__decorate([g.property()],b.prototype,"midpointSymbol",void 0);d.__decorate([g.property()],b.prototype,"enableMidpoints",void 0);d.__decorate([g.property({readOnly:!0})],b.prototype,"selectedHandles",void 0);d.__decorate([g.property({dependsOn:["view.ready","graphic","layer"],readOnly:!0})],b.prototype,"state",null);d.__decorate([g.property()],b.prototype,"view",void 0);return b=d.__decorate([g.subclass("esri.views.draw.support.Reshape")],b)}(z.EventedAccessor)});
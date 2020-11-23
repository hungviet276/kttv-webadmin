// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Handles ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators ../3d/interactive/editingTools/draw/DrawTool ./DrawAction ./input/DrawEvents ./input/Keys ../input/InputManager".split(" "),function(p,h,f,q,m,n,k,r,t,d,l,e){Object.defineProperty(h,"__esModule",{value:!0});h.PolylineDrawAction=void 0;p=function(h){function c(a){a=h.call(this,a)||this;a._cursorScreenPoint=null;a._panEnabled=!1;a._cursorVertexAdded=!1;a._popVertexOnPointerMove=
!1;a._addVertexOnPointerUp=!1;a._activePointerId=null;a._viewHandles=new q;a.mode="hybrid";a.vertices=[];a.view=null;return a}f.__extends(c,h);c.prototype.initialize=function(){"2d"===this.view.type?this._addViewHandles():this._addDrawTool(this.view)};c.prototype.destroy=function(){"2d"===this.view.type?(this._removeViewHandles(),this._viewHandles.destroy()):this._removeDrawTool();this.emit("destroy")};Object.defineProperty(c.prototype,"_clickEnabled",{get:function(){return-1!==["hybrid","click"].indexOf(this.mode)},
enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"_dragEnabled",{get:function(){return-1!==["hybrid","freehand"].indexOf(this.mode)},enumerable:!1,configurable:!0});c.prototype.addVertex=function(a,b){var g=this;this.vertices.splice(b,0,a);this.history.push({vertex:a,vertexIndex:b,undo:function(){return g._undoVertexAdd(null,b)},redo:function(){return g._redoVertexAdd(null,a,b)}});this._set("redoHistory",[]);var c=new d.VertexAddEvent(this.view,null,b,this.vertices);this.emit("vertex-add",
c);c.defaultPrevented&&(this._popVertexOnPointerMove=!0,this.history.pop())};c.prototype.removeVertex=function(a){var b=this,g=this.vertices.splice(a,1)[0];this.history.push({vertex:g,vertexIndex:a,undo:function(){return b._undoVertexRemove(null,g,a)},redo:function(){return b._redoVertexRemove(null,a)}});this._set("redoHistory",[]);this.emit("vertex-remove",new d.VertexRemoveEvent(this.view,null,a,this.vertices))};c.prototype.updateVertex=function(a,b){var g=this,c=this.vertices[b];this.vertices[b]=
a;this.history.push({vertex:a,vertexIndex:b,undo:function(){return g._undoVertexUpdate(null,c,b)},redo:function(){return g._redoVertexUpdate(null,a,b)}});this._set("redoHistory",[]);this.emit("vertex-update",new d.VertexUpdateEvent(this.view,null,b,this.vertices))};c.prototype.complete=function(){"2d"===this.view.type?this._completeDrawing():this._drawTool.completeCreateOperation()};c.prototype._addViewHandles=function(){var a=this;this._removeViewHandles();this._viewHandles.add([this.view.on("click",
function(a){a.stopPropagation()},e.ViewEventPriorities.TOOL),this.view.on("pointer-down",function(b){a._shouldHandlePointerEvent(b)&&!a._panEnabled&&(a._activePointerId=b.pointerId,a._addVertexOnPointerUp=!0,a._cursorScreenPoint=n.createScreenPointFromEvent(b),"touch"===b.pointerType&&a._updateCursor(b.native))},e.ViewEventPriorities.TOOL),this.view.on("pointer-move",function(b){a._popVertexOnPointerMove&&(a.vertices.pop(),a._popVertexOnPointerMove=!1);a._cursorScreenPoint=n.createScreenPointFromEvent(b);
"touch"!==b.pointerType&&a._updateCursor(b.native)},e.ViewEventPriorities.TOOL),this.view.on("pointer-drag",function(b){a._shouldHandlePointerEvent(b)&&(a._cursorScreenPoint=n.createScreenPointFromEvent(b),a._dragEnabled&&!a._panEnabled?a._vertexAddHandler(b):a._addVertexOnPointerUp=!1)},e.ViewEventPriorities.TOOL),this.view.on("pointer-up",function(b){a._shouldHandlePointerEvent(b)&&(a._activePointerId=null,a._addVertexOnPointerUp?a._clickEnabled?a._vertexAddHandler(b):(1===a.vertices.length&&a.vertices.pop(),
a._drawCompleteHandler(b)):a._updateCursor(b.native,"touch"===b.pointerType))},e.ViewEventPriorities.TOOL),this.view.on("drag",function(b){a._dragEnabled&&m.isSome(a._activePointerId)&&!a._panEnabled&&b.stopPropagation()},e.ViewEventPriorities.TOOL),this.view.on("drag",["Shift"],function(a){a.stopPropagation()},e.ViewEventPriorities.TOOL),this.view.on("double-click",function(b){b.stopPropagation();a._drawCompleteHandler(b)},e.ViewEventPriorities.TOOL),this.view.on("double-click",["Control"],function(b){b.stopPropagation();
a._drawCompleteHandler(b)},e.ViewEventPriorities.TOOL),this.view.on("key-down",function(b){var c=b.key,d=b.repeat;c===l.KEYS.vertexAddKey&&!d&&a._cursorScreenPoint?(b.stopPropagation(),a._vertexAddHandler(b)):c===l.KEYS.drawCompleteKey&&!d&&a._cursorScreenPoint&&1<a.vertices.length?(b.stopPropagation(),a._vertexAddHandler(b),a._drawCompleteHandler(b)):c!==l.KEYS.undoKey||a.interactiveUndoDisabled||d?c!==l.KEYS.redoKey||a.interactiveUndoDisabled||d?c!==l.KEYS.panKey||d||(b.stopPropagation(),a._panEnabled=
!0):(b.stopPropagation(),a.redo()):(b.stopPropagation(),a.undo())},e.ViewEventPriorities.TOOL),this.view.on("key-up",function(b){b.key===l.KEYS.panKey&&(b.stopPropagation(),a._panEnabled=!1)},e.ViewEventPriorities.TOOL)])};c.prototype._removeViewHandles=function(){this._viewHandles.removeAll()};c.prototype._addDrawTool=function(a){var b=this;this._drawTool=new r.DrawTool({view:a,elevationInfo:this.elevationInfo,hasZ:this.hasZ,geometryType:"polyline"});this.view.toolViewManager.tools.push(this._drawTool);
this.view.activeTool=this._drawTool;this._drawTool.on("vertex-add",function(a){1===a.vertices.length&&b.emit("vertex-add",new d.VertexAddEvent(b.view,null,a.vertices[0].vertexIndex,b._drawTool.getVertexCoords()))});this._drawTool.on("cursor-update",function(a){1===a.vertices.length&&b.emit("cursor-update",new d.CursorUpdateEvent(b.view,null,a.vertices[0].vertexIndex,b._drawTool.getVertexCoords()))});this._drawTool.on("complete",function(a){b.emit("draw-complete",new d.DrawCompleteEvent(null,b._drawTool.getVertexCoords()));
b._removeDrawTool()})};c.prototype._removeDrawTool=function(){m.isSome(this._drawTool)&&(this.view.tools.remove(this._drawTool),this._drawTool.destroy(),this._drawTool=null)};c.prototype._addVertex=function(a,b){var c=this;this._popCursorVertex();if(!this.isDuplicateVertex(this.vertices,a)){this.vertices.push(a);var e=this.vertices.length-1;this.history.push({vertex:a,vertexIndex:e,undo:function(){return c._undoVertexAdd(b,e)},redo:function(){return c._redoVertexAdd(b,a,e)}});this._set("redoHistory",
[]);var f=new d.VertexAddEvent(this.view,b,e,this.vertices);this.emit("vertex-add",f);f.defaultPrevented&&(this._popVertexOnPointerMove=!0,this.history.pop())}};c.prototype._updateCursor=function(a,b){void 0===b&&(b=!1);this._popCursorVertex();if(this._cursorScreenPoint){var c=null,e=null,f=this.getCoordsAndPointFromScreenPoint(this._cursorScreenPoint);m.isSome(f)&&(c=f.mapPoint,b||(e=this._pushCursorVertex(f.vertex)));a=new d.CursorUpdateEvent(this.view,a,e,this.vertices,c);this.emit("cursor-update",
a)}};c.prototype._completeDrawing=function(a){this._activePointerId=null;this._popCursorVertex();2>this.vertices.length||(a=new d.DrawCompleteEvent(a,this.vertices),this.emit("draw-complete",a),a.defaultPrevented||this._removeViewHandles())};c.prototype._undoVertexAdd=function(a,b){this.vertices.splice(b,1);this.emit("undo",new d.VertexRemoveEvent(this.view,a,b,this.vertices))};c.prototype._redoVertexAdd=function(a,b,c){this.vertices.splice(c,0,b);this.emit("redo",new d.VertexAddEvent(this.view,a,
c,this.vertices))};c.prototype._undoVertexRemove=function(a,b,c){this.vertices.splice(c,0,b);this.emit("undo",new d.VertexAddEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexRemove=function(a,b){this.vertices.splice(b,1);this.emit("redo",new d.VertexRemoveEvent(this.view,a,b,this.vertices))};c.prototype._undoVertexUpdate=function(a,b,c){this.vertices[c]=b;this.emit("undo",new d.VertexUpdateEvent(this.view,a,c,this.vertices))};c.prototype._redoVertexUpdate=function(a,b,c){this.vertices[c]=
b;this.emit("redo",new d.VertexUpdateEvent(this.view,a,c,this.vertices))};c.prototype._pushCursorVertex=function(a){this._popCursorVertex();this.vertices.push(a);this._cursorVertexAdded=!0;return this.vertices.length-1};c.prototype._popCursorVertex=function(){this._cursorVertexAdded&&(this.vertices.pop(),this._cursorVertexAdded=!1)};c.prototype._shouldHandlePointerEvent=function(a){return("mouse"!==a.pointerType||0===a.button)&&(m.isNone(this._activePointerId)||this._activePointerId===a.pointerId)};
c.prototype._vertexAddHandler=function(a){if(this._cursorVertexAdded)this._addVertex(this.vertices[this.vertices.length-1],a.native);else{var b=this.getCoordsFromScreenPoint(this._cursorScreenPoint);m.isSome(b)&&this._addVertex(b,a.native)}};c.prototype._drawCompleteHandler=function(a){this._completeDrawing(a.native)};f.__decorate([k.property({dependsOn:["mode"]})],c.prototype,"_clickEnabled",null);f.__decorate([k.property({dependsOn:["mode"]})],c.prototype,"_dragEnabled",null);f.__decorate([k.property({cast:function(a){return-1===
["hybrid","freehand","click"].indexOf(a)?"hybrid":a}})],c.prototype,"mode",void 0);f.__decorate([k.property({readOnly:!0})],c.prototype,"vertices",void 0);f.__decorate([k.property()],c.prototype,"view",void 0);return c=f.__decorate([k.subclass("esri.views.draw.PolylineDrawAction")],c)}(t);h.PolylineDrawAction=p});
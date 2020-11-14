// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Handles ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators ./DrawAction ./input/DrawEvents ../input/InputManager".split(" "),function(l,h,e,m,n,f,k,p,q,g){Object.defineProperty(h,"__esModule",{value:!0});h.RectangleDrawAction=void 0;var r=function(){function d(c,a,b){this.view=c;this.native=a;this.vertices=b;this.defaultPrevented=!1;this.type="rectangle-cursor-update"}d.prototype.preventDefault=function(){this.defaultPrevented=!0};
return d}();l=function(d){function c(){var a=null!==d&&d.apply(this,arguments)||this;a._cursorMoved=!1;a._startPoint=null;a._viewHandles=new m;a._dragEnabled=!0;a.vertices=[];a.view=null;return a}e.__extends(c,d);c.prototype.initialize=function(){this._addViewHandles()};c.prototype.destroy=function(){this._removeViewHandles();this._viewHandles.destroy();this.emit("destroy")};c.prototype.complete=function(){4===this.vertices.length&&this._drawCompleteHandler(null)};c.prototype._addViewHandles=function(){var a=
this;this._removeViewHandles();this._viewHandles.add([this.view.on("pointer-down",function(b){a._startPoint=f.createScreenPointFromEvent(b)},g.ViewEventPriorities.TOOL),this.view.on("pointer-move",function(b){if(a._startPoint){var c=f.createScreenPointFromEvent(b);a._cursorMoved=!0;a._cursorUpdateHandler(b.native,c)}},g.ViewEventPriorities.TOOL),this.view.on("pointer-up",function(b){if(!a._cursorMoved){var c=b.x,t=b.y,d=[[-48,-48],[48,-48],[48,48],[-48,48]],e=[];d.forEach(function(b){b=a.getCoordsFromScreenPoint(f.createScreenPoint(c+
b[0],t+b[1]));n.isSome(b)&&e.push(b)});e.length===d.length?a._set("vertices",e):a._set("vertices",[])}a._drawCompleteHandler(b.native)},g.ViewEventPriorities.TOOL),this.view.on("drag",function(b){a._dragEnabled&&a._startPoint&&b.stopPropagation()},g.ViewEventPriorities.TOOL)])};c.prototype._removeViewHandles=function(){this._viewHandles.removeAll()};c.prototype._cursorUpdateHandler=function(a,b){var c=b.x,d=b.y;b=Math.min(c,this._startPoint.x);var e=Math.min(d,this._startPoint.y),d=Math.abs(d-this._startPoint.y);
Math.abs(c-this._startPoint.x)&&d?(c=this.view.toMap(f.createScreenPoint(b,e+d)),b=this.view.toMap(f.createScreenPoint(b,e)),this._set("vertices",[[c.x,b.y],[b.x,b.y],[b.x,c.y],[c.x,c.y]]),a=new r(this.view,a,this.vertices),this.emit("cursor-update",a)):this._set("vertices",[])};c.prototype._drawCompleteHandler=function(a){a=new q.DrawCompleteEvent(a,this.vertices);this.emit("draw-complete",a);a.defaultPrevented?(this._cursorMoved=!1,this._startPoint=null,this._set("vertices",[])):this._removeViewHandles()};
e.__decorate([k.property({readOnly:!0})],c.prototype,"vertices",void 0);e.__decorate([k.property()],c.prototype,"view",void 0);return c=e.__decorate([k.subclass("esri/views/2d/engine/markup/RectangleDrawAction")],c)}(p);h.RectangleDrawAction=l});
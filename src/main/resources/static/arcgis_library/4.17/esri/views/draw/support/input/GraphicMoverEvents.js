// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(b,a){Object.defineProperty(a,"__esModule",{value:!0});a.GraphicPointerUpEvent=a.GraphicPointerDownEvent=a.GraphicPointerOutEvent=a.GraphicPointerOverEvent=a.GraphicMoveStopEvent=a.GraphicMoveEvent=a.GraphicMoveStartEvent=a.GraphicDoubleClickEvent=a.GraphicClickEvent=void 0;b=function(){return function(f,a,b,c,d){this.graphic=f;this.index=a;this.x=b;this.y=c;this.viewEvent=d;this.type="graphic-click"}}();a.GraphicClickEvent=b;b=function(){return function(a,b,e,
c,d){this.graphic=a;this.index=b;this.x=e;this.y=c;this.viewEvent=d;this.type="graphic-double-click"}}();a.GraphicDoubleClickEvent=b;b=function(){function a(a,b,c,d,f,g,h,k,l,m){this.graphic=a;this.allGraphics=b;this.index=c;this.x=d;this.y=f;this.dx=g;this.dy=h;this.totalDx=k;this.totalDy=l;this.viewEvent=m;this.defaultPrevented=!1;this.type="graphic-move-start"}a.prototype.preventDefault=function(){this.defaultPrevented=!0};return a}();a.GraphicMoveStartEvent=b;b=function(){function a(a,b,c,d,f,
g,h,k,l,m){this.graphic=a;this.allGraphics=b;this.index=c;this.x=d;this.y=f;this.dx=g;this.dy=h;this.totalDx=k;this.totalDy=l;this.viewEvent=m;this.defaultPrevented=!1;this.type="graphic-move"}a.prototype.preventDefault=function(){this.defaultPrevented=!0};return a}();a.GraphicMoveEvent=b;b=function(){function a(a,b,c,d,f,g,h,k,l,m){this.graphic=a;this.allGraphics=b;this.index=c;this.x=d;this.y=f;this.dx=g;this.dy=h;this.totalDx=k;this.totalDy=l;this.viewEvent=m;this.defaultPrevented=!1;this.type=
"graphic-move-stop"}a.prototype.preventDefault=function(){this.defaultPrevented=!0};return a}();a.GraphicMoveStopEvent=b;b=function(){return function(a,b,e,c,d){this.graphic=a;this.index=b;this.x=e;this.y=c;this.viewEvent=d;this.type="graphic-pointer-over"}}();a.GraphicPointerOverEvent=b;b=function(){return function(a,b,e,c,d){this.graphic=a;this.index=b;this.x=e;this.y=c;this.viewEvent=d;this.type="graphic-pointer-out"}}();a.GraphicPointerOutEvent=b;b=function(){return function(a,b,e,c,d){this.graphic=
a;this.index=b;this.x=e;this.y=c;this.viewEvent=d;this.type="graphic-pointer-down"}}();a.GraphicPointerDownEvent=b;b=function(){return function(a,b,e,c,d){this.graphic=a;this.index=b;this.x=e;this.y=c;this.viewEvent=d;this.type="graphic-pointer-up"}}();a.GraphicPointerUpEvent=b});
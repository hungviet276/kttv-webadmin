// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Handles ../../../../core/maybe ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec3f64 ../measurementTools/support/viewUtils ./VisualElement ../../../overlay/LineOverlayItem ../../../overlay/TextOverlayItem".split(" "),function(q,n,t,u,r,d,h,v,w,x,y,z){Object.defineProperty(n,"__esModule",{value:!0});n.LabelVisualElement=void 0;q=function(d){function c(a){var b=d.call(this,a.view)||this;b._handles=
new u;b._textItem=null;b._calloutItem=null;b._geometry=null;b._text="";b._fontSize=14;b._distance=25;b._anchor="right";b.applyProps(a);return b}t.__extends(c,d);Object.defineProperty(c.prototype,"geometry",{get:function(){return this._geometry},set:function(a){this._geometry=a;this._updateLabelPosition()},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"text",{get:function(){return this._text},set:function(a){this._text=a;this.attached&&(this._textItem.text=this._text)},enumerable:!1,
configurable:!0});Object.defineProperty(c.prototype,"fontSize",{get:function(){return this._fontSize},set:function(a){this._fontSize=a;this.attached&&(this._textItem.fontSize=this._fontSize)},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"distance",{get:function(){return this._distance},set:function(a){this._distance!==a&&(this._distance=a,this._updateLabelPosition())},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,"anchor",{get:function(){return this._anchor},
set:function(a){this._anchor!==a&&(this._anchor=a,this._updateLabelPosition())},enumerable:!1,configurable:!0});c.prototype._updateLabelPosition=function(){if(this.attached&&r.isSome(this.geometry))switch(this.geometry.type){case "point":var a=this._computeLabelPositionFromPoint(this.geometry,e);a?(this._textItem.position=[e[0],e[1]],this._textItem.anchor="center"):this._textItem.visible=!1;this._calloutItem.visible=!1;break;case "euclidean":case "geodesic":if(a=this._computeLabelPositionFromSegment(this.geometry,
this._distance,this._anchor,e,f)){var a=f[0]-e[0],b=f[1]-e[1];this._textItem.position=[f[0],f[1]];this._textItem.anchor=Math.abs(a)>Math.abs(b)?0<a?"left":"right":0<b?"top":"bottom";this._textItem.visible=!0;this._calloutItem.startPosition=[e[0],e[1]];this._calloutItem.endPosition=[f[0],f[1]];this._calloutItem.visible=!0}else this._textItem.visible=!1,this._calloutItem.visible=!1}};c.prototype._computeLabelPositionFromPoint=function(a,b){this.view.renderCoordsHelper.toRenderCoords(a,m);a=this.view._stage.getCamera();
a.projectPoint(m,g);if(0>g[2]||1<g[2])return!1;a.renderToScreen(g,b);return!0};c.prototype._computeLabelPositionFromSegment=function(a,c,d,e,f){if(!a)return!1;var k=this.view._stage.getCamera();w.screenSpaceTangent(a.startRenderSpace,a.endRenderSpace,p,k);h.vec2.set(b,-p[1],p[0]);var l=!1;switch(d){case "top":l=0>b[1];break;case "bottom":l=0<b[1];break;case "left":l=0<b[0];break;case "right":l=0>b[0]}l&&h.vec2.negate(b,b);if(0===h.vec2.length(b))switch(d){case "top":b[1]=1;break;case "bottom":b[1]=
-1;break;case "left":b[0]=-1;break;case "right":b[0]=1}a.eval(.5,m);k.projectPoint(m,g);if(0>g[2]||1<g[2])return!1;k.renderToScreen(g,e);h.vec2.scale(b,b,c*k.pixelRatio);h.vec2.add(b,b,g);k.renderToScreen(b,f);return!0};c.prototype.createResources=function(){var a=this;this._textItem=new z({visible:!0});this._textItem.text=r.unwrap(this._text);this._textItem.fontSize=this._fontSize;this._calloutItem=new y({visible:!0,width:2});this._updateLabelPosition();this.view.overlay.items.addMany([this._textItem,
this._calloutItem]);this._handles.add(this.view.state.watch("camera",function(){a._updateLabelPosition()}))};c.prototype.destroyResources=function(){this.view.overlay&&!this.view.overlay.destroyed&&this.view.overlay.items.removeMany([this._textItem,this._calloutItem]);this._handles.removeAll()};c.prototype.updateVisibility=function(a){this._textItem.visible=a;this._calloutItem.visible=a};return c}(x.VisualElement);n.LabelVisualElement=q;var p=d.createRenderScreenPointArray(),b=d.createRenderScreenPointArray(),
m=v.vec3f64.create(),g=d.createRenderScreenPointArray3(),e=d.createScreenPointArray(),f=d.createScreenPointArray()});
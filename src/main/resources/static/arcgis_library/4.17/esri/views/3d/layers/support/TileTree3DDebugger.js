// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../Graphic ../../../../core/Accessor ../../../../core/mathUtils ../../../../core/maybe ../../../../core/accessorSupport/decorators ../../../../symbols/FillSymbol3DLayer ../../../../symbols/PointSymbol3D ../../../../symbols/PolygonSymbol3D ../../../../symbols/TextSymbol3DLayer".split(" "),function(n,c,d,p,t,q,r,e,u,v,w,x){Object.defineProperty(c,"__esModule",{value:!0});c.TileTree3DDebugger=void 0;var y=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,
0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];n=function(c){function b(a){a=c.call(this,a)||this;a.updating=!1;a.enablePolygons=!0;a._graphics=[];a._enabled=!0;return a}d.__extends(b,c);b.prototype.initialize=function(){this._symbols=y.map(function(a){return new w(new u({material:{color:[a[0],a[1],a[2],.6]},outline:{color:"black",size:1}}))})};Object.defineProperty(b.prototype,
"enabled",{get:function(){return this._enabled},set:function(a){this._enabled!==a&&(this._enabled=a,this.update())},enumerable:!1,configurable:!0});b.prototype.destroy=function(){this.view&&(this.clear(),this._set("view",null))};b.prototype._update=function(a,b,c){var h=this;this.clear();if(this._enabled){var k,d=c.getLabel||function(a){a=a.lij[0]+"/"+a.lij[1]+"/"+a.lij[2];r.isSome(k)&&(a+=" ("+k+")");return a};a.forEach(function(f,l){var g=f.lij[0],m=b(f);h.enablePolygons&&h._graphics.push(new p({geometry:m,
symbol:h._symbols[g%h._symbols.length]}));g=l/(a.length-1);l=q.lerp(0,200,g);g=q.lerp(20,6,g);k=c.getLoadPriority&&c.getLoadPriority(f);var e=r.isSome(k)&&k>=a.length;f=d(f);m=new p({geometry:m.extent.center,symbol:new v({verticalOffset:{screenLength:40/.75},callout:{type:"line",color:"white",border:{color:"black"}},symbolLayers:[new x({text:f,halo:{color:"white",size:1/.75},material:{color:[l,e?0:l,e?0:l]},size:g/.75})]})});h._graphics.push(m)});this.view.graphics.addMany(this._graphics)}};b.prototype.clear=
function(){this.view.graphics.removeMany(this._graphics);this._graphics=[]};d.__decorate([e.property({constructOnly:!0})],b.prototype,"view",void 0);d.__decorate([e.property({readOnly:!0})],b.prototype,"updating",void 0);return b=d.__decorate([e.subclass("esri.views.3d.layers.support.TileTree3DDebugger")],b)}(t);c.TileTree3DDebugger=n});
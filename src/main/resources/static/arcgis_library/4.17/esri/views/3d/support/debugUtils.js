// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../geometry ../../../Graphic ../../../symbols ../../../core/maybe".split(" "),function(c,a,d,e,f,g){Object.defineProperty(a,"__esModule",{value:!0});a.GraphicsHandle=void 0;var h={red:[255,0,0],green:[0,255,0],blue:[0,0,255]};c=function(){function a(a,b){this.graphics=a;this._symbol=new f.SimpleMarkerSymbol({color:h[b],outline:{color:[255,255,255],width:2}})}a.prototype.showPoint=function(a,b){this.remove();a=new d.Point({x:a[0],y:a[1],z:a[2],spatialReference:b});this._graphic=
new e({geometry:a,symbol:this._symbol});this.graphics.add(this._graphic)};a.prototype.remove=function(){g.isSome(this._graphic)&&(this.graphics.remove(this._graphic),this._graphic=null)};return a}();a.GraphicsHandle=c});
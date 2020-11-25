// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/has ../../../../core/libs/gl-matrix-2/mat3 ../../../../core/libs/gl-matrix-2/mat3f32 ../DisplayObject ../../tiling/TileKey".split(" "),function(f,c,l,p,g,h,m,n){Object.defineProperty(c,"__esModule",{value:!0});c.TiledDisplayObject=void 0;f=function(c){function a(b,a,k,e){void 0===e&&(e=k);var d=c.call(this)||this;d.triangleCountReportedInDebug=0;d.transforms={dvs:h.mat3f32.create(),tileMat3:h.mat3f32.create()};d.triangleCount=0;d.key=new n(b);d.bounds=
a;d.size=k;d.coordRange=e;return d}l.__extends(a,c);a.prototype.destroy=function(){this.texture&&(this.texture.dispose(),this.texture=null)};Object.defineProperty(a.prototype,"coords",{get:function(){return this._coords},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"bounds",{get:function(){return this._bounds},set:function(b){this._coords=[b[0],b[3]];this._bounds=b},enumerable:!1,configurable:!0});a.prototype.setTransform=function(b,a){a/=b.resolution*b.pixelRatio;var c=this.transforms.tileMat3,
e=b.toScreenNoRotation([0,0],this.coords);g.mat3.set(c,this.size[0]/this.coordRange[0]*a,0,0,0,this.size[1]/this.coordRange[1]*a,0,e[0],e[1],1);g.mat3.multiply(this.transforms.dvs,b.displayViewMat3,c)};return a}(m.DisplayObject);c.TiledDisplayObject=f});
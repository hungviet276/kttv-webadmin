// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f32"],function(g,d,k,e,h){function f(a,b,c){return a+(b-a)*c}Object.defineProperty(d,"__esModule",{value:!0});d.OpacityEffect=d.HueRotateEffect=d.DropShadowEffect=d.ColorMatrixEffect=d.sepia=d.grayscale=d.BlurEffect=d.BloomEffect=void 0;g=function(){function a(b,c,a){this.strength=b;this.radius=c;this.threshold=a;this.type="bloom"}a.prototype.interpolate=function(b,c,a){this.strength=f(b.strength,
c.strength,a);this.radius=f(b.radius,c.radius,a);this.threshold=f(b.threshold,c.threshold,a)};a.prototype.clone=function(){return new a(this.strength,this.radius,this.threshold)};return a}();d.BloomEffect=g;g=function(){function a(b,c){this.type=b;this.radius=c}a.prototype.interpolate=function(b,c,a){this.radius=Math.round(f(b.radius,c.radius,a))};a.prototype.clone=function(){return new a(this.type,this.radius)};return a}();d.BlurEffect=g;d.grayscale=function(a,b){b=1-b;a=e.mat4.set(a,.2126+.7874*
b,.7152-.7152*b,.0722-.0722*b,0,.2126-.2126*b,.7152+.2848*b,.0722-.0722*b,0,.2126-.2126*b,.7152-.7152*b,.0722+.9278*b,0,0,0,0,1);return e.mat4.transpose(a,a)};d.sepia=function(a,b){b=1-b;a=e.mat4.set(a,.393+.607*b,.769-.769*b,.189-.189*b,0,.349-.349*b,.686+.314*b,.168-.168*b,0,.272-.272*b,.534-.534*b,.131+.869*b,0,0,0,0,1);return e.mat4.transpose(a,a)};g=function(){function a(b,c){this.type=b;this.amount=c;if("invert"===this.type||"grayscale"===this.type||"sepia"===this.type)this.amount=Math.min(this.amount,
1)}Object.defineProperty(a.prototype,"colorMatrix",{get:function(){this._colorMatrix||this._updateMatrix();return this._colorMatrix},enumerable:!1,configurable:!0});a.prototype.interpolate=function(b,c,a){this.amount=f(b.amount,c.amount,a);this._updateMatrix()};a.prototype.clone=function(){return new a(this.type,this.amount)};a.prototype._updateMatrix=function(){var b=this._colorMatrix||h.mat4f32.create();switch(this.type){case "brightness":var c=this.amount,b=e.mat4.set(b,c,0,0,0,0,c,0,0,0,0,c,0,
0,0,0,1);this._colorMatrix=e.mat4.transpose(b,b);break;case "contrast":c=this.amount;b=e.mat4.set(b,c,0,0,.5-.5*c,0,c,0,.5-.5*c,0,0,c,.5-.5*c,0,0,0,1);this._colorMatrix=e.mat4.transpose(b,b);break;case "grayscale":this._colorMatrix=d.grayscale(b,this.amount);break;case "invert":var c=this.amount,a=1-2*c,b=e.mat4.set(b,a,0,0,c,0,a,0,c,0,0,a,c,0,0,0,1);this._colorMatrix=e.mat4.transpose(b,b);break;case "saturate":c=this.amount;b=e.mat4.set(b,.213+.787*c,.715-.715*c,.072-.072*c,0,.213-.213*c,.715+.285*
c,.072-.072*c,0,.213-.213*c,.715-.715*c,.072+.928*c,0,0,0,0,1);this._colorMatrix=e.mat4.transpose(b,b);break;case "sepia":this._colorMatrix=d.sepia(b,this.amount)}};return a}();d.ColorMatrixEffect=g;g=function(){function a(b,c,a,d){this.offsetX=b;this.offsetY=c;this.blurRadius=a;this.color=d;this.type="drop-shadow"}a.prototype.interpolate=function(b,c,a){this.offsetX=f(b.offsetX,c.offsetX,a);this.offsetY=f(b.offsetY,c.offsetY,a);this.blurRadius=f(b.blurRadius,c.blurRadius,a);this.color[0]=Math.round(f(b.color[0],
c.color[0],a));this.color[1]=Math.round(f(b.color[1],c.color[1],a));this.color[2]=Math.round(f(b.color[2],c.color[2],a));this.color[3]=f(b.color[3],c.color[3],a)};a.prototype.clone=function(){return new a(this.offsetX,this.offsetY,this.blurRadius,k.__spreadArrays(this.color))};return a}();d.DropShadowEffect=g;g=function(){function a(b){this.angle=b;this.type="hue-rotate"}Object.defineProperty(a.prototype,"colorMatrix",{get:function(){this._colorMatrix||this._updateMatrix();return this._colorMatrix},
enumerable:!1,configurable:!0});a.prototype.interpolate=function(b,a,d){this.angle=f(b.angle,a.angle,d);this._updateMatrix()};a.prototype.clone=function(){return new a(this.angle)};a.prototype._updateMatrix=function(){var b=this._colorMatrix||h.mat4f32.create(),a=this.angle,d=Math.sin(a*Math.PI/180),a=Math.cos(a*Math.PI/180),b=e.mat4.set(b,.213+.787*a-.213*d,.715-.715*a-.715*d,.072-.072*a+.928*d,0,.213-.213*a+.143*d,.715+.285*a+.14*d,.072-.072*a-.283*d,0,.213-.213*a-.787*d,.715-.715*a+.715*d,.072+
.928*a+.072*d,0,0,0,0,1);this._colorMatrix=e.mat4.transpose(b,b)};return a}();d.HueRotateEffect=g;g=function(){function a(a){this.amount=a;this.type="opacity";this.amount=Math.min(this.amount,1)}a.prototype.interpolate=function(a,c,d){this.amount=f(a.amount,c.amount,d)};a.prototype.clone=function(){return new a(this.amount)};return a}();d.OpacityEffect=g});
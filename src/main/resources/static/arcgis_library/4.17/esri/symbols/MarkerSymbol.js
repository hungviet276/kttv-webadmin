// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/screenUtils ../core/accessorSupport/decorators ./Symbol".split(" "),function(h,k,c,e,d,g){return function(f){function b(a){a=f.call(this,a)||this;a.angle=0;a.type=null;a.xoffset=0;a.yoffset=0;a.size=9;return a}c.__extends(b,f);b.prototype.hash=function(){return this.type+"."+this.angle+"."+this.size+"."+this.xoffset+"."+this.yoffset};c.__decorate([d.property({type:Number,json:{read:function(a){return a&&-1*a},write:function(a,b){return b.angle=a&&-1*a}}})],b.prototype,
"angle",void 0);c.__decorate([d.property({type:["simple-marker","picture-marker"],readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],b.prototype,"xoffset",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],b.prototype,"yoffset",void 0);c.__decorate([d.property({type:Number,cast:function(a){return"auto"===a?a:e.toPt(a)},json:{write:!0}})],b.prototype,"size",void 0);return b=c.__decorate([d.subclass("esri.symbols.MarkerSymbol")],
b)}(g)});
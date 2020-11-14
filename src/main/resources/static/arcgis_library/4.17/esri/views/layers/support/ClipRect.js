// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/accessorSupport/decorators","./ClipArea"],function(g,h,b,c,f){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.type="rect";a.left=null;a.right=null;a.top=null;a.bottom=null;return a}b.__extends(a,d);e=a;a.prototype.clone=function(){return new e({left:this.left,right:this.right,top:this.top,bottom:this.bottom})};Object.defineProperty(a.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!1,
configurable:!0});var e;b.__decorate([c.property({type:[Number,String],json:{write:!0}})],a.prototype,"left",void 0);b.__decorate([c.property({type:[Number,String],json:{write:!0}})],a.prototype,"right",void 0);b.__decorate([c.property({type:[Number,String],json:{write:!0}})],a.prototype,"top",void 0);b.__decorate([c.property({type:[Number,String],json:{write:!0}})],a.prototype,"bottom",void 0);b.__decorate([c.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],a.prototype,"version",
null);return a=e=b.__decorate([c.subclass("esri.views.layers.support.ClipRect")],a)}(f)});
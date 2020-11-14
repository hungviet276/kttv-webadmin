// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Ground ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../webdoc/support/opacityUtils".split(" "),function(f,g,d,l,m,h,n,k){Object.defineProperty(g,"__esModule",{value:!0});f=function(e){function b(){var a=null!==e&&e.apply(this,arguments)||this;a.opacity=null;return a}d.__extends(b,e);c=b;b.prototype.clone=function(){return new c({opacity:this.opacity})};b.prototype.cloneAndApplyTo=function(a){if(null==this.opacity)return a;
a=null!=a?a.clone():new l;a.opacity=this.opacity;return a};b.fromGround=function(a){return new c({opacity:a.opacity})};var c;d.__decorate([h.property({type:Number,json:{type:n.Integer,read:{reader:k.transparencyToOpacity,source:"transparency"},write:{writer:function(a,b){b.transparency=k.opacityToTransparency(a)},target:"transparency"}}})],b.prototype,"opacity",void 0);return b=c=d.__decorate([h.subclass("esri.webscene.support.SlideGround")],b)}(m.JSONSupport);g.default=f});
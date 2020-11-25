// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/jsonMap ../core/lang ../core/screenUtils ../core/accessorSupport/decorators ./LineSymbol ./LineSymbolMarker".split(" "),function(q,r,c,l,m,k,d,n,p){var f=new l.default({esriSLSSolid:"solid",esriSLSDash:"dash",esriSLSDot:"dot",esriSLSDashDot:"dash-dot",esriSLSDashDotDot:"long-dash-dot-dot",esriSLSNull:"none",esriSLSInsideFrame:"inside-frame",esriSLSShortDash:"short-dash",esriSLSShortDot:"short-dot",esriSLSShortDashDot:"short-dash-dot",esriSLSShortDashDotDot:"short-dash-dot-dot",
esriSLSLongDash:"long-dash",esriSLSLongDashDot:"long-dash-dot"});return function(g){function b(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];a=g.apply(this,a)||this;a.type="simple-line";a.style="solid";a.cap="round";a.join="round";a.marker=null;a.miterLimit=2;return a}c.__extends(b,g);h=b;b.prototype.normalizeCtorArgs=function(a,b,c,d,f,g){if(a&&"string"!==typeof a)return a;var e={};null!=a&&(e.style=a);null!=b&&(e.color=b);null!=c&&(e.width=k.toPt(c));null!=d&&(e.cap=d);null!=f&&(e.join=
f);null!=g&&(e.miterLimit=k.toPt(g));return e};b.prototype.clone=function(){var a;return new h({color:m.clone(this.color),style:this.style,width:this.width,cap:this.cap,join:this.join,miterLimit:this.miterLimit,marker:null===(a=this.marker)||void 0===a?void 0:a.clone()})};b.prototype.hash=function(){var a,b;return g.prototype.hash.call(this)+"."+(null===(a=this.color)||void 0===a?void 0:a.hash())+"."+this.style+"."+this.cap+"."+this.join+"."+this.miterLimit+"."+(null===(b=this.marker)||void 0===b?
void 0:b.hash())};var h;c.__decorate([d.enumeration({esriSLS:"simple-line"},{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({type:f.apiValues,json:{read:f.read,write:f.write}})],b.prototype,"style",void 0);c.__decorate([d.property({type:["butt","round","square"],json:{write:{overridePolicy:function(a,b,c){return{enabled:"round"!==a&&(null==c||null==c.origin)}}}}})],b.prototype,"cap",void 0);c.__decorate([d.property({type:["miter","round","bevel"],json:{write:{overridePolicy:function(a,
b,c){return{enabled:"round"!==a&&(null==c||null==c.origin)}}}}})],b.prototype,"join",void 0);c.__decorate([d.property({types:{key:"type",base:null,defaultKeyValue:"line-marker",typeMap:{"line-marker":p}},json:{write:!0,origins:{"web-scene":{write:!1}}}})],b.prototype,"marker",void 0);c.__decorate([d.property({type:Number,json:{read:!1,write:!1}})],b.prototype,"miterLimit",void 0);return b=h=c.__decorate([d.subclass("esri.symbols.SimpleLineSymbol")],b)}(n)});
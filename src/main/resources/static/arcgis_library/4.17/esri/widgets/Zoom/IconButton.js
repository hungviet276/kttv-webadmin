// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/accessorSupport/decorators ../Widget ../support/widget".split(" "),function(h,k,c,d,g,e){return function(f){function a(){var b=null!==f&&f.apply(this,arguments)||this;b.enabled=!0;b.iconClass="";b.title="";return b}c.__extends(a,f);a.prototype.render=function(){var b,a,c=this.enabled?0:-1,d=(b={},b["esri-disabled"]=!this.enabled,b["esri-interactive"]=this.enabled,b);b=(a={},a[this.iconClass]=!!this.iconClass,a);return e.tsx("div",{bind:this,class:this.classes("esri-widget--button esri-widget",
d),onclick:this._triggerAction,onkeydown:this._triggerAction,role:"button",tabIndex:c,title:this.title},e.tsx("span",{"aria-hidden":"true",role:"presentation",class:this.classes("esri-icon",b)}),e.tsx("span",{class:"esri-icon-font-fallback-text"},this.title))};a.prototype._triggerAction=function(){this.action.call(this)};c.__decorate([d.property()],a.prototype,"action",void 0);c.__decorate([d.property(),e.renderable()],a.prototype,"enabled",void 0);c.__decorate([d.property(),e.renderable()],a.prototype,
"iconClass",void 0);c.__decorate([d.property(),e.renderable()],a.prototype,"title",void 0);c.__decorate([e.accessibleHandler()],a.prototype,"_triggerAction",null);return a=c.__decorate([d.subclass("esri.widgets.IconButton")],a)}(g)});
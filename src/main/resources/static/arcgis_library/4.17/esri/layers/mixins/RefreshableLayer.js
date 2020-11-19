// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/accessorSupport/decorators"],function(f,a,c,d){Object.defineProperty(a,"__esModule",{value:!0});a.RefreshableLayer=void 0;a.RefreshableLayer=function(a){return function(a){function b(){var e=null!==a&&a.apply(this,arguments)||this;e.refreshInterval=0;return e}c.__extends(b,a);b.prototype.refresh=function(){this.emit("refresh")};c.__decorate([d.property({type:Number,cast:function(a){return.1<=a?a:0>=a?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],
b.prototype,"refreshInterval",void 0);return b=c.__decorate([d.subclass("esri.layers.mixins.RefreshableLayer")],b)}(a)}});
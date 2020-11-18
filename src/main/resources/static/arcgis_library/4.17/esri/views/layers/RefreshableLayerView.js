// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/promiseUtils","../../core/accessorSupport/decorators"],function(g,a,b,f,e){Object.defineProperty(a,"__esModule",{value:!0});a.isRefreshableLayerView=a.RefreshableLayerView=void 0;a.RefreshableLayerView=function(a){return function(a){function c(){var d=null!==a&&a.apply(this,arguments)||this;d.refreshTimestamp=null;d.refreshDebounced=f.debounce(function(a,c){return b.__awaiter(d,void 0,void 0,function(){var d;return b.__generator(this,function(b){switch(b.label){case 0:return"number"===
typeof a?d=a:(d=Date.now(),c=a),this._set("refreshTimestamp",d),this.doRefresh?[4,this.doRefresh(c)]:[3,2];case 1:b.sent(),b.label=2;case 2:return[2]}})})},2E3);return d}b.__extends(c,a);c.prototype.refresh=function(a){void 0===a&&(a=Date.now());this._set("refreshTimestamp",a);this.doRefresh&&this.doRefresh()};b.__decorate([e.property()],c.prototype,"layer",void 0);b.__decorate([e.aliasOf("layer.refreshInterval")],c.prototype,"refreshInterval",void 0);b.__decorate([e.property({readOnly:!0})],c.prototype,
"refreshTimestamp",void 0);return c=b.__decorate([e.subclass("esri.layers.mixins.RefreshableLayerView")],c)}(a)};a.isRefreshableLayerView=function(a){return"refresh"in a}});
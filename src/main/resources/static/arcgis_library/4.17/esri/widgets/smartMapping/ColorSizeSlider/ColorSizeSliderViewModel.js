// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/maybe ../../../core/accessorSupport/decorators ../../../renderers/support/utils ../SmartMappingSliderViewModel".split(" "),function(p,q,c,h,e,l,n){return function(k){function b(a){return k.call(this,a)||this}c.__extends(b,k);Object.defineProperty(b.prototype,"stops",{set:function(a){if(a&&a.length){var d=a.map(function(a){return a.value}),b=this.max,m=this.min,f={};h.isSome(m)&&d.some(function(a){return a<m})&&(f.min=Math.min.apply(Math,d));h.isSome(b)&&
d.some(function(a){return a>b})&&(f.max=Math.max.apply(Math,d));this.set(c.__assign({},f))}this._set("stops",a)},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"values",{get:function(){var a=this.stops;if(!a||!a.length||2>a.length)return[];a=a.map(function(a){return a.value});return[a[0],a[a.length-1]]},enumerable:!1,configurable:!0});b.prototype.setValue=function(a,b){var d=this.min;b>this.max||b<d||(a=this._getColorStopChanges(a,b),this._updateColorStops(a),this.notifyChange("values"),
this.notifyChange("labels"))};b.prototype.getColorStopInfo=function(){var a=this.min,b=this.max,c=this.stops;return c&&c.length?c.map(function(c){return{color:c.color,offset:(b-c.value)/(b-a)}}):[]};b.prototype._getColorStopChanges=function(a,b){var c=this.max,d=this.min,f=this.stops,e=this.values,h=0===a?0:this.stops.length-1,d=0===a?d:e[a-1];a=a===e.length-1?c:e[a+1];var g=f.map(function(a){return a.value});g[h]=Math.max(Math.min(b,a),d);var k=g[g.length-1]-g[0],l=f.length-1;return g.map(function(a,
b){return{index:b,value:g[0]+b*k/l}})};b.prototype._updateColorStops=function(a){l.updateColorStops({changes:a,stops:this.stops,isDate:this.hasTimeData})};c.__decorate([e.property()],b.prototype,"stops",null);c.__decorate([e.property({dependsOn:["stops"],readOnly:!0})],b.prototype,"values",null);return b=c.__decorate([e.subclass("esri.widgets.smartMapping.ColorSizeSlider.ColorSizeSliderViewModel")],b)}(n)});
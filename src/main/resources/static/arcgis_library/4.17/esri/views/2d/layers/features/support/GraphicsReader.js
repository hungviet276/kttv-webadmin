// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../geometry/support/jsonUtils ../../../../../layers/graphics/featureConversionUtils ./FeatureSetReader ./FeatureSetReaderJSON".split(" "),function(d,c,e,h,k,l,m){Object.defineProperty(c,"__esModule",{value:!0});c.GraphicsReader=void 0;d=function(c){function b(a,b){return c.call(this,a,b,null)||this}e.__extends(b,c);b.from=function(a){var c=l.FeatureSetReader.createInstance(),d=[],f=0;for(a=a.filter(function(a){return!!a.geometry});f<a.length;f++){var g=a[f],
e=h.getJsonType(g.geometry);k.convertFromGraphics(d,[g],e,!1,!1,"uid")}return new b(c,d)};Object.defineProperty(b.prototype,"geometryType",{get:function(){var a=this._current;return a?a.geometryType:null},enumerable:!1,configurable:!0});b.prototype.readGraphic=function(){return this._current};b.prototype.getCursor=function(){return this.copy()};b.prototype.copy=function(){var a=new b(this.instance,this._features);this.copyInto(a);return a};return b}(m.FeatureSetReaderJSON);c.GraphicsReader=d});
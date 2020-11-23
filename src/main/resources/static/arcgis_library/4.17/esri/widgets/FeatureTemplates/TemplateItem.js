// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Graphic ../../core/Accessor ../../core/HandleOwner ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../symbols/support/symbolUtils @dojo/framework/shim/Promise".split(" "),function(f,r,c,k,l,m,n,p,d,q){return function(h){function b(a){a=h.call(this,a)||this;a.description=null;a.label=null;a.layer=null;a.template=null;a.thumbnail=null;return a}c.__extends(b,h);g=b;b.prototype.initialize=function(){var a=this;this.handles.add(p.init(this,
["layer.renderer","template"],function(){return a._set("thumbnail",null)}))};b.prototype.clone=function(){var a=this.thumbnail?this.thumbnail.cloneNode(!0):null,e=new g({layer:this.layer,template:this.template});e._set("thumbnail",a);return e};b.prototype.fetchThumbnail=function(){return c.__awaiter(this,void 0,void 0,function(){var a,e;return c.__generator(this,function(b){switch(b.label){case 0:return this._get("thumbnail")?[2,n.resolve()]:[4,this._getPreviewSymbol()];case 1:return a=b.sent(),[4,
q.renderPreviewHTML(a,{maxSize:36})];case 2:return e=b.sent(),this._set("thumbnail",e),[2]}})})};b.prototype._getPreviewSymbol=function(){return c.__awaiter(this,void 0,void 0,function(){var a,e,b,d,f,g;return c.__generator(this,function(c){switch(c.label){case 0:a=this;e=a.layer;b=a.template;d=a.layer.renderer;if(!d)return[3,2];f=new k({attributes:b.prototype.attributes});return[4,d.getSymbolAsync(f)];case 1:if(g=c.sent())return[2,g];c.label=2;case 2:return[2,this._getFallbackSymbolFromGeometry(e)]}})})};
b.prototype._getFallbackSymbolFromGeometry=function(a){a=a.geometryType;if("point"===a||"multipoint"===a)return(new Promise(function(a,b){f(["../../symbols/SimpleMarkerSymbol"],a,b)})).then(function(a){return new a});if("polyline"===a)return(new Promise(function(a,b){f(["../../symbols/SimpleLineSymbol"],a,b)})).then(function(a){return new a});if("polygon"===a||"mesh"===a||"multipatch"===a)return(new Promise(function(a,b){f(["../../symbols/SimpleFillSymbol"],a,b)})).then(function(a){return new a})};
var g;c.__decorate([d.property({aliasOf:"template.description"})],b.prototype,"description",void 0);c.__decorate([d.property({aliasOf:"template.name"})],b.prototype,"label",void 0);c.__decorate([d.property()],b.prototype,"layer",void 0);c.__decorate([d.property()],b.prototype,"template",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"thumbnail",void 0);return b=g=c.__decorate([d.subclass("esri.widgets.FeatureTemplates.TemplateItem")],b)}(m.HandleOwnerMixin(l))});
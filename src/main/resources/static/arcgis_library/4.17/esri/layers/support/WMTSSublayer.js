// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Collection ../../core/JSONSupport ../../core/accessorSupport/decorators ../../geometry/Extent ./TileMatrixSet ./WMTSStyle".split(" "),function(n,p,c,f,h,d,k,l,m){return function(g){function b(a){a=g.call(this,a)||this;a.fullExtent=null;a.imageFormats=null;a.id=null;a.layer=null;a.styles=null;a.tileMatrixSetId=null;a.tileMatrixSets=null;return a}c.__extends(b,g);e=b;Object.defineProperty(b.prototype,"description",{get:function(){return this._get("description")},
set:function(a){this._set("description",a)},enumerable:!1,configurable:!0});b.prototype.readFullExtent=function(a,b){return(a=b.fullExtent)?k.fromJSON(a):null};Object.defineProperty(b.prototype,"imageFormat",{get:function(){var a=this._get("imageFormat");a||(a=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:"");return a},set:function(a){var b=this.imageFormats;if(a&&(-1<a.indexOf("image/")||b&&-1===b.indexOf(a))&&(-1===a.indexOf("image/")&&(a="image/"+a),b&&-1===b.indexOf(a))){console.error("The layer doesn't support the format of "+
a);return}this._set("imageFormat",a)},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"styleId",{get:function(){var a=this._get("styleId");a||(a=this.styles&&this.styles.length?this.styles.getItemAt(0).id:"");return a},set:function(a){this._set("styleId",a)},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"title",{get:function(){return this._get("title")},set:function(a){this._set("title",a)},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"tileMatrixSet",
{get:function(){var a=this;return this.tileMatrixSets?this.tileMatrixSets.find(function(b){return b.id===a.tileMatrixSetId}):null},enumerable:!1,configurable:!0});b.prototype.clone=function(){var a=new e;this.hasOwnProperty("description")&&(a.description=this.description);this.hasOwnProperty("imageFormats")&&(a.imageFormats=this.imageFormats&&this.imageFormats.slice());this.hasOwnProperty("imageFormat")&&(a.imageFormat=this.imageFormat);this.hasOwnProperty("fullExtent")&&(a.fullExtent=this.fullExtent&&
this.fullExtent.clone());this.hasOwnProperty("id")&&(a.id=this.id);this.hasOwnProperty("layer")&&(a.layer=this.layer);this.hasOwnProperty("styleId")&&(a.styleId=this.styleId);this.hasOwnProperty("styles")&&(a.styles=this.styles&&this.styles.clone());this.hasOwnProperty("tileMatrixSetId")&&(a.tileMatrixSetId=this.tileMatrixSetId);this.hasOwnProperty("tileMatrixSets")&&(a.tileMatrixSets=this.tileMatrixSets.clone());this.hasOwnProperty("title")&&(a.title=this.title);return a};var e;c.__decorate([d.property()],
b.prototype,"description",null);c.__decorate([d.property()],b.prototype,"fullExtent",void 0);c.__decorate([d.reader("fullExtent",["fullExtent"])],b.prototype,"readFullExtent",null);c.__decorate([d.property({dependsOn:["imageFormats"]})],b.prototype,"imageFormat",null);c.__decorate([d.property({json:{read:{source:"formats"}}})],b.prototype,"imageFormats",void 0);c.__decorate([d.property()],b.prototype,"id",void 0);c.__decorate([d.property()],b.prototype,"layer",void 0);c.__decorate([d.property({dependsOn:["styles"]})],
b.prototype,"styleId",null);c.__decorate([d.property({type:f.ofType(m),json:{read:{source:"styles"}}})],b.prototype,"styles",void 0);c.__decorate([d.property({value:null,json:{write:{ignoreOrigin:!0}}})],b.prototype,"title",null);c.__decorate([d.property()],b.prototype,"tileMatrixSetId",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["tileMatrixSetId"]})],b.prototype,"tileMatrixSet",null);c.__decorate([d.property({type:f.ofType(l),json:{read:{source:"tileMatrixSets"}}})],b.prototype,"tileMatrixSets",
void 0);return b=e=c.__decorate([d.subclass("esri.layers.support.WMTSSublayer")],b)}(h.JSONSupport)});
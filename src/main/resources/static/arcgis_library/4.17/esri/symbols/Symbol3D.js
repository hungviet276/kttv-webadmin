// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Collection ../core/collectionUtils ../core/Logger ../core/urlUtils ../core/Warning ../core/accessorSupport/decorators ../portal/Portal ../support/persistableUrlUtils ./ExtrudeSymbol3DLayer ./FillSymbol3DLayer ./IconSymbol3DLayer ./LineSymbol3DLayer ./ObjectSymbol3DLayer ./PathSymbol3DLayer ./Symbol ./Symbol3DLayer ./TextSymbol3DLayer ./WaterSymbol3DLayer ./support/StyleOrigin ./support/Thumbnail".split(" "),function(G,H,c,h,k,r,f,l,e,t,m,u,v,w,x,y,z,A,n,B,C,g,
D){var p={icon:w,object:y,line:x,path:z,fill:v,extrude:u,text:B,water:C},E=h.ofType({base:n,key:"type",typeMap:p,errorContext:"symbol-layer"}),F=r.getLogger("esri.symbols.Symbol3D");return function(q){function b(a){a=q.call(this,a)||this;a.styleOrigin=null;a.thumbnail=null;a.type=null;var b=a.__accessor__&&a.__accessor__.metadatas&&a.__accessor__.metadatas.symbolLayers;a._set("symbolLayers",new (b&&b.type||h));return a}c.__extends(b,q);Object.defineProperty(b.prototype,"color",{get:function(){return null},
set:function(a){F.error("Symbol3D does not support colors on the symbol level. Colors may be set on individual symbol layer materials instead.")},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"symbolLayers",{set:function(a){k.referenceSetter(a,this._get("symbolLayers"))},enumerable:!1,configurable:!0});b.prototype.readStyleOrigin=function(a,b,d){if(a.styleUrl&&a.name)return b=m.fromJSON(a.styleUrl,d),new g({styleUrl:b,name:a.name});if(a.styleName&&a.name)return new g({portal:d&&
d.portal||t.getDefault(),styleName:a.styleName,name:a.name});d&&d.messages&&d.messages.push(new l("symbol3d:incomplete-style-origin","Style origin requires either a 'styleUrl' or 'styleName' and a 'name' property",{context:d,definition:a}))};b.prototype.writeStyleOrigin=function(a,b,d,c){a.styleUrl&&a.name?(d=m.toJSON(a.styleUrl,c),f.isAbsolute(d)&&(d=f.normalize(d)),b.styleOrigin={styleUrl:d,name:a.name}):a.styleName&&a.name&&(a.portal&&c&&c.portal&&!f.hasSamePortal(a.portal.restUrl,c.portal.restUrl)?
c&&c.messages&&c.messages.push(new l("symbol:cross-portal","The symbol style origin cannot be persisted because it refers to an item on a different portal than the one being saved to.",{symbol:this})):b.styleOrigin={styleName:a.styleName,name:a.name})};b.prototype.normalizeCtorArgs=function(a){return a instanceof n||a&&p[a.type]?{symbolLayers:[a]}:Array.isArray(a)?{symbolLayers:a}:a};c.__decorate([e.property({json:{read:!1,write:!1}})],b.prototype,"color",null);c.__decorate([e.property({type:E,nonNullable:!0,
json:{write:!0}}),e.cast(k.castForReferenceSetter)],b.prototype,"symbolLayers",null);c.__decorate([e.property({type:g})],b.prototype,"styleOrigin",void 0);c.__decorate([e.reader("styleOrigin")],b.prototype,"readStyleOrigin",null);c.__decorate([e.writer("styleOrigin",{"styleOrigin.styleUrl":{type:String},"styleOrigin.styleName":{type:String},"styleOrigin.name":{type:String}})],b.prototype,"writeStyleOrigin",null);c.__decorate([e.property({type:D.default,json:{read:!1}})],b.prototype,"thumbnail",void 0);
c.__decorate([e.property({type:["point-3d","line-3d","polygon-3d","mesh-3d","label-3d"],readOnly:!0})],b.prototype,"type",void 0);return b=c.__decorate([e.subclass("esri.symbols.Symbol3D")],b)}(A)});
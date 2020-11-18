// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/maybe ../core/accessorSupport/decorators ./Symbol3DLayer ./support/Symbol3DMaterial".split(" "),function(k,l,b,f,c,g,h){return function(e){function a(a){a=e.call(this,a)||this;a.material=null;a.castShadows=!0;a.type="path";a.profile="circle";a.join="miter";a.cap="butt";a.width=void 0;a.height=void 0;a.anchor="center";a.profileRotation="all";return a}b.__extends(a,e);d=a;Object.defineProperty(a.prototype,"size",{get:function(){if(this.width&&this.height){if(this.width===
this.height)return this.width}else{if(this.width)return this.width;if(this.height)return this.height}},set:function(a){this.height=this.width=a},enumerable:!1,configurable:!0});a.prototype.readSize=function(a,b){return b.height||b.width?a:b.size};a.prototype.clone=function(){return new d({enabled:this.enabled,material:f.isSome(this.material)?this.material.clone():null,castShadows:this.castShadows,size:this.size,profile:this.profile,join:this.join,cap:this.cap,width:this.width,height:this.height,profileRotation:this.profileRotation,
anchor:this.anchor})};var d;b.__decorate([c.property({type:h.default,json:{write:!0}})],a.prototype,"material",void 0);b.__decorate([c.property({type:Boolean,nonNullable:!0,json:{write:!0,default:!0}})],a.prototype,"castShadows",void 0);b.__decorate([c.enumeration({Path:"path"},{readOnly:!0})],a.prototype,"type",void 0);b.__decorate([c.property({type:Number})],a.prototype,"size",null);b.__decorate([c.reader("size")],a.prototype,"readSize",null);b.__decorate([c.property({type:["circle","quad"],json:{write:!0,
default:"circle"}})],a.prototype,"profile",void 0);b.__decorate([c.property({type:["miter","bevel","round"],json:{write:!0,default:"miter"}})],a.prototype,"join",void 0);b.__decorate([c.property({type:["none","butt","square","round"],json:{write:!0,default:"butt"}})],a.prototype,"cap",void 0);b.__decorate([c.property({type:Number,json:{write:{enabled:!0,target:{width:{type:Number},size:{type:Number}}}}})],a.prototype,"width",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,
"height",void 0);b.__decorate([c.property({type:["center","bottom","top"],json:{write:!0,default:"center"}})],a.prototype,"anchor",void 0);b.__decorate([c.property({type:["heading","all"],json:{write:!0,default:"all"}})],a.prototype,"profileRotation",void 0);return a=d=b.__decorate([c.subclass("esri.symbols.PathSymbol3DLayer")],a)}(g)});
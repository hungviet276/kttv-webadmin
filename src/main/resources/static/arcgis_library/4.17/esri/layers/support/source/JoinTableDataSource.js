// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/jsonMap ../../../core/JSONSupport ../../../core/accessorSupport/decorators ../../../core/accessorSupport/ensureType ../../../core/accessorSupport/extensions/serializableProperty/reader ./DataLayerSource ./MapLayerSource".split(" "),function(h,d,c,m,n,b,k,p,q,r){function l(){e||(e=p.createTypeReader({types:f()}));return e}function f(){g||(g={key:"type",base:null,typeMap:{"data-layer":q.DataLayerSource,"map-layer":r.MapLayerSource}});return g}Object.defineProperty(d,
"__esModule",{value:!0});d.JoinTableDataSource=void 0;var t=m.strict()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});h=function(d){function a(a){a=d.call(this,a)||this;a.type="join-table";return a}c.__extends(a,d);e=a;a.prototype.readLeftTableSource=function(a,c,b){return l()(a,c,b)};a.prototype.castLeftTableSource=function(a){return k.ensureOneOfType(f(),a)};a.prototype.readRightTableSource=function(a,c,b){return l()(a,c,b)};a.prototype.castRightTableSource=function(a){return k.ensureOneOfType(f(),
a)};a.prototype.clone=function(){var a,c,b=this.leftTableSource,d=this.rightTableSource,f=this.joinType,b={leftTableKey:this.leftTableKey,rightTableKey:this.rightTableKey,leftTableSource:null!==(a=null===b||void 0===b?void 0:b.clone())&&void 0!==a?a:void 0,rightTableSource:null!==(c=null===d||void 0===d?void 0:d.clone())&&void 0!==c?c:void 0,joinType:f};return new e(b)};var e;c.__decorate([b.enumeration({joinTable:"join-table"})],a.prototype,"type",void 0);c.__decorate([b.property({type:String,json:{write:!0}})],
a.prototype,"leftTableKey",void 0);c.__decorate([b.property({type:String,json:{write:!0}})],a.prototype,"rightTableKey",void 0);c.__decorate([b.property({json:{write:!0}})],a.prototype,"leftTableSource",void 0);c.__decorate([b.reader("leftTableSource")],a.prototype,"readLeftTableSource",null);c.__decorate([b.cast("leftTableSource")],a.prototype,"castLeftTableSource",null);c.__decorate([b.property({json:{write:!0}})],a.prototype,"rightTableSource",void 0);c.__decorate([b.reader("rightTableSource")],
a.prototype,"readRightTableSource",null);c.__decorate([b.cast("rightTableSource")],a.prototype,"castRightTableSource",null);c.__decorate([b.enumeration(t)],a.prototype,"joinType",void 0);return a=e=c.__decorate([b.subclass("esri.layers.support.source.JoinTableDataSource")],a)}(n.JSONSupport);d.JoinTableDataSource=h;var e=null,g=null});
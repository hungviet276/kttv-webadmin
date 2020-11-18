// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../geometry ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../views/3d/support/mathUtils".split(" "),function(m,n,c,h,k,l,a,e,f){return function(g){function b(a){a=g.call(this,a)||this;a.type="plane";a.position=null;a.heading=0;a.tilt=0;a.width=10;a.height=10;return a}c.__extends(b,g);d=b;b.prototype.clone=function(){return new d({position:l.clone(this.position),heading:this.heading,tilt:this.tilt,
width:this.width,height:this.height})};var d;c.__decorate([a.property({readOnly:!0,json:{read:!1,write:!0}})],b.prototype,"type",void 0);c.__decorate([a.property({type:h.Point}),a.persistable()],b.prototype,"position",void 0);c.__decorate([a.property({type:Number,nonNullable:!0,range:{min:0,max:360}}),a.persistable(),a.cast(function(a){return f.cyclicalDeg.normalize(e.ensureNumber(a),0,!0)})],b.prototype,"heading",void 0);c.__decorate([a.property({type:Number,nonNullable:!0,range:{min:0,max:360}}),
a.persistable(),a.cast(function(a){return f.cyclicalDeg.normalize(e.ensureNumber(a),0,!0)})],b.prototype,"tilt",void 0);c.__decorate([a.property({type:Number,nonNullable:!0}),a.persistable()],b.prototype,"width",void 0);c.__decorate([a.property({type:Number,nonNullable:!0}),a.persistable()],b.prototype,"height",void 0);return b=d=c.__decorate([a.subclass("esri.widgets.Slice.SlicePlane")],b)}(k.JSONSupport)});
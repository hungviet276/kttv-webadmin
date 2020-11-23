// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/accessorSupport/decorators ./OutStatistic".split(" "),function(h,k,b,f,c,g){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.name=null;return a}b.__extends(a,d);e=a;a.prototype.clone=function(){return new e({name:this.name,outStatistic:this.outStatistic.clone()})};var e;b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({type:g,json:{write:!0}})],
a.prototype,"outStatistic",void 0);return a=e=b.__decorate([c.subclass("esri.layers.support.AggregateField")],a)}(f.JSONSupport)});
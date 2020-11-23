// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/lang ../../core/accessorSupport/decorators ./AlgorithmicColorRamp ./ColorRamp".split(" "),function(k,l,b,f,c,g,h){return function(e){function a(a){a=e.call(this,a)||this;a.colorRamps=null;a.type="multipart";return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d({colorRamps:f.clone(this.colorRamps)})};var d;b.__decorate([c.property({type:[g],json:{write:!0}})],a.prototype,"colorRamps",void 0);b.__decorate([c.property({type:["multipart"]})],
a.prototype,"type",void 0);return a=d=b.__decorate([c.subclass("esri.tasks.support.MultipartColorRamp")],a)}(h)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Collection ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ./BuildingFilterAuthoringInfoType".split(" "),function(m,n,b,f,g,h,e,k){var l=f.ofType(k);return function(c){function a(){return null!==c&&c.apply(this,arguments)||this}b.__extends(a,c);d=a;a.prototype.clone=function(){return new d({filterTypes:h.clone(this.filterTypes)})};var d;b.__decorate([e.property({type:l,json:{write:!0}})],a.prototype,"filterTypes",void 0);return a=
d=b.__decorate([e.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],a)}(g.JSONSupport)});
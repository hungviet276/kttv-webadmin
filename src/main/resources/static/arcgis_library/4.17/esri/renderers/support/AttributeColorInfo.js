// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Color ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType".split(" "),function(m,n,b,f,g,h,c,k){var l=h.getLogger("esri.renderers.support.AttributeColorInfo");return function(e){function a(a){a=e.call(this,a)||this;a.color=null;a.field=null;a.label=null;a.valueExpression=null;a.valueExpressionTitle=null;return a}b.__extends(a,e);d=a;a.prototype.castField=function(a){return null==a?a:"function"===typeof a?
(l.error(".field: field must be a string value"),null):k.ensureString(a)};a.prototype.getAttributeHash=function(){return this.field+"-"+this.valueExpression};a.prototype.clone=function(){return new d({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})};var d;b.__decorate([c.property({type:f,json:{type:[Number],write:!0}})],a.prototype,"color",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],
a.prototype,"field",void 0);b.__decorate([c.cast("field")],a.prototype,"castField",null);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"valueExpression",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"valueExpressionTitle",void 0);return a=d=b.__decorate([c.subclass("esri.renderers.support.AttributeColorInfo")],a)}(g.JSONSupport)});
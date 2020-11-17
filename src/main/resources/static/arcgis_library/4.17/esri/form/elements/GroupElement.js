// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/writer ./Element ../support/elements".split(" "),function(c,n,b,h,d,k,l,m,e){c=function(c){function a(a){a=c.call(this,a)||this;a.elements=null;a.initialState="expanded";a.type="group";return a}b.__extends(a,c);f=a;a.prototype.castElements=function(a){return e.ensureType(a,g,!1)};a.prototype.readElements=function(a,b){return e.fromJSON(b.formElements,
g,!1)};a.prototype.writeElements=function(a,b){b.formElements=e.toJSON(a,g,!1)};a.prototype.clone=function(){return new f({description:this.description,elements:h.clone(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})};var f;b.__decorate([d.property({json:{write:!0}})],a.prototype,"elements",void 0);b.__decorate([k.cast("elements")],a.prototype,"castElements",null);b.__decorate([d.reader("elements",["formElements"])],a.prototype,"readElements",
null);b.__decorate([l.writer("elements")],a.prototype,"writeElements",null);b.__decorate([d.property({type:["collapsed","expanded"],json:{default:"expanded",write:!0}})],a.prototype,"initialState",void 0);b.__decorate([d.property({type:String,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=f=b.__decorate([d.subclass("esri.form.elements.GroupElement")],a)}(m.Element);var g=e.buildTypeMaps(c);return c});
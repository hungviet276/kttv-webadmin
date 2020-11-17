// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/jsonMap ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ./support/FieldInfoFormat".split(" "),function(m,n,b,g,h,k,c,l){var d=new g.default({richtext:"rich-text",textarea:"text-area",textbox:"text-box"});return function(f){function a(a){a=f.call(this,a)||this;a.fieldName=null;a.format=null;a.isEditable=!1;a.label=null;a.stringFieldOption="text-box";a.statisticType=null;a.tooltip=null;a.visible=!0;return a}b.__extends(a,f);e=a;a.prototype.writeStringFieldOption=
function(a,b){b.stringFieldOption=d.toJSON(a)};a.prototype.readStringFieldOption=function(a){if(a)return d.fromJSON(a)};a.prototype.clone=function(){return new e({fieldName:this.fieldName,format:this.format?k.clone(this.format):null,isEditable:this.isEditable,label:this.label,stringFieldOption:this.stringFieldOption,statisticType:this.statisticType,tooltip:this.tooltip,visible:this.visible})};var e;b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"fieldName",void 0);b.__decorate([c.property({type:l,
json:{write:!0}})],a.prototype,"format",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0,default:!1}})],a.prototype,"isEditable",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);b.__decorate([c.property({type:d.apiValues,json:{write:!0,default:"text-box",type:d.jsonValues}})],a.prototype,"stringFieldOption",void 0);b.__decorate([c.writer("stringFieldOption")],a.prototype,"writeStringFieldOption",null);b.__decorate([c.reader("stringFieldOption")],
a.prototype,"readStringFieldOption",null);b.__decorate([c.property({type:"count sum min max avg stddev var".split(" "),json:{write:!0}})],a.prototype,"statisticType",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"tooltip",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"visible",void 0);return a=e=b.__decorate([c.subclass("esri.popup.FieldInfo")],a)}(h.JSONSupport)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../intl ../core/domUtils ../core/accessorSupport/decorators ../intl/moment ../layers/support/domains ../layers/support/fieldUtils ./Widget ./FeatureForm/FeatureFormViewModel ./support/widget".split(" "),function(A,B,e,r,u,g,v,w,x,y,z,d){return function(n){function c(a,b){a=n.call(this,a,b)||this;a._fieldFocusNeeded=!1;a._activeDateEdit=null;a._activeInputName=null;a._moment=null;a.description=null;a.feature=null;a.fieldConfig=null;a.formTemplate=null;a.groupDisplay="all";
a.label=void 0;a.layer=null;a.messages=null;a.strict=null;a.title=null;a.viewModel=new z;a._handleFormKeyDown=a._handleFormKeyDown.bind(a);a._handleInputBlur=a._handleInputBlur.bind(a);a._handleInputFocus=a._handleInputFocus.bind(a);a._handleNumberInputMouseDown=a._handleNumberInputMouseDown.bind(a);a._handleInputKeyDown=a._handleInputKeyDown.bind(a);a._handleOptionChange=a._handleOptionChange.bind(a);a._handleGroupClick=a._handleGroupClick.bind(a);a._handleSubmit=a._handleSubmit.bind(a);a._afterScrollerCreateOrUpdate=
a._afterScrollerCreateOrUpdate.bind(a);return a}e.__extends(c,n);c.prototype.loadLocale=function(){return e.__awaiter(this,void 0,void 0,function(){var a;return e.__generator(this,function(b){switch(b.label){case 0:return a=this,[4,v.loadMoment()];case 1:return a._moment=b.sent(),[2]}})})};c.prototype.initialize=function(){var a=this;this.own(this.watch("feature",function(){var b=a._getFocusableInput("forward");a._activeInputName=b&&b.name;a._fieldFocusNeeded=!0}),this.on("submit",function(b){0<b.invalid.length&&
(a._activeInputName=b.invalid[0],a._fieldFocusNeeded=!0,a.scheduleRender())}))};c.prototype.getValues=function(){return null};c.prototype.submit=function(){return null};c.prototype.render=function(){var a=this.viewModel.state;return d.tsx("div",{class:this.classes("esri-feature-form","esri-widget","esri-widget--panel")},"ready"===a?this.renderForm():null)};c.prototype.renderForm=function(){var a=this.title?d.tsx("h1",{class:"esri-widget__heading",key:"title"},this.title):null,b=this.description?d.tsx("h2",
{class:"esri-widget__heading",key:"description"},this.description):null;return d.tsx("form",{class:"esri-feature-form__form",novalidate:!0,onsubmit:this._handleSubmit,onkeydown:this._handleFormKeyDown},a,b,this.renderFields())};c.prototype.renderFields=function(){var a=this;return this.viewModel.inputFields.map(function(b,f){return b&&b.inputFields?a.renderGroup(b,f):a.renderLabeledField(b)})};c.prototype.renderGroup=function(a,b){var f=this,m=a.description,c=a.label,e=a.inputFields,k=a.state,h=this.viewModel.findField(this._activeInputName),
h=!(!h||h.group!==a),g=this.id+"_group_"+b,q=this.id+"_group-label_"+b,n=this.id+"_group-description_"+b,r=m?d.tsx("p",{class:this.classes("esri-feature-form__group-description","esri-feature-form__description-text"),id:n},m):null,t="sequential"===this.groupDisplay,k=t?h:"expanded"===k;return d.tsx("fieldset",{"aria-expanded":k.toString(),"aria-labelledby":q,"aria-describedby":m?n:"",class:this.classes("esri-feature-form__group",t?"esri-feature-form__group--sequential":null,k?null:"esri-feature-form__group--collapsed",
h?"esri-feature-form__group--active":null),"data-group":a,id:g,key:b,onclick:this._handleGroupClick},d.tsx("div",{class:"esri-feature-form__group-header"},d.tsx("div",{class:"esri-feature-form__group-label",id:q},c),r),e.map(function(a){return f.renderLabeledField(a)}))};c.prototype._getFocusableInput=function(a,b){var f=this.viewModel._allInputFields,f="forward"===a?f:f.slice().reverse();if(b)if(b&&b.inputFields)a=f.indexOf(b.inputFields[0]);else{var m=void 0;this._isFieldInClosedCollapsibleGroup(b)?
(b=b.group.inputFields,m="forward"===a?b[b.length-1]:b[0]):m=b;a=f.indexOf(m)+1}else a=0;for(;a<f.length;a++)if(b=f[a],b.visible&&b.editable)return b;return null};c.prototype.renderLabeledField=function(a){return d.tsx("label",{key:a.layer.id+"-"+a.name,class:"esri-feature-form__label"},[a.label,"unsupported"!==a.type?this.renderInputField(a):this.renderUnsupportedField(a),this.renderAuxiliaryText(a)])};c.prototype.renderInputField=function(a){var b=a.domain,f=a.editable,m=a.type,c=this.viewModel.getValue(a.name),
f=!f,l=this.getCommonInputProps(a);return b&&"coded-value"===b.type&&!f?this.renderSelectInputField(c,b.codedValues.map(function(a){return{value:a.code,name:a.name}}),l):"text"===m&&"text-area"===a.editorType||"rich-text"===a.editorType?d.tsx("textarea",e.__assign({},l)):"datetime-picker"===a.editorType||"date"===m?this.renderDateInputField(c,l):d.tsx("input",e.__assign({type:"text"===m?"text":"number"},l))};c.prototype.renderDateInputField=function(a,b){var f=this._formatDate(0),c=f.date,f=f.time,
p=this.id+"-"+b.key,l=p+"-date",p=p+"-time",k=b["data-field"],h=k.includeTime,g=this._formatDate(a);a=g.date;g=g.time;return d.tsx("div",{key:b.key+"-date",class:"esri-feature-form__date-input-container"},d.tsx("div",{class:this.classes("esri-feature-form__date-input-part",h?null:"esri-feature-form__date-input-part--lone")},d.tsx("input",e.__assign({"aria-label":k.label,"aria-describedby":l,type:"text"},b,{"data-date-part":"date",class:this.classes(b.class,"esri-feature-form__input--date"),value:a})),
d.tsx("div",{class:"esri-feature-form__date-format-hint",id:l},c)),h?d.tsx("div",{class:"esri-feature-form__date-input-part",key:"time-input"},d.tsx("input",e.__assign({"aria-describedby":p,"aria-label":k.label,type:"text"},b,{"data-date-part":"time",class:this.classes(b.class,"esri-feature-form__input--time"),value:g})),d.tsx("div",{class:"esri-feature-form__date-format-hint",id:p},f)):null)};c.prototype.renderUnsupportedField=function(a){a=this.viewModel.getValue(a.name);return d.tsx("input",{class:this.classes("esri-input",
"esri-feature-form__input","esri-feature-form__input--disabled"),disabled:!0,type:"text",value:""+a})};c.prototype.renderSelectInputField=function(a,b,f){var c=!1;b=b.map(function(b){b.value===a&&(c=!0);return d.tsx("option",{value:""+b.value,key:b.name},b.name)});null==a||""===a||c||b.unshift(d.tsx("option",{value:""+a,key:"outlier-option"},a));f["data-field"].required||b.unshift(d.tsx("option",{value:"",key:"empty-option"},this.messages.empty));return d.tsx("select",e.__assign({},f,{class:this.classes(f.class,
"esri-select"),onchange:this._handleOptionChange}),b)};c.prototype.renderAuxiliaryText=function(a){if(!a.valid)return d.tsx("div",{key:"error-message"},d.tsx("span",{class:this.classes("esri-feature-form__input-icon--invalid","esri-icon-notice-triangle")}),d.tsx("div",{class:"esri-feature-form__field-error-message"},a.errorMessage));if(a.valid&&a.description)return d.tsx("div",{key:"description",class:"esri-feature-form__description-text"},a.description)};c.prototype.getCommonInputProps=function(a){var b=
a.editable,f=a.name,c=a.required,d=a.maxLength,l=a.minLength,g=a.hint,h=a.type,n=a.valid,q=this.viewModel.getValue(f),b=!b;return e.__assign(e.__assign({afterCreate:this._afterScrollerCreateOrUpdate,afterUpdate:this._afterScrollerCreateOrUpdate,"aria-invalid":n?"false":"true","class":this.classes("esri-input","esri-feature-form__input",b?"esri-feature-form__input--disabled":null,n?null:"esri-feature-form__input--invalid"),key:f,minlength:-1<l?""+l:"",maxlength:-1<d?""+d:""},this._getNumberFieldConstraints(a)),
{disabled:b,value:null==q?"":""+q,"data-field":a,onfocus:this._handleInputFocus,onblur:this._handleInputBlur,onkeydown:this._handleInputKeyDown,onmousedown:"number"===h?this._handleNumberInputMouseDown:null,required:c,title:g})};c.prototype._isFieldInClosedCollapsibleGroup=function(a){var b;return"all"===this.groupDisplay&&!(a&&a.inputFields)&&"collapsed"===(null===(b=null===a||void 0===a?void 0:a.group)||void 0===b?void 0:b.state)};c.prototype._handleNumberInputMouseDown=function(a){a=a.target;a.disabled||
a.focus();this.scheduleRender()};c.prototype._getNumberFieldConstraints=function(a){return(a=w.getDomainRange(a.domain)||x.getFieldRange(a.field))&&a.max!==Number.MAX_VALUE&&a.min!==Number.MIN_VALUE?a:{min:null,max:null}};c.prototype._afterScrollerCreateOrUpdate=function(a){var b=a["data-field"],f=this.viewModel.findField(this._activeInputName);b.editable&&this._fieldFocusNeeded&&f===b&&(this._fieldFocusNeeded=!1,a.focus())};c.prototype._handleInputFocus=function(a){this._activeInputName=a.target["data-field"].name};
c.prototype._handleInputBlur=function(a){var b=a.target,f=b["data-field"],c=(a=a.relatedTarget)&&a["data-field"];this._syncDateEditsBeforeValueCommit(b);c&&"date"===f.type&&"date"===c.type&&f.field===c.field?""!==b.value&&""===a.value&&(b=a.getAttribute("data-date-part"),a.value=this._formatDate(Date.now())[b]):(this._commitValue(b),this.scheduleRender())};c.prototype._commitValue=function(a){var b=a["data-field"];if(this._activeDateEdit){var f=this._activeDateEdit,c=f.date,f=f.time,d=this._getDateEditValue(b,
"date"),b=this._getDateEditValue(b,"time"),e=""===d||""===b;c&&(c.input.value=e?"":d);f&&(f.input.value=e?"":b);this._activeDateEdit=null;if(c&&f){this._updateDateFieldValue(c.input,f.input);return}}this._updateFieldValue(a)};c.prototype._getDateEditValue=function(a,b){var c=this._activeDateEdit[b];if(c)return""===c.value?"":(c=this._parseDate(c.value,b))?this._formatDate(c.getTime())[b]:this._formatDate(a.value)[b]};c.prototype._handleInputKeyDown=function(a){var b=a.key,c=a.altKey,d=a.ctrlKey,g=
a.metaKey,l=a.shiftKey,k=a.target,h=k["data-field"];"Tab"===b?(b=l?"backward":"forward",c=k.getAttribute("data-date-part"),this._syncDateEditsBeforeValueCommit(k),"backward"===b&&"time"===c||"forward"===b&&"date"===c&&h.includeTime||(this._commitValue(k),c=this.viewModel.findField(h.name),this._activeInputName=(b=this._getFocusableInput(b,c))&&b.name,b?(a.preventDefault(),this._fieldFocusNeeded=!0):this.renderNow())):"Enter"!==b?(h=h.field.type,k="single"===h||"double"===h,"integer"!==h&&"small-integer"!==
h&&!k||c||d||g||1!==b.length||(c=Number(b),d=["-","+"],g=["e","."],d=k?e.__spreadArrays(d,g):d,isNaN(c)&&-1===d.indexOf(b)&&a.preventDefault())):this._isFieldInClosedCollapsibleGroup(h)?h.group.state="expanded":(this._updateFieldValue(a.target),this.scheduleRender())};c.prototype._syncDateEditsBeforeValueCommit=function(a){var b;if("date"===a["data-field"].type){var c=a.getAttribute("data-date-part");this._activeDateEdit=e.__assign(e.__assign({},this._activeDateEdit),(b={},b[c]={value:a.value,input:a},
b))}};c.prototype._updateFieldValue=function(a){this.viewModel.setValue(a["data-field"].name,this._parseValue(a))};c.prototype._updateDateFieldValue=function(a,b){this.viewModel.setValue(a["data-field"].name,this._parseDateTimeValue(a,b))};c.prototype._parseValue=function(a){var b=a["data-field"],c=a.value,d=b.type;if("number"===d)return parseFloat(c);if("date"===d){if(!c)return null;d=Number(c);if(!isNaN(d))return d;a=a.getAttribute("data-date-part");d=this._parseDate(c,a);if(!d)return null;var c=
this._moment,d=c(d),e=b.domain,g=c(),k=g;e&&"range"===e.type&&(e=c(e.maxValue),g.isAfter(e)||(k=e));b=this.viewModel.getValue(b.name);b=c(null!=b?b:k);"date"===a?(d.hour(b.hour()),d.minutes(b.minutes()),d.seconds(b.seconds())):(d.date(b.date()),d.month(b.month()),d.year(b.year()));return d.valueOf()}return c};c.prototype._parseDateTimeValue=function(a,b){a=a.value;b=b.value;if(!a||!b)return null;a=this._parseDate(a,"date");b=this._parseDate(b,"time");if(!a||!b)return null;a=this._moment(a);b=this._moment(b);
a.hour(b.hour());a.minutes(b.minutes());a.seconds(b.seconds());return a.valueOf()};c.prototype._handleOptionChange=function(a){this._updateFieldValue(a.target);this.scheduleRender()};c.prototype._handleGroupClick=function(a){var b,c=a.currentTarget["data-group"],d="expanded"===c.state,e="sequential"===this.groupDisplay;if(!d||u.closest(a.target,".esri-feature-form__group-header")){this._activeInputName=null===(b=this._getFocusableInput("forward",c))||void 0===b?void 0:b.name;if(e){if(d)return;this.viewModel.inputFields.forEach(function(a){a&&
a.inputFields&&a!==c&&(a.state="collapsed")})}c.state=d?"collapsed":"expanded";this._fieldFocusNeeded=!0;this.scheduleRender()}};c.prototype._handleSubmit=function(a){a.preventDefault()};c.prototype._handleFormKeyDown=function(a){"Enter"===a.key&&this.viewModel.submit()};c.prototype._formatDate=function(a){if(null==a)return{date:"",time:""};a=this._moment(a);return{date:a.format("L"),time:a.format("LTS")}};c.prototype._parseDate=function(a,b){if(null==a||""===a)return null;a=this._moment(a,"date"===
b?"L":"LTS",r.getLocale(),!1);return a.isValid()?a.toDate():null};e.__decorate([g.aliasOf("viewModel.description"),d.renderable()],c.prototype,"description",void 0);e.__decorate([g.aliasOf("viewModel.feature")],c.prototype,"feature",void 0);e.__decorate([g.aliasOf("viewModel.fieldConfig")],c.prototype,"fieldConfig",void 0);e.__decorate([g.aliasOf("viewModel.formTemplate")],c.prototype,"formTemplate",void 0);e.__decorate([g.property(),d.renderable()],c.prototype,"groupDisplay",void 0);e.__decorate([g.property({aliasOf:{source:"messages.widgetLabel",
overridable:!0}})],c.prototype,"label",void 0);e.__decorate([g.aliasOf("viewModel.layer")],c.prototype,"layer",void 0);e.__decorate([g.property(),d.renderable(),d.messageBundle("esri/widgets/FeatureForm/t9n/FeatureForm")],c.prototype,"messages",void 0);e.__decorate([g.aliasOf("viewModel.strict")],c.prototype,"strict",void 0);e.__decorate([g.aliasOf("viewModel.title"),d.renderable()],c.prototype,"title",void 0);e.__decorate([g.property(),d.renderable(["viewModel.inputFields","viewModel.state"]),d.vmEvent(["value-change",
"submit"])],c.prototype,"viewModel",void 0);e.__decorate([g.aliasOf("viewModel.getValues")],c.prototype,"getValues",null);e.__decorate([g.aliasOf("viewModel.submit")],c.prototype,"submit",null);return c=e.__decorate([g.subclass("esri.widgets.FeatureForm")],c)}(y)});
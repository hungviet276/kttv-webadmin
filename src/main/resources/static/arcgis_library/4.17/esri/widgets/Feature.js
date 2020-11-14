// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../intl ../core/watchUtils ../core/accessorSupport/decorators ./Attachments ./Widget ./Feature/FeatureContent ./Feature/FeatureFields ./Feature/FeatureMedia ./Feature/FeatureViewModel ./Feature/support/FeatureContentMixin ./support/widget".split(" "),function(w,x,e,n,p,f,q,r,h,t,u,k,v,c){var l={title:!0,content:!0,lastEditedInfo:!0};return function(m){function a(b,d){b=m.call(this,b,d)||this;b._contentWidgets=[];b.graphic=null;b.defaultPopupTemplateEnabled=!1;b.label=
void 0;b.messages=null;b.messagesURIUtils=null;b.spatialReference=null;b.title=null;b.visibleElements=e.__assign({},l);b.map=null;b.view=null;b.viewModel=new k;return b}e.__extends(a,m);a.prototype.initialize=function(){var b=this;this.own(p.init(this,"viewModel.contentViewModels",function(){return b._setupContentWidgets()}))};a.prototype.destroy=function(){this._destroyContentWidgets()};a.prototype.castVisibleElements=function(b){return e.__assign(e.__assign({},l),b)};a.prototype.render=function(){var b=
this.viewModel.waitingForContent;return c.tsx("div",{class:this.classes("esri-feature","esri-widget")},c.tsx("div",{class:"esri-feature__size-container"},this.renderTitle(),b?this.renderLoading():this.renderContentContainer()))};a.prototype.setActiveMedia=function(b,d){this.viewModel.setActiveMedia(b,d)};a.prototype.nextMedia=function(b){this.viewModel.nextMedia(b)};a.prototype.previousMedia=function(b){this.viewModel.previousMedia(b)};a.prototype.renderLoading=function(){return c.tsx("div",{key:"loading-container",
class:"esri-feature__loading-container"},c.tsx("span",{class:this.classes("esri-icon-loading-indicator esri-rotating","esri-feature__loading-spinner")}))};a.prototype.renderContentContainer=function(){return this.visibleElements.content?c.tsx("div",{class:"esri-feature__main-container"},[this.renderContent(),this.renderLastEditInfo()]):null};a.prototype.renderTitle=function(){var b=this.title;return this.visibleElements.title?c.tsx("h4",{class:"esri-feature__title",innerHTML:b}):null};a.prototype.renderContent=
function(){var b=this.viewModel.content;return b?Array.isArray(b)?b.length?c.tsx("div",{key:"content-content-elements"},b.map(this.renderContentElement,this)):null:"string"===typeof b?(b=this._contentWidgets[0],!b||b.destroyed?null:c.tsx("div",{key:"content-content"},b.render())):this.renderNodeContent(b):null};a.prototype.renderContentElement=function(b,d){var a=this.visibleElements;if("boolean"!==typeof a.content&&!a.content[b.type])return null;switch(b.type){case "attachments":return this.renderAttachments(d);
case "custom":return this.renderCustom(b,d);case "fields":return this.renderFields(d);case "media":return this.renderMedia(d);case "text":return this.renderText(b,d);default:return null}};a.prototype.renderAttachments=function(b){var d=this._contentWidgets[b];if(!d||d.destroyed)return null;var a=d.viewModel,e=a.attachmentInfos;return"loading"===a.state||0<e.length?c.tsx("div",{key:this._buildKey("attachments-element",b),class:this.classes("esri-feature__attachments","esri-feature__content-element")},
c.tsx("h2",null,this.messages.attach),d.render()):null};a.prototype.renderCustom=function(b,d){var a=this._contentWidgets[d];return!a||a.destroyed?null:b.creator?c.tsx("div",{key:this._buildKey("custom-element",d),class:"esri-feature__content-element"},a.render()):null};a.prototype.renderFields=function(b){var a=this._contentWidgets[b];return!a||a.destroyed?null:c.tsx("div",{key:this._buildKey("fields-element",b),class:"esri-feature__content-element"},a.render())};a.prototype.renderMedia=function(b){var a=
this._contentWidgets[b];return!a||a.destroyed?null:c.tsx("div",{key:this._buildKey("media-element",b),class:"esri-feature__content-element"},a.render())};a.prototype.renderLastEditInfo=function(){var b=this.visibleElements,a=this.messages,g=this.viewModel.lastEditInfo;if(!g||!b.lastEditedInfo)return null;b=g.user;a=n.substitute("edit"===g.type?b?a.lastEditedByUser:a.lastEdited:b?a.lastCreatedByUser:a.lastCreated,{date:g.date,user:b});return c.tsx("div",{key:"edit-info-element",class:this.classes("esri-feature__last-edited-info",
"esri-feature__content-element")},a)};a.prototype.renderText=function(b,a){var d=this._contentWidgets[a];return!d||d.destroyed?null:b.text?c.tsx("div",{key:this._buildKey("text-element",a),class:this.classes("esri-feature__content-element","esri-feature__text")},d.render()):null};a.prototype._buildKey=function(b){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];c=this.get("viewModel.graphic.uid")||"0";a=a.join("-");return b+"__"+c+"-"+a};a.prototype._destroyContentWidgets=function(){this._contentWidgets.forEach(function(b){b.viewModel=
null;b&&!b.destroyed&&b.destroy()});this._contentWidgets=[]};a.prototype._setupContentWidgets=function(){var b=this;this._destroyContentWidgets();var a=this.get("viewModel.content"),c=this.viewModel.contentViewModels;Array.isArray(a)?a.forEach(function(a,d){"attachments"===a.type&&(b._contentWidgets[d]=new q({displayType:a.displayType,viewModel:c[d]}));"fields"===a.type&&(b._contentWidgets[d]=new t({viewModel:c[d]}));"media"===a.type&&(b._contentWidgets[d]=new u({viewModel:c[d]}));"text"===a.type&&
(b._contentWidgets[d]=new h({viewModel:c[d]}));"custom"===a.type&&(b._contentWidgets[d]=new h({viewModel:c[d]}))},this):(a=c[0])&&!a.destroyed&&(this._contentWidgets[0]=new h({viewModel:a}));this.scheduleRender()};e.__decorate([f.aliasOf("viewModel.graphic")],a.prototype,"graphic",void 0);e.__decorate([f.aliasOf("viewModel.defaultPopupTemplateEnabled")],a.prototype,"defaultPopupTemplateEnabled",void 0);e.__decorate([f.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],a.prototype,
"label",void 0);e.__decorate([f.property(),c.renderable(),c.messageBundle("esri/widgets/Feature/t9n/Feature")],a.prototype,"messages",void 0);e.__decorate([f.property(),c.renderable(),c.messageBundle("esri/widgets/support/t9n/uriUtils")],a.prototype,"messagesURIUtils",void 0);e.__decorate([f.aliasOf("viewModel.spatialReference")],a.prototype,"spatialReference",void 0);e.__decorate([f.aliasOf("viewModel.title")],a.prototype,"title",void 0);e.__decorate([f.property(),c.renderable()],a.prototype,"visibleElements",
void 0);e.__decorate([f.cast("visibleElements")],a.prototype,"castVisibleElements",null);e.__decorate([f.aliasOf("viewModel.map")],a.prototype,"map",void 0);e.__decorate([f.aliasOf("viewModel.view")],a.prototype,"view",void 0);e.__decorate([f.property({type:k}),c.renderable(["viewModel.waitingForContent","viewModel.content","viewModel.lastEditInfo","viewModel.contentViewModels"])],a.prototype,"viewModel",void 0);return a=e.__decorate([f.subclass("esri.widgets.Feature")],a)}(v.FeatureContentMixin(r))});
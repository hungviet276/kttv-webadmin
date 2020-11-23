// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/accessorSupport/decorators ./Widget ./Expand/ExpandViewModel ./support/widget".split(" "),function(k,l,e,d,h,f,c){return function(g){function a(b,a){b=g.call(this,b,a)||this;b.autoCollapse=null;b.collapseTooltip="";b.content="";b.expanded=null;b.expandTooltip="";b.group=null;b.iconNumber=0;b.label=void 0;b.messages=null;b.messagesCommon=null;b.mode="auto";b.view=null;b.viewModel=new f;return b}e.__extends(a,g);Object.defineProperty(a.prototype,"contentId",{get:function(){return this.id+
"_controls_content"},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"expandTitle",{get:function(){var b=this.messagesCommon,a=this.collapseTooltip,c=this.expandTooltip;return this.expanded?a||b.collapse:c||b.expand},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"collapseIconClass",{get:function(){return"esri-icon-collapse"},set:function(b){b?this._override("collapseIconClass",b):this._clearOverride("collapseIconClass")},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,
"expandIconClass",{get:function(){return c.isWidget(this.content)?this.content.iconClass:"esri-icon-expand"},set:function(b){b?this._override("expandIconClass",b):this._clearOverride("expandIconClass")},enumerable:!1,configurable:!0});a.prototype.expand=function(){this.viewModel.expanded=!0};a.prototype.collapse=function(){this.viewModel.expanded=!1};a.prototype.toggle=function(){this.viewModel.expanded=!this.viewModel.expanded};a.prototype.render=function(){var b,a=this.mode,a=(b={},b["esri-expand--auto"]=
"auto"===a,b["esri-expand--drawer"]="drawer"===a,b["esri-expand--floating"]="floating"===a,b);return c.tsx("div",{class:this.classes("esri-expand esri-widget",a)},this.renderMask(),this.renderContainer())};a.prototype.renderContainer=function(){var b,a=this.expanded,a=(b={},b["esri-expand__container--expanded"]=a,b);return c.tsx("div",{class:this.classes("esri-expand__container",a)},this.renderPanel(),this.renderContent())};a.prototype.renderMask=function(){var b,a=this.expanded,a=(b={},b["esri-expand__mask--expanded"]=
a,b);return c.tsx("div",{bind:this,onclick:this._toggle,class:this.classes("esri-expand__mask",a)})};a.prototype.renderBadgeNumber=function(){var b=this.expanded,a=this.iconNumber;return a&&!b?c.tsx("span",{key:"expand__icon-number",class:"esri-expand__icon-number"},a):null};a.prototype.renderPanelNumber=function(){var b=this.iconNumber,a=this.expanded;return b&&a?c.tsx("span",{key:"expand__expand-icon-number",class:this.classes("esri-expand__icon-number","esri-expand__icon-number--expanded")},b):
null};a.prototype.renderIcon=function(){var b,a=this.collapseIconClass,e=this.expandIconClass,d=this.expanded,d=(b={},b["esri-expand__icon--expanded"]=d,b[a]=d,b[e]=!d,b);a===e&&(d[a]=!0);return c.tsx("span",{"aria-hidden":"true",class:this.classes("esri-collapse__icon",d)})};a.prototype.renderTitle=function(){return c.tsx("span",{class:"esri-icon-font-fallback-text"},this.expandTitle)};a.prototype.renderExpandButton=function(){return c.tsx("div",{bind:this,onclick:this._toggle,onkeydown:this._toggle,
"aria-controls":this.contentId,"aria-expanded":this.expanded?"true":"false",title:this.expandTitle,role:"button",tabindex:"0",class:"esri-widget--button"},this.renderBadgeNumber(),this.renderIcon(),this.renderTitle())};a.prototype.renderPanel=function(){return c.tsx("div",{class:"esri-expand__panel"},this.renderExpandButton(),this.renderPanelNumber())};a.prototype.renderContent=function(){var a,d=this.expanded,e=this.contentId,d=(a={},a["esri-expand__content--expanded"]=d,a);return c.tsx("div",{id:e,
role:"region",class:this.classes("esri-expand__content",d)},this.renderContentContainer())};a.prototype.renderContentContainer=function(){var a=this.content;return"string"===typeof a?c.tsx("div",{innerHTML:a}):c.isWidget(a)?a.render():a instanceof HTMLElement?c.tsx("div",{bind:a,afterCreate:this._attachToNode}):c.hasDomNode(a)?c.tsx("div",{bind:a.domNode,afterCreate:this._attachToNode}):null};a.prototype._toggle=function(){this.toggle()};a.prototype._attachToNode=function(a){a.appendChild(this)};
e.__decorate([d.property({readOnly:!0,dependsOn:["id"]}),c.renderable()],a.prototype,"contentId",null);e.__decorate([d.property({readOnly:!0,dependsOn:["expanded","messagesCommon","collapseTooltip","expandTooltip"]}),c.renderable()],a.prototype,"expandTitle",null);e.__decorate([d.aliasOf("viewModel.autoCollapse")],a.prototype,"autoCollapse",void 0);e.__decorate([d.property({dependsOn:["content"]}),c.renderable()],a.prototype,"collapseIconClass",null);e.__decorate([d.property(),c.renderable()],a.prototype,
"collapseTooltip",void 0);e.__decorate([d.property(),c.renderable()],a.prototype,"content",void 0);e.__decorate([d.aliasOf("viewModel.expanded"),c.renderable()],a.prototype,"expanded",void 0);e.__decorate([d.property({dependsOn:["content"]}),c.renderable()],a.prototype,"expandIconClass",null);e.__decorate([d.property(),c.renderable()],a.prototype,"expandTooltip",void 0);e.__decorate([d.aliasOf("viewModel.group")],a.prototype,"group",void 0);e.__decorate([d.property(),c.renderable()],a.prototype,"iconNumber",
void 0);e.__decorate([d.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],a.prototype,"label",void 0);e.__decorate([d.property(),c.renderable(),c.messageBundle("esri/widgets/Expand/t9n/Expand")],a.prototype,"messages",void 0);e.__decorate([d.property(),c.renderable(),c.messageBundle("esri/t9n/common")],a.prototype,"messagesCommon",void 0);e.__decorate([d.property(),c.renderable()],a.prototype,"mode",void 0);e.__decorate([d.aliasOf("viewModel.view"),c.renderable()],a.prototype,"view",
void 0);e.__decorate([d.property({type:f}),c.renderable("viewModel.state")],a.prototype,"viewModel",void 0);e.__decorate([c.accessibleHandler()],a.prototype,"_toggle",null);return a=e.__decorate([d.subclass("esri.widgets.Expand")],a)}(h)});
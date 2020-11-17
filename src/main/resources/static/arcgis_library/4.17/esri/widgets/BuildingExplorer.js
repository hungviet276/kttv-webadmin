// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./BuildingExplorer/BuildingExplorerViewModel ./BuildingExplorer/BuildingDisciplinesTree/BuildingDisciplinesTree ./BuildingExplorer/BuildingLevelPicker/BuildingLevelPicker ./BuildingExplorer/BuildingPhasePicker/BuildingPhasePicker ./support/widget".split(" "),function(r,t,d,l,f,e,m,g,n,p,q,c){var h={levels:!0,phases:!0,disciplines:!0};return function(k){function b(a,b){a=k.call(this,a,b)||this;
a._defaultViewModel=new g;a.viewModel=a._defaultViewModel;a.view=null;a.layers=null;a.visibleElements=d.__assign({},h);a.iconClass="esri-icon-organization";a.label=void 0;a.messages=null;a.messagesCommon=null;a.toggleSiblingsVisibility=!1;a._handles=new l;a._levelPicker=new p;a._phasePicker=new q;a._disciplinesTree=new n;return a}d.__extends(b,k);b.prototype.initialize=function(){var a=this;this._handles.add([f.init(this,"viewModel.level",function(){a._levelPicker.viewModel=a.viewModel.level}),f.init(this,
"viewModel.phase",function(){a._phasePicker.viewModel=a.viewModel.phase}),f.init(this,"viewModel.disciplines",function(){a._disciplinesTree.viewModel=a.viewModel.disciplines}),f.init(this,"messages",function(){var b,c,d;a._levelPicker.messages=null===(b=a.messages)||void 0===b?void 0:b.level;a._phasePicker.messages=null===(c=a.messages)||void 0===c?void 0:c.phase;a._disciplinesTree.messages=null===(d=a.messages)||void 0===d?void 0:d.disciplines}),f.init(this,"toggleSiblingsVisibility",function(){a._disciplinesTree.toggleSiblingsVisibility=
a.toggleSiblingsVisibility})])};b.prototype.destroy=function(){this._handles.destroy();this._levelPicker.destroy();this._phasePicker.destroy();this._disciplinesTree.destroy();this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()};b.prototype._castVisibleElements=function(a){return d.__assign(d.__assign({},h),a)};b.prototype.render=function(){var a,b="disabled"===this.viewModel.state||!this.viewModel.isSupported;return c.tsx("div",{key:this,class:this.classes("esri-widget","esri-building-explorer esri-widget--panel",
(a={},a["esri-widget--disabled"]=b,a)),"aria-label":this.messages.widgetLabel},this._renderContent())};b.prototype._renderContent=function(){if(!this.viewModel.isSupported)return c.tsx("p",{class:"esri-building-explorer__panel--error"},this.messages.unsupported);if(!this.viewModel.layers.length)return c.tsx("p",{class:"esri-building-explorer__panel--error"},this.messages.noData);switch(this.viewModel.state){case "loading":return this._renderLoadingIndicator();case "ready":return c.tsx("div",{key:"content",
class:"esri-building-explorer__content"},this._renderLevelPickerSection(),this._renderPhasePickerSection(),this._renderDisciplinesSection());case "failed":return c.tsx("p",{class:"esri-building-explorer__panel--error"},this.messages.failed);default:return null}};b.prototype._renderLoadingIndicator=function(){return c.tsx("div",{key:"loading-container",role:"presentation",class:"esri-building-explorer__loading-container","aria-label":this.messagesCommon.loading,title:this.messagesCommon.loading},c.tsx("span",
{"aria-hidden":"true",class:this.classes("esri-icon-loading-indicator","esri-rotating")}))};b.prototype._renderLevelPickerSection=function(){var a=this.viewModel.level,b="ready"===a.state,a=1<a.allowedValues.length;return this.visibleElements.levels&&b&&a?c.tsx("div",{key:"levels",class:this.classes("esri-building-explorer__section","esri-building-explorer__levels")},c.tsx("h4",{class:"esri-widget__heading"},this.messages.level.title),this._levelPicker.render()):[]};b.prototype._renderPhasePickerSection=
function(){var a=this.viewModel.phase,b="ready"===a.state,a=1<a.allowedValues.length;return this.visibleElements.phases&&b&&a?c.tsx("div",{key:"phases",class:this.classes("esri-building-explorer__section","esri-building-explorer__phases")},c.tsx("h4",{class:"esri-widget__heading"},this.messages.phase.title),this._phasePicker.render()):[]};b.prototype._renderDisciplinesSection=function(){var a=this.viewModel.disciplines,b="ready"===a.state,a=a.root.hasChildren;return this.visibleElements.disciplines&&
b&&a?c.tsx("div",{key:"disciplines",class:this.classes("esri-building-explorer__section","esri-building-explorer__disciplines")},c.tsx("h4",{class:"esri-widget__heading"},this.messages.disciplines.title),this._disciplinesTree.render()):[]};d.__decorate([e.property({type:g}),c.renderable(["state","level.state","phase.state","disciplines.state"])],b.prototype,"viewModel",void 0);d.__decorate([e.aliasOf("viewModel.view"),c.renderable()],b.prototype,"view",void 0);d.__decorate([e.aliasOf("viewModel.layers")],
b.prototype,"layers",void 0);d.__decorate([e.property(),c.renderable()],b.prototype,"visibleElements",void 0);d.__decorate([e.cast("visibleElements")],b.prototype,"_castVisibleElements",null);d.__decorate([e.property()],b.prototype,"iconClass",void 0);d.__decorate([e.aliasOf("messages.widgetLabel",{overridable:!0})],b.prototype,"label",void 0);d.__decorate([e.property(),c.renderable(),c.messageBundle("esri/widgets/BuildingExplorer/t9n/BuildingExplorer")],b.prototype,"messages",void 0);d.__decorate([e.property(),
c.renderable(),c.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0);d.__decorate([e.property({nonNullable:!0}),c.renderable()],b.prototype,"toggleSiblingsVisibility",void 0);d.__decorate([e.property(),c.renderable()],b.prototype,"_levelPicker",void 0);d.__decorate([e.property(),c.renderable()],b.prototype,"_phasePicker",void 0);d.__decorate([e.property(),c.renderable()],b.prototype,"_disciplinesTree",void 0);return b=d.__decorate([e.subclass("esri.widgets.BuildingExplorer")],b)}(m)});
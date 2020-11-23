// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/maybe ../../../core/accessorSupport/decorators ../../Widget ../BuildingPhase ../../support/widget".split(" "),function(p,q,d,g,f,m,h,c){var n={nextPhase:"nextPhase",previousPhase:"previousPhase",currentPhase:"{{value}}"};return function(k){function b(a,b){a=k.call(this,a,b)||this;a._defaultViewModel=new h;a.viewModel=a._defaultViewModel;a.messages=n;a._phasesContainer=null;a._shouldScrollCurrentPhaseIntoView=!0;a._shouldFocusCurrentPhase=!1;return a}d.__extends(b,
k);b.prototype.initialize=function(){var a=this;this.own(this.watch(["_currentPhase","_container"],function(){a._shouldScrollCurrentPhaseIntoView=!0}))};b.prototype.destroy=function(){this.viewModel!==this._defaultViewModel&&this._defaultViewModel.destroy()};Object.defineProperty(b.prototype,"_currentPhase",{get:function(){return this.viewModel.enabled?this.viewModel.value:null},enumerable:!1,configurable:!0});b.prototype.render=function(){if(2>this._phases.length)return c.tsx("div",null);var a=c.isRTL(),
b=this.messages.previousPhase,l=this.messages.nextPhase;return c.tsx("div",{bind:this,key:this,class:this.classes("esri-widget","esri-building-phase-picker"),onkeydown:this._onKeyDown},c.tsx("button",{bind:this,class:a?"esri-building-phase-picker__arrow-right":"esri-building-phase-picker__arrow-left",disabled:!this.viewModel.hasPrevious,onclick:this._onArrowLeftClick,"aria-label":b,title:b,type:"button"}),c.tsx("div",{bind:this,class:"esri-building-phase-picker__phases-container",afterCreate:c.storeNode,
"data-node-ref":"_phasesContainer",afterUpdate:this._onPhasesContainerAfterUpdate},this._renderPhaseButtons()),c.tsx("button",{bind:this,class:a?"esri-building-phase-picker__arrow-left":"esri-building-phase-picker__arrow-right",disabled:!this.viewModel.hasNext,onclick:this._onArrowRightClick,"aria-label":l,title:l,type:"button"}))};b.prototype._renderPhaseButtons=function(){for(var a=this._phases,b=[],c=0;c<a.length;++c){var e=a[c],e={phase:e,active:g.isSome(this._currentPhase)?e<=this._currentPhase:
!1,current:g.isSome(this._currentPhase)?e===this._currentPhase:!1};0<c&&b.push(this._renderDivider(e));b.push(this._renderPhaseButton(e))}return b};b.prototype._renderPhaseButton=function(a){var b,d=this,e=a.phase,f=a.active;a=a.current;var h=g.unwrap(this.viewModel.getValueLabel(e));return c.tsx("button",{key:"phase-"+e,class:this.classes("esri-building-phase-picker__phase",(b={},b["esri-building-phase-picker__phase--active"]=f,b["esri-building-phase-picker__phase--current"]=a,b)),"aria-label":h,
title:h,onclick:function(){return d.viewModel.select(e)},type:"button"},e)};b.prototype._renderDivider=function(a){var b,d=a.active;return c.tsx("div",{key:"phase-divider-"+a.phase,class:this.classes("esri-building-phase-picker__divider",(b={},b["esri-building-phase-picker__divider--active"]=d,b))})};b.prototype._onKeyDown=function(a){switch(a.key){case "ArrowDown":case "ArrowLeft":a.stopPropagation();a.preventDefault();this.viewModel.previous();this._shouldFocusCurrentPhase=!0;break;case "ArrowUp":case "ArrowRight":a.stopPropagation(),
a.preventDefault(),this.viewModel.next(),this._shouldFocusCurrentPhase=!0}};b.prototype._onArrowLeftClick=function(){this.viewModel.previous()};b.prototype._onArrowRightClick=function(){this.viewModel.next()};b.prototype._onPhasesContainerAfterUpdate=function(){if(!g.isNone(this._phasesContainer)){var a=this._phasesContainer.querySelector(".esri-building-phase-picker__phase--current");g.isNone(a)||(this._shouldScrollCurrentPhaseIntoView&&(this._phasesContainer.scrollLeft=-(this._phasesContainer.offsetWidth/
2)+a.offsetLeft-a.offsetWidth/2,this._shouldScrollCurrentPhaseIntoView=!1),this._shouldFocusCurrentPhase&&(a.focus(),this._shouldFocusCurrentPhase=!1))}};d.__decorate([f.property({type:h}),c.renderable(["viewModel.layers.length","viewModel.hasNext","viewModel.hasPrevious"])],b.prototype,"viewModel",void 0);d.__decorate([f.property(),c.renderable()],b.prototype,"messages",void 0);d.__decorate([f.aliasOf("viewModel.allowedValues"),c.renderable()],b.prototype,"_phases",void 0);d.__decorate([f.property({readOnly:!0,
dependsOn:["viewModel.enabled","viewModel.value"]}),c.renderable()],b.prototype,"_currentPhase",null);d.__decorate([f.property()],b.prototype,"_phasesContainer",void 0);return b=d.__decorate([f.subclass("esri.widgets.BuildingExplorer.BuildingPhasePicker.BuildingPhasePicker")],b)}(m)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/arrayUtils ../core/Logger ../core/maybe ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./Daylight/daylightUtils ./Daylight/DaylightViewModel ./Daylight/support/SliderWithDropdown ./support/DatePicker ./support/widget".split(" "),function(w,x,e,p,q,k,g,f,r,h,l,t,u,c){var m={playButtons:!0,shadowsToggle:!0,datePicker:!0,timezone:!0},v=q.getLogger("esri.widgets.Daylight");return function(n){function b(a,d){var b;a=n.call(this,a,d)||this;a.playSpeedMultiplier=
1;a.timeSliderSteps=5;a.view=null;a.viewModel=new l;a.visibleElements=e.__assign({},m);a.dateOrSeason="date";a._timeSlider=new t({viewModel:a.viewModel.timeSliderViewModel,labelFormatFunction:h.formatSliderLabel,inputFormatFunction:h.formatSliderLabel,min:0,max:1439,steps:null!==(b=a.timeSliderSteps)&&void 0!==b?b:5,values:[0],labelInputsEnabled:!1,visibleElements:{labels:!0},tickConfigs:[{mode:"position",values:[0,360,720,1080,1439],labelsVisible:!0,tickCreatedFunction:a._onPrimaryTickCreated.bind(a)},
{mode:"position",values:[120,240,480,600,840,960,1200,1320],tickCreatedFunction:a._onSecondaryTickCreated.bind(a)}],items:[]});a._datePicker=new u({viewModel:a.viewModel.datePickerViewModel,commitOnMonthChange:!0});return a}e.__extends(b,n);Object.defineProperty(b.prototype,"gmtOffsets",{get:function(){return this.messages?h.getGMTOffsets(this.messages):null},enumerable:!1,configurable:!0});b.prototype.castVisibleElements=function(a){return e.__assign(e.__assign({},m),a)};b.prototype.postInitialize=
function(){var a=this;this.viewModel.isSupported&&this.own(g.init(this.viewModel,"datePickerViewModel",function(d){a._datePicker.viewModel=d}),g.init(this.viewModel,"timeSliderViewModel",function(d){a._timeSlider.viewModel=d}),g.init(this,"messages",function(){a._timeSlider.buttonTooltip=a.messages.chooseTimezone}),g.init(this,"visibleElements",function(){a._timeSlider.showDropDown=a.visibleElements.timezone}),g.init(this,"gmtOffsets",function(d){k.isSome(d)&&(a._timeSlider.items=d)}),g.init(this,
["viewModel.utcOffset","gmtOffsets"],function(){return a._onUTCOffsetChange()}))};b.prototype.destroy=function(){this._datePicker.destroy();this._timeSlider.destroy()};b.prototype.render=function(){return this.viewModel.isSupported?c.tsx("div",{class:this.classes("esri-daylight","esri-widget")},c.tsx("h3",{class:"esri-widget__heading"},this.messages.title),this.renderTimeOptions(),this.visibleElements.datePicker?"date"===this.dateOrSeason?this.renderDateOptions():this.renderSeasonOptions():null,this.visibleElements.shadowsToggle?
this.renderShadowOptions():null):c.tsx("div",{class:this.classes("esri-daylight","esri-widget")},c.tsx("div",{key:"daylight__unsupported",class:"esri-daylight__panel--error"},c.tsx("p",null,this.messages.unsupported)))};b.prototype.renderTimeOptions=function(){var a,d,b,e=(a={},a["esri-icon-play"]=!this.viewModel.dayPlaying,a["esri-icon-pause"]=this.viewModel.dayPlaying,a);a=(d={},d["esri-slider--shadow-on"]=this.viewModel.directShadowsEnabled,d["esri-slider--shadow-off"]=!this.viewModel.directShadowsEnabled,
d);d=(b={},b["esri-slider--date-on"]=this.visibleElements.datePicker,b["esri-slider--date-off"]=!this.visibleElements.datePicker,b);return c.tsx("div",{class:this.classes("esri-daylight__container esri-daylight__day-container",a,d),key:"daylight-time-options"},this._timeSlider.render(),this.visibleElements.playButtons?c.tsx("button",{bind:this.viewModel,onclick:this.viewModel.toggleDayPlaying,"aria-label":this.messages.playDay,title:this.messages.playDay,type:"button",class:this.classes("esri-button",
"esri-daylight__play-pause-button",e)},c.tsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c.tsx("path",{d:"M6 3.745L11.255 8 6 12.255z"}))):null)};b.prototype.renderDateOptions=function(){var a,d=(a={},a["esri-icon-play"]=!this.viewModel.yearPlaying,a["esri-icon-pause"]=this.viewModel.yearPlaying,a);return c.tsx("div",{class:"esri-daylight__container esri-daylight__date-container",key:"daylight-date-options"},this._datePicker.render(),this.visibleElements.playButtons?c.tsx("button",
{bind:this.viewModel,onclick:this.viewModel.toggleYearPlaying,"aria-label":this.messages.playYear,title:this.messages.playYear,type:"button",class:this.classes("esri-button","esri-daylight__play-pause-button",d)},c.tsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},c.tsx("path",{d:"M6 3.745L11.255 8 6 12.255z"}))):null)};b.prototype.renderShadowOptions=function(){var a,d=this.id+"__shadowButton",b=(a={},a["esri-icon-checkbox-checked"]=this.viewModel.directShadowsEnabled,a["esri-icon-checkbox-unchecked"]=
!this.viewModel.directShadowsEnabled,a);return c.tsx("div",{class:"esri-daylight__shadow-container",key:"daylight-shadow-options"},c.tsx("button",{bind:this.viewModel,onclick:this.viewModel.toggleDirectShadows,name:d,class:this.classes("esri-button","esri-daylight__checkbox",b),"aria-label":this.messages.directShadow,title:this.messages.directShadow,type:"button"}),c.tsx("label",{bind:this.viewModel,onclick:this.viewModel.toggleDirectShadows,for:d,class:this.classes(" esri-widget__anchor","esri-interactive"),
"aria-label":this.messages.directShadow,title:this.messages.directShadow},this.messages.directShadow))};b.prototype.renderSeasonOptions=function(){var a=this;return c.tsx("select",{bind:this,onchange:this._onSeasonChange,class:this.classes("esri-select","esri-daylight__season-picker"),value:this.viewModel.currentSeason,"aria-label":this.messages.season},h.ORDERED_SEASONS.map(function(b){return c.tsx("option",{value:b},a.messages[b])}))};b.prototype._onSeasonChange=function(a){this.viewModel.currentSeason=
a.target.value};b.prototype._onUTCOffsetChange=function(){var a,b=this.viewModel.utcOffset,c=null===(a=this._timeSlider.currentItem)||void 0===a?void 0:a.abbr;a=this.gmtOffsets;k.isSome(a)&&c!==b&&(c=p.findIndex(a,function(a){return a.abbr===b}),-1<c&&(this._timeSlider.currentIndex=c))};b.prototype._onPrimaryTickCreated=function(a,b,c){var d=this;b.className+=" esri-interactive esri-widget__anchor esri-daylight__container__tick esri-daylight__container__labelled-tick";c.className+=" esri-interactive esri-widget__anchor";
var e=function(){d.viewModel.timeSliderPosition=a};b.onclick=e;c.onclick=e;b=c.innerText;-1!==b.indexOf(" ")&&(c.innerHTML=b.replace(/(.*) (.*)/,'$1\x3cbr\x3e\x3cdiv class\x3d"esri-label__ampm"\x3e$2\x3c/div\x3e'))};b.prototype._onSecondaryTickCreated=function(a,b){var c=this;b.className+=" esri-interactive esri-widget__anchor esri-daylight__container__tick";b.onclick=function(){c.viewModel.timeSliderPosition=a}};e.__decorate([f.property({readOnly:!0,dependsOn:["messages"]})],b.prototype,"gmtOffsets",
null);e.__decorate([f.property(),c.renderable(),c.messageBundle("esri/widgets/Daylight/t9n/Daylight")],b.prototype,"messages",void 0);e.__decorate([f.aliasOf("viewModel.playSpeedMultiplier")],b.prototype,"playSpeedMultiplier",void 0);e.__decorate([f.aliasOf("_timeSlider.steps")],b.prototype,"timeSliderSteps",void 0);e.__decorate([f.aliasOf("viewModel.view")],b.prototype,"view",void 0);e.__decorate([f.property({type:l}),c.renderable(["viewModel.directShadowsEnabled","viewModel.timeSliderPosition",
"viewModel.currentSeason","viewModel.localDate","viewModel.utcOffset"])],b.prototype,"viewModel",void 0);e.__decorate([f.property(),c.renderable()],b.prototype,"visibleElements",void 0);e.__decorate([f.cast("visibleElements")],b.prototype,"castVisibleElements",null);e.__decorate([f.property({cast:function(a){if("season"===a||"date"===a)return a;v.warn('"'+a+'" is not a valid option. Acceptable values are only "date" or "season". Defaulting to "date".');return"date"}}),c.renderable()],b.prototype,
"dateOrSeason",void 0);e.__decorate([f.property(),c.renderable()],b.prototype,"_timeSlider",void 0);e.__decorate([f.property(),c.renderable()],b.prototype,"_datePicker",void 0);return b=e.__decorate([f.subclass("esri.widgets.Daylight")],b)}(r)});
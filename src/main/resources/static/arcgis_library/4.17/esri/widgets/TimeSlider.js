// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../TimeInterval ../core/arrayUtils ../core/Collection ../core/compilerUtils ../core/Error ../core/events ../core/mathUtils ../core/throttle ../core/watchUtils ../core/accessorSupport/decorators ../intl/date ../layers/support/timeUtils ./Slider ./Widget ./support/widget ./TimeSlider/TimeSliderViewModel".split(" "),function(L,M,e,a,z,D,w,A,E,F,G,H,f,v,B,I,J,d,C){var K=new D([{minor:new a({value:100,unit:"milliseconds"}),major:new a({value:1,unit:"seconds"}),format:{second:"numeric"}},
{minor:new a({value:500,unit:"milliseconds"}),major:new a({value:5,unit:"seconds"}),format:{second:"numeric"}},{minor:new a({value:1,unit:"seconds"}),major:new a({value:20,unit:"seconds"}),format:{minute:"numeric",second:"numeric"}},{minor:new a({value:2,unit:"seconds"}),major:new a({value:30,unit:"seconds"}),format:{minute:"numeric",second:"numeric"}},{minor:new a({value:10,unit:"seconds"}),major:new a({value:1,unit:"minutes"}),format:{minute:"numeric"}},{minor:new a({value:15,unit:"seconds"}),major:new a({value:5,
unit:"minutes"}),format:{hour:"numeric",minute:"numeric"}},{minor:new a({value:1,unit:"minutes"}),major:new a({value:20,unit:"minutes"}),format:{hour:"numeric",minute:"numeric"}},{minor:new a({value:5,unit:"minutes"}),major:new a({value:2,unit:"hours"}),format:{hour:"numeric",minute:"numeric"}},{minor:new a({value:15,unit:"minutes"}),major:new a({value:6,unit:"hours"}),format:{hour:"numeric",minute:"numeric"}},{minor:new a({value:1,unit:"hours"}),major:new a({value:1,unit:"days"}),format:{day:"numeric",
month:"short"}},{minor:new a({value:6,unit:"hours"}),major:new a({value:1,unit:"weeks"}),format:{day:"numeric",month:"short"}},{minor:new a({value:1,unit:"days"}),major:new a({value:1,unit:"months"}),format:{month:"long"}},{minor:new a({value:2,unit:"days"}),major:new a({value:1,unit:"months"}),format:{month:"short"}},{minor:new a({value:3,unit:"days"}),major:new a({value:1,unit:"months"}),format:{month:"short"}},{minor:new a({value:4,unit:"days"}),major:new a({value:3,unit:"months"}),format:{month:"short",
year:"numeric"}},{minor:new a({value:1,unit:"weeks"}),major:new a({value:1,unit:"years"}),format:{year:"numeric"}},{minor:new a({value:1,unit:"months"}),major:new a({value:1,unit:"years"}),format:{year:"numeric"}},{minor:new a({value:2,unit:"months"}),major:new a({value:2,unit:"years"}),format:{year:"numeric"}},{minor:new a({value:1,unit:"years"}),major:new a({value:1,unit:"decades"}),format:{year:"numeric"}},{minor:new a({value:2,unit:"years"}),major:new a({value:5,unit:"decades"}),format:{year:"numeric"}},
{minor:new a({value:5,unit:"decades"}),major:new a({value:10,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:1,unit:"centuries"}),major:new a({value:10,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:2,unit:"centuries"}),major:new a({value:20,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:5,unit:"centuries"}),major:new a({value:50,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:10,unit:"centuries"}),
major:new a({value:100,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:20,unit:"centuries"}),major:new a({value:200,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:50,unit:"centuries"}),major:new a({value:500,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:100,unit:"centuries"}),major:new a({value:1E3,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:200,unit:"centuries"}),major:new a({value:1E3,
unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:500,unit:"centuries"}),major:new a({value:5E3,unit:"centuries"}),format:{era:"short",year:"numeric"}},{minor:new a({value:1E3,unit:"centuries"}),major:new a({value:1E4,unit:"centuries"}),format:{era:"short",year:"numeric"}}]);return function(a){function c(b,d){b=a.call(this,b,d)||this;b._slider=new I({precision:0,visibleElements:{rangeLabels:!1},rangeLabelInputsEnabled:!1});b._tickFormat=null;b.disabled=!1;b.effectiveStops=
null;b.fullTimeExtent=null;b.iconClass="esri-icon-time-clock";b.label=void 0;b.labelFormatFunction=null;b.loop=!1;b.messages=null;b.messagesCommon=null;b.mode="time-window";b.playRate=1E3;b.stops={count:10};b.tickConfigs=null;b.timeExtent=null;b.timeVisible=!1;b.values=null;b.view=null;b.viewModel=new C;return b}e.__extends(c,a);c.prototype.initialize=function(){var b=this;this.own([this._slider.watch("values",function(a){var d,c=null===(d=b.values)||void 0===d?void 0:d.map(function(b){return b.getTime()});
z.equals(a,c)||b.set("values",a.map(function(b){return new Date(b)}))}),E.on(window,"resize",G.throttle(function(){return b.scheduleRender()},100)),H.init(this,"effectiveStops",function(){return b._updateSliderSteps()})]);this._validateTimeExtent()};c.prototype.destroy=function(){this._slider.destroy();this._tickFormat=null};Object.defineProperty(c.prototype,"interactive",{get:function(){return!this.disabled&&this.viewModel&&"disabled"!==this.viewModel.state},enumerable:!1,configurable:!0});Object.defineProperty(c.prototype,
"layout",{set:function(b){-1===["auto","compact","wide"].indexOf(b)&&(b="auto");this._set("layout",b)},enumerable:!1,configurable:!0});c.prototype.next=function(){};c.prototype.play=function(){};c.prototype.previous=function(){};c.prototype.stop=function(){return null};c.prototype.render=function(){var b,a,c,e=this._slider,f=this.domNode,k=this.effectiveStops,g=this.fullTimeExtent,t=this.interactive,l=this.messagesCommon,x=this.mode,r=this.tickConfigs,p=this.timeVisible,h=this.values,n=this.viewModel;
if(null!=g){var q=g.start,m=g.end;if(null!=q&&null!=m){var q=q.getTime(),y=m.getTime();if(m=e.min!==q||e.max!==y)e.min=q,e.max=y;if(null!=r)e.tickConfigs!==r&&(e.tickConfigs=r);else{var r=null!==(a=null===(b=e.trackElement)||void 0===b?void 0:b.offsetWidth)&&void 0!==a?a:400,w=(y-q)/r,u=K.find(function(a){return a.minor.toMilliseconds()>3*w});if(b=this._tickFormat!==u&&null!=u)this._tickFormat=u;if(m||b)b={mode:"position",values:this._getTickPositions(u.minor),labelsVisible:!1,tickCreatedFunction:function(a,
b){b.classList.add("minorTick")}},a={mode:"position",values:this._getTickPositions(u.major),labelsVisible:!0,tickCreatedFunction:function(a,b){b.classList.add("majorTick")},labelFormatFunction:function(a){return v.formatDate(a,u.format)}},e.tickConfigs=[b,a]}}}b=null===h||void 0===h?void 0:h.map(function(a){return a.getTime()});z.equals(e.values,b)||(e.values=b);e.disabled=!t;b=null===g||void 0===g?void 0:g.start;g=null===g||void 0===g?void 0:g.end;a=(m=null!==(c=null===h||void 0===h?void 0:h.length)&&
void 0!==c?c:0)&&this._formatDate(h[0]);r=m&&p&&this._formatTime(h[0]);q=1<m&&"time-window"===x&&this._formatDate(h[1]);m=1<m&&"time-window"===x&&p&&this._formatTime(h[1]);n=n.state;c="ready"===n;n="playing"===n;k=!t||0===k.length;f="auto"===this.layout?858>f.clientWidth?"compact":"wide":this.layout;c=d.tsx("div",{class:"esri-time-slider__animation"},d.tsx("button",{"aria-disabled":k?"true":"false","aria-label":n?l.control.stop:l.control.play,bind:this,class:this.classes("esri-widget--button","esri-time-slider__animation-button",
k&&"esri-button--disabled"),disabled:k,title:n?l.control.stop:l.control.play,onclick:this._playOrStopClick,type:"button"},d.tsx("div",{class:this.classes((c||k)&&"esri-icon-play",n&&"esri-icon-pause")})));h=this.labelFormatFunction?d.tsx("div",{key:"extent",bind:this,class:"esri-time-slider__time-extent-date","data-type":"extent","data-layout":f,"data-date":h,afterCreate:this._createLabel,afterUpdate:this._createLabel}):[a&&d.tsx("div",{key:"start-date-group",class:"esri-time-slider__time-extent-group"},
d.tsx("div",{key:"start-date",class:"esri-time-slider__time-extent-date"},a),r&&d.tsx("div",{key:"start-time",class:"esri-time-slider__time-extent-time"},r)),q&&d.tsx("div",{key:"separator",class:"esri-time-slider__time-extent-separator"},"\u2013"),a&&d.tsx("div",{key:"end-date-group",class:"esri-time-slider__time-extent-group"},d.tsx("div",{key:"end-date",class:"esri-time-slider__time-extent-date"},q),m&&d.tsx("div",{key:"end-time",class:"esri-time-slider__time-extent-time"},m))];h=d.tsx("div",{class:this.classes("esri-time-slider__time-extent",
!t&&"esri-button--disabled")},[h]);b=this.labelFormatFunction?d.tsx("div",{key:"min-date",bind:this,class:"esri-time-slider__min-date","data-date":b,"data-type":"min","data-layout":f,afterCreate:this._createLabel,afterUpdate:this._createLabel}):[b&&d.tsx("div",{key:"min-date",class:"esri-time-slider__min-date"},this._formatDate(b)),b&&p&&d.tsx("div",{key:"min-time"},this._formatTime(b))];b=d.tsx("div",{class:this.classes("esri-time-slider__min",!t&&"esri-button--disabled")},[b]);e=d.tsx("div",{class:"esri-time-slider__slider"},
e.render());p=this.labelFormatFunction?d.tsx("div",{key:"max-date",bind:this,class:"esri-time-slider__max-date","data-date":g,"data-type":"max","data-layout":f,afterCreate:this._createLabel,afterUpdate:this._createLabel}):[g&&d.tsx("div",{key:"max-date",class:"esri-time-slider__max-date"},this._formatDate(g)),g&&p&&d.tsx("div",{key:"max-time"},this._formatTime(g))];p=d.tsx("div",{class:this.classes("esri-time-slider__max",!t&&"esri-button--disabled")},[p]);g=d.tsx("div",{class:"esri-time-slider__previous"},
d.tsx("button",{"aria-disabled":k?"true":"false","aria-label":l.pagination.previous,bind:this,class:this.classes("esri-widget--button","esri-time-slider__previous-button",(n||k)&&"esri-button--disabled"),disabled:k,title:l.pagination.previous,onclick:this._previousClick,type:"button"},d.tsx("div",{class:"esri-icon-reverse"})));l=d.tsx("div",{class:"esri-time-slider__next"},d.tsx("button",{"aria-disabled":k?"true":"false","aria-label":l.pagination.next,bind:this,class:this.classes("esri-widget--button",
"esri-time-slider__next-button",(n||k)&&"esri-button--disabled"),disabled:k,title:l.pagination.next,onclick:this._nextClick,type:"button"},d.tsx("div",{class:"esri-icon-forward"})));return d.tsx("div",{class:this.classes("esri-time-slider","esri-widget","esri-time-slider__mode--"+x,"esri-time-slider__layout--"+f,!t&&"esri-disabled")},"wide"===f&&d.tsx("div",{class:"esri-time-slider__row"},[c,h,b,e,p,g,l]),"compact"===f&&[d.tsx("div",{key:"time-slider-row-1",class:"esri-time-slider__row"},[h]),d.tsx("div",
{key:"time-slider-row-2",class:"esri-time-slider__row"},[e]),d.tsx("div",{key:"time-slider-row-3",class:"esri-time-slider__row"},[b,g,c,l,p])])};c.prototype._createLabel=function(a){var b=a.getAttribute("data-type"),c=a.getAttribute("data-layout");this.labelFormatFunction(a["data-date"],b,a,c)};c.prototype._getTickPositions=function(a){var b=this.fullTimeExtent,c=b.start,b=b.end,d=[],e=a.value;a=a.unit;for(var f=B.truncateDate(c,a);f.getTime()<=b.getTime();)f.getTime()>=c.getTime()&&d.push(f.getTime()),
f=B.offsetDate(f,e,a);return d};c.prototype._formatDate=function(a){return v.formatDate(a,v.convertDateFormatToIntlOptions("short-date"))};c.prototype._formatTime=function(a){return v.formatDate(a,v.convertDateFormatToIntlOptions("long-time"))};c.prototype._updateSliderSteps=function(){this._slider.steps=this.effectiveStops&&0<this.effectiveStops.length?this.effectiveStops.map(function(a){return a.getTime()}):null};c.prototype._validateTimeExtent=function(){var a=this;if(this.fullTimeExtent&&this.mode&&
this.values){if(!Array.isArray(this.values))throw new A("time-slider:invalid-values","Values must be an array of dates.");if(0===this.values.length||this.values.some(function(a){return!(a instanceof Date)}))throw new A("time-slider:invalid-values","Values must be an array of dates.");this.values=this.values.map(function(b){b=b.getTime();b=F.clamp(b,a.fullTimeExtent.start.getTime(),a.fullTimeExtent.end.getTime());return new Date(b)});switch(this.mode){case "instant":case "cumulative-from-start":case "cumulative-from-end":1<
this.values.length&&this.values.splice(1);break;case "time-window":1===this.values.length?this.values.push(this.fullTimeExtent.end):2<this.values.length&&this.values.splice(2);this.values.sort(function(a,b){return a.getTime()-b.getTime()});break;default:w.neverReached(this.mode)}}};c.prototype._playOrStopClick=function(){switch(this.viewModel.state){case "ready":this.viewModel.play();break;case "playing":this.viewModel.stop();break;case "disabled":break;default:w.neverReached(this.viewModel.state)}};
c.prototype._previousClick=function(){this.viewModel.previous()};c.prototype._nextClick=function(){this.viewModel.next()};e.__decorate([f.property()],c.prototype,"disabled",void 0);e.__decorate([f.aliasOf("viewModel.effectiveStops"),d.renderable()],c.prototype,"effectiveStops",void 0);e.__decorate([f.aliasOf("viewModel.fullTimeExtent"),d.renderable()],c.prototype,"fullTimeExtent",void 0);e.__decorate([f.property()],c.prototype,"iconClass",void 0);e.__decorate([f.property({dependsOn:["disabled","viewModel.state"],
readOnly:!0}),d.renderable()],c.prototype,"interactive",null);e.__decorate([f.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],c.prototype,"label",void 0);e.__decorate([f.property()],c.prototype,"labelFormatFunction",void 0);e.__decorate([f.property({value:"auto"}),d.renderable()],c.prototype,"layout",null);e.__decorate([f.aliasOf("viewModel.loop")],c.prototype,"loop",void 0);e.__decorate([f.property(),d.renderable(),d.messageBundle("esri/widgets/TimeSlider/t9n/TimeSlider")],c.prototype,
"messages",void 0);e.__decorate([f.property(),d.renderable(),d.messageBundle("esri/t9n/common")],c.prototype,"messagesCommon",void 0);e.__decorate([f.aliasOf("viewModel.mode"),d.renderable()],c.prototype,"mode",void 0);e.__decorate([f.aliasOf("viewModel.playRate")],c.prototype,"playRate",void 0);e.__decorate([f.aliasOf("viewModel.stops")],c.prototype,"stops",void 0);e.__decorate([f.property(),d.renderable()],c.prototype,"tickConfigs",void 0);e.__decorate([f.aliasOf("viewModel.timeExtent")],c.prototype,
"timeExtent",void 0);e.__decorate([f.property({nonNullable:!0}),d.renderable()],c.prototype,"timeVisible",void 0);e.__decorate([f.aliasOf("viewModel.values"),d.renderable()],c.prototype,"values",void 0);e.__decorate([f.aliasOf("viewModel.view")],c.prototype,"view",void 0);e.__decorate([f.property({type:C}),d.renderable(["viewModel.state"])],c.prototype,"viewModel",void 0);e.__decorate([f.aliasOf("viewModel.next")],c.prototype,"next",null);e.__decorate([f.aliasOf("viewModel.play")],c.prototype,"play",
null);e.__decorate([f.aliasOf("viewModel.previous")],c.prototype,"previous",null);e.__decorate([f.aliasOf("viewModel.stop")],c.prototype,"stop",null);e.__decorate([d.accessibleHandler()],c.prototype,"_playOrStopClick",null);e.__decorate([d.accessibleHandler()],c.prototype,"_previousClick",null);e.__decorate([d.accessibleHandler()],c.prototype,"_nextClick",null);return c=e.__decorate([f.subclass("esri.widgets.TimeSlider")],c)}(J)});
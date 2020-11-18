// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/accessorSupport/decorators ./Widget ./support/widget ./Zoom/IconButton ./Zoom/ZoomViewModel".split(" "),function(l,m,b,c,k,e,f,g){return function(h){function a(d,a){d=h.call(this,d,a)||this;d.iconClass="esri-icon-zoom-in-magnifying-glass";d.label=void 0;d.messages=null;d.view=null;d.viewModel=new g;return d}b.__extends(a,h);a.prototype.initialize=function(){this._zoomInButton=new f({action:this.zoomIn.bind(this),iconClass:"esri-icon-plus"});this._zoomOutButton=
new f({action:this.zoomOut.bind(this),iconClass:"esri-icon-minus"})};a.prototype.destroy=function(){this._zoomInButton.destroy();this._zoomOutButton.destroy();this._zoomOutButton=this._zoomInButton=null};Object.defineProperty(a.prototype,"layout",{set:function(a){"horizontal"!==a&&(a="vertical");this._set("layout",a)},enumerable:!1,configurable:!0});a.prototype.render=function(){var a,b=this.viewModel,c=(a={},a["esri-zoom--horizontal"]="horizontal"===this.layout,a);this._zoomInButton.enabled="ready"===
b.state&&b.canZoomIn;this._zoomOutButton.enabled="ready"===b.state&&b.canZoomOut;this._zoomInButton.title=this.messages.zoomIn;this._zoomOutButton.title=this.messages.zoomOut;return e.tsx("div",{class:this.classes("esri-zoom esri-widget",c)},this._zoomInButton.render(),this._zoomOutButton.render())};a.prototype.zoomIn=function(){return this.viewModel.zoomIn()};a.prototype.zoomOut=function(){return this.viewModel.zoomOut()};b.__decorate([c.property()],a.prototype,"iconClass",void 0);b.__decorate([c.property({aliasOf:{source:"messages.widgetLabel",
overridable:!0}})],a.prototype,"label",void 0);b.__decorate([c.property({value:"vertical"}),e.renderable()],a.prototype,"layout",null);b.__decorate([c.property(),e.renderable(),e.messageBundle("esri/widgets/Zoom/t9n/Zoom")],a.prototype,"messages",void 0);b.__decorate([c.aliasOf("viewModel.view"),e.renderable()],a.prototype,"view",void 0);b.__decorate([c.property({type:g}),e.renderable(["viewModel.canZoomIn","viewModel.canZoomOut","viewModel.state"])],a.prototype,"viewModel",void 0);return a=b.__decorate([c.subclass("esri.widgets.Zoom")],
a)}(k)});
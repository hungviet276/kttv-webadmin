// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/date ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(g,h,b,e,f,c){return function(d){function a(a){a=d.call(this,a)||this;a.digitSeparator=!1;a.dateFormat=null;a.places=null;return a}b.__extends(a,d);b.__decorate([c.property()],a.prototype,"digitSeparator",void 0);b.__decorate([c.property({json:{read:{source:"dateFormat",reader:e.fromJSON}}})],a.prototype,"dateFormat",void 0);b.__decorate([c.property()],a.prototype,"places",
void 0);return a=b.__decorate([c.subclass("esri.widgets.FeatureForm.Format")],a)}(f.JSONSupport)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/accessorSupport/decorators","./ClipArea"],function(f,g,b,c,e){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.type="path";a.path=[];return a}b.__extends(a,d);Object.defineProperty(a.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!1,configurable:!0});b.__decorate([c.property({type:[[[Number]]],json:{write:!0}})],a.prototype,"path",void 0);b.__decorate([c.property({readOnly:!0,dependsOn:["path"]})],
a.prototype,"version",null);return a=b.__decorate([c.subclass("esri.views.layers.support.Path")],a)}(e)});
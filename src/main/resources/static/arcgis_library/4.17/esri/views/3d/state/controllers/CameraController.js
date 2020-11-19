// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../../core/Accessor","../../../../core/accessorSupport/decorators"],function(g,c,e,h,f){Object.defineProperty(c,"__esModule",{value:!0});c.CameraController=c.State=void 0;var d;(function(b){b.Ready="ready";b.Rejected="rejected";b.Running="running";b.Stopped="stopped";b.Finished="finished"})(d=c.State||(c.State={}));g=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.state=d.Ready;return a}e.__extends(a,b);Object.defineProperty(a.prototype,
"active",{get:function(){return this.state===d.Running},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"isInteractive",{get:function(){return!1},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"canStop",{get:function(){return!1},enumerable:!1,configurable:!0});a.prototype.stopController=function(){return this.canStop?(this.state=d.Stopped,!0):!1};a.prototype.finishController=function(){this.state=d.Finished};Object.defineProperty(a.prototype,"steppingFinished",
{get:function(){return!1},enumerable:!1,configurable:!0});e.__decorate([f.property({readOnly:!0,dependsOn:["state"]})],a.prototype,"active",null);e.__decorate([f.property()],a.prototype,"state",void 0);return a=e.__decorate([f.subclass("esri.views.3d.state.controllers.CameraController")],a)}(h);c.CameraController=g});
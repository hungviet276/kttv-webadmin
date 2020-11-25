// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/accessorSupport/decorators ../../../../ViewAnimation ../../../camera/constraintUtils ../AnimationController ../../../webgl-engine/lib/Camera".split(" "),function(e,c,d,f,h,k,l,g){Object.defineProperty(c,"__esModule",{value:!0});c.MomentumController=void 0;e=function(c){function a(b){b=c.call(this,b)||this;b.view=null;b.beginCamera=new g.default;b.elapsedTimeSec=0;b.constraintOptions={selection:15,interactionType:4,interactionFactor:0,interactionStartCamera:new g.default,
interactionDirection:null,tiltMode:0};return b}d.__extends(a,c);a.prototype.initialize=function(){this.constraintOptions.interactionType=this.interactionType;this.viewAnimation=new h};Object.defineProperty(a.prototype,"steppingFinished",{get:function(){return this.momentum.isFinished(this.elapsedTimeSec)},enumerable:!1,configurable:!0});a.prototype.onControllerStart=function(b){this.beginCamera.copyFrom(b);this.constraintOptions.interactionStartCamera=this.beginCamera;c.prototype.onControllerStart.call(this,
b)};a.prototype.stepController=function(b,a){a.copyViewFrom(this.beginCamera);this.elapsedTimeSec+=b;this.momentumStep(this.elapsedTimeSec,a);k.applyAll(this.view,a,this.constraintOptions)};d.__decorate([f.property({constructOnly:!0})],a.prototype,"view",void 0);return a=d.__decorate([f.subclass("esri.views.3d.state.controllers.momentum.MomentumController")],a)}(l.AnimationController);c.MomentumController=e});
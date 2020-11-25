// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/maybe","../../../../core/scheduling"],function(e,d,l,m){Object.defineProperty(d,"__esModule",{value:!0});d.I3SCrossfadeHelper=void 0;e=function(){function b(a){this.view=a;this.currentFrameStartTime=this.preRenderFrameTaskHandle=null;this._numFadingNodes=0}Object.defineProperty(b.prototype,"numFadingNodes",{get:function(){return this._numFadingNodes},enumerable:!1,configurable:!0});b.sign=function(a){return 0===a?1:-1};b.prototype.preRenderCallback=function(){var a=
this.currentFrameStartTime;this.currentFrameStartTime=Date.now();null!==a&&this.updateAllNodeFading(a)};b.prototype.stopNodeFadingInternal=function(a){null!=a.lodCrossfadeTargetTime&&this._numFadingNodes--;a.lodCrossfadeTargetTime=null;0===this.numFadingNodes&&(null!=this.preRenderFrameTaskHandle&&(this.preRenderFrameTaskHandle.remove(),this.preRenderFrameTaskHandle=null),this.view.notifyUpdate())};b.prototype.startNodeFadingInternal=function(a,c,b){var h=this;0===this.numFadingNodes&&(this.preRenderFrameTaskHandle=
m.addFrameTask({preRender:function(){h.preRenderCallback()}}),this.view.notifyUpdate());null==a.lodCrossfadeTargetTime&&this._numFadingNodes++;a.lodCrossfadeDirection=b;a.lodCrossfadeTargetTime=c};b.prototype.updateAllNodeFading=function(a){var c=this;if(this.view){var h=this.currentFrameStartTime,f=this.view.lodCrossfadeDuration,n=void 0!==a&&0<f;this.view.foreachCrossfadeNode(function(f,g){if(l.isSome(g)&&null!=g.lodCrossfadeTargetTime){var d=g.lodCrossfadeTargetTime,k=g.lodCrossfadeDirection,e=
0===k?c.view.fullOpacity:0;!n||h>=d?(c.stopNodeFadingInternal(g),1===k&&c.view.markNodeToRemove(f)):(g=c.view.getNodeOpacityByIndex(f),d=(h-a)/c.view.lodCrossfadeDuration,e=g+b.sign(k)*d);c.view.setNodeOpacityByIndex(f,e)}});this.view.removeMarkedNodes()}};b.prototype.stopAllNodeFading=function(){this.updateAllNodeFading(void 0)};b.prototype.fadeoutNodes=function(a){for(var c=0;c<a.length;++c){var b=a.data[c],f=this.view.getNodeCrossfadeMetaData(b);this.fadeNode(b,f,1)}};b.prototype.fadeNode=function(a,
c,b){l.isSome(c)&&this.fadeNodeInternal(a,c,b)};b.prototype.fadeNodeInternal=function(a,b,d){var c=this.view.isFadingEnabled(),e=0===d?this.view.fullOpacity:0;c?(a=this.view.getNodeOpacityByIndex(a),this.startNodeFadingInternal(b,this.currentFrameStartTime+this.view.lodCrossfadeDuration*Math.abs(e-a),d)):(this.stopNodeFadingInternal(b),this.view.setNodeOpacityByIndex(a,e))};return b}();d.I3SCrossfadeHelper=e});
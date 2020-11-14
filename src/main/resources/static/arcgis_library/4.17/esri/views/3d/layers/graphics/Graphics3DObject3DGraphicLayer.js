// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/maybe ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ./featureExpressionInfoUtils ./graphicUtils".split(" "),function(h,E,z,l,v,n,f,B,C){function A(c){return c.isVisible?c.getParameters().transparent?1:2:0}h=function(){function c(b,a,r,w,p,d,e,f,g){this.uniqueGeometries=r;this.uniqueMaterials=w;this.uniqueTextures=p;this.elevationAligner=d;this.elevationContext=e;this._edgeState=
f;this.type="object3d";this.stage=this.stageLayer=null;this._addedToStage=this._visible=!1;this.alignedSampledElevation=0;this.needsElevationUpdates=!1;this.graphics3DSymbolLayer=b;this.stageObject=a;this.visibilityMode=null!=g?g:c.VisibilityModes.HIDE_FACERANGE}Object.defineProperty(c.prototype,"isElevationSource",{get:function(){return!(!this.stageObject.metadata||!this.stageObject.metadata.isElevationSource)},enumerable:!1,configurable:!0});c.prototype.initialize=function(b,a){this.stageLayer=
a;this.stage=b;if(this.uniqueMaterials)for(a=0;a<this.uniqueMaterials.length;a++)b.add(3,this.uniqueMaterials[a]);if(this.uniqueGeometries)for(a=0;a<this.uniqueGeometries.length;a++)b.add(2,this.uniqueGeometries[a]);if(this.uniqueTextures)for(a=0;a<this.uniqueTextures.length;a++)b.add(4,this.uniqueTextures[a]);b.add(1,this.stageObject)};c.prototype.layerOpacityChanged=function(b,a){if(!l.isNone(this._edgeState)){for(var c=A(this._edgeState.baseMaterial),e=!1,p=0,d=this._edgeState.edgeMaterials;p<
d.length;p++){var f=d[p];f.objectTransparency!==c&&(f.objectTransparency=c,e=!0)}e&&this.resetEdgeObject(a);this.stage.renderView.ensureEdgeView().updateAllComponentOpacities(this.stageObject,[b])}};c.prototype.slicePlaneEnabledChanged=function(b,a){l.isNone(this._edgeState)||(this.stage.renderView.ensureEdgeView().updateAllComponentMaterials(this.stageObject,this._edgeState.edgeMaterials,{slicePlaneEnabled:b},!a),this._edgeState.slicePlaneEnabled=b)};c.prototype.setVisibility=function(b){if(null!=
this.stage){if(this._visible===b)return!1;(this._visible=b)?this._addedToStage?this.stageObject.setVisible(!0):(this.stageLayer.addObject(this.stageObject),this._addedToStage=!0):this.visibilityMode===c.VisibilityModes.HIDE_FACERANGE?this.stageObject.setVisible(!1):(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1);if(l.isSome(this._edgeState)){var a=this.stage.renderView.ensureEdgeView();a.hasObject(this.stageObject)?a.updateObjectVisibility(this.stageObject,b):b&&this.addOrUpdateEdgeObject(a,
!1)}return!0}};Object.defineProperty(c.prototype,"visible",{get:function(){return this._visible},enumerable:!1,configurable:!0});c.prototype.destroy=function(){var b=this.stage;if(this.stageLayer){if(this.uniqueMaterials)for(var a=0;a<this.uniqueMaterials.length;a++)b.remove(3,this.uniqueMaterials[a].id);if(this.uniqueGeometries)for(a=0;a<this.uniqueGeometries.length;a++)b.remove(2,this.uniqueGeometries[a].id);if(this.uniqueTextures)for(a=0;a<this.uniqueTextures.length;a++)b.remove(4,this.uniqueTextures[a].id)}b.remove(1,
this.stageObject.id);this._addedToStage&&(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1);b=this.stage.renderView.ensureEdgeView();b.hasObject(this.stageObject)&&b.removeObject(this.stageObject);this.stageObject.dispose();this._visible=!1;this.stage=this.stageLayer=null};c.prototype.alignWithElevation=function(b,a,c,e){null!=this.elevationAligner&&(l.isSome(c)&&B.setContextFeature(this.elevationContext.featureExpressionInfoContext,c),b=this.elevationAligner(this,this.elevationContext,
b,a),null!=b&&(this.alignedSampledElevation=b),this.resetEdgeObject(e))};c.prototype.getBSRadius=function(){return this.stageObject.getBSRadius()};c.prototype.getCenterObjectSpace=function(b){void 0===b&&(b=n.vec3f64.create());return v.vec3.copy(b,this.stageObject.getCenter(!0))};c.prototype.getBoundingBoxObjectSpace=function(b){void 0===b&&(b=f.create());var a=this.stageObject;b||(b=f.create());f.setMin(b,a.getBBMin(!0));f.setMax(b,a.getBBMax(!0));return b};c.prototype.computeAttachmentOrigin=function(b){for(var a=
0,c=this.stageObject.geometryRecords;a<c.length;a++)c[a].computeAttachmentOrigin(e)&&(v.vec3.transformMat4(e,e,this.stageObject.objectTransformation),v.vec3.add(b.render.origin,b.render.origin,e),b.render.num++)};c.prototype.getProjectedBoundingBox=function(b,a,c,l,p){return z.__awaiter(this,void 0,void 0,function(){var d,r,h,g,x,y,k,n,t,w;return z.__generator(this,function(u){switch(u.label){case 0:d=this.getBoundingBoxObjectSpace(p);r=D;h=f.isPoint(d)?1:r.length;for(g=0;g<h;g++)x=r[g],m[0]=d[x[0]],
m[1]=d[x[1]],m[2]=d[x[2]],v.vec3.transformMat4(m,m,this.stageObject.objectTransformation),q[3*g+0]=m[0],q[3*g+1]=m[1],q[3*g+2]=m[2];if(!b(q,0,h))return[2,null];f.empty(d);y=null;this.calculateRelativeScreenBounds&&(y=this.calculateRelativeScreenBounds());for(g=0;g<3*h;g+=3){for(k=0;3>k;k++)d[k]=Math.min(d[k],q[g+k]),d[k+3]=Math.max(d[k+3],q[g+k]);y&&c.push({location:q.slice(g,g+3),screenSpaceBoundingRect:y})}if(!a||!a.service||"absolute-height"===this.elevationContext.mode)return[3,5];f.center(d,
e);n="relative-to-scene"===this.elevationContext.mode?"scene":"ground";t=void 0;if(!a.useViewElevation)return[3,1];t=a.service.getElevation(e[0],e[1],n);return[3,4];case 1:return u.trys.push([1,3,,4]),w=C.demResolutionForBoundingBox(d,a),[4,a.service.queryElevation(e[0],e[1],l,w,n)];case 2:return t=u.sent(),[3,4];case 3:return u.sent(),t=null,[3,4];case 4:f.offset(d,0,0,-this.alignedSampledElevation+t),u.label=5;case 5:return[2,d]}})})};c.prototype.addObjectState=function(b,a){0===b&&a.addObject(this.stageObject,
this.stageObject.highlight());1===b&&a.addObject(this.stageObject,this.stageObject.occlude())};c.prototype.removeObjectState=function(b){b.removeObject(this.stageObject)};c.prototype.resetEdgeObject=function(b){if(!l.isNone(this._edgeState)){var a=this.stage.renderView.ensureEdgeView();this._visible?this.addOrUpdateEdgeObject(a,b):a.removeObject(this.stageObject)}};c.prototype.addOrUpdateEdgeObject=function(b,a){var c=this._edgeState;if(!l.isNone(c)){for(var e=A(c.baseMaterial),f=0,d=c.edgeMaterials;f<
d.length;f++)d[f].objectTransparency=e;b.addOrUpdateObject(this.stageObject,c.edgeMaterials,{slicePlaneEnabled:c.slicePlaneEnabled},!a,c.addObjectSettings)}};return c}();(function(c){c=c.VisibilityModes||(c.VisibilityModes={});c[c.REMOVE_OBJECT=0]="REMOVE_OBJECT";c[c.HIDE_FACERANGE=1]="HIDE_FACERANGE"})(h||(h={}));var q=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],m=n.vec3f64.create(),e=n.vec3f64.create(),D=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];return h});
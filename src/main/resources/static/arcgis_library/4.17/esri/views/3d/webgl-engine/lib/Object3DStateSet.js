// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./IdGen"],function(e,d,f){Object.defineProperty(d,"__esModule",{value:!0});d.Object3DStateSet=d.generateObject3DStateId=void 0;var g=new f.IdGen;d.generateObject3DStateId=function(a){return{id:g.gen(0===a?"highlight":"occludee"),channel:a}};e=function(){function a(){this.items=[]}a.prototype.addObject=function(c,b){this.items.push({type:0,objectStateId:b,object:c})};a.prototype.addRenderGeometry=function(c,b,a){this.items.push({type:1,objectStateId:b,renderGeometry:c,
owner:a})};a.prototype.addExternal=function(c,b){this.items.push({type:2,objectStateId:b,remove:c})};a.prototype.remove=function(c){for(var b=this.items.length-1;0<=b;--b){var a=this.items[b];a.objectStateId===c&&(this._removeObjectStateItem(a),this.items.splice(b,1))}};a.prototype.removeObject=function(c){for(var b=this.items.length-1;0<=b;--b){var a=this.items[b];0===a.type&&a.object===c&&(this._removeObjectStateItem(a),this.items.splice(b,1))}};a.prototype.removeRenderGeometry=function(c){for(var b=
this.items.length-1;0<=b;--b){var a=this.items[b];1===a.type&&a.renderGeometry===c&&(this._removeObjectStateItem(a),this.items.splice(b,1))}};a.prototype.removeAll=function(){var c=this;this.items.forEach(function(a){c._removeObjectStateItem(a)});this.items=[]};a.prototype._removeObjectStateItem=function(a){switch(a.type){case 0:0===a.objectStateId.channel?a.object.removeHighlight(a.objectStateId):1===a.objectStateId.channel&&a.object.removeOcclude(a.objectStateId);break;case 1:a.owner.removeRenderGeometryObjectState(a.renderGeometry,
a.objectStateId);break;case 2:a.remove(a.objectStateId)}};return a}();d.Object3DStateSet=e});
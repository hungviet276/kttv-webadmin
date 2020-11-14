// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/maybe ./VisualElement ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Layer ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/Texture".split(" "),function(g,e,h,f,k,l,m,n,p){Object.defineProperty(e,"__esModule",{value:!0});e.Object3DVisualElement=void 0;g=function(e){function b(a){a=e.call(this,a)||this;a._resources=null;return a}h.__extends(b,e);Object.defineProperty(b.prototype,"object",{get:function(){return f.isSome(this._resources)?this._resources.object:
null},enumerable:!1,configurable:!0});b.prototype.recreate=function(){this.attached&&this.createResources()};b.prototype.recreateGeometry=function(){if(!f.isNone(this._resources)){var a=this._resources.object,c=this.view._stage;a.geometries.forEach(function(a){c.remove(2,a.id)});a.removeAllGeometries();this.createGeometries(a);a.geometries.forEach(function(a){c.add(2,a)})}};b.prototype.createResources=function(){var a=this;this.destroyResources();var c=this.view._stage;if(c){var d=new m("element",
{isPickable:!1});c.add(0,d);c.addToViewContent([d.id]);var b=new n({idHint:"element",castShadow:!1});this.createExternalResources();this.createGeometries(b);b.geometries.forEach(function(a){c.add(2,a)});this.forEachExternalResource(function(b){c.add(a._contentTypeFromResource(b),b)});c.add(1,b);d.addObject(b);this.visible||b.setVisible(!1);this._resources={layer:d,object:b}}};b.prototype._contentTypeFromResource=function(a){return a instanceof l?2:a instanceof p?4:3};b.prototype.destroyResources=
function(){var a=this;if(!f.isNone(this._resources)){var b=this.view._stage;b.remove(1,this._resources.object.id);b.remove(0,this._resources.layer.id);this.forEachExternalResource(function(d){b.remove(a._contentTypeFromResource(d),d.id);d.dispose()});this._resources.object.geometries.forEach(function(a){b.remove(2,a.id)});this._resources.object.dispose();this.destroyExternalResources();this._resources=null}};b.prototype.updateVisibility=function(a){f.isNone(this._resources)||this._resources.object.setVisible(a)};
return b}(k.VisualElement);e.Object3DVisualElement=g});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./WGLDisplayList","./WGLDisplayObject","./util/serializationUtils"],function(h,g,l,m,n){function k(b){for(var a=[[],[],[],[],[]],c=0;c<b.length;c++)for(var d=0,e=b[c].displayRecords;d<e.length;d++){var f=e[d];a[f.geometryType].push(f)}return a}Object.defineProperty(g,"__esModule",{value:!0});g.groupRecordsByGeometryType=void 0;g.groupRecordsByGeometryType=k;h=function(){function b(){}Object.defineProperty(b.prototype,"hasRegistry",{get:function(){return!!this._displayObjectRegistry},
enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"displayObjectRegistry",{get:function(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map;for(var a=0,c=this.displayObjects;a<c.length;a++){var d=c[a];this._displayObjectRegistry.set(d.id,d)}}return this._displayObjectRegistry},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"displayList",{get:function(){return this._displayList},enumerable:!1,configurable:!0});b.prototype.computeDisplayList=function(a){this._displayList=
new l(a);if(a){a=0;for(var c=this.displayObjects;a<c.length;a++)for(var d=0,b=c[a].displayRecords;d<b.length;d++)this._displayList.addToList(b[d])}else for(a=k(this.displayObjects),c=a.length,d=0;d<c;++d)this._displayList.addToList(a[d])};b.prototype.clone=function(){var a=new b;this.displayObjects&&(a.displayObjects=this.displayObjects.map(function(a){return a.clone()}));return a};b.prototype.serialize=function(a){n.serializeList(a,this.displayObjects);return a};b.prototype._deserializeObjects=function(a){for(var c=
a.readInt32(),c=Array(c),b=new Map,e=0;e<c.length;++e){var f=m.deserialize(a);c[e]=f;b.set(f.id,f)}this.displayObjects=c;this._displayList=null;this._displayObjectRegistry=b};b.deserialize=function(a){var c=new b;c._deserializeObjects(a);return c};return b}();g.default=h});
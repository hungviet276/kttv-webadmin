// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/arrayUtils","../../../../core/MapUtils","./Util"],function(w,x,u,v,q){return function(){function d(a){this._residentGeomRecords=new Map;this._dirtyGeomRecords=new Map;this._model=a}Object.defineProperty(d.prototype,"residentLayerCount",{get:function(){return this._residentGeomRecords.size},enumerable:!1,configurable:!0});Object.defineProperty(d.prototype,"residentObjectCount",{get:function(){var a=0;this._residentGeomRecords.forEach(function(b){a+=b.size});
return a},enumerable:!1,configurable:!0});d.prototype.hasDirtyGeometryRecords=function(){return v.someMap(this._dirtyGeomRecords,function(a){return v.someMap(a,function(a){return a&&0<a.size})})};d.prototype.handleUpdate=function(a,b,c){q.assert(this[b],"ModelDirtySet doesn't know how to process "+b);return this[b](a,c)};d.prototype.shaderTransformationChanged=function(a){var b=this;(a=this._residentGeomRecords.get(a.id))&&a.forEach(function(a,g){(g=b._model.get(1,g))&&g.hasVolativeTransformation()&&
a.forEach(function(a){var b=0;for(a=a[1];b<a.length;b++)a[b].shaderTransformationChanged()})})};d.prototype.commit=function(){return this.commitLayers(u.keysOfMap(this._dirtyGeomRecords))};d.prototype.commitLayers=function(a){for(var b=this,c=[],g=[],d=[],e=function(h){var e=a[h];h=f._dirtyGeomRecords.get(e);if(!h)return"continue";h.forEach(function(a,h){var f=b._ensureGeomRecord(e,h);a.forEach(function(a,e){var l=a[0],n=a[1];a=a[2];var m=!1;if(n&2){var k=f.get(e);if(k){k=k[1];if(a&4)for(var p=b._model.get(1,
h),r=0;r<k.length;r++){var t=k[r];if(b._model.updateRenderGeometryTransformation(p,l,t)){m=!0;break}}if(!m)for(p=0;p<k.length;p++)t=k[p],d.push({renderGeometry:t,updateType:a})}else q.assert(!1,"ModelDirtySet.getAddRemoveListFilteredByLayers: invalid update")}if(n&4||m)(k=f.get(e))?g.push.apply(g,k[1]):4===n&&q.assert(!1,"ModelDirtySet.getAddRemoveListFilteredByLayers: invalid remove"),k&&f.delete(e);if(n&1||m)n=[l,[]],p=b._model.get(1,h),b._model.getGeometryRenderGeometries(p,l,n[1]),c.push.apply(c,
n[1]),f.set(e,n)});0===f.size&&b._residentGeomRecords.get(e).delete(h)});0===f._residentGeomRecords.get(e).size&&f._residentGeomRecords.delete(e);f._dirtyGeomRecords.delete(e)},f=this,l=0;l<a.length;l++)e(l);return[c,g,d]};d.prototype.getResidentRenderGeometries=function(){return this.getResidentRenderGeometriesFilteredByLayers(u.keysOfMap(this._residentGeomRecords))};d.prototype.getResidentRenderGeometriesFilteredByLayers=function(a){for(var b=[],c=0;c<a.length;c++){var d=this._residentGeomRecords.get(a[c]);
d&&d.forEach(function(a){a.forEach(function(a){b.push.apply(b,a[1])})})}return b};d.prototype._objectStateChanged=function(a,b,c,d){if(null!=c)this._componentPropertyChanged(b,c,d,a);else{c=0;for(var g=b.geometryRecords;c<g.length;c++)this._componentPropertyChanged(b,g[c],d,a)}};d.prototype.visibilityChanged=function(a,b,c){this._objectStateChanged(1,a,b,c)};d.prototype.highlightChanged=function(a,b,c){this._objectStateChanged(8,a,b,c)};d.prototype.occlusionChanged=function(a,b,c){this._objectStateChanged(16,
a,b,c)};d.prototype.vertexAttrsUpdated=function(a,b,c){this._updateOrCreateDirtyRecord(a,b,c,2,0,0,2,5,2)};d.prototype.layerAdded=function(a){for(var b=a.getObjects(),c=0;c<b.length;c++)this.layerObjectAdded(a,b[c])};d.prototype.layerRemoved=function(a){for(var b=a.getObjects(),c=0;c<b.length;c++)this.layerObjectRemoved(a,b[c])};d.prototype.layerObjectAdded=function(a,b){a=a.id;for(var c=b.geometryRecords,d=0;d<c.length;d++)this.objGeometryAdded(b,c[d],a)};d.prototype.layerObjectRemoved=function(a,
b){a=a.id;for(var c=b.geometryRecords,d=0;d<c.length;d++)this.objGeometryRemoved(b,c[d],a)};d.prototype.layObjectReplaced=function(a,b){this.layerObjectRemoved(a,b[0]);this.layerObjectAdded(a,b[1])};d.prototype.objTransformation=function(a,b){var c=this;b=b||this._getParentLayerId(a);this._ensureGeomRecord(b,a.id).forEach(function(d){c._updateOrCreateDirtyRecord(a,d[0],b,2,0,0,2,5,4)})};d.prototype.objGeometryAdded=function(a,b,c){this._updateOrCreateDirtyRecord(a,b,c,1,4,0,0,0)};d.prototype.objGeometryRemoved=
function(a,b,c){this._updateOrCreateDirtyRecord(a,b,c,4,1,2,0,0)};d.prototype._componentPropertyChanged=function(a,b,c,d){this._updateOrCreateDirtyRecord(a,b,c,2,0,0,2,5,d)};d.prototype._updateOrCreateDirtyRecord=function(a,b,c,d,h,e,f,l,m){c=c||this._getParentLayerId(a);var g=b.id;a=this._ensureDirtyRecord(c,a.id);(c=a.get(g))?(b=c[1],b&h?a.delete(g):b&e?(c[1]=d,c[2]=m):b&f?c[2]|=m:b&l||q.assert(!1,"ModelDirtySet.objGeometryAdded: inconsistent state")):a.set(g,[b,d,m])};d.prototype._ensureGeomRecord=
function(a,b){var c=this._residentGeomRecords.get(a);c||(c=new Map,this._residentGeomRecords.set(a,c));a=c.get(b);a||(a=new Map,c.set(b,a));return a};d.prototype._ensureDirtyRecord=function(a,b){var c=this._dirtyGeomRecords.get(a);c||(c=new Map,this._dirtyGeomRecords.set(a,c));a=c.get(b);a||(a=new Map,c.set(b,a));return a};d.prototype._getParentLayerId=function(a){return a.parentLayer.id};d.prototype.formatDebugInfo=function(){var a=["ADD","UPD",void 0,"REM"],b="";this._dirtyGeomRecords.forEach(function(c,
d){c.forEach(function(c,e){0<b.length&&(b+="\n");b+=d+"."+e;var f=[];c.forEach(function(a){var b=a[1];f[b]||(f[b]=[]);f[b].push(a[0].geometry.id)});for(c=0;c<f.length;c++)if(f[c])for(b+=" "+a[c-1]+": ",e=0;e<f[c].length;e++)b+=f[c][e]+", "})});return b};return d}()});
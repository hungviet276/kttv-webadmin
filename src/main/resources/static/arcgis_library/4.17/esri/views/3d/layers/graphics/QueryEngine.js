// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../geometry ../../../../core/Accessor ../../../../core/maybe ../../../../core/accessorSupport/decorators ../../../../geometry/Extent ../../../../layers/graphics/data/QueryEngine ../../../../tasks/support/FeatureSet ../../../../tasks/support/Query".split(" "),function(k,f,b,n,p,q,g,r,t,l,u){Object.defineProperty(f,"__esModule",{value:!0});f.QueryEngine=void 0;var v=t.default;k=function(f){function a(c){c=f.call(this,c)||this;c._dataQueryEngineInstance=null;return c}
b.__extends(a,f);Object.defineProperty(a.prototype,"queryGeometryType",{get:function(){switch(this.layer.geometryType){case "multipoint":case "point":case "polygon":case "polyline":return this.layer.geometryType;case "mesh":return"polygon"}},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"defaultQueryJSON",{get:function(){return(new u({outSpatialReference:this.spatialReference})).toJSON()},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"dataQueryEngine",{get:function(){return this.ensureDataQueryEngine()},
enumerable:!1,configurable:!0});a.prototype.destroy=function(){this.clear()};a.prototype.clear=function(){return this._dataQueryEngineInstance?(this._dataQueryEngineInstance.destroy(),this._dataQueryEngineInstance=null,!0):!1};a.prototype.executeQueryForIdSet=function(c,a){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(b){return[2,this.dataQueryEngine.executeQueryForIdSet(this._ensureQueryJSON(c),a)]})})};a.prototype.executeQueryForCount=function(a,h){return b.__awaiter(this,
void 0,void 0,function(){return b.__generator(this,function(c){return[2,this.dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(a),h)]})})};a.prototype.executeQueryForExtent=function(a,h){return b.__awaiter(this,void 0,void 0,function(){var c,d,e,m;return b.__generator(this,function(b){switch(b.label){case 0:return[4,this.dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(a),h)];case 1:return c=b.sent(),d=c.count,e=c.extent,m=r.fromJSON(e),[2,{count:d,extent:m}]}})})};a.prototype.executeQueryForIds=
function(a,h){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(b){return[2,this.dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(a),h)]})})};a.prototype.executeQueryForLatestObservations=function(a,h){return b.__awaiter(this,void 0,void 0,function(){var c,d,e=this;return b.__generator(this,function(b){switch(b.label){case 0:return[4,this.dataQueryEngine.executeQueryForLatestObservations(this._ensureQueryJSON(a),h)];case 1:return c=b.sent(),d=l.fromJSON(c),
d.features.forEach(function(a){a.layer=e.layer;a.sourceLayer=e.layer}),[2,d]}})})};a.prototype.executeQuery=function(a,h){return b.__awaiter(this,void 0,void 0,function(){var c,d,e=this;return b.__generator(this,function(b){switch(b.label){case 0:return[4,this.dataQueryEngine.executeQuery(this._ensureQueryJSON(a),h)];case 1:return c=b.sent(),d=l.fromJSON(c),d.features.forEach(function(a){a.layer=e.layer;a.sourceLayer=e.layer}),[2,d]}})})};a.prototype._ensureQueryJSON=function(a){if(q.isNone(a))return this.defaultQueryJSON;
"outSpatialReference"in a&&!a.outSpatialReference&&(a.outSpatialReference=this.spatialReference);return a.toJSON()};a.prototype.ensureDataQueryEngine=function(){if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;var a="timeInfo"in this.layer&&this.layer.timeInfo&&this.layer.timeInfo.toJSON()||null,b=this.layer.objectIdField,f=n.featureGeometryTypeKebabDictionary.toJSON(this.queryGeometryType),d=this.layer.fields.map(function(a){return a.toJSON()}),e=this.layerView.view.resourceController.scheduler,
g=this.task,k=this.spatialReference.toJSON(),l=this.layerView;return this._dataQueryEngineInstance=new v({hasZ:l.hasZ,hasM:l.hasM,geometryType:f,fields:d,timeInfo:a,spatialReference:k,objectIdField:b,featureStore:this.layerView.graphics3d.graphicsCore.featureStore,scheduler:e,task:g})};b.__decorate([g.property({constructOnly:!0})],a.prototype,"layerView",void 0);b.__decorate([g.property({constructOnly:!0})],a.prototype,"task",void 0);b.__decorate([g.property({readOnly:!0,aliasOf:"layerView.view.spatialReference"})],
a.prototype,"spatialReference",void 0);b.__decorate([g.property({readOnly:!0,aliasOf:"layerView.layer"})],a.prototype,"layer",void 0);b.__decorate([g.property({readOnly:!0,dependsOn:["layer.geometryType"]})],a.prototype,"queryGeometryType",null);b.__decorate([g.property({readOnly:!0,dependsOn:["spatialReference"]})],a.prototype,"defaultQueryJSON",null);return a=b.__decorate([g.subclass("esri.views.3d.layers.graphics.QueryEngine")],a)}(p);f.QueryEngine=k;f.default=k});
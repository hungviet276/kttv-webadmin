// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../sources/Empty ../support/FeatureSet ../support/IdSet ../support/shared ../../../core/promiseUtils ../../../geometry/geometryEngineAsync".split(" "),function(r,t,q,h,e,n,l,m,g){return function(p){function c(a){var b=p.call(this,a)||this;b._relation="";b._relationGeom=null;b._relationString="";b.declaredClass="esri.arcade.featureset.actions.SpatialFilter";b._relationString=a.relationString;b._parent=a.parentfeatureset;b._maxProcessing=40;b._relation=a.relation;b._relationGeom=
a.relationGeom;return b}q.__extends(c,p);c.prototype._getSet=function(a){var b=this;return null===this._wset?this._ensureLoaded().then(function(){return b._parent._getFilteredSet("esriSpatialRelRelation"!==b._relation?b._relation:b._relation+":"+b._relationString,b._relationGeom,null,null,a)}).then(function(c){b._checkCancelled(a);b._wset=new n(c._candidates.slice(0),c._known.slice(0),c._ordered,b._clonePageDefinition(c.pagesDefinition));return b._wset}):m.resolve(this._wset)};c.prototype._isInFeatureSet=
function(a){var b=this._parent._isInFeatureSet(a);if(b===l.IdState.NotInFeatureSet)return b;b=this._idstates[a];return void 0===b?l.IdState.Unknown:b};c.prototype._getFeature=function(a,b,c){return this._parent._getFeature(a,b,c)};c.prototype._getFeatures=function(a,b,c,k){return this._parent._getFeatures(a,b,c,k)};c.prototype._featureFromCache=function(a){return this._parent._featureFromCache(a)};c.prototype.executeSpatialRelationTest=function(a){if(null===a.geometry)return m.resolve(!1);switch(this._relation){case "esriSpatialRelEnvelopeIntersects":var b=
l.shapeExtent(this._relationGeom);a=l.shapeExtent(a.geometry);return g.intersects(b,a);case "esriSpatialRelIntersects":return g.intersects(this._relationGeom,a.geometry);case "esriSpatialRelContains":return g.contains(this._relationGeom,a.geometry);case "esriSpatialRelOverlaps":return g.overlaps(this._relationGeom,a.geometry);case "esriSpatialRelWithin":return g.within(this._relationGeom,a.geometry);case "esriSpatialRelTouches":return g.touches(this._relationGeom,a.geometry);case "esriSpatialRelCrosses":return g.crosses(this._relationGeom,
a.geometry);case "esriSpatialRelRelation":return g.relate(this._relationGeom,a.geometry,this._relationString)}};c.prototype._fetchAndRefineFeatures=function(a,b,c){var k=this,f=new n([],a,!1,null),d=Math.min(b,a.length);return this._parent._getFeatures(f,-1,d,c).then(function(){k._checkCancelled(c);for(var b=[],f=0;f<d;f++){var e=k._parent._featureFromCache(a[f]);b.push(k.executeSpatialRelationTest(e))}return m.all(b)}).then(function(c){for(var d=0;d<b;d++)k._idstates[a[d]]=!0===c[d]?l.IdState.InFeatureSet:
l.IdState.NotInFeatureSet;return"success"})};c.prototype._getFilteredSet=function(a,b,c,k,f){var d=this;return this._ensureLoaded().then(function(){return d._parent._getFilteredSet("esriSpatialRelRelation"!==d._relation?d._relation:d._relation+":"+d._relationString,d._relationGeom,c,k,f)}).then(function(a){d._checkCancelled(f);return null!==b?new n(a._candidates.slice(0).concat(a._known.slice(0)),[],a._ordered,d._clonePageDefinition(a.pagesDefinition)):new n(a._candidates.slice(0),a._known.slice(0),
a._ordered,d._clonePageDefinition(a.pagesDefinition))})};c.prototype._stat=function(a,b,c,k,f,d,e){var h=this;return""!==c?m.resolve({calculated:!1}):this._parent._stat(a,b,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,f,d,e).then(function(g){return!1===g.calculated?null===f&&""===c&&null===k?h._manualStat(a,b,d,e):{calculated:!1}:g})};c.prototype._canDoAggregates=function(a,b,c,e,f){return""!==c||null!==e||null===this._parent?
m.resolve(!1):this._parent._canDoAggregates(a,b,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,f)};c.prototype._getAggregatePagesDataSourceDefinition=function(a,b,c,e,f,d,g){return null===this._parent?m.reject(Error("Should never be called")):this._parent._getAggregatePagesDataSourceDefinition(a,b,"esriSpatialRelRelation"!==this._relation?this._relation:this._relation+":"+this._relationString,this._relationGeom,f,d,g)};c.registerAction=
function(){e._featuresetFunctions.intersects=function(a){return null===a||void 0===a?new h({parentfeatureset:this}):new c({parentfeatureset:this,relation:"esriSpatialRelIntersects",relationGeom:a})};e._featuresetFunctions.envelopeIntersects=function(a){return null===a||void 0===a?new h({parentfeatureset:this}):new c({parentfeatureset:this,relation:"esriSpatialRelEnvelopeIntersects",relationGeom:a})};e._featuresetFunctions.contains=function(a){return null===a||void 0===a?new h({parentfeatureset:this}):
new c({parentfeatureset:this,relation:"esriSpatialRelContains",relationGeom:a})};e._featuresetFunctions.overlaps=function(a){return null===a||void 0===a?new h({parentfeatureset:this}):new c({parentfeatureset:this,relation:"esriSpatialRelOverlaps",relationGeom:a})};e._featuresetFunctions.within=function(a){return null===a||void 0===a?new h({parentfeatureset:this}):new c({parentfeatureset:this,relation:"esriSpatialRelWithin",relationGeom:a})};e._featuresetFunctions.touches=function(a){return null===
a||void 0===a?new h({parentfeatureset:this}):new c({parentfeatureset:this,relation:"esriSpatialRelTouches",relationGeom:a})};e._featuresetFunctions.crosses=function(a){return null===a||void 0===a?new h({parentfeatureset:this}):new c({parentfeatureset:this,relation:"esriSpatialRelCrosses",relationGeom:a})};e._featuresetFunctions.relate=function(a,b){return null===a||void 0===a?new h({parentfeatureset:this}):new c({parentfeatureset:this,relation:"esriSpatialRelRelation",relationGeom:a,relationString:b})}};
return c}(e)});
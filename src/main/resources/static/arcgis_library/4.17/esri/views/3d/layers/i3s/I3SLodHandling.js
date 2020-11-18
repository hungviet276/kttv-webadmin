// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/maybe","../../../../core/PooledArray"],function(m,p,g,n){m=function(){function b(a){this.layerView=a;this._lodGlobalDirty=!1}b.prototype.startNodeLoading=function(a,c,e,b){this._maxLodLevel=b.maxLodLevel;this._index=e;this._isNodeInScaleBounds=a;this._removeNodes=c};b.prototype.shouldLoadNode=function(a){if(g.isNone(a))return!1;var c=this._index.nodeTraversalState(a);return this.isChosenMaxLOD(c)?!0:c.isChosen?this._childrenRequireLoading(a):!1};b.prototype.setLodGlobalDirty=
function(){this._lodGlobalDirty=!0};Object.defineProperty(b.prototype,"requiresLODGlobalHandling",{get:function(){return null!=this._index&&!0===this._lodGlobalDirty},enumerable:!1,configurable:!0});b.prototype.lodGlobalHandling=function(a){if(!this.requiresLODGlobalHandling)return!1;var c=Math.max(0,Math.floor(10*(this.layerView.view.resourceController.memoryController.usedMemory-1)));d.clear();this._lodGlobalHandlingRecursion(this._index.rootNode,c);c=d.length;this._removeNodes(d,a);a=d.length<
c;0===d.length&&(this._lodGlobalDirty=!1);d.clear();return a};b.prototype._lodGlobalHandlingRecursion=function(a,c){if(g.isNone(a))return!1;var e=this._index.nodeTraversalState(a),b=this.isChosenMaxLOD(e);if(e=this.layerView.isNodeLoaded(a.index)){if(b)return this._removeChildrenRecursive(a),this.layerView.updateNodeState(a.index,1),this.layerView.fadeNode&&this.layerView.fadeNode(a.index,0),!0;this.layerView.updateNodeState(a.index,0)}var f=!1;if(0<a.childCount)for(var f=!0,h=0;h<a.childCount;h++){var k=
this._index.getChildIndex(a,h),l=this._index.getNode(k);g.isSome(l)?this._index.isGeometryVisible(k)&&!this._lodGlobalHandlingRecursion(l,c)&&this._isNodeInScaleBounds(l)&&(f=!1):this._index.isNodeVisible(k)&&(f=!1)}e&&!b&&(f||d.length<c)&&(d.push(a.index),e=!1);a=!a.resources.hasFeatureData;return f||e||a};b.prototype._removeChildrenRecursive=function(a){this._index.traverseChildren(a,function(a){d.push(a.index);return!0})};b.prototype.childrenEmpty=function(a){var c=this,b=!0;this._index.traverseChildren(a,
function(a){return b&&c._index.isNodeVisible(a.index)?c.layerView.isNodeLoaded(a.index)?b=!1:!0:!1});return b};b.prototype._childrenRequireLoading=function(a){var b=this,e=!1,d=!0;this._index.traverseChildren(a,function(a){if(!d||!b._index.isNodeVisible(a.index))return!1;var c=b._index.nodeTraversalState(a);b.isChosenMaxLOD(c)&&b._index.isGeometryVisible(a.index)&&(e=!0);return b.layerView.isNodeLoaded(a.index)?d=!1:!0});return d&&e};b.prototype.isChosenMaxLOD=function(a){return a.isChosen&&(!a.nodeHasLOD||
a.lodLevel===this._maxLodLevel)};return b}();var d=new n({deallocator:null});return m});
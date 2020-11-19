// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../support/WorkerHandle"],function(c,a,d,e){Object.defineProperty(a,"__esModule",{value:!0});a.I3SPointsWorkerHandle=void 0;c=function(a){function b(b){return a.call(this,"SceneLayerWorker","dracoDecompressPointCloudData",b)||this}d.__extends(b,a);b.prototype.getTransferList=function(a){return[a.geometryBuffer]};return b}(e.WorkerHandle);a.I3SPointsWorkerHandle=c});
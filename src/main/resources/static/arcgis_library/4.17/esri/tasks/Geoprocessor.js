// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../request ../core/compilerUtils ../core/promiseUtils ../core/accessorSupport/decorators ../geometry/Extent ../geometry/SpatialReference ../geometry/support/normalizeUtils ../layers/support/Field ../layers/support/MapImage ./Task ./support/DataFile ./support/FeatureSet ./support/GPMessage ./support/JobInfo ./support/LinearUnit ./support/ParameterValue ./support/RasterData @dojo/framework/shim/Promise".split(" "),function(C,I,d,n,r,h,g,D,w,E,x,y,F,t,u,G,p,z,H,A){return function(B){function c(b){b=
B.call(this,b)||this;b._timers=new Map;b.outSpatialReference=null;b.processExtent=null;b.processSpatialReference=null;b.returnFeatureCollection=!1;b.returnM=!1;b.returnZ=!1;return b}d.__extends(c,B);c.prototype.destroy=function(){this._timers.forEach(function(b){clearInterval(b)})};c.prototype.cancelJob=function(b,e){var a=this.parsedUrl.path;e=d.__assign(d.__assign(d.__assign({},this.requestOptions),e),{query:{f:"json"}});this._clearTimer(b);return n(a+"/jobs/"+b+"/cancel",e).then(function(a){return p.fromJSON(a.data)})};
c.prototype.checkJobStatus=function(b,e){var a=this.parsedUrl.path;e=d.__assign(d.__assign(d.__assign({},this.requestOptions),e),{query:{f:"json"}});return n(a+"/jobs/"+b,e).then(function(a){return p.fromJSON(a.data)})};c.prototype.execute=function(b,e){var a=this;return this._constructRequest("execute",b,e).then(function(b){var e=b.data.messages||[];return{results:(b.data.results||[]).map(a._decode),messages:e.map(function(a){return G.fromJSON(a)})}})};c.prototype.getResultData=function(b,e,a){var f=
this,k=this.parsedUrl.path,c=this._gpEncode({returnFeatureCollection:this.returnFeatureCollection||void 0,returnM:this.returnM||void 0,returnZ:this.returnZ||void 0,outSR:this.outSpatialReference,returnType:"data",f:"json"},null);a=d.__assign(d.__assign(d.__assign({},this.requestOptions),a),{query:c});return n(k+"/jobs/"+b+"/results/"+e,a).then(function(a){return f._decode(a.data)})};c.prototype.getResultImage=function(b,e,a,f){var c=this,m=this.parsedUrl.path;a=d.__assign(d.__assign({},a.toJSON()),
{f:"json"});a=this._gpEncode(a);f=d.__assign(d.__assign(d.__assign({},this.requestOptions),f),{query:a});return n(m+"/jobs/"+b+"/results/"+e,f).then(function(a){return c._decode(a.data)})};c.prototype.getResultMapImageLayer=function(b){return d.__awaiter(this,void 0,void 0,function(){var e,a,f,c,m;return d.__generator(this,function(d){switch(d.label){case 0:return e=this.parsedUrl.path,a=e.indexOf("/GPServer/"),f=e.substring(0,a),c=f+"/MapServer/jobs/"+b,[4,new Promise(function(a,b){C(["../layers/MapImageLayer"],
a,b)})];case 1:return m=d.sent(),[2,new m({url:c})]}})})};c.prototype.submitJob=function(b,e){return this._constructRequest("submitJob",b,e).then(function(a){return p.fromJSON(a.data)})};c.prototype.waitForJobCompletion=function(b,e){var a=this;void 0===e&&(e={});var f=e.interval,d=void 0===f?1E3:f,c=e.signal,g=e.statusCallback;return h.create(function(e,f){h.onAbort(c,function(){a._clearTimer(b);f(h.createAbortError())});a._clearTimer(b);var k=setInterval(function(){a._timers.has(b)||f(h.createAbortError());
a._getJobStatus(b,a.requestOptions).then(function(d){var c=d.jobStatus;switch(c){case "job-succeeded":a._clearTimer(b);e(d);break;case "job-submitted":case "job-executing":case "job-waiting":case "job-new":g&&g(d);break;case "job-cancelled":case "job-cancelling":case "job-deleted":case "job-deleting":case "job-timed-out":case "job-failed":a._clearTimer(b);f(d);break;default:r.neverReached(c)}})},d);a._timers.set(b,k)})};c.prototype._clearTimer=function(b){this._timers.has(b)&&(clearInterval(this._timers.get(b)),
this._timers.delete(b))};c.prototype._constructRequest=function(b,e,a){var f=this,c={},m={},g=[];this._collectGeometries(e,g,c);return E.normalizeCentralMeridian(g).then(function(k){var g=f.outSpatialReference,l=f.processExtent,q=f.processSpatialReference,h=f.returnFeatureCollection,p=f.returnM,t=f.returnZ,u=f.parsedUrl.path,v;for(v in c){var r=c[v];m[v]=k.slice(r[0],r[1])}k=g?g.wkid||g:null;q=q?q.wkid||q:null;h="execute"===b?{returnFeatureCollection:h||void 0,returnM:p||void 0,returnZ:t||void 0}:
null;l=d.__assign(d.__assign(d.__assign(d.__assign({},l?{context:{extent:l,outSR:k,processSR:q}}:{"env:outSR":k,"env:processSR":q}),e),h),{f:"json"});l=f._gpEncode(l,null,m);l=d.__assign(d.__assign(d.__assign({},f.requestOptions),a),{query:l});return n(u+"/"+b,l)})};c.prototype._collectGeometries=function(b,e,a){for(var d in b){var c=b[d];c&&"object"===typeof c&&c instanceof u&&(c=c.features,a[d]=[e.length,e.length+c.length],c.forEach(function(a){e.push(a.geometry)}))}};c.prototype._decode=function(b){var c=
b.dataType,a=H.fromJSON(b);switch(c){case "GPBoolean":case "GPDouble":case "GPLong":case "GPString":break;case "GPDate":a.value=new Date(a.value);break;case "GPDataFile":a.value=t.fromJSON(a.value);break;case "GPLinearUnit":a.value=z.fromJSON(a.value);break;case "GPFeatureRecordSetLayer":case "GPRecordSet":a.value=b.value.url?t.fromJSON(a.value):u.fromJSON(a.value);break;case "GPRasterData":case "GPRasterDataLayer":b=b.value.mapImage;a.value=b?y.fromJSON(b):A.fromJSON(a.value);break;case "GPField":a.value=
x.fromJSON(a.value);break;case "GPMultiValue:GPBoolean":case "GPMultiValue:GPDouble":case "GPMultiValue:GPLong":case "GPMultiValue:GPString":break;case "GPMultiValue:GPDate":a.value=a.value.map(function(a){return new Date(a)});break;case "GPMultiValue:GPDataFile":a.value=a.value.map(function(a){return t.fromJSON(a)});break;case "GPMultiValue:GPLinearUnit":a.value=a.value.map(function(a){return z.fromJSON(a)});break;case "GPMultiValue:GPFeatureRecordSetLayer":case "GPMultiValue:GPRecordSet":a.value=
a.value.map(function(a){return u.fromJSON(a)});break;case "GPMultiValue:GPRasterData":case "GPMultiValue:GPRasterDataLayer":a.value=a.value.map(function(b){return b?y.fromJSON(b):A.fromJSON(a.value)});break;case "GPMultiValue:GPField":a.value=a.value.map(function(a){return x.fromJSON(a)});break;default:r.neverReached(c)}return a};c.prototype._gpEncode=function(b,c,a){var d=this,e;for(e in b){var g=b[e];Array.isArray(g)?b[e]=JSON.stringify(g.map(function(a){return d._gpEncode({item:a},!0).item},this)):
g instanceof Date&&(b[e]=g.getTime())}return this._encode(b,c,a)};c.prototype._getJobStatus=function(b,c){b=this.parsedUrl.path+"/jobs/"+b;c=d.__assign(d.__assign(d.__assign({},this.requestOptions),c),{query:{f:"json"}});return n(b,c).then(function(a){return p.fromJSON(a.data)})};d.__decorate([g.property({type:w})],c.prototype,"outSpatialReference",void 0);d.__decorate([g.property({type:D})],c.prototype,"processExtent",void 0);d.__decorate([g.property({type:w})],c.prototype,"processSpatialReference",
void 0);d.__decorate([g.property({nonNullable:!0})],c.prototype,"returnFeatureCollection",void 0);d.__decorate([g.property({nonNullable:!0})],c.prototype,"returnM",void 0);d.__decorate([g.property({nonNullable:!0})],c.prototype,"returnZ",void 0);return c=d.__decorate([g.subclass("esri/tasks/Geoprocessor")],c)}(F)});
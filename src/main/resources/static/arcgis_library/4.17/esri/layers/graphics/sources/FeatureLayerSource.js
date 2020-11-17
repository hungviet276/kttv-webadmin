// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../request ../../../core/Error ../../../core/has ../../../core/lang ../../../core/Loadable ../../../core/maybe ../../../core/promiseUtils ../../../core/SetUtils ../../../core/urlUtils ../../../core/accessorSupport/decorators ../../../tasks/QueryTask ../../../tasks/operations/queryAttachments ../../../tasks/operations/zscale".split(" "),function(t,u,e,q,l,v,D,E,B,r,F,C,m,G,H,I){function J(g){return e.__awaiter(this,void 0,void 0,function(){var c;return e.__generator(this,
function(a){return"string"===typeof g?(c=C.dataComponents(g),[2,c?c:{data:g}]):[2,r.create(function(a,d){var b=new FileReader;b.readAsDataURL(g);b.onload=function(){return a(C.dataComponents(b.result))};b.onerror=function(a){return d(a)}})]})})}Object.defineProperty(u,"__esModule",{value:!0});var K=F.SetFromValues(["Feature Layer","Table"]);t=function(g){function c(){var a=null!==g&&g.apply(this,arguments)||this;a.type="feature-layer";return a}e.__extends(c,g);c.prototype.load=function(a){a=B.isSome(a)?
a.signal:null;this.addResolvingPromise(this._fetchService(a));return r.resolve(this)};Object.defineProperty(c.prototype,"queryTask",{get:function(){var a=this.layer,b=a.capabilities.query.supportsFormatPBF,d=a.parsedUrl,c=a.dynamicDataSource,n=a.gdbVersion,a=a.spatialReference,b=v("featurelayer-pbf")&&b?"pbf":"json";return new G({url:d.path,format:b,dynamicDataSource:c,gdbVersion:n,sourceSpatialReference:a})},enumerable:!1,configurable:!0});c.prototype.addAttachment=function(a,b){var d=this;return this.load().then(function(){var c=
a.attributes[d.layer.objectIdField],n=d.layer.parsedUrl.path+"/"+c+"/addAttachment",e=d._getLayerRequestOptions(),e=d._getFormDataForAttachment(b,e.query);return q(n,{body:e}).then(function(a){return d._createFeatureEditResult(a.data.addAttachmentResult)}).catch(function(a){throw d._createAttachmentErrorResult(c,a);})})};c.prototype.updateAttachment=function(a,b,d){var c=this;return this.load().then(function(){var n=a.attributes[c.layer.objectIdField],e=c.layer.parsedUrl.path+"/"+n+"/updateAttachment",
f=c._getLayerRequestOptions({query:{attachmentId:b}}),f=c._getFormDataForAttachment(d,f.query);return q(e,{body:f}).then(function(a){return c._createFeatureEditResult(a.data.updateAttachmentResult)}).catch(function(a){throw c._createAttachmentErrorResult(n,a);})})};c.prototype.applyEdits=function(a,b){return e.__awaiter(this,void 0,void 0,function(){var d,c,n,p,k,y,h,z,w,g,m,x,l,r,t,A,u,v;return e.__generator(this,function(f){switch(f.label){case 0:return[4,this.load()];case 1:f.sent(),d=a.addFeatures.map(this._serializeFeature,
this),c=a.updateFeatures.map(this._serializeFeature,this),n=this._getFeatureIds(a.deleteFeatures),I.unapplyEditsZUnitScaling(d,c,this.layer.spatialReference),p=[],k=[],y=e.__spreadArrays(a.deleteAttachments),h=0,z=a.addAttachments,f.label=2;case 2:if(!(h<z.length))return[3,5];w=z[h];m=(g=p).push;return[4,this._serializeAttachment(w)];case 3:m.apply(g,[f.sent()]),f.label=4;case 4:return h++,[3,2];case 5:x=0,l=a.updateAttachments,f.label=6;case 6:if(!(x<l.length))return[3,9];w=l[x];t=(r=k).push;return[4,
this._serializeAttachment(w)];case 7:t.apply(r,[f.sent()]),f.label=8;case 8:return x++,[3,6];case 9:return A=p.length||k.length||y.length?{adds:p,updates:k,deletes:y}:null,u=this._getLayerRequestOptions({method:"post",query:{adds:d.length?JSON.stringify(d):null,updates:c.length?JSON.stringify(c):null,deletes:n.length?n.join(","):null,gdbVersion:null===b||void 0===b?void 0:b.gdbVersion,rollbackOnFailure:null===b||void 0===b?void 0:b.rollbackOnFailureEnabled,useGlobalIds:null===b||void 0===b?void 0:
b.globalIdUsed,attachments:A&&JSON.stringify(A)}}),[4,q(this.layer.parsedUrl.path+"/applyEdits",u)];case 10:return v=f.sent(),[2,this._createEditsResult(v)]}})})};c.prototype.deleteAttachments=function(a,b){var d=this;return this.load().then(function(){var c=a.attributes[d.layer.objectIdField];return q(d.layer.parsedUrl.path+"/"+c+"/deleteAttachments",d._getLayerRequestOptions({query:{attachmentIds:b.join(",")},method:"post"})).then(function(a){return a.data.deleteAttachmentResults.map(d._createFeatureEditResult)}).catch(function(a){throw d._createAttachmentErrorResult(c,
a);})})};c.prototype.queryAttachments=function(a,b){var d=this;void 0===b&&(b={});var c=this.layer.parsedUrl.path;return this.load().then(function(){var f=d._getLayerRequestOptions(b);if(!d.layer.get("capabilities.operations.supportsQueryAttachments")){for(var e=a.objectIds,k=[],g=0;g<e.length;g++)k.push(q(c+"/"+e[g]+"/attachments",f));return r.all(k).then(function(a){return e.map(function(b,d){return{parentObjectId:b,attachmentInfos:a[d].data.attachmentInfos}})}).then(function(a){return H.processAttachmentQueryResult(a,
c)})}return d.queryTask.executeAttachmentQuery(a,f)})};c.prototype.queryFeatures=function(a,b){var d=this;return this.load().then(function(){return d.queryTask.execute(a,b)})};c.prototype.queryFeaturesJSON=function(a,b){var d=this;return this.load().then(function(){return d.queryTask.executeJSON(a,b)})};c.prototype.queryObjectIds=function(a,b){var d=this;return this.load().then(function(){return d.queryTask.executeForIds(a,b)})};c.prototype.queryFeatureCount=function(a,b){var d=this;return this.load().then(function(){return d.queryTask.executeForCount(a,
b)})};c.prototype.queryExtent=function(a,b){var d=this;return this.load().then(function(){return d.queryTask.executeForExtent(a,b)})};c.prototype.queryRelatedFeatures=function(a,b){var d=this;return this.load().then(function(){return d.queryTask.executeRelationshipQuery(a,b)})};c.prototype.queryRelatedFeaturesCount=function(a,b){var d=this;return this.load().then(function(){return d.queryTask.executeRelationshipQueryForCount(a,b)})};c.prototype._fetchService=function(a){return e.__awaiter(this,void 0,
void 0,function(){var b,d,c;return e.__generator(this,function(e){switch(e.label){case 0:b=this.layer.sourceJSON;if(!b)return[3,1];this.sourceJSON=b;return[3,3];case 1:return[4,q(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:v("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:a}))];case 2:this.sourceJSON=d=e.sent().data,e.label=3;case 3:c=this.sourceJSON.type;if(!K.has(c))throw new l("feature-layer-source:unsupported-type",'Source type "'+c+'" is not supported');
return[2]}})})};c.prototype._serializeFeature=function(a){var b=a.geometry;a=a.attributes;return B.isNone(b)?{attributes:a}:"mesh"===b.type||"extent"===b.type?null:{geometry:b.toJSON(),attributes:a}};c.prototype._serializeAttachment=function(a){return e.__awaiter(this,void 0,void 0,function(){var b,c,f,g,p,k,l,h,m;return e.__generator(this,function(d){switch(d.label){case 0:b=a.feature;c=a.attachment;f=c.globalId;g=c.name;p=c.contentType;k=c.data;l=c.uploadId;h={globalId:f,parentGlobalId:null,contentType:null,
name:null,uploadId:null,data:null};b&&(h.parentGlobalId="attributes"in b?b.attributes&&b.attributes[this.layer.globalIdField]:b.globalId);if(!l)return[3,1];h.uploadId=l;return[3,3];case 1:return k?[4,J(k)]:[3,3];case 2:m=d.sent(),h.contentType=m.mediaType,h.data=m.data,k instanceof File&&(h.name=k.name),d.label=3;case 3:return g&&(h.name=g),p&&(h.contentType=p),[2,h]}})})};c.prototype._getFeatureIds=function(a){var b=a[0];return b?"objectId"in b?this._getIdsFromFeatureIdentifier(a):this._getIdsFromFeatures(a):
[]};c.prototype._getIdsFromFeatures=function(a){var b=this.layer.objectIdField;return a.map(function(a){return a.attributes&&a.attributes[b]})};c.prototype._getIdsFromFeatureIdentifier=function(a){return a.map(function(a){return a.objectId})};c.prototype._createEditsResult=function(a){var b=a.data;a=a.data&&a.data.attachments;return{addFeatureResults:b.addResults?b.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:b.updateResults?b.updateResults.map(this._createFeatureEditResult,
this):[],deleteFeatureResults:b.deleteResults?b.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:a&&a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:a&&a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:a&&a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[]}};c.prototype._createFeatureEditResult=function(a){var b=!0===a.success?null:a.error||{code:void 0,
description:void 0};return{objectId:a.objectId,globalId:a.globalId,error:b?new l("feature-layer-source:edit-failure",b.description,{code:b.code}):null}};c.prototype._createAttachmentErrorResult=function(a,b){return{objectId:a,globalId:null,error:new l("feature-layer-source:attachment-failure",b.details.messages&&b.details.messages[0]||b.message,{code:b.details.httpStatus||b.details.messageCode})}};c.prototype._getFormDataForAttachment=function(a,b){if(a=a instanceof FormData?a:a&&a.elements?new FormData(a):
null)for(var c in b){var e=b[c];null!=e&&(a.set?a.set(c,e):a.append(c,e))}return a};c.prototype._getLayerRequestOptions=function(a){void 0===a&&(a={});var b=this.layer,c=b.parsedUrl,f=b.gdbVersion,b=b.dynamicDataSource;return e.__assign(e.__assign({},a),{query:D.fixJson(e.__assign(e.__assign(e.__assign({gdbVersion:f,layer:b?JSON.stringify({source:b}):void 0},c.query),{f:"json"}),null===a||void 0===a?void 0:a.query)),responseType:"json"})};e.__decorate([m.property()],c.prototype,"type",void 0);e.__decorate([m.property({constructOnly:!0})],
c.prototype,"layer",void 0);e.__decorate([m.property({readOnly:!0,dependsOn:["layer.parsedUrl","layer.gdbVersion","layer.dynamicDataSource"]})],c.prototype,"queryTask",null);return c=e.__decorate([m.subclass("esri.layers.graphics.sources.FeatureLayerSource")],c)}(E);u.default=t});
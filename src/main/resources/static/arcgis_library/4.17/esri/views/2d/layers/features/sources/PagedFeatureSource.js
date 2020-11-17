// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/Error ../../../../../core/Logger ../../../../../core/promiseUtils ./BaseFeatureSource".split(" "),function(h,a,d,v,w,l,x){Object.defineProperty(a,"__esModule",{value:!0});a.PagedFeatureSource=void 0;var y=w.getLogger("esri.views.2d.layers.features.sources.FeatureSource");h=function(a){function e(b){return a.call(this,b)||this}d.__extends(e,a);e.prototype._fetchDataTile=function(b){return d.__awaiter(this,void 0,void 0,function(){var a,k,m,f,r,g,n,
c,e,q,h,t,p,u=this;return d.__generator(this,function(d){switch(d.label){case 0:a=6,k=20,m=this._subscriptions.get(b.key.id),f=!1,g=r=0,n=function(c,a){g--;l.throwIfAborted(m);var d=c.reader;c=c.query;d.exceededTransferLimit?a={tile:b,id:b.id,features:d,end:f&&0===g}:(f=!0,a={tile:b,id:b.id,features:d,end:0===g});m.requests.done.push({request:a,query:c});u._onRequest(a,"new")},e=c=0,d.label=1;case 1:if(f||!(e++<k))return[3,3];q=void 0;h=function(c){var a=r++;g++;q=t._fetchDataTilePage(b,a,m).then(function(b){return b&&
n(b,a)}).catch(function(a){f=!0;l.isAbortError(a)||(y.error(new v("mapview-query-error","Encountered error when fetching tile",{tile:b,error:a})),u._onRequest({tile:b,id:b.id,features:null,end:f},"new"))})};t=this;for(p=0;p<c+1;p++)h(p);return[4,q];case 2:return d.sent(),l.throwIfAborted(m),c=Math.min(c+2,a),[3,1];case 3:return[2]}})})};e.prototype._fetchDataTilePage=function(a,e,k){return d.__awaiter(this,void 0,void 0,function(){var b,f,h,g,n;return d.__generator(this,function(c){switch(c.label){case 0:b=
this._sourceQueryInfo,f=this._createQuery(a,{start:8E3*e,num:8E3,maxRecordCountFactor:3,returnExceededLimitFeatures:!0,quantizationParameters:a.getQuantizationParameters()}),c.label=1;case 1:return c.trys.push([1,3,,4]),h=k.signal,[4,this._queue.push({tile:a,query:f,signal:h,depth:e})];case 2:return g=c.sent(),l.throwIfAborted(k),g?b!==this._sourceQueryInfo?[2,this._fetchDataTilePage(a,e,k)]:[2,{reader:g,query:f}]:[2,null];case 3:return n=c.sent(),l.throwIfNotAbortError(n),[2,null];case 4:return[2]}})})};
return e}(x.BaseFeatureSource);a.PagedFeatureSource=h});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/Accessor ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators @dojo/framework/shim/Promise".split(" "),function(m,c,d,D,f,k){Object.defineProperty(c,"__esModule",{value:!0});c.EditsQueue=void 0;m=function(c){function a(b){b=c.call(this,b)||this;b._queue=[];b._onGoingRequest=null;b._abortController=f.createAbortController();return b}d.__extends(a,c);a.prototype.destroy=function(){this.clear()};Object.defineProperty(a.prototype,
"updating",{get:function(){return!this.destroyed&&(0<this._queue.length||null!=this._onGoingRequest)},enumerable:!1,configurable:!0});a.prototype.clear=function(){if(this.destroyed)throw Error("instance is already destroyed");for(var b=this._queue.pop();b;)b.resolver.reject(f.createAbortError()),b=this._queue.pop();this._queue.length=0;this._abortController.abort();this._abortController=f.createAbortController()};a.prototype.push=function(b){return d.__awaiter(this,void 0,void 0,function(){var a,
g=this;return d.__generator(this,function(d){if(this.destroyed)throw Error("instance is already destroyed");a=f.createResolver();this._queue.push({event:b,resolver:a});this.notifyChange("updating");Promise.resolve().then(function(){g._processNext()});return[2,a.promise]})})};a.prototype._processNext=function(){return d.__awaiter(this,void 0,void 0,function(){var b,a,g,h,c,f,k,m,A,B,n,r,t,e,l,p,u,v,q,w,x,y,z,C=this;return d.__generator(this,function(d){switch(d.label){case 0:if(this._onGoingRequest)return[2];
b=[];a=new Set;g=new Set;h=new Set;for(c=this._queue.shift();c;){f=c.event;k=f.addedFeatures;m=f.deletedFeatures;A=f.updatedFeatures;B=c.resolver;b.push(B);n=0;for(r=k;n<r.length;n++)t=r[n],e=t.objectId,l=t.error,l||(a.add(e),g.add(e),h.delete(e));p=0;for(u=A;p<u.length;p++)v=u[p],e=v.objectId,l=v.error,l||(g.add(e),h.delete(e));q=0;for(w=m;q<w.length;q++)x=w[q],e=x.objectId,l=x.error,l||(a.has(e)?a.delete(e):h.add(e),g.delete(e));c=this._queue.shift()}if(!g.size&&!h.size)return this.notifyChange("updating"),
b.forEach(function(a){return a()}),[2];y=[];z=[];g.size&&g.forEach(function(a){y.push(a)});h.size&&h.forEach(function(a){z.push(a)});this._onGoingRequest=Promise.resolve().then(function(){return C.processEdits(y,z,{signal:C._abortController.signal})}).catch(function(){});this.notifyChange("updating");return[4,this._onGoingRequest];case 1:return d.sent(),this._onGoingRequest=null,this.notifyChange("updating"),b.forEach(function(a){return a()}),0<this._queue.length&&this._processNext(),[2]}})})};d.__decorate([k.property({constructOnly:!0})],
a.prototype,"processEdits",void 0);d.__decorate([k.property({readOnly:!0})],a.prototype,"updating",null);return a=d.__decorate([k.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],a)}(D);c.EditsQueue=m});
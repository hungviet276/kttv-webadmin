// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../request ../../core/Collection ../../core/JSONSupport ../../core/maybe ../../core/urlUtils ../../core/accessorSupport/decorators ./SceneModification".split(" "),function(x,y,c,r,t,u,v,w,f,h){return function(d){function b(a){a=d.call(this,a)||this;a.url=null;return a}c.__extends(b,d);e=b;b.prototype.toJSON=function(a){return this.toArray().map(function(b){return b.toJSON(a)}).filter(function(a){return!!a.geometry})};b.prototype.clone=function(){return new e({url:this.url,
items:this.items.map(function(a){return a.clone()})})};b.prototype._readModifications=function(a,b){for(var c=0;c<a.length;c++)this.add(h.fromJSON(a[c],b))};b.fromJSON=function(a,b){var c=new e;c._readModifications(a,b);return c};b.fromUrl=function(a,b,f){return c.__awaiter(this,void 0,void 0,function(){var d,n,p,k,g,l,m;return c.__generator(this,function(q){switch(q.label){case 0:return d={url:w.urlToObject(a),origin:"service"},[4,r(a,{responseType:"json",signal:v.get(f,"signal")})];case 1:n=q.sent();
p=b.toJSON();k=[];g=0;for(l=n.data;g<l.length;g++)m=l[g],k.push(h.fromJSON(c.__assign(c.__assign({},m),{geometry:c.__assign(c.__assign({},m.geometry),{spatialReference:p})}),d));return[2,new e({url:a,items:k})]}})})};var e;c.__decorate([f.property({type:String})],b.prototype,"url",void 0);return b=e=c.__decorate([f.subclass("esri.layers.support.SceneModifications")],b)}(u.JSONSupportMixin(t.ofType(h)))});
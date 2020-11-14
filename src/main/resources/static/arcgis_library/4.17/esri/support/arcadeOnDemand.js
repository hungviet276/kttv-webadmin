// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../geometry ../core/maybe ../core/promiseUtils @dojo/framework/shim/Promise".split(" "),function(q,c,d,C,D,E){function v(){return d.__awaiter(this,void 0,void 0,function(){var b=this;return d.__generator(this,function(a){g||(g=function(){return d.__awaiter(b,void 0,void 0,function(){var a;return d.__generator(this,function(b){switch(b.label){case 0:return[4,new Promise(function(a,b){q(["./arcadeUtils"],a,b)})];case 1:return a=b.sent(),[4,a.arcade.load()];case 2:return b.sent(),
[2,{arcade:a.arcade,arcadeUtils:a,Dictionary:a.Dictionary,Feature:a.arcadeFeature}]}})})}());return[2,g]})})}Object.defineProperty(c,"__esModule",{value:!0});c.ArcadeExpression=c.createDictionaryExpression=c.createVVExpression=c.createRendererExpression=c.createLabelExpression=c.loadArcade=void 0;var g;c.loadArcade=v;c.createLabelExpression=function(b,a,c){return f.create(b,a,c,null,["$feature"])};c.createRendererExpression=function(b,a,c){return f.create(b,a,c,null,["$feature","$view"])};c.createVVExpression=
c.createRendererExpression;c.createDictionaryExpression=function(b,a,c,d){return f.create(b,a,c,d,["$feature","$view"])};var f=function(){function b(a,b,c,d,f,g,h,e){this.script=a;this.evaluate=f;this.fields=h;this._syntaxTree=d;this._arcade=b;this._arcadeDictionary=c;this._arcadeFeature=g;this._spatialReference=e;this._referencesGeometry=b.scriptTouchesGeometry(this._syntaxTree);this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}b.create=function(a,c,f,g,q,F){return d.__awaiter(this,
void 0,void 0,function(){var h,e,w,n,p,k,r,l,x,y,t,z,m,A,B;return d.__generator(this,function(u){switch(u.label){case 0:return[4,v()];case 1:return h=u.sent(),e=h.arcade,w=h.Feature,n=h.Dictionary,p=C.SpatialReference.fromJSON(c),k=e.parseScript(a,F),r=q.reduce(function(a,b){var c;return d.__assign(d.__assign({},a),(c={},c[b]=null,c))},{}),l=null,D.isSome(g)&&(l=new n(g),l.immutable=!0,r.$config=null),x=e.scriptUsesGeometryEngine(k)&&e.enableGeometrySupport(),y=e.scriptUsesFeatureSet(k)&&e.enableFeatureSetSupport(),
t=e.scriptIsAsync(k)&&e.enableAsyncSupport(),z={vars:r,spatialReference:p,useAsync:!!t},m=new n,m.immutable=!1,m.setField("scale",0),A=e.compileScript(k,z),B=function(a){"$view"in a&&a.$view&&(m.setField("scale",a.$view.scale),a.$view=m);l&&(a.$config=l);return A({vars:a,spatialReference:p})},[4,E.all([x,y,t])];case 2:return u.sent(),[2,new b(a,e,n,k,B,new w,f,p)]}})})};b.prototype.repurposeFeature=function(a){a.geometry&&!a.geometry.spatialReference&&(a.geometry.spatialReference=this._spatialReference);
this._arcadeFeature.repurposeFromGraphicLikeObject(a.geometry,a.attributes,{fields:this.fields});return this._arcadeFeature};b.prototype.repurposeAdapter=function(a){this._arcadeFeature.repurposeFromAdapter(a,{fields:this.fields});return this._arcadeFeature};b.prototype.createDictionary=function(){return new this._arcadeDictionary};b.prototype.referencesMember=function(a){return this._arcade.referencesMember(this._syntaxTree,a)};b.prototype.referencesFunction=function(a){return this._arcade.referencesFunction(this._syntaxTree,
a)};b.prototype.referencesGeometry=function(){return this._referencesGeometry};b.prototype.referencesScale=function(){return this._referencesScale};b.prototype.extractFieldLiterals=function(a){return this._arcade.extractFieldLiterals(this._syntaxTree,a)};return b}();c.ArcadeExpression=f;c.default=f});
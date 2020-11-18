// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ./deprecate ./Logger ./accessorSupport/get ./accessorSupport/metadata ./accessorSupport/Properties ./accessorSupport/set ./accessorSupport/testSupport ./accessorSupport/watch ./accessorSupport/decorators/property ./accessorSupport/decorators/subclass".split(" "),function(z,A,m,n,p,q,r,t,u,d,f,v,w){function x(a){var b=typeof a;if(null==a)return{value:a};if(Array.isArray(a))return{type:[a[0]],value:null};if("object"===b)return a.constructor&&a.constructor.__accessorMetadata__||
a instanceof Date?{type:a.constructor,value:a}:a;if("boolean"===b)return{type:Boolean,value:a};if("string"===b)return{type:String,value:a};if("number"===b)return{type:Number,value:a};if("function"===b)return{type:a,value:null}}return function(){function a(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];if(this.constructor===a)throw Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");Object.defineProperty(this,"__accessor__",{enumerable:!1,
value:new t.default(this)});0<b.length&&this.normalizeCtorArgs&&(this.__accessor__.ctorArgs=this.normalizeCtorArgs.apply(this,b));if(d.interceptor)d.interceptor.onInstanceConstruct(this)}a.createSubclass=function(b){void 0===b&&(b={});if(Array.isArray(b))throw Error("Multi-inheritance unsupported since 4.16");var a=b.properties,d=b.declaredClass,f=b.constructor;delete b.declaredClass;delete b.properties;delete b.constructor;var k=this,h=function(b){function a(){for(var a=[],c=0;c<arguments.length;c++)a[c]=
arguments[c];c=b.apply(this,a)||this;c.inherited=null;f&&f.apply(c,a);return c}m.__extends(a,b);return a}(k);r.getOwnClassMetadata(h.prototype);var l=function(a){var c=b[a];h.prototype[a]="function"===typeof c?function(){for(var b=[],e=0;e<arguments.length;e++)b[e]=arguments[e];e=this.inherited;this.inherited=function(){for(var b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];if(k.prototype[a])return k.prototype[a].apply(this,b)};var d=void 0;try{d=c.apply(this,b)}catch(y){throw this.inherited=e,
y;}this.inherited=e;return d}:b[a]},g;for(g in b)l(g);for(g in a)l=x(a[g]),v.property(l)(h.prototype,g);return w.subclass(d)(h)};a.prototype.postscript=function(b){var a=this.__accessor__;b=a.ctorArgs||b;a.initialize();b&&(this.set(b),a.ctorArgs=null);a.constructed();this.initialize()};a.prototype.initialize=function(){};a.prototype.destroy=function(){if(!this.destroyed&&(f.removeTarget(this),this.__accessor__.destroy(),d.interceptor))d.interceptor.onInstanceDestroy(this)};Object.defineProperty(a.prototype,
"initialized",{get:function(){return this.__accessor__&&this.__accessor__.initialized||!1},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"constructed",{get:function(){return this.__accessor__&&2===this.__accessor__.lifecycle||!1},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"destroyed",{get:function(){return this.__accessor__&&this.__accessor__.destroyed||!1},enumerable:!1,configurable:!0});a.prototype.get=function(b){return q.default(this,b)};a.prototype.hasOwnProperty=
function(b){return this.__accessor__?this.__accessor__.has(b):Object.prototype.hasOwnProperty.call(this,b)};a.prototype.isInstanceOf=function(b){n.deprecatedFunction(p.getLogger(this.declaredClass),"isInstanceOf",{replacement:"Use instanceof directly",version:"4.16"});return this instanceof b};a.prototype.keys=function(){return this.__accessor__?this.__accessor__.keys():[]};a.prototype.set=function(b,a){u.default(this,b,a);return this};a.prototype.watch=function(a,c,d){return f.default(this,a,c,d)};
a.prototype._clearOverride=function(a){return this.__accessor__.clearOverride(a)};a.prototype._override=function(a,c){return this.__accessor__.override(a,c)};a.prototype._isOverridden=function(a){return this.__accessor__.isOverridden(a)};a.prototype.notifyChange=function(a){this.__accessor__.propertyInvalidated(a)};a.prototype._get=function(a){return this.__accessor__.internalGet(a)};a.prototype._set=function(a,c){this.__accessor__.internalSet(a,c);return this};return a}()});
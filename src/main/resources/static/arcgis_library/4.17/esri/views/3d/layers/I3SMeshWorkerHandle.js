// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Logger ../../../core/PooledArray ../support/projectionUtils ../support/WorkerHandle".split(" "),function(l,e,q,r,t,m,u){function n(c,p){b.clear();for(var a=function(a){var d="clip"===a.type?2:"mask"===a.type?1:0,c=a.geometry;a=function(a){return a};if(c.spatialReference){if(!m.canProject(c.spatialReference,p))return v.warn("Can't project modification polygon into layer spatial reference, ignoring modification"),"continue";a=function(a){m.vectorToVector(a,
c.spatialReference,f,p);return f}}else c.hasZ||(f[2]=0,a=function(a){f[0]=a[0];f[1]=a[1];return f});b.push(d);b.push(c.rings.length);for(var d=0,e=c.rings;d<e.length;d++){var g=e[d];b.push(g.length);for(var h=0;h<g.length;h++){var k=a(g[h]);b.push(k[0]);b.push(k[1]);b.push(k[2])}}},d=0;d<c.length;d++)a(c[d]);b.push(3);c=new Float64Array(b.length);for(a=0;a<b.length;++a)c[a]=b.getItemAt(a);return c}Object.defineProperty(e,"__esModule",{value:!0});e.toWasmModification=e.I3SMeshWorkerHandle=void 0;var v=
r.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle");l=function(c){function b(a){return c.call(this,"SceneLayerWorker","process",a)||this}q.__extends(b,c);b.prototype.getTransferList=function(a){return[a.geometryBuffer]};b.prototype.setModifications=function(a,b,c){a={context:a,modifications:n(b,c),isGeodetic:c.isGeographic};this.broadcast(a,"setModifications")};b.prototype.setLegacySchema=function(a,b){b=JSON.stringify(b);this.broadcast({context:a,jsonSchema:b},"setLegacySchema")};b.prototype.destroyContext=
function(a){return this.broadcast(a,"destroyContext")};return b}(u.WorkerHandle);e.I3SMeshWorkerHandle=l;var b=new t({deallocator:null}),f=[0,0,0];e.toWasmModification=n});
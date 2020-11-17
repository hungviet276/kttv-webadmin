// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../request ../../core/Error ../../core/ItemCache ../../core/maybe ../../core/promiseUtils ../../geometry/support/aaBoundingBox ./symbolLayerUtils3D @dojo/framework/shim/Promise".split(" "),function(u,c,d,v,k,p,q,l,r,t){function e(a,b){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(A){if(a.resource.href)return[2,w(a.resource.href).then(function(a){return[a.width,a.height]})];if(a.resource.primitive)return q.isSome(b)?[2,[b,b]]:[2,
[256,256]];throw new k("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource");})})}function x(a,b){return e(a,b).then(function(b){if(null==a.size)return b;b=b[0]/b[1];return 1<b?[a.size,a.size/b]:[a.size*b,a.size]})}function w(a){return v(a,{responseType:"image"}).then(function(a){return a.data})}function g(a,b){return y(a,b).then(function(a){return r.size(a)})}function z(a,b){return d.__awaiter(this,void 0,void 0,function(){var c;return d.__generator(this,
function(d){switch(d.label){case 0:return[4,g(a,b)];case 1:return c=d.sent(),[2,t.objectSymbolLayerSizeWithResourceSize(c,a)]}})})}function y(a,b){return d.__awaiter(this,void 0,void 0,function(){var c,e,g,m,f,h;return d.__generator(this,function(d){switch(d.label){case 0:if(a.isPrimitive)return[3,3];c=a.resource.href;e=n.get(c);return void 0!==e?[2,l.resolve(e)]:[4,new Promise(function(a,b){u(["../../views/3d/layers/graphics/objectResourceUtils"],a,b)})];case 1:return g=d.sent(),[4,g.fetch(c,{disableTextures:!0})];
case 2:return m=d.sent(),n.put(c,m.referenceBoundingBox),[2,m.referenceBoundingBox];case 3:f=null;if(a.resource&&a.resource.primitive&&(f=r.create(t.objectSymbolLayerPrimitiveBoundingBox(a.resource.primitive)),q.isSome(b)))for(h=0;h<f.length;h++)f[h]*=b;return[2,f?l.resolve(f):l.reject(new k("symbol:invalid-resource","The symbol does not have a valid resource"))]}})})}Object.defineProperty(c,"__esModule",{value:!0});c.computeObjectLayerResourceSize=c.computeIconLayerResourceSize=c.computeLayerSize=
c.computeLayerResourceSize=c.clearBoundingBoxCache=void 0;var n=new p(50);c.clearBoundingBoxCache=function(){n=new p(50)};c.computeLayerResourceSize=function(a,b){if("icon"===a.type)return e(a,b);if("object"===a.type)return g(a,b);throw new k("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");};c.computeLayerSize=function(a,b){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(c){if("icon"===a.type)return[2,
x(a,b)];if("object"===a.type)return[2,z(a,b)];throw new k("symbol3d:unsupported-symbol-layer","computeLayerSize only works with symbol layers of type Icon and Object");})})};c.computeIconLayerResourceSize=e;c.computeObjectLayerResourceSize=g});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../request ../../../../core/asyncUtils ../../../../core/Error ../../../../core/lang ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/Version ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ../../support/imageUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Texture ../../webgl-engine/materials/DefaultMaterial".split(" "),function(W,
l,h,I,v,J,K,L,y,t,F,G,w,M,N,O,P,Q){function R(e,f){return h.__awaiter(this,void 0,void 0,function(){var b,a;return h.__generator(this,function(g){switch(g.label){case 0:return(b=y.isSome(f)&&f.streamDataRequester)?[2,S(e,b,f)]:[4,v.result(I(e,y.unwrap(f)))];case 1:a=g.sent();if(!0===a.ok)return[2,a.value.data];t.throwIfAbortError(a.error);x(a.error);return[2,void 0]}})})}function S(e,f,b){return h.__awaiter(this,void 0,void 0,function(){var a;return h.__generator(this,function(g){switch(g.label){case 0:return[4,
v.result(f.request(e,"json",b))];case 1:a=g.sent();if(!0===a.ok)return[2,a.value];t.throwIfAbortError(a.error);x(a.error.details.url);return[2,void 0]}})})}function x(e){throw new J("","Request for object resource failed: "+e);}function T(e){var f=w.empty();e.forEach(function(b){b=b.boundingInfo;w.expand(f,b.getBBMin());w.expand(f,b.getBBMax())});return f}function H(e,f){return h.__awaiter(this,void 0,void 0,function(){var b,a,g,l,A,u,q,p;return h.__generator(this,function(h){switch(h.label){case 0:b=
[];a=function(a){var g=e[a],h=g.images[0].data;if(!h)return r.warn("Externally referenced texture data is not yet supported"),"continue";var h=g.encoding+";base64,"+h,l="/textureDefinitions/"+a,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0};a=y.isSome(f)&&f.disableTextures?t.resolve(null):M.requestImage(h,f);b.push(a.then(function(a){return{refId:l,image:a,params:c,alphaChannelUsage:"rgba"===g.channels?g.alphaChannelUsage||"transparency":"none"}}))};for(g in e)a(g);return[4,t.all(b)];
case 1:l=h.sent();A={};u=0;for(q=l;u<q.length;u++)p=q[u],A[p.refId]=p;return[2,A]}})})}function U(e){switch(e){case "mask":return 2;case "maskAndTransparency":return 3;case "none":return 1;case "transparency":return 0;default:return 0}}Object.defineProperty(l,"__esModule",{value:!0});l.createTextureResources=l.processLoadResult=l.load=void 0;var r=L.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");l.load=function(e,f){return h.__awaiter(this,void 0,void 0,function(){var b,a;return h.__generator(this,
function(g){switch(g.label){case 0:return[4,R(e,f)];case 1:return b=g.sent(),[4,H(b.textureDefinitions,f)];case 2:return a=g.sent(),[2,{resource:b,textures:a}]}})})};l.processLoadResult=function(e,f){var b,a,g=[],h=[],l=[],u=[],q=e.resource,p=F.Version.parse(q.version||"1.0","wosr");V.validate(p);var p=q.model.name,t=q.model.geometries,w=q.materialDefinitions;e=e.textures;for(var v=0,B=new Map,C=0;C<t.length;C++){var c=t[C];a=c;var d=a.params,n=d.topology;b=!0;d.vertexAttributes||(r.warn("Geometry must specify vertex attributes"),
b=!1);switch(d.topology){case "PerAttributeArray":break;case "Indexed":case null:case void 0:n=d.faces;if(!n)r.warn("Indexed geometries must specify faces"),b=!1;else if(d.vertexAttributes){var m=void 0;for(m in d.vertexAttributes)(d=n[m])&&d.values?(null!=d.valueType&&"UInt32"!==d.valueType&&(r.warn("Unsupported indexed geometry indices type '"+d.valueType+"', only UInt32 is currently supported"),b=!1),null!=d.valuesPerElement&&1!==d.valuesPerElement&&(r.warn("Unsupported indexed geometry values per element '"+
d.valuesPerElement+"', only 1 is currently supported"),b=!1)):(r.warn("Indexed geometry does not specify face indices for '"+m+"' attribute"),b=!1)}break;default:r.warn("Unsupported topology '"+n+"'"),b=!1}a.params.material||(r.warn("Geometry requires material"),b=!1);a=a.params.vertexAttributes;d=void 0;for(d in a)a[d].values||(r.warn("Geometries with externally defined attributes are not yet supported"),b=!1);if(b){a=c.params;b=a.material;a=a.texture;var n=c.params.vertexAttributes,d={},D;for(D in n)m=
n[D],d[D]={data:m.values,size:m.valuesPerElement};n={};if("PerAttributeArray"===c.params.topology){for(var c=d.position.data.length/d.position.size,m=new Uint32Array(c),k=0;k<c;k++)m[k]=k;var c=m,x;for(x in d)n[x]=c}else{var c=c.params.faces,E;for(E in c)n[E]=new Uint32Array(c[E].values)}(c=e&&e[a])&&!B.has(a)&&(m=new P(c.image,p,c.params),u.push(m),B.set(a,m));m=(m=B.get(a))?m.id:void 0;k=l[b]?l[b][a]:null;if(!k){k=b.substring(b.lastIndexOf("/")+1);k=w[k].params;1===k.transparency&&(k.transparency=
0);var z=c&&c.alphaChannelUsage,z=0<k.transparency||"transparency"===z||"maskAndTransparency"===z,c={ambient:G.vec3f64.fromArray(k.diffuse),diffuse:G.vec3f64.fromArray(k.diffuse),opacity:1-(k.transparency||0),transparent:z,textureAlphaMode:c?U(c.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:m,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:k.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};y.isSome(f)&&f.materialParamsMixin&&K.mixin(c,f.materialParamsMixin);
k=new Q(c,p);l[b]||(l[b]={});l[b][a]=k}h.push(k);b=new N(new O.GeometryData(d,n),p);v+=n.position?n.position.length:0;g.push(b)}}return{name:p,stageResources:{textures:u,materials:h,geometries:g},pivotOffset:q.model.pivotOffset,boundingBox:T(g),numberOfVertices:v,lodThreshold:null}};l.createTextureResources=H;var V=new F.Version(1,2,"wosr")});
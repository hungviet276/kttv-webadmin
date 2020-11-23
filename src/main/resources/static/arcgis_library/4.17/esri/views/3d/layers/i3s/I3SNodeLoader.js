// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/asyncUtils ../../../../core/has ../../../../core/lang ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/urlUtils ./I3SBinaryReader ./I3SMaterialUtil ./I3SUtil".split(" "),function(n,Y,K,p,W,X,z,r,t,L,M,u){n=function(){function b(a,e,d,c,k,b){this.streamDataController=e;this.logger=d;this.defaultGeometrySchema=c;this.requiredAttributes=k;this.options=b;this.layerUrl=a.parsedUrl.path;this.geometryDefinitions=a.geometryDefinitions;if(a.materialDefinitions){var g=
a.textureSetDefinitions;this.materialAndTextures=a.materialDefinitions.map(function(a){return M.getMaterialAndTextures(g,a)})}}b.prototype.load=function(a,e,d){return this.streamDataController.request(a,e,{signal:d})};b.prototype.loadAttribute=function(a,e,d){return this.load(this.layerUrl+"/nodes/"+a.resources.attributes+"/attributes/"+e.key+"/0","binary",d).then(function(a){return L.readBinaryAttribute(e,a)})};b.prototype.loadAttributes=function(a,e,d){var b=this;return r.eachAlways(e.map(function(e){return b.loadAttribute(a,
e.attributeStorageInfo,d)})).then(function(d){for(var c={},g=0;g<e.length;++g)if(d[g].value)c[e[g].name]=d[g].value;else{if(r.isAbortError(d[g].error))throw d[g].error;b.logger.error("Failed to load attributeData for '"+e[g].name+"' on node '"+a.id+"'",d[g].error)}return c})};b.prototype.loadNodeData=function(a,e){return K.__awaiter(this,void 0,void 0,function(){var d,b,k,l,g,A,v,B,n,t,q,u,N,C,D,w,E,F,x,y,O,P,Q,G,H,R,S,T,I,U,V,J;return K.__generator(this,function(f){switch(f.label){case 0:d=null!=
this.requiredAttributes&&a.resources.attributes?p.result(this.loadAttributes(a,this.requiredAttributes,e)):null;var c=this.geometryDefinitions;f={bufferDefinition:null,bufferIndex:0};if(!(null==c||0>a.resources.geometryDefinition)&&(c=0<=a.resources.geometryDefinition?c[a.resources.geometryDefinition].geometryBuffers:null,null!=c))for(var h=0;h<c.length;h++){var m=c[h];if(null!=m.compressedAttributes){if("draco"===m.compressedAttributes.encoding&&!W("disable-feature:i3s-draco")){f.bufferIndex=h;f.bufferDefinition=
m;break}}else f.bufferIndex=h,f.bufferDefinition=c[h]}b=f;k=b.bufferDefinition;l=b.bufferIndex;A=(g=!!a.resources.geometry)?p.result(this.loadGeometry(a.resources.geometry,l,e)):null;return a.resources.hasSharedResource?[4,this.loadShared(a,e)]:[3,2];case 1:return B=f.sent(),[3,3];case 2:B=null,f.label=3;case 3:return v=B,t=(n=this.materialAndTextures&&0<=a.resources.materialDefinition?this.materialAndTextures[a.resources.materialDefinition]:null!=v?M.getMaterialAndTexturesFromShared(v):null)&&n.material,
q=n&&n.textures,u=""+a.id,(N=!g&&this.options.loadFeatureData)?[4,this.loadFeatureData(u,e)]:[3,5];case 4:return D=f.sent(),[3,6];case 5:D=null,f.label=6;case 6:C=D;if(N)a:{f=0;for(c=C.featureData;f<c.length;f++)if(h=c[f],m=h.geometries,null!=m)for(;0<m.length;){f={featureIds:[h.id],featureDataPosition:h.position,geometries:[m[0]]};break a}f=null}else f={featureIds:[],geometries:[{type:"ArrayBufferView",params:{material:t}}],featureDataPosition:[0,0,0]};w=f;if(f=z.isNone(w))for(f=[],c=0,h=C.featureData;c<
h.length;c++)m=h[c],null!=m.position&&f.push({featureIds:[m.id],featureDataPosition:m.position,geometries:null});E=f;F=null!=q&&0<q.length?p.result(this.loadTextures(a,q,e)):null;y=x=null;if(!A)return[3,8];P=(O=p).assertResult;return[4,A];case 7:x=P.apply(O,[f.sent()]),c=this.defaultGeometrySchema,h=v,c&&h&&h.materialDefinitions&&(m=Object.keys(h.materialDefinitions)[0],!h.materialDefinitions[m].params.vertexRegions&&c.vertexAttributes.region&&(c=X.clone(c),delete c.vertexAttributes.region)),Q=c,
y=L.createGeometryDescriptor(k,Q),f.label=8;case 8:if(!F)return[3,10];S=(R=p).assertResult;return[4,F];case 9:return H=S.apply(R,[f.sent()]),[3,11];case 10:H=null,f.label=11;case 11:G=H;if(!d)return[3,13];V=(U=p).assertResult;return[4,d];case 12:return I=V.apply(U,[f.sent()]),[3,14];case 13:I={},f.label=14;case 14:return J=(T=I)?{attributeData:T,loadedAttributes:this.requiredAttributes}:null,z.isSome(w)?[2,{geometryData:w,attributeDataInfo:J,geometryBuffer:x,geometryDescriptor:y,requiredTextures:q,
textureData:G}]:z.isSome(E)?[2,{pointData:E,attributeDataInfo:J,geometryBuffer:x,geometryDescriptor:y,requiredTextures:q,textureData:G}]:[2,r.reject()]}})})};b.addAbsoluteHrefTexture=function(a,b){a=a.textureDefinitions;if(null!=a)for(var d=0,c=Object.keys(a);d<c.length;d++)for(var e=0,l=a[c[d]].images;e<l.length;e++){var g=l[e];Array.isArray(g.href)?g.hrefConcat=g.href.map(function(a){return t.makeAbsolute(a,b)}):g.hrefConcat=t.makeAbsolute(g.href,b)}};b.fixTextureEncodings=function(a){a=a.textureDefinitions;
if(null!=a)for(var b in a){var d=a[b];if(Array.isArray(d.encoding))for(var c=0;c<d.encoding.length;c++){var k=d.encoding[c];"data:"===k.substring(0,5)&&(d.encoding[c]=k.substring(5))}else k=d.encoding,"data:"===k.substring(0,5)&&(d.encoding=k.substring(5))}};b.prototype.loadShared=function(a,e){var d=this.layerUrl+"/nodes/"+a.resources.geometry+"/shared";return this.load(d,"json",e).then(function(a){b.fixTextureEncodings(a);b.addAbsoluteHrefTexture(a,d);return a})};b.prototype.loadTexture=function(a,
b,d,c,k,l){return k===u.DDS_ENCODING_STRING?this.load(a,"binary",l).then(function(a){return{id:b,usage:d,data:a,encoding:k}}):this.load(a,"image",l).then(function(a){var e=a;if(c&&4096<=a.width*a.height){var e=Math.ceil(a.width/2),g=Math.ceil(a.height/2),l=document.createElement("canvas");l.width=e;l.height=g;l.getContext("2d").drawImage(a,0,0,e,g);e=l}return{id:b,usage:d,data:e,encoding:k}})};b.prototype.loadTextures=function(a,e,d){var c=this,k=this.options.textureFormat===b.TextureFormat.Compressed,
l=this.options.textureFormat===b.TextureFormat.Downsampled,g=this.options.textureUsageMask;return r.all(e.map(function(b){if(0===(b.usage&g))return null;var e=u.selectEncoding(b.encodings,k);return null==e?(c.logger.error("No known encoding for texture found on node "+a.id),r.reject()):c.loadTexture(c.layerUrl+"/nodes/"+(a.resources.texture||a.id)+"/textures/"+e.name,b.id,b.usage,l,e.encoding,d)}))};b.prototype.loadFeatureData=function(a,b){return this.load(this.layerUrl+"/nodes/"+a+"/features/0",
"json",b)};b.prototype.loadGeometry=function(a,b,d){return this.load(this.layerUrl+"/nodes/"+a+"/geometries/"+b,"binary",d)};return b}();(function(b){b=b.TextureFormat||(b.TextureFormat={});b[b.Compressed=0]="Compressed";b[b.Normal=1]="Normal";b[b.Downsampled=2]="Downsampled"})(n||(n={}));return n});
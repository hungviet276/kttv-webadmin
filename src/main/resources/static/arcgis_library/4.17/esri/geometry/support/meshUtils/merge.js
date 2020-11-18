// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/Logger","../MeshComponent"],function(z,p,v,w){function x(a,c,d,e,k){if(a.components)for(var f=0,m=a.components;f<m.length;f++){for(var b=m[f],h=b.cloneWithDeduplication(d,e),b=0;b<h.faces.length;b++)h.faces[b]+=c.position/3;b=h;0<c.normal&&!a.vertexAttributes.normal&&"source"===b.shading&&(b.shading="flat");k.push(h)}else if(a.vertexAttributes&&a.vertexAttributes.position){d=a.vertexAttributes.position.length/3;e=new Uint32Array(d);for(b=0;b<d;b++)e[b]=b+
c.position;d=b=new w({faces:e});0<c.normal&&!a.vertexAttributes.normal&&"source"===d.shading&&(d.shading="flat");k.push(b)}}function q(a,c,d,e,k){if(c){var f=c.position;if(f)if(c=c[a]){k=0;f=d[a];d=e[a];for(var m=c.length,b=0;b<m;b++)f[d++]=c[k++];e[a]+=c.length}else if(c=d[a],d=e[a],m=l[a],c){for(b=0;b<f.length;b+=3)for(var h=0;h<m;h++)c[d++]=k;e[a]=d}}}function y(a){var c,d,e,k,f=0,m=0,b=0,h=0,r=0;k=e=c=d=!1;for(var n=0;n<a.length;n++){var g=a[n].vertexAttributes;if(g&&g.position&&(g.uv&&(d=!0),
g.normal&&(c=!0),g.tangent&&(k=!0),g.color&&(e=!0),c&&d&&e&&k))break}for(n=0;n<a.length;n++)(g=a[n].vertexAttributes)&&g.position&&(f+=g.position.length,d&&(m+=g.position.length/l.position*l.uv),c&&(b+=g.position.length/l.position*l.normal),e&&(h+=g.position.length/l.position*l.color),k&&(r+=g.position.length/l.position*l.tangent));return{position:new Float64Array(f),uv:m?new Float32Array(m):null,normal:b?new Float32Array(b):null,tangent:r?new Float32Array(r):null,color:h?new Uint8Array(h):null}}
Object.defineProperty(p,"__esModule",{value:!0});p.merge=void 0;var u=v.getLogger("esri.geometry.support.triangleMeshMerge");p.merge=function(a,c){if(0===a.length)return u.error("merge()","Must specify one more more geometries to merge"),null;var d=a[0].spatialReference;if(a.some(function(a){return!a.spatialReference.equals(d)}))return u.error("merge()","Geometries must all be in the same spatial reference"),null;for(var e=y(a),k=[],f={position:0,uv:0,normal:0,tangent:0,color:0},m=new Map,b=new Map,
h=0;h<a.length;h++){var l=a[h],n=l.vertexAttributes;if(c&&c.reuseMaterials&&l.components)for(var g=0,p=l.components;g<p.length;g++){var t=p[g];t.material&&m.set(t.material,t.material)}x(l,f,m,b,k);q("position",n,e,f,0);q("normal",n,e,f,0);q("tangent",n,e,f,0);q("uv",n,e,f,0);q("color",n,e,f,255)}return{vertexAttributes:e,components:k,spatialReference:d}};var l={position:3,normal:3,tangent:4,uv:2,color:4}});
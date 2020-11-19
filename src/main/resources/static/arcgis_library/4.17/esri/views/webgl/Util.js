// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/compilerUtils","../../core/maybe"],function(v,c,p,n,u){function q(a){return a[0].stride}function r(a){switch(a){case 5126:return 4;case 5124:return 4;case 5125:return 4;case 5122:return 2;case 5123:return 2;case 5120:return 1;case 5121:return 1;default:throw n.neverReached(a),Error("Unknown data type");}}function t(a){switch(a){case 6406:case 6409:return 1;case 6410:return 2;case 6407:return 3;case 6408:return 4;case 34041:return 4;case 33325:return 2;
case 33326:return 4;case 35898:return 4;case 33327:return 4;case 33328:return 8;case 34842:return 8;case 34836:return 16;case 33189:return 2;case 34041:return 4;case 32854:return 2;case 36168:return 1;default:n.neverReached(a)}return 0}function m(a){if(u.isNone(a))return 0;if("colorAttachment"in a)return a.glName?m(a.colorAttachment)+m(a.depthStencilAttachment):0;if("descriptor"in a)return a.glName?m(a.descriptor):0;var c=a.internalFormat||"pixelFormat"in a&&a.pixelFormat;if(!c)return 0;var b="hasMipmap"in
a&&a.hasMipmap?1.3:1;a=a.width*a.height;return t(c)*a*b}Object.defineProperty(c,"__esModule",{value:!0});c.getGpuMemoryUsage=c.getBytesPerElementFormat=c.unbindVertexBufferLayout=c.bindVertexBufferLayout=c.setBaseInstanceOffset=c.copyFramebufferToTexture=c.findAttribute=c.hasAttribute=c.addDescriptor=c.getTypedArrayConstructor=c.getBytesPerElement=c.getStride=c.vertexCount=void 0;c.vertexCount=function(a,c){return a.vertexBuffers[c].size/q(a.layout[c])};c.getStride=q;c.getBytesPerElement=r;c.getTypedArrayConstructor=
function(a){switch(a){case 5120:return Int8Array;case 5126:return Float32Array;case 5124:return Int32Array;case 5122:return Int16Array;case 5121:return Uint8Array;case 5125:return Uint32Array;case 5123:return Uint16Array;default:throw n.neverReached(a),Error("Unknown data type");}};c.addDescriptor=function(a,c,b,f,k,g){var d=r(f);if(0<a.length){var e=a[0].stride,h=e+d*b;a.forEach(function(a){return a.stride=h});a.push({name:c,count:b,type:f,offset:e,stride:h,normalized:k,divisor:g})}else a.push({name:c,
count:b,type:f,offset:0,stride:d*b,normalized:k,divisor:g})};c.hasAttribute=function(a,c){for(var b=0;b<a.length;b++)if(a[b].name===c)return!0;return!1};c.findAttribute=function(a,c){for(var b=0;b<a.length;b++)if(a[b].name===c)return a[b];return null};c.copyFramebufferToTexture=function(a,c,b,f,k){void 0===k&&(k=0);var g=a.getBoundFramebufferObject(),d=a.getBoundTexture(0);a.bindFramebuffer(c);a.bindTexture(b,0);a.gl.copyTexImage2D(a.gl.TEXTURE_2D,k,b.descriptor.pixelFormat,f[0],f[1],f[2],f[3],0);
a.gl.flush();a.bindFramebuffer(g);a.bindTexture(d,0)};c.setBaseInstanceOffset=function(a,c){var b={},f;for(f in a)b[f]=a[f].map(function(a){return a.divisor?p.__assign(p.__assign({},a),{baseInstance:c}):a});return b};c.bindVertexBufferLayout=function(a,c,b,f,k){var g=a.gl,d=a.capabilities.instancing;a.bindBuffer(b);for(a=0;a<f.length;a++){b=f[a];var e=c[b.name],h=(k?k:0+b.baseInstance?b.baseInstance:0)*b.stride;void 0===e&&console.error("There is no location for vertex attribute '"+b.name+"' defined.");
b.baseInstance&&!b.divisor&&console.error("Vertex attribute '"+b.name+"' uses baseInstanceOffset without divisor.");if(4>=b.count)g.vertexAttribPointer(e,b.count,b.type,b.normalized,b.stride,b.offset+h),g.enableVertexAttribArray(e),b.divisor&&0<b.divisor&&d&&d.vertexAttribDivisor(e,b.divisor);else if(9===b.count)for(var l=0;3>l;l++)g.vertexAttribPointer(e+l,3,b.type,b.normalized,b.stride,b.offset+12*l+h),g.enableVertexAttribArray(e+l),b.divisor&&0<b.divisor&&d&&d.vertexAttribDivisor(e+l,b.divisor);
else if(16===b.count)for(l=0;4>l;l++)g.vertexAttribPointer(e+l,4,b.type,b.normalized,b.stride,b.offset+16*l+h),g.enableVertexAttribArray(e+l),b.divisor&&0<b.divisor&&d&&d.vertexAttribDivisor(e+l,b.divisor);else console.error("Unsupported vertex attribute element count: "+b.count)}};c.unbindVertexBufferLayout=function(a,c,b,f){var k=a.gl,g=a.capabilities.instancing;a.bindBuffer(b);for(b=0;b<f.length;b++){var d=f[b],e=c[d.name];if(4>=d.count)k.disableVertexAttribArray(e),d.divisor&&0<d.divisor&&g&&
g.vertexAttribDivisor(e,0);else if(9===d.count)for(var h=0;3>h;h++)k.disableVertexAttribArray(e+h),d.divisor&&0<d.divisor&&g&&g.vertexAttribDivisor(e+h,0);else if(16===d.count)for(h=0;4>h;h++)k.disableVertexAttribArray(e+h),d.divisor&&0<d.divisor&&g&&g.vertexAttribDivisor(e+h,0);else console.error("Unsupported vertex attribute element count: "+d.count)}a.unbindBuffer(34962)};c.getBytesPerElementFormat=t;c.getGpuMemoryUsage=m});
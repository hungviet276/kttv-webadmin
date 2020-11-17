// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/Logger","../../../../core/mathUtils","../../../webgl/Texture"],function(y,f,t,p,u){function k(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function l(e,b){var a=new Int32Array(e,0,31);if(542327876!==a[0])return m.error("Invalid magic number in DDS header"),null;if(!(a[20]&4))return m.error("Unsupported format, must contain a FourCC code"),null;var c=a[21],d;switch(c){case v:c=8;d=33776;break;case w:c=16;d=
33778;break;case x:c=16;d=33779;break;default:return m.error("Unsupported FourCC code:",String.fromCharCode(c&255,c>>8&255,c>>16&255,c>>24&255)),null}var n=1,g=a[4],h=a[3];if(0!==(g&3)||0!==(h&3))m.warn("Rounding up compressed texture size to nearest multiple of 4."),g=g+3&-4,h=h+3&-4;var f=g,k=h;a[2]&131072&&!1!==b&&(n=Math.max(1,a[7]));1===n||p.isPowerOfTwo(g)&&p.isPowerOfTwo(h)||(m.warn("Ignoring mipmaps of non power of two sized compressed texture."),n=1);for(var l=a[1]+4,q=[],r=0;r<n;++r)a=(g+
3>>2)*(h+3>>2)*c,b=new Uint8Array(e,l,a),q.push(b),l+=a,g=Math.max(1,g>>1),h=Math.max(1,h>>1);return{textureData:{type:"compressed",levels:q},internalFormat:d,width:f,height:k}}Object.defineProperty(f,"__esModule",{value:!0});f.createDDSTextureData=f.createDDSTexture=void 0;var m=t.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),v=k("DXT1"),w=k("DXT3"),x=k("DXT5");f.createDDSTexture=function(e,b,a,c){var d=l(a,c);a=d.textureData;c=d.internalFormat;var f=d.width,d=d.height;b.samplingMode=1<a.levels.length?
9987:9729;b.hasMipmap=1<a.levels.length;b.internalFormat=c;b.width=f;b.height=d;b=new u(e,b,a);e.bindTexture(b);return b};f.createDDSTextureData=l});
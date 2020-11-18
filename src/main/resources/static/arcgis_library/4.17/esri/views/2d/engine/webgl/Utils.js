// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Error ../../../../core/Logger ../../../../core/mathUtils ../../../../core/screenUtils ../../../webgl ./color ./enums ./SymbolProperties".split(" "),function(J,a,r,n,z,t,u,A,v,b,B){function g(a){for(var c={},h=0;h<a.length;h++){var k=a[h];c[k.name]=k.strideInBytes}return c}function w(a){switch(a){case b.WGLGeometryType.MARKER:return C;case b.WGLGeometryType.FILL:return D;case b.WGLGeometryType.LINE:return E;case b.WGLGeometryType.TEXT:return F;case b.WGLGeometryType.LABEL:return G}}
function x(a){switch(a%4){case 0:case 2:return 4;case 1:case 3:return 1}}function y(a){switch(a){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function H(a){var c={},h=function(d){var h=0;c[d]=a[d].map(function(a){var c=r.__assign(r.__assign({},a),{normalized:a.normalized||!1,divisor:a.divisor||0,offset:h,stride:0});h+=a.count*y(a.type);return c});c[d].forEach(function(a){return a.stride=h})},k;for(k in a)h(k);return c}var p;Object.defineProperty(a,
"__esModule",{value:!0});a.createProgramDescriptor=a.getPixelArrayCtor=a.getPixelBytes=a.getBytes=a.geometryToMappedGeometry=a.createTextureFromTexelData=a.createGeometryData=a.C_VBO_INFO=a.copyMeshData=a.getTransformParams=a.getVVType=a.getJoinType=a.getCapType=a.isNumber=a.isDefined=a.getTextProperties=a.allocateTypedArrayBufferwithData=a.allocateTypedArrayBuffer=a.strideToPackingFactor=a.getNamedBuffers=a.getStrides=a.C_LABEL_STRIDE_SPEC=a.C_TEXT_STRIDE_SPEC=a.C_LINE_STRIDE_SPEC=a.C_FILL_STRIDE_SPEC_DD=
a.C_FILL_STRIDE_SPEC=a.C_ICON_STRIDE_SPEC=a.C_LABEL_VERTEX_DEF=a.C_TEXT_VERTEX_DEF=a.C_LINE_VERTEX_DEF=a.C_FILL_VERTEX_DEF_DD=a.C_FILL_VERTEX_DEF=a.C_ICON_VERTEX_DEF=a.C_VBO_PERINSTANCE_VV=a.C_VBO_PERINSTANCE=a.C_VBO_GEOMETRY=void 0;var l=z.getLogger("esri.views.2d.engine.webgl.Utils");a.C_VBO_GEOMETRY="geometry";a.C_VBO_PERINSTANCE="per_instance";a.C_VBO_PERINSTANCE_VV="per_instance_vv";a.C_ICON_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}];a.C_FILL_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,
strideInBytes:32,divisor:0}];a.C_FILL_VERTEX_DEF_DD=[{name:a.C_VBO_GEOMETRY,strideInBytes:12,divisor:0}];a.C_LINE_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:36,divisor:0}];a.C_TEXT_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:32,divisor:0}];a.C_LABEL_VERTEX_DEF=[{name:a.C_VBO_GEOMETRY,strideInBytes:36,divisor:0}];a.C_ICON_STRIDE_SPEC=g(a.C_ICON_VERTEX_DEF);a.C_FILL_STRIDE_SPEC=g(a.C_FILL_VERTEX_DEF);a.C_FILL_STRIDE_SPEC_DD=g(a.C_FILL_VERTEX_DEF_DD);a.C_LINE_STRIDE_SPEC=g(a.C_LINE_VERTEX_DEF);
a.C_TEXT_STRIDE_SPEC=g(a.C_TEXT_VERTEX_DEF);a.C_LABEL_STRIDE_SPEC=g(a.C_LABEL_VERTEX_DEF);a.getStrides=function(c,d){switch(c){case b.WGLGeometryType.MARKER:return a.C_ICON_STRIDE_SPEC;case b.WGLGeometryType.FILL:return d?a.C_FILL_STRIDE_SPEC_DD:a.C_FILL_STRIDE_SPEC;case b.WGLGeometryType.LINE:return a.C_LINE_STRIDE_SPEC;case b.WGLGeometryType.TEXT:return a.C_TEXT_STRIDE_SPEC;case b.WGLGeometryType.LABEL:return a.C_LABEL_STRIDE_SPEC}};var C=[a.C_VBO_GEOMETRY],D=[a.C_VBO_GEOMETRY],E=[a.C_VBO_GEOMETRY],
F=[a.C_VBO_GEOMETRY],G=[a.C_VBO_GEOMETRY];a.getNamedBuffers=w;a.strideToPackingFactor=x;a.allocateTypedArrayBuffer=function(a,d){switch(d%4){case 0:case 2:return new Uint32Array(Math.floor(a*d/4));case 1:case 3:return new Uint8Array(a*d)}};a.allocateTypedArrayBufferwithData=function(a,d){switch(d%4){case 0:case 2:return new Uint32Array(a);case 1:case 3:return new Uint8Array(a)}};a.getTextProperties=function(a){return B.TextProperties.pool.acquire(a.color?v.copyAndPremultiply(a.color):[255,255,255,
255],a.haloColor?v.copyAndPremultiply(a.haloColor):[255,255,255,255],u.pt2px(a.haloSize),u.pt2px(a.font.size),a.angle*Math.PI/180,a.xoffset/a.font.size,a.yoffset/a.font.size,"left"===a.horizontalAlignment?0:"right"===a.horizontalAlignment?1:.5,"top"===a.verticalAlignment?0:"bottom"===a.verticalAlignment?1:.5)};a.isDefined=function(a){return null!=a};a.isNumber=function(a){return"number"===typeof a};a.getCapType=function(a,d){switch(a){case "butt":return 0;case "round":return d?2:1;case "square":return 2;
default:return l.error(new n("mapview-invalid-type","Cap type "+a+" is not a valid option. Defaulting to round")),1}};a.getJoinType=function(a){switch(a){case "miter":return 2;case "bevel":return 0;case "round":return 1;default:return l.error(new n("mapview-invalid-type","Join type "+a+" is not a valid option. Defaulting to round")),1}};a.getVVType=function(a){switch(a){case "opacity":return b.VVType.OPACITY;case "color":return b.VVType.COLOR;case "rotation":return b.VVType.ROTATION;case "size":return b.VVType.SIZE;
default:return l.error("Cannot interpret unknown vv: "+a),null}};a.getTransformParams=function(a){return{transform:a.transform,hasZ:a.hasZ,hasM:a.hasM}};a.copyMeshData=function(a,d,h,k,m,b,g){for(var c in b)for(var e=b[c].stride,f=x(e),l=b[c].data,n=h[c].data,I=e*m.vertexCount/f,p=e*a/f,f=e*m.vertexFrom/f,e=0;e<I;++e)n[e+p]=l[e+f];h=m.indexCount;for(e=0;e<h;++e)k[e+d]=g[e+m.indexFrom]-m.vertexFrom+a};a.C_VBO_INFO=(p={},p[a.C_VBO_GEOMETRY]=35044,p);a.createGeometryData=function(a,d){for(var c=[],k=
0;5>k;++k){for(var b={},f=0,g=w(k);f<g.length;f++){var l=g[f];b[l]={data:d(k,l)}}c.push({data:a(k),buffers:b})}return c};a.createTextureFromTexelData=function(a,d){var c,b;t.isPowerOfTwo(d.width)&&t.isPowerOfTwo(d.height)?(c=!0,b=9987):(c=!1,b=9729);return new A.Texture(a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,hasMipmap:c,samplingMode:b,wrapMode:33071,flipped:!0},d)};a.geometryToMappedGeometry=function(a){return{vertexFrom:void 0,vertexTo:void 0,geometry:a}};a.getBytes=y;
a.getPixelBytes=function(a){switch(a){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:l.error(new n("webgl-utils","Unable to handle type "+a))}};a.getPixelArrayCtor=function(a){switch(a){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:l.error(new n("webgl-utils","Unable to handle type "+a))}};var q=new Map;a.createProgramDescriptor=function(a,b){if(!q.has(a)){var c=H(b),d={},m;for(m in c){var f=c[m];d[m]=f.length?f[0].stride:0}m={};
for(var g in b)for(var f=0,l=b[g];f<l.length;f++){var e=l[f];m[e.name]=e.location}q.set(a,{strides:d,bufferLayouts:c,attributes:m})}return q.get(a)}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../rasterDatasets/byteStreamUtils ./Jpg ./TiffTags ./Zlib".split(" "),function(Z,q,L,V,M,F,I){function N(c,a){var b="unknown";3===c?b="f32":1===c?1===a?b="u1":2===a?b="u2":4===a?b="u4":8>=a?b="u8":16>=a?b="u16":32>=a&&(b="u32"):2===c&&(8>=a?b="s8":16>=a?b="s16":32>=a&&(b="s32"));return b}function G(c){var a=null;switch(c?c.toLowerCase():"f32"){case "u1":case "u2":case "u4":case "u8":a=Uint8Array;break;case "u16":a=Uint16Array;break;case "u32":a=Uint32Array;break;case "s8":a=
Int8Array;break;case "s16":a=Int16Array;break;case "s32":a=Int32Array;break;default:a=Float32Array}return a}function W(c,a){return{x:a[0]*c.x+a[1]*c.y+a[2],y:a[3]*c.x+a[4]*c.y+a[5]}}function A(c,a){return(c=c.get(a))&&c.values}function m(c,a){return(c=c.get(a))&&c.values[0]}function J(c,a,b,h,l,e){void 0===h&&(h=0);void 0===l&&(l=F.TIFF_TAGS);void 0===e&&(e=4);var d=(new DataView(c,b,2)).getUint16(0,a),k=4+2*e,f=2+d*k;if(b+f>c.byteLength)return{success:!1,ifd:null,nextIFD:null,requiredBufferSize:f};
var K=b+f+4<=c.byteLength?(new DataView(c,b+f,4)).getUint32(0,a):null;b+=2;for(var n=new Map,g,r,p,m,x,y,u=0;u<d;u++){g=new DataView(c,b+k*u,k);r=g.getUint16(0,a);m=g.getUint16(2,a);p=F.getTagName(r,l);if(2===e)x=g.getUint16(4,a),y=g.getUint16(6,a);else if(4===e)x=g.getUint32(4,a),y=g.getUint32(8,a);else if(8===e)if(y=x=0,a)for(var v=0;8>v;v++)x+=g.getUint8(4+v)*Math.pow(2,8*v),y+=g.getUint8(12+v)*Math.pow(2,8*v);else for(v=0;8>v;v++)x+=g.getUint8(4+v)*Math.pow(2,8*(7-v)),y+=g.getUint8(12+v)*Math.pow(2,
8*(7-v));g={id:r,type:m,valueCount:x,valueOffset:y,values:null};O(c,a,g,h);n.set(p,g)}return{success:!0,ifd:n,nextIFD:K,requiredBufferSize:f}}function O(c,a,b,h,l){void 0===h&&(h=0);if(b.values)return!0;var e=b.type,d=b.valueCount,k=b.valueOffset,f=[],m=P[e],n=8*m,g=d*m,r=d*P[e]*8;if(32<r&&g>(l?c.byteLength:c?c.byteLength-k+h:0))return b.offlineOffsetSize=[k,g],b.values=null,!1;if(32>=r)if(a||(k>>>=32-r),1===d)f=[k];else for(c=0;c<d;c++)f.push(k<<n*c>>>32-n);else for(k-=h,l&&(k=0),n=k;n<k+g;n+=m){switch(e){case 1:d=
(new DataView(c,n,1)).getUint8(0);break;case 2:d=(new DataView(c,n,1)).getUint8(0);break;case 3:d=(new DataView(c,n,2)).getUint16(0,a);break;case 4:d=(new DataView(c,n,4)).getUint32(0,a);break;case 5:d=(new DataView(c,n,4)).getUint32(0,a)/(new DataView(c,n+4,4)).getUint32(0,a);break;case 6:d=(new DataView(c,n,1)).getInt8(0);break;case 7:d=(new DataView(c,n,1)).getUint8(0);break;case 8:d=(new DataView(c,n,2)).getInt16(0,a);break;case 9:d=(new DataView(c,n,4)).getInt32(0,a);break;case 10:d=(new DataView(c,
n,4)).getInt32(0,a)/(new DataView(c,n+4,4)).getInt32(0,a);break;case 11:d=(new DataView(c,n,4)).getFloat32(0,a);break;case 12:d=(new DataView(c,n,8)).getFloat64(0,a);break;default:d=null}f.push(d)}if(2===e){e="";k=f;f=[];for(c=0;c<k.length;c++)0===k[c]&&""!==e?(f.push(e),e=""):e+=String.fromCharCode(k[c]);""===e&&0!==f.length||f.push(e)}b.values=f;return!0}function Q(c){var a=c[0],b=m(a,"TILEWIDTH"),h=m(a,"TILELENGTH"),l=m(a,"IMAGEWIDTH"),e=m(a,"IMAGELENGTH"),d=m(a,"BITSPERSAMPLE"),k=m(a,"SAMPLESPERPIXEL"),
f=m(a,"SAMPLEFORMAT")||1,K=N(f,d),n=A(a,"PLANARCONFIGURATION")?2===A(a,"PLANARCONFIGURATION")[0]:!1,g=A(a,"GDAL_NODATA"),r;null!=g&&("string"===typeof g[0]?(r=g.map(function(a){return parseFloat(a)}),r.some(function(a){return isNaN(a)})&&(r=null)):"number"===typeof g[0]&&(r=g));var p=m(a,"COMPRESSION")||1;switch(p){case 1:g="NONE";break;case 2:case 3:case 4:case 32771:g="CCITT";break;case 5:g="LZW";break;case 6:case 7:g="JPEG";break;case 32773:g="PACKBITS";break;case 8:case 32946:g="DEFLATE";break;
case 34712:g="JPEG2000";break;default:g=String(p)}var H=!0,x="";1!==p&&6!==p&&8!==p&&32946!==p&&(H=!1,x+="unsupported tag compression "+p);3<f&&(H=!1,x+="unsupported tag sampleFormat "+f);0!==d%8&&(H=!1,x+="unsupported tag bitsPerSample "+d);var d=m(a,"GEOASCIIPARAMS"),y;d&&(y=(y=d.split("|").filter(function(a){return-1<a.indexOf("ESRI PE String \x3d ")})[0])?y.replace("ESRI PE String \x3d ",""):"",y=0===y.indexOf("PROJCS")||0===y.indexOf("GEOGCS")?{wkid:null,wkt:y}:null);var d=A(a,"GEOTIEPOINTS"),
f=A(a,"GEOPIXELSCALE"),p=A(a,"GEOTRANSMATRIX"),u=a.has("GEOKEYDIRECTORY")?a.get("GEOKEYDIRECTORY").data:null,a=!1;if(u){var a=2===m(u,"GTRasterTypeGeoKey"),v=m(u,"GTModelTypeGeoKey");2===v?(u=m(u,"GeographicTypeGeoKey"),1024<u&&32766>u&&(y={wkid:u})):1===v&&(u=m(u,"ProjectedCSTypeGeoKey"),1024<u&&32766>u&&(y={wkid:u}))}var w,q;f&&d&&6<=d.length?(w=[f[0],0,d[3]-d[0]*f[0],0,-Math.abs(f[1]),d[4]-d[1]*f[1]],a&&(w[2]-=.5*w[0]+.5*w[1],w[5]-=.5*w[3]+.5*w[4])):p&&16===p.length&&(w=[p[0],p[1],p[3],p[4],p[5],
p[7]]);if(w){q=[{x:0,y:e},{x:0,y:0},{x:l,y:e},{x:l,y:0}];a=void 0;f=d=Number.POSITIVE_INFINITY;u=p=Number.NEGATIVE_INFINITY;for(v=0;v<q.length;v++)a=W(q[v],w),d=a.x>d?d:a.x,p=a.x<p?p:a.x,f=a.y>f?f:a.y,u=a.y<u?u:a.y;q={xmin:d,xmax:p,ymin:f,ymax:u,spatialReference:y}}w=c.filter(function(a){return 1===m(a,"NEWSUBFILETYPE")});var t,z,B,C;0<w.length&&(t=Math.round(Math.log(l/m(w[0],"IMAGEWIDTH"))/Math.LN2),z=Math.round(Math.log(l/m(w[w.length-1],"IMAGEWIDTH"))/Math.LN2),B=m(w[w.length-1],"TILEWIDTH"),
C=m(w[w.length-1],"TILEHEIGHT"));B=0<z?B||b:null;C=0<z?C||h:null;var D;b&&(D=[{maxCol:Math.ceil(l/b)-1,maxRow:Math.ceil(e/h)-1,minRow:0,minCol:0}],w.forEach(function(a){D.push({maxCol:Math.ceil(m(a,"IMAGEWIDTH")/m(a,"TILEWIDTH"))-1,maxRow:Math.ceil(m(a,"IMAGELENGTH")/m(a,"TILELENGTH"))-1,minRow:0,minCol:0})}));c=m(c[0],"GDAL_METADATA");c=X(c);return{width:l,height:e,tileWidth:b,tileHeight:h,planes:k,isBSQ:n,pixelType:K,compression:g,noData:r,isSupported:H,message:x,extent:q,firstPyramidLevel:t,maximumPyramidLevel:z,
pyramidBlockWidth:B,pyramidBlockHeight:C,tileBoundary:D,metadata:c}}function R(c){var a=new DataView(c,0,8),b=a.getUint16(0,!1),h=null;if(18761===b)h=!0;else if(19789===b)h=!1;else throw"unexpected endianess byte";if(42!==a.getUint16(2,h))throw"unexpected tiff identifier";b=a.getUint32(4,h);a=[];do if(b=S(c,h,b),b.success)a.push(b.ifd),b=b.nextIFD;else break;while(0<b);c=Q(a);return L.__assign(L.__assign({},c),{littleEndian:h,ifds:a})}function S(c,a,b,h,l,e){void 0===h&&(h=0);void 0===l&&(l=F.TIFF_TAGS);
void 0===e&&(e=4);b=J(c,a,b,h,l,e);var d,k=b.ifd;k&&(F.ifdTags.forEach(function(b,e){k.has(e)&&(d=k.get(e),d.data=J(c,a,d.valueOffset-h,h,b).ifd)}),k.has("GEOKEYDIRECTORY")&&(d=k.get("GEOKEYDIRECTORY"),(l=d.values)&&4<l.length&&(l=l[0]+"."+l[1]+"."+l[2],d.data=J(c,a,d.valueOffset+6-h,h,F.GEO_KEYS,2).ifd,d.data&&d.data.set("GEOTIFFVersion",{id:0,type:2,valueCount:1,valueOffset:null,values:[l]}))),k.has("XMP")&&(d=k.get("XMP"),l=d.values,"number"===typeof l[0]&&7===d.type&&(d.values=[V.bytesToUTF8(new Uint8Array(l))])));
return b}Object.defineProperty(q,"__esModule",{value:!0});q.decode=q.decodeTileOrStrip=q.parseIFD=q.parseSignature=q.parseHeader=q.getImageInfo=q.parseFieldValues=void 0;var T=function(){var c=new ArrayBuffer(4),a=new Uint8Array(c);(new Uint32Array(c))[0]=1;return 1===a[0]}(),P=[0,1,1,2,4,8,1,1,2,4,8,4,8],U=function(c,a,b,h,l){a=T===a;var e=m(b,"BITSPERSAMPLE"),d=m(b,"SAMPLEFORMAT")||1,e=N(d,e),d=m(b,"COMPRESSION")[0]||1;b=G(e);var k,f;1===d?(k=c.slice(h,h+l),f=new Uint8Array(k)):8===d||32946===d?
(f=new Uint8Array(c,h,l),f=new I(f),c=f.getBytes(),k=new ArrayBuffer(c.length),f=new Uint8Array(k),f.set(c)):6===d&&(f=new Uint8Array(c,h,l),k=new M,k.parse(f),c=k.getData(k.width,k.height,!0),k=new ArrayBuffer(c.length),f=new Uint8Array(k),f.set(c));if("u8"!==e&&"s8"!==e&&!a)switch(k=new ArrayBuffer(f.length),a=new Uint8Array(k),e){case "u16":case "s16":for(e=0;e<f.length;e+=2)a[e]=f[e+1],a[e+1]=f[e];break;case "u32":case "s32":case "f32":for(e=0;e<f.length;e+=4)a[e]=f[e+3],a[e+1]=f[e+2],a[e+2]=
f[e+1],a[e+3]=f[e]}return new b(k)},Y=function(c,a,b){if(!(c&&0<c.length&&a&&b))return null;for(var h,l,e,d=c[0].length,k=c.length,f=new Uint8Array(d),m=0;m<k;m++)if(h=c[m],l=a[m],e=b[m],0===m)for(var n=0;n<d;n++)f[n]=h[n]<l||h[n]>e?0:1;else for(n=0;n<d;n++)f[n]&&(f[n]=h[n]<l||h[n]>e?0:1);return f},X=function(c){if(!c)return null;var a=c.match(/<Item(.*?)Item>/gi);if(!a||0===a.length)return null;c=new Map;for(var b,h,l,e,d=0;d<a.length;d++)b=a[d],h=b.slice(6,b.indexOf("\x3e")),l=b.indexOf("sample\x3d"),
-1<l&&(e=b.slice(l+8,b.indexOf('"',l+8))),l=b.indexOf("name\x3d"),-1<l&&(h=b.slice(l+6,b.indexOf('"',l+6))),h&&(b=b.slice(b.indexOf("\x3e")+1,b.indexOf("\x3c/Item\x3e")).trim(),null!=e?c.has(h)?c.get(h)[e]=b:c.set(h,[b]):c.set(h,b)),e=null;a=c.get("STATISTICS_MINIMUM");h=c.get("STATISTICS_MAXIMUM");b=c.get("STATISTICS_MEAN");l=c.get("STATISTICS_STDDEV");e=null;if(a&&h)for(e=[],d=0;d<a.length;d++)e.push({min:parseFloat(a[d]),max:parseFloat(h[d]),avg:b&&parseFloat(b[d]),stddev:l&&parseFloat(l[d])});
h=c.get("BandName");b=c.get("WavelengthMin");l=c.get("WavelengthMax");a=null;if(h)for(a=[],d=0;d<h.length;d++)a.push({BandName:h[d],WavelengthMin:b&&parseFloat(b[d]),WavelengthMax:l&&parseFloat(l[d])});d=c.get("DataType");return{statistics:e,bandProperties:a,dataType:d,rawMetadata:c}};q.parseFieldValues=O;q.getImageInfo=Q;q.parseHeader=R;q.parseSignature=function(c){var a=new DataView(c,0,8),b=a.getUint16(0,!1);c=null;if(18761===b)c=!0;else if(19789===b)c=!1;else throw"unexpected endianess byte";
if(42!==a.getUint16(2,c))throw"unexpected tiff identifier";a=a.getUint32(4,c);return{littleEndian:c,firstIFD:a}};q.parseIFD=S;q.decodeTileOrStrip=function(c,a){var b=a.headerInfo,h=a.ifd,l=U(c,b.littleEndian,h,a.offset||0,a.size||c.byteLength);c=b.pixelType;for(var e=b.isBSQ,d=b.planes,k=G(c),f=l.length/d,q,n=[],g=0;g<d;g++){q=new k(f);if(e)q=l.slice(f*g,f*(g+1));else for(var r=0;r<f;r++)q[r]=l[r*d+g];n.push(q)}var l=m(h,"TILEWIDTH"),h=m(h,"TILELENGTH"),e=b.noData?b.noData[0]:null,b=(d=b.metadata?
b.metadata.statistics:null)?d.map(function(a){return a.min}):null,d=d?d.map(function(a){return a.max}):null,p;if(null!=e)if(p=new Uint8Array(f),1E24<Math.abs(e))for(a=0;a<f;a++)p[a]=1E-6>Math.abs((n[0][a]-e)/e)?0:1;else for(a=0;a<f;a++)p[a]=n[0][a]===e?0:1;else b&&d&&a.applyMinMaxConstraint&&(p=Y(n,b,d));return{pixelType:c,width:l,height:h,pixels:n,mask:p,noDataValue:e}};q.decode=function(c,a){a=a||R(c);var b=a.ifds,h=a.noData;if(0===b.length)throw"no valid image file directory";b=b[0];h=h?h[0]:null;
if(a.tileWidth){var l=A(b,"TILEOFFSETS");if(void 0===l)b=null;else{for(var e=A(b,"TILEBYTECOUNTS"),d=a.tileWidth,k=a.tileHeight,f=a.width,m=a.height,n=a.pixelType,g=a.isBSQ,r=a.planes,p=f*m,q=A(b,"BITSPERSAMPLE")[0],x=G(n),y=[],u=0;u<r;u++)y.push(new x(p));var v,w,E,t,z,B,C,D,p=Math.ceil(f/d);if(0===q%8)for(q=0;q<l.length;q++)for(v=Math.floor(q/p)*k,t=q%p*d,u=v*f+t,x=U(c,a.littleEndian,b,l[q],e[q]),B=0,z=u,t=Math.min(d,f-t),C=Math.min(k,m-v),v=0;v<r;v++)if(D=y[v],g)for(w=0;w<C;w++)for(z=u+w*f,B=d*
k*v+w*d,E=0;E<t;E++,z++,B++)D[z]=x[B];else for(w=0;w<C;w++)for(z=u+w*f,B=w*d*r+v,E=0;E<t;E++,z++,B+=r)D[z]=x[B];b={width:f,height:m,pixelType:n,pixels:y}}}else if(k=a,y=T===k.littleEndian,p=A(b,"STRIPOFFSETS"),void 0===p)b=null;else{a=k.width;l=k.height;e=k.pixelType;k=k.planes;f=a*l;q=A(b,"BITSPERSAMPLE")[0];m=G(e);n=new m(f*k);x=A(b,"STRIPBYTECOUNTS");u=A(b,"ROWSPERSTRIP")[0];z=A(b,"COMPRESSION")?A(b,"COMPRESSION")[0]:1;t=u;if(0===q%8)for(b=0;b<p.length;b++){B=b*u*a*k;t=(b+1)*u>l?l-b*u:u;if("u8"===
e||"s8"===e||y)8===z||32946===z?(g=new Uint8Array(c,p[b],x[b]),g=new I(g),v=g.getBytes(),r=new ArrayBuffer(v.length),g=new Uint8Array(r),g.set(v),g.length!==t*a*k*q/8&&console.log("strip byte counts is different than expected")):6===z?(g=new Uint8Array(c,p[b],x[b]),r=new M,r.parse(g),t=r.getData(r.width,r.height,!0),r=new ArrayBuffer(t.length),g=new Uint8Array(r),g.set(t)):1===z&&(x[b]!==t*a*k*q/8&&console.log("strip byte counts is different than expected"),r=c.slice(p[b],p[b]+x[b]));else switch(6===
z||8===z||32946===z?(g=new Uint8Array(c,p[b],x[b]),g=new I(g),g=g.getBytes(),r=new ArrayBuffer(g.length),d=new Uint8Array(r),g.length!==t*a*k*q/8&&console.log("strip byte counts is different than expected")):1===z&&(x[b]!==t*a*k*q/8&&console.log("strip byte counts is different than expected"),r=new ArrayBuffer(x[b]),g=new Uint8Array(c,p[b],x[b]),d=new Uint8Array(r)),e){case "u16":case "s16":for(t=0;t<g.length;t+=2)d[t]=g[t+1],d[t+1]=g[t];break;case "u32":case "s32":case "f32":for(t=0;t<g.length;t+=
4)d[t]=g[t+3],d[t+1]=g[t+2],d[t+2]=g[t+1],d[t+3]=g[t]}t=new m(r);n.set(t,B)}g=[];if(1===k)g.push(n);else for(b=0;b<k;b++){d=new m(f);for(c=0;c<f;c++)d[c]=n[c*k+b];g.push(d)}b={width:a,height:l,pixelType:e,pixels:g}}if(null!==h){b.mask=new Uint8Array(b.width*b.height);if(1E24<Math.abs(h))for(c=0;c<b.width*b.height;c++)b.mask[c]=1E-6>Math.abs((b.pixels[0][c]-h)/h)?0:1;else for(c=0;c<b.width*b.height;c++)b.mask[c]=b.pixels[0][c]===h?0:1;b.noDataValue=h}return b}});
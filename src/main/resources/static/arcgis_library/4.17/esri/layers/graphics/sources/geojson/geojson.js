// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Error ../../OptimizedFeature ../../OptimizedGeometry".split(" "),function(J,m,u,y,C,D){function E(a){var b=[];a.forEach(function(a){return b.push(a)});return b}function B(a){var b,c,d,g;return u.__generator(this,function(e){switch(e.label){case 0:b=a.type;switch(b){case "Feature":return[3,1];case "FeatureCollection":return[3,3]}return[3,7];case 1:return[4,a];case 2:return e.sent(),[3,7];case 3:c=0,d=a.features,e.label=4;case 4:return c<d.length?(g=d[c])?
[4,g]:[3,6]:[3,7];case 5:e.sent(),e.label=6;case 6:return c++,[3,4];case 7:return[2]}})}function F(a){var b,c,d,g,e,h,k,f,n,p;return u.__generator(this,function(l){switch(l.label){case 0:if(!a)return[2,null];b=a.type;switch(b){case "Point":return[3,1];case "LineString":return[3,3];case "MultiPoint":return[3,3];case "MultiLineString":return[3,5];case "Polygon":return[3,5];case "MultiPolygon":return[3,10]}return[3,17];case 1:return[4,a.coordinates];case 2:return l.sent(),[3,17];case 3:return[5,u.__values(a.coordinates)];
case 4:return l.sent(),[3,17];case 5:c=0,d=a.coordinates,l.label=6;case 6:if(!(c<d.length))return[3,9];g=d[c];return[5,u.__values(g)];case 7:l.sent(),l.label=8;case 8:return c++,[3,6];case 9:return[3,17];case 10:e=0,h=a.coordinates,l.label=11;case 11:if(!(e<h.length))return[3,16];k=h[e];f=0;n=k;l.label=12;case 12:if(!(f<n.length))return[3,15];p=n[f];return[5,u.__values(p)];case 13:l.sent(),l.label=14;case 14:return f++,[3,12];case 15:return e++,[3,11];case 16:return[3,17];case 17:return[2]}})}function G(a,
b){var c,d,g,e,h,k,f,n,p,l;void 0===b&&(b={});return u.__generator(this,function(m){switch(m.label){case 0:c=b.geometryType,d=b.objectIdFieldName,m.label=1;case 1:g=a.next();e=g.value;if(h=g.done)return[2];k=e.geometry;f=e.properties;n=e.id;if(k&&z[k.type]!==c)return[3,1];p=f||{};d&&null!=n&&!p[d]&&(p[d]=n);l=new C.default(k?H(new D.default,k,b):null,p);return[4,l];case 2:return m.sent(),[3,1];case 3:return[2]}})}function I(a){for(;;){var b=a.next();if(b.done)return!1;if(2<b.value.length)return!0}}
function v(a){for(var b=0,c=0;c<a.length;c++)var d=a[c],g=a[(c+1)%a.length],b=b+(d[0]*g[1]-g[0]*d[1]);return 0>=b}function w(a){var b=a[0],c=a[a.length-1];b[0]===c[0]&&b[1]===c[1]&&b[2]===c[2]||a.push(b);return a}function H(a,b,c){switch(b.type){case "LineString":return r(a,b.coordinates,c),a;case "MultiLineString":var d=0;for(b=b.coordinates;d<b.length;d++)r(a,b[d],c);return a;case "MultiPoint":return r(a,b.coordinates,c),a;case "MultiPolygon":d=0;for(b=b.coordinates;d<b.length;d++){var g=b[d],e=
a,h=c,k=w(g[0]);v(k)?r(e,k,h):x(e,k,h);for(e=1;e<g.length;e++){var h=a,k=c,f=w(g[e]);v(f)?x(h,f,k):r(h,f,k)}}return a;case "Point":return A(a,b.coordinates,c),a;case "Polygon":d=b.coordinates;b=w(d[0]);v(b)?r(a,b,c):x(a,b,c);for(b=1;b<d.length;b++)g=a,e=c,h=w(d[b]),v(h)?x(g,h,e):r(g,h,e);return a}}function r(a,b,c){for(var d=0;d<b.length;d++)A(a,b[d],c);a.lengths.push(b.length)}function x(a,b,c){for(var d=b.length-1;0<=d;d--)A(a,b[d],c);a.lengths.push(b.length)}function A(a,b,c){var d=b[2];a.coords.push(b[0],
b[1]);c.hasZ&&a.coords.push(d||0)}Object.defineProperty(m,"__esModule",{value:!0});m.createOptimizedFeatures=m.inferLayerProperties=m.validateGeoJSON=void 0;var z={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};m.validateGeoJSON=function(a){if(!a)throw new y("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==a.type&&"FeatureCollection"!==
a.type)throw new y("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:a});if(a=a.crs){var b="string"===typeof a?a:"name"===a.type?a.properties.name:null,c=/.*(CRS84H?|4326)$/i;if(!b||!c.test(b))throw new y("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:a});}};m.inferLayerProperties=function(a,b){void 0===b&&(b={});var c=B(a),d=[],g=new Set,e=new Set,h=!1,k=Number.NEGATIVE_INFINITY,f=null,m=!1,p=void 0;a=b.geometryType;var l=void 0===
a?null:a,r=!1;for(a=function(){var a=c.next(),b=a.value;if(a.done){var q=f&&1===f.length&&f[0]||null;if(q)for(b=0;b<d.length;b++)a=d[b],a.name===q&&(a.type="esriFieldTypeOID");return{value:{fields:d,geometryType:l,hasZ:h,maxObjectId:Math.max(0,k),objectIdFieldName:q,objectIdFieldType:p,unknownFields:E(e)}}}var a=b.geometry,n=b.properties,t=b.id;if(a&&(l||(l=z[a.type]),z[a.type]!==l))return"continue";h||(b=F(a),h=I(b));!m&&(m=null!=t)&&(p=typeof t,"number"===p&&(f=Object.keys(n).filter(function(a){return n[a]===
t})));m&&"number"===p&&null!=t&&(k=Math.max(k,t),1<f.length?f=f.filter(function(a){return n[a]===t}):1===f.length&&(f=n[f[0]]===t?f:[]));if(!r&&n){b=!0;for(q in n)if(!g.has(q))if(a=n[q],null==a)b=!1,e.add(q);else{a:switch(typeof a){case "string":a="esriFieldTypeString";break a;case "number":a="esriFieldTypeDouble";break a;default:a="unknown"}"unknown"===a?e.add(q):(e.delete(q),g.add(q),d.push({name:q,alias:q,type:a}))}r=b}};;)if(b=a(),"object"===typeof b)return b.value};m.createOptimizedFeatures=
function(a,b){a:for(a=G(B(a),b),b=[];;){var c=a.next(),d=c.value;if(c.done)break a;b.push(d)}return b}});
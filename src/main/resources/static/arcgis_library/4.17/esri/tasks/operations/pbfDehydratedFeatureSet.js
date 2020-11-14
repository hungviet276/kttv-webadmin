// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../core/compilerUtils ../../core/uid ../../geometry/SpatialReference ../../layers/graphics/dehydratedFeatures ../../layers/support/Field ./zscale".split(" "),function(h,f,m,n,p,k,q,r){function t(b,a){return a}function g(b,a,c,d){switch(c){case 0:return b.translate[0]+(a+d)*b.scale[0];case 1:return"lowerLeft"===b.originPosition?b.translate[1]+(a+d)*b.scale[1]:b.translate[1]-(a+d)*b.scale[1]}}function l(b,a,c,d){switch(c){case 2:return b.translate[2]+a*b.scale[2];default:return g(b,
a,c,d)}}function u(b,a,c,d){switch(c){case 2:return b.translate[3]+a*b.scale[3];default:return g(b,a,c,d)}}function v(b,a,c,d){switch(c){case 3:return b.translate[3]+a*b.scale[3];default:return l(b,a,c,d)}}Object.defineProperty(f,"__esModule",{value:!0});f.DehydratedFeatureSetParserContext=void 0;h=function(){function b(a){this.options=a;this.geometryTypes=["point","multipoint","polyline","polygon"];this.previousCoordinate=[0,0];this.transform=null;this.applyTransform=t;this.lengths=[];this.vertexDimension=
this.toAddInCurrentPath=this.currentLengthIndex=0;this.coordinateBuffer=null;this.coordinateBufferPtr=0;this.AttributesConstructor=function(){}}b.prototype.createFeatureResult=function(){return new k.DehydratedFeatureSetClass};b.prototype.finishFeatureResult=function(a){this.options.applyTransform&&(a.transform=null);this.AttributesConstructor=function(){};this.coordinateBuffer=null;this.lengths.length=0;if(a.hasZ){var c=r.getGeometryZScaler(a.geometryType,this.options.sourceSpatialReference,a.spatialReference);
if(c){var d=0;for(a=a.features;d<a.length;d++)c(a[d].geometry)}}};b.prototype.createSpatialReference=function(){return new p};b.prototype.addField=function(a,c){a.fields.push(q.fromJSON(c));var d=a.fields.map(function(a){return a.name});this.AttributesConstructor=function(){for(var a=0;a<d.length;a++)this[d[a]]=null}};b.prototype.addFeature=function(a,c){var d=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(0<d)for(var b in c.attributes){var e=c.attributes[b];"string"===
typeof e&&e.length>d&&(c.attributes[b]="")}a.features.push(c)};b.prototype.prepareFeatures=function(a){var c=this;this.options.applyTransform&&a.transform&&(this.transform=a.transform,this.applyTransform=this.deriveApplyTransform(a));this.vertexDimension=2;a.hasZ&&this.vertexDimension++;a.hasM&&this.vertexDimension++;switch(a.geometryType){case "point":this.addCoordinate=function(a,b,e){return c.addCoordinatePoint(a,b,e)};this.createGeometry=function(a){return c.createPointGeometry(a)};break;case "polygon":this.addCoordinate=
function(a,b,e){return c.addCoordinatePolygon(a,b,e)};this.createGeometry=function(a){return c.createPolygonGeometry(a)};break;case "polyline":this.addCoordinate=function(a,b,e){return c.addCoordinatePolyline(a,b,e)};this.createGeometry=function(a){return c.createPolylineGeometry(a)};break;case "multipoint":this.addCoordinate=function(a,b,e){return c.addCoordinateMultipoint(a,b,e)};this.createGeometry=function(a){return c.createMultipointGeometry(a)};break;default:m.neverReached(a.geometryType)}};
b.prototype.createFeature=function(){this.currentLengthIndex=this.lengths.length=0;this.previousCoordinate[0]=0;this.previousCoordinate[1]=0;this.coordinateBuffer=null;this.coordinateBufferPtr=0;return new k.DehydratedFeatureClass(n.generateUID(),null,new this.AttributesConstructor)};b.prototype.addLength=function(a,c,b){0===this.lengths.length&&(this.toAddInCurrentPath=c);this.lengths.push(c)};b.prototype.createPointGeometry=function(a){a={type:"point",x:0,y:0,spatialReference:a.spatialReference,
hasZ:!!a.hasZ,hasM:!!a.hasM};a.hasZ&&(a.z=0);a.hasM&&(a.m=0);return a};b.prototype.addCoordinatePoint=function(a,c,b){c=this.applyTransform(this.transform,c,b,0);switch(b){case 0:a.x=c;break;case 1:a.y=c;break;case 2:a.hasZ?a.z=c:a.m=c;break;case 3:a.m=c}};b.prototype.transformPathLikeValue=function(a,c){var b=0;1>=c&&(b=this.previousCoordinate[c],this.previousCoordinate[c]+=a);return this.applyTransform(this.transform,a,c,b)};b.prototype.addCoordinatePolyline=function(a,c,b){this.dehydratedAddPointsCoordinate(a.paths,
c,b)};b.prototype.addCoordinatePolygon=function(a,b,d){this.dehydratedAddPointsCoordinate(a.rings,b,d)};b.prototype.addCoordinateMultipoint=function(a,b,d){0===d&&a.points.push([]);b=this.transformPathLikeValue(b,d);a.points[a.points.length-1].push(b)};b.prototype.createPolygonGeometry=function(a){return{type:"polygon",rings:[[]],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}};b.prototype.createPolylineGeometry=function(a){return{type:"polyline",paths:[[]],spatialReference:a.spatialReference,
hasZ:!!a.hasZ,hasM:!!a.hasM}};b.prototype.createMultipointGeometry=function(a){return{type:"multipoint",points:[],spatialReference:a.spatialReference,hasZ:!!a.hasZ,hasM:!!a.hasM}};b.prototype.dehydratedAddPointsCoordinate=function(a,b,d){if(null===this.coordinateBuffer){var c=this.lengths.reduce(function(a,b){return a+b},0);this.coordinateBuffer=new Float64Array(c*this.vertexDimension)}0===d&&0===this.toAddInCurrentPath--&&(a.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-
1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);b=this.transformPathLikeValue(b,d);a=a[a.length-1];0===d&&a.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension));this.coordinateBuffer[this.coordinateBufferPtr++]=b};b.prototype.deriveApplyTransform=function(a){var b=a.hasZ;a=a.hasM;return b&&a?v:b?l:a?u:g};return b}();f.DehydratedFeatureSetParserContext=h});
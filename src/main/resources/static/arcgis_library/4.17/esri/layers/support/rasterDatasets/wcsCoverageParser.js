// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/arrayUtils ../../../geometry/Extent ../RasterInfo ../wmsUtils ./xmlUtilities".split(" "),function(R,u,C,A,v,D,H,a){function I(d){var e=a.getElementValues(d,"requestResponseCRSs").map(function(a){return a.split(":")[1]});d=a.getElementValues(d,"nativeCRSs").map(function(a){return a.split(":")[1]});return{requestResponseCRSs:e,nativeCRSs:d}}function J(d){var e=a.getElementValues(d,"interpolationMethod"),c=d.getAttribute("default");return null!=c?[c].concat(e.filter(function(a){return a.toLowerCase()!==
c.toLowerCase()})):e}function E(a){return null==a?["nearest"]:a.map(function(a){a=a.toLowerCase();return-1<a.indexOf("nearest")?"nearest":-1<a.indexOf("linear")?"bilinear":-1<a.indexOf("cubic")?"cubic":null}).filter(function(a){return!!a})}function K(a){void 0===a&&(a=null);if(!a)return{resolution:null,units:null};var d=a.toUpperCase(),c=["Y","M","D"],k=["H","M","S"];a="Years Months Days Hours Minutes Seconds".split(" ");var h;-1===d.indexOf("PT")?(d=d.slice(1),c=A.findIndex(c,function(a){return-1<
d.indexOf(a)}),-1<c&&(h=a[c])):(d=d.slice(2),c=A.findIndex(k,function(a){return-1<d.indexOf(a)}),h=a[3+c]);return{resolution:parseFloat(d.substring(0,d.length-1)),units:h}}function B(d){var e=a.getElements(d,"timeposition");if(0<e.length){d=[];for(var c=0;c<e.length;c++)d.push(new Date(a.getElementValue(e[c])));return{begin:d[0],end:d[d.length-1],values:d}}return(c=a.getElement(d,"timePeriod"))?(e=new Date(a.getElementValue(c,"beginPosition")),d=new Date(a.getElementValue(c,"endPosition")),c=a.getElementValue(c,
"timeResolution"),c=K(c),C.__assign({begin:e,end:d},c)):null}function L(a,e){a=a.filter(function(a){return-1===a.identifier.toLowerCase().indexOf("field_1")&&!a.axis.some(function(a){return"band"===a.identifier.toLowerCase()})});var d=[];a.length&&a.forEach(function(a){var b,f=a.axis.map(function(a){var b=a.values.map(function(a){return parseFloat(a.trim())}),d=[Math.min.apply(null,b),Math.max.apply(null,b)];return{name:a.identifier.trim(),description:"",field:a.identifier.trim(),unit:a.valuesUnit?
a.valuesUnit.trim():"",hasRegularIntervals:!1,values:b,extent:d}});d.push({name:a.identifier.trim(),description:null!==(b=null===a||void 0===a?void 0:a.description.trim())&&void 0!==b?b:"",unit:"",dimensions:f})});if(e.temporalDomain){e=e.temporalDomain;var k=e.begin,h=e.end,b=e.values,f=e.units,t=e.resolution;d.forEach(function(a){a.dimensions.push({name:"StdTime",description:"",unit:"ISO8601",values:null===b||void 0===b?void 0:b.map(function(a){return a.getTime()}),hasRegularIntervals:!b,interval:t,
intervalUnit:f,extent:[k.getTime(),h.getTime()]})})}return d.length?{variables:d}:null}function M(d){var e,c,k=a.getElement(d,"SpatialDomain"),h=a.getElement(k,"GridCRS"),b=a.getElementValue(h,"GridBaseCRS"),f=a.getElementValue(h,"GridOrigin"),f=null!==(e=null===f||void 0===f?void 0:f.split(" ").map(function(a){return parseFloat(a)}))&&void 0!==e?e:[0,0];e=a.getSpaceDelimitedNumericValues(h,"GridOffsets");for(var k=a.getElements(k,"BoundingBox"),t,n,m,g,h=0;h<k.length;h++){var l=null===(c=k[h].getAttribute("crs"))||
void 0===c?void 0:c.toLowerCase();if(null!=l)if(-1<l.indexOf("imagecrs")){var l=a.getSpaceDelimitedNumericValues(k[h],"LowerCorner"),q=a.getSpaceDelimitedNumericValues(k[h],"UpperCorner");t=q[0]-l[0]+1;n=q[1]-l[1]+1}else 0<l.indexOf("epsg")&&(m=l.split(":"),m=parseInt(m[m.length-1],10),l=a.getSpaceDelimitedNumericValues(k[h],"LowerCorner"),q=a.getSpaceDelimitedNumericValues(k[h],"UpperCorner"),g=new v({xmin:l[0],ymin:l[1],xmax:q[0],ymax:q[1],spatialReference:{wkid:m}}))}c=t>n;k=g.xmax-g.xmin>g.ymax-
g.ymin;h=!1;H.coordsReversed(m)&&(c===k?h=!1:(h=!0,g=new v({xmin:g.ymin,ymin:g.xmin,xmax:g.ymax,ymax:g.xmax,spatialReference:{wkid:m}})));b={columns:t,rows:n,origin:{x:f[0],y:f[1]},offset:{x:e[0],y:e[1]},gridBaseCRS:b,envelope:g,useEPSGAxis:h};d=(d=a.getElement(d,"temporalDomain"))?B(d):null;return{spatialDomain:b,temporalDomain:d}}function N(d){var e=a.getElement(d,"Envelope")||a.getElement(d,"EnvelopeWithTimePeriod"),c=e.getAttribute("srsName"),k=c.slice(c.lastIndexOf("/")+1),h=e.getAttribute("axisLabels"),
b=a.getSpaceDelimitedNumericValues(e,"lowerCorner"),f=a.getSpaceDelimitedNumericValues(e,"upperCorner"),k=(c=!"y lat latitude north nor n b".split(" ").some(function(a){return a===h[0].toLowerCase()}))?new v({xmin:b[0],ymin:b[1],xmax:f[0],ymax:f[1],spatialReference:{wkid:parseInt(k,10)}}):new v({xmin:b[1],ymin:b[0],xmax:f[1],ymax:f[0],spatialReference:{wkid:parseInt(k,10)}}),b={mins:b,maxs:f},f=e.getAttribute("uomLabels").trim().split(" "),t,n;a.isSameTagIgnoreNS(e,"EnvelopeWithTimePeriod")&&(t=new Date(a.getElementValue(d,
"beginPosition")),n=new Date(a.getElementValue(d,"endPosition")));return{envelope:k,axisLabels:h,uomLabels:f.length?f:null,envelopeAllDims:b,beginPosition:t,endPosition:n,isEastFirst:c}}function O(a){var d=1,c="";Math.abs(a-1/24)<1/24*.01?c="Hours":.01>Math.abs(a-1)?c="Days":1>a?(d=Math.round(24*a),c="Hours"):27.99<a&&31.01>a?c="Months":12>Math.round(a/30)?c="Months":364.99<a&&366.01>a&&(c="Years");return{interval:d,intervalUnit:c}}function P(a,e,c){for(var d=[],h=0;h<a.length;h++)for(var b=a[h],
f=0;f<b.length;f++)-1===b[f].name.toLowerCase().indexOf("band")&&d.push(b[f]);var t=[];if(d.length){var n=[];for(a=2;a<c.axisLabels.length;a++){var m=(e.uomLabels&&e.uomLabels.length)>a?e.uomLabels[a]:"",h=-1<c.axisLabels[a].toLowerCase().indexOf("time")||"iso8601"===m.toLowerCase(),f=b=void 0;h?(f=O(c.offset[a]),b=f.interval,f=f.intervalUnit):(b=c.offset[a],f=m);m=[];h?(m.push((new Date).setTime(864E5*(e.envelopeAllDims.mins[a]-25569))),m.push((new Date).setTime(864E5*(e.envelopeAllDims.maxs[a]-
25569)))):(m.push(e.envelopeAllDims.mins[a]),m.push(e.envelopeAllDims.maxs[a]));n.push({name:c.axisLabels[a].trim(),description:c.axisLabels[a].trim(),unit:e.uomLabels&&e.uomLabels.length>a?e.uomLabels[a].trim():"",hasRegularIntervals:!0,extent:m,interval:b,intervalUnit:f})}d.forEach(function(a){return t.push({name:a.name.trim(),description:a.description.trim(),unit:a.uom.trim(),dimensions:n})});if(t.length)return{variables:t}}return null}function Q(d){var e=a.getElement(d,"RectifiedGrid"),c=a.getSpaceDelimitedNumericValues(e,
"low"),k=a.getSpaceDelimitedNumericValues(e,"high");d=[];for(var h=0;h<c.length;h++)d.push(k[h]-c[h]+1);for(var b=a.getElementValue(e,"axisLabels").split(" "),c=a.getSpaceDelimitedNumericValues(e,"origin/pos"),k=a.getElements(e,"offsetVector"),e=[],h=0;h<k.length;h++)e.push(parseFloat(a.getElementValue(k[h]).split(" ")[h]));var f;"y lat latitude north nor n b".split(" ").some(function(a){return a===b[0].toLowerCase()})?(h=d[1],k=d[0],f={y:Math.abs(e[0]),x:Math.abs(e[1])}):(h=d[0],k=d[1],f={x:Math.abs(e[0]),
y:Math.abs(e[1])});return{columns:h,rows:k,origin:c,offset:e,resolution:f,gridSamples:d,axisLabels:b}}Object.defineProperty(u,"__esModule",{value:!0});u.parseCoverages=u.standardizeInterpolations=void 0;u.standardizeInterpolations=E;u.parseCoverages=function(d,e){var c=null,c="string"===typeof d?(new DOMParser).parseFromString(d,"text/xml"):d;if("1.0.0"===e)return a.getElements(c,"CoverageOffering").map(function(d){var h,b,f={version:"1.0"};h=[];for(var e=0;e<d.childNodes.length;e++)if(b=d.childNodes[e],
1===b.nodeType)if(a.isSameTagIgnoreNS(b,"description"))f.description=a.getElementValue(b);else if(a.isSameTagIgnoreNS(b,"name"))f.name=a.getElementValue(b);else if(a.isSameTagIgnoreNS(b,"label"))f.label=a.getElementValue(b);else if(a.isSameTagIgnoreNS(b,"supportedFormats"))f.supportedFormats=a.getElementValues(b,"formats");else if(a.isSameTagIgnoreNS(b,"supportedCRSs"))f.supportedCRSs=I(b);else if(a.isSameTagIgnoreNS(b,"supportedInterpolations"))f.supportedInterpolations=J(b);else if(a.isSameTagIgnoreNS(b,
"lonLatEnvelope")){var c=a.getElements(b,"pos");b=a.getSpaceDelimitedNumericValues(c[0]);c=a.getSpaceDelimitedNumericValues(c[1]);b=new v({xmin:b[0],ymin:b[1],xmax:c[0],ymax:c[1],spatialReference:{wkid:4326}});f.lonLatEnvelope=b}else if(a.isSameTagIgnoreNS(b,"rangeSet")){h=[];c=a.getElements(b,"RangeSet");b=[];for(var m=0;m<c.length;m++){for(var g=a.getElementValue(c[m],"name"),l=a.getElementValue(c[m],"label"),k=[],p=a.getElements(c[m],"AxisDescription"),r=0;r<p.length;r++){var F=a.getElementValue(p[r],
"name"),u=a.getElementValue(p[r],"label"),z=a.getElementValues(p[r],"singleValue");if(0===z.length){var w=a.getElementValue(p[r],"min"),x=a.getElementValue(p[r],"max"),y=Number(a.getElementValue(p[r],"res"))||1;if(null!==w&&null!==x)for(w=parseInt(w,10);w<=parseInt(x,10);w+=y)z.push(w.toString())}"band"===F.toLowerCase()&&(b=z);k.push({name:F,label:u,values:z})}h.push({name:g,label:l,axis:k})}f.rangeSet=h;h=b}else a.isSameTagIgnoreNS(b,"domainSet")&&(c=a.getElement(b,"spatialDomain"),g=a.getElement(c,
"Envelope")||a.getElement(c,"EnvelopeWithTimePeriod"),m=g.getAttribute("srsName").split(":"),m=m[m.length-1],l=a.getElements(g,"pos"),g=a.getSpaceDelimitedNumericValues(l[0]),l=a.getSpaceDelimitedNumericValues(l[1]),m=new v({xmin:g[0],ymin:g[1],xmax:l[0],ymax:l[1],spatialReference:{wkid:parseInt(m,10)}}),g=a.getElement(c,"RectifiedGrid"),l=a.getElementValue(g,"low").split(" "),k=a.getElementValue(g,"high").split(" "),g=parseInt(k[0],10)-parseInt(l[0],10)+1,l=parseInt(k[1],10)-parseInt(l[1],10)+1,
k=a.getSpaceDelimitedNumericValues(c,"origin/pos"),p=a.getElements(c,"offsetVector"),c=parseFloat(a.getElementValue(p[0]).split(" ")[0]),p=parseFloat(a.getElementValue(p[1]).split(" ")[1]),c={envelope:m,columns:g,rows:l,offset:{x:c,y:p},origin:{x:k[0],y:k[1]}},b=(b=a.getElement(b,"temporalDomain"))?B(b):null,f.domainSet={spatialDomain:c,temporalDomain:b});d=E(f.supportedInterpolations);e=f.name;b=f.description;c=f.label;m=f.lonLatEnvelope;g=f.supportedFormats;l=f.domainSet.spatialDomain;l=new D({width:l.columns,
height:l.rows,pixelSize:{x:Math.abs(l.offset.x),y:Math.abs(l.offset.y)},extent:l.envelope,spatialReference:l.envelope.spatialReference,bandCount:h.length||1});return{id:e,title:f.name,description:b||c,lonLatEnvelope:m,rasterInfo:l,bandNames:h,supportedFormats:g,supportedInterpolations:d,coverageDescription:f,version:"1.0.0",useEPSGAxis:!1}});d=a.getElements(c,"CoverageDescription");return"1.1.0"===e||"1.1.1"===e||"1.1.2"===e?d.map(function(c){for(var d,b,f=[],k=[],n={supportedFormats:f,supportedCRSs:k,
version:"1.1"},m=0;m<c.childNodes.length;m++)if(b=c.childNodes[m],1===b.nodeType){var g=a.getNodeNameIgnoreNS(b).toLowerCase();switch(g){case "title":case "abstract":case "identifier":n[g]=a.getElementValue(b);break;case "supportedformat":b=a.getElementValue(b);-1===f.indexOf(b)&&f.push(b);break;case "supportedcrs":b=a.getElementValue(b);-1===k.indexOf(b)&&k.push(b);break;case "range":d=[];g=a.getElements(b,"Field");b=[];for(var l=0;l<g.length;l++){for(var q=a.getElementValue(g[l],"Identifier"),p=
a.getElementValue(g[l],"Description"),r=a.getElementValue(g[l],"Definition"),u=a.getElementValue(g[l],"Abstract"),v=a.getElementValue(g[l],"Title"),z=a.getElementValues(g[l],"InterpolationMethod"),w=[],x=a.getElements(g[l],"Axis"),y=0;y<x.length;y++){var A=x[y].getAttribute("identifier"),B=a.getElementValue(x[y],"valuesUnit"),C=a.getElementValue(x[y],"DataType"),G=a.getElementValues(x[y],"Key");"band"===A.toLowerCase()&&(b=G);w.push({identifier:A,valuesUnit:B,dataType:C,values:G})}d.push({identifier:q,
description:p,definition:r,abstract:u,title:v,supportedInterpolations:z,axis:w})}n.range=d;d=b;break;case "domain":n.domain=M(b)}}c=E(n.range[0].supportedInterpolations);k=n.identifier;m=n.abstract;b=n.title;g=n.domain;l={x:Math.abs(g.spatialDomain.offset.x),y:Math.abs(g.spatialDomain.offset.y)};q=L(n.range,g);l=new D({width:g.spatialDomain.columns,height:g.spatialDomain.rows,pixelSize:l,extent:g.spatialDomain.envelope,spatialReference:g.spatialDomain.envelope.spatialReference,bandCount:d.length||
1,multidimensionalInfo:q});return{id:k,title:n.title,description:m||b,lonLatEnvelope:null,bandNames:d,rasterInfo:l,supportedFormats:f,supportedInterpolations:c,coverageDescription:n,version:e,useEPSGAxis:g.spatialDomain.useEPSGAxis}}):d.map(function(c){var d,b,f={version:"2.0"};d=[];for(var e=0;e<c.childNodes.length;e++)if(b=c.childNodes[e],1===b.nodeType)if(a.isSameTagIgnoreNS(b,"coverageId"))f.coverageId=a.getElementValue(b);else if(a.isSameTagIgnoreNS(b,"ServiceParameters"))f.serviceParameters=
{supportedFormats:a.getElementValues(b,"nativeFormat")};else if(a.isSameTagIgnoreNS(b,"boundedBy"))f.boundedBy=N(b);else if(a.isSameTagIgnoreNS(b,"rangeType")){d=[];var k=a.getElements(b,"DataRecord");b=[];for(var m=0;m<k.length;m++){for(var g=a.getElements(k[m],"field"),l=[],q=0;q<g.length;q++){var p=g[q].getAttribute("name"),r=a.getElementValue(g[q],"description")||"",u=a.getElement(g[q],"uom").getAttribute("code")||"",v=a.getSpaceDelimitedNumericValues(g[q],"interval");-1<p.toLowerCase().indexOf("band")&&
b.push(p);l.push({name:p,description:r,uom:u,allowedValues:v})}d.push(l)}f.rangeType=d;d=b}else a.isSameTagIgnoreNS(b,"domainSet")&&(f.domainSet=Q(b));c=f.coverageId;b=f.boundedBy;k=f.domainSet;e=f.serviceParameters;m=P(f.rangeType,b,k);b=new D({width:k.columns,height:k.rows,pixelSize:k.resolution,extent:b.envelope,spatialReference:b.envelope.spatialReference,bandCount:d.length||1,multidimensionalInfo:m});return{id:c,title:c,description:c,lonLatEnvelope:null,bandNames:d,rasterInfo:b,supportedFormats:e.supportedFormats,
supportedInterpolations:null,coverageDescription:f,version:"1.0.0",useEPSGAxis:!1}})}});
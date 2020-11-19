// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../Graphic ../../../core/maybe ../../../core/maybe ../../../core/promiseUtils ../../../geometry/Polygon ./geometryUtils".split(" "),function(D,g,x,t,y,n,z,p){function A(a,c){var b=a.source,f=a.spatialReference,e=a.location,l=a.sourceIndex,h=a.view;a=b.locator;var q=b.zoomScale,m=b.defaultZoomScale,k=h&&h.scale;c=c&&c.signal;f&&(a.outSpatialReference=f);return a.locationToAddress({location:e},{signal:c}).then(function(a){return u([a],{sourceIndex:l,scale:k,view:h,zoomScale:q,
defaultZoomScale:m})})}function v(a,c){var b=a.filter;a=a.withinViewEnabled;var f=c&&c.extent;return(c=p.createExtentFromGeometry(b&&b.geometry,c,c&&c.scale))||(a&&f?f:void 0)}function B(a,c){var b=a.source,f=a.suggestResult,e=a.spatialReference,l=a.view,h=a.maxResults,q=a.sourceIndex,m=b&&b.zoomScale,k=b&&b.defaultZoomScale;if(!f.text.trim())return n.resolve();a=""+(!f.key&&b.prefix?b.prefix:"")+f.text+(!f.key&&b.suffix?b.suffix:"");var d={},g=b.locator,p=l&&l.scale,w=v(b,l);c=c&&c.signal;if(!g)return n.resolve();
b.categories&&(d.categories=b.categories);b.locationType&&(d.locationType=b.locationType);e&&(g.outSpatialReference=e);if(e=l&&l.get("extent.center"))d.location=e;d.maxLocations=h;w&&(d.searchExtent=t.unwrap(w));b.countryCode&&(d.countryCode=b.countryCode);var r=f.key;r&&(d.magicKey=r);d.address={};d.address[b.singleLineFieldName||"Single Line Input"]=a;b.outFields&&(d.outFields=b.outFields);return g.addressToLocations(d,{signal:c}).then(function(a){return u(a,{key:r,scale:p,sourceIndex:q,view:l,
zoomScale:m,defaultZoomScale:k})})}function C(a,c){return a.map(function(a){return{text:a.text,key:a.magicKey,sourceIndex:c}})}function u(a,c){return a.map(function(a){var b=c.key,e=c.scale,l=c.sourceIndex,h=c.view,g=c.zoomScale,m=c.defaultZoomScale,k=a.extent,d=a.location,n=a.address;a=new x({geometry:d,attributes:a.attributes});k=k||d;e=p.createExtentFromGeometry(k,h,e);h="number"===typeof g?p.scaleExtent(e,h,g):"number"===typeof m&&"point"===k.type?p.scaleExtent(e,h,m):e;d=d?d.x+","+d.y:"";n=n||
d;d=a.clone();y.isSome(h)&&(d.geometry=z.fromExtent(h));return{extent:h,feature:a,target:d,key:b,name:n,sourceIndex:l}})}Object.defineProperty(g,"__esModule",{value:!0});g.isArcGISWorldGeocoder=g.getSuggestions=g.getResults=void 0;g.getResults=function(a,c){return a.location?A(a,c):B(a,c)};g.getSuggestions=function(a,c){var b=a.source,f=a.spatialReference,e=a.view,g=a.suggestTerm,h=a.maxSuggestions,p=a.sourceIndex;a={};var m=b.locator,k=v(b,e);c=c&&c.signal;if(!m)return n.resolve();b.categories&&
(a.categories=b.categories);m.outSpatialReference=f;if(f=e&&e.get("extent.center"))a.location=f;if(!g.trim())return n.resolve();f=b.prefix;e=b.suffix;a.text=""+(void 0===f?"":f)+g+(void 0===e?"":e);k&&(a.searchExtent=t.unwrap(k));a.maxSuggestions=h;b.countryCode&&(a.countryCode=b.countryCode);return m.suggestLocations(a,{signal:c}).then(function(a){return C(a,p)})};g.isArcGISWorldGeocoder=function(a){return a?/(?:arcgis\.com\/arcgis\/rest\/services\/world\/geocodeserver).*/gi.test(a)||/(?:\/servers\/[\da-z\.-]+\/rest\/services\/world\/geocodeserver).*/gi.test(a):
!1}});
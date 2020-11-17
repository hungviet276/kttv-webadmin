// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/urlUtils","../../support/persistableUrlUtils"],function(p,a,e,m){function h(b){b=e.urlToObject(b);var c=b.path.match(l)||b.path.match(n);if(!c)return null;b=c[1];var a=c[2],f=c[3],c=c[4],g=a.indexOf("/");return{title:k(-1!==g?a.slice(g+1):a),serverType:f,sublayer:null!=c&&""!==c?parseInt(c,10):null,url:{path:b}}}function k(b){b=b.replace(/\s*[/_]+\s*/g," ");return b[0].toUpperCase()+b.slice(1)}Object.defineProperty(a,"__esModule",{value:!0});a.isServerOrServicesAGOLUrl=
a.isWmsServer=a.writeUrlWithLayerId=a.sanitizeUrlWithLayerId=a.sanitizeUrl=a.isHostedSecuredProxyService=a.isHostedAgolService=a.titleFromUrlAndName=a.cleanTitle=a.parse=a.isArcGISUrl=a.serverTypes=void 0;a.serverTypes="MapServer ImageServer FeatureServer SceneServer StreamServer VectorTileServer".split(" ");var l=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/("+a.serverTypes.join("|")+"))(?:\\/(?:layers\\/)?(\\d+))?","i"),n=new RegExp("^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/("+
a.serverTypes.join("|")+"))(?:\\/(?:layers\\/)?(\\d+))?","i");a.isArcGISUrl=function(b){return!!l.test(b)};a.parse=h;a.cleanTitle=k;a.titleFromUrlAndName=function(b,c){var a=[];b&&(b=h(b))&&b.title&&a.push(b.title);c&&(c=k(c),a.push(c));if(2===a.length){if(-1!==a[0].toLowerCase().indexOf(a[1].toLowerCase()))return a[0];if(-1!==a[1].toLowerCase().indexOf(a[0].toLowerCase()))return a[1]}return a.join(" - ")};a.isHostedAgolService=function(b){if(!b)return!1;b=b.toLowerCase();var a=-1!==b.indexOf(".arcgis.com/");
b=-1!==b.indexOf("//services")||-1!==b.indexOf("//tiles")||-1!==b.indexOf("//features");return a&&b};a.isHostedSecuredProxyService=function(b,a){return a&&b&&-1!==b.toLowerCase().indexOf(a.toLowerCase())};a.sanitizeUrl=function(b,a){return b?e.removeTrailingSlash(e.removeQueryParameters(b,a)):b};a.sanitizeUrlWithLayerId=function(b,a,d){if(!a)return{url:a};a=e.removeQueryParameters(a,d);d=e.urlToObject(a);d=h(d.path);var c;d&&null!=d.sublayer&&(null==b.layerId&&(c=d.sublayer),a=d.url.path);return{url:e.removeTrailingSlash(a),
layerId:c}};a.writeUrlWithLayerId=function(a,c,d,f,g){m.write(c,f,"url",g);f.url&&null!=a.layerId&&(f.url=e.join(f.url,d,a.layerId.toString()))};a.isWmsServer=function(a){if(!a)return!1;var b=a.toLowerCase();a=-1!==b.indexOf("/services/");var d=-1!==b.indexOf("/mapserver/wmsserver"),e=-1!==b.indexOf("/imageserver/wmsserver"),b=-1!==b.indexOf("/wmsserver");return a&&(d||e||b)};a.isServerOrServicesAGOLUrl=function(a){if(!a)return!1;a=(new e.Url(e.makeAbsolute(a))).authority.toLowerCase();return"server.arcgisonline.com"===
a||"services.arcgisonline.com"===a}});
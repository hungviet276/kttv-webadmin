// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../has","../Logger","./get"],function(k,b,l,g,h){function d(b,a,c){if(b&&a)if("object"===typeof a){c=0;for(var f=Object.getOwnPropertyNames(a);c<f.length;c++){var e=f[c];d(b,e,a[e])}}else-1!==a.indexOf(".")?(a=a.split("."),e=a.splice(a.length-1,1)[0],d(h.default(b,a),e,c)):b[a]=c}Object.defineProperty(b,"__esModule",{value:!0});b.set=void 0;g.getLogger("esri.core.accessorSupport.set");b.set=d;b.default=d});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/has ../../../../core/lang ../../../../symbols/support/defaultsJSON".split(" "),function(k,b,f,g,e,a){Object.defineProperty(b,"__esModule",{value:!0});b.createDefaultTemplate=b.createDefaultAttributesFunction=b.createDrawingInfo=void 0;b.createDrawingInfo=function(c){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===c||"esriGeometryMultipoint"===c?a.defaultPointSymbolJSON:"esriGeometryPolyline"===c?a.defaultPolylineSymbolJSON:a.defaultPolygonSymbolJSON}}};
b.createDefaultAttributesFunction=function(c,b){if(g("csp-restrictions"))return function(){var a;return f.__assign((a={},a[b]=null,a),c)};try{var a="this."+b+" \x3d null;",d;for(d in c)var e=d.indexOf(".")?'["'+d+'"]':"."+d,a=a+("this"+e+" \x3d "+JSON.stringify(c[d])+";");var h=new Function(a);return function(){return new h}}catch(l){return function(){var a;return f.__assign((a={},a[b]=null,a),c)}}};b.createDefaultTemplate=function(a){void 0===a&&(a={});return[{name:"New Feature",description:"",prototype:{attributes:e.clone(a)}}]}});
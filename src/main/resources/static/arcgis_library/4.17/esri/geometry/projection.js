// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../core/promiseUtils ./pe ./support/GeographicTransformation @dojo/framework/shim/Promise".split(" "),function(p,a,r,h,k){function l(c,d,b,a,e){void 0===e&&(e=null);if(null===e){var f=k.cacheKey(b,a);void 0!==m[f]?e=m[f]:(e=q(b,a,null),null===e&&(e=new k),m[f]=e)}return g._project(c,d,b,a,e)}function q(c,a,b){void 0===b&&(b=null);c=g._getTransformation(f,c,a,b,null===b||void 0===b?void 0:b.spatialReference);return null!==c?k.fromGE(c):null}Object.defineProperty(a,"__esModule",
{value:!0});a.getTransformations=a.getTransformation=a.projectMany=a.project=a.load=a.isSupported=a.isLoaded=void 0;var g=null,f=null;a.isLoaded=function(){return!!g&&h.isLoaded()};a.isSupported=function(){return h.isSupported()};var n=null;a.load=function(){return n?n:n=r.all([h.load(),new Promise(function(c,a){p(["./geometryEngineBase"],c,a)}),new Promise(function(c,a){p(["./geometryAdapters/hydrated"],c,a)})]).then(function(c){var a=c[1];f=c[2].hydratedAdapter;g=a;g._enableProjection(h)})};a.project=
function(a,d,b){void 0===b&&(b=null);return a instanceof Array?0===a.length?[]:l(f,a,a[0].spatialReference,d,b):l(f,[a],a.spatialReference,d,b)[0]};var m={};a.projectMany=l;a.getTransformation=q;a.getTransformations=function(a,d,b){void 0===b&&(b=null);a=g._getTransformationBySuitability(f,a,d,b,null===b||void 0===b?void 0:b.spatialReference);if(null!==a){d=[];for(b=0;b<a.length;b++)d.push(k.fromGE(a[b]));return d}return[]}});
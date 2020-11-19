// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/promiseUtils"],function(p,a,g){Object.defineProperty(a,"__esModule",{value:!0});a.executeForEachAsync=void 0;a.executeForEachAsync=function(a,l,b){var c,m=null!==(c=null===b||void 0===b?void 0:b.batchSize)&&void 0!==c?c:100,e=g.createResolver(),d=0,k=function(){for(var c=Date.now(),f=!1,h=0;!f&&500>h;){try{for(b&&g.throwIfAborted(b);d<Math.min(d+m,a.length);d++)l(a[d])}catch(n){e.reject(n)}h=Date.now()-c;f=d>=a.length}f?e.resolve():setTimeout(k,0)};k();
return e.promise}});
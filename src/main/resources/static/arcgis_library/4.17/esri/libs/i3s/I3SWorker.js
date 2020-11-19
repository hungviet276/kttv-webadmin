// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../assets ../../core/has ../../core/promiseUtils @dojo/framework/shim/Promise".split(" "),function(d,a,f,g,e){function h(a){return f.getAssetUrl("esri/libs/i3s/"+a)}Object.defineProperty(a,"__esModule",{value:!0});a.getWorkerModule=void 0;a.getWorkerModule=function(){if(!c){var a=g("esri-wasm")?new Promise(function(a,b){d(["./i3s"],a,b)}):new Promise(function(a,b){d(["./i3s_nowasm"],a,b)});c=e.create(function(c){return a.then(function(a){var b=a({locateFile:h,onRuntimeInitialized:function(){return c(b)}});
delete b.then})}).catch(function(a){return e.reject(a)})}return c};var c});
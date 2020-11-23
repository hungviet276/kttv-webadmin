// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./promiseUtils"],function(f,a,e){Object.defineProperty(a,"__esModule",{value:!0});a.assertResult=a.result=a.map=a.forEach=void 0;a.forEach=function(a,c,d){return e.eachAlways(a.map(function(a,b){return c.apply(d,[a,b])}))};a.map=function(a,c,d){return e.eachAlways(a.map(function(a,b){return c.apply(d,[a,b])})).then(function(a){return a.map(function(a){return a.value})})};a.result=function(a){return a.then(function(a){return{ok:!0,value:a}}).catch(function(a){return{ok:!1,
error:a}})};a.assertResult=function(a){if(!0===a.ok)return a.value;throw a.error;}});
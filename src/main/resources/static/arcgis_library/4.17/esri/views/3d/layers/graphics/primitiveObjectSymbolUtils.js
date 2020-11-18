// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/compilerUtils","../../webgl-engine/lib/Geometry","../../webgl-engine/lib/GeometryUtil"],function(m,a,f,g,b){Object.defineProperty(a,"__esModule",{value:!0});a.primitiveLodResources=a.primitiveGeometryData=a.isValidPrimitive=void 0;a.isValidPrimitive=function(b){switch(b){case "sphere":case "cube":case "diamond":case "cylinder":case "cone":case "inverted-cone":case "tetrahedron":return!0}return!1};a.primitiveGeometryData=function(a){switch(a){case "sphere":return b.createPolySphereGeometry(.5,
2,!0);case "cube":return b.createBoxGeometry(1);case "cylinder":return b.createCylinderGeometry(1,.5,32,[0,0,1],[0,0,.5]);case "cone":return b.cgToGIS(b.createConeGeometry(1,.5,15,!1));case "inverted-cone":return b.cgToGIS(b.createConeGeometry(1,.5,15,!0));case "tetrahedron":return b.cgToGIS(b.createTetrahedronGeometry(1));case "diamond":return b.cgToGIS(b.createDiamondGeometry(1));default:f.neverReached(a)}};a.primitiveLodResources=function(a,h,k){var c=function(a,c,d){void 0===d&&(d=!1);return{levels:a.map(function(a,
l){var e=c(a.tesselation);d&&b.cgToGIS(e);return{components:[{geometry:new g(e,k+("_lod"+l)),material:h}],faceCount:e.indexCount/3,minScreenSpaceRadius:a.minScreenSpaceRadius}})}};switch(a){case "sphere":return c([{tesselation:0,minScreenSpaceRadius:0},{tesselation:1,minScreenSpaceRadius:8},{tesselation:2,minScreenSpaceRadius:16},{tesselation:3,minScreenSpaceRadius:50},{tesselation:4,minScreenSpaceRadius:250}],function(a){return b.createPolySphereGeometry(.5,a,!0)});case "cube":return c([{tesselation:0,
minScreenSpaceRadius:0}],function(){return b.createBoxGeometry(1)});case "cone":return c(d,function(a){return b.createConeGeometry(1,.5,a,!1)},!0);case "inverted-cone":return c(d,function(a){return b.createConeGeometry(1,.5,a,!0)},!0);case "cylinder":return c(d,function(a){return b.createCylinderGeometry(1,.5,a,[0,0,1],[0,0,.5])});case "tetrahedron":return c([{tesselation:0,minScreenSpaceRadius:0}],function(){return b.createTetrahedronGeometry(1)},!0);case "diamond":return c([{tesselation:0,minScreenSpaceRadius:0}],
function(){return b.createDiamondGeometry(1)},!0);default:f.neverReached(a)}};var d=[{tesselation:6,minScreenSpaceRadius:0},{tesselation:18,minScreenSpaceRadius:7},{tesselation:64,minScreenSpaceRadius:65}]});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/Logger"],function(g,a,c,d){Object.defineProperty(a,"__esModule",{value:!0});a.default=function(a,b,e){a.referencesGeometry();b=b.readArcadeFeature();try{return a.evaluate(c.__assign(c.__assign({},e),{$feature:b}))}catch(f){return d.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",f),null}}});
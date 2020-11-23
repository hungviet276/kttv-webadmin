// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../renderers/support/utils"],function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.supportedUnits=a.getMetersPerUnit=a.supportsUnit=void 0;a.supportsUnit=function(a){return null!=b.meterIn[a]};a.getMetersPerUnit=function(a){return 1/(b.meterIn[a]||1)};a.supportedUnits=function(){var a=Object.keys(b.meterIn);a.sort();return a}()});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/arrayUtils"],function(e,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.getShaderOutputID=a.ShaderOutputTypes=void 0;a.ShaderOutputTypes=[{output:0,name:"color"},{output:1,name:"depth"},{output:2,name:"normal"},{output:3,name:"depthShadowMap"},{output:4,name:"highlight"},{output:5,name:"draped"},{output:6,name:"occlusion"}];a.getShaderOutputID=function(c,d){return c+"_"+b.find(a.ShaderOutputTypes,function(a){return a.output===d}).name}});
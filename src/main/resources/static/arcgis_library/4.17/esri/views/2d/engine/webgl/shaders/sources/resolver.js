// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../webgl","./shaderRepository"],function(f,a,c,d){Object.defineProperty(a,"__esModule",{value:!0});a.resolveIncludes=void 0;var e=new c.ShaderCompiler(function(a){var b=d.default;a.split("/").forEach(function(a){b&&(b=b[a])});return b});a.resolveIncludes=function(a){return e.resolveIncludes(a)}});
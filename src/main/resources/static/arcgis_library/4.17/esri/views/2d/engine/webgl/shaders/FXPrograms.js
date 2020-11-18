// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./sources/resolver"],function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.integrateProgram=void 0;a.integrateProgram={name:"integrate",shaders:{vertexShader:b.resolveIncludes("fx/integrate.vert"),fragmentShader:b.resolveIncludes("fx/integrate.frag")},attributes:{a_position:0}}});
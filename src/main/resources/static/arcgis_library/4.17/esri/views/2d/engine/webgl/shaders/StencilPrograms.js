// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./sources/resolver"],function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.stencil=void 0;a.stencil={name:"stencil",shaders:{vertexShader:b.resolveIncludes("stencil/stencil.vert"),fragmentShader:b.resolveIncludes("stencil/stencil.frag")},attributes:{a_pos:0}}});
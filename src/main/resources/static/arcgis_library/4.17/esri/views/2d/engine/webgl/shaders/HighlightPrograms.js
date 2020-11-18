// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./sources/resolver"],function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.blur=a.highlight=void 0;a.highlight={name:"highlight",shaders:{vertexShader:b.resolveIncludes("highlight/textured.vert"),fragmentShader:b.resolveIncludes("highlight/highlight.frag")},attributes:{a_position:0,a_texcoord:1}};a.blur={name:"blur",shaders:{vertexShader:b.resolveIncludes("highlight/textured.vert"),fragmentShader:b.resolveIncludes("highlight/blur.frag")},attributes:{a_position:0,
a_texcoord:1}}});
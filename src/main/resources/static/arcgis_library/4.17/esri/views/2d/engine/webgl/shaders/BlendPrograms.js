// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./sources/resolver"],function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.blend=void 0;a.blend={name:"blend",attributes:{a_pos:0,a_tex:1},shaders:function(a){return{vertexShader:"#define "+a.replace("-","_").toUpperCase()+"\n"+b.resolveIncludes("blend/blend.vert"),fragmentShader:"#define "+a.replace("-","_").toUpperCase()+"\n"+b.resolveIncludes("blend/blend.frag")}}}});
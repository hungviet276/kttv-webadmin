// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/compilerUtils","../../core/libs/gl-matrix-2/vec3f64","../../geometry/support/aaBoundingBox"],function(k,a,g,h,c){Object.defineProperty(a,"__esModule",{value:!0});a.objectSymbolLayerPrimitiveBoundingBox=a.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON=a.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER=a.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE=a.objectSymbolLayerSizeWithResourceSize=void 0;a.objectSymbolLayerSizeWithResourceSize=function(a,d){var e=d.width,b=d.depth,
f=d.height;d=d.isPrimitive?10:1;if(null==e&&null==f&&null==b)return[d*a[0],d*a[1],d*a[2]];for(var e=h.vec3f64.fromValues(e,b,f),c,b=0;3>b;b++)if(f=e[b],null!=f){c=f/a[b];break}for(b=0;3>b;b++)null==e[b]&&(e[b]=a[b]*c);return e};a.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE=c.fromValues(-.5,-.5,-.5,.5,.5,.5);a.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER=c.fromValues(-.5,-.5,0,.5,.5,1);a.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON=c.fromValues(-.5,-.5,0,.5,.5,.5);a.objectSymbolLayerPrimitiveBoundingBox=
function(c){switch(c){case "sphere":case "cube":case "diamond":return a.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE;case "cylinder":case "cone":case "inverted-cone":return a.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER;case "tetrahedron":return a.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON;default:g.neverReached(c)}}});
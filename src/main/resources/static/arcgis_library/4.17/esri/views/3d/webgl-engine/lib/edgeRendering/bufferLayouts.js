// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../support/buffer/glUtil","../../../support/buffer/InterleavedLayout"],function(d,a,c,b){Object.defineProperty(a,"__esModule",{value:!0});a.EdgeShaderAttributeLocations=a.SilhouetteEdgeInstancesLayout=a.RegularEdgeInstancesLayout=a.CommonInstancesLayout=a.glVertexLayout=a.VertexLayout=a.EdgeInputBufferLayout=void 0;a.EdgeInputBufferLayout=b.newLayout().vec3f("position").u16("componentIndex").u16("_padding");a.VertexLayout=b.newLayout().vec2u8("sideness");a.glVertexLayout=
c.glLayout(a.VertexLayout);a.CommonInstancesLayout=b.newLayout().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}).u16("_padding2",{glPadding:!0});a.RegularEdgeInstancesLayout=a.CommonInstancesLayout.clone().vec3f("normal");a.SilhouetteEdgeInstancesLayout=a.CommonInstancesLayout.clone().vec3f("normalA").vec3f("normalB");a.EdgeShaderAttributeLocations={position0:0,
position1:1,componentIndex:2,variantOffset:4,variantStroke:5,variantExtension:6,normal:7,normalA:7,normalB:8,sideness:9}});
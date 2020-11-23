# FillSymbol3DLayer

FillSymbol3DLayer is used to render the surfaces of flat 2D Polygon geometries and 3D volumetric meshes in a SceneView.

**Referenced by:** [MeshSymbol3D](meshSymbol3D.md), [PolygonSymbol3D](polygonSymbol3D.md)

### Properties

| Property | Details
| --- | ---
| castShadows | Boolean to control the shadow casting behaviour of the rendered geometries (only applies to MeshSymbol3D).
| [edges](edges.md) | Specifies an edge visualization style (only applies to MeshSymbol3D).
| enable | Type:`Boolean`
| [material](materialColorMixMode.md) | The material used to shade the geometry, including colorMixMode options.
| [outline](outline.md) | The outline of the symbol layer (only applies to PolygonSymbol3D).
| [pattern](polygonPattern.md) | The pattern used to render the fill of the polygon (only applies to PolygonSymbol3D).
| type | Specifies the type of symbol used.<br>Value of this property must be `Fill`


### Example

```json
{
  "symbolLayers": [
    {
      "type": "Fill",
      "material": {
        "color": [
          255,
          0,
          0
        ],
        "colorMixMode": "replace"
      }
    }
  ]
}
```


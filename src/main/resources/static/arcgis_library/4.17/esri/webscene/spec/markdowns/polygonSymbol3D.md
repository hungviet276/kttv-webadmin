# PolygonSymbol3D

PolygonSymbol3D is used to render features with Polygon geometry in a 3D SceneView. Polygon features may also be rendered as points with icons or objects at the centroid of each polygon.

**Referenced by:** [ClassBreaks Renderer](classBreaksRenderer.md), [Symbol3D](symbol3D.md), [UniqueValue Renderer](uniqueValueRenderer.md)

### Properties

| Property | Details
| --- | ---
| [styleOrigin](styleOrigin.md) | The origin of the style from which the symbol was originally referenced.
| symbolLayers | A Collection of Symbol3DLayer objects used to visualize the graphic or feature.<br>Array of items of the following types: <ul><li>[fillSymbol3DLayer](fillSymbol3DLayer.md)</li><li>[extrudeSymbol3DLayer](extrudeSymbol3DLayer.md)</li><li>[waterSymbol3DLayer](waterSymbol3DLayer.md)</li><li>[iconSymbol3DLayer](iconSymbol3DLayer.md)</li><li>[objectSymbol3DLayer](objectSymbol3DLayer.md)</li><li>[textSymbol3DLayer](textSymbol3DLayer.md)</li><li>[lineSymbol3DLayer](lineSymbol3DLayer.md)<br><em>Deprecated</em>, use [fillSymbol3DLayer with outline](fillSymbol3DLayer.md) instead</li></ul>
| type | Specifies the type of symbol used.<br>Value of this property must be `PolygonSymbol3D`




# Modifications

An array of Modification objects.

**Referenced by:** [Integrated Mesh Layer (IntegratedMeshLayer)](integratedMeshLayer.md)

# Modification

A Modification describes a client-side transformation of the geometry of an [integrated mesh](integratedMeshLayer.md). It defines the shape and type of modification.

### Properties

| Property | Details
| --- | ---
| [geometry](polygon_geometry.md) | Polygon geometry shape for the modification. `spatialReference` on geometry is ignored, it is instead taken from the data layer the modification belongs to.
| type | Type of the modification. `clip`: Anything inside of the polygon will be clipped out. `mask`: All areas outside of the polygon will be masked out. `replace`: Flattens or elevates the integrated mesh layer based on the polygon.<br>Must be one of the following values:<ul><li>`clip`</li><li>`mask`</li><li>`replace`</li></ul>



### Example

```json
[
  {
    "geometry": {
      "hasZ": true,
      "rings": [
        [
          [
            -119.47845996799998,
            37.87032197700006,
            2889.639599999995
          ],
          [
            -119.40280479499995,
            37.73036552000008,
            2491.712400000004
          ],
          [
            -119.47845996799998,
            37.87032197700006,
            2889.639599999995
          ]
        ]
      ]
    },
    "type": "mask"
  }
]
```


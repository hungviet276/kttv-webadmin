# Raster Colormap Renderer

A value/color look up table used for rendering raster data only.

**Referenced by:** [Raster Renderers](rasterRenderers.md)

### Properties

| Property | Details
| --- | ---
| [colormapInfos](colormapInfo.md) | An array of colormapInfo objects.
| type | Specifies the type of renderer used.<br>Value of this property must be `rasterColormap`


### Example

Colormap rendering on an imagery layer. 

```json
{
  "renderer": {
    "type": "rasterColormap",
    "colormapInfos": [
      {
        "value": 11,
        "color": [
          73,
          109,
          163,
          255
        ],
        "label": "11"
      },
      {
        "value": 24,
        "color": [
          170,
          0,
          0,
          255
        ],
        "label": "24"
      },
      {
        "value": 71,
        "color": [
          229,
          229,
          193,
          255
        ],
        "label": "71"
      },
      {
        "value": 81,
        "color": [
          221,
          216,
          61,
          255
        ],
        "label": "81"
      }
    ]
  }
}
```


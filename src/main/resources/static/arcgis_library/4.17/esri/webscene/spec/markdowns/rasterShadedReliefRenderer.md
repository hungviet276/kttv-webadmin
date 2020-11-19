# Raster Shaded Relief Renderer

This renderer produces a grayscale or a colored 3D representation of a shaded relief. This renderer can be used on either layers of type: [ImageServiceLayer](imageServiceLayer.md) or [TiledImageServiceLayer](tiledImageServiceLayer.md).

**Referenced by:** [Raster Renderers](rasterRenderers.md)

### Properties

| Property | Details
| --- | ---
| altitude | Used when the `hillshadeType` is `traditional`. The  altitude of the illumination source.
| azimuth | Used when the `hillshadeType` is `traditional`. The azimuth of the illumination source.
| [colorRamp](colorRamp.md) | The color ramp to display the shaded relief. When not specified, a grayscale hillshade is produced. When this is specified, grayscale hillshade is fused with colorized elevation.
| hillshadeType | Use single (traditional), or multiple illumination sources to generate hillshade.<br>Must be one of the following values:<ul><li>`multi-directional`</li><li>`traditional`</li></ul>
| pixelSizeFactor | Accounts for changes in scale as the viewer zooms in and out on the map display.
| pixelSizePower | Accounts for the altitude changes (or scale) as the viewer zooms in and out on the map display.
| scalingType | Apply a constant or adjusted z-factor based on resolution changes. The `adjusted` type is suitable for worldwide elevation dataset. An adjusted `zFactor` is determined using this equation: `Adjusted Z-Factor = (Z Factor) + (Pixel Size)` <sup>(Pixel Size Power)</sup> `x Pixel Size Factor`.<br>Must be one of the following values:<ul><li>`adjusted`</li><li>`none`</li></ul>
| type | Specifies the type of renderer used.<br>Value of this property must be `rasterShadedRelief`
| zFactor | A conversion factor that adjusts the units of measure for the vertical (or elevation) units when they are different from the horizontal coordinate (x,y) units of the input surface. It is the number of ground x,y units in one surface z-unit.


### Raster Shaded Relief Renderer Example

Web scene json showing raster shaded relief renderer with traditional hillshade type.

```json
{
  "renderer": {
    "type": "rasterShadedRelief",
    "altitude": 45,
    "azimuth": 315,
    "colorRamp": {
      "type": "multipart",
      "colorRamps": [
        {
          "type": "algorithmic",
          "fromColor": [
            175,
            240,
            233,
            255
          ],
          "toColor": [
            255,
            255,
            179,
            255
          ]
        }
      ]
    },
    "hillshadeType": "traditional",
    "pixelSizePower": 0.664,
    "pixelSizeFactor": 0.024,
    "scalingType": "adjusted",
    "zFactor": 3
  }
}
```
### Raster Shaded Relief Renderer Example

Web scene json showing raster shaded relief renderer with multi-directional hillshade type.

```json
{
  "renderer": {
    "type": "rasterShadedRelief",
    "altitude": 45,
    "azimuth": 315,
    "hillshadeType": "multi-directional",
    "pixelSizePower": 0.664,
    "pixelSizeFactor": 0.024,
    "scalingType": "adjusted",
    "zFactor": 1
  }
}
```


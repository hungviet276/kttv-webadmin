# Tiled Image Service Layer (ArcGISTiledImageServiceLayer)

An ArcGIS Tiled Image Service layer displays content from an ArcGIS Server Image service that has been cached (tiled).

**Referenced by:** [baseMapLayer](baseMapLayer.md), [operationalLayers](operationalLayers.md)

### Properties

| Property | Details
| --- | ---
| bandIds | An array of bandIds that are visible for a multispectral dataset. It can specify bands to export or rearrange band order(from image service).
| disablePopup | Indicates whether to allow a client to ignore popups defined by the service item.
| id | A unique identifying string for the layer.
| interpolation | String indicating the interpolation type.<br>If property is present, must be one of the following values: <ul><li>`RSP_BilinearInterpolation`</li><li>`RSP_CubicConvolution`</li><li>`RSP_Majority`</li><li>`RSP_NearestNeighbor`</li></ul>
| isReference | Applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false).
| itemId | Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.
| layerDefinition | An object that defines the attribute schema and drawing information for a layer drawn using client-side graphics.<br>See [layerDefinition properties](#layerdefinition-properties) table.
| layerType | String indicating the layer type.<br>Value of this property must be `ArcGISTiledImageServiceLayer`
| listMode | To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.<br>If property is present, must be one of the following values: <ul><li>`hide`</li><li>`hide-children`</li><li>`show`</li></ul>
| maxScale | A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.
| minScale | A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.
| [multidimensionalDefinition](multidimensionalDefinition.md) | An array of objects representing a slice from multidimensional data.
| opacity | The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.
| [popupInfo](popupInfo.md) | A popupInfo object defining the content of popup windows when you click on the image.
| refreshInterval | Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.
| showLegend | Boolean value indicating whether to display the layer in the legend. Default value is `true`.
| title | A user-friendly string title for the layer that can be used in a table of contents.
| url | URL to the ArcGIS Server Image Service.
| visibility | Boolean property determining whether the layer is initially visible.


### layerDefinition properties

| Property | Details
| --- | ---
| [drawingInfo.renderer](renderer.md) | The renderer object contains the drawing information for the operationalLayer.
| drawingInfo.transparency | Number value ranging between 0 (no transparency) to 100 (completely transparent).


### operationalLayer Example

Live sample web scene showing the ArcGISTiledImageServiceLayer as an [operationalLayer](https://www.arcgis.com/home/webscene/viewer.html?webscene=9cb83d8c8cdb409f9dec93a4c0c9eeb6)

```json
{
  "operationalLayers": [
    {
      "id": "15987e18ba6-layer-1",
      "layerType": "ArcGISTiledImageServiceLayer",
      "url": "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Toronto/ImageServer",
      "visibility": true,
      "opacity": 1,
      "title": "Toronto",
      "itemId": "b81671067dec4bd4b569f09d9884d70f",
      "minScale": 611770,
      "maxScale": 6059
    }
  ]
}
```
### basemapMapLayer Example

```json
{
  "baseMapLayers": [
    {
      "id": "Toronto_4412",
      "layerType": "ArcGISTiledImageServiceLayer",
      "url": "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Toronto/ImageServer",
      "visibility": true,
      "opacity": 1,
      "title": "Toronto",
      "showLegend": true,
      "itemId": "b81671067dec4bd4b569f09d9884d70f",
      "minScale": 611770,
      "maxScale": 6059
    }
  ],
  "title": "Tiled Imagery"
}
```


# mediaInfo chart

Defines a chart to be displayed in a popup window.

**Referenced by:** [mediaInfo](mediaInfo.md)

### Properties

| Property | Details
| --- | ---
| altText | A string providing the alternate text for the media.
| caption | A string caption describing the media.
| title | A string title for the media.
| type | A string defining the type of media.<br>Must be one of the following values:<ul><li>`barchart`</li><li>`columnchart`</li><li>`linechart`</li><li>`piechart`</li></ul>
| [value](mediaInfo_chart_value.md) | The value object contains information for popup windows about how charts should be constructed.


### Example

```json
{
  "mediaInfo": {
    "title": "Chart stats",
    "type": "barchart",
    "altText": "This chart shows statistics",
    "caption": "For a better idea...",
    "value": {
      "fields": [
        "relationships/0/Pledge"
      ],
      "tooltipField": "relationships/2/Official"
    }
  }
}
```


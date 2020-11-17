# Pattern

The pattern used to render the fill of the polygon (only applies to PolygonSymbol3D).

**Referenced by:** [FillSymbol3DLayer](fillSymbol3DLayer.md)

### Properties

| Property | Details
| --- | ---
| style | String value representing predefined styles that can be set as polygon fills.<br>Must be one of the following values:`backward-diagonal`, `cross`, `diagonal-cross`, `forward-diagonal`, `horizontal`, `none`, `solid`, `vertical`
| type | The type of pattern applied to the polygon fill.<br>Value of this property must be `style`


### Example

```json
{
  "pattern": {
    "type": "style",
    "style": "cross"
  }
}
```


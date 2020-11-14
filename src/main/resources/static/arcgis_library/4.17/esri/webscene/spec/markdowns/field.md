# field

Contains information about an attribute field.

**Referenced by:** [Dynamic data layer](dynamicDataLayer_source.md), [layerDefinition](layerDefinition.md)

### Properties

| Property | Details
| --- | ---
| alias | A string defining the field alias.
| defaultValue | The default value set for the field.
| [domain](domain.md) | The domain objects if applicable.
| editable | A Boolean defining whether this field is editable.
| length | A number defining how many characters are allowed in a string field.
| name | A string defining the field name.
| nullable | A Boolean defining whether this field can have a null value.
| type | A string defining the field type.<br>If property is present, must be one of the following values: `esriFieldTypeBlob`, `esriFieldTypeDate`, `esriFieldTypeDouble`, `esriFieldTypeGUID`, `esriFieldTypeGeometry`, `esriFieldTypeGlobalID`, `esriFieldTypeInteger`, `esriFieldTypeLong`, `esriFieldTypeOID`, `esriFieldTypeRaster`, `esriFieldTypeSingle`, `esriFieldTypeSmallInteger`, `esriFieldTypeString`, `esriFieldTypeXML`


### Example

```json
{
  "field": {
    "alias": "Postcode",
    "name": "relationships/2/Postcode",
    "editable": false,
    "type": "esriFieldTypeString"
  }
}
```


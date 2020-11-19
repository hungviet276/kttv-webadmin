// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../../layers/support/fieldUtils"],function(f,a,e,b){Object.defineProperty(a,"__esModule",{value:!0});a.defineFieldProperties=void 0;a.defineFieldProperties=function(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,dependsOn:["layer.fields","layer.outFields","requiredFields"],get:function(){var a=this.layer,c=this.layer.fields,d=this.requiredFields;return a.outFields?b.fixFields(c,e.__spreadArrays(b.unpackFieldNames(c,
a.outFields),d)):b.fixFields(c,d)}}}}});
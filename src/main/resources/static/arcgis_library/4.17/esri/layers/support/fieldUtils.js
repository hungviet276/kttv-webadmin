// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib @dojo/framework/shim/array ../../core/Error ../../core/maybe ../../core/object ../../core/promiseUtils ../../core/SetUtils ./domains ../../support/arcadeOnDemand @dojo/framework/shim/Promise".split(" "),function(P,a,g,r,Q,G,x,H,p,t,R){function I(b,c,d){if(b)for(var a=0;a<b.length;a++){var f=b[a],h=x.getDeepValue(f,c);(h=h&&"function"!==typeof h&&m(d,h))&&x.setDeepValue(f,h.name,c)}}function q(b,c){if(!b||!c)return[];y.clear();u(y,b,c);return p.valuesOfSet(y).sort()}function u(b,
c,d){if(d)if(c&&c.length)if(r.includes(d,"*"))for(d=0;d<c.length;d++)b.add(c[d].name);else for(var a=0;a<d.length;a++)f=d[a],n(b,c,f);else if(r.includes(d,"*"))b.clear(),b.add("*");else for(c=0;c<d.length;c++){var f=d[c];b.add(f)}}function n(b,c,a){c&&c.length?(c=m(c,a))&&b.add(c.name):"string"===typeof a&&b.add(a)}function m(b,c){if("string"!==typeof c)return null;if(null!=b){c=c.toLowerCase();for(var a=0;a<b.length;a++){var e=b[a];if(e&&e.name.toLowerCase()===c)return e}}return null}function v(b,
c,a){return g.__awaiter(this,void 0,void 0,function(){var d,f,h,l,k;return g.__generator(this,function(e){switch(e.label){case 0:return a?[4,R.loadArcade()]:[2];case 1:d=e.sent().arcadeUtils;f=d.extractFieldNames(a);h=0;for(l=f;h<l.length;h++)k=l[h],n(b,c,k);return[2]}})})}function z(b,c){for(var a=0;a<b.length;a++){var e=b[a];if(e&&e.valueType&&e.valueType===c)return e.name}return null}function J(b,c){return g.__awaiter(this,void 0,void 0,function(){var a,e;return g.__generator(this,function(d){if(!c)return[2];
a=c.fields;return(e=x.getDeepValue("elevationInfo.featureExpressionInfo",c))?[2,e.collectRequiredFields(b,a)]:[2]})})}function S(b,c,a){return g.__awaiter(this,void 0,void 0,function(){return g.__generator(this,function(d){a.outStatistic.onStatisticValueExpression?v(b,c,a.outStatistic.onStatisticValueExpression):b.add(a.outStatistic.onStatisticField);return[2]})})}function K(b,c){return g.__awaiter(this,void 0,void 0,function(){var a,e;return g.__generator(this,function(d){switch(d.label){case 0:return a=
c.labelingInfo,e=c.fields,a&&a.length?[4,H.all(a.map(function(c){return T(b,e,c)}))]:[2];case 1:return d.sent(),[2]}})})}function T(b,c,a){return g.__awaiter(this,void 0,void 0,function(){var d,f,h,l,k;return g.__generator(this,function(e){switch(e.label){case 0:if(!a)return[2];d=a.getLabelExpression();f=a.where;return"arcade"!==d.type?[3,2]:[4,v(b,c,d.expression)];case 1:return e.sent(),[3,3];case 2:(h=d.expression.match(/{[^}]*}/g))&&h.forEach(function(a){n(b,c,a.slice(1,-1))}),e.label=3;case 3:return l=
/['"]+/g,f&&(k=f.split(" "),3===k.length&&n(b,c,k[0].replace(l,"")),7===k.length&&(n(b,c,k[0].replace(l,"")),n(b,c,k[4].replace(l,"")))),[2]}})})}function A(b){return"number"===typeof b&&!isNaN(b)&&isFinite(b)}function U(b){return null===b||A(b)}function V(b){return null===b||w(b)}function L(b){return null!=b&&"string"===typeof b}function W(b){return null===b||L(b)}function X(){return!0}function B(b,c){var a;switch(b.type){case "date":case "integer":case "long":case "small-integer":case "esriFieldTypeDate":case "esriFieldTypeInteger":case "esriFieldTypeLong":case "esriFieldTypeSmallInteger":a=
b.nullable?V:w;break;case "double":case "single":case "esriFieldTypeSingle":case "esriFieldTypeDouble":a=b.nullable?U:A;break;case "string":case "esriFieldTypeString":a=b.nullable?W:L;break;default:a=X}return 1===arguments.length?a:a(c)}function C(b){return null!=b&&Y.has(b.type)}function M(b,c){return b.nullable&&null===c?null:C(b)&&!N(b.type,Number(c))?D.OUT_OF_RANGE:B(b,c)?b.domain?t.validateDomainValue(b.domain,c):null:E.INVALID_TYPE}function N(b,c){return(b="string"===typeof b?F(b):b)?b.isInteger?
w(c)&&c>=b.min&&c<=b.max:c>=b.min&&c<=b.max:!1}function F(b){switch(b){case "esriFieldTypeSmallInteger":case "small-integer":return a.smallIntegerRange;case "esriFieldTypeInteger":case "integer":return a.integerRange;case "esriFieldTypeSingle":case "single":return a.singleRange;case "esriFieldTypeDouble":case "double":return a.doubleRange}}function O(b,c,a){if(!c||!c.attributes||!b){if(G.isSome(a))for(var d=0;d<b.length;d++)c=b[d],a.add(c);return!0}for(var d=c.attributes,f=!1,h=0;h<b.length;h++)if(c=
b[h],!(c in d))if(f=!0,G.isSome(a))a.add(c);else break;return f}Object.defineProperty(a,"__esModule",{value:!0});a.getExpressionFields=a.populateMissingFields=a.featureHasFields=a.validationErrorToString=a.doubleRange=a.singleRange=a.integerRange=a.smallIntegerRange=a.getNumericTypeForValue=a.getFieldRange=a.isNumberInRange=a.validateFieldValue=a.sanitizeNullFieldValue=a.TypeValidationError=a.NumericRangeValidationError=a.isValidFieldValue=a.isDateField=a.isStringField=a.isNumericField=a.numericTypes=
a.isValueMatchingFieldType=a.getFieldDefaultValue=a.collectLabelingFields=a.getLabelingFields=a.getFeatureGeometryFields=a.getFeatureEditFields=a.getTimeFields=a.collectFilterFields=a.collectFeatureReductionFields=a.collectElevationFields=a.getElevationFields=a.getDisplayFieldName=a.collectArcadeFieldNames=a.hasField=a.getField=a.packFields=a.unpackFieldNames=a.collectField=a.collectFields=a.fixFields=a.fixTimeInfoFields=a.fixRendererFields=a.visualVariableFields=a.rendererFields=void 0;a.rendererFields=
"field field2 field3 normalizationField rotationInfo.field proportionalSymbolInfo.field proportionalSymbolInfo.normalizationField colorInfo.field colorInfo.normalizationField".split(" ");a.visualVariableFields=["field","normalizationField"];a.fixRendererFields=function(b,c){if(null!=b&&null!=c){var d=0;for(b=Array.isArray(b)?b:[b];d<b.length;d++){var e=b[d];I(a.rendererFields,e,c);if("visualVariables"in e&&e.visualVariables)for(var f=0,e=e.visualVariables;f<e.length;f++)I(a.visualVariableFields,e[f],
c)}}};a.fixTimeInfoFields=function(b,c){if(null!=b&&null!=c)if("startField"in b){var a=m(c,b.startField);c=m(c,b.endField);b.startField=a&&a.name||null;b.endField=c&&c.name||null}else a=m(c,b.startTimeField),c=m(c,b.endTimeField),b.startTimeField=a&&a.name||null,b.endTimeField=c&&c.name||null};var y=new Set;a.fixFields=q;a.collectFields=u;a.collectField=n;a.unpackFieldNames=function(b,c){return c&&b?r.includes(c,"*")?b.map(function(b){return b.name}):c:[]};a.packFields=function(b,c,a){void 0===a&&
(a=1);if(!c||!b)return[];if(r.includes(c,"*"))return["*"];c=q(b,c);return c.length/b.length>=a?["*"]:c};a.getField=m;a.hasField=function(b,c){if(!b||!c||"string"!==typeof c)return!1;c=c.toLowerCase();for(var a=0;a<b.length;a++){var e=b[a];if(e&&e.name.toLowerCase()===c)return!0}return!1};a.collectArcadeFieldNames=v;a.getDisplayFieldName=function(b){var c=b.displayField;b=b.fields;if(c)return c;if(!b||!b.length)return null;if(!(c=z(b,"name-or-title")||z(b,"unique-identifier")||z(b,"type-or-category")))a:{for(c=
0;c<b.length;c++){var a=b[c];if(a&&a.name){var e=a.name.toLowerCase();if(-1<e.indexOf("name")||-1<e.indexOf("title")){c=a.name;break a}}}c=null}return c};a.getElevationFields=function(b){return g.__awaiter(this,void 0,void 0,function(){var a;return g.__generator(this,function(c){switch(c.label){case 0:if(!b)return[2,[]];a=new Set;return[4,J(a,b)];case 1:return c.sent(),[2,p.valuesOfSet(a).sort()]}})})};a.collectElevationFields=J;a.collectFeatureReductionFields=function(b,a,d){return g.__awaiter(this,
void 0,void 0,function(){return g.__generator(this,function(c){switch(c.label){case 0:return a&&d&&"cluster"===d.type&&d.fields?[4,H.all(d.fields.map(function(c){return S(b,a.fields,c)}))]:[2];case 1:return c.sent(),[2]}})})};a.collectFilterFields=function(b,a,d){return g.__awaiter(this,void 0,void 0,function(){var c,f;return g.__generator(this,function(e){switch(e.label){case 0:if(!a||!d||!(d.where&&"1\x3d1"!==d.where||d.timeExtent))return[2];a.timeInfo&&d.timeExtent&&u(b,a.fields,[a.timeInfo.startField,
a.timeInfo.endField]);return d.where?[4,new Promise(function(b,a){P(["../../core/sql/WhereClause"],b,a)})]:[3,2];case 1:c=e.sent();f=c.WhereClause.create(d.where,a.fieldsIndex);if(!f.isStandardized)throw new Q("fieldUtils:collectFilterFields","Where clause is not standardized");u(b,a.fields,f.fieldNames);e.label=2;case 2:return[2]}})})};a.getTimeFields=function(b){return g.__awaiter(this,void 0,void 0,function(){var a;return g.__generator(this,function(c){return b?(a="timeInfo"in b&&b.timeInfo)?[2,
q(b.fields,[b.trackIdField,a.startField,a.endField])]:[2,[]]:[2,[]]})})};a.getFeatureEditFields=function(b){if(!b)return[];var a="editFieldsInfo"in b&&b.editFieldsInfo;return a?q(b.fields,[a&&a.creatorField,a&&a.creationDateField,a&&a.editorField,a&&a.editDateField]):[]};a.getFeatureGeometryFields=function(a){if(!a)return[];var b="geometryProperties"in a&&a.geometryProperties;return b?q(a.fields,[b&&b.shapeAreaFieldName,b&&b.shapeLengthFieldName]):[]};a.getLabelingFields=function(a){return g.__awaiter(this,
void 0,void 0,function(){var b;return g.__generator(this,function(c){switch(c.label){case 0:if(!a)return[2,[]];b=new Set;return[4,K(b,a)];case 1:return c.sent(),[2,p.valuesOfSet(b).sort()]}})})};a.collectLabelingFields=K;a.getFieldDefaultValue=function(a){var b=a.defaultValue;if(void 0!==b&&B(a,b))return b;if(a.nullable)return null};var w=function(){return"isInteger"in Number?Number.isInteger:function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a}}();a.isValueMatchingFieldType=B;a.numericTypes=
["integer","small-integer","single","double"];var Y=p.SetFromValues(g.__spreadArrays(a.numericTypes,["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]));a.isNumericField=C;a.isStringField=function(a){return null!=a&&("string"===a.type||"esriFieldTypeString"===a.type)};a.isDateField=function(a){return null!=a&&("date"===a.type||"esriFieldTypeDate"===a.type)};a.isValidFieldValue=function(a,c){return null===M(a,c)};var D;(D=a.NumericRangeValidationError||
(a.NumericRangeValidationError={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range";var E;(E=a.TypeValidationError||(a.TypeValidationError={})).INVALID_TYPE="type-validation-error::invalid-type";a.sanitizeNullFieldValue=function(a){return null==a||"number"===typeof a&&isNaN(a)?null:a};a.validateFieldValue=M;a.isNumberInRange=N;a.getFieldRange=function(a){var b=t.getDomainRange(a.domain);if(b)return b;if(C(a))return F(a.type)};a.getNumericTypeForValue=function(b){if(!A(b))return null;if(w(b)){if(b>=
a.smallIntegerRange.min&&b<=a.smallIntegerRange.max)return"esriFieldTypeSmallInteger";if(b>=a.integerRange.min&&b<=a.integerRange.max)return"esriFieldTypeInteger"}return b>=a.singleRange.min&&b<=a.singleRange.max?"esriFieldTypeSingle":"esriFieldTypeDouble"};a.smallIntegerRange={min:-32768,max:32767,isInteger:!0};a.integerRange={min:-2147483648,max:2147483647,isInteger:!0};a.singleRange={min:-3.4E38,max:1.2E38,isInteger:!1};a.doubleRange={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};a.validationErrorToString=
function(a,c,d){switch(a){case t.DomainValidationError.INVALID_CODED_VALUE:return"Value "+d+" is not in the coded domain - field: "+c.name+", domain: "+JSON.stringify(c.domain);case t.DomainValidationError.VALUE_OUT_OF_RANGE:return"Value "+d+" is out of the range of valid values - field: "+c.name+", domain: "+JSON.stringify(c.domain);case E.INVALID_TYPE:return"Value "+d+" is not a valid value for the field type - field: "+c.name+", type: "+c.type+", nullable: "+c.nullable;case D.OUT_OF_RANGE:return a=
F(c.type),"Value "+d+" is out of range for the number type - field: "+c.name+", type: "+c.type+", value range is "+a.min+" to "+a.max}};a.featureHasFields=function(a,c){return!O(a,c,null)};a.populateMissingFields=O;a.getExpressionFields=function(a,c){return g.__awaiter(this,void 0,void 0,function(){var b,e,f,h;return g.__generator(this,function(d){switch(d.label){case 0:b=new Set,e=0,f=c,d.label=1;case 1:if(!(e<f.length))return[3,4];h=f[e];return[4,v(b,a.fields,h)];case 2:d.sent(),d.label=3;case 3:return e++,
[3,1];case 4:return[2,p.valuesOfSet(b).sort()]}})})}});
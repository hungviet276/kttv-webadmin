// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/Error","../../../core/SetUtils","../../../core/sql/WhereClauseCache"],function(w,a,e,t,u){function q(b,c){return b?m.get(b,c):null}function k(b,c,a,n){void 0===n&&(n=!0);for(var f=[],g=0;g<c.length;g++){var h=c[g];if("*"!==h&&!b.has(h))if(n){var d=r(h);try{var l=q(d,b);if(!l)throw new e("feature-store:unsupported-query","invalid SQL expression",{where:d});if(!l.isStandardized)throw new e("feature-store:unsupported-query","expression is not standard",{clause:l});
k(b,l.fieldNames,"expression contains missing fields")}catch(p){if((d=p&&p.details)&&(d.clause||d.where))throw p;d&&d.missingFields?f.push.apply(f,d.missingFields):f.push(h)}}else f.push(h)}if(f.length)throw new e("feature-store:unsupported-query",a,{missingFields:f});}function r(b){return b.split(" as ")[0]}Object.defineProperty(a,"__esModule",{value:!0});a.hasInvalidFieldType=a.getAliasFromFieldName=a.getExpressionFromFieldName=a.validateFields=a.getWhereClause=a.validateHaving=a.validateWhere=
void 0;var m=new u.WhereClauseCache(50,500),v=t.SetFromValues("esriFieldTypeOID esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeLong esriFieldTypeDate".split(" "));a.validateWhere=function(b,a){if(!a)return!0;var c=m.get(a,b);if(!c)throw new e("feature-store:unsupported-query","invalid SQL expression",{where:a});if(!c.isStandardized)throw new e("feature-store:unsupported-query","where clause is not standard",{where:a});k(b,c.fieldNames,"where clause contains missing fields");
return!0};a.validateHaving=function(b,a,g){if(!a)return!0;var c=m.get(a,b);if(!c)throw new e("feature-store:unsupported-query","invalid SQL expression",{having:a});if(!c.isAggregate)throw new e("feature-store:unsupported-query","having does not contain a valid aggregate function",{having:a});k(b,c.fieldNames,"having contains missing fields");if(!c.getExpressions().every(function(a){var c=a.aggregateType;a=a.field;var e=b.has(a)&&b.get(a).name;return g.some(function(a){var d=a.onStatisticField;a=a.statisticType;
return(b.has(d)&&b.get(d).name)===e&&a.toLowerCase().trim()===c})}))throw new e("feature-store:unsupported-query","expressions in having should also exist in outStatistics",{having:a});return!0};a.getWhereClause=q;a.validateFields=k;a.getExpressionFromFieldName=r;a.getAliasFromFieldName=function(a){return a.split(" as ")[1]};a.hasInvalidFieldType=function(a,c){return(a=c.get(a))?!v.has(a.type):!1}});
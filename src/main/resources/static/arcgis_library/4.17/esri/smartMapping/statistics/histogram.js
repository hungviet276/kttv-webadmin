// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Error ../../core/maybe ../../layers/support/fieldUtils ./support/utils ../support/utils ../support/adapters/support/layerUtils".split(" "),function(C,D,e,c,z,p,q,r,t){function A(b){return e.__awaiter(this,void 0,void 0,function(){var k,f,g,d,a,u,v,l,h,m,w,x,y;return e.__generator(this,function(n){switch(n.label){case 0:if(!(b&&b.layer&&(b.field||b.valueExpression||b.sqlExpression)))throw new c("histogram:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");
if(b.valueExpression&&!b.sqlExpression&&!b.view)throw new c("histogram:missing-parameters","View is required when 'valueExpression' is specified");k=[0,2,1,3,4];f=b.layer;g=e.__rest(b,["layer"]);d=t.createLayerAdapter(f,k);a=e.__assign({layerAdapter:d},g);a.normalizationType=r.getNormalizationType(a);if(!d)throw new c("histogram:invalid-parameters","'layer' must be one of these types: "+t.getLayerTypeLabels(k).join(", "));u=z.isSome(a.signal)?{signal:a.signal}:null;return[4,d.load(u)];case 1:return n.sent(),
v=a.valueExpression||a.sqlExpression,h=(l=a.field)?d.getField(l):null,m=!a.classificationMethod||"equal-interval"===a.classificationMethod,[4,r.getFieldsList({field:l,normalizationField:a.normalizationField,valueExpression:a.valueExpression})];case 2:w=n.sent();if(x=q.verifyBasicFieldValidity(d,w,"histogram:invalid-parameters"))throw x;if(h){if(y=q.verifyFieldType(d,h,"histogram:invalid-parameters",B))throw y;if(p.isDateField(h)){if(a.normalizationType)throw new c("histogram:invalid-parameters","Normalization is not allowed for date fields");
if(!m)throw new c("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed for date fields");}}else if(v){if(a.normalizationType)throw new c("histogram:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");if(!m)throw new c("histogram:invalid-parameters","'classificationMethod' other than 'equal-interval' is not allowed when 'valueExpression' or 'sqlExpression' is specified");}return[2,a]}})})}var B=e.__spreadArrays(["date"],
p.numericTypes);return function(b){return e.__awaiter(this,void 0,void 0,function(){var c,f,g;return e.__generator(this,function(d){switch(d.label){case 0:return[4,A(b)];case 1:return c=d.sent(),f=c.layerAdapter,g=e.__rest(c,["layerAdapter"]),[2,f.histogram(g)]}})})}});
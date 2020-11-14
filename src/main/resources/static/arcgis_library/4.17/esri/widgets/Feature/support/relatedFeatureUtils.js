// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../request ../../../core/Error ../../../core/Logger ../../../core/promiseUtils ../../../tasks/QueryTask ../../../tasks/support/Query ../../../tasks/support/StatisticDefinition ./featureUtils".split(" "),function(H,d,m,y,g,z,n,A,v,B,C){function D(a,b){if(!b.relationships)return null;var c=null;b.relationships.some(function(b){return b.id===parseInt(a,10)?(c=b,!0):!1});return c}function E(a,b){var c;a&&a.relationships&&a.relationships.some(function(a){return""+a.relatedTableId===
b?(c=a,!0):!1});return c}function F(a,b){var c=void 0;a.fields.some(function(a){return a.name===b.keyField?(c=-1!==["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"].indexOf(a.type)?"number":"string",!0):!1});return c}function G(a,b,c,d){return m.__awaiter(this,void 0,void 0,function(){var w,e,f,x,h,p,q,g,r,k,l,t,u;return m.__generator(this,function(m){w=c.layerId.toString();e=b.layerInfo;f=b.queryTask;x=b.relation;return(h=E(e,w))?(p=x.keyField,q=h.keyField,
g=F(e,h),r="string"===g?q+"\x3d'"+a.attributes[p]+"'":q+"\x3d"+a.attributes[p],k=f.execute(new v({where:r,outFields:b.relatedFields}),d),t=(l=b.outStatistics&&0<b.outStatistics.length&&e.supportsStatistics)?f.execute(new v({where:r,outFields:b.relatedFields,outStatistics:b.outStatistics}),d):null,u={features:k},t&&(u.statsFeatures=t),[2,n.eachAlways(u)]):[2,null]})})}Object.defineProperty(d,"__esModule",{value:!0});d.updateRelatedInfo=d.queryRelatedFeatures=d.queryLayerInfos=d.setRelatedFeatures=
d.createRelatedInfo=d.getRelatedFieldInfo=void 0;var k=z.getLogger("esri.widgets.Feature.support.relatedFeatureUtils"),l=new Map;d.getRelatedFieldInfo=function(a){if(!C.isRelatedField(a))return null;a=a.split("/").slice(1);return{layerId:a[0],fieldName:a[1]}};d.createRelatedInfo=function(a,b){if(a=D(a,b)){var c=b.url+"/"+a.relatedTableId;b=new A({url:c,sourceSpatialReference:b.spatialReference});return{url:c,queryTask:b,relation:a,relatedFields:[],outStatistics:[]}}};d.setRelatedFeatures=function(a,
b){if(b&&a){var c=a.features;a=a.statsFeatures;c=c&&c.value;b.relatedFeatures=c?c.features:[];c=a&&a.value;b.relatedStatsFeatures=c?c.features:[]}};d.queryLayerInfos=function(a,b){var c=a.layer,d={};a.relatedInfos.forEach(function(a,e){a=a.relation;if(!a)throw e=new g("relation-required","A relation is required on a layer to retrieve related records."),k.error(e),e;a=a.relatedTableId;if("number"!==typeof a)throw e=new g("A related table ID is required on a layer to retrieve related records."),k.error(e),
e;a=c.url+"/"+a;var f=l.get(a),h=f?f:y(a,{query:{f:"json"},signal:b&&b.signal});f||l.set(a,h);d[e]=h});return n.eachAlways(d)};d.queryRelatedFeatures=function(a,b){var c=a.graphic,d=a.layer,g={};a.relatedInfos.forEach(function(a,f){a.layerInfo&&(g[f]=G(c,a,d,b))});return n.eachAlways(g)};d.updateRelatedInfo=function(a){var b=a.relatedInfo,c=a.fieldName;a=a.fieldInfo;b.relatedFields.push(c);a.statisticType&&(c=new B({statisticType:a.statisticType,onStatisticField:c,outStatisticFieldName:c}),b.outStatistics.push(c))}});
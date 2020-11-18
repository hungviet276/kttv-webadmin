// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../request ../../geometry/support/jsonUtils ../utils".split(" "),function(l,a,f,h,k,g){Object.defineProperty(a,"__esModule",{value:!0});a.labelPoints=void 0;a.labelPoints=function(b,a,d){var e=a.map(function(a){return a.toJSON()}),c=a[0].spatialReference;b=g.parseUrl(b);e=f.__assign(f.__assign({},b.query),{f:"json",sr:c.wkid?c.wkid:JSON.stringify(c.toJSON()),polygons:JSON.stringify(e)});d=g.asValidOptions(e,d);return h(b.path+"/labelPoints",d).then(function(a){return(a.data.labelPoints||
[]).map(function(a){return k.fromJSON(a).set({spatialReference:c})})})}});
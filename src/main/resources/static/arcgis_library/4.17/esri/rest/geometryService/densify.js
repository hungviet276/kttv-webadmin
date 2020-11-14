// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../request ../../geometry/support/jsonUtils ../utils".split(" "),function(k,a,b,l,m,d){Object.defineProperty(a,"__esModule",{value:!0});a.densify=void 0;a.densify=function(a,e,n){return b.__awaiter(this,void 0,void 0,function(){var f,c,g,h;return b.__generator(this,function(k){f=e.geometries[0].spatialReference;c=d.parseUrl(a);g=b.__assign(b.__assign(b.__assign({},c.query),{f:"json"}),e.toJSON());h=d.asValidOptions(g,n);return[2,l(c.path+"/densify",h).then(function(a){return(a.data.geometries||
[]).map(function(a){return m.fromJSON(a).set({spatialReference:f})})})]})})}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../request ../../geometry/support/jsonUtils ../utils ./utils".split(" "),function(k,a,b,l,m,e,n){Object.defineProperty(a,"__esModule",{value:!0});a.union=void 0;a.union=function(a,f,p){return b.__awaiter(this,void 0,void 0,function(){var c,d,g,h;return b.__generator(this,function(k){c=f[0].spatialReference;d=e.parseUrl(a);g=b.__assign(b.__assign({},d.query),{f:"json",sr:JSON.stringify(c.toJSON()),geometries:JSON.stringify(n.encodeGeometries(f))});h=e.asValidOptions(g,
p);return[2,l(d.path+"/union",h).then(function(a){return m.fromJSON(a.data.geometry).set({spatialReference:c})})]})})}});
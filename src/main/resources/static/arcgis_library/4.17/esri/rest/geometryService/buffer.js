// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../geometry ../../request ../utils".split(" "),function(k,a,b,l,m,e){Object.defineProperty(a,"__esModule",{value:!0});a.buffer=void 0;a.buffer=function(a,c,n){return b.__awaiter(this,void 0,void 0,function(){var d,f,g,h;return b.__generator(this,function(k){d=e.parseUrl(a);f=b.__assign(b.__assign(b.__assign({},d.query),{f:"json"}),c.toJSON());g=c.outSpatialReference||c.geometries[0].spatialReference;h=e.asValidOptions(f,n);return[2,m(d.path+"/buffer",h).then(function(a){return(a.data.geometries||
[]).map(function(a){return new l.Polygon({spatialReference:g,rings:a.rings})})})]})})}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../request ../core/maybe ../geometry/support/normalizeUtils ./utils ../tasks/support/ImageServiceIdentifyResult".split(" "),function(k,c,d,l,m,n,e,p){Object.defineProperty(c,"__esModule",{value:!0});c.imageServiceIdentify=void 0;c.imageServiceIdentify=function(c,f,q){return d.__awaiter(this,void 0,void 0,function(){var g,h;return d.__generator(this,function(k){g=e.parseUrl(c);h=f.geometry?[f.geometry]:[];return[2,n.normalizeCentralMeridian(h).then(function(a){var b=f.toJSON();
a=a&&a[0];m.isSome(a)&&(b.geometry=JSON.stringify(a.toJSON()));b=e.encode(d.__assign(d.__assign(d.__assign({},g.query),{f:"json"}),b));b=e.asValidOptions(b,q);return l(g.path+"/identify",b)}).then(function(a){return p.fromJSON(a.data)})]})})}});
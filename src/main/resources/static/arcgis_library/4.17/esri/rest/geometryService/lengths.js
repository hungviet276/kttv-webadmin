// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../request ../utils ../../tasks/operations/lengths ../../tasks/support/LengthsParameters".split(" "),function(k,a,b,l,e,m,n){Object.defineProperty(a,"__esModule",{value:!0});a.lengths=void 0;a.lengths=function(a,c,p){return b.__awaiter(this,void 0,void 0,function(){var f,d,g,h;return b.__generator(this,function(k){c=n.from(c);f=m.lengthsToRESTParameters(c);d=e.parseUrl(a);g=b.__assign(b.__assign(b.__assign({},d.query),{f:"json"}),f);h=e.asValidOptions(g,p);return[2,
l(d.path+"/lengths",h).then(function(a){return a.data})]})})}});
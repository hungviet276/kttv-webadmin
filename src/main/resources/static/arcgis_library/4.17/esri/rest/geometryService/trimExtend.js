// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../geometry ../../request ../utils ../../tasks/operations/trimExtend ../../tasks/support/TrimExtendParameters".split(" "),function(l,a,b,m,n,e,p,q){Object.defineProperty(a,"__esModule",{value:!0});a.trimExtend=void 0;a.trimExtend=function(a,c,r){return b.__awaiter(this,void 0,void 0,function(){var f,d,g,h,k;return b.__generator(this,function(l){c=q.from(c);f=p.trimExtendToRESTParameters(c);d=e.parseUrl(a);g=b.__assign(b.__assign(b.__assign({},d.query),{f:"json"}),
f);h=c.sr;k=e.asValidOptions(g,r);return[2,n(d.path+"/trimExtend",k).then(function(a){return(a.data.geometries||[]).map(function(a){return new m.Polyline({spatialReference:h,paths:a.paths})})})]})})}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../request","../utils"],function(g,a,b,h,d){Object.defineProperty(a,"__esModule",{value:!0});a.distance=void 0;a.distance=function(a,k,l){return b.__awaiter(this,void 0,void 0,function(){var c,e,f;return b.__generator(this,function(g){c=d.parseUrl(a);e=b.__assign(b.__assign(b.__assign({},c.query),{f:"json"}),k.toJSON());f=d.asValidOptions(e,l);return[2,h(c.path+"/distance",f).then(function(a){return(a=a.data)&&a.distance})]})})}});
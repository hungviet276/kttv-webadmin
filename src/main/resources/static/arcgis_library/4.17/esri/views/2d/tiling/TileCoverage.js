// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/ObjectPool"],function(l,m,c){return function(){function a(){this.spans=[]}a.prototype.acquire=function(a){this.lodInfo=a};a.prototype.release=function(){this.lodInfo=null;this.spans.length=0};a.prototype.forEach=function(a,c){var d=this.spans,e=this.lodInfo,g=e.level;if(0!==d.length)for(var f=0;f<d.length;f++)for(var b=d[f],h=b.row,k=b.colTo,b=b.colFrom;b<=k;b++)a.call(c,g,h,e.normalizeCol(b),e.getWorldForColumn(b))};a.pool=new c(a);return a}()});
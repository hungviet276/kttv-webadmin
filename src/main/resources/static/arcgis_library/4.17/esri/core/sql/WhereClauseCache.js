// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../ItemCache","./WhereClause"],function(b,a,c,f){Object.defineProperty(a,"__esModule",{value:!0});a.WhereClauseCache=void 0;b=function(){function a(a,d){this._cache=new c(a);this._invalidCache=new c(d)}a.prototype.get=function(a,d){var e=d.uid+":"+a,b=this._cache.get(e);if(b)return b;if(void 0!==this._invalidCache.get(e))return null;try{var c=f.WhereClause.create(a,d);this._cache.put(e,c);return c}catch(g){return this._invalidCache.put(e,null),null}};return a}();a.WhereClauseCache=
b});
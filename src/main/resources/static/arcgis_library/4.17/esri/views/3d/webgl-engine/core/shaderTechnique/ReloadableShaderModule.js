// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib"],function(c,a,d){Object.defineProperty(a,"__esModule",{value:!0});a.ReloadableShaderModule=void 0;c=function(){function a(a,b){this._module=a;this._loadModule=b}a.prototype.get=function(){return this._module};a.prototype.reload=function(){return d.__awaiter(this,void 0,void 0,function(){var a;return d.__generator(this,function(b){switch(b.label){case 0:return a=this,[4,this._loadModule()];case 1:return a._module=b.sent(),[2,this._module]}})})};return a}();a.ReloadableShaderModule=
c});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib"],function(f,a,g){Object.defineProperty(a,"__esModule",{value:!0});a.autoDispose=a.AutoDisposable=a.AutoDisposableMixin=void 0;a.AutoDisposableMixin=function(b){return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a._isDisposed=!1;return a}g.__extends(a,b);a.prototype.dispose=function(){for(var a,b=0,c=null!==(a=this._managedDisposables)&&void 0!==a?a:[];b<c.length;b++){a=c[b];var d=this[a];this[a]=null;d&&"function"===typeof d.dispose&&
d.dispose()}this._isDisposed=!0};Object.defineProperty(a.prototype,"isDisposed",{get:function(){return this._isDisposed},enumerable:!1,configurable:!0});return a}(b)};f=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}g.__extends(b,a);return b}(a.AutoDisposableMixin(function(){return function(){}}()));a.AutoDisposable=f;a.autoDispose=function(){return function(a,c){var b,e;a.hasOwnProperty("_managedDisposables")||(a._managedDisposables=null!==(e=null===(b=a._managedDisposables)||
void 0===b?void 0:b.slice())&&void 0!==e?e:[]);a._managedDisposables.unshift(c)}}});
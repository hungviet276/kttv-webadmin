// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,d){Object.defineProperty(d,"__esModule",{value:!0});d.VisualElement=void 0;e=function(){function b(a){this._attached=!1;this._visible=!0;this.view=a}b.prototype.applyProps=function(a){var b=!1,c;for(c in a)c in this?"attached"===c?b=a[c]:this[c]=a[c]:console.error("Cannot set unknown property",c);this.attached=b};b.prototype.destroy=function(){this.attached=!1};Object.defineProperty(b.prototype,"attached",{get:function(){return this._attached},set:function(a){a!==
this._attached&&((this._attached=a)?this.createResources():this.destroyResources())},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"visible",{get:function(){return this._visible},set:function(a){a!==this._visible&&(this._visible=a,this.attached&&this.updateVisibility(a))},enumerable:!1,configurable:!0});return b}();d.VisualElement=e});
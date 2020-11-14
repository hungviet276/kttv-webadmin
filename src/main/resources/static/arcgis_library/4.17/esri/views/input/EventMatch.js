// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(c,a){Object.defineProperty(a,"__esModule",{value:!0});a.EventMatch=void 0;c=function(){function a(a,b){void 0===b&&(b=[]);this.eventType=a;this.keyModifiers=b}a.prototype.matches=function(a){if(a.type!==this.eventType)return!1;if(0===this.keyModifiers.length)return!0;a=a.modifiers;for(var b=0,c=this.keyModifiers;b<c.length;b++)if(!a.has(c[b]))return!1;return!0};return a}();a.EventMatch=c});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../kernel","./urlUtils"],function(e,a,c,d){Object.defineProperty(a,"__esModule",{value:!0});a.addTokenParameter=void 0;a.addTokenParameter=function(a){var b=c.id&&c.id.findCredential(a);return b&&b.token?d.addQueryParameter(a,"token",b.token):a}});
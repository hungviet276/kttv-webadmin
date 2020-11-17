// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(e,a){Object.defineProperty(a,"__esModule",{value:!0});a.findSelectedItem=void 0;a.findSelectedItem=function(a,d){var b,c=null===(b=a.layer)||void 0===b?void 0:b.uid;return c&&d.find(function(a){var b;return(null===(b=a.layer)||void 0===b?void 0:b.uid)===c})}});
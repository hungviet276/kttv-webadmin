// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../maybe"],function(e,a,d){function b(a){switch(a){case "defaults":return 0;case "service":return 2;case "portal-item":return 3;case "web-scene":return 4;case "web-map":return 5;case "user":return 6}}function c(a){switch(a){case 0:return"defaults";case 2:return"service";case 3:return"portal-item";case 4:return"web-scene";case 5:return"web-map";case 6:return"user"}return d.assumeNonNull(void 0)}Object.defineProperty(a,"__esModule",{value:!0});a.idToWritableName=a.writableNameToId=
a.idToReadableName=a.readableNameToId=a.idToName=a.nameToId=a.OriginIdNum=void 0;a.OriginIdNum=7;a.nameToId=b;a.idToName=c;a.readableNameToId=function(a){return b(a)};a.idToReadableName=function(a){return c(a)};a.writableNameToId=function(a){return b(a)};a.idToWritableName=function(a){return c(a)}});
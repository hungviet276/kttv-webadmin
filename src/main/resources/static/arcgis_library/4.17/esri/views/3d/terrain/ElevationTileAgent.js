// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","./TerrainConst","./TileAgent"],function(c,d,e,f,g){Object.defineProperty(d,"__esModule",{value:!0});c=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a._scaleRangeEnabled=!1;return a}e.__extends(a,b);Object.defineProperty(a.prototype,"_desiredMinLevelDelta",{get:function(){return f.ELEVATION_DESIRED_RESOLUTION_LEVEL-(this.tile.vlevel-this.tile.lij[0])},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"_loadingLevelDelta",
{get:function(){return 0},enumerable:!1,configurable:!0});return a}(g.TileAgent);d.default=c});
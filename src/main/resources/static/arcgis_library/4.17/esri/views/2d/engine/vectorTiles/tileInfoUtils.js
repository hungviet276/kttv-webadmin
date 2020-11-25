// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../layers/support/TileInfo"],function(p,c,h){Object.defineProperty(c,"__esModule",{value:!0});c.unionTileInfos=c.areSchemasOverlapping=void 0;c.areSchemasOverlapping=function(a,b){if(a===b)return!0;if(!a&&null!=b||null!=a&&!b||!a.spatialReference.equals(b.spatialReference)||a.dpi!==b.dpi)return!1;var d=a.origin,c=b.origin;if(1E-6<=Math.abs(d.x-c.x)||1E-6<=Math.abs(d.y-c.y))return!1;a.lods[0].scale>b.lods[0].scale?(d=a,a=b):d=b;for(b=d.lods[0].scale;b>=a.lods[a.lods.length-
1].scale-1E-6;b/=2)if(1E-6>Math.abs(b-a.lods[0].scale))return!0;return!1};c.unionTileInfos=function(a,b){if(a===b)return a;if(!a&&null!=b)return b;if(null!=a&&!b)return a;var c=a.size[0],k=a.format,l=a.dpi,m={x:a.origin.x,y:a.origin.y},n=a.spatialReference.toJSON(),e=a.lods[0].scale>b.lods[0].scale?a.lods[0]:b.lods[0];a=(a.lods[a.lods.length-1].scale<=b.lods[b.lods.length-1].scale?a.lods[a.lods.length-1]:b.lods[b.lods.length-1]).scale;b=[];for(var f=e.scale,e=e.resolution,g=0;f>a;)b.push({level:g,
resolution:e,scale:f}),g++,f/=2,e/=2;return new h({size:[c,c],dpi:l,format:k||"pbf",origin:m,lods:b,spatialReference:n})}});
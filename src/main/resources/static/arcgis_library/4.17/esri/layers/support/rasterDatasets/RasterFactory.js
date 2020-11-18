// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Error ../../../core/MapUtils ./CloudRaster ./ImageServerRaster ./MRFRaster ./TIFFRaster".split(" "),function(y,z,g,r,t,u,v,w,x){var c=new Map;c.set("CRF",{desc:"Cloud Raster Format",constructor:u});c.set("MRF",{desc:"Meta Raster Format",constructor:w});c.set("TIFF",{desc:"GeoTIFF",constructor:x});c.set("RasterTileServer",{desc:"Raster Tile Server",constructor:v});return function(){function d(){}Object.defineProperty(d,"supportedFormats",{get:function(){var b=
new Set;c.forEach(function(c,h){return b.add(h)});return b},enumerable:!1,configurable:!0});d.open=function(b){return g.__awaiter(this,void 0,void 0,function(){var e,h,d,a,n,l,k,f,p,q,m;return g.__generator(this,function(g){switch(g.label){case 0:e=b.url;h=b.ioConfig;d=b.sourceJSON;a=b.datasetFormat;null==a&&e.lastIndexOf(".")&&(a=e.slice(e.lastIndexOf(".")+1).toUpperCase());"OVR"===a||"TIF"===a?a="TIFF":-1<e.toLowerCase().indexOf("/imageserver")&&(a="RasterTileServer");n={bandIds:null,sampling:null};
l={url:e,sourceJSON:d,datasetFormat:a,ioConfig:h||n};if(!this.supportedFormats.has(a))return[3,2];k=c.get(a).constructor;f=new k(l);return[4,f.open({signal:b.signal})];case 1:return g.sent(),[2,f];case 2:if(a)throw new r("rasterfactory:open","not a supported format "+a);p=t.keysOfMap(c);q=0;m=function(){a=p[q++];if(!a)return null;k=c.get(a).constructor;f=new k(l);return f.open({signal:b.signal}).then(function(){return f}).catch(function(){return m()})};return[2,m()]}})})};d.register=function(b,e,
d){c.has(b.toUpperCase())||c.set(b.toUpperCase(),{desc:e,constructor:d})};return d}()});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ./core/Warning ./renderers/ClassBreaksRenderer ./renderers/RasterColormapRenderer ./renderers/RasterShadedReliefRenderer ./renderers/RasterStretchRenderer ./renderers/UniqueValueRenderer ./renderers/VectorFieldRenderer".split(" "),function(p,a,m,d,e,f,g,h,k){function l(a,b){if(!a)return null;var c;c=a?n[a.type]||null:null;if(c)return c=new c,c.read(a,b),c;b&&b.messages&&a&&b.messages.push(new m("renderer:unsupported","Renderers of type '"+(a.type||"unknown")+"' are not supported",
{definition:a,context:b}));return null}Object.defineProperty(a,"__esModule",{value:!0});a.fromJSON=a.read=a.rasterRendererTypes=a.VectorFieldRenderer=a.RasterShadedReliefRenderer=a.UniqueValueRenderer=a.RasterStretchRenderer=a.RasterColormapRenderer=a.ClassBreaksRenderer=void 0;a.ClassBreaksRenderer=d;a.RasterColormapRenderer=e;a.RasterShadedReliefRenderer=f;a.RasterStretchRenderer=g;a.UniqueValueRenderer=h;a.VectorFieldRenderer=k;a.rasterRendererTypes={key:"type",base:null,typeMap:{"unique-value":h,
"class-breaks":d,"raster-colormap":e,"raster-stretch":g,"vector-field":k,"raster-shaded-relief":f}};var n={uniqueValue:h,classBreaks:d,rasterStretch:g,rasterColormap:e,vectorField:k,rasterShadedRelief:f};a.read=l;a.fromJSON=function(a,b){return l(a,b)}});
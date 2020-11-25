// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./functions"],function(y,h,c){function n(b,c){var a=Math.max(b.compared.sourceZoom,b.compared.targetZoom);b=b.source.zoomAtPixelsPerPan(b.desiredPixelFlow/b.compared.pan)/2;return b<a?null!=c.maximumDistance?a+(c.maximumDistance-a)/2:1.5*a:c.maximumDistance?Math.min(c.maximumDistance,b):b}Object.defineProperty(h,"__esModule",{value:!0});h.optimalDistance=void 0;h.optimalDistance=function(b,d){var a=n(b,d),e={ascensionFactor:null!=d.ascensionFactor?d.ascensionFactor:.5,
descensionFactor:null!=d.descensionFactor?d.descensionFactor:.5},f=0===e.ascensionFactor,k=0===e.descensionFactor,h=f?c.tAscensionZoomOnly:c.tAscensionZoomPan,p=f?c.dtAscensionZoomOnly:c.dtAscensionZoomPan,q=f?c.ddtAscensionZoomOnly:c.ddtAscensionZoomPan,r=k?c.tDescensionZoomOnly:c.tDescensionZoomPan,t=k?c.dtDescensionZoomOnly:c.dtDescensionZoomPan,u=k?c.ddtDescensionZoomOnly:c.ddtDescensionZoomPan,f=function(a){return h(b,a,e)+c.tPanion(b,a,e)+r(b,a,e)},k=function(a){return p(b,a,e)+c.dtPanion(b,
a,e)+t(b,a,e)},v=function(a){return q(b,a,e)+c.ddtPanion(b,a,e)+u(b,a,e)},l=f(a),w=c.tBaseLine(b),x=d.maximumIterations||20,m=null!=d.maximumDistance?d.maximumDistance:Infinity;for(d=0;d<x;d++){var g=(k(a)+1E-6)/v(a);if(isNaN(g)||a>=m&&0>g){if(!isFinite(m))return null;a=m;l=f(a);break}a-=g;if(a<b.compared.sourceZoom||a<b.compared.targetZoom)return null;g=f(a);if(.005>=Math.abs(g-l)/l)break;l=g}return l>.7*w||a<b.compared.sourceZoom||a<b.compared.targetZoom?null:a}});
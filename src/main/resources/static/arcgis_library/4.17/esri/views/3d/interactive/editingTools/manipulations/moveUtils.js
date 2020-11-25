// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/maybe ../../../../../core/libs/gl-matrix-2/mat2 ../../../../../core/libs/gl-matrix-2/mat2f64 ../../../../../core/libs/gl-matrix-2/vec2 ../../../../../core/libs/gl-matrix-2/vec2f64 ../../../../../geometry/geometryEngine ../../../../../geometry/support/aaBoundingRect ../../../support/mathUtils ../../../../interactive/dragEventPipeline".split(" "),function(A,g,r,t,u,v,w,x,l,y,k){function z(a){for(var e=0,b=0,c=0;c<a.length;c++)var d=a[c],e=e+d[0],b=b+d[1];
e/=a.length;b/=a.length;for(c=0;c<a.length;c++)d=a[c],d[0]-=e,d[1]-=b}Object.defineProperty(g,"__esModule",{value:!0});g.primaryShapeOrientation=g.createGraphicMoveDragPipeline=void 0;g.createGraphicMoveDragPipeline=function(a,e,b){var c=a.graphic,d=function(a,b){return e({action:a,graphic:c,dxScreen:b.screenDeltaX,dyScreen:b.screenDeltaY})};return b(function(a,b,e){b.next(function(a){"start"===a.action&&d("start",a);return a}).next(k.dragGraphic(c)).next(function(a){switch(a.action){case "start":case "update":(a.translationX||
a.translationY||a.translationZ)&&d("update",a);break;case "end":d("end",a)}return a});e.next(k.resetGraphic(c)).next(function(){d("end",{screenDeltaX:0,screenDeltaY:0})})})};g.primaryShapeOrientation=function(a){if(r.isNone(a)||"polyline"!==a.type&&"polygon"!==a.type)return 0;a=(a=x.convexHull(a))&&a.rings&&a.rings[0];if(!a)return 0;z(a);for(var e=[],b=0;b<a.length-1;b++){var c=Math.atan2(a[b+1][1]-a[b][1],a[b+1][0]-a[b][0]),c=y.cyclical2PI.normalize(c)%(Math.PI/2);e.push(c)}for(var e=e.sort(function(a,
b){return a-b}),b=null,d=0,h=Number.POSITIVE_INFINITY,g=0,m=0;m<e.length;m++)if(c=e[m],c!==b){b=c;t.mat2.fromRotation(p,c);l.empty(n);for(var f=0,k=a;f<k.length;f++)v.vec2.transformMat2(q,k[f],p),l.expandPointInPlace(n,q);f=l.area(n);if(.99<=(f>h?h/f:f/h)&&c<d||f<h)d=c,h=f;g=Math.max(g,f)}return.95<=h/g?0:d};var p=u.mat2f64.create(),n=l.create(),q=w.vec2f64.create()});
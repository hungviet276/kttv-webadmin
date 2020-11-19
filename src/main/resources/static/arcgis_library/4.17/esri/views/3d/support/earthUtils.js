// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/mathUtils","../../../geometry/Point","../../../geometry/support/geodesicConstants"],function(n,c,d,f,g){function k(a,b,c,h){var e,l;a instanceof f&&b instanceof f&&(c=b.longitude,h=b.latitude,l=a.latitude,e=a.longitude);a=d.deg2rad(l);h=d.deg2rad(h);e=d.deg2rad(e);b=d.deg2rad(c);c=Math.sin((a-h)/2);e=Math.sin((e-b)/2);c=2*d.asinClamped(Math.sqrt(c*c+Math.cos(a)*Math.cos(h)*e*e))*g.earthRadius;return Math.round(1E4*c)/1E4}function m(a,b){a/=15;b||(a=Math.round(a));
return a}Object.defineProperty(c,"__esModule",{value:!0});c.positionToTimezone=c.longitudeToTimezone=c.getMaxCameraAltitude=c.getLatDeltaForDistance=c.getLonDeltaForDistance=c.getGreatCircleSpanAt=c.getGreatCircleDistance=void 0;c.getGreatCircleDistance=k;c.getGreatCircleSpanAt=function(a,b,c){var d=b.spatialReference,e=new f(b.x,a.y,d),g=new f(c.x,a.y,d);b=new f(a.x,b.y,d);a=new f(a.x,c.y,d);return{lon:k(e,g),lat:k(b,a)}};c.getLonDeltaForDistance=function(a,b){b/=g.earthRadius;a=d.deg2rad(a);b=Math.sin(b/
2);a=Math.cos(a);a=2*d.asinClamped(Math.sqrt(b*b/(a*a)));return d.rad2deg(a)};c.getLatDeltaForDistance=function(a){return d.rad2deg(a/g.earthRadius)};c.getMaxCameraAltitude=function(a){a=d.deg2rad(a/2);return(1-Math.sin(a))*g.earthRadius/Math.sin(a)};c.longitudeToTimezone=m;c.positionToTimezone=function(a,b){b||(b={hours:0,minutes:0,seconds:0});b.hours=m(a[0],!0);a=b.hours%1;b.hours-=a;b.minutes=60*a;a=b.minutes%1;b.minutes-=a;b.seconds=Math.round(60*a);return b}});
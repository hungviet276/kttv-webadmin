// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
(function(w,v){"object"===typeof exports&&"undefined"!==typeof module?v(exports):"function"===typeof define&&define.amd?define(["exports"],v):(w=w||self,v(w.drawSvgPath={}))})(this,function(w){function v(a,g,f,b){return["C",a,g,f,b,f,b]}function A(a,g,f,b,d,e){return["C",a/3+2/3*f,g/3+2/3*b,d/3+2/3*f,e/3+2/3*b,d,e]}var C=function(a){var g=0,f=0,b=0,d=0;return a.map(function(e){e=e.slice();var a=e[0],m=a.toUpperCase();if(a!=m)switch(e[0]=m,a){case "a":e[6]+=b;e[7]+=d;break;case "v":e[1]+=d;break;case "h":e[1]+=
b;break;default:for(a=1;a<e.length;)e[a++]+=b,e[a++]+=d}switch(m){case "Z":b=g;d=f;break;case "H":b=e[1];break;case "V":d=e[1];break;case "M":b=g=e[1];d=f=e[2];break;default:b=e[e.length-2],d=e[e.length-1]}return e})},D=function(){return function(a,g){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a)){var f=[],b=!0,d=!1,e=void 0;try{for(var h=a[Symbol.iterator](),m;!(b=(m=h.next()).done)&&(f.push(m.value),!g||f.length!==g);b=!0);}catch(n){d=!0,e=n}finally{try{if(!b&&h["return"])h["return"]()}finally{if(d)throw e;
}}return f}throw new TypeError("Invalid attempt to destructure non-iterable instance");}}(),x=2*Math.PI,y=function(a,g,f,b,d,e,h){var m=a.x;a=a.y;m*=g;a*=f;return{x:b*m-d*a+e,y:d*m+b*a+h}},E=function(a,g){var f=1.5707963267948966===g?.551915024494:-1.5707963267948966===g?-.551915024494:4/3*Math.tan(g/4),b=Math.cos(a),d=Math.sin(a),e=Math.cos(a+g);a=Math.sin(a+g);return[{x:b-d*f,y:d+b*f},{x:e+a*f,y:a-e*f},{x:e,y:a}]},B=function(a,g,f,b){var d=a*f+g*b;1<d&&(d=1);-1>d&&(d=-1);return(0>a*b-g*f?-1:1)*
Math.acos(d)},F=function(a,g,f,b,d,e,h,m,n,q,l,k){var r=Math.pow(d,2),t=Math.pow(e,2),c=Math.pow(l,2),u=Math.pow(k,2),p=r*t-r*u-t*c;0>p&&(p=0);p=Math.sqrt(p/(r*u+t*c))*(h===m?-1:1);h=p*d/e*k;p=p*-e/d*l;a=q*h-n*p+(a+f)/2;g=n*h+q*p+(g+b)/2;b=(l-h)/d;n=(k-p)/e;d=(-l-h)/d;k=(-k-p)/e;e=B(1,0,b,n);k=B(b,n,d,k);0===m&&0<k&&(k-=x);1===m&&0>k&&(k+=x);return[a,g,e,k]},G=function(a){var g=a.px,f=a.py,b=a.cx,d=a.cy,e=a.rx,h=a.ry,m=a.xAxisRotation,n=void 0===m?0:m,m=a.largeArcFlag,q=a.sweepFlag;a=[];if(0===e||
0===h)return[];var l=Math.sin(n*x/360),k=Math.cos(n*x/360),n=k*(g-b)/2+l*(f-d)/2,r=-l*(g-b)/2+k*(f-d)/2;if(0===n&&0===r)return[];var e=Math.abs(e),h=Math.abs(h),t=Math.pow(n,2)/Math.pow(e,2)+Math.pow(r,2)/Math.pow(h,2);1<t&&(e*=Math.sqrt(t),h*=Math.sqrt(t));var g=F(g,f,b,d,e,h,void 0===m?0:m,void 0===q?0:q,l,k,n,r),f=D(g,4),c=f[0],u=f[1],g=f[2],f=f[3],b=Math.abs(f)/(x/4);1E-7>Math.abs(1-b)&&(b=1);b=Math.max(Math.ceil(b),1);f/=b;for(d=0;d<b;d++)a.push(E(g,f)),g+=f;return a.map(function(b){var a=y(b[0],
e,h,k,l,c,u),d=a.x,a=a.y,f=y(b[1],e,h,k,l,c,u),g=f.x,f=f.y;b=y(b[2],e,h,k,l,c,u);return{x1:d,y1:a,x2:g,y2:f,x:b.x,y:b.y}})},J=function(a){var g=[];a.replace(H,function(a,b,d){a=b.toLowerCase();d=(d=d.match(I))?d.map(Number):[];"m"==a&&2<d.length&&(g.push([b].concat(d.splice(0,2))),a="l",b="m"==b?"l":"L");for(;;){if(d.length==z[a])return d.unshift(b),g.push(d);if(d.length<z[a])throw Error("malformed path data");g.push([b].concat(d.splice(0,z[a])))}});return g},z={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,
z:0},H=/([astvzqmhlc])([^astvzqmhlc]*)/ig,I=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;w.draw=function(a,g){var f=C(J(g)),b;g=[];for(var d=0,e=0,h=0,m=0,n=null,q=null,l=0,k=0,r=0,t=f.length;r<t;r++){var c=f[r],u=c[0];switch(u){case "M":h=c[1];m=c[2];break;case "A":var p=G({px:l,py:k,cx:c[6],cy:c[7],rx:c[1],ry:c[2],xAxisRotation:c[3],largeArcFlag:c[4],sweepFlag:c[5]});if(!p.length)continue;for(b=0;b<p.length;b++)c=p[b],c=["C",c.x1,c.y1,c.x2,c.y2,c.x,c.y],b<p.length-1&&g.push(c);break;case "S":p=l;if("C"==
b||"S"==b)p+=p-d,k+=k-e;c=["C",p,k,c[1],c[2],c[3],c[4]];break;case "T":"Q"==b||"T"==b?(n=2*l-n,q=2*k-q):(n=l,q=k);c=A(l,k,n,q,c[1],c[2]);break;case "Q":n=c[1];q=c[2];c=A(l,k,c[1],c[2],c[3],c[4]);break;case "L":c=v(l,k,c[1],c[2]);break;case "H":c=v(l,k,c[1],k);break;case "V":c=v(l,k,l,c[1]);break;case "Z":c=v(l,k,h,m)}b=u;l=c[c.length-2];k=c[c.length-1];4<c.length?(d=c[c.length-4],e=c[c.length-3]):(d=l,e=k);g.push(c)}for(f=0;f<g.length;f++)h=g[f],"M"===h[0]?a.moveTo(h[1],h[2]):"C"===h[0]&&a.bezierCurveTo(h[1],
h[2],h[3],h[4],h[5],h[6])};Object.defineProperty(w,"__esModule",{value:!0})});
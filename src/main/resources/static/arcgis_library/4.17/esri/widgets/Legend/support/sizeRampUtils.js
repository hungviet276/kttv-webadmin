// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../Color ../../../symbols ../../../core/promiseUtils ../../../renderers/support/numberUtils ../../../symbols/support/cimSymbolUtils ../../../symbols/support/utils ./utils @dojo/framework/shim/Promise".split(" "),function(L,h,q,Q,M,R,x,S,K,T){function U(a,b){var c=a.length-1;return a.map(function(a,k){return T.createStopLabel(a,k,c,b)})}function V(a,b){var c=null,g=null;"simple"===a.type?c=a.symbol:"class-breaks"===a.type?(c=(a=a.classBreakInfos)&&a[0]&&a[0].symbol,
g=1<a.length):"unique-value"===a.type&&(c=(a=a.uniqueValueInfos)&&a[0]&&a[0].symbol,g=1<a.length);if(!c||W(c))return null;c=c.clone();if(b||g)-1<c.type.indexOf("3d")?X(c):(b=c,"cim"===b.type?S.applyCIMSymbolColor(b,new Q(N)):-1!==b.type.indexOf("line")?b.color=A:(b.color=O,"simple-marker"===b.type&&(b.outline={color:A,width:1.5})));return c}function W(a){return a?M.isSymbol3D(a)?a.symbolLayers?a.symbolLayers.some(function(a){return a&&"fill"===a.type}):!1:-1!==a.type.indexOf("fill"):!1}function X(a){K.isVolumetricSymbol(a)||
("line-3d"===a.type?a.symbolLayers.forEach(function(a){a.material={color:A}}):a.symbolLayers.forEach(function(a){"icon"!==a.type||a.resource&&a.resource.href?a.material={color:N}:(a.material={color:O},a.outline={color:A,size:1.5})}))}function Y(a,b,c,g){return q.__awaiter(this,void 0,void 0,function(){var k,l,d,f,m;return q.__generator(this,function(n){switch(n.label){case 0:return[4,new Promise(function(a,b){L(["../../../renderers/visualVariables/support/visualVariableUtils"],a,b)})];case 1:l=(k=
n.sent().getSizeRangeAtScale(a,c,g))&&Z(k);if(!k&&!l)return[2,void 0];d=l.map(function(b){var c=k.minSize,g=k.maxSize,d=a.minDataValue,f=a.maxDataValue;return b<=c?d:b>=g?f:(b-c)/(g-c)*(f-d)+d});d=x.round(d);f=1;n.label=2;case 2:return f<d.length-1?[4,aa(a,b,d[f],d[f-1],c,g)]:[3,5];case 3:if(m=n.sent())d[f]=m[0],l[f]=m[1];n.label=4;case 4:return f++,[3,2];case 5:return[2,d]}})})}function Z(a){var b=a.minSize;a=(a.maxSize-b)/4;for(var c=[],g=0;5>g;g++)c.push(b+a*g);return c}function aa(a,b,c,g,k,l){return q.__awaiter(this,
void 0,void 0,function(){var d,f,m,n,h,B,p,u,v,r,e,t,w,C,D,E,F,H,y,I,J,P;return q.__generator(this,function(z){switch(z.label){case 0:return[4,G(a,b,c,k,l)];case 1:return d=z.sent(),[4,G(a,b,g,k,l)];case 2:f=z.sent(),m=x.numDigits(c),n=m.fractional,h=20,B=m.integer,u=p=null,0<c&&1>c&&(p=Math.pow(10,n),c*=p,B=x.numDigits(c).integer),v=B-1,z.label=3;case 3:if(!(0<=v))return[3,8];r=Math.pow(10,v);e=Math.floor(c/r)*r;t=Math.ceil(c/r)*r;null!=p&&(e/=p,t/=p);w=(e+t)/2;P=x.round([e,w,t],{indexes:[1]});w=
P[1];return[4,G(a,b,e,k,l)];case 4:return C=z.sent(),[4,G(a,b,t,k,l)];case 5:return D=z.sent(),[4,G(a,b,w,k,l)];case 6:E=z.sent();F=x.percentChange(d,C,f,null);H=x.percentChange(d,D,f,null);y=x.percentChange(d,E,f,null);I=F.previous<=h;J=H.previous<=h;I&&J&&(F.previous<=H.previous?(I=!0,J=!1):(J=!0,I=!1));I?u=[e,C]:J?u=[t,D]:y.previous<=h&&(u=[w,E]);if(u)return[3,8];z.label=7;case 7:return v--,[3,3];case 8:return[2,u]}})})}function G(a,b,c,g,k){return q.__awaiter(this,void 0,void 0,function(){var l;
return q.__generator(this,function(d){switch(d.label){case 0:return[4,new Promise(function(a,b){L(["../../../renderers/visualVariables/support/visualVariableUtils"],a,b)})];case 1:return l=d.sent().getSize,[2,l(a,c,{scale:g,view:k,shape:"simple-marker"===b.type?b.style:null})]}})})}function ba(a,b){a=a.clone();if(M.isSymbol3D(a))K.isVolumetricSymbol(a)||a.symbolLayers.forEach(function(a){"fill"!==a.type&&(a.size=b)});else if("esri.symbols.SimpleMarkerSymbol"===a.declaredClass)a.size=b;else if("esri.symbols.PictureMarkerSymbol"===
a.declaredClass){var c=a.width,g=a.height;a.height=b;a.width=c/g*b}else"esri.symbols.SimpleLineSymbol"===a.declaredClass?a.width=b:"esri.symbols.TextSymbol"===a.declaredClass&&a.font&&(a.font.size=b);return a}Object.defineProperty(h,"__esModule",{value:!0});h.getRampStops=h.REAL_WORLD_MIN_SIZE=h.REAL_WORLD_MAX_SIZE=void 0;h.REAL_WORLD_MAX_SIZE=30;h.REAL_WORLD_MIN_SIZE=12;var O=[255,255,255],N=[200,200,200],A=[128,128,128];h.getRampStops=function(a,b,c,g,k,l){return q.__awaiter(this,void 0,void 0,
function(){var d,f,m,n,A,B,p,u,v,r,e,t,w,C,D,E,F,H=this;return q.__generator(this,function(y){switch(y.label){case 0:f=(d=b.legendOptions)&&d.customValues;m=V(a,c);n=!!m;A=!!f;B=null!=b.minSize&&null!=b.maxSize;p=b.stops&&1<b.stops.length;u=!!b.target;if(!n||!(A||B||p&&!u))return[2,void 0];v=K.isVolumetricSymbol(m);t=e=r=null;if(!v||p)return[3,1];e=x.round([b.minDataValue,b.maxDataValue]);return[3,4];case 1:return(w=f)?[3,3]:[4,Y(b,m,g,k)];case 2:w=y.sent(),y.label=3;case 3:e=w,y.label=4;case 4:!e&&
p&&(e=b.stops.map(function(a){return a.value}),(r=b.stops.some(function(a){return!!a.label}))&&(t=b.stops.map(function(a){return a.label})));v&&e&&2<e.length&&(e=[e[0],e[e.length-1]]);if(!e)return[2,null];C=[h.REAL_WORLD_MIN_SIZE,h.REAL_WORLD_MAX_SIZE];D=K.getSymbolOutlineSize(m);E=r?null:U(e,l);return[4,R.all(e.map(function(a,c){return q.__awaiter(H,void 0,void 0,function(){var d,e,f,l;return q.__generator(this,function(h){switch(h.label){case 0:if(!v)return[3,1];f=C[c];return[3,3];case 1:return[4,
G(b,m,a,g,k)];case 2:f=h.sent(),h.label=3;case 3:return d=f,e=ba(m,d),l=r?t[c]:E[c],[2,{value:a,symbol:e,label:l,size:d,outlineSize:D}]}})})}))];case 5:return F=y.sent(),[2,F.reverse()]}})})}});
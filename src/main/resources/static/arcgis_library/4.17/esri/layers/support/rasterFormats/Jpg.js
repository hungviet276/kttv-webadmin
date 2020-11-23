// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define([],function(){var C=function(){function C(C){this.message="JPEG error: "+C}C.prototype=Error();C.prototype.name="JpegError";return C.constructor=C}();return function(){function H(){this.decodeTransform=null;this.colorTransform=-1}function Q(b,c){for(var h=0,g=[],a,v,m=16;0<m&&!b[m-1];)m--;g.push({children:[],index:0});var d=g[0],f;for(a=0;a<m;a++){for(v=0;v<b[a];v++){d=g.pop();for(d.children[d.index]=c[h];0<d.index;)d=g.pop();d.index++;for(g.push(d);g.length<=a;)g.push(f={children:[],index:0}),
d.children[d.index]=f.children,d=f;h++}a+1<m&&(g.push(f={children:[],index:0}),d.children[d.index]=f.children,d=f)}return g[0].children}function R(b,c,h,g,a,v,m,d,f){function r(){if(0<A)return A--,B>>A&1;B=b[c++];if(255===B){var a=b[c++];if(a)throw new C("unexpected marker "+(B<<8|a).toString(16));}A=7;return B>>>7}function y(a){for(;;){a=a[r()];if("number"===typeof a)return a;if("object"!==typeof a)throw new C("invalid huffman sequence");}}function t(a){for(var b=0;0<a;)b=b<<1|r(),a--;return b}function k(a){if(1===
a)return 1===r()?1:-1;var b=t(a);return b>=1<<a-1?b:b+(-1<<a)+1}function e(a,b){var c=y(a.huffmanTableDC),c=0===c?0:k(c);a.blockData[b]=a.pred+=c;for(c=1;64>c;){var d=y(a.huffmanTableAC),e=d&15,d=d>>4;if(0===e){if(15>d)break;c+=16}else c+=d,a.blockData[b+I[c]]=k(e),c++}}function w(a,b){var c=y(a.huffmanTableDC),c=0===c?0:k(c)<<f;a.blockData[b]=a.pred+=c}function p(a,b){a.blockData[b]|=r()<<f}function n(a,b){if(0<u)u--;else for(var c=v;c<=m;){var d=y(a.huffmanTableAC),e=d&15,d=d>>4;if(0===e){if(15>
d){u=t(d)+(1<<d)-1;break}c+=16}else c+=d,a.blockData[b+I[c]]=k(e)*(1<<f),c++}}function q(a,b){for(var c=v,d=0,e;c<=m;){e=I[c];switch(D){case 0:d=y(a.huffmanTableAC);e=d&15;d>>=4;if(0===e)15>d?(u=t(d)+(1<<d),D=4):(d=16,D=1);else{if(1!==e)throw new C("invalid ACn encoding");N=k(e);D=d?2:3}continue;case 1:case 2:a.blockData[b+e]?a.blockData[b+e]+=r()<<f:(d--,0===d&&(D=2===D?3:0));break;case 3:a.blockData[b+e]?a.blockData[b+e]+=r()<<f:(a.blockData[b+e]=N<<f,D=0);break;case 4:a.blockData[b+e]&&(a.blockData[b+
e]+=r()<<f)}c++}4===D&&(u--,0===u&&(D=0))}var l=h.mcusPerLine,x=c,B=0,A=0,u=0,D=0,N,J=g.length,z,E,K,L,G;d=h.progressive?0===v?0===d?w:p:0===d?n:q:e;var F=0;h=1===J?g[0].blocksPerLine*g[0].blocksPerColumn:l*h.mcusPerColumn;for(var H,O;F<h;){var P=a?Math.min(h-F,a):h;for(E=0;E<J;E++)g[E].pred=0;u=0;if(1===J)for(z=g[0],G=0;G<P;G++)d(z,64*((z.blocksPerLine+1)*(F/z.blocksPerLine|0)+F%z.blocksPerLine)),F++;else for(G=0;G<P;G++){for(E=0;E<J;E++)for(z=g[E],H=z.h,O=z.v,K=0;K<O;K++)for(L=0;L<H;L++)d(z,64*
((z.blocksPerLine+1)*((F/l|0)*z.v+K)+(F%l*z.h+L)));F++}A=0;(z=M(b,c))&&z.invalid&&(console.log("decodeScan - unexpected MCU data, next marker is: "+z.invalid),c=z.offset);z=z&&z.marker;if(!z||65280>=z)throw new C("marker was not found");if(65488<=z&&65495>=z)c+=2;else break}(z=M(b,c))&&z.invalid&&(console.log("decodeScan - unexpected Scan data, next marker is: "+z.invalid),c=z.offset);return c-x}function S(b,c){b=c.blocksPerLine;for(var h=c.blocksPerColumn,g=new Int16Array(64),a=0;a<h;a++)for(var v=
0;v<b;v++){var m=64*((c.blocksPerLine+1)*a+v),d=g,f=c.quantizationTable,r=c.blockData,y=void 0,t=void 0,k=void 0,e=void 0,w=void 0,p=void 0,n=void 0,q=void 0,l=void 0,x=q=void 0,B=n=t=p=void 0,A=void 0,l=void 0;if(!f)throw new C("missing required Quantization Table.");for(var u=0;64>u;u+=8)l=r[m+u],q=r[m+u+1],x=r[m+u+2],p=r[m+u+3],t=r[m+u+4],n=r[m+u+5],B=r[m+u+6],A=r[m+u+7],l*=f[u],0===(q|x|p|t|n|B|A)?(l=5793*l+512>>10,d[u]=l,d[u+1]=l,d[u+2]=l,d[u+3]=l,d[u+4]=l,d[u+5]=l,d[u+6]=l,d[u+7]=l):(q*=f[u+
1],x*=f[u+2],p*=f[u+3],t*=f[u+4],n*=f[u+5],B*=f[u+6],A*=f[u+7],y=5793*l+128>>8,t=5793*t+128>>8,k=x,e=B,w=2896*(q-A)+128>>8,q=2896*(q+A)+128>>8,p<<=4,n<<=4,y=y+t+1>>1,t=y-t,l=3784*k+1567*e+128>>8,k=1567*k-3784*e+128>>8,e=l,w=w+n+1>>1,n=w-n,q=q+p+1>>1,p=q-p,y=y+e+1>>1,e=y-e,t=t+k+1>>1,k=t-k,l=2276*w+3406*q+2048>>12,w=3406*w-2276*q+2048>>12,q=l,l=799*p+4017*n+2048>>12,p=4017*p-799*n+2048>>12,n=l,d[u]=y+q,d[u+7]=y-q,d[u+1]=t+n,d[u+6]=t-n,d[u+2]=k+p,d[u+5]=k-p,d[u+3]=e+w,d[u+4]=e-w);for(f=0;8>f;++f)l=
d[f],q=d[f+8],x=d[f+16],p=d[f+24],t=d[f+32],n=d[f+40],B=d[f+48],A=d[f+56],0===(q|x|p|t|n|B|A)?(l=5793*l+8192>>14,l=-2040>l?0:2024<=l?255:l+2056>>4,r[m+f]=l,r[m+f+8]=l,r[m+f+16]=l,r[m+f+24]=l,r[m+f+32]=l,r[m+f+40]=l,r[m+f+48]=l,r[m+f+56]=l):(y=5793*l+2048>>12,t=5793*t+2048>>12,k=x,e=B,w=2896*(q-A)+2048>>12,q=2896*(q+A)+2048>>12,y=(y+t+1>>1)+4112,t=y-t,l=3784*k+1567*e+2048>>12,k=1567*k-3784*e+2048>>12,e=l,w=w+n+1>>1,n=w-n,q=q+p+1>>1,p=q-p,y=y+e+1>>1,e=y-e,t=t+k+1>>1,k=t-k,l=2276*w+3406*q+2048>>12,w=
3406*w-2276*q+2048>>12,q=l,l=799*p+4017*n+2048>>12,p=4017*p-799*n+2048>>12,n=l,l=y+q,A=y-q,q=t+n,B=t-n,x=k+p,n=k-p,p=e+w,t=e-w,l=16>l?0:4080<=l?255:l>>4,q=16>q?0:4080<=q?255:q>>4,x=16>x?0:4080<=x?255:x>>4,p=16>p?0:4080<=p?255:p>>4,t=16>t?0:4080<=t?255:t>>4,n=16>n?0:4080<=n?255:n>>4,B=16>B?0:4080<=B?255:B>>4,A=16>A?0:4080<=A?255:A>>4,r[m+f]=l,r[m+f+8]=q,r[m+f+16]=x,r[m+f+24]=p,r[m+f+32]=t,r[m+f+40]=n,r[m+f+48]=B,r[m+f+56]=A)}return c.blockData}function M(b,c,h){var g=b.length-1;h=h<c?h:c;if(c>=g)return null;
var a=b[c]<<8|b[c+1];if(65472<=a&&65534>=a)return{invalid:null,marker:a,offset:c};for(c=b[h]<<8|b[h+1];!(65472<=c&&65534>=c);){if(++h>=g)return null;c=b[h]<<8|b[h+1]}return{invalid:a.toString(16),marker:c,offset:h}}if(!self||!self.Uint8ClampedArray)return null;var I=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]);H.prototype={parse:function(b){function c(){var c=
b[a]<<8|b[a+1];a+=2;return c}function h(){var d=c(),d=a+d-2,e=M(b,d,a);e&&e.invalid&&(console.log("readDataBlock - incorrect length, next marker is: "+e.invalid),d=e.offset);d=b.subarray(a,d);a+=d.length;return d}function g(a){for(var b=Math.ceil(a.samplesPerLine/8/a.maxH),c=Math.ceil(a.scanLines/8/a.maxV),d=0;d<a.components.length;d++){x=a.components[d];var e=Math.ceil(Math.ceil(a.samplesPerLine/8)*x.h/a.maxH),f=Math.ceil(Math.ceil(a.scanLines/8)*x.v/a.maxV);x.blockData=new Int16Array(64*c*x.v*(b*
x.h+1));x.blocksPerLine=e;x.blocksPerColumn=f}a.mcusPerLine=b;a.mcusPerColumn=c}var a=0,v=null,m=null,d,f,r=[],y=[],t=[],k=c();if(65496!==k)throw new C("SOI not found");for(k=c();65497!==k;){var e,w;switch(k){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:e=h();65504===k&&74===e[0]&&70===e[1]&&73===e[2]&&70===e[3]&&0===e[4]&&(v={version:{major:e[5],minor:e[6]},
densityUnits:e[7],xDensity:e[8]<<8|e[9],yDensity:e[10]<<8|e[11],thumbWidth:e[12],thumbHeight:e[13],thumbData:e.subarray(14,14+3*e[12]*e[13])});65518===k&&65===e[0]&&100===e[1]&&111===e[2]&&98===e[3]&&101===e[4]&&(m={version:e[5]<<8|e[6],flags0:e[7]<<8|e[8],flags1:e[9]<<8|e[10],transformCode:e[11]});break;case 65499:for(var k=c()+a-2,p;a<k;){var n=b[a++],q=new Uint16Array(64);if(0===n>>4)for(e=0;64>e;e++)p=I[e],q[p]=b[a++];else if(1===n>>4)for(e=0;64>e;e++)p=I[e],q[p]=c();else throw new C("DQT - invalid table spec");
r[n&15]=q}break;case 65472:case 65473:case 65474:if(d)throw new C("Only single frame JPEGs supported");c();d={};d.extended=65473===k;d.progressive=65474===k;d.precision=b[a++];d.scanLines=c();d.samplesPerLine=c();d.components=[];d.componentIds={};e=b[a++];for(k=q=n=0;k<e;k++){p=b[a];w=b[a+1]>>4;var l=b[a+1]&15;n<w&&(n=w);q<l&&(q=l);w=d.components.push({h:w,v:l,quantizationId:b[a+2],quantizationTable:null});d.componentIds[p]=w-1;a+=3}d.maxH=n;d.maxV=q;g(d);break;case 65476:p=c();for(k=2;k<p;){n=b[a++];
q=new Uint8Array(16);for(e=w=0;16>e;e++,a++)w+=q[e]=b[a];l=new Uint8Array(w);for(e=0;e<w;e++,a++)l[e]=b[a];k+=17+w;(0===n>>4?t:y)[n&15]=Q(q,l)}break;case 65501:c();f=c();break;case 65498:c();p=b[a++];e=[];for(var x,k=0;k<p;k++)n=d.componentIds[b[a++]],x=d.components[n],n=b[a++],x.huffmanTableDC=t[n>>4],x.huffmanTableAC=y[n&15],e.push(x);k=b[a++];p=b[a++];n=b[a++];k=R(b,a,d,e,f,k,p,n>>4,n&15);a+=k;break;case 65535:255!==b[a]&&a--;break;default:if(255===b[a-3]&&192<=b[a-2]&&254>=b[a-2])a-=3;else throw new C("unknown marker "+
k.toString(16));}k=c()}this.width=d.samplesPerLine;this.height=d.scanLines;this.jfif=v;this.eof=a;this.adobe=m;this.components=[];for(k=0;k<d.components.length;k++){x=d.components[k];if(v=r[x.quantizationId])x.quantizationTable=v;this.components.push({output:S(d,x),scaleX:x.h/d.maxH,scaleY:x.v/d.maxV,blocksPerLine:x.blocksPerLine,blocksPerColumn:x.blocksPerColumn})}this.numComponents=this.components.length},_getLinearizedBlockData:function(b,c){var h=this.width/b,g=this.height/c,a,v,m,d,f,r,y=0,t,
k=this.components.length,e=b*c*k,w=new Uint8ClampedArray(e),p=new Uint32Array(b);for(r=0;r<k;r++){a=this.components[r];v=a.scaleX*h;m=a.scaleY*g;y=r;t=a.output;d=a.blocksPerLine+1<<3;for(f=0;f<b;f++)a=0|f*v,p[f]=(a&4294967288)<<3|a&7;for(v=0;v<c;v++)for(a=0|v*m,a=d*(a&4294967288)|(a&7)<<3,f=0;f<b;f++)w[y]=t[a+p[f]],y+=k}if(c=this.decodeTransform)for(r=0;r<e;)for(b=a=0;a<k;a++,r++,b+=2)w[r]=(w[r]*c[b]>>8)+c[b+1];return w},_isColorConversionNeeded:function(){return this.adobe?!!this.adobe.transformCode:
3===this.numComponents?0===this.colorTransform?!1:!0:1===this.colorTransform?!0:!1},_convertYccToRgb:function(b){for(var c,h,g,a=0,v=b.length;a<v;a+=3)c=b[a],h=b[a+1],g=b[a+2],b[a]=c-179.456+1.402*g,b[a+1]=c+135.459-.344*h-.714*g,b[a+2]=c-226.816+1.772*h;return b},_convertYcckToRgb:function(b){for(var c,h,g,a,v=0,m=0,d=b.length;m<d;m+=4)c=b[m],h=b[m+1],g=b[m+2],a=b[m+3],b[v++]=-122.67195406894+h*(-6.60635669420364E-5*h+4.37130475926232E-4*g-5.4080610064599E-5*c+4.8449797120281E-4*a-.154362151871126)+
g*(-9.57964378445773E-4*g+8.17076911346625E-4*c-.00477271405408747*a+1.53380253221734)+c*(9.61250184130688E-4*c-.00266257332283933*a+.48357088451265)+a*(-3.36197177618394E-4*a+.484791561490776),b[v++]=107.268039397724+h*(2.19927104525741E-5*h-6.40992018297945E-4*g+6.59397001245577E-4*c+4.26105652938837E-4*a-.176491792462875)+g*(-7.78269941513683E-4*g+.00130872261408275*c+7.70482631801132E-4*a-.151051492775562)+c*(.00126935368114843*c-.00265090189010898*a+.25802910206845)+a*(-3.18913117588328E-4*a-
.213742400323665),b[v++]=-20.810012546947+h*(-5.70115196973677E-4*h-2.63409051004589E-5*g+.0020741088115012*c-.00288260236853442*a+.814272968359295)+g*(-1.53496057440975E-5*g-1.32689043961446E-4*c+5.60833691242812E-4*a-.195152027534049)+c*(.00174418132927582*c-.00255243321439347*a+.116935020465145)+a*(-3.43531996510555E-4*a+.24165260232407);return b},_convertYcckToCmyk:function(b){for(var c,h,g,a=0,v=b.length;a<v;a+=4)c=b[a],h=b[a+1],g=b[a+2],b[a]=434.456-c-1.402*g,b[a+1]=119.541-c+.344*h+.714*g,
b[a+2]=481.816-c-1.772*h;return b},_convertCmykToRgb:function(b){for(var c,h,g,a,v=0,m=1/255,d=0,f=b.length;d<f;d+=4)c=b[d]*m,h=b[d+1]*m,g=b[d+2]*m,a=b[d+3]*m,b[v++]=255+c*(-4.387332384609988*c+54.48615194189176*h+18.82290502165302*g+212.25662451639585*a-285.2331026137004)+h*(1.7149763477362134*h-5.6096736904047315*g-17.873870861415444*a-5.497006427196366)+g*(-2.5217340131683033*g-21.248923337353073*a+17.5119270841813)-a*(21.86122147463605*a+189.48180835922747),b[v++]=255+c*(8.841041422036149*c+60.118027045597366*
h+6.871425592049007*g+31.159100130055922*a-79.2970844816548)+h*(-15.310361306967817*h+17.575251261109482*g+131.35250912493976*a-190.9453302588951)+g*(4.444339102852739*g+9.8632861493405*a-24.86741582555878)-a*(20.737325471181034*a+187.80453709719578),b[v++]=255+c*(.8842522430003296*c+8.078677503112928*h+30.89978309703729*g-.23883238689178934*a-14.183576799673286)+h*(10.49593273432072*h+63.02378494754052*g+50.606957656360734*a-112.23884253719248)+g*(.03296041114873217*g+115.60384449646641*a-193.58209356861505)-
a*(22.33816807309886*a+180.12613974708367);return b},getData:function(b,c,h){if(4<this.numComponents)throw new C("Unsupported color mode");b=this._getLinearizedBlockData(b,c);if(1===this.numComponents&&h){h=b.length;c=new Uint8ClampedArray(3*h);for(var g=0,a=0;a<h;a++){var v=b[a];c[g++]=v;c[g++]=v;c[g++]=v}return c}if(3===this.numComponents&&this._isColorConversionNeeded())return this._convertYccToRgb(b);if(4===this.numComponents){if(this._isColorConversionNeeded())return h?this._convertYcckToRgb(b):
this._convertYcckToCmyk(b);if(h)return this._convertCmykToRgb(b)}return b}};return H}()});
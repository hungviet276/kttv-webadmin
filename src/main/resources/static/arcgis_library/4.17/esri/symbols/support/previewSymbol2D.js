// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../core/Error ../../core/promiseUtils ../../core/screenUtils ./gfxUtils ./previewUtils ./renderUtils".split(" "),function(C,q,v,u,n,r,w,x){function y(f,b){var a=t.getContext("2d"),h=[];b&&(b.weight&&h.push(b.weight),b.size&&h.push(b.size+"px"),b.family&&h.push(b.family));a.font=h.join(" ");return a.measureText(f).width}function z(f){if(0===f.length)return 0;if(2<f.length){var b=n.px2pt(1),a=parseFloat(f);switch(f.slice(-2)){case "px":return a;case "pt":return a*b;case "in":return 72*
a*b;case "pc":return 12*a*b;case "mm":return a*A*b;case "cm":return a*B*b}}return parseFloat(f)}Object.defineProperty(q,"__esModule",{value:!0});q.previewSymbol2D=void 0;var t=document.createElement("canvas"),A=7.2/2.54,B=72/2.54;q.previewSymbol2D=function(f,b){var a=null!=(null===b||void 0===b?void 0:b.size)?n.pt2px(b.size):null,h=null!=(null===b||void 0===b?void 0:b.maxSize)?n.pt2px(b.maxSize):null,q=null!=(null===b||void 0===b?void 0:b.opacity)?b.opacity:null,t=null!=(null===b||void 0===b?void 0:
b.rotation)?b.rotation:null,c=r.getStroke(f),k={shape:null,fill:null,stroke:c};if(null===c||void 0===c?0:c.width)c.width=Math.min(c.width,80);var g=(null===c||void 0===c?void 0:c.width)||0,m=null==a?!1:null!=(null===b||void 0===b?void 0:b.scale)?null===b||void 0===b?void 0:b.scale:!0,e=0,d=0;switch(f.type){case "simple-marker":c=f.style;d=e=a=Math.min(null!=a?a:n.pt2px(f.size),h||120);switch(c){case "circle":k.shape={type:"circle",cx:0,cy:0,r:.5*a};m||(e+=g,d+=g);break;case "cross":k.shape={type:"path",
path:[{command:"M",values:[0,.5*d]},{command:"L",values:[e,.5*d]},{command:"M",values:[.5*e,0]},{command:"L",values:[.5*e,d]}]};break;case "diamond":k.shape={type:"path",path:[{command:"M",values:[0,.5*d]},{command:"L",values:[.5*e,0]},{command:"L",values:[e,.5*d]},{command:"L",values:[.5*e,d]},{command:"Z",values:[]}]};m||(e+=g,d+=g);break;case "square":k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[e,0]},{command:"L",values:[e,d]},{command:"L",values:[0,d]},{command:"Z",
values:[]}]};m||(e+=g,d+=g);break;case "triangle":k.shape={type:"path",path:[{command:"M",values:[.5*e,0]},{command:"L",values:[e,d]},{command:"L",values:[0,d]},{command:"Z",values:[]}]};m||(e+=g,d+=g);break;case "x":k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[e,d]},{command:"M",values:[e,0]},{command:"L",values:[0,d]}]};break;case "path":k.shape={type:"path",path:f.path||""},m||(e+=g,d+=g),m=!0}break;case "simple-line":a=Math.min(null!=a?a:g,h||80);c.width=a;e=22<a?
2*a:40;d=a;k.shape={type:"path",path:[{command:"M",values:[0,d]},{command:"L",values:[e,d]}]};break;case "picture-fill":case "simple-fill":d=e=Math.min(null!=a?a:22,h||120)+g;m=!0;k.shape=w.shapes.fill[0];break;case "picture-marker":var g=n.pt2px(f.width),l=n.pt2px(f.height),c=Math.max(g,l),l=g/l,g=1>=l?Math.ceil(c*l):c,l=1>=l?c:Math.ceil(c/l),e=Math.min(null!=a?a:g,h||120),d=Math.min(null!=a?a:l,h||120);k.shape={type:"image",x:-Math.round(e/2),y:-Math.round(d/2),width:e,height:d,src:f.url||""};break;
case "text":g=f.text||"Aa",c=f.font,a=Math.min(null!=a?a:n.pt2px(c.size),h||120),l=y(g,{weight:c.weight,size:a,family:c.family}),e=(h=/[\uE600-\uE6FF]/.test(g))?a:l,d=a,l=.25*z((c?a:0).toString()),h&&(l+=5),k.shape={type:"text",text:g,x:0,y:l,align:"middle",decoration:c&&c.decoration,rotated:f.rotated,kerning:f.kerning},k.font=c&&{size:a,style:c.style,decoration:c.decoration,weight:c.weight,family:c.family}}if(!k.shape)return u.reject(new v("symbolPreview: renderPreviewHTML2D","symbol not supported."));
var p=r.getFill(f),a=f.color,h=null;p&&"pattern"===p.type&&a&&"picture-fill"!==f.type?h=r.getPatternUrlWithColor(p.src,a.toCss(!0)).then(function(a){p.src=a;k.fill=p;return k}):(k.fill=p,h=u.resolve(k));return h.then(function(a){return x.renderSymbol([[a]],[e,d],{node:b&&b.node,scale:m,opacity:q,rotation:t})})}});
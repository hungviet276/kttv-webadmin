// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/screenUtils ../cim/CIMSymbolRasterizer ./cimSymbolUtils".split(" "),function(C,b,f,z,q,A){Object.defineProperty(b,"__esModule",{value:!0});b.previewCIMSymbol=void 0;var B=new q.CIMSymbolRasterizer(null,!0);b.previewCIMSymbol=function(d,a){void 0===a&&(a={});return f.__awaiter(this,void 0,void 0,function(){var l,b,u,v,w,x,r,t,e,g,m,c,y,n,p,q,h,k;return f.__generator(this,function(f){switch(f.label){case 0:return l=a.size,b=a.maxSize,u=a.feature,v=a.fieldMap,
w=a.geometryType,x=a.style,r=a.node,t=a.opacity,e=Math.min(null!=l?l:A.getCIMSymbolSize(d),null!=b?b:z.px2pt(120)),g=3,d&&d.data&&d.data.symbol&&"CIMPointSymbol"!==d.data.symbol.type&&(g=1),[4,B.rasterizeCIMSymbolAsync(d,u,v,w,{targetSize:e*g,style:x})];case 1:m=f.sent();c=document.createElement("canvas");c.width=m.imageData.width;c.height=m.imageData.height;y=c.getContext("2d");y.putImageData(m.imageData,0,0);n=c.width/g;p=c.height/g;if(q=null==l?!1:null!=(null===a||void 0===a?void 0:a.scale)?null===
a||void 0===a?void 0:a.scale:!0)h=n/p,n=1>=h?Math.ceil(e*h):e,p=1>=h?e:Math.ceil(e/h);k=new Image(n,p);k.src=c.toDataURL();null!=t&&(k.style.opacity=""+t);r&&r.appendChild(k);return[2,k]}})})}});
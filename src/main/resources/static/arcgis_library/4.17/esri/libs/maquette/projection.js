// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../widgets/support/widgetUtils"],function(M,p,E){Object.defineProperty(p,"__esModule",{value:!0});p.createProjection=p.createDom=p.initPropertiesAndChildren=p.extend=void 0;var F=[];p.extend=function(b,a){var h={};Object.keys(b).forEach(function(a){h[a]=b[a]});a&&Object.keys(a).forEach(function(b){h[b]=a[b]});return h};var A=function(b,a){return b.vnodeSelector!==a.vnodeSelector?!1:b.properties&&a.properties?b.properties.key!==a.properties.key?!1:b.properties.bind===
a.properties.bind:!b.properties&&!a.properties},G=function(b){if("string"!==typeof b)throw Error("Style values must be strings");},B=function(b,a,h,d){var k=b[a];if(""!==k.vnodeSelector){var c=k.properties;if(!(c&&(void 0===c.key?c.bind:c.key)))for(c=0;c<b.length;c++)if(c!==a&&A(b[c],k))throw Error(h.vnodeSelector+" had a "+k.vnodeSelector+" child "+("added"===d?d:"removed")+", but there is now more than one. You must add unique key properties to make them distinguishable.");}},w=[],C=!1,H=function(b){(b.children||
[]).forEach(H);b.properties&&b.properties.afterRemoved&&b.properties.afterRemoved.apply(b.properties.bind||b.properties,[b.domNode])},I=function(){C=!1;w.forEach(H);w.length=0},J=function(b){w.push(b);C||(C=!0,"undefined"!==typeof window&&"requestIdleCallback"in window?window.requestIdleCallback(I,{timeout:16}):setTimeout(I,16))},K=function(b){var a=b.domNode;if(b.properties){var h=b.properties.exitAnimation;if(h){a.style.pointerEvents="none";h(a,function(){a.parentNode&&(a.parentNode.removeChild(a),
J(b))},b.properties);return}}a.parentNode&&(a.parentNode.removeChild(a),J(b))},L=function(b,a,h){if(a)for(var d=h.eventHandlerInterceptor,k=Object.keys(a),c=k.length,m=function(e){e=k[e];var c=a[e];if("className"===e)throw Error('Property "className" is not supported, use "class".');if("class"===e)D(b,c,!0);else if("classes"===e){var g=Object.keys(c),m=g.length;for(e=0;e<m;e++){var n=g[e];c[n]&&b.classList.add(n)}}else if("styles"===e)for(g=Object.keys(c),m=g.length,e=0;e<m;e++){var n=g[e],f=c[n];
f&&(G(f),h.styleApplyer(b,n,f))}else"key"!==e&&null!==c&&void 0!==c&&(g=typeof c,"function"===g?0===e.lastIndexOf("on",0)&&(d&&(c=d(e,c,b,a)),"oninput"===e&&function(){var a=c;c=function(b){a.apply(this,[b]);b.target["oninput-value"]=b.target.value}}(),b[e]=c):"http://www.w3.org/2000/svg"===h.namespace?"href"===e?b.setAttributeNS("http://www.w3.org/1999/xlink",e,c):b.setAttribute(e,c):"string"===g&&"value"!==e?"innerHTML"===e?b[e]=E.renderingSanitizer.sanitize(c):b.setAttribute(e,c):b[e]=c)},n=0;n<
c;n++)m(n)};p.initPropertiesAndChildren=function(b,a,h){var d=a.children;if(d)for(var k=0;k<d.length;k++)p.createDom(d[k],b,void 0,h);a.text&&(b.textContent=a.text);L(b,a.properties,h);a.properties&&a.properties.afterCreate&&a.properties.afterCreate.apply(a.properties.bind||a.properties,[b,h,a.vnodeSelector,a.properties,a.children])};p.createDom=function(b,a,h,d){var k,c=0,m=b.vnodeSelector,n=a.ownerDocument;if(""===m)k=b.domNode=n.createTextNode(b.text),void 0!==h?a.insertBefore(k,h):a.appendChild(k);
else{for(var e=0;e<=m.length;++e){var r=m.charAt(e);if(e===m.length||"."===r||"#"===r)r=m.charAt(c-1),c=m.slice(c,e),"."===r?k.classList.add(c):"#"===r?k.id=c:("svg"===c&&(d=p.extend(d,{namespace:"http://www.w3.org/2000/svg"})),void 0!==d.namespace?k=b.domNode=n.createElementNS(d.namespace,c):(k=b.domNode=b.domNode||n.createElement(c),"input"===c&&b.properties&&void 0!==b.properties.type&&k.setAttribute("type",b.properties.type)),void 0!==h?a.insertBefore(k,h):k.parentNode!==a&&a.appendChild(k)),
c=e+1}p.initPropertiesAndChildren(k,b,d)}};var z,D=function(b,a,h){a&&a.split(" ").forEach(function(a){a&&b.classList.toggle(a,h)})};z=function(b,a,h){var d=b.domNode;if(b===a)return!1;var k=!1;if(""===a.vnodeSelector){if(a.text!==b.text)return b=d.ownerDocument.createTextNode(a.text),d.parentNode.replaceChild(b,d),a.domNode=b,!0;a.domNode=d}else{0===a.vnodeSelector.lastIndexOf("svg",0)&&(h=p.extend(h,{namespace:"http://www.w3.org/2000/svg"}));b.text!==a.text&&(k=!0,void 0===a.text?d.removeChild(d.firstChild):
d.textContent=a.text);a.domNode=d;var c;c=b.children;var m=a.children,n=h;if(c===m)c=!1;else{c=c||F;for(var m=m||F,e=c.length,r=m.length,g=0,x=0,t=!1;x<r;){var f=g<e?c[g]:void 0,l=m[x];if(void 0!==f&&A(f,l))t=z(f,l,n)||t,g++;else{b:{var f=c,q=l;if(""!==q.vnodeSelector)for(var u=g+1;u<f.length;u++)if(A(f[u],q)){f=u;break b}f=-1}if(0<=f){for(;g<f;g++)K(c[g]),B(c,g,a,"removed");t=z(c[f],l,n)||t;g=f+1}else p.createDom(l,d,g<e?c[g].domNode:void 0,n),l.properties&&(f=l.properties.enterAnimation)&&f(l.domNode,
l.properties),B(m,x,a,"added")}x++}if(e>g)for(;g<e;g++)K(c[g]),B(c,g,a,"removed");c=t}k=c||k;c=b.properties;m=a.properties;n=h;if(m){e=!1;r=Object.keys(m);x=r.length;for(t=0;t<x;t++)if(f=r[t],l=m[f],g=c[f],"class"===f)g!==l&&(D(d,g,!1),D(d,l,!0));else if("classes"===f)for(var q=d.classList,u=Object.keys(l),y=u.length,f=0;f<y;f++){var v=u[f],w=!!l[v];w!==!!g[v]&&(e=!0,w?q.add(v):q.remove(v))}else if("styles"===f)for(q=Object.keys(l),u=q.length,f=0;f<u;f++)y=q[f],v=l[y],v!==g[y]&&(e=!0,v?(G(v),n.styleApplyer(d,
y,v)):n.styleApplyer(d,y,""));else l||"string"!==typeof g||(l=""),"value"===f?(q=d[f],q!==l&&(d["oninput-value"]?q===d["oninput-value"]:l!==g)&&(d[f]=l,d["oninput-value"]=void 0),l!==g&&(e=!0)):l!==g&&(g=typeof l,"function"===g&&n.eventHandlerInterceptor||("http://www.w3.org/2000/svg"===n.namespace?"href"===f?d.setAttributeNS("http://www.w3.org/1999/xlink",f,l):d.setAttribute(f,l):"string"===g?"innerHTML"===f?d[f]=E.renderingSanitizer.sanitize(l):"role"===f&&""===l?d.removeAttribute(f):d.setAttribute(f,
l):d[f]!==l&&(d[f]=l),e=!0));c=e}else c=void 0;k=c||k;a.properties&&a.properties.afterUpdate&&a.properties.afterUpdate.apply(a.properties.bind||a.properties,[d,h,a.vnodeSelector,a.properties,a.children])}k&&a.properties&&a.properties.updateAnimation&&a.properties.updateAnimation(d,a.properties,b.properties);return!1};p.createProjection=function(b,a){return{getLastRender:function(){return b},update:function(h){if(b.vnodeSelector!==h.vnodeSelector)throw Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");
var d=b;b=h;z(d,h,a)},domNode:b.domNode}}});
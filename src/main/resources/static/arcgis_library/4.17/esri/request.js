// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ./config ./kernel ./core/Error ./core/global ./core/has ./core/lang ./core/maybe ./core/promiseUtils ./core/string ./core/urlUtils ./support/requestUtils @dojo/framework/shim/Promise".split(" "),function(z,ga,g,Q,t,D,w,G,L,R,E,S,h,T){function p(a,b){return g.__awaiter(this,void 0,void 0,function(){var c,d,f,e,v,l,k,m;return g.__generator(this,function(r){switch(r.label){case 0:return c=h.isDataProtocol(a),(d=h.isBlobProtocol(a))||c||(a=h.normalize(a)),f={url:a,requestOptions:g.__assign({},
R.unwrap(b))},(e=h.getInterceptor(a))?[4,U(e,f)]:[3,2];case 1:v=r.sent();if(null!=v)return[2,{data:v,getHeader:F,requestOptions:f.requestOptions,url:f.url}];e.after||e.error||(e=null);r.label=2;case 2:a=f.url;b=f.requestOptions;if("image"===b.responseType){if(G("host-webworker"))throw u("request:invalid-parameters",Error("responseType 'image' is not supported in Web Workers or Node environment"),f);}else if(c)throw u("request:invalid-parameters",Error("Data URLs are not supported for responseType \x3d "+
b.responseType),f);if("head"===b.method){if(b.body)throw u("request:invalid-parameters",Error("body parameter cannot be set when method is 'head'"),f);if(c||d)throw u("request:invalid-parameters",Error("data and blob URLs are not supported for method 'head'"),f);}return[4,V()];case 3:r.sent();if(A)return[2,A.execute(a,b)];l=E.createAbortController();E.onAbort(b,function(){return l.abort()});k={controller:l,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:e,params:f,redoRequest:!1,
useIdentity:x.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1};return[4,W(k)];case 4:return m=r.sent(),e&&e.after&&e.after(m),[2,m]}})})}function X(a){h.isBlobProtocol(a)||h.isDataProtocol(a)||(a=h.getOrigin(a))&&-1===p._corsServers.indexOf(a)&&p._corsServers.push(a)}function Y(a){a=h.getOrigin(a);return!a||S.endsWith(a,".arcgis.com")||-1!==p._corsServers.indexOf(a)||h.isTrustedServer(a)}function u(a,b,c,d){var f="Error",e={url:c.url,requestOptions:c.requestOptions,getHeader:F,ssl:!1};if(b instanceof
D)return b.details?(b.details=L.clone(b.details),b.details.url=c.url,b.details.requestOptions=c.requestOptions):b.details=e,b;if(b){c=d&&function(a){return d.headers.get(a)};var h=d&&d.status,l=b.message;l&&(f=l);c&&(e.getHeader=c);e.httpStatus=(null!=b.httpCode?b.httpCode:b.code)||h||0;e.subCode=b.subcode;e.messageCode=b.messageCode;e.messages="string"===typeof b.details?[b.details]:b.details}return E.isAbortError(b)?E.createAbortError():new D(a,f,e)}function V(){return g.__awaiter(this,void 0,void 0,
function(){var a;return g.__generator(this,function(b){switch(b.label){case 0:return G("host-webworker")?A?[3,2]:[4,new Promise(function(a,b){z(["./core/workers/request"],a,b)})]:[3,3];case 1:A=b.sent(),b.label=2;case 2:return[3,6];case 3:if(p._abortableFetch)return[3,6];if(!G("esri-abortable-fetch"))return[3,4];p._abortableFetch=w.fetch.bind(w);return[3,6];case 4:return a=p,[4,new Promise(function(a,b){z(["whatwg-fetch"],a,b)})];case 5:a._abortableFetch=b.sent().fetch,b.label=6;case 6:return[2]}})})}
function B(){return g.__awaiter(this,void 0,void 0,function(){return g.__generator(this,function(a){switch(a.label){case 0:return t.id?[3,2]:[4,new Promise(function(a,c){z(["./identity/IdentityManager"],a,c)})];case 1:a.sent(),a.label=2;case 2:return[2]}})})}function Z(a){return g.__awaiter(this,void 0,void 0,function(){var b,c,d,f,e,h,l,k;return g.__generator(this,function(m){switch(m.label){case 0:b=a.params.url;c=a.params.requestOptions;d=a.controller.signal;f=c.body;l=h=e=null;M&&"HTMLFormElement"in
w&&(f instanceof FormData?e=f:f instanceof HTMLFormElement&&(h=f,e=new FormData(h)));"string"===typeof f&&(l=f);a.fetchOptions={cache:c.cacheBust&&!p._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:c.headers||{},method:"head"===c.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:d};if(e||l)a.fetchOptions.body=e||l;"anonymous"===c.authMode&&(a.useIdentity=!1);a.hasToken=!!(/token=/i.test(b)||c.query&&c.query.token||e&&e.get&&e.get("token")||h&&h.elements.token);
if(!a.useIdentity||a.hasToken||a.credentialToken||N(b)||E.isAborted(d))return[3,11];k=void 0;return"immediate"!==c.authMode?[3,3]:[4,B()];case 1:return m.sent(),[4,t.id.getCredential(b,{signal:d})];case 2:return k=m.sent(),a.credential=k,[3,10];case 3:return"no-prompt"!==c.authMode?[3,9]:[4,B()];case 4:m.sent(),m.label=5;case 5:return m.trys.push([5,7,,8]),[4,t.id.getCredential(b,{prompt:!1,signal:d})];case 6:return k=m.sent(),a.credential=k,[3,8];case 7:return m.sent(),[3,8];case 8:return[3,10];
case 9:t.id&&(k=t.id.findCredential(b)),m.label=10;case 10:k&&(a.credentialToken=k.token,a.useSSL=!!k.ssl),m.label=11;case 11:return[2]}})})}function N(a){return aa.some(function(b){return b.test(a)})}function ba(a){return g.__awaiter(this,void 0,void 0,function(){var b,c,d,f,e,v,l,k,m,r,H,I,J,w,A,C,z,y,n,D,F,B,K;return g.__generator(this,function(q){switch(q.label){case 0:b=a.params.url;c=a.params.requestOptions;d=a.fetchOptions;f=h.isBlobProtocol(b)||h.isDataProtocol(b);e=c.responseType||"json";
v=f?0:null!=c.timeout?c.timeout:x.timeout;l=!1;if(!f){a.useSSL&&(b=h.toHTTPS(b));c.cacheBust&&"default"===d.cache&&(b=h.addQueryParameter(b,"request.preventCache",Date.now()));k=g.__assign({},c.query);a.credentialToken&&(k.token=a.credentialToken);m=h.objectToQuery(k);G("esri-url-encodes-apostrophe")&&(m=m.replace(/'/g,"%27"));r=b.length+1+m.length;H=void 0;l="post"===c.method||!!c.body||r>x.maxUrlLength;if(I=c.useProxy||!!h.getProxyRule(b))J=h.getProxyUrl(b),H=J.path,!l&&H.length+1+r>x.maxUrlLength&&
(l=!0),J.query&&(k=g.__assign(g.__assign({},J.query),k));if("HEAD"===d.method&&(l||I)){if(l){if(r>x.maxUrlLength)throw u("request:invalid-parameters",Error("URL exceeds maximum length"),a.params);throw u("request:invalid-parameters",Error("cannot use POST request when method is 'head'"),a.params);}if(I)throw u("request:invalid-parameters",Error("cannot use proxy when method is 'head'"),a.params);}l?(d.method="POST",c.body?b=h.addQueryParameters(b,k):(d.body=h.objectToQuery(k),d.headers["Content-Type"]=
"application/x-www-form-urlencoded")):b=h.addQueryParameters(b,k);I&&(a.useProxy=!0,b=H+"?"+b);k.token&&M&&d.body instanceof FormData&&(w=d.body,w.set?w.set("token",k.token):w.append("token",k.token));c.hasOwnProperty("withCredentials")?a.withCredentials=c.withCredentials:h.isTrustedServer(b)?a.withCredentials=!0:t.id&&(A=t.id.findServerInfo(b))&&A.webTierAuth&&(a.withCredentials=!0);a.withCredentials&&(d.credentials="include")}C=0;z=!1;0<v&&(C=setTimeout(function(){z=!0;a.controller.abort()},v));
q.label=1;case 1:return q.trys.push([1,18,19,20]),"image"!==c.responseType||"default"!==d.cache||"GET"!==d.method||l||ca(c.headers)||!f&&!a.useProxy&&x.proxyUrl&&!Y(b)?[3,3]:[4,O(b,a)];case 2:return n=q.sent(),[3,17];case 3:return[4,p._abortableFetch(b,d)];case 4:y=q.sent();a.useProxy||X(b);if(!y.ok||"HEAD"===d.method)return[3,17];D=e;switch(D){case "array-buffer":return[3,5];case "blob":return[3,7];case "image":return[3,7]}return[3,9];case 5:return[4,y.arrayBuffer()];case 6:return n=q.sent(),[3,
11];case 7:return[4,y.blob()];case 8:return n=q.sent(),[3,11];case 9:return[4,y.text()];case 10:return n=q.sent(),[3,11];case 11:C&&(clearTimeout(C),C=0);if("json"===e||"xml"===e||"document"===e)if(n)switch(e){case "json":n=JSON.parse(n);break;case "xml":n=P(n,"application/xml");break;case "document":n=P(n,"text/html")}else n=null;if(!n)return[3,17];if("array-buffer"!==e&&"blob"!==e)return[3,15];F=y.headers.get("Content-Type");if(!(/application\/json|text\/plain/i.test(F)&&750>=n["blob"===e?"size":
"byteLength"]))return[3,15];q.label=12;case 12:return q.trys.push([12,14,,15]),[4,(new Response(n)).json()];case 13:return B=q.sent(),B.error&&(n=B),[3,15];case 14:return q.sent(),[3,15];case 15:return"image"===e&&n instanceof Blob?[4,O(URL.createObjectURL(n),a,!0)]:[3,17];case 16:n=q.sent(),q.label=17;case 17:return[3,20];case 18:K=q.sent();if("AbortError"===K.name){if(z)throw Error("Timeout exceeded");throw E.createAbortError("Request canceled");}if(!y&&K instanceof TypeError&&x.proxyUrl&&!c.body&&
"post"!==c.method&&"head"!==c.method&&!a.useProxy)a.redoRequest=!0,h.addProxyRule({proxyUrl:x.proxyUrl,urlPrefix:h.removeFile(h.urlToObject(b).path)});else throw K;return[3,20];case 19:return C&&clearTimeout(C),[7];case 20:return[2,[y,n]]}})})}function U(a,b){return g.__awaiter(this,void 0,void 0,function(){var c,d,f;return g.__generator(this,function(e){switch(e.label){case 0:if(null!=a.responseData)return[2,a.responseData];a.headers&&(b.requestOptions.headers=g.__assign(g.__assign({},b.requestOptions.headers),
a.headers));a.query&&(b.requestOptions.query=g.__assign(g.__assign({},b.requestOptions.query),a.query));if(!a.before)return[3,5];d=c=void 0;e.label=1;case 1:return e.trys.push([1,3,,4]),[4,a.before(b)];case 2:return d=e.sent(),[3,4];case 3:return f=e.sent(),c=u("request:interceptor",f,b),[3,4];case 4:if(d instanceof Error||d instanceof D)c=u("request:interceptor",d,b);if(c)throw a.error&&a.error(c),c;return[2,d];case 5:return[2]}})})}function ca(a){if(a)for(var b=0,c=Object.getOwnPropertyNames(a);b<
c.length;b++)if(a[c[b]])return!0;return!1}function P(a,b){var c;try{c=(new DOMParser).parseFromString(a,b)}catch(d){}if(!c||c.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return c}function W(a){return g.__awaiter(this,void 0,void 0,function(){var b,c,d,f,e,v,l,k,m,r,p;return g.__generator(this,function(g){switch(g.label){case 0:return[4,Z(a)];case 1:g.sent(),g.label=2;case 2:g.trys.push([2,8,,9]),g.label=3;case 3:return[4,ba(a)];case 4:p=g.sent(),b=p[0],c=p[1],
g.label=5;case 5:return[4,da(a,b,c)];case 6:if(!g.sent())return[3,3];g.label=7;case 7:return[3,9];case 8:throw d=g.sent(),f=u("request:server",d,a.params,b),f.details.ssl=a.useSSL,a.interceptor&&a.interceptor.error&&a.interceptor.error(f),f;case 9:return e=a.params.url,/\/sharing\/rest\/(accounts|portals)\/self/i.test(e)&&!a.hasToken&&!a.credentialToken&&c&&c.user&&c.user.username&&!h.isTrustedServer(e)&&(v=h.getOrigin(e,!0))&&x.trustedServers.push(v),(l=a.credential)&&t.id&&(m=(k=t.id.findServerInfo(l.server))&&
k.owningSystemUrl)&&(m=m.replace(/\/?$/,"/sharing"),(r=t.id.findCredential(m,l.userId))&&-1===t.id._getIdenticalSvcIdx(m,r)&&r.resources.unshift(m)),[2,{data:c,getHeader:b?function(a){return b.headers.get(a)}:F,requestOptions:a.params.requestOptions,ssl:a.useSSL,url:a.params.url}]}})})}function da(a,b,c){return g.__awaiter(this,void 0,void 0,function(){var d,f,e,h,l,k,m;return g.__generator(this,function(g){switch(g.label){case 0:if(a.redoRequest)return a.redoRequest=!1,[2,!1];if(!b)return[2,!0];
if(!b.ok)throw Error("Unable to load "+b.url+" status: "+b.status);c&&c.error&&(d=L.mixin(Error(),c.error));d&&(f=Number(d.code),e=d.hasOwnProperty("subcode")?Number(d.subcode):null,h=(h=d.messageCode)&&h.toUpperCase());l=a.params.requestOptions.authMode;return 403===f&&(4===e||d.message&&-1<d.message.toLowerCase().indexOf("ssl")&&-1===d.message.toLowerCase().indexOf("permission"))?a.useSSL?[3,6]:(a.useSSL=!0,[2,!1]):[3,1];case 1:return!a.useIdentity||"no-prompt"===l&&498!==f||-1===ea.indexOf(f)||
N(a.params.url)||!(403!==f||-1===fa.indexOf(h)&&(null==e||2===e&&a.credentialToken))?[3,6]:[4,B()];case 2:g.sent(),g.label=3;case 3:return g.trys.push([3,5,,6]),[4,t.id.getCredential(a.params.url,{error:u("request:server",d,a.params),prompt:"no-prompt"!==l,signal:a.controller.signal,token:a.credentialToken})];case 4:return k=g.sent(),a.credential=k,a.credentialToken=k.token,a.useSSL=a.useSSL||k.ssl,[2,!1];case 5:m=g.sent();if("no-prompt"===l)return a.credential=null,a.credentialToken=null,[2,!1];
d=m;return[3,6];case 6:if(d)throw d;return[2,!0]}})})}function O(a,b,c){void 0===c&&(c=!1);var d=b.controller.signal,f=new Image;f.crossOrigin=b.withCredentials?"use-credentials":"anonymous";f.alt="";f.src=a;return T.loadImageAsync(f,a,c,d)}var A,x=Q.request,M="FormData"in w,ea=[499,498,403,401],fa=["COM_0056","COM_0057","SB_0008"],aa=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],F=function(){return null};p._abortableFetch=null;p._corsServers=["https://server.arcgisonline.com",
"https://services.arcgisonline.com"];return p});
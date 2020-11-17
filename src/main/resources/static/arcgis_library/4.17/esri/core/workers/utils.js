// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../has"],function(l,b,h){function f(a){return a&&"object"===typeof a&&("result"in a||"transferList"in a)}function g(a){if(!a||!a.length)return null;if(h("esri-workers-arraybuffer-transfer"))return a;a=a.filter(function(a){return!(a instanceof ArrayBuffer||a&&a.constructor&&"ArrayBuffer"===a.constructor.name)});return a.length?a:null}Object.defineProperty(b,"__esModule",{value:!0});b.receiveMessage=b.postMessage=b.toInvokeError=b.isTranferableResult=b.newJobId=b.MessageType=
void 0;var d;(function(a){a[a.HANDSHAKE=0]="HANDSHAKE";a[a.CONFIGURE=1]="CONFIGURE";a[a.CONFIGURED=2]="CONFIGURED";a[a.OPEN=3]="OPEN";a[a.OPENED=4]="OPENED";a[a.RESPONSE=5]="RESPONSE";a[a.INVOKE=6]="INVOKE";a[a.ABORT=7]="ABORT";a[a.CLOSE=8]="CLOSE";a[a.OPEN_PORT=9]="OPEN_PORT";a[a.ON=10]="ON"})(d=b.MessageType||(b.MessageType={}));var k=0;b.newJobId=function(){return k++};b.isTranferableResult=f;b.toInvokeError=function(a){return a?"string"===typeof a?JSON.stringify({name:"message",message:a}):a.toJSON?
JSON.stringify(a):JSON.stringify({name:a.name,message:a.message,details:a.details||{stack:a.stack}}):null};b.postMessage=function(a,b,e,c){b.type===d.OPEN_PORT?a.postMessage(b,[b.port]):b.type!==d.INVOKE&&b.type!==d.RESPONSE?a.postMessage(b):(f(e)?(c=g(e.transferList),b.data=e.result):(c=g(c),b.data=e),c?a.postMessage(b,c):a.postMessage(b))};b.receiveMessage=function(a){return a?(a=a.data)?"string"===typeof a?JSON.parse(a):a:null:null}});
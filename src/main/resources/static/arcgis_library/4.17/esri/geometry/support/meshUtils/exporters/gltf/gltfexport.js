// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/promiseUtils","./index"],function(k,c,g,a){Object.defineProperty(c,"__esModule",{value:!0});c.toBinaryGLTF=void 0;var h=function(){function a(a,d){this.file={type:"model/gltf-binary",data:a};this.origin=d}a.prototype.buffer=function(){return g.resolve(this.file)};a.prototype.download=function(a){var d=this;return g.create(function(){var e=new Blob([d.file.data],{type:d.file.type}),b=a;b||(b="model.glb");"glb"!==b.split(".").pop()&&(b+=".glb");if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(e,
b);else{var f=document.createElement("a"),c=URL.createObjectURL(e);f.href=c;f.download=b;document.body.appendChild(f);f.click();setTimeout(function(){document.body.removeChild(f);window.URL.revokeObjectURL(c)},0)}})};return a}();c.toBinaryGLTF=function(c,g){var d=new a.Asset,e=new a.Scene;d.addScene(e);var b=new a.Node;e.addNode(b);b.mesh=c;return a.exportGLB(d,g).then(function(b){return new h(b[a.MODEL_NAME_GLB],b.origin)})}});
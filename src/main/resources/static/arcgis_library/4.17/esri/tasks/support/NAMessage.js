// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/jsonMap ../../core/accessorSupport/decorators ./GPMessage".split(" "),function(h,k,b,f,c,g){var d=new f.default({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});return function(e){function a(a){a=e.call(this,a)||this;a.type=null;return a}b.__extends(a,e);b.__decorate([c.property({type:String,json:{read:d.read,write:d.write}})],a.prototype,"type",void 0);return a=b.__decorate([c.subclass("esri.tasks.support.NAMessage")],
a)}(g)});
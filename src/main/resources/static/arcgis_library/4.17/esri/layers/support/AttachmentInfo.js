// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ./exifUtils".split(" "),function(l,m,b,g,c,e,h){var k={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};return function(f){function a(a){a=f.call(this,a)||
this;a.contentType=null;a.exifInfo=null;a.id=null;a.globalId=null;a.keywords=null;a.name=null;a.parentGlobalId=null;a.parentObjectId=null;a.size=null;a.url=null;return a}b.__extends(a,f);d=a;Object.defineProperty(a.prototype,"orientationInfo",{get:function(){var a=h.getExifValue({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:this.exifInfo});return k[a]||null},enumerable:!1,configurable:!0});a.prototype.clone=function(){return new d({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,
globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})};var d;b.__decorate([c.property({type:String})],a.prototype,"contentType",void 0);b.__decorate([c.property()],a.prototype,"exifInfo",void 0);b.__decorate([c.property({readOnly:!0,dependsOn:["exifInfo"]})],a.prototype,"orientationInfo",null);b.__decorate([c.property({type:e.Integer})],a.prototype,"id",void 0);b.__decorate([c.property({type:String})],
a.prototype,"globalId",void 0);b.__decorate([c.property({type:String})],a.prototype,"keywords",void 0);b.__decorate([c.property({type:String})],a.prototype,"name",void 0);b.__decorate([c.property({json:{read:!1}})],a.prototype,"parentGlobalId",void 0);b.__decorate([c.property({json:{read:!1}})],a.prototype,"parentObjectId",void 0);b.__decorate([c.property({type:e.Integer})],a.prototype,"size",void 0);b.__decorate([c.property({json:{read:!1}})],a.prototype,"url",void 0);return a=d=b.__decorate([c.subclass("esri.layers.support.AttachmentInfo")],
a)}(g.JSONSupport)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(b,c,d,f,e){Object.defineProperty(c,"__esModule",{value:!0});c.FeatureIndex=void 0;b=function(c){function a(a){return c.call(this,a)||this}d.__extends(a,c);b=a;a.prototype.clone=function(){return new b({name:this.name,fields:this.fields,isAscending:this.isAscending,isUnique:this.isUnique,description:this.description})};var b;d.__decorate([e.property({constructOnly:!0})],a.prototype,"name",
void 0);d.__decorate([e.property({constructOnly:!0})],a.prototype,"fields",void 0);d.__decorate([e.property({constructOnly:!0})],a.prototype,"isAscending",void 0);d.__decorate([e.property({constructOnly:!0})],a.prototype,"isUnique",void 0);d.__decorate([e.property({constructOnly:!0})],a.prototype,"description",void 0);return a=b=d.__decorate([e.subclass("esri.layers.support.FeatureIndex")],a)}(f.JSONSupport);c.FeatureIndex=b;c.default=b});
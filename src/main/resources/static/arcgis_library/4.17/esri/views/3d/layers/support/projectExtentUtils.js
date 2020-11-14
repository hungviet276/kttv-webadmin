// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/promiseUtils","../../../../geometry/support/webMercatorUtils","../../../../portal/support/geometryServiceUtils"],function(h,a,d,f,g){Object.defineProperty(a,"__esModule",{value:!0});a.toViewIfLocal=void 0;a.toViewIfLocal=function(b){var e=b.view.spatialReference,c=b.layer.fullExtent,a=c&&c.spatialReference;return a?a.equals(e)?d.resolve(c.clone()):f.canProject(a,e)?d.resolve(f.project(c,e)):b.view.state.isLocal?g.projectGeometry(c,e,b.layer.portalItem).then(function(a){return!b.destroyed&&
a?a:void 0}).catch(function(){return null}):d.resolve(null):d.resolve(null)}});
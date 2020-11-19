// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../geometry ../../../../core/maybe ../../../../core/accessorSupport/decorators ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ./TileTree3DDebugger ../../support/projectionUtils".split(" "),function(q,f,n,r,t,p,u,v,d,w,x,h){Object.defineProperty(f,"__esModule",{value:!0});f.I3STreeDebugger=void 0;q=function(f){function m(a){return f.call(this,a)||
this}n.__extends(m,f);m.prototype.update=function(){this.clear();if(this.enabled){var f=this.lv.getVisibleNodes(),k=this.view.renderSpatialReference,g=this.nodeSR,f=f.map(function(l){var c=l.serviceObb;if(t.isNone(c))l=null;else{u.mat4.fromQuat(e,c.quaternion);d.vec3.copy(a,c.center);h.bufferToBuffer(a,g,0,a,k,0,1);e[12]=a[0];e[13]=a[1];e[14]=a[2];var b=[[],[],[]];d.vec3.copy(a,c.halfSize);d.vec3.transformMat4(a,a,e);h.bufferToBuffer(a,k,0,a,g,0,1);b[0].push([a[0],a[1]]);d.vec3.copy(a,c.halfSize);
a[0]=-a[0];d.vec3.transformMat4(a,a,e);h.bufferToBuffer(a,k,0,a,g,0,1);b[0].push([a[0],a[1]]);d.vec3.copy(a,c.halfSize);a[0]=-a[0];a[1]=-a[1];d.vec3.transformMat4(a,a,e);h.bufferToBuffer(a,k,0,a,g,0,1);b[0].push([a[0],a[1]]);d.vec3.copy(a,c.halfSize);a[1]=-a[1];d.vec3.transformMat4(a,a,e);h.bufferToBuffer(a,k,0,a,g,0,1);b[0].push([a[0],a[1]]);b[1].push(b[0][0]);b[1].push(b[0][1]);d.vec3.copy(a,c.halfSize);a[0]=-a[0];a[2]=-a[2];d.vec3.transformMat4(a,a,e);h.bufferToBuffer(a,k,0,a,g,0,1);b[1].push([a[0],
a[1]]);d.vec3.copy(a,c.halfSize);a[2]=-a[2];d.vec3.transformMat4(a,a,e);h.bufferToBuffer(a,k,0,a,g,0,1);b[1].push([a[0],a[1]]);b[2].push(b[0][0]);b[2].push(b[0][3]);d.vec3.copy(a,c.halfSize);a[1]=-a[1];a[2]=-a[2];d.vec3.transformMat4(a,a,e);h.bufferToBuffer(a,k,0,a,g,0,1);b[2].push([a[0],a[1]]);b[2].push(b[1][3]);c=new r.Polygon({rings:b,spatialReference:g});l={lij:[l.level,l.childCount],id:l.id,geometry:c}}return l}).sort(function(a,c){return a.lij[0]===c.lij[0]?a.id>c.id?-1:1:a.lij[0]-c.lij[0]});
this._update(f,function(a){return a.geometry},{getLabel:function(a){return a.lij[0]+"/"+a.id+"/"+a.lij[1]}})}};n.__decorate([p.property({constructOnly:!0})],m.prototype,"lv",void 0);n.__decorate([p.property({constructOnly:!0})],m.prototype,"nodeSR",void 0);return m=n.__decorate([p.subclass("esri.views.3d.layers.support.I3STreeDebugger")],m)}(x.TileTree3DDebugger);f.I3STreeDebugger=q;var e=v.mat4f64.create(),a=w.vec3f64.create()});
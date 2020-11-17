// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../.. ../../../../../core/mathUtils ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64".split(" "),function(x,h,r,k,l,m){Object.defineProperty(h,"__esModule",{value:!0});h.computeOrigin=h.smoothNormalsMesh=void 0;h.smoothNormalsMesh=function(g){if(g.components){for(var h=0,m=g.components;h<m.length;h++){var n=m[h];if("smooth"===n.shading&&n.faces){var a=g;a.vertexAttributes.normal||(a.vertexAttributes.normal=new Float32Array(a.vertexAttributes.position.length));
for(var r=n.faces.length/3,e=0;e<r;++e){var b=n.faces[3*e+0],c=n.faces[3*e+1],d=n.faces[3*e+2],f=l.vec3.set(u,a.vertexAttributes.position[3*b+0],a.vertexAttributes.position[3*b+1],a.vertexAttributes.position[3*b+2]),q=l.vec3.set(v,a.vertexAttributes.position[3*c+0],a.vertexAttributes.position[3*c+1],a.vertexAttributes.position[3*c+2]),t=l.vec3.set(w,a.vertexAttributes.position[3*d+0],a.vertexAttributes.position[3*d+1],a.vertexAttributes.position[3*d+2]),q=l.vec3.subtract(q,q,f),f=l.vec3.subtract(t,
t,f),f=l.vec3.cross(q,q,f);k.isNaN(a.vertexAttributes.normal[3*b+0])&&(a.vertexAttributes.normal[3*b+0]=0);k.isNaN(a.vertexAttributes.normal[3*b+1])&&(a.vertexAttributes.normal[3*b+1]=0);k.isNaN(a.vertexAttributes.normal[3*b+2])&&(a.vertexAttributes.normal[3*b+2]=0);k.isNaN(a.vertexAttributes.normal[3*c+0])&&(a.vertexAttributes.normal[3*c+0]=0);k.isNaN(a.vertexAttributes.normal[3*c+1])&&(a.vertexAttributes.normal[3*c+1]=0);k.isNaN(a.vertexAttributes.normal[3*c+2])&&(a.vertexAttributes.normal[3*c+
2]=0);k.isNaN(a.vertexAttributes.normal[3*d+0])&&(a.vertexAttributes.normal[3*d+0]=0);k.isNaN(a.vertexAttributes.normal[3*d+1])&&(a.vertexAttributes.normal[3*d+1]=0);k.isNaN(a.vertexAttributes.normal[3*d+2])&&(a.vertexAttributes.normal[3*d+2]=0);a.vertexAttributes.normal[3*b+0]+=f[0];a.vertexAttributes.normal[3*b+1]+=f[1];a.vertexAttributes.normal[3*b+2]+=f[2];a.vertexAttributes.normal[3*c+0]+=f[0];a.vertexAttributes.normal[3*c+1]+=f[1];a.vertexAttributes.normal[3*c+2]+=f[2];a.vertexAttributes.normal[3*
d+0]+=f[0];a.vertexAttributes.normal[3*d+1]+=f[1];a.vertexAttributes.normal[3*d+2]+=f[2]}for(e=0;e<a.vertexAttributes.normal.length;e+=3)l.vec3.set(p,a.vertexAttributes.normal[e],a.vertexAttributes.normal[e+1],a.vertexAttributes.normal[e+2]),l.vec3.normalize(p,p),a.vertexAttributes.normal[e+0]=p[0],a.vertexAttributes.normal[e+1]=p[1],a.vertexAttributes.normal[e+2]=p[2]}}g.vertexAttributesChanged()}};h.computeOrigin=function(g){return new r.Point({x:g.extent.xmax-g.extent.width/2,y:g.extent.ymax-g.extent.height/
2,z:g.extent.zmin,spatialReference:g.extent.spatialReference})};var u=m.vec3f64.create(),v=m.vec3f64.create(),w=m.vec3f64.create(),p=m.vec3f64.create()});
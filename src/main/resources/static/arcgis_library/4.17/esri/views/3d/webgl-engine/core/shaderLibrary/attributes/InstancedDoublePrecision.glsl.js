// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/libs/gl-matrix-2/vec3f64 ../util/DoublePrecision.glsl ../../shaderModules/interfaces ../../../lib/doublePrecisionUtils".split(" "),function(x,e,c,g,v,d,w){function h(a,b){b.instanced&&b.instancedDoublePrecision&&(a.attributes.add("modelOriginHi","vec3"),a.attributes.add("modelOriginLo","vec3"),a.attributes.add("model","mat3"),a.attributes.add("modelNormal","mat3"));b.instancedDoublePrecision&&(a.vertex.include(v.DoublePrecision,b),a.vertex.uniforms.add("viewOriginHi",
"vec3"),a.vertex.uniforms.add("viewOriginLo","vec3"));var f=[d.glsl(k||(k=c.__makeTemplateObject(["\n    vec3 calculateVPos() {\n      ","\n    }\n    "],["\n    vec3 calculateVPos() {\n      ","\n    }\n    "])),b.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"),d.glsl(l||(l=c.__makeTemplateObject(["\n    vec3 subtractOrigin(vec3 _pos) {\n      ","\n    }\n    "],["\n    vec3 subtractOrigin(vec3 _pos) {\n      ","\n    }\n    "])),b.instancedDoublePrecision?
d.glsl(m||(m=c.__makeTemplateObject(["\n          vec3 originDelta \x3d dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);\n          return _pos - originDelta;"],["\n          vec3 originDelta \x3d dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);\n          return _pos - originDelta;"]))):"return vpos;"),d.glsl(n||(n=c.__makeTemplateObject(["\n    vec3 dpNormal(vec4 _normal) {\n      ","\n    }\n    "],["\n    vec3 dpNormal(vec4 _normal) {\n      ","\n    }\n    "])),
b.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"),d.glsl(p||(p=c.__makeTemplateObject(["\n    vec3 dpNormalView(vec4 _normal) {\n      ","\n    }\n    "],["\n    vec3 dpNormalView(vec4 _normal) {\n      ","\n    }\n    "])),b.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"),b.vertexTangets?d.glsl(q||(q=c.__makeTemplateObject(["\n    vec4 dpTransformVertexTangent(vec4 _tangent) {\n      ",
"\n\n    }\n    "],["\n    vec4 dpTransformVertexTangent(vec4 _tangent) {\n      ","\n\n    }\n    "])),b.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"):d.glsl(r||(r=c.__makeTemplateObject([""],[""])))];a.vertex.code.add(f[0]);a.vertex.code.add(f[1]);a.vertex.code.add(f[2]);2===b.output&&a.vertex.code.add(f[3]);a.vertex.code.add(f[4])}Object.defineProperty(e,"__esModule",{value:!0});e.InstancedDoublePrecision=void 0;e.InstancedDoublePrecision=h;
(function(a){var b=function(){return function(){}}();a.Uniforms=b;a.bindCustomOrigin=function(a,b){w.encodeDoubleArraySplit(b,t,u,3);a.setUniform3fv("viewOriginHi",t);a.setUniform3fv("viewOriginLo",u)}})(h=e.InstancedDoublePrecision||(e.InstancedDoublePrecision={}));var t=g.vec3f64.create(),u=g.vec3f64.create(),k,m,l,n,p,q,r});
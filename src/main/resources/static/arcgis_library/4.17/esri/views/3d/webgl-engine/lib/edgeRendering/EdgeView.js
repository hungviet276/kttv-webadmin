// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/arrayUtils ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../core/typedArrayUtil ../../../../../core/workers ../../../../../core/libs/gl-matrix-2/mat3 ../../../../../core/libs/gl-matrix-2/mat3f64 ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../support/buffer/utils ../../core/shaderLibrary/attributes/VertexPosition.glsl ../../core/util/TwoVectorPosition ../GridLocalOriginFactory ../localOriginHelper ../LocalOriginManager ../Object3D ./bufferLayouts ./edgeBufferWriters ./EdgeProcessingWorker ./EdgeRenderer ./strokes ./util ../TextureBackedBuffer/BufferManager ../../../../webgl/BufferObject ../../../../webgl/VertexArrayObject".split(" "),
function(K,E,m,Q,L,u,F,R,S,G,M,T,N,C,H,U,V,W,X,Y,Z,aa,y,O,ba,z,ca,v,da,I,P){function ea(d){for(var a=null,b=null,c=0;c<d.geometries.length;c++){var e=d.geometryRecords[c];if(e.material.supportsEdges){if(!a)a=e.transformation;else if(!Q.equals(a,e.transformation))return!1;if(!b&&e.origin)b=e;else if(b&&e.origin&&b.origin.id!==e.origin.id)return!1}}return!0}Object.defineProperty(E,"__esModule",{value:!0});E.EdgeView=void 0;K=function(){function d(a,b,c){var e=this;this.rctx=a;this.techniqueRepository=
b;this.callbacks=c;this.profilingCallback=null;this.perObjectData=new Map;this.renderers=new Map;this.localOrigins=new Z.LocalOriginManager(new X);this.gpuMemoryUsage=this.numberOfRenderedEdges=0;this.worker=new ba;this.destroyed=!1;this.tmpModelPosition=H.vec3f64.create();this.tmpCameraPosition=H.vec3f64.create();this.componentColorManager=new da.BufferManager(this.rctx,2);S.open("EdgeProcessingWorker").then(function(a){e.destroyed?a.close():e.workerThread=a});a=y.VertexLayout.createBuffer(4);for(b=
0;4>b;b++)a.sideness.set(b,0,0===b||3===b?0:1),a.sideness.set(b,1,0===b||1===b?0:1);this.verticesBufferObject=I.createVertex(this.rctx,35044,a.buffer)}d.prototype.destroy=function(){var a=this;this.destroyed||(this.perObjectData.forEach(function(b,c){a.perObjectData.delete(c);b.renderables.forEach(function(b){a.removeRenderable(b)})}),this.strokesTexture=u.disposeMaybe(this.strokesTexture),this.componentColorManager=u.destroyMaybe(this.componentColorManager),this.workerThread=u.destroyMaybe(this.workerThread),
this.verticesBufferObject=u.disposeMaybe(this.verticesBufferObject),this.perObjectData.clear(),this.renderers.clear(),this.destroyed=!0)};d.prototype.getUsedMemory=function(){return this.gpuMemoryUsage};Object.defineProperty(d.prototype,"numberOfRenderedPrimitives",{get:function(){return this.numberOfRenderedEdges},enumerable:!1,configurable:!0});d.prototype.shouldRender=function(){return 0<this.renderers.size};d.prototype.addComponentObject=function(a,b,c,e,f,l,q,n){return m.__awaiter(this,void 0,
void 0,function(){var h,k;return m.__generator(this,function(g){switch(g.label){case 0:if(this.hasObject(a))return[2];k={loaded:F.create(function(a){return h=a}),renderables:[],center:c};this.perObjectData.set(a,k);return[4,this.addComponentGeometry(b,k,e,f,l,q,n)];case 1:return g.sent(),this.callbacks.setNeedsRender(),h(),[2]}})})};d.prototype.addOrUpdateObject=function(a,b,c,e,f){return m.__awaiter(this,void 0,void 0,function(){var l,q,n,h,k,g,w,p,d=this;return m.__generator(this,function(m){switch(m.label){case 0:l=
[];n={loaded:F.create(function(a){return q=a}),renderables:[]};h=this.perObjectData.get(a);this.perObjectData.set(a,n);if(f&&f.mergeGeometries&&1<a.geometries.length&&ea(a))l.push(this.addObjectMergedGeometries(a,n,b,c));else for(k=0;k<a.geometries.length;k++)g=a.geometries[k],w=a.geometryRecords[k],p=w.material,p.supportsEdges&&l.push(this.addGeometryData(a,n,g.data,w,b[0],c,e));return[4,F.all(l)];case 1:return m.sent(),h&&h.loaded.then(function(){h.renderables.forEach(function(a){return d.removeRenderable(a)});
d.callbacks.setNeedsRender()}),this.callbacks.setNeedsRender(),q(),[2]}})})};d.prototype.hasObject=function(a){return this.perObjectData.has(a)};d.prototype.updateAllComponentOpacities=function(a,b){return m.__awaiter(this,void 0,void 0,function(){var c,e,f=this;return m.__generator(this,function(l){switch(l.label){case 0:return c=b instanceof Array?function(a){return b[a]}:function(){return b},[4,this.getObjectEntry(a)];case 1:return e=l.sent(),e.renderables.forEach(function(a){for(var b=a.components.meta.length,
e=0;e<b;e++){var l=c(e),g=a.components.meta[e],d=g.index;g.material.opacity=l;a.components.buffer.textureBuffer.setDataElement(d,1,3,255*l)}f.updateTransparency(a)}),this.callbacks.setNeedsRender(),[2]}})})};d.prototype.updateAllComponentMaterials=function(a,b,c,e){return m.__awaiter(this,void 0,void 0,function(){var f,l,d,n,h,k=this;return m.__generator(this,function(g){switch(g.label){case 0:return f=a instanceof aa,l=!!c.slicePlaneEnabled,d=v.determineRendererType(b),n=z.EdgeRenderer.getKey(d,
l,f),[4,this.getObjectEntry(a)];case 1:return h=g.sent(),h.renderables.forEach(function(a){if(n!==a.rendererKey){var c=k.renderers.get(a.rendererKey),g=k.acquireRenderer(d,l,f);c.removeRenderable(a);c.refCount.decrement();a.rendererKey=n;g.addRenderable(a)}for(c=0;c<b.length;c++)a.components.meta[c].material=b[c];e&&k.updateComponentBuffer(a.components);k.updateTransparency(a)}),this.callbacks.setNeedsRender(),[2]}})})};d.prototype.updateObjectVisibility=function(a,b){return m.__awaiter(this,void 0,
void 0,function(){var c;return m.__generator(this,function(e){switch(e.label){case 0:return[4,this.getObjectEntry(a)];case 1:return c=e.sent(),c.renderables.forEach(function(a){return a.visible=b}),this.callbacks.setNeedsRender(),[2]}})})};d.prototype.removeObject=function(a){var b=this,c=this.perObjectData.get(a);c&&(this.perObjectData.delete(a),c.loaded.then(function(){c.renderables.forEach(function(a){return b.removeRenderable(a)});b.callbacks.setNeedsRender()}))};d.prototype.getObjectEntry=function(a){return m.__awaiter(this,
void 0,void 0,function(){var b;return m.__generator(this,function(c){switch(c.label){case 0:b=this.perObjectData.get(a);if(!b)throw"no object";return[4,b.loaded];case 1:return c.sent(),[2,b]}})})};d.prototype.removeAll=function(){var a=this;this.perObjectData.forEach(function(b,c){a.removeObject(c)})};d.prototype.render=function(a,b){var c=this;if(!u.isNone(this.componentColorManager)){this.localOrigins.updateViewMatrices(a.camera.viewMatrix);var e=a.camera.viewInverseTransposeMatrix,f=H.vec3f64.create(),
l=new W.TwoVectorPosition,d=new V.VertexPosition.ViewProjectionTransform,n=M.mat3f64.create();C.vec3.set(f,e[3],e[7],e[11]);l.set(f);C.vec3.copy(d.worldFromView_TH,l.high);C.vec3.copy(d.worldFromView_TL,l.low);G.mat3.fromMat4(d.viewFromCameraRelative_RS,a.camera.viewMatrix);T.mat4.copy(d.projFromView,a.camera.projectionMatrix);e=M.mat3f64.create();G.mat3.transpose(e,d.viewFromCameraRelative_RS);G.mat3.invert(n,e);this.renderers.forEach(function(a){0===a.refCount.value&&(c.renderers.delete(a.key),
a.dispose())});this.componentColorManager.garbageCollect();this.componentColorManager.updateTextures();var h=0,k=0;this.renderers.forEach(function(a){return a.forEachRenderable(function(a){h+=a.statistics.averageEdgeLength;k++},b)});if(0!==k){var e=40*h/k,f=v.estimateLengthAtDistance(a.camera.fullViewport[3],a.camera.fovY,1,3.5*a.camera.pixelRatio),g={distanceFalloffFactor:e,minimumEdgeLength:f,transparency:b,viewProjectionTransform:d,transformNormal_ViewFromGlobal:n};this.updateObjectCameraDistances(a);
this.numberOfRenderedEdges=0;this.renderers.forEach(function(b){c.renderRegularEdges(b,a,g);c.renderSilhouetteEdges(b,a,g)})}}};d.prototype.updateTransparency=function(a){var b=v.determineEdgeTransparency(a.components.meta),c=v.determineObjectTransparency(a.components.meta);if(b!==a.edgeTransparency||c!==a.objectTransparency)a.edgeTransparency=b,a.objectTransparency=c,this.renderers.get(a.rendererKey).setRenderablesDirty()};d.prototype.computeModelTransformWithLocalOrigin=function(a,b,c){a.getCombinedStaticTransformation(b,
c);b.origin?this.localOrigins.register(b.origin):(a=C.vec3.set(this.tmpModelPosition,c[12],c[13],c[14]),b.origin=this.localOrigins.acquire(a));Y.applyToModelMatrix(b.origin.vec3,c);return c};d.prototype.updateComponentBuffer=function(a){var b=a.meta;a=a.buffer;for(var c=0;c<b.length;c++){var e=b[c].material,f=b[c].index,d=L.clamp(Math.round(e.size*z.LINE_WIDTH_FRACTION_FACTOR),0,255),m=L.clamp(e.extensionLength,-z.EXTENSION_LENGTH_OFFSET,255-z.EXTENSION_LENGTH_OFFSET)+z.EXTENSION_LENGTH_OFFSET,n=
"solid"===e.type?0:1,h=255*e.opacity,e=e.color;a.textureBuffer.setData(f,0,255*e[0],255*e[1],255*e[2],255*e[3]);a.textureBuffer.setData(f,1,d,m,n,h)}};d.prototype.createComponentBuffers=function(a){if(u.isNone(this.componentColorManager))return null;for(var b=[],c=this.componentColorManager.getBuffer(a.length),e=0;e<a.length;e++){var f=a[e],d=c.acquireIndex();b.push({index:d,material:f})}a={meta:b,buffer:c};this.updateComponentBuffer(a);return a};d.prototype.extractEdges=function(a,b,c,e,f){return this.worker.process({data:b,
originalIndices:f,writerSettings:a,skipDeduplicate:c},e?null:this.workerThread)};d.prototype.createEdgeResources=function(a){var b={};if(u.isNone(this.verticesBufferObject))return b;if(0<a.regular.lodInfo.lengths.length){var c=new P(this.rctx,y.EdgeShaderAttributeLocations,{vertices:y.glVertexLayout,instances:O.RegularEdgeBufferWriter.glLayout},{vertices:this.verticesBufferObject,instances:I.createVertex(this.rctx,35044,a.regular.instancesData.buffer)});b.regular={vao:c,lod:a.regular.lodInfo}}0<a.silhouette.lodInfo.lengths.length&&
(c=new P(this.rctx,y.EdgeShaderAttributeLocations,{vertices:y.glVertexLayout,instances:O.SilhouetteEdgeBufferWriter.glLayout},{vertices:this.verticesBufferObject,instances:I.createVertex(this.rctx,35044,a.silhouette.instancesData.buffer)}),b.silhouette={vao:c,lod:a.silhouette.lodInfo});return b};d.prototype.addGeometryData=function(a,b,c,e,f,d,q){return m.__awaiter(this,void 0,void 0,function(){var l,h,k,g;return m.__generator(this,function(n){l=c.getAttribute("position");h=this.computeModelTransformWithLocalOrigin(a,
e,N.mat4f64.create());k=e.origin;g={position:l,indices:c.getIndices("position"),modelTransform:h,origin:k};return[2,this.addPositionData(b,g,f,d,q)]})})};d.prototype.addPositionData=function(a,b,c,e,f){void 0===f&&(f=!1);return m.__awaiter(this,void 0,void 0,function(){var d,q,n,h,k,g,w,p,t,x,D,A,r,J,B;return m.__generator(this,function(l){switch(l.label){case 0:d=this.createComponentBuffers([c]);if(u.isNone(d))return[2];q=this.acquireRenderer(c.type,!!e.slicePlaneEnabled);n=b.modelTransform;h=b.origin;
k=b.indices;g=b.position;w=g.data.length/g.strideIdx;p=y.EdgeInputBufferLayout.createBuffer(w);for(t=0;t<w;t++)p.position.set(t,0,g.data[g.offsetIdx+t*g.strideIdx+0]),p.position.set(t,1,g.data[g.offsetIdx+t*g.strideIdx+1]),p.position.set(t,2,g.data[g.offsetIdx+t*g.strideIdx+2]);v.fillComponenBufferIndices(d.meta,[0,p.componentIndex.count],p.componentIndex);return[4,this.extractEdges(q.writerSettings,p,!1,f,k)];case 1:return x=l.sent(),D=this.createEdgeResources(x),A=D.regular,r=D.silhouette,J=(A?
A.vao.size:0)+(r?r.vao.size:0),B={regular:A,silhouette:r,transform:{modelMatrix:n,origin:h},statistics:{gpuMemoryUsage:J,averageEdgeLength:x.averageEdgeLength},components:d,visible:!0,edgeTransparency:v.determineEdgeTransparency(d.meta),objectTransparency:v.determineObjectTransparency(d.meta),distanceToCamera:0,rendererKey:q.key},a.renderables.push(B),q.addRenderable(B),this.gpuMemoryUsage+=J,[2]}})})};d.prototype.addComponentGeometry=function(a,b,c,e,d,l,q){return m.__awaiter(this,void 0,void 0,
function(){var f,h,k,g,w,p,t,x,D,A,r;return m.__generator(this,function(m){switch(m.label){case 0:f=this.createComponentBuffers(l);if(u.isNone(f))return[2];h=v.determineRendererType(l);k=this.acquireRenderer(h,q.slicePlaneEnabled||!1,!1);g=y.EdgeInputBufferLayout.createBuffer(c.count);U.vec3.copy(g.position,c);v.fillComponenBufferIndices(f.meta,d,g.componentIndex,e);w=k.writerSettings;return[4,this.extractEdges(w,g,!0,!1,e)];case 1:return p=m.sent(),t=this.createEdgeResources(p),x=t.regular,D=t.silhouette,
A=(x?x.vao.size:0)+(D?D.vao.size:0),r={regular:x,silhouette:D,transform:a,statistics:{gpuMemoryUsage:A,averageEdgeLength:p.averageEdgeLength},components:f,visible:!0,edgeTransparency:v.determineEdgeTransparency(f.meta),objectTransparency:v.determineObjectTransparency(f.meta),distanceToCamera:0,rendererKey:k.key},b.renderables.push(r),k.addRenderable(r),this.gpuMemoryUsage+=A,[2]}})})};d.prototype.addObjectMergedGeometries=function(a,b,c,e){return m.__awaiter(this,void 0,void 0,function(){var d,l,
q,n,h,k,g,w,p,t,x,v,A,r,u,B,y,z,C,E,F;return m.__generator(this,function(f){switch(f.label){case 0:d=new Map;l=0;n=q=null;for(h=0;h<a.geometries.length;h++)if(k=a.geometries[h],g=a.geometryRecords[h],w=g.material,w.supportsEdges&&(!n&&g.origin&&(n=g),p=k.data.getIndices("position"),l+=p?p.length:0,p&&null==q||q===Uint16Array))q=R.isUint16Array(p)?Uint16Array:Uint32Array;t=l?new q(l):null;x=[];for(h=v=0;h<a.geometries.length;h++)if(k=a.geometries[h],A=a.geometryRecords[h],w=A.material,w.supportsEdges){r=
k.data.getAttribute("position");p=k.data.getIndices("position");u=d.get(r.data);if(null==u){u=x.length/3;for(B=r.offsetIdx;B<r.data.length;B+=r.strideIdx)x.push(r.data[B+0]),x.push(r.data[B+1]),x.push(r.data[B+2]);d.set(r.data,u)}if(p)for(y=0;y<p.length;y++)t[v++]=u+p[y]}z=n||a.geometryRecords[0];C=this.computeModelTransformWithLocalOrigin(a,z,N.mat4f64.create());E=z.origin;for(h=0;h<a.geometryRecords.length;h++)a.geometryRecords[h].origin=E;F={position:{data:x,offsetIdx:0,strideIdx:3},indices:t,
modelTransform:C,origin:E};return[4,this.addPositionData(b,F,c[0],e)];case 1:return f.sent(),[2]}})})};d.prototype.acquireRenderer=function(a,b,c){void 0===c&&(c=!0);var e=z.EdgeRenderer.getKey(a,b,c),d=this.renderers.get(e);u.isNone(this.strokesTexture)&&(this.strokesTexture=ca.generateStrokesTexture(this.rctx));d||(d=new z.EdgeRenderer(this.rctx,this.techniqueRepository,{type:a,slicePlaneEnabled:b,strokesTexture:this.strokesTexture,legacy:c}),this.renderers.set(e,d));d.refCount.increment();return d};
d.prototype.removeRenderable=function(a){var b=this.renderers.get(a.rendererKey);if(b){b.removeRenderable(a);b.refCount.decrement();a.regular&&(a.regular.vao.vertexBuffers.instances.dispose(),a.regular.vao.dispose(!1),a.regular.vao=null);a.silhouette&&(a.silhouette.vao.vertexBuffers.instances.dispose(),a.silhouette.vao.dispose(!1),a.silhouette.vao=null);"origin"in a.transform&&this.localOrigins.release(a.transform.origin);this.gpuMemoryUsage-=a.statistics.gpuMemoryUsage;for(var b=0,c=a.components.meta;b<
c.length;b++)a.components.buffer.releaseIndex(c[b].index)}};d.prototype.updateObjectCameraDistances=function(a){var b=this;a=a.camera.viewInverseTransposeMatrix;C.vec3.set(this.tmpCameraPosition,a[3],a[7],a[11]);this.perObjectData.forEach(function(a,e){e="getCenter"in e?e.getCenter():a.center;var c=C.vec3.distance(e,b.tmpCameraPosition);a.renderables.forEach(function(a){return a.distanceToCamera=c})})};d.prototype.renderRegularEdges=function(a,b,c){var e=this;a.bindRegularEdges(b,c);a.forEachRenderable(function(d){if(d.visible&&
d.regular){var f=v.computeEdgeCount(d.regular.lod.lengths,d.distanceToCamera,c);"origin"in d.transform&&(b.localViewMatrixForEdges=e.localOrigins.getViewMatrix(d.transform.origin));a.renderRegularEdges(d,b,f);e.numberOfRenderedEdges+=f}},c.transparency)};d.prototype.renderSilhouetteEdges=function(a,b,c){var d=this;a.bindSilhouetteEdges(b,c);a.forEachRenderable(function(e){if(e.visible&&e.silhouette){var f=v.computeEdgeCount(e.silhouette.lod.lengths,e.distanceToCamera,c);"origin"in e.transform&&(b.localViewMatrixForEdges=
d.localOrigins.getViewMatrix(e.transform.origin));a.renderSilhouetteEdges(e,b,f);d.numberOfRenderedEdges+=f}},c.transparency)};return d}();E.EdgeView=K});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/maybe ../../../../../core/libs/gl-matrix-2/mat3f32 ../../../../../core/libs/gl-matrix-2/vec4f32 ../definitions ../enums ../number ./WGLBrush".split(" "),function(t,m,C,y,D,z,v,w,E,F){Object.defineProperty(m,"__esModule",{value:!0});m.WGLBrushVTLFill=void 0;var A=1/65536,B=[1,1,1,1];t=function(m){function n(){var a=null!==m&&m.apply(this,arguments)||this;a._color=z.vec4f32.create();a._outlineColor=z.vec4f32.create();a._fillProgramOptions={id:!1,dd:!1,
pattern:!1};a._outlineProgramOptions={id:!1,dd:!1};a._patternMatrix=D.mat3f32.create();return a}C.__extends(n,m);n.prototype.dispose=function(){};n.prototype.drawMany=function(a,u){var c=a.displayLevel,q=a.drawPhase,e=a.renderPass,f=a.styleLayerId,d=a.styleLayer,k=d.getPaintValue("fill-pattern",c),g=d.hasDataDrivenColor?B:d.getPaintValue("fill-color",c),h=d.hasDataDrivenOpacity?1:d.getPaintValue("fill-opacity",c),l=h*g[3],b=void 0!==k||1>l||d.hasDataDrivenFill;if(!b||"opaque"!==e){this._color[0]=
l*g[0];this._color[1]=l*g[1];this._color[2]=l*g[2];this._color[3]=l;var p;q===w.WGLDrawPhase.HITTEST&&(p=E.u32to4Xu8(f+1));q=d.getPaintValue("fill-translate",c);c=d.getPaintValue("fill-translate-anchor",c);this._drawFill(a,f,d,u,q,c,k,b,p);this._drawOutline(a,f,d,u,q,c,k,p,h)}};n.prototype._drawFill=function(a,u,c,q,e,f,d,k,g){var h=a.context,l=a.displayLevel,b=a.drawPhase,p=a.renderPass,m=a.spriteMosaic,n=a.state;if(k||"translucent"!==p){k=void 0!==d;var p=a.pixelRatio>v.VTL_HIGH_RES_CUTOFF?2:1,
t=c.hasDataDrivenFill;a=a.painter.getVectorTileProgramCach();var r,x=b===w.WGLDrawPhase.HITTEST,b=this._fillProgramOptions;b.id=x;b.dd=t;b.pattern=k;b=a.getProgram(1,(x?1:0)<<2|(t?1:0)<<1|(k?1:0),b);h.bindProgram(b);if(k){r=m.getMosaicItemPosition(d,!0);if(!r){h.bindProgram();return}b.setUniform2f("u_pattern_tl",r.tl[0],r.tl[1]);b.setUniform2f("u_pattern_br",r.br[0],r.br[1]);b.setUniform1i("u_texture",v.VTL_TEXTURE_BINDING_UNIT_SPRITES);m.bind(h,9729,r.page,v.VTL_TEXTURE_BINDING_UNIT_SPRITES)}b.setUniformMatrix3fv("u_displayMat3",
1===f?n.displayMat3:n.displayViewMat3);b.setUniform2fv("u_fillTranslation",e);b.setUniform1f("u_depth",c.z+A);b.setUniform4fv("u_color",this._color);x&&b.setUniform4fv("u_id",g);for(c=0;c<q.length;c++)e=q[c],e.layerData[u]&&(f=e.layerData[u],f.prepareForRendering(h,a),d=f.fillVertexArrayObject,y.isNone(d)||(h.bindVAO(d),b.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),k&&(d=e.coordRange[0]/(p*e.size[0]*Math.max(Math.pow(2,Math.round(l)-e.key.level),1)),g=1/(r.size[1]*d),this._patternMatrix[0]=
1/(r.size[0]*d),this._patternMatrix[4]=g,b.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)),h.setStencilFunction(514,e.stencilRef,255),h.drawElements(4,f.fillIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*f.fillIndexStart),e.triangleCount+=f.fillIndexCount/3))}};n.prototype._drawOutline=function(a,m,c,q,e,f,d,k,g){var h=a.context,l=a.displayLevel,b=a.drawPhase,p=a.pixelRatio,n=a.state;if("opaque"!==a.renderPass&&(d=void 0!==d,c.getPaintValue("fill-antialias",l)&&!d||c.hasDataDrivenOutlineColor)){a=
a.painter.getVectorTileProgramCach();d=c.hasDataDrivenOutline;if(c.outlineUsesFillColor){if(1!==this._color[3])return;this._outlineColor[0]=this._color[0];this._outlineColor[1]=this._color[1];this._outlineColor[2]=this._color[2];this._outlineColor[3]=this._color[3]}else l=c.hasDataDrivenOutlineColor?B:c.getPaintValue("fill-outline-color",l),g*=l[3],this._outlineColor[0]=g*l[0],this._outlineColor[1]=g*l[1],this._outlineColor[2]=g*l[2],this._outlineColor[3]=g;p=.75/p;g=b===w.WGLDrawPhase.HITTEST;b=
this._outlineProgramOptions;b.id=g;b.dd=d;b=a.getProgram(2,(g?1:0)<<1|(d?1:0),b);h.bindProgram(b);b.setUniformMatrix3fv("u_displayMat3",1===f?n.displayMat3:n.displayViewMat3);b.setUniform2fv("u_fillTranslation",e);b.setUniform1f("u_depth",c.z+A);b.setUniform1f("u_outline_width",p);b.setUniform4fv("u_color",this._outlineColor);g&&b.setUniform4fv("u_id",k);for(c=0;c<q.length;c++)e=q[c],e.layerData[m]&&(f=e.layerData[m],f.prepareForRendering(h,a),k=f.outlineVertexArrayObject,y.isNone(k)||(h.bindVAO(k),
b.setUniformMatrix3fv("u_dvsMat3",e.transforms.dvs),h.setStencilFunction(514,e.stencilRef,255),h.drawElements(4,f.outlineIndexCount,5125,Uint32Array.BYTES_PER_ELEMENT*f.outlineIndexStart),e.triangleCount+=f.outlineIndexCount/3))}};return n}(F.default);m.WGLBrushVTLFill=t});
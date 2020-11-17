// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../webgl"],function(k,b,h){Object.defineProperty(b,"__esModule",{value:!0});b.setTextures=b.setUniforms=b.getUniformLocationInfos=b.getShadedReliefUniforms=b.getStretchUniforms=b.getBasicGridUniforms=b.getColormapUniforms=b.getCommonUniforms=b.createColormapTexture=b.createTransformTexture=b.createFrameBuffer=b.createRasterTexture=void 0;b.createRasterTexture=function(a,f,b,c){void 0===b&&(b="nearest");void 0===c&&(c=!1);var e=!(c&&"u8"===f.pixelType);c=e?5126:5121;e=
null==f.pixels||0===f.pixels.length?null:e?f.getAsRGBAFloat():f.getAsRGBA();return new h.Texture(a,{width:f.width,height:f.height,target:3553,pixelFormat:6408,internalFormat:6408,samplingMode:"bilinear"===b||"cubic"===b?9729:9728,dataType:c,wrapMode:33071,flipped:!1},e)};b.createFrameBuffer=function(a,f,b,c){c=new h.Texture(a,{width:f,height:b,target:3553,pixelFormat:6408,internalFormat:6408,samplingMode:9728,dataType:c?5121:5126,wrapMode:33071,flipped:!1});return new h.FramebufferObject(a,{colorTarget:0,
depthStencilTarget:3,width:f,height:b},c)};b.createTransformTexture=function(a,f){for(var b=4*f.size[0],c=f.size[1],e={width:b,height:c,target:3553,pixelFormat:6408,internalFormat:6408,dataType:5126,samplingMode:9728,wrapMode:33071,flipped:!1},b=new Float32Array(b*c*4),d=c=0;d<f.coefficients.length;d++)b[c++]=f.coefficients[d],2===d%3&&(b[c++]=1);return new h.Texture(a,e,b)};b.createColormapTexture=function(a,b){return new h.Texture(a,{width:b.length/4,height:1,target:3553,pixelFormat:6408,internalFormat:6408,
dataType:5121,samplingMode:9728,wrapMode:33071,flipped:!1},b)};b.getCommonUniforms=function(a,b,g,c,e,d){void 0===c&&(c=1);void 0===e&&(e=!0);void 0===d&&(d=!1);return{u_flipY:e,u_isFloatTexture:d,u_applyTransform:a?!0:!1,u_opacity:c,u_transformSpacing:a?a.spacing:null,u_transformGridSize:a?a.size:null,u_targetImageSize:b,u_srcImageSize:g}};b.getColormapUniforms=function(a,b){return{u_colormapOffset:b||0,u_colormapMaxIndex:a?a.length/4-1:null}};b.getBasicGridUniforms=function(a,b){return{u_scale:a,
u_offset:b}};b.getStretchUniforms=function(a){return{u_bandCount:a.bandCount,u_minOutput:a.outMin,u_maxOutput:a.outMax,u_minCutOff:a.minCutOff,u_maxCutOff:a.maxCutOff,u_factor:a.factor,u_useGamma:a.useGamma,u_gamma:a.gamma,u_gammaCorrection:a.gammaCorrection}};b.getShadedReliefUniforms=function(a){return{u_hillshadeType:a.hillshadeType,u_sinZcosAs:a.sinZcosAs,u_sinZsinAs:a.sinZsinAs,u_cosZs:a.cosZs,u_weights:a.weights,u_factor:a.factor,u_minValue:a.minValue,u_maxValue:a.maxValue}};b.getUniformLocationInfos=
function(a,b){a=a.gl;b=b.glName;for(var f=a.getProgramParameter(b,a.ACTIVE_UNIFORMS),c=new Map,e,d=0;d<f;d++)(e=a.getActiveUniform(b,d))&&c.set(e.name,{location:a.getUniformLocation(b,e.name),info:e});return c};b.setUniforms=function(a,b,g){Object.keys(g).forEach(function(c){var e=b.get(c)||b.get(c+"[0]");if(e){var d=g[c];if(null!==e&&null!=d)switch(e=e.info,e.type){case 5126:1<e.size?a.setUniform1fv(c,d):a.setUniform1f(c,d);break;case 35664:a.setUniform2fv(c,d);break;case 35665:a.setUniform3fv(c,
d);break;case 35666:a.setUniform4fv(c,d);break;case 35675:a.setUniformMatrix3fv(c,d);break;case 35676:a.setUniformMatrix4fv(c,d);break;case 5124:1<e.size?a.setUniform1iv(c,d):a.setUniform1i(c,d);break;case 35670:a.setUniform1i(c,d?1:0);break;case 35667:case 35671:a.setUniform2iv(c,d);break;case 35668:case 35672:a.setUniform3iv(c,d);break;case 35669:case 35673:a.setUniform4iv(c,d)}}})};b.setTextures=function(a,b,g,c){g.length===c.length&&(c.some(function(a){return null==a})||g.some(function(a){return null==
a})||g.forEach(function(e,d){b.setUniform1i(e,d);a.bindTexture(c[d],d)}))}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./isWebGL2Context"],function(d,b,c){Object.defineProperty(b,"__esModule",{value:!0});b.load=void 0;b.load=function(a,b){return b.disjointTimerQuery?null:c.default(a)?{drawBuffers:a.drawBuffers.bind(a),MAX_DRAW_BUFFERS:a.MAX_DRAW_BUFFERS,MAX_COLOR_ATTACHMENTS:a.MAX_COLOR_ATTACHMENTS}:b.drawBuffers?null:(a=a.getExtension("WEBGL_draw_buffers"))?{drawBuffers:a.drawBuffersWEBGL.bind(a),MAX_DRAW_BUFFERS:a.MAX_DRAW_BUFFERS_WEBGL,MAX_COLOR_ATTACHMENTS:a.MAX_COLOR_ATTACHMENTS_WEBGL}:
null}});
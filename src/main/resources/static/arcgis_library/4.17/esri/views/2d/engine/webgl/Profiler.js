// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/CircularArray ../../../../core/Evented ../../../../core/has ../../../../core/maybe ../../../webgl/capabilities/DisjointTimerQuery".split(" "),function(g,h,n,p,q,l,r){Object.defineProperty(h,"__esModule",{value:!0});h.Profiler=void 0;var e=q("esri-2d-profiler");g=function(){function a(b,a){var c=this;this._events=new p;this._entries=new Map;this._timings=new n.default(10);if(e){this._ext=r.load(b.gl,{});this._debugOutput=a;var d=b.gl;if(this.enableCommandLogging){b=
function(b){if("function"===typeof d[b]){var a=d[b],k=-1!==b.indexOf("draw");d[b]=function(){for(var e=[],f=0;f<arguments.length;f++)e[f]=arguments[f];c._events.emit("command",{container:c._currentContainer,pass:c._currentPass,brush:c._currentBrush,method:b,args:e,isDrawCommand:k});c._currentSummary&&(c._currentSummary.commands++,k&&c._currentSummary.drawCommands++);return a.apply(d,e)}}};for(var k in d)b(k)}}}Object.defineProperty(a.prototype,"enableCommandLogging",{get:function(){return!("object"===
typeof e&&e.disableCommands)},enumerable:!1,configurable:!0});a.prototype.recordContainerStart=function(b){e&&(this._currentContainer=b)};a.prototype.recordContainerEnd=function(){e&&(this._currentContainer=null)};a.prototype.recordPassStart=function(b){e&&(this._currentPass=b,this._initSummary())};a.prototype.recordPassEnd=function(){e&&(this._currentPass=null,this._emitSummary())};a.prototype.recordBrushStart=function(b){e&&(this._currentBrush=b)};a.prototype.recordBrushEnd=function(){e&&(this._currentBrush=
null)};a.prototype.recordStart=function(b){if(e&&l.isSome(this._ext)){if(this._entries.has(b)){var a=this._entries.get(b),c=this._ext.resultAvailable(a.query),d=this._ext.disjoint();if(c&&!d){c=this._ext.getResult(a.query)/1E6;d=0;if(l.isSome(this._timings.enqueue(c))){for(var d=this._timings.entries,h=d.length,g=0,m=0;m<d.length;m++)g+=d[m];d=g/h}c=c.toFixed(2);d=d?d.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed("Frame report for "+b+", "+c+" ms ("+d+" last 10 avg)\n"+a.commandsLen+
" Commands ("+a.drawCommands+" draw)"),console.log("RenderPass breakdown: "),console.table(a.summaries),console.log("Commands: ",a.commands),console.groupEnd()):console.log("Frame report for "+b+", "+c+" ms ("+d+" last 10 avg)");this._debugOutput.innerHTML=c+" ("+d+")"}c=0;for(a=a.handles;c<a.length;c++)a[c].remove();this._entries.delete(b)}var f={name:b,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(f.handles.push(this._events.on("command",
function(a){f.commandsLen++;f.commands.push(a);a.isDrawCommand&&f.drawCommands++})),f.handles.push(this._events.on("summary",function(a){f.summaries.push(a)})));this._ext.beginTimeElapsed(f.query);this._entries.set(b,f)}};a.prototype.recordEnd=function(a){e&&l.isSome(this._ext)&&this._entries.has(a)&&this._ext.endTimeElapsed()};a.prototype._initSummary=function(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})};
a.prototype._emitSummary=function(){this.enableCommandLogging&&this._events.emit("summary",this._currentSummary)};return a}();h.Profiler=g});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./config"],function(q,h,r){function t(b,a){return b.priority-a.priority}Object.defineProperty(h,"__esModule",{value:!0});h.SymbolDeclutterer=void 0;q=function(){function b(a,c,k,e){this._tileForest=a;this._symbolRepository=c;this._createCollisionJob=k;this._assignTileSymbolsOpacity=e;this._selectionJob=null;this._selectionJobCompleted=!1;this._collisionJob=null;this._collisionJobCompleted=!1;this._opacityJob=null;this._opacityJobCompleted=!1;this._running=!0}Object.defineProperty(b.prototype,
"running",{get:function(){return this._running},enumerable:!1,configurable:!0});b.prototype.setScreenSize=function(a,c){this._screenWidth===a&&this._screenHeight===c||this.restart();this._screenWidth=a;this._screenHeight=c};b.prototype.restart=function(){this._selectionJob=null;this._selectionJobCompleted=!1;this._collisionJob=null;this._collisionJobCompleted=!1;this._opacityJob=null;this._opacityJobCompleted=!1;this._running=!0};b.prototype.continue=function(a){this._selectionJob||(this._selectionJob=
this._createSelectionJob());if(!this._selectionJobCompleted){var c=performance.now();if(!this._selectionJob.work(a))return!1;this._selectionJobCompleted=!0;a=Math.max(0,a-(performance.now()-c));if(0===a)return!1}this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight));if(!this._collisionJobCompleted){c=performance.now();if(!this._collisionJob.work(a))return!1;this._collisionJobCompleted=!0;a=Math.max(0,a-(performance.now()-
c));if(0===a)return!1}this._opacityJob||(this._opacityJob=this._createOpacityJob());if(!this._opacityJobCompleted){c=performance.now();if(!this._opacityJob.work(a))return!1;this._opacityJobCompleted=!0;a=Math.max(0,a-(performance.now()-c));if(0===a)return!1}this._running=!1;return!0};b.prototype._createSelectionJob=function(){var a=this._symbolRepository.uniqueSymbols,c=[],k=0,e=0,b,f,m,u=function(a){a.selectedForRendering=!1;if(!m||!f){var d=a.tile;if(a.unique.visible&&(!b||d.isCoverage||d.neededForCoverage&&
!f)){b=a;if(d.neededForCoverage||d.isCoverage)m=!0;d.isCoverage&&(f=!0)}}};return{work:function(l){for(var d,v=performance.now();e<a.length;e++,k=0){var n=a[e];c[e]=c[e]||{layerIndex:n.layerIndex,symbols:[]};for(var p=c[e];k<n.uniqueSymbols.length;k++){d=n.uniqueSymbols[k];if(99===k%100&&performance.now()-v>l)return!1;b=null;m=f=!1;d.tileSymbols.forEach(u);b.selectedForRendering=!0;if(m){p.symbols.push(b);d.show=!0;var g=0;for(d=d.parts;g<d.length;g++)d[g].show=!0}else d.show=!1}}for(l=0;l<c.length;l++)p=
c[l],p.symbols.sort(t);return!0},get sortedSymbols(){return c.sort(function(a,d){return d.layerIndex-a.layerIndex})}}};b.prototype._createOpacityJob=function(){function a(f,e){f.symbols.forEach(function(a){for(var d=0;d<a.length;d++)for(var c=a[d].unique,b=0,f=c.parts;b<f.length;b++){var g=f[b];g.startOpacity+=(e-g.startTime)/r.FADE_DURATION*(.5<g.targetOpacity?1:-1);g.startOpacity=Math.min(Math.max(g.startOpacity,0),1);g.startTime=e;g.targetOpacity=c.show&&g.show?1:0}});c(f,e);var h=0;for(f=b.getChildren(f);h<
f.length;h++)a(f[h],e)}var c=this._assignTileSymbolsOpacity,b=this._tileForest,e=b.getRoots(),h=0;return{work:function(b){for(var c=performance.now();h<e.length;h++){if(performance.now()-c>b)return!1;var f=e[h],k=performance.now();a(f,k)}return!0}}};return b}();h.SymbolDeclutterer=q});
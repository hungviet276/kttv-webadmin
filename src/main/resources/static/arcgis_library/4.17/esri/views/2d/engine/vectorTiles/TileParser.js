// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/pbf ../../../../core/promiseUtils ./CircleBucket ./Feature ./FillBucket ./IndexMemoryBuffer ./LineBucket ./SourceLayerData ./SymbolBucket ./VertexMemoryBuffer ../webgl/TileClipper ../../tiling/enums".split(" "),function(ma,na,G,ea,H,fa,ga,ha,e,ia,ja,ka,g,u,la){return function(){function d(b,k,m){this._pbfTiles={};this._tileClippers={};this._client=m;this._tile=k;this._layers=k.getLayers();var l=k.tileKey.split("/").map(parseFloat);k=l[0];m=l[1];l=l[2];
this._level=k;for(var d=Math.max(8,Math.round(1*this._level)-8),a=0,q=Object.keys(b);a<q.length;a++){var f=q[a],c=b[f];this._pbfTiles[f]=new ea(new Uint8Array(c.protobuff),new DataView(c.protobuff));if(c.refKey&&(c=c.refKey.split("/").map(parseFloat)[0],c=k-c,0<c)){var n=(1<<c)-1;this._tileClippers[f]=new u.TileClipper(c,m&n,l&n,8,d)}this._tileClippers[f]||(this._tileClippers[f]=new u.SimpleBuilder)}}d.prototype.parse=function(b){return G.__awaiter(this,void 0,void 0,function(){var k,m,l,d,a,q,f,
c,n,e,g,r,x,u,y,v,I,h,t,J,X,Y,z,A,B,K,Z,C,L,p,w,M,N,O,P,Q,R,aa,ba,D,S,E,T,F,U,ca,da,V,W;return G.__generator(this,function(G){k=b&&b.signal;m=this._parseTileData(this._pbfTiles);l=this._layers;d=this._level;q=this._tileClippers;f={};c={};n=[];e={};g=new Map;for(r=l.length-1;0<=r;r--)if(a=l[r],!(a.minzoom&&d<Math.floor(a.minzoom)||a.maxzoom&&d>=a.maxzoom||a.layout&&a.layout.visibility&&"none"===a.layout.visibility||0===a.type)&&m[a.source]&&q[a.source]&&(x=m[a.source],u=q[a.source],y=a.sourceLayer,
v=x[y]))if((I=c[a.source])||(I=c[a.source]=new Set),I.add(a.sourceLayer),a.refLayerId)g.set(r,a.refLayerId);else if(h=this._createBucket(a))h.layerIndices=[r],h.layerExtent=v.extent,h.tileClipper=u,(t=f[a.source])||(t=f[a.source]={}),(J=t[y])||(J=t[y]=[]),J.push(h),n.push(h),e[a.id.toLowerCase()]={layer:a,bucket:h};g.forEach(function(a,b){a=a.toLowerCase();e[a]&&e[a].bucket.layerIndices.push(b)});X=10*this._level;Y=10*(this._level+1);z=new Set;A={};B=[];K=[];Z=function(a){c[a].forEach(function(b){B.push(b);
K.push(a)})};C=0;for(L=Object.keys(c);C<L.length;C++)p=L[C],Z(p);for(w=0;w<B.length;w++)if(p=K[w],M=B[w],m[p]&&f[p]&&(x=m[p],v=x[M],t=f[p],(N=t[M])&&0!==N.length)){if(H.isAborted(k))return[2,void 0];for(O=v.getData();O.nextTag(2);){P=O.getMessage();Q=new ga(P,v);P.release();if(R=Q.values){if((aa=R._minzoom)&&aa>=Y)continue;if((ba=R._maxzoom)&&ba<=X)continue}D=0;for(S=N;D<S.length;D++)h=S[D],h.pushFeature(Q)}}E=0;for(T=n;E<T.length;E++)h=T[E],3===h.type&&h.getResources(h.tileClipper,z,A);if(this._tile.status===
la.TileStatus.INVALID)return[2,H.resolve([])];F=[];U=this._tile.getWorkerTileHandler();0<z.size&&(ca=U.fetchSprites(z,this._client,b),F.push(ca));for(V in A)W=A[V],0<W.size&&(da=U.fetchGlyphs(this._tile.tileKey,V,W,this._client,b),F.push(da));return[2,H.all(F).then(function(){for(var a=n.filter(function(a){return a.hasFeatures()}),b=0;b<a.length;b++){var c=a[b];c.processFeatures(c.tileClipper)}a.sort(function(a,b){return a.layerIndices[0]-b.layerIndices[0]});return a})]})})};d.prototype._parseTileData=
function(b){for(var k={},d=0,l=Object.keys(b);d<l.length;d++){for(var e=l[d],a=b[e],g={};a.next();)switch(a.tag()){case 3:var f=a.getMessage(),c=new ja(f);f.release();g[c.name]=c;break;default:a.skip()}k[e]=g}return k};d.prototype._createBucket=function(b){switch(b.type){case 0:return null;case 1:return this._createFillBucket(b);case 2:return this._createLineBucket(b);case 4:return this._createCircleBucket(b);case 3:return this._createSymbolBucket(b)}};d.prototype._createFillBucket=function(b){return new ha(b,
this._level,new g.FillVertexBuffer(b.hasDataDrivenFill),new e.TriangleIndexBuffer,new g.OutlineVertexBuffer(b.hasDataDrivenOutline),new e.TriangleIndexBuffer)};d.prototype._createLineBucket=function(b){return new ia(b,this._level,new g.LineVertexBuffer(b.hasDataDrivenLine),new e.TriangleIndexBuffer)};d.prototype._createCircleBucket=function(b){return new fa(b,this._level,new g.CircleVertexBuffer,new e.TriangleIndexBuffer)};d.prototype._createSymbolBucket=function(b){var d=this._tile;return new ka(b,
this._level,new g.SymbolVertexBuffer(b.hasDataDrivenIcon),new e.TriangleIndexBuffer,new g.SymbolVertexBuffer(b.hasDataDrivenText),new e.TriangleIndexBuffer,d.placementEngine,d.getWorkerTileHandler())};return d}()});
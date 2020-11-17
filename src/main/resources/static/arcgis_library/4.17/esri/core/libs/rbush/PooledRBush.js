// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../arrayUtils ../../maybe ../../PooledArray ../quickselect/quickselect".split(" "),function(A,p,B,C,D,m,K){function q(a,b){t(a,0,a.children.length,b,a)}function t(a,b,d,c,l){l||(l=new v([]));l.minX=Infinity;l.minY=Infinity;l.maxX=-Infinity;l.maxY=-Infinity;for(var g=void 0;b<d;b++)g=a.children[b],u(l,a.leaf?c(g):g);return l}function u(a,b){a.minX=Math.min(a.minX,b.minX);a.minY=Math.min(a.minY,b.minY);a.maxX=Math.max(a.maxX,b.maxX);a.maxY=Math.max(a.maxY,b.maxY)}function H(a,
b){return a.minX-b.minX}function I(a,b){return a.minY-b.minY}function E(a){return(a.maxX-a.minX)*(a.maxY-a.minY)}function w(a){return a.maxX-a.minX+(a.maxY-a.minY)}function F(a,b){return a.minX<=b.minX&&a.minY<=b.minY&&b.maxX<=a.maxX&&b.maxY<=a.maxY}function x(a,b){return b.minX<=a.maxX&&b.minY<=a.maxY&&b.maxX>=a.minX&&b.maxY>=a.minY}function J(a,b,d,c,l){for(b=[b,d];b.length;){d=D.assumeNonNull(b.pop());var g=D.assumeNonNull(b.pop());if(!(d-g<=c)){var e=g+Math.ceil((d-g)/c/2)*c;K(a,e,g,d,l);b.push(g,
e,e,d)}}}Object.defineProperty(p,"__esModule",{value:!0});p.BBox=p.PooledRBush=void 0;A=function(){function a(b,d){void 0===b&&(b=9);this.compareMinX=H;this.compareMinY=I;this.toBBox=function(b){return b};this._maxEntries=Math.max(4,b||9);this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries));d&&("function"===typeof d?this.toBBox=d:this._initFormat(d));this.clear()}a.prototype.destroy=function(){this.clear();n.prune();y.prune();f.prune();z.prune()};a.prototype.all=function(b){this._all(this.data,
b)};a.prototype.search=function(b,d){var c=this.data,l=this.toBBox;if(x(b,c))for(n.clear();c;){for(var a=0,e=c.children.length;a<e;a++){var h=c.children[a],k=c.leaf?l(h):h;x(b,k)&&(c.leaf?d(h):F(b,k)?this._all(h,d):n.push(h))}c=n.pop()}};a.prototype.collides=function(b){var d=this.data,c=this.toBBox;if(!x(b,d))return!1;for(n.clear();d;){for(var a=0,g=d.children.length;a<g;a++){var e=d.children[a],h=d.leaf?c(e):e;if(x(b,h)){if(d.leaf||F(b,h))return!0;n.push(e)}}d=n.pop()}return!1};a.prototype.load=
function(b,d){void 0===d&&(d=b.length);if(!d)return this;if(d<this._minEntries){for(var c=0;c<d;c++)this.insert(b[c]);return this}b=this._build(b.slice(0,d),0,d-1,0);this.data.children.length?this.data.height===b.height?this._splitRoot(this.data,b):(this.data.height<b.height&&(c=this.data,this.data=b,b=c),this._insert(b,this.data.height-b.height-1,!0)):this.data=b;return this};a.prototype.insert=function(b){b&&this._insert(b,this.data.height-1);return this};a.prototype.clear=function(){this.data=
new v([]);return this};a.prototype.remove=function(b){var d;if(!b)return this;var c=this.data,a=null,g=0,e=!1,h,k=this.toBBox(b);f.clear();for(z.clear();c||0<f.length;){c||(c=D.assumeNonNull(f.pop()),a=f.data[f.length-1],g=null!==(d=z.pop())&&void 0!==d?d:0,e=!0);if(c.leaf&&(h=C.indexOf(c.children,b,c.children.length,c.indexHint),-1!==h)){c.children.splice(h,1);f.push(c);this._condense(f);break}e||c.leaf||!F(c,k)?a?(g++,c=a.children[g],e=!1):c=null:(f.push(c),z.push(g),g=0,a=c,c=c.children[0])}return this};
a.prototype.toJSON=function(){return this.data};a.prototype.fromJSON=function(b){this.data=b;return this};a.prototype._all=function(b,d){var c,a=b;for(y.clear();a;){if(!0===a.leaf)for(b=0,a=a.children;b<a.length;b++)d(a[b]);else y.pushArray(a.children);a=null!==(c=y.pop())&&void 0!==c?c:null}};a.prototype._build=function(b,d,a,l){var c=a-d+1,e=this._maxEntries;if(c<=e)return b=new v(b.slice(d,a+1)),q(b,this.toBBox),b;l||(l=Math.ceil(Math.log(c)/Math.log(e)),e=Math.ceil(c/Math.pow(e,l-1)));var h=new G([]);
h.height=l;c=Math.ceil(c/e);e=c*Math.ceil(Math.sqrt(e));for(J(b,d,a,e,this.compareMinX);d<=a;d+=e){var k=Math.min(d+e-1,a);J(b,d,k,c,this.compareMinY);for(var r=d;r<=k;r+=c)h.children.push(this._build(b,r,Math.min(r+c-1,k),l-1))}q(h,this.toBBox);return h};a.prototype._chooseSubtree=function(b,a,c,l){for(;;){l.push(a);if(!0===a.leaf||l.length-1===c)break;for(var d=Infinity,e=Infinity,h=void 0,k=0,r=a.children.length;k<r;k++){var f=a.children[k],m=E(f),n=(Math.max(f.maxX,b.maxX)-Math.min(f.minX,b.minX))*
(Math.max(f.maxY,b.maxY)-Math.min(f.minY,b.minY))-m;n<e?(e=n,d=m<d?m:d,h=f):n===e&&m<d&&(d=m,h=f)}a=h||a.children[0]}return a};a.prototype._insert=function(b,a,c){var d=this.toBBox;c=c?b:d(b);f.clear();d=this._chooseSubtree(c,this.data,a,f);d.children.push(b);for(u(d,c);0<=a;)if(f.data[a].children.length>this._maxEntries)this._split(f,a),a--;else break;this._adjustParentBBoxes(c,f,a)};a.prototype._split=function(b,a){var c=b.data[a],d=c.children.length,g=this._minEntries;this._chooseSplitAxis(c,g,
d);(d=this._chooseSplitIndex(c,g,d))?(d=c.children.splice(d,c.children.length-d),d=c.leaf?new v(d):new G(d),d.height=c.height,q(c,this.toBBox),q(d,this.toBBox),a?b.data[a-1].children.push(d):this._splitRoot(c,d)):console.log("  Error: assertion failed at PooledRBush._split: no valid split index")};a.prototype._splitRoot=function(b,a){this.data=new G([b,a]);this.data.height=b.height+1;q(this.data,this.toBBox)};a.prototype._chooseSplitIndex=function(b,a,c){var d,g,e=void 0;d=g=Infinity;for(var h=a;h<=
c-a;h++){var k=t(b,0,h,this.toBBox),f=t(b,h,c,this.toBBox),m;m=Math.max(0,Math.min(k.maxX,f.maxX)-Math.max(k.minX,f.minX))*Math.max(0,Math.min(k.maxY,f.maxY)-Math.max(k.minY,f.minY));k=E(k)+E(f);m<d?(d=m,e=h,g=k<g?k:g):m===d&&k<g&&(g=k,e=h)}return e};a.prototype._chooseSplitAxis=function(b,a,c){var d=b.leaf?this.compareMinX:H,g=b.leaf?this.compareMinY:I,e=this._allDistMargin(b,a,c,d);a=this._allDistMargin(b,a,c,g);e<a&&b.children.sort(d)};a.prototype._allDistMargin=function(b,a,c,l){b.children.sort(l);
l=this.toBBox;for(var d=t(b,0,a,l),e=t(b,c-a,c,l),h=w(d)+w(e),k=a;k<c-a;k++){var f=b.children[k];u(d,b.leaf?l(f):f);h+=w(d)}for(k=c-a-1;k>=a;k--)f=b.children[k],u(e,b.leaf?l(f):f),h+=w(e);return h};a.prototype._adjustParentBBoxes=function(a,d,c){for(;0<=c;c--)u(d.data[c],a)};a.prototype._condense=function(a){for(var b=a.length-1;0<=b;b--){var c=a.data[b];if(0===c.children.length)if(0<b){var f=a.data[b-1],g=f.children;g.splice(C.indexOf(g,c,g.length,f.indexHint),1)}else this.clear();else q(c,this.toBBox)}};
a.prototype._initFormat=function(a){var b=["return a"," - b",";"];this.compareMinX=new Function("a","b",b.join(a[0]));this.compareMinY=new Function("a","b",b.join(a[1]));this.toBBox=new Function("a","return {minX: a"+a[0]+", minY: a"+a[1]+", maxX: a"+a[2]+", maxY: a"+a[3]+"};")};return a}();p.PooledRBush=A;var n=new m,y=new m,f=new m,z=new m({deallocator:void 0});m=function(){return function(){this.minY=this.minX=Infinity;this.maxY=this.maxX=-Infinity}}();p.BBox=m;m=function(a){function b(){var b=
null!==a&&a.apply(this,arguments)||this;b.height=1;b.indexHint=new C.PositionHint;return b}B.__extends(b,a);return b}(m);var v=function(a){function b(b){var c=a.call(this)||this;c.children=b;c.leaf=!0;return c}B.__extends(b,a);return b}(m),G=function(a){function b(b){var c=a.call(this)||this;c.children=b;c.leaf=!1;return c}B.__extends(b,a);return b}(m);p.default=A});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./displayIdUtils","./StaticBitSet"],function(h,d,k,l){function e(b,a,c){if(!(b.length>a))for(;b.length<=a;)b.push(c)}Object.defineProperty(d,"__esModule",{value:!0});d.ComputedAttributeStorage=void 0;h=function(){function b(){this._numerics=[];this._strings=[];this._idGenerator=new k.DisplayIdGenerator;this._allocatedSize=256;this._bitsets=[];this._instanceIds=[];this._bounds=[]}b.prototype.createBitset=function(){var a=this._bitsets.length;this._bitsets.push(l.StaticBitSet.create(this._allocatedSize,
2147483647));return a+1};b.prototype.getBitset=function(a){return this._bitsets[a-1]};b.prototype._expand=function(){this._allocatedSize<<=1;for(var a=0,c=this._bitsets;a<c.length;a++)c[a].resize(this._allocatedSize)};b.prototype._ensureNumeric=function(a,c){this._numerics[a]||(this._numerics[a]=[]);e(this._numerics[a],c,0)};b.prototype._ensureInstanceId=function(a){e(this._instanceIds,a,0)};b.prototype._ensureString=function(a,c){this._strings[a]||(this._strings[a]=[]);e(this._strings[a],c,null)};
b.prototype.createDisplayId=function(a){void 0===a&&(a=!1);var c=this._idGenerator.createId();c>this._allocatedSize&&this._expand();return((a?2147483648:0)|c)>>>0};b.prototype.releaseDisplayId=function(a){for(var c=0,b=this._bitsets;c<b.length;c++)b[c].unset(a);return this._idGenerator.releaseId(a&2147483647)};b.prototype.getComputedNumeric=function(a,c){return this.getComputedNumericAtIndex(a&2147483647,0)};b.prototype.setComputedNumeric=function(a,c,b){return this.setComputedNumericAtIndex(a&2147483647,
b,0)};b.prototype.getComputedString=function(a,c){return this.getComputedStringAtIndex(a&2147483647,0)};b.prototype.setComputedString=function(a,c,b){return this.setComputedStringAtIndex(a&2147483647,0,b)};b.prototype.getComputedNumericAtIndex=function(a,c){a&=2147483647;this._ensureNumeric(c,a);return this._numerics[c][a]};b.prototype.setComputedNumericAtIndex=function(a,c,b){a&=2147483647;this._ensureNumeric(c,a);this._numerics[c][a]=b};b.prototype.getInstanceId=function(a){a&=2147483647;this._ensureInstanceId(a);
return this._instanceIds[a]};b.prototype.setInstanceId=function(a,c){a&=2147483647;this._ensureInstanceId(a);this._instanceIds[a]=c};b.prototype.getComputedStringAtIndex=function(a,c){a&=2147483647;this._ensureString(c,a);return this._strings[c][a]};b.prototype.setComputedStringAtIndex=function(a,c,b){a&=2147483647;this._ensureString(c,a);this._strings[c][a]=b};b.prototype.getXMin=function(a){return this._bounds[4*(a&2147483647)]};b.prototype.getYMin=function(a){return this._bounds[4*(a&2147483647)+
1]};b.prototype.getXMax=function(a){return this._bounds[4*(a&2147483647)+2]};b.prototype.getYMax=function(a){return this._bounds[4*(a&2147483647)+3]};b.prototype.setBounds=function(a,b){b=b.readHydratedGeometry();if(!b||!b.coords.length)return!1;var c=Infinity,d=Infinity,f=-Infinity,g=-Infinity;b.forEachVertex(function(a,b){c=Math.min(c,a);d=Math.min(d,b);f=Math.max(f,a);g=Math.max(g,b)});a&=2147483647;e(this._bounds,4*a+4,0);this._bounds[4*a]=c;this._bounds[4*a+1]=d;this._bounds[4*a+2]=f;this._bounds[4*
a+3]=g;return!0};return b}();d.ComputedAttributeStorage=h});
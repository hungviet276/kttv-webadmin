// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../request ../../core/arrayUtils ../../core/Error ../../core/lang".split(" "),function(h,c,m,p,q,k,r){function n(a){var b;"vector-tile"===a.service.type?b=a.service.url+"/tilemap/"+a.level+"/"+a.row+"/"+a.col+"/"+a.width+"/"+a.height:(b=a.service.tileServers,b=(b&&b.length?b[a.row%b.length]:a.service.url)+"/tilemap/"+a.level+"/"+a.row+"/"+a.col+"/"+a.width+"/"+a.height);(a=a.service.query)&&(b=b+"?"+a);return b}Object.defineProperty(c,"__esModule",{value:!0});c.tilemapDefinitionUrl=
c.tilemapDefinitionId=c.Tilemap=void 0;h=function(){function a(){this.location={left:0,top:0,width:0,height:0};this._allAvailability="unknown";this.byteSize=40}a.prototype.getAvailability=function(b,a){if("unknown"!==this._allAvailability)return this._allAvailability;b=(b-this.location.top)*this.location.width+(a-this.location.left);a=b>>3;var l=this._tileAvailabilityBitSet;return 0>a||a>l.length?"unknown":l[a]&1<<b%8?"available":"unavailable"};a.prototype._updateFromData=function(a){for(var b=!0,
c=!0,e=new Uint8Array(Math.ceil(this.location.width*this.location.height/8)),f=0,d=0;d<a.length;d++){var g=d%8;a[d]?(c=!1,e[f]|=1<<g):b=!1;7===g&&++f}c?this._allAvailability="unavailable":b?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=e,this.byteSize+=e.length)};a.fromDefinition=function(b,c){var l=b.service.request||p,e=b.row,f=b.col,d=b.width,g=b.height,h={query:{f:"json"}};c=c?m.__assign(m.__assign({},h),c):h;return l(n(b),c).then(function(a){return a.data}).catch(function(a){if(a&&
a.details&&422===a.details.httpStatus)return{location:{top:e,left:f,width:d,height:g},valid:!0,data:q.constant(d*g,0)};throw a;}).then(function(b){if(b.location&&(b.location.top!==e||b.location.left!==f||b.location.width!==d||b.location.height!==g))throw new k("tilemap:location-mismatch","Tilemap response for different location than requested",{response:b,definition:{top:e,left:f,width:d,height:g}});return a.fromJSON(b)})};a.fromJSON=function(b){a.validateJSON(b);var c=new a;c.location=Object.freeze(r.clone(b.location));
c._updateFromData(b.data);return Object.freeze(c)};a.validateJSON=function(a){if(!a||!a.location)throw new k("tilemap:missing-location","Location missing from tilemap response");if(!1===a.valid)throw new k("tilemap:invalid","Tilemap response was marked as invalid");if(!a.data)throw new k("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(a.data))throw new k("tilemap:data-mismatch","Data must be an array of numbers");if(a.data.length!==a.location.width*a.location.height)throw new k("tilemap:data-mismatch",
"Number of data items does not match width/height of tilemap");};return a}();c.Tilemap=h;c.tilemapDefinitionId=function(a){return a.level+"/"+a.row+"/"+a.col+"/"+a.width+"/"+a.height};c.tilemapDefinitionUrl=n;c.default=h});
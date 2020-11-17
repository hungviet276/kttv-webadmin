// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/arrayUtils ../core/jsonMap ../core/JSONSupport ../core/unitUtils ../core/Warning ../core/accessorSupport/decorators".split(" "),function(w,x,d,t,m,u,n,p,f){function q(d,a){return new p("height-unit:unsupported","Height unit of value '"+d+"' is not supported",a)}function v(d,a){return new p("height-model:unsupported","Height model of value '"+d+"' is not supported",a)}var k=m.strict()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",
ellipsoidal:"ellipsoidal"}),r=k.jsonValues.slice();t.removeUnordered(r,"orthometric");var g=m.strict()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains",
"50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});return function(l){function a(e){e=l.call(this,e)||this;e.heightModel="gravity-related-height";e.heightUnit="meters";e.vertCRS=null;return e}d.__extends(a,l);h=a;a.prototype.writeHeightModel=function(e,a,c){return k.write(e,a,c)};a.prototype.readHeightModel=function(e,a,c){if(a=k.read(e))return a;c&&c.messages&&c.messages.push(v(e,{context:c}));return null};a.prototype.readHeightUnit=function(e,a,c){if(a=g.read(e))return a;c&&c.messages&&
c.messages.push(q(e,{context:c}));return null};a.prototype.readHeightUnitService=function(a,b,c){if(b=n.unitFromRESTJSON(a)||g.read(a))return b;c&&c.messages&&c.messages.push(q(a,{context:c}));return null};a.prototype.readVertCRS=function(a,b){return b.vertCRS||b.ellipsoid||b.geoid};a.prototype.clone=function(){return new h({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})};a.prototype.equals=function(a){return a?this===a?!0:this.heightModel===a.heightModel&&this.heightUnit===
a.heightUnit&&this.vertCRS===a.vertCRS:!1};a.deriveUnitFromSR=function(a,b){b=n.getVerticalUnitStringForSR(b);return new h({heightModel:a.heightModel,heightUnit:b,vertCRS:a.vertCRS})};a.prototype.write=function(a,b){b=d.__assign({origin:"web-scene"},b);return l.prototype.write.call(this,a,b)};a.fromJSON=function(a){if(!a)return null;var b=new h;b.read(a,{origin:"web-scene"});return b};var h;d.__decorate([f.property({type:k.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:r,default:"ellipsoidal"}}}})],
a.prototype,"heightModel",void 0);d.__decorate([f.writer("web-scene","heightModel")],a.prototype,"writeHeightModel",null);d.__decorate([f.reader(["web-scene","service"],"heightModel")],a.prototype,"readHeightModel",null);d.__decorate([f.property({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:g.write}}}})],a.prototype,"heightUnit",void 0);d.__decorate([f.reader("web-scene","heightUnit")],a.prototype,"readHeightUnit",null);d.__decorate([f.reader("service","heightUnit")],
a.prototype,"readHeightUnitService",null);d.__decorate([f.property({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],a.prototype,"vertCRS",void 0);d.__decorate([f.reader("service","vertCRS",["vertCRS","ellipsoid","geoid"])],a.prototype,"readVertCRS",null);return a=h=d.__decorate([f.subclass("esri.geometry.HeightModelInfo")],a)}(u.JSONSupport)});
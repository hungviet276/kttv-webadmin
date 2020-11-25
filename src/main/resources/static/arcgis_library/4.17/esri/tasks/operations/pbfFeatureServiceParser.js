// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/Error","../../core/Logger","../../core/pbf"],function(J,h,n,u,v){function m(a){return a>=p.length?null:p[a]}function k(a,b){return b>=a.geometryTypes.length?null:a.geometryTypes[b]}function w(a,b,c){for(c=b.createPointGeometry(c);a.next();)switch(a.tag()){case 3:for(var d=a.getUInt32(),d=a.pos()+d,e=0;a.pos()<d;)b.addCoordinatePoint(c,a.getSInt64(),e++);break;default:a.skip()}return c}function x(a,b,c){var d=b.createGeometry(c);for(c=2+(c.hasZ?1:0)+(c.hasM?
1:0);a.next();)switch(a.tag()){case 2:for(var e=a.getUInt32(),e=a.pos()+e,f=0;a.pos()<e;)b.addLength(d,a.getUInt32(),f++);break;case 3:e=a.getUInt32();e=a.pos()+e;for(f=0;a.pos()<e;)b.addCoordinate(d,a.getSInt64(),f),f++,f===c&&(f=0);break;default:a.skip()}return d}function y(a,b,c){var d;c.queryGeometry=b.createGeometry(c);c.queryGeometryType=k(b,0);for(var e=!1;a.next();)switch(a.tag()){case 2:for(var f=a.getUInt32(),f=a.pos()+f,g=0;a.pos()<f;)b.addLength(c.queryGeometry,a.getUInt32(),g++);break;
case 3:f=a.getUInt32();f=a.pos()+f;for(g=0;a.pos()<f;)b.addCoordinate(c.queryGeometry,a.getSInt64(),g),g++,2===g&&(g=0);break;case 1:c.queryGeometryType=k(b,a.getEnum());e=!0;break;default:a.skip()}a=null===(d=c.queryGeometry)||void 0===d?void 0:d.lengths;!e&&a&&a.length&&1<a[0]&&(c.queryGeometryType=k(b,3))}function z(a){for(;a.next();)switch(a.tag()){case 1:return a.getString();case 2:return a.getFloat();case 3:return a.getDouble();case 4:return a.getSInt32();case 5:return a.getUInt32();case 6:return a.getInt64();
case 7:return a.getUInt64();case 8:return a.getSInt64();case 9:return a.getBool();default:return a.skip(),null}return null}function A(a){for(var b={type:m(0)};a.next();)switch(a.tag()){case 1:b.name=a.getString();break;case 2:b.type=m(a.getEnum());break;case 3:b.alias=a.getString();break;case 4:var c;c=a.getEnum();c=c>=q.length?null:q[c];b.sqlType=c;break;case 5:try{b.domain=JSON.parse(a.getString())}catch(d){r.error(new n("query:parsing-pbf","Failed to parse domain",{error:d})),b.domain=null}break;
case 6:b.defaultValue=a.getString();break;default:a.skip()}return b}function B(a){for(var b={};a.next();)switch(a.tag()){case 1:b.name=a.getString();break;case 2:b.isSystemMaintained=a.getBool();break;default:a.skip()}return b}function C(a,b,c,d){for(var e=b.createFeature(c),f=0;a.next();)switch(a.tag()){case 1:var g=d[f++].name;e.attributes[g]=a.processMessage(z);break;case 2:e.geometry=a.processMessageWithArgs(x,b,c);break;case 4:e.centroid=a.processMessageWithArgs(w,b,c);break;default:a.skip()}return e}
function D(a){for(var b=[1,1,1,1];a.next();)switch(a.tag()){case 1:b[0]=a.getDouble();break;case 2:b[1]=a.getDouble();break;case 4:b[2]=a.getDouble();break;case 3:b[3]=a.getDouble();break;default:a.skip()}return b}function E(a){for(var b=[0,0,0,0];a.next();)switch(a.tag()){case 1:b[0]=a.getDouble();break;case 2:b[1]=a.getDouble();break;case 4:b[2]=a.getDouble();break;case 3:b[3]=a.getDouble();break;default:a.skip()}return b}function t(a){for(var b={originPosition:0>=l.length?null:l[0]};a.next();)switch(a.tag()){case 1:var c=
a.getEnum();b.originPosition=c>=l.length?null:l[c];break;case 2:b.scale=a.processMessage(D);break;case 3:b.translate=a.processMessage(E);break;default:a.skip()}return b}function F(a){for(var b={};a.next();)switch(a.tag()){case 1:b.shapeAreaFieldName=a.getString();break;case 2:b.shapeLengthFieldName=a.getString();break;case 3:b.units=a.getString();break;default:a.skip()}return b}function G(a,b){for(b=b.createSpatialReference();a.next();)switch(a.tag()){case 1:b.wkid=a.getUInt32();break;case 5:b.wkt=
a.getString();break;case 2:b.latestWkid=a.getUInt32();break;case 3:b.vcsWkid=a.getUInt32();break;case 4:b.latestVcsWkid=a.getUInt32();break;default:a.skip()}return b}function H(a,b){var c=b.createFeatureResult();c.geometryType=k(b,0);for(var d=!1;a.next();)switch(a.tag()){case 1:c.objectIdFieldName=a.getString();break;case 3:c.globalIdFieldName=a.getString();break;case 4:c.geohashFieldName=a.getString();break;case 5:c.geometryProperties=a.processMessage(F);break;case 7:c.geometryType=k(b,a.getEnum());
break;case 8:c.spatialReference=a.processMessageWithArgs(G,b);break;case 10:c.hasZ=a.getBool();break;case 11:c.hasM=a.getBool();break;case 12:c.transform=a.processMessage(t);break;case 9:var e=a.getBool();c.exceededTransferLimit=e;break;case 13:b.addField(c,a.processMessage(A));break;case 15:d||(b.prepareFeatures(c),d=!0);b.addFeature(c,a.processMessageWithArgs(C,b,c,c.fields));break;case 2:c.uniqueIdField=a.processMessage(B);break;default:a.skip()}b.finishFeatureResult(c);return c}function I(a,b){for(var c=
{};a.next();)switch(a.tag()){case 4:a.processMessageWithArgs(y,b,c);break;case 1:c.featureResult=a.processMessageWithArgs(H,b);break;default:a.skip()}return c}Object.defineProperty(h,"__esModule",{value:!0});h.parseFeatureQuery=h.parseTransform=h.parseFieldType=void 0;var r=u.getLogger("esri.tasks.operations.pbfFeatureServiceParser"),p="esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble esriFieldTypeString esriFieldTypeDate esriFieldTypeOID esriFieldTypeGeometry esriFieldTypeBlob esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeGlobalID esriFieldTypeXML".split(" "),
q="sqlTypeBigInt sqlTypeBinary sqlTypeBit sqlTypeChar sqlTypeDate sqlTypeDecimal sqlTypeDouble sqlTypeFloat sqlTypeGeometry sqlTypeGUID sqlTypeInteger sqlTypeLongNVarchar sqlTypeLongVarbinary sqlTypeLongVarchar sqlTypeNChar sqlTypeNVarchar sqlTypeOther sqlTypeReal sqlTypeSmallInt sqlTypeSqlXml sqlTypeTime sqlTypeTimestamp sqlTypeTimestamp2 sqlTypeTinyInt sqlTypeVarbinary sqlTypeVarchar".split(" "),l=["upperLeft","lowerLeft"];h.parseFieldType=m;h.parseTransform=t;h.parseFeatureQuery=function(a,b){try{var c=
new v(new Uint8Array(a),new DataView(a));for(a={};c.next();)switch(c.tag()){case 2:a.queryResult=c.processMessageWithArgs(I,b);break;default:c.skip()}return a}catch(d){return c=new n("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:d}),r.error(c),{queryResult:{featureResult:b.createFeatureResult()}}}}});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/Error","../../../../../tasks/operations/pbfFeatureServiceParser"],function(w,f,u,n){Object.defineProperty(f,"__esModule",{value:!0});f.parseHeader=f.FeatureSetHeader=void 0;var p=function(){function a(){this.hasFeatures=!1;this.fieldIndexMap=new Map;this.objectIdFieldIndex=this.featureCount=this.fieldCount=0;this.dateFields=new Set;this.offsets={attributes:[],geometry:[]};this.centroid=[]}a.prototype.hasFieldIndex=function(a){return this.fieldIndexMap.has(a)};
a.prototype.isDateField=function(a){return this.dateFields.has(a)};a.prototype.getFieldIndex=function(a){return this.fieldIndexMap.get(a)};return a}();f.FeatureSetHeader=p;f.parseHeader=function(a,f){for(var v=a.pos(),b=new p,h=0,g=0,q=null,r=null,t=null,k=!1;a.next();)switch(a.tag()){case 1:q=a.getString();break;case 3:r=a.getString();break;case 12:t=a.processMessage(n.parseTransform);break;case 9:b.exceededTransferLimit=a.getBool();b.exceededTransferLimit&&(b.offsets.geometry=new Int32Array(8E3),
b.centroid=new Int32Array(16E3));break;case 13:var c;c=a;for(var e=c.getLength(),e=c.pos()+e,d={name:"",isDate:!1};c.pos()<e&&c.next();)switch(c.tag()){case 1:d.name=c.getString();break;case 2:"esriFieldTypeDate"===n.parseFieldType(c.getEnum())&&(d.isDate=!0);break;default:c.skip()}c=d;e=c.name.toLowerCase().trim();d=h++;b.fieldIndexMap.set(c.name,d);b.fieldIndexMap.set(e,d);c.isDate&&(b.dateFields.add(c.name),b.dateFields.add(e));break;case 15:c=a.getLength();c=a.pos()+c;b.exceededTransferLimit||
(e=b.centroid,b.offsets.geometry.push(0),e.push(268435455),e.push(268435455));!k&&b.exceededTransferLimit&&(k=!0,b.offsets.attributes=new Uint32Array(8E3*h));for(e=g*h;a.pos()<c&&a.next();)switch(a.tag()){case 1:k?b.offsets.attributes[e++]=a.pos():b.offsets.attributes.push(a.pos());d=a.getLength();a.skipLen(d);break;case 2:if(f)for(var d=a.getLength(),l=a.pos()+d;a.pos()<l&&a.next();)switch(a.tag()){case 3:a.getUInt32();var d=a.getSInt32(),m=a.getSInt32();b.centroid[2*g]=d;b.centroid[2*g+1]=m;break;
default:a.skip()}else b.offsets.geometry[g]=a.pos(),d=a.getLength(),a.skipLen(d);break;case 4:d=a.getLength();for(l=a.pos()+d;a.pos()<l&&a.next();)switch(a.tag()){case 3:a.getUInt32();d=a.getSInt32();m=a.getSInt32();b.centroid[2*g]=d;b.centroid[2*g+1]=m;break;default:a.skip()}break;default:a.skip()}g++;b.hasFeatures=!0;break;default:a.skip()}f=q||r;if(!f)throw new u("FeatureSet has no objectId or globalId field name");b.featureCount=g;b.fieldCount=h;b.objectIdFieldIndex=b.getFieldIndex(f);b.transform=
t;b.displayIds=new Uint32Array(b.featureCount);b.groupIds=new Uint16Array(b.featureCount);a.move(v);return b}});
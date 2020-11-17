// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../request ../core/promiseUtils ../core/queryUtils ../core/accessorSupport/decorators ../geometry/support/normalizeUtils ./Task ./mixins/NAServiceDescription ./support/ClosestFacilitySolveResult".split(" "),function(w,x,b,m,n,p,k,q,r,t,u){var v=p.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,
incidents:!0,outSpatialReference:{name:"outSR",getter:function(b){return b.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});return function(l){function d(a){a=l.call(this,a)||this;a.url=null;return a}b.__extends(d,l);d.prototype.solve=function(a,d){var f=this,g=[],e=[],c={},h={};a.incidents&&a.incidents.features&&
this._collectGeometries(a.incidents.features,e,"incidents.features",c);a.facilities&&a.facilities.features&&this._collectGeometries(a.facilities.features,e,"facilities.features",c);a.pointBarriers&&a.pointBarriers.features&&this._collectGeometries(a.pointBarriers.features,e,"pointBarriers.features",c);a.polylineBarriers&&a.polylineBarriers.features&&this._collectGeometries(a.polylineBarriers.features,e,"polylineBarriers.features",c);a.polygonBarriers&&a.polygonBarriers.features&&this._collectGeometries(a.polygonBarriers.features,
e,"polygonBarriers.features",c);return q.normalizeCentralMeridian(e).then(function(a){for(var b in c){var d=c[b];g.push(b);h[b]=a.slice(d[0],d[1])}return f._isInputGeometryZAware(h,g)?f.getServiceDescription():n.resolve({dontCheck:!0})}).then(function(e){("dontCheck"in e?e.dontCheck:e.hasZ)||f._dropZValuesOffInputGeometry(h,g);e=function(b){h[b].forEach(function(e,c){a.get(b)[c].geometry=e})};for(var c in h)e(c);c={query:b.__assign(b.__assign(b.__assign({},f.parsedUrl.query),{f:"json"}),v.toQueryParams(a))};
if(f.requestOptions||d)c=b.__assign(b.__assign(b.__assign({},f.requestOptions),d),c);return m(f.parsedUrl.path+"/solveClosestFacility",c)}).then(function(a){return u.fromJSON(a.data)})};d.prototype._collectGeometries=function(a,b,d,g){g[d]=[b.length,b.length+a.length];a.forEach(function(a){b.push(a.geometry)})};b.__decorate([k.property()],d.prototype,"url",void 0);return d=b.__decorate([k.subclass("esri.tasks.ClosestFacilityTask")],d)}(t.NAServiceDescriptionMixin(r))});
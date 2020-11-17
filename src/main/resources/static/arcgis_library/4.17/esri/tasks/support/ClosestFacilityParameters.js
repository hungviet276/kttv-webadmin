// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../geometry ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(q,r,b,n,d,p,c){var e=new d.default({esriNAOutputLineNone:"none",esriNAOutputLineStraight:"straight",esriNAOutputLineTrueShape:"true-shape",esriNAOutputLineTrueShapeWithMeasure:"true-shape-with-measure"}),f=new d.default({esriNAUCentimeters:"centimeters",esriNAUDecimalDegrees:"decimal-degrees",esriNAUDecimeters:"decimeters",esriNAUFeet:"feet",esriNAUInches:"inches",
esriNAUKilometers:"kilometers",esriNAUMeters:"meters",esriNAUMiles:"miles",esriNAUMillimeters:"millimeters",esriNAUNauticalMiles:"nautical-miles",esriNAUPoints:"points",esriNAUYards:"yards"}),g=new d.default({esriNFSBAllowBacktrack:"allow-backtrack",esriNFSBAtDeadEndsOnly:"at-dead-ends-only",esriNFSBNoBacktrack:"no-backtrack",esriNFSBAtDeadEndsAndIntersections:"at-dead-ends-and-intersections"}),h=new d.default({esriDOTComplete:"complete",esriDOTCompleteNoEvents:"complete-no-events",esriDOTInstructionsOnly:"instructions-only",
esriDOTStandard:"standard",esriDOTSummaryOnly:"summary-only"}),k=new d.default({esriNATravelDirectionFromFacility:"from-facility",esriNATravelDirectionToFacility:"to-facility"}),l=new d.default({esriNATimeOfDayUseAsStartTime:"start",esriNATimeOfDayUseAsEndTime:"end"}),m=new d.default({esriCentimeters:"centimeters",esriDecimalDegrees:"decimal-degrees",esriDecimeters:"decimeters",esriFeet:"feet",esriInches:"inches",esriKilometers:"kilometers",esriMeters:"meters",esriMiles:"miles",esriMillimeters:"millimeters",
esriNauticalMiles:"nautical-miles",esriPoints:"points",esriYards:"yards"});return function(d){function a(a){a=d.call(this,a)||this;a.accumulateAttributes=null;a.attributeParameterValues=null;a.defaultCutoff=null;a.defaultTargetFacilityCount=null;a.directionsLanguage=null;a.directionsLengthUnits=null;a.directionsOutputType=null;a.directionsStyleName=null;a.directionsTimeAttribute=null;a.doNotLocateOnRestrictedElements=!0;a.facilities=null;a.impedanceAttribute=null;a.incidents=null;a.outputGeometryPrecision=
null;a.outputGeometryPrecisionUnits=null;a.outputLines=null;a.outSpatialReference=null;a.pointBarriers=null;a.polygonBarriers=null;a.polylineBarriers=null;a.restrictionAttributes=null;a.restrictUTurns=null;a.returnDirections=!1;a.returnFacilities=!1;a.returnIncidents=!1;a.returnPointBarriers=!1;a.returnPolygonBarriers=!1;a.returnPolylineBarriers=!1;a.returnRoutes=!0;a.timeOfDay=null;a.timeOfDayUsage=null;a.travelDirection=null;a.travelMode=null;a.useHierarchy=!1;return a}b.__extends(a,d);a.prototype.readTimeOfDay=
function(a,b){return null!=b.timeOfDay?new Date(b.timeOfDay):null};a.prototype.writeTimeOfDay=function(a,b){b.timeOfDay=a?a.getTime():null};b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"accumulateAttributes",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"attributeParameterValues",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"defaultCutoff",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"defaultTargetFacilityCount",
void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"directionsLanguage",void 0);b.__decorate([c.property({type:f.apiValues,json:{read:{reader:f.read},write:{writer:f.write}}})],a.prototype,"directionsLengthUnits",void 0);b.__decorate([c.property({type:h.apiValues,json:{read:{reader:h.read},write:{writer:h.write}}})],a.prototype,"directionsOutputType",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"directionsStyleName",void 0);b.__decorate([c.property({type:String,
json:{write:!0}})],a.prototype,"directionsTimeAttribute",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"doNotLocateOnRestrictedElements",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"facilities",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"impedanceAttribute",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"incidents",void 0);b.__decorate([c.property({type:Number,json:{write:!0}})],a.prototype,"outputGeometryPrecision",
void 0);b.__decorate([c.property({type:m.apiValues,json:{read:{reader:m.read},write:{writer:m.write}}})],a.prototype,"outputGeometryPrecisionUnits",void 0);b.__decorate([c.property({type:e.apiValues,json:{read:{reader:e.read},write:{writer:e.write}}})],a.prototype,"outputLines",void 0);b.__decorate([c.property({type:n.SpatialReference,json:{write:!0}})],a.prototype,"outSpatialReference",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"pointBarriers",void 0);b.__decorate([c.property({json:{write:!0}})],
a.prototype,"polygonBarriers",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"polylineBarriers",void 0);b.__decorate([c.property({type:[String],json:{write:!0}})],a.prototype,"restrictionAttributes",void 0);b.__decorate([c.property({type:g.apiValues,json:{read:{reader:g.read},write:{writer:g.write}}})],a.prototype,"restrictUTurns",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnDirections",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],
a.prototype,"returnFacilities",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnIncidents",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnPointBarriers",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnPolygonBarriers",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"returnPolylineBarriers",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,
"returnRoutes",void 0);b.__decorate([c.property({type:Date,json:{type:Number,write:!0}})],a.prototype,"timeOfDay",void 0);b.__decorate([c.reader("timeOfDay")],a.prototype,"readTimeOfDay",null);b.__decorate([c.writer("timeOfDay")],a.prototype,"writeTimeOfDay",null);b.__decorate([c.property({type:l.apiValues,json:{read:{reader:l.read},write:{writer:l.write}}})],a.prototype,"timeOfDayUsage",void 0);b.__decorate([c.property({type:k.apiValues,json:{read:{reader:k.read},write:{writer:k.write}}})],a.prototype,
"travelDirection",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"travelMode",void 0);b.__decorate([c.property({type:Boolean,json:{write:!0}})],a.prototype,"useHierarchy",void 0);return a=b.__decorate([c.subclass("esri.tasks.support.ClosestFacilityParameters")],a)}(p.JSONSupport)});
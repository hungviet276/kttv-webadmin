// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/accessorSupport/decorators ../rest/geometryService ./Task".split(" "),function(k,l,e,f,c,h){return function(g){function a(a){a=g.call(this,a)||this;a.url=null;return a}e.__extends(a,g);a.prototype.areasAndLengths=function(a,b){return c.areasAndLengths(this.url,a,b)};a.prototype.autoComplete=function(a,b,d){return c.autoComplete(this.url,a,b,d)};a.prototype.buffer=function(a,b){return c.buffer(this.url,a,b)};a.prototype.convexHull=function(a,b){return c.convexHull(this.url,
a,b)};a.prototype.cut=function(a,b,d){return c.cut(this.url,a,b,d)};a.prototype.densify=function(a,b){return c.densify(this.url,a,b)};a.prototype.difference=function(a,b,d){return c.difference(this.url,a,b,d)};a.prototype.distance=function(a,b){return c.distance(this.url,a,b)};a.prototype.fromGeoCoordinateString=function(a,b){return c.fromGeoCoordinateString(this.url,a,b)};a.prototype.generalize=function(a,b){return c.generalize(this.url,a,b)};a.prototype.intersect=function(a,b,d){return c.intersect(this.url,
a,b,d)};a.prototype.labelPoints=function(a,b){return c.labelPoints(this.url,a,b)};a.prototype.lengths=function(a,b){return c.lengths(this.url,a,b)};a.prototype.offset=function(a,b){return c.offset(this.url,a,b)};a.prototype.project=function(a,b){return c.project(this.url,a,b)};a.prototype.relation=function(a,b){return c.relation(this.url,a,b)};a.prototype.reshape=function(a,b,d){return c.reshape(this.url,a,b,d)};a.prototype.simplify=function(a,b){return c.simplify(this.url,a,b)};a.prototype.toGeoCoordinateString=
function(a,b){return c.toGeoCoordinateString(this.url,a,b)};a.prototype.trimExtend=function(a,b){return c.trimExtend(this.url,a,b)};a.prototype.union=function(a,b){return c.union(this.url,a,b)};a.UNIT_METER=9001;a.UNIT_GERMAN_METER=9031;a.UNIT_FOOT=9002;a.UNIT_SURVEY_FOOT=9003;a.UNIT_CLARKE_FOOT=9005;a.UNIT_FATHOM=9014;a.UNIT_NAUTICAL_MILE=9030;a.UNIT_SURVEY_CHAIN=9033;a.UNIT_SURVEY_LINK=9034;a.UNIT_SURVEY_MILE=9035;a.UNIT_KILOMETER=9036;a.UNIT_CLARKE_YARD=9037;a.UNIT_CLARKE_CHAIN=9038;a.UNIT_CLARKE_LINK=
9039;a.UNIT_SEARS_YARD=9040;a.UNIT_SEARS_FOOT=9041;a.UNIT_SEARS_CHAIN=9042;a.UNIT_SEARS_LINK=9043;a.UNIT_BENOIT_1895A_YARD=9050;a.UNIT_BENOIT_1895A_FOOT=9051;a.UNIT_BENOIT_1895A_CHAIN=9052;a.UNIT_BENOIT_1895A_LINK=9053;a.UNIT_BENOIT_1895B_YARD=9060;a.UNIT_BENOIT_1895B_FOOT=9061;a.UNIT_BENOIT_1895B_CHAIN=9062;a.UNIT_BENOIT_1895B_LINK=9063;a.UNIT_INDIAN_FOOT=9080;a.UNIT_INDIAN_1937_FOOT=9081;a.UNIT_INDIAN_1962_FOOT=9082;a.UNIT_INDIAN_1975_FOOT=9083;a.UNIT_INDIAN_YARD=9084;a.UNIT_INDIAN_1937_YARD=9085;
a.UNIT_INDIAN_1962_YARD=9086;a.UNIT_INDIAN_1975_YARD=9087;a.UNIT_FOOT_1865=9070;a.UNIT_RADIAN=9101;a.UNIT_DEGREE=9102;a.UNIT_ARCMINUTE=9103;a.UNIT_ARCSECOND=9104;a.UNIT_GRAD=9105;a.UNIT_GON=9106;a.UNIT_MICRORADIAN=9109;a.UNIT_ARCMINUTE_CENTESIMAL=9112;a.UNIT_ARCSECOND_CENTESIMAL=9113;a.UNIT_MIL6400=9114;a.UNIT_BRITISH_1936_FOOT=9095;a.UNIT_GOLDCOAST_FOOT=9094;a.UNIT_INTERNATIONAL_CHAIN=109003;a.UNIT_INTERNATIONAL_LINK=109004;a.UNIT_INTERNATIONAL_YARD=109001;a.UNIT_STATUTE_MILE=9093;a.UNIT_SURVEY_YARD=
109002;a.UNIT_50KILOMETER_LENGTH=109030;a.UNIT_150KILOMETER_LENGTH=109031;a.UNIT_DECIMETER=109005;a.UNIT_CENTIMETER=109006;a.UNIT_MILLIMETER=109007;a.UNIT_INTERNATIONAL_INCH=109008;a.UNIT_US_SURVEY_INCH=109009;a.UNIT_INTERNATIONAL_ROD=109010;a.UNIT_US_SURVEY_ROD=109011;a.UNIT_US_NAUTICAL_MILE=109012;a.UNIT_UK_NAUTICAL_MILE=109013;a.UNIT_SQUARE_INCHES="esriSquareInches";a.UNIT_SQUARE_FEET="esriSquareFeet";a.UNIT_SQUARE_YARDS="esriSquareYards";a.UNIT_ACRES="esriAcres";a.UNIT_SQUARE_MILES="esriSquareMiles";
a.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters";a.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters";a.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters";a.UNIT_SQUARE_METERS="esriSquareMeters";a.UNIT_ARES="esriAres";a.UNIT_HECTARES="esriHectares";a.UNIT_SQUARE_KILOMETERS="esriSquareKilometers";e.__decorate([f.property()],a.prototype,"url",void 0);return a=e.__decorate([f.subclass("esri.tasks.GeometryService")],a)}(h)});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","./CIMCursor","./CurveHelper"],function(g,f,n,k,l){Object.defineProperty(f,"__esModule",{value:!0});f.GeometryWalker=f.DashPattern=void 0;g=function(){function c(){this._values=[];this._currentValue=this._length=this.ctrlPtGap=this.extPtGap=0}c.prototype.isEmpty=function(){return 0===this._values.length};c.prototype.size=function(){return this._values.length};c.prototype.init=function(a,d,b){void 0===b&&(b=!0);this._setEmpty();if(!a||0===a.length)return!1;for(var m=
0;m<a.length;m++){var c=Math.abs(a[m]);b&&1E-7>c&&(c=1E-7);this._values.push(c);this._length+=c}d&&a.length&1&&(this._length*=2);if(0===this._length)return!1;this.ctrlPtGap=this.extPtGap=0;this._currentValue=-1;return!0};c.prototype.scale=function(a){for(var d=this._values?this._values.length:0,b=0;b<d;++b)this._values[b]*=a;this._length*=a;this.extPtGap*=a;this.ctrlPtGap*=a};c.prototype.addValue=function(a){this._length+=a;this._values.push(a)};c.prototype.firstValue=function(){return this._values[0]};
c.prototype.lastValue=function(){return this._values[this._values.length-1]};c.prototype.nextValue=function(){this._currentValue++;this._currentValue===this._values.length&&(this._currentValue=0);return this._values[this._currentValue]};c.prototype.reset=function(){this._currentValue=-1};c.prototype.length=function(){return this._length};c.prototype._setEmpty=function(){this.extPtGap=this.ctrlPtGap=this._length=0;this._currentValue=-1;this._values.length=0};return c}();f.DashPattern=g;var h=function(){function c(){this.reset()}
c.prototype.reset=function(){this.segment=-1;this.abscissa=this.segmentLength=0;this.isPartEnd=this.isPathEnd=!1};c.prototype.isValid=function(){return-1!==this.segment};c.prototype.copyTo=function(a){a.segment=this.segment;a.segmentLength=this.segmentLength;a.abscissa=this.abscissa;a.isPathEnd=this.isPathEnd;a.isPartEnd=this.isPartEnd};return c}();g=function(c){function a(d,b){void 0===d&&(d=0);void 0===b&&(b=!1);d=c.call(this,d,b)||this;d._tolerance=l.PIXEL_TOLERANCE;d._currentPosition=new h;return d}
n.__extends(a,c);a.prototype.updateTolerance=function(d){this._tolerance=l.PIXEL_TOLERANCE*d};a.prototype.init=function(d,b,a){void 0===a&&(a=!0);a?(this._patternLength=b.length(),this._partExtPtGap=b.extPtGap,this._partCtrlPtGap=b.ctrlPtGap):this._partCtrlPtGap=this._partExtPtGap=this._patternLength=0;this._currentPosition.reset();this._partSegCount=0;this._path=d;this._seg=-1;return this.setPosAtNextPart()};a.prototype.curPositionIsValid=function(){return this._currentPosition.isValid()};a.prototype.nextPosition=
function(d,b){void 0===b&&(b=0);var a=new h;if(!this._nextPosition(d,a,null,b))return!1;a.copyTo(this._currentPosition);return!0};a.prototype.curPointAndAngle=function(d){d.pt=this._getPoint(this._currentPosition);var b=this._getAngle(this._currentPosition),a=b[1];d.ca=b[0];d.sa=a};a.prototype.nextPointAndAngle=function(d,b,a){void 0===a&&(a=0);var c=new h;if(!this._nextPosition(d,c,null,a))return!1;c.copyTo(this._currentPosition);b.pt=this._getPoint(c);d=this._getAngle(c);a=d[1];b.ca=d[0];b.sa=a;
return!0};a.prototype.nextCurve=function(d){if(0===d)return null;var b=[],a=new h;if(!this._nextPosition(d,a,b,1))return null;a.copyTo(this._currentPosition);return b};a.prototype.isPathEnd=function(){return this._currentPosition.isPathEnd};a.prototype.getPathEnd=function(){if(-1===this._currentPosition.segment)throw Error("missing segment");return this._path[this._currentPosition.segment+1]};a.prototype._nextPosition=function(d,b,a,c){if(this._currentPosition.isPathEnd)return!1;var e=this._currentPosition.abscissa;
0<this._currentPosition.segmentLength&&(e/=this._currentPosition.segmentLength);for(this._currentPosition.copyTo(b);b.abscissa+d*this._partLengthRatio>b.segmentLength+this._tolerance;)if(a&&(0===a.length&&(0===e?(e=this._path[b.segment],a.push([e[0],e[1]])):a.push(this.getSegCoord2D(this._path,b.segment,e))),e=this._path[b.segment+1],a.push([e[0],e[1]])),e=0,d-=(b.segmentLength-b.abscissa)/this._partLengthRatio,this._partSegCount)b.segment=this.nextSegment(),b.segmentLength=this.calculateSegLength(this._path,
b.segment),b.abscissa=0,this._partSegCount--;else{if(!this.setPosAtNextPart()){if(0===c)return!1;b.segmentLength=this.calculateSegLength(this._path,b.segment);b.isPartEnd=!0;1===c?(b.abscissa=b.segmentLength,b.isPathEnd=!0):b.abscissa=b.segmentLength+d;return!0}this._currentPosition.copyTo(b)}b.abscissa+=d*this._partLengthRatio;a&&(0===a.length&&(0===e?(e=this._path[b.segment],a.push([e[0],e[1]])):a.push(this.getSegCoord2D(this._path,b.segment,e))),d=b.abscissa/b.segmentLength,1===d?(e=this._path[b.segment+
1],a.push([e[0],e[1]])):a.push(this.getSegCoord2D(this._path,b.segment,d)));!this._partSegCount&&Math.abs(b.abscissa-b.segmentLength)<this._tolerance&&(b.isPathEnd=this._partIsLast,b.isPartEnd=!0);return!0};a.prototype._getPoint=function(a){if(-1===a.segment)throw Error("missing segment");return this.getSegCoord2D(this._path,a.segment,0>=a.segmentLength?0:a.abscissa/a.segmentLength)};a.prototype._getAngle=function(a){if(-1===a.segment)throw Error("missing segment");return this.getSegAngleCS(this._path,
a.segment,0>=a.segmentLength?0:a.abscissa/a.segmentLength)};a.prototype.setPosAtNextPart=function(){for(;this._partSegCount;)this.hasNextSegment()&&this.nextSegment(),this._partSegCount--;if(!this.hasNextSegment())return!1;this._partLength=0;this._partIsLast=!0;for(this._partSegCount=0;this.hasNextSegment();)if(this._partLength+=this.calculateSegLength(this._path,this.nextSegment()),this._partSegCount++,1===k.getId(this._path[this.getEndPointIndex()])){this._partIsLast=!this.hasNextSegment();break}for(var a=
this._partSegCount;a;)this.previousSegment(),--a;this._currentPosition.segment=this.nextSegment();this._currentPosition.segmentLength=this.calculateSegLength(this._path,this._currentPosition.segment);this._currentPosition.abscissa=0;this._currentPosition.isPathEnd=this._currentPosition.isPartEnd=!1;--this._partSegCount;a=this.getStartPointIndex();this._ctrlPtBegin=1===k.getId(this._path[a]);a=a+this._partSegCount+1;a>=this._path.length&&(a=0);this._ctrlPtEnd=1===k.getId(this._path[a]);if(0<this._patternLength){var a=
this._ctrlPtBegin?this._partCtrlPtGap:this._partExtPtGap,b=this._ctrlPtEnd?this._partCtrlPtGap:this._partExtPtGap,c=Math.round((this._partLength-(a+b))/this._patternLength);0>=c&&(c=0<a+b?0:1);this._partLengthRatio=this._partLength/(a+b+c*this._patternLength);.01>this._partLengthRatio&&(this._partLengthRatio=1)}else this._partLengthRatio=1;return!0};a.prototype.hasNextSegment=function(){return this._seg<this._path.length-2};a.prototype.previousSegment=function(){return--this._seg};a.prototype.nextSegment=
function(){return++this._seg};a.prototype.getStartPointIndex=function(){return this._seg};a.prototype.getEndPointIndex=function(){return this._seg+1};return a}(l.CurveHelper);f.GeometryWalker=g});
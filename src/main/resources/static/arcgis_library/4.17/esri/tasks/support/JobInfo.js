// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators ./GPMessage".split(" "),function(k,l,b,e,f,c,g){var h=new e.default({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});
return function(d){function a(a){a=d.call(this,a)||this;a.jobId=null;a.jobStatus=null;a.messages=null;return a}b.__extends(a,d);b.__decorate([c.property()],a.prototype,"jobId",void 0);b.__decorate([c.property({json:{read:h.read}})],a.prototype,"jobStatus",void 0);b.__decorate([c.property({type:[g]})],a.prototype,"messages",void 0);return a=b.__decorate([c.subclass("esri.tasks.support.JobInfo")],a)}(f.JSONSupport)});
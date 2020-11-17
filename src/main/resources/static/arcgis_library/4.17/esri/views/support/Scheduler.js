// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib @dojo/framework/shim/number ../../core/Accessor ../../core/Logger ../../core/maybe ../../core/PooledArray ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../layers/support/PromiseQueue ./debugFlags".split(" "),function(c,e,m,v,w,x,r,n,k,y,t,z,A){function p(a){return a in e.taskPriorities?e.taskPriorities[a]:"number"===typeof a?a:1}var b;Object.defineProperty(e,"__esModule",{value:!0});e.noBudget=e.TaskState=e.TestTaskHandle=e.getTaskPriority=
e.taskPriorities=e.Task=e.newScheduler=void 0;var B=x.getLogger("esri.views.support.Scheduler");e.newScheduler=function(a){return new g.Scheduler(a)};(function(a){a.REMOTE_CLIENT="remote client";a.STREAM_DATA_LOADER="stream data loader";a.ELEVATION_QUERY="elevation query";a.TERRAIN_SURFACE="terrain surface";a.SURFACE_GEOMETRY_UPDATES="surface geometry updates";a.I3S_CONTROLLER="I3S controller";a.POINT_CLOUD_LAYER="point cloud";a.FEATURE_TILE_FETCHER="feature fetcher";a.FEATURE_FETCH_QUEUE="feature fetch queue";
a.GRAPHICS_CORE="Graphics3D";a.LABELER="labeler";a.GRAPHICS_DECONFLICTOR="graphics deconflictor";a.FILTER_VISIBILITY="Graphics3D filter visibility";a.FEATURE_QUERY_ENGINE="feature query";a.SCALE_VISIBILITY="Graphics3D scale visibility";a.FRUSTUM_VISIBILITY="Graphics3D frustum visibility";a.POINT_OF_INTEREST_FREQUENT="POI frequent";a.POINT_OF_INTEREST_INFREQUENT="POI infrequent";a.FEATURE_TILE_TREE="feature tile tree";a.FEATURE_TILE_TREE_ACTIVE="fast feature tile tree";a.ELEVATION_ALIGNMENT="elevation alignment";
a.TEXT_TEXTURE_ATLAS="text texture atlas";a.TEXTURE_UNLOAD="texture unload";a.OVERLAY_MANAGER="overlay manager";a.LINE_OF_SIGHT_TOOL="line of sight tool";a.LINE_OF_SIGHT_TOOL_INTERACTIVE="interactive line of sight tool";a.ELEVATION_PROFILE="elevation profile";a[a.TEST_PRIO=1]="TEST_PRIO"})(c=e.Task||(e.Task={}));e.taskPriorities=(b={},b[c.REMOTE_CLIENT]=1,b[c.STREAM_DATA_LOADER]=1,b[c.FEATURE_FETCH_QUEUE]=1,b[c.ELEVATION_QUERY]=1,b[c.TERRAIN_SURFACE]=2,b[c.SURFACE_GEOMETRY_UPDATES]=2,b[c.I3S_CONTROLLER]=
4,b[c.POINT_CLOUD_LAYER]=4,b[c.FEATURE_TILE_FETCHER]=4,b[c.GRAPHICS_CORE]=6,b[c.LABELER]=6,b[c.GRAPHICS_DECONFLICTOR]=6,b[c.FILTER_VISIBILITY]=8,b[c.FEATURE_QUERY_ENGINE]=8,b[c.SCALE_VISIBILITY]=8,b[c.FRUSTUM_VISIBILITY]=8,b[c.POINT_OF_INTEREST_FREQUENT]=6,b[c.POINT_OF_INTEREST_INFREQUENT]=30,b[c.FEATURE_TILE_TREE]=16,b[c.FEATURE_TILE_TREE_ACTIVE]=1,b[c.ELEVATION_ALIGNMENT]=12,b[c.TEXT_TEXTURE_ATLAS]=12,b[c.TEXTURE_UNLOAD]=12,b[c.OVERLAY_MANAGER]=12,b[c.LINE_OF_SIGHT_TOOL]=16,b[c.LINE_OF_SIGHT_TOOL_INTERACTIVE]=
1,b);e.getTaskPriority=p;b=function(){function a(){}a.prototype.remove=function(){};a.prototype.schedule=function(a){return k.when(a())};a.prototype.reschedule=function(a){return k.when(a())};return a}();e.TestTaskHandle=b;var u=1E3/30,g;(function(a){var b=function(){function a(a){var d=this;this._now=a;this._budget=null;this._state=1;this._tasks=new n;this._runQueue=new n;this._load=0;this._idleStateCallbacks=new n;this._idleUpdatesStartFired=!1;this._maxReschedule=q;this._forceTask=!1;this._safetyBudget=
0;this._debug=!1;this._debugHandle=y.init(A,"SCHEDULER_LOG_SLOW_TASKS",function(a){return d._debug=a});this._budget=new g(a);var l=this,b;this._test={get state(){return r.isNone(b)?l._state:b},set state(a){b=a},FRAME_SAFETY_BUDGET:5,INTERACTING_BUDGET:u,IDLE_BUDGET:100,get budget(){return l._budget.budget},usedBudget:0,startTime:0,updateTask:function(a){return d._updateTask(a)},getState:function(a){return d._getState(a)},getRuntime:function(a){return d._getRuntime(a)}}}a.prototype.destroy=function(){this._debugHandle&&
this._debugHandle.remove()};a.prototype.registerTask=function(a,f,b){var d=p(a);a=new c(this,a,f,b,d);this._tasks.push(a);return a};a.prototype.registerIdleStateCallbacks=function(a,f){var d=this,b={idleBegin:a,idleEnd:f};this._idleStateCallbacks.push(b);2===this.state&&this._idleUpdatesStartFired&&b.idleBegin();var c=this;return{remove:function(){return d._removeIdleStateCallbacks(b)},set idleBegin(a){c._idleUpdatesStartFired&&(b.idleEnd(),2===c._state&&a());b.idleBegin=a},set idleEnd(a){b.idleEnd=
a}}};Object.defineProperty(a.prototype,"now",{get:function(){return this._now()},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"load",{get:function(){return this._load},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"state",{get:function(){return r.isNone(this._test.state)?this._state:this._test.state},set:function(a){this._state!==a&&(this._state=a,2!==this.state&&this._idleUpdatesStartFired&&(this._idleUpdatesStartFired=!1,this._idleStateCallbacks.forEachSimple(function(a){return a.idleEnd()})))},
enumerable:!1,configurable:!0});a.prototype.updateBudget=function(a){this._test.usedBudget=0;this._test.startTime=a.elapsedFrameTime;this._safetyBudget=5;var d=a.frameDuration,b=1;switch(this.state){case 2:this._safetyBudget=0;d=Math.max(100,a.frameDuration);b=30;break;case 1:d=Math.max(u,a.frameDuration)}d-=a.elapsedFrameTime+this._safetyBudget;if(2!==this.state&&0>d&&!this._forceTask)return this._forceTask=!0,!1;d=Math.max(d,b);this._budget.reset(d,this.state);this._maxReschedule=q;this._updateLoad();
return this._schedule()};a.prototype.frame=function(){this._forceTask=!1;switch(this.state){case 2:this._idleUpdatesStartFired||(this._idleUpdatesStartFired=!0,this._idleStateCallbacks.forEachSimple(function(a){return a.idleBegin()}));this._runIdle();break;case 1:this._runInteracting();break;default:this._runAnimating()}this._test.usedBudget=this._budget.elapsed};a.prototype._removeIdleStateCallbacks=function(a){this._idleUpdatesStartFired&&a.idleEnd();this._idleStateCallbacks.removeUnordered(a)};
a.prototype.removeTask=function(a){this._tasks.removeUnordered(a);this._runQueue.removeUnordered(a)};a.prototype._updateTask=function(a){this._tasks.forEachSimple(function(d){d.name===a&&d.setPriority(a)})};a.prototype._getState=function(a){if(this._runQueue.some(function(d){return d.name===a}))return h.SCHEDULED;var d=h.IDLE;this._tasks.forEachSimple(function(b){b.name===a&&b.needsUpdate&&(1>=b.schedulePriority?d=h.READY:d!==h.READY&&(d=h.WAITING))});return d};a.prototype._getRuntime=function(a){var d=
0;this._tasks.forEachSimple(function(b){b.name===a&&(d+=b.runtime)});return d};a.prototype._runIdle=function(){this._run()};a.prototype._runInteracting=function(){this._run()};a.prototype._runAnimating=function(){this._run()};a.prototype._updateLoad=function(){var a=this._tasks.reduce(function(a,d){return d.needsUpdate?++a:a},0);this._load=.9*this._load+a*(1-.9)};a.prototype._schedule=function(){var a=this;if(0>=this._maxReschedule)return!1;this._runQueue.filterInPlace(function(a){if(a.needsUpdate)return!0;
a.schedulePriority=a.priority;return!1});for(var b=function(){var d=!1,b=0;c._tasks.forEachSimple(function(c){if(0!==c.schedulePriority&&c.needsUpdate)switch(d=!0,b=Math.max(b,c.priority),c.schedulePriority){case 1:c.schedulePriority=0;a._runQueue.push(c);break;default:--c.schedulePriority}});if(!d)return{value:!1};c._maxReschedule===q&&(c._maxReschedule=b);--c._maxReschedule},c=this;0===this._runQueue.length;){var e=b();if("object"===typeof e)return e.value}return!0};a.prototype._run=function(){do for(;0<
this._runQueue.length;){var a=this._runQueue.pop();this._budget.resetProgress();var b=this._budget.now();try{a.processQueue(this._budget),!this._budget.done&&a.needsUpdate&&a.update(this._budget)}catch(l){B.error('Exception in task "'+a.name+'"',l)}a.schedulePriority=a.priority;a.runtime+=this._budget.now()-b;this._debug&&this._budget.elapsed>2*this._budget.budget&&console.log("Task",a.name,"used",this._budget.elapsed,"of max",this._budget.budget,"ms");if(0>=this._budget.remaining)return}while(this._schedule())};
Object.defineProperty(a.prototype,"test",{get:function(){return this._test},enumerable:!1,configurable:!0});return a}();a.Scheduler=b;var c=function(a){function b(b,c,d,e,C){var f=a.call(this,{})||this;f._scheduler=b;f.name=c;f.update=d;f._needsUpdateCB=e;f._priority=C;f.runtime=0;f._queue=new z.default;f.updating=!1;f.schedulePriority=f._priority;return f}m.__extends(b,a);b.prototype.normalizeCtorArgs=function(){return{}};b.prototype.remove=function(){this.processQueue(e.noBudget);this._scheduler.removeTask(this)};
Object.defineProperty(b.prototype,"priority",{get:function(){return this._priority},enumerable:!1,configurable:!0});b.prototype.setPriority=function(a){this.name=a;this._priority=p(a);0!==this.schedulePriority&&(this.schedulePriority=this._priority)};Object.defineProperty(b.prototype,"task",{get:function(){return this.name},set:function(a){this.setPriority(a)},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"needsUpdate",{get:function(){return 0<this._queue.length||this._needsUpdateCB()},
enumerable:!1,configurable:!0});b.prototype.schedule=function(a,b){this.updating=!0;return this._queue.push(function(){k.throwIfAborted(b);return a()})};b.prototype.reschedule=function(a,b){this.updating=!0;return this._queue.unshift(function(){k.throwIfAborted(b);return a()})};b.prototype.processQueue=function(a){for(;!a.done&&this._queue.process();)a.madeProgress();0===this._queue.length&&(this.updating=!1)};m.__decorate([t.property()],b.prototype,"updating",void 0);return b=m.__decorate([t.subclass("esri.views.support.SchedulerTask")],
b)}(w),g=function(){function a(a){this.now=a;this._budget=this._begin=0;this._state=2;this._didWork=!1;this._enabled=!0}a.prototype.run=function(a){if(this.done)return!1;!0===a()&&(this._didWork=!0);return!0};Object.defineProperty(a.prototype,"done",{get:function(){return this._didWork&&this.elapsed>=this._budget&&this._enabled},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"budget",{get:function(){return this._budget},enumerable:!1,configurable:!0});a.prototype.madeProgress=function(){this._didWork=
!0};Object.defineProperty(a.prototype,"state",{get:function(){return this._state},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"enabled",{get:function(){return this._enabled},set:function(a){this._enabled=a},enumerable:!1,configurable:!0});a.prototype.reset=function(a,b){this._begin=this.now();this._budget=a;this._state=b;this._didWork=!1};Object.defineProperty(a.prototype,"remaining",{get:function(){return Math.max(this._budget-this.elapsed,0)},enumerable:!1,configurable:!0});
Object.defineProperty(a.prototype,"elapsed",{get:function(){return this.now()-this._begin},enumerable:!1,configurable:!0});a.prototype.resetProgress=function(){this._didWork=!1};Object.defineProperty(a.prototype,"hasProgressed",{get:function(){return this._didWork},enumerable:!1,configurable:!0});return a}();a.Budget=g})(g||(g={}));var h;(function(a){a.SCHEDULED="s";a.READY="r";a.WAITING="w";a.IDLE="i"})(h=e.TaskState||(e.TaskState={}));e.noBudget=function(){var a=new g.Budget(function(){return performance.now()});
a.enabled=!1;return a}();var q=v.MAX_SAFE_INTEGER});
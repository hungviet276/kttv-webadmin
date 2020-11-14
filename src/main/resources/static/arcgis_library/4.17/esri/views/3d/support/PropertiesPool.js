// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/ReentrantObjectPool","../../../core/accessorSupport/watch"],function(d,a,k,g){Object.defineProperty(a,"__esModule",{value:!0});a.PropertiesPool=void 0;d=function(){function a(f,b){var c=this;this.owner=b;this.properties={};this.afterDispatchHandle=null;for(var a in f)b=new k.ReentrantObjectPool(f[a],null,null,2,2),this.properties[a]={pool:b,acquired:[]};this.afterDispatchHandle=g.afterDispatch(function(){return c.release()})}a.prototype.destroy=function(){this.afterDispatchHandle&&
(this.afterDispatchHandle.remove(),this.afterDispatchHandle=null);for(var f in this.properties){for(var b=this.properties[f],c=0,a=b.acquired;c<a.length;c++){var e=a[c];g.isValueInUse(e)||b.pool.release(e)}b.pool.destroy();b.pool=null;b.acquired=null}this.owner=this.properties=null};a.prototype.get=function(a){var b=this.owner._get(a);a=this.properties[a];var c=a.pool.acquire();for(a.acquired.push(c);c===b;)a.acquired.push(c),c=a.pool.acquire();return c};a.prototype.release=function(){for(var a in this.properties){for(var b=
this.properties[a],c=0,d=0,e=b.acquired;d<e.length;d++){var h=e[d];g.isValueInUse(h)?b.acquired[c++]=h:b.pool.release(h)}b.acquired.length=c}};return a}();a.PropertiesPool=d;a.default=d});
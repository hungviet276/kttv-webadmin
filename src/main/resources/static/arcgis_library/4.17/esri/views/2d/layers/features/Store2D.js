// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/has ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/accessorSupport/diffUtils ../../../../support/arcadeOnDemand ../../arcade/callExpressionWithCursor @dojo/framework/shim/Promise".split(" "),function(p,l,e,q,r,t,m,u,v){Object.defineProperty(l,"__esModule",{value:!0});l.Store2D=void 0;var w=new Promise(function(e,f){p(["../../../../layers/support/labelFormatUtils"],e,f)}),x=function(){function a(f,b){this._canCacheExpressionValue=
!1;this._sourceInfo=f;this._bitsets={computed:b.getBitset(b.createBitset())}}a.prototype.updateSchema=function(f,b){return e.__awaiter(this,void 0,void 0,function(){var c,g,d,h,n,k,a;return e.__generator(this,function(e){switch(e.label){case 0:c=m.diff(this._schema,b);this._schema=b;if(!b||r.isNone(c)||!m.hasDiff(c,"attributes"))return[2];q("esri-2d-update-debug")&&console.debug("Applying Update - Store:",c);this._bitsets.computed.clear();f.targets[b.name]=!0;g=b.attributes;d=[];h=[];for(n in g)switch(k=
g[n],k.type){case "expression":d.push(this._createArcadeComputedField(k));break;case "label-expression":d.push(this._createLabelArcadeComputedField(k));break;case "statistic":h.push(k)}a=this;return[4,t.all(d)];case 1:return a._computedFields=e.sent(),this._canCacheExpressionValue=!this._computedFields.some(function(b){return"expression"===b.type&&b.expression.referencesScale()}),this._statisticFields=h,[2]}})})};a.prototype.setComputedAttributes=function(f,b,c,e){var d=this._bitsets.computed;if(!this._canCacheExpressionValue||
!d.has(c)){d.set(c);for(var d=0,h=this._computedFields;d<h.length;d++){var a=h[d],g=this._evaluateField(b,a,e);switch(a.resultType){case "numeric":f.setComputedNumericAtIndex(c,a.fieldIndex,g);break;case "string":f.setComputedStringAtIndex(c,a.fieldIndex,g)}}}};a.prototype._createArcadeComputedField=function(f){return e.__awaiter(this,void 0,void 0,function(){var b,c,a,d;return e.__generator(this,function(h){switch(h.label){case 0:return b=this._sourceInfo.spatialReference,c=this._sourceInfo.fieldsIndex,
a=[e.__assign({},f)],d={},[4,u.createRendererExpression(f.valueExpression,b,c)];case 1:return[2,e.__assign.apply(void 0,a.concat([(d.expression=h.sent(),d)]))]}})})};a.prototype._createLabelArcadeComputedField=function(f){return e.__awaiter(this,void 0,void 0,function(){var b,a,g,d;return e.__generator(this,function(c){switch(c.label){case 0:return b=this._sourceInfo.spatialReference,a=this._sourceInfo.fields,[4,w];case 1:return g=c.sent().createLabelFunction,[4,g(f.label,a,b)];case 2:return d=c.sent(),
[2,e.__assign(e.__assign({},f),{builder:d})]}})})};a.prototype._evaluateField=function(a,b,c){switch(b.type){case "label-expression":return a=a.readArcadeFeature(),b.builder.evaluate(a)||"";case "expression":return v.default(b.expression,a,{$view:{scale:c}})}};return a}();l.Store2D=x});
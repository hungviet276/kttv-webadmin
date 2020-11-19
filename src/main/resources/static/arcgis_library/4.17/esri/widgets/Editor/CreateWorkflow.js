// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/maybe ../../core/accessorSupport/decorators ./CreateWorkflowData ./Edits ./Workflow ./workflowUtils".split(" "),function(w,x,a,n,q,r,t,u,m){function v(a){if(1!==a.length)return null;a=a[0];if("items"in a){if(1===a.items.length)return a.items[0]}else return a;return null}return function(f){function c(a){a=f.call(this,a)||this;a.type="create";return a}a.__extends(c,f);d=c;c.create=function(a,c,b){a=new r({edits:new t,viewModel:a});b=new d({data:a,afterCommit:b});
b._set("steps",this._createWorkflowSteps(b,c));return b};c._createWorkflowSteps=function(c,d){void 0===d&&(d="awaiting-feature-creation-info");var b=c.data,h=c.handles,f={"awaiting-feature-creation-info":function(){return{id:"awaiting-feature-creation-info",setUp:function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){b.creationInfo=null;h.add(b.viewModel.featureTemplatesViewModel.on("select",function(a){a=a.item;b.creationInfo={layer:a.layer,template:a.template};
b.viewModel.activeWorkflow.next()}),this.id);return[2]})})},tearDown:function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){h.remove(this.id);return[2]})})}}},"awaiting-feature-to-create":function(){return{id:"awaiting-feature-to-create",setUp:function(){return a.__awaiter(this,void 0,void 0,function(){var c,e;return a.__generator(this,function(a){switch(a.label){case 0:return e=(c=h).add,[4,m.setUpFeatureAdd(b.viewModel.sketchViewModel,b.creationInfo,b.viewModel.view,
function(a){b.edits.feature=a;b.viewModel.activeWorkflow.next()})];case 1:return e.apply(c,[a.sent(),this.id]),[2]}})})},tearDown:function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){h.remove(this.id);return[2]})})}}},"editing-new-feature":function(){return{id:"editing-new-feature",setUp:function(){return a.__awaiter(this,void 0,void 0,function(){var c,e,d,f,k,g,l,p;return a.__generator(this,function(a){switch(a.label){case 0:return c=b.edits.feature,e=
b.viewModel,f=(d=m.findLayerInfo(e.layerInfos,c.layer))&&d.fieldConfig,e.featureFormViewModel.set({feature:c,fieldConfig:f}),k=m.getVisualVariableAttributes(c),[4,m.setUpGeometryUpdate(c,k,e.sketchViewModel,e.view,function(a){var c=a.geometry;a=a.attributes;if(n.isSome(k.rotation)){var d=k.rotation.field;e.featureFormViewModel.setValue(d,a[d])}n.isSome(k.size)&&(d=k.size.field,e.featureFormViewModel.setValue(d,a[d]));b.edits.updateAttributes(a);b.edits.updateGeometry(c)})];case 1:return g=a.sent(),
l=g.interactive,p=g.visual,h.add([b.viewModel.featureFormViewModel.on("value-change",function(){b.edits.updateAttributes(b.viewModel.featureFormViewModel.getValues());c.attributes=b.edits.feature.attributes}),l,p],this.id),[2]}})})},tearDown:function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){b.edits.feature=null;b.viewModel.featureFormViewModel.set({feature:null,fieldConfig:null});h.remove(this.id);return[2]})})}}}},l=!1;c=["awaiting-feature-creation-info",
"awaiting-feature-to-create","editing-new-feature"].filter(function(a){return l?!0:l=a===d}).map(function(a){return f[a]()});b.viewModel.refreshCreationTemplates();var g=v(b.viewModel.featureTemplatesViewModel.items);"awaiting-feature-creation-info"===c[0].id&&g&&(b.creationInfo={layer:g.layer,template:g.template},c.shift());return c};var d;return c=d=a.__decorate([q.subclass("esri.widgets.Editor.CreateWorkflow")],c)}(u)});
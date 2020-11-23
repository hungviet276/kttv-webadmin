//>>built
require({cache:{"url:dojox/layout/resources/GridContainer.html":'\x3cdiv id\x3d"${id}" class\x3d"gridContainer" dojoAttachPoint\x3d"containerNode" tabIndex\x3d"0" dojoAttachEvent\x3d"onkeypress:_selectFocus"\x3e\r\n\t\x3cdiv dojoAttachPoint\x3d"gridContainerDiv"\x3e\r\n\t\t\x3ctable class\x3d"gridContainerTable" dojoAttachPoint\x3d"gridContainerTable" cellspacing\x3d"0" cellpadding\x3d"0"\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr dojoAttachPoint\x3d"gridNode" \x3e\r\n\t\t\t\t\t\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/kernel dojo/text!./resources/GridContainer.html dojo/_base/declare dojo/query dojo/_base/sniff dojo/dom-class dojo/dom-style dojo/dom-geometry dojo/dom-construct dojo/dom-attr dojo/_base/array dojo/_base/lang dojo/_base/event dojo/keys dojo/topic dijit/registry dijit/focus dijit/_base/focus dijit/_WidgetBase dijit/_TemplatedMixin dijit/layout/_LayoutWidget dojo/_base/NodeList dojox/mdnd/AreaManager dojox/mdnd/DropIndicator dojox/mdnd/dropMode/OverDropMode dojox/mdnd/AutoScroll".split(" "),
function(K,B,C,z,m,D,x,l,y,v,p,u,w,k,A,q,r,E,F,G,H,I,J){var t=C("dojox.layout.GridContainerLite",[H,G],{autoRefresh:!0,templateString:B,dragHandleClass:"dojoxDragHandle",nbZones:1,doLayout:!0,isAutoOrganized:!0,acceptTypes:[],colWidths:"",constructor:function(a,b){this.acceptTypes=(a||{}).acceptTypes||["text"];this._disabled=!0},postCreate:function(){this.inherited(arguments);this._grid=[];this._createCells();this.subscribe("/dojox/mdnd/drop","resizeChildAfterDrop");this.subscribe("/dojox/mdnd/drag/start",
"resizeChildAfterDragStart");this._dragManager=J.areaManager();this._dragManager.autoRefresh=this.autoRefresh;this._dragManager.dragHandleClass=this.dragHandleClass;this.doLayout?this._border={h:m("ie")?l.getBorderExtents(this.gridContainerTable).h:0,w:6==m("ie")?1:0}:(x.set(this.domNode,"overflowY","hidden"),x.set(this.gridContainerTable,"height","auto"))},startup:function(){this._started||(this.isAutoOrganized?this._organizeChildren():this._organizeChildrenManually(),p.forEach(this.getChildren(),
function(a){a.startup()}),this._isShown()&&this.enableDnd(),this.inherited(arguments))},resizeChildAfterDrop:function(a,b,c){return this._disabled?!1:q.getEnclosingWidget(b.node)==this?(b=q.byNode(a),b.resize&&u.isFunction(b.resize)&&b.resize(),b.set("column",a.parentNode.cellIndex),this.doLayout&&(a=this._contentBox.h,l.getContentBox(this.gridContainerDiv).h>=a&&x.set(this.gridContainerTable,"height",a-this._border.h+"px")),!0):!1},resizeChildAfterDragStart:function(a,b,c){return this._disabled?
!1:q.getEnclosingWidget(b.node)==this?(this._draggedNode=a,this.doLayout&&l.setMarginBox(this.gridContainerTable,{h:l.getContentBox(this.gridContainerDiv).h-this._border.h}),!0):!1},getChildren:function(){var a=new I;p.forEach(this._grid,function(b){z("\x3e [widgetId]",b.node).map(q.byNode).forEach(function(b){a.push(b)})});return a},_isShown:function(){if("open"in this)return this.open;var a=this.domNode;return"none"!=a.style.display&&"hidden"!=a.style.visibility&&!D.contains(a,"dijitHidden")},layout:function(){if(this.doLayout){var a=
this._contentBox;l.setMarginBox(this.gridContainerTable,{h:a.h-this._border.h});l.setContentSize(this.domNode,{w:a.w-this._border.w})}p.forEach(this.getChildren(),function(a){a.resize&&u.isFunction(a.resize)&&a.resize()})},onShow:function(){this._disabled&&this.enableDnd()},onHide:function(){this._disabled||this.disableDnd()},_createCells:function(){0===this.nbZones&&(this.nbZones=1);for(var a=this.acceptTypes.join(","),b=0,c=this._computeColWidth();b<this.nbZones;)this._grid.push({node:y.create("td",
{"class":"gridContainerZone",accept:a,id:this.id+"_dz"+b,style:{width:c[b]+"%"}},this.gridNode)}),b++},_getZonesAttr:function(){return z(".gridContainerZone",this.containerNode)},enableDnd:function(){var a=this._dragManager;p.forEach(this._grid,function(b){a.registerByNode(b.node)});a._dropMode.updateAreas(a._areaList);this._disabled=!1},disableDnd:function(){var a=this._dragManager;p.forEach(this._grid,function(b){a.unregister(b.node)});a._dropMode.updateAreas(a._areaList);this._disabled=!0},_organizeChildren:function(){for(var a=
t.superclass.getChildren.call(this),b=this.nbZones,c=Math.floor(a.length/b),d=a.length%b,f=0,h=0;h<b;h++){for(var e=0;e<c;e++)this._insertChild(a[f],h),f++;if(0<d){try{this._insertChild(a[f],h),f++}catch(g){console.error("Unable to insert child in GridContainer",g)}d--}else if(0===c)break}},_organizeChildrenManually:function(){for(var a=t.superclass.getChildren.call(this),b=a.length,c,d=0;d<b;d++){c=a[d];try{this._insertChild(c,c.column-1)}catch(f){console.error("Unable to insert child in GridContainer",
f)}}},_insertChild:function(a,b,c){var d=this._grid[b].node,f=d.childNodes.length;if("undefined"===typeof c||c>f)c=f;this._disabled?(y.place(a.domNode,d,c),v.set(a.domNode,"tabIndex","0")):a.dragRestriction?(y.place(a.domNode,d,c),v.set(a.domNode,"tabIndex","0")):this._dragManager.addDragItem(d,a.domNode,c,!0);a.set("column",b);return a},removeChild:function(a){this._disabled?this.inherited(arguments):this._dragManager.removeDragItem(a.domNode.parentNode,a.domNode)},addService:function(a,b,c){kernel.deprecated("addService is deprecated.",
"Please use  instead.","Future");this.addChild(a,b,c)},addChild:function(a,b,c){a.domNode.id=a.id;t.superclass.addChild.call(this,a,0);if(0>b||void 0===b)b=0;0>=c&&(c=0);try{return this._insertChild(a,b,c)}catch(d){console.error("Unable to insert child in GridContainer",d)}return null},_setColWidthsAttr:function(a){this.colWidths=u.isString(a)?a.split(","):u.isArray(a)?a:[a];this._started&&this._updateColumnsWidth()},_updateColumnsWidth:function(a){a=this._grid.length;for(var b=this._computeColWidth(),
c=0;c<a;c++)this._grid[c].node.style.width=b[c]+"%"},_computeColWidth:function(){var a=this.colWidths||[],b=[],c,d=0,f;for(f=0;f<this.nbZones;f++)b.length<a.length?(d+=1*a[f],b.push(a[f])):(c||(c=(100-d)/(this.nbZones-f),0>c&&(c=100/this.nbZones)),b.push(c),d+=1*c);if(100<d)for(a=100/d,f=0;f<b.length;f++)b[f]*=a;return b},_selectFocus:function(a){if(!this._disabled){var b=a.keyCode,c=null,d=E.getFocus().node,f=this._dragManager,h,e,g;if(d==this.containerNode)switch(d=this.gridNode.childNodes,b){case k.DOWN_ARROW:case k.RIGHT_ARROW:h=
!1;for(e=0;e<d.length;e++){b=d[e].childNodes;for(g=0;g<b.length;g++)if(c=b[g],null!==c&&"none"!=c.style.display){r.focus(c);w.stop(a);h=!0;break}if(h)break}break;case k.UP_ARROW:case k.LEFT_ARROW:for(d=this.gridNode.childNodes,h=!1,e=d.length-1;0<=e;e--){b=d[e].childNodes;for(g=b.length;0<=g;g--)if(c=b[g],null!==c&&"none"!=c.style.display){r.focus(c);w.stop(a);h=!0;break}if(h)break}}else if(d.parentNode.parentNode==this.gridNode){var n=b==k.UP_ARROW||b==k.LEFT_ARROW?"lastChild":"firstChild";g=b==
k.UP_ARROW||b==k.LEFT_ARROW?"previousSibling":"nextSibling";switch(b){case k.UP_ARROW:case k.DOWN_ARROW:w.stop(a);h=!1;for(var l=d;!h;){b=l.parentNode.childNodes;for(e=c=0;e<b.length&&!("none"!=b[e].style.display&&c++,1<c);e++);if(1==c)return;c=null===l[g]?l.parentNode[n]:l[g];"none"===c.style.display?l=c:h=!0}if(a.shiftKey){a=d.parentNode;for(e=0;e<this.gridNode.childNodes.length&&a!=this.gridNode.childNodes[e];e++);b=this.gridNode.childNodes[e].childNodes;for(g=0;g<b.length&&c!=b[g];g++);(m("mozilla")||
m("webkit"))&&e--;c=q.byNode(d);c.dragRestriction?A.publish("/dojox/layout/gridContainer/moveRestriction",this):(f=f.removeDragItem(a,d),this.addChild(c,e,g),v.set(d,"tabIndex","0"),r.focus(d))}else r.focus(c);break;case k.RIGHT_ARROW:case k.LEFT_ARROW:if(w.stop(a),a.shiftKey){a=0;if(null===d.parentNode[g])m("ie")&&b==k.LEFT_ARROW&&(a=this.gridNode.childNodes.length-1);else if(3==d.parentNode[g].nodeType)a=this.gridNode.childNodes.length-2;else{for(e=0;e<this.gridNode.childNodes.length&&d.parentNode[g]!=
this.gridNode.childNodes[e];e++)a++;(m("mozilla")||m("webkit"))&&a--}c=q.byNode(d);n=d.getAttribute("dndtype");n=null===n?c&&c.dndType?c.dndType.split(/\s*,\s*/):["text"]:n.split(/\s*,\s*/);h=!1;for(e=0;e<this.acceptTypes.length;e++)for(g=0;g<n.length;g++)if(n[g]==this.acceptTypes[e]){h=!0;break}if(h&&!c.dragRestriction){e=d.parentNode;g=0;if(k.LEFT_ARROW==b){b=a;if(m("mozilla")||m("webkit"))b=a+1;g=this.gridNode.childNodes[b].childNodes.length}f=f.removeDragItem(e,d);this.addChild(c,a,g);v.set(f,
"tabIndex","0");r.focus(f)}else A.publish("/dojox/layout/gridContainer/moveRestriction",this)}else{for(d=d.parentNode;null===c;)if(d=null!==d[g]&&3!==d[g].nodeType?d[g]:"previousSibling"===g?d.parentNode.childNodes[d.parentNode.childNodes.length-1]:d.parentNode.childNodes[m("ie")?0:1],(c=d[n])&&"none"==c.style.display){b=c.parentNode.childNodes;f=null;if("previousSibling"==g)for(e=b.length-1;0<=e;e--){if("none"!=b[e].style.display){f=b[e];break}}else for(e=0;e<b.length;e++)if("none"!=b[e].style.display){f=
b[e];break}f?c=f:(d=c,d=d.parentNode,c=null)}r.focus(c)}}}}},destroy:function(){var a=this._dragManager;p.forEach(this._grid,function(b){a.unregister(b.node)});this.inherited(arguments)}});t.ChildWidgetProperties={column:"1",dragRestriction:!1};u.extend(F,t.ChildWidgetProperties);return t});
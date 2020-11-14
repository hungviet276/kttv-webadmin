//>>built
require({cache:{"url:dijit/layout/templates/AccordionButton.html":"\x3cdiv data-dojo-attach-event\x3d'ondijitclick:_onTitleClick' class\x3d'dijitAccordionTitle' role\x3d\"presentation\"\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d'titleNode,focusNode' data-dojo-attach-event\x3d'onkeydown:_onTitleKeyDown'\r\n\t\t\tclass\x3d'dijitAccordionTitleFocus' role\x3d\"tab\" aria-expanded\x3d\"false\"\r\n\t\t\x3e\x3cspan class\x3d'dijitInline dijitAccordionArrow' role\x3d\"presentation\"\x3e\x3c/span\r\n\t\t\x3e\x3cspan class\x3d'arrowTextUp' role\x3d\"presentation\"\x3e+\x3c/span\r\n\t\t\x3e\x3cspan class\x3d'arrowTextDown' role\x3d\"presentation\"\x3e-\x3c/span\r\n\t\t\x3e\x3cspan role\x3d\"presentation\" class\x3d\"dijitInline dijitIcon\" data-dojo-attach-point\x3d\"iconNode\"\x3e\x3c/span\x3e\r\n\t\t\x3cspan role\x3d\"presentation\" data-dojo-attach-point\x3d'titleTextNode, textDirNode' class\x3d'dijitAccordionText'\x3e\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e\r\n"}});
define("require dojo/_base/array dojo/_base/declare dojo/_base/fx dojo/dom dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/keys dojo/_base/lang dojo/sniff dojo/topic ../focus ../_base/manager dojo/ready ../_Widget ../_Container ../_TemplatedMixin ../_CssStateMixin ./StackContainer ./ContentPane dojo/text!./templates/AccordionButton.html ../a11yclick".split(" "),function(w,n,f,x,y,p,z,g,h,e,k,m,q,A,B,C,t,G,D,u,E,H,F){function v(a,b){a.resize?a.resize(b):h.setMarginBox(a.domNode,
b)}q=f("dijit.layout._AccordionButton",[t,D,u],{templateString:F,label:"",_setLabelAttr:{node:"titleTextNode",type:"innerHTML"},title:"",_setTitleAttr:{node:"titleTextNode",type:"attribute",attribute:"title"},iconClassAttr:"",_setIconClassAttr:{node:"iconNode",type:"class"},baseClass:"dijitAccordionTitle",getParent:function(){return this.parent},buildRendering:function(){this.inherited(arguments);var a=this.id.replace(" ","_");p.set(this.titleTextNode,"id",a+"_title");this.focusNode.setAttribute("aria-labelledby",
p.get(this.titleTextNode,"id"));y.setSelectable(this.domNode,!1)},getTitleHeight:function(){return h.getMarginSize(this.domNode).h},_onTitleClick:function(){this.getParent().selectChild(this.contentWidget,!0);A.focus(this.focusNode)},_onTitleKeyDown:function(a){return this.getParent()._onKeyDown(a,this.contentWidget)},_setSelectedAttr:function(a){this._set("selected",a);this.focusNode.setAttribute("aria-expanded",a?"true":"false");this.focusNode.setAttribute("aria-selected",a?"true":"false");this.focusNode.setAttribute("tabIndex",
a?"0":"-1")}});m("dojo-bidi")&&q.extend({_setLabelAttr:function(a){this._set("label",a);p.set(this.titleTextNode,"innerHTML",a);this.applyTextDir(this.titleTextNode)},_setTitleAttr:function(a){this._set("title",a);p.set(this.titleTextNode,"title",a);this.applyTextDir(this.titleTextNode)}});var r=f("dijit.layout._AccordionInnerContainer"+(m("dojo-bidi")?"_NoBidi":""),[t,u],{baseClass:"dijitAccordionInnerContainer",isLayoutContainer:!0,buildRendering:function(){this.domNode=g.place("\x3cdiv class\x3d'"+
this.baseClass+"' role\x3d'presentation'\x3e",this.contentWidget.domNode,"after");var a=this.contentWidget,b=k.isString(this.buttonWidget)?k.getObject(this.buttonWidget):this.buttonWidget;this.button=a._buttonWidget=(new b({contentWidget:a,label:a.title,title:a.tooltip,dir:a.dir,lang:a.lang,textDir:a.textDir||this.textDir,iconClass:a.iconClass,id:a.id+"_button",parent:this.parent})).placeAt(this.domNode);this.containerNode=g.place("\x3cdiv class\x3d'dijitAccordionChildWrapper' role\x3d'tabpanel' style\x3d'display:none'\x3e",
this.domNode);this.containerNode.setAttribute("aria-labelledby",this.button.id);g.place(this.contentWidget.domNode,this.containerNode)},postCreate:function(){this.inherited(arguments);var a=this.button,b=this.contentWidget;this._contentWidgetWatches=[b.watch("title",k.hitch(this,function(b,d,l){a.set("label",l)})),b.watch("tooltip",k.hitch(this,function(b,d,l){a.set("title",l)})),b.watch("iconClass",k.hitch(this,function(b,d,l){a.set("iconClass",l)}))]},_setSelectedAttr:function(a){this._set("selected",
a);this.button.set("selected",a);if(a&&(a=this.contentWidget,a.onSelected))a.onSelected()},startup:function(){this.contentWidget.startup()},destroy:function(){this.button.destroyRecursive();n.forEach(this._contentWidgetWatches||[],function(a){a.unwatch()});delete this.contentWidget._buttonWidget;delete this.contentWidget._wrapperWidget;this.inherited(arguments)},destroyDescendants:function(a){this.contentWidget.destroyRecursive(a)}});m("dojo-bidi")&&(r=f("dijit.layout._AccordionInnerContainer",r,
{postCreate:function(){this.inherited(arguments);var a=this.button;this._contentWidgetWatches.push(this.contentWidget.watch("textDir",function(b,c,d){a.set("textDir",d)}))}}));f=f("dijit.layout.AccordionContainer",E,{duration:B.defaultDuration,buttonWidget:q,baseClass:"dijitAccordionContainer",buildRendering:function(){this.inherited(arguments);this.domNode.style.overflow="hidden";this.domNode.setAttribute("role","tablist")},startup:function(){this._started||(this.inherited(arguments),this.selectedChildWidget&&
this.selectedChildWidget._wrapperWidget.set("selected",!0))},layout:function(){var a=this.selectedChildWidget;if(a){var b=a._wrapperWidget.domNode,c=h.getMarginExtents(b),b=h.getPadBorderExtents(b),d=a._wrapperWidget.containerNode,l=h.getMarginExtents(d),d=h.getPadBorderExtents(d),f=this._contentBox,e=0;n.forEach(this.getChildren(),function(b){b!=a&&(e+=h.getMarginSize(b._wrapperWidget.domNode).h)});this._verticalSpace=f.h-e-c.h-b.h-l.h-d.h-a._buttonWidget.getTitleHeight();this._containerContentBox=
{h:this._verticalSpace,w:this._contentBox.w-c.w-b.w-l.w-d.w};a&&v(a,this._containerContentBox)}},_setupChild:function(a){a._wrapperWidget=r({contentWidget:a,buttonWidget:this.buttonWidget,id:a.id+"_wrapper",dir:a.dir,lang:a.lang,textDir:a.textDir||this.textDir,parent:this});this.inherited(arguments);g.place(a.domNode,a._wrapper,"replace")},removeChild:function(a){a._wrapperWidget&&(g.place(a.domNode,a._wrapperWidget.domNode,"after"),a._wrapperWidget.destroy(),delete a._wrapperWidget);z.remove(a.domNode,
"dijitHidden");this.inherited(arguments)},getChildren:function(){return n.map(this.inherited(arguments),function(a){return"dijit.layout._AccordionInnerContainer"==a.declaredClass?a.contentWidget:a},this)},destroy:function(){this._animation&&this._animation.stop();n.forEach(this.getChildren(),function(a){a._wrapperWidget?a._wrapperWidget.destroy():a.destroyRecursive()});this.inherited(arguments)},_showChild:function(a){a._wrapperWidget.containerNode.style.display="block";return this.inherited(arguments)},
_hideChild:function(a){a._wrapperWidget.containerNode.style.display="none";this.inherited(arguments)},_transition:function(a,b,c){8>m("ie")&&(c=!1);this._animation&&(this._animation.stop(!0),delete this._animation);var d=this;if(a){a._wrapperWidget.set("selected",!0);var f=this._showChild(a);this.doLayout&&v(a,this._containerContentBox)}b&&(b._wrapperWidget.set("selected",!1),c||this._hideChild(b));if(c){var e=a._wrapperWidget.containerNode,g=b._wrapperWidget.containerNode;c=a._wrapperWidget.containerNode;
a=h.getMarginExtents(c);c=h.getPadBorderExtents(c);var k=a.h+c.h;g.style.height=d._verticalSpace-k+"px";this._animation=new x.Animation({node:e,duration:this.duration,curve:[1,this._verticalSpace-k-1],onAnimate:function(a){a=Math.floor(a);e.style.height=a+"px";g.style.height=d._verticalSpace-k-a+"px"},onEnd:function(){delete d._animation;e.style.height="auto";b._wrapperWidget.containerNode.style.display="none";g.style.height="auto";d._hideChild(b)}});this._animation.onStop=this._animation.onEnd;this._animation.play()}return f},
_onKeyDown:function(a,b){if(!this.disabled&&!a.altKey&&(b||a.ctrlKey)){var c=a.keyCode;if(b&&(c==e.LEFT_ARROW||c==e.UP_ARROW)||a.ctrlKey&&c==e.PAGE_UP)this._adjacent(!1)._buttonWidget._onTitleClick(),a.stopPropagation(),a.preventDefault();else if(b&&(c==e.RIGHT_ARROW||c==e.DOWN_ARROW)||a.ctrlKey&&(c==e.PAGE_DOWN||c==e.TAB))this._adjacent(!0)._buttonWidget._onTitleClick(),a.stopPropagation(),a.preventDefault()}}});m("dijit-legacy-requires")&&C(0,function(){w(["dijit/layout/AccordionPane"])});f._InnerContainer=
r;f._Button=q;return f});
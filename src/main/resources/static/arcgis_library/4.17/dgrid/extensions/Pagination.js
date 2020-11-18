//>>built
define("../_StoreMixin dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/dom-construct dojo/dom-class dojo/on dojo/query dojo/string dojo/has dojo/keys dojo/when ../util/misc dojo/i18n!./nls/pagination dojo/_base/sniff".split(" "),function(x,y,z,A,f,B,t,u,C,H,D,E,I,F){function G(b){b._removeNoDataNode()||b.cleanup();b.contentNode.innerHTML=""}function r(b){if(b.loadingNode)b._loadingCount--,b._loadingCount||(f.destroy(b.loadingNode),delete b.loadingNode);else if(b._oldPageNodes){for(var a in b._oldPageNodes)b.removeRow(b._oldPageNodes[a]);
delete b._oldPageNodes}delete b._isLoading}return y(x,{rowsPerPage:10,pagingTextBox:!1,previousNextArrows:!0,firstLastArrows:!1,pagingLinks:2,pageSizeOptions:null,showLoadingMessage:!0,i18nPagination:F,showFooter:!0,_currentPage:1,_loadingCount:0,buildRendering:function(){this.inherited(arguments);var b=this,a=this.paginationNode=f.create("div",{className:"dgrid-pagination"},this.footerNode),c=this.paginationStatusNode=f.create("div",{className:"dgrid-status"},a),d=this.i18nPagination;"function"===
typeof this._processScroll&&(this.bodyNode.innerHTML=d.notCompatibleWithOnDemand,console.warn(d.notCompatibleWithOnDemand));c.tabIndex=0;this._updatePaginationSizeSelect();this._updateRowsPerPageOption();this._updatePaginationStatus(this._total);a=this.paginationNavigationNode=f.create("div",{className:"dgrid-navigation"},a);this.firstLastArrows&&(this.paginationFirstNode=f.create("span",{"aria-label":d.gotoFirst,className:"dgrid-first dgrid-page-link",innerHTML:"\u00ab",tabIndex:0},a));this.previousNextArrows&&
(this.paginationPreviousNode=f.create("span",{"aria-label":d.gotoPrev,className:"dgrid-previous dgrid-page-link",innerHTML:"\u2039",tabIndex:0},a));this.paginationLinksNode=f.create("span",{className:"dgrid-pagination-links"},a);this.previousNextArrows&&(this.paginationNextNode=f.create("span",{"aria-label":d.gotoNext,className:"dgrid-next dgrid-page-link",innerHTML:"\u203a",tabIndex:0},a));this.firstLastArrows&&(this.paginationLastNode=f.create("span",{"aria-label":d.gotoLast,className:"dgrid-last dgrid-page-link",
innerHTML:"\u00bb",tabIndex:0},a));this._listeners.push(t(a,".dgrid-page-link:click,.dgrid-page-link:keydown",function(a){if("keydown"!==a.type||13===a.keyCode){a=this.className;var c,d;b._isLoading||-1<a.indexOf("dgrid-page-disabled")||(c=b._currentPage,d=Math.ceil(b._total/b.rowsPerPage),this===b.paginationPreviousNode?b.gotoPage(c-1):this===b.paginationNextNode?b.gotoPage(c+1):this===b.paginationFirstNode?b.gotoPage(1):this===b.paginationLastNode?b.gotoPage(d):"dgrid-page-link"===a&&b.gotoPage(+this.innerHTML))}}))},
destroy:function(){this.inherited(arguments);this._pagingTextBoxChangeHandle&&this._pagingTextBoxChangeHandle.remove();this._pagingTextBoxKeyPressHandle&&this._pagingTextBoxKeyPressHandle.remove()},_updatePaginationSizeSelect:function(){var b=this.pageSizeOptions,a=this.paginationSizeSelect,c;if(b&&b.length){a||(a=this.paginationSizeSelect=f.create("select",{"aria-label":this.i18nPagination.rowsPerPage,className:"dgrid-page-size"},this.paginationNode),c=this._paginationSizeChangeHandle=t(a,"change",
A.hitch(this,function(){this.set("rowsPerPage",+this.paginationSizeSelect.value)})),this._listeners.push(c));for(c=a.options.length=0;c<b.length;c++)f.create("option",{innerHTML:b[c],selected:this.rowsPerPage===b[c],value:b[c]},a);this._updateRowsPerPageOption()}else b&&b.length||!a||(f.destroy(a),this.paginationSizeSelect=null,this._paginationSizeChangeHandle.remove())},_setPageSizeOptions:function(b){this.pageSizeOptions=b&&b.sort(function(a,b){return a-b});this._updatePaginationSizeSelect()},_updateRowsPerPageOption:function(){var b=
this.rowsPerPage,a=this.pageSizeOptions,c=this.paginationSizeSelect;c&&(0>z.indexOf(a,b)?this._setPageSizeOptions(a.concat([b])):c.value=""+b)},_setRowsPerPage:function(b){this.rowsPerPage=b;this._updateRowsPerPageOption();this.gotoPage(1)},_updateNavigation:function(b){function a(a){a=+a;!isNaN(a)&&0<a&&a<=m&&p.gotoPage(a)}function c(b,c){var d,e=!0;p.pagingTextBox&&b===h&&1<m?(c=f.create("input",{"aria-label":q.jumpPage,className:"dgrid-page-input",type:"text",value:h},k),p._pagingTextBoxChangeHandle=
t(c,"change",function(){e&&a(+this.value);e=!0}),p._pagingTextBoxKeyPressHandle=t(c,"keypress",function(b){b.keyCode===D.ENTER&&(e=!1,a(+this.value))}),g&&"INPUT"===g.tagName&&c.focus()):(d=b===h,c=f.create("span",{"aria-label":q.gotoPage,className:"dgrid-page-link"+(d?" dgrid-page-disabled":""),innerHTML:b+(c?" ":""),tabIndex:d?-1:0},k),v===b&&(d?b<m?v++:r.focus():c.focus()),d||(r=c))}function d(a,b){B.toggle(a,"dgrid-page-disabled",b);a.tabIndex=b?-1:0}function n(){f.create("span",{className:"dgrid-page-skip",
innerHTML:"..."},k)}var p=this,q=this.i18nPagination,k=this.paginationLinksNode,h=this._currentPage,e=this.pagingLinks,l=this.paginationNavigationNode,m=Math.ceil(b/this.rowsPerPage);b=this._pagingTextBoxKeyPressHandle;var w=this._pagingTextBoxChangeHandle,g=document.activeElement,v,r;g&&this.paginationNavigationNode.contains(g)?"dgrid-page-link"===g.className&&(v=+g.innerHTML):g=null;b&&b.remove();w&&w.remove();k.innerHTML="";u(".dgrid-first, .dgrid-previous",l).forEach(function(a){d(a,1===h)});
u(".dgrid-last, .dgrid-next",l).forEach(function(a){d(a,h>=m)});if(e&&0<m){c(1,!0);l=h-e;for(2<l?n():l=2;l<Math.min(h+e+1,m);l++)c(l,!0);h+e+1<m&&n();1<m&&c(m)}else p.pagingTextBox&&c(h);g&&-1===g.tabIndex&&(e=u('[tabindex\x3d"0"]',this.paginationNavigationNode),g===this.paginationPreviousNode||g===this.paginationFirstNode?g=e[0]:e.length&&(g=e[e.length-1]),g&&g.focus())},_updatePaginationStatus:function(b){var a=this.rowsPerPage,c=Math.min(b,(this._currentPage-1)*a+1);this.paginationStatusNode.innerHTML=
C.substitute(this.i18nPagination.status,{start:c,end:Math.min(b,c+a-1),total:b})},refresh:function(b){var a=this,c=b&&b.keepCurrentPage?Math.min(this._currentPage,Math.ceil(this._total/this.rowsPerPage)):1;this.inherited(arguments);return this.gotoPage(c).then(function(b){a._emitRefreshComplete();return b})},_onNotification:function(b,a,c){b=this.rowsPerPage;var d=this._currentPage*b;"add"===a.type&&a.index<d||"delete"===a.type&&a.previousIndex<d||"update"===a.type&&Math.floor(a.index/b)!==Math.floor(a.previousIndex/
b)?this.gotoPage(Math.min(this._currentPage,Math.ceil(a.totalLength/this.rowsPerPage))||1):c===this._renderedCollection&&a.totalLength!==this._total&&(this._updatePaginationStatus(a.totalLength),this._updateNavigation(a.totalLength))},renderQueryResults:function(b,a){var c=this,d=this.inherited(arguments);a||(this._topLevelRequest&&(this._topLevelRequest.cancel(),delete this._topLevelRequest),"function"===typeof d.cancel&&(this._topLevelRequest=d),d.then(function(){c._topLevelRequest&&delete c._topLevelRequest}));
return d},insertRow:function(){var b=this._oldPageNodes,a=this.inherited(arguments);b&&a===b[a.id]&&delete b[a.id];return a},gotoPage:function(b){var a=this,c=(this._currentPage-1)*this.rowsPerPage;if(!this._renderedCollection)return console.warn("Pagination requires a collection to operate."),E([]);this._renderedCollection.releaseRange&&this._renderedCollection.releaseRange(c,c+this.rowsPerPage);return this._trackError(function(){var c=a.rowsPerPage,n=(b-1)*c,p={start:n,count:c},q,k=a.contentNode,
h,e,l;if(a.showLoadingMessage)a._loadingCount++,G(a),a.loadingNode=f.create("div",{className:"dgrid-loading",innerHTML:a.loadingMessage},k);else for(a._oldPageNodes=h={},k=k.children,e=0,l=k.length;e<l;e++)h[k[e].id]=k[e];a._isLoading=!0;q=a._renderedCollection.fetchRange({start:n,end:n+c});return a.renderQueryResults(q,null,p).then(function(d){r(a);a.scrollTo({y:0});a._rows&&(a._rows.min=n,a._rows.max=n+c-1);q.totalLength.then(function(c){c||a._insertNoDataNode();a._total=c;a._currentPage=b;a._rowsOnPage=
d.length;a._updatePaginationStatus(c);a._updateNavigation(c)});return q},function(b){r(a);throw b;})})}})});
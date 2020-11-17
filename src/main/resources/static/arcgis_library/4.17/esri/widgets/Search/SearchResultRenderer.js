// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/accessorSupport/decorators ../Widget ./SearchViewModel ../support/widget".split(" "),function(p,q,d,f,m,n,c){return function(k){function b(a,e){a=k.call(this,a,e)||this;a.messages=null;a.showMoreResultsOpen=!1;a.viewModel=null;return a}d.__extends(b,k);b.prototype.render=function(){var a,e=(a={},a["esri-search-result-renderer__more-results--show-more-results"]=this.showMoreResultsOpen,a);return c.tsx("div",{class:"esri-search-result-renderer esri-widget"},
c.tsx("div",{key:"esri-search-renderer__container",class:this.classes("esri-search-result-renderer__more-results",e)},this.renderSearchResultName(),this.renderMoreResults()))};b.prototype.renderMoreResults=function(){return c.tsx("div",{key:"esri-search-renderer__more-results"},this.renderMoreResultsButton(),this.renderMoreResultsLists())};b.prototype.renderSearchResultName=function(){var a,e=null===(a=this.viewModel)||void 0===a?void 0:a.selectedResult;return c.tsx("div",{key:"esri-search-renderer__result-name",
class:"esri-search-result-renderer__more-results-item"},e&&e.name||"")};b.prototype.renderMoreResultsLists=function(){var a=this,e,b=null===(e=this.viewModel)||void 0===e?void 0:e.results;if(2>this.viewModel.resultCount)return null;e=b.map(function(b){return a.renderMoreResultsList(b)});return c.tsx("div",{key:"esri-search-renderer__more-results-container",class:"esri-search-result-renderer__more-results-list"},e)};b.prototype.renderMoreResultsButton=function(){var a=this.messages;return 2>this.viewModel.resultCount?
null:c.tsx("div",{key:"esri-search-renderer__more-results-button",class:"esri-search-result-renderer__more-results-item"},c.tsx("a",{class:"esri-widget__anchor",href:"#",bind:this,onclick:this._showMoreResultsClick,onkeydown:this._showMoreResultsClick},this.showMoreResultsOpen?a.hideMoreResults:a.showMoreResults))};b.prototype.renderMoreResultsHeader=function(a,b){return c.tsx("div",{key:"esri-search-result-renderer__header-"+b,class:"esri-search-result-renderer__more-results-list-header"},a)};b.prototype.renderMoreResultsList=
function(a){var b=this,g,d,f=a.results,h=f.length,l=!!h,k=null===(g=this.viewModel)||void 0===g?void 0:g.selectedResult;g=1===h&&f[0]===k;h=this._getSourceName(a.source,a.sourceIndex);h=1<(null===(d=this.viewModel)||void 0===d?void 0:d.results.length)&&!g?this.renderMoreResultsHeader(h,a.sourceIndex):null;d=l&&f.map(function(a,c){return b.renderMoreResultsListItem(a,c)});d=l&&!g?c.tsx("ul",{key:"esri-search-result-renderer__list-"+a.sourceIndex},d):null;return l?c.tsx("div",{key:"esri-search-result-renderer__results-"+
a.sourceIndex},h,d):null};b.prototype.renderMoreResultsListItem=function(a,b){var d=this.get("viewModel.selectedResult");return a!==d?c.tsx("li",{key:"esri-search-result-renderer__list-item-"+b},c.tsx("a",{class:"esri-widget__anchor",href:"#",tabindex:"0",bind:this,"data-result":a,onclick:this._selectResultClick,onkeydown:this._selectResultClick},a.name)):null};b.prototype._showMoreResultsClick=function(a){a.preventDefault();this.showMoreResultsOpen=!this.showMoreResultsOpen;(a=this.get("viewModel.view.popup"))&&
a.reposition()};b.prototype._selectResultClick=function(a){a.preventDefault();a=a.currentTarget["data-result"];this.viewModel&&this.viewModel.select(a)};b.prototype._getSourceName=function(a,b){return b===n.ALL_INDEX?this.messages.all:a.name};d.__decorate([f.property(),c.renderable(),c.messageBundle("esri/widgets/Search/t9n/Search")],b.prototype,"messages",void 0);d.__decorate([c.renderable(),f.property()],b.prototype,"showMoreResultsOpen",void 0);d.__decorate([f.property(),c.renderable(["viewModel.results",
"viewModel.selectedResult","viewModel.resultCount"])],b.prototype,"viewModel",void 0);d.__decorate([c.accessibleHandler()],b.prototype,"_showMoreResultsClick",null);d.__decorate([c.accessibleHandler()],b.prototype,"_selectResultClick",null);return b=d.__decorate([f.subclass("esri.widgets.Search.SearchResultRenderer")],b)}(m)});
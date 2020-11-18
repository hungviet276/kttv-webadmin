// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","../support/jsxFactory","../support/widgetUtils"],function(v,c,f,p){function t(a){var d=a.identify,b=a.items,q=a.renderIcon,h=a.filterText,k=a.onItemMouseLeave,g=a.onItemMouseEnter,c=a.onItemSelect;return 0===b.length?f.tsx("div",{class:e.noMatchesMessage,key:"no-matches"},a.messages.noMatches):b[0].items?f.tsx("div",{class:e.scroller,key:"item-container"},b.map(function(a){return r({group:a,filterText:h,identify:d,renderIcon:q,onItemMouseLeave:k,onItemMouseEnter:g,onItemSelect:c})})):
f.tsx("ul",{class:p.classes(e.list,e.scroller),key:"item-container"},b.map(function(a){return m({item:a,identify:d,grouped:!0,onItemMouseLeave:k,onItemMouseEnter:g,onItemSelect:c,renderIcon:q,filterText:h})}))}function u(a){var d=a.id+"-placeholder";return f.tsx("div",{class:e.filterContainer,key:"filter"},f.tsx("input",{"aria-labelledby":d,class:p.classes(e.input,e.filterInput),oninput:function(b){b=b.currentTarget;a.onFilterChange&&a.onFilterChange(b.value)},value:a.filterText,type:"search"}),a.filterText?
null:f.tsx("div",{class:e.filterPlaceholder,id:d,key:"placeholder"},f.tsx("span",{class:e.searchIcon,"aria-hidden":"true"}),f.tsx("div",{class:e.filterPlaceholderText},a.messages.filterPlaceholder)))}function m(a){var d=a.identify,b=a.item,q=a.grouped,h=a.filterText,c=a.onItemSelect,g=a.onItemMouseEnter,l=a.onItemMouseLeave;a=a.renderIcon;d=(d&&d(b)||b.id)+"__"+b.label;return f.tsx("li",{"aria-level":q?"2":"",class:e.item,"data-item":b,key:d,onclick:function(a){a=a.currentTarget["data-item"];c&&c(a)},
onmouseenter:function(a){a=a.currentTarget["data-item"];g&&g(a)},onkeydown:function(a){if("Enter"===a.key||"Space"===a.key)a=a.currentTarget["data-item"],c&&c(a)},onmouseleave:function(a){a=a.currentTarget["data-item"];l&&l(a)},tabIndex:0},f.tsx("div",{class:e.itemContainer},a&&a({item:b}),n({text:b.label,match:h})))}function r(a){var d=a.group,b=a.identify,c=a.onItemMouseLeave,h=a.onItemMouseEnter,k=a.onItemSelect,g=a.filterText,l=a.renderIcon;a=(b&&b(d)||d.id)+"-heading";return f.tsx("section",
{"aria-labelledby":a,class:e.group,key:d.label},f.tsx("h4",{"aria-level":"1",id:a,class:p.classes(e.groupHeader)},n({text:d.label,match:g})),f.tsx("ul",{class:e.list},d.items.map(function(a){return m({item:a,identify:b,grouped:!0,onItemMouseLeave:c,onItemMouseEnter:h,onItemSelect:k,renderIcon:l,filterText:g})})))}function n(a){var d=a.match;a=a.text;var b=null;if(d){var b=a.toLowerCase(),c=d.toLowerCase(),h=b.indexOf(c);-1===h?b=a:(b=a.substring(0,h),c=a.substr(h,d.length),d=a.substring(h+d.length),
b=f.tsx("span",null,b,f.tsx("strong",null,c),d))}else b=a;return f.tsx("span",{class:e.itemLabel},b)}Object.defineProperty(c,"__esModule",{value:!0});c.renderLabel=c.renderGroup=c.renderItem=c.ItemList=void 0;var e={base:"esri-item-list",list:"esri-item-list__list",group:"esri-item-list__group",scroller:"esri-item-list__scroller",groupHeader:"esri-item-list__group-header",item:"esri-item-list__list-item",itemSelected:"esri-item-list__list-item--selected",itemContainer:"esri-item-list__list-item-container",
itemLabel:"esri-item-list__list-item-label",noMatchesMessage:"esri-item-list__no-matches-message",noItemsMessage:"esri-item-list__no-items-message",filterContainer:"esri-item-list__filter-container",filterPlaceholder:"esri-item-list__filter-placeholder",filterInput:"esri-item-list__filter-input",filterPlaceholderText:"esri-item-list__filter-placeholder-text",searchIcon:"esri-icon-search",widget:"esri-widget",heading:"esri-widget__heading",input:"esri-input"};c.ItemList=function(a){var d=a.id,b=a.identify,
c=a.filterEnabled,c=void 0===c?!0:c,h=a.items,k=a.messages,g=a.filterText,g=void 0===g?"":g,l=a.onFilterChange,m=a.renderIcon,n=a.onItemMouseLeave,r=a.onItemMouseEnter;a=a.onItemSelect;return f.tsx("div",{class:p.classes(e.base,e.widget)},c?u({filterText:g,messages:k,onFilterChange:l,id:d}):null,t({identify:b,items:h,messages:k,filterText:g,renderIcon:m,onItemMouseLeave:n,onItemMouseEnter:r,onItemSelect:a}))};c.renderItem=m;c.renderGroup=r;c.renderLabel=n});
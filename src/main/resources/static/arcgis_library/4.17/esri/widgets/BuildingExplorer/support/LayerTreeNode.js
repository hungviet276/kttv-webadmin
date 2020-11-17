// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Accessor ../../../core/Collection ../../../core/Handles ../../../core/maybe ../../../core/watchUtils ../../../core/accessorSupport/decorators".split(" "),function(h,e,c,n,k,p,f,l,d){function m(c,a){var b=null,g=0;for(c=c.items;g<c.length;g++){var d=a(c[g]);if(f.isSome(b)&&b!==d)return null;b=d}return b}Object.defineProperty(e,"__esModule",{value:!0});e.LayerTreeNode=void 0;h=function(e){function a(){var b=null!==e&&e.apply(this,arguments)||this;b.id="root";
b.parent=null;b.children=new k;b.layers=new k;b.level=0;b.collapsed=!0;b._handles=new p;b._childIds=new Set;b._layerUniqueIds=new Set;return b}c.__extends(a,e);a.prototype.initialize=function(){var b=this;this._handles.add([this.layers.on("before-add",function(a){b._layerUniqueIds.has(a.item.uid)?a.preventDefault():b._layerUniqueIds.add(a.item.uid)}),this.layers.on("after-add",function(a){a=a.item;b._handles.add([l.init(a,"visible",function(){return b.notifyChange("visible")}),l.init(a,"title",function(){return b.notifyChange("title")})],
a.uid)}),this.layers.on("before-remove",function(a){b._handles.remove(a.item.uid);b.notifyChange("title");b.notifyChange("visible")}),this.children.on("before-add",function(a){b._childIds.has(a.item.id)?a.preventDefault():(a.item._set("parent",b),b._childIds.add(a.item.id))})])};a.prototype.destroy=function(){this._handles.destroy();this.children.forEach(function(a){return a.destroy()})};Object.defineProperty(a.prototype,"hasChildren",{get:function(){return 0<this.children.length},enumerable:!1,configurable:!0});
Object.defineProperty(a.prototype,"isRoot",{get:function(){return 0===this.level},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"isLeaf",{get:function(){return!this.hasChildren},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"isDiscipline",{get:function(){return 1===this.level},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,"visible",{get:function(){return m(this.layers,function(a){return a.visible})},enumerable:!1,configurable:!0});Object.defineProperty(a.prototype,
"title",{get:function(){return m(this.layers,function(a){return a.title})||this.layers.items.map(function(a){return a.title}).join(", ")||null},enumerable:!1,configurable:!0});a.prototype.toggleVisibility=function(a){var b=void 0===a?!this.visible:a;this.layers.forEach(function(a){a.visible=b});b&&f.isSome(this.parent)&&this.parent.toggleVisibility(!0)};a.prototype.toggleCollapsed=function(a){this.collapsed=void 0===a?!this.collapsed:a};a.prototype.expand=function(){this.collapsed=!1};a.prototype.expandAll=
function(){this.expand();this.children.forEach(function(a){return a.expandAll()})};a.prototype.collapse=function(){this.collapsed=!0};a.prototype.collapseAll=function(){this.collapse();this.children.forEach(function(a){return a.collapseAll()})};a.prototype.toggleAllSiblingsVisibility=function(a){var b=void 0===a?!this.visible:a;this.toggleVisibility(b);f.isSome(this.parent)&&(this.parent.toggleVisibility(b),this.parent.children.forEach(function(a){return a.toggleVisibility(b)}))};c.__decorate([d.property({nonNullable:!0})],
a.prototype,"id",void 0);c.__decorate([d.property()],a.prototype,"parent",void 0);c.__decorate([d.property({nonNullable:!0,readOnly:!0})],a.prototype,"children",void 0);c.__decorate([d.property({nonNullable:!0,readOnly:!0})],a.prototype,"layers",void 0);c.__decorate([d.property({nonNullable:!0})],a.prototype,"level",void 0);c.__decorate([d.property({nonNullable:!0})],a.prototype,"collapsed",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["children.length"]})],a.prototype,"hasChildren",null);
c.__decorate([d.property({readOnly:!0,dependsOn:["level"]})],a.prototype,"isRoot",null);c.__decorate([d.property({readOnly:!0,dependsOn:["hasChildren"]})],a.prototype,"isLeaf",null);c.__decorate([d.property({readOnly:!0,dependsOn:["level"]})],a.prototype,"isDiscipline",null);c.__decorate([d.property({readOnly:!0})],a.prototype,"visible",null);c.__decorate([d.property({readOnly:!0})],a.prototype,"title",null);return a=c.__decorate([d.subclass("esri.widgets.BuildingExplorer.support.LayerTreeNode")],
a)}(n);e.LayerTreeNode=h});
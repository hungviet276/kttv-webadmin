// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ../arrayUtils ../Error ../Logger ../promiseUtils ./PropertyOrigin ./utils ./extensions/serializableProperty".split(" "),function(y,k,r,t,u,v,m,l,n){function w(c,g,d,e,f){var b,a,h={};null===(a=null===(b=g.write)||void 0===b?void 0:b.writer)||void 0===a?void 0:a.call(c,e,h,d,f);return h}function p(c,g,d,e,f,b){if(!e||!e.write)return!1;var a=c.get(d);if(!f&&e.write.overridePolicy){var h=e.write.overridePolicy.call(c,a,d,b);void 0!==h&&(f=h)}f||(f=e.write);if(!f||!1===f.enabled)return!1;
if((null===a&&!f.allowNull||void 0===a)&&f.isRequired)return(g=new t("web-document-write:property-required","Missing value for required property '"+d+"' on '"+c.declaredClass+"'",{propertyName:d,target:c}),b)&&b.messages?b.messages.push(g):g&&!b&&x.error(g.name,g.message),!1;if(void 0===a||null===a&&!f.allowNull)return!1;h=e.default;void 0===h?a=!1:null!=e.defaultEquals?a=e.defaultEquals(a):"function"===typeof h?Array.isArray(a)?(c=h.call(c,d,b),a=r.equals(c,a)):a=!1:a=h===a;return a?!1:void 0!==
e.default?!0:!f.ignoreOrigin&&b&&b.origin&&g.store.originOf(d)<m.nameToId(b.origin)?!1:!0}function q(c,g,d){if(c&&"function"===typeof c.toJSON&&(!c.toJSON.isDefaultToJSON||!c.write))return l.merge(g,c.toJSON());var e=l.getProperties(c),f=e.metadatas,b=function(a){var b=n.originSpecificWritePropertyDefinition(f[a],d);if(!p(c,e,a,b,void 0,d))return"continue";var h=c.get(a),k=w(c,b,b.write&&"string"===typeof b.write.target?b.write.target:a,h,d);0<Object.keys(k).length&&(g=l.merge(g,k),d&&d.resources&&
d.resources.pendingOperations&&d.resources.pendingOperations.length&&v.all(d.resources.pendingOperations).then(function(){return l.merge(g,k)}),d&&d.writtenProperties&&d.writtenProperties.push({target:c,propName:a,oldOrigin:m.idToReadableName(e.store.originOf(a)),newOrigin:d.origin}))},a;for(a in f)b(a);return g}Object.defineProperty(k,"__esModule",{value:!0});k.write=k.willPropertyWrite=void 0;var x=u.getLogger("esri.core.accessorSupport.write");k.willPropertyWrite=function(c,g,d,e){var f=l.getProperties(c),
b=n.originSpecificWritePropertyDefinition(f.metadatas[g],e);return b?p(c,f,g,b,d,e):!1};k.write=q;k.default=q});
// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define(["require","exports","./treeAnalysis","./lib/esprima"],function(q,a,d,k){Object.defineProperty(a,"__esModule",{value:!0});a.referencesFunction=a.referencesMember=a.validateScript=a.extractFieldLiterals=a.scriptCheck=a.parseScript=void 0;a.parseScript=function(b,c){void 0===c&&(c=[]);b=k.parse("function _() { "+b+"\n}");if(null===b.body||void 0===b.body)throw Error("No formula provided.");if(0===b.body.length)throw Error("No formula provided.");if(0===b.body.length)throw Error("No formula provided.");
if("BlockStatement"!==b.body[0].body.type)throw Error("Invalid formula content.");var a=d.validateLanguage(b);if(""!==a)throw Error(a);d.findScriptDependencies(b,c);return b};a.scriptCheck=function(b,c,a,n,p){var f=[];try{var l=k.parse("function _() { "+b+"\n}",{tolerant:!0,loc:!0}),g=l.errors;if(0<g.length)for(var h=0;h<g.length;h++)f.push({line:g[h].lineNumber,character:g[h].column,reason:g[h].description});var m=d.checkScript(l,c,a,n,p);for(c=0;c<m.length;c++)f.push(m[c])}catch(e){try{"Unexpected token }"===
e.description?(e.index=("function _() { "+b+"\n}").length-1,f.push({line:e.lineNumber,character:e.column,reason:"Unexpected end of script"})):f.push({line:e.lineNumber,character:e.column,reason:e.description})}catch(r){}}return f};a.extractFieldLiterals=function(b,a){void 0===a&&(a=!1);return d.findFieldLiterals(b)};a.validateScript=function(a,c,k){return d.validateScript(a,c,k)};a.referencesMember=function(a,c){return d.referencesMember(a,c)};a.referencesFunction=function(a,c){return d.referencesFunction(a,
c)}});
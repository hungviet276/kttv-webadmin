// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports ./ArcadePortal ./Attachment ./Dictionary ./Feature ./ImmutablePathArray ./ImmutablePointArray ./languageUtils ./treeAnalysis ./functions/date ./functions/geometry ./functions/geomsync ./functions/maths ./functions/stats ./functions/string ../core/promiseUtils ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../geometry/SpatialReference ../views/2d/layers/features/support/FeatureSetReader @dojo/framework/shim/Promise".split(" "),
function(aa,m,ba,ca,p,y,R,da,d,h,ea,fa,ga,ha,ia,ja,u,ka,la,ma,na,oa,pa,qa,ra){function n(a,b,c){try{return c(a,null,b)}catch(e){throw e;}}function sa(a){return a instanceof Error?u.reject(a):u.reject(Error(a))}function g(a,b){try{switch(b.type){case "EmptyStatement":return"lc.voidOperation";case "VariableDeclarator":return ta(a,b);case "VariableDeclaration":for(var c=[],e=0;e<b.declarations.length;e++)c.push(g(a,b.declarations[e]));return c.join("\n")+" \n lastStatement\x3d  lc.voidOperation; \n";
case "BlockStatement":return P(a,b);case "FunctionDeclaration":var d;var q=b.id.name.toLowerCase(),I={isAsync:a.isAsync,spatialReference:a.spatialReference,console:a.console,lrucache:a.lrucache,services:a.services,symbols:a.symbols,mangleMap:a.mangleMap,localScope:{_SymbolsMap:{}},depthCounter:a.depthCounter+1,globalScope:a.globalScope};if(64<I.depthCounter)throw Error("Exceeded maximum function depth");c="new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement \x3d lc.voidOperation; \n   var lscope \x3d runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n";
for(e=0;e<b.params.length;e++){var l=b.params[e].name.toLowerCase(),r=M(a);I.localScope._SymbolsMap[l]=r;I.mangleMap[l]=r;c+="lscope['"+r+"']\x3darguments["+e.toString()+"];\n"}!0===a.isAsync?(c=c+"return lang.__awaiter(this, void 0, void 0, function* () {\n"+(P(I,b.body)+"\n return lastStatement; "),c+="});  }, runtimeCtx))\n lastStatement \x3d lc.voidOperation; \n"):(c+=P(I,b.body)+"\n return lastStatement; }, runtimeCtx))",c+="\n lastStatement \x3d lc.voidOperation; \n");void 0!==a.globalScope[q]?
d="gscope['"+q+"']\x3d"+c:void 0!==a.globalScope._SymbolsMap[q]?d="gscope['"+a.globalScope._SymbolsMap[q]+"']\x3d"+c:(r=M(a),a.globalScope._SymbolsMap[q]=r,a.mangleMap[q]=r,d="gscope['"+r+"']\x3d"+c);return d;case "ReturnStatement":var S;S=null===b.argument?"return lc.voidOperation":"return "+g(a,b.argument)+"";return S;case "IfStatement":if("AssignmentExpression"===b.test.type||"UpdateExpression"===b.test.type)throw Error(h.nodeErrorMessage(b.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));
var J=g(a,b.test),N=G(a),m="var "+N+" \x3d "+J+";\n if ("+N+" \x3d\x3d\x3d true) {\n"+T(a,b.consequent)+"\n }\n",m=null!==b.alternate?m+("else if ("+N+"\x3d\x3d\x3dfalse)   { \n"+T(a,b.alternate)+"}\n"):m+("else if ("+N+"\x3d\x3d\x3dfalse) { \n lastStatement \x3d lc.voidOperation;\n }\n");return m+="else { lang.error({type: '"+b.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); \n}\n";case "ExpressionStatement":var n;n="AssignmentExpression"===b.expression.type?"lastStatement \x3d lc.voidOperation; "+
g(a,b.expression)+"; \n ":"lastStatement \x3d "+g(a,b.expression)+"; ";return n;case "AssignmentExpression":return va(a,b);case "UpdateExpression":return wa(a,b);case "BreakStatement":return"break";case "ContinueStatement":return"continue";case "TemplateLiteral":try{for(var u=[],q=d=0,e=b.quasis;q<e.length;q++){var p=e[q];u.push(p.value?JSON.stringify(p.value.cooked):JSON.stringify(""));!1===p.tail&&(u.push(b.expressions[d]?"lang.castString(lang.aCheck("+g(a,b.expressions[d])+", 'TemplateLiteral'))":
""),d++)}c="(["+u.join(",")+"]).join('')"}catch(v){throw v;}return c;case "TemplateElement":return JSON.stringify(b.value?b.value.cooked:"");case "ForStatement":c="lastStatement \x3d lc.voidOperation; \n";null!==b.init&&(c+=g(a,b.init)+"; ");var x=G(a),y=G(a),c=c+("var "+x+" \x3d true; ")+"\n do { ";null!==b.update&&(c+=" if ("+x+"\x3d\x3d\x3dfalse) {\n "+g(a,b.update)+"  \n}\n "+x+"\x3dfalse; \n");null!==b.test&&(c+="var "+y+" \x3d "+g(a,b.test)+"; ",c+="if ("+y+"\x3d\x3d\x3dfalse) { break; } else if ("+
y+"!\x3d\x3dtrue) { lang.error({type: '"+b.type+"'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }\n");c+=g(a,b.body);null!==b.update&&(c+="\n "+g(a,b.update));return c+("\n"+x+" \x3d true; \n} while(true);  lastStatement \x3d lc.voidOperation; ");case "ForInStatement":var w=G(a),z=G(a),t=G(a),k="var "+w+" \x3d "+g(a,b.right)+";\n";"VariableDeclaration"===b.left.type&&(k+=g(a,b.left));var A="VariableDeclaration"===b.left.type?b.left.declarations[0].id.name:b.left.name,A=A.toLowerCase(),c="";
null!==a.localScope&&(void 0!==a.localScope[A]?c="lscope['"+A+"']":void 0!==a.localScope._SymbolsMap[A]&&(c="lscope['"+a.localScope._SymbolsMap[A]+"']"));""===c&&(void 0!==a.globalScope[A]?c="gscope['"+A+"']":void 0!==a.globalScope._SymbolsMap[A]&&(c="gscope['"+a.globalScope._SymbolsMap[A]+"']"));k=k+("if ("+w+"\x3d\x3d\x3dnull) {  lastStatement \x3d lc.voidOperation; }\n ")+("else if (lc.isArray("+w+") || lc.isString("+w+")) {")+("var "+z+"\x3d"+w+".length; \n")+("for(var "+t+"\x3d0; "+t+"\x3c"+
z+"; "+t+"++) {\n");k+=c+"\x3d"+t+";\n";k+=g(a,b.body);k+="\n}\n";k+=" lastStatement \x3d lc.voidOperation; \n";k+=" \n}\n";k+="else if (lc.isImmutableArray("+w+")) {";k=k+("var "+z+"\x3d"+w+".length(); \n")+("for(var "+t+"\x3d0; "+t+"\x3c"+z+"; "+t+"++) {\n");k+=c+"\x3d"+t+";\n";k+=g(a,b.body);k+="\n}\n";k+=" lastStatement \x3d lc.voidOperation; \n";k+=" \n}\n";k+="else if (( "+w+" instanceof lang.Dictionary) || ( "+w+" instanceof lang.Feature)) {";k=k+("var "+z+"\x3d"+w+".keys(); \n")+("for(var "+
t+"\x3d0; "+t+"\x3c"+z+".length; "+t+"++) {\n");k+=c+"\x3d"+z+"["+t+"];\n";k+=g(a,b.body);k+="\n}\n";k+=" lastStatement \x3d lc.voidOperation; \n";k+=" \n}\n";a.isAsync&&(k+="else if (lc.isFeatureSet("+w+")) {",k=k+("var "+z+"\x3d"+w+".iterator(runtimeCtx.abortSignal); \n")+("for(var "+t+"\x3dlang. graphicToFeature( yield "+z+".next(),"+w+"); "+t+"!\x3dnull; "+t+"\x3dlang. graphicToFeature( yield "+z+".next(),"+w+")) {\n")+(c+"\x3d"+t+";\n"),k+=g(a,b.body),k+="\n}\n",k+=" lastStatement \x3d lc.voidOperation; \n",
k+=" \n}\n");return k+"else { lastStatement \x3d lc.voidOperation; } \n";case "Identifier":return xa(a,b);case "MemberExpression":var B;try{c=void 0,c=!0===b.computed?g(a,b.property):"'"+b.property.name+"'",B="lang.member("+g(a,b.object)+","+c+")"}catch(v){throw v;}return B;case "Literal":return null===b.value||void 0===b.value?"null":JSON.stringify(b.value);case "ThisExpression":throw Error(h.nodeErrorMessage(b,"RUNTIME","NOTSUPPORTED"));case "CallExpression":try{if("Identifier"!==b.callee.type)throw Error(h.nodeErrorMessage(b,
"RUNTIME","ONLYNODESSUPPORTED"));var D=b.callee.name.toLowerCase(),c="";null!==a.localScope&&(void 0!==a.localScope[D]?c="lscope['"+D+"']":void 0!==a.localScope._SymbolsMap[D]&&(c="lscope['"+a.localScope._SymbolsMap[D]+"']"));""===c&&(void 0!==a.globalScope[D]?c="gscope['"+D+"']":void 0!==a.globalScope._SymbolsMap[D]&&(c="gscope['"+a.globalScope._SymbolsMap[D]+"']"));if(""!==c){e="[";for(p=0;p<b.arguments.length;p++)0<p&&(e+=", "),e+=g(a,b.arguments[p]);e+="]";u=a.isAsync?"(yield lang.callfunc("+
c+","+e+",runtimeCtx) )":"lang.callfunc("+c+","+e+",runtimeCtx)"}else throw Error(h.nodeErrorMessage(b,"RUNTIME","NOTFOUND"));}catch(v){throw v;}return u;case "UnaryExpression":var C;try{C="lang.unary("+g(a,b.argument)+",'"+b.operator+"')"}catch(v){throw v;}return C;case "BinaryExpression":var E;try{E="lang.binary("+g(a,b.left)+","+g(a,b.right)+",'"+b.operator+"')"}catch(v){throw v;}return E;case "LogicalExpression":var F;try{if("AssignmentExpression"===b.left.type||"UpdateExpression"===b.left.type)throw Error(h.nodeErrorMessage(b.left,
"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===b.right.type||"UpdateExpression"===b.right.type)throw Error(h.nodeErrorMessage(b.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("\x26\x26"===b.operator||"||"===b.operator)F="(lang.logicalCheck("+g(a,b.left)+") "+b.operator+" lang.logicalCheck("+g(a,b.right)+"))";else throw Error(h.nodeErrorMessage(b,"RUNTIME","ONLYORORAND"));}catch(v){throw v;}return F;case "ConditionalExpression":throw Error(h.nodeErrorMessage(b,
"RUNTIME","NOTSUPPORTED"));case "ArrayExpression":var H;try{c=[];for(e=0;e<b.elements.length;e++)"Literal"===b.elements[e].type?c.push(g(a,b.elements[e])):c.push("lang.aCheck("+g(a,b.elements[e])+",'ArrayExpression')");H="["+c.join(",")+"]"}catch(v){throw v;}return H;case "ObjectExpression":c="lang.dictionary([";for(e=0;e<b.properties.length;e++){var O=b.properties[e],K="Identifier"===O.key.type?"'"+O.key.name+"'":g(a,O.key),L=g(a,O.value);0<e&&(c+=",");c+="lang.strCheck("+K+",'ObjectExpression'),lang.aCheck("+
L+", 'ObjectExpression')"}return c+"])";case "Property":throw Error("Should not get here");case "Array":throw Error(h.nodeErrorMessage(b,"RUNTIME","NOTSUPPORTED"));default:throw Error(h.nodeErrorMessage(b,"RUNTIME","UNREOGNISED"));}}catch(v){throw v;}}function wa(a,b){var c=null,e="";if("MemberExpression"===b.argument.type)return c=g(a,b.argument.object),e=!0===b.argument.computed?g(a,b.argument.property):"'"+b.argument.property.name+"'","lang.memberupdate("+c+","+e+",'"+b.operator+"',"+b.prefix+
")";c=b.argument.name.toLowerCase();if(null!==a.localScope){if(void 0!==a.localScope[c])return"lang.update(lscope, '"+c+"','"+b.operator+"',"+b.prefix+")";if(void 0!==a.localScope._SymbolsMap[c])return"lang.update(lscope, '"+a.localScope._SymbolsMap[c]+"','"+b.operator+"',"+b.prefix+")"}if(void 0!==a.globalScope[c])return"lang.update(gscope, '"+c+"','"+b.operator+"',"+b.prefix+")";if(void 0!==a.globalScope._SymbolsMap[c])return"lang.update(gscope, '"+a.globalScope._SymbolsMap[c]+"','"+b.operator+
"',"+b.prefix+")";throw Error("Variable not recognised");}function va(a,b){var c=g(a,b.right),e=null,d="";if("MemberExpression"===b.left.type)return e=g(a,b.left.object),d=!0===b.left.computed?g(a,b.left.property):"'"+b.left.property.name+"'","lang.assignmember("+e+","+d+",'"+b.operator+"',"+c+")";e=b.left.name.toLowerCase();if(null!==a.localScope){if(void 0!==a.localScope[e])return"lscope['"+e+"']\x3dlang.assign("+c+",'"+b.operator+"', lscope['"+e+"'])";if(void 0!==a.localScope._SymbolsMap[e])return"lscope['"+
a.localScope._SymbolsMap[e]+"']\x3dlang.assign("+c+",'"+b.operator+"', lscope['"+a.localScope._SymbolsMap[e]+"'])"}if(void 0!==a.globalScope[e])return"gscope['"+e+"']\x3dlang.assign("+c+",'"+b.operator+"', gscope['"+e+"'])";if(void 0!==a.globalScope._SymbolsMap[e])return"gscope['"+a.globalScope._SymbolsMap[e]+"']\x3dlang.assign("+c+",'"+b.operator+"', gscope['"+a.globalScope._SymbolsMap[e]+"'])";throw Error("Variable not recognised");}function T(a,b){return"BlockStatement"===b.type?g(a,b):"ReturnStatement"===
b.type||"BreakStatement"===b.type||"ContinueStatement"===b.type?g(a,b)+"; ":"UpdateExpression"===b.type?"lastStatement \x3d "+g(a,b)+"; ":"ExpressionStatement"===b.type?g(a,b):"ObjectExpression"===b.type?"lastStatement \x3d "+g(a,b)+"; ":g(a,b)+"; "}function P(a,b){for(var c="",e=0;e<b.body.length;e++)c="ReturnStatement"===b.body[e].type?c+(g(a,b.body[e])+"; \n"):"BreakStatement"===b.body[e].type?c+(g(a,b.body[e])+"; \n"):"ContinueStatement"===b.body[e].type?c+(g(a,b.body[e])+"; \n"):"UpdateExpression"===
b.body[e].type?c+("lastStatement \x3d "+g(a,b.body[e])+"; \n"):"ObjectExpression"===b.body[e].type?c+("lastStatement \x3d "+g(a,b.body[e])+"; \n"):c+(g(a,b.body[e])+" \n");return c}function ta(a,b){var c=null===b.init?null:g(a,b.init);c===d.voidOperation&&(c=null);b=b.id.name.toLowerCase();if(null!==a.localScope){if(void 0!==a.localScope[b])return"lscope['"+b+"']\x3d"+c+"; ";if(void 0!==a.localScope._SymbolsMap[b])return"lscope['"+a.localScope._SymbolsMap[b]+"']\x3d"+c+"; ";var e=M(a);a.localScope._SymbolsMap[b]=
e;a.mangleMap[b]=e;return"lscope['"+e+"']\x3d"+c+"; "}if(void 0!==a.globalScope[b])return"gscope['"+b+"']\x3d"+c+"; ";if(void 0!==a.globalScope._SymbolsMap[b])return"gscope['"+a.globalScope._SymbolsMap[b]+"']\x3d"+c+"; ";e=M(a);a.globalScope._SymbolsMap[b]=e;a.mangleMap[b]=e;return"gscope['"+e+"']\x3d"+c+"; "}function ya(a,b,c){b=b.toLowerCase();switch(b){case "hasz":return a=a.hasZ,void 0===a?!1:a;case "hasm":return a=a.hasM,void 0===a?!1:a;case "spatialreference":return b=a.spatialReference._arcadeCacheId,
void 0===b&&(c=!0,Object.freeze&&Object.isFrozen(a.spatialReference)&&(c=!1),c&&(x++,b=a.spatialReference._arcadeCacheId=x)),a=new p({wkt:a.spatialReference.wkt,wkid:a.spatialReference.wkid}),void 0!==b&&(a._arcadeCacheId="SPREF"+b.toString()),a}switch(a.type){case "extent":switch(b){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return a=a[b],void 0!==a?a:null;case "type":return"Extent"}break;case "polygon":switch(b){case "rings":return b=a.cache._arcadeCacheId,
void 0===b&&(x++,b=x,a.cache._arcadeCacheId=b),a=new R(a.rings,a.spatialReference,!0===a.hasZ,!0===a.hasM,b);case "type":return"Polygon"}break;case "point":switch(b){case "x":case "y":case "z":case "m":return void 0!==a[b]?a[b]:null;case "type":return"Point"}break;case "polyline":switch(b){case "paths":return b=a.cache._arcadeCacheId,void 0===b&&(x++,b=x,a.cache._arcadeCacheId=b),a=new R(a.paths,a.spatialReference,!0===a.hasZ,!0===a.hasM,b);case "type":return"Polyline"}break;case "multipoint":switch(b){case "points":return b=
a.cache._arcadeCacheId,void 0===b&&(x++,b=x,a.cache._arcadeCacheId=b),a=new da(a.points,a.spatialReference,!0===a.hasZ,!0===a.hasM,b,1);case "type":return"Multipoint"}}throw Error(h.nodeErrorMessage(c,"RUNTIME","PROPERTYNOTFOUND"));}function xa(a,b){try{var c=b.name.toLowerCase();if(null!==a.localScope){if(void 0!==a.localScope[c])return"lscope['"+c+"']";if(void 0!==a.localScope._SymbolsMap[c])return"lscope['"+a.localScope._SymbolsMap[c]+"']"}if(void 0!==a.globalScope[c])return"gscope['"+c+"']";if(void 0!==
a.globalScope._SymbolsMap[c])return"gscope['"+a.globalScope._SymbolsMap[c]+"']";throw Error(h.nodeErrorMessage(b,"RUNTIME","VARIABLENOTFOUND"));}catch(e){throw e;}}function U(a){return null===a?"":d.isArray(a)||d.isImmutableArray(a)?"Array":d.isDate(a)?"Date":d.isString(a)?"String":d.isBoolean(a)?"Boolean":d.isNumber(a)?"Number":a instanceof ca?"Attachment":a instanceof ba?"Portal":a instanceof p?"Dictionary":a instanceof y?"Feature":a instanceof na?"Point":a instanceof oa?"Polygon":a instanceof pa?
"Polyline":a instanceof ma?"Multipoint":a instanceof ka?"Extent":d.isFunctionParameter(a)?"Function":d.isFeatureSet(a)?"FeatureSet":d.isFeatureSetCollection(a)?"FeatureSetCollection":a===d.voidOperation?"":"number"===typeof a&&isNaN(a)?"Number":"Unrecognised Type"}function V(a,b,c,e){try{if(d.equalityTest(b[c],e))return b[c+1];var f=b.length-c;return 1===f?b[c]:2===f?null:3===f?b[c+2]:V(a,b,c+2,e)}catch(q){throw q;}}function W(a,b,c,e){try{if(!0===e)return b[c+1];if(3===b.length-c)return b[c+2];var f=
b[c+2];if(!1===d.isBoolean(f))throw Error("WHEN needs boolean test conditions");return W(a,b,c+2,f)}catch(q){throw q;}}function B(a,b){var c=a.length,e=Math.floor(c/2);if(0===c)return[];if(1===c)return[a[0]];var d=B(a.slice(0,e),b);a=B(a.slice(e,c),b);for(c=[];0<d.length||0<a.length;)0<d.length&&0<a.length?(e=b(d[0],a[0]),isNaN(e)&&(e=0),0>=e?(c.push(d[0]),d=d.slice(1)):(c.push(a[0]),a=a.slice(1))):0<d.length?(c.push(d[0]),d=d.slice(1)):0<a.length&&(c.push(a[0]),a=a.slice(1));return c}function H(a,
b){try{var c=a.length,e=Math.floor(c/2);if(0===c)return u.resolve([]);if(1===c)return u.resolve([a[0]]);var d=[H(a.slice(0,e),b),H(a.slice(e,c),b)];return u.all(d).then(function(a){return F(a[0],a[1],b,[])})}catch(q){return u.reject(q)}}function F(a,b,c,e){return u.create(function(d,g){0<a.length||0<b.length?0<a.length&&0<b.length?c(a[0],b[0]).then(function(f){try{isNaN(f)&&(f=1),0>=f?(e.push(a[0]),a=a.slice(1)):(e.push(b[0]),b=b.slice(1)),F(a,b,c,e).then(function(a){d(a)},g)}catch(ua){g(ua)}},g):
0<a.length?(e.push(a[0]),a=a.slice(1),F(a,b,c,e).then(function(a){d(a)},g)):0<b.length&&(e.push(b[0]),b=b.slice(1),F(a,b,c,e).then(function(a){d(a)},g)):d(e)})}function M(a){a.symbols.symbolCounter++;return"_T"+a.symbols.symbolCounter.toString()}function G(a){a.symbols.symbolCounter++;return"_Tvar"+a.symbols.symbolCounter.toString()}function za(a,b,c){var e={};a||(a={});c||(c={});e._SymbolsMap={};e.textformatting=1;e.infinity=1;e.pi=1;for(var d in b)e[d]=1;for(d in c)e[d]=1;for(d in a)e[d]=1;return e}
function X(a,b){for(var c={mode:b,compiled:!0,functions:{},signatures:[],failDefferred:sa,standardFunction:n,standardFunctionAsync:n,evaluateIdentifier:Aa},e=0;e<a.length;e++)a[e].registerFunctions(c);if("sync"===b){for(var f in c.functions)l[f]=new d.NativeFunction(c.functions[f]),K.prototype[f]=l[f];for(e=0;e<c.signatures.length;e++)h.addFunctionDeclaration(c.signatures[e],"sync")}else{for(f in c.functions)E[f]=new d.NativeFunction(c.functions[f]),L.prototype[f]=E[f];for(e=0;e<c.signatures.length;e++)h.addFunctionDeclaration(c.signatures[e],
"async")}}function Aa(a,b){b=b.name;if("_SymbolsMap"===b)throw"Illegal";if(0<a.localStack.length){if("_t"!==b.substr(0,2).toLowerCase()&&void 0!==a.localStack[a.localStack.length-1][b])return a.localStack[a.localStack.length-1][b];var c=a.mangleMap[b];if(void 0!==c&&void 0!==a.localStack[a.localStack.length-1][c])return a.localStack[a.localStack.length-1][c]}if("_t"!==b.substr(0,2).toLowerCase()&&void 0!==a.globalScope[b]||1===a.globalScope._SymbolsMap[b])return a.globalScope[b];b=a.mangleMap[b];
if(void 0!==b)return a.globalScope[b]}function Y(a){console.log(a)}Object.defineProperty(m,"__esModule",{value:!0});m.enableAsyncSupport=m.compileScript=m.referencesFunction=m.referencesMember=m.validateScript=m.extractFieldLiterals=m.executeScript=m.extend=m.functionHelper=void 0;var x=0,l={};ea.registerFunctions(l,n);ja.registerFunctions(l,n);ha.registerFunctions(l,n);fa.registerFunctions(l,n);ia.registerFunctions(l,n);l["typeof"]=function(a,b){return n(a,b,function(a,b,f){d.pcCheck(f,1,1);a=U(f[0]);
if("Unrecognised Type"===a)throw Error("Unrecognised Type");return a})};l.iif=function(a,b){try{return n(a,b,function(a,b,f){d.pcCheck(f,3,3);if(!1===d.isBoolean(f[0]))throw Error("IF Function must have a boolean test condition");return f[0]?f[1]:f[2]})}catch(c){throw c;}};l.decode=function(a,b){try{return n(a,b,function(b,e,d){if(2>d.length)throw Error("Missing Parameters");if(2===d.length)return d[1];if(0===(d.length-1)%2)throw Error("Must have a default value result.");return V(a,d,1,d[0])})}catch(c){throw c;
}};l.when=function(a,b){try{return n(a,b,function(b,e,f){if(3>f.length)throw Error("Missing Parameters");if(0===f.length%2)throw Error("Must have a default value result.");b=f[0];if(!1===d.isBoolean(b))throw Error("WHEN needs boolean test conditions");return W(a,f,0,b)})}catch(c){throw c;}};l.top=function(a,b){return n(a,b,function(a,b,f){d.pcCheck(f,2,2);if(d.isArray(f[0]))return d.toNumber(f[1])>=f[0].length?f[0].slice(0):f[0].slice(0,d.toNumber(f[1]));if(d.isImmutableArray(f[0]))return d.toNumber(f[1])>=
f[0].length()?f[0].slice(0):f[0].slice(0,d.toNumber(f[1]));throw Error("Top cannot accept this parameter type");})};l.first=function(a,b){return n(a,b,function(a,b,f){d.pcCheck(f,1,1);return d.isArray(f[0])?0===f[0].length?null:f[0][0]:d.isImmutableArray(f[0])?0===f[0].length()?null:f[0].get(0):null})};l.sort=function(a,b){return n(a,b,function(b,e,f){d.pcCheck(f,1,2);e=f[0];d.isImmutableArray(e)&&(e=e.toArray());if(!1===d.isArray(e))throw Error("Illegal Argument");if(1<f.length){if(!1===d.isFunctionParameter(f[1]))throw Error("Illegal Argument");
var c=function(a,c){return Z.callfunc(f[1],[a,c],b)};return a.isAsync?H(e,c):e=B(e,function(a,b){return c(a,b)})}if(0===e.length)return[];for(var g={},h=0;h<e.length;h++){var r=U(e[h]);""!==r&&(g[r]=!0)}if(!0===g.Array||!0===g.Dictionary||!0===g.Feature||!0===g.Point||!0===g.Polygon||!0===g.Polyline||!0===g.Multipoint||!0===g.Extent||!0===g.Function)return e.slice(0);var h=0,r="",l;for(l in g)h++,r=l;return e=1<h||"String"===r?B(e,function(a,b){if(null===a||void 0===a||a===d.voidOperation)return null===
b||void 0===b||b===d.voidOperation?0:1;if(null===b||void 0===b||b===d.voidOperation)return-1;a=d.toString(a);b=d.toString(b);return a<b?-1:a===b?0:1}):"Number"===r?B(e,function(a,b){return a-b}):"Boolean"===r?B(e,function(a,b){return a===b?0:b?-1:1}):"Date"===r?B(e,function(a,b){return b-a}):e.slice(0)})};var E={},C;for(C in l)E[C]=new d.NativeFunction(l[C]);ga.registerFunctions(l,n);for(C in l)l[C]=new d.NativeFunction(l[C]);var K=function(){};K.prototype=l;var L=function(){};L.prototype=E;m.functionHelper=
{fixSpatialReference:d.fixSpatialReference,parseArguments:function(a,b){for(var c=[],e=0;e<b.arguments.length;e++)c.push(g(a,b.arguments[e]));return c},standardFunction:n};m.extend=X;m.executeScript=function(a,b){return a(b)};m.extractFieldLiterals=function(a,b){void 0===b&&(b=!1);return h.findFieldLiterals(a)};m.validateScript=function(a,b){return h.validateScript(a,b,"sync")};m.referencesMember=function(a,b){return h.referencesMember(a,b)};m.referencesFunction=function(a,b){return h.referencesFunction(a,
b)};var Q=0,Z={error:function(a,b,c){throw Error(h.nodeErrorMessage(a,b,c));},__awaiter:function(a,b,c,e){return u.create(function(c,d){function f(a){try{h(e.next(a))}catch(J){d(J)}}function g(a){try{h(e["throw"](a))}catch(J){d(J)}}function h(a){a.done?c(a.value):a.value&&a.value.then?a.value.then(f,g):(Q++,0===Q%100?setTimeout(function(){Q=0;f(a.value)},0):f(a.value))}h((e=e.apply(a,b||[])).next())})},functionDepthchecker:function(a,b){return function(){b.depthCounter++;b.localStack.push([]);if(64<
b.depthCounter)throw Error("Exceeded maximum function depth");var c=a.apply(this,arguments);if(u.isPromiseLike(c))return c.then(function(a){b.depthCounter--;--b.localStack.length;return a});b.depthCounter--;--b.localStack.length;return c}},castString:function(a){return d.toString(a)},aCheck:function(a,b){if(d.isFunctionParameter(a))throw Error(h.nodeErrorMessage({type:b},"RUNTIME","FUNCTIONCONTEXTILLEGAL"));return a===d.voidOperation?null:a},Dictionary:p,Feature:y,dictionary:function(a){for(var b=
{},c=0;c<a.length;c+=2){if(d.isFunctionParameter(a[c+1]))throw Error("Illegal Argument");if(!1===d.isString(a[c]))throw Error("Illegal Argument");b[a[c].toString()]=a[c+1]===d.voidOperation?null:a[c+1]}a=new p(b);a.immutable=!1;return a},strCheck:function(a){if(!1===d.isString(a))throw Error("Illegal Argument");return a},unary:function(a,b){if(d.isBoolean(a)){if("!"===b)return!a;if("-"===b)return-1*d.toNumber(a);if("+"===b)return 1*d.toNumber(a);if("~"===b)return~d.toNumber(a);throw Error(h.nodeErrorMessage({type:"UnaryExpression",
operator:b,prefix:null,argument:null},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));}if("-"===b)return-1*d.toNumber(a);if("+"===b)return 1*d.toNumber(a);if("~"===b)return~d.toNumber(a);throw Error(h.nodeErrorMessage({type:"UnaryExpression",operator:b,prefix:null,argument:null},"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));},logicalCheck:function(a){if(!1===d.isBoolean(a))throw Error(h.nodeErrorMessage({type:"LogicalExpression",operator:null,left:null,right:null},"RUNTIME","ONLYORORAND"));return a},logical:function(a,
b,c){if(d.isBoolean(a)&&d.isBoolean(b))switch(c){case "||":return a||b;case "\x26\x26":return a&&b}throw Error(h.nodeErrorMessage({type:"LogicalExpression",operator:null,left:null,right:null},"RUNTIME","ONLYORORAND"));},binary:function(a,b,c){switch(c){case "|":case "\x3c\x3c":case "\x3e\x3e":case "\x3e\x3e\x3e":case "^":case "\x26":return d.binaryOperator(d.toNumber(a),d.toNumber(b),c);case "\x3d\x3d":return d.equalityTest(a,b);case "\x3d":return d.equalityTest(a,b);case "!\x3d":return!d.equalityTest(a,
b);case "\x3c":return d.greaterThanLessThan(a,b,c);case "\x3e":return d.greaterThanLessThan(a,b,c);case "\x3c\x3d":return d.greaterThanLessThan(a,b,c);case "\x3e\x3d":return d.greaterThanLessThan(a,b,c);case "+":return d.isString(a)||d.isString(b)?d.toString(a)+d.toString(b):d.toNumber(a)+d.toNumber(b);case "-":return d.toNumber(a)-d.toNumber(b);case "*":return d.toNumber(a)*d.toNumber(b);case "/":return d.toNumber(a)/d.toNumber(b);case "%":return d.toNumber(a)%d.toNumber(b);default:throw Error(h.nodeErrorMessage({type:"BinaryExpression",
operator:c,left:a,right:b},"RUNTIME","OPERATORNOTRECOGNISED"));}},assign:function(a,b,c){switch(b){case "\x3d":return a===d.voidOperation?null:a;case "/\x3d":return d.toNumber(c)/d.toNumber(a);case "*\x3d":return d.toNumber(c)*d.toNumber(a);case "-\x3d":return d.toNumber(c)-d.toNumber(a);case "+\x3d":return d.isString(c)||d.isString(a)?d.toString(c)+d.toString(a):d.toNumber(c)+d.toNumber(a);case "%\x3d":return d.toNumber(c)%d.toNumber(a);default:throw Error(h.nodeErrorMessage({type:"AssignmentExpression",
operator:b,left:null,right:null},"RUNTIME","OPERATORNOTRECOGNISED"));}},update:function(a,b,c,e){var f=d.toNumber(a[b]);a[b]="++"===c?f+1:f-1;return!1===e?f:"++"===c?f+1:f-1},graphicToFeature:function(a,b){return null===a?null:y.createFromGraphicLikeObject(a.geometry,a.attributes,b)},memberupdate:function(a,b,c,e){var f;if(d.isArray(a))if(d.isNumber(b)){0>b&&(b=a.length+b);if(0>b||b>=a.length)throw Error("Assignment outside of array bounds");f=d.toNumber(a[b]);a[b]="++"===c?f+1:f-1}else throw Error("Invalid Parameter");
else if(a instanceof p){if(!1===d.isString(b))throw Error("Dictionary accessor must be a string");if(!0===a.hasField(b))f=d.toNumber(a.field(b)),a.setField(b,"++"===c?f+1:f-1);else throw Error("Invalid Parameter");}else if(a instanceof y){if(!1===d.isString(b))throw Error("Feature accessor must be a string");if(!0===a.hasField(b))f=d.toNumber(a.field(b)),a.setField(b,"++"===c?f+1:f-1);else throw Error("Invalid Parameter");}else{if(d.isImmutableArray(a))throw Error("Array is Immutable");throw Error("Invalid Parameter");
}return!1===e?f:"++"===c?f+1:f-1},assignmember:function(a,b,c,e){if(d.isArray(a))if(d.isNumber(b)){0>b&&(b=a.length+b);if(0>b||b>a.length)throw Error("Assignment outside of array bounds");if(b===a.length&&"\x3d"!==c)throw Error("Invalid Parameter");a[b]=this.assign(e,c,a[b])}else throw Error("Invalid Parameter");else if(a instanceof p){if(!1===d.isString(b))throw Error("Dictionary accessor must be a string");if(!0===a.hasField(b))a.setField(b,this.assign(e,c,a.field(b)));else{if("\x3d"!==c)throw Error("Invalid Parameter");
a.setField(b,this.assign(e,c,null))}}else if(a instanceof y){if(!1===d.isString(b))throw Error("Feature accessor must be a string");if(!0===a.hasField(b))a.setField(b,this.assign(e,c,a.field(b)));else{if("\x3d"!==c)throw Error("Invalid Parameter");a.setField(b,this.assign(e,c,null))}}else{if(d.isImmutableArray(a))throw Error("Array is Immutable");throw Error("Invalid Parameter");}},member:function(a,b){if(null===a)throw Error(h.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},
"RUNTIME","NOTFOUND"));if(a instanceof ra.FeatureSetReader){if(d.isString(b))return a.field(b);throw Error(h.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"));}if(a instanceof p||a instanceof y){if(d.isString(b))return a.field(b);throw Error(h.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"));}if(a instanceof la){if(d.isString(b))return ya(a,b,"MemberExpression");throw Error(h.nodeErrorMessage({type:"MemberExpression",
object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"));}if(d.isArray(a)){if(d.isNumber(b)&&isFinite(b)&&Math.floor(b)===b){0>b&&(b=a.length+b);if(b>=a.length||0>b)throw Error(h.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","OUTOFBOUNDS"));return a[b]}throw Error(h.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"));}if(d.isString(a)){if(d.isNumber(b)&&isFinite(b)&&Math.floor(b)===b){0>
b&&(b=a.length+b);if(b>=a.length||0>b)throw Error(h.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","OUTOFBOUNDS"));return a[b]}throw Error(h.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"));}if(d.isImmutableArray(a)&&d.isNumber(b)&&isFinite(b)&&Math.floor(b)===b){0>b&&(b=a.length()+b);if(b>=a.length()||0>b)throw Error(h.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},
"RUNTIME","OUTOFBOUNDS"));return a.get(b)}throw Error(h.nodeErrorMessage({type:"MemberExpression",object:null,property:null,computed:null},"RUNTIME","INVALIDTYPE"));},callfunc:function(a,b,c){return a instanceof d.NativeFunction?a.fn(c,b):a instanceof d.SizzleFunction?a.fn.apply(this,b):a.apply(this,b)}};m.compileScript=function(a,b,c){void 0===b&&(b=null);void 0===c&&(c=!1);null===b&&(b={vars:{},customfunctions:{}});b={isAsync:c,globalScope:za(b.vars,c?E:l,b.customfunctions),localScope:null,mangleMap:{},
console:Y,lrucache:b.lrucache,services:b.services,symbols:{symbolCounter:0}};a=g(b,a.body[0].body);""===a&&(a="lc.voidOperation; ");b={lc:d,lang:Z,mangles:b.mangleMap,postProcess:function(a){a instanceof d.ReturnResult&&(a=a.value);a instanceof d.ImplicitResult&&(a=a.value);a===d.voidOperation&&(a=null);if(a===d.breakResult)throw Error("Cannot return BREAK");if(a===d.continueResult)throw Error("Cannot return CONTINUE");if(d.isFunctionParameter(a))throw Error("Cannot return FUNCTION");return a},prepare:function(a,
b){var c=a.spatialReference;if(null===c||void 0===c)c=new qa({wkid:102100});var d=a.vars,e=a.customfunctions,f=b?new L:new K;d||(d={});e||(e={});var g=new p({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});g.immutable=!1;f._SymbolsMap={textformatting:1,infinity:1,pi:1};f.textformatting=g;f.infinity=Number.POSITIVE_INFINITY;f.pi=Math.PI;for(var h in e)f[h]=e[h],f._SymbolsMap[h]=1;for(h in d)f._SymbolsMap[h]=1,f[h]=d[h]&&"esri.Graphic"===d[h].declaredClass?
y.createFromGraphic(d[h]):d[h];return{localStack:[],isAsync:b,mangleMap:this.mangles,spatialReference:c,globalScope:f,abortSignal:void 0===a.abortSignal||null===a.abortSignal?{aborted:!1}:a.abortSignal,localScope:null,services:a.services,console:a.console?a.console:Y,lrucache:a.lrucache,symbols:{symbolCounter:0},depthCounter:1}}};return(new Function("context","spatialReference",c?"var runtimeCtx\x3dthis.prepare(context, true);\n var lc \x3d this.lc;  var lang \x3d this.lang; var gscope\x3druntimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement\x3dlc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n"+
a+"\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); ":"var runtimeCtx\x3dthis.prepare(context, false);\n var lc \x3d this.lc;  var lang \x3d this.lang; var gscope\x3druntimeCtx.globalScope; \n function mainBody() {\n var lastStatement\x3dlc.voidOperation;\n "+a+"\n return lastStatement; } \n return this.postProcess(mainBody()); ")).bind(b)};m.enableAsyncSupport=function(){return(new Promise(function(a,b){aa(["./functions/geomasync"],a,b)})).then(function(a){X([a],"async");
return!0})}});
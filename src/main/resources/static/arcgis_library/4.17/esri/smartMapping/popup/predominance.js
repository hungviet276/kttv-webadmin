// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.17/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../PopupTemplate ../../core/Error ../../core/promiseUtils ../../intl/messages ../../intl/substitute ../../popup/ExpressionInfo ../../popup/FieldInfo ./support/utils ../statistics/support/predominanceUtils".split(" "),function(M,z,u,q,B,C,D,p,v,w,H,x){function r(a,b){return{fieldInfo:new w({fieldName:"expression/predominant-category"}),expressionInfo:new v({name:"predominant-category",title:b.predominantCategory,expression:x.getArcadeForPredominantCategoryAlias(a)})}}
function y(a,b){a=a.map(function(a){return a.fieldName});return{fieldInfo:new w({fieldName:"expression/predominant-value",format:{digitSeparator:!0,places:1}}),expressionInfo:new v({name:"predominant-value",title:b.predominantCategoryValue,expression:x.getArcadeForPredominantCategoryValue(a),returnType:"number"})}}function I(a,b){a=a.map(function(a){return a.fieldName});return{fieldInfo:new w({fieldName:"expression/predominant-margin",format:{digitSeparator:!0,places:0}}),expressionInfo:new v({name:"predominant-margin",
title:b.marginOfVictory,expression:x.getArcadeForPredominanceMargin(a),returnType:"number"})}}function A(a,b){a=a.map(function(a){return a.fieldName});return{fieldInfo:new w({fieldName:"expression/predominant-strength",format:{digitSeparator:!0,places:0}}),expressionInfo:new v({name:"predominant-strength",title:b.strengthOfPredominance,expression:x.getArcadeForStrengthOfPredominance(a),returnType:"number"})}}function J(a,b){a=a.map(function(a){return a.fieldName});return{fieldInfo:new w({fieldName:"expression/predominant-total",
format:{digitSeparator:!0,places:0}}),expressionInfo:new v({name:"predominant-total",title:b.sumOfCategories,expression:x.getArcadeForSumOfFields(a),returnType:"number"})}}function E(a,b){var d,f=a.renderer;d=a.fieldInfos;var g=r(d,b),e=y(d,b),c=A(d,b);a=new w({fieldName:"expression/predominant-categories-list"});d=new v({name:"predominant-categories-list",title:b.listOfCategories,expression:x.getArcadeForOrderedFields(d)});f=new q({expressionInfos:[g.expressionInfo,e.expressionInfo,c.expressionInfo,
d],fieldInfos:[g.fieldInfo,e.fieldInfo,c.fieldInfo,a],title:f.legendOptions&&f.legendOptions.title?f.legendOptions.title:b.competingFields,content:[{type:"text",text:p.substitute(b.predominantCategoryStrengthContent,{expression1:"{"+e.fieldInfo.fieldName+"}",expression2:"\x3cb\x3e{"+g.fieldInfo.fieldName+"}\x3c/b\x3e",expression3:"\x3cb\x3e{"+c.fieldInfo.fieldName+"}%\x3c/b\x3e"})},{type:"text",text:"{"+a.fieldName+"}"}]});return{name:"predominant-categories-list",title:b.orderedListOfValues,value:f}}
function K(a,b){var d=a.renderer;a=a.fieldInfos;var f=r(a,b),g=y(a,b),e=A(a,b),d=new q({expressionInfos:[g.expressionInfo,f.expressionInfo,e.expressionInfo],fieldInfos:[g.fieldInfo,f.fieldInfo,e.fieldInfo],title:d.legendOptions&&d.legendOptions.title?d.legendOptions.title:b.competingFields,content:[{type:"text",text:p.substitute(b.predominantCategoryStrengthContent,{expression1:"{"+g.fieldInfo.fieldName+"}",expression2:"\x3cb\x3e{"+f.fieldInfo.fieldName+"}\x3c/b\x3e",expression3:"\x3cb\x3e{"+e.fieldInfo.fieldName+
"}%\x3c/b\x3e"})},{type:"media",mediaInfos:{type:"pie-chart",value:{fields:a.map(function(a){return a.fieldName})}}}]});return{name:"predominant-category-chart",title:b.predominantCategoryWithChart,value:d}}function L(a,b){a=a.authoringInfo;a="predominance"===a.type?a.fields:[];if(!a||!a.length)throw new B("predominance-popup:insufficient-info","unable to find input fields in authoringInfo");return a.map(function(a){return H.getFieldInfo(b,a)})}function F(a){return u.__awaiter(this,void 0,void 0,
function(){var b,d,f,g;return u.__generator(this,function(e){switch(e.label){case 0:return b=a.layer,d=a.renderer,[4,b.load()];case 1:e.sent();f=d||b.renderer;if("unique-value"!==f.type)throw new B("predmoinance-popup:invalid-parameters","renderer.type must be 'unique-value'");g=L(f,b);return[2,{renderer:f,fieldInfos:g}]}})})}function G(a){return u.__awaiter(this,void 0,void 0,function(){var b,d,f;return u.__generator(this,function(g){switch(g.label){case 0:return[4,C.all([F(a),D.loadMessageBundle("esri/smartMapping/t9n/smartMapping")])];
case 1:b=g.sent();d=b[0];g=f=b[1];var e=r(d.fieldInfos,g),e=new q({expressionInfos:[e.expressionInfo],fieldInfos:[e.fieldInfo],content:p.substitute(g.predominantCategoryContent,{expression:"\x3cb\x3e{"+e.fieldInfo.fieldName+"}\x3c/b\x3e"})});g={name:"predominant-category",title:g.predominantCategory,value:e};var e=f,c=d.fieldInfos,k=r(c,e),c=y(c,e),k=new q({expressionInfos:[c.expressionInfo,k.expressionInfo],fieldInfos:[c.fieldInfo,k.fieldInfo],content:p.substitute(e.predominantCategoryValueContent,
{expression1:"\x3cb\x3e{"+k.fieldInfo.fieldName+"}\x3c/b\x3e",expression2:"\x3cb\x3e{"+c.fieldInfo.fieldName+"}\x3c/b\x3e"})}),e={name:"predominant-category-value",title:e.predominantCategoryValue,value:k},k=f,h=d.fieldInfos,c=r(h,k),m=y(h,k),h=I(h,k),c=new q({expressionInfos:[m.expressionInfo,c.expressionInfo,h.expressionInfo],fieldInfos:[m.fieldInfo,c.fieldInfo,h.fieldInfo],title:p.substitute(k.mostCommon,{expression:"{expression/predominant-category}"}),content:p.substitute(k.predominantCategoryValueMarginContent,
{expression1:"\x3cb\x3e{"+c.fieldInfo.fieldName+"}\x3c/b\x3e",expression2:"\x3cb\x3e{"+m.fieldInfo.fieldName+"}\x3c/b\x3e",expression3:"\x3cb\x3e{"+h.fieldInfo.fieldName+"}\x3c/b\x3e"})}),k={name:"predominant-category-value-margin",title:k.marginOfVictory,value:c},c=f,l=d.fieldInfos,m=r(l,c),h=y(l,c),n=A(l,c),l=J(l,c),m=new q({expressionInfos:[h.expressionInfo,m.expressionInfo,l.expressionInfo,n.expressionInfo],fieldInfos:[h.fieldInfo,m.fieldInfo,l.fieldInfo,n.fieldInfo],content:p.substitute(c.predominantCategoryTotalStrengthContent,
{expression1:"{"+h.fieldInfo.fieldName+"}",expression2:"\x3cb\x3e{"+m.fieldInfo.fieldName+"}\x3c/b\x3e",expression3:"\x3cb\x3e{"+n.fieldInfo.fieldName+"}%\x3c/b\x3e",expression4:"{"+l.fieldInfo.fieldName+"}"})}),c={name:"predominant-category-total-strength",title:c.predominantCategoryWithTotalAndStrength,value:m},m=E(d,f),h=f,t=d.fieldInfos,n=r(t,h),l=y(t,h),t=A(t,h),n=new q({expressionInfos:[l.expressionInfo,n.expressionInfo,t.expressionInfo],fieldInfos:[l.fieldInfo,n.fieldInfo,t.fieldInfo],content:p.substitute(h.predominantCategoryStrengthContent,
{expression1:"{"+l.fieldInfo.fieldName+"}",expression2:"\x3cb\x3e{"+n.fieldInfo.fieldName+"}\x3c/b\x3e",expression3:"\x3cb\x3e{"+t.fieldInfo.fieldName+"}%\x3c/b\x3e"})});return[2,[g,e,k,c,m,{name:"predominant-category-strength",title:h.strengthOfPredominance,value:n},K(d,f)]]}})})}Object.defineProperty(z,"__esModule",{value:!0});z.getTemplates=z.getAllTemplates=void 0;z.getAllTemplates=G;z.getTemplates=function(a){return u.__awaiter(this,void 0,void 0,function(){var b,d,f,g,e;return u.__generator(this,
function(c){switch(c.label){case 0:return[4,C.all([F(a),D.loadMessageBundle("esri/smartMapping/t9n/smartMapping")])];case 1:return b=c.sent(),d=b[0],f=b[1],g=E(d,f),[4,G(a)];case 2:return e=c.sent(),[2,{primaryTemplate:g,secondaryTemplates:e.filter(function(a){return a.name!==g.name})}]}})})}});
//>>built
define(["./_base/kernel","require","./has","./has!host-browser?./request"],function(r,g,t,u){var k;t("host-browser")?k=function(a,c,b){u(a,{sync:!!c,headers:{"X-Requested-With":null}}).then(b)}:g.getText?k=g.getText:console.error("dojo/text plugin failed to load because loader does not support getText");var d={},m=function(a){if(a){a=a.replace(/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,"");var c=a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);c&&(a=c[1])}else a="";return a},p={},l=
{};r.cache=function(a,c,b){var e;"string"==typeof a?/\//.test(a)?(e=a,b=c):e=g.toUrl(a.replace(/\./g,"/")+(c?"/"+c:"")):(e=a+"",b=c);a=void 0!=b&&"string"!=typeof b?b.value:b;b=b&&b.sanitize;if("string"==typeof a)return d[e]=a,b?m(a):a;if(null===a)return delete d[e],null;e in d||k(e,!0,function(a){d[e]=a});return b?m(d[e]):d[e]};return{dynamic:!0,normalize:function(a,c){a=a.split("!");var b=a[0];return(/^\./.test(b)?c(b):b)+(a[1]?"!"+a[1]:"")},load:function(a,c,b){a=a.split("!");var e=1<a.length,
g=a[0],f=c.toUrl(a[0]);a="url:"+f;var h=p,n=function(a){b(e?m(a):a)};g in d?h=d[g]:c.cache&&a in c.cache?h=c.cache[a]:f in d&&(h=d[f]);if(h===p)if(l[f])l[f].push(n);else{var q=l[f]=[n];k(f,!c.async,function(a){d[g]=d[f]=a;for(var b=0;b<q.length;)q[b++](a);delete l[f]})}else n(h)}}});
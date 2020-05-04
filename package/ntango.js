{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.oI(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kw(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={kg:function kg(){},
an:function(a,b,c,d){P.ak(b,"start")
if(c!=null){P.ak(c,"end")
if(typeof b!=="number")return b.K()
if(b>c)H.X(P.aK(b,0,c,"start",null))}return new H.hL(a,b,c,[d])},
lc:function(a,b,c,d){if(!!J.j(a).$iJ)return new H.bX(a,b,[c,d])
return new H.c_(a,b,[c,d])},
nw:function(a,b,c){P.ak(b,"takeCount")
if(!!J.j(a).$iJ)return new H.fg(a,b,[c])
return new H.dw(a,b,[c])},
dr:function(a,b,c){if(!!J.j(a).$iJ){P.ak(b,"count")
return new H.d6(a,b,[c])}P.ak(b,"count")
return new H.cC(a,b,[c])},
da:function(){return new P.aY("No element")},
n6:function(){return new P.aY("Too many elements")},
n5:function(){return new P.aY("Too few elements")},
ll:function(a,b,c){H.ds(a,0,J.a4(a)-1,b,c)},
ds:function(a,b,c,d,e){if(c-b<=32)H.nv(a,b,c,d,e)
else H.nu(a,b,c,d,e)},
nv:function(a,b,c,d,e){var u,t,s,r,q,p
for(u=b+1,t=J.Q(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.K()
q=q>0}else q=!1
if(!q)break
p=r-1
t.i(a,r,t.h(a,p))
r=p}t.i(a,r,s)}},
nu:function(a3,a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.al(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.al(a4+a5,2),f=g-j,e=g+j,d=J.Q(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.K()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.K()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.K()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.K()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.K()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.K()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.K()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.K()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.K()
if(a2>0){u=a1
a1=a0
a0=u}d.i(a3,i,c)
d.i(a3,g,a)
d.i(a3,h,a1)
d.i(a3,f,d.h(a3,a4))
d.i(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.a8(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.ah()
if(p<0){if(r!==t){d.i(a3,r,d.h(a3,t))
d.i(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.K()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.i(a3,r,d.h(a3,t))
n=t+1
d.i(a3,t,d.h(a3,s))
d.i(a3,s,q)
s=o
t=n
break}else{d.i(a3,r,d.h(a3,s))
d.i(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.ah()
if(l<0){if(r!==t){d.i(a3,r,d.h(a3,t))
d.i(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.K()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.K()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.ah()
o=s-1
if(p<0){d.i(a3,r,d.h(a3,t))
n=t+1
d.i(a3,t,d.h(a3,s))
d.i(a3,s,q)
t=n}else{d.i(a3,r,d.h(a3,s))
d.i(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.i(a3,a4,d.h(a3,a2))
d.i(a3,a2,b)
a2=s+1
d.i(a3,a5,d.h(a3,a2))
d.i(a3,a2,a0)
H.ds(a3,a4,t-2,a6,a7)
H.ds(a3,s+2,a5,a6,a7)
if(m)return
if(t<i&&s>h){for(;J.a8(a6.$2(d.h(a3,t),b),0);)++t
for(;J.a8(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.i(a3,r,d.h(a3,t))
d.i(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.ah()
o=s-1
if(p<0){d.i(a3,r,d.h(a3,t))
n=t+1
d.i(a3,t,d.h(a3,s))
d.i(a3,s,q)
t=n}else{d.i(a3,r,d.h(a3,s))
d.i(a3,s,q)}s=o
break}}H.ds(a3,t,s,a6,a7)}else H.ds(a3,t,s,a6,a7)},
J:function J(){},
aC:function aC(){},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cu:function cu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c_:function c_(a,b,c){this.a=a
this.b=b
this.$ti=c},
bX:function bX(a,b,c){this.a=a
this.b=b
this.$ti=c},
aJ:function aJ(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
av:function av(a,b,c){this.a=a
this.b=b
this.$ti=c},
bd:function bd(a,b,c){this.a=a
this.b=b
this.$ti=c},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
dw:function dw(a,b,c){this.a=a
this.b=b
this.$ti=c},
fg:function fg(a,b,c){this.a=a
this.b=b
this.$ti=c},
hO:function hO(a,b,c){this.a=a
this.b=b
this.$ti=c},
cC:function cC(a,b,c){this.a=a
this.b=b
this.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a){this.$ti=a},
fj:function fj(a){this.$ti=a},
bt:function bt(){},
cF:function cF(a){this.a=a},
mW:function(){throw H.e(P.F("Cannot modify unmodifiable Map"))},
bM:function(a){var u,t=H.oK(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oh:function(a){return v.types[H.x(a)]},
op:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.j(a).$ias},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.L(a)
if(typeof u!=="string")throw H.e(H.aO(a))
return u},
bB:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
li:function(a,b){var u,t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return
if(3>=t.length)return H.A(t,3)
u=H.v(t[3])
if(u!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return},
nq:function(a){var u,t
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=C.e.aB(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
dp:function(a){return H.nh(a)+H.ku(H.bL(a),0,null)},
nh:function(a){var u,t,s,r,q,p,o,n=J.j(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.G||!!n.$ibE){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bM(t.length>1&&C.e.aF(t,0)===36?C.e.cz(t,1):t)},
aw:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.bT(u,10))>>>0,56320|u&1023)}throw H.e(P.aK(a,0,1114111,null,null))},
bA:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
np:function(a){var u=H.bA(a).getFullYear()+0
return u},
nn:function(a){var u=H.bA(a).getMonth()+1
return u},
nj:function(a){var u=H.bA(a).getDate()+0
return u},
nk:function(a){var u=H.bA(a).getHours()+0
return u},
nm:function(a){var u=H.bA(a).getMinutes()+0
return u},
no:function(a){var u=H.bA(a).getSeconds()+0
return u},
nl:function(a){var u=H.bA(a).getMilliseconds()+0
return u},
c1:function(a,b,c){var u,t,s={}
s.a=0
u=[]
t=[]
s.a=b.length
C.a.N(u,b)
s.b=""
if(c!=null&&c.a!==0)c.u(0,new H.ht(s,t,u))
""+s.a
return J.mH(a,new H.fT(C.P,0,u,t,0))},
ni:function(a,b,c){var u,t,s,r
if(b instanceof Array)u=c==null||c.a===0
else u=!1
if(u){t=b
s=t.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(t[0])}else if(s===2){if(!!a.$2)return a.$2(t[0],t[1])}else if(s===3){if(!!a.$3)return a.$3(t[0],t[1],t[2])}else if(s===4){if(!!a.$4)return a.$4(t[0],t[1],t[2],t[3])}else if(s===5)if(!!a.$5)return a.$5(t[0],t[1],t[2],t[3],t[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,t)}return H.ng(a,b,c)},
ng:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b instanceof Array?b:P.by(b,!0,null),k=l.length,j=a.$R
if(k<j)return H.c1(a,l,c)
u=a.$D
t=u==null
s=!t?u():null
r=J.j(a)
q=r.$C
if(typeof q==="string")q=r[q]
if(t){if(c!=null&&c.a!==0)return H.c1(a,l,c)
if(k===j)return q.apply(a,l)
return H.c1(a,l,c)}if(s instanceof Array){if(c!=null&&c.a!==0)return H.c1(a,l,c)
if(k>j+s.length)return H.c1(a,l,null)
C.a.N(l,s.slice(k-j))
return q.apply(a,l)}else{if(k>j)return H.c1(a,l,c)
p=Object.keys(s)
if(c==null)for(t=p.length,o=0;o<p.length;p.length===t||(0,H.O)(p),++o)C.a.k(l,s[H.v(p[o])])
else{for(t=p.length,n=0,o=0;o<p.length;p.length===t||(0,H.O)(p),++o){m=H.v(p[o])
if(c.p(m)){++n
C.a.k(l,c.h(0,m))}else C.a.k(l,s[m])}if(n!==c.a)return H.c1(a,l,c)}return q.apply(a,l)}},
Y:function(a){throw H.e(H.aO(a))},
A:function(a,b){if(a==null)J.a4(a)
throw H.e(H.bi(a,b))},
bi:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aR(!0,b,s,null)
u=H.x(J.a4(a))
if(!(b<0)){if(typeof u!=="number")return H.Y(u)
t=b>=u}else t=!0
if(t)return P.aW(b,a,s,null,u)
return P.cA(b,s)},
aO:function(a){return new P.aR(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.dm()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.m8})
u.name=""}else u.toString=H.m8
return u},
m8:function(){return J.L(this.dartException)},
X:function(a){throw H.e(a)},
O:function(a){throw H.e(P.ar(a))},
b_:function(a){var u,t,s,r,q,p
a=H.m5(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.t([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hR(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hS:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ln:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lg:function(a,b){return new H.hp(a,b==null?null:b.method)},
kh:function(a,b){var u=b==null,t=u?null:b.method
return new H.fW(a,t,u?null:b.receiver)},
T:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.bT(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kh(H.c(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lg(H.c(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mb()
q=$.mc()
p=$.md()
o=$.me()
n=$.mh()
m=$.mi()
l=$.mg()
$.mf()
k=$.mk()
j=$.mj()
i=r.a3(u)
if(i!=null)return f.$1(H.kh(H.v(u),i))
else{i=q.a3(u)
if(i!=null){i.method="call"
return f.$1(H.kh(H.v(u),i))}else{i=p.a3(u)
if(i==null){i=o.a3(u)
if(i==null){i=n.a3(u)
if(i==null){i=m.a3(u)
if(i==null){i=l.a3(u)
if(i==null){i=o.a3(u)
if(i==null){i=k.a3(u)
if(i==null){i=j.a3(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lg(H.v(u),i))}}return f.$1(new H.hU(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dt()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aR(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dt()
return a},
b4:function(a){var u
if(a==null)return new H.dR(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dR(a)},
m1:function(a){if(a==null||typeof a!='object')return J.b6(a)
else return H.bB(a)},
lT:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.i(0,a[u],a[t])}return b},
oo:function(a,b,c,d,e,f){H.a(a,"$iaH")
switch(H.x(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.l7("Unsupported number of arguments for wrapped closure"))},
cc:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oo)
a.$identity=u
return u},
mU:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hE().constructor.prototype):Object.create(new H.ch(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aS
if(typeof t!=="number")return t.D()
$.aS=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kS(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mQ(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kS(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mQ:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oh,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kR:H.k7
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
mR:function(a,b,c,d){var u=H.k7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kS:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mT(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mR(t,!r,u,b)
if(t===0){r=$.aS
if(typeof r!=="number")return r.D()
$.aS=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ci
return new Function(r+H.c(q==null?$.ci=H.ex("self"):q)+";return "+p+"."+H.c(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aS
if(typeof r!=="number")return r.D()
$.aS=r+1
o+=r
r="return function("+o+"){return this."
q=$.ci
return new Function(r+H.c(q==null?$.ci=H.ex("self"):q)+"."+H.c(u)+"("+o+");}")()},
mS:function(a,b,c,d){var u=H.k7,t=H.kR
switch(b?-1:a){case 0:throw H.e(H.nt("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mT:function(a,b){var u,t,s,r,q,p,o,n=$.ci
if(n==null)n=$.ci=H.ex("self")
u=$.kQ
if(u==null)u=$.kQ=H.ex("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mS(s,!q,t,b)
if(s===1){n="return function(){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+");"
u=$.aS
if(typeof u!=="number")return u.D()
$.aS=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+", "+o+");"
u=$.aS
if(typeof u!=="number")return u.D()
$.aS=u+1
return new Function(n+u+"}")()},
kw:function(a,b,c,d,e,f,g){return H.mU(a,b,c,d,!!e,!!f,g)},
k7:function(a){return a.a},
kR:function(a){return a.c},
ex:function(a){var u,t,s,r=new H.ch("self","target","receiver","name"),q=J.kd(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
K:function(a){if(a==null)H.o7("boolean expression must not be null")
return a},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aL(a,"String"))},
oe:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aL(a,"double"))},
jT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aL(a,"num"))},
jJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aL(a,"bool"))},
x:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aL(a,"int"))},
m3:function(a,b){throw H.e(H.aL(a,H.bM(H.v(b).substring(2))))},
oD:function(a,b){throw H.e(H.mP(a,H.bM(H.v(b).substring(2))))},
a:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.j(a)[b])return a
H.m3(a,b)},
aQ:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.j(a)[b]
else u=!0
if(u)return a
H.oD(a,b)},
aq:function(a){if(a==null)return a
if(!!J.j(a).$im)return a
throw H.e(H.aL(a,"List<dynamic>"))},
a0:function(a,b){var u
if(a==null)return a
u=J.j(a)
if(!!u.$im)return a
if(u[b])return a
H.m3(a,b)},
lS:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.x(u)]
else return a.$S()}return},
bJ:function(a,b){var u
if(typeof a=="function")return!0
u=H.lS(J.j(a))
if(u==null)return!1
return H.lF(u,null,b,null)},
d:function(a,b){var u,t
if(a==null)return a
if($.kr)return a
$.kr=!0
try{if(H.bJ(a,b))return a
u=H.cV(b)
t=H.aL(a,u)
throw H.e(t)}finally{$.kr=!1}},
jL:function(a,b){if(a!=null&&!H.kv(a,b))H.X(H.aL(a,H.cV(b)))
return a},
aL:function(a,b){return new H.dy("TypeError: "+P.b9(a)+": type '"+H.c(H.lM(a))+"' is not a subtype of type '"+b+"'")},
mP:function(a,b){return new H.ey("CastError: "+P.b9(a)+": type '"+H.c(H.lM(a))+"' is not a subtype of type '"+b+"'")},
lM:function(a){var u,t=J.j(a)
if(!!t.$icj){u=H.lS(t)
if(u!=null)return H.cV(u)
return"Closure"}return H.dp(a)},
o7:function(a){throw H.e(new H.i4(a))},
oI:function(a){throw H.e(new P.f_(a))},
nt:function(a){return new H.hy(a)},
kx:function(a){return v.getIsolateTag(a)},
t:function(a,b){a.$ti=b
return a},
bL:function(a){if(a==null)return
return a.$ti},
pf:function(a,b,c){return H.cd(a["$a"+H.c(c)],H.bL(b))},
aA:function(a,b,c,d){var u=H.cd(a["$a"+H.c(c)],H.bL(b))
return u==null?null:u[d]},
D:function(a,b,c){var u=H.cd(a["$a"+H.c(b)],H.bL(a))
return u==null?null:u[c]},
b:function(a,b){var u=H.bL(a)
return u==null?null:u[b]},
cV:function(a){return H.bI(a,null)},
bI:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bM(a[0].name)+H.ku(a,1,b)
if(typeof a=="function")return H.bM(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.x(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.A(b,t)
return H.c(b[t])}if('func' in a)return H.nZ(a,b)
if('futureOr' in a)return"FutureOr<"+H.bI("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nZ:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.t([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.k(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.A(a0,m)
p=C.e.D(p,a0[m])
l=u[q]
if(l!=null&&l!==P.y)p+=" extends "+H.bI(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bI(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bI(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bI(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.og(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.v(n[g])
i=i+h+H.bI(d[c],a0)+(" "+H.c(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ku:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.am("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bI(p,c)}return"<"+u.m(0)+">"},
cd:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
e0:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bL(a)
t=J.j(a)
if(t[b]==null)return!1
return H.lP(H.cd(t[d],u),null,c,null)},
i:function(a,b,c,d){if(a==null)return a
if(H.e0(a,b,c,d))return a
throw H.e(H.aL(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bM(b.substring(2))+H.ku(c,0,null),v.mangledGlobalNames)))},
aP:function(a,b,c,d,e){if(!H.ao(a,null,b,null))H.oJ("TypeError: "+H.c(c)+H.cV(a)+H.c(d)+H.cV(b)+H.c(e))},
oJ:function(a){throw H.e(new H.dy(H.v(a)))},
lP:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ao(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ao(a[t],b,c[t],d))return!1
return!0},
pc:function(a,b,c){return a.apply(b,H.cd(J.j(b)["$a"+H.c(c)],H.bL(b)))},
lX:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="y"||a.name==="z"||a===-1||a===-2||H.lX(u)}return!1},
kv:function(a,b){var u,t
if(a==null)return b==null||b.name==="y"||b.name==="z"||b===-1||b===-2||H.lX(b)
if(b==null||b===-1||b.name==="y"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.kv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bJ(a,b)}u=J.j(a).constructor
t=H.bL(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ao(u,null,b,null)},
n:function(a,b){if(a!=null&&!H.kv(a,b))throw H.e(H.aL(a,H.cV(b)))
return a},
ao:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="y"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="y"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ao(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.ao(b[H.x(a)],b,c,d)
if(typeof c==="number")return!1
if(a.name==="z")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ao("type" in a?a.type:l,b,s,d)
else if(H.ao(a,b,s,d))return!0
else{if(!('$i'+"ab" in t.prototype))return!1
r=t.prototype["$a"+"ab"]
q=H.cd(r,u?a.slice(1):l)
return H.ao(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.lF(a,b,c,d)
if('func' in a)return c.name==="aH"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.lP(H.cd(m,u),b,p,d)},
lF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.ao(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.ao(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ao(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ao(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.ot(h,b,g,d)},
ot:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ao(c[s],d,a[s],b))return!1}return!0},
pe:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
or:function(a){var u,t,s,r,q=H.v($.lV.$1(a)),p=$.jK[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.v($.lO.$2(a,q))
if(q!=null){p=$.jK[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jR[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jS(u)
$.jK[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jR[q]=u
return u}if(s==="-"){r=H.jS(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.m2(a,u)
if(s==="*")throw H.e(P.lp(q))
if(v.leafTags[q]===true){r=H.jS(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.m2(a,u)},
m2:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kz(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jS:function(a){return J.kz(a,!1,null,!!a.$ias)},
os:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jS(u)
else return J.kz(u,c,null,null)},
ol:function(){if(!0===$.ky)return
$.ky=!0
H.om()},
om:function(){var u,t,s,r,q,p,o,n
$.jK=Object.create(null)
$.jR=Object.create(null)
H.ok()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.m4.$1(q)
if(p!=null){o=H.os(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ok:function(){var u,t,s,r,q,p,o=C.y()
o=H.cb(C.z,H.cb(C.A,H.cb(C.o,H.cb(C.o,H.cb(C.B,H.cb(C.C,H.cb(C.D(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lV=new H.jO(r)
$.lO=new H.jP(q)
$.m4=new H.jQ(p)},
cb:function(a,b){return a(b)||b},
ne:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(P.cn("Illegal RegExp pattern ("+String(p)+")",a))},
oE:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
of:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
m5:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jV:function(a,b,c){var u=H.oF(a,b,c)
return u},
oF:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.m5(b),'g'),H.of(c))},
oG:function(a,b,c,d){var u=a.indexOf(b,d)
if(u<0)return a
return H.oH(a,u,u+b.length,c)},
oH:function(a,b,c,d){var u=a.substring(0,b),t=a.substring(c)
return u+d+t},
eU:function eU(a,b){this.a=a
this.$ti=b},
eT:function eT(){},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ie:function ie(a,b){this.a=a
this.$ti=b},
fT:function fT(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
ht:function ht(a,b,c){this.a=a
this.b=b
this.c=c},
hR:function hR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hp:function hp(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(a){this.a=a},
jW:function jW(a){this.a=a},
dR:function dR(a){this.a=a
this.b=null},
cj:function cj(){},
hP:function hP(){},
hE:function hE(){},
ch:function ch(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dy:function dy(a){this.a=a},
ey:function ey(a){this.a=a},
hy:function hy(a){this.a=a},
i4:function i4(a){this.a=a},
at:function at(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fV:function fV(a){this.a=a},
h2:function h2(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bx:function bx(a,b){this.a=a
this.$ti=b},
h3:function h3(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
fU:function fU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hK:function hK(a,b){this.a=a
this.c=b},
ko:function ko(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
b2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bi(b,a))},
cy:function cy(){},
di:function di(){},
cx:function cx(){},
dj:function dj(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
dk:function dk(){},
hg:function hg(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
lW:function(a){var u=J.j(a)
return!!u.$ibQ||!!u.$ik||!!u.$icr||!!u.$icp||!!u.$iw||!!u.$ibF||!!u.$ibe},
og:function(a){return J.n7(a?Object.keys(a):[],null)},
oK:function(a){return v.mangledGlobalNames[a]},
oC:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jN:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ky==null){H.ol()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.lp("Return interceptor for "+H.c(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kC()]
if(r!=null)return r
r=H.or(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.kC(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
n7:function(a,b){return J.kd(H.t(a,[b]))},
kd:function(a){a.fixed$length=Array
return a},
l8:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ke:function(a,b){var u,t
for(u=a.length;b<u;){t=C.e.aF(a,b)
if(t!==32&&t!==13&&!J.l8(t))break;++b}return b},
nd:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.e.dz(a,u)
if(t!==32&&t!==13&&!J.l8(t))break}return b},
j:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.db.prototype
return J.fR.prototype}if(typeof a=="string")return J.bv.prototype
if(a==null)return J.dc.prototype
if(typeof a=="boolean")return J.fQ.prototype
if(a.constructor==Array)return J.bu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.y)return a
return J.jN(a)},
Q:function(a){if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(a.constructor==Array)return J.bu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.y)return a
return J.jN(a)},
bK:function(a){if(a==null)return a
if(a.constructor==Array)return J.bu.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.y)return a
return J.jN(a)},
e1:function(a){if(typeof a=="number")return J.bZ.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.bE.prototype
return a},
lU:function(a){if(typeof a=="number")return J.bZ.prototype
if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.bE.prototype
return a},
jM:function(a){if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.bE.prototype
return a},
a3:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.y)return a
return J.jN(a)},
a8:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.j(a).P(a,b)},
mq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.e1(a).K(a,b)},
kH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lU(a).at(a,b)},
Z:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.op(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.Q(a).h(a,b)},
mr:function(a,b,c,d){return J.a3(a).ez(a,b,c,d)},
jY:function(a){return J.a3(a).eD(a)},
ms:function(a,b,c,d){return J.a3(a).fc(a,b,c,d)},
mt:function(a,b,c){return J.a3(a).fd(a,b,c)},
bj:function(a,b){return J.bK(a).k(a,b)},
mu:function(a,b){return J.lU(a).am(a,b)},
mv:function(a,b){return J.Q(a).E(a,b)},
e3:function(a,b,c){return J.Q(a).fK(a,b,c)},
mw:function(a,b){return J.a3(a).dC(a,b)},
aG:function(a,b){return J.bK(a).A(a,b)},
cW:function(a){return J.e1(a).c4(a)},
mx:function(a){return J.a3(a).gfA(a)},
my:function(a){return J.a3(a).gdu(a)},
bk:function(a){return J.a3(a).gdv(a)},
b6:function(a){return J.j(a).gq(a)},
mz:function(a){return J.Q(a).gM(a)},
mA:function(a){return J.Q(a).gcd(a)},
B:function(a){return J.bK(a).gv(a)},
a4:function(a){return J.Q(a).gj(a)},
mB:function(a){return J.a3(a).gdM(a)},
mC:function(a){return J.a3(a).gdP(a)},
mD:function(a){return J.a3(a).gdQ(a)},
mE:function(a,b){return J.bK(a).S(a,b)},
mF:function(a,b,c){return J.bK(a).G(a,b,c)},
mG:function(a,b){return J.a3(a).h3(a,b)},
mH:function(a,b){return J.j(a).bg(a,b)},
cX:function(a){return J.a3(a).bh(a)},
mI:function(a,b){return J.a3(a).he(a,b)},
e4:function(a){return J.e1(a).w(a)},
jZ:function(a,b){return J.a3(a).L(a,b)},
kI:function(a,b,c){return J.a3(a).cw(a,b,c)},
mJ:function(a,b,c){return J.jM(a).ab(a,b,c)},
kJ:function(a){return J.e1(a).cq(a)},
mK:function(a){return J.bK(a).O(a)},
mL:function(a){return J.jM(a).hi(a)},
L:function(a){return J.j(a).m(a)},
mM:function(a,b){return J.e1(a).hj(a,b)},
k_:function(a){return J.jM(a).aB(a)},
k0:function(a,b){return J.bK(a).as(a,b)},
a7:function a7(){},
fQ:function fQ(){},
dc:function dc(){},
dd:function dd(){},
hs:function hs(){},
bE:function bE(){},
bw:function bw(){},
bu:function bu(a){this.$ti=a},
kf:function kf(a){this.$ti=a},
bl:function bl(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bZ:function bZ(){},
db:function db(){},
fR:function fR(){},
bv:function bv(){}},P={
nJ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.o8()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cc(new P.i6(s),1)).observe(u,{childList:true})
return new P.i5(s,u,t)}else if(self.setImmediate!=null)return P.o9()
return P.oa()},
nK:function(a){self.scheduleImmediate(H.cc(new P.i7(H.d(a,{func:1,ret:-1})),0))},
nL:function(a){self.setImmediate(H.cc(new P.i8(H.d(a,{func:1,ret:-1})),0))},
nM:function(a){P.kk(C.q,H.d(a,{func:1,ret:-1}))},
kk:function(a,b){var u=C.c.al(a.a,1000)
return P.nV(u<0?0:u,b)},
nV:function(a,b){var u=new P.jo()
u.ew(a,b)
return u},
n2:function(a,b){var u=new P.a1($.N,[b])
P.nx(C.q,new P.fL(u,a))
return u},
lv:function(a,b){var u,t,s
b.a=1
try{a.e2(new P.iz(b),new P.iA(b),P.z)}catch(s){u=H.T(s)
t=H.b4(s)
P.m6(new P.iB(b,u,t))}},
iy:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.a(a.c,"$ia1")
if(u>=4){t=b.b2()
b.a=a.a
b.c=a.c
P.c6(b,t)}else{t=H.a(b.c,"$iaN")
b.a=2
b.c=a
a.dc(t)}},
c6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.a(g.c,"$iad")
P.c9(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.c6(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.a(q,"$iad")
P.c9(i,i,g.b,q.a,q.b)
return}l=$.N
if(l!==n)$.N=n
else l=i
g=b.c
if((g&15)===8)new P.iG(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.iF(u,b,q).$0()}else if((g&2)!==0)new P.iE(h,u,b).$0()
if(l!=null)$.N=l
g=u.b
if(!!J.j(g).$iab){if(g.a>=4){k=H.a(o.c,"$iaN")
o.c=null
b=o.b3(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.iy(g,o)
return}}j=b.b
k=H.a(j.c,"$iaN")
j.c=null
b=j.b3(k)
g=u.a
p=u.b
if(!g){H.n(p,H.b(j,0))
j.a=4
j.c=p}else{H.a(p,"$iad")
j.a=8
j.c=p}h.a=j
g=j}},
o4:function(a,b){if(H.bJ(a,{func:1,args:[P.y,P.V]}))return b.dU(a,null,P.y,P.V)
if(H.bJ(a,{func:1,args:[P.y]}))return H.d(a,{func:1,ret:null,args:[P.y]})
throw H.e(P.k1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
o1:function(){var u,t
for(;u=$.c8,u!=null;){$.cU=null
t=u.b
$.c8=t
if(t==null)$.cT=null
u.a.$0()}},
o6:function(){$.ks=!0
try{P.o1()}finally{$.cU=null
$.ks=!1
if($.c8!=null)$.kD().$1(P.lR())}},
lL:function(a){var u=new P.dA(a)
if($.c8==null){$.c8=$.cT=u
if(!$.ks)$.kD().$1(P.lR())}else $.cT=$.cT.b=u},
o5:function(a){var u,t,s=$.c8
if(s==null){P.lL(a)
$.cU=$.cT
return}u=new P.dA(a)
t=$.cU
if(t==null){u.b=s
$.c8=$.cU=u}else{u.b=t.b
$.cU=t.b=u
if(u.b==null)$.cT=u}},
m6:function(a){var u=null,t=$.N
if(C.f===t){P.ca(u,u,C.f,a)
return}P.ca(u,u,t,H.d(t.bW(a),{func:1,ret:-1}))},
c3:function(a,b,c){return new P.ji(null,a,[c])},
lK:function(a){var u,t,s
if(a==null)return
try{a.$0()}catch(s){u=H.T(s)
t=H.b4(s)
P.c9(null,null,$.N,u,H.a(t,"$iV"))}},
lG:function(a,b){P.c9(null,null,$.N,a,b)},
o2:function(){},
nR:function(a,b,c,d,e,f,g){var u=$.N,t=e?1:0
t=new P.b1(a,u,t,[f,g])
t.bv(b,c,d,e,g)
t.cC(a,b,c,d,e,f,g)
return t},
nx:function(a,b){var u=$.N
if(u===C.f)return P.kk(a,H.d(b,{func:1,ret:-1}))
return P.kk(a,H.d(u.bW(b),{func:1,ret:-1}))},
c9:function(a,b,c,d,e){var u={}
u.a=d
P.o5(new P.jE(u,e))},
lH:function(a,b,c,d,e){var u,t=$.N
if(t===c)return d.$0()
$.N=c
u=t
try{t=d.$0()
return t}finally{$.N=u}},
lJ:function(a,b,c,d,e,f,g){var u,t=$.N
if(t===c)return d.$1(e)
$.N=c
u=t
try{t=d.$1(e)
return t}finally{$.N=u}},
lI:function(a,b,c,d,e,f,g,h,i){var u,t=$.N
if(t===c)return d.$2(e,f)
$.N=c
u=t
try{t=d.$2(e,f)
return t}finally{$.N=u}},
ca:function(a,b,c,d){var u
H.d(d,{func:1,ret:-1})
u=C.f!==c
if(u)d=!(!u||!1)?c.bW(d):c.fB(d,-1)
P.lL(d)},
i6:function i6(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function i7(a){this.a=a},
i8:function i8(a){this.a=a},
jo:function jo(){},
jp:function jp(a,b){this.a=a
this.b=b},
b0:function b0(a,b){this.a=a
this.$ti=b},
a2:function a2(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.c=_.b=_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
c4:function c4(){},
ji:function ji(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
jj:function jj(a,b){this.a=a
this.b=b},
jk:function jk(a){this.a=a},
ab:function ab(){},
fL:function fL(a,b){this.a=a
this.b=b},
id:function id(){},
jl:function jl(a,b){this.a=a
this.$ti=b},
aN:function aN(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
a1:function a1(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
iw:function iw(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
ix:function ix(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iH:function iH(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a){this.a=a
this.b=null},
a5:function a5(){},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
W:function W(){},
hF:function hF(){},
dB:function dB(){},
dC:function dC(){},
a_:function a_(){},
ib:function ib(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a){this.a=a},
jf:function jf(){},
bf:function bf(){},
ii:function ii(a,b){this.b=a
this.a=null
this.$ti=b},
ik:function ik(a,b){this.b=a
this.c=b
this.a=null},
ij:function ij(){},
cP:function cP(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
cR:function cR(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
dF:function dF(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
aF:function aF(){},
b1:function b1(a,b,c,d){var _=this
_.x=a
_.c=_.b=_.a=_.y=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
iT:function iT(a,b,c){this.b=a
this.a=b
this.$ti=c},
cQ:function cQ(a,b,c,d,e){var _=this
_.dy=a
_.x=b
_.c=_.b=_.a=_.y=null
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
je:function je(a,b,c){this.b=a
this.a=b
this.$ti=c},
ad:function ad(a,b){this.a=a
this.b=b},
jy:function jy(){},
jE:function jE(a,b){this.a=a
this.b=b},
j6:function j6(){},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a,b){this.a=a
this.b=b},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
lw:function(a,b){var u=a[b]
return u===a?null:u},
km:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
lx:function(){var u=Object.create(null)
P.km(u,"<non-identifier-key>",u)
delete u["<non-identifier-key>"]
return u},
cs:function(a,b,c){return H.i(H.lT(a,new H.at([b,c])),"$ila",[b,c],"$ala")},
df:function(a,b){return new H.at([a,b])},
ki:function(){return new H.at([null,null])},
kj:function(a){return H.lT(a,new H.at([null,null]))},
ct:function(a){return new P.iS([a])},
kn:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
cK:function(a,b,c){var u=new P.dK(a,b,[c])
u.c=a.e
return u},
n4:function(a,b,c){var u,t
if(P.kt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.t([],[P.h])
C.a.k($.ap,a)
try{P.o0(a,u)}finally{if(0>=$.ap.length)return H.A($.ap,-1)
$.ap.pop()}t=P.lm(b,H.a0(u,"$if"),", ")+c
return t.charCodeAt(0)==0?t:t},
fP:function(a,b,c){var u,t
if(P.kt(a))return b+"..."+c
u=new P.am(b)
C.a.k($.ap,a)
try{t=u
t.a=P.lm(t.a,a,", ")}finally{if(0>=$.ap.length)return H.A($.ap,-1)
$.ap.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kt:function(a){var u,t
for(u=$.ap.length,t=0;t<u;++t)if(a===$.ap[t])return!0
return!1},
o0:function(a,b){var u,t,s,r,q,p,o,n=a.gv(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.l())return
u=H.c(n.gn())
C.a.k(b,u)
m+=u.length+2;++l}if(!n.l()){if(l<=5)return
if(0>=b.length)return H.A(b,-1)
t=b.pop()
if(0>=b.length)return H.A(b,-1)
s=b.pop()}else{r=n.gn();++l
if(!n.l()){if(l<=4){C.a.k(b,H.c(r))
return}t=H.c(r)
if(0>=b.length)return H.A(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gn();++l
for(;n.l();r=q,q=p){p=n.gn();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.A(b,-1)
m-=b.pop().length+2;--l}C.a.k(b,"...")
return}}s=H.c(r)
t=H.c(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.A(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.k(b,o)
C.a.k(b,s)
C.a.k(b,t)},
lb:function(a,b){var u,t,s=P.ct(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.O)(a),++t)s.k(0,H.n(a[t],b))
return s},
h6:function(a){var u,t={}
if(P.kt(a))return"{...}"
u=new P.am("")
try{C.a.k($.ap,a)
u.a+="{"
t.a=!0
a.u(0,new P.h7(t,u))
u.a+="}"}finally{if(0>=$.ap.length)return H.A($.ap,-1)
$.ap.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iI:function iI(){},
iL:function iL(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
iJ:function iJ(a,b){this.a=a
this.$ti=b},
iK:function iK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
iS:function iS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
c7:function c7(a){this.a=a
this.c=this.b=null},
dK:function dK(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h4:function h4(){},
P:function P(){},
h5:function h5(){},
h7:function h7(a,b){this.a=a
this.b=b},
aX:function aX(){},
jw:function jw(){},
h8:function h8(){},
hV:function hV(){},
bC:function bC(){},
hC:function hC(){},
jb:function jb(){},
dL:function dL(){},
dP:function dP(){},
dV:function dV(){},
o3:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.e(H.aO(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.T(s)
r=P.cn(String(t),null)
throw H.e(r)}r=P.jz(u)
return r},
jz:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.iN(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.jz(a[u])
return a},
l9:function(a,b,c){return new P.de(a,b)},
nY:function(a){return a.hn()},
nU:function(a,b,c){var u,t=new P.am(""),s=new P.iP(t,[],P.od())
s.bo(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
iN:function iN(a,b){this.a=a
this.b=b
this.c=null},
iO:function iO(a){this.a=a},
eR:function eR(){},
bU:function bU(){},
fM:function fM(){},
co:function co(){},
de:function de(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
h1:function h1(a){this.b=a},
h0:function h0(a){this.a=a},
iQ:function iQ(){},
iR:function iR(a,b){this.a=a
this.b=b},
iP:function iP(a,b,c){this.c=a
this.a=b
this.b=c},
on:function(a){var u=H.li(a,null)
if(u!=null)return u
throw H.e(P.cn(a,null))},
n1:function(a){if(a instanceof H.cj)return a.m(0)
return"Instance of '"+H.c(H.dp(a))+"'"},
by:function(a,b,c){var u,t=[c],s=H.t([],t)
for(u=J.B(a);u.l();)C.a.k(s,H.n(u.gn(),c))
if(b)return s
return H.i(J.kd(s),"$im",t,"$am")},
ns:function(a){return new H.fU(a,H.ne(a,!1,!0,!1,!1,!1))},
lm:function(a,b,c){var u=J.B(b)
if(!u.l())return a
if(c.length===0){do a+=H.c(u.gn())
while(u.l())}else{a+=H.c(u.gn())
for(;u.l();)a=a+c+H.c(u.gn())}return a},
ld:function(a,b,c,d){return new P.hi(a,b,c,d)},
mX:function(a,b){var u
if(Math.abs(a)<=864e13)u=!1
else u=!0
if(u)H.X(P.bN("DateTime is outside valid range: "+a))
return new P.bq(a,!1)},
mY:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mZ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d_:function(a){if(a>=10)return""+a
return"0"+a},
b9:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.L(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n1(a)},
bN:function(a){return new P.aR(!1,null,null,a)},
k1:function(a,b,c){return new P.aR(!0,a,b,c)},
cA:function(a,b){return new P.dq(null,null,!0,a,b,"Value not in range")},
aK:function(a,b,c,d,e){return new P.dq(b,c,!0,a,d,"Invalid value")},
lj:function(a,b,c,d){if(typeof a!=="number")return a.ah()
if(a<b||a>c)throw H.e(P.aK(a,b,c,d,null))},
nr:function(a,b,c){if(0>a||a>c)throw H.e(P.aK(a,0,c,"start",null))
if(a>b||b>c)throw H.e(P.aK(b,a,c,"end",null))
return b},
ak:function(a,b){if(typeof a!=="number")return a.ah()
if(a<0)throw H.e(P.aK(a,0,null,b,null))},
aW:function(a,b,c,d,e){var u=H.x(e==null?J.a4(b):e)
return new P.fN(u,!0,a,c,"Index out of range")},
F:function(a){return new P.hW(a)},
lp:function(a){return new P.hT(a)},
cD:function(a){return new P.aY(a)},
ar:function(a){return new P.eS(a)},
l7:function(a){return new P.iv(a)},
cn:function(a,b){return new P.d9(a,b)},
m0:function(a,b){var u=P.kA(a)
if(u!=null)return u
if(b==null)throw H.e(P.cn(a,null))
return b.$1(a)},
kA:function(a){var u=J.k_(a),t=H.li(u,null)
return t==null?H.nq(u):t},
jU:function(a){H.oC(H.c(a))},
hj:function hj(a,b){this.a=a
this.b=b},
G:function G(){},
bq:function bq(a,b){this.a=a
this.b=b},
b3:function b3(){},
b7:function b7(a){this.a=a},
fe:function fe(){},
ff:function ff(){},
br:function br(){},
e9:function e9(){},
dm:function dm(){},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fN:function fN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hi:function hi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hW:function hW(a){this.a=a},
hT:function hT(a){this.a=a},
aY:function aY(a){this.a=a},
eS:function eS(a){this.a=a},
hq:function hq(){},
dt:function dt(){},
f_:function f_(a){this.a=a},
iv:function iv(a){this.a=a},
d9:function d9(a,b){this.a=a
this.b=b},
aH:function aH(){},
C:function C(){},
f:function f(){},
ai:function ai(){},
m:function m(){},
r:function r(){},
cv:function cv(){},
z:function z(){},
I:function I(){},
y:function y(){},
dh:function dh(){},
ax:function ax(){},
V:function V(){},
h:function h(){},
am:function am(a){this.a=a},
aZ:function aZ(){},
k8:function(){var u=$.kW
return u==null?$.kW=J.e3(window.navigator.userAgent,"Opera",0):u},
n_:function(){var u,t=$.kT
if(t!=null)return t
u=$.kU
if(u==null?$.kU=J.e3(window.navigator.userAgent,"Firefox",0):u)t="-moz-"
else{u=$.kV
if(u==null)u=$.kV=!H.K(P.k8())&&J.e3(window.navigator.userAgent,"Trident/",0)
if(u)t="-ms-"
else t=H.K(P.k8())?"-o-":"-webkit-"}return $.kT=t},
eX:function eX(){},
eY:function eY(a){this.a=a},
fG:function fG(a,b){this.a=a
this.b=b},
fH:function fH(){},
fI:function fI(){},
fJ:function fJ(){},
cr:function cr(){},
nW:function(a,b,c,d){var u,t
H.jJ(b)
H.aq(d)
if(H.K(b)){u=[c]
C.a.N(u,d)
d=u}t=P.by(J.mF(d,P.oq(),null),!0,null)
H.a(a,"$iaH")
return P.cS(H.ni(a,t,null))},
fX:function(a){return H.a(P.jF(P.nf(a)),"$iau")},
nf:function(a){return new P.fY(new P.iL([null,null])).$1(a)},
kp:function(a,b,c){var u
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(u){H.T(u)}return!1},
lD:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
cS:function(a){var u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
u=J.j(a)
if(!!u.$iau)return a.a
if(H.lW(a))return a
if(!!u.$ilo)return a
if(!!u.$ibq)return H.bA(a)
if(!!u.$iaH)return P.lC(a,"$dart_jsFunction",new P.jB())
return P.lC(a,"_$dart_jsObject",new P.jC($.kF()))},
lC:function(a,b,c){var u=P.lD(a,b)
if(u==null){u=c.$1(a)
P.kp(a,b,u)}return u},
jA:function(a){var u,t
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.lW(a))return a
else if(a instanceof Object&&!!J.j(a).$ilo)return a
else if(a instanceof Date){u=H.x(a.getTime())
if(Math.abs(u)<=864e13)t=!1
else t=!0
if(t)H.X(P.bN("DateTime is outside valid range: "+u))
return new P.bq(u,!1)}else if(a.constructor===$.kF())return a.o
else return P.jF(a)},
jF:function(a){if(typeof a=="function")return P.kq(a,$.jX(),new P.jG())
if(a instanceof Array)return P.kq(a,$.kE(),new P.jH())
return P.kq(a,$.kE(),new P.jI())},
kq:function(a,b,c){var u=P.lD(a,b)
if(u==null||!(a instanceof Object)){u=c.$1(a)
P.kp(a,b,u)}return u},
au:function au(a){this.a=a},
fY:function fY(a){this.a=a},
ae:function ae(a){this.a=a},
cq:function cq(a,b){this.a=a
this.$ti=b},
jB:function jB(){},
jC:function jC(a){this.a=a},
jG:function jG(){},
jH:function jH(){},
jI:function jI(){},
dJ:function dJ(){},
cJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
p:function p(a,b,c){this.a=a
this.b=b
this.$ti=c},
j5:function j5(){},
bb:function bb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cB:function cB(){},
ea:function ea(a){this.a=a},
o:function o(){}},W={
kK:function(a){var u=document.createElement("a")
if(a!=null)u.href=a
return u},
n0:function(a,b,c){var u=document.body,t=(u&&C.n).V(u,a,b,c)
t.toString
u=W.w
u=new H.bd(new W.af(t),H.d(new W.fi(),{func:1,ret:P.G,args:[u]}),[u])
return H.a(u.gau(u),"$il")},
cm:function(a){var u,t,s,r="element tag unavailable"
try{u=J.a3(a)
t=u.ge0(a)
if(typeof t==="string")r=u.ge0(a)}catch(s){H.T(s)}return r},
n3:function(a){var u,t=document.createElement("input"),s=H.a(t,"$iaI")
try{s.type=a}catch(u){H.T(u)}return s},
cw:function(a,b){var u=window,t=H.a(document.createEvent("MouseEvent"),"$iu")
t.toString
t.initMouseEvent(a,!0,!0,u,0,0,0,0,0,!1,!1,!1,!1,0,W.nX(b))
return t},
ny:function(a){return new TouchEvent(a)},
nz:function(){var u
try{W.ny("touches")
return!0}catch(u){H.T(u)}return!1},
iM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lA:function(a,b,c,d){var u=W.iM(W.iM(W.iM(W.iM(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
lu:function(a,b){var u,t=a.classList
for(u=0;u<2;++u)t.add(b[u])},
nQ:function(a,b){var u,t,s=a.classList
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.O)(b),++t)s.remove(H.v(b[t]))},
fl:function(a,b){return new W.fk(a,[b])},
H:function(a,b,c,d,e){var u=W.lN(new W.iu(c),W.k)
u=new W.it(a,b,u,!1,[e])
u.dj()
return u},
ly:function(a){var u=W.kK(null),t=window.location
u=new W.bH(new W.ja(u,t))
u.eu(a)
return u},
nS:function(a,b,c,d){H.a(a,"$il")
H.v(b)
H.v(c)
H.a(d,"$ibH")
return!0},
nT:function(a,b,c,d){var u,t,s
H.a(a,"$il")
H.v(b)
H.v(c)
u=H.a(d,"$ibH").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
lB:function(){var u=P.h,t=P.lb(C.j,u),s=H.b(C.j,0),r=H.d(new W.jn(),{func:1,ret:u,args:[s]}),q=H.t(["TEMPLATE"],[u])
t=new W.jm(t,P.ct(u),P.ct(u),P.ct(u),null)
t.ev(null,new H.av(C.j,r,[s,u]),q,null)
return t},
S:function(a){var u
if(a==null)return
if("postMessage" in a){u=W.nN(a)
return u}else return H.a(a,"$ibs")},
nX:function(a){return a},
nN:function(a){if(a===window)return H.a(a,"$ils")
else return new W.ih(a)},
lN:function(a,b){var u=$.N
if(u===C.f)return a
return u.fC(a,b)},
q:function q(){},
ce:function ce(){},
e8:function e8(){},
cf:function cf(){},
bQ:function bQ(){},
bn:function bn(){},
bS:function bS(){},
bo:function bo(){},
R:function R(){},
bV:function bV(){},
eZ:function eZ(){},
ck:function ck(){},
aT:function aT(){},
f0:function f0(){},
d0:function d0(){},
f1:function f1(){},
ic:function ic(a,b){this.a=a
this.b=b},
az:function az(a,b){this.a=a
this.$ti=b},
l:function l(){},
fi:function fi(){},
k:function k(){},
fm:function fm(){},
fh:function fh(a){this.a=a},
bs:function bs(){},
fK:function fK(){},
bY:function bY(){},
cp:function cp(){},
aI:function aI(){},
ba:function ba(){},
dg:function dg(){},
u:function u(){},
af:function af(a){this.a=a},
w:function w(){},
cz:function cz(){},
c0:function c0(){},
bz:function bz(){},
c2:function c2(){},
cE:function cE(){},
du:function du(){},
dv:function dv(){},
hM:function hM(){},
hN:function hN(){},
cG:function cG(){},
bD:function bD(){},
aE:function aE(){},
ac:function ac(){},
hQ:function hQ(){},
bc:function bc(){},
bF:function bF(){},
i3:function i3(a){this.a=a},
be:function be(){},
cH:function cH(){},
ig:function ig(){},
dE:function dE(){},
dM:function dM(){},
i9:function i9(){},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
fk:function fk(a,b){this.a=a
this.$ti=b},
cI:function cI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bg:function bg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
it:function it(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iu:function iu(a){this.a=a},
dS:function dS(a,b){this.a=null
this.b=a
this.$ti=b},
jg:function jg(a,b){this.a=a
this.b=b},
bH:function bH(a){this.a=a},
a6:function a6(){},
dl:function dl(a){this.a=a},
hl:function hl(a){this.a=a},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
dQ:function dQ(){},
jc:function jc(){},
jd:function jd(){},
jm:function jm(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jn:function jn(){},
jh:function jh(){},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ih:function ih(a){this.a=a},
aj:function aj(){},
ja:function ja(a,b){this.a=a
this.b=b},
dW:function dW(a){this.a=a},
jx:function jx(a){this.a=a},
dD:function dD(){},
dH:function dH(){},
dI:function dI(){},
dN:function dN(){},
dO:function dO(){},
dT:function dT(){},
dU:function dU(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){}},Z={
l1:function(a,b,c,d){var u,t,s,r,q=$.l3
$.l3=q+1
u=H.t([],[Z.bG])
q=new Z.f3(q,b,c,d,u)
t=[W.l]
s=H.t([a],t)
q.sbE(H.i(s,"$im",t,"$am"))
t=window
r=H.a(P.jF(P.cS(t)),"$iau")
if("PointerEvent" in r.a){t=[[P.W,,]]
t=new Z.j_(H.t([],t),H.t([],t),q)
t.bw(q)
C.a.k(u,t)}else{if(W.nz()){t=[[P.W,,]]
t=new Z.jq(H.t([],t),H.t([],t),q)
t.bw(q)
C.a.k(u,t)}t=[[P.W,,]]
t=new Z.iU(H.t([],t),H.t([],t),q)
t.bw(q)
C.a.k(u,t)}return q},
l2:function(a,b,c){var u=b.b,t=b.c
b.e
return new Z.ah(u,t)},
mN:function(a){$.kL=a
if(!$.e6){C.Q.gfw(window).e1(new Z.e7(),-1)
$.e6=!0}},
nP:function(a,b){var u,t,s="_customDragOver"
if(b==null)return
u=$.c5
if(u===b)b.dispatchEvent(W.cw(s,null))
else{b.dispatchEvent(W.cw("_customDragEnter",u))
if($.c5!=null){t=W.cw("_customDragLeave",b)
$.c5.dispatchEvent(t)}b.dispatchEvent(W.cw(s,null))
$.c5=b}},
nO:function(a,b){J.mw(b,W.cw("_customDrop",null))
Z.lt()},
lt:function(){if($.c5!=null){var u=W.cw("_customDragLeave",null)
$.c5.dispatchEvent(u)
$.c5=null}},
bW:function(a,b){var u=new Z.d5(b,H.t([],[[P.W,,]])),t=[W.l],s=H.t([a],t)
u.sbE(H.i(s,"$im",t,"$am"))
C.a.u(u.x,u.gf5())
return u},
f3:function f3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.cx=_.ch=_.z=null
_.cy=e},
f8:function f8(a){this.a=a},
f7:function f7(a){this.a=a},
f6:function f6(){},
f5:function f5(a){this.a=a},
f4:function f4(){},
ah:function ah(a,b){this.a=a
this.d=b},
il:function il(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e
_.x=f},
eh:function eh(){},
ei:function ei(a,b){this.a=a
this.b=b},
e7:function e7(){},
bG:function bG(){},
ip:function ip(){},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
is:function is(){},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a){this.a=a},
ju:function ju(a){this.a=a},
jt:function jt(a){this.a=a},
js:function js(a){this.a=a},
jr:function jr(a){this.a=a},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a){this.a=a},
iX:function iX(a){this.a=a},
iW:function iW(a){this.a=a},
iV:function iV(a){this.a=a},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a){this.a=a},
j3:function j3(a){this.a=a},
j2:function j2(a){this.a=a},
j1:function j1(a){this.a=a},
j0:function j0(a){this.a=a},
d5:function d5(a,b){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=null
_.y=b},
fa:function fa(a){this.a=a},
fc:function fc(a){this.a=a},
fb:function fb(a){this.a=a},
fd:function fd(a){this.a=a},
f9:function f9(){},
E:function E(a){this.d=a},
e5:function e5(){}},U={
kM:function(a,b){var u=new U.bO(a)
u.aD(a,b)
return u},
k2:function(a,b){var u=b.h(0,"type")
switch(u==null?"num":J.L(u)){case"int":u=new U.fO(a)
u.aD(a,b)
u.cB(a,b)
u.y=1
return u
case"num":return U.kb(a,b)
case"bool":return U.kb(a,b)
case"range":u=new U.hv(a)
u.aD(a,b)
u.cB(a,b)
u.dy=U.b5(b.h(0,"min"),u.dy)
u.fr=U.b5(b.h(0,"max"),u.fr)
return u
case"select":return U.lk(a,b)
case"text":return U.kM(a,b)
default:return U.kM(a,b)}},
lk:function(a,b){var u,t="values",s=new U.hz([],a)
s.aD(a,b)
if(!!J.j(b.h(0,t)).$im&&J.mq(J.a4(b.h(0,t)),0)){u=H.aq(b.h(0,t))
s.x=u
s.sC(0,J.Z(J.Z(u,0),"actual"))}return s},
kb:function(a,b){var u,t=new U.fo(a)
t.aD(a,b)
u=new U.fn(a.fy)
u.c=new U.aV(u,H.v(b.h(0,"type")),H.t([],[U.aV]))
t.x=u
u.aP(t.c)
return t},
el:function(a,b,c,d){var u,t=H.a(d?b.cloneNode(!0):b,"$iaT")
t.toString
u=P.y
W.nQ(t,H.i(H.t(["nt-block-starter","nt-block-ender","nt-block-standalone","nt-block-middle","nt-block-clause-starter","nt-block-clause-standalone","nt-block-clause-middle","nt-block-clause-ender"],[u]),"$if",[u],"$af"))
t.classList.add(c)
a.appendChild(t)},
k4:function(a,b,c,d){var u,t=b.length
if(t===0)return
if(t===1)U.el(a,C.a.ga2(b).k3,c+"-standalone",d)
else{U.el(a,C.a.ga2(b).k3,c+"-starter",d)
for(u=1;u<b.length-1;++u)U.el(a,b[u].k3,c+"-middle",d)
U.el(a,C.a.gdJ(b).k3,c+"-ender",d)}},
mO:function(a,b){var u,t=H.t([],[U.M])
for(u=J.B(b);u.l();)C.a.k(t,U.kN(a,H.a(u.gn(),"$ir")))
return t},
k5:function(a,b){var u,t,s="#ffffff"
if(a==null){u=new U.bm("#9977aa",s,s)
u.a=b
return u}u=new U.bm("#9977aa",s,s)
t=a.h(0,"blockColor")
u.a=t==null?b:J.L(t)
t=a.h(0,"textColor")
u.b=t==null?s:J.L(t)
t=a.h(0,"borderColor")
u.c=t==null?s:J.L(t)
t=a.h(0,"fontWeight")
u.d=t==null?"":J.L(t)
t=a.h(0,"fontSize")
u.e=t==null?"":J.L(t)
t=a.h(0,"fontFace")
u.f=t==null?"":J.L(t)
return u},
k3:function(a,b,c){var u,t=[P.C,U.bO]
t=new U.M(b,c,new H.at(t),new H.at(t),a)
if(b==null){u=a.z
t.a=u
a.z=u+1}else if(b>=a.z)a.z=b+1
u=a.Q
t.b=u
a.Q=u+1
return t},
kN:function(a,b){var u,t,s,r,q,p,o=null,n="clauses",m="children",l="properties",k=b.h(0,"action"),j=k==null?"":J.L(k),i=U.k3(a,H.x(b.h(0,"id")),j)
b.i(0,"id",i.a)
if(!!J.j(b.h(0,n)).$im){i.sbZ(H.t([],[U.aa]))
k=[U.M]
u=0
while(!0){t=H.jT(J.a4(b.h(0,n)))
if(typeof t!=="number")return H.Y(t)
if(!(u<t))break
s=H.a(J.Z(b.h(0,n),u),"$ir")
r=new U.aa(i,u,H.t([],k))
if(!!J.j(s.h(0,m)).$im)r.sbX(U.mO(a,H.aq(s.h(0,m))))
t=i.cy;(t&&C.a).k(t,r);++u}}k=b.h(0,"type")
i.d=k==null?"":J.L(k)
k=b.h(0,"format")
i.e=k==null?o:J.L(k)
k=b.h(0,"note")
i.f=k==null?o:J.L(k)
k=b.h(0,"blockColor")
i.db=k==null?o:J.L(k)
k=b.h(0,"textColor")
i.dx=k==null?o:J.L(k)
k=b.h(0,"borderColor")
i.dy=k==null?o:J.L(k)
k=b.h(0,"font")
i.fr=k==null?o:J.L(k)
i.fx=U.m7(b.h(0,"required"),i.fx)
if(!!J.j(b.h(0,"params")).$im)for(k=J.B(H.a0(b.h(0,"params"),"$if")),t=i.y;k.l();){q=U.k2(i,H.a(k.gn(),"$ir"))
t.i(0,q.a,q)}if(!!J.j(b.h(0,l)).$im){for(k=J.B(H.a0(b.h(0,l),"$if")),t=i.z;k.l();){p=U.k2(i,H.a(k.gn(),"$ir"))
t.i(0,p.a,p)}k=b.h(0,"propertiesDisplay")
i.Q=k==null?"shown":J.L(k)}return i},
kO:function(a){var u,t,s,r=a.dw(0)
if(a.cy!=null){u=[U.M]
r.cx=new U.aa(r,null,H.t([],u))
if(a.cy.length>0){r.sbZ(H.t([],[U.aa]))
for(t=0;t<a.cy.length;++t){s=r.cy;(s&&C.a).k(s,new U.aa(r,t,H.t([],u)))}}}return r},
k6:function(a,b){var u,t,s=a.dy
if(s!=null){u=b.style
u.borderColor=s}s=a.dx
if(s!=null){u=b.style
u.color=s}s=a.fr
if(s!=null){u=b.style
t=u.lineHeight
u.font=s
s=b.style
s.lineHeight=t}},
kP:function(a,b,c){var u,t=Z.l1(b,a.go,"input, textarea, button, select, option","nt-block-dragging")
t.gdO(t).t(a.gbr())
t.gdN(t).t(a.gc1())
u=Z.bW(b,a.fy.k3)
u.gaq(u).t(a.ga7())
u.gao(u).t(new U.ev(c))
u.gap(u).t(new U.ew(c))},
eB:function(a,b,c,d){(a&&C.d).L(a,"")
if(C.a.ga2(b).fx){a.classList.add("nt-chain-starter")
a.classList.remove("nt-chain-fragment")}else{a.classList.remove("nt-chain-starter")
a.classList.add("nt-chain-fragment")
if(d!=null)a.appendChild(d)
a.appendChild(U.le(!0,C.a.ga2(b)))}U.k4(a,b,"nt-block",c)
a.appendChild(U.le(!1,C.a.gdJ(b)))},
l0:function(a,b){$.l_=a.fy.b
$.kY=b.d.I(0,U.cl(b.a))
$.kZ=a.fx
$.aU=!1},
cl:function(a){var u,t,s,r,q=J.a3(a)
if(a.offsetParent==null){q=q.gaR(a)
return new P.p(q.a,q.b,[H.b(q,0)])}else{q=q.gaR(a)
u=H.b(q,0)
t=[u]
s=H.i(U.cl(a.offsetParent),"$ip",t,"$ap")
r=s.a
if(typeof r!=="number")return H.Y(r)
r=H.n(q.a+r,u)
s=s.b
if(typeof s!=="number")return H.Y(s)
return new P.p(r,H.n(q.b+s,u),t)}},
bT:function(a){var u,t,s,r,q,p=J.Q(a),o=p.h(a,"children")
if(o==null||!J.j(o).$im)o=[]
u=p.h(a,"name")
t=u==null?"":J.L(u)
u=p.h(a,"format")
if(typeof u==="string"){s=H.v(p.h(a,"format"))
for(p=J.Q(o),r=0;r<p.gj(o);++r){u="{"+r+"}"
q=U.bT(p.h(o,r))
s.toString
if(typeof q!=="string")H.X(H.aO(q))
s=H.jV(s,u,q)}return s}else{p=J.Q(o)
if(p.gj(o)===1)return"("+H.c(t)+" "+H.c(U.bT(p.h(o,0)))+")"
else if(p.gj(o)===2)return"("+H.c(U.bT(p.h(o,0)))+" "+H.c(t)+" "+H.c(U.bT(p.h(o,1)))+")"
else return t}},
oc:function(a,b){var u,t="action",s=J.j(a)
if(!s.$im||s.gj(a)===0||J.Z(s.h(a,0),t)==null)return-1
u=J.j(b)
if(!u.$im||u.gj(b)===0||J.Z(u.h(b,0),t)==null)return 1
return J.mu(J.Z(s.h(a,0),t),J.Z(u.h(b,0),t))},
le:function(a,b){var u,t,s=document.createElement("div")
s.classList.add("nt-notch")
u=b.aC()
s.classList.add(u)
U.k6(b,s)
if(a)s.classList.add("nt-notch-top")
else s.classList.add("nt-notch-bottom")
t=u+"-color"
C.a.u(H.t(["filler","left","middle","right"],[P.h]),new U.hn(t,a,b,s))
U.kP(b,s,new U.ho(b))
return s},
lf:function(a,b){var u,t,s,r,q=document,p=q.createElement("div")
p.classList.add("nt-notch")
u=b.c
t=u.aC()
p.classList.add(t)
U.k6(u,p)
if(a)p.classList.add("nt-notch-top")
else p.classList.add("nt-notch-bottom")
s=t+"-color"
C.a.u(H.t(["filler","left","middle","right"],[P.h]),new U.hm(s,a,b,p))
if(!a){r=q.createElement("div")
r.className="nt-notch-clause-filler"
p.appendChild(r)}return p},
bR:function(a){var u=new U.ej()
u.b=a.a
u.c=a.b
return u},
mV:function(a,b,c){var u=new U.bp(3,a,c,H.t([],[U.a9]),b,[],[])
u.es(a,b,c)
return u},
lE:function(a,b,c,d){U.o_(a,new U.jD(b),c,d)},
o_:function(a,b,c,d){var u,t,s,r,q,p="version"
H.i(d,"$ir",[P.h,P.y],"$ar")
s=H.x(H.K(d.p(p))?d.h(0,p):0)
if(typeof s!=="number")return s.K()
if(s>3)H.X("Somehow the given model version ("+s+") is greater than the supported NetTango version (3).")
if(s<1)U.nC(d)
if(s<2)U.kl(d,U.m_(),U.m_())
if(s<3)U.nI(d)
d.i(0,p,3)
u=null
switch(a){case"NetLogo":u=new U.hh(b,c)
break
default:u=new U.hr(b,c)
break}try{if($.ag.p(c))$.ag.h(0,c).k4.fN()
$.ag.i(0,c,U.mV(c,d,u))}catch(r){q=H.T(r)
if(q instanceof P.d9){t=q
throw H.e(P.cn("There was an error initializing the workspace with the given NetTango model JSON.",t))}else throw r}},
na:function(a,b,c,d){var u
H.v(a)
H.v(b)
H.v(c)
H.a(d,"$iae")
if($.ag.h(0,b) instanceof U.bp)C.a.sj($.ag.h(0,b).y,0)
u=C.i.c0(0,c,null)
if(!!J.j(u).$ir)U.lE(a,d,b,u)},
n9:function(a,b,c){var u,t,s
H.v(a)
H.v(b)
H.a(c,"$iae")
u=C.i.c0(0,b,null)
if(!!J.j(u).$ir)for(t=J.B(u.gF());t.l();){s=H.v(t.gn())
if($.ag.h(0,s) instanceof U.bp)C.a.sj($.ag.h(0,s).y,0)
u=C.i.c0(0,b,null)
if(!!J.j(u).$ir)U.lE(a,c,s,u)}},
n8:function(a,b){var u
H.v(a)
H.a(b,"$iae")
if($.ag.p(a)){u=$.ag
if(b!=null)return u.h(0,a).dH(new U.fS(b))
else return u.h(0,a).fT()}return},
nc:function(a){var u
H.v(a)
if($.ag.p(a)){u=$.ag.h(0,a).ch
u.i(0,"program",$.ag.h(0,a).c3(!1))
return C.i.dG(u,null)}else return"{}"},
nb:function(){var u,t,s,r=P.ki()
for(u=$.ag,u=new H.bx(u,[H.b(u,0)]),u=u.gv(u);u.l();){t=u.d
s=$.ag.h(0,t).ch
s.i(0,"program",$.ag.h(0,t).c3(!1))
r.i(0,t,s)}return C.i.dG(r,null)},
lZ:function(){var u=$.kG()
u.i(0,"NetTango_InitWorkspace",U.oy())
u.i(0,"NetTango_InitAllWorkspaces",U.ox())
u.i(0,"NetTango_ExportCode",U.ow())
u.i(0,"NetTango_Save",U.oA())
u.i(0,"NetTango_SaveAll",U.oz())},
kB:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{u=P.on(a)
return u}catch(t){if(!!J.j(H.T(t)).$ika)return b
else throw t}return b},
b5:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{u=P.m0(a,null)
return u}catch(t){if(!!J.j(H.T(t)).$ika)return b
else throw t}return b},
m7:function(a,b){if(a==null)return b
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
nC:function(a){var u={},t=P.C,s=new H.at([P.h,t]),r=new H.at([t,t])
u.a=0
U.kl(a,new U.hY(u,s,r),new U.hZ(s,r))},
lq:function(a,b){var u={}
u.a=a
U.lr(b,new U.hX(u))
return u.a},
nB:function(a,b){var u,t
for(u=J.B(b),t=[P.h,P.y];u.l();){H.i(u.gn(),"$ir",t,"$ar").i(0,"id",a)
if(typeof a!=="number")return a.D();++a}return a},
nA:function(a,b,c){var u,t
if(!H.K(c.p("action")))return
u=H.v(c.h(0,"action"))
if(a.p(u)){t=a.h(0,u)
c.i(0,"id",t)
U.lq(b.h(0,t),H.i(c,"$ir",[P.h,P.y],"$ar"))}},
nF:function(a){U.lr(a,U.ou())},
nD:function(a){var u="values"
if(!H.K(a.p(u))||!J.j(a.h(0,u)).$im)return
a.i(0,u,J.mK(J.mE(a.h(0,u),new U.i_())))},
nE:function(a){var u,t,s
for(u=J.k0(a,new U.i0()),t=J.B(u.a),u=new H.dz(t,u.b,[H.b(u,0)]),s=[P.h,P.y];u.l();)U.nD(H.i(t.gn(),"$ir",s,"$ar"))},
nI:function(a){var u,t="program"
U.kl(a,new U.i2(),U.ov())
if(!H.K(a.p(t))||!J.j(a.h(0,t)).$ir)return
u=H.a(a.h(0,t),"$ir")
if(!H.K(u.p("chains"))||!J.j(u.h(0,"chains")).$im)return
U.nG(H.a(a.h(0,t),"$ir"))},
nG:function(a){var u=J.k0(H.aq(a.h(0,"chains")),new U.i1())
a.i(0,"chains",P.by(u,!0,H.b(u,0)))},
nH:function(a){var u=a.h(0,"x")
if(typeof u==="number")a.i(0,"x",J.kH(a.h(0,"x"),10))
u=a.h(0,"y")
if(typeof u==="number")a.i(0,"y",J.kH(a.h(0,"y"),10))},
kl:function(a,b,c){var u,t,s,r,q,p,o,n,m="blocks",l="children",k="clauses",j="program",i="chains"
if(!H.K(a.p(m))||!J.j(a.h(0,m)).$im)return
for(u=J.B(H.a0(a.h(0,m),"$if")),t=[P.h,P.y];u.l();)b.$1(H.i(u.gn(),"$ir",t,"$ar"))
for(u=J.B(H.a0(a.h(0,m),"$if"));u.l();){s=H.i(u.gn(),"$ir",t,"$ar")
if(H.K(s.p(l))&&!!J.j(s.h(0,l)).$im)for(r=J.B(H.a0(s.h(0,l),"$if"));r.l();){q=r.gn()
if(!!J.j(q).$ir)c.$1(q)}if(H.K(s.p(k))&&!!J.j(s.h(0,k)).$im)for(r=J.B(H.a0(s.h(0,k),"$if"));r.l();){p=r.gn()
o=J.j(p)
if(!!o.$ir&&H.K(p.p(l))&&!!J.j(p.h(0,l)).$im)for(o=J.B(H.a0(o.h(p,l),"$if"));o.l();)c.$1(H.a(o.gn(),"$ir"))}}if(!H.K(a.p(j))||!J.j(a.h(0,j)).$ir)return
n=H.a(a.h(0,j),"$ir")
if(!H.K(n.p(i))||!J.j(n.h(0,i)).$im)return
for(u=J.B(H.a0(n.h(0,i),"$if"));u.l();)for(t=J.B(H.aq(u.gn()));t.l();)c.$1(H.a(t.gn(),"$ir"))},
lr:function(a,b){var u="params",t="properties"
if(H.K(a.p(u))&&!!J.j(a.h(0,u)).$im)b.$1(H.aq(a.h(0,u)))
if(H.K(a.p(t))&&!!J.j(a.h(0,t)).$im)b.$1(H.aq(a.h(0,t)))},
bO:function bO(a){var _=this
_.a=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""},
eg:function eg(a,b){this.a=a
this.b=b},
ef:function ef(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ec:function ec(a){this.a=a},
ed:function ed(a,b){this.a=a
this.b=b},
ee:function ee(a,b){this.a=a
this.b=b},
dn:function dn(){},
fO:function fO(a){var _=this
_.x=!1
_.y=1
_.a=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""},
hv:function hv(a){var _=this
_.dy=0
_.fr=10
_.x=!1
_.y=1
_.a=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""},
hw:function hw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a,b){this.a=a
this.b=b},
hz:function hz(a,b){var _=this
_.x=a
_.a=_.y=null
_.b=b
_.d=_.c=null
_.e="int"
_.r=_.f=""},
hB:function hB(a){this.a=a},
hA:function hA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fo:function fo(a){var _=this
_.a=_.x=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""},
fs:function fs(){},
fr:function fr(){},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function fu(){},
fq:function fq(){},
fv:function fv(){},
fp:function fp(){},
fw:function fw(a,b){this.a=a
this.b=b},
ek:function ek(){},
em:function em(a){this.a=a},
en:function en(){},
cg:function cg(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bm:function bm(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=""},
M:function M(a,b,c,d,e){var _=this
_.a=a
_.b=null
_.c=b
_.f=_.e=_.d=null
_.x=_.r=0
_.y=c
_.z=d
_.Q="shown"
_.ch=0
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=null
_.fx=!1
_.fy=e
_.id=_.go=null
_.k2=_.k1=!1
_.r1=_.k4=_.k3=null},
et:function et(a){this.a=a},
eu:function eu(){},
er:function er(a,b){this.a=a
this.b=b},
es:function es(a){this.a=a},
ev:function ev(a){this.a=a},
ew:function ew(a){this.a=a},
a9:function a9(a,b){var _=this
_.c=a
_.e=_.d=null
_.f=!1
_.a=b
_.b=null},
ez:function ez(a){this.a=a},
eA:function eA(a){this.a=a},
aa:function aa(a,b,c){var _=this
_.c=a
_.d=b
_.f=_.e=!1
_.a=c
_.b=null},
eC:function eC(a){this.a=a},
eD:function eD(a){this.a=a},
eE:function eE(a){this.a=a},
eF:function eF(a){this.a=a},
d1:function d1(a,b){this.a=a
this.b=b},
f2:function f2(){var _=this
_.d=_.c=_.b=_.a=_.e=null},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a},
fB:function fB(a){this.a=a},
fy:function fy(a,b){this.a=a
this.b=b},
fC:function fC(){},
fF:function fF(a,b){this.a=a
this.b=b},
fD:function fD(){},
fE:function fE(a,b){this.a=a
this.b=b},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a){this.a=a
this.c=this.b=null},
cZ:function cZ(){},
hr:function hr(a,b){this.b=a
this.c=b},
hh:function hh(a,b){this.b=a
this.c=b},
cY:function cY(a,b){this.a=a
this.b=b
this.d=null},
eq:function eq(a){this.a=a},
eo:function eo(a){this.a=a},
ep:function ep(a){this.a=a},
hn:function hn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a){this.a=a},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(){},
ej:function ej(){this.c=this.b=null},
bP:function bP(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
h9:function h9(a){this.b=a},
ha:function ha(a,b,c){this.b=a
this.c=b
this.d=c},
aD:function aD(a,b,c){var _=this
_.a=a
_.d=b
_.e=c
_.y=_.x=_.r=_.f=null},
dx:function dx(a,b){this.a=null
this.d=a
this.e=b},
bp:function bp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null
_.x=c
_.y=d
_.Q=_.z=0
_.ch=e
_.cx=null
_.cy=f
_.db=g
_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=null},
eO:function eO(a){this.a=a},
eP:function eP(){},
eH:function eH(a){this.a=a},
eI:function eI(){},
eJ:function eJ(a){this.a=a},
eK:function eK(a){this.a=a},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
eN:function eN(a){this.a=a},
eQ:function eQ(){},
eG:function eG(){},
jD:function jD(a){this.a=a},
fS:function fS(a){this.a=a},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a,b){this.a=a
this.b=b},
hX:function hX(a){this.a=a},
i_:function i_(){},
i0:function i0(){},
i2:function i2(){},
i1:function i1(){}}
var w=[C,H,J,P,W,Z,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kg.prototype={}
J.a7.prototype={
P:function(a,b){return a===b},
gq:function(a){return H.bB(a)},
m:function(a){return"Instance of '"+H.c(H.dp(a))+"'"},
bg:function(a,b){H.a(b,"$ikc")
throw H.e(P.ld(a,b.gdK(),b.gdS(),b.gdL()))}}
J.fQ.prototype={
m:function(a){return String(a)},
gq:function(a){return a?519018:218159},
$iG:1}
J.dc.prototype={
P:function(a,b){return null==b},
m:function(a){return"null"},
gq:function(a){return 0},
bg:function(a,b){return this.eh(a,H.a(b,"$ikc"))},
$iz:1}
J.dd.prototype={
gq:function(a){return 0},
m:function(a){return String(a)}}
J.hs.prototype={}
J.bE.prototype={}
J.bw.prototype={
m:function(a){var u=a[$.jX()]
if(u==null)return this.ek(a)
return"JavaScript function for "+H.c(J.L(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaH:1}
J.bu.prototype={
k:function(a,b){H.n(b,H.b(a,0))
if(!!a.fixed$length)H.X(P.F("add"))
a.push(b)},
a9:function(a,b,c){var u,t,s
H.i(c,"$if",[H.b(a,0)],"$af")
if(!!a.fixed$length)H.X(P.F("insertAll"))
P.lj(b,0,a.length,"index")
u=J.j(c)
if(!u.$iJ)c=u.O(c)
t=J.a4(c)
this.sj(a,a.length+t)
if(typeof b!=="number")return b.D()
s=b+t
this.cv(a,s,a.length,a,b)
this.ed(a,b,s,c)},
as:function(a,b){var u=H.b(a,0)
return new H.bd(a,H.d(b,{func:1,ret:P.G,args:[u]}),[u])},
N:function(a,b){var u
H.i(b,"$if",[H.b(a,0)],"$af")
if(!!a.fixed$length)H.X(P.F("addAll"))
for(u=J.B(b);u.l();)a.push(u.gn())},
u:function(a,b){var u,t
H.d(b,{func:1,ret:-1,args:[H.b(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.e(P.ar(a))}},
G:function(a,b,c){var u=H.b(a,0)
return new H.av(a,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
S:function(a,b){return this.G(a,b,null)},
R:function(a,b){return H.an(a,b,null,H.b(a,0))},
A:function(a,b){if(b<0||b>=a.length)return H.A(a,b)
return a[b]},
ga2:function(a){if(a.length>0)return a[0]
throw H.e(H.da())},
gdJ:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.da())},
cv:function(a,b,c,d,e){var u,t,s,r,q,p=H.b(a,0)
H.i(d,"$if",[p],"$af")
if(!!a.immutable$list)H.X(P.F("setRange"))
P.nr(b,c,a.length)
u=c-b
if(u===0)return
P.ak(e,"skipCount")
t=J.j(d)
if(!!t.$im){H.i(d,"$im",[p],"$am")
s=e
r=d}else{r=t.R(d,e).H(0,!1)
s=0}p=J.Q(r)
if(s+u>p.gj(r))throw H.e(H.n5())
if(s<b)for(q=u-1;q>=0;--q)a[b+q]=p.h(r,s+q)
else for(q=0;q<u;++q)a[b+q]=p.h(r,s+q)},
ed:function(a,b,c,d){return this.cv(a,b,c,d,0)},
dn:function(a,b){var u,t
H.d(b,{func:1,ret:P.G,args:[H.b(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.K(b.$1(a[t])))return!0
if(a.length!==u)throw H.e(P.ar(a))}return!1},
a5:function(a,b){var u=H.b(a,0)
H.d(b,{func:1,ret:P.C,args:[u,u]})
if(!!a.immutable$list)H.X(P.F("sort"))
H.ll(a,b,u)},
E:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a8(a[u],b))return!0
return!1},
gM:function(a){return a.length===0},
gcd:function(a){return a.length!==0},
m:function(a){return P.fP(a,"[","]")},
H:function(a,b){var u=H.t(a.slice(0),[H.b(a,0)])
return u},
O:function(a){return this.H(a,!0)},
gv:function(a){return new J.bl(a,a.length,[H.b(a,0)])},
gq:function(a){return H.bB(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.X(P.F("set length"))
if(b<0)throw H.e(P.aK(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.x(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.bi(a,b))
if(b>=a.length||b<0)throw H.e(H.bi(a,b))
return a[b]},
i:function(a,b,c){H.x(b)
H.n(c,H.b(a,0))
if(!!a.immutable$list)H.X(P.F("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bi(a,b))
a[b]=c},
$iJ:1,
$if:1,
$im:1}
J.kf.prototype={}
J.bl.prototype={
gn:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.O(s))
u=t.c
if(u>=r){t.scD(null)
return!1}t.scD(s[u]);++t.c
return!0},
scD:function(a){this.d=H.n(a,H.b(this,0))},
$iai:1}
J.bZ.prototype={
am:function(a,b){var u
H.jT(b)
if(typeof b!=="number")throw H.e(H.aO(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbd(b)
if(this.gbd(a)===u)return 0
if(this.gbd(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbd:function(a){return a===0?1/a<0:a<0},
cq:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.F(""+a+".toInt()"))},
fD:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.e(P.F(""+a+".ceil()"))},
c4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.F(""+a+".floor()"))},
w:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.F(""+a+".round()"))},
hj:function(a,b){var u
if(b>20)throw H.e(P.aK(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbd(a))return"-"+u
return u},
m:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gq:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
D:function(a,b){if(typeof b!=="number")throw H.e(H.aO(b))
return a+b},
at:function(a,b){return a*b},
al:function(a,b){return(a|0)===a?a/b|0:this.fs(a,b)},
fs:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.F("Result of truncating division is "+H.c(u)+": "+H.c(a)+" ~/ "+b))},
bT:function(a,b){var u
if(a>0)u=this.fn(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fn:function(a,b){return b>31?0:a>>>b},
K:function(a,b){if(typeof b!=="number")throw H.e(H.aO(b))
return a>b},
$ib3:1,
$iI:1}
J.db.prototype={$iC:1}
J.fR.prototype={}
J.bv.prototype={
dz:function(a,b){if(b<0)throw H.e(H.bi(a,b))
if(b>=a.length)H.X(H.bi(a,b))
return a.charCodeAt(b)},
aF:function(a,b){if(b>=a.length)throw H.e(H.bi(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.e(P.k1(b,null,null))
return a+b},
fS:function(a,b){var u=b.length,t=a.length
if(u>t)return!1
return b===this.cz(a,t-u)},
dX:function(a,b,c){P.lj(0,0,a.length,"startIndex")
return H.oG(a,b,c,0)},
ef:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
ab:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.cA(b,null))
if(b>c)throw H.e(P.cA(b,null))
if(c>a.length)throw H.e(P.cA(c,null))
return a.substring(b,c)},
cz:function(a,b){return this.ab(a,b,null)},
hi:function(a){return a.toLowerCase()},
aB:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.aF(r,0)===133){u=J.ke(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.dz(r,t)===133?J.nd(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
e3:function(a){var u,t
if(typeof a.trimLeft!="undefined"){u=a.trimLeft()
if(u.length===0)return u
t=this.aF(u,0)===133?J.ke(u,1):0}else{t=J.ke(a,0)
u=a}if(t===0)return u
if(t===u.length)return""
return u.substring(t)},
at:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.E)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
fK:function(a,b,c){var u=a.length
if(c>u)throw H.e(P.aK(c,0,u,null,null))
return H.oE(a,b,c)},
am:function(a,b){var u
H.v(b)
if(typeof b!=="string")throw H.e(H.aO(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
m:function(a){return a},
gq:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
h:function(a,b){H.x(b)
if(b>=a.length||!1)throw H.e(H.bi(a,b))
return a[b]},
$ilh:1,
$ih:1}
H.J.prototype={}
H.aC.prototype={
gv:function(a){var u=this
return new H.cu(u,u.gj(u),[H.D(u,"aC",0)])},
gM:function(a){return this.gj(this)===0},
as:function(a,b){return this.ej(0,H.d(b,{func:1,ret:P.G,args:[H.D(this,"aC",0)]}))},
G:function(a,b,c){var u=H.D(this,"aC",0)
return new H.av(this,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
S:function(a,b){return this.G(a,b,null)},
ci:function(a,b){var u,t,s,r=this,q=H.D(r,"aC",0)
H.d(b,{func:1,ret:q,args:[q,q]})
u=r.gj(r)
if(u===0)throw H.e(H.da())
t=r.A(0,0)
for(s=1;s<u;++s){t=b.$2(t,r.A(0,s))
if(u!==r.gj(r))throw H.e(P.ar(r))}return t},
R:function(a,b){return H.an(this,b,null,H.D(this,"aC",0))},
H:function(a,b){var u,t=this,s=H.t([],[H.D(t,"aC",0)])
C.a.sj(s,t.gj(t))
for(u=0;u<t.gj(t);++u)C.a.i(s,u,t.A(0,u))
return s},
O:function(a){return this.H(a,!0)}}
H.hL.prototype={
geK:function(){var u=J.a4(this.a),t=this.c
if(t==null||t>u)return u
return t},
gfo:function(){var u=J.a4(this.a),t=this.b
if(typeof t!=="number")return t.K()
if(t>u)return u
return t},
gj:function(a){var u,t=J.a4(this.a),s=this.b
if(typeof s!=="number")return s.ea()
if(s>=t)return 0
u=this.c
if(u==null||u>=t)return t-s
if(typeof u!=="number")return u.I()
return u-s},
A:function(a,b){var u,t=this,s=t.gfo()
if(typeof s!=="number")return s.D()
u=s+b
if(b>=0){s=t.geK()
if(typeof s!=="number")return H.Y(s)
s=u>=s}else s=!0
if(s)throw H.e(P.aW(b,t,"index",null,null))
return J.aG(t.a,u)},
R:function(a,b){var u,t,s=this
P.ak(b,"count")
u=s.b
if(typeof u!=="number")return u.D()
t=u+b
u=s.c
if(u!=null&&t>=u)return new H.d7(s.$ti)
return H.an(s.a,t,u,H.b(s,0))},
H:function(a,b){var u,t,s,r,q,p=this,o=p.b,n=p.a,m=J.Q(n),l=m.gj(n),k=p.c
if(k!=null&&k<l)l=k
if(typeof l!=="number")return l.I()
if(typeof o!=="number")return H.Y(o)
u=l-o
if(u<0)u=0
t=p.$ti
if(b){s=H.t([],t)
C.a.sj(s,u)}else{r=new Array(u)
r.fixed$length=Array
s=H.t(r,t)}for(q=0;q<u;++q){C.a.i(s,q,m.A(n,o+q))
if(m.gj(n)<l)throw H.e(P.ar(p))}return s},
O:function(a){return this.H(a,!0)}}
H.cu.prototype={
gn:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=J.Q(s),q=r.gj(s)
if(t.b!==q)throw H.e(P.ar(s))
u=t.c
if(u>=q){t.saE(null)
return!1}t.saE(r.A(s,u));++t.c
return!0},
saE:function(a){this.d=H.n(a,H.b(this,0))},
$iai:1}
H.c_.prototype={
gv:function(a){return new H.aJ(J.B(this.a),this.b,this.$ti)},
gj:function(a){return J.a4(this.a)},
A:function(a,b){return this.b.$1(J.aG(this.a,b))},
$af:function(a,b){return[b]}}
H.bX.prototype={$iJ:1,
$aJ:function(a,b){return[b]}}
H.aJ.prototype={
l:function(){var u=this,t=u.b
if(t.l()){u.saE(u.c.$1(t.gn()))
return!0}u.saE(null)
return!1},
gn:function(){return this.a},
saE:function(a){this.a=H.n(a,H.b(this,1))},
$aai:function(a,b){return[b]}}
H.av.prototype={
gj:function(a){return J.a4(this.a)},
A:function(a,b){return this.b.$1(J.aG(this.a,b))},
$aJ:function(a,b){return[b]},
$aaC:function(a,b){return[b]},
$af:function(a,b){return[b]}}
H.bd.prototype={
gv:function(a){return new H.dz(J.B(this.a),this.b,this.$ti)},
G:function(a,b,c){var u=H.b(this,0)
return new H.c_(this,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
S:function(a,b){return this.G(a,b,null)}}
H.dz.prototype={
l:function(){var u,t
for(u=this.a,t=this.b;u.l();)if(H.K(t.$1(u.gn())))return!0
return!1},
gn:function(){return this.a.gn()}}
H.dw.prototype={
gv:function(a){return new H.hO(J.B(this.a),this.b,this.$ti)}}
H.fg.prototype={
gj:function(a){var u=J.a4(this.a),t=this.b
if(u>t)return t
return u},
$iJ:1}
H.hO.prototype={
l:function(){if(--this.b>=0)return this.a.l()
this.b=-1
return!1},
gn:function(){if(this.b<0)return
return this.a.gn()}}
H.cC.prototype={
R:function(a,b){P.ak(b,"count")
return new H.cC(this.a,this.b+b,this.$ti)},
gv:function(a){return new H.hD(J.B(this.a),this.b,this.$ti)}}
H.d6.prototype={
gj:function(a){var u=J.a4(this.a)-this.b
if(u>=0)return u
return 0},
R:function(a,b){P.ak(b,"count")
return new H.d6(this.a,this.b+b,this.$ti)},
$iJ:1}
H.hD.prototype={
l:function(){var u,t
for(u=this.a,t=0;t<this.b;++t)u.l()
this.b=0
return u.l()},
gn:function(){return this.a.gn()}}
H.d7.prototype={
gv:function(a){return C.x},
gj:function(a){return 0},
A:function(a,b){throw H.e(P.aK(b,0,0,"index",null))},
G:function(a,b,c){H.d(b,{func:1,ret:c,args:[H.b(this,0)]})
return new H.d7([c])},
S:function(a,b){return this.G(a,b,null)},
R:function(a,b){P.ak(b,"count")
return this},
H:function(a,b){var u,t=this.$ti
if(b)t=H.t([],t)
else{u=new Array(0)
u.fixed$length=Array
t=H.t(u,t)}return t},
O:function(a){return this.H(a,!0)}}
H.fj.prototype={
l:function(){return!1},
gn:function(){return},
$iai:1}
H.bt.prototype={
sj:function(a,b){throw H.e(P.F("Cannot change the length of a fixed-length list"))},
k:function(a,b){H.n(b,H.aA(this,a,"bt",0))
throw H.e(P.F("Cannot add to a fixed-length list"))}}
H.cF.prototype={
gq:function(a){var u=this._hashCode
if(u!=null)return u
u=536870911&664597*J.b6(this.a)
this._hashCode=u
return u},
m:function(a){return'Symbol("'+H.c(this.a)+'")'},
P:function(a,b){if(b==null)return!1
return b instanceof H.cF&&this.a==b.a},
$iaZ:1}
H.eU.prototype={}
H.eT.prototype={
gM:function(a){return this.gj(this)===0},
m:function(a){return P.h6(this)},
i:function(a,b,c){H.n(b,H.b(this,0))
H.n(c,H.b(this,1))
return H.mW()},
aA:function(a,b,c,d){var u=this,t=P.df(c,d)
u.u(0,new H.eV(u,H.d(b,{func:1,ret:[P.cv,c,d],args:[H.b(u,0),H.b(u,1)]}),t))
return t},
S:function(a,b){return this.aA(a,b,null,null)},
$ir:1}
H.eV.prototype={
$2:function(a,b){var u=this.a,t=this.b.$2(H.n(a,H.b(u,0)),H.n(b,H.b(u,1)))
this.c.i(0,C.r.gh2(t),t.gC(t))},
$S:function(){var u=this.a
return{func:1,ret:P.z,args:[H.b(u,0),H.b(u,1)]}}}
H.eW.prototype={
gj:function(a){return this.a},
p:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.p(b))return
return this.cX(b)},
cX:function(a){return this.b[H.v(a)]},
u:function(a,b){var u,t,s,r,q=this,p=H.b(q,1)
H.d(b,{func:1,ret:-1,args:[H.b(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.n(q.cX(r),p))}},
gF:function(){return new H.ie(this,[H.b(this,0)])}}
H.ie.prototype={
gv:function(a){var u=this.a.c
return new J.bl(u,u.length,[H.b(u,0)])},
gj:function(a){return this.a.c.length}}
H.fT.prototype={
gdK:function(){var u=this.a
return u},
gdS:function(){var u,t,s,r,q=this
if(q.c===1)return C.t
u=q.d
t=u.length-q.e.length-q.f
if(t===0)return C.t
s=[]
for(r=0;r<t;++r){if(r>=u.length)return H.A(u,r)
s.push(u[r])}s.fixed$length=Array
s.immutable$list=Array
return s},
gdL:function(){var u,t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.u
u=l.e
t=u.length
s=l.d
r=s.length-t-l.f
if(t===0)return C.u
q=P.aZ
p=new H.at([q,null])
for(o=0;o<t;++o){if(o>=u.length)return H.A(u,o)
n=u[o]
m=r+o
if(m<0||m>=s.length)return H.A(s,m)
p.i(0,new H.cF(n),s[m])}return new H.eU(p,[q,null])},
$ikc:1}
H.ht.prototype={
$2:function(a,b){var u
H.v(a)
u=this.a
u.b=u.b+"$"+H.c(a)
C.a.k(this.b,a)
C.a.k(this.c,b);++u.a},
$S:52}
H.hR.prototype={
a3:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.hp.prototype={
m:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fW.prototype={
m:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.c(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.c(t.a)+")"
return s+r+"' on '"+u+"' ("+H.c(t.a)+")"}}
H.hU.prototype={
m:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jW.prototype={
$1:function(a){if(!!J.j(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.dR.prototype={
m:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iV:1}
H.cj.prototype={
m:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.bM(t==null?"unknown":t)+"'"},
$iaH:1,
ghm:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hP.prototype={}
H.hE.prototype={
m:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bM(u)+"'"}}
H.ch.prototype={
P:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ch))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gq:function(a){var u,t=this.c
if(t==null)u=H.bB(this.a)
else u=typeof t!=="object"?J.b6(t):H.bB(t)
return(u^H.bB(this.b))>>>0},
m:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.c(H.dp(u))+"'")}}
H.dy.prototype={
m:function(a){return this.a}}
H.ey.prototype={
m:function(a){return this.a}}
H.hy.prototype={
m:function(a){return"RuntimeError: "+H.c(this.a)}}
H.i4.prototype={
m:function(a){return"Assertion failed: "+P.b9(this.a)}}
H.at.prototype={
gj:function(a){return this.a},
gM:function(a){return this.a===0},
gF:function(){return new H.bx(this,[H.b(this,0)])},
gar:function(a){var u=this,t=H.b(u,0)
return H.lc(new H.bx(u,[t]),new H.fV(u),t,H.b(u,1))},
p:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.cR(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.cR(t,a)}else return s.fY(a)},
fY:function(a){var u=this.d
if(u==null)return!1
return this.bc(this.aX(u,J.b6(a)&0x3ffffff),a)>=0},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aY(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aY(r,b)
s=t==null?null:t.b
return s}else return q.fZ(b)},
fZ:function(a){var u,t,s=this.d
if(s==null)return
u=this.aX(s,J.b6(a)&0x3ffffff)
t=this.bc(u,a)
if(t<0)return
return u[t].b},
i:function(a,b,c){var u,t,s,r,q,p,o=this
H.n(b,H.b(o,0))
H.n(c,H.b(o,1))
if(typeof b==="string"){u=o.b
o.cF(u==null?o.b=o.bL():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cF(t==null?o.c=o.bL():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bL()
r=J.b6(b)&0x3ffffff
q=o.aX(s,r)
if(q==null)o.bS(s,r,[o.bM(b,c)])
else{p=o.bc(q,b)
if(p>=0)q[p].b=c
else q.push(o.bM(b,c))}}},
aa:function(a,b){var u=this.h_(b)
return u},
h_:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=a.gq(a)&0x3ffffff
t=q.aX(p,u)
s=q.bc(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.ex(r)
if(t.length===0)q.cW(p,u)
return r.b},
b8:function(a){var u=this
if(u.a>0){u.b=u.c=u.d=u.e=u.f=null
u.a=0
u.bK()}},
u:function(a,b){var u,t,s=this
H.d(b,{func:1,ret:-1,args:[H.b(s,0),H.b(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.e(P.ar(s))
u=u.c}},
cF:function(a,b,c){var u,t=this
H.n(b,H.b(t,0))
H.n(c,H.b(t,1))
u=t.aY(a,b)
if(u==null)t.bS(a,b,t.bM(b,c))
else u.b=c},
bK:function(){this.r=this.r+1&67108863},
bM:function(a,b){var u,t=this,s=new H.h2(H.n(a,H.b(t,0)),H.n(b,H.b(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.bK()
return s},
ex:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.bK()},
bc:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a8(a[t].a,b))return t
return-1},
m:function(a){return P.h6(this)},
aY:function(a,b){return a[b]},
aX:function(a,b){return a[b]},
bS:function(a,b,c){a[b]=c},
cW:function(a,b){delete a[b]},
cR:function(a,b){return this.aY(a,b)!=null},
bL:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bS(t,u,t)
this.cW(t,u)
return t},
$ila:1}
H.fV.prototype={
$1:function(a){var u=this.a
return u.h(0,H.n(a,H.b(u,0)))},
$S:function(){var u=this.a
return{func:1,ret:H.b(u,1),args:[H.b(u,0)]}}}
H.h2.prototype={}
H.bx.prototype={
gj:function(a){return this.a.a},
gM:function(a){return this.a.a===0},
gv:function(a){var u=this.a,t=new H.h3(u,u.r,this.$ti)
t.c=u.e
return t},
E:function(a,b){return this.a.p(b)}}
H.h3.prototype={
gn:function(){return this.d},
l:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.ar(t))
else{t=u.c
if(t==null){u.scE(null)
return!1}else{u.scE(t.a)
u.c=u.c.c
return!0}}},
scE:function(a){this.d=H.n(a,H.b(this,0))},
$iai:1}
H.jO.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.jP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:33}
H.jQ.prototype={
$1:function(a){return this.a(H.v(a))},
$S:35}
H.fU.prototype={
m:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilh:1}
H.hK.prototype={
h:function(a,b){H.x(b)
if(b!==0)H.X(P.cA(b,null))
return this.c},
$idh:1}
H.ko.prototype={
l:function(){var u,t,s=this,r=s.c,q=s.b,p=q.length,o=s.a,n=o.length
if(r+p>n){s.d=null
return!1}u=o.indexOf(q,r)
if(u<0){s.c=n+1
s.d=null
return!1}t=u+p
s.d=new H.hK(u,q)
s.c=t===s.c?t+1:t
return!0},
gn:function(){return this.d},
$iai:1,
$aai:function(){return[P.dh]}}
H.cy.prototype={$ilo:1}
H.di.prototype={
gj:function(a){return a.length},
$ias:1,
$aas:function(){}}
H.cx.prototype={
h:function(a,b){H.x(b)
H.b2(b,a,a.length)
return a[b]},
i:function(a,b,c){H.x(b)
H.oe(c)
H.b2(b,a,a.length)
a[b]=c},
$iJ:1,
$aJ:function(){return[P.b3]},
$abt:function(){return[P.b3]},
$aP:function(){return[P.b3]},
$if:1,
$af:function(){return[P.b3]},
$im:1,
$am:function(){return[P.b3]}}
H.dj.prototype={
i:function(a,b,c){H.x(b)
H.x(c)
H.b2(b,a,a.length)
a[b]=c},
$iJ:1,
$aJ:function(){return[P.C]},
$abt:function(){return[P.C]},
$aP:function(){return[P.C]},
$if:1,
$af:function(){return[P.C]},
$im:1,
$am:function(){return[P.C]}}
H.hb.prototype={
h:function(a,b){H.x(b)
H.b2(b,a,a.length)
return a[b]}}
H.hc.prototype={
h:function(a,b){H.x(b)
H.b2(b,a,a.length)
return a[b]}}
H.hd.prototype={
h:function(a,b){H.x(b)
H.b2(b,a,a.length)
return a[b]}}
H.he.prototype={
h:function(a,b){H.x(b)
H.b2(b,a,a.length)
return a[b]}}
H.hf.prototype={
h:function(a,b){H.x(b)
H.b2(b,a,a.length)
return a[b]}}
H.dk.prototype={
gj:function(a){return a.length},
h:function(a,b){H.x(b)
H.b2(b,a,a.length)
return a[b]}}
H.hg.prototype={
gj:function(a){return a.length},
h:function(a,b){H.x(b)
H.b2(b,a,a.length)
return a[b]}}
H.cL.prototype={}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
P.i6.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:30}
P.i5.prototype={
$1:function(a){var u,t
this.a.a=H.d(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:44}
P.i7.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:0}
P.i8.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:0}
P.jo.prototype={
ew:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cc(new P.jp(this,b),0),a)
else throw H.e(P.F("`setTimeout()` not found."))}}
P.jp.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:1}
P.b0.prototype={}
P.a2.prototype={
ac:function(){},
ad:function(){},
saM:function(a){this.dy=H.i(a,"$ia2",this.$ti,"$aa2")},
sb1:function(a){this.fr=H.i(a,"$ia2",this.$ti,"$aa2")}}
P.c4.prototype={
gaZ:function(){return this.c<4},
eL:function(){var u=this.r
if(u!=null)return u
return this.r=new P.a1($.N,[null])},
df:function(a){var u,t
H.i(a,"$ia2",this.$ti,"$aa2")
u=a.fr
t=a.dy
if(u==null)this.scY(t)
else u.saM(t)
if(t==null)this.sd3(u)
else t.sb1(u)
a.sb1(a)
a.saM(a)},
bU:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.b(p,0)
H.d(a,{func:1,ret:-1,args:[o]})
H.d(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.lQ()
o=new P.dF($.N,c,p.$ti)
o.dg()
return o}u=$.N
t=d?1:0
s=p.$ti
r=new P.a2(p,u,t,s)
r.bv(a,b,c,d,o)
r.sb1(r)
r.saM(r)
H.i(r,"$ia2",s,"$aa2")
r.dx=p.c&1
q=p.e
p.sd3(r)
r.saM(null)
r.sb1(q)
if(q==null)p.scY(r)
else q.saM(r)
if(p.d==p.e)P.lK(p.a)
return r},
fa:function(a){var u=this,t=u.$ti
a=H.i(H.i(a,"$iW",t,"$aW"),"$ia2",t,"$aa2")
if(a.dy===a)return
t=a.dx
if((t&2)!==0)a.dx=t|4
else{u.df(a)
if((u.c&2)===0&&u.d==null)u.bz()}return},
aW:function(){if((this.c&4)!==0)return new P.aY("Cannot add new events after calling close")
return new P.aY("Cannot add new events while doing an addStream")},
k:function(a,b){var u=this
H.n(b,H.b(u,0))
if(!u.gaZ())throw H.e(u.aW())
u.b4(b)},
c_:function(a){var u,t=this
if((t.c&4)!==0)return t.r
if(!t.gaZ())throw H.e(t.aW())
t.c|=4
u=t.eL()
t.ax()
return u},
cZ:function(a){var u,t,s,r,q=this
H.d(a,{func:1,ret:-1,args:[[P.a_,H.b(q,0)]]})
u=q.c
if((u&2)!==0)throw H.e(P.cD("Cannot fire new event. Controller is already firing an event"))
t=q.d
if(t==null)return
s=u&1
q.c=u^3
for(;t!=null;){u=t.dx
if((u&1)===s){t.dx=u|2
a.$1(t)
u=t.dx^=1
r=t.dy
if((u&4)!==0)q.df(t)
t.dx&=4294967293
t=r}else t=t.dy}q.c&=4294967293
if(q.d==null)q.bz()},
bz:function(){var u=this
if((u.c&4)!==0&&u.r.a===0)u.r.cH(null)
P.lK(u.b)},
scY:function(a){this.d=H.i(a,"$ia2",this.$ti,"$aa2")},
sd3:function(a){this.e=H.i(a,"$ia2",this.$ti,"$aa2")},
$ial:1,
$ipa:1,
$iay:1,
$ibh:1}
P.ji.prototype={
gaZ:function(){return P.c4.prototype.gaZ.call(this)&&(this.c&2)===0},
aW:function(){if((this.c&2)!==0)return new P.aY("Cannot fire new event. Controller is already firing an event")
return this.eo()},
b4:function(a){var u,t=this
H.n(a,H.b(t,0))
u=t.d
if(u==null)return
if(u===t.e){t.c|=2
u.ai(a)
t.c&=4294967293
if(t.d==null)t.bz()
return}t.cZ(new P.jj(t,a))},
ax:function(){var u=this
if(u.d!=null)u.cZ(new P.jk(u))
else u.r.cH(null)}}
P.jj.prototype={
$1:function(a){H.i(a,"$ia_",[H.b(this.a,0)],"$aa_").ai(this.b)},
$S:function(){return{func:1,ret:P.z,args:[[P.a_,H.b(this.a,0)]]}}}
P.jk.prototype={
$1:function(a){H.i(a,"$ia_",[H.b(this.a,0)],"$aa_").cK()},
$S:function(){return{func:1,ret:P.z,args:[[P.a_,H.b(this.a,0)]]}}}
P.ab.prototype={}
P.fL.prototype={
$0:function(){var u,t,s
try{this.a.aH(this.b.$0())}catch(s){u=H.T(s)
t=H.b4(s)
this.a.aI(u,t)}},
$S:0}
P.id.prototype={}
P.jl.prototype={}
P.aN.prototype={
h4:function(a){if((this.c&15)!==6)return!0
return this.b.b.co(H.d(this.d,{func:1,ret:P.G,args:[P.y]}),a.a,P.G,P.y)},
fV:function(a){var u=this.e,t=P.y,s={futureOr:1,type:H.b(this,1)},r=this.b.b
if(H.bJ(u,{func:1,args:[P.y,P.V]}))return H.jL(r.hg(u,a.a,a.b,null,t,P.V),s)
else return H.jL(r.co(H.d(u,{func:1,args:[P.y]}),a.a,null,t),s)}}
P.a1.prototype={
gf4:function(){return this.a===8},
e2:function(a,b,c){var u,t,s,r=H.b(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.N
if(u!==C.f){H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.o4(b,u)}t=new P.a1($.N,[c])
s=b==null?1:3
this.bx(new P.aN(t,s,a,b,[r,c]))
return t},
e1:function(a,b){return this.e2(a,null,b)},
e7:function(a){var u,t
H.d(a,{func:1})
u=$.N
t=new P.a1(u,this.$ti)
if(u!==C.f)a=H.d(a,{func:1,ret:null})
u=H.b(this,0)
this.bx(new P.aN(t,8,a,null,[u,u]))
return t},
fm:function(a){H.n(a,H.b(this,0))
this.a=4
this.c=a},
bx:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.a(t.c,"$iaN")
t.c=a}else{if(s===2){u=H.a(t.c,"$ia1")
s=u.a
if(s<4){u.bx(a)
return}t.a=s
t.c=u.c}P.ca(null,null,t.b,H.d(new P.iw(t,a),{func:1,ret:-1}))}},
dc:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.a(p.c,"$iaN")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.a(p.c,"$ia1")
u=q.a
if(u<4){q.dc(a)
return}p.a=u
p.c=q.c}o.a=p.b3(a)
P.ca(null,null,p.b,H.d(new P.iD(o,p),{func:1,ret:-1}))}},
b2:function(){var u=H.a(this.c,"$iaN")
this.c=null
return this.b3(u)},
b3:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aH:function(a){var u,t,s=this,r=H.b(s,0)
H.jL(a,{futureOr:1,type:r})
u=s.$ti
if(H.e0(a,"$iab",u,"$aab"))if(H.e0(a,"$ia1",u,null))P.iy(a,s)
else P.lv(a,s)
else{t=s.b2()
H.n(a,r)
s.a=4
s.c=a
P.c6(s,t)}},
aI:function(a,b){var u,t=this
H.a(b,"$iV")
u=t.b2()
t.a=8
t.c=new P.ad(a,b)
P.c6(t,u)},
eG:function(a){return this.aI(a,null)},
cH:function(a){var u=this
if(H.e0(a,"$iab",u.$ti,"$aab")){u.eB(a)
return}u.a=1
P.ca(null,null,u.b,H.d(new P.ix(u,a),{func:1,ret:-1}))},
eB:function(a){var u=this,t=u.$ti
H.i(a,"$iab",t,"$aab")
if(H.e0(a,"$ia1",t,null)){if(a.gf4()){u.a=1
P.ca(null,null,u.b,H.d(new P.iC(u,a),{func:1,ret:-1}))}else P.iy(a,u)
return}P.lv(a,u)},
$iab:1}
P.iw.prototype={
$0:function(){P.c6(this.a,this.b)},
$S:0}
P.iD.prototype={
$0:function(){P.c6(this.b,this.a.a)},
$S:0}
P.iz.prototype={
$1:function(a){var u=this.a
u.a=0
u.aH(a)},
$S:30}
P.iA.prototype={
$2:function(a,b){H.a(b,"$iV")
this.a.aI(a,b)},
$1:function(a){return this.$2(a,null)},
$C:"$2",
$D:function(){return[null]},
$S:38}
P.iB.prototype={
$0:function(){this.a.aI(this.b,this.c)},
$S:0}
P.ix.prototype={
$0:function(){var u=this.a,t=H.n(this.b,H.b(u,0)),s=u.b2()
u.a=4
u.c=t
P.c6(u,s)},
$S:0}
P.iC.prototype={
$0:function(){P.iy(this.b,this.a)},
$S:0}
P.iG.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.e_(H.d(s.d,{func:1}),null)}catch(r){u=H.T(r)
t=H.b4(r)
if(o.d){s=H.a(o.a.a.c,"$iad").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.a(o.a.a.c,"$iad")
else q.b=new P.ad(u,t)
q.a=!0
return}if(!!J.j(n).$iab){if(n instanceof P.a1&&n.a>=4){if(n.a===8){s=o.b
s.b=H.a(n.c,"$iad")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.e1(new P.iH(p),null)
s.a=!1}},
$S:1}
P.iH.prototype={
$1:function(a){return this.a},
$S:69}
P.iF.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.b(s,0)
q=H.n(n.c,r)
p=H.b(s,1)
n.a.b=s.b.b.co(H.d(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.T(o)
t=H.b4(o)
s=n.a
s.b=new P.ad(u,t)
s.a=!0}},
$S:1}
P.iE.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.a(m.a.a.c,"$iad")
r=m.c
if(H.K(r.h4(u))&&r.e!=null){q=m.b
q.b=r.fV(u)
q.a=!1}}catch(p){t=H.T(p)
s=H.b4(p)
r=H.a(m.a.a.c,"$iad")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ad(t,s)
n.a=!0}},
$S:1}
P.dA.prototype={}
P.a5.prototype={
S:function(a,b){var u=H.D(this,"a5",0)
return new P.iT(H.d(b,{func:1,ret:null,args:[u]}),this,[u,null])},
gj:function(a){var u={},t=new P.a1($.N,[P.C])
u.a=0
this.W(new P.hG(u,this),!0,new P.hH(u,t),t.gcN())
return t},
O:function(a){var u=H.D(this,"a5",0),t=H.t([],[u]),s=new P.a1($.N,[[P.m,u]])
this.W(new P.hI(this,t),!0,new P.hJ(s,t),s.gcN())
return s},
R:function(a,b){P.ak(b,"count")
return new P.je(b,this,[H.D(this,"a5",0)])}}
P.hG.prototype={
$1:function(a){H.n(a,H.D(this.b,"a5",0));++this.a.a},
$S:function(){return{func:1,ret:P.z,args:[H.D(this.b,"a5",0)]}}}
P.hH.prototype={
$0:function(){this.b.aH(this.a.a)},
$C:"$0",
$R:0,
$S:0}
P.hI.prototype={
$1:function(a){C.a.k(this.b,H.n(a,H.D(this.a,"a5",0)))},
$S:function(){return{func:1,ret:P.z,args:[H.D(this.a,"a5",0)]}}}
P.hJ.prototype={
$0:function(){this.a.aH(this.b)},
$C:"$0",
$R:0,
$S:0}
P.W.prototype={}
P.hF.prototype={}
P.dB.prototype={
gq:function(a){return(H.bB(this.a)^892482866)>>>0},
P:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.dB&&b.a===this.a}}
P.dC.prototype={
bN:function(){return this.x.fa(this)},
ac:function(){H.i(this,"$iW",[H.b(this.x,0)],"$aW")},
ad:function(){H.i(this,"$iW",[H.b(this.x,0)],"$aW")}}
P.a_.prototype={
bv:function(a,b,c,d,e){var u,t,s=this,r=H.D(s,"a_",0)
H.d(a,{func:1,ret:-1,args:[r]})
s.seA(H.d(a,{func:1,ret:null,args:[r]}))
u=b==null?P.ob():b
if(H.bJ(u,{func:1,ret:-1,args:[P.y,P.V]}))s.b=s.d.dU(u,null,P.y,P.V)
else if(H.bJ(u,{func:1,ret:-1,args:[P.y]}))s.b=H.d(u,{func:1,ret:null,args:[P.y]})
else H.X(P.bN("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.d(c,{func:1,ret:-1})
t=c==null?P.lQ():c
s.sf8(H.d(t,{func:1,ret:-1}))},
cf:function(a){var u,t,s=this,r=s.e
if((r&8)!==0)return
u=(r+128|4)>>>0
s.e=u
if(r<128&&s.r!=null){t=s.r
if(t.a===1)t.a=3}if((r&4)===0&&(u&32)===0)s.d2(s.gb_())},
cm:function(){var u=this,t=u.e
if((t&8)!==0)return
if(t>=128){t=u.e=t-128
if(t<128)if((t&64)!==0&&u.r.c!=null)u.r.bq(u)
else{t=(t&4294967291)>>>0
u.e=t
if((t&32)===0)u.d2(u.gb0())}}},
a0:function(){var u=this,t=(u.e&4294967279)>>>0
u.e=t
if((t&8)===0)u.bA()
t=u.f
return t==null?$.e2():t},
bA:function(){var u,t=this,s=t.e=(t.e|8)>>>0
if((s&64)!==0){u=t.r
if(u.a===1)u.a=3}if((s&32)===0)t.sbO(null)
t.f=t.bN()},
ai:function(a){var u,t=this,s=H.D(t,"a_",0)
H.n(a,s)
u=t.e
if((u&8)!==0)return
if(u<32)t.b4(a)
else t.by(new P.ii(a,[s]))},
aV:function(a,b){var u=this.e
if((u&8)!==0)return
if(u<32)this.dh(a,b)
else this.by(new P.ik(a,b))},
cK:function(){var u=this,t=u.e
if((t&8)!==0)return
t=(t|2)>>>0
u.e=t
if(t<32)u.ax()
else u.by(C.F)},
ac:function(){},
ad:function(){},
bN:function(){return},
by:function(a){var u=this,t=[H.D(u,"a_",0)],s=H.i(u.r,"$icR",t,"$acR")
if(s==null){s=new P.cR(t)
u.sbO(s)}s.k(0,a)
t=u.e
if((t&64)===0){t=(t|64)>>>0
u.e=t
if(t<128)u.r.bq(u)}},
b4:function(a){var u,t=this,s=H.D(t,"a_",0)
H.n(a,s)
u=t.e
t.e=(u|32)>>>0
t.d.cp(t.a,a,s)
t.e=(t.e&4294967263)>>>0
t.bC((u&4)!==0)},
dh:function(a,b){var u=this,t=u.e,s=new P.ib(u,a,b)
if((t&1)!==0){u.e=(t|16)>>>0
u.bA()
t=u.f
if(t!=null&&t!==$.e2())t.e7(s)
else s.$0()}else{s.$0()
u.bC((t&4)!==0)}},
ax:function(){var u,t=this,s=new P.ia(t)
t.bA()
t.e=(t.e|16)>>>0
u=t.f
if(u!=null&&u!==$.e2())u.e7(s)
else s.$0()},
d2:function(a){var u,t=this
H.d(a,{func:1,ret:-1})
u=t.e
t.e=(u|32)>>>0
a.$0()
t.e=(t.e&4294967263)>>>0
t.bC((u&4)!==0)},
bC:function(a){var u,t,s=this,r=s.e
if((r&64)!==0&&s.r.c==null){r=s.e=(r&4294967231)>>>0
if((r&4)!==0)if(r<128){u=s.r
u=u==null||u.c==null}else u=!1
else u=!1
if(u){r=(r&4294967291)>>>0
s.e=r}}for(;!0;a=t){if((r&8)!==0){s.sbO(null)
return}t=(r&4)!==0
if(a===t)break
s.e=(r^32)>>>0
if(t)s.ac()
else s.ad()
r=(s.e&4294967263)>>>0
s.e=r}if((r&64)!==0&&r<128)s.r.bq(s)},
seA:function(a){this.a=H.d(a,{func:1,ret:-1,args:[H.D(this,"a_",0)]})},
sf8:function(a){this.c=H.d(a,{func:1,ret:-1})},
sbO:function(a){this.r=H.i(a,"$icP",[H.D(this,"a_",0)],"$acP")},
$iW:1,
$iay:1,
$ibh:1}
P.ib.prototype={
$0:function(){var u,t,s,r=this.a,q=r.e
if((q&8)!==0&&(q&16)===0)return
r.e=(q|32)>>>0
u=r.b
q=this.b
t=P.y
s=r.d
if(H.bJ(u,{func:1,ret:-1,args:[P.y,P.V]}))s.hh(u,q,this.c,t,P.V)
else s.cp(H.d(r.b,{func:1,ret:-1,args:[P.y]}),q,t)
r.e=(r.e&4294967263)>>>0},
$S:1}
P.ia.prototype={
$0:function(){var u=this.a,t=u.e
if((t&16)===0)return
u.e=(t|42)>>>0
u.d.cn(u.c)
u.e=(u.e&4294967263)>>>0},
$S:1}
P.jf.prototype={
W:function(a,b,c,d){H.d(a,{func:1,ret:-1,args:[H.b(this,0)]})
H.d(c,{func:1,ret:-1})
return this.a.bU(H.d(a,{func:1,ret:-1,args:[H.b(this,0)]}),d,c,!0===b)},
t:function(a){return this.W(a,null,null,null)},
bf:function(a,b,c){return this.W(a,null,b,c)}}
P.bf.prototype={
saQ:function(a){this.a=H.a(a,"$ibf")},
gaQ:function(){return this.a}}
P.ii.prototype={
cg:function(a){H.i(a,"$ibh",this.$ti,"$abh").b4(this.b)}}
P.ik.prototype={
cg:function(a){a.dh(this.b,this.c)},
$abf:function(){}}
P.ij.prototype={
cg:function(a){a.ax()},
gaQ:function(){return},
saQ:function(a){throw H.e(P.cD("No events after a done."))},
$ibf:1,
$abf:function(){}}
P.cP.prototype={
bq:function(a){var u,t=this
H.i(a,"$ibh",t.$ti,"$abh")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.m6(new P.iZ(t,a))
t.a=1}}
P.iZ.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.i(this.b,"$ibh",[H.b(r,0)],"$abh")
t=r.b
s=t.gaQ()
r.b=s
if(s==null)r.c=null
t.cg(u)},
$S:0}
P.cR.prototype={
k:function(a,b){var u,t=this
H.a(b,"$ibf")
u=t.c
if(u==null)t.b=t.c=b
else{u.saQ(b)
t.c=b}}}
P.dF.prototype={
dg:function(){var u=this
if((u.b&2)!==0)return
P.ca(null,null,u.a,H.d(u.gfl(),{func:1,ret:-1}))
u.b=(u.b|2)>>>0},
cf:function(a){this.b+=4},
cm:function(){var u=this.b
if(u>=4){u=this.b=u-4
if(u<4&&(u&1)===0)this.dg()}},
a0:function(){return $.e2()},
ax:function(){var u=this,t=u.b=(u.b&4294967293)>>>0
if(t>=4)return
u.b=(t|1)>>>0
u.a.cn(u.c)},
$iW:1}
P.aF.prototype={
W:function(a,b,c,d){return this.cU(H.d(a,{func:1,ret:-1,args:[H.D(this,"aF",1)]}),d,H.d(c,{func:1,ret:-1}),!0===b)},
bf:function(a,b,c){return this.W(a,null,b,c)},
cU:function(a,b,c,d){var u=H.D(this,"aF",1)
return P.nR(this,H.d(a,{func:1,ret:-1,args:[u]}),b,H.d(c,{func:1,ret:-1}),d,H.D(this,"aF",0),u)},
bI:function(a,b){var u
H.n(a,H.D(this,"aF",0))
u=H.D(this,"aF",1)
H.i(b,"$iay",[u],"$aay").ai(H.n(a,u))},
$aa5:function(a,b){return[b]}}
P.b1.prototype={
cC:function(a,b,c,d,e,f,g){var u=this
u.sdi(u.x.a.bf(u.geQ(),u.geS(),u.gf2()))},
ai:function(a){H.n(a,H.D(this,"b1",1))
if((this.e&2)!==0)return
this.ep(a)},
aV:function(a,b){if((this.e&2)!==0)return
this.eq(a,b)},
ac:function(){var u=this.y
if(u==null)return
u.cf(0)},
ad:function(){var u=this.y
if(u==null)return
u.cm()},
bN:function(){var u=this.y
if(u!=null){this.sdi(null)
return u.a0()}return},
eR:function(a){this.x.bI(H.n(a,H.D(this,"b1",0)),this)},
f3:function(a,b){H.a(b,"$iV")
H.i(this,"$iay",[H.D(this.x,"aF",1)],"$aay").aV(a,b)},
eT:function(){H.i(this,"$iay",[H.D(this.x,"aF",1)],"$aay").cK()},
sdi:function(a){this.y=H.i(a,"$iW",[H.D(this,"b1",0)],"$aW")},
$aW:function(a,b){return[b]},
$aay:function(a,b){return[b]},
$abh:function(a,b){return[b]},
$aa_:function(a,b){return[b]}}
P.iT.prototype={
bI:function(a,b){var u,t,s,r
H.n(a,H.b(this,0))
H.i(b,"$iay",[H.b(this,1)],"$aay")
u=null
try{u=this.b.$1(a)}catch(r){t=H.T(r)
s=H.b4(r)
b.aV(t,s)
return}b.ai(u)}}
P.cQ.prototype={$aW:null,$aay:null,$abh:null,$aa_:null,
$ab1:function(a){return[a,a]}}
P.je.prototype={
cU:function(a,b,c,d){var u,t,s=this,r=H.b(s,0)
H.d(a,{func:1,ret:-1,args:[r]})
H.d(c,{func:1,ret:-1})
u=$.N
t=d?1:0
t=new P.cQ(s.b,s,u,t,s.$ti)
t.bv(a,b,c,d,r)
t.cC(s,a,b,c,d,r,r)
return t},
bI:function(a,b){var u,t
H.n(a,H.b(this,0))
u=this.$ti
b=H.i(H.i(b,"$iay",u,"$aay"),"$icQ",u,"$acQ")
t=b.dy
if(t>0){b.dy=t-1
return}b.ai(a)},
$aa5:null,
$aaF:function(a){return[a,a]}}
P.ad.prototype={
m:function(a){return H.c(this.a)},
$ibr:1}
P.jy.prototype={$ip2:1}
P.jE.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dm():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.m(0)
throw u},
$S:0}
P.j6.prototype={
cn:function(a){var u,t,s,r=null
H.d(a,{func:1,ret:-1})
try{if(C.f===$.N){a.$0()
return}P.lH(r,r,this,a,-1)}catch(s){u=H.T(s)
t=H.b4(s)
P.c9(r,r,this,u,H.a(t,"$iV"))}},
cp:function(a,b,c){var u,t,s,r=null
H.d(a,{func:1,ret:-1,args:[c]})
H.n(b,c)
try{if(C.f===$.N){a.$1(b)
return}P.lJ(r,r,this,a,b,-1,c)}catch(s){u=H.T(s)
t=H.b4(s)
P.c9(r,r,this,u,H.a(t,"$iV"))}},
hh:function(a,b,c,d,e){var u,t,s,r=null
H.d(a,{func:1,ret:-1,args:[d,e]})
H.n(b,d)
H.n(c,e)
try{if(C.f===$.N){a.$2(b,c)
return}P.lI(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.T(s)
t=H.b4(s)
P.c9(r,r,this,u,H.a(t,"$iV"))}},
fB:function(a,b){return new P.j8(this,H.d(a,{func:1,ret:b}),b)},
bW:function(a){return new P.j7(this,H.d(a,{func:1,ret:-1}))},
fC:function(a,b){return new P.j9(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
e_:function(a,b){H.d(a,{func:1,ret:b})
if($.N===C.f)return a.$0()
return P.lH(null,null,this,a,b)},
co:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.n(b,d)
if($.N===C.f)return a.$1(b)
return P.lJ(null,null,this,a,b,c,d)},
hg:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.n(b,e)
H.n(c,f)
if($.N===C.f)return a.$2(b,c)
return P.lI(null,null,this,a,b,c,d,e,f)},
dU:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}}
P.j8.prototype={
$0:function(){return this.a.e_(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.j7.prototype={
$0:function(){return this.a.cn(this.b)},
$S:1}
P.j9.prototype={
$1:function(a){var u=this.c
return this.a.cp(this.b,H.n(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iI.prototype={
gj:function(a){return this.a},
gM:function(a){return this.a===0},
gF:function(){return new P.iJ(this,[H.b(this,0)])},
p:function(a){var u,t
if(typeof a==="string"&&a!=="__proto__"){u=this.b
return u==null?!1:u[a]!=null}else if(typeof a==="number"&&(a&1073741823)===a){t=this.c
return t==null?!1:t[a]!=null}else return this.eI(a)},
eI:function(a){var u=this.d
if(u==null)return!1
return this.aj(this.aL(u,a),a)>=0},
h:function(a,b){var u,t,s
if(typeof b==="string"&&b!=="__proto__"){u=this.b
t=u==null?null:P.lw(u,b)
return t}else if(typeof b==="number"&&(b&1073741823)===b){s=this.c
t=s==null?null:P.lw(s,b)
return t}else return this.eO(b)},
eO:function(a){var u,t,s=this.d
if(s==null)return
u=this.aL(s,a)
t=this.aj(u,a)
return t<0?null:u[t+1]},
i:function(a,b,c){var u,t,s,r,q,p=this
H.n(b,H.b(p,0))
H.n(c,H.b(p,1))
if(typeof b==="string"&&b!=="__proto__"){u=p.b
p.eF(u==null?p.b=P.lx():u,b,c)}else{t=p.d
if(t==null)t=p.d=P.lx()
s=H.m1(b)&1073741823
r=t[s]
if(r==null){P.km(t,s,[b,c]);++p.a
p.e=null}else{q=p.aj(r,b)
if(q>=0)r[q+1]=c
else{r.push(b,c);++p.a
p.e=null}}}},
u:function(a,b){var u,t,s,r,q=this,p=H.b(q,0)
H.d(b,{func:1,ret:-1,args:[p,H.b(q,1)]})
u=q.cP()
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(H.n(r,p),q.h(0,r))
if(u!==q.e)throw H.e(P.ar(q))}},
cP:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
if(i!=null)return i
u=new Array(j.a)
u.fixed$length=Array
t=j.b
if(t!=null){s=Object.getOwnPropertyNames(t)
r=s.length
for(q=0,p=0;p<r;++p){u[q]=s[p];++q}}else q=0
o=j.c
if(o!=null){s=Object.getOwnPropertyNames(o)
r=s.length
for(p=0;p<r;++p){u[q]=+s[p];++q}}n=j.d
if(n!=null){s=Object.getOwnPropertyNames(n)
r=s.length
for(p=0;p<r;++p){m=n[s[p]]
l=m.length
for(k=0;k<l;k+=2){u[q]=m[k];++q}}}return j.e=u},
eF:function(a,b,c){var u=this
H.n(b,H.b(u,0))
H.n(c,H.b(u,1))
if(a[b]==null){++u.a
u.e=null}P.km(a,b,c)},
aL:function(a,b){return a[H.m1(b)&1073741823]}}
P.iL.prototype={
aj:function(a,b){var u,t,s
if(a==null)return-1
u=a.length
for(t=0;t<u;t+=2){s=a[t]
if(s==null?b==null:s===b)return t}return-1}}
P.iJ.prototype={
gj:function(a){return this.a.a},
gM:function(a){return this.a.a===0},
gv:function(a){var u=this.a
return new P.iK(u,u.cP(),this.$ti)},
E:function(a,b){return this.a.p(b)}}
P.iK.prototype={
gn:function(){return this.d},
l:function(){var u=this,t=u.b,s=u.c,r=u.a
if(t!==r.e)throw H.e(P.ar(r))
else if(s>=t.length){u.saG(null)
return!1}else{u.saG(t[s])
u.c=s+1
return!0}},
saG:function(a){this.d=H.n(a,H.b(this,0))},
$iai:1}
P.iS.prototype={
gv:function(a){var u=this,t=new P.dK(u,u.r,u.$ti)
t.c=u.e
return t},
gj:function(a){return this.a},
E:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.a(u[b],"$ic7")!=null}else{t=this.eH(b)
return t}},
eH:function(a){var u=this.d
if(u==null)return!1
return this.aj(this.aL(u,a),a)>=0},
k:function(a,b){var u,t,s=this
H.n(b,H.b(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cL(u==null?s.b=P.kn():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cL(t==null?s.c=P.kn():t,b)}else return s.ey(b)},
ey:function(a){var u,t,s,r=this
H.n(a,H.b(r,0))
u=r.d
if(u==null)u=r.d=P.kn()
t=r.cO(a)
s=u[t]
if(s==null)u[t]=[r.bD(a)]
else{if(r.aj(s,a)>=0)return!1
s.push(r.bD(a))}return!0},
aa:function(a,b){var u=this
if(typeof b==="string"&&b!=="__proto__")return u.de(u.b,b)
else if(typeof b==="number"&&(b&1073741823)===b)return u.de(u.c,b)
else return u.fb(b)},
fb:function(a){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.aL(r,a)
t=s.aj(u,a)
if(t<0)return!1
s.dk(u.splice(t,1)[0])
return!0},
cL:function(a,b){H.n(b,H.b(this,0))
if(H.a(a[b],"$ic7")!=null)return!1
a[b]=this.bD(b)
return!0},
de:function(a,b){var u
if(a==null)return!1
u=H.a(a[b],"$ic7")
if(u==null)return!1
this.dk(u)
delete a[b]
return!0},
cM:function(){this.r=1073741823&this.r+1},
bD:function(a){var u,t=this,s=new P.c7(H.n(a,H.b(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cM()
return s},
dk:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cM()},
cO:function(a){return J.b6(a)&1073741823},
aL:function(a,b){return a[this.cO(b)]},
aj:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a8(a[t].a,b))return t
return-1}}
P.c7.prototype={}
P.dK.prototype={
gn:function(){return this.d},
l:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.ar(t))
else{t=u.c
if(t==null){u.saG(null)
return!1}else{u.saG(H.n(t.a,H.b(u,0)))
u.c=u.c.b
return!0}}},
saG:function(a){this.d=H.n(a,H.b(this,0))},
$iai:1}
P.h4.prototype={$iJ:1,$if:1,$im:1}
P.P.prototype={
gv:function(a){return new H.cu(a,this.gj(a),[H.aA(this,a,"P",0)])},
A:function(a,b){return this.h(a,b)},
u:function(a,b){var u,t,s=this
H.d(b,{func:1,ret:-1,args:[H.aA(s,a,"P",0)]})
u=s.gj(a)
for(t=0;t<u;++t){b.$1(s.h(a,t))
if(u!==s.gj(a))throw H.e(P.ar(a))}},
gM:function(a){return this.gj(a)===0},
gcd:function(a){return!this.gM(a)},
as:function(a,b){var u=H.aA(this,a,"P",0)
return new H.bd(a,H.d(b,{func:1,ret:P.G,args:[u]}),[u])},
G:function(a,b,c){var u=H.aA(this,a,"P",0)
return new H.av(a,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
S:function(a,b){return this.G(a,b,null)},
R:function(a,b){return H.an(a,b,null,H.aA(this,a,"P",0))},
H:function(a,b){var u,t=this,s=H.t([],[H.aA(t,a,"P",0)])
C.a.sj(s,t.gj(a))
for(u=0;u<t.gj(a);++u)C.a.i(s,u,t.h(a,u))
return s},
O:function(a){return this.H(a,!0)},
k:function(a,b){var u,t=this
H.n(b,H.aA(t,a,"P",0))
u=t.gj(a)
t.sj(a,u+1)
t.i(a,u,b)},
a5:function(a,b){var u=H.aA(this,a,"P",0)
H.d(b,{func:1,ret:P.C,args:[u,u]})
H.ll(a,b,u)},
m:function(a){return P.fP(a,"[","]")}}
P.h5.prototype={}
P.h7.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.c(a)
t.a=u+": "
t.a+=H.c(b)},
$S:27}
P.aX.prototype={
u:function(a,b){var u,t,s=this
H.d(b,{func:1,ret:-1,args:[H.D(s,"aX",0),H.D(s,"aX",1)]})
for(u=J.B(s.gF());u.l();){t=u.gn()
b.$2(t,s.h(0,t))}},
aA:function(a,b,c,d){var u,t,s,r,q=this
H.d(b,{func:1,ret:[P.cv,c,d],args:[H.D(q,"aX",0),H.D(q,"aX",1)]})
u=P.df(c,d)
for(t=J.B(q.gF());t.l();){s=t.gn()
r=b.$2(s,q.h(0,s))
u.i(0,C.r.gh2(r),r.gC(r))}return u},
S:function(a,b){return this.aA(a,b,null,null)},
p:function(a){return J.mv(this.gF(),a)},
gj:function(a){return J.a4(this.gF())},
gM:function(a){return J.mz(this.gF())},
m:function(a){return P.h6(this)},
$ir:1}
P.jw.prototype={
i:function(a,b,c){H.n(b,H.b(this,0))
H.n(c,H.b(this,1))
throw H.e(P.F("Cannot modify unmodifiable map"))}}
P.h8.prototype={
h:function(a,b){return this.a.h(0,b)},
i:function(a,b,c){this.a.i(0,H.n(b,H.b(this,0)),H.n(c,H.b(this,1)))},
p:function(a){return this.a.p(a)},
u:function(a,b){this.a.u(0,H.d(b,{func:1,ret:-1,args:[H.b(this,0),H.b(this,1)]}))},
gM:function(a){return this.a.a===0},
gj:function(a){return this.a.a},
gF:function(){var u=this.a
return new H.bx(u,[H.b(u,0)])},
m:function(a){return P.h6(this.a)},
aA:function(a,b,c,d){return this.a.aA(0,H.d(b,{func:1,ret:[P.cv,c,d],args:[H.b(this,0),H.b(this,1)]}),c,d)},
S:function(a,b){return this.aA(a,b,null,null)},
$ir:1}
P.hV.prototype={}
P.bC.prototype={
H:function(a,b){var u,t,s,r=this,q=H.t([],[H.D(r,"bC",0)])
C.a.sj(q,r.gj(r))
for(u=r.X(),u=P.cK(u,u.r,H.b(u,0)),t=0;u.l();t=s){s=t+1
C.a.i(q,t,u.d)}return q},
O:function(a){return this.H(a,!0)},
G:function(a,b,c){var u=H.D(this,"bC",0)
return new H.bX(this,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
S:function(a,b){return this.G(a,b,null)},
m:function(a){return P.fP(this,"{","}")},
R:function(a,b){return H.dr(this,b,H.D(this,"bC",0))},
A:function(a,b){var u,t,s
P.ak(b,"index")
for(u=this.X(),u=P.cK(u,u.r,H.b(u,0)),t=0;u.l();){s=u.d
if(b===t)return s;++t}throw H.e(P.aW(b,this,"index",null,t))}}
P.hC.prototype={$iJ:1,$if:1,$iax:1}
P.jb.prototype={
N:function(a,b){var u
for(u=J.B(H.i(b,"$if",this.$ti,"$af"));u.l();)this.k(0,u.gn())},
H:function(a,b){var u,t,s,r=this,q=H.t([],r.$ti)
C.a.sj(q,r.a)
for(u=P.cK(r,r.r,H.b(r,0)),t=0;u.l();t=s){s=t+1
C.a.i(q,t,u.d)}return q},
O:function(a){return this.H(a,!0)},
G:function(a,b,c){var u=H.b(this,0)
return new H.bX(this,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
S:function(a,b){return this.G(a,b,null)},
m:function(a){return P.fP(this,"{","}")},
ce:function(a,b){var u,t=P.cK(this,this.r,H.b(this,0))
if(!t.l())return""
if(b===""){u=""
do u+=H.c(t.d)
while(t.l())}else{u=H.c(t.d)
for(;t.l();)u=u+b+H.c(t.d)}return u.charCodeAt(0)==0?u:u},
R:function(a,b){return H.dr(this,b,H.b(this,0))},
A:function(a,b){var u,t,s,r=this
P.ak(b,"index")
for(u=P.cK(r,r.r,H.b(r,0)),t=0;u.l();){s=u.d
if(b===t)return s;++t}throw H.e(P.aW(b,r,"index",null,t))},
$iJ:1,
$if:1,
$iax:1}
P.dL.prototype={}
P.dP.prototype={}
P.dV.prototype={}
P.iN.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.f9(b):u}},
gj:function(a){return this.b==null?this.c.a:this.aJ().length},
gM:function(a){return this.gj(this)===0},
gF:function(){if(this.b==null){var u=this.c
return new H.bx(u,[H.b(u,0)])}return new P.iO(this)},
i:function(a,b,c){var u,t,s=this
if(s.b==null)s.c.i(0,b,c)
else if(s.p(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.ft().i(0,b,c)},
p:function(a){if(this.b==null)return this.c.p(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
u:function(a,b){var u,t,s,r,q=this
H.d(b,{func:1,ret:-1,args:[P.h,,]})
if(q.b==null)return q.c.u(0,b)
u=q.aJ()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.jz(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.e(P.ar(q))}},
aJ:function(){var u=H.aq(this.c)
if(u==null)u=this.c=H.t(Object.keys(this.a),[P.h])
return u},
ft:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.df(P.h,null)
t=p.aJ()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.i(0,q,p.h(0,q))}if(r===0)C.a.k(t,null)
else C.a.sj(t,0)
p.a=p.b=null
return p.c=u},
f9:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.jz(this.a[a])
return this.b[a]=u},
$aaX:function(){return[P.h,null]},
$ar:function(){return[P.h,null]}}
P.iO.prototype={
gj:function(a){var u=this.a
return u.gj(u)},
A:function(a,b){var u=this.a
if(u.b==null)u=u.gF().A(0,b)
else{u=u.aJ()
if(b<0||b>=u.length)return H.A(u,b)
u=u[b]}return u},
gv:function(a){var u=this.a
if(u.b==null){u=u.gF()
u=u.gv(u)}else{u=u.aJ()
u=new J.bl(u,u.length,[H.b(u,0)])}return u},
E:function(a,b){return this.a.p(b)},
$aJ:function(){return[P.h]},
$aaC:function(){return[P.h]},
$af:function(){return[P.h]}}
P.eR.prototype={}
P.bU.prototype={}
P.fM.prototype={
m:function(a){return"unknown"}}
P.co.prototype={
dA:function(a){var u=this.cS(a,0,a.length)
return u==null?a:u},
cS:function(a,b,c){var u,t,s,r
for(u=b,t=null;u<c;++u){if(u>=a.length)return H.A(a,u)
switch(a[u]){case"&":s="&amp;"
break
case'"':s="&quot;"
break
case"'":s="&#39;"
break
case"<":s="&lt;"
break
case">":s="&gt;"
break
case"/":s="&#47;"
break
default:s=null}if(s!=null){if(t==null)t=new P.am("")
if(u>b)t.a+=C.e.ab(a,b,u)
t.a+=s
b=u+1}}if(t==null)return
if(c>b)t.a+=J.mJ(a,b,c)
r=t.a
return r.charCodeAt(0)==0?r:r},
$abU:function(){return[P.h,P.h]}}
P.de.prototype={
m:function(a){var u=P.b9(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.h_.prototype={
m:function(a){return"Cyclic error in JSON stringify"}}
P.fZ.prototype={
c0:function(a,b,c){var u=P.o3(b,this.gfM().a)
return u},
dG:function(a,b){var u=P.nU(a,this.gfR().b,null)
return u},
gfR:function(){return C.J},
gfM:function(){return C.I}}
P.h1.prototype={
$abU:function(){return[P.y,P.h]}}
P.h0.prototype={
$abU:function(){return[P.h,P.y]}}
P.iQ.prototype={
e9:function(a){var u,t,s,r,q,p,o=a.length
for(u=J.jM(a),t=this.c,s=0,r=0;r<o;++r){q=u.aF(a,r)
if(q>92)continue
if(q<32){if(r>s)t.a+=C.e.ab(a,s,r)
s=r+1
t.a+=H.aw(92)
switch(q){case 8:t.a+=H.aw(98)
break
case 9:t.a+=H.aw(116)
break
case 10:t.a+=H.aw(110)
break
case 12:t.a+=H.aw(102)
break
case 13:t.a+=H.aw(114)
break
default:t.a+=H.aw(117)
t.a+=H.aw(48)
t.a+=H.aw(48)
p=q>>>4&15
t.a+=H.aw(p<10?48+p:87+p)
p=q&15
t.a+=H.aw(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)t.a+=C.e.ab(a,s,r)
s=r+1
t.a+=H.aw(92)
t.a+=H.aw(q)}}if(s===0)t.a+=H.c(a)
else if(s<o)t.a+=u.ab(a,s,o)},
bB:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.e(new P.h_(a,null))}C.a.k(u,a)},
bo:function(a){var u,t,s,r,q=this
if(q.e8(a))return
q.bB(a)
try{u=q.b.$1(a)
if(!q.e8(u)){s=P.l9(a,null,q.gda())
throw H.e(s)}s=q.a
if(0>=s.length)return H.A(s,-1)
s.pop()}catch(r){t=H.T(r)
s=P.l9(a,t,q.gda())
throw H.e(s)}},
e8:function(a){var u,t,s=this
if(typeof a==="number"){if(!isFinite(a))return!1
s.c.a+=C.b.m(a)
return!0}else if(a===!0){s.c.a+="true"
return!0}else if(a===!1){s.c.a+="false"
return!0}else if(a==null){s.c.a+="null"
return!0}else if(typeof a==="string"){u=s.c
u.a+='"'
s.e9(a)
u.a+='"'
return!0}else{u=J.j(a)
if(!!u.$im){s.bB(a)
s.hk(a)
u=s.a
if(0>=u.length)return H.A(u,-1)
u.pop()
return!0}else if(!!u.$ir){s.bB(a)
t=s.hl(a)
u=s.a
if(0>=u.length)return H.A(u,-1)
u.pop()
return t}else return!1}},
hk:function(a){var u,t,s=this.c
s.a+="["
u=J.Q(a)
if(u.gcd(a)){this.bo(u.h(a,0))
for(t=1;t<u.gj(a);++t){s.a+=","
this.bo(u.h(a,t))}}s.a+="]"},
hl:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gM(a)){o.c.a+="{}"
return!0}u=a.gj(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.u(0,new P.iR(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.e9(H.v(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.A(t,p)
o.bo(t[p])}r.a+="}"
return!0}}
P.iR.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.i(u,t.a++,a)
C.a.i(u,t.a++,b)},
$S:27}
P.iP.prototype={
gda:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.hj.prototype={
$2:function(a,b){var u,t,s
H.a(a,"$iaZ")
u=this.b
t=this.a
u.a+=t.a
s=u.a+=H.c(a.a)
u.a=s+": "
u.a+=P.b9(b)
t.a=", "},
$S:68}
P.G.prototype={}
P.bq.prototype={
k:function(a,b){return P.mX(C.c.D(this.a,H.a(b,"$ib7").gfW()),!1)},
P:function(a,b){if(b==null)return!1
return b instanceof P.bq&&this.a===b.a&&!0},
am:function(a,b){return C.c.am(this.a,H.a(b,"$ibq").a)},
gq:function(a){var u=this.a
return(u^C.c.bT(u,30))&1073741823},
m:function(a){var u=this,t=P.mY(H.np(u)),s=P.d_(H.nn(u)),r=P.d_(H.nj(u)),q=P.d_(H.nk(u)),p=P.d_(H.nm(u)),o=P.d_(H.no(u)),n=P.mZ(H.nl(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.b3.prototype={}
P.b7.prototype={
at:function(a,b){return new P.b7(C.c.w(this.a*b))},
gfW:function(){return C.c.al(this.a,1000)},
P:function(a,b){if(b==null)return!1
return b instanceof P.b7&&this.a===b.a},
gq:function(a){return C.c.gq(this.a)},
am:function(a,b){return C.c.am(this.a,H.a(b,"$ib7").a)},
m:function(a){var u,t,s,r=new P.ff(),q=this.a
if(q<0)return"-"+new P.b7(0-q).m(0)
u=r.$1(C.c.al(q,6e7)%60)
t=r.$1(C.c.al(q,1e6)%60)
s=new P.fe().$1(q%1e6)
return""+C.c.al(q,36e8)+":"+H.c(u)+":"+H.c(t)+"."+H.c(s)}}
P.fe.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:25}
P.ff.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:25}
P.br.prototype={}
P.e9.prototype={
m:function(a){return"Assertion failed"}}
P.dm.prototype={
m:function(a){return"Throw of null."}}
P.aR.prototype={
gbG:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbF:function(){return""},
m:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.c(p)
t=q.gbG()+o+u
if(!q.a)return t
s=q.gbF()
r=P.b9(q.b)
return t+s+": "+r}}
P.dq.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.c(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.c(s)
else if(t>s)u=": Not in range "+H.c(s)+".."+H.c(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.c(s)}return u}}
P.fN.prototype={
gbG:function(){return"RangeError"},
gbF:function(){var u,t=H.x(this.b)
if(typeof t!=="number")return t.ah()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.c(u)},
gj:function(a){return this.f}}
P.hi.prototype={
m:function(a){var u,t,s,r,q,p,o,n,m=this,l={},k=new P.am("")
l.a=""
for(u=m.c,t=u.length,s=0,r="",q="";s<t;++s,q=", "){p=u[s]
k.a=r+q
r=k.a+=P.b9(p)
l.a=", "}m.d.u(0,new P.hj(l,k))
o=P.b9(m.a)
n=k.m(0)
u="NoSuchMethodError: method not found: '"+H.c(m.b.a)+"'\nReceiver: "+o+"\nArguments: ["+n+"]"
return u}}
P.hW.prototype={
m:function(a){return"Unsupported operation: "+this.a}}
P.hT.prototype={
m:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aY.prototype={
m:function(a){return"Bad state: "+this.a}}
P.eS.prototype={
m:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.b9(u)+"."}}
P.hq.prototype={
m:function(a){return"Out of Memory"},
$ibr:1}
P.dt.prototype={
m:function(a){return"Stack Overflow"},
$ibr:1}
P.f_.prototype={
m:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.iv.prototype={
m:function(a){return"Exception: "+this.a},
$ika:1}
P.d9.prototype={
m:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.c(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.e.ab(r,0,75)+"...":r
return s+"\n"+u}else return s},
$ika:1}
P.aH.prototype={}
P.C.prototype={}
P.f.prototype={
G:function(a,b,c){var u=H.D(this,"f",0)
return H.lc(this,H.d(b,{func:1,ret:c,args:[u]}),u,c)},
S:function(a,b){return this.G(a,b,null)},
as:function(a,b){var u=H.D(this,"f",0)
return new H.bd(this,H.d(b,{func:1,ret:P.G,args:[u]}),[u])},
H:function(a,b){return P.by(this,!0,H.D(this,"f",0))},
O:function(a){return this.H(a,!0)},
gj:function(a){var u,t=this.gv(this)
for(u=0;t.l();)++u
return u},
R:function(a,b){return H.dr(this,b,H.D(this,"f",0))},
ga2:function(a){var u=this.gv(this)
if(!u.l())throw H.e(H.da())
return u.gn()},
gau:function(a){var u,t=this.gv(this)
if(!t.l())throw H.e(H.da())
u=t.gn()
if(t.l())throw H.e(H.n6())
return u},
A:function(a,b){var u,t,s
P.ak(b,"index")
for(u=this.gv(this),t=0;u.l();){s=u.gn()
if(b===t)return s;++t}throw H.e(P.aW(b,this,"index",null,t))},
m:function(a){return P.n4(this,"(",")")}}
P.ai.prototype={}
P.m.prototype={$iJ:1,$if:1}
P.r.prototype={}
P.cv.prototype={}
P.z.prototype={
gq:function(a){return P.y.prototype.gq.call(this,this)},
m:function(a){return"null"}}
P.I.prototype={}
P.y.prototype={constructor:P.y,$iy:1,
P:function(a,b){return this===b},
gq:function(a){return H.bB(this)},
m:function(a){return"Instance of '"+H.c(H.dp(this))+"'"},
bg:function(a,b){H.a(b,"$ikc")
throw H.e(P.ld(this,b.gdK(),b.gdS(),b.gdL()))},
toString:function(){return this.m(this)}}
P.dh.prototype={}
P.ax.prototype={}
P.V.prototype={}
P.h.prototype={$ilh:1}
P.am.prototype={
gj:function(a){return this.a.length},
m:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ioR:1}
P.aZ.prototype={}
W.q.prototype={$iq:1}
W.ce.prototype={
m:function(a){return String(a)},
$ice:1}
W.e8.prototype={
m:function(a){return String(a)}}
W.cf.prototype={$icf:1}
W.bQ.prototype={$ibQ:1}
W.bn.prototype={$ibn:1}
W.bS.prototype={$ibS:1}
W.bo.prototype={
gj:function(a){return a.length}}
W.R.prototype={$iR:1}
W.bV.prototype={
eb:function(a,b){var u=a.getPropertyValue(this.av(a,b))
return u==null?"":u},
av:function(a,b){var u=$.ma(),t=u[b]
if(typeof t==="string")return t
t=this.fp(a,b)
u[b]=t
return t},
fp:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.n_()+b
if(u in a)return u
return b},
aO:function(a,b,c,d){if(c==null)c=""
a.setProperty(b,c,d)},
gj:function(a){return a.length}}
W.eZ.prototype={}
W.ck.prototype={$ick:1}
W.aT.prototype={$iaT:1}
W.f0.prototype={
m:function(a){return String(a)}}
W.d0.prototype={
m:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
P:function(a,b){var u
if(b==null)return!1
u=J.j(b)
return!!u.$ibb&&a.left===u.gbe(b)&&a.top===u.gbl(b)&&a.width===u.gbn(b)&&a.height===u.gbb(b)},
gq:function(a){return W.lA(C.b.gq(a.left),C.b.gq(a.top),C.b.gq(a.width),C.b.gq(a.height))},
gds:function(a){return a.bottom},
gbb:function(a){return a.height},
gbe:function(a){return a.left},
gdZ:function(a){return a.right},
gbl:function(a){return a.top},
gbn:function(a){return a.width},
$ibb:1,
$abb:function(){return[P.I]}}
W.f1.prototype={
k:function(a,b){return a.add(H.v(b))},
gj:function(a){return a.length}}
W.ic.prototype={
gM:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var u
H.x(b)
u=this.b
if(b<0||b>=u.length)return H.A(u,b)
return H.a(u[b],"$il")},
i:function(a,b,c){var u
H.x(b)
H.a(c,"$il")
u=this.b
if(b<0||b>=u.length)return H.A(u,b)
this.a.replaceChild(c,u[b])},
sj:function(a,b){throw H.e(P.F("Cannot resize element lists"))},
k:function(a,b){H.a(b,"$il")
this.a.appendChild(b)
return b},
gv:function(a){var u=this.O(this)
return new J.bl(u,u.length,[H.b(u,0)])},
a5:function(a,b){H.d(b,{func:1,ret:P.C,args:[W.l,W.l]})
throw H.e(P.F("Cannot sort element lists"))},
b8:function(a){J.jY(this.a)},
$aJ:function(){return[W.l]},
$aP:function(){return[W.l]},
$af:function(){return[W.l]},
$am:function(){return[W.l]}}
W.az.prototype={
gj:function(a){return this.a.length},
h:function(a,b){var u
H.x(b)
u=this.a
if(b<0||b>=u.length)return H.A(u,b)
return H.n(u[b],H.b(this,0))},
i:function(a,b,c){H.x(b)
H.n(c,H.b(this,0))
throw H.e(P.F("Cannot modify list"))},
sj:function(a,b){throw H.e(P.F("Cannot modify list"))},
a5:function(a,b){var u=H.b(this,0)
H.d(b,{func:1,ret:P.C,args:[u,u]})
throw H.e(P.F("Cannot sort list"))},
$iaB:1}
W.l.prototype={
gfA:function(a){return new W.im(a)},
gdu:function(a){return new W.ic(a,a.children)},
gdv:function(a){return new W.io(a)},
gaR:function(a){var u=C.b.w(a.offsetLeft),t=C.b.w(a.offsetTop),s=C.b.w(a.offsetWidth),r=C.b.w(a.offsetHeight)
if(s<0)s=-s*0
if(r<0)r=-r*0
return new P.bb(u,t,s,r,[P.I])},
af:function(a,b){this.c8(a,"beforeend",b,null,null)},
m:function(a){return a.localName},
c8:function(a,b,c,d,e){var u,t=this.V(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(t,a)
break
case"afterbegin":u=a.childNodes
a.insertBefore(t,u.length>0?u[0]:null)
break
case"beforeend":a.appendChild(t)
break
case"afterend":a.parentNode.insertBefore(t,a.nextSibling)
break
default:H.X(P.bN("Invalid position "+b))}},
h3:function(a,b){if(!!a.matches)return a.matches(b)
else if(!!a.webkitMatchesSelector)return a.webkitMatchesSelector(b)
else if(!!a.mozMatchesSelector)return a.mozMatchesSelector(b)
else if(!!a.msMatchesSelector)return a.msMatchesSelector(b)
else if(!!a.oMatchesSelector)return a.oMatchesSelector(b)
else throw H.e(P.F("Not supported on this platform"))},
h5:function(a,b){var u=a
do{if(J.mG(u,b))return!0
u=u.parentElement}while(u!=null)
return!1},
V:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.l6
if(u==null){u=H.t([],[W.aj])
t=new W.dl(u)
C.a.k(u,W.ly(null))
C.a.k(u,W.lB())
$.l6=t
d=t}else d=u
u=$.l5
if(u==null){u=new W.dW(d)
$.l5=u
c=u}else{u.a=d
c=u}}if($.b8==null){u=document
t=u.implementation.createHTMLDocument("")
$.b8=t
$.k9=t.createRange()
t=$.b8.createElement("base")
H.a(t,"$icf")
t.href=u.baseURI
$.b8.head.appendChild(t)}u=$.b8
if(u.body==null){t=u.createElement("body")
u.body=H.a(t,"$ibn")}u=$.b8
if(!!this.$ibn)s=u.body
else{s=u.createElement(a.tagName)
$.b8.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.L,a.tagName)){$.k9.selectNodeContents(s)
r=$.k9.createContextualFragment(b)}else{s.innerHTML=b
r=$.b8.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.b8.body
if(s==null?u!=null:s!==u)J.cX(s)
c.cs(r)
document.adoptNode(r)
return r},
fL:function(a,b,c){return this.V(a,b,c,null)},
L:function(a,b){a.textContent=null
a.appendChild(this.V(a,b,null,null))},
gdM:function(a){return new W.aM(a,"click",!1,[W.u])},
gdP:function(a){return new W.aM(a,"mousedown",!1,[W.u])},
gdQ:function(a){return new W.aM(a,"touchstart",!1,[W.ac])},
$il:1,
ge0:function(a){return a.tagName}}
W.fi.prototype={
$1:function(a){return!!J.j(H.a(a,"$iw")).$il},
$S:24}
W.k.prototype={$ik:1}
W.fm.prototype={
h:function(a,b){return new W.cI(this.a,H.v(b),!1,[W.k])}}
W.fh.prototype={
h:function(a,b){var u
H.v(b)
if($.l4.p(b.toLowerCase())){u=$.kX
if(u==null)u=$.kX=!H.K(P.k8())&&J.e3(window.navigator.userAgent,"WebKit",0)
if(u)return new W.aM(this.a,$.l4.h(0,b.toLowerCase()),!1,[W.k])}return new W.aM(this.a,b,!1,[W.k])}}
W.bs.prototype={
ez:function(a,b,c,d){return a.addEventListener(b,H.cc(H.d(c,{func:1,args:[W.k]}),1),!1)},
dC:function(a,b){return a.dispatchEvent(b)},
fc:function(a,b,c,d){return a.removeEventListener(b,H.cc(H.d(c,{func:1,args:[W.k]}),1),!1)},
$ibs:1}
W.fK.prototype={
gj:function(a){return a.length}}
W.bY.prototype={
gj:function(a){return a.length},
h:function(a,b){H.x(b)
if(b>>>0!==b||b>=a.length)throw H.e(P.aW(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(b)
H.a(c,"$iw")
throw H.e(P.F("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.e(P.F("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.A(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.w]},
$ias:1,
$aas:function(){return[W.w]},
$aP:function(){return[W.w]},
$if:1,
$af:function(){return[W.w]},
$im:1,
$am:function(){return[W.w]},
$ibY:1,
$aa6:function(){return[W.w]}}
W.cp.prototype={$icp:1}
W.aI.prototype={
cw:function(a,b,c){return a.setSelectionRange(b,c)},
$iaI:1}
W.ba.prototype={$iba:1}
W.dg.prototype={
m:function(a){return String(a)},
$idg:1}
W.u.prototype={
gaR:function(a){var u,t,s,r,q,p
if(!!a.offsetX)return new P.p(a.offsetX,a.offsetY,[P.I])
else{u=a.target
if(!J.j(W.S(u)).$il)throw H.e(P.F("offsetX is only supported on elements"))
t=H.a(W.S(u),"$il")
u=a.clientX
s=a.clientY
r=[P.I]
q=t.getBoundingClientRect()
p=new P.p(u,s,r).I(0,new P.p(q.left,q.top,r))
return new P.p(J.kJ(p.a),J.kJ(p.b),r)}},
$iu:1}
W.af.prototype={
gau:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.e(P.cD("No elements"))
if(t>1)throw H.e(P.cD("More than one element"))
return u.firstChild},
k:function(a,b){this.a.appendChild(H.a(b,"$iw"))},
N:function(a,b){var u,t,s,r
H.i(b,"$if",[W.w],"$af")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
i:function(a,b,c){var u,t
H.x(b)
H.a(c,"$iw")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.A(t,b)
u.replaceChild(c,t[b])},
gv:function(a){var u=this.a.childNodes
return new W.d8(u,u.length,[H.aA(C.O,u,"a6",0)])},
a5:function(a,b){H.d(b,{func:1,ret:P.C,args:[W.w,W.w]})
throw H.e(P.F("Cannot sort Node list"))},
gj:function(a){return this.a.childNodes.length},
sj:function(a,b){throw H.e(P.F("Cannot set length on immutable List."))},
h:function(a,b){var u
H.x(b)
u=this.a.childNodes
if(b<0||b>=u.length)return H.A(u,b)
return u[b]},
$aJ:function(){return[W.w]},
$aP:function(){return[W.w]},
$af:function(){return[W.w]},
$am:function(){return[W.w]}}
W.w.prototype={
bh:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
he:function(a,b){var u,t
try{u=a.parentNode
J.mt(u,b,a)}catch(t){H.T(t)}return a},
eD:function(a){var u
for(;u=a.firstChild,u!=null;)a.removeChild(u)},
m:function(a){var u=a.nodeValue
return u==null?this.ei(a):u},
fd:function(a,b,c){return a.replaceChild(b,c)},
$iw:1}
W.cz.prototype={
gj:function(a){return a.length},
h:function(a,b){H.x(b)
if(b>>>0!==b||b>=a.length)throw H.e(P.aW(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(b)
H.a(c,"$iw")
throw H.e(P.F("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.e(P.F("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.A(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.w]},
$ias:1,
$aas:function(){return[W.w]},
$aP:function(){return[W.w]},
$if:1,
$af:function(){return[W.w]},
$im:1,
$am:function(){return[W.w]},
$aa6:function(){return[W.w]}}
W.c0.prototype={$ic0:1}
W.bz.prototype={$ibz:1}
W.c2.prototype={$ic2:1,
gj:function(a){return a.length}}
W.cE.prototype={$icE:1}
W.du.prototype={}
W.dv.prototype={
V:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=W.n0("<table>"+H.c(b)+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.af(t).N(0,new W.af(u))
return t}}
W.hM.prototype={
V:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.V(u.createElement("table"),b,c,d)
u.toString
u=new W.af(u)
s=u.gau(u)
s.toString
u=new W.af(s)
r=u.gau(u)
t.toString
r.toString
new W.af(t).N(0,new W.af(r))
return t}}
W.hN.prototype={
V:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bu(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.V(u.createElement("table"),b,c,d)
u.toString
u=new W.af(u)
s=u.gau(u)
t.toString
s.toString
new W.af(t).N(0,new W.af(s))
return t}}
W.cG.prototype={
L:function(a,b){var u
a.textContent=null
J.jY(a.content)
u=this.V(a,b,null,null)
a.content.appendChild(u)},
$icG:1}
W.bD.prototype={
cw:function(a,b,c){return a.setSelectionRange(b,c)},
$ibD:1}
W.aE.prototype={$iaE:1}
W.ac.prototype={$iac:1}
W.hQ.prototype={
gj:function(a){return a.length},
h:function(a,b){H.x(b)
if(b>>>0!==b||b>=a.length)throw H.e(P.aW(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(b)
H.a(c,"$iaE")
throw H.e(P.F("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.e(P.F("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.A(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.aE]},
$ias:1,
$aas:function(){return[W.aE]},
$aP:function(){return[W.aE]},
$if:1,
$af:function(){return[W.aE]},
$im:1,
$am:function(){return[W.aE]},
$aa6:function(){return[W.aE]}}
W.bc.prototype={$ibc:1}
W.bF.prototype={
gfw:function(a){var u=P.I,t=new P.a1($.N,[u]),s=H.d(new W.i3(new P.jl(t,[u])),{func:1,ret:-1,args:[P.I]})
this.eM(a)
this.fe(a,W.lN(s,u))
return t},
fe:function(a,b){return a.requestAnimationFrame(H.cc(H.d(b,{func:1,ret:-1,args:[P.I]}),1))},
eM:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibF:1,
$ils:1}
W.i3.prototype={
$1:function(a){var u=this.a
a=H.jL(H.jT(a),{futureOr:1,type:H.b(u,0)})
u=u.a
if(u.a!==0)H.X(P.cD("Future already completed"))
u.aH(a)},
$S:60}
W.be.prototype={$ibe:1}
W.cH.prototype={$icH:1}
W.ig.prototype={
gj:function(a){return a.length},
h:function(a,b){H.x(b)
if(b>>>0!==b||b>=a.length)throw H.e(P.aW(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(b)
H.a(c,"$iR")
throw H.e(P.F("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.e(P.F("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.A(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.R]},
$ias:1,
$aas:function(){return[W.R]},
$aP:function(){return[W.R]},
$if:1,
$af:function(){return[W.R]},
$im:1,
$am:function(){return[W.R]},
$aa6:function(){return[W.R]}}
W.dE.prototype={
m:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
P:function(a,b){var u
if(b==null)return!1
u=J.j(b)
return!!u.$ibb&&a.left===u.gbe(b)&&a.top===u.gbl(b)&&a.width===u.gbn(b)&&a.height===u.gbb(b)},
gq:function(a){return W.lA(C.b.gq(a.left),C.b.gq(a.top),C.b.gq(a.width),C.b.gq(a.height))},
gbb:function(a){return a.height},
gbn:function(a){return a.width}}
W.dM.prototype={
gj:function(a){return a.length},
h:function(a,b){H.x(b)
if(b>>>0!==b||b>=a.length)throw H.e(P.aW(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.x(b)
H.a(c,"$iw")
throw H.e(P.F("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.e(P.F("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.A(a,b)
return a[b]},
$iJ:1,
$aJ:function(){return[W.w]},
$ias:1,
$aas:function(){return[W.w]},
$aP:function(){return[W.w]},
$if:1,
$af:function(){return[W.w]},
$im:1,
$am:function(){return[W.w]},
$aa6:function(){return[W.w]}}
W.i9.prototype={
u:function(a,b){var u,t,s,r,q
H.d(b,{func:1,ret:-1,args:[P.h,P.h]})
for(u=this.gF(),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.O)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gF:function(){var u,t,s,r=this.a.attributes,q=H.t([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.A(r,t)
s=H.a(r[t],"$icH")
if(s.namespaceURI==null)C.a.k(q,s.name)}return q},
gM:function(a){return this.gF().length===0},
$aaX:function(){return[P.h,P.h]},
$ar:function(){return[P.h,P.h]}}
W.im.prototype={
p:function(a){return this.a.hasAttribute(a)},
h:function(a,b){return this.a.getAttribute(H.v(b))},
i:function(a,b,c){this.a.setAttribute(b,H.v(c))},
gj:function(a){return this.gF().length}}
W.io.prototype={
X:function(){var u,t,s,r,q=P.ct(P.h)
for(u=this.a.className.split(" "),t=u.length,s=0;s<t;++s){r=J.k_(u[s])
if(r.length!==0)q.k(0,r)}return q},
cr:function(a){this.a.className=H.i(a,"$iax",[P.h],"$aax").ce(0," ")},
gj:function(a){return this.a.classList.length},
k:function(a,b){var u,t
H.v(b)
u=this.a.classList
t=u.contains(b)
u.add(b)
return!t},
aa:function(a,b){var u=this.a.classList,t=u.contains(b)
u.remove(b)
return t}}
W.fk.prototype={}
W.cI.prototype={
W:function(a,b,c,d){var u=H.b(this,0)
H.d(a,{func:1,ret:-1,args:[u]})
H.d(c,{func:1,ret:-1})
return W.H(this.a,this.b,a,!1,u)},
bf:function(a,b,c){return this.W(a,null,b,c)}}
W.aM.prototype={}
W.bg.prototype={
W:function(a,b,c,d){var u,t,s,r=this,q=H.b(r,0)
H.d(a,{func:1,ret:-1,args:[q]})
H.d(c,{func:1,ret:-1})
u=r.$ti
t=new W.dS(new H.at([[P.a5,q],[P.W,q]]),u)
t.seJ(P.c3(t.gfH(t),!0,q))
for(q=r.a,q=new H.cu(q,q.gj(q),[H.b(q,0)]),s=r.c;q.l();)t.k(0,new W.cI(q.d,s,!1,u))
q=t.a
q.toString
return new P.b0(q,[H.b(q,0)]).W(a,b,c,d)},
t:function(a){return this.W(a,null,null,null)},
bf:function(a,b,c){return this.W(a,null,b,c)}}
W.it.prototype={
a0:function(){var u=this
if(u.b==null)return
u.dl()
u.b=null
u.sf7(null)
return},
cf:function(a){if(this.b==null)return;++this.a
this.dl()},
cm:function(){var u=this
if(u.b==null||u.a<=0)return;--u.a
u.dj()},
dj:function(){var u,t=this,s=t.d,r=s!=null
if(r&&t.a<=0){u=t.b
u.toString
H.d(s,{func:1,args:[W.k]})
if(r)J.mr(u,t.c,s,!1)}},
dl:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.d(t,{func:1,args:[W.k]})
if(s)J.ms(u,this.c,t,!1)}},
sf7:function(a){this.d=H.d(a,{func:1,args:[W.k]})}}
W.iu.prototype={
$1:function(a){return this.a.$1(H.a(a,"$ik"))},
$S:57}
W.dS.prototype={
k:function(a,b){var u,t,s,r=this
H.i(b,"$ia5",r.$ti,"$aa5")
u=r.b
if(u.p(b))return
t=r.a
s=H.b(b,0)
t=H.d(t.gfu(t),{func:1,ret:-1,args:[s]})
H.d(new W.jg(r,b),{func:1,ret:-1})
u.i(0,b,W.H(b.a,b.b,t,!1,s))},
c_:function(a){var u,t
for(u=this.b,t=u.gar(u),t=new H.aJ(J.B(t.a),t.b,[H.b(t,0),H.b(t,1)]);t.l();)t.a.a0()
u.b8(0)
this.a.c_(0)},
seJ:function(a){this.a=H.i(a,"$ial",this.$ti,"$aal")}}
W.jg.prototype={
$0:function(){var u=this.a,t=u.b.aa(0,H.i(this.b,"$ia5",[H.b(u,0)],"$aa5"))
if(t!=null)t.a0()
return},
$S:1}
W.bH.prototype={
eu:function(a){var u
if($.dG.a===0){for(u=0;u<262;++u)$.dG.i(0,C.K[u],W.oi())
for(u=0;u<12;++u)$.dG.i(0,C.k[u],W.oj())}},
ay:function(a){return $.mp().E(0,W.cm(a))},
ae:function(a,b,c){var u=$.dG.h(0,H.c(W.cm(a))+"::"+b)
if(u==null)u=$.dG.h(0,"*::"+b)
if(u==null)return!1
return H.jJ(u.$4(a,b,c,this))},
$iaj:1}
W.a6.prototype={
gv:function(a){return new W.d8(a,this.gj(a),[H.aA(this,a,"a6",0)])},
k:function(a,b){H.n(b,H.aA(this,a,"a6",0))
throw H.e(P.F("Cannot add to immutable List."))},
a5:function(a,b){var u=H.aA(this,a,"a6",0)
H.d(b,{func:1,ret:P.C,args:[u,u]})
throw H.e(P.F("Cannot sort immutable List."))}}
W.dl.prototype={
k:function(a,b){C.a.k(this.a,H.a(b,"$iaj"))},
ay:function(a){return C.a.dn(this.a,new W.hl(a))},
ae:function(a,b,c){return C.a.dn(this.a,new W.hk(a,b,c))},
$iaj:1}
W.hl.prototype={
$1:function(a){return H.a(a,"$iaj").ay(this.a)},
$S:20}
W.hk.prototype={
$1:function(a){return H.a(a,"$iaj").ae(this.a,this.b,this.c)},
$S:20}
W.dQ.prototype={
ev:function(a,b,c,d){var u,t,s
this.a.N(0,c)
u=b.as(0,new W.jc())
t=b.as(0,new W.jd())
this.b.N(0,u)
s=this.c
s.N(0,C.M)
s.N(0,t)},
ay:function(a){return this.a.E(0,W.cm(a))},
ae:function(a,b,c){var u=this,t=W.cm(a),s=u.c
if(s.E(0,H.c(t)+"::"+b))return u.d.fv(c)
else if(s.E(0,"*::"+b))return u.d.fv(c)
else{s=u.b
if(s.E(0,H.c(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.c(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
$iaj:1}
W.jc.prototype={
$1:function(a){return!C.a.E(C.k,H.v(a))},
$S:32}
W.jd.prototype={
$1:function(a){return C.a.E(C.k,H.v(a))},
$S:32}
W.jm.prototype={
ae:function(a,b,c){if(this.er(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.E(0,b)
return!1}}
W.jn.prototype={
$1:function(a){return"TEMPLATE::"+H.c(H.v(a))},
$S:21}
W.jh.prototype={
ay:function(a){var u=J.j(a)
if(!!u.$icB)return!1
u=!!u.$io
if(u&&W.cm(a)==="foreignObject")return!1
if(u)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.e.ef(b,"on"))return!1
return this.ay(a)},
$iaj:1}
W.d8.prototype={
l:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scV(J.Z(u.a,t))
u.c=t
return!0}u.scV(null)
u.c=s
return!1},
gn:function(){return this.d},
scV:function(a){this.d=H.n(a,H.b(this,0))},
$iai:1}
W.ih.prototype={
dC:function(a,b){return H.X(P.F("You can only attach EventListeners to your own window."))},
$ibs:1,
$ils:1}
W.aj.prototype={}
W.ja.prototype={$ip1:1}
W.dW.prototype={
cs:function(a){new W.jx(this).$2(a,null)},
aN:function(a,b){if(b==null)J.cX(a)
else b.removeChild(a)},
fk:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mx(a)
n=o.a.getAttribute("is")
H.a(a,"$il")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.K(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.T(r)}t="element unprintable"
try{t=J.L(a)}catch(r){H.T(r)}try{s=W.cm(a)
this.fj(H.a(a,"$il"),b,p,t,s,H.a(o,"$ir"),H.v(n))}catch(r){if(H.T(r) instanceof P.aR)throw r
else{this.aN(a,b)
window
q="Removing corrupted element "+H.c(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fj:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aN(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ay(a)){o.aN(a,b)
window
u="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.ae(a,"is",g)){o.aN(a,b)
window
u="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gF()
t=H.t(u.slice(0),[H.b(u,0)])
for(s=f.gF().length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.A(t,s)
r=t[s]
q=o.a
p=J.mL(r)
H.v(r)
if(!q.ae(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.c(e)+" "+r+'="'+H.c(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.j(a).$icG)o.cs(a.content)},
$ioQ:1}
W.jx.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fk(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aN(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.T(s)
r=H.a(u,"$iw")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.a(t,"$iw")}},
$S:61}
W.dD.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
P.eX.prototype={
dm:function(a){var u=$.m9().b
if(u.test(a))return a
throw H.e(P.k1(a,"value","Not a valid class token"))},
m:function(a){return this.X().ce(0," ")},
gv:function(a){var u=this.X()
return P.cK(u,u.r,H.b(u,0))},
G:function(a,b,c){var u,t
H.d(b,{func:1,ret:c,args:[P.h]})
u=this.X()
t=H.b(u,0)
return new H.bX(u,H.d(b,{func:1,ret:c,args:[t]}),[t,c])},
S:function(a,b){return this.G(a,b,null)},
gj:function(a){return this.X().a},
k:function(a,b){H.v(b)
this.dm(b)
return H.jJ(this.h6(0,new P.eY(b)))},
aa:function(a,b){var u,t
this.dm(b)
u=this.X()
t=u.aa(0,b)
this.cr(u)
return t},
H:function(a,b){return this.X().H(0,!0)},
O:function(a){return this.H(a,!0)},
R:function(a,b){var u=this.X()
return H.dr(u,b,H.b(u,0))},
A:function(a,b){return this.X().A(0,b)},
h6:function(a,b){var u,t
H.d(b,{func:1,args:[[P.ax,P.h]]})
u=this.X()
t=b.$1(u)
this.cr(u)
return t},
$aJ:function(){return[P.h]},
$abC:function(){return[P.h]},
$af:function(){return[P.h]},
$aax:function(){return[P.h]}}
P.eY.prototype={
$1:function(a){return H.i(a,"$iax",[P.h],"$aax").k(0,this.a)},
$S:34}
P.fG.prototype={
gaw:function(){var u=this.b,t=H.D(u,"P",0),s=W.l
return new H.c_(new H.bd(u,H.d(new P.fH(),{func:1,ret:P.G,args:[t]}),[t]),H.d(new P.fI(),{func:1,ret:s,args:[t]}),[t,s])},
i:function(a,b,c){var u
H.x(b)
H.a(c,"$il")
u=this.gaw()
J.mI(u.b.$1(J.aG(u.a,b)),c)},
sj:function(a,b){var u=J.a4(this.gaw().a)
if(b>=u)return
else if(b<0)throw H.e(P.bN("Invalid list length"))
this.hd(0,b,u)},
k:function(a,b){this.b.a.appendChild(H.a(b,"$il"))},
a5:function(a,b){H.d(b,{func:1,ret:P.C,args:[W.l,W.l]})
throw H.e(P.F("Cannot sort filtered list"))},
hd:function(a,b,c){var u=this.gaw()
u=H.dr(u,b,H.D(u,"f",0))
C.a.u(P.by(H.nw(u,c-b,H.D(u,"f",0)),!0,null),new P.fJ())},
b8:function(a){J.jY(this.b.a)},
gj:function(a){return J.a4(this.gaw().a)},
h:function(a,b){var u
H.x(b)
u=this.gaw()
return u.b.$1(J.aG(u.a,b))},
gv:function(a){var u=P.by(this.gaw(),!1,W.l)
return new J.bl(u,u.length,[H.b(u,0)])},
$aJ:function(){return[W.l]},
$aP:function(){return[W.l]},
$af:function(){return[W.l]},
$am:function(){return[W.l]}}
P.fH.prototype={
$1:function(a){return!!J.j(H.a(a,"$iw")).$il},
$S:24}
P.fI.prototype={
$1:function(a){return H.aQ(H.a(a,"$iw"),"$il")},
$S:50}
P.fJ.prototype={
$1:function(a){return J.cX(a)},
$S:5}
P.cr.prototype={$icr:1}
P.au.prototype={
h:function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.e(P.bN("property is not a String or num"))
return P.jA(this.a[b])},
i:function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.e(P.bN("property is not a String or num"))
this.a[b]=P.cS(c)},
gq:function(a){return 0},
P:function(a,b){if(b==null)return!1
return b instanceof P.au&&this.a===b.a},
m:function(a){var u,t
try{u=String(this.a)
return u}catch(t){H.T(t)
u=this.en(0)
return u}},
bY:function(a,b){var u,t=this.a
if(b==null)u=null
else{u=H.b(b,0)
u=P.by(new H.av(b,H.d(P.lY(),{func:1,ret:null,args:[u]}),[u,null]),!0,null)}return P.jA(t[a].apply(t,u))}}
P.fY.prototype={
$1:function(a){var u,t,s,r,q=this.a
if(q.p(a))return q.h(0,a)
u=J.j(a)
if(!!u.$ir){t={}
q.i(0,a,t)
for(q=J.B(a.gF());q.l();){s=q.gn()
t[s]=this.$1(a.h(0,s))}return t}else if(!!u.$if){r=[]
q.i(0,a,r)
C.a.N(r,u.G(a,this,null))
return r}else return P.cS(a)},
$S:5}
P.ae.prototype={
dr:function(a){var u=P.cS(null),t=H.b(a,0)
t=P.by(new H.av(a,H.d(P.lY(),{func:1,ret:null,args:[t]}),[t,null]),!0,null)
return P.jA(this.a.apply(u,t))}}
P.cq.prototype={
cJ:function(a){var u=this,t=a<0||a>=u.gj(u)
if(t)throw H.e(P.aK(a,0,u.gj(u),null,null))},
h:function(a,b){if(typeof b==="number"&&b===C.c.cq(b))this.cJ(H.x(b))
return H.n(this.el(0,b),H.b(this,0))},
i:function(a,b,c){H.n(c,H.b(this,0))
if(typeof b==="number"&&b===C.c.cq(b))this.cJ(H.x(b))
this.cA(0,b,c)},
gj:function(a){var u=this.a.length
if(typeof u==="number"&&u>>>0===u)return u
throw H.e(P.cD("Bad JsArray length"))},
sj:function(a,b){this.cA(0,"length",b)},
k:function(a,b){this.bY("push",[H.n(b,H.b(this,0))])},
a5:function(a,b){var u=H.b(this,0)
H.d(b,{func:1,ret:P.C,args:[u,u]})
this.bY("sort",[b])},
$iJ:1,
$if:1,
$im:1}
P.jB.prototype={
$1:function(a){var u
H.a(a,"$iaH")
u=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.nW,a,!1)
P.kp(u,$.jX(),a)
return u},
$S:5}
P.jC.prototype={
$1:function(a){return new this.a(a)},
$S:5}
P.jG.prototype={
$1:function(a){return new P.ae(a)},
$S:49}
P.jH.prototype={
$1:function(a){return new P.cq(a,[null])},
$S:48}
P.jI.prototype={
$1:function(a){return new P.au(a)},
$S:43}
P.dJ.prototype={}
P.p.prototype={
m:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
P:function(a,b){if(b==null)return!1
return!!J.j(b).$ip&&this.a==b.a&&this.b==b.b},
gq:function(a){var u=J.b6(this.a),t=J.b6(this.b)
return P.lz(P.cJ(P.cJ(0,u),t))},
I:function(a,b){var u,t,s,r,q=this,p=q.$ti
H.i(b,"$ip",p,"$ap")
u=q.a
t=b.a
if(typeof u!=="number")return u.I()
if(typeof t!=="number")return H.Y(t)
s=H.b(q,0)
t=H.n(u-t,s)
u=q.b
r=b.b
if(typeof u!=="number")return u.I()
if(typeof r!=="number")return H.Y(r)
return new P.p(t,H.n(u-r,s),p)},
at:function(a,b){var u,t,s=this,r=s.a
if(typeof r!=="number")return r.at()
u=H.b(s,0)
r=H.n(r*b,u)
t=s.b
if(typeof t!=="number")return t.at()
return new P.p(r,H.n(t*b,u),s.$ti)}}
P.j5.prototype={
gdZ:function(a){return H.n(this.a+this.c,H.b(this,0))},
gds:function(a){return H.n(this.b+this.d,H.b(this,0))},
m:function(a){var u=this
return"Rectangle ("+u.a+", "+u.b+") "+u.c+" x "+u.d},
P:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.j(b)
if(!!u.$ibb){t=q.a
if(t===u.gbe(b)){s=q.b
if(s===u.gbl(b)){r=H.b(q,0)
u=H.n(t+q.c,r)===u.gdZ(b)&&H.n(s+q.d,r)===u.gds(b)}else u=!1}else u=!1}else u=!1
return u},
gq:function(a){var u=this,t=u.a,s=C.c.gq(t),r=u.b,q=C.c.gq(r),p=H.b(u,0)
t=C.c.gq(H.n(t+u.c,p))
p=C.c.gq(H.n(r+u.d,p))
return P.lz(P.cJ(P.cJ(P.cJ(P.cJ(0,s),q),t),p))}}
P.bb.prototype={
gbe:function(a){return this.a},
gbl:function(a){return this.b},
gbn:function(a){return this.c},
gbb:function(a){return this.d}}
P.cB.prototype={$icB:1}
P.ea.prototype={
X:function(){var u,t,s,r,q=this.a.getAttribute("class"),p=P.ct(P.h)
if(q==null)return p
for(u=q.split(" "),t=u.length,s=0;s<t;++s){r=J.k_(u[s])
if(r.length!==0)p.k(0,r)}return p},
cr:function(a){this.a.setAttribute("class",a.ce(0," "))}}
P.o.prototype={
gdv:function(a){return new P.ea(a)},
gdu:function(a){return new P.fG(a,new W.af(a))},
V:function(a,b,c,d){var u,t,s,r,q,p=H.t([],[W.aj])
C.a.k(p,W.ly(null))
C.a.k(p,W.lB())
C.a.k(p,new W.jh())
c=new W.dW(new W.dl(p))
u='<svg version="1.1">'+H.c(b)+"</svg>"
p=document
t=p.body
s=(t&&C.n).fL(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.af(s)
q=p.gau(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
c8:function(a,b,c,d,e){throw H.e(P.F("Cannot invoke insertAdjacentHtml on SVG."))},
gdM:function(a){return new W.aM(a,"click",!1,[W.u])},
gdP:function(a){return new W.aM(a,"mousedown",!1,[W.u])},
gdQ:function(a){return new W.aM(a,"touchstart",!1,[W.ac])},
$io:1}
Z.f3.prototype={
gdO:function(a){var u,t=this
if(t.z==null)t.sd8(P.c3(new Z.f8(t),!0,Z.ah))
u=t.z
u.toString
return new P.b0(u,[H.b(u,0)])},
gdN:function(a){var u,t=this
if(t.ch==null)t.sd4(P.c3(new Z.f7(t),!0,Z.ah))
u=t.ch
u.toString
return new P.b0(u,[H.b(u,0)])},
ak:function(a,b,c){var u,t,s,r=this,q=$.U
if(q.f){u=r.b
if(u!=null){t=q.c
q=q.e
s=[P.I]
H.i(t,"$ip",s,"$ap")
H.i(q,"$ip",s,"$ap")
u.e.classList.remove("nt-chain-starter")
u.e.classList.remove("nt-chain-fragment")
q=u.e.style
q.visibility=""
q=u.a.style
t=u.d
C.h.aO(q,(q&&C.h).av(q,"pointer-events"),t,"")
u.c=u.b=u.a=u.d=null}if(!c&&b!=null)Z.nO(r,b)
q=r.ch
if(q!=null)q.k(0,Z.l2(a,$.U,c))
if(a!=null)a.preventDefault()
if(!!J.j(a).$iu)r.fq($.U.b)
J.bk($.U.b).aa(0,r.r)
q=document.body
q.classList.remove("dnd-drag-occurring")}r.ff()},
eU:function(a,b){return this.ak(a,b,!1)},
fq:function(a){var u=J.mB(a),t=H.b(u,0)
P.n2(new Z.f5(W.H(u.a,u.b,H.d(new Z.f6(),{func:1,ret:-1,args:[t]}),!1,t)),P.z)},
ff:function(){C.a.u(this.cy,new Z.f4())
Z.lt()
$.U=null},
eE:function(){var u,t
window.getSelection().removeAllRanges()
try{u=document.activeElement
if(!!J.j(u).$ibD)J.kI(u,0,0)
else if(!!J.j(u).$iaI)J.kI(u,0,0)}catch(t){H.T(t)}},
sd8:function(a){this.z=H.i(a,"$ial",[Z.ah],"$aal")},
sd4:function(a){this.ch=H.i(a,"$ial",[Z.ah],"$aal")},
sbE:function(a){this.cx=H.i(a,"$im",[W.l],"$am")}}
Z.f8.prototype={
$0:function(){this.a.sd8(null)
return},
$S:0}
Z.f7.prototype={
$0:function(){this.a.sd4(null)
return},
$S:0}
Z.f6.prototype={
$1:function(a){H.a(a,"$iu")
a.stopPropagation()
a.preventDefault()},
$S:2}
Z.f5.prototype={
$0:function(){this.a.a0()},
$S:0}
Z.f4.prototype={
$1:function(a){return H.a(a,"$ibG").ck(0)},
$S:41}
Z.ah.prototype={}
Z.il.prototype={
cQ:function(a){H.i(a,"$ip",[P.I],"$ap")
return a},
sbP:function(a,b){this.e=H.i(b,"$ip",[P.I],"$ap")}}
Z.eh.prototype={
ee:function(a){Z.mN(new Z.ei(this,H.i(a,"$ip",[P.I],"$ap")))},
cu:function(a){var u,t,s,r=this
H.i(a,"$ip",[P.I],"$ap")
u=r.a.style
t=a.a
if(r.c==null)r.dt()
s=r.c
if(typeof t!=="number")return t.I()
if(typeof s!=="number")return H.Y(s)
s=H.c(t-s)+"px"
u.left=s
u=r.a.style
t=a.b
if(r.b==null)r.dt()
s=r.b
if(typeof t!=="number")return t.I()
if(typeof s!=="number")return H.Y(s)
s=H.c(t-s)+"px"
u.top=s},
dt:function(){var u,t=this.a
t.toString
u=window.getComputedStyle(t,"")
t=P.kA(C.e.dX(u.marginLeft,"px",""))
this.c=t==null?0:t
t=P.kA(C.e.dX(u.marginTop,"px",""))
this.b=t==null?0:t}}
Z.ei.prototype={
$0:function(){var u,t=this.a.a
if(t!=null){t=t.style
u=this.b
u="translate3d("+H.c(u.a)+"px, "+H.c(u.b)+"px, 0)"
C.h.aO(t,(t&&C.h).av(t,"transform"),u,"")}},
$S:0}
Z.e7.prototype={
$1:function(a){H.jT(a)
if($.e6){$.kL.$0()
$.e6=!1}return},
$S:39}
Z.bG.prototype={
bw:function(a){this.cc()
C.a.u(this.c.cx,new Z.ip())},
fX:function(){var u=this.b,t=W.ba
C.a.k(u,W.H(window,"keydown",H.d(new Z.iq(this),{func:1,ret:-1,args:[t]}),!1,t))
t=W.k
C.a.k(u,W.H(window,"blur",H.d(new Z.ir(this),{func:1,ret:-1,args:[t]}),!1,t))},
c7:function(a,b){var u,t=this
H.i(b,"$ip",[P.I],"$ap")
u=t.c
u=new Z.il(u.a,H.a(W.S(a.currentTarget),"$il"),b,u.b,!1,!1)
u.sbP(0,b)
$.U=u
t.cb()
t.ca()
t.c9()
t.fX()},
c6:function(a,b,c){var u,t,s,r,q,p,o,n,m="pointer-events",l=[P.I]
H.i(b,"$ip",l,"$ap")
H.i(c,"$ip",l,"$ap")
u=$.U
u.sbP(0,u.cQ(b))
u=$.U
if(!u.f){t=u.c
u=H.i(u.e,"$ip",[H.b(t,0)],"$ap")
s=t.a
r=u.a
if(typeof s!=="number")return s.I()
if(typeof r!=="number")return H.Y(r)
q=s-r
t=t.b
u=u.b
if(typeof t!=="number")return t.I()
if(typeof u!=="number")return H.Y(u)
p=t-u
if(Math.sqrt(q*q+p*p)>=4){u=this.c
t=$.U
t.f=!0
s=u.b
if(s!=null){r=t.b
H.i(t.e,"$ip",l,"$ap")
s.a=s.e
s.cu(new P.p(0,0,l))
o=U.cl(s.a)
s.cu(U.cl(r).I(0,o))
r=s.a.style
s.d=(r&&C.h).eb(r,m)
s=s.a.style
C.h.aO(s,(s&&C.h).av(s,m),"none","")}l=u.z
if(l!=null)l.k(0,Z.l2(a,$.U,!1))
J.bk($.U.b).k(0,u.r)
document.body.classList.add("dnd-drag-occurring")
u.eE()}}else{n=H.a(this.eP(c),"$il")
u=this.c
t=u.b
if(t!=null){s=$.U
r=s.c
s=s.e
H.i(r,"$ip",l,"$ap")
t.ee(H.i(s,"$ip",l,"$ap").I(0,r))
t=t.a.style
t.visibility="visible"}Z.nP(u,n)}},
c5:function(a,b,c,d){var u=[P.I]
H.i(c,"$ip",u,"$ap")
H.i(d,"$ip",u,"$ap")
u=$.U
u.sbP(0,u.cQ(c))
this.c.eU(a,this.d0(d,b))},
ck:function(a){var u=this.b
C.a.u(u,new Z.is())
C.a.sj(u,0)},
d1:function(a){var u,t
H.i(a,"$ip",[P.I],"$ap")
u=document
t=u.elementFromPoint(J.e4(a.a),J.e4(a.b))
return t==null?u.body:t},
d0:function(a,b){var u,t,s=this
H.i(a,"$ip",[P.I],"$ap")
if(b==null)b=s.d1(a)
u=s.c.b
if(u!=null){t=u.a
t=t!=null&&H.K(t.contains(H.a(b,"$iw")))}else t=!1
if(t){t=u.a.style
t.visibility="hidden"
b=s.d1(a)
u=u.a.style
u.visibility="visible"}return s.dd(a,b)},
eP:function(a){return this.d0(a,null)},
dd:function(a,b){H.i(a,"$ip",[P.I],"$ap")
return!!J.j(b).$il&&(b.shadowRoot||b.webkitShadowRoot)!=null&&H.K(b.hasAttribute("dnd-retarget"))?this.dd(a,(b.shadowRoot||b.webkitShadowRoot).elementFromPoint(J.e4(a.a),J.e4(a.b))):b},
bJ:function(a){var u=J.j(a)
u=!!u.$il&&u.h5(a,this.c.f)
if(u)return!1
return!0}}
Z.ip.prototype={
$1:function(a){var u=H.a(a,"$il").style
C.h.aO(u,(u&&C.h).av(u,"touch-action"),"none","")
return"none"},
$S:37}
Z.iq.prototype={
$1:function(a){H.a(a,"$iba")
if(a.keyCode===27)this.a.c.ak(a,null,!0)},
$S:36}
Z.ir.prototype={
$1:function(a){this.a.c.ak(a,null,!0)},
$S:3}
Z.is.prototype={
$1:function(a){return H.a(a,"$iW").a0()},
$S:19}
Z.jq.prototype={
cc:function(){C.a.u(this.c.cx,new Z.jv(this))},
cb:function(){var u=W.ac
C.a.k(this.b,W.H(document,"touchmove",H.d(new Z.jt(this),{func:1,ret:-1,args:[u]}),!1,u))},
ca:function(){var u=W.ac
C.a.k(this.b,W.H(document,"touchend",H.d(new Z.js(this),{func:1,ret:-1,args:[u]}),!1,u))},
c9:function(){var u=W.ac
C.a.k(this.b,W.H(document,"touchcancel",H.d(new Z.jr(this),{func:1,ret:-1,args:[u]}),!1,u))},
h1:function(a){H.i(a,"$ip",[P.I],"$ap").I(0,$.U.c)
return!1}}
Z.jv.prototype={
$1:function(a){var u=this.a,t=J.mD(H.a(a,"$il")),s=H.b(t,0)
C.a.k(u.a,W.H(t.a,t.b,H.d(new Z.ju(u),{func:1,ret:-1,args:[s]}),!1,s))},
$S:13}
Z.ju.prototype={
$1:function(a){var u,t
H.a(a,"$iac")
if($.U!=null)return
u=a.touches
if(u.length>1)return
t=this.a
if(!t.bJ(W.S(u[0].target)))return
u=a.touches
if(0>=u.length)return H.A(u,0)
u=u[0]
t.c7(a,new P.p(C.b.w(u.pageX),C.b.w(u.pageY),[P.I]))},
$S:9}
Z.jt.prototype={
$1:function(a){var u,t,s=this
H.a(a,"$iac")
if(a.touches.length>1){s.a.c.ak(a,null,!0)
return}if(!$.U.f){u=a.changedTouches
if(0>=u.length)return H.A(u,0)
u=u[0]
u=s.a.h1(new P.p(C.b.w(u.pageX),C.b.w(u.pageY),[P.I]))}else u=!1
if(u){s.a.c.ak(a,null,!0)
return}u=a.changedTouches
if(0>=u.length)return H.A(u,0)
u=u[0]
t=[P.I]
s.a.c6(a,new P.p(C.b.w(u.pageX),C.b.w(u.pageY),t),new P.p(C.b.w(u.clientX),C.b.w(u.clientY),t))
a.preventDefault()},
$S:9}
Z.js.prototype={
$1:function(a){var u,t
H.a(a,"$iac")
u=a.changedTouches
if(0>=u.length)return H.A(u,0)
u=u[0]
t=[P.I]
this.a.c5(a,null,new P.p(C.b.w(u.pageX),C.b.w(u.pageY),t),new P.p(C.b.w(u.clientX),C.b.w(u.clientY),t))},
$S:9}
Z.jr.prototype={
$1:function(a){this.a.c.ak(H.a(a,"$iac"),null,!0)},
$S:9}
Z.iU.prototype={
cc:function(){C.a.u(this.c.cx,new Z.iY(this))},
cb:function(){var u=W.u
C.a.k(this.b,W.H(document,"mousemove",H.d(new Z.iW(this),{func:1,ret:-1,args:[u]}),!1,u))},
ca:function(){var u=W.u
C.a.k(this.b,W.H(document,"mouseup",H.d(new Z.iV(this),{func:1,ret:-1,args:[u]}),!1,u))},
c9:function(){}}
Z.iY.prototype={
$1:function(a){var u=this.a,t=J.mC(H.a(a,"$il")),s=H.b(t,0)
C.a.k(u.a,W.H(t.a,t.b,H.d(new Z.iX(u),{func:1,ret:-1,args:[s]}),!1,s))},
$S:13}
Z.iX.prototype={
$1:function(a){var u,t
H.a(a,"$iu")
if($.U!=null)return
if(a.button!==0)return
u=this.a
if(!u.bJ(W.S(a.target)))return
t=J.j(H.a(W.S(a.target),"$il"))
if(!(!!t.$ic2||!!t.$iaI||!!t.$ibD||!!t.$ibS||!!t.$ic0))a.preventDefault()
u.c7(a,new P.p(a.pageX,a.pageY,[P.I]))},
$S:2}
Z.iW.prototype={
$1:function(a){var u
H.a(a,"$iu")
u=[P.I]
this.a.c6(a,new P.p(a.pageX,a.pageY,u),new P.p(a.clientX,a.clientY,u))},
$S:2}
Z.iV.prototype={
$1:function(a){var u
H.a(a,"$iu")
u=[P.I]
this.a.c5(a,W.S(a.target),new P.p(a.pageX,a.pageY,u),new P.p(a.clientX,a.clientY,u))},
$S:2}
Z.j_.prototype={
cc:function(){C.a.u(this.c.cx,new Z.j4(this))},
cb:function(){var u=W.k
C.a.k(this.b,W.H(document,"pointermove",H.d(new Z.j2(this),{func:1,ret:-1,args:[u]}),!1,u))},
ca:function(){var u=W.k
C.a.k(this.b,W.H(document,"pointerup",H.d(new Z.j1(this),{func:1,ret:-1,args:[u]}),!1,u))},
c9:function(){var u=W.k
C.a.k(this.b,W.H(document,"pointercancel",H.d(new Z.j0(this),{func:1,ret:-1,args:[u]}),!1,u))}}
Z.j4.prototype={
$1:function(a){var u,t,s
H.a(a,"$il")
u=this.a
a.toString
t=new W.fh(a).h(0,"pointerdown")
s=H.b(t,0)
C.a.k(u.a,W.H(t.a,t.b,H.d(new Z.j3(u),{func:1,ret:-1,args:[s]}),!1,s))},
$S:13}
Z.j3.prototype={
$1:function(a){var u,t
H.aQ(a,"$ibz")
if($.U!=null)return
if(a.button!==0)return
u=this.a
if(!u.bJ(W.S(a.target)))return
t=J.j(H.a(W.S(a.target),"$il"))
if(!(!!t.$ic2||!!t.$iaI||!!t.$ibD||!!t.$ibS||!!t.$ic0))a.preventDefault()
u.c7(a,new P.p(a.pageX,a.pageY,[P.I]))},
$S:3}
Z.j2.prototype={
$1:function(a){var u
H.aQ(a,"$ibz")
u=[P.I]
this.a.c6(a,new P.p(a.pageX,a.pageY,u),new P.p(a.clientX,a.clientY,u))},
$S:3}
Z.j1.prototype={
$1:function(a){var u
H.aQ(a,"$ibz")
u=[P.I]
this.a.c5(a,null,new P.p(a.pageX,a.pageY,u),new P.p(a.clientX,a.clientY,u))},
$S:3}
Z.j0.prototype={
$1:function(a){this.a.c.ak(a,null,!0)},
$S:3}
Z.d5.prototype={
gao:function(a){var u,t=this
if(t.d==null)t.sd5(P.c3(new Z.fa(t),!0,Z.E))
u=t.d
u.toString
return new P.b0(u,[H.b(u,0)])},
gh7:function(a){var u,t=this
if(t.e==null)t.sd7(P.c3(new Z.fc(t),!0,Z.E))
u=t.e
u.toString
return new P.b0(u,[H.b(u,0)])},
gap:function(a){var u,t=this
if(t.f==null)t.sd6(P.c3(new Z.fb(t),!0,Z.E))
u=t.f
u.toString
return new P.b0(u,[H.b(u,0)])},
gaq:function(a){var u,t=this
if(t.r==null)t.sd9(P.c3(new Z.fd(t),!0,Z.E))
u=t.r
u.toString
return new P.b0(u,[H.b(u,0)])},
f6:function(a){var u,t,s,r=this
H.a(a,"$il")
u=r.y
t=$.mm()
s=H.b(t,0)
C.a.k(u,W.H(a,t.a,H.d(r.geV(),{func:1,ret:-1,args:[s]}),!1,s))
s=$.mo()
t=H.b(s,0)
C.a.k(u,W.H(a,s.a,H.d(r.geZ(),{func:1,ret:-1,args:[t]}),!1,t))
t=$.mn()
s=H.b(t,0)
C.a.k(u,W.H(a,t.a,H.d(r.geX(),{func:1,ret:-1,args:[s]}),!1,s))
s=$.ml()
t=H.b(s,0)
C.a.k(u,W.H(a,s.a,H.d(r.gf0(),{func:1,ret:-1,args:[t]}),!1,t))},
eW:function(a){var u
H.a(a,"$iu")
u=a.relatedTarget
if(W.S(u)!=null&&H.K(H.aQ(W.S(a.currentTarget),"$il").contains(H.a(W.S(u),"$iw"))))return
u=$.U
u=this.a.b6(u.b,u.a,H.a(W.S(a.currentTarget),"$il"))
if(u){u=this.d
if(u!=null){H.a(W.S(a.currentTarget),"$il")
u.k(0,new Z.E($.U.e))}J.bk(H.aQ(W.S(a.currentTarget),"$il")).k(0,"dnd-over")}else J.bk(H.aQ(W.S(a.currentTarget),"$il")).k(0,"dnd-invalid")},
f_:function(a){var u
H.a(a,"$iu")
u=$.U
u=this.a.b6(u.b,u.a,H.a(W.S(a.currentTarget),"$il"))
if(u){u=this.e
if(u!=null){H.a(W.S(a.currentTarget),"$il")
u.k(0,new Z.E($.U.e))}}},
eY:function(a){var u
H.a(a,"$iu")
u=a.relatedTarget
if(W.S(u)!=null&&H.K(H.aQ(W.S(a.currentTarget),"$il").contains(H.a(W.S(u),"$iw"))))return
u=$.U
u=this.a.b6(u.b,u.a,H.a(W.S(a.currentTarget),"$il"))
if(u){u=this.f
if(u!=null){H.a(W.S(a.currentTarget),"$il")
u.k(0,new Z.E($.U.e))}J.bk(H.aQ(W.S(a.currentTarget),"$il")).aa(0,"dnd-over")}else J.bk(H.aQ(W.S(a.currentTarget),"$il")).aa(0,"dnd-invalid")},
f1:function(a){var u
H.a(a,"$iu")
u=$.U
u=this.a.b6(u.b,u.a,H.a(W.S(a.currentTarget),"$il"))
if(u){u=this.r
if(u!=null){H.a(W.S(a.currentTarget),"$il")
u.k(0,new Z.E($.U.e))}}},
fN:function(){var u=this.y
C.a.u(u,new Z.f9())
C.a.sj(u,0)},
sd5:function(a){this.d=H.i(a,"$ial",[Z.E],"$aal")},
sd7:function(a){this.e=H.i(a,"$ial",[Z.E],"$aal")},
sd6:function(a){this.f=H.i(a,"$ial",[Z.E],"$aal")},
sd9:function(a){this.r=H.i(a,"$ial",[Z.E],"$aal")},
sbE:function(a){this.x=H.i(a,"$im",[W.l],"$am")}}
Z.fa.prototype={
$0:function(){this.a.sd5(null)
return},
$S:0}
Z.fc.prototype={
$0:function(){this.a.sd7(null)
return},
$S:0}
Z.fb.prototype={
$0:function(){this.a.sd6(null)
return},
$S:0}
Z.fd.prototype={
$0:function(){this.a.sd9(null)
return},
$S:0}
Z.f9.prototype={
$1:function(a){return H.a(a,"$iW").a0()},
$S:19}
Z.E.prototype={}
Z.e5.prototype={}
U.bO.prototype={
gZ:function(){var u=this.b
return H.c(u.fy.b)+"-"+H.c(u.a)+"-"+H.c(this.a)},
gC:function(a){var u=this.c
return u==null?"":J.L(u)},
sC:function(a,b){this.c=b==null?"":J.L(b)},
gaT:function(){return H.c(J.L(this.c))+H.c(this.r)},
aD:function(a,b){var u,t,s,r=this
if(H.K(b.p("id"))){u=H.x(b.h(0,"id"))
r.a=u
t=r.b
s=t.ch
if(typeof u!=="number")return u.ea()
if(u>=s)t.ch=u+1}else u=r.a=r.b.ch++
b.i(0,"id",u)
u=b.h(0,"type")
r.e=u==null?"num":J.L(u)
u=b.h(0,"name")
r.f=u==null?"":J.L(u)
u=b.h(0,"unit")
r.r=u==null?"":J.L(u)
u=b.h(0,"default")
r.d=u
r.sC(0,u)},
b9:function(a,b){return U.k2(b,this.B())},
B:function(){var u=this
return P.kj(["id",u.a,"type",u.e,"name",u.f,"unit",u.r,"value",u.gC(u),"default",u.d])},
dD:function(){var u,t,s=this,r=document.createElement("div")
r.innerText=s.gaT()
r.classList.add("nt-attribute-value")
u=s.b
t=u.aC()+"-attribute"
r.classList.add(t)
u=u.db
if(u!=null){t=r.style
t.color=u}u=W.u
W.H(r,"click",H.d(new U.ef(s,new U.eg(s,r)),{func:1,ret:-1,args:[u]}),!1,u)
return r},
b5:function(a,b,c){var u,t,s,r,q,p,o,n=this,m="The type argument '",l="' is not a subtype of the type variable bound '",k="' of type variable 'T' in 'querySelectorAll'.",j=n.b.fy,i=j.f
i.classList.add("show")
u=j.r
j=u.style
t=""+b+"px"
j.top=t
u.classList.remove("small");(u&&C.d).L(u,"")
C.d.af(u,'      <div class="nt-param-table">\n        <div class="nt-param-row">'+n.cI()+'</div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
j="#nt-param-label-"+n.gZ()
t=document
s=H.a(t.querySelector(j),"$iq")
r=H.a(t.querySelector("#nt-param-"+n.gZ()),"$iaI")
j=W.l
H.aP(j,j,m,l,k)
q=[j]
p=[j]
o=[W.u]
new W.bg(H.i(new W.az(t.querySelectorAll(".nt-param-confirm"),q),"$iaB",p,"$aaB"),!1,"click",o).t(new U.eb(n,r,i,c))
H.aP(j,j,m,l,k)
new W.bg(H.i(new W.az(t.querySelectorAll(".nt-param-cancel"),q),"$iaB",p,"$aaB"),!1,"click",o).t(new U.ec(i))
if(r!=null){r.focus()
if(s!=null){j=W.k
t={func:1,ret:-1,args:[j]}
W.H(r,"change",H.d(new U.ed(s,r),t),!1,j)
W.H(r,"input",H.d(new U.ee(s,r),t),!1,j)}}},
cI:function(){var u=this,t=new P.co().dA(H.v(u.gC(u)))
return'      <input class="nt-param-input" id="nt-param-'+u.gZ()+'" type="text" value="'+t+'">\n      <span class="nt-param-unit">'+H.c(u.r)+"</span>\n    "}}
U.eg.prototype={
$0:function(){this.b.innerText=this.a.gaT()},
$S:0}
U.ef.prototype={
$1:function(a){var u,t,s,r,q,p,o,n
H.a(a,"$iu")
u=H.aQ(W.S(a.target),"$iaT")
t=u.offsetParent
s=C.b.w(t.offsetLeft)
r=C.b.w(u.offsetLeft)
q=J.a3(a)
p=q.gaR(a).a
if(typeof p!=="number")return H.Y(p)
o=C.b.w(t.offsetTop)
n=C.b.w(u.offsetTop)
q=q.gaR(a).b
if(typeof q!=="number")return H.Y(q)
this.a.b5(C.b.c4(s+r+p),C.b.c4(o+n+q),this.b)},
$S:2}
U.eb.prototype={
$1:function(a){var u,t,s=this
H.a(a,"$iu")
u=s.b
if(u!=null)s.a.sC(0,u.value)
s.c.classList.remove("show")
s.d.$0()
u=s.a
t=u.b
t.fy.T(new U.bP(t.a,t.b,u.a,u.gC(u)))},
$S:2}
U.ec.prototype={
$1:function(a){var u,t
H.a(a,"$iu")
u=this.a.classList
t=u.contains("show")
u.remove("show")
return t},
$S:10}
U.ed.prototype={
$1:function(a){J.jZ(this.a,this.b.value)},
$S:3}
U.ee.prototype={
$1:function(a){J.jZ(this.a,this.b.value)},
$S:3}
U.dn.prototype={
cB:function(a,b){this.x=U.m7(b.h(0,"random"),!1)
this.y=U.b5(b.h(0,"step"),this.y)},
B:function(){var u=this.bt()
u.i(0,"random",this.x)
u.i(0,"step",this.y)
return u},
gC:function(a){return U.b5(this.c,0)},
sC:function(a,b){this.c=U.b5(b,0)},
gaT:function(){var u=J.mM(this.gC(this),1)
if(C.e.fS(u,".0"))u=C.e.ab(u,0,u.length-2)
return u+H.c(this.r)},
cI:function(){var u=this
return'      <div class="nt-param-name">'+H.c(u.f)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+u.gZ()+'" type="number" step="'+H.c(u.y)+'" value="'+H.c(u.gC(u))+'">\n        <span class="nt-param-unit">'+H.c(u.r)+"</span>\n      </div>\n    "}}
U.fO.prototype={
gC:function(a){return U.kB(this.c,0)},
sC:function(a,b){this.c=U.kB(b,0)}}
U.hv.prototype={
B:function(){var u=this.em()
u.i(0,"min",this.dy)
u.i(0,"max",this.fr)
return u},
b5:function(a,b,c){var u,t,s,r,q,p=this,o=p.b.fy,n=o.f
n.classList.add("show")
u=o.r
o=u.style
t=""+b+"px"
o.top=t
u.classList.remove("small");(u&&C.d).L(u,"")
o=document
s=o.createElement("div")
s.className="nt-param-table"
u.appendChild(s)
C.d.af(s,'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.c(p.f)+':\n            <label id="nt-param-label-'+p.gZ()+'" for="nt-param-'+p.gZ()+'">'+H.c(U.b5(p.c,0))+'</label>\n            <span class="nt-param-unit">'+H.c(p.r)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+p.gZ()+'" type="range" value="'+H.c(U.b5(p.c,0))+'" min="'+H.c(p.dy)+'" max="'+H.c(p.fr)+'" step="'+H.c(p.y)+'">\n          </div>\n        </div>\n      ')
r=H.a(o.querySelector("#nt-param-label-"+p.gZ()),"$iq")
q=H.a(o.querySelector("#nt-param-"+p.gZ()),"$iaI")
if(q!=null&&r!=null){o=W.k
t={func:1,ret:-1,args:[o]}
W.H(q,"change",H.d(new U.hw(p,q,n,c),t),!1,o)
W.H(q,"input",H.d(new U.hx(r,q),t),!1,o)}}}
U.hw.prototype={
$1:function(a){var u,t=this,s=t.a
s.c=U.b5(t.b.value,0)
t.c.classList.remove("show")
t.d.$0()
u=s.b
u.fy.T(new U.bP(u.a,u.b,s.a,U.b5(s.c,0)))
a.stopPropagation()},
$S:3}
U.hx.prototype={
$1:function(a){J.jZ(this.a,this.b.value)},
$S:3}
U.hz.prototype={
gC:function(a){return this.c},
sC:function(a,b){var u,t=this
t.c=b
u=J.k0(t.x,new U.hB(b))
if(u.gj(u)===1)t.y=t.eC(u.A(0,0))
else t.y=b},
gaT:function(){return H.c(J.L(this.y))+H.c(this.r)+" \u25be"},
b9:function(a,b){return U.lk(b,this.B())},
B:function(){var u=this.bt()
u.i(0,"values",this.x)
return u},
eC:function(a){var u="display",t=H.K(a.p(u))&&!J.a8(J.Z(a,u),""),s=J.Q(a)
return t?s.h(a,u):s.h(a,"actual")},
b5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=this,i="display",h=j.b.fy,g=h.f
g.classList.add("show")
u=h.r
h=u.style
t=""+b+"px"
h.top=t
u.classList.add("small");(u&&C.d).L(u,"")
h=document
s=h.createElement("div")
s.className="nt-param-table"
u.appendChild(s)
for(t=J.B(j.x),r=W.u,q={func:1,ret:-1,args:[r]};t.l();){p=t.gn()
o=h.createElement("div")
o.className="nt-param-row"
n=H.K(p.p(i))&&!J.a8(J.Z(p,i),"")
m=J.Q(p)
l=n?m.h(p,i):m.h(p,"actual")
k=h.createElement("div")
k.className="nt-select-option"
C.d.L(k,H.v(l))
if(J.a8(J.Z(p,"actual"),j.c))k.classList.add("selected")
W.H(k,"click",H.d(new U.hA(j,p,g,c),q),!1,r)
o.appendChild(k)
s.appendChild(o)}}}
U.hB.prototype={
$1:function(a){return J.a8(J.Z(a,"actual"),this.a)&&H.K(a.p("display"))},
$S:15}
U.hA.prototype={
$1:function(a){var u,t,s=this
H.a(a,"$iu")
u=s.a
u.sC(0,J.Z(s.b,"actual"))
s.c.classList.remove("show")
s.d.$0()
t=u.b
t.fy.T(new U.bP(t.a,t.b,u.a,u.c))
a.stopPropagation()},
$S:2}
U.fo.prototype={
gaT:function(){var u=this.x
return u!=null?u.m(0):""},
gC:function(a){return this.c},
sC:function(a,b){var u
this.c=b
u=this.x
if(u!=null)u.aP(b)},
B:function(){var u=this.bt()
if(!!J.j(u.h(0,"value")).$ir)u.i(0,"expressionValue",U.bT(u.h(0,"value")))
return u},
b9:function(a,b){return U.kb(b,this.B())},
b5:function(a,b,c){var u,t,s,r,q,p,o=this,n=".nt-param-confirm",m="The type argument '",l="' is not a subtype of the type variable bound '",k="' of type variable 'T' in 'querySelectorAll'.",j="click",i=o.b.fy,h=i.f
h.classList.add("show")
u=i.r
i=u.style
t=""+b+"px"
i.top=t
u.classList.remove("small");(u&&C.d).L(u,"")
C.d.af(u,'      <div class="nt-param-table">\n        <div class="nt-param-row">\n          <div class="nt-param-label">'+H.c(o.f)+':</div>\n        </div>\n        <div class="nt-param-row">\n          <div id="nt-expression-'+o.gZ()+'" class="nt-expression-root"></div>\n        </div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
i=W.u
s=W.H(u,j,H.d(new U.fs(),{func:1,ret:-1,args:[i]}),!1,i)
t=W.l
r=document
H.aP(t,t,m,l,k)
q=[t]
p=[t]
i=[i]
new W.bg(H.i(new W.az(r.querySelectorAll(n),q),"$iaB",p,"$aaB"),!1,j,i).t(new U.ft(o,s,h,c))
H.aP(t,t,m,l,k)
new W.bg(H.i(new W.az(r.querySelectorAll(n),q),"$iaB",p,"$aaB"),!1,"mousedown",i).t(new U.fu())
H.aP(t,t,m,l,k)
new W.bg(H.i(new W.az(r.querySelectorAll(n),q),"$iaB",p,"$aaB"),!1,"mouseup",i).t(new U.fv())
H.aP(t,t,m,l,k)
new W.bg(H.i(new W.az(r.querySelectorAll(".nt-param-cancel"),q),"$iaB",p,"$aaB"),!1,j,i).t(new U.fw(s,h))
i=o.x
p="#nt-expression-"+o.gZ()
i.toString
i.b=r.querySelector(p)
i.cj()}}
U.fs.prototype={
$1:function(a){var u,t
H.a(a,"$iu")
u=W.l
t=document
H.aP(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.az(t.querySelectorAll(".nt-pulldown-menu"),[u])
u.u(u,new U.fr())},
$S:2}
U.fr.prototype={
$1:function(a){return J.cX(H.a(a,"$il"))},
$S:14}
U.ft.prototype={
$1:function(a){var u,t,s,r=this
H.a(a,"$iu")
u=W.l
t=document
H.aP(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
if(t.querySelectorAll(".nt-expression.empty").length>0)return!1
u=r.a
u.c=u.x.c.B()
r.b.a0()
r.c.classList.remove("show")
r.d.$0()
s=U.bT(u.c)
t=u.b
t.fy.T(new U.bP(t.a,t.b,u.a,s))},
$S:10}
U.fu.prototype={
$1:function(a){var u,t
H.a(a,"$iu")
u=W.l
t=document
H.aP(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.az(t.querySelectorAll(".nt-expression.empty"),[u])
u.u(u,new U.fq())},
$S:2}
U.fq.prototype={
$1:function(a){return J.bk(H.a(a,"$il")).k(0,"warn")},
$S:29}
U.fv.prototype={
$1:function(a){var u,t
H.a(a,"$iu")
u=W.l
t=document
H.aP(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.az(t.querySelectorAll(".nt-expression.empty"),[u])
u.u(u,new U.fp())},
$S:2}
U.fp.prototype={
$1:function(a){return J.bk(H.a(a,"$il")).aa(0,"warn")},
$S:29}
U.fw.prototype={
$1:function(a){H.a(a,"$iu")
this.a.a0()
this.b.classList.remove("show")},
$S:2}
U.ek.prototype={
dI:function(){var u,t,s,r=[]
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s)r.push(u[s].B())
return r},
a4:function(a){var u,t,s,r,q
try{t=this.a
if(t.length===0)return 0
s=P.C
r=H.b(t,0)
s=new H.av(t,H.d(new U.em(a),{func:1,ret:s,args:[r]}),[r,s]).ci(0,new U.en())
return s}catch(q){u=H.T(q)
P.jU("here is the fail "+H.c(J.L(u)))}},
a_:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s){r=u[s].a_(a)
if(r!=null)return r}return},
B:function(){var u,t,s,r,q="children",p=P.ki()
p.i(0,q,[])
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s){r=u[s]
J.bj(p.h(0,q),r.B())}return p},
sbX:function(a){this.a=H.i(a,"$im",[U.M],"$am")}}
U.em.prototype={
$1:function(a){H.a(a,"$iM")
return a.a4(this.a)},
$S:42}
U.en.prototype={
$2:function(a,b){var u,t
H.x(a)
H.x(b)
u=a
t=b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.Y(t)
return u+t},
$S:16}
U.cg.prototype={
ck:function(a){var u=this
u.f=u.e=u.d=u.c=u.b=u.a=null},
cl:function(a,b,c,d,e){var u=this
H.i(d,"$if",[U.M],"$af")
u.ck(0)
u.a=a
u.b=e==null?"block-children":"block-clause"
u.c=c
u.e=b
u.d=e
u.saU(d)},
saU:function(a){this.r=H.i(a,"$if",[U.M],"$af")}}
U.bm.prototype={
bV:function(a,b){var u,t,s,r,q,p,o=this
a.insertRule("."+b+"-color { background-color: "+H.c(o.a)+"; }",0)
a.insertRule("."+b+"-attribute { color: "+H.c(o.a)+"; }",0)
u="."+b+" { "
t="color: "+H.c(o.b)+"; border-color: "+H.c(o.c)+"; "
s=o.d
r=s===""?"":"font-weight: "+H.c(s)+";"
s=o.e
q=s===""?"":"font-size: "+H.c(s)+";"
s=o.f
p="font-family: "+H.c(s===""?"Poppins, sans-serif":s)+";"
a.insertRule(u+C.e.aB(t+C.e.aB(r+" "+q+" "+p))+" }",0)}}
U.M.prototype={
dw:function(a){var u=this,t=U.k3(u.fy,u.a,u.c)
u.cT(t)
return t},
cT:function(a){var u,t,s,r,q=this
a.c=q.c
a.d=q.d
a.e=q.e
a.f=q.f
a.db=q.db
a.dx=q.dx
a.dy=q.dy
a.fr=q.fr
a.fx=q.fx
for(u=q.y,u=u.gar(u),u=new H.aJ(J.B(u.a),u.b,[H.b(u,0),H.b(u,1)]),t=a.y;u.l();){s=u.a.b9(0,a)
t.i(0,s.a,s)}for(u=q.z,u=u.gar(u),u=new H.aJ(J.B(u.a),u.b,[H.b(u,0),H.b(u,1)]),t=a.z;u.l();){r=u.a.b9(0,a)
t.i(0,r.a,r)}},
B:function(){var u,t,s,r,q,p=this,o="children",n="properties",m=P.ki()
m.i(0,"id",p.a)
m.i(0,"instanceId",p.b)
m.i(0,"action",p.c)
m.i(0,"type",p.d)
m.i(0,"format",p.e)
m.i(0,"note",p.f)
m.i(0,"required",p.fx)
m.i(0,"x",p.r)
m.i(0,"y",p.x)
if(p.cx!=null){m.i(0,o,[])
for(u=p.cx.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s){r=u[s]
J.bj(m.h(0,o),r.B())}}if(p.cy!=null){m.i(0,"clauses",[])
for(u=p.cy,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s){q=u[s]
J.bj(m.h(0,"clauses"),q.B())}}u=p.y
if(u.a!==0){m.i(0,"params",[])
for(u=u.gar(u),u=new H.aJ(J.B(u.a),u.b,[H.b(u,0),H.b(u,1)]);u.l();){t=u.a
J.bj(m.h(0,"params"),t.B())}}u=p.z
if(u.a!==0){m.i(0,n,[])
for(u=u.gar(u),u=new H.aJ(J.B(u.a),u.b,[H.b(u,0),H.b(u,1)]);u.l();){t=u.a
J.bj(m.h(0,n),t.B())}m.i(0,"propertiesDisplay",p.Q)}return m},
a4:function(a){var u,t,s=this.a==a?1:0,r=this.cx
if(r!=null){r=r.a4(a)
if(typeof r!=="number")return H.Y(r)
s+=r}r=this.cy
if(r!=null&&r.length!==0){u=P.C
r.toString
t=H.b(r,0)
u=new H.av(r,H.d(new U.et(a),{func:1,ret:u,args:[t]}),[t,u]).ci(0,new U.eu())
if(typeof u!=="number")return H.Y(u)
s+=u}return s},
a_:function(a){var u,t,s,r,q=this
if(q.b===a)return q
u=q.cx
if(u!=null){t=u.a_(a)
if(t!=null)return t}u=q.cy
if(u!=null)for(s=u.length,r=0;r<u.length;u.length===s||(0,H.O)(u),++r){t=u[r].a_(a)
if(t!=null)return t}return},
aC:function(){var u=this
if(u.fx)return H.c(u.fy.b)+"-block-starter"
if(u.cx!=null||u.cy!=null)return H.c(u.fy.b)+"-block-container"
return H.c(u.fy.b)+"-block-command"},
a6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
c.id=b
c.go=a
u=document
t=u.createElement("div")
c.k3=t
t.classList.add("nt-block")
s=c.aC()
c.k3.classList.add(s)
if(c.cx!=null||c.cy!=null)c.k3.classList.add("nt-block-with-clauses")
U.k6(c,c.k3)
r=u.createElement("div")
r.classList.add("nt-block-left-bar")
t=s+"-color"
r.classList.add(t)
t=c.db
if(t!=null){q=r.style
q.backgroundColor=t}t=r.style
q=c.z
p=q.a
o=c.cy
o=o!=null?o.length*2:0
o=""+(4+p+o)
C.h.aO(t,(t&&C.h).av(t,"grid-row-end"),o,"")
c.k3.appendChild(r)
n=u.createElement("div")
o=s+"-color"
n.classList.add(o)
o=c.db
if(o!=null){t=n.style
t.backgroundColor=o}if(c.cx==null)n.classList.add("nt-block-header")
else n.classList.add("nt-block-clause-header")
c.k3.appendChild(n)
c.k4=u.createElement("div")
c.e4()
c.k4.classList.add("nt-block-action")
n.appendChild(c.k4)
m=u.createElement("div")
m.classList.add("nt-block-params")
n.appendChild(m)
for(t=c.y,t=t.gar(t),t=new H.aJ(J.B(t.a),t.b,[H.b(t,0),H.b(t,1)]);t.l();)m.appendChild(t.a.dD())
l=u.createElement("div")
l.classList.add("nt-block-properties")
n.appendChild(l)
if(q.a>0){t=c.Q!=="hidden"
p=new U.dx(t,new U.er(c,l))
o=p.a=u.createElement("div")
o.classList.add("nt-toggle")
o.innerText=t?"\u25b2":"\u25bc"
k=W.u
W.H(o,"click",H.d(p.gfF(p),{func:1,ret:-1,args:[k]}),!1,k)
c.r1=p
if(c.Q==="hidden")l.classList.add("nt-block-properties-hidden")
c.k4.appendChild(c.r1.a)}for(t=q.gar(q),t=new H.aJ(J.B(t.a),t.b,[H.b(t,0),H.b(t,1)]);t.l();){q=t.a
q.toString
j=u.createElement("div")
j.classList.add("nt-property")
i=u.createElement("div")
i.classList.add("nt-property-name")
i.innerText="\u2022 "+H.c(q.f)
j.appendChild(i)
j.appendChild(q.dD())
q=s+"-color"
j.classList.add(q)
q=c.db
if(q!=null){p=j.style
p.backgroundColor=q}l.appendChild(j)}t=c.cx
if(t!=null){h=t.a6(c.go,n)
c.k3.appendChild(h)}t=c.cy
if(t!=null)for(g=0;t=c.cy,g<t.length;++g){f=u.createElement("div")
f.classList.add("nt-clause-divider")
t=s+"-color"
f.classList.add(t)
t=c.db
if(t!=null){q=f.style
q.backgroundColor=t}c.k3.appendChild(f)
t=c.cy
if(g>=t.length)return H.A(t,g)
e=t[g].a6(c.go,f)
c.k3.appendChild(e)}if(c.cx!=null||t!=null){d=u.createElement("div")
d.classList.add("nt-clause-footer")
u=s+"-color"
d.classList.add(u)
u=c.db
if(u!=null){t=d.style
t.backgroundColor=u}c.k3.appendChild(d)}U.kP(c,c.k3,new U.es(c))
return c.k3},
e4:function(){var u,t,s,r,q=this,p=new P.am(""),o=q.f
if(o!=null&&C.e.e3(o).length!==0){o=H.c(q.f)+"\n"
p.a=o
p.a=o+"\n"}o=q.id
u=o.b==="workspace-chain"&&o.e===0
t=q.fy
if(u){s=C.a.h(t.y,o.a).dI()
o=t.x
o.az(p,s,0)
if(p.a.length===0)o.ag(p,q.B(),0)}else t.x.ag(p,q.B(),0)
o=p.a
r=new P.co().dA(C.e.aB(o.charCodeAt(0)==0?o:o))
o=q.k4;(o&&C.d).af(o,'<span title="'+r+'">'+H.c(q.c)+"</span>")},
J:function(){var u,t,s,r,q,p=this
p.k3.classList.remove("nt-drag-over")
p.k3.classList.remove("nt-block-clause-drag-over")
u=p.cx
t=u!=null&&u.J()
u=p.cy
if(u!=null)for(s=u.length,r=0;r<u.length;u.length===s||(0,H.O)(u),++r){q=u[r].J()
t=t||q}if((p.k1||p.k2)&&!t){p.k3.classList.add("nt-drag-over")
t=!0}return t},
a1:function(){var u,t,s,r=this
r.k3.classList.remove("nt-drag-over")
r.k3.classList.remove("nt-block-clause-drag-over")
r.k2=r.k1=!1
u=r.cx
if(u!=null)u.a1()
u=r.cy
if(u!=null)for(t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s)u[s].a1()},
bs:function(a){var u,t,s=this
U.l0(s,H.a(a,"$iah"))
u=H.t([],[U.M])
C.a.k(u,s)
C.a.N(u,s.id.r)
U.eB(s.go.e,u,!0,null)
t=s.fy
t.dW(s.id)
t.dF()},
c2:function(a){var u,t,s,r=this
H.a(a,"$iah")
$.aU=!0
$.d4=$.d2=$.d3=!1
u=r.fy
u.an()
u.a1()
t=u.k1
if(t==null)return
u.sU(null)
s=r.id
switch(s.b){case"workspace-chain":if(s.e===0)u.dB(t,r.r,r.x)
else{u=C.a.h(u.y,s.a)
s=r.id.e
H.i(t,"$if",[U.M],"$af")
C.a.a9(u.a,s,t)
u.Y()}break
case"block-children":u=C.a.h(u.y,s.a).a_(r.id.c).cx
s=r.id.e
u.toString
H.i(t,"$if",[U.M],"$af")
C.a.a9(u.a,s,t)
u.Y()
break
case"block-clause":u=C.a.h(u.y,s.a).a_(r.id.c).cy
u=(u&&C.a).h(u,r.id.d)
s=r.id.e
u.toString
H.i(t,"$if",[U.M],"$af")
C.a.a9(u.a,s,t)
u.Y()
break}},
a8:function(a){var u,t,s,r,q=this
H.a(a,"$iE")
$.aU=!0
u=q.fy
t=u.k1
u.sU(null)
s=q.id
switch(s.b){case"workspace-chain":s=C.a.h(u.y,s.a)
r=q.id.e
if(typeof r!=="number")return r.D()
H.i(t,"$if",[U.M],"$af")
C.a.a9(s.a,r+1,t)
s.Y()
break
case"block-children":s=C.a.h(u.y,s.a).a_(q.id.c).cx
r=q.id.e
if(typeof r!=="number")return r.D()
s.toString
H.i(t,"$if",[U.M],"$af")
C.a.a9(s.a,r+1,t)
s.Y()
break
case"block-clause":s=C.a.h(u.y,s.a).a_(q.id.c).cy
s=(s&&C.a).h(s,q.id.d)
r=q.id.e
if(typeof r!=="number")return r.D()
s.toString
H.i(t,"$if",[U.M],"$af")
C.a.a9(s.a,r+1,t)
s.Y()
break}u.T(U.bR(J.aG(t,0)))
u.an()},
bj:function(){var u,t=this.cx
if(t!=null)t.dY()
if(this.cy!=null)for(u=0;t=this.cy,u<t.length;++u)t[u].dY()},
aS:function(){var u,t,s,r,q,p=this,o=p.k4;(o&&C.d).L(o,"")
p.e4()
o=p.r1
if(o!=null)p.k4.appendChild(o.a)
o=p.cx
if(o!=null)for(o=o.a,u=o.length,t=0;t<o.length;o.length===u||(0,H.O)(o),++t)o[t].aS()
o=p.cy
if(o!=null)for(u=o.length,t=0;t<o.length;o.length===u||(0,H.O)(o),++t)for(s=o[t].a,r=s.length,q=0;q<s.length;s.length===r||(0,H.O)(s),++q)s[q].aS()},
sbZ:function(a){this.cy=H.i(a,"$im",[U.aa],"$am")}}
U.et.prototype={
$1:function(a){return H.a(a,"$iaa").a4(this.a)},
$S:46}
U.eu.prototype={
$2:function(a,b){H.x(a)
H.x(b)
if(typeof a!=="number")return a.D()
if(typeof b!=="number")return H.Y(b)
return a+b},
$S:16}
U.er.prototype={
$1:function(a){var u=this.a
u.Q=a?"shown":"hidden"
this.b.classList.toggle("nt-block-properties-hidden")
u.fy.T(U.bR(u))},
$S:47}
U.es.prototype={
$1:function(a){return this.a.k1=a},
$S:26}
U.ev.prototype={
$1:function(a){H.a(a,"$iE")
return this.a.$1(!0)},
$S:4}
U.ew.prototype={
$1:function(a){H.a(a,"$iE")
return this.a.$1(!1)},
$S:4}
U.a9.prototype={
a6:function(a,b){var u,t,s,r,q,p,o,n,m=this
m.d=b
u=document
t=u.createElement("div")
m.e=t
t.classList.add("nt-fragment")
s=Z.bW(m.e,m.c.k2)
s.gaq(s).t(m.ga7())
s.gao(s).t(new U.ez(m))
s.gap(s).t(new U.eA(m))
u=u.createElement("div")
m.b=u
u.classList.add("nt-chain")
if(m.a.length===0)return m.b
for(u=[U.M],r=0;t=m.a,r<t.length;r=o){q=t[r]
p=m.d
o=r+1
n=new U.cg()
t=H.i(H.an(t,o,null,H.b(t,0)),"$if",u,"$af")
n.a=p
n.b="workspace-chain"
n.e=r
n.saU(t)
q.a6(a,n)}U.eB(m.b,t,!1,m.e)
m.bm()
return m.b},
bm:function(){var u,t,s,r=this.a,q=r.length
if(q===0)return
if(0>=q)return H.A(r,0)
u=r[0]
t=C.c.w(u.r)
s=C.c.w(u.x)
r=this.b.style
q=""+t+"px"
r.left=q
r=this.b.style
q=""+s+"px"
r.top=q},
hf:function(a){var u,t,s,r,q,p,o
this.d=a
for(u=[U.M],t=0;s=this.a,t<s.length;t=o){r=s[t]
q=r.id
p=this.d
o=t+1
s=H.an(s,o,null,H.b(s,0))
q.toString
H.i(s,"$if",u,"$af")
q.f=q.e=q.d=q.c=q.b=q.a=null
q.a=p
q.b="workspace-chain"
q.e=t
q.saU(s)
r.bj()}},
J:function(){var u,t,s,r,q,p=this
p.e.classList.remove("nt-drag-over")
for(u=p.a,t=u.length,s=!1,r=0;r<u.length;u.length===t||(0,H.O)(u),++r){q=u[r].J()
s=s||q}if(p.f&&!s){p.e.classList.add("nt-drag-over")
s=!0}return s},
a1:function(){var u,t,s
this.e.classList.remove("nt-drag-over")
this.f=!1
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s)u[s].a1()},
Y:function(){var u,t,s,r,q,p,o,n=this
for(u=[U.M],t=0;s=n.a,t<s.length;t=o){r=s[t]
q=r.id
p=n.d
o=t+1
s=H.an(s,o,null,H.b(s,0))
q.toString
H.i(s,"$if",u,"$af")
q.f=q.e=q.d=q.c=q.b=q.a=null
q.a=p
q.b="workspace-chain"
q.e=t
q.saU(s)
r.bj()}U.eB(n.b,s,!1,n.e)
n.bm()},
fQ:function(){var u=this,t=u.a,s=t.length
if(s!==0){if(0>=s)return H.A(t,0)
t=!t[0].fx}else t=!0
if(!t)return
u.e.classList.add("show")
t=C.c.w(C.a.ga2(u.a).x)
s=u.b.style
t=""+(t-20)+"px"
s.top=t},
a8:function(a){var u,t,s,r,q,p,o=this
H.a(a,"$iE")
$.aU=!0
u=o.a
if(0>=u.length)return H.A(u,0)
t=u[0]
u=o.c
s=u.k1
u.sU(null)
r=J.aG(s,0)
q=U.cl(o.b)
p=a.d.I(0,q)
r.r=t.r
r.x=t.x-20+J.cW(p.b)
H.i(s,"$if",[U.M],"$af")
C.a.a9(o.a,0,s)
o.Y()
u.T(U.bR(r))
u.an()}}
U.ez.prototype={
$1:function(a){H.a(a,"$iE")
return this.a.f=!0},
$S:7}
U.eA.prototype={
$1:function(a){H.a(a,"$iE")
return this.a.f=!1},
$S:7}
U.aa.prototype={
a6:function(a,b){var u,t,s,r,q,p,o,n,m,l=this,k=document.createElement("div")
l.b=k
k.classList.add("nt-clause")
k=l.c
u=k.fy
t=Z.bW(b,u.k3)
s=l.ga7()
t.gaq(t).t(s)
t.gao(t).t(new U.eC(l))
t.gap(t).t(new U.eD(l))
r=Z.bW(l.b,u.k3)
r.gaq(r).t(s)
r.gao(r).t(new U.eE(l))
r.gap(r).t(new U.eF(l))
if(l.a.length===0){l.ct()
return l.b}for(u=l.d,q=0;s=l.a,q<s.length;q=o){p=s[q]
o=q+1
n=H.an(s,o,null,H.b(s,0))
m=new U.cg()
m.cl(k.id.a,q,k.b,n,u)
p.a6(a,m)}U.k4(l.b,s,"nt-block-clause",!1)
return l.b},
ct:function(){var u,t=this
t.b.classList.add("nt-clause-empty")
t.b.appendChild(U.lf(!1,t))
u=document.createElement("div")
u.className="nt-clause-drop"
t.b.appendChild(u)
t.b.appendChild(U.lf(!0,t))},
dY:function(){var u,t,s,r,q,p
for(u=this.c,t=this.d,s=0;r=this.a,s<r.length;s=p){q=r[s]
p=s+1
q.id.cl(u.id.a,s,u.b,H.an(r,p,null,H.b(r,0)),t)
q.bj()}},
Y:function(){var u,t,s,r,q,p=this,o=p.b;(o&&C.d).L(o,"")
if(p.a.length===0){p.ct()
return}p.b.classList.remove("nt-clause-empty")
for(o=p.c,u=p.d,t=0;s=p.a,t<s.length;t=q){r=s[t]
q=t+1
r.id.cl(o.id.a,t,o.b,H.an(s,q,null,H.b(s,0)),u)
r.bj()}U.k4(p.b,s,"nt-block-clause",!1)},
J:function(){var u,t,s,r,q,p=this
p.b.classList.remove("nt-block-clause-drag-over")
u=p.a
t=u.length
if(t!==0){if(0>=t)return H.A(u,0)
u[0].k3.classList.remove("nt-block-clause-drag-over")}for(u=p.a,t=u.length,s=!1,r=0;r<u.length;u.length===t||(0,H.O)(u),++r){q=u[r].J()
s=s||q}if((p.e||p.f)&&!s){u=p.a
t=u.length
if(t===0)p.b.classList.add("nt-block-clause-drag-over")
else{if(0>=t)return H.A(u,0)
u[0].k3.classList.add("nt-block-clause-drag-over")}s=!0}return s},
a1:function(){var u,t,s,r=this
r.b.classList.remove("nt-block-clause-drag-over")
u=r.a
t=u.length
if(t!==0){if(0>=t)return H.A(u,0)
u[0].k3.classList.remove("nt-block-clause-drag-over")}r.f=r.e=!1
for(u=r.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s)u[s].a1()},
a8:function(a){var u,t,s=this
H.a(a,"$iE")
$.aU=!0
u=s.c.fy
t=u.k1
u.sU(null)
H.i(t,"$if",[U.M],"$af")
C.a.a9(s.a,0,t)
s.Y()
s.b.classList.remove("nt-clause-empty")
u.T(U.bR(J.aG(t,0)))},
dV:function(a){var u=this.a,t=H.b(u,0),s=H.an(u,a,null,t)
this.sbX(H.an(u,0,a,t).O(0))
this.Y()
return s}}
U.eC.prototype={
$1:function(a){H.a(a,"$iE")
return this.a.f=!0},
$S:7}
U.eD.prototype={
$1:function(a){H.a(a,"$iE")
return this.a.f=!1},
$S:7}
U.eE.prototype={
$1:function(a){H.a(a,"$iE")
return this.a.e=!0},
$S:7}
U.eF.prototype={
$1:function(a){H.a(a,"$iE")
return this.a.e=!1},
$S:7}
U.d1.prototype={
b6:function(a,b,c){var u
if(!$.aU)if(this.a==$.l_)u=this.b||!$.kZ
else u=!1
else u=!1
return u}}
U.f2.prototype={}
U.aV.prototype={
ba:function(a){var u,t=this,s=t.e,r=s.length
if(r===1){r=t.a
if(r.c!==t)a.a+="("
a.a+=H.c(t.b)+" "
if(0>=s.length)return H.A(s,0)
s[0].ba(a)
if(r.c!==t)a.a+=")"}else if(r===2){u=t.a
if(u.c!==t)a.a+="("
if(0>=r)return H.A(s,0)
s[0].ba(a)
a.a+=" "+H.c(t.b)+" "
if(1>=s.length)return H.A(s,1)
s[1].ba(a)
if(u.c!==t)a.a+=")"}else{s=t.b
if(s!=null)a.a+=s}},
B:function(){var u,t,s,r=this,q="children",p=P.kj(["name",r.b,"type",r.c]),o=r.e
if(o.length!==0){p.i(0,q,[])
for(u=o.length,t=0;t<o.length;o.length===u||(0,H.O)(o),++t){s=o[t]
J.bj(p.h(0,q),s.B())}}o=r.d
if(o!=null)p.i(0,"format",o)
return p},
aP:function(a){var u,t,s,r,q,p=this,o="children",n=a.h(0,"name")
p.b=n==null?"":J.L(n)
n=a.h(0,"type")
p.c=n==null?"num":J.L(n)
if(a.h(0,"format")!=null)p.d=H.v(a.h(0,"format"))
n=p.e
C.a.sj(n,0)
if(!!J.j(a.h(0,o)).$im)for(u=J.B(H.a0(a.h(0,o),"$if")),t=p.a,s=[U.aV];u.l();){r=u.gn()
q=new U.aV(t,H.v(J.Z(r,"type")),H.t([],s))
C.a.k(n,q)
q.aP(H.a(r,"$ir"))}},
fE:function(a){var u,t,s,r
if(a==null)return this.e.length!==0
u=this.e
t=J.Q(a)
if(u.length!==t.gj(a))return!0
for(s=0;s<t.gj(a);++s){r=t.h(a,s)
if(s>=u.length)return H.A(u,s)
if(!J.a8(r,u[s].c))return!0}return!1},
ec:function(a){var u,t,s,r,q,p=this,o=p.e,n=o.length===0
if(p.fE(a)){C.a.sj(o,0)
if(a!=null)for(u=J.Q(a),t=p.a,s=[U.aV],r=0;r<u.gj(a);++r)if(r===0&&n&&J.a8(u.h(a,r),p.c)){q=new U.aV(t,H.v(u.h(a,r)),H.t([],s))
q.b=p.b
C.a.k(o,q)}else C.a.k(o,new U.aV(t,H.v(u.h(a,r)),H.t([],s)))}},
dq:function(a){var u,t=this,s=document.createElement("div")
C.d.L(s,H.c(t.b))
s.classList.add("nt-expression-text")
s.classList.add("editable")
u=H.c(t.c)
s.classList.add(u)
u=W.u
W.H(s,"click",H.d(new U.fz(t,s),{func:1,ret:-1,args:[u]}),!1,u)
t.dE(s,a)
a.appendChild(s)},
dE:function(a,b){var u=W.u,t={func:1,ret:-1,args:[u]}
W.H(a,"mouseenter",H.d(new U.fA(b),t),!1,u)
W.H(a,"mouseleave",H.d(new U.fB(b),t),!1,u)},
b7:function(a,b){var u=document.createElement("div")
C.d.L(u,b?"(":")")
u.classList.add("nt-expression-text")
u.classList.add("parenthesis")
this.dE(u,a)
a.appendChild(u)},
fz:function(a){var u,t,s=this
s.b=J.L(U.b5(s.b,0))
u=W.n3("number")
u.className="nt-number-input"
u.value=s.b
u.step="1"
t=W.k
W.H(u,"change",H.d(new U.fy(s,u),{func:1,ret:-1,args:[t]}),!1,t)
a.appendChild(u)},
gh0:function(){var u=this.b
if(u!=null)return P.m0(u,new U.fC())!=null
return!1},
bi:function(a){var u,t,s=this,r=document.createElement("div")
r.className="nt-expression"
if((s.gh0()||s.b==null)&&s.c==="num")s.fz(r)
else if(s.b==null){r.classList.add("empty")
C.d.af(r,"<small>&#9660;</small>")}else{u=s.e
t=u.length
if(t===1){s.b7(r,!0)
s.dq(r)
if(0>=u.length)return H.A(u,0)
u[0].bi(r)
s.b7(r,!1)}else if(t===2){s.b7(r,!0)
if(0>=u.length)return H.A(u,0)
u[0].bi(r)
s.dq(r)
if(1>=u.length)return H.A(u,1)
u[1].bi(r)
s.b7(r,!1)}else C.d.af(r,"<div class='nt-expression-text "+H.c(s.c)+"'>"+H.c(s.b)+"</div>")}if(s.e.length===0){r.classList.add("editable")
u=W.u
W.H(r,"click",H.d(new U.fF(s,r),{func:1,ret:-1,args:[u]}),!1,u)}a.appendChild(r)},
dR:function(a){var u,t,s=this,r=W.l,q=document
H.aP(r,r,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
r=new W.az(q.querySelectorAll(".nt-pulldown-menu"),[r])
r.u(r,new U.fD())
u=q.createElement("div")
u.classList.add("nt-pulldown-menu")
q=s.a.a
s.cG(u,q.db)
if(J.mA(q.cy))C.d.af(u,"<hr>")
s.cG(u,q.cy)
C.d.af(u,"<hr>")
t=W.kK("#")
C.m.L(t,"Clear")
t.className="clear"
u.appendChild(t)
r=W.u
W.H(t,"click",H.d(new U.fE(s,u),{func:1,ret:-1,args:[r]}),!1,r)
a.appendChild(u)},
cG:function(a,b){var u,t,s,r,q,p
for(u=J.B(b),t=W.u,s={func:1,ret:-1,args:[t]};u.l();){r=u.gn()
q=J.Q(r)
if(J.a8(q.h(r,"type"),this.c)){p=document.createElement("a")
p.href="#"
C.m.L(p,H.c(q.h(r,"name")))
a.appendChild(p)
W.H(p,"click",H.d(new U.fx(this,a,r),s),!1,t)}}}}
U.fz.prototype={
$1:function(a){H.a(a,"$iu")
this.a.dR(this.b)
a.stopPropagation()},
$S:2}
U.fA.prototype={
$1:function(a){H.a(a,"$iu")
this.a.classList.add("highlight")},
$S:2}
U.fB.prototype={
$1:function(a){H.a(a,"$iu")
this.a.classList.remove("highlight")},
$S:2}
U.fy.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.value
u.b=s
if(s==="")t.value=u.b="0"},
$S:3}
U.fC.prototype={
$1:function(a){return},
$S:17}
U.fF.prototype={
$1:function(a){H.a(a,"$iu")
this.a.dR(this.b)
a.stopPropagation()},
$S:2}
U.fD.prototype={
$1:function(a){return J.cX(H.a(a,"$il"))},
$S:14}
U.fE.prototype={
$1:function(a){var u
H.a(a,"$iu")
C.d.bh(this.b)
u=this.a
u.b=null
C.a.sj(u.e,0)
u.d=null
u.a.cj()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.fx.prototype={
$1:function(a){var u,t,s
H.a(a,"$iu")
C.d.bh(this.b)
u=this.a
t=this.c
s=J.Q(t)
u.ec(H.aq(s.h(t,"arguments")))
u.b=H.v(s.h(t,"name"))
u.c=H.v(s.h(t,"type"))
u.d=H.v(s.h(t,"format"))
u.a.cj()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.fn.prototype={
m:function(a){var u,t=new P.am("")
this.c.ba(t)
u=t.a
return u.charCodeAt(0)==0?u:u},
aP:function(a){var u=J.j(a)
if(!!u.$ir)this.c.aP(a)
else if(a!=null)this.c.b=u.m(a)},
cj:function(){var u=this,t=u.b
if(t!=null&&u.c!=null){J.my(t).b8(0)
u.c.bi(H.a(u.b,"$iaT"))}}}
U.cZ.prototype={
aK:function(a,b,c){var u,t,s
for(u="",t=0;t<b;++t)u+="  "
a.a+=u
s="\n"+u
a.a+=H.jV(c,"\n",s)+"\n"},
ag:function(a,b,c){var u,t=J.Q(b),s=H.v(t.h(b,"format")),r=t.h(b,"params"),q=t.h(b,"properties"),p=J.j(r),o=!!p.$im?p.gj(r):0,n=J.j(q),m=!!n.$im?n.gj(q):0
if(typeof s!=="string"){s=H.c(t.h(b,"action"))
for(u=0;u<o;++u)s+=" {"+u+"}"
for(u=0;u<m;++u)s+=" {P"+u+"}"}for(u=0;u<o;++u)s=this.bQ(s,"{"+u+"}",b,p.h(r,u))
for(u=0;u<m;++u)s=this.bQ(s,"{P"+u+"}",b,n.h(q,u))
this.aK(a,c,s)},
bQ:function(a,b,c,d){var u=this.eN(d)
if(typeof u!=="string")H.X(H.aO(u))
return H.jV(a,b,u)},
eN:function(a){var u="value",t=J.Q(a)
if(!!J.j(t.h(a,u)).$ir)return U.bT(t.h(a,u))
else{t=t.h(a,u)
return t==null?"":J.L(t)}}}
U.hr.prototype={
d_:function(a){var u,t=new P.am("")
for(u=J.B(H.a0(a.h(0,"chains"),"$if"));u.l();){this.az(t,u.gn(),0)
t.a+="\n"}u=t.a
return u.charCodeAt(0)==0?u:u},
az:function(a,b,c){var u,t,s,r,q,p,o="children"
for(u=J.B(H.a0(b,"$if")),t=c+1;u.l();){s=u.gn()
r=J.Q(s)
if(!!J.j(r.h(s,o)).$im)this.az(a,r.h(s,o),t)
if(!!J.j(r.h(s,"clauses")).$im)for(r=J.B(H.a0(r.h(s,"clauses"),"$if"));r.l();){q=r.gn()
this.ag(a,q,c)
p=J.Q(q)
if(!!J.j(p.h(q,o)).$im)this.az(a,p.h(q,o),t)}}}}
U.hh.prototype={
d_:function(a){var u,t,s="chains",r=new P.am("")
if(!J.j(a.h(0,s)).$im||J.a4(a.h(0,s))===0)return"".charCodeAt(0)==0?"":""
u=H.aq(a.h(0,s))
t=J.bK(u)
t.a5(u,U.oB())
for(t=t.gv(u);t.l();)this.az(r,t.gn(),0)
t=r.a
return t.charCodeAt(0)==0?t:t},
az:function(a,b,c){var u=J.Q(b)
if(u.gj(b)===0||!J.a8(J.Z(u.h(b,0),"type"),"nlogo:procedure"))return
this.ag(a,u.h(b,0),c)
this.bH(a,u.R(b,1),c+1)
u=a.a+="end\n"
a.a=u+"\n"},
ag:function(a,b,c){var u,t,s,r,q=this,p="children"
q.eg(a,b,c)
u=J.Q(b)
if(!!J.j(u.h(b,p)).$im)q.fU(a,u.h(b,p),c)
if(!!J.j(u.h(b,"clauses")).$im)for(u=J.B(H.a0(u.h(b,"clauses"),"$if")),t=c+1;u.l();){s=u.gn()
r=J.Q(s)
if(!!J.j(r.h(s,p)).$im){r=r.h(s,p)
q.aK(a,c,"[")
q.bH(a,r,t)
q.aK(a,c,"]")}}},
bH:function(a,b,c){var u
for(u=J.B(H.a0(b,"$if"));u.l();)this.ag(a,u.gn(),c)},
fU:function(a,b,c){this.aK(a,c,"[")
this.bH(a,b,c+1)
this.aK(a,c,"]")},
bQ:function(a,b,c,d){var u,t="expressionValue",s=J.Q(d),r=s.h(d,t)==null?s.h(d,"value"):s.h(d,t),q=J.Q(c),p=q.h(c,"id")
q=q.h(c,"instanceId")
s=s.h(d,"id")
u=H.v(this.b.$5(this.c,p,q,s,r))
if(typeof u!=="string")H.X(H.aO(u))
return H.jV(a,b,u)}}
U.cY.prototype={
bp:function(a){var u=this.b,t=H.b(u,0),s=new H.bd(u,H.d(new U.eq(a),{func:1,ret:P.G,args:[t]}),[t])
if(s.gj(s)===1)return s.ga2(s).a
return},
fP:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=null,a2=document,a3=a2.createElement("div"),a4=a0.a
a3.id=H.c(a4.b)+"-menu"
a0.d=a3
a3.classList.add("nt-menu")
for(a3=a0.b,u=W.k,t={func:1,ret:-1,args:[u]},s=W.u,r={func:1,ret:-1,args:[s]},q=0;q<a3.length;++q){p=a3[q]
o=a0.d
p.y=a5
p.f=q
n=a2.createElement("div")
p.x=n
n.classList.add("nt-menu-slot")
n=p.a
m=n.aC()
p.x.classList.add(m)
l=p.x
k=m+"-color"
l.classList.add(k)
j=U.kO(n)
i=new P.am("")
l=n.f
if(l!=null&&C.e.e3(l).length!==0){l=H.c(n.f)+"\n"
i.a=l
i.a=l+"\n"}l=p.d
l.x.ag(i,j.B(),0)
k=i.a
h=C.e.aB(k.charCodeAt(0)==0?k:k)
g=new P.co().cS(h,0,h.length)
f=g==null?h:g
k=p.x;(k&&C.d).c8(k,"beforeend",'<span title="'+f+'">'+H.c(n.c)+"</span>",a1,a1)
k=n.db
if(k!=null){e=p.x.style
e.backgroundColor=k}k=n.dy
if(k!=null){e=p.x.style
e.borderColor=k}k=n.dx
if(k!=null){e=p.x.style
e.color=k}k=n.fr
if(k!=null){e=p.x
d=e.style
c=d.lineHeight
d.font=k
k=e.style
k.lineHeight=c}b=Z.l1(p.x,p.y,".nt-menu-slot-at-limit","nt-block-dragging")
k=b.gdO(b)
k.a.bU(H.d(H.d(p.gbr(),{func:1,ret:-1,args:[H.b(k,0)]}),{func:1,ret:-1,args:[H.b(k,0)]}),a1,a1,!1)
k=b.gdN(b)
k.a.bU(H.d(H.d(p.gc1(),{func:1,ret:-1,args:[H.b(k,0)]}),{func:1,ret:-1,args:[H.b(k,0)]}),a1,a1,!1)
k=p.x
k.toString
W.H(k,"dblclick",H.d(p.gha(),t),!1,u)
k=p.x
k.toString
W.H(k,"contextmenu",H.d(p.gh8(),r),!1,s)
k=p.e
n=l.a4(n.a)
if(typeof k!=="number")return k.I()
if(typeof n!=="number")return H.Y(n)
n=k<=0||k-n>0
l=p.x
if(n)l.classList.remove("nt-menu-slot-at-limit")
else l.classList.add("nt-menu-slot-at-limit")
o.appendChild(p.x)}a=Z.bW(a0.d,a4.k2)
a.gao(a).t(new U.eo(a0))
a.gap(a).t(new U.ep(a0))
a.gaq(a).t(a0.ga7())
a0.e5()
return a0.d},
e5:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s){r=u[s]
q=r.e
p=r.d.a4(r.a.a)
if(typeof q!=="number")return q.I()
if(typeof p!=="number")return H.Y(p)
q=q<=0||q-p>0
p=r.x
if(q)p.classList.remove("nt-menu-slot-at-limit")
else p.classList.add("nt-menu-slot-at-limit")}},
J:function(){var u,t
if(!$.d3)u=$.d2&&!$.d4
else u=!0
t=this.d
if(u)t.classList.add("nt-menu-drag-over")
else t.classList.remove("nt-menu-drag-over")},
a8:function(a){var u,t
H.a(a,"$iE")
$.aU=!0
u=this.a
t=u.k1
u.sU(null)
u.T(U.bR(J.aG(t,0)))
u.an()}}
U.eq.prototype={
$1:function(a){return H.a(a,"$iaD").a.a==this.a},
$S:51}
U.eo.prototype={
$1:function(a){H.a(a,"$iE")
$.d3=!0
this.a.J()},
$S:8}
U.ep.prototype={
$1:function(a){H.a(a,"$iE")
$.d3=!1
this.a.J()},
$S:8}
U.hn.prototype={
$1:function(a){var u,t,s,r=this
H.v(a)
u=document.createElement("div")
t=P.h
W.lu(u,H.i(H.t(["nt-notch-"+H.c(a),r.a],[t]),"$if",[t],"$af"))
if(!r.b||a!=="middle"){t=r.c.db
if(t!=null){s=u.style
s.backgroundColor=t}}r.d.appendChild(u)},
$S:17}
U.ho.prototype={
$1:function(a){return this.a.k2=a},
$S:26}
U.hm.prototype={
$1:function(a){var u,t,s,r=this
H.v(a)
u=document.createElement("div")
t=P.h
W.lu(u,H.i(H.t(["nt-notch-"+H.c(a),r.a],[t]),"$if",[t],"$af"))
if(!r.b||a!=="middle"){t=r.c.c.db
if(t!=null){s=u.style
s.backgroundColor=t}}r.d.appendChild(u)},
$S:17}
U.hu.prototype={}
U.ej.prototype={
bk:function(){return P.fX(P.cs(["type","block-changed","blockId",this.b,"instanceId",this.c],P.h,P.y))}}
U.bP.prototype={
bk:function(){var u=this
return P.fX(P.cs(["type","attribute-changed","blockId",u.b,"instanceId",u.c,"attributeId",u.d,"value",u.e],P.h,null))}}
U.h9.prototype={
bk:function(){return P.fX(P.cs(["type","menu-item-clicked","blockId",this.b],P.h,P.y))}}
U.ha.prototype={
bk:function(){return P.fX(P.cs(["type","menu-item-context-menu","blockId",this.b,"x",this.c,"y",this.d],P.h,P.y))}}
U.aD.prototype={
bs:function(a){var u,t,s,r=this
H.a(a,"$iah")
u=U.kO(r.a)
r.r=u
t=r.f
s=new U.cg()
s.b="new-block"
s.f=t
u.a6(r.y,s)
U.l0(r.r,a)
U.eB(r.y.e,H.t([r.r],[U.M]),!1,null)
u=r.d
u.dW(s)
u.dF()},
c2:function(a){var u
H.a(a,"$iah")
$.aU=!0
$.d4=$.d2=$.d3=!1
this.r=null
u=this.d
u.an()
u.a1()},
hb:function(a){this.d.T(new U.h9(this.a.a))},
h9:function(a){var u,t,s
H.a(a,"$iu")
a.preventDefault()
a.stopPropagation()
u=this.a.a
t=a.pageX
s=a.pageY
this.d.T(new U.ha(u,H.x(t),H.x(s)))
return!1}}
U.dx.prototype={
fG:function(a,b){var u,t,s=this
H.a(b,"$iu").stopPropagation()
u=s.d=!s.d
t=s.a
t.innerText=u?"\u25b2":"\u25bc"
s.e.$1(u)}}
U.bp.prototype={
es:function(a,b,c){var u,t,s,r,q,p,o,n,m=this,l="blockStyles",k="#9977aa",j="#ffffff",i="blocks",h="variables",g="expressions",f=m.ch
if(!J.a8(f.h(0,"version"),3))throw H.e("The supported NetTango version is 3, but the given definition version was "+H.c(f.h(0,"version"))+".")
u=m.b
t="#"+H.c(u)
t=H.a(document.querySelector(t),"$iaT")
m.c=t
if(t==null)throw H.e("No container element with ID "+H.c(u)+" found.")
C.d.L(t,"")
m.c.classList.add("nt-container")
t=new U.d1(u,!0)
m.k2=t
m.k3=new U.d1(u,!1)
t=m.k4=Z.bW(m.c,t)
t.gaq(t).t(m.gfI())
u=f.h(0,"height")
m.dx=H.x(typeof u==="number"&&Math.floor(u)===u?f.h(0,"height"):600)
u=f.h(0,"width")
m.dy=H.x(typeof u==="number"&&Math.floor(u)===u?f.h(0,"width"):450)
if(H.K(f.p(l))){m.fx=U.k5(H.a(J.Z(f.h(0,l),"starterBlockStyle"),"$ir"),"#bb5555")
m.fy=U.k5(H.a(J.Z(f.h(0,l),"containerBlockStyle"),"$ir"),"#8899aa")
m.go=U.k5(H.a(J.Z(f.h(0,l),"commandBlockStyle"),"$ir"),k)}else{u=new U.bm(k,j,j)
u.a="#bb5555"
m.fx=u
u=new U.bm(k,j,j)
u.a="#8899aa"
m.fy=u
m.go=new U.bm(k,j,j)}u=m.c.style
t=H.c(m.dx)+"px"
u.minHeight=t
u=m.c.style
t=H.c(m.dy)+"px"
u.minWidth=t
u=m.c.style
t=H.c(m.dy)+"px"
u.maxWidth=t
m.fr=m.dx
m.cx=new U.cY(m,H.t([],[U.aD]))
if(!!J.j(f.h(0,i)).$im){for(u=J.B(H.a0(f.h(0,i),"$if"));u.l();){s=H.x(J.Z(u.gn(),"id"))
if(s!=null&&s>m.z){if(typeof s!=="number")return s.D()
m.z=s+1}}for(u=J.B(H.a0(f.h(0,i),"$if"));u.l();){r=H.a(u.gn(),"$ir")
q=U.kN(m,r)
if(m.cx.bp(q.a)!=null){q.a=null
p=U.k3(q.fy,null,q.c)
q.cT(p)
r.i(0,"id",p.a)
q=p}o=U.kB(r.h(0,"limit"),-1)
t=m.cx
n=t.bp(q.a)
if(n!=null)H.X(P.cn("Cannot add a block with the same ID as an existing block\n  Adding: ("+H.c(q.a)+": "+H.c(q.c)+")\n  Existing: ("+H.c(n.a)+": "+H.c(n.c)+")",null))
C.a.k(t.b,new U.aD(q,t.a,o))}}if(!!J.j(f.h(0,h)).$im)m.cy=H.aq(f.h(0,h))
if(!!J.j(f.h(0,g)).$im)m.db=H.aq(f.h(0,g))
if(!!J.j(f.h(0,"program")).$ir)m.fi(H.a(f.h(0,"program"),"$ir"))
m.fO()},
T:function(a){var u,t=this
try{t.e6()
t.aS()
t.cx.e5()
$.kG().h(0,"NetTango").bY("_relayCallback",[t.b,a.bk()])}catch(u){H.T(u)
P.jU("Unable to relay program changed event to Javascript")}},
dH:function(a){var u,t=this.c3(!0),s=this.x,r=s.b
if(a!=null)s.b=a
u=s.d_(t)
s.b=r
return u},
fT:function(){return this.dH(null)},
c3:function(a){var u,t,s,r,q,p,o=P.kj(["chains",[]])
for(u=this.y,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s){r=u[s]
J.bj(o.h(0,"chains"),r.dI())}if(a)for(u=this.cx.b,t=u.length,q=[[P.r,,,]],s=0;s<u.length;u.length===t||(0,H.O)(u),++s){p=u[s].a
if(p.fx&&this.a4(p.a)===0)J.bj(o.h(0,"chains"),H.t([p.B()],q))}return o},
a4:function(a){var u,t,s=this.y
if(s.length===0)return 0
u=P.C
t=H.b(s,0)
return new H.av(s,H.d(new U.eO(a),{func:1,ret:u,args:[t]}),[t,u]).ci(0,new U.eP())},
fO:function(){var u,t,s,r,q,p,o,n,m,l=this,k=l.b,j=H.c(k)+"-styles",i=document,h=H.a(i.getElementById(j),"$icE")
if(h==null){h=i.createElement("style")
h.id=j
l.c.appendChild(h)}u=H.a(h.sheet,"$ick")
for(;u.cssRules.length>0;)u.removeRule(0)
l.fx.bV(u,H.c(k)+"-block-starter")
l.fy.bV(u,H.c(k)+"-block-container")
l.go.bV(u,H.c(k)+"-block-command")
t=i.createElement("div")
t.classList.add("nt-workspace-wrapper")
l.c.appendChild(t)
s=i.createElement("div")
s.classList.add("nt-block-drag")
s.classList.add("nt-chain")
t.appendChild(s)
r=i.createElement("div")
r.className="nt-attribute-backdrop"
l.f=r
q=W.u
p={func:1,ret:-1,args:[q]}
W.H(r,"click",H.d(new U.eH(l),p),!1,q)
r=i.createElement("div")
r.className="nt-attribute-dialog"
l.r=r
W.H(r,"click",H.d(new U.eI(),p),!1,q)
l.f.appendChild(l.r)
l.c.appendChild(l.f)
q=i.createElement("div")
q.id=H.c(k)+"-space"
l.d=q
q.classList.add("nt-workspace")
q=new U.f2()
q.e=s
l.id=q
t.appendChild(l.d)
i=i.createElement("div")
l.e=i
l.d.appendChild(i)
for(k=l.y,o=0;o<k.length;++o)k[o].a6(l.id,o)
l.dT()
n=l.cx.fP(l.id)
k=n.style
i=H.c(l.dx)+"px"
k.maxHeight=i
t.appendChild(n)
m=Z.bW(l.d,l.k2)
m.gao(m).t(new U.eJ(l))
m.gh7(m).t(new U.eK(l))
m.gap(m).t(new U.eL(l))
m.gaq(m).t(l.ga7())
k=l.k4
k.gao(k).t(new U.eM(l))
k=l.k4
k.gap(k).t(new U.eN(l))
l.e6()},
a8:function(a){var u,t,s,r=this
H.a(a,"$iE")
$.aU=!0
r.an()
u=r.k1
r.sU(null)
t=U.cl(r.e)
s=a.d.I(0,t).I(0,$.kY)
r.dB(u,Math.max(0,J.cW(s.a)),Math.max(0,J.cW(s.b)))
r.T(U.bR(J.aG(u,0)))},
fJ:function(a){var u,t=this
H.a(a,"$iE")
$.aU=!0
t.an()
u=t.k1
t.sU(null)
t.T(U.bR(J.aG(u,0)))},
dB:function(a,b,c){var u,t,s,r,q,p=this,o=U.M
H.i(a,"$if",[o],"$af")
u=new U.a9(p,H.t([],[o]))
o=p.y
t=o.length
C.a.k(o,u)
s=u.a6(p.id,t)
p.d.appendChild(s)
o=u.a
C.a.a9(o,o.length,a)
u.Y()
o=u.a
r=o.length
if(r!==0){if(0>=r)return H.A(o,0)
q=o[0]
q.r=b
q.x=c
u.bm()}p.dT()},
hc:function(a){var u,t,s,r=this.y,q=C.a.h(r,a),p=q.a
if(!!r.fixed$length)H.X(P.F("removeAt"))
if(typeof a!=="number"||Math.floor(a)!==a)H.X(H.aO(a))
if(typeof a!=="number")return a.ah()
u=r.length
if(a>=u)H.X(P.cA(a,null))
r.splice(a,1)[0]
u=q.b;(u&&C.d).bh(u)
for(t=0;t<r.length;++t){s=r[t]
s.hf(t)
s.bm()}return p},
dW:function(a){var u,t,s,r,q,p,o=this,n=a.b
switch(n){case"new-block":u=C.a.h(o.cx.b,a.f)
u.x.classList.remove("nt-block-dragging")
n=U.M
o.sU(H.i(H.t([u.r],[n]),"$if",[n],"$af"))
break
case"workspace-chain":n=[U.M]
if(a.e===0)o.sU(H.i(o.hc(a.a),"$if",n,"$af"))
else{t=C.a.h(o.y,a.a)
s=a.e
r=t.a
q=H.b(r,0)
p=H.an(r,s,null,q)
t.sbX(H.an(r,0,s,q).O(0))
t.Y()
o.sU(H.i(p,"$if",n,"$af"))}break
case"block-children":o.sU(H.i(C.a.h(o.y,a.a).a_(a.c).cx.dV(a.e),"$if",[U.M],"$af"))
break
case"block-clause":n=C.a.h(o.y,a.a).a_(a.c).cy
o.sU(H.i((n&&C.a).h(n,a.d).dV(a.e),"$if",[U.M],"$af"))
break
case"default":throw H.e(P.l7("Unknown block removal type: "+H.c(n)))}},
dT:function(){var u,t,s=this.y,r=H.t(s.slice(0),[H.b(s,0)])
C.a.a5(r,new U.eQ())
s=this.e;(s&&C.d).L(s,"")
for(s=r.length,u=0;u<r.length;r.length===s||(0,H.O)(r),++u){t=r[u]
this.e.appendChild(t.b)}},
dF:function(){var u,t,s
for(u=this.y,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s)u[s].fQ()},
an:function(){var u,t,s,r,q,p,o
for(u=this.y,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s){r=u[s]
r.e.classList.remove("show")
q=C.c.w(C.a.ga2(r.a).x)
p=r.b.style
o=""+q+"px"
p.top=o}},
J:function(){var u,t,s
for(u=this.y,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s)u[s].J()},
a1:function(){var u,t,s
for(u=this.y,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s)u[s].a1()
this.cx.J()},
e6:function(){var u,t,s,r,q,p=this,o=p.dx,n=p.c.getBoundingClientRect()
for(u=p.y,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s){r=C.b.fD(u[s].b.getBoundingClientRect().bottom-n.top)
if(typeof o!=="number")return H.Y(o)
if(r>o)o=r}if(typeof o!=="number")return o.D()
u=o+1
p.fr=u
q=""+u+"px"
u=p.d.style
u.minHeight=q
u=p.cx.d.style
u.maxHeight=q},
aS:function(){var u,t,s,r,q,p
for(u=this.y,t=u.length,s=0;s<u.length;u.length===t||(0,H.O)(u),++s)for(r=u[s].a,q=r.length,p=0;p<r.length;r.length===q||(0,H.O)(r),++p)r[p].aS()},
fi:function(a){var u,t
if(!!J.j(a.h(0,"chains")).$im)for(u=J.B(H.a0(a.h(0,"chains"),"$if"));u.l();){t=u.gn()
if(!!J.j(t).$im)this.fg(t)}},
fg:function(a){var u,t,s,r=new U.a9(this,H.t([],[U.M]))
C.a.k(this.y,r)
for(u=J.B(a);u.l();){t=u.gn()
if(!!J.j(t).$ir){s=this.bR(t)
if(s!=null)C.a.k(r.a,s)}}},
bR:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j="children",i=k.cx.bp(H.x(a.h(0,"id")))
if(i==null){P.jU("No prototype block found for id: "+H.c(a.h(0,"id")))
u=k.cx.b
t=P.C
s=H.b(u,0)
P.jU(new H.av(u,H.d(new U.eG(),{func:1,ret:t,args:[s]}),[s,t]))
return}r=i.dw(0)
u=a.h(0,"x")
if(typeof u==="number"){u=a.h(0,"y")
u=typeof u==="number"}else u=!1
if(u){r.r=J.cW(a.h(0,"x"))
r.x=J.cW(a.h(0,"y"))}u=a.h(0,"propertiesDisplay")
r.Q=u==null?"shown":J.L(u)
k.fh(r,H.aq(a.h(0,"params")),H.aq(a.h(0,"properties")))
if(!!J.j(a.h(0,j)).$im){r.cx=new U.aa(r,null,H.t([],[U.M]))
for(u=J.B(H.a0(a.h(0,j),"$if"));u.l();){q=u.gn()
if(!!J.j(q).$ir){p=k.bR(q)
if(p!=null)C.a.k(r.cx.a,p)}}}if(!!J.j(a.h(0,"clauses")).$im){r.sbZ(H.t([],[U.aa]))
for(u=J.B(H.a0(a.h(0,"clauses"),"$if")),t=[U.M],o=0;u.l();){n=u.gn()
s=J.j(n)
if(!!s.$ir&&!!J.j(n.h(0,j)).$im){m=new U.aa(r,o,H.t([],t))
l=r.cy;(l&&C.a).k(l,m)
for(s=J.B(H.a0(s.h(n,j),"$if"));s.l();){p=k.bR(H.a(s.gn(),"$ir"))
if(p!=null)C.a.k(m.a,p)}++o}}}return r},
fh:function(a,b,c){var u,t,s,r,q,p,o,n="id",m="value",l=J.j(b)
if(!!l.$im)for(l=l.gv(b),u=a.y,t=[P.h];l.l();){s=l.gn()
r=J.j(s)
if(!!r.$ir&&H.K(s.p(n))&&H.K(s.p(m))&&u.p(s.h(0,n))){q=u.h(0,r.h(s,n))
if(!!J.j(r.h(s,m)).$ir&&!C.a.E(H.t(["bool","num"],t),q.e))q.sC(0,q.d)
else q.sC(0,r.h(s,m))}}l=J.j(c)
if(!!l.$im)for(l=l.gv(c),u=a.z,t=[P.h];l.l();){p=l.gn()
r=J.j(p)
if(!!r.$ir&&H.K(p.p(n))&&H.K(p.p(m))&&u.p(p.h(0,n))){o=u.h(0,r.h(p,n))
if(!!J.j(r.h(p,m)).$ir&&!C.a.E(H.t(["bool","num"],t),o.e))o.sC(0,o.d)
else o.sC(0,r.h(p,m))}}},
sU:function(a){this.k1=H.i(a,"$if",[U.M],"$af")}}
U.eO.prototype={
$1:function(a){return H.a(a,"$ia9").a4(this.a)},
$S:54}
U.eP.prototype={
$2:function(a,b){H.x(a)
H.x(b)
if(typeof a!=="number")return a.D()
if(typeof b!=="number")return H.Y(b)
return a+b},
$S:16}
U.eH.prototype={
$1:function(a){var u,t
H.a(a,"$iu")
u=this.a.f.classList
t=u.contains("show")
u.remove("show")
return t},
$S:10}
U.eI.prototype={
$1:function(a){return H.a(a,"$iu").stopPropagation()},
$S:6}
U.eJ.prototype={
$1:function(a){H.a(a,"$iE")
$.d4=!0
this.a.cx.J()},
$S:8}
U.eK.prototype={
$1:function(a){H.a(a,"$iE")
return this.a.J()},
$S:4}
U.eL.prototype={
$1:function(a){var u
H.a(a,"$iE")
$.d4=!1
u=this.a
u.J()
u.cx.J()},
$S:8}
U.eM.prototype={
$1:function(a){H.a(a,"$iE")
$.d2=!0
this.a.cx.J()},
$S:8}
U.eN.prototype={
$1:function(a){H.a(a,"$iE")
$.d2=!1
this.a.cx.J()},
$S:8}
U.eQ.prototype={
$2:function(a,b){H.a(a,"$ia9")
H.a(b,"$ia9")
return C.c.am(C.a.ga2(a.a).x,C.a.ga2(b.a).x)},
$S:55}
U.eG.prototype={
$1:function(a){return H.a(a,"$iaD").a.a},
$S:56}
U.jD.prototype={
$5:function(a,b,c,d,e){var u=this.a
if(u==null)return J.L(e)
else return H.v(u.dr([a,b,c,d,e]))},
$C:"$5",
$R:5}
U.fS.prototype={
$5:function(a,b,c,d,e){var u=H.v(this.a.dr([a,b,c,d,e]))
return u},
$C:"$5",
$R:5}
U.hY.prototype={
$1:function(a){var u,t
if(!H.K(a.p("action")))return
u=this.b
t=u.a
a.i(0,"id",t)
u.i(0,H.v(a.h(0,"action")),t)
u=this.a
this.c.i(0,t,u.a)
u.a=U.lq(u.a,H.i(a,"$ir",[P.h,P.y],"$ar"))},
$S:18}
U.hZ.prototype={
$1:function(a){U.nA(this.a,this.b,a)},
$S:18}
U.hX.prototype={
$1:function(a){var u=this.a
u.a=U.nB(u.a,a)},
$S:58}
U.i_.prototype={
$1:function(a){return P.cs(["actual",a],P.h,null)},
$S:59}
U.i0.prototype={
$1:function(a){return H.K(a.p("type"))&&J.a8(J.Z(a,"type"),"select")},
$S:15}
U.i2.prototype={
$1:function(a){},
$S:18}
U.i1.prototype={
$1:function(a){var u="required",t=J.j(a)
if(!t.$im)return!1
if(t.gj(a)===0)return!1
if(t.gj(a)>1)return!0
if(H.K(t.h(a,0).p(u))&&H.K(H.jJ(J.Z(t.h(a,0),u))))return!1
return!0},
$S:15};(function aliases(){var u=J.a7.prototype
u.ei=u.m
u.eh=u.bg
u=J.dd.prototype
u.ek=u.m
u=P.c4.prototype
u.eo=u.aW
u=P.a_.prototype
u.ep=u.ai
u.eq=u.aV
u=P.f.prototype
u.ej=u.as
u=P.y.prototype
u.en=u.m
u=W.l.prototype
u.bu=u.V
u=W.dQ.prototype
u.er=u.ae
u=P.au.prototype
u.el=u.h
u.cA=u.i
u=U.bO.prototype
u.bt=u.B
u=U.dn.prototype
u.em=u.B
u=U.cZ.prototype
u.eg=u.ag})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers._instance_0u,q=hunkHelpers._instance_1i,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0i,l=hunkHelpers._static_2
u(P,"o8","nK",12)
u(P,"o9","nL",12)
u(P,"oa","nM",12)
t(P,"lR","o6",1)
s(P,"ob",1,null,["$2","$1"],["lG",function(a){return P.lG(a,null)}],31,0)
t(P,"lQ","o2",1)
var k
r(k=P.a2.prototype,"gb_","ac",1)
r(k,"gb0","ad",1)
q(P.c4.prototype,"gfu","k",22)
p(P.a1.prototype,"gcN",0,1,function(){return[null]},["$2","$1"],["aI","eG"],31,0)
r(k=P.dC.prototype,"gb_","ac",1)
r(k,"gb0","ad",1)
r(k=P.a_.prototype,"gb_","ac",1)
r(k,"gb0","ad",1)
r(P.dF.prototype,"gfl","ax",1)
r(k=P.b1.prototype,"gb_","ac",1)
r(k,"gb0","ad",1)
o(k,"geQ","eR",22)
n(k,"gf2","f3",40)
r(k,"geS","eT",1)
u(P,"od","nY",5)
s(W,"oi",4,null,["$4"],["nS"],28,0)
s(W,"oj",4,null,["$4"],["nT"],28,0)
m(W.dS.prototype,"gfH","c_",1)
u(P,"lY","cS",5)
u(P,"oq","jA",62)
o(k=Z.d5.prototype,"gf5","f6",14)
o(k,"geV","eW",6)
o(k,"geZ","f_",6)
o(k,"geX","eY",6)
o(k,"gf0","f1",6)
l(U,"oB","oc",63)
s(U,"oy",4,null,["$4"],["na"],64,0)
s(U,"ox",3,null,["$3"],["n9"],65,0)
l(U,"ow","n8",66)
u(U,"oA","nc",21)
t(U,"oz","nb",67)
u(U,"m_","nF",23)
u(U,"ou","nE",45)
u(U,"ov","nH",23)
o(k=U.M.prototype,"gbr","bs",11)
o(k,"gc1","c2",11)
o(k,"ga7","a8",4)
o(U.a9.prototype,"ga7","a8",4)
o(U.aa.prototype,"ga7","a8",4)
o(U.cY.prototype,"ga7","a8",4)
o(k=U.aD.prototype,"gbr","bs",11)
o(k,"gc1","c2",11)
o(k,"gha","hb",53)
o(k,"gh8","h9",10)
q(U.dx.prototype,"gfF","fG",6)
o(k=U.bp.prototype,"ga7","a8",4)
o(k,"gfI","fJ",4)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.y,null)
s(P.y,[H.kg,J.a7,J.bl,P.f,H.cu,P.ai,H.fj,H.bt,H.cF,P.h8,H.eT,H.cj,H.fT,H.hR,P.br,H.dR,P.aX,H.h2,H.h3,H.fU,H.hK,H.ko,P.jo,P.a5,P.a_,P.c4,P.ab,P.id,P.aN,P.a1,P.dA,P.W,P.hF,P.bf,P.ij,P.cP,P.dF,P.ad,P.jy,P.iK,P.jb,P.c7,P.dK,P.dL,P.P,P.jw,P.bC,P.dP,P.eR,P.fM,P.iQ,P.G,P.bq,P.I,P.b7,P.hq,P.dt,P.iv,P.d9,P.aH,P.m,P.r,P.cv,P.z,P.dh,P.V,P.h,P.am,P.aZ,W.eZ,W.fm,W.fk,W.dS,W.bH,W.a6,W.dl,W.dQ,W.jh,W.d8,W.ih,W.aj,W.ja,W.dW,P.au,P.p,P.j5,Z.f3,Z.ah,Z.il,Z.eh,Z.bG,Z.d5,Z.E,Z.e5,U.bO,U.ek,U.cg,U.bm,U.M,U.aV,U.fn,U.cZ,U.cY,U.hu,U.aD,U.dx,U.bp])
s(J.a7,[J.fQ,J.dc,J.dd,J.bu,J.bZ,J.bv,H.cy,W.bs,W.bQ,W.R,W.dD,W.du,W.f0,W.d0,W.f1,W.k,W.dH,W.cp,W.dg,W.dN,W.aE,W.dT,W.dX,W.dZ,P.cr])
s(J.dd,[J.hs,J.bE,J.bw])
t(J.kf,J.bu)
s(J.bZ,[J.db,J.fR])
s(P.f,[H.J,H.c_,H.bd,H.dw,H.cC,H.ie])
s(H.J,[H.aC,H.d7,H.bx,P.iJ,P.ax])
s(H.aC,[H.hL,H.av,P.iO])
t(H.bX,H.c_)
s(P.ai,[H.aJ,H.dz,H.hO,H.hD])
t(H.fg,H.dw)
t(H.d6,H.cC)
t(P.dV,P.h8)
t(P.hV,P.dV)
t(H.eU,P.hV)
s(H.cj,[H.eV,H.ht,H.jW,H.hP,H.fV,H.jO,H.jP,H.jQ,P.i6,P.i5,P.i7,P.i8,P.jp,P.jj,P.jk,P.fL,P.iw,P.iD,P.iz,P.iA,P.iB,P.ix,P.iC,P.iG,P.iH,P.iF,P.iE,P.hG,P.hH,P.hI,P.hJ,P.ib,P.ia,P.iZ,P.jE,P.j8,P.j7,P.j9,P.h7,P.iR,P.hj,P.fe,P.ff,W.fi,W.i3,W.iu,W.jg,W.hl,W.hk,W.jc,W.jd,W.jn,W.jx,P.eY,P.fH,P.fI,P.fJ,P.fY,P.jB,P.jC,P.jG,P.jH,P.jI,Z.f8,Z.f7,Z.f6,Z.f5,Z.f4,Z.ei,Z.e7,Z.ip,Z.iq,Z.ir,Z.is,Z.jv,Z.ju,Z.jt,Z.js,Z.jr,Z.iY,Z.iX,Z.iW,Z.iV,Z.j4,Z.j3,Z.j2,Z.j1,Z.j0,Z.fa,Z.fc,Z.fb,Z.fd,Z.f9,U.eg,U.ef,U.eb,U.ec,U.ed,U.ee,U.hw,U.hx,U.hB,U.hA,U.fs,U.fr,U.ft,U.fu,U.fq,U.fv,U.fp,U.fw,U.em,U.en,U.et,U.eu,U.er,U.es,U.ev,U.ew,U.ez,U.eA,U.eC,U.eD,U.eE,U.eF,U.fz,U.fA,U.fB,U.fy,U.fC,U.fF,U.fD,U.fE,U.fx,U.eq,U.eo,U.ep,U.hn,U.ho,U.hm,U.eO,U.eP,U.eH,U.eI,U.eJ,U.eK,U.eL,U.eM,U.eN,U.eQ,U.eG,U.jD,U.fS,U.hY,U.hZ,U.hX,U.i_,U.i0,U.i2,U.i1])
t(H.eW,H.eT)
s(P.br,[H.hp,H.fW,H.hU,H.dy,H.ey,H.hy,P.e9,P.de,P.dm,P.aR,P.hi,P.hW,P.hT,P.aY,P.eS,P.f_])
s(H.hP,[H.hE,H.ch])
t(H.i4,P.e9)
t(P.h5,P.aX)
s(P.h5,[H.at,P.iI,P.iN,W.i9])
t(H.di,H.cy)
s(H.di,[H.cL,H.cN])
t(H.cM,H.cL)
t(H.cx,H.cM)
t(H.cO,H.cN)
t(H.dj,H.cO)
s(H.dj,[H.hb,H.hc,H.hd,H.he,H.hf,H.dk,H.hg])
s(P.a5,[P.jf,P.aF,W.cI,W.bg])
t(P.dB,P.jf)
t(P.b0,P.dB)
s(P.a_,[P.dC,P.b1])
t(P.a2,P.dC)
t(P.ji,P.c4)
t(P.jl,P.id)
s(P.bf,[P.ii,P.ik])
t(P.cR,P.cP)
s(P.aF,[P.iT,P.je])
t(P.cQ,P.b1)
t(P.j6,P.jy)
t(P.iL,P.iI)
t(P.iS,P.jb)
t(P.h4,P.dL)
t(P.hC,P.dP)
t(P.bU,P.hF)
s(P.bU,[P.co,P.h1,P.h0])
t(P.h_,P.de)
t(P.fZ,P.eR)
t(P.iP,P.iQ)
s(P.I,[P.b3,P.C])
s(P.aR,[P.dq,P.fN])
s(W.bs,[W.w,W.bF,W.be])
s(W.w,[W.l,W.bo,W.cH])
s(W.l,[W.q,P.o])
s(W.q,[W.ce,W.e8,W.cf,W.bn,W.bS,W.aT,W.fK,W.aI,W.c0,W.c2,W.cE,W.dv,W.hM,W.hN,W.cG,W.bD])
t(W.bV,W.dD)
t(W.ck,W.du)
s(P.h4,[W.ic,W.az,W.af,P.fG])
t(W.fh,W.fm)
t(W.dI,W.dH)
t(W.bY,W.dI)
t(W.bc,W.k)
s(W.bc,[W.ba,W.u,W.ac])
t(W.dO,W.dN)
t(W.cz,W.dO)
t(W.bz,W.u)
t(W.dU,W.dT)
t(W.hQ,W.dU)
t(W.dY,W.dX)
t(W.ig,W.dY)
t(W.dE,W.d0)
t(W.e_,W.dZ)
t(W.dM,W.e_)
t(W.im,W.i9)
t(P.eX,P.hC)
s(P.eX,[W.io,P.ea])
t(W.aM,W.cI)
t(W.it,P.W)
t(W.jm,W.dQ)
s(P.au,[P.ae,P.dJ])
t(P.cq,P.dJ)
t(P.bb,P.j5)
t(P.cB,P.o)
s(Z.bG,[Z.jq,Z.iU,Z.j_])
s(U.bO,[U.dn,U.hz,U.fo])
s(U.dn,[U.fO,U.hv])
s(U.ek,[U.a9,U.aa])
t(U.d1,Z.e5)
t(U.f2,Z.eh)
s(U.cZ,[U.hr,U.hh])
s(U.hu,[U.ej,U.bP,U.h9,U.ha])
u(H.cL,P.P)
u(H.cM,H.bt)
u(H.cN,P.P)
u(H.cO,H.bt)
u(P.dL,P.P)
u(P.dP,P.bC)
u(P.dV,P.jw)
u(W.dD,W.eZ)
u(W.dH,P.P)
u(W.dI,W.a6)
u(W.dN,P.P)
u(W.dO,W.a6)
u(W.dT,P.P)
u(W.dU,W.a6)
u(W.dX,P.P)
u(W.dY,W.a6)
u(W.dZ,P.P)
u(W.e_,W.a6)
u(P.dJ,P.P)})()
var v={mangledGlobalNames:{C:"int",b3:"double",I:"num",h:"String",G:"bool",z:"Null",m:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.z},{func:1,ret:-1},{func:1,ret:P.z,args:[W.u]},{func:1,ret:P.z,args:[W.k]},{func:1,ret:-1,args:[Z.E]},{func:1,args:[,]},{func:1,ret:-1,args:[W.u]},{func:1,ret:P.G,args:[Z.E]},{func:1,ret:P.z,args:[Z.E]},{func:1,ret:P.z,args:[W.ac]},{func:1,ret:P.G,args:[W.u]},{func:1,ret:-1,args:[Z.ah]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.z,args:[W.l]},{func:1,ret:-1,args:[W.l]},{func:1,ret:P.G,args:[,]},{func:1,ret:P.C,args:[P.C,P.C]},{func:1,ret:P.z,args:[P.h]},{func:1,ret:P.z,args:[[P.r,,,]]},{func:1,ret:[P.ab,,],args:[[P.W,,]]},{func:1,ret:P.G,args:[W.aj]},{func:1,ret:P.h,args:[P.h]},{func:1,ret:-1,args:[P.y]},{func:1,ret:-1,args:[[P.r,,,]]},{func:1,ret:P.G,args:[W.w]},{func:1,ret:P.h,args:[P.C]},{func:1,ret:P.G,args:[P.G]},{func:1,ret:P.z,args:[,,]},{func:1,ret:P.G,args:[W.l,P.h,P.h,W.bH]},{func:1,ret:P.G,args:[W.l]},{func:1,ret:P.z,args:[,]},{func:1,ret:-1,args:[P.y],opt:[P.V]},{func:1,ret:P.G,args:[P.h]},{func:1,args:[,P.h]},{func:1,ret:P.G,args:[[P.ax,P.h]]},{func:1,args:[P.h]},{func:1,ret:P.z,args:[W.ba]},{func:1,ret:P.h,args:[W.l]},{func:1,ret:P.z,args:[,],opt:[P.V]},{func:1,ret:-1,args:[P.I]},{func:1,ret:-1,args:[,P.V]},{func:1,ret:-1,args:[Z.bG]},{func:1,ret:P.C,args:[U.M]},{func:1,ret:P.au,args:[,]},{func:1,ret:P.z,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[[P.m,,]]},{func:1,ret:P.C,args:[U.aa]},{func:1,ret:P.z,args:[P.G]},{func:1,ret:[P.cq,,],args:[,]},{func:1,ret:P.ae,args:[,]},{func:1,ret:W.l,args:[W.w]},{func:1,ret:P.G,args:[U.aD]},{func:1,ret:P.z,args:[P.h,,]},{func:1,ret:-1,args:[W.k]},{func:1,ret:P.C,args:[U.a9]},{func:1,ret:P.C,args:[U.a9,U.a9]},{func:1,ret:P.C,args:[U.aD]},{func:1,args:[W.k]},{func:1,ret:P.z,args:[[P.m,,]]},{func:1,ret:[P.r,P.h,,],args:[,]},{func:1,ret:P.z,args:[P.I]},{func:1,ret:-1,args:[W.w,W.w]},{func:1,ret:P.y,args:[,]},{func:1,ret:P.C,args:[,,]},{func:1,ret:-1,args:[P.h,P.h,P.h,P.ae]},{func:1,ret:-1,args:[P.h,P.h,P.ae]},{func:1,ret:P.h,args:[P.h,P.ae]},{func:1,ret:P.h},{func:1,ret:P.z,args:[P.aZ,,]},{func:1,ret:[P.a1,,],args:[,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.ce.prototype
C.n=W.bn.prototype
C.h=W.bV.prototype
C.d=W.aT.prototype
C.G=J.a7.prototype
C.a=J.bu.prototype
C.c=J.db.prototype
C.r=J.dc.prototype
C.b=J.bZ.prototype
C.e=J.bv.prototype
C.H=J.bw.prototype
C.O=W.cz.prototype
C.v=J.hs.prototype
C.w=W.dv.prototype
C.l=J.bE.prototype
C.Q=W.bF.prototype
C.x=new H.fj([P.z])
C.R=new P.fM()
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.D=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.C=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.B=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.o=function(hooks) { return hooks; }

C.i=new P.fZ()
C.E=new P.hq()
C.F=new P.ij()
C.f=new P.j6()
C.q=new P.b7(0)
C.I=new P.h0(null)
C.J=new P.h1(null)
C.K=H.t(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.L=H.t(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.M=H.t(u([]),[P.h])
C.t=u([])
C.j=H.t(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.k=H.t(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.N=H.t(u([]),[P.aZ])
C.u=new H.eW(0,{},C.N,[P.aZ,null])
C.P=new H.cF("call")})();(function staticFields(){$.aS=0
$.ci=null
$.kQ=null
$.kr=!1
$.lV=null
$.lO=null
$.m4=null
$.jK=null
$.jR=null
$.ky=null
$.c8=null
$.cT=null
$.cU=null
$.ks=!1
$.N=C.f
$.ap=[]
$.b8=null
$.k9=null
$.l6=null
$.l5=null
$.l4=function(){var u=P.h
return P.cs(["animationend","webkitAnimationEnd","animationiteration","webkitAnimationIteration","animationstart","webkitAnimationStart","fullscreenchange","webkitfullscreenchange","fullscreenerror","webkitfullscreenerror","keyadded","webkitkeyadded","keyerror","webkitkeyerror","keymessage","webkitkeymessage","needkey","webkitneedkey","pointerlockchange","webkitpointerlockchange","pointerlockerror","webkitpointerlockerror","resourcetimingbufferfull","webkitresourcetimingbufferfull","transitionend","webkitTransitionEnd","speechchange","webkitSpeechChange"],u,u)}()
$.dG=P.df(P.h,P.aH)
$.kW=null
$.kV=null
$.kU=null
$.kX=null
$.kT=null
$.U=null
$.l3=0
$.kL=null
$.e6=!1
$.c5=null
$.l_=null
$.kY=null
$.kZ=!1
$.aU=!1
$.d3=!1
$.d4=!1
$.d2=!1
$.ag=P.df(P.h,U.bp)})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oN","jX",function(){return H.kx("_$dart_dartClosure")})
u($,"oP","kC",function(){return H.kx("_$dart_js")})
u($,"oS","mb",function(){return H.b_(H.hS({
toString:function(){return"$receiver$"}}))})
u($,"oT","mc",function(){return H.b_(H.hS({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oU","md",function(){return H.b_(H.hS(null))})
u($,"oV","me",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oY","mh",function(){return H.b_(H.hS(void 0))})
u($,"oZ","mi",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oX","mg",function(){return H.b_(H.ln(null))})
u($,"oW","mf",function(){return H.b_(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"p0","mk",function(){return H.b_(H.ln(void 0))})
u($,"p_","mj",function(){return H.b_(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"p3","kD",function(){return P.nJ()})
u($,"oO","e2",function(){var t=new P.a1(C.f,[P.z])
t.fm(null)
return t})
u($,"oM","ma",function(){return{}})
u($,"p9","mp",function(){return P.lb(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"oL","m9",function(){return P.ns("^\\S+$")})
u($,"pd","kG",function(){return H.a(P.jF(self),"$iau")})
u($,"p4","kE",function(){return H.kx("_$dart_dartObject")})
u($,"pb","kF",function(){return function DartObject(a){this.o=a}})
u($,"p6","mm",function(){return W.fl("_customDragEnter",W.u)})
u($,"p8","mo",function(){return W.fl("_customDragOver",W.u)})
u($,"p7","mn",function(){return W.fl("_customDragLeave",W.u)})
u($,"p5","ml",function(){return W.fl("_customDrop",W.u)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.a7,DOMImplementation:J.a7,MediaError:J.a7,Navigator:J.a7,NavigatorConcurrentHardware:J.a7,NavigatorUserMediaError:J.a7,OverconstrainedError:J.a7,PositionError:J.a7,Range:J.a7,Selection:J.a7,SQLError:J.a7,DataView:H.cy,ArrayBufferView:H.cy,Float32Array:H.cx,Float64Array:H.cx,Int16Array:H.hb,Int32Array:H.hc,Int8Array:H.hd,Uint16Array:H.he,Uint32Array:H.hf,Uint8ClampedArray:H.dk,CanvasPixelArray:H.dk,Uint8Array:H.hg,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLCanvasElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLImageElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,HTMLAnchorElement:W.ce,HTMLAreaElement:W.e8,HTMLBaseElement:W.cf,Blob:W.bQ,File:W.bQ,HTMLBodyElement:W.bn,HTMLButtonElement:W.bS,CDATASection:W.bo,CharacterData:W.bo,Comment:W.bo,ProcessingInstruction:W.bo,Text:W.bo,CSSCharsetRule:W.R,CSSConditionRule:W.R,CSSFontFaceRule:W.R,CSSGroupingRule:W.R,CSSImportRule:W.R,CSSKeyframeRule:W.R,MozCSSKeyframeRule:W.R,WebKitCSSKeyframeRule:W.R,CSSKeyframesRule:W.R,MozCSSKeyframesRule:W.R,WebKitCSSKeyframesRule:W.R,CSSMediaRule:W.R,CSSNamespaceRule:W.R,CSSPageRule:W.R,CSSRule:W.R,CSSStyleRule:W.R,CSSSupportsRule:W.R,CSSViewportRule:W.R,CSSStyleDeclaration:W.bV,MSStyleCSSProperties:W.bV,CSS2Properties:W.bV,CSSStyleSheet:W.ck,HTMLDivElement:W.aT,DOMException:W.f0,DOMRectReadOnly:W.d0,DOMTokenList:W.f1,Element:W.l,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,EventTarget:W.bs,HTMLFormElement:W.fK,HTMLCollection:W.bY,HTMLFormControlsCollection:W.bY,HTMLOptionsCollection:W.bY,ImageData:W.cp,HTMLInputElement:W.aI,KeyboardEvent:W.ba,Location:W.dg,WheelEvent:W.u,MouseEvent:W.u,DragEvent:W.u,Document:W.w,DocumentFragment:W.w,HTMLDocument:W.w,ShadowRoot:W.w,XMLDocument:W.w,DocumentType:W.w,Node:W.w,NodeList:W.cz,RadioNodeList:W.cz,HTMLOptionElement:W.c0,PointerEvent:W.bz,HTMLSelectElement:W.c2,HTMLStyleElement:W.cE,StyleSheet:W.du,HTMLTableElement:W.dv,HTMLTableRowElement:W.hM,HTMLTableSectionElement:W.hN,HTMLTemplateElement:W.cG,HTMLTextAreaElement:W.bD,Touch:W.aE,TouchEvent:W.ac,TouchList:W.hQ,CompositionEvent:W.bc,FocusEvent:W.bc,TextEvent:W.bc,UIEvent:W.bc,Window:W.bF,DOMWindow:W.bF,DedicatedWorkerGlobalScope:W.be,ServiceWorkerGlobalScope:W.be,SharedWorkerGlobalScope:W.be,WorkerGlobalScope:W.be,Attr:W.cH,CSSRuleList:W.ig,ClientRect:W.dE,DOMRect:W.dE,NamedNodeMap:W.dM,MozNamedAttrMap:W.dM,IDBKeyRange:P.cr,SVGScriptElement:P.cB,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGElement:P.o})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,Selection:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:true,File:true,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleSheet:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,WheelEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLOptionElement:true,PointerEvent:true,HTMLSelectElement:true,HTMLStyleElement:true,StyleSheet:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,IDBKeyRange:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})
H.di.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.lZ,[])
else U.lZ([])})})()
//# sourceMappingURL=ntango.dart.js.map
/*
 * NetTango
 * Copyright (c) 2017 Michael S. Horn, Uri Wilensky, and Corey Brady
 *
 * Northwestern University
 * 2120 Campus Drive
 * Evanston, IL 60613
 * http://tidal.northwestern.edu
 * http://ccl.northwestern.edu

 * This project was funded in part by the National Science Foundation.
 * Any opinions, findings and conclusions or recommendations expressed in this
 * material are those of the author(s) and do not necessarily reflect the views
 * of the National Science Foundation (NSF).
 */

/**
 * NetTango functions can be used to create a blocks-based programming interface
 * associated with an HTML canvas.
 */
var NetTango = {

  /// Call init to instantiate a workspace associated with an HTML canvas.
  /// TODO: Document JSON specification format--for now see README.md
  init : function(language, canvasId, json, formatAttributeJS) {
    NetTango_InitWorkspace(language, canvasId, JSON.stringify(json), formatAttributeJS);
  },

  /// Add a callback function to receive programChanged events from the
  /// workspace. Callback functions should take one parameter, which is
  /// the canvasId for the workspace (as a String).
  onProgramChanged : function(canvasId, callback) {
    NetTango._callbacks[canvasId] = callback;
  },

  /// Exports the code for a workspace in a given target language.
  /// The only language supported now is "NetLogo".
  exportCode : function(canvasId, formatAttributeJS) {
    return NetTango_ExportCode(canvasId, formatAttributeJS);
  },

  /// Exports the current state of the workspace as a JSON object to be
  /// restored at a later point.
  save : function(canvasId) {
    return JSON.parse(NetTango_Save(canvasId));
  },

  /// Exports the state of all workspaces as a JSON object to be restored
  /// at a later point.
  saveAll : function() {
    return JSON.parse(NetTango_SaveAll());
  },

  /// Restores a workspace to a previously saved state (json object).
  /// Note, for now this is just an alias of the NetTango.init function.
  restore : function(language, canvasId, json, formatAttribute) {
    NetTango_InitWorkspace(language, canvasId, JSON.stringify(json), formatAttribute);
  },

  /// Restores all workspaces from a previously saved state.
  restoreAll : function(language, json, formatAttribute) {
    NetTango_InitAllWorkspaces(language, JSON.stringify(json), formatAttribute);
  },

  _relayCallback : function(canvasId, event) {
    if (canvasId in NetTango._callbacks) {
      NetTango._callbacks[canvasId](canvasId, event);
    }
  },

  _callbacks : { }
}

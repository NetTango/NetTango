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
a[c]=function(){a[c]=function(){H.p7(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.le"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.le"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.le(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kY:function kY(){},
am:function(a,b,c,d){P.al(b,"start")
if(c!=null){P.al(c,"end")
if(typeof b!=="number")return b.G()
if(b>c)H.Y(P.aV(b,0,c,"start",null))}return new H.iz(a,b,c,[d])},
lM:function(a,b,c,d){if(!!J.m(a).$iu)return new H.c3(a,b,[c,d])
return new H.c8(a,b,[c,d])},
o0:function(a,b,c){P.al(b,"takeCount")
if(!!J.m(a).$iu)return new H.fG(a,b,[c])
return new H.dv(a,b,[c])},
dr:function(a,b,c){if(!!J.m(a).$iu){P.al(b,"count")
return new H.d6(a,b,[c])}P.al(b,"count")
return new H.cG(a,b,[c])},
db:function(){return new P.b9("No element")},
nx:function(){return new P.b9("Too many elements")},
nw:function(){return new P.b9("Too few elements")},
lU:function(a,b,c){var u=J.a5(a)
if(typeof u!=="number")return u.a2()
H.ds(a,0,u-1,b,c)},
ds:function(a,b,c,d,e){if(c-b<=32)H.o_(a,b,c,d,e)
else H.nZ(a,b,c,d,e)},
o_:function(a,b,c,d,e){var u,t,s,r,q,p
for(u=b+1,t=J.H(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.G()
q=q>0}else q=!1
if(!q)break
p=r-1
t.j(a,r,t.h(a,p))
r=p}t.j(a,r,s)}},
nZ:function(a3,a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j=C.e.ah(a5-a4+1,6),i=a4+j,h=a5-j,g=C.e.ah(a4+a5,2),f=g-j,e=g+j,d=J.H(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.G()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.G()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.G()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.G()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.G()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.G()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.G()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.G()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.G()
if(a2>0){u=a1
a1=a0
a0=u}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.a8(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a5()
if(p<0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.G()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.j(a3,r,d.h(a3,t))
n=t+1
d.j(a3,t,d.h(a3,s))
d.j(a3,s,q)
s=o
t=n
break}else{d.j(a3,r,d.h(a3,s))
d.j(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.a5()
if(l<0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.G()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.G()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a5()
o=s-1
if(p<0){d.j(a3,r,d.h(a3,t))
n=t+1
d.j(a3,t,d.h(a3,s))
d.j(a3,s,q)
t=n}else{d.j(a3,r,d.h(a3,s))
d.j(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.j(a3,a4,d.h(a3,a2))
d.j(a3,a2,b)
a2=s+1
d.j(a3,a5,d.h(a3,a2))
d.j(a3,a2,a0)
H.ds(a3,a4,t-2,a6,a7)
H.ds(a3,s+2,a5,a6,a7)
if(m)return
if(t<i&&s>h){for(;J.a8(a6.$2(d.h(a3,t),b),0);)++t
for(;J.a8(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a5()
o=s-1
if(p<0){d.j(a3,r,d.h(a3,t))
n=t+1
d.j(a3,t,d.h(a3,s))
d.j(a3,s,q)
t=n}else{d.j(a3,r,d.h(a3,s))
d.j(a3,s,q)}s=o
break}}H.ds(a3,t,s,a6,a7)}else H.ds(a3,t,s,a6,a7)},
u:function u(){},
as:function as(){},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c7:function c7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c8:function c8(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(a,b,c){this.a=a
this.b=b
this.$ti=c},
aT:function aT(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
at:function at(a,b,c){this.a=a
this.b=b
this.$ti=c},
bp:function bp(a,b,c){this.a=a
this.b=b
this.$ti=c},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
dv:function dv(a,b,c){this.a=a
this.b=b
this.$ti=c},
fG:function fG(a,b,c){this.a=a
this.b=b
this.$ti=c},
iC:function iC(a,b,c){this.a=a
this.b=b
this.$ti=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
ij:function ij(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a){this.$ti=a},
fI:function fI(a){this.$ti=a},
bC:function bC(){},
cI:function cI(a){this.a=a},
nm:function(){throw H.b(P.r("Cannot modify unmodifiable Map"))},
bU:function(a){var u,t=H.p9(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oJ:function(a){return v.types[H.l(a)]},
oR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.m(a).$iN},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.Q(a)
if(typeof u!=="string")throw H.b(H.aZ(a))
return u},
bK:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
lS:function(a,b){var u,t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return
if(3>=t.length)return H.L(t,3)
u=H.x(t[3])
if(u!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return},
nT:function(a){var u,t
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=C.f.aR(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
dn:function(a){return H.nK(a)+H.lb(H.bT(a),0,null)},
nK:function(a){var u,t,s,r,q,p,o,n=J.m(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibO){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bU(t.length>1&&C.f.aW(t,0)===36?C.f.ca(t,1):t)},
au:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.bM(u,10))>>>0,56320|u&1023)}throw H.b(P.aV(a,0,1114111,null,null))},
af:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nS:function(a){return a.b?H.af(a).getUTCFullYear()+0:H.af(a).getFullYear()+0},
nQ:function(a){return a.b?H.af(a).getUTCMonth()+1:H.af(a).getMonth()+1},
nM:function(a){return a.b?H.af(a).getUTCDate()+0:H.af(a).getDate()+0},
nN:function(a){return a.b?H.af(a).getUTCHours()+0:H.af(a).getHours()+0},
nP:function(a){return a.b?H.af(a).getUTCMinutes()+0:H.af(a).getMinutes()+0},
nR:function(a){return a.b?H.af(a).getUTCSeconds()+0:H.af(a).getSeconds()+0},
nO:function(a){return a.b?H.af(a).getUTCMilliseconds()+0:H.af(a).getMilliseconds()+0},
c9:function(a,b,c){var u,t,s={}
s.a=0
u=[]
t=[]
s.a=b.length
C.a.K(u,b)
s.b=""
if(c!=null&&c.a!==0)c.t(0,new H.i5(s,t,u))
""+s.a
return J.n8(a,new H.hi(C.P,0,u,t,0))},
nL:function(a,b,c){var u,t,s,r
if(b instanceof Array)u=c==null||c.a===0
else u=!1
if(u){t=b
s=t.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(t[0])}else if(s===2){if(!!a.$2)return a.$2(t[0],t[1])}else if(s===3){if(!!a.$3)return a.$3(t[0],t[1],t[2])}else if(s===4){if(!!a.$4)return a.$4(t[0],t[1],t[2],t[3])}else if(s===5)if(!!a.$5)return a.$5(t[0],t[1],t[2],t[3],t[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,t)}return H.nJ(a,b,c)},
nJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b instanceof Array?b:P.bI(b,!0,null),k=l.length,j=a.$R
if(k<j)return H.c9(a,l,c)
u=a.$D
t=u==null
s=!t?u():null
r=J.m(a)
q=r.$C
if(typeof q==="string")q=r[q]
if(t){if(c!=null&&c.a!==0)return H.c9(a,l,c)
if(k===j)return q.apply(a,l)
return H.c9(a,l,c)}if(s instanceof Array){if(c!=null&&c.a!==0)return H.c9(a,l,c)
if(k>j+s.length)return H.c9(a,l,null)
C.a.K(l,s.slice(k-j))
return q.apply(a,l)}else{if(k>j)return H.c9(a,l,c)
p=Object.keys(s)
if(c==null)for(t=p.length,o=0;o<p.length;p.length===t||(0,H.P)(p),++o)C.a.k(l,s[H.x(p[o])])
else{for(t=p.length,n=0,o=0;o<p.length;p.length===t||(0,H.P)(p),++o){m=H.x(p[o])
if(c.p(0,m)){++n
C.a.k(l,c.h(0,m))}else C.a.k(l,s[m])}if(n!==c.a)return H.c9(a,l,c)}return q.apply(a,l)}},
J:function(a){throw H.b(H.aZ(a))},
L:function(a,b){if(a==null)J.a5(a)
throw H.b(H.bg(a,b))},
bg:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aQ(!0,b,s,null)
u=H.l(J.a5(a))
if(!(b<0)){if(typeof u!=="number")return H.J(u)
t=b>=u}else t=!0
if(t)return P.V(b,a,s,null,u)
return P.dq(b,s)},
aZ:function(a){return new P.aQ(!0,a,null,null)},
b:function(a){var u
if(a==null)a=new P.cE()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mH})
u.name=""}else u.toString=H.mH
return u},
mH:function(){return J.Q(this.dartException)},
Y:function(a){throw H.b(a)},
P:function(a){throw H.b(P.aj(a))},
bb:function(a){var u,t,s,r,q,p
a=H.mE(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.z([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lX:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lQ:function(a,b){return new H.hX(a,b==null?null:b.method)},
kZ:function(a,b){var u=b==null,t=u?null:b.method
return new H.hl(a,t,u?null:b.receiver)},
W:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kE(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.e.bM(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kZ(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lQ(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mK()
q=$.mL()
p=$.mM()
o=$.mN()
n=$.mQ()
m=$.mR()
l=$.mP()
$.mO()
k=$.mT()
j=$.mS()
i=r.a0(u)
if(i!=null)return f.$1(H.kZ(H.x(u),i))
else{i=q.a0(u)
if(i!=null){i.method="call"
return f.$1(H.kZ(H.x(u),i))}else{i=p.a0(u)
if(i==null){i=o.a0(u)
if(i==null){i=n.a0(u)
if(i==null){i=m.a0(u)
if(i==null){i=l.a0(u)
if(i==null){i=o.a0(u)
if(i==null){i=k.a0(u)
if(i==null){i=j.a0(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lQ(H.x(u),i))}}return f.$1(new H.iN(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dt()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aQ(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dt()
return a},
bj:function(a){var u
if(a==null)return new H.ef(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ef(a)},
mz:function(a){if(a==null||typeof a!='object')return J.bl(a)
else return H.bK(a)},
mp:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
oQ:function(a,b,c,d,e,f){H.c(a,"$iaR")
switch(H.l(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.lH("Unsupported number of arguments for wrapped closure"))},
bf:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oQ)
a.$identity=u
return u},
nk:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iq().constructor.prototype):Object.create(new H.cm(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.b0
if(typeof t!=="number")return t.E()
$.b0=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lz(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ng(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lz(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ng:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oJ,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lx:H.kR
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.b("Error in functionType of tearoff")},
nh:function(a,b,c,d){var u=H.kR
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lz:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nj(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nh(t,!r,u,b)
if(t===0){r=$.b0
if(typeof r!=="number")return r.E()
$.b0=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cn
return new Function(r+H.f(q==null?$.cn=H.f9("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b0
if(typeof r!=="number")return r.E()
$.b0=r+1
o+=r
r="return function("+o+"){return this."
q=$.cn
return new Function(r+H.f(q==null?$.cn=H.f9("self"):q)+"."+H.f(u)+"("+o+");}")()},
ni:function(a,b,c,d){var u=H.kR,t=H.lx
switch(b?-1:a){case 0:throw H.b(H.nY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nj:function(a,b){var u,t,s,r,q,p,o,n=$.cn
if(n==null)n=$.cn=H.f9("self")
u=$.lw
if(u==null)u=$.lw=H.f9("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ni(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.b0
if(typeof u!=="number")return u.E()
$.b0=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.b0
if(typeof u!=="number")return u.E()
$.b0=u+1
return new Function(n+u+"}")()},
le:function(a,b,c,d,e,f,g){return H.nk(a,b,c,d,!!e,!!f,g)},
kR:function(a){return a.a},
lx:function(a){return a.c},
f9:function(a){var u,t,s,r=new H.cm("self","target","receiver","name"),q=J.kW(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
S:function(a){if(a==null)H.oz("boolean expression must not be null")
return a},
x:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.aX(a,"String"))},
oG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.aX(a,"double"))},
kz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.aX(a,"num"))},
kq:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.aX(a,"bool"))},
l:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.aX(a,"int"))},
mC:function(a,b){throw H.b(H.aX(a,H.bU(H.x(b).substring(2))))},
p4:function(a,b){throw H.b(H.nf(a,H.bU(H.x(b).substring(2))))},
c:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.m(a)[b])return a
H.mC(a,b)},
ms:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.m(a)[b]
else u=!0
if(u)return a
H.p4(a,b)},
ap:function(a){if(a==null)return a
if(!!J.m(a).$ij)return a
throw H.b(H.aX(a,"List<dynamic>"))},
a1:function(a,b){var u
if(a==null)return a
u=J.m(a)
if(!!u.$ij)return a
if(u[b])return a
H.mC(a,b)},
mo:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.l(u)]
else return a.$S()}return},
bS:function(a,b){var u
if(typeof a=="function")return!0
u=H.mo(J.m(a))
if(u==null)return!1
return H.mc(u,null,b,null)},
d:function(a,b){var u,t
if(a==null)return a
if($.l8)return a
$.l8=!0
try{if(H.bS(a,b))return a
u=H.cZ(b)
t=H.aX(a,u)
throw H.b(t)}finally{$.l8=!1}},
ch:function(a,b){if(a!=null&&!H.ld(a,b))H.Y(H.aX(a,H.cZ(b)))
return a},
aX:function(a,b){return new H.dx("TypeError: "+P.bo(a)+": type '"+H.f(H.mj(a))+"' is not a subtype of type '"+b+"'")},
nf:function(a,b){return new H.fa("CastError: "+P.bo(a)+": type '"+H.f(H.mj(a))+"' is not a subtype of type '"+b+"'")},
mj:function(a){var u,t=J.m(a)
if(!!t.$ico){u=H.mo(t)
if(u!=null)return H.cZ(u)
return"Closure"}return H.dn(a)},
oz:function(a){throw H.b(new H.j1(a))},
p7:function(a){throw H.b(new P.fA(a))},
nY:function(a){return new H.ic(a)},
lg:function(a){return v.getIsolateTag(a)},
z:function(a,b){a.$ti=b
return a},
bT:function(a){if(a==null)return
return a.$ti},
pB:function(a,b,c){return H.ci(a["$a"+H.f(c)],H.bT(b))},
a9:function(a,b,c,d){var u=H.ci(a["$a"+H.f(c)],H.bT(b))
return u==null?null:u[d]},
K:function(a,b,c){var u=H.ci(a["$a"+H.f(b)],H.bT(a))
return u==null?null:u[c]},
e:function(a,b){var u=H.bT(a)
return u==null?null:u[b]},
cZ:function(a){return H.bR(a,null)},
bR:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bU(a[0].name)+H.lb(a,1,b)
if(typeof a=="function")return H.bU(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.l(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.L(b,t)
return H.f(b[t])}if('func' in a)return H.op(a,b)
if('futureOr' in a)return"FutureOr<"+H.bR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
op:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.z([],[P.i])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.k(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.L(a0,m)
p=C.f.E(p,a0[m])
l=u[q]
if(l!=null&&l!==P.C)p+=" extends "+H.bR(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bR(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bR(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bR(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oI(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.x(n[g])
i=i+h+H.bR(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lb:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aw("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bR(p,c)}return"<"+u.m(0)+">"},
ci:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
eD:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bT(a)
t=J.m(a)
if(t[b]==null)return!1
return H.ml(H.ci(t[d],u),null,c,null)},
q:function(a,b,c,d){if(a==null)return a
if(H.eD(a,b,c,d))return a
throw H.b(H.aX(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bU(b.substring(2))+H.lb(c,0,null),v.mangledGlobalNames)))},
b_:function(a,b,c,d,e){if(!H.an(a,null,b,null))H.p8("TypeError: "+H.f(c)+H.cZ(a)+H.f(d)+H.cZ(b)+H.f(e))},
p8:function(a){throw H.b(new H.dx(H.x(a)))},
ml:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.an(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.an(a[t],b,c[t],d))return!1
return!0},
py:function(a,b,c){return a.apply(b,H.ci(J.m(b)["$a"+H.f(c)],H.bT(b)))},
mu:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="C"||a.name==="I"||a===-1||a===-2||H.mu(u)}return!1},
ld:function(a,b){var u,t
if(a==null)return b==null||b.name==="C"||b.name==="I"||b===-1||b===-2||H.mu(b)
if(b==null||b===-1||b.name==="C"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ld(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bS(a,b)}u=J.m(a).constructor
t=H.bT(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.an(u,null,b,null)},
v:function(a,b){if(a!=null&&!H.ld(a,b))throw H.b(H.aX(a,H.cZ(b)))
return a},
an:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="C"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="C"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.an(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.an(b[H.l(a)],b,c,d)
if(typeof c==="number")return!1
if(a.name==="I")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.an("type" in a?a.type:l,b,s,d)
else if(H.an(a,b,s,d))return!0
else{if(!('$i'+"b7" in t.prototype))return!1
r=t.prototype["$a"+"b7"]
q=H.ci(r,u?a.slice(1):l)
return H.an(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mc(a,b,c,d)
if('func' in a)return c.name==="aR"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ml(H.ci(m,u),b,p,d)},
mc:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.an(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.an(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.an(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.an(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.oV(h,b,g,d)},
oV:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.an(c[s],d,a[s],b))return!1}return!0},
pA:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oT:function(a){var u,t,s,r,q=H.x($.mr.$1(a)),p=$.kr[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kx[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.x($.mk.$2(a,q))
if(q!=null){p=$.kr[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kx[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ky(u)
$.kr[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kx[q]=u
return u}if(s==="-"){r=H.ky(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mA(a,u)
if(s==="*")throw H.b(P.dy(q))
if(v.leafTags[q]===true){r=H.ky(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mA(a,u)},
mA:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.li(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ky:function(a){return J.li(a,!1,null,!!a.$iN)},
oU:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ky(u)
else return J.li(u,c,null,null)},
oN:function(){if(!0===$.lh)return
$.lh=!0
H.oO()},
oO:function(){var u,t,s,r,q,p,o,n
$.kr=Object.create(null)
$.kx=Object.create(null)
H.oM()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mD.$1(q)
if(p!=null){o=H.oU(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oM:function(){var u,t,s,r,q,p,o=C.y()
o=H.cg(C.z,H.cg(C.A,H.cg(C.q,H.cg(C.q,H.cg(C.B,H.cg(C.C,H.cg(C.D(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mr=new H.ku(r)
$.mk=new H.kv(q)
$.mD=new H.kw(p)},
cg:function(a,b){return a(b)||b},
nH:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.b(P.cu("Illegal RegExp pattern ("+String(p)+")",a))},
p5:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oH:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mE:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kD:function(a,b,c){var u=H.p6(a,b,c)
return u},
p6:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mE(b),'g'),H.oH(c))},
fr:function fr(a,b){this.a=a
this.$ti=b},
fq:function fq(){},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jb:function jb(a,b){this.a=a
this.$ti=b},
hi:function hi(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hX:function hX(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a){this.a=a},
kE:function kE(a){this.a=a},
ef:function ef(a){this.a=a
this.b=null},
co:function co(){},
iD:function iD(){},
iq:function iq(){},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dx:function dx(a){this.a=a},
fa:function fa(a){this.a=a},
ic:function ic(a){this.a=a},
j1:function j1(a){this.a=a},
ar:function ar(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hk:function hk(a){this.a=a},
ht:function ht(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bH:function bH(a,b){this.a=a
this.$ti=b},
hu:function hu(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ku:function ku(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
hj:function hj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
be:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bg(b,a))},
cB:function cB(){},
bJ:function bJ(){},
di:function di(){},
cC:function cC(){},
dj:function dj(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
hO:function hO(){},
dk:function dk(){},
hP:function hP(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
mt:function(a){var u=J.m(a)
return!!u.$ibw||!!u.$in||!!u.$icw||!!u.$ic5||!!u.$iA||!!u.$ica||!!u.$ibq},
oI:function(a){return J.ny(a?Object.keys(a):[],null)},
p9:function(a){return v.mangledGlobalNames[a]},
p3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
li:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kt:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lh==null){H.oN()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.b(P.dy("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lk()]
if(r!=null)return r
r=H.oT(a)
if(r!=null)return r
if(typeof a=="function")return C.I
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.lk(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
ny:function(a,b){return J.kW(H.z(a,[b]))},
kW:function(a){a.fixed$length=Array
return a},
lI:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nF:function(a,b){var u,t
for(u=a.length;b<u;){t=C.f.aW(a,b)
if(t!==32&&t!==13&&!J.lI(t))break;++b}return b},
nG:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.f.cY(a,u)
if(t!==32&&t!==13&&!J.lI(t))break}return b},
m:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dc.prototype
return J.hg.prototype}if(typeof a=="string")return J.bF.prototype
if(a==null)return J.dd.prototype
if(typeof a=="boolean")return J.hf.prototype
if(a.constructor==Array)return J.bE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.C)return a
return J.kt(a)},
H:function(a){if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(a.constructor==Array)return J.bE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.C)return a
return J.kt(a)},
bi:function(a){if(a==null)return a
if(a.constructor==Array)return J.bE.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.C)return a
return J.kt(a)},
lf:function(a){if(typeof a=="number")return J.c6.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.bO.prototype
return a},
mq:function(a){if(typeof a=="number")return J.c6.prototype
if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.bO.prototype
return a},
ks:function(a){if(typeof a=="string")return J.bF.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.bO.prototype
return a},
T:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bG.prototype
return a}if(a instanceof P.C)return a
return J.kt(a)},
a8:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.m(a).S(a,b)},
mV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lf(a).G(a,b)},
lp:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mq(a).ad(a,b)},
a2:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.H(a).h(a,b)},
d_:function(a,b,c){return J.bi(a).j(a,b,c)},
mW:function(a,b){return J.T(a).af(a,b)},
kG:function(a){return J.T(a).e1(a)},
mX:function(a,b,c,d){return J.T(a).ep(a,b,c,d)},
mY:function(a,b,c){return J.T(a).eq(a,b,c)},
bu:function(a,b){return J.bi(a).k(a,b)},
mZ:function(a,b,c,d){return J.T(a).eH(a,b,c,d)},
lq:function(a,b){return J.mq(a).at(a,b)},
a_:function(a,b){return J.H(a).D(a,b)},
kH:function(a,b,c){return J.H(a).eV(a,b,c)},
n_:function(a,b){return J.T(a).p(a,b)},
aC:function(a,b){return J.bi(a).q(a,b)},
n0:function(a,b){return J.bi(a).t(a,b)},
n1:function(a){return J.T(a).geK(a)},
n2:function(a){return J.T(a).gcV(a)},
lr:function(a){return J.T(a).gcW(a)},
bl:function(a){return J.m(a).gu(a)},
n3:function(a){return J.H(a).gF(a)},
n4:function(a){return J.H(a).gbW(a)},
F:function(a){return J.bi(a).gv(a)},
a5:function(a){return J.H(a).gi(a)},
n5:function(a){return J.T(a).gaP(a)},
n6:function(a,b){return J.bi(a).O(a,b)},
n7:function(a,b,c){return J.bi(a).H(a,b,c)},
n8:function(a,b){return J.m(a).be(a,b)},
d0:function(a){return J.T(a).az(a)},
n9:function(a,b){return J.T(a).fB(a,b)},
eF:function(a){return J.lf(a).aB(a)},
kI:function(a,b){return J.T(a).J(a,b)},
na:function(a,b,c){return J.ks(a).a6(a,b,c)},
nb:function(a){return J.bi(a).L(a)},
nc:function(a){return J.ks(a).fH(a)},
Q:function(a){return J.m(a).m(a)},
nd:function(a,b){return J.lf(a).fI(a,b)},
kJ:function(a){return J.ks(a).aR(a)},
kK:function(a,b){return J.bi(a).ao(a,b)},
a:function a(){},
hf:function hf(){},
dd:function dd(){},
de:function de(){},
i2:function i2(){},
bO:function bO(){},
bG:function bG(){},
bE:function bE(a){this.$ti=a},
kX:function kX(a){this.$ti=a},
bv:function bv(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
c6:function c6(){},
dc:function dc(){},
hg:function hg(){},
bF:function bF(){}},P={
ob:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oA()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bf(new P.j3(s),1)).observe(u,{childList:true})
return new P.j2(s,u,t)}else if(self.setImmediate!=null)return P.oB()
return P.oC()},
oc:function(a){self.scheduleImmediate(H.bf(new P.j4(H.d(a,{func:1,ret:-1})),0))},
od:function(a){self.setImmediate(H.bf(new P.j5(H.d(a,{func:1,ret:-1})),0))},
oe:function(a){P.l0(C.G,H.d(a,{func:1,ret:-1}))},
l0:function(a,b){var u=C.e.ah(a.a,1000)
return P.ol(u<0?0:u,b)},
ol:function(a,b){var u=new P.kb()
u.dW(a,b)
return u},
nt:function(a,b,c){var u=$.O
u!==C.d
u=new P.Z(u,[c])
u.ck(a,b)
return u},
m2:function(a,b){var u,t,s
b.a=1
try{a.dn(new P.jq(b),new P.jr(b),P.I)}catch(s){u=H.W(s)
t=H.bj(s)
P.mF(new P.js(b,u,t))}},
jp:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.c(a.c,"$iZ")
if(u>=4){t=b.b3()
b.a=a.a
b.c=a.c
P.cc(b,t)}else{t=H.c(b.c,"$iaY")
b.a=2
b.c=a
a.cJ(t)}},
cc:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.c(g.c,"$iad")
P.cf(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.cc(h.a,b)}g=h.a
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
if(m){H.c(q,"$iad")
P.cf(i,i,g.b,q.a,q.b)
return}l=$.O
if(l!==n)$.O=n
else l=i
g=b.c
if((g&15)===8)new P.jx(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.jw(u,b,q).$0()}else if((g&2)!==0)new P.jv(h,u,b).$0()
if(l!=null)$.O=l
g=u.b
if(!!J.m(g).$ib7){if(g.a>=4){k=H.c(o.c,"$iaY")
o.c=null
b=o.b4(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.jp(g,o)
return}}j=b.b
k=H.c(j.c,"$iaY")
j.c=null
b=j.b4(k)
g=u.a
p=u.b
if(!g){H.v(p,H.e(j,0))
j.a=4
j.c=p}else{H.c(p,"$iad")
j.a=8
j.c=p}h.a=j
g=j}},
ov:function(a,b){if(H.bS(a,{func:1,args:[P.C,P.X]}))return b.dh(a,null,P.C,P.X)
if(H.bS(a,{func:1,args:[P.C]}))return H.d(a,{func:1,ret:null,args:[P.C]})
throw H.b(P.eI(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
os:function(){var u,t
for(;u=$.ce,u!=null;){$.cY=null
t=u.b
$.ce=t
if(t==null)$.cX=null
u.a.$0()}},
ox:function(){$.l9=!0
try{P.os()}finally{$.cY=null
$.l9=!1
if($.ce!=null)$.ll().$1(P.mn())}},
mi:function(a){var u=new P.dA(a)
if($.ce==null){$.ce=$.cX=u
if(!$.l9)$.ll().$1(P.mn())}else $.cX=$.cX.b=u},
ow:function(a){var u,t,s=$.ce
if(s==null){P.mi(a)
$.cY=$.cX
return}u=new P.dA(a)
t=$.cY
if(t==null){u.b=s
$.ce=$.cY=u}else{u.b=t.b
$.cY=t.b=u
if(u.b==null)$.cX=u}},
mF:function(a){var u=null,t=$.O
if(C.d===t){P.bQ(u,u,C.d,a)
return}P.bQ(u,u,t,H.d(t.bO(a),{func:1,ret:-1}))},
mh:function(a){var u,t,s
if(a==null)return
try{a.$0()}catch(s){u=H.W(s)
t=H.bj(s)
P.cf(null,null,$.O,u,H.c(t,"$iX"))}},
md:function(a,b){P.cf(null,null,$.O,a,b)},
ot:function(){},
oh:function(a,b,c,d,e,f,g){var u=$.O,t=e?1:0
t=new P.bd(a,u,t,[f,g])
t.bp(b,c,d,e,g)
t.ce(a,b,c,d,e,f,g)
return t},
o1:function(a,b){var u=$.O
if(u===C.d)return P.l0(a,H.d(b,{func:1,ret:-1}))
return P.l0(a,H.d(u.bO(b),{func:1,ret:-1}))},
cf:function(a,b,c,d,e){var u={}
u.a=d
P.ow(new P.km(u,e))},
me:function(a,b,c,d,e){var u,t=$.O
if(t===c)return d.$0()
$.O=c
u=t
try{t=d.$0()
return t}finally{$.O=u}},
mg:function(a,b,c,d,e,f,g){var u,t=$.O
if(t===c)return d.$1(e)
$.O=c
u=t
try{t=d.$1(e)
return t}finally{$.O=u}},
mf:function(a,b,c,d,e,f,g,h,i){var u,t=$.O
if(t===c)return d.$2(e,f)
$.O=c
u=t
try{t=d.$2(e,f)
return t}finally{$.O=u}},
bQ:function(a,b,c,d){var u
H.d(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.bO(d):c.eL(d,-1)
P.mi(d)},
j3:function j3(a){this.a=a},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
kb:function kb(){},
kc:function kc(a,b){this.a=a
this.b=b},
j7:function j7(a,b){this.a=a
this.$ti=b},
a4:function a4(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.c=_.b=_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
cb:function cb(){},
k5:function k5(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
k6:function k6(a,b){this.a=a
this.b=b},
k7:function k7(a){this.a=a},
dD:function dD(){},
dB:function dB(a,b){this.a=a
this.$ti=b},
k8:function k8(a,b){this.a=a
this.$ti=b},
aY:function aY(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
Z:function Z(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jm:function jm(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a,b,c){this.a=a
this.b=b
this.c=c},
jo:function jo(a,b){this.a=a
this.b=b},
jt:function jt(a,b){this.a=a
this.b=b},
jn:function jn(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jy:function jy(a){this.a=a},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a){this.a=a
this.b=null},
a6:function a6(){},
iu:function iu(a,b){this.a=a
this.b=b},
iv:function iv(a,b){this.a=a
this.b=b},
iw:function iw(a,b){this.a=a
this.b=b},
ix:function ix(a,b){this.a=a
this.b=b},
a7:function a7(){},
it:function it(){},
dE:function dE(){},
dF:function dF(){},
a0:function a0(){},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a){this.a=a},
jY:function jY(){},
br:function br(){},
je:function je(a,b){this.b=a
this.a=null
this.$ti=b},
jg:function jg(a,b){this.b=a
this.c=b
this.a=null},
jf:function jf(){},
cQ:function cQ(){},
jM:function jM(a,b){this.a=a
this.b=b},
cU:function cU(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
dM:function dM(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
aP:function aP(){},
bd:function bd(a,b,c,d){var _=this
_.x=a
_.c=_.b=_.a=_.y=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
jL:function jL(a,b,c){this.b=a
this.a=b
this.$ti=c},
cT:function cT(a,b,c,d,e){var _=this
_.dy=a
_.x=b
_.c=_.b=_.a=_.y=null
_.d=c
_.e=d
_.r=_.f=null
_.$ti=e},
jW:function jW(a,b,c){this.b=a
this.a=b
this.$ti=c},
ad:function ad(a,b){this.a=a
this.b=b},
kf:function kf(){},
km:function km(a,b){this.a=a
this.b=b},
jO:function jO(){},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a,b){this.a=a
this.b=b},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
m3:function(a,b){var u=a[b]
return u===a?null:u},
l3:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
m4:function(){var u=Object.create(null)
P.l3(u,"<non-identifier-key>",u)
delete u["<non-identifier-key>"]
return u},
dg:function(a,b,c){return H.q(H.mp(a,new H.ar([b,c])),"$ilK",[b,c],"$alK")},
cx:function(a,b){return new H.ar([a,b])},
hv:function(){return new H.ar([null,null])},
l_:function(a){return H.mp(a,new H.ar([null,null]))},
cy:function(a){return new P.jK([a])},
l4:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
cL:function(a,b,c){var u=new P.dW(a,b,[c])
u.c=a.e
return u},
nv:function(a,b,c){var u,t
if(P.la(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.z([],[P.i])
C.a.k($.ao,a)
try{P.or(a,u)}finally{if(0>=$.ao.length)return H.L($.ao,-1)
$.ao.pop()}t=P.lW(b,H.a1(u,"$ih"),", ")+c
return t.charCodeAt(0)==0?t:t},
he:function(a,b,c){var u,t
if(P.la(a))return b+"..."+c
u=new P.aw(b)
C.a.k($.ao,a)
try{t=u
t.a=P.lW(t.a,a,", ")}finally{if(0>=$.ao.length)return H.L($.ao,-1)
$.ao.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
la:function(a){var u,t
for(u=$.ao.length,t=0;t<u;++t)if(a===$.ao[t])return!0
return!1},
or:function(a,b){var u,t,s,r,q,p,o,n=a.gv(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.l())return
u=H.f(n.gn(n))
C.a.k(b,u)
m+=u.length+2;++l}if(!n.l()){if(l<=5)return
if(0>=b.length)return H.L(b,-1)
t=b.pop()
if(0>=b.length)return H.L(b,-1)
s=b.pop()}else{r=n.gn(n);++l
if(!n.l()){if(l<=4){C.a.k(b,H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.L(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gn(n);++l
for(;n.l();r=q,q=p){p=n.gn(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.L(b,-1)
m-=b.pop().length+2;--l}C.a.k(b,"...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.L(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.k(b,o)
C.a.k(b,s)
C.a.k(b,t)},
lL:function(a,b){var u,t,s=P.cy(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.P)(a),++t)s.k(0,H.v(a[t],b))
return s},
hy:function(a){var u,t={}
if(P.la(a))return"{...}"
u=new P.aw("")
try{C.a.k($.ao,a)
u.a+="{"
t.a=!0
J.n0(a,new P.hz(t,u))
u.a+="}"}finally{if(0>=$.ao.length)return H.L($.ao,-1)
$.ao.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jA:function jA(){},
jD:function jD(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
jB:function jB(a,b){this.a=a
this.$ti=b},
jC:function jC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
jK:function jK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cd:function cd(a){this.a=a
this.c=this.b=null},
dW:function dW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hw:function hw(){},
y:function y(){},
hx:function hx(){},
hz:function hz(a,b){this.a=a
this.b=b},
a3:function a3(){},
kd:function kd(){},
hA:function hA(){},
iO:function iO(){},
bM:function bM(){},
ii:function ii(){},
jT:function jT(){},
dX:function dX(){},
e9:function e9(){},
eq:function eq(){},
ou:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.b(H.aZ(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.W(s)
r=P.cu(String(t),null)
throw H.b(r)}r=P.kh(u)
return r},
kh:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.jF(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.kh(a[u])
return a},
lJ:function(a,b,c){return new P.df(a,b)},
oo:function(a){return a.fM()},
ok:function(a,b,c){var u,t=new P.aw(""),s=new P.jH(t,[],P.oF())
s.bk(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
jF:function jF(a,b){this.a=a
this.b=b
this.c=null},
jG:function jG(a){this.a=a},
fo:function fo(){},
c0:function c0(){},
hb:function hb(){},
da:function da(){},
df:function df(a,b){this.a=a
this.b=b},
hp:function hp(a,b){this.a=a
this.b=b},
ho:function ho(){},
hr:function hr(a){this.b=a},
hq:function hq(a){this.a=a},
jI:function jI(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
jH:function jH(a,b,c){this.c=a
this.a=b
this.b=c},
oP:function(a){var u=H.lS(a,null)
if(u!=null)return u
throw H.b(P.cu(a,null))},
ns:function(a){if(a instanceof H.co)return a.m(0)
return"Instance of '"+H.f(H.dn(a))+"'"},
bI:function(a,b,c){var u,t=[c],s=H.z([],t)
for(u=J.F(a);u.l();)C.a.k(s,H.v(u.gn(u),c))
if(b)return s
return H.q(J.kW(s),"$ij",t,"$aj")},
nX:function(a){return new H.hj(a,H.nH(a,!1,!0,!1,!1,!1))},
lW:function(a,b,c){var u=J.F(b)
if(!u.l())return a
if(c.length===0){do a+=H.f(u.gn(u))
while(u.l())}else{a+=H.f(u.gn(u))
for(;u.l();)a=a+c+H.f(u.gn(u))}return a},
lN:function(a,b,c,d){return new P.hR(a,b,c,d)},
nn:function(a,b){var u
if(Math.abs(a)<=864e13)u=!1
else u=!0
if(u)H.Y(P.bV("DateTime is outside valid range: "+a))
return new P.b3(a,b)},
no:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
np:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d3:function(a){if(a>=10)return""+a
return"0"+a},
bo:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.Q(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ns(a)},
bV:function(a){return new P.aQ(!1,null,null,a)},
eI:function(a,b,c){return new P.aQ(!0,a,b,c)},
kL:function(a){return new P.aQ(!1,null,a,"Must not be null")},
dq:function(a,b){return new P.dp(null,null,!0,a,b,"Value not in range")},
aV:function(a,b,c,d,e){return new P.dp(b,c,!0,a,d,"Invalid value")},
nV:function(a,b,c,d){var u
if(typeof a!=="number")return a.a5()
if(a>=b){if(typeof c!=="number")return H.J(c)
u=a>c}else u=!0
if(u)throw H.b(P.aV(a,b,c,d,null))},
nU:function(a,b,c){var u
if(typeof a!=="number")return H.J(a)
if(0<=a){if(typeof c!=="number")return H.J(c)
u=a>c}else u=!0
if(u)throw H.b(P.aV(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.J(c)
u=b>c}else u=!0
if(u)throw H.b(P.aV(b,a,c,"end",null))
return b}return c},
al:function(a,b){if(typeof a!=="number")return a.a5()
if(a<0)throw H.b(P.aV(a,0,null,b,null))},
V:function(a,b,c,d,e){var u=H.l(e==null?J.a5(b):e)
return new P.hc(u,!0,a,c,"Index out of range")},
r:function(a){return new P.iP(a)},
dy:function(a){return new P.iM(a)},
bN:function(a){return new P.b9(a)},
aj:function(a){return new P.fp(a)},
lH:function(a){return new P.jl(a)},
cu:function(a,b){return new P.d9(a,b)},
my:function(a,b){var u=J.kJ(a),t=H.lS(u,null)
if(t==null)t=H.nT(u)
if(t!=null)return t
if(b==null)throw H.b(P.cu(a,null))
return b.$1(a)},
kA:function(a){H.p3(H.f(a))},
hS:function hS(a,b){this.a=a
this.b=b},
R:function R(){},
b3:function b3(a,b){this.a=a
this.b=b},
bh:function bh(){},
b5:function b5(a){this.a=a},
fE:function fE(){},
fF:function fF(){},
bB:function bB(){},
eJ:function eJ(){},
cE:function cE(){},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hc:function hc(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hR:function hR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iP:function iP(a){this.a=a},
iM:function iM(a){this.a=a},
b9:function b9(a){this.a=a},
fp:function fp(a){this.a=a},
i0:function i0(){},
dt:function dt(){},
fA:function fA(a){this.a=a},
jl:function jl(a){this.a=a},
d9:function d9(a,b){this.a=a
this.b=b},
aR:function aR(){},
G:function G(){},
h:function h(){},
aF:function aF(){},
j:function j(){},
o:function o(){},
cz:function cz(){},
I:function I(){},
ac:function ac(){},
C:function C(){},
av:function av(){},
X:function X(){},
i:function i(){},
aw:function aw(a){this.a=a},
ba:function ba(){},
aB:function(a){var u,t,s,r,q
if(a==null)return
u=P.cx(P.i,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.P)(t),++r){q=H.x(t[r])
u.j(0,q,a[q])}return u},
lE:function(){var u=$.lD
return u==null?$.lD=J.kH(window.navigator.userAgent,"Opera",0):u},
nq:function(){var u,t=$.lA
if(t!=null)return t
u=$.lB
if(u==null?$.lB=J.kH(window.navigator.userAgent,"Firefox",0):u)t="-moz-"
else{u=$.lC
if(u==null)u=$.lC=!H.S(P.lE())&&J.kH(window.navigator.userAgent,"Trident/",0)
if(u)t="-ms-"
else t=H.S(P.lE())?"-o-":"-webkit-"}return $.lA=t},
k_:function k_(){},
k1:function k1(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
iZ:function iZ(){},
j0:function j0(a,b){this.a=a
this.b=b},
k0:function k0(a,b){this.a=a
this.b=b},
j_:function j_(a,b){this.a=a
this.b=b
this.c=!1},
fu:function fu(){},
fv:function fv(a){this.a=a},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(){},
h6:function h6(){},
h7:function h7(){},
on:function(a,b){var u,t,s=new P.Z($.O,[b]),r=new P.k8(s,[b])
a.toString
u=W.n
t={func:1,ret:-1,args:[u]}
W.E(a,"success",H.d(new P.kg(a,r,b),t),!1,u)
W.E(a,"error",H.d(r.geT(),t),!1,u)
return s},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(){},
hZ:function hZ(){},
bL:function bL(){},
om:function(a,b,c,d){var u,t
H.kq(b)
H.ap(d)
if(H.S(b)){u=[c]
C.a.K(u,d)
d=u}t=P.bI(J.n7(d,P.oS(),null),!0,null)
H.c(a,"$iaR")
return P.eC(H.nL(a,t,null))},
hm:function(a){return H.c(P.lc(P.nI(a)),"$iaG")},
nI:function(a){return new P.hn(new P.jD([null,null])).$1(a)},
l6:function(a,b,c){var u
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(u){H.W(u)}return!1},
ma:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
eC:function(a){var u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
u=J.m(a)
if(!!u.$iaG)return a.a
if(H.mt(a))return a
if(!!u.$ilY)return a
if(!!u.$ib3)return H.af(a)
if(!!u.$iaR)return P.m9(a,"$dart_jsFunction",new P.kj())
return P.m9(a,"_$dart_jsObject",new P.kk($.ln()))},
m9:function(a,b,c){var u=P.ma(a,b)
if(u==null){u=c.$1(a)
P.l6(a,b,u)}return u},
ki:function(a){var u,t
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.mt(a))return a
else if(a instanceof Object&&!!J.m(a).$ilY)return a
else if(a instanceof Date){u=H.l(a.getTime())
t=new P.b3(u,!1)
t.cc(u,!1)
return t}else if(a.constructor===$.ln())return a.o
else return P.lc(a)},
lc:function(a){if(typeof a=="function")return P.l7(a,$.kF(),new P.kn())
if(a instanceof Array)return P.l7(a,$.lm(),new P.ko())
return P.l7(a,$.lm(),new P.kp())},
l7:function(a,b,c){var u=P.ma(a,b)
if(u==null||!(a instanceof Object)){u=c.$1(a)
P.l6(a,b,u)}return u},
aG:function aG(a){this.a=a},
hn:function hn(a){this.a=a},
ae:function ae(a){this.a=a},
cv:function cv(a,b){this.a=a
this.$ti=b},
kj:function kj(){},
kk:function kk(a){this.a=a},
kn:function kn(){},
ko:function ko(){},
kp:function kp(){},
dT:function dT(){},
mB:function(a,b){var u=new P.Z($.O,[b]),t=new P.dB(u,[b])
a.then(H.bf(new P.kB(t,b),1),H.bf(new P.kC(t),1))
return u},
kB:function kB(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a},
m6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
b8:function b8(a,b,c){this.a=a
this.b=b
this.$ti=c},
jN:function jN(){},
ag:function ag(){},
aS:function aS(){},
hs:function hs(){},
aU:function aU(){},
hY:function hY(){},
i4:function i4(){},
cF:function cF(){},
iy:function iy(){},
eK:function eK(a){this.a=a},
t:function t(){},
aW:function aW(){},
iJ:function iJ(){},
dU:function dU(){},
dV:function dV(){},
e4:function e4(){},
e5:function e5(){},
ei:function ei(){},
ej:function ej(){},
eo:function eo(){},
ep:function ep(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(a){this.a=a},
eU:function eU(){},
bY:function bY(){},
i_:function i_(){},
dC:function dC(){},
ip:function ip(){},
ed:function ed(){},
ee:function ee(){}},W={
ls:function(a){var u=document.createElement("a")
if(a!=null)u.href=a
return u},
nr:function(a,b,c){var u=document.body,t=(u&&C.o).T(u,a,b,c)
t.toString
u=W.A
u=new H.bp(new W.ah(t),H.d(new W.fH(),{func:1,ret:P.R,args:[u]}),[u])
return H.c(u.gap(u),"$iB")},
cq:function(a){var u,t,s,r="element tag unavailable"
try{u=J.T(a)
t=u.gdm(a)
if(typeof t==="string")r=u.gdm(a)}catch(s){H.W(s)}return r},
nu:function(a){var u,t=document.createElement("input"),s=H.c(t,"$ibD")
try{s.type=a}catch(u){H.W(u)}return s},
jE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m7:function(a,b,c,d){var u=W.jE(W.jE(W.jE(W.jE(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
m1:function(a,b){var u,t=a.classList
for(u=0;u<2;++u)t.add(b[u])},
og:function(a,b){var u,t,s=a.classList
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.P)(b),++t)s.remove(H.x(b[t]))},
E:function(a,b,c,d,e){var u=W.oy(new W.jk(c),W.n)
u=new W.jj(a,b,u,!1,[e])
u.cP()
return u},
m5:function(a){var u=W.ls(null),t=window.location
u=new W.bP(new W.jS(u,t))
u.dU(a)
return u},
oi:function(a,b,c,d){H.c(a,"$iB")
H.x(b)
H.x(c)
H.c(d,"$ibP")
return!0},
oj:function(a,b,c,d){var u,t,s
H.c(a,"$iB")
H.x(b)
H.x(c)
u=H.c(d,"$ibP").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
m8:function(){var u=P.i,t=P.lL(C.k,u),s=H.e(C.k,0),r=H.d(new W.ka(),{func:1,ret:u,args:[s]}),q=H.z(["TEMPLATE"],[u])
t=new W.k9(t,P.cy(u),P.cy(u),P.cy(u),null)
t.dV(null,new H.at(C.k,r,[s,u]),q,null)
return t},
l5:function(a){var u
if("postMessage" in a){u=W.of(a)
return u}else return H.c(a,"$ik")},
of:function(a){if(a===window)return H.c(a,"$im0")
else return new W.jd()},
oy:function(a,b){var u=$.O
if(u===C.d)return a
return u.eM(a,b)},
w:function w(){},
eG:function eG(){},
cj:function cj(){},
eH:function eH(){},
ck:function ck(){},
bw:function bw(){},
by:function by(){},
bz:function bz(){},
c1:function c1(){},
fw:function fw(){},
U:function U(){},
c2:function c2(){},
fx:function fx(){},
cp:function cp(){},
b1:function b1(){},
b2:function b2(){},
fy:function fy(){},
fz:function fz(){},
fB:function fB(){},
b4:function b4(){},
bm:function bm(){},
d4:function d4(){},
d5:function d5(){},
fC:function fC(){},
fD:function fD(){},
ja:function ja(a,b){this.a=a
this.b=b},
aA:function aA(a,b){this.a=a
this.$ti=b},
B:function B(){},
fH:function fH(){},
cr:function cr(){},
fJ:function fJ(a){this.a=a},
fK:function fK(a){this.a=a},
n:function n(){},
k:function k(){},
aq:function aq(){},
cs:function cs(){},
h3:function h3(){},
ct:function ct(){},
h8:function h8(){},
h9:function h9(){},
aE:function aE(){},
ha:function ha(){},
c4:function c4(){},
c5:function c5(){},
bD:function bD(){},
dh:function dh(){},
hB:function hB(){},
hC:function hC(){},
cA:function cA(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hH:function hH(){},
hI:function hI(a){this.a=a},
aH:function aH(){},
hJ:function hJ(){},
p:function p(){},
ah:function ah(a){this.a=a},
A:function A(){},
cD:function cD(){},
aI:function aI(){},
i3:function i3(){},
ia:function ia(){},
ib:function ib(a){this.a=a},
id:function id(){},
aK:function aK(){},
im:function im(){},
aL:function aL(){},
io:function io(){},
aM:function aM(){},
ir:function ir(){},
is:function is(a){this.a=a},
cH:function cH(){},
ax:function ax(){},
du:function du(){},
iA:function iA(){},
iB:function iB(){},
cJ:function cJ(){},
aN:function aN(){},
ay:function ay(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
aO:function aO(){},
iH:function iH(){},
iI:function iI(){},
bc:function bc(){},
iQ:function iQ(){},
iY:function iY(){},
ca:function ca(){},
bq:function bq(){},
cK:function cK(){},
jc:function jc(){},
dH:function dH(){},
jz:function jz(){},
e1:function e1(){},
jX:function jX(){},
k3:function k3(){},
j6:function j6(){},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
dN:function dN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
l2:function l2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bs:function bs(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jj:function jj(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jk:function jk(a){this.a=a},
eh:function eh(a,b){this.a=null
this.b=a
this.$ti=b},
jZ:function jZ(a,b){this.a=a
this.b=b},
bP:function bP(a){this.a=a},
D:function D(){},
dl:function dl(a){this.a=a},
hU:function hU(a){this.a=a},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(){},
jU:function jU(){},
jV:function jV(){},
k9:function k9(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ka:function ka(){},
k4:function k4(){},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
jd:function jd(){},
ak:function ak(){},
jS:function jS(a,b){this.a=a
this.b=b},
er:function er(a){this.a=a},
ke:function ke(a){this.a=a},
dG:function dG(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dO:function dO(){},
dP:function dP(){},
dR:function dR(){},
dS:function dS(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
cR:function cR(){},
cS:function cS(){},
eb:function eb(){},
ec:function ec(){},
eg:function eg(){},
ek:function ek(){},
el:function el(){},
cV:function cV(){},
cW:function cW(){},
em:function em(){},
en:function en(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){}},U={
lt:function(a,b){var u=new U.bW(a)
u.aE(a,b)
return u},
kM:function(a,b){var u=J.H(b),t=u.h(b,"type")
switch(t==null?"num":J.Q(t)){case"int":u=new U.hd(a)
u.aE(a,b)
u.cd(a,b)
u.y=1
return u
case"num":return U.kU(a,b)
case"bool":return U.kU(a,b)
case"range":t=new U.i7(a)
t.aE(a,b)
t.cd(a,b)
t.dy=U.bk(u.h(b,"min"),t.dy)
t.fr=U.bk(u.h(b,"max"),t.fr)
return t
case"select":return U.lT(a,b)
case"text":return U.lt(a,b)
default:return U.lt(a,b)}},
lT:function(a,b){var u,t="values",s=new U.ie([],a)
s.aE(a,b)
u=J.H(b)
if(!!J.m(u.h(b,t)).$ij&&J.mV(J.a5(u.h(b,t)),0)){u=H.ap(u.h(b,t))
s.x=u
s.sB(0,J.a2(J.a2(u,0),"actual"))}return s},
kU:function(a,b){var u,t=new U.fM(a)
t.aE(a,b)
u=new U.fL(a.fr)
u.c=new U.b6(u,H.x(J.a2(b,"type")),H.z([],[U.b6]))
t.x=u
u.aN(t.c)
return t},
eX:function(a,b,c,d){var u,t=H.c(d?b.cloneNode(!0):b,"$ib4")
t.toString
u=P.C
W.og(t,H.q(H.z(["nt-block-starter","nt-block-ender","nt-block-standalone","nt-block-middle","nt-block-clause-starter","nt-block-clause-standalone","nt-block-clause-middle","nt-block-clause-ender"],[u]),"$ih",[u],"$ah"))
t.classList.add(c)
a.appendChild(t)},
kO:function(a,b,c,d){var u,t=b.length
if(t===0)return
if(t===1)U.eX(a,C.a.gZ(b).fy,c+"-standalone",d)
else{U.eX(a,C.a.gZ(b).fy,c+"-starter",d)
for(u=1;u<b.length-1;++u)U.eX(a,b[u].fy,c+"-middle",d)
U.eX(a,C.a.gda(b).fy,c+"-ender",d)}},
ne:function(a,b){var u,t=H.z([],[U.M])
for(u=J.F(b);u.l();)C.a.k(t,U.lu(a,H.c(u.gn(u),"$io")))
return t},
kP:function(a,b){var u,t,s,r="#ffffff"
if(a==null){u=new U.bx("#9977aa",r,r)
u.a=b
return u}u=new U.bx("#9977aa",r,r)
t=J.H(a)
s=t.h(a,"blockColor")
u.a=s==null?b:J.Q(s)
s=t.h(a,"textColor")
u.b=s==null?r:J.Q(s)
s=t.h(a,"borderColor")
u.c=s==null?r:J.Q(s)
s=t.h(a,"fontWeight")
u.d=s==null?"":J.Q(s)
s=t.h(a,"fontSize")
u.e=s==null?"":J.Q(s)
t=t.h(a,"fontFace")
u.f=t==null?"":J.Q(t)
return u},
kN:function(a,b,c){var u,t=[P.G,U.bW]
t=new U.M(b,c,new H.ar(t),new H.ar(t),a)
if(b==null){u=a.Q
t.a=u
a.Q=u+1}else if(b>=a.Q)a.Q=b+1
u=a.ch
t.b=u
a.ch=u+1
return t},
lu:function(a,b){var u,t,s,r,q,p,o=null,n="clauses",m="children",l="properties",k=J.H(b),j=k.h(b,"action"),i=j==null?"":J.Q(j),h=U.kN(a,H.l(k.h(b,"id")),i)
k.j(b,"id",h.a)
if(!!J.m(k.h(b,n)).$ij){h.sbR(H.z([],[U.ab]))
j=[U.M]
u=0
while(!0){t=H.kz(J.a5(k.h(b,n)))
if(typeof t!=="number")return H.J(t)
if(!(u<t))break
s=H.c(J.a2(k.h(b,n),u),"$io")
r=new U.ab(h,u,H.z([],j))
t=J.H(s)
if(!!J.m(t.h(s,m)).$ij)r.sbP(U.ne(a,H.ap(t.h(s,m))))
t=h.ch;(t&&C.a).k(t,r);++u}}j=k.h(b,"type")
h.d=j==null?"":J.Q(j)
j=k.h(b,"format")
h.e=j==null?o:J.Q(j)
j=k.h(b,"blockColor")
h.cx=j==null?o:J.Q(j)
j=k.h(b,"textColor")
h.cy=j==null?o:J.Q(j)
j=k.h(b,"borderColor")
h.db=j==null?o:J.Q(j)
j=k.h(b,"font")
h.dx=j==null?o:J.Q(j)
h.dy=U.mG(k.h(b,"required"),h.dy)
if(!!J.m(k.h(b,"params")).$ij)for(j=J.F(H.a1(k.h(b,"params"),"$ih")),t=h.x;j.l();){q=U.kM(h,H.c(j.gn(j),"$io"))
t.j(0,q.a,q)}if(!!J.m(k.h(b,l)).$ij)for(k=J.F(H.a1(k.h(b,l),"$ih")),j=h.y;k.l();){p=U.kM(h,H.c(k.gn(k),"$io"))
j.j(0,p.a,p)}return h},
kQ:function(a,b){var u,t,s=a.db
if(s!=null){u=b.style
u.borderColor=s}s=a.cy
if(s!=null){u=b.style
u.color=s}s=a.dx
if(s!=null){u=b.style
t=u.lineHeight
u.font=s
s=b.style
s.lineHeight=t}},
lv:function(a,b){var u,t
b.draggable=!0
u=W.p
t={func:1,ret:-1,args:[u]}
W.E(b,"dragstart",H.d(a.gdD(),t),!1,u)
W.E(b,"dragend",H.d(a.gf6(),t),!1,u)
W.E(b,"dragenter",H.d(a.gaM(),t),!1,u)
W.E(b,"dragover",H.d(new U.f8(),t),!1,u)
W.E(b,"drop",H.d(a.gaj(),t),!1,u)},
fb:function(a,b,c,d){(a&&C.b).J(a,"")
if(C.a.gZ(b).dy){a.classList.add("nt-chain-starter")
a.classList.remove("nt-chain-fragment")}else{a.classList.remove("nt-chain-starter")
a.classList.add("nt-chain-fragment")
if(d!=null)a.appendChild(d)
a.appendChild(U.lO(!0,C.a.gZ(b)))}U.kO(a,b,"nt-block",c)
a.appendChild(U.lO(!1,C.a.gda(b)))},
ly:function(a,b){var u=W.p,t={func:1,ret:-1,args:[u]}
W.E(b,"dragenter",H.d(a.gf9(),t),!1,u)
W.E(b,"dragover",H.d(new U.fd(),t),!1,u)
W.E(b,"drop",H.d(a.gf0(),t),!1,u)},
c_:function(a){var u,t,s,r,q,p=J.H(a),o=p.h(a,"children")
if(o==null||!J.m(o).$ij)o=[]
u=p.h(a,"name")
t=u==null?"":J.Q(u)
u=p.h(a,"format")
if(typeof u==="string"){s=H.x(p.h(a,"format"))
p=J.H(o)
r=0
while(!0){u=p.gi(o)
if(typeof u!=="number")return H.J(u)
if(!(r<u))break
u="{"+r+"}"
q=U.c_(p.h(o,r))
s.toString
if(typeof q!=="string")H.Y(H.aZ(q))
s=H.kD(s,u,q);++r}return s}else{p=J.H(o)
if(p.gi(o)===1)return"("+H.f(t)+" "+H.f(U.c_(p.h(o,0)))+")"
else if(p.gi(o)===2)return"("+H.f(U.c_(p.h(o,0)))+" "+H.f(t)+" "+H.f(U.c_(p.h(o,1)))+")"
else return t}},
oE:function(a,b){var u,t="action",s=J.m(a)
if(!s.$ij||s.gi(a)===0||J.a2(s.h(a,0),t)==null)return-1
u=J.m(b)
if(!u.$ij||u.gi(b)===0||J.a2(u.h(b,0),t)==null)return 1
return J.lq(J.a2(s.h(a,0),t),J.a2(u.h(b,0),t))},
lO:function(a,b){var u,t,s=document.createElement("div")
s.classList.add("nt-notch")
u=b.aD()
s.classList.add(u)
U.kQ(b,s)
if(a)s.classList.add("nt-notch-top")
else s.classList.add("nt-notch-bottom")
t=u+"-color"
C.a.t(H.z(["filler","left","middle","right"],[P.i]),new U.hW(t,a,b,s))
U.lv(b,s)
return s},
lP:function(a,b){var u,t,s,r,q=document,p=q.createElement("div")
p.classList.add("nt-notch")
u=b.c
t=u.aD()
p.classList.add(t)
U.kQ(u,p)
if(a)p.classList.add("nt-notch-top")
else p.classList.add("nt-notch-bottom")
s=t+"-color"
C.a.t(H.z(["filler","left","middle","right"],[P.i]),new U.hV(s,a,b,p))
if(!a){r=q.createElement("div")
r.className="nt-notch-clause-filler"
p.appendChild(r)}U.ly(b,p)
return p},
bZ:function(a){var u=new U.eV()
u.b=a.a
u.c=a.b
return u},
nl:function(a,b,c){var u=new U.bA(3,a,c,H.z([],[U.aa]),b,[],[],H.z([],[[P.a7,,]]))
u.dT(a,b,c)
return u},
mb:function(a,b,c,d){U.oq(a,new U.kl(b),c,d)},
oq:function(a,b,c,d){var u,t,s,r,q,p="version"
H.q(d,"$io",[P.i,P.C],"$ao")
s=J.T(d)
r=H.l(H.S(s.p(d,p))?s.h(d,p):0)
if(typeof r!=="number")return r.G()
if(r>3)H.Y("Somehow the given model version ("+r+") is greater than the supported NetTango version (3).")
if(r<1)U.o4(d)
if(r<2)U.l1(d,U.mx(),U.mx())
if(r<3)U.oa(d)
s.j(d,p,3)
u=null
switch(a){case"NetLogo":u=new U.hQ(b,c)
break
default:u=new U.i1(b,c)
break}try{if($.ai.p(0,c))$.ai.h(0,c).fz()
$.ai.j(0,c,U.nl(c,d,u))}catch(q){s=H.W(q)
if(s instanceof P.d9){t=s
throw H.b(P.cu("There was an error initializing the workspace with the given NetTango model JSON.",t))}else throw q}},
nB:function(a,b,c,d){var u
H.x(a)
H.x(b)
H.x(c)
H.c(d,"$iae")
if($.ai.h(0,b) instanceof U.bA)C.a.si($.ai.h(0,b).z,0)
u=C.i.bU(0,c,null)
if(!!J.m(u).$io)U.mb(a,d,b,u)},
nA:function(a,b,c){var u,t,s
H.x(a)
H.x(b)
H.c(c,"$iae")
u=C.i.bU(0,b,null)
t=J.m(u)
if(!!t.$io)for(t=J.F(t.gA(u));t.l();){s=H.x(t.gn(t))
if($.ai.h(0,s) instanceof U.bA)C.a.si($.ai.h(0,s).z,0)
u=C.i.bU(0,b,null)
if(!!J.m(u).$io)U.mb(a,c,s,u)}},
nz:function(a,b){var u
H.x(a)
H.c(b,"$iae")
if($.ai.p(0,a)){u=$.ai
if(b!=null)return u.h(0,a).d6(new U.hh(b))
else return u.h(0,a).fe()}return},
nE:function(a){var u
H.x(a)
if($.ai.p(0,a)){u=$.ai.h(0,a).cx
J.d_(u,"program",$.ai.h(0,a).bV(!1))
return C.i.d5(u,null)}else return"{}"},
nD:function(){var u,t,s,r=P.hv()
for(u=$.ai,u=new H.bH(u,[H.e(u,0)]),u=u.gv(u);u.l();){t=u.d
s=$.ai.h(0,t).cx
J.d_(s,"program",$.ai.h(0,t).bV(!1))
r.j(0,t,s)}return C.i.d5(r,null)},
mw:function(){var u=$.lo()
u.j(0,"NetTango_InitWorkspace",U.p_())
u.j(0,"NetTango_InitAllWorkspaces",U.oZ())
u.j(0,"NetTango_ExportCode",U.oY())
u.j(0,"NetTango_Save",U.p1())
u.j(0,"NetTango_SaveAll",U.p0())},
lj:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{u=P.oP(a)
return u}catch(t){if(!!J.m(H.W(t)).$ikT)return b
else throw t}return b},
bk:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{u=P.my(a,null)
return u}catch(t){if(!!J.m(H.W(t)).$ikT)return b
else throw t}return b},
mG:function(a,b){if(a==null)return b
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
o4:function(a){var u={},t=P.G,s=new H.ar([P.i,t]),r=new H.ar([t,t])
u.a=0
U.l1(a,new U.iS(u,s,r),new U.iT(s,r))},
lZ:function(a,b){var u={}
u.a=a
U.m_(b,new U.iR(u))
return u.a},
o3:function(a,b){var u,t
for(u=J.F(b),t=[P.i,P.C];u.l();){J.d_(H.q(u.gn(u),"$io",t,"$ao"),"id",a)
if(typeof a!=="number")return a.E();++a}return a},
o2:function(a,b,c){var u,t,s=J.T(c)
if(!H.S(s.p(c,"action")))return
u=H.x(s.h(c,"action"))
if(a.p(0,u)){t=a.h(0,u)
s.j(c,"id",t)
U.lZ(b.h(0,t),H.q(c,"$io",[P.i,P.C],"$ao"))}},
o7:function(a){U.m_(a,U.oW())},
o5:function(a){var u="values",t=J.T(a)
if(!H.S(t.p(a,u))||!J.m(t.h(a,u)).$ij)return
t.j(a,u,J.nb(J.n6(t.h(a,u),new U.iU())))},
o6:function(a){var u,t,s
for(u=J.kK(a,new U.iV()),t=J.F(u.a),u=new H.dz(t,u.b,[H.e(u,0)]),s=[P.i,P.C];u.l();)U.o5(H.q(t.gn(t),"$io",s,"$ao"))},
oa:function(a){var u,t,s,r="program"
U.l1(a,new U.iX(),U.oX())
u=J.T(a)
if(!H.S(u.p(a,r))||!J.m(u.h(a,r)).$io)return
t=H.c(u.h(a,r),"$io")
s=J.T(t)
if(!H.S(s.p(t,"chains"))||!J.m(s.h(t,"chains")).$ij)return
U.o8(H.c(u.h(a,r),"$io"))},
o8:function(a){var u=J.H(a),t=J.kK(H.ap(u.h(a,"chains")),new U.iW())
u.j(a,"chains",P.bI(t,!0,H.e(t,0)))},
o9:function(a){var u=J.H(a),t=u.h(a,"x")
if(typeof t==="number")u.j(a,"x",J.lp(u.h(a,"x"),10))
t=u.h(a,"y")
if(typeof t==="number")u.j(a,"y",J.lp(u.h(a,"y"),10))},
l1:function(a,b,c){var u,t,s,r,q,p,o,n,m="blocks",l="children",k="clauses",j="program",i="chains",h=J.T(a)
if(!H.S(h.p(a,m))||!J.m(h.h(a,m)).$ij)return
for(u=J.F(H.a1(h.h(a,m),"$ih")),t=[P.i,P.C];u.l();)b.$1(H.q(u.gn(u),"$io",t,"$ao"))
for(u=J.F(H.a1(h.h(a,m),"$ih"));u.l();){s=H.q(u.gn(u),"$io",t,"$ao")
r=J.T(s)
if(H.S(r.p(s,l))&&!!J.m(r.h(s,l)).$ij)for(q=J.F(H.a1(r.h(s,l),"$ih"));q.l();){p=q.gn(q)
if(!!J.m(p).$io)c.$1(p)}if(H.S(r.p(s,k))&&!!J.m(r.h(s,k)).$ij)for(r=J.F(H.a1(r.h(s,k),"$ih"));r.l();){o=r.gn(r)
q=J.m(o)
if(!!q.$io&&H.S(q.p(o,l))&&!!J.m(q.h(o,l)).$ij)for(q=J.F(H.a1(q.h(o,l),"$ih"));q.l();)c.$1(H.c(q.gn(q),"$io"))}}if(!H.S(h.p(a,j))||!J.m(h.h(a,j)).$io)return
n=H.c(h.h(a,j),"$io")
h=J.T(n)
if(!H.S(h.p(n,i))||!J.m(h.h(n,i)).$ij)return
for(h=J.F(H.a1(h.h(n,i),"$ih"));h.l();)for(u=J.F(H.ap(h.gn(h)));u.l();)c.$1(H.c(u.gn(u),"$io"))},
m_:function(a,b){var u="params",t="properties",s=J.T(a)
if(H.S(s.p(a,u))&&!!J.m(s.h(a,u)).$ij)b.$1(H.ap(s.h(a,u)))
if(H.S(s.p(a,t))&&!!J.m(s.h(a,t)).$ij)b.$1(H.ap(s.h(a,t)))},
bW:function bW(a){var _=this
_.a=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""},
eQ:function eQ(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
eL:function eL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eM:function eM(a){this.a=a},
eN:function eN(a,b){this.a=a
this.b=b},
eO:function eO(a,b){this.a=a
this.b=b},
dm:function dm(){},
hd:function hd(a){var _=this
_.x=!1
_.y=1
_.a=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""},
i7:function i7(a){var _=this
_.dy=0
_.fr=10
_.x=!1
_.y=1
_.a=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""},
i8:function i8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i9:function i9(a,b){this.a=a
this.b=b},
ie:function ie(a,b){var _=this
_.x=a
_.a=_.y=null
_.b=b
_.d=_.c=null
_.e="int"
_.r=_.f=""},
ih:function ih(a){this.a=a},
ig:function ig(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(a){var _=this
_.a=_.x=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""},
fQ:function fQ(){},
fP:function fP(){},
fR:function fR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fS:function fS(){},
fO:function fO(){},
fT:function fT(){},
fN:function fN(){},
fU:function fU(a,b){this.a=a
this.b=b},
eW:function eW(){},
eY:function eY(a){this.a=a},
eZ:function eZ(){},
cl:function cl(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bx:function bx(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=""},
M:function M(a,b,c,d,e){var _=this
_.a=a
_.b=null
_.c=b
_.e=_.d=null
_.r=_.f=0
_.x=c
_.y=d
_.z=0
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=null
_.dy=!1
_.fr=e
_.id=_.go=_.fy=_.fx=null
_.k1=!1
_.k2=null},
f5:function f5(a){this.a=a},
f6:function f6(){},
f2:function f2(a){this.a=a},
f3:function f3(){},
f4:function f4(){},
f8:function f8(){},
f7:function f7(a){this.a=a},
aa:function aa(a,b){var _=this
_.c=a
_.e=_.d=null
_.a=b
_.b=null},
ab:function ab(a,b,c){var _=this
_.c=a
_.d=b
_.e=!1
_.a=c
_.b=null},
fc:function fc(){},
fd:function fd(){},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c},
fX:function fX(a,b){this.a=a
this.b=b},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
fW:function fW(a,b){this.a=a
this.b=b},
h_:function h_(){},
h2:function h2(a,b){this.a=a
this.b=b},
h0:function h0(){},
h1:function h1(a,b){this.a=a
this.b=b},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
fL:function fL(a){this.a=a
this.c=this.b=null},
d2:function d2(){},
i1:function i1(a,b){this.b=a
this.c=b},
hQ:function hQ(a,b){this.b=a
this.c=b},
d1:function d1(a,b){this.a=a
this.b=b
this.d=null},
f1:function f1(a){this.a=a},
f_:function f_(a){this.a=a},
f0:function f0(){},
hW:function hW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hV:function hV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(){},
eV:function eV(){this.c=this.b=null},
bX:function bX(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hD:function hD(a){this.b=a},
hE:function hE(a,b,c){this.b=a
this.c=b
this.d=c},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.d=b
_.e=c
_.x=_.r=_.f=null
_.y=!1},
ik:function ik(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
dw:function dw(a){this.d=this.a=null
this.e=a},
bA:function bA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.x=_.r=_.f=_.e=_.d=_.c=null
_.y=c
_.z=d
_.ch=_.Q=0
_.cx=e
_.cy=null
_.db=f
_.dx=g
_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=null
_.k2=h},
ff:function ff(a){this.a=a},
fg:function fg(){},
fh:function fh(a){this.a=a},
fl:function fl(a){this.a=a},
fm:function fm(){},
fi:function fi(a){this.a=a},
fj:function fj(){},
fk:function fk(){},
fn:function fn(){},
fe:function fe(){},
kl:function kl(a){this.a=a},
hh:function hh(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a,b){this.a=a
this.b=b},
iR:function iR(a){this.a=a},
iU:function iU(){},
iV:function iV(){},
iX:function iX(){},
iW:function iW(){}}
var w=[C,H,J,P,W,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kY.prototype={}
J.a.prototype={
S:function(a,b){return a===b},
gu:function(a){return H.bK(a)},
m:function(a){return"Instance of '"+H.f(H.dn(a))+"'"},
be:function(a,b){H.c(b,"$ikV")
throw H.b(P.lN(a,b.gdc(),b.gdf(),b.gdd()))}}
J.hf.prototype={
m:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$iR:1}
J.dd.prototype={
S:function(a,b){return null==b},
m:function(a){return"null"},
gu:function(a){return 0},
be:function(a,b){return this.dI(a,H.c(b,"$ikV"))},
$iI:1}
J.de.prototype={
gu:function(a){return 0},
m:function(a){return String(a)},
$inC:1}
J.i2.prototype={}
J.bO.prototype={}
J.bG.prototype={
m:function(a){var u=a[$.kF()]
if(u==null)return this.dL(a)
return"JavaScript function for "+H.f(J.Q(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaR:1}
J.bE.prototype={
k:function(a,b){H.v(b,H.e(a,0))
if(!!a.fixed$length)H.Y(P.r("add"))
a.push(b)},
a_:function(a,b,c){var u,t,s
H.q(c,"$ih",[H.e(a,0)],"$ah")
if(!!a.fixed$length)H.Y(P.r("insertAll"))
P.nV(b,0,a.length,"index")
u=J.m(c)
if(!u.$iu)c=u.L(c)
t=J.a5(c)
this.si(a,a.length+t)
if(typeof b!=="number")return b.E()
s=b+t
this.c9(a,s,a.length,a,b)
this.dB(a,b,s,c)},
ao:function(a,b){var u=H.e(a,0)
return new H.bp(a,H.d(b,{func:1,ret:P.R,args:[u]}),[u])},
K:function(a,b){var u
H.q(b,"$ih",[H.e(a,0)],"$ah")
if(!!a.fixed$length)H.Y(P.r("addAll"))
for(u=J.F(b);u.l();)a.push(u.gn(u))},
t:function(a,b){var u,t
H.d(b,{func:1,ret:-1,args:[H.e(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.b(P.aj(a))}},
H:function(a,b,c){var u=H.e(a,0)
return new H.at(a,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.H(a,b,null)},
M:function(a,b){return H.am(a,b,null,H.e(a,0))},
q:function(a,b){return this.h(a,b)},
gZ:function(a){if(a.length>0)return a[0]
throw H.b(H.db())},
gda:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.b(H.db())},
c9:function(a,b,c,d,e){var u,t,s,r,q,p=H.e(a,0)
H.q(d,"$ih",[p],"$ah")
if(!!a.immutable$list)H.Y(P.r("setRange"))
P.nU(b,c,a.length)
if(typeof c!=="number")return c.a2()
if(typeof b!=="number")return H.J(b)
u=c-b
if(u===0)return
P.al(e,"skipCount")
t=J.m(d)
if(!!t.$ij){H.q(d,"$ij",[p],"$aj")
s=e
r=d}else{r=t.M(d,e).I(0,!1)
s=0}p=J.H(r)
t=p.gi(r)
if(typeof t!=="number")return H.J(t)
if(s+u>t)throw H.b(H.nw())
if(s<b)for(q=u-1;q>=0;--q)a[b+q]=p.h(r,s+q)
else for(q=0;q<u;++q)a[b+q]=p.h(r,s+q)},
dB:function(a,b,c,d){return this.c9(a,b,c,d,0)},
cS:function(a,b){var u,t
H.d(b,{func:1,ret:P.R,args:[H.e(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.S(b.$1(a[t])))return!0
if(a.length!==u)throw H.b(P.aj(a))}return!1},
a1:function(a,b){var u=H.e(a,0)
H.d(b,{func:1,ret:P.G,args:[u,u]})
if(!!a.immutable$list)H.Y(P.r("sort"))
H.lU(a,b,u)},
D:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a8(a[u],b))return!0
return!1},
gF:function(a){return a.length===0},
gbW:function(a){return a.length!==0},
m:function(a){return P.he(a,"[","]")},
I:function(a,b){var u=H.z(a.slice(0),[H.e(a,0)])
return u},
L:function(a){return this.I(a,!0)},
gv:function(a){return new J.bv(a,a.length,[H.e(a,0)])},
gu:function(a){return H.bK(a)},
gi:function(a){return a.length},
si:function(a,b){var u="newLength"
if(!!a.fixed$length)H.Y(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.eI(b,u,null))
if(b<0)throw H.b(P.aV(b,0,null,u,null))
a.length=b},
h:function(a,b){H.l(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.bg(a,b))
if(b>=a.length||b<0)throw H.b(H.bg(a,b))
return a[b]},
j:function(a,b,c){H.l(b)
H.v(c,H.e(a,0))
if(!!a.immutable$list)H.Y(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.bg(a,b))
if(b>=a.length||b<0)throw H.b(H.bg(a,b))
a[b]=c},
$iu:1,
$ih:1,
$ij:1}
J.kX.prototype={}
J.bv.prototype={
gn:function(a){return this.d},
l:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.b(H.P(s))
u=t.c
if(u>=r){t.scz(null)
return!1}t.scz(s[u]);++t.c
return!0},
scz:function(a){this.d=H.v(a,H.e(this,0))},
$iaF:1}
J.c6.prototype={
at:function(a,b){var u
H.kz(b)
if(typeof b!=="number")throw H.b(H.aZ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbc(b)
if(this.gbc(a)===u)return 0
if(this.gbc(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbc:function(a){return a===0?1/a<0:a<0},
bh:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.b(P.r(""+a+".toInt()"))},
eN:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.b(P.r(""+a+".ceil()"))},
d8:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.b(P.r(""+a+".floor()"))},
aB:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.r(""+a+".round()"))},
fI:function(a,b){var u
if(b>20)throw H.b(P.aV(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbc(a))return"-"+u
return u},
m:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
E:function(a,b){if(typeof b!=="number")throw H.b(H.aZ(b))
return a+b},
ad:function(a,b){return a*b},
ah:function(a,b){return(a|0)===a?a/b|0:this.eD(a,b)},
eD:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.b(P.r("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
bM:function(a,b){var u
if(a>0)u=this.ez(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ez:function(a,b){return b>31?0:a>>>b},
G:function(a,b){if(typeof b!=="number")throw H.b(H.aZ(b))
return a>b},
$ibh:1,
$iac:1}
J.dc.prototype={$iG:1}
J.hg.prototype={}
J.bF.prototype={
cY:function(a,b){if(b<0)throw H.b(H.bg(a,b))
if(b>=a.length)H.Y(H.bg(a,b))
return a.charCodeAt(b)},
aW:function(a,b){if(b>=a.length)throw H.b(H.bg(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.b(P.eI(b,null,null))
return a+b},
f8:function(a,b){var u=b.length,t=a.length
if(u>t)return!1
return b===this.ca(a,t-u)},
dG:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
a6:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.dq(b,null))
if(b>c)throw H.b(P.dq(b,null))
if(c>a.length)throw H.b(P.dq(c,null))
return a.substring(b,c)},
ca:function(a,b){return this.a6(a,b,null)},
fH:function(a){return a.toLowerCase()},
aR:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.aW(r,0)===133){u=J.nF(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.cY(r,t)===133?J.nG(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
ad:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.E)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
eV:function(a,b,c){var u=a.length
if(c>u)throw H.b(P.aV(c,0,u,null,null))
return H.p5(a,b,c)},
at:function(a,b){var u
H.x(b)
if(typeof b!=="string")throw H.b(H.aZ(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
m:function(a){return a},
gu:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>=a.length||!1)throw H.b(H.bg(a,b))
return a[b]},
$ilR:1,
$ii:1}
H.u.prototype={}
H.as.prototype={
gv:function(a){var u=this
return new H.c7(u,u.gi(u),[H.K(u,"as",0)])},
gF:function(a){return this.gi(this)===0},
ao:function(a,b){return this.dK(0,H.d(b,{func:1,ret:P.R,args:[H.K(this,"as",0)]}))},
H:function(a,b,c){var u=H.K(this,"as",0)
return new H.at(this,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.H(a,b,null)},
c_:function(a,b){var u,t,s,r=this,q=H.K(r,"as",0)
H.d(b,{func:1,ret:q,args:[q,q]})
u=r.gi(r)
if(u===0)throw H.b(H.db())
t=r.q(0,0)
if(typeof u!=="number")return H.J(u)
s=1
for(;s<u;++s){t=b.$2(t,r.q(0,s))
if(u!==r.gi(r))throw H.b(P.aj(r))}return t},
M:function(a,b){return H.am(this,b,null,H.K(this,"as",0))},
I:function(a,b){var u,t,s=this,r=H.z([],[H.K(s,"as",0)])
C.a.si(r,s.gi(s))
u=0
while(!0){t=s.gi(s)
if(typeof t!=="number")return H.J(t)
if(!(u<t))break
C.a.j(r,u,s.q(0,u));++u}return r},
L:function(a){return this.I(a,!0)}}
H.iz.prototype={
gea:function(){var u,t=J.a5(this.a),s=this.c
if(s!=null){if(typeof t!=="number")return H.J(t)
u=s>t}else u=!0
if(u)return t
return s},
geA:function(){var u=J.a5(this.a),t=this.b
if(typeof t!=="number")return t.G()
if(typeof u!=="number")return H.J(u)
if(t>u)return u
return t},
gi:function(a){var u,t=J.a5(this.a),s=this.b
if(typeof s!=="number")return s.dz()
if(typeof t!=="number")return H.J(t)
if(s>=t)return 0
u=this.c
if(u==null||u>=t)return t-s
if(typeof u!=="number")return u.a2()
return u-s},
q:function(a,b){var u,t=this,s=t.geA()
if(typeof s!=="number")return s.E()
if(typeof b!=="number")return H.J(b)
u=s+b
if(b>=0){s=t.gea()
if(typeof s!=="number")return H.J(s)
s=u>=s}else s=!0
if(s)throw H.b(P.V(b,t,"index",null,null))
return J.aC(t.a,u)},
M:function(a,b){var u,t,s=this
P.al(b,"count")
u=s.b
if(typeof u!=="number")return u.E()
t=u+b
u=s.c
if(u!=null&&t>=u)return new H.d7(s.$ti)
return H.am(s.a,t,u,H.e(s,0))},
I:function(a,b){var u,t,s,r,q,p=this,o=p.b,n=p.a,m=J.H(n),l=m.gi(n),k=p.c
if(k!=null){if(typeof l!=="number")return H.J(l)
u=k<l}else u=!1
if(u)l=k
if(typeof l!=="number")return l.a2()
if(typeof o!=="number")return H.J(o)
t=l-o
if(t<0)t=0
u=p.$ti
if(b){s=H.z([],u)
C.a.si(s,t)}else{r=new Array(t)
r.fixed$length=Array
s=H.z(r,u)}for(q=0;q<t;++q){C.a.j(s,q,m.q(n,o+q))
u=m.gi(n)
if(typeof u!=="number")return u.a5()
if(u<l)throw H.b(P.aj(p))}return s},
L:function(a){return this.I(a,!0)}}
H.c7.prototype={
gn:function(a){return this.d},
l:function(){var u,t=this,s=t.a,r=J.H(s),q=r.gi(s)
if(t.b!=q)throw H.b(P.aj(s))
u=t.c
if(typeof q!=="number")return H.J(q)
if(u>=q){t.saF(null)
return!1}t.saF(r.q(s,u));++t.c
return!0},
saF:function(a){this.d=H.v(a,H.e(this,0))},
$iaF:1}
H.c8.prototype={
gv:function(a){return new H.aT(J.F(this.a),this.b,this.$ti)},
gi:function(a){return J.a5(this.a)},
q:function(a,b){return this.b.$1(J.aC(this.a,b))},
$ah:function(a,b){return[b]}}
H.c3.prototype={$iu:1,
$au:function(a,b){return[b]}}
H.aT.prototype={
l:function(){var u=this,t=u.b
if(t.l()){u.saF(u.c.$1(t.gn(t)))
return!0}u.saF(null)
return!1},
gn:function(a){return this.a},
saF:function(a){this.a=H.v(a,H.e(this,1))},
$aaF:function(a,b){return[b]}}
H.at.prototype={
gi:function(a){return J.a5(this.a)},
q:function(a,b){return this.b.$1(J.aC(this.a,b))},
$au:function(a,b){return[b]},
$aas:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.bp.prototype={
gv:function(a){return new H.dz(J.F(this.a),this.b,this.$ti)},
H:function(a,b,c){var u=H.e(this,0)
return new H.c8(this,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.H(a,b,null)}}
H.dz.prototype={
l:function(){var u,t
for(u=this.a,t=this.b;u.l();)if(H.S(t.$1(u.gn(u))))return!0
return!1},
gn:function(a){var u=this.a
return u.gn(u)}}
H.dv.prototype={
gv:function(a){return new H.iC(J.F(this.a),this.b,this.$ti)}}
H.fG.prototype={
gi:function(a){var u=J.a5(this.a),t=this.b
if(typeof u!=="number")return u.G()
if(u>t)return t
return u},
$iu:1}
H.iC.prototype={
l:function(){if(--this.b>=0)return this.a.l()
this.b=-1
return!1},
gn:function(a){var u
if(this.b<0)return
u=this.a
return u.gn(u)}}
H.cG.prototype={
M:function(a,b){P.al(b,"count")
return new H.cG(this.a,this.b+b,this.$ti)},
gv:function(a){return new H.ij(J.F(this.a),this.b,this.$ti)}}
H.d6.prototype={
gi:function(a){var u,t=J.a5(this.a)
if(typeof t!=="number")return t.a2()
u=t-this.b
if(u>=0)return u
return 0},
M:function(a,b){P.al(b,"count")
return new H.d6(this.a,this.b+b,this.$ti)},
$iu:1}
H.ij.prototype={
l:function(){var u,t
for(u=this.a,t=0;t<this.b;++t)u.l()
this.b=0
return u.l()},
gn:function(a){var u=this.a
return u.gn(u)}}
H.d7.prototype={
gv:function(a){return C.x},
gi:function(a){return 0},
q:function(a,b){throw H.b(P.aV(b,0,0,"index",null))},
H:function(a,b,c){H.d(b,{func:1,ret:c,args:[H.e(this,0)]})
return new H.d7([c])},
O:function(a,b){return this.H(a,b,null)},
M:function(a,b){P.al(b,"count")
return this},
I:function(a,b){var u,t=this.$ti
if(b)t=H.z([],t)
else{u=new Array(0)
u.fixed$length=Array
t=H.z(u,t)}return t},
L:function(a){return this.I(a,!0)}}
H.fI.prototype={
l:function(){return!1},
gn:function(a){return},
$iaF:1}
H.bC.prototype={
si:function(a,b){throw H.b(P.r("Cannot change the length of a fixed-length list"))},
k:function(a,b){H.v(b,H.a9(this,a,"bC",0))
throw H.b(P.r("Cannot add to a fixed-length list"))}}
H.cI.prototype={
gu:function(a){var u=this._hashCode
if(u!=null)return u
u=536870911&664597*J.bl(this.a)
this._hashCode=u
return u},
m:function(a){return'Symbol("'+H.f(this.a)+'")'},
S:function(a,b){if(b==null)return!1
return b instanceof H.cI&&this.a==b.a},
$iba:1}
H.fr.prototype={}
H.fq.prototype={
gF:function(a){return this.gi(this)===0},
m:function(a){return P.hy(this)},
j:function(a,b,c){H.v(b,H.e(this,0))
H.v(c,H.e(this,1))
return H.nm()},
ay:function(a,b,c,d){var u=this,t=P.cx(c,d)
u.t(0,new H.fs(u,H.d(b,{func:1,ret:[P.cz,c,d],args:[H.e(u,0),H.e(u,1)]}),t))
return t},
O:function(a,b){return this.ay(a,b,null,null)},
$io:1}
H.fs.prototype={
$2:function(a,b){var u=this.a,t=this.b.$2(H.v(a,H.e(u,0)),H.v(b,H.e(u,1)))
this.c.j(0,C.r.gfo(t),t.gB(t))},
$S:function(){var u=this.a
return{func:1,ret:P.I,args:[H.e(u,0),H.e(u,1)]}}}
H.ft.prototype={
gi:function(a){return this.a},
p:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.p(0,b))return
return this.cB(b)},
cB:function(a){return this.b[H.x(a)]},
t:function(a,b){var u,t,s,r,q=this,p=H.e(q,1)
H.d(b,{func:1,ret:-1,args:[H.e(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.v(q.cB(r),p))}},
gA:function(a){return new H.jb(this,[H.e(this,0)])}}
H.jb.prototype={
gv:function(a){var u=this.a.c
return new J.bv(u,u.length,[H.e(u,0)])},
gi:function(a){return this.a.c.length}}
H.hi.prototype={
gdc:function(){var u=this.a
return u},
gdf:function(){var u,t,s,r,q=this
if(q.c===1)return C.t
u=q.d
t=u.length-q.e.length-q.f
if(t===0)return C.t
s=[]
for(r=0;r<t;++r){if(r>=u.length)return H.L(u,r)
s.push(u[r])}s.fixed$length=Array
s.immutable$list=Array
return s},
gdd:function(){var u,t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.u
u=l.e
t=u.length
s=l.d
r=s.length-t-l.f
if(t===0)return C.u
q=P.ba
p=new H.ar([q,null])
for(o=0;o<t;++o){if(o>=u.length)return H.L(u,o)
n=u[o]
m=r+o
if(m<0||m>=s.length)return H.L(s,m)
p.j(0,new H.cI(n),s[m])}return new H.fr(p,[q,null])},
$ikV:1}
H.i5.prototype={
$2:function(a,b){var u
H.x(a)
u=this.a
u.b=u.b+"$"+H.f(a)
C.a.k(this.b,a)
C.a.k(this.c,b);++u.a},
$S:36}
H.iK.prototype={
a0:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hX.prototype={
m:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hl.prototype={
m:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.iN.prototype={
m:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kE.prototype={
$1:function(a){if(!!J.m(a).$ibB)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.ef.prototype={
m:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iX:1}
H.co.prototype={
m:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.bU(t==null?"unknown":t)+"'"},
$iaR:1,
gfL:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iD.prototype={}
H.iq.prototype={
m:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bU(u)+"'"}}
H.cm.prototype={
S:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cm))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gu:function(a){var u,t=this.c
if(t==null)u=H.bK(this.a)
else u=typeof t!=="object"?J.bl(t):H.bK(t)
return(u^H.bK(this.b))>>>0},
m:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.dn(u))+"'")}}
H.dx.prototype={
m:function(a){return this.a}}
H.fa.prototype={
m:function(a){return this.a}}
H.ic.prototype={
m:function(a){return"RuntimeError: "+H.f(this.a)}}
H.j1.prototype={
m:function(a){return"Assertion failed: "+P.bo(this.a)}}
H.ar.prototype={
gi:function(a){return this.a},
gF:function(a){return this.a===0},
gA:function(a){return new H.bH(this,[H.e(this,0)])},
gan:function(a){var u=this,t=H.e(u,0)
return H.lM(new H.bH(u,[t]),new H.hk(u),t,H.e(u,1))},
p:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.cu(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.cu(t,b)}else return s.fk(b)},
fk:function(a){var u=this.d
if(u==null)return!1
return this.bb(this.aY(u,J.bl(a)&0x3ffffff),a)>=0},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aZ(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aZ(r,b)
s=t==null?null:t.b
return s}else return q.fl(b)},
fl:function(a){var u,t,s=this.d
if(s==null)return
u=this.aY(s,J.bl(a)&0x3ffffff)
t=this.bb(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s,r,q,p,o=this
H.v(b,H.e(o,0))
H.v(c,H.e(o,1))
if(typeof b==="string"){u=o.b
o.ci(u==null?o.b=o.bE():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.ci(t==null?o.c=o.bE():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bE()
r=J.bl(b)&0x3ffffff
q=o.aY(s,r)
if(q==null)o.bL(s,r,[o.bF(b,c)])
else{p=o.bb(q,b)
if(p>=0)q[p].b=c
else q.push(o.bF(b,c))}}},
aA:function(a,b){var u=this.fm(b)
return u},
fm:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=a.gu(a)&0x3ffffff
t=q.aY(p,u)
s=q.bb(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.eE(r)
if(t.length===0)q.cA(p,u)
return r.b},
b8:function(a){var u=this
if(u.a>0){u.b=u.c=u.d=u.e=u.f=null
u.a=0
u.bD()}},
t:function(a,b){var u,t,s=this
H.d(b,{func:1,ret:-1,args:[H.e(s,0),H.e(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.b(P.aj(s))
u=u.c}},
ci:function(a,b,c){var u,t=this
H.v(b,H.e(t,0))
H.v(c,H.e(t,1))
u=t.aZ(a,b)
if(u==null)t.bL(a,b,t.bF(b,c))
else u.b=c},
bD:function(){this.r=this.r+1&67108863},
bF:function(a,b){var u,t=this,s=new H.ht(H.v(a,H.e(t,0)),H.v(b,H.e(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.bD()
return s},
eE:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.bD()},
bb:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a8(a[t].a,b))return t
return-1},
m:function(a){return P.hy(this)},
aZ:function(a,b){return a[b]},
aY:function(a,b){return a[b]},
bL:function(a,b,c){a[b]=c},
cA:function(a,b){delete a[b]},
cu:function(a,b){return this.aZ(a,b)!=null},
bE:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bL(t,u,t)
this.cA(t,u)
return t},
$ilK:1}
H.hk.prototype={
$1:function(a){var u=this.a
return u.h(0,H.v(a,H.e(u,0)))},
$S:function(){var u=this.a
return{func:1,ret:H.e(u,1),args:[H.e(u,0)]}}}
H.ht.prototype={}
H.bH.prototype={
gi:function(a){return this.a.a},
gF:function(a){return this.a.a===0},
gv:function(a){var u=this.a,t=new H.hu(u,u.r,this.$ti)
t.c=u.e
return t},
D:function(a,b){return this.a.p(0,b)}}
H.hu.prototype={
gn:function(a){return this.d},
l:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.aj(t))
else{t=u.c
if(t==null){u.scf(null)
return!1}else{u.scf(t.a)
u.c=u.c.c
return!0}}},
scf:function(a){this.d=H.v(a,H.e(this,0))},
$iaF:1}
H.ku.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.kv.prototype={
$2:function(a,b){return this.a(a,b)},
$S:32}
H.kw.prototype={
$1:function(a){return this.a(H.x(a))},
$S:28}
H.hj.prototype={
m:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ilR:1,
$inW:1}
H.cB.prototype={$icB:1}
H.bJ.prototype={$ibJ:1,$ilY:1}
H.di.prototype={
gi:function(a){return a.length},
$iN:1,
$aN:function(){}}
H.cC.prototype={
h:function(a,b){H.l(b)
H.be(b,a,a.length)
return a[b]},
j:function(a,b,c){H.l(b)
H.oG(c)
H.be(b,a,a.length)
a[b]=c},
$iu:1,
$au:function(){return[P.bh]},
$abC:function(){return[P.bh]},
$ay:function(){return[P.bh]},
$ih:1,
$ah:function(){return[P.bh]},
$ij:1,
$aj:function(){return[P.bh]}}
H.dj.prototype={
j:function(a,b,c){H.l(b)
H.l(c)
H.be(b,a,a.length)
a[b]=c},
$iu:1,
$au:function(){return[P.G]},
$abC:function(){return[P.G]},
$ay:function(){return[P.G]},
$ih:1,
$ah:function(){return[P.G]},
$ij:1,
$aj:function(){return[P.G]}}
H.hK.prototype={
h:function(a,b){H.l(b)
H.be(b,a,a.length)
return a[b]}}
H.hL.prototype={
h:function(a,b){H.l(b)
H.be(b,a,a.length)
return a[b]}}
H.hM.prototype={
h:function(a,b){H.l(b)
H.be(b,a,a.length)
return a[b]}}
H.hN.prototype={
h:function(a,b){H.l(b)
H.be(b,a,a.length)
return a[b]}}
H.hO.prototype={
h:function(a,b){H.l(b)
H.be(b,a,a.length)
return a[b]}}
H.dk.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
H.be(b,a,a.length)
return a[b]}}
H.hP.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
H.be(b,a,a.length)
return a[b]}}
H.cM.prototype={}
H.cN.prototype={}
H.cO.prototype={}
H.cP.prototype={}
P.j3.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.j2.prototype={
$1:function(a){var u,t
this.a.a=H.d(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:39}
P.j4.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.j5.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.kb.prototype={
dW:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bf(new P.kc(this,b),0),a)
else throw H.b(P.r("`setTimeout()` not found."))}}
P.kc.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.j7.prototype={}
P.a4.prototype={
a7:function(){},
a8:function(){},
saK:function(a){this.dy=H.q(a,"$ia4",this.$ti,"$aa4")},
sb2:function(a){this.fr=H.q(a,"$ia4",this.$ti,"$aa4")}}
P.cb.prototype={
gb_:function(){return this.c<4},
eb:function(){var u=this.r
if(u!=null)return u
return this.r=new P.Z($.O,[null])},
cL:function(a){var u,t
H.q(a,"$ia4",this.$ti,"$aa4")
u=a.fr
t=a.dy
if(u==null)this.scC(t)
else u.saK(t)
if(t==null)this.scH(u)
else t.sb2(u)
a.sb2(a)
a.saK(a)},
eB:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.e(p,0)
H.d(a,{func:1,ret:-1,args:[o]})
H.d(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.mm()
o=new P.dM($.O,c,p.$ti)
o.cM()
return o}u=$.O
t=d?1:0
s=p.$ti
r=new P.a4(p,u,t,s)
r.bp(a,b,c,d,o)
r.sb2(r)
r.saK(r)
H.q(r,"$ia4",s,"$aa4")
r.dx=p.c&1
q=p.e
p.scH(r)
r.saK(null)
r.sb2(q)
if(q==null)p.scC(r)
else q.saK(r)
if(p.d==p.e)P.mh(p.a)
return r},
en:function(a){var u=this,t=u.$ti
a=H.q(H.q(a,"$ia7",t,"$aa7"),"$ia4",t,"$aa4")
if(a.dy===a)return
t=a.dx
if((t&2)!==0)a.dx=t|4
else{u.cL(a)
if((u.c&2)===0&&u.d==null)u.bu()}return},
aV:function(){if((this.c&4)!==0)return new P.b9("Cannot add new events after calling close")
return new P.b9("Cannot add new events while doing an addStream")},
k:function(a,b){var u=this
H.v(b,H.e(u,0))
if(!u.gb_())throw H.b(u.aV())
u.b5(b)},
bS:function(a){var u,t=this
if((t.c&4)!==0)return t.r
if(!t.gb_())throw H.b(t.aV())
t.c|=4
u=t.eb()
t.ar()
return u},
cD:function(a){var u,t,s,r,q=this
H.d(a,{func:1,ret:-1,args:[[P.a0,H.e(q,0)]]})
u=q.c
if((u&2)!==0)throw H.b(P.bN("Cannot fire new event. Controller is already firing an event"))
t=q.d
if(t==null)return
s=u&1
q.c=u^3
for(;t!=null;){u=t.dx
if((u&1)===s){t.dx=u|2
a.$1(t)
u=t.dx^=1
r=t.dy
if((u&4)!==0)q.cL(t)
t.dx&=4294967293
t=r}else t=t.dy}q.c&=4294967293
if(q.d==null)q.bu()},
bu:function(){var u=this
if((u.c&4)!==0&&u.r.a===0)u.r.bs(null)
P.mh(u.b)},
scC:function(a){this.d=H.q(a,"$ia4",this.$ti,"$aa4")},
scH:function(a){this.e=H.q(a,"$ia4",this.$ti,"$aa4")},
$ilV:1,
$ipw:1,
$iaz:1,
$ibt:1}
P.k5.prototype={
gb_:function(){return P.cb.prototype.gb_.call(this)&&(this.c&2)===0},
aV:function(){if((this.c&2)!==0)return new P.b9("Cannot fire new event. Controller is already firing an event")
return this.dP()},
b5:function(a){var u,t=this
H.v(a,H.e(t,0))
u=t.d
if(u==null)return
if(u===t.e){t.c|=2
u.af(0,a)
t.c&=4294967293
if(t.d==null)t.bu()
return}t.cD(new P.k6(t,a))},
ar:function(){var u=this
if(u.d!=null)u.cD(new P.k7(u))
else u.r.bs(null)}}
P.k6.prototype={
$1:function(a){H.q(a,"$ia0",[H.e(this.a,0)],"$aa0").af(0,this.b)},
$S:function(){return{func:1,ret:P.I,args:[[P.a0,H.e(this.a,0)]]}}}
P.k7.prototype={
$1:function(a){H.q(a,"$ia0",[H.e(this.a,0)],"$aa0").cn()},
$S:function(){return{func:1,ret:P.I,args:[[P.a0,H.e(this.a,0)]]}}}
P.dD.prototype={
d_:function(a,b){if(a==null)a=new P.cE()
if(this.a.a!==0)throw H.b(P.bN("Future already completed"))
this.a3(a,b)},
bT:function(a){return this.d_(a,null)}}
P.dB.prototype={
cZ:function(a,b){var u
H.ch(b,{futureOr:1,type:H.e(this,0)})
u=this.a
if(u.a!==0)throw H.b(P.bN("Future already completed"))
u.bs(b)},
eS:function(a){return this.cZ(a,null)},
a3:function(a,b){this.a.ck(a,b)}}
P.k8.prototype={
a3:function(a,b){this.a.a3(a,b)}}
P.aY.prototype={
fp:function(a){if((this.c&15)!==6)return!0
return this.b.b.c4(H.d(this.d,{func:1,ret:P.R,args:[P.C]}),a.a,P.R,P.C)},
fi:function(a){var u=this.e,t=P.C,s={futureOr:1,type:H.e(this,1)},r=this.b.b
if(H.bS(u,{func:1,args:[P.C,P.X]}))return H.ch(r.fE(u,a.a,a.b,null,t,P.X),s)
else return H.ch(r.c4(H.d(u,{func:1,args:[P.C]}),a.a,null,t),s)}}
P.Z.prototype={
dn:function(a,b,c){var u,t,s,r=H.e(this,0)
H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.O
if(u!==C.d){H.d(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.ov(b,u)}t=new P.Z($.O,[c])
s=b==null?1:3
this.bq(new P.aY(t,s,a,b,[r,c]))
return t},
fG:function(a,b){return this.dn(a,null,b)},
du:function(a){var u,t
H.d(a,{func:1})
u=$.O
t=new P.Z(u,this.$ti)
if(u!==C.d)a=H.d(a,{func:1,ret:null})
u=H.e(this,0)
this.bq(new P.aY(t,8,a,null,[u,u]))
return t},
ey:function(a){H.v(a,H.e(this,0))
this.a=4
this.c=a},
bq:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.c(t.c,"$iaY")
t.c=a}else{if(s===2){u=H.c(t.c,"$iZ")
s=u.a
if(s<4){u.bq(a)
return}t.a=s
t.c=u.c}P.bQ(null,null,t.b,H.d(new P.jm(t,a),{func:1,ret:-1}))}},
cJ:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.c(p.c,"$iaY")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.c(p.c,"$iZ")
u=q.a
if(u<4){q.cJ(a)
return}p.a=u
p.c=q.c}o.a=p.b4(a)
P.bQ(null,null,p.b,H.d(new P.ju(o,p),{func:1,ret:-1}))}},
b3:function(){var u=H.c(this.c,"$iaY")
this.c=null
return this.b4(u)},
b4:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aX:function(a){var u,t,s=this,r=H.e(s,0)
H.ch(a,{futureOr:1,type:r})
u=s.$ti
if(H.eD(a,"$ib7",u,"$ab7"))if(H.eD(a,"$iZ",u,null))P.jp(a,s)
else P.m2(a,s)
else{t=s.b3()
H.v(a,r)
s.a=4
s.c=a
P.cc(s,t)}},
a3:function(a,b){var u,t=this
H.c(b,"$iX")
u=t.b3()
t.a=8
t.c=new P.ad(a,b)
P.cc(t,u)},
e5:function(a){return this.a3(a,null)},
bs:function(a){var u=this
H.ch(a,{futureOr:1,type:H.e(u,0)})
if(H.eD(a,"$ib7",u.$ti,"$ab7")){u.e_(a)
return}u.a=1
P.bQ(null,null,u.b,H.d(new P.jo(u,a),{func:1,ret:-1}))},
e_:function(a){var u=this,t=u.$ti
H.q(a,"$ib7",t,"$ab7")
if(H.eD(a,"$iZ",t,null)){if(a.a===8){u.a=1
P.bQ(null,null,u.b,H.d(new P.jt(u,a),{func:1,ret:-1}))}else P.jp(a,u)
return}P.m2(a,u)},
ck:function(a,b){this.a=1
P.bQ(null,null,this.b,H.d(new P.jn(this,a,b),{func:1,ret:-1}))},
$ib7:1}
P.jm.prototype={
$0:function(){P.cc(this.a,this.b)},
$S:2}
P.ju.prototype={
$0:function(){P.cc(this.b,this.a.a)},
$S:2}
P.jq.prototype={
$1:function(a){var u=this.a
u.a=0
u.aX(a)},
$S:16}
P.jr.prototype={
$2:function(a,b){H.c(b,"$iX")
this.a.a3(a,b)},
$1:function(a){return this.$2(a,null)},
$C:"$2",
$D:function(){return[null]},
$S:60}
P.js.prototype={
$0:function(){this.a.a3(this.b,this.c)},
$S:2}
P.jo.prototype={
$0:function(){var u=this.a,t=H.v(this.b,H.e(u,0)),s=u.b3()
u.a=4
u.c=t
P.cc(u,s)},
$S:2}
P.jt.prototype={
$0:function(){P.jp(this.b,this.a)},
$S:2}
P.jn.prototype={
$0:function(){this.a.a3(this.b,this.c)},
$S:2}
P.jx.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.dl(H.d(s.d,{func:1}),null)}catch(r){u=H.W(r)
t=H.bj(r)
if(o.d){s=H.c(o.a.a.c,"$iad").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.c(o.a.a.c,"$iad")
else q.b=new P.ad(u,t)
q.a=!0
return}if(!!J.m(n).$ib7){if(n instanceof P.Z&&n.a>=4){if(n.a===8){s=o.b
s.b=H.c(n.c,"$iad")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.fG(new P.jy(p),null)
s.a=!1}},
$S:0}
P.jy.prototype={
$1:function(a){return this.a},
$S:34}
P.jw.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.e(s,0)
q=H.v(n.c,r)
p=H.e(s,1)
n.a.b=s.b.b.c4(H.d(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.W(o)
t=H.bj(o)
s=n.a
s.b=new P.ad(u,t)
s.a=!0}},
$S:0}
P.jv.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.c(m.a.a.c,"$iad")
r=m.c
if(H.S(r.fp(u))&&r.e!=null){q=m.b
q.b=r.fi(u)
q.a=!1}}catch(p){t=H.W(p)
s=H.bj(p)
r=H.c(m.a.a.c,"$iad")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ad(t,s)
n.a=!0}},
$S:0}
P.dA.prototype={}
P.a6.prototype={
O:function(a,b){var u=H.K(this,"a6",0)
return new P.jL(H.d(b,{func:1,ret:null,args:[u]}),this,[u,null])},
gi:function(a){var u={},t=new P.Z($.O,[P.G])
u.a=0
this.W(new P.iu(u,this),!0,new P.iv(u,t),t.gcr())
return t},
L:function(a){var u=H.K(this,"a6",0),t=H.z([],[u]),s=new P.Z($.O,[[P.j,u]])
this.W(new P.iw(this,t),!0,new P.ix(s,t),s.gcr())
return s},
M:function(a,b){P.al(b,"count")
return new P.jW(b,this,[H.K(this,"a6",0)])}}
P.iu.prototype={
$1:function(a){H.v(a,H.K(this.b,"a6",0));++this.a.a},
$S:function(){return{func:1,ret:P.I,args:[H.K(this.b,"a6",0)]}}}
P.iv.prototype={
$0:function(){this.b.aX(this.a.a)},
$C:"$0",
$R:0,
$S:2}
P.iw.prototype={
$1:function(a){C.a.k(this.b,H.v(a,H.K(this.a,"a6",0)))},
$S:function(){return{func:1,ret:P.I,args:[H.K(this.a,"a6",0)]}}}
P.ix.prototype={
$0:function(){this.a.aX(this.b)},
$C:"$0",
$R:0,
$S:2}
P.a7.prototype={}
P.it.prototype={}
P.dE.prototype={
gu:function(a){return(H.bK(this.a)^892482866)>>>0},
S:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.dE&&b.a===this.a}}
P.dF.prototype={
bG:function(){return this.x.en(this)},
a7:function(){H.q(this,"$ia7",[H.e(this.x,0)],"$aa7")},
a8:function(){H.q(this,"$ia7",[H.e(this.x,0)],"$aa7")}}
P.a0.prototype={
bp:function(a,b,c,d,e){var u,t,s=this,r=H.K(s,"a0",0)
H.d(a,{func:1,ret:-1,args:[r]})
s.sdZ(H.d(a,{func:1,ret:null,args:[r]}))
u=b==null?P.oD():b
if(H.bS(u,{func:1,ret:-1,args:[P.C,P.X]}))s.b=s.d.dh(u,null,P.C,P.X)
else if(H.bS(u,{func:1,ret:-1,args:[P.C]}))s.b=H.d(u,{func:1,ret:null,args:[P.C]})
else H.Y(P.bV("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.d(c,{func:1,ret:-1})
t=c==null?P.mm():c
s.sel(H.d(t,{func:1,ret:-1}))},
bY:function(a){var u,t,s=this,r=s.e
if((r&8)!==0)return
u=(r+128|4)>>>0
s.e=u
if(r<128&&s.r!=null){t=s.r
if(t.a===1)t.a=3}if((r&4)===0&&(u&32)===0)s.cF(s.gb0())},
c2:function(a){var u=this,t=u.e
if((t&8)!==0)return
if(t>=128){t=u.e=t-128
if(t<128)if((t&64)!==0&&u.r.c!=null)u.r.bm(u)
else{t=(t&4294967291)>>>0
u.e=t
if((t&32)===0)u.cF(u.gb1())}}},
ab:function(a){var u=this,t=(u.e&4294967279)>>>0
u.e=t
if((t&8)===0)u.bv()
t=u.f
return t==null?$.eE():t},
bv:function(){var u,t=this,s=t.e=(t.e|8)>>>0
if((s&64)!==0){u=t.r
if(u.a===1)u.a=3}if((s&32)===0)t.sbH(null)
t.f=t.bG()},
af:function(a,b){var u,t=this,s=H.K(t,"a0",0)
H.v(b,s)
u=t.e
if((u&8)!==0)return
if(u<32)t.b5(b)
else t.br(new P.je(b,[s]))},
aU:function(a,b){var u=this.e
if((u&8)!==0)return
if(u<32)this.cN(a,b)
else this.br(new P.jg(a,b))},
cn:function(){var u=this,t=u.e
if((t&8)!==0)return
t=(t|2)>>>0
u.e=t
if(t<32)u.ar()
else u.br(C.F)},
a7:function(){},
a8:function(){},
bG:function(){return},
br:function(a){var u=this,t=[H.K(u,"a0",0)],s=H.q(u.r,"$icU",t,"$acU")
if(s==null){s=new P.cU(t)
u.sbH(s)}s.k(0,a)
t=u.e
if((t&64)===0){t=(t|64)>>>0
u.e=t
if(t<128)u.r.bm(u)}},
b5:function(a){var u,t=this,s=H.K(t,"a0",0)
H.v(a,s)
u=t.e
t.e=(u|32)>>>0
t.d.c5(t.a,a,s)
t.e=(t.e&4294967263)>>>0
t.bx((u&4)!==0)},
cN:function(a,b){var u=this,t=u.e,s=new P.j9(u,a,b)
if((t&1)!==0){u.e=(t|16)>>>0
u.bv()
t=u.f
if(t!=null&&t!==$.eE())t.du(s)
else s.$0()}else{s.$0()
u.bx((t&4)!==0)}},
ar:function(){var u,t=this,s=new P.j8(t)
t.bv()
t.e=(t.e|16)>>>0
u=t.f
if(u!=null&&u!==$.eE())u.du(s)
else s.$0()},
cF:function(a){var u,t=this
H.d(a,{func:1,ret:-1})
u=t.e
t.e=(u|32)>>>0
a.$0()
t.e=(t.e&4294967263)>>>0
t.bx((u&4)!==0)},
bx:function(a){var u,t,s=this,r=s.e
if((r&64)!==0&&s.r.c==null){r=s.e=(r&4294967231)>>>0
if((r&4)!==0)if(r<128){u=s.r
u=u==null||u.c==null}else u=!1
else u=!1
if(u){r=(r&4294967291)>>>0
s.e=r}}for(;!0;a=t){if((r&8)!==0){s.sbH(null)
return}t=(r&4)!==0
if(a===t)break
s.e=(r^32)>>>0
if(t)s.a7()
else s.a8()
r=(s.e&4294967263)>>>0
s.e=r}if((r&64)!==0&&r<128)s.r.bm(s)},
sdZ:function(a){this.a=H.d(a,{func:1,ret:-1,args:[H.K(this,"a0",0)]})},
sel:function(a){this.c=H.d(a,{func:1,ret:-1})},
sbH:function(a){this.r=H.q(a,"$icQ",[H.K(this,"a0",0)],"$acQ")},
$ia7:1,
$iaz:1,
$ibt:1}
P.j9.prototype={
$0:function(){var u,t,s,r=this.a,q=r.e
if((q&8)!==0&&(q&16)===0)return
r.e=(q|32)>>>0
u=r.b
q=this.b
t=P.C
s=r.d
if(H.bS(u,{func:1,ret:-1,args:[P.C,P.X]}))s.fF(u,q,this.c,t,P.X)
else s.c5(H.d(r.b,{func:1,ret:-1,args:[P.C]}),q,t)
r.e=(r.e&4294967263)>>>0},
$S:0}
P.j8.prototype={
$0:function(){var u=this.a,t=u.e
if((t&16)===0)return
u.e=(t|42)>>>0
u.d.c3(u.c)
u.e=(u.e&4294967263)>>>0},
$S:0}
P.jY.prototype={
W:function(a,b,c,d){H.d(a,{func:1,ret:-1,args:[H.e(this,0)]})
H.d(c,{func:1,ret:-1})
return this.a.eB(H.d(a,{func:1,ret:-1,args:[H.e(this,0)]}),d,c,!0===b)},
bd:function(a,b,c){return this.W(a,null,b,c)}}
P.br.prototype={
saO:function(a,b){this.a=H.c(b,"$ibr")},
gaO:function(a){return this.a}}
P.je.prototype={
bZ:function(a){H.q(a,"$ibt",this.$ti,"$abt").b5(this.b)}}
P.jg.prototype={
bZ:function(a){a.cN(this.b,this.c)},
$abr:function(){}}
P.jf.prototype={
bZ:function(a){a.ar()},
gaO:function(a){return},
saO:function(a,b){throw H.b(P.bN("No events after a done."))},
$ibr:1,
$abr:function(){}}
P.cQ.prototype={
bm:function(a){var u,t=this
H.q(a,"$ibt",t.$ti,"$abt")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.mF(new P.jM(t,a))
t.a=1}}
P.jM.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.q(this.b,"$ibt",[H.e(r,0)],"$abt")
t=r.b
s=t.gaO(t)
r.b=s
if(s==null)r.c=null
t.bZ(u)},
$S:2}
P.cU.prototype={
k:function(a,b){var u,t=this
H.c(b,"$ibr")
u=t.c
if(u==null)t.b=t.c=b
else{u.saO(0,b)
t.c=b}}}
P.dM.prototype={
cM:function(){var u=this
if((u.b&2)!==0)return
P.bQ(null,null,u.a,H.d(u.gex(),{func:1,ret:-1}))
u.b=(u.b|2)>>>0},
bY:function(a){this.b+=4},
c2:function(a){var u=this.b
if(u>=4){u=this.b=u-4
if(u<4&&(u&1)===0)this.cM()}},
ab:function(a){return $.eE()},
ar:function(){var u=this,t=u.b=(u.b&4294967293)>>>0
if(t>=4)return
u.b=(t|1)>>>0
u.a.c3(u.c)},
$ia7:1}
P.aP.prototype={
W:function(a,b,c,d){return this.cw(H.d(a,{func:1,ret:-1,args:[H.K(this,"aP",1)]}),d,H.d(c,{func:1,ret:-1}),!0===b)},
bd:function(a,b,c){return this.W(a,null,b,c)},
cw:function(a,b,c,d){var u=H.K(this,"aP",1)
return P.oh(this,H.d(a,{func:1,ret:-1,args:[u]}),b,H.d(c,{func:1,ret:-1}),d,H.K(this,"aP",0),u)},
bC:function(a,b){var u
H.v(a,H.K(this,"aP",0))
u=H.K(this,"aP",1)
H.q(b,"$iaz",[u],"$aaz").af(0,H.v(a,u))},
$aa6:function(a,b){return[b]}}
P.bd.prototype={
ce:function(a,b,c,d,e,f,g){var u=this
u.scO(u.x.a.bd(u.gee(),u.geg(),u.gei()))},
af:function(a,b){H.v(b,H.K(this,"bd",1))
if((this.e&2)!==0)return
this.dQ(0,b)},
aU:function(a,b){if((this.e&2)!==0)return
this.dR(a,b)},
a7:function(){var u=this.y
if(u==null)return
u.bY(0)},
a8:function(){var u=this.y
if(u==null)return
u.c2(0)},
bG:function(){var u=this.y
if(u!=null){this.scO(null)
return u.ab(0)}return},
ef:function(a){this.x.bC(H.v(a,H.K(this,"bd",0)),this)},
ej:function(a,b){H.c(b,"$iX")
H.q(this,"$iaz",[H.K(this.x,"aP",1)],"$aaz").aU(a,b)},
eh:function(){H.q(this,"$iaz",[H.K(this.x,"aP",1)],"$aaz").cn()},
scO:function(a){this.y=H.q(a,"$ia7",[H.K(this,"bd",0)],"$aa7")},
$aa7:function(a,b){return[b]},
$aaz:function(a,b){return[b]},
$abt:function(a,b){return[b]},
$aa0:function(a,b){return[b]}}
P.jL.prototype={
bC:function(a,b){var u,t,s,r
H.v(a,H.e(this,0))
H.q(b,"$iaz",[H.e(this,1)],"$aaz")
u=null
try{u=this.b.$1(a)}catch(r){t=H.W(r)
s=H.bj(r)
b.aU(t,s)
return}J.mW(b,u)}}
P.cT.prototype={$aa7:null,$aaz:null,$abt:null,$aa0:null,
$abd:function(a){return[a,a]}}
P.jW.prototype={
cw:function(a,b,c,d){var u,t,s=this,r=H.e(s,0)
H.d(a,{func:1,ret:-1,args:[r]})
H.d(c,{func:1,ret:-1})
u=$.O
t=d?1:0
t=new P.cT(s.b,s,u,t,s.$ti)
t.bp(a,b,c,d,r)
t.ce(s,a,b,c,d,r,r)
return t},
bC:function(a,b){var u,t
H.v(a,H.e(this,0))
u=this.$ti
b=H.q(H.q(b,"$iaz",u,"$aaz"),"$icT",u,"$acT")
t=b.dy
if(t>0){b.dy=t-1
return}b.af(0,a)},
$aa6:null,
$aaP:function(a){return[a,a]}}
P.ad.prototype={
m:function(a){return H.f(this.a)},
$ibB:1}
P.kf.prototype={$ips:1}
P.km.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cE():s
s=this.b
if(s==null)throw H.b(t)
u=H.b(t)
u.stack=s.m(0)
throw u},
$S:2}
P.jO.prototype={
c3:function(a){var u,t,s,r=null
H.d(a,{func:1,ret:-1})
try{if(C.d===$.O){a.$0()
return}P.me(r,r,this,a,-1)}catch(s){u=H.W(s)
t=H.bj(s)
P.cf(r,r,this,u,H.c(t,"$iX"))}},
c5:function(a,b,c){var u,t,s,r=null
H.d(a,{func:1,ret:-1,args:[c]})
H.v(b,c)
try{if(C.d===$.O){a.$1(b)
return}P.mg(r,r,this,a,b,-1,c)}catch(s){u=H.W(s)
t=H.bj(s)
P.cf(r,r,this,u,H.c(t,"$iX"))}},
fF:function(a,b,c,d,e){var u,t,s,r=null
H.d(a,{func:1,ret:-1,args:[d,e]})
H.v(b,d)
H.v(c,e)
try{if(C.d===$.O){a.$2(b,c)
return}P.mf(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.W(s)
t=H.bj(s)
P.cf(r,r,this,u,H.c(t,"$iX"))}},
eL:function(a,b){return new P.jQ(this,H.d(a,{func:1,ret:b}),b)},
bO:function(a){return new P.jP(this,H.d(a,{func:1,ret:-1}))},
eM:function(a,b){return new P.jR(this,H.d(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
dl:function(a,b){H.d(a,{func:1,ret:b})
if($.O===C.d)return a.$0()
return P.me(null,null,this,a,b)},
c4:function(a,b,c,d){H.d(a,{func:1,ret:c,args:[d]})
H.v(b,d)
if($.O===C.d)return a.$1(b)
return P.mg(null,null,this,a,b,c,d)},
fE:function(a,b,c,d,e,f){H.d(a,{func:1,ret:d,args:[e,f]})
H.v(b,e)
H.v(c,f)
if($.O===C.d)return a.$2(b,c)
return P.mf(null,null,this,a,b,c,d,e,f)},
dh:function(a,b,c,d){return H.d(a,{func:1,ret:b,args:[c,d]})}}
P.jQ.prototype={
$0:function(){return this.a.dl(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jP.prototype={
$0:function(){return this.a.c3(this.b)},
$S:0}
P.jR.prototype={
$1:function(a){var u=this.c
return this.a.c5(this.b,H.v(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jA.prototype={
gi:function(a){return this.a},
gF:function(a){return this.a===0},
gA:function(a){return new P.jB(this,[H.e(this,0)])},
p:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
return u==null?!1:u[b]!=null}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
return t==null?!1:t[b]!=null}else return this.e7(b)},
e7:function(a){var u=this.d
if(u==null)return!1
return this.ag(this.aJ(u,a),a)>=0},
h:function(a,b){var u,t,s
if(typeof b==="string"&&b!=="__proto__"){u=this.b
t=u==null?null:P.m3(u,b)
return t}else if(typeof b==="number"&&(b&1073741823)===b){s=this.c
t=s==null?null:P.m3(s,b)
return t}else return this.ed(0,b)},
ed:function(a,b){var u,t,s=this.d
if(s==null)return
u=this.aJ(s,b)
t=this.ag(u,b)
return t<0?null:u[t+1]},
j:function(a,b,c){var u,t,s,r,q,p=this
H.v(b,H.e(p,0))
H.v(c,H.e(p,1))
if(typeof b==="string"&&b!=="__proto__"){u=p.b
p.e3(u==null?p.b=P.m4():u,b,c)}else{t=p.d
if(t==null)t=p.d=P.m4()
s=H.mz(b)&1073741823
r=t[s]
if(r==null){P.l3(t,s,[b,c]);++p.a
p.e=null}else{q=p.ag(r,b)
if(q>=0)r[q+1]=c
else{r.push(b,c);++p.a
p.e=null}}}},
t:function(a,b){var u,t,s,r,q=this,p=H.e(q,0)
H.d(b,{func:1,ret:-1,args:[p,H.e(q,1)]})
u=q.ct()
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(H.v(r,p),q.h(0,r))
if(u!==q.e)throw H.b(P.aj(q))}},
ct:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
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
e3:function(a,b,c){var u=this
H.v(b,H.e(u,0))
H.v(c,H.e(u,1))
if(a[b]==null){++u.a
u.e=null}P.l3(a,b,c)},
aJ:function(a,b){return a[H.mz(b)&1073741823]}}
P.jD.prototype={
ag:function(a,b){var u,t,s
if(a==null)return-1
u=a.length
for(t=0;t<u;t+=2){s=a[t]
if(s==null?b==null:s===b)return t}return-1}}
P.jB.prototype={
gi:function(a){return this.a.a},
gF:function(a){return this.a.a===0},
gv:function(a){var u=this.a
return new P.jC(u,u.ct(),this.$ti)},
D:function(a,b){return this.a.p(0,b)}}
P.jC.prototype={
gn:function(a){return this.d},
l:function(){var u=this,t=u.b,s=u.c,r=u.a
if(t!==r.e)throw H.b(P.aj(r))
else if(s>=t.length){u.saG(null)
return!1}else{u.saG(t[s])
u.c=s+1
return!0}},
saG:function(a){this.d=H.v(a,H.e(this,0))},
$iaF:1}
P.jK.prototype={
gv:function(a){var u=this,t=new P.dW(u,u.r,u.$ti)
t.c=u.e
return t},
gi:function(a){return this.a},
D:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.c(u[b],"$icd")!=null}else{t=this.e6(b)
return t}},
e6:function(a){var u=this.d
if(u==null)return!1
return this.ag(this.aJ(u,a),a)>=0},
k:function(a,b){var u,t,s=this
H.v(b,H.e(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.co(u==null?s.b=P.l4():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.co(t==null?s.c=P.l4():t,b)}else return s.e2(0,b)},
e2:function(a,b){var u,t,s,r=this
H.v(b,H.e(r,0))
u=r.d
if(u==null)u=r.d=P.l4()
t=r.cs(b)
s=u[t]
if(s==null)u[t]=[r.by(b)]
else{if(r.ag(s,b)>=0)return!1
s.push(r.by(b))}return!0},
aA:function(a,b){var u=this
if(typeof b==="string"&&b!=="__proto__")return u.cK(u.b,b)
else if(typeof b==="number"&&(b&1073741823)===b)return u.cK(u.c,b)
else return u.e4(0,b)},
e4:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.aJ(r,b)
t=s.ag(u,b)
if(t<0)return!1
s.cq(u.splice(t,1)[0])
return!0},
co:function(a,b){H.v(b,H.e(this,0))
if(H.c(a[b],"$icd")!=null)return!1
a[b]=this.by(b)
return!0},
cK:function(a,b){var u
if(a==null)return!1
u=H.c(a[b],"$icd")
if(u==null)return!1
this.cq(u)
delete a[b]
return!0},
cp:function(){this.r=1073741823&this.r+1},
by:function(a){var u,t=this,s=new P.cd(H.v(a,H.e(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cp()
return s},
cq:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cp()},
cs:function(a){return J.bl(a)&1073741823},
aJ:function(a,b){return a[this.cs(b)]},
ag:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a8(a[t].a,b))return t
return-1}}
P.cd.prototype={}
P.dW.prototype={
gn:function(a){return this.d},
l:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.b(P.aj(t))
else{t=u.c
if(t==null){u.saG(null)
return!1}else{u.saG(H.v(t.a,H.e(u,0)))
u.c=u.c.b
return!0}}},
saG:function(a){this.d=H.v(a,H.e(this,0))},
$iaF:1}
P.hw.prototype={$iu:1,$ih:1,$ij:1}
P.y.prototype={
gv:function(a){return new H.c7(a,this.gi(a),[H.a9(this,a,"y",0)])},
q:function(a,b){return this.h(a,b)},
t:function(a,b){var u,t,s=this
H.d(b,{func:1,ret:-1,args:[H.a9(s,a,"y",0)]})
u=s.gi(a)
if(typeof u!=="number")return H.J(u)
t=0
for(;t<u;++t){b.$1(s.h(a,t))
if(u!==s.gi(a))throw H.b(P.aj(a))}},
gF:function(a){return this.gi(a)===0},
gbW:function(a){return!this.gF(a)},
D:function(a,b){var u,t=this.gi(a)
if(typeof t!=="number")return H.J(t)
u=0
for(;u<t;++u){if(J.a8(this.h(a,u),b))return!0
if(t!==this.gi(a))throw H.b(P.aj(a))}return!1},
ao:function(a,b){var u=H.a9(this,a,"y",0)
return new H.bp(a,H.d(b,{func:1,ret:P.R,args:[u]}),[u])},
H:function(a,b,c){var u=H.a9(this,a,"y",0)
return new H.at(a,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.H(a,b,null)},
M:function(a,b){return H.am(a,b,null,H.a9(this,a,"y",0))},
I:function(a,b){var u,t,s=this,r=H.z([],[H.a9(s,a,"y",0)])
C.a.si(r,s.gi(a))
u=0
while(!0){t=s.gi(a)
if(typeof t!=="number")return H.J(t)
if(!(u<t))break
C.a.j(r,u,s.h(a,u));++u}return r},
L:function(a){return this.I(a,!0)},
k:function(a,b){var u,t=this
H.v(b,H.a9(t,a,"y",0))
u=t.gi(a)
if(typeof u!=="number")return u.E()
t.si(a,u+1)
t.j(a,u,b)},
a1:function(a,b){var u=H.a9(this,a,"y",0)
H.d(b,{func:1,ret:P.G,args:[u,u]})
H.lU(a,b,u)},
m:function(a){return P.he(a,"[","]")}}
P.hx.prototype={}
P.hz.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:7}
P.a3.prototype={
t:function(a,b){var u,t,s=this
H.d(b,{func:1,ret:-1,args:[H.a9(s,a,"a3",0),H.a9(s,a,"a3",1)]})
for(u=J.F(s.gA(a));u.l();){t=u.gn(u)
b.$2(t,s.h(a,t))}},
ay:function(a,b,c,d){var u,t,s,r,q=this
H.d(b,{func:1,ret:[P.cz,c,d],args:[H.a9(q,a,"a3",0),H.a9(q,a,"a3",1)]})
u=P.cx(c,d)
for(t=J.F(q.gA(a));t.l();){s=t.gn(t)
r=b.$2(s,q.h(a,s))
u.j(0,C.r.gfo(r),r.gB(r))}return u},
O:function(a,b){return this.ay(a,b,null,null)},
p:function(a,b){return J.a_(this.gA(a),b)},
gi:function(a){return J.a5(this.gA(a))},
gF:function(a){return J.n3(this.gA(a))},
m:function(a){return P.hy(a)},
$io:1}
P.kd.prototype={
j:function(a,b,c){H.v(b,H.e(this,0))
H.v(c,H.e(this,1))
throw H.b(P.r("Cannot modify unmodifiable map"))}}
P.hA.prototype={
h:function(a,b){return this.a.h(0,b)},
j:function(a,b,c){this.a.j(0,H.v(b,H.e(this,0)),H.v(c,H.e(this,1)))},
p:function(a,b){return this.a.p(0,b)},
t:function(a,b){this.a.t(0,H.d(b,{func:1,ret:-1,args:[H.e(this,0),H.e(this,1)]}))},
gF:function(a){return this.a.a===0},
gi:function(a){return this.a.a},
gA:function(a){var u=this.a
return new H.bH(u,[H.e(u,0)])},
m:function(a){return P.hy(this.a)},
ay:function(a,b,c,d){var u=this.a
return u.ay(u,H.d(b,{func:1,ret:[P.cz,c,d],args:[H.e(this,0),H.e(this,1)]}),c,d)},
O:function(a,b){return this.ay(a,b,null,null)},
$io:1}
P.iO.prototype={}
P.bM.prototype={
I:function(a,b){var u,t,s,r=this,q=H.z([],[H.K(r,"bM",0)])
C.a.si(q,r.gi(r))
for(u=r.U(),u=P.cL(u,u.r,H.e(u,0)),t=0;u.l();t=s){s=t+1
C.a.j(q,t,u.d)}return q},
L:function(a){return this.I(a,!0)},
H:function(a,b,c){var u=H.K(this,"bM",0)
return new H.c3(this,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.H(a,b,null)},
m:function(a){return P.he(this,"{","}")},
M:function(a,b){return H.dr(this,b,H.K(this,"bM",0))},
q:function(a,b){var u,t,s,r="index"
if(b==null)H.Y(P.kL(r))
P.al(b,r)
for(u=this.U(),u=P.cL(u,u.r,H.e(u,0)),t=0;u.l();){s=u.d
if(b===t)return s;++t}throw H.b(P.V(b,this,r,null,t))}}
P.ii.prototype={$iu:1,$ih:1,$iav:1}
P.jT.prototype={
K:function(a,b){var u
for(u=J.F(H.q(b,"$ih",this.$ti,"$ah"));u.l();)this.k(0,u.gn(u))},
I:function(a,b){var u,t,s,r=this,q=H.z([],r.$ti)
C.a.si(q,r.a)
for(u=P.cL(r,r.r,H.e(r,0)),t=0;u.l();t=s){s=t+1
C.a.j(q,t,u.d)}return q},
L:function(a){return this.I(a,!0)},
H:function(a,b,c){var u=H.e(this,0)
return new H.c3(this,H.d(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.H(a,b,null)},
m:function(a){return P.he(this,"{","}")},
bX:function(a,b){var u,t=P.cL(this,this.r,H.e(this,0))
if(!t.l())return""
if(b===""){u=""
do u+=H.f(t.d)
while(t.l())}else{u=H.f(t.d)
for(;t.l();)u=u+b+H.f(t.d)}return u.charCodeAt(0)==0?u:u},
M:function(a,b){return H.dr(this,b,H.e(this,0))},
q:function(a,b){var u,t,s,r=this,q="index"
if(b==null)H.Y(P.kL(q))
P.al(b,q)
for(u=P.cL(r,r.r,H.e(r,0)),t=0;u.l();){s=u.d
if(b===t)return s;++t}throw H.b(P.V(b,r,q,null,t))},
$iu:1,
$ih:1,
$iav:1}
P.dX.prototype={}
P.e9.prototype={}
P.eq.prototype={}
P.jF.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.em(b):u}},
gi:function(a){return this.b==null?this.c.a:this.aH().length},
gF:function(a){return this.gi(this)===0},
gA:function(a){var u
if(this.b==null){u=this.c
return new H.bH(u,[H.e(u,0)])}return new P.jG(this)},
j:function(a,b,c){var u,t,s=this
if(s.b==null)s.c.j(0,b,c)
else if(s.p(0,b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.eF().j(0,b,c)},
p:function(a,b){if(this.b==null)return this.c.p(0,b)
return Object.prototype.hasOwnProperty.call(this.a,b)},
t:function(a,b){var u,t,s,r,q=this
H.d(b,{func:1,ret:-1,args:[P.i,,]})
if(q.b==null)return q.c.t(0,b)
u=q.aH()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.kh(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.b(P.aj(q))}},
aH:function(){var u=H.ap(this.c)
if(u==null)u=this.c=H.z(Object.keys(this.a),[P.i])
return u},
eF:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.cx(P.i,null)
t=p.aH()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.j(0,q,p.h(0,q))}if(r===0)C.a.k(t,null)
else C.a.si(t,0)
p.a=p.b=null
return p.c=u},
em:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.kh(this.a[a])
return this.b[a]=u},
$aa3:function(){return[P.i,null]},
$ao:function(){return[P.i,null]}}
P.jG.prototype={
gi:function(a){var u=this.a
return u.gi(u)},
q:function(a,b){var u=this.a
return u.b==null?u.gA(u).q(0,b):C.a.h(u.aH(),b)},
gv:function(a){var u=this.a
if(u.b==null){u=u.gA(u)
u=u.gv(u)}else{u=u.aH()
u=new J.bv(u,u.length,[H.e(u,0)])}return u},
D:function(a,b){return this.a.p(0,b)},
$au:function(){return[P.i]},
$aas:function(){return[P.i]},
$ah:function(){return[P.i]}}
P.fo.prototype={}
P.c0.prototype={}
P.hb.prototype={
m:function(a){return"unknown"}}
P.da.prototype={
d0:function(a){var u=this.e9(a,0,a.length)
return u==null?a:u},
e9:function(a,b,c){var u,t,s,r
for(u=b,t=null;u<c;++u){if(u>=a.length)return H.L(a,u)
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
default:s=null}if(s!=null){if(t==null)t=new P.aw("")
if(u>b)t.a+=C.f.a6(a,b,u)
t.a+=s
b=u+1}}if(t==null)return
if(c>b)t.a+=J.na(a,b,c)
r=t.a
return r.charCodeAt(0)==0?r:r},
$ac0:function(){return[P.i,P.i]}}
P.df.prototype={
m:function(a){var u=P.bo(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.hp.prototype={
m:function(a){return"Cyclic error in JSON stringify"}}
P.ho.prototype={
bU:function(a,b,c){var u=P.ou(b,this.geY().a)
return u},
d5:function(a,b){var u=P.ok(a,this.gf5().b,null)
return u},
gf5:function(){return C.K},
geY:function(){return C.J}}
P.hr.prototype={
$ac0:function(){return[P.C,P.i]}}
P.hq.prototype={
$ac0:function(){return[P.i,P.C]}}
P.jI.prototype={
dw:function(a){var u,t,s,r,q,p,o=a.length
for(u=J.ks(a),t=this.c,s=0,r=0;r<o;++r){q=u.aW(a,r)
if(q>92)continue
if(q<32){if(r>s)t.a+=C.f.a6(a,s,r)
s=r+1
t.a+=H.au(92)
switch(q){case 8:t.a+=H.au(98)
break
case 9:t.a+=H.au(116)
break
case 10:t.a+=H.au(110)
break
case 12:t.a+=H.au(102)
break
case 13:t.a+=H.au(114)
break
default:t.a+=H.au(117)
t.a+=H.au(48)
t.a+=H.au(48)
p=q>>>4&15
t.a+=H.au(p<10?48+p:87+p)
p=q&15
t.a+=H.au(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)t.a+=C.f.a6(a,s,r)
s=r+1
t.a+=H.au(92)
t.a+=H.au(q)}}if(s===0)t.a+=H.f(a)
else if(s<o)t.a+=u.a6(a,s,o)},
bw:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.b(new P.hp(a,null))}C.a.k(u,a)},
bk:function(a){var u,t,s,r,q=this
if(q.dv(a))return
q.bw(a)
try{u=q.b.$1(a)
if(!q.dv(u)){s=P.lJ(a,null,q.gcI())
throw H.b(s)}s=q.a
if(0>=s.length)return H.L(s,-1)
s.pop()}catch(r){t=H.W(r)
s=P.lJ(a,t,q.gcI())
throw H.b(s)}},
dv:function(a){var u,t,s=this
if(typeof a==="number"){if(!isFinite(a))return!1
s.c.a+=C.c.m(a)
return!0}else if(a===!0){s.c.a+="true"
return!0}else if(a===!1){s.c.a+="false"
return!0}else if(a==null){s.c.a+="null"
return!0}else if(typeof a==="string"){u=s.c
u.a+='"'
s.dw(a)
u.a+='"'
return!0}else{u=J.m(a)
if(!!u.$ij){s.bw(a)
s.fJ(a)
u=s.a
if(0>=u.length)return H.L(u,-1)
u.pop()
return!0}else if(!!u.$io){s.bw(a)
t=s.fK(a)
u=s.a
if(0>=u.length)return H.L(u,-1)
u.pop()
return t}else return!1}},
fJ:function(a){var u,t,s,r=this.c
r.a+="["
u=J.H(a)
if(u.gbW(a)){this.bk(u.h(a,0))
t=1
while(!0){s=u.gi(a)
if(typeof s!=="number")return H.J(s)
if(!(t<s))break
r.a+=","
this.bk(u.h(a,t));++t}}r.a+="]"},
fK:function(a){var u,t,s,r,q,p=this,o={},n=J.H(a)
if(n.gF(a)){p.c.a+="{}"
return!0}u=n.gi(a)
if(typeof u!=="number")return u.ad()
u*=2
t=new Array(u)
t.fixed$length=Array
s=o.a=0
o.b=!0
n.t(a,new P.jJ(o,t))
if(!o.b)return!1
n=p.c
n.a+="{"
for(r='"';s<u;s+=2,r=',"'){n.a+=r
p.dw(H.x(t[s]))
n.a+='":'
q=s+1
if(q>=u)return H.L(t,q)
p.bk(t[q])}n.a+="}"
return!0}}
P.jJ.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.j(u,t.a++,a)
C.a.j(u,t.a++,b)},
$S:7}
P.jH.prototype={
gcI:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.hS.prototype={
$2:function(a,b){var u,t,s
H.c(a,"$iba")
u=this.b
t=this.a
u.a+=t.a
s=u.a+=H.f(a.a)
u.a=s+": "
u.a+=P.bo(b)
t.a=", "},
$S:42}
P.R.prototype={}
P.b3.prototype={
k:function(a,b){return P.nn(C.e.E(this.a,H.c(b,"$ib5").gfj()),this.b)},
S:function(a,b){if(b==null)return!1
return b instanceof P.b3&&this.a===b.a&&this.b===b.b},
at:function(a,b){return C.e.at(this.a,H.c(b,"$ib3").a)},
cc:function(a,b){var u,t=this.a
if(Math.abs(t)<=864e13)u=!1
else u=!0
if(u)throw H.b(P.bV("DateTime is outside valid range: "+t))},
gu:function(a){var u=this.a
return(u^C.e.bM(u,30))&1073741823},
m:function(a){var u=this,t=P.no(H.nS(u)),s=P.d3(H.nQ(u)),r=P.d3(H.nM(u)),q=P.d3(H.nN(u)),p=P.d3(H.nP(u)),o=P.d3(H.nR(u)),n=P.np(H.nO(u))
if(u.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n}}
P.bh.prototype={}
P.b5.prototype={
ad:function(a,b){return new P.b5(C.e.aB(this.a*b))},
gfj:function(){return C.e.ah(this.a,1000)},
S:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a},
gu:function(a){return C.e.gu(this.a)},
at:function(a,b){return C.e.at(this.a,H.c(b,"$ib5").a)},
m:function(a){var u,t,s,r=new P.fF(),q=this.a
if(q<0)return"-"+new P.b5(0-q).m(0)
u=r.$1(C.e.ah(q,6e7)%60)
t=r.$1(C.e.ah(q,1e6)%60)
s=new P.fE().$1(q%1e6)
return""+C.e.ah(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.fE.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.fF.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bB.prototype={}
P.eJ.prototype={
m:function(a){return"Assertion failed"}}
P.cE.prototype={
m:function(a){return"Throw of null."}}
P.aQ.prototype={
gbA:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbz:function(){return""},
m:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.f(p)
t=q.gbA()+o+u
if(!q.a)return t
s=q.gbz()
r=P.bo(q.b)
return t+s+": "+r}}
P.dp.prototype={
gbA:function(){return"RangeError"},
gbz:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.hc.prototype={
gbA:function(){return"RangeError"},
gbz:function(){var u,t=H.l(this.b)
if(typeof t!=="number")return t.a5()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gi:function(a){return this.f}}
P.hR.prototype={
m:function(a){var u,t,s,r,q,p,o,n,m=this,l={},k=new P.aw("")
l.a=""
for(u=m.c,t=u.length,s=0,r="",q="";s<t;++s,q=", "){p=u[s]
k.a=r+q
r=k.a+=P.bo(p)
l.a=", "}m.d.t(0,new P.hS(l,k))
o=P.bo(m.a)
n=k.m(0)
u="NoSuchMethodError: method not found: '"+H.f(m.b.a)+"'\nReceiver: "+o+"\nArguments: ["+n+"]"
return u}}
P.iP.prototype={
m:function(a){return"Unsupported operation: "+this.a}}
P.iM.prototype={
m:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.b9.prototype={
m:function(a){return"Bad state: "+this.a}}
P.fp.prototype={
m:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bo(u)+"."}}
P.i0.prototype={
m:function(a){return"Out of Memory"},
$ibB:1}
P.dt.prototype={
m:function(a){return"Stack Overflow"},
$ibB:1}
P.fA.prototype={
m:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.jl.prototype={
m:function(a){return"Exception: "+this.a},
$ikT:1}
P.d9.prototype={
m:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.f(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.f.a6(r,0,75)+"...":r
return s+"\n"+u}else return s},
$ikT:1}
P.aR.prototype={}
P.G.prototype={}
P.h.prototype={
H:function(a,b,c){var u=H.K(this,"h",0)
return H.lM(this,H.d(b,{func:1,ret:c,args:[u]}),u,c)},
O:function(a,b){return this.H(a,b,null)},
ao:function(a,b){var u=H.K(this,"h",0)
return new H.bp(this,H.d(b,{func:1,ret:P.R,args:[u]}),[u])},
I:function(a,b){return P.bI(this,!0,H.K(this,"h",0))},
L:function(a){return this.I(a,!0)},
gi:function(a){var u,t=this.gv(this)
for(u=0;t.l();)++u
return u},
M:function(a,b){return H.dr(this,b,H.K(this,"h",0))},
gZ:function(a){var u=this.gv(this)
if(!u.l())throw H.b(H.db())
return u.gn(u)},
gap:function(a){var u,t=this.gv(this)
if(!t.l())throw H.b(H.db())
u=t.gn(t)
if(t.l())throw H.b(H.nx())
return u},
q:function(a,b){var u,t,s,r="index"
if(b==null)H.Y(P.kL(r))
P.al(b,r)
for(u=this.gv(this),t=0;u.l();){s=u.gn(u)
if(b===t)return s;++t}throw H.b(P.V(b,this,r,null,t))},
m:function(a){return P.nv(this,"(",")")}}
P.aF.prototype={}
P.j.prototype={$iu:1,$ih:1}
P.o.prototype={}
P.cz.prototype={}
P.I.prototype={
gu:function(a){return P.C.prototype.gu.call(this,this)},
m:function(a){return"null"}}
P.ac.prototype={}
P.C.prototype={constructor:P.C,$iC:1,
S:function(a,b){return this===b},
gu:function(a){return H.bK(this)},
m:function(a){return"Instance of '"+H.f(H.dn(this))+"'"},
be:function(a,b){H.c(b,"$ikV")
throw H.b(P.lN(this,b.gdc(),b.gdf(),b.gdd()))},
toString:function(){return this.m(this)}}
P.av.prototype={}
P.X.prototype={}
P.i.prototype={$ilR:1}
P.aw.prototype={
gi:function(a){return this.a.length},
m:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipg:1}
P.ba.prototype={}
W.w.prototype={$iw:1}
W.eG.prototype={
gi:function(a){return a.length}}
W.cj.prototype={
m:function(a){return String(a)},
$icj:1}
W.eH.prototype={
m:function(a){return String(a)}}
W.ck.prototype={$ick:1}
W.bw.prototype={$ibw:1}
W.by.prototype={$iby:1}
W.bz.prototype={
gi:function(a){return a.length}}
W.c1.prototype={
k:function(a,b){return a.add(H.c(b,"$ic1"))},
$ic1:1}
W.fw.prototype={
gi:function(a){return a.length}}
W.U.prototype={$iU:1}
W.c2.prototype={
bt:function(a,b){var u=$.mJ(),t=u[b]
if(typeof t==="string")return t
t=this.eC(a,b)
u[b]=t
return t},
eC:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.nq()+b
if(u in a)return u
return b},
bK:function(a,b,c,d){a.setProperty(b,c,d)},
gi:function(a){return a.length}}
W.fx.prototype={}
W.cp.prototype={$icp:1}
W.b1.prototype={}
W.b2.prototype={}
W.fy.prototype={
gi:function(a){return a.length}}
W.fz.prototype={
gi:function(a){return a.length}}
W.fB.prototype={
k:function(a,b){return a.add(b)},
h:function(a,b){return a[H.l(b)]},
gi:function(a){return a.length}}
W.b4.prototype={$ib4:1}
W.bm.prototype={
m:function(a){return String(a)},
$ibm:1}
W.d4.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.q(c,"$iag",[P.ac],"$aag")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[[P.ag,P.ac]]},
$iN:1,
$aN:function(){return[[P.ag,P.ac]]},
$ay:function(){return[[P.ag,P.ac]]},
$ih:1,
$ah:function(){return[[P.ag,P.ac]]},
$ij:1,
$aj:function(){return[[P.ag,P.ac]]},
$aD:function(){return[[P.ag,P.ac]]}}
W.d5.prototype={
m:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaC(a))+" x "+H.f(this.gaw(a))},
S:function(a,b){var u
if(b==null)return!1
u=J.m(b)
return!!u.$iag&&a.left===b.left&&a.top===b.top&&this.gaC(a)===u.gaC(b)&&this.gaw(a)===u.gaw(b)},
gu:function(a){return W.m7(C.c.gu(a.left),C.c.gu(a.top),C.c.gu(this.gaC(a)),C.c.gu(this.gaw(a)))},
gaw:function(a){return a.height},
gaC:function(a){return a.width},
$iag:1,
$aag:function(){return[P.ac]}}
W.fC.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.x(c)
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.i]},
$iN:1,
$aN:function(){return[P.i]},
$ay:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ij:1,
$aj:function(){return[P.i]},
$aD:function(){return[P.i]}}
W.fD.prototype={
k:function(a,b){return a.add(H.x(b))},
gi:function(a){return a.length}}
W.ja.prototype={
D:function(a,b){return J.a_(this.b,b)},
gF:function(a){return this.a.firstElementChild==null},
gi:function(a){return this.b.length},
h:function(a,b){return H.c(J.a2(this.b,H.l(b)),"$iB")},
j:function(a,b,c){H.l(b)
this.a.replaceChild(H.c(c,"$iB"),J.a2(this.b,b))},
si:function(a,b){throw H.b(P.r("Cannot resize element lists"))},
k:function(a,b){H.c(b,"$iB")
this.a.appendChild(b)
return b},
gv:function(a){var u=this.L(this)
return new J.bv(u,u.length,[H.e(u,0)])},
a1:function(a,b){H.d(b,{func:1,ret:P.G,args:[W.B,W.B]})
throw H.b(P.r("Cannot sort element lists"))},
b8:function(a){J.kG(this.a)},
$au:function(){return[W.B]},
$ay:function(){return[W.B]},
$ah:function(){return[W.B]},
$aj:function(){return[W.B]}}
W.aA.prototype={
gi:function(a){return this.a.length},
h:function(a,b){return H.v(C.j.h(this.a,H.l(b)),H.e(this,0))},
j:function(a,b,c){H.l(b)
H.v(c,H.e(this,0))
throw H.b(P.r("Cannot modify list"))},
si:function(a,b){throw H.b(P.r("Cannot modify list"))},
a1:function(a,b){var u=H.e(this,0)
H.d(b,{func:1,ret:P.G,args:[u,u]})
throw H.b(P.r("Cannot sort list"))},
$iaD:1}
W.B.prototype={
geK:function(a){return new W.jh(a)},
gcV:function(a){return new W.ja(a,a.children)},
gcW:function(a){return new W.ji(a)},
aa:function(a,b){this.d9(a,"beforeend",b,null,null)},
m:function(a){return a.localName},
d9:function(a,b,c,d,e){var u,t=this.T(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(t,a)
break
case"afterbegin":u=a.childNodes
a.insertBefore(t,u.length>0?u[0]:null)
break
case"beforeend":a.appendChild(t)
break
case"afterend":a.parentNode.insertBefore(t,a.nextSibling)
break
default:H.Y(P.bV("Invalid position "+b))}},
T:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lG
if(u==null){u=H.z([],[W.ak])
t=new W.dl(u)
C.a.k(u,W.m5(null))
C.a.k(u,W.m8())
$.lG=t
d=t}else d=u
u=$.lF
if(u==null){u=new W.er(d)
$.lF=u
c=u}else{u.a=d
c=u}}if($.bn==null){u=document
t=u.implementation.createHTMLDocument("")
$.bn=t
$.kS=t.createRange()
t=$.bn.createElement("base")
H.c(t,"$ick")
t.href=u.baseURI
$.bn.head.appendChild(t)}u=$.bn
if(u.body==null){t=u.createElement("body")
u.body=H.c(t,"$iby")}u=$.bn
if(!!this.$iby)s=u.body
else{s=u.createElement(a.tagName)
$.bn.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.M,a.tagName)){$.kS.selectNodeContents(s)
r=$.kS.createContextualFragment(b)}else{s.innerHTML=b
r=$.bn.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bn.body
if(s==null?u!=null:s!==u)J.d0(s)
c.c7(r)
document.adoptNode(r)
return r},
eX:function(a,b,c){return this.T(a,b,c,null)},
J:function(a,b){a.textContent=null
a.appendChild(this.T(a,b,null,null))},
$iB:1,
gdm:function(a){return a.tagName}}
W.fH.prototype={
$1:function(a){return!!J.m(H.c(a,"$iA")).$iB},
$S:19}
W.cr.prototype={
eo:function(a,b,c){H.d(b,{func:1,ret:-1})
H.d(c,{func:1,ret:-1,args:[W.bm]})
return a.remove(H.bf(b,0),H.bf(c,1))},
az:function(a){var u=new P.Z($.O,[null]),t=new P.dB(u,[null])
this.eo(a,new W.fJ(t),new W.fK(t))
return u}}
W.fJ.prototype={
$0:function(){this.a.eS(0)},
$C:"$0",
$R:0,
$S:2}
W.fK.prototype={
$1:function(a){this.a.bT(H.c(a,"$ibm"))},
$S:33}
W.n.prototype={$in:1}
W.k.prototype={
eH:function(a,b,c,d){H.d(c,{func:1,args:[W.n]})
if(c!=null)this.dY(a,b,c,!1)},
dY:function(a,b,c,d){return a.addEventListener(b,H.bf(H.d(c,{func:1,args:[W.n]}),1),!1)},
ep:function(a,b,c,d){return a.removeEventListener(b,H.bf(H.d(c,{func:1,args:[W.n]}),1),!1)},
$ik:1}
W.aq.prototype={$iaq:1}
W.cs.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iaq")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.aq]},
$iN:1,
$aN:function(){return[W.aq]},
$ay:function(){return[W.aq]},
$ih:1,
$ah:function(){return[W.aq]},
$ij:1,
$aj:function(){return[W.aq]},
$ics:1,
$aD:function(){return[W.aq]}}
W.h3.prototype={
gi:function(a){return a.length}}
W.ct.prototype={$ict:1}
W.h8.prototype={
k:function(a,b){return a.add(H.c(b,"$ict"))}}
W.h9.prototype={
gi:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.ha.prototype={
gi:function(a){return a.length}}
W.c4.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iA")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.A]},
$iN:1,
$aN:function(){return[W.A]},
$ay:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ij:1,
$aj:function(){return[W.A]},
$ic4:1,
$aD:function(){return[W.A]}}
W.c5.prototype={$ic5:1}
W.bD.prototype={$ibD:1}
W.dh.prototype={
m:function(a){return String(a)},
$idh:1}
W.hB.prototype={
az:function(a){return P.mB(a.remove(),null)}}
W.hC.prototype={
gi:function(a){return a.length}}
W.cA.prototype={$icA:1}
W.hF.prototype={
p:function(a,b){return P.aB(a.get(b))!=null},
h:function(a,b){return P.aB(a.get(H.x(b)))},
t:function(a,b){var u,t
H.d(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aB(t.value[1]))}},
gA:function(a){var u=H.z([],[P.i])
this.t(a,new W.hG(u))
return u},
gi:function(a){return a.size},
gF:function(a){return a.size===0},
j:function(a,b,c){throw H.b(P.r("Not supported"))},
$aa3:function(){return[P.i,null]},
$io:1,
$ao:function(){return[P.i,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.k(this.a,a)},
$S:8}
W.hH.prototype={
p:function(a,b){return P.aB(a.get(b))!=null},
h:function(a,b){return P.aB(a.get(H.x(b)))},
t:function(a,b){var u,t
H.d(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aB(t.value[1]))}},
gA:function(a){var u=H.z([],[P.i])
this.t(a,new W.hI(u))
return u},
gi:function(a){return a.size},
gF:function(a){return a.size===0},
j:function(a,b,c){throw H.b(P.r("Not supported"))},
$aa3:function(){return[P.i,null]},
$io:1,
$ao:function(){return[P.i,null]}}
W.hI.prototype={
$2:function(a,b){return C.a.k(this.a,a)},
$S:8}
W.aH.prototype={$iaH:1}
W.hJ.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iaH")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.aH]},
$iN:1,
$aN:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ih:1,
$ah:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$aD:function(){return[W.aH]}}
W.p.prototype={
gaP:function(a){var u,t,s,r,q,p
if(!!a.offsetX)return new P.b8(a.offsetX,a.offsetY,[P.ac])
else{u=a.target
if(!J.m(W.l5(u)).$iB)throw H.b(P.r("offsetX is only supported on elements"))
t=H.c(W.l5(u),"$iB")
u=a.clientX
s=a.clientY
r=[P.ac]
q=t.getBoundingClientRect()
p=q.left
q=q.top
H.q(new P.b8(p,q,r),"$ib8",r,"$ab8")
if(typeof u!=="number")return u.a2()
if(typeof s!=="number")return s.a2()
return new P.b8(C.c.bh(u-p),C.c.bh(s-q),r)}},
$ip:1}
W.ah.prototype={
gap:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.b(P.bN("No elements"))
if(t>1)throw H.b(P.bN("More than one element"))
return u.firstChild},
k:function(a,b){this.a.appendChild(H.c(b,"$iA"))},
K:function(a,b){var u,t,s,r
H.q(b,"$ih",[W.A],"$ah")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
j:function(a,b,c){var u
H.l(b)
u=this.a
u.replaceChild(H.c(c,"$iA"),C.j.h(u.childNodes,b))},
gv:function(a){var u=this.a.childNodes
return new W.d8(u,u.length,[H.a9(C.j,u,"D",0)])},
a1:function(a,b){H.d(b,{func:1,ret:P.G,args:[W.A,W.A]})
throw H.b(P.r("Cannot sort Node list"))},
gi:function(a){return this.a.childNodes.length},
si:function(a,b){throw H.b(P.r("Cannot set length on immutable List."))},
h:function(a,b){H.l(b)
return C.j.h(this.a.childNodes,b)},
$au:function(){return[W.A]},
$ay:function(){return[W.A]},
$ah:function(){return[W.A]},
$aj:function(){return[W.A]}}
W.A.prototype={
az:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
fB:function(a,b){var u,t
try{u=a.parentNode
J.mY(u,b,a)}catch(t){H.W(t)}return a},
e1:function(a){var u
for(;u=a.firstChild,u!=null;)a.removeChild(u)},
m:function(a){var u=a.nodeValue
return u==null?this.dJ(a):u},
eq:function(a,b,c){return a.replaceChild(b,c)},
$iA:1}
W.cD.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iA")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.A]},
$iN:1,
$aN:function(){return[W.A]},
$ay:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ij:1,
$aj:function(){return[W.A]},
$aD:function(){return[W.A]}}
W.aI.prototype={$iaI:1,
gi:function(a){return a.length}}
W.i3.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iaI")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.aI]},
$iN:1,
$aN:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]},
$aD:function(){return[W.aI]}}
W.ia.prototype={
p:function(a,b){return P.aB(a.get(b))!=null},
h:function(a,b){return P.aB(a.get(H.x(b)))},
t:function(a,b){var u,t
H.d(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aB(t.value[1]))}},
gA:function(a){var u=H.z([],[P.i])
this.t(a,new W.ib(u))
return u},
gi:function(a){return a.size},
gF:function(a){return a.size===0},
j:function(a,b,c){throw H.b(P.r("Not supported"))},
$aa3:function(){return[P.i,null]},
$io:1,
$ao:function(){return[P.i,null]}}
W.ib.prototype={
$2:function(a,b){return C.a.k(this.a,a)},
$S:8}
W.id.prototype={
gi:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.im.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iaK")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.aK]},
$iN:1,
$aN:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]},
$ij:1,
$aj:function(){return[W.aK]},
$aD:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.io.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iaL")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.aL]},
$iN:1,
$aN:function(){return[W.aL]},
$ay:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]},
$ij:1,
$aj:function(){return[W.aL]},
$aD:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gi:function(a){return a.length}}
W.ir.prototype={
p:function(a,b){return a.getItem(b)!=null},
h:function(a,b){return a.getItem(H.x(b))},
j:function(a,b,c){a.setItem(b,H.x(c))},
t:function(a,b){var u,t
H.d(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gA:function(a){var u=H.z([],[P.i])
this.t(a,new W.is(u))
return u},
gi:function(a){return a.length},
gF:function(a){return a.key(0)==null},
$aa3:function(){return[P.i,P.i]},
$io:1,
$ao:function(){return[P.i,P.i]}}
W.is.prototype={
$2:function(a,b){return C.a.k(this.a,a)},
$S:35}
W.cH.prototype={$icH:1}
W.ax.prototype={$iax:1}
W.du.prototype={
T:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bo(a,b,c,d)
u=W.nr("<table>"+H.f(b)+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ah(t).K(0,new W.ah(u))
return t}}
W.iA.prototype={
T:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bo(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.T(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gap(u)
s.toString
u=new W.ah(s)
r=u.gap(u)
t.toString
r.toString
new W.ah(t).K(0,new W.ah(r))
return t}}
W.iB.prototype={
T:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bo(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.T(u.createElement("table"),b,c,d)
u.toString
u=new W.ah(u)
s=u.gap(u)
t.toString
s.toString
new W.ah(t).K(0,new W.ah(s))
return t}}
W.cJ.prototype={
J:function(a,b){var u
a.textContent=null
J.kG(a.content)
u=this.T(a,b,null,null)
a.content.appendChild(u)},
$icJ:1}
W.aN.prototype={$iaN:1}
W.ay.prototype={$iay:1}
W.iE.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iay")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.ay]},
$iN:1,
$aN:function(){return[W.ay]},
$ay:function(){return[W.ay]},
$ih:1,
$ah:function(){return[W.ay]},
$ij:1,
$aj:function(){return[W.ay]},
$aD:function(){return[W.ay]}}
W.iF.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iaN")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.aN]},
$iN:1,
$aN:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]},
$ij:1,
$aj:function(){return[W.aN]},
$aD:function(){return[W.aN]}}
W.iG.prototype={
gi:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.iH.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iaO")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.aO]},
$iN:1,
$aN:function(){return[W.aO]},
$ay:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]},
$ij:1,
$aj:function(){return[W.aO]},
$aD:function(){return[W.aO]}}
W.iI.prototype={
gi:function(a){return a.length}}
W.bc.prototype={}
W.iQ.prototype={
m:function(a){return String(a)}}
W.iY.prototype={
gi:function(a){return a.length}}
W.ca.prototype={$ica:1,$im0:1}
W.bq.prototype={$ibq:1}
W.cK.prototype={$icK:1}
W.jc.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iU")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.U]},
$iN:1,
$aN:function(){return[W.U]},
$ay:function(){return[W.U]},
$ih:1,
$ah:function(){return[W.U]},
$ij:1,
$aj:function(){return[W.U]},
$aD:function(){return[W.U]}}
W.dH.prototype={
m:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
S:function(a,b){var u
if(b==null)return!1
u=J.m(b)
return!!u.$iag&&a.left===b.left&&a.top===b.top&&a.width===u.gaC(b)&&a.height===u.gaw(b)},
gu:function(a){return W.m7(C.c.gu(a.left),C.c.gu(a.top),C.c.gu(a.width),C.c.gu(a.height))},
gaw:function(a){return a.height},
gaC:function(a){return a.width}}
W.jz.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iaE")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.aE]},
$iN:1,
$aN:function(){return[W.aE]},
$ay:function(){return[W.aE]},
$ih:1,
$ah:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$aD:function(){return[W.aE]}}
W.e1.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iA")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.A]},
$iN:1,
$aN:function(){return[W.A]},
$ay:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$ij:1,
$aj:function(){return[W.A]},
$aD:function(){return[W.A]}}
W.jX.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iaM")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.aM]},
$iN:1,
$aN:function(){return[W.aM]},
$ay:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]},
$ij:1,
$aj:function(){return[W.aM]},
$aD:function(){return[W.aM]}}
W.k3.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.l(b)
H.c(c,"$iax")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[W.ax]},
$iN:1,
$aN:function(){return[W.ax]},
$ay:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$aD:function(){return[W.ax]}}
W.j6.prototype={
t:function(a,b){var u,t,s,r,q
H.d(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=this.gA(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.P)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gA:function(a){var u,t,s,r=this.a.attributes,q=H.z([],[P.i])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.L(r,t)
s=H.c(r[t],"$icK")
if(s.namespaceURI==null)C.a.k(q,s.name)}return q},
gF:function(a){return this.gA(this).length===0},
$aa3:function(){return[P.i,P.i]},
$ao:function(){return[P.i,P.i]}}
W.jh.prototype={
p:function(a,b){return this.a.hasAttribute(b)},
h:function(a,b){return this.a.getAttribute(H.x(b))},
j:function(a,b,c){this.a.setAttribute(b,H.x(c))},
gi:function(a){return this.gA(this).length}}
W.ji.prototype={
U:function(){var u,t,s,r,q=P.cy(P.i)
for(u=this.a.className.split(" "),t=u.length,s=0;s<t;++s){r=J.kJ(u[s])
if(r.length!==0)q.k(0,r)}return q},
c6:function(a){this.a.className=H.q(a,"$iav",[P.i],"$aav").bX(0," ")},
gi:function(a){return this.a.classList.length},
k:function(a,b){var u,t
H.x(b)
u=this.a.classList
t=u.contains(b)
u.add(b)
return!t},
aA:function(a,b){var u=this.a.classList,t=u.contains(b)
u.remove(b)
return t}}
W.dN.prototype={
W:function(a,b,c,d){var u=H.e(this,0)
H.d(a,{func:1,ret:-1,args:[u]})
H.d(c,{func:1,ret:-1})
return W.E(this.a,this.b,a,!1,u)},
bd:function(a,b,c){return this.W(a,null,b,c)}}
W.l2.prototype={}
W.bs.prototype={
W:function(a,b,c,d){var u,t,s,r=this,q=H.e(r,0)
H.d(a,{func:1,ret:-1,args:[q]})
H.d(c,{func:1,ret:-1})
u=r.$ti
t=new W.eh(new H.ar([[P.a6,q],[P.a7,q]]),u)
t.se8(new P.k5(null,t.geR(t),u))
for(q=r.a,q=new H.c7(q,q.gi(q),[H.e(q,0)]),s=r.c;q.l();)t.k(0,new W.dN(q.d,s,!1,u))
q=t.a
q.toString
return new P.j7(q,[H.e(q,0)]).W(a,b,c,d)},
bd:function(a,b,c){return this.W(a,null,b,c)},
ax:function(a){return this.W(a,null,null,null)}}
W.jj.prototype={
ab:function(a){var u=this
if(u.b==null)return
u.cQ()
u.b=null
u.sek(null)
return},
bY:function(a){if(this.b==null)return;++this.a
this.cQ()},
c2:function(a){var u=this
if(u.b==null||u.a<=0)return;--u.a
u.cP()},
cP:function(){var u=this,t=u.d
if(t!=null&&u.a<=0)J.mZ(u.b,u.c,t,!1)},
cQ:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.d(t,{func:1,args:[W.n]})
if(s)J.mX(u,this.c,t,!1)}},
sek:function(a){this.d=H.d(a,{func:1,args:[W.n]})}}
W.jk.prototype={
$1:function(a){return this.a.$1(H.c(a,"$in"))},
$S:27}
W.eh.prototype={
k:function(a,b){var u,t,s,r=this
H.q(b,"$ia6",r.$ti,"$aa6")
u=r.b
if(u.p(0,b))return
t=r.a
s=H.e(b,0)
t=H.d(t.geG(t),{func:1,ret:-1,args:[s]})
H.d(new W.jZ(r,b),{func:1,ret:-1})
u.j(0,b,W.E(b.a,b.b,t,!1,s))},
bS:function(a){var u,t
for(u=this.b,t=u.gan(u),t=new H.aT(J.F(t.a),t.b,[H.e(t,0),H.e(t,1)]);t.l();)t.a.ab(0)
u.b8(0)
this.a.bS(0)},
se8:function(a){this.a=H.q(a,"$ilV",this.$ti,"$alV")}}
W.jZ.prototype={
$0:function(){var u=this.a,t=u.b.aA(0,H.q(this.b,"$ia6",[H.e(u,0)],"$aa6"))
if(t!=null)t.ab(0)
return},
$S:0}
W.bP.prototype={
dU:function(a){var u
if($.dQ.a===0){for(u=0;u<262;++u)$.dQ.j(0,C.L[u],W.oK())
for(u=0;u<12;++u)$.dQ.j(0,C.l[u],W.oL())}},
as:function(a){return $.mU().D(0,W.cq(a))},
a9:function(a,b,c){var u=$.dQ.h(0,H.f(W.cq(a))+"::"+b)
if(u==null)u=$.dQ.h(0,"*::"+b)
if(u==null)return!1
return H.kq(u.$4(a,b,c,this))},
$iak:1}
W.D.prototype={
gv:function(a){return new W.d8(a,this.gi(a),[H.a9(this,a,"D",0)])},
k:function(a,b){H.v(b,H.a9(this,a,"D",0))
throw H.b(P.r("Cannot add to immutable List."))},
a1:function(a,b){var u=H.a9(this,a,"D",0)
H.d(b,{func:1,ret:P.G,args:[u,u]})
throw H.b(P.r("Cannot sort immutable List."))}}
W.dl.prototype={
k:function(a,b){C.a.k(this.a,H.c(b,"$iak"))},
as:function(a){return C.a.cS(this.a,new W.hU(a))},
a9:function(a,b,c){return C.a.cS(this.a,new W.hT(a,b,c))},
$iak:1}
W.hU.prototype={
$1:function(a){return H.c(a,"$iak").as(this.a)},
$S:20}
W.hT.prototype={
$1:function(a){return H.c(a,"$iak").a9(this.a,this.b,this.c)},
$S:20}
W.ea.prototype={
dV:function(a,b,c,d){var u,t,s
this.a.K(0,c)
u=b.ao(0,new W.jU())
t=b.ao(0,new W.jV())
this.b.K(0,u)
s=this.c
s.K(0,C.N)
s.K(0,t)},
as:function(a){return this.a.D(0,W.cq(a))},
a9:function(a,b,c){var u=this,t=W.cq(a),s=u.c
if(s.D(0,H.f(t)+"::"+b))return u.d.eI(c)
else if(s.D(0,"*::"+b))return u.d.eI(c)
else{s=u.b
if(s.D(0,H.f(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.f(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1},
$iak:1}
W.jU.prototype={
$1:function(a){return!C.a.D(C.l,H.x(a))},
$S:21}
W.jV.prototype={
$1:function(a){return C.a.D(C.l,H.x(a))},
$S:21}
W.k9.prototype={
a9:function(a,b,c){if(this.dS(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.ka.prototype={
$1:function(a){return"TEMPLATE::"+H.f(H.x(a))},
$S:22}
W.k4.prototype={
as:function(a){var u=J.m(a)
if(!!u.$icF)return!1
u=!!u.$it
if(u&&W.cq(a)==="foreignObject")return!1
if(u)return!0
return!1},
a9:function(a,b,c){if(b==="is"||C.f.dG(b,"on"))return!1
return this.as(a)},
$iak:1}
W.d8.prototype={
l:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scG(J.a2(u.a,t))
u.c=t
return!0}u.scG(null)
u.c=s
return!1},
gn:function(a){return this.d},
scG:function(a){this.d=H.v(a,H.e(this,0))},
$iaF:1}
W.jd.prototype={$ik:1,$im0:1}
W.ak.prototype={}
W.jS.prototype={$ipr:1}
W.er.prototype={
c7:function(a){new W.ke(this).$2(a,null)},
aL:function(a,b){if(b==null)J.d0(a)
else b.removeChild(a)},
ew:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.n1(a)
n=o.a.getAttribute("is")
H.c(a,"$iB")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.S(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.W(r)}t="element unprintable"
try{t=J.Q(a)}catch(r){H.W(r)}try{s=W.cq(a)
this.ev(H.c(a,"$iB"),b,p,t,s,H.c(o,"$io"),H.x(n))}catch(r){if(H.W(r) instanceof P.aQ)throw r
else{this.aL(a,b)
window
q="Removing corrupted element "+H.f(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ev:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aL(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.as(a)){o.aL(a,b)
window
u="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.a9(a,"is",g)){o.aL(a,b)
window
u="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gA(f)
t=H.z(u.slice(0),[H.e(u,0)])
for(s=f.gA(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.L(t,s)
r=t[s]
q=o.a
p=J.nc(r)
H.x(r)
if(!q.a9(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.f(e)+" "+r+'="'+H.f(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.m(a).$icJ)o.c7(a.content)},
$ipf:1}
W.ke.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ew(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aL(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.W(s)
r=H.c(u,"$iA")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.c(t,"$iA")}},
$S:48}
W.dG.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.eg.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.em.prototype={}
W.en.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
P.k_.prototype={
au:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.k(t,a)
C.a.k(this.b,null)
return s},
ac:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.m(a)
if(!!u.$ib3)return new Date(a.a)
if(!!u.$inW)throw H.b(P.dy("structured clone of RegExp"))
if(!!u.$iaq)return a
if(!!u.$ibw)return a
if(!!u.$ics)return a
if(!!u.$ic5)return a
if(!!u.$icB||!!u.$ibJ||!!u.$icA)return a
if(!!u.$io){t=q.au(a)
s=q.b
if(t>=s.length)return H.L(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.j(s,t,r)
u.t(a,new P.k1(p,q))
return p.a}if(!!u.$ij){t=q.au(a)
p=q.b
if(t>=p.length)return H.L(p,t)
r=p[t]
if(r!=null)return r
return q.eW(a,t)}if(!!u.$inC){t=q.au(a)
u=q.b
if(t>=u.length)return H.L(u,t)
r=p.b=u[t]
if(r!=null)return r
r={}
p.b=r
C.a.j(u,t,r)
q.fg(a,new P.k2(p,q))
return p.b}throw H.b(P.dy("structured clone of other type"))},
eW:function(a,b){var u,t=J.H(a),s=t.gi(a),r=new Array(s)
C.a.j(this.b,b,r)
if(typeof s!=="number")return H.J(s)
u=0
for(;u<s;++u)C.a.j(r,u,this.ac(t.h(a,u)))
return r}}
P.k1.prototype={
$2:function(a,b){this.a.a[a]=this.b.ac(b)},
$S:7}
P.k2.prototype={
$2:function(a,b){this.a.b[a]=this.b.ac(b)},
$S:7}
P.iZ.prototype={
au:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.k(t,a)
C.a.k(this.b,null)
return s},
ac:function(a){var u,t,s,r,q,p,o,n,m,l=this,k={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){u=a.getTime()
t=new P.b3(u,!0)
t.cc(u,!0)
return t}if(a instanceof RegExp)throw H.b(P.dy("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.mB(a,null)
s=Object.getPrototypeOf(a)
if(s===Object.prototype||s===null){r=l.au(a)
t=l.b
if(r>=t.length)return H.L(t,r)
q=k.a=t[r]
if(q!=null)return q
q=P.hv()
k.a=q
C.a.j(t,r,q)
l.ff(a,new P.j0(k,l))
return k.a}if(a instanceof Array){p=a
r=l.au(p)
t=l.b
if(r>=t.length)return H.L(t,r)
q=t[r]
if(q!=null)return q
o=J.H(p)
n=o.gi(p)
C.a.j(t,r,p)
if(typeof n!=="number")return H.J(n)
m=0
for(;m<n;++m)o.j(p,m,l.ac(o.h(p,m)))
return p}return a}}
P.j0.prototype={
$2:function(a,b){var u=this.a.a,t=this.b.ac(b)
J.d_(u,a,t)
return t},
$S:51}
P.k0.prototype={
fg:function(a,b){var u,t,s,r
H.d(b,{func:1,args:[,,]})
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.j_.prototype={
ff:function(a,b){var u,t,s,r
H.d(b,{func:1,args:[,,]})
for(u=Object.keys(a),t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s){r=u[s]
b.$2(r,a[r])}}}
P.fu.prototype={
cR:function(a){var u=$.mI().b
if(u.test(a))return a
throw H.b(P.eI(a,"value","Not a valid class token"))},
m:function(a){return this.U().bX(0," ")},
gv:function(a){var u=this.U()
return P.cL(u,u.r,H.e(u,0))},
H:function(a,b,c){var u,t
H.d(b,{func:1,ret:c,args:[P.i]})
u=this.U()
t=H.e(u,0)
return new H.c3(u,H.d(b,{func:1,ret:c,args:[t]}),[t,c])},
O:function(a,b){return this.H(a,b,null)},
gi:function(a){return this.U().a},
k:function(a,b){H.x(b)
this.cR(b)
return H.kq(this.fq(0,new P.fv(b)))},
aA:function(a,b){var u,t
this.cR(b)
u=this.U()
t=u.aA(0,b)
this.c6(u)
return t},
I:function(a,b){return this.U().I(0,!0)},
L:function(a){return this.I(a,!0)},
M:function(a,b){var u=this.U()
return H.dr(u,b,H.e(u,0))},
q:function(a,b){return this.U().q(0,b)},
fq:function(a,b){var u,t
H.d(b,{func:1,args:[[P.av,P.i]]})
u=this.U()
t=b.$1(u)
this.c6(u)
return t},
$au:function(){return[P.i]},
$abM:function(){return[P.i]},
$ah:function(){return[P.i]},
$aav:function(){return[P.i]}}
P.fv.prototype={
$1:function(a){return H.q(a,"$iav",[P.i],"$aav").k(0,this.a)},
$S:52}
P.h4.prototype={
gaq:function(){var u=this.b,t=H.K(u,"y",0),s=W.B
return new H.c8(new H.bp(u,H.d(new P.h5(),{func:1,ret:P.R,args:[t]}),[t]),H.d(new P.h6(),{func:1,ret:s,args:[t]}),[t,s])},
j:function(a,b,c){var u
H.l(b)
H.c(c,"$iB")
u=this.gaq()
J.n9(u.b.$1(J.aC(u.a,b)),c)},
si:function(a,b){var u=J.a5(this.gaq().a)
if(typeof u!=="number")return H.J(u)
if(b>=u)return
else if(b<0)throw H.b(P.bV("Invalid list length"))
this.fA(0,b,u)},
k:function(a,b){this.b.a.appendChild(H.c(b,"$iB"))},
D:function(a,b){return!1},
a1:function(a,b){H.d(b,{func:1,ret:P.G,args:[W.B,W.B]})
throw H.b(P.r("Cannot sort filtered list"))},
fA:function(a,b,c){var u=this.gaq()
u=H.dr(u,b,H.K(u,"h",0))
if(typeof c!=="number")return c.a2()
C.a.t(P.bI(H.o0(u,c-b,H.K(u,"h",0)),!0,null),new P.h7())},
b8:function(a){J.kG(this.b.a)},
gi:function(a){return J.a5(this.gaq().a)},
h:function(a,b){var u
H.l(b)
u=this.gaq()
return u.b.$1(J.aC(u.a,b))},
gv:function(a){var u=P.bI(this.gaq(),!1,W.B)
return new J.bv(u,u.length,[H.e(u,0)])},
$au:function(){return[W.B]},
$ay:function(){return[W.B]},
$ah:function(){return[W.B]},
$aj:function(){return[W.B]}}
P.h5.prototype={
$1:function(a){return!!J.m(H.c(a,"$iA")).$iB},
$S:19}
P.h6.prototype={
$1:function(a){return H.ms(H.c(a,"$iA"),"$iB")},
$S:59}
P.h7.prototype={
$1:function(a){return J.d0(a)},
$S:5}
P.kg.prototype={
$1:function(a){var u=this.b,t=H.ch(H.v(new P.j_([],[]).ac(this.a.result),this.c),{futureOr:1,type:H.e(u,0)})
u=u.a
if(u.a!==0)H.Y(P.bN("Future already completed"))
u.aX(t)},
$S:6}
P.cw.prototype={$icw:1}
P.hZ.prototype={
k:function(a,b){var u,t,s,r,q,p=null
try{u=null
if(p!=null)u=this.cg(a,b,p)
else u=this.dX(a,b)
r=P.on(H.c(u,"$ibL"),null)
return r}catch(q){t=H.W(q)
s=H.bj(q)
r=P.nt(t,s,null)
return r}},
cg:function(a,b,c){return a.add(new P.k0([],[]).ac(b))},
dX:function(a,b){return this.cg(a,b,null)}}
P.bL.prototype={$ibL:1}
P.aG.prototype={
h:function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.b(P.bV("property is not a String or num"))
return P.ki(this.a[b])},
j:function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.b(P.bV("property is not a String or num"))
this.a[b]=P.eC(c)},
gu:function(a){return 0},
S:function(a,b){if(b==null)return!1
return b instanceof P.aG&&this.a===b.a},
m:function(a){var u,t
try{u=String(this.a)
return u}catch(t){H.W(t)
u=this.dO(0)
return u}},
bQ:function(a,b){var u,t=this.a
if(b==null)u=null
else{u=H.e(b,0)
u=P.bI(new H.at(b,H.d(P.mv(),{func:1,ret:null,args:[u]}),[u,null]),!0,null)}return P.ki(t[a].apply(t,u))}}
P.hn.prototype={
$1:function(a){var u,t,s,r,q=this.a
if(q.p(0,a))return q.h(0,a)
u=J.m(a)
if(!!u.$io){t={}
q.j(0,a,t)
for(q=J.F(u.gA(a));q.l();){s=q.gn(q)
t[s]=this.$1(u.h(a,s))}return t}else if(!!u.$ih){r=[]
q.j(0,a,r)
C.a.K(r,u.H(a,this,null))
return r}else return P.eC(a)},
$S:5}
P.ae.prototype={
cU:function(a){var u=P.eC(null),t=H.e(a,0)
t=P.bI(new H.at(a,H.d(P.mv(),{func:1,ret:null,args:[t]}),[t,null]),!0,null)
return P.ki(this.a.apply(u,t))}}
P.cv.prototype={
cm:function(a){var u=this,t=a<0||a>=u.gi(u)
if(t)throw H.b(P.aV(a,0,u.gi(u),null,null))},
h:function(a,b){if(typeof b==="number"&&b===C.e.bh(b))this.cm(H.l(b))
return H.v(this.dM(0,b),H.e(this,0))},
j:function(a,b,c){H.v(c,H.e(this,0))
if(typeof b==="number"&&b===C.c.bh(b))this.cm(H.l(b))
this.cb(0,b,c)},
gi:function(a){var u=this.a.length
if(typeof u==="number"&&u>>>0===u)return u
throw H.b(P.bN("Bad JsArray length"))},
si:function(a,b){this.cb(0,"length",b)},
k:function(a,b){this.bQ("push",[H.v(b,H.e(this,0))])},
a1:function(a,b){var u=H.e(this,0)
H.d(b,{func:1,ret:P.G,args:[u,u]})
this.bQ("sort",[b])},
$iu:1,
$ih:1,
$ij:1}
P.kj.prototype={
$1:function(a){var u
H.c(a,"$iaR")
u=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.om,a,!1)
P.l6(u,$.kF(),a)
return u},
$S:5}
P.kk.prototype={
$1:function(a){return new this.a(a)},
$S:5}
P.kn.prototype={
$1:function(a){return new P.ae(a)},
$S:29}
P.ko.prototype={
$1:function(a){return new P.cv(a,[null])},
$S:30}
P.kp.prototype={
$1:function(a){return new P.aG(a)},
$S:31}
P.dT.prototype={}
P.kB.prototype={
$1:function(a){return this.a.cZ(0,H.ch(a,{futureOr:1,type:this.b}))},
$S:23}
P.kC.prototype={
$1:function(a){return this.a.bT(a)},
$S:23}
P.b8.prototype={
m:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
S:function(a,b){if(b==null)return!1
return!!J.m(b).$ib8&&this.a==b.a&&this.b==b.b},
gu:function(a){var u,t=J.bl(this.a),s=J.bl(this.b)
s=P.m6(P.m6(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
ad:function(a,b){var u,t,s=this,r=s.a
if(typeof r!=="number")return r.ad()
u=H.e(s,0)
r=H.v(r*b,u)
t=s.b
if(typeof t!=="number")return t.ad()
return new P.b8(r,H.v(t*b,u),s.$ti)}}
P.jN.prototype={}
P.ag.prototype={}
P.aS.prototype={$iaS:1}
P.hs.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.l(b)
H.c(c,"$iaS")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.aS]},
$ay:function(){return[P.aS]},
$ih:1,
$ah:function(){return[P.aS]},
$ij:1,
$aj:function(){return[P.aS]},
$aD:function(){return[P.aS]}}
P.aU.prototype={$iaU:1}
P.hY.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.l(b)
H.c(c,"$iaU")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.aU]},
$ay:function(){return[P.aU]},
$ih:1,
$ah:function(){return[P.aU]},
$ij:1,
$aj:function(){return[P.aU]},
$aD:function(){return[P.aU]}}
P.i4.prototype={
gi:function(a){return a.length}}
P.cF.prototype={$icF:1}
P.iy.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.l(b)
H.x(c)
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.i]},
$ay:function(){return[P.i]},
$ih:1,
$ah:function(){return[P.i]},
$ij:1,
$aj:function(){return[P.i]},
$aD:function(){return[P.i]}}
P.eK.prototype={
U:function(){var u,t,s,r,q=this.a.getAttribute("class"),p=P.cy(P.i)
if(q==null)return p
for(u=q.split(" "),t=u.length,s=0;s<t;++s){r=J.kJ(u[s])
if(r.length!==0)p.k(0,r)}return p},
c6:function(a){this.a.setAttribute("class",a.bX(0," "))}}
P.t.prototype={
gcW:function(a){return new P.eK(a)},
gcV:function(a){return new P.h4(a,new W.ah(a))},
T:function(a,b,c,d){var u,t,s,r,q,p=H.z([],[W.ak])
C.a.k(p,W.m5(null))
C.a.k(p,W.m8())
C.a.k(p,new W.k4())
c=new W.er(new W.dl(p))
u='<svg version="1.1">'+H.f(b)+"</svg>"
p=document
t=p.body
s=(t&&C.o).eX(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ah(s)
q=p.gap(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
d9:function(a,b,c,d,e){throw H.b(P.r("Cannot invoke insertAdjacentHtml on SVG."))},
$it:1}
P.aW.prototype={$iaW:1}
P.iJ.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){H.l(b)
H.c(c,"$iaW")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.aW]},
$ay:function(){return[P.aW]},
$ih:1,
$ah:function(){return[P.aW]},
$ij:1,
$aj:function(){return[P.aW]},
$aD:function(){return[P.aW]}}
P.dU.prototype={}
P.dV.prototype={}
P.e4.prototype={}
P.e5.prototype={}
P.ei.prototype={}
P.ej.prototype={}
P.eo.prototype={}
P.ep.prototype={}
P.eR.prototype={
gi:function(a){return a.length}}
P.eS.prototype={
p:function(a,b){return P.aB(a.get(b))!=null},
h:function(a,b){return P.aB(a.get(H.x(b)))},
t:function(a,b){var u,t
H.d(b,{func:1,ret:-1,args:[P.i,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aB(t.value[1]))}},
gA:function(a){var u=H.z([],[P.i])
this.t(a,new P.eT(u))
return u},
gi:function(a){return a.size},
gF:function(a){return a.size===0},
j:function(a,b,c){throw H.b(P.r("Not supported"))},
$aa3:function(){return[P.i,null]},
$io:1,
$ao:function(){return[P.i,null]}}
P.eT.prototype={
$2:function(a,b){return C.a.k(this.a,a)},
$S:8}
P.eU.prototype={
gi:function(a){return a.length}}
P.bY.prototype={}
P.i_.prototype={
gi:function(a){return a.length}}
P.dC.prototype={}
P.ip.prototype={
gi:function(a){return a.length},
h:function(a,b){H.l(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.V(b,a,null,null,null))
return P.aB(a.item(b))},
j:function(a,b,c){H.l(b)
H.c(c,"$io")
throw H.b(P.r("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(P.r("Cannot resize immutable List."))},
q:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[[P.o,,,]]},
$ay:function(){return[[P.o,,,]]},
$ih:1,
$ah:function(){return[[P.o,,,]]},
$ij:1,
$aj:function(){return[[P.o,,,]]},
$aD:function(){return[[P.o,,,]]}}
P.ed.prototype={}
P.ee.prototype={}
U.bW.prototype={
gX:function(){var u=this.b
return H.f(u.fr.b)+"-"+H.f(u.a)+"-"+H.f(this.a)},
gB:function(a){var u=this.c
return u==null?"":J.Q(u)},
sB:function(a,b){this.c=b==null?"":J.Q(b)},
gaS:function(a){return H.f(J.Q(this.c))+H.f(this.r)},
aE:function(a,b){var u,t,s,r=this,q=J.T(b)
if(H.S(q.p(b,"id"))){u=H.l(q.h(b,"id"))
r.a=u
t=r.b
s=t.z
if(typeof u!=="number")return u.dz()
if(u>=s)t.z=u+1}else u=r.a=r.b.z++
q.j(b,"id",u)
u=q.h(b,"type")
r.e=u==null?"num":J.Q(u)
u=q.h(b,"name")
r.f=u==null?"":J.Q(u)
u=q.h(b,"unit")
r.r=u==null?"":J.Q(u)
q=q.h(b,"default")
r.d=q
r.sB(0,q)},
b9:function(a,b){return U.kM(b,this.C())},
C:function(){var u=this
return P.l_(["id",u.a,"type",u.e,"name",u.f,"unit",u.r,"value",u.gB(u),"default",u.d])},
d2:function(){var u,t,s=this,r=document.createElement("div")
r.innerText=s.gaS(s)
r.classList.add("nt-attribute-value")
u=s.b
t=u.aD()+"-attribute"
r.classList.add(t)
u=u.cx
if(u!=null){t=r.style
t.color=u}u=W.p
W.E(r,"click",H.d(new U.eP(s,new U.eQ(s,r)),{func:1,ret:-1,args:[u]}),!1,u)
return r},
b6:function(a,b,c){var u,t,s,r,q,p,o,n=this,m="The type argument '",l="' is not a subtype of the type variable bound '",k="' of type variable 'T' in 'querySelectorAll'.",j=n.b.fr,i=j.r
i.classList.add("show")
u=j.x
j=u.style
t=""+b+"px"
j.top=t
u.classList.remove("small");(u&&C.b).J(u,"")
C.b.aa(u,'      <div class="nt-param-table">\n        <div class="nt-param-row">'+n.cl()+'</div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
j="#nt-param-label-"+n.gX()
t=document
s=H.c(t.querySelector(j),"$iw")
r=H.c(t.querySelector("#nt-param-"+n.gX()),"$ibD")
j=W.B
H.b_(j,j,m,l,k)
q=[j]
p=[j]
o=[W.p]
new W.bs(H.q(new W.aA(t.querySelectorAll(".nt-param-confirm"),q),"$iaD",p,"$aaD"),!1,"click",o).ax(new U.eL(n,r,i,c))
H.b_(j,j,m,l,k)
new W.bs(H.q(new W.aA(t.querySelectorAll(".nt-param-cancel"),q),"$iaD",p,"$aaD"),!1,"click",o).ax(new U.eM(i))
if(r!=null){r.focus()
if(s!=null){j=W.n
t={func:1,ret:-1,args:[j]}
W.E(r,"change",H.d(new U.eN(s,r),t),!1,j)
W.E(r,"input",H.d(new U.eO(s,r),t),!1,j)}}},
cl:function(){var u=this,t=new P.da().d0(H.x(u.gB(u)))
return'      <input class="nt-param-input" id="nt-param-'+u.gX()+'" type="text" value="'+t+'">\n      <span class="nt-param-unit">'+H.f(u.r)+"</span>\n    "}}
U.eQ.prototype={
$0:function(){var u=this.a
this.b.innerText=u.gaS(u)},
$S:2}
U.eP.prototype={
$1:function(a){var u,t,s,r,q,p,o,n
H.c(a,"$ip")
u=H.ms(W.l5(a.target),"$ib4")
t=u.offsetParent
s=C.c.aB(t.offsetLeft)
r=C.c.aB(u.offsetLeft)
q=J.T(a)
p=q.gaP(a).a
if(typeof p!=="number")return H.J(p)
o=C.c.aB(t.offsetTop)
n=C.c.aB(u.offsetTop)
q=q.gaP(a).b
if(typeof q!=="number")return H.J(q)
this.a.b6(C.c.d8(s+r+p),C.c.d8(o+n+q),this.b)},
$S:4}
U.eL.prototype={
$1:function(a){var u,t,s=this
H.c(a,"$ip")
u=s.b
if(u!=null)s.a.sB(0,u.value)
s.c.classList.remove("show")
s.d.$0()
u=s.a
t=u.b
t.fr.P(new U.bX(t.a,t.b,u.a,u.gB(u)))},
$S:4}
U.eM.prototype={
$1:function(a){var u,t
H.c(a,"$ip")
u=this.a.classList
t=u.contains("show")
u.remove("show")
return t},
$S:1}
U.eN.prototype={
$1:function(a){J.kI(this.a,this.b.value)},
$S:6}
U.eO.prototype={
$1:function(a){J.kI(this.a,this.b.value)},
$S:6}
U.dm.prototype={
cd:function(a,b){var u=J.H(b)
this.x=U.mG(u.h(b,"random"),!1)
this.y=U.bk(u.h(b,"step"),this.y)},
C:function(){var u=this.bn()
u.j(0,"random",this.x)
u.j(0,"step",this.y)
return u},
gB:function(a){return U.bk(this.c,0)},
sB:function(a,b){this.c=U.bk(b,0)},
gaS:function(a){var u=J.nd(this.gB(this),1)
if(C.f.f8(u,".0"))u=C.f.a6(u,0,u.length-2)
return u+H.f(this.r)},
cl:function(){var u=this
return'      <div class="nt-param-name">'+H.f(u.f)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+u.gX()+'" type="number" step="'+H.f(u.y)+'" value="'+H.f(u.gB(u))+'">\n        <span class="nt-param-unit">'+H.f(u.r)+"</span>\n      </div>\n    "}}
U.hd.prototype={
gB:function(a){return U.lj(this.c,0)},
sB:function(a,b){this.c=U.lj(b,0)}}
U.i7.prototype={
C:function(){var u=this.dN()
u.j(0,"min",this.dy)
u.j(0,"max",this.fr)
return u},
b6:function(a,b,c){var u,t,s,r,q,p=this,o=p.b.fr,n=o.r
n.classList.add("show")
u=o.x
o=u.style
t=""+b+"px"
o.top=t
u.classList.remove("small");(u&&C.b).J(u,"")
o=document
s=o.createElement("div")
s.className="nt-param-table"
u.appendChild(s)
C.b.aa(s,'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.f(p.f)+':\n            <label id="nt-param-label-'+p.gX()+'" for="nt-param-'+p.gX()+'">'+H.f(U.bk(p.c,0))+'</label>\n            <span class="nt-param-unit">'+H.f(p.r)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+p.gX()+'" type="range" value="'+H.f(U.bk(p.c,0))+'" min="'+H.f(p.dy)+'" max="'+H.f(p.fr)+'" step="'+H.f(p.y)+'">\n          </div>\n        </div>\n      ')
r=H.c(o.querySelector("#nt-param-label-"+p.gX()),"$iw")
q=H.c(o.querySelector("#nt-param-"+p.gX()),"$ibD")
if(q!=null&&r!=null){o=W.n
t={func:1,ret:-1,args:[o]}
W.E(q,"change",H.d(new U.i8(p,q,n,c),t),!1,o)
W.E(q,"input",H.d(new U.i9(r,q),t),!1,o)}}}
U.i8.prototype={
$1:function(a){var u,t=this,s=t.a
s.c=U.bk(t.b.value,0)
t.c.classList.remove("show")
t.d.$0()
u=s.b
u.fr.P(new U.bX(u.a,u.b,s.a,U.bk(s.c,0)))
a.stopPropagation()},
$S:6}
U.i9.prototype={
$1:function(a){J.kI(this.a,this.b.value)},
$S:6}
U.ie.prototype={
gB:function(a){return this.c},
sB:function(a,b){var u,t=this
t.c=b
u=J.kK(t.x,new U.ih(b))
if(u.gi(u)===1)t.y=t.e0(u.q(0,0))
else t.y=b},
gaS:function(a){return H.f(J.Q(this.y))+H.f(this.r)+" \u25be"},
b9:function(a,b){return U.lT(b,this.C())},
C:function(){var u=this.bn()
u.j(0,"values",this.x)
return u},
e0:function(a){var u="display",t=J.T(a)
return H.S(t.p(a,u))&&!J.a8(t.h(a,u),"")?t.h(a,u):t.h(a,"actual")},
b6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k=this,j="display",i=k.b.fr,h=i.r
h.classList.add("show")
u=i.x
i=u.style
t=""+b+"px"
i.top=t
u.classList.add("small");(u&&C.b).J(u,"")
i=document
s=i.createElement("div")
s.className="nt-param-table"
u.appendChild(s)
for(t=J.F(k.x),r=W.p,q={func:1,ret:-1,args:[r]};t.l();){p=t.gn(t)
o=i.createElement("div")
o.className="nt-param-row"
n=J.T(p)
m=H.S(n.p(p,j))&&!J.a8(n.h(p,j),"")?n.h(p,j):n.h(p,"actual")
l=i.createElement("div")
l.className="nt-select-option"
C.b.J(l,H.x(m))
if(J.a8(n.h(p,"actual"),k.c))l.classList.add("selected")
W.E(l,"click",H.d(new U.ig(k,p,h,c),q),!1,r)
o.appendChild(l)
s.appendChild(o)}}}
U.ih.prototype={
$1:function(a){var u=J.H(a)
return J.a8(u.h(a,"actual"),this.a)&&H.S(u.p(a,"display"))},
$S:9}
U.ig.prototype={
$1:function(a){var u,t,s=this
H.c(a,"$ip")
u=s.a
u.sB(0,J.a2(s.b,"actual"))
s.c.classList.remove("show")
s.d.$0()
t=u.b
t.fr.P(new U.bX(t.a,t.b,u.a,u.c))
a.stopPropagation()},
$S:4}
U.fM.prototype={
gaS:function(a){var u=this.x
return u!=null?u.m(0):""},
gB:function(a){return this.c},
sB:function(a,b){var u
this.c=b
u=this.x
if(u!=null)u.aN(b)},
C:function(){var u=this.bn()
if(!!J.m(u.h(0,"value")).$io)u.j(0,"expressionValue",U.c_(u.h(0,"value")))
return u},
b9:function(a,b){return U.kU(b,this.C())},
b6:function(a,b,c){var u,t,s,r,q,p,o=this,n=".nt-param-confirm",m="The type argument '",l="' is not a subtype of the type variable bound '",k="' of type variable 'T' in 'querySelectorAll'.",j="click",i=o.b.fr,h=i.r
h.classList.add("show")
u=i.x
i=u.style
t=""+b+"px"
i.top=t
u.classList.remove("small");(u&&C.b).J(u,"")
C.b.aa(u,'      <div class="nt-param-table">\n        <div class="nt-param-row">\n          <div class="nt-param-label">'+H.f(o.f)+':</div>\n        </div>\n        <div class="nt-param-row">\n          <div id="nt-expression-'+o.gX()+'" class="nt-expression-root"></div>\n        </div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
i=W.p
s=W.E(u,j,H.d(new U.fQ(),{func:1,ret:-1,args:[i]}),!1,i)
t=W.B
r=document
H.b_(t,t,m,l,k)
q=[t]
p=[t]
i=[i]
new W.bs(H.q(new W.aA(r.querySelectorAll(n),q),"$iaD",p,"$aaD"),!1,j,i).ax(new U.fR(o,s,h,c))
H.b_(t,t,m,l,k)
new W.bs(H.q(new W.aA(r.querySelectorAll(n),q),"$iaD",p,"$aaD"),!1,"mousedown",i).ax(new U.fS())
H.b_(t,t,m,l,k)
new W.bs(H.q(new W.aA(r.querySelectorAll(n),q),"$iaD",p,"$aaD"),!1,"mouseup",i).ax(new U.fT())
H.b_(t,t,m,l,k)
new W.bs(H.q(new W.aA(r.querySelectorAll(".nt-param-cancel"),q),"$iaD",p,"$aaD"),!1,j,i).ax(new U.fU(s,h))
i=o.x
p="#nt-expression-"+o.gX()
i.toString
i.b=r.querySelector(p)
i.c0()}}
U.fQ.prototype={
$1:function(a){var u,t
H.c(a,"$ip")
u=W.B
t=document
H.b_(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.aA(t.querySelectorAll(".nt-pulldown-menu"),[u])
u.t(u,new U.fP())},
$S:4}
U.fP.prototype={
$1:function(a){return J.d0(H.c(a,"$iB"))},
$S:24}
U.fR.prototype={
$1:function(a){var u,t,s,r=this
H.c(a,"$ip")
u=W.B
t=document
H.b_(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
if(t.querySelectorAll(".nt-expression.empty").length>0)return!1
u=r.a
u.c=u.x.c.C()
r.b.ab(0)
r.c.classList.remove("show")
r.d.$0()
s=U.c_(u.c)
t=u.b
t.fr.P(new U.bX(t.a,t.b,u.a,s))},
$S:1}
U.fS.prototype={
$1:function(a){var u,t
H.c(a,"$ip")
u=W.B
t=document
H.b_(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.aA(t.querySelectorAll(".nt-expression.empty"),[u])
u.t(u,new U.fO())},
$S:4}
U.fO.prototype={
$1:function(a){return J.lr(H.c(a,"$iB")).k(0,"warn")},
$S:25}
U.fT.prototype={
$1:function(a){var u,t
H.c(a,"$ip")
u=W.B
t=document
H.b_(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.aA(t.querySelectorAll(".nt-expression.empty"),[u])
u.t(u,new U.fN())},
$S:4}
U.fN.prototype={
$1:function(a){return J.lr(H.c(a,"$iB")).aA(0,"warn")},
$S:25}
U.fU.prototype={
$1:function(a){H.c(a,"$ip")
this.a.ab(0)
this.b.classList.remove("show")},
$S:4}
U.eW.prototype={
d7:function(){var u,t,s,r=[]
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)r.push(u[s].C())
return r},
a4:function(a){var u,t,s,r,q
try{t=this.a
if(t.length===0)return 0
s=P.G
r=H.e(t,0)
s=new H.at(t,H.d(new U.eY(a),{func:1,ret:s,args:[r]}),[r,s]).c_(0,new U.eZ())
return s}catch(q){u=H.W(q)
P.kA("here is the fail "+H.f(J.Q(u)))}},
Y:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s){r=u[s].Y(a)
if(r!=null)return r}return},
C:function(){var u,t,s,r,q="children",p=P.hv()
p.j(0,q,[])
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s){r=u[s]
J.bu(p.h(0,q),r.C())}return p},
sbP:function(a){this.a=H.q(a,"$ij",[U.M],"$aj")}}
U.eY.prototype={
$1:function(a){H.c(a,"$iM")
return a.a4(this.a)},
$S:38}
U.eZ.prototype={
$2:function(a,b){var u,t
H.l(a)
H.l(b)
u=a
t=b
if(typeof u!=="number")return u.E()
if(typeof t!=="number")return H.J(t)
return u+t},
$S:11}
U.cl.prototype={
fC:function(a){var u=this
u.f=u.e=u.d=u.c=u.b=u.a=null},
c1:function(a,b,c,d,e){var u=this
H.q(d,"$ih",[U.M],"$ah")
u.fC(0)
u.a=a
u.b=e==null?"block-children":"block-clause"
u.c=c
u.e=b
u.d=e
u.saT(d)},
saT:function(a){this.r=H.q(a,"$ih",[U.M],"$ah")}}
U.bx.prototype={
bN:function(a,b){var u,t,s,r,q,p,o=this
a.insertRule("."+b+"-color { background-color: "+H.f(o.a)+"; }",0)
a.insertRule("."+b+"-attribute { color: "+H.f(o.a)+"; }",0)
u="."+b+" { "
t="color: "+H.f(o.b)+"; border-color: "+H.f(o.c)+"; "
s=o.d
r=s===""?"":"font-weight: "+H.f(s)+";"
s=o.e
q=s===""?"":"font-size: "+H.f(s)+";"
s=o.f
p="font-family: "+H.f(s===""?"Poppins, sans-serif":s)+";"
a.insertRule(u+C.f.aR(t+C.f.aR(r+" "+q+" "+p))+" }",0)}}
U.M.prototype={
cX:function(a){var u=this,t=U.kN(u.fr,u.a,u.c)
u.cv(0,t)
return t},
cv:function(a,b){var u,t,s,r,q=this
b.c=q.c
b.d=q.d
b.e=q.e
b.cx=q.cx
b.cy=q.cy
b.db=q.db
b.dx=q.dx
b.dy=q.dy
for(u=q.x,u=u.gan(u),u=new H.aT(J.F(u.a),u.b,[H.e(u,0),H.e(u,1)]),t=b.x;u.l();){s=u.a.b9(0,b)
t.j(0,s.a,s)}for(u=q.y,u=u.gan(u),u=new H.aT(J.F(u.a),u.b,[H.e(u,0),H.e(u,1)]),t=b.y;u.l();){r=u.a.b9(0,b)
t.j(0,r.a,r)}},
C:function(){var u,t,s,r,q,p=this,o="children",n="properties",m=P.hv()
m.j(0,"id",p.a)
m.j(0,"instanceId",p.b)
m.j(0,"action",p.c)
m.j(0,"type",p.d)
m.j(0,"format",p.e)
m.j(0,"required",p.dy)
m.j(0,"x",p.f)
m.j(0,"y",p.r)
if(p.Q!=null){m.j(0,o,[])
for(u=p.Q.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s){r=u[s]
J.bu(m.h(0,o),r.C())}}if(p.ch!=null){m.j(0,"clauses",[])
for(u=p.ch,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s){q=u[s]
J.bu(m.h(0,"clauses"),q.C())}}u=p.x
if(u.a!==0){m.j(0,"params",[])
for(u=u.gan(u),u=new H.aT(J.F(u.a),u.b,[H.e(u,0),H.e(u,1)]);u.l();){t=u.a
J.bu(m.h(0,"params"),t.C())}}u=p.y
if(u.a!==0){m.j(0,n,[])
for(u=u.gan(u),u=new H.aT(J.F(u.a),u.b,[H.e(u,0),H.e(u,1)]);u.l();){t=u.a
J.bu(m.h(0,n),t.C())}}return m},
a4:function(a){var u,t,s=this.a==a?1:0,r=this.Q
if(r!=null){r=r.a4(a)
if(typeof r!=="number")return H.J(r)
s+=r}r=this.ch
if(r!=null&&r.length!==0){u=P.G
r.toString
t=H.e(r,0)
u=new H.at(r,H.d(new U.f5(a),{func:1,ret:u,args:[t]}),[t,u]).c_(0,new U.f6())
if(typeof u!=="number")return H.J(u)
s+=u}return s},
Y:function(a){var u,t,s,r,q=this
if(q.b===a)return q
u=q.Q
if(u!=null){t=u.Y(a)
if(t!=null)return t}u=q.ch
if(u!=null)for(s=u.length,r=0;r<u.length;u.length===s||(0,H.P)(u),++r){t=u[r].Y(a)
if(t!=null)return t}return},
aD:function(){var u=this
if(u.dy)return H.f(u.fr.b)+"-block-starter"
if(u.Q!=null||u.ch!=null)return H.f(u.fr.b)+"-block-container"
return H.f(u.fr.b)+"-block-command"},
V:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c="dragover"
d.fx=b
d.go=a
u=document
t=u.createElement("div")
d.fy=t
t.classList.add("nt-block")
s=d.aD()
d.fy.classList.add(s)
if(d.Q!=null||d.ch!=null)d.fy.classList.add("nt-block-with-clauses")
U.kQ(d,d.fy)
r=u.createElement("div")
r.classList.add("nt-block-left-bar")
t=s+"-color"
r.classList.add(t)
t=d.cx
if(t!=null){q=r.style
q.backgroundColor=t}t=r.style
q=d.y
p=q.a
o=d.ch
o=o!=null?o.length*2:0
o=""+(4+p+o)
C.h.bK(t,(t&&C.h).bt(t,"grid-row-end"),o,"")
d.fy.appendChild(r)
n=u.createElement("div")
o=s+"-color"
n.classList.add(o)
o=d.cx
if(o!=null){t=n.style
t.backgroundColor=o}if(d.Q==null)n.classList.add("nt-block-header")
else n.classList.add("nt-block-clause-header")
d.fy.appendChild(n)
d.id=u.createElement("div")
d.dq()
d.id.classList.add("nt-block-action")
n.appendChild(d.id)
m=u.createElement("div")
m.classList.add("nt-block-params")
n.appendChild(m)
for(t=d.x,t=t.gan(t),t=new H.aT(J.F(t.a),t.b,[H.e(t,0),H.e(t,1)]);t.l();)m.appendChild(t.a.d2())
l=u.createElement("div")
l.classList.add("nt-block-properties")
n.appendChild(l)
if(q.a>0){t=new U.dw(new U.f2(l))
t.d=!0
p=t.a=u.createElement("div")
p.classList.add("nt-toggle")
p.innerText="\u25b2"
o=W.p
W.E(p,"click",H.d(t.geP(t),{func:1,ret:-1,args:[o]}),!1,o)
d.k2=t
d.id.appendChild(t.a)}for(t=q.gan(q),t=new H.aT(J.F(t.a),t.b,[H.e(t,0),H.e(t,1)]);t.l();){q=t.a
q.toString
k=u.createElement("div")
k.classList.add("nt-property")
j=u.createElement("div")
j.classList.add("nt-property-name")
j.innerText="\u2022 "+H.f(q.f)
k.appendChild(j)
k.appendChild(q.d2())
q=s+"-color"
k.classList.add(q)
q=d.cx
if(q!=null){p=k.style
p.backgroundColor=q}l.appendChild(k)}t=d.Q
if(t!=null){i=t.V(d.go,n)
d.fy.appendChild(i)}t=d.ch
if(t!=null){for(t=W.p,q={func:1,ret:-1,args:[t]},h=0;p=d.ch,h<p.length;++h){g=u.createElement("div")
g.classList.add("nt-clause-divider")
p=s+"-color"
g.classList.add(p)
W.E(g,c,H.d(new U.f3(),q),!1,t)
p=d.cx
if(p!=null){o=g.style
o.backgroundColor=p}d.fy.appendChild(g)
p=d.ch
if(h>=p.length)return H.L(p,h)
f=p[h].V(d.go,g)
d.fy.appendChild(f)}t=p}if(d.Q!=null||t!=null){e=u.createElement("div")
e.classList.add("nt-clause-footer")
u=s+"-color"
e.classList.add(u)
u=W.p
W.E(e,c,H.d(new U.f4(),{func:1,ret:-1,args:[u]}),!1,u)
u=d.cx
if(u!=null){t=e.style
t.backgroundColor=u}d.fy.appendChild(e)}U.lv(d,d.fy)
return d.fy},
dq:function(){var u,t,s=this,r=new P.aw(""),q=s.fx,p=q.b==="workspace-chain"&&q.e===0,o=s.fr
if(p){u=C.a.h(o.z,q.a).d7()
q=o.y
q.av(r,u,0)
if(r.a.length===0)q.am(r,s.C(),0)}else o.y.am(r,s.C(),0)
q=r.a
t=new P.da().d0(C.f.aR(q.charCodeAt(0)==0?q:q))
q=s.id;(q&&C.b).aa(q,'<span title="'+t+'">'+H.f(s.c)+"</span>")},
w:function(){var u,t,s,r=this
r.fy.classList.remove("nt-drag-over")
r.fy.classList.remove("nt-block-clause-drag-over")
u=r.Q
if(u!=null)u.w()
u=r.ch
if(u!=null)for(t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)u[s].w()},
ae:function(a){var u,t,s,r=this
r.k1=a
u=r.Q
if(u!=null)u.ae(a)
u=r.ch
if(u!=null)for(t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)u[s].ae(a)
for(u=r.fx.r,u=new H.c7(u,u.gi(u),[H.K(u,"as",0)]);u.l();)u.d.ae(a)},
dE:function(a){var u,t,s,r=this
H.c(a,"$ip")
a.stopPropagation()
if(r.k1)return
u=a.dataTransfer
t=r.fr.b
u.setData(t,t)
if(r.dy)a.dataTransfer.setData("starter","starter")
r.ae(!0)
s=H.z([],[U.M])
C.a.k(s,r)
C.a.K(s,r.fx.r)
U.fb(r.go,s,!0,null)
a.dataTransfer.setDragImage(r.go,0,0)
P.o1(new P.b5(1000),new U.f7(r))},
f7:function(a){var u,t,s,r,q=this
H.c(a,"$ip")
u=q.fr
u.w()
t=u.k1
if(t!=null){u.sN(null)
s=q.fx
switch(s.b){case"workspace-chain":if(s.e===0)u.d1(t,H.l(q.f),H.l(q.r))
else{s=C.a.h(u.z,s.a)
r=q.fx.e
H.q(t,"$ih",[U.M],"$ah")
C.a.a_(s.a,r,t)
s.R()}break
case"block-children":s=C.a.h(u.z,s.a).Y(q.fx.c).Q
r=q.fx.e
s.toString
H.q(t,"$ih",[U.M],"$ah")
C.a.a_(s.a,r,t)
s.R()
break
case"block-clause":s=C.a.h(u.z,s.a).Y(q.fx.c).ch
s=(s&&C.a).h(s,q.fx.d)
r=q.fx.e
s.toString
H.q(t,"$ih",[U.M],"$ah")
C.a.a_(s.a,r,t)
s.R()
break}}q.ae(!1)
t=q.go;(t&&C.b).J(t,"")
q.go.classList.remove("nt-chain-starter")
q.go.classList.remove("nt-chain-fragment")
u.ai()},
al:function(a){var u
H.c(a,"$ip")
a.stopPropagation()
u=this.fr
u.w()
if(this.k1)return!1
if(!J.a_(a.dataTransfer.types,u.b)||J.a_(a.dataTransfer.types,"starter"))return!1
this.fy.classList.add("nt-drag-over")
return!1},
ak:function(a){var u,t,s,r,q=this
H.c(a,"$ip")
a.preventDefault()
a.stopPropagation()
u=q.fr
u.w()
if(q.k1)return!1
if(!J.a_(a.dataTransfer.types,u.b)||J.a_(a.dataTransfer.types,"starter"))return!1
t=u.k1
u.sN(null)
s=q.fx
switch(s.b){case"workspace-chain":s=C.a.h(u.z,s.a)
r=q.fx.e
if(typeof r!=="number")return r.E()
H.q(t,"$ih",[U.M],"$ah")
C.a.a_(s.a,r+1,t)
s.R()
break
case"block-children":s=C.a.h(u.z,s.a).Y(q.fx.c).Q
r=q.fx.e
if(typeof r!=="number")return r.E()
s.toString
H.q(t,"$ih",[U.M],"$ah")
C.a.a_(s.a,r+1,t)
s.R()
break
case"block-clause":s=C.a.h(u.z,s.a).Y(q.fx.c).ch
s=(s&&C.a).h(s,q.fx.d)
r=q.fx.e
if(typeof r!=="number")return r.E()
s.toString
H.q(t,"$ih",[U.M],"$ah")
C.a.a_(s.a,r+1,t)
s.R()
break}u.P(U.bZ(J.aC(t,0)))
u.ai()
return!1},
bg:function(){var u,t=this.Q
if(t!=null)t.dk()
if(this.ch!=null)for(u=0;t=this.ch,u<t.length;++u)t[u].dk()},
aQ:function(){var u,t,s,r,q,p=this,o=p.id;(o&&C.b).J(o,"")
p.dq()
o=p.k2
if(o!=null)p.id.appendChild(o.a)
o=p.Q
if(o!=null)for(o=o.a,u=o.length,t=0;t<o.length;o.length===u||(0,H.P)(o),++t)o[t].aQ()
o=p.ch
if(o!=null)for(u=o.length,t=0;t<o.length;o.length===u||(0,H.P)(o),++t)for(s=o[t].a,r=s.length,q=0;q<s.length;s.length===r||(0,H.P)(s),++q)s[q].aQ()},
sbR:function(a){this.ch=H.q(a,"$ij",[U.ab],"$aj")}}
U.f5.prototype={
$1:function(a){return H.c(a,"$iab").a4(this.a)},
$S:41}
U.f6.prototype={
$2:function(a,b){H.l(a)
H.l(b)
if(typeof a!=="number")return a.E()
if(typeof b!=="number")return H.J(b)
return a+b},
$S:11}
U.f2.prototype={
$1:function(a){var u=this.a.classList.toggle("nt-block-properties-hidden")
return u},
$S:9}
U.f3.prototype={
$1:function(a){return H.c(a,"$ip").preventDefault()},
$S:3}
U.f4.prototype={
$1:function(a){return H.c(a,"$ip").preventDefault()},
$S:3}
U.f8.prototype={
$1:function(a){return H.c(a,"$ip").preventDefault()},
$S:3}
U.f7.prototype={
$0:function(){var u=this.a,t=u.fr
t.dj(u.fx)
t.d4()},
$S:2}
U.aa.prototype={
V:function(a,b){var u,t,s,r,q,p,o,n,m=this
m.d=b
u=document
t=u.createElement("div")
m.e=t
t.classList.add("nt-fragment")
t=m.e
t.toString
s=W.p
r={func:1,ret:-1,args:[s]}
W.E(t,"dragenter",H.d(m.gaM(),r),!1,s)
t=m.e
t.toString
W.E(t,"drop",H.d(m.gaj(),r),!1,s)
u=u.createElement("div")
m.b=u
u.classList.add("nt-chain")
if(m.a.length===0)return m.b
for(u=[U.M],q=0;t=m.a,q<t.length;q=o){p=t[q]
s=m.d
o=q+1
n=new U.cl()
t=H.q(H.am(t,o,null,H.e(t,0)),"$ih",u,"$ah")
n.a=s
n.b="workspace-chain"
n.e=q
n.saT(t)
p.V(a,n)}U.fb(m.b,t,!1,m.e)
m.bj()
return m.b},
bj:function(){var u,t,s,r=this.a,q=r.length
if(q===0)return
if(0>=q)return H.L(r,0)
u=r[0]
t=J.eF(u.f)
s=J.eF(u.r)
r=this.b.style
q=""+t+"px"
r.left=q
r=this.b.style
q=""+s+"px"
r.top=q},
fD:function(a){var u,t,s,r,q,p,o
this.d=a
for(u=[U.M],t=0;s=this.a,t<s.length;t=o){r=s[t]
q=r.fx
p=this.d
o=t+1
s=H.am(s,o,null,H.e(s,0))
q.toString
H.q(s,"$ih",u,"$ah")
q.f=q.e=q.d=q.c=q.b=q.a=null
q.a=p
q.b="workspace-chain"
q.e=t
q.saT(s)
r.bg()}},
w:function(){var u,t,s
this.e.classList.remove("nt-drag-over")
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)u[s].w()},
R:function(){var u,t,s,r,q,p,o,n=this
for(u=[U.M],t=0;s=n.a,t<s.length;t=o){r=s[t]
q=r.fx
p=n.d
o=t+1
s=H.am(s,o,null,H.e(s,0))
q.toString
H.q(s,"$ih",u,"$ah")
q.f=q.e=q.d=q.c=q.b=q.a=null
q.a=p
q.b="workspace-chain"
q.e=t
q.saT(s)
r.bg()}U.fb(n.b,s,!1,n.e)
n.bj()},
f4:function(){var u=this,t=u.a,s=t.length
if(s!==0){if(0>=s)return H.L(t,0)
t=!t[0].dy}else t=!0
if(!t)return
u.e.classList.add("show")
t=J.eF(C.a.gZ(u.a).r)
s=u.b.style
t=""+(t-20)+"px"
s.top=t},
al:function(a){var u
H.c(a,"$ip")
a.preventDefault()
a.stopPropagation()
u=this.c
u.w()
if(!J.a_(a.dataTransfer.types,u.b))return!1
this.e.classList.add("nt-drag-over")
return!1},
ak:function(a){var u,t,s,r,q,p,o=this
H.c(a,"$ip")
a.preventDefault()
a.stopPropagation()
u=o.c
u.w()
if(!J.a_(a.dataTransfer.types,u.b))return!1
t=o.a
if(0>=t.length)return H.L(t,0)
s=t[0]
r=u.k1
u.sN(null)
q=J.aC(r,0)
q.f=s.f
t=s.r
if(typeof t!=="number")return t.a2()
p=J.n5(a).b
if(typeof p!=="number")return H.J(p)
q.r=t-20+p
H.q(r,"$ih",[U.M],"$ah")
C.a.a_(o.a,0,r)
o.R()
u.P(U.bZ(q))
u.ai()
return!1}}
U.ab.prototype={
V:function(a,b){var u,t,s,r,q,p,o,n=this,m=document.createElement("div")
n.b=m
m.classList.add("nt-clause")
n.dC(b)
if(n.a.length===0){n.c8()
return n.b}for(m=n.c,u=n.d,t=0;s=n.a,t<s.length;t=q){r=s[t]
q=t+1
p=H.am(s,q,null,H.e(s,0))
o=new U.cl()
o.c1(m.fx.a,t,m.b,p,u)
r.V(a,o)}U.kO(n.b,s,"nt-block-clause",!1)
return n.b},
c8:function(){var u,t=this
t.b.classList.add("nt-clause-empty")
t.b.appendChild(U.lP(!1,t))
u=document.createElement("div")
u.className="nt-clause-drop"
t.b.appendChild(u)
U.ly(t,u)
t.b.appendChild(U.lP(!0,t))},
dk:function(){var u,t,s,r,q,p
for(u=this.c,t=this.d,s=0;r=this.a,s<r.length;s=p){q=r[s]
p=s+1
q.fx.c1(u.fx.a,s,u.b,H.am(r,p,null,H.e(r,0)),t)
q.bg()}},
R:function(){var u,t,s,r,q,p=this,o=p.b;(o&&C.b).J(o,"")
if(p.a.length===0){p.c8()
return}p.b.classList.remove("nt-clause-empty")
for(o=p.c,u=p.d,t=0;s=p.a,t<s.length;t=q){r=s[t]
q=t+1
r.fx.c1(o.fx.a,t,o.b,H.am(s,q,null,H.e(s,0)),u)
r.bg()}U.kO(p.b,s,"nt-block-clause",!1)},
dC:function(a){var u=W.p,t={func:1,ret:-1,args:[u]}
W.E(a,"dragenter",H.d(this.gfb(),t),!1,u)
W.E(a,"dragover",H.d(new U.fc(),t),!1,u)
W.E(a,"drop",H.d(this.gf2(),t),!1,u)},
ae:function(a){var u,t,s
this.e=a
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)u[s].ae(a)},
w:function(){var u,t,s
this.b.classList.remove("nt-block-clause-drag-over")
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)u[s].w()},
fc:function(a){var u,t,s=this
H.c(a,"$ip")
a.stopPropagation()
u=s.c.fr
u.w()
if(s.e)return!1
if(!J.a_(a.dataTransfer.types,u.b)||J.a_(a.dataTransfer.types,"starter"))return!1
u=s.a
t=u.length
if(t===0)s.b.classList.add("nt-block-clause-drag-over")
else{if(0>=t)return H.L(u,0)
u[0].fy.classList.add("nt-block-clause-drag-over")}return!1},
f3:function(a){var u,t,s=this
H.c(a,"$ip")
a.preventDefault()
a.stopPropagation()
u=s.c.fr
u.w()
if(s.e)return!1
if(!J.a_(a.dataTransfer.types,u.b)||J.a_(a.dataTransfer.types,"starter"))return!1
t=u.k1
u.sN(null)
H.q(t,"$ih",[U.M],"$ah")
C.a.a_(s.a,0,t)
s.R()
s.b.classList.remove("nt-clause-empty")
u.P(U.bZ(J.aC(t,0)))
return!1},
fa:function(a){var u,t=this
H.c(a,"$ip")
a.stopPropagation()
u=t.c.fr
u.w()
if(t.a.length!==0)return!1
if(t.e)return!1
if(!J.a_(a.dataTransfer.types,u.b)||J.a_(a.dataTransfer.types,"starter"))return!1
t.b.classList.add("nt-block-clause-drag-over")
return!1},
f1:function(a){var u,t,s=this
H.c(a,"$ip")
a.preventDefault()
a.stopPropagation()
u=s.c.fr
u.w()
if(s.a.length!==0)return!1
if(s.e)return!1
if(!J.a_(a.dataTransfer.types,u.b)||J.a_(a.dataTransfer.types,"starter"))return!1
t=u.k1
u.sN(null)
H.q(t,"$ih",[U.M],"$ah")
C.a.a_(s.a,0,t)
s.R()
s.b.classList.remove("nt-clause-empty")
u.P(U.bZ(J.aC(t,0)))
return!1},
di:function(a){var u=this.a,t=H.e(u,0),s=H.am(u,a,null,t)
this.sbP(H.am(u,0,a,t).L(0))
this.R()
return s}}
U.fc.prototype={
$1:function(a){return H.c(a,"$ip").preventDefault()},
$S:3}
U.fd.prototype={
$1:function(a){return H.c(a,"$ip").preventDefault()},
$S:3}
U.b6.prototype={
ba:function(a){var u,t=this,s=t.e,r=s.length
if(r===1){r=t.a
if(r.c!==t)a.a+="("
a.a+=H.f(t.b)+" "
if(0>=s.length)return H.L(s,0)
s[0].ba(a)
if(r.c!==t)a.a+=")"}else if(r===2){u=t.a
if(u.c!==t)a.a+="("
if(0>=r)return H.L(s,0)
s[0].ba(a)
a.a+=" "+H.f(t.b)+" "
if(1>=s.length)return H.L(s,1)
s[1].ba(a)
if(u.c!==t)a.a+=")"}else{s=t.b
if(s!=null)a.a+=s}},
C:function(){var u,t,s,r=this,q="children",p=P.l_(["name",r.b,"type",r.c]),o=r.e
if(o.length!==0){p.j(0,q,[])
for(u=o.length,t=0;t<o.length;o.length===u||(0,H.P)(o),++t){s=o[t]
J.bu(p.h(0,q),s.C())}}o=r.d
if(o!=null)p.j(0,"format",o)
return p},
aN:function(a){var u,t,s,r,q=this,p="children",o=J.H(a),n=o.h(a,"name")
q.b=n==null?"":J.Q(n)
n=o.h(a,"type")
q.c=n==null?"num":J.Q(n)
if(o.h(a,"format")!=null)q.d=H.x(o.h(a,"format"))
n=q.e
C.a.si(n,0)
if(!!J.m(o.h(a,p)).$ij)for(o=J.F(H.a1(o.h(a,p),"$ih")),u=q.a,t=[U.b6];o.l();){s=o.gn(o)
r=new U.b6(u,H.x(J.a2(s,"type")),H.z([],t))
C.a.k(n,r)
r.aN(H.c(s,"$io"))}},
eO:function(a){var u,t,s,r
if(a==null)return this.e.length!==0
u=this.e
t=J.H(a)
if(u.length!==t.gi(a))return!0
s=0
while(!0){r=t.gi(a)
if(typeof r!=="number")return H.J(r)
if(!(s<r))break
r=t.h(a,s)
if(s>=u.length)return H.L(u,s)
if(!J.a8(r,u[s].c))return!0;++s}return!1},
dA:function(a){var u,t,s,r,q,p=this,o=p.e,n=o.length===0
if(p.eO(a)){C.a.si(o,0)
if(a!=null){u=J.H(a)
t=p.a
s=[U.b6]
r=0
while(!0){q=u.gi(a)
if(typeof q!=="number")return H.J(q)
if(!(r<q))break
if(r===0&&n&&J.a8(u.h(a,r),p.c)){q=new U.b6(t,H.x(u.h(a,r)),H.z([],s))
q.b=p.b
C.a.k(o,q)}else C.a.k(o,new U.b6(t,H.x(u.h(a,r)),H.z([],s)));++r}}}},
cT:function(a){var u,t=this,s=document.createElement("div")
C.b.J(s,H.f(t.b))
s.classList.add("nt-expression-text")
s.classList.add("editable")
u=H.f(t.c)
s.classList.add(u)
u=W.p
W.E(s,"click",H.d(new U.fX(t,s),{func:1,ret:-1,args:[u]}),!1,u)
t.d3(s,a)
a.appendChild(s)},
d3:function(a,b){var u=W.p,t={func:1,ret:-1,args:[u]}
W.E(a,"mouseenter",H.d(new U.fY(b),t),!1,u)
W.E(a,"mouseleave",H.d(new U.fZ(b),t),!1,u)},
b7:function(a,b){var u=document.createElement("div")
C.b.J(u,b?"(":")")
u.classList.add("nt-expression-text")
u.classList.add("parenthesis")
this.d3(u,a)
a.appendChild(u)},
eJ:function(a){var u,t,s=this
s.b=J.Q(U.bk(s.b,0))
u=W.nu("number")
u.className="nt-number-input"
u.value=s.b
u.step="1"
t=W.n
W.E(u,"change",H.d(new U.fW(s,u),{func:1,ret:-1,args:[t]}),!1,t)
a.appendChild(u)},
gfn:function(){var u=this.b
if(u!=null)return P.my(u,new U.h_())!=null
return!1},
bf:function(a){var u,t,s=this,r=document.createElement("div")
r.className="nt-expression"
if((s.gfn()||s.b==null)&&s.c==="num")s.eJ(r)
else if(s.b==null){r.classList.add("empty")
C.b.aa(r,"<small>&#9660;</small>")}else{u=s.e
t=u.length
if(t===1){s.b7(r,!0)
s.cT(r)
if(0>=u.length)return H.L(u,0)
u[0].bf(r)
s.b7(r,!1)}else if(t===2){s.b7(r,!0)
if(0>=u.length)return H.L(u,0)
u[0].bf(r)
s.cT(r)
if(1>=u.length)return H.L(u,1)
u[1].bf(r)
s.b7(r,!1)}else C.b.aa(r,"<div class='nt-expression-text "+H.f(s.c)+"'>"+H.f(s.b)+"</div>")}if(s.e.length===0){r.classList.add("editable")
u=W.p
W.E(r,"click",H.d(new U.h2(s,r),{func:1,ret:-1,args:[u]}),!1,u)}a.appendChild(r)},
de:function(a){var u,t,s=this,r=W.B,q=document
H.b_(r,r,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
r=new W.aA(q.querySelectorAll(".nt-pulldown-menu"),[r])
r.t(r,new U.h0())
u=q.createElement("div")
u.classList.add("nt-pulldown-menu")
q=s.a.a
s.cj(u,q.dx)
if(J.n4(q.db))C.b.aa(u,"<hr>")
s.cj(u,q.db)
C.b.aa(u,"<hr>")
t=W.ls("#")
C.n.J(t,"Clear")
t.className="clear"
u.appendChild(t)
r=W.p
W.E(t,"click",H.d(new U.h1(s,u),{func:1,ret:-1,args:[r]}),!1,r)
a.appendChild(u)},
cj:function(a,b){var u,t,s,r,q,p
for(u=J.F(b),t=W.p,s={func:1,ret:-1,args:[t]};u.l();){r=u.gn(u)
q=J.H(r)
if(J.a8(q.h(r,"type"),this.c)){p=document.createElement("a")
p.href="#"
C.n.J(p,H.f(q.h(r,"name")))
a.appendChild(p)
W.E(p,"click",H.d(new U.fV(this,a,r),s),!1,t)}}}}
U.fX.prototype={
$1:function(a){H.c(a,"$ip")
this.a.de(this.b)
a.stopPropagation()},
$S:4}
U.fY.prototype={
$1:function(a){H.c(a,"$ip")
this.a.classList.add("highlight")},
$S:4}
U.fZ.prototype={
$1:function(a){H.c(a,"$ip")
this.a.classList.remove("highlight")},
$S:4}
U.fW.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.value
u.b=s
if(s==="")t.value=u.b="0"},
$S:6}
U.h_.prototype={
$1:function(a){return},
$S:12}
U.h2.prototype={
$1:function(a){H.c(a,"$ip")
this.a.de(this.b)
a.stopPropagation()},
$S:4}
U.h0.prototype={
$1:function(a){return J.d0(H.c(a,"$iB"))},
$S:24}
U.h1.prototype={
$1:function(a){var u
H.c(a,"$ip")
C.b.az(this.b)
u=this.a
u.b=null
C.a.si(u.e,0)
u.d=null
u.a.c0()
a.stopPropagation()
a.preventDefault()},
$S:4}
U.fV.prototype={
$1:function(a){var u,t,s
H.c(a,"$ip")
C.b.az(this.b)
u=this.a
t=this.c
s=J.H(t)
u.dA(H.ap(s.h(t,"arguments")))
u.b=H.x(s.h(t,"name"))
u.c=H.x(s.h(t,"type"))
u.d=H.x(s.h(t,"format"))
u.a.c0()
a.stopPropagation()
a.preventDefault()},
$S:4}
U.fL.prototype={
m:function(a){var u,t=new P.aw("")
this.c.ba(t)
u=t.a
return u.charCodeAt(0)==0?u:u},
aN:function(a){var u=J.m(a)
if(!!u.$io)this.c.aN(a)
else if(a!=null)this.c.b=u.m(a)},
c0:function(){var u=this,t=u.b
if(t!=null&&u.c!=null){J.n2(t).b8(0)
u.c.bf(H.c(u.b,"$ib4"))}}}
U.d2.prototype={
aI:function(a,b,c){var u,t,s
for(u="",t=0;t<b;++t)u+="  "
a.a+=u
s="\n"+u
a.a+=H.kD(c,"\n",s)+"\n"},
am:function(a,b,c){var u,t=J.H(b),s=H.x(t.h(b,"format")),r=t.h(b,"params"),q=t.h(b,"properties"),p=J.m(r),o=!!p.$ij?p.gi(r):0,n=J.m(q),m=!!n.$ij?n.gi(q):0
if(typeof s!=="string"){s=H.f(t.h(b,"action"))
if(typeof o!=="number")return H.J(o)
u=0
for(;u<o;++u)s+=" {"+u+"}"
if(typeof m!=="number")return H.J(m)
u=0
for(;u<m;++u)s+=" {P"+u+"}"}if(typeof o!=="number")return H.J(o)
u=0
for(;u<o;++u)s=this.bI(s,"{"+u+"}",b,p.h(r,u))
if(typeof m!=="number")return H.J(m)
u=0
for(;u<m;++u)s=this.bI(s,"{P"+u+"}",b,n.h(q,u))
this.aI(a,c,s)},
bI:function(a,b,c,d){var u=this.ec(d)
if(typeof u!=="string")H.Y(H.aZ(u))
return H.kD(a,b,u)},
ec:function(a){var u="value",t=J.H(a)
if(!!J.m(t.h(a,u)).$io)return U.c_(t.h(a,u))
else{t=t.h(a,u)
return t==null?"":J.Q(t)}}}
U.i1.prototype={
cE:function(a){var u,t=new P.aw("")
for(u=J.F(H.a1(a.h(0,"chains"),"$ih"));u.l();){this.av(t,u.gn(u),0)
t.a+="\n"}u=t.a
return u.charCodeAt(0)==0?u:u},
av:function(a,b,c){var u,t,s,r,q,p,o="children"
for(u=J.F(H.a1(b,"$ih")),t=c+1;u.l();){s=u.gn(u)
r=J.H(s)
if(!!J.m(r.h(s,o)).$ij)this.av(a,r.h(s,o),t)
if(!!J.m(r.h(s,"clauses")).$ij)for(r=J.F(H.a1(r.h(s,"clauses"),"$ih"));r.l();){q=r.gn(r)
this.am(a,q,c)
p=J.H(q)
if(!!J.m(p.h(q,o)).$ij)this.av(a,p.h(q,o),t)}}}}
U.hQ.prototype={
cE:function(a){var u,t,s="chains",r=new P.aw("")
if(!J.m(a.h(0,s)).$ij||J.a5(a.h(0,s))===0)return"".charCodeAt(0)==0?"":""
u=H.ap(a.h(0,s))
t=J.bi(u)
t.a1(u,U.p2())
for(t=t.gv(u);t.l();)this.av(r,t.gn(t),0)
t=r.a
return t.charCodeAt(0)==0?t:t},
av:function(a,b,c){var u=J.H(b)
if(u.gi(b)===0||!J.a8(J.a2(u.h(b,0),"type"),"nlogo:procedure"))return
this.am(a,u.h(b,0),c)
this.bB(a,u.M(b,1),c+1)
u=a.a+="end\n"
a.a=u+"\n"},
am:function(a,b,c){var u,t,s,r,q=this,p="children"
q.dH(a,b,c)
u=J.H(b)
if(!!J.m(u.h(b,p)).$ij)q.fh(a,u.h(b,p),c)
if(!!J.m(u.h(b,"clauses")).$ij)for(u=J.F(H.a1(u.h(b,"clauses"),"$ih")),t=c+1;u.l();){s=u.gn(u)
r=J.H(s)
if(!!J.m(r.h(s,p)).$ij){r=r.h(s,p)
q.aI(a,c,"[")
q.bB(a,r,t)
q.aI(a,c,"]")}}},
bB:function(a,b,c){var u
for(u=J.F(H.a1(b,"$ih"));u.l();)this.am(a,u.gn(u),c)},
fh:function(a,b,c){this.aI(a,c,"[")
this.bB(a,b,c+1)
this.aI(a,c,"]")},
bI:function(a,b,c,d){var u,t="expressionValue",s=J.H(d),r=s.h(d,t)==null?s.h(d,"value"):s.h(d,t),q=J.H(c),p=q.h(c,"id")
q=q.h(c,"instanceId")
s=s.h(d,"id")
u=H.x(this.b.$5(this.c,p,q,s,r))
if(typeof u!=="string")H.Y(H.aZ(u))
return H.kD(a,b,u)}}
U.d1.prototype={
bl:function(a){var u=this.b,t=H.e(u,0),s=new H.bp(u,H.d(new U.f1(a),{func:1,ret:P.R,args:[t]}),[t])
if(s.gi(s)===1)return s.gZ(s).a
return},
f_:function(a){var u,t,s,r,q=this,p=document.createElement("div")
p.id=H.f(q.a.b)+"-menu"
q.d=p
p.classList.add("nt-menu")
for(p=q.b,u=0;u<p.length;++u){t=p[u]
q.d.appendChild(t.V(a,u))}p=q.d
p.toString
s=W.p
r={func:1,ret:-1,args:[s]}
W.E(p,"dragenter",H.d(new U.f_(q),r),!1,s)
p=q.d
p.toString
W.E(p,"dragover",H.d(new U.f0(),r),!1,s)
p=q.d
p.toString
W.E(p,"drop",H.d(q.gaj(),r),!1,s)
q.ds()
return q.d},
ds:function(){var u,t,s
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)u[s].dr()},
al:function(a){var u
a.stopPropagation()
u=this.a
u.w()
if(!J.a_(a.dataTransfer.types,u.b))return!1
this.d.classList.add("nt-menu-drag-over")
return!1},
ak:function(a){var u,t
H.c(a,"$ip")
a.stopPropagation()
a.preventDefault()
u=this.a
u.w()
if(!J.a_(a.dataTransfer.types,u.b))return!1
t=u.k1
u.sN(null)
u.P(U.bZ(J.aC(t,0)))
u.ai()
return!1}}
U.f1.prototype={
$1:function(a){return H.c(a,"$iaJ").a.a==this.a},
$S:43}
U.f_.prototype={
$1:function(a){this.a.al(H.c(a,"$ip"))
return!1},
$S:1}
U.f0.prototype={
$1:function(a){return H.c(a,"$ip").preventDefault()},
$S:3}
U.hW.prototype={
$1:function(a){var u,t,s,r=this
H.x(a)
u=document.createElement("div")
t=P.i
W.m1(u,H.q(H.z(["nt-notch-"+H.f(a),r.a],[t]),"$ih",[t],"$ah"))
if(!r.b||a!=="middle"){t=r.c.cx
if(t!=null){s=u.style
s.backgroundColor=t}}r.d.appendChild(u)},
$S:12}
U.hV.prototype={
$1:function(a){var u,t,s,r=this
H.x(a)
u=document.createElement("div")
t=P.i
W.m1(u,H.q(H.z(["nt-notch-"+H.f(a),r.a],[t]),"$ih",[t],"$ah"))
if(!r.b||a!=="middle"){t=r.c.c.cx
if(t!=null){s=u.style
s.backgroundColor=t}}r.d.appendChild(u)},
$S:12}
U.i6.prototype={}
U.eV.prototype={
bi:function(){return P.hm(P.dg(["type","block-changed","blockId",this.b,"instanceId",this.c],P.i,P.C))}}
U.bX.prototype={
bi:function(){var u=this
return P.hm(P.dg(["type","attribute-changed","blockId",u.b,"instanceId",u.c,"attributeId",u.d,"value",u.e],P.i,null))}}
U.hD.prototype={
bi:function(){return P.hm(P.dg(["type","menu-item-clicked","blockId",this.b],P.i,P.C))}}
U.hE.prototype={
bi:function(){return P.hm(P.dg(["type","menu-item-context-menu","blockId",this.b,"x",this.c,"y",this.d],P.i,P.C))}}
U.aJ.prototype={
V:function(a,b){var u,t,s,r,q,p,o=this
o.f=b
u=o.x=document.createElement("div")
t=o.a
u.innerText=t.c
u.classList.add("nt-menu-slot")
s=t.aD()
o.x.classList.add(s)
u=o.x
r=s+"-color"
u.classList.add(r)
u=t.cx
if(u!=null){r=o.x.style
r.backgroundColor=u}u=t.db
if(u!=null){r=o.x.style
r.borderColor=u}u=t.cy
if(u!=null){r=o.x.style
r.color=u}u=t.dx
if(u!=null){t=o.x
r=t.style
q=r.lineHeight
r.font=u
u=t.style
u.lineHeight=q}u=o.x
u.draggable=!0
u.toString
t=W.p
r={func:1,ret:-1,args:[t]}
W.E(u,"dragstart",H.d(new U.ik(o,a),r),!1,t)
u=o.x
u.toString
W.E(u,"dragend",H.d(new U.il(o,a),r),!1,t)
u=o.x
u.toString
p=W.n
W.E(u,"dblclick",H.d(o.gfu(),{func:1,ret:-1,args:[p]}),!1,p)
p=o.x
p.toString
W.E(p,"contextmenu",H.d(o.gfs(),r),!1,t)
o.dr()
return o.x},
dr:function(){var u=this,t=u.e,s=u.d.a4(u.a.a)
if(typeof t!=="number")return t.a2()
if(typeof s!=="number")return H.J(s)
t=t<=0||t-s>0
s=u.x
if(t){s.draggable=!0
s.classList.remove("nt-menu-slot-at-limit")}else{s.draggable=!1
s.classList.add("nt-menu-slot-at-limit")}},
dF:function(a,b){var u,t,s,r,q,p,o=this
if(o.y)return
u=a.dataTransfer
t=o.a
s=t.fr.b
u.setData(s,s)
o.x.classList.add("nt-block-dragging")
s=o.r=t.cX(0)
if(t.ch!=null){u=[U.M]
s.Q=new U.ab(s,null,H.z([],u))
if(t.ch.length>0){o.r.sbR(H.z([],[U.ab]))
for(r=0;r<t.ch.length;++r){s=o.r
q=s.ch;(q&&C.a).k(q,new U.ab(s,r,H.z([],u)))}}}if(o.r.dy)a.dataTransfer.setData("starter","starter")
u=o.f
p=new U.cl()
p.b="new-block"
p.f=u
u=o.r.V(b,p).style
C.h.bK(u,(u&&C.h).bt(u,"pointer-events"),"none","")
U.fb(b,H.z([o.r],[U.M]),!1,null)
u=o.d
u.dj(p)
u.d4()
o.y=!0
a.dataTransfer.setDragImage(b,0,0)},
fv:function(a){this.d.P(new U.hD(this.a.a))},
ft:function(a){var u,t,s
H.c(a,"$ip")
a.preventDefault()
a.stopPropagation()
u=this.a.a
t=a.pageX
s=a.pageY
this.d.P(new U.hE(u,H.l(t),H.l(s)))
return!1}}
U.ik.prototype={
$1:function(a){return this.a.dF(H.c(a,"$ip"),this.b)},
$S:3}
U.il.prototype={
$1:function(a){var u,t,s
H.c(a,"$ip")
u=this.a
t=this.b
s=u.d
s.w()
u.x.classList.remove("nt-block-dragging")
t.classList.remove("nt-chain-starter")
t.classList.remove("nt-chain-fragment")
u.y=!1
u.r=null
s.ai()
return},
$S:3}
U.dw.prototype={
eQ:function(a,b){var u,t,s=this
H.c(b,"$ip").stopPropagation()
u=s.d=!s.d
t=s.a
if(u)t.innerText="\u25b2"
else t.innerText="\u25bc"
s.e.$1(u)}}
U.bA.prototype={
dT:function(a,b,a0){var u,t,s,r,q,p,o,n,m,l,k=this,j="blockStyles",i="#9977aa",h="#ffffff",g="blocks",f="variables",e="expressions",d=k.cx,c=J.H(d)
if(!J.a8(c.h(d,"version"),3))throw H.b("The supported NetTango version is 3, but the given definition version was "+H.f(c.h(d,"version"))+".")
u=k.b
t="#"+H.f(u)
t=H.c(document.querySelector(t),"$ib4")
k.c=t
if(t==null)throw H.b("No container element with ID "+H.f(u)+" found.")
C.b.J(t,"")
k.c.classList.add("nt-container")
u=k.k2
t=k.c
t.toString
s=W.p
r={func:1,ret:-1,args:[s]}
C.a.k(u,W.E(t,"dragenter",H.d(new U.ff(k),r),!1,s))
t=k.c
t.toString
C.a.k(u,W.E(t,"dragover",H.d(new U.fg(),r),!1,s))
t=k.c
t.toString
C.a.k(u,W.E(t,"drop",H.d(new U.fh(k),r),!1,s))
u=c.h(d,"height")
k.dy=H.l(typeof u==="number"&&Math.floor(u)===u?c.h(d,"height"):600)
u=c.h(d,"width")
k.fr=H.l(typeof u==="number"&&Math.floor(u)===u?c.h(d,"width"):450)
if(H.S(c.p(d,j))){k.fy=U.kP(H.c(J.a2(c.h(d,j),"starterBlockStyle"),"$io"),"#bb5555")
k.go=U.kP(H.c(J.a2(c.h(d,j),"containerBlockStyle"),"$io"),"#8899aa")
k.id=U.kP(H.c(J.a2(c.h(d,j),"commandBlockStyle"),"$io"),i)}else{u=new U.bx(i,h,h)
u.a="#bb5555"
k.fy=u
u=new U.bx(i,h,h)
u.a="#8899aa"
k.go=u
k.id=new U.bx(i,h,h)}u=k.c.style
t=H.f(k.dy)+"px"
u.minHeight=t
u=k.c.style
t=H.f(k.fr)+"px"
u.minWidth=t
u=k.c.style
t=H.f(k.fr)+"px"
u.maxWidth=t
k.fx=k.dy
k.cy=new U.d1(k,H.z([],[U.aJ]))
if(!!J.m(c.h(d,g)).$ij){for(u=J.F(H.a1(c.h(d,g),"$ih"));u.l();){q=H.l(J.a2(u.gn(u),"id"))
if(q!=null&&q>k.Q){if(typeof q!=="number")return q.E()
k.Q=q+1}}for(u=J.F(H.a1(c.h(d,g),"$ih"));u.l();){p=H.c(u.gn(u),"$io")
o=U.lu(k,p)
if(k.cy.bl(o.a)!=null){o.a=null
n=U.kN(o.fr,null,o.c)
o.cv(0,n)
J.d_(p,"id",n.a)
o=n}m=U.lj(J.a2(p,"limit"),-1)
t=k.cy
l=t.bl(o.a)
if(l!=null)H.Y(P.cu("Cannot add a block with the same ID as an existing block\n  Adding: ("+H.f(o.a)+": "+H.f(o.c)+")\n  Existing: ("+H.f(l.a)+": "+H.f(l.c)+")",null))
C.a.k(t.b,new U.aJ(o,t.a,m))}}if(!!J.m(c.h(d,f)).$ij)k.db=H.ap(c.h(d,f))
if(!!J.m(c.h(d,e)).$ij)k.dx=H.ap(c.h(d,e))
if(!!J.m(c.h(d,"program")).$io)k.eu(H.c(c.h(d,"program"),"$io"))
k.eZ()},
P:function(a){var u,t=this
try{t.dt()
t.aQ()
t.cy.ds()
$.lo().h(0,"NetTango").bQ("_relayCallback",[t.b,a.bi()])}catch(u){H.W(u)
P.kA("Unable to relay program changed event to Javascript")}},
d6:function(a){var u,t=this.bV(!0),s=this.y,r=s.b
if(a!=null)s.b=a
u=s.cE(t)
s.b=r
return u},
fe:function(){return this.d6(null)},
bV:function(a){var u,t,s,r,q,p,o=P.l_(["chains",[]])
for(u=this.z,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s){r=u[s]
J.bu(o.h(0,"chains"),r.d7())}if(a)for(u=this.cy.b,t=u.length,q=[[P.o,,,]],s=0;s<u.length;u.length===t||(0,H.P)(u),++s){p=u[s].a
if(p.dy&&this.a4(p.a)===0)J.bu(o.h(0,"chains"),H.z([p.C()],q))}return o},
a4:function(a){var u,t,s=this.z
if(s.length===0)return 0
u=P.G
t=H.e(s,0)
return new H.at(s,H.d(new U.fl(a),{func:1,ret:u,args:[t]}),[t,u]).c_(0,new U.fm())},
eZ:function(){var u,t,s,r,q,p,o,n=this,m=n.b,l=H.f(m)+"-styles",k=document,j=H.c(k.getElementById(l),"$icH")
if(j==null){j=k.createElement("style")
j.id=l
n.c.appendChild(j)}u=H.c(j.sheet,"$icp")
for(;u.cssRules.length>0;)u.removeRule(0)
n.fy.bN(u,H.f(m)+"-block-starter")
n.go.bN(u,H.f(m)+"-block-container")
n.id.bN(u,H.f(m)+"-block-command")
t=k.createElement("div")
t.classList.add("nt-workspace-wrapper")
n.c.appendChild(t)
s=k.createElement("div")
s.className="nt-attribute-backdrop"
n.r=s
r=W.p
q={func:1,ret:-1,args:[r]}
W.E(s,"click",H.d(new U.fi(n),q),!1,r)
s=k.createElement("div")
s.className="nt-attribute-dialog"
n.x=s
W.E(s,"click",H.d(new U.fj(),q),!1,r)
n.r.appendChild(n.x)
n.c.appendChild(n.r)
s=k.createElement("div")
s.id=H.f(m)+"-space"
n.d=s
s.classList.add("nt-workspace")
s=n.d
s.toString
W.E(s,"dragenter",H.d(n.gaM(),q),!1,r)
s=n.d
s.toString
W.E(s,"dragover",H.d(new U.fk(),q),!1,r)
s=n.d
s.toString
W.E(s,"drop",H.d(n.gaj(),q),!1,r)
t.appendChild(n.d)
r=k.createElement("div")
n.f=r
r.classList.add("nt-block-drag")
n.f.classList.add("nt-chain")
n.d.appendChild(n.f)
k=k.createElement("div")
n.e=k
n.d.appendChild(k)
for(m=n.z,p=0;p<m.length;++p)m[p].V(n.f,p)
n.dg()
o=n.cy.f_(n.f)
m=o.style
k=H.f(n.dy)+"px"
m.maxHeight=k
t.appendChild(o)
n.dt()},
al:function(a){H.c(a,"$ip").stopPropagation()
this.w()
return!1},
ak:function(a){var u,t,s=this
H.c(a,"$ip")
a.stopPropagation()
a.preventDefault()
s.w()
if(!J.a_(a.dataTransfer.types,s.b))return!1
u=s.k1
s.sN(null)
t=J.T(a)
s.d1(u,H.l(t.gaP(a).a),H.l(t.gaP(a).b))
s.P(U.bZ(J.aC(u,0)))
s.ai()
return!1},
fd:function(a){a.stopPropagation()
this.w()
if(!J.a_(a.dataTransfer.types,this.b))return!1
this.cy.d.classList.add("nt-menu-drag-over")
return!1},
eU:function(a){var u,t=this
a.stopPropagation()
a.preventDefault()
t.w()
if(!J.a_(a.dataTransfer.types,t.b))return!1
u=t.k1
t.sN(null)
t.P(U.bZ(J.aC(u,0)))
t.ai()
return!1},
d1:function(a,b,c){var u,t,s,r,q,p=this,o=U.M
H.q(a,"$ih",[o],"$ah")
u=new U.aa(p,H.z([],[o]))
o=p.z
t=o.length
C.a.k(o,u)
s=u.V(p.f,t)
p.d.appendChild(s)
o=u.a
C.a.a_(o,o.length,a)
u.R()
o=u.a
r=o.length
if(r!==0){if(0>=r)return H.L(o,0)
q=o[0]
q.f=b
q.r=c
u.bj()}p.dg()},
fw:function(a){var u,t,s,r=this.z,q=C.a.h(r,a),p=q.a
if(!!r.fixed$length)H.Y(P.r("removeAt"))
if(typeof a!=="number"||Math.floor(a)!==a)H.Y(H.aZ(a))
if(typeof a!=="number")return a.a5()
u=r.length
if(a>=u)H.Y(P.dq(a,null))
r.splice(a,1)[0]
u=q.b;(u&&C.b).az(u)
for(t=0;t<r.length;++t){s=r[t]
s.fD(t)
s.bj()}return p},
dj:function(a){var u,t,s,r,q,p,o,n=this,m=a.b
switch(m){case"new-block":u=C.a.h(n.cy.b,a.f)
u.x.classList.remove("nt-block-dragging")
t=u.r
m=t.fy.style
C.h.bK(m,(m&&C.h).bt(m,"pointer-events"),"","")
m=U.M
n.sN(H.q(H.z([t],[m]),"$ih",[m],"$ah"))
break
case"workspace-chain":m=[U.M]
if(a.e===0)n.sN(H.q(n.fw(a.a),"$ih",m,"$ah"))
else{s=C.a.h(n.z,a.a)
r=a.e
q=s.a
p=H.e(q,0)
o=H.am(q,r,null,p)
s.sbP(H.am(q,0,r,p).L(0))
s.R()
n.sN(H.q(o,"$ih",m,"$ah"))}break
case"block-children":n.sN(H.q(C.a.h(n.z,a.a).Y(a.c).Q.di(a.e),"$ih",[U.M],"$ah"))
break
case"block-clause":m=C.a.h(n.z,a.a).Y(a.c).ch
n.sN(H.q((m&&C.a).h(m,a.d).di(a.e),"$ih",[U.M],"$ah"))
break
case"default":throw H.b(P.lH("Unknown block removal type: "+H.f(m)))}},
dg:function(){var u,t,s=this.z,r=H.z(s.slice(0),[H.e(s,0)])
C.a.a1(r,new U.fn())
s=this.e;(s&&C.b).J(s,"")
for(s=r.length,u=0;u<r.length;r.length===s||(0,H.P)(r),++u){t=r[u]
this.e.appendChild(t.b)}},
d4:function(){var u,t,s
for(u=this.z,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)u[s].f4()},
ai:function(){var u,t,s,r,q,p,o
for(u=this.z,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s){r=u[s]
r.e.classList.remove("show")
q=J.eF(C.a.gZ(r.a).r)
p=r.b.style
o=""+q+"px"
p.top=o}},
w:function(){var u,t,s
this.cy.d.classList.remove("nt-menu-drag-over")
for(u=this.z,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)u[s].w()},
dt:function(){var u,t,s,r,q,p=this,o=p.dy,n=p.c.getBoundingClientRect()
for(u=p.z,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s){r=C.c.eN(u[s].b.getBoundingClientRect().bottom-n.top)
if(typeof o!=="number")return H.J(o)
if(r>o)o=r}if(typeof o!=="number")return o.E()
u=o+1
p.fx=u
q=""+u+"px"
u=p.d.style
u.minHeight=q
u=p.cy.d.style
u.maxHeight=q},
aQ:function(){var u,t,s,r,q,p
for(u=this.z,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)for(r=u[s].a,q=r.length,p=0;p<r.length;r.length===q||(0,H.P)(r),++p)r[p].aQ()},
eu:function(a){var u,t=J.H(a)
if(!!J.m(t.h(a,"chains")).$ij)for(t=J.F(H.a1(t.h(a,"chains"),"$ih"));t.l();){u=t.gn(t)
if(!!J.m(u).$ij)this.er(u)}},
er:function(a){var u,t,s,r=new U.aa(this,H.z([],[U.M]))
C.a.k(this.z,r)
for(u=J.F(a);u.l();){t=u.gn(u)
if(!!J.m(t).$io){s=this.bJ(t)
if(s!=null)C.a.k(r.a,s)}}},
bJ:function(a){var u,t,s,r,q,p,o,n,m,l=this,k="children",j=J.H(a),i=l.cy.bl(H.l(j.h(a,"id")))
if(i==null){P.kA("No prototype block found for id: "+H.f(j.h(a,"id")))
j=l.cy.b
u=P.G
t=H.e(j,0)
P.kA(new H.at(j,H.d(new U.fe(),{func:1,ret:u,args:[t]}),[t,u]))
return}s=i.cX(0)
u=j.h(a,"x")
if(typeof u==="number"){u=j.h(a,"y")
u=typeof u==="number"}else u=!1
if(u){s.f=H.kz(j.h(a,"x"))
s.r=H.kz(j.h(a,"y"))}l.es(s,H.ap(j.h(a,"params")),H.ap(j.h(a,"properties")))
if(!!J.m(j.h(a,k)).$ij){s.Q=new U.ab(s,null,H.z([],[U.M]))
for(u=J.F(H.a1(j.h(a,k),"$ih"));u.l();){r=u.gn(u)
if(!!J.m(r).$io){q=l.bJ(r)
if(q!=null)C.a.k(s.Q.a,q)}}}if(!!J.m(j.h(a,"clauses")).$ij){s.sbR(H.z([],[U.ab]))
for(j=J.F(H.a1(j.h(a,"clauses"),"$ih")),u=[U.M],p=0;j.l();){o=j.gn(j)
t=J.m(o)
if(!!t.$io&&!!J.m(t.h(o,k)).$ij){n=new U.ab(s,p,H.z([],u))
m=s.ch;(m&&C.a).k(m,n)
for(t=J.F(H.a1(t.h(o,k),"$ih"));t.l();){q=l.bJ(H.c(t.gn(t),"$io"))
if(q!=null)C.a.k(n.a,q)}++p}}}return s},
es:function(a,b,c){var u,t,s,r,q,p,o,n="id",m="value",l=J.m(b)
if(!!l.$ij)for(l=l.gv(b),u=a.x,t=[P.i];l.l();){s=l.gn(l)
r=J.m(s)
if(!!r.$io&&H.S(r.p(s,n))&&H.S(r.p(s,m))&&u.p(0,r.h(s,n))){q=u.h(0,r.h(s,n))
if(!!J.m(r.h(s,m)).$io&&!C.a.D(H.z(["bool","num"],t),q.e))q.sB(0,q.d)
else q.sB(0,r.h(s,m))}}l=J.m(c)
if(!!l.$ij)for(l=l.gv(c),u=a.y,t=[P.i];l.l();){p=l.gn(l)
r=J.m(p)
if(!!r.$io&&H.S(r.p(p,n))&&H.S(r.p(p,m))&&u.p(0,r.h(p,n))){o=u.h(0,r.h(p,n))
if(!!J.m(r.h(p,m)).$io&&!C.a.D(H.z(["bool","num"],t),o.e))o.sB(0,o.d)
else o.sB(0,r.h(p,m))}}},
fz:function(){var u,t,s
for(u=this.k2,t=u.length,s=0;s<u.length;u.length===t||(0,H.P)(u),++s)u[s].ab(0)},
sN:function(a){this.k1=H.q(a,"$ih",[U.M],"$ah")}}
U.ff.prototype={
$1:function(a){this.a.fd(H.c(a,"$ip"))
return!1},
$S:1}
U.fg.prototype={
$1:function(a){return H.c(a,"$ip").preventDefault()},
$S:3}
U.fh.prototype={
$1:function(a){this.a.eU(H.c(a,"$ip"))
return!1},
$S:1}
U.fl.prototype={
$1:function(a){return H.c(a,"$iaa").a4(this.a)},
$S:45}
U.fm.prototype={
$2:function(a,b){H.l(a)
H.l(b)
if(typeof a!=="number")return a.E()
if(typeof b!=="number")return H.J(b)
return a+b},
$S:11}
U.fi.prototype={
$1:function(a){var u,t
H.c(a,"$ip")
u=this.a.r.classList
t=u.contains("show")
u.remove("show")
return t},
$S:1}
U.fj.prototype={
$1:function(a){return H.c(a,"$ip").stopPropagation()},
$S:3}
U.fk.prototype={
$1:function(a){return H.c(a,"$ip").preventDefault()},
$S:3}
U.fn.prototype={
$2:function(a,b){H.c(a,"$iaa")
H.c(b,"$iaa")
return J.lq(C.a.gZ(a.a).r,C.a.gZ(b.a).r)},
$S:46}
U.fe.prototype={
$1:function(a){return H.c(a,"$iaJ").a.a},
$S:47}
U.kl.prototype={
$5:function(a,b,c,d,e){var u=this.a
if(u==null)return J.Q(e)
else return H.x(u.cU([a,b,c,d,e]))},
$C:"$5",
$R:5}
U.hh.prototype={
$5:function(a,b,c,d,e){var u=H.x(this.a.cU([a,b,c,d,e]))
return u},
$C:"$5",
$R:5}
U.iS.prototype={
$1:function(a){var u,t,s=J.T(a)
if(!H.S(s.p(a,"action")))return
u=this.b
t=u.a
s.j(a,"id",t)
u.j(0,H.x(s.h(a,"action")),t)
s=this.a
this.c.j(0,t,s.a)
s.a=U.lZ(s.a,H.q(a,"$io",[P.i,P.C],"$ao"))},
$S:13}
U.iT.prototype={
$1:function(a){U.o2(this.a,this.b,a)},
$S:13}
U.iR.prototype={
$1:function(a){var u=this.a
u.a=U.o3(u.a,a)},
$S:49}
U.iU.prototype={
$1:function(a){return P.dg(["actual",a],P.i,null)},
$S:50}
U.iV.prototype={
$1:function(a){var u=J.T(a)
return H.S(u.p(a,"type"))&&J.a8(u.h(a,"type"),"select")},
$S:9}
U.iX.prototype={
$1:function(a){},
$S:13}
U.iW.prototype={
$1:function(a){var u,t="required",s=J.m(a)
if(!s.$ij)return!1
if(s.gi(a)===0)return!1
u=s.gi(a)
if(typeof u!=="number")return u.G()
if(u>1)return!0
if(H.S(J.n_(s.h(a,0),t))&&H.S(H.kq(J.a2(s.h(a,0),t))))return!1
return!0},
$S:9};(function aliases(){var u=J.a.prototype
u.dJ=u.m
u.dI=u.be
u=J.de.prototype
u.dL=u.m
u=P.cb.prototype
u.dP=u.aV
u=P.a0.prototype
u.dQ=u.af
u.dR=u.aU
u=P.h.prototype
u.dK=u.ao
u=P.C.prototype
u.dO=u.m
u=W.B.prototype
u.bo=u.T
u=W.ea.prototype
u.dS=u.a9
u=P.aG.prototype
u.dM=u.h
u.cb=u.j
u=U.bW.prototype
u.bn=u.C
u=U.dm.prototype
u.dN=u.C
u=U.d2.prototype
u.dH=u.am})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers._instance_0u,q=hunkHelpers._instance_1i,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0i,l=hunkHelpers._static_2
u(P,"oA","oc",14)
u(P,"oB","od",14)
u(P,"oC","oe",14)
t(P,"mn","ox",0)
s(P,"oD",1,null,["$2","$1"],["md",function(a){return P.md(a,null)}],10,0)
t(P,"mm","ot",0)
var k
r(k=P.a4.prototype,"gb0","a7",0)
r(k,"gb1","a8",0)
q(P.cb.prototype,"geG","k",17)
p(P.dD.prototype,"geT",0,1,null,["$2","$1"],["d_","bT"],10,0)
p(P.Z.prototype,"gcr",0,1,function(){return[null]},["$2","$1"],["a3","e5"],10,0)
r(k=P.dF.prototype,"gb0","a7",0)
r(k,"gb1","a8",0)
r(k=P.a0.prototype,"gb0","a7",0)
r(k,"gb1","a8",0)
r(P.dM.prototype,"gex","ar",0)
r(k=P.bd.prototype,"gb0","a7",0)
r(k,"gb1","a8",0)
o(k,"gee","ef",17)
n(k,"gei","ej",37)
r(k,"geg","eh",0)
u(P,"oF","oo",5)
s(W,"oK",4,null,["$4"],["oi"],26,0)
s(W,"oL",4,null,["$4"],["oj"],26,0)
m(W.eh.prototype,"geR","bS",0)
u(P,"mv","eC",5)
u(P,"oS","ki",53)
l(U,"p2","oE",54)
s(U,"p_",4,null,["$4"],["nB"],55,0)
s(U,"oZ",3,null,["$3"],["nA"],56,0)
l(U,"oY","nz",57)
u(U,"p1","nE",22)
t(U,"p0","nD",58)
u(U,"mx","o7",15)
u(U,"oW","o6",40)
u(U,"oX","o9",15)
o(k=U.M.prototype,"gdD","dE",3)
o(k,"gf6","f7",3)
o(k,"gaM","al",1)
o(k,"gaj","ak",1)
o(k=U.aa.prototype,"gaM","al",1)
o(k,"gaj","ak",1)
o(k=U.ab.prototype,"gfb","fc",1)
o(k,"gf2","f3",1)
o(k,"gf9","fa",1)
o(k,"gf0","f1",1)
o(U.d1.prototype,"gaj","ak",1)
o(k=U.aJ.prototype,"gfu","fv",44)
o(k,"gfs","ft",1)
q(U.dw.prototype,"geP","eQ",3)
o(k=U.bA.prototype,"gaM","al",1)
o(k,"gaj","ak",1)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.C,null)
s(P.C,[H.kY,J.a,J.bv,P.h,H.c7,P.aF,H.fI,H.bC,H.cI,P.hA,H.fq,H.co,H.hi,H.iK,P.bB,H.ef,P.a3,H.ht,H.hu,H.hj,P.kb,P.a6,P.a0,P.cb,P.dD,P.aY,P.Z,P.dA,P.a7,P.it,P.br,P.jf,P.cQ,P.dM,P.ad,P.kf,P.jC,P.jT,P.cd,P.dW,P.dX,P.y,P.kd,P.bM,P.e9,P.fo,P.hb,P.jI,P.R,P.b3,P.ac,P.b5,P.i0,P.dt,P.jl,P.d9,P.aR,P.j,P.o,P.cz,P.I,P.X,P.i,P.aw,P.ba,W.fx,W.eh,W.bP,W.D,W.dl,W.ea,W.k4,W.d8,W.jd,W.ak,W.jS,W.er,P.k_,P.iZ,P.aG,P.b8,P.jN,U.bW,U.eW,U.cl,U.bx,U.M,U.b6,U.fL,U.d2,U.d1,U.i6,U.aJ,U.dw,U.bA])
s(J.a,[J.hf,J.dd,J.de,J.bE,J.c6,J.bF,H.cB,H.bJ,W.k,W.eG,W.bw,W.b1,W.b2,W.U,W.dG,W.ax,W.fB,W.bm,W.dI,W.d5,W.dK,W.fD,W.cr,W.n,W.dO,W.ct,W.aE,W.ha,W.dR,W.c5,W.dh,W.hC,W.dY,W.dZ,W.aH,W.e_,W.e2,W.aI,W.e6,W.e8,W.aL,W.eb,W.aM,W.eg,W.ek,W.iG,W.aO,W.em,W.iI,W.iQ,W.es,W.eu,W.ew,W.ey,W.eA,P.cw,P.hZ,P.aS,P.dU,P.aU,P.e4,P.i4,P.ei,P.aW,P.eo,P.eR,P.dC,P.ed])
s(J.de,[J.i2,J.bO,J.bG])
t(J.kX,J.bE)
s(J.c6,[J.dc,J.hg])
s(P.h,[H.u,H.c8,H.bp,H.dv,H.cG,H.jb])
s(H.u,[H.as,H.d7,H.bH,P.jB,P.av])
s(H.as,[H.iz,H.at,P.jG])
t(H.c3,H.c8)
s(P.aF,[H.aT,H.dz,H.iC,H.ij])
t(H.fG,H.dv)
t(H.d6,H.cG)
t(P.eq,P.hA)
t(P.iO,P.eq)
t(H.fr,P.iO)
s(H.co,[H.fs,H.i5,H.kE,H.iD,H.hk,H.ku,H.kv,H.kw,P.j3,P.j2,P.j4,P.j5,P.kc,P.k6,P.k7,P.jm,P.ju,P.jq,P.jr,P.js,P.jo,P.jt,P.jn,P.jx,P.jy,P.jw,P.jv,P.iu,P.iv,P.iw,P.ix,P.j9,P.j8,P.jM,P.km,P.jQ,P.jP,P.jR,P.hz,P.jJ,P.hS,P.fE,P.fF,W.fH,W.fJ,W.fK,W.hG,W.hI,W.ib,W.is,W.jk,W.jZ,W.hU,W.hT,W.jU,W.jV,W.ka,W.ke,P.k1,P.k2,P.j0,P.fv,P.h5,P.h6,P.h7,P.kg,P.hn,P.kj,P.kk,P.kn,P.ko,P.kp,P.kB,P.kC,P.eT,U.eQ,U.eP,U.eL,U.eM,U.eN,U.eO,U.i8,U.i9,U.ih,U.ig,U.fQ,U.fP,U.fR,U.fS,U.fO,U.fT,U.fN,U.fU,U.eY,U.eZ,U.f5,U.f6,U.f2,U.f3,U.f4,U.f8,U.f7,U.fc,U.fd,U.fX,U.fY,U.fZ,U.fW,U.h_,U.h2,U.h0,U.h1,U.fV,U.f1,U.f_,U.f0,U.hW,U.hV,U.ik,U.il,U.ff,U.fg,U.fh,U.fl,U.fm,U.fi,U.fj,U.fk,U.fn,U.fe,U.kl,U.hh,U.iS,U.iT,U.iR,U.iU,U.iV,U.iX,U.iW])
t(H.ft,H.fq)
s(P.bB,[H.hX,H.hl,H.iN,H.dx,H.fa,H.ic,P.eJ,P.df,P.cE,P.aQ,P.hR,P.iP,P.iM,P.b9,P.fp,P.fA])
s(H.iD,[H.iq,H.cm])
t(H.j1,P.eJ)
t(P.hx,P.a3)
s(P.hx,[H.ar,P.jA,P.jF,W.j6])
t(H.di,H.bJ)
s(H.di,[H.cM,H.cO])
t(H.cN,H.cM)
t(H.cC,H.cN)
t(H.cP,H.cO)
t(H.dj,H.cP)
s(H.dj,[H.hK,H.hL,H.hM,H.hN,H.hO,H.dk,H.hP])
s(P.a6,[P.jY,P.aP,W.dN,W.bs])
t(P.dE,P.jY)
t(P.j7,P.dE)
s(P.a0,[P.dF,P.bd])
t(P.a4,P.dF)
t(P.k5,P.cb)
s(P.dD,[P.dB,P.k8])
s(P.br,[P.je,P.jg])
t(P.cU,P.cQ)
s(P.aP,[P.jL,P.jW])
t(P.cT,P.bd)
t(P.jO,P.kf)
t(P.jD,P.jA)
t(P.jK,P.jT)
t(P.hw,P.dX)
t(P.ii,P.e9)
t(P.c0,P.it)
s(P.c0,[P.da,P.hr,P.hq])
t(P.hp,P.df)
t(P.ho,P.fo)
t(P.jH,P.jI)
s(P.ac,[P.bh,P.G])
s(P.aQ,[P.dp,P.hc])
s(W.k,[W.A,W.h3,W.h8,W.hB,W.cA,W.aK,W.cR,W.aN,W.ay,W.cV,W.iY,W.ca,W.bq,P.bL,P.eU,P.bY])
s(W.A,[W.B,W.bz,W.cK])
s(W.B,[W.w,P.t])
s(W.w,[W.cj,W.eH,W.ck,W.by,W.b4,W.h9,W.bD,W.id,W.cH,W.du,W.iA,W.iB,W.cJ])
s(W.b1,[W.c1,W.fy,W.fz])
t(W.fw,W.b2)
t(W.c2,W.dG)
t(W.cp,W.ax)
t(W.dJ,W.dI)
t(W.d4,W.dJ)
t(W.dL,W.dK)
t(W.fC,W.dL)
s(P.hw,[W.ja,W.aA,W.ah,P.h4])
t(W.aq,W.bw)
t(W.dP,W.dO)
t(W.cs,W.dP)
t(W.dS,W.dR)
t(W.c4,W.dS)
t(W.hF,W.dY)
t(W.hH,W.dZ)
t(W.e0,W.e_)
t(W.hJ,W.e0)
t(W.bc,W.n)
t(W.p,W.bc)
t(W.e3,W.e2)
t(W.cD,W.e3)
t(W.e7,W.e6)
t(W.i3,W.e7)
t(W.ia,W.e8)
t(W.cS,W.cR)
t(W.im,W.cS)
t(W.ec,W.eb)
t(W.io,W.ec)
t(W.ir,W.eg)
t(W.el,W.ek)
t(W.iE,W.el)
t(W.cW,W.cV)
t(W.iF,W.cW)
t(W.en,W.em)
t(W.iH,W.en)
t(W.et,W.es)
t(W.jc,W.et)
t(W.dH,W.d5)
t(W.ev,W.eu)
t(W.jz,W.ev)
t(W.ex,W.ew)
t(W.e1,W.ex)
t(W.ez,W.ey)
t(W.jX,W.ez)
t(W.eB,W.eA)
t(W.k3,W.eB)
t(W.jh,W.j6)
t(P.fu,P.ii)
s(P.fu,[W.ji,P.eK])
t(W.l2,W.dN)
t(W.jj,P.a7)
t(W.k9,W.ea)
t(P.k0,P.k_)
t(P.j_,P.iZ)
s(P.aG,[P.ae,P.dT])
t(P.cv,P.dT)
t(P.ag,P.jN)
t(P.dV,P.dU)
t(P.hs,P.dV)
t(P.e5,P.e4)
t(P.hY,P.e5)
t(P.cF,P.t)
t(P.ej,P.ei)
t(P.iy,P.ej)
t(P.ep,P.eo)
t(P.iJ,P.ep)
t(P.eS,P.dC)
t(P.i_,P.bY)
t(P.ee,P.ed)
t(P.ip,P.ee)
s(U.bW,[U.dm,U.ie,U.fM])
s(U.dm,[U.hd,U.i7])
s(U.eW,[U.aa,U.ab])
s(U.d2,[U.i1,U.hQ])
s(U.i6,[U.eV,U.bX,U.hD,U.hE])
u(H.cM,P.y)
u(H.cN,H.bC)
u(H.cO,P.y)
u(H.cP,H.bC)
u(P.dX,P.y)
u(P.e9,P.bM)
u(P.eq,P.kd)
u(W.dG,W.fx)
u(W.dI,P.y)
u(W.dJ,W.D)
u(W.dK,P.y)
u(W.dL,W.D)
u(W.dO,P.y)
u(W.dP,W.D)
u(W.dR,P.y)
u(W.dS,W.D)
u(W.dY,P.a3)
u(W.dZ,P.a3)
u(W.e_,P.y)
u(W.e0,W.D)
u(W.e2,P.y)
u(W.e3,W.D)
u(W.e6,P.y)
u(W.e7,W.D)
u(W.e8,P.a3)
u(W.cR,P.y)
u(W.cS,W.D)
u(W.eb,P.y)
u(W.ec,W.D)
u(W.eg,P.a3)
u(W.ek,P.y)
u(W.el,W.D)
u(W.cV,P.y)
u(W.cW,W.D)
u(W.em,P.y)
u(W.en,W.D)
u(W.es,P.y)
u(W.et,W.D)
u(W.eu,P.y)
u(W.ev,W.D)
u(W.ew,P.y)
u(W.ex,W.D)
u(W.ey,P.y)
u(W.ez,W.D)
u(W.eA,P.y)
u(W.eB,W.D)
u(P.dT,P.y)
u(P.dU,P.y)
u(P.dV,W.D)
u(P.e4,P.y)
u(P.e5,W.D)
u(P.ei,P.y)
u(P.ej,W.D)
u(P.eo,P.y)
u(P.ep,W.D)
u(P.dC,P.a3)
u(P.ed,P.y)
u(P.ee,W.D)})()
var v={mangledGlobalNames:{G:"int",bh:"double",ac:"num",i:"String",R:"bool",I:"Null",j:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1},{func:1,ret:P.R,args:[W.p]},{func:1,ret:P.I},{func:1,ret:-1,args:[W.p]},{func:1,ret:P.I,args:[W.p]},{func:1,args:[,]},{func:1,ret:P.I,args:[W.n]},{func:1,ret:P.I,args:[,,]},{func:1,ret:-1,args:[P.i,,]},{func:1,ret:P.R,args:[,]},{func:1,ret:-1,args:[P.C],opt:[P.X]},{func:1,ret:P.G,args:[P.G,P.G]},{func:1,ret:P.I,args:[P.i]},{func:1,ret:P.I,args:[[P.o,,,]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[[P.o,,,]]},{func:1,ret:P.I,args:[,]},{func:1,ret:-1,args:[P.C]},{func:1,ret:P.i,args:[P.G]},{func:1,ret:P.R,args:[W.A]},{func:1,ret:P.R,args:[W.ak]},{func:1,ret:P.R,args:[P.i]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[W.B]},{func:1,ret:P.R,args:[W.B]},{func:1,ret:P.R,args:[W.B,P.i,P.i,W.bP]},{func:1,args:[W.n]},{func:1,args:[P.i]},{func:1,ret:P.ae,args:[,]},{func:1,ret:[P.cv,,],args:[,]},{func:1,ret:P.aG,args:[,]},{func:1,args:[,P.i]},{func:1,ret:P.I,args:[W.bm]},{func:1,ret:[P.Z,,],args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:P.I,args:[P.i,,]},{func:1,ret:-1,args:[,P.X]},{func:1,ret:P.G,args:[U.M]},{func:1,ret:P.I,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[[P.j,,]]},{func:1,ret:P.G,args:[U.ab]},{func:1,ret:P.I,args:[P.ba,,]},{func:1,ret:P.R,args:[U.aJ]},{func:1,ret:-1,args:[W.n]},{func:1,ret:P.G,args:[U.aa]},{func:1,ret:P.G,args:[U.aa,U.aa]},{func:1,ret:P.G,args:[U.aJ]},{func:1,ret:-1,args:[W.A,W.A]},{func:1,ret:P.I,args:[[P.j,,]]},{func:1,ret:[P.o,P.i,,],args:[,]},{func:1,args:[,,]},{func:1,ret:P.R,args:[[P.av,P.i]]},{func:1,ret:P.C,args:[,]},{func:1,ret:P.G,args:[,,]},{func:1,ret:-1,args:[P.i,P.i,P.i,P.ae]},{func:1,ret:-1,args:[P.i,P.i,P.ae]},{func:1,ret:P.i,args:[P.i,P.ae]},{func:1,ret:P.i},{func:1,ret:W.B,args:[W.A]},{func:1,ret:P.I,args:[,],opt:[P.X]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.cj.prototype
C.o=W.by.prototype
C.h=W.c2.prototype
C.b=W.b4.prototype
C.H=J.a.prototype
C.a=J.bE.prototype
C.e=J.dc.prototype
C.r=J.dd.prototype
C.c=J.c6.prototype
C.f=J.bF.prototype
C.I=J.bG.prototype
C.j=W.cD.prototype
C.v=J.i2.prototype
C.w=W.du.prototype
C.m=J.bO.prototype
C.x=new H.fI([P.I])
C.Q=new P.hb()
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
C.q=function(hooks) { return hooks; }

C.i=new P.ho()
C.E=new P.i0()
C.F=new P.jf()
C.d=new P.jO()
C.G=new P.b5(0)
C.J=new P.hq(null)
C.K=new P.hr(null)
C.L=H.z(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.M=H.z(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.N=H.z(u([]),[P.i])
C.t=u([])
C.k=H.z(u(["bind","if","ref","repeat","syntax"]),[P.i])
C.l=H.z(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])
C.O=H.z(u([]),[P.ba])
C.u=new H.ft(0,{},C.O,[P.ba,null])
C.P=new H.cI("call")})();(function staticFields(){$.b0=0
$.cn=null
$.lw=null
$.l8=!1
$.mr=null
$.mk=null
$.mD=null
$.kr=null
$.kx=null
$.lh=null
$.ce=null
$.cX=null
$.cY=null
$.l9=!1
$.O=C.d
$.ao=[]
$.bn=null
$.kS=null
$.lG=null
$.lF=null
$.dQ=P.cx(P.i,P.aR)
$.lD=null
$.lC=null
$.lB=null
$.lA=null
$.ai=P.cx(P.i,U.bA)})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pc","kF",function(){return H.lg("_$dart_dartClosure")})
u($,"pe","lk",function(){return H.lg("_$dart_js")})
u($,"ph","mK",function(){return H.bb(H.iL({
toString:function(){return"$receiver$"}}))})
u($,"pi","mL",function(){return H.bb(H.iL({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pj","mM",function(){return H.bb(H.iL(null))})
u($,"pk","mN",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pn","mQ",function(){return H.bb(H.iL(void 0))})
u($,"po","mR",function(){return H.bb(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pm","mP",function(){return H.bb(H.lX(null))})
u($,"pl","mO",function(){return H.bb(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pq","mT",function(){return H.bb(H.lX(void 0))})
u($,"pp","mS",function(){return H.bb(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pt","ll",function(){return P.ob()})
u($,"pd","eE",function(){var t=new P.Z(C.d,[P.I])
t.ey(null)
return t})
u($,"pb","mJ",function(){return{}})
u($,"pv","mU",function(){return P.lL(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)})
u($,"pa","mI",function(){return P.nX("^\\S+$")})
u($,"pz","lo",function(){return H.c(P.lc(self),"$iaG")})
u($,"pu","lm",function(){return H.lg("_$dart_dartObject")})
u($,"px","ln",function(){return function DartObject(a){this.o=a}})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,DOMFileSystem:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cB,DataView:H.bJ,ArrayBufferView:H.bJ,Float32Array:H.cC,Float64Array:H.cC,Int16Array:H.hK,Int32Array:H.hL,Int8Array:H.hM,Uint16Array:H.hN,Uint32Array:H.hO,Uint8ClampedArray:H.dk,CanvasPixelArray:H.dk,Uint8Array:H.hP,HTMLAudioElement:W.w,HTMLBRElement:W.w,HTMLButtonElement:W.w,HTMLCanvasElement:W.w,HTMLContentElement:W.w,HTMLDListElement:W.w,HTMLDataElement:W.w,HTMLDataListElement:W.w,HTMLDetailsElement:W.w,HTMLDialogElement:W.w,HTMLEmbedElement:W.w,HTMLFieldSetElement:W.w,HTMLHRElement:W.w,HTMLHeadElement:W.w,HTMLHeadingElement:W.w,HTMLHtmlElement:W.w,HTMLIFrameElement:W.w,HTMLImageElement:W.w,HTMLLIElement:W.w,HTMLLabelElement:W.w,HTMLLegendElement:W.w,HTMLLinkElement:W.w,HTMLMapElement:W.w,HTMLMediaElement:W.w,HTMLMenuElement:W.w,HTMLMetaElement:W.w,HTMLMeterElement:W.w,HTMLModElement:W.w,HTMLOListElement:W.w,HTMLObjectElement:W.w,HTMLOptGroupElement:W.w,HTMLOptionElement:W.w,HTMLOutputElement:W.w,HTMLParagraphElement:W.w,HTMLParamElement:W.w,HTMLPictureElement:W.w,HTMLPreElement:W.w,HTMLProgressElement:W.w,HTMLQuoteElement:W.w,HTMLScriptElement:W.w,HTMLShadowElement:W.w,HTMLSlotElement:W.w,HTMLSourceElement:W.w,HTMLSpanElement:W.w,HTMLTableCaptionElement:W.w,HTMLTableCellElement:W.w,HTMLTableDataCellElement:W.w,HTMLTableHeaderCellElement:W.w,HTMLTableColElement:W.w,HTMLTextAreaElement:W.w,HTMLTimeElement:W.w,HTMLTitleElement:W.w,HTMLTrackElement:W.w,HTMLUListElement:W.w,HTMLUnknownElement:W.w,HTMLVideoElement:W.w,HTMLDirectoryElement:W.w,HTMLFontElement:W.w,HTMLFrameElement:W.w,HTMLFrameSetElement:W.w,HTMLMarqueeElement:W.w,HTMLElement:W.w,AccessibleNodeList:W.eG,HTMLAnchorElement:W.cj,HTMLAreaElement:W.eH,HTMLBaseElement:W.ck,Blob:W.bw,HTMLBodyElement:W.by,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.c1,CSSUnitValue:W.c1,CSSPerspective:W.fw,CSSCharsetRule:W.U,CSSConditionRule:W.U,CSSFontFaceRule:W.U,CSSGroupingRule:W.U,CSSImportRule:W.U,CSSKeyframeRule:W.U,MozCSSKeyframeRule:W.U,WebKitCSSKeyframeRule:W.U,CSSKeyframesRule:W.U,MozCSSKeyframesRule:W.U,WebKitCSSKeyframesRule:W.U,CSSMediaRule:W.U,CSSNamespaceRule:W.U,CSSPageRule:W.U,CSSRule:W.U,CSSStyleRule:W.U,CSSSupportsRule:W.U,CSSViewportRule:W.U,CSSStyleDeclaration:W.c2,MSStyleCSSProperties:W.c2,CSS2Properties:W.c2,CSSStyleSheet:W.cp,CSSImageValue:W.b1,CSSKeywordValue:W.b1,CSSPositionValue:W.b1,CSSResourceValue:W.b1,CSSURLImageValue:W.b1,CSSStyleValue:W.b1,CSSMatrixComponent:W.b2,CSSRotation:W.b2,CSSScale:W.b2,CSSSkew:W.b2,CSSTranslation:W.b2,CSSTransformComponent:W.b2,CSSTransformValue:W.fy,CSSUnparsedValue:W.fz,DataTransferItemList:W.fB,HTMLDivElement:W.b4,DOMException:W.bm,ClientRectList:W.d4,DOMRectList:W.d4,DOMRectReadOnly:W.d5,DOMStringList:W.fC,DOMTokenList:W.fD,Element:W.B,DirectoryEntry:W.cr,Entry:W.cr,FileEntry:W.cr,AbortPaymentEvent:W.n,AnimationEvent:W.n,AnimationPlaybackEvent:W.n,ApplicationCacheErrorEvent:W.n,BackgroundFetchClickEvent:W.n,BackgroundFetchEvent:W.n,BackgroundFetchFailEvent:W.n,BackgroundFetchedEvent:W.n,BeforeInstallPromptEvent:W.n,BeforeUnloadEvent:W.n,BlobEvent:W.n,CanMakePaymentEvent:W.n,ClipboardEvent:W.n,CloseEvent:W.n,CustomEvent:W.n,DeviceMotionEvent:W.n,DeviceOrientationEvent:W.n,ErrorEvent:W.n,ExtendableEvent:W.n,ExtendableMessageEvent:W.n,FetchEvent:W.n,FontFaceSetLoadEvent:W.n,ForeignFetchEvent:W.n,GamepadEvent:W.n,HashChangeEvent:W.n,InstallEvent:W.n,MediaEncryptedEvent:W.n,MediaKeyMessageEvent:W.n,MediaQueryListEvent:W.n,MediaStreamEvent:W.n,MediaStreamTrackEvent:W.n,MessageEvent:W.n,MIDIConnectionEvent:W.n,MIDIMessageEvent:W.n,MutationEvent:W.n,NotificationEvent:W.n,PageTransitionEvent:W.n,PaymentRequestEvent:W.n,PaymentRequestUpdateEvent:W.n,PopStateEvent:W.n,PresentationConnectionAvailableEvent:W.n,PresentationConnectionCloseEvent:W.n,ProgressEvent:W.n,PromiseRejectionEvent:W.n,PushEvent:W.n,RTCDataChannelEvent:W.n,RTCDTMFToneChangeEvent:W.n,RTCPeerConnectionIceEvent:W.n,RTCTrackEvent:W.n,SecurityPolicyViolationEvent:W.n,SensorErrorEvent:W.n,SpeechRecognitionError:W.n,SpeechRecognitionEvent:W.n,SpeechSynthesisEvent:W.n,StorageEvent:W.n,SyncEvent:W.n,TrackEvent:W.n,TransitionEvent:W.n,WebKitTransitionEvent:W.n,VRDeviceEvent:W.n,VRDisplayEvent:W.n,VRSessionEvent:W.n,MojoInterfaceRequestEvent:W.n,ResourceProgressEvent:W.n,USBConnectionEvent:W.n,IDBVersionChangeEvent:W.n,AudioProcessingEvent:W.n,OfflineAudioCompletionEvent:W.n,WebGLContextEvent:W.n,Event:W.n,InputEvent:W.n,AbsoluteOrientationSensor:W.k,Accelerometer:W.k,AccessibleNode:W.k,AmbientLightSensor:W.k,Animation:W.k,ApplicationCache:W.k,DOMApplicationCache:W.k,OfflineResourceList:W.k,BackgroundFetchRegistration:W.k,BatteryManager:W.k,BroadcastChannel:W.k,CanvasCaptureMediaStreamTrack:W.k,EventSource:W.k,FileReader:W.k,Gyroscope:W.k,XMLHttpRequest:W.k,XMLHttpRequestEventTarget:W.k,XMLHttpRequestUpload:W.k,LinearAccelerationSensor:W.k,Magnetometer:W.k,MediaDevices:W.k,MediaQueryList:W.k,MediaRecorder:W.k,MediaSource:W.k,MediaStream:W.k,MediaStreamTrack:W.k,MIDIAccess:W.k,MIDIInput:W.k,MIDIOutput:W.k,MIDIPort:W.k,NetworkInformation:W.k,Notification:W.k,OffscreenCanvas:W.k,OrientationSensor:W.k,PaymentRequest:W.k,Performance:W.k,PermissionStatus:W.k,PresentationAvailability:W.k,PresentationConnection:W.k,PresentationConnectionList:W.k,PresentationRequest:W.k,RelativeOrientationSensor:W.k,RemotePlayback:W.k,RTCDataChannel:W.k,DataChannel:W.k,RTCDTMFSender:W.k,RTCPeerConnection:W.k,webkitRTCPeerConnection:W.k,mozRTCPeerConnection:W.k,ScreenOrientation:W.k,Sensor:W.k,ServiceWorker:W.k,ServiceWorkerContainer:W.k,ServiceWorkerRegistration:W.k,SharedWorker:W.k,SpeechRecognition:W.k,SpeechSynthesis:W.k,SpeechSynthesisUtterance:W.k,VR:W.k,VRDevice:W.k,VRDisplay:W.k,VRSession:W.k,VisualViewport:W.k,WebSocket:W.k,Worker:W.k,WorkerPerformance:W.k,BluetoothDevice:W.k,BluetoothRemoteGATTCharacteristic:W.k,Clipboard:W.k,MojoInterfaceInterceptor:W.k,USB:W.k,IDBDatabase:W.k,IDBTransaction:W.k,AnalyserNode:W.k,RealtimeAnalyserNode:W.k,AudioBufferSourceNode:W.k,AudioDestinationNode:W.k,AudioNode:W.k,AudioScheduledSourceNode:W.k,AudioWorkletNode:W.k,BiquadFilterNode:W.k,ChannelMergerNode:W.k,AudioChannelMerger:W.k,ChannelSplitterNode:W.k,AudioChannelSplitter:W.k,ConstantSourceNode:W.k,ConvolverNode:W.k,DelayNode:W.k,DynamicsCompressorNode:W.k,GainNode:W.k,AudioGainNode:W.k,IIRFilterNode:W.k,MediaElementAudioSourceNode:W.k,MediaStreamAudioDestinationNode:W.k,MediaStreamAudioSourceNode:W.k,OscillatorNode:W.k,Oscillator:W.k,PannerNode:W.k,AudioPannerNode:W.k,webkitAudioPannerNode:W.k,ScriptProcessorNode:W.k,JavaScriptAudioNode:W.k,StereoPannerNode:W.k,WaveShaperNode:W.k,EventTarget:W.k,File:W.aq,FileList:W.cs,FileWriter:W.h3,FontFace:W.ct,FontFaceSet:W.h8,HTMLFormElement:W.h9,Gamepad:W.aE,History:W.ha,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,ImageData:W.c5,HTMLInputElement:W.bD,Location:W.dh,MediaKeySession:W.hB,MediaList:W.hC,MessagePort:W.cA,MIDIInputMap:W.hF,MIDIOutputMap:W.hH,MimeType:W.aH,MimeTypeArray:W.hJ,MouseEvent:W.p,DragEvent:W.p,PointerEvent:W.p,WheelEvent:W.p,Document:W.A,DocumentFragment:W.A,HTMLDocument:W.A,ShadowRoot:W.A,XMLDocument:W.A,DocumentType:W.A,Node:W.A,NodeList:W.cD,RadioNodeList:W.cD,Plugin:W.aI,PluginArray:W.i3,RTCStatsReport:W.ia,HTMLSelectElement:W.id,SourceBuffer:W.aK,SourceBufferList:W.im,SpeechGrammar:W.aL,SpeechGrammarList:W.io,SpeechRecognitionResult:W.aM,Storage:W.ir,HTMLStyleElement:W.cH,StyleSheet:W.ax,HTMLTableElement:W.du,HTMLTableRowElement:W.iA,HTMLTableSectionElement:W.iB,HTMLTemplateElement:W.cJ,TextTrack:W.aN,TextTrackCue:W.ay,VTTCue:W.ay,TextTrackCueList:W.iE,TextTrackList:W.iF,TimeRanges:W.iG,Touch:W.aO,TouchList:W.iH,TrackDefaultList:W.iI,CompositionEvent:W.bc,FocusEvent:W.bc,KeyboardEvent:W.bc,TextEvent:W.bc,TouchEvent:W.bc,UIEvent:W.bc,URL:W.iQ,VideoTrackList:W.iY,Window:W.ca,DOMWindow:W.ca,DedicatedWorkerGlobalScope:W.bq,ServiceWorkerGlobalScope:W.bq,SharedWorkerGlobalScope:W.bq,WorkerGlobalScope:W.bq,Attr:W.cK,CSSRuleList:W.jc,ClientRect:W.dH,DOMRect:W.dH,GamepadList:W.jz,NamedNodeMap:W.e1,MozNamedAttrMap:W.e1,SpeechRecognitionResultList:W.jX,StyleSheetList:W.k3,IDBKeyRange:P.cw,IDBObjectStore:P.hZ,IDBOpenDBRequest:P.bL,IDBVersionChangeRequest:P.bL,IDBRequest:P.bL,SVGLength:P.aS,SVGLengthList:P.hs,SVGNumber:P.aU,SVGNumberList:P.hY,SVGPointList:P.i4,SVGScriptElement:P.cF,SVGStringList:P.iy,SVGAElement:P.t,SVGAnimateElement:P.t,SVGAnimateMotionElement:P.t,SVGAnimateTransformElement:P.t,SVGAnimationElement:P.t,SVGCircleElement:P.t,SVGClipPathElement:P.t,SVGDefsElement:P.t,SVGDescElement:P.t,SVGDiscardElement:P.t,SVGEllipseElement:P.t,SVGFEBlendElement:P.t,SVGFEColorMatrixElement:P.t,SVGFEComponentTransferElement:P.t,SVGFECompositeElement:P.t,SVGFEConvolveMatrixElement:P.t,SVGFEDiffuseLightingElement:P.t,SVGFEDisplacementMapElement:P.t,SVGFEDistantLightElement:P.t,SVGFEFloodElement:P.t,SVGFEFuncAElement:P.t,SVGFEFuncBElement:P.t,SVGFEFuncGElement:P.t,SVGFEFuncRElement:P.t,SVGFEGaussianBlurElement:P.t,SVGFEImageElement:P.t,SVGFEMergeElement:P.t,SVGFEMergeNodeElement:P.t,SVGFEMorphologyElement:P.t,SVGFEOffsetElement:P.t,SVGFEPointLightElement:P.t,SVGFESpecularLightingElement:P.t,SVGFESpotLightElement:P.t,SVGFETileElement:P.t,SVGFETurbulenceElement:P.t,SVGFilterElement:P.t,SVGForeignObjectElement:P.t,SVGGElement:P.t,SVGGeometryElement:P.t,SVGGraphicsElement:P.t,SVGImageElement:P.t,SVGLineElement:P.t,SVGLinearGradientElement:P.t,SVGMarkerElement:P.t,SVGMaskElement:P.t,SVGMetadataElement:P.t,SVGPathElement:P.t,SVGPatternElement:P.t,SVGPolygonElement:P.t,SVGPolylineElement:P.t,SVGRadialGradientElement:P.t,SVGRectElement:P.t,SVGSetElement:P.t,SVGStopElement:P.t,SVGStyleElement:P.t,SVGSVGElement:P.t,SVGSwitchElement:P.t,SVGSymbolElement:P.t,SVGTSpanElement:P.t,SVGTextContentElement:P.t,SVGTextElement:P.t,SVGTextPathElement:P.t,SVGTextPositioningElement:P.t,SVGTitleElement:P.t,SVGUseElement:P.t,SVGViewElement:P.t,SVGGradientElement:P.t,SVGComponentTransferFunctionElement:P.t,SVGFEDropShadowElement:P.t,SVGMPathElement:P.t,SVGElement:P.t,SVGTransform:P.aW,SVGTransformList:P.iJ,AudioBuffer:P.eR,AudioParamMap:P.eS,AudioTrackList:P.eU,AudioContext:P.bY,webkitAudioContext:P.bY,BaseAudioContext:P.bY,OfflineAudioContext:P.i_,SQLResultSetRowList:P.ip})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,External:true,FaceDetector:true,FederatedCredential:true,DOMFileSystem:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleSheet:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,DirectoryEntry:true,Entry:true,FileEntry:true,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,EventSource:true,FileReader:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SharedWorker:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,FontFace:true,FontFaceSet:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,Location:true,MediaKeySession:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLStyleElement:true,StyleSheet:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,VideoTrackList:true,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,IDBKeyRange:true,IDBObjectStore:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.di.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.cN.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"
W.cR.$nativeSuperclassTag="EventTarget"
W.cS.$nativeSuperclassTag="EventTarget"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.mw,[])
else U.mw([])})})()
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

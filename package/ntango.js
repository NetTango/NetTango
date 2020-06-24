(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.q9(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kL"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.kL(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={ku:function ku(){},
aK:function(a,b,c,d){P.bb(b,"start")
if(c!=null){P.bb(c,"end")
if(typeof b!=="number")return b.I()
if(b>c)H.G(P.aO(b,0,c,"start",null))}return new H.dt(a,b,c,d.i("dt<0>"))},
lF:function(a,b,c,d){if(u.X.b(a))return new H.aN(a,b,c.i("@<0>").q(d).i("aN<1,2>"))
return new H.az(a,b,c.i("@<0>").q(d).i("az<1,2>"))},
ol:function(a,b,c){var t="takeCount"
P.bj(b,t,u.S)
P.bb(b,t)
if(u.X.b(a))return new H.d_(a,b,c.i("d_<0>"))
return new H.bV(a,b,c.i("bV<0>"))},
of:function(a,b,c){var t="count"
if(u.X.b(a)){P.bj(b,t,u.S)
P.bb(b,t)
return new H.cZ(a,b,c.i("cZ<0>"))}P.bj(b,t,u.S)
P.bb(b,t)
return new H.bU(a,b,c.i("bU<0>"))},
eu:function(){return new P.aY("No element")},
nP:function(){return new P.aY("Too many elements")},
nO:function(){return new P.aY("Too few elements")},
oi:function(a,b,c){H.eV(a,0,J.ad(a)-1,b,c)},
eV:function(a,b,c,d,e){if(c-b<=32)H.oh(a,b,c,d,e)
else H.og(a,b,c,d,e)},
oh:function(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.an(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.I()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
og:function(a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i=C.e.ay(a6-a5+1,6),h=a5+i,g=a6-i,f=C.e.ay(a5+a6,2),e=f-i,d=f+i,c=J.an(a4),b=c.h(a4,h),a=c.h(a4,e),a0=c.h(a4,f),a1=c.h(a4,d),a2=c.h(a4,g),a3=a7.$2(b,a)
if(typeof a3!=="number")return a3.I()
if(a3>0){t=a
a=b
b=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.I()
if(a3>0){t=a2
a2=a1
a1=t}a3=a7.$2(b,a0)
if(typeof a3!=="number")return a3.I()
if(a3>0){t=a0
a0=b
b=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.I()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(b,a1)
if(typeof a3!=="number")return a3.I()
if(a3>0){t=a1
a1=b
b=t}a3=a7.$2(a0,a1)
if(typeof a3!=="number")return a3.I()
if(a3>0){t=a1
a1=a0
a0=t}a3=a7.$2(a,a2)
if(typeof a3!=="number")return a3.I()
if(a3>0){t=a2
a2=a
a=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.I()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.I()
if(a3>0){t=a2
a2=a1
a1=t}c.j(a4,h,b)
c.j(a4,f,a0)
c.j(a4,g,a2)
c.j(a4,e,c.h(a4,a5))
c.j(a4,d,c.h(a4,a6))
s=a5+1
r=a6-1
if(J.bD(a7.$2(a,a1),0)){for(q=s;q<=r;++q){p=c.h(a4,q)
o=a7.$2(p,a)
if(o===0)continue
if(typeof o!=="number")return o.ah()
if(o<0){if(q!==s){c.j(a4,q,c.h(a4,s))
c.j(a4,s,p)}++s}else for(;!0;){o=a7.$2(c.h(a4,r),a)
if(typeof o!=="number")return o.I()
if(o>0){--r
continue}else{n=r-1
if(o<0){c.j(a4,q,c.h(a4,s))
m=s+1
c.j(a4,s,c.h(a4,r))
c.j(a4,r,p)
r=n
s=m
break}else{c.j(a4,q,c.h(a4,r))
c.j(a4,r,p)
r=n
break}}}}l=!0}else{for(q=s;q<=r;++q){p=c.h(a4,q)
k=a7.$2(p,a)
if(typeof k!=="number")return k.ah()
if(k<0){if(q!==s){c.j(a4,q,c.h(a4,s))
c.j(a4,s,p)}++s}else{j=a7.$2(p,a1)
if(typeof j!=="number")return j.I()
if(j>0)for(;!0;){o=a7.$2(c.h(a4,r),a1)
if(typeof o!=="number")return o.I()
if(o>0){--r
if(r<q)break
continue}else{o=a7.$2(c.h(a4,r),a)
if(typeof o!=="number")return o.ah()
n=r-1
if(o<0){c.j(a4,q,c.h(a4,s))
m=s+1
c.j(a4,s,c.h(a4,r))
c.j(a4,r,p)
s=m}else{c.j(a4,q,c.h(a4,r))
c.j(a4,r,p)}r=n
break}}}}l=!1}a3=s-1
c.j(a4,a5,c.h(a4,a3))
c.j(a4,a3,a)
a3=r+1
c.j(a4,a6,c.h(a4,a3))
c.j(a4,a3,a1)
H.eV(a4,a5,s-2,a7,a8)
H.eV(a4,r+2,a6,a7,a8)
if(l)return
if(s<h&&r>g){for(;J.bD(a7.$2(c.h(a4,s),a),0);)++s
for(;J.bD(a7.$2(c.h(a4,r),a1),0);)--r
for(q=s;q<=r;++q){p=c.h(a4,q)
if(a7.$2(p,a)===0){if(q!==s){c.j(a4,q,c.h(a4,s))
c.j(a4,s,p)}++s}else if(a7.$2(p,a1)===0)for(;!0;)if(a7.$2(c.h(a4,r),a1)===0){--r
if(r<q)break
continue}else{o=a7.$2(c.h(a4,r),a)
if(typeof o!=="number")return o.ah()
n=r-1
if(o<0){c.j(a4,q,c.h(a4,s))
m=s+1
c.j(a4,s,c.h(a4,r))
c.j(a4,r,p)
s=m}else{c.j(a4,q,c.h(a4,r))
c.j(a4,r,p)}r=n
break}}H.eV(a4,s,r,a7,a8)}else H.eV(a4,s,r,a7,a8)},
n:function n(){},
a7:function a7(){},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
W:function W(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
az:function az(a,b,c){this.a=a
this.b=b
this.$ti=c},
aN:function aN(a,b,c){this.a=a
this.b=b
this.$ti=c},
a4:function a4(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
N:function N(a,b,c){this.a=a
this.b=b
this.$ti=c},
ab:function ab(a,b,c){this.a=a
this.b=b
this.$ti=c},
bW:function bW(a,b,c){this.a=a
this.b=b
this.$ti=c},
bV:function bV(a,b,c){this.a=a
this.b=b
this.$ti=c},
d_:function d_(a,b,c){this.a=a
this.b=b
this.$ti=c},
dv:function dv(a,b,c){this.a=a
this.b=b
this.$ti=c},
bU:function bU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dr:function dr(a,b,c){this.a=a
this.b=b
this.$ti=c},
bN:function bN(a){this.$ti=a},
d1:function d1(a){this.$ti=a},
V:function V(){},
ct:function ct(a){this.a=a},
nE:function(){throw H.b(P.A("Cannot modify unmodifiable Map"))},
mR:function(a){var t,s=H.mQ(a)
if(typeof s=="string")return s
t="minified:"+a
return t},
pN:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.aU.b(a)},
a:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.J(a)
if(typeof t!="string")throw H.b(H.aS(a))
return t},
bS:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
lL:function(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return H.t(s,3)
t=H.r(s[3])
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
o8:function(a){var t,s
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
t=parseFloat(a)
if(isNaN(t)){s=C.c.aC(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return null}return t},
iC:function(a){var t=H.o_(a)
return t},
o_:function(a){var t,s,r
if(a instanceof P.C)return H.au(H.ao(a),null)
if(J.bA(a)===C.H||u.bI.b(a)){t=C.n(a)
if(H.lK(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.lK(r))return r}}return H.au(H.ao(a),null)},
lK:function(a){var t=a!=="Object"&&a!==""
return t},
aH:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.e.bS(t,10))>>>0,56320|t&1023)}throw H.b(P.aO(a,0,1114111,null,null))},
bR:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o7:function(a){var t=H.bR(a).getFullYear()+0
return t},
o5:function(a){var t=H.bR(a).getMonth()+1
return t},
o1:function(a){var t=H.bR(a).getDate()+0
return t},
o2:function(a){var t=H.bR(a).getHours()+0
return t},
o4:function(a){var t=H.bR(a).getMinutes()+0
return t},
o6:function(a){var t=H.bR(a).getSeconds()+0
return t},
o3:function(a){var t=H.bR(a).getMilliseconds()+0
return t},
cl:function(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
C.a.L(t,b)
r.b=""
if(c!=null&&c.a!==0)c.t(0,new H.iB(r,s,t))
""+r.a
return J.no(a,new H.ex(C.P,0,t,s,0))},
o0:function(a,b,c){var t,s,r,q
if(b instanceof Array)t=c==null||c.a===0
else t=!1
if(t){s=b
r=s.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(s[0])}else if(r===2){if(!!a.$2)return a.$2(s[0],s[1])}else if(r===3){if(!!a.$3)return a.$3(s[0],s[1],s[2])}else if(r===4){if(!!a.$4)return a.$4(s[0],s[1],s[2],s[3])}else if(r===5)if(!!a.$5)return a.$5(s[0],s[1],s[2],s[3],s[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,s)}return H.nZ(a,b,c)},
nZ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k=b instanceof Array?b:P.cf(b,!0,u.z),j=k.length,i=a.$R
if(j<i)return H.cl(a,k,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.bA(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return H.cl(a,k,c)
if(j===i)return p.apply(a,k)
return H.cl(a,k,c)}if(r instanceof Array){if(c!=null&&c.a!==0)return H.cl(a,k,c)
if(j>i+r.length)return H.cl(a,k,null)
C.a.L(k,r.slice(j-i))
return p.apply(a,k)}else{if(j>i)return H.cl(a,k,c)
o=Object.keys(r)
if(c==null)for(s=o.length,n=0;n<o.length;o.length===s||(0,H.y)(o),++n)C.a.l(k,r[H.r(o[n])])
else{for(s=o.length,m=0,n=0;n<o.length;o.length===s||(0,H.y)(o),++n){l=H.r(o[n])
if(c.O(l)){++m
C.a.l(k,c.h(0,l))}else C.a.l(k,r[l])}if(m!==c.a)return H.cl(a,k,c)}return p.apply(a,k)}},
Y:function(a){throw H.b(H.aS(a))},
t:function(a,b){if(a==null)J.ad(a)
throw H.b(H.bz(a,b))},
bz:function(a,b){var t,s,r="index"
if(!H.cF(b))return new P.aD(!0,b,r,null)
t=H.q(J.ad(a))
if(!(b<0)){if(typeof t!=="number")return H.Y(t)
s=b>=t}else s=!0
if(s)return P.b7(b,a,r,null,t)
return P.dp(b,r)},
aS:function(a){return new P.aD(!0,a,null,null)},
b:function(a){var t
if(a==null)a=new P.eP()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.mP})
t.name=""}else t.toString=H.mP
return t},
mP:function(){return J.J(this.dartException)},
G:function(a){throw H.b(a)},
y:function(a){throw H.b(P.aF(a))},
bc:function(a){var t,s,r,q,p,o
a=H.mI(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.m([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.iK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
iL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
lQ:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
lJ:function(a,b){return new H.eO(a,b==null?null:b.method)},
kv:function(a,b){var t=b==null,s=t?null:b.method
return new H.ez(a,s,t?null:b.receiver)},
L:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new H.ke(a)
if(a==null)return f
if(typeof a!=="object")return a
if("dartException" in a)return e.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.bS(s,16)&8191)===10)switch(r){case 438:return e.$1(H.kv(H.a(t)+" (Error "+r+")",f))
case 445:case 5007:return e.$1(H.lJ(H.a(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.mU()
p=$.mV()
o=$.mW()
n=$.mX()
m=$.n_()
l=$.n0()
k=$.mZ()
$.mY()
j=$.n2()
i=$.n1()
h=q.a1(t)
if(h!=null)return e.$1(H.kv(H.r(t),h))
else{h=p.a1(t)
if(h!=null){h.method="call"
return e.$1(H.kv(H.r(t),h))}else{h=o.a1(t)
if(h==null){h=n.a1(t)
if(h==null){h=m.a1(t)
if(h==null){h=l.a1(t)
if(h==null){h=k.a1(t)
if(h==null){h=n.a1(t)
if(h==null){h=j.a1(t)
if(h==null){h=i.a1(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return e.$1(H.lJ(H.r(t),h))}}return e.$1(new H.f6(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.ds()
t=function(b){try{return String(b)}catch(d){}return null}(a)
return e.$1(new P.aD(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.ds()
return a},
aM:function(a){var t
if(a==null)return new H.dU(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dU(a)},
mF:function(a){if(a==null||typeof a!='object')return J.a9(a)
else return H.bS(a)},
pE:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.j(0,a[t],a[s])}return b},
pM:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.ks("Unsupported number of arguments for wrapped closure"))},
cK:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pM)
a.$identity=t
return t},
nD:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.eW().constructor.prototype):Object.create(new H.c4(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.b4
if(typeof s!=="number")return s.w()
$.b4=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}i.constructor=t
t.prototype=i
if(!e){r=H.le(a,k,f)
r.$reflectionInfo=d}else{i.$static_name=g
r=k}q=H.nz(d,e,f)
i.$S=q
i[j]=r
for(p=r,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.le(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return t},
nz:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.my,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
t=c?H.nx:H.nw
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.b("Error in functionType of tearoff")},
nA:function(a,b,c,d){var t=H.ld
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
le:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.nC(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.nA(s,!q,t,b)
if(s===0){q=$.b4
if(typeof q!=="number")return q.w()
$.b4=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.cR
return new Function(q+H.a(p==null?$.cR=H.hg("self"):p)+";return "+o+"."+H.a(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.b4
if(typeof q!=="number")return q.w()
$.b4=q+1
n+=q
q="return function("+n+"){return this."
p=$.cR
return new Function(q+H.a(p==null?$.cR=H.hg("self"):p)+"."+H.a(t)+"("+n+");}")()},
nB:function(a,b,c,d){var t=H.ld,s=H.ny
switch(b?-1:a){case 0:throw H.b(H.od("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
nC:function(a,b){var t,s,r,q,p,o,n,m=$.cR
if(m==null)m=$.cR=H.hg("self")
t=$.lc
if(t==null)t=$.lc=H.hg("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nB(r,!p,s,b)
if(r===1){m="return function(){return this."+H.a(m)+"."+H.a(s)+"(this."+H.a(t)+");"
t=$.b4
if(typeof t!=="number")return t.w()
$.b4=t+1
return new Function(m+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
m="return function("+n+"){return this."+H.a(m)+"."+H.a(s)+"(this."+H.a(t)+", "+n+");"
t=$.b4
if(typeof t!=="number")return t.w()
$.b4=t+1
return new Function(m+t+"}")()},
kL:function(a,b,c,d,e,f,g){return H.nD(a,b,c,d,!!e,!!f,g)},
nw:function(a,b){return H.fI(v.typeUniverse,H.ao(a.a),b)},
nx:function(a,b){return H.fI(v.typeUniverse,H.ao(a.c),b)},
ld:function(a){return a.a},
ny:function(a){return a.c},
hg:function(a){var t,s,r,q=new H.c4("self","target","receiver","name"),p=J.lA(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}},
a8:function(a){if(a==null)H.pu("boolean expression must not be null")
return a},
pu:function(a){throw H.b(new H.f8(a))},
q9:function(a){throw H.b(new P.ej(a))},
od:function(a){return new H.eU(a)},
kN:function(a){return v.getIsolateTag(a)},
m:function(a,b){a[v.arrayRti]=b
return a},
mw:function(a){if(a==null)return null
return a.$ti},
qX:function(a,b,c){return H.mO(a["$a"+H.a(c)],H.mw(b))},
mO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return null
if(Array.isArray(a))return a
if(typeof a=="function")return a.apply(null,b)
return b},
qV:function(a,b,c){return a.apply(b,H.mO(J.bA(b)["$a"+H.a(c)],H.mw(b)))},
qW:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pQ:function(a){var t,s,r,q,p=H.r($.mx.$1(a)),o=$.k0[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.k7[p]
if(t!=null)return t
s=v.interceptorsByTag[p]
if(s==null){p=H.r($.mp.$2(a,p))
if(p!=null){o=$.k0[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.k7[p]
if(t!=null)return t
s=v.interceptorsByTag[p]}}if(s==null)return null
t=s.prototype
r=p[0]
if(r==="!"){o=H.ka(t)
$.k0[p]=o
Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(r==="~"){$.k7[p]=t
return t}if(r==="-"){q=H.ka(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}if(r==="+")return H.mG(a,t)
if(r==="*")throw H.b(P.kx(p))
if(v.leafTags[p]===true){q=H.ka(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}else return H.mG(a,t)},
mG:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.kP(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ka:function(a){return J.kP(a,!1,null,!!a.$ia_)},
pR:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.ka(t)
else return J.kP(t,c,null,null)},
pJ:function(){if(!0===$.kO)return
$.kO=!0
H.pK()},
pK:function(){var t,s,r,q,p,o,n,m
$.k0=Object.create(null)
$.k7=Object.create(null)
H.pI()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.mH.$1(p)
if(o!=null){n=H.pR(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
pI:function(){var t,s,r,q,p,o,n=C.y()
n=H.cJ(C.z,H.cJ(C.A,H.cJ(C.o,H.cJ(C.o,H.cJ(C.B,H.cJ(C.C,H.cJ(C.D(C.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.mx=new H.k4(q)
$.mp=new H.k5(p)
$.mH=new H.k6(o)},
cJ:function(a,b){return a(b)||b},
nW:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.b(P.d4("Illegal RegExp pattern ("+String(o)+")",a))},
q5:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
pD:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mI:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
kd:function(a,b,c){var t=H.q6(a,b,c)
return t},
q6:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mI(b),'g'),H.pD(c))},
q7:function(a,b,c,d){var t=a.indexOf(b,d)
if(t<0)return a
return H.q8(a,t,t+b.length,c)},
q8:function(a,b,c,d){var t=a.substring(0,b),s=a.substring(c)
return t+d+s},
cT:function cT(a,b){this.a=a
this.$ti=b},
cS:function cS(){},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dx:function dx(a,b){this.a=a
this.$ti=b},
ex:function ex(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eO:function eO(a,b){this.a=a
this.b=b},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a){this.a=a},
ke:function ke(a){this.a=a},
dU:function dU(a){this.a=a
this.b=null},
bI:function bI(){},
f2:function f2(){},
eW:function eW(){},
c4:function c4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eU:function eU(a){this.a=a},
f8:function f8(a){this.a=a},
a6:function a6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
io:function io(a){this.a=a},
ir:function ir(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aa:function aa(a,b){this.a=a
this.$ti=b},
dc:function dc(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
k4:function k4(a){this.a=a},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
ey:function ey(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eZ:function eZ(a,b){this.a=a
this.c=b},
jD:function jD(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bz(b,a))},
bQ:function bQ(){},
di:function di(){},
bP:function bP(){},
dj:function dj(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
dk:function dk(){},
eL:function eL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
oc:function(a,b){var t=b.c
return t==null?b.c=H.kE(a,b.z,!0):t},
lN:function(a,b){var t=b.c
return t==null?b.c=H.e_(a,"ax",[b.z]):t},
lO:function(a){var t=a.y
if(t===6||t===7||t===8)return H.lO(a.z)
return t===11||t===12},
ob:function(a){return a.cy},
e7:function(a){return H.kF(v.typeUniverse,a,!1)},
bx:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.bx(a,t,c,a0)
if(s===t)return b
return H.m8(a,s,!0)
case 7:t=b.z
s=H.bx(a,t,c,a0)
if(s===t)return b
return H.kE(a,s,!0)
case 8:t=b.z
s=H.bx(a,t,c,a0)
if(s===t)return b
return H.m7(a,s,!0)
case 9:r=b.Q
q=H.e6(a,r,c,a0)
if(q===r)return b
return H.e_(a,b.z,q)
case 10:p=b.z
o=H.bx(a,p,c,a0)
n=b.Q
m=H.e6(a,n,c,a0)
if(o===p&&m===n)return b
return H.kC(a,o,m)
case 11:l=b.z
k=H.bx(a,l,c,a0)
j=b.Q
i=H.pr(a,j,c,a0)
if(k===l&&i===j)return b
return H.m6(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.e6(a,h,c,a0)
p=b.z
o=H.bx(a,p,c,a0)
if(g===h&&o===p)return b
return H.kD(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.b(P.fV("Attempted to substitute unexpected RTI kind "+d))}},
e6:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.bx(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
ps:function(a,b,c,d){var t,s,r,q,p,o=b.length,n=[]
for(t=!1,s=0;s<o;s+=2){r=b[s]
q=b[s+1]
p=H.bx(a,q,c,d)
if(p!==q)t=!0
n.push(r)
n.push(p)}return t?n:b},
pr:function(a,b,c,d){var t,s=b.a,r=H.e6(a,s,c,d),q=b.b,p=H.e6(a,q,c,d),o=b.c,n=H.ps(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.fm()
t.a=r
t.b=p
t.c=n
return t},
pz:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.my(t)
return a.$S()}return null},
mz:function(a,b){var t
if(H.lO(b))if(a instanceof H.bI){t=H.pz(a)
if(t!=null)return t}return H.ao(a)},
ao:function(a){var t
if(a instanceof P.C){t=a.$ti
return t!=null?t:H.kI(a)}if(Array.isArray(a))return H.B(a)
return H.kI(J.bA(a))},
B:function(a){var t=a[v.arrayRti],s=u.cO
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
h:function(a){var t=a.$ti
return t!=null?t:H.kI(a)},
kI:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.pd(a,t)},
pd:function(a,b){var t=a instanceof H.bI?a.__proto__.__proto__.constructor:b,s=H.p2(v.typeUniverse,t.name)
b.$ccache=s
return s},
my:function(a){var t,s=a,r=v.types,q=r[s]
if(typeof q=="string"){t=H.kF(v.typeUniverse,q,!1)
r[s]=t
return t}return q},
pc:function(a){var t=this,s=H.pa,r=u.K
if(t===r){s=H.pf
t.a=H.p4}else if(H.bB(t)||t===r){s=H.pi
t.a=H.p5}else if(t===u.S)s=H.cF
else if(t===u.gR)s=H.mh
else if(t===u.di)s=H.mh
else if(t===u.N)s=H.pg
else if(t===u.y)s=H.jW
else if(t.y===9){r=t.z
if(t.Q.every(H.pO)){t.r="$i"+r
s=H.ph}}t.b=s
return t.b(a)},
pa:function(a){var t=this
return H.a5(v.typeUniverse,H.mz(a,t),null,t,null)},
ph:function(a){var t=this,s=t.r
if(a instanceof P.C)return!!a[s]
return!!J.bA(a)[s]},
p9:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
throw H.b(H.m5(H.lW(a,H.mz(a,t),H.au(t,null))))},
b3:function(a,b,c,d){var t=null
if(H.a5(v.typeUniverse,a,t,b,t))return a
throw H.b(H.m5("The type argument '"+H.a(H.au(a,t))+"' is not a subtype of the type variable bound '"+H.a(H.au(b,t))+"' of type variable '"+c+"' in '"+H.a(d)+"'."))},
lW:function(a,b,c){var t=P.bm(a),s=H.au(b==null?H.ao(a):b,null)
return t+": type '"+H.a(s)+"' is not a subtype of type '"+H.a(c)+"'"},
m5:function(a){return new H.dZ("TypeError: "+a)},
fG:function(a,b){return new H.dZ("TypeError: "+H.lW(a,null,b))},
pf:function(a){return!0},
p4:function(a){return a},
pi:function(a){return!0},
p5:function(a){return a},
jW:function(a){return!0===a||!1===a},
jP:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.b(H.fG(a,"bool"))},
p3:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.fG(a,"double"))},
cF:function(a){return typeof a=="number"&&Math.floor(a)===a},
q:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.fG(a,"int"))},
mh:function(a){return typeof a=="number"},
jQ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.fG(a,"num"))},
pg:function(a){return typeof a=="string"},
r:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.fG(a,"String"))},
po:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.c.w(s,H.au(a[r],b))
return t},
mc:function(a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", "
if(a3!=null){t=a3.length
if(a2==null){a2=H.m([],u.s)
s=null}else s=a2.length
r=a2.length
for(q=t;q>0;--q)C.a.l(a2,"T"+(r+q))
for(p=u.K,o="<",n="",q=0;q<t;++q,n=a0){o+=n
m=a2.length
l=m-1-q
if(l<0)return H.t(a2,l)
o=C.c.w(o,a2[l])
k=a3[q]
if(!(H.bB(k)||k===p))m=!(k===p)
else m=!1
if(m)o+=C.c.w(" extends ",H.au(k,a2))}o+=">"}else{o=""
s=null}p=a1.z
j=a1.Q
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=H.au(p,a2)
for(b="",a="",q=0;q<h;++q,a=a0)b+=C.c.w(a,H.au(i[q],a2))
if(f>0){b+=a+"["
for(a="",q=0;q<f;++q,a=a0)b+=C.c.w(a,H.au(g[q],a2))
b+="]"}if(d>0){b+=a+"{"
for(a="",q=0;q<d;q+=2,a=a0)b+=C.c.w(a,H.au(e[q+1],a2))+" "+e[q]
b+="}"}if(s!=null)a2.length=s
return o+"("+b+") => "+H.a(c)},
au:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.au(a.z,b)
return t}if(m===7){s=a.z
t=H.au(s,b)
r=s.y
return J.n9(r===11||r===12?C.c.w("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.a(H.au(a.z,b))+">"
if(m===9){q=H.pt(a.z)
p=a.Q
return p.length!==0?q+("<"+H.po(p,b)+">"):q}if(m===11)return H.mc(a,b,null)
if(m===12)return H.mc(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.t(b,o)
return b[o]}return"?"},
pt:function(a){var t,s=H.mQ(a)
if(s!=null)return s
t="minified:"+a
return t},
ma:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
p2:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.kF(a,b,!1)
else if(typeof n=="number"){t=n
s=H.e0(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.e_(a,b,r)
o[b]=p
return p}else return n},
p0:function(a,b){return H.mb(a.tR,b)},
p_:function(a,b){return H.mb(a.eT,b)},
kF:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.m9(a,null,b,c)
s.set(b,t)
return t},
fI:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.m9(a,b,c,!0)
r.set(c,s)
return s},
p1:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.kC(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
m9:function(a,b,c,d){var t=H.oR(H.oN(a,b,c,d))
if(t!=null)return t
throw H.b(P.kx('_Universe._parseRecipe("'+H.a(c)+'")'))},
bw:function(a,b){b.a=H.p9
b.b=H.pc
return b},
e0:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.aI(null,null)
t.y=b
t.cy=c
s=H.bw(a,t)
a.eC.set(c,s)
return s},
m8:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.oY(a,b,s,c)
a.eC.set(s,t)
return t},
oY:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.bB(b)||b===u.K||b===u.P||t===7||t===6)return b}s=new H.aI(null,null)
s.y=6
s.z=b
s.cy=c
return H.bw(a,s)},
kE:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.oX(a,b,s,c)
a.eC.set(s,t)
return t},
oX:function(a,b,c,d){var t,s,r,q,p
if(d){t=b.y
if(!H.bB(b))if(!(b===u.P))if(t!==7)s=t===8&&H.k8(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1)return u.P
else if(t===6){r=b.z
q=r.y
if(q===1)return u.P
else if(q===8&&H.k8(r.z))return r
else return H.oc(a,b)}}p=new H.aI(null,null)
p.y=7
p.z=b
p.cy=c
return H.bw(a,p)},
m7:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.oV(a,b,s,c)
a.eC.set(s,t)
return t},
oV:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.bB(b)||b===u.K||b===u.K)return b
else if(t===1)return H.e_(a,"ax",[b])
else if(b===u.P)return u.ef}s=new H.aI(null,null)
s.y=8
s.z=b
s.cy=c
return H.bw(a,s)},
oZ:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.aI(null,null)
t.y=13
t.z=b
t.cy=r
s=H.bw(a,t)
a.eC.set(r,s)
return s},
fH:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
oU:function(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=2,s=","){q=a[r]
p=a[r+1].cy
t+=s+q+":"+p}return t},
e_:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.fH(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.aI(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.bw(a,s)
a.eC.set(q,r)
return r},
kC:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+";"+("<"+H.fH(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.aI(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.bw(a,p)
a.eC.set(r,o)
return o},
m6:function(a,b,c){var t,s,r,q,p=b.cy,o=c.a,n=o.length,m=c.b,l=m.length,k=c.c,j=k.length,i="("+H.fH(o)
if(l>0)i+=(n>0?",":"")+"["+H.fH(m)+"]"
if(j>0)i+=(n>0?",":"")+"{"+H.oU(k)+"}"
t=p+(i+")")
s=a.eC.get(t)
if(s!=null)return s
r=new H.aI(null,null)
r.y=11
r.z=b
r.Q=c
r.cy=t
q=H.bw(a,r)
a.eC.set(t,q)
return q},
kD:function(a,b,c,d){var t,s=b.cy+"<"+H.fH(c)+">",r=a.eC.get(s)
if(r!=null)return r
t=H.oW(a,b,c,s,d)
a.eC.set(s,t)
return t},
oW:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.bx(a,b,s,0)
n=H.e6(a,c,s,0)
return H.kD(a,o,n,c!==n)}}m=new H.aI(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.bw(a,m)},
oN:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
oR:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.oO(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.m2(a,s,h,g,!1)
else if(r===46)s=H.m2(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:break
case 59:g.push(H.bv(a.u,a.e,g.pop()))
break
case 94:g.push(H.oZ(a.u,g.pop()))
break
case 35:g.push(H.e0(a.u,5,"#"))
break
case 64:g.push(H.e0(a.u,2,"@"))
break
case 126:g.push(H.e0(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.kB(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.e_(q,o,p))
else{n=H.bv(q,a.e,o)
switch(n.y){case 11:g.push(H.kD(q,n,p,a.n))
break
default:g.push(H.kC(q,n,p))
break}}break
case 38:H.oP(a,g)
break
case 42:m=a.u
g.push(H.m8(m,H.bv(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.kE(m,H.bv(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.m7(m,H.bv(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.fm()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.kB(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.m6(q,H.bv(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.kB(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.oS(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.bv(a.u,a.e,i)},
oO:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
m2:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.ma(t,p.z)[q]
if(o==null)H.G('No "'+q+'" in "'+H.ob(p)+'"')
d.push(H.fI(t,p,o))}else d.push(q)
return n},
oP:function(a,b){var t=b.pop()
if(0===t){b.push(H.e0(a.u,1,"0&"))
return}if(1===t){b.push(H.e0(a.u,4,"1&"))
return}throw H.b(P.fV("Unexpected extended operation "+H.a(t)))},
bv:function(a,b,c){if(typeof c=="string")return H.e_(a,c,a.sEA)
else if(typeof c=="number")return H.oQ(a,b,c)
else return c},
kB:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.bv(a,b,c[t])},
oS:function(a,b,c){var t,s=c.length
for(t=1;t<s;t+=2)c[t]=H.bv(a,b,c[t])},
oQ:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.b(P.fV("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.b(P.fV("Bad index "+c+" for "+b.n(0)))},
a5:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(H.bB(d)||d===u.K)return!0
t=b.y
if(t===4)return!0
if(H.bB(b))return!1
if(b===u.P)return!0
s=t===13
if(s)if(H.a5(a,c[b.z],c,d,e))return!0
r=d.y
if(t===6)return H.a5(a,b.z,c,d,e)
if(r===6){q=d.z
return H.a5(a,b,c,q,e)}if(t===8){if(!H.a5(a,b.z,c,d,e))return!1
return H.a5(a,H.lN(a,b),c,d,e)}if(t===7){q=H.a5(a,b.z,c,d,e)
return q}if(r===8){if(H.a5(a,b,c,d.z,e))return!0
return H.a5(a,b,c,H.lN(a,d),e)}if(r===7){q=H.a5(a,b,c,d.z,e)
return q}if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
if(r===12){if(b===u.cj)return!0
if(t!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(q=u.av,m=0;m<n;++m){l=p[m]
k=o[m]
q.a(l)
q.a(k)
if(!H.a5(a,l,c,k,e)||!H.a5(a,k,e,l,c))return!1}return H.mg(a,b.z,c,d.z,e)}if(r===11){if(b===u.cj)return!0
if(q)return!1
return H.mg(a,b,c,d,e)}if(t===9){if(r!==9)return!1
return H.pe(a,b,c,d,e)}return!1},
mg:function(a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(!H.a5(a0,a1.z,a2,a3.z,a4))return!1
t=a1.Q
s=a3.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.a5(a0,q[i],a4,h,a2))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.a5(a0,q[p+i],a4,h,a2))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.a5(a0,l[i],a4,h,a2))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(i=0,c=0;c<d;c+=2){b=f[c]
do{if(i>=e)return!1
a=g[i]
i+=2}while(a<b)
if(b<a)return!1
h=g[i-1]
if(!H.a5(a0,f[c+1],a4,h,a2))return!1}return!0},
pe:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.a5(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.ma(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.a5(a,H.fI(a,b,m[q]),c,s[q],e))return!1
return!0},
k8:function(a){var t,s=a.y
if(!(a===u.P))if(!H.bB(a))if(s!==7)if(!(s===6&&H.k8(a.z)))t=s===8&&H.k8(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
pO:function(a){return H.bB(a)||a===u.K},
bB:function(a){var t,s=a.y,r=s
if(r!==2)if(r!==3)if(r!==4)if(r!==5){t=u.K
if(!(a===t))s=s===7&&a.z===t
else s=!0}else s=!0
else s=!0
else s=!0
else s=!0
return s},
mb:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aI:function aI(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fm:function fm(){this.c=this.b=this.a=null},
fk:function fk(){},
dZ:function dZ(a){this.a=a},
mA:function(a){return u.fK.b(a)||u.B.b(a)||u.dz.b(a)||u.gb.b(a)||u.A.b(a)||u.g4.b(a)||u.g2.b(a)},
mQ:function(a){return v.mangledGlobalNames[a]},
q_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kP:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fO:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.kO==null){H.pJ()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.b(P.kx("Return interceptor for "+H.a(t(a,p))))}r=a.constructor
q=r==null?null:r[$.kX()]
if(q!=null)return q
q=H.pQ(a)
if(q!=null)return q
if(typeof a=="function")return C.I
t=Object.getPrototypeOf(a)
if(t==null)return C.v
if(t===Object.prototype)return C.v
if(typeof r=="function"){Object.defineProperty(r,$.kX(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
lA:function(a){a.fixed$length=Array
return a},
lB:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kt:function(a,b){var t,s
for(t=a.length;b<t;){s=C.c.aX(a,b)
if(s!==32&&s!==13&&!J.lB(s))break;++b}return b},
nV:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.c.dq(a,t)
if(s!==32&&s!==13&&!J.lB(s))break}return b},
bA:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d7.prototype
return J.ew.prototype}if(typeof a=="string")return J.b8.prototype
if(a==null)return J.d8.prototype
if(typeof a=="boolean")return J.ev.prototype
if(a.constructor==Array)return J.E.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.C)return a
return J.fO(a)},
pF:function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.E.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.C)return a
return J.fO(a)},
an:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(a.constructor==Array)return J.E.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.C)return a
return J.fO(a)},
bh:function(a){if(a==null)return a
if(a.constructor==Array)return J.E.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.C)return a
return J.fO(a)},
k2:function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.br.prototype
return a},
mv:function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.br.prototype
return a},
k3:function(a){if(typeof a=="string")return J.b8.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.br.prototype
return a},
X:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aW.prototype
return a}if(a instanceof P.C)return a
return J.fO(a)},
n9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pF(a).w(a,b)},
bD:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bA(a).P(a,b)},
na:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k2(a).I(a,b)},
l0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mv(a).as(a,b)},
c_:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pN(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.an(a).h(a,b)},
kg:function(a,b,c){return J.bh(a).j(a,b,c)},
nb:function(a,b,c,d){return J.X(a).ep(a,b,c,d)},
kh:function(a){return J.X(a).es(a)},
nc:function(a,b,c,d){return J.X(a).f4(a,b,c,d)},
nd:function(a,b,c){return J.X(a).f5(a,b,c)},
ki:function(a,b){return J.bh(a).l(a,b)},
l1:function(a,b){return J.mv(a).dr(a,b)},
fR:function(a,b,c){return J.an(a).fz(a,b,c)},
ne:function(a,b){return J.X(a).dv(a,b)},
aT:function(a,b){return J.bh(a).B(a,b)},
c0:function(a){return J.k2(a).c2(a)},
nf:function(a){return J.X(a).gfm(a)},
ng:function(a){return J.X(a).gdm(a)},
bE:function(a){return J.X(a).gdn(a)},
a9:function(a){return J.bA(a).gA(a)},
nh:function(a){return J.an(a).gM(a)},
l2:function(a){return J.an(a).gcb(a)},
x:function(a){return J.bh(a).gv(a)},
ad:function(a){return J.an(a).gk(a)},
ni:function(a){return J.X(a).gdF(a)},
nj:function(a){return J.X(a).gdI(a)},
nk:function(a){return J.X(a).gdJ(a)},
nl:function(a,b){return J.bh(a).R(a,b)},
kj:function(a,b,c){return J.bh(a).F(a,b,c)},
nm:function(a,b){return J.X(a).fS(a,b)},
nn:function(a,b){return J.X(a).fU(a,b)},
no:function(a,b){return J.bA(a).bh(a,b)},
e9:function(a){return J.X(a).bi(a)},
np:function(a,b){return J.X(a).h3(a,b)},
cM:function(a){return J.k2(a).C(a)},
kk:function(a,b){return J.X(a).K(a,b)},
l3:function(a,b,c){return J.X(a).ct(a,b,c)},
nq:function(a,b){return J.bh(a).aT(a,b)},
nr:function(a,b,c){return J.k3(a).ab(a,b,c)},
l4:function(a){return J.k2(a).bl(a)},
ns:function(a){return J.bh(a).a9(a)},
nt:function(a){return J.k3(a).h7(a)},
J:function(a){return J.bA(a).n(a)},
kl:function(a){return J.k3(a).aC(a)},
ae:function ae(){},
ev:function ev(){},
d8:function d8(){},
bp:function bp(){},
eT:function eT(){},
br:function br(){},
aW:function aW(){},
E:function E(a){this.$ti=a},
im:function im(a){this.$ti=a},
av:function av(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bo:function bo(){},
d7:function d7(){},
ew:function ew(){},
b8:function b8(){}},P={
oC:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.pv()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.cK(new P.iW(r),1)).observe(t,{childList:true})
return new P.iV(r,t,s)}else if(self.setImmediate!=null)return P.pw()
return P.px()},
oD:function(a){self.scheduleImmediate(H.cK(new P.iX(u.M.a(a)),0))},
oE:function(a){self.setImmediate(H.cK(new P.iY(u.M.a(a)),0))},
oF:function(a){P.kw(C.p,u.M.a(a))},
kw:function(a,b){var t=C.e.ay(a.a,1000)
return P.oT(t<0?0:t,b)},
oT:function(a,b){var t=new P.jH()
t.en(a,b)
return t},
nL:function(a,b){var t=new P.a3($.F,b.i("a3<0>"))
P.om(C.p,new P.ii(t,a))
return t},
lX:function(a,b){var t,s,r
b.a=1
try{a.dV(new P.j9(b),new P.ja(b),u.P)}catch(r){t=H.L(r)
s=H.aM(r)
P.mN(new P.jb(b,t,s))}},
j8:function(a,b){var t,s,r
for(t=u._;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.b4()
b.a=a.a
b.c=a.c
P.cC(b,r)}else{r=u.x.a(b.c)
b.a=2
b.c=a
a.d5(r)}},
cC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d={},c=d.a=a
for(t=u.n,s=u.x,r=u.b9;!0;){q={}
p=c.a===8
if(b==null){if(p){o=t.a(c.c)
P.cH(e,e,c.b,o.a,o.b)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cC(d.a,b)}c=d.a
m=c.c
q.a=p
q.b=m
l=!p
if(l){k=b.c
k=(k&1)!==0||(k&15)===8}else k=!0
if(k){k=b.b
j=k.b
if(p){i=c.b===j
i=!(i||i)}else i=!1
if(i){t.a(m)
P.cH(e,e,c.b,m.a,m.b)
return}h=$.F
if(h!==j)$.F=j
else h=e
c=b.c
if((c&15)===8)new P.jg(d,q,b,p).$0()
else if(l){if((c&1)!==0)new P.jf(q,b,m).$0()}else if((c&2)!==0)new P.je(d,q,b).$0()
if(h!=null)$.F=h
c=q.b
if(r.b(c)){if(c.a>=4){g=s.a(k.c)
k.c=null
b=k.b5(g)
k.a=c.a
k.c=c.c
d.a=c
continue}else P.j8(c,k)
return}}f=b.b
g=s.a(f.c)
f.c=null
b=f.b5(g)
c=q.a
l=q.b
if(!c){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}d.a=f
c=f}},
pn:function(a,b){var t
if(u.ag.b(a))return b.dM(a,u.z,u.K,u.l)
t=u.v
if(t.b(a))return t.a(a)
throw H.b(P.fU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pk:function(){var t,s
for(;t=$.cG,t!=null;){$.e5=null
s=t.b
$.cG=s
if(s==null)$.e4=null
t.a.$0()}},
pq:function(){$.kJ=!0
try{P.pk()}finally{$.e5=null
$.kJ=!1
if($.cG!=null)$.kY().$1(P.mr())}},
mn:function(a){var t=new P.f9(a)
if($.cG==null){$.cG=$.e4=t
if(!$.kJ)$.kY().$1(P.mr())}else $.e4=$.e4.b=t},
pp:function(a){var t,s,r=$.cG
if(r==null){P.mn(a)
$.e5=$.e4
return}t=new P.f9(a)
s=$.e5
if(s==null){t.b=r
$.cG=$.e5=t}else{t.b=s.b
$.e5=s.b=t
if(t.b==null)$.e4=t}},
mN:function(a){var t=null,s=$.F
if(C.f===s){P.cI(t,t,C.f,a)
return}P.cI(t,t,s,u.M.a(s.bV(a)))},
cr:function(a,b,c){return new P.dX(null,a,c.i("dX<0>"))},
mm:function(a){var t,s,r
if(a==null)return
try{a.$0()}catch(r){t=H.L(r)
s=H.aM(r)
P.cH(null,null,$.F,t,u.l.a(s))}},
mi:function(a,b){P.cH(null,null,$.F,a,b)},
pl:function(){},
om:function(a,b){var t=$.F
if(t===C.f)return P.kw(a,u.M.a(b))
return P.kw(a,u.M.a(t.bV(b)))},
fW:function(a,b){var t=b==null?P.l7(a):b
P.bj(a,"error",u.K)
return new P.cO(a,t)},
l7:function(a){var t
if(u.bU.b(a)){t=a.gaU()
if(t!=null)return t}return C.G},
cH:function(a,b,c,d,e){var t={}
t.a=d
t.b=e
if(d==null){t.a=new P.aD(!1,null,"error","Must not be null")
t.b=P.oj()}P.pp(new P.jX(t))},
mj:function(a,b,c,d,e){var t,s=$.F
if(s===c)return d.$0()
$.F=c
t=s
try{s=d.$0()
return s}finally{$.F=t}},
ml:function(a,b,c,d,e,f,g){var t,s=$.F
if(s===c)return d.$1(e)
$.F=c
t=s
try{s=d.$1(e)
return s}finally{$.F=t}},
mk:function(a,b,c,d,e,f,g,h,i){var t,s=$.F
if(s===c)return d.$2(e,f)
$.F=c
t=s
try{s=d.$2(e,f)
return s}finally{$.F=t}},
cI:function(a,b,c,d){var t
u.M.a(d)
t=C.f!==c
if(t)d=!(!t||!1)?c.bV(d):c.fn(d,u.o)
P.mn(d)},
iW:function iW(a){this.a=a},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
jH:function jH(){},
jI:function jI(a,b){this.a=a
this.b=b},
ac:function ac(a,b){this.a=a
this.$ti=b},
b0:function b0(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.c=_.b=_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
bt:function bt(){},
dX:function dX(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
jE:function jE(a,b){this.a=a
this.b=b},
jF:function jF(a){this.a=a},
ax:function ax(){},
ii:function ii(a,b){this.a=a
this.b=b},
fc:function fc(){},
dY:function dY(a,b){this.a=a
this.$ti=b},
bX:function bX(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
a3:function a3(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
j6:function j6(a,b){this.a=a
this.b=b},
jd:function jd(a,b){this.a=a
this.b=b},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
j7:function j7(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jh:function jh(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(a){this.a=a
this.b=null},
U:function U(){},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b){this.a=a
this.b=b},
a2:function a2(){},
eY:function eY(){},
cx:function cx(){},
cy:function cy(){},
O:function O(){},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a){this.a=a},
cD:function cD(){},
bu:function bu(){},
dy:function dy(a,b){this.b=a
this.a=null
this.$ti=b},
fh:function fh(a,b){this.b=a
this.c=b
this.a=null},
fg:function fg(){},
dQ:function dQ(){},
jr:function jr(a,b){this.a=a
this.b=b},
dV:function dV(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cz:function cz(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
dB:function dB(){},
cB:function cB(a,b,c,d){var _=this
_.x=a
_.c=_.b=_.a=_.y=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
dK:function dK(a,b,c){this.b=a
this.a=b
this.$ti=c},
cO:function cO(a,b){this.a=a
this.b=b},
fJ:function fJ(){},
jX:function jX(a){this.a=a},
fy:function fy(){},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
jx:function jx(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function(a,b){var t=a[b]
return t===a?null:t},
kz:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
lZ:function(){var t=Object.create(null)
P.kz(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
af:function(a,b,c){return b.i("@<0>").q(c).i("lD<1,2>").a(H.pE(a,new H.a6(b.i("@<0>").q(c).i("a6<1,2>"))))},
ce:function(a,b){return new H.a6(a.i("@<0>").q(b).i("a6<1,2>"))},
dd:function(a){return new P.dI(a.i("dI<0>"))},
kA:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
jm:function(a,b,c){var t=new P.bZ(a,b,c.i("bZ<0>"))
t.c=a.e
return t},
nN:function(a,b,c){var t,s
if(P.kK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.m([],u.s)
C.a.l($.aC,a)
try{P.pj(a,t)}finally{if(0>=$.aC.length)return H.t($.aC,-1)
$.aC.pop()}s=P.lP(b,u.R.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
ik:function(a,b,c){var t,s
if(P.kK(a))return b+"..."+c
t=new P.aA(b)
C.a.l($.aC,a)
try{s=t
s.a=P.lP(s.a,a,", ")}finally{if(0>=$.aC.length)return H.t($.aC,-1)
$.aC.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
kK:function(a){var t,s
for(t=$.aC.length,s=0;s<t;++s)if(a===$.aC[s])return!0
return!1},
pj:function(a,b){var t,s,r,q,p,o,n,m=a.gv(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.m())return
t=H.a(m.gp())
C.a.l(b,t)
l+=t.length+2;++k}if(!m.m()){if(k<=5)return
if(0>=b.length)return H.t(b,-1)
s=b.pop()
if(0>=b.length)return H.t(b,-1)
r=b.pop()}else{q=m.gp();++k
if(!m.m()){if(k<=4){C.a.l(b,H.a(q))
return}s=H.a(q)
if(0>=b.length)return H.t(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gp();++k
for(;m.m();q=p,p=o){o=m.gp();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.t(b,-1)
l-=b.pop().length+2;--k}C.a.l(b,"...")
return}}r=H.a(q)
s=H.a(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.t(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.l(b,n)
C.a.l(b,r)
C.a.l(b,s)},
lE:function(a,b){var t,s,r=P.dd(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.y)(a),++s)r.l(0,b.a(a[s]))
return r},
is:function(a){var t,s={}
if(P.kK(a))return"{...}"
t=new P.aA("")
try{C.a.l($.aC,a)
t.a+="{"
s.a=!0
a.t(0,new P.it(s,t))
t.a+="}"}finally{if(0>=$.aC.length)return H.t($.aC,-1)
$.aC.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
dC:function dC(){},
dF:function dF(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dD:function dD(a,b){this.a=a
this.$ti=b},
dE:function dE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dI:function dI(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fs:function fs(a){this.a=a
this.c=this.b=null},
bZ:function bZ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
de:function de(){},
l:function l(){},
df:function df(){},
it:function it(a,b){this.a=a
this.b=b},
T:function T(){},
e1:function e1(){},
ch:function ch(){},
dw:function dw(){},
aP:function aP(){},
dq:function dq(){},
dR:function dR(){},
dJ:function dJ(){},
dS:function dS(){},
cE:function cE(){},
pm:function(a,b){var t,s,r,q
if(typeof a!="string")throw H.b(H.aS(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.L(r)
q=P.d4(String(s),null)
throw H.b(q)}q=P.jR(t)
return q},
jR:function(a){var t
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.fq(a,Object.create(null))
for(t=0;t<a.length;++t)a[t]=P.jR(a[t])
return a},
lC:function(a,b,c){return new P.da(a,b)},
p8:function(a){return a.hf()},
oM:function(a,b,c){var t,s=new P.aA(""),r=new P.jj(s,[],P.pB())
r.bq(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
fq:function fq(a,b){this.a=a
this.b=b
this.c=null},
fr:function fr(a){this.a=a},
eg:function eg(){},
c7:function c7(){},
ij:function ij(){},
cc:function cc(){},
da:function da(a,b){this.a=a
this.b=b},
eA:function eA(a,b){this.a=a
this.b=b},
iq:function iq(){},
eC:function eC(a){this.b=a},
eB:function eB(a){this.a=a},
jk:function jk(){},
jl:function jl(a,b){this.a=a
this.b=b},
jj:function jj(a,b,c){this.c=a
this.a=b
this.b=c},
pL:function(a){var t=H.lL(a,null)
if(t!=null)return t
throw H.b(P.d4(a,null))},
nK:function(a){if(a instanceof H.bI)return a.n(0)
return"Instance of '"+H.a(H.iC(a))+"'"},
cf:function(a,b,c){var t,s=H.m([],c.i("E<0>"))
for(t=J.x(a);t.m();)C.a.l(s,c.a(t.gp()))
if(b)return s
return c.i("o<0>").a(J.lA(s))},
oa:function(a){return new H.ey(a,H.nW(a,!1,!0,!1,!1,!1))},
lP:function(a,b,c){var t=J.x(b)
if(!t.m())return a
if(c.length===0){do a+=H.a(t.gp())
while(t.m())}else{a+=H.a(t.gp())
for(;t.m();)a=a+c+H.a(t.gp())}return a},
lG:function(a,b,c,d){return new P.eN(a,b,c,d)},
oj:function(){var t,s
if(H.a8($.n8()))return H.aM(new Error())
try{throw H.b("")}catch(s){H.L(s)
t=H.aM(s)
return t}},
nF:function(a,b){var t
if(Math.abs(a)<=864e13)t=!1
else t=!0
if(t)H.G(P.bi("DateTime is outside valid range: "+a))
P.bj(!1,"isUtc",u.y)
return new P.c9(a,!1)},
nG:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
nH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ek:function(a){if(a>=10)return""+a
return"0"+a},
bm:function(a){if(typeof a=="number"||H.jW(a)||null==a)return J.J(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nK(a)},
fV:function(a){return new P.cN(a)},
bi:function(a){return new P.aD(!1,null,null,a)},
fU:function(a,b,c){return new P.aD(!0,a,b,c)},
km:function(a){return new P.aD(!1,null,a,"Must not be null")},
bj:function(a,b,c){if(a==null)throw H.b(P.km(b))
return a},
dp:function(a,b){return new P.dn(null,null,!0,a,b,"Value not in range")},
aO:function(a,b,c,d,e){return new P.dn(b,c,!0,a,d,"Invalid value")},
lM:function(a,b,c,d){if(typeof a!=="number")return a.ah()
if(a<b||a>c)throw H.b(P.aO(a,b,c,d,null))
return a},
o9:function(a,b,c){if(0>a||a>c)throw H.b(P.aO(a,0,c,"start",null))
if(a>b||b>c)throw H.b(P.aO(b,a,c,"end",null))
return b},
bb:function(a,b){if(typeof a!=="number")return a.ah()
if(a<0)throw H.b(P.aO(a,0,null,b,null))
return a},
b7:function(a,b,c,d,e){var t=H.q(e==null?J.ad(b):e)
return new P.et(t,!0,a,c,"Index out of range")},
A:function(a){return new P.f7(a)},
kx:function(a){return new P.f5(a)},
cq:function(a){return new P.aY(a)},
aF:function(a){return new P.eh(a)},
ks:function(a){return new P.fl(a)},
d4:function(a,b){return new P.d3(a,b)},
mE:function(a,b){var t=P.kQ(a)
if(t!=null)return t
if(b==null)throw H.b(P.d4(a,null))
return b.$1(a)},
kQ:function(a){var t=J.kl(a),s=H.lL(t,null)
return s==null?H.o8(t):s},
kb:function(a){H.q_(H.a(a))},
iv:function iv(a,b){this.a=a
this.b=b},
w:function w(){},
c9:function c9(a,b){this.a=a
this.b=b},
ah:function ah(){},
bM:function bM(a){this.a=a},
hQ:function hQ(){},
hR:function hR(){},
K:function K(){},
cN:function cN(a){this.a=a},
eP:function eP(){},
aD:function aD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dn:function dn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
et:function et(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f7:function f7(a){this.a=a},
f5:function f5(a){this.a=a},
aY:function aY(a){this.a=a},
eh:function eh(a){this.a=a},
eQ:function eQ(){},
ds:function ds(){},
ej:function ej(a){this.a=a},
fl:function fl(a){this.a=a},
d3:function d3(a,b){this.a=a
this.b=b},
aV:function aV(){},
d:function d(){},
f:function f(){},
S:function S(){},
o:function o(){},
cg:function cg(){},
u:function u(){},
Z:function Z(){},
C:function C(){},
dg:function dg(){},
al:function al(){},
am:function am(){},
fA:function fA(){},
c:function c(){},
aA:function aA(a){this.a=a},
aQ:function aQ(){},
kq:function(){var t=$.li
return t==null?$.li=J.fR(window.navigator.userAgent,"Opera",0):t},
nI:function(){var t,s=$.lf
if(s!=null)return s
t=$.lg
if(t==null?$.lg=J.fR(window.navigator.userAgent,"Firefox",0):t)s="-moz-"
else{t=$.lh
if(t==null)t=$.lh=!H.a8(P.kq())&&J.fR(window.navigator.userAgent,"Trident/",0)
if(t)s="-ms-"
else s=H.a8(P.kq())?"-o-":"-webkit-"}return $.lf=s},
ei:function ei(){},
hB:function hB(a){this.a=a},
er:function er(a,b){this.a=a
this.b=b},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
db:function db(){},
p6:function(a,b,c,d){var t,s,r
H.jP(b)
u.j.a(d)
if(H.a8(b)){t=[c]
C.a.L(t,d)
d=t}s=u.z
r=P.cf(J.kj(d,P.pP(),s),!0,s)
u.Z.a(a)
return P.e3(H.o0(a,r,null))},
aG:function(a){if(!u.f.b(a)&&!u.R.b(a))throw H.b(P.bi("object must be a Map or Iterable"))
return u.b.a(P.by(P.d9(a)))},
d9:function(a){return new P.ip(new P.dF(u.aH)).$1(a)},
aX:function(a,b){var t=[]
C.a.L(t,J.kj(a,P.k9(),u.z))
return new P.v(t,b.i("v<0>"))},
kG:function(a,b,c){var t
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(t){H.L(t)}return!1},
me:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
e3:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.jW(a))return a
if(a instanceof P.Q)return a.a
if(H.mA(a))return a
if(u.ak.b(a))return a
if(a instanceof P.c9)return H.bR(a)
if(u.Z.b(a))return P.md(a,"$dart_jsFunction",new P.jT())
return P.md(a,"_$dart_jsObject",new P.jU($.l_()))},
md:function(a,b,c){var t=P.me(a,b)
if(t==null){t=c.$1(a)
P.kG(a,b,t)}return t},
jS:function(a){var t,s
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.mA(a))return a
else if(a instanceof Object&&u.ak.b(a))return a
else if(a instanceof Date){t=H.q(a.getTime())
if(Math.abs(t)<=864e13)s=!1
else s=!0
if(s)H.G(P.bi("DateTime is outside valid range: "+t))
P.bj(!1,"isUtc",u.y)
return new P.c9(t,!1)}else if(a.constructor===$.l_())return a.o
else return P.by(a)},
by:function(a){if(typeof a=="function")return P.kH(a,$.kf(),new P.jY())
if(a instanceof Array)return P.kH(a,$.kZ(),new P.jZ())
return P.kH(a,$.kZ(),new P.k_())},
kH:function(a,b,c){var t=P.me(a,b)
if(t==null||!(a instanceof Object)){t=c.$1(a)
P.kG(a,b,t)}return t},
ip:function ip(a){this.a=a},
jT:function jT(){},
jU:function jU(a){this.a=a},
jY:function jY(){},
jZ:function jZ(){},
k_:function k_(){},
Q:function Q(a){this.a=a},
ay:function ay(a){this.a=a},
v:function v(a,b){this.a=a
this.$ti=b},
dH:function dH(){},
dG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
I:function I(a,b,c){this.a=a
this.b=b
this.$ti=c},
fx:function fx(){},
bq:function bq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cn:function cn(){},
ec:function ec(a){this.a=a},
j:function j(){}},W={
l5:function(a){var t=document.createElement("a")
if(a!=null)t.href=a
return t},
nJ:function(a,b,c){var t=document.body,s=(t&&C.m).U(t,a,b,c)
s.toString
t=u.ac
t=new H.ab(new W.ag(s),t.i("w(l.E)").a(new W.hT()),t.i("ab<l.E>"))
return u.h.a(t.gat(t))},
d0:function(a){var t,s,r="element tag unavailable"
try{t=J.X(a)
if(typeof t.gdT(a)=="string")r=t.gdT(a)}catch(s){H.L(s)}return r},
nM:function(a){var t,s=document.createElement("input"),r=u.p.a(s)
try{r.type=a}catch(t){H.L(t)}return r},
dh:function(a,b){var t=window,s=u.V.a(document.createEvent("MouseEvent"))
s.toString
s.initMouseEvent(a,!0,!0,t,0,0,0,0,0,!1,!1,!1,!1,0,W.p7(b))
return s},
on:function(a){return new TouchEvent(a)},
oo:function(){var t
try{W.on("touches")
return!0}catch(t){H.L(t)}return!1},
ji:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m1:function(a,b,c,d){var t=W.ji(W.ji(W.ji(W.ji(0,a),b),c),d),s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
lV:function(a,b){var t,s=a.classList
for(t=0;t<2;++t)s.add(b[t])},
oJ:function(a,b){var t,s,r=a.classList
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.y)(b),++s)r.remove(H.r(b[s]))},
hU:function(a,b){return new W.eq(a,b.i("eq<0>"))},
z:function(a,b,c,d,e){var t=W.mo(new W.j5(c),u.B)
t=new W.dA(a,b,t,!1,e.i("dA<0>"))
t.dd()
return t},
m_:function(a){var t=W.l5(null),s=window.location
t=new W.bY(new W.fz(t,s))
t.el(a)
return t},
oK:function(a,b,c,d){u.h.a(a)
H.r(b)
H.r(c)
u.cr.a(d)
return!0},
oL:function(a,b,c,d){var t,s,r
u.h.a(a)
H.r(b)
H.r(c)
t=u.cr.a(d).a
s=t.a
s.href=c
r=s.hostname
t=t.b
if(!(r==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(r==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
m4:function(){var t=u.N,s=P.lE(C.t,t),r=u.dG.a(new W.jG()),q=H.m(["TEMPLATE"],u.s)
t=new W.fC(s,P.dd(t),P.dd(t),P.dd(t),null)
t.em(null,new H.N(C.t,r,u.dv),q,null)
return t},
M:function(a){var t
if(a==null)return null
if("postMessage" in a){t=W.oG(a)
return t}else return u.aS.a(a)},
p7:function(a){return a},
oG:function(a){if(a===window)return u.ci.a(a)
else return new W.ff(a)},
mo:function(a,b){var t=$.F
if(t===C.f)return a
return t.fo(a,b)},
i:function i(){},
c1:function c1(){},
eb:function eb(){},
c2:function c2(){},
bG:function bG(){},
bH:function bH(){},
c5:function c5(){},
aU:function aU(){},
H:function H(){},
c8:function c8(){},
hC:function hC(){},
cV:function cV(){},
bK:function bK(){},
hD:function hD(){},
cW:function cW(){},
hE:function hE(){},
fb:function fb(a,b){this.a=a
this.b=b},
at:function at(a,b){this.a=a
this.$ti=b},
p:function p(){},
hT:function hT(){},
e:function e(){},
hV:function hV(){},
hS:function hS(a){this.a=a},
D:function D(){},
es:function es(){},
bn:function bn(){},
d5:function d5(){},
cd:function cd(){},
b9:function b9(){},
eD:function eD(){},
a1:function a1(){},
ag:function ag(a){this.a=a},
k:function k(){},
dl:function dl(){},
cj:function cj(){},
ck:function ck(){},
co:function co(){},
cs:function cs(){},
f_:function f_(){},
du:function du(){},
f0:function f0(){},
f1:function f1(){},
cu:function cu(){},
cv:function cv(){},
aB:function aB(){},
aZ:function aZ(){},
f4:function f4(){},
ar:function ar(){},
bs:function bs(){},
iU:function iU(a){this.a=a},
b_:function b_(){},
cw:function cw(){},
fd:function fd(){},
dz:function dz(){},
dL:function dL(){},
fa:function fa(){},
fi:function fi(a){this.a=a},
fj:function fj(a){this.a=a},
eq:function eq(a,b){this.a=a
this.$ti=b},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dA:function dA(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
j5:function j5(a){this.a=a},
dW:function dW(a,b){this.a=null
this.b=a
this.$ti=b},
jC:function jC(a,b){this.a=a
this.b=b},
bY:function bY(a){this.a=a},
a0:function a0(){},
dm:function dm(a){this.a=a},
ix:function ix(a){this.a=a},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(){},
jA:function jA(){},
jB:function jB(){},
fC:function fC(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jG:function jG(){},
fB:function fB(){},
bO:function bO(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
ff:function ff(a){this.a=a},
ak:function ak(){},
fz:function fz(a,b){this.a=a
this.b=b},
e2:function e2(a){this.a=a
this.b=!1},
jO:function jO(a){this.a=a},
fe:function fe(){},
fo:function fo(){},
fp:function fp(){},
fu:function fu(){},
fv:function fv(){},
fD:function fD(){},
fE:function fE(){},
fK:function fK(){},
fL:function fL(){},
fM:function fM(){},
fN:function fN(){}},Z={
lq:function(a,b,c,d){var t,s,r=$.ls
$.ls=r+1
t=H.m([],u.f7)
r=new Z.hF(r,b,c,d,t)
s=u.j.b(a)?a:H.m([a],u.ge)
r.sbF(u.O.a(s))
s=window
if(u.b.a(P.by(P.e3(s))).E("PointerEvent")){s=u.w
s=new Z.fw(H.m([],s),H.m([],s),r)
s.bw(r)
C.a.l(t,s)}else{if(W.oo()){s=u.w
s=new Z.fF(H.m([],s),H.m([],s),r)
s.bw(r)
C.a.l(t,s)}s=u.w
s=new Z.ft(H.m([],s),H.m([],s),r)
s.bw(r)
C.a.l(t,s)}return r},
lr:function(a,b,c){return new Z.bL(b.b,b.c)},
nu:function(a){$.l6=a
if(!$.fS){C.Q.gfk(window).dU(new Z.fT(),u.o)
$.fS=!0}},
oI:function(a,b){var t,s,r="_customDragOver"
if(b==null)return
t=$.cA
if(t===b)b.dispatchEvent(W.dh(r,null))
else{b.dispatchEvent(W.dh("_customDragEnter",t))
if($.cA!=null){s=W.dh("_customDragLeave",b)
$.cA.dispatchEvent(s)}b.dispatchEvent(W.dh(r,null))
$.cA=b}},
oH:function(a,b){J.ne(b,W.dh("_customDrop",null))
Z.lU()},
lU:function(){if($.cA!=null){var t=W.dh("_customDragLeave",null)
$.cA.dispatchEvent(t)
$.cA=null}},
ca:function(a,b){var t=new Z.ep(b,H.m([],u.w)),s=u.j.b(a)?a:H.m([a],u.ge)
t.sbF(u.O.a(s))
C.a.t(t.x,t.geY())
return t},
hF:function hF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.cx=_.ch=_.z=null
_.cy=e},
hK:function hK(a){this.a=a},
hJ:function hJ(a){this.a=a},
hH:function hH(){},
hI:function hI(a){this.a=a},
hG:function hG(){},
bL:function bL(a,b){this.a=a
this.d=b},
j0:function j0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e
_.x=f},
ed:function ed(){},
h2:function h2(a,b){this.a=a
this.b=b},
fT:function fT(){},
b2:function b2(){},
j1:function j1(){},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(){},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jM:function jM(a){this.a=a},
jL:function jL(a){this.a=a},
jK:function jK(a){this.a=a},
jJ:function jJ(a){this.a=a},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
jq:function jq(a){this.a=a},
jp:function jp(a){this.a=a},
jo:function jo(a){this.a=a},
jn:function jn(a){this.a=a},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a){this.a=a},
jv:function jv(a){this.a=a},
ju:function ju(a){this.a=a},
jt:function jt(a){this.a=a},
js:function js(a){this.a=a},
ep:function ep(a,b){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=null
_.y=b},
hM:function hM(a){this.a=a},
hO:function hO(a){this.a=a},
hN:function hN(a){this.a=a},
hP:function hP(a){this.a=a},
hL:function hL(){},
ap:function ap(a){this.d=a},
ea:function ea(){}},U={
l8:function(a,b){var t=new U.aE(b,a)
t.aE(a,b)
return t},
nv:function(a,b,c){var t=new U.aE(null,a)
t.au(a,b,c)
return t},
nY:function(a,b,c){var t=new U.ci(null,a)
t.au(a,b,c)
t.y=b.y
t.z=b.z
return t},
oe:function(a,b,c){var t=new U.cp(H.m([],u.eD),null,a)
t.au(a,b,c)
t.ek(a,b,c)
return t},
ly:function(a,b,c){var t,s=new U.b6(b,a)
s.aE(a,b)
t=new U.cb(a.fr)
t.c=new U.aq(t,c,H.m([],u.G))
s.x=t
s.e=c
return s},
h4:function(a,b,c,d){var t=d?b.cloneNode(!0):b
u.d.a(t)
t.toString
W.oJ(t,u.fP.a(["nt-block-starter","nt-block-ender","nt-block-standalone","nt-block-middle","nt-block-clause-starter","nt-block-clause-standalone","nt-block-clause-middle","nt-block-clause-ender"]))
t.classList.add(c)
a.appendChild(t)},
kn:function(a,b,c,d){var t,s=b.length
if(s===0)return
if(s===1)U.h4(a,C.a.gaA(b).k1,c+"-standalone",d)
else{U.h4(a,C.a.gaA(b).k1,c+"-starter",d)
for(t=1;t<b.length-1;++t)U.h4(a,b[t].k1,c+"-middle",d)
U.h4(a,C.a.gdC(b).k1,c+"-ender",d)}},
ko:function(){return new U.cQ("#9977aa","#ffffff","#ffffff")},
l9:function(a,b,c,d){var t,s=u.be
s=new U.R(b,c,new H.a6(s),new H.a6(s),a)
if(b==null){t=a.z
s.a=t
a.z=t+1}else if(b>=a.z)a.z=b+1
if(!d){t=a.Q
s.b=t
a.Q=t+1}return s},
la:function(a){var t,s,r,q=a.bY(0,!1)
if(a.ch!=null){t=u.u
q.Q=new U.aw(q,null,H.m([],t))
if(a.ch.length>0){q.sbX(H.m([],u.e))
for(s=0;s<a.ch.length;++s){r=q.ch;(r&&C.a).l(r,new U.aw(q,s,H.m([],t)))}}}return q},
kp:function(a,b){var t,s,r=a.db
if(r!=null){t=b.style
t.borderColor=r}r=a.cy
if(r!=null){t=b.style
t.color=r}r=a.dx
if(r!=null){t=b.style
s=t.lineHeight
t.font=r
r=b.style
r.lineHeight=s}},
lb:function(a,b,c){var t,s=Z.lq(b,a.fx,"input, textarea, button, select, option","nt-block-dragging")
s.gdH(s).u(a.gbt())
s.gdG(s).u(a.gc0())
t=Z.ca(b,a.fr.k2)
t.gaq(t).u(a.ga4())
t.gao(t).u(new U.he(c))
t.gap(t).u(new U.hf(c))},
hj:function(a,b,c,d){a.toString
C.d.K(a,"")
if(H.a8(C.a.gaA(b).dy)){a.classList.add("nt-chain-starter")
a.classList.remove("nt-chain-fragment")}else{a.classList.remove("nt-chain-starter")
a.classList.add("nt-chain-fragment")
if(d!=null)a.appendChild(d)
a.appendChild(U.lH(!0,C.a.gaA(b)))}U.kn(a,b,"nt-block",c)
a.appendChild(U.lH(!1,C.a.gdC(b)))},
lp:function(a,b){$.lo=a.fr.b
$.lk=b.d.D(0,U.cY(b.a))
$.ll=a.dy
$.b5=!1},
cY:function(a){var t,s,r,q=J.X(a)
if(a.offsetParent==null){q=q.gaP(a)
return new P.I(q.a,q.b,q.$ti.i("I<1>"))}else{q=q.gaP(a)
t=q.$ti.i("I<1>")
s=t.a(U.cY(a.offsetParent))
r=s.a
if(typeof r!=="number")return H.Y(r)
s=s.b
if(typeof s!=="number")return H.Y(s)
return new P.I(q.a+r,q.b+s,t)}},
lx:function(a,b){var t=new U.aq(a,"num",H.m([],u.G))
t.ej(a,b)
return t},
bk:function(a){var t,s,r,q,p,o=a.b
if(o==null)o=""
t=a.d
if(t!=null){for(s=a.e,r=0;r<s.length;++r){q="{"+r+"}"
if(r>=s.length)return H.t(s,r)
p=U.bk(s[r])
if(typeof p!="string")H.G(H.aS(p))
t=H.kd(t,q,p)}return t}else{s=a.e
q=s.length
if(q===1){p="("+o+" "
if(0>=q)return H.t(s,0)
return p+H.a(U.bk(s[0]))+")"}else if(q===2){if(0>=q)return H.t(s,0)
q="("+H.a(U.bk(s[0]))+" "+o+" "
if(1>=s.length)return H.t(s,1)
return q+H.a(U.bk(s[1]))+")"}else return o}},
pA:function(a,b){var t,s=u.a
s.a(a)
s.a(b)
s=J.an(a)
if(s.gk(a)===0||s.h(a,0).c==null)return-1
t=J.an(b)
if(t.gk(b)===0||t.h(b,0).c==null)return 1
return J.l1(s.h(a,0).c,t.h(b,0).c)},
lH:function(a,b){var t,s,r=document.createElement("div")
r.classList.add("nt-notch")
t=b.aD()
r.classList.add(t)
U.kp(b,r)
if(a)r.classList.add("nt-notch-top")
else r.classList.add("nt-notch-bottom")
s=t+"-color"
C.a.t(H.m(["filler","left","middle","right"],u.s),new U.iz(s,a,b,r))
U.lb(b,r,new U.iA(b))
return r},
lI:function(a,b){var t,s,r,q,p=document,o=p.createElement("div")
o.classList.add("nt-notch")
t=b.c
s=t.aD()
o.classList.add(s)
U.kp(t,o)
if(a)o.classList.add("nt-notch-top")
else o.classList.add("nt-notch-bottom")
r=s+"-color"
C.a.t(H.m(["filler","left","middle","right"],u.s),new U.iy(r,a,b,o))
if(!a){q=p.createElement("div")
q.className="nt-notch-clause-filler"
o.appendChild(q)}return o},
c3:function(a){var t=new U.ee()
t.b=a.a
t.c=a.b
return t},
mf:function(a,b,c,d){U.pb(a,new U.jV(b),c,d)},
pb:function(a,b,c,d){var t,s,r,q,p,o,n,m="version",l="blockStyles",k="variables",j="expressions",i=H.q(d.E(m)?d.h(0,m):0)
if(typeof i!=="number")return i.I()
if(i>4)H.G("Somehow the given model version ("+i+") is greater than the supported NetTango version (4).")
if(i<1)U.os(d)
if(i<2)U.ky(d,U.mC(),U.mC())
if(i<3)U.oy(d)
if(i<4){U.oz(d)
U.oB(d,U.mD(),U.mD())}d.j(0,m,4)
t=null
switch(a){case"NetLogo":t=new U.eM(b,c)
break
default:t=new U.eS(b,c)
break}try{if($.aL.O(c))$.aL.h(0,c).k3.fC()
q=t
if(!J.bD(d.h(0,m),4))H.G("The supported NetTango version is 4, but the given definition version was "+H.a(d.h(0,m))+".")
p=new U.bJ(4,c,q,H.m([],u.cM),[],H.m([],u.ga),600,600,450)
q="#"+H.a(c)
q=u.d.a(document.querySelector(q))
p.c=q
if(q==null)H.G("No container element with ID "+H.a(c)+" found.");(q&&C.d).K(q,"")
q.classList.add("nt-container")
o=new U.cX(c,!0)
p.k1=o
p.k2=new U.cX(c,!1)
o=p.k3=Z.ca(q,o)
o.gaq(o).u(p.gfv())
p.fr=$.kW()
p.fx=$.kV()
p.fy=$.kU()
o=p.c.style
q=H.a(p.db)+"px"
o.minHeight=q
q=p.c.style
o=H.a(p.dy)+"px"
q.minWidth=o
q=p.c.style
o=H.a(p.dy)+"px"
q.maxWidth=o
p.ch=new U.ef(p,H.m([],u.dk))
q=H.q(H.cF(d.h(0,"height"))?d.h(0,"height"):600)
p.db=q
o=p.c.style
q=H.a(q)+"px"
o.minHeight=q
q=H.q(H.cF(d.h(0,"width"))?d.h(0,"width"):450)
p.dy=q
o=p.c.style
q=H.a(q)+"px"
o.minWidth=q
q=p.c.style
o=H.a(p.dy)+"px"
q.maxWidth=o
if(d.E(l)){q=u.b
p.fr=U.kR(q.a(J.c_(d.h(0,l),"starterBlockStyle")),"#bb5555")
p.fx=U.kR(q.a(J.c_(d.h(0,l),"containerBlockStyle")),"#8899aa")
p.fy=U.kR(q.a(J.c_(d.h(0,l),"commandBlockStyle")),"#9977aa")}if(d.h(0,"blocks") instanceof P.v)U.q3(p,u.F.a(d.h(0,"blocks")))
if(d.h(0,k) instanceof P.v)p.cx=u.j.a(d.h(0,k))
if(d.h(0,j) instanceof P.v)U.q2(p,u.F.a(d.h(0,j)))
if(d.h(0,"program") instanceof P.Q)U.q4(p,u.b.a(d.h(0,"program")))
s=p
$.aL.j(0,c,s)
s.fD()}catch(n){q=H.L(n)
if(q instanceof P.d3){r=q
throw H.b(P.d4("There was an error initializing the workspace with the given NetTango model JSON.",r))}else throw n}},
nS:function(a,b,c,d){H.r(a)
H.r(b)
H.r(c)
u.L.a(d)
if($.aL.h(0,b) instanceof U.bJ)C.a.sk($.aL.h(0,b).y,0)
U.mf(a,d,b,P.aG(C.i.c_(0,c,null)))},
nR:function(a,b,c){var t,s,r,q,p,o
H.r(a)
H.r(b)
u.L.a(c)
t=C.i.c_(0,b,null)
s=u.f
if(s.b(t))for(r=J.x(t.gG()),q=u.b,p=u.R;r.m();){o=H.r(r.gp())
if($.aL.h(0,o) instanceof U.bJ)C.a.sk($.aL.h(0,o).y,0)
t=C.i.c_(0,b,null)
if(!s.b(t)&&!p.b(t))H.G(P.bi("object must be a Map or Iterable"))
U.mf(a,c,o,q.a(P.by(P.d9(t))))}},
nQ:function(a,b){var t
H.r(a)
u.L.a(b)
if($.aL.O(a)){t=$.aL
if(b!=null){t=t.h(0,a)
return t.x.dB(t,!0,new U.il(b))}else{t=t.h(0,a)
return t.x.dB(t,!0,null)}}return null},
nU:function(a){var t
H.r(a)
if($.aL.O(a)){t=U.mu($.aL.h(0,a))
return H.r($.fQ().h(0,"JSON").W("stringify",H.m([t],u.c3)))}else return"{}"},
nT:function(){var t,s,r,q=u.z,p=P.ce(q,q)
for(q=$.aL,q=new H.aa(q,H.h(q).i("aa<1>")),q=q.gv(q),t=u.c3;q.m();){s=q.d
r=U.mu($.aL.h(0,s))
p.j(0,s,$.fQ().h(0,"JSON").W("stringify",H.m([r],t)))}return C.i.fG(C.i,null)},
mB:function(){var t=$.fQ()
t.j(0,"NetTango_InitWorkspace",U.pW())
t.j(0,"NetTango_InitAllWorkspaces",U.pV())
t.j(0,"NetTango_ExportCode",U.pU())
t.j(0,"NetTango_Save",U.pY())
t.j(0,"NetTango_SaveAll",U.pX())},
q3:function(a,b){var t,s,r,q,p,o,n,m
for(t=H.h(b).i("W<l.E>"),s=new H.W(b,b.gk(b),t),r=u.b;s.m();){q=H.q(r.a(s.d).h(0,"id"))
if(q!=null&&q>a.z){if(typeof q!=="number")return q.w()
a.z=q+1}}for(t=new H.W(b,b.gk(b),t);t.m();){p=r.a(t.d)
o=U.mM(a,p)
if(a.ch.br(o.a)!=null){o.a=null
o=o.bY(0,!0)
p.j(0,"id",o.a)}n=U.qa(p.h(0,"limit"),-1)
s=a.ch
m=s.br(o.a)
if(m!=null)H.G(P.d4("Cannot add a block with the same ID as an existing block\n  Adding: ("+H.a(o.a)+": "+H.a(o.c)+")\n  Existing: ("+H.a(m.a)+": "+H.a(m.c)+")",null))
C.a.l(s.b,new U.aJ(o,s.a,n))}},
mM:function(a,b){var t,s,r,q,p,o,n,m=null,l="clauses",k="children",j="properties",i=b.h(0,"action"),h=i==null?"":J.J(i),g=U.l9(a,H.q(b.h(0,"id")),h,!0)
b.j(0,"id",g.a)
if(b.h(0,l) instanceof P.v){g.sbX(H.m([],u.e))
i=u.b
t=u.u
s=u.F
r=0
while(!0){q=H.jQ(J.ad(b.h(0,l)))
if(typeof q!=="number")return H.Y(q)
if(!(r<q))break
q=i.a(J.c_(b.h(0,l),r))
p=new U.aw(g,r,H.m([],t))
if(q.h(0,k) instanceof P.v)p.sbW(U.q0(a,s.a(q.h(0,k))))
q=g.ch;(q&&C.a).l(q,p);++r}}i=b.h(0,"type")
g.d=i==null?"":J.J(i)
i=b.h(0,"format")
g.e=i==null?m:J.J(i)
i=b.h(0,"note")
g.f=i==null?m:J.J(i)
i=b.h(0,"blockColor")
g.cx=i==null?m:J.J(i)
i=b.h(0,"textColor")
g.cy=i==null?m:J.J(i)
i=b.h(0,"borderColor")
g.db=i==null?m:J.J(i)
i=b.h(0,"font")
g.dx=i==null?m:J.J(i)
g.dy=U.kT(b.h(0,"required"),g.dy)
if(b.h(0,"params") instanceof P.v)for(i=J.x(u.R.a(b.h(0,"params"))),t=g.r,s=u.b;i.m();){o=U.mJ(g,s.a(i.gp()))
t.j(0,o.a,o)}if(b.h(0,j) instanceof P.v){for(i=J.x(u.R.a(b.h(0,j))),t=g.x,s=u.b;i.m();){n=U.mJ(g,s.a(i.gp()))
t.j(0,n.a,n)}i=b.h(0,"propertiesDisplay")
g.y=i==null?"shown":J.J(i)}return g},
q0:function(a,b){var t,s,r=H.m([],u.u)
for(t=new H.W(b,b.gk(b),H.h(b).i("W<l.E>")),s=u.b;t.m();)C.a.l(r,U.mM(a,s.a(t.d)))
return r},
mJ:function(a,b){var t,s,r,q,p="values",o=H.q(b.h(0,"id")),n=b.h(0,"type")
switch(n==null?"num":J.J(n)){case"int":t=new U.d6(o,a)
t.aE(a,o)
t.z=1
t.y=U.kT(b.h(0,"random"),null)
t.z=U.cL(b.h(0,"step"),t.z)
break
case"num":t=U.ly(a,o,"num")
break
case"bool":t=U.ly(a,o,"bool")
break
case"range":t=new U.cm(o,a)
t.aE(a,o)
t.y=U.kT(b.h(0,"random"),!1)
t.z=U.cL(b.h(0,"step"),t.z)
t.fx=U.cL(b.h(0,"min"),t.fx)
t.fy=U.cL(b.h(0,"max"),t.fy)
break
case"select":n=H.m([],u.eD)
t=new U.cp(n,o,a)
t.aE(a,o)
if(b.h(0,p) instanceof P.v&&J.na(J.ad(b.h(0,p)),0))for(s=J.x(u.R.a(b.h(0,p)));s.m();){r=s.gp()
q=J.an(r)
C.a.l(n,new U.ba(H.r(q.h(r,"actual")),H.r(q.h(r,"display"))))}break
case"text":t=U.l8(a,o)
break
default:t=U.l8(a,o)
break}n=b.h(0,"name")
t.f=n==null?"":J.J(n)
n=b.h(0,"unit")
t.r=n==null?"":J.J(n)
t.d=b.h(0,"default")
return t},
q2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j="type",i="arguments"
if(b==null||b.gk(b)===0)return
for(t=new H.W(b,b.gk(b),H.h(b).i("W<l.E>")),s=a.cy,r=u.s,q=u.b,p=u.R;t.m();){o=q.a(t.d)
n=H.r(o.h(0,"name"))
m=H.r(o.h(0,j))
l=H.m([],r)
k=new U.d2(n,m,l)
if(n==null)H.G(P.km("name"))
if(m==null)H.G(P.km(j))
if(!C.a.N(H.m(["num","bool"],r),m))H.G(P.fU(m,j,"Expression definition type can only be 'num' or 'bool'."))
k.d=H.r(o.h(0,"format"))
if("arguments" in o.a&&o.h(0,i) instanceof P.v)for(n=J.x(p.a(o.h(0,i)));n.m();)C.a.l(l,H.r(n.gp()))
C.a.l(s,k)}},
q4:function(a,b){var t,s
if(!(b.h(0,"chains") instanceof P.v))return
for(t=J.x(u.R.a(b.h(0,"chains"))),s=u.b;t.m();)U.q1(a,s.a(t.gp()))},
q1:function(a,b){var t,s,r,q=new U.ai(a,H.m([],u.u))
if(typeof b.h(0,"x")=="number"&&typeof b.h(0,"y")=="number"){q.c=J.c0(b.h(0,"x"))
q.d=J.c0(b.h(0,"y"))}C.a.l(a.y,q)
if(!(b.h(0,"blocks") instanceof P.v))return
for(t=J.x(u.R.a(b.h(0,"blocks"))),s=u.b;t.m();){r=U.kS(a,s.a(t.gp()))
if(r!=null)C.a.l(q.a,r)}},
kS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j="children",i=a.ch.br(H.q(b.h(0,"id")))
if(i==null){P.kb("No prototype block found for id: "+H.a(b.h(0,"id")))
t=a.ch.b
s=H.B(t)
P.kb(new H.N(t,s.i("d(1)").a(new U.kc()),s.i("N<1,d>")))
return null}r=i.bY(0,!1)
t=b.h(0,"propertiesDisplay")
r.y=t==null?"shown":J.J(t)
t=u.F
U.mK(r.r,t.a(b.h(0,"params")))
U.mK(r.x,t.a(b.h(0,"properties")))
if(b.h(0,j) instanceof P.v){r.Q=new U.aw(r,null,H.m([],u.u))
for(t=J.x(u.R.a(b.h(0,j))),s=u.b;t.m();){q=U.kS(a,s.a(t.gp()))
if(q!=null)C.a.l(r.Q.a,q)}}if(b.h(0,"clauses") instanceof P.v){r.sbX(H.m([],u.e))
for(t=u.R,s=J.x(t.a(b.h(0,"clauses"))),p=u.b,o=u.u,n=0;s.m();){m=p.a(s.gp())
if(!(m.h(0,j) instanceof P.v))continue
l=new U.aw(r,n,H.m([],o))
k=r.ch;(k&&C.a).l(k,l)
for(k=J.x(t.a(m.h(0,j)));k.m();){q=U.kS(a,p.a(k.gp()))
if(q!=null)C.a.l(l.a,q)}++n}}return r},
mK:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i="value"
if(b==null)return
for(t=new H.W(b,b.gk(b),b.$ti.i("W<l.E>")),s=u.s,r=u.b,q=u.G;t.m();){p=r.a(t.d)
o=p.a
if("id" in o)o=!("value" in o)||!a.O(p.h(0,"id"))
else o=!0
if(o)continue
n=a.h(0,p.h(0,"id"))
if(C.a.N(H.m(["bool","num"],s),n.gaR(n))){if(!(n instanceof U.b6))throw H.b(P.ks("A non-expression attribute cannot have a type of 'num' or 'bool'."))
o=p.h(0,i)
m=n.b
l=n.e
if(o instanceof P.Q){o=m.fr
m=r.a(p.h(0,i))
k=new U.cb(o)
k.c=new U.aq(k,l,H.m([],q))
if(m!=null)o=!0
else o=!1
if(o)k.c=U.mL(k,l,m)
n.x=k}else{o=m.fr
m=H.r(p.h(0,i))
k=new U.cb(o)
k.c=new U.aq(k,l,H.m([],q))
j=new U.aq(k,l,H.m([],q))
j.b=m
k.c=j
n.x=k}}else if(p.h(0,i) instanceof P.Q)n.sJ(0,n.d)
else n.sJ(0,p.h(0,i))}},
mL:function(a,b,c){var t,s="children",r=H.m([],u.G),q=new U.aq(a,b,r),p=c.h(0,"name")
q.b=p==null?"":J.J(p)
if(c.h(0,"format")!=null)q.d=H.r(c.h(0,"format"))
if(c.h(0,s) instanceof P.v)for(p=J.x(u.R.a(c.h(0,s))),t=u.b;p.m();)C.a.l(r,U.mL(a,b,t.a(p.gp())))
return q},
kR:function(a,b){var t,s,r="#ffffff"
if(a==null){t=new U.cQ("#9977aa",r,r)
t.a=b
return t}t=new U.cQ("#9977aa",r,r)
s=a.h(0,"blockColor")
t.a=s==null?b:J.J(s)
s=a.h(0,"textColor")
t.b=s==null?r:J.J(s)
s=a.h(0,"borderColor")
t.c=s==null?r:J.J(s)
s=a.h(0,"fontWeight")
t.d=s==null?"":J.J(s)
s=a.h(0,"fontSize")
t.e=s==null?"":J.J(s)
s=a.h(0,"fontFace")
t.f=s==null?"":J.J(s)
return t},
mu:function(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="blockStyles",a=u.N,a0=u.K,a1=P.aG(P.af(["version",a2.a,"height",a2.db,"width",a2.dy,"blocks",[],"program",P.af(["chains",[]],a,u.j)],a,a0))
if(a2.fr!=$.kW()||a2.fx!=$.kV()||a2.fy!=$.kU()){t=u.z
a1.j(0,b,P.aG(P.ce(t,t)))
J.kg(a1.h(0,b),"starterBlockStyle",U.kM(a2.fr))
J.kg(a1.h(0,b),"containerBlockStyle",U.kM(a2.fx))
J.kg(a1.h(0,b),"commandBlockStyle",U.kM(a2.fy))}for(t=a2.ch.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r){q=t[r]
p=q.e
if(p===-1)p=null
o=U.k1(q.a,p)
J.ki(a1.h(0,"blocks"),o)}t=a2.cx
if(t!=null&&J.l2(t))a1.j(0,"variables",P.aX([],u.z))
t=a2.cy
s=t.length
if(s!==0){s=u.z
n=P.aX([],s)
a1.j(0,"expressions",n)
for(p=t.length,m=n.$ti.c,l=u.b,k=u.gB,r=0;r<t.length;t.length===p||(0,H.y)(t),++r){j=t[r]
i=P.af(["name",j.a,"type",j.b],a,a)
h=l.a(P.by(P.d9(i)))
i=j.c
if(i.length>0){g=[]
C.a.L(g,C.a.F(i,P.k9(),s))
h.j(0,"arguments",new P.v(g,k))}i=j.d
if(i!=null)h.j(0,"format",i)
n.W("push",[m.a(h)])}}f=J.c_(a1.h(0,"program"),"chains")
for(t=a2.y,s=t.length,p=J.bh(f),m=u.b,r=0;r<t.length;t.length===s||(0,H.y)(t),++r){e=t[r]
l=P.af(["x",e.c,"y",e.d,"blocks",[]],a,a0)
d=m.a(P.by(P.d9(l)))
for(l=e.a,k=l.length,c=0;c<l.length;l.length===k||(0,H.y)(l),++c){o=U.k1(l[c],null)
J.ki(d.h(0,"blocks"),o)}p.l(f,d)}return a1},
kM:function(a){var t=u.N
return P.aG(P.af(["blockColor",a.a,"textColor",a.b,"borderColor",a.c,"fontWeight",a.d,"fontSize",a.e,"fontFace",a.f],t,t))},
k1:function(a,b){var t,s,r,q,p,o,n,m="push",l=P.aG(P.af(["id",a.a,"action",a.c,"required",a.dy],u.N,u.K)),k=u.S
U.e8(l,"instanceId",a.b,k)
U.bC(l,"type",a.d)
U.bC(l,"format",a.e)
U.e8(l,"limit",b,k)
U.bC(l,"note",a.f)
U.bC(l,"blockColor",a.cx)
U.bC(l,"textColor",a.cy)
U.bC(l,"borderColor",a.db)
U.bC(l,"font",a.dx)
if(a.Q!=null){t=P.aX([],u.z)
l.j(0,"children",t)
for(k=a.Q.a,s=k.length,r=t.$ti.c,q=0;q<k.length;k.length===s||(0,H.y)(k),++q)t.W(m,[r.a(U.k1(k[q],null))])}if(a.ch!=null){p=P.aX([],u.z)
l.j(0,"clauses",p)
for(k=a.ch,s=k.length,r=p.$ti.c,q=0;q<k.length;k.length===s||(0,H.y)(k),++q)p.W(m,[r.a(U.pC(k[q]))])}k=a.r
if(k.a!==0){o=P.aX([],u.z)
l.j(0,"params",o)
for(k=k.gar(k),s=H.h(k),s=new H.a4(J.x(k.a),k.b,s.i("@<1>").q(s.Q[1]).i("a4<1,2>")),k=o.$ti.c;s.m();)o.W(m,[k.a(U.ms(s.a))])}k=a.x
if(k.a!==0){n=P.aX([],u.z)
l.j(0,"properties",n)
for(k=k.gar(k),s=H.h(k),s=new H.a4(J.x(k.a),k.b,s.i("@<1>").q(s.Q[1]).i("a4<1,2>")),k=n.$ti.c;s.m();)n.W(m,[k.a(U.ms(s.a))])
l.j(0,"propertiesDisplay",a.y)}return l},
pC:function(a){var t,s,r,q,p=P.aG(P.af(["children",[]],u.N,u.j)),o=p.h(0,"children")
for(t=a.a,s=t.length,r=J.bh(o),q=0;q<t.length;t.length===s||(0,H.y)(t),++q)r.l(o,U.k1(t[q],null))
return p},
e8:function(a,b,c,d){if(c!=null)a.j(0,b,c)},
bC:function(a,b,c){if(c!=null&&c!=="")a.j(0,b,c)},
ms:function(a){var t,s,r,q,p,o,n,m="value",l=u.N,k=P.aG(P.af(["id",a.a,"type",a.gaR(a)],l,u.K)),j=u.z
U.e8(k,m,a.gJ(a),j)
U.e8(k,"default",a.d,j)
U.bC(k,"name",a.f)
U.bC(k,"unit",a.r)
if(a instanceof U.ci){U.e8(k,"random",a.y,u.y)
k.j(0,"step",a.z)}if(a instanceof U.cm){k.j(0,"min",a.fx)
k.j(0,"max",a.fy)}if(a instanceof U.cp){t=P.aX([],j)
k.j(0,"values",t)
for(j=a.y,s=j.length,r=u.b,q=t.$ti.c,p=0;p<j.length;j.length===s||(0,H.y)(j),++p){o=j[p]
n=P.af(["actual",o.a,"display",o.b],l,l)
t.W("push",[q.a(r.a(P.by(P.d9(n))))])}}if(a instanceof U.b6){l=a.x.c
if(l!=null&&l.b!=null)if(l.e.length===0)k.j(0,m,U.bk(l))
else{k.j(0,m,U.mt(l))
k.j(0,"expressionValue",U.bk(a.x.c))}}return k},
mt:function(a){var t,s,r,q="children",p=u.N,o=P.aG(P.af(["name",a.b,"type",a.c],p,p))
U.e8(o,"format",a.d,p)
p=a.e
if(p.length!==0){o.j(0,q,P.aX([],u.z))
for(t=p.length,s=0;s<p.length;p.length===t||(0,H.y)(p),++s){r=p[s]
J.ki(o.h(0,q),U.mt(r))}}return o},
qa:function(a,b){var t,s
if(a==null)return b
else if(H.cF(a))return a
else if(typeof a=="string")try{t=P.pL(a)
return t}catch(s){if(u.g8.b(H.L(s)))return b
else throw s}return b},
cL:function(a,b){var t,s
if(a==null)return b
else if(typeof a=="number")return a
else if(typeof a=="string")try{t=P.mE(a,null)
return t}catch(s){if(u.g8.b(H.L(s)))return b
else throw s}return b},
kT:function(a,b){if(a==null)return b
else if(H.jW(a))return a
else if(typeof a=="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
os:function(a){var t={},s=new H.a6(u.bT),r=new H.a6(u.aI)
t.a=0
U.ky(a,new U.iN(t,s,r),new U.iO(s,r))},
lR:function(a,b){var t={}
t.a=a
U.lS(b,new U.iM(t))
return t.a},
or:function(a,b){var t,s
for(t=new H.W(b,b.gk(b),H.h(b).i("W<l.E>")),s=u.b;t.m();){s.a(t.d).j(0,"id",a)
if(typeof a!=="number")return a.w();++a}return a},
oq:function(a,b,c){var t,s
if(!c.E("action"))return
t=H.r(c.h(0,"action"))
if(a.O(t)){s=a.h(0,t)
c.j(0,"id",s)
U.lR(b.h(0,s),c)}},
ov:function(a){U.lS(a,U.pS())},
ot:function(a){var t="values"
if(!a.E(t)||!(a.h(0,t) instanceof P.v))return
a.j(0,t,P.aX(u.R.a(J.nl(a.h(0,t),new U.iP())),u.z))},
ou:function(a){var t,s,r
a.toString
t=a.$ti
s=t.i("w(l.E)").a(new U.iQ())
r=a.gv(a)
t=new H.bW(r,s,t.i("bW<l.E>"))
s=u.b
for(;t.m();)U.ot(s.a(r.gp()))},
oy:function(a){var t,s,r="program"
U.ky(a,new U.iS(),U.pT())
if(!a.E(r)||!(a.h(0,r) instanceof P.Q))return
t=u.b
s=t.a(a.h(0,r))
if(!s.E("chains")||!(s.h(0,"chains") instanceof P.v))return
U.ow(t.a(a.h(0,r)))},
ow:function(a){var t,s=u.F.a(a.h(0,"chains"))
s.toString
t=s.$ti
a.j(0,"chains",P.aX(new H.ab(s,t.i("w(l.E)").a(new U.iR()),t.i("ab<l.E>")),u.z))},
ox:function(a){if(typeof a.h(0,"x")=="number")a.j(0,"x",J.l0(a.h(0,"x"),10))
if(typeof a.h(0,"y")=="number")a.j(0,"y",J.l0(a.h(0,"y"),10))},
oz:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g="program",f="chains"
if(!a.E(g)||!(a.h(0,g) instanceof P.Q))return
t=u.b
s=t.a(a.h(0,g))
if(!s.E(f)||!(s.h(0,f) instanceof P.v))return
r=P.aX([],u.z)
for(q=J.x(u.R.a(s.h(0,f))),p=r.$ti.c,o=u.N,n=u.K,m=u.F;q.m();){l=m.a(q.gp())
if(!l.gM(l)){k=C.e.bl(0)
if(0===k){k=0>=l.gk(l)
if(k)H.G(P.aO(0,0,l.gk(l),null,null))}j=H.h(l).c.a(l.cv(0,0))
k=J.an(j)
if(typeof k.h(j,"x")=="number"&&typeof k.h(j,"y")=="number"){i=J.c0(k.h(j,"x"))
h=J.c0(k.h(j,"y"))}else{i=0
h=0}}else{i=0
h=0}k=P.af(["blocks",l,"x",i,"y",h],o,n)
r.W("push",[p.a(t.a(P.by(P.d9(k))))])}s.j(0,f,r)},
oA:function(a){a.du("x")
a.du("y")},
oB:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j="blocks",i="program",h="chains",g="children"
if(!a.E(j)||!(a.h(0,j) instanceof P.v))return
for(t=u.R,s=J.x(t.a(a.h(0,j))),r=u.b;s.m();)b.$1(r.a(s.gp()))
if(!a.E(i)||!(a.h(0,i) instanceof P.Q))return
q=r.a(a.h(0,i))
if(!q.E(h)||!(q.h(0,h) instanceof P.v))return
for(s=J.x(t.a(q.h(0,h)));s.m();){p=r.a(s.gp())
if("blocks" in p.a&&p.h(0,j) instanceof P.v)for(o=J.x(t.a(p.h(0,j)));o.m();){n=r.a(o.gp())
c.$1(n)
m=n.a
if("children" in m&&n.h(0,g) instanceof P.v)for(l=J.x(t.a(n.h(0,g)));l.m();)c.$1(r.a(l.gp()))
if("clauses" in m&&n.h(0,"clauses") instanceof P.v)for(m=J.x(t.a(n.h(0,"clauses")));m.m();){k=r.a(m.gp())
if("children" in k.a&&k.h(0,g) instanceof P.v)for(l=J.x(t.a(k.h(0,g)));l.m();)c.$1(r.a(l.gp()))}}}},
ky:function(a,b,c){var t,s,r,q,p,o,n,m,l,k="blocks",j="children",i="program",h="chains"
if(!a.E(k)||!(a.h(0,k) instanceof P.v))return
for(t=u.R,s=J.x(t.a(a.h(0,k))),r=u.b;s.m();)b.$1(r.a(s.gp()))
for(s=J.x(t.a(a.h(0,k)));s.m();){q=r.a(s.gp())
p=q.a
if("children" in p&&q.h(0,j) instanceof P.v)for(o=J.x(t.a(q.h(0,j)));o.m();)c.$1(r.a(o.gp()))
if("clauses" in p&&q.h(0,"clauses") instanceof P.v)for(p=J.x(t.a(q.h(0,"clauses")));p.m();){n=r.a(p.gp())
if("children" in n.a&&n.h(0,j) instanceof P.v)for(o=J.x(t.a(n.h(0,j)));o.m();)c.$1(r.a(o.gp()))}}if(!a.E(i)||!(a.h(0,i) instanceof P.Q))return
m=r.a(a.h(0,i))
if(!m.E(h)||!(m.h(0,h) instanceof P.v))return
for(t=J.x(t.a(m.h(0,h))),s=u.F;t.m();){l=s.a(t.gp())
for(p=new H.W(l,l.gk(l),H.h(l).i("W<l.E>"));p.m();)c.$1(r.a(p.d))}},
lS:function(a,b){var t="params",s="properties"
if(a.E(t)&&a.h(0,t) instanceof P.v)b.$1(u.F.a(a.h(0,t)))
if(a.E(s)&&a.h(0,s) instanceof P.v)b.$1(u.F.a(a.h(0,s)))},
aE:function aE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.e="text"
_.r=_.f=""},
h1:function h1(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fY:function fY(a){this.a=a},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
ci:function ci(a,b){var _=this
_.y=_.x=null
_.z=1
_.a=a
_.b=b
_.d=_.c=null
_.e="text"
_.r=_.f=""},
d6:function d6(a,b){var _=this
_.y=_.x=null
_.z=1
_.a=a
_.b=b
_.d=_.c=null
_.e="text"
_.r=_.f=""},
cm:function cm(a,b){var _=this
_.fx=0
_.fy=10
_.y=_.x=null
_.z=1
_.a=a
_.b=b
_.d=_.c=null
_.e="text"
_.r=_.f=""},
iD:function iD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iE:function iE(a,b){this.a=a
this.b=b},
ba:function ba(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c){var _=this
_.y=a
_.a=b
_.b=c
_.d=_.c=null
_.e="text"
_.r=_.f=""},
iH:function iH(a){this.a=a},
iF:function iF(a){this.a=a},
iG:function iG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b6:function b6(a,b){var _=this
_.x=null
_.a=a
_.b=b
_.d=_.c=null
_.e="text"
_.r=_.f=""},
i0:function i0(){},
i_:function i_(){},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(){},
hZ:function hZ(){},
i3:function i3(){},
hY:function hY(){},
i4:function i4(a,b){this.a=a
this.b=b},
h3:function h3(){},
h5:function h5(a){this.a=a},
h6:function h6(){},
cP:function cP(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=""},
R:function R(a,b,c,d,e){var _=this
_.a=a
_.b=null
_.c=b
_.f=_.e=_.d=null
_.r=c
_.x=d
_.y="shown"
_.z=0
_.dx=_.db=_.cy=_.cx=_.ch=_.Q=null
_.dy=!1
_.fr=e
_.fy=_.fx=null
_.id=_.go=!1
_.k3=_.k2=_.k1=null},
hc:function hc(a){this.a=a},
hd:function hd(){},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(a){this.a=a},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
ai:function ai(a,b){var _=this
_.d=_.c=0
_.e=a
_.r=_.f=null
_.x=!1
_.a=b
_.b=null},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
aw:function aw(a,b,c){var _=this
_.c=a
_.d=b
_.f=_.e=!1
_.a=c
_.b=null},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
hn:function hn(a){this.a=a},
cX:function cX(a,b){this.a=a
this.b=b},
eo:function eo(){var _=this
_.d=_.c=_.b=_.a=_.e=null},
d2:function d2(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c},
hX:function hX(a){this.a=a},
i7:function i7(a,b){this.a=a
this.b=b},
i8:function i8(a){this.a=a},
i9:function i9(a){this.a=a},
i6:function i6(a,b){this.a=a
this.b=b},
ia:function ia(){},
id:function id(a,b){this.a=a
this.b=b},
ib:function ib(){},
ic:function ic(a,b){this.a=a
this.b=b},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a){this.a=a
this.c=this.b=null},
c6:function c6(){},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(){},
eS:function eS(a,b){this.b=a
this.c=b},
eM:function eM(a,b){this.b=a
this.c=b},
iu:function iu(){},
ef:function ef(a,b){this.a=a
this.b=b
this.d=null},
h9:function h9(a){this.a=a},
h7:function h7(a){this.a=a},
h8:function h8(a){this.a=a},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(a){this.a=a},
iy:function iy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bT:function bT(){},
ee:function ee(){this.c=this.b=null},
bF:function bF(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
eE:function eE(a){this.b=a},
eF:function eF(a,b,c){this.b=a
this.c=b
this.d=c},
aJ:function aJ(a,b,c){var _=this
_.a=a
_.d=b
_.e=c
_.y=_.x=_.r=_.f=null},
f3:function f3(a,b){this.a=null
this.d=a
this.e=b},
bJ:function bJ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null
_.x=c
_.y=d
_.Q=_.z=0
_.ch=null
_.cx=e
_.cy=f
_.db=g
_.dx=h
_.dy=i
_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=null},
hx:function hx(a){this.a=a},
hy:function hy(){},
hq:function hq(a){this.a=a},
hr:function hr(){},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
hz:function hz(){},
jV:function jV(a){this.a=a},
il:function il(a){this.a=a},
kc:function kc(){},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a,b){this.a=a
this.b=b},
iM:function iM(a){this.a=a},
iP:function iP(){},
iQ:function iQ(){},
iS:function iS(){},
iR:function iR(){}}
var w=[C,H,J,P,W,Z,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ku.prototype={}
J.ae.prototype={
P:function(a,b){return a===b},
gA:function(a){return H.bS(a)},
n:function(a){return"Instance of '"+H.a(H.iC(a))+"'"},
bh:function(a,b){u.Y.a(b)
throw H.b(P.lG(a,b.gdD(),b.gdL(),b.gdE()))}}
J.ev.prototype={
n:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$iw:1}
J.d8.prototype={
P:function(a,b){return null==b},
n:function(a){return"null"},
gA:function(a){return 0},
bh:function(a,b){return this.ea(a,u.Y.a(b))},
$iu:1}
J.bp.prototype={
gA:function(a){return 0},
n:function(a){return String(a)}}
J.eT.prototype={}
J.br.prototype={}
J.aW.prototype={
n:function(a){var t=a[$.kf()]
if(t==null)return this.ed(a)
return"JavaScript function for "+H.a(J.J(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaV:1}
J.E.prototype={
l:function(a,b){H.B(a).c.a(b)
if(!!a.fixed$length)H.G(P.A("add"))
a.push(b)},
a6:function(a,b,c){var t,s
H.B(a).i("f<1>").a(c)
if(!!a.fixed$length)H.G(P.A("insertAll"))
P.lM(b,0,a.length,"index")
if(!u.X.b(c))c=J.ns(c)
t=J.ad(c)
this.sk(a,a.length+t)
if(typeof b!=="number")return b.w()
s=b+t
this.cs(a,s,a.length,a,b)
this.e5(a,b,s,c)},
L:function(a,b){var t
H.B(a).i("f<1>").a(b)
if(!!a.fixed$length)H.G(P.A("addAll"))
for(t=J.x(b);t.m();)a.push(t.gp())},
t:function(a,b){var t,s
H.B(a).i("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.b(P.aF(a))}},
F:function(a,b,c){var t=H.B(a)
return new H.N(a,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("N<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
aT:function(a,b){return H.aK(a,b,null,H.B(a).c)},
B:function(a,b){if(b<0||b>=a.length)return H.t(a,b)
return a[b]},
gaA:function(a){if(a.length>0)return a[0]
throw H.b(H.eu())},
gdC:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.b(H.eu())},
cs:function(a,b,c,d,e){var t,s,r,q,p=H.B(a)
p.i("f<1>").a(d)
if(!!a.immutable$list)H.G(P.A("setRange"))
P.o9(b,c,a.length)
t=c-b
if(t===0)return
P.bb(e,"skipCount")
if(u.j.b(d)){p.i("o<1>").a(d)
s=e
r=d}else{r=J.nq(d,e).aa(0,!1)
s=0}p=J.an(r)
if(s+t>p.gk(r))throw H.b(H.nO())
if(s<b)for(q=t-1;q>=0;--q)a[b+q]=p.h(r,s+q)
else for(q=0;q<t;++q)a[b+q]=p.h(r,s+q)},
e5:function(a,b,c,d){return this.cs(a,b,c,d,0)},
dh:function(a,b){var t,s
H.B(a).i("w(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(H.a8(b.$1(a[s])))return!0
if(a.length!==t)throw H.b(P.aF(a))}return!1},
cu:function(a,b){var t=H.B(a)
t.i("d(1,1)").a(b)
if(!!a.immutable$list)H.G(P.A("sort"))
H.oi(a,b,t.c)},
N:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bD(a[t],b))return!0
return!1},
gM:function(a){return a.length===0},
gcb:function(a){return a.length!==0},
n:function(a){return P.ik(a,"[","]")},
aa:function(a,b){var t=H.m(a.slice(0),H.B(a))
return t},
a9:function(a){return this.aa(a,!0)},
gv:function(a){return new J.av(a,a.length,H.B(a).i("av<1>"))},
gA:function(a){return H.bS(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.G(P.A("set length"))
if(b<0)throw H.b(P.aO(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.q(b)
if(!H.cF(b))throw H.b(H.bz(a,b))
if(b>=a.length||b<0)throw H.b(H.bz(a,b))
return a[b]},
j:function(a,b,c){H.q(b)
H.B(a).c.a(c)
if(!!a.immutable$list)H.G(P.A("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bz(a,b))
a[b]=c},
$in:1,
$if:1,
$io:1}
J.im.prototype={}
J.av.prototype={
gp:function(){return this.d},
m:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.b(H.y(r))
t=s.c
if(t>=q){s.scA(null)
return!1}s.scA(r[t]);++s.c
return!0},
scA:function(a){this.d=this.$ti.c.a(a)},
$iS:1}
J.bo.prototype={
dr:function(a,b){var t
H.jQ(b)
if(typeof b!="number")throw H.b(H.aS(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbe(b)
if(this.gbe(a)===t)return 0
if(this.gbe(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbe:function(a){return a===0?1/a<0:a<0},
bl:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.b(P.A(""+a+".toInt()"))},
fp:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.b(P.A(""+a+".ceil()"))},
c2:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.b(P.A(""+a+".floor()"))},
C:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.A(""+a+".round()"))},
h8:function(a,b){var t
if(b>20)throw H.b(P.aO(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gbe(a))return"-"+t
return t},
n:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){var t,s,r,q,p=a|0
if(a===p)return 536870911&p
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
w:function(a,b){if(typeof b!="number")throw H.b(H.aS(b))
return a+b},
as:function(a,b){return a*b},
ay:function(a,b){return(a|0)===a?a/b|0:this.fg(a,b)},
fg:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.b(P.A("Result of truncating division is "+H.a(t)+": "+H.a(a)+" ~/ "+b))},
bS:function(a,b){var t
if(a>0)t=this.fc(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
fc:function(a,b){return b>31?0:a>>>b},
I:function(a,b){if(typeof b!="number")throw H.b(H.aS(b))
return a>b},
$iah:1,
$iZ:1}
J.d7.prototype={$id:1}
J.ew.prototype={}
J.b8.prototype={
dq:function(a,b){if(b<0)throw H.b(H.bz(a,b))
if(b>=a.length)H.G(H.bz(a,b))
return a.charCodeAt(b)},
aX:function(a,b){if(b>=a.length)throw H.b(H.bz(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!="string")throw H.b(P.fU(b,null,null))
return a+b},
fI:function(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.e8(a,s-t)},
dP:function(a,b,c){P.lM(0,0,a.length,"startIndex")
return H.q7(a,b,c,0)},
e7:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
ab:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.dp(b,null))
if(b>c)throw H.b(P.dp(b,null))
if(c>a.length)throw H.b(P.dp(c,null))
return a.substring(b,c)},
e8:function(a,b){return this.ab(a,b,null)},
h7:function(a){return a.toLowerCase()},
aC:function(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(this.aX(q,0)===133){t=J.kt(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.dq(q,s)===133?J.nV(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
dW:function(a){var t,s
if(typeof a.trimLeft!="undefined"){t=a.trimLeft()
if(t.length===0)return t
s=this.aX(t,0)===133?J.kt(t,1):0}else{s=J.kt(a,0)
t=a}if(s===0)return t
if(s===t.length)return""
return t.substring(s)},
as:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.E)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
fz:function(a,b,c){var t=a.length
if(c>t)throw H.b(P.aO(c,0,t,null,null))
return H.q5(a,b,c)},
dr:function(a,b){var t
H.r(b)
if(typeof b!="string")throw H.b(H.aS(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
n:function(a){return a},
gA:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>=a.length||!1)throw H.b(H.bz(a,b))
return a[b]},
$ieR:1,
$ic:1}
H.n.prototype={}
H.a7.prototype={
gv:function(a){var t=this
return new H.W(t,t.gk(t),H.h(t).i("W<a7.E>"))},
gM:function(a){return this.gk(this)===0},
bo:function(a,b){return this.ec(0,H.h(this).i("w(a7.E)").a(b))},
F:function(a,b,c){var t=H.h(this)
return new H.N(this,t.q(c).i("1(a7.E)").a(b),t.i("@<a7.E>").q(c).i("N<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
cf:function(a,b){var t,s,r,q=this
H.h(q).i("a7.E(a7.E,a7.E)").a(b)
t=q.gk(q)
if(t===0)throw H.b(H.eu())
s=q.B(0,0)
for(r=1;r<t;++r){s=b.$2(s,q.B(0,r))
if(t!==q.gk(q))throw H.b(P.aF(q))}return s},
aa:function(a,b){var t,s=this,r=H.m([],H.h(s).i("E<a7.E>"))
C.a.sk(r,s.gk(s))
for(t=0;t<s.gk(s);++t)C.a.j(r,t,s.B(0,t))
return r},
a9:function(a){return this.aa(a,!0)}}
H.dt.prototype={
geC:function(){var t=J.ad(this.a),s=this.c
if(s==null||s>t)return t
return s},
gfd:function(){var t=J.ad(this.a),s=this.b
if(typeof s!=="number")return s.I()
if(s>t)return t
return s},
gk:function(a){var t,s=J.ad(this.a),r=this.b
if(typeof r!=="number")return r.hc()
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
if(typeof t!=="number")return t.D()
return t-r},
B:function(a,b){var t,s=this,r=s.gfd()
if(typeof r!=="number")return r.w()
t=r+b
if(b>=0){r=s.geC()
if(typeof r!=="number")return H.Y(r)
r=t>=r}else r=!0
if(r)throw H.b(P.b7(b,s,"index",null,null))
return J.aT(s.a,t)},
aT:function(a,b){var t,s,r=this
P.bb(b,"count")
t=r.b
if(typeof t!=="number")return t.w()
s=t+b
t=r.c
if(t!=null&&s>=t)return new H.bN(r.$ti.i("bN<1>"))
return H.aK(r.a,s,t,r.$ti.c)},
aa:function(a,b){var t,s,r,q,p,o=this,n=o.b,m=o.a,l=J.an(m),k=l.gk(m),j=o.c
if(j!=null&&j<k)k=j
if(typeof k!=="number")return k.D()
if(typeof n!=="number")return H.Y(n)
t=k-n
if(t<0)t=0
s=o.$ti.i("E<1>")
if(b){r=H.m([],s)
C.a.sk(r,t)}else{q=new Array(t)
q.fixed$length=Array
r=H.m(q,s)}for(p=0;p<t;++p){C.a.j(r,p,l.B(m,n+p))
if(l.gk(m)<k)throw H.b(P.aF(o))}return r},
a9:function(a){return this.aa(a,!0)}}
H.W.prototype={
gp:function(){return this.d},
m:function(){var t,s=this,r=s.a,q=J.an(r),p=q.gk(r)
if(s.b!==p)throw H.b(P.aF(r))
t=s.c
if(t>=p){s.saF(null)
return!1}s.saF(q.B(r,t));++s.c
return!0},
saF:function(a){this.d=this.$ti.c.a(a)},
$iS:1}
H.az.prototype={
gv:function(a){var t=H.h(this)
return new H.a4(J.x(this.a),this.b,t.i("@<1>").q(t.Q[1]).i("a4<1,2>"))},
gk:function(a){return J.ad(this.a)},
B:function(a,b){return this.b.$1(J.aT(this.a,b))}}
H.aN.prototype={$in:1}
H.a4.prototype={
m:function(){var t=this,s=t.b
if(s.m()){t.saF(t.c.$1(s.gp()))
return!0}t.saF(null)
return!1},
gp:function(){return this.a},
saF:function(a){this.a=this.$ti.Q[1].a(a)}}
H.N.prototype={
gk:function(a){return J.ad(this.a)},
B:function(a,b){return this.b.$1(J.aT(this.a,b))}}
H.ab.prototype={
gv:function(a){return new H.bW(J.x(this.a),this.b,this.$ti.i("bW<1>"))},
F:function(a,b,c){var t=this.$ti
return new H.az(this,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("az<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)}}
H.bW.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(H.a8(s.$1(t.gp())))return!0
return!1},
gp:function(){return this.a.gp()}}
H.bV.prototype={
gv:function(a){return new H.dv(J.x(this.a),this.b,H.h(this).i("dv<1>"))}}
H.d_.prototype={
gk:function(a){var t=J.ad(this.a),s=this.b
if(t>s)return s
return t},
$in:1}
H.dv.prototype={
m:function(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gp:function(){if(this.b<0)return null
return this.a.gp()}}
H.bU.prototype={
gv:function(a){return new H.dr(J.x(this.a),this.b,H.h(this).i("dr<1>"))}}
H.cZ.prototype={
gk:function(a){var t=J.ad(this.a)-this.b
if(t>=0)return t
return 0},
$in:1}
H.dr.prototype={
m:function(){var t,s
for(t=this.a,s=0;s<this.b;++s)t.m()
this.b=0
return t.m()},
gp:function(){return this.a.gp()}}
H.bN.prototype={
gv:function(a){return C.x},
gk:function(a){return 0},
B:function(a,b){throw H.b(P.aO(b,0,0,"index",null))},
F:function(a,b,c){this.$ti.q(c).i("1(2)").a(b)
return new H.bN(c.i("bN<0>"))},
R:function(a,b){return this.F(a,b,u.z)},
aa:function(a,b){var t=new Array(0)
t.fixed$length=Array
t=H.m(t,this.$ti.i("E<1>"))
return t}}
H.d1.prototype={
m:function(){return!1},
gp:function(){return null},
$iS:1}
H.V.prototype={
sk:function(a,b){throw H.b(P.A("Cannot change the length of a fixed-length list"))},
l:function(a,b){H.ao(a).i("V.E").a(b)
throw H.b(P.A("Cannot add to a fixed-length list"))}}
H.ct.prototype={
gA:function(a){var t=this._hashCode
if(t!=null)return t
t=536870911&664597*J.a9(this.a)
this._hashCode=t
return t},
n:function(a){return'Symbol("'+H.a(this.a)+'")'},
P:function(a,b){if(b==null)return!1
return b instanceof H.ct&&this.a==b.a},
$iaQ:1}
H.cT.prototype={}
H.cS.prototype={
gM:function(a){return this.gk(this)===0},
n:function(a){return P.is(this)},
j:function(a,b,c){var t=H.h(this)
t.c.a(b)
t.Q[1].a(c)
return H.nE()},
aB:function(a,b,c,d){var t=P.ce(c,d)
this.t(0,new H.hA(this,H.h(this).q(c).q(d).i("cg<1,2>(3,4)").a(b),t))
return t},
R:function(a,b){return this.aB(a,b,u.z,u.z)},
$iaj:1}
H.hA.prototype={
$2:function(a,b){var t=H.h(this.a),s=this.b.$2(t.c.a(a),t.Q[1].a(b))
this.c.j(0,C.q.gfR(s),s.gJ(s))},
$S:function(){return H.h(this.a).i("u(1,2)")}}
H.cU.prototype={
gk:function(a){return this.a},
O:function(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.O(b))return null
return this.cQ(b)},
cQ:function(a){return this.b[H.r(a)]},
t:function(a,b){var t,s,r,q,p=H.h(this)
p.i("~(1,2)").a(b)
t=this.c
for(s=t.length,p=p.Q[1],r=0;r<s;++r){q=t[r]
b.$2(q,p.a(this.cQ(q)))}},
gG:function(){return new H.dx(this,H.h(this).i("dx<1>"))}}
H.dx.prototype={
gv:function(a){var t=this.a.c
return new J.av(t,t.length,H.B(t).i("av<1>"))},
gk:function(a){return this.a.c.length}}
H.ex.prototype={
gdD:function(){var t=this.a
return t},
gdL:function(){var t,s,r,q,p=this
if(p.c===1)return C.r
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return C.r
r=[]
for(q=0;q<s;++q){if(q>=t.length)return H.t(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gdE:function(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.u
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return C.u
p=new H.a6(u.eo)
for(o=0;o<s;++o){if(o>=t.length)return H.t(t,o)
n=t[o]
m=q+o
if(m<0||m>=r.length)return H.t(r,m)
p.j(0,new H.ct(n),r[m])}return new H.cT(p,u.gF)},
$ilz:1}
H.iB.prototype={
$2:function(a,b){var t
H.r(a)
t=this.a
t.b=t.b+"$"+H.a(a)
C.a.l(this.b,a)
C.a.l(this.c,b);++t.a},
$S:63}
H.iK.prototype={
a1:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.eO.prototype={
n:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.a(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.ez.prototype={
n:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.a(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.a(s.a)+")"
return r+q+"' on '"+t+"' ("+H.a(s.a)+")"}}
H.f6.prototype={
n:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ke.prototype={
$1:function(a){if(u.bU.b(a))if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.dU.prototype={
n:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iam:1}
H.bI.prototype={
n:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.mR(s==null?"unknown":s)+"'"},
$iaV:1,
ghb:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.f2.prototype={}
H.eW.prototype={
n:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.mR(t)+"'"}}
H.c4.prototype={
P:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.c4))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gA:function(a){var t,s=this.c
if(s==null)t=H.bS(this.a)
else t=typeof s!=="object"?J.a9(s):H.bS(s)
return(t^H.bS(this.b))>>>0},
n:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.a(H.iC(t))+"'")}}
H.eU.prototype={
n:function(a){return"RuntimeError: "+H.a(this.a)}}
H.f8.prototype={
n:function(a){return"Assertion failed: "+P.bm(this.a)}}
H.a6.prototype={
gk:function(a){return this.a},
gM:function(a){return this.a===0},
gG:function(){return new H.aa(this,H.h(this).i("aa<1>"))},
gar:function(a){var t=H.h(this)
return H.lF(new H.aa(this,t.i("aa<1>")),new H.io(this),t.c,t.Q[1])},
O:function(a){var t,s,r=this
if(typeof a=="string"){t=r.b
if(t==null)return!1
return r.cM(t,a)}else if(typeof a=="number"&&(a&0x3ffffff)===a){s=r.c
if(s==null)return!1
return r.cM(s,a)}else return r.fM(a)},
fM:function(a){var t=this.d
if(t==null)return!1
return this.bd(this.aZ(t,J.a9(a)&0x3ffffff),a)>=0},
h:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.b_(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.b_(q,b)
r=s==null?o:s.b
return r}else return p.fN(b)},
fN:function(a){var t,s,r=this.d
if(r==null)return null
t=this.aZ(r,J.a9(a)&0x3ffffff)
s=this.bd(t,a)
if(s<0)return null
return t[s].b},
j:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.h(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.cC(t==null?n.b=n.bL():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.cC(s==null?n.c=n.bL():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.bL()
q=J.a9(b)&0x3ffffff
p=n.aZ(r,q)
if(p==null)n.bR(r,q,[n.bM(b,c)])
else{o=n.bd(p,b)
if(o>=0)p[o].b=c
else p.push(n.bM(b,c))}}},
a8:function(a,b){var t=this.fO(b)
return t},
fO:function(a){var t,s,r,q,p=this,o=p.d
if(o==null)return null
t=J.a9(a)&0x3ffffff
s=p.aZ(o,t)
r=p.bd(s,a)
if(r<0)return null
q=s.splice(r,1)[0]
p.eo(q)
if(s.length===0)p.cP(o,t)
return q.b},
ba:function(a){var t=this
if(t.a>0){t.b=t.c=t.d=t.e=t.f=null
t.a=0
t.bK()}},
t:function(a,b){var t,s,r=this
H.h(r).i("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.b(P.aF(r))
t=t.c}},
cC:function(a,b,c){var t,s=this,r=H.h(s)
r.c.a(b)
r.Q[1].a(c)
t=s.b_(a,b)
if(t==null)s.bR(a,b,s.bM(b,c))
else t.b=c},
bK:function(){this.r=this.r+1&67108863},
bM:function(a,b){var t,s=this,r=H.h(s),q=new H.ir(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{t=s.f
q.d=t
s.f=t.c=q}++s.a
s.bK()
return q},
eo:function(a){var t=this,s=a.d,r=a.c
if(s==null)t.e=r
else s.c=r
if(r==null)t.f=s
else r.d=s;--t.a
t.bK()},
bd:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bD(a[s].a,b))return s
return-1},
n:function(a){return P.is(this)},
b_:function(a,b){return a[b]},
aZ:function(a,b){return a[b]},
bR:function(a,b,c){a[b]=c},
cP:function(a,b){delete a[b]},
cM:function(a,b){return this.b_(a,b)!=null},
bL:function(){var t="<non-identifier-key>",s=Object.create(null)
this.bR(s,t,s)
this.cP(s,t)
return s},
$ilD:1}
H.io.prototype={
$1:function(a){var t=this.a
return t.h(0,H.h(t).c.a(a))},
$S:function(){return H.h(this.a).i("2(1)")}}
H.ir.prototype={}
H.aa.prototype={
gk:function(a){return this.a.a},
gM:function(a){return this.a.a===0},
gv:function(a){var t=this.a,s=new H.dc(t,t.r,this.$ti.i("dc<1>"))
s.c=t.e
return s}}
H.dc.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.aF(s))
else{s=t.c
if(s==null){t.scB(null)
return!1}else{t.scB(s.a)
t.c=t.c.c
return!0}}},
scB:function(a){this.d=this.$ti.c.a(a)},
$iS:1}
H.k4.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.k5.prototype={
$2:function(a,b){return this.a(a,b)},
$S:35}
H.k6.prototype={
$1:function(a){return this.a(H.r(a))},
$S:38}
H.ey.prototype={
n:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ieR:1}
H.eZ.prototype={
h:function(a,b){H.q(b)
if(b!==0)H.G(P.dp(b,null))
return this.c},
$idg:1}
H.jD.prototype={
m:function(){var t,s,r=this,q=r.c,p=r.b,o=p.length,n=r.a,m=n.length
if(q+o>m){r.d=null
return!1}t=n.indexOf(p,q)
if(t<0){r.c=m+1
r.d=null
return!1}s=t+o
r.d=new H.eZ(t,p)
r.c=s===r.c?s+1:s
return!0},
gp:function(){return this.d},
$iS:1}
H.bQ.prototype={$iaR:1}
H.di.prototype={
gk:function(a){return a.length},
$ia_:1}
H.bP.prototype={
h:function(a,b){H.q(b)
H.bg(b,a,a.length)
return a[b]},
j:function(a,b,c){H.q(b)
H.p3(c)
H.bg(b,a,a.length)
a[b]=c},
$in:1,
$if:1,
$io:1}
H.dj.prototype={
j:function(a,b,c){H.q(b)
H.q(c)
H.bg(b,a,a.length)
a[b]=c},
$in:1,
$if:1,
$io:1}
H.eG.prototype={
h:function(a,b){H.q(b)
H.bg(b,a,a.length)
return a[b]}}
H.eH.prototype={
h:function(a,b){H.q(b)
H.bg(b,a,a.length)
return a[b]}}
H.eI.prototype={
h:function(a,b){H.q(b)
H.bg(b,a,a.length)
return a[b]}}
H.eJ.prototype={
h:function(a,b){H.q(b)
H.bg(b,a,a.length)
return a[b]}}
H.eK.prototype={
h:function(a,b){H.q(b)
H.bg(b,a,a.length)
return a[b]}}
H.dk.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
H.bg(b,a,a.length)
return a[b]}}
H.eL.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
H.bg(b,a,a.length)
return a[b]}}
H.dM.prototype={}
H.dN.prototype={}
H.dO.prototype={}
H.dP.prototype={}
H.aI.prototype={
i:function(a){return H.fI(v.typeUniverse,this,a)},
q:function(a){return H.p1(v.typeUniverse,this,a)}}
H.fm.prototype={}
H.fk.prototype={
n:function(a){return this.a}}
H.dZ.prototype={}
P.iW.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:25}
P.iV.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:49}
P.iX.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:1}
P.iY.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:1}
P.jH.prototype={
en:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cK(new P.jI(this,b),0),a)
else throw H.b(P.A("`setTimeout()` not found."))}}
P.jI.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.ac.prototype={}
P.b0.prototype={
ac:function(){},
ad:function(){},
saL:function(a){this.dy=this.$ti.a(a)},
sb3:function(a){this.fr=this.$ti.a(a)}}
P.bt.prototype={
gb0:function(){return this.c<4},
eD:function(){var t=this.r
if(t!=null)return t
return this.r=new P.a3($.F,u._)},
d8:function(a){var t,s
H.h(this).i("b0<1>").a(a)
t=a.fr
s=a.dy
if(t==null)this.scR(s)
else t.saL(s)
if(s==null)this.scY(t)
else s.sb3(t)
a.sb3(a)
a.saL(a)},
bT:function(a,b,c,d){var t,s,r,q,p,o=this,n=H.h(o)
n.i("~(1)").a(a)
u.M.a(c)
if((o.c&4)!==0){if(c==null)c=P.mq()
n=new P.cz($.F,c,n.i("cz<1>"))
n.d9()
return n}t=$.F
s=d?1:0
r=n.i("b0<1>")
q=new P.b0(o,t,s,r)
q.cz(a,b,c,d,n.c)
q.sb3(q)
q.saL(q)
r.a(q)
q.dx=o.c&1
p=o.e
o.scY(q)
q.saL(null)
q.sb3(p)
if(p==null)o.scR(q)
else p.saL(q)
if(o.d==o.e)P.mm(o.a)
return q},
f2:function(a){var t=this,s=H.h(t)
a=s.i("b0<1>").a(s.i("a2<1>").a(a))
if(a.dy===a)return null
s=a.dx
if((s&2)!==0)a.dx=s|4
else{t.d8(a)
if((t.c&2)===0&&t.d==null)t.bz()}return null},
aW:function(){if((this.c&4)!==0)return new P.aY("Cannot add new events after calling close")
return new P.aY("Cannot add new events while doing an addStream")},
l:function(a,b){var t=this
H.h(t).c.a(b)
if(!t.gb0())throw H.b(t.aW())
t.b6(b)},
bZ:function(a){var t,s=this
if((s.c&4)!==0)return s.r
if(!s.gb0())throw H.b(s.aW())
s.c|=4
t=s.eD()
s.ax()
return t},
cS:function(a){var t,s,r,q,p=this
H.h(p).i("~(O<1>)").a(a)
t=p.c
if((t&2)!==0)throw H.b(P.cq("Cannot fire new event. Controller is already firing an event"))
s=p.d
if(s==null)return
r=t&1
p.c=t^3
for(;s!=null;){t=s.dx
if((t&1)===r){s.dx=t|2
a.$1(s)
t=s.dx^=1
q=s.dy
if((t&4)!==0)p.d8(s)
s.dx&=4294967293
s=q}else s=s.dy}p.c&=4294967293
if(p.d==null)p.bz()},
bz:function(){var t=this
if((t.c&4)!==0&&t.r.a===0)t.r.cE(null)
P.mm(t.b)},
scR:function(a){this.d=H.h(this).i("b0<1>").a(a)},
scY:function(a){this.e=H.h(this).i("b0<1>").a(a)},
$ieX:1,
$im3:1,
$ibe:1,
$ibd:1}
P.dX.prototype={
gb0:function(){return P.bt.prototype.gb0.call(this)&&(this.c&2)===0},
aW:function(){if((this.c&2)!==0)return new P.aY("Cannot fire new event. Controller is already firing an event")
return this.ef()},
b6:function(a){var t,s=this
s.$ti.c.a(a)
t=s.d
if(t==null)return
if(t===s.e){s.c|=2
t.aG(a)
s.c&=4294967293
if(s.d==null)s.bz()
return}s.cS(new P.jE(s,a))},
ax:function(){var t=this
if(t.d!=null)t.cS(new P.jF(t))
else t.r.cE(null)}}
P.jE.prototype={
$1:function(a){this.a.$ti.i("O<1>").a(a).aG(this.b)},
$S:function(){return this.a.$ti.i("u(O<1>)")}}
P.jF.prototype={
$1:function(a){this.a.$ti.i("O<1>").a(a).cH()},
$S:function(){return this.a.$ti.i("u(O<1>)")}}
P.ax.prototype={}
P.ii.prototype={
$0:function(){var t,s,r,q,p
try{this.a.aY(this.b.$0())}catch(r){t=H.L(r)
s=H.aM(r)
q=t
p=s
if(p==null)p=P.l7(q)
this.a.aI(q,p)}},
$S:1}
P.fc.prototype={}
P.dY.prototype={}
P.bX.prototype={
fT:function(a){if((this.c&15)!==6)return!0
return this.b.b.cm(u.bN.a(this.d),a.a,u.y,u.K)},
fK:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.ag.b(t))return q.a(p.h5(t,a.a,a.b,s,r,u.l))
else return q.a(p.cm(u.v.a(t),a.a,s,r))}}
P.a3.prototype={
dV:function(a,b,c){var t,s,r,q=this.$ti
q.q(c).i("1/(2)").a(a)
t=$.F
if(t!==C.f){c.i("@<0/>").q(q.c).i("1(2)").a(a)
if(b!=null)b=P.pn(b,t)}s=new P.a3($.F,c.i("a3<0>"))
r=b==null?1:3
this.bx(new P.bX(s,r,a,b,q.i("@<1>").q(c).i("bX<1,2>")))
return s},
dU:function(a,b){return this.dV(a,null,b)},
e0:function(a){var t,s
u.fO.a(a)
t=this.$ti
s=new P.a3($.F,t)
this.bx(new P.bX(s,8,a,null,t.i("@<1>").q(t.c).i("bX<1,2>")))
return s},
fb:function(a){this.$ti.c.a(a)
this.a=4
this.c=a},
bx:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.x.a(s.c)
s.c=a}else{if(r===2){t=u._.a(s.c)
r=t.a
if(r<4){t.bx(a)
return}s.a=r
s.c=t.c}P.cI(null,null,s.b,u.M.a(new P.j6(s,a)))}},
d5:function(a){var t,s,r,q,p,o=this,n={}
n.a=a
if(a==null)return
t=o.a
if(t<=1){s=u.x.a(o.c)
r=o.c=a
if(s!=null){for(;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=u._.a(o.c)
t=p.a
if(t<4){p.d5(a)
return}o.a=t
o.c=p.c}n.a=o.b5(a)
P.cI(null,null,o.b,u.M.a(new P.jd(n,o)))}},
b4:function(){var t=u.x.a(this.c)
this.c=null
return this.b5(t)},
b5:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aY:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("ax<1>").b(a))if(r.b(a))P.j8(a,s)
else P.lX(a,s)
else{t=s.b4()
r.c.a(a)
s.a=4
s.c=a
P.cC(s,t)}},
aI:function(a,b){var t,s,r=this
u.l.a(b)
t=r.b4()
s=P.fW(a,b)
r.a=8
r.c=s
P.cC(r,t)},
ey:function(a){return this.aI(a,null)},
cE:function(a){var t=this,s=t.$ti
s.i("1/").a(a)
if(s.i("ax<1>").b(a)){t.er(a)
return}t.a=1
P.cI(null,null,t.b,u.M.a(new P.j7(t,a)))},
er:function(a){var t=this,s=t.$ti
s.i("ax<1>").a(a)
if(s.b(a)){if(a.ghd()){t.a=1
P.cI(null,null,t.b,u.M.a(new P.jc(t,a)))}else P.j8(a,t)
return}P.lX(a,t)},
$iax:1}
P.j6.prototype={
$0:function(){P.cC(this.a,this.b)},
$S:1}
P.jd.prototype={
$0:function(){P.cC(this.b,this.a.a)},
$S:1}
P.j9.prototype={
$1:function(a){var t=this.a
t.a=0
t.aY(a)},
$S:25}
P.ja.prototype={
$2:function(a,b){u.l.a(b)
this.a.aI(a,b)},
$1:function(a){return this.$2(a,null)},
$C:"$2",
$D:function(){return[null]},
$S:46}
P.jb.prototype={
$0:function(){this.a.aI(this.b,this.c)},
$S:1}
P.j7.prototype={
$0:function(){var t=this.a,s=t.$ti.c.a(this.b),r=t.b4()
t.a=4
t.c=s
P.cC(t,r)},
$S:1}
P.jc.prototype={
$0:function(){P.j8(this.b,this.a)},
$S:1}
P.jg.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.c
m=r.b.b.dS(u.fO.a(r.d),u.z)}catch(q){t=H.L(q)
s=H.aM(q)
if(n.d){r=u.n.a(n.a.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.b
if(r)p.b=u.n.a(n.a.a.c)
else p.b=P.fW(t,s)
p.a=!0
return}if(u.b9.b(m)){if(m instanceof P.a3&&m.a>=4){if(m.a===8){r=n.b
r.b=u.n.a(m.c)
r.a=!0}return}o=n.a.a
r=n.b
r.b=m.dU(new P.jh(o),u.z)
r.a=!1}},
$S:0}
P.jh.prototype={
$1:function(a){return this.a},
$S:50}
P.jf.prototype={
$0:function(){var t,s,r,q,p,o,n,m=this
try{r=m.b
q=r.$ti
p=q.c
o=p.a(m.c)
m.a.b=r.b.b.cm(q.i("2/(1)").a(r.d),o,q.i("2/"),p)}catch(n){t=H.L(n)
s=H.aM(n)
r=m.a
r.b=P.fW(t,s)
r.a=!0}},
$S:0}
P.je.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.c
if(H.a8(q.fT(t))&&q.e!=null){p=l.b
p.b=q.fK(t)
p.a=!1}}catch(o){s=H.L(o)
r=H.aM(o)
q=u.n.a(l.a.a.c)
p=q.a
n=s
m=l.b
if(p==null?n==null:p===n)m.b=q
else m.b=P.fW(s,r)
m.a=!0}},
$S:0}
P.f9.prototype={}
P.U.prototype={
R:function(a,b){var t=H.h(this)
return new P.dK(t.i("@(U.T)").a(b),this,t.i("dK<U.T,@>"))},
gk:function(a){var t={},s=new P.a3($.F,u.fJ)
t.a=0
this.X(new P.iI(t,this),!0,new P.iJ(t,s),s.gex())
return s}}
P.iI.prototype={
$1:function(a){H.h(this.b).i("U.T").a(a);++this.a.a},
$S:function(){return H.h(this.b).i("u(U.T)")}}
P.iJ.prototype={
$0:function(){this.b.aY(this.a.a)},
$C:"$0",
$R:0,
$S:1}
P.a2.prototype={}
P.eY.prototype={}
P.cx.prototype={
gA:function(a){return(H.bS(this.a)^892482866)>>>0},
P:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cx&&b.a===this.a}}
P.cy.prototype={
bN:function(){return this.x.f2(this)},
ac:function(){H.h(this.x).i("a2<1>").a(this)},
ad:function(){H.h(this.x).i("a2<1>").a(this)}}
P.O.prototype={
cz:function(a,b,c,d,e){var t,s=this,r=H.h(s)
r.i("~(O.T)").a(a)
s.seq(u.gu.q(r.i("O.T")).i("1(2)").a(a))
t=b==null?P.py():b
if(u.da.b(t))s.b=s.d.dM(t,u.z,u.K,u.l)
else if(u.d5.b(t))s.b=u.v.a(t)
else H.G(P.bi("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
r=u.M
r.a(c)
s.sf0(r.a(c==null?P.mq():c))},
cd:function(a){var t,s,r=this,q=r.e
if((q&8)!==0)return
t=(q+128|4)>>>0
r.e=t
if(q<128&&r.r!=null){s=r.r
if(s.a===1)s.a=3}if((q&4)===0&&(t&32)===0)r.cX(r.gb1())},
ck:function(){var t=this,s=t.e
if((s&8)!==0)return
if(s>=128){s=t.e=s-128
if(s<128)if((s&64)!==0&&t.r.c!=null)t.r.bs(t)
else{s=(s&4294967291)>>>0
t.e=s
if((s&32)===0)t.cX(t.gb2())}}},
a_:function(){var t=this,s=(t.e&4294967279)>>>0
t.e=s
if((s&8)===0)t.bA()
s=t.f
return s==null?$.fP():s},
bA:function(){var t,s=this,r=s.e=(s.e|8)>>>0
if((r&64)!==0){t=s.r
if(t.a===1)t.a=3}if((r&32)===0)s.sbO(null)
s.f=s.bN()},
aG:function(a){var t,s=this,r=H.h(s)
r.i("O.T").a(a)
t=s.e
if((t&8)!==0)return
if(t<32)s.b6(a)
else s.by(new P.dy(a,r.i("dy<O.T>")))},
aV:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.da(a,b)
else this.by(new P.fh(a,b))},
cH:function(){var t=this,s=t.e
if((s&8)!==0)return
s=(s|2)>>>0
t.e=s
if(s<32)t.ax()
else t.by(C.F)},
ac:function(){},
ad:function(){},
bN:function(){return null},
by:function(a){var t=this,s=H.h(t).i("dV<O.T>"),r=s.a(t.r)
if(r==null){r=new P.dV(s)
t.sbO(r)}r.l(0,a)
s=t.e
if((s&64)===0){s=(s|64)>>>0
t.e=s
if(s<128)t.r.bs(t)}},
b6:function(a){var t,s=this,r=H.h(s).i("O.T")
r.a(a)
t=s.e
s.e=(t|32)>>>0
s.d.cn(s.a,a,r)
s.e=(s.e&4294967263)>>>0
s.bC((t&4)!==0)},
da:function(a,b){var t=this,s=t.e,r=new P.j_(t,a,b)
if((s&1)!==0){t.e=(s|16)>>>0
t.bA()
s=t.f
if(s!=null&&s!==$.fP())s.e0(r)
else r.$0()}else{r.$0()
t.bC((s&4)!==0)}},
ax:function(){var t,s=this,r=new P.iZ(s)
s.bA()
s.e=(s.e|16)>>>0
t=s.f
if(t!=null&&t!==$.fP())t.e0(r)
else r.$0()},
cX:function(a){var t,s=this
u.M.a(a)
t=s.e
s.e=(t|32)>>>0
a.$0()
s.e=(s.e&4294967263)>>>0
s.bC((t&4)!==0)},
bC:function(a){var t,s,r=this,q=r.e
if((q&64)!==0&&r.r.c==null){q=r.e=(q&4294967231)>>>0
if((q&4)!==0)if(q<128){t=r.r
t=t==null||t.c==null}else t=!1
else t=!1
if(t){q=(q&4294967291)>>>0
r.e=q}}for(;!0;a=s){if((q&8)!==0){r.sbO(null)
return}s=(q&4)!==0
if(a===s)break
r.e=(q^32)>>>0
if(s)r.ac()
else r.ad()
q=(r.e&4294967263)>>>0
r.e=q}if((q&64)!==0&&q<128)r.r.bs(r)},
seq:function(a){this.a=H.h(this).i("~(O.T)").a(a)},
sf0:function(a){this.c=u.M.a(a)},
sbO:function(a){this.r=H.h(this).i("dQ<O.T>").a(a)},
$ia2:1,
$ibe:1,
$ibd:1}
P.j_.prototype={
$0:function(){var t,s,r,q=this.a,p=q.e
if((p&8)!==0&&(p&16)===0)return
q.e=(p|32)>>>0
t=q.b
p=this.b
s=u.K
r=q.d
if(u.da.b(t))r.h6(t,p,this.c,s,u.l)
else r.cn(u.d5.a(t),p,s)
q.e=(q.e&4294967263)>>>0},
$S:0}
P.iZ.prototype={
$0:function(){var t=this.a,s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.cl(t.c)
t.e=(t.e&4294967263)>>>0},
$S:0}
P.cD.prototype={
X:function(a,b,c,d){var t=this.$ti
t.i("~(1)").a(a)
u.M.a(c)
return this.a.bT(t.i("~(1)").a(a),d,c,!0===b)},
u:function(a){return this.X(a,null,null,null)},
bg:function(a,b,c){return this.X(a,null,b,c)}}
P.bu.prototype={
saO:function(a){this.a=u.gt.a(a)},
gaO:function(){return this.a}}
P.dy.prototype={
ce:function(a){this.$ti.i("bd<1>").a(a).b6(this.b)}}
P.fh.prototype={
ce:function(a){a.da(this.b,this.c)}}
P.fg.prototype={
ce:function(a){a.ax()},
gaO:function(){return null},
saO:function(a){throw H.b(P.cq("No events after a done."))},
$ibu:1}
P.dQ.prototype={
bs:function(a){var t,s=this
s.$ti.i("bd<1>").a(a)
t=s.a
if(t===1)return
if(t>=1){s.a=1
return}P.mN(new P.jr(s,a))
s.a=1}}
P.jr.prototype={
$0:function(){var t,s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
t=q.$ti.i("bd<1>").a(this.b)
s=q.b
r=s.gaO()
q.b=r
if(r==null)q.c=null
s.ce(t)},
$S:1}
P.dV.prototype={
l:function(a,b){var t,s=this
u.gt.a(b)
t=s.c
if(t==null)s.b=s.c=b
else{t.saO(b)
s.c=b}}}
P.cz.prototype={
d9:function(){var t=this
if((t.b&2)!==0)return
P.cI(null,null,t.a,u.M.a(t.gfa()))
t.b=(t.b|2)>>>0},
cd:function(a){this.b+=4},
ck:function(){var t=this.b
if(t>=4){t=this.b=t-4
if(t<4&&(t&1)===0)this.d9()}},
a_:function(){return $.fP()},
ax:function(){var t=this,s=t.b=(t.b&4294967293)>>>0
if(s>=4)return
t.b=(s|1)>>>0
t.a.cl(t.c)},
$ia2:1}
P.dB.prototype={
X:function(a,b,c,d){var t,s,r,q=this.$ti
q.i("~(2)").a(a)
u.M.a(c)
b=!0===b
t=q.Q[1]
s=$.F
r=b?1:0
q=new P.cB(this,s,r,q.i("@<1>").q(t).i("cB<1,2>"))
q.cz(a,d,c,b,t)
q.sdc(this.a.bg(q.geI(),q.geL(),q.geW()))
return q},
bg:function(a,b,c){return this.X(a,null,b,c)}}
P.cB.prototype={
aG:function(a){this.$ti.Q[1].a(a)
if((this.e&2)!==0)return
this.eg(a)},
aV:function(a,b){if((this.e&2)!==0)return
this.eh(a,b)},
ac:function(){var t=this.y
if(t==null)return
t.cd(0)},
ad:function(){var t=this.y
if(t==null)return
t.ck()},
bN:function(){var t=this.y
if(t!=null){this.sdc(null)
return t.a_()}return null},
eJ:function(a){this.x.eK(this.$ti.c.a(a),this)},
eX:function(a,b){u.l.a(b)
this.x.$ti.i("be<2>").a(this).aV(a,b)},
eM:function(){this.x.$ti.i("be<2>").a(this).cH()},
sdc:function(a){this.y=this.$ti.i("a2<1>").a(a)}}
P.dK.prototype={
eK:function(a,b){var t,s,r,q,p=this.$ti
p.c.a(a)
p.i("be<2>").a(b)
t=null
try{t=this.b.$1(a)}catch(q){s=H.L(q)
r=H.aM(q)
b.aV(s,r)
return}b.aG(t)}}
P.cO.prototype={
n:function(a){return H.a(this.a)},
$iK:1,
gaU:function(){return this.b}}
P.fJ.prototype={$ilT:1}
P.jX.prototype={
$0:function(){var t,s=this.a,r=s.b
if(r==null)throw H.b(s.a)
t=H.b(s.a)
t.stack=r.n(0)
throw t},
$S:1}
P.fy.prototype={
cl:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.f===$.F){a.$0()
return}P.mj(q,q,this,a,u.o)}catch(r){t=H.L(r)
s=H.aM(r)
P.cH(q,q,this,t,u.l.a(s))}},
cn:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.f===$.F){a.$1(b)
return}P.ml(q,q,this,a,b,u.o,c)}catch(r){t=H.L(r)
s=H.aM(r)
P.cH(q,q,this,t,u.l.a(s))}},
h6:function(a,b,c,d,e){var t,s,r,q=null
d.i("@<0>").q(e).i("~(1,2)").a(a)
d.a(b)
e.a(c)
try{if(C.f===$.F){a.$2(b,c)
return}P.mk(q,q,this,a,b,c,u.o,d,e)}catch(r){t=H.L(r)
s=H.aM(r)
P.cH(q,q,this,t,u.l.a(s))}},
fn:function(a,b){return new P.jy(this,b.i("0()").a(a),b)},
bV:function(a){return new P.jx(this,u.M.a(a))},
fo:function(a,b){return new P.jz(this,b.i("~(0)").a(a),b)},
h:function(a,b){return null},
dS:function(a,b){b.i("0()").a(a)
if($.F===C.f)return a.$0()
return P.mj(null,null,this,a,b)},
cm:function(a,b,c,d){c.i("@<0>").q(d).i("1(2)").a(a)
d.a(b)
if($.F===C.f)return a.$1(b)
return P.ml(null,null,this,a,b,c,d)},
h5:function(a,b,c,d,e,f){d.i("@<0>").q(e).q(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.F===C.f)return a.$2(b,c)
return P.mk(null,null,this,a,b,c,d,e,f)},
dM:function(a,b,c,d){return b.i("@<0>").q(c).q(d).i("1(2,3)").a(a)}}
P.jy.prototype={
$0:function(){return this.a.dS(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.jx.prototype={
$0:function(){return this.a.cl(this.b)},
$S:0}
P.jz.prototype={
$1:function(a){var t=this.c
return this.a.cn(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.dC.prototype={
gk:function(a){return this.a},
gM:function(a){return this.a===0},
gG:function(){return new P.dD(this,this.$ti.i("dD<1>"))},
O:function(a){var t,s
if(typeof a=="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.eA(a)},
eA:function(a){var t=this.d
if(t==null)return!1
return this.ai(this.cU(t,a),a)>=0},
h:function(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:P.lY(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:P.lY(r,b)
return s}else return this.eG(b)},
eG:function(a){var t,s,r=this.d
if(r==null)return null
t=this.cU(r,a)
s=this.ai(t,a)
return s<0?null:t[s+1]},
j:function(a,b,c){var t,s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.Q[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){t=o.b
o.ew(t==null?o.b=P.lZ():t,b,c)}else{s=o.d
if(s==null)s=o.d=P.lZ()
r=H.mF(b)&1073741823
q=s[r]
if(q==null){P.kz(s,r,[b,c]);++o.a
o.e=null}else{p=o.ai(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}}},
t:function(a,b){var t,s,r,q,p=this,o=p.$ti
o.i("~(1,2)").a(b)
t=p.cK()
for(s=t.length,o=o.c,r=0;r<s;++r){q=t[r]
b.$2(o.a(q),p.h(0,q))
if(t!==p.e)throw H.b(P.aF(p))}},
cK:function(){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
t=new Array(i.a)
t.fixed$length=Array
s=i.b
if(s!=null){r=Object.getOwnPropertyNames(s)
q=r.length
for(p=0,o=0;o<q;++o){t[p]=r[o];++p}}else p=0
n=i.c
if(n!=null){r=Object.getOwnPropertyNames(n)
q=r.length
for(o=0;o<q;++o){t[p]=+r[o];++p}}m=i.d
if(m!=null){r=Object.getOwnPropertyNames(m)
q=r.length
for(o=0;o<q;++o){l=m[r[o]]
k=l.length
for(j=0;j<k;j+=2){t[p]=l[j];++p}}}return i.e=t},
ew:function(a,b,c){var t=this.$ti
t.c.a(b)
t.Q[1].a(c)
if(a[b]==null){++this.a
this.e=null}P.kz(a,b,c)},
cU:function(a,b){return a[H.mF(b)&1073741823]}}
P.dF.prototype={
ai:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2){r=a[s]
if(r==null?b==null:r===b)return s}return-1}}
P.dD.prototype={
gk:function(a){return this.a.a},
gM:function(a){return this.a.a===0},
gv:function(a){var t=this.a
return new P.dE(t,t.cK(),this.$ti.i("dE<1>"))}}
P.dE.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw H.b(P.aF(q))
else if(r>=s.length){t.saH(null)
return!1}else{t.saH(s[r])
t.c=r+1
return!0}},
saH:function(a){this.d=this.$ti.c.a(a)},
$iS:1}
P.dI.prototype={
gv:function(a){var t=this,s=new P.bZ(t,t.r,H.h(t).i("bZ<1>"))
s.c=t.e
return s},
gk:function(a){return this.a},
N:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.J.a(t[b])!=null}else{s=this.ez(b)
return s}},
ez:function(a){var t=this.d
if(t==null)return!1
return this.ai(t[this.bE(a)],a)>=0},
l:function(a,b){var t,s,r=this
H.h(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.cI(t==null?r.b=P.kA():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.cI(s==null?r.c=P.kA():s,b)}else return r.ev(b)},
ev:function(a){var t,s,r,q=this
H.h(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.kA()
s=q.bE(a)
r=t[s]
if(r==null)t[s]=[q.bD(a)]
else{if(q.ai(r,a)>=0)return!1
r.push(q.bD(a))}return!0},
a8:function(a,b){var t=this
if(typeof b=="string"&&b!=="__proto__")return t.d7(t.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return t.d7(t.c,b)
else return t.f3(b)},
f3:function(a){var t,s,r,q,p=this,o=p.d
if(o==null)return!1
t=p.bE(a)
s=o[t]
r=p.ai(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete o[t]
p.de(q)
return!0},
cI:function(a,b){H.h(this).c.a(b)
if(u.J.a(a[b])!=null)return!1
a[b]=this.bD(b)
return!0},
d7:function(a,b){var t
if(a==null)return!1
t=u.J.a(a[b])
if(t==null)return!1
this.de(t)
delete a[b]
return!0},
cJ:function(){this.r=1073741823&this.r+1},
bD:function(a){var t,s=this,r=new P.fs(H.h(s).c.a(a))
if(s.e==null)s.e=s.f=r
else{t=s.f
r.c=t
s.f=t.b=r}++s.a
s.cJ()
return r},
de:function(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.cJ()},
bE:function(a){return J.a9(a)&1073741823},
ai:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bD(a[s].a,b))return s
return-1}}
P.fs.prototype={}
P.bZ.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.aF(s))
else{s=t.c
if(s==null){t.saH(null)
return!1}else{t.saH(t.$ti.c.a(s.a))
t.c=t.c.b
return!0}}},
saH:function(a){this.d=this.$ti.c.a(a)},
$iS:1}
P.de.prototype={$in:1,$if:1,$io:1}
P.l.prototype={
gv:function(a){return new H.W(a,this.gk(a),H.ao(a).i("W<l.E>"))},
B:function(a,b){return this.h(a,b)},
t:function(a,b){var t,s
H.ao(a).i("~(l.E)").a(b)
t=this.gk(a)
for(s=0;s<t;++s){b.$1(this.h(a,s))
if(t!==this.gk(a))throw H.b(P.aF(a))}},
gM:function(a){return this.gk(a)===0},
gcb:function(a){return!this.gM(a)},
F:function(a,b,c){var t=H.ao(a)
return new H.N(a,t.q(c).i("1(l.E)").a(b),t.i("@<l.E>").q(c).i("N<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
aT:function(a,b){return H.aK(a,b,null,H.ao(a).i("l.E"))},
aa:function(a,b){var t,s=H.m([],H.ao(a).i("E<l.E>"))
C.a.sk(s,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.j(s,t,this.h(a,t))
return s},
a9:function(a){return this.aa(a,!0)},
l:function(a,b){var t
H.ao(a).i("l.E").a(b)
t=this.gk(a)
this.sk(a,t+1)
this.j(a,t,b)},
n:function(a){return P.ik(a,"[","]")}}
P.df.prototype={}
P.it.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.a(a)
s.a=t+": "
s.a+=H.a(b)},
$S:23}
P.T.prototype={
t:function(a,b){var t,s
H.h(this).i("~(T.K,T.V)").a(b)
for(t=J.x(this.gG());t.m();){s=t.gp()
b.$2(s,this.h(0,s))}},
aB:function(a,b,c,d){var t,s,r,q
H.h(this).q(c).q(d).i("cg<1,2>(T.K,T.V)").a(b)
t=P.ce(c,d)
for(s=J.x(this.gG());s.m();){r=s.gp()
q=b.$2(r,this.h(0,r))
t.j(0,C.q.gfR(q),q.gJ(q))}return t},
R:function(a,b){return this.aB(a,b,u.z,u.z)},
gk:function(a){return J.ad(this.gG())},
gM:function(a){return J.nh(this.gG())},
n:function(a){return P.is(this)},
$iaj:1}
P.e1.prototype={
j:function(a,b,c){var t=this.$ti
t.c.a(b)
t.Q[1].a(c)
throw H.b(P.A("Cannot modify unmodifiable map"))}}
P.ch.prototype={
h:function(a,b){return this.a.h(0,b)},
j:function(a,b,c){var t=this.$ti
this.a.j(0,t.c.a(b),t.Q[1].a(c))},
t:function(a,b){this.a.t(0,this.$ti.i("~(1,2)").a(b))},
gM:function(a){return this.a.a===0},
gk:function(a){return this.a.a},
gG:function(){var t=this.a
return new H.aa(t,H.h(t).i("aa<1>"))},
n:function(a){return P.is(this.a)},
aB:function(a,b,c,d){return this.a.aB(0,this.$ti.q(c).q(d).i("cg<1,2>(3,4)").a(b),c,d)},
R:function(a,b){return this.aB(a,b,u.z,u.z)},
$iaj:1}
P.dw.prototype={}
P.aP.prototype={
F:function(a,b,c){var t=H.h(this)
return new H.aN(this,t.q(c).i("1(aP.E)").a(b),t.i("@<aP.E>").q(c).i("aN<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
n:function(a){return P.ik(this,"{","}")},
B:function(a,b){var t,s,r,q="index"
P.bj(b,q,u.S)
P.bb(b,q)
for(t=this.a7(),t=P.jm(t,t.r,H.h(t).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.b(P.b7(b,this,q,null,s))}}
P.dq.prototype={$in:1,$if:1,$ial:1}
P.dR.prototype={
L:function(a,b){var t
for(t=J.x(H.h(this).i("f<1>").a(b));t.m();)this.l(0,t.gp())},
F:function(a,b,c){var t=H.h(this)
return new H.aN(this,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("aN<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
n:function(a){return P.ik(this,"{","}")},
cc:function(a,b){var t,s=P.jm(this,this.r,H.h(this).c)
if(!s.m())return""
if(b===""){t=""
do t+=H.a(s.d)
while(s.m())}else{t=H.a(s.d)
for(;s.m();)t=t+b+H.a(s.d)}return t.charCodeAt(0)==0?t:t},
B:function(a,b){var t,s,r,q=this,p="index"
P.bj(b,p,u.S)
P.bb(b,p)
for(t=P.jm(q,q.r,H.h(q).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.b(P.b7(b,q,p,null,s))},
$in:1,
$if:1,
$ial:1}
P.dJ.prototype={}
P.dS.prototype={}
P.cE.prototype={}
P.fq.prototype={
h:function(a,b){var t,s=this.b
if(s==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{t=s[b]
return typeof t=="undefined"?this.f1(b):t}},
gk:function(a){return this.b==null?this.c.a:this.aJ().length},
gM:function(a){return this.gk(this)===0},
gG:function(){if(this.b==null){var t=this.c
return new H.aa(t,H.h(t).i("aa<1>"))}return new P.fr(this)},
j:function(a,b,c){var t,s,r=this
if(r.b==null)r.c.j(0,b,c)
else if(r.O(b)){t=r.b
t[b]=c
s=r.a
if(s==null?t!=null:s!==t)s[b]=null}else r.fh().j(0,b,c)},
O:function(a){if(this.b==null)return this.c.O(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
t:function(a,b){var t,s,r,q,p=this
u.cA.a(b)
if(p.b==null)return p.c.t(0,b)
t=p.aJ()
for(s=0;s<t.length;++s){r=t[s]
q=p.b[r]
if(typeof q=="undefined"){q=P.jR(p.a[r])
p.b[r]=q}b.$2(r,q)
if(t!==p.c)throw H.b(P.aF(p))}},
aJ:function(){var t=u.j.a(this.c)
if(t==null)t=this.c=H.m(Object.keys(this.a),u.s)
return t},
fh:function(){var t,s,r,q,p,o=this
if(o.b==null)return o.c
t=P.ce(u.N,u.z)
s=o.aJ()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.j(0,p,o.h(0,p))}if(q===0)C.a.l(s,null)
else C.a.sk(s,0)
o.a=o.b=null
return o.c=t},
f1:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
t=P.jR(this.a[a])
return this.b[a]=t}}
P.fr.prototype={
gk:function(a){var t=this.a
return t.gk(t)},
B:function(a,b){var t=this.a
if(t.b==null)t=t.gG().B(0,b)
else{t=t.aJ()
if(b<0||b>=t.length)return H.t(t,b)
t=t[b]}return t},
gv:function(a){var t=this.a
if(t.b==null){t=t.gG()
t=t.gv(t)}else{t=t.aJ()
t=new J.av(t,t.length,H.B(t).i("av<1>"))}return t}}
P.eg.prototype={}
P.c7.prototype={}
P.ij.prototype={
n:function(a){return"unknown"}}
P.cc.prototype={
ds:function(a){var t=this.cN(a,0,a.length)
return t==null?a:t},
cN:function(a,b,c){var t,s,r,q
for(t=b,s=null;t<c;++t){if(t>=a.length)return H.t(a,t)
switch(a[t]){case"&":r="&amp;"
break
case'"':r="&quot;"
break
case"'":r="&#39;"
break
case"<":r="&lt;"
break
case">":r="&gt;"
break
case"/":r="&#47;"
break
default:r=null}if(r!=null){if(s==null)s=new P.aA("")
if(t>b)s.a+=C.c.ab(a,b,t)
s.a+=r
b=t+1}}if(s==null)return null
if(c>b)s.a+=J.nr(a,b,c)
q=s.a
return q.charCodeAt(0)==0?q:q}}
P.da.prototype={
n:function(a){var t=P.bm(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
P.eA.prototype={
n:function(a){return"Cyclic error in JSON stringify"}}
P.iq.prototype={
c_:function(a,b,c){var t
u.ep.a(c)
t=P.pm(b,this.gfB().a)
return t},
fG:function(a,b){var t
u.bc.a(b)
t=P.oM(a,this.gfH().b,null)
return t},
gfH:function(){return C.K},
gfB:function(){return C.J}}
P.eC.prototype={}
P.eB.prototype={}
P.jk.prototype={
e2:function(a){var t,s,r,q,p,o,n=a.length
for(t=J.k3(a),s=this.c,r=0,q=0;q<n;++q){p=t.aX(a,q)
if(p>92)continue
if(p<32){if(q>r)s.a+=C.c.ab(a,r,q)
r=q+1
s.a+=H.aH(92)
switch(p){case 8:s.a+=H.aH(98)
break
case 9:s.a+=H.aH(116)
break
case 10:s.a+=H.aH(110)
break
case 12:s.a+=H.aH(102)
break
case 13:s.a+=H.aH(114)
break
default:s.a+=H.aH(117)
s.a+=H.aH(48)
s.a+=H.aH(48)
o=p>>>4&15
s.a+=H.aH(o<10?48+o:87+o)
o=p&15
s.a+=H.aH(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)s.a+=C.c.ab(a,r,q)
r=q+1
s.a+=H.aH(92)
s.a+=H.aH(p)}}if(r===0)s.a+=H.a(a)
else if(r<n)s.a+=t.ab(a,r,n)},
bB:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.b(new P.eA(a,null))}C.a.l(t,a)},
bq:function(a){var t,s,r,q,p=this
if(p.e1(a))return
p.bB(a)
try{t=p.b.$1(a)
if(!p.e1(t)){r=P.lC(a,null,p.gd4())
throw H.b(r)}r=p.a
if(0>=r.length)return H.t(r,-1)
r.pop()}catch(q){s=H.L(q)
r=P.lC(a,s,p.gd4())
throw H.b(r)}},
e1:function(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=C.b.n(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.e2(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.bB(a)
r.h9(a)
t=r.a
if(0>=t.length)return H.t(t,-1)
t.pop()
return!0}else if(u.f.b(a)){r.bB(a)
s=r.ha(a)
t=r.a
if(0>=t.length)return H.t(t,-1)
t.pop()
return s}else return!1},
h9:function(a){var t,s,r=this.c
r.a+="["
t=J.an(a)
if(t.gcb(a)){this.bq(t.h(a,0))
for(s=1;s<t.gk(a);++s){r.a+=","
this.bq(t.h(a,s))}}r.a+="]"},
ha:function(a){var t,s,r,q,p,o,n=this,m={}
if(a.gM(a)){n.c.a+="{}"
return!0}t=a.gk(a)*2
s=new Array(t)
s.fixed$length=Array
r=m.a=0
m.b=!0
a.t(0,new P.jl(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.e2(H.r(s[r]))
q.a+='":'
o=r+1
if(o>=t)return H.t(s,o)
n.bq(s[o])}q.a+="}"
return!0}}
P.jl.prototype={
$2:function(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
C.a.j(t,s.a++,a)
C.a.j(t,s.a++,b)},
$S:23}
P.jj.prototype={
gd4:function(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
P.iv.prototype={
$2:function(a,b){var t,s,r
u.fo.a(a)
t=this.b
s=this.a
t.a+=s.a
r=t.a+=H.a(a.a)
t.a=r+": "
t.a+=P.bm(b)
s.a=", "},
$S:64}
P.w.prototype={}
P.c9.prototype={
l:function(a,b){return P.nF(C.e.w(this.a,u.fu.a(b).ghe()),!1)},
P:function(a,b){if(b==null)return!1
return b instanceof P.c9&&this.a===b.a&&!0},
gA:function(a){var t=this.a
return(t^C.e.bS(t,30))&1073741823},
n:function(a){var t=this,s=P.nG(H.o7(t)),r=P.ek(H.o5(t)),q=P.ek(H.o1(t)),p=P.ek(H.o2(t)),o=P.ek(H.o4(t)),n=P.ek(H.o6(t)),m=P.nH(H.o3(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.ah.prototype={}
P.bM.prototype={
as:function(a,b){return new P.bM(C.e.C(this.a*b))},
P:function(a,b){if(b==null)return!1
return b instanceof P.bM&&this.a===b.a},
gA:function(a){return C.e.gA(this.a)},
n:function(a){var t,s,r,q=new P.hR(),p=this.a
if(p<0)return"-"+new P.bM(0-p).n(0)
t=q.$1(C.e.ay(p,6e7)%60)
s=q.$1(C.e.ay(p,1e6)%60)
r=new P.hQ().$1(p%1e6)
return""+C.e.ay(p,36e8)+":"+H.a(t)+":"+H.a(s)+"."+H.a(r)}}
P.hQ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:33}
P.hR.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:33}
P.K.prototype={
gaU:function(){return H.aM(this.$thrownJsError)}}
P.cN.prototype={
n:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bm(t)
return"Assertion failed"}}
P.eP.prototype={
n:function(a){return"Throw of null."}}
P.aD.prototype={
gbH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbG:function(){return""},
n:function(a){var t,s,r,q,p=this,o=p.c,n=o!=null?" ("+o+")":""
o=p.d
t=o==null?"":": "+H.a(o)
s=p.gbH()+n+t
if(!p.a)return s
r=p.gbG()
q=P.bm(p.b)
return s+r+": "+q}}
P.dn.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var t,s,r=this.e
if(r==null){r=this.f
t=r!=null?": Not less than or equal to "+H.a(r):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.a(r)
else if(s>r)t=": Not in range "+H.a(r)+".."+H.a(s)+", inclusive"
else t=s<r?": Valid value range is empty":": Only valid value is "+H.a(r)}return t}}
P.et.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var t,s=H.q(this.b)
if(typeof s!=="number")return s.ah()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.a(t)},
gk:function(a){return this.f}}
P.eN.prototype={
n:function(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new P.aA("")
k.a=""
for(t=l.c,s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=P.bm(o)
k.a=", "}l.d.t(0,new P.iv(k,j))
n=P.bm(l.a)
m=j.n(0)
t="NoSuchMethodError: method not found: '"+H.a(l.b.a)+"'\nReceiver: "+n+"\nArguments: ["+m+"]"
return t}}
P.f7.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.f5.prototype={
n:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aY.prototype={
n:function(a){return"Bad state: "+this.a}}
P.eh.prototype={
n:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bm(t)+"."}}
P.eQ.prototype={
n:function(a){return"Out of Memory"},
gaU:function(){return null},
$iK:1}
P.ds.prototype={
n:function(a){return"Stack Overflow"},
gaU:function(){return null},
$iK:1}
P.ej.prototype={
n:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.fl.prototype={
n:function(a){return"Exception: "+this.a},
$ihW:1}
P.d3.prototype={
n:function(a){var t,s=this.a,r=s!=null&&""!==s?"FormatException: "+H.a(s):"FormatException",q=this.b
if(typeof q=="string"){t=q.length>78?C.c.ab(q,0,75)+"...":q
return r+"\n"+t}else return r},
$ihW:1}
P.aV.prototype={}
P.d.prototype={}
P.f.prototype={
F:function(a,b,c){var t=H.h(this)
return H.lF(this,t.q(c).i("1(f.E)").a(b),t.i("f.E"),c)},
R:function(a,b){return this.F(a,b,u.z)},
bo:function(a,b){var t=H.h(this)
return new H.ab(this,t.i("w(f.E)").a(b),t.i("ab<f.E>"))},
gk:function(a){var t,s=this.gv(this)
for(t=0;s.m();)++t
return t},
gaA:function(a){var t=this.gv(this)
if(!t.m())throw H.b(H.eu())
return t.gp()},
gat:function(a){var t,s=this.gv(this)
if(!s.m())throw H.b(H.eu())
t=s.gp()
if(s.m())throw H.b(H.nP())
return t},
B:function(a,b){var t,s,r,q="index"
P.bj(b,q,u.S)
P.bb(b,q)
for(t=this.gv(this),s=0;t.m();){r=t.gp()
if(b===s)return r;++s}throw H.b(P.b7(b,this,q,null,s))},
n:function(a){return P.nN(this,"(",")")}}
P.S.prototype={}
P.o.prototype={$in:1,$if:1}
P.cg.prototype={}
P.u.prototype={
gA:function(a){return P.C.prototype.gA.call(this,this)},
n:function(a){return"null"}}
P.Z.prototype={}
P.C.prototype={constructor:P.C,$iC:1,
P:function(a,b){return this===b},
gA:function(a){return H.bS(this)},
n:function(a){return"Instance of '"+H.a(H.iC(this))+"'"},
bh:function(a,b){u.Y.a(b)
throw H.b(P.lG(this,b.gdD(),b.gdL(),b.gdE()))},
toString:function(){return this.n(this)}}
P.dg.prototype={}
P.al.prototype={}
P.am.prototype={}
P.fA.prototype={
n:function(a){return""},
$iam:1}
P.c.prototype={$ieR:1}
P.aA.prototype={
gk:function(a){return this.a.length},
n:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$iok:1}
P.aQ.prototype={}
W.i.prototype={$ii:1}
W.c1.prototype={
n:function(a){return String(a)},
$ic1:1}
W.eb.prototype={
n:function(a){return String(a)}}
W.c2.prototype={$ic2:1}
W.bG.prototype={$ibG:1}
W.bH.prototype={$ibH:1}
W.c5.prototype={$ic5:1}
W.aU.prototype={
gk:function(a){return a.length}}
W.H.prototype={$iH:1}
W.c8.prototype={
av:function(a,b){var t=$.mT(),s=t[b]
if(typeof s=="string")return s
s=this.fe(a,b)
t[b]=s
return s},
fe:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.nI()+b
if(t in a)return t
return b},
aN:function(a,b,c,d){if(c==null)c=""
a.setProperty(b,c,d)},
gk:function(a){return a.length}}
W.hC.prototype={}
W.cV.prototype={$icV:1}
W.bK.prototype={$ibK:1}
W.hD.prototype={
n:function(a){return String(a)}}
W.cW.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
P:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.X(b)
t=a.left==t.gbf(b)&&a.top==t.gbn(b)&&a.width==t.gbp(b)&&a.height==t.gbc(b)}else t=!1
return t},
gA:function(a){return W.m1(J.a9(a.left),J.a9(a.top),J.a9(a.width),J.a9(a.height))},
gdk:function(a){return a.bottom},
gbc:function(a){return a.height},
gbf:function(a){return a.left},
gdR:function(a){return a.right},
gbn:function(a){return a.top},
gbp:function(a){return a.width},
$ibq:1}
W.hE.prototype={
gk:function(a){return a.length},
l:function(a,b){return a.add(H.r(b))}}
W.fb.prototype={
gM:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var t
H.q(b)
t=this.b
if(b<0||b>=t.length)return H.t(t,b)
return u.h.a(t[b])},
j:function(a,b,c){var t
H.q(b)
u.h.a(c)
t=this.b
if(b<0||b>=t.length)return H.t(t,b)
this.a.replaceChild(c,t[b])},
sk:function(a,b){throw H.b(P.A("Cannot resize element lists"))},
l:function(a,b){u.h.a(b)
this.a.appendChild(b)
return b},
gv:function(a){var t=this.a9(this)
return new J.av(t,t.length,H.B(t).i("av<1>"))},
ba:function(a){J.kh(this.a)}}
W.at.prototype={
gk:function(a){return this.a.length},
h:function(a,b){var t
H.q(b)
t=this.a
if(b<0||b>=t.length)return H.t(t,b)
return this.$ti.c.a(t[b])},
j:function(a,b,c){H.q(b)
this.$ti.c.a(c)
throw H.b(P.A("Cannot modify list"))},
sk:function(a,b){throw H.b(P.A("Cannot modify list"))},
$ilu:1}
W.p.prototype={
gfm:function(a){return new W.fi(a)},
gdm:function(a){return new W.fb(a,a.children)},
gdn:function(a){return new W.fj(a)},
gaP:function(a){var t=C.b.C(a.offsetLeft),s=C.b.C(a.offsetTop),r=C.b.C(a.offsetWidth),q=C.b.C(a.offsetHeight)
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.bq(t,s,r,q,u.q)},
af:function(a,b){this.c6(a,"beforeend",b,null,null)},
n:function(a){return a.localName},
c6:function(a,b,c,d,e){var t,s=this.U(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(s,a)
break
case"afterbegin":t=a.childNodes
a.insertBefore(s,t.length>0?t[0]:null)
break
case"beforeend":a.appendChild(s)
break
case"afterend":a.parentNode.insertBefore(s,a.nextSibling)
break
default:H.G(P.bi("Invalid position "+b))}},
fS:function(a,b){if(!!a.matches)return a.matches(b)
else if(!!a.webkitMatchesSelector)return a.webkitMatchesSelector(b)
else if(!!a.mozMatchesSelector)return a.mozMatchesSelector(b)
else if(!!a.msMatchesSelector)return a.msMatchesSelector(b)
else if(!!a.oMatchesSelector)return a.oMatchesSelector(b)
else throw H.b(P.A("Not supported on this platform"))},
fU:function(a,b){var t=a
do{if(J.nm(t,b))return!0
t=t.parentElement}while(t!=null)
return!1},
U:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.lw
if(t==null){t=H.m([],u.eO)
s=new W.dm(t)
C.a.l(t,W.m_(null))
C.a.l(t,W.m4())
$.lw=s
d=s}else d=t
t=$.lv
if(t==null){t=new W.e2(d)
$.lv=t
c=t}else{t.a=d
c=t}}if($.bl==null){t=document
s=t.implementation.createHTMLDocument("")
$.bl=s
$.kr=s.createRange()
s=$.bl.createElement("base")
u.cR.a(s)
s.href=t.baseURI
$.bl.head.appendChild(s)}t=$.bl
if(t.body==null){s=t.createElement("body")
t.body=u.a4.a(s)}t=$.bl
if(u.a4.b(a))r=t.body
else{r=t.createElement(a.tagName)
$.bl.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.N(C.M,a.tagName)){$.kr.selectNodeContents(r)
q=$.kr.createContextualFragment(b)}else{r.innerHTML=b
q=$.bl.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}t=$.bl.body
if(r==null?t!=null:r!==t)J.e9(r)
c.cp(q)
document.adoptNode(q)
return q},
fA:function(a,b,c){return this.U(a,b,c,null)},
K:function(a,b){a.textContent=null
a.appendChild(this.U(a,b,null,null))},
gdT:function(a){return a.tagName},
gdF:function(a){return new W.as(a,"click",!1,u.C)},
gdI:function(a){return new W.as(a,"mousedown",!1,u.C)},
gdJ:function(a){return new W.as(a,"touchstart",!1,u.du)},
$ip:1}
W.hT.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:31}
W.e.prototype={$ie:1}
W.hV.prototype={
h:function(a,b){return new W.bf(this.a,H.r(b),!1,u.cw)}}
W.hS.prototype={
h:function(a,b){var t
H.r(b)
if($.lt.O(b.toLowerCase())){t=$.lj
if(t==null)t=$.lj=!H.a8(P.kq())&&J.fR(window.navigator.userAgent,"WebKit",0)
if(t)return new W.as(this.a,$.lt.h(0,b.toLowerCase()),!1,u.E)}return new W.as(this.a,b,!1,u.E)}}
W.D.prototype={
ep:function(a,b,c,d){return a.addEventListener(b,H.cK(u.I.a(c),1),!1)},
dv:function(a,b){return a.dispatchEvent(b)},
f4:function(a,b,c,d){return a.removeEventListener(b,H.cK(u.I.a(c),1),!1)},
$iD:1}
W.es.prototype={
gk:function(a){return a.length}}
W.bn.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.b7(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.A.a(c)
throw H.b(P.A("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.A("Cannot resize immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.t(a,b)
return a[b]},
$in:1,
$ia_:1,
$if:1,
$io:1,
$ibn:1}
W.d5.prototype={$id5:1}
W.cd.prototype={
ct:function(a,b,c){return a.setSelectionRange(b,c)},
$icd:1}
W.b9.prototype={$ib9:1}
W.eD.prototype={
n:function(a){return String(a)},
$ieD:1}
W.a1.prototype={
gaP:function(a){var t,s,r,q,p,o
if(!!a.offsetX)return new P.I(a.offsetX,a.offsetY,u.H)
else{t=a.target
s=u.h
if(!s.b(W.M(t)))throw H.b(P.A("offsetX is only supported on elements"))
r=s.a(W.M(t))
t=a.clientX
s=a.clientY
q=u.H
p=r.getBoundingClientRect()
o=new P.I(t,s,q).D(0,new P.I(p.left,p.top,q))
return new P.I(J.l4(o.a),J.l4(o.b),q)}},
$ia1:1}
W.ag.prototype={
gat:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.b(P.cq("No elements"))
if(s>1)throw H.b(P.cq("More than one element"))
return t.firstChild},
l:function(a,b){this.a.appendChild(u.A.a(b))},
L:function(a,b){var t,s,r,q
u.eh.a(b)
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
j:function(a,b,c){var t,s
H.q(b)
u.A.a(c)
t=this.a
s=t.childNodes
if(b<0||b>=s.length)return H.t(s,b)
t.replaceChild(c,s[b])},
gv:function(a){var t=this.a.childNodes
return new W.bO(t,t.length,H.ao(t).i("bO<a0.E>"))},
gk:function(a){return this.a.childNodes.length},
sk:function(a,b){throw H.b(P.A("Cannot set length on immutable List."))},
h:function(a,b){var t
H.q(b)
t=this.a.childNodes
if(b<0||b>=t.length)return H.t(t,b)
return t[b]}}
W.k.prototype={
bi:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
h3:function(a,b){var t,s
try{t=a.parentNode
J.nd(t,b,a)}catch(s){H.L(s)}return a},
es:function(a){var t
for(;t=a.firstChild,t!=null;)a.removeChild(t)},
n:function(a){var t=a.nodeValue
return t==null?this.eb(a):t},
f5:function(a,b,c){return a.replaceChild(b,c)},
$ik:1}
W.dl.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.b7(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.A.a(c)
throw H.b(P.A("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.A("Cannot resize immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.t(a,b)
return a[b]},
$in:1,
$ia_:1,
$if:1,
$io:1}
W.cj.prototype={$icj:1}
W.ck.prototype={$ick:1}
W.co.prototype={
gk:function(a){return a.length},
$ico:1}
W.cs.prototype={$ics:1}
W.f_.prototype={}
W.du.prototype={
U:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
t=W.nJ("<table>"+H.a(b)+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.ag(s).L(0,new W.ag(t))
return s}}
W.f0.prototype={
U:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.U(t.createElement("table"),b,c,d)
t.toString
t=new W.ag(t)
r=t.gat(t)
r.toString
t=new W.ag(r)
q=t.gat(t)
s.toString
q.toString
new W.ag(s).L(0,new W.ag(q))
return s}}
W.f1.prototype={
U:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bv(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.U(t.createElement("table"),b,c,d)
t.toString
t=new W.ag(t)
r=t.gat(t)
s.toString
r.toString
new W.ag(s).L(0,new W.ag(r))
return s}}
W.cu.prototype={
K:function(a,b){var t,s
a.textContent=null
t=a.content
t.toString
J.kh(t)
s=this.U(a,b,null,null)
a.content.appendChild(s)},
$icu:1}
W.cv.prototype={
ct:function(a,b,c){return a.setSelectionRange(b,c)},
$icv:1}
W.aB.prototype={$iaB:1}
W.aZ.prototype={$iaZ:1}
W.f4.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.b7(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.fY.a(c)
throw H.b(P.A("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.A("Cannot resize immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.t(a,b)
return a[b]},
$in:1,
$ia_:1,
$if:1,
$io:1}
W.ar.prototype={$iar:1}
W.bs.prototype={
gfk:function(a){var t=new P.a3($.F,u.dL),s=u.c4.a(new W.iU(new P.dY(t,u.bi)))
this.eE(a)
this.f6(a,W.mo(s,u.di))
return t},
f6:function(a,b){return a.requestAnimationFrame(H.cK(u.c4.a(b),1))},
eE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibs:1,
$iiT:1}
W.iU.prototype={
$1:function(a){var t=this.a
a=t.$ti.i("1/").a(H.jQ(a))
t=t.a
if(t.a!==0)H.G(P.cq("Future already completed"))
t.aY(a)},
$S:44}
W.b_.prototype={$ib_:1}
W.cw.prototype={$icw:1}
W.fd.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.b7(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.g5.a(c)
throw H.b(P.A("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.A("Cannot resize immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.t(a,b)
return a[b]},
$in:1,
$ia_:1,
$if:1,
$io:1}
W.dz.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
P:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.X(b)
t=a.left==t.gbf(b)&&a.top==t.gbn(b)&&a.width==t.gbp(b)&&a.height==t.gbc(b)}else t=!1
return t},
gA:function(a){return W.m1(J.a9(a.left),J.a9(a.top),J.a9(a.width),J.a9(a.height))},
gbc:function(a){return a.height},
gbp:function(a){return a.width}}
W.dL.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.b7(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.A.a(c)
throw H.b(P.A("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.A("Cannot resize immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.t(a,b)
return a[b]},
$in:1,
$ia_:1,
$if:1,
$io:1}
W.fa.prototype={
t:function(a,b){var t,s,r,q,p
u.eA.a(b)
for(t=this.gG(),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.y)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gG:function(){var t,s,r,q,p=this.a.attributes,o=H.m([],u.s)
for(t=p.length,s=u.h9,r=0;r<t;++r){if(r>=p.length)return H.t(p,r)
q=s.a(p[r])
if(q.namespaceURI==null)C.a.l(o,q.name)}return o},
gM:function(a){return this.gG().length===0}}
W.fi.prototype={
h:function(a,b){return this.a.getAttribute(H.r(b))},
j:function(a,b,c){this.a.setAttribute(b,H.r(c))},
gk:function(a){return this.gG().length}}
W.fj.prototype={
a7:function(){var t,s,r,q,p=P.dd(u.N)
for(t=this.a.className.split(" "),s=t.length,r=0;r<s;++r){q=J.kl(t[r])
if(q.length!==0)p.l(0,q)}return p},
co:function(a){this.a.className=u.cq.a(a).cc(0," ")},
gk:function(a){return this.a.classList.length},
l:function(a,b){var t,s
H.r(b)
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
a8:function(a,b){var t=this.a.classList,s=t.contains(b)
t.remove(b)
return s}}
W.eq.prototype={}
W.bf.prototype={
X:function(a,b,c,d){var t=H.h(this)
t.i("~(1)").a(a)
u.M.a(c)
return W.z(this.a,this.b,a,!1,t.c)},
bg:function(a,b,c){return this.X(a,null,b,c)}}
W.as.prototype={}
W.b1.prototype={
X:function(a,b,c,d){var t,s,r,q=this.$ti
q.i("~(1)").a(a)
u.M.a(c)
t=new W.dW(new H.a6(q.i("@<U<1>>").q(q.i("a2<1>")).i("a6<1,2>")),q.i("dW<1>"))
t.seB(P.cr(t.gfu(t),!0,q.c))
for(s=this.a,s=new H.W(s,s.gk(s),s.$ti.i("W<l.E>")),r=this.c,q=q.i("bf<1>");s.m();)t.l(0,new W.bf(s.d,r,!1,q))
q=t.a
q.toString
return new P.ac(q,H.h(q).i("ac<1>")).X(a,b,c,d)},
u:function(a){return this.X(a,null,null,null)},
bg:function(a,b,c){return this.X(a,null,b,c)}}
W.dA.prototype={
a_:function(){var t=this
if(t.b==null)return null
t.df()
t.b=null
t.sf_(null)
return null},
cd:function(a){if(this.b==null)return;++this.a
this.df()},
ck:function(){var t=this
if(t.b==null||t.a<=0)return;--t.a
t.dd()},
dd:function(){var t,s=this,r=s.d,q=r!=null
if(q&&s.a<=0){t=s.b
t.toString
u.I.a(r)
if(q)J.nb(t,s.c,r,!1)}},
df:function(){var t,s=this.d,r=s!=null
if(r){t=this.b
t.toString
u.I.a(s)
if(r)J.nc(t,this.c,s,!1)}},
sf_:function(a){this.d=u.I.a(a)}}
W.j5.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:52}
W.dW.prototype={
l:function(a,b){var t,s,r,q=this
q.$ti.i("U<1>").a(b)
t=q.b
if(t.O(b))return
s=q.a
s=s.gfi(s)
b.toString
r=b.$ti
r.i("~(1)").a(s)
u.M.a(new W.jC(q,b))
t.j(0,b,W.z(b.a,b.b,s,!1,r.c))},
bZ:function(a){var t,s,r
for(t=this.b,s=t.gar(t),r=H.h(s),r=new H.a4(J.x(s.a),s.b,r.i("@<1>").q(r.Q[1]).i("a4<1,2>"));r.m();)r.a.a_()
t.ba(0)
this.a.bZ(0)},
seB:function(a){this.a=this.$ti.i("eX<1>").a(a)}}
W.jC.prototype={
$0:function(){var t=this.a,s=t.b.a8(0,t.$ti.i("U<1>").a(this.b))
if(s!=null)s.a_()
return null},
$S:0}
W.bY.prototype={
el:function(a){var t
if($.fn.a===0){for(t=0;t<262;++t)$.fn.j(0,C.L[t],W.pG())
for(t=0;t<12;++t)$.fn.j(0,C.j[t],W.pH())}},
az:function(a){return $.n7().N(0,W.d0(a))},
ae:function(a,b,c){var t=$.fn.h(0,H.a(W.d0(a))+"::"+b)
if(t==null)t=$.fn.h(0,"*::"+b)
if(t==null)return!1
return H.jP(t.$4(a,b,c,this))},
$iak:1}
W.a0.prototype={
gv:function(a){return new W.bO(a,this.gk(a),H.ao(a).i("bO<a0.E>"))},
l:function(a,b){H.ao(a).i("a0.E").a(b)
throw H.b(P.A("Cannot add to immutable List."))}}
W.dm.prototype={
l:function(a,b){C.a.l(this.a,u.m.a(b))},
az:function(a){return C.a.dh(this.a,new W.ix(a))},
ae:function(a,b,c){return C.a.dh(this.a,new W.iw(a,b,c))},
$iak:1}
W.ix.prototype={
$1:function(a){return u.m.a(a).az(this.a)},
$S:32}
W.iw.prototype={
$1:function(a){return u.m.a(a).ae(this.a,this.b,this.c)},
$S:32}
W.dT.prototype={
em:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.bo(0,new W.jA())
s=b.bo(0,new W.jB())
this.b.L(0,t)
r=this.c
r.L(0,C.N)
r.L(0,s)},
az:function(a){return this.a.N(0,W.d0(a))},
ae:function(a,b,c){var t=this,s=W.d0(a),r=t.c
if(r.N(0,H.a(s)+"::"+b))return t.d.fj(c)
else if(r.N(0,"*::"+b))return t.d.fj(c)
else{r=t.b
if(r.N(0,H.a(s)+"::"+b))return!0
else if(r.N(0,"*::"+b))return!0
else if(r.N(0,H.a(s)+"::*"))return!0
else if(r.N(0,"*::*"))return!0}return!1},
$iak:1}
W.jA.prototype={
$1:function(a){return!C.a.N(C.j,H.r(a))},
$S:20}
W.jB.prototype={
$1:function(a){return C.a.N(C.j,H.r(a))},
$S:20}
W.fC.prototype={
ae:function(a,b,c){if(this.ei(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.N(0,b)
return!1}}
W.jG.prototype={
$1:function(a){return"TEMPLATE::"+H.a(H.r(a))},
$S:21}
W.fB.prototype={
az:function(a){var t
if(u.ew.b(a))return!1
t=u.g7.b(a)
if(t&&W.d0(a)==="foreignObject")return!1
if(t)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.c.e7(b,"on"))return!1
return this.az(a)},
$iak:1}
W.bO.prototype={
m:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.scO(J.c_(t.a,s))
t.c=s
return!0}t.scO(null)
t.c=r
return!1},
gp:function(){return this.d},
scO:function(a){this.d=this.$ti.c.a(a)},
$iS:1}
W.ff.prototype={
dv:function(a,b){return H.G(P.A("You can only attach EventListeners to your own window."))},
$iD:1,
$iiT:1}
W.ak.prototype={}
W.fz.prototype={$iop:1}
W.e2.prototype={
cp:function(a){var t=this,s=new W.jO(t)
t.b=!1
s.$2(a,null)
for(;t.b;){t.b=!1
s.$2(a,null)}},
aM:function(a,b){var t=this.b=!0
if(b!=null?b!==a.parentNode:t)J.e9(a)
else b.removeChild(a)},
f9:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
try{n=J.nf(a)
m=n.a.getAttribute("is")
u.h.a(a)
t=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='previousSibling'||i.name=='previousSibling'||i.id=='children'||i.name=='children')return true}return false}(a)
o=H.a8(t)?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.L(q)}s="element unprintable"
try{s=J.J(a)}catch(q){H.L(q)}try{r=W.d0(a)
this.f8(u.h.a(a),b,o,s,r,u.f.a(n),H.r(m))}catch(q){if(H.L(q) instanceof P.aD)throw q
else{this.aM(a,b)
window
p="Removing corrupted element "+H.a(s)
if(typeof console!="undefined")window.console.warn(p)}}},
f8:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
if(c){n.aM(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!n.a.az(a)){n.aM(a,b)
window
t="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!n.a.ae(a,"is",g)){n.aM(a,b)
window
t="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gG()
s=H.m(t.slice(0),H.B(t).i("E<1>"))
for(r=f.gG().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.t(s,r)
q=s[r]
p=n.a
o=J.nt(q)
H.r(q)
if(!p.ae(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.a(e)+" "+q+'="'+H.a(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.aW.b(a))n.cp(a.content)},
$inX:1}
W.jO.prototype={
$2:function(a,b){var t,s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.f9(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aM(a,b)}t=a.lastChild
for(r=u.A;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){q=s.nextSibling
p=t
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.cq("Corrupt HTML")
throw H.b(q)}}catch(o){H.L(o)
q=r.a(t)
n.b=!0
p=q.parentNode
p=a==null?p!=null:a!==p
if(p){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:65}
W.fe.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fK.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fN.prototype={}
P.ei.prototype={
dg:function(a){var t=$.mS().b
if(typeof a!="string")H.G(H.aS(a))
if(t.test(a))return a
throw H.b(P.fU(a,"value","Not a valid class token"))},
n:function(a){return this.a7().cc(0," ")},
gv:function(a){var t=this.a7()
return P.jm(t,t.r,H.h(t).c)},
F:function(a,b,c){var t,s
c.i("0(c)").a(b)
t=this.a7()
s=H.h(t)
return new H.aN(t,s.q(c).i("1(2)").a(b),s.i("@<1>").q(c).i("aN<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
gk:function(a){return this.a7().a},
l:function(a,b){H.r(b)
this.dg(b)
return H.jP(this.fV(0,new P.hB(b)))},
a8:function(a,b){var t,s
this.dg(b)
t=this.a7()
s=t.a8(0,b)
this.co(t)
return s},
B:function(a,b){return this.a7().B(0,b)},
fV:function(a,b){var t,s
u.ch.a(b)
t=this.a7()
s=b.$1(t)
this.co(t)
return s}}
P.hB.prototype={
$1:function(a){return u.cq.a(a).l(0,this.a)},
$S:72}
P.er.prototype={
gaw:function(){var t=this.b,s=H.h(t)
return new H.az(new H.ab(t,s.i("w(l.E)").a(new P.ie()),s.i("ab<l.E>")),s.i("p(l.E)").a(new P.ig()),s.i("az<l.E,p>"))},
j:function(a,b,c){var t
H.q(b)
u.h.a(c)
t=this.gaw()
J.np(t.b.$1(J.aT(t.a,b)),c)},
sk:function(a,b){var t=J.ad(this.gaw().a)
if(b>=t)return
else if(b<0)throw H.b(P.bi("Invalid list length"))
this.h2(0,b,t)},
l:function(a,b){this.b.a.appendChild(u.h.a(b))},
h2:function(a,b,c){var t=this.gaw()
t=H.of(t,b,t.$ti.i("f.E"))
C.a.t(P.cf(H.ol(t,c-b,H.h(t).i("f.E")),!0,u.z),new P.ih())},
ba:function(a){J.kh(this.b.a)},
gk:function(a){return J.ad(this.gaw().a)},
h:function(a,b){var t
H.q(b)
t=this.gaw()
return t.b.$1(J.aT(t.a,b))},
gv:function(a){var t=P.cf(this.gaw(),!1,u.h)
return new J.av(t,t.length,H.B(t).i("av<1>"))}}
P.ie.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:31}
P.ig.prototype={
$1:function(a){return u.h.a(u.A.a(a))},
$S:36}
P.ih.prototype={
$1:function(a){return J.e9(a)},
$S:5}
P.db.prototype={$idb:1}
P.ip.prototype={
$1:function(a){var t,s,r,q=this.a
if(q.O(a))return q.h(0,a)
if(u.f.b(a)){t={}
q.j(0,a,t)
for(q=J.x(a.gG());q.m();){s=q.gp()
t[s]=this.$1(a.h(0,s))}return t}else if(u.R.b(a)){r=[]
q.j(0,a,r)
C.a.L(r,J.kj(a,this,u.z))
return r}else return P.e3(a)},
$S:5}
P.jT.prototype={
$1:function(a){var t
u.Z.a(a)
t=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.p6,a,!1)
P.kG(t,$.kf(),a)
return t},
$S:5}
P.jU.prototype={
$1:function(a){return new this.a(a)},
$S:5}
P.jY.prototype={
$1:function(a){return new P.ay(a)},
$S:56}
P.jZ.prototype={
$1:function(a){return new P.v(a,u.F)},
$S:53}
P.k_.prototype={
$1:function(a){return new P.Q(a)},
$S:22}
P.Q.prototype={
h:function(a,b){if(typeof b!="string"&&typeof b!="number")throw H.b(P.bi("property is not a String or num"))
return P.jS(this.a[b])},
j:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.b(P.bi("property is not a String or num"))
this.a[b]=P.e3(c)},
P:function(a,b){if(b==null)return!1
return b instanceof P.Q&&this.a===b.a},
E:function(a){return a in this.a},
du:function(a){delete this.a[a]},
n:function(a){var t,s
try{t=String(this.a)
return t}catch(s){H.L(s)
t=this.ee(0)
return t}},
W:function(a,b){var t,s=this.a
if(b==null)t=null
else{t=H.B(b)
t=P.cf(new H.N(b,t.i("@(1)").a(P.k9()),t.i("N<1,@>")),!0,u.z)}return P.jS(s[a].apply(s,t))},
gA:function(a){return 0}}
P.ay.prototype={
dj:function(a){var t=P.e3(null),s=H.B(a)
s=P.cf(new H.N(a,s.i("@(1)").a(P.k9()),s.i("N<1,@>")),!0,u.z)
return P.jS(this.a.apply(t,s))}}
P.v.prototype={
cG:function(a){var t=this,s=a<0||a>=t.gk(t)
if(s)throw H.b(P.aO(a,0,t.gk(t),null,null))},
h:function(a,b){if(typeof b=="number"&&b===C.e.bl(b))this.cG(H.q(b))
return this.$ti.c.a(this.cv(0,b))},
j:function(a,b,c){this.$ti.c.a(c)
if(typeof b=="number"&&b===C.e.bl(b))this.cG(H.q(b))
this.cw(0,b,c)},
gk:function(a){var t=this.a.length
if(typeof t==="number"&&t>>>0===t)return t
throw H.b(P.cq("Bad JsArray length"))},
sk:function(a,b){this.cw(0,"length",b)},
l:function(a,b){this.W("push",[this.$ti.c.a(b)])},
$in:1,
$if:1,
$io:1}
P.dH.prototype={}
P.I.prototype={
n:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
P:function(a,b){if(b==null)return!1
return b instanceof P.I&&this.a==b.a&&this.b==b.b},
gA:function(a){var t=J.a9(this.a),s=J.a9(this.b)
return P.m0(P.dG(P.dG(0,t),s))},
D:function(a,b){var t,s,r,q,p=this.$ti
p.a(b)
t=this.a
s=b.a
if(typeof t!=="number")return t.D()
if(typeof s!=="number")return H.Y(s)
r=this.b
q=b.b
if(typeof r!=="number")return r.D()
if(typeof q!=="number")return H.Y(q)
return new P.I(t-s,r-q,p)},
as:function(a,b){var t,s,r,q=this.a
if(typeof q!=="number")return q.as()
t=this.$ti
s=t.c
q=s.a(q*b)
r=this.b
if(typeof r!=="number")return r.as()
return new P.I(q,s.a(r*b),t)}}
P.fx.prototype={
gdR:function(a){return this.a+this.c},
gdk:function(a){return this.b+this.d},
n:function(a){var t=this
return"Rectangle ("+t.a+", "+t.b+") "+t.c+" x "+t.d},
P:function(a,b){var t,s,r,q=this
if(b==null)return!1
if(u.q.b(b)){t=q.a
s=J.X(b)
if(t===s.gbf(b)){r=q.b
t=r===s.gbn(b)&&t+q.c===s.gdR(b)&&r+q.d===s.gdk(b)}else t=!1}else t=!1
return t},
gA:function(a){var t=this,s=t.a,r=C.e.gA(s),q=t.b,p=C.e.gA(q)
s=C.e.gA(s+t.c)
q=C.e.gA(q+t.d)
return P.m0(P.dG(P.dG(P.dG(P.dG(0,r),p),s),q))}}
P.bq.prototype={
gbf:function(a){return this.a},
gbn:function(a){return this.b},
gbp:function(a){return this.c},
gbc:function(a){return this.d}}
P.cn.prototype={$icn:1}
P.ec.prototype={
a7:function(){var t,s,r,q,p=this.a.getAttribute("class"),o=P.dd(u.N)
if(p==null)return o
for(t=p.split(" "),s=t.length,r=0;r<s;++r){q=J.kl(t[r])
if(q.length!==0)o.l(0,q)}return o},
co:function(a){this.a.setAttribute("class",a.cc(0," "))}}
P.j.prototype={
gdn:function(a){return new P.ec(a)},
gdm:function(a){return new P.er(a,new W.ag(a))},
U:function(a,b,c,d){var t,s,r,q,p,o=H.m([],u.eO)
C.a.l(o,W.m_(null))
C.a.l(o,W.m4())
C.a.l(o,new W.fB())
c=new W.e2(new W.dm(o))
t='<svg version="1.1">'+H.a(b)+"</svg>"
o=document
s=o.body
r=(s&&C.m).fA(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.ag(r)
p=o.gat(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
c6:function(a,b,c,d,e){throw H.b(P.A("Cannot invoke insertAdjacentHtml on SVG."))},
gdF:function(a){return new W.as(a,"click",!1,u.C)},
gdI:function(a){return new W.as(a,"mousedown",!1,u.C)},
gdJ:function(a){return new W.as(a,"touchstart",!1,u.du)},
$ij:1}
Z.hF.prototype={
gdH:function(a){var t,s=this
if(s.z==null)s.sd2(P.cr(new Z.hK(s),!0,u.D))
t=s.z
t.toString
return new P.ac(t,H.h(t).i("ac<1>"))},
gdG:function(a){var t,s=this
if(s.ch==null)s.scZ(P.cr(new Z.hJ(s),!0,u.D))
t=s.ch
t.toString
return new P.ac(t,H.h(t).i("ac<1>"))},
aj:function(a,b,c){var t,s,r,q=this,p=$.P
if(p.f){t=q.b
if(t!=null){s=p.c
p=p.e
r=u.H
r.a(s)
r.a(p)
t.e.classList.remove("nt-chain-starter")
t.e.classList.remove("nt-chain-fragment")
p=t.e.style
p.visibility=""
p=t.a.style
s=t.d
p.toString
C.h.aN(p,C.h.av(p,"pointer-events"),s,"")
t.c=t.b=t.a=t.d=null}if(!c&&b!=null)Z.oH(q,b)
p=q.ch
if(p!=null)p.l(0,Z.lr(a,$.P,c))
if(a!=null)a.preventDefault()
if(u.V.b(a))q.ff($.P.b)
p=$.P
J.bE(p.b).a8(0,q.r)
p=document.body
p.classList.remove("dnd-drag-occurring")}q.f7()},
eN:function(a,b){return this.aj(a,b,!1)},
ff:function(a){var t=J.ni(a),s=t.$ti,r=s.i("~(1)").a(new Z.hH())
u.M.a(null)
P.nL(new Z.hI(W.z(t.a,t.b,r,!1,s.c)),u.P)},
f7:function(){C.a.t(this.cy,new Z.hG())
Z.lU()
$.P=null},
eu:function(){var t,s
window.getSelection().removeAllRanges()
try{t=document.activeElement
if(u.t.b(t))J.l3(t,0,0)
else if(u.p.b(t))J.l3(t,0,0)}catch(s){H.L(s)}},
sd2:function(a){this.z=u.c6.a(a)},
scZ:function(a){this.ch=u.c6.a(a)},
sbF:function(a){this.cx=u.O.a(a)}}
Z.hK.prototype={
$0:function(){this.a.sd2(null)
return null},
$S:1}
Z.hJ.prototype={
$0:function(){this.a.scZ(null)
return null},
$S:1}
Z.hH.prototype={
$1:function(a){u.V.a(a)
a.stopPropagation()
a.preventDefault()},
$S:2}
Z.hI.prototype={
$0:function(){this.a.a_()},
$S:1}
Z.hG.prototype={
$1:function(a){return u.a1.a(a).ci(0)},
$S:45}
Z.bL.prototype={}
Z.j0.prototype={
cL:function(a){u.H.a(a)
return a},
sbP:function(a,b){this.e=u.H.a(b)}}
Z.ed.prototype={
e6:function(a){Z.nu(new Z.h2(this,u.H.a(a)))},
cr:function(a){var t,s,r,q=this
u.H.a(a)
t=q.a.style
s=a.a
if(q.c==null)q.dl()
r=q.c
if(typeof s!=="number")return s.D()
if(typeof r!=="number")return H.Y(r)
r=H.a(s-r)+"px"
t.left=r
t=q.a.style
s=a.b
if(q.b==null)q.dl()
r=q.b
if(typeof s!=="number")return s.D()
if(typeof r!=="number")return H.Y(r)
r=H.a(s-r)+"px"
t.top=r},
dl:function(){var t,s=this.a
s.toString
t=window.getComputedStyle(s,"")
s=P.kQ(C.c.dP(t.marginLeft,"px",""))
this.c=s==null?0:s
s=P.kQ(C.c.dP(t.marginTop,"px",""))
this.b=s==null?0:s}}
Z.h2.prototype={
$0:function(){var t,s=this.a.a
if(s!=null){s=s.style
t=this.b
t="translate3d("+H.a(t.a)+"px, "+H.a(t.b)+"px, 0)"
s.toString
C.h.aN(s,C.h.av(s,"transform"),t,"")}},
$S:1}
Z.fT.prototype={
$1:function(a){H.jQ(a)
if($.fS){$.l6.$0()
$.fS=!1}return null},
$S:39}
Z.b2.prototype={
bw:function(a){this.ca()
C.a.t(this.c.cx,new Z.j1())},
fL:function(){var t=this.b,s=window,r=u.dj.a(new Z.j2(this))
u.M.a(null)
C.a.l(t,W.z(s,"keydown",r,!1,u.cf))
C.a.l(t,W.z(window,"blur",u.Q.a(new Z.j3(this)),!1,u.B))},
c5:function(a,b){var t,s=this
u.H.a(b)
t=s.c
t=new Z.j0(t.a,u.h.a(W.M(a.currentTarget)),b,t.b,!1,!1)
t.sbP(0,b)
$.P=t
s.c9()
s.c8()
s.c7()
s.fL()},
c4:function(a,b,c){var t,s,r,q,p,o,n,m,l="pointer-events",k=u.H
k.a(b)
k.a(c)
t=$.P
t.sbP(0,t.cL(b))
t=$.P
if(!t.f){s=t.c
t=s.$ti.a(t.e)
r=s.a
q=t.a
if(typeof r!=="number")return r.D()
if(typeof q!=="number")return H.Y(q)
p=r-q
s=s.b
t=t.b
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.Y(t)
o=s-t
if(Math.sqrt(p*p+o*o)>=4){t=this.c
s=$.P
s.f=!0
r=t.b
if(r!=null){q=s.b
k.a(s.e)
r.a=r.e
r.cr(new P.I(0,0,k))
n=U.cY(r.a)
r.cr(U.cY(q).D(0,n))
q=r.a.style
q.toString
r.d=q.getPropertyValue(C.h.av(q,l))
r=r.a.style
r.toString
C.h.aN(r,C.h.av(r,l),"none","")}k=t.z
if(k!=null)k.l(0,Z.lr(a,$.P,!1))
k=$.P
J.bE(k.b).l(0,t.r)
k=document.body
k.classList.add("dnd-drag-occurring")
t.eu()}}else{m=u.h.a(this.eH(c))
t=this.c
s=t.b
if(s!=null){r=$.P
q=r.c
r=r.e
k.a(q)
s.e6(k.a(r).D(0,q))
s=s.a.style
s.visibility="visible"}Z.oI(t,m)}},
c3:function(a,b,c,d){var t=u.H
t.a(c)
t.a(d)
t=$.P
t.sbP(0,t.cL(c))
this.c.eN(a,this.cV(d,b))},
ci:function(a){var t=this.b
C.a.t(t,new Z.j4())
C.a.sk(t,0)},
cW:function(a){var t,s
u.H.a(a)
t=document
s=t.elementFromPoint(J.cM(a.a),J.cM(a.b))
return s==null?t.body:s},
cV:function(a,b){var t,s,r=this
u.H.a(a)
if(b==null)b=r.cW(a)
t=r.c.b
if(t!=null){s=t.a
s=s!=null&&H.a8(s.contains(u.A.a(b)))}else s=!1
if(s){s=t.a.style
s.visibility="hidden"
b=r.cW(a)
t=t.a.style
t.visibility="visible"}return r.d6(a,b)},
eH:function(a){return this.cV(a,null)},
d6:function(a,b){u.H.a(a)
return u.h.b(b)&&(b.shadowRoot||b.webkitShadowRoot)!=null&&H.a8(b.hasAttribute("dnd-retarget"))?this.d6(a,(b.shadowRoot||b.webkitShadowRoot).elementFromPoint(J.cM(a.a),J.cM(a.b))):b},
bJ:function(a){var t=u.h.b(a)&&J.nn(a,this.c.f)
if(t)return!1
return!0}}
Z.j1.prototype={
$1:function(a){var t=u.h.a(a).style
t.toString
C.h.aN(t,C.h.av(t,"touch-action"),"none","")
return"none"},
$S:37}
Z.j2.prototype={
$1:function(a){u.cf.a(a)
if(a.keyCode===27)this.a.c.aj(a,null,!0)},
$S:42}
Z.j3.prototype={
$1:function(a){this.a.c.aj(a,null,!0)},
$S:3}
Z.j4.prototype={
$1:function(a){return u.b_.a(a).a_()},
$S:24}
Z.fF.prototype={
ca:function(){C.a.t(this.c.cx,new Z.jN(this))},
c9:function(){var t=document,s=u.gn.a(new Z.jL(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"touchmove",s,!1,u.T))},
c8:function(){var t=document,s=u.gn.a(new Z.jK(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"touchend",s,!1,u.T))},
c7:function(){var t=document,s=u.gn.a(new Z.jJ(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"touchcancel",s,!1,u.T))},
fQ:function(a){u.H.a(a).D(0,$.P.c)
return!1}}
Z.jN.prototype={
$1:function(a){var t=this.a,s=J.nk(u.h.a(a)),r=s.$ti,q=r.i("~(1)").a(new Z.jM(t))
u.M.a(null)
C.a.l(t.a,W.z(s.a,s.b,q,!1,r.c))},
$S:15}
Z.jM.prototype={
$1:function(a){var t,s
u.T.a(a)
if($.P!=null)return
t=a.touches
if(t.length>1)return
s=this.a
if(!s.bJ(W.M(t[0].target)))return
t=a.touches
if(0>=t.length)return H.t(t,0)
t=t[0]
s.c5(a,new P.I(C.b.C(t.pageX),C.b.C(t.pageY),u.H))},
$S:9}
Z.jL.prototype={
$1:function(a){var t,s,r=this
u.T.a(a)
if(a.touches.length>1){r.a.c.aj(a,null,!0)
return}if(!$.P.f){t=a.changedTouches
if(0>=t.length)return H.t(t,0)
t=t[0]
t=r.a.fQ(new P.I(C.b.C(t.pageX),C.b.C(t.pageY),u.H))}else t=!1
if(t){r.a.c.aj(a,null,!0)
return}t=a.changedTouches
if(0>=t.length)return H.t(t,0)
t=t[0]
s=u.H
r.a.c4(a,new P.I(C.b.C(t.pageX),C.b.C(t.pageY),s),new P.I(C.b.C(t.clientX),C.b.C(t.clientY),s))
a.preventDefault()},
$S:9}
Z.jK.prototype={
$1:function(a){var t,s
u.T.a(a)
t=a.changedTouches
if(0>=t.length)return H.t(t,0)
t=t[0]
s=u.H
this.a.c3(a,null,new P.I(C.b.C(t.pageX),C.b.C(t.pageY),s),new P.I(C.b.C(t.clientX),C.b.C(t.clientY),s))},
$S:9}
Z.jJ.prototype={
$1:function(a){this.a.c.aj(u.T.a(a),null,!0)},
$S:9}
Z.ft.prototype={
ca:function(){C.a.t(this.c.cx,new Z.jq(this))},
c9:function(){var t=document,s=u.a6.a(new Z.jo(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"mousemove",s,!1,u.V))},
c8:function(){var t=document,s=u.a6.a(new Z.jn(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"mouseup",s,!1,u.V))},
c7:function(){}}
Z.jq.prototype={
$1:function(a){var t=this.a,s=J.nj(u.h.a(a)),r=s.$ti,q=r.i("~(1)").a(new Z.jp(t))
u.M.a(null)
C.a.l(t.a,W.z(s.a,s.b,q,!1,r.c))},
$S:15}
Z.jp.prototype={
$1:function(a){var t,s
u.V.a(a)
if($.P!=null)return
if(a.button!==0)return
t=this.a
if(!t.bJ(W.M(a.target)))return
s=u.h.a(W.M(a.target))
if(!(u.d2.b(s)||u.p.b(s)||u.t.b(s)||u.hb.b(s)||u.fW.b(s)))a.preventDefault()
t.c5(a,new P.I(a.pageX,a.pageY,u.H))},
$S:2}
Z.jo.prototype={
$1:function(a){var t
u.V.a(a)
t=u.H
this.a.c4(a,new P.I(a.pageX,a.pageY,t),new P.I(a.clientX,a.clientY,t))},
$S:2}
Z.jn.prototype={
$1:function(a){var t
u.V.a(a)
t=u.H
this.a.c3(a,W.M(a.target),new P.I(a.pageX,a.pageY,t),new P.I(a.clientX,a.clientY,t))},
$S:2}
Z.fw.prototype={
ca:function(){C.a.t(this.c.cx,new Z.jw(this))},
c9:function(){var t=document,s=u.Q.a(new Z.ju(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"pointermove",s,!1,u.B))},
c8:function(){var t=document,s=u.Q.a(new Z.jt(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"pointerup",s,!1,u.B))},
c7:function(){var t=document,s=u.Q.a(new Z.js(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"pointercancel",s,!1,u.B))}}
Z.jw.prototype={
$1:function(a){var t,s,r,q
u.h.a(a)
t=this.a
a.toString
s=new W.hS(a).h(0,"pointerdown")
r=s.$ti
q=r.i("~(1)").a(new Z.jv(t))
u.M.a(null)
C.a.l(t.a,W.z(s.a,s.b,q,!1,r.c))},
$S:15}
Z.jv.prototype={
$1:function(a){var t,s
u.r.a(a)
if($.P!=null)return
if(a.button!==0)return
t=this.a
if(!t.bJ(W.M(a.target)))return
s=u.h.a(W.M(a.target))
if(!(u.d2.b(s)||u.p.b(s)||u.t.b(s)||u.hb.b(s)||u.fW.b(s)))a.preventDefault()
t.c5(a,new P.I(a.pageX,a.pageY,u.H))},
$S:3}
Z.ju.prototype={
$1:function(a){var t
u.r.a(a)
t=u.H
this.a.c4(a,new P.I(a.pageX,a.pageY,t),new P.I(a.clientX,a.clientY,t))},
$S:3}
Z.jt.prototype={
$1:function(a){var t
u.r.a(a)
t=u.H
this.a.c3(a,null,new P.I(a.pageX,a.pageY,t),new P.I(a.clientX,a.clientY,t))},
$S:3}
Z.js.prototype={
$1:function(a){this.a.c.aj(a,null,!0)},
$S:3}
Z.ep.prototype={
gao:function(a){var t,s=this
if(s.d==null)s.sd_(P.cr(new Z.hM(s),!0,u.k))
t=s.d
t.toString
return new P.ac(t,H.h(t).i("ac<1>"))},
gfW:function(a){var t,s=this
if(s.e==null)s.sd1(P.cr(new Z.hO(s),!0,u.k))
t=s.e
t.toString
return new P.ac(t,H.h(t).i("ac<1>"))},
gap:function(a){var t,s=this
if(s.f==null)s.sd0(P.cr(new Z.hN(s),!0,u.k))
t=s.f
t.toString
return new P.ac(t,H.h(t).i("ac<1>"))},
gaq:function(a){var t,s=this
if(s.r==null)s.sd3(P.cr(new Z.hP(s),!0,u.k))
t=s.r
t.toString
return new P.ac(t,H.h(t).i("ac<1>"))},
eZ:function(a){var t,s,r,q,p=this
u.h.a(a)
t=p.y
s=$.n4()
r=s.a
s=H.h(s)
q=s.i("~(1)").a(p.geO())
u.M.a(null)
C.a.l(t,W.z(a,r,q,!1,s.c))
s=$.n6()
q=H.h(s)
C.a.l(t,W.z(a,s.a,q.i("~(1)").a(p.geS()),!1,q.c))
q=$.n5()
s=H.h(q)
C.a.l(t,W.z(a,q.a,s.i("~(1)").a(p.geQ()),!1,s.c))
s=$.n3()
q=H.h(s)
C.a.l(t,W.z(a,s.a,q.i("~(1)").a(p.geU()),!1,q.c))},
eP:function(a){var t
u.V.a(a)
t=a.relatedTarget
if(W.M(t)!=null&&H.a8(u.h.a(W.M(a.currentTarget)).contains(u.A.a(W.M(t)))))return
t=$.P
if(this.a.b8(t.b,t.a,u.h.a(W.M(a.currentTarget)))){t=this.d
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.ap($.P.e))}J.bE(u.h.a(W.M(a.currentTarget))).l(0,"dnd-over")}else J.bE(u.h.a(W.M(a.currentTarget))).l(0,"dnd-invalid")},
eT:function(a){var t
u.V.a(a)
t=$.P
if(this.a.b8(t.b,t.a,u.h.a(W.M(a.currentTarget)))){t=this.e
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.ap($.P.e))}}},
eR:function(a){var t
u.V.a(a)
t=a.relatedTarget
if(W.M(t)!=null&&H.a8(u.h.a(W.M(a.currentTarget)).contains(u.A.a(W.M(t)))))return
t=$.P
if(this.a.b8(t.b,t.a,u.h.a(W.M(a.currentTarget)))){t=this.f
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.ap($.P.e))}J.bE(u.h.a(W.M(a.currentTarget))).a8(0,"dnd-over")}else J.bE(u.h.a(W.M(a.currentTarget))).a8(0,"dnd-invalid")},
eV:function(a){var t
u.V.a(a)
t=$.P
if(this.a.b8(t.b,t.a,u.h.a(W.M(a.currentTarget)))){t=this.r
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.ap($.P.e))}}},
fC:function(){var t=this.y
C.a.t(t,new Z.hL())
C.a.sk(t,0)},
sd_:function(a){this.d=u.g.a(a)},
sd1:function(a){this.e=u.g.a(a)},
sd0:function(a){this.f=u.g.a(a)},
sd3:function(a){this.r=u.g.a(a)},
sbF:function(a){this.x=u.O.a(a)}}
Z.hM.prototype={
$0:function(){this.a.sd_(null)
return null},
$S:1}
Z.hO.prototype={
$0:function(){this.a.sd1(null)
return null},
$S:1}
Z.hN.prototype={
$0:function(){this.a.sd0(null)
return null},
$S:1}
Z.hP.prototype={
$0:function(){this.a.sd3(null)
return null},
$S:1}
Z.hL.prototype={
$1:function(a){return u.b_.a(a).a_()},
$S:24}
Z.ap.prototype={}
Z.ea.prototype={}
U.aE.prototype={
gY:function(){var t=this.b
return H.a(t.fr.b)+"-"+H.a(t.a)+"-"+H.a(this.a)},
gam:function(){return H.a(J.J(this.gJ(this)))+H.a(this.r)},
aE:function(a,b){var t,s=this,r=s.a
if(r!=null){t=s.b
if(r>=t.z)t.z=r+1}else s.a=s.b.z++},
au:function(a,b,c){var t=this
t.a=b.a
t.f=b.f
t.r=b.r
t.d=b.d
if(!c)t.sJ(0,b.gJ(b)==null?t.d:b.gJ(b))},
ak:function(a,b,c){return U.nv(b,this,c)},
dw:function(){var t,s,r=this,q=document.createElement("div")
q.innerText=r.gam()
q.classList.add("nt-attribute-value")
t=r.b
s=t.aD()+"-attribute"
q.classList.add(s)
t=t.cx
if(t!=null){s=q.style
s.color=t}t=u.C
s=t.i("~(1)").a(new U.h0(r,new U.h1(r,q)))
u.M.a(null)
W.z(q,"click",s,!1,t.c)
return q},
b7:function(a,b,c){var t,s,r,q,p,o,n,m=this,l="querySelectorAll",k=m.b.fr,j=k.f
j.classList.add("show")
t=k.r
k=t.style
s=""+b+"px"
k.top=s
t.classList.remove("small")
C.d.K(t,"")
C.d.af(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">'+m.cF()+'</div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
k="#nt-param-label-"+m.gY()
s=document
r=u.aQ.a(s.querySelector(k))
q=u.p.a(s.querySelector("#nt-param-"+m.gY()))
k=u.h
H.b3(k,k,"T",l)
p=u.U
o=u.fN
n=u.gf
new W.b1(o.a(new W.at(s.querySelectorAll(".nt-param-confirm"),p)),!1,"click",n).u(new U.fX(m,q,j,c))
H.b3(k,k,"T",l)
new W.b1(o.a(new W.at(s.querySelectorAll(".nt-param-cancel"),p)),!1,"click",n).u(new U.fY(j))
if(q!=null){q.focus()
if(r!=null){k=u.E
s=k.i("~(1)")
p=s.a(new U.fZ(r,q))
u.M.a(null)
k=k.c
W.z(q,"change",p,!1,k)
W.z(q,"input",s.a(new U.h_(r,q)),!1,k)}}},
cF:function(){var t=this,s=new P.cc().ds(J.J(t.gJ(t)))
return'      <input class="nt-param-input" id="nt-param-'+t.gY()+'" type="text" value="'+s+'">\n      <span class="nt-param-unit">'+H.a(t.r)+"</span>\n    "},
gJ:function(a){return this.c},
gaR:function(a){return this.e},
sJ:function(a,b){return this.c=b}}
U.h1.prototype={
$0:function(){this.b.innerText=this.a.gam()},
$S:1}
U.h0.prototype={
$1:function(a){var t,s,r,q,p,o,n,m
u.V.a(a)
t=u.d.a(W.M(a.target))
s=t.offsetParent
r=C.b.C(s.offsetLeft)
q=C.b.C(t.offsetLeft)
p=J.X(a)
o=p.gaP(a).a
if(typeof o!=="number")return H.Y(o)
n=C.b.C(s.offsetTop)
m=C.b.C(t.offsetTop)
p=p.gaP(a).b
if(typeof p!=="number")return H.Y(p)
this.a.b7(C.b.c2(r+q+o),C.b.c2(n+m+p),this.b)},
$S:2}
U.fX.prototype={
$1:function(a){var t,s,r=this
u.V.a(a)
t=r.b
if(t!=null)r.a.sJ(0,t.value)
r.c.classList.remove("show")
r.d.$0()
t=r.a
s=t.b
s.fr.S(new U.bF(s.a,s.b,t.a,t.gJ(t)))},
$S:2}
U.fY.prototype={
$1:function(a){var t,s
u.V.a(a)
t=this.a.classList
s=t.contains("show")
t.remove("show")
return s},
$S:10}
U.fZ.prototype={
$1:function(a){J.kk(this.a,this.b.value)},
$S:3}
U.h_.prototype={
$1:function(a){J.kk(this.a,this.b.value)},
$S:3}
U.ci.prototype={
ak:function(a,b,c){return U.nY(b,this,c)},
gJ:function(a){return this.x},
sJ:function(a,b){this.x=U.cL(b,0)},
gam:function(){var t=this.x,s=C.b.h8(t!=null?t:0,1)
if(C.c.fI(s,".0"))s=C.c.ab(s,0,s.length-2)
return s+H.a(this.r)},
cF:function(){var t=this
return'      <div class="nt-param-name">'+H.a(t.f)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+t.gY()+'" type="number" step="'+H.a(t.z)+'" value="'+H.a(t.x)+'">\n        <span class="nt-param-unit">'+H.a(t.r)+"</span>\n      </div>\n    "}}
U.d6.prototype={
ak:function(a,b,c){var t=new U.d6(null,b)
t.au(b,this,c)
t.y=this.y
t.z=this.z
return t},
gaR:function(){return"int"}}
U.cm.prototype={
ak:function(a,b,c){var t=this,s=new U.cm(null,b)
s.au(b,t,c)
s.y=t.y
s.z=t.z
s.fx=t.fx
s.fy=t.fy
return s},
b7:function(a,b,c){var t,s,r,q,p,o,n=this,m=n.b.fr,l=m.f
l.classList.add("show")
t=m.r
m=t.style
s=""+b+"px"
m.top=s
t.classList.remove("small")
C.d.K(t,"")
m=document
r=m.createElement("div")
r.className="nt-param-table"
t.appendChild(r)
C.d.af(r,'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.a(n.f)+':\n            <label id="nt-param-label-'+n.gY()+'" for="nt-param-'+n.gY()+'">'+H.a(n.x)+'</label>\n            <span class="nt-param-unit">'+H.a(n.r)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+n.gY()+'" type="range" value="'+H.a(n.x)+'" min="'+H.a(n.fx)+'" max="'+H.a(n.fy)+'" step="'+H.a(n.z)+'">\n          </div>\n        </div>\n      ')
q=u.aQ.a(m.querySelector("#nt-param-label-"+n.gY()))
p=u.p.a(m.querySelector("#nt-param-"+n.gY()))
if(p!=null&&q!=null){m=u.E
s=m.i("~(1)")
o=s.a(new U.iD(n,p,l,c))
u.M.a(null)
m=m.c
W.z(p,"change",o,!1,m)
W.z(p,"input",s.a(new U.iE(q,p)),!1,m)}},
gaR:function(){return"range"}}
U.iD.prototype={
$1:function(a){var t,s=this,r=s.a
r.x=U.cL(s.b.value,0)
s.c.classList.remove("show")
s.d.$0()
t=r.b
t.fr.S(new U.bF(t.a,t.b,r.a,r.x))
a.stopPropagation()},
$S:3}
U.iE.prototype={
$1:function(a){J.kk(this.a,this.b.value)},
$S:3}
U.ba.prototype={
gam:function(){}}
U.cp.prototype={
ge3:function(){var t=this.y,s=H.B(t),r=new H.ab(t,s.i("w(1)").a(new U.iH(this)),s.i("ab<1>"))
if(r.gk(r)===1)return r.B(0,0).gam()
else return H.r(this.c)},
gam:function(){return H.a(this.ge3())+H.a(this.r)+" \u25be"},
ek:function(a,b,c){C.a.t(b.y,new U.iF(this))},
ak:function(a,b,c){return U.oe(b,this,c)},
b7:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.b.fr,e=f.f
e.classList.add("show")
t=f.r
f=t.style
s=""+b+"px"
f.top=s
t.classList.add("small")
C.d.K(t,"")
f=document
r=f.createElement("div")
r.className="nt-param-table"
t.appendChild(r)
for(s=g.y,q=s.length,p=u.C,o=p.i("~(1)"),n=u.M,p=p.c,m=0;m<s.length;s.length===q||(0,H.y)(s),++m){l=s[m]
k=f.createElement("div")
k.className="nt-param-row"
j=f.createElement("div")
j.className="nt-select-option"
l.toString
C.d.K(j,null)
i=l.a
h=g.c
if(i==null?h==null:i===h)j.classList.add("selected")
i=o.a(new U.iG(g,l,e,c))
n.a(null)
W.z(j,"click",i,!1,p)
k.appendChild(j)
r.appendChild(k)}},
gaR:function(){return"select"}}
U.iH.prototype={
$1:function(a){var t,s
u.fn.a(a)
t=a.a
s=this.a.c
if(t==null?s==null:t===s){t=a.b
t=t!=null&&t!==""}else t=!1
return t},
$S:40}
U.iF.prototype={
$1:function(a){return C.a.l(this.a.y,u.fn.a(a))},
$S:41}
U.iG.prototype={
$1:function(a){var t,s,r=this
u.V.a(a)
t=r.a
t.c=r.b.a
r.c.classList.remove("show")
r.d.$0()
s=t.b
s.fr.S(new U.bF(s.a,s.b,t.a,t.c))
a.stopPropagation()},
$S:2}
U.b6.prototype={
gam:function(){var t=this.x
return t!=null?t.n(0):""},
ak:function(a,b,c){var t,s,r=new U.b6(null,b)
r.au(b,this,c)
r.e=this.e
t=this.x
s=new U.cb(null)
s.a=t.a
t=t.c
if(t!=null)s.c=U.lx(s,t)
r.x=s
return r},
b7:function(a,b,c){var t,s,r,q,p,o,n=this,m=".nt-param-confirm",l="querySelectorAll",k="click",j=n.b.fr,i=j.f
i.classList.add("show")
t=j.r
j=t.style
s=""+b+"px"
j.top=s
t.classList.remove("small")
C.d.K(t,"")
C.d.af(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">\n          <div class="nt-param-label">'+H.a(n.f)+':</div>\n        </div>\n        <div class="nt-param-row">\n          <div id="nt-expression-'+n.gY()+'" class="nt-expression-root"></div>\n        </div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
j=u.C
s=j.i("~(1)").a(new U.i0())
u.M.a(null)
r=W.z(t,k,s,!1,j.c)
j=u.h
s=document
H.b3(j,j,"T",l)
q=u.U
p=u.fN
o=u.gf
new W.b1(p.a(new W.at(s.querySelectorAll(m),q)),!1,k,o).u(new U.i1(n,r,i,c))
H.b3(j,j,"T",l)
new W.b1(p.a(new W.at(s.querySelectorAll(m),q)),!1,"mousedown",o).u(new U.i2())
H.b3(j,j,"T",l)
new W.b1(p.a(new W.at(s.querySelectorAll(m),q)),!1,"mouseup",o).u(new U.i3())
H.b3(j,j,"T",l)
new W.b1(p.a(new W.at(s.querySelectorAll(".nt-param-cancel"),q)),!1,k,o).u(new U.i4(r,i))
o=n.x
q="#nt-expression-"+n.gY()
o.toString
o.b=s.querySelector(q)
o.cg()}}
U.i0.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.b3(t,t,"T","querySelectorAll")
s=new W.at(s.querySelectorAll(".nt-pulldown-menu"),u.U)
s.t(s,new U.i_())},
$S:2}
U.i_.prototype={
$1:function(a){return J.e9(u.h.a(a))},
$S:16}
U.i1.prototype={
$1:function(a){var t,s,r=this
u.V.a(a)
t=u.h
s=document
H.b3(t,t,"T","querySelectorAll")
if(s.querySelectorAll(".nt-expression.empty").length>0)return!1
r.b.a_()
r.c.classList.remove("show")
r.d.$0()
t=r.a
s=t.b
s.fr.S(new U.bF(s.a,s.b,t.a,U.bk(t.x.c)))},
$S:10}
U.i2.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.b3(t,t,"T","querySelectorAll")
s=new W.at(s.querySelectorAll(".nt-expression.empty"),u.U)
s.t(s,new U.hZ())},
$S:2}
U.hZ.prototype={
$1:function(a){return J.bE(u.h.a(a)).l(0,"warn")},
$S:19}
U.i3.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.b3(t,t,"T","querySelectorAll")
s=new W.at(s.querySelectorAll(".nt-expression.empty"),u.U)
s.t(s,new U.hY())},
$S:2}
U.hY.prototype={
$1:function(a){return J.bE(u.h.a(a)).a8(0,"warn")},
$S:19}
U.i4.prototype={
$1:function(a){u.V.a(a)
this.a.a_()
this.b.classList.remove("show")},
$S:2}
U.h3.prototype={
a2:function(a){var t,s,r,q
try{s=this.a
if(s.length===0)return 0
r=H.B(s)
r=new H.N(s,r.i("d(1)").a(new U.h5(a)),r.i("N<1,d>")).cf(0,new U.h6())
return r}catch(q){t=H.L(q)
P.kb("here is the fail "+H.a(J.J(t)))}},
Z:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r){q=t[r].Z(a)
if(q!=null)return q}return null},
sbW:function(a){this.a=u.a.a(a)}}
U.h5.prototype={
$1:function(a){u.bz.a(a)
return a.a2(this.a)},
$S:43}
U.h6.prototype={
$2:function(a,b){var t,s
H.q(a)
H.q(b)
t=a
s=b
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.Y(s)
return t+s},
$S:17}
U.cP.prototype={
ci:function(a){var t=this
t.f=t.e=t.d=t.c=t.b=t.a=null},
cj:function(a,b,c,d,e){var t=this
u.i.a(d)
t.ci(0)
t.a=a
t.b=e==null?"block-children":"block-clause"
t.c=c
t.e=b
t.d=e
t.saS(d)},
saS:function(a){this.r=u.i.a(a)}}
U.cQ.prototype={
bU:function(a,b){var t,s,r,q,p,o,n=this
a.insertRule("."+b+"-color { background-color: "+H.a(n.a)+"; }",0)
a.insertRule("."+b+"-attribute { color: "+H.a(n.a)+"; }",0)
t="."+b+" { "
s="color: "+H.a(n.b)+"; border-color: "+H.a(n.c)+"; "
r=n.d
q=r===""?"":"font-weight: "+H.a(r)+";"
r=n.e
p=r===""?"":"font-size: "+H.a(r)+";"
r=n.f
o="font-family: "+H.a(r===""?"Poppins, sans-serif":r)+";"
a.insertRule(t+C.c.aC(s+C.c.aC(q+" "+p+" "+o))+" }",0)}}
U.R.prototype={
bY:function(a,b){var t,s,r,q,p=this,o=U.l9(p.fr,p.a,p.c,b)
o.c=p.c
o.d=p.d
o.e=p.e
o.f=p.f
o.cx=p.cx
o.cy=p.cy
o.db=p.db
o.dx=p.dx
o.dy=p.dy
for(t=p.r,t=t.gar(t),s=H.h(t),s=new H.a4(J.x(t.a),t.b,s.i("@<1>").q(s.Q[1]).i("a4<1,2>")),t=o.r;s.m();){r=s.a.ak(0,o,b)
t.j(0,r.a,r)}for(t=p.x,t=t.gar(t),s=H.h(t),s=new H.a4(J.x(t.a),t.b,s.i("@<1>").q(s.Q[1]).i("a4<1,2>")),t=o.x;s.m();){q=s.a.ak(0,o,b)
t.j(0,q.a,q)}return o},
a2:function(a){var t,s=this.a==a?1:0,r=this.Q
if(r!=null){r=r.a2(a)
if(typeof r!=="number")return H.Y(r)
s+=r}r=this.ch
if(r!=null&&r.length!==0){r.toString
t=H.B(r)
t=new H.N(r,t.i("d(1)").a(new U.hc(a)),t.i("N<1,d>")).cf(0,new U.hd())
if(typeof t!=="number")return H.Y(t)
s+=t}return s},
Z:function(a){var t,s,r,q,p=this
if(p.b==a)return p
t=p.Q
if(t!=null){s=t.Z(a)
if(s!=null)return s}t=p.ch
if(t!=null)for(r=t.length,q=0;q<t.length;t.length===r||(0,H.y)(t),++q){s=t[q].Z(a)
if(s!=null)return s}return null},
aD:function(){var t=this
if(H.a8(t.dy))return H.a(t.fr.b)+"-block-starter"
if(t.Q!=null||t.ch!=null)return H.a(t.fr.b)+"-block-container"
return H.a(t.fr.b)+"-block-command"},
a3:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a.fy=a1
a.fx=a0
t=document
s=t.createElement("div")
a.k1=s
s.classList.add("nt-block")
r=a.aD()
a.k1.classList.add(r)
if(a.Q!=null||a.ch!=null)a.k1.classList.add("nt-block-with-clauses")
U.kp(a,a.k1)
q=t.createElement("div")
q.classList.add("nt-block-left-bar")
s=r+"-color"
q.classList.add(s)
s=a.cx
if(s!=null){p=q.style
p.backgroundColor=s}s=q.style
p=a.x
o=p.a
n=a.ch
n=n!=null?n.length*2:0
n=""+(4+o+n)
s.toString
C.h.aN(s,C.h.av(s,"grid-row-end"),n,"")
a.k1.appendChild(q)
m=t.createElement("div")
n=r+"-color"
m.classList.add(n)
n=a.cx
if(n!=null){s=m.style
s.backgroundColor=n}if(a.Q==null)m.classList.add("nt-block-header")
else m.classList.add("nt-block-clause-header")
a.k1.appendChild(m)
a.k2=t.createElement("div")
a.dX()
a.k2.classList.add("nt-block-action")
m.appendChild(a.k2)
l=t.createElement("div")
l.classList.add("nt-block-params")
m.appendChild(l)
for(s=a.r,s=s.gar(s),o=H.h(s),o=new H.a4(J.x(s.a),s.b,o.i("@<1>").q(o.Q[1]).i("a4<1,2>"));o.m();)l.appendChild(o.a.dw())
k=t.createElement("div")
k.classList.add("nt-block-properties")
m.appendChild(k)
if(p.a>0){s=a.y!=="hidden"
o=new U.f3(s,new U.ha(a,k))
n=o.a=t.createElement("div")
n.classList.add("nt-toggle")
n.innerText=s?"\u25b2":"\u25bc"
j=u.C
i=j.i("~(1)").a(o.gfs(o))
u.M.a(null)
W.z(n,"click",i,!1,j.c)
a.k3=o
if(a.y==="hidden")k.classList.add("nt-block-properties-hidden")
a.k2.appendChild(a.k3.a)}for(s=p.gar(p),p=H.h(s),p=new H.a4(J.x(s.a),s.b,p.i("@<1>").q(p.Q[1]).i("a4<1,2>"));p.m();){s=p.a
s.toString
h=t.createElement("div")
h.classList.add("nt-property")
g=t.createElement("div")
g.classList.add("nt-property-name")
g.innerText="\u2022 "+H.a(s.f)
h.appendChild(g)
h.appendChild(s.dw())
s=r+"-color"
h.classList.add(s)
s=a.cx
if(s!=null){o=h.style
o.backgroundColor=s}k.appendChild(h)}s=a.Q
if(s!=null){f=s.a3(a.fx,m)
a.k1.appendChild(f)}s=a.ch
if(s!=null)for(e=0;s=a.ch,e<s.length;++e){d=t.createElement("div")
d.classList.add("nt-clause-divider")
s=r+"-color"
d.classList.add(s)
s=a.cx
if(s!=null){p=d.style
p.backgroundColor=s}a.k1.appendChild(d)
s=a.ch
if(e>=s.length)return H.t(s,e)
c=s[e].a3(a.fx,d)
a.k1.appendChild(c)}if(a.Q!=null||s!=null){b=t.createElement("div")
b.classList.add("nt-clause-footer")
t=r+"-color"
b.classList.add(t)
t=a.cx
if(t!=null){s=b.style
s.backgroundColor=t}a.k1.appendChild(b)}U.lb(a,a.k1,new U.hb(a))
return a.k1},
dX:function(){var t,s,r,q,p=this,o=new P.aA(""),n=p.f
if(n!=null&&C.c.dW(n).length!==0){n=H.a(p.f)+"\n"
o.a=n
o.a=n+"\n"}n=p.fy
t=n.b==="workspace-chain"&&n.e===0
s=p.fr
if(t){r=C.a.h(s.y,n.a)
n=s.x
n.ag(o,r.a,0)
if(o.a.length===0)n.an(o,p,0)}else s.x.an(o,p,0)
n=o.a
q=new P.cc().ds(C.c.aC(n.charCodeAt(0)==0?n:n))
n=p.k2;(n&&C.d).af(n,'<span title="'+q+'">'+H.a(p.c)+"</span>")},
H:function(){var t,s,r,q,p,o=this
o.k1.classList.remove("nt-drag-over")
o.k1.classList.remove("nt-block-clause-drag-over")
t=o.Q
s=t!=null&&t.H()
t=o.ch
if(t!=null)for(r=t.length,q=0;q<t.length;t.length===r||(0,H.y)(t),++q){p=t[q].H()
s=s||p}if((o.go||o.id)&&!s){o.k1.classList.add("nt-drag-over")
s=!0}return s},
a0:function(){var t,s,r,q=this
q.k1.classList.remove("nt-drag-over")
q.k1.classList.remove("nt-block-clause-drag-over")
q.id=q.go=!1
t=q.Q
if(t!=null)t.a0()
t=q.ch
if(t!=null)for(s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)t[r].a0()},
bu:function(a){var t,s,r=this
U.lp(r,u.D.a(a))
t=H.m([],u.u)
C.a.l(t,r)
C.a.L(t,r.fy.r)
U.hj(r.fx.e,t,!0,null)
s=r.fr
s.dO(r.fy)
s.dA()},
c1:function(a){var t,s,r,q,p=this
u.D.a(a)
$.b5=!0
$.en=$.el=$.em=!1
t=p.fr
t.al()
t.a0()
s=t.id
if(s==null)return
r=u.i
t.sT(r.a(null))
q=p.fy
switch(q.b){case"workspace-chain":if(q.e===0)t.dt(s,$.lm,$.ln)
else{t=C.a.h(t.y,q.a)
q=p.fy.e
t.toString
r.a(s)
C.a.a6(t.a,q,s)
t.V()}break
case"block-children":t=C.a.h(t.y,q.a).Z(p.fy.c).Q
q=p.fy.e
t.toString
r.a(s)
C.a.a6(t.a,q,s)
t.V()
break
case"block-clause":t=C.a.h(t.y,q.a).Z(p.fy.c).ch
t=(t&&C.a).h(t,p.fy.d)
q=p.fy.e
t.toString
r.a(s)
C.a.a6(t.a,q,s)
t.V()
break}},
a5:function(a){var t,s,r,q,p,o=this
u.k.a(a)
$.b5=!0
t=o.fr
s=t.id
r=u.i
t.sT(r.a(null))
q=o.fy
switch(q.b){case"workspace-chain":q=C.a.h(t.y,q.a)
p=o.fy.e
if(typeof p!=="number")return p.w()
q.toString
r.a(s)
C.a.a6(q.a,p+1,s)
q.V()
break
case"block-children":q=C.a.h(t.y,q.a).Z(o.fy.c).Q
p=o.fy.e
if(typeof p!=="number")return p.w()
q.toString
r.a(s)
C.a.a6(q.a,p+1,s)
q.V()
break
case"block-clause":q=C.a.h(t.y,q.a).Z(o.fy.c).ch
q=(q&&C.a).h(q,o.fy.d)
p=o.fy.e
if(typeof p!=="number")return p.w()
q.toString
r.a(s)
C.a.a6(q.a,p+1,s)
q.V()
break}t.S(U.c3(J.aT(s,0)))
t.al()},
bk:function(){var t,s=this.Q
if(s!=null)s.dQ()
if(this.ch!=null)for(t=0;s=this.ch,t<s.length;++t)s[t].dQ()},
aQ:function(){var t,s,r,q,p,o=this,n=o.k2
n.toString
C.d.K(n,"")
o.dX()
n=o.k3
if(n!=null)o.k2.appendChild(n.a)
n=o.Q
if(n!=null)for(n=n.a,t=n.length,s=0;s<n.length;n.length===t||(0,H.y)(n),++s)n[s].aQ()
n=o.ch
if(n!=null)for(t=n.length,s=0;s<n.length;n.length===t||(0,H.y)(n),++s)for(r=n[s].a,q=r.length,p=0;p<r.length;r.length===q||(0,H.y)(r),++p)r[p].aQ()},
sbX:function(a){this.ch=u.al.a(a)}}
U.hc.prototype={
$1:function(a){return u.ds.a(a).a2(this.a)},
$S:47}
U.hd.prototype={
$2:function(a,b){H.q(a)
H.q(b)
if(typeof a!=="number")return a.w()
if(typeof b!=="number")return H.Y(b)
return a+b},
$S:17}
U.ha.prototype={
$1:function(a){var t=this.a
t.y=a?"shown":"hidden"
this.b.classList.toggle("nt-block-properties-hidden")
t.fr.S(U.c3(t))},
$S:61}
U.hb.prototype={
$1:function(a){return this.a.go=a},
$S:28}
U.he.prototype={
$1:function(a){u.k.a(a)
return this.a.$1(!0)},
$S:4}
U.hf.prototype={
$1:function(a){u.k.a(a)
return this.a.$1(!1)},
$S:4}
U.ai.prototype={
a3:function(a,b){var t,s,r,q,p,o,n,m,l=this
l.f=b
t=document
s=t.createElement("div")
l.r=s
s.classList.add("nt-fragment")
r=Z.ca(l.r,l.e.k1)
r.gaq(r).u(l.ga4())
r.gao(r).u(new U.hh(l))
r.gap(r).u(new U.hi(l))
t=t.createElement("div")
l.b=t
t.classList.add("nt-chain")
if(l.a.length===0)return l.b
for(t=u.i,q=0;s=l.a,q<s.length;q=n){p=s[q]
o=l.f
n=q+1
m=new U.cP()
s=t.a(H.aK(s,n,null,H.B(s).c))
m.a=o
m.b="workspace-chain"
m.e=q
m.saS(s)
p.a3(a,m)}U.hj(l.b,s,!1,l.r)
l.dZ(l.c,l.d)
return l.b},
dZ:function(a,b){var t,s,r=this
r.c=a
r.d=b
t=r.b.style
s=H.a(a)+"px"
t.left=s
t=r.b.style
s=H.a(b)+"px"
t.top=s},
h4:function(a){var t,s,r,q,p,o,n
this.f=a
for(t=u.i,s=0;r=this.a,s<r.length;s=n){q=r[s]
p=q.fy
o=this.f
n=s+1
r=H.aK(r,n,null,H.B(r).c)
p.toString
t.a(r)
p.f=p.e=p.d=p.c=p.b=p.a=null
p.a=o
p.b="workspace-chain"
p.e=s
p.saS(r)
q.bk()}},
H:function(){var t,s,r,q,p,o=this
o.r.classList.remove("nt-drag-over")
for(t=o.a,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.y)(t),++q){p=t[q].H()
r=r||p}if(o.x&&!r){o.r.classList.add("nt-drag-over")
r=!0}return r},
a0:function(){var t,s,r
this.r.classList.remove("nt-drag-over")
this.x=!1
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)t[r].a0()},
V:function(){var t,s,r,q,p,o,n,m=this
for(t=u.i,s=0;r=m.a,s<r.length;s=n){q=r[s]
p=q.fy
o=m.f
n=s+1
r=H.aK(r,n,null,H.B(r).c)
p.toString
t.a(r)
p.f=p.e=p.d=p.c=p.b=p.a=null
p.a=o
p.b="workspace-chain"
p.e=s
p.saS(r)
q.bk()}U.hj(m.b,r,!1,m.r)},
fF:function(){var t=this,s=t.a,r=s.length
if(r!==0){if(0>=r)return H.t(s,0)
s=!H.a8(s[0].dy)}else s=!0
if(!s)return
t.r.classList.add("show")
s=J.cM(t.d)
r=t.b.style
s=""+(s-40)+"px"
r.top=s},
a5:function(a){var t,s,r,q,p,o,n,m=this
u.k.a(a)
$.b5=!0
t=m.e
s=t.id
r=u.i
t.sT(r.a(null))
q=J.aT(s,0)
p=U.cY(m.b)
o=a.d.D(0,p)
n=m.d
if(typeof n!=="number")return n.D()
m.d=n-40+J.c0(o.b)
r.a(s)
C.a.a6(m.a,0,s)
m.V()
t.S(U.c3(q))
t.al()}}
U.hh.prototype={
$1:function(a){u.k.a(a)
return this.a.x=!0},
$S:8}
U.hi.prototype={
$1:function(a){u.k.a(a)
return this.a.x=!1},
$S:8}
U.aw.prototype={
a3:function(a,b){var t,s,r,q,p,o,n,m,l,k=this,j=document.createElement("div")
k.b=j
j.classList.add("nt-clause")
j=k.c
t=j.fr
s=Z.ca(b,t.k2)
r=k.ga4()
s.gaq(s).u(r)
s.gao(s).u(new U.hk(k))
s.gap(s).u(new U.hl(k))
q=Z.ca(k.b,t.k2)
q.gaq(q).u(r)
q.gao(q).u(new U.hm(k))
q.gap(q).u(new U.hn(k))
if(k.a.length===0){k.cq()
return k.b}for(t=k.d,p=0;r=k.a,p<r.length;p=n){o=r[p]
n=p+1
m=H.aK(r,n,null,H.B(r).c)
l=new U.cP()
l.cj(j.fy.a,p,j.b,m,t)
o.a3(a,l)}U.kn(k.b,r,"nt-block-clause",!1)
return k.b},
cq:function(){var t,s=this
s.b.classList.add("nt-clause-empty")
s.b.appendChild(U.lI(!1,s))
t=document.createElement("div")
t.className="nt-clause-drop"
s.b.appendChild(t)
s.b.appendChild(U.lI(!0,s))},
dQ:function(){var t,s,r,q,p,o
for(t=this.c,s=this.d,r=0;q=this.a,r<q.length;r=o){p=q[r]
o=r+1
p.fy.cj(t.fy.a,r,t.b,H.aK(q,o,null,H.B(q).c),s)
p.bk()}},
V:function(){var t,s,r,q,p,o=this,n=o.b
n.toString
C.d.K(n,"")
if(o.a.length===0){o.cq()
return}o.b.classList.remove("nt-clause-empty")
for(n=o.c,t=o.d,s=0;r=o.a,s<r.length;s=p){q=r[s]
p=s+1
q.fy.cj(n.fy.a,s,n.b,H.aK(r,p,null,H.B(r).c),t)
q.bk()}U.kn(o.b,r,"nt-block-clause",!1)},
H:function(){var t,s,r,q,p,o=this
o.b.classList.remove("nt-block-clause-drag-over")
t=o.a
s=t.length
if(s!==0){if(0>=s)return H.t(t,0)
t[0].k1.classList.remove("nt-block-clause-drag-over")}for(t=o.a,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.y)(t),++q){p=t[q].H()
r=r||p}if((o.e||o.f)&&!r){t=o.a
s=t.length
if(s===0)o.b.classList.add("nt-block-clause-drag-over")
else{if(0>=s)return H.t(t,0)
t[0].k1.classList.add("nt-block-clause-drag-over")}r=!0}return r},
a0:function(){var t,s,r,q=this
q.b.classList.remove("nt-block-clause-drag-over")
t=q.a
s=t.length
if(s!==0){if(0>=s)return H.t(t,0)
t[0].k1.classList.remove("nt-block-clause-drag-over")}q.f=q.e=!1
for(t=q.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)t[r].a0()},
a5:function(a){var t,s,r,q=this
u.k.a(a)
$.b5=!0
t=q.c.fr
s=t.id
r=u.i
t.sT(r.a(null))
r.a(s)
C.a.a6(q.a,0,s)
q.V()
q.b.classList.remove("nt-clause-empty")
t.S(U.c3(J.aT(s,0)))},
dN:function(a){var t=this.a,s=H.B(t).c,r=H.aK(t,a,null,s)
this.sbW(H.aK(t,0,a,s).a9(0))
this.V()
return r}}
U.hk.prototype={
$1:function(a){u.k.a(a)
return this.a.f=!0},
$S:8}
U.hl.prototype={
$1:function(a){u.k.a(a)
return this.a.f=!1},
$S:8}
U.hm.prototype={
$1:function(a){u.k.a(a)
return this.a.e=!0},
$S:8}
U.hn.prototype={
$1:function(a){u.k.a(a)
return this.a.e=!1},
$S:8}
U.cX.prototype={
b8:function(a,b,c){var t
if(!$.b5)if(this.a==$.lo)t=this.b||!H.a8($.ll)
else t=!1
else t=!1
return t}}
U.eo.prototype={}
U.d2.prototype={}
U.aq.prototype={
ej:function(a,b){var t=this
t.b=b.b
t.c=b.c
t.d=b.d
C.a.t(b.e,new U.hX(t))},
bb:function(a){var t,s=this,r=s.e,q=r.length
if(q===1){q=s.a
if(q.c!==s)a.a+="("
a.a+=H.a(s.b)+" "
if(0>=r.length)return H.t(r,0)
r[0].bb(a)
if(q.c!==s)a.a+=")"}else if(q===2){t=s.a
if(t.c!==s)a.a+="("
if(0>=q)return H.t(r,0)
r[0].bb(a)
a.a+=" "+H.a(s.b)+" "
if(1>=r.length)return H.t(r,1)
r[1].bb(a)
if(t.c!==s)a.a+=")"}else{r=s.b
if(r!=null)a.a+=r}},
fq:function(a){var t,s,r,q,p
u.dy.a(a)
t=this.e
s=t.length
r=a.length
if(s!==r)return!0
for(q=0;q<r;++q){p=a[q]
if(q>=s)return H.t(t,q)
if(p!=t[q].c)return!0}return!1},
e4:function(a){var t,s,r,q,p,o,n=this
u.dy.a(a)
t=n.e
s=t.length===0
if(n.fq(a)){C.a.sk(t,0)
for(r=n.a,q=u.G,p=0;p<a.length;++p)if(p===0&&s&&a[p]==n.c){o=new U.aq(r,a[p],H.m([],q))
o.b=n.b
C.a.l(t,o)}else C.a.l(t,new U.aq(r,a[p],H.m([],q)))}},
di:function(a){var t,s,r=this,q=document.createElement("div")
C.d.K(q,H.a(r.b))
q.classList.add("nt-expression-text")
q.classList.add("editable")
t=H.a(r.c)
q.classList.add(t)
t=u.C
s=t.i("~(1)").a(new U.i7(r,q))
u.M.a(null)
W.z(q,"click",s,!1,t.c)
r.dz(q,a)
a.appendChild(q)},
dz:function(a,b){var t=u.C,s=t.i("~(1)"),r=s.a(new U.i8(b))
u.M.a(null)
t=t.c
W.z(a,"mouseenter",r,!1,t)
W.z(a,"mouseleave",s.a(new U.i9(b)),!1,t)},
b9:function(a,b){var t=document.createElement("div")
C.d.K(t,b?"(":")")
t.classList.add("nt-expression-text")
t.classList.add("parenthesis")
this.dz(t,a)
a.appendChild(t)},
fl:function(a){var t,s,r,q=this
q.b=J.J(U.cL(q.b,0))
t=W.nM("number")
t.className="nt-number-input"
t.value=q.b
t.step="1"
s=u.E
r=s.i("~(1)").a(new U.i6(q,t))
u.M.a(null)
W.z(t,"change",r,!1,s.c)
a.appendChild(t)},
gfP:function(){var t=this.b
if(t!=null)return P.mE(t,new U.ia())!=null
return!1},
bj:function(a){var t,s,r=this,q=document.createElement("div")
q.className="nt-expression"
if((r.gfP()||r.b==null)&&r.c==="num")r.fl(q)
else if(r.b==null){q.classList.add("empty")
C.d.af(q,"<small>&#9660;</small>")}else{t=r.e
s=t.length
if(s===1){r.b9(q,!0)
r.di(q)
if(0>=t.length)return H.t(t,0)
t[0].bj(q)
r.b9(q,!1)}else if(s===2){r.b9(q,!0)
if(0>=t.length)return H.t(t,0)
t[0].bj(q)
r.di(q)
if(1>=t.length)return H.t(t,1)
t[1].bj(q)
r.b9(q,!1)}else C.d.af(q,"<div class='nt-expression-text "+H.a(r.c)+"'>"+H.a(r.b)+"</div>")}if(r.e.length===0){q.classList.add("editable")
t=u.C
s=t.i("~(1)").a(new U.id(r,q))
u.M.a(null)
W.z(q,"click",s,!1,t.c)}a.appendChild(q)},
dK:function(a){var t,s,r=this,q=u.h,p=document
H.b3(q,q,"T","querySelectorAll")
q=new W.at(p.querySelectorAll(".nt-pulldown-menu"),u.U)
q.t(q,new U.ib())
t=p.createElement("div")
t.classList.add("nt-pulldown-menu")
p=r.a
r.cD(t,p.a.cy)
if(J.l2(p.a.cx))C.d.af(t,"<hr>")
r.cD(t,u.cJ.a(p.a.cx))
C.d.af(t,"<hr>")
s=W.l5("#")
C.l.K(s,"Clear")
s.className="clear"
t.appendChild(s)
q=u.C
p=q.i("~(1)").a(new U.ic(r,t))
u.M.a(null)
W.z(s,"click",p,!1,q.c)
a.appendChild(t)},
cD:function(a,b){var t,s,r,q,p,o
for(t=J.x(u.cJ.a(b)),s=u.C,r=s.i("~(1)"),q=u.M,s=s.c;t.m();){p=t.gp()
if(p.b==this.c){o=document.createElement("a")
o.href="#"
C.l.K(o,H.a(p.a))
a.appendChild(o)
p=r.a(new U.i5(this,a,p))
q.a(null)
W.z(o,"click",p,!1,s)}}}}
U.hX.prototype={
$1:function(a){var t=this.a
return C.a.l(t.e,U.lx(t.a,u.gI.a(a)))},
$S:51}
U.i7.prototype={
$1:function(a){u.V.a(a)
this.a.dK(this.b)
a.stopPropagation()},
$S:2}
U.i8.prototype={
$1:function(a){u.V.a(a)
this.a.classList.add("highlight")},
$S:2}
U.i9.prototype={
$1:function(a){u.V.a(a)
this.a.classList.remove("highlight")},
$S:2}
U.i6.prototype={
$1:function(a){var t=this.a,s=this.b,r=s.value
t.b=r
if(r===""){t.b="0"
s.value="0"}},
$S:3}
U.ia.prototype={
$1:function(a){return null},
$S:14}
U.id.prototype={
$1:function(a){u.V.a(a)
this.a.dK(this.b)
a.stopPropagation()},
$S:2}
U.ib.prototype={
$1:function(a){return J.e9(u.h.a(a))},
$S:16}
U.ic.prototype={
$1:function(a){var t
u.V.a(a)
C.d.bi(this.b)
t=this.a
t.b=null
C.a.sk(t.e,0)
t.d=null
t.a.cg()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.i5.prototype={
$1:function(a){var t,s
u.V.a(a)
C.d.bi(this.b)
t=this.a
s=this.c
t.e4(s.c)
t.b=s.a
t.c=s.b
t.d=s.d
t.a.cg()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.cb.prototype={
n:function(a){var t,s=new P.aA("")
this.c.bb(s)
t=s.a
return t.charCodeAt(0)==0?t:t},
cg:function(){var t=this,s=t.b
if(s!=null&&t.c!=null){J.ng(s).ba(0)
t.c.bj(u.d.a(t.b))}}}
U.c6.prototype={
dB:function(a,b,c){var t,s,r,q,p=this,o=p.b
if(c!=null)p.b=c
t=a.ch.b
s=H.B(t)
r=s.i("az<1,o<R>>")
q=p.cT(a,P.cf(new H.az(new H.ab(t,s.i("w(1)").a(new U.ho(!0,a)),s.i("ab<1>")),s.i("o<R>(1)").a(new U.hp()),r),!0,r.i("f.E")))
p.b=o
return q},
aK:function(a,b,c){var t,s,r
for(t="",s=0;s<b;++s)t+="  "
a.a+=t
r="\n"+t
a.a+=H.kd(c,"\n",r)+"\n"},
an:function(a,b,c){var t,s,r,q,p=b.e
if(p==null){p=H.a(b.c)
for(t=b.r,s=0;s<t.a;++s)p+=" {"+s+"}"
for(t=b.x,s=0;s<t.a;++s)p+=" {P"+s+"}"}for(t=b.r,r=new H.aa(t,H.h(t).i("aa<1>")),r=r.gv(r),s=0;r.m();){q=r.d
p=this.bQ(p,"{"+s+"}",b,t.h(0,q));++s}for(t=b.x,r=new H.aa(t,H.h(t).i("aa<1>")),r=r.gv(r),s=0;r.m();){q=r.d
p=this.bQ(p,"{P"+s+"}",b,t.h(0,q));++s}this.aK(a,c,p)},
bQ:function(a,b,c,d){var t=this.eF(d)
if(typeof t!="string")H.G(H.aS(t))
return H.kd(a,b,t)},
eF:function(a){var t
if(a instanceof U.b6)return U.bk(a.x.c)
else{t=a.gJ(a)
return t==null?"":J.J(t)}}}
U.ho.prototype={
$1:function(a){var t
u.c.a(a)
if(this.a){t=a.a
t=H.a8(t.dy)&&this.b.a2(t.a)===0}else t=!1
return t},
$S:26}
U.hp.prototype={
$1:function(a){var t
u.c.a(a)
t=H.m([],u.u)
C.a.l(t,a.a)
return t},
$S:54}
U.eS.prototype={
cT:function(a,b){var t,s,r,q
u.eB.a(b)
t=new P.aA("")
for(s=a.y,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){this.ag(t,s[q].a,0)
t.a+="\n"}for(s=b.length,q=0;q<b.length;b.length===s||(0,H.y)(b),++q)this.ag(t,b[q],0)
s=t.a
return s.charCodeAt(0)==0?s:s},
ag:function(a,b,c){var t,s,r,q,p
for(t=J.x(u.a.a(b)),s=c+1;t.m();){r=t.gp()
q=r.Q
if(q!=null)this.ag(a,q.a,s)
r=r.ch
if(r!=null)for(q=r.length,p=0;p<r.length;r.length===q||(0,H.y)(r),++p)this.ag(a,r[p].a,s)}}}
U.eM.prototype={
cT:function(a,b){var t,s,r,q,p
u.eB.a(b)
t=new P.aA("")
s=a.y
r=H.B(s)
q=new H.N(s,r.i("o<R>(1)").a(new U.iu()),r.i("N<1,o<R>>")).a9(0)
C.a.cu(q,U.pZ())
for(s=q.length,p=0;p<q.length;q.length===s||(0,H.y)(q),++p)this.ag(t,q[p],0)
for(s=b.length,p=0;p<b.length;b.length===s||(0,H.y)(b),++p)this.ag(t,b[p],0)
s=t.a
return s.charCodeAt(0)==0?s:s},
ag:function(a,b,c){var t
u.a.a(b)
t=J.an(b)
if(t.gk(b)===0||t.h(b,0).d!=="nlogo:procedure")return
this.an(a,t.h(b,0),c)
this.bI(a,t.aT(b,1).a9(0),c+1)
t=a.a+="end\n"
a.a=t+"\n"},
an:function(a,b,c){var t,s,r,q,p,o,n=this
n.e9(a,b,c)
t=b.Q
if(t!=null)n.fJ(a,t,c)
t=b.ch
if(t!=null)for(s=t.length,r=u.ds,q=c+1,p=0;p<t.length;t.length===s||(0,H.y)(t),++p){o=r.a(t[p])
n.aK(a,c,"[")
n.bI(a,o.a,q)
n.aK(a,c,"]")}},
bI:function(a,b,c){var t,s
u.a.a(b)
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.y)(b),++s)this.an(a,b[s],c)},
fJ:function(a,b,c){this.aK(a,c,"[")
this.bI(a,b.a,c+1)
this.aK(a,c,"]")},
bQ:function(a,b,c,d){var t=d instanceof U.b6?U.bk(d.x.c):d.gJ(d),s=c.a,r=c.b,q=d.a,p=H.r(this.b.$5(this.c,s,r,q,t))
if(typeof p!="string")H.G(H.aS(p))
return H.kd(a,b,p)}}
U.iu.prototype={
$1:function(a){return u.W.a(a).a},
$S:55}
U.ef.prototype={
br:function(a){var t=this.b,s=H.B(t),r=new H.ab(t,s.i("w(1)").a(new U.h9(a)),s.i("ab<1>"))
if(r.gk(r)===1)return r.gaA(r).a
return null},
fE:function(a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=document,a5=a4.createElement("div"),a6=a2.a
a5.id=H.a(a6.b)+"-menu"
a2.d=a5
a5.classList.add("nt-menu")
for(a5=a2.b,t=u.M,s=u.E,r=s.i("~(1)"),s=s.c,q=u.C,p=q.i("~(1)"),q=q.c,o=0;o<a5.length;++o){n=a5[o]
m=a2.d
n.y=a7
n.f=o
l=a4.createElement("div")
n.x=l
l.classList.add("nt-menu-slot")
l=n.a
k=l.aD()
n.x.classList.add(k)
j=n.x
i=k+"-color"
j.classList.add(i)
h=U.la(l)
g=new P.aA("")
j=l.f
if(j!=null&&C.c.dW(j).length!==0){j=H.a(l.f)+"\n"
g.a=j
g.a=j+"\n"}j=n.d
j.x.an(g,h,0)
i=g.a
f=C.c.aC(i.charCodeAt(0)==0?i:i)
e=new P.cc().cN(f,0,f.length)
d=e==null?f:e
i=n.x
c='<span title="'+d+'">'+H.a(l.c)+"</span>"
i.toString
C.d.c6(i,"beforeend",c,a3,a3)
i=l.cx
if(i!=null){c=n.x.style
c.backgroundColor=i}i=l.db
if(i!=null){c=n.x.style
c.borderColor=i}i=l.cy
if(i!=null){c=n.x.style
c.color=i}i=l.dx
if(i!=null){c=n.x.style
b=c.lineHeight
c.font=i
i=n.x.style
i.lineHeight=b}a=Z.lq(n.x,n.y,".nt-menu-slot-at-limit","nt-block-dragging")
i=a.gdH(a)
c=i.$ti
a0=c.i("~(1)").a(n.gbt())
t.a(null)
i.a.bT(c.i("~(1)").a(a0),a3,null,!1)
a0=a.gdG(a)
c=a0.$ti
a0.a.bT(c.i("~(1)").a(c.i("~(1)").a(n.gc0())),a3,null,!1)
c=n.x
c.toString
W.z(c,"dblclick",r.a(n.gfZ()),!1,s)
c=n.x
c.toString
W.z(c,"contextmenu",p.a(n.gfX()),!1,q)
i=n.e
l=j.a2(l.a)
if(typeof i!=="number")return i.D()
if(typeof l!=="number")return H.Y(l)
l=i<=0||i-l>0
j=n.x
if(l)j.classList.remove("nt-menu-slot-at-limit")
else j.classList.add("nt-menu-slot-at-limit")
m.appendChild(n.x)}a1=Z.ca(a2.d,a6.k1)
a1.gao(a1).u(new U.h7(a2))
a1.gap(a1).u(new U.h8(a2))
a1.gaq(a1).u(a2.ga4())
a2.dY()
return a2.d},
dY:function(){var t,s,r,q,p,o
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r){q=t[r]
p=q.e
o=q.d.a2(q.a.a)
if(typeof p!=="number")return p.D()
if(typeof o!=="number")return H.Y(o)
p=p<=0||p-o>0
o=q.x
if(p)o.classList.remove("nt-menu-slot-at-limit")
else o.classList.add("nt-menu-slot-at-limit")}},
H:function(){var t,s
if(!$.em)t=$.el&&!$.en
else t=!0
s=this.d
if(t)s.classList.add("nt-menu-drag-over")
else s.classList.remove("nt-menu-drag-over")},
a5:function(a){var t,s
u.k.a(a)
$.b5=!0
t=this.a
s=t.id
t.sT(u.i.a(null))
t.S(U.c3(J.aT(s,0)))
t.al()}}
U.h9.prototype={
$1:function(a){return u.c.a(a).a.a==this.a},
$S:26}
U.h7.prototype={
$1:function(a){u.k.a(a)
$.em=!0
this.a.H()},
$S:6}
U.h8.prototype={
$1:function(a){u.k.a(a)
$.em=!1
this.a.H()},
$S:6}
U.iz.prototype={
$1:function(a){var t,s,r,q=this
H.r(a)
t=document.createElement("div")
W.lV(t,u.cs.a(H.m(["nt-notch-"+H.a(a),q.a],u.s)))
if(!q.b||a!=="middle"){s=q.c.cx
if(s!=null){r=t.style
r.backgroundColor=s}}q.d.appendChild(t)},
$S:14}
U.iA.prototype={
$1:function(a){return this.a.id=a},
$S:28}
U.iy.prototype={
$1:function(a){var t,s,r,q=this
H.r(a)
t=document.createElement("div")
W.lV(t,u.cs.a(H.m(["nt-notch-"+H.a(a),q.a],u.s)))
if(!q.b||a!=="middle"){s=q.c.c.cx
if(s!=null){r=t.style
r.backgroundColor=s}}q.d.appendChild(t)},
$S:14}
U.bT.prototype={}
U.ee.prototype={
bm:function(){return P.aG(P.af(["type","block-changed","blockId",this.b,"instanceId",this.c],u.N,u.K))}}
U.bF.prototype={
bm:function(){var t=this
return P.aG(P.af(["type","attribute-changed","blockId",t.b,"instanceId",t.c,"attributeId",t.d,"value",t.e],u.N,u.z))}}
U.eE.prototype={
bm:function(){return P.aG(P.af(["type","menu-item-clicked","blockId",this.b],u.N,u.K))}}
U.eF.prototype={
bm:function(){return P.aG(P.af(["type","menu-item-context-menu","blockId",this.b,"x",this.c,"y",this.d],u.N,u.K))}}
U.aJ.prototype={
bu:function(a){var t,s,r,q=this
u.D.a(a)
t=U.la(q.a)
q.r=t
s=q.f
r=new U.cP()
r.b="new-block"
r.f=s
t.a3(q.y,r)
U.lp(q.r,a)
U.hj(q.y.e,H.m([q.r],u.u),!1,null)
t=q.d
t.dO(r)
t.dA()},
c1:function(a){var t
u.D.a(a)
$.b5=!0
$.en=$.el=$.em=!1
this.r=null
t=this.d
t.al()
t.a0()},
h_:function(a){this.d.S(new U.eE(this.a.a))},
fY:function(a){var t,s,r
u.V.a(a)
a.preventDefault()
a.stopPropagation()
t=this.a.a
s=a.pageX
r=a.pageY
this.d.S(new U.eF(t,H.q(s),H.q(r)))
return!1}}
U.f3.prototype={
ft:function(a,b){var t,s,r=this
u.V.a(b).stopPropagation()
t=!r.d
r.d=t
s=r.a
s.innerText=t?"\u25b2":"\u25bc"
s=r.d
r.e.$1(s)}}
U.bJ.prototype={
S:function(a){var t,s=this
try{s.e_()
s.aQ()
s.ch.dY()
$.fQ().h(0,"NetTango").W("_relayCallback",[s.b,a.bm()])}catch(t){H.L(t)
P.kb("Unable to relay program changed event to Javascript")}},
a2:function(a){var t,s=this.y
if(s.length===0)return 0
t=H.B(s)
return new H.N(s,t.i("d(1)").a(new U.hx(a)),t.i("N<1,d>")).cf(0,new U.hy())},
fD:function(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.b,h=H.a(i)+"-styles",g=document,f=u.bg.a(g.getElementById(h))
if(f==null){f=g.createElement("style")
f.id=h
j.c.appendChild(f)}t=u.af.a(f.sheet)
for(;t.cssRules.length>0;)t.removeRule(0)
j.fr.bU(t,H.a(i)+"-block-starter")
j.fx.bU(t,H.a(i)+"-block-container")
j.fy.bU(t,H.a(i)+"-block-command")
s=g.createElement("div")
s.classList.add("nt-workspace-wrapper")
j.c.appendChild(s)
r=g.createElement("div")
r.classList.add("nt-block-drag")
r.classList.add("nt-chain")
s.appendChild(r)
q=g.createElement("div")
q.className="nt-attribute-backdrop"
j.f=q
p=u.C
o=p.i("~(1)")
n=o.a(new U.hq(j))
u.M.a(null)
p=p.c
W.z(q,"click",n,!1,p)
n=g.createElement("div")
n.className="nt-attribute-dialog"
j.r=n
W.z(n,"click",o.a(new U.hr()),!1,p)
j.f.appendChild(j.r)
j.c.appendChild(j.f)
p=g.createElement("div")
p.id=H.a(i)+"-space"
j.d=p
p.classList.add("nt-workspace")
p=new U.eo()
p.e=r
j.go=p
s.appendChild(j.d)
g=g.createElement("div")
j.e=g
j.d.appendChild(g)
for(i=j.y,m=0;m<i.length;++m)i[m].a3(j.go,m)
j.h0()
l=j.ch.fE(j.go)
i=l.style
g=H.a(j.db)+"px"
i.maxHeight=g
s.appendChild(l)
k=Z.ca(j.d,j.k1)
k.gao(k).u(new U.hs(j))
k.gfW(k).u(new U.ht(j))
k.gap(k).u(new U.hu(j))
k.gaq(k).u(j.ga4())
i=j.k3
i.gao(i).u(new U.hv(j))
i=j.k3
i.gap(i).u(new U.hw(j))
j.e_()},
a5:function(a){var t,s,r,q=this
u.k.a(a)
$.b5=!0
q.al()
t=q.id
q.sT(u.i.a(null))
s=U.cY(q.e)
r=a.d.D(0,s).D(0,$.lk)
q.dt(t,Math.max(0,J.c0(r.a)),Math.max(0,J.c0(r.b)))
q.S(U.c3(J.aT(t,0)))},
fw:function(a){var t,s=this
u.k.a(a)
$.b5=!0
s.al()
t=s.id
s.sT(u.i.a(null))
s.S(U.c3(J.aT(t,0)))},
dt:function(a,b,c){var t,s,r,q,p=this
u.i.a(a)
t=new U.ai(p,H.m([],u.u))
s=p.y
r=s.length
C.a.l(s,t)
q=t.a3(p.go,r)
p.d.appendChild(q)
s=t.a
C.a.a6(s,s.length,a)
t.V()
t.dZ(b,c)},
h1:function(a){var t,s,r,q=this.y,p=C.a.h(q,a)
$.lm=p.c
$.ln=p.d
t=p.a
if(!!q.fixed$length)H.G(P.A("removeAt"))
if(!H.cF(a))H.G(H.aS(a))
if(typeof a!=="number")return a.ah()
s=q.length
if(a>=s)H.G(P.dp(a,null))
q.splice(a,1)[0]
s=p.b;(s&&C.d).bi(s)
for(r=0;r<q.length;++r)q[r].h4(r)
return t},
dO:function(a){var t,s,r,q,p,o,n=this,m=a.b
switch(m){case"new-block":t=C.a.h(n.ch.b,a.f)
t.x.classList.remove("nt-block-dragging")
n.sT(u.i.a(H.m([t.r],u.u)))
break
case"workspace-chain":m=a.e
s=u.i
r=a.a
if(m===0)n.sT(s.a(n.h1(r)))
else{m=C.a.h(n.y,r)
r=a.e
q=m.a
p=H.B(q).c
o=H.aK(q,r,null,p)
m.sbW(H.aK(q,0,r,p).a9(0))
m.V()
n.sT(s.a(o))}break
case"block-children":n.sT(u.i.a(C.a.h(n.y,a.a).Z(a.c).Q.dN(a.e)))
break
case"block-clause":m=C.a.h(n.y,a.a).Z(a.c).ch
n.sT(u.i.a((m&&C.a).h(m,a.d).dN(a.e)))
break
case"default":throw H.b(P.ks("Unknown block removal type: "+H.a(m)))}},
h0:function(){var t,s,r=this.y,q=H.m(r.slice(0),H.B(r).i("E<1>"))
C.a.cu(q,new U.hz())
r=this.e
r.toString
C.d.K(r,"")
for(r=q.length,t=0;t<q.length;q.length===r||(0,H.y)(q),++t){s=q[t]
this.e.appendChild(s.b)}},
dA:function(){var t,s,r
for(t=this.y,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)t[r].fF()},
al:function(){var t,s,r,q,p,o,n
for(t=this.y,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r){q=t[r]
q.r.classList.remove("show")
p=J.cM(q.d)
o=q.b.style
n=""+p+"px"
o.top=n}},
H:function(){var t,s,r
for(t=this.y,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)t[r].H()},
a0:function(){var t,s,r
for(t=this.y,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)t[r].a0()
this.ch.H()},
e_:function(){var t,s,r,q,p,o,n,m=this,l=m.db,k=m.c.getBoundingClientRect()
for(t=m.y,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r){q=t[r].b.getBoundingClientRect().bottom
p=k.top
if(typeof q!=="number")return q.D()
if(typeof p!=="number")return H.Y(p)
o=C.b.fp(q-p)
if(typeof l!=="number")return H.Y(l)
if(o>l)l=o}if(typeof l!=="number")return l.w()
t=l+1
m.dx=t
n=""+t+"px"
t=m.d.style
t.minHeight=n
t=m.ch.d.style
t.maxHeight=n},
aQ:function(){var t,s,r,q,p,o
for(t=this.y,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)for(q=t[r].a,p=q.length,o=0;o<q.length;q.length===p||(0,H.y)(q),++o)q[o].aQ()},
sT:function(a){this.id=u.i.a(a)}}
U.hx.prototype={
$1:function(a){return u.W.a(a).a2(this.a)},
$S:58}
U.hy.prototype={
$2:function(a,b){H.q(a)
H.q(b)
if(typeof a!=="number")return a.w()
if(typeof b!=="number")return H.Y(b)
return a+b},
$S:17}
U.hq.prototype={
$1:function(a){var t,s
u.V.a(a)
t=this.a.f.classList
s=t.contains("show")
t.remove("show")
return s},
$S:10}
U.hr.prototype={
$1:function(a){return u.V.a(a).stopPropagation()},
$S:7}
U.hs.prototype={
$1:function(a){u.k.a(a)
$.en=!0
this.a.ch.H()},
$S:6}
U.ht.prototype={
$1:function(a){u.k.a(a)
return this.a.H()},
$S:4}
U.hu.prototype={
$1:function(a){var t
u.k.a(a)
$.en=!1
t=this.a
t.H()
t.ch.H()},
$S:6}
U.hv.prototype={
$1:function(a){u.k.a(a)
$.el=!0
this.a.ch.H()},
$S:6}
U.hw.prototype={
$1:function(a){u.k.a(a)
$.el=!1
this.a.ch.H()},
$S:6}
U.hz.prototype={
$2:function(a,b){var t=u.W
t.a(a)
t.a(b)
return J.l1(a.d,b.d)},
$S:59}
U.jV.prototype={
$5:function(a,b,c,d,e){var t=this.a
if(t==null)return J.J(e)
else return H.r(t.dj([a,b,c,d,e]))},
$C:"$5",
$R:5}
U.il.prototype={
$5:function(a,b,c,d,e){var t=H.r(this.a.dj([a,b,c,d,e]))
return t},
$C:"$5",
$R:5}
U.kc.prototype={
$1:function(a){return u.c.a(a).a.a},
$S:60}
U.iN.prototype={
$1:function(a){var t,s
if(!a.E("action"))return
t=this.b
s=t.a
a.j(0,"id",s)
t.j(0,H.r(a.h(0,"action")),s)
t=this.a
this.c.j(0,s,t.a)
t.a=U.lR(t.a,a)},
$S:12}
U.iO.prototype={
$1:function(a){U.oq(this.a,this.b,a)},
$S:12}
U.iM.prototype={
$1:function(a){var t=this.a
t.a=U.or(t.a,a)},
$S:62}
U.iP.prototype={
$1:function(a){return P.aG(P.af(["actual",a],u.N,u.z))},
$S:22}
U.iQ.prototype={
$1:function(a){return a.E("type")&&J.bD(J.c_(a,"type"),"select")},
$S:34}
U.iS.prototype={
$1:function(a){},
$S:12}
U.iR.prototype={
$1:function(a){var t,s="required"
if(!(a instanceof P.v))return!1
if(a.gk(a)===0)return!1
if(a.gk(a)>1)return!0
t=u.b.a(a.h(0,0))
if(t.E(s)&&H.a8(H.jP(t.h(0,s))))return!1
return!0},
$S:34};(function aliases(){var t=J.ae.prototype
t.eb=t.n
t.ea=t.bh
t=J.bp.prototype
t.ed=t.n
t=P.bt.prototype
t.ef=t.aW
t=P.O.prototype
t.eg=t.aG
t.eh=t.aV
t=P.f.prototype
t.ec=t.bo
t=P.C.prototype
t.ee=t.n
t=W.p.prototype
t.bv=t.U
t=W.dT.prototype
t.ei=t.ae
t=P.Q.prototype
t.cv=t.h
t.cw=t.j
t=U.c6.prototype
t.e9=t.an})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1i,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_0i,k=hunkHelpers._static_2
t(P,"pv","oD",13)
t(P,"pw","oE",13)
t(P,"px","oF",13)
s(P,"mr","pq",0)
r(P,"py",1,null,["$2","$1"],["mi",function(a){return P.mi(a,null)}],29,0)
s(P,"mq","pl",0)
var j
q(j=P.b0.prototype,"gb1","ac",0)
q(j,"gb2","ad",0)
p(P.bt.prototype,"gfi","l",30)
o(P.a3.prototype,"gex",0,1,function(){return[null]},["$2","$1"],["aI","ey"],29,0)
q(j=P.cy.prototype,"gb1","ac",0)
q(j,"gb2","ad",0)
q(j=P.O.prototype,"gb1","ac",0)
q(j,"gb2","ad",0)
q(P.cz.prototype,"gfa","ax",0)
q(j=P.cB.prototype,"gb1","ac",0)
q(j,"gb2","ad",0)
n(j,"geI","eJ",30)
m(j,"geW","eX",73)
q(j,"geL","eM",0)
t(P,"pB","p8",5)
r(W,"pG",4,null,["$4"],["oK"],27,0)
r(W,"pH",4,null,["$4"],["oL"],27,0)
l(W.dW.prototype,"gfu","bZ",0)
t(P,"k9","e3",5)
t(P,"pP","jS",66)
n(j=Z.ep.prototype,"geY","eZ",16)
n(j,"geO","eP",7)
n(j,"geS","eT",7)
n(j,"geQ","eR",7)
n(j,"geU","eV",7)
k(U,"pZ","pA",67)
r(U,"pW",4,null,["$4"],["nS"],68,0)
r(U,"pV",3,null,["$3"],["nR"],69,0)
k(U,"pU","nQ",70)
t(U,"pY","nU",21)
s(U,"pX","nT",71)
t(U,"mC","ov",18)
t(U,"pS","ou",48)
t(U,"pT","ox",18)
t(U,"mD","oA",18)
n(j=U.R.prototype,"gbt","bu",11)
n(j,"gc0","c1",11)
n(j,"ga4","a5",4)
n(U.ai.prototype,"ga4","a5",4)
n(U.aw.prototype,"ga4","a5",4)
n(U.ef.prototype,"ga4","a5",4)
n(j=U.aJ.prototype,"gbt","bu",11)
n(j,"gc0","c1",11)
n(j,"gfZ","h_",57)
n(j,"gfX","fY",10)
p(U.f3.prototype,"gfs","ft",7)
n(j=U.bJ.prototype,"ga4","a5",4)
n(j,"gfv","fw",4)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.C,null)
r(P.C,[H.ku,J.ae,J.av,P.f,H.W,P.S,H.d1,H.V,H.ct,P.ch,H.cS,H.bI,H.ex,H.iK,P.K,H.dU,P.T,H.ir,H.dc,H.ey,H.eZ,H.jD,H.aI,H.fm,P.jH,P.U,P.O,P.bt,P.ax,P.fc,P.bX,P.a3,P.f9,P.a2,P.eY,P.bu,P.fg,P.dQ,P.cz,P.cO,P.fJ,P.dE,P.dR,P.fs,P.bZ,P.dJ,P.l,P.e1,P.aP,P.dS,P.eg,P.ij,P.jk,P.w,P.c9,P.Z,P.bM,P.eQ,P.ds,P.fl,P.d3,P.aV,P.o,P.cg,P.u,P.dg,P.am,P.fA,P.c,P.aA,P.aQ,W.hC,W.hV,W.eq,W.dW,W.bY,W.a0,W.dm,W.dT,W.fB,W.bO,W.ff,W.ak,W.fz,W.e2,P.Q,P.I,P.fx,Z.hF,Z.bL,Z.j0,Z.ed,Z.b2,Z.ep,Z.ap,Z.ea,U.aE,U.ba,U.h3,U.cP,U.cQ,U.R,U.d2,U.aq,U.cb,U.c6,U.ef,U.bT,U.aJ,U.f3,U.bJ])
r(J.ae,[J.ev,J.d8,J.bp,J.E,J.bo,J.b8,H.bQ,W.D,W.bG,W.H,W.fe,W.f_,W.hD,W.cW,W.hE,W.e,W.fo,W.d5,W.eD,W.fu,W.aB,W.fD,W.fK,W.fM,P.db])
r(J.bp,[J.eT,J.br,J.aW])
s(J.im,J.E)
r(J.bo,[J.d7,J.ew])
r(P.f,[H.n,H.az,H.ab,H.bV,H.bU,H.dx])
r(H.n,[H.a7,H.bN,H.aa,P.dD,P.al])
r(H.a7,[H.dt,H.N,P.fr])
s(H.aN,H.az)
r(P.S,[H.a4,H.bW,H.dv,H.dr])
s(H.d_,H.bV)
s(H.cZ,H.bU)
s(P.cE,P.ch)
s(P.dw,P.cE)
s(H.cT,P.dw)
r(H.bI,[H.hA,H.iB,H.ke,H.f2,H.io,H.k4,H.k5,H.k6,P.iW,P.iV,P.iX,P.iY,P.jI,P.jE,P.jF,P.ii,P.j6,P.jd,P.j9,P.ja,P.jb,P.j7,P.jc,P.jg,P.jh,P.jf,P.je,P.iI,P.iJ,P.j_,P.iZ,P.jr,P.jX,P.jy,P.jx,P.jz,P.it,P.jl,P.iv,P.hQ,P.hR,W.hT,W.iU,W.j5,W.jC,W.ix,W.iw,W.jA,W.jB,W.jG,W.jO,P.hB,P.ie,P.ig,P.ih,P.ip,P.jT,P.jU,P.jY,P.jZ,P.k_,Z.hK,Z.hJ,Z.hH,Z.hI,Z.hG,Z.h2,Z.fT,Z.j1,Z.j2,Z.j3,Z.j4,Z.jN,Z.jM,Z.jL,Z.jK,Z.jJ,Z.jq,Z.jp,Z.jo,Z.jn,Z.jw,Z.jv,Z.ju,Z.jt,Z.js,Z.hM,Z.hO,Z.hN,Z.hP,Z.hL,U.h1,U.h0,U.fX,U.fY,U.fZ,U.h_,U.iD,U.iE,U.iH,U.iF,U.iG,U.i0,U.i_,U.i1,U.i2,U.hZ,U.i3,U.hY,U.i4,U.h5,U.h6,U.hc,U.hd,U.ha,U.hb,U.he,U.hf,U.hh,U.hi,U.hk,U.hl,U.hm,U.hn,U.hX,U.i7,U.i8,U.i9,U.i6,U.ia,U.id,U.ib,U.ic,U.i5,U.ho,U.hp,U.iu,U.h9,U.h7,U.h8,U.iz,U.iA,U.iy,U.hx,U.hy,U.hq,U.hr,U.hs,U.ht,U.hu,U.hv,U.hw,U.hz,U.jV,U.il,U.kc,U.iN,U.iO,U.iM,U.iP,U.iQ,U.iS,U.iR])
s(H.cU,H.cS)
r(P.K,[H.eO,H.ez,H.f6,H.eU,P.cN,H.fk,P.da,P.eP,P.aD,P.eN,P.f7,P.f5,P.aY,P.eh,P.ej])
r(H.f2,[H.eW,H.c4])
s(H.f8,P.cN)
s(P.df,P.T)
r(P.df,[H.a6,P.dC,P.fq,W.fa])
s(H.di,H.bQ)
r(H.di,[H.dM,H.dO])
s(H.dN,H.dM)
s(H.bP,H.dN)
s(H.dP,H.dO)
s(H.dj,H.dP)
r(H.dj,[H.eG,H.eH,H.eI,H.eJ,H.eK,H.dk,H.eL])
s(H.dZ,H.fk)
r(P.U,[P.cD,P.dB,W.bf,W.b1])
s(P.cx,P.cD)
s(P.ac,P.cx)
r(P.O,[P.cy,P.cB])
s(P.b0,P.cy)
s(P.dX,P.bt)
s(P.dY,P.fc)
r(P.bu,[P.dy,P.fh])
s(P.dV,P.dQ)
s(P.dK,P.dB)
s(P.fy,P.fJ)
s(P.dF,P.dC)
s(P.dI,P.dR)
s(P.de,P.dJ)
s(P.dq,P.dS)
s(P.c7,P.eY)
r(P.c7,[P.cc,P.eC,P.eB])
s(P.eA,P.da)
s(P.iq,P.eg)
s(P.jj,P.jk)
r(P.Z,[P.ah,P.d])
r(P.aD,[P.dn,P.et])
r(W.D,[W.k,W.bs,W.b_])
r(W.k,[W.p,W.aU,W.cw])
r(W.p,[W.i,P.j])
r(W.i,[W.c1,W.eb,W.c2,W.bH,W.c5,W.bK,W.es,W.cd,W.cj,W.co,W.cs,W.du,W.f0,W.f1,W.cu,W.cv])
s(W.c8,W.fe)
s(W.cV,W.f_)
r(P.de,[W.fb,W.at,W.ag,P.er])
s(W.hS,W.hV)
s(W.fp,W.fo)
s(W.bn,W.fp)
s(W.ar,W.e)
r(W.ar,[W.b9,W.a1,W.aZ])
s(W.fv,W.fu)
s(W.dl,W.fv)
s(W.ck,W.a1)
s(W.fE,W.fD)
s(W.f4,W.fE)
s(W.fL,W.fK)
s(W.fd,W.fL)
s(W.dz,W.cW)
s(W.fN,W.fM)
s(W.dL,W.fN)
s(W.fi,W.fa)
s(P.ei,P.dq)
r(P.ei,[W.fj,P.ec])
s(W.as,W.bf)
s(W.dA,P.a2)
s(W.fC,W.dT)
r(P.Q,[P.ay,P.dH])
s(P.v,P.dH)
s(P.bq,P.fx)
s(P.cn,P.j)
r(Z.b2,[Z.fF,Z.ft,Z.fw])
r(U.aE,[U.ci,U.cp,U.b6])
r(U.ci,[U.d6,U.cm])
r(U.h3,[U.ai,U.aw])
s(U.cX,Z.ea)
s(U.eo,Z.ed)
r(U.c6,[U.eS,U.eM])
r(U.bT,[U.ee,U.bF,U.eE,U.eF])
t(H.dM,P.l)
t(H.dN,H.V)
t(H.dO,P.l)
t(H.dP,H.V)
t(P.dJ,P.l)
t(P.dS,P.aP)
t(P.cE,P.e1)
t(W.fe,W.hC)
t(W.fo,P.l)
t(W.fp,W.a0)
t(W.fu,P.l)
t(W.fv,W.a0)
t(W.fD,P.l)
t(W.fE,W.a0)
t(W.fK,P.l)
t(W.fL,W.a0)
t(W.fM,P.l)
t(W.fN,W.a0)
t(P.dH,P.l)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{d:"int",ah:"double",Z:"num",c:"String",w:"bool",u:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","u()","u(a1)","u(e)","~(ap)","@(@)","u(ap)","~(a1)","w(ap)","u(aZ)","w(a1)","~(bL)","u(Q)","~(~())","u(c)","u(p)","~(p)","d(d,d)","~(Q)","w(p)","w(c)","c(c)","Q(@)","u(@,@)","ax<~>(a2<@>)","u(@)","w(aJ)","w(p,c,c,bY)","w(w)","~(C[am])","~(C)","w(k)","w(ak)","c(d)","w(@)","@(@,c)","p(k)","c(p)","@(c)","~(Z)","w(ba)","~(ba)","u(b9)","d(R)","u(Z)","~(b2)","u(@[am])","d(aw)","~(v<@>)","u(~())","a3<@>(@)","~(aq)","@(e)","v<@>(@)","o<R>(aJ)","o<R>(ai)","ay(@)","~(e)","d(ai)","d(ai,ai)","d(aJ)","u(w)","u(v<@>)","u(c,@)","u(aQ,@)","~(k,k)","C(@)","d(o<R>,o<R>)","~(c,c,c,ay)","~(c,c,ay)","c(c,ay)","c()","w(al<c>)","~(@,am)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.p0(v.typeUniverse,JSON.parse('{"aW":"bp","eT":"bp","br":"bp","qc":"e","qp":"e","qb":"j","qs":"j","qd":"i","qw":"i","qt":"k","qo":"k","qK":"a1","qi":"ar","qn":"b_","qh":"aU","qz":"aU","qu":"bn","qq":"bG","qj":"H","qy":"bP","qx":"bQ","ev":{"w":[]},"d8":{"u":[]},"bp":{"aV":[]},"E":{"o":["1"],"n":["1"],"f":["1"]},"im":{"E":["1"],"o":["1"],"n":["1"],"f":["1"]},"av":{"S":["1"]},"bo":{"ah":[],"Z":[]},"d7":{"d":[],"ah":[],"Z":[]},"ew":{"ah":[],"Z":[]},"b8":{"c":[],"eR":[]},"n":{"f":["1"]},"a7":{"n":["1"],"f":["1"]},"dt":{"a7":["1"],"n":["1"],"f":["1"],"a7.E":"1","f.E":"1"},"W":{"S":["1"]},"az":{"f":["2"],"f.E":"2"},"aN":{"az":["1","2"],"n":["2"],"f":["2"],"f.E":"2"},"a4":{"S":["2"]},"N":{"a7":["2"],"n":["2"],"f":["2"],"a7.E":"2","f.E":"2"},"ab":{"f":["1"],"f.E":"1"},"bW":{"S":["1"]},"bV":{"f":["1"],"f.E":"1"},"d_":{"bV":["1"],"n":["1"],"f":["1"],"f.E":"1"},"dv":{"S":["1"]},"bU":{"f":["1"],"f.E":"1"},"cZ":{"bU":["1"],"n":["1"],"f":["1"],"f.E":"1"},"dr":{"S":["1"]},"bN":{"n":["1"],"f":["1"],"f.E":"1"},"d1":{"S":["1"]},"ct":{"aQ":[]},"cT":{"dw":["1","2"],"cE":["1","2"],"ch":["1","2"],"e1":["1","2"],"aj":["1","2"]},"cS":{"aj":["1","2"]},"cU":{"cS":["1","2"],"aj":["1","2"]},"dx":{"f":["1"],"f.E":"1"},"ex":{"lz":[]},"eO":{"K":[]},"ez":{"K":[]},"f6":{"K":[]},"dU":{"am":[]},"bI":{"aV":[]},"f2":{"aV":[]},"eW":{"aV":[]},"c4":{"aV":[]},"eU":{"K":[]},"f8":{"K":[]},"a6":{"lD":["1","2"],"T":["1","2"],"aj":["1","2"],"T.K":"1","T.V":"2"},"aa":{"n":["1"],"f":["1"],"f.E":"1"},"dc":{"S":["1"]},"ey":{"eR":[]},"eZ":{"dg":[]},"jD":{"S":["dg"]},"bQ":{"aR":[]},"di":{"a_":["@"],"aR":[]},"bP":{"l":["ah"],"a_":["@"],"o":["ah"],"n":["ah"],"V":["ah"],"aR":[],"f":["ah"],"l.E":"ah","V.E":"ah"},"dj":{"l":["d"],"o":["d"],"a_":["@"],"n":["d"],"V":["d"],"aR":[],"f":["d"]},"eG":{"l":["d"],"o":["d"],"a_":["@"],"n":["d"],"V":["d"],"aR":[],"f":["d"],"l.E":"d","V.E":"d"},"eH":{"l":["d"],"o":["d"],"a_":["@"],"n":["d"],"V":["d"],"aR":[],"f":["d"],"l.E":"d","V.E":"d"},"eI":{"l":["d"],"o":["d"],"a_":["@"],"n":["d"],"V":["d"],"aR":[],"f":["d"],"l.E":"d","V.E":"d"},"eJ":{"l":["d"],"o":["d"],"a_":["@"],"n":["d"],"V":["d"],"aR":[],"f":["d"],"l.E":"d","V.E":"d"},"eK":{"l":["d"],"o":["d"],"a_":["@"],"n":["d"],"V":["d"],"aR":[],"f":["d"],"l.E":"d","V.E":"d"},"dk":{"l":["d"],"o":["d"],"a_":["@"],"n":["d"],"V":["d"],"aR":[],"f":["d"],"l.E":"d","V.E":"d"},"eL":{"l":["d"],"o":["d"],"a_":["@"],"n":["d"],"V":["d"],"aR":[],"f":["d"],"l.E":"d","V.E":"d"},"fk":{"K":[]},"dZ":{"K":[]},"ac":{"cx":["1"],"cD":["1"],"U":["1"],"U.T":"1"},"b0":{"cy":["1"],"O":["1"],"bd":["1"],"be":["1"],"a2":["1"],"O.T":"1"},"bt":{"eX":["1"],"bd":["1"],"be":["1"],"m3":["1"]},"dX":{"bt":["1"],"eX":["1"],"bd":["1"],"be":["1"],"m3":["1"]},"dY":{"fc":["1"]},"a3":{"ax":["1"]},"cx":{"cD":["1"],"U":["1"]},"cy":{"O":["1"],"bd":["1"],"be":["1"],"a2":["1"]},"O":{"bd":["1"],"be":["1"],"a2":["1"],"O.T":"1"},"cD":{"U":["1"]},"dy":{"bu":["1"]},"fh":{"bu":["@"]},"fg":{"bu":["@"]},"dV":{"dQ":["1"]},"cz":{"a2":["1"]},"dB":{"U":["2"]},"cB":{"O":["2"],"bd":["2"],"be":["2"],"a2":["2"],"O.T":"2"},"dK":{"dB":["1","2"],"U":["2"],"U.T":"2"},"cO":{"K":[]},"fJ":{"lT":[]},"fy":{"lT":[]},"dC":{"T":["1","2"],"aj":["1","2"]},"dF":{"dC":["1","2"],"T":["1","2"],"aj":["1","2"],"T.K":"1","T.V":"2"},"dD":{"n":["1"],"f":["1"],"f.E":"1"},"dE":{"S":["1"]},"dI":{"dR":["1"],"al":["1"],"n":["1"],"f":["1"]},"bZ":{"S":["1"]},"de":{"l":["1"],"o":["1"],"n":["1"],"f":["1"]},"df":{"T":["1","2"],"aj":["1","2"]},"T":{"aj":["1","2"]},"ch":{"aj":["1","2"]},"dw":{"cE":["1","2"],"ch":["1","2"],"e1":["1","2"],"aj":["1","2"]},"dq":{"aP":["1"],"al":["1"],"n":["1"],"f":["1"]},"dR":{"al":["1"],"n":["1"],"f":["1"]},"fq":{"T":["c","@"],"aj":["c","@"],"T.K":"c","T.V":"@"},"fr":{"a7":["c"],"n":["c"],"f":["c"],"a7.E":"c","f.E":"c"},"cc":{"c7":["c","c"]},"da":{"K":[]},"eA":{"K":[]},"eC":{"c7":["C","c"]},"eB":{"c7":["c","C"]},"ah":{"Z":[]},"cN":{"K":[]},"eP":{"K":[]},"aD":{"K":[]},"dn":{"K":[]},"et":{"K":[]},"eN":{"K":[]},"f7":{"K":[]},"f5":{"K":[]},"aY":{"K":[]},"eh":{"K":[]},"eQ":{"K":[]},"ds":{"K":[]},"ej":{"K":[]},"fl":{"hW":[]},"d3":{"hW":[]},"d":{"Z":[]},"o":{"n":["1"],"f":["1"]},"al":{"n":["1"],"f":["1"]},"fA":{"am":[]},"c":{"eR":[]},"aA":{"ok":[]},"i":{"p":[],"k":[],"D":[]},"c1":{"i":[],"p":[],"k":[],"D":[]},"eb":{"i":[],"p":[],"k":[],"D":[]},"c2":{"i":[],"p":[],"k":[],"D":[]},"bH":{"i":[],"p":[],"k":[],"D":[]},"c5":{"i":[],"p":[],"k":[],"D":[]},"aU":{"k":[],"D":[]},"bK":{"i":[],"p":[],"k":[],"D":[]},"cW":{"bq":["Z"]},"fb":{"l":["p"],"o":["p"],"n":["p"],"f":["p"],"l.E":"p"},"at":{"lu":["1"],"l":["1"],"o":["1"],"n":["1"],"f":["1"],"l.E":"1"},"p":{"k":[],"D":[]},"es":{"i":[],"p":[],"k":[],"D":[]},"bn":{"a0":["k"],"l":["k"],"o":["k"],"a_":["k"],"n":["k"],"f":["k"],"a0.E":"k","l.E":"k"},"cd":{"i":[],"p":[],"k":[],"D":[]},"b9":{"ar":[],"e":[]},"a1":{"ar":[],"e":[]},"ag":{"l":["k"],"o":["k"],"n":["k"],"f":["k"],"l.E":"k"},"k":{"D":[]},"dl":{"a0":["k"],"l":["k"],"o":["k"],"a_":["k"],"n":["k"],"f":["k"],"a0.E":"k","l.E":"k"},"cj":{"i":[],"p":[],"k":[],"D":[]},"ck":{"a1":[],"ar":[],"e":[]},"co":{"i":[],"p":[],"k":[],"D":[]},"cs":{"i":[],"p":[],"k":[],"D":[]},"du":{"i":[],"p":[],"k":[],"D":[]},"f0":{"i":[],"p":[],"k":[],"D":[]},"f1":{"i":[],"p":[],"k":[],"D":[]},"cu":{"i":[],"p":[],"k":[],"D":[]},"cv":{"i":[],"p":[],"k":[],"D":[]},"aZ":{"ar":[],"e":[]},"f4":{"a0":["aB"],"l":["aB"],"o":["aB"],"a_":["aB"],"n":["aB"],"f":["aB"],"a0.E":"aB","l.E":"aB"},"ar":{"e":[]},"bs":{"iT":[],"D":[]},"b_":{"D":[]},"cw":{"k":[],"D":[]},"fd":{"a0":["H"],"l":["H"],"o":["H"],"a_":["H"],"n":["H"],"f":["H"],"a0.E":"H","l.E":"H"},"dz":{"bq":["Z"]},"dL":{"a0":["k"],"l":["k"],"o":["k"],"a_":["k"],"n":["k"],"f":["k"],"a0.E":"k","l.E":"k"},"fa":{"T":["c","c"],"aj":["c","c"]},"fi":{"T":["c","c"],"aj":["c","c"],"T.K":"c","T.V":"c"},"fj":{"aP":["c"],"al":["c"],"n":["c"],"f":["c"],"aP.E":"c"},"bf":{"U":["1"],"U.T":"1"},"as":{"bf":["1"],"U":["1"],"U.T":"1"},"b1":{"U":["1"],"U.T":"1"},"dA":{"a2":["1"]},"bY":{"ak":[]},"dm":{"ak":[]},"dT":{"ak":[]},"fC":{"ak":[]},"fB":{"ak":[]},"bO":{"S":["1"]},"ff":{"iT":[],"D":[]},"fz":{"op":[]},"e2":{"nX":[]},"ei":{"aP":["c"],"al":["c"],"n":["c"],"f":["c"]},"er":{"l":["p"],"o":["p"],"n":["p"],"f":["p"],"l.E":"p"},"ay":{"Q":[]},"v":{"l":["1"],"o":["1"],"n":["1"],"Q":[],"f":["1"],"l.E":"1"},"bq":{"fx":["1"]},"cn":{"j":[],"p":[],"k":[],"D":[]},"ec":{"aP":["c"],"al":["c"],"n":["c"],"f":["c"],"aP.E":"c"},"j":{"p":[],"k":[],"D":[]},"fF":{"b2":[]},"ft":{"b2":[]},"fw":{"b2":[]},"ci":{"aE":["@"]},"d6":{"aE":["@"]},"cm":{"aE":["@"]},"cp":{"aE":["@"]},"b6":{"aE":["@"]},"cX":{"ea":[]},"eo":{"ed":[]},"eS":{"c6":[]},"eM":{"c6":[]},"ee":{"bT":[]},"bF":{"bT":[]},"eE":{"bT":[]},"eF":{"bT":[]}}'))
H.p_(v.typeUniverse,JSON.parse('{"n":1,"eY":2,"de":1,"df":2,"dq":1,"dJ":1,"dS":1,"eg":2,"cg":2,"dH":1,"aE":1}'))
var u=(function rtii(){var t=H.e7
return{gu:t("@<@>"),n:t("cO"),cR:t("c2"),fK:t("bG"),bz:t("R"),a4:t("bH"),hb:t("c5"),W:t("ai"),ds:t("aw"),gF:t("cT<aQ,@>"),g5:t("H"),af:t("cV"),d:t("bK"),D:t("bL"),k:t("ap"),fu:t("bM"),X:t("n<@>"),h:t("p"),fN:t("lu<p>"),bU:t("K"),B:t("e"),aS:t("D"),g8:t("hW"),gI:t("aq"),Z:t("aV"),ef:t("ax<u>"),b9:t("ax<@>"),aQ:t("i"),gb:t("d5"),p:t("cd"),Y:t("lz"),i:t("f<R>"),eh:t("f<k>"),fP:t("f<C>"),cs:t("f<c>"),R:t("f<@>"),u:t("E<R>"),cM:t("E<ai>"),e:t("E<aw>"),ge:t("E<p>"),G:t("E<aq>"),ga:t("E<d2>"),c3:t("E<Q>"),eO:t("E<ak>"),eD:t("E<ba>"),dk:t("E<aJ>"),w:t("E<a2<@>>"),s:t("E<c>"),f7:t("E<b2>"),cO:t("E<@>"),cj:t("aW"),aU:t("a_<@>"),gB:t("v<c>"),F:t("v<@>"),L:t("ay"),bT:t("a6<c,d>"),eo:t("a6<aQ,@>"),aI:t("a6<d,d>"),be:t("a6<d,aE<@>>"),b:t("Q"),dz:t("db"),cf:t("b9"),a:t("o<R>"),al:t("o<aw>"),O:t("o<p>"),cJ:t("o<d2>"),eB:t("o<o<R>>"),dy:t("o<c>"),j:t("o<@>"),f:t("aj<@,@>"),dv:t("N<c,c>"),V:t("a1"),A:t("k"),m:t("ak"),P:t("u"),K:t("C"),fn:t("ba"),fW:t("cj"),H:t("I<Z>"),r:t("ck"),q:t("bq<Z>"),av:t("aI"),ew:t("cn"),d2:t("co"),cq:t("al<c>"),c:t("aJ"),l:t("am"),c6:t("eX<bL>"),g:t("eX<ap>"),b_:t("a2<@>"),N:t("c"),dG:t("c(c)"),bg:t("cs"),g7:t("j"),fo:t("aQ"),aW:t("cu"),t:t("cv"),fY:t("aB"),T:t("aZ"),ak:t("aR"),bI:t("br"),g4:t("bs"),ci:t("iT"),g2:t("b_"),h9:t("cw"),ac:t("ag"),gt:t("bu<@>"),E:t("as<e>"),C:t("as<a1>"),du:t("as<aZ>"),gf:t("b1<a1>"),a1:t("b2"),cw:t("bf<e>"),U:t("at<p>"),x:t("bX<@,@>"),_:t("a3<@>"),fJ:t("a3<d>"),dL:t("a3<Z>"),cr:t("bY"),aH:t("dF<@,@>"),J:t("fs"),bi:t("dY<Z>"),y:t("w"),bN:t("w(C)"),gR:t("ah"),z:t("@"),fO:t("@()"),I:t("@(e)"),v:t("@(C)"),ep:t("@(C,C)"),ag:t("@(C,am)"),ch:t("@(al<c>)"),bc:t("@(@)"),S:t("d"),di:t("Z"),o:t("~"),M:t("~()"),Q:t("~(e)"),dj:t("~(b9)"),a6:t("~(a1)"),d5:t("~(C)"),da:t("~(C,am)"),eA:t("~(c,c)"),cA:t("~(c,@)"),gn:t("~(aZ)"),c4:t("~(Z)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.l=W.c1.prototype
C.m=W.bH.prototype
C.h=W.c8.prototype
C.d=W.bK.prototype
C.H=J.ae.prototype
C.a=J.E.prototype
C.e=J.d7.prototype
C.q=J.d8.prototype
C.b=J.bo.prototype
C.c=J.b8.prototype
C.I=J.aW.prototype
C.v=J.eT.prototype
C.w=W.du.prototype
C.k=J.br.prototype
C.Q=W.bs.prototype
C.x=new H.d1(H.e7("d1<u>"))
C.R=new P.ij()
C.n=function getTagFallback(o) {
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

C.i=new P.iq()
C.E=new P.eQ()
C.F=new P.fg()
C.f=new P.fy()
C.G=new P.fA()
C.p=new P.bM(0)
C.J=new P.eB(null)
C.K=new P.eC(null)
C.L=H.m(t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),u.s)
C.M=H.m(t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),u.s)
C.N=H.m(t([]),u.s)
C.r=H.m(t([]),u.cO)
C.t=H.m(t(["bind","if","ref","repeat","syntax"]),u.s)
C.j=H.m(t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),u.s)
C.O=H.m(t([]),H.e7("E<aQ>"))
C.u=new H.cU(0,{},C.O,H.e7("cU<aQ,@>"))
C.P=new H.ct("call")})();(function staticFields(){$.b4=0
$.cR=null
$.lc=null
$.mx=null
$.mp=null
$.mH=null
$.k0=null
$.k7=null
$.kO=null
$.cG=null
$.e4=null
$.e5=null
$.kJ=!1
$.F=C.f
$.aC=[]
$.bl=null
$.kr=null
$.lw=null
$.lv=null
$.lt=function(){var t=u.N
return P.af(["animationend","webkitAnimationEnd","animationiteration","webkitAnimationIteration","animationstart","webkitAnimationStart","fullscreenchange","webkitfullscreenchange","fullscreenerror","webkitfullscreenerror","keyadded","webkitkeyadded","keyerror","webkitkeyerror","keymessage","webkitkeymessage","needkey","webkitneedkey","pointerlockchange","webkitpointerlockchange","pointerlockerror","webkitpointerlockerror","resourcetimingbufferfull","webkitresourcetimingbufferfull","transitionend","webkitTransitionEnd","speechchange","webkitSpeechChange"],t,t)}()
$.fn=P.ce(u.N,u.Z)
$.li=null
$.lh=null
$.lg=null
$.lj=null
$.lf=null
$.P=null
$.ls=0
$.l6=null
$.fS=!1
$.cA=null
$.lo=null
$.lk=null
$.ll=!1
$.b5=!1
$.em=!1
$.en=!1
$.el=!1
$.lm=null
$.ln=null
$.aL=P.ce(u.N,H.e7("bJ"))})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"qm","kf",function(){return H.kN("_$dart_dartClosure")})
t($,"qv","kX",function(){return H.kN("_$dart_js")})
t($,"qA","mU",function(){return H.bc(H.iL({
toString:function(){return"$receiver$"}}))})
t($,"qB","mV",function(){return H.bc(H.iL({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"qC","mW",function(){return H.bc(H.iL(null))})
t($,"qD","mX",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"qG","n_",function(){return H.bc(H.iL(void 0))})
t($,"qH","n0",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"qF","mZ",function(){return H.bc(H.lQ(null))})
t($,"qE","mY",function(){return H.bc(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"qJ","n2",function(){return H.bc(H.lQ(void 0))})
t($,"qI","n1",function(){return H.bc(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"qL","kY",function(){return P.oC()})
t($,"qr","fP",function(){var s=new P.a3(C.f,H.e7("a3<u>"))
s.fb(null)
return s})
t($,"qU","n8",function(){return new Error().stack!=void 0})
t($,"ql","mT",function(){return{}})
t($,"qR","n7",function(){return P.lE(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
t($,"qk","mS",function(){return P.oa("^\\S+$")})
t($,"qS","fQ",function(){return u.b.a(P.by(self))})
t($,"qM","kZ",function(){return H.kN("_$dart_dartObject")})
t($,"qT","l_",function(){return function DartObject(a){this.o=a}})
t($,"qO","n4",function(){return W.hU("_customDragEnter",u.V)})
t($,"qQ","n6",function(){return W.hU("_customDragOver",u.V)})
t($,"qP","n5",function(){return W.hU("_customDragLeave",u.V)})
t($,"qN","n3",function(){return W.hU("_customDrop",u.V)})
t($,"qg","kW",function(){var s=U.ko()
s.a="#bb5555"
return s})
t($,"qf","kV",function(){var s=U.ko()
s.a="#8899aa"
return s})
t($,"qe","kU",function(){var s=U.ko()
s.a="#9977aa"
return s})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ae,DOMImplementation:J.ae,MediaError:J.ae,Navigator:J.ae,NavigatorConcurrentHardware:J.ae,NavigatorUserMediaError:J.ae,OverconstrainedError:J.ae,PositionError:J.ae,Range:J.ae,Selection:J.ae,SQLError:J.ae,DataView:H.bQ,ArrayBufferView:H.bQ,Float32Array:H.bP,Float64Array:H.bP,Int16Array:H.eG,Int32Array:H.eH,Int8Array:H.eI,Uint16Array:H.eJ,Uint32Array:H.eK,Uint8ClampedArray:H.dk,CanvasPixelArray:H.dk,Uint8Array:H.eL,HTMLAudioElement:W.i,HTMLBRElement:W.i,HTMLCanvasElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLImageElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMediaElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLVideoElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,HTMLAnchorElement:W.c1,HTMLAreaElement:W.eb,HTMLBaseElement:W.c2,Blob:W.bG,File:W.bG,HTMLBodyElement:W.bH,HTMLButtonElement:W.c5,CDATASection:W.aU,CharacterData:W.aU,Comment:W.aU,ProcessingInstruction:W.aU,Text:W.aU,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.c8,MSStyleCSSProperties:W.c8,CSS2Properties:W.c8,CSSStyleSheet:W.cV,HTMLDivElement:W.bK,DOMException:W.hD,DOMRectReadOnly:W.cW,DOMTokenList:W.hE,Element:W.p,AbortPaymentEvent:W.e,AnimationEvent:W.e,AnimationPlaybackEvent:W.e,ApplicationCacheErrorEvent:W.e,BackgroundFetchClickEvent:W.e,BackgroundFetchEvent:W.e,BackgroundFetchFailEvent:W.e,BackgroundFetchedEvent:W.e,BeforeInstallPromptEvent:W.e,BeforeUnloadEvent:W.e,BlobEvent:W.e,CanMakePaymentEvent:W.e,ClipboardEvent:W.e,CloseEvent:W.e,CustomEvent:W.e,DeviceMotionEvent:W.e,DeviceOrientationEvent:W.e,ErrorEvent:W.e,ExtendableEvent:W.e,ExtendableMessageEvent:W.e,FetchEvent:W.e,FontFaceSetLoadEvent:W.e,ForeignFetchEvent:W.e,GamepadEvent:W.e,HashChangeEvent:W.e,InstallEvent:W.e,MediaEncryptedEvent:W.e,MediaKeyMessageEvent:W.e,MediaQueryListEvent:W.e,MediaStreamEvent:W.e,MediaStreamTrackEvent:W.e,MessageEvent:W.e,MIDIConnectionEvent:W.e,MIDIMessageEvent:W.e,MutationEvent:W.e,NotificationEvent:W.e,PageTransitionEvent:W.e,PaymentRequestEvent:W.e,PaymentRequestUpdateEvent:W.e,PopStateEvent:W.e,PresentationConnectionAvailableEvent:W.e,PresentationConnectionCloseEvent:W.e,ProgressEvent:W.e,PromiseRejectionEvent:W.e,PushEvent:W.e,RTCDataChannelEvent:W.e,RTCDTMFToneChangeEvent:W.e,RTCPeerConnectionIceEvent:W.e,RTCTrackEvent:W.e,SecurityPolicyViolationEvent:W.e,SensorErrorEvent:W.e,SpeechRecognitionError:W.e,SpeechRecognitionEvent:W.e,SpeechSynthesisEvent:W.e,StorageEvent:W.e,SyncEvent:W.e,TrackEvent:W.e,TransitionEvent:W.e,WebKitTransitionEvent:W.e,VRDeviceEvent:W.e,VRDisplayEvent:W.e,VRSessionEvent:W.e,MojoInterfaceRequestEvent:W.e,ResourceProgressEvent:W.e,USBConnectionEvent:W.e,IDBVersionChangeEvent:W.e,AudioProcessingEvent:W.e,OfflineAudioCompletionEvent:W.e,WebGLContextEvent:W.e,Event:W.e,InputEvent:W.e,SubmitEvent:W.e,EventTarget:W.D,HTMLFormElement:W.es,HTMLCollection:W.bn,HTMLFormControlsCollection:W.bn,HTMLOptionsCollection:W.bn,ImageData:W.d5,HTMLInputElement:W.cd,KeyboardEvent:W.b9,Location:W.eD,WheelEvent:W.a1,MouseEvent:W.a1,DragEvent:W.a1,Document:W.k,DocumentFragment:W.k,HTMLDocument:W.k,ShadowRoot:W.k,XMLDocument:W.k,DocumentType:W.k,Node:W.k,NodeList:W.dl,RadioNodeList:W.dl,HTMLOptionElement:W.cj,PointerEvent:W.ck,HTMLSelectElement:W.co,HTMLStyleElement:W.cs,StyleSheet:W.f_,HTMLTableElement:W.du,HTMLTableRowElement:W.f0,HTMLTableSectionElement:W.f1,HTMLTemplateElement:W.cu,HTMLTextAreaElement:W.cv,Touch:W.aB,TouchEvent:W.aZ,TouchList:W.f4,CompositionEvent:W.ar,FocusEvent:W.ar,TextEvent:W.ar,UIEvent:W.ar,Window:W.bs,DOMWindow:W.bs,DedicatedWorkerGlobalScope:W.b_,ServiceWorkerGlobalScope:W.b_,SharedWorkerGlobalScope:W.b_,WorkerGlobalScope:W.b_,Attr:W.cw,CSSRuleList:W.fd,ClientRect:W.dz,DOMRect:W.dz,NamedNodeMap:W.dL,MozNamedAttrMap:W.dL,IDBKeyRange:P.db,SVGScriptElement:P.cn,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,Selection:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:true,File:true,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleSheet:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,WheelEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLOptionElement:true,PointerEvent:true,HTMLSelectElement:true,HTMLStyleElement:true,StyleSheet:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,IDBKeyRange:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})
H.di.$nativeSuperclassTag="ArrayBufferView"
H.dM.$nativeSuperclassTag="ArrayBufferView"
H.dN.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.dO.$nativeSuperclassTag="ArrayBufferView"
H.dP.$nativeSuperclassTag="ArrayBufferView"
H.dj.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.mB,[])
else U.mB([])})})()
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

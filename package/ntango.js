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
a[c]=function(){a[c]=function(){H.qk(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.kY(this,a,b,c,true,false,e).prototype
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
if(w[t][a])return w[t][a]}}var C={},H={kF:function kF(){},
al:function(a,b,c,d){P.aZ(b,"start")
if(c!=null){P.aZ(c,"end")
if(typeof b!=="number")return b.L()
if(b>c)H.D(P.ab(b,0,c,"start",null))}return new H.dz(a,b,c,d.i("dz<0>"))},
lP:function(a,b,c,d){if(u.X.b(a))return new H.aX(a,b,c.i("@<0>").q(d).i("aX<1,2>"))
return new H.aG(a,b,c.i("@<0>").q(d).i("aG<1,2>"))},
ou:function(a,b,c){var t="takeCount"
P.bd(b,t,u.S)
P.aZ(b,t)
if(u.X.b(a))return new H.d9(a,b,c.i("d9<0>"))
return new H.c3(a,b,c.i("c3<0>"))},
oo:function(a,b,c){var t="count"
if(u.X.b(a)){P.bd(b,t,u.S)
P.aZ(b,t)
return new H.d8(a,b,c.i("d8<0>"))}P.bd(b,t,u.S)
P.aZ(b,t)
return new H.c2(a,b,c.i("c2<0>"))},
cl:function(){return new P.b6("No element")},
nZ:function(){return new P.b6("Too many elements")},
lJ:function(){return new P.b6("Too few elements")},
or:function(a,b,c){H.f3(a,0,J.ad(a)-1,b,c)},
f3:function(a,b,c,d,e){if(c-b<=32)H.oq(a,b,c,d,e)
else H.op(a,b,c,d,e)},
oq:function(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.au(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.L()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
op:function(a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i=C.e.az(a6-a5+1,6),h=a5+i,g=a6-i,f=C.e.az(a5+a6,2),e=f-i,d=f+i,c=J.au(a4),b=c.h(a4,h),a=c.h(a4,e),a0=c.h(a4,f),a1=c.h(a4,d),a2=c.h(a4,g),a3=a7.$2(b,a)
if(typeof a3!=="number")return a3.L()
if(a3>0){t=a
a=b
b=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.L()
if(a3>0){t=a2
a2=a1
a1=t}a3=a7.$2(b,a0)
if(typeof a3!=="number")return a3.L()
if(a3>0){t=a0
a0=b
b=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.L()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(b,a1)
if(typeof a3!=="number")return a3.L()
if(a3>0){t=a1
a1=b
b=t}a3=a7.$2(a0,a1)
if(typeof a3!=="number")return a3.L()
if(a3>0){t=a1
a1=a0
a0=t}a3=a7.$2(a,a2)
if(typeof a3!=="number")return a3.L()
if(a3>0){t=a2
a2=a
a=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.L()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.L()
if(a3>0){t=a2
a2=a1
a1=t}c.j(a4,h,b)
c.j(a4,f,a0)
c.j(a4,g,a2)
c.j(a4,e,c.h(a4,a5))
c.j(a4,d,c.h(a4,a6))
s=a5+1
r=a6-1
if(J.bK(a7.$2(a,a1),0)){for(q=s;q<=r;++q){p=c.h(a4,q)
o=a7.$2(p,a)
if(o===0)continue
if(typeof o!=="number")return o.ai()
if(o<0){if(q!==s){c.j(a4,q,c.h(a4,s))
c.j(a4,s,p)}++s}else for(;!0;){o=a7.$2(c.h(a4,r),a)
if(typeof o!=="number")return o.L()
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
if(typeof k!=="number")return k.ai()
if(k<0){if(q!==s){c.j(a4,q,c.h(a4,s))
c.j(a4,s,p)}++s}else{j=a7.$2(p,a1)
if(typeof j!=="number")return j.L()
if(j>0)for(;!0;){o=a7.$2(c.h(a4,r),a1)
if(typeof o!=="number")return o.L()
if(o>0){--r
if(r<q)break
continue}else{o=a7.$2(c.h(a4,r),a)
if(typeof o!=="number")return o.ai()
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
H.f3(a4,a5,s-2,a7,a8)
H.f3(a4,r+2,a6,a7,a8)
if(l)return
if(s<h&&r>g){for(;J.bK(a7.$2(c.h(a4,s),a),0);)++s
for(;J.bK(a7.$2(c.h(a4,r),a1),0);)--r
for(q=s;q<=r;++q){p=c.h(a4,q)
if(a7.$2(p,a)===0){if(q!==s){c.j(a4,q,c.h(a4,s))
c.j(a4,s,p)}++s}else if(a7.$2(p,a1)===0)for(;!0;)if(a7.$2(c.h(a4,r),a1)===0){--r
if(r<q)break
continue}else{o=a7.$2(c.h(a4,r),a)
if(typeof o!=="number")return o.ai()
n=r-1
if(o<0){c.j(a4,q,c.h(a4,s))
m=s+1
c.j(a4,s,c.h(a4,r))
c.j(a4,r,p)
s=m}else{c.j(a4,q,c.h(a4,r))
c.j(a4,r,p)}r=n
break}}H.f3(a4,s,r,a7,a8)}else H.f3(a4,s,r,a7,a8)},
n:function n(){},
aa:function aa(){},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
N:function N(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aG:function aG(a,b,c){this.a=a
this.b=b
this.$ti=c},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
a6:function a6(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
T:function T(a,b,c){this.a=a
this.b=b
this.$ti=c},
af:function af(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(a,b,c){this.a=a
this.b=b
this.$ti=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.$ti=c},
dB:function dB(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.$ti=c},
dx:function dx(a,b,c){this.a=a
this.b=b
this.$ti=c},
bT:function bT(a){this.$ti=a},
db:function db(a){this.$ti=a},
Q:function Q(){},
cA:function cA(a){this.a=a},
nP:function(){throw H.b(P.x("Cannot modify unmodifiable Map"))},
n2:function(a){var t,s=H.n1(a)
if(typeof s=="string")return s
t="minified:"+a
return t},
pX:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.aU.b(a)},
a:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.z(a)
if(typeof t!="string")throw H.b(H.bb(a))
return t},
c0:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
lV:function(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return H.o(s,3)
t=H.r(s[3])
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
oi:function(a){var t,s
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
t=parseFloat(a)
if(isNaN(t)){s=C.d.aG(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return null}return t},
iP:function(a){var t=H.o9(a)
return t},
o9:function(a){var t,s,r
if(a instanceof P.E)return H.aA(H.X(a),null)
if(J.bG(a)===C.H||u.bJ.b(a)){t=C.n(a)
if(H.lU(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.lU(r))return r}}return H.aA(H.X(a),null)},
lU:function(a){var t=a!=="Object"&&a!==""
return t},
aP:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.e.bY(t,10))>>>0,56320|t&1023)}throw H.b(P.ab(a,0,1114111,null,null))},
c_:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oh:function(a){var t=H.c_(a).getFullYear()+0
return t},
of:function(a){var t=H.c_(a).getMonth()+1
return t},
ob:function(a){var t=H.c_(a).getDate()+0
return t},
oc:function(a){var t=H.c_(a).getHours()+0
return t},
oe:function(a){var t=H.c_(a).getMinutes()+0
return t},
og:function(a){var t=H.c_(a).getSeconds()+0
return t},
od:function(a){var t=H.c_(a).getMilliseconds()+0
return t},
cs:function(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
C.a.M(t,b)
r.b=""
if(c!=null&&c.a!==0)c.t(0,new H.iO(r,s,t))
""+r.a
return J.nA(a,new H.eI(C.Q,0,t,s,0))},
oa:function(a,b,c){var t,s,r,q
if(b instanceof Array)t=c==null||c.a===0
else t=!1
if(t){s=b
r=s.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(s[0])}else if(r===2){if(!!a.$2)return a.$2(s[0],s[1])}else if(r===3){if(!!a.$3)return a.$3(s[0],s[1],s[2])}else if(r===4){if(!!a.$4)return a.$4(s[0],s[1],s[2],s[3])}else if(r===5)if(!!a.$5)return a.$5(s[0],s[1],s[2],s[3],s[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,s)}return H.o8(a,b,c)},
o8:function(a,b,c){var t,s,r,q,p,o,n,m,l,k=b instanceof Array?b:P.cm(b,!0,u.z),j=k.length,i=a.$R
if(j<i)return H.cs(a,k,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.bG(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return H.cs(a,k,c)
if(j===i)return p.apply(a,k)
return H.cs(a,k,c)}if(r instanceof Array){if(c!=null&&c.a!==0)return H.cs(a,k,c)
if(j>i+r.length)return H.cs(a,k,null)
C.a.M(k,r.slice(j-i))
return p.apply(a,k)}else{if(j>i)return H.cs(a,k,c)
o=Object.keys(r)
if(c==null)for(s=o.length,n=0;n<o.length;o.length===s||(0,H.B)(o),++n)C.a.l(k,r[H.r(o[n])])
else{for(s=o.length,m=0,n=0;n<o.length;o.length===s||(0,H.B)(o),++n){l=H.r(o[n])
if(c.I(l)){++m
C.a.l(k,c.h(0,l))}else C.a.l(k,r[l])}if(m!==c.a)return H.cs(a,k,c)}return p.apply(a,k)}},
a0:function(a){throw H.b(H.bb(a))},
o:function(a,b){if(a==null)J.ad(a)
throw H.b(H.bF(a,b))},
bF:function(a,b){var t,s,r="index"
if(!H.cN(b))return new P.aK(!0,b,r,null)
t=H.q(J.ad(a))
if(!(b<0)){if(typeof t!=="number")return H.a0(t)
s=b>=t}else s=!0
if(s)return P.bf(b,a,r,null,t)
return P.cu(b,r)},
bb:function(a){return new P.aK(!0,a,null,null)},
b:function(a){var t
if(a==null)a=new P.eZ()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.n0})
t.name=""}else t.toString=H.n0
return t},
n0:function(){return J.z(this.dartException)},
D:function(a){throw H.b(a)},
B:function(a){throw H.b(P.aN(a))},
bj:function(a){var t,s,r,q,p,o
a=H.mT(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.h([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.j0(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
j1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
m_:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
lT:function(a,b){return new H.eY(a,b==null?null:b.method)},
kG:function(a,b){var t=b==null,s=t?null:b.method
return new H.eK(a,s,t?null:b.receiver)},
L:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new H.kt(a)
if(a==null)return f
if(typeof a!=="object")return a
if("dartException" in a)return e.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.bY(s,16)&8191)===10)switch(r){case 438:return e.$1(H.kG(H.a(t)+" (Error "+r+")",f))
case 445:case 5007:return e.$1(H.lT(H.a(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.n5()
p=$.n6()
o=$.n7()
n=$.n8()
m=$.nb()
l=$.nc()
k=$.na()
$.n9()
j=$.ne()
i=$.nd()
h=q.a1(t)
if(h!=null)return e.$1(H.kG(H.r(t),h))
else{h=p.a1(t)
if(h!=null){h.method="call"
return e.$1(H.kG(H.r(t),h))}else{h=o.a1(t)
if(h==null){h=n.a1(t)
if(h==null){h=m.a1(t)
if(h==null){h=l.a1(t)
if(h==null){h=k.a1(t)
if(h==null){h=n.a1(t)
if(h==null){h=j.a1(t)
if(h==null){h=i.a1(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return e.$1(H.lT(H.r(t),h))}}return e.$1(new H.ff(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.dy()
t=function(b){try{return String(b)}catch(d){}return null}(a)
return e.$1(new P.aK(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.dy()
return a},
aV:function(a){var t
if(a==null)return new H.e_(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.e_(a)},
mQ:function(a){if(a==null||typeof a!='object')return J.ac(a)
else return H.c0(a)},
pO:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.j(0,a[t],a[s])}return b},
pW:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.bU("Unsupported number of arguments for wrapped closure"))},
cS:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pW)
a.$identity=t
return t},
nO:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.f4().constructor.prototype):Object.create(new H.cd(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.be
if(typeof s!=="number")return s.v()
$.be=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}i.constructor=t
t.prototype=i
if(!e){r=H.lp(a,k,f)
r.$reflectionInfo=d}else{i.$static_name=g
r=k}q=H.nK(d,e,f)
i.$S=q
i[j]=r
for(p=r,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lp(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return t},
nK:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mH,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
t=c?H.nI:H.nH
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.b("Error in functionType of tearoff")},
nL:function(a,b,c,d){var t=H.ln
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
lp:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.nN(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.nL(s,!q,t,b)
if(s===0){q=$.be
if(typeof q!=="number")return q.v()
$.be=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.cZ
return new Function(q+H.a(p==null?$.cZ=H.ho("self"):p)+";return "+o+"."+H.a(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.be
if(typeof q!=="number")return q.v()
$.be=q+1
n+=q
q="return function("+n+"){return this."
p=$.cZ
return new Function(q+H.a(p==null?$.cZ=H.ho("self"):p)+"."+H.a(t)+"("+n+");}")()},
nM:function(a,b,c,d){var t=H.ln,s=H.nJ
switch(b?-1:a){case 0:throw H.b(H.om("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
nN:function(a,b){var t,s,r,q,p,o,n,m=$.cZ
if(m==null)m=$.cZ=H.ho("self")
t=$.lm
if(t==null)t=$.lm=H.ho("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nM(r,!p,s,b)
if(r===1){m="return function(){return this."+H.a(m)+"."+H.a(s)+"(this."+H.a(t)+");"
t=$.be
if(typeof t!=="number")return t.v()
$.be=t+1
return new Function(m+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
m="return function("+n+"){return this."+H.a(m)+"."+H.a(s)+"(this."+H.a(t)+", "+n+");"
t=$.be
if(typeof t!=="number")return t.v()
$.be=t+1
return new Function(m+t+"}")()},
kY:function(a,b,c,d,e,f,g){return H.nO(a,b,c,d,!!e,!!f,g)},
nH:function(a,b){return H.fR(v.typeUniverse,H.X(a.a),b)},
nI:function(a,b){return H.fR(v.typeUniverse,H.X(a.c),b)},
ln:function(a){return a.a},
nJ:function(a){return a.c},
ho:function(a){var t,s,r,q=new H.cd("self","target","receiver","name"),p=J.lK(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}},
at:function(a){if(a==null)H.pE("boolean expression must not be null")
return a},
pE:function(a){throw H.b(new H.fh(a))},
qk:function(a){throw H.b(new P.es(a))},
om:function(a){return new H.f2(a)},
l0:function(a){return v.getIsolateTag(a)},
h:function(a,b){a[v.arrayRti]=b
return a},
mF:function(a){if(a==null)return null
return a.$ti},
r7:function(a,b,c){return H.n_(a["$a"+H.a(c)],H.mF(b))},
n_:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return null
if(Array.isArray(a))return a
if(typeof a=="function")return a.apply(null,b)
return b},
r5:function(a,b,c){return a.apply(b,H.n_(J.bG(b)["$a"+H.a(c)],H.mF(b)))},
r6:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
q_:function(a){var t,s,r,q,p=H.r($.mG.$1(a)),o=$.kh[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.kn[p]
if(t!=null)return t
s=v.interceptorsByTag[p]
if(s==null){p=H.r($.my.$2(a,p))
if(p!=null){o=$.kh[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.kn[p]
if(t!=null)return t
s=v.interceptorsByTag[p]}}if(s==null)return null
t=s.prototype
r=p[0]
if(r==="!"){o=H.kq(t)
$.kh[p]=o
Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(r==="~"){$.kn[p]=t
return t}if(r==="-"){q=H.kq(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}if(r==="+")return H.mR(a,t)
if(r==="*")throw H.b(P.j2(p))
if(v.leafTags[p]===true){q=H.kq(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}else return H.mR(a,t)},
mR:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.l2(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
kq:function(a){return J.l2(a,!1,null,!!a.$iZ)},
q0:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.kq(t)
else return J.l2(t,c,null,null)},
pT:function(){if(!0===$.l1)return
$.l1=!0
H.pU()},
pU:function(){var t,s,r,q,p,o,n,m
$.kh=Object.create(null)
$.kn=Object.create(null)
H.pS()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.mS.$1(p)
if(o!=null){n=H.q0(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
pS:function(){var t,s,r,q,p,o,n=C.y()
n=H.cR(C.z,H.cR(C.A,H.cR(C.o,H.cR(C.o,H.cR(C.B,H.cR(C.C,H.cR(C.D(C.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.mG=new H.kk(q)
$.my=new H.kl(p)
$.mS=new H.km(o)},
cR:function(a,b){return a(b)||b},
o6:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.b(P.de("Illegal RegExp pattern ("+String(o)+")",a))},
qg:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
pN:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mT:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l4:function(a,b,c){var t=H.qh(a,b,c)
return t},
qh:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mT(b),'g'),H.pN(c))},
qi:function(a,b,c,d){var t=a.indexOf(b,d)
if(t<0)return a
return H.qj(a,t,t+b.length,c)},
qj:function(a,b,c,d){var t=a.substring(0,b),s=a.substring(c)
return t+d+s},
d2:function d2(a,b){this.a=a
this.$ti=b},
d1:function d1(){},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dD:function dD(a,b){this.a=a
this.$ti=b},
eI:function eI(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eY:function eY(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a){this.a=a},
kt:function kt(a){this.a=a},
e_:function e_(a){this.a=a
this.b=null},
bO:function bO(){},
fb:function fb(){},
f4:function f4(){},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a){this.a=a},
fh:function fh(a){this.a=a},
a9:function a9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iy:function iy(a){this.a=a},
iB:function iB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ap:function ap(a,b){this.a=a
this.$ti=b},
dm:function dm(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
eJ:function eJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f7:function f7(a,b){this.a=a
this.c=b},
jV:function jV(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bn:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bF(b,a))},
bY:function bY(){},
aw:function aw(){},
bv:function bv(){},
aH:function aH(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
dt:function dt(){},
eW:function eW(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
ol:function(a,b){var t=b.c
return t==null?b.c=H.kR(a,b.z,!0):t},
lX:function(a,b){var t=b.c
return t==null?b.c=H.e5(a,"aE",[b.z]):t},
lY:function(a){var t=a.y
if(t===6||t===7||t===8)return H.lY(a.z)
return t===11||t===12},
ok:function(a){return a.cy},
ed:function(a){return H.kS(v.typeUniverse,a,!1)},
bD:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.bD(a,t,c,a0)
if(s===t)return b
return H.mh(a,s,!0)
case 7:t=b.z
s=H.bD(a,t,c,a0)
if(s===t)return b
return H.kR(a,s,!0)
case 8:t=b.z
s=H.bD(a,t,c,a0)
if(s===t)return b
return H.mg(a,s,!0)
case 9:r=b.Q
q=H.ec(a,r,c,a0)
if(q===r)return b
return H.e5(a,b.z,q)
case 10:p=b.z
o=H.bD(a,p,c,a0)
n=b.Q
m=H.ec(a,n,c,a0)
if(o===p&&m===n)return b
return H.kP(a,o,m)
case 11:l=b.z
k=H.bD(a,l,c,a0)
j=b.Q
i=H.pB(a,j,c,a0)
if(k===l&&i===j)return b
return H.mf(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.ec(a,h,c,a0)
p=b.z
o=H.bD(a,p,c,a0)
if(g===h&&o===p)return b
return H.kQ(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.b(P.h4("Attempted to substitute unexpected RTI kind "+d))}},
ec:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.bD(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
pC:function(a,b,c,d){var t,s,r,q,p,o=b.length,n=[]
for(t=!1,s=0;s<o;s+=2){r=b[s]
q=b[s+1]
p=H.bD(a,q,c,d)
if(p!==q)t=!0
n.push(r)
n.push(p)}return t?n:b},
pB:function(a,b,c,d){var t,s=b.a,r=H.ec(a,s,c,d),q=b.b,p=H.ec(a,q,c,d),o=b.c,n=H.pC(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.fv()
t.a=r
t.b=p
t.c=n
return t},
pJ:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.mH(t)
return a.$S()}return null},
mI:function(a,b){var t
if(H.lY(b))if(a instanceof H.bO){t=H.pJ(a)
if(t!=null)return t}return H.X(a)},
X:function(a){var t
if(a instanceof P.E){t=a.$ti
return t!=null?t:H.kV(a)}if(Array.isArray(a))return H.C(a)
return H.kV(J.bG(a))},
C:function(a){var t=a[v.arrayRti],s=u.cO
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
i:function(a){var t=a.$ti
return t!=null?t:H.kV(a)},
kV:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.pn(a,t)},
pn:function(a,b){var t=a instanceof H.bO?a.__proto__.__proto__.constructor:b,s=H.pc(v.typeUniverse,t.name)
b.$ccache=s
return s},
mH:function(a){var t,s=a,r=v.types,q=r[s]
if(typeof q=="string"){t=H.kS(v.typeUniverse,q,!1)
r[s]=t
return t}return q},
pm:function(a){var t=this,s=H.pk,r=u.K
if(t===r){s=H.pp
t.a=H.pe}else if(H.bH(t)||t===r){s=H.ps
t.a=H.pf}else if(t===u.S)s=H.cN
else if(t===u.gR)s=H.mq
else if(t===u.di)s=H.mq
else if(t===u.N)s=H.pq
else if(t===u.y)s=H.kc
else if(t.y===9){r=t.z
if(t.Q.every(H.pY)){t.r="$i"+r
s=H.pr}}t.b=s
return t.b(a)},
pk:function(a){var t=this
return H.a7(v.typeUniverse,H.mI(a,t),null,t,null)},
pr:function(a){var t=this,s=t.r
if(a instanceof P.E)return!!a[s]
return!!J.bG(a)[s]},
pj:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
throw H.b(H.me(H.m4(a,H.mI(a,t),H.aA(t,null))))},
aU:function(a,b,c,d){var t=null
if(H.a7(v.typeUniverse,a,t,b,t))return a
throw H.b(H.me("The type argument '"+H.a(H.aA(a,t))+"' is not a subtype of the type variable bound '"+H.a(H.aA(b,t))+"' of type variable '"+c+"' in '"+H.a(d)+"'."))},
m4:function(a,b,c){var t=P.bq(a),s=H.aA(b==null?H.X(a):b,null)
return t+": type '"+H.a(s)+"' is not a subtype of type '"+H.a(c)+"'"},
me:function(a){return new H.e4("TypeError: "+a)},
fP:function(a,b){return new H.e4("TypeError: "+H.m4(a,null,b))},
pp:function(a){return!0},
pe:function(a){return a},
ps:function(a){return!0},
pf:function(a){return a},
kc:function(a){return!0===a||!1===a},
fX:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.b(H.fP(a,"bool"))},
pd:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.fP(a,"double"))},
cN:function(a){return typeof a=="number"&&Math.floor(a)===a},
q:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.fP(a,"int"))},
mq:function(a){return typeof a=="number"},
k6:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.fP(a,"num"))},
pq:function(a){return typeof a=="string"},
r:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.fP(a,"String"))},
py:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.d.v(s,H.aA(a[r],b))
return t},
ml:function(a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", "
if(a3!=null){t=a3.length
if(a2==null){a2=H.h([],u.s)
s=null}else s=a2.length
r=a2.length
for(q=t;q>0;--q)C.a.l(a2,"T"+(r+q))
for(p=u.K,o="<",n="",q=0;q<t;++q,n=a0){o+=n
m=a2.length
l=m-1-q
if(l<0)return H.o(a2,l)
o=C.d.v(o,a2[l])
k=a3[q]
if(!(H.bH(k)||k===p))m=!(k===p)
else m=!1
if(m)o+=C.d.v(" extends ",H.aA(k,a2))}o+=">"}else{o=""
s=null}p=a1.z
j=a1.Q
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=H.aA(p,a2)
for(b="",a="",q=0;q<h;++q,a=a0)b+=C.d.v(a,H.aA(i[q],a2))
if(f>0){b+=a+"["
for(a="",q=0;q<f;++q,a=a0)b+=C.d.v(a,H.aA(g[q],a2))
b+="]"}if(d>0){b+=a+"{"
for(a="",q=0;q<d;q+=2,a=a0)b+=C.d.v(a,H.aA(e[q+1],a2))+" "+e[q]
b+="}"}if(s!=null)a2.length=s
return o+"("+b+") => "+H.a(c)},
aA:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.aA(a.z,b)
return t}if(m===7){s=a.z
t=H.aA(s,b)
r=s.y
return J.nl(r===11||r===12?C.d.v("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.a(H.aA(a.z,b))+">"
if(m===9){q=H.pD(a.z)
p=a.Q
return p.length!==0?q+("<"+H.py(p,b)+">"):q}if(m===11)return H.ml(a,b,null)
if(m===12)return H.ml(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.o(b,o)
return b[o]}return"?"},
pD:function(a){var t,s=H.n1(a)
if(s!=null)return s
t="minified:"+a
return t},
mj:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
pc:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.kS(a,b,!1)
else if(typeof n=="number"){t=n
s=H.e6(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.e5(a,b,r)
o[b]=p
return p}else return n},
pa:function(a,b){return H.mk(a.tR,b)},
p9:function(a,b){return H.mk(a.eT,b)},
kS:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.mi(a,null,b,c)
s.set(b,t)
return t},
fR:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.mi(a,b,c,!0)
r.set(c,s)
return s},
pb:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.kP(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
mi:function(a,b,c,d){var t=H.p0(H.oX(a,b,c,d))
if(t!=null)return t
throw H.b(P.j2('_Universe._parseRecipe("'+H.a(c)+'")'))},
bC:function(a,b){b.a=H.pj
b.b=H.pm
return b},
e6:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.aQ(null,null)
t.y=b
t.cy=c
s=H.bC(a,t)
a.eC.set(c,s)
return s},
mh:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.p7(a,b,s,c)
a.eC.set(s,t)
return t},
p7:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.bH(b)||b===u.K||b===u.P||t===7||t===6)return b}s=new H.aQ(null,null)
s.y=6
s.z=b
s.cy=c
return H.bC(a,s)},
kR:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.p6(a,b,s,c)
a.eC.set(s,t)
return t},
p6:function(a,b,c,d){var t,s,r,q,p
if(d){t=b.y
if(!H.bH(b))if(!(b===u.P))if(t!==7)s=t===8&&H.ko(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1)return u.P
else if(t===6){r=b.z
q=r.y
if(q===1)return u.P
else if(q===8&&H.ko(r.z))return r
else return H.ol(a,b)}}p=new H.aQ(null,null)
p.y=7
p.z=b
p.cy=c
return H.bC(a,p)},
mg:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.p4(a,b,s,c)
a.eC.set(s,t)
return t},
p4:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.bH(b)||b===u.K||b===u.K)return b
else if(t===1)return H.e5(a,"aE",[b])
else if(b===u.P)return u.aQ}s=new H.aQ(null,null)
s.y=8
s.z=b
s.cy=c
return H.bC(a,s)},
p8:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.aQ(null,null)
t.y=13
t.z=b
t.cy=r
s=H.bC(a,t)
a.eC.set(r,s)
return s},
fQ:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
p3:function(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=2,s=","){q=a[r]
p=a[r+1].cy
t+=s+q+":"+p}return t},
e5:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.fQ(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.aQ(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.bC(a,s)
a.eC.set(q,r)
return r},
kP:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+";"+("<"+H.fQ(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.aQ(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.bC(a,p)
a.eC.set(r,o)
return o},
mf:function(a,b,c){var t,s,r,q,p=b.cy,o=c.a,n=o.length,m=c.b,l=m.length,k=c.c,j=k.length,i="("+H.fQ(o)
if(l>0)i+=(n>0?",":"")+"["+H.fQ(m)+"]"
if(j>0)i+=(n>0?",":"")+"{"+H.p3(k)+"}"
t=p+(i+")")
s=a.eC.get(t)
if(s!=null)return s
r=new H.aQ(null,null)
r.y=11
r.z=b
r.Q=c
r.cy=t
q=H.bC(a,r)
a.eC.set(t,q)
return q},
kQ:function(a,b,c,d){var t,s=b.cy+"<"+H.fQ(c)+">",r=a.eC.get(s)
if(r!=null)return r
t=H.p5(a,b,c,s,d)
a.eC.set(s,t)
return t},
p5:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.bD(a,b,s,0)
n=H.ec(a,c,s,0)
return H.kQ(a,o,n,c!==n)}}m=new H.aQ(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.bC(a,m)},
oX:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
p0:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.oY(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.mb(a,s,h,g,!1)
else if(r===46)s=H.mb(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:break
case 59:g.push(H.bB(a.u,a.e,g.pop()))
break
case 94:g.push(H.p8(a.u,g.pop()))
break
case 35:g.push(H.e6(a.u,5,"#"))
break
case 64:g.push(H.e6(a.u,2,"@"))
break
case 126:g.push(H.e6(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.kO(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.e5(q,o,p))
else{n=H.bB(q,a.e,o)
switch(n.y){case 11:g.push(H.kQ(q,n,p,a.n))
break
default:g.push(H.kP(q,n,p))
break}}break
case 38:H.oZ(a,g)
break
case 42:m=a.u
g.push(H.mh(m,H.bB(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.kR(m,H.bB(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.mg(m,H.bB(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.fv()
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
H.kO(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.mf(q,H.bB(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.kO(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.p1(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.bB(a.u,a.e,i)},
oY:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
mb:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.mj(t,p.z)[q]
if(o==null)H.D('No "'+q+'" in "'+H.ok(p)+'"')
d.push(H.fR(t,p,o))}else d.push(q)
return n},
oZ:function(a,b){var t=b.pop()
if(0===t){b.push(H.e6(a.u,1,"0&"))
return}if(1===t){b.push(H.e6(a.u,4,"1&"))
return}throw H.b(P.h4("Unexpected extended operation "+H.a(t)))},
bB:function(a,b,c){if(typeof c=="string")return H.e5(a,c,a.sEA)
else if(typeof c=="number")return H.p_(a,b,c)
else return c},
kO:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.bB(a,b,c[t])},
p1:function(a,b,c){var t,s=c.length
for(t=1;t<s;t+=2)c[t]=H.bB(a,b,c[t])},
p_:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.b(P.h4("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.b(P.h4("Bad index "+c+" for "+b.n(0)))},
a7:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(H.bH(d)||d===u.K)return!0
t=b.y
if(t===4)return!0
if(H.bH(b))return!1
if(b===u.P)return!0
s=t===13
if(s)if(H.a7(a,c[b.z],c,d,e))return!0
r=d.y
if(t===6)return H.a7(a,b.z,c,d,e)
if(r===6){q=d.z
return H.a7(a,b,c,q,e)}if(t===8){if(!H.a7(a,b.z,c,d,e))return!1
return H.a7(a,H.lX(a,b),c,d,e)}if(t===7){q=H.a7(a,b.z,c,d,e)
return q}if(r===8){if(H.a7(a,b,c,d.z,e))return!0
return H.a7(a,b,c,H.lX(a,d),e)}if(r===7){q=H.a7(a,b,c,d.z,e)
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
if(!H.a7(a,l,c,k,e)||!H.a7(a,k,e,l,c))return!1}return H.mp(a,b.z,c,d.z,e)}if(r===11){if(b===u.cj)return!0
if(q)return!1
return H.mp(a,b,c,d,e)}if(t===9){if(r!==9)return!1
return H.po(a,b,c,d,e)}return!1},
mp:function(a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
if(!H.a7(a0,a1.z,a2,a3.z,a4))return!1
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
if(!H.a7(a0,q[i],a4,h,a2))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.a7(a0,q[p+i],a4,h,a2))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.a7(a0,l[i],a4,h,a2))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(i=0,c=0;c<d;c+=2){b=f[c]
do{if(i>=e)return!1
a=g[i]
i+=2}while(a<b)
if(b<a)return!1
h=g[i-1]
if(!H.a7(a0,f[c+1],a4,h,a2))return!1}return!0},
po:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.a7(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.mj(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.a7(a,H.fR(a,b,m[q]),c,s[q],e))return!1
return!0},
ko:function(a){var t,s=a.y
if(!(a===u.P))if(!H.bH(a))if(s!==7)if(!(s===6&&H.ko(a.z)))t=s===8&&H.ko(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
pY:function(a){return H.bH(a)||a===u.K},
bH:function(a){var t,s=a.y,r=s
if(r!==2)if(r!==3)if(r!==4)if(r!==5){t=u.K
if(!(a===t))s=s===7&&a.z===t
else s=!0}else s=!0
else s=!0
else s=!0
else s=!0
return s},
mk:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aQ:function aQ(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fv:function fv(){this.c=this.b=this.a=null},
ft:function ft(){},
e4:function e4(a){this.a=a},
mJ:function(a){return u.fK.b(a)||u.B.b(a)||u.dz.b(a)||u.gb.b(a)||u.A.b(a)||u.g4.b(a)||u.g2.b(a)},
n1:function(a){return v.mangledGlobalNames[a]},
qa:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fY:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.l1==null){H.pT()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.b(P.j2("Return interceptor for "+H.a(t(a,p))))}r=a.constructor
q=r==null?null:r[$.l8()]
if(q!=null)return q
q=H.q_(a)
if(q!=null)return q
if(typeof a=="function")return C.I
t=Object.getPrototypeOf(a)
if(t==null)return C.v
if(t===Object.prototype)return C.v
if(typeof r=="function"){Object.defineProperty(r,$.l8(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
lK:function(a){a.fixed$length=Array
return a},
lL:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kE:function(a,b){var t,s
for(t=a.length;b<t;){s=C.d.b2(a,b)
if(s!==32&&s!==13&&!J.lL(s))break;++b}return b},
o5:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.d.dw(a,t)
if(s!==32&&s!==13&&!J.lL(s))break}return b},
bG:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dh.prototype
return J.eH.prototype}if(typeof a=="string")return J.bg.prototype
if(a==null)return J.di.prototype
if(typeof a=="boolean")return J.eG.prototype
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.fY(a)},
pP:function(a){if(typeof a=="number")return J.bt.prototype
if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.fY(a)},
au:function(a){if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.fY(a)},
bc:function(a){if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.fY(a)},
ki:function(a){if(typeof a=="number")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bx.prototype
return a},
mE:function(a){if(typeof a=="number")return J.bt.prototype
if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bx.prototype
return a},
kj:function(a){if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bx.prototype
return a},
W:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.fY(a)},
nl:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pP(a).v(a,b)},
bK:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bG(a).R(a,b)},
nm:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ki(a).L(a,b)},
lc:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mE(a).at(a,b)},
c8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pX(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.au(a).h(a,b)},
kv:function(a,b,c){return J.bc(a).j(a,b,c)},
nn:function(a,b,c,d){return J.W(a).ew(a,b,c,d)},
kw:function(a){return J.W(a).eA(a)},
no:function(a,b,c,d){return J.W(a).fb(a,b,c,d)},
np:function(a,b,c){return J.W(a).fc(a,b,c)},
eg:function(a,b){return J.bc(a).l(a,b)},
ld:function(a,b){return J.mE(a).dz(a,b)},
h0:function(a,b,c){return J.au(a).fH(a,b,c)},
nq:function(a,b){return J.W(a).dC(a,b)},
aW:function(a,b){return J.bc(a).B(a,b)},
c9:function(a){return J.ki(a).c7(a)},
nr:function(a){return J.W(a).gfu(a)},
ns:function(a){return J.W(a).gdu(a)},
bL:function(a){return J.W(a).gdv(a)},
ac:function(a){return J.bG(a).gA(a)},
nt:function(a){return J.au(a).gN(a)},
le:function(a){return J.au(a).gci(a)},
y:function(a){return J.bc(a).gw(a)},
ad:function(a){return J.au(a).gk(a)},
nu:function(a){return J.W(a).gdL(a)},
nv:function(a){return J.W(a).gdO(a)},
nw:function(a){return J.W(a).gdP(a)},
lf:function(a,b,c){return J.bc(a).af(a,b,c)},
nx:function(a,b){return J.bc(a).T(a,b)},
kx:function(a,b,c){return J.bc(a).H(a,b,c)},
ny:function(a,b){return J.W(a).h0(a,b)},
nz:function(a,b){return J.W(a).h2(a,b)},
nA:function(a,b){return J.bG(a).bn(a,b)},
eh:function(a){return J.W(a).bo(a)},
nB:function(a,b){return J.W(a).hc(a,b)},
cT:function(a){return J.ki(a).D(a)},
ei:function(a,b){return J.W(a).F(a,b)},
lg:function(a,b,c){return J.W(a).cA(a,b,c)},
nC:function(a,b){return J.bc(a).aZ(a,b)},
nD:function(a,b,c){return J.kj(a).aa(a,b,c)},
lh:function(a){return J.ki(a).bs(a)},
nE:function(a){return J.bc(a).aq(a)},
nF:function(a){return J.kj(a).hj(a)},
z:function(a){return J.bG(a).n(a)},
h1:function(a){return J.kj(a).aG(a)},
ai:function ai(){},
eG:function eG(){},
di:function di(){},
bu:function bu(){},
f1:function f1(){},
bx:function bx(){},
b5:function b5(){},
G:function G(a){this.$ti=a},
ix:function ix(a){this.$ti=a},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bt:function bt(){},
dh:function dh(){},
eH:function eH(){},
bg:function bg(){}},P={
oM:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.pF()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.cS(new P.jd(r),1)).observe(t,{childList:true})
return new P.jc(r,t,s)}else if(self.setImmediate!=null)return P.pG()
return P.pH()},
oN:function(a){self.scheduleImmediate(H.cS(new P.je(u.M.a(a)),0))},
oO:function(a){self.setImmediate(H.cS(new P.jf(u.M.a(a)),0))},
oP:function(a){P.kI(C.p,u.M.a(a))},
kI:function(a,b){var t=C.e.az(a.a,1000)
return P.p2(t<0?0:t,b)},
p2:function(a,b){var t=new P.jZ()
t.eu(a,b)
return t},
nW:function(a,b){var t=new P.a3($.H,b.i("a3<0>"))
P.ov(C.p,new P.it(t,a))
return t},
m5:function(a,b){var t,s,r
b.a=1
try{a.e_(new P.jr(b),new P.js(b),u.P)}catch(r){t=H.L(r)
s=H.aV(r)
P.mZ(new P.jt(b,t,s))}},
jq:function(a,b){var t,s,r
for(t=u._;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.ba()
b.a=a.a
b.c=a.c
P.cK(b,r)}else{r=u.x.a(b.c)
b.a=2
b.c=a
a.da(r)}},
cK:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d={},c=d.a=a
for(t=u.n,s=u.x,r=u.b9;!0;){q={}
p=c.a===8
if(b==null){if(p){o=t.a(c.c)
P.cP(e,e,c.b,o.a,o.b)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cK(d.a,b)}c=d.a
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
P.cP(e,e,c.b,m.a,m.b)
return}h=$.H
if(h!==j)$.H=j
else h=e
c=b.c
if((c&15)===8)new P.jy(d,q,b,p).$0()
else if(l){if((c&1)!==0)new P.jx(q,b,m).$0()}else if((c&2)!==0)new P.jw(d,q,b).$0()
if(h!=null)$.H=h
c=q.b
if(r.b(c)){if(c.a>=4){g=s.a(k.c)
k.c=null
b=k.bb(g)
k.a=c.a
k.c=c.c
d.a=c
continue}else P.jq(c,k)
return}}f=b.b
g=s.a(f.c)
f.c=null
b=f.bb(g)
c=q.a
l=q.b
if(!c){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}d.a=f
c=f}},
px:function(a,b){var t
if(u.ag.b(a))return b.dS(a,u.z,u.K,u.l)
t=u.bI
if(t.b(a))return t.a(a)
throw H.b(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pu:function(){var t,s
for(;t=$.cO,t!=null;){$.eb=null
s=t.b
$.cO=s
if(s==null)$.ea=null
t.a.$0()}},
pA:function(){$.kW=!0
try{P.pu()}finally{$.eb=null
$.kW=!1
if($.cO!=null)$.l9().$1(P.mA())}},
mw:function(a){var t=new P.fi(a)
if($.cO==null){$.cO=$.ea=t
if(!$.kW)$.l9().$1(P.mA())}else $.ea=$.ea.b=t},
pz:function(a){var t,s,r=$.cO
if(r==null){P.mw(a)
$.eb=$.ea
return}t=new P.fi(a)
s=$.eb
if(s==null){t.b=r
$.cO=$.eb=t}else{t.b=s.b
$.eb=s.b=t
if(t.b==null)$.ea=t}},
mZ:function(a){var t=null,s=$.H
if(C.f===s){P.cQ(t,t,C.f,a)
return}P.cQ(t,t,s,u.M.a(s.c0(a)))},
cy:function(a,b,c){return new P.e2(null,a,c.i("e2<0>"))},
mv:function(a){var t,s,r
if(a==null)return
try{a.$0()}catch(r){t=H.L(r)
s=H.aV(r)
P.cP(null,null,$.H,t,u.l.a(s))}},
mr:function(a,b){P.cP(null,null,$.H,a,b)},
pv:function(){},
ov:function(a,b){var t=$.H
if(t===C.f)return P.kI(a,u.M.a(b))
return P.kI(a,u.M.a(t.c0(b)))},
h5:function(a,b){var t=b==null?P.lk(a):b
P.bd(a,"error",u.K)
return new P.cW(a,t)},
lk:function(a){var t
if(u.bU.b(a)){t=a.gb_()
if(t!=null)return t}return C.G},
cP:function(a,b,c,d,e){var t={}
t.a=d
t.b=e
if(d==null){t.a=new P.aK(!1,null,"error","Must not be null")
t.b=P.os()}P.pz(new P.kd(t))},
ms:function(a,b,c,d,e){var t,s=$.H
if(s===c)return d.$0()
$.H=c
t=s
try{s=d.$0()
return s}finally{$.H=t}},
mu:function(a,b,c,d,e,f,g){var t,s=$.H
if(s===c)return d.$1(e)
$.H=c
t=s
try{s=d.$1(e)
return s}finally{$.H=t}},
mt:function(a,b,c,d,e,f,g,h,i){var t,s=$.H
if(s===c)return d.$2(e,f)
$.H=c
t=s
try{s=d.$2(e,f)
return s}finally{$.H=t}},
cQ:function(a,b,c,d){var t
u.M.a(d)
t=C.f!==c
if(t)d=!(!t||!1)?c.c0(d):c.fv(d,u.o)
P.mw(d)},
jd:function jd(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jZ:function jZ(){},
k_:function k_(a,b){this.a=a
this.b=b},
ag:function ag(a,b){this.a=a
this.$ti=b},
b9:function b9(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.c=_.b=_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
bz:function bz(){},
e2:function e2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
jW:function jW(a,b){this.a=a
this.b=b},
jX:function jX(a){this.a=a},
aE:function aE(){},
it:function it(a,b){this.a=a
this.b=b},
fl:function fl(){},
e3:function e3(a,b){this.a=a
this.$ti=b},
c5:function c5(a,b,c,d,e){var _=this
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
jo:function jo(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
jp:function jp(a,b){this.a=a
this.b=b},
ju:function ju(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jz:function jz(a){this.a=a},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
fi:function fi(a){this.a=a
this.b=null},
U:function U(){},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
a2:function a2(){},
f6:function f6(){},
cF:function cF(){},
cG:function cG(){},
O:function O(){},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
jg:function jg(a){this.a=a},
cL:function cL(){},
bA:function bA(){},
dE:function dE(a,b){this.b=a
this.a=null
this.$ti=b},
fq:function fq(a,b){this.b=a
this.c=b
this.a=null},
fp:function fp(){},
dW:function dW(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
e0:function e0(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cH:function cH(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
dH:function dH(){},
cJ:function cJ(a,b,c,d){var _=this
_.x=a
_.c=_.b=_.a=_.y=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
dQ:function dQ(a,b,c){this.b=a
this.a=b
this.$ti=c},
cW:function cW(a,b){this.a=a
this.b=b},
fS:function fS(){},
kd:function kd(a){this.a=a},
fH:function fH(){},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
jP:function jP(a,b){this.a=a
this.b=b},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
m6:function(a,b){var t=a[b]
return t===a?null:t},
kM:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
m7:function(){var t=Object.create(null)
P.kM(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
a5:function(a,b,c){return b.i("@<0>").q(c).i("lN<1,2>").a(H.pO(a,new H.a9(b.i("@<0>").q(c).i("a9<1,2>"))))},
bX:function(a,b){return new H.a9(a.i("@<0>").q(b).i("a9<1,2>"))},
dn:function(a){return new P.dO(a.i("dO<0>"))},
kN:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
jE:function(a,b,c){var t=new P.c7(a,b,c.i("c7<0>"))
t.c=a.e
return t},
nY:function(a,b,c){var t,s
if(P.kX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.h([],u.s)
C.a.l($.aJ,a)
try{P.pt(a,t)}finally{if(0>=$.aJ.length)return H.o($.aJ,-1)
$.aJ.pop()}s=P.lZ(b,u.R.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
iv:function(a,b,c){var t,s
if(P.kX(a))return b+"..."+c
t=new P.aS(b)
C.a.l($.aJ,a)
try{s=t
s.a=P.lZ(s.a,a,", ")}finally{if(0>=$.aJ.length)return H.o($.aJ,-1)
$.aJ.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
kX:function(a){var t,s
for(t=$.aJ.length,s=0;s<t;++s)if(a===$.aJ[s])return!0
return!1},
pt:function(a,b){var t,s,r,q,p,o,n,m=a.gw(a),l=0,k=0
while(!0){if(!(l<80||k<3))break
if(!m.m())return
t=H.a(m.gp())
C.a.l(b,t)
l+=t.length+2;++k}if(!m.m()){if(k<=5)return
if(0>=b.length)return H.o(b,-1)
s=b.pop()
if(0>=b.length)return H.o(b,-1)
r=b.pop()}else{q=m.gp();++k
if(!m.m()){if(k<=4){C.a.l(b,H.a(q))
return}s=H.a(q)
if(0>=b.length)return H.o(b,-1)
r=b.pop()
l+=s.length+2}else{p=m.gp();++k
for(;m.m();q=p,p=o){o=m.gp();++k
if(k>100){while(!0){if(!(l>75&&k>3))break
if(0>=b.length)return H.o(b,-1)
l-=b.pop().length+2;--k}C.a.l(b,"...")
return}}r=H.a(q)
s=H.a(p)
l+=s.length+r.length+4}}if(k>b.length+2){l+=5
n="..."}else n=null
while(!0){if(!(l>80&&b.length>3))break
if(0>=b.length)return H.o(b,-1)
l-=b.pop().length+2
if(n==null){l+=5
n="..."}}if(n!=null)C.a.l(b,n)
C.a.l(b,r)
C.a.l(b,s)},
lO:function(a,b){var t,s,r=P.dn(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s)r.l(0,b.a(a[s]))
return r},
iC:function(a){var t,s={}
if(P.kX(a))return"{...}"
t=new P.aS("")
try{C.a.l($.aJ,a)
t.a+="{"
s.a=!0
a.t(0,new P.iD(s,t))
t.a+="}"}finally{if(0>=$.aJ.length)return H.o($.aJ,-1)
$.aJ.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
dI:function dI(){},
dL:function dL(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dJ:function dJ(a,b){this.a=a
this.$ti=b},
dK:function dK(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dO:function dO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fB:function fB(a){this.a=a
this.c=this.b=null},
c7:function c7(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dp:function dp(){},
k:function k(){},
dq:function dq(){},
iD:function iD(a,b){this.a=a
this.b=b},
S:function S(){},
e7:function e7(){},
co:function co(){},
dC:function dC(){},
b_:function b_(){},
dw:function dw(){},
dX:function dX(){},
dP:function dP(){},
dY:function dY(){},
cM:function cM(){},
pw:function(a,b){var t,s,r,q
if(typeof a!="string")throw H.b(H.bb(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.L(r)
q=P.de(String(s),null)
throw H.b(q)}q=P.k7(t)
return q},
k7:function(a){var t
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.fz(a,Object.create(null))
for(t=0;t<a.length;++t)a[t]=P.k7(a[t])
return a},
lM:function(a,b,c){return new P.dk(a,b)},
pi:function(a){return a.hs()},
oW:function(a,b,c){var t,s=new P.aS(""),r=new P.jB(s,[],P.pL())
r.bx(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
fz:function fz(a,b){this.a=a
this.b=b
this.c=null},
fA:function fA(a){this.a=a},
ep:function ep(){},
cf:function cf(){},
iu:function iu(){},
cj:function cj(){},
dk:function dk(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
iA:function iA(){},
eN:function eN(a){this.b=a},
eM:function eM(a){this.a=a},
jC:function jC(){},
jD:function jD(a,b){this.a=a
this.b=b},
jB:function jB(a,b,c){this.c=a
this.a=b
this.b=c},
pV:function(a){var t=H.lV(a,null)
if(t!=null)return t
throw H.b(P.de(a,null))},
nV:function(a){if(a instanceof H.bO)return a.n(0)
return"Instance of '"+H.a(H.iP(a))+"'"},
cm:function(a,b,c){var t,s=H.h([],c.i("G<0>"))
for(t=J.y(a);t.m();)C.a.l(s,c.a(t.gp()))
if(b)return s
return c.i("t<0>").a(J.lK(s))},
oj:function(a){return new H.eJ(a,H.o6(a,!1,!0,!1,!1,!1))},
lZ:function(a,b,c){var t=J.y(b)
if(!t.m())return a
if(c.length===0){do a+=H.a(t.gp())
while(t.m())}else{a+=H.a(t.gp())
for(;t.m();)a=a+c+H.a(t.gp())}return a},
lQ:function(a,b,c,d){return new P.eX(a,b,c,d)},
os:function(){var t,s
if(H.at($.nk()))return H.aV(new Error())
try{throw H.b("")}catch(s){H.L(s)
t=H.aV(s)
return t}},
nQ:function(a,b){var t
if(Math.abs(a)<=864e13)t=!1
else t=!0
if(t)H.D(P.b2("DateTime is outside valid range: "+a))
P.bd(!1,"isUtc",u.y)
return new P.ch(a,!1)},
nR:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
nS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
et:function(a){if(a>=10)return""+a
return"0"+a},
bq:function(a){if(typeof a=="number"||H.kc(a)||null==a)return J.z(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nV(a)},
h4:function(a){return new P.cV(a)},
b2:function(a){return new P.aK(!1,null,null,a)},
cU:function(a,b,c){return new P.aK(!0,a,b,c)},
ky:function(a){return new P.aK(!1,null,a,"Must not be null")},
bd:function(a,b,c){if(a==null)throw H.b(P.ky(b))
return a},
cu:function(a,b){return new P.dv(null,null,!0,a,b,"Value not in range")},
ab:function(a,b,c,d,e){return new P.dv(b,c,!0,a,d,"Invalid value")},
kH:function(a,b,c,d){if(typeof a!=="number")return a.ai()
if(a<b||a>c)throw H.b(P.ab(a,b,c,d,null))
return a},
lW:function(a,b,c){if(0>a||a>c)throw H.b(P.ab(a,0,c,"start",null))
if(a>b||b>c)throw H.b(P.ab(b,a,c,"end",null))
return b},
aZ:function(a,b){if(typeof a!=="number")return a.ai()
if(a<0)throw H.b(P.ab(a,0,null,b,null))
return a},
bf:function(a,b,c,d,e){var t=H.q(e==null?J.ad(b):e)
return new P.eF(t,!0,a,c,"Index out of range")},
x:function(a){return new P.fg(a)},
j2:function(a){return new P.fe(a)},
ax:function(a){return new P.b6(a)},
aN:function(a){return new P.eq(a)},
bU:function(a){return new P.fu(a)},
de:function(a,b){return new P.dd(a,b)},
mP:function(a,b){var t=P.fZ(a)
if(t!=null)return t
if(b==null)throw H.b(P.de(a,null))
return b.$1(a)},
fZ:function(a){var t=J.h1(a),s=H.lV(t,null)
return s==null?H.oi(t):s},
ee:function(a){H.qa(H.a(a))},
iE:function iE(a,b){this.a=a
this.b=b},
w:function w(){},
ch:function ch(a,b){this.a=a
this.b=b},
ah:function ah(){},
bS:function bS(a){this.a=a},
i_:function i_(){},
i0:function i0(){},
K:function K(){},
cV:function cV(a){this.a=a},
eZ:function eZ(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dv:function dv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eF:function eF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eX:function eX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fg:function fg(a){this.a=a},
fe:function fe(a){this.a=a},
b6:function b6(a){this.a=a},
eq:function eq(a){this.a=a},
f_:function f_(){},
dy:function dy(){},
es:function es(a){this.a=a},
fu:function fu(a){this.a=a},
dd:function dd(a,b){this.a=a
this.b=b},
b4:function b4(){},
e:function e(){},
d:function d(){},
R:function R(){},
t:function t(){},
cn:function cn(){},
u:function u(){},
Y:function Y(){},
E:function E(){},
dr:function dr(){},
ar:function ar(){},
as:function as(){},
fJ:function fJ(){},
c:function c(){},
aS:function aS(a){this.a=a},
b0:function b0(){},
kC:function(){var t=$.lt
return t==null?$.lt=J.h0(window.navigator.userAgent,"Opera",0):t},
nT:function(){var t,s=$.lq
if(s!=null)return s
t=$.lr
if(t==null?$.lr=J.h0(window.navigator.userAgent,"Firefox",0):t)s="-moz-"
else{t=$.ls
if(t==null)t=$.ls=!H.at(P.kC())&&J.h0(window.navigator.userAgent,"Trident/",0)
if(t)s="-ms-"
else s=H.at(P.kC())?"-o-":"-webkit-"}return $.lq=s},
er:function er(){},
hL:function hL(a){this.a=a},
eC:function eC(a,b){this.a=a
this.b=b},
iq:function iq(){},
ir:function ir(){},
is:function is(){},
dl:function dl(){},
pg:function(a,b,c,d){var t,s,r
H.fX(b)
u.j.a(d)
if(H.at(b)){t=[c]
C.a.M(t,d)
d=t}s=u.z
r=P.cm(J.kx(d,P.pZ(),s),!0,s)
u.Z.a(a)
return P.e9(H.oa(a,r,null))},
aj:function(a){if(!u.f.b(a)&&!u.R.b(a))throw H.b(P.b2("object must be a Map or Iterable"))
return u.b.a(P.bE(P.dj(a)))},
dj:function(a){return new P.iz(new P.dL(u.aH)).$1(a)},
aY:function(a,b){var t=[]
C.a.M(t,J.kx(a,P.kp(),u.z))
return new P.v(t,b.i("v<0>"))},
kT:function(a,b,c){var t
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(t){H.L(t)}return!1},
mn:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
e9:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.kc(a))return a
if(a instanceof P.P)return a.a
if(H.mJ(a))return a
if(u.ak.b(a))return a
if(a instanceof P.ch)return H.c_(a)
if(u.Z.b(a))return P.mm(a,"$dart_jsFunction",new P.k9())
return P.mm(a,"_$dart_jsObject",new P.ka($.lb()))},
mm:function(a,b,c){var t=P.mn(a,b)
if(t==null){t=c.$1(a)
P.kT(a,b,t)}return t},
k8:function(a){var t,s
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.mJ(a))return a
else if(a instanceof Object&&u.ak.b(a))return a
else if(a instanceof Date){t=H.q(a.getTime())
if(Math.abs(t)<=864e13)s=!1
else s=!0
if(s)H.D(P.b2("DateTime is outside valid range: "+t))
P.bd(!1,"isUtc",u.y)
return new P.ch(t,!1)}else if(a.constructor===$.lb())return a.o
else return P.bE(a)},
bE:function(a){if(typeof a=="function")return P.kU(a,$.ku(),new P.ke())
if(a instanceof Array)return P.kU(a,$.la(),new P.kf())
return P.kU(a,$.la(),new P.kg())},
kU:function(a,b,c){var t=P.mn(a,b)
if(t==null||!(a instanceof Object)){t=c.$1(a)
P.kT(a,b,t)}return t},
iz:function iz(a){this.a=a},
k9:function k9(){},
ka:function ka(a){this.a=a},
ke:function ke(){},
kf:function kf(){},
kg:function kg(){},
P:function P(a){this.a=a},
aF:function aF(a){this.a=a},
v:function v(a,b){this.a=a
this.$ti=b},
dN:function dN(){},
dM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
fG:function fG(){},
bw:function bw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cv:function cv(){},
el:function el(a){this.a=a},
l:function l(){}},W={
li:function(a){var t=document.createElement("a")
if(a!=null)t.href=a
return t},
nU:function(a,b,c){var t=document.body,s=(t&&C.m).W(t,a,b,c)
s.toString
t=u.ac
t=new H.af(new W.am(s),t.i("w(k.E)").a(new W.i2()),t.i("af<k.E>"))
return u.h.a(t.gaw(t))},
da:function(a){var t,s,r="element tag unavailable"
try{t=J.W(a)
if(typeof t.gdY(a)=="string")r=t.gdY(a)}catch(s){H.L(s)}return r},
nX:function(a){var t,s=document.createElement("input"),r=u.p.a(s)
try{r.type=a}catch(t){H.L(t)}return r},
ds:function(a,b){var t=window,s=u.V.a(document.createEvent("MouseEvent"))
s.toString
s.initMouseEvent(a,!0,!0,t,0,0,0,0,0,!1,!1,!1,!1,0,W.ph(b))
return s},
ow:function(a){return new TouchEvent(a)},
ox:function(){var t
try{W.ow("touches")
return!0}catch(t){H.L(t)}return!1},
jA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ma:function(a,b,c,d){var t=W.jA(W.jA(W.jA(W.jA(0,a),b),c),d),s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
kL:function(a,b){var t,s=a.classList
for(t=0;t<2;++t)s.add(b[t])},
oT:function(a,b){var t,s,r=a.classList
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.B)(b),++s)r.remove(H.r(b[s]))},
i3:function(a,b){return new W.eB(a,b.i("eB<0>"))},
A:function(a,b,c,d,e){var t=W.mx(new W.jn(c),u.B)
t=new W.dG(a,b,t,!1,e.i("dG<0>"))
t.dj()
return t},
m8:function(a){var t=W.li(null),s=window.location
t=new W.c6(new W.fI(t,s))
t.er(a)
return t},
oU:function(a,b,c,d){u.h.a(a)
H.r(b)
H.r(c)
u.cr.a(d)
return!0},
oV:function(a,b,c,d){var t,s,r
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
md:function(){var t=u.N,s=P.lO(C.t,t),r=u.dG.a(new W.jY()),q=H.h(["TEMPLATE"],u.s)
t=new W.fL(s,P.dn(t),P.dn(t),P.dn(t),null)
t.es(null,new H.T(C.t,r,u.dv),q,null)
return t},
M:function(a){var t
if(a==null)return null
if("postMessage" in a){t=W.oQ(a)
return t}else return u.aS.a(a)},
ph:function(a){return a},
oQ:function(a){if(a===window)return u.ci.a(a)
else return new W.fo(a)},
mx:function(a,b){var t=$.H
if(t===C.f)return a
return t.fw(a,b)},
j:function j(){},
ca:function ca(){},
ek:function ek(){},
cb:function cb(){},
bM:function bM(){},
bN:function bN(){},
ce:function ce(){},
b3:function b3(){},
I:function I(){},
cg:function cg(){},
hM:function hM(){},
d4:function d4(){},
bQ:function bQ(){},
hN:function hN(){},
d5:function d5(){},
hO:function hO(){},
fk:function fk(a,b){this.a=a
this.b=b},
an:function an(a,b){this.a=a
this.$ti=b},
p:function p(){},
i2:function i2(){},
f:function f(){},
i4:function i4(){},
i1:function i1(a){this.a=a},
F:function F(){},
eD:function eD(){},
bs:function bs(){},
df:function df(){},
ck:function ck(){},
bh:function bh(){},
eO:function eO(){},
a1:function a1(){},
am:function am(a){this.a=a},
m:function m(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
cx:function cx(){},
cz:function cz(){},
f8:function f8(){},
dA:function dA(){},
f9:function f9(){},
fa:function fa(){},
cB:function cB(){},
cC:function cC(){},
aI:function aI(){},
b7:function b7(){},
fd:function fd(){},
ay:function ay(){},
by:function by(){},
jb:function jb(a){this.a=a},
b8:function b8(){},
cE:function cE(){},
fm:function fm(){},
dF:function dF(){},
dR:function dR(){},
fj:function fj(){},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
eB:function eB(a,b){this.a=a
this.$ti=b},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dG:function dG(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jn:function jn(a){this.a=a},
e1:function e1(a,b){this.a=null
this.b=a
this.$ti=b},
jU:function jU(a,b){this.a=a
this.b=b},
c6:function c6(a){this.a=a},
V:function V(){},
du:function du(a){this.a=a},
iG:function iG(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(){},
jS:function jS(){},
jT:function jT(){},
fL:function fL(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jY:function jY(){},
fK:function fK(){},
bW:function bW(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
fo:function fo(a){this.a=a},
aq:function aq(){},
fI:function fI(a,b){this.a=a
this.b=b},
e8:function e8(a){this.a=a
this.b=!1},
k5:function k5(a){this.a=a},
fn:function fn(){},
fx:function fx(){},
fy:function fy(){},
fD:function fD(){},
fE:function fE(){},
fM:function fM(){},
fN:function fN(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){}},Z={
lz:function(a,b,c,d){var t,s,r=$.lB
$.lB=r+1
t=H.h([],u.f7)
r=new Z.hP(r,b,c,d,t)
s=u.j.b(a)?a:H.h([a],u.ge)
r.sbN(u.O.a(s))
s=window
if(u.b.a(P.bE(P.e9(s))).C("PointerEvent")){s=u.w
s=new Z.fF(H.h([],s),H.h([],s),r)
s.bE(r)
C.a.l(t,s)}else{if(W.ox()){s=u.w
s=new Z.fO(H.h([],s),H.h([],s),r)
s.bE(r)
C.a.l(t,s)}s=u.w
s=new Z.fC(H.h([],s),H.h([],s),r)
s.bE(r)
C.a.l(t,s)}return r},
lA:function(a,b,c){return new Z.bR(b.b,b.c)},
nG:function(a){$.lj=a
if(!$.h2){C.R.gfs(window).dZ(new Z.h3(),u.o)
$.h2=!0}},
oS:function(a,b){var t,s,r="_customDragOver"
if(b==null)return
t=$.cI
if(t===b)b.dispatchEvent(W.ds(r,null))
else{b.dispatchEvent(W.ds("_customDragEnter",t))
if($.cI!=null){s=W.ds("_customDragLeave",b)
$.cI.dispatchEvent(s)}b.dispatchEvent(W.ds(r,null))
$.cI=b}},
oR:function(a,b){J.nq(b,W.ds("_customDrop",null))
Z.m3()},
m3:function(){if($.cI!=null){var t=W.ds("_customDragLeave",null)
$.cI.dispatchEvent(t)
$.cI=null}},
ci:function(a,b){var t=new Z.eA(b,H.h([],u.w)),s=u.j.b(a)?a:H.h([a],u.ge)
t.sbN(u.O.a(s))
C.a.t(t.x,t.gf3())
return t},
hP:function hP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.cx=_.ch=_.z=null
_.cy=e},
hU:function hU(a){this.a=a},
hT:function hT(a){this.a=a},
hR:function hR(){},
hS:function hS(a){this.a=a},
hQ:function hQ(){},
bR:function bR(a,b){this.a=a
this.d=b},
ji:function ji(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e
_.x=f},
em:function em(){},
h8:function h8(a,b){this.a=a
this.b=b},
h3:function h3(){},
ba:function ba(){},
jj:function jj(){},
jk:function jk(a){this.a=a},
jl:function jl(a){this.a=a},
jm:function jm(){},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a){this.a=a},
k3:function k3(a){this.a=a},
k2:function k2(a){this.a=a},
k1:function k1(a){this.a=a},
k0:function k0(a){this.a=a},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(a){this.a=a},
jH:function jH(a){this.a=a},
jG:function jG(a){this.a=a},
jF:function jF(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a){this.a=a},
jN:function jN(a){this.a=a},
jM:function jM(a){this.a=a},
jL:function jL(a){this.a=a},
jK:function jK(a){this.a=a},
eA:function eA(a,b){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=null
_.y=b},
hW:function hW(a){this.a=a},
hY:function hY(a){this.a=a},
hX:function hX(a){this.a=a},
hZ:function hZ(a){this.a=a},
hV:function hV(){},
av:function av(a){this.d=a},
ej:function ej(){}},U={
lH:function(a,b,c){var t=u.s,s=new U.bV(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t)),b,a)
s.ax(a,b)
if(!C.a.G(H.h(["num","bool"],t),c))H.D(P.cU(c,"type","The expression type can only be num or bool"))
t=new U.br(a.id)
t.c=new U.ae(t,c,H.h([],u.U))
s.r=t
s.f=c
return s},
on:function(a,b,c){var t=new U.cw("smart-quote",H.h([],u.eD),new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,a)
t.aJ(a,b,c)
t.eq(a,b,c)
return t},
ha:function(a,b,c,d){var t=d?b.cloneNode(!0):b
u.d.a(t)
t.toString
W.oT(t,u.fP.a(["nt-block-first","nt-block-last","nt-block-standalone","nt-block-middle","nt-block-clause-first","nt-block-clause-last","nt-block-clause-standalone","nt-block-clause-middle"]))
t.classList.add(c)
a.appendChild(t)},
kz:function(a,b,c,d){var t,s=b.length
if(s===0)return
if(s===1)U.ha(a,C.a.gJ(b).r1,c+"-standalone",d)
else{U.ha(a,C.a.gJ(b).r1,c+"-first",d)
for(t=1;t<b.length-1;++t)U.ha(a,b[t].r1,c+"-middle",d)
U.ha(a,C.a.gaD(b).r1,c+"-last",d)}},
kA:function(){return new U.cY("#9977aa","#ffffff","#ffffff")},
ll:function(a,b,c,d){var t=H.h(["id","action","required","isAttachable","placement","instanceId","type","format","closeClauses","closeStarter","limit","note","blockColor","textColor","borderColor","font","clauses","params","properties","propertiesDisplay"],u.s),s=u.by
t=new U.ao(new U.a4(t),b,c,new H.a9(s),new H.a9(s),H.h([],u.cA),"child",a)
if(b==null){s=a.cx
t.b=s
a.cx=s+1}else if(b>=a.cx)a.cx=b+1
if(!d){s=a.cy
t.c=s
a.cy=s+1}return t},
hg:function(a,b){var t,s,r=a.dy
if(r!=null){t=b.style
t.borderColor=r}r=a.dx
if(r!=null){t=b.style
t.color=r}r=a.fr
if(r!=null){t=b.style
s=t.lineHeight
t.font=r
r=b.style
r.lineHeight=s}},
kB:function(a,b,c){var t,s=Z.lz(b,a.k1,"input, textarea, button, select, option","nt-block-dragging")
s.gdN(s).u(a.gbB())
s.gdM(s).u(a.gc5())
t=Z.ci(b,a.id.r1)
t.gap(t).u(a.ga0())
t.gan(t).u(new U.hm(c))
t.gao(t).u(new U.hn(c))},
lo:function(a,b){var t,s=document.createElement("div")
s.classList.add("nt-cap")
t=b.ah()
W.kL(s,u.t.a(H.h([t,t+"-color"],u.s)))
U.hg(b,s)
if(a)s.classList.add("nt-cap-top")
else s.classList.add("nt-cap-bottom")
U.kB(b,s,new U.hp(b))
return s},
hs:function(a,b,c,d){var t
a.toString
C.b.F(a,"")
if(C.a.gJ(b).gaS()){a.classList.add("nt-chain-starter")
a.classList.remove("nt-chain-fragment")
a.appendChild(U.lo(!0,C.a.gJ(b)))}else{a.classList.remove("nt-chain-starter")
a.classList.add("nt-chain-fragment")
if(d!=null)a.appendChild(d)
a.appendChild(U.lR(!0,C.a.gJ(b)))}U.kz(a,b,"nt-block",c)
t=C.a.gaD(b).fy
if(t==null?!0:!t)a.appendChild(U.lR(!1,C.a.gaD(b)))
else a.appendChild(U.lo(!1,C.a.gaD(b)))},
pK:function(a,b){var t,s,r,q,p=u.Y
p.a(a)
p.a(b)
p=a.a
t=p.length
if(t!==0){if(0>=t)return H.o(p,0)
s=p[0].d==null}else s=!0
if(s)return-1
s=b.a
r=s.length
if(r!==0){if(0>=r)return H.o(s,0)
q=s[0].d==null}else q=!0
if(q)return 1
if(0>=t)return H.o(p,0)
p=p[0].d
if(0>=r)return H.o(s,0)
return J.ld(p,s[0].d)},
d_:function(a){var t=a.Z()
if(t==null)t=""
return a.aH()?'"'+t+'"':t},
d0:function(a){var t,s,r,q,p=a.d
if(p!=null){for(t=a.e,s=0;s<t.length;++s){r="{"+s+"}"
if(s>=t.length)return H.o(t,s)
q=U.d0(t[s])
if(typeof q!="string")H.D(H.bb(q))
p=H.l4(p,r,q)}return p}else{t=a.e
r=t.length
if(r===1){r="("+H.a(a.b)+" "
if(0>=t.length)return H.o(t,0)
return r+H.a(U.d0(t[0]))+")"}else if(r===2){if(0>=r)return H.o(t,0)
r="("+H.a(U.d0(t[0]))+" "+H.a(a.b)+" "
if(1>=t.length)return H.o(t,1)
return r+H.a(U.d0(t[1]))+")"}else return a.b}},
ly:function(a,b){var t
$.ey=a.id.c
$.lv=b.d.E(0,U.d7(b.a))
t=a.go
$.eu=t==="child"||t==="anywhere"
$.aO=!1},
d7:function(a){var t,s,r,q=J.W(a)
if(a.offsetParent==null){q=q.gaV(a)
return new P.J(q.a,q.b,q.$ti.i("J<1>"))}else{q=q.gaV(a)
t=q.$ti.i("J<1>")
s=t.a(U.d7(a.offsetParent))
r=s.a
if(typeof r!=="number")return H.a0(r)
s=s.b
if(typeof s!=="number")return H.a0(s)
return new P.J(q.a+r,q.b+s,t)}},
lG:function(a,b){var t=new U.ae(a,"num",H.h([],u.U))
t.ep(a,b)
return t},
lR:function(a,b){var t,s,r=document.createElement("div")
r.classList.add("nt-notch")
t=b.ah()
r.classList.add(t)
U.hg(b,r)
if(a)r.classList.add("nt-notch-top")
else r.classList.add("nt-notch-bottom")
s=t+"-color"
C.a.t(H.h(["filler","left","middle","right"],u.s),new U.iI(s,a,b,r))
U.kB(b,r,new U.iJ(b))
return r},
lS:function(a,b){var t,s,r,q,p=document,o=p.createElement("div")
o.classList.add("nt-notch")
t=b.d
s=t.ah()
o.classList.add(s)
U.hg(t,o)
if(a)o.classList.add("nt-notch-top")
else o.classList.add("nt-notch-bottom")
r=s+"-color"
C.a.t(H.h(["filler","left","middle","right"],u.s),new U.iH(r,a,b,o))
if(!a){q=p.createElement("div")
q.className="nt-notch-clause-filler"
o.appendChild(q)}return o},
cc:function(a){var t=new U.en()
t.b=a.b
t.c=a.c
return t},
mo:function(a,b,c,d){U.pl(a,new U.kb(b),c,d)},
pl:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k="version",j="blockStyles",i="variables",h="expressions",g=H.q(d.C(k)?d.h(0,k):0)
if(typeof g!=="number")return g.L()
if(g>5)H.D("Somehow the given model version ("+g+") is greater than the supported NetTango version (5).")
if(g<1)U.oB(d)
if(g<2)U.kK(d,U.mL(),U.mL())
if(g<3)U.oH(d)
if(g<4){U.oI(d)
U.kJ(d,U.mM(),U.mM())}if(g<5){U.kJ(d,U.mO(),U.mO())
U.kJ(d,U.mN(),U.mN())}d.j(0,k,5)
q=new U.hx(b,c)
switch(a){case"NetLogo":q.b=new U.eE("","end","[","]")
break
default:q.b=new U.eE("","","","")
break}t=q
try{if($.aB.I(c))$.aB.h(0,c).r2.fK()
if(!J.bK(d.h(0,k),5))H.D("The supported NetTango version is 5, but the given definition version was "+H.a(d.h(0,k))+".")
p=new U.a4(H.h(["version","height","width","blocks","program","chainOpen","chainClose","blockStyles","variables","expressions"],u.s))
o=new U.bP(p,5,c,t,H.h([],u.cM),[],H.h([],u.ga),600,600,450)
n="#"+H.a(c)
n=u.d.a(document.querySelector(n))
o.d=n
if(n==null)H.D("No container element with ID "+H.a(c)+" found.");(n&&C.b).F(n,"")
n.classList.add("nt-container")
m=new U.d6(c,!0)
o.k4=m
o.r1=new U.d6(c,!1)
m=o.r2=Z.ci(n,m)
m.gap(m).u(o.gfF())
o.go=$.l7()
o.id=$.l6()
o.k1=$.l5()
m=o.d.style
n=H.a(o.fr)+"px"
m.minHeight=n
n=o.d.style
m=H.a(o.fy)+"px"
n.minWidth=m
n=o.d.style
m=H.a(o.fy)+"px"
n.maxWidth=m
o.db=new U.eo(o,H.h([],u.dk))
p.b=d
p=H.q(H.cN(d.h(0,"height"))?d.h(0,"height"):600)
o.fr=p
n=o.d.style
p=H.a(p)+"px"
n.minHeight=p
p=H.q(H.cN(d.h(0,"width"))?d.h(0,"width"):450)
o.fy=p
n=o.d.style
p=H.a(p)+"px"
n.minWidth=p
p=o.d.style
n=H.a(o.fy)+"px"
p.maxWidth=n
p=d.h(0,"chainOpen")
o.z=p==null?null:J.z(p)
p=d.h(0,"chainClose")
o.Q=p==null?null:J.z(p)
if(d.C(j)){p=u.b
o.go=U.l3(p.a(J.c8(d.h(0,j),"starterBlockStyle")),"#bb5555")
o.id=U.l3(p.a(J.c8(d.h(0,j),"containerBlockStyle")),"#8899aa")
o.k1=U.l3(p.a(J.c8(d.h(0,j),"commandBlockStyle")),"#9977aa")}if(d.h(0,"blocks") instanceof P.v)U.qe(o,u.F.a(d.h(0,"blocks")))
if(d.h(0,i) instanceof P.v)o.dx=u.j.a(d.h(0,i))
if(d.h(0,h) instanceof P.v)U.qd(o,u.F.a(d.h(0,h)))
if(d.h(0,"program") instanceof P.P)U.qf(o,u.b.a(d.h(0,"program")))
s=o
$.aB.j(0,c,s)
s.fM()}catch(l){p=H.L(l)
if(p instanceof P.dd){r=p
throw H.b(P.de("There was an error initializing the workspace with the given NetTango model JSON.",r))}else throw l}},
o2:function(a,b,c,d){H.r(a)
H.r(b)
H.r(c)
u.L.a(d)
if($.aB.h(0,b) instanceof U.bP)C.a.sk($.aB.h(0,b).ch,0)
U.mo(a,d,b,P.aj(C.i.c3(0,c,null)))},
o1:function(a,b,c){var t,s,r,q,p,o
H.r(a)
H.r(b)
u.L.a(c)
t=C.i.c3(0,b,null)
s=u.f
if(s.b(t))for(r=J.y(t.gK()),q=u.b,p=u.R;r.m();){o=H.r(r.gp())
if($.aB.h(0,o) instanceof U.bP)C.a.sk($.aB.h(0,o).ch,0)
t=C.i.c3(0,b,null)
if(!s.b(t)&&!p.b(t))H.D(P.b2("object must be a Map or Iterable"))
U.mo(a,c,o,q.a(P.bE(P.dj(t))))}},
o_:function(a,b){var t
H.r(a)
u.L.a(b)
if($.aB.I(a)){t=$.aB
if(b!=null){t=t.h(0,a)
return t.y.dI(t,!0,new U.iw(b))}else{t=t.h(0,a)
return t.y.dI(t,!0,null)}}return null},
o0:function(a,b,c){H.r(a)
H.q(b)
H.q(c)
if(!$.aB.I(a))throw H.b(P.bU("Unknown container ID: "+H.a(a)))
return U.d_($.aB.h(0,a).a3(b).e9(0,c))},
o4:function(a){var t
H.r(a)
if($.aB.I(a)){t=U.mD($.aB.h(0,a))
return H.r($.ef().h(0,"JSON").S("stringify",H.h([t],u.v)))}else return"{}"},
o3:function(){var t,s,r,q=u.z,p=P.bX(q,q)
for(q=$.aB,q=new H.ap(q,H.i(q).i("ap<1>")),q=q.gw(q),t=u.v;q.m();){s=q.d
r=U.mD($.aB.h(0,s))
p.j(0,s,$.ef().h(0,"JSON").S("stringify",H.h([r],t)))}return C.i.fP(C.i,null)},
mK:function(){var t=$.ef(),s=u.N
t.j(0,"NetTango_blockPlacementOptions",P.aj(P.a5(["starter","starter","child","child","anywhere","anywhere"],s,s)))
t.j(0,"NetTango_selectQuoteOptions",P.aj(P.a5(["always","always-quote","never","never-quote","smart","smart-quote"],s,s)))
t.j(0,"NetTango_InitWorkspace",U.q6())
t.j(0,"NetTango_InitAllWorkspaces",U.q5())
t.j(0,"NetTango_ExportCode",U.q3())
t.j(0,"NetTango_FormatAttributeValue",U.q4())
t.j(0,"NetTango_Save",U.q8())
t.j(0,"NetTango_SaveAll",U.q7())},
qe:function(a,b){var t,s,r,q,p,o,n,m
for(t=H.i(b).i("N<k.E>"),s=new H.N(b,b.gk(b),t),r=u.b;s.m();){q=H.q(r.a(s.d).h(0,"id"))
if(q!=null&&q>a.cx){if(typeof q!=="number")return q.v()
a.cx=q+1}}for(t=new H.N(b,b.gk(b),t);t.m();){p=r.a(t.d)
o=U.mY(a,p)
if(a.db.by(o.b)!=null){o.b=null
o=o.bg(0,!0)
p.j(0,"id",o.b)}n=U.ql(p.h(0,"limit"),-1)
s=a.db
m=s.by(o.b)
if(m!=null)H.D(P.de("Cannot add a block with the same ID as an existing block\n  Adding: ("+H.a(o.b)+": "+H.a(o.d)+")\n  Existing: ("+H.a(m.b)+": "+H.a(m.d)+")",null))
C.a.l(s.b,new U.aR(o,s.a,n))}},
mY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=null,h="clauses",g="children",f="properties",e=b.h(0,"action"),d=e==null?"":J.z(e),c=U.ll(a,H.q(b.h(0,"id")),d,!0)
c.a.b=b
b.j(0,"id",c.b)
if(b.h(0,h) instanceof P.v){c.sfB(H.h([],u.cA))
e=u.s
t=u.u
s=u.b
r=u.F
q=0
while(!0){p=H.k6(J.ad(b.h(0,h)))
if(typeof p!=="number")return H.a0(p)
if(!(q<p))break
p=s.a(J.c8(b.h(0,h),q))
o=p.h(0,"open")
n=o==null?i:J.z(o)
o=p.h(0,"close")
m=o==null?i:J.z(o)
o=p.h(0,"action")
d=o==null?i:J.z(o)
o=new U.a4(H.h(["children","action","open","close"],e))
l=new U.aM(o,c,q,d,n,m,H.h([],t))
o.b=p
if(p.h(0,g) instanceof P.v)l.sc1(U.qb(a,r.a(p.h(0,g))))
C.a.l(c.cy,l);++q}}e=b.h(0,"type")
c.e=e==null?"":J.z(e)
e=b.h(0,"format")
c.f=e==null?i:J.z(e)
e=b.h(0,"closeClauses")
c.r=e==null?i:J.z(e)
e=b.h(0,"closeStarter")
c.x=e==null?i:J.z(e)
e=b.h(0,"note")
c.y=e==null?i:J.z(e)
e=b.h(0,"blockColor")
c.db=e==null?i:J.z(e)
e=b.h(0,"textColor")
c.dx=e==null?i:J.z(e)
e=b.h(0,"borderColor")
c.dy=e==null?i:J.z(e)
e=b.h(0,"font")
c.fr=e==null?i:J.z(e)
c.fx=U.ks(b.h(0,"required"),c.fx)
c.fy=U.ks(b.h(0,"isTerminal"),c.fy)
e=b.h(0,"placement")
t=c.go
c.go=e==null?t:J.z(e)
if(b.h(0,"params") instanceof P.v)for(e=J.y(u.R.a(b.h(0,"params"))),t=c.z,s=u.b;e.m();){k=U.mU(c,s.a(e.gp()))
t.j(0,k.b,k)}if(b.h(0,f) instanceof P.v){for(e=J.y(u.R.a(b.h(0,f))),t=c.Q,s=u.b;e.m();){j=U.mU(c,s.a(e.gp()))
t.j(0,j.b,j)}e=b.h(0,"propertiesDisplay")
c.ch=e==null?"shown":J.z(e)}return c},
qb:function(a,b){var t,s,r=H.h([],u.u)
for(t=new H.N(b,b.gk(b),H.i(b).i("N<k.E>")),s=u.b;t.m();)C.a.l(r,U.mY(a,s.a(t.d)))
return r},
mU:function(a,b){var t,s,r,q,p="values",o=H.q(b.h(0,"id")),n=b.h(0,"type")
switch(n==null?"num":J.z(n)){case"int":t=new U.dg(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
t.y=1
t.x=U.ks(b.h(0,"random"),null)
t.y=U.bJ(b.h(0,"step"),t.y)
break
case"num":t=U.lH(a,o,"num")
break
case"bool":t=U.lH(a,o,"bool")
break
case"range":t=new U.ct(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
t.x=U.ks(b.h(0,"random"),!1)
t.y=U.bJ(b.h(0,"step"),t.y)
t.db=U.bJ(b.h(0,"min"),t.db)
t.dx=U.bJ(b.h(0,"max"),t.dx)
break
case"select":n=H.h([],u.eD)
t=new U.cw("smart-quote",n,new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
s=b.h(0,"quoteValues")
t.x=s==null?null:J.z(s)
if(b.h(0,p) instanceof P.v&&J.nm(J.ad(b.h(0,p)),0))for(s=J.y(u.R.a(b.h(0,p)));s.m();){r=s.gp()
q=J.au(r)
C.a.l(n,new U.bi(H.r(q.h(r,"actual")),H.r(q.h(r,"display"))))}break
case"text":t=new U.cD(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
break
default:t=new U.cD(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
break}n=b.h(0,"name")
t.d=n==null?"":J.z(n)
n=b.h(0,"unit")
t.e=n==null?"":J.z(n)
n=b.h(0,"default")
t.aY(n==null?"":J.z(n))
t.a.b=b
return t},
qd:function(a,b){var t,s,r,q,p,o,n,m,l,k,j="type",i="arguments"
if(b==null||b.gk(b)===0)return
for(t=new H.N(b,b.gk(b),H.i(b).i("N<k.E>")),s=a.dy,r=u.s,q=u.b,p=u.R;t.m();){o=q.a(t.d)
n=H.r(o.h(0,"name"))
m=H.r(o.h(0,j))
l=H.h([],r)
k=new U.dc(n,m,l)
if(n==null)H.D(P.ky("name"))
if(m==null)H.D(P.ky(j))
if(!C.a.G(H.h(["num","bool"],r),m))H.D(P.cU(m,j,"Expression definition type can only be 'num' or 'bool'."))
k.d=H.r(o.h(0,"format"))
if("arguments" in o.a&&o.h(0,i) instanceof P.v)for(n=J.y(p.a(o.h(0,i)));n.m();)C.a.l(l,H.r(n.gp()))
C.a.l(s,k)}},
qf:function(a,b){var t,s
if(!(b.h(0,"chains") instanceof P.v))return
for(t=J.y(u.R.a(b.h(0,"chains"))),s=u.b;t.m();)U.qc(a,s.a(t.gp()))},
qc:function(a,b){var t,s,r=new U.a4(H.h(["x","y","blocks"],u.s)),q=new U.aD(r,a,H.h([],u.u))
r.b=b
if(typeof b.h(0,"x")=="number"&&typeof b.h(0,"y")=="number"){q.d=J.c9(b.h(0,"x"))
q.e=J.c9(b.h(0,"y"))}C.a.l(a.ch,q)
if(!(b.h(0,"blocks") instanceof P.v))return
for(r=J.y(u.R.a(b.h(0,"blocks"))),t=u.b;r.m();){s=U.mV(a,t.a(r.gp()))
if(s!=null)C.a.l(q.a,s)}},
mV:function(a,b){var t,s,r,q,p,o,n,m,l,k="children",j=a.db.by(H.q(b.h(0,"id")))
if(j==null){P.ee("No prototype block found for id: "+H.a(b.h(0,"id")))
t=a.db.b
s=H.C(t)
P.ee(new H.T(t,s.i("e(1)").a(new U.kr()),s.i("T<1,e>")))
return null}r=j.bg(0,!1)
r.a.b=b
t=b.h(0,"propertiesDisplay")
r.ch=t==null?"shown":J.z(t)
t=u.F
U.mW(r.z,t.a(b.h(0,"params")))
U.mW(r.Q,t.a(b.h(0,"properties")))
if(b.h(0,"clauses") instanceof P.v)for(t=u.R,s=J.y(t.a(b.h(0,"clauses"))),q=u.b,p=0;s.m();){o=q.a(s.gp())
if(p>=r.cy.length)break
if(!(o.h(0,k) instanceof P.v))continue
n=r.cy
if(p>=n.length)return H.o(n,p)
m=n[p]
m.c.b=o
for(n=J.y(t.a(o.h(0,k)));n.m();){l=U.mV(a,q.a(n.gp()))
if(l!=null)C.a.l(m.a,l)}++p}return r},
mW:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i="value"
if(b==null)return
for(t=new H.N(b,b.gk(b),b.$ti.i("N<k.E>")),s=u.s,r=u.b,q=u.U;t.m();){p=r.a(t.d)
if(!("id" in p.a)||!a.I(p.h(0,"id")))continue
o=a.h(0,p.h(0,"id"))
o.a.b=p
if(p.h(0,i)==null)continue
if(C.a.G(H.h(["bool","num"],s),o.ga2(o))){if(!(o instanceof U.bV))throw H.b(P.bU("A non-expression attribute cannot have a type of 'num' or 'bool'."))
n=p.h(0,i)
m=o.c
l=o.f
if(n instanceof P.P){n=m.id
m=r.a(p.h(0,i))
k=new U.br(n)
k.c=new U.ae(k,l,H.h([],q))
if(m!=null)n=!0
else n=!1
if(n)k.c=U.mX(k,l,m)
o.r=k}else{n=m.id
m=J.z(p.h(0,i))
k=new U.br(n)
k.c=new U.ae(k,l,H.h([],q))
j=new U.ae(k,l,H.h([],q))
j.b=m
k.c=j
o.r=k}}else if(p.h(0,i) instanceof P.P){n=p.h(0,"defaultValue")
o.au(n==null?"":J.z(n))}else{n=p.h(0,i)
o.au(n==null?"":J.z(n))}}},
mX:function(a,b,c){var t,s="children",r=H.h([],u.U),q=new U.ae(a,b,r),p=c.h(0,"name")
q.b=p==null?"":J.z(p)
if(c.h(0,"format")!=null)q.d=H.r(c.h(0,"format"))
if(c.h(0,s) instanceof P.v)for(p=J.y(u.R.a(c.h(0,s))),t=u.b;p.m();)C.a.l(r,U.mX(a,b,t.a(p.gp())))
return q},
l3:function(a,b){var t,s,r="#ffffff"
if(a==null){t=new U.cY("#9977aa",r,r)
t.a=b
return t}t=new U.cY("#9977aa",r,r)
s=a.h(0,"blockColor")
t.a=s==null?b:J.z(s)
s=a.h(0,"textColor")
t.b=s==null?r:J.z(s)
s=a.h(0,"borderColor")
t.c=s==null?r:J.z(s)
s=a.h(0,"fontWeight")
t.d=s==null?"":J.z(s)
s=a.h(0,"fontSize")
t.e=s==null?"":J.z(s)
s=a.h(0,"fontFace")
t.f=s==null?"":J.z(s)
return t},
mD:function(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="blockStyles",a=u.N,a0=u.K,a1=P.aj(P.a5(["version",a2.b,"height",a2.fr,"width",a2.fy,"blocks",[],"program",P.a5(["chains",[]],a,u.j)],a,a0))
a2.a.aW(a1)
U.bI(a1,"chainOpen",a2.z,a)
U.bI(a1,"chainClose",a2.Q,a)
if(a2.go!=$.l7()||a2.id!=$.l6()||a2.k1!=$.l5()){t=u.z
a1.j(0,b,P.aj(P.bX(t,t)))
J.kv(a1.h(0,b),"starterBlockStyle",U.l_(a2.go))
J.kv(a1.h(0,b),"containerBlockStyle",U.l_(a2.id))
J.kv(a1.h(0,b),"commandBlockStyle",U.l_(a2.k1))}for(t=a2.db.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=t[r]
p=q.e
if(p===-1)p=null
o=U.kZ(q.a,p)
J.eg(a1.h(0,"blocks"),o)}t=a2.dx
if(t!=null&&J.le(t))a1.j(0,"variables",P.aY([],u.z))
t=a2.dy
s=t.length
if(s!==0){s=u.z
n=P.aY([],s)
a1.j(0,"expressions",n)
for(p=t.length,m=n.$ti.c,l=u.b,k=u.gB,r=0;r<t.length;t.length===p||(0,H.B)(t),++r){j=t[r]
i=P.a5(["name",j.a,"type",j.b],a,a)
h=l.a(P.bE(P.dj(i)))
i=j.c
if(i.length>0){g=[]
C.a.M(g,C.a.H(i,P.kp(),s))
h.j(0,"arguments",new P.v(g,k))}i=j.d
if(i!=null)h.j(0,"format",i)
n.S("push",[m.a(h)])}}f=J.c8(a1.h(0,"program"),"chains")
for(t=a2.ch,s=t.length,p=J.bc(f),m=u.b,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){e=t[r]
l=P.a5(["x",e.d,"y",e.e,"blocks",[]],a,a0)
d=m.a(P.bE(P.dj(l)))
e.c.aW(d)
for(l=e.a,k=l.length,c=0;c<l.length;l.length===k||(0,H.B)(l),++c){o=U.kZ(l[c],null)
J.eg(d.h(0,"blocks"),o)}p.l(f,d)}return a1},
l_:function(a){var t=u.N
return P.aj(P.a5(["blockColor",a.a,"textColor",a.b,"borderColor",a.c,"fontWeight",a.d,"fontSize",a.e,"fontFace",a.f],t,t))},
kZ:function(a,b){var t,s,r,q,p,o,n,m="push",l=P.aj(P.a5(["id",a.b,"action",a.d,"required",a.fx,"placement",a.go],u.N,u.K))
a.a.aW(l)
t=u.S
U.bI(l,"instanceId",a.c,t)
U.a8(l,"type",a.e)
U.a8(l,"format",a.f)
U.bI(l,"isTerminal",a.fy,u.y)
U.a8(l,"closeClauses",a.r)
U.a8(l,"closeStarter",a.x)
U.bI(l,"limit",b,t)
U.a8(l,"note",a.y)
U.a8(l,"blockColor",a.db)
U.a8(l,"textColor",a.dx)
U.a8(l,"borderColor",a.dy)
U.a8(l,"font",a.fr)
if(a.cy.length!==0){s=P.aY([],u.z)
l.j(0,"clauses",s)
for(t=a.cy,r=t.length,q=s.$ti.c,p=0;p<t.length;t.length===r||(0,H.B)(t),++p)s.S(m,[q.a(U.pM(t[p]))])}t=a.z
if(t.a!==0){o=P.aY([],u.z)
l.j(0,"params",o)
for(t=t.gar(t),r=H.i(t),r=new H.a6(J.y(t.a),t.b,r.i("@<1>").q(r.Q[1]).i("a6<1,2>")),t=o.$ti.c;r.m();)o.S(m,[t.a(U.mB(r.a))])}t=a.Q
if(t.a!==0){n=P.aY([],u.z)
l.j(0,"properties",n)
for(t=t.gar(t),r=H.i(t),r=new H.a6(J.y(t.a),t.b,r.i("@<1>").q(r.Q[1]).i("a6<1,2>")),t=n.$ti.c;r.m();)n.S(m,[t.a(U.mB(r.a))])
l.j(0,"propertiesDisplay",a.ch)}return l},
pM:function(a){var t,s,r,q,p,o=P.aj(P.a5(["children",[]],u.N,u.j))
a.c.aW(o)
U.a8(o,"action",a.f)
U.a8(o,"open",a.r)
U.a8(o,"close",a.x)
t=o.h(0,"children")
for(s=a.a,r=s.length,q=J.bc(t),p=0;p<s.length;s.length===r||(0,H.B)(s),++p)q.l(t,U.kZ(s[p],null))
return o},
bI:function(a,b,c,d){if(c!=null)a.j(0,b,c)},
a8:function(a,b,c){if(c!=null&&c!=="")a.j(0,b,c)},
mB:function(a){var t,s,r,q,p,o,n,m,l="value",k="default",j=u.N,i=P.aj(P.a5(["id",a.b,"type",a.ga2(a)],j,u.K))
a.a.aW(i)
U.a8(i,"name",a.d)
U.a8(i,"unit",a.e)
switch(a.ga2(a)){case"text":U.a8(i,l,a.Z())
U.a8(i,k,a.as())
break
case"select":u.fs.a(a)
U.a8(i,"quoteValues",a.x)
U.a8(i,l,a.Z())
U.a8(i,k,a.as())
t=P.aY([],u.z)
i.j(0,"values",t)
for(s=a.y,r=s.length,q=u.b,p=t.$ti.c,o=0;o<s.length;s.length===r||(0,H.B)(s),++o){n=s[o]
m=P.a5(["actual",n.a,"display",n.b],j,j)
t.S("push",[p.a(q.a(P.bE(P.dj(m))))])}break
case"int":case"range":u.cU.a(a)
i.j(0,"step",a.y)
U.bI(i,"random",a.x,u.y)
j=u.di
U.bI(i,l,a.f,j)
U.bI(i,k,a.r,j)
if(a instanceof U.ct){i.j(0,"min",a.db)
i.j(0,"max",a.dx)}break
case"num":case"bool":u.gs.a(a)
U.a8(i,k,a.as())
j=a.r.c
if(j!=null&&j.b!=null)if(j.e.length===0)i.j(0,l,a.Z())
else{i.j(0,l,U.mC(j))
i.j(0,"expressionValue",a.Z())}break
default:throw H.b(P.bU("Unknown attribute type "+a.ga2(a)))}return i},
mC:function(a){var t,s,r,q="children",p=u.N,o=P.aj(P.a5(["name",a.b,"type",a.c],p,p))
U.bI(o,"format",a.d,p)
p=a.e
if(p.length!==0){o.j(0,q,P.aY([],u.z))
for(t=p.length,s=0;s<p.length;p.length===t||(0,H.B)(p),++s){r=p[s]
J.eg(o.h(0,q),U.mC(r))}}return o},
ql:function(a,b){var t,s
if(a==null)return b
else if(H.cN(a))return a
else if(typeof a=="string")try{t=P.pV(a)
return t}catch(s){if(u.g8.b(H.L(s)))return b
else throw s}return b},
bJ:function(a,b){var t,s
if(a==null)return b
else if(typeof a=="number")return a
else if(typeof a=="string")try{t=P.mP(a,null)
return t}catch(s){if(u.g8.b(H.L(s)))return b
else throw s}return b},
ks:function(a,b){if(a==null)return b
else if(H.kc(a))return a
else if(typeof a=="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
oB:function(a){var t={},s=new H.a9(u.bT),r=new H.a9(u.aI)
t.a=0
U.kK(a,new U.j4(t,s,r),new U.j5(s,r))},
m0:function(a,b){var t={}
t.a=a
U.m1(b,new U.j3(t))
return t.a},
oA:function(a,b){var t,s
for(t=new H.N(b,b.gk(b),H.i(b).i("N<k.E>")),s=u.b;t.m();){s.a(t.d).j(0,"id",a)
if(typeof a!=="number")return a.v();++a}return a},
oz:function(a,b,c){var t,s
if(!c.C("action"))return
t=H.r(c.h(0,"action"))
if(a.I(t)){s=a.h(0,t)
c.j(0,"id",s)
U.m0(b.h(0,s),c)}},
oE:function(a){U.m1(a,U.q1())},
oC:function(a){var t="values"
if(!a.C(t)||!(a.h(0,t) instanceof P.v))return
a.j(0,t,P.aY(u.R.a(J.nx(a.h(0,t),new U.j6())),u.z))},
oD:function(a){var t,s,r
a.toString
t=a.$ti
s=t.i("w(k.E)").a(new U.j7())
r=a.gw(a)
t=new H.c4(r,s,t.i("c4<k.E>"))
s=u.b
for(;t.m();)U.oC(s.a(r.gp()))},
oH:function(a){var t,s,r="program"
U.kK(a,new U.j9(),U.q2())
if(!a.C(r)||!(a.h(0,r) instanceof P.P))return
t=u.b
s=t.a(a.h(0,r))
if(!s.C("chains")||!(s.h(0,"chains") instanceof P.v))return
U.oF(t.a(a.h(0,r)))},
oF:function(a){var t,s=u.F.a(a.h(0,"chains"))
s.toString
t=s.$ti
a.j(0,"chains",P.aY(new H.af(s,t.i("w(k.E)").a(new U.j8()),t.i("af<k.E>")),u.z))},
oG:function(a){if(typeof a.h(0,"x")=="number")a.j(0,"x",J.lc(a.h(0,"x"),10))
if(typeof a.h(0,"y")=="number")a.j(0,"y",J.lc(a.h(0,"y"),10))},
oI:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g="program",f="chains"
if(!a.C(g)||!(a.h(0,g) instanceof P.P))return
t=u.b
s=t.a(a.h(0,g))
if(!s.C(f)||!(s.h(0,f) instanceof P.v))return
r=P.aY([],u.z)
for(q=J.y(u.R.a(s.h(0,f))),p=r.$ti.c,o=u.N,n=u.K,m=u.F;q.m();){l=m.a(q.gp())
if(!l.gN(l)){k=C.e.bs(0)
if(0===k){k=0>=l.gk(l)
if(k)H.D(P.ab(0,0,l.gk(l),null,null))}j=H.i(l).c.a(l.cC(0,0))
k=J.au(j)
if(typeof k.h(j,"x")=="number"&&typeof k.h(j,"y")=="number"){i=J.c9(k.h(j,"x"))
h=J.c9(k.h(j,"y"))}else{i=0
h=0}}else{i=0
h=0}k=P.a5(["blocks",l,"x",i,"y",h],o,n)
r.S("push",[p.a(t.a(P.bE(P.dj(k))))])}s.j(0,f,r)},
oJ:function(a){a.c4("x")
a.c4("y")},
oK:function(a){var t="required",s="placement"
if(a.C(t)&&H.at(H.fX(a.h(0,t))))a.j(0,s,"starter")
else a.j(0,s,"child")},
oL:function(a){var t,s,r,q="children",p="clauses"
if(a.C(q)){t=a.h(0,q)
a.c4(q)
s=u.z
r=P.aj(P.bX(s,s))
r.j(0,q,t)
if(a.C(p))if(a.h(0,p) instanceof P.v)J.lf(a.h(0,p),0,r)
else{P.ee("Found a block with clauses that was not an array?  Block ID: "+H.a(a.h(0,"id"))+".  Replacing value.")
a.j(0,p,P.aY([],s))
J.eg(a.h(0,p),r)}else{a.j(0,p,P.aY([],s))
J.eg(a.h(0,p),r)}}else if(a.C(p)&&a.h(0,p) instanceof P.v){r=P.aj(P.a5(["children",[]],u.N,u.j))
J.lf(a.h(0,p),0,r)}},
kJ:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j="blocks",i="program",h="chains",g="children"
if(!a.C(j)||!(a.h(0,j) instanceof P.v))return
for(t=u.R,s=J.y(t.a(a.h(0,j))),r=u.b;s.m();)b.$1(r.a(s.gp()))
if(!a.C(i)||!(a.h(0,i) instanceof P.P))return
q=r.a(a.h(0,i))
if(!q.C(h)||!(q.h(0,h) instanceof P.v))return
for(s=J.y(t.a(q.h(0,h)));s.m();){p=r.a(s.gp())
if("blocks" in p.a&&p.h(0,j) instanceof P.v)for(o=J.y(t.a(p.h(0,j)));o.m();){n=r.a(o.gp())
c.$1(n)
m=n.a
if("children" in m&&n.h(0,g) instanceof P.v)for(l=J.y(t.a(n.h(0,g)));l.m();)c.$1(r.a(l.gp()))
if("clauses" in m&&n.h(0,"clauses") instanceof P.v)for(m=J.y(t.a(n.h(0,"clauses")));m.m();){k=r.a(m.gp())
if("children" in k.a&&k.h(0,g) instanceof P.v)for(l=J.y(t.a(k.h(0,g)));l.m();)c.$1(r.a(l.gp()))}}}},
kK:function(a,b,c){var t,s,r,q,p,o,n,m,l,k="blocks",j="children",i="program",h="chains"
if(!a.C(k)||!(a.h(0,k) instanceof P.v))return
for(t=u.R,s=J.y(t.a(a.h(0,k))),r=u.b;s.m();)b.$1(r.a(s.gp()))
for(s=J.y(t.a(a.h(0,k)));s.m();){q=r.a(s.gp())
p=q.a
if("children" in p&&q.h(0,j) instanceof P.v)for(o=J.y(t.a(q.h(0,j)));o.m();)c.$1(r.a(o.gp()))
if("clauses" in p&&q.h(0,"clauses") instanceof P.v)for(p=J.y(t.a(q.h(0,"clauses")));p.m();){n=r.a(p.gp())
if("children" in n.a&&n.h(0,j) instanceof P.v)for(o=J.y(t.a(n.h(0,j)));o.m();)c.$1(r.a(o.gp()))}}if(!a.C(i)||!(a.h(0,i) instanceof P.P))return
m=r.a(a.h(0,i))
if(!m.C(h)||!(m.h(0,h) instanceof P.v))return
for(t=J.y(t.a(m.h(0,h))),s=u.F;t.m();){l=s.a(t.gp())
for(p=new H.N(l,l.gk(l),H.i(l).i("N<k.E>"));p.m();)c.$1(r.a(p.d))}},
m1:function(a,b){var t="params",s="properties"
if(a.C(t)&&a.h(0,t) instanceof P.v)b.$1(u.F.a(a.h(0,t)))
if(a.C(s)&&a.h(0,s) instanceof P.v)b.$1(u.F.a(a.h(0,s)))},
aL:function aL(){},
h7:function h7(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
bV:function bV(a,b,c){var _=this
_.r=_.f=null
_.x=""
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
ia:function ia(){},
i9:function i9(){},
ib:function ib(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(){},
i8:function i8(){},
id:function id(){},
i7:function i7(){},
ie:function ie(a,b){this.a=a
this.b=b},
dg:function dg(a,b,c){var _=this
_.x=_.r=_.f=null
_.y=1
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
bZ:function bZ(){},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iL:function iL(a){this.a=a},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(a,b){this.a=a
this.b=b},
ct:function ct(a,b,c){var _=this
_.db=0
_.dx=10
_.x=_.r=_.f=null
_.y=1
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iR:function iR(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.b=b},
cw:function cw(a,b,c,d,e){var _=this
_.f=null
_.r=""
_.x=a
_.y=b
_.a=c
_.b=d
_.c=e
_.e=_.d=""},
iT:function iT(a){this.a=a},
iS:function iS(a){this.a=a},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cD:function cD(a,b,c){var _=this
_.r=_.f=""
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a){this.a=a},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a,b){this.a=a
this.b=b},
h9:function h9(){},
hb:function hb(a){this.a=a},
hc:function hc(){},
cX:function cX(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=""},
ao:function ao(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.y=_.x=_.r=_.f=_.e=null
_.z=d
_.Q=e
_.ch="shown"
_.cx=0
_.cy=f
_.fr=_.dy=_.dx=_.db=null
_.fx=!1
_.fy=null
_.go=g
_.id=h
_.k2=_.k1=null
_.k4=_.k3=!1
_.rx=_.r2=_.r1=null},
hh:function hh(a){this.a=a},
hk:function hk(a){this.a=a},
hl:function hl(){},
hi:function hi(a,b){this.a=a
this.b=b},
hj:function hj(a){this.a=a},
hm:function hm(a){this.a=a},
hn:function hn(a){this.a=a},
hp:function hp(a){this.a=a},
aD:function aD(a,b,c){var _=this
_.c=a
_.e=_.d=0
_.f=b
_.x=_.r=null
_.y=!1
_.a=c
_.b=null},
hq:function hq(a){this.a=a},
hr:function hr(a){this.a=a},
aM:function aM(a,b,c,d,e,f,g){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f
_.z=_.y=!1
_.cx=_.ch=_.Q=null
_.a=g
_.b=null},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
eE:function eE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hx:function hx(a,b){this.b=null
this.c=a
this.d=b},
hy:function hy(a,b){this.a=a
this.b=b},
hz:function hz(){},
d6:function d6(a,b){this.a=a
this.b=b},
ez:function ez(){var _=this
_.d=_.c=_.b=_.a=_.e=null},
dc:function dc(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ae:function ae(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c},
i6:function i6(a){this.a=a},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
ih:function ih(a,b){this.a=a
this.b=b},
il:function il(){},
ip:function ip(a,b){this.a=a
this.b=b},
im:function im(){},
io:function io(a,b){this.a=a
this.b=b},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
br:function br(a){this.a=a
this.c=this.b=null},
a4:function a4(a){this.a=a
this.b=null},
eo:function eo(a,b){this.a=a
this.b=b
this.d=null},
hf:function hf(a){this.a=a},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
iI:function iI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iJ:function iJ(a){this.a=a},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c1:function c1(){},
en:function en(){this.c=this.b=null},
bo:function bo(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eP:function eP(a){this.b=a},
eQ:function eQ(a,b,c){this.b=a
this.c=b
this.d=c},
aR:function aR(a,b,c){var _=this
_.a=a
_.d=b
_.e=c
_.y=_.x=_.r=_.f=null},
fc:function fc(a,b){this.a=null
this.d=a
this.e=b},
bP:function bP(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.x=_.r=_.f=_.e=_.d=null
_.y=d
_.Q=_.z=null
_.ch=e
_.cy=_.cx=0
_.db=null
_.dx=f
_.dy=g
_.fr=h
_.fx=i
_.fy=j
_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=null},
hH:function hH(a){this.a=a},
hI:function hI(){},
hA:function hA(a){this.a=a},
hB:function hB(){},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
hJ:function hJ(){},
kb:function kb(a){this.a=a},
iw:function iw(a){this.a=a},
kr:function kr(){},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a,b){this.a=a
this.b=b},
j3:function j3(a){this.a=a},
j6:function j6(){},
j7:function j7(){},
j9:function j9(){},
j8:function j8(){}}
var w=[C,H,J,P,W,Z,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kF.prototype={}
J.ai.prototype={
R:function(a,b){return a===b},
gA:function(a){return H.c0(a)},
n:function(a){return"Instance of '"+H.a(H.iP(a))+"'"},
bn:function(a,b){u.m.a(b)
throw H.b(P.lQ(a,b.gdJ(),b.gdR(),b.gdK()))}}
J.eG.prototype={
n:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$iw:1}
J.di.prototype={
R:function(a,b){return null==b},
n:function(a){return"null"},
gA:function(a){return 0},
bn:function(a,b){return this.eg(a,u.m.a(b))},
$iu:1}
J.bu.prototype={
gA:function(a){return 0},
n:function(a){return String(a)}}
J.f1.prototype={}
J.bx.prototype={}
J.b5.prototype={
n:function(a){var t=a[$.ku()]
if(t==null)return this.ej(a)
return"JavaScript function for "+H.a(J.z(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib4:1}
J.G.prototype={
l:function(a,b){H.C(a).c.a(b)
if(!!a.fixed$length)H.D(P.x("add"))
a.push(b)},
af:function(a,b,c){var t
H.C(a).c.a(c)
if(!!a.fixed$length)H.D(P.x("insert"))
t=a.length
if(b>t)throw H.b(P.cu(b,null))
a.splice(b,0,c)},
M:function(a,b){var t
H.C(a).i("d<1>").a(b)
if(!!a.fixed$length)H.D(P.x("addAll"))
for(t=J.y(b);t.m();)a.push(t.gp())},
t:function(a,b){var t,s
H.C(a).i("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.b(P.aN(a))}},
H:function(a,b,c){var t=H.C(a)
return new H.T(a,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("T<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
aZ:function(a,b){return H.al(a,b,null,H.C(a).c)},
B:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(H.cl())},
gaD:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.b(H.cl())},
V:function(a,b,c,d,e){var t,s,r,q,p=H.C(a)
p.i("d<1>").a(d)
if(!!a.immutable$list)H.D(P.x("setRange"))
P.lW(b,c,a.length)
t=c-b
if(t===0)return
P.aZ(e,"skipCount")
if(u.j.b(d)){p.i("t<1>").a(d)
s=e
r=d}else{r=J.nC(d,e).ag(0,!1)
s=0}p=J.au(r)
if(s+t>p.gk(r))throw H.b(H.lJ())
if(s<b)for(q=t-1;q>=0;--q)a[b+q]=p.h(r,s+q)
else for(q=0;q<t;++q)a[b+q]=p.h(r,s+q)},
ec:function(a,b,c,d){return this.V(a,b,c,d,0)},
dn:function(a,b){var t,s
H.C(a).i("w(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(H.at(b.$1(a[s])))return!0
if(a.length!==t)throw H.b(P.aN(a))}return!1},
cB:function(a,b){var t=H.C(a)
t.i("e(1,1)").a(b)
if(!!a.immutable$list)H.D(P.x("sort"))
H.or(a,b,t.c)},
G:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bK(a[t],b))return!0
return!1},
gN:function(a){return a.length===0},
gci:function(a){return a.length!==0},
n:function(a){return P.iv(a,"[","]")},
ag:function(a,b){var t=H.h(a.slice(0),H.C(a))
return t},
aq:function(a){return this.ag(a,!0)},
gw:function(a){return new J.aC(a,a.length,H.C(a).i("aC<1>"))},
gA:function(a){return H.c0(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.D(P.x("set length"))
if(b<0)throw H.b(P.ab(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.q(b)
if(!H.cN(b))throw H.b(H.bF(a,b))
if(b>=a.length||b<0)throw H.b(H.bF(a,b))
return a[b]},
j:function(a,b,c){H.q(b)
H.C(a).c.a(c)
if(!!a.immutable$list)H.D(P.x("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bF(a,b))
a[b]=c},
$in:1,
$id:1,
$it:1}
J.ix.prototype={}
J.aC.prototype={
gp:function(){return this.d},
m:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.b(H.B(r))
t=s.c
if(t>=q){s.scH(null)
return!1}s.scH(r[t]);++s.c
return!0},
scH:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
J.bt.prototype={
dz:function(a,b){var t
H.k6(b)
if(typeof b!="number")throw H.b(H.bb(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbk(b)
if(this.gbk(a)===t)return 0
if(this.gbk(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbk:function(a){return a===0?1/a<0:a<0},
bs:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.b(P.x(""+a+".toInt()"))},
fz:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.b(P.x(""+a+".ceil()"))},
c7:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.b(P.x(""+a+".floor()"))},
D:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.x(""+a+".round()"))},
hk:function(a,b){var t
if(b>20)throw H.b(P.ab(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gbk(a))return"-"+t
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
v:function(a,b){if(typeof b!="number")throw H.b(H.bb(b))
return a+b},
at:function(a,b){return a*b},
az:function(a,b){return(a|0)===a?a/b|0:this.fn(a,b)},
fn:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.b(P.x("Result of truncating division is "+H.a(t)+": "+H.a(a)+" ~/ "+b))},
bY:function(a,b){var t
if(a>0)t=this.fj(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
fj:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!="number")throw H.b(H.bb(b))
return a>b},
$iah:1,
$iY:1}
J.dh.prototype={$ie:1}
J.eH.prototype={}
J.bg.prototype={
dw:function(a,b){if(b<0)throw H.b(H.bF(a,b))
if(b>=a.length)H.D(H.bF(a,b))
return a.charCodeAt(b)},
b2:function(a,b){if(b>=a.length)throw H.b(H.bF(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.b(P.cU(b,null,null))
return a+b},
fR:function(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.ef(a,s-t)},
dV:function(a,b,c){P.kH(0,0,a.length,"startIndex")
return H.qi(a,b,c,0)},
ee:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
aa:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.cu(b,null))
if(b>c)throw H.b(P.cu(b,null))
if(c>a.length)throw H.b(P.cu(c,null))
return a.substring(b,c)},
ef:function(a,b){return this.aa(a,b,null)},
hj:function(a){return a.toLowerCase()},
aG:function(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(this.b2(q,0)===133){t=J.kE(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.dw(q,s)===133?J.o5(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
e0:function(a){var t,s
if(typeof a.trimLeft!="undefined"){t=a.trimLeft()
if(t.length===0)return t
s=this.b2(t,0)===133?J.kE(t,1):0}else{s=J.kE(a,0)
t=a}if(s===0)return t
if(s===t.length)return""
return t.substring(s)},
at:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.E)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
fH:function(a,b,c){var t=a.length
if(c>t)throw H.b(P.ab(c,0,t,null,null))
return H.qg(a,b,c)},
dz:function(a,b){var t
H.r(b)
if(typeof b!="string")throw H.b(H.bb(b))
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
if(b>=a.length||!1)throw H.b(H.bF(a,b))
return a[b]},
$if0:1,
$ic:1}
H.n.prototype={}
H.aa.prototype={
gw:function(a){var t=this
return new H.N(t,t.gk(t),H.i(t).i("N<aa.E>"))},
gN:function(a){return this.gk(this)===0},
gaD:function(a){var t=this
if(t.gk(t)===0)throw H.b(H.cl())
return t.B(0,t.gk(t)-1)},
bv:function(a,b){return this.ei(0,H.i(this).i("w(aa.E)").a(b))},
H:function(a,b,c){var t=H.i(this)
return new H.T(this,t.q(c).i("1(aa.E)").a(b),t.i("@<aa.E>").q(c).i("T<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
cn:function(a,b){var t,s,r,q=this
H.i(q).i("aa.E(aa.E,aa.E)").a(b)
t=q.gk(q)
if(t===0)throw H.b(H.cl())
s=q.B(0,0)
for(r=1;r<t;++r){s=b.$2(s,q.B(0,r))
if(t!==q.gk(q))throw H.b(P.aN(q))}return s}}
H.dz.prototype={
geJ:function(){var t=J.ad(this.a),s=this.c
if(s==null||s>t)return t
return s},
gfk:function(){var t=J.ad(this.a),s=this.b
if(typeof s!=="number")return s.L()
if(s>t)return t
return s},
gk:function(a){var t,s=J.ad(this.a),r=this.b
if(typeof r!=="number")return r.hp()
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
if(typeof t!=="number")return t.E()
return t-r},
B:function(a,b){var t,s=this,r=s.gfk()
if(typeof r!=="number")return r.v()
t=r+b
if(b>=0){r=s.geJ()
if(typeof r!=="number")return H.a0(r)
r=t>=r}else r=!0
if(r)throw H.b(P.bf(b,s,"index",null,null))
return J.aW(s.a,t)},
aZ:function(a,b){var t,s,r=this
P.aZ(b,"count")
t=r.b
if(typeof t!=="number")return t.v()
s=t+b
t=r.c
if(t!=null&&s>=t)return new H.bT(r.$ti.i("bT<1>"))
return H.al(r.a,s,t,r.$ti.c)},
hi:function(a,b){var t,s,r,q=this
P.aZ(b,"count")
t=q.c
s=q.b
if(t==null){if(typeof s!=="number")return s.v()
return H.al(q.a,s,s+b,q.$ti.c)}else{if(typeof s!=="number")return s.v()
r=s+b
if(t<r)return q
return H.al(q.a,s,r,q.$ti.c)}},
ag:function(a,b){var t,s,r,q,p,o=this,n=o.b,m=o.a,l=J.au(m),k=l.gk(m),j=o.c
if(j!=null&&j<k)k=j
if(typeof k!=="number")return k.E()
if(typeof n!=="number")return H.a0(n)
t=k-n
if(t<0)t=0
s=o.$ti.i("G<1>")
if(b){r=H.h([],s)
C.a.sk(r,t)}else{q=new Array(t)
q.fixed$length=Array
r=H.h(q,s)}for(p=0;p<t;++p){C.a.j(r,p,l.B(m,n+p))
if(l.gk(m)<k)throw H.b(P.aN(o))}return r},
aq:function(a){return this.ag(a,!0)}}
H.N.prototype={
gp:function(){return this.d},
m:function(){var t,s=this,r=s.a,q=J.au(r),p=q.gk(r)
if(s.b!==p)throw H.b(P.aN(r))
t=s.c
if(t>=p){s.saK(null)
return!1}s.saK(q.B(r,t));++s.c
return!0},
saK:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
H.aG.prototype={
gw:function(a){var t=H.i(this)
return new H.a6(J.y(this.a),this.b,t.i("@<1>").q(t.Q[1]).i("a6<1,2>"))},
gk:function(a){return J.ad(this.a)},
B:function(a,b){return this.b.$1(J.aW(this.a,b))}}
H.aX.prototype={$in:1}
H.a6.prototype={
m:function(){var t=this,s=t.b
if(s.m()){t.saK(t.c.$1(s.gp()))
return!0}t.saK(null)
return!1},
gp:function(){return this.a},
saK:function(a){this.a=this.$ti.Q[1].a(a)}}
H.T.prototype={
gk:function(a){return J.ad(this.a)},
B:function(a,b){return this.b.$1(J.aW(this.a,b))}}
H.af.prototype={
gw:function(a){return new H.c4(J.y(this.a),this.b,this.$ti.i("c4<1>"))},
H:function(a,b,c){var t=this.$ti
return new H.aG(this,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("aG<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)}}
H.c4.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(H.at(s.$1(t.gp())))return!0
return!1},
gp:function(){return this.a.gp()}}
H.c3.prototype={
gw:function(a){return new H.dB(J.y(this.a),this.b,H.i(this).i("dB<1>"))}}
H.d9.prototype={
gk:function(a){var t=J.ad(this.a),s=this.b
if(t>s)return s
return t},
$in:1}
H.dB.prototype={
m:function(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gp:function(){if(this.b<0)return null
return this.a.gp()}}
H.c2.prototype={
gw:function(a){return new H.dx(J.y(this.a),this.b,H.i(this).i("dx<1>"))}}
H.d8.prototype={
gk:function(a){var t=J.ad(this.a)-this.b
if(t>=0)return t
return 0},
$in:1}
H.dx.prototype={
m:function(){var t,s
for(t=this.a,s=0;s<this.b;++s)t.m()
this.b=0
return t.m()},
gp:function(){return this.a.gp()}}
H.bT.prototype={
gw:function(a){return C.x},
gk:function(a){return 0},
B:function(a,b){throw H.b(P.ab(b,0,0,"index",null))},
H:function(a,b,c){this.$ti.q(c).i("1(2)").a(b)
return new H.bT(c.i("bT<0>"))},
T:function(a,b){return this.H(a,b,u.z)},
ag:function(a,b){var t=new Array(0)
t.fixed$length=Array
t=H.h(t,this.$ti.i("G<1>"))
return t}}
H.db.prototype={
m:function(){return!1},
gp:function(){return null},
$iR:1}
H.Q.prototype={
sk:function(a,b){throw H.b(P.x("Cannot change the length of a fixed-length list"))},
l:function(a,b){H.X(a).i("Q.E").a(b)
throw H.b(P.x("Cannot add to a fixed-length list"))},
af:function(a,b,c){H.X(a).i("Q.E").a(c)
throw H.b(P.x("Cannot add to a fixed-length list"))}}
H.cA.prototype={
gA:function(a){var t=this._hashCode
if(t!=null)return t
t=536870911&664597*J.ac(this.a)
this._hashCode=t
return t},
n:function(a){return'Symbol("'+H.a(this.a)+'")'},
R:function(a,b){if(b==null)return!1
return b instanceof H.cA&&this.a==b.a},
$ib0:1}
H.d2.prototype={}
H.d1.prototype={
gN:function(a){return this.gk(this)===0},
n:function(a){return P.iC(this)},
j:function(a,b,c){var t=H.i(this)
t.c.a(b)
t.Q[1].a(c)
return H.nP()},
aE:function(a,b,c,d){var t=P.bX(c,d)
this.t(0,new H.hK(this,H.i(this).q(c).q(d).i("cn<1,2>(3,4)").a(b),t))
return t},
T:function(a,b){return this.aE(a,b,u.z,u.z)},
$iak:1}
H.hK.prototype={
$2:function(a,b){var t=H.i(this.a),s=this.b.$2(t.c.a(a),t.Q[1].a(b))
this.c.j(0,C.q.gh_(s),s.ghl(s))},
$S:function(){return H.i(this.a).i("u(1,2)")}}
H.d3.prototype={
gk:function(a){return this.a},
I:function(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.I(b))return null
return this.cW(b)},
cW:function(a){return this.b[H.r(a)]},
t:function(a,b){var t,s,r,q,p=H.i(this)
p.i("~(1,2)").a(b)
t=this.c
for(s=t.length,p=p.Q[1],r=0;r<s;++r){q=t[r]
b.$2(q,p.a(this.cW(q)))}},
gK:function(){return new H.dD(this,H.i(this).i("dD<1>"))}}
H.dD.prototype={
gw:function(a){var t=this.a.c
return new J.aC(t,t.length,H.C(t).i("aC<1>"))},
gk:function(a){return this.a.c.length}}
H.eI.prototype={
gdJ:function(){var t=this.a
return t},
gdR:function(){var t,s,r,q,p=this
if(p.c===1)return C.r
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return C.r
r=[]
for(q=0;q<s;++q){if(q>=t.length)return H.o(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gdK:function(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.u
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return C.u
p=new H.a9(u.eo)
for(o=0;o<s;++o){if(o>=t.length)return H.o(t,o)
n=t[o]
m=q+o
if(m<0||m>=r.length)return H.o(r,m)
p.j(0,new H.cA(n),r[m])}return new H.d2(p,u.gF)},
$ilI:1}
H.iO.prototype={
$2:function(a,b){var t
H.r(a)
t=this.a
t.b=t.b+"$"+H.a(a)
C.a.l(this.b,a)
C.a.l(this.c,b);++t.a},
$S:64}
H.j0.prototype={
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
H.eY.prototype={
n:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.a(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.eK.prototype={
n:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.a(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.a(s.a)+")"
return r+q+"' on '"+t+"' ("+H.a(s.a)+")"}}
H.ff.prototype={
n:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.kt.prototype={
$1:function(a){if(u.bU.b(a))if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.e_.prototype={
n:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$ias:1}
H.bO.prototype={
n:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.n2(s==null?"unknown":s)+"'"},
$ib4:1,
gho:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fb.prototype={}
H.f4.prototype={
n:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.n2(t)+"'"}}
H.cd.prototype={
R:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.cd))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gA:function(a){var t,s=this.c
if(s==null)t=H.c0(this.a)
else t=typeof s!=="object"?J.ac(s):H.c0(s)
return(t^H.c0(this.b))>>>0},
n:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.a(H.iP(t))+"'")}}
H.f2.prototype={
n:function(a){return"RuntimeError: "+H.a(this.a)}}
H.fh.prototype={
n:function(a){return"Assertion failed: "+P.bq(this.a)}}
H.a9.prototype={
gk:function(a){return this.a},
gN:function(a){return this.a===0},
gK:function(){return new H.ap(this,H.i(this).i("ap<1>"))},
gar:function(a){var t=H.i(this)
return H.lP(new H.ap(this,t.i("ap<1>")),new H.iy(this),t.c,t.Q[1])},
I:function(a){var t,s,r=this
if(typeof a=="string"){t=r.b
if(t==null)return!1
return r.cS(t,a)}else if(typeof a=="number"&&(a&0x3ffffff)===a){s=r.c
if(s==null)return!1
return r.cS(s,a)}else return r.fV(a)},
fV:function(a){var t=this.d
if(t==null)return!1
return this.bj(this.b4(t,J.ac(a)&0x3ffffff),a)>=0},
h:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.b5(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.b5(q,b)
r=s==null?o:s.b
return r}else return p.fW(b)},
fW:function(a){var t,s,r=this.d
if(r==null)return null
t=this.b4(r,J.ac(a)&0x3ffffff)
s=this.bj(t,a)
if(s<0)return null
return t[s].b},
j:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.i(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.cJ(t==null?n.b=n.bS():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.cJ(s==null?n.c=n.bS():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.bS()
q=J.ac(b)&0x3ffffff
p=n.b4(r,q)
if(p==null)n.bX(r,q,[n.bT(b,c)])
else{o=n.bj(p,b)
if(o>=0)p[o].b=c
else p.push(n.bT(b,c))}}},
a8:function(a,b){var t=this.fX(b)
return t},
fX:function(a){var t,s,r,q,p=this,o=p.d
if(o==null)return null
t=J.ac(a)&0x3ffffff
s=p.b4(o,t)
r=p.bj(s,a)
if(r<0)return null
q=s.splice(r,1)[0]
p.ev(q)
if(s.length===0)p.cV(o,t)
return q.b},
bf:function(a){var t=this
if(t.a>0){t.b=t.c=t.d=t.e=t.f=null
t.a=0
t.bR()}},
t:function(a,b){var t,s,r=this
H.i(r).i("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.b(P.aN(r))
t=t.c}},
cJ:function(a,b,c){var t,s=this,r=H.i(s)
r.c.a(b)
r.Q[1].a(c)
t=s.b5(a,b)
if(t==null)s.bX(a,b,s.bT(b,c))
else t.b=c},
bR:function(){this.r=this.r+1&67108863},
bT:function(a,b){var t,s=this,r=H.i(s),q=new H.iB(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{t=s.f
q.d=t
s.f=t.c=q}++s.a
s.bR()
return q},
ev:function(a){var t=this,s=a.d,r=a.c
if(s==null)t.e=r
else s.c=r
if(r==null)t.f=s
else r.d=s;--t.a
t.bR()},
bj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bK(a[s].a,b))return s
return-1},
n:function(a){return P.iC(this)},
b5:function(a,b){return a[b]},
b4:function(a,b){return a[b]},
bX:function(a,b,c){a[b]=c},
cV:function(a,b){delete a[b]},
cS:function(a,b){return this.b5(a,b)!=null},
bS:function(){var t="<non-identifier-key>",s=Object.create(null)
this.bX(s,t,s)
this.cV(s,t)
return s},
$ilN:1}
H.iy.prototype={
$1:function(a){var t=this.a
return t.h(0,H.i(t).c.a(a))},
$S:function(){return H.i(this.a).i("2(1)")}}
H.iB.prototype={}
H.ap.prototype={
gk:function(a){return this.a.a},
gN:function(a){return this.a.a===0},
gw:function(a){var t=this.a,s=new H.dm(t,t.r,this.$ti.i("dm<1>"))
s.c=t.e
return s}}
H.dm.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.aN(s))
else{s=t.c
if(s==null){t.scI(null)
return!1}else{t.scI(s.a)
t.c=t.c.c
return!0}}},
scI:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
H.kk.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.kl.prototype={
$2:function(a,b){return this.a(a,b)},
$S:39}
H.km.prototype={
$1:function(a){return this.a(H.r(a))},
$S:38}
H.eJ.prototype={
n:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$if0:1}
H.f7.prototype={
h:function(a,b){H.q(b)
if(b!==0)H.D(P.cu(b,null))
return this.c},
$idr:1}
H.jV.prototype={
m:function(){var t,s,r=this,q=r.c,p=r.b,o=p.length,n=r.a,m=n.length
if(q+o>m){r.d=null
return!1}t=n.indexOf(p,q)
if(t<0){r.c=m+1
r.d=null
return!1}s=t+o
r.d=new H.f7(t,p)
r.c=s===r.c?s+1:s
return!0},
gp:function(){return this.d},
$iR:1}
H.bY.prototype={
f5:function(a,b,c,d){var t=P.ab(b,0,c,d,null)
throw H.b(t)},
cM:function(a,b,c,d){if(b>>>0!==b||b>c)this.f5(a,b,c,d)},
$ib1:1}
H.aw.prototype={
gk:function(a){return a.length},
dh:function(a,b,c,d,e){var t,s,r=a.length
this.cM(a,b,r,"start")
this.cM(a,c,r,"end")
if(b>c)throw H.b(P.ab(b,0,c,null,null))
t=c-b
s=d.length
if(s-e<t)throw H.b(P.ax("Not enough elements"))
if(e!==0||s!==t)d=d.subarray(e,e+t)
a.set(d,b)},
$iZ:1}
H.bv.prototype={
h:function(a,b){H.q(b)
H.bn(b,a,a.length)
return a[b]},
j:function(a,b,c){H.q(b)
H.pd(c)
H.bn(b,a,a.length)
a[b]=c},
V:function(a,b,c,d,e){u.bM.a(d)
if(u.d4.b(d)){this.dh(a,b,c,d,e)
return}this.cE(a,b,c,d,e)},
$in:1,
$id:1,
$it:1}
H.aH.prototype={
j:function(a,b,c){H.q(b)
H.q(c)
H.bn(b,a,a.length)
a[b]=c},
V:function(a,b,c,d,e){u.gS.a(d)
if(u.bd.b(d)){this.dh(a,b,c,d,e)
return}this.cE(a,b,c,d,e)},
$in:1,
$id:1,
$it:1}
H.eR.prototype={
h:function(a,b){H.q(b)
H.bn(b,a,a.length)
return a[b]}}
H.eS.prototype={
h:function(a,b){H.q(b)
H.bn(b,a,a.length)
return a[b]}}
H.eT.prototype={
h:function(a,b){H.q(b)
H.bn(b,a,a.length)
return a[b]}}
H.eU.prototype={
h:function(a,b){H.q(b)
H.bn(b,a,a.length)
return a[b]}}
H.eV.prototype={
h:function(a,b){H.q(b)
H.bn(b,a,a.length)
return a[b]}}
H.dt.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
H.bn(b,a,a.length)
return a[b]}}
H.eW.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
H.bn(b,a,a.length)
return a[b]}}
H.dS.prototype={}
H.dT.prototype={}
H.dU.prototype={}
H.dV.prototype={}
H.aQ.prototype={
i:function(a){return H.fR(v.typeUniverse,this,a)},
q:function(a){return H.pb(v.typeUniverse,this,a)}}
H.fv.prototype={}
H.ft.prototype={
n:function(a){return this.a}}
H.e4.prototype={}
P.jd.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:26}
P.jc.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:55}
P.je.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:1}
P.jf.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:1}
P.jZ.prototype={
eu:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cS(new P.k_(this,b),0),a)
else throw H.b(P.x("`setTimeout()` not found."))}}
P.k_.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.ag.prototype={}
P.b9.prototype={
ac:function(){},
ad:function(){},
saQ:function(a){this.dy=this.$ti.a(a)},
sb9:function(a){this.fr=this.$ti.a(a)}}
P.bz.prototype={
gb6:function(){return this.c<4},
eK:function(){var t=this.r
if(t!=null)return t
return this.r=new P.a3($.H,u._)},
de:function(a){var t,s
H.i(this).i("b9<1>").a(a)
t=a.fr
s=a.dy
if(t==null)this.scX(s)
else t.saQ(s)
if(s==null)this.sd2(t)
else s.sb9(t)
a.sb9(a)
a.saQ(a)},
bZ:function(a,b,c,d){var t,s,r,q,p,o=this,n=H.i(o)
n.i("~(1)").a(a)
u.M.a(c)
if((o.c&4)!==0){if(c==null)c=P.mz()
n=new P.cH($.H,c,n.i("cH<1>"))
n.df()
return n}t=$.H
s=d?1:0
r=n.i("b9<1>")
q=new P.b9(o,t,s,r)
q.cG(a,b,c,d,n.c)
q.sb9(q)
q.saQ(q)
r.a(q)
q.dx=o.c&1
p=o.e
o.sd2(q)
q.saQ(null)
q.sb9(p)
if(p==null)o.scX(q)
else p.saQ(q)
if(o.d==o.e)P.mv(o.a)
return q},
f9:function(a){var t=this,s=H.i(t)
a=s.i("b9<1>").a(s.i("a2<1>").a(a))
if(a.dy===a)return null
s=a.dx
if((s&2)!==0)a.dx=s|4
else{t.de(a)
if((t.c&2)===0&&t.d==null)t.bH()}return null},
b1:function(){if((this.c&4)!==0)return new P.b6("Cannot add new events after calling close")
return new P.b6("Cannot add new events while doing an addStream")},
l:function(a,b){var t=this
H.i(t).c.a(b)
if(!t.gb6())throw H.b(t.b1())
t.bc(b)},
c2:function(a){var t,s=this
if((s.c&4)!==0)return s.r
if(!s.gb6())throw H.b(s.b1())
s.c|=4
t=s.eK()
s.ay()
return t},
cY:function(a){var t,s,r,q,p=this
H.i(p).i("~(O<1>)").a(a)
t=p.c
if((t&2)!==0)throw H.b(P.ax("Cannot fire new event. Controller is already firing an event"))
s=p.d
if(s==null)return
r=t&1
p.c=t^3
for(;s!=null;){t=s.dx
if((t&1)===r){s.dx=t|2
a.$1(s)
t=s.dx^=1
q=s.dy
if((t&4)!==0)p.de(s)
s.dx&=4294967293
s=q}else s=s.dy}p.c&=4294967293
if(p.d==null)p.bH()},
bH:function(){var t=this
if((t.c&4)!==0&&t.r.a===0)t.r.cK(null)
P.mv(t.b)},
scX:function(a){this.d=H.i(this).i("b9<1>").a(a)},
sd2:function(a){this.e=H.i(this).i("b9<1>").a(a)},
$if5:1,
$imc:1,
$ibl:1,
$ibk:1}
P.e2.prototype={
gb6:function(){return P.bz.prototype.gb6.call(this)&&(this.c&2)===0},
b1:function(){if((this.c&2)!==0)return new P.b6("Cannot fire new event. Controller is already firing an event")
return this.el()},
bc:function(a){var t,s=this
s.$ti.c.a(a)
t=s.d
if(t==null)return
if(t===s.e){s.c|=2
t.aL(a)
s.c&=4294967293
if(s.d==null)s.bH()
return}s.cY(new P.jW(s,a))},
ay:function(){var t=this
if(t.d!=null)t.cY(new P.jX(t))
else t.r.cK(null)}}
P.jW.prototype={
$1:function(a){this.a.$ti.i("O<1>").a(a).aL(this.b)},
$S:function(){return this.a.$ti.i("u(O<1>)")}}
P.jX.prototype={
$1:function(a){this.a.$ti.i("O<1>").a(a).cN()},
$S:function(){return this.a.$ti.i("u(O<1>)")}}
P.aE.prototype={}
P.it.prototype={
$0:function(){var t,s,r,q,p
try{this.a.b3(this.b.$0())}catch(r){t=H.L(r)
s=H.aV(r)
q=t
p=s
if(p==null)p=P.lk(q)
this.a.aO(q,p)}},
$S:1}
P.fl.prototype={}
P.e3.prototype={}
P.c5.prototype={
h1:function(a){if((this.c&15)!==6)return!0
return this.b.b.cs(u.bN.a(this.d),a.a,u.y,u.K)},
fT:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.ag.b(t))return q.a(p.hg(t,a.a,a.b,s,r,u.l))
else return q.a(p.cs(u.bI.a(t),a.a,s,r))}}
P.a3.prototype={
e_:function(a,b,c){var t,s,r,q=this.$ti
q.q(c).i("1/(2)").a(a)
t=$.H
if(t!==C.f){c.i("@<0/>").q(q.c).i("1(2)").a(a)
if(b!=null)b=P.px(b,t)}s=new P.a3($.H,c.i("a3<0>"))
r=b==null?1:3
this.bF(new P.c5(s,r,a,b,q.i("@<1>").q(c).i("c5<1,2>")))
return s},
dZ:function(a,b){return this.e_(a,null,b)},
e5:function(a){var t,s
u.fO.a(a)
t=this.$ti
s=new P.a3($.H,t)
this.bF(new P.c5(s,8,a,null,t.i("@<1>").q(t.c).i("c5<1,2>")))
return s},
fi:function(a){this.$ti.c.a(a)
this.a=4
this.c=a},
bF:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.x.a(s.c)
s.c=a}else{if(r===2){t=u._.a(s.c)
r=t.a
if(r<4){t.bF(a)
return}s.a=r
s.c=t.c}P.cQ(null,null,s.b,u.M.a(new P.jo(s,a)))}},
da:function(a){var t,s,r,q,p,o=this,n={}
n.a=a
if(a==null)return
t=o.a
if(t<=1){s=u.x.a(o.c)
r=o.c=a
if(s!=null){for(;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=u._.a(o.c)
t=p.a
if(t<4){p.da(a)
return}o.a=t
o.c=p.c}n.a=o.bb(a)
P.cQ(null,null,o.b,u.M.a(new P.jv(n,o)))}},
ba:function(){var t=u.x.a(this.c)
this.c=null
return this.bb(t)},
bb:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
b3:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("aE<1>").b(a))if(r.b(a))P.jq(a,s)
else P.m5(a,s)
else{t=s.ba()
r.c.a(a)
s.a=4
s.c=a
P.cK(s,t)}},
aO:function(a,b){var t,s,r=this
u.l.a(b)
t=r.ba()
s=P.h5(a,b)
r.a=8
r.c=s
P.cK(r,t)},
eF:function(a){return this.aO(a,null)},
cK:function(a){var t=this,s=t.$ti
s.i("1/").a(a)
if(s.i("aE<1>").b(a)){t.ez(a)
return}t.a=1
P.cQ(null,null,t.b,u.M.a(new P.jp(t,a)))},
ez:function(a){var t=this,s=t.$ti
s.i("aE<1>").a(a)
if(s.b(a)){if(a.ghq()){t.a=1
P.cQ(null,null,t.b,u.M.a(new P.ju(t,a)))}else P.jq(a,t)
return}P.m5(a,t)},
$iaE:1}
P.jo.prototype={
$0:function(){P.cK(this.a,this.b)},
$S:1}
P.jv.prototype={
$0:function(){P.cK(this.b,this.a.a)},
$S:1}
P.jr.prototype={
$1:function(a){var t=this.a
t.a=0
t.b3(a)},
$S:26}
P.js.prototype={
$2:function(a,b){u.l.a(b)
this.a.aO(a,b)},
$1:function(a){return this.$2(a,null)},
$C:"$2",
$D:function(){return[null]},
$S:46}
P.jt.prototype={
$0:function(){this.a.aO(this.b,this.c)},
$S:1}
P.jp.prototype={
$0:function(){var t=this.a,s=t.$ti.c.a(this.b),r=t.ba()
t.a=4
t.c=s
P.cK(t,r)},
$S:1}
P.ju.prototype={
$0:function(){P.jq(this.b,this.a)},
$S:1}
P.jy.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.c
m=r.b.b.dX(u.fO.a(r.d),u.z)}catch(q){t=H.L(q)
s=H.aV(q)
if(n.d){r=u.n.a(n.a.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.b
if(r)p.b=u.n.a(n.a.a.c)
else p.b=P.h5(t,s)
p.a=!0
return}if(u.b9.b(m)){if(m instanceof P.a3&&m.a>=4){if(m.a===8){r=n.b
r.b=u.n.a(m.c)
r.a=!0}return}o=n.a.a
r=n.b
r.b=m.dZ(new P.jz(o),u.z)
r.a=!1}},
$S:0}
P.jz.prototype={
$1:function(a){return this.a},
$S:51}
P.jx.prototype={
$0:function(){var t,s,r,q,p,o,n,m=this
try{r=m.b
q=r.$ti
p=q.c
o=p.a(m.c)
m.a.b=r.b.b.cs(q.i("2/(1)").a(r.d),o,q.i("2/"),p)}catch(n){t=H.L(n)
s=H.aV(n)
r=m.a
r.b=P.h5(t,s)
r.a=!0}},
$S:0}
P.jw.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.c
if(H.at(q.h1(t))&&q.e!=null){p=l.b
p.b=q.fT(t)
p.a=!1}}catch(o){s=H.L(o)
r=H.aV(o)
q=u.n.a(l.a.a.c)
p=q.a
n=s
m=l.b
if(p==null?n==null:p===n)m.b=q
else m.b=P.h5(s,r)
m.a=!0}},
$S:0}
P.fi.prototype={}
P.U.prototype={
T:function(a,b){var t=H.i(this)
return new P.dQ(t.i("@(U.T)").a(b),this,t.i("dQ<U.T,@>"))},
gk:function(a){var t={},s=new P.a3($.H,u.fJ)
t.a=0
this.Y(new P.iV(t,this),!0,new P.iW(t,s),s.geE())
return s}}
P.iV.prototype={
$1:function(a){H.i(this.b).i("U.T").a(a);++this.a.a},
$S:function(){return H.i(this.b).i("u(U.T)")}}
P.iW.prototype={
$0:function(){this.b.b3(this.a.a)},
$C:"$0",
$R:0,
$S:1}
P.a2.prototype={}
P.f6.prototype={}
P.cF.prototype={
gA:function(a){return(H.c0(this.a)^892482866)>>>0},
R:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cF&&b.a===this.a}}
P.cG.prototype={
bU:function(){return this.x.f9(this)},
ac:function(){H.i(this.x).i("a2<1>").a(this)},
ad:function(){H.i(this.x).i("a2<1>").a(this)}}
P.O.prototype={
cG:function(a,b,c,d,e){var t,s=this,r=H.i(s)
r.i("~(O.T)").a(a)
s.sey(u.gu.q(r.i("O.T")).i("1(2)").a(a))
t=b==null?P.pI():b
if(u.da.b(t))s.b=s.d.dS(t,u.z,u.K,u.l)
else if(u.d5.b(t))s.b=u.bI.a(t)
else H.D(P.b2("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
r=u.M
r.a(c)
s.sf7(r.a(c==null?P.mz():c))},
ck:function(a){var t,s,r=this,q=r.e
if((q&8)!==0)return
t=(q+128|4)>>>0
r.e=t
if(q<128&&r.r!=null){s=r.r
if(s.a===1)s.a=3}if((q&4)===0&&(t&32)===0)r.d1(r.gb7())},
cq:function(){var t=this,s=t.e
if((s&8)!==0)return
if(s>=128){s=t.e=s-128
if(s<128)if((s&64)!==0&&t.r.c!=null)t.r.bA(t)
else{s=(s&4294967291)>>>0
t.e=s
if((s&32)===0)t.d1(t.gb8())}}},
a_:function(){var t=this,s=(t.e&4294967279)>>>0
t.e=s
if((s&8)===0)t.bI()
s=t.f
return s==null?$.h_():s},
bI:function(){var t,s=this,r=s.e=(s.e|8)>>>0
if((r&64)!==0){t=s.r
if(t.a===1)t.a=3}if((r&32)===0)s.sbV(null)
s.f=s.bU()},
aL:function(a){var t,s=this,r=H.i(s)
r.i("O.T").a(a)
t=s.e
if((t&8)!==0)return
if(t<32)s.bc(a)
else s.bG(new P.dE(a,r.i("dE<O.T>")))},
b0:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dg(a,b)
else this.bG(new P.fq(a,b))},
cN:function(){var t=this,s=t.e
if((s&8)!==0)return
s=(s|2)>>>0
t.e=s
if(s<32)t.ay()
else t.bG(C.F)},
ac:function(){},
ad:function(){},
bU:function(){return null},
bG:function(a){var t=this,s=H.i(t).i("e0<O.T>"),r=s.a(t.r)
if(r==null){r=new P.e0(s)
t.sbV(r)}r.l(0,a)
s=t.e
if((s&64)===0){s=(s|64)>>>0
t.e=s
if(s<128)t.r.bA(t)}},
bc:function(a){var t,s=this,r=H.i(s).i("O.T")
r.a(a)
t=s.e
s.e=(t|32)>>>0
s.d.ct(s.a,a,r)
s.e=(s.e&4294967263)>>>0
s.bK((t&4)!==0)},
dg:function(a,b){var t=this,s=t.e,r=new P.jh(t,a,b)
if((s&1)!==0){t.e=(s|16)>>>0
t.bI()
s=t.f
if(s!=null&&s!==$.h_())s.e5(r)
else r.$0()}else{r.$0()
t.bK((s&4)!==0)}},
ay:function(){var t,s=this,r=new P.jg(s)
s.bI()
s.e=(s.e|16)>>>0
t=s.f
if(t!=null&&t!==$.h_())t.e5(r)
else r.$0()},
d1:function(a){var t,s=this
u.M.a(a)
t=s.e
s.e=(t|32)>>>0
a.$0()
s.e=(s.e&4294967263)>>>0
s.bK((t&4)!==0)},
bK:function(a){var t,s,r=this,q=r.e
if((q&64)!==0&&r.r.c==null){q=r.e=(q&4294967231)>>>0
if((q&4)!==0)if(q<128){t=r.r
t=t==null||t.c==null}else t=!1
else t=!1
if(t){q=(q&4294967291)>>>0
r.e=q}}for(;!0;a=s){if((q&8)!==0){r.sbV(null)
return}s=(q&4)!==0
if(a===s)break
r.e=(q^32)>>>0
if(s)r.ac()
else r.ad()
q=(r.e&4294967263)>>>0
r.e=q}if((q&64)!==0&&q<128)r.r.bA(r)},
sey:function(a){this.a=H.i(this).i("~(O.T)").a(a)},
sf7:function(a){this.c=u.M.a(a)},
sbV:function(a){this.r=H.i(this).i("dW<O.T>").a(a)},
$ia2:1,
$ibl:1,
$ibk:1}
P.jh.prototype={
$0:function(){var t,s,r,q=this.a,p=q.e
if((p&8)!==0&&(p&16)===0)return
q.e=(p|32)>>>0
t=q.b
p=this.b
s=u.K
r=q.d
if(u.da.b(t))r.hh(t,p,this.c,s,u.l)
else r.ct(u.d5.a(t),p,s)
q.e=(q.e&4294967263)>>>0},
$S:0}
P.jg.prototype={
$0:function(){var t=this.a,s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.cr(t.c)
t.e=(t.e&4294967263)>>>0},
$S:0}
P.cL.prototype={
Y:function(a,b,c,d){var t=this.$ti
t.i("~(1)").a(a)
u.M.a(c)
return this.a.bZ(t.i("~(1)").a(a),d,c,!0===b)},
u:function(a){return this.Y(a,null,null,null)},
bm:function(a,b,c){return this.Y(a,null,b,c)}}
P.bA.prototype={
saU:function(a){this.a=u.gt.a(a)},
gaU:function(){return this.a}}
P.dE.prototype={
cl:function(a){this.$ti.i("bk<1>").a(a).bc(this.b)}}
P.fq.prototype={
cl:function(a){a.dg(this.b,this.c)}}
P.fp.prototype={
cl:function(a){a.ay()},
gaU:function(){return null},
saU:function(a){throw H.b(P.ax("No events after a done."))},
$ibA:1}
P.dW.prototype={
bA:function(a){var t,s=this
s.$ti.i("bk<1>").a(a)
t=s.a
if(t===1)return
if(t>=1){s.a=1
return}P.mZ(new P.jJ(s,a))
s.a=1}}
P.jJ.prototype={
$0:function(){var t,s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
t=q.$ti.i("bk<1>").a(this.b)
s=q.b
r=s.gaU()
q.b=r
if(r==null)q.c=null
s.cl(t)},
$S:1}
P.e0.prototype={
l:function(a,b){var t,s=this
u.gt.a(b)
t=s.c
if(t==null)s.b=s.c=b
else{t.saU(b)
s.c=b}}}
P.cH.prototype={
df:function(){var t=this
if((t.b&2)!==0)return
P.cQ(null,null,t.a,u.M.a(t.gfh()))
t.b=(t.b|2)>>>0},
ck:function(a){this.b+=4},
cq:function(){var t=this.b
if(t>=4){t=this.b=t-4
if(t<4&&(t&1)===0)this.df()}},
a_:function(){return $.h_()},
ay:function(){var t=this,s=t.b=(t.b&4294967293)>>>0
if(s>=4)return
t.b=(s|1)>>>0
t.a.cr(t.c)},
$ia2:1}
P.dH.prototype={
Y:function(a,b,c,d){var t,s,r,q=this.$ti
q.i("~(2)").a(a)
u.M.a(c)
b=!0===b
t=q.Q[1]
s=$.H
r=b?1:0
q=new P.cJ(this,s,r,q.i("@<1>").q(t).i("cJ<1,2>"))
q.cG(a,d,c,b,t)
q.sdi(this.a.bm(q.geO(),q.geR(),q.gf1()))
return q},
bm:function(a,b,c){return this.Y(a,null,b,c)}}
P.cJ.prototype={
aL:function(a){this.$ti.Q[1].a(a)
if((this.e&2)!==0)return
this.em(a)},
b0:function(a,b){if((this.e&2)!==0)return
this.en(a,b)},
ac:function(){var t=this.y
if(t==null)return
t.ck(0)},
ad:function(){var t=this.y
if(t==null)return
t.cq()},
bU:function(){var t=this.y
if(t!=null){this.sdi(null)
return t.a_()}return null},
eP:function(a){this.x.eQ(this.$ti.c.a(a),this)},
f2:function(a,b){u.l.a(b)
this.x.$ti.i("bl<2>").a(this).b0(a,b)},
eS:function(){this.x.$ti.i("bl<2>").a(this).cN()},
sdi:function(a){this.y=this.$ti.i("a2<1>").a(a)}}
P.dQ.prototype={
eQ:function(a,b){var t,s,r,q,p=this.$ti
p.c.a(a)
p.i("bl<2>").a(b)
t=null
try{t=this.b.$1(a)}catch(q){s=H.L(q)
r=H.aV(q)
b.b0(s,r)
return}b.aL(t)}}
P.cW.prototype={
n:function(a){return H.a(this.a)},
$iK:1,
gb_:function(){return this.b}}
P.fS.prototype={$im2:1}
P.kd.prototype={
$0:function(){var t,s=this.a,r=s.b
if(r==null)throw H.b(s.a)
t=H.b(s.a)
t.stack=r.n(0)
throw t},
$S:1}
P.fH.prototype={
cr:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.f===$.H){a.$0()
return}P.ms(q,q,this,a,u.o)}catch(r){t=H.L(r)
s=H.aV(r)
P.cP(q,q,this,t,u.l.a(s))}},
ct:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.f===$.H){a.$1(b)
return}P.mu(q,q,this,a,b,u.o,c)}catch(r){t=H.L(r)
s=H.aV(r)
P.cP(q,q,this,t,u.l.a(s))}},
hh:function(a,b,c,d,e){var t,s,r,q=null
d.i("@<0>").q(e).i("~(1,2)").a(a)
d.a(b)
e.a(c)
try{if(C.f===$.H){a.$2(b,c)
return}P.mt(q,q,this,a,b,c,u.o,d,e)}catch(r){t=H.L(r)
s=H.aV(r)
P.cP(q,q,this,t,u.l.a(s))}},
fv:function(a,b){return new P.jQ(this,b.i("0()").a(a),b)},
c0:function(a){return new P.jP(this,u.M.a(a))},
fw:function(a,b){return new P.jR(this,b.i("~(0)").a(a),b)},
h:function(a,b){return null},
dX:function(a,b){b.i("0()").a(a)
if($.H===C.f)return a.$0()
return P.ms(null,null,this,a,b)},
cs:function(a,b,c,d){c.i("@<0>").q(d).i("1(2)").a(a)
d.a(b)
if($.H===C.f)return a.$1(b)
return P.mu(null,null,this,a,b,c,d)},
hg:function(a,b,c,d,e,f){d.i("@<0>").q(e).q(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.H===C.f)return a.$2(b,c)
return P.mt(null,null,this,a,b,c,d,e,f)},
dS:function(a,b,c,d){return b.i("@<0>").q(c).q(d).i("1(2,3)").a(a)}}
P.jQ.prototype={
$0:function(){return this.a.dX(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.jP.prototype={
$0:function(){return this.a.cr(this.b)},
$S:0}
P.jR.prototype={
$1:function(a){var t=this.c
return this.a.ct(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.dI.prototype={
gk:function(a){return this.a},
gN:function(a){return this.a===0},
gK:function(){return new P.dJ(this,this.$ti.i("dJ<1>"))},
I:function(a){var t,s
if(typeof a=="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.eH(a)},
eH:function(a){var t=this.d
if(t==null)return!1
return this.aj(this.cZ(t,a),a)>=0},
h:function(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:P.m6(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:P.m6(r,b)
return s}else return this.eM(b)},
eM:function(a){var t,s,r=this.d
if(r==null)return null
t=this.cZ(r,a)
s=this.aj(t,a)
return s<0?null:t[s+1]},
j:function(a,b,c){var t,s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.Q[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){t=o.b
o.eD(t==null?o.b=P.m7():t,b,c)}else{s=o.d
if(s==null)s=o.d=P.m7()
r=H.mQ(b)&1073741823
q=s[r]
if(q==null){P.kM(s,r,[b,c]);++o.a
o.e=null}else{p=o.aj(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}}},
t:function(a,b){var t,s,r,q,p=this,o=p.$ti
o.i("~(1,2)").a(b)
t=p.cQ()
for(s=t.length,o=o.c,r=0;r<s;++r){q=t[r]
b.$2(o.a(q),p.h(0,q))
if(t!==p.e)throw H.b(P.aN(p))}},
cQ:function(){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
eD:function(a,b,c){var t=this.$ti
t.c.a(b)
t.Q[1].a(c)
if(a[b]==null){++this.a
this.e=null}P.kM(a,b,c)},
cZ:function(a,b){return a[H.mQ(b)&1073741823]}}
P.dL.prototype={
aj:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2){r=a[s]
if(r==null?b==null:r===b)return s}return-1}}
P.dJ.prototype={
gk:function(a){return this.a.a},
gN:function(a){return this.a.a===0},
gw:function(a){var t=this.a
return new P.dK(t,t.cQ(),this.$ti.i("dK<1>"))}}
P.dK.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw H.b(P.aN(q))
else if(r>=s.length){t.saN(null)
return!1}else{t.saN(s[r])
t.c=r+1
return!0}},
saN:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
P.dO.prototype={
gw:function(a){var t=this,s=new P.c7(t,t.r,H.i(t).i("c7<1>"))
s.c=t.e
return s},
gk:function(a){return this.a},
G:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.J.a(t[b])!=null}else{s=this.eG(b)
return s}},
eG:function(a){var t=this.d
if(t==null)return!1
return this.aj(t[this.bM(a)],a)>=0},
l:function(a,b){var t,s,r=this
H.i(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.cO(t==null?r.b=P.kN():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.cO(s==null?r.c=P.kN():s,b)}else return r.eC(b)},
eC:function(a){var t,s,r,q=this
H.i(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.kN()
s=q.bM(a)
r=t[s]
if(r==null)t[s]=[q.bL(a)]
else{if(q.aj(r,a)>=0)return!1
r.push(q.bL(a))}return!0},
a8:function(a,b){var t=this
if(typeof b=="string"&&b!=="__proto__")return t.dd(t.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return t.dd(t.c,b)
else return t.fa(b)},
fa:function(a){var t,s,r,q,p=this,o=p.d
if(o==null)return!1
t=p.bM(a)
s=o[t]
r=p.aj(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete o[t]
p.dk(q)
return!0},
cO:function(a,b){H.i(this).c.a(b)
if(u.J.a(a[b])!=null)return!1
a[b]=this.bL(b)
return!0},
dd:function(a,b){var t
if(a==null)return!1
t=u.J.a(a[b])
if(t==null)return!1
this.dk(t)
delete a[b]
return!0},
cP:function(){this.r=1073741823&this.r+1},
bL:function(a){var t,s=this,r=new P.fB(H.i(s).c.a(a))
if(s.e==null)s.e=s.f=r
else{t=s.f
r.c=t
s.f=t.b=r}++s.a
s.cP()
return r},
dk:function(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.cP()},
bM:function(a){return J.ac(a)&1073741823},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bK(a[s].a,b))return s
return-1}}
P.fB.prototype={}
P.c7.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.aN(s))
else{s=t.c
if(s==null){t.saN(null)
return!1}else{t.saN(t.$ti.c.a(s.a))
t.c=t.c.b
return!0}}},
saN:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
P.dp.prototype={$in:1,$id:1,$it:1}
P.k.prototype={
gw:function(a){return new H.N(a,this.gk(a),H.X(a).i("N<k.E>"))},
B:function(a,b){return this.h(a,b)},
t:function(a,b){var t,s
H.X(a).i("~(k.E)").a(b)
t=this.gk(a)
for(s=0;s<t;++s){b.$1(this.h(a,s))
if(t!==this.gk(a))throw H.b(P.aN(a))}},
gN:function(a){return this.gk(a)===0},
gci:function(a){return!this.gN(a)},
gJ:function(a){if(this.gk(a)===0)throw H.b(H.cl())
return this.h(a,0)},
H:function(a,b,c){var t=H.X(a)
return new H.T(a,t.q(c).i("1(k.E)").a(b),t.i("@<k.E>").q(c).i("T<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
aZ:function(a,b){return H.al(a,b,null,H.X(a).i("k.E"))},
ag:function(a,b){var t,s=H.h([],H.X(a).i("G<k.E>"))
C.a.sk(s,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.j(s,t,this.h(a,t))
return s},
aq:function(a){return this.ag(a,!0)},
l:function(a,b){var t
H.X(a).i("k.E").a(b)
t=this.gk(a)
this.sk(a,t+1)
this.j(a,t,b)},
V:function(a,b,c,d,e){var t,s,r,q,p=H.X(a)
p.i("d<k.E>").a(d)
P.lW(b,c,this.gk(a))
t=c-b
if(t===0)return
P.aZ(e,"skipCount")
if(p.i("t<k.E>").b(d)){s=e
r=d}else{r=H.al(d,e,null,H.X(d).i("k.E")).ag(0,!1)
s=0}p=J.au(r)
if(s+t>p.gk(r))throw H.b(H.lJ())
if(s<b)for(q=t-1;q>=0;--q)this.j(a,b+q,p.h(r,s+q))
else for(q=0;q<t;++q)this.j(a,b+q,p.h(r,s+q))},
af:function(a,b,c){var t=this
H.X(a).i("k.E").a(c)
P.bd(b,"index",u.S)
P.kH(b,0,t.gk(a),"index")
if(b===t.gk(a)){t.l(a,c)
return}t.sk(a,t.gk(a)+1)
t.V(a,b+1,t.gk(a),a,b)
t.j(a,b,c)},
n:function(a){return P.iv(a,"[","]")}}
P.dq.prototype={}
P.iD.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.a(a)
s.a=t+": "
s.a+=H.a(b)},
$S:29}
P.S.prototype={
t:function(a,b){var t,s
H.i(this).i("~(S.K,S.V)").a(b)
for(t=J.y(this.gK());t.m();){s=t.gp()
b.$2(s,this.h(0,s))}},
aE:function(a,b,c,d){var t,s,r,q
H.i(this).q(c).q(d).i("cn<1,2>(S.K,S.V)").a(b)
t=P.bX(c,d)
for(s=J.y(this.gK());s.m();){r=s.gp()
q=b.$2(r,this.h(0,r))
t.j(0,C.q.gh_(q),q.ghl(q))}return t},
T:function(a,b){return this.aE(a,b,u.z,u.z)},
gk:function(a){return J.ad(this.gK())},
gN:function(a){return J.nt(this.gK())},
n:function(a){return P.iC(this)},
$iak:1}
P.e7.prototype={
j:function(a,b,c){var t=this.$ti
t.c.a(b)
t.Q[1].a(c)
throw H.b(P.x("Cannot modify unmodifiable map"))}}
P.co.prototype={
h:function(a,b){return this.a.h(0,b)},
j:function(a,b,c){var t=this.$ti
this.a.j(0,t.c.a(b),t.Q[1].a(c))},
t:function(a,b){this.a.t(0,this.$ti.i("~(1,2)").a(b))},
gN:function(a){return this.a.a===0},
gk:function(a){return this.a.a},
gK:function(){var t=this.a
return new H.ap(t,H.i(t).i("ap<1>"))},
n:function(a){return P.iC(this.a)},
aE:function(a,b,c,d){return this.a.aE(0,this.$ti.q(c).q(d).i("cn<1,2>(3,4)").a(b),c,d)},
T:function(a,b){return this.aE(a,b,u.z,u.z)},
$iak:1}
P.dC.prototype={}
P.b_.prototype={
H:function(a,b,c){var t=H.i(this)
return new H.aX(this,t.q(c).i("1(b_.E)").a(b),t.i("@<b_.E>").q(c).i("aX<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
n:function(a){return P.iv(this,"{","}")},
B:function(a,b){var t,s,r,q="index"
P.bd(b,q,u.S)
P.aZ(b,q)
for(t=this.a7(),t=P.jE(t,t.r,H.i(t).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.b(P.bf(b,this,q,null,s))}}
P.dw.prototype={$in:1,$id:1,$iar:1}
P.dX.prototype={
M:function(a,b){var t
for(t=J.y(H.i(this).i("d<1>").a(b));t.m();)this.l(0,t.gp())},
H:function(a,b,c){var t=H.i(this)
return new H.aX(this,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("aX<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
n:function(a){return P.iv(this,"{","}")},
cj:function(a,b){var t,s=P.jE(this,this.r,H.i(this).c)
if(!s.m())return""
if(b===""){t=""
do t+=H.a(s.d)
while(s.m())}else{t=H.a(s.d)
for(;s.m();)t=t+b+H.a(s.d)}return t.charCodeAt(0)==0?t:t},
B:function(a,b){var t,s,r,q=this,p="index"
P.bd(b,p,u.S)
P.aZ(b,p)
for(t=P.jE(q,q.r,H.i(q).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.b(P.bf(b,q,p,null,s))},
$in:1,
$id:1,
$iar:1}
P.dP.prototype={}
P.dY.prototype={}
P.cM.prototype={}
P.fz.prototype={
h:function(a,b){var t,s=this.b
if(s==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{t=s[b]
return typeof t=="undefined"?this.f8(b):t}},
gk:function(a){return this.b==null?this.c.a:this.aP().length},
gN:function(a){return this.gk(this)===0},
gK:function(){if(this.b==null){var t=this.c
return new H.ap(t,H.i(t).i("ap<1>"))}return new P.fA(this)},
j:function(a,b,c){var t,s,r=this
if(r.b==null)r.c.j(0,b,c)
else if(r.I(b)){t=r.b
t[b]=c
s=r.a
if(s==null?t!=null:s!==t)s[b]=null}else r.fo().j(0,b,c)},
I:function(a){if(this.b==null)return this.c.I(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
t:function(a,b){var t,s,r,q,p=this
u.fH.a(b)
if(p.b==null)return p.c.t(0,b)
t=p.aP()
for(s=0;s<t.length;++s){r=t[s]
q=p.b[r]
if(typeof q=="undefined"){q=P.k7(p.a[r])
p.b[r]=q}b.$2(r,q)
if(t!==p.c)throw H.b(P.aN(p))}},
aP:function(){var t=u.j.a(this.c)
if(t==null)t=this.c=H.h(Object.keys(this.a),u.s)
return t},
fo:function(){var t,s,r,q,p,o=this
if(o.b==null)return o.c
t=P.bX(u.N,u.z)
s=o.aP()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.j(0,p,o.h(0,p))}if(q===0)C.a.l(s,null)
else C.a.sk(s,0)
o.a=o.b=null
return o.c=t},
f8:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
t=P.k7(this.a[a])
return this.b[a]=t}}
P.fA.prototype={
gk:function(a){var t=this.a
return t.gk(t)},
B:function(a,b){var t=this.a
if(t.b==null)t=t.gK().B(0,b)
else{t=t.aP()
if(b<0||b>=t.length)return H.o(t,b)
t=t[b]}return t},
gw:function(a){var t=this.a
if(t.b==null){t=t.gK()
t=t.gw(t)}else{t=t.aP()
t=new J.aC(t,t.length,H.C(t).i("aC<1>"))}return t}}
P.ep.prototype={}
P.cf.prototype={}
P.iu.prototype={
n:function(a){return"unknown"}}
P.cj.prototype={
dA:function(a){var t=this.cT(a,0,a.length)
return t==null?a:t},
cT:function(a,b,c){var t,s,r,q
for(t=b,s=null;t<c;++t){if(t>=a.length)return H.o(a,t)
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
default:r=null}if(r!=null){if(s==null)s=new P.aS("")
if(t>b)s.a+=C.d.aa(a,b,t)
s.a+=r
b=t+1}}if(s==null)return null
if(c>b)s.a+=J.nD(a,b,c)
q=s.a
return q.charCodeAt(0)==0?q:q}}
P.dk.prototype={
n:function(a){var t=P.bq(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
P.eL.prototype={
n:function(a){return"Cyclic error in JSON stringify"}}
P.iA.prototype={
c3:function(a,b,c){var t
u.ep.a(c)
t=P.pw(b,this.gfJ().a)
return t},
fP:function(a,b){var t
u.bc.a(b)
t=P.oW(a,this.gfQ().b,null)
return t},
gfQ:function(){return C.K},
gfJ:function(){return C.J}}
P.eN.prototype={}
P.eM.prototype={}
P.jC.prototype={
e8:function(a){var t,s,r,q,p,o,n=a.length
for(t=J.kj(a),s=this.c,r=0,q=0;q<n;++q){p=t.b2(a,q)
if(p>92)continue
if(p<32){if(q>r)s.a+=C.d.aa(a,r,q)
r=q+1
s.a+=H.aP(92)
switch(p){case 8:s.a+=H.aP(98)
break
case 9:s.a+=H.aP(116)
break
case 10:s.a+=H.aP(110)
break
case 12:s.a+=H.aP(102)
break
case 13:s.a+=H.aP(114)
break
default:s.a+=H.aP(117)
s.a+=H.aP(48)
s.a+=H.aP(48)
o=p>>>4&15
s.a+=H.aP(o<10?48+o:87+o)
o=p&15
s.a+=H.aP(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)s.a+=C.d.aa(a,r,q)
r=q+1
s.a+=H.aP(92)
s.a+=H.aP(p)}}if(r===0)s.a+=H.a(a)
else if(r<n)s.a+=t.aa(a,r,n)},
bJ:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.b(new P.eL(a,null))}C.a.l(t,a)},
bx:function(a){var t,s,r,q,p=this
if(p.e7(a))return
p.bJ(a)
try{t=p.b.$1(a)
if(!p.e7(t)){r=P.lM(a,null,p.gd9())
throw H.b(r)}r=p.a
if(0>=r.length)return H.o(r,-1)
r.pop()}catch(q){s=H.L(q)
r=P.lM(a,s,p.gd9())
throw H.b(r)}},
e7:function(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=C.c.n(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.e8(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.bJ(a)
r.hm(a)
t=r.a
if(0>=t.length)return H.o(t,-1)
t.pop()
return!0}else if(u.f.b(a)){r.bJ(a)
s=r.hn(a)
t=r.a
if(0>=t.length)return H.o(t,-1)
t.pop()
return s}else return!1},
hm:function(a){var t,s,r=this.c
r.a+="["
t=J.au(a)
if(t.gci(a)){this.bx(t.h(a,0))
for(s=1;s<t.gk(a);++s){r.a+=","
this.bx(t.h(a,s))}}r.a+="]"},
hn:function(a){var t,s,r,q,p,o,n=this,m={}
if(a.gN(a)){n.c.a+="{}"
return!0}t=a.gk(a)*2
s=new Array(t)
s.fixed$length=Array
r=m.a=0
m.b=!0
a.t(0,new P.jD(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.e8(H.r(s[r]))
q.a+='":'
o=r+1
if(o>=t)return H.o(s,o)
n.bx(s[o])}q.a+="}"
return!0}}
P.jD.prototype={
$2:function(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
C.a.j(t,s.a++,a)
C.a.j(t,s.a++,b)},
$S:29}
P.jB.prototype={
gd9:function(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
P.iE.prototype={
$2:function(a,b){var t,s,r
u.fo.a(a)
t=this.b
s=this.a
t.a+=s.a
r=t.a+=H.a(a.a)
t.a=r+": "
t.a+=P.bq(b)
s.a=", "},
$S:37}
P.w.prototype={}
P.ch.prototype={
l:function(a,b){return P.nQ(C.e.v(this.a,u.fu.a(b).ghr()),!1)},
R:function(a,b){if(b==null)return!1
return b instanceof P.ch&&this.a===b.a&&!0},
gA:function(a){var t=this.a
return(t^C.e.bY(t,30))&1073741823},
n:function(a){var t=this,s=P.nR(H.oh(t)),r=P.et(H.of(t)),q=P.et(H.ob(t)),p=P.et(H.oc(t)),o=P.et(H.oe(t)),n=P.et(H.og(t)),m=P.nS(H.od(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.ah.prototype={}
P.bS.prototype={
at:function(a,b){return new P.bS(C.e.D(this.a*b))},
R:function(a,b){if(b==null)return!1
return b instanceof P.bS&&this.a===b.a},
gA:function(a){return C.e.gA(this.a)},
n:function(a){var t,s,r,q=new P.i0(),p=this.a
if(p<0)return"-"+new P.bS(0-p).n(0)
t=q.$1(C.e.az(p,6e7)%60)
s=q.$1(C.e.az(p,1e6)%60)
r=new P.i_().$1(p%1e6)
return""+C.e.az(p,36e8)+":"+H.a(t)+":"+H.a(s)+"."+H.a(r)}}
P.i_.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:24}
P.i0.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:24}
P.K.prototype={
gb_:function(){return H.aV(this.$thrownJsError)}}
P.cV.prototype={
n:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bq(t)
return"Assertion failed"}}
P.eZ.prototype={
n:function(a){return"Throw of null."}}
P.aK.prototype={
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
n:function(a){var t,s,r,q,p=this,o=p.c,n=o!=null?" ("+o+")":""
o=p.d
t=o==null?"":": "+H.a(o)
s=p.gbP()+n+t
if(!p.a)return s
r=p.gbO()
q=P.bq(p.b)
return s+r+": "+q}}
P.dv.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var t,s,r=this.e
if(r==null){r=this.f
t=r!=null?": Not less than or equal to "+H.a(r):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.a(r)
else if(s>r)t=": Not in range "+H.a(r)+".."+H.a(s)+", inclusive"
else t=s<r?": Valid value range is empty":": Only valid value is "+H.a(r)}return t}}
P.eF.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var t,s=H.q(this.b)
if(typeof s!=="number")return s.ai()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.a(t)},
gk:function(a){return this.f}}
P.eX.prototype={
n:function(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new P.aS("")
k.a=""
for(t=l.c,s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=P.bq(o)
k.a=", "}l.d.t(0,new P.iE(k,j))
n=P.bq(l.a)
m=j.n(0)
t="NoSuchMethodError: method not found: '"+H.a(l.b.a)+"'\nReceiver: "+n+"\nArguments: ["+m+"]"
return t}}
P.fg.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.fe.prototype={
n:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b6.prototype={
n:function(a){return"Bad state: "+this.a}}
P.eq.prototype={
n:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bq(t)+"."}}
P.f_.prototype={
n:function(a){return"Out of Memory"},
gb_:function(){return null},
$iK:1}
P.dy.prototype={
n:function(a){return"Stack Overflow"},
gb_:function(){return null},
$iK:1}
P.es.prototype={
n:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.fu.prototype={
n:function(a){return"Exception: "+this.a},
$ii5:1}
P.dd.prototype={
n:function(a){var t,s=this.a,r=s!=null&&""!==s?"FormatException: "+H.a(s):"FormatException",q=this.b
if(typeof q=="string"){t=q.length>78?C.d.aa(q,0,75)+"...":q
return r+"\n"+t}else return r},
$ii5:1}
P.b4.prototype={}
P.e.prototype={}
P.d.prototype={
H:function(a,b,c){var t=H.i(this)
return H.lP(this,t.q(c).i("1(d.E)").a(b),t.i("d.E"),c)},
T:function(a,b){return this.H(a,b,u.z)},
bv:function(a,b){var t=H.i(this)
return new H.af(this,t.i("w(d.E)").a(b),t.i("af<d.E>"))},
gk:function(a){var t,s=this.gw(this)
for(t=0;s.m();)++t
return t},
gJ:function(a){var t=this.gw(this)
if(!t.m())throw H.b(H.cl())
return t.gp()},
gaw:function(a){var t,s=this.gw(this)
if(!s.m())throw H.b(H.cl())
t=s.gp()
if(s.m())throw H.b(H.nZ())
return t},
B:function(a,b){var t,s,r,q="index"
P.bd(b,q,u.S)
P.aZ(b,q)
for(t=this.gw(this),s=0;t.m();){r=t.gp()
if(b===s)return r;++s}throw H.b(P.bf(b,this,q,null,s))},
n:function(a){return P.nY(this,"(",")")}}
P.R.prototype={}
P.t.prototype={$in:1,$id:1}
P.cn.prototype={}
P.u.prototype={
gA:function(a){return P.E.prototype.gA.call(this,this)},
n:function(a){return"null"}}
P.Y.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
R:function(a,b){return this===b},
gA:function(a){return H.c0(this)},
n:function(a){return"Instance of '"+H.a(H.iP(this))+"'"},
bn:function(a,b){u.m.a(b)
throw H.b(P.lQ(this,b.gdJ(),b.gdR(),b.gdK()))},
toString:function(){return this.n(this)}}
P.dr.prototype={}
P.ar.prototype={}
P.as.prototype={}
P.fJ.prototype={
n:function(a){return""},
$ias:1}
P.c.prototype={$if0:1}
P.aS.prototype={
gk:function(a){return this.a.length},
n:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$iot:1}
P.b0.prototype={}
W.j.prototype={$ij:1}
W.ca.prototype={
n:function(a){return String(a)},
$ica:1}
W.ek.prototype={
n:function(a){return String(a)}}
W.cb.prototype={$icb:1}
W.bM.prototype={$ibM:1}
W.bN.prototype={$ibN:1}
W.ce.prototype={$ice:1}
W.b3.prototype={
gk:function(a){return a.length}}
W.I.prototype={$iI:1}
W.cg.prototype={
aM:function(a,b){var t=$.n4(),s=t[b]
if(typeof s=="string")return s
s=this.fl(a,b)
t[b]=s
return s},
fl:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.nT()+b
if(t in a)return t
return b},
bd:function(a,b,c,d){if(c==null)c=""
a.setProperty(b,c,d)},
gk:function(a){return a.length}}
W.hM.prototype={}
W.d4.prototype={$id4:1}
W.bQ.prototype={$ibQ:1}
W.hN.prototype={
n:function(a){return String(a)}}
W.d5.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
R:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.W(b)
t=a.left==t.gbl(b)&&a.top==t.gbu(b)&&a.width==t.gbw(b)&&a.height==t.gbi(b)}else t=!1
return t},
gA:function(a){return W.ma(J.ac(a.left),J.ac(a.top),J.ac(a.width),J.ac(a.height))},
gds:function(a){return a.bottom},
gbi:function(a){return a.height},
gbl:function(a){return a.left},
gdW:function(a){return a.right},
gbu:function(a){return a.top},
gbw:function(a){return a.width},
$ibw:1}
W.hO.prototype={
gk:function(a){return a.length},
l:function(a,b){return a.add(H.r(b))}}
W.fk.prototype={
gN:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var t
H.q(b)
t=this.b
if(b<0||b>=t.length)return H.o(t,b)
return u.h.a(t[b])},
j:function(a,b,c){var t
H.q(b)
u.h.a(c)
t=this.b
if(b<0||b>=t.length)return H.o(t,b)
this.a.replaceChild(c,t[b])},
sk:function(a,b){throw H.b(P.x("Cannot resize element lists"))},
l:function(a,b){u.h.a(b)
this.a.appendChild(b)
return b},
gw:function(a){var t=this.aq(this)
return new J.aC(t,t.length,H.C(t).i("aC<1>"))},
V:function(a,b,c,d,e){u.bq.a(d)
throw H.b(P.j2(null))},
af:function(a,b,c){var t,s,r,q=this,p=u.h
p.a(c)
t=q.b
s=t.length
if(b>s)throw H.b(P.ab(b,0,q.gk(q),null,null))
r=q.a
if(b===s)r.appendChild(c)
else{if(b>=s)return H.o(t,b)
r.insertBefore(c,p.a(t[b]))}},
bf:function(a){J.kw(this.a)},
gJ:function(a){var t=this.a.firstElementChild
if(t==null)throw H.b(P.ax("No elements"))
return t}}
W.an.prototype={
gk:function(a){return this.a.length},
h:function(a,b){var t
H.q(b)
t=this.a
if(b<0||b>=t.length)return H.o(t,b)
return this.$ti.c.a(t[b])},
j:function(a,b,c){H.q(b)
this.$ti.c.a(c)
throw H.b(P.x("Cannot modify list"))},
sk:function(a,b){throw H.b(P.x("Cannot modify list"))},
gJ:function(a){return this.$ti.c.a(C.P.gJ(this.a))},
$ilD:1}
W.p.prototype={
gfu:function(a){return new W.fr(a)},
gdu:function(a){return new W.fk(a,a.children)},
gdv:function(a){return new W.fs(a)},
gaV:function(a){var t=C.c.D(a.offsetLeft),s=C.c.D(a.offsetTop),r=C.c.D(a.offsetWidth),q=C.c.D(a.offsetHeight)
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.bw(t,s,r,q,u.q)},
a4:function(a,b){this.cc(a,"beforeend",b,null,null)},
n:function(a){return a.localName},
cc:function(a,b,c,d,e){var t,s=this.W(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(s,a)
break
case"afterbegin":t=a.childNodes
a.insertBefore(s,t.length>0?t[0]:null)
break
case"beforeend":a.appendChild(s)
break
case"afterend":a.parentNode.insertBefore(s,a.nextSibling)
break
default:H.D(P.b2("Invalid position "+b))}},
h0:function(a,b){if(!!a.matches)return a.matches(b)
else if(!!a.webkitMatchesSelector)return a.webkitMatchesSelector(b)
else if(!!a.mozMatchesSelector)return a.mozMatchesSelector(b)
else if(!!a.msMatchesSelector)return a.msMatchesSelector(b)
else if(!!a.oMatchesSelector)return a.oMatchesSelector(b)
else throw H.b(P.x("Not supported on this platform"))},
h2:function(a,b){var t=a
do{if(J.ny(t,b))return!0
t=t.parentElement}while(t!=null)
return!1},
W:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.lF
if(t==null){t=H.h([],u.eO)
s=new W.du(t)
C.a.l(t,W.m8(null))
C.a.l(t,W.md())
$.lF=s
d=s}else d=t
t=$.lE
if(t==null){t=new W.e8(d)
$.lE=t
c=t}else{t.a=d
c=t}}if($.bp==null){t=document
s=t.implementation.createHTMLDocument("")
$.bp=s
$.kD=s.createRange()
s=$.bp.createElement("base")
u.cR.a(s)
s.href=t.baseURI
$.bp.head.appendChild(s)}t=$.bp
if(t.body==null){s=t.createElement("body")
t.body=u.a4.a(s)}t=$.bp
if(u.a4.b(a))r=t.body
else{r=t.createElement(a.tagName)
$.bp.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.G(C.M,a.tagName)){$.kD.selectNodeContents(r)
q=$.kD.createContextualFragment(b)}else{r.innerHTML=b
q=$.bp.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}t=$.bp.body
if(r==null?t!=null:r!==t)J.eh(r)
c.cv(q)
document.adoptNode(q)
return q},
fI:function(a,b,c){return this.W(a,b,c,null)},
F:function(a,b){a.textContent=null
a.appendChild(this.W(a,b,null,null))},
gdY:function(a){return a.tagName},
gdL:function(a){return new W.az(a,"click",!1,u.C)},
gdO:function(a){return new W.az(a,"mousedown",!1,u.C)},
gdP:function(a){return new W.az(a,"touchstart",!1,u.du)},
$ip:1}
W.i2.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:34}
W.f.prototype={$if:1}
W.i4.prototype={
h:function(a,b){return new W.bm(this.a,H.r(b),!1,u.cw)}}
W.i1.prototype={
h:function(a,b){var t
H.r(b)
if($.lC.I(b.toLowerCase())){t=$.lu
if(t==null)t=$.lu=!H.at(P.kC())&&J.h0(window.navigator.userAgent,"WebKit",0)
if(t)return new W.az(this.a,$.lC.h(0,b.toLowerCase()),!1,u.E)}return new W.az(this.a,b,!1,u.E)}}
W.F.prototype={
ew:function(a,b,c,d){return a.addEventListener(b,H.cS(u.G.a(c),1),!1)},
dC:function(a,b){return a.dispatchEvent(b)},
fb:function(a,b,c,d){return a.removeEventListener(b,H.cS(u.G.a(c),1),!1)},
$iF:1}
W.eD.prototype={
gk:function(a){return a.length}}
W.bs.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bf(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.A.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(P.ax("No elements"))},
B:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$it:1,
$ibs:1}
W.df.prototype={$idf:1}
W.ck.prototype={
cA:function(a,b,c){return a.setSelectionRange(b,c)},
$ick:1}
W.bh.prototype={$ibh:1}
W.eO.prototype={
n:function(a){return String(a)},
$ieO:1}
W.a1.prototype={
gaV:function(a){var t,s,r,q,p,o
if(!!a.offsetX)return new P.J(a.offsetX,a.offsetY,u.H)
else{t=a.target
s=u.h
if(!s.b(W.M(t)))throw H.b(P.x("offsetX is only supported on elements"))
r=s.a(W.M(t))
t=a.clientX
s=a.clientY
q=u.H
p=r.getBoundingClientRect()
o=new P.J(t,s,q).E(0,new P.J(p.left,p.top,q))
return new P.J(J.lh(o.a),J.lh(o.b),q)}},
$ia1:1}
W.am.prototype={
gJ:function(a){var t=this.a.firstChild
if(t==null)throw H.b(P.ax("No elements"))
return t},
gaw:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.b(P.ax("No elements"))
if(s>1)throw H.b(P.ax("More than one element"))
return t.firstChild},
l:function(a,b){this.a.appendChild(u.A.a(b))},
M:function(a,b){var t,s,r,q
u.eh.a(b)
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
af:function(a,b,c){var t,s,r
u.A.a(c)
t=this.a
s=t.childNodes
r=s.length
if(b>r)throw H.b(P.ab(b,0,this.gk(this),null,null))
if(b===r)t.appendChild(c)
else{if(b>=r)return H.o(s,b)
t.insertBefore(c,s[b])}},
j:function(a,b,c){var t,s
H.q(b)
u.A.a(c)
t=this.a
s=t.childNodes
if(b<0||b>=s.length)return H.o(s,b)
t.replaceChild(c,s[b])},
gw:function(a){var t=this.a.childNodes
return new W.bW(t,t.length,H.X(t).i("bW<V.E>"))},
V:function(a,b,c,d,e){u.eh.a(d)
throw H.b(P.x("Cannot setRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
sk:function(a,b){throw H.b(P.x("Cannot set length on immutable List."))},
h:function(a,b){var t
H.q(b)
t=this.a.childNodes
if(b<0||b>=t.length)return H.o(t,b)
return t[b]}}
W.m.prototype={
bo:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
hc:function(a,b){var t,s
try{t=a.parentNode
J.np(t,b,a)}catch(s){H.L(s)}return a},
eA:function(a){var t
for(;t=a.firstChild,t!=null;)a.removeChild(t)},
n:function(a){var t=a.nodeValue
return t==null?this.eh(a):t},
fc:function(a,b,c){return a.replaceChild(b,c)},
$im:1}
W.cp.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bf(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.A.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(P.ax("No elements"))},
B:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$it:1}
W.cq.prototype={$icq:1}
W.cr.prototype={$icr:1}
W.cx.prototype={
gk:function(a){return a.length},
$icx:1}
W.cz.prototype={$icz:1}
W.f8.prototype={}
W.dA.prototype={
W:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
t=W.nU("<table>"+H.a(b)+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.am(s).M(0,new W.am(t))
return s}}
W.f9.prototype={
W:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.W(t.createElement("table"),b,c,d)
t.toString
t=new W.am(t)
r=t.gaw(t)
r.toString
t=new W.am(r)
q=t.gaw(t)
s.toString
q.toString
new W.am(s).M(0,new W.am(q))
return s}}
W.fa.prototype={
W:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.W(t.createElement("table"),b,c,d)
t.toString
t=new W.am(t)
r=t.gaw(t)
s.toString
r.toString
new W.am(s).M(0,new W.am(r))
return s}}
W.cB.prototype={
F:function(a,b){var t,s
a.textContent=null
t=a.content
t.toString
J.kw(t)
s=this.W(a,b,null,null)
a.content.appendChild(s)},
$icB:1}
W.cC.prototype={
cA:function(a,b,c){return a.setSelectionRange(b,c)},
$icC:1}
W.aI.prototype={$iaI:1}
W.b7.prototype={$ib7:1}
W.fd.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bf(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.fY.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(P.ax("No elements"))},
B:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$it:1}
W.ay.prototype={$iay:1}
W.by.prototype={
gfs:function(a){var t=new P.a3($.H,u.dL),s=u.c4.a(new W.jb(new P.e3(t,u.bi)))
this.eL(a)
this.fd(a,W.mx(s,u.di))
return t},
fd:function(a,b){return a.requestAnimationFrame(H.cS(u.c4.a(b),1))},
eL:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iby:1,
$ija:1}
W.jb.prototype={
$1:function(a){var t=this.a
a=t.$ti.i("1/").a(H.k6(a))
t=t.a
if(t.a!==0)H.D(P.ax("Future already completed"))
t.b3(a)},
$S:44}
W.b8.prototype={$ib8:1}
W.cE.prototype={$icE:1}
W.fm.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bf(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.g5.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(P.ax("No elements"))},
B:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$it:1}
W.dF.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
R:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.W(b)
t=a.left==t.gbl(b)&&a.top==t.gbu(b)&&a.width==t.gbw(b)&&a.height==t.gbi(b)}else t=!1
return t},
gA:function(a){return W.ma(J.ac(a.left),J.ac(a.top),J.ac(a.width),J.ac(a.height))},
gbi:function(a){return a.height},
gbw:function(a){return a.width}}
W.dR.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bf(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.A.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(P.ax("No elements"))},
B:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$it:1}
W.fj.prototype={
t:function(a,b){var t,s,r,q,p
u.eA.a(b)
for(t=this.gK(),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.B)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gK:function(){var t,s,r,q,p=this.a.attributes,o=H.h([],u.s)
for(t=p.length,s=u.h9,r=0;r<t;++r){if(r>=p.length)return H.o(p,r)
q=s.a(p[r])
if(q.namespaceURI==null)C.a.l(o,q.name)}return o},
gN:function(a){return this.gK().length===0}}
W.fr.prototype={
h:function(a,b){return this.a.getAttribute(H.r(b))},
j:function(a,b,c){this.a.setAttribute(b,H.r(c))},
gk:function(a){return this.gK().length}}
W.fs.prototype={
a7:function(){var t,s,r,q,p=P.dn(u.N)
for(t=this.a.className.split(" "),s=t.length,r=0;r<s;++r){q=J.h1(t[r])
if(q.length!==0)p.l(0,q)}return p},
cu:function(a){this.a.className=u.cq.a(a).cj(0," ")},
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
W.eB.prototype={}
W.bm.prototype={
Y:function(a,b,c,d){var t=H.i(this)
t.i("~(1)").a(a)
u.M.a(c)
return W.A(this.a,this.b,a,!1,t.c)},
bm:function(a,b,c){return this.Y(a,null,b,c)}}
W.az.prototype={}
W.aT.prototype={
Y:function(a,b,c,d){var t,s,r,q=this.$ti
q.i("~(1)").a(a)
u.M.a(c)
t=new W.e1(new H.a9(q.i("@<U<1>>").q(q.i("a2<1>")).i("a9<1,2>")),q.i("e1<1>"))
t.seI(P.cy(t.gfE(t),!0,q.c))
for(s=this.a,s=new H.N(s,s.gk(s),s.$ti.i("N<k.E>")),r=this.c,q=q.i("bm<1>");s.m();)t.l(0,new W.bm(s.d,r,!1,q))
q=t.a
q.toString
return new P.ag(q,H.i(q).i("ag<1>")).Y(a,b,c,d)},
u:function(a){return this.Y(a,null,null,null)},
bm:function(a,b,c){return this.Y(a,null,b,c)}}
W.dG.prototype={
a_:function(){var t=this
if(t.b==null)return null
t.dl()
t.b=null
t.sf6(null)
return null},
ck:function(a){if(this.b==null)return;++this.a
this.dl()},
cq:function(){var t=this
if(t.b==null||t.a<=0)return;--t.a
t.dj()},
dj:function(){var t,s=this,r=s.d,q=r!=null
if(q&&s.a<=0){t=s.b
t.toString
u.G.a(r)
if(q)J.nn(t,s.c,r,!1)}},
dl:function(){var t,s=this.d,r=s!=null
if(r){t=this.b
t.toString
u.G.a(s)
if(r)J.no(t,this.c,s,!1)}},
sf6:function(a){this.d=u.G.a(a)}}
W.jn.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:50}
W.e1.prototype={
l:function(a,b){var t,s,r,q=this
q.$ti.i("U<1>").a(b)
t=q.b
if(t.I(b))return
s=q.a
s=s.gfp(s)
b.toString
r=b.$ti
r.i("~(1)").a(s)
u.M.a(new W.jU(q,b))
t.j(0,b,W.A(b.a,b.b,s,!1,r.c))},
c2:function(a){var t,s,r
for(t=this.b,s=t.gar(t),r=H.i(s),r=new H.a6(J.y(s.a),s.b,r.i("@<1>").q(r.Q[1]).i("a6<1,2>"));r.m();)r.a.a_()
t.bf(0)
this.a.c2(0)},
seI:function(a){this.a=this.$ti.i("f5<1>").a(a)}}
W.jU.prototype={
$0:function(){var t=this.a,s=t.b.a8(0,t.$ti.i("U<1>").a(this.b))
if(s!=null)s.a_()
return null},
$S:0}
W.c6.prototype={
er:function(a){var t
if($.fw.a===0){for(t=0;t<262;++t)$.fw.j(0,C.L[t],W.pQ())
for(t=0;t<12;++t)$.fw.j(0,C.j[t],W.pR())}},
aA:function(a){return $.nj().G(0,W.da(a))},
ae:function(a,b,c){var t=$.fw.h(0,H.a(W.da(a))+"::"+b)
if(t==null)t=$.fw.h(0,"*::"+b)
if(t==null)return!1
return H.fX(t.$4(a,b,c,this))},
$iaq:1}
W.V.prototype={
gw:function(a){return new W.bW(a,this.gk(a),H.X(a).i("bW<V.E>"))},
l:function(a,b){H.X(a).i("V.E").a(b)
throw H.b(P.x("Cannot add to immutable List."))},
af:function(a,b,c){H.X(a).i("V.E").a(c)
throw H.b(P.x("Cannot add to immutable List."))},
V:function(a,b,c,d,e){H.X(a).i("d<V.E>").a(d)
throw H.b(P.x("Cannot setRange on immutable List."))}}
W.du.prototype={
l:function(a,b){C.a.l(this.a,u.e.a(b))},
aA:function(a){return C.a.dn(this.a,new W.iG(a))},
ae:function(a,b,c){return C.a.dn(this.a,new W.iF(a,b,c))},
$iaq:1}
W.iG.prototype={
$1:function(a){return u.e.a(a).aA(this.a)},
$S:28}
W.iF.prototype={
$1:function(a){return u.e.a(a).ae(this.a,this.b,this.c)},
$S:28}
W.dZ.prototype={
es:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.bv(0,new W.jS())
s=b.bv(0,new W.jT())
this.b.M(0,t)
r=this.c
r.M(0,C.N)
r.M(0,s)},
aA:function(a){return this.a.G(0,W.da(a))},
ae:function(a,b,c){var t=this,s=W.da(a),r=t.c
if(r.G(0,H.a(s)+"::"+b))return t.d.fq(c)
else if(r.G(0,"*::"+b))return t.d.fq(c)
else{r=t.b
if(r.G(0,H.a(s)+"::"+b))return!0
else if(r.G(0,"*::"+b))return!0
else if(r.G(0,H.a(s)+"::*"))return!0
else if(r.G(0,"*::*"))return!0}return!1},
$iaq:1}
W.jS.prototype={
$1:function(a){return!C.a.G(C.j,H.r(a))},
$S:35}
W.jT.prototype={
$1:function(a){return C.a.G(C.j,H.r(a))},
$S:35}
W.fL.prototype={
ae:function(a,b,c){if(this.eo(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.G(0,b)
return!1}}
W.jY.prototype={
$1:function(a){return"TEMPLATE::"+H.a(H.r(a))},
$S:21}
W.fK.prototype={
aA:function(a){var t
if(u.ew.b(a))return!1
t=u.g7.b(a)
if(t&&W.da(a)==="foreignObject")return!1
if(t)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.d.ee(b,"on"))return!1
return this.aA(a)},
$iaq:1}
W.bW.prototype={
m:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.scU(J.c8(t.a,s))
t.c=s
return!0}t.scU(null)
t.c=r
return!1},
gp:function(){return this.d},
scU:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
W.fo.prototype={
dC:function(a,b){return H.D(P.x("You can only attach EventListeners to your own window."))},
$iF:1,
$ija:1}
W.aq.prototype={}
W.fI.prototype={$ioy:1}
W.e8.prototype={
cv:function(a){var t=this,s=new W.k5(t)
t.b=!1
s.$2(a,null)
for(;t.b;){t.b=!1
s.$2(a,null)}},
aR:function(a,b){var t=this.b=!0
if(b!=null?b!==a.parentNode:t)J.eh(a)
else b.removeChild(a)},
fg:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
try{n=J.nr(a)
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
o=H.at(t)?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.L(q)}s="element unprintable"
try{s=J.z(a)}catch(q){H.L(q)}try{r=W.da(a)
this.ff(u.h.a(a),b,o,s,r,u.f.a(n),H.r(m))}catch(q){if(H.L(q) instanceof P.aK)throw q
else{this.aR(a,b)
window
p="Removing corrupted element "+H.a(s)
if(typeof console!="undefined")window.console.warn(p)}}},
ff:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
if(c){n.aR(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!n.a.aA(a)){n.aR(a,b)
window
t="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!n.a.ae(a,"is",g)){n.aR(a,b)
window
t="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gK()
s=H.h(t.slice(0),H.C(t).i("G<1>"))
for(r=f.gK().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.o(s,r)
q=s[r]
p=n.a
o=J.nF(q)
H.r(q)
if(!p.ae(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.a(e)+" "+q+'="'+H.a(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.aW.b(a))n.cv(a.content)},
$io7:1}
W.k5.prototype={
$2:function(a,b){var t,s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fg(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aR(a,b)}t=a.lastChild
for(r=u.A;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){q=s.nextSibling
p=t
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.ax("Corrupt HTML")
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
W.fn.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fD.prototype={}
W.fE.prototype={}
W.fM.prototype={}
W.fN.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
W.fW.prototype={}
P.er.prototype={
dm:function(a){var t=$.n3().b
if(typeof a!="string")H.D(H.bb(a))
if(t.test(a))return a
throw H.b(P.cU(a,"value","Not a valid class token"))},
n:function(a){return this.a7().cj(0," ")},
gw:function(a){var t=this.a7()
return P.jE(t,t.r,H.i(t).c)},
H:function(a,b,c){var t,s
c.i("0(c)").a(b)
t=this.a7()
s=H.i(t)
return new H.aX(t,s.q(c).i("1(2)").a(b),s.i("@<1>").q(c).i("aX<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
gk:function(a){return this.a7().a},
l:function(a,b){H.r(b)
this.dm(b)
return H.fX(this.h3(0,new P.hL(b)))},
a8:function(a,b){var t,s
this.dm(b)
t=this.a7()
s=t.a8(0,b)
this.cu(t)
return s},
B:function(a,b){return this.a7().B(0,b)},
h3:function(a,b){var t,s
u.ch.a(b)
t=this.a7()
s=b.$1(t)
this.cu(t)
return s}}
P.hL.prototype={
$1:function(a){return u.cq.a(a).l(0,this.a)},
$S:63}
P.eC.prototype={
gab:function(){var t=this.b,s=H.i(t)
return new H.aG(new H.af(t,s.i("w(k.E)").a(new P.iq()),s.i("af<k.E>")),s.i("p(k.E)").a(new P.ir()),s.i("aG<k.E,p>"))},
j:function(a,b,c){var t
H.q(b)
u.h.a(c)
t=this.gab()
J.nB(t.b.$1(J.aW(t.a,b)),c)},
sk:function(a,b){var t=J.ad(this.gab().a)
if(b>=t)return
else if(b<0)throw H.b(P.b2("Invalid list length"))
this.hb(0,b,t)},
l:function(a,b){this.b.a.appendChild(u.h.a(b))},
V:function(a,b,c,d,e){u.bq.a(d)
throw H.b(P.x("Cannot setRange on filtered list"))},
hb:function(a,b,c){var t=this.gab()
t=H.oo(t,b,t.$ti.i("d.E"))
C.a.t(P.cm(H.ou(t,c-b,H.i(t).i("d.E")),!0,u.z),new P.is())},
bf:function(a){J.kw(this.b.a)},
af:function(a,b,c){var t,s
u.h.a(c)
if(b===J.ad(this.gab().a))this.b.a.appendChild(c)
else{t=this.gab()
s=t.b.$1(J.aW(t.a,b))
s.parentNode.insertBefore(c,s)}},
gk:function(a){return J.ad(this.gab().a)},
h:function(a,b){var t
H.q(b)
t=this.gab()
return t.b.$1(J.aW(t.a,b))},
gw:function(a){var t=P.cm(this.gab(),!1,u.h)
return new J.aC(t,t.length,H.C(t).i("aC<1>"))}}
P.iq.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:34}
P.ir.prototype={
$1:function(a){return u.h.a(u.A.a(a))},
$S:36}
P.is.prototype={
$1:function(a){return J.eh(a)},
$S:5}
P.dl.prototype={$idl:1}
P.iz.prototype={
$1:function(a){var t,s,r,q=this.a
if(q.I(a))return q.h(0,a)
if(u.f.b(a)){t={}
q.j(0,a,t)
for(q=J.y(a.gK());q.m();){s=q.gp()
t[s]=this.$1(a.h(0,s))}return t}else if(u.R.b(a)){r=[]
q.j(0,a,r)
C.a.M(r,J.kx(a,this,u.z))
return r}else return P.e9(a)},
$S:5}
P.k9.prototype={
$1:function(a){var t
u.Z.a(a)
t=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.pg,a,!1)
P.kT(t,$.ku(),a)
return t},
$S:5}
P.ka.prototype={
$1:function(a){return new this.a(a)},
$S:5}
P.ke.prototype={
$1:function(a){return new P.aF(a)},
$S:59}
P.kf.prototype={
$1:function(a){return new P.v(a,u.F)},
$S:56}
P.kg.prototype={
$1:function(a){return new P.P(a)},
$S:23}
P.P.prototype={
h:function(a,b){if(typeof b!="string"&&typeof b!="number")throw H.b(P.b2("property is not a String or num"))
return P.k8(this.a[b])},
j:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.b(P.b2("property is not a String or num"))
this.a[b]=P.e9(c)},
R:function(a,b){if(b==null)return!1
return b instanceof P.P&&this.a===b.a},
C:function(a){if(typeof a!="string"&&!0)throw H.b(P.b2("property is not a String or num"))
return a in this.a},
c4:function(a){delete this.a[a]},
n:function(a){var t,s
try{t=String(this.a)
return t}catch(s){H.L(s)
t=this.ek(0)
return t}},
S:function(a,b){var t,s=this.a
if(b==null)t=null
else{t=H.C(b)
t=P.cm(new H.T(b,t.i("@(1)").a(P.kp()),t.i("T<1,@>")),!0,u.z)}return P.k8(s[a].apply(s,t))},
gA:function(a){return 0}}
P.aF.prototype={
dr:function(a){var t=P.e9(null),s=H.C(a)
s=P.cm(new H.T(a,s.i("@(1)").a(P.kp()),s.i("T<1,@>")),!0,u.z)
return P.k8(this.a.apply(t,s))}}
P.v.prototype={
cL:function(a){var t=this,s=a<0||a>=t.gk(t)
if(s)throw H.b(P.ab(a,0,t.gk(t),null,null))},
h:function(a,b){if(typeof b=="number"&&b===C.e.bs(b))this.cL(H.q(b))
return this.$ti.c.a(this.cC(0,b))},
j:function(a,b,c){this.$ti.c.a(c)
if(typeof b=="number"&&b===C.e.bs(b))this.cL(H.q(b))
this.cD(0,b,c)},
gk:function(a){var t=this.a.length
if(typeof t==="number"&&t>>>0===t)return t
throw H.b(P.ax("Bad JsArray length"))},
sk:function(a,b){this.cD(0,"length",b)},
l:function(a,b){this.S("push",[this.$ti.c.a(b)])},
af:function(a,b,c){var t,s=this
s.$ti.c.a(c)
t=b>=s.gk(s)+1
if(t)H.D(P.ab(b,0,s.gk(s),null,null))
s.S("splice",[b,0,c])},
V:function(a,b,c,d,e){var t,s,r,q=this,p=null
q.$ti.i("d<1>").a(d)
t=q.gk(q)
if(b>t)H.D(P.ab(b,0,t,p,p))
if(c<b||c>t)H.D(P.ab(c,b,t,p,p))
s=c-b
if(s===0)return
r=[b,s]
C.a.M(r,H.al(d,e,p,H.X(d).i("k.E")).hi(0,s))
q.S("splice",r)},
$in:1,
$id:1,
$it:1}
P.dN.prototype={}
P.J.prototype={
n:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
R:function(a,b){if(b==null)return!1
return b instanceof P.J&&this.a==b.a&&this.b==b.b},
gA:function(a){var t=J.ac(this.a),s=J.ac(this.b)
return P.m9(P.dM(P.dM(0,t),s))},
E:function(a,b){var t,s,r,q,p=this.$ti
p.a(b)
t=this.a
s=b.a
if(typeof t!=="number")return t.E()
if(typeof s!=="number")return H.a0(s)
r=this.b
q=b.b
if(typeof r!=="number")return r.E()
if(typeof q!=="number")return H.a0(q)
return new P.J(t-s,r-q,p)},
at:function(a,b){var t,s,r,q=this.a
if(typeof q!=="number")return q.at()
t=this.$ti
s=t.c
q=s.a(q*b)
r=this.b
if(typeof r!=="number")return r.at()
return new P.J(q,s.a(r*b),t)}}
P.fG.prototype={
gdW:function(a){return this.a+this.c},
gds:function(a){return this.b+this.d},
n:function(a){var t=this
return"Rectangle ("+t.a+", "+t.b+") "+t.c+" x "+t.d},
R:function(a,b){var t,s,r,q=this
if(b==null)return!1
if(u.q.b(b)){t=q.a
s=J.W(b)
if(t===s.gbl(b)){r=q.b
t=r===s.gbu(b)&&t+q.c===s.gdW(b)&&r+q.d===s.gds(b)}else t=!1}else t=!1
return t},
gA:function(a){var t=this,s=t.a,r=C.e.gA(s),q=t.b,p=C.e.gA(q)
s=C.e.gA(s+t.c)
q=C.e.gA(q+t.d)
return P.m9(P.dM(P.dM(P.dM(P.dM(0,r),p),s),q))}}
P.bw.prototype={
gbl:function(a){return this.a},
gbu:function(a){return this.b},
gbw:function(a){return this.c},
gbi:function(a){return this.d}}
P.cv.prototype={$icv:1}
P.el.prototype={
a7:function(){var t,s,r,q,p=this.a.getAttribute("class"),o=P.dn(u.N)
if(p==null)return o
for(t=p.split(" "),s=t.length,r=0;r<s;++r){q=J.h1(t[r])
if(q.length!==0)o.l(0,q)}return o},
cu:function(a){this.a.setAttribute("class",a.cj(0," "))}}
P.l.prototype={
gdv:function(a){return new P.el(a)},
gdu:function(a){return new P.eC(a,new W.am(a))},
W:function(a,b,c,d){var t,s,r,q,p,o=H.h([],u.eO)
C.a.l(o,W.m8(null))
C.a.l(o,W.md())
C.a.l(o,new W.fK())
c=new W.e8(new W.du(o))
t='<svg version="1.1">'+H.a(b)+"</svg>"
o=document
s=o.body
r=(s&&C.m).fI(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.am(r)
p=o.gaw(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
cc:function(a,b,c,d,e){throw H.b(P.x("Cannot invoke insertAdjacentHtml on SVG."))},
gdL:function(a){return new W.az(a,"click",!1,u.C)},
gdO:function(a){return new W.az(a,"mousedown",!1,u.C)},
gdP:function(a){return new W.az(a,"touchstart",!1,u.du)},
$il:1}
Z.hP.prototype={
gdN:function(a){var t,s=this
if(s.z==null)s.sd7(P.cy(new Z.hU(s),!0,u.D))
t=s.z
t.toString
return new P.ag(t,H.i(t).i("ag<1>"))},
gdM:function(a){var t,s=this
if(s.ch==null)s.sd3(P.cy(new Z.hT(s),!0,u.D))
t=s.ch
t.toString
return new P.ag(t,H.i(t).i("ag<1>"))},
ak:function(a,b,c){var t,s,r,q=this,p=$.a_
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
C.h.bd(p,C.h.aM(p,"pointer-events"),s,"")
t.c=t.b=t.a=t.d=null}if(!c&&b!=null)Z.oR(q,b)
p=q.ch
if(p!=null)p.l(0,Z.lA(a,$.a_,c))
if(a!=null)a.preventDefault()
if(u.V.b(a))q.fm($.a_.b)
p=$.a_
J.bL(p.b).a8(0,q.r)
p=document.body
p.classList.remove("dnd-drag-occurring")}q.fe()},
eT:function(a,b){return this.ak(a,b,!1)},
fm:function(a){var t=J.nu(a),s=t.$ti,r=s.i("~(1)").a(new Z.hR())
u.M.a(null)
P.nW(new Z.hS(W.A(t.a,t.b,r,!1,s.c)),u.P)},
fe:function(){C.a.t(this.cy,new Z.hQ())
Z.m3()
$.a_=null},
eB:function(){var t,s
window.getSelection().removeAllRanges()
try{t=document.activeElement
if(u.cJ.b(t))J.lg(t,0,0)
else if(u.p.b(t))J.lg(t,0,0)}catch(s){H.L(s)}},
sd7:function(a){this.z=u.c6.a(a)},
sd3:function(a){this.ch=u.c6.a(a)},
sbN:function(a){this.cx=u.O.a(a)}}
Z.hU.prototype={
$0:function(){this.a.sd7(null)
return null},
$S:1}
Z.hT.prototype={
$0:function(){this.a.sd3(null)
return null},
$S:1}
Z.hR.prototype={
$1:function(a){u.V.a(a)
a.stopPropagation()
a.preventDefault()},
$S:2}
Z.hS.prototype={
$0:function(){this.a.a_()},
$S:1}
Z.hQ.prototype={
$1:function(a){return u.a1.a(a).hd(0)},
$S:52}
Z.bR.prototype={}
Z.ji.prototype={
cR:function(a){u.H.a(a)
return a},
sbW:function(a,b){this.e=u.H.a(b)}}
Z.em.prototype={
ed:function(a){Z.nG(new Z.h8(this,u.H.a(a)))},
cz:function(a){var t,s,r,q=this
u.H.a(a)
t=q.a.style
s=a.a
if(q.c==null)q.dt()
r=q.c
if(typeof s!=="number")return s.E()
if(typeof r!=="number")return H.a0(r)
r=H.a(s-r)+"px"
t.left=r
t=q.a.style
s=a.b
if(q.b==null)q.dt()
r=q.b
if(typeof s!=="number")return s.E()
if(typeof r!=="number")return H.a0(r)
r=H.a(s-r)+"px"
t.top=r},
dt:function(){var t,s=this.a
s.toString
t=window.getComputedStyle(s,"")
s=P.fZ(C.d.dV(t.marginLeft,"px",""))
this.c=s==null?0:s
s=P.fZ(C.d.dV(t.marginTop,"px",""))
this.b=s==null?0:s}}
Z.h8.prototype={
$0:function(){var t,s=this.a.a
if(s!=null){s=s.style
t=this.b
t="translate3d("+H.a(t.a)+"px, "+H.a(t.b)+"px, 0)"
s.toString
C.h.bd(s,C.h.aM(s,"transform"),t,"")}},
$S:1}
Z.h3.prototype={
$1:function(a){H.k6(a)
if($.h2){$.lj.$0()
$.h2=!1}return null},
$S:45}
Z.ba.prototype={
bE:function(a){this.cg()
C.a.t(this.c.cx,new Z.jj())},
fU:function(){var t=this.b,s=window,r=u.dj.a(new Z.jk(this))
u.M.a(null)
C.a.l(t,W.A(s,"keydown",r,!1,u.cf))
C.a.l(t,W.A(window,"blur",u.Q.a(new Z.jl(this)),!1,u.B))},
cb:function(a,b){var t,s=this
u.H.a(b)
t=s.c
t=new Z.ji(t.a,u.h.a(W.M(a.currentTarget)),b,t.b,!1,!1)
t.sbW(0,b)
$.a_=t
s.cf()
s.ce()
s.cd()
s.fU()},
ca:function(a,b,c){var t,s,r,q,p,o,n,m,l="pointer-events",k=u.H
k.a(b)
k.a(c)
t=$.a_
t.sbW(0,t.cR(b))
t=$.a_
if(!t.f){s=t.c
t=s.$ti.a(t.e)
r=s.a
q=t.a
if(typeof r!=="number")return r.E()
if(typeof q!=="number")return H.a0(q)
p=r-q
s=s.b
t=t.b
if(typeof s!=="number")return s.E()
if(typeof t!=="number")return H.a0(t)
o=s-t
if(Math.sqrt(p*p+o*o)>=4){t=this.c
s=$.a_
s.f=!0
r=t.b
if(r!=null){q=s.b
k.a(s.e)
r.a=r.e
r.cz(new P.J(0,0,k))
n=U.d7(r.a)
r.cz(U.d7(q).E(0,n))
q=r.a.style
q.toString
r.d=q.getPropertyValue(C.h.aM(q,l))
r=r.a.style
r.toString
C.h.bd(r,C.h.aM(r,l),"none","")}k=t.z
if(k!=null)k.l(0,Z.lA(a,$.a_,!1))
k=$.a_
J.bL(k.b).l(0,t.r)
k=document.body
k.classList.add("dnd-drag-occurring")
t.eB()}}else{m=u.h.a(this.eN(c))
t=this.c
s=t.b
if(s!=null){r=$.a_
q=r.c
r=r.e
k.a(q)
s.ed(k.a(r).E(0,q))
s=s.a.style
s.visibility="visible"}Z.oS(t,m)}},
c9:function(a,b,c,d){var t=u.H
t.a(c)
t.a(d)
t=$.a_
t.sbW(0,t.cR(c))
this.c.eT(a,this.d_(d,b))},
hd:function(a){var t=this.b
C.a.t(t,new Z.jm())
C.a.sk(t,0)},
d0:function(a){var t,s
u.H.a(a)
t=document
s=t.elementFromPoint(J.cT(a.a),J.cT(a.b))
return s==null?t.body:s},
d_:function(a,b){var t,s,r=this
u.H.a(a)
if(b==null)b=r.d0(a)
t=r.c.b
if(t!=null){s=t.a
s=s!=null&&H.at(s.contains(u.A.a(b)))}else s=!1
if(s){s=t.a.style
s.visibility="hidden"
b=r.d0(a)
t=t.a.style
t.visibility="visible"}return r.dc(a,b)},
eN:function(a){return this.d_(a,null)},
dc:function(a,b){u.H.a(a)
return u.h.b(b)&&(b.shadowRoot||b.webkitShadowRoot)!=null&&H.at(b.hasAttribute("dnd-retarget"))?this.dc(a,(b.shadowRoot||b.webkitShadowRoot).elementFromPoint(J.cT(a.a),J.cT(a.b))):b},
bQ:function(a){var t=u.h.b(a)&&J.nz(a,this.c.f)
if(t)return!1
return!0}}
Z.jj.prototype={
$1:function(a){var t=u.h.a(a).style
t.toString
C.h.bd(t,C.h.aM(t,"touch-action"),"none","")
return"none"},
$S:43}
Z.jk.prototype={
$1:function(a){u.cf.a(a)
if(a.keyCode===27)this.a.c.ak(a,null,!0)},
$S:40}
Z.jl.prototype={
$1:function(a){this.a.c.ak(a,null,!0)},
$S:3}
Z.jm.prototype={
$1:function(a){return u.b_.a(a).a_()},
$S:22}
Z.fO.prototype={
cg:function(){C.a.t(this.c.cx,new Z.k4(this))},
cf:function(){var t=document,s=u.gn.a(new Z.k2(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"touchmove",s,!1,u.T))},
ce:function(){var t=document,s=u.gn.a(new Z.k1(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"touchend",s,!1,u.T))},
cd:function(){var t=document,s=u.gn.a(new Z.k0(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"touchcancel",s,!1,u.T))},
fZ:function(a){u.H.a(a).E(0,$.a_.c)
return!1}}
Z.k4.prototype={
$1:function(a){var t=this.a,s=J.nw(u.h.a(a)),r=s.$ti,q=r.i("~(1)").a(new Z.k3(t))
u.M.a(null)
C.a.l(t.a,W.A(s.a,s.b,q,!1,r.c))},
$S:15}
Z.k3.prototype={
$1:function(a){var t,s
u.T.a(a)
if($.a_!=null)return
t=a.touches
if(t.length>1)return
s=this.a
if(!s.bQ(W.M(t[0].target)))return
t=a.touches
if(0>=t.length)return H.o(t,0)
t=t[0]
s.cb(a,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),u.H))},
$S:11}
Z.k2.prototype={
$1:function(a){var t,s,r=this
u.T.a(a)
if(a.touches.length>1){r.a.c.ak(a,null,!0)
return}if(!$.a_.f){t=a.changedTouches
if(0>=t.length)return H.o(t,0)
t=t[0]
t=r.a.fZ(new P.J(C.c.D(t.pageX),C.c.D(t.pageY),u.H))}else t=!1
if(t){r.a.c.ak(a,null,!0)
return}t=a.changedTouches
if(0>=t.length)return H.o(t,0)
t=t[0]
s=u.H
r.a.ca(a,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),s),new P.J(C.c.D(t.clientX),C.c.D(t.clientY),s))
a.preventDefault()},
$S:11}
Z.k1.prototype={
$1:function(a){var t,s
u.T.a(a)
t=a.changedTouches
if(0>=t.length)return H.o(t,0)
t=t[0]
s=u.H
this.a.c9(a,null,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),s),new P.J(C.c.D(t.clientX),C.c.D(t.clientY),s))},
$S:11}
Z.k0.prototype={
$1:function(a){this.a.c.ak(u.T.a(a),null,!0)},
$S:11}
Z.fC.prototype={
cg:function(){C.a.t(this.c.cx,new Z.jI(this))},
cf:function(){var t=document,s=u.a6.a(new Z.jG(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"mousemove",s,!1,u.V))},
ce:function(){var t=document,s=u.a6.a(new Z.jF(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"mouseup",s,!1,u.V))},
cd:function(){}}
Z.jI.prototype={
$1:function(a){var t=this.a,s=J.nv(u.h.a(a)),r=s.$ti,q=r.i("~(1)").a(new Z.jH(t))
u.M.a(null)
C.a.l(t.a,W.A(s.a,s.b,q,!1,r.c))},
$S:15}
Z.jH.prototype={
$1:function(a){var t,s
u.V.a(a)
if($.a_!=null)return
if(a.button!==0)return
t=this.a
if(!t.bQ(W.M(a.target)))return
s=u.h.a(W.M(a.target))
if(!(u.d2.b(s)||u.p.b(s)||u.cJ.b(s)||u.hb.b(s)||u.fW.b(s)))a.preventDefault()
t.cb(a,new P.J(a.pageX,a.pageY,u.H))},
$S:2}
Z.jG.prototype={
$1:function(a){var t
u.V.a(a)
t=u.H
this.a.ca(a,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:2}
Z.jF.prototype={
$1:function(a){var t
u.V.a(a)
t=u.H
this.a.c9(a,W.M(a.target),new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:2}
Z.fF.prototype={
cg:function(){C.a.t(this.c.cx,new Z.jO(this))},
cf:function(){var t=document,s=u.Q.a(new Z.jM(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"pointermove",s,!1,u.B))},
ce:function(){var t=document,s=u.Q.a(new Z.jL(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"pointerup",s,!1,u.B))},
cd:function(){var t=document,s=u.Q.a(new Z.jK(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"pointercancel",s,!1,u.B))}}
Z.jO.prototype={
$1:function(a){var t,s,r,q
u.h.a(a)
t=this.a
a.toString
s=new W.i1(a).h(0,"pointerdown")
r=s.$ti
q=r.i("~(1)").a(new Z.jN(t))
u.M.a(null)
C.a.l(t.a,W.A(s.a,s.b,q,!1,r.c))},
$S:15}
Z.jN.prototype={
$1:function(a){var t,s
u.et.a(a)
if($.a_!=null)return
if(a.button!==0)return
t=this.a
if(!t.bQ(W.M(a.target)))return
s=u.h.a(W.M(a.target))
if(!(u.d2.b(s)||u.p.b(s)||u.cJ.b(s)||u.hb.b(s)||u.fW.b(s)))a.preventDefault()
t.cb(a,new P.J(a.pageX,a.pageY,u.H))},
$S:3}
Z.jM.prototype={
$1:function(a){var t
u.et.a(a)
t=u.H
this.a.ca(a,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:3}
Z.jL.prototype={
$1:function(a){var t
u.et.a(a)
t=u.H
this.a.c9(a,null,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:3}
Z.jK.prototype={
$1:function(a){this.a.c.ak(a,null,!0)},
$S:3}
Z.eA.prototype={
gan:function(a){var t,s=this
if(s.d==null)s.sd4(P.cy(new Z.hW(s),!0,u.k))
t=s.d
t.toString
return new P.ag(t,H.i(t).i("ag<1>"))},
gh4:function(a){var t,s=this
if(s.e==null)s.sd6(P.cy(new Z.hY(s),!0,u.k))
t=s.e
t.toString
return new P.ag(t,H.i(t).i("ag<1>"))},
gao:function(a){var t,s=this
if(s.f==null)s.sd5(P.cy(new Z.hX(s),!0,u.k))
t=s.f
t.toString
return new P.ag(t,H.i(t).i("ag<1>"))},
gap:function(a){var t,s=this
if(s.r==null)s.sd8(P.cy(new Z.hZ(s),!0,u.k))
t=s.r
t.toString
return new P.ag(t,H.i(t).i("ag<1>"))},
f4:function(a){var t,s,r,q,p=this
u.h.a(a)
t=p.y
s=$.ng()
r=s.a
s=H.i(s)
q=s.i("~(1)").a(p.geU())
u.M.a(null)
C.a.l(t,W.A(a,r,q,!1,s.c))
s=$.ni()
q=H.i(s)
C.a.l(t,W.A(a,s.a,q.i("~(1)").a(p.geY()),!1,q.c))
q=$.nh()
s=H.i(q)
C.a.l(t,W.A(a,q.a,s.i("~(1)").a(p.geW()),!1,s.c))
s=$.nf()
q=H.i(s)
C.a.l(t,W.A(a,s.a,q.i("~(1)").a(p.gf_()),!1,q.c))},
eV:function(a){var t,s
u.V.a(a)
t=a.relatedTarget
if(W.M(t)!=null&&H.at(u.h.a(W.M(a.currentTarget)).contains(u.A.a(W.M(t)))))return
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aO)if(t.a==$.ey)t=t.b||$.eu
else t=!1
else t=!1
if(t){t=this.d
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.av(s.e))}J.bL(u.h.a(W.M(a.currentTarget))).l(0,"dnd-over")}else J.bL(u.h.a(W.M(a.currentTarget))).l(0,"dnd-invalid")},
eZ:function(a){var t,s
u.V.a(a)
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aO)if(t.a==$.ey)t=t.b||$.eu
else t=!1
else t=!1
if(t){t=this.e
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.av(s.e))}}},
eX:function(a){var t,s
u.V.a(a)
t=a.relatedTarget
if(W.M(t)!=null&&H.at(u.h.a(W.M(a.currentTarget)).contains(u.A.a(W.M(t)))))return
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aO)if(t.a==$.ey)t=t.b||$.eu
else t=!1
else t=!1
if(t){t=this.f
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.av(s.e))}J.bL(u.h.a(W.M(a.currentTarget))).a8(0,"dnd-over")}else J.bL(u.h.a(W.M(a.currentTarget))).a8(0,"dnd-invalid")},
f0:function(a){var t,s
u.V.a(a)
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aO)if(t.a==$.ey)t=t.b||$.eu
else t=!1
else t=!1
if(t){t=this.r
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.av(s.e))}}},
fK:function(){var t=this.y
C.a.t(t,new Z.hV())
C.a.sk(t,0)},
sd4:function(a){this.d=u.g.a(a)},
sd6:function(a){this.e=u.g.a(a)},
sd5:function(a){this.f=u.g.a(a)},
sd8:function(a){this.r=u.g.a(a)},
sbN:function(a){this.x=u.O.a(a)}}
Z.hW.prototype={
$0:function(){this.a.sd4(null)
return null},
$S:1}
Z.hY.prototype={
$0:function(){this.a.sd6(null)
return null},
$S:1}
Z.hX.prototype={
$0:function(){this.a.sd5(null)
return null},
$S:1}
Z.hZ.prototype={
$0:function(){this.a.sd8(null)
return null},
$S:1}
Z.hV.prototype={
$1:function(a){return u.b_.a(a).a_()},
$S:22}
Z.av.prototype={}
Z.ej.prototype={}
U.aL.prototype={
gU:function(){var t=this.c
return H.a(t.id.c)+"-"+H.a(t.b)+"-"+H.a(this.b)},
bz:function(){return H.a(this.Z())+H.a(this.e)},
ax:function(a,b){var t,s=this,r=s.b
if(r!=null){t=s.c
if(r>=t.cx)t.cx=r+1}else s.b=s.c.cx++},
aJ:function(a,b,c){this.b=b.b
this.d=b.d
this.e=b.e},
dE:function(){var t,s,r,q=this,p=document.createElement("div")
p.innerText=q.bz()
p.classList.add("nt-attribute-value")
t=q.c
s=t.ah()+"-attribute"
p.classList.add(s)
s=t.db
if(s!=null){r=p.style
r.color=s}t=t.dx
if(t!=null){s=p.style
s.backgroundColor=t}t=u.C
s=t.i("~(1)").a(new U.h6(q,new U.h7(q,p)))
u.M.a(null)
W.A(p,"click",s,!1,t.c)
return p}}
U.h7.prototype={
$0:function(){this.b.innerText=this.a.bz()},
$S:1}
U.h6.prototype={
$1:function(a){var t,s,r,q,p,o,n,m
u.V.a(a)
t=u.d.a(W.M(a.target))
s=t.offsetParent
r=C.c.D(s.offsetLeft)
q=C.c.D(t.offsetLeft)
p=J.W(a)
o=p.gaV(a).a
if(typeof o!=="number")return H.a0(o)
n=C.c.D(s.offsetTop)
m=C.c.D(t.offsetTop)
p=p.gaV(a).b
if(typeof p!=="number")return H.a0(p)
this.a.aI(C.c.c7(r+q+o),C.c.c7(n+m+p),this.b)},
$S:2}
U.bV.prototype={
ga2:function(a){return this.f},
Z:function(){return U.d0(this.r.c)},
au:function(a){var t,s,r,q=this
if(a==null){t=new U.br(q.c.id)
t.c=new U.ae(t,q.f,H.h([],u.U))
q.r=t}if(P.fZ(a)==null&&!C.a.G(H.h(["true","false"],u.s),a))throw H.b(P.cU(a,"valueString","Expression values can only be set to numbers or booleans."))
t=new U.br(q.c.id)
s=u.U
t.c=new U.ae(t,q.f,H.h([],s))
q.r=t
r=new U.ae(t,q.f,H.h([],s))
r.b=a
q.r.c=r},
as:function(){return this.x},
aY:function(a){this.x=a},
aB:function(a,b,c){var t,s,r=this,q=new U.bV(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,b)
q.aJ(b,r,c)
q.x=r.x
q.f=r.f
t=r.r
s=new U.br(null)
s.a=t.a
t=t.c
if(t!=null)s.c=U.lG(s,t)
q.r=s
if(!c)q.au(q.x)
return q},
aH:function(){return!1},
aI:function(a,b,c){var t,s,r,q,p,o,n=this,m=".nt-param-confirm",l="querySelectorAll",k="click",j=n.c.id,i=j.r
i.classList.add("show")
t=j.x
j=t.style
s=""+b+"px"
j.top=s
t.classList.remove("small")
C.b.F(t,"")
C.b.a4(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">\n          <div class="nt-param-label">'+H.a(n.d)+':</div>\n        </div>\n        <div class="nt-param-row">\n          <div id="nt-expression-'+n.gU()+'" class="nt-expression-root"></div>\n        </div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
j=u.C
s=j.i("~(1)").a(new U.ia())
u.M.a(null)
r=W.A(t,k,s,!1,j.c)
j=u.h
s=document
H.aU(j,j,"T",l)
q=u.W
p=u.r
o=u.I
new W.aT(p.a(new W.an(s.querySelectorAll(m),q)),!1,k,o).u(new U.ib(n,r,i,c))
H.aU(j,j,"T",l)
new W.aT(p.a(new W.an(s.querySelectorAll(m),q)),!1,"mousedown",o).u(new U.ic())
H.aU(j,j,"T",l)
new W.aT(p.a(new W.an(s.querySelectorAll(m),q)),!1,"mouseup",o).u(new U.id())
H.aU(j,j,"T",l)
new W.aT(p.a(new W.an(s.querySelectorAll(".nt-param-cancel"),q)),!1,k,o).u(new U.ie(r,i))
o=n.r
o.b=s.querySelector("#nt-expression-"+n.gU())
o.co()}}
U.ia.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aU(t,t,"T","querySelectorAll")
s=new W.an(s.querySelectorAll(".nt-pulldown-menu"),u.W)
s.t(s,new U.i9())},
$S:2}
U.i9.prototype={
$1:function(a){return J.eh(u.h.a(a))},
$S:16}
U.ib.prototype={
$1:function(a){var t,s,r,q=this
u.V.a(a)
t=u.h
s=document
H.aU(t,t,"T","querySelectorAll")
if(s.querySelectorAll(".nt-expression.empty").length>0)return!1
q.b.a_()
q.c.classList.remove("show")
q.d.$0()
t=q.a
r=U.d_(t)
s=t.c
s.id.P(new U.bo(s.b,s.c,t.b,t.f,U.d0(t.r.c),r))
return!1},
$S:10}
U.ic.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aU(t,t,"T","querySelectorAll")
s=new W.an(s.querySelectorAll(".nt-expression.empty"),u.W)
s.t(s,new U.i8())},
$S:2}
U.i8.prototype={
$1:function(a){return J.bL(u.h.a(a)).l(0,"warn")},
$S:32}
U.id.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aU(t,t,"T","querySelectorAll")
s=new W.an(s.querySelectorAll(".nt-expression.empty"),u.W)
s.t(s,new U.i7())},
$S:2}
U.i7.prototype={
$1:function(a){return J.bL(u.h.a(a)).a8(0,"warn")},
$S:32}
U.ie.prototype={
$1:function(a){u.V.a(a)
this.a.a_()
this.b.classList.remove("show")},
$S:2}
U.dg.prototype={
ga2:function(a){return"int"},
aB:function(a,b,c){var t=new U.dg(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,b)
t.aJ(b,this,c)
t.cF(b,this,c)
return t}}
U.bZ.prototype={
Z:function(){var t,s=this.f
if(s==null)return""
t=C.c.hk(s,1)
return C.d.fR(t,".0")?C.d.aa(t,0,t.length-2):t},
au:function(a){return this.f=U.bJ(a,0)},
as:function(){var t=this.r
return t==null?"":C.c.n(t)},
aY:function(a){return this.r=U.bJ(a,null)},
cF:function(a,b,c){var t,s,r=this
r.x=b.x
r.y=b.y
t=r.r=b.r
if(!c){s=b.f
r.f=s==null?t:s}},
aH:function(){return!1},
aI:function(a,b,c){var t,s,r,q,p,o,n,m=this,l="querySelectorAll",k=m.c.id,j=k.r
j.classList.add("show")
t=k.x
k=t.style
s=""+b+"px"
k.top=s
t.classList.remove("small")
C.b.F(t,"")
C.b.a4(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">'+('      <div class="nt-param-name">'+H.a(m.d)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+m.gU()+'" type="number" step="'+H.a(m.y)+'" value="'+H.a(m.f)+'">\n        <span class="nt-param-unit">'+H.a(m.e)+"</span>\n      </div>\n    ")+'</div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
k="#nt-param-label-"+m.gU()
s=document
r=u.a.a(s.querySelector(k))
q=u.p.a(s.querySelector("#nt-param-"+m.gU()))
k=u.h
H.aU(k,k,"T",l)
p=u.W
o=u.r
n=u.I
new W.aT(o.a(new W.an(s.querySelectorAll(".nt-param-confirm"),p)),!1,"click",n).u(new U.iK(m,q,j,c))
H.aU(k,k,"T",l)
new W.aT(o.a(new W.an(s.querySelectorAll(".nt-param-cancel"),p)),!1,"click",n).u(new U.iL(j))
if(q!=null){q.focus()
if(r!=null){k=u.E
s=k.i("~(1)")
p=s.a(new U.iM(r,q))
u.M.a(null)
k=k.c
W.A(q,"change",p,!1,k)
W.A(q,"input",s.a(new U.iN(r,q)),!1,k)}}}}
U.iK.prototype={
$1:function(a){var t,s,r,q=this
u.V.a(a)
t=q.b
if(t!=null)q.a.f=U.bJ(t.value,0)
q.c.classList.remove("show")
q.d.$0()
t=q.a
s=U.d_(t)
r=t.c
r.id.P(new U.bo(r.b,r.c,t.b,t.ga2(t),t.f,s))},
$S:2}
U.iL.prototype={
$1:function(a){var t,s
u.V.a(a)
t=this.a.classList
s=t.contains("show")
t.remove("show")
return s},
$S:10}
U.iM.prototype={
$1:function(a){J.ei(this.a,this.b.value)},
$S:3}
U.iN.prototype={
$1:function(a){J.ei(this.a,this.b.value)},
$S:3}
U.ct.prototype={
ga2:function(a){return"range"},
aB:function(a,b,c){var t=this,s=new U.ct(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,b)
s.aJ(b,t,c)
s.cF(b,t,c)
s.db=t.db
s.dx=t.dx
return s},
aI:function(a,b,c){var t,s,r,q,p,o,n=this,m=n.c.id,l=m.r
l.classList.add("show")
t=m.x
m=t.style
s=""+b+"px"
m.top=s
t.classList.remove("small")
C.b.F(t,"")
m=document
r=m.createElement("div")
r.className="nt-param-table"
t.appendChild(r)
C.b.a4(r,'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.a(n.d)+':\n            <label id="nt-param-label-'+n.gU()+'" for="nt-param-'+n.gU()+'">'+H.a(n.f)+'</label>\n            <span class="nt-param-unit">'+H.a(n.e)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+n.gU()+'" type="range" value="'+H.a(n.f)+'" min="'+H.a(n.db)+'" max="'+H.a(n.dx)+'" step="'+H.a(n.y)+'">\n          </div>\n        </div>\n      ')
q=u.a.a(m.querySelector("#nt-param-label-"+n.gU()))
p=u.p.a(m.querySelector("#nt-param-"+n.gU()))
if(p!=null&&q!=null){m=u.E
s=m.i("~(1)")
o=s.a(new U.iQ(n,p,l,c))
u.M.a(null)
m=m.c
W.A(p,"change",o,!1,m)
W.A(p,"input",s.a(new U.iR(q,p)),!1,m)}}}
U.iQ.prototype={
$1:function(a){var t,s,r=this,q=r.a
q.f=U.bJ(r.b.value,0)
r.c.classList.remove("show")
r.d.$0()
t=U.d_(q)
s=q.c
s.id.P(new U.bo(s.b,s.c,q.b,"range",q.f,t))
a.stopPropagation()},
$S:3}
U.iR.prototype={
$1:function(a){J.ei(this.a,this.b.value)},
$S:3}
U.bi.prototype={
gfL:function(){var t=this.b
return t==null||t===""?this.a:t}}
U.cw.prototype={
ga2:function(a){return"select"},
Z:function(){var t=this.f
return t==null?"":t},
au:function(a){this.f=a},
as:function(){return this.r},
aY:function(a){this.r=a},
bz:function(){return H.a(this.gea())+H.a(this.e)+" \u25be"},
gea:function(){var t=this.y,s=H.C(t),r=new H.af(t,s.i("w(1)").a(new U.iT(this)),s.i("af<1>"))
if(r.gk(r)===1)return r.B(0,0).gfL()
else return this.f},
eq:function(a,b,c){var t,s=this
s.r=b.r
s.x=b.x
C.a.t(b.y,new U.iS(s))
if(!c){t=b.f
s.f=t==null?s.r:t}},
aB:function(a,b,c){return U.on(b,this,c)},
aH:function(){switch(this.x){case"always-quote":return!0
case"never-quote":return!1
case"smart-quote":default:return P.fZ(this.f)==null&&!C.a.G(H.h(["true","false"],u.s),this.f)}},
aI:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.id,f=g.r
f.classList.add("show")
t=g.x
g=t.style
s=""+b+"px"
g.top=s
t.classList.add("small")
C.b.F(t,"")
g=document
r=g.createElement("div")
r.className="nt-param-table"
t.appendChild(r)
for(s=h.y,q=s.length,p=u.C,o=p.i("~(1)"),n=u.M,p=p.c,m=0;m<s.length;s.length===q||(0,H.B)(s),++m){l=s[m]
k=g.createElement("div")
k.className="nt-param-row"
j=g.createElement("div")
j.className="nt-select-option"
i=l.b
C.b.F(j,i==null||i===""?l.a:i)
if(l.a==h.f)j.classList.add("selected")
i=o.a(new U.iU(h,l,f,c))
n.a(null)
W.A(j,"click",i,!1,p)
k.appendChild(j)
r.appendChild(k)}}}
U.iT.prototype={
$1:function(a){var t
u.fn.a(a)
if(a.a==this.a.f){t=a.b
t=t!=null&&t!==""}else t=!1
return t},
$S:41}
U.iS.prototype={
$1:function(a){return C.a.l(this.a.y,u.fn.a(a))},
$S:42}
U.iU.prototype={
$1:function(a){var t,s,r,q=this
u.V.a(a)
t=q.a
t.f=q.b.a
q.c.classList.remove("show")
q.d.$0()
s=U.d_(t)
r=t.c
r.id.P(new U.bo(r.b,r.c,t.b,"select",t.f,s))
a.stopPropagation()},
$S:2}
U.cD.prototype={
ga2:function(a){return"text"},
Z:function(){var t=this.f
return t==null?"":t},
au:function(a){this.f=a},
as:function(){return this.r},
aY:function(a){this.r=a},
aB:function(a,b,c){var t,s,r=new U.cD(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,b)
r.aJ(b,this,c)
t=r.r=this.r
if(!c){s=this.f
r.f=s==null||s===""?t:s}return r},
aH:function(){return!0},
aI:function(a,b,c){var t,s,r,q,p,o,n,m,l=this,k="querySelectorAll",j=l.c.id,i=j.r
i.classList.add("show")
t=j.x
j=t.style
s=""+b+"px"
j.top=s
t.classList.remove("small")
C.b.F(t,"")
j=l.f
if(j==null)j=""
r=new P.cj().dA(j)
C.b.a4(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">'+('      <input class="nt-param-input" id="nt-param-'+l.gU()+'" type="text" value="'+r+'">\n      <span class="nt-param-unit">'+H.a(l.e)+"</span>\n    ")+'</div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
j="#nt-param-label-"+l.gU()
s=document
q=u.a.a(s.querySelector(j))
p=u.p.a(s.querySelector("#nt-param-"+l.gU()))
j=u.h
H.aU(j,j,"T",k)
o=u.W
n=u.r
m=u.I
new W.aT(n.a(new W.an(s.querySelectorAll(".nt-param-confirm"),o)),!1,"click",m).u(new U.iX(l,p,i,c))
H.aU(j,j,"T",k)
new W.aT(n.a(new W.an(s.querySelectorAll(".nt-param-cancel"),o)),!1,"click",m).u(new U.iY(i))
if(p!=null){p.focus()
if(q!=null){j=u.E
s=j.i("~(1)")
o=s.a(new U.iZ(q,p))
u.M.a(null)
j=j.c
W.A(p,"change",o,!1,j)
W.A(p,"input",s.a(new U.j_(q,p)),!1,j)}}}}
U.iX.prototype={
$1:function(a){var t,s,r,q=this
u.V.a(a)
t=q.b
if(t!=null)q.a.f=t.value
q.c.classList.remove("show")
q.d.$0()
t=q.a
s=U.d_(t)
r=t.c
r.id.P(new U.bo(r.b,r.c,t.b,"text",t.f,s))},
$S:2}
U.iY.prototype={
$1:function(a){var t,s
u.V.a(a)
t=this.a.classList
s=t.contains("show")
t.remove("show")
return s},
$S:10}
U.iZ.prototype={
$1:function(a){J.ei(this.a,this.b.value)},
$S:3}
U.j_.prototype={
$1:function(a){J.ei(this.a,this.b.value)},
$S:3}
U.h9.prototype={
a9:function(a){var t,s,r,q
try{s=this.a
if(s.length===0)return 0
r=H.C(s)
r=new H.T(s,r.i("e(1)").a(new U.hb(a)),r.i("T<1,e>")).cn(0,new U.hc())
return r}catch(q){t=H.L(q)
P.ee("here is the fail "+H.a(J.z(t)))
throw q}},
a3:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=t[r].a3(a)
if(q!=null)return q}return null},
am:function(a,b){var t,s,r,q,p,o=this
u.i.a(b)
t=o.a
H.C(t).i("d<1>").a(b)
if(!!t.fixed$length)H.D(P.x("insertAll"))
P.kH(a,0,t.length,"index")
s=!u.X.b(b)?J.nE(b):b
r=J.ad(s)
C.a.sk(t,t.length+r)
if(typeof a!=="number")return a.v()
q=a+r
C.a.V(t,q,t.length,t,a)
C.a.ec(t,a,q,s)
t=J.au(b)
if(t.gk(b)>0){p=t.gaD(b).fy
p=!(p==null?!0:!p)}else p=!1
if(p){p=o.a
o.sc1(H.al(p,0,a+t.gk(b),H.C(p).c).aq(0))}o.cm()},
dT:function(a){var t=this.a,s=H.C(t).c,r=H.al(t,a,null,s)
this.sc1(H.al(t,0,a,s).aq(0))
this.cm()
return r},
sc1:function(a){this.a=u.cG.a(a)}}
U.hb.prototype={
$1:function(a){u.bz.a(a)
return a.a9(this.a)},
$S:72}
U.hc.prototype={
$2:function(a,b){var t,s
H.q(a)
H.q(b)
t=a
s=b
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.a0(s)
return t+s},
$S:17}
U.cX.prototype={
sav:function(a){this.r=u.i.a(a)}}
U.cY.prototype={
c_:function(a,b){var t,s,r,q,p,o,n=this
a.insertRule("."+b+"-color { background-color: "+H.a(n.a)+"; }",0)
a.insertRule("."+b+"-attribute { color: "+H.a(n.a)+"; background-color: "+H.a(n.b)+"; }",0)
t="."+b+" { "
s="color: "+H.a(n.b)+"; border-color: "+H.a(n.c)+"; "
r=n.d
q=r===""?"":"font-weight: "+H.a(r)+";"
r=n.e
p=r===""?"":"font-size: "+H.a(r)+";"
r=n.f
o="font-family: "+H.a(r===""?"Poppins, sans-serif":r)+";"
a.insertRule(t+C.d.aG(s+C.d.aG(q+" "+p+" "+o))+" }",0)}}
U.ao.prototype={
gaS:function(){var t=this.go
return t==="starter"||t==="anywhere"},
bg:function(a,b){var t,s,r,q,p=this,o=U.ll(p.id,p.b,p.d,b)
o.d=p.d
o.e=p.e
o.f=p.f
o.r=p.r
o.x=p.x
o.y=p.y
o.db=p.db
o.dx=p.dx
o.dy=p.dy
o.fr=p.fr
o.fx=p.fx
o.fy=p.fy
o.go=p.go
C.a.t(p.cy,new U.hh(o))
for(t=p.z,t=t.gar(t),s=H.i(t),s=new H.a6(J.y(t.a),t.b,s.i("@<1>").q(s.Q[1]).i("a6<1,2>")),t=o.z;s.m();){r=s.a.aB(0,o,b)
t.j(0,r.b,r)}for(t=p.Q,t=t.gar(t),s=H.i(t),s=new H.a6(J.y(t.a),t.b,s.i("@<1>").q(s.Q[1]).i("a6<1,2>")),t=o.Q;s.m();){q=s.a.aB(0,o,b)
t.j(0,q.b,q)}return o},
a9:function(a){var t,s=this.b==a?1:0,r=this.cy
if(r.length!==0){t=H.C(r)
t=new H.T(r,t.i("e(1)").a(new U.hk(a)),t.i("T<1,e>")).cn(0,new U.hl())
if(typeof t!=="number")return H.a0(t)
s+=t}return s},
a3:function(a){var t,s,r,q
if(this.c==a)return this
for(t=this.cy,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=t[r].a3(a)
if(q!=null)return q}return null},
e9:function(a,b){var t=this.z
if(t.I(b))return t.h(0,b)
t=this.Q
if(t.I(b))return t.h(0,b)
throw H.b(P.bU("Attribute with given ID not found on block: "+H.a(b)))},
ah:function(){var t=this
if(t.gaS())return H.a(t.id.c)+"-block-starter"
if(t.cy.length!==0)return H.a(t.id.c)+"-block-container"
return H.a(t.id.c)+"-block-command"},
aC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
d.k2=b
d.k1=a
t=document
s=t.createElement("div")
d.r1=s
s.classList.add("nt-block")
r=d.ah()
d.r1.classList.add(r)
if(d.cy.length!==0)d.r1.classList.add("nt-block-with-clauses")
U.hg(d,d.r1)
q=t.createElement("div")
s=r+"-color"
q.classList.add(s)
s=d.db
if(s!=null){p=q.style
p.backgroundColor=s}q.classList.add("nt-block-header")
d.r1.appendChild(q)
d.r2=t.createElement("div")
d.e1()
d.r2.classList.add("nt-block-action")
q.appendChild(d.r2)
o=t.createElement("div")
o.classList.add("nt-block-params")
q.appendChild(o)
for(s=d.z,s=s.gar(s),p=H.i(s),p=new H.a6(J.y(s.a),s.b,p.i("@<1>").q(p.Q[1]).i("a6<1,2>"));p.m();)o.appendChild(p.a.dE())
n=t.createElement("div")
n.classList.add("nt-block-properties")
q.appendChild(n)
s=d.Q
if(s.a>0){p=d.ch!=="hidden"
m=new U.fc(p,new U.hi(d,n))
l=m.a=t.createElement("div")
l.classList.add("nt-toggle")
l.innerText=p?"\u25b2":"\u25bc"
k=u.C
j=k.i("~(1)").a(m.gfC(m))
u.M.a(null)
W.A(l,"click",j,!1,k.c)
d.rx=m
if(d.ch==="hidden")n.classList.add("nt-block-properties-hidden")
d.r2.appendChild(d.rx.a)}for(s=s.gar(s),p=H.i(s),p=new H.a6(J.y(s.a),s.b,p.i("@<1>").q(p.Q[1]).i("a6<1,2>"));p.m();){s=p.a
s.toString
i=t.createElement("div")
i.classList.add("nt-property")
h=t.createElement("div")
h.classList.add("nt-property-name")
h.innerText="\u2022 "+H.a(s.d)
i.appendChild(h)
i.appendChild(s.dE())
s=r+"-color"
i.classList.add(s)
s=d.db
if(s!=null){m=i.style
m.backgroundColor=s}n.appendChild(i)}s=d.cy
p=s.length
if(p!==0){if(0>=p)return H.o(s,0)
g=s[0].dD(d.k1,d,q)
d.r1.appendChild(g)
for(s=d.cy,s=H.al(s,1,null,H.C(s).c),s=new H.N(s,s.gk(s),s.$ti.i("N<aa.E>"));s.m();){f=s.d.dD(d.k1,d,null)
d.r1.appendChild(f)}e=t.createElement("div")
e.classList.add("nt-clause-footer")
t=r+"-color"
e.classList.add(t)
t=d.db
if(t!=null){s=e.style
s.backgroundColor=t}d.r1.appendChild(e)}U.kB(d,d.r1,new U.hj(d))
return d.r1},
e1:function(){var t,s,r,q,p=this,o=new P.aS(""),n=p.y
if(n!=null&&C.d.e0(n).length!==0){n=H.a(p.y)+"\n"
o.a=n
o.a=n+"\n"}n=p.k2
t=n.b==="workspace-chain"&&n.e===0
s=p.id
if(t){r=C.a.h(s.ch,n.a)
n=s.y
n.c8(o,0,r.a)
if(o.a.length===0)n.aT(o,0,p)}else s.y.aT(o,0,p)
n=o.a
q=new P.cj().dA(C.d.aG(n.charCodeAt(0)==0?n:n))
n=p.r2;(n&&C.b).a4(n,'<span title="'+q+'">'+H.a(p.d)+"</span>")},
O:function(){var t,s,r,q,p,o=this
o.r1.classList.remove("nt-drag-over")
o.r1.classList.remove("nt-block-clause-drag-over")
for(t=o.cy,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.B)(t),++q){p=t[q].O()
r=r||p}t=o.fy
if(t==null?!0:!t)t=(o.k3||o.k4)&&!r
else t=!1
if(t){o.r1.classList.add("nt-drag-over")
r=!0}return r},
a5:function(){var t,s,r,q=this
q.r1.classList.remove("nt-drag-over")
q.r1.classList.remove("nt-block-clause-drag-over")
q.k4=q.k3=!1
for(t=q.cy,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)t[r].a5()},
bC:function(a){var t,s,r=this
U.ly(r,u.D.a(a))
t=H.h([],u.u)
C.a.l(t,r)
C.a.M(t,r.k2.r)
U.hs(r.k1.e,t,!0,null)
s=r.id
s.dU(r.k2)
s.dG()},
c6:function(a){var t,s,r,q=this
u.D.a(a)
$.aO=!0
$.ex=$.ev=$.ew=!1
t=q.id
t.al()
t.a5()
s=t.k3
if(s==null)return
t.sX(u.i.a(null))
r=q.k2
switch(r.b){case"workspace-chain":if(r.e===0)t.dB(s,$.lw,$.lx)
else C.a.h(t.ch,r.a).am(q.k2.e,s)
break
case"block-clause":C.a.h(C.a.h(t.ch,r.a).a3(q.k2.c).cy,q.k2.d).am(q.k2.e,s)
break}},
a6:function(a){var t,s,r,q,p=this
u.k.a(a)
t=p.fy
if(!(t==null?!0:!t))return
$.aO=!0
t=p.id
s=t.k3
t.sX(u.i.a(null))
r=p.k2
switch(r.b){case"workspace-chain":r=C.a.h(t.ch,r.a)
q=p.k2.e
if(typeof q!=="number")return q.v()
r.am(q+1,s)
break
case"block-clause":r=C.a.h(C.a.h(t.ch,r.a).a3(p.k2.c).cy,p.k2.d)
q=p.k2.e
if(typeof q!=="number")return q.v()
r.am(q+1,s)
break}t.P(U.cc(J.aW(s,0)))
t.al()},
br:function(){var t,s,r
for(t=this.cy,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)t[r].hf()},
bq:function(){var t,s,r,q,p,o=this,n=o.r2
n.toString
C.b.F(n,"")
o.e1()
n=o.rx
if(n!=null)o.r2.appendChild(n.a)
for(n=o.cy,t=n.length,s=0;s<n.length;n.length===t||(0,H.B)(n),++s)for(r=n[s].a,q=r.length,p=0;p<r.length;r.length===q||(0,H.B)(r),++p)r[p].bq()},
sfB:function(a){this.cy=u.al.a(a)}}
U.hh.prototype={
$1:function(a){var t,s,r,q,p,o
u.ds.a(a)
t=this.a
s=t.cy
r=a.e
q=a.f
p=a.r
o=a.x
return C.a.l(s,new U.aM(new U.a4(H.h(["children","action","open","close"],u.s)),t,r,q,p,o,H.h([],u.u)))},
$S:47}
U.hk.prototype={
$1:function(a){return u.ds.a(a).a9(this.a)},
$S:61}
U.hl.prototype={
$2:function(a,b){H.q(a)
H.q(b)
if(typeof a!=="number")return a.v()
if(typeof b!=="number")return H.a0(b)
return a+b},
$S:17}
U.hi.prototype={
$1:function(a){var t=this.a
t.ch=a?"shown":"hidden"
this.b.classList.toggle("nt-block-properties-hidden")
t.id.P(U.cc(t))},
$S:49}
U.hj.prototype={
$1:function(a){return this.a.k3=a},
$S:18}
U.hm.prototype={
$1:function(a){u.k.a(a)
return this.a.$1(!0)},
$S:4}
U.hn.prototype={
$1:function(a){u.k.a(a)
return this.a.$1(!1)},
$S:4}
U.hp.prototype={
$1:function(a){return this.a.k4=a},
$S:18}
U.aD.prototype={
aC:function(a,b){var t,s,r,q,p,o,n,m,l=this
l.r=b
t=document
s=t.createElement("div")
l.x=s
s.classList.add("nt-fragment")
r=Z.ci(l.x,l.f.k4)
r.gap(r).u(l.ga0())
r.gan(r).u(new U.hq(l))
r.gao(r).u(new U.hr(l))
t=t.createElement("div")
l.b=t
t.classList.add("nt-chain")
if(l.a.length===0)return l.b
for(t=u.i,q=0;s=l.a,q<s.length;q=n){p=s[q]
o=l.r
n=q+1
m=new U.cX()
s=t.a(H.al(s,n,null,H.C(s).c))
m.a=o
m.b="workspace-chain"
m.e=q
m.sav(s)
p.aC(a,m)}U.hs(l.b,s,!1,l.x)
l.e3(l.d,l.e)
return l.b},
e3:function(a,b){var t,s,r=this
r.d=a
r.e=b
t=r.b.style
s=H.a(a)+"px"
t.left=s
t=r.b.style
s=H.a(b)+"px"
t.top=s},
he:function(a){var t,s,r,q,p,o,n
this.r=a
for(t=u.i,s=0;r=this.a,s<r.length;s=n){q=r[s]
p=q.k2
o=this.r
n=s+1
r=H.al(r,n,null,H.C(r).c)
p.toString
t.a(r)
p.f=p.e=p.d=p.c=p.b=p.a=null
p.a=o
p.b="workspace-chain"
p.e=s
p.sav(r)
q.br()}},
O:function(){var t,s,r,q,p,o=this
o.x.classList.remove("nt-drag-over")
for(t=o.a,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.B)(t),++q){p=t[q].O()
r=r||p}if(o.y&&!r){o.x.classList.add("nt-drag-over")
r=!0}return r},
a5:function(){var t,s,r
this.x.classList.remove("nt-drag-over")
this.y=!1
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)t[r].a5()},
cm:function(){var t,s,r,q,p,o,n,m=this
for(t=u.i,s=0;r=m.a,s<r.length;s=n){q=r[s]
p=q.k2
o=m.r
n=s+1
r=H.al(r,n,null,H.C(r).c)
p.toString
t.a(r)
p.f=p.e=p.d=p.c=p.b=p.a=null
p.a=o
p.b="workspace-chain"
p.e=s
p.sav(r)
q.br()}U.hs(m.b,r,!1,m.x)},
fO:function(){var t=this,s=t.a,r=s.length
if(r!==0){if(0>=r)return H.o(s,0)
s=!s[0].gaS()}else s=!0
if(!s)return
t.x.classList.add("show")
s=J.cT(t.e)
r=t.b.style
s=""+(s-40)+"px"
r.top=s},
a6:function(a){var t,s,r,q,p,o,n=this
u.k.a(a)
$.aO=!0
t=n.f
s=t.k3
t.sX(u.i.a(null))
r=J.aW(s,0)
q=U.d7(n.b)
p=a.d.E(0,q)
o=n.e
if(typeof o!=="number")return o.E()
n.e=o-40+J.c9(p.b)
n.am(0,s)
t.P(U.cc(r))
t.al()}}
U.hq.prototype={
$1:function(a){u.k.a(a)
return this.a.y=!0},
$S:7}
U.hr.prototype={
$1:function(a){u.k.a(a)
return this.a.y=!1},
$S:7}
U.aM.prototype={
dD:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=document,e=f.createElement("div")
g.b=e
e.classList.add("nt-clause")
if(c!=null){t=Z.ci(c,g.d.id.r1)
t.gap(t).u(g.ga0())
t.gan(t).u(new U.ht(g))
t.gao(t).u(new U.hu(g))}s=b.ah()
e=f.createElement("div")
g.ch=e
e.classList.add("nt-clause-left-bar")
e=g.ch
r=s+"-color"
e.classList.add(r)
r=b.db
e=g.ch
if(r!=null){e=e.style
e.backgroundColor=r}g.b.appendChild(g.ch)
e=f.createElement("div")
g.Q=e
e.classList.add("nt-clause-divider")
e=g.Q
r=s+"-color"
e.classList.add(r)
r=b.db
e=g.Q
if(r!=null){e=e.style
e.backgroundColor=r}g.b.appendChild(g.Q)
f=f.createElement("div")
g.cx=f
f.classList.add("nt-clause-blocks")
q=g.f
f=g.r
p=f==null?"":f
if(q==null||q==="")q=p
f=J.h1(q)
if(f!==""){f=g.Q
f.toString
C.b.F(f,q)}f=g.d
o=Z.ci(g.b,f.id.r1)
o.gap(o).u(g.ga0())
o.gan(o).u(new U.hv(g))
o.gao(o).u(new U.hw(g))
if(g.a.length===0){g.cw()
return g.b}g.b.appendChild(g.cx)
for(e=g.e,r=u.i,n=0;m=g.a,n<m.length;n=k){l=m[n]
k=n+1
j=H.al(m,k,null,H.C(m).c)
m=f.k2.a
i=f.c
h=new U.cX()
r.a(j)
h.a=m
h.b="block-clause"
h.c=i
h.e=n
h.d=e
h.sav(j)
l.aC(a,h)}U.kz(g.cx,m,"nt-block-clause",!1)
return g.b},
cw:function(){var t,s=this
s.b.classList.add("nt-clause-empty")
s.b.appendChild(U.lS(!1,s))
t=document.createElement("div")
t.className="nt-clause-drop"
s.b.appendChild(t)
s.b.appendChild(U.lS(!0,s))},
hf:function(){var t,s,r,q,p,o,n,m,l,k
for(t=this.d,s=this.e,r=u.i,q=0;p=this.a,q<p.length;q=k){o=p[q]
n=o.k2
m=t.k2.a
l=t.c
k=q+1
p=H.al(p,k,null,H.C(p).c)
n.toString
r.a(p)
n.f=n.e=n.d=n.c=n.b=n.a=null
n.a=m
n.b="block-clause"
n.c=l
n.e=q
n.d=s
n.sav(p)
o.br()}},
cm:function(){var t,s,r,q,p,o,n,m,l,k=this,j=k.b
j.toString
C.b.F(j,"")
j=k.cx
j.toString
C.b.F(j,"")
k.b.appendChild(k.ch)
k.b.appendChild(k.Q)
if(k.a.length===0){k.cw()
return}k.b.classList.remove("nt-clause-empty")
k.b.appendChild(k.cx)
for(j=k.d,t=k.e,s=u.i,r=0;q=k.a,r<q.length;r=l){p=q[r]
o=p.k2
n=j.k2.a
m=j.c
l=r+1
q=H.al(q,l,null,H.C(q).c)
o.toString
s.a(q)
o.f=o.e=o.d=o.c=o.b=o.a=null
o.a=n
o.b="block-clause"
o.c=m
o.e=r
o.d=t
o.sav(q)
p.br()}U.kz(k.cx,q,"nt-block-clause",!1)},
O:function(){var t,s,r,q,p,o=this
o.b.classList.remove("nt-block-clause-drag-over")
t=o.a
s=t.length
if(s!==0){if(0>=s)return H.o(t,0)
t[0].r1.classList.remove("nt-block-clause-drag-over")}for(t=o.a,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.B)(t),++q){p=t[q].O()
r=r||p}if((o.y||o.z)&&!r){t=o.a
s=t.length
if(s===0)o.b.classList.add("nt-block-clause-drag-over")
else{if(0>=s)return H.o(t,0)
t[0].r1.classList.add("nt-block-clause-drag-over")}r=!0}return r},
a5:function(){var t,s,r,q=this
q.b.classList.remove("nt-block-clause-drag-over")
t=q.a
s=t.length
if(s!==0){if(0>=s)return H.o(t,0)
t[0].r1.classList.remove("nt-block-clause-drag-over")}q.z=q.y=!1
for(t=q.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)t[r].a5()},
a6:function(a){var t,s
u.k.a(a)
$.aO=!0
t=this.d.id
s=t.k3
t.sX(u.i.a(null))
this.am(0,s)
this.b.classList.remove("nt-clause-empty")
t.P(U.cc(J.aW(s,0)))}}
U.ht.prototype={
$1:function(a){u.k.a(a)
return this.a.z=!0},
$S:7}
U.hu.prototype={
$1:function(a){u.k.a(a)
return this.a.z=!1},
$S:7}
U.hv.prototype={
$1:function(a){u.k.a(a)
return this.a.y=!0},
$S:7}
U.hw.prototype={
$1:function(a){u.k.a(a)
return this.a.y=!1},
$S:7}
U.eE.prototype={}
U.hx.prototype={
dI:function(a,b,c){var t,s,r,q,p=this,o=p.c
if(c!=null)p.c=c
t=a.db.b
s=H.C(t)
r=s.i("aG<1,t<ao>>")
q=p.fS(a,P.cm(new H.aG(new H.af(t,s.i("w(1)").a(new U.hy(!0,a)),s.i("af<1>")),s.i("t<ao>(1)").a(new U.hz()),r),!0,r.i("d.E")))
p.c=o
return q},
fS:function(a,b){var t,s,r,q
u.eB.a(b)
t=new P.aS("")
s=a.ch
r=H.h(s.slice(0),H.C(s).i("G<1>"))
C.a.cB(r,U.q9())
for(s=r.length,q=0;q<r.length;r.length===s||(0,H.B)(r),++q)this.dH(t,r[q].a,a.z,a.Q)
for(s=b.length,q=0;q<b.length;b.length===s||(0,H.B)(b),++q)this.dH(t,b[q],a.z,a.Q)
s=t.a
return s.charCodeAt(0)==0?s:s},
dH:function(a,b,c,d){var t,s,r,q=this
u.cG.a(b)
t=J.au(b)
if(t.gN(b))return
s=t.h(b,0)
if(!s.gaS())return
q.e6(a,null,0,q.b.a,c)
q.aT(a,0,s)
q.c8(a,1,t.aZ(b,1).aq(0))
r=t.gJ(b).x
if(r==null||r==="")r=d
q.e6(a,null,0,q.b.b,r)
a.a+="\n"},
c8:function(a,b,c){var t,s
u.cG.a(c)
t=c.length
if(t===0)return
for(s=0;s<c.length;c.length===t||(0,H.B)(c),++s)this.aT(a,b,c[s])},
aT:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j=this,i=c.f
if(i==null){i=H.a(c.d)
for(t=c.z,s=0;s<t.a;++s)i+=" {"+s+"}"
for(t=c.Q,s=0;s<t.a;++s)i+=" {P"+s+"}"}j.aX(a,b,j.cp(i,c))
for(t=c.cy,r=t.length,q=b+1,p=c.z,o=c.Q,n=0;n<t.length;t.length===r||(0,H.B)(t),++n){m=t[n]
l=j.b.c
k=m.r
l=k==null?l:k
if(l!==""){i=j.aF(j.aF(l,c,p,""),c,o,"P")
j.aX(a,b,i)}j.c8(a,q,m.a)
l=j.b.d
k=m.x
l=k==null?l:k
if(l!==""){i=j.aF(j.aF(l,c,p,""),c,o,"P")
j.aX(a,b,i)}}t=c.r
if(!(t==null||t===""))j.aX(a,b,j.cp(t,c))},
cp:function(a,b){return this.aF(this.aF(a,b,b.z,""),b,b.Q,"P")},
aF:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
u.dm.a(c)
for(t=new H.ap(c,H.i(c).i("ap<1>")),t=t.gw(t),s=this.d,r=u.a3,q=0;t.m();){p=t.d
o="{"+d+q+"}"
p=r.a(c.h(0,p))
n=p.Z()
if(n==null)n=""
m=p.aH()?'"'+n+'"':n
l=b.b
k=b.c
j=p.b
p=p.ga2(p)
p=H.r(this.c.$6(s,l,k,j,m,p))
a.toString
if(typeof p!="string")H.D(H.bb(p))
a=H.l4(a,o,p);++q}return a},
aX:function(a,b,c){var t,s,r
for(t="",s=0;s<b;++s)t+="  "
a.a+=t
r="\n"+t
c.toString
a.a+=H.l4(c,"\n",r)+"\n"},
e6:function(a,b,c,d,e){var t=e==null?d:e
if(t!=="")this.aX(a,c,b==null?t:this.cp(t,b))}}
U.hy.prototype={
$1:function(a){var t
u.c.a(a)
if(this.a){t=a.a
t=H.at(t.fx)&&t.gaS()&&this.b.a9(t.b)===0}else t=!1
return t},
$S:31}
U.hz.prototype={
$1:function(a){var t
u.c.a(a)
t=H.h([],u.u)
C.a.l(t,a.a)
return t},
$S:53}
U.d6.prototype={}
U.ez.prototype={}
U.dc.prototype={}
U.ae.prototype={
ep:function(a,b){var t=this
t.b=b.b
t.c=b.c
t.d=b.d
C.a.t(b.e,new U.i6(t))},
bh:function(a){var t,s=this,r=s.e,q=r.length
if(q===1){q=s.a
if(q.c!==s)a.a+="("
a.a+=H.a(s.b)+" "
if(0>=r.length)return H.o(r,0)
r[0].bh(a)
if(q.c!==s)a.a+=")"}else if(q===2){t=s.a
if(t.c!==s)a.a+="("
if(0>=q)return H.o(r,0)
r[0].bh(a)
a.a+=" "+H.a(s.b)+" "
if(1>=r.length)return H.o(r,1)
r[1].bh(a)
if(t.c!==s)a.a+=")"}else{r=s.b
if(r!=null)a.a+=r}},
fA:function(a){var t,s,r,q,p
u.dy.a(a)
t=this.e
s=t.length
r=a.length
if(s!==r)return!0
for(q=0;q<r;++q){p=a[q]
if(q>=s)return H.o(t,q)
if(p!=t[q].c)return!0}return!1},
eb:function(a){var t,s,r,q,p,o,n=this
u.dy.a(a)
t=n.e
s=t.length===0
if(n.fA(a)){C.a.sk(t,0)
for(r=n.a,q=u.U,p=0;p<a.length;++p)if(p===0&&s&&a[p]==n.c){o=new U.ae(r,a[p],H.h([],q))
o.b=n.b
C.a.l(t,o)}else C.a.l(t,new U.ae(r,a[p],H.h([],q)))}},
dq:function(a){var t,s,r=this,q=document.createElement("div")
C.b.F(q,H.a(r.b))
q.classList.add("nt-expression-text")
q.classList.add("editable")
t=H.a(r.c)
q.classList.add(t)
t=u.C
s=t.i("~(1)").a(new U.ii(r,q))
u.M.a(null)
W.A(q,"click",s,!1,t.c)
r.dF(q,a)
a.appendChild(q)},
dF:function(a,b){var t=u.C,s=t.i("~(1)"),r=s.a(new U.ij(b))
u.M.a(null)
t=t.c
W.A(a,"mouseenter",r,!1,t)
W.A(a,"mouseleave",s.a(new U.ik(b)),!1,t)},
be:function(a,b){var t=document.createElement("div")
C.b.F(t,b?"(":")")
t.classList.add("nt-expression-text")
t.classList.add("parenthesis")
this.dF(t,a)
a.appendChild(t)},
ft:function(a){var t,s,r,q=this
q.b=J.z(U.bJ(q.b,0))
t=W.nX("number")
t.className="nt-number-input"
t.value=q.b
t.step="1"
s=u.E
r=s.i("~(1)").a(new U.ih(q,t))
u.M.a(null)
W.A(t,"change",r,!1,s.c)
a.appendChild(t)},
gfY:function(){var t=this.b
if(t!=null)return P.mP(t,new U.il())!=null
return!1},
bp:function(a){var t,s,r=this,q=document.createElement("div")
q.className="nt-expression"
if((r.gfY()||r.b==null)&&r.c==="num")r.ft(q)
else if(r.b==null){q.classList.add("empty")
C.b.a4(q,"<small>&#9660;</small>")}else{t=r.e
s=t.length
if(s===1){r.be(q,!0)
r.dq(q)
if(0>=t.length)return H.o(t,0)
t[0].bp(q)
r.be(q,!1)}else if(s===2){r.be(q,!0)
if(0>=t.length)return H.o(t,0)
t[0].bp(q)
r.dq(q)
if(1>=t.length)return H.o(t,1)
t[1].bp(q)
r.be(q,!1)}else C.b.a4(q,"<div class='nt-expression-text "+H.a(r.c)+"'>"+H.a(r.b)+"</div>")}if(r.e.length===0){q.classList.add("editable")
t=u.C
s=t.i("~(1)").a(new U.ip(r,q))
u.M.a(null)
W.A(q,"click",s,!1,t.c)}a.appendChild(q)},
dQ:function(a){var t,s,r=u.h,q=document
H.aU(r,r,"T","querySelectorAll")
r=new W.an(q.querySelectorAll(".nt-pulldown-menu"),u.W)
r.t(r,new U.im())
t=q.createElement("div")
t.classList.add("nt-pulldown-menu")
q=this.a
this.ex(t,q.a.dy)
if(J.le(q.a.dx))C.b.a4(t,"<hr>")
C.b.a4(t,"<hr>")
s=W.li("#")
C.l.F(s,"Clear")
s.className="clear"
t.appendChild(s)
r=u.C
q=r.i("~(1)").a(new U.io(this,t))
u.M.a(null)
W.A(s,"click",q,!1,r.c)
a.appendChild(t)},
ex:function(a,b){var t,s,r,q,p,o,n,m
u.gp.a(b)
for(t=b.length,s=u.C,r=s.i("~(1)"),q=u.M,s=s.c,p=0;p<b.length;b.length===t||(0,H.B)(b),++p){o=b[p]
if(o.b==this.c){n=document.createElement("a")
n.href="#"
C.l.F(n,H.a(o.a))
a.appendChild(n)
m=r.a(new U.ig(this,a,o))
q.a(null)
W.A(n,"click",m,!1,s)}}}}
U.i6.prototype={
$1:function(a){var t=this.a
return C.a.l(t.e,U.lG(t.a,u.gI.a(a)))},
$S:54}
U.ii.prototype={
$1:function(a){u.V.a(a)
this.a.dQ(this.b)
a.stopPropagation()},
$S:2}
U.ij.prototype={
$1:function(a){u.V.a(a)
this.a.classList.add("highlight")},
$S:2}
U.ik.prototype={
$1:function(a){u.V.a(a)
this.a.classList.remove("highlight")},
$S:2}
U.ih.prototype={
$1:function(a){var t=this.a,s=this.b,r=s.value
t.b=r
if(r===""){t.b="0"
s.value="0"}},
$S:3}
U.il.prototype={
$1:function(a){return null},
$S:19}
U.ip.prototype={
$1:function(a){u.V.a(a)
this.a.dQ(this.b)
a.stopPropagation()},
$S:2}
U.im.prototype={
$1:function(a){return J.eh(u.h.a(a))},
$S:16}
U.io.prototype={
$1:function(a){var t
u.V.a(a)
C.b.bo(this.b)
t=this.a
t.b=null
C.a.sk(t.e,0)
t.d=null
t.a.co()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.ig.prototype={
$1:function(a){var t,s
u.V.a(a)
C.b.bo(this.b)
t=this.a
s=this.c
t.eb(s.c)
t.b=s.a
t.c=s.b
t.d=s.d
t.a.co()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.br.prototype={
n:function(a){var t,s=new P.aS("")
this.c.bh(s)
t=s.a
return t.charCodeAt(0)==0?t:t},
co:function(){var t=this,s=t.b
if(s!=null&&t.c!=null){J.ns(s).bf(0)
t.c.bp(u.d.a(t.b))}}}
U.a4.prototype={
aW:function(a){var t,s,r=this.b
if(r==null)return
for(r=u.F.a($.ef().h(0,"Object").S("keys",H.h([r],u.v))),r=new H.N(r,r.gk(r),H.i(r).i("N<k.E>")),t=this.a;r.m();){s=H.r(r.d)
if(!C.a.G(t,s)){a.toString
if(typeof s!="string"&&!0)H.D(P.b2("property is not a String or num"))
if(s in a.a)throw H.b(P.bU("Found existing property when restoring external data for export: "+H.a(s)))
a.j(0,s,this.b.h(0,s))}}}}
U.eo.prototype={
by:function(a){var t=this.b,s=H.C(t),r=new H.af(t,s.i("w(1)").a(new U.hf(a)),s.i("af<1>"))
if(r.gk(r)===1)return r.gJ(r).a
return null},
fN:function(a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=document,a5=a4.createElement("div"),a6=a2.a
a5.id=H.a(a6.c)+"-menu"
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
k=l.ah()
n.x.classList.add(k)
j=n.x
i=k+"-color"
j.classList.add(i)
h=l.bg(0,!1)
g=new P.aS("")
j=l.y
if(j!=null&&C.d.e0(j).length!==0){j=H.a(l.y)+"\n"
g.a=j
g.a=j+"\n"}j=n.d
j.y.aT(g,0,h)
i=g.a
f=C.d.aG(i.charCodeAt(0)==0?i:i)
e=new P.cj().cT(f,0,f.length)
d=e==null?f:e
i=n.x
c='<span title="'+d+'">'+H.a(l.d)+"</span>"
i.toString
C.b.cc(i,"beforeend",c,a3,a3)
i=l.db
if(i!=null){c=n.x.style
c.backgroundColor=i}i=l.dy
if(i!=null){c=n.x.style
c.borderColor=i}i=l.dx
if(i!=null){c=n.x.style
c.color=i}i=l.fr
if(i!=null){c=n.x.style
b=c.lineHeight
c.font=i
i=n.x.style
i.lineHeight=b}a=Z.lz(n.x,n.y,".nt-menu-slot-at-limit","nt-block-dragging")
i=a.gdN(a)
c=i.$ti
a0=c.i("~(1)").a(n.gbB())
t.a(null)
i.a.bZ(c.i("~(1)").a(a0),a3,null,!1)
a0=a.gdM(a)
c=a0.$ti
a0.a.bZ(c.i("~(1)").a(c.i("~(1)").a(n.gc5())),a3,null,!1)
c=n.x
c.toString
W.A(c,"dblclick",r.a(n.gh7()),!1,s)
c=n.x
c.toString
W.A(c,"contextmenu",p.a(n.gh5()),!1,q)
i=n.e
l=j.a9(l.b)
if(typeof i!=="number")return i.E()
if(typeof l!=="number")return H.a0(l)
l=i<=0||i-l>0
j=n.x
if(l)j.classList.remove("nt-menu-slot-at-limit")
else j.classList.add("nt-menu-slot-at-limit")
m.appendChild(n.x)}a1=Z.ci(a2.d,a6.k4)
a1.gan(a1).u(new U.hd(a2))
a1.gao(a1).u(new U.he(a2))
a1.gap(a1).u(a2.ga0())
a2.e2()
return a2.d},
e2:function(){var t,s,r,q,p,o
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=t[r]
p=q.e
o=q.d.a9(q.a.b)
if(typeof p!=="number")return p.E()
if(typeof o!=="number")return H.a0(o)
p=p<=0||p-o>0
o=q.x
if(p)o.classList.remove("nt-menu-slot-at-limit")
else o.classList.add("nt-menu-slot-at-limit")}},
O:function(){var t,s
if(!$.ew)t=$.ev&&!$.ex
else t=!0
s=this.d
if(t)s.classList.add("nt-menu-drag-over")
else s.classList.remove("nt-menu-drag-over")},
a6:function(a){var t,s
u.k.a(a)
$.aO=!0
t=this.a
s=t.k3
t.sX(u.i.a(null))
t.P(U.cc(J.aW(s,0)))
t.al()}}
U.hf.prototype={
$1:function(a){return u.c.a(a).a.b==this.a},
$S:31}
U.hd.prototype={
$1:function(a){u.k.a(a)
$.ew=!0
this.a.O()},
$S:8}
U.he.prototype={
$1:function(a){u.k.a(a)
$.ew=!1
this.a.O()},
$S:8}
U.iI.prototype={
$1:function(a){var t,s,r,q=this
H.r(a)
t=document.createElement("div")
W.kL(t,u.t.a(H.h(["nt-notch-"+H.a(a),q.a],u.s)))
if(!q.b||a!=="middle"){s=q.c.db
if(s!=null){r=t.style
r.backgroundColor=s}}q.d.appendChild(t)},
$S:19}
U.iJ.prototype={
$1:function(a){return this.a.k4=a},
$S:18}
U.iH.prototype={
$1:function(a){var t,s,r,q=this
H.r(a)
t=document.createElement("div")
W.kL(t,u.t.a(H.h(["nt-notch-"+H.a(a),q.a],u.s)))
if(!q.b||a!=="middle"){s=q.c.d.db
if(s!=null){r=t.style
r.backgroundColor=s}}q.d.appendChild(t)},
$S:19}
U.c1.prototype={}
U.en.prototype={
bt:function(){return P.aj(P.a5(["type","block-changed","blockId",this.b,"instanceId",this.c],u.N,u.K))}}
U.bo.prototype={
bt:function(){var t=this
return P.aj(P.a5(["type","attribute-changed","blockId",t.b,"instanceId",t.c,"attributeId",t.d,"attributeType",t.e,"value",t.f,"formattedValue",t.r],u.N,u.z))}}
U.eP.prototype={
bt:function(){return P.aj(P.a5(["type","menu-item-clicked","blockId",this.b],u.N,u.K))}}
U.eQ.prototype={
bt:function(){return P.aj(P.a5(["type","menu-item-context-menu","blockId",this.b,"x",this.c,"y",this.d],u.N,u.K))}}
U.aR.prototype={
bC:function(a){var t,s,r,q=this
u.D.a(a)
t=q.a.bg(0,!1)
q.r=t
s=q.f
r=new U.cX()
r.b="new-block"
r.f=s
t.aC(q.y,r)
U.ly(q.r,a)
U.hs(q.y.e,H.h([q.r],u.u),!1,null)
t=q.d
t.dU(r)
t.dG()},
c6:function(a){var t
u.D.a(a)
$.aO=!0
$.ex=$.ev=$.ew=!1
this.r=null
t=this.d
t.al()
t.a5()},
h8:function(a){this.d.P(new U.eP(this.a.b))},
h6:function(a){var t,s,r
u.V.a(a)
a.preventDefault()
a.stopPropagation()
t=this.a.b
s=a.pageX
r=a.pageY
this.d.P(new U.eQ(t,H.q(s),H.q(r)))
return!1}}
U.fc.prototype={
fD:function(a,b){var t,s,r=this
u.V.a(b).stopPropagation()
t=!r.d
r.d=t
s=r.a
s.innerText=t?"\u25b2":"\u25bc"
s=r.d
r.e.$1(s)}}
U.bP.prototype={
P:function(a){var t,s,r=this
try{r.e4()
r.bq()
r.db.e2()
$.ef().h(0,"NetTango").S("_relayCallback",[r.c,a.bt()])}catch(s){t=H.L(s)
P.ee("Unable to relay program changed event to Javascript")
P.ee(t)}},
a9:function(a){var t,s=this.ch
if(s.length===0)return 0
t=H.C(s)
return new H.T(s,t.i("e(1)").a(new U.hH(a)),t.i("T<1,e>")).cn(0,new U.hI())},
a3:function(a){var t,s,r,q
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=t[r].a3(a)
if(q!=null)return q}throw H.b(P.bU("Block with given instance ID not found in workspace: "+H.a(a)))},
fM:function(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.c,h=H.a(i)+"-styles",g=document,f=u.bg.a(g.getElementById(h))
if(f==null){f=g.createElement("style")
f.id=h
j.d.appendChild(f)}t=u.af.a(f.sheet)
for(;t.cssRules.length>0;)t.removeRule(0)
j.go.c_(t,H.a(i)+"-block-starter")
j.id.c_(t,H.a(i)+"-block-container")
j.k1.c_(t,H.a(i)+"-block-command")
s=g.createElement("div")
s.classList.add("nt-workspace-wrapper")
j.d.appendChild(s)
r=g.createElement("div")
r.classList.add("nt-block-drag")
r.classList.add("nt-chain")
s.appendChild(r)
q=g.createElement("div")
q.className="nt-attribute-backdrop"
j.r=q
p=u.C
o=p.i("~(1)")
n=o.a(new U.hA(j))
u.M.a(null)
p=p.c
W.A(q,"click",n,!1,p)
n=g.createElement("div")
n.className="nt-attribute-dialog"
j.x=n
W.A(n,"click",o.a(new U.hB()),!1,p)
j.r.appendChild(j.x)
j.d.appendChild(j.r)
p=g.createElement("div")
p.id=H.a(i)+"-space"
j.e=p
p.classList.add("nt-workspace")
p=new U.ez()
p.e=r
j.k2=p
s.appendChild(j.e)
g=g.createElement("div")
j.f=g
j.e.appendChild(g)
for(i=j.ch,m=0;m<i.length;++m)i[m].aC(j.k2,m)
j.h9()
l=j.db.fN(j.k2)
i=l.style
g=H.a(j.fr)+"px"
i.maxHeight=g
s.appendChild(l)
k=Z.ci(j.e,j.k4)
k.gan(k).u(new U.hC(j))
k.gh4(k).u(new U.hD(j))
k.gao(k).u(new U.hE(j))
k.gap(k).u(j.ga0())
i=j.r2
i.gan(i).u(new U.hF(j))
i=j.r2
i.gao(i).u(new U.hG(j))
j.e4()},
a6:function(a){var t,s,r,q=this
u.k.a(a)
$.aO=!0
q.al()
t=q.k3
q.sX(u.i.a(null))
s=U.d7(q.f)
r=a.d.E(0,s).E(0,$.lv)
q.dB(t,Math.max(0,J.c9(r.a)),Math.max(0,J.c9(r.b)))
q.P(U.cc(J.aW(t,0)))},
fG:function(a){var t,s=this
u.k.a(a)
$.aO=!0
s.al()
t=s.k3
s.sX(u.i.a(null))
s.P(U.cc(J.aW(t,0)))},
dB:function(a,b,c){var t,s,r,q,p=this
u.i.a(a)
t=new U.aD(new U.a4(H.h(["x","y","blocks"],u.s)),p,H.h([],u.u))
s=p.ch
r=s.length
C.a.l(s,t)
q=t.aC(p.k2,r)
p.e.appendChild(q)
t.am(t.a.length,a)
t.e3(b,c)},
ha:function(a){var t,s,r,q=this.ch,p=C.a.h(q,a)
$.lw=p.d
$.lx=p.e
t=p.a
if(!!q.fixed$length)H.D(P.x("removeAt"))
if(!H.cN(a))H.D(H.bb(a))
if(typeof a!=="number")return a.ai()
s=q.length
if(a>=s)H.D(P.cu(a,null))
q.splice(a,1)[0]
s=p.b;(s&&C.b).bo(s)
for(r=0;r<q.length;++r)q[r].he(r)
return t},
dU:function(a){var t,s,r,q=this,p=a.b
switch(p){case"new-block":t=C.a.h(q.db.b,a.f)
t.x.classList.remove("nt-block-dragging")
q.sX(u.i.a(H.h([t.r],u.u)))
break
case"workspace-chain":p=a.e
s=u.i
r=a.a
if(p===0)q.sX(s.a(q.ha(r)))
else q.sX(s.a(C.a.h(q.ch,r).dT(a.e)))
break
case"block-clause":q.sX(u.i.a(C.a.h(C.a.h(q.ch,a.a).a3(a.c).cy,a.d).dT(a.e)))
break
case"default":throw H.b(P.bU("Unknown block removal type: "+H.a(p)))}},
h9:function(){var t,s,r=this.ch,q=H.h(r.slice(0),H.C(r).i("G<1>"))
C.a.cB(q,new U.hJ())
r=this.f
r.toString
C.b.F(r,"")
for(r=q.length,t=0;t<q.length;q.length===r||(0,H.B)(q),++t){s=q[t]
this.f.appendChild(s.b)}},
dG:function(){var t,s,r
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)t[r].fO()},
al:function(){var t,s,r,q,p,o,n
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=t[r]
q.x.classList.remove("show")
p=J.cT(q.e)
o=q.b.style
n=""+p+"px"
o.top=n}},
O:function(){var t,s,r
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)t[r].O()},
a5:function(){var t,s,r
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)t[r].a5()
this.db.O()},
e4:function(){var t,s,r,q,p,o,n,m=this,l=m.fr,k=m.d.getBoundingClientRect()
for(t=m.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=t[r].b.getBoundingClientRect().bottom
p=k.top
if(typeof q!=="number")return q.E()
if(typeof p!=="number")return H.a0(p)
o=C.c.fz(q-p)
if(typeof l!=="number")return H.a0(l)
if(o>l)l=o}if(typeof l!=="number")return l.v()
t=l+1
m.fx=t
n=""+t+"px"
t=m.e.style
t.minHeight=n
t=m.db.d.style
t.maxHeight=n},
bq:function(){var t,s,r,q,p,o
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)for(q=t[r].a,p=q.length,o=0;o<q.length;q.length===p||(0,H.B)(q),++o)q[o].bq()},
sX:function(a){this.k3=u.i.a(a)}}
U.hH.prototype={
$1:function(a){return u.Y.a(a).a9(this.a)},
$S:58}
U.hI.prototype={
$2:function(a,b){H.q(a)
H.q(b)
if(typeof a!=="number")return a.v()
if(typeof b!=="number")return H.a0(b)
return a+b},
$S:17}
U.hA.prototype={
$1:function(a){var t,s
u.V.a(a)
t=this.a.r.classList
s=t.contains("show")
t.remove("show")
return s},
$S:10}
U.hB.prototype={
$1:function(a){return u.V.a(a).stopPropagation()},
$S:6}
U.hC.prototype={
$1:function(a){u.k.a(a)
$.ex=!0
this.a.db.O()},
$S:8}
U.hD.prototype={
$1:function(a){u.k.a(a)
return this.a.O()},
$S:4}
U.hE.prototype={
$1:function(a){var t
u.k.a(a)
$.ex=!1
t=this.a
t.O()
t.db.O()},
$S:8}
U.hF.prototype={
$1:function(a){u.k.a(a)
$.ev=!0
this.a.db.O()},
$S:8}
U.hG.prototype={
$1:function(a){u.k.a(a)
$.ev=!1
this.a.db.O()},
$S:8}
U.hJ.prototype={
$2:function(a,b){var t=u.Y
t.a(a)
t.a(b)
return J.ld(a.e,b.e)},
$S:25}
U.kb.prototype={
$6:function(a,b,c,d,e,f){var t=this.a
if(t==null)return J.z(e)
else return H.r(t.dr([a,b,c,d,e,f]))},
$C:"$6",
$R:6}
U.iw.prototype={
$6:function(a,b,c,d,e,f){var t=H.r(this.a.dr([a,b,c,d,e,f]))
return t},
$C:"$6",
$R:6}
U.kr.prototype={
$1:function(a){return u.c.a(a).a.b},
$S:60}
U.j4.prototype={
$1:function(a){var t,s
if(!a.C("action"))return
t=this.b
s=t.a
a.j(0,"id",s)
t.j(0,H.r(a.h(0,"action")),s)
t=this.a
this.c.j(0,s,t.a)
t.a=U.m0(t.a,a)},
$S:13}
U.j5.prototype={
$1:function(a){U.oz(this.a,this.b,a)},
$S:13}
U.j3.prototype={
$1:function(a){var t=this.a
t.a=U.oA(t.a,a)},
$S:62}
U.j6.prototype={
$1:function(a){return P.aj(P.a5(["actual",a],u.N,u.z))},
$S:23}
U.j7.prototype={
$1:function(a){return a.C("type")&&J.bK(J.c8(a,"type"),"select")},
$S:20}
U.j9.prototype={
$1:function(a){},
$S:13}
U.j8.prototype={
$1:function(a){var t,s="required"
if(!(a instanceof P.v))return!1
if(a.gk(a)===0)return!1
if(a.gk(a)>1)return!0
t=u.b.a(a.h(0,0))
if(t.C(s)&&H.at(H.fX(t.h(0,s))))return!1
return!0},
$S:20};(function aliases(){var t=J.ai.prototype
t.eh=t.n
t.eg=t.bn
t=J.bu.prototype
t.ej=t.n
t=P.bz.prototype
t.el=t.b1
t=P.O.prototype
t.em=t.aL
t.en=t.b0
t=P.k.prototype
t.cE=t.V
t=P.d.prototype
t.ei=t.bv
t=P.E.prototype
t.ek=t.n
t=W.p.prototype
t.bD=t.W
t=W.dZ.prototype
t.eo=t.ae
t=P.P.prototype
t.cC=t.h
t.cD=t.j})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1i,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_0i,k=hunkHelpers._static_2
t(P,"pF","oN",14)
t(P,"pG","oO",14)
t(P,"pH","oP",14)
s(P,"mA","pA",0)
r(P,"pI",1,null,["$2","$1"],["mr",function(a){return P.mr(a,null)}],30,0)
s(P,"mz","pv",0)
var j
q(j=P.b9.prototype,"gb7","ac",0)
q(j,"gb8","ad",0)
p(P.bz.prototype,"gfp","l",33)
o(P.a3.prototype,"geE",0,1,function(){return[null]},["$2","$1"],["aO","eF"],30,0)
q(j=P.cG.prototype,"gb7","ac",0)
q(j,"gb8","ad",0)
q(j=P.O.prototype,"gb7","ac",0)
q(j,"gb8","ad",0)
q(P.cH.prototype,"gfh","ay",0)
q(j=P.cJ.prototype,"gb7","ac",0)
q(j,"gb8","ad",0)
n(j,"geO","eP",33)
m(j,"gf1","f2",73)
q(j,"geR","eS",0)
t(P,"pL","pi",5)
r(W,"pQ",4,null,["$4"],["oU"],27,0)
r(W,"pR",4,null,["$4"],["oV"],27,0)
l(W.e1.prototype,"gfE","c2",0)
t(P,"kp","e9",5)
t(P,"pZ","k8",66)
n(j=Z.eA.prototype,"gf3","f4",16)
n(j,"geU","eV",6)
n(j,"geY","eZ",6)
n(j,"geW","eX",6)
n(j,"gf_","f0",6)
k(U,"q9","pK",25)
r(U,"q6",4,null,["$4"],["o2"],67,0)
r(U,"q5",3,null,["$3"],["o1"],68,0)
k(U,"q3","o_",69)
r(U,"q4",3,null,["$3"],["o0"],70,0)
t(U,"q8","o4",21)
s(U,"q7","o3",71)
t(U,"mL","oE",9)
t(U,"q1","oD",48)
t(U,"q2","oG",9)
t(U,"mM","oJ",9)
t(U,"mN","oK",9)
t(U,"mO","oL",9)
n(j=U.ao.prototype,"gbB","bC",12)
n(j,"gc5","c6",12)
n(j,"ga0","a6",4)
n(U.aD.prototype,"ga0","a6",4)
n(U.aM.prototype,"ga0","a6",4)
n(U.eo.prototype,"ga0","a6",4)
n(j=U.aR.prototype,"gbB","bC",12)
n(j,"gc5","c6",12)
n(j,"gh7","h8",57)
n(j,"gh5","h6",10)
p(U.fc.prototype,"gfC","fD",6)
n(j=U.bP.prototype,"ga0","a6",4)
n(j,"gfF","fG",4)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.E,null)
r(P.E,[H.kF,J.ai,J.aC,P.d,H.N,P.R,H.db,H.Q,H.cA,P.co,H.d1,H.bO,H.eI,H.j0,P.K,H.e_,P.S,H.iB,H.dm,H.eJ,H.f7,H.jV,H.aQ,H.fv,P.jZ,P.U,P.O,P.bz,P.aE,P.fl,P.c5,P.a3,P.fi,P.a2,P.f6,P.bA,P.fp,P.dW,P.cH,P.cW,P.fS,P.dK,P.dX,P.fB,P.c7,P.dP,P.k,P.e7,P.b_,P.dY,P.ep,P.iu,P.jC,P.w,P.ch,P.Y,P.bS,P.f_,P.dy,P.fu,P.dd,P.b4,P.t,P.cn,P.u,P.dr,P.as,P.fJ,P.c,P.aS,P.b0,W.hM,W.i4,W.eB,W.e1,W.c6,W.V,W.du,W.dZ,W.fK,W.bW,W.fo,W.aq,W.fI,W.e8,P.P,P.J,P.fG,Z.hP,Z.bR,Z.ji,Z.em,Z.ba,Z.eA,Z.av,Z.ej,U.aL,U.bi,U.h9,U.cX,U.cY,U.ao,U.eE,U.hx,U.dc,U.ae,U.br,U.a4,U.eo,U.c1,U.aR,U.fc,U.bP])
r(J.ai,[J.eG,J.di,J.bu,J.G,J.bt,J.bg,H.bY,W.F,W.bM,W.I,W.fn,W.f8,W.hN,W.d5,W.hO,W.f,W.fx,W.df,W.eO,W.fD,W.aI,W.fM,W.fT,W.fV,P.dl])
r(J.bu,[J.f1,J.bx,J.b5])
s(J.ix,J.G)
r(J.bt,[J.dh,J.eH])
r(P.d,[H.n,H.aG,H.af,H.c3,H.c2,H.dD])
r(H.n,[H.aa,H.bT,H.ap,P.dJ,P.ar])
r(H.aa,[H.dz,H.T,P.fA])
s(H.aX,H.aG)
r(P.R,[H.a6,H.c4,H.dB,H.dx])
s(H.d9,H.c3)
s(H.d8,H.c2)
s(P.cM,P.co)
s(P.dC,P.cM)
s(H.d2,P.dC)
r(H.bO,[H.hK,H.iO,H.kt,H.fb,H.iy,H.kk,H.kl,H.km,P.jd,P.jc,P.je,P.jf,P.k_,P.jW,P.jX,P.it,P.jo,P.jv,P.jr,P.js,P.jt,P.jp,P.ju,P.jy,P.jz,P.jx,P.jw,P.iV,P.iW,P.jh,P.jg,P.jJ,P.kd,P.jQ,P.jP,P.jR,P.iD,P.jD,P.iE,P.i_,P.i0,W.i2,W.jb,W.jn,W.jU,W.iG,W.iF,W.jS,W.jT,W.jY,W.k5,P.hL,P.iq,P.ir,P.is,P.iz,P.k9,P.ka,P.ke,P.kf,P.kg,Z.hU,Z.hT,Z.hR,Z.hS,Z.hQ,Z.h8,Z.h3,Z.jj,Z.jk,Z.jl,Z.jm,Z.k4,Z.k3,Z.k2,Z.k1,Z.k0,Z.jI,Z.jH,Z.jG,Z.jF,Z.jO,Z.jN,Z.jM,Z.jL,Z.jK,Z.hW,Z.hY,Z.hX,Z.hZ,Z.hV,U.h7,U.h6,U.ia,U.i9,U.ib,U.ic,U.i8,U.id,U.i7,U.ie,U.iK,U.iL,U.iM,U.iN,U.iQ,U.iR,U.iT,U.iS,U.iU,U.iX,U.iY,U.iZ,U.j_,U.hb,U.hc,U.hh,U.hk,U.hl,U.hi,U.hj,U.hm,U.hn,U.hp,U.hq,U.hr,U.ht,U.hu,U.hv,U.hw,U.hy,U.hz,U.i6,U.ii,U.ij,U.ik,U.ih,U.il,U.ip,U.im,U.io,U.ig,U.hf,U.hd,U.he,U.iI,U.iJ,U.iH,U.hH,U.hI,U.hA,U.hB,U.hC,U.hD,U.hE,U.hF,U.hG,U.hJ,U.kb,U.iw,U.kr,U.j4,U.j5,U.j3,U.j6,U.j7,U.j9,U.j8])
s(H.d3,H.d1)
r(P.K,[H.eY,H.eK,H.ff,H.f2,P.cV,H.ft,P.dk,P.eZ,P.aK,P.eX,P.fg,P.fe,P.b6,P.eq,P.es])
r(H.fb,[H.f4,H.cd])
s(H.fh,P.cV)
s(P.dq,P.S)
r(P.dq,[H.a9,P.dI,P.fz,W.fj])
s(H.aw,H.bY)
r(H.aw,[H.dS,H.dU])
s(H.dT,H.dS)
s(H.bv,H.dT)
s(H.dV,H.dU)
s(H.aH,H.dV)
r(H.aH,[H.eR,H.eS,H.eT,H.eU,H.eV,H.dt,H.eW])
s(H.e4,H.ft)
r(P.U,[P.cL,P.dH,W.bm,W.aT])
s(P.cF,P.cL)
s(P.ag,P.cF)
r(P.O,[P.cG,P.cJ])
s(P.b9,P.cG)
s(P.e2,P.bz)
s(P.e3,P.fl)
r(P.bA,[P.dE,P.fq])
s(P.e0,P.dW)
s(P.dQ,P.dH)
s(P.fH,P.fS)
s(P.dL,P.dI)
s(P.dO,P.dX)
s(P.dp,P.dP)
s(P.dw,P.dY)
s(P.cf,P.f6)
r(P.cf,[P.cj,P.eN,P.eM])
s(P.eL,P.dk)
s(P.iA,P.ep)
s(P.jB,P.jC)
r(P.Y,[P.ah,P.e])
r(P.aK,[P.dv,P.eF])
r(W.F,[W.m,W.by,W.b8])
r(W.m,[W.p,W.b3,W.cE])
r(W.p,[W.j,P.l])
r(W.j,[W.ca,W.ek,W.cb,W.bN,W.ce,W.bQ,W.eD,W.ck,W.cq,W.cx,W.cz,W.dA,W.f9,W.fa,W.cB,W.cC])
s(W.cg,W.fn)
s(W.d4,W.f8)
r(P.dp,[W.fk,W.an,W.am,P.eC])
s(W.i1,W.i4)
s(W.fy,W.fx)
s(W.bs,W.fy)
s(W.ay,W.f)
r(W.ay,[W.bh,W.a1,W.b7])
s(W.fE,W.fD)
s(W.cp,W.fE)
s(W.cr,W.a1)
s(W.fN,W.fM)
s(W.fd,W.fN)
s(W.fU,W.fT)
s(W.fm,W.fU)
s(W.dF,W.d5)
s(W.fW,W.fV)
s(W.dR,W.fW)
s(W.fr,W.fj)
s(P.er,P.dw)
r(P.er,[W.fs,P.el])
s(W.az,W.bm)
s(W.dG,P.a2)
s(W.fL,W.dZ)
r(P.P,[P.aF,P.dN])
s(P.v,P.dN)
s(P.bw,P.fG)
s(P.cv,P.l)
r(Z.ba,[Z.fO,Z.fC,Z.fF])
r(U.aL,[U.bV,U.bZ,U.cw,U.cD])
r(U.bZ,[U.dg,U.ct])
r(U.h9,[U.aD,U.aM])
s(U.d6,Z.ej)
s(U.ez,Z.em)
r(U.c1,[U.en,U.bo,U.eP,U.eQ])
t(H.dS,P.k)
t(H.dT,H.Q)
t(H.dU,P.k)
t(H.dV,H.Q)
t(P.dP,P.k)
t(P.dY,P.b_)
t(P.cM,P.e7)
t(W.fn,W.hM)
t(W.fx,P.k)
t(W.fy,W.V)
t(W.fD,P.k)
t(W.fE,W.V)
t(W.fM,P.k)
t(W.fN,W.V)
t(W.fT,P.k)
t(W.fU,W.V)
t(W.fV,P.k)
t(W.fW,W.V)
t(P.dN,P.k)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",ah:"double",Y:"num",c:"String",w:"bool",u:"Null",t:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","u()","u(a1)","u(f)","~(av)","@(@)","~(a1)","w(av)","u(av)","~(P)","w(a1)","u(b7)","~(bR)","u(P)","~(~())","u(p)","~(p)","e(e,e)","w(w)","u(c)","w(@)","c(c)","aE<~>(a2<@>)","P(@)","c(e)","e(aD,aD)","u(@)","w(p,c,c,c6)","w(aq)","u(@,@)","~(E[as])","w(aR)","w(p)","~(E)","w(m)","w(c)","p(m)","u(b0,@)","@(c)","@(@,c)","u(bh)","w(bi)","~(bi)","c(p)","u(Y)","~(Y)","u(@[as])","~(aM)","~(v<@>)","u(w)","@(f)","a3<@>(@)","~(ba)","t<ao>(aR)","~(ae)","u(~())","v<@>(@)","~(f)","e(aD)","aF(@)","e(aR)","e(aM)","u(v<@>)","w(ar<c>)","u(c,@)","~(m,m)","E(@)","~(c,c,c,aF)","~(c,c,aF)","c(c,aF)","c(c,e,e)","c()","e(ao)","~(@,as)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pa(v.typeUniverse,JSON.parse('{"b5":"bu","f1":"bu","bx":"bu","qn":"f","qA":"f","qm":"l","qD":"l","qo":"j","qH":"j","qE":"m","qz":"m","qV":"a1","qt":"ay","qy":"b8","qs":"b3","qK":"b3","qF":"bs","qB":"bM","qu":"I","qJ":"bv","qI":"bY","eG":{"w":[]},"di":{"u":[]},"bu":{"b4":[]},"G":{"t":["1"],"n":["1"],"d":["1"]},"ix":{"G":["1"],"t":["1"],"n":["1"],"d":["1"]},"aC":{"R":["1"]},"bt":{"ah":[],"Y":[]},"dh":{"e":[],"ah":[],"Y":[]},"eH":{"ah":[],"Y":[]},"bg":{"c":[],"f0":[]},"n":{"d":["1"]},"aa":{"n":["1"],"d":["1"]},"dz":{"aa":["1"],"n":["1"],"d":["1"],"aa.E":"1","d.E":"1"},"N":{"R":["1"]},"aG":{"d":["2"],"d.E":"2"},"aX":{"aG":["1","2"],"n":["2"],"d":["2"],"d.E":"2"},"a6":{"R":["2"]},"T":{"aa":["2"],"n":["2"],"d":["2"],"aa.E":"2","d.E":"2"},"af":{"d":["1"],"d.E":"1"},"c4":{"R":["1"]},"c3":{"d":["1"],"d.E":"1"},"d9":{"c3":["1"],"n":["1"],"d":["1"],"d.E":"1"},"dB":{"R":["1"]},"c2":{"d":["1"],"d.E":"1"},"d8":{"c2":["1"],"n":["1"],"d":["1"],"d.E":"1"},"dx":{"R":["1"]},"bT":{"n":["1"],"d":["1"],"d.E":"1"},"db":{"R":["1"]},"cA":{"b0":[]},"d2":{"dC":["1","2"],"cM":["1","2"],"co":["1","2"],"e7":["1","2"],"ak":["1","2"]},"d1":{"ak":["1","2"]},"d3":{"d1":["1","2"],"ak":["1","2"]},"dD":{"d":["1"],"d.E":"1"},"eI":{"lI":[]},"eY":{"K":[]},"eK":{"K":[]},"ff":{"K":[]},"e_":{"as":[]},"bO":{"b4":[]},"fb":{"b4":[]},"f4":{"b4":[]},"cd":{"b4":[]},"f2":{"K":[]},"fh":{"K":[]},"a9":{"lN":["1","2"],"S":["1","2"],"ak":["1","2"],"S.K":"1","S.V":"2"},"ap":{"n":["1"],"d":["1"],"d.E":"1"},"dm":{"R":["1"]},"eJ":{"f0":[]},"f7":{"dr":[]},"jV":{"R":["dr"]},"bY":{"b1":[]},"aw":{"Z":["@"],"b1":[]},"bv":{"aw":[],"k":["ah"],"Z":["@"],"t":["ah"],"n":["ah"],"Q":["ah"],"b1":[],"d":["ah"],"k.E":"ah","Q.E":"ah"},"aH":{"aw":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b1":[],"d":["e"]},"eR":{"aH":[],"aw":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b1":[],"d":["e"],"k.E":"e","Q.E":"e"},"eS":{"aH":[],"aw":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b1":[],"d":["e"],"k.E":"e","Q.E":"e"},"eT":{"aH":[],"aw":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b1":[],"d":["e"],"k.E":"e","Q.E":"e"},"eU":{"aH":[],"aw":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b1":[],"d":["e"],"k.E":"e","Q.E":"e"},"eV":{"aH":[],"aw":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b1":[],"d":["e"],"k.E":"e","Q.E":"e"},"dt":{"aH":[],"aw":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b1":[],"d":["e"],"k.E":"e","Q.E":"e"},"eW":{"aH":[],"aw":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b1":[],"d":["e"],"k.E":"e","Q.E":"e"},"ft":{"K":[]},"e4":{"K":[]},"ag":{"cF":["1"],"cL":["1"],"U":["1"],"U.T":"1"},"b9":{"cG":["1"],"O":["1"],"bk":["1"],"bl":["1"],"a2":["1"],"O.T":"1"},"bz":{"f5":["1"],"bk":["1"],"bl":["1"],"mc":["1"]},"e2":{"bz":["1"],"f5":["1"],"bk":["1"],"bl":["1"],"mc":["1"]},"e3":{"fl":["1"]},"a3":{"aE":["1"]},"cF":{"cL":["1"],"U":["1"]},"cG":{"O":["1"],"bk":["1"],"bl":["1"],"a2":["1"]},"O":{"bk":["1"],"bl":["1"],"a2":["1"],"O.T":"1"},"cL":{"U":["1"]},"dE":{"bA":["1"]},"fq":{"bA":["@"]},"fp":{"bA":["@"]},"e0":{"dW":["1"]},"cH":{"a2":["1"]},"dH":{"U":["2"]},"cJ":{"O":["2"],"bk":["2"],"bl":["2"],"a2":["2"],"O.T":"2"},"dQ":{"dH":["1","2"],"U":["2"],"U.T":"2"},"cW":{"K":[]},"fS":{"m2":[]},"fH":{"m2":[]},"dI":{"S":["1","2"],"ak":["1","2"]},"dL":{"dI":["1","2"],"S":["1","2"],"ak":["1","2"],"S.K":"1","S.V":"2"},"dJ":{"n":["1"],"d":["1"],"d.E":"1"},"dK":{"R":["1"]},"dO":{"dX":["1"],"ar":["1"],"n":["1"],"d":["1"]},"c7":{"R":["1"]},"dp":{"k":["1"],"t":["1"],"n":["1"],"d":["1"]},"dq":{"S":["1","2"],"ak":["1","2"]},"S":{"ak":["1","2"]},"co":{"ak":["1","2"]},"dC":{"cM":["1","2"],"co":["1","2"],"e7":["1","2"],"ak":["1","2"]},"dw":{"b_":["1"],"ar":["1"],"n":["1"],"d":["1"]},"dX":{"ar":["1"],"n":["1"],"d":["1"]},"fz":{"S":["c","@"],"ak":["c","@"],"S.K":"c","S.V":"@"},"fA":{"aa":["c"],"n":["c"],"d":["c"],"aa.E":"c","d.E":"c"},"cj":{"cf":["c","c"]},"dk":{"K":[]},"eL":{"K":[]},"eN":{"cf":["E","c"]},"eM":{"cf":["c","E"]},"ah":{"Y":[]},"cV":{"K":[]},"eZ":{"K":[]},"aK":{"K":[]},"dv":{"K":[]},"eF":{"K":[]},"eX":{"K":[]},"fg":{"K":[]},"fe":{"K":[]},"b6":{"K":[]},"eq":{"K":[]},"f_":{"K":[]},"dy":{"K":[]},"es":{"K":[]},"fu":{"i5":[]},"dd":{"i5":[]},"e":{"Y":[]},"t":{"n":["1"],"d":["1"]},"ar":{"n":["1"],"d":["1"]},"fJ":{"as":[]},"c":{"f0":[]},"aS":{"ot":[]},"j":{"p":[],"m":[],"F":[]},"ca":{"j":[],"p":[],"m":[],"F":[]},"ek":{"j":[],"p":[],"m":[],"F":[]},"cb":{"j":[],"p":[],"m":[],"F":[]},"bN":{"j":[],"p":[],"m":[],"F":[]},"ce":{"j":[],"p":[],"m":[],"F":[]},"b3":{"m":[],"F":[]},"bQ":{"j":[],"p":[],"m":[],"F":[]},"d5":{"bw":["Y"]},"fk":{"k":["p"],"t":["p"],"n":["p"],"d":["p"],"k.E":"p"},"an":{"lD":["1"],"k":["1"],"t":["1"],"n":["1"],"d":["1"],"k.E":"1"},"p":{"m":[],"F":[]},"eD":{"j":[],"p":[],"m":[],"F":[]},"bs":{"V":["m"],"k":["m"],"t":["m"],"Z":["m"],"n":["m"],"d":["m"],"V.E":"m","k.E":"m"},"ck":{"j":[],"p":[],"m":[],"F":[]},"bh":{"ay":[],"f":[]},"a1":{"ay":[],"f":[]},"am":{"k":["m"],"t":["m"],"n":["m"],"d":["m"],"k.E":"m"},"m":{"F":[]},"cp":{"V":["m"],"k":["m"],"t":["m"],"Z":["m"],"n":["m"],"d":["m"],"V.E":"m","k.E":"m"},"cq":{"j":[],"p":[],"m":[],"F":[]},"cr":{"a1":[],"ay":[],"f":[]},"cx":{"j":[],"p":[],"m":[],"F":[]},"cz":{"j":[],"p":[],"m":[],"F":[]},"dA":{"j":[],"p":[],"m":[],"F":[]},"f9":{"j":[],"p":[],"m":[],"F":[]},"fa":{"j":[],"p":[],"m":[],"F":[]},"cB":{"j":[],"p":[],"m":[],"F":[]},"cC":{"j":[],"p":[],"m":[],"F":[]},"b7":{"ay":[],"f":[]},"fd":{"V":["aI"],"k":["aI"],"t":["aI"],"Z":["aI"],"n":["aI"],"d":["aI"],"V.E":"aI","k.E":"aI"},"ay":{"f":[]},"by":{"ja":[],"F":[]},"b8":{"F":[]},"cE":{"m":[],"F":[]},"fm":{"V":["I"],"k":["I"],"t":["I"],"Z":["I"],"n":["I"],"d":["I"],"V.E":"I","k.E":"I"},"dF":{"bw":["Y"]},"dR":{"V":["m"],"k":["m"],"t":["m"],"Z":["m"],"n":["m"],"d":["m"],"V.E":"m","k.E":"m"},"fj":{"S":["c","c"],"ak":["c","c"]},"fr":{"S":["c","c"],"ak":["c","c"],"S.K":"c","S.V":"c"},"fs":{"b_":["c"],"ar":["c"],"n":["c"],"d":["c"],"b_.E":"c"},"bm":{"U":["1"],"U.T":"1"},"az":{"bm":["1"],"U":["1"],"U.T":"1"},"aT":{"U":["1"],"U.T":"1"},"dG":{"a2":["1"]},"c6":{"aq":[]},"du":{"aq":[]},"dZ":{"aq":[]},"fL":{"aq":[]},"fK":{"aq":[]},"bW":{"R":["1"]},"fo":{"ja":[],"F":[]},"fI":{"oy":[]},"e8":{"o7":[]},"er":{"b_":["c"],"ar":["c"],"n":["c"],"d":["c"]},"eC":{"k":["p"],"t":["p"],"n":["p"],"d":["p"],"k.E":"p"},"aF":{"P":[]},"v":{"k":["1"],"t":["1"],"n":["1"],"P":[],"d":["1"],"k.E":"1"},"bw":{"fG":["1"]},"cv":{"l":[],"p":[],"m":[],"F":[]},"el":{"b_":["c"],"ar":["c"],"n":["c"],"d":["c"],"b_.E":"c"},"l":{"p":[],"m":[],"F":[]},"fO":{"ba":[]},"fC":{"ba":[]},"fF":{"ba":[]},"bV":{"aL":[]},"dg":{"bZ":[],"aL":[]},"bZ":{"aL":[]},"ct":{"bZ":[],"aL":[]},"cw":{"aL":[]},"cD":{"aL":[]},"d6":{"ej":[]},"ez":{"em":[]},"en":{"c1":[]},"bo":{"c1":[]},"eP":{"c1":[]},"eQ":{"c1":[]}}'))
H.p9(v.typeUniverse,JSON.parse('{"n":1,"f6":2,"dp":1,"dq":2,"dw":1,"dP":1,"dY":1,"ep":2,"cn":2,"dN":1}'))
var u=(function rtii(){var t=H.ed
return{gu:t("@<@>"),n:t("cW"),a3:t("aL"),cR:t("cb"),fK:t("bM"),bz:t("ao"),a4:t("bN"),hb:t("ce"),Y:t("aD"),ds:t("aM"),gF:t("d2<b0,@>"),g5:t("I"),af:t("d4"),d:t("bQ"),D:t("bR"),k:t("av"),fu:t("bS"),X:t("n<@>"),h:t("p"),r:t("lD<p>"),bU:t("K"),B:t("f"),aS:t("F"),g8:t("i5"),gI:t("ae"),gs:t("bV"),Z:t("b4"),aQ:t("aE<u>"),b9:t("aE<@>"),a:t("j"),gb:t("df"),p:t("ck"),m:t("lI"),i:t("d<ao>"),bq:t("d<p>"),eh:t("d<m>"),fP:t("d<E>"),t:t("d<c>"),bM:t("d<ah>"),R:t("d<@>"),gS:t("d<e>"),u:t("G<ao>"),cM:t("G<aD>"),cA:t("G<aM>"),ge:t("G<p>"),U:t("G<ae>"),ga:t("G<dc>"),v:t("G<P>"),eO:t("G<aq>"),eD:t("G<bi>"),dk:t("G<aR>"),w:t("G<a2<@>>"),s:t("G<c>"),f7:t("G<ba>"),cO:t("G<@>"),cj:t("b5"),aU:t("Z<@>"),gB:t("v<c>"),F:t("v<@>"),L:t("aF"),bT:t("a9<c,e>"),eo:t("a9<b0,@>"),by:t("a9<e,aL>"),aI:t("a9<e,e>"),b:t("P"),dz:t("dl"),cf:t("bh"),cG:t("t<ao>"),al:t("t<aM>"),O:t("t<p>"),gp:t("t<dc>"),eB:t("t<t<ao>>"),dy:t("t<c>"),j:t("t<@>"),f:t("ak<@,@>"),dm:t("ak<e,aL>"),dv:t("T<c,c>"),V:t("a1"),d4:t("bv"),bd:t("aH"),A:t("m"),e:t("aq"),P:t("u"),cU:t("bZ"),K:t("E"),fn:t("bi"),fW:t("cq"),H:t("J<Y>"),et:t("cr"),q:t("bw<Y>"),av:t("aQ"),ew:t("cv"),fs:t("cw"),d2:t("cx"),cq:t("ar<c>"),c:t("aR"),l:t("as"),c6:t("f5<bR>"),g:t("f5<av>"),b_:t("a2<@>"),N:t("c"),dG:t("c(c)"),bg:t("cz"),g7:t("l"),fo:t("b0"),aW:t("cB"),cJ:t("cC"),fY:t("aI"),T:t("b7"),ak:t("b1"),bJ:t("bx"),g4:t("by"),ci:t("ja"),g2:t("b8"),h9:t("cE"),ac:t("am"),gt:t("bA<@>"),E:t("az<f>"),C:t("az<a1>"),du:t("az<b7>"),I:t("aT<a1>"),a1:t("ba"),cw:t("bm<f>"),W:t("an<p>"),x:t("c5<@,@>"),_:t("a3<@>"),fJ:t("a3<e>"),dL:t("a3<Y>"),cr:t("c6"),aH:t("dL<@,@>"),J:t("fB"),bi:t("e3<Y>"),y:t("w"),bN:t("w(E)"),gR:t("ah"),z:t("@"),fO:t("@()"),G:t("@(f)"),bI:t("@(E)"),ep:t("@(E,E)"),ag:t("@(E,as)"),ch:t("@(ar<c>)"),bc:t("@(@)"),S:t("e"),di:t("Y"),o:t("~"),M:t("~()"),Q:t("~(f)"),dj:t("~(bh)"),a6:t("~(a1)"),d5:t("~(E)"),da:t("~(E,as)"),eA:t("~(c,c)"),fH:t("~(c,@)"),gn:t("~(b7)"),c4:t("~(Y)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.l=W.ca.prototype
C.m=W.bN.prototype
C.h=W.cg.prototype
C.b=W.bQ.prototype
C.H=J.ai.prototype
C.a=J.G.prototype
C.e=J.dh.prototype
C.q=J.di.prototype
C.c=J.bt.prototype
C.d=J.bg.prototype
C.I=J.b5.prototype
C.P=W.cp.prototype
C.v=J.f1.prototype
C.w=W.dA.prototype
C.k=J.bx.prototype
C.R=W.by.prototype
C.x=new H.db(H.ed("db<u>"))
C.S=new P.iu()
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

C.i=new P.iA()
C.E=new P.f_()
C.F=new P.fp()
C.f=new P.fH()
C.G=new P.fJ()
C.p=new P.bS(0)
C.J=new P.eM(null)
C.K=new P.eN(null)
C.L=H.h(t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),u.s)
C.M=H.h(t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),u.s)
C.N=H.h(t([]),u.s)
C.r=H.h(t([]),u.cO)
C.t=H.h(t(["bind","if","ref","repeat","syntax"]),u.s)
C.j=H.h(t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),u.s)
C.O=H.h(t([]),H.ed("G<b0>"))
C.u=new H.d3(0,{},C.O,H.ed("d3<b0,@>"))
C.Q=new H.cA("call")})();(function staticFields(){$.be=0
$.cZ=null
$.lm=null
$.mG=null
$.my=null
$.mS=null
$.kh=null
$.kn=null
$.l1=null
$.cO=null
$.ea=null
$.eb=null
$.kW=!1
$.H=C.f
$.aJ=[]
$.bp=null
$.kD=null
$.lF=null
$.lE=null
$.lC=function(){var t=u.N
return P.a5(["animationend","webkitAnimationEnd","animationiteration","webkitAnimationIteration","animationstart","webkitAnimationStart","fullscreenchange","webkitfullscreenchange","fullscreenerror","webkitfullscreenerror","keyadded","webkitkeyadded","keyerror","webkitkeyerror","keymessage","webkitkeymessage","needkey","webkitneedkey","pointerlockchange","webkitpointerlockchange","pointerlockerror","webkitpointerlockerror","resourcetimingbufferfull","webkitresourcetimingbufferfull","transitionend","webkitTransitionEnd","speechchange","webkitSpeechChange"],t,t)}()
$.fw=P.bX(u.N,u.Z)
$.lt=null
$.ls=null
$.lr=null
$.lu=null
$.lq=null
$.a_=null
$.lB=0
$.lj=null
$.h2=!1
$.cI=null
$.ey=null
$.lv=null
$.eu=!1
$.aO=!1
$.ew=!1
$.ex=!1
$.ev=!1
$.lw=null
$.lx=null
$.aB=P.bX(u.N,H.ed("bP"))})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"qx","ku",function(){return H.l0("_$dart_dartClosure")})
t($,"qG","l8",function(){return H.l0("_$dart_js")})
t($,"qL","n5",function(){return H.bj(H.j1({
toString:function(){return"$receiver$"}}))})
t($,"qM","n6",function(){return H.bj(H.j1({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"qN","n7",function(){return H.bj(H.j1(null))})
t($,"qO","n8",function(){return H.bj(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"qR","nb",function(){return H.bj(H.j1(void 0))})
t($,"qS","nc",function(){return H.bj(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"qQ","na",function(){return H.bj(H.m_(null))})
t($,"qP","n9",function(){return H.bj(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"qU","ne",function(){return H.bj(H.m_(void 0))})
t($,"qT","nd",function(){return H.bj(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"qW","l9",function(){return P.oM()})
t($,"qC","h_",function(){var s=new P.a3(C.f,H.ed("a3<u>"))
s.fi(null)
return s})
t($,"r4","nk",function(){return new Error().stack!=void 0})
t($,"qw","n4",function(){return{}})
t($,"r1","nj",function(){return P.lO(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
t($,"qv","n3",function(){return P.oj("^\\S+$")})
t($,"r2","ef",function(){return u.b.a(P.bE(self))})
t($,"qX","la",function(){return H.l0("_$dart_dartObject")})
t($,"r3","lb",function(){return function DartObject(a){this.o=a}})
t($,"qZ","ng",function(){return W.i3("_customDragEnter",u.V)})
t($,"r0","ni",function(){return W.i3("_customDragOver",u.V)})
t($,"r_","nh",function(){return W.i3("_customDragLeave",u.V)})
t($,"qY","nf",function(){return W.i3("_customDrop",u.V)})
t($,"qr","l7",function(){var s=U.kA()
s.a="#bb5555"
return s})
t($,"qq","l6",function(){var s=U.kA()
s.a="#8899aa"
return s})
t($,"qp","l5",function(){var s=U.kA()
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ai,DOMImplementation:J.ai,MediaError:J.ai,Navigator:J.ai,NavigatorConcurrentHardware:J.ai,NavigatorUserMediaError:J.ai,OverconstrainedError:J.ai,PositionError:J.ai,Range:J.ai,Selection:J.ai,SQLError:J.ai,DataView:H.bY,ArrayBufferView:H.bY,Float32Array:H.bv,Float64Array:H.bv,Int16Array:H.eR,Int32Array:H.eS,Int8Array:H.eT,Uint16Array:H.eU,Uint32Array:H.eV,Uint8ClampedArray:H.dt,CanvasPixelArray:H.dt,Uint8Array:H.eW,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLCanvasElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.ca,HTMLAreaElement:W.ek,HTMLBaseElement:W.cb,Blob:W.bM,File:W.bM,HTMLBodyElement:W.bN,HTMLButtonElement:W.ce,CDATASection:W.b3,CharacterData:W.b3,Comment:W.b3,ProcessingInstruction:W.b3,Text:W.b3,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.cg,MSStyleCSSProperties:W.cg,CSS2Properties:W.cg,CSSStyleSheet:W.d4,HTMLDivElement:W.bQ,DOMException:W.hN,DOMRectReadOnly:W.d5,DOMTokenList:W.hO,Element:W.p,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,EventTarget:W.F,HTMLFormElement:W.eD,HTMLCollection:W.bs,HTMLFormControlsCollection:W.bs,HTMLOptionsCollection:W.bs,ImageData:W.df,HTMLInputElement:W.ck,KeyboardEvent:W.bh,Location:W.eO,WheelEvent:W.a1,MouseEvent:W.a1,DragEvent:W.a1,Document:W.m,DocumentFragment:W.m,HTMLDocument:W.m,ShadowRoot:W.m,XMLDocument:W.m,DocumentType:W.m,Node:W.m,NodeList:W.cp,RadioNodeList:W.cp,HTMLOptionElement:W.cq,PointerEvent:W.cr,HTMLSelectElement:W.cx,HTMLStyleElement:W.cz,StyleSheet:W.f8,HTMLTableElement:W.dA,HTMLTableRowElement:W.f9,HTMLTableSectionElement:W.fa,HTMLTemplateElement:W.cB,HTMLTextAreaElement:W.cC,Touch:W.aI,TouchEvent:W.b7,TouchList:W.fd,CompositionEvent:W.ay,FocusEvent:W.ay,TextEvent:W.ay,UIEvent:W.ay,Window:W.by,DOMWindow:W.by,DedicatedWorkerGlobalScope:W.b8,ServiceWorkerGlobalScope:W.b8,SharedWorkerGlobalScope:W.b8,WorkerGlobalScope:W.b8,Attr:W.cE,CSSRuleList:W.fm,ClientRect:W.dF,DOMRect:W.dF,NamedNodeMap:W.dR,MozNamedAttrMap:W.dR,IDBKeyRange:P.dl,SVGScriptElement:P.cv,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,Selection:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:true,File:true,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleSheet:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,WheelEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLOptionElement:true,PointerEvent:true,HTMLSelectElement:true,HTMLStyleElement:true,StyleSheet:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,IDBKeyRange:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})
H.aw.$nativeSuperclassTag="ArrayBufferView"
H.dS.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.dV.$nativeSuperclassTag="ArrayBufferView"
H.aH.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.mK,[])
else U.mK([])})})()
//# sourceMappingURL=ntango.dart.js.map
/*
 * NetTango
 * Copyright (c) 2020 Michael S. Horn, Uri Wilensky, and Corey Brady
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

  blockPlacementOptions: NetTango_blockPlacementOptions,
  selectQuoteOptions: NetTango_selectQuoteOptions,

  /// Call init to instantiate a workspace associated with an HTML canvas.
  /// TODO: Document JSON specification format--for now see README.md
  init: function(language, canvasId, json, formatAttributeJS) {
    NetTango_InitWorkspace(language, canvasId, JSON.stringify(json), formatAttributeJS);
  },

  /// Add a callback function to receive programChanged events from the
  /// workspace. Callback functions should take one parameter, which is
  /// the canvasId for the workspace (as a String).
  onProgramChanged: function(canvasId, callback) {
    NetTango._callbacks[canvasId] = callback;
  },

  /// Exports the code for a workspace in a given target language.
  /// The only language supported now is "NetLogo".
  exportCode: function(canvasId, formatAttributeJS) {
    return NetTango_ExportCode(canvasId, formatAttributeJS);
  },

  formatAttributeValue: function(canvasId, instanceId, attributeId) {
    return NetTango_FormatAttributeValue(canvasId, instanceId, attributeId);
  },

  /// Exports the current state of the workspace as a JSON object to be
  /// restored at a later point.
  save: function(canvasId) {
    return JSON.parse(NetTango_Save(canvasId));
  },

  /// Exports the state of all workspaces as a JSON object to be restored
  /// at a later point.
  saveAll: function() {
    return JSON.parse(NetTango_SaveAll());
  },

  /// Restores a workspace to a previously saved state (json object).
  /// Note, for now this is just an alias of the NetTango.init function.
  restore: function(language, canvasId, json, formatAttribute) {
    NetTango_InitWorkspace(language, canvasId, JSON.stringify(json), formatAttribute);
  },

  /// Restores all workspaces from a previously saved state.
  restoreAll: function(language, json, formatAttribute) {
    NetTango_InitAllWorkspaces(language, JSON.stringify(json), formatAttribute);
  },

  _relayCallback: function(canvasId, event) {
    if (canvasId in NetTango._callbacks) {
      NetTango._callbacks[canvasId](canvasId, event);
    }
  },

  _callbacks : { }
}

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
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kU"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.kU(this,a,b,c,true,false,e).prototype
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
if(w[t][a])return w[t][a]}}var C={},H={kC:function kC(){},
ae:function(a,b,c,d){P.aW(b,"start")
if(c!=null){P.aW(c,"end")
if(typeof b!=="number")return b.J()
if(b>c)H.D(P.a9(b,0,c,"start",null))}return new H.dz(a,b,c,d.i("dz<0>"))},
lN:function(a,b,c,d){if(u.X.b(a))return new H.aU(a,b,c.i("@<0>").q(d).i("aU<1,2>"))
return new H.aF(a,b,c.i("@<0>").q(d).i("aF<1,2>"))},
ou:function(a,b,c){var t="takeCount"
P.ba(b,t,u.S)
P.aW(b,t)
if(u.X.b(a))return new H.d8(a,b,c.i("d8<0>"))
return new H.c1(a,b,c.i("c1<0>"))},
oo:function(a,b,c){var t="count"
if(u.X.b(a)){P.ba(b,t,u.S)
P.aW(b,t)
return new H.d7(a,b,c.i("d7<0>"))}P.ba(b,t,u.S)
P.aW(b,t)
return new H.c_(a,b,c.i("c_<0>"))},
eE:function(){return new P.b3("No element")},
nZ:function(){return new P.b3("Too many elements")},
lH:function(){return new P.b3("Too few elements")},
or:function(a,b,c){H.f2(a,0,J.ab(a)-1,b,c)},
f2:function(a,b,c,d,e){if(c-b<=32)H.oq(a,b,c,d,e)
else H.op(a,b,c,d,e)},
oq:function(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.ay(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.J()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
op:function(a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i=C.e.aA(a6-a5+1,6),h=a5+i,g=a6-i,f=C.e.aA(a5+a6,2),e=f-i,d=f+i,c=J.ay(a4),b=c.h(a4,h),a=c.h(a4,e),a0=c.h(a4,f),a1=c.h(a4,d),a2=c.h(a4,g),a3=a7.$2(b,a)
if(typeof a3!=="number")return a3.J()
if(a3>0){t=a
a=b
b=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.J()
if(a3>0){t=a2
a2=a1
a1=t}a3=a7.$2(b,a0)
if(typeof a3!=="number")return a3.J()
if(a3>0){t=a0
a0=b
b=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.J()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(b,a1)
if(typeof a3!=="number")return a3.J()
if(a3>0){t=a1
a1=b
b=t}a3=a7.$2(a0,a1)
if(typeof a3!=="number")return a3.J()
if(a3>0){t=a1
a1=a0
a0=t}a3=a7.$2(a,a2)
if(typeof a3!=="number")return a3.J()
if(a3>0){t=a2
a2=a
a=t}a3=a7.$2(a,a0)
if(typeof a3!=="number")return a3.J()
if(a3>0){t=a0
a0=a
a=t}a3=a7.$2(a1,a2)
if(typeof a3!=="number")return a3.J()
if(a3>0){t=a2
a2=a1
a1=t}c.j(a4,h,b)
c.j(a4,f,a0)
c.j(a4,g,a2)
c.j(a4,e,c.h(a4,a5))
c.j(a4,d,c.h(a4,a6))
s=a5+1
r=a6-1
if(J.bI(a7.$2(a,a1),0)){for(q=s;q<=r;++q){p=c.h(a4,q)
o=a7.$2(p,a)
if(o===0)continue
if(typeof o!=="number")return o.ai()
if(o<0){if(q!==s){c.j(a4,q,c.h(a4,s))
c.j(a4,s,p)}++s}else for(;!0;){o=a7.$2(c.h(a4,r),a)
if(typeof o!=="number")return o.J()
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
if(typeof j!=="number")return j.J()
if(j>0)for(;!0;){o=a7.$2(c.h(a4,r),a1)
if(typeof o!=="number")return o.J()
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
H.f2(a4,a5,s-2,a7,a8)
H.f2(a4,r+2,a6,a7,a8)
if(l)return
if(s<h&&r>g){for(;J.bI(a7.$2(c.h(a4,s),a),0);)++s
for(;J.bI(a7.$2(c.h(a4,r),a1),0);)--r
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
break}}H.f2(a4,s,r,a7,a8)}else H.f2(a4,s,r,a7,a8)},
n:function n(){},
a8:function a8(){},
dz:function dz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
P:function P(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aF:function aF(a,b,c){this.a=a
this.b=b
this.$ti=c},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
a4:function a4(a,b,c){var _=this
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
c2:function c2(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.$ti=c},
dB:function dB(a,b,c){this.a=a
this.b=b
this.$ti=c},
c_:function c_(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
dx:function dx(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(a){this.$ti=a},
da:function da(a){this.$ti=a},
Q:function Q(){},
cz:function cz(a){this.a=a},
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
t=J.B(a)
if(typeof t!="string")throw H.b(H.b8(a))
return t},
bY:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
lT:function(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return H.o(s,3)
t=H.r(s[3])
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
oi:function(a){var t,s
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
t=parseFloat(a)
if(isNaN(t)){s=C.d.aF(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return null}return t},
iM:function(a){var t=H.o9(a)
return t},
o9:function(a){var t,s,r
if(a instanceof P.E)return H.aw(H.X(a),null)
if(J.bF(a)===C.K||u.bJ.b(a)){t=C.q(a)
if(H.lS(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.lS(r))return r}}return H.aw(H.X(a),null)},
lS:function(a){var t=a!=="Object"&&a!==""
return t},
aM:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.e.bV(t,10))>>>0,56320|t&1023)}throw H.b(P.a9(a,0,1114111,null,null))},
bX:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oh:function(a){var t=H.bX(a).getFullYear()+0
return t},
of:function(a){var t=H.bX(a).getMonth()+1
return t},
ob:function(a){var t=H.bX(a).getDate()+0
return t},
oc:function(a){var t=H.bX(a).getHours()+0
return t},
oe:function(a){var t=H.bX(a).getMinutes()+0
return t},
og:function(a){var t=H.bX(a).getSeconds()+0
return t},
od:function(a){var t=H.bX(a).getMilliseconds()+0
return t},
cr:function(a,b,c){var t,s,r={}
r.a=0
t=[]
s=[]
r.a=b.length
C.a.L(t,b)
r.b=""
if(c!=null&&c.a!==0)c.t(0,new H.iL(r,s,t))
""+r.a
return J.nA(a,new H.eH(C.T,0,t,s,0))},
oa:function(a,b,c){var t,s,r,q
if(b instanceof Array)t=c==null||c.a===0
else t=!1
if(t){s=b
r=s.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(s[0])}else if(r===2){if(!!a.$2)return a.$2(s[0],s[1])}else if(r===3){if(!!a.$3)return a.$3(s[0],s[1],s[2])}else if(r===4){if(!!a.$4)return a.$4(s[0],s[1],s[2],s[3])}else if(r===5)if(!!a.$5)return a.$5(s[0],s[1],s[2],s[3],s[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,s)}return H.o8(a,b,c)},
o8:function(a,b,c){var t,s,r,q,p,o,n,m,l,k=b instanceof Array?b:P.cm(b,!0,u.z),j=k.length,i=a.$R
if(j<i)return H.cr(a,k,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.bF(a)
p=q.$C
if(typeof p=="string")p=q[p]
if(s){if(c!=null&&c.a!==0)return H.cr(a,k,c)
if(j===i)return p.apply(a,k)
return H.cr(a,k,c)}if(r instanceof Array){if(c!=null&&c.a!==0)return H.cr(a,k,c)
if(j>i+r.length)return H.cr(a,k,null)
C.a.L(k,r.slice(j-i))
return p.apply(a,k)}else{if(j>i)return H.cr(a,k,c)
o=Object.keys(r)
if(c==null)for(s=o.length,n=0;n<o.length;o.length===s||(0,H.A)(o),++n)C.a.l(k,r[H.r(o[n])])
else{for(s=o.length,m=0,n=0;n<o.length;o.length===s||(0,H.A)(o),++n){l=H.r(o[n])
if(c.H(l)){++m
C.a.l(k,c.h(0,l))}else C.a.l(k,r[l])}if(m!==c.a)return H.cr(a,k,c)}return p.apply(a,k)}},
a0:function(a){throw H.b(H.b8(a))},
o:function(a,b){if(a==null)J.ab(a)
throw H.b(H.bE(a,b))},
bE:function(a,b){var t,s,r="index"
if(!H.cM(b))return new P.aJ(!0,b,r,null)
t=H.q(J.ab(a))
if(!(b<0)){if(typeof t!=="number")return H.a0(t)
s=b>=t}else s=!0
if(s)return P.bc(b,a,r,null,t)
return P.ct(b,r)},
b8:function(a){return new P.aJ(!0,a,null,null)},
b:function(a){var t
if(a==null)a=new P.eY()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.n0})
t.name=""}else t.toString=H.n0
return t},
n0:function(){return J.B(this.dartException)},
D:function(a){throw H.b(a)},
A:function(a){throw H.b(P.aK(a))},
bg:function(a){var t,s,r,q,p,o
a=H.mS(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.m([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.iY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
iZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
lY:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
lR:function(a,b){return new H.eX(a,b==null?null:b.method)},
kD:function(a,b){var t=b==null,s=t?null:b.method
return new H.eJ(a,s,t?null:b.receiver)},
L:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new H.kp(a)
if(a==null)return f
if(typeof a!=="object")return a
if("dartException" in a)return e.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.bV(s,16)&8191)===10)switch(r){case 438:return e.$1(H.kD(H.a(t)+" (Error "+r+")",f))
case 445:case 5007:return e.$1(H.lR(H.a(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.n5()
p=$.n6()
o=$.n7()
n=$.n8()
m=$.nb()
l=$.nc()
k=$.na()
$.n9()
j=$.ne()
i=$.nd()
h=q.Z(t)
if(h!=null)return e.$1(H.kD(H.r(t),h))
else{h=p.Z(t)
if(h!=null){h.method="call"
return e.$1(H.kD(H.r(t),h))}else{h=o.Z(t)
if(h==null){h=n.Z(t)
if(h==null){h=m.Z(t)
if(h==null){h=l.Z(t)
if(h==null){h=k.Z(t)
if(h==null){h=n.Z(t)
if(h==null){h=j.Z(t)
if(h==null){h=i.Z(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return e.$1(H.lR(H.r(t),h))}}return e.$1(new H.fe(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.dy()
t=function(b){try{return String(b)}catch(d){}return null}(a)
return e.$1(new P.aJ(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.dy()
return a},
aS:function(a){var t
if(a==null)return new H.e_(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.e_(a)},
mP:function(a){if(a==null||typeof a!='object')return J.aa(a)
else return H.bY(a)},
pO:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.j(0,a[t],a[s])}return b},
pW:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.cj("Unsupported number of arguments for wrapped closure"))},
cR:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pW)
a.$identity=t
return t},
nO:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.f3().constructor.prototype):Object.create(new H.cc(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.bb
if(typeof s!=="number")return s.v()
$.bb=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}i.constructor=t
t.prototype=i
if(!e){r=H.ln(a,k,f)
r.$reflectionInfo=d}else{i.$static_name=g
r=k}q=H.nK(d,e,f)
i.$S=q
i[j]=r
for(p=r,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ln(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return t},
nK:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mG,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
t=c?H.nI:H.nH
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.b("Error in functionType of tearoff")},
nL:function(a,b,c,d){var t=H.lm
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ln:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.nN(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.nL(s,!q,t,b)
if(s===0){q=$.bb
if(typeof q!=="number")return q.v()
$.bb=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.cZ
return new Function(q+H.a(p==null?$.cZ=H.hm("self"):p)+";return "+o+"."+H.a(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.bb
if(typeof q!=="number")return q.v()
$.bb=q+1
n+=q
q="return function("+n+"){return this."
p=$.cZ
return new Function(q+H.a(p==null?$.cZ=H.hm("self"):p)+"."+H.a(t)+"("+n+");}")()},
nM:function(a,b,c,d){var t=H.lm,s=H.nJ
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
if(m==null)m=$.cZ=H.hm("self")
t=$.ll
if(t==null)t=$.ll=H.hm("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nM(r,!p,s,b)
if(r===1){m="return function(){return this."+H.a(m)+"."+H.a(s)+"(this."+H.a(t)+");"
t=$.bb
if(typeof t!=="number")return t.v()
$.bb=t+1
return new Function(m+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
m="return function("+n+"){return this."+H.a(m)+"."+H.a(s)+"(this."+H.a(t)+", "+n+");"
t=$.bb
if(typeof t!=="number")return t.v()
$.bb=t+1
return new Function(m+t+"}")()},
kU:function(a,b,c,d,e,f,g){return H.nO(a,b,c,d,!!e,!!f,g)},
nH:function(a,b){return H.fQ(v.typeUniverse,H.X(a.a),b)},
nI:function(a,b){return H.fQ(v.typeUniverse,H.X(a.c),b)},
lm:function(a){return a.a},
nJ:function(a){return a.c},
hm:function(a){var t,s,r,q=new H.cc("self","target","receiver","name"),p=J.lI(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}},
ar:function(a){if(a==null)H.pE("boolean expression must not be null")
return a},
pE:function(a){throw H.b(new H.fg(a))},
qk:function(a){throw H.b(new P.eq(a))},
om:function(a){return new H.f1(a)},
kX:function(a){return v.getIsolateTag(a)},
m:function(a,b){a[v.arrayRti]=b
return a},
mE:function(a){if(a==null)return null
return a.$ti},
r6:function(a,b,c){return H.mZ(a["$a"+H.a(c)],H.mE(b))},
mZ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return null
if(Array.isArray(a))return a
if(typeof a=="function")return a.apply(null,b)
return b},
r4:function(a,b,c){return a.apply(b,H.mZ(J.bF(b)["$a"+H.a(c)],H.mE(b)))},
r5:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
q_:function(a){var t,s,r,q,p=H.r($.mF.$1(a)),o=$.ke[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.kk[p]
if(t!=null)return t
s=v.interceptorsByTag[p]
if(s==null){p=H.r($.mx.$2(a,p))
if(p!=null){o=$.ke[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.kk[p]
if(t!=null)return t
s=v.interceptorsByTag[p]}}if(s==null)return null
t=s.prototype
r=p[0]
if(r==="!"){o=H.kn(t)
$.ke[p]=o
Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(r==="~"){$.kk[p]=t
return t}if(r==="-"){q=H.kn(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}if(r==="+")return H.mQ(a,t)
if(r==="*")throw H.b(P.j_(p))
if(v.leafTags[p]===true){q=H.kn(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}else return H.mQ(a,t)},
mQ:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.kZ(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
kn:function(a){return J.kZ(a,!1,null,!!a.$iZ)},
q0:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.kn(t)
else return J.kZ(t,c,null,null)},
pT:function(){if(!0===$.kY)return
$.kY=!0
H.pU()},
pU:function(){var t,s,r,q,p,o,n,m
$.ke=Object.create(null)
$.kk=Object.create(null)
H.pS()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.mR.$1(p)
if(o!=null){n=H.q0(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
pS:function(){var t,s,r,q,p,o,n=C.B()
n=H.cQ(C.C,H.cQ(C.D,H.cQ(C.r,H.cQ(C.r,H.cQ(C.E,H.cQ(C.F,H.cQ(C.G(C.q),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.mF=new H.kh(q)
$.mx=new H.ki(p)
$.mR=new H.kj(o)},
cQ:function(a,b){return a(b)||b},
o6:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.b(P.dd("Illegal RegExp pattern ("+String(o)+")",a))},
qg:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
pN:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mS:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l0:function(a,b,c){var t=H.qh(a,b,c)
return t},
qh:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mS(b),'g'),H.pN(c))},
qi:function(a,b,c,d){var t=a.indexOf(b,d)
if(t<0)return a
return H.qj(a,t,t+b.length,c)},
qj:function(a,b,c,d){var t=a.substring(0,b),s=a.substring(c)
return t+d+s},
d1:function d1(a,b){this.a=a
this.$ti=b},
d0:function d0(){},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dD:function dD(a,b){this.a=a
this.$ti=b},
eH:function eH(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eX:function eX(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
fe:function fe(a){this.a=a},
kp:function kp(a){this.a=a},
e_:function e_(a){this.a=a
this.b=null},
bM:function bM(){},
fa:function fa(){},
f3:function f3(){},
cc:function cc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f1:function f1(a){this.a=a},
fg:function fg(a){this.a=a},
a6:function a6(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iv:function iv(a){this.a=a},
iy:function iy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ad:function ad(a,b){this.a=a
this.$ti=b},
dl:function dl(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
eI:function eI(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f6:function f6(a,b){this.a=a
this.c=b},
jS:function jS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bE(b,a))},
bV:function bV(){},
at:function at(){},
bu:function bu(){},
aG:function aG(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
ds:function ds(){},
eV:function eV(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
ol:function(a,b){var t=b.c
return t==null?b.c=H.kN(a,b.z,!0):t},
lV:function(a,b){var t=b.c
return t==null?b.c=H.e5(a,"aD",[b.z]):t},
lW:function(a){var t=a.y
if(t===6||t===7||t===8)return H.lW(a.z)
return t===11||t===12},
ok:function(a){return a.cy},
cS:function(a){return H.kO(v.typeUniverse,a,!1)},
bC:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.bC(a,t,c,a0)
if(s===t)return b
return H.mg(a,s,!0)
case 7:t=b.z
s=H.bC(a,t,c,a0)
if(s===t)return b
return H.kN(a,s,!0)
case 8:t=b.z
s=H.bC(a,t,c,a0)
if(s===t)return b
return H.mf(a,s,!0)
case 9:r=b.Q
q=H.ec(a,r,c,a0)
if(q===r)return b
return H.e5(a,b.z,q)
case 10:p=b.z
o=H.bC(a,p,c,a0)
n=b.Q
m=H.ec(a,n,c,a0)
if(o===p&&m===n)return b
return H.kL(a,o,m)
case 11:l=b.z
k=H.bC(a,l,c,a0)
j=b.Q
i=H.pB(a,j,c,a0)
if(k===l&&i===j)return b
return H.me(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.ec(a,h,c,a0)
p=b.z
o=H.bC(a,p,c,a0)
if(g===h&&o===p)return b
return H.kM(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.b(P.h3("Attempted to substitute unexpected RTI kind "+d))}},
ec:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.bC(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
pC:function(a,b,c,d){var t,s,r,q,p,o=b.length,n=[]
for(t=!1,s=0;s<o;s+=2){r=b[s]
q=b[s+1]
p=H.bC(a,q,c,d)
if(p!==q)t=!0
n.push(r)
n.push(p)}return t?n:b},
pB:function(a,b,c,d){var t,s=b.a,r=H.ec(a,s,c,d),q=b.b,p=H.ec(a,q,c,d),o=b.c,n=H.pC(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.fu()
t.a=r
t.b=p
t.c=n
return t},
pJ:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.mG(t)
return a.$S()}return null},
mH:function(a,b){var t
if(H.lW(b))if(a instanceof H.bM){t=H.pJ(a)
if(t!=null)return t}return H.X(a)},
X:function(a){var t
if(a instanceof P.E){t=a.$ti
return t!=null?t:H.kR(a)}if(Array.isArray(a))return H.C(a)
return H.kR(J.bF(a))},
C:function(a){var t=a[v.arrayRti],s=u.cO
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
h:function(a){var t=a.$ti
return t!=null?t:H.kR(a)},
kR:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.pn(a,t)},
pn:function(a,b){var t=a instanceof H.bM?a.__proto__.__proto__.constructor:b,s=H.pc(v.typeUniverse,t.name)
b.$ccache=s
return s},
mG:function(a){var t,s=a,r=v.types,q=r[s]
if(typeof q=="string"){t=H.kO(v.typeUniverse,q,!1)
r[s]=t
return t}return q},
pm:function(a){var t=this,s=H.pk,r=u.K
if(t===r){s=H.pp
t.a=H.pe}else if(H.bG(t)||t===r){s=H.ps
t.a=H.pf}else if(t===u.S)s=H.cM
else if(t===u.gR)s=H.mp
else if(t===u.di)s=H.mp
else if(t===u.N)s=H.pq
else if(t===u.y)s=H.k9
else if(t.y===9){r=t.z
if(t.Q.every(H.pY)){t.r="$i"+r
s=H.pr}}t.b=s
return t.b(a)},
pk:function(a){var t=this
return H.a5(v.typeUniverse,H.mH(a,t),null,t,null)},
pr:function(a){var t=this,s=t.r
if(a instanceof P.E)return!!a[s]
return!!J.bF(a)[s]},
pj:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
throw H.b(H.md(H.m3(a,H.mH(a,t),H.aw(t,null))))},
aR:function(a,b,c,d){var t=null
if(H.a5(v.typeUniverse,a,t,b,t))return a
throw H.b(H.md("The type argument '"+H.a(H.aw(a,t))+"' is not a subtype of the type variable bound '"+H.a(H.aw(b,t))+"' of type variable '"+c+"' in '"+H.a(d)+"'."))},
m3:function(a,b,c){var t=P.bp(a),s=H.aw(b==null?H.X(a):b,null)
return t+": type '"+H.a(s)+"' is not a subtype of type '"+H.a(c)+"'"},
md:function(a){return new H.e4("TypeError: "+a)},
fO:function(a,b){return new H.e4("TypeError: "+H.m3(a,null,b))},
pp:function(a){return!0},
pe:function(a){return a},
ps:function(a){return!0},
pf:function(a){return a},
k9:function(a){return!0===a||!1===a},
fW:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.b(H.fO(a,"bool"))},
pd:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.fO(a,"double"))},
cM:function(a){return typeof a=="number"&&Math.floor(a)===a},
q:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.fO(a,"int"))},
mp:function(a){return typeof a=="number"},
k3:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.fO(a,"num"))},
pq:function(a){return typeof a=="string"},
r:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.fO(a,"String"))},
py:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.d.v(s,H.aw(a[r],b))
return t},
mk:function(a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", "
if(a3!=null){t=a3.length
if(a2==null){a2=H.m([],u.s)
s=null}else s=a2.length
r=a2.length
for(q=t;q>0;--q)C.a.l(a2,"T"+(r+q))
for(p=u.K,o="<",n="",q=0;q<t;++q,n=a0){o+=n
m=a2.length
l=m-1-q
if(l<0)return H.o(a2,l)
o=C.d.v(o,a2[l])
k=a3[q]
if(!(H.bG(k)||k===p))m=!(k===p)
else m=!1
if(m)o+=C.d.v(" extends ",H.aw(k,a2))}o+=">"}else{o=""
s=null}p=a1.z
j=a1.Q
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=H.aw(p,a2)
for(b="",a="",q=0;q<h;++q,a=a0)b+=C.d.v(a,H.aw(i[q],a2))
if(f>0){b+=a+"["
for(a="",q=0;q<f;++q,a=a0)b+=C.d.v(a,H.aw(g[q],a2))
b+="]"}if(d>0){b+=a+"{"
for(a="",q=0;q<d;q+=2,a=a0)b+=C.d.v(a,H.aw(e[q+1],a2))+" "+e[q]
b+="}"}if(s!=null)a2.length=s
return o+"("+b+") => "+H.a(c)},
aw:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.aw(a.z,b)
return t}if(m===7){s=a.z
t=H.aw(s,b)
r=s.y
return J.nl(r===11||r===12?C.d.v("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.a(H.aw(a.z,b))+">"
if(m===9){q=H.pD(a.z)
p=a.Q
return p.length!==0?q+("<"+H.py(p,b)+">"):q}if(m===11)return H.mk(a,b,null)
if(m===12)return H.mk(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.o(b,o)
return b[o]}return"?"},
pD:function(a){var t,s=H.n1(a)
if(s!=null)return s
t="minified:"+a
return t},
mi:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
pc:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.kO(a,b,!1)
else if(typeof n=="number"){t=n
s=H.e6(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.e5(a,b,r)
o[b]=p
return p}else return n},
pa:function(a,b){return H.mj(a.tR,b)},
p9:function(a,b){return H.mj(a.eT,b)},
kO:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.mh(a,null,b,c)
s.set(b,t)
return t},
fQ:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.mh(a,b,c,!0)
r.set(c,s)
return s},
pb:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.kL(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
mh:function(a,b,c,d){var t=H.p0(H.oX(a,b,c,d))
if(t!=null)return t
throw H.b(P.j_('_Universe._parseRecipe("'+H.a(c)+'")'))},
bB:function(a,b){b.a=H.pj
b.b=H.pm
return b},
e6:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.aN(null,null)
t.y=b
t.cy=c
s=H.bB(a,t)
a.eC.set(c,s)
return s},
mg:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.p7(a,b,s,c)
a.eC.set(s,t)
return t},
p7:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.bG(b)||b===u.K||b===u.P||t===7||t===6)return b}s=new H.aN(null,null)
s.y=6
s.z=b
s.cy=c
return H.bB(a,s)},
kN:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.p6(a,b,s,c)
a.eC.set(s,t)
return t},
p6:function(a,b,c,d){var t,s,r,q,p
if(d){t=b.y
if(!H.bG(b))if(!(b===u.P))if(t!==7)s=t===8&&H.kl(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1)return u.P
else if(t===6){r=b.z
q=r.y
if(q===1)return u.P
else if(q===8&&H.kl(r.z))return r
else return H.ol(a,b)}}p=new H.aN(null,null)
p.y=7
p.z=b
p.cy=c
return H.bB(a,p)},
mf:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.p4(a,b,s,c)
a.eC.set(s,t)
return t},
p4:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.bG(b)||b===u.K||b===u.K)return b
else if(t===1)return H.e5(a,"aD",[b])
else if(b===u.P)return u.aQ}s=new H.aN(null,null)
s.y=8
s.z=b
s.cy=c
return H.bB(a,s)},
p8:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.aN(null,null)
t.y=13
t.z=b
t.cy=r
s=H.bB(a,t)
a.eC.set(r,s)
return s},
fP:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
p3:function(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=2,s=","){q=a[r]
p=a[r+1].cy
t+=s+q+":"+p}return t},
e5:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.fP(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.aN(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.bB(a,s)
a.eC.set(q,r)
return r},
kL:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+";"+("<"+H.fP(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.aN(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.bB(a,p)
a.eC.set(r,o)
return o},
me:function(a,b,c){var t,s,r,q,p=b.cy,o=c.a,n=o.length,m=c.b,l=m.length,k=c.c,j=k.length,i="("+H.fP(o)
if(l>0)i+=(n>0?",":"")+"["+H.fP(m)+"]"
if(j>0)i+=(n>0?",":"")+"{"+H.p3(k)+"}"
t=p+(i+")")
s=a.eC.get(t)
if(s!=null)return s
r=new H.aN(null,null)
r.y=11
r.z=b
r.Q=c
r.cy=t
q=H.bB(a,r)
a.eC.set(t,q)
return q},
kM:function(a,b,c,d){var t,s=b.cy+"<"+H.fP(c)+">",r=a.eC.get(s)
if(r!=null)return r
t=H.p5(a,b,c,s,d)
a.eC.set(s,t)
return t},
p5:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.bC(a,b,s,0)
n=H.ec(a,c,s,0)
return H.kM(a,o,n,c!==n)}}m=new H.aN(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.bB(a,m)},
oX:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
p0:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.oY(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.ma(a,s,h,g,!1)
else if(r===46)s=H.ma(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:break
case 59:g.push(H.bA(a.u,a.e,g.pop()))
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
H.kK(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.e5(q,o,p))
else{n=H.bA(q,a.e,o)
switch(n.y){case 11:g.push(H.kM(q,n,p,a.n))
break
default:g.push(H.kL(q,n,p))
break}}break
case 38:H.oZ(a,g)
break
case 42:m=a.u
g.push(H.mg(m,H.bA(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.kN(m,H.bA(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.mf(m,H.bA(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.fu()
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
H.kK(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.me(q,H.bA(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.kK(a.u,a.e,p)
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
return H.bA(a.u,a.e,i)},
oY:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
ma:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.mi(t,p.z)[q]
if(o==null)H.D('No "'+q+'" in "'+H.ok(p)+'"')
d.push(H.fQ(t,p,o))}else d.push(q)
return n},
oZ:function(a,b){var t=b.pop()
if(0===t){b.push(H.e6(a.u,1,"0&"))
return}if(1===t){b.push(H.e6(a.u,4,"1&"))
return}throw H.b(P.h3("Unexpected extended operation "+H.a(t)))},
bA:function(a,b,c){if(typeof c=="string")return H.e5(a,c,a.sEA)
else if(typeof c=="number")return H.p_(a,b,c)
else return c},
kK:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.bA(a,b,c[t])},
p1:function(a,b,c){var t,s=c.length
for(t=1;t<s;t+=2)c[t]=H.bA(a,b,c[t])},
p_:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.b(P.h3("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.b(P.h3("Bad index "+c+" for "+b.n(0)))},
a5:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(H.bG(d)||d===u.K)return!0
t=b.y
if(t===4)return!0
if(H.bG(b))return!1
if(b===u.P)return!0
s=t===13
if(s)if(H.a5(a,c[b.z],c,d,e))return!0
r=d.y
if(t===6)return H.a5(a,b.z,c,d,e)
if(r===6){q=d.z
return H.a5(a,b,c,q,e)}if(t===8){if(!H.a5(a,b.z,c,d,e))return!1
return H.a5(a,H.lV(a,b),c,d,e)}if(t===7){q=H.a5(a,b.z,c,d,e)
return q}if(r===8){if(H.a5(a,b,c,d.z,e))return!0
return H.a5(a,b,c,H.lV(a,d),e)}if(r===7){q=H.a5(a,b,c,d.z,e)
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
if(!H.a5(a,l,c,k,e)||!H.a5(a,k,e,l,c))return!1}return H.mo(a,b.z,c,d.z,e)}if(r===11){if(b===u.cj)return!0
if(q)return!1
return H.mo(a,b,c,d,e)}if(t===9){if(r!==9)return!1
return H.po(a,b,c,d,e)}return!1},
mo:function(a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
po:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.a5(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.mi(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.a5(a,H.fQ(a,b,m[q]),c,s[q],e))return!1
return!0},
kl:function(a){var t,s=a.y
if(!(a===u.P))if(!H.bG(a))if(s!==7)if(!(s===6&&H.kl(a.z)))t=s===8&&H.kl(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
pY:function(a){return H.bG(a)||a===u.K},
bG:function(a){var t,s=a.y,r=s
if(r!==2)if(r!==3)if(r!==4)if(r!==5){t=u.K
if(!(a===t))s=s===7&&a.z===t
else s=!0}else s=!0
else s=!0
else s=!0
else s=!0
return s},
mj:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aN:function aN(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fu:function fu(){this.c=this.b=this.a=null},
fs:function fs(){},
e4:function e4(a){this.a=a},
mI:function(a){return u.fK.b(a)||u.B.b(a)||u.dz.b(a)||u.gb.b(a)||u.A.b(a)||u.g4.b(a)||u.g2.b(a)},
n1:function(a){return v.mangledGlobalNames[a]},
qa:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fX:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.kY==null){H.pT()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.b(P.j_("Return interceptor for "+H.a(t(a,p))))}r=a.constructor
q=r==null?null:r[$.l5()]
if(q!=null)return q
q=H.q_(a)
if(q!=null)return q
if(typeof a=="function")return C.L
t=Object.getPrototypeOf(a)
if(t==null)return C.y
if(t===Object.prototype)return C.y
if(typeof r=="function"){Object.defineProperty(r,$.l5(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
lI:function(a){a.fixed$length=Array
return a},
lJ:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kB:function(a,b){var t,s
for(t=a.length;b<t;){s=C.d.b0(a,b)
if(s!==32&&s!==13&&!J.lJ(s))break;++b}return b},
o5:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.d.dt(a,t)
if(s!==32&&s!==13&&!J.lJ(s))break}return b},
bF:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dg.prototype
return J.eG.prototype}if(typeof a=="string")return J.bd.prototype
if(a==null)return J.dh.prototype
if(typeof a=="boolean")return J.eF.prototype
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.E)return a
return J.fX(a)},
pP:function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.E)return a
return J.fX(a)},
ay:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.E)return a
return J.fX(a)},
b9:function(a){if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.E)return a
return J.fX(a)},
kf:function(a){if(typeof a=="number")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bw.prototype
return a},
mD:function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bw.prototype
return a},
kg:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bw.prototype
return a},
W:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.E)return a
return J.fX(a)},
nl:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pP(a).v(a,b)},
bI:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bF(a).P(a,b)},
nm:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kf(a).J(a,b)},
l9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mD(a).at(a,b)},
c6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pX(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ay(a).h(a,b)},
kr:function(a,b,c){return J.b9(a).j(a,b,c)},
nn:function(a,b,c,d){return J.W(a).es(a,b,c,d)},
ks:function(a){return J.W(a).ex(a)},
no:function(a,b,c,d){return J.W(a).f8(a,b,c,d)},
np:function(a,b,c){return J.W(a).f9(a,b,c)},
ee:function(a,b){return J.b9(a).l(a,b)},
la:function(a,b){return J.mD(a).du(a,b)},
h0:function(a,b,c){return J.ay(a).fD(a,b,c)},
nq:function(a,b){return J.W(a).dz(a,b)},
aT:function(a,b){return J.b9(a).C(a,b)},
c7:function(a){return J.kf(a).c5(a)},
nr:function(a){return J.W(a).gfq(a)},
ns:function(a){return J.W(a).gdq(a)},
bJ:function(a){return J.W(a).gdr(a)},
aa:function(a){return J.bF(a).gA(a)},
nt:function(a){return J.ay(a).gM(a)},
lb:function(a){return J.ay(a).gcf(a)},
y:function(a){return J.b9(a).gw(a)},
ab:function(a){return J.ay(a).gk(a)},
nu:function(a){return J.W(a).gdI(a)},
nv:function(a){return J.W(a).gdL(a)},
nw:function(a){return J.W(a).gdM(a)},
lc:function(a,b,c){return J.b9(a).ag(a,b,c)},
nx:function(a,b){return J.b9(a).R(a,b)},
kt:function(a,b,c){return J.b9(a).F(a,b,c)},
ny:function(a,b){return J.W(a).fX(a,b)},
nz:function(a,b){return J.W(a).fZ(a,b)},
nA:function(a,b){return J.bF(a).bj(a,b)},
ef:function(a){return J.W(a).bk(a)},
nB:function(a,b){return J.W(a).h8(a,b)},
cT:function(a){return J.kf(a).D(a)},
eg:function(a,b){return J.W(a).K(a,b)},
ld:function(a,b,c){return J.W(a).cu(a,b,c)},
nC:function(a,b){return J.b9(a).aX(a,b)},
nD:function(a,b,c){return J.kg(a).ab(a,b,c)},
le:function(a){return J.kf(a).bo(a)},
nE:function(a){return J.b9(a).aq(a)},
nF:function(a){return J.kg(a).hf(a)},
B:function(a){return J.bF(a).n(a)},
ku:function(a){return J.kg(a).aF(a)},
ai:function ai(){},
eF:function eF(){},
dh:function dh(){},
bt:function bt(){},
f0:function f0(){},
bw:function bw(){},
b2:function b2(){},
G:function G(a){this.$ti=a},
iu:function iu(a){this.$ti=a},
aA:function aA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bs:function bs(){},
dg:function dg(){},
eG:function eG(){},
bd:function bd(){}},P={
oM:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.pF()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.cR(new P.ja(r),1)).observe(t,{childList:true})
return new P.j9(r,t,s)}else if(self.setImmediate!=null)return P.pG()
return P.pH()},
oN:function(a){self.scheduleImmediate(H.cR(new P.jb(u.M.a(a)),0))},
oO:function(a){self.setImmediate(H.cR(new P.jc(u.M.a(a)),0))},
oP:function(a){P.kF(C.t,u.M.a(a))},
kF:function(a,b){var t=C.e.aA(a.a,1000)
return P.p2(t<0?0:t,b)},
p2:function(a,b){var t=new P.jW()
t.eq(a,b)
return t},
nW:function(a,b){var t=new P.a3($.H,b.i("a3<0>"))
P.ov(C.t,new P.iq(t,a))
return t},
m4:function(a,b){var t,s,r
b.a=1
try{a.dX(new P.jo(b),new P.jp(b),u.P)}catch(r){t=H.L(r)
s=H.aS(r)
P.mY(new P.jq(b,t,s))}},
jn:function(a,b){var t,s,r
for(t=u._;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.b8()
b.a=a.a
b.c=a.c
P.cJ(b,r)}else{r=u.x.a(b.c)
b.a=2
b.c=a
a.d6(r)}},
cJ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d={},c=d.a=a
for(t=u.n,s=u.x,r=u.b9;!0;){q={}
p=c.a===8
if(b==null){if(p){o=t.a(c.c)
P.cO(e,e,c.b,o.a,o.b)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cJ(d.a,b)}c=d.a
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
P.cO(e,e,c.b,m.a,m.b)
return}h=$.H
if(h!==j)$.H=j
else h=e
c=b.c
if((c&15)===8)new P.jv(d,q,b,p).$0()
else if(l){if((c&1)!==0)new P.ju(q,b,m).$0()}else if((c&2)!==0)new P.jt(d,q,b).$0()
if(h!=null)$.H=h
c=q.b
if(r.b(c)){if(c.a>=4){g=s.a(k.c)
k.c=null
b=k.b9(g)
k.a=c.a
k.c=c.c
d.a=c
continue}else P.jn(c,k)
return}}f=b.b
g=s.a(f.c)
f.c=null
b=f.b9(g)
c=q.a
l=q.b
if(!c){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}d.a=f
c=f}},
px:function(a,b){var t
if(u.ag.b(a))return b.dP(a,u.z,u.K,u.l)
t=u.bI
if(t.b(a))return t.a(a)
throw H.b(P.cU(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pu:function(){var t,s
for(;t=$.cN,t!=null;){$.eb=null
s=t.b
$.cN=s
if(s==null)$.ea=null
t.a.$0()}},
pA:function(){$.kS=!0
try{P.pu()}finally{$.eb=null
$.kS=!1
if($.cN!=null)$.l6().$1(P.mz())}},
mv:function(a){var t=new P.fh(a)
if($.cN==null){$.cN=$.ea=t
if(!$.kS)$.l6().$1(P.mz())}else $.ea=$.ea.b=t},
pz:function(a){var t,s,r=$.cN
if(r==null){P.mv(a)
$.eb=$.ea
return}t=new P.fh(a)
s=$.eb
if(s==null){t.b=r
$.cN=$.eb=t}else{t.b=s.b
$.eb=s.b=t
if(t.b==null)$.ea=t}},
mY:function(a){var t=null,s=$.H
if(C.f===s){P.cP(t,t,C.f,a)
return}P.cP(t,t,s,u.M.a(s.bY(a)))},
cx:function(a,b,c){return new P.e2(null,a,c.i("e2<0>"))},
mu:function(a){var t,s,r
if(a==null)return
try{a.$0()}catch(r){t=H.L(r)
s=H.aS(r)
P.cO(null,null,$.H,t,u.l.a(s))}},
mq:function(a,b){P.cO(null,null,$.H,a,b)},
pv:function(){},
ov:function(a,b){var t=$.H
if(t===C.f)return P.kF(a,u.M.a(b))
return P.kF(a,u.M.a(t.bY(b)))},
h4:function(a,b){var t=b==null?P.lh(a):b
P.ba(a,"error",u.K)
return new P.cW(a,t)},
lh:function(a){var t
if(u.bU.b(a)){t=a.gaY()
if(t!=null)return t}return C.J},
cO:function(a,b,c,d,e){var t={}
t.a=d
t.b=e
if(d==null){t.a=new P.aJ(!1,null,"error","Must not be null")
t.b=P.os()}P.pz(new P.ka(t))},
mr:function(a,b,c,d,e){var t,s=$.H
if(s===c)return d.$0()
$.H=c
t=s
try{s=d.$0()
return s}finally{$.H=t}},
mt:function(a,b,c,d,e,f,g){var t,s=$.H
if(s===c)return d.$1(e)
$.H=c
t=s
try{s=d.$1(e)
return s}finally{$.H=t}},
ms:function(a,b,c,d,e,f,g,h,i){var t,s=$.H
if(s===c)return d.$2(e,f)
$.H=c
t=s
try{s=d.$2(e,f)
return s}finally{$.H=t}},
cP:function(a,b,c,d){var t
u.M.a(d)
t=C.f!==c
if(t)d=!(!t||!1)?c.bY(d):c.fs(d,u.o)
P.mv(d)},
ja:function ja(a){this.a=a},
j9:function j9(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
jW:function jW(){},
jX:function jX(a,b){this.a=a
this.b=b},
ag:function ag(a,b){this.a=a
this.$ti=b},
b6:function b6(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.c=_.b=_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
by:function by(){},
e2:function e2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
jT:function jT(a,b){this.a=a
this.b=b},
jU:function jU(a){this.a=a},
aD:function aD(){},
iq:function iq(a,b){this.a=a
this.b=b},
fk:function fk(){},
e3:function e3(a,b){this.a=a
this.$ti=b},
c3:function c3(a,b,c,d,e){var _=this
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
jl:function jl(a,b){this.a=a
this.b=b},
js:function js(a,b){this.a=a
this.b=b},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
jm:function jm(a,b){this.a=a
this.b=b},
jr:function jr(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jw:function jw(a){this.a=a},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
jt:function jt(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a){this.a=a
this.b=null},
U:function U(){},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
a2:function a2(){},
f5:function f5(){},
cE:function cE(){},
cF:function cF(){},
N:function N(){},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
cK:function cK(){},
bz:function bz(){},
dE:function dE(a,b){this.b=a
this.a=null
this.$ti=b},
fp:function fp(a,b){this.b=a
this.c=b
this.a=null},
fo:function fo(){},
dW:function dW(){},
jG:function jG(a,b){this.a=a
this.b=b},
e0:function e0(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cG:function cG(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
dH:function dH(){},
cI:function cI(a,b,c,d){var _=this
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
fR:function fR(){},
ka:function ka(a){this.a=a},
fG:function fG(){},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
jM:function jM(a,b){this.a=a
this.b=b},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
m5:function(a,b){var t=a[b]
return t===a?null:t},
kI:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
m6:function(){var t=Object.create(null)
P.kI(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
a7:function(a,b,c){return b.i("@<0>").q(c).i("lL<1,2>").a(H.pO(a,new H.a6(b.i("@<0>").q(c).i("a6<1,2>"))))},
bU:function(a,b){return new H.a6(a.i("@<0>").q(b).i("a6<1,2>"))},
dm:function(a){return new P.dO(a.i("dO<0>"))},
kJ:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
jB:function(a,b,c){var t=new P.c5(a,b,c.i("c5<0>"))
t.c=a.e
return t},
nY:function(a,b,c){var t,s
if(P.kT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.m([],u.s)
C.a.l($.aI,a)
try{P.pt(a,t)}finally{if(0>=$.aI.length)return H.o($.aI,-1)
$.aI.pop()}s=P.lX(b,u.R.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
is:function(a,b,c){var t,s
if(P.kT(a))return b+"..."+c
t=new P.aP(b)
C.a.l($.aI,a)
try{s=t
s.a=P.lX(s.a,a,", ")}finally{if(0>=$.aI.length)return H.o($.aI,-1)
$.aI.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
kT:function(a){var t,s
for(t=$.aI.length,s=0;s<t;++s)if(a===$.aI[s])return!0
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
lM:function(a,b){var t,s,r=P.dm(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)r.l(0,b.a(a[s]))
return r},
iz:function(a){var t,s={}
if(P.kT(a))return"{...}"
t=new P.aP("")
try{C.a.l($.aI,a)
t.a+="{"
s.a=!0
a.t(0,new P.iA(s,t))
t.a+="}"}finally{if(0>=$.aI.length)return H.o($.aI,-1)
$.aI.pop()}s=t.a
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
fA:function fA(a){this.a=a
this.c=this.b=null},
c5:function c5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dn:function dn(){},
k:function k(){},
dp:function dp(){},
iA:function iA(a,b){this.a=a
this.b=b},
S:function S(){},
e7:function e7(){},
co:function co(){},
dC:function dC(){},
aX:function aX(){},
dw:function dw(){},
dX:function dX(){},
dP:function dP(){},
dY:function dY(){},
cL:function cL(){},
pw:function(a,b){var t,s,r,q
if(typeof a!="string")throw H.b(H.b8(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.L(r)
q=P.dd(String(s),null)
throw H.b(q)}q=P.k4(t)
return q},
k4:function(a){var t
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.fy(a,Object.create(null))
for(t=0;t<a.length;++t)a[t]=P.k4(a[t])
return a},
lK:function(a,b,c){return new P.dj(a,b)},
pi:function(a){return a.ho()},
oW:function(a,b,c){var t,s=new P.aP(""),r=new P.jy(s,[],P.pL())
r.bu(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
fy:function fy(a,b){this.a=a
this.b=b
this.c=null},
fz:function fz(a){this.a=a},
en:function en(){},
cf:function cf(){},
ir:function ir(){},
ck:function ck(){},
dj:function dj(a,b){this.a=a
this.b=b},
eK:function eK(a,b){this.a=a
this.b=b},
ix:function ix(){},
eM:function eM(a){this.b=a},
eL:function eL(a){this.a=a},
jz:function jz(){},
jA:function jA(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c){this.c=a
this.a=b
this.b=c},
pV:function(a){var t=H.lT(a,null)
if(t!=null)return t
throw H.b(P.dd(a,null))},
nV:function(a){if(a instanceof H.bM)return a.n(0)
return"Instance of '"+H.a(H.iM(a))+"'"},
cm:function(a,b,c){var t,s=H.m([],c.i("G<0>"))
for(t=J.y(a);t.m();)C.a.l(s,c.a(t.gp()))
if(b)return s
return c.i("t<0>").a(J.lI(s))},
oj:function(a){return new H.eI(a,H.o6(a,!1,!0,!1,!1,!1))},
lX:function(a,b,c){var t=J.y(b)
if(!t.m())return a
if(c.length===0){do a+=H.a(t.gp())
while(t.m())}else{a+=H.a(t.gp())
for(;t.m();)a=a+c+H.a(t.gp())}return a},
lO:function(a,b,c,d){return new P.eW(a,b,c,d)},
os:function(){var t,s
if(H.ar($.nk()))return H.aS(new Error())
try{throw H.b("")}catch(s){H.L(s)
t=H.aS(s)
return t}},
nQ:function(a,b){var t
if(Math.abs(a)<=864e13)t=!1
else t=!0
if(t)H.D(P.bm("DateTime is outside valid range: "+a))
P.ba(!1,"isUtc",u.y)
return new P.ch(a,!1)},
nR:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
nS:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
er:function(a){if(a>=10)return""+a
return"0"+a},
bp:function(a){if(typeof a=="number"||H.k9(a)||null==a)return J.B(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nV(a)},
h3:function(a){return new P.cV(a)},
bm:function(a){return new P.aJ(!1,null,null,a)},
cU:function(a,b,c){return new P.aJ(!0,a,b,c)},
kv:function(a){return new P.aJ(!1,null,a,"Must not be null")},
ba:function(a,b,c){if(a==null)throw H.b(P.kv(b))
return a},
ct:function(a,b){return new P.dv(null,null,!0,a,b,"Value not in range")},
a9:function(a,b,c,d,e){return new P.dv(b,c,!0,a,d,"Invalid value")},
kE:function(a,b,c,d){if(typeof a!=="number")return a.ai()
if(a<b||a>c)throw H.b(P.a9(a,b,c,d,null))
return a},
lU:function(a,b,c){if(0>a||a>c)throw H.b(P.a9(a,0,c,"start",null))
if(a>b||b>c)throw H.b(P.a9(b,a,c,"end",null))
return b},
aW:function(a,b){if(typeof a!=="number")return a.ai()
if(a<0)throw H.b(P.a9(a,0,null,b,null))
return a},
bc:function(a,b,c,d,e){var t=H.q(e==null?J.ab(b):e)
return new P.eD(t,!0,a,c,"Index out of range")},
x:function(a){return new P.ff(a)},
j_:function(a){return new P.fd(a)},
c0:function(a){return new P.b3(a)},
aK:function(a){return new P.eo(a)},
cj:function(a){return new P.ft(a)},
dd:function(a,b){return new P.dc(a,b)},
mO:function(a,b){var t=P.fY(a)
if(t!=null)return t
if(b==null)throw H.b(P.dd(a,null))
return b.$1(a)},
fY:function(a){var t=J.ku(a),s=H.lT(t,null)
return s==null?H.oi(t):s},
ed:function(a){H.qa(H.a(a))},
iB:function iB(a,b){this.a=a
this.b=b},
w:function w(){},
ch:function ch(a,b){this.a=a
this.b=b},
ah:function ah(){},
bQ:function bQ(a){this.a=a},
hX:function hX(){},
hY:function hY(){},
K:function K(){},
cV:function cV(a){this.a=a},
eY:function eY(){},
aJ:function aJ(a,b,c,d){var _=this
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
eD:function eD(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eW:function eW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ff:function ff(a){this.a=a},
fd:function fd(a){this.a=a},
b3:function b3(a){this.a=a},
eo:function eo(a){this.a=a},
eZ:function eZ(){},
dy:function dy(){},
eq:function eq(a){this.a=a},
ft:function ft(a){this.a=a},
dc:function dc(a,b){this.a=a
this.b=b},
b1:function b1(){},
e:function e(){},
d:function d(){},
R:function R(){},
t:function t(){},
cn:function cn(){},
u:function u(){},
Y:function Y(){},
E:function E(){},
dq:function dq(){},
ap:function ap(){},
aq:function aq(){},
fI:function fI(){},
c:function c(){},
aP:function aP(a){this.a=a},
aY:function aY(){},
kz:function(){var t=$.lr
return t==null?$.lr=J.h0(window.navigator.userAgent,"Opera",0):t},
nT:function(){var t,s=$.lo
if(s!=null)return s
t=$.lp
if(t==null?$.lp=J.h0(window.navigator.userAgent,"Firefox",0):t)s="-moz-"
else{t=$.lq
if(t==null)t=$.lq=!H.ar(P.kz())&&J.h0(window.navigator.userAgent,"Trident/",0)
if(t)s="-ms-"
else s=H.ar(P.kz())?"-o-":"-webkit-"}return $.lo=s},
ep:function ep(){},
hI:function hI(a){this.a=a},
eA:function eA(a,b){this.a=a
this.b=b},
im:function im(){},
io:function io(){},
ip:function ip(){},
dk:function dk(){},
pg:function(a,b,c,d){var t,s,r
H.fW(b)
u.j.a(d)
if(H.ar(b)){t=[c]
C.a.L(t,d)
d=t}s=u.z
r=P.cm(J.kt(d,P.pZ(),s),!0,s)
u.Z.a(a)
return P.e9(H.oa(a,r,null))},
am:function(a){if(!u.f.b(a)&&!u.R.b(a))throw H.b(P.bm("object must be a Map or Iterable"))
return u.b.a(P.bD(P.di(a)))},
di:function(a){return new P.iw(new P.dL(u.aH)).$1(a)},
aV:function(a,b){var t=[]
C.a.L(t,J.kt(a,P.km(),u.z))
return new P.v(t,b.i("v<0>"))},
kP:function(a,b,c){var t
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(t){H.L(t)}return!1},
mm:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
e9:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.k9(a))return a
if(a instanceof P.O)return a.a
if(H.mI(a))return a
if(u.ak.b(a))return a
if(a instanceof P.ch)return H.bX(a)
if(u.Z.b(a))return P.ml(a,"$dart_jsFunction",new P.k6())
return P.ml(a,"_$dart_jsObject",new P.k7($.l8()))},
ml:function(a,b,c){var t=P.mm(a,b)
if(t==null){t=c.$1(a)
P.kP(a,b,t)}return t},
k5:function(a){var t,s
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.mI(a))return a
else if(a instanceof Object&&u.ak.b(a))return a
else if(a instanceof Date){t=H.q(a.getTime())
if(Math.abs(t)<=864e13)s=!1
else s=!0
if(s)H.D(P.bm("DateTime is outside valid range: "+t))
P.ba(!1,"isUtc",u.y)
return new P.ch(t,!1)}else if(a.constructor===$.l8())return a.o
else return P.bD(a)},
bD:function(a){if(typeof a=="function")return P.kQ(a,$.kq(),new P.kb())
if(a instanceof Array)return P.kQ(a,$.l7(),new P.kc())
return P.kQ(a,$.l7(),new P.kd())},
kQ:function(a,b,c){var t=P.mm(a,b)
if(t==null||!(a instanceof Object)){t=c.$1(a)
P.kP(a,b,t)}return t},
iw:function iw(a){this.a=a},
k6:function k6(){},
k7:function k7(a){this.a=a},
kb:function kb(){},
kc:function kc(){},
kd:function kd(){},
O:function O(a){this.a=a},
aE:function aE(a){this.a=a},
v:function v(a,b){this.a=a
this.$ti=b},
dN:function dN(){},
dM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m8:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
fF:function fF(){},
bv:function bv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cu:function cu(){},
ej:function ej(a){this.a=a},
j:function j(){}},W={
lf:function(a){var t=document.createElement("a")
if(a!=null)t.href=a
return t},
nU:function(a,b,c){var t=document.body,s=(t&&C.p).V(t,a,b,c)
s.toString
t=u.ac
t=new H.af(new W.aj(s),t.i("w(k.E)").a(new W.i_()),t.i("af<k.E>"))
return u.h.a(t.gaw(t))},
d9:function(a){var t,s,r="element tag unavailable"
try{t=J.W(a)
if(typeof t.gdV(a)=="string")r=t.gdV(a)}catch(s){H.L(s)}return r},
nX:function(a){var t,s=document.createElement("input"),r=u.p.a(s)
try{r.type=a}catch(t){H.L(t)}return r},
dr:function(a,b){var t=window,s=u.V.a(document.createEvent("MouseEvent"))
s.toString
s.initMouseEvent(a,!0,!0,t,0,0,0,0,0,!1,!1,!1,!1,0,W.ph(b))
return s},
ow:function(a){return new TouchEvent(a)},
ox:function(){var t
try{W.ow("touches")
return!0}catch(t){H.L(t)}return!1},
jx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m9:function(a,b,c,d){var t=W.jx(W.jx(W.jx(W.jx(0,a),b),c),d),s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
m2:function(a,b){var t,s=a.classList
for(t=0;t<2;++t)s.add(b[t])},
oT:function(a,b){var t,s,r=a.classList
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.A)(b),++s)r.remove(H.r(b[s]))},
i0:function(a,b){return new W.ez(a,b.i("ez<0>"))},
z:function(a,b,c,d,e){var t=W.mw(new W.jk(c),u.B)
t=new W.dG(a,b,t,!1,e.i("dG<0>"))
t.df()
return t},
m7:function(a){var t=W.lf(null),s=window.location
t=new W.c4(new W.fH(t,s))
t.eo(a)
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
mc:function(){var t=u.N,s=P.lM(C.w,t),r=u.dG.a(new W.jV()),q=H.m(["TEMPLATE"],u.s)
t=new W.fK(s,P.dm(t),P.dm(t),P.dm(t),null)
t.ep(null,new H.T(C.w,r,u.dv),q,null)
return t},
M:function(a){var t
if(a==null)return null
if("postMessage" in a){t=W.oQ(a)
return t}else return u.aS.a(a)},
ph:function(a){return a},
oQ:function(a){if(a===window)return u.ci.a(a)
else return new W.fn(a)},
mw:function(a,b){var t=$.H
if(t===C.f)return a
return t.ft(a,b)},
i:function i(){},
c8:function c8(){},
ei:function ei(){},
c9:function c9(){},
bK:function bK(){},
bL:function bL(){},
cd:function cd(){},
b0:function b0(){},
I:function I(){},
cg:function cg(){},
hJ:function hJ(){},
d3:function d3(){},
bO:function bO(){},
hK:function hK(){},
d4:function d4(){},
hL:function hL(){},
fj:function fj(a,b){this.a=a
this.b=b},
ak:function ak(a,b){this.a=a
this.$ti=b},
p:function p(){},
i_:function i_(){},
f:function f(){},
i1:function i1(){},
hZ:function hZ(a){this.a=a},
F:function F(){},
eB:function eB(){},
br:function br(){},
de:function de(){},
cl:function cl(){},
be:function be(){},
eN:function eN(){},
a1:function a1(){},
aj:function aj(a){this.a=a},
l:function l(){},
dt:function dt(){},
cp:function cp(){},
cq:function cq(){},
cw:function cw(){},
cy:function cy(){},
f7:function f7(){},
dA:function dA(){},
f8:function f8(){},
f9:function f9(){},
cA:function cA(){},
cB:function cB(){},
aH:function aH(){},
b4:function b4(){},
fc:function fc(){},
au:function au(){},
bx:function bx(){},
j8:function j8(a){this.a=a},
b5:function b5(){},
cD:function cD(){},
fl:function fl(){},
dF:function dF(){},
dR:function dR(){},
fi:function fi(){},
fq:function fq(a){this.a=a},
fr:function fr(a){this.a=a},
ez:function ez(a,b){this.a=a
this.$ti=b},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aQ:function aQ(a,b,c,d){var _=this
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
jk:function jk(a){this.a=a},
e1:function e1(a,b){this.a=null
this.b=a
this.$ti=b},
jR:function jR(a,b){this.a=a
this.b=b},
c4:function c4(a){this.a=a},
V:function V(){},
du:function du(a){this.a=a},
iD:function iD(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(){},
jP:function jP(){},
jQ:function jQ(){},
fK:function fK(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jV:function jV(){},
fJ:function fJ(){},
bT:function bT(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
fn:function fn(a){this.a=a},
ao:function ao(){},
fH:function fH(a,b){this.a=a
this.b=b},
e8:function e8(a){this.a=a
this.b=!1},
k2:function k2(a){this.a=a},
fm:function fm(){},
fw:function fw(){},
fx:function fx(){},
fC:function fC(){},
fD:function fD(){},
fL:function fL(){},
fM:function fM(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){}},Z={
lx:function(a,b,c,d){var t,s,r=$.lz
$.lz=r+1
t=H.m([],u.f7)
r=new Z.hM(r,b,c,d,t)
s=u.j.b(a)?a:H.m([a],u.ge)
r.sbK(u.O.a(s))
s=window
if(u.b.a(P.bD(P.e9(s))).B("PointerEvent")){s=u.w
s=new Z.fE(H.m([],s),H.m([],s),r)
s.bB(r)
C.a.l(t,s)}else{if(W.ox()){s=u.w
s=new Z.fN(H.m([],s),H.m([],s),r)
s.bB(r)
C.a.l(t,s)}s=u.w
s=new Z.fB(H.m([],s),H.m([],s),r)
s.bB(r)
C.a.l(t,s)}return r},
ly:function(a,b,c){return new Z.bP(b.b,b.c)},
nG:function(a){$.lg=a
if(!$.h1){C.U.gfo(window).dW(new Z.h2(),u.o)
$.h1=!0}},
oS:function(a,b){var t,s,r="_customDragOver"
if(b==null)return
t=$.cH
if(t===b)b.dispatchEvent(W.dr(r,null))
else{b.dispatchEvent(W.dr("_customDragEnter",t))
if($.cH!=null){s=W.dr("_customDragLeave",b)
$.cH.dispatchEvent(s)}b.dispatchEvent(W.dr(r,null))
$.cH=b}},
oR:function(a,b){J.nq(b,W.dr("_customDrop",null))
Z.m1()},
m1:function(){if($.cH!=null){var t=W.dr("_customDragLeave",null)
$.cH.dispatchEvent(t)
$.cH=null}},
ci:function(a,b){var t=new Z.ey(b,H.m([],u.w)),s=u.j.b(a)?a:H.m([a],u.ge)
t.sbK(u.O.a(s))
C.a.t(t.x,t.gf0())
return t},
hM:function hM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.cx=_.ch=_.z=null
_.cy=e},
hR:function hR(a){this.a=a},
hQ:function hQ(a){this.a=a},
hO:function hO(){},
hP:function hP(a){this.a=a},
hN:function hN(){},
bP:function bP(a,b){this.a=a
this.d=b},
jf:function jf(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e
_.x=f},
ek:function ek(){},
h7:function h7(a,b){this.a=a
this.b=b},
h2:function h2(){},
b7:function b7(){},
jg:function jg(){},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(){},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a){this.a=a},
k0:function k0(a){this.a=a},
k_:function k_(a){this.a=a},
jZ:function jZ(a){this.a=a},
jY:function jY(a){this.a=a},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a){this.a=a},
jE:function jE(a){this.a=a},
jD:function jD(a){this.a=a},
jC:function jC(a){this.a=a},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a){this.a=a},
jK:function jK(a){this.a=a},
jJ:function jJ(a){this.a=a},
jI:function jI(a){this.a=a},
jH:function jH(a){this.a=a},
ey:function ey(a,b){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=null
_.y=b},
hT:function hT(a){this.a=a},
hV:function hV(a){this.a=a},
hU:function hU(a){this.a=a},
hW:function hW(a){this.a=a},
hS:function hS(){},
as:function as(a){this.d=a},
eh:function eh(){}},U={
lF:function(a,b,c){var t,s=new U.bS(b,a)
s.ax(a,b)
if(!C.a.G(H.m(["num","bool"],u.s),c))H.D(P.cU(c,"type","The expression type can only be num or bool"))
t=new U.bq(a.fr)
t.c=new U.ac(t,c,H.m([],u.U))
s.f=t
s.e=c
return s},
on:function(a,b,c){var t=new U.cv(H.m([],u.eD),null,a)
t.aI(a,b,c)
t.en(a,b,c)
return t},
h9:function(a,b,c,d){var t=d?b.cloneNode(!0):b
u.d.a(t)
t.toString
W.oT(t,u.fP.a(["nt-block-starter","nt-block-ender","nt-block-standalone","nt-block-middle","nt-block-clause-starter","nt-block-clause-standalone","nt-block-clause-middle","nt-block-clause-ender"]))
t.classList.add(c)
a.appendChild(t)},
kw:function(a,b,c,d){var t,s=b.length
if(s===0)return
if(s===1)U.h9(a,C.a.gaD(b).k1,c+"-standalone",d)
else{U.h9(a,C.a.gaD(b).k1,c+"-starter",d)
for(t=1;t<b.length-1;++t)U.h9(a,b[t].k1,c+"-middle",d)
U.h9(a,C.a.gdF(b).k1,c+"-ender",d)}},
kx:function(){return new U.cY("#9977aa","#ffffff","#ffffff")},
li:function(a,b,c,d){var t,s=u.by
s=new U.al(b,c,new H.a6(s),new H.a6(s),H.m([],u.e),C.j,a)
if(b==null){t=a.ch
s.a=t
a.ch=t+1}else if(b>=a.ch)a.ch=b+1
if(!d){t=a.cx
s.b=t
a.cx=t+1}return s},
lj:function(a){var t=a.c_(0,!1)
C.a.t(a.Q,new U.hf(t))
return t},
ky:function(a,b){var t,s,r=a.cy
if(r!=null){t=b.style
t.borderColor=r}r=a.cx
if(r!=null){t=b.style
t.color=r}r=a.db
if(r!=null){t=b.style
s=t.lineHeight
t.font=r
r=b.style
r.lineHeight=s}},
lk:function(a,b,c){var t,s=Z.lx(b,a.fx,"input, textarea, button, select, option","nt-block-dragging")
s.gdK(s).u(a.gby())
s.gdJ(s).u(a.gc3())
t=Z.ci(b,a.fr.k4)
t.gap(t).u(a.ga6())
t.gan(t).u(new U.hk(c))
t.gao(t).u(new U.hl(c))},
hp:function(a,b,c,d){a.toString
C.b.K(a,"")
if(C.a.gaD(b).gaR()){a.classList.add("nt-chain-starter")
a.classList.remove("nt-chain-fragment")}else{a.classList.remove("nt-chain-starter")
a.classList.add("nt-chain-fragment")
if(d!=null)a.appendChild(d)
a.appendChild(U.lP(!0,C.a.gaD(b)))}U.kw(a,b,"nt-block",c)
a.appendChild(U.lP(!1,C.a.gdF(b)))},
pK:function(a,b){var t,s,r,q,p=u.Y
p.a(a)
p.a(b)
p=a.a
t=p.length
if(t!==0){if(0>=t)return H.o(p,0)
s=p[0].c==null}else s=!0
if(s)return-1
s=b.a
r=s.length
if(r!==0){if(0>=r)return H.o(s,0)
q=s[0].c==null}else q=!0
if(q)return 1
if(0>=t)return H.o(p,0)
p=p[0].c
if(0>=r)return H.o(s,0)
return J.la(p,s[0].c)},
ce:function(a){var t=a.a2()
if(t==null)t=""
return a.aW()?'"'+t+'"':t},
d_:function(a){var t,s,r,q,p=a.d
if(p!=null){for(t=a.e,s=0;s<t.length;++s){r="{"+s+"}"
if(s>=t.length)return H.o(t,s)
q=U.d_(t[s])
if(typeof q!="string")H.D(H.b8(q))
p=H.l0(p,r,q)}return p}else{t=a.e
r=t.length
if(r===1){r="("+H.a(a.b)+" "
if(0>=t.length)return H.o(t,0)
return r+H.a(U.d_(t[0]))+")"}else if(r===2){if(0>=r)return H.o(t,0)
r="("+H.a(U.d_(t[0]))+" "+H.a(a.b)+" "
if(1>=t.length)return H.o(t,1)
return r+H.a(U.d_(t[1]))+")"}else return a.b}},
lw:function(a,b){var t
$.ew=a.fr.b
$.lt=b.d.E(0,U.d6(b.a))
t=a.dy
$.es=t===C.j||t===C.k
$.aL=!1},
d6:function(a){var t,s,r,q=J.W(a)
if(a.offsetParent==null){q=q.gaU(a)
return new P.J(q.a,q.b,q.$ti.i("J<1>"))}else{q=q.gaU(a)
t=q.$ti.i("J<1>")
s=t.a(U.d6(a.offsetParent))
r=s.a
if(typeof r!=="number")return H.a0(r)
s=s.b
if(typeof s!=="number")return H.a0(s)
return new P.J(q.a+r,q.b+s,t)}},
lE:function(a,b){var t=new U.ac(a,"num",H.m([],u.U))
t.em(a,b)
return t},
lP:function(a,b){var t,s,r=document.createElement("div")
r.classList.add("nt-notch")
t=b.aG()
r.classList.add(t)
U.ky(b,r)
if(a)r.classList.add("nt-notch-top")
else r.classList.add("nt-notch-bottom")
s=t+"-color"
C.a.t(H.m(["filler","left","middle","right"],u.s),new U.iF(s,a,b,r))
U.lk(b,r,new U.iG(b))
return r},
lQ:function(a,b){var t,s,r,q,p=document,o=p.createElement("div")
o.classList.add("nt-notch")
t=b.c
s=t.aG()
o.classList.add(s)
U.ky(t,o)
if(a)o.classList.add("nt-notch-top")
else o.classList.add("nt-notch-bottom")
r=s+"-color"
C.a.t(H.m(["filler","left","middle","right"],u.s),new U.iE(r,a,b,o))
if(!a){q=p.createElement("div")
q.className="nt-notch-clause-filler"
o.appendChild(q)}return o},
ca:function(a){var t=new U.el()
t.b=a.a
t.c=a.b
return t},
mn:function(a,b,c,d){U.pl(a,new U.k8(b),c,d)},
pl:function(a,b,c,d){var t,s,r,q,p,o,n,m,l="version",k="blockStyles",j="variables",i="expressions",h=H.q(d.B(l)?d.h(0,l):0)
if(typeof h!=="number")return h.J()
if(h>5)H.D("Somehow the given model version ("+h+") is greater than the supported NetTango version (5).")
if(h<1)U.oB(d)
if(h<2)U.kH(d,U.mK(),U.mK())
if(h<3)U.oH(d)
if(h<4){U.oI(d)
U.kG(d,U.mL(),U.mL())}if(h<5){U.kG(d,U.mN(),U.mN())
U.kG(d,U.mM(),U.mM())}d.j(0,l,5)
q=new U.hu(b,c)
switch(a){case"NetLogo":q.b=new U.eC("","end","[","]")
break
default:q.b=new U.eC("","","","")
break}t=q
try{if($.ax.H(c))$.ax.h(0,c).r1.fG()
if(!J.bI(d.h(0,l),5))H.D("The supported NetTango version is 5, but the given definition version was "+H.a(d.h(0,l))+".")
p=new U.bN(5,c,t,H.m([],u.cM),[],H.m([],u.ga),600,600,450)
o="#"+H.a(c)
o=u.d.a(document.querySelector(o))
p.c=o
if(o==null)H.D("No container element with ID "+H.a(c)+" found.");(o&&C.b).K(o,"")
o.classList.add("nt-container")
n=new U.d5(c,!0)
p.k3=n
p.k4=new U.d5(c,!1)
n=p.r1=Z.ci(o,n)
n.gap(n).u(p.gfB())
p.fy=$.l4()
p.go=$.l3()
p.id=$.l2()
n=p.c.style
o=H.a(p.dy)+"px"
n.minHeight=o
o=p.c.style
n=H.a(p.fx)+"px"
o.minWidth=n
o=p.c.style
n=H.a(p.fx)+"px"
o.maxWidth=n
p.cy=new U.em(p,H.m([],u.dk))
o=H.q(H.cM(d.h(0,"height"))?d.h(0,"height"):600)
p.dy=o
n=p.c.style
o=H.a(o)+"px"
n.minHeight=o
o=H.q(H.cM(d.h(0,"width"))?d.h(0,"width"):450)
p.fx=o
n=p.c.style
o=H.a(o)+"px"
n.minWidth=o
o=p.c.style
n=H.a(p.fx)+"px"
o.maxWidth=n
o=d.h(0,"chainOpen")
p.y=o==null?null:J.B(o)
o=d.h(0,"chainClose")
p.z=o==null?null:J.B(o)
if(d.B(k)){o=u.b
p.fy=U.l_(o.a(J.c6(d.h(0,k),"starterBlockStyle")),"#bb5555")
p.go=U.l_(o.a(J.c6(d.h(0,k),"containerBlockStyle")),"#8899aa")
p.id=U.l_(o.a(J.c6(d.h(0,k),"commandBlockStyle")),"#9977aa")}if(d.h(0,"blocks") instanceof P.v)U.qe(p,u.F.a(d.h(0,"blocks")))
if(d.h(0,j) instanceof P.v)p.db=u.j.a(d.h(0,j))
if(d.h(0,i) instanceof P.v)U.qd(p,u.F.a(d.h(0,i)))
if(d.h(0,"program") instanceof P.O)U.qf(p,u.b.a(d.h(0,"program")))
s=p
$.ax.j(0,c,s)
s.fI()}catch(m){o=H.L(m)
if(o instanceof P.dc){r=o
throw H.b(P.dd("There was an error initializing the workspace with the given NetTango model JSON.",r))}else throw m}},
o2:function(a,b,c,d){H.r(a)
H.r(b)
H.r(c)
u.L.a(d)
if($.ax.h(0,b) instanceof U.bN)C.a.sk($.ax.h(0,b).Q,0)
U.mn(a,d,b,P.am(C.i.c1(0,c,null)))},
o1:function(a,b,c){var t,s,r,q,p,o
H.r(a)
H.r(b)
u.L.a(c)
t=C.i.c1(0,b,null)
s=u.f
if(s.b(t))for(r=J.y(t.gI()),q=u.b,p=u.R;r.m();){o=H.r(r.gp())
if($.ax.h(0,o) instanceof U.bN)C.a.sk($.ax.h(0,o).Q,0)
t=C.i.c1(0,b,null)
if(!s.b(t)&&!p.b(t))H.D(P.bm("object must be a Map or Iterable"))
U.mn(a,c,o,q.a(P.bD(P.di(t))))}},
o_:function(a,b){var t
H.r(a)
u.L.a(b)
if($.ax.H(a)){t=$.ax
if(b!=null){t=t.h(0,a)
return t.x.dE(t,!0,new U.it(b))}else{t=t.h(0,a)
return t.x.dE(t,!0,null)}}return null},
o0:function(a,b,c){H.r(a)
H.q(b)
H.q(c)
if(!$.ax.H(a))throw H.b(P.cj("Unknown container ID: "+H.a(a)))
return U.ce($.ax.h(0,a).a1(b).e6(0,c))},
o4:function(a){var t
H.r(a)
if($.ax.H(a)){t=U.mC($.ax.h(0,a))
return H.r($.h_().h(0,"JSON").U("stringify",H.m([t],u.c3)))}else return"{}"},
o3:function(){var t,s,r,q=u.z,p=P.bU(q,q)
for(q=$.ax,q=new H.ad(q,H.h(q).i("ad<1>")),q=q.gw(q),t=u.c3;q.m();){s=q.d
r=U.mC($.ax.h(0,s))
p.j(0,s,$.h_().h(0,"JSON").U("stringify",H.m([r],t)))}return C.i.fL(C.i,null)},
mJ:function(){var t=$.h_()
t.j(0,"NetTango_blockPlacementOptions",P.am(P.a7(["starter",0,"child",1,"anywhere",2],u.N,u.S)))
t.j(0,"NetTango_InitWorkspace",U.q6())
t.j(0,"NetTango_InitAllWorkspaces",U.q5())
t.j(0,"NetTango_ExportCode",U.q3())
t.j(0,"NetTango_FormatAttributeValue",U.q4())
t.j(0,"NetTango_Save",U.q8())
t.j(0,"NetTango_SaveAll",U.q7())},
qe:function(a,b){var t,s,r,q,p,o,n,m
for(t=H.h(b).i("P<k.E>"),s=new H.P(b,b.gk(b),t),r=u.b;s.m();){q=H.q(r.a(s.d).h(0,"id"))
if(q!=null&&q>a.ch){if(typeof q!=="number")return q.v()
a.ch=q+1}}for(t=new H.P(b,b.gk(b),t);t.m();){p=r.a(t.d)
o=U.mX(a,p)
if(a.cy.bv(o.a)!=null){o.a=null
o=o.c_(0,!0)
p.j(0,"id",o.a)}n=U.n_(p.h(0,"limit"),-1)
s=a.cy
m=s.bv(o.a)
if(m!=null)H.D(P.dd("Cannot add a block with the same ID as an existing block\n  Adding: ("+H.a(o.a)+": "+H.a(o.c)+")\n  Existing: ("+H.a(m.a)+": "+H.a(m.c)+")",null))
C.a.l(s.b,new U.aO(o,s.a,n))}},
mX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j=null,i="clauses",h="children",g="properties",f=b.h(0,"action"),e=f==null?"":J.B(f),d=U.li(a,H.q(b.h(0,"id")),e,!0)
b.j(0,"id",d.a)
if(b.h(0,i) instanceof P.v){d.sds(H.m([],u.e))
f=u.u
t=u.b
s=u.F
r=0
while(!0){q=H.k3(J.ab(b.h(0,i)))
if(typeof q!=="number")return H.a0(q)
if(!(r<q))break
q=t.a(J.c6(b.h(0,i),r))
p=q.h(0,"open")
o=p==null?j:J.B(p)
p=q.h(0,"close")
n=p==null?j:J.B(p)
m=new U.aC(d,r,o,n,H.m([],f))
if(q.h(0,h) instanceof P.v)m.sbZ(U.qb(a,s.a(q.h(0,h))))
C.a.l(d.Q,m);++r}}f=b.h(0,"type")
d.d=f==null?"":J.B(f)
f=b.h(0,"format")
d.e=f==null?j:J.B(f)
f=b.h(0,"note")
d.f=f==null?j:J.B(f)
f=b.h(0,"blockColor")
d.ch=f==null?j:J.B(f)
f=b.h(0,"textColor")
d.cx=f==null?j:J.B(f)
f=b.h(0,"borderColor")
d.cy=f==null?j:J.B(f)
f=b.h(0,"font")
d.db=f==null?j:J.B(f)
d.dx=U.l1(b.h(0,"required"),d.dx)
d.dy=C.a.h(C.S,U.n_(b.h(0,"placement"),d.dy.a))
if(b.h(0,"params") instanceof P.v)for(f=J.y(u.R.a(b.h(0,"params"))),t=d.r,s=u.b;f.m();){l=U.mT(d,s.a(f.gp()))
t.j(0,l.a,l)}if(b.h(0,g) instanceof P.v){for(f=J.y(u.R.a(b.h(0,g))),t=d.x,s=u.b;f.m();){k=U.mT(d,s.a(f.gp()))
t.j(0,k.a,k)}f=b.h(0,"propertiesDisplay")
d.y=f==null?"shown":J.B(f)}return d},
qb:function(a,b){var t,s,r=H.m([],u.u)
for(t=new H.P(b,b.gk(b),H.h(b).i("P<k.E>")),s=u.b;t.m();)C.a.l(r,U.mX(a,s.a(t.d)))
return r},
mT:function(a,b){var t,s,r,q,p="values",o=H.q(b.h(0,"id")),n=b.h(0,"type")
switch(n==null?"num":J.B(n)){case"int":t=new U.df(o,a)
t.ax(a,o)
t.x=1
t.r=U.l1(b.h(0,"random"),null)
t.x=U.bH(b.h(0,"step"),t.x)
break
case"num":t=U.lF(a,o,"num")
break
case"bool":t=U.lF(a,o,"bool")
break
case"range":t=new U.cs(o,a)
t.ax(a,o)
t.r=U.l1(b.h(0,"random"),!1)
t.x=U.bH(b.h(0,"step"),t.x)
t.cx=U.bH(b.h(0,"min"),t.cx)
t.cy=U.bH(b.h(0,"max"),t.cy)
break
case"select":n=H.m([],u.eD)
t=new U.cv(n,o,a)
t.ax(a,o)
s=b.h(0,"quoteValues")
t.r=s==null?null:J.B(s)
if(b.h(0,p) instanceof P.v&&J.nm(J.ab(b.h(0,p)),0))for(s=J.y(u.R.a(b.h(0,p)));s.m();){r=s.gp()
q=J.ay(r)
C.a.l(n,new U.bf(H.r(q.h(r,"actual")),H.r(q.h(r,"display"))))}break
case"text":t=new U.cC(o,a)
t.ax(a,o)
break
default:t=new U.cC(o,a)
t.ax(a,o)
break}n=b.h(0,"name")
t.c=n==null?"":J.B(n)
n=b.h(0,"unit")
t.d=n==null?"":J.B(n)
n=b.h(0,"default")
t.aV(n==null?"":J.B(n))
return t},
qd:function(a,b){var t,s,r,q,p,o,n,m,l,k,j="type",i="arguments"
if(b==null||b.gk(b)===0)return
for(t=new H.P(b,b.gk(b),H.h(b).i("P<k.E>")),s=a.dx,r=u.s,q=u.b,p=u.R;t.m();){o=q.a(t.d)
n=H.r(o.h(0,"name"))
m=H.r(o.h(0,j))
l=H.m([],r)
k=new U.db(n,m,l)
if(n==null)H.D(P.kv("name"))
if(m==null)H.D(P.kv(j))
if(!C.a.G(H.m(["num","bool"],r),m))H.D(P.cU(m,j,"Expression definition type can only be 'num' or 'bool'."))
k.d=H.r(o.h(0,"format"))
if("arguments" in o.a&&o.h(0,i) instanceof P.v)for(n=J.y(p.a(o.h(0,i)));n.m();)C.a.l(l,H.r(n.gp()))
C.a.l(s,k)}},
qf:function(a,b){var t,s
if(!(b.h(0,"chains") instanceof P.v))return
for(t=J.y(u.R.a(b.h(0,"chains"))),s=u.b;t.m();)U.qc(a,s.a(t.gp()))},
qc:function(a,b){var t,s,r,q=new U.aB(a,H.m([],u.u))
if(typeof b.h(0,"x")=="number"&&typeof b.h(0,"y")=="number"){q.c=J.c7(b.h(0,"x"))
q.d=J.c7(b.h(0,"y"))}C.a.l(a.Q,q)
if(!(b.h(0,"blocks") instanceof P.v))return
for(t=J.y(u.R.a(b.h(0,"blocks"))),s=u.b;t.m();){r=U.mU(a,s.a(t.gp()))
if(r!=null)C.a.l(q.a,r)}},
mU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h="children",g=a.cy.bv(H.q(b.h(0,"id")))
if(g==null){P.ed("No prototype block found for id: "+H.a(b.h(0,"id")))
t=a.cy.b
s=H.C(t)
P.ed(new H.T(t,s.i("e(1)").a(new U.ko()),s.i("T<1,e>")))
return null}r=g.c_(0,!1)
t=b.h(0,"propertiesDisplay")
r.y=t==null?"shown":J.B(t)
t=u.F
U.mV(r.r,t.a(b.h(0,"params")))
U.mV(r.x,t.a(b.h(0,"properties")))
if(b.h(0,"clauses") instanceof P.v){r.sds(H.m([],u.e))
for(t=u.R,s=J.y(t.a(b.h(0,"clauses"))),q=u.b,p=u.u,o=0;s.m();){n=q.a(s.gp())
if(!(n.h(0,h) instanceof P.v))continue
m=n.h(0,"open")
l=m==null?null:J.B(m)
m=n.h(0,"close")
k=m==null?null:J.B(m)
j=new U.aC(r,o,l,k,H.m([],p))
C.a.l(r.Q,j)
for(m=J.y(t.a(n.h(0,h)));m.m();){i=U.mU(a,q.a(m.gp()))
if(i!=null)C.a.l(j.a,i)}++o}}return r},
mV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i="value"
if(b==null)return
for(t=new H.P(b,b.gk(b),b.$ti.i("P<k.E>")),s=u.s,r=u.b,q=u.U;t.m();){p=r.a(t.d)
if(!("id" in p.a)||p.h(0,i)==null||!a.H(p.h(0,"id")))continue
o=a.h(0,p.h(0,"id"))
if(C.a.G(H.m(["bool","num"],s),o.ga0(o))){if(!(o instanceof U.bS))throw H.b(P.cj("A non-expression attribute cannot have a type of 'num' or 'bool'."))
n=p.h(0,i)
m=o.b
l=o.e
if(n instanceof P.O){n=m.fr
m=r.a(p.h(0,i))
k=new U.bq(n)
k.c=new U.ac(k,l,H.m([],q))
if(m!=null)n=!0
else n=!1
if(n)k.c=U.mW(k,l,m)
o.f=k}else{n=m.fr
m=J.B(p.h(0,i))
k=new U.bq(n)
k.c=new U.ac(k,l,H.m([],q))
j=new U.ac(k,l,H.m([],q))
j.b=m
k.c=j
o.f=k}}else if(p.h(0,i) instanceof P.O){n=p.h(0,"defaultValue")
o.au(n==null?"":J.B(n))}else{n=p.h(0,i)
o.au(n==null?"":J.B(n))}}},
mW:function(a,b,c){var t,s="children",r=H.m([],u.U),q=new U.ac(a,b,r),p=c.h(0,"name")
q.b=p==null?"":J.B(p)
if(c.h(0,"format")!=null)q.d=H.r(c.h(0,"format"))
if(c.h(0,s) instanceof P.v)for(p=J.y(u.R.a(c.h(0,s))),t=u.b;p.m();)C.a.l(r,U.mW(a,b,t.a(p.gp())))
return q},
l_:function(a,b){var t,s,r="#ffffff"
if(a==null){t=new U.cY("#9977aa",r,r)
t.a=b
return t}t=new U.cY("#9977aa",r,r)
s=a.h(0,"blockColor")
t.a=s==null?b:J.B(s)
s=a.h(0,"textColor")
t.b=s==null?r:J.B(s)
s=a.h(0,"borderColor")
t.c=s==null?r:J.B(s)
s=a.h(0,"fontWeight")
t.d=s==null?"":J.B(s)
s=a.h(0,"fontSize")
t.e=s==null?"":J.B(s)
s=a.h(0,"fontFace")
t.f=s==null?"":J.B(s)
return t},
mC:function(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="blockStyles",a=u.N,a0=u.K,a1=P.am(P.a7(["version",a2.a,"height",a2.dy,"width",a2.fx,"blocks",[],"program",P.a7(["chains",[]],a,u.j)],a,a0))
U.bl(a1,"chainOpen",a2.y,a)
U.bl(a1,"chainClose",a2.z,a)
if(a2.fy!=$.l4()||a2.go!=$.l3()||a2.id!=$.l2()){t=u.z
a1.j(0,b,P.am(P.bU(t,t)))
J.kr(a1.h(0,b),"starterBlockStyle",U.kW(a2.fy))
J.kr(a1.h(0,b),"containerBlockStyle",U.kW(a2.go))
J.kr(a1.h(0,b),"commandBlockStyle",U.kW(a2.id))}for(t=a2.cy.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r]
p=q.e
if(p===-1)p=null
o=U.kV(q.a,p)
J.ee(a1.h(0,"blocks"),o)}t=a2.db
if(t!=null&&J.lb(t))a1.j(0,"variables",P.aV([],u.z))
t=a2.dx
s=t.length
if(s!==0){s=u.z
n=P.aV([],s)
a1.j(0,"expressions",n)
for(p=t.length,m=n.$ti.c,l=u.b,k=u.gB,r=0;r<t.length;t.length===p||(0,H.A)(t),++r){j=t[r]
i=P.a7(["name",j.a,"type",j.b],a,a)
h=l.a(P.bD(P.di(i)))
i=j.c
if(i.length>0){g=[]
C.a.L(g,C.a.F(i,P.km(),s))
h.j(0,"arguments",new P.v(g,k))}i=j.d
if(i!=null)h.j(0,"format",i)
n.U("push",[m.a(h)])}}f=J.c6(a1.h(0,"program"),"chains")
for(t=a2.Q,s=t.length,p=J.b9(f),m=u.b,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){e=t[r]
l=P.a7(["x",e.c,"y",e.d,"blocks",[]],a,a0)
d=m.a(P.bD(P.di(l)))
for(l=e.a,k=l.length,c=0;c<l.length;l.length===k||(0,H.A)(l),++c){o=U.kV(l[c],null)
J.ee(d.h(0,"blocks"),o)}p.l(f,d)}return a1},
kW:function(a){var t=u.N
return P.am(P.a7(["blockColor",a.a,"textColor",a.b,"borderColor",a.c,"fontWeight",a.d,"fontSize",a.e,"fontFace",a.f],t,t))},
kV:function(a,b){var t,s,r,q,p,o,n="push",m=P.am(P.a7(["id",a.a,"action",a.c,"required",a.dx,"placement",a.dy.a],u.N,u.K)),l=u.S
U.bl(m,"instanceId",a.b,l)
U.az(m,"type",a.d)
U.az(m,"format",a.e)
U.bl(m,"limit",b,l)
U.az(m,"note",a.f)
U.az(m,"blockColor",a.ch)
U.az(m,"textColor",a.cx)
U.az(m,"borderColor",a.cy)
U.az(m,"font",a.db)
if(a.Q.length!==0){t=P.aV([],u.z)
m.j(0,"clauses",t)
for(l=a.Q,s=l.length,r=t.$ti.c,q=0;q<l.length;l.length===s||(0,H.A)(l),++q)t.U(n,[r.a(U.pM(l[q]))])}l=a.r
if(l.a!==0){p=P.aV([],u.z)
m.j(0,"params",p)
for(l=l.gar(l),s=H.h(l),s=new H.a4(J.y(l.a),l.b,s.i("@<1>").q(s.Q[1]).i("a4<1,2>")),l=p.$ti.c;s.m();)p.U(n,[l.a(U.mA(s.a))])}l=a.x
if(l.a!==0){o=P.aV([],u.z)
m.j(0,"properties",o)
for(l=l.gar(l),s=H.h(l),s=new H.a4(J.y(l.a),l.b,s.i("@<1>").q(s.Q[1]).i("a4<1,2>")),l=o.$ti.c;s.m();)o.U(n,[l.a(U.mA(s.a))])
m.j(0,"propertiesDisplay",a.y)}return m},
pM:function(a){var t,s,r,q,p=u.N,o=P.am(P.a7(["children",[]],p,u.j))
U.bl(o,"open",a.e,p)
U.bl(o,"close",a.f,p)
t=o.h(0,"children")
for(p=a.a,s=p.length,r=J.b9(t),q=0;q<p.length;p.length===s||(0,H.A)(p),++q)r.l(t,U.kV(p[q],null))
return o},
bl:function(a,b,c,d){if(c!=null)a.j(0,b,c)},
az:function(a,b,c){if(c!=null&&c!=="")a.j(0,b,c)},
mA:function(a){var t,s,r,q,p,o,n,m,l="value",k="default",j=u.N,i=P.am(P.a7(["id",a.a,"type",a.ga0(a)],j,u.K))
U.az(i,"name",a.c)
U.az(i,"unit",a.d)
switch(a.ga0(a)){case"text":U.az(i,l,a.a2())
U.az(i,k,a.as())
break
case"select":u.fs.a(a)
U.az(i,"quoteValues",a.r)
U.az(i,l,a.a2())
U.az(i,k,a.as())
t=P.aV([],u.z)
i.j(0,"values",t)
for(s=a.x,r=s.length,q=u.b,p=t.$ti.c,o=0;o<s.length;s.length===r||(0,H.A)(s),++o){n=s[o]
m=P.a7(["actual",n.a,"display",n.b],j,j)
t.U("push",[p.a(q.a(P.bD(P.di(m))))])}break
case"int":case"range":u.cU.a(a)
i.j(0,"step",a.x)
U.bl(i,"random",a.r,u.y)
j=u.di
U.bl(i,l,a.e,j)
U.bl(i,k,a.f,j)
if(a instanceof U.cs){i.j(0,"min",a.cx)
i.j(0,"max",a.cy)}break
case"num":case"bool":u.gs.a(a)
U.az(i,k,a.as())
j=a.f.c
if(j!=null&&j.b!=null)if(j.e.length===0)i.j(0,l,a.a2())
else{i.j(0,l,U.mB(j))
i.j(0,"expressionValue",a.a2())}break
default:throw H.b(P.cj("Unknown attribute type "+a.ga0(a)))}return i},
mB:function(a){var t,s,r,q="children",p=u.N,o=P.am(P.a7(["name",a.b,"type",a.c],p,p))
U.bl(o,"format",a.d,p)
p=a.e
if(p.length!==0){o.j(0,q,P.aV([],u.z))
for(t=p.length,s=0;s<p.length;p.length===t||(0,H.A)(p),++s){r=p[s]
J.ee(o.h(0,q),U.mB(r))}}return o},
n_:function(a,b){var t,s
if(a==null)return b
else if(H.cM(a))return a
else if(typeof a=="string")try{t=P.pV(a)
return t}catch(s){if(u.g8.b(H.L(s)))return b
else throw s}return b},
bH:function(a,b){var t,s
if(a==null)return b
else if(typeof a=="number")return a
else if(typeof a=="string")try{t=P.mO(a,null)
return t}catch(s){if(u.g8.b(H.L(s)))return b
else throw s}return b},
l1:function(a,b){if(a==null)return b
else if(H.k9(a))return a
else if(typeof a=="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
oB:function(a){var t={},s=new H.a6(u.bT),r=new H.a6(u.aI)
t.a=0
U.kH(a,new U.j1(t,s,r),new U.j2(s,r))},
lZ:function(a,b){var t={}
t.a=a
U.m_(b,new U.j0(t))
return t.a},
oA:function(a,b){var t,s
for(t=new H.P(b,b.gk(b),H.h(b).i("P<k.E>")),s=u.b;t.m();){s.a(t.d).j(0,"id",a)
if(typeof a!=="number")return a.v();++a}return a},
oz:function(a,b,c){var t,s
if(!c.B("action"))return
t=H.r(c.h(0,"action"))
if(a.H(t)){s=a.h(0,t)
c.j(0,"id",s)
U.lZ(b.h(0,s),c)}},
oE:function(a){U.m_(a,U.q1())},
oC:function(a){var t="values"
if(!a.B(t)||!(a.h(0,t) instanceof P.v))return
a.j(0,t,P.aV(u.R.a(J.nx(a.h(0,t),new U.j3())),u.z))},
oD:function(a){var t,s,r
a.toString
t=a.$ti
s=t.i("w(k.E)").a(new U.j4())
r=a.gw(a)
t=new H.c2(r,s,t.i("c2<k.E>"))
s=u.b
for(;t.m();)U.oC(s.a(r.gp()))},
oH:function(a){var t,s,r="program"
U.kH(a,new U.j6(),U.q2())
if(!a.B(r)||!(a.h(0,r) instanceof P.O))return
t=u.b
s=t.a(a.h(0,r))
if(!s.B("chains")||!(s.h(0,"chains") instanceof P.v))return
U.oF(t.a(a.h(0,r)))},
oF:function(a){var t,s=u.F.a(a.h(0,"chains"))
s.toString
t=s.$ti
a.j(0,"chains",P.aV(new H.af(s,t.i("w(k.E)").a(new U.j5()),t.i("af<k.E>")),u.z))},
oG:function(a){if(typeof a.h(0,"x")=="number")a.j(0,"x",J.l9(a.h(0,"x"),10))
if(typeof a.h(0,"y")=="number")a.j(0,"y",J.l9(a.h(0,"y"),10))},
oI:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g="program",f="chains"
if(!a.B(g)||!(a.h(0,g) instanceof P.O))return
t=u.b
s=t.a(a.h(0,g))
if(!s.B(f)||!(s.h(0,f) instanceof P.v))return
r=P.aV([],u.z)
for(q=J.y(u.R.a(s.h(0,f))),p=r.$ti.c,o=u.N,n=u.K,m=u.F;q.m();){l=m.a(q.gp())
if(!l.gM(l)){k=C.e.bo(0)
if(0===k){k=0>=l.gk(l)
if(k)H.D(P.a9(0,0,l.gk(l),null,null))}j=H.h(l).c.a(l.cw(0,0))
k=J.ay(j)
if(typeof k.h(j,"x")=="number"&&typeof k.h(j,"y")=="number"){i=J.c7(k.h(j,"x"))
h=J.c7(k.h(j,"y"))}else{i=0
h=0}}else{i=0
h=0}k=P.a7(["blocks",l,"x",i,"y",h],o,n)
r.U("push",[p.a(t.a(P.bD(P.di(k))))])}s.j(0,f,r)},
oJ:function(a){a.c2("x")
a.c2("y")},
oK:function(a){var t="required",s="placement"
if(a.B(t)&&H.ar(H.fW(a.h(0,t))))a.j(0,s,0)
else a.j(0,s,1)},
oL:function(a){var t,s,r,q="children",p="clauses"
if(a.B(q)){t=a.h(0,q)
a.c2(q)
s=u.z
r=P.am(P.bU(s,s))
r.j(0,q,t)
if(a.B(p))if(a.h(0,p) instanceof P.v)J.lc(a.h(0,p),0,r)
else{P.ed("Found a block with clauses that was not an array?  Block ID: "+H.a(a.h(0,"id"))+".  Replacing value.")
a.j(0,p,P.aV([],s))
J.ee(a.h(0,p),r)}else{a.j(0,p,P.aV([],s))
J.ee(a.h(0,p),r)}}else if(a.B(p)&&a.h(0,p) instanceof P.v){r=P.am(P.a7(["children",[]],u.N,u.j))
J.lc(a.h(0,p),0,r)}},
kG:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j="blocks",i="program",h="chains",g="children"
if(!a.B(j)||!(a.h(0,j) instanceof P.v))return
for(t=u.R,s=J.y(t.a(a.h(0,j))),r=u.b;s.m();)b.$1(r.a(s.gp()))
if(!a.B(i)||!(a.h(0,i) instanceof P.O))return
q=r.a(a.h(0,i))
if(!q.B(h)||!(q.h(0,h) instanceof P.v))return
for(s=J.y(t.a(q.h(0,h)));s.m();){p=r.a(s.gp())
if("blocks" in p.a&&p.h(0,j) instanceof P.v)for(o=J.y(t.a(p.h(0,j)));o.m();){n=r.a(o.gp())
c.$1(n)
m=n.a
if("children" in m&&n.h(0,g) instanceof P.v)for(l=J.y(t.a(n.h(0,g)));l.m();)c.$1(r.a(l.gp()))
if("clauses" in m&&n.h(0,"clauses") instanceof P.v)for(m=J.y(t.a(n.h(0,"clauses")));m.m();){k=r.a(m.gp())
if("children" in k.a&&k.h(0,g) instanceof P.v)for(l=J.y(t.a(k.h(0,g)));l.m();)c.$1(r.a(l.gp()))}}}},
kH:function(a,b,c){var t,s,r,q,p,o,n,m,l,k="blocks",j="children",i="program",h="chains"
if(!a.B(k)||!(a.h(0,k) instanceof P.v))return
for(t=u.R,s=J.y(t.a(a.h(0,k))),r=u.b;s.m();)b.$1(r.a(s.gp()))
for(s=J.y(t.a(a.h(0,k)));s.m();){q=r.a(s.gp())
p=q.a
if("children" in p&&q.h(0,j) instanceof P.v)for(o=J.y(t.a(q.h(0,j)));o.m();)c.$1(r.a(o.gp()))
if("clauses" in p&&q.h(0,"clauses") instanceof P.v)for(p=J.y(t.a(q.h(0,"clauses")));p.m();){n=r.a(p.gp())
if("children" in n.a&&n.h(0,j) instanceof P.v)for(o=J.y(t.a(n.h(0,j)));o.m();)c.$1(r.a(o.gp()))}}if(!a.B(i)||!(a.h(0,i) instanceof P.O))return
m=r.a(a.h(0,i))
if(!m.B(h)||!(m.h(0,h) instanceof P.v))return
for(t=J.y(t.a(m.h(0,h))),s=u.F;t.m();){l=s.a(t.gp())
for(p=new H.P(l,l.gk(l),H.h(l).i("P<k.E>"));p.m();)c.$1(r.a(p.d))}},
m_:function(a,b){var t="params",s="properties"
if(a.B(t)&&a.h(0,t) instanceof P.v)b.$1(u.F.a(a.h(0,t)))
if(a.B(s)&&a.h(0,s) instanceof P.v)b.$1(u.F.a(a.h(0,s)))},
b_:function b_(){},
h6:function h6(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
bS:function bS(a,b){var _=this
_.f=_.e=null
_.r=""
_.a=a
_.b=b
_.d=_.c=""},
i7:function i7(){},
i6:function i6(){},
i8:function i8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i9:function i9(){},
i5:function i5(){},
ia:function ia(){},
i4:function i4(){},
ib:function ib(a,b){this.a=a
this.b=b},
df:function df(a,b){var _=this
_.r=_.f=_.e=null
_.x=1
_.a=a
_.b=b
_.d=_.c=""},
bW:function bW(){},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(a){this.a=a},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a,b){this.a=a
this.b=b},
cs:function cs(a,b){var _=this
_.cx=0
_.cy=10
_.r=_.f=_.e=null
_.x=1
_.a=a
_.b=b
_.d=_.c=""},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iO:function iO(a,b){this.a=a
this.b=b},
bf:function bf(a,b){this.a=a
this.b=b},
cv:function cv(a,b,c){var _=this
_.e=null
_.f=""
_.r="smart-quote"
_.x=a
_.a=b
_.b=c
_.d=_.c=""},
iQ:function iQ(a){this.a=a},
iP:function iP(a){this.a=a},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function cC(a,b){var _=this
_.f=_.e=""
_.a=a
_.b=b
_.d=_.c=""},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(a){this.a=a},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b){this.a=a
this.b=b},
h8:function h8(){},
ha:function ha(a){this.a=a},
hb:function hb(){},
cX:function cX(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=""},
cb:function cb(a,b){this.a=a
this.b=b},
al:function al(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=null
_.c=b
_.f=_.e=_.d=null
_.r=c
_.x=d
_.y="shown"
_.z=0
_.Q=e
_.db=_.cy=_.cx=_.ch=null
_.dx=!1
_.dy=f
_.fr=g
_.fy=_.fx=null
_.id=_.go=!1
_.k3=_.k2=_.k1=null},
hf:function hf(a){this.a=a},
hi:function hi(a){this.a=a},
hj:function hj(){},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(a){this.a=a},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
aB:function aB(a,b){var _=this
_.d=_.c=0
_.e=a
_.r=_.f=null
_.x=!1
_.a=b
_.b=null},
hn:function hn(a){this.a=a},
ho:function ho(a){this.a=a},
aC:function aC(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.x=_.r=!1
_.a=e
_.b=null},
hq:function hq(a){this.a=a},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
eC:function eC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a,b){this.b=null
this.c=a
this.d=b},
hv:function hv(a,b){this.a=a
this.b=b},
hw:function hw(){},
d5:function d5(a,b){this.a=a
this.b=b},
ex:function ex(){var _=this
_.d=_.c=_.b=_.a=_.e=null},
db:function db(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ac:function ac(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c},
i3:function i3(a){this.a=a},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
id:function id(a,b){this.a=a
this.b=b},
ii:function ii(){},
il:function il(a,b){this.a=a
this.b=b},
ij:function ij(){},
ik:function ik(a,b){this.a=a
this.b=b},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
bq:function bq(a){this.a=a
this.c=this.b=null},
em:function em(a,b){this.a=a
this.b=b
this.d=null},
he:function he(a){this.a=a},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iG:function iG(a){this.a=a},
iE:function iE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bZ:function bZ(){},
el:function el(){this.c=this.b=null},
bn:function bn(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eO:function eO(a){this.b=a},
eP:function eP(a,b,c){this.b=a
this.c=b
this.d=c},
aO:function aO(a,b,c){var _=this
_.a=a
_.d=b
_.e=c
_.y=_.x=_.r=_.f=null},
fb:function fb(a,b){this.a=null
this.d=a
this.e=b},
bN:function bN(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null
_.x=c
_.z=_.y=null
_.Q=d
_.cx=_.ch=0
_.cy=null
_.db=e
_.dx=f
_.dy=g
_.fr=h
_.fx=i
_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=null},
hE:function hE(a){this.a=a},
hF:function hF(){},
hx:function hx(a){this.a=a},
hy:function hy(){},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hG:function hG(){},
k8:function k8(a){this.a=a},
it:function it(a){this.a=a},
ko:function ko(){},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a,b){this.a=a
this.b=b},
j0:function j0(a){this.a=a},
j3:function j3(){},
j4:function j4(){},
j6:function j6(){},
j5:function j5(){}}
var w=[C,H,J,P,W,Z,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kC.prototype={}
J.ai.prototype={
P:function(a,b){return a===b},
gA:function(a){return H.bY(a)},
n:function(a){return"Instance of '"+H.a(H.iM(a))+"'"},
bj:function(a,b){u.m.a(b)
throw H.b(P.lO(a,b.gdG(),b.gdO(),b.gdH()))}}
J.eF.prototype={
n:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$iw:1}
J.dh.prototype={
P:function(a,b){return null==b},
n:function(a){return"null"},
gA:function(a){return 0},
bj:function(a,b){return this.ed(a,u.m.a(b))},
$iu:1}
J.bt.prototype={
gA:function(a){return 0},
n:function(a){return String(a)}}
J.f0.prototype={}
J.bw.prototype={}
J.b2.prototype={
n:function(a){var t=a[$.kq()]
if(t==null)return this.eg(a)
return"JavaScript function for "+H.a(J.B(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib1:1}
J.G.prototype={
l:function(a,b){H.C(a).c.a(b)
if(!!a.fixed$length)H.D(P.x("add"))
a.push(b)},
ag:function(a,b,c){var t
H.C(a).c.a(c)
if(!!a.fixed$length)H.D(P.x("insert"))
t=a.length
if(b>t)throw H.b(P.ct(b,null))
a.splice(b,0,c)},
am:function(a,b,c){var t,s
H.C(a).i("d<1>").a(c)
if(!!a.fixed$length)H.D(P.x("insertAll"))
P.kE(b,0,a.length,"index")
if(!u.X.b(c))c=J.nE(c)
t=J.ab(c)
this.sk(a,a.length+t)
if(typeof b!=="number")return b.v()
s=b+t
this.T(a,s,a.length,a,b)
this.e9(a,b,s,c)},
L:function(a,b){var t
H.C(a).i("d<1>").a(b)
if(!!a.fixed$length)H.D(P.x("addAll"))
for(t=J.y(b);t.m();)a.push(t.gp())},
t:function(a,b){var t,s
H.C(a).i("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.b(P.aK(a))}},
F:function(a,b,c){var t=H.C(a)
return new H.T(a,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("T<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
aX:function(a,b){return H.ae(a,b,null,H.C(a).c)},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
gaD:function(a){if(a.length>0)return a[0]
throw H.b(H.eE())},
gdF:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.b(H.eE())},
T:function(a,b,c,d,e){var t,s,r,q,p=H.C(a)
p.i("d<1>").a(d)
if(!!a.immutable$list)H.D(P.x("setRange"))
P.lU(b,c,a.length)
t=c-b
if(t===0)return
P.aW(e,"skipCount")
if(u.j.b(d)){p.i("t<1>").a(d)
s=e
r=d}else{r=J.nC(d,e).ah(0,!1)
s=0}p=J.ay(r)
if(s+t>p.gk(r))throw H.b(H.lH())
if(s<b)for(q=t-1;q>=0;--q)a[b+q]=p.h(r,s+q)
else for(q=0;q<t;++q)a[b+q]=p.h(r,s+q)},
e9:function(a,b,c,d){return this.T(a,b,c,d,0)},
dj:function(a,b){var t,s
H.C(a).i("w(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(H.ar(b.$1(a[s])))return!0
if(a.length!==t)throw H.b(P.aK(a))}return!1},
cv:function(a,b){var t=H.C(a)
t.i("e(1,1)").a(b)
if(!!a.immutable$list)H.D(P.x("sort"))
H.or(a,b,t.c)},
G:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bI(a[t],b))return!0
return!1},
gM:function(a){return a.length===0},
gcf:function(a){return a.length!==0},
n:function(a){return P.is(a,"[","]")},
ah:function(a,b){var t=H.m(a.slice(0),H.C(a))
return t},
aq:function(a){return this.ah(a,!0)},
gw:function(a){return new J.aA(a,a.length,H.C(a).i("aA<1>"))},
gA:function(a){return H.bY(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.D(P.x("set length"))
if(b<0)throw H.b(P.a9(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.q(b)
if(!H.cM(b))throw H.b(H.bE(a,b))
if(b>=a.length||b<0)throw H.b(H.bE(a,b))
return a[b]},
j:function(a,b,c){H.q(b)
H.C(a).c.a(c)
if(!!a.immutable$list)H.D(P.x("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bE(a,b))
a[b]=c},
$in:1,
$id:1,
$it:1}
J.iu.prototype={}
J.aA.prototype={
gp:function(){return this.d},
m:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.b(H.A(r))
t=s.c
if(t>=q){s.scD(null)
return!1}s.scD(r[t]);++s.c
return!0},
scD:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
J.bs.prototype={
du:function(a,b){var t
H.k3(b)
if(typeof b!="number")throw H.b(H.b8(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbg(b)
if(this.gbg(a)===t)return 0
if(this.gbg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbg:function(a){return a===0?1/a<0:a<0},
bo:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.b(P.x(""+a+".toInt()"))},
fu:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.b(P.x(""+a+".ceil()"))},
c5:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.b(P.x(""+a+".floor()"))},
D:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.x(""+a+".round()"))},
hg:function(a,b){var t
if(b>20)throw H.b(P.a9(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gbg(a))return"-"+t
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
v:function(a,b){if(typeof b!="number")throw H.b(H.b8(b))
return a+b},
at:function(a,b){return a*b},
aA:function(a,b){return(a|0)===a?a/b|0:this.fk(a,b)},
fk:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.b(P.x("Result of truncating division is "+H.a(t)+": "+H.a(a)+" ~/ "+b))},
bV:function(a,b){var t
if(a>0)t=this.fg(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
fg:function(a,b){return b>31?0:a>>>b},
J:function(a,b){if(typeof b!="number")throw H.b(H.b8(b))
return a>b},
$iah:1,
$iY:1}
J.dg.prototype={$ie:1}
J.eG.prototype={}
J.bd.prototype={
dt:function(a,b){if(b<0)throw H.b(H.bE(a,b))
if(b>=a.length)H.D(H.bE(a,b))
return a.charCodeAt(b)},
b0:function(a,b){if(b>=a.length)throw H.b(H.bE(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.b(P.cU(b,null,null))
return a+b},
fN:function(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.ec(a,s-t)},
dS:function(a,b,c){P.kE(0,0,a.length,"startIndex")
return H.qi(a,b,c,0)},
eb:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
ab:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.ct(b,null))
if(b>c)throw H.b(P.ct(b,null))
if(c>a.length)throw H.b(P.ct(c,null))
return a.substring(b,c)},
ec:function(a,b){return this.ab(a,b,null)},
hf:function(a){return a.toLowerCase()},
aF:function(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(this.b0(q,0)===133){t=J.kB(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.dt(q,s)===133?J.o5(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
dY:function(a){var t,s
if(typeof a.trimLeft!="undefined"){t=a.trimLeft()
if(t.length===0)return t
s=this.b0(t,0)===133?J.kB(t,1):0}else{s=J.kB(a,0)
t=a}if(s===0)return t
if(s===t.length)return""
return t.substring(s)},
at:function(a,b){var t,s
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.H)
for(t=a,s="";!0;){if((b&1)===1)s=t+s
b=b>>>1
if(b===0)break
t+=t}return s},
fD:function(a,b,c){var t=a.length
if(c>t)throw H.b(P.a9(c,0,t,null,null))
return H.qg(a,b,c)},
du:function(a,b){var t
H.r(b)
if(typeof b!="string")throw H.b(H.b8(b))
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
if(b>=a.length||!1)throw H.b(H.bE(a,b))
return a[b]},
$if_:1,
$ic:1}
H.n.prototype={}
H.a8.prototype={
gw:function(a){var t=this
return new H.P(t,t.gk(t),H.h(t).i("P<a8.E>"))},
gM:function(a){return this.gk(this)===0},
br:function(a,b){return this.ef(0,H.h(this).i("w(a8.E)").a(b))},
F:function(a,b,c){var t=H.h(this)
return new H.T(this,t.q(c).i("1(a8.E)").a(b),t.i("@<a8.E>").q(c).i("T<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
ck:function(a,b){var t,s,r,q=this
H.h(q).i("a8.E(a8.E,a8.E)").a(b)
t=q.gk(q)
if(t===0)throw H.b(H.eE())
s=q.C(0,0)
for(r=1;r<t;++r){s=b.$2(s,q.C(0,r))
if(t!==q.gk(q))throw H.b(P.aK(q))}return s}}
H.dz.prototype={
geG:function(){var t=J.ab(this.a),s=this.c
if(s==null||s>t)return t
return s},
gfh:function(){var t=J.ab(this.a),s=this.b
if(typeof s!=="number")return s.J()
if(s>t)return t
return s},
gk:function(a){var t,s=J.ab(this.a),r=this.b
if(typeof r!=="number")return r.hl()
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
if(typeof t!=="number")return t.E()
return t-r},
C:function(a,b){var t,s=this,r=s.gfh()
if(typeof r!=="number")return r.v()
t=r+b
if(b>=0){r=s.geG()
if(typeof r!=="number")return H.a0(r)
r=t>=r}else r=!0
if(r)throw H.b(P.bc(b,s,"index",null,null))
return J.aT(s.a,t)},
aX:function(a,b){var t,s,r=this
P.aW(b,"count")
t=r.b
if(typeof t!=="number")return t.v()
s=t+b
t=r.c
if(t!=null&&s>=t)return new H.bR(r.$ti.i("bR<1>"))
return H.ae(r.a,s,t,r.$ti.c)},
he:function(a,b){var t,s,r,q=this
P.aW(b,"count")
t=q.c
s=q.b
if(t==null){if(typeof s!=="number")return s.v()
return H.ae(q.a,s,s+b,q.$ti.c)}else{if(typeof s!=="number")return s.v()
r=s+b
if(t<r)return q
return H.ae(q.a,s,r,q.$ti.c)}},
ah:function(a,b){var t,s,r,q,p,o=this,n=o.b,m=o.a,l=J.ay(m),k=l.gk(m),j=o.c
if(j!=null&&j<k)k=j
if(typeof k!=="number")return k.E()
if(typeof n!=="number")return H.a0(n)
t=k-n
if(t<0)t=0
s=o.$ti.i("G<1>")
if(b){r=H.m([],s)
C.a.sk(r,t)}else{q=new Array(t)
q.fixed$length=Array
r=H.m(q,s)}for(p=0;p<t;++p){C.a.j(r,p,l.C(m,n+p))
if(l.gk(m)<k)throw H.b(P.aK(o))}return r},
aq:function(a){return this.ah(a,!0)}}
H.P.prototype={
gp:function(){return this.d},
m:function(){var t,s=this,r=s.a,q=J.ay(r),p=q.gk(r)
if(s.b!==p)throw H.b(P.aK(r))
t=s.c
if(t>=p){s.saJ(null)
return!1}s.saJ(q.C(r,t));++s.c
return!0},
saJ:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
H.aF.prototype={
gw:function(a){var t=H.h(this)
return new H.a4(J.y(this.a),this.b,t.i("@<1>").q(t.Q[1]).i("a4<1,2>"))},
gk:function(a){return J.ab(this.a)},
C:function(a,b){return this.b.$1(J.aT(this.a,b))}}
H.aU.prototype={$in:1}
H.a4.prototype={
m:function(){var t=this,s=t.b
if(s.m()){t.saJ(t.c.$1(s.gp()))
return!0}t.saJ(null)
return!1},
gp:function(){return this.a},
saJ:function(a){this.a=this.$ti.Q[1].a(a)}}
H.T.prototype={
gk:function(a){return J.ab(this.a)},
C:function(a,b){return this.b.$1(J.aT(this.a,b))}}
H.af.prototype={
gw:function(a){return new H.c2(J.y(this.a),this.b,this.$ti.i("c2<1>"))},
F:function(a,b,c){var t=this.$ti
return new H.aF(this,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("aF<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)}}
H.c2.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(H.ar(s.$1(t.gp())))return!0
return!1},
gp:function(){return this.a.gp()}}
H.c1.prototype={
gw:function(a){return new H.dB(J.y(this.a),this.b,H.h(this).i("dB<1>"))}}
H.d8.prototype={
gk:function(a){var t=J.ab(this.a),s=this.b
if(t>s)return s
return t},
$in:1}
H.dB.prototype={
m:function(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gp:function(){if(this.b<0)return null
return this.a.gp()}}
H.c_.prototype={
gw:function(a){return new H.dx(J.y(this.a),this.b,H.h(this).i("dx<1>"))}}
H.d7.prototype={
gk:function(a){var t=J.ab(this.a)-this.b
if(t>=0)return t
return 0},
$in:1}
H.dx.prototype={
m:function(){var t,s
for(t=this.a,s=0;s<this.b;++s)t.m()
this.b=0
return t.m()},
gp:function(){return this.a.gp()}}
H.bR.prototype={
gw:function(a){return C.A},
gk:function(a){return 0},
C:function(a,b){throw H.b(P.a9(b,0,0,"index",null))},
F:function(a,b,c){this.$ti.q(c).i("1(2)").a(b)
return new H.bR(c.i("bR<0>"))},
R:function(a,b){return this.F(a,b,u.z)},
ah:function(a,b){var t=new Array(0)
t.fixed$length=Array
t=H.m(t,this.$ti.i("G<1>"))
return t}}
H.da.prototype={
m:function(){return!1},
gp:function(){return null},
$iR:1}
H.Q.prototype={
sk:function(a,b){throw H.b(P.x("Cannot change the length of a fixed-length list"))},
l:function(a,b){H.X(a).i("Q.E").a(b)
throw H.b(P.x("Cannot add to a fixed-length list"))},
ag:function(a,b,c){H.X(a).i("Q.E").a(c)
throw H.b(P.x("Cannot add to a fixed-length list"))}}
H.cz.prototype={
gA:function(a){var t=this._hashCode
if(t!=null)return t
t=536870911&664597*J.aa(this.a)
this._hashCode=t
return t},
n:function(a){return'Symbol("'+H.a(this.a)+'")'},
P:function(a,b){if(b==null)return!1
return b instanceof H.cz&&this.a==b.a},
$iaY:1}
H.d1.prototype={}
H.d0.prototype={
gM:function(a){return this.gk(this)===0},
n:function(a){return P.iz(this)},
j:function(a,b,c){var t=H.h(this)
t.c.a(b)
t.Q[1].a(c)
return H.nP()},
aE:function(a,b,c,d){var t=P.bU(c,d)
this.t(0,new H.hH(this,H.h(this).q(c).q(d).i("cn<1,2>(3,4)").a(b),t))
return t},
R:function(a,b){return this.aE(a,b,u.z,u.z)},
$ian:1}
H.hH.prototype={
$2:function(a,b){var t=H.h(this.a),s=this.b.$2(t.c.a(a),t.Q[1].a(b))
this.c.j(0,C.u.gfW(s),s.ghh(s))},
$S:function(){return H.h(this.a).i("u(1,2)")}}
H.d2.prototype={
gk:function(a){return this.a},
H:function(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.H(b))return null
return this.cS(b)},
cS:function(a){return this.b[H.r(a)]},
t:function(a,b){var t,s,r,q,p=H.h(this)
p.i("~(1,2)").a(b)
t=this.c
for(s=t.length,p=p.Q[1],r=0;r<s;++r){q=t[r]
b.$2(q,p.a(this.cS(q)))}},
gI:function(){return new H.dD(this,H.h(this).i("dD<1>"))}}
H.dD.prototype={
gw:function(a){var t=this.a.c
return new J.aA(t,t.length,H.C(t).i("aA<1>"))},
gk:function(a){return this.a.c.length}}
H.eH.prototype={
gdG:function(){var t=this.a
return t},
gdO:function(){var t,s,r,q,p=this
if(p.c===1)return C.v
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return C.v
r=[]
for(q=0;q<s;++q){if(q>=t.length)return H.o(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gdH:function(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.x
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return C.x
p=new H.a6(u.eo)
for(o=0;o<s;++o){if(o>=t.length)return H.o(t,o)
n=t[o]
m=q+o
if(m<0||m>=r.length)return H.o(r,m)
p.j(0,new H.cz(n),r[m])}return new H.d1(p,u.gF)},
$ilG:1}
H.iL.prototype={
$2:function(a,b){var t
H.r(a)
t=this.a
t.b=t.b+"$"+H.a(a)
C.a.l(this.b,a)
C.a.l(this.c,b);++t.a},
$S:64}
H.iY.prototype={
Z:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
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
H.eX.prototype={
n:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.a(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.eJ.prototype={
n:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.a(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.a(s.a)+")"
return r+q+"' on '"+t+"' ("+H.a(s.a)+")"}}
H.fe.prototype={
n:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.kp.prototype={
$1:function(a){if(u.bU.b(a))if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.e_.prototype={
n:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iaq:1}
H.bM.prototype={
n:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.n2(s==null?"unknown":s)+"'"},
$ib1:1,
ghk:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fa.prototype={}
H.f3.prototype={
n:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.n2(t)+"'"}}
H.cc.prototype={
P:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.cc))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gA:function(a){var t,s=this.c
if(s==null)t=H.bY(this.a)
else t=typeof s!=="object"?J.aa(s):H.bY(s)
return(t^H.bY(this.b))>>>0},
n:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.a(H.iM(t))+"'")}}
H.f1.prototype={
n:function(a){return"RuntimeError: "+H.a(this.a)}}
H.fg.prototype={
n:function(a){return"Assertion failed: "+P.bp(this.a)}}
H.a6.prototype={
gk:function(a){return this.a},
gM:function(a){return this.a===0},
gI:function(){return new H.ad(this,H.h(this).i("ad<1>"))},
gar:function(a){var t=H.h(this)
return H.lN(new H.ad(this,t.i("ad<1>")),new H.iv(this),t.c,t.Q[1])},
H:function(a){var t,s,r=this
if(typeof a=="string"){t=r.b
if(t==null)return!1
return r.cO(t,a)}else if(typeof a=="number"&&(a&0x3ffffff)===a){s=r.c
if(s==null)return!1
return r.cO(s,a)}else return r.fR(a)},
fR:function(a){var t=this.d
if(t==null)return!1
return this.bf(this.b2(t,J.aa(a)&0x3ffffff),a)>=0},
h:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.b3(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.b3(q,b)
r=s==null?o:s.b
return r}else return p.fS(b)},
fS:function(a){var t,s,r=this.d
if(r==null)return null
t=this.b2(r,J.aa(a)&0x3ffffff)
s=this.bf(t,a)
if(s<0)return null
return t[s].b},
j:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.h(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.cF(t==null?n.b=n.bP():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.cF(s==null?n.c=n.bP():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.bP()
q=J.aa(b)&0x3ffffff
p=n.b2(r,q)
if(p==null)n.bU(r,q,[n.bQ(b,c)])
else{o=n.bf(p,b)
if(o>=0)p[o].b=c
else p.push(n.bQ(b,c))}}},
a9:function(a,b){var t=this.fT(b)
return t},
fT:function(a){var t,s,r,q,p=this,o=p.d
if(o==null)return null
t=J.aa(a)&0x3ffffff
s=p.b2(o,t)
r=p.bf(s,a)
if(r<0)return null
q=s.splice(r,1)[0]
p.er(q)
if(s.length===0)p.cR(o,t)
return q.b},
bc:function(a){var t=this
if(t.a>0){t.b=t.c=t.d=t.e=t.f=null
t.a=0
t.bO()}},
t:function(a,b){var t,s,r=this
H.h(r).i("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.b(P.aK(r))
t=t.c}},
cF:function(a,b,c){var t,s=this,r=H.h(s)
r.c.a(b)
r.Q[1].a(c)
t=s.b3(a,b)
if(t==null)s.bU(a,b,s.bQ(b,c))
else t.b=c},
bO:function(){this.r=this.r+1&67108863},
bQ:function(a,b){var t,s=this,r=H.h(s),q=new H.iy(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{t=s.f
q.d=t
s.f=t.c=q}++s.a
s.bO()
return q},
er:function(a){var t=this,s=a.d,r=a.c
if(s==null)t.e=r
else s.c=r
if(r==null)t.f=s
else r.d=s;--t.a
t.bO()},
bf:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bI(a[s].a,b))return s
return-1},
n:function(a){return P.iz(this)},
b3:function(a,b){return a[b]},
b2:function(a,b){return a[b]},
bU:function(a,b,c){a[b]=c},
cR:function(a,b){delete a[b]},
cO:function(a,b){return this.b3(a,b)!=null},
bP:function(){var t="<non-identifier-key>",s=Object.create(null)
this.bU(s,t,s)
this.cR(s,t)
return s},
$ilL:1}
H.iv.prototype={
$1:function(a){var t=this.a
return t.h(0,H.h(t).c.a(a))},
$S:function(){return H.h(this.a).i("2(1)")}}
H.iy.prototype={}
H.ad.prototype={
gk:function(a){return this.a.a},
gM:function(a){return this.a.a===0},
gw:function(a){var t=this.a,s=new H.dl(t,t.r,this.$ti.i("dl<1>"))
s.c=t.e
return s}}
H.dl.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.aK(s))
else{s=t.c
if(s==null){t.scE(null)
return!1}else{t.scE(s.a)
t.c=t.c.c
return!0}}},
scE:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
H.kh.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.ki.prototype={
$2:function(a,b){return this.a(a,b)},
$S:39}
H.kj.prototype={
$1:function(a){return this.a(H.r(a))},
$S:38}
H.eI.prototype={
n:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$if_:1}
H.f6.prototype={
h:function(a,b){H.q(b)
if(b!==0)H.D(P.ct(b,null))
return this.c},
$idq:1}
H.jS.prototype={
m:function(){var t,s,r=this,q=r.c,p=r.b,o=p.length,n=r.a,m=n.length
if(q+o>m){r.d=null
return!1}t=n.indexOf(p,q)
if(t<0){r.c=m+1
r.d=null
return!1}s=t+o
r.d=new H.f6(t,p)
r.c=s===r.c?s+1:s
return!0},
gp:function(){return this.d},
$iR:1}
H.bV.prototype={
f2:function(a,b,c,d){var t=P.a9(b,0,c,d,null)
throw H.b(t)},
cI:function(a,b,c,d){if(b>>>0!==b||b>c)this.f2(a,b,c,d)},
$iaZ:1}
H.at.prototype={
gk:function(a){return a.length},
dd:function(a,b,c,d,e){var t,s,r=a.length
this.cI(a,b,r,"start")
this.cI(a,c,r,"end")
if(b>c)throw H.b(P.a9(b,0,c,null,null))
t=c-b
s=d.length
if(s-e<t)throw H.b(P.c0("Not enough elements"))
if(e!==0||s!==t)d=d.subarray(e,e+t)
a.set(d,b)},
$iZ:1}
H.bu.prototype={
h:function(a,b){H.q(b)
H.bk(b,a,a.length)
return a[b]},
j:function(a,b,c){H.q(b)
H.pd(c)
H.bk(b,a,a.length)
a[b]=c},
T:function(a,b,c,d,e){u.bM.a(d)
if(u.d4.b(d)){this.dd(a,b,c,d,e)
return}this.cA(a,b,c,d,e)},
$in:1,
$id:1,
$it:1}
H.aG.prototype={
j:function(a,b,c){H.q(b)
H.q(c)
H.bk(b,a,a.length)
a[b]=c},
T:function(a,b,c,d,e){u.gS.a(d)
if(u.bd.b(d)){this.dd(a,b,c,d,e)
return}this.cA(a,b,c,d,e)},
$in:1,
$id:1,
$it:1}
H.eQ.prototype={
h:function(a,b){H.q(b)
H.bk(b,a,a.length)
return a[b]}}
H.eR.prototype={
h:function(a,b){H.q(b)
H.bk(b,a,a.length)
return a[b]}}
H.eS.prototype={
h:function(a,b){H.q(b)
H.bk(b,a,a.length)
return a[b]}}
H.eT.prototype={
h:function(a,b){H.q(b)
H.bk(b,a,a.length)
return a[b]}}
H.eU.prototype={
h:function(a,b){H.q(b)
H.bk(b,a,a.length)
return a[b]}}
H.ds.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
H.bk(b,a,a.length)
return a[b]}}
H.eV.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
H.bk(b,a,a.length)
return a[b]}}
H.dS.prototype={}
H.dT.prototype={}
H.dU.prototype={}
H.dV.prototype={}
H.aN.prototype={
i:function(a){return H.fQ(v.typeUniverse,this,a)},
q:function(a){return H.pb(v.typeUniverse,this,a)}}
H.fu.prototype={}
H.fs.prototype={
n:function(a){return this.a}}
H.e4.prototype={}
P.ja.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:26}
P.j9.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:52}
P.jb.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:1}
P.jc.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:1}
P.jW.prototype={
eq:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cR(new P.jX(this,b),0),a)
else throw H.b(P.x("`setTimeout()` not found."))}}
P.jX.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.ag.prototype={}
P.b6.prototype={
ad:function(){},
ae:function(){},
saO:function(a){this.dy=this.$ti.a(a)},
sb7:function(a){this.fr=this.$ti.a(a)}}
P.by.prototype={
gb4:function(){return this.c<4},
eH:function(){var t=this.r
if(t!=null)return t
return this.r=new P.a3($.H,u._)},
d9:function(a){var t,s
H.h(this).i("b6<1>").a(a)
t=a.fr
s=a.dy
if(t==null)this.scT(s)
else t.saO(s)
if(s==null)this.scZ(t)
else s.sb7(t)
a.sb7(a)
a.saO(a)},
bW:function(a,b,c,d){var t,s,r,q,p,o=this,n=H.h(o)
n.i("~(1)").a(a)
u.M.a(c)
if((o.c&4)!==0){if(c==null)c=P.my()
n=new P.cG($.H,c,n.i("cG<1>"))
n.da()
return n}t=$.H
s=d?1:0
r=n.i("b6<1>")
q=new P.b6(o,t,s,r)
q.cC(a,b,c,d,n.c)
q.sb7(q)
q.saO(q)
r.a(q)
q.dx=o.c&1
p=o.e
o.scZ(q)
q.saO(null)
q.sb7(p)
if(p==null)o.scT(q)
else p.saO(q)
if(o.d==o.e)P.mu(o.a)
return q},
f6:function(a){var t=this,s=H.h(t)
a=s.i("b6<1>").a(s.i("a2<1>").a(a))
if(a.dy===a)return null
s=a.dx
if((s&2)!==0)a.dx=s|4
else{t.d9(a)
if((t.c&2)===0&&t.d==null)t.bE()}return null},
b_:function(){if((this.c&4)!==0)return new P.b3("Cannot add new events after calling close")
return new P.b3("Cannot add new events while doing an addStream")},
l:function(a,b){var t=this
H.h(t).c.a(b)
if(!t.gb4())throw H.b(t.b_())
t.ba(b)},
c0:function(a){var t,s=this
if((s.c&4)!==0)return s.r
if(!s.gb4())throw H.b(s.b_())
s.c|=4
t=s.eH()
s.az()
return t},
cU:function(a){var t,s,r,q,p=this
H.h(p).i("~(N<1>)").a(a)
t=p.c
if((t&2)!==0)throw H.b(P.c0("Cannot fire new event. Controller is already firing an event"))
s=p.d
if(s==null)return
r=t&1
p.c=t^3
for(;s!=null;){t=s.dx
if((t&1)===r){s.dx=t|2
a.$1(s)
t=s.dx^=1
q=s.dy
if((t&4)!==0)p.d9(s)
s.dx&=4294967293
s=q}else s=s.dy}p.c&=4294967293
if(p.d==null)p.bE()},
bE:function(){var t=this
if((t.c&4)!==0&&t.r.a===0)t.r.cG(null)
P.mu(t.b)},
scT:function(a){this.d=H.h(this).i("b6<1>").a(a)},
scZ:function(a){this.e=H.h(this).i("b6<1>").a(a)},
$if4:1,
$imb:1,
$ibi:1,
$ibh:1}
P.e2.prototype={
gb4:function(){return P.by.prototype.gb4.call(this)&&(this.c&2)===0},
b_:function(){if((this.c&2)!==0)return new P.b3("Cannot fire new event. Controller is already firing an event")
return this.ei()},
ba:function(a){var t,s=this
s.$ti.c.a(a)
t=s.d
if(t==null)return
if(t===s.e){s.c|=2
t.aK(a)
s.c&=4294967293
if(s.d==null)s.bE()
return}s.cU(new P.jT(s,a))},
az:function(){var t=this
if(t.d!=null)t.cU(new P.jU(t))
else t.r.cG(null)}}
P.jT.prototype={
$1:function(a){this.a.$ti.i("N<1>").a(a).aK(this.b)},
$S:function(){return this.a.$ti.i("u(N<1>)")}}
P.jU.prototype={
$1:function(a){this.a.$ti.i("N<1>").a(a).cJ()},
$S:function(){return this.a.$ti.i("u(N<1>)")}}
P.aD.prototype={}
P.iq.prototype={
$0:function(){var t,s,r,q,p
try{this.a.b1(this.b.$0())}catch(r){t=H.L(r)
s=H.aS(r)
q=t
p=s
if(p==null)p=P.lh(q)
this.a.aM(q,p)}},
$S:1}
P.fk.prototype={}
P.e3.prototype={}
P.c3.prototype={
fY:function(a){if((this.c&15)!==6)return!0
return this.b.b.co(u.bN.a(this.d),a.a,u.y,u.K)},
fP:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.ag.b(t))return q.a(p.hc(t,a.a,a.b,s,r,u.l))
else return q.a(p.co(u.bI.a(t),a.a,s,r))}}
P.a3.prototype={
dX:function(a,b,c){var t,s,r,q=this.$ti
q.q(c).i("1/(2)").a(a)
t=$.H
if(t!==C.f){c.i("@<0/>").q(q.c).i("1(2)").a(a)
if(b!=null)b=P.px(b,t)}s=new P.a3($.H,c.i("a3<0>"))
r=b==null?1:3
this.bC(new P.c3(s,r,a,b,q.i("@<1>").q(c).i("c3<1,2>")))
return s},
dW:function(a,b){return this.dX(a,null,b)},
e2:function(a){var t,s
u.fO.a(a)
t=this.$ti
s=new P.a3($.H,t)
this.bC(new P.c3(s,8,a,null,t.i("@<1>").q(t.c).i("c3<1,2>")))
return s},
ff:function(a){this.$ti.c.a(a)
this.a=4
this.c=a},
bC:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.x.a(s.c)
s.c=a}else{if(r===2){t=u._.a(s.c)
r=t.a
if(r<4){t.bC(a)
return}s.a=r
s.c=t.c}P.cP(null,null,s.b,u.M.a(new P.jl(s,a)))}},
d6:function(a){var t,s,r,q,p,o=this,n={}
n.a=a
if(a==null)return
t=o.a
if(t<=1){s=u.x.a(o.c)
r=o.c=a
if(s!=null){for(;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=u._.a(o.c)
t=p.a
if(t<4){p.d6(a)
return}o.a=t
o.c=p.c}n.a=o.b9(a)
P.cP(null,null,o.b,u.M.a(new P.js(n,o)))}},
b8:function(){var t=u.x.a(this.c)
this.c=null
return this.b9(t)},
b9:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
b1:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("aD<1>").b(a))if(r.b(a))P.jn(a,s)
else P.m4(a,s)
else{t=s.b8()
r.c.a(a)
s.a=4
s.c=a
P.cJ(s,t)}},
aM:function(a,b){var t,s,r=this
u.l.a(b)
t=r.b8()
s=P.h4(a,b)
r.a=8
r.c=s
P.cJ(r,t)},
eC:function(a){return this.aM(a,null)},
cG:function(a){var t=this,s=t.$ti
s.i("1/").a(a)
if(s.i("aD<1>").b(a)){t.ew(a)
return}t.a=1
P.cP(null,null,t.b,u.M.a(new P.jm(t,a)))},
ew:function(a){var t=this,s=t.$ti
s.i("aD<1>").a(a)
if(s.b(a)){if(a.ghm()){t.a=1
P.cP(null,null,t.b,u.M.a(new P.jr(t,a)))}else P.jn(a,t)
return}P.m4(a,t)},
$iaD:1}
P.jl.prototype={
$0:function(){P.cJ(this.a,this.b)},
$S:1}
P.js.prototype={
$0:function(){P.cJ(this.b,this.a.a)},
$S:1}
P.jo.prototype={
$1:function(a){var t=this.a
t.a=0
t.b1(a)},
$S:26}
P.jp.prototype={
$2:function(a,b){u.l.a(b)
this.a.aM(a,b)},
$1:function(a){return this.$2(a,null)},
$C:"$2",
$D:function(){return[null]},
$S:46}
P.jq.prototype={
$0:function(){this.a.aM(this.b,this.c)},
$S:1}
P.jm.prototype={
$0:function(){var t=this.a,s=t.$ti.c.a(this.b),r=t.b8()
t.a=4
t.c=s
P.cJ(t,r)},
$S:1}
P.jr.prototype={
$0:function(){P.jn(this.b,this.a)},
$S:1}
P.jv.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.c
m=r.b.b.dU(u.fO.a(r.d),u.z)}catch(q){t=H.L(q)
s=H.aS(q)
if(n.d){r=u.n.a(n.a.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.b
if(r)p.b=u.n.a(n.a.a.c)
else p.b=P.h4(t,s)
p.a=!0
return}if(u.b9.b(m)){if(m instanceof P.a3&&m.a>=4){if(m.a===8){r=n.b
r.b=u.n.a(m.c)
r.a=!0}return}o=n.a.a
r=n.b
r.b=m.dW(new P.jw(o),u.z)
r.a=!1}},
$S:0}
P.jw.prototype={
$1:function(a){return this.a},
$S:51}
P.ju.prototype={
$0:function(){var t,s,r,q,p,o,n,m=this
try{r=m.b
q=r.$ti
p=q.c
o=p.a(m.c)
m.a.b=r.b.b.co(q.i("2/(1)").a(r.d),o,q.i("2/"),p)}catch(n){t=H.L(n)
s=H.aS(n)
r=m.a
r.b=P.h4(t,s)
r.a=!0}},
$S:0}
P.jt.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.c
if(H.ar(q.fY(t))&&q.e!=null){p=l.b
p.b=q.fP(t)
p.a=!1}}catch(o){s=H.L(o)
r=H.aS(o)
q=u.n.a(l.a.a.c)
p=q.a
n=s
m=l.b
if(p==null?n==null:p===n)m.b=q
else m.b=P.h4(s,r)
m.a=!0}},
$S:0}
P.fh.prototype={}
P.U.prototype={
R:function(a,b){var t=H.h(this)
return new P.dQ(t.i("@(U.T)").a(b),this,t.i("dQ<U.T,@>"))},
gk:function(a){var t={},s=new P.a3($.H,u.fJ)
t.a=0
this.X(new P.iS(t,this),!0,new P.iT(t,s),s.geB())
return s}}
P.iS.prototype={
$1:function(a){H.h(this.b).i("U.T").a(a);++this.a.a},
$S:function(){return H.h(this.b).i("u(U.T)")}}
P.iT.prototype={
$0:function(){this.b.b1(this.a.a)},
$C:"$0",
$R:0,
$S:1}
P.a2.prototype={}
P.f5.prototype={}
P.cE.prototype={
gA:function(a){return(H.bY(this.a)^892482866)>>>0},
P:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cE&&b.a===this.a}}
P.cF.prototype={
bR:function(){return this.x.f6(this)},
ad:function(){H.h(this.x).i("a2<1>").a(this)},
ae:function(){H.h(this.x).i("a2<1>").a(this)}}
P.N.prototype={
cC:function(a,b,c,d,e){var t,s=this,r=H.h(s)
r.i("~(N.T)").a(a)
s.sev(u.gu.q(r.i("N.T")).i("1(2)").a(a))
t=b==null?P.pI():b
if(u.da.b(t))s.b=s.d.dP(t,u.z,u.K,u.l)
else if(u.d5.b(t))s.b=u.bI.a(t)
else H.D(P.bm("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
r=u.M
r.a(c)
s.sf4(r.a(c==null?P.my():c))},
ci:function(a){var t,s,r=this,q=r.e
if((q&8)!==0)return
t=(q+128|4)>>>0
r.e=t
if(q<128&&r.r!=null){s=r.r
if(s.a===1)s.a=3}if((q&4)===0&&(t&32)===0)r.cY(r.gb5())},
cm:function(){var t=this,s=t.e
if((s&8)!==0)return
if(s>=128){s=t.e=s-128
if(s<128)if((s&64)!==0&&t.r.c!=null)t.r.bx(t)
else{s=(s&4294967291)>>>0
t.e=s
if((s&32)===0)t.cY(t.gb6())}}},
Y:function(){var t=this,s=(t.e&4294967279)>>>0
t.e=s
if((s&8)===0)t.bF()
s=t.f
return s==null?$.fZ():s},
bF:function(){var t,s=this,r=s.e=(s.e|8)>>>0
if((r&64)!==0){t=s.r
if(t.a===1)t.a=3}if((r&32)===0)s.sbS(null)
s.f=s.bR()},
aK:function(a){var t,s=this,r=H.h(s)
r.i("N.T").a(a)
t=s.e
if((t&8)!==0)return
if(t<32)s.ba(a)
else s.bD(new P.dE(a,r.i("dE<N.T>")))},
aZ:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dc(a,b)
else this.bD(new P.fp(a,b))},
cJ:function(){var t=this,s=t.e
if((s&8)!==0)return
s=(s|2)>>>0
t.e=s
if(s<32)t.az()
else t.bD(C.I)},
ad:function(){},
ae:function(){},
bR:function(){return null},
bD:function(a){var t=this,s=H.h(t).i("e0<N.T>"),r=s.a(t.r)
if(r==null){r=new P.e0(s)
t.sbS(r)}r.l(0,a)
s=t.e
if((s&64)===0){s=(s|64)>>>0
t.e=s
if(s<128)t.r.bx(t)}},
ba:function(a){var t,s=this,r=H.h(s).i("N.T")
r.a(a)
t=s.e
s.e=(t|32)>>>0
s.d.cp(s.a,a,r)
s.e=(s.e&4294967263)>>>0
s.bH((t&4)!==0)},
dc:function(a,b){var t=this,s=t.e,r=new P.je(t,a,b)
if((s&1)!==0){t.e=(s|16)>>>0
t.bF()
s=t.f
if(s!=null&&s!==$.fZ())s.e2(r)
else r.$0()}else{r.$0()
t.bH((s&4)!==0)}},
az:function(){var t,s=this,r=new P.jd(s)
s.bF()
s.e=(s.e|16)>>>0
t=s.f
if(t!=null&&t!==$.fZ())t.e2(r)
else r.$0()},
cY:function(a){var t,s=this
u.M.a(a)
t=s.e
s.e=(t|32)>>>0
a.$0()
s.e=(s.e&4294967263)>>>0
s.bH((t&4)!==0)},
bH:function(a){var t,s,r=this,q=r.e
if((q&64)!==0&&r.r.c==null){q=r.e=(q&4294967231)>>>0
if((q&4)!==0)if(q<128){t=r.r
t=t==null||t.c==null}else t=!1
else t=!1
if(t){q=(q&4294967291)>>>0
r.e=q}}for(;!0;a=s){if((q&8)!==0){r.sbS(null)
return}s=(q&4)!==0
if(a===s)break
r.e=(q^32)>>>0
if(s)r.ad()
else r.ae()
q=(r.e&4294967263)>>>0
r.e=q}if((q&64)!==0&&q<128)r.r.bx(r)},
sev:function(a){this.a=H.h(this).i("~(N.T)").a(a)},
sf4:function(a){this.c=u.M.a(a)},
sbS:function(a){this.r=H.h(this).i("dW<N.T>").a(a)},
$ia2:1,
$ibi:1,
$ibh:1}
P.je.prototype={
$0:function(){var t,s,r,q=this.a,p=q.e
if((p&8)!==0&&(p&16)===0)return
q.e=(p|32)>>>0
t=q.b
p=this.b
s=u.K
r=q.d
if(u.da.b(t))r.hd(t,p,this.c,s,u.l)
else r.cp(u.d5.a(t),p,s)
q.e=(q.e&4294967263)>>>0},
$S:0}
P.jd.prototype={
$0:function(){var t=this.a,s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.cn(t.c)
t.e=(t.e&4294967263)>>>0},
$S:0}
P.cK.prototype={
X:function(a,b,c,d){var t=this.$ti
t.i("~(1)").a(a)
u.M.a(c)
return this.a.bW(t.i("~(1)").a(a),d,c,!0===b)},
u:function(a){return this.X(a,null,null,null)},
bi:function(a,b,c){return this.X(a,null,b,c)}}
P.bz.prototype={
saT:function(a){this.a=u.gt.a(a)},
gaT:function(){return this.a}}
P.dE.prototype={
cj:function(a){this.$ti.i("bh<1>").a(a).ba(this.b)}}
P.fp.prototype={
cj:function(a){a.dc(this.b,this.c)}}
P.fo.prototype={
cj:function(a){a.az()},
gaT:function(){return null},
saT:function(a){throw H.b(P.c0("No events after a done."))},
$ibz:1}
P.dW.prototype={
bx:function(a){var t,s=this
s.$ti.i("bh<1>").a(a)
t=s.a
if(t===1)return
if(t>=1){s.a=1
return}P.mY(new P.jG(s,a))
s.a=1}}
P.jG.prototype={
$0:function(){var t,s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
t=q.$ti.i("bh<1>").a(this.b)
s=q.b
r=s.gaT()
q.b=r
if(r==null)q.c=null
s.cj(t)},
$S:1}
P.e0.prototype={
l:function(a,b){var t,s=this
u.gt.a(b)
t=s.c
if(t==null)s.b=s.c=b
else{t.saT(b)
s.c=b}}}
P.cG.prototype={
da:function(){var t=this
if((t.b&2)!==0)return
P.cP(null,null,t.a,u.M.a(t.gfe()))
t.b=(t.b|2)>>>0},
ci:function(a){this.b+=4},
cm:function(){var t=this.b
if(t>=4){t=this.b=t-4
if(t<4&&(t&1)===0)this.da()}},
Y:function(){return $.fZ()},
az:function(){var t=this,s=t.b=(t.b&4294967293)>>>0
if(s>=4)return
t.b=(s|1)>>>0
t.a.cn(t.c)},
$ia2:1}
P.dH.prototype={
X:function(a,b,c,d){var t,s,r,q=this.$ti
q.i("~(2)").a(a)
u.M.a(c)
b=!0===b
t=q.Q[1]
s=$.H
r=b?1:0
q=new P.cI(this,s,r,q.i("@<1>").q(t).i("cI<1,2>"))
q.cC(a,d,c,b,t)
q.sde(this.a.bi(q.geL(),q.geO(),q.geZ()))
return q},
bi:function(a,b,c){return this.X(a,null,b,c)}}
P.cI.prototype={
aK:function(a){this.$ti.Q[1].a(a)
if((this.e&2)!==0)return
this.ej(a)},
aZ:function(a,b){if((this.e&2)!==0)return
this.ek(a,b)},
ad:function(){var t=this.y
if(t==null)return
t.ci(0)},
ae:function(){var t=this.y
if(t==null)return
t.cm()},
bR:function(){var t=this.y
if(t!=null){this.sde(null)
return t.Y()}return null},
eM:function(a){this.x.eN(this.$ti.c.a(a),this)},
f_:function(a,b){u.l.a(b)
this.x.$ti.i("bi<2>").a(this).aZ(a,b)},
eP:function(){this.x.$ti.i("bi<2>").a(this).cJ()},
sde:function(a){this.y=this.$ti.i("a2<1>").a(a)}}
P.dQ.prototype={
eN:function(a,b){var t,s,r,q,p=this.$ti
p.c.a(a)
p.i("bi<2>").a(b)
t=null
try{t=this.b.$1(a)}catch(q){s=H.L(q)
r=H.aS(q)
b.aZ(s,r)
return}b.aK(t)}}
P.cW.prototype={
n:function(a){return H.a(this.a)},
$iK:1,
gaY:function(){return this.b}}
P.fR.prototype={$im0:1}
P.ka.prototype={
$0:function(){var t,s=this.a,r=s.b
if(r==null)throw H.b(s.a)
t=H.b(s.a)
t.stack=r.n(0)
throw t},
$S:1}
P.fG.prototype={
cn:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.f===$.H){a.$0()
return}P.mr(q,q,this,a,u.o)}catch(r){t=H.L(r)
s=H.aS(r)
P.cO(q,q,this,t,u.l.a(s))}},
cp:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.f===$.H){a.$1(b)
return}P.mt(q,q,this,a,b,u.o,c)}catch(r){t=H.L(r)
s=H.aS(r)
P.cO(q,q,this,t,u.l.a(s))}},
hd:function(a,b,c,d,e){var t,s,r,q=null
d.i("@<0>").q(e).i("~(1,2)").a(a)
d.a(b)
e.a(c)
try{if(C.f===$.H){a.$2(b,c)
return}P.ms(q,q,this,a,b,c,u.o,d,e)}catch(r){t=H.L(r)
s=H.aS(r)
P.cO(q,q,this,t,u.l.a(s))}},
fs:function(a,b){return new P.jN(this,b.i("0()").a(a),b)},
bY:function(a){return new P.jM(this,u.M.a(a))},
ft:function(a,b){return new P.jO(this,b.i("~(0)").a(a),b)},
h:function(a,b){return null},
dU:function(a,b){b.i("0()").a(a)
if($.H===C.f)return a.$0()
return P.mr(null,null,this,a,b)},
co:function(a,b,c,d){c.i("@<0>").q(d).i("1(2)").a(a)
d.a(b)
if($.H===C.f)return a.$1(b)
return P.mt(null,null,this,a,b,c,d)},
hc:function(a,b,c,d,e,f){d.i("@<0>").q(e).q(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.H===C.f)return a.$2(b,c)
return P.ms(null,null,this,a,b,c,d,e,f)},
dP:function(a,b,c,d){return b.i("@<0>").q(c).q(d).i("1(2,3)").a(a)}}
P.jN.prototype={
$0:function(){return this.a.dU(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.jM.prototype={
$0:function(){return this.a.cn(this.b)},
$S:0}
P.jO.prototype={
$1:function(a){var t=this.c
return this.a.cp(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.dI.prototype={
gk:function(a){return this.a},
gM:function(a){return this.a===0},
gI:function(){return new P.dJ(this,this.$ti.i("dJ<1>"))},
H:function(a){var t,s
if(typeof a=="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.eE(a)},
eE:function(a){var t=this.d
if(t==null)return!1
return this.aj(this.cV(t,a),a)>=0},
h:function(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:P.m5(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:P.m5(r,b)
return s}else return this.eJ(b)},
eJ:function(a){var t,s,r=this.d
if(r==null)return null
t=this.cV(r,a)
s=this.aj(t,a)
return s<0?null:t[s+1]},
j:function(a,b,c){var t,s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.Q[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){t=o.b
o.eA(t==null?o.b=P.m6():t,b,c)}else{s=o.d
if(s==null)s=o.d=P.m6()
r=H.mP(b)&1073741823
q=s[r]
if(q==null){P.kI(s,r,[b,c]);++o.a
o.e=null}else{p=o.aj(q,b)
if(p>=0)q[p+1]=c
else{q.push(b,c);++o.a
o.e=null}}}},
t:function(a,b){var t,s,r,q,p=this,o=p.$ti
o.i("~(1,2)").a(b)
t=p.cM()
for(s=t.length,o=o.c,r=0;r<s;++r){q=t[r]
b.$2(o.a(q),p.h(0,q))
if(t!==p.e)throw H.b(P.aK(p))}},
cM:function(){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
eA:function(a,b,c){var t=this.$ti
t.c.a(b)
t.Q[1].a(c)
if(a[b]==null){++this.a
this.e=null}P.kI(a,b,c)},
cV:function(a,b){return a[H.mP(b)&1073741823]}}
P.dL.prototype={
aj:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2){r=a[s]
if(r==null?b==null:r===b)return s}return-1}}
P.dJ.prototype={
gk:function(a){return this.a.a},
gM:function(a){return this.a.a===0},
gw:function(a){var t=this.a
return new P.dK(t,t.cM(),this.$ti.i("dK<1>"))}}
P.dK.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw H.b(P.aK(q))
else if(r>=s.length){t.saL(null)
return!1}else{t.saL(s[r])
t.c=r+1
return!0}},
saL:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
P.dO.prototype={
gw:function(a){var t=this,s=new P.c5(t,t.r,H.h(t).i("c5<1>"))
s.c=t.e
return s},
gk:function(a){return this.a},
G:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.J.a(t[b])!=null}else{s=this.eD(b)
return s}},
eD:function(a){var t=this.d
if(t==null)return!1
return this.aj(t[this.bJ(a)],a)>=0},
l:function(a,b){var t,s,r=this
H.h(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.cK(t==null?r.b=P.kJ():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.cK(s==null?r.c=P.kJ():s,b)}else return r.ez(b)},
ez:function(a){var t,s,r,q=this
H.h(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.kJ()
s=q.bJ(a)
r=t[s]
if(r==null)t[s]=[q.bI(a)]
else{if(q.aj(r,a)>=0)return!1
r.push(q.bI(a))}return!0},
a9:function(a,b){var t=this
if(typeof b=="string"&&b!=="__proto__")return t.d8(t.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return t.d8(t.c,b)
else return t.f7(b)},
f7:function(a){var t,s,r,q,p=this,o=p.d
if(o==null)return!1
t=p.bJ(a)
s=o[t]
r=p.aj(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete o[t]
p.dg(q)
return!0},
cK:function(a,b){H.h(this).c.a(b)
if(u.J.a(a[b])!=null)return!1
a[b]=this.bI(b)
return!0},
d8:function(a,b){var t
if(a==null)return!1
t=u.J.a(a[b])
if(t==null)return!1
this.dg(t)
delete a[b]
return!0},
cL:function(){this.r=1073741823&this.r+1},
bI:function(a){var t,s=this,r=new P.fA(H.h(s).c.a(a))
if(s.e==null)s.e=s.f=r
else{t=s.f
r.c=t
s.f=t.b=r}++s.a
s.cL()
return r},
dg:function(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.cL()},
bJ:function(a){return J.aa(a)&1073741823},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bI(a[s].a,b))return s
return-1}}
P.fA.prototype={}
P.c5.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.aK(s))
else{s=t.c
if(s==null){t.saL(null)
return!1}else{t.saL(t.$ti.c.a(s.a))
t.c=t.c.b
return!0}}},
saL:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
P.dn.prototype={$in:1,$id:1,$it:1}
P.k.prototype={
gw:function(a){return new H.P(a,this.gk(a),H.X(a).i("P<k.E>"))},
C:function(a,b){return this.h(a,b)},
t:function(a,b){var t,s
H.X(a).i("~(k.E)").a(b)
t=this.gk(a)
for(s=0;s<t;++s){b.$1(this.h(a,s))
if(t!==this.gk(a))throw H.b(P.aK(a))}},
gM:function(a){return this.gk(a)===0},
gcf:function(a){return!this.gM(a)},
F:function(a,b,c){var t=H.X(a)
return new H.T(a,t.q(c).i("1(k.E)").a(b),t.i("@<k.E>").q(c).i("T<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
aX:function(a,b){return H.ae(a,b,null,H.X(a).i("k.E"))},
ah:function(a,b){var t,s=H.m([],H.X(a).i("G<k.E>"))
C.a.sk(s,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.j(s,t,this.h(a,t))
return s},
aq:function(a){return this.ah(a,!0)},
l:function(a,b){var t
H.X(a).i("k.E").a(b)
t=this.gk(a)
this.sk(a,t+1)
this.j(a,t,b)},
T:function(a,b,c,d,e){var t,s,r,q,p=H.X(a)
p.i("d<k.E>").a(d)
P.lU(b,c,this.gk(a))
t=c-b
if(t===0)return
P.aW(e,"skipCount")
if(p.i("t<k.E>").b(d)){s=e
r=d}else{r=H.ae(d,e,null,H.X(d).i("k.E")).ah(0,!1)
s=0}p=J.ay(r)
if(s+t>p.gk(r))throw H.b(H.lH())
if(s<b)for(q=t-1;q>=0;--q)this.j(a,b+q,p.h(r,s+q))
else for(q=0;q<t;++q)this.j(a,b+q,p.h(r,s+q))},
ag:function(a,b,c){var t=this
H.X(a).i("k.E").a(c)
P.ba(b,"index",u.S)
P.kE(b,0,t.gk(a),"index")
if(b===t.gk(a)){t.l(a,c)
return}t.sk(a,t.gk(a)+1)
t.T(a,b+1,t.gk(a),a,b)
t.j(a,b,c)},
n:function(a){return P.is(a,"[","]")}}
P.dp.prototype={}
P.iA.prototype={
$2:function(a,b){var t,s=this.a
if(!s.a)this.b.a+=", "
s.a=!1
s=this.b
t=s.a+=H.a(a)
s.a=t+": "
s.a+=H.a(b)},
$S:28}
P.S.prototype={
t:function(a,b){var t,s
H.h(this).i("~(S.K,S.V)").a(b)
for(t=J.y(this.gI());t.m();){s=t.gp()
b.$2(s,this.h(0,s))}},
aE:function(a,b,c,d){var t,s,r,q
H.h(this).q(c).q(d).i("cn<1,2>(S.K,S.V)").a(b)
t=P.bU(c,d)
for(s=J.y(this.gI());s.m();){r=s.gp()
q=b.$2(r,this.h(0,r))
t.j(0,C.u.gfW(q),q.ghh(q))}return t},
R:function(a,b){return this.aE(a,b,u.z,u.z)},
gk:function(a){return J.ab(this.gI())},
gM:function(a){return J.nt(this.gI())},
n:function(a){return P.iz(this)},
$ian:1}
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
gM:function(a){return this.a.a===0},
gk:function(a){return this.a.a},
gI:function(){var t=this.a
return new H.ad(t,H.h(t).i("ad<1>"))},
n:function(a){return P.iz(this.a)},
aE:function(a,b,c,d){return this.a.aE(0,this.$ti.q(c).q(d).i("cn<1,2>(3,4)").a(b),c,d)},
R:function(a,b){return this.aE(a,b,u.z,u.z)},
$ian:1}
P.dC.prototype={}
P.aX.prototype={
F:function(a,b,c){var t=H.h(this)
return new H.aU(this,t.q(c).i("1(aX.E)").a(b),t.i("@<aX.E>").q(c).i("aU<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
n:function(a){return P.is(this,"{","}")},
C:function(a,b){var t,s,r,q="index"
P.ba(b,q,u.S)
P.aW(b,q)
for(t=this.a8(),t=P.jB(t,t.r,H.h(t).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.b(P.bc(b,this,q,null,s))}}
P.dw.prototype={$in:1,$id:1,$iap:1}
P.dX.prototype={
L:function(a,b){var t
for(t=J.y(H.h(this).i("d<1>").a(b));t.m();)this.l(0,t.gp())},
F:function(a,b,c){var t=H.h(this)
return new H.aU(this,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("aU<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
n:function(a){return P.is(this,"{","}")},
cg:function(a,b){var t,s=P.jB(this,this.r,H.h(this).c)
if(!s.m())return""
if(b===""){t=""
do t+=H.a(s.d)
while(s.m())}else{t=H.a(s.d)
for(;s.m();)t=t+b+H.a(s.d)}return t.charCodeAt(0)==0?t:t},
C:function(a,b){var t,s,r,q=this,p="index"
P.ba(b,p,u.S)
P.aW(b,p)
for(t=P.jB(q,q.r,H.h(q).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.b(P.bc(b,q,p,null,s))},
$in:1,
$id:1,
$iap:1}
P.dP.prototype={}
P.dY.prototype={}
P.cL.prototype={}
P.fy.prototype={
h:function(a,b){var t,s=this.b
if(s==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{t=s[b]
return typeof t=="undefined"?this.f5(b):t}},
gk:function(a){return this.b==null?this.c.a:this.aN().length},
gM:function(a){return this.gk(this)===0},
gI:function(){if(this.b==null){var t=this.c
return new H.ad(t,H.h(t).i("ad<1>"))}return new P.fz(this)},
j:function(a,b,c){var t,s,r=this
if(r.b==null)r.c.j(0,b,c)
else if(r.H(b)){t=r.b
t[b]=c
s=r.a
if(s==null?t!=null:s!==t)s[b]=null}else r.fl().j(0,b,c)},
H:function(a){if(this.b==null)return this.c.H(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
t:function(a,b){var t,s,r,q,p=this
u.cA.a(b)
if(p.b==null)return p.c.t(0,b)
t=p.aN()
for(s=0;s<t.length;++s){r=t[s]
q=p.b[r]
if(typeof q=="undefined"){q=P.k4(p.a[r])
p.b[r]=q}b.$2(r,q)
if(t!==p.c)throw H.b(P.aK(p))}},
aN:function(){var t=u.j.a(this.c)
if(t==null)t=this.c=H.m(Object.keys(this.a),u.s)
return t},
fl:function(){var t,s,r,q,p,o=this
if(o.b==null)return o.c
t=P.bU(u.N,u.z)
s=o.aN()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.j(0,p,o.h(0,p))}if(q===0)C.a.l(s,null)
else C.a.sk(s,0)
o.a=o.b=null
return o.c=t},
f5:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
t=P.k4(this.a[a])
return this.b[a]=t}}
P.fz.prototype={
gk:function(a){var t=this.a
return t.gk(t)},
C:function(a,b){var t=this.a
if(t.b==null)t=t.gI().C(0,b)
else{t=t.aN()
if(b<0||b>=t.length)return H.o(t,b)
t=t[b]}return t},
gw:function(a){var t=this.a
if(t.b==null){t=t.gI()
t=t.gw(t)}else{t=t.aN()
t=new J.aA(t,t.length,H.C(t).i("aA<1>"))}return t}}
P.en.prototype={}
P.cf.prototype={}
P.ir.prototype={
n:function(a){return"unknown"}}
P.ck.prototype={
dv:function(a){var t=this.cP(a,0,a.length)
return t==null?a:t},
cP:function(a,b,c){var t,s,r,q
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
default:r=null}if(r!=null){if(s==null)s=new P.aP("")
if(t>b)s.a+=C.d.ab(a,b,t)
s.a+=r
b=t+1}}if(s==null)return null
if(c>b)s.a+=J.nD(a,b,c)
q=s.a
return q.charCodeAt(0)==0?q:q}}
P.dj.prototype={
n:function(a){var t=P.bp(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
P.eK.prototype={
n:function(a){return"Cyclic error in JSON stringify"}}
P.ix.prototype={
c1:function(a,b,c){var t
u.ep.a(c)
t=P.pw(b,this.gfF().a)
return t},
fL:function(a,b){var t
u.bc.a(b)
t=P.oW(a,this.gfM().b,null)
return t},
gfM:function(){return C.N},
gfF:function(){return C.M}}
P.eM.prototype={}
P.eL.prototype={}
P.jz.prototype={
e5:function(a){var t,s,r,q,p,o,n=a.length
for(t=J.kg(a),s=this.c,r=0,q=0;q<n;++q){p=t.b0(a,q)
if(p>92)continue
if(p<32){if(q>r)s.a+=C.d.ab(a,r,q)
r=q+1
s.a+=H.aM(92)
switch(p){case 8:s.a+=H.aM(98)
break
case 9:s.a+=H.aM(116)
break
case 10:s.a+=H.aM(110)
break
case 12:s.a+=H.aM(102)
break
case 13:s.a+=H.aM(114)
break
default:s.a+=H.aM(117)
s.a+=H.aM(48)
s.a+=H.aM(48)
o=p>>>4&15
s.a+=H.aM(o<10?48+o:87+o)
o=p&15
s.a+=H.aM(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)s.a+=C.d.ab(a,r,q)
r=q+1
s.a+=H.aM(92)
s.a+=H.aM(p)}}if(r===0)s.a+=H.a(a)
else if(r<n)s.a+=t.ab(a,r,n)},
bG:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.b(new P.eK(a,null))}C.a.l(t,a)},
bu:function(a){var t,s,r,q,p=this
if(p.e4(a))return
p.bG(a)
try{t=p.b.$1(a)
if(!p.e4(t)){r=P.lK(a,null,p.gd5())
throw H.b(r)}r=p.a
if(0>=r.length)return H.o(r,-1)
r.pop()}catch(q){s=H.L(q)
r=P.lK(a,s,p.gd5())
throw H.b(r)}},
e4:function(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=C.c.n(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.e5(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.bG(a)
r.hi(a)
t=r.a
if(0>=t.length)return H.o(t,-1)
t.pop()
return!0}else if(u.f.b(a)){r.bG(a)
s=r.hj(a)
t=r.a
if(0>=t.length)return H.o(t,-1)
t.pop()
return s}else return!1},
hi:function(a){var t,s,r=this.c
r.a+="["
t=J.ay(a)
if(t.gcf(a)){this.bu(t.h(a,0))
for(s=1;s<t.gk(a);++s){r.a+=","
this.bu(t.h(a,s))}}r.a+="]"},
hj:function(a){var t,s,r,q,p,o,n=this,m={}
if(a.gM(a)){n.c.a+="{}"
return!0}t=a.gk(a)*2
s=new Array(t)
s.fixed$length=Array
r=m.a=0
m.b=!0
a.t(0,new P.jA(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.e5(H.r(s[r]))
q.a+='":'
o=r+1
if(o>=t)return H.o(s,o)
n.bu(s[o])}q.a+="}"
return!0}}
P.jA.prototype={
$2:function(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
C.a.j(t,s.a++,a)
C.a.j(t,s.a++,b)},
$S:28}
P.jy.prototype={
gd5:function(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
P.iB.prototype={
$2:function(a,b){var t,s,r
u.fo.a(a)
t=this.b
s=this.a
t.a+=s.a
r=t.a+=H.a(a.a)
t.a=r+": "
t.a+=P.bp(b)
s.a=", "},
$S:37}
P.w.prototype={}
P.ch.prototype={
l:function(a,b){return P.nQ(C.e.v(this.a,u.fu.a(b).ghn()),!1)},
P:function(a,b){if(b==null)return!1
return b instanceof P.ch&&this.a===b.a&&!0},
gA:function(a){var t=this.a
return(t^C.e.bV(t,30))&1073741823},
n:function(a){var t=this,s=P.nR(H.oh(t)),r=P.er(H.of(t)),q=P.er(H.ob(t)),p=P.er(H.oc(t)),o=P.er(H.oe(t)),n=P.er(H.og(t)),m=P.nS(H.od(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.ah.prototype={}
P.bQ.prototype={
at:function(a,b){return new P.bQ(C.e.D(this.a*b))},
P:function(a,b){if(b==null)return!1
return b instanceof P.bQ&&this.a===b.a},
gA:function(a){return C.e.gA(this.a)},
n:function(a){var t,s,r,q=new P.hY(),p=this.a
if(p<0)return"-"+new P.bQ(0-p).n(0)
t=q.$1(C.e.aA(p,6e7)%60)
s=q.$1(C.e.aA(p,1e6)%60)
r=new P.hX().$1(p%1e6)
return""+C.e.aA(p,36e8)+":"+H.a(t)+":"+H.a(s)+"."+H.a(r)}}
P.hX.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:24}
P.hY.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:24}
P.K.prototype={
gaY:function(){return H.aS(this.$thrownJsError)}}
P.cV.prototype={
n:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bp(t)
return"Assertion failed"}}
P.eY.prototype={
n:function(a){return"Throw of null."}}
P.aJ.prototype={
gbM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbL:function(){return""},
n:function(a){var t,s,r,q,p=this,o=p.c,n=o!=null?" ("+o+")":""
o=p.d
t=o==null?"":": "+H.a(o)
s=p.gbM()+n+t
if(!p.a)return s
r=p.gbL()
q=P.bp(p.b)
return s+r+": "+q}}
P.dv.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var t,s,r=this.e
if(r==null){r=this.f
t=r!=null?": Not less than or equal to "+H.a(r):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.a(r)
else if(s>r)t=": Not in range "+H.a(r)+".."+H.a(s)+", inclusive"
else t=s<r?": Valid value range is empty":": Only valid value is "+H.a(r)}return t}}
P.eD.prototype={
gbM:function(){return"RangeError"},
gbL:function(){var t,s=H.q(this.b)
if(typeof s!=="number")return s.ai()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.a(t)},
gk:function(a){return this.f}}
P.eW.prototype={
n:function(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new P.aP("")
k.a=""
for(t=l.c,s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=P.bp(o)
k.a=", "}l.d.t(0,new P.iB(k,j))
n=P.bp(l.a)
m=j.n(0)
t="NoSuchMethodError: method not found: '"+H.a(l.b.a)+"'\nReceiver: "+n+"\nArguments: ["+m+"]"
return t}}
P.ff.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.fd.prototype={
n:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b3.prototype={
n:function(a){return"Bad state: "+this.a}}
P.eo.prototype={
n:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bp(t)+"."}}
P.eZ.prototype={
n:function(a){return"Out of Memory"},
gaY:function(){return null},
$iK:1}
P.dy.prototype={
n:function(a){return"Stack Overflow"},
gaY:function(){return null},
$iK:1}
P.eq.prototype={
n:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.ft.prototype={
n:function(a){return"Exception: "+this.a},
$ii2:1}
P.dc.prototype={
n:function(a){var t,s=this.a,r=s!=null&&""!==s?"FormatException: "+H.a(s):"FormatException",q=this.b
if(typeof q=="string"){t=q.length>78?C.d.ab(q,0,75)+"...":q
return r+"\n"+t}else return r},
$ii2:1}
P.b1.prototype={}
P.e.prototype={}
P.d.prototype={
F:function(a,b,c){var t=H.h(this)
return H.lN(this,t.q(c).i("1(d.E)").a(b),t.i("d.E"),c)},
R:function(a,b){return this.F(a,b,u.z)},
br:function(a,b){var t=H.h(this)
return new H.af(this,t.i("w(d.E)").a(b),t.i("af<d.E>"))},
gk:function(a){var t,s=this.gw(this)
for(t=0;s.m();)++t
return t},
gaD:function(a){var t=this.gw(this)
if(!t.m())throw H.b(H.eE())
return t.gp()},
gaw:function(a){var t,s=this.gw(this)
if(!s.m())throw H.b(H.eE())
t=s.gp()
if(s.m())throw H.b(H.nZ())
return t},
C:function(a,b){var t,s,r,q="index"
P.ba(b,q,u.S)
P.aW(b,q)
for(t=this.gw(this),s=0;t.m();){r=t.gp()
if(b===s)return r;++s}throw H.b(P.bc(b,this,q,null,s))},
n:function(a){return P.nY(this,"(",")")}}
P.R.prototype={}
P.t.prototype={$in:1,$id:1}
P.cn.prototype={}
P.u.prototype={
gA:function(a){return P.E.prototype.gA.call(this,this)},
n:function(a){return"null"}}
P.Y.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
P:function(a,b){return this===b},
gA:function(a){return H.bY(this)},
n:function(a){return"Instance of '"+H.a(H.iM(this))+"'"},
bj:function(a,b){u.m.a(b)
throw H.b(P.lO(this,b.gdG(),b.gdO(),b.gdH()))},
toString:function(){return this.n(this)}}
P.dq.prototype={}
P.ap.prototype={}
P.aq.prototype={}
P.fI.prototype={
n:function(a){return""},
$iaq:1}
P.c.prototype={$if_:1}
P.aP.prototype={
gk:function(a){return this.a.length},
n:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$iot:1}
P.aY.prototype={}
W.i.prototype={$ii:1}
W.c8.prototype={
n:function(a){return String(a)},
$ic8:1}
W.ei.prototype={
n:function(a){return String(a)}}
W.c9.prototype={$ic9:1}
W.bK.prototype={$ibK:1}
W.bL.prototype={$ibL:1}
W.cd.prototype={$icd:1}
W.b0.prototype={
gk:function(a){return a.length}}
W.I.prototype={$iI:1}
W.cg.prototype={
ay:function(a,b){var t=$.n4(),s=t[b]
if(typeof s=="string")return s
s=this.fi(a,b)
t[b]=s
return s},
fi:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.nT()+b
if(t in a)return t
return b},
aQ:function(a,b,c,d){if(c==null)c=""
a.setProperty(b,c,d)},
gk:function(a){return a.length}}
W.hJ.prototype={}
W.d3.prototype={$id3:1}
W.bO.prototype={$ibO:1}
W.hK.prototype={
n:function(a){return String(a)}}
W.d4.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
P:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.W(b)
t=a.left==t.gbh(b)&&a.top==t.gbq(b)&&a.width==t.gbs(b)&&a.height==t.gbe(b)}else t=!1
return t},
gA:function(a){return W.m9(J.aa(a.left),J.aa(a.top),J.aa(a.width),J.aa(a.height))},
gdm:function(a){return a.bottom},
gbe:function(a){return a.height},
gbh:function(a){return a.left},
gdT:function(a){return a.right},
gbq:function(a){return a.top},
gbs:function(a){return a.width},
$ibv:1}
W.hL.prototype={
gk:function(a){return a.length},
l:function(a,b){return a.add(H.r(b))}}
W.fj.prototype={
gM:function(a){return this.a.firstElementChild==null},
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
return new J.aA(t,t.length,H.C(t).i("aA<1>"))},
T:function(a,b,c,d,e){u.bq.a(d)
throw H.b(P.j_(null))},
ag:function(a,b,c){var t,s,r,q=this,p=u.h
p.a(c)
t=q.b
s=t.length
if(b>s)throw H.b(P.a9(b,0,q.gk(q),null,null))
r=q.a
if(b===s)r.appendChild(c)
else{if(b>=s)return H.o(t,b)
r.insertBefore(c,p.a(t[b]))}},
bc:function(a){J.ks(this.a)}}
W.ak.prototype={
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
$ilB:1}
W.p.prototype={
gfq:function(a){return new W.fq(a)},
gdq:function(a){return new W.fj(a,a.children)},
gdr:function(a){return new W.fr(a)},
gaU:function(a){var t=C.c.D(a.offsetLeft),s=C.c.D(a.offsetTop),r=C.c.D(a.offsetWidth),q=C.c.D(a.offsetHeight)
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.bv(t,s,r,q,u.q)},
a3:function(a,b){this.ca(a,"beforeend",b,null,null)},
n:function(a){return a.localName},
ca:function(a,b,c,d,e){var t,s=this.V(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(s,a)
break
case"afterbegin":t=a.childNodes
a.insertBefore(s,t.length>0?t[0]:null)
break
case"beforeend":a.appendChild(s)
break
case"afterend":a.parentNode.insertBefore(s,a.nextSibling)
break
default:H.D(P.bm("Invalid position "+b))}},
fX:function(a,b){if(!!a.matches)return a.matches(b)
else if(!!a.webkitMatchesSelector)return a.webkitMatchesSelector(b)
else if(!!a.mozMatchesSelector)return a.mozMatchesSelector(b)
else if(!!a.msMatchesSelector)return a.msMatchesSelector(b)
else if(!!a.oMatchesSelector)return a.oMatchesSelector(b)
else throw H.b(P.x("Not supported on this platform"))},
fZ:function(a,b){var t=a
do{if(J.ny(t,b))return!0
t=t.parentElement}while(t!=null)
return!1},
V:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.lD
if(t==null){t=H.m([],u.eO)
s=new W.du(t)
C.a.l(t,W.m7(null))
C.a.l(t,W.mc())
$.lD=s
d=s}else d=t
t=$.lC
if(t==null){t=new W.e8(d)
$.lC=t
c=t}else{t.a=d
c=t}}if($.bo==null){t=document
s=t.implementation.createHTMLDocument("")
$.bo=s
$.kA=s.createRange()
s=$.bo.createElement("base")
u.cR.a(s)
s.href=t.baseURI
$.bo.head.appendChild(s)}t=$.bo
if(t.body==null){s=t.createElement("body")
t.body=u.a4.a(s)}t=$.bo
if(u.a4.b(a))r=t.body
else{r=t.createElement(a.tagName)
$.bo.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.G(C.P,a.tagName)){$.kA.selectNodeContents(r)
q=$.kA.createContextualFragment(b)}else{r.innerHTML=b
q=$.bo.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}t=$.bo.body
if(r==null?t!=null:r!==t)J.ef(r)
c.cr(q)
document.adoptNode(q)
return q},
fE:function(a,b,c){return this.V(a,b,c,null)},
K:function(a,b){a.textContent=null
a.appendChild(this.V(a,b,null,null))},
gdV:function(a){return a.tagName},
gdI:function(a){return new W.av(a,"click",!1,u.C)},
gdL:function(a){return new W.av(a,"mousedown",!1,u.C)},
gdM:function(a){return new W.av(a,"touchstart",!1,u.du)},
$ip:1}
W.i_.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:34}
W.f.prototype={$if:1}
W.i1.prototype={
h:function(a,b){return new W.bj(this.a,H.r(b),!1,u.cw)}}
W.hZ.prototype={
h:function(a,b){var t
H.r(b)
if($.lA.H(b.toLowerCase())){t=$.ls
if(t==null)t=$.ls=!H.ar(P.kz())&&J.h0(window.navigator.userAgent,"WebKit",0)
if(t)return new W.av(this.a,$.lA.h(0,b.toLowerCase()),!1,u.E)}return new W.av(this.a,b,!1,u.E)}}
W.F.prototype={
es:function(a,b,c,d){return a.addEventListener(b,H.cR(u.G.a(c),1),!1)},
dz:function(a,b){return a.dispatchEvent(b)},
f8:function(a,b,c,d){return a.removeEventListener(b,H.cR(u.G.a(c),1),!1)},
$iF:1}
W.eB.prototype={
gk:function(a){return a.length}}
W.br.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bc(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.A.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$it:1,
$ibr:1}
W.de.prototype={$ide:1}
W.cl.prototype={
cu:function(a,b,c){return a.setSelectionRange(b,c)},
$icl:1}
W.be.prototype={$ibe:1}
W.eN.prototype={
n:function(a){return String(a)},
$ieN:1}
W.a1.prototype={
gaU:function(a){var t,s,r,q,p,o
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
return new P.J(J.le(o.a),J.le(o.b),q)}},
$ia1:1}
W.aj.prototype={
gaw:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.b(P.c0("No elements"))
if(s>1)throw H.b(P.c0("More than one element"))
return t.firstChild},
l:function(a,b){this.a.appendChild(u.A.a(b))},
L:function(a,b){var t,s,r,q
u.eh.a(b)
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
ag:function(a,b,c){var t,s,r
u.A.a(c)
t=this.a
s=t.childNodes
r=s.length
if(b>r)throw H.b(P.a9(b,0,this.gk(this),null,null))
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
return new W.bT(t,t.length,H.X(t).i("bT<V.E>"))},
T:function(a,b,c,d,e){u.eh.a(d)
throw H.b(P.x("Cannot setRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
sk:function(a,b){throw H.b(P.x("Cannot set length on immutable List."))},
h:function(a,b){var t
H.q(b)
t=this.a.childNodes
if(b<0||b>=t.length)return H.o(t,b)
return t[b]}}
W.l.prototype={
bk:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
h8:function(a,b){var t,s
try{t=a.parentNode
J.np(t,b,a)}catch(s){H.L(s)}return a},
ex:function(a){var t
for(;t=a.firstChild,t!=null;)a.removeChild(t)},
n:function(a){var t=a.nodeValue
return t==null?this.ee(a):t},
f9:function(a,b,c){return a.replaceChild(b,c)},
$il:1}
W.dt.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bc(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.A.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$it:1}
W.cp.prototype={$icp:1}
W.cq.prototype={$icq:1}
W.cw.prototype={
gk:function(a){return a.length},
$icw:1}
W.cy.prototype={$icy:1}
W.f7.prototype={}
W.dA.prototype={
V:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
t=W.nU("<table>"+H.a(b)+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.aj(s).L(0,new W.aj(t))
return s}}
W.f8.prototype={
V:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.z.V(t.createElement("table"),b,c,d)
t.toString
t=new W.aj(t)
r=t.gaw(t)
r.toString
t=new W.aj(r)
q=t.gaw(t)
s.toString
q.toString
new W.aj(s).L(0,new W.aj(q))
return s}}
W.f9.prototype={
V:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bA(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.z.V(t.createElement("table"),b,c,d)
t.toString
t=new W.aj(t)
r=t.gaw(t)
s.toString
r.toString
new W.aj(s).L(0,new W.aj(r))
return s}}
W.cA.prototype={
K:function(a,b){var t,s
a.textContent=null
t=a.content
t.toString
J.ks(t)
s=this.V(a,b,null,null)
a.content.appendChild(s)},
$icA:1}
W.cB.prototype={
cu:function(a,b,c){return a.setSelectionRange(b,c)},
$icB:1}
W.aH.prototype={$iaH:1}
W.b4.prototype={$ib4:1}
W.fc.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bc(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.fY.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$it:1}
W.au.prototype={$iau:1}
W.bx.prototype={
gfo:function(a){var t=new P.a3($.H,u.dL),s=u.c4.a(new W.j8(new P.e3(t,u.bi)))
this.eI(a)
this.fa(a,W.mw(s,u.di))
return t},
fa:function(a,b){return a.requestAnimationFrame(H.cR(u.c4.a(b),1))},
eI:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibx:1,
$ij7:1}
W.j8.prototype={
$1:function(a){var t=this.a
a=t.$ti.i("1/").a(H.k3(a))
t=t.a
if(t.a!==0)H.D(P.c0("Future already completed"))
t.b1(a)},
$S:44}
W.b5.prototype={$ib5:1}
W.cD.prototype={$icD:1}
W.fl.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bc(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.g5.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$it:1}
W.dF.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
P:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.W(b)
t=a.left==t.gbh(b)&&a.top==t.gbq(b)&&a.width==t.gbs(b)&&a.height==t.gbe(b)}else t=!1
return t},
gA:function(a){return W.m9(J.aa(a.left),J.aa(a.top),J.aa(a.width),J.aa(a.height))},
gbe:function(a){return a.height},
gbs:function(a){return a.width}}
W.dR.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bc(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.A.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$it:1}
W.fi.prototype={
t:function(a,b){var t,s,r,q,p
u.eA.a(b)
for(t=this.gI(),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.A)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gI:function(){var t,s,r,q,p=this.a.attributes,o=H.m([],u.s)
for(t=p.length,s=u.h9,r=0;r<t;++r){if(r>=p.length)return H.o(p,r)
q=s.a(p[r])
if(q.namespaceURI==null)C.a.l(o,q.name)}return o},
gM:function(a){return this.gI().length===0}}
W.fq.prototype={
h:function(a,b){return this.a.getAttribute(H.r(b))},
j:function(a,b,c){this.a.setAttribute(b,H.r(c))},
gk:function(a){return this.gI().length}}
W.fr.prototype={
a8:function(){var t,s,r,q,p=P.dm(u.N)
for(t=this.a.className.split(" "),s=t.length,r=0;r<s;++r){q=J.ku(t[r])
if(q.length!==0)p.l(0,q)}return p},
cq:function(a){this.a.className=u.cq.a(a).cg(0," ")},
gk:function(a){return this.a.classList.length},
l:function(a,b){var t,s
H.r(b)
t=this.a.classList
s=t.contains(b)
t.add(b)
return!s},
a9:function(a,b){var t=this.a.classList,s=t.contains(b)
t.remove(b)
return s}}
W.ez.prototype={}
W.bj.prototype={
X:function(a,b,c,d){var t=H.h(this)
t.i("~(1)").a(a)
u.M.a(c)
return W.z(this.a,this.b,a,!1,t.c)},
bi:function(a,b,c){return this.X(a,null,b,c)}}
W.av.prototype={}
W.aQ.prototype={
X:function(a,b,c,d){var t,s,r,q=this.$ti
q.i("~(1)").a(a)
u.M.a(c)
t=new W.e1(new H.a6(q.i("@<U<1>>").q(q.i("a2<1>")).i("a6<1,2>")),q.i("e1<1>"))
t.seF(P.cx(t.gfA(t),!0,q.c))
for(s=this.a,s=new H.P(s,s.gk(s),s.$ti.i("P<k.E>")),r=this.c,q=q.i("bj<1>");s.m();)t.l(0,new W.bj(s.d,r,!1,q))
q=t.a
q.toString
return new P.ag(q,H.h(q).i("ag<1>")).X(a,b,c,d)},
u:function(a){return this.X(a,null,null,null)},
bi:function(a,b,c){return this.X(a,null,b,c)}}
W.dG.prototype={
Y:function(){var t=this
if(t.b==null)return null
t.dh()
t.b=null
t.sf3(null)
return null},
ci:function(a){if(this.b==null)return;++this.a
this.dh()},
cm:function(){var t=this
if(t.b==null||t.a<=0)return;--t.a
t.df()},
df:function(){var t,s=this,r=s.d,q=r!=null
if(q&&s.a<=0){t=s.b
t.toString
u.G.a(r)
if(q)J.nn(t,s.c,r,!1)}},
dh:function(){var t,s=this.d,r=s!=null
if(r){t=this.b
t.toString
u.G.a(s)
if(r)J.no(t,this.c,s,!1)}},
sf3:function(a){this.d=u.G.a(a)}}
W.jk.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:55}
W.e1.prototype={
l:function(a,b){var t,s,r,q=this
q.$ti.i("U<1>").a(b)
t=q.b
if(t.H(b))return
s=q.a
s=s.gfm(s)
b.toString
r=b.$ti
r.i("~(1)").a(s)
u.M.a(new W.jR(q,b))
t.j(0,b,W.z(b.a,b.b,s,!1,r.c))},
c0:function(a){var t,s,r
for(t=this.b,s=t.gar(t),r=H.h(s),r=new H.a4(J.y(s.a),s.b,r.i("@<1>").q(r.Q[1]).i("a4<1,2>"));r.m();)r.a.Y()
t.bc(0)
this.a.c0(0)},
seF:function(a){this.a=this.$ti.i("f4<1>").a(a)}}
W.jR.prototype={
$0:function(){var t=this.a,s=t.b.a9(0,t.$ti.i("U<1>").a(this.b))
if(s!=null)s.Y()
return null},
$S:0}
W.c4.prototype={
eo:function(a){var t
if($.fv.a===0){for(t=0;t<262;++t)$.fv.j(0,C.O[t],W.pQ())
for(t=0;t<12;++t)$.fv.j(0,C.l[t],W.pR())}},
aB:function(a){return $.nj().G(0,W.d9(a))},
af:function(a,b,c){var t=$.fv.h(0,H.a(W.d9(a))+"::"+b)
if(t==null)t=$.fv.h(0,"*::"+b)
if(t==null)return!1
return H.fW(t.$4(a,b,c,this))},
$iao:1}
W.V.prototype={
gw:function(a){return new W.bT(a,this.gk(a),H.X(a).i("bT<V.E>"))},
l:function(a,b){H.X(a).i("V.E").a(b)
throw H.b(P.x("Cannot add to immutable List."))},
ag:function(a,b,c){H.X(a).i("V.E").a(c)
throw H.b(P.x("Cannot add to immutable List."))},
T:function(a,b,c,d,e){H.X(a).i("d<V.E>").a(d)
throw H.b(P.x("Cannot setRange on immutable List."))}}
W.du.prototype={
l:function(a,b){C.a.l(this.a,u.v.a(b))},
aB:function(a){return C.a.dj(this.a,new W.iD(a))},
af:function(a,b,c){return C.a.dj(this.a,new W.iC(a,b,c))},
$iao:1}
W.iD.prototype={
$1:function(a){return u.v.a(a).aB(this.a)},
$S:35}
W.iC.prototype={
$1:function(a){return u.v.a(a).af(this.a,this.b,this.c)},
$S:35}
W.dZ.prototype={
ep:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.br(0,new W.jP())
s=b.br(0,new W.jQ())
this.b.L(0,t)
r=this.c
r.L(0,C.Q)
r.L(0,s)},
aB:function(a){return this.a.G(0,W.d9(a))},
af:function(a,b,c){var t=this,s=W.d9(a),r=t.c
if(r.G(0,H.a(s)+"::"+b))return t.d.fn(c)
else if(r.G(0,"*::"+b))return t.d.fn(c)
else{r=t.b
if(r.G(0,H.a(s)+"::"+b))return!0
else if(r.G(0,"*::"+b))return!0
else if(r.G(0,H.a(s)+"::*"))return!0
else if(r.G(0,"*::*"))return!0}return!1},
$iao:1}
W.jP.prototype={
$1:function(a){return!C.a.G(C.l,H.r(a))},
$S:20}
W.jQ.prototype={
$1:function(a){return C.a.G(C.l,H.r(a))},
$S:20}
W.fK.prototype={
af:function(a,b,c){if(this.el(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.G(0,b)
return!1}}
W.jV.prototype={
$1:function(a){return"TEMPLATE::"+H.a(H.r(a))},
$S:21}
W.fJ.prototype={
aB:function(a){var t
if(u.ew.b(a))return!1
t=u.g7.b(a)
if(t&&W.d9(a)==="foreignObject")return!1
if(t)return!0
return!1},
af:function(a,b,c){if(b==="is"||C.d.eb(b,"on"))return!1
return this.aB(a)},
$iao:1}
W.bT.prototype={
m:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.scQ(J.c6(t.a,s))
t.c=s
return!0}t.scQ(null)
t.c=r
return!1},
gp:function(){return this.d},
scQ:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
W.fn.prototype={
dz:function(a,b){return H.D(P.x("You can only attach EventListeners to your own window."))},
$iF:1,
$ij7:1}
W.ao.prototype={}
W.fH.prototype={$ioy:1}
W.e8.prototype={
cr:function(a){var t=this,s=new W.k2(t)
t.b=!1
s.$2(a,null)
for(;t.b;){t.b=!1
s.$2(a,null)}},
aP:function(a,b){var t=this.b=!0
if(b!=null?b!==a.parentNode:t)J.ef(a)
else b.removeChild(a)},
fd:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
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
o=H.ar(t)?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.L(q)}s="element unprintable"
try{s=J.B(a)}catch(q){H.L(q)}try{r=W.d9(a)
this.fc(u.h.a(a),b,o,s,r,u.f.a(n),H.r(m))}catch(q){if(H.L(q) instanceof P.aJ)throw q
else{this.aP(a,b)
window
p="Removing corrupted element "+H.a(s)
if(typeof console!="undefined")window.console.warn(p)}}},
fc:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
if(c){n.aP(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!n.a.aB(a)){n.aP(a,b)
window
t="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!n.a.af(a,"is",g)){n.aP(a,b)
window
t="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gI()
s=H.m(t.slice(0),H.C(t).i("G<1>"))
for(r=f.gI().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.o(s,r)
q=s[r]
p=n.a
o=J.nF(q)
H.r(q)
if(!p.af(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.a(e)+" "+q+'="'+H.a(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.aW.b(a))n.cr(a.content)},
$io7:1}
W.k2.prototype={
$2:function(a,b){var t,s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fd(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aP(a,b)}t=a.lastChild
for(r=u.A;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){q=s.nextSibling
p=t
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.c0("Corrupt HTML")
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
W.fm.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fC.prototype={}
W.fD.prototype={}
W.fL.prototype={}
W.fM.prototype={}
W.fS.prototype={}
W.fT.prototype={}
W.fU.prototype={}
W.fV.prototype={}
P.ep.prototype={
di:function(a){var t=$.n3().b
if(typeof a!="string")H.D(H.b8(a))
if(t.test(a))return a
throw H.b(P.cU(a,"value","Not a valid class token"))},
n:function(a){return this.a8().cg(0," ")},
gw:function(a){var t=this.a8()
return P.jB(t,t.r,H.h(t).c)},
F:function(a,b,c){var t,s
c.i("0(c)").a(b)
t=this.a8()
s=H.h(t)
return new H.aU(t,s.q(c).i("1(2)").a(b),s.i("@<1>").q(c).i("aU<1,2>"))},
R:function(a,b){return this.F(a,b,u.z)},
gk:function(a){return this.a8().a},
l:function(a,b){H.r(b)
this.di(b)
return H.fW(this.h_(0,new P.hI(b)))},
a9:function(a,b){var t,s
this.di(b)
t=this.a8()
s=t.a9(0,b)
this.cq(t)
return s},
C:function(a,b){return this.a8().C(0,b)},
h_:function(a,b){var t,s
u.ch.a(b)
t=this.a8()
s=b.$1(t)
this.cq(t)
return s}}
P.hI.prototype={
$1:function(a){return u.cq.a(a).l(0,this.a)},
$S:63}
P.eA.prototype={
gac:function(){var t=this.b,s=H.h(t)
return new H.aF(new H.af(t,s.i("w(k.E)").a(new P.im()),s.i("af<k.E>")),s.i("p(k.E)").a(new P.io()),s.i("aF<k.E,p>"))},
j:function(a,b,c){var t
H.q(b)
u.h.a(c)
t=this.gac()
J.nB(t.b.$1(J.aT(t.a,b)),c)},
sk:function(a,b){var t=J.ab(this.gac().a)
if(b>=t)return
else if(b<0)throw H.b(P.bm("Invalid list length"))
this.h7(0,b,t)},
l:function(a,b){this.b.a.appendChild(u.h.a(b))},
T:function(a,b,c,d,e){u.bq.a(d)
throw H.b(P.x("Cannot setRange on filtered list"))},
h7:function(a,b,c){var t=this.gac()
t=H.oo(t,b,t.$ti.i("d.E"))
C.a.t(P.cm(H.ou(t,c-b,H.h(t).i("d.E")),!0,u.z),new P.ip())},
bc:function(a){J.ks(this.b.a)},
ag:function(a,b,c){var t,s
u.h.a(c)
if(b===J.ab(this.gac().a))this.b.a.appendChild(c)
else{t=this.gac()
s=t.b.$1(J.aT(t.a,b))
s.parentNode.insertBefore(c,s)}},
gk:function(a){return J.ab(this.gac().a)},
h:function(a,b){var t
H.q(b)
t=this.gac()
return t.b.$1(J.aT(t.a,b))},
gw:function(a){var t=P.cm(this.gac(),!1,u.h)
return new J.aA(t,t.length,H.C(t).i("aA<1>"))}}
P.im.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:34}
P.io.prototype={
$1:function(a){return u.h.a(u.A.a(a))},
$S:36}
P.ip.prototype={
$1:function(a){return J.ef(a)},
$S:5}
P.dk.prototype={$idk:1}
P.iw.prototype={
$1:function(a){var t,s,r,q=this.a
if(q.H(a))return q.h(0,a)
if(u.f.b(a)){t={}
q.j(0,a,t)
for(q=J.y(a.gI());q.m();){s=q.gp()
t[s]=this.$1(a.h(0,s))}return t}else if(u.R.b(a)){r=[]
q.j(0,a,r)
C.a.L(r,J.kt(a,this,u.z))
return r}else return P.e9(a)},
$S:5}
P.k6.prototype={
$1:function(a){var t
u.Z.a(a)
t=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.pg,a,!1)
P.kP(t,$.kq(),a)
return t},
$S:5}
P.k7.prototype={
$1:function(a){return new this.a(a)},
$S:5}
P.kb.prototype={
$1:function(a){return new P.aE(a)},
$S:59}
P.kc.prototype={
$1:function(a){return new P.v(a,u.F)},
$S:56}
P.kd.prototype={
$1:function(a){return new P.O(a)},
$S:23}
P.O.prototype={
h:function(a,b){if(typeof b!="string"&&typeof b!="number")throw H.b(P.bm("property is not a String or num"))
return P.k5(this.a[b])},
j:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.b(P.bm("property is not a String or num"))
this.a[b]=P.e9(c)},
P:function(a,b){if(b==null)return!1
return b instanceof P.O&&this.a===b.a},
B:function(a){return a in this.a},
c2:function(a){delete this.a[a]},
n:function(a){var t,s
try{t=String(this.a)
return t}catch(s){H.L(s)
t=this.eh(0)
return t}},
U:function(a,b){var t,s=this.a
if(b==null)t=null
else{t=H.C(b)
t=P.cm(new H.T(b,t.i("@(1)").a(P.km()),t.i("T<1,@>")),!0,u.z)}return P.k5(s[a].apply(s,t))},
gA:function(a){return 0}}
P.aE.prototype={
dl:function(a){var t=P.e9(null),s=H.C(a)
s=P.cm(new H.T(a,s.i("@(1)").a(P.km()),s.i("T<1,@>")),!0,u.z)
return P.k5(this.a.apply(t,s))}}
P.v.prototype={
cH:function(a){var t=this,s=a<0||a>=t.gk(t)
if(s)throw H.b(P.a9(a,0,t.gk(t),null,null))},
h:function(a,b){if(typeof b=="number"&&b===C.e.bo(b))this.cH(H.q(b))
return this.$ti.c.a(this.cw(0,b))},
j:function(a,b,c){this.$ti.c.a(c)
if(typeof b=="number"&&b===C.e.bo(b))this.cH(H.q(b))
this.cz(0,b,c)},
gk:function(a){var t=this.a.length
if(typeof t==="number"&&t>>>0===t)return t
throw H.b(P.c0("Bad JsArray length"))},
sk:function(a,b){this.cz(0,"length",b)},
l:function(a,b){this.U("push",[this.$ti.c.a(b)])},
ag:function(a,b,c){var t,s=this
s.$ti.c.a(c)
t=b>=s.gk(s)+1
if(t)H.D(P.a9(b,0,s.gk(s),null,null))
s.U("splice",[b,0,c])},
T:function(a,b,c,d,e){var t,s,r,q=this,p=null
q.$ti.i("d<1>").a(d)
t=q.gk(q)
if(b>t)H.D(P.a9(b,0,t,p,p))
if(c<b||c>t)H.D(P.a9(c,b,t,p,p))
s=c-b
if(s===0)return
r=[b,s]
C.a.L(r,H.ae(d,e,p,H.X(d).i("k.E")).he(0,s))
q.U("splice",r)},
$in:1,
$id:1,
$it:1}
P.dN.prototype={}
P.J.prototype={
n:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
P:function(a,b){if(b==null)return!1
return b instanceof P.J&&this.a==b.a&&this.b==b.b},
gA:function(a){var t=J.aa(this.a),s=J.aa(this.b)
return P.m8(P.dM(P.dM(0,t),s))},
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
P.fF.prototype={
gdT:function(a){return this.a+this.c},
gdm:function(a){return this.b+this.d},
n:function(a){var t=this
return"Rectangle ("+t.a+", "+t.b+") "+t.c+" x "+t.d},
P:function(a,b){var t,s,r,q=this
if(b==null)return!1
if(u.q.b(b)){t=q.a
s=J.W(b)
if(t===s.gbh(b)){r=q.b
t=r===s.gbq(b)&&t+q.c===s.gdT(b)&&r+q.d===s.gdm(b)}else t=!1}else t=!1
return t},
gA:function(a){var t=this,s=t.a,r=C.e.gA(s),q=t.b,p=C.e.gA(q)
s=C.e.gA(s+t.c)
q=C.e.gA(q+t.d)
return P.m8(P.dM(P.dM(P.dM(P.dM(0,r),p),s),q))}}
P.bv.prototype={
gbh:function(a){return this.a},
gbq:function(a){return this.b},
gbs:function(a){return this.c},
gbe:function(a){return this.d}}
P.cu.prototype={$icu:1}
P.ej.prototype={
a8:function(){var t,s,r,q,p=this.a.getAttribute("class"),o=P.dm(u.N)
if(p==null)return o
for(t=p.split(" "),s=t.length,r=0;r<s;++r){q=J.ku(t[r])
if(q.length!==0)o.l(0,q)}return o},
cq:function(a){this.a.setAttribute("class",a.cg(0," "))}}
P.j.prototype={
gdr:function(a){return new P.ej(a)},
gdq:function(a){return new P.eA(a,new W.aj(a))},
V:function(a,b,c,d){var t,s,r,q,p,o=H.m([],u.eO)
C.a.l(o,W.m7(null))
C.a.l(o,W.mc())
C.a.l(o,new W.fJ())
c=new W.e8(new W.du(o))
t='<svg version="1.1">'+H.a(b)+"</svg>"
o=document
s=o.body
r=(s&&C.p).fE(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.aj(r)
p=o.gaw(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
ca:function(a,b,c,d,e){throw H.b(P.x("Cannot invoke insertAdjacentHtml on SVG."))},
gdI:function(a){return new W.av(a,"click",!1,u.C)},
gdL:function(a){return new W.av(a,"mousedown",!1,u.C)},
gdM:function(a){return new W.av(a,"touchstart",!1,u.du)},
$ij:1}
Z.hM.prototype={
gdK:function(a){var t,s=this
if(s.z==null)s.sd3(P.cx(new Z.hR(s),!0,u.D))
t=s.z
t.toString
return new P.ag(t,H.h(t).i("ag<1>"))},
gdJ:function(a){var t,s=this
if(s.ch==null)s.sd_(P.cx(new Z.hQ(s),!0,u.D))
t=s.ch
t.toString
return new P.ag(t,H.h(t).i("ag<1>"))},
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
C.h.aQ(p,C.h.ay(p,"pointer-events"),s,"")
t.c=t.b=t.a=t.d=null}if(!c&&b!=null)Z.oR(q,b)
p=q.ch
if(p!=null)p.l(0,Z.ly(a,$.a_,c))
if(a!=null)a.preventDefault()
if(u.V.b(a))q.fj($.a_.b)
p=$.a_
J.bJ(p.b).a9(0,q.r)
p=document.body
p.classList.remove("dnd-drag-occurring")}q.fb()},
eQ:function(a,b){return this.ak(a,b,!1)},
fj:function(a){var t=J.nu(a),s=t.$ti,r=s.i("~(1)").a(new Z.hO())
u.M.a(null)
P.nW(new Z.hP(W.z(t.a,t.b,r,!1,s.c)),u.P)},
fb:function(){C.a.t(this.cy,new Z.hN())
Z.m1()
$.a_=null},
ey:function(){var t,s
window.getSelection().removeAllRanges()
try{t=document.activeElement
if(u.cJ.b(t))J.ld(t,0,0)
else if(u.p.b(t))J.ld(t,0,0)}catch(s){H.L(s)}},
sd3:function(a){this.z=u.c6.a(a)},
sd_:function(a){this.ch=u.c6.a(a)},
sbK:function(a){this.cx=u.O.a(a)}}
Z.hR.prototype={
$0:function(){this.a.sd3(null)
return null},
$S:1}
Z.hQ.prototype={
$0:function(){this.a.sd_(null)
return null},
$S:1}
Z.hO.prototype={
$1:function(a){u.V.a(a)
a.stopPropagation()
a.preventDefault()},
$S:2}
Z.hP.prototype={
$0:function(){this.a.Y()},
$S:1}
Z.hN.prototype={
$1:function(a){return u.a1.a(a).h9(0)},
$S:50}
Z.bP.prototype={}
Z.jf.prototype={
cN:function(a){u.H.a(a)
return a},
sbT:function(a,b){this.e=u.H.a(b)}}
Z.ek.prototype={
ea:function(a){Z.nG(new Z.h7(this,u.H.a(a)))},
ct:function(a){var t,s,r,q=this
u.H.a(a)
t=q.a.style
s=a.a
if(q.c==null)q.dn()
r=q.c
if(typeof s!=="number")return s.E()
if(typeof r!=="number")return H.a0(r)
r=H.a(s-r)+"px"
t.left=r
t=q.a.style
s=a.b
if(q.b==null)q.dn()
r=q.b
if(typeof s!=="number")return s.E()
if(typeof r!=="number")return H.a0(r)
r=H.a(s-r)+"px"
t.top=r},
dn:function(){var t,s=this.a
s.toString
t=window.getComputedStyle(s,"")
s=P.fY(C.d.dS(t.marginLeft,"px",""))
this.c=s==null?0:s
s=P.fY(C.d.dS(t.marginTop,"px",""))
this.b=s==null?0:s}}
Z.h7.prototype={
$0:function(){var t,s=this.a.a
if(s!=null){s=s.style
t=this.b
t="translate3d("+H.a(t.a)+"px, "+H.a(t.b)+"px, 0)"
s.toString
C.h.aQ(s,C.h.ay(s,"transform"),t,"")}},
$S:1}
Z.h2.prototype={
$1:function(a){H.k3(a)
if($.h1){$.lg.$0()
$.h1=!1}return null},
$S:45}
Z.b7.prototype={
bB:function(a){this.ce()
C.a.t(this.c.cx,new Z.jg())},
fQ:function(){var t=this.b,s=window,r=u.dj.a(new Z.jh(this))
u.M.a(null)
C.a.l(t,W.z(s,"keydown",r,!1,u.cf))
C.a.l(t,W.z(window,"blur",u.Q.a(new Z.ji(this)),!1,u.B))},
c9:function(a,b){var t,s=this
u.H.a(b)
t=s.c
t=new Z.jf(t.a,u.h.a(W.M(a.currentTarget)),b,t.b,!1,!1)
t.sbT(0,b)
$.a_=t
s.cd()
s.cc()
s.cb()
s.fQ()},
c8:function(a,b,c){var t,s,r,q,p,o,n,m,l="pointer-events",k=u.H
k.a(b)
k.a(c)
t=$.a_
t.sbT(0,t.cN(b))
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
r.ct(new P.J(0,0,k))
n=U.d6(r.a)
r.ct(U.d6(q).E(0,n))
q=r.a.style
q.toString
r.d=q.getPropertyValue(C.h.ay(q,l))
r=r.a.style
r.toString
C.h.aQ(r,C.h.ay(r,l),"none","")}k=t.z
if(k!=null)k.l(0,Z.ly(a,$.a_,!1))
k=$.a_
J.bJ(k.b).l(0,t.r)
k=document.body
k.classList.add("dnd-drag-occurring")
t.ey()}}else{m=u.h.a(this.eK(c))
t=this.c
s=t.b
if(s!=null){r=$.a_
q=r.c
r=r.e
k.a(q)
s.ea(k.a(r).E(0,q))
s=s.a.style
s.visibility="visible"}Z.oS(t,m)}},
c7:function(a,b,c,d){var t=u.H
t.a(c)
t.a(d)
t=$.a_
t.sbT(0,t.cN(c))
this.c.eQ(a,this.cW(d,b))},
h9:function(a){var t=this.b
C.a.t(t,new Z.jj())
C.a.sk(t,0)},
cX:function(a){var t,s
u.H.a(a)
t=document
s=t.elementFromPoint(J.cT(a.a),J.cT(a.b))
return s==null?t.body:s},
cW:function(a,b){var t,s,r=this
u.H.a(a)
if(b==null)b=r.cX(a)
t=r.c.b
if(t!=null){s=t.a
s=s!=null&&H.ar(s.contains(u.A.a(b)))}else s=!1
if(s){s=t.a.style
s.visibility="hidden"
b=r.cX(a)
t=t.a.style
t.visibility="visible"}return r.d7(a,b)},
eK:function(a){return this.cW(a,null)},
d7:function(a,b){u.H.a(a)
return u.h.b(b)&&(b.shadowRoot||b.webkitShadowRoot)!=null&&H.ar(b.hasAttribute("dnd-retarget"))?this.d7(a,(b.shadowRoot||b.webkitShadowRoot).elementFromPoint(J.cT(a.a),J.cT(a.b))):b},
bN:function(a){var t=u.h.b(a)&&J.nz(a,this.c.f)
if(t)return!1
return!0}}
Z.jg.prototype={
$1:function(a){var t=u.h.a(a).style
t.toString
C.h.aQ(t,C.h.ay(t,"touch-action"),"none","")
return"none"},
$S:43}
Z.jh.prototype={
$1:function(a){u.cf.a(a)
if(a.keyCode===27)this.a.c.ak(a,null,!0)},
$S:40}
Z.ji.prototype={
$1:function(a){this.a.c.ak(a,null,!0)},
$S:3}
Z.jj.prototype={
$1:function(a){return u.b_.a(a).Y()},
$S:22}
Z.fN.prototype={
ce:function(){C.a.t(this.c.cx,new Z.k1(this))},
cd:function(){var t=document,s=u.gn.a(new Z.k_(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"touchmove",s,!1,u.T))},
cc:function(){var t=document,s=u.gn.a(new Z.jZ(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"touchend",s,!1,u.T))},
cb:function(){var t=document,s=u.gn.a(new Z.jY(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"touchcancel",s,!1,u.T))},
fV:function(a){u.H.a(a).E(0,$.a_.c)
return!1}}
Z.k1.prototype={
$1:function(a){var t=this.a,s=J.nw(u.h.a(a)),r=s.$ti,q=r.i("~(1)").a(new Z.k0(t))
u.M.a(null)
C.a.l(t.a,W.z(s.a,s.b,q,!1,r.c))},
$S:15}
Z.k0.prototype={
$1:function(a){var t,s
u.T.a(a)
if($.a_!=null)return
t=a.touches
if(t.length>1)return
s=this.a
if(!s.bN(W.M(t[0].target)))return
t=a.touches
if(0>=t.length)return H.o(t,0)
t=t[0]
s.c9(a,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),u.H))},
$S:11}
Z.k_.prototype={
$1:function(a){var t,s,r=this
u.T.a(a)
if(a.touches.length>1){r.a.c.ak(a,null,!0)
return}if(!$.a_.f){t=a.changedTouches
if(0>=t.length)return H.o(t,0)
t=t[0]
t=r.a.fV(new P.J(C.c.D(t.pageX),C.c.D(t.pageY),u.H))}else t=!1
if(t){r.a.c.ak(a,null,!0)
return}t=a.changedTouches
if(0>=t.length)return H.o(t,0)
t=t[0]
s=u.H
r.a.c8(a,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),s),new P.J(C.c.D(t.clientX),C.c.D(t.clientY),s))
a.preventDefault()},
$S:11}
Z.jZ.prototype={
$1:function(a){var t,s
u.T.a(a)
t=a.changedTouches
if(0>=t.length)return H.o(t,0)
t=t[0]
s=u.H
this.a.c7(a,null,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),s),new P.J(C.c.D(t.clientX),C.c.D(t.clientY),s))},
$S:11}
Z.jY.prototype={
$1:function(a){this.a.c.ak(u.T.a(a),null,!0)},
$S:11}
Z.fB.prototype={
ce:function(){C.a.t(this.c.cx,new Z.jF(this))},
cd:function(){var t=document,s=u.a6.a(new Z.jD(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"mousemove",s,!1,u.V))},
cc:function(){var t=document,s=u.a6.a(new Z.jC(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"mouseup",s,!1,u.V))},
cb:function(){}}
Z.jF.prototype={
$1:function(a){var t=this.a,s=J.nv(u.h.a(a)),r=s.$ti,q=r.i("~(1)").a(new Z.jE(t))
u.M.a(null)
C.a.l(t.a,W.z(s.a,s.b,q,!1,r.c))},
$S:15}
Z.jE.prototype={
$1:function(a){var t,s
u.V.a(a)
if($.a_!=null)return
if(a.button!==0)return
t=this.a
if(!t.bN(W.M(a.target)))return
s=u.h.a(W.M(a.target))
if(!(u.d2.b(s)||u.p.b(s)||u.cJ.b(s)||u.hb.b(s)||u.fW.b(s)))a.preventDefault()
t.c9(a,new P.J(a.pageX,a.pageY,u.H))},
$S:2}
Z.jD.prototype={
$1:function(a){var t
u.V.a(a)
t=u.H
this.a.c8(a,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:2}
Z.jC.prototype={
$1:function(a){var t
u.V.a(a)
t=u.H
this.a.c7(a,W.M(a.target),new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:2}
Z.fE.prototype={
ce:function(){C.a.t(this.c.cx,new Z.jL(this))},
cd:function(){var t=document,s=u.Q.a(new Z.jJ(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"pointermove",s,!1,u.B))},
cc:function(){var t=document,s=u.Q.a(new Z.jI(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"pointerup",s,!1,u.B))},
cb:function(){var t=document,s=u.Q.a(new Z.jH(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"pointercancel",s,!1,u.B))}}
Z.jL.prototype={
$1:function(a){var t,s,r,q
u.h.a(a)
t=this.a
a.toString
s=new W.hZ(a).h(0,"pointerdown")
r=s.$ti
q=r.i("~(1)").a(new Z.jK(t))
u.M.a(null)
C.a.l(t.a,W.z(s.a,s.b,q,!1,r.c))},
$S:15}
Z.jK.prototype={
$1:function(a){var t,s
u.et.a(a)
if($.a_!=null)return
if(a.button!==0)return
t=this.a
if(!t.bN(W.M(a.target)))return
s=u.h.a(W.M(a.target))
if(!(u.d2.b(s)||u.p.b(s)||u.cJ.b(s)||u.hb.b(s)||u.fW.b(s)))a.preventDefault()
t.c9(a,new P.J(a.pageX,a.pageY,u.H))},
$S:3}
Z.jJ.prototype={
$1:function(a){var t
u.et.a(a)
t=u.H
this.a.c8(a,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:3}
Z.jI.prototype={
$1:function(a){var t
u.et.a(a)
t=u.H
this.a.c7(a,null,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:3}
Z.jH.prototype={
$1:function(a){this.a.c.ak(a,null,!0)},
$S:3}
Z.ey.prototype={
gan:function(a){var t,s=this
if(s.d==null)s.sd0(P.cx(new Z.hT(s),!0,u.k))
t=s.d
t.toString
return new P.ag(t,H.h(t).i("ag<1>"))},
gh0:function(a){var t,s=this
if(s.e==null)s.sd2(P.cx(new Z.hV(s),!0,u.k))
t=s.e
t.toString
return new P.ag(t,H.h(t).i("ag<1>"))},
gao:function(a){var t,s=this
if(s.f==null)s.sd1(P.cx(new Z.hU(s),!0,u.k))
t=s.f
t.toString
return new P.ag(t,H.h(t).i("ag<1>"))},
gap:function(a){var t,s=this
if(s.r==null)s.sd4(P.cx(new Z.hW(s),!0,u.k))
t=s.r
t.toString
return new P.ag(t,H.h(t).i("ag<1>"))},
f1:function(a){var t,s,r,q,p=this
u.h.a(a)
t=p.y
s=$.ng()
r=s.a
s=H.h(s)
q=s.i("~(1)").a(p.geR())
u.M.a(null)
C.a.l(t,W.z(a,r,q,!1,s.c))
s=$.ni()
q=H.h(s)
C.a.l(t,W.z(a,s.a,q.i("~(1)").a(p.geV()),!1,q.c))
q=$.nh()
s=H.h(q)
C.a.l(t,W.z(a,q.a,s.i("~(1)").a(p.geT()),!1,s.c))
s=$.nf()
q=H.h(s)
C.a.l(t,W.z(a,s.a,q.i("~(1)").a(p.geX()),!1,q.c))},
eS:function(a){var t,s
u.V.a(a)
t=a.relatedTarget
if(W.M(t)!=null&&H.ar(u.h.a(W.M(a.currentTarget)).contains(u.A.a(W.M(t)))))return
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aL)if(t.a==$.ew)t=t.b||$.es
else t=!1
else t=!1
if(t){t=this.d
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.as(s.e))}J.bJ(u.h.a(W.M(a.currentTarget))).l(0,"dnd-over")}else J.bJ(u.h.a(W.M(a.currentTarget))).l(0,"dnd-invalid")},
eW:function(a){var t,s
u.V.a(a)
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aL)if(t.a==$.ew)t=t.b||$.es
else t=!1
else t=!1
if(t){t=this.e
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.as(s.e))}}},
eU:function(a){var t,s
u.V.a(a)
t=a.relatedTarget
if(W.M(t)!=null&&H.ar(u.h.a(W.M(a.currentTarget)).contains(u.A.a(W.M(t)))))return
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aL)if(t.a==$.ew)t=t.b||$.es
else t=!1
else t=!1
if(t){t=this.f
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.as(s.e))}J.bJ(u.h.a(W.M(a.currentTarget))).a9(0,"dnd-over")}else J.bJ(u.h.a(W.M(a.currentTarget))).a9(0,"dnd-invalid")},
eY:function(a){var t,s
u.V.a(a)
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aL)if(t.a==$.ew)t=t.b||$.es
else t=!1
else t=!1
if(t){t=this.r
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.as(s.e))}}},
fG:function(){var t=this.y
C.a.t(t,new Z.hS())
C.a.sk(t,0)},
sd0:function(a){this.d=u.g.a(a)},
sd2:function(a){this.e=u.g.a(a)},
sd1:function(a){this.f=u.g.a(a)},
sd4:function(a){this.r=u.g.a(a)},
sbK:function(a){this.x=u.O.a(a)}}
Z.hT.prototype={
$0:function(){this.a.sd0(null)
return null},
$S:1}
Z.hV.prototype={
$0:function(){this.a.sd2(null)
return null},
$S:1}
Z.hU.prototype={
$0:function(){this.a.sd1(null)
return null},
$S:1}
Z.hW.prototype={
$0:function(){this.a.sd4(null)
return null},
$S:1}
Z.hS.prototype={
$1:function(a){return u.b_.a(a).Y()},
$S:22}
Z.as.prototype={}
Z.eh.prototype={}
U.b_.prototype={
gS:function(){var t=this.b
return H.a(t.fr.b)+"-"+H.a(t.a)+"-"+H.a(this.a)},
bw:function(){return H.a(this.a2())+H.a(this.d)},
ax:function(a,b){var t,s=this,r=s.a
if(r!=null){t=s.b
if(r>=t.z)t.z=r+1}else s.a=s.b.z++},
aI:function(a,b,c){this.a=b.a
this.c=b.c
this.d=b.d},
dA:function(){var t,s,r,q=this,p=document.createElement("div")
p.innerText=q.bw()
p.classList.add("nt-attribute-value")
t=q.b
s=t.aG()+"-attribute"
p.classList.add(s)
s=t.ch
if(s!=null){r=p.style
r.color=s}t=t.cx
if(t!=null){s=p.style
s.backgroundColor=t}t=u.C
s=t.i("~(1)").a(new U.h5(q,new U.h6(q,p)))
u.M.a(null)
W.z(p,"click",s,!1,t.c)
return p}}
U.h6.prototype={
$0:function(){this.b.innerText=this.a.bw()},
$S:1}
U.h5.prototype={
$1:function(a){var t,s,r,q,p,o,n,m
u.V.a(a)
t=u.d.a(W.M(a.target))
s=t.offsetParent
r=C.c.D(s.offsetLeft)
q=C.c.D(t.offsetLeft)
p=J.W(a)
o=p.gaU(a).a
if(typeof o!=="number")return H.a0(o)
n=C.c.D(s.offsetTop)
m=C.c.D(t.offsetTop)
p=p.gaU(a).b
if(typeof p!=="number")return H.a0(p)
this.a.aH(C.c.c5(r+q+o),C.c.c5(n+m+p),this.b)},
$S:2}
U.bS.prototype={
ga0:function(a){return this.e},
a2:function(){return U.d_(this.f.c)},
au:function(a){var t,s,r,q=this
if(a==null){t=new U.bq(q.b.fr)
t.c=new U.ac(t,q.e,H.m([],u.U))
q.f=t}if(P.fY(a)==null&&!C.a.G(H.m(["true","false"],u.s),a))throw H.b(P.cU(a,"valueString","Expression values can only be set to numbers or booleans."))
t=new U.bq(q.b.fr)
s=u.U
t.c=new U.ac(t,q.e,H.m([],s))
q.f=t
r=new U.ac(t,q.e,H.m([],s))
r.b=a
q.f.c=r},
as:function(){return this.r},
aV:function(a){this.r=a},
aC:function(a,b,c){var t,s,r=this,q=new U.bS(null,b)
q.aI(b,r,c)
q.r=r.r
q.e=r.e
t=r.f
s=new U.bq(null)
s.a=t.a
t=t.c
if(t!=null)s.c=U.lE(s,t)
q.f=s
if(!c)q.au(q.r)
return q},
aW:function(){return!1},
aH:function(a,b,c){var t,s,r,q,p,o,n=this,m=".nt-param-confirm",l="querySelectorAll",k="click",j=n.b.fr,i=j.f
i.classList.add("show")
t=j.r
j=t.style
s=""+b+"px"
j.top=s
t.classList.remove("small")
C.b.K(t,"")
C.b.a3(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">\n          <div class="nt-param-label">'+H.a(n.c)+':</div>\n        </div>\n        <div class="nt-param-row">\n          <div id="nt-expression-'+n.gS()+'" class="nt-expression-root"></div>\n        </div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
j=u.C
s=j.i("~(1)").a(new U.i7())
u.M.a(null)
r=W.z(t,k,s,!1,j.c)
j=u.h
s=document
H.aR(j,j,"T",l)
q=u.W
p=u.r
o=u.I
new W.aQ(p.a(new W.ak(s.querySelectorAll(m),q)),!1,k,o).u(new U.i8(n,r,i,c))
H.aR(j,j,"T",l)
new W.aQ(p.a(new W.ak(s.querySelectorAll(m),q)),!1,"mousedown",o).u(new U.i9())
H.aR(j,j,"T",l)
new W.aQ(p.a(new W.ak(s.querySelectorAll(m),q)),!1,"mouseup",o).u(new U.ia())
H.aR(j,j,"T",l)
new W.aQ(p.a(new W.ak(s.querySelectorAll(".nt-param-cancel"),q)),!1,k,o).u(new U.ib(r,i))
o=n.f
o.b=s.querySelector("#nt-expression-"+n.gS())
o.cl()}}
U.i7.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aR(t,t,"T","querySelectorAll")
s=new W.ak(s.querySelectorAll(".nt-pulldown-menu"),u.W)
s.t(s,new U.i6())},
$S:2}
U.i6.prototype={
$1:function(a){return J.ef(u.h.a(a))},
$S:16}
U.i8.prototype={
$1:function(a){var t,s,r,q=this
u.V.a(a)
t=u.h
s=document
H.aR(t,t,"T","querySelectorAll")
if(s.querySelectorAll(".nt-expression.empty").length>0)return!1
q.b.Y()
q.c.classList.remove("show")
q.d.$0()
t=q.a
r=U.ce(t)
s=t.b
s.fr.O(new U.bn(s.a,s.b,t.a,t.e,U.d_(t.f.c),r))
return!1},
$S:10}
U.i9.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aR(t,t,"T","querySelectorAll")
s=new W.ak(s.querySelectorAll(".nt-expression.empty"),u.W)
s.t(s,new U.i5())},
$S:2}
U.i5.prototype={
$1:function(a){return J.bJ(u.h.a(a)).l(0,"warn")},
$S:32}
U.ia.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aR(t,t,"T","querySelectorAll")
s=new W.ak(s.querySelectorAll(".nt-expression.empty"),u.W)
s.t(s,new U.i4())},
$S:2}
U.i4.prototype={
$1:function(a){return J.bJ(u.h.a(a)).a9(0,"warn")},
$S:32}
U.ib.prototype={
$1:function(a){u.V.a(a)
this.a.Y()
this.b.classList.remove("show")},
$S:2}
U.df.prototype={
ga0:function(a){return"int"},
aC:function(a,b,c){var t=new U.df(null,b)
t.aI(b,this,c)
t.cB(b,this,c)
return t}}
U.bW.prototype={
a2:function(){var t,s=this.e
if(s==null)return""
t=C.c.hg(s,1)
return C.d.fN(t,".0")?C.d.ab(t,0,t.length-2):t},
au:function(a){return this.e=U.bH(a,0)},
as:function(){var t=this.f
return t==null?"":C.c.n(t)},
aV:function(a){return this.f=U.bH(a,null)},
cB:function(a,b,c){var t,s,r=this
r.r=b.r
r.x=b.x
t=r.f=b.f
if(!c){s=b.e
r.e=s==null?t:s}},
aW:function(){return!1},
aH:function(a,b,c){var t,s,r,q,p,o,n,m=this,l="querySelectorAll",k=m.b.fr,j=k.f
j.classList.add("show")
t=k.r
k=t.style
s=""+b+"px"
k.top=s
t.classList.remove("small")
C.b.K(t,"")
C.b.a3(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">'+('      <div class="nt-param-name">'+H.a(m.c)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+m.gS()+'" type="number" step="'+H.a(m.x)+'" value="'+H.a(m.e)+'">\n        <span class="nt-param-unit">'+H.a(m.d)+"</span>\n      </div>\n    ")+'</div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
k="#nt-param-label-"+m.gS()
s=document
r=u.a.a(s.querySelector(k))
q=u.p.a(s.querySelector("#nt-param-"+m.gS()))
k=u.h
H.aR(k,k,"T",l)
p=u.W
o=u.r
n=u.I
new W.aQ(o.a(new W.ak(s.querySelectorAll(".nt-param-confirm"),p)),!1,"click",n).u(new U.iH(m,q,j,c))
H.aR(k,k,"T",l)
new W.aQ(o.a(new W.ak(s.querySelectorAll(".nt-param-cancel"),p)),!1,"click",n).u(new U.iI(j))
if(q!=null){q.focus()
if(r!=null){k=u.E
s=k.i("~(1)")
p=s.a(new U.iJ(r,q))
u.M.a(null)
k=k.c
W.z(q,"change",p,!1,k)
W.z(q,"input",s.a(new U.iK(r,q)),!1,k)}}}}
U.iH.prototype={
$1:function(a){var t,s,r,q=this
u.V.a(a)
t=q.b
if(t!=null)q.a.e=U.bH(t.value,0)
q.c.classList.remove("show")
q.d.$0()
t=q.a
s=U.ce(t)
r=t.b
r.fr.O(new U.bn(r.a,r.b,t.a,t.ga0(t),t.e,s))},
$S:2}
U.iI.prototype={
$1:function(a){var t,s
u.V.a(a)
t=this.a.classList
s=t.contains("show")
t.remove("show")
return s},
$S:10}
U.iJ.prototype={
$1:function(a){J.eg(this.a,this.b.value)},
$S:3}
U.iK.prototype={
$1:function(a){J.eg(this.a,this.b.value)},
$S:3}
U.cs.prototype={
ga0:function(a){return"range"},
aC:function(a,b,c){var t=this,s=new U.cs(null,b)
s.aI(b,t,c)
s.cB(b,t,c)
s.cx=t.cx
s.cy=t.cy
return s},
aH:function(a,b,c){var t,s,r,q,p,o,n=this,m=n.b.fr,l=m.f
l.classList.add("show")
t=m.r
m=t.style
s=""+b+"px"
m.top=s
t.classList.remove("small")
C.b.K(t,"")
m=document
r=m.createElement("div")
r.className="nt-param-table"
t.appendChild(r)
C.b.a3(r,'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.a(n.c)+':\n            <label id="nt-param-label-'+n.gS()+'" for="nt-param-'+n.gS()+'">'+H.a(n.e)+'</label>\n            <span class="nt-param-unit">'+H.a(n.d)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+n.gS()+'" type="range" value="'+H.a(n.e)+'" min="'+H.a(n.cx)+'" max="'+H.a(n.cy)+'" step="'+H.a(n.x)+'">\n          </div>\n        </div>\n      ')
q=u.a.a(m.querySelector("#nt-param-label-"+n.gS()))
p=u.p.a(m.querySelector("#nt-param-"+n.gS()))
if(p!=null&&q!=null){m=u.E
s=m.i("~(1)")
o=s.a(new U.iN(n,p,l,c))
u.M.a(null)
m=m.c
W.z(p,"change",o,!1,m)
W.z(p,"input",s.a(new U.iO(q,p)),!1,m)}}}
U.iN.prototype={
$1:function(a){var t,s,r=this,q=r.a
q.e=U.bH(r.b.value,0)
r.c.classList.remove("show")
r.d.$0()
t=U.ce(q)
s=q.b
s.fr.O(new U.bn(s.a,s.b,q.a,"range",q.e,t))
a.stopPropagation()},
$S:3}
U.iO.prototype={
$1:function(a){J.eg(this.a,this.b.value)},
$S:3}
U.bf.prototype={
gfH:function(){var t=this.b
return t==null||t===""?this.a:t}}
U.cv.prototype={
ga0:function(a){return"select"},
a2:function(){var t=this.e
return t==null?"":t},
au:function(a){this.e=a},
as:function(){return this.f},
aV:function(a){this.f=a},
bw:function(){return H.a(this.ge7())+H.a(this.d)+" \u25be"},
ge7:function(){var t=this.x,s=H.C(t),r=new H.af(t,s.i("w(1)").a(new U.iQ(this)),s.i("af<1>"))
if(r.gk(r)===1)return r.C(0,0).gfH()
else return this.e},
en:function(a,b,c){var t,s=this
s.f=b.f
s.r=b.r
C.a.t(b.x,new U.iP(s))
if(!c){t=b.e
s.e=t==null?s.f:t}},
aC:function(a,b,c){return U.on(b,this,c)},
aW:function(){switch(this.r){case"always-quote":return!0
case"never-quote":return!1
case"smart-quote":default:return P.fY(this.e)==null&&!C.a.G(H.m(["true","false"],u.s),this.e)}},
aH:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b.fr,f=g.f
f.classList.add("show")
t=g.r
g=t.style
s=""+b+"px"
g.top=s
t.classList.add("small")
C.b.K(t,"")
g=document
r=g.createElement("div")
r.className="nt-param-table"
t.appendChild(r)
for(s=h.x,q=s.length,p=u.C,o=p.i("~(1)"),n=u.M,p=p.c,m=0;m<s.length;s.length===q||(0,H.A)(s),++m){l=s[m]
k=g.createElement("div")
k.className="nt-param-row"
j=g.createElement("div")
j.className="nt-select-option"
i=l.b
C.b.K(j,i==null||i===""?l.a:i)
if(l.a==h.e)j.classList.add("selected")
i=o.a(new U.iR(h,l,f,c))
n.a(null)
W.z(j,"click",i,!1,p)
k.appendChild(j)
r.appendChild(k)}}}
U.iQ.prototype={
$1:function(a){var t
u.fn.a(a)
if(a.a==this.a.e){t=a.b
t=t!=null&&t!==""}else t=!1
return t},
$S:41}
U.iP.prototype={
$1:function(a){return C.a.l(this.a.x,u.fn.a(a))},
$S:42}
U.iR.prototype={
$1:function(a){var t,s,r,q=this
u.V.a(a)
t=q.a
t.e=q.b.a
q.c.classList.remove("show")
q.d.$0()
s=U.ce(t)
r=t.b
r.fr.O(new U.bn(r.a,r.b,t.a,"select",t.e,s))
a.stopPropagation()},
$S:2}
U.cC.prototype={
ga0:function(a){return"text"},
a2:function(){var t=this.e
return t==null?"":t},
au:function(a){this.e=a},
as:function(){return this.f},
aV:function(a){this.f=a},
aC:function(a,b,c){var t,s,r=new U.cC(null,b)
r.aI(b,this,c)
t=r.f=this.f
if(!c){s=this.e
r.e=s==null||s===""?t:s}return r},
aW:function(){return!0},
aH:function(a,b,c){var t,s,r,q,p,o,n,m,l=this,k="querySelectorAll",j=l.b.fr,i=j.f
i.classList.add("show")
t=j.r
j=t.style
s=""+b+"px"
j.top=s
t.classList.remove("small")
C.b.K(t,"")
j=l.e
if(j==null)j=""
r=new P.ck().dv(j)
C.b.a3(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">'+('      <input class="nt-param-input" id="nt-param-'+l.gS()+'" type="text" value="'+r+'">\n      <span class="nt-param-unit">'+H.a(l.d)+"</span>\n    ")+'</div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
j="#nt-param-label-"+l.gS()
s=document
q=u.a.a(s.querySelector(j))
p=u.p.a(s.querySelector("#nt-param-"+l.gS()))
j=u.h
H.aR(j,j,"T",k)
o=u.W
n=u.r
m=u.I
new W.aQ(n.a(new W.ak(s.querySelectorAll(".nt-param-confirm"),o)),!1,"click",m).u(new U.iU(l,p,i,c))
H.aR(j,j,"T",k)
new W.aQ(n.a(new W.ak(s.querySelectorAll(".nt-param-cancel"),o)),!1,"click",m).u(new U.iV(i))
if(p!=null){p.focus()
if(q!=null){j=u.E
s=j.i("~(1)")
o=s.a(new U.iW(q,p))
u.M.a(null)
j=j.c
W.z(p,"change",o,!1,j)
W.z(p,"input",s.a(new U.iX(q,p)),!1,j)}}}}
U.iU.prototype={
$1:function(a){var t,s,r,q=this
u.V.a(a)
t=q.b
if(t!=null)q.a.e=t.value
q.c.classList.remove("show")
q.d.$0()
t=q.a
s=U.ce(t)
r=t.b
r.fr.O(new U.bn(r.a,r.b,t.a,"text",t.e,s))},
$S:2}
U.iV.prototype={
$1:function(a){var t,s
u.V.a(a)
t=this.a.classList
s=t.contains("show")
t.remove("show")
return s},
$S:10}
U.iW.prototype={
$1:function(a){J.eg(this.a,this.b.value)},
$S:3}
U.iX.prototype={
$1:function(a){J.eg(this.a,this.b.value)},
$S:3}
U.h8.prototype={
aa:function(a){var t,s,r,q
try{s=this.a
if(s.length===0)return 0
r=H.C(s)
r=new H.T(s,r.i("e(1)").a(new U.ha(a)),r.i("T<1,e>")).ck(0,new U.hb())
return r}catch(q){t=H.L(q)
P.ed("here is the fail "+H.a(J.B(t)))
throw q}},
a1:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r].a1(a)
if(q!=null)return q}return null},
sbZ:function(a){this.a=u.t.a(a)}}
U.ha.prototype={
$1:function(a){u.bz.a(a)
return a.aa(this.a)},
$S:72}
U.hb.prototype={
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
bX:function(a,b){var t,s,r,q,p,o,n=this
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
a.insertRule(t+C.d.aF(s+C.d.aF(q+" "+p+" "+o))+" }",0)}}
U.cb.prototype={
n:function(a){return this.b}}
U.al.prototype={
gaR:function(){var t=this.dy
return t===C.o||t===C.k},
c_:function(a,b){var t,s,r,q,p=this,o=U.li(p.fr,p.a,p.c,b)
o.c=p.c
o.d=p.d
o.e=p.e
o.f=p.f
o.ch=p.ch
o.cx=p.cx
o.cy=p.cy
o.db=p.db
o.dx=p.dx
o.dy=p.dy
for(t=p.r,t=t.gar(t),s=H.h(t),s=new H.a4(J.y(t.a),t.b,s.i("@<1>").q(s.Q[1]).i("a4<1,2>")),t=o.r;s.m();){r=s.a.aC(0,o,b)
t.j(0,r.a,r)}for(t=p.x,t=t.gar(t),s=H.h(t),s=new H.a4(J.y(t.a),t.b,s.i("@<1>").q(s.Q[1]).i("a4<1,2>")),t=o.x;s.m();){q=s.a.aC(0,o,b)
t.j(0,q.a,q)}return o},
aa:function(a){var t,s=this.a==a?1:0,r=this.Q
if(r.length!==0){t=H.C(r)
t=new H.T(r,t.i("e(1)").a(new U.hi(a)),t.i("T<1,e>")).ck(0,new U.hj())
if(typeof t!=="number")return H.a0(t)
s+=t}return s},
a1:function(a){var t,s,r,q
if(this.b==a)return this
for(t=this.Q,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r].a1(a)
if(q!=null)return q}return null},
e6:function(a,b){var t=this.r
if(t.H(b))return t.h(0,b)
t=this.x
if(t.H(b))return t.h(0,b)
throw H.b(P.cj("Attribute with given ID not found on block: "+H.a(b)))},
aG:function(){var t=this
if(t.gaR())return H.a(t.fr.b)+"-block-starter"
if(t.Q.length!==0)return H.a(t.fr.b)+"-block-container"
return H.a(t.fr.b)+"-block-command"},
a5:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
b.fy=a0
b.fx=a
t=document
s=t.createElement("div")
b.k1=s
s.classList.add("nt-block")
r=b.aG()
b.k1.classList.add(r)
if(b.Q.length!==0)b.k1.classList.add("nt-block-with-clauses")
U.ky(b,b.k1)
q=t.createElement("div")
q.classList.add("nt-block-left-bar")
s=r+"-color"
q.classList.add(s)
s=b.ch
if(s!=null){p=q.style
p.backgroundColor=s}s=q.style
p=b.x
o=p.a
n=b.Q.length
o=""+(4+o+n*2)
s.toString
C.h.aQ(s,C.h.ay(s,"grid-row-end"),o,"")
b.k1.appendChild(q)
m=t.createElement("div")
o=r+"-color"
m.classList.add(o)
o=b.ch
if(o!=null){s=m.style
s.backgroundColor=o}if(b.Q.length!==0)m.classList.add("nt-block-clause-header")
else m.classList.add("nt-block-header")
b.k1.appendChild(m)
b.k2=t.createElement("div")
b.dZ()
b.k2.classList.add("nt-block-action")
m.appendChild(b.k2)
l=t.createElement("div")
l.classList.add("nt-block-params")
m.appendChild(l)
for(s=b.r,s=s.gar(s),o=H.h(s),o=new H.a4(J.y(s.a),s.b,o.i("@<1>").q(o.Q[1]).i("a4<1,2>"));o.m();)l.appendChild(o.a.dA())
k=t.createElement("div")
k.classList.add("nt-block-properties")
m.appendChild(k)
if(p.a>0){s=b.y!=="hidden"
o=new U.fb(s,new U.hg(b,k))
n=o.a=t.createElement("div")
n.classList.add("nt-toggle")
n.innerText=s?"\u25b2":"\u25bc"
j=u.C
i=j.i("~(1)").a(o.gfw(o))
u.M.a(null)
W.z(n,"click",i,!1,j.c)
b.k3=o
if(b.y==="hidden")k.classList.add("nt-block-properties-hidden")
b.k2.appendChild(b.k3.a)}for(s=p.gar(p),p=H.h(s),p=new H.a4(J.y(s.a),s.b,p.i("@<1>").q(p.Q[1]).i("a4<1,2>"));p.m();){s=p.a
s.toString
h=t.createElement("div")
h.classList.add("nt-property")
g=t.createElement("div")
g.classList.add("nt-property-name")
g.innerText="\u2022 "+H.a(s.c)
h.appendChild(g)
h.appendChild(s.dA())
s=r+"-color"
h.classList.add(s)
s=b.ch
if(s!=null){o=h.style
o.backgroundColor=s}k.appendChild(h)}s=b.Q
p=s.length
if(p!==0){if(0>=p)return H.o(s,0)
f=s[0].a5(b.fx,m)
b.k1.appendChild(f)}for(s=b.Q,s=H.ae(s,1,null,H.C(s).c),s=new H.P(s,s.gk(s),s.$ti.i("P<a8.E>"));s.m();){p=s.d
e=t.createElement("div")
e.classList.add("nt-clause-divider")
o=r+"-color"
e.classList.add(o)
o=b.ch
if(o!=null){n=e.style
n.backgroundColor=o}b.k1.appendChild(e)
d=p.a5(b.fx,e)
b.k1.appendChild(d)}if(b.Q.length!==0){c=t.createElement("div")
c.classList.add("nt-clause-footer")
t=r+"-color"
c.classList.add(t)
t=b.ch
if(t!=null){s=c.style
s.backgroundColor=t}b.k1.appendChild(c)}U.lk(b,b.k1,new U.hh(b))
return b.k1},
dZ:function(){var t,s,r,q,p=this,o=new P.aP(""),n=p.f
if(n!=null&&C.d.dY(n).length!==0){n=H.a(p.f)+"\n"
o.a=n
o.a=n+"\n"}n=p.fy
t=n.b==="workspace-chain"&&n.e===0
s=p.fr
if(t){r=C.a.h(s.Q,n.a)
n=s.x
n.c6(o,0,r.a)
if(o.a.length===0)n.aS(o,0,p)}else s.x.aS(o,0,p)
n=o.a
q=new P.ck().dv(C.d.aF(n.charCodeAt(0)==0?n:n))
n=p.k2;(n&&C.b).a3(n,'<span title="'+q+'">'+H.a(p.c)+"</span>")},
N:function(){var t,s,r,q,p,o=this
o.k1.classList.remove("nt-drag-over")
o.k1.classList.remove("nt-block-clause-drag-over")
for(t=o.Q,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.A)(t),++q){p=t[q].N()
r=r||p}if((o.go||o.id)&&!r){o.k1.classList.add("nt-drag-over")
r=!0}return r},
a4:function(){var t,s,r,q=this
q.k1.classList.remove("nt-drag-over")
q.k1.classList.remove("nt-block-clause-drag-over")
q.id=q.go=!1
for(t=q.Q,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].a4()},
bz:function(a){var t,s,r=this
U.lw(r,u.D.a(a))
t=H.m([],u.u)
C.a.l(t,r)
C.a.L(t,r.fy.r)
U.hp(r.fx.e,t,!0,null)
s=r.fr
s.dQ(r.fy)
s.dC()},
c4:function(a){var t,s,r,q,p=this
u.D.a(a)
$.aL=!0
$.ev=$.et=$.eu=!1
t=p.fr
t.al()
t.a4()
s=t.k2
if(s==null)return
r=u.i
t.sW(r.a(null))
q=p.fy
switch(q.b){case"workspace-chain":if(q.e===0)t.dw(s,$.lu,$.lv)
else{t=C.a.h(t.Q,q.a)
q=p.fy.e
r.a(s)
C.a.am(t.a,q,s)
t.a_()}break
case"block-clause":t=C.a.h(C.a.h(t.Q,q.a).a1(p.fy.c).Q,p.fy.d)
q=p.fy.e
r.a(s)
C.a.am(t.a,q,s)
t.a_()
break}},
a7:function(a){var t,s,r,q,p,o=this
u.k.a(a)
$.aL=!0
t=o.fr
s=t.k2
r=u.i
t.sW(r.a(null))
q=o.fy
switch(q.b){case"workspace-chain":q=C.a.h(t.Q,q.a)
p=o.fy.e
if(typeof p!=="number")return p.v()
r.a(s)
C.a.am(q.a,p+1,s)
q.a_()
break
case"block-clause":q=C.a.h(C.a.h(t.Q,q.a).a1(o.fy.c).Q,o.fy.d)
p=o.fy.e
if(typeof p!=="number")return p.v()
r.a(s)
C.a.am(q.a,p+1,s)
q.a_()
break}t.O(U.ca(J.aT(s,0)))
t.al()},
bn:function(){var t,s,r
for(t=this.Q,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].hb()},
bm:function(){var t,s,r,q,p,o=this,n=o.k2
n.toString
C.b.K(n,"")
o.dZ()
n=o.k3
if(n!=null)o.k2.appendChild(n.a)
for(n=o.Q,t=n.length,s=0;s<n.length;n.length===t||(0,H.A)(n),++s)for(r=n[s].a,q=r.length,p=0;p<r.length;r.length===q||(0,H.A)(r),++p)r[p].bm()},
sds:function(a){this.Q=u.al.a(a)}}
U.hf.prototype={
$1:function(a){var t
u.ds.a(a)
t=this.a
return C.a.l(t.Q,new U.aC(t,a.d,a.e,a.f,H.m([],u.u)))},
$S:47}
U.hi.prototype={
$1:function(a){return u.ds.a(a).aa(this.a)},
$S:61}
U.hj.prototype={
$2:function(a,b){H.q(a)
H.q(b)
if(typeof a!=="number")return a.v()
if(typeof b!=="number")return H.a0(b)
return a+b},
$S:17}
U.hg.prototype={
$1:function(a){var t=this.a
t.y=a?"shown":"hidden"
this.b.classList.toggle("nt-block-properties-hidden")
t.fr.O(U.ca(t))},
$S:49}
U.hh.prototype={
$1:function(a){return this.a.go=a},
$S:29}
U.hk.prototype={
$1:function(a){u.k.a(a)
return this.a.$1(!0)},
$S:4}
U.hl.prototype={
$1:function(a){u.k.a(a)
return this.a.$1(!1)},
$S:4}
U.aB.prototype={
a5:function(a,b){var t,s,r,q,p,o,n,m,l=this
l.f=b
t=document
s=t.createElement("div")
l.r=s
s.classList.add("nt-fragment")
r=Z.ci(l.r,l.e.k3)
r.gap(r).u(l.ga6())
r.gan(r).u(new U.hn(l))
r.gao(r).u(new U.ho(l))
t=t.createElement("div")
l.b=t
t.classList.add("nt-chain")
if(l.a.length===0)return l.b
for(t=u.i,q=0;s=l.a,q<s.length;q=n){p=s[q]
o=l.f
n=q+1
m=new U.cX()
s=t.a(H.ae(s,n,null,H.C(s).c))
m.a=o
m.b="workspace-chain"
m.e=q
m.sav(s)
p.a5(a,m)}U.hp(l.b,s,!1,l.r)
l.e0(l.c,l.d)
return l.b},
e0:function(a,b){var t,s,r=this
r.c=a
r.d=b
t=r.b.style
s=H.a(a)+"px"
t.left=s
t=r.b.style
s=H.a(b)+"px"
t.top=s},
ha:function(a){var t,s,r,q,p,o,n
this.f=a
for(t=u.i,s=0;r=this.a,s<r.length;s=n){q=r[s]
p=q.fy
o=this.f
n=s+1
r=H.ae(r,n,null,H.C(r).c)
p.toString
t.a(r)
p.f=p.e=p.d=p.c=p.b=p.a=null
p.a=o
p.b="workspace-chain"
p.e=s
p.sav(r)
q.bn()}},
N:function(){var t,s,r,q,p,o=this
o.r.classList.remove("nt-drag-over")
for(t=o.a,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.A)(t),++q){p=t[q].N()
r=r||p}if(o.x&&!r){o.r.classList.add("nt-drag-over")
r=!0}return r},
a4:function(){var t,s,r
this.r.classList.remove("nt-drag-over")
this.x=!1
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].a4()},
a_:function(){var t,s,r,q,p,o,n,m=this
for(t=u.i,s=0;r=m.a,s<r.length;s=n){q=r[s]
p=q.fy
o=m.f
n=s+1
r=H.ae(r,n,null,H.C(r).c)
p.toString
t.a(r)
p.f=p.e=p.d=p.c=p.b=p.a=null
p.a=o
p.b="workspace-chain"
p.e=s
p.sav(r)
q.bn()}U.hp(m.b,r,!1,m.r)},
fK:function(){var t=this,s=t.a,r=s.length
if(r!==0){if(0>=r)return H.o(s,0)
s=!s[0].gaR()}else s=!0
if(!s)return
t.r.classList.add("show")
s=J.cT(t.d)
r=t.b.style
s=""+(s-40)+"px"
r.top=s},
a7:function(a){var t,s,r,q,p,o,n,m=this
u.k.a(a)
$.aL=!0
t=m.e
s=t.k2
r=u.i
t.sW(r.a(null))
q=J.aT(s,0)
p=U.d6(m.b)
o=a.d.E(0,p)
n=m.d
if(typeof n!=="number")return n.E()
m.d=n-40+J.c7(o.b)
r.a(s)
C.a.am(m.a,0,s)
m.a_()
t.O(U.ca(q))
t.al()}}
U.hn.prototype={
$1:function(a){u.k.a(a)
return this.a.x=!0},
$S:7}
U.ho.prototype={
$1:function(a){u.k.a(a)
return this.a.x=!1},
$S:7}
U.aC.prototype={
a5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=document.createElement("div")
i.b=h
h.classList.add("nt-clause")
h=i.c
t=h.fr
s=Z.ci(b,t.k4)
r=i.ga6()
s.gap(s).u(r)
s.gan(s).u(new U.hq(i))
s.gao(s).u(new U.hr(i))
q=Z.ci(i.b,t.k4)
q.gap(q).u(r)
q.gan(q).u(new U.hs(i))
q.gao(q).u(new U.ht(i))
if(i.a.length===0){i.cs()
return i.b}for(t=i.d,r=u.i,p=0;o=i.a,p<o.length;p=m){n=o[p]
m=p+1
l=H.ae(o,m,null,H.C(o).c)
o=h.fy.a
k=h.b
j=new U.cX()
r.a(l)
j.a=o
j.b="block-clause"
j.c=k
j.e=p
j.d=t
j.sav(l)
n.a5(a,j)}U.kw(i.b,o,"nt-block-clause",!1)
return i.b},
cs:function(){var t,s=this
s.b.classList.add("nt-clause-empty")
s.b.appendChild(U.lQ(!1,s))
t=document.createElement("div")
t.className="nt-clause-drop"
s.b.appendChild(t)
s.b.appendChild(U.lQ(!0,s))},
hb:function(){var t,s,r,q,p,o,n,m,l,k
for(t=this.c,s=this.d,r=u.i,q=0;p=this.a,q<p.length;q=k){o=p[q]
n=o.fy
m=t.fy.a
l=t.b
k=q+1
p=H.ae(p,k,null,H.C(p).c)
n.toString
r.a(p)
n.f=n.e=n.d=n.c=n.b=n.a=null
n.a=m
n.b="block-clause"
n.c=l
n.e=q
n.d=s
n.sav(p)
o.bn()}},
a_:function(){var t,s,r,q,p,o,n,m,l,k=this,j=k.b
j.toString
C.b.K(j,"")
if(k.a.length===0){k.cs()
return}k.b.classList.remove("nt-clause-empty")
for(j=k.c,t=k.d,s=u.i,r=0;q=k.a,r<q.length;r=l){p=q[r]
o=p.fy
n=j.fy.a
m=j.b
l=r+1
q=H.ae(q,l,null,H.C(q).c)
o.toString
s.a(q)
o.f=o.e=o.d=o.c=o.b=o.a=null
o.a=n
o.b="block-clause"
o.c=m
o.e=r
o.d=t
o.sav(q)
p.bn()}U.kw(k.b,q,"nt-block-clause",!1)},
N:function(){var t,s,r,q,p,o=this
o.b.classList.remove("nt-block-clause-drag-over")
t=o.a
s=t.length
if(s!==0){if(0>=s)return H.o(t,0)
t[0].k1.classList.remove("nt-block-clause-drag-over")}for(t=o.a,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.A)(t),++q){p=t[q].N()
r=r||p}if((o.r||o.x)&&!r){t=o.a
s=t.length
if(s===0)o.b.classList.add("nt-block-clause-drag-over")
else{if(0>=s)return H.o(t,0)
t[0].k1.classList.add("nt-block-clause-drag-over")}r=!0}return r},
a4:function(){var t,s,r,q=this
q.b.classList.remove("nt-block-clause-drag-over")
t=q.a
s=t.length
if(s!==0){if(0>=s)return H.o(t,0)
t[0].k1.classList.remove("nt-block-clause-drag-over")}q.x=q.r=!1
for(t=q.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].a4()},
a7:function(a){var t,s,r,q=this
u.k.a(a)
$.aL=!0
t=q.c.fr
s=t.k2
r=u.i
t.sW(r.a(null))
r.a(s)
C.a.am(q.a,0,s)
q.a_()
q.b.classList.remove("nt-clause-empty")
t.O(U.ca(J.aT(s,0)))}}
U.hq.prototype={
$1:function(a){u.k.a(a)
return this.a.x=!0},
$S:7}
U.hr.prototype={
$1:function(a){u.k.a(a)
return this.a.x=!1},
$S:7}
U.hs.prototype={
$1:function(a){u.k.a(a)
return this.a.r=!0},
$S:7}
U.ht.prototype={
$1:function(a){u.k.a(a)
return this.a.r=!1},
$S:7}
U.eC.prototype={}
U.hu.prototype={
dE:function(a,b,c){var t,s,r,q,p=this,o=p.c
if(c!=null)p.c=c
t=a.cy.b
s=H.C(t)
r=s.i("aF<1,t<al>>")
q=p.fO(a,P.cm(new H.aF(new H.af(t,s.i("w(1)").a(new U.hv(!0,a)),s.i("af<1>")),s.i("t<al>(1)").a(new U.hw()),r),!0,r.i("d.E")))
p.c=o
return q},
fO:function(a,b){var t,s,r,q
u.eB.a(b)
t=new P.aP("")
s=a.Q
r=H.m(s.slice(0),H.C(s).i("G<1>"))
C.a.cv(r,U.q9())
for(s=r.length,q=0;q<r.length;r.length===s||(0,H.A)(r),++q)this.dD(t,r[q].a,a.y,a.z)
for(s=b.length,q=0;q<b.length;b.length===s||(0,H.A)(b),++q)this.dD(t,b[q],a.y,a.z)
s=t.a
return s.charCodeAt(0)==0?s:s},
dD:function(a,b,c,d){var t,s,r=this
u.t.a(b)
t=J.ay(b)
if(t.gM(b))return
s=t.h(b,0)
if(!s.gaR())return
r.e3(a,0,r.b.a,c)
r.aS(a,0,s)
r.c6(a,1,t.aX(b,1).aq(0))
r.e3(a,0,r.b.b,d)
a.a+="\n"},
c6:function(a,b,c){var t,s
u.t.a(c)
t=c.length
if(t===0)return
for(s=0;s<c.length;c.length===t||(0,H.A)(c),++s)this.aS(a,b,c[s])},
aS:function(a,b,c){var t,s,r,q,p,o,n,m,l=this,k=c.e
if(k==null){k=H.a(c.c)
for(t=c.r,s=0;s<t.a;++s)k+=" {"+s+"}"
for(t=c.x,s=0;s<t.a;++s)k+=" {P"+s+"}"}for(t=c.r,r=new H.ad(t,H.h(t).i("ad<1>")),r=r.gw(r),s=0;r.m();){q=r.d
k=l.dR(k,"{"+s+"}",c,t.h(0,q));++s}for(t=c.x,r=new H.ad(t,H.h(t).i("ad<1>")),r=r.gw(r),s=0;r.m();){q=r.d
k=l.dR(k,"{P"+s+"}",c,t.h(0,q));++s}l.bt(a,b,k)
for(t=c.Q,r=t.length,q=b+1,p=0;p<t.length;t.length===r||(0,H.A)(t),++p){o=t[p]
n=l.b.c
m=o.e
if(m!=null)n=m
if(n!=="")l.bt(a,b,n)
l.c6(a,q,o.a)
n=l.b.d
m=o.f
if(m!=null)n=m
if(n!=="")l.bt(a,b,n)}},
dR:function(a,b,c,d){var t=U.ce(d),s=c.a,r=c.b,q=d.a,p=d.ga0(d)
p=H.r(this.c.$6(this.d,s,r,q,t,p))
if(typeof p!="string")H.D(H.b8(p))
return H.l0(a,b,p)},
bt:function(a,b,c){var t,s,r
for(t="",s=0;s<b;++s)t+="  "
a.a+=t
r="\n"+t
a.a+=H.l0(c,"\n",r)+"\n"},
e3:function(a,b,c,d){var t=d!=null?d:c
if(t!=="")this.bt(a,b,t)}}
U.hv.prototype={
$1:function(a){var t
u.c.a(a)
if(this.a){t=a.a
t=H.ar(t.dx)&&t.gaR()&&this.b.aa(t.a)===0}else t=!1
return t},
$S:31}
U.hw.prototype={
$1:function(a){var t
u.c.a(a)
t=H.m([],u.u)
C.a.l(t,a.a)
return t},
$S:53}
U.d5.prototype={}
U.ex.prototype={}
U.db.prototype={}
U.ac.prototype={
em:function(a,b){var t=this
t.b=b.b
t.c=b.c
t.d=b.d
C.a.t(b.e,new U.i3(t))},
bd:function(a){var t,s=this,r=s.e,q=r.length
if(q===1){q=s.a
if(q.c!==s)a.a+="("
a.a+=H.a(s.b)+" "
if(0>=r.length)return H.o(r,0)
r[0].bd(a)
if(q.c!==s)a.a+=")"}else if(q===2){t=s.a
if(t.c!==s)a.a+="("
if(0>=q)return H.o(r,0)
r[0].bd(a)
a.a+=" "+H.a(s.b)+" "
if(1>=r.length)return H.o(r,1)
r[1].bd(a)
if(t.c!==s)a.a+=")"}else{r=s.b
if(r!=null)a.a+=r}},
fv:function(a){var t,s,r,q,p
u.dy.a(a)
t=this.e
s=t.length
r=a.length
if(s!==r)return!0
for(q=0;q<r;++q){p=a[q]
if(q>=s)return H.o(t,q)
if(p!=t[q].c)return!0}return!1},
e8:function(a){var t,s,r,q,p,o,n=this
u.dy.a(a)
t=n.e
s=t.length===0
if(n.fv(a)){C.a.sk(t,0)
for(r=n.a,q=u.U,p=0;p<a.length;++p)if(p===0&&s&&a[p]==n.c){o=new U.ac(r,a[p],H.m([],q))
o.b=n.b
C.a.l(t,o)}else C.a.l(t,new U.ac(r,a[p],H.m([],q)))}},
dk:function(a){var t,s,r=this,q=document.createElement("div")
C.b.K(q,H.a(r.b))
q.classList.add("nt-expression-text")
q.classList.add("editable")
t=H.a(r.c)
q.classList.add(t)
t=u.C
s=t.i("~(1)").a(new U.ie(r,q))
u.M.a(null)
W.z(q,"click",s,!1,t.c)
r.dB(q,a)
a.appendChild(q)},
dB:function(a,b){var t=u.C,s=t.i("~(1)"),r=s.a(new U.ig(b))
u.M.a(null)
t=t.c
W.z(a,"mouseenter",r,!1,t)
W.z(a,"mouseleave",s.a(new U.ih(b)),!1,t)},
bb:function(a,b){var t=document.createElement("div")
C.b.K(t,b?"(":")")
t.classList.add("nt-expression-text")
t.classList.add("parenthesis")
this.dB(t,a)
a.appendChild(t)},
fp:function(a){var t,s,r,q=this
q.b=J.B(U.bH(q.b,0))
t=W.nX("number")
t.className="nt-number-input"
t.value=q.b
t.step="1"
s=u.E
r=s.i("~(1)").a(new U.id(q,t))
u.M.a(null)
W.z(t,"change",r,!1,s.c)
a.appendChild(t)},
gfU:function(){var t=this.b
if(t!=null)return P.mO(t,new U.ii())!=null
return!1},
bl:function(a){var t,s,r=this,q=document.createElement("div")
q.className="nt-expression"
if((r.gfU()||r.b==null)&&r.c==="num")r.fp(q)
else if(r.b==null){q.classList.add("empty")
C.b.a3(q,"<small>&#9660;</small>")}else{t=r.e
s=t.length
if(s===1){r.bb(q,!0)
r.dk(q)
if(0>=t.length)return H.o(t,0)
t[0].bl(q)
r.bb(q,!1)}else if(s===2){r.bb(q,!0)
if(0>=t.length)return H.o(t,0)
t[0].bl(q)
r.dk(q)
if(1>=t.length)return H.o(t,1)
t[1].bl(q)
r.bb(q,!1)}else C.b.a3(q,"<div class='nt-expression-text "+H.a(r.c)+"'>"+H.a(r.b)+"</div>")}if(r.e.length===0){q.classList.add("editable")
t=u.C
s=t.i("~(1)").a(new U.il(r,q))
u.M.a(null)
W.z(q,"click",s,!1,t.c)}a.appendChild(q)},
dN:function(a){var t,s,r=u.h,q=document
H.aR(r,r,"T","querySelectorAll")
r=new W.ak(q.querySelectorAll(".nt-pulldown-menu"),u.W)
r.t(r,new U.ij())
t=q.createElement("div")
t.classList.add("nt-pulldown-menu")
q=this.a
this.eu(t,q.a.dx)
if(J.lb(q.a.db))C.b.a3(t,"<hr>")
C.b.a3(t,"<hr>")
s=W.lf("#")
C.n.K(s,"Clear")
s.className="clear"
t.appendChild(s)
r=u.C
q=r.i("~(1)").a(new U.ik(this,t))
u.M.a(null)
W.z(s,"click",q,!1,r.c)
a.appendChild(t)},
eu:function(a,b){var t,s,r,q,p,o,n,m
u.gp.a(b)
for(t=b.length,s=u.C,r=s.i("~(1)"),q=u.M,s=s.c,p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o.b==this.c){n=document.createElement("a")
n.href="#"
C.n.K(n,H.a(o.a))
a.appendChild(n)
m=r.a(new U.ic(this,a,o))
q.a(null)
W.z(n,"click",m,!1,s)}}}}
U.i3.prototype={
$1:function(a){var t=this.a
return C.a.l(t.e,U.lE(t.a,u.gI.a(a)))},
$S:54}
U.ie.prototype={
$1:function(a){u.V.a(a)
this.a.dN(this.b)
a.stopPropagation()},
$S:2}
U.ig.prototype={
$1:function(a){u.V.a(a)
this.a.classList.add("highlight")},
$S:2}
U.ih.prototype={
$1:function(a){u.V.a(a)
this.a.classList.remove("highlight")},
$S:2}
U.id.prototype={
$1:function(a){var t=this.a,s=this.b,r=s.value
t.b=r
if(r===""){t.b="0"
s.value="0"}},
$S:3}
U.ii.prototype={
$1:function(a){return null},
$S:18}
U.il.prototype={
$1:function(a){u.V.a(a)
this.a.dN(this.b)
a.stopPropagation()},
$S:2}
U.ij.prototype={
$1:function(a){return J.ef(u.h.a(a))},
$S:16}
U.ik.prototype={
$1:function(a){var t
u.V.a(a)
C.b.bk(this.b)
t=this.a
t.b=null
C.a.sk(t.e,0)
t.d=null
t.a.cl()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.ic.prototype={
$1:function(a){var t,s
u.V.a(a)
C.b.bk(this.b)
t=this.a
s=this.c
t.e8(s.c)
t.b=s.a
t.c=s.b
t.d=s.d
t.a.cl()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.bq.prototype={
n:function(a){var t,s=new P.aP("")
this.c.bd(s)
t=s.a
return t.charCodeAt(0)==0?t:t},
cl:function(){var t=this,s=t.b
if(s!=null&&t.c!=null){J.ns(s).bc(0)
t.c.bl(u.d.a(t.b))}}}
U.em.prototype={
bv:function(a){var t=this.b,s=H.C(t),r=new H.af(t,s.i("w(1)").a(new U.he(a)),s.i("af<1>"))
if(r.gk(r)===1)return r.gaD(r).a
return null},
fJ:function(a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=document,a5=a4.createElement("div"),a6=a2.a
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
k=l.aG()
n.x.classList.add(k)
j=n.x
i=k+"-color"
j.classList.add(i)
h=U.lj(l)
g=new P.aP("")
j=l.f
if(j!=null&&C.d.dY(j).length!==0){j=H.a(l.f)+"\n"
g.a=j
g.a=j+"\n"}j=n.d
j.x.aS(g,0,h)
i=g.a
f=C.d.aF(i.charCodeAt(0)==0?i:i)
e=new P.ck().cP(f,0,f.length)
d=e==null?f:e
i=n.x
c='<span title="'+d+'">'+H.a(l.c)+"</span>"
i.toString
C.b.ca(i,"beforeend",c,a3,a3)
i=l.ch
if(i!=null){c=n.x.style
c.backgroundColor=i}i=l.cy
if(i!=null){c=n.x.style
c.borderColor=i}i=l.cx
if(i!=null){c=n.x.style
c.color=i}i=l.db
if(i!=null){c=n.x.style
b=c.lineHeight
c.font=i
i=n.x.style
i.lineHeight=b}a=Z.lx(n.x,n.y,".nt-menu-slot-at-limit","nt-block-dragging")
i=a.gdK(a)
c=i.$ti
a0=c.i("~(1)").a(n.gby())
t.a(null)
i.a.bW(c.i("~(1)").a(a0),a3,null,!1)
a0=a.gdJ(a)
c=a0.$ti
a0.a.bW(c.i("~(1)").a(c.i("~(1)").a(n.gc3())),a3,null,!1)
c=n.x
c.toString
W.z(c,"dblclick",r.a(n.gh3()),!1,s)
c=n.x
c.toString
W.z(c,"contextmenu",p.a(n.gh1()),!1,q)
i=n.e
l=j.aa(l.a)
if(typeof i!=="number")return i.E()
if(typeof l!=="number")return H.a0(l)
l=i<=0||i-l>0
j=n.x
if(l)j.classList.remove("nt-menu-slot-at-limit")
else j.classList.add("nt-menu-slot-at-limit")
m.appendChild(n.x)}a1=Z.ci(a2.d,a6.k3)
a1.gan(a1).u(new U.hc(a2))
a1.gao(a1).u(new U.hd(a2))
a1.gap(a1).u(a2.ga6())
a2.e_()
return a2.d},
e_:function(){var t,s,r,q,p,o
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r]
p=q.e
o=q.d.aa(q.a.a)
if(typeof p!=="number")return p.E()
if(typeof o!=="number")return H.a0(o)
p=p<=0||p-o>0
o=q.x
if(p)o.classList.remove("nt-menu-slot-at-limit")
else o.classList.add("nt-menu-slot-at-limit")}},
N:function(){var t,s
if(!$.eu)t=$.et&&!$.ev
else t=!0
s=this.d
if(t)s.classList.add("nt-menu-drag-over")
else s.classList.remove("nt-menu-drag-over")},
a7:function(a){var t,s
u.k.a(a)
$.aL=!0
t=this.a
s=t.k2
t.sW(u.i.a(null))
t.O(U.ca(J.aT(s,0)))
t.al()}}
U.he.prototype={
$1:function(a){return u.c.a(a).a.a==this.a},
$S:31}
U.hc.prototype={
$1:function(a){u.k.a(a)
$.eu=!0
this.a.N()},
$S:8}
U.hd.prototype={
$1:function(a){u.k.a(a)
$.eu=!1
this.a.N()},
$S:8}
U.iF.prototype={
$1:function(a){var t,s,r,q=this
H.r(a)
t=document.createElement("div")
W.m2(t,u.cs.a(H.m(["nt-notch-"+H.a(a),q.a],u.s)))
if(!q.b||a!=="middle"){s=q.c.ch
if(s!=null){r=t.style
r.backgroundColor=s}}q.d.appendChild(t)},
$S:18}
U.iG.prototype={
$1:function(a){return this.a.id=a},
$S:29}
U.iE.prototype={
$1:function(a){var t,s,r,q=this
H.r(a)
t=document.createElement("div")
W.m2(t,u.cs.a(H.m(["nt-notch-"+H.a(a),q.a],u.s)))
if(!q.b||a!=="middle"){s=q.c.c.ch
if(s!=null){r=t.style
r.backgroundColor=s}}q.d.appendChild(t)},
$S:18}
U.bZ.prototype={}
U.el.prototype={
bp:function(){return P.am(P.a7(["type","block-changed","blockId",this.b,"instanceId",this.c],u.N,u.K))}}
U.bn.prototype={
bp:function(){var t=this
return P.am(P.a7(["type","attribute-changed","blockId",t.b,"instanceId",t.c,"attributeId",t.d,"attributeType",t.e,"value",t.f,"formattedValue",t.r],u.N,u.z))}}
U.eO.prototype={
bp:function(){return P.am(P.a7(["type","menu-item-clicked","blockId",this.b],u.N,u.K))}}
U.eP.prototype={
bp:function(){return P.am(P.a7(["type","menu-item-context-menu","blockId",this.b,"x",this.c,"y",this.d],u.N,u.K))}}
U.aO.prototype={
bz:function(a){var t,s,r,q=this
u.D.a(a)
t=U.lj(q.a)
q.r=t
s=q.f
r=new U.cX()
r.b="new-block"
r.f=s
t.a5(q.y,r)
U.lw(q.r,a)
U.hp(q.y.e,H.m([q.r],u.u),!1,null)
t=q.d
t.dQ(r)
t.dC()},
c4:function(a){var t
u.D.a(a)
$.aL=!0
$.ev=$.et=$.eu=!1
this.r=null
t=this.d
t.al()
t.a4()},
h4:function(a){this.d.O(new U.eO(this.a.a))},
h2:function(a){var t,s,r
u.V.a(a)
a.preventDefault()
a.stopPropagation()
t=this.a.a
s=a.pageX
r=a.pageY
this.d.O(new U.eP(t,H.q(s),H.q(r)))
return!1}}
U.fb.prototype={
fz:function(a,b){var t,s,r=this
u.V.a(b).stopPropagation()
t=!r.d
r.d=t
s=r.a
s.innerText=t?"\u25b2":"\u25bc"
s=r.d
r.e.$1(s)}}
U.bN.prototype={
O:function(a){var t,s,r=this
try{r.e1()
r.bm()
r.cy.e_()
$.h_().h(0,"NetTango").U("_relayCallback",[r.b,a.bp()])}catch(s){t=H.L(s)
P.ed("Unable to relay program changed event to Javascript")
P.ed(t)}},
aa:function(a){var t,s=this.Q
if(s.length===0)return 0
t=H.C(s)
return new H.T(s,t.i("e(1)").a(new U.hE(a)),t.i("T<1,e>")).ck(0,new U.hF())},
a1:function(a){var t,s,r,q
for(t=this.Q,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r].a1(a)
if(q!=null)return q}throw H.b(P.cj("Block with given instance ID not found in workspace: "+H.a(a)))},
fI:function(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.b,h=H.a(i)+"-styles",g=document,f=u.bg.a(g.getElementById(h))
if(f==null){f=g.createElement("style")
f.id=h
j.c.appendChild(f)}t=u.af.a(f.sheet)
for(;t.cssRules.length>0;)t.removeRule(0)
j.fy.bX(t,H.a(i)+"-block-starter")
j.go.bX(t,H.a(i)+"-block-container")
j.id.bX(t,H.a(i)+"-block-command")
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
n=o.a(new U.hx(j))
u.M.a(null)
p=p.c
W.z(q,"click",n,!1,p)
n=g.createElement("div")
n.className="nt-attribute-dialog"
j.r=n
W.z(n,"click",o.a(new U.hy()),!1,p)
j.f.appendChild(j.r)
j.c.appendChild(j.f)
p=g.createElement("div")
p.id=H.a(i)+"-space"
j.d=p
p.classList.add("nt-workspace")
p=new U.ex()
p.e=r
j.k1=p
s.appendChild(j.d)
g=g.createElement("div")
j.e=g
j.d.appendChild(g)
for(i=j.Q,m=0;m<i.length;++m)i[m].a5(j.k1,m)
j.h5()
l=j.cy.fJ(j.k1)
i=l.style
g=H.a(j.dy)+"px"
i.maxHeight=g
s.appendChild(l)
k=Z.ci(j.d,j.k3)
k.gan(k).u(new U.hz(j))
k.gh0(k).u(new U.hA(j))
k.gao(k).u(new U.hB(j))
k.gap(k).u(j.ga6())
i=j.r1
i.gan(i).u(new U.hC(j))
i=j.r1
i.gao(i).u(new U.hD(j))
j.e1()},
a7:function(a){var t,s,r,q=this
u.k.a(a)
$.aL=!0
q.al()
t=q.k2
q.sW(u.i.a(null))
s=U.d6(q.e)
r=a.d.E(0,s).E(0,$.lt)
q.dw(t,Math.max(0,J.c7(r.a)),Math.max(0,J.c7(r.b)))
q.O(U.ca(J.aT(t,0)))},
fC:function(a){var t,s=this
u.k.a(a)
$.aL=!0
s.al()
t=s.k2
s.sW(u.i.a(null))
s.O(U.ca(J.aT(t,0)))},
dw:function(a,b,c){var t,s,r,q,p=this
u.i.a(a)
t=new U.aB(p,H.m([],u.u))
s=p.Q
r=s.length
C.a.l(s,t)
q=t.a5(p.k1,r)
p.d.appendChild(q)
s=t.a
C.a.am(s,s.length,a)
t.a_()
t.e0(b,c)},
h6:function(a){var t,s,r,q=this.Q,p=C.a.h(q,a)
$.lu=p.c
$.lv=p.d
t=p.a
if(!!q.fixed$length)H.D(P.x("removeAt"))
if(!H.cM(a))H.D(H.b8(a))
if(typeof a!=="number")return a.ai()
s=q.length
if(a>=s)H.D(P.ct(a,null))
q.splice(a,1)[0]
s=p.b;(s&&C.b).bk(s)
for(r=0;r<q.length;++r)q[r].ha(r)
return t},
dQ:function(a){var t,s,r,q,p,o,n,m=this,l=a.b
switch(l){case"new-block":t=C.a.h(m.cy.b,a.f)
t.x.classList.remove("nt-block-dragging")
m.sW(u.i.a(H.m([t.r],u.u)))
break
case"workspace-chain":l=a.e
s=u.i
r=a.a
if(l===0)m.sW(s.a(m.h6(r)))
else{l=C.a.h(m.Q,r)
r=a.e
q=l.a
p=H.C(q).c
o=H.ae(q,r,null,p)
l.sbZ(H.ae(q,0,r,p).aq(0))
l.a_()
m.sW(s.a(o))}break
case"block-clause":l=C.a.h(C.a.h(m.Q,a.a).a1(a.c).Q,a.d)
s=a.e
r=l.a
q=H.C(r).c
n=H.ae(r,s,null,q)
l.sbZ(H.ae(r,0,s,q).aq(0))
l.a_()
m.sW(u.i.a(n))
break
case"default":throw H.b(P.cj("Unknown block removal type: "+H.a(l)))}},
h5:function(){var t,s,r=this.Q,q=H.m(r.slice(0),H.C(r).i("G<1>"))
C.a.cv(q,new U.hG())
r=this.e
r.toString
C.b.K(r,"")
for(r=q.length,t=0;t<q.length;q.length===r||(0,H.A)(q),++t){s=q[t]
this.e.appendChild(s.b)}},
dC:function(){var t,s,r
for(t=this.Q,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].fK()},
al:function(){var t,s,r,q,p,o,n
for(t=this.Q,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r]
q.r.classList.remove("show")
p=J.cT(q.d)
o=q.b.style
n=""+p+"px"
o.top=n}},
N:function(){var t,s,r
for(t=this.Q,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].N()},
a4:function(){var t,s,r
for(t=this.Q,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].a4()
this.cy.N()},
e1:function(){var t,s,r,q,p,o,n,m=this,l=m.dy,k=m.c.getBoundingClientRect()
for(t=m.Q,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r].b.getBoundingClientRect().bottom
p=k.top
if(typeof q!=="number")return q.E()
if(typeof p!=="number")return H.a0(p)
o=C.c.fu(q-p)
if(typeof l!=="number")return H.a0(l)
if(o>l)l=o}if(typeof l!=="number")return l.v()
t=l+1
m.fr=t
n=""+t+"px"
t=m.d.style
t.minHeight=n
t=m.cy.d.style
t.maxHeight=n},
bm:function(){var t,s,r,q,p,o
for(t=this.Q,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)for(q=t[r].a,p=q.length,o=0;o<q.length;q.length===p||(0,H.A)(q),++o)q[o].bm()},
sW:function(a){this.k2=u.i.a(a)}}
U.hE.prototype={
$1:function(a){return u.Y.a(a).aa(this.a)},
$S:58}
U.hF.prototype={
$2:function(a,b){H.q(a)
H.q(b)
if(typeof a!=="number")return a.v()
if(typeof b!=="number")return H.a0(b)
return a+b},
$S:17}
U.hx.prototype={
$1:function(a){var t,s
u.V.a(a)
t=this.a.f.classList
s=t.contains("show")
t.remove("show")
return s},
$S:10}
U.hy.prototype={
$1:function(a){return u.V.a(a).stopPropagation()},
$S:6}
U.hz.prototype={
$1:function(a){u.k.a(a)
$.ev=!0
this.a.cy.N()},
$S:8}
U.hA.prototype={
$1:function(a){u.k.a(a)
return this.a.N()},
$S:4}
U.hB.prototype={
$1:function(a){var t
u.k.a(a)
$.ev=!1
t=this.a
t.N()
t.cy.N()},
$S:8}
U.hC.prototype={
$1:function(a){u.k.a(a)
$.et=!0
this.a.cy.N()},
$S:8}
U.hD.prototype={
$1:function(a){u.k.a(a)
$.et=!1
this.a.cy.N()},
$S:8}
U.hG.prototype={
$2:function(a,b){var t=u.Y
t.a(a)
t.a(b)
return J.la(a.d,b.d)},
$S:25}
U.k8.prototype={
$6:function(a,b,c,d,e,f){var t=this.a
if(t==null)return J.B(e)
else return H.r(t.dl([a,b,c,d,e,f]))},
$C:"$6",
$R:6}
U.it.prototype={
$6:function(a,b,c,d,e,f){var t=H.r(this.a.dl([a,b,c,d,e,f]))
return t},
$C:"$6",
$R:6}
U.ko.prototype={
$1:function(a){return u.c.a(a).a.a},
$S:60}
U.j1.prototype={
$1:function(a){var t,s
if(!a.B("action"))return
t=this.b
s=t.a
a.j(0,"id",s)
t.j(0,H.r(a.h(0,"action")),s)
t=this.a
this.c.j(0,s,t.a)
t.a=U.lZ(t.a,a)},
$S:13}
U.j2.prototype={
$1:function(a){U.oz(this.a,this.b,a)},
$S:13}
U.j0.prototype={
$1:function(a){var t=this.a
t.a=U.oA(t.a,a)},
$S:62}
U.j3.prototype={
$1:function(a){return P.am(P.a7(["actual",a],u.N,u.z))},
$S:23}
U.j4.prototype={
$1:function(a){return a.B("type")&&J.bI(J.c6(a,"type"),"select")},
$S:19}
U.j6.prototype={
$1:function(a){},
$S:13}
U.j5.prototype={
$1:function(a){var t,s="required"
if(!(a instanceof P.v))return!1
if(a.gk(a)===0)return!1
if(a.gk(a)>1)return!0
t=u.b.a(a.h(0,0))
if(t.B(s)&&H.ar(H.fW(t.h(0,s))))return!1
return!0},
$S:19};(function aliases(){var t=J.ai.prototype
t.ee=t.n
t.ed=t.bj
t=J.bt.prototype
t.eg=t.n
t=P.by.prototype
t.ei=t.b_
t=P.N.prototype
t.ej=t.aK
t.ek=t.aZ
t=P.k.prototype
t.cA=t.T
t=P.d.prototype
t.ef=t.br
t=P.E.prototype
t.eh=t.n
t=W.p.prototype
t.bA=t.V
t=W.dZ.prototype
t.el=t.af
t=P.O.prototype
t.cw=t.h
t.cz=t.j})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1i,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_0i,k=hunkHelpers._static_2
t(P,"pF","oN",14)
t(P,"pG","oO",14)
t(P,"pH","oP",14)
s(P,"mz","pA",0)
r(P,"pI",1,null,["$2","$1"],["mq",function(a){return P.mq(a,null)}],30,0)
s(P,"my","pv",0)
var j
q(j=P.b6.prototype,"gb5","ad",0)
q(j,"gb6","ae",0)
p(P.by.prototype,"gfm","l",33)
o(P.a3.prototype,"geB",0,1,function(){return[null]},["$2","$1"],["aM","eC"],30,0)
q(j=P.cF.prototype,"gb5","ad",0)
q(j,"gb6","ae",0)
q(j=P.N.prototype,"gb5","ad",0)
q(j,"gb6","ae",0)
q(P.cG.prototype,"gfe","az",0)
q(j=P.cI.prototype,"gb5","ad",0)
q(j,"gb6","ae",0)
n(j,"geL","eM",33)
m(j,"geZ","f_",73)
q(j,"geO","eP",0)
t(P,"pL","pi",5)
r(W,"pQ",4,null,["$4"],["oU"],27,0)
r(W,"pR",4,null,["$4"],["oV"],27,0)
l(W.e1.prototype,"gfA","c0",0)
t(P,"km","e9",5)
t(P,"pZ","k5",66)
n(j=Z.ey.prototype,"gf0","f1",16)
n(j,"geR","eS",6)
n(j,"geV","eW",6)
n(j,"geT","eU",6)
n(j,"geX","eY",6)
k(U,"q9","pK",25)
r(U,"q6",4,null,["$4"],["o2"],67,0)
r(U,"q5",3,null,["$3"],["o1"],68,0)
k(U,"q3","o_",69)
r(U,"q4",3,null,["$3"],["o0"],70,0)
t(U,"q8","o4",21)
s(U,"q7","o3",71)
t(U,"mK","oE",9)
t(U,"q1","oD",48)
t(U,"q2","oG",9)
t(U,"mL","oJ",9)
t(U,"mM","oK",9)
t(U,"mN","oL",9)
n(j=U.al.prototype,"gby","bz",12)
n(j,"gc3","c4",12)
n(j,"ga6","a7",4)
n(U.aB.prototype,"ga6","a7",4)
n(U.aC.prototype,"ga6","a7",4)
n(U.em.prototype,"ga6","a7",4)
n(j=U.aO.prototype,"gby","bz",12)
n(j,"gc3","c4",12)
n(j,"gh3","h4",57)
n(j,"gh1","h2",10)
p(U.fb.prototype,"gfw","fz",6)
n(j=U.bN.prototype,"ga6","a7",4)
n(j,"gfB","fC",4)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.E,null)
r(P.E,[H.kC,J.ai,J.aA,P.d,H.P,P.R,H.da,H.Q,H.cz,P.co,H.d0,H.bM,H.eH,H.iY,P.K,H.e_,P.S,H.iy,H.dl,H.eI,H.f6,H.jS,H.aN,H.fu,P.jW,P.U,P.N,P.by,P.aD,P.fk,P.c3,P.a3,P.fh,P.a2,P.f5,P.bz,P.fo,P.dW,P.cG,P.cW,P.fR,P.dK,P.dX,P.fA,P.c5,P.dP,P.k,P.e7,P.aX,P.dY,P.en,P.ir,P.jz,P.w,P.ch,P.Y,P.bQ,P.eZ,P.dy,P.ft,P.dc,P.b1,P.t,P.cn,P.u,P.dq,P.aq,P.fI,P.c,P.aP,P.aY,W.hJ,W.i1,W.ez,W.e1,W.c4,W.V,W.du,W.dZ,W.fJ,W.bT,W.fn,W.ao,W.fH,W.e8,P.O,P.J,P.fF,Z.hM,Z.bP,Z.jf,Z.ek,Z.b7,Z.ey,Z.as,Z.eh,U.b_,U.bf,U.h8,U.cX,U.cY,U.cb,U.al,U.eC,U.hu,U.db,U.ac,U.bq,U.em,U.bZ,U.aO,U.fb,U.bN])
r(J.ai,[J.eF,J.dh,J.bt,J.G,J.bs,J.bd,H.bV,W.F,W.bK,W.I,W.fm,W.f7,W.hK,W.d4,W.hL,W.f,W.fw,W.de,W.eN,W.fC,W.aH,W.fL,W.fS,W.fU,P.dk])
r(J.bt,[J.f0,J.bw,J.b2])
s(J.iu,J.G)
r(J.bs,[J.dg,J.eG])
r(P.d,[H.n,H.aF,H.af,H.c1,H.c_,H.dD])
r(H.n,[H.a8,H.bR,H.ad,P.dJ,P.ap])
r(H.a8,[H.dz,H.T,P.fz])
s(H.aU,H.aF)
r(P.R,[H.a4,H.c2,H.dB,H.dx])
s(H.d8,H.c1)
s(H.d7,H.c_)
s(P.cL,P.co)
s(P.dC,P.cL)
s(H.d1,P.dC)
r(H.bM,[H.hH,H.iL,H.kp,H.fa,H.iv,H.kh,H.ki,H.kj,P.ja,P.j9,P.jb,P.jc,P.jX,P.jT,P.jU,P.iq,P.jl,P.js,P.jo,P.jp,P.jq,P.jm,P.jr,P.jv,P.jw,P.ju,P.jt,P.iS,P.iT,P.je,P.jd,P.jG,P.ka,P.jN,P.jM,P.jO,P.iA,P.jA,P.iB,P.hX,P.hY,W.i_,W.j8,W.jk,W.jR,W.iD,W.iC,W.jP,W.jQ,W.jV,W.k2,P.hI,P.im,P.io,P.ip,P.iw,P.k6,P.k7,P.kb,P.kc,P.kd,Z.hR,Z.hQ,Z.hO,Z.hP,Z.hN,Z.h7,Z.h2,Z.jg,Z.jh,Z.ji,Z.jj,Z.k1,Z.k0,Z.k_,Z.jZ,Z.jY,Z.jF,Z.jE,Z.jD,Z.jC,Z.jL,Z.jK,Z.jJ,Z.jI,Z.jH,Z.hT,Z.hV,Z.hU,Z.hW,Z.hS,U.h6,U.h5,U.i7,U.i6,U.i8,U.i9,U.i5,U.ia,U.i4,U.ib,U.iH,U.iI,U.iJ,U.iK,U.iN,U.iO,U.iQ,U.iP,U.iR,U.iU,U.iV,U.iW,U.iX,U.ha,U.hb,U.hf,U.hi,U.hj,U.hg,U.hh,U.hk,U.hl,U.hn,U.ho,U.hq,U.hr,U.hs,U.ht,U.hv,U.hw,U.i3,U.ie,U.ig,U.ih,U.id,U.ii,U.il,U.ij,U.ik,U.ic,U.he,U.hc,U.hd,U.iF,U.iG,U.iE,U.hE,U.hF,U.hx,U.hy,U.hz,U.hA,U.hB,U.hC,U.hD,U.hG,U.k8,U.it,U.ko,U.j1,U.j2,U.j0,U.j3,U.j4,U.j6,U.j5])
s(H.d2,H.d0)
r(P.K,[H.eX,H.eJ,H.fe,H.f1,P.cV,H.fs,P.dj,P.eY,P.aJ,P.eW,P.ff,P.fd,P.b3,P.eo,P.eq])
r(H.fa,[H.f3,H.cc])
s(H.fg,P.cV)
s(P.dp,P.S)
r(P.dp,[H.a6,P.dI,P.fy,W.fi])
s(H.at,H.bV)
r(H.at,[H.dS,H.dU])
s(H.dT,H.dS)
s(H.bu,H.dT)
s(H.dV,H.dU)
s(H.aG,H.dV)
r(H.aG,[H.eQ,H.eR,H.eS,H.eT,H.eU,H.ds,H.eV])
s(H.e4,H.fs)
r(P.U,[P.cK,P.dH,W.bj,W.aQ])
s(P.cE,P.cK)
s(P.ag,P.cE)
r(P.N,[P.cF,P.cI])
s(P.b6,P.cF)
s(P.e2,P.by)
s(P.e3,P.fk)
r(P.bz,[P.dE,P.fp])
s(P.e0,P.dW)
s(P.dQ,P.dH)
s(P.fG,P.fR)
s(P.dL,P.dI)
s(P.dO,P.dX)
s(P.dn,P.dP)
s(P.dw,P.dY)
s(P.cf,P.f5)
r(P.cf,[P.ck,P.eM,P.eL])
s(P.eK,P.dj)
s(P.ix,P.en)
s(P.jy,P.jz)
r(P.Y,[P.ah,P.e])
r(P.aJ,[P.dv,P.eD])
r(W.F,[W.l,W.bx,W.b5])
r(W.l,[W.p,W.b0,W.cD])
r(W.p,[W.i,P.j])
r(W.i,[W.c8,W.ei,W.c9,W.bL,W.cd,W.bO,W.eB,W.cl,W.cp,W.cw,W.cy,W.dA,W.f8,W.f9,W.cA,W.cB])
s(W.cg,W.fm)
s(W.d3,W.f7)
r(P.dn,[W.fj,W.ak,W.aj,P.eA])
s(W.hZ,W.i1)
s(W.fx,W.fw)
s(W.br,W.fx)
s(W.au,W.f)
r(W.au,[W.be,W.a1,W.b4])
s(W.fD,W.fC)
s(W.dt,W.fD)
s(W.cq,W.a1)
s(W.fM,W.fL)
s(W.fc,W.fM)
s(W.fT,W.fS)
s(W.fl,W.fT)
s(W.dF,W.d4)
s(W.fV,W.fU)
s(W.dR,W.fV)
s(W.fq,W.fi)
s(P.ep,P.dw)
r(P.ep,[W.fr,P.ej])
s(W.av,W.bj)
s(W.dG,P.a2)
s(W.fK,W.dZ)
r(P.O,[P.aE,P.dN])
s(P.v,P.dN)
s(P.bv,P.fF)
s(P.cu,P.j)
r(Z.b7,[Z.fN,Z.fB,Z.fE])
r(U.b_,[U.bS,U.bW,U.cv,U.cC])
r(U.bW,[U.df,U.cs])
r(U.h8,[U.aB,U.aC])
s(U.d5,Z.eh)
s(U.ex,Z.ek)
r(U.bZ,[U.el,U.bn,U.eO,U.eP])
t(H.dS,P.k)
t(H.dT,H.Q)
t(H.dU,P.k)
t(H.dV,H.Q)
t(P.dP,P.k)
t(P.dY,P.aX)
t(P.cL,P.e7)
t(W.fm,W.hJ)
t(W.fw,P.k)
t(W.fx,W.V)
t(W.fC,P.k)
t(W.fD,W.V)
t(W.fL,P.k)
t(W.fM,W.V)
t(W.fS,P.k)
t(W.fT,W.V)
t(W.fU,P.k)
t(W.fV,W.V)
t(P.dN,P.k)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",ah:"double",Y:"num",c:"String",w:"bool",u:"Null",t:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","u()","u(a1)","u(f)","~(as)","@(@)","~(a1)","w(as)","u(as)","~(O)","w(a1)","u(b4)","~(bP)","u(O)","~(~())","u(p)","~(p)","e(e,e)","u(c)","w(@)","w(c)","c(c)","aD<~>(a2<@>)","O(@)","c(e)","e(aB,aB)","u(@)","w(p,c,c,c4)","u(@,@)","w(w)","~(E[aq])","w(aO)","w(p)","~(E)","w(l)","w(ao)","p(l)","u(aY,@)","@(c)","@(@,c)","u(be)","w(bf)","~(bf)","c(p)","u(Y)","~(Y)","u(@[aq])","~(aC)","~(v<@>)","u(w)","~(b7)","a3<@>(@)","u(~())","t<al>(aO)","~(ac)","@(f)","v<@>(@)","~(f)","e(aB)","aE(@)","e(aO)","e(aC)","u(v<@>)","w(ap<c>)","u(c,@)","~(l,l)","E(@)","~(c,c,c,aE)","~(c,c,aE)","c(c,aE)","c(c,e,e)","c()","e(al)","~(@,aq)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pa(v.typeUniverse,JSON.parse('{"b2":"bt","f0":"bt","bw":"bt","qm":"f","qz":"f","ql":"j","qC":"j","qn":"i","qG":"i","qD":"l","qy":"l","qU":"a1","qs":"au","qx":"b5","qr":"b0","qJ":"b0","qE":"br","qA":"bK","qt":"I","qI":"bu","qH":"bV","eF":{"w":[]},"dh":{"u":[]},"bt":{"b1":[]},"G":{"t":["1"],"n":["1"],"d":["1"]},"iu":{"G":["1"],"t":["1"],"n":["1"],"d":["1"]},"aA":{"R":["1"]},"bs":{"ah":[],"Y":[]},"dg":{"e":[],"ah":[],"Y":[]},"eG":{"ah":[],"Y":[]},"bd":{"c":[],"f_":[]},"n":{"d":["1"]},"a8":{"n":["1"],"d":["1"]},"dz":{"a8":["1"],"n":["1"],"d":["1"],"a8.E":"1","d.E":"1"},"P":{"R":["1"]},"aF":{"d":["2"],"d.E":"2"},"aU":{"aF":["1","2"],"n":["2"],"d":["2"],"d.E":"2"},"a4":{"R":["2"]},"T":{"a8":["2"],"n":["2"],"d":["2"],"a8.E":"2","d.E":"2"},"af":{"d":["1"],"d.E":"1"},"c2":{"R":["1"]},"c1":{"d":["1"],"d.E":"1"},"d8":{"c1":["1"],"n":["1"],"d":["1"],"d.E":"1"},"dB":{"R":["1"]},"c_":{"d":["1"],"d.E":"1"},"d7":{"c_":["1"],"n":["1"],"d":["1"],"d.E":"1"},"dx":{"R":["1"]},"bR":{"n":["1"],"d":["1"],"d.E":"1"},"da":{"R":["1"]},"cz":{"aY":[]},"d1":{"dC":["1","2"],"cL":["1","2"],"co":["1","2"],"e7":["1","2"],"an":["1","2"]},"d0":{"an":["1","2"]},"d2":{"d0":["1","2"],"an":["1","2"]},"dD":{"d":["1"],"d.E":"1"},"eH":{"lG":[]},"eX":{"K":[]},"eJ":{"K":[]},"fe":{"K":[]},"e_":{"aq":[]},"bM":{"b1":[]},"fa":{"b1":[]},"f3":{"b1":[]},"cc":{"b1":[]},"f1":{"K":[]},"fg":{"K":[]},"a6":{"lL":["1","2"],"S":["1","2"],"an":["1","2"],"S.K":"1","S.V":"2"},"ad":{"n":["1"],"d":["1"],"d.E":"1"},"dl":{"R":["1"]},"eI":{"f_":[]},"f6":{"dq":[]},"jS":{"R":["dq"]},"bV":{"aZ":[]},"at":{"Z":["@"],"aZ":[]},"bu":{"at":[],"k":["ah"],"Z":["@"],"t":["ah"],"n":["ah"],"Q":["ah"],"aZ":[],"d":["ah"],"k.E":"ah","Q.E":"ah"},"aG":{"at":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"aZ":[],"d":["e"]},"eQ":{"aG":[],"at":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"aZ":[],"d":["e"],"k.E":"e","Q.E":"e"},"eR":{"aG":[],"at":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"aZ":[],"d":["e"],"k.E":"e","Q.E":"e"},"eS":{"aG":[],"at":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"aZ":[],"d":["e"],"k.E":"e","Q.E":"e"},"eT":{"aG":[],"at":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"aZ":[],"d":["e"],"k.E":"e","Q.E":"e"},"eU":{"aG":[],"at":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"aZ":[],"d":["e"],"k.E":"e","Q.E":"e"},"ds":{"aG":[],"at":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"aZ":[],"d":["e"],"k.E":"e","Q.E":"e"},"eV":{"aG":[],"at":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"aZ":[],"d":["e"],"k.E":"e","Q.E":"e"},"fs":{"K":[]},"e4":{"K":[]},"ag":{"cE":["1"],"cK":["1"],"U":["1"],"U.T":"1"},"b6":{"cF":["1"],"N":["1"],"bh":["1"],"bi":["1"],"a2":["1"],"N.T":"1"},"by":{"f4":["1"],"bh":["1"],"bi":["1"],"mb":["1"]},"e2":{"by":["1"],"f4":["1"],"bh":["1"],"bi":["1"],"mb":["1"]},"e3":{"fk":["1"]},"a3":{"aD":["1"]},"cE":{"cK":["1"],"U":["1"]},"cF":{"N":["1"],"bh":["1"],"bi":["1"],"a2":["1"]},"N":{"bh":["1"],"bi":["1"],"a2":["1"],"N.T":"1"},"cK":{"U":["1"]},"dE":{"bz":["1"]},"fp":{"bz":["@"]},"fo":{"bz":["@"]},"e0":{"dW":["1"]},"cG":{"a2":["1"]},"dH":{"U":["2"]},"cI":{"N":["2"],"bh":["2"],"bi":["2"],"a2":["2"],"N.T":"2"},"dQ":{"dH":["1","2"],"U":["2"],"U.T":"2"},"cW":{"K":[]},"fR":{"m0":[]},"fG":{"m0":[]},"dI":{"S":["1","2"],"an":["1","2"]},"dL":{"dI":["1","2"],"S":["1","2"],"an":["1","2"],"S.K":"1","S.V":"2"},"dJ":{"n":["1"],"d":["1"],"d.E":"1"},"dK":{"R":["1"]},"dO":{"dX":["1"],"ap":["1"],"n":["1"],"d":["1"]},"c5":{"R":["1"]},"dn":{"k":["1"],"t":["1"],"n":["1"],"d":["1"]},"dp":{"S":["1","2"],"an":["1","2"]},"S":{"an":["1","2"]},"co":{"an":["1","2"]},"dC":{"cL":["1","2"],"co":["1","2"],"e7":["1","2"],"an":["1","2"]},"dw":{"aX":["1"],"ap":["1"],"n":["1"],"d":["1"]},"dX":{"ap":["1"],"n":["1"],"d":["1"]},"fy":{"S":["c","@"],"an":["c","@"],"S.K":"c","S.V":"@"},"fz":{"a8":["c"],"n":["c"],"d":["c"],"a8.E":"c","d.E":"c"},"ck":{"cf":["c","c"]},"dj":{"K":[]},"eK":{"K":[]},"eM":{"cf":["E","c"]},"eL":{"cf":["c","E"]},"ah":{"Y":[]},"cV":{"K":[]},"eY":{"K":[]},"aJ":{"K":[]},"dv":{"K":[]},"eD":{"K":[]},"eW":{"K":[]},"ff":{"K":[]},"fd":{"K":[]},"b3":{"K":[]},"eo":{"K":[]},"eZ":{"K":[]},"dy":{"K":[]},"eq":{"K":[]},"ft":{"i2":[]},"dc":{"i2":[]},"e":{"Y":[]},"t":{"n":["1"],"d":["1"]},"ap":{"n":["1"],"d":["1"]},"fI":{"aq":[]},"c":{"f_":[]},"aP":{"ot":[]},"i":{"p":[],"l":[],"F":[]},"c8":{"i":[],"p":[],"l":[],"F":[]},"ei":{"i":[],"p":[],"l":[],"F":[]},"c9":{"i":[],"p":[],"l":[],"F":[]},"bL":{"i":[],"p":[],"l":[],"F":[]},"cd":{"i":[],"p":[],"l":[],"F":[]},"b0":{"l":[],"F":[]},"bO":{"i":[],"p":[],"l":[],"F":[]},"d4":{"bv":["Y"]},"fj":{"k":["p"],"t":["p"],"n":["p"],"d":["p"],"k.E":"p"},"ak":{"lB":["1"],"k":["1"],"t":["1"],"n":["1"],"d":["1"],"k.E":"1"},"p":{"l":[],"F":[]},"eB":{"i":[],"p":[],"l":[],"F":[]},"br":{"V":["l"],"k":["l"],"t":["l"],"Z":["l"],"n":["l"],"d":["l"],"V.E":"l","k.E":"l"},"cl":{"i":[],"p":[],"l":[],"F":[]},"be":{"au":[],"f":[]},"a1":{"au":[],"f":[]},"aj":{"k":["l"],"t":["l"],"n":["l"],"d":["l"],"k.E":"l"},"l":{"F":[]},"dt":{"V":["l"],"k":["l"],"t":["l"],"Z":["l"],"n":["l"],"d":["l"],"V.E":"l","k.E":"l"},"cp":{"i":[],"p":[],"l":[],"F":[]},"cq":{"a1":[],"au":[],"f":[]},"cw":{"i":[],"p":[],"l":[],"F":[]},"cy":{"i":[],"p":[],"l":[],"F":[]},"dA":{"i":[],"p":[],"l":[],"F":[]},"f8":{"i":[],"p":[],"l":[],"F":[]},"f9":{"i":[],"p":[],"l":[],"F":[]},"cA":{"i":[],"p":[],"l":[],"F":[]},"cB":{"i":[],"p":[],"l":[],"F":[]},"b4":{"au":[],"f":[]},"fc":{"V":["aH"],"k":["aH"],"t":["aH"],"Z":["aH"],"n":["aH"],"d":["aH"],"V.E":"aH","k.E":"aH"},"au":{"f":[]},"bx":{"j7":[],"F":[]},"b5":{"F":[]},"cD":{"l":[],"F":[]},"fl":{"V":["I"],"k":["I"],"t":["I"],"Z":["I"],"n":["I"],"d":["I"],"V.E":"I","k.E":"I"},"dF":{"bv":["Y"]},"dR":{"V":["l"],"k":["l"],"t":["l"],"Z":["l"],"n":["l"],"d":["l"],"V.E":"l","k.E":"l"},"fi":{"S":["c","c"],"an":["c","c"]},"fq":{"S":["c","c"],"an":["c","c"],"S.K":"c","S.V":"c"},"fr":{"aX":["c"],"ap":["c"],"n":["c"],"d":["c"],"aX.E":"c"},"bj":{"U":["1"],"U.T":"1"},"av":{"bj":["1"],"U":["1"],"U.T":"1"},"aQ":{"U":["1"],"U.T":"1"},"dG":{"a2":["1"]},"c4":{"ao":[]},"du":{"ao":[]},"dZ":{"ao":[]},"fK":{"ao":[]},"fJ":{"ao":[]},"bT":{"R":["1"]},"fn":{"j7":[],"F":[]},"fH":{"oy":[]},"e8":{"o7":[]},"ep":{"aX":["c"],"ap":["c"],"n":["c"],"d":["c"]},"eA":{"k":["p"],"t":["p"],"n":["p"],"d":["p"],"k.E":"p"},"aE":{"O":[]},"v":{"k":["1"],"t":["1"],"n":["1"],"O":[],"d":["1"],"k.E":"1"},"bv":{"fF":["1"]},"cu":{"j":[],"p":[],"l":[],"F":[]},"ej":{"aX":["c"],"ap":["c"],"n":["c"],"d":["c"],"aX.E":"c"},"j":{"p":[],"l":[],"F":[]},"fN":{"b7":[]},"fB":{"b7":[]},"fE":{"b7":[]},"bS":{"b_":[]},"df":{"bW":[],"b_":[]},"bW":{"b_":[]},"cs":{"bW":[],"b_":[]},"cv":{"b_":[]},"cC":{"b_":[]},"d5":{"eh":[]},"ex":{"ek":[]},"el":{"bZ":[]},"bn":{"bZ":[]},"eO":{"bZ":[]},"eP":{"bZ":[]}}'))
H.p9(v.typeUniverse,JSON.parse('{"n":1,"f5":2,"dn":1,"dp":2,"dw":1,"dP":1,"dY":1,"en":2,"cn":2,"dN":1}'))
var u=(function rtii(){var t=H.cS
return{gu:t("@<@>"),n:t("cW"),cR:t("c9"),fK:t("bK"),bz:t("al"),a4:t("bL"),hb:t("cd"),Y:t("aB"),ds:t("aC"),gF:t("d1<aY,@>"),g5:t("I"),af:t("d3"),d:t("bO"),D:t("bP"),k:t("as"),fu:t("bQ"),X:t("n<@>"),h:t("p"),r:t("lB<p>"),bU:t("K"),B:t("f"),aS:t("F"),g8:t("i2"),gI:t("ac"),gs:t("bS"),Z:t("b1"),aQ:t("aD<u>"),b9:t("aD<@>"),a:t("i"),gb:t("de"),p:t("cl"),m:t("lG"),i:t("d<al>"),bq:t("d<p>"),eh:t("d<l>"),fP:t("d<E>"),cs:t("d<c>"),bM:t("d<ah>"),R:t("d<@>"),gS:t("d<e>"),u:t("G<al>"),cM:t("G<aB>"),e:t("G<aC>"),ge:t("G<p>"),U:t("G<ac>"),ga:t("G<db>"),c3:t("G<O>"),eO:t("G<ao>"),eD:t("G<bf>"),dk:t("G<aO>"),w:t("G<a2<@>>"),s:t("G<c>"),f7:t("G<b7>"),cO:t("G<@>"),cj:t("b2"),aU:t("Z<@>"),gB:t("v<c>"),F:t("v<@>"),L:t("aE"),bT:t("a6<c,e>"),eo:t("a6<aY,@>"),by:t("a6<e,b_>"),aI:t("a6<e,e>"),b:t("O"),dz:t("dk"),cf:t("be"),t:t("t<al>"),al:t("t<aC>"),O:t("t<p>"),gp:t("t<db>"),eB:t("t<t<al>>"),dy:t("t<c>"),j:t("t<@>"),f:t("an<@,@>"),dv:t("T<c,c>"),V:t("a1"),d4:t("bu"),bd:t("aG"),A:t("l"),v:t("ao"),P:t("u"),cU:t("bW"),K:t("E"),fn:t("bf"),fW:t("cp"),H:t("J<Y>"),et:t("cq"),q:t("bv<Y>"),av:t("aN"),ew:t("cu"),fs:t("cv"),d2:t("cw"),cq:t("ap<c>"),c:t("aO"),l:t("aq"),c6:t("f4<bP>"),g:t("f4<as>"),b_:t("a2<@>"),N:t("c"),dG:t("c(c)"),bg:t("cy"),g7:t("j"),fo:t("aY"),aW:t("cA"),cJ:t("cB"),fY:t("aH"),T:t("b4"),ak:t("aZ"),bJ:t("bw"),g4:t("bx"),ci:t("j7"),g2:t("b5"),h9:t("cD"),ac:t("aj"),gt:t("bz<@>"),E:t("av<f>"),C:t("av<a1>"),du:t("av<b4>"),I:t("aQ<a1>"),a1:t("b7"),cw:t("bj<f>"),W:t("ak<p>"),x:t("c3<@,@>"),_:t("a3<@>"),fJ:t("a3<e>"),dL:t("a3<Y>"),cr:t("c4"),aH:t("dL<@,@>"),J:t("fA"),bi:t("e3<Y>"),y:t("w"),bN:t("w(E)"),gR:t("ah"),z:t("@"),fO:t("@()"),G:t("@(f)"),bI:t("@(E)"),ep:t("@(E,E)"),ag:t("@(E,aq)"),ch:t("@(ap<c>)"),bc:t("@(@)"),S:t("e"),di:t("Y"),o:t("~"),M:t("~()"),Q:t("~(f)"),dj:t("~(be)"),a6:t("~(a1)"),d5:t("~(E)"),da:t("~(E,aq)"),eA:t("~(c,c)"),cA:t("~(c,@)"),gn:t("~(b4)"),c4:t("~(Y)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.n=W.c8.prototype
C.p=W.bL.prototype
C.h=W.cg.prototype
C.b=W.bO.prototype
C.K=J.ai.prototype
C.a=J.G.prototype
C.e=J.dg.prototype
C.u=J.dh.prototype
C.c=J.bs.prototype
C.d=J.bd.prototype
C.L=J.b2.prototype
C.y=J.f0.prototype
C.z=W.dA.prototype
C.m=J.bw.prototype
C.U=W.bx.prototype
C.o=new U.cb(0,"BlockPlacement.starter")
C.j=new U.cb(1,"BlockPlacement.child")
C.k=new U.cb(2,"BlockPlacement.anywhere")
C.A=new H.da(H.cS("da<u>"))
C.V=new P.ir()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.G=function(getTagFallback) {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.F=function(hooks) {
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
C.E=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.i=new P.ix()
C.H=new P.eZ()
C.I=new P.fo()
C.f=new P.fG()
C.J=new P.fI()
C.t=new P.bQ(0)
C.M=new P.eL(null)
C.N=new P.eM(null)
C.O=H.m(t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),u.s)
C.P=H.m(t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),u.s)
C.Q=H.m(t([]),u.s)
C.v=H.m(t([]),u.cO)
C.S=H.m(t([C.o,C.j,C.k]),H.cS("G<cb>"))
C.w=H.m(t(["bind","if","ref","repeat","syntax"]),u.s)
C.l=H.m(t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),u.s)
C.R=H.m(t([]),H.cS("G<aY>"))
C.x=new H.d2(0,{},C.R,H.cS("d2<aY,@>"))
C.T=new H.cz("call")})();(function staticFields(){$.bb=0
$.cZ=null
$.ll=null
$.mF=null
$.mx=null
$.mR=null
$.ke=null
$.kk=null
$.kY=null
$.cN=null
$.ea=null
$.eb=null
$.kS=!1
$.H=C.f
$.aI=[]
$.bo=null
$.kA=null
$.lD=null
$.lC=null
$.lA=function(){var t=u.N
return P.a7(["animationend","webkitAnimationEnd","animationiteration","webkitAnimationIteration","animationstart","webkitAnimationStart","fullscreenchange","webkitfullscreenchange","fullscreenerror","webkitfullscreenerror","keyadded","webkitkeyadded","keyerror","webkitkeyerror","keymessage","webkitkeymessage","needkey","webkitneedkey","pointerlockchange","webkitpointerlockchange","pointerlockerror","webkitpointerlockerror","resourcetimingbufferfull","webkitresourcetimingbufferfull","transitionend","webkitTransitionEnd","speechchange","webkitSpeechChange"],t,t)}()
$.fv=P.bU(u.N,u.Z)
$.lr=null
$.lq=null
$.lp=null
$.ls=null
$.lo=null
$.a_=null
$.lz=0
$.lg=null
$.h1=!1
$.cH=null
$.ew=null
$.lt=null
$.es=!1
$.aL=!1
$.eu=!1
$.ev=!1
$.et=!1
$.lu=null
$.lv=null
$.ax=P.bU(u.N,H.cS("bN"))})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"qw","kq",function(){return H.kX("_$dart_dartClosure")})
t($,"qF","l5",function(){return H.kX("_$dart_js")})
t($,"qK","n5",function(){return H.bg(H.iZ({
toString:function(){return"$receiver$"}}))})
t($,"qL","n6",function(){return H.bg(H.iZ({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"qM","n7",function(){return H.bg(H.iZ(null))})
t($,"qN","n8",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"qQ","nb",function(){return H.bg(H.iZ(void 0))})
t($,"qR","nc",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"qP","na",function(){return H.bg(H.lY(null))})
t($,"qO","n9",function(){return H.bg(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"qT","ne",function(){return H.bg(H.lY(void 0))})
t($,"qS","nd",function(){return H.bg(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"qV","l6",function(){return P.oM()})
t($,"qB","fZ",function(){var s=new P.a3(C.f,H.cS("a3<u>"))
s.ff(null)
return s})
t($,"r3","nk",function(){return new Error().stack!=void 0})
t($,"qv","n4",function(){return{}})
t($,"r0","nj",function(){return P.lM(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
t($,"qu","n3",function(){return P.oj("^\\S+$")})
t($,"r1","h_",function(){return u.b.a(P.bD(self))})
t($,"qW","l7",function(){return H.kX("_$dart_dartObject")})
t($,"r2","l8",function(){return function DartObject(a){this.o=a}})
t($,"qY","ng",function(){return W.i0("_customDragEnter",u.V)})
t($,"r_","ni",function(){return W.i0("_customDragOver",u.V)})
t($,"qZ","nh",function(){return W.i0("_customDragLeave",u.V)})
t($,"qX","nf",function(){return W.i0("_customDrop",u.V)})
t($,"qq","l4",function(){var s=U.kx()
s.a="#bb5555"
return s})
t($,"qp","l3",function(){var s=U.kx()
s.a="#8899aa"
return s})
t($,"qo","l2",function(){var s=U.kx()
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ai,DOMImplementation:J.ai,MediaError:J.ai,Navigator:J.ai,NavigatorConcurrentHardware:J.ai,NavigatorUserMediaError:J.ai,OverconstrainedError:J.ai,PositionError:J.ai,Range:J.ai,Selection:J.ai,SQLError:J.ai,DataView:H.bV,ArrayBufferView:H.bV,Float32Array:H.bu,Float64Array:H.bu,Int16Array:H.eQ,Int32Array:H.eR,Int8Array:H.eS,Uint16Array:H.eT,Uint32Array:H.eU,Uint8ClampedArray:H.ds,CanvasPixelArray:H.ds,Uint8Array:H.eV,HTMLAudioElement:W.i,HTMLBRElement:W.i,HTMLCanvasElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLImageElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMediaElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLVideoElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,HTMLAnchorElement:W.c8,HTMLAreaElement:W.ei,HTMLBaseElement:W.c9,Blob:W.bK,File:W.bK,HTMLBodyElement:W.bL,HTMLButtonElement:W.cd,CDATASection:W.b0,CharacterData:W.b0,Comment:W.b0,ProcessingInstruction:W.b0,Text:W.b0,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.cg,MSStyleCSSProperties:W.cg,CSS2Properties:W.cg,CSSStyleSheet:W.d3,HTMLDivElement:W.bO,DOMException:W.hK,DOMRectReadOnly:W.d4,DOMTokenList:W.hL,Element:W.p,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,EventTarget:W.F,HTMLFormElement:W.eB,HTMLCollection:W.br,HTMLFormControlsCollection:W.br,HTMLOptionsCollection:W.br,ImageData:W.de,HTMLInputElement:W.cl,KeyboardEvent:W.be,Location:W.eN,WheelEvent:W.a1,MouseEvent:W.a1,DragEvent:W.a1,Document:W.l,DocumentFragment:W.l,HTMLDocument:W.l,ShadowRoot:W.l,XMLDocument:W.l,DocumentType:W.l,Node:W.l,NodeList:W.dt,RadioNodeList:W.dt,HTMLOptionElement:W.cp,PointerEvent:W.cq,HTMLSelectElement:W.cw,HTMLStyleElement:W.cy,StyleSheet:W.f7,HTMLTableElement:W.dA,HTMLTableRowElement:W.f8,HTMLTableSectionElement:W.f9,HTMLTemplateElement:W.cA,HTMLTextAreaElement:W.cB,Touch:W.aH,TouchEvent:W.b4,TouchList:W.fc,CompositionEvent:W.au,FocusEvent:W.au,TextEvent:W.au,UIEvent:W.au,Window:W.bx,DOMWindow:W.bx,DedicatedWorkerGlobalScope:W.b5,ServiceWorkerGlobalScope:W.b5,SharedWorkerGlobalScope:W.b5,WorkerGlobalScope:W.b5,Attr:W.cD,CSSRuleList:W.fl,ClientRect:W.dF,DOMRect:W.dF,NamedNodeMap:W.dR,MozNamedAttrMap:W.dR,IDBKeyRange:P.dk,SVGScriptElement:P.cu,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,Selection:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:true,File:true,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleSheet:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,WheelEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLOptionElement:true,PointerEvent:true,HTMLSelectElement:true,HTMLStyleElement:true,StyleSheet:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,IDBKeyRange:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})
H.at.$nativeSuperclassTag="ArrayBufferView"
H.dS.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.dV.$nativeSuperclassTag="ArrayBufferView"
H.aG.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.mJ,[])
else U.mJ([])})})()
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

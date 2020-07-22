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
a[c]=function(){a[c]=function(){H.qj(b)}
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
af:function(a,b,c,d){P.aX(b,"start")
if(c!=null){P.aX(c,"end")
if(typeof b!=="number")return b.J()
if(b>c)H.D(P.aa(b,0,c,"start",null))}return new H.dy(a,b,c,d.i("dy<0>"))},
lN:function(a,b,c,d){if(u.X.b(a))return new H.aV(a,b,c.i("@<0>").q(d).i("aV<1,2>"))
return new H.aG(a,b,c.i("@<0>").q(d).i("aG<1,2>"))},
ot:function(a,b,c){var t="takeCount"
P.bc(b,t,u.S)
P.aX(b,t)
if(u.X.b(a))return new H.d7(a,b,c.i("d7<0>"))
return new H.c3(a,b,c.i("c3<0>"))},
on:function(a,b,c){var t="count"
if(u.X.b(a)){P.bc(b,t,u.S)
P.aX(b,t)
return new H.d6(a,b,c.i("d6<0>"))}P.bc(b,t,u.S)
P.aX(b,t)
return new H.c1(a,b,c.i("c1<0>"))},
eF:function(){return new P.b5("No element")},
nY:function(){return new P.b5("Too many elements")},
lH:function(){return new P.b5("Too few elements")},
oq:function(a,b,c){H.f3(a,0,J.ac(a)-1,b,c)},
f3:function(a,b,c,d,e){if(c-b<=32)H.op(a,b,c,d,e)
else H.oo(a,b,c,d,e)},
op:function(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.az(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.J()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
oo:function(a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i=C.e.aA(a6-a5+1,6),h=a5+i,g=a6-i,f=C.e.aA(a5+a6,2),e=f-i,d=f+i,c=J.az(a4),b=c.h(a4,h),a=c.h(a4,e),a0=c.h(a4,f),a1=c.h(a4,d),a2=c.h(a4,g),a3=a7.$2(b,a)
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
if(J.bJ(a7.$2(a,a1),0)){for(q=s;q<=r;++q){p=c.h(a4,q)
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
H.f3(a4,a5,s-2,a7,a8)
H.f3(a4,r+2,a6,a7,a8)
if(l)return
if(s<h&&r>g){for(;J.bJ(a7.$2(c.h(a4,s),a),0);)++s
for(;J.bJ(a7.$2(c.h(a4,r),a1),0);)--r
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
a9:function a9(){},
dy:function dy(a,b,c,d){var _=this
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
aV:function aV(a,b,c){this.a=a
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
ag:function ag(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
dA:function dA(a,b,c){this.a=a
this.b=b
this.$ti=c},
c1:function c1(a,b,c){this.a=a
this.b=b
this.$ti=c},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
dw:function dw(a,b,c){this.a=a
this.b=b
this.$ti=c},
bS:function bS(a){this.$ti=a},
d9:function d9(a){this.$ti=a},
Q:function Q(){},
cz:function cz(a){this.a=a},
nO:function(){throw H.b(P.x("Cannot modify unmodifiable Map"))},
n1:function(a){var t,s=H.n0(a)
if(typeof s=="string")return s
t="minified:"+a
return t},
pW:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.aU.b(a)},
a:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.B(a)
if(typeof t!="string")throw H.b(H.ba(a))
return t},
c_:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
lT:function(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return H.o(s,3)
t=H.r(s[3])
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
oh:function(a){var t,s
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
t=parseFloat(a)
if(isNaN(t)){s=C.d.aF(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return null}return t},
iM:function(a){var t=H.o8(a)
return t},
o8:function(a){var t,s,r
if(a instanceof P.E)return H.ax(H.X(a),null)
if(J.bG(a)===C.H||u.bJ.b(a)){t=C.n(a)
if(H.lS(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.lS(r))return r}}return H.ax(H.X(a),null)},
lS:function(a){var t=a!=="Object"&&a!==""
return t},
aN:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.e.bW(t,10))>>>0,56320|t&1023)}throw H.b(P.aa(a,0,1114111,null,null))},
bZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
og:function(a){var t=H.bZ(a).getFullYear()+0
return t},
oe:function(a){var t=H.bZ(a).getMonth()+1
return t},
oa:function(a){var t=H.bZ(a).getDate()+0
return t},
ob:function(a){var t=H.bZ(a).getHours()+0
return t},
od:function(a){var t=H.bZ(a).getMinutes()+0
return t},
of:function(a){var t=H.bZ(a).getSeconds()+0
return t},
oc:function(a){var t=H.bZ(a).getMilliseconds()+0
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
return J.nz(a,new H.eI(C.P,0,t,s,0))},
o9:function(a,b,c){var t,s,r,q
if(b instanceof Array)t=c==null||c.a===0
else t=!1
if(t){s=b
r=s.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(s[0])}else if(r===2){if(!!a.$2)return a.$2(s[0],s[1])}else if(r===3){if(!!a.$3)return a.$3(s[0],s[1],s[2])}else if(r===4){if(!!a.$4)return a.$4(s[0],s[1],s[2],s[3])}else if(r===5)if(!!a.$5)return a.$5(s[0],s[1],s[2],s[3],s[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,s)}return H.o7(a,b,c)},
o7:function(a,b,c){var t,s,r,q,p,o,n,m,l,k=b instanceof Array?b:P.cm(b,!0,u.z),j=k.length,i=a.$R
if(j<i)return H.cr(a,k,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.bG(a)
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
a0:function(a){throw H.b(H.ba(a))},
o:function(a,b){if(a==null)J.ac(a)
throw H.b(H.bF(a,b))},
bF:function(a,b){var t,s,r="index"
if(!H.cM(b))return new P.aK(!0,b,r,null)
t=H.q(J.ac(a))
if(!(b<0)){if(typeof t!=="number")return H.a0(t)
s=b>=t}else s=!0
if(s)return P.be(b,a,r,null,t)
return P.ct(b,r)},
ba:function(a){return new P.aK(!0,a,null,null)},
b:function(a){var t
if(a==null)a=new P.eZ()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.n_})
t.name=""}else t.toString=H.n_
return t},
n_:function(){return J.B(this.dartException)},
D:function(a){throw H.b(a)},
A:function(a){throw H.b(P.aL(a))},
bi:function(a){var t,s,r,q,p,o
a=H.mS(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.h([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.iY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
iZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
lY:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
lR:function(a,b){return new H.eY(a,b==null?null:b.method)},
kD:function(a,b){var t=b==null,s=t?null:b.method
return new H.eK(a,s,t?null:b.receiver)},
L:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new H.kp(a)
if(a==null)return f
if(typeof a!=="object")return a
if("dartException" in a)return e.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.bW(s,16)&8191)===10)switch(r){case 438:return e.$1(H.kD(H.a(t)+" (Error "+r+")",f))
case 445:case 5007:return e.$1(H.lR(H.a(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.n4()
p=$.n5()
o=$.n6()
n=$.n7()
m=$.na()
l=$.nb()
k=$.n9()
$.n8()
j=$.nd()
i=$.nc()
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
if(g)return e.$1(H.lR(H.r(t),h))}}return e.$1(new H.ff(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.dx()
t=function(b){try{return String(b)}catch(d){}return null}(a)
return e.$1(new P.aK(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.dx()
return a},
aT:function(a){var t
if(a==null)return new H.dZ(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dZ(a)},
mP:function(a){if(a==null||typeof a!='object')return J.ab(a)
else return H.c_(a)},
pN:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.j(0,a[t],a[s])}return b},
pV:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.bT("Unsupported number of arguments for wrapped closure"))},
cR:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pV)
a.$identity=t
return t},
nN:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.f4().constructor.prototype):Object.create(new H.cd(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.bd
if(typeof s!=="number")return s.v()
$.bd=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}i.constructor=t
t.prototype=i
if(!e){r=H.ln(a,k,f)
r.$reflectionInfo=d}else{i.$static_name=g
r=k}q=H.nJ(d,e,f)
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
nJ:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mG,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
t=c?H.nH:H.nG
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.b("Error in functionType of tearoff")},
nK:function(a,b,c,d){var t=H.lm
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ln:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.nM(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.nK(s,!q,t,b)
if(s===0){q=$.bd
if(typeof q!=="number")return q.v()
$.bd=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.cY
return new Function(q+H.a(p==null?$.cY=H.hm("self"):p)+";return "+o+"."+H.a(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.bd
if(typeof q!=="number")return q.v()
$.bd=q+1
n+=q
q="return function("+n+"){return this."
p=$.cY
return new Function(q+H.a(p==null?$.cY=H.hm("self"):p)+"."+H.a(t)+"("+n+");}")()},
nL:function(a,b,c,d){var t=H.lm,s=H.nI
switch(b?-1:a){case 0:throw H.b(H.ol("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
nM:function(a,b){var t,s,r,q,p,o,n,m=$.cY
if(m==null)m=$.cY=H.hm("self")
t=$.ll
if(t==null)t=$.ll=H.hm("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nL(r,!p,s,b)
if(r===1){m="return function(){return this."+H.a(m)+"."+H.a(s)+"(this."+H.a(t)+");"
t=$.bd
if(typeof t!=="number")return t.v()
$.bd=t+1
return new Function(m+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
m="return function("+n+"){return this."+H.a(m)+"."+H.a(s)+"(this."+H.a(t)+", "+n+");"
t=$.bd
if(typeof t!=="number")return t.v()
$.bd=t+1
return new Function(m+t+"}")()},
kU:function(a,b,c,d,e,f,g){return H.nN(a,b,c,d,!!e,!!f,g)},
nG:function(a,b){return H.fR(v.typeUniverse,H.X(a.a),b)},
nH:function(a,b){return H.fR(v.typeUniverse,H.X(a.c),b)},
lm:function(a){return a.a},
nI:function(a){return a.c},
hm:function(a){var t,s,r,q=new H.cd("self","target","receiver","name"),p=J.lI(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}},
as:function(a){if(a==null)H.pD("boolean expression must not be null")
return a},
pD:function(a){throw H.b(new H.fh(a))},
qj:function(a){throw H.b(new P.er(a))},
ol:function(a){return new H.f2(a)},
kX:function(a){return v.getIsolateTag(a)},
h:function(a,b){a[v.arrayRti]=b
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
r4:function(a,b,c){return a.apply(b,H.mZ(J.bG(b)["$a"+H.a(c)],H.mE(b)))},
r5:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pZ:function(a){var t,s,r,q,p=H.r($.mF.$1(a)),o=$.ke[p]
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
q_:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.kn(t)
else return J.kZ(t,c,null,null)},
pS:function(){if(!0===$.kY)return
$.kY=!0
H.pT()},
pT:function(){var t,s,r,q,p,o,n,m
$.ke=Object.create(null)
$.kk=Object.create(null)
H.pR()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.mR.$1(p)
if(o!=null){n=H.q_(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
pR:function(){var t,s,r,q,p,o,n=C.y()
n=H.cQ(C.z,H.cQ(C.A,H.cQ(C.o,H.cQ(C.o,H.cQ(C.B,H.cQ(C.C,H.cQ(C.D(C.n),n)))))))
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
o5:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.b(P.dc("Illegal RegExp pattern ("+String(o)+")",a))},
qf:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
pM:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mS:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l0:function(a,b,c){var t=H.qg(a,b,c)
return t},
qg:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mS(b),'g'),H.pM(c))},
qh:function(a,b,c,d){var t=a.indexOf(b,d)
if(t<0)return a
return H.qi(a,t,t+b.length,c)},
qi:function(a,b,c,d){var t=a.substring(0,b),s=a.substring(c)
return t+d+s},
d0:function d0(a,b){this.a=a
this.$ti=b},
d_:function d_(){},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dC:function dC(a,b){this.a=a
this.$ti=b},
eI:function eI(a,b,c,d,e){var _=this
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
eY:function eY(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
ff:function ff(a){this.a=a},
kp:function kp(a){this.a=a},
dZ:function dZ(a){this.a=a
this.b=null},
bN:function bN(){},
fb:function fb(){},
f4:function f4(){},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a){this.a=a},
fh:function fh(a){this.a=a},
a8:function a8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iv:function iv(a){this.a=a},
iy:function iy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ae:function ae(a,b){this.a=a
this.$ti=b},
dk:function dk(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
eJ:function eJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f7:function f7(a,b){this.a=a
this.c=b},
jS:function jS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bm:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bF(b,a))},
bX:function bX(){},
au:function au(){},
bv:function bv(){},
aH:function aH(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
dr:function dr(){},
eW:function eW(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
ok:function(a,b){var t=b.c
return t==null?b.c=H.kN(a,b.z,!0):t},
lV:function(a,b){var t=b.c
return t==null?b.c=H.e4(a,"aE",[b.z]):t},
lW:function(a){var t=a.y
if(t===6||t===7||t===8)return H.lW(a.z)
return t===11||t===12},
oj:function(a){return a.cy},
ec:function(a){return H.kO(v.typeUniverse,a,!1)},
bD:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.bD(a,t,c,a0)
if(s===t)return b
return H.mg(a,s,!0)
case 7:t=b.z
s=H.bD(a,t,c,a0)
if(s===t)return b
return H.kN(a,s,!0)
case 8:t=b.z
s=H.bD(a,t,c,a0)
if(s===t)return b
return H.mf(a,s,!0)
case 9:r=b.Q
q=H.eb(a,r,c,a0)
if(q===r)return b
return H.e4(a,b.z,q)
case 10:p=b.z
o=H.bD(a,p,c,a0)
n=b.Q
m=H.eb(a,n,c,a0)
if(o===p&&m===n)return b
return H.kL(a,o,m)
case 11:l=b.z
k=H.bD(a,l,c,a0)
j=b.Q
i=H.pA(a,j,c,a0)
if(k===l&&i===j)return b
return H.me(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.eb(a,h,c,a0)
p=b.z
o=H.bD(a,p,c,a0)
if(g===h&&o===p)return b
return H.kM(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.b(P.h3("Attempted to substitute unexpected RTI kind "+d))}},
eb:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.bD(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
pB:function(a,b,c,d){var t,s,r,q,p,o=b.length,n=[]
for(t=!1,s=0;s<o;s+=2){r=b[s]
q=b[s+1]
p=H.bD(a,q,c,d)
if(p!==q)t=!0
n.push(r)
n.push(p)}return t?n:b},
pA:function(a,b,c,d){var t,s=b.a,r=H.eb(a,s,c,d),q=b.b,p=H.eb(a,q,c,d),o=b.c,n=H.pB(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.fv()
t.a=r
t.b=p
t.c=n
return t},
pI:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.mG(t)
return a.$S()}return null},
mH:function(a,b){var t
if(H.lW(b))if(a instanceof H.bN){t=H.pI(a)
if(t!=null)return t}return H.X(a)},
X:function(a){var t
if(a instanceof P.E){t=a.$ti
return t!=null?t:H.kR(a)}if(Array.isArray(a))return H.C(a)
return H.kR(J.bG(a))},
C:function(a){var t=a[v.arrayRti],s=u.cO
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
i:function(a){var t=a.$ti
return t!=null?t:H.kR(a)},
kR:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.pm(a,t)},
pm:function(a,b){var t=a instanceof H.bN?a.__proto__.__proto__.constructor:b,s=H.pb(v.typeUniverse,t.name)
b.$ccache=s
return s},
mG:function(a){var t,s=a,r=v.types,q=r[s]
if(typeof q=="string"){t=H.kO(v.typeUniverse,q,!1)
r[s]=t
return t}return q},
pl:function(a){var t=this,s=H.pj,r=u.K
if(t===r){s=H.po
t.a=H.pd}else if(H.bH(t)||t===r){s=H.pr
t.a=H.pe}else if(t===u.S)s=H.cM
else if(t===u.gR)s=H.mp
else if(t===u.di)s=H.mp
else if(t===u.N)s=H.pp
else if(t===u.y)s=H.k9
else if(t.y===9){r=t.z
if(t.Q.every(H.pX)){t.r="$i"+r
s=H.pq}}t.b=s
return t.b(a)},
pj:function(a){var t=this
return H.a7(v.typeUniverse,H.mH(a,t),null,t,null)},
pq:function(a){var t=this,s=t.r
if(a instanceof P.E)return!!a[s]
return!!J.bG(a)[s]},
pi:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
throw H.b(H.md(H.m3(a,H.mH(a,t),H.ax(t,null))))},
aS:function(a,b,c,d){var t=null
if(H.a7(v.typeUniverse,a,t,b,t))return a
throw H.b(H.md("The type argument '"+H.a(H.ax(a,t))+"' is not a subtype of the type variable bound '"+H.a(H.ax(b,t))+"' of type variable '"+c+"' in '"+H.a(d)+"'."))},
m3:function(a,b,c){var t=P.bq(a),s=H.ax(b==null?H.X(a):b,null)
return t+": type '"+H.a(s)+"' is not a subtype of type '"+H.a(c)+"'"},
md:function(a){return new H.e3("TypeError: "+a)},
fP:function(a,b){return new H.e3("TypeError: "+H.m3(a,null,b))},
po:function(a){return!0},
pd:function(a){return a},
pr:function(a){return!0},
pe:function(a){return a},
k9:function(a){return!0===a||!1===a},
fX:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.b(H.fP(a,"bool"))},
pc:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.fP(a,"double"))},
cM:function(a){return typeof a=="number"&&Math.floor(a)===a},
q:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.fP(a,"int"))},
mp:function(a){return typeof a=="number"},
k3:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.fP(a,"num"))},
pp:function(a){return typeof a=="string"},
r:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.fP(a,"String"))},
px:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.d.v(s,H.ax(a[r],b))
return t},
mk:function(a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", "
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
if(m)o+=C.d.v(" extends ",H.ax(k,a2))}o+=">"}else{o=""
s=null}p=a1.z
j=a1.Q
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=H.ax(p,a2)
for(b="",a="",q=0;q<h;++q,a=a0)b+=C.d.v(a,H.ax(i[q],a2))
if(f>0){b+=a+"["
for(a="",q=0;q<f;++q,a=a0)b+=C.d.v(a,H.ax(g[q],a2))
b+="]"}if(d>0){b+=a+"{"
for(a="",q=0;q<d;q+=2,a=a0)b+=C.d.v(a,H.ax(e[q+1],a2))+" "+e[q]
b+="}"}if(s!=null)a2.length=s
return o+"("+b+") => "+H.a(c)},
ax:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.ax(a.z,b)
return t}if(m===7){s=a.z
t=H.ax(s,b)
r=s.y
return J.nk(r===11||r===12?C.d.v("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.a(H.ax(a.z,b))+">"
if(m===9){q=H.pC(a.z)
p=a.Q
return p.length!==0?q+("<"+H.px(p,b)+">"):q}if(m===11)return H.mk(a,b,null)
if(m===12)return H.mk(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.o(b,o)
return b[o]}return"?"},
pC:function(a){var t,s=H.n0(a)
if(s!=null)return s
t="minified:"+a
return t},
mi:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
pb:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.kO(a,b,!1)
else if(typeof n=="number"){t=n
s=H.e5(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.e4(a,b,r)
o[b]=p
return p}else return n},
p9:function(a,b){return H.mj(a.tR,b)},
p8:function(a,b){return H.mj(a.eT,b)},
kO:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.mh(a,null,b,c)
s.set(b,t)
return t},
fR:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.mh(a,b,c,!0)
r.set(c,s)
return s},
pa:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.kL(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
mh:function(a,b,c,d){var t=H.p_(H.oW(a,b,c,d))
if(t!=null)return t
throw H.b(P.j_('_Universe._parseRecipe("'+H.a(c)+'")'))},
bC:function(a,b){b.a=H.pi
b.b=H.pl
return b},
e5:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.aO(null,null)
t.y=b
t.cy=c
s=H.bC(a,t)
a.eC.set(c,s)
return s},
mg:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.p6(a,b,s,c)
a.eC.set(s,t)
return t},
p6:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.bH(b)||b===u.K||b===u.P||t===7||t===6)return b}s=new H.aO(null,null)
s.y=6
s.z=b
s.cy=c
return H.bC(a,s)},
kN:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.p5(a,b,s,c)
a.eC.set(s,t)
return t},
p5:function(a,b,c,d){var t,s,r,q,p
if(d){t=b.y
if(!H.bH(b))if(!(b===u.P))if(t!==7)s=t===8&&H.kl(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1)return u.P
else if(t===6){r=b.z
q=r.y
if(q===1)return u.P
else if(q===8&&H.kl(r.z))return r
else return H.ok(a,b)}}p=new H.aO(null,null)
p.y=7
p.z=b
p.cy=c
return H.bC(a,p)},
mf:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.p3(a,b,s,c)
a.eC.set(s,t)
return t},
p3:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.bH(b)||b===u.K||b===u.K)return b
else if(t===1)return H.e4(a,"aE",[b])
else if(b===u.P)return u.aQ}s=new H.aO(null,null)
s.y=8
s.z=b
s.cy=c
return H.bC(a,s)},
p7:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.aO(null,null)
t.y=13
t.z=b
t.cy=r
s=H.bC(a,t)
a.eC.set(r,s)
return s},
fQ:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
p2:function(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=2,s=","){q=a[r]
p=a[r+1].cy
t+=s+q+":"+p}return t},
e4:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.fQ(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.aO(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.bC(a,s)
a.eC.set(q,r)
return r},
kL:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+";"+("<"+H.fQ(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.aO(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.bC(a,p)
a.eC.set(r,o)
return o},
me:function(a,b,c){var t,s,r,q,p=b.cy,o=c.a,n=o.length,m=c.b,l=m.length,k=c.c,j=k.length,i="("+H.fQ(o)
if(l>0)i+=(n>0?",":"")+"["+H.fQ(m)+"]"
if(j>0)i+=(n>0?",":"")+"{"+H.p2(k)+"}"
t=p+(i+")")
s=a.eC.get(t)
if(s!=null)return s
r=new H.aO(null,null)
r.y=11
r.z=b
r.Q=c
r.cy=t
q=H.bC(a,r)
a.eC.set(t,q)
return q},
kM:function(a,b,c,d){var t,s=b.cy+"<"+H.fQ(c)+">",r=a.eC.get(s)
if(r!=null)return r
t=H.p4(a,b,c,s,d)
a.eC.set(s,t)
return t},
p4:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.bD(a,b,s,0)
n=H.eb(a,c,s,0)
return H.kM(a,o,n,c!==n)}}m=new H.aO(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.bC(a,m)},
oW:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
p_:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.oX(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.ma(a,s,h,g,!1)
else if(r===46)s=H.ma(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:break
case 59:g.push(H.bB(a.u,a.e,g.pop()))
break
case 94:g.push(H.p7(a.u,g.pop()))
break
case 35:g.push(H.e5(a.u,5,"#"))
break
case 64:g.push(H.e5(a.u,2,"@"))
break
case 126:g.push(H.e5(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.kK(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.e4(q,o,p))
else{n=H.bB(q,a.e,o)
switch(n.y){case 11:g.push(H.kM(q,n,p,a.n))
break
default:g.push(H.kL(q,n,p))
break}}break
case 38:H.oY(a,g)
break
case 42:m=a.u
g.push(H.mg(m,H.bB(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.kN(m,H.bB(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.mf(m,H.bB(m,a.e,g.pop()),a.n))
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
H.kK(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.me(q,H.bB(q,a.e,g.pop()),l))
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
H.p0(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.bB(a.u,a.e,i)},
oX:function(a,b,c,d){var t,s,r=b-48
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
if(o==null)H.D('No "'+q+'" in "'+H.oj(p)+'"')
d.push(H.fR(t,p,o))}else d.push(q)
return n},
oY:function(a,b){var t=b.pop()
if(0===t){b.push(H.e5(a.u,1,"0&"))
return}if(1===t){b.push(H.e5(a.u,4,"1&"))
return}throw H.b(P.h3("Unexpected extended operation "+H.a(t)))},
bB:function(a,b,c){if(typeof c=="string")return H.e4(a,c,a.sEA)
else if(typeof c=="number")return H.oZ(a,b,c)
else return c},
kK:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.bB(a,b,c[t])},
p0:function(a,b,c){var t,s=c.length
for(t=1;t<s;t+=2)c[t]=H.bB(a,b,c[t])},
oZ:function(a,b,c){var t,s,r=b.y
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
return H.a7(a,H.lV(a,b),c,d,e)}if(t===7){q=H.a7(a,b.z,c,d,e)
return q}if(r===8){if(H.a7(a,b,c,d.z,e))return!0
return H.a7(a,b,c,H.lV(a,d),e)}if(r===7){q=H.a7(a,b,c,d.z,e)
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
if(!H.a7(a,l,c,k,e)||!H.a7(a,k,e,l,c))return!1}return H.mo(a,b.z,c,d.z,e)}if(r===11){if(b===u.cj)return!0
if(q)return!1
return H.mo(a,b,c,d,e)}if(t===9){if(r!==9)return!1
return H.pn(a,b,c,d,e)}return!1},
mo:function(a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
pn:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.a7(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.mi(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.a7(a,H.fR(a,b,m[q]),c,s[q],e))return!1
return!0},
kl:function(a){var t,s=a.y
if(!(a===u.P))if(!H.bH(a))if(s!==7)if(!(s===6&&H.kl(a.z)))t=s===8&&H.kl(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
pX:function(a){return H.bH(a)||a===u.K},
bH:function(a){var t,s=a.y,r=s
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
aO:function aO(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fv:function fv(){this.c=this.b=this.a=null},
ft:function ft(){},
e3:function e3(a){this.a=a},
mI:function(a){return u.fK.b(a)||u.B.b(a)||u.dz.b(a)||u.gb.b(a)||u.A.b(a)||u.g4.b(a)||u.g2.b(a)},
n0:function(a){return v.mangledGlobalNames[a]},
q9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kZ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fY:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.kY==null){H.pS()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.b(P.j_("Return interceptor for "+H.a(t(a,p))))}r=a.constructor
q=r==null?null:r[$.l5()]
if(q!=null)return q
q=H.pZ(a)
if(q!=null)return q
if(typeof a=="function")return C.I
t=Object.getPrototypeOf(a)
if(t==null)return C.v
if(t===Object.prototype)return C.v
if(typeof r=="function"){Object.defineProperty(r,$.l5(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
lI:function(a){a.fixed$length=Array
return a},
lJ:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kB:function(a,b){var t,s
for(t=a.length;b<t;){s=C.d.b1(a,b)
if(s!==32&&s!==13&&!J.lJ(s))break;++b}return b},
o4:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.d.du(a,t)
if(s!==32&&s!==13&&!J.lJ(s))break}return b},
bG:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.df.prototype
return J.eH.prototype}if(typeof a=="string")return J.bf.prototype
if(a==null)return J.dg.prototype
if(typeof a=="boolean")return J.eG.prototype
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.E)return a
return J.fY(a)},
pO:function(a){if(typeof a=="number")return J.bt.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.E)return a
return J.fY(a)},
az:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.E)return a
return J.fY(a)},
bb:function(a){if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.E)return a
return J.fY(a)},
kf:function(a){if(typeof a=="number")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bx.prototype
return a},
mD:function(a){if(typeof a=="number")return J.bt.prototype
if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bx.prototype
return a},
kg:function(a){if(typeof a=="string")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bx.prototype
return a},
W:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.E)return a
return J.fY(a)},
nk:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pO(a).v(a,b)},
bJ:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bG(a).P(a,b)},
nl:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kf(a).J(a,b)},
l9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mD(a).at(a,b)},
c8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pW(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.az(a).h(a,b)},
kr:function(a,b,c){return J.bb(a).j(a,b,c)},
nm:function(a,b,c,d){return J.W(a).eu(a,b,c,d)},
ks:function(a){return J.W(a).ey(a)},
nn:function(a,b,c,d){return J.W(a).f9(a,b,c,d)},
no:function(a,b,c){return J.W(a).fa(a,b,c)},
ef:function(a,b){return J.bb(a).l(a,b)},
la:function(a,b){return J.mD(a).dv(a,b)},
h0:function(a,b,c){return J.az(a).fE(a,b,c)},
np:function(a,b){return J.W(a).dA(a,b)},
aU:function(a,b){return J.bb(a).C(a,b)},
c9:function(a){return J.kf(a).c6(a)},
nq:function(a){return J.W(a).gfs(a)},
nr:function(a){return J.W(a).gdr(a)},
bK:function(a){return J.W(a).gds(a)},
ab:function(a){return J.bG(a).gA(a)},
ns:function(a){return J.az(a).gM(a)},
lb:function(a){return J.az(a).gcg(a)},
y:function(a){return J.bb(a).gw(a)},
ac:function(a){return J.az(a).gk(a)},
nt:function(a){return J.W(a).gdJ(a)},
nu:function(a){return J.W(a).gdM(a)},
nv:function(a){return J.W(a).gdN(a)},
lc:function(a,b,c){return J.bb(a).ag(a,b,c)},
nw:function(a,b){return J.bb(a).S(a,b)},
kt:function(a,b,c){return J.bb(a).G(a,b,c)},
nx:function(a,b){return J.W(a).fY(a,b)},
ny:function(a,b){return J.W(a).h_(a,b)},
nz:function(a,b){return J.bG(a).bk(a,b)},
eg:function(a){return J.W(a).bl(a)},
nA:function(a,b){return J.W(a).h9(a,b)},
cS:function(a){return J.kf(a).D(a)},
eh:function(a,b){return J.W(a).K(a,b)},
ld:function(a,b,c){return J.W(a).cv(a,b,c)},
nB:function(a,b){return J.bb(a).aY(a,b)},
nC:function(a,b,c){return J.kg(a).ab(a,b,c)},
le:function(a){return J.kf(a).bp(a)},
nD:function(a){return J.bb(a).aq(a)},
nE:function(a){return J.kg(a).hg(a)},
B:function(a){return J.bG(a).n(a)},
ku:function(a){return J.kg(a).aF(a)},
aj:function aj(){},
eG:function eG(){},
dg:function dg(){},
bu:function bu(){},
f1:function f1(){},
bx:function bx(){},
b4:function b4(){},
G:function G(a){this.$ti=a},
iu:function iu(a){this.$ti=a},
aB:function aB(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bt:function bt(){},
df:function df(){},
eH:function eH(){},
bf:function bf(){}},P={
oL:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.pE()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.cR(new P.ja(r),1)).observe(t,{childList:true})
return new P.j9(r,t,s)}else if(self.setImmediate!=null)return P.pF()
return P.pG()},
oM:function(a){self.scheduleImmediate(H.cR(new P.jb(u.M.a(a)),0))},
oN:function(a){self.setImmediate(H.cR(new P.jc(u.M.a(a)),0))},
oO:function(a){P.kF(C.p,u.M.a(a))},
kF:function(a,b){var t=C.e.aA(a.a,1000)
return P.p1(t<0?0:t,b)},
p1:function(a,b){var t=new P.jW()
t.er(a,b)
return t},
nV:function(a,b){var t=new P.a4($.H,b.i("a4<0>"))
P.ou(C.p,new P.iq(t,a))
return t},
m4:function(a,b){var t,s,r
b.a=1
try{a.dY(new P.jo(b),new P.jp(b),u.P)}catch(r){t=H.L(r)
s=H.aT(r)
P.mY(new P.jq(b,t,s))}},
jn:function(a,b){var t,s,r
for(t=u._;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.b9()
b.a=a.a
b.c=a.c
P.cJ(b,r)}else{r=u.x.a(b.c)
b.a=2
b.c=a
a.d7(r)}},
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
b=k.ba(g)
k.a=c.a
k.c=c.c
d.a=c
continue}else P.jn(c,k)
return}}f=b.b
g=s.a(f.c)
f.c=null
b=f.ba(g)
c=q.a
l=q.b
if(!c){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}d.a=f
c=f}},
pw:function(a,b){var t
if(u.ag.b(a))return b.dQ(a,u.z,u.K,u.l)
t=u.bI
if(t.b(a))return t.a(a)
throw H.b(P.cT(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pt:function(){var t,s
for(;t=$.cN,t!=null;){$.ea=null
s=t.b
$.cN=s
if(s==null)$.e9=null
t.a.$0()}},
pz:function(){$.kS=!0
try{P.pt()}finally{$.ea=null
$.kS=!1
if($.cN!=null)$.l6().$1(P.mz())}},
mv:function(a){var t=new P.fi(a)
if($.cN==null){$.cN=$.e9=t
if(!$.kS)$.l6().$1(P.mz())}else $.e9=$.e9.b=t},
py:function(a){var t,s,r=$.cN
if(r==null){P.mv(a)
$.ea=$.e9
return}t=new P.fi(a)
s=$.ea
if(s==null){t.b=r
$.cN=$.ea=t}else{t.b=s.b
$.ea=s.b=t
if(t.b==null)$.e9=t}},
mY:function(a){var t=null,s=$.H
if(C.f===s){P.cP(t,t,C.f,a)
return}P.cP(t,t,s,u.M.a(s.bZ(a)))},
cx:function(a,b,c){return new P.e1(null,a,c.i("e1<0>"))},
mu:function(a){var t,s,r
if(a==null)return
try{a.$0()}catch(r){t=H.L(r)
s=H.aT(r)
P.cO(null,null,$.H,t,u.l.a(s))}},
mq:function(a,b){P.cO(null,null,$.H,a,b)},
pu:function(){},
ou:function(a,b){var t=$.H
if(t===C.f)return P.kF(a,u.M.a(b))
return P.kF(a,u.M.a(t.bZ(b)))},
h4:function(a,b){var t=b==null?P.lh(a):b
P.bc(a,"error",u.K)
return new P.cV(a,t)},
lh:function(a){var t
if(u.bU.b(a)){t=a.gaZ()
if(t!=null)return t}return C.G},
cO:function(a,b,c,d,e){var t={}
t.a=d
t.b=e
if(d==null){t.a=new P.aK(!1,null,"error","Must not be null")
t.b=P.or()}P.py(new P.ka(t))},
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
if(t)d=!(!t||!1)?c.bZ(d):c.ft(d,u.o)
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
ah:function ah(a,b){this.a=a
this.$ti=b},
b8:function b8(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.c=_.b=_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
bz:function bz(){},
e1:function e1(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
jT:function jT(a,b){this.a=a
this.b=b},
jU:function jU(a){this.a=a},
aE:function aE(){},
iq:function iq(a,b){this.a=a
this.b=b},
fl:function fl(){},
e2:function e2(a,b){this.a=a
this.$ti=b},
c5:function c5(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
a4:function a4(a,b){var _=this
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
fi:function fi(a){this.a=a
this.b=null},
U:function U(){},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
a3:function a3(){},
f6:function f6(){},
cE:function cE(){},
cF:function cF(){},
O:function O(){},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
cK:function cK(){},
bA:function bA(){},
dD:function dD(a,b){this.b=a
this.a=null
this.$ti=b},
fq:function fq(a,b){this.b=a
this.c=b
this.a=null},
fp:function fp(){},
dV:function dV(){},
jG:function jG(a,b){this.a=a
this.b=b},
e_:function e_(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cG:function cG(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
dG:function dG(){},
cI:function cI(a,b,c,d){var _=this
_.x=a
_.c=_.b=_.a=_.y=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
dP:function dP(a,b,c){this.b=a
this.a=b
this.$ti=c},
cV:function cV(a,b){this.a=a
this.b=b},
fS:function fS(){},
ka:function ka(a){this.a=a},
fH:function fH(){},
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
a5:function(a,b,c){return b.i("@<0>").q(c).i("lL<1,2>").a(H.pN(a,new H.a8(b.i("@<0>").q(c).i("a8<1,2>"))))},
bW:function(a,b){return new H.a8(a.i("@<0>").q(b).i("a8<1,2>"))},
dl:function(a){return new P.dN(a.i("dN<0>"))},
kJ:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
jB:function(a,b,c){var t=new P.c7(a,b,c.i("c7<0>"))
t.c=a.e
return t},
nX:function(a,b,c){var t,s
if(P.kT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.h([],u.s)
C.a.l($.aJ,a)
try{P.ps(a,t)}finally{if(0>=$.aJ.length)return H.o($.aJ,-1)
$.aJ.pop()}s=P.lX(b,u.R.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
is:function(a,b,c){var t,s
if(P.kT(a))return b+"..."+c
t=new P.aQ(b)
C.a.l($.aJ,a)
try{s=t
s.a=P.lX(s.a,a,", ")}finally{if(0>=$.aJ.length)return H.o($.aJ,-1)
$.aJ.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
kT:function(a){var t,s
for(t=$.aJ.length,s=0;s<t;++s)if(a===$.aJ[s])return!0
return!1},
ps:function(a,b){var t,s,r,q,p,o,n,m=a.gw(a),l=0,k=0
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
lM:function(a,b){var t,s,r=P.dl(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.A)(a),++s)r.l(0,b.a(a[s]))
return r},
iz:function(a){var t,s={}
if(P.kT(a))return"{...}"
t=new P.aQ("")
try{C.a.l($.aJ,a)
t.a+="{"
s.a=!0
a.t(0,new P.iA(s,t))
t.a+="}"}finally{if(0>=$.aJ.length)return H.o($.aJ,-1)
$.aJ.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
dH:function dH(){},
dK:function dK(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dI:function dI(a,b){this.a=a
this.$ti=b},
dJ:function dJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dN:function dN(a){var _=this
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
dm:function dm(){},
k:function k(){},
dn:function dn(){},
iA:function iA(a,b){this.a=a
this.b=b},
S:function S(){},
e6:function e6(){},
co:function co(){},
dB:function dB(){},
aY:function aY(){},
dv:function dv(){},
dW:function dW(){},
dO:function dO(){},
dX:function dX(){},
cL:function cL(){},
pv:function(a,b){var t,s,r,q
if(typeof a!="string")throw H.b(H.ba(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.L(r)
q=P.dc(String(s),null)
throw H.b(q)}q=P.k4(t)
return q},
k4:function(a){var t
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.fz(a,Object.create(null))
for(t=0;t<a.length;++t)a[t]=P.k4(a[t])
return a},
lK:function(a,b,c){return new P.di(a,b)},
ph:function(a){return a.hp()},
oV:function(a,b,c){var t,s=new P.aQ(""),r=new P.jy(s,[],P.pK())
r.bv(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
fz:function fz(a,b){this.a=a
this.b=b
this.c=null},
fA:function fA(a){this.a=a},
eo:function eo(){},
cg:function cg(){},
ir:function ir(){},
ck:function ck(){},
di:function di(a,b){this.a=a
this.b=b},
eL:function eL(a,b){this.a=a
this.b=b},
ix:function ix(){},
eN:function eN(a){this.b=a},
eM:function eM(a){this.a=a},
jz:function jz(){},
jA:function jA(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c){this.c=a
this.a=b
this.b=c},
pU:function(a){var t=H.lT(a,null)
if(t!=null)return t
throw H.b(P.dc(a,null))},
nU:function(a){if(a instanceof H.bN)return a.n(0)
return"Instance of '"+H.a(H.iM(a))+"'"},
cm:function(a,b,c){var t,s=H.h([],c.i("G<0>"))
for(t=J.y(a);t.m();)C.a.l(s,c.a(t.gp()))
if(b)return s
return c.i("t<0>").a(J.lI(s))},
oi:function(a){return new H.eJ(a,H.o5(a,!1,!0,!1,!1,!1))},
lX:function(a,b,c){var t=J.y(b)
if(!t.m())return a
if(c.length===0){do a+=H.a(t.gp())
while(t.m())}else{a+=H.a(t.gp())
for(;t.m();)a=a+c+H.a(t.gp())}return a},
lO:function(a,b,c,d){return new P.eX(a,b,c,d)},
or:function(){var t,s
if(H.as($.nj()))return H.aT(new Error())
try{throw H.b("")}catch(s){H.L(s)
t=H.aT(s)
return t}},
nP:function(a,b){var t
if(Math.abs(a)<=864e13)t=!1
else t=!0
if(t)H.D(P.b0("DateTime is outside valid range: "+a))
P.bc(!1,"isUtc",u.y)
return new P.ci(a,!1)},
nQ:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
nR:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
es:function(a){if(a>=10)return""+a
return"0"+a},
bq:function(a){if(typeof a=="number"||H.k9(a)||null==a)return J.B(a)
if(typeof a=="string")return JSON.stringify(a)
return P.nU(a)},
h3:function(a){return new P.cU(a)},
b0:function(a){return new P.aK(!1,null,null,a)},
cT:function(a,b,c){return new P.aK(!0,a,b,c)},
kv:function(a){return new P.aK(!1,null,a,"Must not be null")},
bc:function(a,b,c){if(a==null)throw H.b(P.kv(b))
return a},
ct:function(a,b){return new P.du(null,null,!0,a,b,"Value not in range")},
aa:function(a,b,c,d,e){return new P.du(b,c,!0,a,d,"Invalid value")},
kE:function(a,b,c,d){if(typeof a!=="number")return a.ai()
if(a<b||a>c)throw H.b(P.aa(a,b,c,d,null))
return a},
lU:function(a,b,c){if(0>a||a>c)throw H.b(P.aa(a,0,c,"start",null))
if(a>b||b>c)throw H.b(P.aa(b,a,c,"end",null))
return b},
aX:function(a,b){if(typeof a!=="number")return a.ai()
if(a<0)throw H.b(P.aa(a,0,null,b,null))
return a},
be:function(a,b,c,d,e){var t=H.q(e==null?J.ac(b):e)
return new P.eE(t,!0,a,c,"Index out of range")},
x:function(a){return new P.fg(a)},
j_:function(a){return new P.fe(a)},
c2:function(a){return new P.b5(a)},
aL:function(a){return new P.ep(a)},
bT:function(a){return new P.fu(a)},
dc:function(a,b){return new P.db(a,b)},
mO:function(a,b){var t=P.fZ(a)
if(t!=null)return t
if(b==null)throw H.b(P.dc(a,null))
return b.$1(a)},
fZ:function(a){var t=J.ku(a),s=H.lT(t,null)
return s==null?H.oh(t):s},
ed:function(a){H.q9(H.a(a))},
iB:function iB(a,b){this.a=a
this.b=b},
w:function w(){},
ci:function ci(a,b){this.a=a
this.b=b},
ai:function ai(){},
bR:function bR(a){this.a=a},
hX:function hX(){},
hY:function hY(){},
K:function K(){},
cU:function cU(a){this.a=a},
eZ:function eZ(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
du:function du(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eE:function eE(a,b,c,d,e){var _=this
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
b5:function b5(a){this.a=a},
ep:function ep(a){this.a=a},
f_:function f_(){},
dx:function dx(){},
er:function er(a){this.a=a},
fu:function fu(a){this.a=a},
db:function db(a,b){this.a=a
this.b=b},
b3:function b3(){},
e:function e(){},
d:function d(){},
R:function R(){},
t:function t(){},
cn:function cn(){},
u:function u(){},
Y:function Y(){},
E:function E(){},
dp:function dp(){},
aq:function aq(){},
ar:function ar(){},
fJ:function fJ(){},
c:function c(){},
aQ:function aQ(a){this.a=a},
aZ:function aZ(){},
kz:function(){var t=$.lr
return t==null?$.lr=J.h0(window.navigator.userAgent,"Opera",0):t},
nS:function(){var t,s=$.lo
if(s!=null)return s
t=$.lp
if(t==null?$.lp=J.h0(window.navigator.userAgent,"Firefox",0):t)s="-moz-"
else{t=$.lq
if(t==null)t=$.lq=!H.as(P.kz())&&J.h0(window.navigator.userAgent,"Trident/",0)
if(t)s="-ms-"
else s=H.as(P.kz())?"-o-":"-webkit-"}return $.lo=s},
eq:function eq(){},
hI:function hI(a){this.a=a},
eB:function eB(a,b){this.a=a
this.b=b},
im:function im(){},
io:function io(){},
ip:function ip(){},
dj:function dj(){},
pf:function(a,b,c,d){var t,s,r
H.fX(b)
u.j.a(d)
if(H.as(b)){t=[c]
C.a.L(t,d)
d=t}s=u.z
r=P.cm(J.kt(d,P.pY(),s),!0,s)
u.Z.a(a)
return P.e8(H.o9(a,r,null))},
ak:function(a){if(!u.f.b(a)&&!u.R.b(a))throw H.b(P.b0("object must be a Map or Iterable"))
return u.b.a(P.bE(P.dh(a)))},
dh:function(a){return new P.iw(new P.dK(u.aH)).$1(a)},
aW:function(a,b){var t=[]
C.a.L(t,J.kt(a,P.km(),u.z))
return new P.v(t,b.i("v<0>"))},
kP:function(a,b,c){var t
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(t){H.L(t)}return!1},
mm:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
e8:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.k9(a))return a
if(a instanceof P.P)return a.a
if(H.mI(a))return a
if(u.ak.b(a))return a
if(a instanceof P.ci)return H.bZ(a)
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
if(s)H.D(P.b0("DateTime is outside valid range: "+t))
P.bc(!1,"isUtc",u.y)
return new P.ci(t,!1)}else if(a.constructor===$.l8())return a.o
else return P.bE(a)},
bE:function(a){if(typeof a=="function")return P.kQ(a,$.kq(),new P.kb())
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
P:function P(a){this.a=a},
aF:function aF(a){this.a=a},
v:function v(a,b){this.a=a
this.$ti=b},
dM:function dM(){},
dL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m8:function(a){a=536870911&a+((67108863&a)<<3)
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
cu:function cu(){},
ek:function ek(a){this.a=a},
l:function l(){}},W={
lf:function(a){var t=document.createElement("a")
if(a!=null)t.href=a
return t},
nT:function(a,b,c){var t=document.body,s=(t&&C.m).V(t,a,b,c)
s.toString
t=u.ac
t=new H.ag(new W.al(s),t.i("w(k.E)").a(new W.i_()),t.i("ag<k.E>"))
return u.h.a(t.gaw(t))},
d8:function(a){var t,s,r="element tag unavailable"
try{t=J.W(a)
if(typeof t.gdW(a)=="string")r=t.gdW(a)}catch(s){H.L(s)}return r},
nW:function(a){var t,s=document.createElement("input"),r=u.p.a(s)
try{r.type=a}catch(t){H.L(t)}return r},
dq:function(a,b){var t=window,s=u.V.a(document.createEvent("MouseEvent"))
s.toString
s.initMouseEvent(a,!0,!0,t,0,0,0,0,0,!1,!1,!1,!1,0,W.pg(b))
return s},
ov:function(a){return new TouchEvent(a)},
ow:function(){var t
try{W.ov("touches")
return!0}catch(t){H.L(t)}return!1},
jx:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m9:function(a,b,c,d){var t=W.jx(W.jx(W.jx(W.jx(0,a),b),c),d),s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
m2:function(a,b){var t,s=a.classList
for(t=0;t<2;++t)s.add(b[t])},
oS:function(a,b){var t,s,r=a.classList
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.A)(b),++s)r.remove(H.r(b[s]))},
i0:function(a,b){return new W.eA(a,b.i("eA<0>"))},
z:function(a,b,c,d,e){var t=W.mw(new W.jk(c),u.B)
t=new W.dF(a,b,t,!1,e.i("dF<0>"))
t.dg()
return t},
m7:function(a){var t=W.lf(null),s=window.location
t=new W.c6(new W.fI(t,s))
t.ep(a)
return t},
oT:function(a,b,c,d){u.h.a(a)
H.r(b)
H.r(c)
u.cr.a(d)
return!0},
oU:function(a,b,c,d){var t,s,r
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
mc:function(){var t=u.N,s=P.lM(C.t,t),r=u.dG.a(new W.jV()),q=H.h(["TEMPLATE"],u.s)
t=new W.fL(s,P.dl(t),P.dl(t),P.dl(t),null)
t.eq(null,new H.T(C.t,r,u.dv),q,null)
return t},
M:function(a){var t
if(a==null)return null
if("postMessage" in a){t=W.oP(a)
return t}else return u.aS.a(a)},
pg:function(a){return a},
oP:function(a){if(a===window)return u.ci.a(a)
else return new W.fo(a)},
mw:function(a,b){var t=$.H
if(t===C.f)return a
return t.fu(a,b)},
j:function j(){},
ca:function ca(){},
ej:function ej(){},
cb:function cb(){},
bL:function bL(){},
bM:function bM(){},
ce:function ce(){},
b2:function b2(){},
I:function I(){},
ch:function ch(){},
hJ:function hJ(){},
d2:function d2(){},
bP:function bP(){},
hK:function hK(){},
d3:function d3(){},
hL:function hL(){},
fk:function fk(a,b){this.a=a
this.b=b},
am:function am(a,b){this.a=a
this.$ti=b},
p:function p(){},
i_:function i_(){},
f:function f(){},
i1:function i1(){},
hZ:function hZ(a){this.a=a},
F:function F(){},
eC:function eC(){},
bs:function bs(){},
dd:function dd(){},
cl:function cl(){},
bg:function bg(){},
eO:function eO(){},
a2:function a2(){},
al:function al(a){this.a=a},
m:function m(){},
ds:function ds(){},
cp:function cp(){},
cq:function cq(){},
cw:function cw(){},
cy:function cy(){},
f8:function f8(){},
dz:function dz(){},
f9:function f9(){},
fa:function fa(){},
cA:function cA(){},
cB:function cB(){},
aI:function aI(){},
b6:function b6(){},
fd:function fd(){},
av:function av(){},
by:function by(){},
j8:function j8(a){this.a=a},
b7:function b7(){},
cD:function cD(){},
fm:function fm(){},
dE:function dE(){},
dQ:function dQ(){},
fj:function fj(){},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
eA:function eA(a,b){this.a=a
this.$ti=b},
bl:function bl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dF:function dF(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jk:function jk(a){this.a=a},
e0:function e0(a,b){this.a=null
this.b=a
this.$ti=b},
jR:function jR(a,b){this.a=a
this.b=b},
c6:function c6(a){this.a=a},
V:function V(){},
dt:function dt(a){this.a=a},
iD:function iD(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(){},
jP:function jP(){},
jQ:function jQ(){},
fL:function fL(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jV:function jV(){},
fK:function fK(){},
bV:function bV(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
fo:function fo(a){this.a=a},
ap:function ap(){},
fI:function fI(a,b){this.a=a
this.b=b},
e7:function e7(a){this.a=a
this.b=!1},
k2:function k2(a){this.a=a},
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
lx:function(a,b,c,d){var t,s,r=$.lz
$.lz=r+1
t=H.h([],u.f7)
r=new Z.hM(r,b,c,d,t)
s=u.j.b(a)?a:H.h([a],u.ge)
r.sbL(u.O.a(s))
s=window
if(u.b.a(P.bE(P.e8(s))).B("PointerEvent")){s=u.w
s=new Z.fF(H.h([],s),H.h([],s),r)
s.bC(r)
C.a.l(t,s)}else{if(W.ow()){s=u.w
s=new Z.fO(H.h([],s),H.h([],s),r)
s.bC(r)
C.a.l(t,s)}s=u.w
s=new Z.fC(H.h([],s),H.h([],s),r)
s.bC(r)
C.a.l(t,s)}return r},
ly:function(a,b,c){return new Z.bQ(b.b,b.c)},
nF:function(a){$.lg=a
if(!$.h1){C.Q.gfp(window).dX(new Z.h2(),u.o)
$.h1=!0}},
oR:function(a,b){var t,s,r="_customDragOver"
if(b==null)return
t=$.cH
if(t===b)b.dispatchEvent(W.dq(r,null))
else{b.dispatchEvent(W.dq("_customDragEnter",t))
if($.cH!=null){s=W.dq("_customDragLeave",b)
$.cH.dispatchEvent(s)}b.dispatchEvent(W.dq(r,null))
$.cH=b}},
oQ:function(a,b){J.np(b,W.dq("_customDrop",null))
Z.m1()},
m1:function(){if($.cH!=null){var t=W.dq("_customDragLeave",null)
$.cH.dispatchEvent(t)
$.cH=null}},
cj:function(a,b){var t=new Z.ez(b,H.h([],u.w)),s=u.j.b(a)?a:H.h([a],u.ge)
t.sbL(u.O.a(s))
C.a.t(t.x,t.gf1())
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
bQ:function bQ(a,b){this.a=a
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
el:function el(){},
h7:function h7(a,b){this.a=a
this.b=b},
h2:function h2(){},
b9:function b9(){},
jg:function jg(){},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(){},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a){this.a=a},
k0:function k0(a){this.a=a},
k_:function k_(a){this.a=a},
jZ:function jZ(a){this.a=a},
jY:function jY(a){this.a=a},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a){this.a=a},
jE:function jE(a){this.a=a},
jD:function jD(a){this.a=a},
jC:function jC(a){this.a=a},
fF:function fF(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a){this.a=a},
jK:function jK(a){this.a=a},
jJ:function jJ(a){this.a=a},
jI:function jI(a){this.a=a},
jH:function jH(a){this.a=a},
ez:function ez(a,b){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=null
_.y=b},
hT:function hT(a){this.a=a},
hV:function hV(a){this.a=a},
hU:function hU(a){this.a=a},
hW:function hW(a){this.a=a},
hS:function hS(){},
at:function at(a){this.d=a},
ei:function ei(){}},U={
lF:function(a,b,c){var t=u.s,s=new U.bU(new U.a1(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t)),b,a)
s.ax(a,b)
if(!C.a.F(H.h(["num","bool"],t),c))H.D(P.cT(c,"type","The expression type can only be num or bool"))
t=new U.br(a.fx)
t.c=new U.ad(t,c,H.h([],u.U))
s.r=t
s.f=c
return s},
om:function(a,b,c){var t=new U.cv("smart-quote",H.h([],u.eD),new U.a1(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,a)
t.aI(a,b,c)
t.eo(a,b,c)
return t},
h9:function(a,b,c,d){var t=d?b.cloneNode(!0):b
u.d.a(t)
t.toString
W.oS(t,u.fP.a(["nt-block-starter","nt-block-ender","nt-block-standalone","nt-block-middle","nt-block-clause-starter","nt-block-clause-standalone","nt-block-clause-middle","nt-block-clause-ender"]))
t.classList.add(c)
a.appendChild(t)},
kw:function(a,b,c,d){var t,s=b.length
if(s===0)return
if(s===1)U.h9(a,C.a.gaD(b).k2,c+"-standalone",d)
else{U.h9(a,C.a.gaD(b).k2,c+"-starter",d)
for(t=1;t<b.length-1;++t)U.h9(a,b[t].k2,c+"-middle",d)
U.h9(a,C.a.gdG(b).k2,c+"-ender",d)}},
kx:function(){return new U.cX("#9977aa","#ffffff","#ffffff")},
li:function(a,b,c,d){var t=H.h(["id","action","required","placement","instanceId","type","format","limit","note","blockColor","textColor","borderColor","font","clauses","params","properties","propertiesDisplay"],u.s),s=u.by
t=new U.an(new U.a1(t),b,c,new H.a8(s),new H.a8(s),H.h([],u.e),"child",a)
if(b==null){s=a.cx
t.b=s
a.cx=s+1}else if(b>=a.cx)a.cx=b+1
if(!d){s=a.cy
t.c=s
a.cy=s+1}return t},
lj:function(a){var t=a.c0(0,!1)
C.a.t(a.ch,new U.hf(t))
return t},
ky:function(a,b){var t,s,r=a.db
if(r!=null){t=b.style
t.borderColor=r}r=a.cy
if(r!=null){t=b.style
t.color=r}r=a.dx
if(r!=null){t=b.style
s=t.lineHeight
t.font=r
r=b.style
r.lineHeight=s}},
lk:function(a,b,c){var t,s=Z.lx(b,a.fy,"input, textarea, button, select, option","nt-block-dragging")
s.gdL(s).u(a.gbz())
s.gdK(s).u(a.gc4())
t=Z.cj(b,a.fx.r1)
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
a.appendChild(U.lP(!1,C.a.gdG(b)))},
pJ:function(a,b){var t,s,r,q,p=u.Y
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
return J.la(p,s[0].d)},
cf:function(a){var t=a.a2()
if(t==null)t=""
return a.aX()?'"'+t+'"':t},
cZ:function(a){var t,s,r,q,p=a.d
if(p!=null){for(t=a.e,s=0;s<t.length;++s){r="{"+s+"}"
if(s>=t.length)return H.o(t,s)
q=U.cZ(t[s])
if(typeof q!="string")H.D(H.ba(q))
p=H.l0(p,r,q)}return p}else{t=a.e
r=t.length
if(r===1){r="("+H.a(a.b)+" "
if(0>=t.length)return H.o(t,0)
return r+H.a(U.cZ(t[0]))+")"}else if(r===2){if(0>=r)return H.o(t,0)
r="("+H.a(U.cZ(t[0]))+" "+H.a(a.b)+" "
if(1>=t.length)return H.o(t,1)
return r+H.a(U.cZ(t[1]))+")"}else return a.b}},
lw:function(a,b){var t
$.ex=a.fx.c
$.lt=b.d.E(0,U.d5(b.a))
t=a.fr
$.et=t==="child"||t==="anywhere"
$.aM=!1},
d5:function(a){var t,s,r,q=J.W(a)
if(a.offsetParent==null){q=q.gaU(a)
return new P.J(q.a,q.b,q.$ti.i("J<1>"))}else{q=q.gaU(a)
t=q.$ti.i("J<1>")
s=t.a(U.d5(a.offsetParent))
r=s.a
if(typeof r!=="number")return H.a0(r)
s=s.b
if(typeof s!=="number")return H.a0(s)
return new P.J(q.a+r,q.b+s,t)}},
lE:function(a,b){var t=new U.ad(a,"num",H.h([],u.U))
t.en(a,b)
return t},
lP:function(a,b){var t,s,r=document.createElement("div")
r.classList.add("nt-notch")
t=b.aG()
r.classList.add(t)
U.ky(b,r)
if(a)r.classList.add("nt-notch-top")
else r.classList.add("nt-notch-bottom")
s=t+"-color"
C.a.t(H.h(["filler","left","middle","right"],u.s),new U.iF(s,a,b,r))
U.lk(b,r,new U.iG(b))
return r},
lQ:function(a,b){var t,s,r,q,p=document,o=p.createElement("div")
o.classList.add("nt-notch")
t=b.d
s=t.aG()
o.classList.add(s)
U.ky(t,o)
if(a)o.classList.add("nt-notch-top")
else o.classList.add("nt-notch-bottom")
r=s+"-color"
C.a.t(H.h(["filler","left","middle","right"],u.s),new U.iE(r,a,b,o))
if(!a){q=p.createElement("div")
q.className="nt-notch-clause-filler"
o.appendChild(q)}return o},
cc:function(a){var t=new U.em()
t.b=a.b
t.c=a.c
return t},
mn:function(a,b,c,d){U.pk(a,new U.k8(b),c,d)},
pk:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k="version",j="blockStyles",i="variables",h="expressions",g=H.q(d.B(k)?d.h(0,k):0)
if(typeof g!=="number")return g.J()
if(g>5)H.D("Somehow the given model version ("+g+") is greater than the supported NetTango version (5).")
if(g<1)U.oA(d)
if(g<2)U.kH(d,U.mK(),U.mK())
if(g<3)U.oG(d)
if(g<4){U.oH(d)
U.kG(d,U.mL(),U.mL())}if(g<5){U.kG(d,U.mN(),U.mN())
U.kG(d,U.mM(),U.mM())}d.j(0,k,5)
q=new U.hu(b,c)
switch(a){case"NetLogo":q.b=new U.eD("","end","[","]")
break
default:q.b=new U.eD("","","","")
break}t=q
try{if($.ay.H(c))$.ay.h(0,c).r2.fH()
if(!J.bJ(d.h(0,k),5))H.D("The supported NetTango version is 5, but the given definition version was "+H.a(d.h(0,k))+".")
p=new U.a1(H.h(["version","height","width","blocks","program","chainOpen","chainClose","blockStyles","variables","expressions"],u.s))
o=new U.bO(p,5,c,t,H.h([],u.cM),[],H.h([],u.ga),600,600,450)
n="#"+H.a(c)
n=u.d.a(document.querySelector(n))
o.d=n
if(n==null)H.D("No container element with ID "+H.a(c)+" found.");(n&&C.b).K(n,"")
n.classList.add("nt-container")
m=new U.d4(c,!0)
o.k4=m
o.r1=new U.d4(c,!1)
m=o.r2=Z.cj(n,m)
m.gap(m).u(o.gfC())
o.go=$.l4()
o.id=$.l3()
o.k1=$.l2()
m=o.d.style
n=H.a(o.fr)+"px"
m.minHeight=n
n=o.d.style
m=H.a(o.fy)+"px"
n.minWidth=m
n=o.d.style
m=H.a(o.fy)+"px"
n.maxWidth=m
o.db=new U.en(o,H.h([],u.dk))
p.b=d
p=H.q(H.cM(d.h(0,"height"))?d.h(0,"height"):600)
o.fr=p
n=o.d.style
p=H.a(p)+"px"
n.minHeight=p
p=H.q(H.cM(d.h(0,"width"))?d.h(0,"width"):450)
o.fy=p
n=o.d.style
p=H.a(p)+"px"
n.minWidth=p
p=o.d.style
n=H.a(o.fy)+"px"
p.maxWidth=n
p=d.h(0,"chainOpen")
o.z=p==null?null:J.B(p)
p=d.h(0,"chainClose")
o.Q=p==null?null:J.B(p)
if(d.B(j)){p=u.b
o.go=U.l_(p.a(J.c8(d.h(0,j),"starterBlockStyle")),"#bb5555")
o.id=U.l_(p.a(J.c8(d.h(0,j),"containerBlockStyle")),"#8899aa")
o.k1=U.l_(p.a(J.c8(d.h(0,j),"commandBlockStyle")),"#9977aa")}if(d.h(0,"blocks") instanceof P.v)U.qd(o,u.F.a(d.h(0,"blocks")))
if(d.h(0,i) instanceof P.v)o.dx=u.j.a(d.h(0,i))
if(d.h(0,h) instanceof P.v)U.qc(o,u.F.a(d.h(0,h)))
if(d.h(0,"program") instanceof P.P)U.qe(o,u.b.a(d.h(0,"program")))
s=o
$.ay.j(0,c,s)
s.fJ()}catch(l){p=H.L(l)
if(p instanceof P.db){r=p
throw H.b(P.dc("There was an error initializing the workspace with the given NetTango model JSON.",r))}else throw l}},
o1:function(a,b,c,d){H.r(a)
H.r(b)
H.r(c)
u.L.a(d)
if($.ay.h(0,b) instanceof U.bO)C.a.sk($.ay.h(0,b).ch,0)
U.mn(a,d,b,P.ak(C.i.c2(0,c,null)))},
o0:function(a,b,c){var t,s,r,q,p,o
H.r(a)
H.r(b)
u.L.a(c)
t=C.i.c2(0,b,null)
s=u.f
if(s.b(t))for(r=J.y(t.gI()),q=u.b,p=u.R;r.m();){o=H.r(r.gp())
if($.ay.h(0,o) instanceof U.bO)C.a.sk($.ay.h(0,o).ch,0)
t=C.i.c2(0,b,null)
if(!s.b(t)&&!p.b(t))H.D(P.b0("object must be a Map or Iterable"))
U.mn(a,c,o,q.a(P.bE(P.dh(t))))}},
nZ:function(a,b){var t
H.r(a)
u.L.a(b)
if($.ay.H(a)){t=$.ay
if(b!=null){t=t.h(0,a)
return t.y.dF(t,!0,new U.it(b))}else{t=t.h(0,a)
return t.y.dF(t,!0,null)}}return null},
o_:function(a,b,c){H.r(a)
H.q(b)
H.q(c)
if(!$.ay.H(a))throw H.b(P.bT("Unknown container ID: "+H.a(a)))
return U.cf($.ay.h(0,a).a1(b).e7(0,c))},
o3:function(a){var t
H.r(a)
if($.ay.H(a)){t=U.mC($.ay.h(0,a))
return H.r($.ee().h(0,"JSON").R("stringify",H.h([t],u.t)))}else return"{}"},
o2:function(){var t,s,r,q=u.z,p=P.bW(q,q)
for(q=$.ay,q=new H.ae(q,H.i(q).i("ae<1>")),q=q.gw(q),t=u.t;q.m();){s=q.d
r=U.mC($.ay.h(0,s))
p.j(0,s,$.ee().h(0,"JSON").R("stringify",H.h([r],t)))}return C.i.fM(C.i,null)},
mJ:function(){var t=$.ee(),s=u.N
t.j(0,"NetTango_blockPlacementOptions",P.ak(P.a5(["starter","starter","child","child","anywhere","anywhere"],s,s)))
t.j(0,"NetTango_selectQuoteOptions",P.ak(P.a5(["always","always-quote","never","never-quote","smart","smart-quote"],s,s)))
t.j(0,"NetTango_InitWorkspace",U.q5())
t.j(0,"NetTango_InitAllWorkspaces",U.q4())
t.j(0,"NetTango_ExportCode",U.q2())
t.j(0,"NetTango_FormatAttributeValue",U.q3())
t.j(0,"NetTango_Save",U.q7())
t.j(0,"NetTango_SaveAll",U.q6())},
qd:function(a,b){var t,s,r,q,p,o,n,m
for(t=H.i(b).i("N<k.E>"),s=new H.N(b,b.gk(b),t),r=u.b;s.m();){q=H.q(r.a(s.d).h(0,"id"))
if(q!=null&&q>a.cx){if(typeof q!=="number")return q.v()
a.cx=q+1}}for(t=new H.N(b,b.gk(b),t);t.m();){p=r.a(t.d)
o=U.mX(a,p)
if(a.db.bw(o.b)!=null){o.b=null
o=o.c0(0,!0)
p.j(0,"id",o.b)}n=U.qk(p.h(0,"limit"),-1)
s=a.db
m=s.bw(o.b)
if(m!=null)H.D(P.dc("Cannot add a block with the same ID as an existing block\n  Adding: ("+H.a(o.b)+": "+H.a(o.d)+")\n  Existing: ("+H.a(m.b)+": "+H.a(m.d)+")",null))
C.a.l(s.b,new U.aP(o,s.a,n))}},
mX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=null,h="clauses",g="children",f="properties",e=b.h(0,"action"),d=e==null?"":J.B(e),c=U.li(a,H.q(b.h(0,"id")),d,!0)
c.a.b=b
b.j(0,"id",c.b)
if(b.h(0,h) instanceof P.v){c.sdt(H.h([],u.e))
e=u.s
t=u.u
s=u.b
r=u.F
q=0
while(!0){p=H.k3(J.ac(b.h(0,h)))
if(typeof p!=="number")return H.a0(p)
if(!(q<p))break
p=s.a(J.c8(b.h(0,h),q))
o=p.h(0,"open")
n=o==null?i:J.B(o)
o=p.h(0,"close")
m=o==null?i:J.B(o)
o=new U.a1(H.h(["children","open","close"],e))
l=new U.aD(o,c,q,n,m,H.h([],t))
o.b=p
if(p.h(0,g) instanceof P.v)l.sc_(U.qa(a,r.a(p.h(0,g))))
C.a.l(c.ch,l);++q}}e=b.h(0,"type")
c.e=e==null?"":J.B(e)
e=b.h(0,"format")
c.f=e==null?i:J.B(e)
e=b.h(0,"note")
c.r=e==null?i:J.B(e)
e=b.h(0,"blockColor")
c.cx=e==null?i:J.B(e)
e=b.h(0,"textColor")
c.cy=e==null?i:J.B(e)
e=b.h(0,"borderColor")
c.db=e==null?i:J.B(e)
e=b.h(0,"font")
c.dx=e==null?i:J.B(e)
c.dy=U.l1(b.h(0,"required"),c.dy)
e=b.h(0,"placement")
t=c.fr
c.fr=e==null?t:J.B(e)
if(b.h(0,"params") instanceof P.v)for(e=J.y(u.R.a(b.h(0,"params"))),t=c.x,s=u.b;e.m();){k=U.mT(c,s.a(e.gp()))
t.j(0,k.b,k)}if(b.h(0,f) instanceof P.v){for(e=J.y(u.R.a(b.h(0,f))),t=c.y,s=u.b;e.m();){j=U.mT(c,s.a(e.gp()))
t.j(0,j.b,j)}e=b.h(0,"propertiesDisplay")
c.z=e==null?"shown":J.B(e)}return c},
qa:function(a,b){var t,s,r=H.h([],u.u)
for(t=new H.N(b,b.gk(b),H.i(b).i("N<k.E>")),s=u.b;t.m();)C.a.l(r,U.mX(a,s.a(t.d)))
return r},
mT:function(a,b){var t,s,r,q,p="values",o=H.q(b.h(0,"id")),n=b.h(0,"type")
switch(n==null?"num":J.B(n)){case"int":t=new U.de(new U.a1(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
t.y=1
t.x=U.l1(b.h(0,"random"),null)
t.y=U.bI(b.h(0,"step"),t.y)
break
case"num":t=U.lF(a,o,"num")
break
case"bool":t=U.lF(a,o,"bool")
break
case"range":t=new U.cs(new U.a1(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
t.x=U.l1(b.h(0,"random"),!1)
t.y=U.bI(b.h(0,"step"),t.y)
t.db=U.bI(b.h(0,"min"),t.db)
t.dx=U.bI(b.h(0,"max"),t.dx)
break
case"select":n=H.h([],u.eD)
t=new U.cv("smart-quote",n,new U.a1(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
s=b.h(0,"quoteValues")
t.x=s==null?null:J.B(s)
if(b.h(0,p) instanceof P.v&&J.nl(J.ac(b.h(0,p)),0))for(s=J.y(u.R.a(b.h(0,p)));s.m();){r=s.gp()
q=J.az(r)
C.a.l(n,new U.bh(H.r(q.h(r,"actual")),H.r(q.h(r,"display"))))}break
case"text":t=new U.cC(new U.a1(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
break
default:t=new U.cC(new U.a1(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
break}n=b.h(0,"name")
t.d=n==null?"":J.B(n)
n=b.h(0,"unit")
t.e=n==null?"":J.B(n)
n=b.h(0,"default")
t.aW(n==null?"":J.B(n))
t.a.b=b
return t},
qc:function(a,b){var t,s,r,q,p,o,n,m,l,k,j="type",i="arguments"
if(b==null||b.gk(b)===0)return
for(t=new H.N(b,b.gk(b),H.i(b).i("N<k.E>")),s=a.dy,r=u.s,q=u.b,p=u.R;t.m();){o=q.a(t.d)
n=H.r(o.h(0,"name"))
m=H.r(o.h(0,j))
l=H.h([],r)
k=new U.da(n,m,l)
if(n==null)H.D(P.kv("name"))
if(m==null)H.D(P.kv(j))
if(!C.a.F(H.h(["num","bool"],r),m))H.D(P.cT(m,j,"Expression definition type can only be 'num' or 'bool'."))
k.d=H.r(o.h(0,"format"))
if("arguments" in o.a&&o.h(0,i) instanceof P.v)for(n=J.y(p.a(o.h(0,i)));n.m();)C.a.l(l,H.r(n.gp()))
C.a.l(s,k)}},
qe:function(a,b){var t,s
if(!(b.h(0,"chains") instanceof P.v))return
for(t=J.y(u.R.a(b.h(0,"chains"))),s=u.b;t.m();)U.qb(a,s.a(t.gp()))},
qb:function(a,b){var t,s,r=new U.a1(H.h(["x","y","blocks"],u.s)),q=new U.aC(r,a,H.h([],u.u))
r.b=b
if(typeof b.h(0,"x")=="number"&&typeof b.h(0,"y")=="number"){q.d=J.c9(b.h(0,"x"))
q.e=J.c9(b.h(0,"y"))}C.a.l(a.ch,q)
if(!(b.h(0,"blocks") instanceof P.v))return
for(r=J.y(u.R.a(b.h(0,"blocks"))),t=u.b;r.m();){s=U.mU(a,t.a(r.gp()))
if(s!=null)C.a.l(q.a,s)}},
mU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g="children",f=a.db.bw(H.q(b.h(0,"id")))
if(f==null){P.ed("No prototype block found for id: "+H.a(b.h(0,"id")))
t=a.db.b
s=H.C(t)
P.ed(new H.T(t,s.i("e(1)").a(new U.ko()),s.i("T<1,e>")))
return null}r=f.c0(0,!1)
r.a.b=b
t=b.h(0,"propertiesDisplay")
r.z=t==null?"shown":J.B(t)
t=u.F
U.mV(r.x,t.a(b.h(0,"params")))
U.mV(r.y,t.a(b.h(0,"properties")))
if(b.h(0,"clauses") instanceof P.v){r.sdt(H.h([],u.e))
for(t=u.R,s=J.y(t.a(b.h(0,"clauses"))),q=u.b,p=u.s,o=u.u,n=0;s.m();){m=q.a(s.gp())
if(!(m.h(0,g) instanceof P.v))continue
l=m.h(0,"open")
k=l==null?null:J.B(l)
l=m.h(0,"close")
j=l==null?null:J.B(l)
l=new U.a1(H.h(["children","open","close"],p))
i=new U.aD(l,r,n,k,j,H.h([],o))
l.b=m
C.a.l(r.ch,i)
for(l=J.y(t.a(m.h(0,g)));l.m();){h=U.mU(a,q.a(l.gp()))
if(h!=null)C.a.l(i.a,h)}++n}}return r},
mV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i="value"
if(b==null)return
for(t=new H.N(b,b.gk(b),b.$ti.i("N<k.E>")),s=u.s,r=u.b,q=u.U;t.m();){p=r.a(t.d)
if(!("id" in p.a)||!a.H(p.h(0,"id")))continue
o=a.h(0,p.h(0,"id"))
o.a.b=p
if(p.h(0,i)==null)continue
if(C.a.F(H.h(["bool","num"],s),o.ga0(o))){if(!(o instanceof U.bU))throw H.b(P.bT("A non-expression attribute cannot have a type of 'num' or 'bool'."))
n=p.h(0,i)
m=o.c
l=o.f
if(n instanceof P.P){n=m.fx
m=r.a(p.h(0,i))
k=new U.br(n)
k.c=new U.ad(k,l,H.h([],q))
if(m!=null)n=!0
else n=!1
if(n)k.c=U.mW(k,l,m)
o.r=k}else{n=m.fx
m=J.B(p.h(0,i))
k=new U.br(n)
k.c=new U.ad(k,l,H.h([],q))
j=new U.ad(k,l,H.h([],q))
j.b=m
k.c=j
o.r=k}}else if(p.h(0,i) instanceof P.P){n=p.h(0,"defaultValue")
o.au(n==null?"":J.B(n))}else{n=p.h(0,i)
o.au(n==null?"":J.B(n))}}},
mW:function(a,b,c){var t,s="children",r=H.h([],u.U),q=new U.ad(a,b,r),p=c.h(0,"name")
q.b=p==null?"":J.B(p)
if(c.h(0,"format")!=null)q.d=H.r(c.h(0,"format"))
if(c.h(0,s) instanceof P.v)for(p=J.y(u.R.a(c.h(0,s))),t=u.b;p.m();)C.a.l(r,U.mW(a,b,t.a(p.gp())))
return q},
l_:function(a,b){var t,s,r="#ffffff"
if(a==null){t=new U.cX("#9977aa",r,r)
t.a=b
return t}t=new U.cX("#9977aa",r,r)
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
mC:function(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="blockStyles",a=u.N,a0=u.K,a1=P.ak(P.a5(["version",a2.b,"height",a2.fr,"width",a2.fy,"blocks",[],"program",P.a5(["chains",[]],a,u.j)],a,a0))
a2.a.aV(a1)
U.bn(a1,"chainOpen",a2.z,a)
U.bn(a1,"chainClose",a2.Q,a)
if(a2.go!=$.l4()||a2.id!=$.l3()||a2.k1!=$.l2()){t=u.z
a1.j(0,b,P.ak(P.bW(t,t)))
J.kr(a1.h(0,b),"starterBlockStyle",U.kW(a2.go))
J.kr(a1.h(0,b),"containerBlockStyle",U.kW(a2.id))
J.kr(a1.h(0,b),"commandBlockStyle",U.kW(a2.k1))}for(t=a2.db.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r]
p=q.e
if(p===-1)p=null
o=U.kV(q.a,p)
J.ef(a1.h(0,"blocks"),o)}t=a2.dx
if(t!=null&&J.lb(t))a1.j(0,"variables",P.aW([],u.z))
t=a2.dy
s=t.length
if(s!==0){s=u.z
n=P.aW([],s)
a1.j(0,"expressions",n)
for(p=t.length,m=n.$ti.c,l=u.b,k=u.gB,r=0;r<t.length;t.length===p||(0,H.A)(t),++r){j=t[r]
i=P.a5(["name",j.a,"type",j.b],a,a)
h=l.a(P.bE(P.dh(i)))
i=j.c
if(i.length>0){g=[]
C.a.L(g,C.a.G(i,P.km(),s))
h.j(0,"arguments",new P.v(g,k))}i=j.d
if(i!=null)h.j(0,"format",i)
n.R("push",[m.a(h)])}}f=J.c8(a1.h(0,"program"),"chains")
for(t=a2.ch,s=t.length,p=J.bb(f),m=u.b,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){e=t[r]
l=P.a5(["x",e.d,"y",e.e,"blocks",[]],a,a0)
d=m.a(P.bE(P.dh(l)))
e.c.aV(d)
for(l=e.a,k=l.length,c=0;c<l.length;l.length===k||(0,H.A)(l),++c){o=U.kV(l[c],null)
J.ef(d.h(0,"blocks"),o)}p.l(f,d)}return a1},
kW:function(a){var t=u.N
return P.ak(P.a5(["blockColor",a.a,"textColor",a.b,"borderColor",a.c,"fontWeight",a.d,"fontSize",a.e,"fontFace",a.f],t,t))},
kV:function(a,b){var t,s,r,q,p,o,n,m="push",l=P.ak(P.a5(["id",a.b,"action",a.d,"required",a.dy,"placement",a.fr],u.N,u.K))
a.a.aV(l)
t=u.S
U.bn(l,"instanceId",a.c,t)
U.aA(l,"type",a.e)
U.aA(l,"format",a.f)
U.bn(l,"limit",b,t)
U.aA(l,"note",a.r)
U.aA(l,"blockColor",a.cx)
U.aA(l,"textColor",a.cy)
U.aA(l,"borderColor",a.db)
U.aA(l,"font",a.dx)
if(a.ch.length!==0){s=P.aW([],u.z)
l.j(0,"clauses",s)
for(t=a.ch,r=t.length,q=s.$ti.c,p=0;p<t.length;t.length===r||(0,H.A)(t),++p)s.R(m,[q.a(U.pL(t[p]))])}t=a.x
if(t.a!==0){o=P.aW([],u.z)
l.j(0,"params",o)
for(t=t.gar(t),r=H.i(t),r=new H.a6(J.y(t.a),t.b,r.i("@<1>").q(r.Q[1]).i("a6<1,2>")),t=o.$ti.c;r.m();)o.R(m,[t.a(U.mA(r.a))])}t=a.y
if(t.a!==0){n=P.aW([],u.z)
l.j(0,"properties",n)
for(t=t.gar(t),r=H.i(t),r=new H.a6(J.y(t.a),t.b,r.i("@<1>").q(r.Q[1]).i("a6<1,2>")),t=n.$ti.c;r.m();)n.R(m,[t.a(U.mA(r.a))])
l.j(0,"propertiesDisplay",a.z)}return l},
pL:function(a){var t,s,r,q,p=u.N,o=P.ak(P.a5(["children",[]],p,u.j))
a.c.aV(o)
U.bn(o,"open",a.f,p)
U.bn(o,"close",a.r,p)
t=o.h(0,"children")
for(p=a.a,s=p.length,r=J.bb(t),q=0;q<p.length;p.length===s||(0,H.A)(p),++q)r.l(t,U.kV(p[q],null))
return o},
bn:function(a,b,c,d){if(c!=null)a.j(0,b,c)},
aA:function(a,b,c){if(c!=null&&c!=="")a.j(0,b,c)},
mA:function(a){var t,s,r,q,p,o,n,m,l="value",k="default",j=u.N,i=P.ak(P.a5(["id",a.b,"type",a.ga0(a)],j,u.K))
a.a.aV(i)
U.aA(i,"name",a.d)
U.aA(i,"unit",a.e)
switch(a.ga0(a)){case"text":U.aA(i,l,a.a2())
U.aA(i,k,a.as())
break
case"select":u.fs.a(a)
U.aA(i,"quoteValues",a.x)
U.aA(i,l,a.a2())
U.aA(i,k,a.as())
t=P.aW([],u.z)
i.j(0,"values",t)
for(s=a.y,r=s.length,q=u.b,p=t.$ti.c,o=0;o<s.length;s.length===r||(0,H.A)(s),++o){n=s[o]
m=P.a5(["actual",n.a,"display",n.b],j,j)
t.R("push",[p.a(q.a(P.bE(P.dh(m))))])}break
case"int":case"range":u.cU.a(a)
i.j(0,"step",a.y)
U.bn(i,"random",a.x,u.y)
j=u.di
U.bn(i,l,a.f,j)
U.bn(i,k,a.r,j)
if(a instanceof U.cs){i.j(0,"min",a.db)
i.j(0,"max",a.dx)}break
case"num":case"bool":u.gs.a(a)
U.aA(i,k,a.as())
j=a.r.c
if(j!=null&&j.b!=null)if(j.e.length===0)i.j(0,l,a.a2())
else{i.j(0,l,U.mB(j))
i.j(0,"expressionValue",a.a2())}break
default:throw H.b(P.bT("Unknown attribute type "+a.ga0(a)))}return i},
mB:function(a){var t,s,r,q="children",p=u.N,o=P.ak(P.a5(["name",a.b,"type",a.c],p,p))
U.bn(o,"format",a.d,p)
p=a.e
if(p.length!==0){o.j(0,q,P.aW([],u.z))
for(t=p.length,s=0;s<p.length;p.length===t||(0,H.A)(p),++s){r=p[s]
J.ef(o.h(0,q),U.mB(r))}}return o},
qk:function(a,b){var t,s
if(a==null)return b
else if(H.cM(a))return a
else if(typeof a=="string")try{t=P.pU(a)
return t}catch(s){if(u.g8.b(H.L(s)))return b
else throw s}return b},
bI:function(a,b){var t,s
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
oA:function(a){var t={},s=new H.a8(u.bT),r=new H.a8(u.aI)
t.a=0
U.kH(a,new U.j1(t,s,r),new U.j2(s,r))},
lZ:function(a,b){var t={}
t.a=a
U.m_(b,new U.j0(t))
return t.a},
oz:function(a,b){var t,s
for(t=new H.N(b,b.gk(b),H.i(b).i("N<k.E>")),s=u.b;t.m();){s.a(t.d).j(0,"id",a)
if(typeof a!=="number")return a.v();++a}return a},
oy:function(a,b,c){var t,s
if(!c.B("action"))return
t=H.r(c.h(0,"action"))
if(a.H(t)){s=a.h(0,t)
c.j(0,"id",s)
U.lZ(b.h(0,s),c)}},
oD:function(a){U.m_(a,U.q0())},
oB:function(a){var t="values"
if(!a.B(t)||!(a.h(0,t) instanceof P.v))return
a.j(0,t,P.aW(u.R.a(J.nw(a.h(0,t),new U.j3())),u.z))},
oC:function(a){var t,s,r
a.toString
t=a.$ti
s=t.i("w(k.E)").a(new U.j4())
r=a.gw(a)
t=new H.c4(r,s,t.i("c4<k.E>"))
s=u.b
for(;t.m();)U.oB(s.a(r.gp()))},
oG:function(a){var t,s,r="program"
U.kH(a,new U.j6(),U.q1())
if(!a.B(r)||!(a.h(0,r) instanceof P.P))return
t=u.b
s=t.a(a.h(0,r))
if(!s.B("chains")||!(s.h(0,"chains") instanceof P.v))return
U.oE(t.a(a.h(0,r)))},
oE:function(a){var t,s=u.F.a(a.h(0,"chains"))
s.toString
t=s.$ti
a.j(0,"chains",P.aW(new H.ag(s,t.i("w(k.E)").a(new U.j5()),t.i("ag<k.E>")),u.z))},
oF:function(a){if(typeof a.h(0,"x")=="number")a.j(0,"x",J.l9(a.h(0,"x"),10))
if(typeof a.h(0,"y")=="number")a.j(0,"y",J.l9(a.h(0,"y"),10))},
oH:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g="program",f="chains"
if(!a.B(g)||!(a.h(0,g) instanceof P.P))return
t=u.b
s=t.a(a.h(0,g))
if(!s.B(f)||!(s.h(0,f) instanceof P.v))return
r=P.aW([],u.z)
for(q=J.y(u.R.a(s.h(0,f))),p=r.$ti.c,o=u.N,n=u.K,m=u.F;q.m();){l=m.a(q.gp())
if(!l.gM(l)){k=C.e.bp(0)
if(0===k){k=0>=l.gk(l)
if(k)H.D(P.aa(0,0,l.gk(l),null,null))}j=H.i(l).c.a(l.cz(0,0))
k=J.az(j)
if(typeof k.h(j,"x")=="number"&&typeof k.h(j,"y")=="number"){i=J.c9(k.h(j,"x"))
h=J.c9(k.h(j,"y"))}else{i=0
h=0}}else{i=0
h=0}k=P.a5(["blocks",l,"x",i,"y",h],o,n)
r.R("push",[p.a(t.a(P.bE(P.dh(k))))])}s.j(0,f,r)},
oI:function(a){a.c3("x")
a.c3("y")},
oJ:function(a){var t="required",s="placement"
if(a.B(t)&&H.as(H.fX(a.h(0,t))))a.j(0,s,"starter")
else a.j(0,s,"child")},
oK:function(a){var t,s,r,q="children",p="clauses"
if(a.B(q)){t=a.h(0,q)
a.c3(q)
s=u.z
r=P.ak(P.bW(s,s))
r.j(0,q,t)
if(a.B(p))if(a.h(0,p) instanceof P.v)J.lc(a.h(0,p),0,r)
else{P.ed("Found a block with clauses that was not an array?  Block ID: "+H.a(a.h(0,"id"))+".  Replacing value.")
a.j(0,p,P.aW([],s))
J.ef(a.h(0,p),r)}else{a.j(0,p,P.aW([],s))
J.ef(a.h(0,p),r)}}else if(a.B(p)&&a.h(0,p) instanceof P.v){r=P.ak(P.a5(["children",[]],u.N,u.j))
J.lc(a.h(0,p),0,r)}},
kG:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j="blocks",i="program",h="chains",g="children"
if(!a.B(j)||!(a.h(0,j) instanceof P.v))return
for(t=u.R,s=J.y(t.a(a.h(0,j))),r=u.b;s.m();)b.$1(r.a(s.gp()))
if(!a.B(i)||!(a.h(0,i) instanceof P.P))return
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
if("children" in n.a&&n.h(0,j) instanceof P.v)for(o=J.y(t.a(n.h(0,j)));o.m();)c.$1(r.a(o.gp()))}}if(!a.B(i)||!(a.h(0,i) instanceof P.P))return
m=r.a(a.h(0,i))
if(!m.B(h)||!(m.h(0,h) instanceof P.v))return
for(t=J.y(t.a(m.h(0,h))),s=u.F;t.m();){l=s.a(t.gp())
for(p=new H.N(l,l.gk(l),H.i(l).i("N<k.E>"));p.m();)c.$1(r.a(p.d))}},
m_:function(a,b){var t="params",s="properties"
if(a.B(t)&&a.h(0,t) instanceof P.v)b.$1(u.F.a(a.h(0,t)))
if(a.B(s)&&a.h(0,s) instanceof P.v)b.$1(u.F.a(a.h(0,s)))},
b1:function b1(){},
h6:function h6(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
bU:function bU(a,b,c){var _=this
_.r=_.f=null
_.x=""
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
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
de:function de(a,b,c){var _=this
_.x=_.r=_.f=null
_.y=1
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
bY:function bY(){},
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
cs:function cs(a,b,c){var _=this
_.db=0
_.dx=10
_.x=_.r=_.f=null
_.y=1
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
iN:function iN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iO:function iO(a,b){this.a=a
this.b=b},
bh:function bh(a,b){this.a=a
this.b=b},
cv:function cv(a,b,c,d,e){var _=this
_.f=null
_.r=""
_.x=a
_.y=b
_.a=c
_.b=d
_.c=e
_.e=_.d=""},
iQ:function iQ(a){this.a=a},
iP:function iP(a){this.a=a},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cC:function cC(a,b,c){var _=this
_.r=_.f=""
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
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
cW:function cW(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cX:function cX(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=""},
an:function an(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=null
_.d=c
_.r=_.f=_.e=null
_.x=d
_.y=e
_.z="shown"
_.Q=0
_.ch=f
_.dx=_.db=_.cy=_.cx=null
_.dy=!1
_.fr=g
_.fx=h
_.go=_.fy=null
_.k1=_.id=!1
_.k4=_.k3=_.k2=null},
hf:function hf(a){this.a=a},
hi:function hi(a){this.a=a},
hj:function hj(){},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(a){this.a=a},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
aC:function aC(a,b,c){var _=this
_.c=a
_.e=_.d=0
_.f=b
_.x=_.r=null
_.y=!1
_.a=c
_.b=null},
hn:function hn(a){this.a=a},
ho:function ho(a){this.a=a},
aD:function aD(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.y=_.x=!1
_.a=f
_.b=null},
hq:function hq(a){this.a=a},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
eD:function eD(a,b,c,d){var _=this
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
d4:function d4(a,b){this.a=a
this.b=b},
ey:function ey(){var _=this
_.d=_.c=_.b=_.a=_.e=null},
da:function da(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ad:function ad(a,b,c){var _=this
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
br:function br(a){this.a=a
this.c=this.b=null},
a1:function a1(a){this.a=a
this.b=null},
en:function en(a,b){this.a=a
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
c0:function c0(){},
em:function em(){this.c=this.b=null},
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
aP:function aP(a,b,c){var _=this
_.a=a
_.d=b
_.e=c
_.y=_.x=_.r=_.f=null},
fc:function fc(a,b){this.a=null
this.d=a
this.e=b},
bO:function bO(a,b,c,d,e,f,g,h,i,j){var _=this
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
J.aj.prototype={
P:function(a,b){return a===b},
gA:function(a){return H.c_(a)},
n:function(a){return"Instance of '"+H.a(H.iM(a))+"'"},
bk:function(a,b){u.m.a(b)
throw H.b(P.lO(a,b.gdH(),b.gdP(),b.gdI()))}}
J.eG.prototype={
n:function(a){return String(a)},
gA:function(a){return a?519018:218159},
$iw:1}
J.dg.prototype={
P:function(a,b){return null==b},
n:function(a){return"null"},
gA:function(a){return 0},
bk:function(a,b){return this.ee(a,u.m.a(b))},
$iu:1}
J.bu.prototype={
gA:function(a){return 0},
n:function(a){return String(a)}}
J.f1.prototype={}
J.bx.prototype={}
J.b4.prototype={
n:function(a){var t=a[$.kq()]
if(t==null)return this.eh(a)
return"JavaScript function for "+H.a(J.B(t))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ib3:1}
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
if(!u.X.b(c))c=J.nD(c)
t=J.ac(c)
this.sk(a,a.length+t)
if(typeof b!=="number")return b.v()
s=b+t
this.U(a,s,a.length,a,b)
this.ea(a,b,s,c)},
L:function(a,b){var t
H.C(a).i("d<1>").a(b)
if(!!a.fixed$length)H.D(P.x("addAll"))
for(t=J.y(b);t.m();)a.push(t.gp())},
t:function(a,b){var t,s
H.C(a).i("~(1)").a(b)
t=a.length
for(s=0;s<t;++s){b.$1(a[s])
if(a.length!==t)throw H.b(P.aL(a))}},
G:function(a,b,c){var t=H.C(a)
return new H.T(a,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("T<1,2>"))},
S:function(a,b){return this.G(a,b,u.z)},
aY:function(a,b){return H.af(a,b,null,H.C(a).c)},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
gaD:function(a){if(a.length>0)return a[0]
throw H.b(H.eF())},
gdG:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.b(H.eF())},
U:function(a,b,c,d,e){var t,s,r,q,p=H.C(a)
p.i("d<1>").a(d)
if(!!a.immutable$list)H.D(P.x("setRange"))
P.lU(b,c,a.length)
t=c-b
if(t===0)return
P.aX(e,"skipCount")
if(u.j.b(d)){p.i("t<1>").a(d)
s=e
r=d}else{r=J.nB(d,e).ah(0,!1)
s=0}p=J.az(r)
if(s+t>p.gk(r))throw H.b(H.lH())
if(s<b)for(q=t-1;q>=0;--q)a[b+q]=p.h(r,s+q)
else for(q=0;q<t;++q)a[b+q]=p.h(r,s+q)},
ea:function(a,b,c,d){return this.U(a,b,c,d,0)},
dk:function(a,b){var t,s
H.C(a).i("w(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(H.as(b.$1(a[s])))return!0
if(a.length!==t)throw H.b(P.aL(a))}return!1},
cw:function(a,b){var t=H.C(a)
t.i("e(1,1)").a(b)
if(!!a.immutable$list)H.D(P.x("sort"))
H.oq(a,b,t.c)},
F:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bJ(a[t],b))return!0
return!1},
gM:function(a){return a.length===0},
gcg:function(a){return a.length!==0},
n:function(a){return P.is(a,"[","]")},
ah:function(a,b){var t=H.h(a.slice(0),H.C(a))
return t},
aq:function(a){return this.ah(a,!0)},
gw:function(a){return new J.aB(a,a.length,H.C(a).i("aB<1>"))},
gA:function(a){return H.c_(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.D(P.x("set length"))
if(b<0)throw H.b(P.aa(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.q(b)
if(!H.cM(b))throw H.b(H.bF(a,b))
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
J.iu.prototype={}
J.aB.prototype={
gp:function(){return this.d},
m:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.b(H.A(r))
t=s.c
if(t>=q){s.scE(null)
return!1}s.scE(r[t]);++s.c
return!0},
scE:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
J.bt.prototype={
dv:function(a,b){var t
H.k3(b)
if(typeof b!="number")throw H.b(H.ba(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbh(b)
if(this.gbh(a)===t)return 0
if(this.gbh(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbh:function(a){return a===0?1/a<0:a<0},
bp:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.b(P.x(""+a+".toInt()"))},
fv:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.b(P.x(""+a+".ceil()"))},
c6:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.b(P.x(""+a+".floor()"))},
D:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(P.x(""+a+".round()"))},
hh:function(a,b){var t
if(b>20)throw H.b(P.aa(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gbh(a))return"-"+t
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
v:function(a,b){if(typeof b!="number")throw H.b(H.ba(b))
return a+b},
at:function(a,b){return a*b},
aA:function(a,b){return(a|0)===a?a/b|0:this.fl(a,b)},
fl:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.b(P.x("Result of truncating division is "+H.a(t)+": "+H.a(a)+" ~/ "+b))},
bW:function(a,b){var t
if(a>0)t=this.fh(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
fh:function(a,b){return b>31?0:a>>>b},
J:function(a,b){if(typeof b!="number")throw H.b(H.ba(b))
return a>b},
$iai:1,
$iY:1}
J.df.prototype={$ie:1}
J.eH.prototype={}
J.bf.prototype={
du:function(a,b){if(b<0)throw H.b(H.bF(a,b))
if(b>=a.length)H.D(H.bF(a,b))
return a.charCodeAt(b)},
b1:function(a,b){if(b>=a.length)throw H.b(H.bF(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.b(P.cT(b,null,null))
return a+b},
fO:function(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.ed(a,s-t)},
dT:function(a,b,c){P.kE(0,0,a.length,"startIndex")
return H.qh(a,b,c,0)},
ec:function(a,b){var t=b.length
if(t>a.length)return!1
return b===a.substring(0,t)},
ab:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.ct(b,null))
if(b>c)throw H.b(P.ct(b,null))
if(c>a.length)throw H.b(P.ct(c,null))
return a.substring(b,c)},
ed:function(a,b){return this.ab(a,b,null)},
hg:function(a){return a.toLowerCase()},
aF:function(a){var t,s,r,q=a.trim(),p=q.length
if(p===0)return q
if(this.b1(q,0)===133){t=J.kB(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.du(q,s)===133?J.o4(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
dZ:function(a){var t,s
if(typeof a.trimLeft!="undefined"){t=a.trimLeft()
if(t.length===0)return t
s=this.b1(t,0)===133?J.kB(t,1):0}else{s=J.kB(a,0)
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
fE:function(a,b,c){var t=a.length
if(c>t)throw H.b(P.aa(c,0,t,null,null))
return H.qf(a,b,c)},
dv:function(a,b){var t
H.r(b)
if(typeof b!="string")throw H.b(H.ba(b))
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
H.a9.prototype={
gw:function(a){var t=this
return new H.N(t,t.gk(t),H.i(t).i("N<a9.E>"))},
gM:function(a){return this.gk(this)===0},
bs:function(a,b){return this.eg(0,H.i(this).i("w(a9.E)").a(b))},
G:function(a,b,c){var t=H.i(this)
return new H.T(this,t.q(c).i("1(a9.E)").a(b),t.i("@<a9.E>").q(c).i("T<1,2>"))},
S:function(a,b){return this.G(a,b,u.z)},
cl:function(a,b){var t,s,r,q=this
H.i(q).i("a9.E(a9.E,a9.E)").a(b)
t=q.gk(q)
if(t===0)throw H.b(H.eF())
s=q.C(0,0)
for(r=1;r<t;++r){s=b.$2(s,q.C(0,r))
if(t!==q.gk(q))throw H.b(P.aL(q))}return s}}
H.dy.prototype={
geH:function(){var t=J.ac(this.a),s=this.c
if(s==null||s>t)return t
return s},
gfi:function(){var t=J.ac(this.a),s=this.b
if(typeof s!=="number")return s.J()
if(s>t)return t
return s},
gk:function(a){var t,s=J.ac(this.a),r=this.b
if(typeof r!=="number")return r.hm()
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
if(typeof t!=="number")return t.E()
return t-r},
C:function(a,b){var t,s=this,r=s.gfi()
if(typeof r!=="number")return r.v()
t=r+b
if(b>=0){r=s.geH()
if(typeof r!=="number")return H.a0(r)
r=t>=r}else r=!0
if(r)throw H.b(P.be(b,s,"index",null,null))
return J.aU(s.a,t)},
aY:function(a,b){var t,s,r=this
P.aX(b,"count")
t=r.b
if(typeof t!=="number")return t.v()
s=t+b
t=r.c
if(t!=null&&s>=t)return new H.bS(r.$ti.i("bS<1>"))
return H.af(r.a,s,t,r.$ti.c)},
hf:function(a,b){var t,s,r,q=this
P.aX(b,"count")
t=q.c
s=q.b
if(t==null){if(typeof s!=="number")return s.v()
return H.af(q.a,s,s+b,q.$ti.c)}else{if(typeof s!=="number")return s.v()
r=s+b
if(t<r)return q
return H.af(q.a,s,r,q.$ti.c)}},
ah:function(a,b){var t,s,r,q,p,o=this,n=o.b,m=o.a,l=J.az(m),k=l.gk(m),j=o.c
if(j!=null&&j<k)k=j
if(typeof k!=="number")return k.E()
if(typeof n!=="number")return H.a0(n)
t=k-n
if(t<0)t=0
s=o.$ti.i("G<1>")
if(b){r=H.h([],s)
C.a.sk(r,t)}else{q=new Array(t)
q.fixed$length=Array
r=H.h(q,s)}for(p=0;p<t;++p){C.a.j(r,p,l.C(m,n+p))
if(l.gk(m)<k)throw H.b(P.aL(o))}return r},
aq:function(a){return this.ah(a,!0)}}
H.N.prototype={
gp:function(){return this.d},
m:function(){var t,s=this,r=s.a,q=J.az(r),p=q.gk(r)
if(s.b!==p)throw H.b(P.aL(r))
t=s.c
if(t>=p){s.saJ(null)
return!1}s.saJ(q.C(r,t));++s.c
return!0},
saJ:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
H.aG.prototype={
gw:function(a){var t=H.i(this)
return new H.a6(J.y(this.a),this.b,t.i("@<1>").q(t.Q[1]).i("a6<1,2>"))},
gk:function(a){return J.ac(this.a)},
C:function(a,b){return this.b.$1(J.aU(this.a,b))}}
H.aV.prototype={$in:1}
H.a6.prototype={
m:function(){var t=this,s=t.b
if(s.m()){t.saJ(t.c.$1(s.gp()))
return!0}t.saJ(null)
return!1},
gp:function(){return this.a},
saJ:function(a){this.a=this.$ti.Q[1].a(a)}}
H.T.prototype={
gk:function(a){return J.ac(this.a)},
C:function(a,b){return this.b.$1(J.aU(this.a,b))}}
H.ag.prototype={
gw:function(a){return new H.c4(J.y(this.a),this.b,this.$ti.i("c4<1>"))},
G:function(a,b,c){var t=this.$ti
return new H.aG(this,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("aG<1,2>"))},
S:function(a,b){return this.G(a,b,u.z)}}
H.c4.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(H.as(s.$1(t.gp())))return!0
return!1},
gp:function(){return this.a.gp()}}
H.c3.prototype={
gw:function(a){return new H.dA(J.y(this.a),this.b,H.i(this).i("dA<1>"))}}
H.d7.prototype={
gk:function(a){var t=J.ac(this.a),s=this.b
if(t>s)return s
return t},
$in:1}
H.dA.prototype={
m:function(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gp:function(){if(this.b<0)return null
return this.a.gp()}}
H.c1.prototype={
gw:function(a){return new H.dw(J.y(this.a),this.b,H.i(this).i("dw<1>"))}}
H.d6.prototype={
gk:function(a){var t=J.ac(this.a)-this.b
if(t>=0)return t
return 0},
$in:1}
H.dw.prototype={
m:function(){var t,s
for(t=this.a,s=0;s<this.b;++s)t.m()
this.b=0
return t.m()},
gp:function(){return this.a.gp()}}
H.bS.prototype={
gw:function(a){return C.x},
gk:function(a){return 0},
C:function(a,b){throw H.b(P.aa(b,0,0,"index",null))},
G:function(a,b,c){this.$ti.q(c).i("1(2)").a(b)
return new H.bS(c.i("bS<0>"))},
S:function(a,b){return this.G(a,b,u.z)},
ah:function(a,b){var t=new Array(0)
t.fixed$length=Array
t=H.h(t,this.$ti.i("G<1>"))
return t}}
H.d9.prototype={
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
t=536870911&664597*J.ab(this.a)
this._hashCode=t
return t},
n:function(a){return'Symbol("'+H.a(this.a)+'")'},
P:function(a,b){if(b==null)return!1
return b instanceof H.cz&&this.a==b.a},
$iaZ:1}
H.d0.prototype={}
H.d_.prototype={
gM:function(a){return this.gk(this)===0},
n:function(a){return P.iz(this)},
j:function(a,b,c){var t=H.i(this)
t.c.a(b)
t.Q[1].a(c)
return H.nO()},
aE:function(a,b,c,d){var t=P.bW(c,d)
this.t(0,new H.hH(this,H.i(this).q(c).q(d).i("cn<1,2>(3,4)").a(b),t))
return t},
S:function(a,b){return this.aE(a,b,u.z,u.z)},
$iao:1}
H.hH.prototype={
$2:function(a,b){var t=H.i(this.a),s=this.b.$2(t.c.a(a),t.Q[1].a(b))
this.c.j(0,C.q.gfX(s),s.ghi(s))},
$S:function(){return H.i(this.a).i("u(1,2)")}}
H.d1.prototype={
gk:function(a){return this.a},
H:function(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.H(b))return null
return this.cT(b)},
cT:function(a){return this.b[H.r(a)]},
t:function(a,b){var t,s,r,q,p=H.i(this)
p.i("~(1,2)").a(b)
t=this.c
for(s=t.length,p=p.Q[1],r=0;r<s;++r){q=t[r]
b.$2(q,p.a(this.cT(q)))}},
gI:function(){return new H.dC(this,H.i(this).i("dC<1>"))}}
H.dC.prototype={
gw:function(a){var t=this.a.c
return new J.aB(t,t.length,H.C(t).i("aB<1>"))},
gk:function(a){return this.a.c.length}}
H.eI.prototype={
gdH:function(){var t=this.a
return t},
gdP:function(){var t,s,r,q,p=this
if(p.c===1)return C.r
t=p.d
s=t.length-p.e.length-p.f
if(s===0)return C.r
r=[]
for(q=0;q<s;++q){if(q>=t.length)return H.o(t,q)
r.push(t[q])}r.fixed$length=Array
r.immutable$list=Array
return r},
gdI:function(){var t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.u
t=l.e
s=t.length
r=l.d
q=r.length-s-l.f
if(s===0)return C.u
p=new H.a8(u.eo)
for(o=0;o<s;++o){if(o>=t.length)return H.o(t,o)
n=t[o]
m=q+o
if(m<0||m>=r.length)return H.o(r,m)
p.j(0,new H.cz(n),r[m])}return new H.d0(p,u.gF)},
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
H.kp.prototype={
$1:function(a){if(u.bU.b(a))if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.dZ.prototype={
n:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iar:1}
H.bN.prototype={
n:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.n1(s==null?"unknown":s)+"'"},
$ib3:1,
ghl:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fb.prototype={}
H.f4.prototype={
n:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.n1(t)+"'"}}
H.cd.prototype={
P:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.cd))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gA:function(a){var t,s=this.c
if(s==null)t=H.c_(this.a)
else t=typeof s!=="object"?J.ab(s):H.c_(s)
return(t^H.c_(this.b))>>>0},
n:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.a(H.iM(t))+"'")}}
H.f2.prototype={
n:function(a){return"RuntimeError: "+H.a(this.a)}}
H.fh.prototype={
n:function(a){return"Assertion failed: "+P.bq(this.a)}}
H.a8.prototype={
gk:function(a){return this.a},
gM:function(a){return this.a===0},
gI:function(){return new H.ae(this,H.i(this).i("ae<1>"))},
gar:function(a){var t=H.i(this)
return H.lN(new H.ae(this,t.i("ae<1>")),new H.iv(this),t.c,t.Q[1])},
H:function(a){var t,s,r=this
if(typeof a=="string"){t=r.b
if(t==null)return!1
return r.cP(t,a)}else if(typeof a=="number"&&(a&0x3ffffff)===a){s=r.c
if(s==null)return!1
return r.cP(s,a)}else return r.fS(a)},
fS:function(a){var t=this.d
if(t==null)return!1
return this.bg(this.b3(t,J.ab(a)&0x3ffffff),a)>=0},
h:function(a,b){var t,s,r,q,p=this,o=null
if(typeof b=="string"){t=p.b
if(t==null)return o
s=p.b4(t,b)
r=s==null?o:s.b
return r}else if(typeof b=="number"&&(b&0x3ffffff)===b){q=p.c
if(q==null)return o
s=p.b4(q,b)
r=s==null?o:s.b
return r}else return p.fT(b)},
fT:function(a){var t,s,r=this.d
if(r==null)return null
t=this.b3(r,J.ab(a)&0x3ffffff)
s=this.bg(t,a)
if(s<0)return null
return t[s].b},
j:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.i(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.cG(t==null?n.b=n.bQ():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.cG(s==null?n.c=n.bQ():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.bQ()
q=J.ab(b)&0x3ffffff
p=n.b3(r,q)
if(p==null)n.bV(r,q,[n.bR(b,c)])
else{o=n.bg(p,b)
if(o>=0)p[o].b=c
else p.push(n.bR(b,c))}}},
a9:function(a,b){var t=this.fU(b)
return t},
fU:function(a){var t,s,r,q,p=this,o=p.d
if(o==null)return null
t=J.ab(a)&0x3ffffff
s=p.b3(o,t)
r=p.bg(s,a)
if(r<0)return null
q=s.splice(r,1)[0]
p.es(q)
if(s.length===0)p.cS(o,t)
return q.b},
bd:function(a){var t=this
if(t.a>0){t.b=t.c=t.d=t.e=t.f=null
t.a=0
t.bP()}},
t:function(a,b){var t,s,r=this
H.i(r).i("~(1,2)").a(b)
t=r.e
s=r.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==r.r)throw H.b(P.aL(r))
t=t.c}},
cG:function(a,b,c){var t,s=this,r=H.i(s)
r.c.a(b)
r.Q[1].a(c)
t=s.b4(a,b)
if(t==null)s.bV(a,b,s.bR(b,c))
else t.b=c},
bP:function(){this.r=this.r+1&67108863},
bR:function(a,b){var t,s=this,r=H.i(s),q=new H.iy(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{t=s.f
q.d=t
s.f=t.c=q}++s.a
s.bP()
return q},
es:function(a){var t=this,s=a.d,r=a.c
if(s==null)t.e=r
else s.c=r
if(r==null)t.f=s
else r.d=s;--t.a
t.bP()},
bg:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bJ(a[s].a,b))return s
return-1},
n:function(a){return P.iz(this)},
b4:function(a,b){return a[b]},
b3:function(a,b){return a[b]},
bV:function(a,b,c){a[b]=c},
cS:function(a,b){delete a[b]},
cP:function(a,b){return this.b4(a,b)!=null},
bQ:function(){var t="<non-identifier-key>",s=Object.create(null)
this.bV(s,t,s)
this.cS(s,t)
return s},
$ilL:1}
H.iv.prototype={
$1:function(a){var t=this.a
return t.h(0,H.i(t).c.a(a))},
$S:function(){return H.i(this.a).i("2(1)")}}
H.iy.prototype={}
H.ae.prototype={
gk:function(a){return this.a.a},
gM:function(a){return this.a.a===0},
gw:function(a){var t=this.a,s=new H.dk(t,t.r,this.$ti.i("dk<1>"))
s.c=t.e
return s}}
H.dk.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.aL(s))
else{s=t.c
if(s==null){t.scF(null)
return!1}else{t.scF(s.a)
t.c=t.c.c
return!0}}},
scF:function(a){this.d=this.$ti.c.a(a)},
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
H.eJ.prototype={
n:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$if0:1}
H.f7.prototype={
h:function(a,b){H.q(b)
if(b!==0)H.D(P.ct(b,null))
return this.c},
$idp:1}
H.jS.prototype={
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
H.bX.prototype={
f3:function(a,b,c,d){var t=P.aa(b,0,c,d,null)
throw H.b(t)},
cJ:function(a,b,c,d){if(b>>>0!==b||b>c)this.f3(a,b,c,d)},
$ib_:1}
H.au.prototype={
gk:function(a){return a.length},
de:function(a,b,c,d,e){var t,s,r=a.length
this.cJ(a,b,r,"start")
this.cJ(a,c,r,"end")
if(b>c)throw H.b(P.aa(b,0,c,null,null))
t=c-b
s=d.length
if(s-e<t)throw H.b(P.c2("Not enough elements"))
if(e!==0||s!==t)d=d.subarray(e,e+t)
a.set(d,b)},
$iZ:1}
H.bv.prototype={
h:function(a,b){H.q(b)
H.bm(b,a,a.length)
return a[b]},
j:function(a,b,c){H.q(b)
H.pc(c)
H.bm(b,a,a.length)
a[b]=c},
U:function(a,b,c,d,e){u.bM.a(d)
if(u.d4.b(d)){this.de(a,b,c,d,e)
return}this.cB(a,b,c,d,e)},
$in:1,
$id:1,
$it:1}
H.aH.prototype={
j:function(a,b,c){H.q(b)
H.q(c)
H.bm(b,a,a.length)
a[b]=c},
U:function(a,b,c,d,e){u.gS.a(d)
if(u.bd.b(d)){this.de(a,b,c,d,e)
return}this.cB(a,b,c,d,e)},
$in:1,
$id:1,
$it:1}
H.eR.prototype={
h:function(a,b){H.q(b)
H.bm(b,a,a.length)
return a[b]}}
H.eS.prototype={
h:function(a,b){H.q(b)
H.bm(b,a,a.length)
return a[b]}}
H.eT.prototype={
h:function(a,b){H.q(b)
H.bm(b,a,a.length)
return a[b]}}
H.eU.prototype={
h:function(a,b){H.q(b)
H.bm(b,a,a.length)
return a[b]}}
H.eV.prototype={
h:function(a,b){H.q(b)
H.bm(b,a,a.length)
return a[b]}}
H.dr.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
H.bm(b,a,a.length)
return a[b]}}
H.eW.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
H.bm(b,a,a.length)
return a[b]}}
H.dR.prototype={}
H.dS.prototype={}
H.dT.prototype={}
H.dU.prototype={}
H.aO.prototype={
i:function(a){return H.fR(v.typeUniverse,this,a)},
q:function(a){return H.pa(v.typeUniverse,this,a)}}
H.fv.prototype={}
H.ft.prototype={
n:function(a){return this.a}}
H.e3.prototype={}
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
er:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cR(new P.jX(this,b),0),a)
else throw H.b(P.x("`setTimeout()` not found."))}}
P.jX.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.ah.prototype={}
P.b8.prototype={
ad:function(){},
ae:function(){},
saO:function(a){this.dy=this.$ti.a(a)},
sb8:function(a){this.fr=this.$ti.a(a)}}
P.bz.prototype={
gb5:function(){return this.c<4},
eI:function(){var t=this.r
if(t!=null)return t
return this.r=new P.a4($.H,u._)},
da:function(a){var t,s
H.i(this).i("b8<1>").a(a)
t=a.fr
s=a.dy
if(t==null)this.scU(s)
else t.saO(s)
if(s==null)this.sd_(t)
else s.sb8(t)
a.sb8(a)
a.saO(a)},
bX:function(a,b,c,d){var t,s,r,q,p,o=this,n=H.i(o)
n.i("~(1)").a(a)
u.M.a(c)
if((o.c&4)!==0){if(c==null)c=P.my()
n=new P.cG($.H,c,n.i("cG<1>"))
n.dc()
return n}t=$.H
s=d?1:0
r=n.i("b8<1>")
q=new P.b8(o,t,s,r)
q.cD(a,b,c,d,n.c)
q.sb8(q)
q.saO(q)
r.a(q)
q.dx=o.c&1
p=o.e
o.sd_(q)
q.saO(null)
q.sb8(p)
if(p==null)o.scU(q)
else p.saO(q)
if(o.d==o.e)P.mu(o.a)
return q},
f7:function(a){var t=this,s=H.i(t)
a=s.i("b8<1>").a(s.i("a3<1>").a(a))
if(a.dy===a)return null
s=a.dx
if((s&2)!==0)a.dx=s|4
else{t.da(a)
if((t.c&2)===0&&t.d==null)t.bF()}return null},
b0:function(){if((this.c&4)!==0)return new P.b5("Cannot add new events after calling close")
return new P.b5("Cannot add new events while doing an addStream")},
l:function(a,b){var t=this
H.i(t).c.a(b)
if(!t.gb5())throw H.b(t.b0())
t.bb(b)},
c1:function(a){var t,s=this
if((s.c&4)!==0)return s.r
if(!s.gb5())throw H.b(s.b0())
s.c|=4
t=s.eI()
s.az()
return t},
cV:function(a){var t,s,r,q,p=this
H.i(p).i("~(O<1>)").a(a)
t=p.c
if((t&2)!==0)throw H.b(P.c2("Cannot fire new event. Controller is already firing an event"))
s=p.d
if(s==null)return
r=t&1
p.c=t^3
for(;s!=null;){t=s.dx
if((t&1)===r){s.dx=t|2
a.$1(s)
t=s.dx^=1
q=s.dy
if((t&4)!==0)p.da(s)
s.dx&=4294967293
s=q}else s=s.dy}p.c&=4294967293
if(p.d==null)p.bF()},
bF:function(){var t=this
if((t.c&4)!==0&&t.r.a===0)t.r.cH(null)
P.mu(t.b)},
scU:function(a){this.d=H.i(this).i("b8<1>").a(a)},
sd_:function(a){this.e=H.i(this).i("b8<1>").a(a)},
$if5:1,
$imb:1,
$ibk:1,
$ibj:1}
P.e1.prototype={
gb5:function(){return P.bz.prototype.gb5.call(this)&&(this.c&2)===0},
b0:function(){if((this.c&2)!==0)return new P.b5("Cannot fire new event. Controller is already firing an event")
return this.ej()},
bb:function(a){var t,s=this
s.$ti.c.a(a)
t=s.d
if(t==null)return
if(t===s.e){s.c|=2
t.aK(a)
s.c&=4294967293
if(s.d==null)s.bF()
return}s.cV(new P.jT(s,a))},
az:function(){var t=this
if(t.d!=null)t.cV(new P.jU(t))
else t.r.cH(null)}}
P.jT.prototype={
$1:function(a){this.a.$ti.i("O<1>").a(a).aK(this.b)},
$S:function(){return this.a.$ti.i("u(O<1>)")}}
P.jU.prototype={
$1:function(a){this.a.$ti.i("O<1>").a(a).cK()},
$S:function(){return this.a.$ti.i("u(O<1>)")}}
P.aE.prototype={}
P.iq.prototype={
$0:function(){var t,s,r,q,p
try{this.a.b2(this.b.$0())}catch(r){t=H.L(r)
s=H.aT(r)
q=t
p=s
if(p==null)p=P.lh(q)
this.a.aM(q,p)}},
$S:1}
P.fl.prototype={}
P.e2.prototype={}
P.c5.prototype={
fZ:function(a){if((this.c&15)!==6)return!0
return this.b.b.cp(u.bN.a(this.d),a.a,u.y,u.K)},
fQ:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.ag.b(t))return q.a(p.hd(t,a.a,a.b,s,r,u.l))
else return q.a(p.cp(u.bI.a(t),a.a,s,r))}}
P.a4.prototype={
dY:function(a,b,c){var t,s,r,q=this.$ti
q.q(c).i("1/(2)").a(a)
t=$.H
if(t!==C.f){c.i("@<0/>").q(q.c).i("1(2)").a(a)
if(b!=null)b=P.pw(b,t)}s=new P.a4($.H,c.i("a4<0>"))
r=b==null?1:3
this.bD(new P.c5(s,r,a,b,q.i("@<1>").q(c).i("c5<1,2>")))
return s},
dX:function(a,b){return this.dY(a,null,b)},
e3:function(a){var t,s
u.fO.a(a)
t=this.$ti
s=new P.a4($.H,t)
this.bD(new P.c5(s,8,a,null,t.i("@<1>").q(t.c).i("c5<1,2>")))
return s},
fg:function(a){this.$ti.c.a(a)
this.a=4
this.c=a},
bD:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.x.a(s.c)
s.c=a}else{if(r===2){t=u._.a(s.c)
r=t.a
if(r<4){t.bD(a)
return}s.a=r
s.c=t.c}P.cP(null,null,s.b,u.M.a(new P.jl(s,a)))}},
d7:function(a){var t,s,r,q,p,o=this,n={}
n.a=a
if(a==null)return
t=o.a
if(t<=1){s=u.x.a(o.c)
r=o.c=a
if(s!=null){for(;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=u._.a(o.c)
t=p.a
if(t<4){p.d7(a)
return}o.a=t
o.c=p.c}n.a=o.ba(a)
P.cP(null,null,o.b,u.M.a(new P.js(n,o)))}},
b9:function(){var t=u.x.a(this.c)
this.c=null
return this.ba(t)},
ba:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
b2:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("aE<1>").b(a))if(r.b(a))P.jn(a,s)
else P.m4(a,s)
else{t=s.b9()
r.c.a(a)
s.a=4
s.c=a
P.cJ(s,t)}},
aM:function(a,b){var t,s,r=this
u.l.a(b)
t=r.b9()
s=P.h4(a,b)
r.a=8
r.c=s
P.cJ(r,t)},
eD:function(a){return this.aM(a,null)},
cH:function(a){var t=this,s=t.$ti
s.i("1/").a(a)
if(s.i("aE<1>").b(a)){t.ex(a)
return}t.a=1
P.cP(null,null,t.b,u.M.a(new P.jm(t,a)))},
ex:function(a){var t=this,s=t.$ti
s.i("aE<1>").a(a)
if(s.b(a)){if(a.ghn()){t.a=1
P.cP(null,null,t.b,u.M.a(new P.jr(t,a)))}else P.jn(a,t)
return}P.m4(a,t)},
$iaE:1}
P.jl.prototype={
$0:function(){P.cJ(this.a,this.b)},
$S:1}
P.js.prototype={
$0:function(){P.cJ(this.b,this.a.a)},
$S:1}
P.jo.prototype={
$1:function(a){var t=this.a
t.a=0
t.b2(a)},
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
$0:function(){var t=this.a,s=t.$ti.c.a(this.b),r=t.b9()
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
m=r.b.b.dV(u.fO.a(r.d),u.z)}catch(q){t=H.L(q)
s=H.aT(q)
if(n.d){r=u.n.a(n.a.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.b
if(r)p.b=u.n.a(n.a.a.c)
else p.b=P.h4(t,s)
p.a=!0
return}if(u.b9.b(m)){if(m instanceof P.a4&&m.a>=4){if(m.a===8){r=n.b
r.b=u.n.a(m.c)
r.a=!0}return}o=n.a.a
r=n.b
r.b=m.dX(new P.jw(o),u.z)
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
m.a.b=r.b.b.cp(q.i("2/(1)").a(r.d),o,q.i("2/"),p)}catch(n){t=H.L(n)
s=H.aT(n)
r=m.a
r.b=P.h4(t,s)
r.a=!0}},
$S:0}
P.jt.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.c
if(H.as(q.fZ(t))&&q.e!=null){p=l.b
p.b=q.fQ(t)
p.a=!1}}catch(o){s=H.L(o)
r=H.aT(o)
q=u.n.a(l.a.a.c)
p=q.a
n=s
m=l.b
if(p==null?n==null:p===n)m.b=q
else m.b=P.h4(s,r)
m.a=!0}},
$S:0}
P.fi.prototype={}
P.U.prototype={
S:function(a,b){var t=H.i(this)
return new P.dP(t.i("@(U.T)").a(b),this,t.i("dP<U.T,@>"))},
gk:function(a){var t={},s=new P.a4($.H,u.fJ)
t.a=0
this.X(new P.iS(t,this),!0,new P.iT(t,s),s.geC())
return s}}
P.iS.prototype={
$1:function(a){H.i(this.b).i("U.T").a(a);++this.a.a},
$S:function(){return H.i(this.b).i("u(U.T)")}}
P.iT.prototype={
$0:function(){this.b.b2(this.a.a)},
$C:"$0",
$R:0,
$S:1}
P.a3.prototype={}
P.f6.prototype={}
P.cE.prototype={
gA:function(a){return(H.c_(this.a)^892482866)>>>0},
P:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cE&&b.a===this.a}}
P.cF.prototype={
bS:function(){return this.x.f7(this)},
ad:function(){H.i(this.x).i("a3<1>").a(this)},
ae:function(){H.i(this.x).i("a3<1>").a(this)}}
P.O.prototype={
cD:function(a,b,c,d,e){var t,s=this,r=H.i(s)
r.i("~(O.T)").a(a)
s.sew(u.gu.q(r.i("O.T")).i("1(2)").a(a))
t=b==null?P.pH():b
if(u.da.b(t))s.b=s.d.dQ(t,u.z,u.K,u.l)
else if(u.d5.b(t))s.b=u.bI.a(t)
else H.D(P.b0("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
r=u.M
r.a(c)
s.sf5(r.a(c==null?P.my():c))},
cj:function(a){var t,s,r=this,q=r.e
if((q&8)!==0)return
t=(q+128|4)>>>0
r.e=t
if(q<128&&r.r!=null){s=r.r
if(s.a===1)s.a=3}if((q&4)===0&&(t&32)===0)r.cZ(r.gb6())},
cn:function(){var t=this,s=t.e
if((s&8)!==0)return
if(s>=128){s=t.e=s-128
if(s<128)if((s&64)!==0&&t.r.c!=null)t.r.by(t)
else{s=(s&4294967291)>>>0
t.e=s
if((s&32)===0)t.cZ(t.gb7())}}},
Y:function(){var t=this,s=(t.e&4294967279)>>>0
t.e=s
if((s&8)===0)t.bG()
s=t.f
return s==null?$.h_():s},
bG:function(){var t,s=this,r=s.e=(s.e|8)>>>0
if((r&64)!==0){t=s.r
if(t.a===1)t.a=3}if((r&32)===0)s.sbT(null)
s.f=s.bS()},
aK:function(a){var t,s=this,r=H.i(s)
r.i("O.T").a(a)
t=s.e
if((t&8)!==0)return
if(t<32)s.bb(a)
else s.bE(new P.dD(a,r.i("dD<O.T>")))},
b_:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dd(a,b)
else this.bE(new P.fq(a,b))},
cK:function(){var t=this,s=t.e
if((s&8)!==0)return
s=(s|2)>>>0
t.e=s
if(s<32)t.az()
else t.bE(C.F)},
ad:function(){},
ae:function(){},
bS:function(){return null},
bE:function(a){var t=this,s=H.i(t).i("e_<O.T>"),r=s.a(t.r)
if(r==null){r=new P.e_(s)
t.sbT(r)}r.l(0,a)
s=t.e
if((s&64)===0){s=(s|64)>>>0
t.e=s
if(s<128)t.r.by(t)}},
bb:function(a){var t,s=this,r=H.i(s).i("O.T")
r.a(a)
t=s.e
s.e=(t|32)>>>0
s.d.cq(s.a,a,r)
s.e=(s.e&4294967263)>>>0
s.bI((t&4)!==0)},
dd:function(a,b){var t=this,s=t.e,r=new P.je(t,a,b)
if((s&1)!==0){t.e=(s|16)>>>0
t.bG()
s=t.f
if(s!=null&&s!==$.h_())s.e3(r)
else r.$0()}else{r.$0()
t.bI((s&4)!==0)}},
az:function(){var t,s=this,r=new P.jd(s)
s.bG()
s.e=(s.e|16)>>>0
t=s.f
if(t!=null&&t!==$.h_())t.e3(r)
else r.$0()},
cZ:function(a){var t,s=this
u.M.a(a)
t=s.e
s.e=(t|32)>>>0
a.$0()
s.e=(s.e&4294967263)>>>0
s.bI((t&4)!==0)},
bI:function(a){var t,s,r=this,q=r.e
if((q&64)!==0&&r.r.c==null){q=r.e=(q&4294967231)>>>0
if((q&4)!==0)if(q<128){t=r.r
t=t==null||t.c==null}else t=!1
else t=!1
if(t){q=(q&4294967291)>>>0
r.e=q}}for(;!0;a=s){if((q&8)!==0){r.sbT(null)
return}s=(q&4)!==0
if(a===s)break
r.e=(q^32)>>>0
if(s)r.ad()
else r.ae()
q=(r.e&4294967263)>>>0
r.e=q}if((q&64)!==0&&q<128)r.r.by(r)},
sew:function(a){this.a=H.i(this).i("~(O.T)").a(a)},
sf5:function(a){this.c=u.M.a(a)},
sbT:function(a){this.r=H.i(this).i("dV<O.T>").a(a)},
$ia3:1,
$ibk:1,
$ibj:1}
P.je.prototype={
$0:function(){var t,s,r,q=this.a,p=q.e
if((p&8)!==0&&(p&16)===0)return
q.e=(p|32)>>>0
t=q.b
p=this.b
s=u.K
r=q.d
if(u.da.b(t))r.he(t,p,this.c,s,u.l)
else r.cq(u.d5.a(t),p,s)
q.e=(q.e&4294967263)>>>0},
$S:0}
P.jd.prototype={
$0:function(){var t=this.a,s=t.e
if((s&16)===0)return
t.e=(s|42)>>>0
t.d.co(t.c)
t.e=(t.e&4294967263)>>>0},
$S:0}
P.cK.prototype={
X:function(a,b,c,d){var t=this.$ti
t.i("~(1)").a(a)
u.M.a(c)
return this.a.bX(t.i("~(1)").a(a),d,c,!0===b)},
u:function(a){return this.X(a,null,null,null)},
bj:function(a,b,c){return this.X(a,null,b,c)}}
P.bA.prototype={
saT:function(a){this.a=u.gt.a(a)},
gaT:function(){return this.a}}
P.dD.prototype={
ck:function(a){this.$ti.i("bj<1>").a(a).bb(this.b)}}
P.fq.prototype={
ck:function(a){a.dd(this.b,this.c)}}
P.fp.prototype={
ck:function(a){a.az()},
gaT:function(){return null},
saT:function(a){throw H.b(P.c2("No events after a done."))},
$ibA:1}
P.dV.prototype={
by:function(a){var t,s=this
s.$ti.i("bj<1>").a(a)
t=s.a
if(t===1)return
if(t>=1){s.a=1
return}P.mY(new P.jG(s,a))
s.a=1}}
P.jG.prototype={
$0:function(){var t,s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
t=q.$ti.i("bj<1>").a(this.b)
s=q.b
r=s.gaT()
q.b=r
if(r==null)q.c=null
s.ck(t)},
$S:1}
P.e_.prototype={
l:function(a,b){var t,s=this
u.gt.a(b)
t=s.c
if(t==null)s.b=s.c=b
else{t.saT(b)
s.c=b}}}
P.cG.prototype={
dc:function(){var t=this
if((t.b&2)!==0)return
P.cP(null,null,t.a,u.M.a(t.gff()))
t.b=(t.b|2)>>>0},
cj:function(a){this.b+=4},
cn:function(){var t=this.b
if(t>=4){t=this.b=t-4
if(t<4&&(t&1)===0)this.dc()}},
Y:function(){return $.h_()},
az:function(){var t=this,s=t.b=(t.b&4294967293)>>>0
if(s>=4)return
t.b=(s|1)>>>0
t.a.co(t.c)},
$ia3:1}
P.dG.prototype={
X:function(a,b,c,d){var t,s,r,q=this.$ti
q.i("~(2)").a(a)
u.M.a(c)
b=!0===b
t=q.Q[1]
s=$.H
r=b?1:0
q=new P.cI(this,s,r,q.i("@<1>").q(t).i("cI<1,2>"))
q.cD(a,d,c,b,t)
q.sdf(this.a.bj(q.geM(),q.geP(),q.gf_()))
return q},
bj:function(a,b,c){return this.X(a,null,b,c)}}
P.cI.prototype={
aK:function(a){this.$ti.Q[1].a(a)
if((this.e&2)!==0)return
this.ek(a)},
b_:function(a,b){if((this.e&2)!==0)return
this.el(a,b)},
ad:function(){var t=this.y
if(t==null)return
t.cj(0)},
ae:function(){var t=this.y
if(t==null)return
t.cn()},
bS:function(){var t=this.y
if(t!=null){this.sdf(null)
return t.Y()}return null},
eN:function(a){this.x.eO(this.$ti.c.a(a),this)},
f0:function(a,b){u.l.a(b)
this.x.$ti.i("bk<2>").a(this).b_(a,b)},
eQ:function(){this.x.$ti.i("bk<2>").a(this).cK()},
sdf:function(a){this.y=this.$ti.i("a3<1>").a(a)}}
P.dP.prototype={
eO:function(a,b){var t,s,r,q,p=this.$ti
p.c.a(a)
p.i("bk<2>").a(b)
t=null
try{t=this.b.$1(a)}catch(q){s=H.L(q)
r=H.aT(q)
b.b_(s,r)
return}b.aK(t)}}
P.cV.prototype={
n:function(a){return H.a(this.a)},
$iK:1,
gaZ:function(){return this.b}}
P.fS.prototype={$im0:1}
P.ka.prototype={
$0:function(){var t,s=this.a,r=s.b
if(r==null)throw H.b(s.a)
t=H.b(s.a)
t.stack=r.n(0)
throw t},
$S:1}
P.fH.prototype={
co:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.f===$.H){a.$0()
return}P.mr(q,q,this,a,u.o)}catch(r){t=H.L(r)
s=H.aT(r)
P.cO(q,q,this,t,u.l.a(s))}},
cq:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.f===$.H){a.$1(b)
return}P.mt(q,q,this,a,b,u.o,c)}catch(r){t=H.L(r)
s=H.aT(r)
P.cO(q,q,this,t,u.l.a(s))}},
he:function(a,b,c,d,e){var t,s,r,q=null
d.i("@<0>").q(e).i("~(1,2)").a(a)
d.a(b)
e.a(c)
try{if(C.f===$.H){a.$2(b,c)
return}P.ms(q,q,this,a,b,c,u.o,d,e)}catch(r){t=H.L(r)
s=H.aT(r)
P.cO(q,q,this,t,u.l.a(s))}},
ft:function(a,b){return new P.jN(this,b.i("0()").a(a),b)},
bZ:function(a){return new P.jM(this,u.M.a(a))},
fu:function(a,b){return new P.jO(this,b.i("~(0)").a(a),b)},
h:function(a,b){return null},
dV:function(a,b){b.i("0()").a(a)
if($.H===C.f)return a.$0()
return P.mr(null,null,this,a,b)},
cp:function(a,b,c,d){c.i("@<0>").q(d).i("1(2)").a(a)
d.a(b)
if($.H===C.f)return a.$1(b)
return P.mt(null,null,this,a,b,c,d)},
hd:function(a,b,c,d,e,f){d.i("@<0>").q(e).q(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.H===C.f)return a.$2(b,c)
return P.ms(null,null,this,a,b,c,d,e,f)},
dQ:function(a,b,c,d){return b.i("@<0>").q(c).q(d).i("1(2,3)").a(a)}}
P.jN.prototype={
$0:function(){return this.a.dV(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.jM.prototype={
$0:function(){return this.a.co(this.b)},
$S:0}
P.jO.prototype={
$1:function(a){var t=this.c
return this.a.cq(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.dH.prototype={
gk:function(a){return this.a},
gM:function(a){return this.a===0},
gI:function(){return new P.dI(this,this.$ti.i("dI<1>"))},
H:function(a){var t,s
if(typeof a=="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.eF(a)},
eF:function(a){var t=this.d
if(t==null)return!1
return this.aj(this.cW(t,a),a)>=0},
h:function(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:P.m5(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:P.m5(r,b)
return s}else return this.eK(b)},
eK:function(a){var t,s,r=this.d
if(r==null)return null
t=this.cW(r,a)
s=this.aj(t,a)
return s<0?null:t[s+1]},
j:function(a,b,c){var t,s,r,q,p,o=this,n=o.$ti
n.c.a(b)
n.Q[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){t=o.b
o.eB(t==null?o.b=P.m6():t,b,c)}else{s=o.d
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
t=p.cN()
for(s=t.length,o=o.c,r=0;r<s;++r){q=t[r]
b.$2(o.a(q),p.h(0,q))
if(t!==p.e)throw H.b(P.aL(p))}},
cN:function(){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
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
eB:function(a,b,c){var t=this.$ti
t.c.a(b)
t.Q[1].a(c)
if(a[b]==null){++this.a
this.e=null}P.kI(a,b,c)},
cW:function(a,b){return a[H.mP(b)&1073741823]}}
P.dK.prototype={
aj:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2){r=a[s]
if(r==null?b==null:r===b)return s}return-1}}
P.dI.prototype={
gk:function(a){return this.a.a},
gM:function(a){return this.a.a===0},
gw:function(a){var t=this.a
return new P.dJ(t,t.cN(),this.$ti.i("dJ<1>"))}}
P.dJ.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw H.b(P.aL(q))
else if(r>=s.length){t.saL(null)
return!1}else{t.saL(s[r])
t.c=r+1
return!0}},
saL:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
P.dN.prototype={
gw:function(a){var t=this,s=new P.c7(t,t.r,H.i(t).i("c7<1>"))
s.c=t.e
return s},
gk:function(a){return this.a},
F:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.J.a(t[b])!=null}else{s=this.eE(b)
return s}},
eE:function(a){var t=this.d
if(t==null)return!1
return this.aj(t[this.bK(a)],a)>=0},
l:function(a,b){var t,s,r=this
H.i(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.cL(t==null?r.b=P.kJ():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.cL(s==null?r.c=P.kJ():s,b)}else return r.eA(b)},
eA:function(a){var t,s,r,q=this
H.i(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.kJ()
s=q.bK(a)
r=t[s]
if(r==null)t[s]=[q.bJ(a)]
else{if(q.aj(r,a)>=0)return!1
r.push(q.bJ(a))}return!0},
a9:function(a,b){var t=this
if(typeof b=="string"&&b!=="__proto__")return t.d9(t.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return t.d9(t.c,b)
else return t.f8(b)},
f8:function(a){var t,s,r,q,p=this,o=p.d
if(o==null)return!1
t=p.bK(a)
s=o[t]
r=p.aj(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete o[t]
p.dh(q)
return!0},
cL:function(a,b){H.i(this).c.a(b)
if(u.J.a(a[b])!=null)return!1
a[b]=this.bJ(b)
return!0},
d9:function(a,b){var t
if(a==null)return!1
t=u.J.a(a[b])
if(t==null)return!1
this.dh(t)
delete a[b]
return!0},
cM:function(){this.r=1073741823&this.r+1},
bJ:function(a){var t,s=this,r=new P.fB(H.i(s).c.a(a))
if(s.e==null)s.e=s.f=r
else{t=s.f
r.c=t
s.f=t.b=r}++s.a
s.cM()
return r},
dh:function(a){var t=this,s=a.c,r=a.b
if(s==null)t.e=r
else s.b=r
if(r==null)t.f=s
else r.c=s;--t.a
t.cM()},
bK:function(a){return J.ab(a)&1073741823},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bJ(a[s].a,b))return s
return-1}}
P.fB.prototype={}
P.c7.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.aL(s))
else{s=t.c
if(s==null){t.saL(null)
return!1}else{t.saL(t.$ti.c.a(s.a))
t.c=t.c.b
return!0}}},
saL:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
P.dm.prototype={$in:1,$id:1,$it:1}
P.k.prototype={
gw:function(a){return new H.N(a,this.gk(a),H.X(a).i("N<k.E>"))},
C:function(a,b){return this.h(a,b)},
t:function(a,b){var t,s
H.X(a).i("~(k.E)").a(b)
t=this.gk(a)
for(s=0;s<t;++s){b.$1(this.h(a,s))
if(t!==this.gk(a))throw H.b(P.aL(a))}},
gM:function(a){return this.gk(a)===0},
gcg:function(a){return!this.gM(a)},
G:function(a,b,c){var t=H.X(a)
return new H.T(a,t.q(c).i("1(k.E)").a(b),t.i("@<k.E>").q(c).i("T<1,2>"))},
S:function(a,b){return this.G(a,b,u.z)},
aY:function(a,b){return H.af(a,b,null,H.X(a).i("k.E"))},
ah:function(a,b){var t,s=H.h([],H.X(a).i("G<k.E>"))
C.a.sk(s,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.j(s,t,this.h(a,t))
return s},
aq:function(a){return this.ah(a,!0)},
l:function(a,b){var t
H.X(a).i("k.E").a(b)
t=this.gk(a)
this.sk(a,t+1)
this.j(a,t,b)},
U:function(a,b,c,d,e){var t,s,r,q,p=H.X(a)
p.i("d<k.E>").a(d)
P.lU(b,c,this.gk(a))
t=c-b
if(t===0)return
P.aX(e,"skipCount")
if(p.i("t<k.E>").b(d)){s=e
r=d}else{r=H.af(d,e,null,H.X(d).i("k.E")).ah(0,!1)
s=0}p=J.az(r)
if(s+t>p.gk(r))throw H.b(H.lH())
if(s<b)for(q=t-1;q>=0;--q)this.j(a,b+q,p.h(r,s+q))
else for(q=0;q<t;++q)this.j(a,b+q,p.h(r,s+q))},
ag:function(a,b,c){var t=this
H.X(a).i("k.E").a(c)
P.bc(b,"index",u.S)
P.kE(b,0,t.gk(a),"index")
if(b===t.gk(a)){t.l(a,c)
return}t.sk(a,t.gk(a)+1)
t.U(a,b+1,t.gk(a),a,b)
t.j(a,b,c)},
n:function(a){return P.is(a,"[","]")}}
P.dn.prototype={}
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
H.i(this).i("~(S.K,S.V)").a(b)
for(t=J.y(this.gI());t.m();){s=t.gp()
b.$2(s,this.h(0,s))}},
aE:function(a,b,c,d){var t,s,r,q
H.i(this).q(c).q(d).i("cn<1,2>(S.K,S.V)").a(b)
t=P.bW(c,d)
for(s=J.y(this.gI());s.m();){r=s.gp()
q=b.$2(r,this.h(0,r))
t.j(0,C.q.gfX(q),q.ghi(q))}return t},
S:function(a,b){return this.aE(a,b,u.z,u.z)},
gk:function(a){return J.ac(this.gI())},
gM:function(a){return J.ns(this.gI())},
n:function(a){return P.iz(this)},
$iao:1}
P.e6.prototype={
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
return new H.ae(t,H.i(t).i("ae<1>"))},
n:function(a){return P.iz(this.a)},
aE:function(a,b,c,d){return this.a.aE(0,this.$ti.q(c).q(d).i("cn<1,2>(3,4)").a(b),c,d)},
S:function(a,b){return this.aE(a,b,u.z,u.z)},
$iao:1}
P.dB.prototype={}
P.aY.prototype={
G:function(a,b,c){var t=H.i(this)
return new H.aV(this,t.q(c).i("1(aY.E)").a(b),t.i("@<aY.E>").q(c).i("aV<1,2>"))},
S:function(a,b){return this.G(a,b,u.z)},
n:function(a){return P.is(this,"{","}")},
C:function(a,b){var t,s,r,q="index"
P.bc(b,q,u.S)
P.aX(b,q)
for(t=this.a8(),t=P.jB(t,t.r,H.i(t).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.b(P.be(b,this,q,null,s))}}
P.dv.prototype={$in:1,$id:1,$iaq:1}
P.dW.prototype={
L:function(a,b){var t
for(t=J.y(H.i(this).i("d<1>").a(b));t.m();)this.l(0,t.gp())},
G:function(a,b,c){var t=H.i(this)
return new H.aV(this,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("aV<1,2>"))},
S:function(a,b){return this.G(a,b,u.z)},
n:function(a){return P.is(this,"{","}")},
ci:function(a,b){var t,s=P.jB(this,this.r,H.i(this).c)
if(!s.m())return""
if(b===""){t=""
do t+=H.a(s.d)
while(s.m())}else{t=H.a(s.d)
for(;s.m();)t=t+b+H.a(s.d)}return t.charCodeAt(0)==0?t:t},
C:function(a,b){var t,s,r,q=this,p="index"
P.bc(b,p,u.S)
P.aX(b,p)
for(t=P.jB(q,q.r,H.i(q).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.b(P.be(b,q,p,null,s))},
$in:1,
$id:1,
$iaq:1}
P.dO.prototype={}
P.dX.prototype={}
P.cL.prototype={}
P.fz.prototype={
h:function(a,b){var t,s=this.b
if(s==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{t=s[b]
return typeof t=="undefined"?this.f6(b):t}},
gk:function(a){return this.b==null?this.c.a:this.aN().length},
gM:function(a){return this.gk(this)===0},
gI:function(){if(this.b==null){var t=this.c
return new H.ae(t,H.i(t).i("ae<1>"))}return new P.fA(this)},
j:function(a,b,c){var t,s,r=this
if(r.b==null)r.c.j(0,b,c)
else if(r.H(b)){t=r.b
t[b]=c
s=r.a
if(s==null?t!=null:s!==t)s[b]=null}else r.fm().j(0,b,c)},
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
if(t!==p.c)throw H.b(P.aL(p))}},
aN:function(){var t=u.j.a(this.c)
if(t==null)t=this.c=H.h(Object.keys(this.a),u.s)
return t},
fm:function(){var t,s,r,q,p,o=this
if(o.b==null)return o.c
t=P.bW(u.N,u.z)
s=o.aN()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.j(0,p,o.h(0,p))}if(q===0)C.a.l(s,null)
else C.a.sk(s,0)
o.a=o.b=null
return o.c=t},
f6:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
t=P.k4(this.a[a])
return this.b[a]=t}}
P.fA.prototype={
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
t=new J.aB(t,t.length,H.C(t).i("aB<1>"))}return t}}
P.eo.prototype={}
P.cg.prototype={}
P.ir.prototype={
n:function(a){return"unknown"}}
P.ck.prototype={
dw:function(a){var t=this.cQ(a,0,a.length)
return t==null?a:t},
cQ:function(a,b,c){var t,s,r,q
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
default:r=null}if(r!=null){if(s==null)s=new P.aQ("")
if(t>b)s.a+=C.d.ab(a,b,t)
s.a+=r
b=t+1}}if(s==null)return null
if(c>b)s.a+=J.nC(a,b,c)
q=s.a
return q.charCodeAt(0)==0?q:q}}
P.di.prototype={
n:function(a){var t=P.bq(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
P.eL.prototype={
n:function(a){return"Cyclic error in JSON stringify"}}
P.ix.prototype={
c2:function(a,b,c){var t
u.ep.a(c)
t=P.pv(b,this.gfG().a)
return t},
fM:function(a,b){var t
u.bc.a(b)
t=P.oV(a,this.gfN().b,null)
return t},
gfN:function(){return C.K},
gfG:function(){return C.J}}
P.eN.prototype={}
P.eM.prototype={}
P.jz.prototype={
e6:function(a){var t,s,r,q,p,o,n=a.length
for(t=J.kg(a),s=this.c,r=0,q=0;q<n;++q){p=t.b1(a,q)
if(p>92)continue
if(p<32){if(q>r)s.a+=C.d.ab(a,r,q)
r=q+1
s.a+=H.aN(92)
switch(p){case 8:s.a+=H.aN(98)
break
case 9:s.a+=H.aN(116)
break
case 10:s.a+=H.aN(110)
break
case 12:s.a+=H.aN(102)
break
case 13:s.a+=H.aN(114)
break
default:s.a+=H.aN(117)
s.a+=H.aN(48)
s.a+=H.aN(48)
o=p>>>4&15
s.a+=H.aN(o<10?48+o:87+o)
o=p&15
s.a+=H.aN(o<10?48+o:87+o)
break}}else if(p===34||p===92){if(q>r)s.a+=C.d.ab(a,r,q)
r=q+1
s.a+=H.aN(92)
s.a+=H.aN(p)}}if(r===0)s.a+=H.a(a)
else if(r<n)s.a+=t.ab(a,r,n)},
bH:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.b(new P.eL(a,null))}C.a.l(t,a)},
bv:function(a){var t,s,r,q,p=this
if(p.e5(a))return
p.bH(a)
try{t=p.b.$1(a)
if(!p.e5(t)){r=P.lK(a,null,p.gd6())
throw H.b(r)}r=p.a
if(0>=r.length)return H.o(r,-1)
r.pop()}catch(q){s=H.L(q)
r=P.lK(a,s,p.gd6())
throw H.b(r)}},
e5:function(a){var t,s,r=this
if(typeof a=="number"){if(!isFinite(a))return!1
r.c.a+=C.c.n(a)
return!0}else if(a===!0){r.c.a+="true"
return!0}else if(a===!1){r.c.a+="false"
return!0}else if(a==null){r.c.a+="null"
return!0}else if(typeof a=="string"){t=r.c
t.a+='"'
r.e6(a)
t.a+='"'
return!0}else if(u.j.b(a)){r.bH(a)
r.hj(a)
t=r.a
if(0>=t.length)return H.o(t,-1)
t.pop()
return!0}else if(u.f.b(a)){r.bH(a)
s=r.hk(a)
t=r.a
if(0>=t.length)return H.o(t,-1)
t.pop()
return s}else return!1},
hj:function(a){var t,s,r=this.c
r.a+="["
t=J.az(a)
if(t.gcg(a)){this.bv(t.h(a,0))
for(s=1;s<t.gk(a);++s){r.a+=","
this.bv(t.h(a,s))}}r.a+="]"},
hk:function(a){var t,s,r,q,p,o,n=this,m={}
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
n.e6(H.r(s[r]))
q.a+='":'
o=r+1
if(o>=t)return H.o(s,o)
n.bv(s[o])}q.a+="}"
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
gd6:function(){var t=this.c.a
return t.charCodeAt(0)==0?t:t}}
P.iB.prototype={
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
P.ci.prototype={
l:function(a,b){return P.nP(C.e.v(this.a,u.fu.a(b).gho()),!1)},
P:function(a,b){if(b==null)return!1
return b instanceof P.ci&&this.a===b.a&&!0},
gA:function(a){var t=this.a
return(t^C.e.bW(t,30))&1073741823},
n:function(a){var t=this,s=P.nQ(H.og(t)),r=P.es(H.oe(t)),q=P.es(H.oa(t)),p=P.es(H.ob(t)),o=P.es(H.od(t)),n=P.es(H.of(t)),m=P.nR(H.oc(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.ai.prototype={}
P.bR.prototype={
at:function(a,b){return new P.bR(C.e.D(this.a*b))},
P:function(a,b){if(b==null)return!1
return b instanceof P.bR&&this.a===b.a},
gA:function(a){return C.e.gA(this.a)},
n:function(a){var t,s,r,q=new P.hY(),p=this.a
if(p<0)return"-"+new P.bR(0-p).n(0)
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
gaZ:function(){return H.aT(this.$thrownJsError)}}
P.cU.prototype={
n:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bq(t)
return"Assertion failed"}}
P.eZ.prototype={
n:function(a){return"Throw of null."}}
P.aK.prototype={
gbN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbM:function(){return""},
n:function(a){var t,s,r,q,p=this,o=p.c,n=o!=null?" ("+o+")":""
o=p.d
t=o==null?"":": "+H.a(o)
s=p.gbN()+n+t
if(!p.a)return s
r=p.gbM()
q=P.bq(p.b)
return s+r+": "+q}}
P.du.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var t,s,r=this.e
if(r==null){r=this.f
t=r!=null?": Not less than or equal to "+H.a(r):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.a(r)
else if(s>r)t=": Not in range "+H.a(r)+".."+H.a(s)+", inclusive"
else t=s<r?": Valid value range is empty":": Only valid value is "+H.a(r)}return t}}
P.eE.prototype={
gbN:function(){return"RangeError"},
gbM:function(){var t,s=H.q(this.b)
if(typeof s!=="number")return s.ai()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.a(t)},
gk:function(a){return this.f}}
P.eX.prototype={
n:function(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new P.aQ("")
k.a=""
for(t=l.c,s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=P.bq(o)
k.a=", "}l.d.t(0,new P.iB(k,j))
n=P.bq(l.a)
m=j.n(0)
t="NoSuchMethodError: method not found: '"+H.a(l.b.a)+"'\nReceiver: "+n+"\nArguments: ["+m+"]"
return t}}
P.fg.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.fe.prototype={
n:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b5.prototype={
n:function(a){return"Bad state: "+this.a}}
P.ep.prototype={
n:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bq(t)+"."}}
P.f_.prototype={
n:function(a){return"Out of Memory"},
gaZ:function(){return null},
$iK:1}
P.dx.prototype={
n:function(a){return"Stack Overflow"},
gaZ:function(){return null},
$iK:1}
P.er.prototype={
n:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.fu.prototype={
n:function(a){return"Exception: "+this.a},
$ii2:1}
P.db.prototype={
n:function(a){var t,s=this.a,r=s!=null&&""!==s?"FormatException: "+H.a(s):"FormatException",q=this.b
if(typeof q=="string"){t=q.length>78?C.d.ab(q,0,75)+"...":q
return r+"\n"+t}else return r},
$ii2:1}
P.b3.prototype={}
P.e.prototype={}
P.d.prototype={
G:function(a,b,c){var t=H.i(this)
return H.lN(this,t.q(c).i("1(d.E)").a(b),t.i("d.E"),c)},
S:function(a,b){return this.G(a,b,u.z)},
bs:function(a,b){var t=H.i(this)
return new H.ag(this,t.i("w(d.E)").a(b),t.i("ag<d.E>"))},
gk:function(a){var t,s=this.gw(this)
for(t=0;s.m();)++t
return t},
gaD:function(a){var t=this.gw(this)
if(!t.m())throw H.b(H.eF())
return t.gp()},
gaw:function(a){var t,s=this.gw(this)
if(!s.m())throw H.b(H.eF())
t=s.gp()
if(s.m())throw H.b(H.nY())
return t},
C:function(a,b){var t,s,r,q="index"
P.bc(b,q,u.S)
P.aX(b,q)
for(t=this.gw(this),s=0;t.m();){r=t.gp()
if(b===s)return r;++s}throw H.b(P.be(b,this,q,null,s))},
n:function(a){return P.nX(this,"(",")")}}
P.R.prototype={}
P.t.prototype={$in:1,$id:1}
P.cn.prototype={}
P.u.prototype={
gA:function(a){return P.E.prototype.gA.call(this,this)},
n:function(a){return"null"}}
P.Y.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
P:function(a,b){return this===b},
gA:function(a){return H.c_(this)},
n:function(a){return"Instance of '"+H.a(H.iM(this))+"'"},
bk:function(a,b){u.m.a(b)
throw H.b(P.lO(this,b.gdH(),b.gdP(),b.gdI()))},
toString:function(){return this.n(this)}}
P.dp.prototype={}
P.aq.prototype={}
P.ar.prototype={}
P.fJ.prototype={
n:function(a){return""},
$iar:1}
P.c.prototype={$if0:1}
P.aQ.prototype={
gk:function(a){return this.a.length},
n:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$ios:1}
P.aZ.prototype={}
W.j.prototype={$ij:1}
W.ca.prototype={
n:function(a){return String(a)},
$ica:1}
W.ej.prototype={
n:function(a){return String(a)}}
W.cb.prototype={$icb:1}
W.bL.prototype={$ibL:1}
W.bM.prototype={$ibM:1}
W.ce.prototype={$ice:1}
W.b2.prototype={
gk:function(a){return a.length}}
W.I.prototype={$iI:1}
W.ch.prototype={
ay:function(a,b){var t=$.n3(),s=t[b]
if(typeof s=="string")return s
s=this.fj(a,b)
t[b]=s
return s},
fj:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.nS()+b
if(t in a)return t
return b},
aQ:function(a,b,c,d){if(c==null)c=""
a.setProperty(b,c,d)},
gk:function(a){return a.length}}
W.hJ.prototype={}
W.d2.prototype={$id2:1}
W.bP.prototype={$ibP:1}
W.hK.prototype={
n:function(a){return String(a)}}
W.d3.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
P:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.W(b)
t=a.left==t.gbi(b)&&a.top==t.gbr(b)&&a.width==t.gbt(b)&&a.height==t.gbf(b)}else t=!1
return t},
gA:function(a){return W.m9(J.ab(a.left),J.ab(a.top),J.ab(a.width),J.ab(a.height))},
gdn:function(a){return a.bottom},
gbf:function(a){return a.height},
gbi:function(a){return a.left},
gdU:function(a){return a.right},
gbr:function(a){return a.top},
gbt:function(a){return a.width},
$ibw:1}
W.hL.prototype={
gk:function(a){return a.length},
l:function(a,b){return a.add(H.r(b))}}
W.fk.prototype={
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
return new J.aB(t,t.length,H.C(t).i("aB<1>"))},
U:function(a,b,c,d,e){u.bq.a(d)
throw H.b(P.j_(null))},
ag:function(a,b,c){var t,s,r,q=this,p=u.h
p.a(c)
t=q.b
s=t.length
if(b>s)throw H.b(P.aa(b,0,q.gk(q),null,null))
r=q.a
if(b===s)r.appendChild(c)
else{if(b>=s)return H.o(t,b)
r.insertBefore(c,p.a(t[b]))}},
bd:function(a){J.ks(this.a)}}
W.am.prototype={
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
gfs:function(a){return new W.fr(a)},
gdr:function(a){return new W.fk(a,a.children)},
gds:function(a){return new W.fs(a)},
gaU:function(a){var t=C.c.D(a.offsetLeft),s=C.c.D(a.offsetTop),r=C.c.D(a.offsetWidth),q=C.c.D(a.offsetHeight)
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.bw(t,s,r,q,u.q)},
a3:function(a,b){this.cb(a,"beforeend",b,null,null)},
n:function(a){return a.localName},
cb:function(a,b,c,d,e){var t,s=this.V(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(s,a)
break
case"afterbegin":t=a.childNodes
a.insertBefore(s,t.length>0?t[0]:null)
break
case"beforeend":a.appendChild(s)
break
case"afterend":a.parentNode.insertBefore(s,a.nextSibling)
break
default:H.D(P.b0("Invalid position "+b))}},
fY:function(a,b){if(!!a.matches)return a.matches(b)
else if(!!a.webkitMatchesSelector)return a.webkitMatchesSelector(b)
else if(!!a.mozMatchesSelector)return a.mozMatchesSelector(b)
else if(!!a.msMatchesSelector)return a.msMatchesSelector(b)
else if(!!a.oMatchesSelector)return a.oMatchesSelector(b)
else throw H.b(P.x("Not supported on this platform"))},
h_:function(a,b){var t=a
do{if(J.nx(t,b))return!0
t=t.parentElement}while(t!=null)
return!1},
V:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.lD
if(t==null){t=H.h([],u.eO)
s=new W.dt(t)
C.a.l(t,W.m7(null))
C.a.l(t,W.mc())
$.lD=s
d=s}else d=t
t=$.lC
if(t==null){t=new W.e7(d)
$.lC=t
c=t}else{t.a=d
c=t}}if($.bp==null){t=document
s=t.implementation.createHTMLDocument("")
$.bp=s
$.kA=s.createRange()
s=$.bp.createElement("base")
u.cR.a(s)
s.href=t.baseURI
$.bp.head.appendChild(s)}t=$.bp
if(t.body==null){s=t.createElement("body")
t.body=u.a4.a(s)}t=$.bp
if(u.a4.b(a))r=t.body
else{r=t.createElement(a.tagName)
$.bp.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.F(C.M,a.tagName)){$.kA.selectNodeContents(r)
q=$.kA.createContextualFragment(b)}else{r.innerHTML=b
q=$.bp.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}t=$.bp.body
if(r==null?t!=null:r!==t)J.eg(r)
c.cs(q)
document.adoptNode(q)
return q},
fF:function(a,b,c){return this.V(a,b,c,null)},
K:function(a,b){a.textContent=null
a.appendChild(this.V(a,b,null,null))},
gdW:function(a){return a.tagName},
gdJ:function(a){return new W.aw(a,"click",!1,u.C)},
gdM:function(a){return new W.aw(a,"mousedown",!1,u.C)},
gdN:function(a){return new W.aw(a,"touchstart",!1,u.du)},
$ip:1}
W.i_.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:34}
W.f.prototype={$if:1}
W.i1.prototype={
h:function(a,b){return new W.bl(this.a,H.r(b),!1,u.cw)}}
W.hZ.prototype={
h:function(a,b){var t
H.r(b)
if($.lA.H(b.toLowerCase())){t=$.ls
if(t==null)t=$.ls=!H.as(P.kz())&&J.h0(window.navigator.userAgent,"WebKit",0)
if(t)return new W.aw(this.a,$.lA.h(0,b.toLowerCase()),!1,u.E)}return new W.aw(this.a,b,!1,u.E)}}
W.F.prototype={
eu:function(a,b,c,d){return a.addEventListener(b,H.cR(u.G.a(c),1),!1)},
dA:function(a,b){return a.dispatchEvent(b)},
f9:function(a,b,c,d){return a.removeEventListener(b,H.cR(u.G.a(c),1),!1)},
$iF:1}
W.eC.prototype={
gk:function(a){return a.length}}
W.bs.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.be(b,a,null,null,null))
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
$ibs:1}
W.dd.prototype={$idd:1}
W.cl.prototype={
cv:function(a,b,c){return a.setSelectionRange(b,c)},
$icl:1}
W.bg.prototype={$ibg:1}
W.eO.prototype={
n:function(a){return String(a)},
$ieO:1}
W.a2.prototype={
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
$ia2:1}
W.al.prototype={
gaw:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.b(P.c2("No elements"))
if(s>1)throw H.b(P.c2("More than one element"))
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
if(b>r)throw H.b(P.aa(b,0,this.gk(this),null,null))
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
return new W.bV(t,t.length,H.X(t).i("bV<V.E>"))},
U:function(a,b,c,d,e){u.eh.a(d)
throw H.b(P.x("Cannot setRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
sk:function(a,b){throw H.b(P.x("Cannot set length on immutable List."))},
h:function(a,b){var t
H.q(b)
t=this.a.childNodes
if(b<0||b>=t.length)return H.o(t,b)
return t[b]}}
W.m.prototype={
bl:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
h9:function(a,b){var t,s
try{t=a.parentNode
J.no(t,b,a)}catch(s){H.L(s)}return a},
ey:function(a){var t
for(;t=a.firstChild,t!=null;)a.removeChild(t)},
n:function(a){var t=a.nodeValue
return t==null?this.ef(a):t},
fa:function(a,b,c){return a.replaceChild(b,c)},
$im:1}
W.ds.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.be(b,a,null,null,null))
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
W.f8.prototype={}
W.dz.prototype={
V:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
t=W.nT("<table>"+H.a(b)+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.al(s).L(0,new W.al(t))
return s}}
W.f9.prototype={
V:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.V(t.createElement("table"),b,c,d)
t.toString
t=new W.al(t)
r=t.gaw(t)
r.toString
t=new W.al(r)
q=t.gaw(t)
s.toString
q.toString
new W.al(s).L(0,new W.al(q))
return s}}
W.fa.prototype={
V:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bB(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.V(t.createElement("table"),b,c,d)
t.toString
t=new W.al(t)
r=t.gaw(t)
s.toString
r.toString
new W.al(s).L(0,new W.al(r))
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
cv:function(a,b,c){return a.setSelectionRange(b,c)},
$icB:1}
W.aI.prototype={$iaI:1}
W.b6.prototype={$ib6:1}
W.fd.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.be(b,a,null,null,null))
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
W.av.prototype={$iav:1}
W.by.prototype={
gfp:function(a){var t=new P.a4($.H,u.dL),s=u.c4.a(new W.j8(new P.e2(t,u.bi)))
this.eJ(a)
this.fb(a,W.mw(s,u.di))
return t},
fb:function(a,b){return a.requestAnimationFrame(H.cR(u.c4.a(b),1))},
eJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iby:1,
$ij7:1}
W.j8.prototype={
$1:function(a){var t=this.a
a=t.$ti.i("1/").a(H.k3(a))
t=t.a
if(t.a!==0)H.D(P.c2("Future already completed"))
t.b2(a)},
$S:44}
W.b7.prototype={$ib7:1}
W.cD.prototype={$icD:1}
W.fm.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.be(b,a,null,null,null))
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
W.dE.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
P:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.W(b)
t=a.left==t.gbi(b)&&a.top==t.gbr(b)&&a.width==t.gbt(b)&&a.height==t.gbf(b)}else t=!1
return t},
gA:function(a){return W.m9(J.ab(a.left),J.ab(a.top),J.ab(a.width),J.ab(a.height))},
gbf:function(a){return a.height},
gbt:function(a){return a.width}}
W.dQ.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.be(b,a,null,null,null))
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
W.fj.prototype={
t:function(a,b){var t,s,r,q,p
u.eA.a(b)
for(t=this.gI(),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.A)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gI:function(){var t,s,r,q,p=this.a.attributes,o=H.h([],u.s)
for(t=p.length,s=u.h9,r=0;r<t;++r){if(r>=p.length)return H.o(p,r)
q=s.a(p[r])
if(q.namespaceURI==null)C.a.l(o,q.name)}return o},
gM:function(a){return this.gI().length===0}}
W.fr.prototype={
h:function(a,b){return this.a.getAttribute(H.r(b))},
j:function(a,b,c){this.a.setAttribute(b,H.r(c))},
gk:function(a){return this.gI().length}}
W.fs.prototype={
a8:function(){var t,s,r,q,p=P.dl(u.N)
for(t=this.a.className.split(" "),s=t.length,r=0;r<s;++r){q=J.ku(t[r])
if(q.length!==0)p.l(0,q)}return p},
cr:function(a){this.a.className=u.cq.a(a).ci(0," ")},
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
W.eA.prototype={}
W.bl.prototype={
X:function(a,b,c,d){var t=H.i(this)
t.i("~(1)").a(a)
u.M.a(c)
return W.z(this.a,this.b,a,!1,t.c)},
bj:function(a,b,c){return this.X(a,null,b,c)}}
W.aw.prototype={}
W.aR.prototype={
X:function(a,b,c,d){var t,s,r,q=this.$ti
q.i("~(1)").a(a)
u.M.a(c)
t=new W.e0(new H.a8(q.i("@<U<1>>").q(q.i("a3<1>")).i("a8<1,2>")),q.i("e0<1>"))
t.seG(P.cx(t.gfB(t),!0,q.c))
for(s=this.a,s=new H.N(s,s.gk(s),s.$ti.i("N<k.E>")),r=this.c,q=q.i("bl<1>");s.m();)t.l(0,new W.bl(s.d,r,!1,q))
q=t.a
q.toString
return new P.ah(q,H.i(q).i("ah<1>")).X(a,b,c,d)},
u:function(a){return this.X(a,null,null,null)},
bj:function(a,b,c){return this.X(a,null,b,c)}}
W.dF.prototype={
Y:function(){var t=this
if(t.b==null)return null
t.di()
t.b=null
t.sf4(null)
return null},
cj:function(a){if(this.b==null)return;++this.a
this.di()},
cn:function(){var t=this
if(t.b==null||t.a<=0)return;--t.a
t.dg()},
dg:function(){var t,s=this,r=s.d,q=r!=null
if(q&&s.a<=0){t=s.b
t.toString
u.G.a(r)
if(q)J.nm(t,s.c,r,!1)}},
di:function(){var t,s=this.d,r=s!=null
if(r){t=this.b
t.toString
u.G.a(s)
if(r)J.nn(t,this.c,s,!1)}},
sf4:function(a){this.d=u.G.a(a)}}
W.jk.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:55}
W.e0.prototype={
l:function(a,b){var t,s,r,q=this
q.$ti.i("U<1>").a(b)
t=q.b
if(t.H(b))return
s=q.a
s=s.gfn(s)
b.toString
r=b.$ti
r.i("~(1)").a(s)
u.M.a(new W.jR(q,b))
t.j(0,b,W.z(b.a,b.b,s,!1,r.c))},
c1:function(a){var t,s,r
for(t=this.b,s=t.gar(t),r=H.i(s),r=new H.a6(J.y(s.a),s.b,r.i("@<1>").q(r.Q[1]).i("a6<1,2>"));r.m();)r.a.Y()
t.bd(0)
this.a.c1(0)},
seG:function(a){this.a=this.$ti.i("f5<1>").a(a)}}
W.jR.prototype={
$0:function(){var t=this.a,s=t.b.a9(0,t.$ti.i("U<1>").a(this.b))
if(s!=null)s.Y()
return null},
$S:0}
W.c6.prototype={
ep:function(a){var t
if($.fw.a===0){for(t=0;t<262;++t)$.fw.j(0,C.L[t],W.pP())
for(t=0;t<12;++t)$.fw.j(0,C.j[t],W.pQ())}},
aB:function(a){return $.ni().F(0,W.d8(a))},
af:function(a,b,c){var t=$.fw.h(0,H.a(W.d8(a))+"::"+b)
if(t==null)t=$.fw.h(0,"*::"+b)
if(t==null)return!1
return H.fX(t.$4(a,b,c,this))},
$iap:1}
W.V.prototype={
gw:function(a){return new W.bV(a,this.gk(a),H.X(a).i("bV<V.E>"))},
l:function(a,b){H.X(a).i("V.E").a(b)
throw H.b(P.x("Cannot add to immutable List."))},
ag:function(a,b,c){H.X(a).i("V.E").a(c)
throw H.b(P.x("Cannot add to immutable List."))},
U:function(a,b,c,d,e){H.X(a).i("d<V.E>").a(d)
throw H.b(P.x("Cannot setRange on immutable List."))}}
W.dt.prototype={
l:function(a,b){C.a.l(this.a,u.f6.a(b))},
aB:function(a){return C.a.dk(this.a,new W.iD(a))},
af:function(a,b,c){return C.a.dk(this.a,new W.iC(a,b,c))},
$iap:1}
W.iD.prototype={
$1:function(a){return u.f6.a(a).aB(this.a)},
$S:35}
W.iC.prototype={
$1:function(a){return u.f6.a(a).af(this.a,this.b,this.c)},
$S:35}
W.dY.prototype={
eq:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.bs(0,new W.jP())
s=b.bs(0,new W.jQ())
this.b.L(0,t)
r=this.c
r.L(0,C.N)
r.L(0,s)},
aB:function(a){return this.a.F(0,W.d8(a))},
af:function(a,b,c){var t=this,s=W.d8(a),r=t.c
if(r.F(0,H.a(s)+"::"+b))return t.d.fo(c)
else if(r.F(0,"*::"+b))return t.d.fo(c)
else{r=t.b
if(r.F(0,H.a(s)+"::"+b))return!0
else if(r.F(0,"*::"+b))return!0
else if(r.F(0,H.a(s)+"::*"))return!0
else if(r.F(0,"*::*"))return!0}return!1},
$iap:1}
W.jP.prototype={
$1:function(a){return!C.a.F(C.j,H.r(a))},
$S:20}
W.jQ.prototype={
$1:function(a){return C.a.F(C.j,H.r(a))},
$S:20}
W.fL.prototype={
af:function(a,b,c){if(this.em(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.F(0,b)
return!1}}
W.jV.prototype={
$1:function(a){return"TEMPLATE::"+H.a(H.r(a))},
$S:21}
W.fK.prototype={
aB:function(a){var t
if(u.ew.b(a))return!1
t=u.g7.b(a)
if(t&&W.d8(a)==="foreignObject")return!1
if(t)return!0
return!1},
af:function(a,b,c){if(b==="is"||C.d.ec(b,"on"))return!1
return this.aB(a)},
$iap:1}
W.bV.prototype={
m:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.scR(J.c8(t.a,s))
t.c=s
return!0}t.scR(null)
t.c=r
return!1},
gp:function(){return this.d},
scR:function(a){this.d=this.$ti.c.a(a)},
$iR:1}
W.fo.prototype={
dA:function(a,b){return H.D(P.x("You can only attach EventListeners to your own window."))},
$iF:1,
$ij7:1}
W.ap.prototype={}
W.fI.prototype={$iox:1}
W.e7.prototype={
cs:function(a){var t=this,s=new W.k2(t)
t.b=!1
s.$2(a,null)
for(;t.b;){t.b=!1
s.$2(a,null)}},
aP:function(a,b){var t=this.b=!0
if(b!=null?b!==a.parentNode:t)J.eg(a)
else b.removeChild(a)},
fe:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
try{n=J.nq(a)
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
o=H.as(t)?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.L(q)}s="element unprintable"
try{s=J.B(a)}catch(q){H.L(q)}try{r=W.d8(a)
this.fd(u.h.a(a),b,o,s,r,u.f.a(n),H.r(m))}catch(q){if(H.L(q) instanceof P.aK)throw q
else{this.aP(a,b)
window
p="Removing corrupted element "+H.a(s)
if(typeof console!="undefined")window.console.warn(p)}}},
fd:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n=this
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
s=H.h(t.slice(0),H.C(t).i("G<1>"))
for(r=f.gI().length-1,t=f.a;r>=0;--r){if(r>=s.length)return H.o(s,r)
q=s[r]
p=n.a
o=J.nE(q)
H.r(q)
if(!p.af(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.a(e)+" "+q+'="'+H.a(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.aW.b(a))n.cs(a.content)},
$io6:1}
W.k2.prototype={
$2:function(a,b){var t,s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fe(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aP(a,b)}t=a.lastChild
for(r=u.A;null!=t;){s=null
try{s=t.previousSibling
if(s!=null){q=s.nextSibling
p=t
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=P.c2("Corrupt HTML")
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
P.eq.prototype={
dj:function(a){var t=$.n2().b
if(typeof a!="string")H.D(H.ba(a))
if(t.test(a))return a
throw H.b(P.cT(a,"value","Not a valid class token"))},
n:function(a){return this.a8().ci(0," ")},
gw:function(a){var t=this.a8()
return P.jB(t,t.r,H.i(t).c)},
G:function(a,b,c){var t,s
c.i("0(c)").a(b)
t=this.a8()
s=H.i(t)
return new H.aV(t,s.q(c).i("1(2)").a(b),s.i("@<1>").q(c).i("aV<1,2>"))},
S:function(a,b){return this.G(a,b,u.z)},
gk:function(a){return this.a8().a},
l:function(a,b){H.r(b)
this.dj(b)
return H.fX(this.h0(0,new P.hI(b)))},
a9:function(a,b){var t,s
this.dj(b)
t=this.a8()
s=t.a9(0,b)
this.cr(t)
return s},
C:function(a,b){return this.a8().C(0,b)},
h0:function(a,b){var t,s
u.ch.a(b)
t=this.a8()
s=b.$1(t)
this.cr(t)
return s}}
P.hI.prototype={
$1:function(a){return u.cq.a(a).l(0,this.a)},
$S:63}
P.eB.prototype={
gac:function(){var t=this.b,s=H.i(t)
return new H.aG(new H.ag(t,s.i("w(k.E)").a(new P.im()),s.i("ag<k.E>")),s.i("p(k.E)").a(new P.io()),s.i("aG<k.E,p>"))},
j:function(a,b,c){var t
H.q(b)
u.h.a(c)
t=this.gac()
J.nA(t.b.$1(J.aU(t.a,b)),c)},
sk:function(a,b){var t=J.ac(this.gac().a)
if(b>=t)return
else if(b<0)throw H.b(P.b0("Invalid list length"))
this.h8(0,b,t)},
l:function(a,b){this.b.a.appendChild(u.h.a(b))},
U:function(a,b,c,d,e){u.bq.a(d)
throw H.b(P.x("Cannot setRange on filtered list"))},
h8:function(a,b,c){var t=this.gac()
t=H.on(t,b,t.$ti.i("d.E"))
C.a.t(P.cm(H.ot(t,c-b,H.i(t).i("d.E")),!0,u.z),new P.ip())},
bd:function(a){J.ks(this.b.a)},
ag:function(a,b,c){var t,s
u.h.a(c)
if(b===J.ac(this.gac().a))this.b.a.appendChild(c)
else{t=this.gac()
s=t.b.$1(J.aU(t.a,b))
s.parentNode.insertBefore(c,s)}},
gk:function(a){return J.ac(this.gac().a)},
h:function(a,b){var t
H.q(b)
t=this.gac()
return t.b.$1(J.aU(t.a,b))},
gw:function(a){var t=P.cm(this.gac(),!1,u.h)
return new J.aB(t,t.length,H.C(t).i("aB<1>"))}}
P.im.prototype={
$1:function(a){return u.h.b(u.A.a(a))},
$S:34}
P.io.prototype={
$1:function(a){return u.h.a(u.A.a(a))},
$S:36}
P.ip.prototype={
$1:function(a){return J.eg(a)},
$S:5}
P.dj.prototype={$idj:1}
P.iw.prototype={
$1:function(a){var t,s,r,q=this.a
if(q.H(a))return q.h(0,a)
if(u.f.b(a)){t={}
q.j(0,a,t)
for(q=J.y(a.gI());q.m();){s=q.gp()
t[s]=this.$1(a.h(0,s))}return t}else if(u.R.b(a)){r=[]
q.j(0,a,r)
C.a.L(r,J.kt(a,this,u.z))
return r}else return P.e8(a)},
$S:5}
P.k6.prototype={
$1:function(a){var t
u.Z.a(a)
t=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.pf,a,!1)
P.kP(t,$.kq(),a)
return t},
$S:5}
P.k7.prototype={
$1:function(a){return new this.a(a)},
$S:5}
P.kb.prototype={
$1:function(a){return new P.aF(a)},
$S:59}
P.kc.prototype={
$1:function(a){return new P.v(a,u.F)},
$S:56}
P.kd.prototype={
$1:function(a){return new P.P(a)},
$S:23}
P.P.prototype={
h:function(a,b){if(typeof b!="string"&&typeof b!="number")throw H.b(P.b0("property is not a String or num"))
return P.k5(this.a[b])},
j:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.b(P.b0("property is not a String or num"))
this.a[b]=P.e8(c)},
P:function(a,b){if(b==null)return!1
return b instanceof P.P&&this.a===b.a},
B:function(a){if(typeof a!="string"&&!0)throw H.b(P.b0("property is not a String or num"))
return a in this.a},
c3:function(a){delete this.a[a]},
n:function(a){var t,s
try{t=String(this.a)
return t}catch(s){H.L(s)
t=this.ei(0)
return t}},
R:function(a,b){var t,s=this.a
if(b==null)t=null
else{t=H.C(b)
t=P.cm(new H.T(b,t.i("@(1)").a(P.km()),t.i("T<1,@>")),!0,u.z)}return P.k5(s[a].apply(s,t))},
gA:function(a){return 0}}
P.aF.prototype={
dm:function(a){var t=P.e8(null),s=H.C(a)
s=P.cm(new H.T(a,s.i("@(1)").a(P.km()),s.i("T<1,@>")),!0,u.z)
return P.k5(this.a.apply(t,s))}}
P.v.prototype={
cI:function(a){var t=this,s=a<0||a>=t.gk(t)
if(s)throw H.b(P.aa(a,0,t.gk(t),null,null))},
h:function(a,b){if(typeof b=="number"&&b===C.e.bp(b))this.cI(H.q(b))
return this.$ti.c.a(this.cz(0,b))},
j:function(a,b,c){this.$ti.c.a(c)
if(typeof b=="number"&&b===C.e.bp(b))this.cI(H.q(b))
this.cA(0,b,c)},
gk:function(a){var t=this.a.length
if(typeof t==="number"&&t>>>0===t)return t
throw H.b(P.c2("Bad JsArray length"))},
sk:function(a,b){this.cA(0,"length",b)},
l:function(a,b){this.R("push",[this.$ti.c.a(b)])},
ag:function(a,b,c){var t,s=this
s.$ti.c.a(c)
t=b>=s.gk(s)+1
if(t)H.D(P.aa(b,0,s.gk(s),null,null))
s.R("splice",[b,0,c])},
U:function(a,b,c,d,e){var t,s,r,q=this,p=null
q.$ti.i("d<1>").a(d)
t=q.gk(q)
if(b>t)H.D(P.aa(b,0,t,p,p))
if(c<b||c>t)H.D(P.aa(c,b,t,p,p))
s=c-b
if(s===0)return
r=[b,s]
C.a.L(r,H.af(d,e,p,H.X(d).i("k.E")).hf(0,s))
q.R("splice",r)},
$in:1,
$id:1,
$it:1}
P.dM.prototype={}
P.J.prototype={
n:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
P:function(a,b){if(b==null)return!1
return b instanceof P.J&&this.a==b.a&&this.b==b.b},
gA:function(a){var t=J.ab(this.a),s=J.ab(this.b)
return P.m8(P.dL(P.dL(0,t),s))},
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
gdU:function(a){return this.a+this.c},
gdn:function(a){return this.b+this.d},
n:function(a){var t=this
return"Rectangle ("+t.a+", "+t.b+") "+t.c+" x "+t.d},
P:function(a,b){var t,s,r,q=this
if(b==null)return!1
if(u.q.b(b)){t=q.a
s=J.W(b)
if(t===s.gbi(b)){r=q.b
t=r===s.gbr(b)&&t+q.c===s.gdU(b)&&r+q.d===s.gdn(b)}else t=!1}else t=!1
return t},
gA:function(a){var t=this,s=t.a,r=C.e.gA(s),q=t.b,p=C.e.gA(q)
s=C.e.gA(s+t.c)
q=C.e.gA(q+t.d)
return P.m8(P.dL(P.dL(P.dL(P.dL(0,r),p),s),q))}}
P.bw.prototype={
gbi:function(a){return this.a},
gbr:function(a){return this.b},
gbt:function(a){return this.c},
gbf:function(a){return this.d}}
P.cu.prototype={$icu:1}
P.ek.prototype={
a8:function(){var t,s,r,q,p=this.a.getAttribute("class"),o=P.dl(u.N)
if(p==null)return o
for(t=p.split(" "),s=t.length,r=0;r<s;++r){q=J.ku(t[r])
if(q.length!==0)o.l(0,q)}return o},
cr:function(a){this.a.setAttribute("class",a.ci(0," "))}}
P.l.prototype={
gds:function(a){return new P.ek(a)},
gdr:function(a){return new P.eB(a,new W.al(a))},
V:function(a,b,c,d){var t,s,r,q,p,o=H.h([],u.eO)
C.a.l(o,W.m7(null))
C.a.l(o,W.mc())
C.a.l(o,new W.fK())
c=new W.e7(new W.dt(o))
t='<svg version="1.1">'+H.a(b)+"</svg>"
o=document
s=o.body
r=(s&&C.m).fF(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.al(r)
p=o.gaw(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
cb:function(a,b,c,d,e){throw H.b(P.x("Cannot invoke insertAdjacentHtml on SVG."))},
gdJ:function(a){return new W.aw(a,"click",!1,u.C)},
gdM:function(a){return new W.aw(a,"mousedown",!1,u.C)},
gdN:function(a){return new W.aw(a,"touchstart",!1,u.du)},
$il:1}
Z.hM.prototype={
gdL:function(a){var t,s=this
if(s.z==null)s.sd4(P.cx(new Z.hR(s),!0,u.D))
t=s.z
t.toString
return new P.ah(t,H.i(t).i("ah<1>"))},
gdK:function(a){var t,s=this
if(s.ch==null)s.sd0(P.cx(new Z.hQ(s),!0,u.D))
t=s.ch
t.toString
return new P.ah(t,H.i(t).i("ah<1>"))},
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
t.c=t.b=t.a=t.d=null}if(!c&&b!=null)Z.oQ(q,b)
p=q.ch
if(p!=null)p.l(0,Z.ly(a,$.a_,c))
if(a!=null)a.preventDefault()
if(u.V.b(a))q.fk($.a_.b)
p=$.a_
J.bK(p.b).a9(0,q.r)
p=document.body
p.classList.remove("dnd-drag-occurring")}q.fc()},
eR:function(a,b){return this.ak(a,b,!1)},
fk:function(a){var t=J.nt(a),s=t.$ti,r=s.i("~(1)").a(new Z.hO())
u.M.a(null)
P.nV(new Z.hP(W.z(t.a,t.b,r,!1,s.c)),u.P)},
fc:function(){C.a.t(this.cy,new Z.hN())
Z.m1()
$.a_=null},
ez:function(){var t,s
window.getSelection().removeAllRanges()
try{t=document.activeElement
if(u.cJ.b(t))J.ld(t,0,0)
else if(u.p.b(t))J.ld(t,0,0)}catch(s){H.L(s)}},
sd4:function(a){this.z=u.c6.a(a)},
sd0:function(a){this.ch=u.c6.a(a)},
sbL:function(a){this.cx=u.O.a(a)}}
Z.hR.prototype={
$0:function(){this.a.sd4(null)
return null},
$S:1}
Z.hQ.prototype={
$0:function(){this.a.sd0(null)
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
$1:function(a){return u.a1.a(a).ha(0)},
$S:50}
Z.bQ.prototype={}
Z.jf.prototype={
cO:function(a){u.H.a(a)
return a},
sbU:function(a,b){this.e=u.H.a(b)}}
Z.el.prototype={
eb:function(a){Z.nF(new Z.h7(this,u.H.a(a)))},
cu:function(a){var t,s,r,q=this
u.H.a(a)
t=q.a.style
s=a.a
if(q.c==null)q.dq()
r=q.c
if(typeof s!=="number")return s.E()
if(typeof r!=="number")return H.a0(r)
r=H.a(s-r)+"px"
t.left=r
t=q.a.style
s=a.b
if(q.b==null)q.dq()
r=q.b
if(typeof s!=="number")return s.E()
if(typeof r!=="number")return H.a0(r)
r=H.a(s-r)+"px"
t.top=r},
dq:function(){var t,s=this.a
s.toString
t=window.getComputedStyle(s,"")
s=P.fZ(C.d.dT(t.marginLeft,"px",""))
this.c=s==null?0:s
s=P.fZ(C.d.dT(t.marginTop,"px",""))
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
Z.b9.prototype={
bC:function(a){this.cf()
C.a.t(this.c.cx,new Z.jg())},
fR:function(){var t=this.b,s=window,r=u.dj.a(new Z.jh(this))
u.M.a(null)
C.a.l(t,W.z(s,"keydown",r,!1,u.cf))
C.a.l(t,W.z(window,"blur",u.Q.a(new Z.ji(this)),!1,u.B))},
ca:function(a,b){var t,s=this
u.H.a(b)
t=s.c
t=new Z.jf(t.a,u.h.a(W.M(a.currentTarget)),b,t.b,!1,!1)
t.sbU(0,b)
$.a_=t
s.ce()
s.cd()
s.cc()
s.fR()},
c9:function(a,b,c){var t,s,r,q,p,o,n,m,l="pointer-events",k=u.H
k.a(b)
k.a(c)
t=$.a_
t.sbU(0,t.cO(b))
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
r.cu(new P.J(0,0,k))
n=U.d5(r.a)
r.cu(U.d5(q).E(0,n))
q=r.a.style
q.toString
r.d=q.getPropertyValue(C.h.ay(q,l))
r=r.a.style
r.toString
C.h.aQ(r,C.h.ay(r,l),"none","")}k=t.z
if(k!=null)k.l(0,Z.ly(a,$.a_,!1))
k=$.a_
J.bK(k.b).l(0,t.r)
k=document.body
k.classList.add("dnd-drag-occurring")
t.ez()}}else{m=u.h.a(this.eL(c))
t=this.c
s=t.b
if(s!=null){r=$.a_
q=r.c
r=r.e
k.a(q)
s.eb(k.a(r).E(0,q))
s=s.a.style
s.visibility="visible"}Z.oR(t,m)}},
c8:function(a,b,c,d){var t=u.H
t.a(c)
t.a(d)
t=$.a_
t.sbU(0,t.cO(c))
this.c.eR(a,this.cX(d,b))},
ha:function(a){var t=this.b
C.a.t(t,new Z.jj())
C.a.sk(t,0)},
cY:function(a){var t,s
u.H.a(a)
t=document
s=t.elementFromPoint(J.cS(a.a),J.cS(a.b))
return s==null?t.body:s},
cX:function(a,b){var t,s,r=this
u.H.a(a)
if(b==null)b=r.cY(a)
t=r.c.b
if(t!=null){s=t.a
s=s!=null&&H.as(s.contains(u.A.a(b)))}else s=!1
if(s){s=t.a.style
s.visibility="hidden"
b=r.cY(a)
t=t.a.style
t.visibility="visible"}return r.d8(a,b)},
eL:function(a){return this.cX(a,null)},
d8:function(a,b){u.H.a(a)
return u.h.b(b)&&(b.shadowRoot||b.webkitShadowRoot)!=null&&H.as(b.hasAttribute("dnd-retarget"))?this.d8(a,(b.shadowRoot||b.webkitShadowRoot).elementFromPoint(J.cS(a.a),J.cS(a.b))):b},
bO:function(a){var t=u.h.b(a)&&J.ny(a,this.c.f)
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
Z.fO.prototype={
cf:function(){C.a.t(this.c.cx,new Z.k1(this))},
ce:function(){var t=document,s=u.gn.a(new Z.k_(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"touchmove",s,!1,u.T))},
cd:function(){var t=document,s=u.gn.a(new Z.jZ(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"touchend",s,!1,u.T))},
cc:function(){var t=document,s=u.gn.a(new Z.jY(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"touchcancel",s,!1,u.T))},
fW:function(a){u.H.a(a).E(0,$.a_.c)
return!1}}
Z.k1.prototype={
$1:function(a){var t=this.a,s=J.nv(u.h.a(a)),r=s.$ti,q=r.i("~(1)").a(new Z.k0(t))
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
if(!s.bO(W.M(t[0].target)))return
t=a.touches
if(0>=t.length)return H.o(t,0)
t=t[0]
s.ca(a,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),u.H))},
$S:11}
Z.k_.prototype={
$1:function(a){var t,s,r=this
u.T.a(a)
if(a.touches.length>1){r.a.c.ak(a,null,!0)
return}if(!$.a_.f){t=a.changedTouches
if(0>=t.length)return H.o(t,0)
t=t[0]
t=r.a.fW(new P.J(C.c.D(t.pageX),C.c.D(t.pageY),u.H))}else t=!1
if(t){r.a.c.ak(a,null,!0)
return}t=a.changedTouches
if(0>=t.length)return H.o(t,0)
t=t[0]
s=u.H
r.a.c9(a,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),s),new P.J(C.c.D(t.clientX),C.c.D(t.clientY),s))
a.preventDefault()},
$S:11}
Z.jZ.prototype={
$1:function(a){var t,s
u.T.a(a)
t=a.changedTouches
if(0>=t.length)return H.o(t,0)
t=t[0]
s=u.H
this.a.c8(a,null,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),s),new P.J(C.c.D(t.clientX),C.c.D(t.clientY),s))},
$S:11}
Z.jY.prototype={
$1:function(a){this.a.c.ak(u.T.a(a),null,!0)},
$S:11}
Z.fC.prototype={
cf:function(){C.a.t(this.c.cx,new Z.jF(this))},
ce:function(){var t=document,s=u.a6.a(new Z.jD(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"mousemove",s,!1,u.V))},
cd:function(){var t=document,s=u.a6.a(new Z.jC(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"mouseup",s,!1,u.V))},
cc:function(){}}
Z.jF.prototype={
$1:function(a){var t=this.a,s=J.nu(u.h.a(a)),r=s.$ti,q=r.i("~(1)").a(new Z.jE(t))
u.M.a(null)
C.a.l(t.a,W.z(s.a,s.b,q,!1,r.c))},
$S:15}
Z.jE.prototype={
$1:function(a){var t,s
u.V.a(a)
if($.a_!=null)return
if(a.button!==0)return
t=this.a
if(!t.bO(W.M(a.target)))return
s=u.h.a(W.M(a.target))
if(!(u.d2.b(s)||u.p.b(s)||u.cJ.b(s)||u.hb.b(s)||u.fW.b(s)))a.preventDefault()
t.ca(a,new P.J(a.pageX,a.pageY,u.H))},
$S:2}
Z.jD.prototype={
$1:function(a){var t
u.V.a(a)
t=u.H
this.a.c9(a,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:2}
Z.jC.prototype={
$1:function(a){var t
u.V.a(a)
t=u.H
this.a.c8(a,W.M(a.target),new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:2}
Z.fF.prototype={
cf:function(){C.a.t(this.c.cx,new Z.jL(this))},
ce:function(){var t=document,s=u.Q.a(new Z.jJ(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"pointermove",s,!1,u.B))},
cd:function(){var t=document,s=u.Q.a(new Z.jI(this))
u.M.a(null)
C.a.l(this.b,W.z(t,"pointerup",s,!1,u.B))},
cc:function(){var t=document,s=u.Q.a(new Z.jH(this))
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
if(!t.bO(W.M(a.target)))return
s=u.h.a(W.M(a.target))
if(!(u.d2.b(s)||u.p.b(s)||u.cJ.b(s)||u.hb.b(s)||u.fW.b(s)))a.preventDefault()
t.ca(a,new P.J(a.pageX,a.pageY,u.H))},
$S:3}
Z.jJ.prototype={
$1:function(a){var t
u.et.a(a)
t=u.H
this.a.c9(a,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:3}
Z.jI.prototype={
$1:function(a){var t
u.et.a(a)
t=u.H
this.a.c8(a,null,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:3}
Z.jH.prototype={
$1:function(a){this.a.c.ak(a,null,!0)},
$S:3}
Z.ez.prototype={
gan:function(a){var t,s=this
if(s.d==null)s.sd1(P.cx(new Z.hT(s),!0,u.k))
t=s.d
t.toString
return new P.ah(t,H.i(t).i("ah<1>"))},
gh1:function(a){var t,s=this
if(s.e==null)s.sd3(P.cx(new Z.hV(s),!0,u.k))
t=s.e
t.toString
return new P.ah(t,H.i(t).i("ah<1>"))},
gao:function(a){var t,s=this
if(s.f==null)s.sd2(P.cx(new Z.hU(s),!0,u.k))
t=s.f
t.toString
return new P.ah(t,H.i(t).i("ah<1>"))},
gap:function(a){var t,s=this
if(s.r==null)s.sd5(P.cx(new Z.hW(s),!0,u.k))
t=s.r
t.toString
return new P.ah(t,H.i(t).i("ah<1>"))},
f2:function(a){var t,s,r,q,p=this
u.h.a(a)
t=p.y
s=$.nf()
r=s.a
s=H.i(s)
q=s.i("~(1)").a(p.geS())
u.M.a(null)
C.a.l(t,W.z(a,r,q,!1,s.c))
s=$.nh()
q=H.i(s)
C.a.l(t,W.z(a,s.a,q.i("~(1)").a(p.geW()),!1,q.c))
q=$.ng()
s=H.i(q)
C.a.l(t,W.z(a,q.a,s.i("~(1)").a(p.geU()),!1,s.c))
s=$.ne()
q=H.i(s)
C.a.l(t,W.z(a,s.a,q.i("~(1)").a(p.geY()),!1,q.c))},
eT:function(a){var t,s
u.V.a(a)
t=a.relatedTarget
if(W.M(t)!=null&&H.as(u.h.a(W.M(a.currentTarget)).contains(u.A.a(W.M(t)))))return
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aM)if(t.a==$.ex)t=t.b||$.et
else t=!1
else t=!1
if(t){t=this.d
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.at(s.e))}J.bK(u.h.a(W.M(a.currentTarget))).l(0,"dnd-over")}else J.bK(u.h.a(W.M(a.currentTarget))).l(0,"dnd-invalid")},
eX:function(a){var t,s
u.V.a(a)
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aM)if(t.a==$.ex)t=t.b||$.et
else t=!1
else t=!1
if(t){t=this.e
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.at(s.e))}}},
eV:function(a){var t,s
u.V.a(a)
t=a.relatedTarget
if(W.M(t)!=null&&H.as(u.h.a(W.M(a.currentTarget)).contains(u.A.a(W.M(t)))))return
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aM)if(t.a==$.ex)t=t.b||$.et
else t=!1
else t=!1
if(t){t=this.f
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.at(s.e))}J.bK(u.h.a(W.M(a.currentTarget))).a9(0,"dnd-over")}else J.bK(u.h.a(W.M(a.currentTarget))).a9(0,"dnd-invalid")},
eZ:function(a){var t,s
u.V.a(a)
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aM)if(t.a==$.ex)t=t.b||$.et
else t=!1
else t=!1
if(t){t=this.r
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.at(s.e))}}},
fH:function(){var t=this.y
C.a.t(t,new Z.hS())
C.a.sk(t,0)},
sd1:function(a){this.d=u.g.a(a)},
sd3:function(a){this.e=u.g.a(a)},
sd2:function(a){this.f=u.g.a(a)},
sd5:function(a){this.r=u.g.a(a)},
sbL:function(a){this.x=u.O.a(a)}}
Z.hT.prototype={
$0:function(){this.a.sd1(null)
return null},
$S:1}
Z.hV.prototype={
$0:function(){this.a.sd3(null)
return null},
$S:1}
Z.hU.prototype={
$0:function(){this.a.sd2(null)
return null},
$S:1}
Z.hW.prototype={
$0:function(){this.a.sd5(null)
return null},
$S:1}
Z.hS.prototype={
$1:function(a){return u.b_.a(a).Y()},
$S:22}
Z.at.prototype={}
Z.ei.prototype={}
U.b1.prototype={
gT:function(){var t=this.c
return H.a(t.fx.c)+"-"+H.a(t.b)+"-"+H.a(this.b)},
bx:function(){return H.a(this.a2())+H.a(this.e)},
ax:function(a,b){var t,s=this,r=s.b
if(r!=null){t=s.c
if(r>=t.Q)t.Q=r+1}else s.b=s.c.Q++},
aI:function(a,b,c){this.b=b.b
this.d=b.d
this.e=b.e},
dB:function(){var t,s,r,q=this,p=document.createElement("div")
p.innerText=q.bx()
p.classList.add("nt-attribute-value")
t=q.c
s=t.aG()+"-attribute"
p.classList.add(s)
s=t.cx
if(s!=null){r=p.style
r.color=s}t=t.cy
if(t!=null){s=p.style
s.backgroundColor=t}t=u.C
s=t.i("~(1)").a(new U.h5(q,new U.h6(q,p)))
u.M.a(null)
W.z(p,"click",s,!1,t.c)
return p}}
U.h6.prototype={
$0:function(){this.b.innerText=this.a.bx()},
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
this.a.aH(C.c.c6(r+q+o),C.c.c6(n+m+p),this.b)},
$S:2}
U.bU.prototype={
ga0:function(a){return this.f},
a2:function(){return U.cZ(this.r.c)},
au:function(a){var t,s,r,q=this
if(a==null){t=new U.br(q.c.fx)
t.c=new U.ad(t,q.f,H.h([],u.U))
q.r=t}if(P.fZ(a)==null&&!C.a.F(H.h(["true","false"],u.s),a))throw H.b(P.cT(a,"valueString","Expression values can only be set to numbers or booleans."))
t=new U.br(q.c.fx)
s=u.U
t.c=new U.ad(t,q.f,H.h([],s))
q.r=t
r=new U.ad(t,q.f,H.h([],s))
r.b=a
q.r.c=r},
as:function(){return this.x},
aW:function(a){this.x=a},
aC:function(a,b,c){var t,s,r=this,q=new U.bU(new U.a1(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,b)
q.aI(b,r,c)
q.x=r.x
q.f=r.f
t=r.r
s=new U.br(null)
s.a=t.a
t=t.c
if(t!=null)s.c=U.lE(s,t)
q.r=s
if(!c)q.au(q.x)
return q},
aX:function(){return!1},
aH:function(a,b,c){var t,s,r,q,p,o,n=this,m=".nt-param-confirm",l="querySelectorAll",k="click",j=n.c.fx,i=j.r
i.classList.add("show")
t=j.x
j=t.style
s=""+b+"px"
j.top=s
t.classList.remove("small")
C.b.K(t,"")
C.b.a3(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">\n          <div class="nt-param-label">'+H.a(n.d)+':</div>\n        </div>\n        <div class="nt-param-row">\n          <div id="nt-expression-'+n.gT()+'" class="nt-expression-root"></div>\n        </div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
j=u.C
s=j.i("~(1)").a(new U.i7())
u.M.a(null)
r=W.z(t,k,s,!1,j.c)
j=u.h
s=document
H.aS(j,j,"T",l)
q=u.W
p=u.r
o=u.I
new W.aR(p.a(new W.am(s.querySelectorAll(m),q)),!1,k,o).u(new U.i8(n,r,i,c))
H.aS(j,j,"T",l)
new W.aR(p.a(new W.am(s.querySelectorAll(m),q)),!1,"mousedown",o).u(new U.i9())
H.aS(j,j,"T",l)
new W.aR(p.a(new W.am(s.querySelectorAll(m),q)),!1,"mouseup",o).u(new U.ia())
H.aS(j,j,"T",l)
new W.aR(p.a(new W.am(s.querySelectorAll(".nt-param-cancel"),q)),!1,k,o).u(new U.ib(r,i))
o=n.r
o.b=s.querySelector("#nt-expression-"+n.gT())
o.cm()}}
U.i7.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aS(t,t,"T","querySelectorAll")
s=new W.am(s.querySelectorAll(".nt-pulldown-menu"),u.W)
s.t(s,new U.i6())},
$S:2}
U.i6.prototype={
$1:function(a){return J.eg(u.h.a(a))},
$S:16}
U.i8.prototype={
$1:function(a){var t,s,r,q=this
u.V.a(a)
t=u.h
s=document
H.aS(t,t,"T","querySelectorAll")
if(s.querySelectorAll(".nt-expression.empty").length>0)return!1
q.b.Y()
q.c.classList.remove("show")
q.d.$0()
t=q.a
r=U.cf(t)
s=t.c
s.fx.O(new U.bo(s.b,s.c,t.b,t.f,U.cZ(t.r.c),r))
return!1},
$S:10}
U.i9.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aS(t,t,"T","querySelectorAll")
s=new W.am(s.querySelectorAll(".nt-expression.empty"),u.W)
s.t(s,new U.i5())},
$S:2}
U.i5.prototype={
$1:function(a){return J.bK(u.h.a(a)).l(0,"warn")},
$S:32}
U.ia.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aS(t,t,"T","querySelectorAll")
s=new W.am(s.querySelectorAll(".nt-expression.empty"),u.W)
s.t(s,new U.i4())},
$S:2}
U.i4.prototype={
$1:function(a){return J.bK(u.h.a(a)).a9(0,"warn")},
$S:32}
U.ib.prototype={
$1:function(a){u.V.a(a)
this.a.Y()
this.b.classList.remove("show")},
$S:2}
U.de.prototype={
ga0:function(a){return"int"},
aC:function(a,b,c){var t=new U.de(new U.a1(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,b)
t.aI(b,this,c)
t.cC(b,this,c)
return t}}
U.bY.prototype={
a2:function(){var t,s=this.f
if(s==null)return""
t=C.c.hh(s,1)
return C.d.fO(t,".0")?C.d.ab(t,0,t.length-2):t},
au:function(a){return this.f=U.bI(a,0)},
as:function(){var t=this.r
return t==null?"":C.c.n(t)},
aW:function(a){return this.r=U.bI(a,null)},
cC:function(a,b,c){var t,s,r=this
r.x=b.x
r.y=b.y
t=r.r=b.r
if(!c){s=b.f
r.f=s==null?t:s}},
aX:function(){return!1},
aH:function(a,b,c){var t,s,r,q,p,o,n,m=this,l="querySelectorAll",k=m.c.fx,j=k.r
j.classList.add("show")
t=k.x
k=t.style
s=""+b+"px"
k.top=s
t.classList.remove("small")
C.b.K(t,"")
C.b.a3(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">'+('      <div class="nt-param-name">'+H.a(m.d)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+m.gT()+'" type="number" step="'+H.a(m.y)+'" value="'+H.a(m.f)+'">\n        <span class="nt-param-unit">'+H.a(m.e)+"</span>\n      </div>\n    ")+'</div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
k="#nt-param-label-"+m.gT()
s=document
r=u.a.a(s.querySelector(k))
q=u.p.a(s.querySelector("#nt-param-"+m.gT()))
k=u.h
H.aS(k,k,"T",l)
p=u.W
o=u.r
n=u.I
new W.aR(o.a(new W.am(s.querySelectorAll(".nt-param-confirm"),p)),!1,"click",n).u(new U.iH(m,q,j,c))
H.aS(k,k,"T",l)
new W.aR(o.a(new W.am(s.querySelectorAll(".nt-param-cancel"),p)),!1,"click",n).u(new U.iI(j))
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
if(t!=null)q.a.f=U.bI(t.value,0)
q.c.classList.remove("show")
q.d.$0()
t=q.a
s=U.cf(t)
r=t.c
r.fx.O(new U.bo(r.b,r.c,t.b,t.ga0(t),t.f,s))},
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
$1:function(a){J.eh(this.a,this.b.value)},
$S:3}
U.iK.prototype={
$1:function(a){J.eh(this.a,this.b.value)},
$S:3}
U.cs.prototype={
ga0:function(a){return"range"},
aC:function(a,b,c){var t=this,s=new U.cs(new U.a1(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,b)
s.aI(b,t,c)
s.cC(b,t,c)
s.db=t.db
s.dx=t.dx
return s},
aH:function(a,b,c){var t,s,r,q,p,o,n=this,m=n.c.fx,l=m.r
l.classList.add("show")
t=m.x
m=t.style
s=""+b+"px"
m.top=s
t.classList.remove("small")
C.b.K(t,"")
m=document
r=m.createElement("div")
r.className="nt-param-table"
t.appendChild(r)
C.b.a3(r,'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.a(n.d)+':\n            <label id="nt-param-label-'+n.gT()+'" for="nt-param-'+n.gT()+'">'+H.a(n.f)+'</label>\n            <span class="nt-param-unit">'+H.a(n.e)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+n.gT()+'" type="range" value="'+H.a(n.f)+'" min="'+H.a(n.db)+'" max="'+H.a(n.dx)+'" step="'+H.a(n.y)+'">\n          </div>\n        </div>\n      ')
q=u.a.a(m.querySelector("#nt-param-label-"+n.gT()))
p=u.p.a(m.querySelector("#nt-param-"+n.gT()))
if(p!=null&&q!=null){m=u.E
s=m.i("~(1)")
o=s.a(new U.iN(n,p,l,c))
u.M.a(null)
m=m.c
W.z(p,"change",o,!1,m)
W.z(p,"input",s.a(new U.iO(q,p)),!1,m)}}}
U.iN.prototype={
$1:function(a){var t,s,r=this,q=r.a
q.f=U.bI(r.b.value,0)
r.c.classList.remove("show")
r.d.$0()
t=U.cf(q)
s=q.c
s.fx.O(new U.bo(s.b,s.c,q.b,"range",q.f,t))
a.stopPropagation()},
$S:3}
U.iO.prototype={
$1:function(a){J.eh(this.a,this.b.value)},
$S:3}
U.bh.prototype={
gfI:function(){var t=this.b
return t==null||t===""?this.a:t}}
U.cv.prototype={
ga0:function(a){return"select"},
a2:function(){var t=this.f
return t==null?"":t},
au:function(a){this.f=a},
as:function(){return this.r},
aW:function(a){this.r=a},
bx:function(){return H.a(this.ge8())+H.a(this.e)+" \u25be"},
ge8:function(){var t=this.y,s=H.C(t),r=new H.ag(t,s.i("w(1)").a(new U.iQ(this)),s.i("ag<1>"))
if(r.gk(r)===1)return r.C(0,0).gfI()
else return this.f},
eo:function(a,b,c){var t,s=this
s.r=b.r
s.x=b.x
C.a.t(b.y,new U.iP(s))
if(!c){t=b.f
s.f=t==null?s.r:t}},
aC:function(a,b,c){return U.om(b,this,c)},
aX:function(){switch(this.x){case"always-quote":return!0
case"never-quote":return!1
case"smart-quote":default:return P.fZ(this.f)==null&&!C.a.F(H.h(["true","false"],u.s),this.f)}},
aH:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.fx,f=g.r
f.classList.add("show")
t=g.x
g=t.style
s=""+b+"px"
g.top=s
t.classList.add("small")
C.b.K(t,"")
g=document
r=g.createElement("div")
r.className="nt-param-table"
t.appendChild(r)
for(s=h.y,q=s.length,p=u.C,o=p.i("~(1)"),n=u.M,p=p.c,m=0;m<s.length;s.length===q||(0,H.A)(s),++m){l=s[m]
k=g.createElement("div")
k.className="nt-param-row"
j=g.createElement("div")
j.className="nt-select-option"
i=l.b
C.b.K(j,i==null||i===""?l.a:i)
if(l.a==h.f)j.classList.add("selected")
i=o.a(new U.iR(h,l,f,c))
n.a(null)
W.z(j,"click",i,!1,p)
k.appendChild(j)
r.appendChild(k)}}}
U.iQ.prototype={
$1:function(a){var t
u.fn.a(a)
if(a.a==this.a.f){t=a.b
t=t!=null&&t!==""}else t=!1
return t},
$S:41}
U.iP.prototype={
$1:function(a){return C.a.l(this.a.y,u.fn.a(a))},
$S:42}
U.iR.prototype={
$1:function(a){var t,s,r,q=this
u.V.a(a)
t=q.a
t.f=q.b.a
q.c.classList.remove("show")
q.d.$0()
s=U.cf(t)
r=t.c
r.fx.O(new U.bo(r.b,r.c,t.b,"select",t.f,s))
a.stopPropagation()},
$S:2}
U.cC.prototype={
ga0:function(a){return"text"},
a2:function(){var t=this.f
return t==null?"":t},
au:function(a){this.f=a},
as:function(){return this.r},
aW:function(a){this.r=a},
aC:function(a,b,c){var t,s,r=new U.cC(new U.a1(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,b)
r.aI(b,this,c)
t=r.r=this.r
if(!c){s=this.f
r.f=s==null||s===""?t:s}return r},
aX:function(){return!0},
aH:function(a,b,c){var t,s,r,q,p,o,n,m,l=this,k="querySelectorAll",j=l.c.fx,i=j.r
i.classList.add("show")
t=j.x
j=t.style
s=""+b+"px"
j.top=s
t.classList.remove("small")
C.b.K(t,"")
j=l.f
if(j==null)j=""
r=new P.ck().dw(j)
C.b.a3(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">'+('      <input class="nt-param-input" id="nt-param-'+l.gT()+'" type="text" value="'+r+'">\n      <span class="nt-param-unit">'+H.a(l.e)+"</span>\n    ")+'</div>\n      </div>\n      <button class="nt-param-confirm">OK</button>\n      <button class="nt-param-cancel">Cancel</button>\n    ')
j="#nt-param-label-"+l.gT()
s=document
q=u.a.a(s.querySelector(j))
p=u.p.a(s.querySelector("#nt-param-"+l.gT()))
j=u.h
H.aS(j,j,"T",k)
o=u.W
n=u.r
m=u.I
new W.aR(n.a(new W.am(s.querySelectorAll(".nt-param-confirm"),o)),!1,"click",m).u(new U.iU(l,p,i,c))
H.aS(j,j,"T",k)
new W.aR(n.a(new W.am(s.querySelectorAll(".nt-param-cancel"),o)),!1,"click",m).u(new U.iV(i))
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
if(t!=null)q.a.f=t.value
q.c.classList.remove("show")
q.d.$0()
t=q.a
s=U.cf(t)
r=t.c
r.fx.O(new U.bo(r.b,r.c,t.b,"text",t.f,s))},
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
$1:function(a){J.eh(this.a,this.b.value)},
$S:3}
U.iX.prototype={
$1:function(a){J.eh(this.a,this.b.value)},
$S:3}
U.h8.prototype={
aa:function(a){var t,s,r,q
try{s=this.a
if(s.length===0)return 0
r=H.C(s)
r=new H.T(s,r.i("e(1)").a(new U.ha(a)),r.i("T<1,e>")).cl(0,new U.hb())
return r}catch(q){t=H.L(q)
P.ed("here is the fail "+H.a(J.B(t)))
throw q}},
a1:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r].a1(a)
if(q!=null)return q}return null},
sc_:function(a){this.a=u.v.a(a)}}
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
U.cW.prototype={
sav:function(a){this.r=u.i.a(a)}}
U.cX.prototype={
bY:function(a,b){var t,s,r,q,p,o,n=this
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
U.an.prototype={
gaR:function(){var t=this.fr
return t==="starter"||t==="anywhere"},
c0:function(a,b){var t,s,r,q,p=this,o=U.li(p.fx,p.b,p.d,b)
o.d=p.d
o.e=p.e
o.f=p.f
o.r=p.r
o.cx=p.cx
o.cy=p.cy
o.db=p.db
o.dx=p.dx
o.dy=p.dy
o.fr=p.fr
for(t=p.x,t=t.gar(t),s=H.i(t),s=new H.a6(J.y(t.a),t.b,s.i("@<1>").q(s.Q[1]).i("a6<1,2>")),t=o.x;s.m();){r=s.a.aC(0,o,b)
t.j(0,r.b,r)}for(t=p.y,t=t.gar(t),s=H.i(t),s=new H.a6(J.y(t.a),t.b,s.i("@<1>").q(s.Q[1]).i("a6<1,2>")),t=o.y;s.m();){q=s.a.aC(0,o,b)
t.j(0,q.b,q)}return o},
aa:function(a){var t,s=this.b==a?1:0,r=this.ch
if(r.length!==0){t=H.C(r)
t=new H.T(r,t.i("e(1)").a(new U.hi(a)),t.i("T<1,e>")).cl(0,new U.hj())
if(typeof t!=="number")return H.a0(t)
s+=t}return s},
a1:function(a){var t,s,r,q
if(this.c==a)return this
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r].a1(a)
if(q!=null)return q}return null},
e7:function(a,b){var t=this.x
if(t.H(b))return t.h(0,b)
t=this.y
if(t.H(b))return t.h(0,b)
throw H.b(P.bT("Attribute with given ID not found on block: "+H.a(b)))},
aG:function(){var t=this
if(t.gaR())return H.a(t.fx.c)+"-block-starter"
if(t.ch.length!==0)return H.a(t.fx.c)+"-block-container"
return H.a(t.fx.c)+"-block-command"},
a5:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
b.go=a0
b.fy=a
t=document
s=t.createElement("div")
b.k2=s
s.classList.add("nt-block")
r=b.aG()
b.k2.classList.add(r)
if(b.ch.length!==0)b.k2.classList.add("nt-block-with-clauses")
U.ky(b,b.k2)
q=t.createElement("div")
q.classList.add("nt-block-left-bar")
s=r+"-color"
q.classList.add(s)
s=b.cx
if(s!=null){p=q.style
p.backgroundColor=s}s=q.style
p=b.y
o=p.a
n=b.ch.length
o=""+(4+o+n*2)
s.toString
C.h.aQ(s,C.h.ay(s,"grid-row-end"),o,"")
b.k2.appendChild(q)
m=t.createElement("div")
o=r+"-color"
m.classList.add(o)
o=b.cx
if(o!=null){s=m.style
s.backgroundColor=o}if(b.ch.length!==0)m.classList.add("nt-block-clause-header")
else m.classList.add("nt-block-header")
b.k2.appendChild(m)
b.k3=t.createElement("div")
b.e_()
b.k3.classList.add("nt-block-action")
m.appendChild(b.k3)
l=t.createElement("div")
l.classList.add("nt-block-params")
m.appendChild(l)
for(s=b.x,s=s.gar(s),o=H.i(s),o=new H.a6(J.y(s.a),s.b,o.i("@<1>").q(o.Q[1]).i("a6<1,2>"));o.m();)l.appendChild(o.a.dB())
k=t.createElement("div")
k.classList.add("nt-block-properties")
m.appendChild(k)
if(p.a>0){s=b.z!=="hidden"
o=new U.fc(s,new U.hg(b,k))
n=o.a=t.createElement("div")
n.classList.add("nt-toggle")
n.innerText=s?"\u25b2":"\u25bc"
j=u.C
i=j.i("~(1)").a(o.gfz(o))
u.M.a(null)
W.z(n,"click",i,!1,j.c)
b.k4=o
if(b.z==="hidden")k.classList.add("nt-block-properties-hidden")
b.k3.appendChild(b.k4.a)}for(s=p.gar(p),p=H.i(s),p=new H.a6(J.y(s.a),s.b,p.i("@<1>").q(p.Q[1]).i("a6<1,2>"));p.m();){s=p.a
s.toString
h=t.createElement("div")
h.classList.add("nt-property")
g=t.createElement("div")
g.classList.add("nt-property-name")
g.innerText="\u2022 "+H.a(s.d)
h.appendChild(g)
h.appendChild(s.dB())
s=r+"-color"
h.classList.add(s)
s=b.cx
if(s!=null){o=h.style
o.backgroundColor=s}k.appendChild(h)}s=b.ch
p=s.length
if(p!==0){if(0>=p)return H.o(s,0)
f=s[0].a5(b.fy,m)
b.k2.appendChild(f)}for(s=b.ch,s=H.af(s,1,null,H.C(s).c),s=new H.N(s,s.gk(s),s.$ti.i("N<a9.E>"));s.m();){p=s.d
e=t.createElement("div")
e.classList.add("nt-clause-divider")
o=r+"-color"
e.classList.add(o)
o=b.cx
if(o!=null){n=e.style
n.backgroundColor=o}b.k2.appendChild(e)
d=p.a5(b.fy,e)
b.k2.appendChild(d)}if(b.ch.length!==0){c=t.createElement("div")
c.classList.add("nt-clause-footer")
t=r+"-color"
c.classList.add(t)
t=b.cx
if(t!=null){s=c.style
s.backgroundColor=t}b.k2.appendChild(c)}U.lk(b,b.k2,new U.hh(b))
return b.k2},
e_:function(){var t,s,r,q,p=this,o=new P.aQ(""),n=p.r
if(n!=null&&C.d.dZ(n).length!==0){n=H.a(p.r)+"\n"
o.a=n
o.a=n+"\n"}n=p.go
t=n.b==="workspace-chain"&&n.e===0
s=p.fx
if(t){r=C.a.h(s.ch,n.a)
n=s.y
n.c7(o,0,r.a)
if(o.a.length===0)n.aS(o,0,p)}else s.y.aS(o,0,p)
n=o.a
q=new P.ck().dw(C.d.aF(n.charCodeAt(0)==0?n:n))
n=p.k3;(n&&C.b).a3(n,'<span title="'+q+'">'+H.a(p.d)+"</span>")},
N:function(){var t,s,r,q,p,o=this
o.k2.classList.remove("nt-drag-over")
o.k2.classList.remove("nt-block-clause-drag-over")
for(t=o.ch,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.A)(t),++q){p=t[q].N()
r=r||p}if((o.id||o.k1)&&!r){o.k2.classList.add("nt-drag-over")
r=!0}return r},
a4:function(){var t,s,r,q=this
q.k2.classList.remove("nt-drag-over")
q.k2.classList.remove("nt-block-clause-drag-over")
q.k1=q.id=!1
for(t=q.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].a4()},
bA:function(a){var t,s,r=this
U.lw(r,u.D.a(a))
t=H.h([],u.u)
C.a.l(t,r)
C.a.L(t,r.go.r)
U.hp(r.fy.e,t,!0,null)
s=r.fx
s.dR(r.go)
s.dD()},
c5:function(a){var t,s,r,q,p=this
u.D.a(a)
$.aM=!0
$.ew=$.eu=$.ev=!1
t=p.fx
t.al()
t.a4()
s=t.k3
if(s==null)return
r=u.i
t.sW(r.a(null))
q=p.go
switch(q.b){case"workspace-chain":if(q.e===0)t.dz(s,$.lu,$.lv)
else{t=C.a.h(t.ch,q.a)
q=p.go.e
r.a(s)
C.a.am(t.a,q,s)
t.a_()}break
case"block-clause":t=C.a.h(C.a.h(t.ch,q.a).a1(p.go.c).ch,p.go.d)
q=p.go.e
r.a(s)
C.a.am(t.a,q,s)
t.a_()
break}},
a7:function(a){var t,s,r,q,p,o=this
u.k.a(a)
$.aM=!0
t=o.fx
s=t.k3
r=u.i
t.sW(r.a(null))
q=o.go
switch(q.b){case"workspace-chain":q=C.a.h(t.ch,q.a)
p=o.go.e
if(typeof p!=="number")return p.v()
r.a(s)
C.a.am(q.a,p+1,s)
q.a_()
break
case"block-clause":q=C.a.h(C.a.h(t.ch,q.a).a1(o.go.c).ch,o.go.d)
p=o.go.e
if(typeof p!=="number")return p.v()
r.a(s)
C.a.am(q.a,p+1,s)
q.a_()
break}t.O(U.cc(J.aU(s,0)))
t.al()},
bo:function(){var t,s,r
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].hc()},
bn:function(){var t,s,r,q,p,o=this,n=o.k3
n.toString
C.b.K(n,"")
o.e_()
n=o.k4
if(n!=null)o.k3.appendChild(n.a)
for(n=o.ch,t=n.length,s=0;s<n.length;n.length===t||(0,H.A)(n),++s)for(r=n[s].a,q=r.length,p=0;p<r.length;r.length===q||(0,H.A)(r),++p)r[p].bn()},
sdt:function(a){this.ch=u.al.a(a)}}
U.hf.prototype={
$1:function(a){var t,s,r,q,p
u.ds.a(a)
t=this.a
s=t.ch
r=a.e
q=a.f
p=a.r
return C.a.l(s,new U.aD(new U.a1(H.h(["children","open","close"],u.s)),t,r,q,p,H.h([],u.u)))},
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
t.z=a?"shown":"hidden"
this.b.classList.toggle("nt-block-properties-hidden")
t.fx.O(U.cc(t))},
$S:49}
U.hh.prototype={
$1:function(a){return this.a.id=a},
$S:29}
U.hk.prototype={
$1:function(a){u.k.a(a)
return this.a.$1(!0)},
$S:4}
U.hl.prototype={
$1:function(a){u.k.a(a)
return this.a.$1(!1)},
$S:4}
U.aC.prototype={
a5:function(a,b){var t,s,r,q,p,o,n,m,l=this
l.r=b
t=document
s=t.createElement("div")
l.x=s
s.classList.add("nt-fragment")
r=Z.cj(l.x,l.f.k4)
r.gap(r).u(l.ga6())
r.gan(r).u(new U.hn(l))
r.gao(r).u(new U.ho(l))
t=t.createElement("div")
l.b=t
t.classList.add("nt-chain")
if(l.a.length===0)return l.b
for(t=u.i,q=0;s=l.a,q<s.length;q=n){p=s[q]
o=l.r
n=q+1
m=new U.cW()
s=t.a(H.af(s,n,null,H.C(s).c))
m.a=o
m.b="workspace-chain"
m.e=q
m.sav(s)
p.a5(a,m)}U.hp(l.b,s,!1,l.x)
l.e1(l.d,l.e)
return l.b},
e1:function(a,b){var t,s,r=this
r.d=a
r.e=b
t=r.b.style
s=H.a(a)+"px"
t.left=s
t=r.b.style
s=H.a(b)+"px"
t.top=s},
hb:function(a){var t,s,r,q,p,o,n
this.r=a
for(t=u.i,s=0;r=this.a,s<r.length;s=n){q=r[s]
p=q.go
o=this.r
n=s+1
r=H.af(r,n,null,H.C(r).c)
p.toString
t.a(r)
p.f=p.e=p.d=p.c=p.b=p.a=null
p.a=o
p.b="workspace-chain"
p.e=s
p.sav(r)
q.bo()}},
N:function(){var t,s,r,q,p,o=this
o.x.classList.remove("nt-drag-over")
for(t=o.a,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.A)(t),++q){p=t[q].N()
r=r||p}if(o.y&&!r){o.x.classList.add("nt-drag-over")
r=!0}return r},
a4:function(){var t,s,r
this.x.classList.remove("nt-drag-over")
this.y=!1
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].a4()},
a_:function(){var t,s,r,q,p,o,n,m=this
for(t=u.i,s=0;r=m.a,s<r.length;s=n){q=r[s]
p=q.go
o=m.r
n=s+1
r=H.af(r,n,null,H.C(r).c)
p.toString
t.a(r)
p.f=p.e=p.d=p.c=p.b=p.a=null
p.a=o
p.b="workspace-chain"
p.e=s
p.sav(r)
q.bo()}U.hp(m.b,r,!1,m.x)},
fL:function(){var t=this,s=t.a,r=s.length
if(r!==0){if(0>=r)return H.o(s,0)
s=!s[0].gaR()}else s=!0
if(!s)return
t.x.classList.add("show")
s=J.cS(t.e)
r=t.b.style
s=""+(s-40)+"px"
r.top=s},
a7:function(a){var t,s,r,q,p,o,n,m=this
u.k.a(a)
$.aM=!0
t=m.f
s=t.k3
r=u.i
t.sW(r.a(null))
q=J.aU(s,0)
p=U.d5(m.b)
o=a.d.E(0,p)
n=m.e
if(typeof n!=="number")return n.E()
m.e=n-40+J.c9(o.b)
r.a(s)
C.a.am(m.a,0,s)
m.a_()
t.O(U.cc(q))
t.al()}}
U.hn.prototype={
$1:function(a){u.k.a(a)
return this.a.y=!0},
$S:7}
U.ho.prototype={
$1:function(a){u.k.a(a)
return this.a.y=!1},
$S:7}
U.aD.prototype={
a5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=this,h=document.createElement("div")
i.b=h
h.classList.add("nt-clause")
h=i.d
t=h.fx
s=Z.cj(b,t.r1)
r=i.ga6()
s.gap(s).u(r)
s.gan(s).u(new U.hq(i))
s.gao(s).u(new U.hr(i))
q=Z.cj(i.b,t.r1)
q.gap(q).u(r)
q.gan(q).u(new U.hs(i))
q.gao(q).u(new U.ht(i))
if(i.a.length===0){i.ct()
return i.b}for(t=i.e,r=u.i,p=0;o=i.a,p<o.length;p=m){n=o[p]
m=p+1
l=H.af(o,m,null,H.C(o).c)
o=h.go.a
k=h.c
j=new U.cW()
r.a(l)
j.a=o
j.b="block-clause"
j.c=k
j.e=p
j.d=t
j.sav(l)
n.a5(a,j)}U.kw(i.b,o,"nt-block-clause",!1)
return i.b},
ct:function(){var t,s=this
s.b.classList.add("nt-clause-empty")
s.b.appendChild(U.lQ(!1,s))
t=document.createElement("div")
t.className="nt-clause-drop"
s.b.appendChild(t)
s.b.appendChild(U.lQ(!0,s))},
hc:function(){var t,s,r,q,p,o,n,m,l,k
for(t=this.d,s=this.e,r=u.i,q=0;p=this.a,q<p.length;q=k){o=p[q]
n=o.go
m=t.go.a
l=t.c
k=q+1
p=H.af(p,k,null,H.C(p).c)
n.toString
r.a(p)
n.f=n.e=n.d=n.c=n.b=n.a=null
n.a=m
n.b="block-clause"
n.c=l
n.e=q
n.d=s
n.sav(p)
o.bo()}},
a_:function(){var t,s,r,q,p,o,n,m,l,k=this,j=k.b
j.toString
C.b.K(j,"")
if(k.a.length===0){k.ct()
return}k.b.classList.remove("nt-clause-empty")
for(j=k.d,t=k.e,s=u.i,r=0;q=k.a,r<q.length;r=l){p=q[r]
o=p.go
n=j.go.a
m=j.c
l=r+1
q=H.af(q,l,null,H.C(q).c)
o.toString
s.a(q)
o.f=o.e=o.d=o.c=o.b=o.a=null
o.a=n
o.b="block-clause"
o.c=m
o.e=r
o.d=t
o.sav(q)
p.bo()}U.kw(k.b,q,"nt-block-clause",!1)},
N:function(){var t,s,r,q,p,o=this
o.b.classList.remove("nt-block-clause-drag-over")
t=o.a
s=t.length
if(s!==0){if(0>=s)return H.o(t,0)
t[0].k2.classList.remove("nt-block-clause-drag-over")}for(t=o.a,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.A)(t),++q){p=t[q].N()
r=r||p}if((o.x||o.y)&&!r){t=o.a
s=t.length
if(s===0)o.b.classList.add("nt-block-clause-drag-over")
else{if(0>=s)return H.o(t,0)
t[0].k2.classList.add("nt-block-clause-drag-over")}r=!0}return r},
a4:function(){var t,s,r,q=this
q.b.classList.remove("nt-block-clause-drag-over")
t=q.a
s=t.length
if(s!==0){if(0>=s)return H.o(t,0)
t[0].k2.classList.remove("nt-block-clause-drag-over")}q.y=q.x=!1
for(t=q.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].a4()},
a7:function(a){var t,s,r,q=this
u.k.a(a)
$.aM=!0
t=q.d.fx
s=t.k3
r=u.i
t.sW(r.a(null))
r.a(s)
C.a.am(q.a,0,s)
q.a_()
q.b.classList.remove("nt-clause-empty")
t.O(U.cc(J.aU(s,0)))}}
U.hq.prototype={
$1:function(a){u.k.a(a)
return this.a.y=!0},
$S:7}
U.hr.prototype={
$1:function(a){u.k.a(a)
return this.a.y=!1},
$S:7}
U.hs.prototype={
$1:function(a){u.k.a(a)
return this.a.x=!0},
$S:7}
U.ht.prototype={
$1:function(a){u.k.a(a)
return this.a.x=!1},
$S:7}
U.eD.prototype={}
U.hu.prototype={
dF:function(a,b,c){var t,s,r,q,p=this,o=p.c
if(c!=null)p.c=c
t=a.db.b
s=H.C(t)
r=s.i("aG<1,t<an>>")
q=p.fP(a,P.cm(new H.aG(new H.ag(t,s.i("w(1)").a(new U.hv(!0,a)),s.i("ag<1>")),s.i("t<an>(1)").a(new U.hw()),r),!0,r.i("d.E")))
p.c=o
return q},
fP:function(a,b){var t,s,r,q
u.eB.a(b)
t=new P.aQ("")
s=a.ch
r=H.h(s.slice(0),H.C(s).i("G<1>"))
C.a.cw(r,U.q8())
for(s=r.length,q=0;q<r.length;r.length===s||(0,H.A)(r),++q)this.dE(t,r[q].a,a.z,a.Q)
for(s=b.length,q=0;q<b.length;b.length===s||(0,H.A)(b),++q)this.dE(t,b[q],a.z,a.Q)
s=t.a
return s.charCodeAt(0)==0?s:s},
dE:function(a,b,c,d){var t,s,r=this
u.v.a(b)
t=J.az(b)
if(t.gM(b))return
s=t.h(b,0)
if(!s.gaR())return
r.e4(a,0,r.b.a,c)
r.aS(a,0,s)
r.c7(a,1,t.aY(b,1).aq(0))
r.e4(a,0,r.b.b,d)
a.a+="\n"},
c7:function(a,b,c){var t,s
u.v.a(c)
t=c.length
if(t===0)return
for(s=0;s<c.length;c.length===t||(0,H.A)(c),++s)this.aS(a,b,c[s])},
aS:function(a,b,c){var t,s,r,q,p,o,n,m,l=this,k=c.f
if(k==null){k=H.a(c.d)
for(t=c.x,s=0;s<t.a;++s)k+=" {"+s+"}"
for(t=c.y,s=0;s<t.a;++s)k+=" {P"+s+"}"}for(t=c.x,r=new H.ae(t,H.i(t).i("ae<1>")),r=r.gw(r),s=0;r.m();){q=r.d
k=l.dS(k,"{"+s+"}",c,t.h(0,q));++s}for(t=c.y,r=new H.ae(t,H.i(t).i("ae<1>")),r=r.gw(r),s=0;r.m();){q=r.d
k=l.dS(k,"{P"+s+"}",c,t.h(0,q));++s}l.bu(a,b,k)
for(t=c.ch,r=t.length,q=b+1,p=0;p<t.length;t.length===r||(0,H.A)(t),++p){o=t[p]
n=l.b.c
m=o.f
if(m!=null)n=m
if(n!=="")l.bu(a,b,n)
l.c7(a,q,o.a)
n=l.b.d
m=o.r
if(m!=null)n=m
if(n!=="")l.bu(a,b,n)}},
dS:function(a,b,c,d){var t=U.cf(d),s=c.b,r=c.c,q=d.b,p=d.ga0(d)
p=H.r(this.c.$6(this.d,s,r,q,t,p))
if(typeof p!="string")H.D(H.ba(p))
return H.l0(a,b,p)},
bu:function(a,b,c){var t,s,r
for(t="",s=0;s<b;++s)t+="  "
a.a+=t
r="\n"+t
a.a+=H.l0(c,"\n",r)+"\n"},
e4:function(a,b,c,d){var t=d!=null?d:c
if(t!=="")this.bu(a,b,t)}}
U.hv.prototype={
$1:function(a){var t
u.c.a(a)
if(this.a){t=a.a
t=H.as(t.dy)&&t.gaR()&&this.b.aa(t.b)===0}else t=!1
return t},
$S:31}
U.hw.prototype={
$1:function(a){var t
u.c.a(a)
t=H.h([],u.u)
C.a.l(t,a.a)
return t},
$S:53}
U.d4.prototype={}
U.ey.prototype={}
U.da.prototype={}
U.ad.prototype={
en:function(a,b){var t=this
t.b=b.b
t.c=b.c
t.d=b.d
C.a.t(b.e,new U.i3(t))},
be:function(a){var t,s=this,r=s.e,q=r.length
if(q===1){q=s.a
if(q.c!==s)a.a+="("
a.a+=H.a(s.b)+" "
if(0>=r.length)return H.o(r,0)
r[0].be(a)
if(q.c!==s)a.a+=")"}else if(q===2){t=s.a
if(t.c!==s)a.a+="("
if(0>=q)return H.o(r,0)
r[0].be(a)
a.a+=" "+H.a(s.b)+" "
if(1>=r.length)return H.o(r,1)
r[1].be(a)
if(t.c!==s)a.a+=")"}else{r=s.b
if(r!=null)a.a+=r}},
fw:function(a){var t,s,r,q,p
u.dy.a(a)
t=this.e
s=t.length
r=a.length
if(s!==r)return!0
for(q=0;q<r;++q){p=a[q]
if(q>=s)return H.o(t,q)
if(p!=t[q].c)return!0}return!1},
e9:function(a){var t,s,r,q,p,o,n=this
u.dy.a(a)
t=n.e
s=t.length===0
if(n.fw(a)){C.a.sk(t,0)
for(r=n.a,q=u.U,p=0;p<a.length;++p)if(p===0&&s&&a[p]==n.c){o=new U.ad(r,a[p],H.h([],q))
o.b=n.b
C.a.l(t,o)}else C.a.l(t,new U.ad(r,a[p],H.h([],q)))}},
dl:function(a){var t,s,r=this,q=document.createElement("div")
C.b.K(q,H.a(r.b))
q.classList.add("nt-expression-text")
q.classList.add("editable")
t=H.a(r.c)
q.classList.add(t)
t=u.C
s=t.i("~(1)").a(new U.ie(r,q))
u.M.a(null)
W.z(q,"click",s,!1,t.c)
r.dC(q,a)
a.appendChild(q)},
dC:function(a,b){var t=u.C,s=t.i("~(1)"),r=s.a(new U.ig(b))
u.M.a(null)
t=t.c
W.z(a,"mouseenter",r,!1,t)
W.z(a,"mouseleave",s.a(new U.ih(b)),!1,t)},
bc:function(a,b){var t=document.createElement("div")
C.b.K(t,b?"(":")")
t.classList.add("nt-expression-text")
t.classList.add("parenthesis")
this.dC(t,a)
a.appendChild(t)},
fq:function(a){var t,s,r,q=this
q.b=J.B(U.bI(q.b,0))
t=W.nW("number")
t.className="nt-number-input"
t.value=q.b
t.step="1"
s=u.E
r=s.i("~(1)").a(new U.id(q,t))
u.M.a(null)
W.z(t,"change",r,!1,s.c)
a.appendChild(t)},
gfV:function(){var t=this.b
if(t!=null)return P.mO(t,new U.ii())!=null
return!1},
bm:function(a){var t,s,r=this,q=document.createElement("div")
q.className="nt-expression"
if((r.gfV()||r.b==null)&&r.c==="num")r.fq(q)
else if(r.b==null){q.classList.add("empty")
C.b.a3(q,"<small>&#9660;</small>")}else{t=r.e
s=t.length
if(s===1){r.bc(q,!0)
r.dl(q)
if(0>=t.length)return H.o(t,0)
t[0].bm(q)
r.bc(q,!1)}else if(s===2){r.bc(q,!0)
if(0>=t.length)return H.o(t,0)
t[0].bm(q)
r.dl(q)
if(1>=t.length)return H.o(t,1)
t[1].bm(q)
r.bc(q,!1)}else C.b.a3(q,"<div class='nt-expression-text "+H.a(r.c)+"'>"+H.a(r.b)+"</div>")}if(r.e.length===0){q.classList.add("editable")
t=u.C
s=t.i("~(1)").a(new U.il(r,q))
u.M.a(null)
W.z(q,"click",s,!1,t.c)}a.appendChild(q)},
dO:function(a){var t,s,r=u.h,q=document
H.aS(r,r,"T","querySelectorAll")
r=new W.am(q.querySelectorAll(".nt-pulldown-menu"),u.W)
r.t(r,new U.ij())
t=q.createElement("div")
t.classList.add("nt-pulldown-menu")
q=this.a
this.ev(t,q.a.dy)
if(J.lb(q.a.dx))C.b.a3(t,"<hr>")
C.b.a3(t,"<hr>")
s=W.lf("#")
C.l.K(s,"Clear")
s.className="clear"
t.appendChild(s)
r=u.C
q=r.i("~(1)").a(new U.ik(this,t))
u.M.a(null)
W.z(s,"click",q,!1,r.c)
a.appendChild(t)},
ev:function(a,b){var t,s,r,q,p,o,n,m
u.gp.a(b)
for(t=b.length,s=u.C,r=s.i("~(1)"),q=u.M,s=s.c,p=0;p<b.length;b.length===t||(0,H.A)(b),++p){o=b[p]
if(o.b==this.c){n=document.createElement("a")
n.href="#"
C.l.K(n,H.a(o.a))
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
this.a.dO(this.b)
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
this.a.dO(this.b)
a.stopPropagation()},
$S:2}
U.ij.prototype={
$1:function(a){return J.eg(u.h.a(a))},
$S:16}
U.ik.prototype={
$1:function(a){var t
u.V.a(a)
C.b.bl(this.b)
t=this.a
t.b=null
C.a.sk(t.e,0)
t.d=null
t.a.cm()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.ic.prototype={
$1:function(a){var t,s
u.V.a(a)
C.b.bl(this.b)
t=this.a
s=this.c
t.e9(s.c)
t.b=s.a
t.c=s.b
t.d=s.d
t.a.cm()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.br.prototype={
n:function(a){var t,s=new P.aQ("")
this.c.be(s)
t=s.a
return t.charCodeAt(0)==0?t:t},
cm:function(){var t=this,s=t.b
if(s!=null&&t.c!=null){J.nr(s).bd(0)
t.c.bm(u.d.a(t.b))}}}
U.a1.prototype={
aV:function(a){var t,s,r=this.b
if(r==null)return
for(r=u.F.a($.ee().h(0,"Object").R("keys",H.h([r],u.t))),r=new H.N(r,r.gk(r),H.i(r).i("N<k.E>")),t=this.a;r.m();){s=H.r(r.d)
if(!C.a.F(t,s)){a.toString
if(typeof s!="string"&&!0)H.D(P.b0("property is not a String or num"))
if(s in a.a)throw H.b(P.bT("Found existing property when restoring external data for export: "+H.a(s)))
a.j(0,s,this.b.h(0,s))}}}}
U.en.prototype={
bw:function(a){var t=this.b,s=H.C(t),r=new H.ag(t,s.i("w(1)").a(new U.he(a)),s.i("ag<1>"))
if(r.gk(r)===1)return r.gaD(r).a
return null},
fK:function(a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this,a3=null,a4=document,a5=a4.createElement("div"),a6=a2.a
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
k=l.aG()
n.x.classList.add(k)
j=n.x
i=k+"-color"
j.classList.add(i)
h=U.lj(l)
g=new P.aQ("")
j=l.r
if(j!=null&&C.d.dZ(j).length!==0){j=H.a(l.r)+"\n"
g.a=j
g.a=j+"\n"}j=n.d
j.y.aS(g,0,h)
i=g.a
f=C.d.aF(i.charCodeAt(0)==0?i:i)
e=new P.ck().cQ(f,0,f.length)
d=e==null?f:e
i=n.x
c='<span title="'+d+'">'+H.a(l.d)+"</span>"
i.toString
C.b.cb(i,"beforeend",c,a3,a3)
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
i.lineHeight=b}a=Z.lx(n.x,n.y,".nt-menu-slot-at-limit","nt-block-dragging")
i=a.gdL(a)
c=i.$ti
a0=c.i("~(1)").a(n.gbz())
t.a(null)
i.a.bX(c.i("~(1)").a(a0),a3,null,!1)
a0=a.gdK(a)
c=a0.$ti
a0.a.bX(c.i("~(1)").a(c.i("~(1)").a(n.gc4())),a3,null,!1)
c=n.x
c.toString
W.z(c,"dblclick",r.a(n.gh4()),!1,s)
c=n.x
c.toString
W.z(c,"contextmenu",p.a(n.gh2()),!1,q)
i=n.e
l=j.aa(l.b)
if(typeof i!=="number")return i.E()
if(typeof l!=="number")return H.a0(l)
l=i<=0||i-l>0
j=n.x
if(l)j.classList.remove("nt-menu-slot-at-limit")
else j.classList.add("nt-menu-slot-at-limit")
m.appendChild(n.x)}a1=Z.cj(a2.d,a6.k4)
a1.gan(a1).u(new U.hc(a2))
a1.gao(a1).u(new U.hd(a2))
a1.gap(a1).u(a2.ga6())
a2.e0()
return a2.d},
e0:function(){var t,s,r,q,p,o
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r]
p=q.e
o=q.d.aa(q.a.b)
if(typeof p!=="number")return p.E()
if(typeof o!=="number")return H.a0(o)
p=p<=0||p-o>0
o=q.x
if(p)o.classList.remove("nt-menu-slot-at-limit")
else o.classList.add("nt-menu-slot-at-limit")}},
N:function(){var t,s
if(!$.ev)t=$.eu&&!$.ew
else t=!0
s=this.d
if(t)s.classList.add("nt-menu-drag-over")
else s.classList.remove("nt-menu-drag-over")},
a7:function(a){var t,s
u.k.a(a)
$.aM=!0
t=this.a
s=t.k3
t.sW(u.i.a(null))
t.O(U.cc(J.aU(s,0)))
t.al()}}
U.he.prototype={
$1:function(a){return u.c.a(a).a.b==this.a},
$S:31}
U.hc.prototype={
$1:function(a){u.k.a(a)
$.ev=!0
this.a.N()},
$S:8}
U.hd.prototype={
$1:function(a){u.k.a(a)
$.ev=!1
this.a.N()},
$S:8}
U.iF.prototype={
$1:function(a){var t,s,r,q=this
H.r(a)
t=document.createElement("div")
W.m2(t,u.cs.a(H.h(["nt-notch-"+H.a(a),q.a],u.s)))
if(!q.b||a!=="middle"){s=q.c.cx
if(s!=null){r=t.style
r.backgroundColor=s}}q.d.appendChild(t)},
$S:18}
U.iG.prototype={
$1:function(a){return this.a.k1=a},
$S:29}
U.iE.prototype={
$1:function(a){var t,s,r,q=this
H.r(a)
t=document.createElement("div")
W.m2(t,u.cs.a(H.h(["nt-notch-"+H.a(a),q.a],u.s)))
if(!q.b||a!=="middle"){s=q.c.d.cx
if(s!=null){r=t.style
r.backgroundColor=s}}q.d.appendChild(t)},
$S:18}
U.c0.prototype={}
U.em.prototype={
bq:function(){return P.ak(P.a5(["type","block-changed","blockId",this.b,"instanceId",this.c],u.N,u.K))}}
U.bo.prototype={
bq:function(){var t=this
return P.ak(P.a5(["type","attribute-changed","blockId",t.b,"instanceId",t.c,"attributeId",t.d,"attributeType",t.e,"value",t.f,"formattedValue",t.r],u.N,u.z))}}
U.eP.prototype={
bq:function(){return P.ak(P.a5(["type","menu-item-clicked","blockId",this.b],u.N,u.K))}}
U.eQ.prototype={
bq:function(){return P.ak(P.a5(["type","menu-item-context-menu","blockId",this.b,"x",this.c,"y",this.d],u.N,u.K))}}
U.aP.prototype={
bA:function(a){var t,s,r,q=this
u.D.a(a)
t=U.lj(q.a)
q.r=t
s=q.f
r=new U.cW()
r.b="new-block"
r.f=s
t.a5(q.y,r)
U.lw(q.r,a)
U.hp(q.y.e,H.h([q.r],u.u),!1,null)
t=q.d
t.dR(r)
t.dD()},
c5:function(a){var t
u.D.a(a)
$.aM=!0
$.ew=$.eu=$.ev=!1
this.r=null
t=this.d
t.al()
t.a4()},
h5:function(a){this.d.O(new U.eP(this.a.b))},
h3:function(a){var t,s,r
u.V.a(a)
a.preventDefault()
a.stopPropagation()
t=this.a.b
s=a.pageX
r=a.pageY
this.d.O(new U.eQ(t,H.q(s),H.q(r)))
return!1}}
U.fc.prototype={
fA:function(a,b){var t,s,r=this
u.V.a(b).stopPropagation()
t=!r.d
r.d=t
s=r.a
s.innerText=t?"\u25b2":"\u25bc"
s=r.d
r.e.$1(s)}}
U.bO.prototype={
O:function(a){var t,s,r=this
try{r.e2()
r.bn()
r.db.e0()
$.ee().h(0,"NetTango").R("_relayCallback",[r.c,a.bq()])}catch(s){t=H.L(s)
P.ed("Unable to relay program changed event to Javascript")
P.ed(t)}},
aa:function(a){var t,s=this.ch
if(s.length===0)return 0
t=H.C(s)
return new H.T(s,t.i("e(1)").a(new U.hE(a)),t.i("T<1,e>")).cl(0,new U.hF())},
a1:function(a){var t,s,r,q
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r].a1(a)
if(q!=null)return q}throw H.b(P.bT("Block with given instance ID not found in workspace: "+H.a(a)))},
fJ:function(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.c,h=H.a(i)+"-styles",g=document,f=u.bg.a(g.getElementById(h))
if(f==null){f=g.createElement("style")
f.id=h
j.d.appendChild(f)}t=u.af.a(f.sheet)
for(;t.cssRules.length>0;)t.removeRule(0)
j.go.bY(t,H.a(i)+"-block-starter")
j.id.bY(t,H.a(i)+"-block-container")
j.k1.bY(t,H.a(i)+"-block-command")
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
n=o.a(new U.hx(j))
u.M.a(null)
p=p.c
W.z(q,"click",n,!1,p)
n=g.createElement("div")
n.className="nt-attribute-dialog"
j.x=n
W.z(n,"click",o.a(new U.hy()),!1,p)
j.r.appendChild(j.x)
j.d.appendChild(j.r)
p=g.createElement("div")
p.id=H.a(i)+"-space"
j.e=p
p.classList.add("nt-workspace")
p=new U.ey()
p.e=r
j.k2=p
s.appendChild(j.e)
g=g.createElement("div")
j.f=g
j.e.appendChild(g)
for(i=j.ch,m=0;m<i.length;++m)i[m].a5(j.k2,m)
j.h6()
l=j.db.fK(j.k2)
i=l.style
g=H.a(j.fr)+"px"
i.maxHeight=g
s.appendChild(l)
k=Z.cj(j.e,j.k4)
k.gan(k).u(new U.hz(j))
k.gh1(k).u(new U.hA(j))
k.gao(k).u(new U.hB(j))
k.gap(k).u(j.ga6())
i=j.r2
i.gan(i).u(new U.hC(j))
i=j.r2
i.gao(i).u(new U.hD(j))
j.e2()},
a7:function(a){var t,s,r,q=this
u.k.a(a)
$.aM=!0
q.al()
t=q.k3
q.sW(u.i.a(null))
s=U.d5(q.f)
r=a.d.E(0,s).E(0,$.lt)
q.dz(t,Math.max(0,J.c9(r.a)),Math.max(0,J.c9(r.b)))
q.O(U.cc(J.aU(t,0)))},
fD:function(a){var t,s=this
u.k.a(a)
$.aM=!0
s.al()
t=s.k3
s.sW(u.i.a(null))
s.O(U.cc(J.aU(t,0)))},
dz:function(a,b,c){var t,s,r,q,p=this
u.i.a(a)
t=new U.aC(new U.a1(H.h(["x","y","blocks"],u.s)),p,H.h([],u.u))
s=p.ch
r=s.length
C.a.l(s,t)
q=t.a5(p.k2,r)
p.e.appendChild(q)
s=t.a
C.a.am(s,s.length,a)
t.a_()
t.e1(b,c)},
h7:function(a){var t,s,r,q=this.ch,p=C.a.h(q,a)
$.lu=p.d
$.lv=p.e
t=p.a
if(!!q.fixed$length)H.D(P.x("removeAt"))
if(!H.cM(a))H.D(H.ba(a))
if(typeof a!=="number")return a.ai()
s=q.length
if(a>=s)H.D(P.ct(a,null))
q.splice(a,1)[0]
s=p.b;(s&&C.b).bl(s)
for(r=0;r<q.length;++r)q[r].hb(r)
return t},
dR:function(a){var t,s,r,q,p,o,n,m=this,l=a.b
switch(l){case"new-block":t=C.a.h(m.db.b,a.f)
t.x.classList.remove("nt-block-dragging")
m.sW(u.i.a(H.h([t.r],u.u)))
break
case"workspace-chain":l=a.e
s=u.i
r=a.a
if(l===0)m.sW(s.a(m.h7(r)))
else{l=C.a.h(m.ch,r)
r=a.e
q=l.a
p=H.C(q).c
o=H.af(q,r,null,p)
l.sc_(H.af(q,0,r,p).aq(0))
l.a_()
m.sW(s.a(o))}break
case"block-clause":l=C.a.h(C.a.h(m.ch,a.a).a1(a.c).ch,a.d)
s=a.e
r=l.a
q=H.C(r).c
n=H.af(r,s,null,q)
l.sc_(H.af(r,0,s,q).aq(0))
l.a_()
m.sW(u.i.a(n))
break
case"default":throw H.b(P.bT("Unknown block removal type: "+H.a(l)))}},
h6:function(){var t,s,r=this.ch,q=H.h(r.slice(0),H.C(r).i("G<1>"))
C.a.cw(q,new U.hG())
r=this.f
r.toString
C.b.K(r,"")
for(r=q.length,t=0;t<q.length;q.length===r||(0,H.A)(q),++t){s=q[t]
this.f.appendChild(s.b)}},
dD:function(){var t,s,r
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].fL()},
al:function(){var t,s,r,q,p,o,n
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r]
q.x.classList.remove("show")
p=J.cS(q.e)
o=q.b.style
n=""+p+"px"
o.top=n}},
N:function(){var t,s,r
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].N()},
a4:function(){var t,s,r
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)t[r].a4()
this.db.N()},
e2:function(){var t,s,r,q,p,o,n,m=this,l=m.fr,k=m.d.getBoundingClientRect()
for(t=m.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r].b.getBoundingClientRect().bottom
p=k.top
if(typeof q!=="number")return q.E()
if(typeof p!=="number")return H.a0(p)
o=C.c.fv(q-p)
if(typeof l!=="number")return H.a0(l)
if(o>l)l=o}if(typeof l!=="number")return l.v()
t=l+1
m.fx=t
n=""+t+"px"
t=m.e.style
t.minHeight=n
t=m.db.d.style
t.maxHeight=n},
bn:function(){var t,s,r,q,p,o
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r)for(q=t[r].a,p=q.length,o=0;o<q.length;q.length===p||(0,H.A)(q),++o)q[o].bn()},
sW:function(a){this.k3=u.i.a(a)}}
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
t=this.a.r.classList
s=t.contains("show")
t.remove("show")
return s},
$S:10}
U.hy.prototype={
$1:function(a){return u.V.a(a).stopPropagation()},
$S:6}
U.hz.prototype={
$1:function(a){u.k.a(a)
$.ew=!0
this.a.db.N()},
$S:8}
U.hA.prototype={
$1:function(a){u.k.a(a)
return this.a.N()},
$S:4}
U.hB.prototype={
$1:function(a){var t
u.k.a(a)
$.ew=!1
t=this.a
t.N()
t.db.N()},
$S:8}
U.hC.prototype={
$1:function(a){u.k.a(a)
$.eu=!0
this.a.db.N()},
$S:8}
U.hD.prototype={
$1:function(a){u.k.a(a)
$.eu=!1
this.a.db.N()},
$S:8}
U.hG.prototype={
$2:function(a,b){var t=u.Y
t.a(a)
t.a(b)
return J.la(a.e,b.e)},
$S:25}
U.k8.prototype={
$6:function(a,b,c,d,e,f){var t=this.a
if(t==null)return J.B(e)
else return H.r(t.dm([a,b,c,d,e,f]))},
$C:"$6",
$R:6}
U.it.prototype={
$6:function(a,b,c,d,e,f){var t=H.r(this.a.dm([a,b,c,d,e,f]))
return t},
$C:"$6",
$R:6}
U.ko.prototype={
$1:function(a){return u.c.a(a).a.b},
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
$1:function(a){U.oy(this.a,this.b,a)},
$S:13}
U.j0.prototype={
$1:function(a){var t=this.a
t.a=U.oz(t.a,a)},
$S:62}
U.j3.prototype={
$1:function(a){return P.ak(P.a5(["actual",a],u.N,u.z))},
$S:23}
U.j4.prototype={
$1:function(a){return a.B("type")&&J.bJ(J.c8(a,"type"),"select")},
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
if(t.B(s)&&H.as(H.fX(t.h(0,s))))return!1
return!0},
$S:19};(function aliases(){var t=J.aj.prototype
t.ef=t.n
t.ee=t.bk
t=J.bu.prototype
t.eh=t.n
t=P.bz.prototype
t.ej=t.b0
t=P.O.prototype
t.ek=t.aK
t.el=t.b_
t=P.k.prototype
t.cB=t.U
t=P.d.prototype
t.eg=t.bs
t=P.E.prototype
t.ei=t.n
t=W.p.prototype
t.bB=t.V
t=W.dY.prototype
t.em=t.af
t=P.P.prototype
t.cz=t.h
t.cA=t.j})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1i,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_0i,k=hunkHelpers._static_2
t(P,"pE","oM",14)
t(P,"pF","oN",14)
t(P,"pG","oO",14)
s(P,"mz","pz",0)
r(P,"pH",1,null,["$2","$1"],["mq",function(a){return P.mq(a,null)}],30,0)
s(P,"my","pu",0)
var j
q(j=P.b8.prototype,"gb6","ad",0)
q(j,"gb7","ae",0)
p(P.bz.prototype,"gfn","l",33)
o(P.a4.prototype,"geC",0,1,function(){return[null]},["$2","$1"],["aM","eD"],30,0)
q(j=P.cF.prototype,"gb6","ad",0)
q(j,"gb7","ae",0)
q(j=P.O.prototype,"gb6","ad",0)
q(j,"gb7","ae",0)
q(P.cG.prototype,"gff","az",0)
q(j=P.cI.prototype,"gb6","ad",0)
q(j,"gb7","ae",0)
n(j,"geM","eN",33)
m(j,"gf_","f0",73)
q(j,"geP","eQ",0)
t(P,"pK","ph",5)
r(W,"pP",4,null,["$4"],["oT"],27,0)
r(W,"pQ",4,null,["$4"],["oU"],27,0)
l(W.e0.prototype,"gfB","c1",0)
t(P,"km","e8",5)
t(P,"pY","k5",66)
n(j=Z.ez.prototype,"gf1","f2",16)
n(j,"geS","eT",6)
n(j,"geW","eX",6)
n(j,"geU","eV",6)
n(j,"geY","eZ",6)
k(U,"q8","pJ",25)
r(U,"q5",4,null,["$4"],["o1"],67,0)
r(U,"q4",3,null,["$3"],["o0"],68,0)
k(U,"q2","nZ",69)
r(U,"q3",3,null,["$3"],["o_"],70,0)
t(U,"q7","o3",21)
s(U,"q6","o2",71)
t(U,"mK","oD",9)
t(U,"q0","oC",48)
t(U,"q1","oF",9)
t(U,"mL","oI",9)
t(U,"mM","oJ",9)
t(U,"mN","oK",9)
n(j=U.an.prototype,"gbz","bA",12)
n(j,"gc4","c5",12)
n(j,"ga6","a7",4)
n(U.aC.prototype,"ga6","a7",4)
n(U.aD.prototype,"ga6","a7",4)
n(U.en.prototype,"ga6","a7",4)
n(j=U.aP.prototype,"gbz","bA",12)
n(j,"gc4","c5",12)
n(j,"gh4","h5",57)
n(j,"gh2","h3",10)
p(U.fc.prototype,"gfz","fA",6)
n(j=U.bO.prototype,"ga6","a7",4)
n(j,"gfC","fD",4)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.E,null)
r(P.E,[H.kC,J.aj,J.aB,P.d,H.N,P.R,H.d9,H.Q,H.cz,P.co,H.d_,H.bN,H.eI,H.iY,P.K,H.dZ,P.S,H.iy,H.dk,H.eJ,H.f7,H.jS,H.aO,H.fv,P.jW,P.U,P.O,P.bz,P.aE,P.fl,P.c5,P.a4,P.fi,P.a3,P.f6,P.bA,P.fp,P.dV,P.cG,P.cV,P.fS,P.dJ,P.dW,P.fB,P.c7,P.dO,P.k,P.e6,P.aY,P.dX,P.eo,P.ir,P.jz,P.w,P.ci,P.Y,P.bR,P.f_,P.dx,P.fu,P.db,P.b3,P.t,P.cn,P.u,P.dp,P.ar,P.fJ,P.c,P.aQ,P.aZ,W.hJ,W.i1,W.eA,W.e0,W.c6,W.V,W.dt,W.dY,W.fK,W.bV,W.fo,W.ap,W.fI,W.e7,P.P,P.J,P.fG,Z.hM,Z.bQ,Z.jf,Z.el,Z.b9,Z.ez,Z.at,Z.ei,U.b1,U.bh,U.h8,U.cW,U.cX,U.an,U.eD,U.hu,U.da,U.ad,U.br,U.a1,U.en,U.c0,U.aP,U.fc,U.bO])
r(J.aj,[J.eG,J.dg,J.bu,J.G,J.bt,J.bf,H.bX,W.F,W.bL,W.I,W.fn,W.f8,W.hK,W.d3,W.hL,W.f,W.fx,W.dd,W.eO,W.fD,W.aI,W.fM,W.fT,W.fV,P.dj])
r(J.bu,[J.f1,J.bx,J.b4])
s(J.iu,J.G)
r(J.bt,[J.df,J.eH])
r(P.d,[H.n,H.aG,H.ag,H.c3,H.c1,H.dC])
r(H.n,[H.a9,H.bS,H.ae,P.dI,P.aq])
r(H.a9,[H.dy,H.T,P.fA])
s(H.aV,H.aG)
r(P.R,[H.a6,H.c4,H.dA,H.dw])
s(H.d7,H.c3)
s(H.d6,H.c1)
s(P.cL,P.co)
s(P.dB,P.cL)
s(H.d0,P.dB)
r(H.bN,[H.hH,H.iL,H.kp,H.fb,H.iv,H.kh,H.ki,H.kj,P.ja,P.j9,P.jb,P.jc,P.jX,P.jT,P.jU,P.iq,P.jl,P.js,P.jo,P.jp,P.jq,P.jm,P.jr,P.jv,P.jw,P.ju,P.jt,P.iS,P.iT,P.je,P.jd,P.jG,P.ka,P.jN,P.jM,P.jO,P.iA,P.jA,P.iB,P.hX,P.hY,W.i_,W.j8,W.jk,W.jR,W.iD,W.iC,W.jP,W.jQ,W.jV,W.k2,P.hI,P.im,P.io,P.ip,P.iw,P.k6,P.k7,P.kb,P.kc,P.kd,Z.hR,Z.hQ,Z.hO,Z.hP,Z.hN,Z.h7,Z.h2,Z.jg,Z.jh,Z.ji,Z.jj,Z.k1,Z.k0,Z.k_,Z.jZ,Z.jY,Z.jF,Z.jE,Z.jD,Z.jC,Z.jL,Z.jK,Z.jJ,Z.jI,Z.jH,Z.hT,Z.hV,Z.hU,Z.hW,Z.hS,U.h6,U.h5,U.i7,U.i6,U.i8,U.i9,U.i5,U.ia,U.i4,U.ib,U.iH,U.iI,U.iJ,U.iK,U.iN,U.iO,U.iQ,U.iP,U.iR,U.iU,U.iV,U.iW,U.iX,U.ha,U.hb,U.hf,U.hi,U.hj,U.hg,U.hh,U.hk,U.hl,U.hn,U.ho,U.hq,U.hr,U.hs,U.ht,U.hv,U.hw,U.i3,U.ie,U.ig,U.ih,U.id,U.ii,U.il,U.ij,U.ik,U.ic,U.he,U.hc,U.hd,U.iF,U.iG,U.iE,U.hE,U.hF,U.hx,U.hy,U.hz,U.hA,U.hB,U.hC,U.hD,U.hG,U.k8,U.it,U.ko,U.j1,U.j2,U.j0,U.j3,U.j4,U.j6,U.j5])
s(H.d1,H.d_)
r(P.K,[H.eY,H.eK,H.ff,H.f2,P.cU,H.ft,P.di,P.eZ,P.aK,P.eX,P.fg,P.fe,P.b5,P.ep,P.er])
r(H.fb,[H.f4,H.cd])
s(H.fh,P.cU)
s(P.dn,P.S)
r(P.dn,[H.a8,P.dH,P.fz,W.fj])
s(H.au,H.bX)
r(H.au,[H.dR,H.dT])
s(H.dS,H.dR)
s(H.bv,H.dS)
s(H.dU,H.dT)
s(H.aH,H.dU)
r(H.aH,[H.eR,H.eS,H.eT,H.eU,H.eV,H.dr,H.eW])
s(H.e3,H.ft)
r(P.U,[P.cK,P.dG,W.bl,W.aR])
s(P.cE,P.cK)
s(P.ah,P.cE)
r(P.O,[P.cF,P.cI])
s(P.b8,P.cF)
s(P.e1,P.bz)
s(P.e2,P.fl)
r(P.bA,[P.dD,P.fq])
s(P.e_,P.dV)
s(P.dP,P.dG)
s(P.fH,P.fS)
s(P.dK,P.dH)
s(P.dN,P.dW)
s(P.dm,P.dO)
s(P.dv,P.dX)
s(P.cg,P.f6)
r(P.cg,[P.ck,P.eN,P.eM])
s(P.eL,P.di)
s(P.ix,P.eo)
s(P.jy,P.jz)
r(P.Y,[P.ai,P.e])
r(P.aK,[P.du,P.eE])
r(W.F,[W.m,W.by,W.b7])
r(W.m,[W.p,W.b2,W.cD])
r(W.p,[W.j,P.l])
r(W.j,[W.ca,W.ej,W.cb,W.bM,W.ce,W.bP,W.eC,W.cl,W.cp,W.cw,W.cy,W.dz,W.f9,W.fa,W.cA,W.cB])
s(W.ch,W.fn)
s(W.d2,W.f8)
r(P.dm,[W.fk,W.am,W.al,P.eB])
s(W.hZ,W.i1)
s(W.fy,W.fx)
s(W.bs,W.fy)
s(W.av,W.f)
r(W.av,[W.bg,W.a2,W.b6])
s(W.fE,W.fD)
s(W.ds,W.fE)
s(W.cq,W.a2)
s(W.fN,W.fM)
s(W.fd,W.fN)
s(W.fU,W.fT)
s(W.fm,W.fU)
s(W.dE,W.d3)
s(W.fW,W.fV)
s(W.dQ,W.fW)
s(W.fr,W.fj)
s(P.eq,P.dv)
r(P.eq,[W.fs,P.ek])
s(W.aw,W.bl)
s(W.dF,P.a3)
s(W.fL,W.dY)
r(P.P,[P.aF,P.dM])
s(P.v,P.dM)
s(P.bw,P.fG)
s(P.cu,P.l)
r(Z.b9,[Z.fO,Z.fC,Z.fF])
r(U.b1,[U.bU,U.bY,U.cv,U.cC])
r(U.bY,[U.de,U.cs])
r(U.h8,[U.aC,U.aD])
s(U.d4,Z.ei)
s(U.ey,Z.el)
r(U.c0,[U.em,U.bo,U.eP,U.eQ])
t(H.dR,P.k)
t(H.dS,H.Q)
t(H.dT,P.k)
t(H.dU,H.Q)
t(P.dO,P.k)
t(P.dX,P.aY)
t(P.cL,P.e6)
t(W.fn,W.hJ)
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
t(P.dM,P.k)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",ai:"double",Y:"num",c:"String",w:"bool",u:"Null",t:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","u()","u(a2)","u(f)","~(at)","@(@)","~(a2)","w(at)","u(at)","~(P)","w(a2)","u(b6)","~(bQ)","u(P)","~(~())","u(p)","~(p)","e(e,e)","u(c)","w(@)","w(c)","c(c)","aE<~>(a3<@>)","P(@)","c(e)","e(aC,aC)","u(@)","w(p,c,c,c6)","u(@,@)","w(w)","~(E[ar])","w(aP)","w(p)","~(E)","w(m)","w(ap)","p(m)","u(aZ,@)","@(c)","@(@,c)","u(bg)","w(bh)","~(bh)","c(p)","u(Y)","~(Y)","u(@[ar])","~(aD)","~(v<@>)","u(w)","~(b9)","a4<@>(@)","u(~())","t<an>(aP)","~(ad)","@(f)","v<@>(@)","~(f)","e(aC)","aF(@)","e(aP)","e(aD)","u(v<@>)","w(aq<c>)","u(c,@)","~(m,m)","E(@)","~(c,c,c,aF)","~(c,c,aF)","c(c,aF)","c(c,e,e)","c()","e(an)","~(@,ar)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.p9(v.typeUniverse,JSON.parse('{"b4":"bu","f1":"bu","bx":"bu","qm":"f","qz":"f","ql":"l","qC":"l","qn":"j","qG":"j","qD":"m","qy":"m","qU":"a2","qs":"av","qx":"b7","qr":"b2","qJ":"b2","qE":"bs","qA":"bL","qt":"I","qI":"bv","qH":"bX","eG":{"w":[]},"dg":{"u":[]},"bu":{"b3":[]},"G":{"t":["1"],"n":["1"],"d":["1"]},"iu":{"G":["1"],"t":["1"],"n":["1"],"d":["1"]},"aB":{"R":["1"]},"bt":{"ai":[],"Y":[]},"df":{"e":[],"ai":[],"Y":[]},"eH":{"ai":[],"Y":[]},"bf":{"c":[],"f0":[]},"n":{"d":["1"]},"a9":{"n":["1"],"d":["1"]},"dy":{"a9":["1"],"n":["1"],"d":["1"],"a9.E":"1","d.E":"1"},"N":{"R":["1"]},"aG":{"d":["2"],"d.E":"2"},"aV":{"aG":["1","2"],"n":["2"],"d":["2"],"d.E":"2"},"a6":{"R":["2"]},"T":{"a9":["2"],"n":["2"],"d":["2"],"a9.E":"2","d.E":"2"},"ag":{"d":["1"],"d.E":"1"},"c4":{"R":["1"]},"c3":{"d":["1"],"d.E":"1"},"d7":{"c3":["1"],"n":["1"],"d":["1"],"d.E":"1"},"dA":{"R":["1"]},"c1":{"d":["1"],"d.E":"1"},"d6":{"c1":["1"],"n":["1"],"d":["1"],"d.E":"1"},"dw":{"R":["1"]},"bS":{"n":["1"],"d":["1"],"d.E":"1"},"d9":{"R":["1"]},"cz":{"aZ":[]},"d0":{"dB":["1","2"],"cL":["1","2"],"co":["1","2"],"e6":["1","2"],"ao":["1","2"]},"d_":{"ao":["1","2"]},"d1":{"d_":["1","2"],"ao":["1","2"]},"dC":{"d":["1"],"d.E":"1"},"eI":{"lG":[]},"eY":{"K":[]},"eK":{"K":[]},"ff":{"K":[]},"dZ":{"ar":[]},"bN":{"b3":[]},"fb":{"b3":[]},"f4":{"b3":[]},"cd":{"b3":[]},"f2":{"K":[]},"fh":{"K":[]},"a8":{"lL":["1","2"],"S":["1","2"],"ao":["1","2"],"S.K":"1","S.V":"2"},"ae":{"n":["1"],"d":["1"],"d.E":"1"},"dk":{"R":["1"]},"eJ":{"f0":[]},"f7":{"dp":[]},"jS":{"R":["dp"]},"bX":{"b_":[]},"au":{"Z":["@"],"b_":[]},"bv":{"au":[],"k":["ai"],"Z":["@"],"t":["ai"],"n":["ai"],"Q":["ai"],"b_":[],"d":["ai"],"k.E":"ai","Q.E":"ai"},"aH":{"au":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b_":[],"d":["e"]},"eR":{"aH":[],"au":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b_":[],"d":["e"],"k.E":"e","Q.E":"e"},"eS":{"aH":[],"au":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b_":[],"d":["e"],"k.E":"e","Q.E":"e"},"eT":{"aH":[],"au":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b_":[],"d":["e"],"k.E":"e","Q.E":"e"},"eU":{"aH":[],"au":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b_":[],"d":["e"],"k.E":"e","Q.E":"e"},"eV":{"aH":[],"au":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b_":[],"d":["e"],"k.E":"e","Q.E":"e"},"dr":{"aH":[],"au":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b_":[],"d":["e"],"k.E":"e","Q.E":"e"},"eW":{"aH":[],"au":[],"k":["e"],"t":["e"],"Z":["@"],"n":["e"],"Q":["e"],"b_":[],"d":["e"],"k.E":"e","Q.E":"e"},"ft":{"K":[]},"e3":{"K":[]},"ah":{"cE":["1"],"cK":["1"],"U":["1"],"U.T":"1"},"b8":{"cF":["1"],"O":["1"],"bj":["1"],"bk":["1"],"a3":["1"],"O.T":"1"},"bz":{"f5":["1"],"bj":["1"],"bk":["1"],"mb":["1"]},"e1":{"bz":["1"],"f5":["1"],"bj":["1"],"bk":["1"],"mb":["1"]},"e2":{"fl":["1"]},"a4":{"aE":["1"]},"cE":{"cK":["1"],"U":["1"]},"cF":{"O":["1"],"bj":["1"],"bk":["1"],"a3":["1"]},"O":{"bj":["1"],"bk":["1"],"a3":["1"],"O.T":"1"},"cK":{"U":["1"]},"dD":{"bA":["1"]},"fq":{"bA":["@"]},"fp":{"bA":["@"]},"e_":{"dV":["1"]},"cG":{"a3":["1"]},"dG":{"U":["2"]},"cI":{"O":["2"],"bj":["2"],"bk":["2"],"a3":["2"],"O.T":"2"},"dP":{"dG":["1","2"],"U":["2"],"U.T":"2"},"cV":{"K":[]},"fS":{"m0":[]},"fH":{"m0":[]},"dH":{"S":["1","2"],"ao":["1","2"]},"dK":{"dH":["1","2"],"S":["1","2"],"ao":["1","2"],"S.K":"1","S.V":"2"},"dI":{"n":["1"],"d":["1"],"d.E":"1"},"dJ":{"R":["1"]},"dN":{"dW":["1"],"aq":["1"],"n":["1"],"d":["1"]},"c7":{"R":["1"]},"dm":{"k":["1"],"t":["1"],"n":["1"],"d":["1"]},"dn":{"S":["1","2"],"ao":["1","2"]},"S":{"ao":["1","2"]},"co":{"ao":["1","2"]},"dB":{"cL":["1","2"],"co":["1","2"],"e6":["1","2"],"ao":["1","2"]},"dv":{"aY":["1"],"aq":["1"],"n":["1"],"d":["1"]},"dW":{"aq":["1"],"n":["1"],"d":["1"]},"fz":{"S":["c","@"],"ao":["c","@"],"S.K":"c","S.V":"@"},"fA":{"a9":["c"],"n":["c"],"d":["c"],"a9.E":"c","d.E":"c"},"ck":{"cg":["c","c"]},"di":{"K":[]},"eL":{"K":[]},"eN":{"cg":["E","c"]},"eM":{"cg":["c","E"]},"ai":{"Y":[]},"cU":{"K":[]},"eZ":{"K":[]},"aK":{"K":[]},"du":{"K":[]},"eE":{"K":[]},"eX":{"K":[]},"fg":{"K":[]},"fe":{"K":[]},"b5":{"K":[]},"ep":{"K":[]},"f_":{"K":[]},"dx":{"K":[]},"er":{"K":[]},"fu":{"i2":[]},"db":{"i2":[]},"e":{"Y":[]},"t":{"n":["1"],"d":["1"]},"aq":{"n":["1"],"d":["1"]},"fJ":{"ar":[]},"c":{"f0":[]},"aQ":{"os":[]},"j":{"p":[],"m":[],"F":[]},"ca":{"j":[],"p":[],"m":[],"F":[]},"ej":{"j":[],"p":[],"m":[],"F":[]},"cb":{"j":[],"p":[],"m":[],"F":[]},"bM":{"j":[],"p":[],"m":[],"F":[]},"ce":{"j":[],"p":[],"m":[],"F":[]},"b2":{"m":[],"F":[]},"bP":{"j":[],"p":[],"m":[],"F":[]},"d3":{"bw":["Y"]},"fk":{"k":["p"],"t":["p"],"n":["p"],"d":["p"],"k.E":"p"},"am":{"lB":["1"],"k":["1"],"t":["1"],"n":["1"],"d":["1"],"k.E":"1"},"p":{"m":[],"F":[]},"eC":{"j":[],"p":[],"m":[],"F":[]},"bs":{"V":["m"],"k":["m"],"t":["m"],"Z":["m"],"n":["m"],"d":["m"],"V.E":"m","k.E":"m"},"cl":{"j":[],"p":[],"m":[],"F":[]},"bg":{"av":[],"f":[]},"a2":{"av":[],"f":[]},"al":{"k":["m"],"t":["m"],"n":["m"],"d":["m"],"k.E":"m"},"m":{"F":[]},"ds":{"V":["m"],"k":["m"],"t":["m"],"Z":["m"],"n":["m"],"d":["m"],"V.E":"m","k.E":"m"},"cp":{"j":[],"p":[],"m":[],"F":[]},"cq":{"a2":[],"av":[],"f":[]},"cw":{"j":[],"p":[],"m":[],"F":[]},"cy":{"j":[],"p":[],"m":[],"F":[]},"dz":{"j":[],"p":[],"m":[],"F":[]},"f9":{"j":[],"p":[],"m":[],"F":[]},"fa":{"j":[],"p":[],"m":[],"F":[]},"cA":{"j":[],"p":[],"m":[],"F":[]},"cB":{"j":[],"p":[],"m":[],"F":[]},"b6":{"av":[],"f":[]},"fd":{"V":["aI"],"k":["aI"],"t":["aI"],"Z":["aI"],"n":["aI"],"d":["aI"],"V.E":"aI","k.E":"aI"},"av":{"f":[]},"by":{"j7":[],"F":[]},"b7":{"F":[]},"cD":{"m":[],"F":[]},"fm":{"V":["I"],"k":["I"],"t":["I"],"Z":["I"],"n":["I"],"d":["I"],"V.E":"I","k.E":"I"},"dE":{"bw":["Y"]},"dQ":{"V":["m"],"k":["m"],"t":["m"],"Z":["m"],"n":["m"],"d":["m"],"V.E":"m","k.E":"m"},"fj":{"S":["c","c"],"ao":["c","c"]},"fr":{"S":["c","c"],"ao":["c","c"],"S.K":"c","S.V":"c"},"fs":{"aY":["c"],"aq":["c"],"n":["c"],"d":["c"],"aY.E":"c"},"bl":{"U":["1"],"U.T":"1"},"aw":{"bl":["1"],"U":["1"],"U.T":"1"},"aR":{"U":["1"],"U.T":"1"},"dF":{"a3":["1"]},"c6":{"ap":[]},"dt":{"ap":[]},"dY":{"ap":[]},"fL":{"ap":[]},"fK":{"ap":[]},"bV":{"R":["1"]},"fo":{"j7":[],"F":[]},"fI":{"ox":[]},"e7":{"o6":[]},"eq":{"aY":["c"],"aq":["c"],"n":["c"],"d":["c"]},"eB":{"k":["p"],"t":["p"],"n":["p"],"d":["p"],"k.E":"p"},"aF":{"P":[]},"v":{"k":["1"],"t":["1"],"n":["1"],"P":[],"d":["1"],"k.E":"1"},"bw":{"fG":["1"]},"cu":{"l":[],"p":[],"m":[],"F":[]},"ek":{"aY":["c"],"aq":["c"],"n":["c"],"d":["c"],"aY.E":"c"},"l":{"p":[],"m":[],"F":[]},"fO":{"b9":[]},"fC":{"b9":[]},"fF":{"b9":[]},"bU":{"b1":[]},"de":{"bY":[],"b1":[]},"bY":{"b1":[]},"cs":{"bY":[],"b1":[]},"cv":{"b1":[]},"cC":{"b1":[]},"d4":{"ei":[]},"ey":{"el":[]},"em":{"c0":[]},"bo":{"c0":[]},"eP":{"c0":[]},"eQ":{"c0":[]}}'))
H.p8(v.typeUniverse,JSON.parse('{"n":1,"f6":2,"dm":1,"dn":2,"dv":1,"dO":1,"dX":1,"eo":2,"cn":2,"dM":1}'))
var u=(function rtii(){var t=H.ec
return{gu:t("@<@>"),n:t("cV"),cR:t("cb"),fK:t("bL"),bz:t("an"),a4:t("bM"),hb:t("ce"),Y:t("aC"),ds:t("aD"),gF:t("d0<aZ,@>"),g5:t("I"),af:t("d2"),d:t("bP"),D:t("bQ"),k:t("at"),fu:t("bR"),X:t("n<@>"),h:t("p"),r:t("lB<p>"),bU:t("K"),B:t("f"),aS:t("F"),g8:t("i2"),gI:t("ad"),gs:t("bU"),Z:t("b3"),aQ:t("aE<u>"),b9:t("aE<@>"),a:t("j"),gb:t("dd"),p:t("cl"),m:t("lG"),i:t("d<an>"),bq:t("d<p>"),eh:t("d<m>"),fP:t("d<E>"),cs:t("d<c>"),bM:t("d<ai>"),R:t("d<@>"),gS:t("d<e>"),u:t("G<an>"),cM:t("G<aC>"),e:t("G<aD>"),ge:t("G<p>"),U:t("G<ad>"),ga:t("G<da>"),t:t("G<P>"),eO:t("G<ap>"),eD:t("G<bh>"),dk:t("G<aP>"),w:t("G<a3<@>>"),s:t("G<c>"),f7:t("G<b9>"),cO:t("G<@>"),cj:t("b4"),aU:t("Z<@>"),gB:t("v<c>"),F:t("v<@>"),L:t("aF"),bT:t("a8<c,e>"),eo:t("a8<aZ,@>"),by:t("a8<e,b1>"),aI:t("a8<e,e>"),b:t("P"),dz:t("dj"),cf:t("bg"),v:t("t<an>"),al:t("t<aD>"),O:t("t<p>"),gp:t("t<da>"),eB:t("t<t<an>>"),dy:t("t<c>"),j:t("t<@>"),f:t("ao<@,@>"),dv:t("T<c,c>"),V:t("a2"),d4:t("bv"),bd:t("aH"),A:t("m"),f6:t("ap"),P:t("u"),cU:t("bY"),K:t("E"),fn:t("bh"),fW:t("cp"),H:t("J<Y>"),et:t("cq"),q:t("bw<Y>"),av:t("aO"),ew:t("cu"),fs:t("cv"),d2:t("cw"),cq:t("aq<c>"),c:t("aP"),l:t("ar"),c6:t("f5<bQ>"),g:t("f5<at>"),b_:t("a3<@>"),N:t("c"),dG:t("c(c)"),bg:t("cy"),g7:t("l"),fo:t("aZ"),aW:t("cA"),cJ:t("cB"),fY:t("aI"),T:t("b6"),ak:t("b_"),bJ:t("bx"),g4:t("by"),ci:t("j7"),g2:t("b7"),h9:t("cD"),ac:t("al"),gt:t("bA<@>"),E:t("aw<f>"),C:t("aw<a2>"),du:t("aw<b6>"),I:t("aR<a2>"),a1:t("b9"),cw:t("bl<f>"),W:t("am<p>"),x:t("c5<@,@>"),_:t("a4<@>"),fJ:t("a4<e>"),dL:t("a4<Y>"),cr:t("c6"),aH:t("dK<@,@>"),J:t("fB"),bi:t("e2<Y>"),y:t("w"),bN:t("w(E)"),gR:t("ai"),z:t("@"),fO:t("@()"),G:t("@(f)"),bI:t("@(E)"),ep:t("@(E,E)"),ag:t("@(E,ar)"),ch:t("@(aq<c>)"),bc:t("@(@)"),S:t("e"),di:t("Y"),o:t("~"),M:t("~()"),Q:t("~(f)"),dj:t("~(bg)"),a6:t("~(a2)"),d5:t("~(E)"),da:t("~(E,ar)"),eA:t("~(c,c)"),cA:t("~(c,@)"),gn:t("~(b6)"),c4:t("~(Y)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.l=W.ca.prototype
C.m=W.bM.prototype
C.h=W.ch.prototype
C.b=W.bP.prototype
C.H=J.aj.prototype
C.a=J.G.prototype
C.e=J.df.prototype
C.q=J.dg.prototype
C.c=J.bt.prototype
C.d=J.bf.prototype
C.I=J.b4.prototype
C.v=J.f1.prototype
C.w=W.dz.prototype
C.k=J.bx.prototype
C.Q=W.by.prototype
C.x=new H.d9(H.ec("d9<u>"))
C.R=new P.ir()
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

C.i=new P.ix()
C.E=new P.f_()
C.F=new P.fp()
C.f=new P.fH()
C.G=new P.fJ()
C.p=new P.bR(0)
C.J=new P.eM(null)
C.K=new P.eN(null)
C.L=H.h(t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),u.s)
C.M=H.h(t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),u.s)
C.N=H.h(t([]),u.s)
C.r=H.h(t([]),u.cO)
C.t=H.h(t(["bind","if","ref","repeat","syntax"]),u.s)
C.j=H.h(t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),u.s)
C.O=H.h(t([]),H.ec("G<aZ>"))
C.u=new H.d1(0,{},C.O,H.ec("d1<aZ,@>"))
C.P=new H.cz("call")})();(function staticFields(){$.bd=0
$.cY=null
$.ll=null
$.mF=null
$.mx=null
$.mR=null
$.ke=null
$.kk=null
$.kY=null
$.cN=null
$.e9=null
$.ea=null
$.kS=!1
$.H=C.f
$.aJ=[]
$.bp=null
$.kA=null
$.lD=null
$.lC=null
$.lA=function(){var t=u.N
return P.a5(["animationend","webkitAnimationEnd","animationiteration","webkitAnimationIteration","animationstart","webkitAnimationStart","fullscreenchange","webkitfullscreenchange","fullscreenerror","webkitfullscreenerror","keyadded","webkitkeyadded","keyerror","webkitkeyerror","keymessage","webkitkeymessage","needkey","webkitneedkey","pointerlockchange","webkitpointerlockchange","pointerlockerror","webkitpointerlockerror","resourcetimingbufferfull","webkitresourcetimingbufferfull","transitionend","webkitTransitionEnd","speechchange","webkitSpeechChange"],t,t)}()
$.fw=P.bW(u.N,u.Z)
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
$.ex=null
$.lt=null
$.et=!1
$.aM=!1
$.ev=!1
$.ew=!1
$.eu=!1
$.lu=null
$.lv=null
$.ay=P.bW(u.N,H.ec("bO"))})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"qw","kq",function(){return H.kX("_$dart_dartClosure")})
t($,"qF","l5",function(){return H.kX("_$dart_js")})
t($,"qK","n4",function(){return H.bi(H.iZ({
toString:function(){return"$receiver$"}}))})
t($,"qL","n5",function(){return H.bi(H.iZ({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"qM","n6",function(){return H.bi(H.iZ(null))})
t($,"qN","n7",function(){return H.bi(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"qQ","na",function(){return H.bi(H.iZ(void 0))})
t($,"qR","nb",function(){return H.bi(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"qP","n9",function(){return H.bi(H.lY(null))})
t($,"qO","n8",function(){return H.bi(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"qT","nd",function(){return H.bi(H.lY(void 0))})
t($,"qS","nc",function(){return H.bi(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"qV","l6",function(){return P.oL()})
t($,"qB","h_",function(){var s=new P.a4(C.f,H.ec("a4<u>"))
s.fg(null)
return s})
t($,"r3","nj",function(){return new Error().stack!=void 0})
t($,"qv","n3",function(){return{}})
t($,"r0","ni",function(){return P.lM(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
t($,"qu","n2",function(){return P.oi("^\\S+$")})
t($,"r1","ee",function(){return u.b.a(P.bE(self))})
t($,"qW","l7",function(){return H.kX("_$dart_dartObject")})
t($,"r2","l8",function(){return function DartObject(a){this.o=a}})
t($,"qY","nf",function(){return W.i0("_customDragEnter",u.V)})
t($,"r_","nh",function(){return W.i0("_customDragOver",u.V)})
t($,"qZ","ng",function(){return W.i0("_customDragLeave",u.V)})
t($,"qX","ne",function(){return W.i0("_customDrop",u.V)})
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.aj,DOMImplementation:J.aj,MediaError:J.aj,Navigator:J.aj,NavigatorConcurrentHardware:J.aj,NavigatorUserMediaError:J.aj,OverconstrainedError:J.aj,PositionError:J.aj,Range:J.aj,Selection:J.aj,SQLError:J.aj,DataView:H.bX,ArrayBufferView:H.bX,Float32Array:H.bv,Float64Array:H.bv,Int16Array:H.eR,Int32Array:H.eS,Int8Array:H.eT,Uint16Array:H.eU,Uint32Array:H.eV,Uint8ClampedArray:H.dr,CanvasPixelArray:H.dr,Uint8Array:H.eW,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLCanvasElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.ca,HTMLAreaElement:W.ej,HTMLBaseElement:W.cb,Blob:W.bL,File:W.bL,HTMLBodyElement:W.bM,HTMLButtonElement:W.ce,CDATASection:W.b2,CharacterData:W.b2,Comment:W.b2,ProcessingInstruction:W.b2,Text:W.b2,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.ch,MSStyleCSSProperties:W.ch,CSS2Properties:W.ch,CSSStyleSheet:W.d2,HTMLDivElement:W.bP,DOMException:W.hK,DOMRectReadOnly:W.d3,DOMTokenList:W.hL,Element:W.p,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,EventTarget:W.F,HTMLFormElement:W.eC,HTMLCollection:W.bs,HTMLFormControlsCollection:W.bs,HTMLOptionsCollection:W.bs,ImageData:W.dd,HTMLInputElement:W.cl,KeyboardEvent:W.bg,Location:W.eO,WheelEvent:W.a2,MouseEvent:W.a2,DragEvent:W.a2,Document:W.m,DocumentFragment:W.m,HTMLDocument:W.m,ShadowRoot:W.m,XMLDocument:W.m,DocumentType:W.m,Node:W.m,NodeList:W.ds,RadioNodeList:W.ds,HTMLOptionElement:W.cp,PointerEvent:W.cq,HTMLSelectElement:W.cw,HTMLStyleElement:W.cy,StyleSheet:W.f8,HTMLTableElement:W.dz,HTMLTableRowElement:W.f9,HTMLTableSectionElement:W.fa,HTMLTemplateElement:W.cA,HTMLTextAreaElement:W.cB,Touch:W.aI,TouchEvent:W.b6,TouchList:W.fd,CompositionEvent:W.av,FocusEvent:W.av,TextEvent:W.av,UIEvent:W.av,Window:W.by,DOMWindow:W.by,DedicatedWorkerGlobalScope:W.b7,ServiceWorkerGlobalScope:W.b7,SharedWorkerGlobalScope:W.b7,WorkerGlobalScope:W.b7,Attr:W.cD,CSSRuleList:W.fm,ClientRect:W.dE,DOMRect:W.dE,NamedNodeMap:W.dQ,MozNamedAttrMap:W.dQ,IDBKeyRange:P.dj,SVGScriptElement:P.cu,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,Selection:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:true,File:true,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleSheet:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,WheelEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLOptionElement:true,PointerEvent:true,HTMLSelectElement:true,HTMLStyleElement:true,StyleSheet:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,IDBKeyRange:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})
H.au.$nativeSuperclassTag="ArrayBufferView"
H.dR.$nativeSuperclassTag="ArrayBufferView"
H.dS.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.aH.$nativeSuperclassTag="ArrayBufferView"})()
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

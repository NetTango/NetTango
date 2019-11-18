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
a[c]=function(){a[c]=function(){H.m4(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iv(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ia:function ia(){},
j0:function(a,b,c,d){if(!!J.k(a).$iF)return new H.bx(a,b,[c,d])
return new H.bB(a,b,[c,d])},
l8:function(a,b,c){P.ca(b,"takeCount")
if(!!J.k(a).$iF)return new H.dQ(a,b,[c])
return new H.cS(a,b,[c])},
l5:function(a,b,c){if(!!J.k(a).$iF){P.ca(b,"count")
return new H.dP(a,b,[c])}P.ca(b,"count")
return new H.cO(a,b,[c])},
iV:function(){return new P.aX("No element")},
kI:function(){return new P.aX("Too many elements")},
j7:function(a,b,c){H.cP(a,0,J.af(a)-1,b,c)},
cP:function(a,b,c,d,e){if(c-b<=32)H.l7(a,b,c,d,e)
else H.l6(a,b,c,d,e)},
l7:function(a,b,c,d,e){var u,t,s,r,q,p
for(u=b+1,t=J.K(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.F()
q=q>0}else q=!1
if(!q)break
p=r-1
t.i(a,r,t.h(a,p))
r=p}t.i(a,r,s)}},
l6:function(a3,a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j=C.f.cG(a5-a4+1,6),i=a4+j,h=a5-j,g=C.f.cG(a4+a5,2),f=g-j,e=g+j,d=J.K(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.F()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.F()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.F()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.F()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.F()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.F()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.F()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.F()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.F()
if(a2>0){u=a1
a1=a0
a0=u}d.i(a3,i,c)
d.i(a3,g,a)
d.i(a3,h,a1)
d.i(a3,f,d.h(a3,a4))
d.i(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.Y(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a0()
if(p<0){if(r!==t){d.i(a3,r,d.h(a3,t))
d.i(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.F()
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
if(typeof l!=="number")return l.a0()
if(l<0){if(r!==t){d.i(a3,r,d.h(a3,t))
d.i(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.F()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.F()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a0()
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
H.cP(a3,a4,t-2,a6,a7)
H.cP(a3,s+2,a5,a6,a7)
if(m)return
if(t<i&&s>h){for(;J.Y(a6.$2(d.h(a3,t),b),0);)++t
for(;J.Y(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.i(a3,r,d.h(a3,t))
d.i(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a0()
o=s-1
if(p<0){d.i(a3,r,d.h(a3,t))
n=t+1
d.i(a3,t,d.h(a3,s))
d.i(a3,s,q)
t=n}else{d.i(a3,r,d.h(a3,s))
d.i(a3,s,q)}s=o
break}}H.cP(a3,t,s,a6,a7)}else H.cP(a3,t,s,a6,a7)},
F:function F(){},
aF:function aF(){},
c4:function c4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bB:function bB(a,b,c){this.a=a
this.b=b
this.$ti=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.$ti=c},
a4:function a4(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aH:function aH(a,b,c){this.a=a
this.b=b
this.$ti=c},
aw:function aw(a,b,c){this.a=a
this.b=b
this.$ti=c},
cW:function cW(a,b,c){this.a=a
this.b=b
this.$ti=c},
cS:function cS(a,b,c){this.a=a
this.b=b
this.$ti=c},
dQ:function dQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
ff:function ff(a,b,c){this.a=a
this.b=b
this.$ti=c},
cO:function cO(a,b,c){this.a=a
this.b=b
this.$ti=c},
dP:function dP(a,b,c){this.a=a
this.b=b
this.$ti=c},
f6:function f6(a,b,c){this.a=a
this.b=b
this.$ti=c},
b9:function b9(){},
cd:function cd(a){this.a=a},
kA:function(){throw H.h(P.E("Cannot modify unmodifiable Map"))},
bP:function(a){var u,t=H.m6(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lI:function(a){return v.types[H.z(a)]},
lQ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.k(a).$iaT},
b:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.I(a)
if(typeof u!=="string")throw H.h(H.al(a))
return u},
bf:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
j5:function(a,b){var u,t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return
if(3>=t.length)return H.e(t,3)
u=H.u(t[3])
if(u!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return},
l2:function(a){var u,t
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=C.e.d9(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
c9:function(a){return H.kU(a)+H.ir(H.bo(a),0,null)},
kU:function(a){var u,t,s,r,q,p,o,n=J.k(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.G||!!n.$ibh){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bP(t.length>1&&C.e.aI(t,0)===36?C.e.c0(t,1):t)},
ah:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.bH(u,10))>>>0,56320|u&1023)}throw H.h(P.cM(a,0,1114111,null,null))},
be:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l1:function(a){var u=H.be(a).getFullYear()+0
return u},
l_:function(a){var u=H.be(a).getMonth()+1
return u},
kW:function(a){var u=H.be(a).getDate()+0
return u},
kX:function(a){var u=H.be(a).getHours()+0
return u},
kZ:function(a){var u=H.be(a).getMinutes()+0
return u},
l0:function(a){var u=H.be(a).getSeconds()+0
return u},
kY:function(a){var u=H.be(a).getMilliseconds()+0
return u},
bD:function(a,b,c){var u,t,s={}
s.a=0
u=[]
t=[]
s.a=b.length
C.a.K(u,b)
s.b=""
if(c!=null&&c.a!==0)c.w(0,new H.eU(s,t,u))
""+s.a
return J.km(a,new H.ek(C.P,0,u,t,0))},
kV:function(a,b,c){var u,t,s,r
if(b instanceof Array)u=c==null||c.a===0
else u=!1
if(u){t=b
s=t.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(t[0])}else if(s===2){if(!!a.$2)return a.$2(t[0],t[1])}else if(s===3){if(!!a.$3)return a.$3(t[0],t[1],t[2])}else if(s===4){if(!!a.$4)return a.$4(t[0],t[1],t[2],t[3])}else if(s===5)if(!!a.$5)return a.$5(t[0],t[1],t[2],t[3],t[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,t)}return H.kT(a,b,c)},
kT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b instanceof Array?b:P.aW(b,!0,null),k=l.length,j=a.$R
if(k<j)return H.bD(a,l,c)
u=a.$D
t=u==null
s=!t?u():null
r=J.k(a)
q=r.$C
if(typeof q==="string")q=r[q]
if(t){if(c!=null&&c.a!==0)return H.bD(a,l,c)
if(k===j)return q.apply(a,l)
return H.bD(a,l,c)}if(s instanceof Array){if(c!=null&&c.a!==0)return H.bD(a,l,c)
if(k>j+s.length)return H.bD(a,l,null)
C.a.K(l,s.slice(k-j))
return q.apply(a,l)}else{if(k>j)return H.bD(a,l,c)
p=Object.keys(s)
if(c==null)for(t=p.length,o=0;o<p.length;p.length===t||(0,H.W)(p),++o)C.a.p(l,s[H.u(p[o])])
else{for(t=p.length,n=0,o=0;o<p.length;p.length===t||(0,H.W)(p),++o){m=H.u(p[o])
if(c.t(m)){++n
C.a.p(l,c.h(0,m))}else C.a.p(l,s[m])}if(n!==c.a)return H.bD(a,l,c)}return q.apply(a,l)}},
c:function(a){throw H.h(H.al(a))},
e:function(a,b){if(a==null)J.af(a)
throw H.h(H.b0(a,b))},
b0:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,s,null)
u=H.z(J.af(a))
if(!(b<0)){if(typeof u!=="number")return H.c(u)
t=b>=u}else t=!0
if(t)return P.bz(b,a,s,null,u)
return P.cN(b,s)},
al:function(a){return new P.az(!0,a,null,null)},
jF:function(a){if(typeof a!=="number")throw H.h(H.al(a))
return a},
h:function(a){var u
if(a==null)a=new P.cJ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jY})
u.name=""}else u.toString=H.jY
return u},
jY:function(){return J.I(this.dartException)},
X:function(a){throw H.h(a)},
W:function(a){throw H.h(P.aq(a))},
aK:function(a){var u,t,s,r,q,p
a=H.jW(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.C([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fo:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ja:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
j2:function(a,b){return new H.eM(a,b==null?null:b.method)},
ib:function(a,b){var u=b==null,t=u?null:b.method
return new H.en(a,t,u?null:b.receiver)},
P:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.hW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.bH(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ib(H.b(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.j2(H.b(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.k_()
q=$.k0()
p=$.k1()
o=$.k2()
n=$.k5()
m=$.k6()
l=$.k4()
$.k3()
k=$.k8()
j=$.k7()
i=r.Z(u)
if(i!=null)return f.$1(H.ib(H.u(u),i))
else{i=q.Z(u)
if(i!=null){i.method="call"
return f.$1(H.ib(H.u(u),i))}else{i=p.Z(u)
if(i==null){i=o.Z(u)
if(i==null){i=n.Z(u)
if(i==null){i=m.Z(u)
if(i==null){i=l.Z(u)
if(i==null){i=o.Z(u)
if(i==null){i=k.Z(u)
if(i==null){i=j.Z(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.j2(H.u(u),i))}}return f.$1(new H.fq(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cQ()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.az(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cQ()
return a},
b1:function(a){var u
if(a==null)return new H.df(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.df(a)},
jS:function(a){if(a==null||typeof a!='object')return J.aQ(a)
else return H.bf(a)},
jH:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.i(0,a[u],a[t])}return b},
lP:function(a,b,c,d,e,f){H.d(a,"$iar")
switch(H.z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.fT("Unsupported number of arguments for wrapped closure"))},
bN:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lP)
a.$identity=u
return u},
kx:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.f7().constructor.prototype):Object.create(new H.bT(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aA
if(typeof t!=="number")return t.k()
$.aA=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.iS(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kt(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.iS(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kt:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lI,a)
if(typeof a=="function")if(b)return a
else{u=c?H.iR:H.i2
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
ku:function(a,b,c,d){var u=H.i2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iS:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kw(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ku(t,!r,u,b)
if(t===0){r=$.aA
if(typeof r!=="number")return r.k()
$.aA=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bU
return new Function(r+H.b(q==null?$.bU=H.dx("self"):q)+";return "+p+"."+H.b(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aA
if(typeof r!=="number")return r.k()
$.aA=r+1
o+=r
r="return function("+o+"){return this."
q=$.bU
return new Function(r+H.b(q==null?$.bU=H.dx("self"):q)+"."+H.b(u)+"("+o+");}")()},
kv:function(a,b,c,d){var u=H.i2,t=H.iR
switch(b?-1:a){case 0:throw H.h(H.l4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kw:function(a,b){var u,t,s,r,q,p,o,n=$.bU
if(n==null)n=$.bU=H.dx("self")
u=$.iQ
if(u==null)u=$.iQ=H.dx("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kv(s,!q,t,b)
if(s===1){n="return function(){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+");"
u=$.aA
if(typeof u!=="number")return u.k()
$.aA=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+", "+o+");"
u=$.aA
if(typeof u!=="number")return u.k()
$.aA=u+1
return new Function(n+u+"}")()},
iv:function(a,b,c,d,e,f,g){return H.kx(a,b,c,d,!!e,!!f,g)},
i2:function(a){return a.a},
iR:function(a){return a.c},
dx:function(a){var u,t,s,r=new H.bT("self","target","receiver","name"),q=J.i8(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
O:function(a){if(a==null)H.ly("boolean expression must not be null")
return a},
u:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.av(a,"String"))},
lF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.av(a,"double"))},
dn:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.av(a,"num"))},
it:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.av(a,"bool"))},
z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.av(a,"int"))},
jU:function(a,b){throw H.h(H.av(a,H.bP(H.u(b).substring(2))))},
m2:function(a,b){throw H.h(H.ks(a,H.bP(H.u(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.k(a)[b])return a
H.jU(a,b)},
jL:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.k(a)[b]
else u=!0
if(u)return a
H.m2(a,b)},
a7:function(a){if(a==null)return a
if(!!J.k(a).$io)return a
throw H.h(H.av(a,"List<dynamic>"))},
S:function(a,b){var u
if(a==null)return a
u=J.k(a)
if(!!u.$io)return a
if(u[b])return a
H.jU(a,b)},
jG:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.z(u)]
else return a.$S()}return},
bn:function(a,b){var u
if(typeof a=="function")return!0
u=H.jG(J.k(a))
if(u==null)return!1
return H.js(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.io)return a
$.io=!0
try{if(H.bn(a,b))return a
u=H.cp(b)
t=H.av(a,u)
throw H.h(t)}finally{$.io=!1}},
hO:function(a,b){if(a!=null&&!H.iu(a,b))H.X(H.av(a,H.cp(b)))
return a},
av:function(a,b){return new H.cV("TypeError: "+P.aS(a)+": type '"+H.b(H.jz(a))+"' is not a subtype of type '"+b+"'")},
ks:function(a,b){return new H.dy("CastError: "+P.aS(a)+": type '"+H.b(H.jz(a))+"' is not a subtype of type '"+b+"'")},
jz:function(a){var u,t=J.k(a)
if(!!t.$ibV){u=H.jG(t)
if(u!=null)return H.cp(u)
return"Closure"}return H.c9(a)},
ly:function(a){throw H.h(new H.fz(a))},
m4:function(a){throw H.h(new P.dM(a))},
l4:function(a){return new H.f0(a)},
ix:function(a){return v.getIsolateTag(a)},
C:function(a,b){a.$ti=b
return a},
bo:function(a){if(a==null)return
return a.$ti},
mG:function(a,b,c){return H.bO(a["$a"+H.b(c)],H.bo(b))},
an:function(a,b,c,d){var u=H.bO(a["$a"+H.b(c)],H.bo(b))
return u==null?null:u[d]},
J:function(a,b,c){var u=H.bO(a["$a"+H.b(b)],H.bo(a))
return u==null?null:u[c]},
a:function(a,b){var u=H.bo(a)
return u==null?null:u[b]},
cp:function(a){return H.bm(a,null)},
bm:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bP(a[0].name)+H.ir(a,1,b)
if(typeof a=="function")return H.bP(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.b(b[t])}if('func' in a)return H.lq(a,b)
if('futureOr' in a)return"FutureOr<"+H.bm("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lq:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.C([],[P.i])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.p(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.e(a0,m)
p=C.e.k(p,a0[m])
l=u[q]
if(l!=null&&l!==P.v)p+=" extends "+H.bm(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bm(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bm(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bm(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lH(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.u(n[g])
i=i+h+H.bm(d[c],a0)+(" "+H.b(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ir:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.au("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bm(p,c)}return"<"+u.n(0)+">"},
bO:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dm:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bo(a)
t=J.k(a)
if(t[b]==null)return!1
return H.jC(H.bO(t[d],u),null,c,null)},
y:function(a,b,c,d){if(a==null)return a
if(H.dm(a,b,c,d))return a
throw H.h(H.av(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bP(b.substring(2))+H.ir(c,0,null),v.mangledGlobalNames)))},
am:function(a,b,c,d,e){if(!H.ab(a,null,b,null))H.m5("TypeError: "+H.b(c)+H.cp(a)+H.b(d)+H.cp(b)+H.b(e))},
m5:function(a){throw H.h(new H.cV(H.u(a)))},
jC:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ab(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ab(a[t],b,c[t],d))return!1
return!0},
mD:function(a,b,c){return a.apply(b,H.bO(J.k(b)["$a"+H.b(c)],H.bo(b)))},
jN:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="v"||a.name==="B"||a===-1||a===-2||H.jN(u)}return!1},
iu:function(a,b){var u,t
if(a==null)return b==null||b.name==="v"||b.name==="B"||b===-1||b===-2||H.jN(b)
if(b==null||b===-1||b.name==="v"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.iu(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bn(a,b)}u=J.k(a).constructor
t=H.bo(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ab(u,null,b,null)},
n:function(a,b){if(a!=null&&!H.iu(a,b))throw H.h(H.av(a,H.cp(b)))
return a},
ab:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="v"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="v"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ab(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.ab(b[H.z(a)],b,c,d)
if(typeof c==="number")return!1
if(a.name==="B")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ab("type" in a?a.type:l,b,s,d)
else if(H.ab(a,b,s,d))return!0
else{if(!('$i'+"aD" in t.prototype))return!1
r=t.prototype["$a"+"aD"]
q=H.bO(r,u?a.slice(1):l)
return H.ab(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.js(a,b,c,d)
if('func' in a)return c.name==="ar"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.jC(H.bO(m,u),b,p,d)},
js:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.ab(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ab(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ab(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ab(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lU(h,b,g,d)},
lU:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ab(c[s],d,a[s],b))return!1}return!0},
mF:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lS:function(a){var u,t,s,r,q=H.u($.jK.$1(a)),p=$.hN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hT[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.u($.jB.$2(a,q))
if(q!=null){p=$.hN[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hT[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.hU(u)
$.hN[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.hT[q]=u
return u}if(s==="-"){r=H.hU(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jT(a,u)
if(s==="*")throw H.h(P.jc(q))
if(v.leafTags[q]===true){r=H.hU(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jT(a,u)},
jT:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iz(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hU:function(a){return J.iz(a,!1,null,!!a.$iaT)},
lT:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hU(u)
else return J.iz(u,c,null,null)},
lM:function(){if(!0===$.iy)return
$.iy=!0
H.lN()},
lN:function(){var u,t,s,r,q,p,o,n
$.hN=Object.create(null)
$.hT=Object.create(null)
H.lL()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jV.$1(q)
if(p!=null){o=H.lT(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lL:function(){var u,t,s,r,q,p,o=C.y()
o=H.bM(C.z,H.bM(C.A,H.bM(C.n,H.bM(C.n,H.bM(C.B,H.bM(C.C,H.bM(C.D(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jK=new H.hQ(r)
$.jB=new H.hR(q)
$.jV=new H.hS(p)},
bM:function(a,b){return a(b)||b},
kR:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(P.c_("Illegal RegExp pattern ("+String(p)+")",a))},
lG:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jW:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hV:function(a,b,c){var u=H.m3(a,b,c)
return u},
m3:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jW(b),'g'),H.lG(c))},
dF:function dF(a,b){this.a=a
this.$ti=b},
dE:function dE(){},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fK:function fK(a,b){this.a=a
this.$ti=b},
ek:function ek(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
eU:function eU(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eM:function eM(a,b){this.a=a
this.b=b},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
fq:function fq(a){this.a=a},
hW:function hW(a){this.a=a},
df:function df(a){this.a=a
this.b=null},
bV:function bV(){},
fg:function fg(){},
f7:function f7(){},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cV:function cV(a){this.a=a},
dy:function dy(a){this.a=a},
f0:function f0(a){this.a=a},
fz:function fz(a){this.a=a},
L:function L(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
em:function em(a){this.a=a},
et:function et(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aE:function aE(a,b){this.a=a
this.$ti=b},
eu:function eu(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
el:function el(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aM:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.b0(b,a))},
c7:function c7(){},
cF:function cF(){},
c6:function c6(){},
cG:function cG(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eF:function eF(){},
cH:function cH(){},
eG:function eG(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
jM:function(a){var u=J.k(a)
return!!u.$ibu||!!u.$ij||!!u.$ic2||!!u.$ic0||!!u.$ir||!!u.$ibi||!!u.$iaZ},
lH:function(a){return J.kJ(a?Object.keys(a):[],null)},
m6:function(a){return v.mangledGlobalNames[a]},
m1:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hP:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iy==null){H.lM()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.jc("Return interceptor for "+H.b(u(a,q))))}s=a.constructor
r=s==null?null:s[$.iE()]
if(r!=null)return r
r=H.lS(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.iE(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
kJ:function(a,b){return J.i8(H.C(a,[b]))},
i8:function(a){a.fixed$length=Array
return a},
iW:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kP:function(a,b){var u,t
for(u=a.length;b<u;){t=C.e.aI(a,b)
if(t!==32&&t!==13&&!J.iW(t))break;++b}return b},
kQ:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.e.cP(a,u)
if(t!==32&&t!==13&&!J.iW(t))break}return b},
k:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cA.prototype
return J.cz.prototype}if(typeof a=="string")return J.bc.prototype
if(a==null)return J.cB.prototype
if(typeof a=="boolean")return J.ei.prototype
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.v)return a
return J.hP(a)},
K:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.v)return a
return J.hP(a)},
aN:function(a){if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.v)return a
return J.hP(a)},
jI:function(a){if(typeof a=="number")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.v))return J.bh.prototype
return a},
jJ:function(a){if(typeof a=="number")return J.bA.prototype
if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.v))return J.bh.prototype
return a},
iw:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.v))return J.bh.prototype
return a},
ay:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.v)return a
return J.hP(a)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.k(a).P(a,b)},
iJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jI(a).F(a,b)},
iK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jJ(a).m(a,b)},
Z:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lQ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.K(a).h(a,b)},
ka:function(a,b,c){return J.aN(a).i(a,b,c)},
kb:function(a,b,c,d){return J.ay(a).dC(a,b,c,d)},
hZ:function(a){return J.ay(a).dF(a)},
kc:function(a,b,c,d){return J.ay(a).e8(a,b,c,d)},
kd:function(a,b,c){return J.ay(a).e9(a,b,c)},
aP:function(a,b){return J.aN(a).p(a,b)},
ke:function(a,b){return J.jJ(a).b4(a,b)},
kf:function(a,b){return J.K(a).A(a,b)},
cq:function(a,b){return J.aN(a).G(a,b)},
kg:function(a){return J.ay(a).geu(a)},
kh:function(a){return J.ay(a).gcN(a)},
iL:function(a){return J.ay(a).gcO(a)},
aQ:function(a){return J.k(a).gv(a)},
ki:function(a){return J.K(a).gI(a)},
kj:function(a){return J.K(a).gbM(a)},
x:function(a){return J.aN(a).gu(a)},
af:function(a){return J.K(a).gj(a)},
kk:function(a,b){return J.aN(a).O(a,b)},
kl:function(a,b,c){return J.aN(a).E(a,b,c)},
km:function(a,b){return J.k(a).bd(a,b)},
bQ:function(a){return J.aN(a).V(a)},
kn:function(a,b){return J.ay(a).eR(a,b)},
i_:function(a,b){return J.ay(a).a6(a,b)},
ko:function(a){return J.aN(a).a_(a)},
kp:function(a){return J.iw(a).eU(a)},
I:function(a){return J.k(a).n(a)},
kq:function(a,b){return J.jI(a).eV(a,b)},
i0:function(a){return J.iw(a).d9(a)},
kr:function(a,b){return J.aN(a).ac(a,b)},
R:function R(){},
ei:function ei(){},
cB:function cB(){},
cC:function cC(){},
eT:function eT(){},
bh:function bh(){},
bd:function bd(){},
bb:function bb(a){this.$ti=a},
i9:function i9(a){this.$ti=a},
b2:function b2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bA:function bA(){},
cA:function cA(){},
cz:function cz(){},
bc:function bc(){}},P={
lf:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lz()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bN(new P.fB(s),1)).observe(u,{childList:true})
return new P.fA(s,u,t)}else if(self.setImmediate!=null)return P.lA()
return P.lB()},
lg:function(a){self.scheduleImmediate(H.bN(new P.fC(H.f(a,{func:1,ret:-1})),0))},
lh:function(a){self.setImmediate(H.bN(new P.fD(H.f(a,{func:1,ret:-1})),0))},
li:function(a){H.f(a,{func:1,ret:-1})
P.ln(0,a)},
ln:function(a,b){var u=new P.hA()
u.dB(a,b)
return u},
jh:function(a,b){var u,t,s
b.a=1
try{a.d6(new P.fY(b),new P.fZ(b),P.B)}catch(s){u=H.P(s)
t=H.b1(s)
P.jX(new P.h_(b,u,t))}},
fX:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iV")
if(u>=4){t=b.aU()
b.a=a.a
b.c=a.c
P.bH(b,t)}else{t=H.d(b.c,"$iax")
b.a=2
b.c=a
a.cz(t)}},
bH:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.d(g.c,"$ia3")
P.bK(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.bH(h.a,b)}g=h.a
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
if(m){H.d(q,"$ia3")
P.bK(i,i,g.b,q.a,q.b)
return}l=$.G
if(l!==n)$.G=n
else l=i
g=b.c
if((g&15)===8)new P.h4(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.h3(u,b,q).$0()}else if((g&2)!==0)new P.h2(h,u,b).$0()
if(l!=null)$.G=l
g=u.b
if(!!J.k(g).$iaD){if(g.a>=4){k=H.d(o.c,"$iax")
o.c=null
b=o.aX(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.fX(g,o)
return}}j=b.b
k=H.d(j.c,"$iax")
j.c=null
b=j.aX(k)
g=u.a
p=u.b
if(!g){H.n(p,H.a(j,0))
j.a=4
j.c=p}else{H.d(p,"$ia3")
j.a=8
j.c=p}h.a=j
g=j}},
lv:function(a,b){if(H.bn(a,{func:1,args:[P.v,P.N]}))return b.d1(a,null,P.v,P.N)
if(H.bn(a,{func:1,args:[P.v]}))return H.f(a,{func:1,ret:null,args:[P.v]})
throw H.h(P.i1(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ls:function(){var u,t
for(;u=$.bJ,u!=null;){$.co=null
t=u.b
$.bJ=t
if(t==null)$.cn=null
u.a.$0()}},
lx:function(){$.ip=!0
try{P.ls()}finally{$.co=null
$.ip=!1
if($.bJ!=null)$.iF().$1(P.jE())}},
jy:function(a){var u=new P.cX(a)
if($.bJ==null){$.bJ=$.cn=u
if(!$.ip)$.iF().$1(P.jE())}else $.cn=$.cn.b=u},
lw:function(a){var u,t,s=$.bJ
if(s==null){P.jy(a)
$.co=$.cn
return}u=new P.cX(a)
t=$.co
if(t==null){u.b=s
$.bJ=$.co=u}else{u.b=t.b
$.co=t.b=u
if(u.b==null)$.cn=u}},
jX:function(a){var u=null,t=$.G
if(C.d===t){P.bL(u,u,C.d,a)
return}P.bL(u,u,t,H.f(t.cM(a),{func:1,ret:-1}))},
jx:function(a){var u,t,s
if(a==null)return
try{a.$0()}catch(s){u=H.P(s)
t=H.b1(s)
P.bK(null,null,$.G,u,H.d(t,"$iN"))}},
jt:function(a,b){P.bK(null,null,$.G,a,b)},
lt:function(){},
bK:function(a,b,c,d,e){var u={}
u.a=d
P.lw(new P.hJ(u,e))},
ju:function(a,b,c,d,e){var u,t=$.G
if(t===c)return d.$0()
$.G=c
u=t
try{t=d.$0()
return t}finally{$.G=u}},
jw:function(a,b,c,d,e,f,g){var u,t=$.G
if(t===c)return d.$1(e)
$.G=c
u=t
try{t=d.$1(e)
return t}finally{$.G=u}},
jv:function(a,b,c,d,e,f,g,h,i){var u,t=$.G
if(t===c)return d.$2(e,f)
$.G=c
u=t
try{t=d.$2(e,f)
return t}finally{$.G=u}},
bL:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.cM(d):c.ev(d,-1)
P.jy(d)},
fB:function fB(a){this.a=a},
fA:function fA(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a){this.a=a},
fD:function fD(a){this.a=a},
hA:function hA(){},
hB:function hB(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.$ti=b},
U:function U(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.c=_.b=_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
bG:function bG(){},
hu:function hu(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
hv:function hv(a,b){this.a=a
this.b=b},
hw:function hw(a){this.a=a},
fJ:function fJ(){},
hx:function hx(a,b){this.a=a
this.$ti=b},
ax:function ax(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
V:function V(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
fV:function fV(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
h4:function h4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h5:function h5(a){this.a=a},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a){this.a=a
this.b=null},
a_:function a_(){},
f9:function f9(a,b){this.a=a
this.b=b},
fa:function fa(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
a0:function a0(){},
f8:function f8(){},
cY:function cY(){},
cZ:function cZ(){},
T:function T(){},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a){this.a=a},
hr:function hr(){},
b_:function b_(){},
fM:function fM(a,b){this.b=a
this.a=null
this.$ti=b},
fO:function fO(a,b){this.b=a
this.c=b
this.a=null},
fN:function fN(){},
cl:function cl(){},
hi:function hi(a,b){this.a=a
this.b=b},
cm:function cm(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
d1:function d1(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
fU:function fU(){},
d3:function d3(a,b,c,d){var _=this
_.x=a
_.c=_.b=_.a=_.y=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
hh:function hh(a,b,c){this.b=a
this.a=b
this.$ti=c},
a3:function a3(a,b){this.a=a
this.b=b},
hE:function hE(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
hj:function hj(){},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a,b){this.a=a
this.b=b},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function(a,b){var u=a[b]
return u===a?null:u},
ij:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
jj:function(){var u=Object.create(null)
P.ij(u,"<non-identifier-key>",u)
delete u["<non-identifier-key>"]
return u},
ic:function(a,b,c){return H.y(H.jH(a,new H.L([b,c])),"$iiZ",[b,c],"$aiZ")},
ev:function(a,b){return new H.L([a,b])},
id:function(){return new H.L([null,null])},
ie:function(a){return H.jH(a,new H.L([null,null]))},
c3:function(a){return new P.hg([a])},
ik:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
cg:function(a,b,c){var u=new P.d8(a,b,[c])
u.c=a.e
return u},
kH:function(a,b,c){var u,t
if(P.iq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.C([],[P.i])
C.a.p($.ac,a)
try{P.lr(a,u)}finally{if(0>=$.ac.length)return H.e($.ac,-1)
$.ac.pop()}t=P.j9(b,H.S(u,"$ip"),", ")+c
return t.charCodeAt(0)==0?t:t},
eh:function(a,b,c){var u,t
if(P.iq(a))return b+"..."+c
u=new P.au(b)
C.a.p($.ac,a)
try{t=u
t.a=P.j9(t.a,a,", ")}finally{if(0>=$.ac.length)return H.e($.ac,-1)
$.ac.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iq:function(a){var u,t
for(u=$.ac.length,t=0;t<u;++t)if(a===$.ac[t])return!0
return!1},
lr:function(a,b){var u,t,s,r,q,p,o,n=a.gu(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.l())return
u=H.b(n.gq())
C.a.p(b,u)
m+=u.length+2;++l}if(!n.l()){if(l<=5)return
if(0>=b.length)return H.e(b,-1)
t=b.pop()
if(0>=b.length)return H.e(b,-1)
s=b.pop()}else{r=n.gq();++l
if(!n.l()){if(l<=4){C.a.p(b,H.b(r))
return}t=H.b(r)
if(0>=b.length)return H.e(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gq();++l
for(;n.l();r=q,q=p){p=n.gq();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2;--l}C.a.p(b,"...")
return}}s=H.b(r)
t=H.b(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.p(b,o)
C.a.p(b,s)
C.a.p(b,t)},
j_:function(a,b){var u,t,s=P.c3(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.W)(a),++t)s.p(0,H.n(a[t],b))
return s},
ey:function(a){var u,t={}
if(P.iq(a))return"{...}"
u=new P.au("")
try{C.a.p($.ac,a)
u.a+="{"
t.a=!0
a.w(0,new P.ez(t,u))
u.a+="}"}finally{if(0>=$.ac.length)return H.e($.ac,-1)
$.ac.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
h6:function h6(){},
h9:function h9(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
h7:function h7(a,b){this.a=a
this.$ti=b},
h8:function h8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hg:function hg(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bI:function bI(a){this.a=a
this.c=this.b=null},
d8:function d8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ew:function ew(){},
M:function M(){},
ex:function ex(){},
ez:function ez(a,b){this.a=a
this.b=b},
aG:function aG(){},
hC:function hC(){},
eA:function eA(){},
fr:function fr(){},
bE:function bE(){},
f5:function f5(){},
ho:function ho(){},
d9:function d9(){},
dd:function dd(){},
dh:function dh(){},
lu:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.h(H.al(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.P(s)
r=P.c_(String(t),null)
throw H.h(r)}r=P.hF(u)
return r},
hF:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.hb(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.hF(a[u])
return a},
iY:function(a,b,c){return new P.cD(a,b)},
lp:function(a){return a.f2()},
lm:function(a,b,c){var u,t=new P.au(""),s=new P.hd(t,[],P.lE())
s.bg(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
hb:function hb(a,b){this.a=a
this.b=b
this.c=null},
hc:function hc(a){this.a=a},
dC:function dC(){},
bX:function bX(){},
cD:function cD(a,b){this.a=a
this.b=b},
eq:function eq(a,b){this.a=a
this.b=b},
ep:function ep(){},
es:function es(a){this.b=a},
er:function er(a){this.a=a},
he:function he(){},
hf:function hf(a,b){this.a=a
this.b=b},
hd:function hd(a,b,c){this.c=a
this.a=b
this.b=c},
lO:function(a){var u=H.j5(a,null)
if(u!=null)return u
throw H.h(P.c_(a,null))},
kF:function(a){if(a instanceof H.bV)return a.n(0)
return"Instance of '"+H.b(H.c9(a))+"'"},
aW:function(a,b,c){var u,t=[c],s=H.C([],t)
for(u=J.x(a);u.l();)C.a.p(s,H.n(u.gq(),c))
if(b)return s
return H.y(J.i8(s),"$io",t,"$ao")},
l3:function(a){return new H.el(a,H.kR(a,!1,!0,!1,!1,!1))},
j9:function(a,b,c){var u=J.x(b)
if(!u.l())return a
if(c.length===0){do a+=H.b(u.gq())
while(u.l())}else{a+=H.b(u.gq())
for(;u.l();)a=a+c+H.b(u.gq())}return a},
j1:function(a,b,c,d){return new P.eI(a,b,c,d)},
kB:function(a,b){var u
if(Math.abs(a)<=864e13)u=!1
else u=!0
if(u)H.X(P.br("DateTime is outside valid range: "+a))
return new P.aB(a,!1)},
kC:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cu:function(a){if(a>=10)return""+a
return"0"+a},
aS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.I(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kF(a)},
br:function(a){return new P.az(!1,null,null,a)},
i1:function(a,b,c){return new P.az(!0,a,b,c)},
cN:function(a,b){return new P.cL(null,null,!0,a,b,"Value not in range")},
cM:function(a,b,c,d,e){return new P.cL(b,c,!0,a,d,"Invalid value")},
ca:function(a,b){if(typeof a!=="number")return a.a0()
if(a<0)throw H.h(P.cM(a,0,null,b,null))},
bz:function(a,b,c,d,e){var u=H.z(e==null?J.af(b):e)
return new P.ef(u,!0,a,c,"Index out of range")},
E:function(a){return new P.fs(a)},
jc:function(a){return new P.fp(a)},
cc:function(a){return new P.aX(a)},
aq:function(a){return new P.dD(a)},
c_:function(a,b){return new P.cy(a,b)},
jR:function(a,b){var u=J.i0(a),t=H.j5(u,null)
if(t==null)t=H.l2(u)
if(t!=null)return t
if(b==null)throw H.h(P.c_(a,null))
return b.$1(a)},
iA:function(a){H.m1(H.b(a))},
eJ:function eJ(a,b){this.a=a
this.b=b},
D:function D(){},
aB:function aB(a,b){this.a=a
this.b=b},
a6:function a6(){},
b7:function b7(){},
dr:function dr(){},
cJ:function cJ(){},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cL:function cL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ef:function ef(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eI:function eI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function fs(a){this.a=a},
fp:function fp(a){this.a=a},
aX:function aX(a){this.a=a},
dD:function dD(a){this.a=a},
eN:function eN(){},
cQ:function cQ(){},
dM:function dM(a){this.a=a},
fT:function fT(a){this.a=a},
cy:function cy(a,b){this.a=a
this.b=b},
ar:function ar(){},
H:function H(){},
p:function p(){},
as:function as(){},
o:function o(){},
q:function q(){},
c5:function c5(){},
B:function B(){},
a1:function a1(){},
v:function v(){},
ai:function ai(){},
N:function N(){},
i:function i(){},
au:function au(a){this.a=a},
aJ:function aJ(){},
dJ:function dJ(){},
dK:function dK(a){this.a=a},
ea:function ea(a,b){this.a=a
this.b=b},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
c2:function c2(){},
lo:function(a,b,c,d){var u,t
H.it(b)
H.a7(d)
if(H.O(b)){u=[c]
C.a.K(u,d)
d=u}t=P.aW(J.kl(d,P.lR(),null),!0,null)
H.d(a,"$iar")
return P.dl(H.kV(a,t,null))},
iX:function(a){return H.d(P.is(P.kS(a)),"$iaj")},
kS:function(a){return new P.eo(new P.h9([null,null])).$1(a)},
il:function(a,b,c){var u
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(u){H.P(u)}return!1},
jq:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
dl:function(a){var u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
u=J.k(a)
if(!!u.$iaj)return a.a
if(H.jM(a))return a
if(!!u.$ijb)return a
if(!!u.$iaB)return H.be(a)
if(!!u.$iar)return P.jp(a,"$dart_jsFunction",new P.hH())
return P.jp(a,"_$dart_jsObject",new P.hI($.iH()))},
jp:function(a,b,c){var u=P.jq(a,b)
if(u==null){u=c.$1(a)
P.il(a,b,u)}return u},
hG:function(a){var u,t
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.jM(a))return a
else if(a instanceof Object&&!!J.k(a).$ijb)return a
else if(a instanceof Date){u=H.z(a.getTime())
if(Math.abs(u)<=864e13)t=!1
else t=!0
if(t)H.X(P.br("DateTime is outside valid range: "+u))
return new P.aB(u,!1)}else if(a.constructor===$.iH())return a.o
else return P.is(a)},
is:function(a){if(typeof a=="function")return P.im(a,$.hY(),new P.hK())
if(a instanceof Array)return P.im(a,$.iG(),new P.hL())
return P.im(a,$.iG(),new P.hM())},
im:function(a,b,c){var u=P.jq(a,b)
if(u==null||!(a instanceof Object)){u=c.$1(a)
P.il(a,b,u)}return u},
aj:function aj(a){this.a=a},
eo:function eo(a){this.a=a},
aU:function aU(a){this.a=a},
c1:function c1(a,b){this.a=a
this.$ti=b},
hH:function hH(){},
hI:function hI(a){this.a=a},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
d7:function d7(){},
jl:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aI:function aI(a,b,c){this.a=a
this.b=b
this.$ti=c},
cb:function cb(){},
ds:function ds(a){this.a=a},
l:function l(){}},W={
m7:function(){return window},
iM:function(a){var u=document.createElement("a")
if(a!=null)u.href=a
return u},
kE:function(a,b,c){var u=document.body,t=(u&&C.m).L(u,a,b,c)
t.toString
u=W.r
u=new H.aw(new W.a5(t),H.f(new W.dR(),{func:1,ret:P.D,args:[u]}),[u])
return H.d(u.gad(u),"$it")},
bZ:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ay(a)
t=u.gd4(a)
if(typeof t==="string")r=u.gd4(a)}catch(s){H.P(s)}return r},
kG:function(a){var u,t=document.createElement("input"),s=H.d(t,"$iba")
try{s.type=a}catch(u){H.P(u)}return s},
ha:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jm:function(a,b,c,d){var u=W.ha(W.ha(W.ha(W.ha(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Q:function(a,b,c,d,e){var u=W.jA(new W.fS(c),W.j)
u=new W.fR(a,b,u,!1,[e])
u.cH()
return u},
jk:function(a){var u=W.iM(null),t=window.location
u=new W.bl(new W.hn(u,t))
u.dz(a)
return u},
lk:function(a,b,c,d){H.d(a,"$it")
H.u(b)
H.u(c)
H.d(d,"$ibl")
return!0},
ll:function(a,b,c,d){var u,t,s
H.d(a,"$it")
H.u(b)
H.u(c)
u=H.d(d,"$ibl").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
jn:function(){var u=P.i,t=P.j_(C.i,u),s=H.a(C.i,0),r=H.f(new W.hz(),{func:1,ret:u,args:[s]}),q=H.C(["TEMPLATE"],[u])
t=new W.hy(t,P.c3(u),P.c3(u),P.c3(u),null)
t.dA(null,new H.aH(C.i,r,[s,u]),q,null)
return t},
jo:function(a){var u
if("postMessage" in a){u=W.lj(a)
return u}else return H.d(a,"$ib8")},
lj:function(a){if(a===window)return H.d(a,"$ijg")
else return new W.fL()},
jA:function(a,b){var u=$.G
if(u===C.d)return a
return u.ew(a,b)},
m:function m(){},
bR:function bR(){},
dq:function dq(){},
bS:function bS(){},
bu:function bu(){},
b3:function b3(){},
b4:function b4(){},
b5:function b5(){},
b6:function b6(){},
bY:function bY(){},
dL:function dL(){},
bw:function bw(){},
dN:function dN(){},
cv:function cv(){},
dO:function dO(){},
fI:function fI(a,b){this.a=a
this.b=b},
aa:function aa(a,b){this.a=a
this.$ti=b},
t:function t(){},
dR:function dR(){},
j:function j(){},
b8:function b8(){},
ee:function ee(){},
by:function by(){},
c0:function c0(){},
ba:function ba(){},
aV:function aV(){},
cE:function cE(){},
A:function A(){},
a5:function a5(a){this.a=a},
r:function r(){},
c8:function c8(){},
f1:function f1(){},
cR:function cR(){},
fd:function fd(){},
fe:function fe(){},
ce:function ce(){},
aY:function aY(){},
bg:function bg(){},
bi:function bi(){},
fy:function fy(a){this.a=a},
aZ:function aZ(){},
cf:function cf(){},
d0:function d0(){},
da:function da(){},
fE:function fE(){},
fP:function fP(a){this.a=a},
fQ:function fQ(a){this.a=a},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fR:function fR(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fS:function fS(a){this.a=a},
dg:function dg(a,b){this.a=null
this.b=a
this.$ti=b},
hs:function hs(a,b){this.a=a
this.b=b},
bl:function bl(a){this.a=a},
ag:function ag(){},
cI:function cI(a){this.a=a},
eL:function eL(a){this.a=a},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(){},
hp:function hp(){},
hq:function hq(){},
hy:function hy(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hz:function hz(){},
ht:function ht(){},
cx:function cx(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
fL:function fL(){},
a9:function a9(){},
hn:function hn(a,b){this.a=a
this.b=b},
di:function di(a){this.a=a},
hD:function hD(a){this.a=a},
d_:function d_(){},
d5:function d5(){},
d6:function d6(){},
db:function db(){},
dc:function dc(){},
dj:function dj(){},
dk:function dk(){}},U={
iO:function(a,b,c){var u=[P.H,U.at],t=$.ae()
if(typeof t!=="number")return H.c(t)
t=new U.ao(b,c,new H.L(u),new H.L(u),"400 "+H.b(14*t)+"px 'Poppins', sans-serif",a)
t.af(a,b,c)
return t},
iP:function(a,b){var u,t,s,r,q,p="clauses",o="type",n="properties",m=b.h(0,"action"),l=m==null?"":J.I(m),k=H.z(b.h(0,"id"))
if(!!J.k(b.h(0,p)).$io)u=U.iN(a,k,l)
else if(J.Y(b.h(0,o),"clause")){m=[P.H,U.at]
t=$.ae()
if(typeof t!=="number")return H.c(t)
u=new U.ap(k,l,new H.L(m),new H.L(m),"400 "+H.b(14*t)+"px 'Poppins', sans-serif",a)
u.af(a,k,l)
u.k1=!1}else u=U.iO(a,k,l)
b.i(0,"id",u.a)
m=b.h(0,o)
u.d=m==null?"":J.I(m)
m=b.h(0,"format")
u.e=m==null?null:J.I(m)
m=b.h(0,"blockColor")
t=u.dy
u.dy=m==null?t:J.I(m)
m=b.h(0,"textColor")
t=u.fr
u.fr=m==null?t:J.I(m)
m=b.h(0,"borderColor")
t=u.fx
u.fx=m==null?t:J.I(m)
m=b.h(0,"font")
t=u.fy
u.fy=m==null?t:J.I(m)
u.k1=!U.iB(b.h(0,"start"),!1)
u.go=U.iB(b.h(0,"required"),u.go)
if(!!J.k(b.h(0,"params")).$io)for(m=J.x(H.S(b.h(0,"params"),"$ip")),t=u.cy;m.l();){s=U.ig(u,H.d(m.gq(),"$iq"))
t.i(0,s.a,s)}if(!!J.k(b.h(0,n)).$io)for(m=J.x(H.S(b.h(0,n),"$ip")),t=u.db;m.l();){r=U.ig(u,H.d(m.gq(),"$iq"))
t.i(0,r.a,r)}m=u.db.a
t=$.w()
if(typeof t!=="number")return H.c(t)
u.y=(1+m)*t
m=!!u.$ibt
if(m&&!!J.k(b.h(0,p)).$io)for(t=J.x(H.S(b.h(0,p),"$ip"));t.l();){q=t.gq()
J.ka(q,o,"clause")
u.c6(H.jL(U.iP(a,H.d(q,"$iq")),"$iap"))}if(m&&b.h(0,"end")!=null){m=u.S
t=J.Z(b.h(0,"end"),"format")
m.e=t==null?null:J.I(t)}return u},
iN:function(a,b,c){var u,t,s="px 'Poppins', sans-serif",r=H.C([],[U.ap]),q=[P.H,U.at],p=$.ae()
if(typeof p!=="number")return H.c(p)
p=14*p
u=new U.bt(r,b,c,new H.L(q),new H.L(q),"400 "+H.b(p)+s,a)
u.af(a,b,c)
t="end-"+H.b(c)
q=new U.cw(null,t,new H.L(q),new H.L(q),"400 "+H.b(p)+s,a)
q.af(a,null,t)
q.k1=!1
t=$.w()
if(typeof t!=="number")return t.an()
q.y=t/2
q.e=""
u.S=q
q.N=u
C.a.p(r,q)
u.x1=u.S
return u},
ky:function(a,b,c,d){var u
if($.cs==null){u=new H.L([P.i,U.cr])
$.cs=u
u.i(0,"NetLogo",new U.eH())
$.cs.i(0,"plain",new U.eS())}if($.cs.t(a))return $.cs.h(0,a).cs(b,c,d)
else return C.h.bK(c,null)},
bv:function(a){var u,t,s,r,q,p=J.K(a),o=p.h(a,"children")
if(o==null||!J.k(o).$io)o=[]
u=p.h(a,"name")
t=u==null?"":J.I(u)
u=p.h(a,"format")
if(typeof u==="string"){s=H.u(p.h(a,"format"))
for(p=J.K(o),r=0;r<p.gj(o);++r){u="{"+r+"}"
q=U.bv(p.h(o,r))
s.toString
if(typeof q!=="string")H.X(H.al(q))
s=H.hV(s,u,q)}return s}else{p=J.K(o)
if(p.gj(o)===1)return"("+H.b(t)+" "+H.b(U.bv(p.h(o,0)))+")"
else if(p.gj(o)===2)return"("+H.b(U.bv(p.h(o,0)))+" "+H.b(t)+" "+H.b(U.bv(p.h(o,1)))+")"
else return t}},
lD:function(a,b){var u,t="action",s=J.k(a)
if(!s.$io||s.gj(a)===0||J.Z(s.h(a,0),t)==null)return-1
u=J.k(b)
if(!u.$io||u.gj(b)===0||J.Z(u.h(b,0),t)==null)return 1
return J.ke(J.Z(s.h(a,0),t),J.Z(u.h(b,0),t))},
j3:function(a,b){var u=$.w()
if(typeof u!=="number")return u.m()
u=new U.at(a,u*0.6)
u.ao(a,b)
return u},
ig:function(a,b){var u=b.h(0,"type")
switch(u==null?"num":J.I(u)){case"int":u=$.w()
if(typeof u!=="number")return u.m()
u=new U.eg(a,u*0.6)
u.ao(a,b)
u.c2(a,b)
u.cy=1
return u
case"num":return U.i6(a,b)
case"bool":return U.i6(a,b)
case"range":u=$.w()
if(typeof u!=="number")return u.m()
u=new U.eW(a,u*0.6)
u.ao(a,b)
u.c2(a,b)
u.r1=U.aO(b.h(0,"min"),u.r1)
u.r2=U.aO(b.h(0,"max"),u.r2)
return u
case"select":return U.j6(a,b)
case"text":return U.j3(a,b)
default:return U.j3(a,b)}},
j6:function(a,b){var u,t="values",s=$.w()
if(typeof s!=="number")return s.m()
s=new U.f2([],a,s*0.6)
s.ao(a,b)
if(!!J.k(b.h(0,t)).$io&&J.iJ(J.af(b.h(0,t)),0)){u=H.a7(b.h(0,t))
s.cx=u
s.cy=s.cb(J.Z(u,0))
s.c=J.Z(J.Z(s.cx,0),"actual")}return s},
i6:function(a,b){var u,t=$.w()
if(typeof t!=="number")return t.m()
t=new U.dT(a,t*0.6)
t.ao(a,b)
u=new U.dS(a.id)
u.c=new U.aC(u,H.u(b.h(0,"type")),H.C([],[U.aC]))
t.cx=u
u.aA(t.c)
return t},
kz:function(a,b){var u=H.C([],[U.ao]),t=H.C([],[U.cU]),s=P.H,r=U.bF,q=H.C([],[r]),p=[P.a6]
p=new U.bW(2,a,u,b,[],[],new U.fh(t,new H.L([s,U.cT])),q,new H.L([s,r]),new U.bC(H.C([1,0,0,0,1,0,0,0,1],p)),new U.bC(H.C([1,0,0,0,1,0,0,0,1],p)),new P.aB(Date.now(),!1))
p.dw(a,b)
return p},
jr:function(a,b){var u,t,s,r,q="version"
H.y(b,"$iq",[P.i,P.v],"$aq")
t=H.z(H.O(b.t(q))?b.h(0,q):0)
if(typeof t!=="number")return t.F()
if(t>2)H.X("Somehow the given model version ("+t+") is greater than the supported NetTango version (2).")
if(t<1)U.lb(b)
if(t<2)U.jf(b,U.jQ(),U.jQ())
b.i(0,q,2)
try{$.ad.i(0,a,U.kz(a,b))}catch(s){r=H.P(s)
if(r instanceof P.cy){u=r
throw H.h(P.c_("There was an error initializing the workspace with the given NetTango model JSON.",u))}else throw s}$.ad.h(0,a).M()},
kM:function(a,b){var u
H.u(a)
H.u(b)
if($.ad.h(0,a) instanceof U.bW)$.ad.h(0,a).eW()
u=C.h.cQ(0,b,null)
if(!!J.k(u).$iq)U.jr(a,u)},
kL:function(a){var u,t,s,r=C.h.cQ(0,H.u(a),null)
if(!!J.k(r).$iq)for(u=J.x(r.gB());u.l();){t=u.gq()
if($.ad.h(0,t) instanceof U.bW){s=$.ad.h(0,t)
C.a.sj(s.a,0)
C.a.sj(s.x,0)
C.a.H(s.fr.c,s)}if(!!J.k(r.h(0,t)).$iq){H.u(t)
U.jr(t,H.d(r.h(0,t),"$iq"))}}},
kK:function(a,b,c){H.u(a)
H.u(b)
H.d(c,"$iaU")
if($.ad.t(a))return U.ky(b,a,$.ad.h(0,a).bL(),new U.ej(c))
return},
kO:function(a){var u
H.u(a)
if($.ad.t(a)){u=$.ad.h(0,a).Q
u.i(0,"program",$.ad.h(0,a).bL())
return C.h.bK(u,null)}},
kN:function(){var u,t,s,r=P.id()
for(u=$.ad,u=new H.aE(u,[H.a(u,0)]),u=u.gu(u);u.l();){t=u.d
s=$.ad.h(0,t).Q
s.i(0,"program",$.ad.h(0,t).bL())
r.i(0,t,s)}return C.h.bK(r,null)},
jP:function(){var u=$.iI()
u.i(0,"NetTango_InitWorkspace",U.lY())
u.i(0,"NetTango_InitAllWorkspaces",U.lX())
u.i(0,"NetTango_ExportCode",U.lW())
u.i(0,"NetTango_Save",U.m_())
u.i(0,"NetTango_SaveAll",U.lZ())},
i3:function(a){var u,t,s=new U.ct()
s.a=-1
u=J.ay(a)
t=u.gcZ(a).a
t.toString
s.d=s.c=t
u=u.gcZ(a).b
u.toString
s.f=s.e=u
s.Q=!0
return s},
iC:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{u=P.lO(a)
return u}catch(t){if(!!J.k(H.P(t)).$ii5)return b
else throw t}return b},
aO:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{u=P.jR(a,null)
return u}catch(t){if(!!J.k(H.P(t)).$ii5)return b
else throw t}return b},
iB:function(a,b){if(a==null)return b
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
lb:function(a){var u={},t=P.H,s=new H.L([P.i,t]),r=new H.L([t,t])
u.a=0
U.jf(a,new U.fu(u,s,r),new U.fv(s,r))},
jd:function(a,b){var u={}
u.a=a
U.je(b,new U.ft(u))
return u.a},
la:function(a,b){var u,t
for(u=J.x(b),t=[P.i,P.v];u.l();){H.y(u.gq(),"$iq",t,"$aq").i(0,"id",a)
if(typeof a!=="number")return a.k();++a}return a},
l9:function(a,b,c){var u,t
if(!H.O(c.t("action")))return
u=H.u(c.h(0,"action"))
if(a.t(u)){t=a.h(0,u)
c.i(0,"id",t)
U.jd(b.h(0,t),H.y(c,"$iq",[P.i,P.v],"$aq"))}},
le:function(a){U.je(a,U.lV())},
lc:function(a){var u="values"
if(!H.O(a.t(u))||!J.k(a.h(0,u)).$io)return
a.i(0,u,J.ko(J.kk(a.h(0,u),new U.fw())))},
ld:function(a){var u,t,s
for(u=J.kr(a,new U.fx()),t=J.x(u.a),u=new H.cW(t,u.b,[H.a(u,0)]),s=[P.i,P.v];u.l();)U.lc(H.y(t.gq(),"$iq",s,"$aq"))},
jf:function(a,b,c){var u,t,s,r,q,p,o,n,m="blocks",l="children",k="clauses",j="program",i="chains"
if(!H.O(a.t(m))||!J.k(a.h(0,m)).$io)return
for(u=J.x(H.S(a.h(0,m),"$ip")),t=[P.i,P.v];u.l();)b.$1(H.y(u.gq(),"$iq",t,"$aq"))
for(u=J.x(H.S(a.h(0,m),"$ip"));u.l();){s=H.y(u.gq(),"$iq",t,"$aq")
if(H.O(s.t(l))&&!!J.k(s.h(0,l)).$io)for(r=J.x(H.S(s.h(0,l),"$ip"));r.l();){q=r.gq()
if(!!J.k(q).$iq)c.$1(q)}if(H.O(s.t(k))&&!!J.k(s.h(0,k)).$io)for(r=J.x(H.S(s.h(0,k),"$ip"));r.l();){p=r.gq()
o=J.k(p)
if(!!o.$iq&&H.O(p.t(l))&&!!J.k(p.h(0,l)).$io)for(o=J.x(H.S(o.h(p,l),"$ip"));o.l();)c.$1(H.d(o.gq(),"$iq"))}}if(!H.O(a.t(j))||!J.k(a.h(0,j)).$iq)return
n=H.d(a.h(0,j),"$iq")
if(!H.O(n.t(i))||!J.k(n.h(0,i)).$io)return
for(u=J.x(H.S(n.h(0,i),"$ip"));u.l();)for(t=J.x(H.a7(u.gq()));t.l();)c.$1(H.d(t.gq(),"$iq"))},
je:function(a,b){var u="params",t="properties"
if(H.O(a.t(u))&&!!J.k(a.h(0,u)).$io)b.$1(H.a7(a.h(0,u)))
if(H.O(a.t(t))&&!!J.k(a.h(0,t)).$io)b.$1(H.a7(a.h(0,t)))},
ao:function ao(a,b,c,d,e,f){var _=this
_.a=a
_.b=null
_.c=b
_.e=_.d=null
_.y=_.x=_.r=_.f=0
_.Q=_.z=null
_.ch=0
_.cx=null
_.cy=c
_.db=d
_.dx=0
_.dy="#6b9bc3"
_.fr="white"
_.fx="rgba(255, 255, 255, 0.6)"
_.fy=e
_.go=!1
_.id=f
_.k1=!0
_.k2=!1
_.r2=_.r1=_.k4=_.k3=null
_.rx=!1
_.ry=!0},
dI:function dI(){},
ap:function ap(a,b,c,d,e,f){var _=this
_.x1=_.N=null
_.a=a
_.b=null
_.c=b
_.e=_.d=null
_.y=_.x=_.r=_.f=0
_.Q=_.z=null
_.ch=0
_.cx=null
_.cy=c
_.db=d
_.dx=0
_.dy="#6b9bc3"
_.fr="white"
_.fx="rgba(255, 255, 255, 0.6)"
_.fy=e
_.go=!1
_.id=f
_.k1=!0
_.k2=!1
_.r2=_.r1=_.k4=_.k3=null
_.rx=!1
_.ry=!0},
cw:function cw(a,b,c,d,e,f){var _=this
_.x1=_.N=null
_.a=a
_.b=null
_.c=b
_.e=_.d=null
_.y=_.x=_.r=_.f=0
_.Q=_.z=null
_.ch=0
_.cx=null
_.cy=c
_.db=d
_.dx=0
_.dy="#6b9bc3"
_.fr="white"
_.fx="rgba(255, 255, 255, 0.6)"
_.fy=e
_.go=!1
_.id=f
_.k1=!0
_.k2=!1
_.r2=_.r1=_.k4=_.k3=null
_.rx=!1
_.ry=!0},
bt:function bt(a,b,c,d,e,f,g){var _=this
_.N=a
_.x1=_.S=null
_.a=b
_.b=null
_.c=c
_.e=_.d=null
_.y=_.x=_.r=_.f=0
_.Q=_.z=null
_.ch=0
_.cx=null
_.cy=d
_.db=e
_.dx=0
_.dy="#6b9bc3"
_.fr="white"
_.fx="rgba(255, 255, 255, 0.6)"
_.fy=f
_.go=!1
_.id=g
_.k1=!0
_.k2=!1
_.r2=_.r1=_.k4=_.k3=null
_.rx=!1
_.ry=!0},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c},
e3:function e3(a,b){this.a=a
this.b=b},
e4:function e4(a){this.a=a},
e5:function e5(a){this.a=a},
e2:function e2(a,b){this.a=a
this.b=b},
e6:function e6(){},
e9:function e9(a,b){this.a=a
this.b=b},
e7:function e7(){},
e8:function e8(a,b){this.a=a
this.b=b},
e1:function e1(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a){this.a=a
this.c=this.b=null},
cr:function cr(){},
eS:function eS(){},
eH:function eH(){},
du:function du(a,b,c){this.a=a
this.b=b
this.d=c},
dv:function dv(a){this.a=a},
dw:function dw(a){this.a=a},
ak:function ak(a,b,c){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c},
at:function at(a,b){var _=this
_.a=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""
_.y=_.x=0
_.z=28
_.Q=b
_.ch=!1},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
eP:function eP(a){this.a=a},
eQ:function eQ(a,b){this.a=a
this.b=b},
eR:function eR(a,b){this.a=a
this.b=b},
cK:function cK(){},
eg:function eg(a,b){var _=this
_.cx=!1
_.cy=1
_.a=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""
_.y=_.x=0
_.z=28
_.Q=b
_.ch=!1},
eW:function eW(a,b){var _=this
_.r1=0
_.r2=10
_.cx=!1
_.cy=1
_.a=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""
_.y=_.x=0
_.z=28
_.Q=b
_.ch=!1},
eX:function eX(){},
eY:function eY(a){this.a=a},
eZ:function eZ(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a,b){this.a=a
this.b=b},
f2:function f2(a,b,c){var _=this
_.cx=a
_.a=_.cy=null
_.b=b
_.d=_.c=null
_.e="int"
_.r=_.f=""
_.y=_.x=0
_.z=28
_.Q=c
_.ch=!1},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a){this.a=a},
dT:function dT(a,b){var _=this
_.a=_.cx=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""
_.y=_.x=0
_.z=28
_.Q=b
_.ch=!1},
dX:function dX(a,b){this.a=a
this.b=b},
dY:function dY(){},
dW:function dW(){},
dZ:function dZ(){},
dV:function dV(){},
e_:function e_(a){this.a=a},
e0:function e0(){},
dU:function dU(){},
eV:function eV(){},
dt:function dt(a,b){this.b=a
this.c=b},
bs:function bs(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bW:function bW(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.f=a
_.r=b
_.x=c
_.z=_.y=0
_.Q=d
_.cy=_.cx=_.ch=null
_.db=e
_.dx=f
_.dy=null
_.fr=g
_.a=h
_.b=i
_.c=j
_.d=k
_.e=l},
dB:function dB(a){this.a=a},
dA:function dA(a){this.a=a},
dz:function dz(){},
ej:function ej(a){this.a=a},
bC:function bC(a){this.a=a},
fh:function fh(a,b){this.a=!1
this.c=a
this.d=b},
fi:function fi(a){this.a=a},
fj:function fj(a){this.a=a},
fk:function fk(a){this.a=a},
fl:function fl(a){this.a=a},
fm:function fm(){},
cU:function cU(){},
cT:function cT(a,b){this.a=a
this.b=b},
bF:function bF(){},
ct:function ct(){var _=this
_.a=null
_.b=-1
_.f=_.e=_.d=_.c=0
_.Q=_.z=_.y=_.x=!1},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b){this.a=a
this.b=b},
ft:function ft(a){this.a=a},
fw:function fw(){},
fx:function fx(){}}
var w=[C,H,J,P,W,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ia.prototype={}
J.R.prototype={
P:function(a,b){return a===b},
gv:function(a){return H.bf(a)},
n:function(a){return"Instance of '"+H.b(H.c9(a))+"'"},
bd:function(a,b){H.d(b,"$ii7")
throw H.h(P.j1(a,b.gcX(),b.gd0(),b.gcY()))}}
J.ei.prototype={
n:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$iD:1}
J.cB.prototype={
P:function(a,b){return null==b},
n:function(a){return"null"},
gv:function(a){return 0},
bd:function(a,b){return this.dj(a,H.d(b,"$ii7"))},
$iB:1}
J.cC.prototype={
gv:function(a){return 0},
n:function(a){return String(a)}}
J.eT.prototype={}
J.bh.prototype={}
J.bd.prototype={
n:function(a){var u=a[$.hY()]
if(u==null)return this.dm(a)
return"JavaScript function for "+H.b(J.I(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iar:1}
J.bb.prototype={
p:function(a,b){H.n(b,H.a(a,0))
if(!!a.fixed$length)H.X(P.E("add"))
a.push(b)},
a5:function(a,b){var u
if(!!a.fixed$length)H.X(P.E("removeAt"))
u=a.length
if(b>=u)throw H.h(P.cN(b,null))
return a.splice(b,1)[0]},
H:function(a,b){var u
if(!!a.fixed$length)H.X(P.E("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
ac:function(a,b){var u=H.a(a,0)
return new H.aw(a,H.f(b,{func:1,ret:P.D,args:[u]}),[u])},
K:function(a,b){var u
H.y(b,"$ip",[H.a(a,0)],"$ap")
if(!!a.fixed$length)H.X(P.E("addAll"))
for(u=J.x(b);u.l();)a.push(u.gq())},
w:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.a(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.aq(a))}},
E:function(a,b,c){var u=H.a(a,0)
return new H.aH(a,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
G:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cK:function(a,b){var u,t
H.f(b,{func:1,ret:P.D,args:[H.a(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.O(b.$1(a[t])))return!0
if(a.length!==u)throw H.h(P.aq(a))}return!1},
a1:function(a,b){var u=H.a(a,0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
if(!!a.immutable$list)H.X(P.E("sort"))
H.j7(a,b,u)},
A:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
gI:function(a){return a.length===0},
gbM:function(a){return a.length!==0},
n:function(a){return P.eh(a,"[","]")},
J:function(a,b){var u=H.C(a.slice(0),[H.a(a,0)])
return u},
a_:function(a){return this.J(a,!0)},
gu:function(a){return new J.b2(a,a.length,[H.a(a,0)])},
gv:function(a){return H.bf(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.X(P.E("set length"))
if(b<0)throw H.h(P.cM(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.z(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.b0(a,b))
if(b>=a.length||b<0)throw H.h(H.b0(a,b))
return a[b]},
i:function(a,b,c){H.z(b)
H.n(c,H.a(a,0))
if(!!a.immutable$list)H.X(P.E("indexed set"))
if(b>=a.length||b<0)throw H.h(H.b0(a,b))
a[b]=c},
$iF:1,
$ip:1,
$io:1}
J.i9.prototype={}
J.b2.prototype={
gq:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.W(s))
u=t.c
if(u>=r){t.sc4(null)
return!1}t.sc4(s[u]);++t.c
return!0},
sc4:function(a){this.d=H.n(a,H.a(this,0))},
$ias:1}
J.bA.prototype={
b4:function(a,b){var u
H.dn(b)
if(typeof b!=="number")throw H.h(H.al(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gba(b)
if(this.gba(a)===u)return 0
if(this.gba(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gba:function(a){return a===0?1/a<0:a<0},
bf:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.E(""+a+".toInt()"))},
b8:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.E(""+a+".floor()"))},
d2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.E(""+a+".round()"))},
eV:function(a,b){var u
if(b>20)throw H.h(P.cM(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gba(a))return"-"+u
return u},
n:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
k:function(a,b){if(typeof b!=="number")throw H.h(H.al(b))
return a+b},
m:function(a,b){if(typeof b!=="number")throw H.h(H.al(b))
return a*b},
cG:function(a,b){return(a|0)===a?a/b|0:this.ej(a,b)},
ej:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.E("Result of truncating division is "+H.b(u)+": "+H.b(a)+" ~/ "+b))},
bH:function(a,b){var u
if(a>0)u=this.eh(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eh:function(a,b){return b>31?0:a>>>b},
F:function(a,b){if(typeof b!=="number")throw H.h(H.al(b))
return a>b},
$ia6:1,
$ia1:1}
J.cA.prototype={$iH:1}
J.cz.prototype={}
J.bc.prototype={
cP:function(a,b){if(b<0)throw H.h(H.b0(a,b))
if(b>=a.length)H.X(H.b0(a,b))
return a.charCodeAt(b)},
aI:function(a,b){if(b>=a.length)throw H.h(H.b0(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(typeof b!=="string")throw H.h(P.i1(b,null,null))
return a+b},
eC:function(a,b){var u=b.length,t=a.length
if(u>t)return!1
return b===this.c0(a,t-u)},
dg:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
ae:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.cN(b,null))
if(b>c)throw H.h(P.cN(b,null))
if(c>a.length)throw H.h(P.cN(c,null))
return a.substring(b,c)},
c0:function(a,b){return this.ae(a,b,null)},
eU:function(a){return a.toLowerCase()},
d9:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.aI(r,0)===133){u=J.kP(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.cP(r,t)===133?J.kQ(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
m:function(a,b){var u,t
H.z(b)
if(typeof b!=="number")return H.c(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.E)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
b4:function(a,b){var u
H.u(b)
if(typeof b!=="string")throw H.h(H.al(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
n:function(a){return a},
gv:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
h:function(a,b){H.z(b)
if(b>=a.length||!1)throw H.h(H.b0(a,b))
return a[b]},
$ij4:1,
$ii:1}
H.F.prototype={}
H.aF.prototype={
gu:function(a){var u=this
return new H.c4(u,u.gj(u),[H.J(u,"aF",0)])},
gI:function(a){return this.gj(this)===0},
ac:function(a,b){return this.dl(0,H.f(b,{func:1,ret:P.D,args:[H.J(this,"aF",0)]}))},
E:function(a,b,c){var u=H.J(this,"aF",0)
return new H.aH(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
J:function(a,b){var u,t=this,s=H.C([],[H.J(t,"aF",0)])
C.a.sj(s,t.gj(t))
for(u=0;u<t.gj(t);++u)C.a.i(s,u,t.G(0,u))
return s},
a_:function(a){return this.J(a,!0)}}
H.c4.prototype={
gq:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=J.K(s),q=r.gj(s)
if(t.b!==q)throw H.h(P.aq(s))
u=t.c
if(u>=q){t.sap(null)
return!1}t.sap(r.G(s,u));++t.c
return!0},
sap:function(a){this.d=H.n(a,H.a(this,0))},
$ias:1}
H.bB.prototype={
gu:function(a){return new H.a4(J.x(this.a),this.b,this.$ti)},
gj:function(a){return J.af(this.a)},
G:function(a,b){return this.b.$1(J.cq(this.a,b))},
$ap:function(a,b){return[b]}}
H.bx.prototype={$iF:1,
$aF:function(a,b){return[b]}}
H.a4.prototype={
l:function(){var u=this,t=u.b
if(t.l()){u.sap(u.c.$1(t.gq()))
return!0}u.sap(null)
return!1},
gq:function(){return this.a},
sap:function(a){this.a=H.n(a,H.a(this,1))},
$aas:function(a,b){return[b]}}
H.aH.prototype={
gj:function(a){return J.af(this.a)},
G:function(a,b){return this.b.$1(J.cq(this.a,b))},
$aF:function(a,b){return[b]},
$aaF:function(a,b){return[b]},
$ap:function(a,b){return[b]}}
H.aw.prototype={
gu:function(a){return new H.cW(J.x(this.a),this.b,this.$ti)},
E:function(a,b,c){var u=H.a(this,0)
return new H.bB(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)}}
H.cW.prototype={
l:function(){var u,t
for(u=this.a,t=this.b;u.l();)if(H.O(t.$1(u.gq())))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cS.prototype={
gu:function(a){return new H.ff(J.x(this.a),this.b,this.$ti)}}
H.dQ.prototype={
gj:function(a){var u=J.af(this.a),t=this.b
if(u>t)return t
return u},
$iF:1}
H.ff.prototype={
l:function(){if(--this.b>=0)return this.a.l()
this.b=-1
return!1},
gq:function(){if(this.b<0)return
return this.a.gq()}}
H.cO.prototype={
gu:function(a){return new H.f6(J.x(this.a),this.b,this.$ti)}}
H.dP.prototype={
gj:function(a){var u=J.af(this.a)-this.b
if(u>=0)return u
return 0},
$iF:1}
H.f6.prototype={
l:function(){var u,t
for(u=this.a,t=0;t<this.b;++t)u.l()
this.b=0
return u.l()},
gq:function(){return this.a.gq()}}
H.b9.prototype={
sj:function(a,b){throw H.h(P.E("Cannot change the length of a fixed-length list"))},
p:function(a,b){H.n(b,H.an(this,a,"b9",0))
throw H.h(P.E("Cannot add to a fixed-length list"))},
a5:function(a,b){throw H.h(P.E("Cannot remove from a fixed-length list"))}}
H.cd.prototype={
gv:function(a){var u=this._hashCode
if(u!=null)return u
u=536870911&664597*J.aQ(this.a)
this._hashCode=u
return u},
n:function(a){return'Symbol("'+H.b(this.a)+'")'},
P:function(a,b){if(b==null)return!1
return b instanceof H.cd&&this.a==b.a},
$iaJ:1}
H.dF.prototype={}
H.dE.prototype={
gI:function(a){return this.gj(this)===0},
n:function(a){return P.ey(this)},
i:function(a,b,c){H.n(b,H.a(this,0))
H.n(c,H.a(this,1))
return H.kA()},
ak:function(a,b,c,d){var u=this,t=P.ev(c,d)
u.w(0,new H.dG(u,H.f(b,{func:1,ret:[P.c5,c,d],args:[H.a(u,0),H.a(u,1)]}),t))
return t},
O:function(a,b){return this.ak(a,b,null,null)},
$iq:1}
H.dG.prototype={
$2:function(a,b){var u=this.a,t=this.b.$2(H.n(a,H.a(u,0)),H.n(b,H.a(u,1)))
this.c.i(0,C.t.geL(t),t.gD(t))},
$S:function(){var u=this.a
return{func:1,ret:P.B,args:[H.a(u,0),H.a(u,1)]}}}
H.dH.prototype={
gj:function(a){return this.a},
t:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.t(b))return
return this.cn(b)},
cn:function(a){return this.b[H.u(a)]},
w:function(a,b){var u,t,s,r,q=this,p=H.a(q,1)
H.f(b,{func:1,ret:-1,args:[H.a(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.n(q.cn(r),p))}},
gB:function(){return new H.fK(this,[H.a(this,0)])}}
H.fK.prototype={
gu:function(a){var u=this.a.c
return new J.b2(u,u.length,[H.a(u,0)])},
gj:function(a){return this.a.c.length}}
H.ek.prototype={
gcX:function(){var u=this.a
return u},
gd0:function(){var u,t,s,r,q=this
if(q.c===1)return C.u
u=q.d
t=u.length-q.e.length-q.f
if(t===0)return C.u
s=[]
for(r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
s.push(u[r])}s.fixed$length=Array
s.immutable$list=Array
return s},
gcY:function(){var u,t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.v
u=l.e
t=u.length
s=l.d
r=s.length-t-l.f
if(t===0)return C.v
q=P.aJ
p=new H.L([q,null])
for(o=0;o<t;++o){if(o>=u.length)return H.e(u,o)
n=u[o]
m=r+o
if(m<0||m>=s.length)return H.e(s,m)
p.i(0,new H.cd(n),s[m])}return new H.dF(p,[q,null])},
$ii7:1}
H.eU.prototype={
$2:function(a,b){var u
H.u(a)
u=this.a
u.b=u.b+"$"+H.b(a)
C.a.p(this.b,a)
C.a.p(this.c,b);++u.a},
$S:20}
H.fn.prototype={
Z:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.eM.prototype={
n:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.en.prototype={
n:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.b(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.b(t.a)+")"
return s+r+"' on '"+u+"' ("+H.b(t.a)+")"}}
H.fq.prototype={
n:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hW.prototype={
$1:function(a){if(!!J.k(a).$ib7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.df.prototype={
n:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iN:1}
H.bV.prototype={
n:function(a){var u=H.c9(this).trim()
return"Closure '"+u+"'"},
$iar:1,
gf_:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fg.prototype={}
H.f7.prototype={
n:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bP(u)+"'"}}
H.bT.prototype={
P:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bT))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gv:function(a){var u,t=this.c
if(t==null)u=H.bf(this.a)
else u=typeof t!=="object"?J.aQ(t):H.bf(t)
return(u^H.bf(this.b))>>>0},
n:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.c9(u))+"'")}}
H.cV.prototype={
n:function(a){return this.a}}
H.dy.prototype={
n:function(a){return this.a}}
H.f0.prototype={
n:function(a){return"RuntimeError: "+H.b(this.a)}}
H.fz.prototype={
n:function(a){return"Assertion failed: "+P.aS(this.a)}}
H.L.prototype={
gj:function(a){return this.a},
gI:function(a){return this.a===0},
gB:function(){return new H.aE(this,[H.a(this,0)])},
gW:function(a){var u=this,t=H.a(u,0)
return H.j0(new H.aE(u,[t]),new H.em(u),t,H.a(u,1))},
t:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.ck(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.ck(t,a)}else return s.eE(a)},
eE:function(a){var u=this.d
if(u==null)return!1
return this.b9(this.aN(u,J.aQ(a)&0x3ffffff),a)>=0},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aO(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aO(r,b)
s=t==null?null:t.b
return s}else return q.eF(b)},
eF:function(a){var u,t,s=this.d
if(s==null)return
u=this.aN(s,J.aQ(a)&0x3ffffff)
t=this.b9(u,a)
if(t<0)return
return u[t].b},
i:function(a,b,c){var u,t,s,r,q,p,o=this
H.n(b,H.a(o,0))
H.n(c,H.a(o,1))
if(typeof b==="string"){u=o.b
o.c7(u==null?o.b=o.by():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.c7(t==null?o.c=o.by():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.by()
r=J.aQ(b)&0x3ffffff
q=o.aN(s,r)
if(q==null)o.bG(s,r,[o.bz(b,c)])
else{p=o.b9(q,b)
if(p>=0)q[p].b=c
else q.push(o.bz(b,c))}}},
H:function(a,b){var u=this.eG(b)
return u},
eG:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=a.gv(a)&0x3ffffff
t=q.aN(p,u)
s=q.b9(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.el(r)
if(t.length===0)q.cm(p,u)
return r.b},
b1:function(a){var u=this
if(u.a>0){u.b=u.c=u.d=u.e=u.f=null
u.a=0
u.bx()}},
w:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.a(s,0),H.a(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.aq(s))
u=u.c}},
c7:function(a,b,c){var u,t=this
H.n(b,H.a(t,0))
H.n(c,H.a(t,1))
u=t.aO(a,b)
if(u==null)t.bG(a,b,t.bz(b,c))
else u.b=c},
bx:function(){this.r=this.r+1&67108863},
bz:function(a,b){var u,t=this,s=new H.et(H.n(a,H.a(t,0)),H.n(b,H.a(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.bx()
return s},
el:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.bx()},
b9:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1},
n:function(a){return P.ey(this)},
aO:function(a,b){return a[b]},
aN:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
cm:function(a,b){delete a[b]},
ck:function(a,b){return this.aO(a,b)!=null},
by:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bG(t,u,t)
this.cm(t,u)
return t},
$iiZ:1}
H.em.prototype={
$1:function(a){var u=this.a
return u.h(0,H.n(a,H.a(u,0)))},
$S:function(){var u=this.a
return{func:1,ret:H.a(u,1),args:[H.a(u,0)]}}}
H.et.prototype={}
H.aE.prototype={
gj:function(a){return this.a.a},
gI:function(a){return this.a.a===0},
gu:function(a){var u=this.a,t=new H.eu(u,u.r,this.$ti)
t.c=u.e
return t},
A:function(a,b){return this.a.t(b)}}
H.eu.prototype={
gq:function(){return this.d},
l:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.aq(t))
else{t=u.c
if(t==null){u.sc5(null)
return!1}else{u.sc5(t.a)
u.c=u.c.c
return!0}}},
sc5:function(a){this.d=H.n(a,H.a(this,0))},
$ias:1}
H.hQ.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.hR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.hS.prototype={
$1:function(a){return this.a(H.u(a))},
$S:32}
H.el.prototype={
n:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ij4:1}
H.c7.prototype={$ijb:1}
H.cF.prototype={
gj:function(a){return a.length},
$iaT:1,
$aaT:function(){}}
H.c6.prototype={
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]},
i:function(a,b,c){H.z(b)
H.lF(c)
H.aM(b,a,a.length)
a[b]=c},
$iF:1,
$aF:function(){return[P.a6]},
$ab9:function(){return[P.a6]},
$aM:function(){return[P.a6]},
$ip:1,
$ap:function(){return[P.a6]},
$io:1,
$ao:function(){return[P.a6]}}
H.cG.prototype={
i:function(a,b,c){H.z(b)
H.z(c)
H.aM(b,a,a.length)
a[b]=c},
$iF:1,
$aF:function(){return[P.H]},
$ab9:function(){return[P.H]},
$aM:function(){return[P.H]},
$ip:1,
$ap:function(){return[P.H]},
$io:1,
$ao:function(){return[P.H]}}
H.eB.prototype={
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]}}
H.eC.prototype={
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]}}
H.eD.prototype={
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]}}
H.eE.prototype={
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]}}
H.eF.prototype={
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]}}
H.cH.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]}}
H.eG.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]}}
H.ch.prototype={}
H.ci.prototype={}
H.cj.prototype={}
H.ck.prototype={}
P.fB.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:9}
P.fA.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.fC.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.fD.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.hA.prototype={
dB:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bN(new P.hB(this,b),0),a)
else throw H.h(P.E("`setTimeout()` not found."))}}
P.hB.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.fF.prototype={}
P.U.prototype={
a2:function(){},
a3:function(){},
saw:function(a){this.dy=H.y(a,"$iU",this.$ti,"$aU")},
saT:function(a){this.fr=H.y(a,"$iU",this.$ti,"$aU")}}
P.bG.prototype={
gaP:function(){return this.c<4},
dP:function(){var u=this.r
if(u!=null)return u
return this.r=new P.V($.G,[null])},
cB:function(a){var u,t
H.y(a,"$iU",this.$ti,"$aU")
u=a.fr
t=a.dy
if(u==null)this.scq(t)
else u.saw(t)
if(t==null)this.scu(u)
else t.saT(u)
a.saT(a)
a.saw(a)},
ei:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.a(p,0)
H.f(a,{func:1,ret:-1,args:[o]})
H.f(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.jD()
o=new P.d1($.G,c,p.$ti)
o.cC()
return o}u=$.G
t=d?1:0
s=p.$ti
r=new P.U(p,u,t,s)
r.c3(a,b,c,d,o)
r.saT(r)
r.saw(r)
H.y(r,"$iU",s,"$aU")
r.dx=p.c&1
q=p.e
p.scu(r)
r.saw(null)
r.saT(q)
if(q==null)p.scq(r)
else q.saw(r)
if(p.d==p.e)P.jx(p.a)
return r},
e5:function(a){var u=this,t=u.$ti
a=H.y(H.y(a,"$ia0",t,"$aa0"),"$iU",t,"$aU")
if(a.dy===a)return
t=a.dx
if((t&2)!==0)a.dx=t|4
else{u.cB(a)
if((u.c&2)===0&&u.d==null)u.bm()}return},
aH:function(){if((this.c&4)!==0)return new P.aX("Cannot add new events after calling close")
return new P.aX("Cannot add new events while doing an addStream")},
p:function(a,b){var u=this
H.n(b,H.a(u,0))
if(!u.gaP())throw H.h(u.aH())
u.aY(b)},
bI:function(a){var u,t=this
if((t.c&4)!==0)return t.r
if(!t.gaP())throw H.h(t.aH())
t.c|=4
u=t.dP()
t.ah()
return u},
cr:function(a){var u,t,s,r,q=this
H.f(a,{func:1,ret:-1,args:[[P.T,H.a(q,0)]]})
u=q.c
if((u&2)!==0)throw H.h(P.cc("Cannot fire new event. Controller is already firing an event"))
t=q.d
if(t==null)return
s=u&1
q.c=u^3
for(;t!=null;){u=t.dx
if((u&1)===s){t.dx=u|2
a.$1(t)
u=t.dx^=1
r=t.dy
if((u&4)!==0)q.cB(t)
t.dx&=4294967293
t=r}else t=t.dy}q.c&=4294967293
if(q.d==null)q.bm()},
bm:function(){var u=this
if((u.c&4)!==0&&u.r.a===0)u.r.c9(null)
P.jx(u.b)},
scq:function(a){this.d=H.y(a,"$iU",this.$ti,"$aU")},
scu:function(a){this.e=H.y(a,"$iU",this.$ti,"$aU")},
$ij8:1,
$imB:1,
$ibk:1,
$ibj:1}
P.hu.prototype={
gaP:function(){return P.bG.prototype.gaP.call(this)&&(this.c&2)===0},
aH:function(){if((this.c&2)!==0)return new P.aX("Cannot fire new event. Controller is already firing an event")
return this.ds()},
aY:function(a){var u,t=this
H.n(a,H.a(t,0))
u=t.d
if(u==null)return
if(u===t.e){t.c|=2
u.aq(a)
t.c&=4294967293
if(t.d==null)t.bm()
return}t.cr(new P.hv(t,a))},
ah:function(){var u=this
if(u.d!=null)u.cr(new P.hw(u))
else u.r.c9(null)}}
P.hv.prototype={
$1:function(a){H.y(a,"$iT",[H.a(this.a,0)],"$aT").aq(this.b)},
$S:function(){return{func:1,ret:P.B,args:[[P.T,H.a(this.a,0)]]}}}
P.hw.prototype={
$1:function(a){H.y(a,"$iT",[H.a(this.a,0)],"$aT").cc()},
$S:function(){return{func:1,ret:P.B,args:[[P.T,H.a(this.a,0)]]}}}
P.fJ.prototype={}
P.hx.prototype={}
P.ax.prototype={
eM:function(a){if((this.c&15)!==6)return!0
return this.b.b.bT(H.f(this.d,{func:1,ret:P.D,args:[P.v]}),a.a,P.D,P.v)},
eD:function(a){var u=this.e,t=P.v,s={futureOr:1,type:H.a(this,1)},r=this.b.b
if(H.bn(u,{func:1,args:[P.v,P.N]}))return H.hO(r.eS(u,a.a,a.b,null,t,P.N),s)
else return H.hO(r.bT(H.f(u,{func:1,args:[P.v]}),a.a,null,t),s)}}
P.V.prototype={
ge0:function(){return this.a===8},
d6:function(a,b,c){var u,t,s,r=H.a(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.G
if(u!==C.d){H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lv(b,u)}t=new P.V($.G,[c])
s=b==null?1:3
this.bk(new P.ax(t,s,a,b,[r,c]))
return t},
d5:function(a,b){return this.d6(a,null,b)},
da:function(a){var u,t
H.f(a,{func:1})
u=$.G
t=new P.V(u,this.$ti)
if(u!==C.d)a=H.f(a,{func:1,ret:null})
u=H.a(this,0)
this.bk(new P.ax(t,8,a,null,[u,u]))
return t},
eg:function(a){H.n(a,H.a(this,0))
this.a=4
this.c=a},
bk:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.d(t.c,"$iax")
t.c=a}else{if(s===2){u=H.d(t.c,"$iV")
s=u.a
if(s<4){u.bk(a)
return}t.a=s
t.c=u.c}P.bL(null,null,t.b,H.f(new P.fV(t,a),{func:1,ret:-1}))}},
cz:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.d(p.c,"$iax")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.d(p.c,"$iV")
u=q.a
if(u<4){q.cz(a)
return}p.a=u
p.c=q.c}o.a=p.aX(a)
P.bL(null,null,p.b,H.f(new P.h1(o,p),{func:1,ret:-1}))}},
aU:function(){var u=H.d(this.c,"$iax")
this.c=null
return this.aX(u)},
aX:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aJ:function(a){var u,t,s=this,r=H.a(s,0)
H.hO(a,{futureOr:1,type:r})
u=s.$ti
if(H.dm(a,"$iaD",u,"$aaD"))if(H.dm(a,"$iV",u,null))P.fX(a,s)
else P.jh(a,s)
else{t=s.aU()
H.n(a,r)
s.a=4
s.c=a
P.bH(s,t)}},
aK:function(a,b){var u,t=this
H.d(b,"$iN")
u=t.aU()
t.a=8
t.c=new P.a3(a,b)
P.bH(t,u)},
dJ:function(a){return this.aK(a,null)},
c9:function(a){var u=this
if(H.dm(a,"$iaD",u.$ti,"$aaD")){u.dE(a)
return}u.a=1
P.bL(null,null,u.b,H.f(new P.fW(u,a),{func:1,ret:-1}))},
dE:function(a){var u=this,t=u.$ti
H.y(a,"$iaD",t,"$aaD")
if(H.dm(a,"$iV",t,null)){if(a.ge0()){u.a=1
P.bL(null,null,u.b,H.f(new P.h0(u,a),{func:1,ret:-1}))}else P.fX(a,u)
return}P.jh(a,u)},
$iaD:1}
P.fV.prototype={
$0:function(){P.bH(this.a,this.b)},
$S:2}
P.h1.prototype={
$0:function(){P.bH(this.b,this.a.a)},
$S:2}
P.fY.prototype={
$1:function(a){var u=this.a
u.a=0
u.aJ(a)},
$S:9}
P.fZ.prototype={
$2:function(a,b){H.d(b,"$iN")
this.a.aK(a,b)},
$1:function(a){return this.$2(a,null)},
$C:"$2",
$D:function(){return[null]},
$S:45}
P.h_.prototype={
$0:function(){this.a.aK(this.b,this.c)},
$S:2}
P.fW.prototype={
$0:function(){var u=this.a,t=H.n(this.b,H.a(u,0)),s=u.aU()
u.a=4
u.c=t
P.bH(u,s)},
$S:2}
P.h0.prototype={
$0:function(){P.fX(this.b,this.a)},
$S:2}
P.h4.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.d3(H.f(s.d,{func:1}),null)}catch(r){u=H.P(r)
t=H.b1(r)
if(o.d){s=H.d(o.a.a.c,"$ia3").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.d(o.a.a.c,"$ia3")
else q.b=new P.a3(u,t)
q.a=!0
return}if(!!J.k(n).$iaD){if(n instanceof P.V&&n.a>=4){if(n.a===8){s=o.b
s.b=H.d(n.c,"$ia3")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.d5(new P.h5(p),null)
s.a=!1}},
$S:0}
P.h5.prototype={
$1:function(a){return this.a},
$S:40}
P.h3.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.a(s,0)
q=H.n(n.c,r)
p=H.a(s,1)
n.a.b=s.b.b.bT(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.P(o)
t=H.b1(o)
s=n.a
s.b=new P.a3(u,t)
s.a=!0}},
$S:0}
P.h2.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.d(m.a.a.c,"$ia3")
r=m.c
if(H.O(r.eM(u))&&r.e!=null){q=m.b
q.b=r.eD(u)
q.a=!1}}catch(p){t=H.P(p)
s=H.b1(p)
r=H.d(m.a.a.c,"$ia3")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a3(t,s)
n.a=!0}},
$S:0}
P.cX.prototype={}
P.a_.prototype={
O:function(a,b){var u=H.J(this,"a_",0)
return new P.hh(H.f(b,{func:1,ret:null,args:[u]}),this,[u,null])},
gj:function(a){var u={},t=new P.V($.G,[P.H])
u.a=0
this.T(new P.f9(u,this),!0,new P.fa(u,t),t.gcg())
return t},
a_:function(a){var u=H.J(this,"a_",0),t=H.C([],[u]),s=new P.V($.G,[[P.o,u]])
this.T(new P.fb(this,t),!0,new P.fc(s,t),s.gcg())
return s}}
P.f9.prototype={
$1:function(a){H.n(a,H.J(this.b,"a_",0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.J(this.b,"a_",0)]}}}
P.fa.prototype={
$0:function(){this.b.aJ(this.a.a)},
$C:"$0",
$R:0,
$S:2}
P.fb.prototype={
$1:function(a){C.a.p(this.b,H.n(a,H.J(this.a,"a_",0)))},
$S:function(){return{func:1,ret:P.B,args:[H.J(this.a,"a_",0)]}}}
P.fc.prototype={
$0:function(){this.a.aJ(this.b)},
$C:"$0",
$R:0,
$S:2}
P.a0.prototype={}
P.f8.prototype={}
P.cY.prototype={
gv:function(a){return(H.bf(this.a)^892482866)>>>0},
P:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cY&&b.a===this.a}}
P.cZ.prototype={
bA:function(){return this.x.e5(this)},
a2:function(){H.y(this,"$ia0",[H.a(this.x,0)],"$aa0")},
a3:function(){H.y(this,"$ia0",[H.a(this.x,0)],"$aa0")}}
P.T.prototype={
c3:function(a,b,c,d,e){var u,t,s=this,r=H.J(s,"T",0)
H.f(a,{func:1,ret:-1,args:[r]})
s.sdD(H.f(a,{func:1,ret:null,args:[r]}))
u=b==null?P.lC():b
if(H.bn(u,{func:1,ret:-1,args:[P.v,P.N]}))s.b=s.d.d1(u,null,P.v,P.N)
else if(H.bn(u,{func:1,ret:-1,args:[P.v]}))s.b=H.f(u,{func:1,ret:null,args:[P.v]})
else H.X(P.br("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.f(c,{func:1,ret:-1})
t=c==null?P.jD():c
s.se3(H.f(t,{func:1,ret:-1}))},
bO:function(a){var u,t,s=this,r=s.e
if((r&8)!==0)return
u=(r+128|4)>>>0
s.e=u
if(r<128&&s.r!=null){t=s.r
if(t.a===1)t.a=3}if((r&4)===0&&(u&32)===0)s.ct(s.gaQ())},
bR:function(){var u=this,t=u.e
if((t&8)!==0)return
if(t>=128){t=u.e=t-128
if(t<128)if((t&64)!==0&&u.r.c!=null)u.r.bh(u)
else{t=(t&4294967291)>>>0
u.e=t
if((t&32)===0)u.ct(u.gaR())}}},
az:function(){var u=this,t=(u.e&4294967279)>>>0
u.e=t
if((t&8)===0)u.bn()
t=u.f
return t==null?$.dp():t},
bn:function(){var u,t=this,s=t.e=(t.e|8)>>>0
if((s&64)!==0){u=t.r
if(u.a===1)u.a=3}if((s&32)===0)t.sbD(null)
t.f=t.bA()},
aq:function(a){var u,t=this,s=H.J(t,"T",0)
H.n(a,s)
u=t.e
if((u&8)!==0)return
if(u<32)t.aY(a)
else t.bl(new P.fM(a,[s]))},
aG:function(a,b){var u=this.e
if((u&8)!==0)return
if(u<32)this.cD(a,b)
else this.bl(new P.fO(a,b))},
cc:function(){var u=this,t=u.e
if((t&8)!==0)return
t=(t|2)>>>0
u.e=t
if(t<32)u.ah()
else u.bl(C.F)},
a2:function(){},
a3:function(){},
bA:function(){return},
bl:function(a){var u=this,t=[H.J(u,"T",0)],s=H.y(u.r,"$icm",t,"$acm")
if(s==null){s=new P.cm(t)
u.sbD(s)}s.p(0,a)
t=u.e
if((t&64)===0){t=(t|64)>>>0
u.e=t
if(t<128)u.r.bh(u)}},
aY:function(a){var u,t=this,s=H.J(t,"T",0)
H.n(a,s)
u=t.e
t.e=(u|32)>>>0
t.d.bU(t.a,a,s)
t.e=(t.e&4294967263)>>>0
t.bq((u&4)!==0)},
cD:function(a,b){var u=this,t=u.e,s=new P.fH(u,a,b)
if((t&1)!==0){u.e=(t|16)>>>0
u.bn()
t=u.f
if(t!=null&&t!==$.dp())t.da(s)
else s.$0()}else{s.$0()
u.bq((t&4)!==0)}},
ah:function(){var u,t=this,s=new P.fG(t)
t.bn()
t.e=(t.e|16)>>>0
u=t.f
if(u!=null&&u!==$.dp())u.da(s)
else s.$0()},
ct:function(a){var u,t=this
H.f(a,{func:1,ret:-1})
u=t.e
t.e=(u|32)>>>0
a.$0()
t.e=(t.e&4294967263)>>>0
t.bq((u&4)!==0)},
bq:function(a){var u,t,s=this,r=s.e
if((r&64)!==0&&s.r.c==null){r=s.e=(r&4294967231)>>>0
if((r&4)!==0)if(r<128){u=s.r
u=u==null||u.c==null}else u=!1
else u=!1
if(u){r=(r&4294967291)>>>0
s.e=r}}for(;!0;a=t){if((r&8)!==0){s.sbD(null)
return}t=(r&4)!==0
if(a===t)break
s.e=(r^32)>>>0
if(t)s.a2()
else s.a3()
r=(s.e&4294967263)>>>0
s.e=r}if((r&64)!==0&&r<128)s.r.bh(s)},
sdD:function(a){this.a=H.f(a,{func:1,ret:-1,args:[H.J(this,"T",0)]})},
se3:function(a){this.c=H.f(a,{func:1,ret:-1})},
sbD:function(a){this.r=H.y(a,"$icl",[H.J(this,"T",0)],"$acl")},
$ia0:1,
$ibk:1,
$ibj:1}
P.fH.prototype={
$0:function(){var u,t,s,r=this.a,q=r.e
if((q&8)!==0&&(q&16)===0)return
r.e=(q|32)>>>0
u=r.b
q=this.b
t=P.v
s=r.d
if(H.bn(u,{func:1,ret:-1,args:[P.v,P.N]}))s.eT(u,q,this.c,t,P.N)
else s.bU(H.f(r.b,{func:1,ret:-1,args:[P.v]}),q,t)
r.e=(r.e&4294967263)>>>0},
$S:0}
P.fG.prototype={
$0:function(){var u=this.a,t=u.e
if((t&16)===0)return
u.e=(t|42)>>>0
u.d.bS(u.c)
u.e=(u.e&4294967263)>>>0},
$S:0}
P.hr.prototype={
T:function(a,b,c,d){H.f(a,{func:1,ret:-1,args:[H.a(this,0)]})
H.f(c,{func:1,ret:-1})
return this.a.ei(H.f(a,{func:1,ret:-1,args:[H.a(this,0)]}),d,c,!0===b)},
bb:function(a,b,c){return this.T(a,null,b,c)}}
P.b_.prototype={
saC:function(a){this.a=H.d(a,"$ib_")},
gaC:function(){return this.a}}
P.fM.prototype={
bP:function(a){H.y(a,"$ibj",this.$ti,"$abj").aY(this.b)}}
P.fO.prototype={
bP:function(a){a.cD(this.b,this.c)},
$ab_:function(){}}
P.fN.prototype={
bP:function(a){a.ah()},
gaC:function(){return},
saC:function(a){throw H.h(P.cc("No events after a done."))},
$ib_:1,
$ab_:function(){}}
P.cl.prototype={
bh:function(a){var u,t=this
H.y(a,"$ibj",t.$ti,"$abj")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.jX(new P.hi(t,a))
t.a=1}}
P.hi.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.y(this.b,"$ibj",[H.a(r,0)],"$abj")
t=r.b
s=t.gaC()
r.b=s
if(s==null)r.c=null
t.bP(u)},
$S:2}
P.cm.prototype={
p:function(a,b){var u,t=this
H.d(b,"$ib_")
u=t.c
if(u==null)t.b=t.c=b
else{u.saC(b)
t.c=b}}}
P.d1.prototype={
cC:function(){var u=this
if((u.b&2)!==0)return
P.bL(null,null,u.a,H.f(u.gef(),{func:1,ret:-1}))
u.b=(u.b|2)>>>0},
bO:function(a){this.b+=4},
bR:function(){var u=this.b
if(u>=4){u=this.b=u-4
if(u<4&&(u&1)===0)this.cC()}},
az:function(){return $.dp()},
ah:function(){var u=this,t=u.b=(u.b&4294967293)>>>0
if(t>=4)return
u.b=(t|1)>>>0
u.a.bS(u.c)},
$ia0:1}
P.fU.prototype={
T:function(a,b,c,d){var u,t,s=this,r=H.a(s,1)
H.f(a,{func:1,ret:-1,args:[r]})
H.f(c,{func:1,ret:-1})
b=!0===b
u=$.G
t=b?1:0
t=new P.d3(s,u,t,s.$ti)
t.c3(a,d,c,b,r)
t.scF(s.a.bb(t.gdU(),t.gdX(),t.gdZ()))
return t},
bb:function(a,b,c){return this.T(a,null,b,c)},
$aa_:function(a,b){return[b]}}
P.d3.prototype={
aq:function(a){H.n(a,H.a(this,1))
if((this.e&2)!==0)return
this.dt(a)},
aG:function(a,b){if((this.e&2)!==0)return
this.du(a,b)},
a2:function(){var u=this.y
if(u==null)return
u.bO(0)},
a3:function(){var u=this.y
if(u==null)return
u.bR()},
bA:function(){var u=this.y
if(u!=null){this.scF(null)
return u.az()}return},
dV:function(a){this.x.dW(H.n(a,H.a(this,0)),this)},
e_:function(a,b){H.d(b,"$iN")
H.y(this,"$ibk",[H.a(this.x,1)],"$abk").aG(a,b)},
dY:function(){H.y(this,"$ibk",[H.a(this.x,1)],"$abk").cc()},
scF:function(a){this.y=H.y(a,"$ia0",[H.a(this,0)],"$aa0")},
$aa0:function(a,b){return[b]},
$abk:function(a,b){return[b]},
$abj:function(a,b){return[b]},
$aT:function(a,b){return[b]}}
P.hh.prototype={
dW:function(a,b){var u,t,s,r
H.n(a,H.a(this,0))
H.y(b,"$ibk",[H.a(this,1)],"$abk")
u=null
try{u=this.b.$1(a)}catch(r){t=H.P(r)
s=H.b1(r)
b.aG(t,s)
return}b.aq(u)}}
P.a3.prototype={
n:function(a){return H.b(this.a)},
$ib7:1}
P.hE.prototype={$imx:1}
P.hJ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cJ():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.n(0)
throw u},
$S:2}
P.hj.prototype={
bS:function(a){var u,t,s,r=null
H.f(a,{func:1,ret:-1})
try{if(C.d===$.G){a.$0()
return}P.ju(r,r,this,a,-1)}catch(s){u=H.P(s)
t=H.b1(s)
P.bK(r,r,this,u,H.d(t,"$iN"))}},
bU:function(a,b,c){var u,t,s,r=null
H.f(a,{func:1,ret:-1,args:[c]})
H.n(b,c)
try{if(C.d===$.G){a.$1(b)
return}P.jw(r,r,this,a,b,-1,c)}catch(s){u=H.P(s)
t=H.b1(s)
P.bK(r,r,this,u,H.d(t,"$iN"))}},
eT:function(a,b,c,d,e){var u,t,s,r=null
H.f(a,{func:1,ret:-1,args:[d,e]})
H.n(b,d)
H.n(c,e)
try{if(C.d===$.G){a.$2(b,c)
return}P.jv(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.P(s)
t=H.b1(s)
P.bK(r,r,this,u,H.d(t,"$iN"))}},
ev:function(a,b){return new P.hl(this,H.f(a,{func:1,ret:b}),b)},
cM:function(a){return new P.hk(this,H.f(a,{func:1,ret:-1}))},
ew:function(a,b){return new P.hm(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
d3:function(a,b){H.f(a,{func:1,ret:b})
if($.G===C.d)return a.$0()
return P.ju(null,null,this,a,b)},
bT:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.n(b,d)
if($.G===C.d)return a.$1(b)
return P.jw(null,null,this,a,b,c,d)},
eS:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.n(b,e)
H.n(c,f)
if($.G===C.d)return a.$2(b,c)
return P.jv(null,null,this,a,b,c,d,e,f)},
d1:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}}
P.hl.prototype={
$0:function(){return this.a.d3(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hk.prototype={
$0:function(){return this.a.bS(this.b)},
$S:0}
P.hm.prototype={
$1:function(a){var u=this.c
return this.a.bU(this.b,H.n(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.h6.prototype={
gj:function(a){return this.a},
gI:function(a){return this.a===0},
gB:function(){return new P.h7(this,[H.a(this,0)])},
t:function(a){var u,t
if(typeof a==="string"&&a!=="__proto__"){u=this.b
return u==null?!1:u[a]!=null}else if(typeof a==="number"&&(a&1073741823)===a){t=this.c
return t==null?!1:t[a]!=null}else return this.dL(a)},
dL:function(a){var u=this.d
if(u==null)return!1
return this.a7(this.av(u,a),a)>=0},
h:function(a,b){var u,t,s
if(typeof b==="string"&&b!=="__proto__"){u=this.b
t=u==null?null:P.ji(u,b)
return t}else if(typeof b==="number"&&(b&1073741823)===b){s=this.c
t=s==null?null:P.ji(s,b)
return t}else return this.dS(b)},
dS:function(a){var u,t,s=this.d
if(s==null)return
u=this.av(s,a)
t=this.a7(u,a)
return t<0?null:u[t+1]},
i:function(a,b,c){var u,t,s,r,q,p=this
H.n(b,H.a(p,0))
H.n(c,H.a(p,1))
if(typeof b==="string"&&b!=="__proto__"){u=p.b
p.dI(u==null?p.b=P.jj():u,b,c)}else{t=p.d
if(t==null)t=p.d=P.jj()
s=H.jS(b)&1073741823
r=t[s]
if(r==null){P.ij(t,s,[b,c]);++p.a
p.e=null}else{q=p.a7(r,b)
if(q>=0)r[q+1]=c
else{r.push(b,c);++p.a
p.e=null}}}},
w:function(a,b){var u,t,s,r,q=this,p=H.a(q,0)
H.f(b,{func:1,ret:-1,args:[p,H.a(q,1)]})
u=q.cj()
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(H.n(r,p),q.h(0,r))
if(u!==q.e)throw H.h(P.aq(q))}},
cj:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
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
dI:function(a,b,c){var u=this
H.n(b,H.a(u,0))
H.n(c,H.a(u,1))
if(a[b]==null){++u.a
u.e=null}P.ij(a,b,c)},
av:function(a,b){return a[H.jS(b)&1073741823]}}
P.h9.prototype={
a7:function(a,b){var u,t,s
if(a==null)return-1
u=a.length
for(t=0;t<u;t+=2){s=a[t]
if(s==null?b==null:s===b)return t}return-1}}
P.h7.prototype={
gj:function(a){return this.a.a},
gI:function(a){return this.a.a===0},
gu:function(a){var u=this.a
return new P.h8(u,u.cj(),this.$ti)},
A:function(a,b){return this.a.t(b)}}
P.h8.prototype={
gq:function(){return this.d},
l:function(){var u=this,t=u.b,s=u.c,r=u.a
if(t!==r.e)throw H.h(P.aq(r))
else if(s>=t.length){u.sas(null)
return!1}else{u.sas(t[s])
u.c=s+1
return!0}},
sas:function(a){this.d=H.n(a,H.a(this,0))},
$ias:1}
P.hg.prototype={
gu:function(a){var u=this,t=new P.d8(u,u.r,u.$ti)
t.c=u.e
return t},
gj:function(a){return this.a},
A:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibI")!=null}else{t=this.dK(b)
return t}},
dK:function(a){var u=this.d
if(u==null)return!1
return this.a7(this.av(u,a),a)>=0},
p:function(a,b){var u,t,s=this
H.n(b,H.a(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cd(u==null?s.b=P.ik():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cd(t==null?s.c=P.ik():t,b)}else return s.dH(b)},
dH:function(a){var u,t,s,r=this
H.n(a,H.a(r,0))
u=r.d
if(u==null)u=r.d=P.ik()
t=r.ci(a)
s=u[t]
if(s==null)u[t]=[r.br(a)]
else{if(r.a7(s,a)>=0)return!1
s.push(r.br(a))}return!0},
H:function(a,b){var u=this
if(typeof b==="string"&&b!=="__proto__")return u.cA(u.b,b)
else if(typeof b==="number"&&(b&1073741823)===b)return u.cA(u.c,b)
else return u.e6(b)},
e6:function(a){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.av(r,a)
t=s.a7(u,a)
if(t<0)return!1
s.cf(u.splice(t,1)[0])
return!0},
cd:function(a,b){H.n(b,H.a(this,0))
if(H.d(a[b],"$ibI")!=null)return!1
a[b]=this.br(b)
return!0},
cA:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibI")
if(u==null)return!1
this.cf(u)
delete a[b]
return!0},
ce:function(){this.r=1073741823&this.r+1},
br:function(a){var u,t=this,s=new P.bI(H.n(a,H.a(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ce()
return s},
cf:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ce()},
ci:function(a){return J.aQ(a)&1073741823},
av:function(a,b){return a[this.ci(b)]},
a7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1}}
P.bI.prototype={}
P.d8.prototype={
gq:function(){return this.d},
l:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.aq(t))
else{t=u.c
if(t==null){u.sas(null)
return!1}else{u.sas(H.n(t.a,H.a(u,0)))
u.c=u.c.b
return!0}}},
sas:function(a){this.d=H.n(a,H.a(this,0))},
$ias:1}
P.ew.prototype={$iF:1,$ip:1,$io:1}
P.M.prototype={
gu:function(a){return new H.c4(a,this.gj(a),[H.an(this,a,"M",0)])},
G:function(a,b){return this.h(a,b)},
w:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.an(s,a,"M",0)]})
u=s.gj(a)
for(t=0;t<u;++t){b.$1(s.h(a,t))
if(u!==s.gj(a))throw H.h(P.aq(a))}},
gI:function(a){return this.gj(a)===0},
gbM:function(a){return!this.gI(a)},
ac:function(a,b){var u=H.an(this,a,"M",0)
return new H.aw(a,H.f(b,{func:1,ret:P.D,args:[u]}),[u])},
E:function(a,b,c){var u=H.an(this,a,"M",0)
return new H.aH(a,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
J:function(a,b){var u,t=this,s=H.C([],[H.an(t,a,"M",0)])
C.a.sj(s,t.gj(a))
for(u=0;u<t.gj(a);++u)C.a.i(s,u,t.h(a,u))
return s},
a_:function(a){return this.J(a,!0)},
p:function(a,b){var u,t=this
H.n(b,H.an(t,a,"M",0))
u=t.gj(a)
t.sj(a,u+1)
t.i(a,u,b)},
dG:function(a,b,c){var u,t=this,s=t.gj(a),r=c-b
for(u=c;u<s;++u)t.i(a,u-r,t.h(a,u))
t.sj(a,s-r)},
a1:function(a,b){var u=H.an(this,a,"M",0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
H.j7(a,b,u)},
a5:function(a,b){var u=this.h(a,b)
this.dG(a,b,b+1)
return u},
n:function(a){return P.eh(a,"[","]")}}
P.ex.prototype={}
P.ez.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.b(a)
t.a=u+": "
t.a+=H.b(b)},
$S:10}
P.aG.prototype={
w:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.J(s,"aG",0),H.J(s,"aG",1)]})
for(u=J.x(s.gB());u.l();){t=u.gq()
b.$2(t,s.h(0,t))}},
ak:function(a,b,c,d){var u,t,s,r,q=this
H.f(b,{func:1,ret:[P.c5,c,d],args:[H.J(q,"aG",0),H.J(q,"aG",1)]})
u=P.ev(c,d)
for(t=J.x(q.gB());t.l();){s=t.gq()
r=b.$2(s,q.h(0,s))
u.i(0,C.t.geL(r),r.gD(r))}return u},
O:function(a,b){return this.ak(a,b,null,null)},
t:function(a){return J.kf(this.gB(),a)},
gj:function(a){return J.af(this.gB())},
gI:function(a){return J.ki(this.gB())},
n:function(a){return P.ey(this)},
$iq:1}
P.hC.prototype={
i:function(a,b,c){H.n(b,H.a(this,0))
H.n(c,H.a(this,1))
throw H.h(P.E("Cannot modify unmodifiable map"))}}
P.eA.prototype={
h:function(a,b){return this.a.h(0,b)},
i:function(a,b,c){this.a.i(0,H.n(b,H.a(this,0)),H.n(c,H.a(this,1)))},
t:function(a){return this.a.t(a)},
w:function(a,b){this.a.w(0,H.f(b,{func:1,ret:-1,args:[H.a(this,0),H.a(this,1)]}))},
gI:function(a){return this.a.a===0},
gj:function(a){return this.a.a},
gB:function(){var u=this.a
return new H.aE(u,[H.a(u,0)])},
n:function(a){return P.ey(this.a)},
ak:function(a,b,c,d){return this.a.ak(0,H.f(b,{func:1,ret:[P.c5,c,d],args:[H.a(this,0),H.a(this,1)]}),c,d)},
O:function(a,b){return this.ak(a,b,null,null)},
$iq:1}
P.fr.prototype={}
P.bE.prototype={
J:function(a,b){var u,t,s,r=this,q=H.C([],[H.J(r,"bE",0)])
C.a.sj(q,r.gj(r))
for(u=r.U(),u=P.cg(u,u.r,H.a(u,0)),t=0;u.l();t=s){s=t+1
C.a.i(q,t,u.d)}return q},
a_:function(a){return this.J(a,!0)},
E:function(a,b,c){var u=H.J(this,"bE",0)
return new H.bx(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
n:function(a){return P.eh(this,"{","}")},
G:function(a,b){var u,t,s
P.ca(b,"index")
for(u=this.U(),u=P.cg(u,u.r,H.a(u,0)),t=0;u.l();){s=u.d
if(b===t)return s;++t}throw H.h(P.bz(b,this,"index",null,t))}}
P.f5.prototype={$iF:1,$ip:1,$iai:1}
P.ho.prototype={
K:function(a,b){var u
for(u=J.x(H.y(b,"$ip",this.$ti,"$ap"));u.l();)this.p(0,u.gq())},
J:function(a,b){var u,t,s,r=this,q=H.C([],r.$ti)
C.a.sj(q,r.a)
for(u=P.cg(r,r.r,H.a(r,0)),t=0;u.l();t=s){s=t+1
C.a.i(q,t,u.d)}return q},
a_:function(a){return this.J(a,!0)},
E:function(a,b,c){var u=H.a(this,0)
return new H.bx(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
n:function(a){return P.eh(this,"{","}")},
bN:function(a,b){var u,t=P.cg(this,this.r,H.a(this,0))
if(!t.l())return""
if(b===""){u=""
do u+=H.b(t.d)
while(t.l())}else{u=H.b(t.d)
for(;t.l();)u=u+b+H.b(t.d)}return u.charCodeAt(0)==0?u:u},
G:function(a,b){var u,t,s,r=this
P.ca(b,"index")
for(u=P.cg(r,r.r,H.a(r,0)),t=0;u.l();){s=u.d
if(b===t)return s;++t}throw H.h(P.bz(b,r,"index",null,t))},
$iF:1,
$ip:1,
$iai:1}
P.d9.prototype={}
P.dd.prototype={}
P.dh.prototype={}
P.hb.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.e4(b):u}},
gj:function(a){return this.b==null?this.c.a:this.at().length},
gI:function(a){return this.gj(this)===0},
gB:function(){if(this.b==null){var u=this.c
return new H.aE(u,[H.a(u,0)])}return new P.hc(this)},
i:function(a,b,c){var u,t,s=this
if(s.b==null)s.c.i(0,b,c)
else if(s.t(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.em().i(0,b,c)},
t:function(a){if(this.b==null)return this.c.t(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
w:function(a,b){var u,t,s,r,q=this
H.f(b,{func:1,ret:-1,args:[P.i,,]})
if(q.b==null)return q.c.w(0,b)
u=q.at()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.hF(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.h(P.aq(q))}},
at:function(){var u=H.a7(this.c)
if(u==null)u=this.c=H.C(Object.keys(this.a),[P.i])
return u},
em:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.ev(P.i,null)
t=p.at()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.i(0,q,p.h(0,q))}if(r===0)C.a.p(t,null)
else C.a.sj(t,0)
p.a=p.b=null
return p.c=u},
e4:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.hF(this.a[a])
return this.b[a]=u},
$aaG:function(){return[P.i,null]},
$aq:function(){return[P.i,null]}}
P.hc.prototype={
gj:function(a){var u=this.a
return u.gj(u)},
G:function(a,b){var u=this.a
if(u.b==null)u=u.gB().G(0,b)
else{u=u.at()
if(b<0||b>=u.length)return H.e(u,b)
u=u[b]}return u},
gu:function(a){var u=this.a
if(u.b==null){u=u.gB()
u=u.gu(u)}else{u=u.at()
u=new J.b2(u,u.length,[H.a(u,0)])}return u},
A:function(a,b){return this.a.t(b)},
$aF:function(){return[P.i]},
$aaF:function(){return[P.i]},
$ap:function(){return[P.i]}}
P.dC.prototype={}
P.bX.prototype={}
P.cD.prototype={
n:function(a){var u=P.aS(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.eq.prototype={
n:function(a){return"Cyclic error in JSON stringify"}}
P.ep.prototype={
cQ:function(a,b,c){var u=P.lu(b,this.geA().a)
return u},
bK:function(a,b){var u=P.lm(a,this.geB().b,null)
return u},
geB:function(){return C.J},
geA:function(){return C.I}}
P.es.prototype={
$abX:function(){return[P.v,P.i]}}
P.er.prototype={
$abX:function(){return[P.i,P.v]}}
P.he.prototype={
dd:function(a){var u,t,s,r,q,p,o=a.length
for(u=J.iw(a),t=this.c,s=0,r=0;r<o;++r){q=u.aI(a,r)
if(q>92)continue
if(q<32){if(r>s)t.a+=C.e.ae(a,s,r)
s=r+1
t.a+=H.ah(92)
switch(q){case 8:t.a+=H.ah(98)
break
case 9:t.a+=H.ah(116)
break
case 10:t.a+=H.ah(110)
break
case 12:t.a+=H.ah(102)
break
case 13:t.a+=H.ah(114)
break
default:t.a+=H.ah(117)
t.a+=H.ah(48)
t.a+=H.ah(48)
p=q>>>4&15
t.a+=H.ah(p<10?48+p:87+p)
p=q&15
t.a+=H.ah(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)t.a+=C.e.ae(a,s,r)
s=r+1
t.a+=H.ah(92)
t.a+=H.ah(q)}}if(s===0)t.a+=H.b(a)
else if(s<o)t.a+=u.ae(a,s,o)},
bo:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.h(new P.eq(a,null))}C.a.p(u,a)},
bg:function(a){var u,t,s,r,q=this
if(q.dc(a))return
q.bo(a)
try{u=q.b.$1(a)
if(!q.dc(u)){s=P.iY(a,null,q.gcw())
throw H.h(s)}s=q.a
if(0>=s.length)return H.e(s,-1)
s.pop()}catch(r){t=H.P(r)
s=P.iY(a,t,q.gcw())
throw H.h(s)}},
dc:function(a){var u,t,s=this
if(typeof a==="number"){if(!isFinite(a))return!1
s.c.a+=C.c.n(a)
return!0}else if(a===!0){s.c.a+="true"
return!0}else if(a===!1){s.c.a+="false"
return!0}else if(a==null){s.c.a+="null"
return!0}else if(typeof a==="string"){u=s.c
u.a+='"'
s.dd(a)
u.a+='"'
return!0}else{u=J.k(a)
if(!!u.$io){s.bo(a)
s.eX(a)
u=s.a
if(0>=u.length)return H.e(u,-1)
u.pop()
return!0}else if(!!u.$iq){s.bo(a)
t=s.eY(a)
u=s.a
if(0>=u.length)return H.e(u,-1)
u.pop()
return t}else return!1}},
eX:function(a){var u,t,s=this.c
s.a+="["
u=J.K(a)
if(u.gbM(a)){this.bg(u.h(a,0))
for(t=1;t<u.gj(a);++t){s.a+=","
this.bg(u.h(a,t))}}s.a+="]"},
eY:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gI(a)){o.c.a+="{}"
return!0}u=a.gj(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.w(0,new P.hf(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.dd(H.u(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.e(t,p)
o.bg(t[p])}r.a+="}"
return!0}}
P.hf.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.i(u,t.a++,a)
C.a.i(u,t.a++,b)},
$S:10}
P.hd.prototype={
gcw:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.eJ.prototype={
$2:function(a,b){var u,t,s
H.d(a,"$iaJ")
u=this.b
t=this.a
u.a+=t.a
s=u.a+=H.b(a.a)
u.a=s+": "
u.a+=P.aS(b)
t.a=", "},
$S:31}
P.D.prototype={}
P.aB.prototype={
p:function(a,b){return P.kB(C.f.k(this.a,H.d(b,"$img").gf1()),!1)},
P:function(a,b){if(b==null)return!1
return b instanceof P.aB&&this.a===b.a&&!0},
b4:function(a,b){return C.f.b4(this.a,H.d(b,"$iaB").a)},
gv:function(a){var u=this.a
return(u^C.f.bH(u,30))&1073741823},
n:function(a){var u=this,t=P.kC(H.l1(u)),s=P.cu(H.l_(u)),r=P.cu(H.kW(u)),q=P.cu(H.kX(u)),p=P.cu(H.kZ(u)),o=P.cu(H.l0(u)),n=P.kD(H.kY(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.a6.prototype={}
P.b7.prototype={}
P.dr.prototype={
n:function(a){return"Assertion failed"}}
P.cJ.prototype={
n:function(a){return"Throw of null."}}
P.az.prototype={
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
n:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.b(p)
t=q.gbw()+o+u
if(!q.a)return t
s=q.gbv()
r=P.aS(q.b)
return t+s+": "+r}}
P.cL.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.b(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.b(s)
else if(t>s)u=": Not in range "+H.b(s)+".."+H.b(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.b(s)}return u}}
P.ef.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t=H.z(this.b)
if(typeof t!=="number")return t.a0()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.b(u)},
gj:function(a){return this.f}}
P.eI.prototype={
n:function(a){var u,t,s,r,q,p,o,n,m=this,l={},k=new P.au("")
l.a=""
for(u=m.c,t=u.length,s=0,r="",q="";s<t;++s,q=", "){p=u[s]
k.a=r+q
r=k.a+=P.aS(p)
l.a=", "}m.d.w(0,new P.eJ(l,k))
o=P.aS(m.a)
n=k.n(0)
u="NoSuchMethodError: method not found: '"+H.b(m.b.a)+"'\nReceiver: "+o+"\nArguments: ["+n+"]"
return u}}
P.fs.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.fp.prototype={
n:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aX.prototype={
n:function(a){return"Bad state: "+this.a}}
P.dD.prototype={
n:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aS(u)+"."}}
P.eN.prototype={
n:function(a){return"Out of Memory"},
$ib7:1}
P.cQ.prototype={
n:function(a){return"Stack Overflow"},
$ib7:1}
P.dM.prototype={
n:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.fT.prototype={
n:function(a){return"Exception: "+this.a},
$ii5:1}
P.cy.prototype={
n:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.b(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.e.ae(r,0,75)+"...":r
return s+"\n"+u}else return s},
$ii5:1}
P.ar.prototype={}
P.H.prototype={}
P.p.prototype={
E:function(a,b,c){var u=H.J(this,"p",0)
return H.j0(this,H.f(b,{func:1,ret:c,args:[u]}),u,c)},
O:function(a,b){return this.E(a,b,null)},
ac:function(a,b){var u=H.J(this,"p",0)
return new H.aw(this,H.f(b,{func:1,ret:P.D,args:[u]}),[u])},
J:function(a,b){return P.aW(this,!0,H.J(this,"p",0))},
a_:function(a){return this.J(a,!0)},
gj:function(a){var u,t=this.gu(this)
for(u=0;t.l();)++u
return u},
gcU:function(a){var u=this.gu(this)
if(!u.l())throw H.h(H.iV())
return u.gq()},
gad:function(a){var u,t=this.gu(this)
if(!t.l())throw H.h(H.iV())
u=t.gq()
if(t.l())throw H.h(H.kI())
return u},
G:function(a,b){var u,t,s
P.ca(b,"index")
for(u=this.gu(this),t=0;u.l();){s=u.gq()
if(b===t)return s;++t}throw H.h(P.bz(b,this,"index",null,t))},
n:function(a){return P.kH(this,"(",")")}}
P.as.prototype={}
P.o.prototype={$iF:1,$ip:1}
P.q.prototype={}
P.c5.prototype={}
P.B.prototype={
gv:function(a){return P.v.prototype.gv.call(this,this)},
n:function(a){return"null"}}
P.a1.prototype={}
P.v.prototype={constructor:P.v,$iv:1,
P:function(a,b){return this===b},
gv:function(a){return H.bf(this)},
n:function(a){return"Instance of '"+H.b(H.c9(this))+"'"},
bd:function(a,b){H.d(b,"$ii7")
throw H.h(P.j1(this,b.gcX(),b.gd0(),b.gcY()))},
toString:function(){return this.n(this)}}
P.ai.prototype={}
P.N.prototype={}
P.i.prototype={$ij4:1}
P.au.prototype={
gj:function(a){return this.a.length},
n:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iml:1}
P.aJ.prototype={}
W.m.prototype={$im:1}
W.bR.prototype={
n:function(a){return String(a)},
$ibR:1}
W.dq.prototype={
n:function(a){return String(a)}}
W.bS.prototype={$ibS:1}
W.bu.prototype={$ibu:1}
W.b3.prototype={$ib3:1}
W.b4.prototype={
bZ:function(a,b){return a.getContext(b)},
$ib4:1}
W.b5.prototype={
cT:function(a,b,c,d){a.fillText(b,c,d)},
$ib5:1}
W.b6.prototype={
gj:function(a){return a.length}}
W.bY.prototype={
gj:function(a){return a.length}}
W.dL.prototype={}
W.bw.prototype={$ibw:1}
W.dN.prototype={
n:function(a){return String(a)}}
W.cv.prototype={
n:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
P:function(a,b){if(b==null)return!1
if(!J.k(b).$iih)return!1
return a.left===b.left&&a.top===b.top&&a.width===b.width&&a.height===b.height},
gv:function(a){return W.jm(C.c.gv(a.left),C.c.gv(a.top),C.c.gv(a.width),C.c.gv(a.height))},
$iih:1,
$aih:function(){return[P.a1]}}
W.dO.prototype={
p:function(a,b){return a.add(H.u(b))},
gj:function(a){return a.length}}
W.fI.prototype={
gI:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var u
H.z(b)
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return H.d(u[b],"$it")},
i:function(a,b,c){var u
H.z(b)
H.d(c,"$it")
u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
sj:function(a,b){throw H.h(P.E("Cannot resize element lists"))},
p:function(a,b){H.d(b,"$it")
this.a.appendChild(b)
return b},
gu:function(a){var u=this.a_(this)
return new J.b2(u,u.length,[H.a(u,0)])},
a1:function(a,b){H.f(b,{func:1,ret:P.H,args:[W.t,W.t]})
throw H.h(P.E("Cannot sort element lists"))},
b1:function(a){J.hZ(this.a)},
a5:function(a,b){var u,t=this.b
if(b>=t.length)return H.e(t,b)
u=H.d(t[b],"$it")
this.a.removeChild(u)
return u},
$aF:function(){return[W.t]},
$aM:function(){return[W.t]},
$ap:function(){return[W.t]},
$ao:function(){return[W.t]}}
W.aa.prototype={
gj:function(a){return this.a.length},
h:function(a,b){var u
H.z(b)
u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return H.n(u[b],H.a(this,0))},
i:function(a,b,c){H.z(b)
H.n(c,H.a(this,0))
throw H.h(P.E("Cannot modify list"))},
sj:function(a,b){throw H.h(P.E("Cannot modify list"))},
a1:function(a,b){var u=H.a(this,0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
throw H.h(P.E("Cannot sort list"))},
$ia8:1}
W.t.prototype={
geu:function(a){return new W.fP(a)},
gcN:function(a){return new W.fI(a,a.children)},
gcO:function(a){return new W.fQ(a)},
aa:function(a,b){this.cV(a,"beforeend",b,null,null)},
n:function(a){return a.localName},
cV:function(a,b,c,d,e){var u,t=this.L(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(t,a)
break
case"afterbegin":u=a.childNodes
a.insertBefore(t,u.length>0?u[0]:null)
break
case"beforeend":a.appendChild(t)
break
case"afterend":a.parentNode.insertBefore(t,a.nextSibling)
break
default:H.X(P.br("Invalid position "+b))}},
L:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.iU
if(u==null){u=H.C([],[W.a9])
t=new W.cI(u)
C.a.p(u,W.jk(null))
C.a.p(u,W.jn())
$.iU=t
d=t}else d=u
u=$.iT
if(u==null){u=new W.di(d)
$.iT=u
c=u}else{u.a=d
c=u}}if($.aR==null){u=document
t=u.implementation.createHTMLDocument("")
$.aR=t
$.i4=t.createRange()
t=$.aR.createElement("base")
H.d(t,"$ibS")
t.href=u.baseURI
$.aR.head.appendChild(t)}u=$.aR
if(u.body==null){t=u.createElement("body")
u.body=H.d(t,"$ib3")}u=$.aR
if(!!this.$ib3)s=u.body
else{s=u.createElement(a.tagName)
$.aR.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.L,a.tagName)){$.i4.selectNodeContents(s)
r=$.i4.createContextualFragment(b)}else{s.innerHTML=b
r=$.aR.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aR.body
if(s==null?u!=null:s!==u)J.bQ(s)
c.c_(r)
document.adoptNode(r)
return r},
ez:function(a,b,c){return this.L(a,b,c,null)},
a6:function(a,b){a.textContent=null
a.appendChild(this.L(a,b,null,null))},
$it:1,
gd4:function(a){return a.tagName}}
W.dR.prototype={
$1:function(a){return!!J.k(H.d(a,"$ir")).$it},
$S:11}
W.j.prototype={$ij:1}
W.b8.prototype={
dC:function(a,b,c,d){return a.addEventListener(b,H.bN(H.f(c,{func:1,args:[W.j]}),1),!1)},
e8:function(a,b,c,d){return a.removeEventListener(b,H.bN(H.f(c,{func:1,args:[W.j]}),1),!1)},
$ib8:1}
W.ee.prototype={
gj:function(a){return a.length}}
W.by.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.z(b)
H.d(c,"$ir")
throw H.h(P.E("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.h(P.E("Cannot resize immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.r]},
$iaT:1,
$aaT:function(){return[W.r]},
$aM:function(){return[W.r]},
$ip:1,
$ap:function(){return[W.r]},
$io:1,
$ao:function(){return[W.r]},
$iby:1,
$aag:function(){return[W.r]}}
W.c0.prototype={$ic0:1}
W.ba.prototype={$iba:1}
W.aV.prototype={$iaV:1}
W.cE.prototype={
n:function(a){return String(a)},
$icE:1}
W.A.prototype={
gcZ:function(a){var u,t,s,r,q,p
if(!!a.offsetX)return new P.aI(a.offsetX,a.offsetY,[P.a1])
else{u=a.target
if(!J.k(W.jo(u)).$it)throw H.h(P.E("offsetX is only supported on elements"))
t=H.d(W.jo(u),"$it")
u=a.clientX
s=a.clientY
r=[P.a1]
q=t.getBoundingClientRect()
p=q.left
q=q.top
H.y(new P.aI(p,q,r),"$iaI",r,"$aaI")
if(typeof u!=="number")return u.R()
if(typeof s!=="number")return s.R()
return new P.aI(C.c.bf(u-p),C.c.bf(s-q),r)}},
$iA:1}
W.a5.prototype={
gad:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.h(P.cc("No elements"))
if(t>1)throw H.h(P.cc("More than one element"))
return u.firstChild},
p:function(a,b){this.a.appendChild(H.d(b,"$ir"))},
K:function(a,b){var u,t,s,r
H.y(b,"$ip",[W.r],"$ap")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
a5:function(a,b){var u,t=this.a,s=t.childNodes
if(b>=s.length)return H.e(s,b)
u=s[b]
t.removeChild(u)
return u},
i:function(a,b,c){var u,t
H.z(b)
H.d(c,"$ir")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gu:function(a){var u=this.a.childNodes
return new W.cx(u,u.length,[H.an(C.O,u,"ag",0)])},
a1:function(a,b){H.f(b,{func:1,ret:P.H,args:[W.r,W.r]})
throw H.h(P.E("Cannot sort Node list"))},
gj:function(a){return this.a.childNodes.length},
sj:function(a,b){throw H.h(P.E("Cannot set length on immutable List."))},
h:function(a,b){var u
H.z(b)
u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aF:function(){return[W.r]},
$aM:function(){return[W.r]},
$ap:function(){return[W.r]},
$ao:function(){return[W.r]}}
W.r.prototype={
V:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
eR:function(a,b){var u,t
try{u=a.parentNode
J.kd(u,b,a)}catch(t){H.P(t)}return a},
dF:function(a){var u
for(;u=a.firstChild,u!=null;)a.removeChild(u)},
n:function(a){var u=a.nodeValue
return u==null?this.dk(a):u},
e9:function(a,b,c){return a.replaceChild(b,c)},
$ir:1}
W.c8.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.z(b)
H.d(c,"$ir")
throw H.h(P.E("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.h(P.E("Cannot resize immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.r]},
$iaT:1,
$aaT:function(){return[W.r]},
$aM:function(){return[W.r]},
$ip:1,
$ap:function(){return[W.r]},
$io:1,
$ao:function(){return[W.r]},
$aag:function(){return[W.r]}}
W.f1.prototype={
gj:function(a){return a.length}}
W.cR.prototype={
L:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
u=W.kE("<table>"+H.b(b)+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a5(t).K(0,new W.a5(u))
return t}}
W.fd.prototype={
L:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.L(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gad(u)
s.toString
u=new W.a5(s)
r=u.gad(u)
t.toString
r.toString
new W.a5(t).K(0,new W.a5(r))
return t}}
W.fe.prototype={
L:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.L(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gad(u)
t.toString
s.toString
new W.a5(t).K(0,new W.a5(s))
return t}}
W.ce.prototype={
a6:function(a,b){var u
a.textContent=null
J.hZ(a.content)
u=this.L(a,b,null,null)
a.content.appendChild(u)},
$ice:1}
W.aY.prototype={$iaY:1}
W.bg.prototype={}
W.bi.prototype={
ger:function(a){var u=P.a1,t=new P.V($.G,[u]),s=H.f(new W.fy(new P.hx(t,[u])),{func:1,ret:-1,args:[P.a1]})
this.dQ(a)
this.ea(a,W.jA(s,u))
return t},
ea:function(a,b){return a.requestAnimationFrame(H.bN(H.f(b,{func:1,ret:-1,args:[P.a1]}),1))},
dQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibi:1,
$ijg:1}
W.fy.prototype={
$1:function(a){var u=this.a
a=H.hO(H.dn(a),{futureOr:1,type:H.a(u,0)})
u=u.a
if(u.a!==0)H.X(P.cc("Future already completed"))
u.aJ(a)},
$S:30}
W.aZ.prototype={$iaZ:1}
W.cf.prototype={$icf:1}
W.d0.prototype={
n:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
P:function(a,b){if(b==null)return!1
if(!J.k(b).$iih)return!1
return a.left===b.left&&a.top===b.top&&a.width===b.width&&a.height===b.height},
gv:function(a){return W.jm(C.c.gv(a.left),C.c.gv(a.top),C.c.gv(a.width),C.c.gv(a.height))}}
W.da.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.z(b)
H.d(c,"$ir")
throw H.h(P.E("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.h(P.E("Cannot resize immutable List."))},
G:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.r]},
$iaT:1,
$aaT:function(){return[W.r]},
$aM:function(){return[W.r]},
$ip:1,
$ap:function(){return[W.r]},
$io:1,
$ao:function(){return[W.r]},
$aag:function(){return[W.r]}}
W.fE.prototype={
w:function(a,b){var u,t,s,r,q
H.f(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=this.gB(),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.W)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gB:function(){var u,t,s,r=this.a.attributes,q=H.C([],[P.i])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.d(r[t],"$icf")
if(s.namespaceURI==null)C.a.p(q,s.name)}return q},
gI:function(a){return this.gB().length===0},
$aaG:function(){return[P.i,P.i]},
$aq:function(){return[P.i,P.i]}}
W.fP.prototype={
t:function(a){return this.a.hasAttribute(a)},
h:function(a,b){return this.a.getAttribute(H.u(b))},
i:function(a,b,c){this.a.setAttribute(b,H.u(c))},
gj:function(a){return this.gB().length}}
W.fQ.prototype={
U:function(){var u,t,s,r,q=P.c3(P.i)
for(u=this.a.className.split(" "),t=u.length,s=0;s<t;++s){r=J.i0(u[s])
if(r.length!==0)q.p(0,r)}return q},
bY:function(a){this.a.className=H.y(a,"$iai",[P.i],"$aai").bN(0," ")},
gj:function(a){return this.a.classList.length},
p:function(a,b){var u,t
H.u(b)
u=this.a.classList
t=u.contains(b)
u.add(b)
return!t},
H:function(a,b){var u=this.a.classList,t=u.contains(b)
u.remove(b)
return t}}
W.d2.prototype={
T:function(a,b,c,d){var u=H.a(this,0)
H.f(a,{func:1,ret:-1,args:[u]})
H.f(c,{func:1,ret:-1})
return W.Q(this.a,this.b,a,!1,u)},
bb:function(a,b,c){return this.T(a,null,b,c)}}
W.ii.prototype={}
W.aL.prototype={
T:function(a,b,c,d){var u,t,s,r=this,q=H.a(r,0)
H.f(a,{func:1,ret:-1,args:[q]})
H.f(c,{func:1,ret:-1})
u=r.$ti
t=new W.dg(new H.L([[P.a_,q],[P.a0,q]]),u)
t.sdM(new P.hu(null,t.gey(t),u))
for(q=r.a,q=new H.c4(q,q.gj(q),[H.a(q,0)]),s=r.c;q.l();)t.p(0,new W.d2(q.d,s,!1,u))
q=t.a
q.toString
return new P.fF(q,[H.a(q,0)]).T(a,b,c,d)},
bb:function(a,b,c){return this.T(a,null,b,c)},
ab:function(a){return this.T(a,null,null,null)}}
W.fR.prototype={
az:function(){var u=this
if(u.b==null)return
u.cI()
u.b=null
u.se2(null)
return},
bO:function(a){if(this.b==null)return;++this.a
this.cI()},
bR:function(){var u=this
if(u.b==null||u.a<=0)return;--u.a
u.cH()},
cH:function(){var u,t=this,s=t.d,r=s!=null
if(r&&t.a<=0){u=t.b
u.toString
H.f(s,{func:1,args:[W.j]})
if(r)J.kb(u,t.c,s,!1)}},
cI:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.f(t,{func:1,args:[W.j]})
if(s)J.kc(u,this.c,t,!1)}},
se2:function(a){this.d=H.f(a,{func:1,args:[W.j]})}}
W.fS.prototype={
$1:function(a){return this.a.$1(H.d(a,"$ij"))},
$S:26}
W.dg.prototype={
p:function(a,b){var u,t,s,r=this
H.y(b,"$ia_",r.$ti,"$aa_")
u=r.b
if(u.t(b))return
t=r.a
s=H.a(b,0)
t=H.f(t.gen(t),{func:1,ret:-1,args:[s]})
H.f(new W.hs(r,b),{func:1,ret:-1})
u.i(0,b,W.Q(b.a,b.b,t,!1,s))},
bI:function(a){var u,t
for(u=this.b,t=u.gW(u),t=new H.a4(J.x(t.a),t.b,[H.a(t,0),H.a(t,1)]);t.l();)t.a.az()
u.b1(0)
this.a.bI(0)},
sdM:function(a){this.a=H.y(a,"$ij8",this.$ti,"$aj8")}}
W.hs.prototype={
$0:function(){var u=this.a,t=u.b.H(0,H.y(this.b,"$ia_",[H.a(u,0)],"$aa_"))
if(t!=null)t.az()
return},
$S:0}
W.bl.prototype={
dz:function(a){var u
if($.d4.a===0){for(u=0;u<262;++u)$.d4.i(0,C.K[u],W.lJ())
for(u=0;u<12;++u)$.d4.i(0,C.j[u],W.lK())}},
ai:function(a){return $.k9().A(0,W.bZ(a))},
a4:function(a,b,c){var u=$.d4.h(0,H.b(W.bZ(a))+"::"+b)
if(u==null)u=$.d4.h(0,"*::"+b)
if(u==null)return!1
return H.it(u.$4(a,b,c,this))},
$ia9:1}
W.ag.prototype={
gu:function(a){return new W.cx(a,this.gj(a),[H.an(this,a,"ag",0)])},
p:function(a,b){H.n(b,H.an(this,a,"ag",0))
throw H.h(P.E("Cannot add to immutable List."))},
a1:function(a,b){var u=H.an(this,a,"ag",0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
throw H.h(P.E("Cannot sort immutable List."))},
a5:function(a,b){throw H.h(P.E("Cannot remove from immutable List."))}}
W.cI.prototype={
p:function(a,b){C.a.p(this.a,H.d(b,"$ia9"))},
ai:function(a){return C.a.cK(this.a,new W.eL(a))},
a4:function(a,b,c){return C.a.cK(this.a,new W.eK(a,b,c))},
$ia9:1}
W.eL.prototype={
$1:function(a){return H.d(a,"$ia9").ai(this.a)},
$S:12}
W.eK.prototype={
$1:function(a){return H.d(a,"$ia9").a4(this.a,this.b,this.c)},
$S:12}
W.de.prototype={
dA:function(a,b,c,d){var u,t,s
this.a.K(0,c)
u=b.ac(0,new W.hp())
t=b.ac(0,new W.hq())
this.b.K(0,u)
s=this.c
s.K(0,C.M)
s.K(0,t)},
ai:function(a){return this.a.A(0,W.bZ(a))},
a4:function(a,b,c){var u=this,t=W.bZ(a),s=u.c
if(s.A(0,H.b(t)+"::"+b))return u.d.ep(c)
else if(s.A(0,"*::"+b))return u.d.ep(c)
else{s=u.b
if(s.A(0,H.b(t)+"::"+b))return!0
else if(s.A(0,"*::"+b))return!0
else if(s.A(0,H.b(t)+"::*"))return!0
else if(s.A(0,"*::*"))return!0}return!1},
$ia9:1}
W.hp.prototype={
$1:function(a){return!C.a.A(C.j,H.u(a))},
$S:13}
W.hq.prototype={
$1:function(a){return C.a.A(C.j,H.u(a))},
$S:13}
W.hy.prototype={
a4:function(a,b,c){if(this.dv(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
W.hz.prototype={
$1:function(a){return"TEMPLATE::"+H.b(H.u(a))},
$S:17}
W.ht.prototype={
ai:function(a){var u=J.k(a)
if(!!u.$icb)return!1
u=!!u.$il
if(u&&W.bZ(a)==="foreignObject")return!1
if(u)return!0
return!1},
a4:function(a,b,c){if(b==="is"||C.e.dg(b,"on"))return!1
return this.ai(a)},
$ia9:1}
W.cx.prototype={
l:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scl(J.Z(u.a,t))
u.c=t
return!0}u.scl(null)
u.c=s
return!1},
gq:function(){return this.d},
scl:function(a){this.d=H.n(a,H.a(this,0))},
$ias:1}
W.fL.prototype={$ib8:1,$ijg:1}
W.a9.prototype={}
W.hn.prototype={$imw:1}
W.di.prototype={
c_:function(a){new W.hD(this).$2(a,null)},
ax:function(a,b){if(b==null)J.bQ(a)
else b.removeChild(a)},
ee:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kg(a)
n=o.a.getAttribute("is")
H.d(a,"$it")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.O(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.P(r)}t="element unprintable"
try{t=J.I(a)}catch(r){H.P(r)}try{s=W.bZ(a)
this.ed(H.d(a,"$it"),b,p,t,s,H.d(o,"$iq"),H.u(n))}catch(r){if(H.P(r) instanceof P.az)throw r
else{this.ax(a,b)
window
q="Removing corrupted element "+H.b(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ed:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.ax(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ai(a)){o.ax(a,b)
window
u="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.a4(a,"is",g)){o.ax(a,b)
window
u="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gB()
t=H.C(u.slice(0),[H.a(u,0)])
for(s=f.gB().length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.kp(r)
H.u(r)
if(!q.a4(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.b(e)+" "+r+'="'+H.b(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.k(a).$ice)o.c_(a.content)},
$imj:1}
W.hD.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ee(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ax(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.P(s)
r=H.d(u,"$ir")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$ir")}},
$S:21}
W.d_.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dj.prototype={}
W.dk.prototype={}
P.dJ.prototype={
cJ:function(a){var u=$.jZ().b
if(u.test(a))return a
throw H.h(P.i1(a,"value","Not a valid class token"))},
n:function(a){return this.U().bN(0," ")},
gu:function(a){var u=this.U()
return P.cg(u,u.r,H.a(u,0))},
E:function(a,b,c){var u,t
H.f(b,{func:1,ret:c,args:[P.i]})
u=this.U()
t=H.a(u,0)
return new H.bx(u,H.f(b,{func:1,ret:c,args:[t]}),[t,c])},
O:function(a,b){return this.E(a,b,null)},
gj:function(a){return this.U().a},
p:function(a,b){H.u(b)
this.cJ(b)
return H.it(this.eN(new P.dK(b)))},
H:function(a,b){var u,t
this.cJ(b)
u=this.U()
t=u.H(0,b)
this.bY(u)
return t},
J:function(a,b){return this.U().J(0,!0)},
a_:function(a){return this.J(a,!0)},
G:function(a,b){return this.U().G(0,b)},
eN:function(a){var u,t
H.f(a,{func:1,args:[[P.ai,P.i]]})
u=this.U()
t=a.$1(u)
this.bY(u)
return t},
$aF:function(){return[P.i]},
$abE:function(){return[P.i]},
$ap:function(){return[P.i]},
$aai:function(){return[P.i]}}
P.dK.prototype={
$1:function(a){return H.y(a,"$iai",[P.i],"$aai").p(0,this.a)},
$S:22}
P.ea.prototype={
ga9:function(){var u=this.b,t=H.J(u,"M",0),s=W.t
return new H.bB(new H.aw(u,H.f(new P.eb(),{func:1,ret:P.D,args:[t]}),[t]),H.f(new P.ec(),{func:1,ret:s,args:[t]}),[t,s])},
i:function(a,b,c){var u
H.z(b)
H.d(c,"$it")
u=this.ga9()
J.kn(u.b.$1(J.cq(u.a,b)),c)},
sj:function(a,b){var u=J.af(this.ga9().a)
if(b>=u)return
else if(b<0)throw H.h(P.br("Invalid list length"))
this.eQ(0,b,u)},
p:function(a,b){this.b.a.appendChild(H.d(b,"$it"))},
a1:function(a,b){H.f(b,{func:1,ret:P.H,args:[W.t,W.t]})
throw H.h(P.E("Cannot sort filtered list"))},
eQ:function(a,b,c){var u=this.ga9()
u=H.l5(u,b,H.J(u,"p",0))
C.a.w(P.aW(H.l8(u,c-b,H.J(u,"p",0)),!0,null),new P.ed())},
b1:function(a){J.hZ(this.b.a)},
a5:function(a,b){var u=this.ga9()
u=u.b.$1(J.cq(u.a,b))
J.bQ(u)
return u},
gj:function(a){return J.af(this.ga9().a)},
h:function(a,b){var u
H.z(b)
u=this.ga9()
return u.b.$1(J.cq(u.a,b))},
gu:function(a){var u=P.aW(this.ga9(),!1,W.t)
return new J.b2(u,u.length,[H.a(u,0)])},
$aF:function(){return[W.t]},
$aM:function(){return[W.t]},
$ap:function(){return[W.t]},
$ao:function(){return[W.t]}}
P.eb.prototype={
$1:function(a){return!!J.k(H.d(a,"$ir")).$it},
$S:11}
P.ec.prototype={
$1:function(a){return H.jL(H.d(a,"$ir"),"$it")},
$S:23}
P.ed.prototype={
$1:function(a){return J.bQ(a)},
$S:3}
P.c2.prototype={$ic2:1}
P.aj.prototype={
h:function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.h(P.br("property is not a String or num"))
return P.hG(this.a[b])},
i:function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.h(P.br("property is not a String or num"))
this.a[b]=P.dl(c)},
gv:function(a){return 0},
P:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a},
n:function(a){var u,t
try{u=String(this.a)
return u}catch(t){H.P(t)
u=this.dr(0)
return u}},
b0:function(a,b){var u,t=this.a
if(b==null)u=null
else{u=H.a(b,0)
u=P.aW(new H.aH(b,H.f(P.jO(),{func:1,ret:null,args:[u]}),[u,null]),!0,null)}return P.hG(t[a].apply(t,u))}}
P.eo.prototype={
$1:function(a){var u,t,s,r,q=this.a
if(q.t(a))return q.h(0,a)
u=J.k(a)
if(!!u.$iq){t={}
q.i(0,a,t)
for(q=J.x(a.gB());q.l();){s=q.gq()
t[s]=this.$1(a.h(0,s))}return t}else if(!!u.$ip){r=[]
q.i(0,a,r)
C.a.K(r,u.E(a,this,null))
return r}else return P.dl(a)},
$S:3}
P.aU.prototype={}
P.c1.prototype={
bp:function(a){var u=this,t=a<0||a>=u.gj(u)
if(t)throw H.h(P.cM(a,0,u.gj(u),null,null))},
h:function(a,b){if(typeof b==="number"&&b===C.f.bf(b))this.bp(H.z(b))
return H.n(this.dn(0,b),H.a(this,0))},
i:function(a,b,c){H.n(c,H.a(this,0))
if(typeof b==="number"&&b===C.f.bf(b))this.bp(H.z(b))
this.c1(0,b,c)},
gj:function(a){var u=this.a.length
if(typeof u==="number"&&u>>>0===u)return u
throw H.h(P.cc("Bad JsArray length"))},
sj:function(a,b){this.c1(0,"length",b)},
p:function(a,b){this.b0("push",[H.n(b,H.a(this,0))])},
a5:function(a,b){this.bp(b)
return H.n(J.Z(this.b0("splice",[b,1]),0),H.a(this,0))},
a1:function(a,b){var u=H.a(this,0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
this.b0("sort",[b])},
$iF:1,
$ip:1,
$io:1}
P.hH.prototype={
$1:function(a){var u
H.d(a,"$iar")
u=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.lo,a,!1)
P.il(u,$.hY(),a)
return u},
$S:3}
P.hI.prototype={
$1:function(a){return new this.a(a)},
$S:3}
P.hK.prototype={
$1:function(a){return new P.aU(a)},
$S:24}
P.hL.prototype={
$1:function(a){return new P.c1(a,[null])},
$S:25}
P.hM.prototype={
$1:function(a){return new P.aj(a)},
$S:53}
P.d7.prototype={}
P.aI.prototype={
n:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
P:function(a,b){if(b==null)return!1
return!!J.k(b).$iaI&&this.a==b.a&&this.b==b.b},
gv:function(a){var u,t=J.aQ(this.a),s=J.aQ(this.b)
s=P.jl(P.jl(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
m:function(a,b){var u,t,s=this,r=s.a
if(typeof r!=="number")return r.m()
if(typeof b!=="number")return H.c(b)
u=H.a(s,0)
r=H.n(r*b,u)
t=s.b
if(typeof t!=="number")return t.m()
return new P.aI(r,H.n(t*b,u),s.$ti)}}
P.cb.prototype={$icb:1}
P.ds.prototype={
U:function(){var u,t,s,r,q=this.a.getAttribute("class"),p=P.c3(P.i)
if(q==null)return p
for(u=q.split(" "),t=u.length,s=0;s<t;++s){r=J.i0(u[s])
if(r.length!==0)p.p(0,r)}return p},
bY:function(a){this.a.setAttribute("class",a.bN(0," "))}}
P.l.prototype={
gcO:function(a){return new P.ds(a)},
gcN:function(a){return new P.ea(a,new W.a5(a))},
L:function(a,b,c,d){var u,t,s,r,q,p=H.C([],[W.a9])
C.a.p(p,W.jk(null))
C.a.p(p,W.jn())
C.a.p(p,new W.ht())
c=new W.di(new W.cI(p))
u='<svg version="1.1">'+H.b(b)+"</svg>"
p=document
t=p.body
s=(t&&C.m).ez(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a5(s)
q=p.gad(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
cV:function(a,b,c,d,e){throw H.h(P.E("Cannot invoke insertAdjacentHtml on SVG."))},
$il:1}
U.ao.prototype={
gaB:function(){return 0},
gaj:function(){return 0},
gay:function(){var u=this.z
return u!=null?u.gay():this},
gbc:function(){var u=this.z
if(!(u!=null)){u=this.cx
u=u!=null?u.x1:null}return u},
gcW:function(){return this.Q==null},
af:function(a,b,c){var u,t=this,s=t.a
if(s==null){s=t.id
u=s.y
t.a=u
s.y=u+1}else{u=t.id
if(s>=u.y)u.y=s+1
s=u}u=s.z
t.b=u
s.z=u+1
t.x=$.bq()
t.y=$.w()},
b2:function(a){var u=this,t=U.iO(u.id,u.a,u.c)
u.aL(t)
return t},
aL:function(a){var u,t,s,r,q=this
a.c=q.c
a.d=q.d
a.e=q.e
a.dy=q.dy
a.fr=q.fr
a.fx=q.fx
a.fy=q.fy
a.go=q.go
a.x=q.x
a.y=q.y
a.k1=q.k1
for(u=q.cy,u=u.gW(u),u=new H.a4(J.x(u.a),u.b,[H.a(u,0),H.a(u,1)]),t=a.cy;u.l();){s=u.a.b3(0,a)
t.i(0,s.a,s)}for(u=q.db,u=u.gW(u),u=new H.a4(J.x(u.a),u.b,[H.a(u,0),H.a(u,1)]),t=a.db;u.l();){r=u.a.b3(0,a)
t.i(0,r.a,r)}},
C:function(){var u,t,s=this,r="properties",q=P.id()
q.i(0,"id",s.a)
q.i(0,"instanceId",s.b)
q.i(0,"action",s.c)
q.i(0,"type",s.d)
q.i(0,"format",s.e)
q.i(0,"start",s.k1)
q.i(0,"required",s.go)
u=s.f
t=$.iD()
if(typeof u!=="number")return u.an()
if(typeof t!=="number")return H.c(t)
q.i(0,"x",u/t)
u=s.r
if(typeof u!=="number")return u.an()
q.i(0,"y",u/t)
u=s.cy
if(u.a!==0){q.i(0,"params",[])
for(u=u.gW(u),u=new H.a4(J.x(u.a),u.b,[H.a(u,0),H.a(u,1)]);u.l();){t=u.a
J.aP(q.h(0,"params"),t.C())}}u=s.db
if(u.a!==0){q.i(0,r,[])
for(u=u.gW(u),u=new H.a4(J.x(u.a),u.b,[H.a(u,0),H.a(u,1)]);u.l();){t=u.a
J.aP(q.h(0,r),t.C())}}return q},
X:function(a){var u
J.aP(a,this.C())
u=this.z
if(u!=null)u.X(a)},
aW:function(a,b){var u,t,s,r,q,p=this,o=$.bq(),n=p.dT(a),m=$.a2()
if(typeof m!=="number")return m.m()
if(typeof n!=="number")return n.k()
p.x=Math.max(H.jF(o),n+m*2)
if(!p.rx&&p.cy.a!==0)for(o=p.cy,o=o.gW(o),o=new H.a4(J.x(o.a),o.b,[H.a(o,0),H.a(o,1)]),u=0;o.l();){n=o.a
n.aV(a)
u+=n.z+m}else u=0
if(!p.rx&&p.db.a!==0)for(o=p.db,o=o.gW(o),o=new H.a4(J.x(o.a),o.b,[H.a(o,0),H.a(o,1)]),t=0;o.l();){n=o.a
n.aV(a)
s=n.z
a.save()
a.font=n.b.fy
r=$.bp()
n=a.measureText("\u25b8    "+H.b(n.f)).width
if(typeof r!=="number")return r.k()
if(typeof n!=="number")return H.c(n)
a.restore()
t=Math.max(t,s+(r+n+m*2))}else t=0
o=p.f
if(typeof o!=="number")return o.k()
n=p.x
if(typeof n!=="number")return H.c(n)
n=Math.max(o+t,o+n+u)
b=Math.max(H.jF(b),n)
q=p.gbc()
if(q!=null)b=q.aW(a,b)
o=p.f
if(typeof o!=="number")return H.c(o)
p.x=b-o
return b},
Y:function(a,b){var u,t=this
t.ch=a
t.cx=b
u=t.z
if(u!=null)u.Y(a+t.gaj(),b)},
ag:function(){var u,t,s,r,q=this,p=q.z
if(p!=null){u=q.r
t=q.rx?$.w():q.y
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
p.r=u+t
t=q.f
u=p.ch
s=q.ch
r=$.bp()
if(typeof r!=="number")return H.c(r)
if(typeof t!=="number")return t.k()
p.f=t+(u-s)*r
p.ag()}},
dT:function(a){var u
a.save()
a.font=this.fy
u=a.measureText(this.c).width
a.restore()
return u},
bt:function(a){var u,t,s,r,q,p=this
a.save()
a.fillStyle=p.fr
a.font=p.fy
a.textAlign="left"
a.textBaseline="middle"
u=p.c
t=p.f
s=$.a2()
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.c(s)
r=p.r
q=$.w()
if(typeof q!=="number")return q.an()
if(typeof r!=="number")return r.k()
C.q.cT(a,u,t+s,r+q/2)
a.restore()},
bu:function(a){var u
a.save()
this.aS(a)
a.strokeStyle=this.fx
u=$.ae()
if(typeof u!=="number")return H.c(u)
a.lineWidth=0.5*u
a.lineJoin="round"
a.stroke()
a.restore()},
bs:function(a){a.save()
this.aS(a)
a.fillStyle=this.dy
a.fill()
a.fillStyle="rgba(0, 0, 0, "+H.b(Math.min(1,0.075*this.ch))
a.fill()
a.restore()},
dN:function(a){var u,t,s=this.x,r=this.cy,q=H.a(r,0),p=P.aW(new H.aE(r,[q]),!0,q)
for(u=p.length-1;u>=0;--u){q=$.a2()
if(u>=p.length)return H.e(p,u)
t=r.h(0,p[u]).z
if(typeof q!=="number")return q.k()
if(typeof s!=="number")return s.R()
s-=q+t
if(u>=p.length)return H.e(p,u)
r.h(0,p[u]).bJ(a,s)}},
dO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this.db,i=H.a(j,0),h=P.aW(new H.aE(j,[i]),!0,i)
for(u=0;u<h.length;u=t){i=$.w()
t=u+1
if(typeof i!=="number")return i.m()
s=i*t
r=j.h(0,h[u])
q=r.b
p=q.x
o=$.a2()
n=r.z
if(typeof o!=="number")return o.k()
if(typeof p!=="number")return p.R()
m=q.r
if(typeof m!=="number")return m.k()
l=q.f
k=$.bp()
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.c(k)
a.fillStyle=q.fr
a.font=q.fy
a.textAlign="left"
a.textBaseline="middle"
a.fillText("\u25b8    "+H.b(r.f),l+k,m+s+i/2)
r.cR(a,p-(o+n),s)}},
aS:function(a){var u,t,s,r,q,p=this
a.beginPath()
u=p.f
t=$.a2()
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
a.moveTo(u+t,p.r)
p.bC(a,p.Q==null&&p.k1)
u=p.ch===0
s=u&&p.Q==null
p.cv(a,s,u&&p.z==null)
p.bB(a,p.z==null&&p.ch===0)
if(p.ch<=0)u=p.Q!=null&&p.z!=null
else u=!0
if(u){u=p.f
s=p.r
r=p.rx?$.w():p.y
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
a.lineTo(u,s+r)
a.lineTo(p.f,p.r)
r=p.f
if(typeof r!=="number")return r.k()
a.lineTo(r+t,p.r)}else if(p.z!=null){u=p.f
s=p.r
r=p.rx?$.w():p.y
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
a.lineTo(u,s+r)
r=p.f
s=p.r
if(typeof s!=="number")return s.k()
a.lineTo(r,s+t)
s=p.f
r=p.r
if(typeof s!=="number")return s.k()
a.quadraticCurveTo(s,r,s+t,r)}else{u=p.Q
s=p.f
r=p.r
if(u!=null){u=p.rx
q=u?$.w():p.y
if(typeof r!=="number")return r.k()
if(typeof q!=="number")return H.c(q)
u=u?$.w():p.y
if(typeof u!=="number")return H.c(u)
a.quadraticCurveTo(s,r+q,s,r+u-t)
a.lineTo(p.f,p.r)
u=p.f
if(typeof u!=="number")return u.k()
a.lineTo(u+t,p.r)}else{u=p.rx
q=u?$.w():p.y
if(typeof r!=="number")return r.k()
if(typeof q!=="number")return H.c(q)
u=u?$.w():p.y
if(typeof u!=="number")return H.c(u)
a.quadraticCurveTo(s,r+q,s,r+u-t)
u=p.f
r=p.r
if(typeof r!=="number")return r.k()
a.lineTo(u,r+t)
r=p.f
u=p.r
if(typeof r!=="number")return r.k()
a.quadraticCurveTo(r,u,r+t,u)}}a.closePath()},
cv:function(a,b,c){var u,t,s=this,r=$.a2(),q=s.f,p=s.x
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
if(typeof r!=="number")return H.c(r)
a.lineTo(q+p-r,s.r)
if(b&&c){q=s.f
p=s.x
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
p=q+p
q=s.r
if(typeof q!=="number")return q.k()
a.quadraticCurveTo(p,q,p,q+r)
q=s.f
p=s.x
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
u=s.r
t=s.rx?$.w():s.y
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(q+p,u+t-r)
t=s.f
u=s.x
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.c(u)
u=t+u
t=s.r
q=s.rx
p=q?$.w():s.y
if(typeof t!=="number")return t.k()
if(typeof p!=="number")return H.c(p)
q=q?$.w():s.y
if(typeof q!=="number")return H.c(q)
a.quadraticCurveTo(u,t+p,u-r,t+q)}else if(c){q=s.f
p=s.x
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
a.lineTo(q+p,s.r)
p=s.f
q=s.x
if(typeof p!=="number")return p.k()
if(typeof q!=="number")return H.c(q)
u=s.r
t=s.rx?$.w():s.y
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(p+q,u+t-r)
t=s.f
u=s.x
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.c(u)
u=t+u
t=s.r
q=s.rx
p=q?$.w():s.y
if(typeof t!=="number")return t.k()
if(typeof p!=="number")return H.c(p)
q=q?$.w():s.y
if(typeof q!=="number")return H.c(q)
a.quadraticCurveTo(u,t+p,u-r,t+q)}else{q=s.f
p=s.x
u=s.r
if(b){if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
q+=p
if(typeof u!=="number")return u.k()
a.quadraticCurveTo(q,u,q,u+r)
u=s.f
q=s.x
if(typeof u!=="number")return u.k()
if(typeof q!=="number")return H.c(q)
p=s.r
t=s.rx?$.w():s.y
if(typeof p!=="number")return p.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(u+q,p+t)
t=s.f
p=s.x
if(typeof t!=="number")return t.k()
if(typeof p!=="number")return H.c(p)
q=s.r
u=s.rx?$.w():s.y
if(typeof q!=="number")return q.k()
if(typeof u!=="number")return H.c(u)
a.lineTo(t+p-r,q+u)}else{if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
a.lineTo(q+p,u)
q=s.f
p=s.x
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
u=s.r
t=s.rx?$.w():s.y
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(q+p,u+t)
t=s.f
u=s.x
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.c(u)
p=s.r
q=s.rx?$.w():s.y
if(typeof p!=="number")return p.k()
if(typeof q!=="number")return H.c(q)
a.lineTo(t+u-r,p+q)}}},
bC:function(a,b){var u,t,s,r=this,q=$.a2(),p=r.f
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return p.k()
u=$.bp()
t=r.gaB()
if(typeof u!=="number")return u.m()
s=p+q*2+u*t
if(b){a.lineTo(s,r.r)
p=r.r
if(typeof p!=="number")return p.k()
u=p+q/2
t=s+q
a.bezierCurveTo(s,u,t,u,t,p)}p=r.f
u=r.x
if(typeof p!=="number")return p.k()
if(typeof u!=="number")return H.c(u)
a.lineTo(p+u-q,r.r)},
bB:function(a,b){var u,t,s,r,q,p,o=this,n=$.a2(),m=o.f
if(typeof n!=="number")return n.m()
if(typeof m!=="number")return m.k()
u=m+n*2
if(!o.rx){m=$.bp()
t=o.gaj()
if(typeof m!=="number")return m.m()
u+=m*t}if(b){m=u+n
t=o.r
s=o.rx?$.w():o.y
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.c(s)
a.lineTo(m,t+s)
s=o.r
t=o.rx
r=t?$.w():o.y
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
q=n/2
p=t?$.w():o.y
if(typeof p!=="number")return H.c(p)
t=t?$.w():o.y
if(typeof t!=="number")return H.c(t)
a.bezierCurveTo(m,s+r+q,u,s+p+q,u,s+t)}m=o.r
t=o.rx?$.w():o.y
if(typeof m!=="number")return m.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(u-n,m+t)},
b5:function(a){var u,t,s=this,r=a.c,q=a.e,p=s.r,o=s.rx?$.w():s.y
if(typeof p!=="number")return p.k()
if(typeof o!=="number")return H.c(o)
u=s.f
if(typeof u!=="number")return H.c(u)
if(r>=u)if(q>=p){t=s.x
if(typeof t!=="number")return H.c(t)
o=r<=u+t&&q<=p+o}else o=!1
else o=!1
return o},
al:function(a){var u,t,s,r=this
r.k2=!0
u=a.c
r.k3=u
t=a.e
r.k4=t
r.r1=u
r.r2=t
u=r.Q
if(u!=null)r.Q=u.z=null
for(u=r.id,s=r;s!=null;){u.e7(s)
u.ar(s)
s=s.gbc()}return r},
bX:function(a){var u,t=this
t.ry=t.rx=t.k2=!1
u=t.id
if(!u.ek(t))u.cE(t)
u.aD(new U.dt(t.a,t.b))},
bV:function(a){this.k3=a.c
this.k4=a.e},
bW:function(a){},
$ibF:1}
U.dI.prototype={
gbc:function(){var u=this.z
if(u!=null)return u
else{u=this.x1
if(u!=null)return u
else{u=this.cx
if(u!=null)return u.x1
else return}}},
Y:function(a,b){var u,t=this
t.ch=a
t.cx=b
u=t.z
if(u!=null)u.Y(a+t.gaj(),t)}}
U.ap.prototype={
gaB:function(){return 1},
gaj:function(){return 1},
gcW:function(){return!1},
b2:function(a){var u,t=this,s=t.id,r=t.a,q=t.c,p=[P.H,U.at],o=$.ae()
if(typeof o!=="number")return H.c(o)
u=new U.ap(r,q,new H.L(p),new H.L(p),"400 "+H.b(14*o)+"px 'Poppins', sans-serif",s)
u.af(s,r,q)
u.k1=!1
t.aL(u)
return u},
X:function(a){var u,t="children",s=this.C()
s.i(0,t,[])
J.aP(a,s)
u=this.z
if(u!=null)u.X(H.a7(s.h(0,t)))},
bu:function(a){},
bs:function(a){},
al:function(a){return this.N.al(a)}}
U.cw.prototype={
gaB:function(){return 1},
gaj:function(){return 0},
Y:function(a,b){var u
this.ch=a
this.cx=b
u=this.z
if(u!=null)u.Y(a,b)},
X:function(a){J.aP(a,this.C())},
bt:function(a){}}
U.bt.prototype={
gaB:function(){return 0},
gaj:function(){return 1},
b2:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=U.iN(k.id,k.a,k.c)
k.aL(j)
for(u=k.N,t=u.length,s=[P.H,U.at],r=0;r<u.length;u.length===t||(0,H.W)(u),++r){q=u[r]
if(!q.$icw){p=q.id
o=q.a
n=q.c
m=$.ae()
if(typeof m!=="number")return H.c(m)
l=new U.ap(o,n,new H.L(s),new H.L(s),"400 "+H.b(14*m)+"px 'Poppins', sans-serif",p)
l.af(p,o,n)
l.k1=!1
q.aL(l)
j.c6(l)}}j.S.e=k.S.e
return j},
gay:function(){var u=this.S,t=u.z
return t!=null?t.gay():u},
X:function(a){var u,t,s,r=this,q="children",p=r.C()
p.i(0,q,[])
p.i(0,"clauses",[])
J.aP(a,p)
u=r.z
if(u!=null)u.X(H.a7(p.h(0,q)))
for(u=r.N,t=u.length,s=0;s<u.length;u.length===t||(0,H.W)(u),++s)u[s].X(H.a7(p.h(0,"clauses")))
u=r.S.z
if(u!=null)u.X(a)},
Y:function(a,b){var u,t,s,r=this
r.ch=a
r.cx=b
u=r.z
if(u!=null)u.Y(a+1,r)
for(u=r.N,t=u.length,s=0;s<u.length;u.length===t||(0,H.W)(u),++s)u[s].Y(a,b)},
ag:function(){var u,t,s,r,q,p,o,n,m,l=this
l.di()
for(u=l.N,t=u.length,s=l,r=0;r<u.length;u.length===t||(0,H.W)(u),++r,s=q){q=u[r]
p=s.z
if(p!=null){o=p.gay()
q.f=l.f
p=o.r
n=o.rx?$.w():o.y
if(typeof p!=="number")return p.k()
if(typeof n!=="number")return H.c(n)
q.r=p+n}else{q.f=l.f
p=s.r
n=s.rx?$.w():s.y
if(typeof p!=="number")return p.k()
if(typeof n!=="number")return H.c(n)
m=$.w()
if(typeof m!=="number")return H.c(m)
q.r=p+n+m}q.ag()}},
c6:function(a){var u,t,s,r,q=this
a.N=q
u=q.N
C.a.H(u,q.S)
C.a.p(u,a)
C.a.p(u,q.S)
for(t=0;s=u.length,t<s-1;t=r){r=t+1
u[t].x1=u[r]}if(0>=s)return H.e(u,0)
q.x1=u[0]},
aS:function(a){var u,t,s,r,q,p,o,n,m,l=this
if(l.rx){l.dh(a)
return}u=$.a2()
a.beginPath()
t=l.f
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.c(u)
a.moveTo(t+u,l.r)
s=l.Q==null&&l.k1
for(r=l;r!=null;){if(r.z==null)q=r.x1!=null||l.ch===0
else q=!1
r.bC(a,s)
r.cv(a,s,q)
r.bB(a,q)
if(r.x1!=null){t=r.f
p=$.bp()
if(typeof t!=="number")return t.k()
if(typeof p!=="number")return H.c(p)
t+=p
o=r.r
n=r.rx
m=n?$.w():r.y
if(typeof o!=="number")return o.k()
if(typeof m!=="number")return H.c(m)
n=n?$.w():r.y
if(typeof n!=="number")return H.c(n)
a.quadraticCurveTo(t,o+m,t,o+n+u)
t=r.z
o=r.f
n=r.x1
if(t!=null){if(typeof o!=="number")return o.k()
a.lineTo(o+p,n.r)
t=r.f
if(typeof t!=="number")return t.k()
a.lineTo(t+p+u,r.x1.r)}else{if(typeof o!=="number")return o.k()
t=n.r
if(typeof t!=="number")return t.R()
a.lineTo(o+p,t-u)
t=r.f
if(typeof t!=="number")return t.k()
p=t+p
t=r.x1.r
a.quadraticCurveTo(p,t,p+u,t)}}s=r.z==null
r=r.x1}t=l.S
p=t.z!=null||l.ch>0
o=l.f
n=t.r
if(p){t=t.rx?$.w():t.y
if(typeof n!=="number")return n.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(o,n+t)}else{if(typeof o!=="number")return o.k()
t=t.rx?$.w():t.y
if(typeof n!=="number")return n.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(o+u,n+t)
t=l.f
n=l.S
o=n.r
p=n.rx
m=p?$.w():n.y
if(typeof o!=="number")return o.k()
if(typeof m!=="number")return H.c(m)
p=p?$.w():n.y
if(typeof p!=="number")return H.c(p)
a.quadraticCurveTo(t,o+m,t,o+p-u)}t=l.Q
p=l.f
o=l.r
if(t!=null){a.lineTo(p,o)
t=l.f
if(typeof t!=="number")return t.k()
a.lineTo(t+u,l.r)}else{if(typeof o!=="number")return o.k()
a.lineTo(p,o+u)
t=l.f
p=l.r
if(typeof t!=="number")return t.k()
a.quadraticCurveTo(t,p,t+u,p)}a.closePath()}}
U.aC.prototype={
b6:function(a){var u,t=this,s=t.e,r=s.length
if(r===1){r=t.a
if(r.c!==t)a.a+="("
a.a+=H.b(t.b)+" "
if(0>=s.length)return H.e(s,0)
s[0].b6(a)
if(r.c!==t)a.a+=")"}else if(r===2){u=t.a
if(u.c!==t)a.a+="("
if(0>=r)return H.e(s,0)
s[0].b6(a)
a.a+=" "+H.b(t.b)+" "
if(1>=s.length)return H.e(s,1)
s[1].b6(a)
if(u.c!==t)a.a+=")"}else{s=t.b
if(s!=null)a.a+=s}},
C:function(){var u,t,s,r=this,q="children",p=P.ie(["name",r.b,"type",r.c]),o=r.e
if(o.length!==0){p.i(0,q,[])
for(u=o.length,t=0;t<o.length;o.length===u||(0,H.W)(o),++t){s=o[t]
J.aP(p.h(0,q),s.C())}}o=r.d
if(o!=null)p.i(0,"format",o)
return p},
aA:function(a){var u,t,s,r,q,p=this,o="children",n=a.h(0,"name")
p.b=n==null?"":J.I(n)
n=a.h(0,"type")
p.c=n==null?"num":J.I(n)
if(a.h(0,"format")!=null)p.d=H.u(a.h(0,"format"))
n=p.e
C.a.sj(n,0)
if(!!J.k(a.h(0,o)).$io)for(u=J.x(H.S(a.h(0,o),"$ip")),t=p.a,s=[U.aC];u.l();){r=u.gq()
q=new U.aC(t,H.u(J.Z(r,"type")),H.C([],s))
C.a.p(n,q)
q.aA(H.d(r,"$iq"))}},
ex:function(a){var u,t,s,r
if(a==null)return this.e.length!==0
u=this.e
t=J.K(a)
if(u.length!==t.gj(a))return!0
for(s=0;s<t.gj(a);++s){r=t.h(a,s)
if(s>=u.length)return H.e(u,s)
if(!J.Y(r,u[s].c))return!0}return!1},
df:function(a){var u,t,s,r,q,p=this,o=p.e,n=o.length===0
if(p.ex(a)){C.a.sj(o,0)
if(a!=null)for(u=J.K(a),t=p.a,s=[U.aC],r=0;r<u.gj(a);++r)if(r===0&&n&&J.Y(u.h(a,r),p.c)){q=new U.aC(t,H.u(u.h(a,r)),H.C([],s))
q.b=p.b
C.a.p(o,q)}else C.a.p(o,new U.aC(t,H.u(u.h(a,r)),H.C([],s)))}},
cL:function(a){var u,t=this,s=document.createElement("div")
C.b.a6(s,H.b(t.b))
s.classList.add("nt-expression-text")
s.classList.add("editable")
u=H.b(t.c)
s.classList.add(u)
u=W.A
W.Q(s,"click",H.f(new U.e3(t,s),{func:1,ret:-1,args:[u]}),!1,u)
t.cS(s,a)
a.appendChild(s)},
cS:function(a,b){var u=W.A,t={func:1,ret:-1,args:[u]}
W.Q(a,"mouseenter",H.f(new U.e4(b),t),!1,u)
W.Q(a,"mouseleave",H.f(new U.e5(b),t),!1,u)},
b_:function(a,b){var u=document.createElement("div")
C.b.a6(u,b?"(":")")
u.classList.add("nt-expression-text")
u.classList.add("parenthesis")
this.cS(u,a)
a.appendChild(u)},
es:function(a){var u,t,s=this
s.b=J.I(U.aO(s.b,0))
u=W.kG("number")
u.className="nt-number-input"
u.value=s.b
u.step="1"
t=W.j
W.Q(u,"change",H.f(new U.e2(s,u),{func:1,ret:-1,args:[t]}),!1,t)
a.appendChild(u)},
geJ:function(){var u=this.b
if(u!=null)return P.jR(u,new U.e6())!=null
return!1},
be:function(a){var u,t,s=this,r=document.createElement("div")
r.className="nt-expression"
if((s.geJ()||s.b==null)&&s.c==="num")s.es(r)
else if(s.b==null){r.classList.add("empty")
C.b.aa(r,"<small>&#9660;</small>")}else{u=s.e
t=u.length
if(t===1){s.b_(r,!0)
s.cL(r)
if(0>=u.length)return H.e(u,0)
u[0].be(r)
s.b_(r,!1)}else if(t===2){s.b_(r,!0)
if(0>=u.length)return H.e(u,0)
u[0].be(r)
s.cL(r)
if(1>=u.length)return H.e(u,1)
u[1].be(r)
s.b_(r,!1)}else C.b.aa(r,"<div class='nt-expression-text "+H.b(s.c)+"'>"+H.b(s.b)+"</div>")}if(s.e.length===0){r.classList.add("editable")
u=W.A
W.Q(r,"click",H.f(new U.e9(s,r),{func:1,ret:-1,args:[u]}),!1,u)}a.appendChild(r)},
d_:function(a){var u,t,s=this,r=W.t,q=document
H.am(r,r,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
r=new W.aa(q.querySelectorAll(".nt-pulldown-menu"),[r])
r.w(r,new U.e7())
u=q.createElement("div")
u.classList.add("nt-pulldown-menu")
q=s.a.a
s.c8(u,q.dx)
if(J.kj(q.db))C.b.aa(u,"<hr>")
s.c8(u,q.db)
C.b.aa(u,"<hr>")
t=W.iM("#")
C.l.a6(t,"Clear")
t.className="clear"
u.appendChild(t)
r=W.A
W.Q(t,"click",H.f(new U.e8(s,u),{func:1,ret:-1,args:[r]}),!1,r)
a.appendChild(u)},
c8:function(a,b){var u,t,s,r,q,p
for(u=J.x(b),t=W.A,s={func:1,ret:-1,args:[t]};u.l();){r=u.gq()
q=J.K(r)
if(J.Y(q.h(r,"type"),this.c)){p=document.createElement("a")
p.href="#"
C.l.a6(p,H.b(q.h(r,"name")))
a.appendChild(p)
W.Q(p,"click",H.f(new U.e1(this,a,r),s),!1,t)}}}}
U.e3.prototype={
$1:function(a){H.d(a,"$iA")
this.a.d_(this.b)
a.stopPropagation()},
$S:1}
U.e4.prototype={
$1:function(a){H.d(a,"$iA")
this.a.classList.add("highlight")},
$S:1}
U.e5.prototype={
$1:function(a){H.d(a,"$iA")
this.a.classList.remove("highlight")},
$S:1}
U.e2.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.value
u.b=s
if(s==="")t.value=u.b="0"},
$S:4}
U.e6.prototype={
$1:function(a){return},
$S:29}
U.e9.prototype={
$1:function(a){H.d(a,"$iA")
this.a.d_(this.b)
a.stopPropagation()},
$S:1}
U.e7.prototype={
$1:function(a){return J.bQ(H.d(a,"$it"))},
$S:16}
U.e8.prototype={
$1:function(a){var u
H.d(a,"$iA")
C.b.V(this.b)
u=this.a
u.b=null
C.a.sj(u.e,0)
u.d=null
u.a.bQ()
a.stopPropagation()
a.preventDefault()},
$S:1}
U.e1.prototype={
$1:function(a){var u,t,s
H.d(a,"$iA")
C.b.V(this.b)
u=this.a
t=this.c
s=J.K(t)
u.df(H.a7(s.h(t,"arguments")))
u.b=H.u(s.h(t,"name"))
u.c=H.u(s.h(t,"type"))
u.d=H.u(s.h(t,"format"))
u.a.bQ()
a.stopPropagation()
a.preventDefault()},
$S:1}
U.dS.prototype={
n:function(a){var u,t=new P.au("")
this.c.b6(t)
u=t.a
return u.charCodeAt(0)==0?u:u},
aA:function(a){var u=J.k(a)
if(!!u.$iq)this.c.aA(a)
else if(a!=null)this.c.b=u.n(a)},
bQ:function(){var u=this,t=u.b
if(t!=null&&u.c!=null){J.kh(t).b1(0)
u.c.be(H.d(u.b,"$ibw"))}}}
U.cr.prototype={
au:function(a,b,c){var u,t,s
for(u="",t=0;t<b;++t)u+="  "
a.a+=u
s="\n"+u
a.a+=H.hV(c,"\n",s)+"\n"},
aM:function(a,b,c,d,e){var u,t=J.K(d),s=H.u(t.h(d,"format")),r=t.h(d,"params"),q=t.h(d,"properties"),p=J.k(r),o=!!p.$io?p.gj(r):0,n=J.k(q),m=!!n.$io?n.gj(q):0
if(typeof s!=="string"){s=H.b(t.h(d,"action"))
for(u=0;u<o;++u)s+=" {"+u+"}"
for(u=0;u<m;++u)s+=" {P"+u+"}"}for(u=0;u<o;++u)s=this.bE(a,s,"{"+u+"}",c,d,p.h(r,u))
for(u=0;u<m;++u)s=this.bE(a,s,"{P"+u+"}",c,d,n.h(q,u))
this.au(b,e,s)},
bE:function(a,b,c,d,e,f){var u=this.dR(f)
if(typeof u!=="string")H.X(H.al(u))
return H.hV(b,c,u)},
dR:function(a){var u="value",t=J.K(a)
if(!!J.k(t.h(a,u)).$iq)return U.bv(t.h(a,u))
else{t=t.h(a,u)
return t==null?"":J.I(t)}}}
U.eS.prototype={
cs:function(a,b,c){var u,t=new P.au("")
for(u=J.x(H.S(b.h(0,"chains"),"$ip"));u.l();){this.a8(c,t,a,u.gq(),0)
t.a+="\n"}u=t.a
return u.charCodeAt(0)==0?u:u},
a8:function(a,b,c,d,e){var u,t,s,r,q,p,o="children"
for(u=J.x(H.S(d,"$ip")),t=e+1;u.l();){s=u.gq()
r=J.K(s)
if(!!J.k(r.h(s,o)).$io)this.a8(a,b,c,r.h(s,o),t)
if(!!J.k(r.h(s,"clauses")).$io)for(r=J.x(H.S(r.h(s,"clauses"),"$ip"));r.l();){q=r.gq()
this.aM(a,b,c,q,e)
p=J.K(q)
if(!!J.k(p.h(q,o)).$io)this.a8(a,b,c,p.h(q,o),t)}}}}
U.eH.prototype={
cs:function(a,b,c){var u,t,s,r,q="chains",p=new P.au("")
if(!J.k(b.h(0,q)).$io||J.af(b.h(0,q))===0)return"".charCodeAt(0)==0?"":""
u=H.a7(b.h(0,q))
t=J.aN(u)
t.a1(u,U.m0())
for(t=t.gu(u);t.l();){s=t.gq()
r=J.K(s)
if(J.iJ(r.gj(s),0)&&J.Y(J.Z(r.h(s,0),"type"),"nlogo:procedure")){this.aM(c,p,a,r.a5(s,0),0)
this.a8(c,p,a,s,1)
r=p.a+="end\n"
p.a=r+"\n"}}t=p.a
return t.charCodeAt(0)==0?t:t},
a8:function(a,b,c,d,e){var u,t,s,r,q,p,o=this,n="children"
for(u=J.x(H.S(d,"$ip")),t=e+1;u.l();){s=u.gq()
o.aM(a,b,c,s,e)
r=J.K(s)
if(!!J.k(r.h(s,n)).$io){o.au(b,e,"[")
o.a8(a,b,c,r.h(s,n),t)
o.au(b,e,"]")}if(!!J.k(r.h(s,"clauses")).$io)for(r=J.x(H.S(r.h(s,"clauses"),"$ip"));r.l();){q=r.gq()
o.aM(a,b,c,q,e)
p=J.K(q)
if(!!J.k(p.h(q,n)).$io){o.au(b,e,"[")
o.a8(a,b,c,p.h(q,n),t)
o.au(b,e,"]")}}}},
bE:function(a,b,c,d,e,f){var u="expressionValue",t=J.K(f),s=t.h(f,u)==null?t.h(f,"value"):t.h(f,u),r=J.K(e),q=H.u(a.$5(d,r.h(e,"id"),r.h(e,"instanceId"),t.h(f,"id"),s))
if(typeof q!=="string")H.X(H.al(q))
return H.hV(b,c,q)}}
U.du.prototype={
eo:function(a,b){var u,t,s=this.b,r=H.a(s,0),q=new H.aw(s,H.f(new U.dv(a),{func:1,ret:P.D,args:[r]}),[r])
if(q.gj(q)===1){u=q.gcU(q).a
throw H.h(P.c_("Cannot add a block with the same ID as an existing block\n  Adding: ("+H.b(a.a)+": "+H.b(a.c)+")\n  Existing: ("+H.b(u.a)+": "+H.b(u.c)+")",null))}r=this.a
t=new U.ak(a,r,b)
a.rx=!0
C.a.p(r.a,t)
C.a.p(s,t)},
eK:function(a){var u,t
if(!a.rx)if(!a.ry){u=a.f
t=a.x
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return u.k()
t=u+t*0.75>=this.a.ch-this.d
u=t}else u=!1
else u=!1
return u},
de:function(a){var u=this.b,t=H.a(u,0),s=new H.aw(u,H.f(new U.dw(a),{func:1,ret:P.D,args:[t]}),[t])
if(s.gj(s)===1)return s.gcU(s).a
return},
aV:function(a){var u,t,s,r,q,p,o=$.bq()
if(typeof o!=="number")return o.m()
o=this.d=o*1.5
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.W)(u),++s,o=p){r=u[s].a
a.save()
a.font=r.fy
q=a.measureText(r.c).width
a.restore()
r=$.a2()
if(typeof r!=="number")return r.m()
if(typeof q!=="number")return q.k()
p=$.hX()
if(typeof p!=="number")return p.m()
p=Math.max(o,q+r*2+p*2)
this.d=p}},
bJ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this
k.aV(a)
a.save()
a.fillStyle="rgba(0,0,0, 0.2)"
u=k.a
t=u.ch
s=k.d
a.fillRect(t-s,0,s,u.cx)
if(b){t=u.ch
s=k.d
a.fillRect(t-s,0,s,u.cx)}u=u.ch
t=k.d
s=$.hX()
if(typeof s!=="number")return H.c(s)
r=u-t+s
s=$.w()
if(typeof s!=="number")return s.an()
q=0+s/2
for(u=k.b,t=u.length,p=0;p<u.length;u.length===t||(0,H.W)(u),++p){o=u[p]
o.b=r
o.c=q
n=o.e
m=o.d
l=o.a
m.aF(l.a)
if(typeof n!=="number")return n.R()
a.save()
m=m.aF(l.a)
if(!(n<0||n-m>0))a.globalAlpha=0.3
l.f=o.b
l.r=o.c
l.aW(a,$.bq())
l.bs(a)
l.bt(a)
l.bu(a)
a.restore()
q+=s*1.5}a.restore()}}
U.dv.prototype={
$1:function(a){return H.d(a,"$iak").a.a==this.a.a},
$S:14}
U.dw.prototype={
$1:function(a){return H.d(a,"$iak").a.a==this.a},
$S:14}
U.ak.prototype={
eI:function(){var u=this.e,t=this.d.aF(this.a.a)
if(typeof u!=="number")return u.R()
return u<0||u-t>0},
b5:function(a){return this.a.b5(a)},
al:function(a){var u,t,s,r,q,p=this
if(p.eI()){u=p.a
t=u.b2(0)
t.a=u.a
s=u.f
if(typeof s!=="number")return s.R()
t.f=s-5
u=u.r
if(typeof u!=="number")return u.R()
t.r=u-5
t.ry=!0
u=p.d
u.ar(t)
if(!!t.$ibt)for(s=t.N,r=s.length,q=0;q<s.length;s.length===r||(0,H.W)(s),++q)u.ar(s[q])
return t.al(a)}return p},
bX:function(a){},
bV:function(a){},
bW:function(a){},
$ibF:1}
U.at.prototype={
gD:function(a){var u=this.c
return u==null?"":J.I(u)},
sD:function(a,b){this.c=b==null?"":J.I(b)},
gam:function(){return H.b(J.I(this.c))+H.b(this.r)},
ao:function(a,b){var u,t,s,r=this
if(H.O(b.t("id"))){u=H.z(b.h(0,"id"))
r.a=u
t=r.b
s=t.dx
if(typeof u!=="number")return u.f0()
if(u>=s)t.dx=u+1}else u=r.a=r.b.dx++
b.i(0,"id",u)
u=b.h(0,"type")
r.e=u==null?"num":J.I(u)
u=b.h(0,"name")
r.f=u==null?"":J.I(u)
u=b.h(0,"unit")
r.r=u==null?"":J.I(u)
u=b.h(0,"default")
r.d=u
r.sD(0,u)},
b3:function(a,b){return U.ig(b,this.C())},
C:function(){var u=this
return P.ie(["id",u.a,"type",u.e,"name",u.f,"unit",u.r,"value",u.gD(u),"default",u.d])},
aV:function(a){var u,t=this,s=$.a2()
if(typeof s!=="number")return s.m()
t.z=s*2
a.save()
a.font=t.b.fy
s=t.z
u=a.measureText(t.gam()).width
if(typeof u!=="number")return H.c(u)
t.z=s+u
a.restore()},
cR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=this
j.x=b
j.y=c
u=j.b
a.font=u.fy
a.textAlign="center"
a.textBaseline="middle"
t=u.f
if(typeof t!=="number")return t.k()
s=t+b
t=u.r
if(typeof t!=="number")return t.k()
r=$.w()
if(typeof r!=="number")return r.an()
q=j.Q
p=q/2
o=t+c+r/2-p
n=j.z
a.beginPath()
a.beginPath()
r=s+p
a.moveTo(r,o)
t=s+n
m=t-p
a.lineTo(m,o)
l=o+p
a.quadraticCurveTo(t,o,t,l)
k=o+q
p=k-p
a.lineTo(t,p)
a.quadraticCurveTo(t,k,m,k)
a.lineTo(r,k)
a.quadraticCurveTo(s,k,s,p)
a.lineTo(s,l)
a.quadraticCurveTo(s,o,r,o)
a.closePath()
a.fillStyle=j.ch?u.dy:u.fr
a.fill()
a.fillStyle=j.ch?u.fr:u.dy
C.q.cT(a,j.gam(),s+n/2,o+q*0.55)},
bJ:function(a,b){return this.cR(a,b,0)},
b5:function(a){var u,t=this,s=a.c,r=t.b,q=r.f,p=t.x
if(typeof q!=="number")return q.k()
p=q+p
if(s>=p){q=a.e
r=r.r
u=t.y
if(typeof r!=="number")return r.k()
u=r+u
if(q>=u)if(s<=p+t.z){s=$.w()
if(typeof s!=="number")return H.c(s)
s=q<=u+s}else s=!1
else s=!1}else s=!1
return s},
bX:function(a){this.ch=!1
this.aZ(H.z(a.d),H.z(a.f))
this.b.id.M()},
al:function(a){this.ch=!0
this.b.id.M()
return this},
bV:function(a){},
bW:function(a){},
aZ:function(a,b){var u,t,s,r,q,p,o,n,m=this,l="The type argument '",k="' is not a subtype of the type variable bound '",j="' of type variable 'T' in 'querySelectorAll'.",i=document,h=i.createElement("div")
h.className="backdrop"
u=m.ca()
C.b.aa(h,'      <div class="nt-param-dialog" style="top: '+b+';">\n        <div class="nt-param-table">\n          <div class="nt-param-row">'+u+'</div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>')
t=H.d(i.querySelector("#"+H.b(m.b.id.r)).parentElement,"$im")
if(t==null)return
t.appendChild(h)
s=H.d(i.querySelector("#nt-param-label-"+H.b(m.a)),"$im")
r=H.d(i.querySelector("#nt-param-"+H.b(m.a)),"$iba")
q=W.t
H.am(q,q,l,k,j)
p=[q]
o=[q]
n=[W.A]
new W.aL(H.y(new W.aa(i.querySelectorAll(".nt-param-confirm"),p),"$ia8",o,"$aa8"),!1,"click",n).ab(new U.eO(m,r,h))
H.am(q,q,l,k,j)
new W.aL(H.y(new W.aa(i.querySelectorAll(".nt-param-cancel"),p),"$ia8",o,"$aa8"),!1,"click",n).ab(new U.eP(h))
h.classList.add("show")
if(r!=null){r.focus()
if(s!=null){i=W.j
q={func:1,ret:-1,args:[i]}
W.Q(r,"change",H.f(new U.eQ(s,r),q),!1,i)
W.Q(r,"input",H.f(new U.eR(s,r),q),!1,i)}}},
ca:function(){return'      <input class="nt-param-input" id="nt-param-'+H.b(this.a)+'" type="text" value="'+this.gam()+'">\n      <span class="nt-param-unit">'+H.b(this.r)+"</span>\n    "},
$ibF:1}
U.eO.prototype={
$1:function(a){var u,t,s,r=this
H.d(a,"$iA")
u=r.b
if(u!=null)r.a.sD(0,u.value)
C.b.V(r.c)
u=r.a
t=u.b
s=t.id
s.M()
s.aD(new U.bs(t.a,t.b,u.a,u.gD(u)))},
$S:1}
U.eP.prototype={
$1:function(a){H.d(a,"$iA")
return C.b.V(this.a)},
$S:5}
U.eQ.prototype={
$1:function(a){J.i_(this.a,this.b.value)},
$S:4}
U.eR.prototype={
$1:function(a){J.i_(this.a,this.b.value)},
$S:4}
U.cK.prototype={
c2:function(a,b){this.cx=U.iB(b.h(0,"random"),!1)
this.cy=U.aO(b.h(0,"step"),this.cy)},
C:function(){var u=this.bj()
u.i(0,"random",this.cx)
u.i(0,"step",this.cy)
return u},
gD:function(a){return U.aO(this.c,0)},
sD:function(a,b){this.c=U.aO(b,0)},
gam:function(){var u=J.kq(this.gD(this),1)
if(C.e.eC(u,".0"))u=C.e.ae(u,0,u.length-2)
return u+H.b(this.r)},
ca:function(){var u=this
return'      <div class="nt-param-name">'+H.b(u.f)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+H.b(u.a)+'" type="number" step="'+H.b(u.cy)+'" value="'+H.b(u.gD(u))+'">\n        <span class="nt-param-unit">'+H.b(u.r)+"</span>\n      </div>\n    "}}
U.eg.prototype={
gD:function(a){return U.iC(this.c,0)},
sD:function(a,b){this.c=U.iC(b,0)}}
U.eW.prototype={
C:function(){var u=this.dq()
u.i(0,"min",this.r1)
u.i(0,"max",this.r2)
return u},
aZ:function(a,b){var u,t,s,r,q,p,o,n=this,m=document,l=m.createElement("div")
l.className="backdrop"
u=m.createElement("div")
u.className="nt-param-dialog"
t=u.style
s=""+b+"px"
t.top=s
r=m.createElement("div")
r.className="nt-param-table"
C.b.aa(r,'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.b(n.f)+':\n            <label id="nt-param-label-'+H.b(n.a)+'" for="nt-param-'+H.b(n.a)+'">'+H.b(U.aO(n.c,0))+'</label>\n            <span class="nt-param-unit">'+H.b(n.r)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+H.b(n.a)+'" type="range" value="'+H.b(U.aO(n.c,0))+'" min="'+H.b(n.r1)+'" max="'+H.b(n.r2)+'" step="'+H.b(n.cy)+'">\n          </div>\n        </div>\n      ')
u.appendChild(r)
t=W.A
s={func:1,ret:-1,args:[t]}
W.Q(u,"click",H.f(new U.eX(),s),!1,t)
l.appendChild(u)
W.Q(l,"click",H.f(new U.eY(l),s),!1,t)
q=H.d(m.querySelector("#"+H.b(n.b.id.r)).parentElement,"$im")
if(q!=null)q.appendChild(l)
p=H.d(m.querySelector("#nt-param-label-"+H.b(n.a)),"$im")
o=H.d(m.querySelector("#nt-param-"+H.b(n.a)),"$iba")
if(o!=null&&p!=null){m=W.j
t={func:1,ret:-1,args:[m]}
W.Q(o,"change",H.f(new U.eZ(n,o,l),t),!1,m)
W.Q(o,"input",H.f(new U.f_(p,o),t),!1,m)}l.classList.add("show")}}
U.eX.prototype={
$1:function(a){H.d(a,"$iA").stopPropagation()},
$S:1}
U.eY.prototype={
$1:function(a){H.d(a,"$iA")
C.b.V(this.a)},
$S:1}
U.eZ.prototype={
$1:function(a){var u,t,s=this.a
s.c=U.aO(this.b.value,0)
C.b.V(this.c)
u=s.b
t=u.id
t.M()
t.aD(new U.bs(u.a,u.b,s.a,U.aO(s.c,0)))
a.stopPropagation()},
$S:4}
U.f_.prototype={
$1:function(a){J.i_(this.a,this.b.value)},
$S:4}
U.f2.prototype={
gam:function(){return H.b(J.I(this.cy))+H.b(this.r)+" \u25be"},
b3:function(a,b){return U.j6(b,this.C())},
C:function(){var u=this.bj()
u.i(0,"values",this.cx)
return u},
cb:function(a){var u="display",t=H.O(a.t(u))&&!J.Y(J.Z(a,u),""),s=J.K(a)
return t?s.h(a,u):s.h(a,"actual")},
aZ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="display",g=document,f=g.createElement("div")
f.className="backdrop"
u=g.createElement("div")
u.className="nt-param-dialog small"
t=u.style
s=""+b+"px"
t.top=s
r=g.createElement("div")
r.className="nt-param-table"
for(t=J.x(i.cx),s=W.A,q={func:1,ret:-1,args:[s]};t.l();){p=t.gq()
o=g.createElement("div")
o.className="nt-param-row"
n=H.O(p.t(h))&&!J.Y(J.Z(p,h),"")
m=J.K(p)
l=n?m.h(p,h):m.h(p,"actual")
k=g.createElement("div")
k.className="nt-select-option"
C.b.a6(k,H.u(l))
n=J.Z(p,"actual")
m=i.c
if(J.Y(n,m==null?"":J.I(m)))k.classList.add("selected")
W.Q(k,"click",H.f(new U.f3(i,p,f),q),!1,s)
o.appendChild(k)
r.appendChild(o)}u.appendChild(r)
f.appendChild(u)
W.Q(f,"click",H.f(new U.f4(f),q),!1,s)
j=H.d(g.querySelector("#"+H.b(i.b.id.r)).parentElement,"$im")
if(j!=null)j.appendChild(f)
f.classList.add("show")}}
U.f3.prototype={
$1:function(a){var u,t,s,r,q
H.d(a,"$iA")
u=this.a
t=this.b
u.cy=u.cb(t)
t=J.Z(t,"actual")
u.c=t==null?"":J.I(t)
C.b.V(this.c)
t=u.b
s=t.id
s.M()
r=t.a
t=t.b
q=u.a
u=u.c
s.aD(new U.bs(r,t,q,u==null?"":J.I(u)))
a.stopPropagation()},
$S:1}
U.f4.prototype={
$1:function(a){H.d(a,"$iA")
C.b.V(this.a)},
$S:1}
U.dT.prototype={
gam:function(){var u=this.cx
return u!=null?u.n(0):""},
gD:function(a){return this.c},
sD:function(a,b){var u
this.c=b
u=this.cx
if(u!=null)u.aA(b)},
C:function(){var u=this.bj()
if(!!J.k(u.h(0,"value")).$iq)u.i(0,"expressionValue",U.bv(u.h(0,"value")))
return u},
b3:function(a,b){return U.i6(b,this.C())},
aZ:function(a,b){var u,t,s,r,q,p,o,n=this,m=".nt-param-confirm",l="The type argument '",k="' is not a subtype of the type variable bound '",j="' of type variable 'T' in 'querySelectorAll'.",i="click",h=document,g=h.createElement("div")
g.className="backdrop"
C.b.aa(g,'      <div class="nt-param-dialog" style="top: '+b+';">\n        <div class="nt-param-table">\n          <div class="nt-param-row">\n            <div class="nt-param-label">'+H.b(n.f)+':</div>\n          </div>\n          <div class="nt-param-row">\n            <div id="nt-expression-'+H.b(n.a)+'" class="nt-expression-root"></div>\n          </div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>')
u=H.d(h.querySelector("#"+H.b(n.b.id.r)).parentElement,"$im")
if(u==null)return
u.appendChild(g)
t=W.t
H.am(t,t,l,k,j)
s=[t]
r=[t]
q=[W.A]
new W.aL(H.y(new W.aa(h.querySelectorAll(m),s),"$ia8",r,"$aa8"),!1,i,q).ab(new U.dX(n,g))
H.am(t,t,l,k,j)
new W.aL(H.y(new W.aa(h.querySelectorAll(m),s),"$ia8",r,"$aa8"),!1,"mousedown",q).ab(new U.dY())
H.am(t,t,l,k,j)
new W.aL(H.y(new W.aa(h.querySelectorAll(m),s),"$ia8",r,"$aa8"),!1,"mouseup",q).ab(new U.dZ())
H.am(t,t,l,k,j)
new W.aL(H.y(new W.aa(h.querySelectorAll(".nt-param-cancel"),s),"$ia8",r,"$aa8"),!1,i,q).ab(new U.e_(g))
g.classList.add("show")
p=n.cx
o="#nt-expression-"+H.b(n.a)
p.toString
p.b=h.querySelector(o)
p.bQ()
H.am(t,t,l,k,j)
new W.aL(H.y(new W.aa(h.querySelectorAll(".nt-param-dialog"),s),"$ia8",r,"$aa8"),!1,i,q).ab(new U.e0())}}
U.dX.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iA")
u=W.t
t=document
H.am(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
if(t.querySelectorAll(".nt-expression.empty").length>0)return!1
u=this.a
u.c=u.cx.c.C()
C.b.V(this.b)
t=u.b
s=t.id
s.M()
r=U.bv(u.c)
s.aD(new U.bs(t.a,t.b,u.a,r))},
$S:33}
U.dY.prototype={
$1:function(a){var u,t
H.d(a,"$iA")
u=W.t
t=document
H.am(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.aa(t.querySelectorAll(".nt-expression.empty"),[u])
u.w(u,new U.dW())},
$S:1}
U.dW.prototype={
$1:function(a){return J.iL(H.d(a,"$it")).p(0,"warn")},
$S:18}
U.dZ.prototype={
$1:function(a){var u,t
H.d(a,"$iA")
u=W.t
t=document
H.am(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.aa(t.querySelectorAll(".nt-expression.empty"),[u])
u.w(u,new U.dV())},
$S:1}
U.dV.prototype={
$1:function(a){return J.iL(H.d(a,"$it")).H(0,"warn")},
$S:18}
U.e_.prototype={
$1:function(a){H.d(a,"$iA")
C.b.V(this.a)},
$S:1}
U.e0.prototype={
$1:function(a){var u,t
H.d(a,"$iA")
u=W.t
t=document
H.am(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.aa(t.querySelectorAll(".nt-pulldown-menu"),[u])
u.w(u,new U.dU())},
$S:1}
U.dU.prototype={
$1:function(a){return J.bQ(H.d(a,"$it"))},
$S:16}
U.eV.prototype={}
U.dt.prototype={
d8:function(){return P.iX(P.ic(["type","block-changed","blockId",this.b,"instanceId",this.c],P.i,P.v))}}
U.bs.prototype={
d8:function(){var u=this
return P.iX(P.ic(["type","attribute-changed","blockId",u.b,"instanceId",u.c,"attributeId",u.d,"value",u.e],P.i,null))}}
U.bW.prototype={
dw:function(a,b){var u,t,s,r,q,p,o,n,m=this,l="variables",k="expressions",j=m.Q
if(!J.Y(j.h(0,"version"),2))throw H.h("The supported NetTango version is 2, but the given definition version was "+H.b(j.h(0,"version"))+".")
u=m.r
t="#"+H.b(u)
s=H.d(document.querySelector(t),"$ib4")
if(s==null)throw H.h("No canvas element with ID "+H.b(u)+" found.")
m.dy=H.d(C.p.bZ(s,"2d"),"$ib5")
u=s.style
t=H.b(s.width)+"px"
u.width=t
u=s.style
t=H.b(s.height)+"px"
u.height=t
u=s.width
t=$.ae()
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.c(t)
m.ch=C.c.b8(u*t)
u=s.height
if(typeof u!=="number")return u.m()
u=C.c.b8(u*t)
m.cx=u
s.width=m.ch
s.height=u
u=m.c
r=[P.a6]
q=new U.bC(H.C([1,0,0,0,1,0,0,0,1],r))
q.seZ(H.C([1/t,0,0,0,1/t,0,0,0,1],r))
u.eO(q)
m.d=u.eH()
u=m.fr
u.eP(s)
C.a.p(u.c,m)
u=H.C([],[U.ak])
q=$.bq()
r=$.hX()
if(typeof r!=="number")return r.m()
if(typeof q!=="number")return q.k()
m.cy=new U.du(m,u,q+r*2)
if(!!J.k(j.h(0,"blocks")).$io)for(u=J.x(H.S(j.h(0,"blocks"),"$ip"));u.l();){p=H.d(u.gq(),"$iq")
o=U.iP(m,p)
n=U.iC(p.h(0,"limit"),-1)
m.cy.eo(o,n)}if(!!J.k(j.h(0,l)).$io)m.db=H.a7(j.h(0,l))
if(!!J.k(j.h(0,k)).$io)m.dx=H.a7(j.h(0,k))
if(!!J.k(j.h(0,"program")).$iq)m.ec(H.d(j.h(0,"program"),"$iq"))
m.M()
m.d7()},
eW:function(){var u=this
C.a.sj(u.a,0)
C.a.sj(u.x,0)
C.a.H(u.fr.c,u)},
d7:function(){if(this.eq(0))this.M()
C.Q.ger(window).d5(new U.dB(this),-1)},
aD:function(a){var u
this.M()
try{$.iI().h(0,"NetTango").b0("_relayCallback",[this.r,a.d8()])}catch(u){H.P(u)
P.iA("Unable to relay program changed event to Javascript")}},
bL:function(){var u,t,s,r,q,p,o,n=P.ie(["chains",[]])
for(u=this.x,t=u.length,s=0;s<u.length;u.length===t||(0,H.W)(u),++s){r=u[s]
if(r.gcW()){q=n.h(0,"chains")
p=[]
r.X(p)
J.aP(q,p)}}for(u=this.cy.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.W)(u),++s){q=u[s].a
if(q.go)if(this.aF(q.a)===0){o=n.h(0,"chains")
p=[]
q.X(p)
J.aP(o,p)}}return n},
ar:function(a){var u,t
C.a.p(this.x,a)
u=this.a
C.a.p(u,a)
for(t=a.cy,t=t.gW(t),t=new H.a4(J.x(t.a),t.b,[H.a(t,0),H.a(t,1)]);t.l();)C.a.p(u,t.a)
for(t=a.db,t=t.gW(t),t=new H.a4(J.x(t.a),t.b,[H.a(t,0),H.a(t,1)]);t.l();)C.a.p(u,t.a)},
e7:function(a){var u,t
C.a.H(this.x,a)
u=this.a
C.a.H(u,a)
for(t=a.cy,t=t.gW(t),t=new H.a4(J.x(t.a),t.b,[H.a(t,0),H.a(t,1)]);t.l();)C.a.H(u,t.a)
for(t=a.db,t=t.gW(t),t=new H.a4(J.x(t.a),t.b,[H.a(t,0),H.a(t,1)]);t.l();)C.a.H(u,t.a)
this.M()},
aF:function(a){var u=this.x,t=H.a(u,0)
t=new H.aw(u,H.f(new U.dA(a),{func:1,ret:P.D,args:[t]}),[t])
return t.gj(t)},
cE:function(a){var u,t,s=this.cp(a)
if(s!=null){u=s.z
s.z=a
a.Q=s
if(u!=null){t=a.gay()
u.Q=t
t.z=u}return!0}s=this.co(a)
if(s!=null){s.Q=a
a.z=s
return!0}return!1},
ek:function(a){var u,t
if(this.cy.eK(a)){for(u=this.x,t=this.a;a!=null;){C.a.H(u,a)
C.a.H(t,a)
a=a.gbc()}return!0}return!1},
cp:function(a){var u,t,s,r,q,p,o,n,m
if(a.Q==null&&a.k1)for(u=this.x,t=u.length,s=0;s<t;++s){r=u[s]
if(r!==a){q=a.f
p=r.f
o=r.x
if(typeof p!=="number")return p.k()
if(typeof o!=="number")return H.c(o)
if(typeof q!=="number")return q.a0()
if(q<p+o){o=a.x
if(typeof o!=="number")return H.c(o)
p=q+o>p
q=p}else q=!1
if(q){n=r.r
q=r.rx?$.w():r.y
if(typeof n!=="number")return n.k()
if(typeof q!=="number")return H.c(q)
m=n+q
q=$.a2()
if(typeof q!=="number")return H.c(q)
p=r.z==null
if(!p){o=a.r
if(typeof o!=="number")return o.a0()
o=o<m&&o>n}else o=!1
if(o)return r
else{if(p){p=a.r
if(typeof p!=="number")return p.F()
q=p>n&&p<m+q}else q=!1
if(q)return r}}}}return},
co:function(a){var u,t,s,r,q,p,o
if(a.z==null)for(u=this.x,t=u.length,s=0;s<t;++s){r=u[s]
if(r!==a&&r.Q==null&&r.k1){q=a.f
p=r.f
o=r.x
if(typeof p!=="number")return p.k()
if(typeof o!=="number")return H.c(o)
if(typeof q!=="number")return q.a0()
if(q<p+o){o=a.x
if(typeof o!=="number")return H.c(o)
p=q+o>p
q=p}else q=!1
if(q){q=r.r
p=a.r
o=a.rx?$.w():a.y
if(typeof p!=="number")return p.k()
if(typeof o!=="number")return H.c(o)
if(typeof q!=="number")return q.R()
if(Math.abs(q-(p+o))<20)return r}}}return},
eq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.cy.toString
for(u=g.x,t=u.length,s=!1,r=0,q=0;q<t;++q){p=u[q]
o=p.k2
if(o){n=p.f
m=p.k3
l=p.r1
if(typeof m!=="number")return m.R()
if(typeof l!=="number")return H.c(l)
if(typeof n!=="number")return n.k()
p.f=n+(m-l)
l=p.r
n=p.k4
k=p.r2
if(typeof n!=="number")return n.R()
if(typeof k!=="number")return H.c(k)
if(typeof l!=="number")return l.k()
p.r=l+(n-k)
p.r1=m
p.r2=n}if(o)s=!0
o=p.r
n=p.rx?$.w():p.y
if(typeof o!=="number")return o.k()
if(typeof n!=="number")return H.c(n)
r=Math.max(o+n,r)}if(r>g.cx)if(!s){u=g.ch
t=$.ae()
if(typeof t!=="number")return H.c(t)
o=$.w()
if(typeof o!=="number")return o.m()
j=C.r.d2(u/t)
i=C.r.d2((r+o*3)/t)
o="#"+H.b(g.r)
h=H.d(document.querySelector(o),"$ib4")
if(h!=null){u=h.style
o=""+j+"px"
u.width=o
u=h.style
o=""+i+"px"
u.height=o
g.ch=C.c.b8(j*t)
u=C.c.b8(i*t)
g.cx=u
h.width=g.ch
h.height=u
g.dy=H.d(C.p.bZ(h,"2d"),"$ib5")
g.M()}}return s},
M:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
h.dy.save()
h.dy.clearRect(0,0,h.ch,h.cx)
u=H.C([],[U.ao])
for(t=h.x,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.W)(t),++q){p=t[q]
if(p.Q==null&&!(p instanceof U.ap)){p.Y(0,null)
p.ag()
p.aW(h.dy,$.bq())}if(p.k2)C.a.p(u,p)
o=h.cy
o.toString
if(!p.rx)if(!p.ry){n=p.f
m=p.x
if(typeof m!=="number")return m.m()
if(typeof n!=="number")return n.k()
o=n+m*0.75>=o.a.ch-o.d}else o=!1
else o=!1
if(o)r=!0}h.cy.bJ(h.dy,r)
for(s=t.length,q=0;q<t.length;t.length===s||(0,H.W)(t),++q){p=t[q]
if(p.k2){l=h.cp(p)
if(l!=null){o=h.dy
o.save()
o.lineWidth=5
o.strokeStyle="cyan"
o.beginPath()
n=l.f
m=l.x
if(typeof n!=="number")return n.k()
if(typeof m!=="number")return H.c(m)
k=$.a2()
if(typeof k!=="number")return H.c(k)
j=l.r
i=l.rx?$.w():l.y
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.c(i)
o.moveTo(n+m-k,j+i)
l.bB(o,l.z==null&&l.ch===0)
o.stroke()
o.restore()}else{l=h.co(p)
if(l!=null){o=h.dy
o.save()
o.lineWidth=5
o.strokeStyle="cyan"
o.beginPath()
n=l.f
m=$.a2()
if(typeof n!=="number")return n.k()
if(typeof m!=="number")return H.c(m)
k=$.bp()
j=l.gaB()
if(typeof k!=="number")return k.m()
o.moveTo(n+m+k*j,l.r)
l.bC(o,l.Q==null&&l.k1)
o.stroke()
o.restore()}}}p.bs(h.dy)
p.bt(h.dy)
p.dN(h.dy)
p.dO(h.dy)
p.bu(h.dy)}h.dy.restore()},
ec:function(a){var u,t,s,r
if(!!J.k(a.h(0,"chains")).$io)for(u=J.x(H.S(a.h(0,"chains"),"$ip"));u.l();){t=u.gq()
s=J.k(t)
if(!!s.$io)for(s=s.gu(t);s.l();){r=s.gq()
if(!!J.k(r).$iq)this.bF(r)}}},
bF:function(a){var u,t,s,r,q,p,o,n,m=this,l="children",k=m.cy.de(H.z(a.h(0,"id")))
if(k==null){P.iA("No prototype block found for id: "+H.b(a.h(0,"id")))
u=m.cy.b
t=P.H
s=H.a(u,0)
P.iA(new H.aH(u,H.f(new U.dz(),{func:1,ret:t,args:[s]}),[s,t]))
return}r=k.b2(0)
u=a.h(0,"x")
if(typeof u==="number"){u=a.h(0,"y")
u=typeof u==="number"}else u=!1
if(u){u=a.h(0,"x")
t=$.iD()
r.f=H.dn(J.iK(u,t))
r.r=H.dn(J.iK(a.h(0,"y"),t))}m.ar(r)
if(!!r.$ibt)for(u=r.N,t=u.length,q=0;q<u.length;u.length===t||(0,H.W)(u),++q)m.ar(u[q])
m.cE(r)
for(u=m.x,t=u.length,q=0;q<u.length;u.length===t||(0,H.W)(u),++q){p=u[q]
if(p.Q==null&&!(p instanceof U.ap)){p.Y(0,null)
p.ag()
p.aW(m.dy,$.bq())}}m.eb(r,H.a7(a.h(0,"params")),H.a7(a.h(0,"properties")))
if(!!J.k(a.h(0,l)).$io)for(u=J.x(H.S(a.h(0,l),"$ip"));u.l();){o=u.gq()
if(!!J.k(o).$iq)m.bF(o)}if(!!J.k(a.h(0,"clauses")).$io)for(u=J.x(H.S(a.h(0,"clauses"),"$ip"));u.l();){n=u.gq()
t=J.k(n)
if(!!t.$iq&&!!J.k(n.h(0,l)).$io)for(t=J.x(H.S(t.h(n,l),"$ip"));t.l();)m.bF(H.d(t.gq(),"$iq"))}},
eb:function(a,b,c){var u,t,s,r,q,p,o,n="id",m="value",l=J.k(b)
if(!!l.$io)for(l=l.gu(b),u=a.cy,t=[P.i];l.l();){s=l.gq()
r=J.k(s)
if(!!r.$iq&&H.O(s.t(n))&&H.O(s.t(m))&&u.t(s.h(0,n))){q=u.h(0,r.h(s,n))
if(!!J.k(r.h(s,m)).$iq&&!C.a.A(H.C(["bool","num"],t),q.e))q.sD(0,q.d)
else q.sD(0,r.h(s,m))}}l=J.k(c)
if(!!l.$io)for(l=l.gu(c),u=a.db,t=[P.i];l.l();){p=l.gq()
r=J.k(p)
if(!!r.$iq&&H.O(p.t(n))&&H.O(p.t(m))&&u.t(p.h(0,n))){o=u.h(0,r.h(p,n))
if(!!J.k(r.h(p,m)).$iq&&!C.a.A(H.C(["bool","num"],t),o.e))o.sD(0,o.d)
else o.sD(0,r.h(p,m))}}}}
U.dB.prototype={
$1:function(a){H.dn(a)
return this.a.d7()},
$S:44}
U.dA.prototype={
$1:function(a){return H.d(a,"$iao").a==this.a},
$S:36}
U.dz.prototype={
$1:function(a){return H.d(a,"$iak").a.a},
$S:37}
U.ej.prototype={
$5:function(a,b,c,d,e){var u,t,s,r=this.a
if(r==null)return J.I(e)
else{u=[a,b,c,d,e]
r=r.a
t=P.dl(null)
s=H.a(u,0)
s=P.aW(new H.aH(u,H.f(P.jO(),{func:1,ret:null,args:[s]}),[s,null]),!0,null)
return H.u(P.hG(r.apply(t,s)))}}}
U.bC.prototype={
eH:function(){var u,t,s,r,q,p,o,n,m,l,k,j=H.C([1,0,0,0,1,0,0,0,1],[P.a6]),i=new U.bC(j),h=this.a,g=h.length
if(0>=g)return H.e(h,0)
u=h[0]
if(4>=g)return H.e(h,4)
t=h[4]
if(8>=g)return H.e(h,8)
g=h[8]
if(typeof t!=="number")return t.m()
if(typeof g!=="number")return H.c(g)
s=h[7]
r=h[5]
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.c(r)
q=t*g-s*r
if(typeof u!=="number")return u.m()
p=h[3]
o=h[1]
if(typeof o!=="number")return o.m()
n=h[2]
if(typeof n!=="number")return H.c(n)
if(typeof p!=="number")return p.m()
m=h[6]
if(typeof m!=="number")return m.m()
l=u*q-p*(o*g-s*n)+m*(o*r-t*n)
if(l===0)return i
k=1/l
C.a.i(j,0,k*q)
g=h.length
if(6>=g)return H.e(h,6)
u=h[6]
t=h[5]
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.c(t)
s=h[3]
if(8>=g)return H.e(h,8)
g=h[8]
if(typeof s!=="number")return s.m()
if(typeof g!=="number")return H.c(g)
C.a.i(j,3,k*(u*t-s*g))
g=h.length
if(3>=g)return H.e(h,3)
s=h[3]
if(7>=g)return H.e(h,7)
g=h[7]
if(typeof s!=="number")return s.m()
if(typeof g!=="number")return H.c(g)
t=h[6]
u=h[4]
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return H.c(u)
C.a.i(j,6,k*(s*g-t*u))
u=h.length
if(7>=u)return H.e(h,7)
t=h[7]
g=h[2]
if(typeof t!=="number")return t.m()
if(typeof g!=="number")return H.c(g)
s=h[1]
if(8>=u)return H.e(h,8)
u=h[8]
if(typeof s!=="number")return s.m()
if(typeof u!=="number")return H.c(u)
C.a.i(j,1,k*(t*g-s*u))
u=h.length
if(0>=u)return H.e(h,0)
s=h[0]
if(8>=u)return H.e(h,8)
u=h[8]
if(typeof s!=="number")return s.m()
if(typeof u!=="number")return H.c(u)
g=h[6]
t=h[2]
if(typeof g!=="number")return g.m()
if(typeof t!=="number")return H.c(t)
C.a.i(j,4,k*(s*u-g*t))
t=h.length
if(6>=t)return H.e(h,6)
g=h[6]
u=h[1]
if(typeof g!=="number")return g.m()
if(typeof u!=="number")return H.c(u)
s=h[0]
if(7>=t)return H.e(h,7)
t=h[7]
if(typeof s!=="number")return s.m()
if(typeof t!=="number")return H.c(t)
C.a.i(j,7,k*(g*u-s*t))
t=h.length
if(1>=t)return H.e(h,1)
s=h[1]
if(5>=t)return H.e(h,5)
t=h[5]
if(typeof s!=="number")return s.m()
if(typeof t!=="number")return H.c(t)
u=h[4]
g=h[2]
if(typeof u!=="number")return u.m()
if(typeof g!=="number")return H.c(g)
C.a.i(j,2,k*(s*t-u*g))
g=h.length
if(3>=g)return H.e(h,3)
u=h[3]
t=h[2]
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.c(t)
s=h[0]
if(5>=g)return H.e(h,5)
g=h[5]
if(typeof s!=="number")return s.m()
if(typeof g!=="number")return H.c(g)
C.a.i(j,5,k*(u*t-s*g))
g=h.length
if(0>=g)return H.e(h,0)
s=h[0]
if(4>=g)return H.e(h,4)
g=h[4]
if(typeof s!=="number")return s.m()
if(typeof g!=="number")return H.c(g)
t=h[3]
u=h[1]
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return H.c(u)
C.a.i(j,8,k*(s*g-t*u))
return i},
eO:function(a){var u,t,s,r,q,p,o,n=this,m=H.C([1,0,0,0,1,0,0,0,1],[P.a6]),l=n.a,k=l.length
if(0>=k)return H.e(l,0)
u=l[0]
t=a.a
s=t.length
if(0>=s)return H.e(t,0)
r=t[0]
if(typeof u!=="number")return u.m()
if(typeof r!=="number")return H.c(r)
if(1>=k)return H.e(l,1)
q=l[1]
if(3>=s)return H.e(t,3)
p=t[3]
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.c(p)
if(2>=k)return H.e(l,2)
l=l[2]
if(6>=s)return H.e(t,6)
t=t[6]
if(typeof l!=="number")return l.m()
if(typeof t!=="number")return H.c(t)
C.a.i(m,0,u*r+q*p+l*t)
t=n.a
l=t.length
if(0>=l)return H.e(t,0)
p=t[0]
q=a.a
r=q.length
if(1>=r)return H.e(q,1)
u=q[1]
if(typeof p!=="number")return p.m()
if(typeof u!=="number")return H.c(u)
if(1>=l)return H.e(t,1)
s=t[1]
if(4>=r)return H.e(q,4)
k=q[4]
if(typeof s!=="number")return s.m()
if(typeof k!=="number")return H.c(k)
if(2>=l)return H.e(t,2)
t=t[2]
if(7>=r)return H.e(q,7)
q=q[7]
if(typeof t!=="number")return t.m()
if(typeof q!=="number")return H.c(q)
C.a.i(m,1,p*u+s*k+t*q)
q=n.a
t=q.length
if(0>=t)return H.e(q,0)
k=q[0]
s=a.a
u=s.length
if(2>=u)return H.e(s,2)
p=s[2]
if(typeof k!=="number")return k.m()
if(typeof p!=="number")return H.c(p)
if(1>=t)return H.e(q,1)
r=q[1]
if(5>=u)return H.e(s,5)
l=s[5]
if(typeof r!=="number")return r.m()
if(typeof l!=="number")return H.c(l)
if(2>=t)return H.e(q,2)
q=q[2]
if(8>=u)return H.e(s,8)
s=s[8]
if(typeof q!=="number")return q.m()
if(typeof s!=="number")return H.c(s)
C.a.i(m,2,k*p+r*l+q*s)
s=n.a
q=s.length
if(3>=q)return H.e(s,3)
l=s[3]
r=a.a
p=r.length
if(0>=p)return H.e(r,0)
k=r[0]
if(typeof l!=="number")return l.m()
if(typeof k!=="number")return H.c(k)
if(4>=q)return H.e(s,4)
u=s[4]
if(3>=p)return H.e(r,3)
t=r[3]
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.c(t)
if(5>=q)return H.e(s,5)
s=s[5]
if(6>=p)return H.e(r,6)
r=r[6]
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.c(r)
C.a.i(m,3,l*k+u*t+s*r)
r=n.a
s=r.length
if(3>=s)return H.e(r,3)
t=r[3]
u=a.a
k=u.length
if(1>=k)return H.e(u,1)
l=u[1]
if(typeof t!=="number")return t.m()
if(typeof l!=="number")return H.c(l)
if(4>=s)return H.e(r,4)
p=r[4]
if(4>=k)return H.e(u,4)
q=u[4]
if(typeof p!=="number")return p.m()
if(typeof q!=="number")return H.c(q)
if(5>=s)return H.e(r,5)
r=r[5]
if(7>=k)return H.e(u,7)
u=u[7]
if(typeof r!=="number")return r.m()
if(typeof u!=="number")return H.c(u)
C.a.i(m,4,t*l+p*q+r*u)
u=n.a
r=u.length
if(3>=r)return H.e(u,3)
q=u[3]
p=a.a
l=p.length
if(2>=l)return H.e(p,2)
t=p[2]
if(typeof q!=="number")return q.m()
if(typeof t!=="number")return H.c(t)
if(4>=r)return H.e(u,4)
k=u[4]
if(5>=l)return H.e(p,5)
s=p[5]
if(typeof k!=="number")return k.m()
if(typeof s!=="number")return H.c(s)
if(5>=r)return H.e(u,5)
u=u[5]
if(8>=l)return H.e(p,8)
p=p[8]
if(typeof u!=="number")return u.m()
if(typeof p!=="number")return H.c(p)
C.a.i(m,5,q*t+k*s+u*p)
p=n.a
u=p.length
if(6>=u)return H.e(p,6)
s=p[6]
k=a.a
t=k.length
if(0>=t)return H.e(k,0)
q=k[0]
if(typeof s!=="number")return s.m()
if(typeof q!=="number")return H.c(q)
if(7>=u)return H.e(p,7)
l=p[7]
if(3>=t)return H.e(k,3)
r=k[3]
if(typeof l!=="number")return l.m()
if(typeof r!=="number")return H.c(r)
if(8>=u)return H.e(p,8)
p=p[8]
if(6>=t)return H.e(k,6)
k=k[6]
if(typeof p!=="number")return p.m()
if(typeof k!=="number")return H.c(k)
C.a.i(m,6,s*q+l*r+p*k)
k=n.a
p=k.length
if(6>=p)return H.e(k,6)
r=k[6]
l=a.a
q=l.length
if(1>=q)return H.e(l,1)
s=l[1]
if(typeof r!=="number")return r.m()
if(typeof s!=="number")return H.c(s)
if(7>=p)return H.e(k,7)
t=k[7]
if(4>=q)return H.e(l,4)
u=l[4]
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return H.c(u)
if(8>=p)return H.e(k,8)
k=k[8]
if(7>=q)return H.e(l,7)
l=l[7]
if(typeof k!=="number")return k.m()
if(typeof l!=="number")return H.c(l)
C.a.i(m,7,r*s+t*u+k*l)
l=n.a
k=l.length
if(6>=k)return H.e(l,6)
u=l[6]
t=a.a
s=t.length
if(2>=s)return H.e(t,2)
r=t[2]
if(typeof u!=="number")return u.m()
if(typeof r!=="number")return H.c(r)
if(7>=k)return H.e(l,7)
q=l[7]
if(5>=s)return H.e(t,5)
p=t[5]
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return H.c(p)
if(8>=k)return H.e(l,8)
l=l[8]
if(8>=s)return H.e(t,8)
t=t[8]
if(typeof l!=="number")return l.m()
if(typeof t!=="number")return H.c(t)
C.a.i(m,8,u*r+q*p+l*t)
for(o=0;o<9;++o){l=n.a
if(o>=m.length)return H.e(m,o)
C.a.i(l,o,m[o])}},
aE:function(a){var u,t,s,r,q,p,o=a.c,n=this.a,m=n.length
if(0>=m)return H.e(n,0)
u=n[0]
if(typeof u!=="number")return H.c(u)
t=a.e
if(1>=m)return H.e(n,1)
s=n[1]
if(typeof s!=="number")return H.c(s)
if(2>=m)return H.e(n,2)
r=n[2]
if(typeof r!=="number")return H.c(r)
if(3>=m)return H.e(n,3)
q=n[3]
if(typeof q!=="number")return H.c(q)
if(4>=m)return H.e(n,4)
p=n[4]
if(typeof p!=="number")return H.c(p)
if(5>=m)return H.e(n,5)
n=n[5]
if(typeof n!=="number")return H.c(n)
a.c=o*u+t*s+r
a.e=o*q+t*p+n},
seZ:function(a){this.a=H.y(a,"$io",[P.a6],"$ao")}}
U.fh.prototype={
b7:function(a){var u,t,s
for(u=this.c,t=0;t<u.length;++t){s=u[t].b7(a)
if(s!=null){if(t>=u.length)return H.e(u,t)
u[t].e=new P.aB(Date.now(),!1)
if(t>=u.length)return H.e(u,t)
return new U.cT(u[t],s)}else if(t>=u.length)return H.e(u,t)}return},
eP:function(a){var u=this,t=W.A,s={func:1,ret:-1,args:[t]}
W.Q(a,"mousedown",H.f(new U.fi(u),s),!1,t)
W.Q(a,"mouseup",H.f(new U.fj(u),s),!1,t)
W.Q(a,"mousemove",H.f(new U.fk(u),s),!1,t)
t=document
s=W.aV
W.Q(t,"keydown",H.f(new U.fl(u),{func:1,ret:-1,args:[s]}),!1,s)
s=W.aY
W.Q(t,"touchmove",H.f(new U.fm(),{func:1,ret:-1,args:[s]}),!1,s)},
e1:function(a){var u,t
for(u=this.c.length,t=0;t<u;++t);}}
U.fi.prototype={
$1:function(a){var u=this.a,t=U.i3(H.d(a,"$iA")),s=u.b7(t)
if(s!=null){s.a.d.aE(t)
s.b=s.b.al(t)
u.d.i(0,-1,s)}u.a=!0
return},
$S:5}
U.fj.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iA")
u=this.a
t=u.d
s=t.h(0,-1)
if(s!=null){r=U.i3(a)
s.a.d.aE(r)
s.b.bX(r)}t.i(0,-1,null)
u.a=!1
return},
$S:5}
U.fk.prototype={
$1:function(a){var u=this.a,t=U.i3(H.d(a,"$iA")),s=u.d.h(0,-1)
if(s!=null){s.a.d.aE(t)
s.b.bV(t)}else{s=u.b7(t)
if(s!=null)if(u.a){s.a.d.aE(t)
s.b.bW(t)}}return},
$S:5}
U.fl.prototype={
$1:function(a){return this.a.e1(H.d(a,"$iaV"))},
$S:38}
U.fm.prototype={
$1:function(a){return H.d(a,"$iaY").preventDefault()},
$S:39}
U.cU.prototype={
b7:function(a){var u,t,s=new U.ct()
s.a=a.a
s.b=a.b
s.c=a.c
s.d=a.d
s.e=a.e
s.f=a.f
s.Q=a.Q
this.d.aE(s)
for(u=this.a,t=u.length-1;t>=0;--t){if(t>=u.length)return H.e(u,t)
if(u[t].b5(s)){if(t>=u.length)return H.e(u,t)
return u[t]}}return}}
U.cT.prototype={}
U.bF.prototype={}
U.ct.prototype={}
U.fu.prototype={
$1:function(a){var u,t
if(!H.O(a.t("action")))return
u=this.b
t=u.a
a.i(0,"id",t)
u.i(0,H.u(a.h(0,"action")),t)
u=this.a
this.c.i(0,t,u.a)
u.a=U.jd(u.a,H.y(a,"$iq",[P.i,P.v],"$aq"))},
$S:15}
U.fv.prototype={
$1:function(a){U.l9(this.a,this.b,a)},
$S:15}
U.ft.prototype={
$1:function(a){var u=this.a
u.a=U.la(u.a,a)},
$S:41}
U.fw.prototype={
$1:function(a){return P.ic(["actual",a],P.i,null)},
$S:42}
U.fx.prototype={
$1:function(a){return H.O(a.t("type"))&&J.Y(J.Z(a,"type"),"select")},
$S:43};(function aliases(){var u=J.R.prototype
u.dk=u.n
u.dj=u.bd
u=J.cC.prototype
u.dm=u.n
u=P.bG.prototype
u.ds=u.aH
u=P.T.prototype
u.dt=u.aq
u.du=u.aG
u=P.p.prototype
u.dl=u.ac
u=P.v.prototype
u.dr=u.n
u=W.t.prototype
u.bi=u.L
u=W.de.prototype
u.dv=u.a4
u=P.aj.prototype
u.dn=u.h
u.c1=u.i
u=U.ao.prototype
u.di=u.ag
u.dh=u.aS
u=U.at.prototype
u.bj=u.C
u=U.cK.prototype
u.dq=u.C})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers._instance_0u,q=hunkHelpers._instance_1i,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0i,l=hunkHelpers._static_2
u(P,"lz","lg",6)
u(P,"lA","lh",6)
u(P,"lB","li",6)
t(P,"jE","lx",0)
s(P,"lC",1,null,["$2","$1"],["jt",function(a){return P.jt(a,null)}],7,0)
t(P,"jD","lt",0)
var k
r(k=P.U.prototype,"gaQ","a2",0)
r(k,"gaR","a3",0)
q(P.bG.prototype,"gen","p",8)
p(P.V.prototype,"gcg",0,1,function(){return[null]},["$2","$1"],["aK","dJ"],7,0)
r(k=P.cZ.prototype,"gaQ","a2",0)
r(k,"gaR","a3",0)
r(k=P.T.prototype,"gaQ","a2",0)
r(k,"gaR","a3",0)
r(P.d1.prototype,"gef","ah",0)
r(k=P.d3.prototype,"gaQ","a2",0)
r(k,"gaR","a3",0)
o(k,"gdU","dV",8)
n(k,"gdZ","e_",34)
r(k,"gdX","dY",0)
u(P,"lE","lp",3)
s(W,"lJ",4,null,["$4"],["lk"],19,0)
s(W,"lK",4,null,["$4"],["ll"],19,0)
m(W.dg.prototype,"gey","bI",0)
u(P,"jO","dl",3)
u(P,"lR","hG",46)
l(U,"m0","lD",47)
l(U,"lY","kM",48)
u(U,"lX","kL",49)
s(U,"lW",3,null,["$3"],["kK"],50,0)
u(U,"m_","kO",17)
t(U,"lZ","kN",51)
u(U,"jQ","le",52)
u(U,"lV","ld",35)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.v,null)
s(P.v,[H.ia,J.R,J.b2,P.p,H.c4,P.as,H.b9,H.cd,P.eA,H.dE,H.bV,H.ek,H.fn,P.b7,H.df,P.aG,H.et,H.eu,H.el,P.hA,P.a_,P.T,P.bG,P.fJ,P.ax,P.V,P.cX,P.a0,P.f8,P.b_,P.fN,P.cl,P.d1,P.a3,P.hE,P.h8,P.ho,P.bI,P.d8,P.d9,P.M,P.hC,P.bE,P.dd,P.dC,P.he,P.D,P.aB,P.a1,P.eN,P.cQ,P.fT,P.cy,P.ar,P.o,P.q,P.c5,P.B,P.N,P.i,P.au,P.aJ,W.dL,W.dg,W.bl,W.ag,W.cI,W.de,W.ht,W.cx,W.fL,W.a9,W.hn,W.di,P.aj,P.aI,U.ao,U.aC,U.dS,U.cr,U.du,U.ak,U.at,U.eV,U.cU,U.bC,U.fh,U.cT,U.bF,U.ct])
s(J.R,[J.ei,J.cB,J.cC,J.bb,J.bA,J.bc,H.c7,W.b8,W.bu,W.b5,W.d_,W.dN,W.cv,W.dO,W.j,W.d5,W.c0,W.cE,W.db,W.dj,P.c2])
s(J.cC,[J.eT,J.bh,J.bd])
t(J.i9,J.bb)
s(J.bA,[J.cA,J.cz])
s(P.p,[H.F,H.bB,H.aw,H.cS,H.cO,H.fK])
s(H.F,[H.aF,H.aE,P.h7,P.ai])
t(H.bx,H.bB)
s(P.as,[H.a4,H.cW,H.ff,H.f6])
s(H.aF,[H.aH,P.hc])
t(H.dQ,H.cS)
t(H.dP,H.cO)
t(P.dh,P.eA)
t(P.fr,P.dh)
t(H.dF,P.fr)
s(H.bV,[H.dG,H.eU,H.hW,H.fg,H.em,H.hQ,H.hR,H.hS,P.fB,P.fA,P.fC,P.fD,P.hB,P.hv,P.hw,P.fV,P.h1,P.fY,P.fZ,P.h_,P.fW,P.h0,P.h4,P.h5,P.h3,P.h2,P.f9,P.fa,P.fb,P.fc,P.fH,P.fG,P.hi,P.hJ,P.hl,P.hk,P.hm,P.ez,P.hf,P.eJ,W.dR,W.fy,W.fS,W.hs,W.eL,W.eK,W.hp,W.hq,W.hz,W.hD,P.dK,P.eb,P.ec,P.ed,P.eo,P.hH,P.hI,P.hK,P.hL,P.hM,U.e3,U.e4,U.e5,U.e2,U.e6,U.e9,U.e7,U.e8,U.e1,U.dv,U.dw,U.eO,U.eP,U.eQ,U.eR,U.eX,U.eY,U.eZ,U.f_,U.f3,U.f4,U.dX,U.dY,U.dW,U.dZ,U.dV,U.e_,U.e0,U.dU,U.dB,U.dA,U.dz,U.ej,U.fi,U.fj,U.fk,U.fl,U.fm,U.fu,U.fv,U.ft,U.fw,U.fx])
t(H.dH,H.dE)
s(P.b7,[H.eM,H.en,H.fq,H.cV,H.dy,H.f0,P.dr,P.cD,P.cJ,P.az,P.eI,P.fs,P.fp,P.aX,P.dD,P.dM])
s(H.fg,[H.f7,H.bT])
t(H.fz,P.dr)
t(P.ex,P.aG)
s(P.ex,[H.L,P.h6,P.hb,W.fE])
t(H.cF,H.c7)
s(H.cF,[H.ch,H.cj])
t(H.ci,H.ch)
t(H.c6,H.ci)
t(H.ck,H.cj)
t(H.cG,H.ck)
s(H.cG,[H.eB,H.eC,H.eD,H.eE,H.eF,H.cH,H.eG])
s(P.a_,[P.hr,P.fU,W.d2,W.aL])
t(P.cY,P.hr)
t(P.fF,P.cY)
s(P.T,[P.cZ,P.d3])
t(P.U,P.cZ)
t(P.hu,P.bG)
t(P.hx,P.fJ)
s(P.b_,[P.fM,P.fO])
t(P.cm,P.cl)
t(P.hh,P.fU)
t(P.hj,P.hE)
t(P.h9,P.h6)
t(P.hg,P.ho)
t(P.ew,P.d9)
t(P.f5,P.dd)
t(P.bX,P.f8)
t(P.eq,P.cD)
t(P.ep,P.dC)
s(P.bX,[P.es,P.er])
t(P.hd,P.he)
s(P.a1,[P.a6,P.H])
s(P.az,[P.cL,P.ef])
s(W.b8,[W.r,W.bi,W.aZ])
s(W.r,[W.t,W.b6,W.cf])
s(W.t,[W.m,P.l])
s(W.m,[W.bR,W.dq,W.bS,W.b3,W.b4,W.bw,W.ee,W.ba,W.f1,W.cR,W.fd,W.fe,W.ce])
t(W.bY,W.d_)
s(P.ew,[W.fI,W.aa,W.a5,P.ea])
t(W.d6,W.d5)
t(W.by,W.d6)
t(W.bg,W.j)
s(W.bg,[W.aV,W.A,W.aY])
t(W.dc,W.db)
t(W.c8,W.dc)
t(W.d0,W.cv)
t(W.dk,W.dj)
t(W.da,W.dk)
t(W.fP,W.fE)
t(P.dJ,P.f5)
s(P.dJ,[W.fQ,P.ds])
t(W.ii,W.d2)
t(W.fR,P.a0)
t(W.hy,W.de)
s(P.aj,[P.aU,P.d7])
t(P.c1,P.d7)
t(P.cb,P.l)
t(U.dI,U.ao)
s(U.dI,[U.ap,U.bt])
t(U.cw,U.ap)
s(U.cr,[U.eS,U.eH])
s(U.at,[U.cK,U.f2,U.dT])
s(U.cK,[U.eg,U.eW])
s(U.eV,[U.dt,U.bs])
t(U.bW,U.cU)
u(H.ch,P.M)
u(H.ci,H.b9)
u(H.cj,P.M)
u(H.ck,H.b9)
u(P.d9,P.M)
u(P.dd,P.bE)
u(P.dh,P.hC)
u(W.d_,W.dL)
u(W.d5,P.M)
u(W.d6,W.ag)
u(W.db,P.M)
u(W.dc,W.ag)
u(W.dj,P.M)
u(W.dk,W.ag)
u(P.d7,P.M)})()
var v={mangledGlobalNames:{H:"int",a6:"double",a1:"num",i:"String",D:"bool",B:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1},{func:1,ret:P.B,args:[W.A]},{func:1,ret:P.B},{func:1,args:[,]},{func:1,ret:P.B,args:[W.j]},{func:1,ret:-1,args:[W.A]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.v],opt:[P.N]},{func:1,ret:-1,args:[P.v]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.B,args:[,,]},{func:1,ret:P.D,args:[W.r]},{func:1,ret:P.D,args:[W.a9]},{func:1,ret:P.D,args:[P.i]},{func:1,ret:P.D,args:[U.ak]},{func:1,ret:P.B,args:[[P.q,,,]]},{func:1,ret:-1,args:[W.t]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.D,args:[W.t]},{func:1,ret:P.D,args:[W.t,P.i,P.i,W.bl]},{func:1,ret:P.B,args:[P.i,,]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:P.D,args:[[P.ai,P.i]]},{func:1,ret:W.t,args:[W.r]},{func:1,ret:P.aU,args:[,]},{func:1,ret:[P.c1,,],args:[,]},{func:1,args:[W.j]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,args:[,P.i]},{func:1,ret:P.B,args:[P.i]},{func:1,ret:P.B,args:[P.a1]},{func:1,ret:P.B,args:[P.aJ,,]},{func:1,args:[P.i]},{func:1,ret:P.D,args:[W.A]},{func:1,ret:-1,args:[,P.N]},{func:1,ret:-1,args:[[P.o,,]]},{func:1,ret:P.D,args:[U.ao]},{func:1,ret:P.H,args:[U.ak]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:[P.V,,],args:[,]},{func:1,ret:P.B,args:[[P.o,,]]},{func:1,ret:[P.q,P.i,,],args:[,]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.a1]},{func:1,ret:P.B,args:[,],opt:[P.N]},{func:1,ret:P.v,args:[,]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.i]},{func:1,ret:P.i,args:[P.i,P.i,P.aU]},{func:1,ret:P.i},{func:1,ret:-1,args:[[P.q,,,]]},{func:1,ret:P.aj,args:[,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bR.prototype
C.m=W.b3.prototype
C.p=W.b4.prototype
C.q=W.b5.prototype
C.b=W.bw.prototype
C.G=J.R.prototype
C.a=J.bb.prototype
C.r=J.cz.prototype
C.f=J.cA.prototype
C.t=J.cB.prototype
C.c=J.bA.prototype
C.e=J.bc.prototype
C.H=J.bd.prototype
C.O=W.c8.prototype
C.w=J.eT.prototype
C.x=W.cR.prototype
C.k=J.bh.prototype
C.Q=W.bi.prototype
C.o=function getTagFallback(o) {
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
C.n=function(hooks) { return hooks; }

C.h=new P.ep()
C.E=new P.eN()
C.F=new P.fN()
C.d=new P.hj()
C.I=new P.er(null)
C.J=new P.es(null)
C.K=H.C(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.L=H.C(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.M=H.C(u([]),[P.i])
C.u=u([])
C.i=H.C(u(["bind","if","ref","repeat","syntax"]),[P.i])
C.j=H.C(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])
C.N=H.C(u([]),[P.aJ])
C.v=new H.dH(0,{},C.N,[P.aJ,null])
C.P=new H.cd("call")})();(function staticFields(){$.aA=0
$.bU=null
$.iQ=null
$.io=!1
$.jK=null
$.jB=null
$.jV=null
$.hN=null
$.hT=null
$.iy=null
$.bJ=null
$.cn=null
$.co=null
$.ip=!1
$.G=C.d
$.ac=[]
$.aR=null
$.i4=null
$.iU=null
$.iT=null
$.d4=P.ev(P.i,P.ar)
$.cs=null
$.ad=P.id()})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mf","hY",function(){return H.ix("_$dart_dartClosure")})
u($,"mi","iE",function(){return H.ix("_$dart_js")})
u($,"mm","k_",function(){return H.aK(H.fo({
toString:function(){return"$receiver$"}}))})
u($,"mn","k0",function(){return H.aK(H.fo({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mo","k1",function(){return H.aK(H.fo(null))})
u($,"mp","k2",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ms","k5",function(){return H.aK(H.fo(void 0))})
u($,"mt","k6",function(){return H.aK(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mr","k4",function(){return H.aK(H.ja(null))})
u($,"mq","k3",function(){return H.aK(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mv","k8",function(){return H.aK(H.ja(void 0))})
u($,"mu","k7",function(){return H.aK(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"my","iF",function(){return P.lf()})
u($,"mh","dp",function(){var t=new P.V(C.d,[P.B])
t.eg(null)
return t})
u($,"mA","k9",function(){return P.j_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)})
u($,"me","jZ",function(){return P.l3("^\\S+$")})
u($,"mE","iI",function(){return H.d(P.is(self),"$iaj")})
u($,"mz","iG",function(){return H.ix("_$dart_dartObject")})
u($,"mC","iH",function(){return function DartObject(a){this.o=a}})
u($,"mk","ae",function(){return W.m7().devicePixelRatio})
u($,"md","bq",function(){var t=$.ae()
if(typeof t!=="number")return H.c(t)
return 80*t})
u($,"m9","w",function(){var t=$.ae()
if(typeof t!=="number")return H.c(t)
return 34*t})
u($,"mb","a2",function(){var t=$.ae()
if(typeof t!=="number")return H.c(t)
return 10*t})
u($,"ma","bp",function(){var t=$.ae()
if(typeof t!=="number")return H.c(t)
return 25*t})
u($,"m8","hX",function(){var t=$.ae()
if(typeof t!=="number")return H.c(t)
return 10*t})
u($,"mc","iD",function(){return $.a2()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.R,CanvasPattern:J.R,DOMError:J.R,DOMImplementation:J.R,MediaError:J.R,Navigator:J.R,NavigatorConcurrentHardware:J.R,NavigatorUserMediaError:J.R,OverconstrainedError:J.R,PositionError:J.R,Range:J.R,TextMetrics:J.R,WebGLRenderingContext:J.R,WebGL2RenderingContext:J.R,SQLError:J.R,DataView:H.c7,ArrayBufferView:H.c7,Float32Array:H.c6,Float64Array:H.c6,Int16Array:H.eB,Int32Array:H.eC,Int8Array:H.eD,Uint16Array:H.eE,Uint32Array:H.eF,Uint8ClampedArray:H.cH,CanvasPixelArray:H.cH,Uint8Array:H.eG,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.bR,HTMLAreaElement:W.dq,HTMLBaseElement:W.bS,Blob:W.bu,File:W.bu,HTMLBodyElement:W.b3,HTMLCanvasElement:W.b4,CanvasRenderingContext2D:W.b5,CDATASection:W.b6,CharacterData:W.b6,Comment:W.b6,ProcessingInstruction:W.b6,Text:W.b6,CSSStyleDeclaration:W.bY,MSStyleCSSProperties:W.bY,CSS2Properties:W.bY,HTMLDivElement:W.bw,DOMException:W.dN,DOMRectReadOnly:W.cv,DOMTokenList:W.dO,Element:W.t,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,EventTarget:W.b8,HTMLFormElement:W.ee,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,ImageData:W.c0,HTMLInputElement:W.ba,KeyboardEvent:W.aV,Location:W.cE,MouseEvent:W.A,DragEvent:W.A,PointerEvent:W.A,WheelEvent:W.A,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,DocumentType:W.r,Node:W.r,NodeList:W.c8,RadioNodeList:W.c8,HTMLSelectElement:W.f1,HTMLTableElement:W.cR,HTMLTableRowElement:W.fd,HTMLTableSectionElement:W.fe,HTMLTemplateElement:W.ce,TouchEvent:W.aY,CompositionEvent:W.bg,FocusEvent:W.bg,TextEvent:W.bg,UIEvent:W.bg,Window:W.bi,DOMWindow:W.bi,DedicatedWorkerGlobalScope:W.aZ,ServiceWorkerGlobalScope:W.aZ,SharedWorkerGlobalScope:W.aZ,WorkerGlobalScope:W.aZ,Attr:W.cf,ClientRect:W.d0,DOMRect:W.d0,NamedNodeMap:W.da,MozNamedAttrMap:W.da,IDBKeyRange:P.c2,SVGScriptElement:P.cb,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,TextMetrics:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:true,File:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,IDBKeyRange:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.jP,[])
else U.jP([])})})()
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
  init : function(canvasId, json) {
    NetTango_InitWorkspace(canvasId, JSON.stringify(json));
  },


  /// Add a callback function to receive programChanged events from the
  /// workspace. Callback functions should take one parameter, which is
  /// the canvasId for the workspace (as a String).
  onProgramChanged : function(canvasId, callback) {
    NetTango._callbacks[canvasId] = callback;
  },

  /// Exports the code for a workspace in a given target language.
  /// The only language supported now is "NetLogo".
  exportCode : function(canvasId, language, formatAttribute) {
    return NetTango_ExportCode(canvasId, language, formatAttribute);
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
  restore : function(canvasId, json) {
    NetTango_InitWorkspace(canvasId, JSON.stringify(json));
  },


  /// Restores all workspaces from a previously saved state.
  restoreAll : function(json) {
    NetTango_InitAllWorkspaces(JSON.stringify(json));
  },


  _relayCallback : function(canvasId, event) {
    if (canvasId in NetTango._callbacks) {
      NetTango._callbacks[canvasId](canvasId, event);
    }
  },

  _callbacks : { }
}

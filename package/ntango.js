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
a[c]=function(){a[c]=function(){H.m3(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.is"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.is"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.is(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={i5:function i5(){},
j1:function(a,b,c,d){if(!!J.k(a).$iF)return new H.bv(a,b,[c,d])
return new H.bz(a,b,[c,d])},
l5:function(a,b,c){P.c7(b,"takeCount")
if(!!J.k(a).$iF)return new H.dL(a,b,[c])
return new H.cP(a,b,[c])},
l2:function(a,b,c){if(!!J.k(a).$iF){P.c7(b,"count")
return new H.dK(a,b,[c])}P.c7(b,"count")
return new H.cL(a,b,[c])},
iW:function(){return new P.aV("No element")},
kF:function(){return new P.aV("Too many elements")},
j8:function(a,b,c){H.cM(a,0,J.ae(a)-1,b,c)},
cM:function(a,b,c,d,e){if(c-b<=32)H.l4(a,b,c,d,e)
else H.l3(a,b,c,d,e)},
l4:function(a,b,c,d,e){var u,t,s,r,q,p
for(u=b+1,t=J.N(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.C()
q=q>0}else q=!1
if(!q)break
p=r-1
t.i(a,r,t.h(a,p))
r=p}t.i(a,r,s)}},
l3:function(a3,a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j=C.f.cH(a5-a4+1,6),i=a4+j,h=a5-j,g=C.f.cH(a4+a5,2),f=g-j,e=g+j,d=J.N(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.C()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.C()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.C()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.C()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.C()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.C()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.C()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.C()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.C()
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
if(typeof p!=="number")return p.C()
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
if(typeof k!=="number")return k.C()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.C()
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
H.cM(a3,a4,t-2,a6,a7)
H.cM(a3,s+2,a5,a6,a7)
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
break}}H.cM(a3,t,s,a6,a7)}else H.cM(a3,t,s,a6,a7)},
F:function F(){},
aE:function aE(){},
c2:function c2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bz:function bz(a,b,c){this.a=a
this.b=b
this.$ti=c},
bv:function bv(a,b,c){this.a=a
this.b=b
this.$ti=c},
a5:function a5(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
aJ:function aJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b,c){this.a=a
this.b=b
this.$ti=c},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
dL:function dL(a,b,c){this.a=a
this.b=b
this.$ti=c},
fb:function fb(a,b,c){this.a=a
this.b=b
this.$ti=c},
cL:function cL(a,b,c){this.a=a
this.b=b
this.$ti=c},
dK:function dK(a,b,c){this.a=a
this.b=b
this.$ti=c},
f2:function f2(a,b,c){this.a=a
this.b=b
this.$ti=c},
b7:function b7(){},
ca:function ca(a){this.a=a},
kx:function(){throw H.h(P.D("Cannot modify unmodifiable Map"))},
bN:function(a){var u,t=H.m5(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lG:function(a){return v.types[H.z(a)]},
lO:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.k(a).$iaS},
a:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.I(a)
if(typeof u!=="string")throw H.h(H.ax(a))
return u},
be:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
j6:function(a,b){var u,t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return
if(3>=t.length)return H.e(t,3)
u=H.w(t[3])
if(u!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return},
l_:function(a){var u,t
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=C.e.d9(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
cH:function(a){return H.kR(a)+H.io(H.bn(a),0,null)},
kR:function(a){var u,t,s,r,q,p,o,n=J.k(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.G||!!n.$ibg){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bN(t.length>1&&C.e.aJ(t,0)===36?C.e.c0(t,1):t)},
ag:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.bH(u,10))>>>0,56320|u&1023)}throw H.h(P.cJ(a,0,1114111,null,null))},
bd:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kZ:function(a){var u=H.bd(a).getFullYear()+0
return u},
kX:function(a){var u=H.bd(a).getMonth()+1
return u},
kT:function(a){var u=H.bd(a).getDate()+0
return u},
kU:function(a){var u=H.bd(a).getHours()+0
return u},
kW:function(a){var u=H.bd(a).getMinutes()+0
return u},
kY:function(a){var u=H.bd(a).getSeconds()+0
return u},
kV:function(a){var u=H.bd(a).getMilliseconds()+0
return u},
bB:function(a,b,c){var u,t,s={}
s.a=0
u=[]
t=[]
s.a=b.length
C.a.K(u,b)
s.b=""
if(c!=null&&c.a!==0)c.w(0,new H.eQ(s,t,u))
""+s.a
return J.kk(a,new H.eg(C.P,0,u,t,0))},
kS:function(a,b,c){var u,t,s,r
if(b instanceof Array)u=c==null||c.a===0
else u=!1
if(u){t=b
s=t.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(t[0])}else if(s===2){if(!!a.$2)return a.$2(t[0],t[1])}else if(s===3){if(!!a.$3)return a.$3(t[0],t[1],t[2])}else if(s===4){if(!!a.$4)return a.$4(t[0],t[1],t[2],t[3])}else if(s===5)if(!!a.$5)return a.$5(t[0],t[1],t[2],t[3],t[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,t)}return H.kQ(a,b,c)},
kQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b instanceof Array?b:P.bc(b,!0,null),k=l.length,j=a.$R
if(k<j)return H.bB(a,l,c)
u=a.$D
t=u==null
s=!t?u():null
r=J.k(a)
q=r.$C
if(typeof q==="string")q=r[q]
if(t){if(c!=null&&c.a!==0)return H.bB(a,l,c)
if(k===j)return q.apply(a,l)
return H.bB(a,l,c)}if(s instanceof Array){if(c!=null&&c.a!==0)return H.bB(a,l,c)
if(k>j+s.length)return H.bB(a,l,null)
C.a.K(l,s.slice(k-j))
return q.apply(a,l)}else{if(k>j)return H.bB(a,l,c)
p=Object.keys(s)
if(c==null)for(t=p.length,o=0;o<p.length;p.length===t||(0,H.W)(p),++o)C.a.p(l,s[H.w(p[o])])
else{for(t=p.length,n=0,o=0;o<p.length;p.length===t||(0,H.W)(p),++o){m=H.w(p[o])
if(c.t(m)){++n
C.a.p(l,c.h(0,m))}else C.a.p(l,s[m])}if(n!==c.a)return H.bB(a,l,c)}return q.apply(a,l)}},
c:function(a){throw H.h(H.ax(a))},
e:function(a,b){if(a==null)J.ae(a)
throw H.h(H.aZ(a,b))},
aZ:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ay(!0,b,s,null)
u=H.z(J.ae(a))
if(!(b<0)){if(typeof u!=="number")return H.c(u)
t=b>=u}else t=!0
if(t)return P.bx(b,a,s,null,u)
return P.cK(b,s)},
ax:function(a){return new P.ay(!0,a,null,null)},
jF:function(a){if(typeof a!=="number")throw H.h(H.ax(a))
return a},
h:function(a){var u
if(a==null)a=new P.cF()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jW})
u.name=""}else u.toString=H.jW
return u},
jW:function(){return J.I(this.dartException)},
Z:function(a){throw H.h(a)},
W:function(a){throw H.h(P.ap(a))},
aI:function(a){var u,t,s,r,q,p
a=H.jU(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.C([],[P.j])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fj(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fk:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jb:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
j3:function(a,b){return new H.eI(a,b==null?null:b.method)},
i6:function(a,b){var u=b==null,t=u?null:b.method
return new H.ej(a,t,u?null:b.receiver)},
P:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.hS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.bH(t,16)&8191)===10)switch(s){case 438:return f.$1(H.i6(H.a(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.j3(H.a(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jY()
q=$.jZ()
p=$.k_()
o=$.k0()
n=$.k3()
m=$.k4()
l=$.k2()
$.k1()
k=$.k6()
j=$.k5()
i=r.Z(u)
if(i!=null)return f.$1(H.i6(H.w(u),i))
else{i=q.Z(u)
if(i!=null){i.method="call"
return f.$1(H.i6(H.w(u),i))}else{i=p.Z(u)
if(i==null){i=o.Z(u)
if(i==null){i=n.Z(u)
if(i==null){i=m.Z(u)
if(i==null){i=l.Z(u)
if(i==null){i=o.Z(u)
if(i==null){i=k.Z(u)
if(i==null){i=j.Z(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.j3(H.w(u),i))}}return f.$1(new H.fm(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cN()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ay(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cN()
return a},
b_:function(a){var u
if(a==null)return new H.dc(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dc(a)},
jQ:function(a){if(a==null||typeof a!='object')return J.aP(a)
else return H.be(a)},
jH:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.i(0,a[u],a[t])}return b},
lN:function(a,b,c,d,e,f){H.d(a,"$iaq")
switch(H.z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.fP("Unsupported number of arguments for wrapped closure"))},
bL:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lN)
a.$identity=u
return u},
kv:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.f3().constructor.prototype):Object.create(new H.bR(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.az
if(typeof t!=="number")return t.k()
$.az=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.iS(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kr(d,e,f)
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
kr:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lG,a)
if(typeof a=="function")if(b)return a
else{u=c?H.iR:H.hY
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
ks:function(a,b,c,d){var u=H.hY
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iS:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ku(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.ks(t,!r,u,b)
if(t===0){r=$.az
if(typeof r!=="number")return r.k()
$.az=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bS
return new Function(r+H.a(q==null?$.bS=H.ds("self"):q)+";return "+p+"."+H.a(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.az
if(typeof r!=="number")return r.k()
$.az=r+1
o+=r
r="return function("+o+"){return this."
q=$.bS
return new Function(r+H.a(q==null?$.bS=H.ds("self"):q)+"."+H.a(u)+"("+o+");}")()},
kt:function(a,b,c,d){var u=H.hY,t=H.iR
switch(b?-1:a){case 0:throw H.h(H.l1("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ku:function(a,b){var u,t,s,r,q,p,o,n=$.bS
if(n==null)n=$.bS=H.ds("self")
u=$.iQ
if(u==null)u=$.iQ=H.ds("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kt(s,!q,t,b)
if(s===1){n="return function(){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+");"
u=$.az
if(typeof u!=="number")return u.k()
$.az=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+", "+o+");"
u=$.az
if(typeof u!=="number")return u.k()
$.az=u+1
return new Function(n+u+"}")()},
is:function(a,b,c,d,e,f,g){return H.kv(a,b,c,d,!!e,!!f,g)},
hY:function(a){return a.a},
iR:function(a){return a.c},
ds:function(a){var u,t,s,r=new H.bR("self","target","receiver","name"),q=J.i3(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
M:function(a){if(a==null)H.lw("boolean expression must not be null")
return a},
w:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.av(a,"String"))},
lD:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.av(a,"double"))},
dj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.av(a,"num"))},
iq:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.av(a,"bool"))},
z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.av(a,"int"))},
jS:function(a,b){throw H.h(H.av(a,H.bN(H.w(b).substring(2))))},
m1:function(a,b){throw H.h(H.kq(a,H.bN(H.w(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.k(a)[b])return a
H.jS(a,b)},
jL:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.k(a)[b]
else u=!0
if(u)return a
H.m1(a,b)},
a8:function(a){if(a==null)return a
if(!!J.k(a).$io)return a
throw H.h(H.av(a,"List<dynamic>"))},
S:function(a,b){var u
if(a==null)return a
u=J.k(a)
if(!!u.$io)return a
if(u[b])return a
H.jS(a,b)},
jG:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.z(u)]
else return a.$S()}return},
bm:function(a,b){var u
if(typeof a=="function")return!0
u=H.jG(J.k(a))
if(u==null)return!1
return H.js(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.ik)return a
$.ik=!0
try{if(H.bm(a,b))return a
u=H.cm(b)
t=H.av(a,u)
throw H.h(t)}finally{$.ik=!1}},
hK:function(a,b){if(a!=null&&!H.ir(a,b))H.Z(H.av(a,H.cm(b)))
return a},
av:function(a,b){return new H.cS("TypeError: "+P.aR(a)+": type '"+H.a(H.jz(a))+"' is not a subtype of type '"+b+"'")},
kq:function(a,b){return new H.dt("CastError: "+P.aR(a)+": type '"+H.a(H.jz(a))+"' is not a subtype of type '"+b+"'")},
jz:function(a){var u,t=J.k(a)
if(!!t.$ibT){u=H.jG(t)
if(u!=null)return H.cm(u)
return"Closure"}return H.cH(a)},
lw:function(a){throw H.h(new H.fv(a))},
m3:function(a){throw H.h(new P.dH(a))},
l1:function(a){return new H.eX(a)},
iu:function(a){return v.getIsolateTag(a)},
C:function(a,b){a.$ti=b
return a},
bn:function(a){if(a==null)return
return a.$ti},
mF:function(a,b,c){return H.bM(a["$a"+H.a(c)],H.bn(b))},
am:function(a,b,c,d){var u=H.bM(a["$a"+H.a(c)],H.bn(b))
return u==null?null:u[d]},
J:function(a,b,c){var u=H.bM(a["$a"+H.a(b)],H.bn(a))
return u==null?null:u[c]},
b:function(a,b){var u=H.bn(a)
return u==null?null:u[b]},
cm:function(a){return H.bl(a,null)},
bl:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bN(a[0].name)+H.io(a,1,b)
if(typeof a=="function")return H.bN(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.z(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.a(b[t])}if('func' in a)return H.ln(a,b)
if('futureOr' in a)return"FutureOr<"+H.bl("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ln:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.C([],[P.j])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.p(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.e(a0,m)
p=C.e.k(p,a0[m])
l=u[q]
if(l!=null&&l!==P.u)p+=" extends "+H.bl(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bl(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bl(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bl(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lF(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.w(n[g])
i=i+h+H.bl(d[c],a0)+(" "+H.a(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
io:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.au("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bl(p,c)}return"<"+u.n(0)+">"},
bM:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
di:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bn(a)
t=J.k(a)
if(t[b]==null)return!1
return H.jC(H.bM(t[d],u),null,c,null)},
x:function(a,b,c,d){if(a==null)return a
if(H.di(a,b,c,d))return a
throw H.h(H.av(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bN(b.substring(2))+H.io(c,0,null),v.mangledGlobalNames)))},
ak:function(a,b,c,d,e){if(!H.ai(a,null,b,null))H.m4("TypeError: "+H.a(c)+H.cm(a)+H.a(d)+H.cm(b)+H.a(e))},
m4:function(a){throw H.h(new H.cS(H.w(a)))},
jC:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ai(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ai(a[t],b,c[t],d))return!1
return!0},
mC:function(a,b,c){return a.apply(b,H.bM(J.k(b)["$a"+H.a(c)],H.bn(b)))},
jN:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="u"||a.name==="B"||a===-1||a===-2||H.jN(u)}return!1},
ir:function(a,b){var u,t
if(a==null)return b==null||b.name==="u"||b.name==="B"||b===-1||b===-2||H.jN(b)
if(b==null||b===-1||b.name==="u"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ir(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bm(a,b)}u=J.k(a).constructor
t=H.bn(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ai(u,null,b,null)},
n:function(a,b){if(a!=null&&!H.ir(a,b))throw H.h(H.av(a,H.cm(b)))
return a},
ai:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="u"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="u"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ai(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="B")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ai("type" in a?a.type:l,b,s,d)
else if(H.ai(a,b,s,d))return!0
else{if(!('$i'+"aC" in t.prototype))return!1
r=t.prototype["$a"+"aC"]
q=H.bM(r,u?a.slice(1):l)
return H.ai(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.js(a,b,c,d)
if('func' in a)return c.name==="aq"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.jC(H.bM(m,u),b,p,d)},
js:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ai(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ai(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ai(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ai(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lT(h,b,g,d)},
lT:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ai(c[s],d,a[s],b))return!1}return!0},
mE:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lR:function(a){var u,t,s,r,q=H.w($.jK.$1(a)),p=$.hJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.w($.jB.$2(a,q))
if(q!=null){p=$.hJ[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.hQ(u)
$.hJ[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.hP[q]=u
return u}if(s==="-"){r=H.hQ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jR(a,u)
if(s==="*")throw H.h(P.jd(q))
if(v.leafTags[q]===true){r=H.hQ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jR(a,u)},
jR:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iw(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hQ:function(a){return J.iw(a,!1,null,!!a.$iaS)},
lS:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hQ(u)
else return J.iw(u,c,null,null)},
lK:function(){if(!0===$.iv)return
$.iv=!0
H.lL()},
lL:function(){var u,t,s,r,q,p,o,n
$.hJ=Object.create(null)
$.hP=Object.create(null)
H.lJ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jT.$1(q)
if(p!=null){o=H.lS(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lJ:function(){var u,t,s,r,q,p,o=C.y()
o=H.bK(C.z,H.bK(C.A,H.bK(C.n,H.bK(C.n,H.bK(C.B,H.bK(C.C,H.bK(C.D(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jK=new H.hM(r)
$.jB=new H.hN(q)
$.jT=new H.hO(p)},
bK:function(a,b){return a(b)||b},
kO:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(P.eb("Illegal RegExp pattern ("+String(p)+")",a))},
lE:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jU:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
iy:function(a,b,c){var u=H.m2(a,b,c)
return u},
m2:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jU(b),'g'),H.lE(c))},
dA:function dA(a,b){this.a=a
this.$ti=b},
dz:function dz(){},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fG:function fG(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eI:function eI(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a){this.a=a},
hS:function hS(a){this.a=a},
dc:function dc(a){this.a=a
this.b=null},
bT:function bT(){},
fc:function fc(){},
f3:function f3(){},
bR:function bR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cS:function cS(a){this.a=a},
dt:function dt(a){this.a=a},
eX:function eX(a){this.a=a},
fv:function fv(a){this.a=a},
K:function K(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ei:function ei(a){this.a=a},
ep:function ep(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aD:function aD(a,b){this.a=a
this.$ti=b},
eq:function eq(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
eh:function eh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aL:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.aZ(b,a))},
c5:function c5(){},
cB:function cB(){},
c4:function c4(){},
cC:function cC(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
cD:function cD(){},
eC:function eC(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
jM:function(a){var u=J.k(a)
return!!u.$ibt||!!u.$ii||!!u.$ic0||!!u.$ibY||!!u.$ir||!!u.$ibh||!!u.$iaX},
lF:function(a){return J.kG(a?Object.keys(a):[],null)},
m5:function(a){return v.mangledGlobalNames[a]},
m0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hL:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iv==null){H.lK()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.jd("Return interceptor for "+H.a(u(a,q))))}s=a.constructor
r=s==null?null:s[$.iC()]
if(r!=null)return r
r=H.lR(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.iC(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
kG:function(a,b){return J.i3(H.C(a,[b]))},
i3:function(a){a.fixed$length=Array
return a},
iX:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kM:function(a,b){var u,t
for(u=a.length;b<u;){t=C.e.aJ(a,b)
if(t!==32&&t!==13&&!J.iX(t))break;++b}return b},
kN:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.e.cQ(a,u)
if(t!==32&&t!==13&&!J.iX(t))break}return b},
k:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cw.prototype
return J.cv.prototype}if(typeof a=="string")return J.ba.prototype
if(a==null)return J.cx.prototype
if(typeof a=="boolean")return J.ef.prototype
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.u)return a
return J.hL(a)},
N:function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.u)return a
return J.hL(a)},
aM:function(a){if(a==null)return a
if(a.constructor==Array)return J.b9.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.u)return a
return J.hL(a)},
jI:function(a){if(typeof a=="number")return J.by.prototype
if(a==null)return a
if(!(a instanceof P.u))return J.bg.prototype
return a},
jJ:function(a){if(typeof a=="number")return J.by.prototype
if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.u))return J.bg.prototype
return a},
it:function(a){if(typeof a=="string")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.u))return J.bg.prototype
return a},
al:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bb.prototype
return a}if(a instanceof P.u)return a
return J.hL(a)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.k(a).P(a,b)},
iH:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jI(a).C(a,b)},
iI:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jJ(a).m(a,b)},
X:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lO(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.N(a).h(a,b)},
k8:function(a,b,c){return J.aM(a).i(a,b,c)},
k9:function(a,b,c,d){return J.al(a).dD(a,b,c,d)},
iJ:function(a){return J.al(a).dG(a)},
ka:function(a,b,c,d){return J.al(a).e8(a,b,c,d)},
kb:function(a,b,c){return J.al(a).e9(a,b,c)},
aO:function(a,b){return J.aM(a).p(a,b)},
kc:function(a,b){return J.jJ(a).b5(a,b)},
kd:function(a,b){return J.N(a).D(a,b)},
cn:function(a,b){return J.aM(a).F(a,b)},
ke:function(a){return J.al(a).ges(a)},
kf:function(a){return J.al(a).gcO(a)},
iK:function(a){return J.al(a).gcP(a)},
aP:function(a){return J.k(a).gv(a)},
kg:function(a){return J.N(a).gI(a)},
kh:function(a){return J.N(a).gbM(a)},
y:function(a){return J.aM(a).gu(a)},
ae:function(a){return J.N(a).gj(a)},
ki:function(a,b){return J.aM(a).O(a,b)},
kj:function(a,b,c){return J.aM(a).E(a,b,c)},
kk:function(a,b){return J.k(a).be(a,b)},
bO:function(a){return J.aM(a).V(a)},
kl:function(a,b){return J.al(a).eR(a,b)},
iL:function(a,b){return J.al(a).sH(a,b)},
hV:function(a,b){return J.al(a).a6(a,b)},
km:function(a){return J.aM(a).a_(a)},
kn:function(a){return J.it(a).eU(a)},
I:function(a){return J.k(a).n(a)},
ko:function(a,b){return J.jI(a).eV(a,b)},
hW:function(a){return J.it(a).d9(a)},
kp:function(a,b){return J.aM(a).ac(a,b)},
R:function R(){},
ef:function ef(){},
cx:function cx(){},
cy:function cy(){},
eP:function eP(){},
bg:function bg(){},
bb:function bb(){},
b9:function b9(a){this.$ti=a},
i4:function i4(a){this.$ti=a},
b0:function b0(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
by:function by(){},
cw:function cw(){},
cv:function cv(){},
ba:function ba(){}},P={
lc:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lx()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bL(new P.fx(s),1)).observe(u,{childList:true})
return new P.fw(s,u,t)}else if(self.setImmediate!=null)return P.ly()
return P.lz()},
ld:function(a){self.scheduleImmediate(H.bL(new P.fy(H.f(a,{func:1,ret:-1})),0))},
le:function(a){self.setImmediate(H.bL(new P.fz(H.f(a,{func:1,ret:-1})),0))},
lf:function(a){H.f(a,{func:1,ret:-1})
P.lk(0,a)},
lk:function(a,b){var u=new P.hw()
u.dB(a,b)
return u},
ji:function(a,b){var u,t,s
b.a=1
try{a.d6(new P.fU(b),new P.fV(b),null)}catch(s){u=H.P(s)
t=H.b_(s)
P.jV(new P.fW(b,u,t))}},
fT:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.d(a.c,"$iV")
if(u>=4){t=b.aV()
b.a=a.a
b.c=a.c
P.bF(b,t)}else{t=H.d(b.c,"$iaw")
b.a=2
b.c=a
a.cA(t)}},
bF:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.d(g.c,"$ia4")
P.bI(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.bF(h.a,b)}g=h.a
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
if(m){H.d(q,"$ia4")
P.bI(i,i,g.b,q.a,q.b)
return}l=$.G
if(l!==n)$.G=n
else l=i
g=b.c
if((g&15)===8)new P.h0(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.h_(u,b,q).$0()}else if((g&2)!==0)new P.fZ(h,u,b).$0()
if(l!=null)$.G=l
g=u.b
if(!!J.k(g).$iaC){if(g.a>=4){k=H.d(o.c,"$iaw")
o.c=null
b=o.aY(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.fT(g,o)
return}}j=b.b
k=H.d(j.c,"$iaw")
j.c=null
b=j.aY(k)
g=u.a
p=u.b
if(!g){H.n(p,H.b(j,0))
j.a=4
j.c=p}else{H.d(p,"$ia4")
j.a=8
j.c=p}h.a=j
g=j}},
lt:function(a,b){if(H.bm(a,{func:1,args:[P.u,P.O]}))return b.d1(a,null,P.u,P.O)
if(H.bm(a,{func:1,args:[P.u]}))return H.f(a,{func:1,ret:null,args:[P.u]})
throw H.h(P.hX(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lq:function(){var u,t
for(;u=$.bH,u!=null;){$.cl=null
t=u.b
$.bH=t
if(t==null)$.ck=null
u.a.$0()}},
lv:function(){$.il=!0
try{P.lq()}finally{$.cl=null
$.il=!1
if($.bH!=null)$.iD().$1(P.jE())}},
jy:function(a){var u=new P.cU(a)
if($.bH==null){$.bH=$.ck=u
if(!$.il)$.iD().$1(P.jE())}else $.ck=$.ck.b=u},
lu:function(a){var u,t,s=$.bH
if(s==null){P.jy(a)
$.cl=$.ck
return}u=new P.cU(a)
t=$.cl
if(t==null){u.b=s
$.bH=$.cl=u}else{u.b=t.b
$.cl=t.b=u
if(u.b==null)$.ck=u}},
jV:function(a){var u=null,t=$.G
if(C.d===t){P.bJ(u,u,C.d,a)
return}P.bJ(u,u,t,H.f(t.cN(a),{func:1,ret:-1}))},
jx:function(a){var u,t,s
if(a==null)return
try{a.$0()}catch(s){u=H.P(s)
t=H.b_(s)
P.bI(null,null,$.G,u,H.d(t,"$iO"))}},
jt:function(a,b){P.bI(null,null,$.G,a,b)},
lr:function(){},
bI:function(a,b,c,d,e){var u={}
u.a=d
P.lu(new P.hF(u,e))},
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
bJ:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.cN(d):c.eu(d,-1)
P.jy(d)},
fx:function fx(a){this.a=a},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
hw:function hw(){},
hx:function hx(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
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
bE:function bE(){},
hq:function hq(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
hr:function hr(a,b){this.a=a
this.b=b},
hs:function hs(a){this.a=a},
fF:function fF(){},
ht:function ht(a,b){this.a=a
this.$ti=b},
aw:function aw(a,b,c,d,e){var _=this
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
fR:function fR(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
fU:function fU(a){this.a=a},
fV:function fV(a){this.a=a},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
h0:function h0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h1:function h1(a){this.a=a},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a){this.a=a
this.b=null},
a_:function a_(){},
f5:function f5(a,b){this.a=a
this.b=b},
f6:function f6(a,b){this.a=a
this.b=b},
f7:function f7(a,b){this.a=a
this.b=b},
f8:function f8(a,b){this.a=a
this.b=b},
a0:function a0(){},
f4:function f4(){},
cV:function cV(){},
cW:function cW(){},
T:function T(){},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a){this.a=a},
hn:function hn(){},
aY:function aY(){},
fI:function fI(a,b){this.b=a
this.a=null
this.$ti=b},
fK:function fK(a,b){this.b=a
this.c=b
this.a=null},
fJ:function fJ(){},
ci:function ci(){},
he:function he(a,b){this.a=a
this.b=b},
cj:function cj(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cZ:function cZ(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
fQ:function fQ(){},
d0:function d0(a,b,c,d){var _=this
_.x=a
_.c=_.b=_.a=_.y=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
hd:function hd(a,b,c){this.b=a
this.a=b
this.$ti=c},
a4:function a4(a,b){this.a=a
this.b=b},
hA:function hA(){},
hF:function hF(a,b){this.a=a
this.b=b},
hf:function hf(){},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a,b){this.a=a
this.b=b},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function(a,b){var u=a[b]
return u===a?null:u},
ie:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
jk:function(){var u=Object.create(null)
P.ie(u,"<non-identifier-key>",u)
delete u["<non-identifier-key>"]
return u},
i7:function(a,b,c){return H.x(H.jH(a,new H.K([b,c])),"$ij_",[b,c],"$aj_")},
er:function(a,b){return new H.K([a,b])},
i8:function(){return new H.K([null,null])},
i9:function(a){return H.jH(a,new H.K([null,null]))},
c1:function(a){return new P.hc([a])},
ig:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
cd:function(a,b,c){var u=new P.d5(a,b,[c])
u.c=a.e
return u},
kE:function(a,b,c){var u,t
if(P.im(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.C([],[P.j])
C.a.p($.ac,a)
try{P.lp(a,u)}finally{if(0>=$.ac.length)return H.e($.ac,-1)
$.ac.pop()}t=P.ja(b,H.S(u,"$ip"),", ")+c
return t.charCodeAt(0)==0?t:t},
ee:function(a,b,c){var u,t
if(P.im(a))return b+"..."+c
u=new P.au(b)
C.a.p($.ac,a)
try{t=u
t.a=P.ja(t.a,a,", ")}finally{if(0>=$.ac.length)return H.e($.ac,-1)
$.ac.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
im:function(a){var u,t
for(u=$.ac.length,t=0;t<u;++t)if(a===$.ac[t])return!0
return!1},
lp:function(a,b){var u,t,s,r,q,p,o,n=a.gu(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.l())return
u=H.a(n.gq())
C.a.p(b,u)
m+=u.length+2;++l}if(!n.l()){if(l<=5)return
if(0>=b.length)return H.e(b,-1)
t=b.pop()
if(0>=b.length)return H.e(b,-1)
s=b.pop()}else{r=n.gq();++l
if(!n.l()){if(l<=4){C.a.p(b,H.a(r))
return}t=H.a(r)
if(0>=b.length)return H.e(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gq();++l
for(;n.l();r=q,q=p){p=n.gq();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2;--l}C.a.p(b,"...")
return}}s=H.a(r)
t=H.a(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.p(b,o)
C.a.p(b,s)
C.a.p(b,t)},
j0:function(a,b){var u,t,s=P.c1(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.W)(a),++t)s.p(0,H.n(a[t],b))
return s},
eu:function(a){var u,t={}
if(P.im(a))return"{...}"
u=new P.au("")
try{C.a.p($.ac,a)
u.a+="{"
t.a=!0
a.w(0,new P.ev(t,u))
u.a+="}"}finally{if(0>=$.ac.length)return H.e($.ac,-1)
$.ac.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
h2:function h2(){},
h5:function h5(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
h3:function h3(a,b){this.a=a
this.$ti=b},
h4:function h4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hc:function hc(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bG:function bG(a){this.a=a
this.c=this.b=null},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
es:function es(){},
L:function L(){},
et:function et(){},
ev:function ev(a,b){this.a=a
this.b=b},
aF:function aF(){},
hy:function hy(){},
ew:function ew(){},
fn:function fn(){},
bC:function bC(){},
f1:function f1(){},
hk:function hk(){},
d6:function d6(){},
da:function da(){},
de:function de(){},
ls:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.h(H.ax(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.P(s)
r=P.eb(String(t),null)
throw H.h(r)}r=P.hB(u)
return r},
hB:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.h7(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.hB(a[u])
return a},
iZ:function(a,b,c){return new P.cz(a,b)},
lm:function(a){return a.f2()},
lj:function(a,b,c){var u,t=new P.au(""),s=new P.h9(t,[],P.lC())
s.bh(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
h7:function h7(a,b){this.a=a
this.b=b
this.c=null},
h8:function h8(a){this.a=a},
dx:function dx(){},
bV:function bV(){},
cz:function cz(a,b){this.a=a
this.b=b},
em:function em(a,b){this.a=a
this.b=b},
el:function el(){},
eo:function eo(a){this.b=a},
en:function en(a){this.a=a},
ha:function ha(){},
hb:function hb(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c){this.c=a
this.a=b
this.b=c},
lM:function(a){var u=H.j6(a,null)
if(u!=null)return u
throw H.h(P.eb(a,null))},
kC:function(a){if(a instanceof H.bT)return a.n(0)
return"Instance of '"+H.a(H.cH(a))+"'"},
bc:function(a,b,c){var u,t=[c],s=H.C([],t)
for(u=J.y(a);u.l();)C.a.p(s,H.n(u.gq(),c))
if(b)return s
return H.x(J.i3(s),"$io",t,"$ao")},
l0:function(a){return new H.eh(a,H.kO(a,!1,!0,!1,!1,!1))},
ja:function(a,b,c){var u=J.y(b)
if(!u.l())return a
if(c.length===0){do a+=H.a(u.gq())
while(u.l())}else{a+=H.a(u.gq())
for(;u.l();)a=a+c+H.a(u.gq())}return a},
j2:function(a,b,c,d){return new P.eE(a,b,c,d)},
ky:function(a,b){var u
if(Math.abs(a)<=864e13)u=!1
else u=!0
if(u)H.Z(P.bq("DateTime is outside valid range: "+a))
return new P.aA(a,!1)},
kz:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cr:function(a){if(a>=10)return""+a
return"0"+a},
aR:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.I(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kC(a)},
bq:function(a){return new P.ay(!1,null,null,a)},
hX:function(a,b,c){return new P.ay(!0,a,b,c)},
cK:function(a,b){return new P.cI(null,null,!0,a,b,"Value not in range")},
cJ:function(a,b,c,d,e){return new P.cI(b,c,!0,a,d,"Invalid value")},
c7:function(a,b){if(typeof a!=="number")return a.a0()
if(a<0)throw H.h(P.cJ(a,0,null,b,null))},
bx:function(a,b,c,d,e){var u=H.z(e==null?J.ae(b):e)
return new P.ec(u,!0,a,c,"Index out of range")},
D:function(a){return new P.fo(a)},
jd:function(a){return new P.fl(a)},
c9:function(a){return new P.aV(a)},
ap:function(a){return new P.dy(a)},
eb:function(a,b){return new P.ea(a,b)},
jP:function(a,b){var u=J.hW(a),t=H.j6(u,null)
if(t==null)t=H.l_(u)
if(t!=null)return t
if(b==null)throw H.h(P.eb(a,null))
return b.$1(a)},
ix:function(a){H.m0(H.a(a))},
eF:function eF(a,b){this.a=a
this.b=b},
E:function E(){},
aA:function aA(a,b){this.a=a
this.b=b},
a7:function a7(){},
b5:function b5(){},
dm:function dm(){},
cF:function cF(){},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cI:function cI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ec:function ec(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eE:function eE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fo:function fo(a){this.a=a},
fl:function fl(a){this.a=a},
aV:function aV(a){this.a=a},
dy:function dy(a){this.a=a},
eJ:function eJ(){},
cN:function cN(){},
dH:function dH(a){this.a=a},
fP:function fP(a){this.a=a},
ea:function ea(a,b){this.a=a
this.b=b},
aq:function aq(){},
H:function H(){},
p:function p(){},
ar:function ar(){},
o:function o(){},
q:function q(){},
c3:function c3(){},
B:function B(){},
a2:function a2(){},
u:function u(){},
ah:function ah(){},
O:function O(){},
j:function j(){},
au:function au(a){this.a=a},
aH:function aH(){},
dE:function dE(){},
dF:function dF(a){this.a=a},
e5:function e5(a,b){this.a=a
this.b=b},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
c0:function c0(){},
ll:function(a,b,c,d){var u,t
H.iq(b)
H.a8(d)
if(H.M(b)){u=[c]
C.a.K(u,d)
d=u}t=P.bc(J.kj(d,P.lP(),null),!0,null)
H.d(a,"$iaq")
return P.hC(H.kS(a,t,null))},
iY:function(a){return H.d(P.ip(P.kP(a)),"$iaj")},
kP:function(a){return new P.ek(new P.h5([null,null])).$1(a)},
ii:function(a,b,c){var u
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(u){H.P(u)}return!1},
jr:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
hC:function(a){var u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
u=J.k(a)
if(!!u.$iaj)return a.a
if(H.jM(a))return a
if(!!u.$ijc)return a
if(!!u.$iaA)return H.bd(a)
if(!!u.$iaq)return P.jq(a,"$dart_jsFunction",new P.hD())
return P.jq(a,"_$dart_jsObject",new P.hE($.iF()))},
jq:function(a,b,c){var u=P.jr(a,b)
if(u==null){u=c.$1(a)
P.ii(a,b,u)}return u},
ih:function(a){var u,t
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.jM(a))return a
else if(a instanceof Object&&!!J.k(a).$ijc)return a
else if(a instanceof Date){u=H.z(a.getTime())
if(Math.abs(u)<=864e13)t=!1
else t=!0
if(t)H.Z(P.bq("DateTime is outside valid range: "+u))
return new P.aA(u,!1)}else if(a.constructor===$.iF())return a.o
else return P.ip(a)},
ip:function(a){if(typeof a=="function")return P.ij(a,$.hU(),new P.hG())
if(a instanceof Array)return P.ij(a,$.iE(),new P.hH())
return P.ij(a,$.iE(),new P.hI())},
ij:function(a,b,c){var u=P.jr(a,b)
if(u==null||!(a instanceof Object)){u=c.$1(a)
P.ii(a,b,u)}return u},
aj:function aj(a){this.a=a},
ek:function ek(a){this.a=a},
c_:function c_(a){this.a=a},
bZ:function bZ(a,b){this.a=a
this.$ti=b},
hD:function hD(){},
hE:function hE(a){this.a=a},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
d4:function d4(){},
jm:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aG:function aG(a,b,c){this.a=a
this.b=b
this.$ti=c},
c8:function c8(){},
dn:function dn(a){this.a=a},
l:function l(){}},W={
m6:function(){return window},
iM:function(a){var u=document.createElement("a")
if(a!=null)u.href=a
return u},
kB:function(a,b,c){var u=document.body,t=(u&&C.m).M(u,a,b,c)
t.toString
u=W.r
u=new H.aJ(new W.a6(t),H.f(new W.dM(),{func:1,ret:P.E,args:[u]}),[u])
return H.d(u.gad(u),"$it")},
bX:function(a){var u,t,s,r="element tag unavailable"
try{u=J.al(a)
t=u.gd4(a)
if(typeof t==="string")r=u.gd4(a)}catch(s){H.P(s)}return r},
kD:function(a){var u,t=document.createElement("input"),s=H.d(t,"$ib8")
try{s.type=a}catch(u){H.P(u)}return s},
h6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jn:function(a,b,c,d){var u=W.h6(W.h6(W.h6(W.h6(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Q:function(a,b,c,d,e){var u=W.jA(new W.fO(c),W.i)
u=new W.fN(a,b,u,!1,[e])
u.cI()
return u},
jl:function(a){var u=W.iM(null),t=window.location
u=new W.bk(new W.hj(u,t))
u.dz(a)
return u},
lh:function(a,b,c,d){H.d(a,"$it")
H.w(b)
H.w(c)
H.d(d,"$ibk")
return!0},
li:function(a,b,c,d){var u,t,s
H.d(a,"$it")
H.w(b)
H.w(c)
u=H.d(d,"$ibk").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
jo:function(){var u=P.j,t=P.j0(C.i,u),s=H.b(C.i,0),r=H.f(new W.hv(),{func:1,ret:u,args:[s]}),q=H.C(["TEMPLATE"],[u])
t=new W.hu(t,P.c1(u),P.c1(u),P.c1(u),null)
t.dA(null,new H.aU(C.i,r,[s,u]),q,null)
return t},
jp:function(a){var u
if("postMessage" in a){u=W.lg(a)
return u}else return H.d(a,"$ib6")},
lg:function(a){if(a===window)return H.d(a,"$ijh")
else return new W.fH()},
jA:function(a,b){var u=$.G
if(u===C.d)return a
return u.ev(a,b)},
m:function m(){},
bP:function bP(){},
dl:function dl(){},
bQ:function bQ(){},
bt:function bt(){},
b1:function b1(){},
b2:function b2(){},
b3:function b3(){},
b4:function b4(){},
bW:function bW(){},
dG:function dG(){},
bu:function bu(){},
dI:function dI(){},
cs:function cs(){},
dJ:function dJ(){},
fE:function fE(a,b){this.a=a
this.b=b},
ab:function ab(a,b){this.a=a
this.$ti=b},
t:function t(){},
dM:function dM(){},
i:function i(){},
b6:function b6(){},
e9:function e9(){},
bw:function bw(){},
bY:function bY(){},
b8:function b8(){},
aT:function aT(){},
cA:function cA(){},
A:function A(){},
a6:function a6(a){this.a=a},
r:function r(){},
c6:function c6(){},
eY:function eY(){},
cO:function cO(){},
f9:function f9(){},
fa:function fa(){},
cb:function cb(){},
aW:function aW(){},
bf:function bf(){},
bh:function bh(){},
fu:function fu(a){this.a=a},
aX:function aX(){},
cc:function cc(){},
cY:function cY(){},
d7:function d7(){},
fA:function fA(){},
fL:function fL(a){this.a=a},
fM:function fM(a){this.a=a},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
id:function id(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fN:function fN(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fO:function fO(a){this.a=a},
dd:function dd(a,b){this.a=null
this.b=a
this.$ti=b},
ho:function ho(a,b){this.a=a
this.b=b},
bk:function bk(a){this.a=a},
af:function af(){},
cE:function cE(a){this.a=a},
eH:function eH(a){this.a=a},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(){},
hl:function hl(){},
hm:function hm(){},
hu:function hu(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hv:function hv(){},
hp:function hp(){},
cu:function cu(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
fH:function fH(){},
aa:function aa(){},
hj:function hj(a,b){this.a=a
this.b=b},
df:function df(a){this.a=a},
hz:function hz(a){this.a=a},
cX:function cX(){},
d2:function d2(){},
d3:function d3(){},
d8:function d8(){},
d9:function d9(){},
dg:function dg(){},
dh:function dh(){}},U={
iO:function(a,b,c){var u=P.H,t=U.as,s=$.ad()
if(typeof s!=="number")return H.c(s)
s=new U.an(b,c,new H.K([u,t]),new H.K([u,t]),"400 "+H.a(14*s)+"px 'Poppins', sans-serif",a)
s.af(a,b,c)
return s},
iP:function(a,b){var u,t,s,r,q,p,o="clauses",n="type",m="properties",l=b.h(0,"action"),k=l==null?"":J.I(l),j=H.z(b.h(0,"id"))
if(!!J.k(b.h(0,o)).$io)u=U.iN(a,j,k)
else if(J.Y(b.h(0,n),"clause")){l=P.H
t=U.as
s=$.ad()
if(typeof s!=="number")return H.c(s)
u=new U.ao(j,k,new H.K([l,t]),new H.K([l,t]),"400 "+H.a(14*s)+"px 'Poppins', sans-serif",a)
u.af(a,j,k)
u.k1=!1}else u=U.iO(a,j,k)
b.i(0,"id",u.a)
l=b.h(0,n)
u.d=l==null?"":J.I(l)
l=b.h(0,"format")
u.e=l==null?null:J.I(l)
l=b.h(0,"blockColor")
t=u.dy
u.dy=l==null?t:J.I(l)
l=b.h(0,"textColor")
t=u.fr
u.fr=l==null?t:J.I(l)
l=b.h(0,"borderColor")
t=u.fx
u.fx=l==null?t:J.I(l)
l=b.h(0,"font")
t=u.fy
u.fy=l==null?t:J.I(l)
u.k1=!U.iz(b.h(0,"start"),!1)
u.go=U.iz(b.h(0,"required"),u.go)
if(!!J.k(b.h(0,"params")).$io)for(l=J.y(H.S(b.h(0,"params"),"$ip")),t=u.cy;l.l();){r=U.ia(u,H.d(l.gq(),"$iq"))
t.i(0,r.a,r)}if(!!J.k(b.h(0,m)).$io)for(l=J.y(H.S(b.h(0,m),"$ip")),t=u.db;l.l();){q=U.ia(u,H.d(l.gq(),"$iq"))
t.i(0,q.a,q)}l=u.db.a
t=$.v()
if(typeof t!=="number")return H.c(t)
u.y=(1+l)*t
l=!!u.$ibs
if(l&&!!J.k(b.h(0,o)).$io)for(t=J.y(H.S(b.h(0,o),"$ip"));t.l();){p=t.gq()
J.k8(p,n,"clause")
u.c7(H.jL(U.iP(a,H.d(p,"$iq")),"$iao"))}if(l&&b.h(0,"end")!=null){l=u.S
t=J.X(b.h(0,"end"),"format")
l.e=t==null?null:J.I(t)}return u},
iN:function(a,b,c){var u,t,s="px 'Poppins', sans-serif",r=H.C([],[U.ao]),q=P.H,p=U.as,o=$.ad()
if(typeof o!=="number")return H.c(o)
u=new U.bs(r,b,c,new H.K([q,p]),new H.K([q,p]),"400 "+H.a(14*o)+s,a)
u.af(a,b,c)
t="end-"+H.a(c)
q=new U.ct(null,t,new H.K([q,p]),new H.K([q,p]),"400 "+H.a(14*o)+s,a)
q.af(a,null,t)
q.k1=!1
t=$.v()
if(typeof t!=="number")return t.an()
q.y=t/2
q.e=""
u.S=q
q.N=u
C.a.p(r,q)
u.x1=u.S
return u},
kw:function(a,b,c){var u
if($.cp==null){u=new H.K([P.j,U.co])
$.cp=u
u.i(0,"NetLogo",new U.eD())
$.cp.i(0,"plain",new U.eO())}if($.cp.t(a))return $.cp.h(0,a).ct(b,c)
else return C.h.bK(c,null)},
lB:function(a,b){var u,t="action",s=J.k(a)
if(!s.$io||s.gj(a)===0||J.X(s.h(a,0),t)==null)return-1
u=J.k(b)
if(!u.$io||u.gj(b)===0||J.X(u.h(b,0),t)==null)return 1
return J.kc(J.X(s.h(a,0),t),J.X(u.h(b,0),t))},
j4:function(a,b){var u=$.v()
if(typeof u!=="number")return u.m()
u=new U.as(a,u*0.6)
u.ao(a,b)
return u},
ia:function(a,b){var u=b.h(0,"type")
switch(u==null?"num":J.I(u)){case"int":u=$.v()
if(typeof u!=="number")return u.m()
u=new U.ed(a,u*0.6)
u.ao(a,b)
u.c3(a,b)
u.cy=1
return u
case"num":return U.i1(a,b)
case"bool":return U.i1(a,b)
case"range":u=$.v()
if(typeof u!=="number")return u.m()
u=new U.eS(a,u*0.6)
u.ao(a,b)
u.c3(a,b)
u.r1=U.aN(b.h(0,"min"),u.r1)
u.r2=U.aN(b.h(0,"max"),u.r2)
return u
case"select":return U.j7(a,b)
case"text":return U.j4(a,b)
default:return U.j4(a,b)}},
j7:function(a,b){var u,t="values",s=$.v()
if(typeof s!=="number")return s.m()
s=new U.eZ([],a,s*0.6)
s.ao(a,b)
if(!!J.k(b.h(0,t)).$io&&J.iH(J.ae(b.h(0,t)),0)){u=H.a8(b.h(0,t))
s.cx=u
s.cy=s.cc(J.X(u,0))
s.c=J.X(J.X(s.cx,0),"actual")}return s},
i1:function(a,b){var u,t=$.v()
if(typeof t!=="number")return t.m()
t=new U.dO(a,t*0.6)
t.ao(a,b)
u=new U.dN(a.id)
u.c=new U.aB(u,H.w(b.h(0,"type")),H.C([],[U.aB]))
t.cx=u
u.aB(t.c)
return t},
iT:function(a,b){var u=H.C([],[U.an]),t=H.C([],[U.cR]),s=P.H,r=U.bD,q=H.C([],[r]),p=[P.a7]
p=new U.bU(2,a,u,b,[],[],new U.fd(t,new H.K([s,U.cQ])),q,new H.K([s,r]),new U.bA(H.C([1,0,0,0,1,0,0,0,1],p)),new U.bA(H.C([1,0,0,0,1,0,0,0,1],p)),new P.aA(Date.now(),!1))
p.dw(a,b)
return p},
lo:function(a,b){var u,t="version"
H.x(b,"$iq",[P.j,P.u],"$aq")
u=H.z(H.M(b.t(t))?b.h(0,t):0)
if(typeof u!=="number")return u.C()
if(u>2)H.Z("Somehow the given model version ("+u+") is greater than the supported NetTango version (2).")
if(u<1)U.jf(b)
if(u<2)U.ic(b,U.hR(),U.hR())
b.i(0,t,2)
$.a1.i(0,a,U.iT(a,b))
$.a1.h(0,a).L()},
kJ:function(a,b){var u
H.w(a)
H.w(b)
if($.a1.h(0,a) instanceof U.bU)$.a1.h(0,a).eW()
u=C.h.cR(0,b,null)
if(!!J.k(u).$iq)U.lo(a,u)},
kI:function(a){var u,t,s,r,q=C.h.cR(0,H.w(a),null)
if(!!J.k(q).$iq)for(u=J.y(q.gA()),t=[P.j,P.u];u.l();){s=u.gq()
if($.a1.h(0,s) instanceof U.bU){r=$.a1.h(0,s)
C.a.sj(r.a,0)
C.a.sj(r.x,0)
C.a.G(r.fr.c,r)}if(!!J.k(q.h(0,s)).$iq){H.w(s)
r=H.d(q.h(0,s),"$iq")
U.lb(H.x(r,"$iq",t,"$aq"))
$.a1.i(0,s,U.iT(s,r))
$.a1.h(0,s).L()}}},
kH:function(a,b){H.w(a)
H.w(b)
if($.a1.t(a))return U.kw(b,a,$.a1.h(0,a).bL())
return},
kL:function(a){var u
H.w(a)
if($.a1.t(a)){u=$.a1.h(0,a).Q
u.i(0,"program",$.a1.h(0,a).bL())
return C.h.bK(u,null)}},
kK:function(){var u,t,s,r=P.i8()
for(u=$.a1,u=new H.aD(u,[H.b(u,0)]),u=u.gu(u);u.l();){t=u.d
s=$.a1.h(0,t).Q
s.i(0,"program",$.a1.h(0,t).bL())
r.i(0,t,s)}return C.h.bK(r,null)},
jO:function(){var u=$.iG()
u.i(0,"NetTango_InitWorkspace",U.lX())
u.i(0,"NetTango_InitAllWorkspaces",U.lW())
u.i(0,"NetTango_ExportCode",U.lV())
u.i(0,"NetTango_Save",U.lZ())
u.i(0,"NetTango_SaveAll",U.lY())},
hZ:function(a){var u,t,s=new U.cq()
s.a=-1
u=J.al(a)
t=u.gcZ(a).a
t.toString
s.d=s.c=t
u=u.gcZ(a).b
u.toString
s.f=s.e=u
s.Q=!0
return s},
iA:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{u=P.lM(a)
return u}catch(t){if(!!J.k(H.P(t)).$ii0)return b
else throw t}return b},
aN:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{u=P.jP(a,null)
return u}catch(t){if(!!J.k(H.P(t)).$ii0)return b
else throw t}return b},
iz:function(a,b){if(a==null)return b
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
jf:function(a){var u={},t=P.H,s=new H.K([P.j,t]),r=new H.K([t,t])
u.a=0
U.ic(a,new U.fq(u,s,r),new U.fr(s,r))},
je:function(a,b){var u={}
u.a=a
U.jg(b,new U.fp(u))
return u.a},
l7:function(a,b){var u,t
for(u=J.y(b),t=[P.j,P.u];u.l();){H.x(u.gq(),"$iq",t,"$aq").i(0,"id",a)
if(typeof a!=="number")return a.k();++a}return a},
l6:function(a,b,c){var u,t
if(!H.M(c.t("action")))return
u=H.w(c.h(0,"action"))
if(a.t(u)){t=a.h(0,u)
c.i(0,"id",t)
U.je(b.h(0,t),H.x(c,"$iq",[P.j,P.u],"$aq"))}},
la:function(a){U.jg(a,U.lU())},
l8:function(a){var u="values"
if(!H.M(a.t(u))||!J.k(a.h(0,u)).$io)return
a.i(0,u,J.km(J.ki(a.h(0,u),new U.fs())))},
l9:function(a){var u,t,s
for(u=J.kp(a,new U.ft()),t=J.y(u.a),u=new H.cT(t,u.b,[H.b(u,0)]),s=[P.j,P.u];u.l();)U.l8(H.x(t.gq(),"$iq",s,"$aq"))},
lb:function(a){var u="version",t=H.z(H.M(a.t(u))?a.h(0,u):0)
if(typeof t!=="number")return t.C()
if(t>2)throw H.h("Somehow the given model version ("+t+") is greater than the supported NetTango version (2).")
if(t<1)U.jf(a)
if(t<2)U.ic(a,U.hR(),U.hR())
a.i(0,u,2)},
ic:function(a,b,c){var u,t,s,r,q,p,o,n,m="blocks",l="children",k="clauses",j="program",i="chains"
if(!H.M(a.t(m))||!J.k(a.h(0,m)).$io)return
for(u=J.y(H.S(a.h(0,m),"$ip")),t=[P.j,P.u];u.l();)b.$1(H.x(u.gq(),"$iq",t,"$aq"))
for(u=J.y(H.S(a.h(0,m),"$ip"));u.l();){s=H.x(u.gq(),"$iq",t,"$aq")
if(H.M(s.t(l))&&!!J.k(s.h(0,l)).$io)for(r=J.y(H.S(s.h(0,l),"$ip"));r.l();){q=r.gq()
if(!!J.k(q).$iq)c.$1(q)}if(H.M(s.t(k))&&!!J.k(s.h(0,k)).$io)for(r=J.y(H.S(s.h(0,k),"$ip"));r.l();){p=r.gq()
o=J.k(p)
if(!!o.$iq&&H.M(p.t(l))&&!!J.k(p.h(0,l)).$io)for(o=J.y(H.S(o.h(p,l),"$ip"));o.l();)c.$1(H.d(o.gq(),"$iq"))}}if(!H.M(a.t(j))||!J.k(a.h(0,j)).$iq)return
n=H.d(a.h(0,j),"$iq")
if(!H.M(n.t(i))||!J.k(n.h(0,i)).$io)return
for(u=J.y(H.S(n.h(0,i),"$ip"));u.l();)for(t=J.y(H.a8(u.gq()));t.l();)c.$1(H.d(t.gq(),"$iq"))},
jg:function(a,b){var u="params",t="properties"
if(H.M(a.t(u))&&!!J.k(a.h(0,u)).$io)b.$1(H.a8(a.h(0,u)))
if(H.M(a.t(t))&&!!J.k(a.h(0,t)).$io)b.$1(H.a8(a.h(0,t)))},
an:function an(a,b,c,d,e,f){var _=this
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
dD:function dD(){},
ao:function ao(a,b,c,d,e,f){var _=this
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
ct:function ct(a,b,c,d,e,f){var _=this
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
bs:function bs(a,b,c,d,e,f,g){var _=this
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
aB:function aB(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c},
dZ:function dZ(a,b){this.a=a
this.b=b},
e_:function e_(a){this.a=a},
e0:function e0(a){this.a=a},
dY:function dY(a,b){this.a=a
this.b=b},
e1:function e1(){},
e4:function e4(a,b){this.a=a
this.b=b},
e2:function e2(){},
e3:function e3(a,b){this.a=a
this.b=b},
dX:function dX(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(a){this.a=a
this.c=this.b=null},
co:function co(){},
eO:function eO(){},
eD:function eD(){},
dq:function dq(a,b,c){this.a=a
this.b=b
this.d=c},
dr:function dr(a){this.a=a},
at:function at(a,b,c){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c},
as:function as(a,b){var _=this
_.a=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""
_.y=_.x=0
_.z=28
_.Q=b
_.ch=!1},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
eL:function eL(a){this.a=a},
eM:function eM(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
cG:function cG(){},
ed:function ed(a,b){var _=this
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
eS:function eS(a,b){var _=this
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
eT:function eT(){},
eU:function eU(a){this.a=a},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a,b){this.a=a
this.b=b},
eZ:function eZ(a,b,c){var _=this
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
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a){this.a=a},
dO:function dO(a,b){var _=this
_.a=_.cx=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""
_.y=_.x=0
_.z=28
_.Q=b
_.ch=!1},
dS:function dS(a,b){this.a=a
this.b=b},
dT:function dT(){},
dR:function dR(){},
dU:function dU(){},
dQ:function dQ(){},
dV:function dV(a){this.a=a},
dW:function dW(){},
dP:function dP(){},
eR:function eR(){},
dp:function dp(a,b){this.b=a
this.c=b},
br:function br(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
bU:function bU(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
dw:function dw(a){this.a=a},
dv:function dv(a){this.a=a},
du:function du(){},
bA:function bA(a){this.a=a},
fd:function fd(a,b){this.a=!1
this.c=a
this.d=b},
fe:function fe(a){this.a=a},
ff:function ff(a){this.a=a},
fg:function fg(a){this.a=a},
fh:function fh(a){this.a=a},
fi:function fi(){},
cR:function cR(){},
cQ:function cQ(a,b){this.a=a
this.b=b},
bD:function bD(){},
cq:function cq(){var _=this
_.a=null
_.b=-1
_.f=_.e=_.d=_.c=0
_.Q=_.z=_.y=_.x=!1},
fq:function fq(a,b,c){this.a=a
this.b=b
this.c=c},
fr:function fr(a,b){this.a=a
this.b=b},
fp:function fp(a){this.a=a},
fs:function fs(){},
ft:function ft(){}}
var w=[C,H,J,P,W,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.i5.prototype={}
J.R.prototype={
P:function(a,b){return a===b},
gv:function(a){return H.be(a)},
n:function(a){return"Instance of '"+H.a(H.cH(a))+"'"},
be:function(a,b){H.d(b,"$ii2")
throw H.h(P.j2(a,b.gcX(),b.gd0(),b.gcY()))}}
J.ef.prototype={
n:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$iE:1}
J.cx.prototype={
P:function(a,b){return null==b},
n:function(a){return"null"},
gv:function(a){return 0},
be:function(a,b){return this.dj(a,H.d(b,"$ii2"))},
$iB:1}
J.cy.prototype={
gv:function(a){return 0},
n:function(a){return String(a)}}
J.eP.prototype={}
J.bg.prototype={}
J.bb.prototype={
n:function(a){var u=a[$.hU()]
if(u==null)return this.dm(a)
return"JavaScript function for "+H.a(J.I(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaq:1}
J.b9.prototype={
p:function(a,b){H.n(b,H.b(a,0))
if(!!a.fixed$length)H.Z(P.D("add"))
a.push(b)},
a5:function(a,b){var u
if(!!a.fixed$length)H.Z(P.D("removeAt"))
u=a.length
if(b>=u)throw H.h(P.cK(b,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.Z(P.D("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
ac:function(a,b){var u=H.b(a,0)
return new H.aJ(a,H.f(b,{func:1,ret:P.E,args:[u]}),[u])},
K:function(a,b){var u
H.x(b,"$ip",[H.b(a,0)],"$ap")
if(!!a.fixed$length)H.Z(P.D("addAll"))
for(u=J.y(b);u.l();)a.push(u.gq())},
w:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.b(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.ap(a))}},
E:function(a,b,c){var u=H.b(a,0)
return new H.aU(a,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cL:function(a,b){var u,t
H.f(b,{func:1,ret:P.E,args:[H.b(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.M(b.$1(a[t])))return!0
if(a.length!==u)throw H.h(P.ap(a))}return!1},
a1:function(a,b){var u=H.b(a,0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
if(!!a.immutable$list)H.Z(P.D("sort"))
H.j8(a,b,u)},
D:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
gI:function(a){return a.length===0},
gbM:function(a){return a.length!==0},
n:function(a){return P.ee(a,"[","]")},
J:function(a,b){var u=H.C(a.slice(0),[H.b(a,0)])
return u},
a_:function(a){return this.J(a,!0)},
gu:function(a){return new J.b0(a,a.length,[H.b(a,0)])},
gv:function(a){return H.be(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.Z(P.D("set length"))
if(b<0)throw H.h(P.cJ(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.z(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.aZ(a,b))
if(b>=a.length||b<0)throw H.h(H.aZ(a,b))
return a[b]},
i:function(a,b,c){H.z(b)
H.n(c,H.b(a,0))
if(!!a.immutable$list)H.Z(P.D("indexed set"))
if(b>=a.length||b<0)throw H.h(H.aZ(a,b))
a[b]=c},
$iF:1,
$ip:1,
$io:1}
J.i4.prototype={}
J.b0.prototype={
gq:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.W(s))
u=t.c
if(u>=r){t.sc5(null)
return!1}t.sc5(s[u]);++t.c
return!0},
sc5:function(a){this.d=H.n(a,H.b(this,0))},
$iar:1}
J.by.prototype={
b5:function(a,b){var u
H.dj(b)
if(typeof b!=="number")throw H.h(H.ax(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbb(b)
if(this.gbb(a)===u)return 0
if(this.gbb(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbb:function(a){return a===0?1/a<0:a<0},
bg:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.h(P.D(""+a+".toInt()"))},
b9:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.D(""+a+".floor()"))},
d2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.D(""+a+".round()"))},
eV:function(a,b){var u
if(b>20)throw H.h(P.cJ(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbb(a))return"-"+u
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
k:function(a,b){if(typeof b!=="number")throw H.h(H.ax(b))
return a+b},
m:function(a,b){if(typeof b!=="number")throw H.h(H.ax(b))
return a*b},
cH:function(a,b){return(a|0)===a?a/b|0:this.ej(a,b)},
ej:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.D("Result of truncating division is "+H.a(u)+": "+H.a(a)+" ~/ "+b))},
bH:function(a,b){var u
if(a>0)u=this.eh(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eh:function(a,b){return b>31?0:a>>>b},
C:function(a,b){if(typeof b!=="number")throw H.h(H.ax(b))
return a>b},
$ia7:1,
$ia2:1}
J.cw.prototype={$iH:1}
J.cv.prototype={}
J.ba.prototype={
cQ:function(a,b){if(b<0)throw H.h(H.aZ(a,b))
if(b>=a.length)H.Z(H.aZ(a,b))
return a.charCodeAt(b)},
aJ:function(a,b){if(b>=a.length)throw H.h(H.aZ(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(typeof b!=="string")throw H.h(P.hX(b,null,null))
return a+b},
eB:function(a,b){var u=b.length,t=a.length
if(u>t)return!1
return b===this.c0(a,t-u)},
dg:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
ae:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.cK(b,null))
if(b>c)throw H.h(P.cK(b,null))
if(c>a.length)throw H.h(P.cK(c,null))
return a.substring(b,c)},
c0:function(a,b){return this.ae(a,b,null)},
eU:function(a){return a.toLowerCase()},
d9:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.aJ(r,0)===133){u=J.kM(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.cQ(r,t)===133?J.kN(r,t):q
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
b5:function(a,b){var u
H.w(b)
if(typeof b!=="string")throw H.h(H.ax(b))
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
if(b>=a.length||!1)throw H.h(H.aZ(a,b))
return a[b]},
$ij5:1,
$ij:1}
H.F.prototype={}
H.aE.prototype={
gu:function(a){var u=this
return new H.c2(u,u.gj(u),[H.J(u,"aE",0)])},
gI:function(a){return this.gj(this)===0},
ac:function(a,b){return this.dl(0,H.f(b,{func:1,ret:P.E,args:[H.J(this,"aE",0)]}))},
E:function(a,b,c){var u=H.J(this,"aE",0)
return new H.aU(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
J:function(a,b){var u,t=this,s=H.C([],[H.J(t,"aE",0)])
C.a.sj(s,t.gj(t))
for(u=0;u<t.gj(t);++u)C.a.i(s,u,t.F(0,u))
return s},
a_:function(a){return this.J(a,!0)}}
H.c2.prototype={
gq:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=J.N(s),q=r.gj(s)
if(t.b!==q)throw H.h(P.ap(s))
u=t.c
if(u>=q){t.sap(null)
return!1}t.sap(r.F(s,u));++t.c
return!0},
sap:function(a){this.d=H.n(a,H.b(this,0))},
$iar:1}
H.bz.prototype={
gu:function(a){return new H.a5(J.y(this.a),this.b,this.$ti)},
gj:function(a){return J.ae(this.a)},
F:function(a,b){return this.b.$1(J.cn(this.a,b))},
$ap:function(a,b){return[b]}}
H.bv.prototype={$iF:1,
$aF:function(a,b){return[b]}}
H.a5.prototype={
l:function(){var u=this,t=u.b
if(t.l()){u.sap(u.c.$1(t.gq()))
return!0}u.sap(null)
return!1},
gq:function(){return this.a},
sap:function(a){this.a=H.n(a,H.b(this,1))},
$aar:function(a,b){return[b]}}
H.aU.prototype={
gj:function(a){return J.ae(this.a)},
F:function(a,b){return this.b.$1(J.cn(this.a,b))},
$aF:function(a,b){return[b]},
$aaE:function(a,b){return[b]},
$ap:function(a,b){return[b]}}
H.aJ.prototype={
gu:function(a){return new H.cT(J.y(this.a),this.b,this.$ti)},
E:function(a,b,c){var u=H.b(this,0)
return new H.bz(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)}}
H.cT.prototype={
l:function(){var u,t
for(u=this.a,t=this.b;u.l();)if(H.M(t.$1(u.gq())))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cP.prototype={
gu:function(a){return new H.fb(J.y(this.a),this.b,this.$ti)}}
H.dL.prototype={
gj:function(a){var u=J.ae(this.a),t=this.b
if(u>t)return t
return u},
$iF:1}
H.fb.prototype={
l:function(){if(--this.b>=0)return this.a.l()
this.b=-1
return!1},
gq:function(){if(this.b<0)return
return this.a.gq()}}
H.cL.prototype={
gu:function(a){return new H.f2(J.y(this.a),this.b,this.$ti)}}
H.dK.prototype={
gj:function(a){var u=J.ae(this.a)-this.b
if(u>=0)return u
return 0},
$iF:1}
H.f2.prototype={
l:function(){var u,t
for(u=this.a,t=0;t<this.b;++t)u.l()
this.b=0
return u.l()},
gq:function(){return this.a.gq()}}
H.b7.prototype={
sj:function(a,b){throw H.h(P.D("Cannot change the length of a fixed-length list"))},
p:function(a,b){H.n(b,H.am(this,a,"b7",0))
throw H.h(P.D("Cannot add to a fixed-length list"))},
a5:function(a,b){throw H.h(P.D("Cannot remove from a fixed-length list"))}}
H.ca.prototype={
gv:function(a){var u=this._hashCode
if(u!=null)return u
u=536870911&664597*J.aP(this.a)
this._hashCode=u
return u},
n:function(a){return'Symbol("'+H.a(this.a)+'")'},
P:function(a,b){if(b==null)return!1
return b instanceof H.ca&&this.a==b.a},
$iaH:1}
H.dA.prototype={}
H.dz.prototype={
gI:function(a){return this.gj(this)===0},
n:function(a){return P.eu(this)},
i:function(a,b,c){H.n(b,H.b(this,0))
H.n(c,H.b(this,1))
return H.kx()},
ak:function(a,b,c,d){var u=this,t=P.er(c,d)
u.w(0,new H.dB(u,H.f(b,{func:1,ret:[P.c3,c,d],args:[H.b(u,0),H.b(u,1)]}),t))
return t},
O:function(a,b){return this.ak(a,b,null,null)},
$iq:1}
H.dB.prototype={
$2:function(a,b){var u=this.a,t=this.b.$2(H.n(a,H.b(u,0)),H.n(b,H.b(u,1)))
this.c.i(0,C.t.geL(t),t.gH(t))},
$S:function(){var u=this.a
return{func:1,ret:P.B,args:[H.b(u,0),H.b(u,1)]}}}
H.dC.prototype={
gj:function(a){return this.a},
t:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.t(b))return
return this.co(b)},
co:function(a){return this.b[H.w(a)]},
w:function(a,b){var u,t,s,r,q=this,p=H.b(q,1)
H.f(b,{func:1,ret:-1,args:[H.b(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.n(q.co(r),p))}},
gA:function(){return new H.fG(this,[H.b(this,0)])}}
H.fG.prototype={
gu:function(a){var u=this.a.c
return new J.b0(u,u.length,[H.b(u,0)])},
gj:function(a){return this.a.c.length}}
H.eg.prototype={
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
q=P.aH
p=new H.K([q,null])
for(o=0;o<t;++o){if(o>=u.length)return H.e(u,o)
n=u[o]
m=r+o
if(m<0||m>=s.length)return H.e(s,m)
p.i(0,new H.ca(n),s[m])}return new H.dA(p,[q,null])},
$ii2:1}
H.eQ.prototype={
$2:function(a,b){var u
H.w(a)
u=this.a
u.b=u.b+"$"+H.a(a)
C.a.p(this.b,a)
C.a.p(this.c,b);++u.a},
$S:19}
H.fj.prototype={
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
H.eI.prototype={
n:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.a(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ej.prototype={
n:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.a(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.a(t.a)+")"
return s+r+"' on '"+u+"' ("+H.a(t.a)+")"}}
H.fm.prototype={
n:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hS.prototype={
$1:function(a){if(!!J.k(a).$ib5)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.dc.prototype={
n:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iO:1}
H.bT.prototype={
n:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$iaq:1,
gf_:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fc.prototype={}
H.f3.prototype={
n:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bN(u)+"'"}}
H.bR.prototype={
P:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bR))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gv:function(a){var u,t=this.c
if(t==null)u=H.be(this.a)
else u=typeof t!=="object"?J.aP(t):H.be(t)
return(u^H.be(this.b))>>>0},
n:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.a(H.cH(u))+"'")}}
H.cS.prototype={
n:function(a){return this.a}}
H.dt.prototype={
n:function(a){return this.a}}
H.eX.prototype={
n:function(a){return"RuntimeError: "+H.a(this.a)}}
H.fv.prototype={
n:function(a){return"Assertion failed: "+P.aR(this.a)}}
H.K.prototype={
gj:function(a){return this.a},
gI:function(a){return this.a===0},
gA:function(){return new H.aD(this,[H.b(this,0)])},
gW:function(a){var u=this,t=H.b(u,0)
return H.j1(new H.aD(u,[t]),new H.ei(u),t,H.b(u,1))},
t:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.cl(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.cl(t,a)}else return s.eE(a)},
eE:function(a){var u=this.d
if(u==null)return!1
return this.ba(this.aO(u,J.aP(a)&0x3ffffff),a)>=0},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aP(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aP(r,b)
s=t==null?null:t.b
return s}else return q.eF(b)},
eF:function(a){var u,t,s=this.d
if(s==null)return
u=this.aO(s,J.aP(a)&0x3ffffff)
t=this.ba(u,a)
if(t<0)return
return u[t].b},
i:function(a,b,c){var u,t,s,r,q,p,o=this
H.n(b,H.b(o,0))
H.n(c,H.b(o,1))
if(typeof b==="string"){u=o.b
o.c8(u==null?o.b=o.by():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.c8(t==null?o.c=o.by():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.by()
r=J.aP(b)&0x3ffffff
q=o.aO(s,r)
if(q==null)o.bG(s,r,[o.bz(b,c)])
else{p=o.ba(q,b)
if(p>=0)q[p].b=c
else q.push(o.bz(b,c))}}},
G:function(a,b){var u=this.eG(b)
return u},
eG:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=a.gv(a)&0x3ffffff
t=q.aO(p,u)
s=q.ba(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.el(r)
if(t.length===0)q.cn(p,u)
return r.b},
b2:function(a){var u=this
if(u.a>0){u.b=u.c=u.d=u.e=u.f=null
u.a=0
u.bx()}},
w:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.b(s,0),H.b(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.ap(s))
u=u.c}},
c8:function(a,b,c){var u,t=this
H.n(b,H.b(t,0))
H.n(c,H.b(t,1))
u=t.aP(a,b)
if(u==null)t.bG(a,b,t.bz(b,c))
else u.b=c},
bx:function(){this.r=this.r+1&67108863},
bz:function(a,b){var u,t=this,s=new H.ep(H.n(a,H.b(t,0)),H.n(b,H.b(t,1)))
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
ba:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1},
n:function(a){return P.eu(this)},
aP:function(a,b){return a[b]},
aO:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
cn:function(a,b){delete a[b]},
cl:function(a,b){return this.aP(a,b)!=null},
by:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bG(t,u,t)
this.cn(t,u)
return t},
$ij_:1}
H.ei.prototype={
$1:function(a){var u=this.a
return u.h(0,H.n(a,H.b(u,0)))},
$S:function(){var u=this.a
return{func:1,ret:H.b(u,1),args:[H.b(u,0)]}}}
H.ep.prototype={}
H.aD.prototype={
gj:function(a){return this.a.a},
gI:function(a){return this.a.a===0},
gu:function(a){var u=this.a,t=new H.eq(u,u.r,this.$ti)
t.c=u.e
return t},
D:function(a,b){return this.a.t(b)}}
H.eq.prototype={
gq:function(){return this.d},
l:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.ap(t))
else{t=u.c
if(t==null){u.sc6(null)
return!1}else{u.sc6(t.a)
u.c=u.c.c
return!0}}},
sc6:function(a){this.d=H.n(a,H.b(this,0))},
$iar:1}
H.hM.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.hN.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.hO.prototype={
$1:function(a){return this.a(H.w(a))},
$S:32}
H.eh.prototype={
n:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ij5:1}
H.c5.prototype={$ijc:1}
H.cB.prototype={
gj:function(a){return a.length},
$iaS:1,
$aaS:function(){}}
H.c4.prototype={
h:function(a,b){H.z(b)
H.aL(b,a,a.length)
return a[b]},
i:function(a,b,c){H.z(b)
H.lD(c)
H.aL(b,a,a.length)
a[b]=c},
$iF:1,
$aF:function(){return[P.a7]},
$ab7:function(){return[P.a7]},
$aL:function(){return[P.a7]},
$ip:1,
$ap:function(){return[P.a7]},
$io:1,
$ao:function(){return[P.a7]}}
H.cC.prototype={
i:function(a,b,c){H.z(b)
H.z(c)
H.aL(b,a,a.length)
a[b]=c},
$iF:1,
$aF:function(){return[P.H]},
$ab7:function(){return[P.H]},
$aL:function(){return[P.H]},
$ip:1,
$ap:function(){return[P.H]},
$io:1,
$ao:function(){return[P.H]}}
H.ex.prototype={
h:function(a,b){H.z(b)
H.aL(b,a,a.length)
return a[b]}}
H.ey.prototype={
h:function(a,b){H.z(b)
H.aL(b,a,a.length)
return a[b]}}
H.ez.prototype={
h:function(a,b){H.z(b)
H.aL(b,a,a.length)
return a[b]}}
H.eA.prototype={
h:function(a,b){H.z(b)
H.aL(b,a,a.length)
return a[b]}}
H.eB.prototype={
h:function(a,b){H.z(b)
H.aL(b,a,a.length)
return a[b]}}
H.cD.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
H.aL(b,a,a.length)
return a[b]}}
H.eC.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
H.aL(b,a,a.length)
return a[b]}}
H.ce.prototype={}
H.cf.prototype={}
H.cg.prototype={}
H.ch.prototype={}
P.fx.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:9}
P.fw.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.fy.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.fz.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.hw.prototype={
dB:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bL(new P.hx(this,b),0),a)
else throw H.h(P.D("`setTimeout()` not found."))}}
P.hx.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.fB.prototype={}
P.U.prototype={
a2:function(){},
a3:function(){},
sax:function(a){this.dy=H.x(a,"$iU",this.$ti,"$aU")},
saU:function(a){this.fr=H.x(a,"$iU",this.$ti,"$aU")}}
P.bE.prototype={
gaQ:function(){return this.c<4},
dP:function(){var u=this.r
if(u!=null)return u
return this.r=new P.V($.G,[null])},
cC:function(a){var u,t
H.x(a,"$iU",this.$ti,"$aU")
u=a.fr
t=a.dy
if(u==null)this.scr(t)
else u.sax(t)
if(t==null)this.scv(u)
else t.saU(u)
a.saU(a)
a.sax(a)},
ei:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.b(p,0)
H.f(a,{func:1,ret:-1,args:[o]})
H.f(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.jD()
o=new P.cZ($.G,c,p.$ti)
o.cD()
return o}u=$.G
t=d?1:0
s=p.$ti
r=new P.U(p,u,t,s)
r.c4(a,b,c,d,o)
r.saU(r)
r.sax(r)
H.x(r,"$iU",s,"$aU")
r.dx=p.c&1
q=p.e
p.scv(r)
r.sax(null)
r.saU(q)
if(q==null)p.scr(r)
else q.sax(r)
if(p.d==p.e)P.jx(p.a)
return r},
e5:function(a){var u=this,t=u.$ti
a=H.x(H.x(a,"$ia0",t,"$aa0"),"$iU",t,"$aU")
if(a.dy===a)return
t=a.dx
if((t&2)!==0)a.dx=t|4
else{u.cC(a)
if((u.c&2)===0&&u.d==null)u.bm()}return},
aI:function(){if((this.c&4)!==0)return new P.aV("Cannot add new events after calling close")
return new P.aV("Cannot add new events while doing an addStream")},
p:function(a,b){var u=this
H.n(b,H.b(u,0))
if(!u.gaQ())throw H.h(u.aI())
u.aZ(b)},
bI:function(a){var u,t=this
if((t.c&4)!==0)return t.r
if(!t.gaQ())throw H.h(t.aI())
t.c|=4
u=t.dP()
t.ah()
return u},
cs:function(a){var u,t,s,r,q=this
H.f(a,{func:1,ret:-1,args:[[P.T,H.b(q,0)]]})
u=q.c
if((u&2)!==0)throw H.h(P.c9("Cannot fire new event. Controller is already firing an event"))
t=q.d
if(t==null)return
s=u&1
q.c=u^3
for(;t!=null;){u=t.dx
if((u&1)===s){t.dx=u|2
a.$1(t)
u=t.dx^=1
r=t.dy
if((u&4)!==0)q.cC(t)
t.dx&=4294967293
t=r}else t=t.dy}q.c&=4294967293
if(q.d==null)q.bm()},
bm:function(){var u=this
if((u.c&4)!==0&&u.r.a===0)u.r.ca(null)
P.jx(u.b)},
scr:function(a){this.d=H.x(a,"$iU",this.$ti,"$aU")},
scv:function(a){this.e=H.x(a,"$iU",this.$ti,"$aU")},
$ij9:1,
$imA:1,
$ibj:1,
$ibi:1}
P.hq.prototype={
gaQ:function(){return P.bE.prototype.gaQ.call(this)&&(this.c&2)===0},
aI:function(){if((this.c&2)!==0)return new P.aV("Cannot fire new event. Controller is already firing an event")
return this.ds()},
aZ:function(a){var u,t=this
H.n(a,H.b(t,0))
u=t.d
if(u==null)return
if(u===t.e){t.c|=2
u.ar(a)
t.c&=4294967293
if(t.d==null)t.bm()
return}t.cs(new P.hr(t,a))},
ah:function(){var u=this
if(u.d!=null)u.cs(new P.hs(u))
else u.r.ca(null)}}
P.hr.prototype={
$1:function(a){H.x(a,"$iT",[H.b(this.a,0)],"$aT").ar(this.b)},
$S:function(){return{func:1,ret:P.B,args:[[P.T,H.b(this.a,0)]]}}}
P.hs.prototype={
$1:function(a){H.x(a,"$iT",[H.b(this.a,0)],"$aT").cd()},
$S:function(){return{func:1,ret:P.B,args:[[P.T,H.b(this.a,0)]]}}}
P.fF.prototype={}
P.ht.prototype={}
P.aw.prototype={
eM:function(a){if((this.c&15)!==6)return!0
return this.b.b.bT(H.f(this.d,{func:1,ret:P.E,args:[P.u]}),a.a,P.E,P.u)},
eD:function(a){var u=this.e,t=P.u,s={futureOr:1,type:H.b(this,1)},r=this.b.b
if(H.bm(u,{func:1,args:[P.u,P.O]}))return H.hK(r.eS(u,a.a,a.b,null,t,P.O),s)
else return H.hK(r.bT(H.f(u,{func:1,args:[P.u]}),a.a,null,t),s)}}
P.V.prototype={
ge0:function(){return this.a===8},
d6:function(a,b,c){var u,t,s,r=H.b(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.G
if(u!==C.d){H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lt(b,u)}t=new P.V($.G,[c])
s=b==null?1:3
this.bk(new P.aw(t,s,a,b,[r,c]))
return t},
d5:function(a,b){return this.d6(a,null,b)},
da:function(a){var u,t
H.f(a,{func:1})
u=$.G
t=new P.V(u,this.$ti)
if(u!==C.d)a=H.f(a,{func:1,ret:null})
u=H.b(this,0)
this.bk(new P.aw(t,8,a,null,[u,u]))
return t},
eg:function(a){H.n(a,H.b(this,0))
this.a=4
this.c=a},
bk:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.d(t.c,"$iaw")
t.c=a}else{if(s===2){u=H.d(t.c,"$iV")
s=u.a
if(s<4){u.bk(a)
return}t.a=s
t.c=u.c}P.bJ(null,null,t.b,H.f(new P.fR(t,a),{func:1,ret:-1}))}},
cA:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.d(p.c,"$iaw")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.d(p.c,"$iV")
u=q.a
if(u<4){q.cA(a)
return}p.a=u
p.c=q.c}o.a=p.aY(a)
P.bJ(null,null,p.b,H.f(new P.fY(o,p),{func:1,ret:-1}))}},
aV:function(){var u=H.d(this.c,"$iaw")
this.c=null
return this.aY(u)},
aY:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aK:function(a){var u,t,s=this,r=H.b(s,0)
H.hK(a,{futureOr:1,type:r})
u=s.$ti
if(H.di(a,"$iaC",u,"$aaC"))if(H.di(a,"$iV",u,null))P.fT(a,s)
else P.ji(a,s)
else{t=s.aV()
H.n(a,r)
s.a=4
s.c=a
P.bF(s,t)}},
aL:function(a,b){var u,t=this
H.d(b,"$iO")
u=t.aV()
t.a=8
t.c=new P.a4(a,b)
P.bF(t,u)},
dJ:function(a){return this.aL(a,null)},
ca:function(a){var u=this
if(H.di(a,"$iaC",u.$ti,"$aaC")){u.dF(a)
return}u.a=1
P.bJ(null,null,u.b,H.f(new P.fS(u,a),{func:1,ret:-1}))},
dF:function(a){var u=this,t=u.$ti
H.x(a,"$iaC",t,"$aaC")
if(H.di(a,"$iV",t,null)){if(a.ge0()){u.a=1
P.bJ(null,null,u.b,H.f(new P.fX(u,a),{func:1,ret:-1}))}else P.fT(a,u)
return}P.ji(a,u)},
$iaC:1}
P.fR.prototype={
$0:function(){P.bF(this.a,this.b)},
$S:2}
P.fY.prototype={
$0:function(){P.bF(this.b,this.a.a)},
$S:2}
P.fU.prototype={
$1:function(a){var u=this.a
u.a=0
u.aK(a)},
$S:9}
P.fV.prototype={
$2:function(a,b){H.d(b,"$iO")
this.a.aL(a,b)},
$1:function(a){return this.$2(a,null)},
$C:"$2",
$D:function(){return[null]},
$S:45}
P.fW.prototype={
$0:function(){this.a.aL(this.b,this.c)},
$S:2}
P.fS.prototype={
$0:function(){var u=this.a,t=H.n(this.b,H.b(u,0)),s=u.aV()
u.a=4
u.c=t
P.bF(u,s)},
$S:2}
P.fX.prototype={
$0:function(){P.fT(this.b,this.a)},
$S:2}
P.h0.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.d3(H.f(s.d,{func:1}),null)}catch(r){u=H.P(r)
t=H.b_(r)
if(o.d){s=H.d(o.a.a.c,"$ia4").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.d(o.a.a.c,"$ia4")
else q.b=new P.a4(u,t)
q.a=!0
return}if(!!J.k(n).$iaC){if(n instanceof P.V&&n.a>=4){if(n.a===8){s=o.b
s.b=H.d(n.c,"$ia4")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.d5(new P.h1(p),null)
s.a=!1}},
$S:0}
P.h1.prototype={
$1:function(a){return this.a},
$S:40}
P.h_.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.b(s,0)
q=H.n(n.c,r)
p=H.b(s,1)
n.a.b=s.b.b.bT(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.P(o)
t=H.b_(o)
s=n.a
s.b=new P.a4(u,t)
s.a=!0}},
$S:0}
P.fZ.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.d(m.a.a.c,"$ia4")
r=m.c
if(H.M(r.eM(u))&&r.e!=null){q=m.b
q.b=r.eD(u)
q.a=!1}}catch(p){t=H.P(p)
s=H.b_(p)
r=H.d(m.a.a.c,"$ia4")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a4(t,s)
n.a=!0}},
$S:0}
P.cU.prototype={}
P.a_.prototype={
O:function(a,b){var u=H.J(this,"a_",0)
return new P.hd(H.f(b,{func:1,ret:null,args:[u]}),this,[u,null])},
gj:function(a){var u={},t=new P.V($.G,[P.H])
u.a=0
this.T(new P.f5(u,this),!0,new P.f6(u,t),t.gci())
return t},
a_:function(a){var u=H.J(this,"a_",0),t=H.C([],[u]),s=new P.V($.G,[[P.o,u]])
this.T(new P.f7(this,t),!0,new P.f8(s,t),s.gci())
return s}}
P.f5.prototype={
$1:function(a){H.n(a,H.J(this.b,"a_",0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.J(this.b,"a_",0)]}}}
P.f6.prototype={
$0:function(){this.b.aK(this.a.a)},
$C:"$0",
$R:0,
$S:2}
P.f7.prototype={
$1:function(a){C.a.p(this.b,H.n(a,H.J(this.a,"a_",0)))},
$S:function(){return{func:1,ret:P.B,args:[H.J(this.a,"a_",0)]}}}
P.f8.prototype={
$0:function(){this.a.aK(this.b)},
$C:"$0",
$R:0,
$S:2}
P.a0.prototype={}
P.f4.prototype={}
P.cV.prototype={
gv:function(a){return(H.be(this.a)^892482866)>>>0},
P:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cV&&b.a===this.a}}
P.cW.prototype={
bA:function(){return this.x.e5(this)},
a2:function(){H.x(this,"$ia0",[H.b(this.x,0)],"$aa0")},
a3:function(){H.x(this,"$ia0",[H.b(this.x,0)],"$aa0")}}
P.T.prototype={
c4:function(a,b,c,d,e){var u,t,s=this,r=H.J(s,"T",0)
H.f(a,{func:1,ret:-1,args:[r]})
s.sdE(H.f(a,{func:1,ret:null,args:[r]}))
u=b==null?P.lA():b
if(H.bm(u,{func:1,ret:-1,args:[P.u,P.O]}))s.b=s.d.d1(u,null,P.u,P.O)
else if(H.bm(u,{func:1,ret:-1,args:[P.u]}))s.b=H.f(u,{func:1,ret:null,args:[P.u]})
else H.Z(P.bq("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.f(c,{func:1,ret:-1})
t=c==null?P.jD():c
s.se3(H.f(t,{func:1,ret:-1}))},
bO:function(a){var u,t,s=this,r=s.e
if((r&8)!==0)return
u=(r+128|4)>>>0
s.e=u
if(r<128&&s.r!=null){t=s.r
if(t.a===1)t.a=3}if((r&4)===0&&(u&32)===0)s.cu(s.gaR())},
bR:function(){var u=this,t=u.e
if((t&8)!==0)return
if(t>=128){t=u.e=t-128
if(t<128)if((t&64)!==0&&u.r.c!=null)u.r.bi(u)
else{t=(t&4294967291)>>>0
u.e=t
if((t&32)===0)u.cu(u.gaS())}}},
aA:function(){var u=this,t=(u.e&4294967279)>>>0
u.e=t
if((t&8)===0)u.bn()
t=u.f
return t==null?$.dk():t},
bn:function(){var u,t=this,s=t.e=(t.e|8)>>>0
if((s&64)!==0){u=t.r
if(u.a===1)u.a=3}if((s&32)===0)t.sbD(null)
t.f=t.bA()},
ar:function(a){var u,t=this,s=H.J(t,"T",0)
H.n(a,s)
u=t.e
if((u&8)!==0)return
if(u<32)t.aZ(a)
else t.bl(new P.fI(a,[s]))},
aH:function(a,b){var u=this.e
if((u&8)!==0)return
if(u<32)this.cE(a,b)
else this.bl(new P.fK(a,b))},
cd:function(){var u=this,t=u.e
if((t&8)!==0)return
t=(t|2)>>>0
u.e=t
if(t<32)u.ah()
else u.bl(C.F)},
a2:function(){},
a3:function(){},
bA:function(){return},
bl:function(a){var u=this,t=[H.J(u,"T",0)],s=H.x(u.r,"$icj",t,"$acj")
if(s==null){s=new P.cj(t)
u.sbD(s)}s.p(0,a)
t=u.e
if((t&64)===0){t=(t|64)>>>0
u.e=t
if(t<128)u.r.bi(u)}},
aZ:function(a){var u,t=this,s=H.J(t,"T",0)
H.n(a,s)
u=t.e
t.e=(u|32)>>>0
t.d.bU(t.a,a,s)
t.e=(t.e&4294967263)>>>0
t.bq((u&4)!==0)},
cE:function(a,b){var u=this,t=u.e,s=new P.fD(u,a,b)
if((t&1)!==0){u.e=(t|16)>>>0
u.bn()
t=u.f
if(t!=null&&t!==$.dk())t.da(s)
else s.$0()}else{s.$0()
u.bq((t&4)!==0)}},
ah:function(){var u,t=this,s=new P.fC(t)
t.bn()
t.e=(t.e|16)>>>0
u=t.f
if(u!=null&&u!==$.dk())u.da(s)
else s.$0()},
cu:function(a){var u,t=this
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
s.e=r}if((r&64)!==0&&r<128)s.r.bi(s)},
sdE:function(a){this.a=H.f(a,{func:1,ret:-1,args:[H.J(this,"T",0)]})},
se3:function(a){this.c=H.f(a,{func:1,ret:-1})},
sbD:function(a){this.r=H.x(a,"$ici",[H.J(this,"T",0)],"$aci")},
$ia0:1,
$ibj:1,
$ibi:1}
P.fD.prototype={
$0:function(){var u,t,s,r=this.a,q=r.e
if((q&8)!==0&&(q&16)===0)return
r.e=(q|32)>>>0
u=r.b
q=this.b
t=P.u
s=r.d
if(H.bm(u,{func:1,ret:-1,args:[P.u,P.O]}))s.eT(u,q,this.c,t,P.O)
else s.bU(H.f(r.b,{func:1,ret:-1,args:[P.u]}),q,t)
r.e=(r.e&4294967263)>>>0},
$S:0}
P.fC.prototype={
$0:function(){var u=this.a,t=u.e
if((t&16)===0)return
u.e=(t|42)>>>0
u.d.bS(u.c)
u.e=(u.e&4294967263)>>>0},
$S:0}
P.hn.prototype={
T:function(a,b,c,d){H.f(a,{func:1,ret:-1,args:[H.b(this,0)]})
H.f(c,{func:1,ret:-1})
return this.a.ei(H.f(a,{func:1,ret:-1,args:[H.b(this,0)]}),d,c,!0===b)},
bc:function(a,b,c){return this.T(a,null,b,c)}}
P.aY.prototype={
saD:function(a){this.a=H.d(a,"$iaY")},
gaD:function(){return this.a}}
P.fI.prototype={
bP:function(a){H.x(a,"$ibi",this.$ti,"$abi").aZ(this.b)}}
P.fK.prototype={
bP:function(a){a.cE(this.b,this.c)},
$aaY:function(){}}
P.fJ.prototype={
bP:function(a){a.ah()},
gaD:function(){return},
saD:function(a){throw H.h(P.c9("No events after a done."))},
$iaY:1,
$aaY:function(){}}
P.ci.prototype={
bi:function(a){var u,t=this
H.x(a,"$ibi",t.$ti,"$abi")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.jV(new P.he(t,a))
t.a=1}}
P.he.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.x(this.b,"$ibi",[H.b(r,0)],"$abi")
t=r.b
s=t.gaD()
r.b=s
if(s==null)r.c=null
t.bP(u)},
$S:2}
P.cj.prototype={
p:function(a,b){var u,t=this
H.d(b,"$iaY")
u=t.c
if(u==null)t.b=t.c=b
else{u.saD(b)
t.c=b}}}
P.cZ.prototype={
cD:function(){var u=this
if((u.b&2)!==0)return
P.bJ(null,null,u.a,H.f(u.gef(),{func:1,ret:-1}))
u.b=(u.b|2)>>>0},
bO:function(a){this.b+=4},
bR:function(){var u=this.b
if(u>=4){u=this.b=u-4
if(u<4&&(u&1)===0)this.cD()}},
aA:function(){return $.dk()},
ah:function(){var u=this,t=u.b=(u.b&4294967293)>>>0
if(t>=4)return
u.b=(t|1)>>>0
u.a.bS(u.c)},
$ia0:1}
P.fQ.prototype={
T:function(a,b,c,d){var u,t,s=this,r=H.b(s,1)
H.f(a,{func:1,ret:-1,args:[r]})
H.f(c,{func:1,ret:-1})
b=!0===b
u=$.G
t=b?1:0
t=new P.d0(s,u,t,s.$ti)
t.c4(a,d,c,b,r)
t.scG(s.a.bc(t.gdU(),t.gdX(),t.gdZ()))
return t},
bc:function(a,b,c){return this.T(a,null,b,c)},
$aa_:function(a,b){return[b]}}
P.d0.prototype={
ar:function(a){H.n(a,H.b(this,1))
if((this.e&2)!==0)return
this.dt(a)},
aH:function(a,b){if((this.e&2)!==0)return
this.du(a,b)},
a2:function(){var u=this.y
if(u==null)return
u.bO(0)},
a3:function(){var u=this.y
if(u==null)return
u.bR()},
bA:function(){var u=this.y
if(u!=null){this.scG(null)
return u.aA()}return},
dV:function(a){this.x.dW(H.n(a,H.b(this,0)),this)},
e_:function(a,b){H.d(b,"$iO")
H.x(this,"$ibj",[H.b(this.x,1)],"$abj").aH(a,b)},
dY:function(){H.x(this,"$ibj",[H.b(this.x,1)],"$abj").cd()},
scG:function(a){this.y=H.x(a,"$ia0",[H.b(this,0)],"$aa0")},
$aa0:function(a,b){return[b]},
$abj:function(a,b){return[b]},
$abi:function(a,b){return[b]},
$aT:function(a,b){return[b]}}
P.hd.prototype={
dW:function(a,b){var u,t,s,r
H.n(a,H.b(this,0))
H.x(b,"$ibj",[H.b(this,1)],"$abj")
u=null
try{u=this.b.$1(a)}catch(r){t=H.P(r)
s=H.b_(r)
b.aH(t,s)
return}b.ar(u)}}
P.a4.prototype={
n:function(a){return H.a(this.a)},
$ib5:1}
P.hA.prototype={$imw:1}
P.hF.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cF():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.n(0)
throw u},
$S:2}
P.hf.prototype={
bS:function(a){var u,t,s,r=null
H.f(a,{func:1,ret:-1})
try{if(C.d===$.G){a.$0()
return}P.ju(r,r,this,a,-1)}catch(s){u=H.P(s)
t=H.b_(s)
P.bI(r,r,this,u,H.d(t,"$iO"))}},
bU:function(a,b,c){var u,t,s,r=null
H.f(a,{func:1,ret:-1,args:[c]})
H.n(b,c)
try{if(C.d===$.G){a.$1(b)
return}P.jw(r,r,this,a,b,-1,c)}catch(s){u=H.P(s)
t=H.b_(s)
P.bI(r,r,this,u,H.d(t,"$iO"))}},
eT:function(a,b,c,d,e){var u,t,s,r=null
H.f(a,{func:1,ret:-1,args:[d,e]})
H.n(b,d)
H.n(c,e)
try{if(C.d===$.G){a.$2(b,c)
return}P.jv(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.P(s)
t=H.b_(s)
P.bI(r,r,this,u,H.d(t,"$iO"))}},
eu:function(a,b){return new P.hh(this,H.f(a,{func:1,ret:b}),b)},
cN:function(a){return new P.hg(this,H.f(a,{func:1,ret:-1}))},
ev:function(a,b){return new P.hi(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
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
P.hh.prototype={
$0:function(){return this.a.d3(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hg.prototype={
$0:function(){return this.a.bS(this.b)},
$S:0}
P.hi.prototype={
$1:function(a){var u=this.c
return this.a.bU(this.b,H.n(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.h2.prototype={
gj:function(a){return this.a},
gI:function(a){return this.a===0},
gA:function(){return new P.h3(this,[H.b(this,0)])},
t:function(a){var u,t
if(typeof a==="string"&&a!=="__proto__"){u=this.b
return u==null?!1:u[a]!=null}else if(typeof a==="number"&&(a&1073741823)===a){t=this.c
return t==null?!1:t[a]!=null}else return this.dL(a)},
dL:function(a){var u=this.d
if(u==null)return!1
return this.a7(this.aw(u,a),a)>=0},
h:function(a,b){var u,t,s
if(typeof b==="string"&&b!=="__proto__"){u=this.b
t=u==null?null:P.jj(u,b)
return t}else if(typeof b==="number"&&(b&1073741823)===b){s=this.c
t=s==null?null:P.jj(s,b)
return t}else return this.dS(b)},
dS:function(a){var u,t,s=this.d
if(s==null)return
u=this.aw(s,a)
t=this.a7(u,a)
return t<0?null:u[t+1]},
i:function(a,b,c){var u,t,s,r,q,p=this
H.n(b,H.b(p,0))
H.n(c,H.b(p,1))
if(typeof b==="string"&&b!=="__proto__"){u=p.b
p.dI(u==null?p.b=P.jk():u,b,c)}else{t=p.d
if(t==null)t=p.d=P.jk()
s=H.jQ(b)&1073741823
r=t[s]
if(r==null){P.ie(t,s,[b,c]);++p.a
p.e=null}else{q=p.a7(r,b)
if(q>=0)r[q+1]=c
else{r.push(b,c);++p.a
p.e=null}}}},
w:function(a,b){var u,t,s,r,q=this,p=H.b(q,0)
H.f(b,{func:1,ret:-1,args:[p,H.b(q,1)]})
u=q.ck()
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(H.n(r,p),q.h(0,r))
if(u!==q.e)throw H.h(P.ap(q))}},
ck:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.e
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
H.n(b,H.b(u,0))
H.n(c,H.b(u,1))
if(a[b]==null){++u.a
u.e=null}P.ie(a,b,c)},
aw:function(a,b){return a[H.jQ(b)&1073741823]}}
P.h5.prototype={
a7:function(a,b){var u,t,s
if(a==null)return-1
u=a.length
for(t=0;t<u;t+=2){s=a[t]
if(s==null?b==null:s===b)return t}return-1}}
P.h3.prototype={
gj:function(a){return this.a.a},
gI:function(a){return this.a.a===0},
gu:function(a){var u=this.a
return new P.h4(u,u.ck(),this.$ti)},
D:function(a,b){return this.a.t(b)}}
P.h4.prototype={
gq:function(){return this.d},
l:function(){var u=this,t=u.b,s=u.c,r=u.a
if(t!==r.e)throw H.h(P.ap(r))
else if(s>=t.length){u.sas(null)
return!1}else{u.sas(t[s])
u.c=s+1
return!0}},
sas:function(a){this.d=H.n(a,H.b(this,0))},
$iar:1}
P.hc.prototype={
gu:function(a){var u=this,t=new P.d5(u,u.r,u.$ti)
t.c=u.e
return t},
gj:function(a){return this.a},
D:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibG")!=null}else{t=this.dK(b)
return t}},
dK:function(a){var u=this.d
if(u==null)return!1
return this.a7(this.aw(u,a),a)>=0},
p:function(a,b){var u,t,s=this
H.n(b,H.b(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.ce(u==null?s.b=P.ig():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.ce(t==null?s.c=P.ig():t,b)}else return s.dC(b)},
dC:function(a){var u,t,s,r=this
H.n(a,H.b(r,0))
u=r.d
if(u==null)u=r.d=P.ig()
t=r.cj(a)
s=u[t]
if(s==null)u[t]=[r.br(a)]
else{if(r.a7(s,a)>=0)return!1
s.push(r.br(a))}return!0},
G:function(a,b){var u=this
if(typeof b==="string"&&b!=="__proto__")return u.cB(u.b,b)
else if(typeof b==="number"&&(b&1073741823)===b)return u.cB(u.c,b)
else return u.e6(b)},
e6:function(a){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.aw(r,a)
t=s.a7(u,a)
if(t<0)return!1
s.cg(u.splice(t,1)[0])
return!0},
ce:function(a,b){H.n(b,H.b(this,0))
if(H.d(a[b],"$ibG")!=null)return!1
a[b]=this.br(b)
return!0},
cB:function(a,b){var u
if(a==null)return!1
u=H.d(a[b],"$ibG")
if(u==null)return!1
this.cg(u)
delete a[b]
return!0},
cf:function(){this.r=1073741823&this.r+1},
br:function(a){var u,t=this,s=new P.bG(H.n(a,H.b(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cf()
return s},
cg:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cf()},
cj:function(a){return J.aP(a)&1073741823},
aw:function(a,b){return a[this.cj(b)]},
a7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.Y(a[t].a,b))return t
return-1}}
P.bG.prototype={}
P.d5.prototype={
gq:function(){return this.d},
l:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.ap(t))
else{t=u.c
if(t==null){u.sas(null)
return!1}else{u.sas(H.n(t.a,H.b(u,0)))
u.c=u.c.b
return!0}}},
sas:function(a){this.d=H.n(a,H.b(this,0))},
$iar:1}
P.es.prototype={$iF:1,$ip:1,$io:1}
P.L.prototype={
gu:function(a){return new H.c2(a,this.gj(a),[H.am(this,a,"L",0)])},
F:function(a,b){return this.h(a,b)},
w:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.am(s,a,"L",0)]})
u=s.gj(a)
for(t=0;t<u;++t){b.$1(s.h(a,t))
if(u!==s.gj(a))throw H.h(P.ap(a))}},
gI:function(a){return this.gj(a)===0},
gbM:function(a){return!this.gI(a)},
ac:function(a,b){var u=H.am(this,a,"L",0)
return new H.aJ(a,H.f(b,{func:1,ret:P.E,args:[u]}),[u])},
E:function(a,b,c){var u=H.am(this,a,"L",0)
return new H.aU(a,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
J:function(a,b){var u,t=this,s=H.C([],[H.am(t,a,"L",0)])
C.a.sj(s,t.gj(a))
for(u=0;u<t.gj(a);++u)C.a.i(s,u,t.h(a,u))
return s},
a_:function(a){return this.J(a,!0)},
p:function(a,b){var u,t=this
H.n(b,H.am(t,a,"L",0))
u=t.gj(a)
t.sj(a,u+1)
t.i(a,u,b)},
dH:function(a,b,c){var u,t=this,s=t.gj(a),r=c-b
for(u=c;u<s;++u)t.i(a,u-r,t.h(a,u))
t.sj(a,s-r)},
a1:function(a,b){var u=H.am(this,a,"L",0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
H.j8(a,b,u)},
a5:function(a,b){var u=this.h(a,b)
this.dH(a,b,b+1)
return u},
n:function(a){return P.ee(a,"[","]")}}
P.et.prototype={}
P.ev.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.a(a)
t.a=u+": "
t.a+=H.a(b)},
$S:10}
P.aF.prototype={
w:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.J(s,"aF",0),H.J(s,"aF",1)]})
for(u=J.y(s.gA());u.l();){t=u.gq()
b.$2(t,s.h(0,t))}},
ak:function(a,b,c,d){var u,t,s,r,q=this
H.f(b,{func:1,ret:[P.c3,c,d],args:[H.J(q,"aF",0),H.J(q,"aF",1)]})
u=P.er(c,d)
for(t=J.y(q.gA());t.l();){s=t.gq()
r=b.$2(s,q.h(0,s))
u.i(0,C.t.geL(r),r.gH(r))}return u},
O:function(a,b){return this.ak(a,b,null,null)},
t:function(a){return J.kd(this.gA(),a)},
gj:function(a){return J.ae(this.gA())},
gI:function(a){return J.kg(this.gA())},
n:function(a){return P.eu(this)},
$iq:1}
P.hy.prototype={
i:function(a,b,c){H.n(b,H.b(this,0))
H.n(c,H.b(this,1))
throw H.h(P.D("Cannot modify unmodifiable map"))}}
P.ew.prototype={
h:function(a,b){return this.a.h(0,b)},
i:function(a,b,c){this.a.i(0,H.n(b,H.b(this,0)),H.n(c,H.b(this,1)))},
t:function(a){return this.a.t(a)},
w:function(a,b){this.a.w(0,H.f(b,{func:1,ret:-1,args:[H.b(this,0),H.b(this,1)]}))},
gI:function(a){return this.a.a===0},
gj:function(a){return this.a.a},
gA:function(){var u=this.a
return new H.aD(u,[H.b(u,0)])},
n:function(a){return P.eu(this.a)},
ak:function(a,b,c,d){return this.a.ak(0,H.f(b,{func:1,ret:[P.c3,c,d],args:[H.b(this,0),H.b(this,1)]}),c,d)},
O:function(a,b){return this.ak(a,b,null,null)},
$iq:1}
P.fn.prototype={}
P.bC.prototype={
J:function(a,b){var u,t,s,r=this,q=H.C([],[H.J(r,"bC",0)])
C.a.sj(q,r.gj(r))
for(u=r.U(),u=P.cd(u,u.r,H.b(u,0)),t=0;u.l();t=s){s=t+1
C.a.i(q,t,u.d)}return q},
a_:function(a){return this.J(a,!0)},
E:function(a,b,c){var u=H.J(this,"bC",0)
return new H.bv(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
n:function(a){return P.ee(this,"{","}")},
F:function(a,b){var u,t,s
P.c7(b,"index")
for(u=this.U(),u=P.cd(u,u.r,H.b(u,0)),t=0;u.l();){s=u.d
if(b===t)return s;++t}throw H.h(P.bx(b,this,"index",null,t))}}
P.f1.prototype={$iF:1,$ip:1,$iah:1}
P.hk.prototype={
K:function(a,b){var u
for(u=J.y(H.x(b,"$ip",this.$ti,"$ap"));u.l();)this.p(0,u.gq())},
J:function(a,b){var u,t,s,r=this,q=H.C([],r.$ti)
C.a.sj(q,r.a)
for(u=P.cd(r,r.r,H.b(r,0)),t=0;u.l();t=s){s=t+1
C.a.i(q,t,u.d)}return q},
a_:function(a){return this.J(a,!0)},
E:function(a,b,c){var u=H.b(this,0)
return new H.bv(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
n:function(a){return P.ee(this,"{","}")},
bN:function(a,b){var u,t=P.cd(this,this.r,H.b(this,0))
if(!t.l())return""
if(b===""){u=""
do u+=H.a(t.d)
while(t.l())}else{u=H.a(t.d)
for(;t.l();)u=u+b+H.a(t.d)}return u.charCodeAt(0)==0?u:u},
F:function(a,b){var u,t,s,r=this
P.c7(b,"index")
for(u=P.cd(r,r.r,H.b(r,0)),t=0;u.l();){s=u.d
if(b===t)return s;++t}throw H.h(P.bx(b,r,"index",null,t))},
$iF:1,
$ip:1,
$iah:1}
P.d6.prototype={}
P.da.prototype={}
P.de.prototype={}
P.h7.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.e4(b):u}},
gj:function(a){return this.b==null?this.c.a:this.at().length},
gI:function(a){return this.gj(this)===0},
gA:function(){if(this.b==null){var u=this.c
return new H.aD(u,[H.b(u,0)])}return new P.h8(this)},
i:function(a,b,c){var u,t,s=this
if(s.b==null)s.c.i(0,b,c)
else if(s.t(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.em().i(0,b,c)},
t:function(a){if(this.b==null)return this.c.t(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
w:function(a,b){var u,t,s,r,q=this
H.f(b,{func:1,ret:-1,args:[P.j,,]})
if(q.b==null)return q.c.w(0,b)
u=q.at()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.hB(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.h(P.ap(q))}},
at:function(){var u=H.a8(this.c)
if(u==null)u=this.c=H.C(Object.keys(this.a),[P.j])
return u},
em:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.er(P.j,null)
t=p.at()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.i(0,q,p.h(0,q))}if(r===0)C.a.p(t,null)
else C.a.sj(t,0)
p.a=p.b=null
return p.c=u},
e4:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.hB(this.a[a])
return this.b[a]=u},
$aaF:function(){return[P.j,null]},
$aq:function(){return[P.j,null]}}
P.h8.prototype={
gj:function(a){var u=this.a
return u.gj(u)},
F:function(a,b){var u=this.a
if(u.b==null)u=u.gA().F(0,b)
else{u=u.at()
if(b<0||b>=u.length)return H.e(u,b)
u=u[b]}return u},
gu:function(a){var u=this.a
if(u.b==null){u=u.gA()
u=u.gu(u)}else{u=u.at()
u=new J.b0(u,u.length,[H.b(u,0)])}return u},
D:function(a,b){return this.a.t(b)},
$aF:function(){return[P.j]},
$aaE:function(){return[P.j]},
$ap:function(){return[P.j]}}
P.dx.prototype={}
P.bV.prototype={}
P.cz.prototype={
n:function(a){var u=P.aR(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.em.prototype={
n:function(a){return"Cyclic error in JSON stringify"}}
P.el.prototype={
cR:function(a,b,c){var u=P.ls(b,this.gez().a)
return u},
bK:function(a,b){var u=P.lj(a,this.geA().b,null)
return u},
geA:function(){return C.J},
gez:function(){return C.I}}
P.eo.prototype={
$abV:function(){return[P.u,P.j]}}
P.en.prototype={
$abV:function(){return[P.j,P.u]}}
P.ha.prototype={
dd:function(a){var u,t,s,r,q,p,o=a.length
for(u=J.it(a),t=this.c,s=0,r=0;r<o;++r){q=u.aJ(a,r)
if(q>92)continue
if(q<32){if(r>s)t.a+=C.e.ae(a,s,r)
s=r+1
t.a+=H.ag(92)
switch(q){case 8:t.a+=H.ag(98)
break
case 9:t.a+=H.ag(116)
break
case 10:t.a+=H.ag(110)
break
case 12:t.a+=H.ag(102)
break
case 13:t.a+=H.ag(114)
break
default:t.a+=H.ag(117)
t.a+=H.ag(48)
t.a+=H.ag(48)
p=q>>>4&15
t.a+=H.ag(p<10?48+p:87+p)
p=q&15
t.a+=H.ag(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)t.a+=C.e.ae(a,s,r)
s=r+1
t.a+=H.ag(92)
t.a+=H.ag(q)}}if(s===0)t.a+=H.a(a)
else if(s<o)t.a+=u.ae(a,s,o)},
bo:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.h(new P.em(a,null))}C.a.p(u,a)},
bh:function(a){var u,t,s,r,q=this
if(q.dc(a))return
q.bo(a)
try{u=q.b.$1(a)
if(!q.dc(u)){s=P.iZ(a,null,q.gcz())
throw H.h(s)}s=q.a
if(0>=s.length)return H.e(s,-1)
s.pop()}catch(r){t=H.P(r)
s=P.iZ(a,t,q.gcz())
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
u=J.N(a)
if(u.gbM(a)){this.bh(u.h(a,0))
for(t=1;t<u.gj(a);++t){s.a+=","
this.bh(u.h(a,t))}}s.a+="]"},
eY:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gI(a)){o.c.a+="{}"
return!0}u=a.gj(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.w(0,new P.hb(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.dd(H.w(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.e(t,p)
o.bh(t[p])}r.a+="}"
return!0}}
P.hb.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.i(u,t.a++,a)
C.a.i(u,t.a++,b)},
$S:10}
P.h9.prototype={
gcz:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.eF.prototype={
$2:function(a,b){var u,t,s
H.d(a,"$iaH")
u=this.b
t=this.a
u.a+=t.a
s=u.a+=H.a(a.a)
u.a=s+": "
u.a+=P.aR(b)
t.a=", "},
$S:30}
P.E.prototype={}
P.aA.prototype={
p:function(a,b){return P.ky(C.f.k(this.a,H.d(b,"$imf").gf1()),!1)},
P:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
b5:function(a,b){return C.f.b5(this.a,H.d(b,"$iaA").a)},
gv:function(a){var u=this.a
return(u^C.f.bH(u,30))&1073741823},
n:function(a){var u=this,t=P.kz(H.kZ(u)),s=P.cr(H.kX(u)),r=P.cr(H.kT(u)),q=P.cr(H.kU(u)),p=P.cr(H.kW(u)),o=P.cr(H.kY(u)),n=P.kA(H.kV(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.a7.prototype={}
P.b5.prototype={}
P.dm.prototype={
n:function(a){return"Assertion failed"}}
P.cF.prototype={
n:function(a){return"Throw of null."}}
P.ay.prototype={
gbw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbv:function(){return""},
n:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.a(p)
t=q.gbw()+o+u
if(!q.a)return t
s=q.gbv()
r=P.aR(q.b)
return t+s+": "+r}}
P.cI.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.a(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.a(s)
else if(t>s)u=": Not in range "+H.a(s)+".."+H.a(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.a(s)}return u}}
P.ec.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t=H.z(this.b)
if(typeof t!=="number")return t.a0()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.a(u)},
gj:function(a){return this.f}}
P.eE.prototype={
n:function(a){var u,t,s,r,q,p,o,n,m=this,l={},k=new P.au("")
l.a=""
for(u=m.c,t=u.length,s=0,r="",q="";s<t;++s,q=", "){p=u[s]
k.a=r+q
r=k.a+=P.aR(p)
l.a=", "}m.d.w(0,new P.eF(l,k))
o=P.aR(m.a)
n=k.n(0)
u="NoSuchMethodError: method not found: '"+H.a(m.b.a)+"'\nReceiver: "+o+"\nArguments: ["+n+"]"
return u}}
P.fo.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.fl.prototype={
n:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aV.prototype={
n:function(a){return"Bad state: "+this.a}}
P.dy.prototype={
n:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aR(u)+"."}}
P.eJ.prototype={
n:function(a){return"Out of Memory"},
$ib5:1}
P.cN.prototype={
n:function(a){return"Stack Overflow"},
$ib5:1}
P.dH.prototype={
n:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.fP.prototype={
n:function(a){return"Exception: "+this.a},
$ii0:1}
P.ea.prototype={
n:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.a(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.e.ae(r,0,75)+"...":r
return s+"\n"+u}else return s},
$ii0:1}
P.aq.prototype={}
P.H.prototype={}
P.p.prototype={
E:function(a,b,c){var u=H.J(this,"p",0)
return H.j1(this,H.f(b,{func:1,ret:c,args:[u]}),u,c)},
O:function(a,b){return this.E(a,b,null)},
ac:function(a,b){var u=H.J(this,"p",0)
return new H.aJ(this,H.f(b,{func:1,ret:P.E,args:[u]}),[u])},
J:function(a,b){return P.bc(this,!0,H.J(this,"p",0))},
a_:function(a){return this.J(a,!0)},
gj:function(a){var u,t=this.gu(this)
for(u=0;t.l();)++u
return u},
geC:function(a){var u=this.gu(this)
if(!u.l())throw H.h(H.iW())
return u.gq()},
gad:function(a){var u,t=this.gu(this)
if(!t.l())throw H.h(H.iW())
u=t.gq()
if(t.l())throw H.h(H.kF())
return u},
F:function(a,b){var u,t,s
P.c7(b,"index")
for(u=this.gu(this),t=0;u.l();){s=u.gq()
if(b===t)return s;++t}throw H.h(P.bx(b,this,"index",null,t))},
n:function(a){return P.kE(this,"(",")")}}
P.ar.prototype={}
P.o.prototype={$iF:1,$ip:1}
P.q.prototype={}
P.c3.prototype={}
P.B.prototype={
gv:function(a){return P.u.prototype.gv.call(this,this)},
n:function(a){return"null"}}
P.a2.prototype={}
P.u.prototype={constructor:P.u,$iu:1,
P:function(a,b){return this===b},
gv:function(a){return H.be(this)},
n:function(a){return"Instance of '"+H.a(H.cH(this))+"'"},
be:function(a,b){H.d(b,"$ii2")
throw H.h(P.j2(this,b.gcX(),b.gd0(),b.gcY()))},
toString:function(){return this.n(this)}}
P.ah.prototype={}
P.O.prototype={}
P.j.prototype={$ij5:1}
P.au.prototype={
gj:function(a){return this.a.length},
n:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$imk:1}
P.aH.prototype={}
W.m.prototype={$im:1}
W.bP.prototype={
n:function(a){return String(a)},
$ibP:1}
W.dl.prototype={
n:function(a){return String(a)}}
W.bQ.prototype={$ibQ:1}
W.bt.prototype={$ibt:1}
W.b1.prototype={$ib1:1}
W.b2.prototype={
bZ:function(a,b){return a.getContext(b)},
$ib2:1}
W.b3.prototype={
cU:function(a,b,c,d){a.fillText(b,c,d)},
$ib3:1}
W.b4.prototype={
gj:function(a){return a.length}}
W.bW.prototype={
gj:function(a){return a.length}}
W.dG.prototype={}
W.bu.prototype={$ibu:1}
W.dI.prototype={
n:function(a){return String(a)}}
W.cs.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
P:function(a,b){if(b==null)return!1
if(!J.k(b).$iib)return!1
return a.left===b.left&&a.top===b.top&&a.width===b.width&&a.height===b.height},
gv:function(a){return W.jn(C.c.gv(a.left),C.c.gv(a.top),C.c.gv(a.width),C.c.gv(a.height))},
$iib:1,
$aib:function(){return[P.a2]}}
W.dJ.prototype={
p:function(a,b){return a.add(H.w(b))},
gj:function(a){return a.length}}
W.fE.prototype={
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
sj:function(a,b){throw H.h(P.D("Cannot resize element lists"))},
p:function(a,b){H.d(b,"$it")
this.a.appendChild(b)
return b},
gu:function(a){var u=this.a_(this)
return new J.b0(u,u.length,[H.b(u,0)])},
a1:function(a,b){H.f(b,{func:1,ret:P.H,args:[W.t,W.t]})
throw H.h(P.D("Cannot sort element lists"))},
b2:function(a){J.iJ(this.a)},
a5:function(a,b){var u,t=this.b
if(b>=t.length)return H.e(t,b)
u=H.d(t[b],"$it")
this.a.removeChild(u)
return u},
$aF:function(){return[W.t]},
$aL:function(){return[W.t]},
$ap:function(){return[W.t]},
$ao:function(){return[W.t]}}
W.ab.prototype={
gj:function(a){return this.a.length},
h:function(a,b){var u
H.z(b)
u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return H.n(u[b],H.b(this,0))},
i:function(a,b,c){H.z(b)
H.n(c,H.b(this,0))
throw H.h(P.D("Cannot modify list"))},
sj:function(a,b){throw H.h(P.D("Cannot modify list"))},
a1:function(a,b){var u=H.b(this,0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
throw H.h(P.D("Cannot sort list"))},
$ia9:1}
W.t.prototype={
ges:function(a){return new W.fL(a)},
gcO:function(a){return new W.fE(a,a.children)},
gcP:function(a){return new W.fM(a)},
aa:function(a,b){this.cV(a,"beforeend",b,null,null)},
n:function(a){return a.localName},
cV:function(a,b,c,d,e){var u,t=this.M(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(t,a)
break
case"afterbegin":u=a.childNodes
a.insertBefore(t,u.length>0?u[0]:null)
break
case"beforeend":a.appendChild(t)
break
case"afterend":a.parentNode.insertBefore(t,a.nextSibling)
break
default:H.Z(P.bq("Invalid position "+b))}},
M:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.iV
if(u==null){u=H.C([],[W.aa])
t=new W.cE(u)
C.a.p(u,W.jl(null))
C.a.p(u,W.jo())
$.iV=t
d=t}else d=u
u=$.iU
if(u==null){u=new W.df(d)
$.iU=u
c=u}else{u.a=d
c=u}}if($.aQ==null){u=document
t=u.implementation.createHTMLDocument("")
$.aQ=t
$.i_=t.createRange()
t=$.aQ.createElement("base")
H.d(t,"$ibQ")
t.href=u.baseURI
$.aQ.head.appendChild(t)}u=$.aQ
if(u.body==null){t=u.createElement("body")
u.body=H.d(t,"$ib1")}u=$.aQ
if(!!this.$ib1)s=u.body
else{s=u.createElement(a.tagName)
$.aQ.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.L,a.tagName)){$.i_.selectNodeContents(s)
r=$.i_.createContextualFragment(b)}else{s.innerHTML=b
r=$.aQ.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aQ.body
if(s==null?u!=null:s!==u)J.bO(s)
c.c_(r)
document.adoptNode(r)
return r},
ey:function(a,b,c){return this.M(a,b,c,null)},
a6:function(a,b){a.textContent=null
a.appendChild(this.M(a,b,null,null))},
$it:1,
gd4:function(a){return a.tagName}}
W.dM.prototype={
$1:function(a){return!!J.k(H.d(a,"$ir")).$it},
$S:11}
W.i.prototype={$ii:1}
W.b6.prototype={
dD:function(a,b,c,d){return a.addEventListener(b,H.bL(H.f(c,{func:1,args:[W.i]}),1),!1)},
e8:function(a,b,c,d){return a.removeEventListener(b,H.bL(H.f(c,{func:1,args:[W.i]}),1),!1)},
$ib6:1}
W.e9.prototype={
gj:function(a){return a.length}}
W.bw.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.z(b)
H.d(c,"$ir")
throw H.h(P.D("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.h(P.D("Cannot resize immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.r]},
$iaS:1,
$aaS:function(){return[W.r]},
$aL:function(){return[W.r]},
$ip:1,
$ap:function(){return[W.r]},
$io:1,
$ao:function(){return[W.r]},
$ibw:1,
$aaf:function(){return[W.r]}}
W.bY.prototype={$ibY:1}
W.b8.prototype={$ib8:1}
W.aT.prototype={$iaT:1}
W.cA.prototype={
n:function(a){return String(a)},
$icA:1}
W.A.prototype={
gcZ:function(a){var u,t,s,r,q,p
if(!!a.offsetX)return new P.aG(a.offsetX,a.offsetY,[P.a2])
else{u=a.target
if(!J.k(W.jp(u)).$it)throw H.h(P.D("offsetX is only supported on elements"))
t=H.d(W.jp(u),"$it")
u=a.clientX
s=a.clientY
r=[P.a2]
q=t.getBoundingClientRect()
p=q.left
q=q.top
H.x(new P.aG(p,q,r),"$iaG",r,"$aaG")
if(typeof u!=="number")return u.R()
if(typeof s!=="number")return s.R()
return new P.aG(C.c.bg(u-p),C.c.bg(s-q),r)}},
$iA:1}
W.a6.prototype={
gad:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.h(P.c9("No elements"))
if(t>1)throw H.h(P.c9("More than one element"))
return u.firstChild},
p:function(a,b){this.a.appendChild(H.d(b,"$ir"))},
K:function(a,b){var u,t,s,r
H.x(b,"$ip",[W.r],"$ap")
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
return new W.cu(u,u.length,[H.am(C.O,u,"af",0)])},
a1:function(a,b){H.f(b,{func:1,ret:P.H,args:[W.r,W.r]})
throw H.h(P.D("Cannot sort Node list"))},
gj:function(a){return this.a.childNodes.length},
sj:function(a,b){throw H.h(P.D("Cannot set length on immutable List."))},
h:function(a,b){var u
H.z(b)
u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aF:function(){return[W.r]},
$aL:function(){return[W.r]},
$ap:function(){return[W.r]},
$ao:function(){return[W.r]}}
W.r.prototype={
V:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
eR:function(a,b){var u,t
try{u=a.parentNode
J.kb(u,b,a)}catch(t){H.P(t)}return a},
dG:function(a){var u
for(;u=a.firstChild,u!=null;)a.removeChild(u)},
n:function(a){var u=a.nodeValue
return u==null?this.dk(a):u},
e9:function(a,b,c){return a.replaceChild(b,c)},
$ir:1}
W.c6.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.z(b)
H.d(c,"$ir")
throw H.h(P.D("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.h(P.D("Cannot resize immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.r]},
$iaS:1,
$aaS:function(){return[W.r]},
$aL:function(){return[W.r]},
$ip:1,
$ap:function(){return[W.r]},
$io:1,
$ao:function(){return[W.r]},
$aaf:function(){return[W.r]}}
W.eY.prototype={
gj:function(a){return a.length}}
W.cO.prototype={
M:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bj(a,b,c,d)
u=W.kB("<table>"+H.a(b)+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a6(t).K(0,new W.a6(u))
return t}}
W.f9.prototype={
M:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bj(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.M(u.createElement("table"),b,c,d)
u.toString
u=new W.a6(u)
s=u.gad(u)
s.toString
u=new W.a6(s)
r=u.gad(u)
t.toString
r.toString
new W.a6(t).K(0,new W.a6(r))
return t}}
W.fa.prototype={
M:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bj(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.x.M(u.createElement("table"),b,c,d)
u.toString
u=new W.a6(u)
s=u.gad(u)
t.toString
s.toString
new W.a6(t).K(0,new W.a6(s))
return t}}
W.cb.prototype={
a6:function(a,b){var u
a.textContent=null
u=this.M(a,b,null,null)
a.content.appendChild(u)},
$icb:1}
W.aW.prototype={$iaW:1}
W.bf.prototype={}
W.bh.prototype={
geq:function(a){var u=P.a2,t=new P.V($.G,[u]),s=H.f(new W.fu(new P.ht(t,[u])),{func:1,ret:-1,args:[P.a2]})
this.dQ(a)
this.ea(a,W.jA(s,u))
return t},
ea:function(a,b){return a.requestAnimationFrame(H.bL(H.f(b,{func:1,ret:-1,args:[P.a2]}),1))},
dQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibh:1,
$ijh:1}
W.fu.prototype={
$1:function(a){var u=this.a
a=H.hK(H.dj(a),{futureOr:1,type:H.b(u,0)})
u=u.a
if(u.a!==0)H.Z(P.c9("Future already completed"))
u.aK(a)},
$S:20}
W.aX.prototype={$iaX:1}
W.cc.prototype={$icc:1}
W.cY.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
P:function(a,b){if(b==null)return!1
if(!J.k(b).$iib)return!1
return a.left===b.left&&a.top===b.top&&a.width===b.width&&a.height===b.height},
gv:function(a){return W.jn(C.c.gv(a.left),C.c.gv(a.top),C.c.gv(a.width),C.c.gv(a.height))}}
W.d7.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
if(b>>>0!==b||b>=a.length)throw H.h(P.bx(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.z(b)
H.d(c,"$ir")
throw H.h(P.D("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.h(P.D("Cannot resize immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iF:1,
$aF:function(){return[W.r]},
$iaS:1,
$aaS:function(){return[W.r]},
$aL:function(){return[W.r]},
$ip:1,
$ap:function(){return[W.r]},
$io:1,
$ao:function(){return[W.r]},
$aaf:function(){return[W.r]}}
W.fA.prototype={
w:function(a,b){var u,t,s,r,q
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(u=this.gA(),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.W)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gA:function(){var u,t,s,r=this.a.attributes,q=H.C([],[P.j])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.d(r[t],"$icc")
if(s.namespaceURI==null)C.a.p(q,s.name)}return q},
gI:function(a){return this.gA().length===0},
$aaF:function(){return[P.j,P.j]},
$aq:function(){return[P.j,P.j]}}
W.fL.prototype={
t:function(a){return this.a.hasAttribute(a)},
h:function(a,b){return this.a.getAttribute(H.w(b))},
i:function(a,b,c){this.a.setAttribute(b,H.w(c))},
gj:function(a){return this.gA().length}}
W.fM.prototype={
U:function(){var u,t,s,r,q=P.c1(P.j)
for(u=this.a.className.split(" "),t=u.length,s=0;s<t;++s){r=J.hW(u[s])
if(r.length!==0)q.p(0,r)}return q},
bY:function(a){this.a.className=H.x(a,"$iah",[P.j],"$aah").bN(0," ")},
gj:function(a){return this.a.classList.length},
p:function(a,b){var u,t
H.w(b)
u=this.a.classList
t=u.contains(b)
u.add(b)
return!t},
G:function(a,b){var u=this.a.classList,t=u.contains(b)
u.remove(b)
return t}}
W.d_.prototype={
T:function(a,b,c,d){var u=H.b(this,0)
H.f(a,{func:1,ret:-1,args:[u]})
H.f(c,{func:1,ret:-1})
return W.Q(this.a,this.b,a,!1,u)},
bc:function(a,b,c){return this.T(a,null,b,c)}}
W.id.prototype={}
W.aK.prototype={
T:function(a,b,c,d){var u,t,s,r=this,q=H.b(r,0)
H.f(a,{func:1,ret:-1,args:[q]})
H.f(c,{func:1,ret:-1})
u=r.$ti
t=new W.dd(new H.K([[P.a_,q],[P.a0,q]]),u)
t.sdM(new P.hq(null,t.gex(t),u))
for(q=r.a,q=new H.c2(q,q.gj(q),[H.b(q,0)]),s=r.c;q.l();)t.p(0,new W.d_(q.d,s,!1,u))
q=t.a
q.toString
return new P.fB(q,[H.b(q,0)]).T(a,b,c,d)},
ab:function(a){return this.T(a,null,null,null)},
bc:function(a,b,c){return this.T(a,null,b,c)}}
W.fN.prototype={
aA:function(){var u=this
if(u.b==null)return
u.cJ()
u.b=null
u.se2(null)
return},
bO:function(a){if(this.b==null)return;++this.a
this.cJ()},
bR:function(){var u=this
if(u.b==null||u.a<=0)return;--u.a
u.cI()},
cI:function(){var u,t=this,s=t.d,r=s!=null
if(r&&t.a<=0){u=t.b
u.toString
H.f(s,{func:1,args:[W.i]})
if(r)J.k9(u,t.c,s,!1)}},
cJ:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.f(t,{func:1,args:[W.i]})
if(s)J.ka(u,this.c,t,!1)}},
se2:function(a){this.d=H.f(a,{func:1,args:[W.i]})}}
W.fO.prototype={
$1:function(a){return this.a.$1(H.d(a,"$ii"))},
$S:26}
W.dd.prototype={
p:function(a,b){var u,t,s,r=this
H.x(b,"$ia_",r.$ti,"$aa_")
u=r.b
if(u.t(b))return
t=r.a
s=H.b(b,0)
t=H.f(t.gen(t),{func:1,ret:-1,args:[s]})
H.f(new W.ho(r,b),{func:1,ret:-1})
u.i(0,b,W.Q(b.a,b.b,t,!1,s))},
bI:function(a){var u,t
for(u=this.b,t=u.gW(u),t=new H.a5(J.y(t.a),t.b,[H.b(t,0),H.b(t,1)]);t.l();)t.a.aA()
u.b2(0)
this.a.bI(0)},
sdM:function(a){this.a=H.x(a,"$ij9",this.$ti,"$aj9")}}
W.ho.prototype={
$0:function(){var u=this.a,t=u.b.G(0,H.x(this.b,"$ia_",[H.b(u,0)],"$aa_"))
if(t!=null)t.aA()
return},
$S:0}
W.bk.prototype={
dz:function(a){var u
if($.d1.a===0){for(u=0;u<262;++u)$.d1.i(0,C.K[u],W.lH())
for(u=0;u<12;++u)$.d1.i(0,C.j[u],W.lI())}},
ai:function(a){return $.k7().D(0,W.bX(a))},
a4:function(a,b,c){var u=$.d1.h(0,H.a(W.bX(a))+"::"+b)
if(u==null)u=$.d1.h(0,"*::"+b)
if(u==null)return!1
return H.iq(u.$4(a,b,c,this))},
$iaa:1}
W.af.prototype={
gu:function(a){return new W.cu(a,this.gj(a),[H.am(this,a,"af",0)])},
p:function(a,b){H.n(b,H.am(this,a,"af",0))
throw H.h(P.D("Cannot add to immutable List."))},
a1:function(a,b){var u=H.am(this,a,"af",0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
throw H.h(P.D("Cannot sort immutable List."))},
a5:function(a,b){throw H.h(P.D("Cannot remove from immutable List."))}}
W.cE.prototype={
p:function(a,b){C.a.p(this.a,H.d(b,"$iaa"))},
ai:function(a){return C.a.cL(this.a,new W.eH(a))},
a4:function(a,b,c){return C.a.cL(this.a,new W.eG(a,b,c))},
$iaa:1}
W.eH.prototype={
$1:function(a){return H.d(a,"$iaa").ai(this.a)},
$S:12}
W.eG.prototype={
$1:function(a){return H.d(a,"$iaa").a4(this.a,this.b,this.c)},
$S:12}
W.db.prototype={
dA:function(a,b,c,d){var u,t,s
this.a.K(0,c)
u=b.ac(0,new W.hl())
t=b.ac(0,new W.hm())
this.b.K(0,u)
s=this.c
s.K(0,C.M)
s.K(0,t)},
ai:function(a){return this.a.D(0,W.bX(a))},
a4:function(a,b,c){var u=this,t=W.bX(a),s=u.c
if(s.D(0,H.a(t)+"::"+b))return u.d.eo(c)
else if(s.D(0,"*::"+b))return u.d.eo(c)
else{s=u.b
if(s.D(0,H.a(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.a(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1},
$iaa:1}
W.hl.prototype={
$1:function(a){return!C.a.D(C.j,H.w(a))},
$S:17}
W.hm.prototype={
$1:function(a){return C.a.D(C.j,H.w(a))},
$S:17}
W.hu.prototype={
a4:function(a,b,c){if(this.dv(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.hv.prototype={
$1:function(a){return"TEMPLATE::"+H.a(H.w(a))},
$S:16}
W.hp.prototype={
ai:function(a){var u=J.k(a)
if(!!u.$ic8)return!1
u=!!u.$il
if(u&&W.bX(a)==="foreignObject")return!1
if(u)return!0
return!1},
a4:function(a,b,c){if(b==="is"||C.e.dg(b,"on"))return!1
return this.ai(a)},
$iaa:1}
W.cu.prototype={
l:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scm(J.X(u.a,t))
u.c=t
return!0}u.scm(null)
u.c=s
return!1},
gq:function(){return this.d},
scm:function(a){this.d=H.n(a,H.b(this,0))},
$iar:1}
W.fH.prototype={$ib6:1,$ijh:1}
W.aa.prototype={}
W.hj.prototype={$imv:1}
W.df.prototype={
c_:function(a){new W.hz(this).$2(a,null)},
ay:function(a,b){if(b==null)J.bO(a)
else b.removeChild(a)},
ee:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.ke(a)
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
p=H.M(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.P(r)}t="element unprintable"
try{t=J.I(a)}catch(r){H.P(r)}try{s=W.bX(a)
this.ed(H.d(a,"$it"),b,p,t,s,H.d(o,"$iq"),H.w(n))}catch(r){if(H.P(r) instanceof P.ay)throw r
else{this.ay(a,b)
window
q="Removing corrupted element "+H.a(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ed:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.ay(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.ai(a)){o.ay(a,b)
window
u="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.a4(a,"is",g)){o.ay(a,b)
window
u="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gA()
t=H.C(u.slice(0),[H.b(u,0)])
for(s=f.gA().length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.kn(r)
H.w(r)
if(!q.a4(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.a(e)+" "+r+'="'+H.a(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.k(a).$icb)o.c_(a.content)},
$imi:1}
W.hz.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ee(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ay(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.P(s)
r=H.d(u,"$ir")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.d(t,"$ir")}},
$S:21}
W.cX.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.dg.prototype={}
W.dh.prototype={}
P.dE.prototype={
cK:function(a){var u=$.jX().b
if(u.test(a))return a
throw H.h(P.hX(a,"value","Not a valid class token"))},
n:function(a){return this.U().bN(0," ")},
gu:function(a){var u=this.U()
return P.cd(u,u.r,H.b(u,0))},
E:function(a,b,c){var u,t
H.f(b,{func:1,ret:c,args:[P.j]})
u=this.U()
t=H.b(u,0)
return new H.bv(u,H.f(b,{func:1,ret:c,args:[t]}),[t,c])},
O:function(a,b){return this.E(a,b,null)},
gj:function(a){return this.U().a},
p:function(a,b){H.w(b)
this.cK(b)
return H.iq(this.eN(new P.dF(b)))},
G:function(a,b){var u,t
this.cK(b)
u=this.U()
t=u.G(0,b)
this.bY(u)
return t},
J:function(a,b){return this.U().J(0,!0)},
a_:function(a){return this.J(a,!0)},
F:function(a,b){return this.U().F(0,b)},
eN:function(a){var u,t
H.f(a,{func:1,args:[[P.ah,P.j]]})
u=this.U()
t=a.$1(u)
this.bY(u)
return t},
$aF:function(){return[P.j]},
$abC:function(){return[P.j]},
$ap:function(){return[P.j]},
$aah:function(){return[P.j]}}
P.dF.prototype={
$1:function(a){return H.x(a,"$iah",[P.j],"$aah").p(0,this.a)},
$S:22}
P.e5.prototype={
ga9:function(){var u=this.b,t=H.J(u,"L",0),s=W.t
return new H.bz(new H.aJ(u,H.f(new P.e6(),{func:1,ret:P.E,args:[t]}),[t]),H.f(new P.e7(),{func:1,ret:s,args:[t]}),[t,s])},
i:function(a,b,c){var u
H.z(b)
H.d(c,"$it")
u=this.ga9()
J.kl(u.b.$1(J.cn(u.a,b)),c)},
sj:function(a,b){var u=J.ae(this.ga9().a)
if(b>=u)return
else if(b<0)throw H.h(P.bq("Invalid list length"))
this.eQ(0,b,u)},
p:function(a,b){this.b.a.appendChild(H.d(b,"$it"))},
a1:function(a,b){H.f(b,{func:1,ret:P.H,args:[W.t,W.t]})
throw H.h(P.D("Cannot sort filtered list"))},
eQ:function(a,b,c){var u=this.ga9()
u=H.l2(u,b,H.J(u,"p",0))
C.a.w(P.bc(H.l5(u,c-b,H.J(u,"p",0)),!0,null),new P.e8())},
b2:function(a){J.iJ(this.b.a)},
a5:function(a,b){var u=this.ga9()
u=u.b.$1(J.cn(u.a,b))
J.bO(u)
return u},
gj:function(a){return J.ae(this.ga9().a)},
h:function(a,b){var u
H.z(b)
u=this.ga9()
return u.b.$1(J.cn(u.a,b))},
gu:function(a){var u=P.bc(this.ga9(),!1,W.t)
return new J.b0(u,u.length,[H.b(u,0)])},
$aF:function(){return[W.t]},
$aL:function(){return[W.t]},
$ap:function(){return[W.t]},
$ao:function(){return[W.t]}}
P.e6.prototype={
$1:function(a){return!!J.k(H.d(a,"$ir")).$it},
$S:11}
P.e7.prototype={
$1:function(a){return H.jL(H.d(a,"$ir"),"$it")},
$S:23}
P.e8.prototype={
$1:function(a){return J.bO(a)},
$S:3}
P.c0.prototype={$ic0:1}
P.aj.prototype={
h:function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.h(P.bq("property is not a String or num"))
return P.ih(this.a[b])},
i:function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.h(P.bq("property is not a String or num"))
this.a[b]=P.hC(c)},
gv:function(a){return 0},
P:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a},
n:function(a){var u,t
try{u=String(this.a)
return u}catch(t){H.P(t)
u=this.dr(0)
return u}},
b1:function(a,b){var u,t=this.a
if(b==null)u=null
else{u=H.b(b,0)
u=P.bc(new H.aU(b,H.f(P.lQ(),{func:1,ret:null,args:[u]}),[u,null]),!0,null)}return P.ih(t[a].apply(t,u))}}
P.ek.prototype={
$1:function(a){var u,t,s,r,q=this.a
if(q.t(a))return q.h(0,a)
u=J.k(a)
if(!!u.$iq){t={}
q.i(0,a,t)
for(q=J.y(a.gA());q.l();){s=q.gq()
t[s]=this.$1(a.h(0,s))}return t}else if(!!u.$ip){r=[]
q.i(0,a,r)
C.a.K(r,u.E(a,this,null))
return r}else return P.hC(a)},
$S:3}
P.c_.prototype={}
P.bZ.prototype={
bp:function(a){var u=this,t=a<0||a>=u.gj(u)
if(t)throw H.h(P.cJ(a,0,u.gj(u),null,null))},
h:function(a,b){if(typeof b==="number"&&b===C.f.bg(b))this.bp(H.z(b))
return H.n(this.dn(0,b),H.b(this,0))},
i:function(a,b,c){H.n(c,H.b(this,0))
if(typeof b==="number"&&b===C.f.bg(b))this.bp(H.z(b))
this.c1(0,b,c)},
gj:function(a){var u=this.a.length
if(typeof u==="number"&&u>>>0===u)return u
throw H.h(P.c9("Bad JsArray length"))},
sj:function(a,b){this.c1(0,"length",b)},
p:function(a,b){this.b1("push",[H.n(b,H.b(this,0))])},
a5:function(a,b){this.bp(b)
return H.n(J.X(this.b1("splice",[b,1]),0),H.b(this,0))},
a1:function(a,b){var u=H.b(this,0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
this.b1("sort",[b])},
$iF:1,
$ip:1,
$io:1}
P.hD.prototype={
$1:function(a){var u
H.d(a,"$iaq")
u=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.ll,a,!1)
P.ii(u,$.hU(),a)
return u},
$S:3}
P.hE.prototype={
$1:function(a){return new this.a(a)},
$S:3}
P.hG.prototype={
$1:function(a){return new P.c_(a)},
$S:24}
P.hH.prototype={
$1:function(a){return new P.bZ(a,[null])},
$S:25}
P.hI.prototype={
$1:function(a){return new P.aj(a)},
$S:53}
P.d4.prototype={}
P.aG.prototype={
n:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
P:function(a,b){if(b==null)return!1
return!!J.k(b).$iaG&&this.a==b.a&&this.b==b.b},
gv:function(a){var u,t=J.aP(this.a),s=J.aP(this.b)
s=P.jm(P.jm(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
m:function(a,b){var u,t,s=this,r=s.a
if(typeof r!=="number")return r.m()
if(typeof b!=="number")return H.c(b)
u=H.b(s,0)
r=H.n(r*b,u)
t=s.b
if(typeof t!=="number")return t.m()
return new P.aG(r,H.n(t*b,u),s.$ti)}}
P.c8.prototype={$ic8:1}
P.dn.prototype={
U:function(){var u,t,s,r,q=this.a.getAttribute("class"),p=P.c1(P.j)
if(q==null)return p
for(u=q.split(" "),t=u.length,s=0;s<t;++s){r=J.hW(u[s])
if(r.length!==0)p.p(0,r)}return p},
bY:function(a){this.a.setAttribute("class",a.bN(0," "))}}
P.l.prototype={
gcP:function(a){return new P.dn(a)},
gcO:function(a){return new P.e5(a,new W.a6(a))},
M:function(a,b,c,d){var u,t,s,r,q,p=H.C([],[W.aa])
C.a.p(p,W.jl(null))
C.a.p(p,W.jo())
C.a.p(p,new W.hp())
c=new W.df(new W.cE(p))
u='<svg version="1.1">'+H.a(b)+"</svg>"
p=document
t=p.body
s=(t&&C.m).ey(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a6(s)
q=p.gad(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
cV:function(a,b,c,d,e){throw H.h(P.D("Cannot invoke insertAdjacentHtml on SVG."))},
$il:1}
U.an.prototype={
gaC:function(){return 0},
gaj:function(){return 0},
gaz:function(){var u=this.z
return u!=null?u.gaz():this},
gbd:function(){var u=this.z
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
t.x=$.bp()
t.y=$.v()},
b3:function(a){var u=this,t=U.iO(u.id,u.a,u.c)
u.aM(t)
return t},
aM:function(a){var u,t,s,r,q=this
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
for(u=q.cy,u=u.gW(u),u=new H.a5(J.y(u.a),u.b,[H.b(u,0),H.b(u,1)]),t=a.cy;u.l();){s=u.a.b4(0,a)
t.i(0,s.a,s)}for(u=q.db,u=u.gW(u),u=new H.a5(J.y(u.a),u.b,[H.b(u,0),H.b(u,1)]),t=a.db;u.l();){r=u.a.b4(0,a)
t.i(0,r.a,r)}},
B:function(){var u,t,s=this,r="properties",q=P.i8()
q.i(0,"id",s.a)
q.i(0,"instanceId",s.b)
q.i(0,"action",s.c)
q.i(0,"type",s.d)
q.i(0,"format",s.e)
q.i(0,"start",s.k1)
q.i(0,"required",s.go)
u=s.f
t=$.iB()
if(typeof u!=="number")return u.an()
if(typeof t!=="number")return H.c(t)
q.i(0,"x",u/t)
u=s.r
if(typeof u!=="number")return u.an()
q.i(0,"y",u/t)
u=s.cy
if(u.a!==0){q.i(0,"params",[])
for(u=u.gW(u),u=new H.a5(J.y(u.a),u.b,[H.b(u,0),H.b(u,1)]);u.l();){t=u.a
J.aO(q.h(0,"params"),t.B())}}u=s.db
if(u.a!==0){q.i(0,r,[])
for(u=u.gW(u),u=new H.a5(J.y(u.a),u.b,[H.b(u,0),H.b(u,1)]);u.l();){t=u.a
J.aO(q.h(0,r),t.B())}}return q},
X:function(a){var u
J.aO(a,this.B())
u=this.z
if(u!=null)u.X(a)},
aX:function(a,b){var u,t,s,r,q,p=this,o=$.bp(),n=p.dT(a),m=$.a3()
if(typeof m!=="number")return m.m()
if(typeof n!=="number")return n.k()
p.x=Math.max(H.jF(o),n+m*2)
if(!p.rx&&p.cy.a!==0)for(o=p.cy,o=o.gW(o),o=new H.a5(J.y(o.a),o.b,[H.b(o,0),H.b(o,1)]),u=0;o.l();){n=o.a
n.aW(a)
u+=n.z+m}else u=0
if(!p.rx&&p.db.a!==0)for(o=p.db,o=o.gW(o),o=new H.a5(J.y(o.a),o.b,[H.b(o,0),H.b(o,1)]),t=0;o.l();){n=o.a
n.aW(a)
s=n.z
a.save()
a.font=n.b.fy
r=$.bo()
n=a.measureText("\u25b8    "+H.a(n.f)).width
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
q=p.gbd()
if(q!=null)b=q.aX(a,b)
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
t=q.rx?$.v():q.y
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
p.r=u+t
t=q.f
u=p.ch
s=q.ch
r=$.bo()
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
s=$.a3()
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.c(s)
r=p.r
q=$.v()
if(typeof q!=="number")return q.an()
if(typeof r!=="number")return r.k()
C.q.cU(a,u,t+s,r+q/2)
a.restore()},
bu:function(a){var u
a.save()
this.aT(a)
a.strokeStyle=this.fx
u=$.ad()
if(typeof u!=="number")return H.c(u)
a.lineWidth=0.5*u
a.lineJoin="round"
a.stroke()
a.restore()},
bs:function(a){a.save()
this.aT(a)
a.fillStyle=this.dy
a.fill()
a.fillStyle="rgba(0, 0, 0, "+H.a(Math.min(1,0.075*this.ch))
a.fill()
a.restore()},
dN:function(a){var u,t,s=this.x,r=this.cy,q=H.b(r,0),p=P.bc(new H.aD(r,[q]),!0,q)
for(u=p.length-1;u>=0;--u){q=$.a3()
if(u>=p.length)return H.e(p,u)
t=r.h(0,p[u]).z
if(typeof q!=="number")return q.k()
if(typeof s!=="number")return s.R()
s-=q+t
if(u>=p.length)return H.e(p,u)
r.h(0,p[u]).bJ(a,s)}},
dO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this.db,i=H.b(j,0),h=P.bc(new H.aD(j,[i]),!0,i)
for(u=0;u<h.length;u=t){i=$.v()
t=u+1
if(typeof i!=="number")return i.m()
s=i*t
r=j.h(0,h[u])
q=r.b
p=q.x
o=$.a3()
n=r.z
if(typeof o!=="number")return o.k()
if(typeof p!=="number")return p.R()
m=q.r
if(typeof m!=="number")return m.k()
l=q.f
k=$.bo()
if(typeof l!=="number")return l.k()
if(typeof k!=="number")return H.c(k)
a.fillStyle=q.fr
a.font=q.fy
a.textAlign="left"
a.textBaseline="middle"
a.fillText("\u25b8    "+H.a(r.f),l+k,m+s+i/2)
r.cS(a,p-(o+n),s)}},
aT:function(a){var u,t,s,r,q,p=this
a.beginPath()
u=p.f
t=$.a3()
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
a.moveTo(u+t,p.r)
p.bC(a,p.Q==null&&p.k1)
u=p.ch===0
s=u&&p.Q==null
p.cw(a,s,u&&p.z==null)
p.bB(a,p.z==null&&p.ch===0)
if(p.ch<=0)u=p.Q!=null&&p.z!=null
else u=!0
if(u){u=p.f
s=p.r
r=p.rx?$.v():p.y
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
a.lineTo(u,s+r)
a.lineTo(p.f,p.r)
r=p.f
if(typeof r!=="number")return r.k()
a.lineTo(r+t,p.r)}else if(p.z!=null){u=p.f
s=p.r
r=p.rx?$.v():p.y
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
q=u?$.v():p.y
if(typeof r!=="number")return r.k()
if(typeof q!=="number")return H.c(q)
u=u?$.v():p.y
if(typeof u!=="number")return H.c(u)
a.quadraticCurveTo(s,r+q,s,r+u-t)
a.lineTo(p.f,p.r)
u=p.f
if(typeof u!=="number")return u.k()
a.lineTo(u+t,p.r)}else{u=p.rx
q=u?$.v():p.y
if(typeof r!=="number")return r.k()
if(typeof q!=="number")return H.c(q)
u=u?$.v():p.y
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
cw:function(a,b,c){var u,t,s=this,r=$.a3(),q=s.f,p=s.x
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
t=s.rx?$.v():s.y
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
p=q?$.v():s.y
if(typeof t!=="number")return t.k()
if(typeof p!=="number")return H.c(p)
q=q?$.v():s.y
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
t=s.rx?$.v():s.y
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
p=q?$.v():s.y
if(typeof t!=="number")return t.k()
if(typeof p!=="number")return H.c(p)
q=q?$.v():s.y
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
t=s.rx?$.v():s.y
if(typeof p!=="number")return p.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(u+q,p+t)
t=s.f
p=s.x
if(typeof t!=="number")return t.k()
if(typeof p!=="number")return H.c(p)
q=s.r
u=s.rx?$.v():s.y
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
t=s.rx?$.v():s.y
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(q+p,u+t)
t=s.f
u=s.x
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.c(u)
p=s.r
q=s.rx?$.v():s.y
if(typeof p!=="number")return p.k()
if(typeof q!=="number")return H.c(q)
a.lineTo(t+u-r,p+q)}}},
bC:function(a,b){var u,t,s,r=this,q=$.a3(),p=r.f
if(typeof q!=="number")return q.m()
if(typeof p!=="number")return p.k()
u=$.bo()
t=r.gaC()
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
bB:function(a,b){var u,t,s,r,q,p,o=this,n=$.a3(),m=o.f
if(typeof n!=="number")return n.m()
if(typeof m!=="number")return m.k()
u=m+n*2
if(!o.rx){m=$.bo()
t=o.gaj()
if(typeof m!=="number")return m.m()
u+=m*t}if(b){m=u+n
t=o.r
s=o.rx?$.v():o.y
if(typeof t!=="number")return t.k()
if(typeof s!=="number")return H.c(s)
a.lineTo(m,t+s)
s=o.r
t=o.rx
r=t?$.v():o.y
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
q=n/2
p=t?$.v():o.y
if(typeof p!=="number")return H.c(p)
t=t?$.v():o.y
if(typeof t!=="number")return H.c(t)
a.bezierCurveTo(m,s+r+q,u,s+p+q,u,s+t)}m=o.r
t=o.rx?$.v():o.y
if(typeof m!=="number")return m.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(u-n,m+t)},
b6:function(a){var u,t,s=this,r=a.c,q=a.e,p=s.r,o=s.rx?$.v():s.y
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
u.aq(s)
s=s.gbd()}return r},
bX:function(a){var u,t=this
t.ry=t.rx=t.k2=!1
u=t.id
if(!u.ek(t))u.cF(t)
u.aE(new U.dp(t.a,t.b))},
bV:function(a){this.k3=a.c
this.k4=a.e},
bW:function(a){},
$ibD:1}
U.dD.prototype={
gbd:function(){var u=this.z
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
U.ao.prototype={
gaC:function(){return 1},
gaj:function(){return 1},
gcW:function(){return!1},
b3:function(a){var u,t=this,s=t.id,r=t.a,q=t.c,p=P.H,o=U.as,n=$.ad()
if(typeof n!=="number")return H.c(n)
u=new U.ao(r,q,new H.K([p,o]),new H.K([p,o]),"400 "+H.a(14*n)+"px 'Poppins', sans-serif",s)
u.af(s,r,q)
u.k1=!1
t.aM(u)
return u},
X:function(a){var u,t="children",s=this.B()
s.i(0,t,[])
J.aO(a,s)
u=this.z
if(u!=null)u.X(H.a8(s.h(0,t)))},
bu:function(a){},
bs:function(a){},
al:function(a){return this.N.al(a)}}
U.ct.prototype={
gaC:function(){return 1},
gaj:function(){return 0},
Y:function(a,b){var u
this.ch=a
this.cx=b
u=this.z
if(u!=null)u.Y(a,b)},
X:function(a){J.aO(a,this.B())},
bt:function(a){}}
U.bs.prototype={
gaC:function(){return 0},
gaj:function(){return 1},
b3:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=U.iN(k.id,k.a,k.c)
k.aM(j)
for(u=k.N,t=u.length,s=[P.H,U.as],r=0;r<u.length;u.length===t||(0,H.W)(u),++r){q=u[r]
if(!q.$ict){p=q.id
o=q.a
n=q.c
m=$.ad()
if(typeof m!=="number")return H.c(m)
l=new U.ao(o,n,new H.K(s),new H.K(s),"400 "+H.a(14*m)+"px 'Poppins', sans-serif",p)
l.af(p,o,n)
l.k1=!1
q.aM(l)
j.c7(l)}}j.S.e=k.S.e
return j},
gaz:function(){var u=this.S,t=u.z
return t!=null?t.gaz():u},
X:function(a){var u,t,s,r=this,q="children",p=r.B()
p.i(0,q,[])
p.i(0,"clauses",[])
J.aO(a,p)
u=r.z
if(u!=null)u.X(H.a8(p.h(0,q)))
for(u=r.N,t=u.length,s=0;s<u.length;u.length===t||(0,H.W)(u),++s)u[s].X(H.a8(p.h(0,"clauses")))
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
if(p!=null){o=p.gaz()
q.f=l.f
p=o.r
n=o.rx?$.v():o.y
if(typeof p!=="number")return p.k()
if(typeof n!=="number")return H.c(n)
q.r=p+n}else{q.f=l.f
p=s.r
n=s.rx?$.v():s.y
if(typeof p!=="number")return p.k()
if(typeof n!=="number")return H.c(n)
m=$.v()
if(typeof m!=="number")return H.c(m)
q.r=p+n+m}q.ag()}},
c7:function(a){var u,t,s,r,q=this
a.N=q
u=q.N
C.a.G(u,q.S)
C.a.p(u,a)
C.a.p(u,q.S)
for(t=0;s=u.length,t<s-1;t=r){r=t+1
u[t].x1=u[r]}if(0>=s)return H.e(u,0)
q.x1=u[0]},
aT:function(a){var u,t,s,r,q,p,o,n,m,l=this
if(l.rx){l.dh(a)
return}u=$.a3()
a.beginPath()
t=l.f
if(typeof t!=="number")return t.k()
if(typeof u!=="number")return H.c(u)
a.moveTo(t+u,l.r)
s=l.Q==null&&l.k1
for(r=l;r!=null;){if(r.z==null)q=r.x1!=null||l.ch===0
else q=!1
r.bC(a,s)
r.cw(a,s,q)
r.bB(a,q)
if(r.x1!=null){t=r.f
p=$.bo()
if(typeof t!=="number")return t.k()
if(typeof p!=="number")return H.c(p)
t+=p
o=r.r
n=r.rx
m=n?$.v():r.y
if(typeof o!=="number")return o.k()
if(typeof m!=="number")return H.c(m)
n=n?$.v():r.y
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
if(p){t=t.rx?$.v():t.y
if(typeof n!=="number")return n.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(o,n+t)}else{if(typeof o!=="number")return o.k()
t=t.rx?$.v():t.y
if(typeof n!=="number")return n.k()
if(typeof t!=="number")return H.c(t)
a.lineTo(o+u,n+t)
t=l.f
n=l.S
o=n.r
p=n.rx
m=p?$.v():n.y
if(typeof o!=="number")return o.k()
if(typeof m!=="number")return H.c(m)
p=p?$.v():n.y
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
U.aB.prototype={
b7:function(a){var u,t=this,s=t.e,r=s.length
if(r===1){r=t.a
if(r.c!==t)a.a+="("
a.a+=H.a(t.b)+" "
if(0>=s.length)return H.e(s,0)
s[0].b7(a)
if(r.c!==t)a.a+=")"}else if(r===2){u=t.a
if(u.c!==t)a.a+="("
if(0>=r)return H.e(s,0)
s[0].b7(a)
a.a+=" "+H.a(t.b)+" "
if(1>=s.length)return H.e(s,1)
s[1].b7(a)
if(u.c!==t)a.a+=")"}else{s=t.b
if(s!=null)a.a+=s}},
B:function(){var u,t,s,r=this,q="children",p=P.i9(["name",r.b,"type",r.c]),o=r.e
if(o.length!==0){p.i(0,q,[])
for(u=o.length,t=0;t<o.length;o.length===u||(0,H.W)(o),++t){s=o[t]
J.aO(p.h(0,q),s.B())}}o=r.d
if(o!=null)p.i(0,"format",o)
return p},
aB:function(a){var u,t,s,r,q,p=this,o="children",n=a.h(0,"name")
p.b=n==null?"":J.I(n)
n=a.h(0,"type")
p.c=n==null?"num":J.I(n)
n=p.e
C.a.sj(n,0)
if(!!J.k(a.h(0,o)).$io)for(u=J.y(H.S(a.h(0,o),"$ip")),t=p.a,s=[U.aB];u.l();){r=u.gq()
q=new U.aB(t,H.w(J.X(r,"type")),H.C([],s))
C.a.p(n,q)
q.aB(H.d(r,"$iq"))}},
ew:function(a){var u,t,s,r
if(a==null)return this.e.length!==0
u=this.e
t=J.N(a)
if(u.length!==t.gj(a))return!0
for(s=0;s<t.gj(a);++s){r=t.h(a,s)
if(s>=u.length)return H.e(u,s)
if(!J.Y(r,u[s].c))return!0}return!1},
df:function(a){var u,t,s,r,q,p=this,o=p.e,n=o.length===0
if(p.ew(a)){C.a.sj(o,0)
if(a!=null)for(u=J.N(a),t=p.a,s=[U.aB],r=0;r<u.gj(a);++r)if(r===0&&n&&J.Y(u.h(a,r),p.c)){q=new U.aB(t,H.w(u.h(a,r)),H.C([],s))
q.b=p.b
C.a.p(o,q)}else C.a.p(o,new U.aB(t,H.w(u.h(a,r)),H.C([],s)))}},
cM:function(a){var u,t=this,s=document.createElement("div")
C.b.a6(s,H.a(t.b))
s.classList.add("nt-expression-text")
s.classList.add("editable")
u=H.a(t.c)
s.classList.add(u)
u=W.A
W.Q(s,"click",H.f(new U.dZ(t,s),{func:1,ret:-1,args:[u]}),!1,u)
t.cT(s,a)
a.appendChild(s)},
cT:function(a,b){var u=W.A,t={func:1,ret:-1,args:[u]}
W.Q(a,"mouseenter",H.f(new U.e_(b),t),!1,u)
W.Q(a,"mouseleave",H.f(new U.e0(b),t),!1,u)},
b0:function(a,b){var u=document.createElement("div")
C.b.a6(u,b?"(":")")
u.classList.add("nt-expression-text")
u.classList.add("parenthesis")
this.cT(u,a)
a.appendChild(u)},
er:function(a){var u,t,s=this
s.b=J.I(U.aN(s.b,0))
u=W.kD("number")
u.className="nt-number-input"
u.value=s.b
u.step="1"
t=W.i
W.Q(u,"change",H.f(new U.dY(s,u),{func:1,ret:-1,args:[t]}),!1,t)
a.appendChild(u)},
geJ:function(){var u=this.b
if(u!=null)return P.jP(u,new U.e1())!=null
return!1},
bf:function(a){var u,t,s=this,r=document.createElement("div")
r.className="nt-expression"
if((s.geJ()||s.b==null)&&s.c==="num")s.er(r)
else if(s.b==null){r.classList.add("empty")
C.b.aa(r,"<small>&#9660;</small>")}else{u=s.e
t=u.length
if(t===1){s.b0(r,!0)
s.cM(r)
if(0>=u.length)return H.e(u,0)
u[0].bf(r)
s.b0(r,!1)}else if(t===2){s.b0(r,!0)
if(0>=u.length)return H.e(u,0)
u[0].bf(r)
s.cM(r)
if(1>=u.length)return H.e(u,1)
u[1].bf(r)
s.b0(r,!1)}else C.b.aa(r,"<div class='nt-expression-text "+H.a(s.c)+"'>"+H.a(s.b)+"</div>")}if(s.e.length===0){r.classList.add("editable")
u=W.A
W.Q(r,"click",H.f(new U.e4(s,r),{func:1,ret:-1,args:[u]}),!1,u)}a.appendChild(r)},
d_:function(a){var u,t,s=this,r=W.t,q=document
H.ak(r,r,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
r=new W.ab(q.querySelectorAll(".nt-pulldown-menu"),[r])
r.w(r,new U.e2())
u=q.createElement("div")
u.classList.add("nt-pulldown-menu")
q=s.a.a
s.c9(u,q.dx)
if(J.kh(q.db))C.b.aa(u,"<hr>")
s.c9(u,q.db)
C.b.aa(u,"<hr>")
t=W.iM("#")
C.l.a6(t,"Clear")
t.className="clear"
u.appendChild(t)
r=W.A
W.Q(t,"click",H.f(new U.e3(s,u),{func:1,ret:-1,args:[r]}),!1,r)
a.appendChild(u)},
c9:function(a,b){var u,t,s,r,q,p
for(u=J.y(b),t=W.A,s={func:1,ret:-1,args:[t]};u.l();){r=u.gq()
q=J.N(r)
if(J.Y(q.h(r,"type"),this.c)){p=document.createElement("a")
p.href="#"
C.l.a6(p,H.a(q.h(r,"name")))
a.appendChild(p)
W.Q(p,"click",H.f(new U.dX(this,a,r),s),!1,t)}}}}
U.dZ.prototype={
$1:function(a){H.d(a,"$iA")
this.a.d_(this.b)
a.stopPropagation()},
$S:1}
U.e_.prototype={
$1:function(a){H.d(a,"$iA")
this.a.classList.add("highlight")},
$S:1}
U.e0.prototype={
$1:function(a){H.d(a,"$iA")
this.a.classList.remove("highlight")},
$S:1}
U.dY.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.value
u.b=s
if(s==="")t.value=u.b="0"},
$S:4}
U.e1.prototype={
$1:function(a){return},
$S:29}
U.e4.prototype={
$1:function(a){H.d(a,"$iA")
this.a.d_(this.b)
a.stopPropagation()},
$S:1}
U.e2.prototype={
$1:function(a){return J.bO(H.d(a,"$it"))},
$S:14}
U.e3.prototype={
$1:function(a){var u
H.d(a,"$iA")
C.b.V(this.b)
u=this.a
u.b=null
C.a.sj(u.e,0)
u.a.bQ()
a.stopPropagation()
a.preventDefault()},
$S:1}
U.dX.prototype={
$1:function(a){var u,t,s
H.d(a,"$iA")
C.b.V(this.b)
u=this.a
t=this.c
s=J.N(t)
u.df(H.a8(s.h(t,"arguments")))
u.b=H.w(s.h(t,"name"))
u.c=H.w(s.h(t,"type"))
u.d=H.w(s.h(t,"format"))
u.a.bQ()
a.stopPropagation()
a.preventDefault()},
$S:1}
U.dN.prototype={
n:function(a){var u,t=new P.au("")
this.c.b7(t)
u=t.a
return u.charCodeAt(0)==0?u:u},
aB:function(a){var u=J.k(a)
if(!!u.$iq)this.c.aB(a)
else if(a!=null)this.c.b=u.n(a)},
bQ:function(){var u=this,t=u.b
if(t!=null&&u.c!=null){J.kf(t).b2(0)
u.c.bf(H.d(u.b,"$ibu"))}}}
U.co.prototype={
av:function(a,b,c){var u
for(u=0;u<b;++u)a.a+="  "
a.a+=c+"\n"},
aN:function(a,b,c,d){var u,t=J.N(c),s=H.w(t.h(c,"format")),r=t.h(c,"params"),q=t.h(c,"properties"),p=J.k(r),o=!!p.$io?p.gj(r):0,n=J.k(q),m=!!n.$io?n.gj(q):0
if(typeof s!=="string"){s=H.a(t.h(c,"action"))
for(u=0;u<o;++u)s+=" {"+u+"}"
for(u=0;u<m;++u)s+=" {P"+u+"}"}for(u=0;u<o;++u)s=this.bE(s,"{"+u+"}",b,c,p.h(r,u))
for(u=0;u<m;++u)s=this.bE(s,"{P"+u+"}",b,c,n.h(q,u))
this.av(a,d,s)},
bE:function(a,b,c,d,e){var u=this.dR(e)
if(typeof u!=="string")H.Z(H.ax(u))
return H.iy(a,b,u)},
dR:function(a){var u="value",t=J.N(a)
if(!!J.k(t.h(a,u)).$iq)return this.au(t.h(a,u))
else{t=t.h(a,u)
return t==null?"":J.I(t)}},
au:function(a){var u,t,s,r,q,p=this,o=J.N(a),n=o.h(a,"children")
if(n==null||!J.k(n).$io)n=[]
u=o.h(a,"name")
t=u==null?"":J.I(u)
u=o.h(a,"format")
if(typeof u==="string"){s=H.w(o.h(a,"format"))
for(o=J.N(n),r=0;r<o.gj(n);++r){u="{"+r+"}"
q=p.au(o.h(n,r))
s.toString
if(typeof q!=="string")H.Z(H.ax(q))
s=H.iy(s,u,q)}return s}else{o=J.N(n)
if(o.gj(n)===1)return"("+H.a(t)+" "+H.a(p.au(o.h(n,0)))+")"
else if(o.gj(n)===2)return"("+H.a(p.au(o.h(n,0)))+" "+H.a(t)+" "+H.a(p.au(o.h(n,1)))+")"
else return t}}}
U.eO.prototype={
ct:function(a,b){var u,t=new P.au("")
for(u=J.y(H.S(b.h(0,"chains"),"$ip"));u.l();){this.a8(t,a,u.gq(),0)
t.a+="\n"}u=t.a
return u.charCodeAt(0)==0?u:u},
a8:function(a,b,c,d){var u,t,s,r,q,p,o="children"
for(u=J.y(H.S(c,"$ip")),t=d+1;u.l();){s=u.gq()
r=J.N(s)
if(!!J.k(r.h(s,o)).$io)this.a8(a,b,r.h(s,o),t)
if(!!J.k(r.h(s,"clauses")).$io)for(r=J.y(H.S(r.h(s,"clauses"),"$ip"));r.l();){q=r.gq()
this.aN(a,b,q,d)
p=J.N(q)
if(!!J.k(p.h(q,o)).$io)this.a8(a,b,p.h(q,o),t)}}}}
U.eD.prototype={
ct:function(a,b){var u,t,s,r,q="chains",p=new P.au("")
if(!J.k(b.h(0,q)).$io||J.ae(b.h(0,q))===0)return"".charCodeAt(0)==0?"":""
u=H.a8(b.h(0,q))
t=J.aM(u)
t.a1(u,U.m_())
for(t=t.gu(u);t.l();){s=t.gq()
r=J.N(s)
if(J.iH(r.gj(s),0)&&J.Y(J.X(r.h(s,0),"type"),"nlogo:procedure")){this.aN(p,a,r.a5(s,0),0)
this.a8(p,a,s,1)
r=p.a+="end\n"
p.a=r+"\n"}}t=p.a
return t.charCodeAt(0)==0?t:t},
a8:function(a,b,c,d){var u,t,s,r,q,p,o=this,n="children"
for(u=J.y(H.S(c,"$ip")),t=d+1;u.l();){s=u.gq()
o.aN(a,b,s,d)
r=J.N(s)
if(!!J.k(r.h(s,n)).$io){o.av(a,d,"[")
o.a8(a,b,r.h(s,n),t)
o.av(a,d,"]")}if(!!J.k(r.h(s,"clauses")).$io)for(r=J.y(H.S(r.h(s,"clauses"),"$ip"));r.l();){q=r.gq()
o.aN(a,b,q,d)
p=J.N(q)
if(!!J.k(p.h(q,n)).$io){o.av(a,d,"[")
o.a8(a,b,p.h(q,n),t)
o.av(a,d,"]")}}}},
bE:function(a,b,c,d,e){var u=J.N(d),t='(nt:get "__'+H.a(c)+"_"+H.a(u.h(d,"id"))+"_"+H.a(u.h(d,"instanceId"))+"_"+H.a(J.X(e,"id"))+'")'
return H.iy(a,b,t)}}
U.dq.prototype={
eK:function(a){var u,t
if(!a.rx)if(!a.ry){u=a.f
t=a.x
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return u.k()
t=u+t*0.75>=this.a.ch-this.d
u=t}else u=!1
else u=!1
return u},
de:function(a){var u=this.b,t=H.b(u,0),s=new H.aJ(u,H.f(new U.dr(a),{func:1,ret:P.E,args:[t]}),[t])
if(s.gj(s)===1)return s.geC(s).a
return},
aW:function(a){var u,t,s,r,q,p,o=$.bp()
if(typeof o!=="number")return o.m()
o=this.d=o*1.5
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.W)(u),++s,o=p){r=u[s].a
a.save()
a.font=r.fy
q=a.measureText(r.c).width
a.restore()
r=$.a3()
if(typeof r!=="number")return r.m()
if(typeof q!=="number")return q.k()
p=$.hT()
if(typeof p!=="number")return p.m()
p=Math.max(o,q+r*2+p*2)
this.d=p}},
bJ:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this
k.aW(a)
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
s=$.hT()
if(typeof s!=="number")return H.c(s)
r=u-t+s
s=$.v()
if(typeof s!=="number")return s.an()
q=0+s/2
for(u=k.b,t=u.length,p=0;p<u.length;u.length===t||(0,H.W)(u),++p){o=u[p]
o.b=r
o.c=q
n=o.e
m=o.d
l=o.a
m.aG(l.a)
if(typeof n!=="number")return n.R()
a.save()
m=m.aG(l.a)
if(!(n<0||n-m>0))a.globalAlpha=0.3
l.f=o.b
l.r=o.c
l.aX(a,$.bp())
l.bs(a)
l.bt(a)
l.bu(a)
a.restore()
q+=s*1.5}a.restore()}}
U.dr.prototype={
$1:function(a){return H.d(a,"$iat").a.a==this.a},
$S:31}
U.at.prototype={
eI:function(){var u=this.e,t=this.d.aG(this.a.a)
if(typeof u!=="number")return u.R()
return u<0||u-t>0},
b6:function(a){return this.a.b6(a)},
al:function(a){var u,t,s,r,q,p=this
if(p.eI()){u=p.a
t=u.b3(0)
t.a=u.a
s=u.f
if(typeof s!=="number")return s.R()
t.f=s-5
u=u.r
if(typeof u!=="number")return u.R()
t.r=u-5
t.ry=!0
u=p.d
u.aq(t)
if(!!t.$ibs)for(s=t.N,r=s.length,q=0;q<s.length;s.length===r||(0,H.W)(s),++q)u.aq(s[q])
return t.al(a)}return p},
bX:function(a){},
bV:function(a){},
bW:function(a){},
$ibD:1}
U.as.prototype={
gH:function(a){var u=this.c
return u==null?"":J.I(u)},
sH:function(a,b){this.c=b==null?"":J.I(b)},
gam:function(){return H.a(J.I(this.c))+H.a(this.r)},
ao:function(a,b){var u,t,s,r=this
if(H.M(b.t("id"))){u=H.z(b.h(0,"id"))
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
r.sH(0,u)},
b4:function(a,b){return U.ia(b,this.B())},
B:function(){var u=this
return P.i9(["id",u.a,"type",u.e,"name",u.f,"unit",u.r,"value",u.gH(u),"default",u.d])},
aW:function(a){var u,t=this,s=$.a3()
if(typeof s!=="number")return s.m()
t.z=s*2
a.save()
a.font=t.b.fy
s=t.z
u=a.measureText(t.gam()).width
if(typeof u!=="number")return H.c(u)
t.z=s+u
a.restore()},
cS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=this
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
r=$.v()
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
C.q.cU(a,j.gam(),s+n/2,o+q*0.55)},
bJ:function(a,b){return this.cS(a,b,0)},
b6:function(a){var u,t=this,s=a.c,r=t.b,q=r.f,p=t.x
if(typeof q!=="number")return q.k()
p=q+p
if(s>=p){q=a.e
r=r.r
u=t.y
if(typeof r!=="number")return r.k()
u=r+u
if(q>=u)if(s<=p+t.z){s=$.v()
if(typeof s!=="number")return H.c(s)
s=q<=u+s}else s=!1
else s=!1}else s=!1
return s},
bX:function(a){this.ch=!1
this.b_(H.z(a.d),H.z(a.f))
this.b.id.L()},
al:function(a){this.ch=!0
this.b.id.L()
return this},
bV:function(a){},
bW:function(a){},
b_:function(a,b){var u,t,s,r,q,p,o,n,m=this,l="The type argument '",k="' is not a subtype of the type variable bound '",j="' of type variable 'T' in 'querySelectorAll'.",i=document,h=i.createElement("div")
h.className="backdrop"
u=m.cb()
C.b.aa(h,'      <div class="nt-param-dialog" style="top: '+b+';">\n        <div class="nt-param-table">\n          <div class="nt-param-row">'+u+'</div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>')
t=H.d(i.querySelector("#"+H.a(m.b.id.r)).parentElement,"$im")
if(t==null)return
t.appendChild(h)
s=H.d(i.querySelector("#nt-param-label-"+H.a(m.a)),"$im")
r=H.d(i.querySelector("#nt-param-"+H.a(m.a)),"$ib8")
q=W.t
H.ak(q,q,l,k,j)
p=[q]
o=[q]
n=[W.A]
new W.aK(H.x(new W.ab(i.querySelectorAll(".nt-param-confirm"),p),"$ia9",o,"$aa9"),!1,"click",n).ab(new U.eK(m,r,h))
H.ak(q,q,l,k,j)
new W.aK(H.x(new W.ab(i.querySelectorAll(".nt-param-cancel"),p),"$ia9",o,"$aa9"),!1,"click",n).ab(new U.eL(h))
h.classList.add("show")
if(r!=null){r.focus()
if(s!=null){i=W.i
q={func:1,ret:-1,args:[i]}
W.Q(r,"change",H.f(new U.eM(s,r),q),!1,i)
W.Q(r,"input",H.f(new U.eN(s,r),q),!1,i)}}},
cb:function(){return'      <input class="nt-param-input" id="nt-param-'+H.a(this.a)+'" type="text" value="'+this.gam()+'">\n      <span class="nt-param-unit">'+H.a(this.r)+"</span>\n    "},
$ibD:1}
U.eK.prototype={
$1:function(a){var u,t,s,r=this
H.d(a,"$iA")
u=r.b
if(u!=null)r.a.sH(0,u.value)
C.b.V(r.c)
u=r.a
t=u.b
s=t.id
s.L()
s.aE(new U.br(t.a,t.b,u.a,u.gH(u)))},
$S:1}
U.eL.prototype={
$1:function(a){H.d(a,"$iA")
return C.b.V(this.a)},
$S:5}
U.eM.prototype={
$1:function(a){J.hV(this.a,this.b.value)},
$S:4}
U.eN.prototype={
$1:function(a){J.hV(this.a,this.b.value)},
$S:4}
U.cG.prototype={
c3:function(a,b){this.cx=U.iz(b.h(0,"random"),!1)
this.cy=U.aN(b.h(0,"step"),this.cy)},
B:function(){var u=this.c2()
u.i(0,"random",this.cx)
u.i(0,"step",this.cy)
return u},
gH:function(a){return U.aN(this.c,0)},
sH:function(a,b){this.c=U.aN(b,0)},
gam:function(){var u=J.ko(this.gH(this),1)
if(C.e.eB(u,".0"))u=C.e.ae(u,0,u.length-2)
return u+H.a(this.r)},
cb:function(){var u=this
return'      <div class="nt-param-name">'+H.a(u.f)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+H.a(u.a)+'" type="number" step="'+H.a(u.cy)+'" value="'+H.a(u.gH(u))+'">\n        <span class="nt-param-unit">'+H.a(u.r)+"</span>\n      </div>\n    "}}
U.ed.prototype={
gH:function(a){return U.iA(this.c,0)},
sH:function(a,b){this.c=U.iA(b,0)}}
U.eS.prototype={
B:function(){var u=this.dq()
u.i(0,"min",this.r1)
u.i(0,"max",this.r2)
return u},
b_:function(a,b){var u,t,s,r,q,p,o,n=this,m=document,l=m.createElement("div")
l.className="backdrop"
u=m.createElement("div")
u.className="nt-param-dialog"
t=u.style
s=""+b+"px"
t.top=s
r=m.createElement("div")
r.className="nt-param-table"
C.b.aa(r,'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.a(n.f)+':\n            <label id="nt-param-label-'+H.a(n.a)+'" for="nt-param-'+H.a(n.a)+'">'+H.a(U.aN(n.c,0))+'</label>\n            <span class="nt-param-unit">'+H.a(n.r)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+H.a(n.a)+'" type="range" value="'+H.a(U.aN(n.c,0))+'" min="'+H.a(n.r1)+'" max="'+H.a(n.r2)+'" step="'+H.a(n.cy)+'">\n          </div>\n        </div>\n      ')
u.appendChild(r)
t=W.A
s={func:1,ret:-1,args:[t]}
W.Q(u,"click",H.f(new U.eT(),s),!1,t)
l.appendChild(u)
W.Q(l,"click",H.f(new U.eU(l),s),!1,t)
q=H.d(m.querySelector("#"+H.a(n.b.id.r)).parentElement,"$im")
if(q!=null)q.appendChild(l)
p=H.d(m.querySelector("#nt-param-label-"+H.a(n.a)),"$im")
o=H.d(m.querySelector("#nt-param-"+H.a(n.a)),"$ib8")
if(o!=null&&p!=null){m=W.i
t={func:1,ret:-1,args:[m]}
W.Q(o,"change",H.f(new U.eV(n,o,l),t),!1,m)
W.Q(o,"input",H.f(new U.eW(p,o),t),!1,m)}l.classList.add("show")}}
U.eT.prototype={
$1:function(a){H.d(a,"$iA").stopPropagation()},
$S:1}
U.eU.prototype={
$1:function(a){H.d(a,"$iA")
C.b.V(this.a)},
$S:1}
U.eV.prototype={
$1:function(a){var u,t,s=this.a
s.c=U.aN(this.b.value,0)
C.b.V(this.c)
u=s.b
t=u.id
t.L()
t.aE(new U.br(u.a,u.b,s.a,U.aN(s.c,0)))
a.stopPropagation()},
$S:4}
U.eW.prototype={
$1:function(a){J.hV(this.a,this.b.value)},
$S:4}
U.eZ.prototype={
gam:function(){return H.a(J.I(this.cy))+H.a(this.r)+" \u25be"},
b4:function(a,b){return U.j7(b,this.B())},
B:function(){var u=this.c2()
u.i(0,"values",this.cx)
return u},
cc:function(a){var u="display",t=H.M(a.t(u))&&!J.Y(J.X(a,u),""),s=J.N(a)
return t?s.h(a,u):s.h(a,"actual")},
b_:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="display",g=document,f=g.createElement("div")
f.className="backdrop"
u=g.createElement("div")
u.className="nt-param-dialog small"
t=u.style
s=""+b+"px"
t.top=s
r=g.createElement("div")
r.className="nt-param-table"
for(t=J.y(i.cx),s=W.A,q={func:1,ret:-1,args:[s]};t.l();){p=t.gq()
o=g.createElement("div")
o.className="nt-param-row"
n=H.M(p.t(h))&&!J.Y(J.X(p,h),"")
m=J.N(p)
l=n?m.h(p,h):m.h(p,"actual")
k=g.createElement("div")
k.className="nt-select-option"
C.b.a6(k,H.w(l))
n=J.X(p,"actual")
m=i.c
if(J.Y(n,m==null?"":J.I(m)))k.classList.add("selected")
W.Q(k,"click",H.f(new U.f_(i,p,f),q),!1,s)
o.appendChild(k)
r.appendChild(o)}u.appendChild(r)
f.appendChild(u)
W.Q(f,"click",H.f(new U.f0(f),q),!1,s)
j=H.d(g.querySelector("#"+H.a(i.b.id.r)).parentElement,"$im")
if(j!=null)j.appendChild(f)
f.classList.add("show")}}
U.f_.prototype={
$1:function(a){var u,t,s,r,q
H.d(a,"$iA")
u=this.a
t=this.b
u.cy=u.cc(t)
t=J.X(t,"actual")
u.c=t==null?"":J.I(t)
C.b.V(this.c)
t=u.b
s=t.id
s.L()
r=t.a
t=t.b
q=u.a
u=u.c
s.aE(new U.br(r,t,q,u==null?"":J.I(u)))
a.stopPropagation()},
$S:1}
U.f0.prototype={
$1:function(a){H.d(a,"$iA")
C.b.V(this.a)},
$S:1}
U.dO.prototype={
gam:function(){var u=this.cx
return u!=null?u.n(0):""},
gH:function(a){return this.c},
sH:function(a,b){var u
this.c=b
u=this.cx
if(u!=null)u.aB(b)},
b4:function(a,b){return U.i1(b,this.B())},
b_:function(a,b){var u,t,s,r,q,p,o,n=this,m=".nt-param-confirm",l="The type argument '",k="' is not a subtype of the type variable bound '",j="' of type variable 'T' in 'querySelectorAll'.",i="click",h=document,g=h.createElement("div")
g.className="backdrop"
C.b.aa(g,'      <div class="nt-param-dialog" style="top: '+b+';">\n        <div class="nt-param-table">\n          <div class="nt-param-row">\n            <div class="nt-param-label">'+H.a(n.f)+':</div>\n          </div>\n          <div class="nt-param-row">\n            <div id="nt-expression-'+H.a(n.a)+'" class="nt-expression-root"></div>\n          </div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>')
u=H.d(h.querySelector("#"+H.a(n.b.id.r)).parentElement,"$im")
if(u==null)return
u.appendChild(g)
t=W.t
H.ak(t,t,l,k,j)
s=[t]
r=[t]
q=[W.A]
new W.aK(H.x(new W.ab(h.querySelectorAll(m),s),"$ia9",r,"$aa9"),!1,i,q).ab(new U.dS(n,g))
H.ak(t,t,l,k,j)
new W.aK(H.x(new W.ab(h.querySelectorAll(m),s),"$ia9",r,"$aa9"),!1,"mousedown",q).ab(new U.dT())
H.ak(t,t,l,k,j)
new W.aK(H.x(new W.ab(h.querySelectorAll(m),s),"$ia9",r,"$aa9"),!1,"mouseup",q).ab(new U.dU())
H.ak(t,t,l,k,j)
new W.aK(H.x(new W.ab(h.querySelectorAll(".nt-param-cancel"),s),"$ia9",r,"$aa9"),!1,i,q).ab(new U.dV(g))
g.classList.add("show")
p=n.cx
o="#nt-expression-"+H.a(n.a)
p.toString
p.b=h.querySelector(o)
p.bQ()
H.ak(t,t,l,k,j)
new W.aK(H.x(new W.ab(h.querySelectorAll(".nt-param-dialog"),s),"$ia9",r,"$aa9"),!1,i,q).ab(new U.dW())}}
U.dS.prototype={
$1:function(a){var u,t,s
H.d(a,"$iA")
u=W.t
t=document
H.ak(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
if(t.querySelectorAll(".nt-expression.empty").length>0)return!1
u=this.a
u.c=u.cx.c.B()
C.b.V(this.b)
t=u.b
s=t.id
s.L()
s.aE(new U.br(t.a,t.b,u.a,u.c))},
$S:33}
U.dT.prototype={
$1:function(a){var u,t
H.d(a,"$iA")
u=W.t
t=document
H.ak(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.ab(t.querySelectorAll(".nt-expression.empty"),[u])
u.w(u,new U.dR())},
$S:1}
U.dR.prototype={
$1:function(a){return J.iK(H.d(a,"$it")).p(0,"warn")},
$S:18}
U.dU.prototype={
$1:function(a){var u,t
H.d(a,"$iA")
u=W.t
t=document
H.ak(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.ab(t.querySelectorAll(".nt-expression.empty"),[u])
u.w(u,new U.dQ())},
$S:1}
U.dQ.prototype={
$1:function(a){return J.iK(H.d(a,"$it")).G(0,"warn")},
$S:18}
U.dV.prototype={
$1:function(a){H.d(a,"$iA")
C.b.V(this.a)},
$S:1}
U.dW.prototype={
$1:function(a){var u,t
H.d(a,"$iA")
u=W.t
t=document
H.ak(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.ab(t.querySelectorAll(".nt-pulldown-menu"),[u])
u.w(u,new U.dP())},
$S:1}
U.dP.prototype={
$1:function(a){return J.bO(H.d(a,"$it"))},
$S:14}
U.eR.prototype={}
U.dp.prototype={
d8:function(){return P.iY(P.i7(["type","block-changed","blockId",this.b,"instanceId",this.c],P.j,P.u))}}
U.br.prototype={
d8:function(){var u=this
return P.iY(P.i7(["type","attribute-changed","blockId",u.b,"instanceId",u.c,"attributeId",u.d,"value",u.e],P.j,null))}}
U.bU.prototype={
dw:function(a,b){var u,t,s,r,q,p,o,n,m=this,l="variables",k="expressions",j=m.Q
if(!J.Y(j.h(0,"version"),2))throw H.h("The supported NetTango version is 2, but the given definition version was "+H.a(j.h(0,"version"))+".")
u=m.r
t="#"+H.a(u)
s=H.d(document.querySelector(t),"$ib2")
if(s==null)throw H.h("No canvas element with ID "+H.a(u)+" found.")
m.dy=H.d(C.p.bZ(s,"2d"),"$ib3")
u=s.style
t=H.a(s.width)+"px"
u.width=t
u=s.style
t=H.a(s.height)+"px"
u.height=t
u=s.width
t=$.ad()
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.c(t)
m.ch=C.c.b9(u*t)
u=s.height
if(typeof u!=="number")return u.m()
u=C.c.b9(u*t)
m.cx=u
s.width=m.ch
s.height=u
u=m.c
r=[P.a7]
q=new U.bA(H.C([1,0,0,0,1,0,0,0,1],r))
q.seZ(H.C([1/t,0,0,0,1/t,0,0,0,1],r))
u.eO(q)
m.d=u.eH()
u=m.fr
u.eP(s)
C.a.p(u.c,m)
u=H.C([],[U.at])
q=$.bp()
r=$.hT()
if(typeof r!=="number")return r.m()
if(typeof q!=="number")return q.k()
m.cy=new U.dq(m,u,q+r*2)
if(!!J.k(j.h(0,"blocks")).$io)for(u=J.y(H.S(j.h(0,"blocks"),"$ip"));u.l();){p=H.d(u.gq(),"$iq")
o=U.iP(m,p)
n=U.iA(p.h(0,"limit"),-1)
t=m.cy
r=t.b
t=t.a
q=new U.at(o,t,n)
o.rx=!0
C.a.p(t.a,q)
C.a.p(r,q)}if(!!J.k(j.h(0,l)).$io)m.db=H.a8(j.h(0,l))
if(!!J.k(j.h(0,k)).$io)m.dx=H.a8(j.h(0,k))
if(!!J.k(j.h(0,"program")).$iq)m.ec(H.d(j.h(0,"program"),"$iq"))
m.L()
m.d7()},
eW:function(){var u=this
C.a.sj(u.a,0)
C.a.sj(u.x,0)
C.a.G(u.fr.c,u)},
d7:function(){if(this.ep(0))this.L()
C.Q.geq(window).d5(new U.dw(this),-1)},
aE:function(a){var u
this.L()
try{$.iG().h(0,"NetTango").b1("_relayCallback",[this.r,a.d8()])}catch(u){H.P(u)
P.ix("Unable to relay program changed event to Javascript")}},
bL:function(){var u,t,s,r,q,p,o,n=P.i9(["chains",[]])
for(u=this.x,t=u.length,s=0;s<u.length;u.length===t||(0,H.W)(u),++s){r=u[s]
if(r.gcW()){q=n.h(0,"chains")
p=[]
r.X(p)
J.aO(q,p)}}for(u=this.cy.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.W)(u),++s){q=u[s].a
if(q.go)if(this.aG(q.a)===0){o=n.h(0,"chains")
p=[]
q.X(p)
J.aO(o,p)}}return n},
aq:function(a){var u,t
C.a.p(this.x,a)
u=this.a
C.a.p(u,a)
for(t=a.cy,t=t.gW(t),t=new H.a5(J.y(t.a),t.b,[H.b(t,0),H.b(t,1)]);t.l();)C.a.p(u,t.a)
for(t=a.db,t=t.gW(t),t=new H.a5(J.y(t.a),t.b,[H.b(t,0),H.b(t,1)]);t.l();)C.a.p(u,t.a)},
e7:function(a){var u,t
C.a.G(this.x,a)
u=this.a
C.a.G(u,a)
for(t=a.cy,t=t.gW(t),t=new H.a5(J.y(t.a),t.b,[H.b(t,0),H.b(t,1)]);t.l();)C.a.G(u,t.a)
for(t=a.db,t=t.gW(t),t=new H.a5(J.y(t.a),t.b,[H.b(t,0),H.b(t,1)]);t.l();)C.a.G(u,t.a)
this.L()},
aG:function(a){var u=this.x,t=H.b(u,0)
t=new H.aJ(u,H.f(new U.dv(a),{func:1,ret:P.E,args:[t]}),[t])
return t.gj(t)},
cF:function(a){var u,t,s=this.cq(a)
if(s!=null){u=s.z
s.z=a
a.Q=s
if(u!=null){t=a.gaz()
u.Q=t
t.z=u}return!0}s=this.cp(a)
if(s!=null){s.Q=a
a.z=s
return!0}return!1},
ek:function(a){var u,t
if(this.cy.eK(a)){for(u=this.x,t=this.a;a!=null;){C.a.G(u,a)
C.a.G(t,a)
a=a.gbd()}return!0}return!1},
cq:function(a){var u,t,s,r,q,p,o,n,m
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
q=r.rx?$.v():r.y
if(typeof n!=="number")return n.k()
if(typeof q!=="number")return H.c(q)
m=n+q
q=$.a3()
if(typeof q!=="number")return H.c(q)
p=r.z==null
if(!p){o=a.r
if(typeof o!=="number")return o.a0()
o=o<m&&o>n}else o=!1
if(o)return r
else{if(p){p=a.r
if(typeof p!=="number")return p.C()
q=p>n&&p<m+q}else q=!1
if(q)return r}}}}return},
cp:function(a){var u,t,s,r,q,p,o
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
o=a.rx?$.v():a.y
if(typeof p!=="number")return p.k()
if(typeof o!=="number")return H.c(o)
if(typeof q!=="number")return q.R()
if(Math.abs(q-(p+o))<20)return r}}}return},
ep:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
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
n=p.rx?$.v():p.y
if(typeof o!=="number")return o.k()
if(typeof n!=="number")return H.c(n)
r=Math.max(o+n,r)}if(r>g.cx)if(!s){u=g.ch
t=$.ad()
if(typeof t!=="number")return H.c(t)
o=$.v()
if(typeof o!=="number")return o.m()
j=C.r.d2(u/t)
i=C.r.d2((r+o*3)/t)
o="#"+H.a(g.r)
h=H.d(document.querySelector(o),"$ib2")
if(h!=null){u=h.style
o=""+j+"px"
u.width=o
u=h.style
o=""+i+"px"
u.height=o
g.ch=C.c.b9(j*t)
u=C.c.b9(i*t)
g.cx=u
h.width=g.ch
h.height=u
g.dy=H.d(C.p.bZ(h,"2d"),"$ib3")
g.L()}}return s},
L:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
h.dy.save()
h.dy.clearRect(0,0,h.ch,h.cx)
u=H.C([],[U.an])
for(t=h.x,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.W)(t),++q){p=t[q]
if(p.Q==null&&!(p instanceof U.ao)){p.Y(0,null)
p.ag()
p.aX(h.dy,$.bp())}if(p.k2)C.a.p(u,p)
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
if(p.k2){l=h.cq(p)
if(l!=null){o=h.dy
o.save()
o.lineWidth=5
o.strokeStyle="cyan"
o.beginPath()
n=l.f
m=l.x
if(typeof n!=="number")return n.k()
if(typeof m!=="number")return H.c(m)
k=$.a3()
if(typeof k!=="number")return H.c(k)
j=l.r
i=l.rx?$.v():l.y
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.c(i)
o.moveTo(n+m-k,j+i)
l.bB(o,l.z==null&&l.ch===0)
o.stroke()
o.restore()}else{l=h.cp(p)
if(l!=null){o=h.dy
o.save()
o.lineWidth=5
o.strokeStyle="cyan"
o.beginPath()
n=l.f
m=$.a3()
if(typeof n!=="number")return n.k()
if(typeof m!=="number")return H.c(m)
k=$.bo()
j=l.gaC()
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
if(!!J.k(a.h(0,"chains")).$io)for(u=J.y(H.S(a.h(0,"chains"),"$ip"));u.l();){t=u.gq()
s=J.k(t)
if(!!s.$io)for(s=s.gu(t);s.l();){r=s.gq()
if(!!J.k(r).$iq)this.bF(r)}}},
bF:function(a){var u,t,s,r,q,p,o,n,m=this,l="children",k=m.cy.de(H.z(a.h(0,"id")))
if(k==null){P.ix("No prototype block found for id: "+H.a(a.h(0,"id")))
u=m.cy.b
t=P.H
s=H.b(u,0)
P.ix(new H.aU(u,H.f(new U.du(),{func:1,ret:t,args:[s]}),[s,t]))
return}r=k.b3(0)
u=a.h(0,"x")
if(typeof u==="number"){u=a.h(0,"y")
u=typeof u==="number"}else u=!1
if(u){u=a.h(0,"x")
t=$.iB()
r.f=H.dj(J.iI(u,t))
r.r=H.dj(J.iI(a.h(0,"y"),t))}m.aq(r)
if(!!r.$ibs)for(u=r.N,t=u.length,q=0;q<u.length;u.length===t||(0,H.W)(u),++q)m.aq(u[q])
m.cF(r)
for(u=m.x,t=u.length,q=0;q<u.length;u.length===t||(0,H.W)(u),++q){p=u[q]
if(p.Q==null&&!(p instanceof U.ao)){p.Y(0,null)
p.ag()
p.aX(m.dy,$.bp())}}m.eb(r,H.a8(a.h(0,"params")),H.a8(a.h(0,"properties")))
if(!!J.k(a.h(0,l)).$io)for(u=J.y(H.S(a.h(0,l),"$ip"));u.l();){o=u.gq()
if(!!J.k(o).$iq)m.bF(o)}if(!!J.k(a.h(0,"clauses")).$io)for(u=J.y(H.S(a.h(0,"clauses"),"$ip"));u.l();){n=u.gq()
t=J.k(n)
if(!!t.$iq&&!!J.k(n.h(0,l)).$io)for(t=J.y(H.S(t.h(n,l),"$ip"));t.l();)m.bF(H.d(t.gq(),"$iq"))}},
eb:function(a,b,c){var u,t,s,r,q="id",p="value",o=J.k(b)
if(!!o.$io)for(o=o.gu(b),u=a.cy;o.l();){t=o.gq()
s=J.k(t)
if(!!s.$iq&&H.M(t.t(q))&&H.M(t.t(p))&&u.t(t.h(0,q)))J.iL(u.h(0,s.h(t,q)),s.h(t,p))}o=J.k(c)
if(!!o.$io)for(o=o.gu(c),u=a.db;o.l();){r=o.gq()
s=J.k(r)
if(!!s.$iq&&H.M(r.t(q))&&H.M(r.t(p))&&u.t(r.h(0,q)))J.iL(u.h(0,s.h(r,q)),s.h(r,p))}}}
U.dw.prototype={
$1:function(a){H.dj(a)
return this.a.d7()},
$S:44}
U.dv.prototype={
$1:function(a){return H.d(a,"$ian").a==this.a},
$S:36}
U.du.prototype={
$1:function(a){return H.d(a,"$iat").a.a},
$S:37}
U.bA.prototype={
eH:function(){var u,t,s,r,q,p,o,n,m,l,k,j=H.C([1,0,0,0,1,0,0,0,1],[P.a7]),i=new U.bA(j),h=this.a,g=h.length
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
eO:function(a){var u,t,s,r,q,p,o,n=this,m=H.C([1,0,0,0,1,0,0,0,1],[P.a7]),l=n.a,k=l.length
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
aF:function(a){var u,t,s,r,q,p,o=a.c,n=this.a,m=n.length
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
seZ:function(a){this.a=H.x(a,"$io",[P.a7],"$ao")}}
U.fd.prototype={
b8:function(a){var u,t,s
for(u=this.c,t=0;t<u.length;++t){s=u[t].b8(a)
if(s!=null){if(t>=u.length)return H.e(u,t)
u[t].e=new P.aA(Date.now(),!1)
if(t>=u.length)return H.e(u,t)
return new U.cQ(u[t],s)}else if(t>=u.length)return H.e(u,t)}return},
eP:function(a){var u=this,t=W.A,s={func:1,ret:-1,args:[t]}
W.Q(a,"mousedown",H.f(new U.fe(u),s),!1,t)
W.Q(a,"mouseup",H.f(new U.ff(u),s),!1,t)
W.Q(a,"mousemove",H.f(new U.fg(u),s),!1,t)
t=document
s=W.aT
W.Q(t,"keydown",H.f(new U.fh(u),{func:1,ret:-1,args:[s]}),!1,s)
s=W.aW
W.Q(t,"touchmove",H.f(new U.fi(),{func:1,ret:-1,args:[s]}),!1,s)},
e1:function(a){var u,t
for(u=this.c.length,t=0;t<u;++t);}}
U.fe.prototype={
$1:function(a){var u=this.a,t=U.hZ(H.d(a,"$iA")),s=u.b8(t)
if(s!=null){s.a.d.aF(t)
s.b=s.b.al(t)
u.d.i(0,-1,s)}u.a=!0
return},
$S:5}
U.ff.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iA")
u=this.a
t=u.d
s=t.h(0,-1)
if(s!=null){r=U.hZ(a)
s.a.d.aF(r)
s.b.bX(r)}t.i(0,-1,null)
u.a=!1
return},
$S:5}
U.fg.prototype={
$1:function(a){var u=this.a,t=U.hZ(H.d(a,"$iA")),s=u.d.h(0,-1)
if(s!=null){s.a.d.aF(t)
s.b.bV(t)}else{s=u.b8(t)
if(s!=null)if(u.a){s.a.d.aF(t)
s.b.bW(t)}}return},
$S:5}
U.fh.prototype={
$1:function(a){return this.a.e1(H.d(a,"$iaT"))},
$S:38}
U.fi.prototype={
$1:function(a){return H.d(a,"$iaW").preventDefault()},
$S:39}
U.cR.prototype={
b8:function(a){var u,t,s=new U.cq()
s.a=a.a
s.b=a.b
s.c=a.c
s.d=a.d
s.e=a.e
s.f=a.f
s.Q=a.Q
this.d.aF(s)
for(u=this.a,t=u.length-1;t>=0;--t){if(t>=u.length)return H.e(u,t)
if(u[t].b6(s)){if(t>=u.length)return H.e(u,t)
return u[t]}}return}}
U.cQ.prototype={}
U.bD.prototype={}
U.cq.prototype={}
U.fq.prototype={
$1:function(a){var u,t
if(!H.M(a.t("action")))return
u=this.b
t=u.a
a.i(0,"id",t)
u.i(0,H.w(a.h(0,"action")),t)
u=this.a
this.c.i(0,t,u.a)
u.a=U.je(u.a,H.x(a,"$iq",[P.j,P.u],"$aq"))},
$S:15}
U.fr.prototype={
$1:function(a){U.l6(this.a,this.b,a)},
$S:15}
U.fp.prototype={
$1:function(a){var u=this.a
u.a=U.l7(u.a,a)},
$S:41}
U.fs.prototype={
$1:function(a){return P.i7(["actual",a],P.j,null)},
$S:42}
U.ft.prototype={
$1:function(a){return H.M(a.t("type"))&&J.Y(J.X(a,"type"),"select")},
$S:43};(function aliases(){var u=J.R.prototype
u.dk=u.n
u.dj=u.be
u=J.cy.prototype
u.dm=u.n
u=P.bE.prototype
u.ds=u.aI
u=P.T.prototype
u.dt=u.ar
u.du=u.aH
u=P.p.prototype
u.dl=u.ac
u=P.u.prototype
u.dr=u.n
u=W.t.prototype
u.bj=u.M
u=W.db.prototype
u.dv=u.a4
u=P.aj.prototype
u.dn=u.h
u.c1=u.i
u=U.an.prototype
u.di=u.ag
u.dh=u.aT
u=U.as.prototype
u.c2=u.B
u=U.cG.prototype
u.dq=u.B})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers._instance_0u,q=hunkHelpers._instance_1i,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0i,l=hunkHelpers._static_2
u(P,"lx","ld",6)
u(P,"ly","le",6)
u(P,"lz","lf",6)
t(P,"jE","lv",0)
s(P,"lA",1,null,["$2","$1"],["jt",function(a){return P.jt(a,null)}],7,0)
t(P,"jD","lr",0)
var k
r(k=P.U.prototype,"gaR","a2",0)
r(k,"gaS","a3",0)
q(P.bE.prototype,"gen","p",8)
p(P.V.prototype,"gci",0,1,function(){return[null]},["$2","$1"],["aL","dJ"],7,0)
r(k=P.cW.prototype,"gaR","a2",0)
r(k,"gaS","a3",0)
r(k=P.T.prototype,"gaR","a2",0)
r(k,"gaS","a3",0)
r(P.cZ.prototype,"gef","ah",0)
r(k=P.d0.prototype,"gaR","a2",0)
r(k,"gaS","a3",0)
o(k,"gdU","dV",8)
n(k,"gdZ","e_",34)
r(k,"gdX","dY",0)
u(P,"lC","lm",3)
s(W,"lH",4,null,["$4"],["lh"],13,0)
s(W,"lI",4,null,["$4"],["li"],13,0)
m(W.dd.prototype,"gex","bI",0)
u(P,"lQ","hC",3)
u(P,"lP","ih",46)
l(U,"m_","lB",47)
l(U,"lX","kJ",48)
u(U,"lW","kI",49)
l(U,"lV","kH",50)
u(U,"lZ","kL",16)
t(U,"lY","kK",51)
u(U,"hR","la",52)
u(U,"lU","l9",35)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.u,null)
s(P.u,[H.i5,J.R,J.b0,P.p,H.c2,P.ar,H.b7,H.ca,P.ew,H.dz,H.bT,H.eg,H.fj,P.b5,H.dc,P.aF,H.ep,H.eq,H.eh,P.hw,P.a_,P.T,P.bE,P.fF,P.aw,P.V,P.cU,P.a0,P.f4,P.aY,P.fJ,P.ci,P.cZ,P.a4,P.hA,P.h4,P.hk,P.bG,P.d5,P.d6,P.L,P.hy,P.bC,P.da,P.dx,P.ha,P.E,P.aA,P.a2,P.eJ,P.cN,P.fP,P.ea,P.aq,P.o,P.q,P.c3,P.B,P.O,P.j,P.au,P.aH,W.dG,W.dd,W.bk,W.af,W.cE,W.db,W.hp,W.cu,W.fH,W.aa,W.hj,W.df,P.aj,P.aG,U.an,U.aB,U.dN,U.co,U.dq,U.at,U.as,U.eR,U.cR,U.bA,U.fd,U.cQ,U.bD,U.cq])
s(J.R,[J.ef,J.cx,J.cy,J.b9,J.by,J.ba,H.c5,W.b6,W.bt,W.b3,W.cX,W.dI,W.cs,W.dJ,W.i,W.d2,W.bY,W.cA,W.d8,W.dg,P.c0])
s(J.cy,[J.eP,J.bg,J.bb])
t(J.i4,J.b9)
s(J.by,[J.cw,J.cv])
s(P.p,[H.F,H.bz,H.aJ,H.cP,H.cL,H.fG])
s(H.F,[H.aE,H.aD,P.h3,P.ah])
t(H.bv,H.bz)
s(P.ar,[H.a5,H.cT,H.fb,H.f2])
s(H.aE,[H.aU,P.h8])
t(H.dL,H.cP)
t(H.dK,H.cL)
t(P.de,P.ew)
t(P.fn,P.de)
t(H.dA,P.fn)
s(H.bT,[H.dB,H.eQ,H.hS,H.fc,H.ei,H.hM,H.hN,H.hO,P.fx,P.fw,P.fy,P.fz,P.hx,P.hr,P.hs,P.fR,P.fY,P.fU,P.fV,P.fW,P.fS,P.fX,P.h0,P.h1,P.h_,P.fZ,P.f5,P.f6,P.f7,P.f8,P.fD,P.fC,P.he,P.hF,P.hh,P.hg,P.hi,P.ev,P.hb,P.eF,W.dM,W.fu,W.fO,W.ho,W.eH,W.eG,W.hl,W.hm,W.hv,W.hz,P.dF,P.e6,P.e7,P.e8,P.ek,P.hD,P.hE,P.hG,P.hH,P.hI,U.dZ,U.e_,U.e0,U.dY,U.e1,U.e4,U.e2,U.e3,U.dX,U.dr,U.eK,U.eL,U.eM,U.eN,U.eT,U.eU,U.eV,U.eW,U.f_,U.f0,U.dS,U.dT,U.dR,U.dU,U.dQ,U.dV,U.dW,U.dP,U.dw,U.dv,U.du,U.fe,U.ff,U.fg,U.fh,U.fi,U.fq,U.fr,U.fp,U.fs,U.ft])
t(H.dC,H.dz)
s(P.b5,[H.eI,H.ej,H.fm,H.cS,H.dt,H.eX,P.dm,P.cz,P.cF,P.ay,P.eE,P.fo,P.fl,P.aV,P.dy,P.dH])
s(H.fc,[H.f3,H.bR])
t(H.fv,P.dm)
t(P.et,P.aF)
s(P.et,[H.K,P.h2,P.h7,W.fA])
t(H.cB,H.c5)
s(H.cB,[H.ce,H.cg])
t(H.cf,H.ce)
t(H.c4,H.cf)
t(H.ch,H.cg)
t(H.cC,H.ch)
s(H.cC,[H.ex,H.ey,H.ez,H.eA,H.eB,H.cD,H.eC])
s(P.a_,[P.hn,P.fQ,W.d_,W.aK])
t(P.cV,P.hn)
t(P.fB,P.cV)
s(P.T,[P.cW,P.d0])
t(P.U,P.cW)
t(P.hq,P.bE)
t(P.ht,P.fF)
s(P.aY,[P.fI,P.fK])
t(P.cj,P.ci)
t(P.hd,P.fQ)
t(P.hf,P.hA)
t(P.h5,P.h2)
t(P.hc,P.hk)
t(P.es,P.d6)
t(P.f1,P.da)
t(P.bV,P.f4)
t(P.em,P.cz)
t(P.el,P.dx)
s(P.bV,[P.eo,P.en])
t(P.h9,P.ha)
s(P.a2,[P.a7,P.H])
s(P.ay,[P.cI,P.ec])
s(W.b6,[W.r,W.bh,W.aX])
s(W.r,[W.t,W.b4,W.cc])
s(W.t,[W.m,P.l])
s(W.m,[W.bP,W.dl,W.bQ,W.b1,W.b2,W.bu,W.e9,W.b8,W.eY,W.cO,W.f9,W.fa,W.cb])
t(W.bW,W.cX)
s(P.es,[W.fE,W.ab,W.a6,P.e5])
t(W.d3,W.d2)
t(W.bw,W.d3)
t(W.bf,W.i)
s(W.bf,[W.aT,W.A,W.aW])
t(W.d9,W.d8)
t(W.c6,W.d9)
t(W.cY,W.cs)
t(W.dh,W.dg)
t(W.d7,W.dh)
t(W.fL,W.fA)
t(P.dE,P.f1)
s(P.dE,[W.fM,P.dn])
t(W.id,W.d_)
t(W.fN,P.a0)
t(W.hu,W.db)
s(P.aj,[P.c_,P.d4])
t(P.bZ,P.d4)
t(P.c8,P.l)
t(U.dD,U.an)
s(U.dD,[U.ao,U.bs])
t(U.ct,U.ao)
s(U.co,[U.eO,U.eD])
s(U.as,[U.cG,U.eZ,U.dO])
s(U.cG,[U.ed,U.eS])
s(U.eR,[U.dp,U.br])
t(U.bU,U.cR)
u(H.ce,P.L)
u(H.cf,H.b7)
u(H.cg,P.L)
u(H.ch,H.b7)
u(P.d6,P.L)
u(P.da,P.bC)
u(P.de,P.hy)
u(W.cX,W.dG)
u(W.d2,P.L)
u(W.d3,W.af)
u(W.d8,P.L)
u(W.d9,W.af)
u(W.dg,P.L)
u(W.dh,W.af)
u(P.d4,P.L)})()
var v={mangledGlobalNames:{H:"int",a7:"double",a2:"num",j:"String",E:"bool",B:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1},{func:1,ret:P.B,args:[W.A]},{func:1,ret:P.B},{func:1,args:[,]},{func:1,ret:P.B,args:[W.i]},{func:1,ret:-1,args:[W.A]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.u],opt:[P.O]},{func:1,ret:-1,args:[P.u]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.B,args:[,,]},{func:1,ret:P.E,args:[W.r]},{func:1,ret:P.E,args:[W.aa]},{func:1,ret:P.E,args:[W.t,P.j,P.j,W.bk]},{func:1,ret:-1,args:[W.t]},{func:1,ret:P.B,args:[[P.q,,,]]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.E,args:[P.j]},{func:1,ret:P.E,args:[W.t]},{func:1,ret:P.B,args:[P.j,,]},{func:1,ret:P.B,args:[P.a2]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:P.E,args:[[P.ah,P.j]]},{func:1,ret:W.t,args:[W.r]},{func:1,ret:P.c_,args:[,]},{func:1,ret:[P.bZ,,],args:[,]},{func:1,args:[W.i]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,args:[,P.j]},{func:1,ret:P.B,args:[P.j]},{func:1,ret:P.B,args:[P.aH,,]},{func:1,ret:P.E,args:[U.at]},{func:1,args:[P.j]},{func:1,ret:P.E,args:[W.A]},{func:1,ret:-1,args:[,P.O]},{func:1,ret:-1,args:[[P.o,,]]},{func:1,ret:P.E,args:[U.an]},{func:1,ret:P.H,args:[U.at]},{func:1,ret:-1,args:[W.aT]},{func:1,ret:-1,args:[W.aW]},{func:1,ret:[P.V,,],args:[,]},{func:1,ret:P.B,args:[[P.o,,]]},{func:1,ret:[P.q,P.j,,],args:[,]},{func:1,ret:P.E,args:[,]},{func:1,ret:-1,args:[P.a2]},{func:1,ret:P.B,args:[,],opt:[P.O]},{func:1,ret:P.u,args:[,]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[P.j]},{func:1,ret:P.j,args:[P.j,P.j]},{func:1,ret:P.j},{func:1,ret:-1,args:[[P.q,,,]]},{func:1,ret:P.aj,args:[,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bP.prototype
C.m=W.b1.prototype
C.p=W.b2.prototype
C.q=W.b3.prototype
C.b=W.bu.prototype
C.G=J.R.prototype
C.a=J.b9.prototype
C.r=J.cv.prototype
C.f=J.cw.prototype
C.t=J.cx.prototype
C.c=J.by.prototype
C.e=J.ba.prototype
C.H=J.bb.prototype
C.O=W.c6.prototype
C.w=J.eP.prototype
C.x=W.cO.prototype
C.k=J.bg.prototype
C.Q=W.bh.prototype
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

C.h=new P.el()
C.E=new P.eJ()
C.F=new P.fJ()
C.d=new P.hf()
C.I=new P.en(null)
C.J=new P.eo(null)
C.K=H.C(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.L=H.C(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.M=H.C(u([]),[P.j])
C.u=u([])
C.i=H.C(u(["bind","if","ref","repeat","syntax"]),[P.j])
C.j=H.C(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.N=H.C(u([]),[P.aH])
C.v=new H.dC(0,{},C.N,[P.aH,null])
C.P=new H.ca("call")})();(function staticFields(){$.az=0
$.bS=null
$.iQ=null
$.ik=!1
$.jK=null
$.jB=null
$.jT=null
$.hJ=null
$.hP=null
$.iv=null
$.bH=null
$.ck=null
$.cl=null
$.il=!1
$.G=C.d
$.ac=[]
$.aQ=null
$.i_=null
$.iV=null
$.iU=null
$.d1=P.er(P.j,P.aq)
$.cp=null
$.a1=P.i8()})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"me","hU",function(){return H.iu("_$dart_dartClosure")})
u($,"mh","iC",function(){return H.iu("_$dart_js")})
u($,"ml","jY",function(){return H.aI(H.fk({
toString:function(){return"$receiver$"}}))})
u($,"mm","jZ",function(){return H.aI(H.fk({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mn","k_",function(){return H.aI(H.fk(null))})
u($,"mo","k0",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mr","k3",function(){return H.aI(H.fk(void 0))})
u($,"ms","k4",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mq","k2",function(){return H.aI(H.jb(null))})
u($,"mp","k1",function(){return H.aI(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mu","k6",function(){return H.aI(H.jb(void 0))})
u($,"mt","k5",function(){return H.aI(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mx","iD",function(){return P.lc()})
u($,"mg","dk",function(){var t=new P.V(C.d,[P.B])
t.eg(null)
return t})
u($,"mz","k7",function(){return P.j0(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)})
u($,"md","jX",function(){return P.l0("^\\S+$")})
u($,"mD","iG",function(){return H.d(P.ip(self),"$iaj")})
u($,"my","iE",function(){return H.iu("_$dart_dartObject")})
u($,"mB","iF",function(){return function DartObject(a){this.o=a}})
u($,"mj","ad",function(){return W.m6().devicePixelRatio})
u($,"mc","bp",function(){var t=$.ad()
if(typeof t!=="number")return H.c(t)
return 80*t})
u($,"m8","v",function(){var t=$.ad()
if(typeof t!=="number")return H.c(t)
return 34*t})
u($,"ma","a3",function(){var t=$.ad()
if(typeof t!=="number")return H.c(t)
return 10*t})
u($,"m9","bo",function(){var t=$.ad()
if(typeof t!=="number")return H.c(t)
return 25*t})
u($,"m7","hT",function(){var t=$.ad()
if(typeof t!=="number")return H.c(t)
return 10*t})
u($,"mb","iB",function(){return $.a3()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.R,CanvasPattern:J.R,DOMError:J.R,DOMImplementation:J.R,MediaError:J.R,Navigator:J.R,NavigatorConcurrentHardware:J.R,NavigatorUserMediaError:J.R,OverconstrainedError:J.R,PositionError:J.R,Range:J.R,TextMetrics:J.R,WebGLRenderingContext:J.R,WebGL2RenderingContext:J.R,SQLError:J.R,DataView:H.c5,ArrayBufferView:H.c5,Float32Array:H.c4,Float64Array:H.c4,Int16Array:H.ex,Int32Array:H.ey,Int8Array:H.ez,Uint16Array:H.eA,Uint32Array:H.eB,Uint8ClampedArray:H.cD,CanvasPixelArray:H.cD,Uint8Array:H.eC,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.bP,HTMLAreaElement:W.dl,HTMLBaseElement:W.bQ,Blob:W.bt,File:W.bt,HTMLBodyElement:W.b1,HTMLCanvasElement:W.b2,CanvasRenderingContext2D:W.b3,CDATASection:W.b4,CharacterData:W.b4,Comment:W.b4,ProcessingInstruction:W.b4,Text:W.b4,CSSStyleDeclaration:W.bW,MSStyleCSSProperties:W.bW,CSS2Properties:W.bW,HTMLDivElement:W.bu,DOMException:W.dI,DOMRectReadOnly:W.cs,DOMTokenList:W.dJ,Element:W.t,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,EventTarget:W.b6,HTMLFormElement:W.e9,HTMLCollection:W.bw,HTMLFormControlsCollection:W.bw,HTMLOptionsCollection:W.bw,ImageData:W.bY,HTMLInputElement:W.b8,KeyboardEvent:W.aT,Location:W.cA,MouseEvent:W.A,DragEvent:W.A,PointerEvent:W.A,WheelEvent:W.A,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,DocumentType:W.r,Node:W.r,NodeList:W.c6,RadioNodeList:W.c6,HTMLSelectElement:W.eY,HTMLTableElement:W.cO,HTMLTableRowElement:W.f9,HTMLTableSectionElement:W.fa,HTMLTemplateElement:W.cb,TouchEvent:W.aW,CompositionEvent:W.bf,FocusEvent:W.bf,TextEvent:W.bf,UIEvent:W.bf,Window:W.bh,DOMWindow:W.bh,DedicatedWorkerGlobalScope:W.aX,ServiceWorkerGlobalScope:W.aX,SharedWorkerGlobalScope:W.aX,WorkerGlobalScope:W.aX,Attr:W.cc,ClientRect:W.cY,DOMRect:W.cY,NamedNodeMap:W.d7,MozNamedAttrMap:W.d7,IDBKeyRange:P.c0,SVGScriptElement:P.c8,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,TextMetrics:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:true,File:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,IDBKeyRange:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.jO,[])
else U.jO([])})})()
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
  exportCode : function(canvasId, language) {
    return NetTango_ExportCode(canvasId, language);
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

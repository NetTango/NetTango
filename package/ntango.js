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
a[c]=function(){a[c]=function(){H.m5(b)}
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
if(w[u][a])return w[u][a]}}var C={},H={i9:function i9(){},
j3:function(a,b,c,d){if(!!J.k(a).$iF)return new H.bx(a,b,[c,d])
return new H.bB(a,b,[c,d])},
l8:function(a,b,c){P.c8(b,"takeCount")
if(!!J.k(a).$iF)return new H.dN(a,b,[c])
return new H.cQ(a,b,[c])},
l5:function(a,b,c){if(!!J.k(a).$iF){P.c8(b,"count")
return new H.dM(a,b,[c])}P.c8(b,"count")
return new H.cM(a,b,[c])},
iY:function(){return new P.aX("No element")},
kI:function(){return new P.aX("Too many elements")},
ja:function(a,b,c){H.cN(a,0,J.ae(a)-1,b,c)},
cN:function(a,b,c,d,e){if(c-b<=32)H.l7(a,b,c,d,e)
else H.l6(a,b,c,d,e)},
l7:function(a,b,c,d,e){var u,t,s,r,q,p
for(u=b+1,t=J.K(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.C()
q=q>0}else q=!1
if(!q)break
p=r-1
t.i(a,r,t.h(a,p))
r=p}t.i(a,r,s)}},
l6:function(a3,a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j=C.f.cG(a5-a4+1,6),i=a4+j,h=a5-j,g=C.f.cG(a4+a5,2),f=g-j,e=g+j,d=J.K(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
H.cN(a3,a4,t-2,a6,a7)
H.cN(a3,s+2,a5,a6,a7)
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
break}}H.cN(a3,t,s,a6,a7)}else H.cN(a3,t,s,a6,a7)},
F:function F(){},
aE:function aE(){},
c3:function c3(a,b,c){var _=this
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
a5:function a5(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
aG:function aG(a,b,c){this.a=a
this.b=b
this.$ti=c},
aK:function aK(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dN:function dN(a,b,c){this.a=a
this.b=b
this.$ti=c},
fe:function fe(a,b,c){this.a=a
this.b=b
this.$ti=c},
cM:function cM(a,b,c){this.a=a
this.b=b
this.$ti=c},
dM:function dM(a,b,c){this.a=a
this.b=b
this.$ti=c},
f5:function f5(a,b,c){this.a=a
this.b=b
this.$ti=c},
b9:function b9(){},
cb:function cb(a){this.a=a},
kA:function(){throw H.h(P.D("Cannot modify unmodifiable Map"))},
bP:function(a){var u,t=H.m7(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lJ:function(a){return v.types[H.z(a)]},
lR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.k(a).$iaT},
b:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.I(a)
if(typeof u!=="string")throw H.h(H.ak(a))
return u},
bf:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
j8:function(a,b){var u,t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return
if(3>=t.length)return H.e(t,3)
u=H.v(t[3])
if(u!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return},
l2:function(a){var u,t
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=C.e.d8(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
cI:function(a){return H.kU(a)+H.ir(H.bo(a),0,null)},
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
ag:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.bH(u,10))>>>0,56320|u&1023)}throw H.h(P.cK(a,0,1114111,null,null))},
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
if(c!=null&&c.a!==0)c.w(0,new H.eT(s,t,u))
""+s.a
return J.kn(a,new H.ej(C.P,0,u,t,0))},
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
if(c==null)for(t=p.length,o=0;o<p.length;p.length===t||(0,H.W)(p),++o)C.a.p(l,s[H.v(p[o])])
else{for(t=p.length,n=0,o=0;o<p.length;p.length===t||(0,H.W)(p),++o){m=H.v(p[o])
if(c.t(m)){++n
C.a.p(l,c.h(0,m))}else C.a.p(l,s[m])}if(n!==c.a)return H.bD(a,l,c)}return q.apply(a,l)}},
c:function(a){throw H.h(H.ak(a))},
e:function(a,b){if(a==null)J.ae(a)
throw H.h(H.b0(a,b))},
b0:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ay(!0,b,s,null)
u=H.z(J.ae(a))
if(!(b<0)){if(typeof u!=="number")return H.c(u)
t=b>=u}else t=!0
if(t)return P.bz(b,a,s,null,u)
return P.cL(b,s)},
ak:function(a){return new P.ay(!0,a,null,null)},
jH:function(a){if(typeof a!=="number")throw H.h(H.ak(a))
return a},
h:function(a){var u
if(a==null)a=new P.cG()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jZ})
u.name=""}else u.toString=H.jZ
return u},
jZ:function(){return J.I(this.dartException)},
X:function(a){throw H.h(a)},
W:function(a){throw H.h(P.aq(a))},
aJ:function(a){var u,t,s,r,q,p
a=H.jX(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.C([],[P.j])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fm(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fn:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jd:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
j5:function(a,b){return new H.eL(a,b==null?null:b.method)},
ia:function(a,b){var u=b==null,t=u?null:b.method
return new H.em(a,t,u?null:b.receiver)},
P:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.hW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.bH(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ia(H.b(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.j5(H.b(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.k0()
q=$.k1()
p=$.k2()
o=$.k3()
n=$.k6()
m=$.k7()
l=$.k5()
$.k4()
k=$.k9()
j=$.k8()
i=r.Z(u)
if(i!=null)return f.$1(H.ia(H.v(u),i))
else{i=q.Z(u)
if(i!=null){i.method="call"
return f.$1(H.ia(H.v(u),i))}else{i=p.Z(u)
if(i==null){i=o.Z(u)
if(i==null){i=n.Z(u)
if(i==null){i=m.Z(u)
if(i==null){i=l.Z(u)
if(i==null){i=o.Z(u)
if(i==null){i=k.Z(u)
if(i==null){i=j.Z(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.j5(H.v(u),i))}}return f.$1(new H.fp(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cO()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ay(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cO()
return a},
b1:function(a){var u
if(a==null)return new H.dd(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dd(a)},
jT:function(a){if(a==null||typeof a!='object')return J.aQ(a)
else return H.bf(a)},
jJ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.i(0,a[u],a[t])}return b},
lQ:function(a,b,c,d,e,f){H.d(a,"$iar")
switch(H.z(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.fS("Unsupported number of arguments for wrapped closure"))},
bN:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lQ)
a.$identity=u
return u},
ky:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.f6().constructor.prototype):Object.create(new H.bT(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.az
if(typeof t!=="number")return t.k()
$.az=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.iU(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.ku(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.iU(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
ku:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lJ,a)
if(typeof a=="function")if(b)return a
else{u=c?H.iT:H.i1
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
kv:function(a,b,c,d){var u=H.i1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iU:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kx(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kv(t,!r,u,b)
if(t===0){r=$.az
if(typeof r!=="number")return r.k()
$.az=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bU
return new Function(r+H.b(q==null?$.bU=H.du("self"):q)+";return "+p+"."+H.b(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.az
if(typeof r!=="number")return r.k()
$.az=r+1
o+=r
r="return function("+o+"){return this."
q=$.bU
return new Function(r+H.b(q==null?$.bU=H.du("self"):q)+"."+H.b(u)+"("+o+");}")()},
kw:function(a,b,c,d){var u=H.i1,t=H.iT
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
kx:function(a,b){var u,t,s,r,q,p,o,n=$.bU
if(n==null)n=$.bU=H.du("self")
u=$.iS
if(u==null)u=$.iS=H.du("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kw(s,!q,t,b)
if(s===1){n="return function(){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+");"
u=$.az
if(typeof u!=="number")return u.k()
$.az=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+", "+o+");"
u=$.az
if(typeof u!=="number")return u.k()
$.az=u+1
return new Function(n+u+"}")()},
iv:function(a,b,c,d,e,f,g){return H.ky(a,b,c,d,!!e,!!f,g)},
i1:function(a){return a.a},
iT:function(a){return a.c},
du:function(a){var u,t,s,r=new H.bT("self","target","receiver","name"),q=J.i7(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
N:function(a){if(a==null)H.lz("boolean expression must not be null")
return a},
v:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.aw(a,"String"))},
lG:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aw(a,"double"))},
dl:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.aw(a,"num"))},
it:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.aw(a,"bool"))},
z:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.aw(a,"int"))},
jV:function(a,b){throw H.h(H.aw(a,H.bP(H.v(b).substring(2))))},
m3:function(a,b){throw H.h(H.kt(a,H.bP(H.v(b).substring(2))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.k(a)[b])return a
H.jV(a,b)},
jN:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.k(a)[b]
else u=!0
if(u)return a
H.m3(a,b)},
a8:function(a){if(a==null)return a
if(!!J.k(a).$io)return a
throw H.h(H.aw(a,"List<dynamic>"))},
S:function(a,b){var u
if(a==null)return a
u=J.k(a)
if(!!u.$io)return a
if(u[b])return a
H.jV(a,b)},
jI:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.z(u)]
else return a.$S()}return},
bn:function(a,b){var u
if(typeof a=="function")return!0
u=H.jI(J.k(a))
if(u==null)return!1
return H.ju(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.io)return a
$.io=!0
try{if(H.bn(a,b))return a
u=H.cn(b)
t=H.aw(a,u)
throw H.h(t)}finally{$.io=!1}},
hN:function(a,b){if(a!=null&&!H.iu(a,b))H.X(H.aw(a,H.cn(b)))
return a},
aw:function(a,b){return new H.cT("TypeError: "+P.aS(a)+": type '"+H.b(H.jB(a))+"' is not a subtype of type '"+b+"'")},
kt:function(a,b){return new H.dv("CastError: "+P.aS(a)+": type '"+H.b(H.jB(a))+"' is not a subtype of type '"+b+"'")},
jB:function(a){var u,t=J.k(a)
if(!!t.$ibV){u=H.jI(t)
if(u!=null)return H.cn(u)
return"Closure"}return H.cI(a)},
lz:function(a){throw H.h(new H.fy(a))},
m5:function(a){throw H.h(new P.dJ(a))},
l4:function(a){return new H.f_(a)},
ix:function(a){return v.getIsolateTag(a)},
C:function(a,b){a.$ti=b
return a},
bo:function(a){if(a==null)return
return a.$ti},
mH:function(a,b,c){return H.bO(a["$a"+H.b(c)],H.bo(b))},
an:function(a,b,c,d){var u=H.bO(a["$a"+H.b(c)],H.bo(b))
return u==null?null:u[d]},
J:function(a,b,c){var u=H.bO(a["$a"+H.b(b)],H.bo(a))
return u==null?null:u[c]},
a:function(a,b){var u=H.bo(a)
return u==null?null:u[b]},
cn:function(a){return H.bm(a,null)},
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
if(l!=null&&l!==P.u)p+=" extends "+H.bm(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bm(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bm(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bm(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lI(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.v(n[g])
i=i+h+H.bm(d[c],a0)+(" "+H.b(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ir:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.av("")
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
dk:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bo(a)
t=J.k(a)
if(t[b]==null)return!1
return H.jE(H.bO(t[d],u),null,c,null)},
x:function(a,b,c,d){if(a==null)return a
if(H.dk(a,b,c,d))return a
throw H.h(H.aw(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bP(b.substring(2))+H.ir(c,0,null),v.mangledGlobalNames)))},
al:function(a,b,c,d,e){if(!H.ai(a,null,b,null))H.m6("TypeError: "+H.b(c)+H.cn(a)+H.b(d)+H.cn(b)+H.b(e))},
m6:function(a){throw H.h(new H.cT(H.v(a)))},
jE:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ai(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ai(a[t],b,c[t],d))return!1
return!0},
mE:function(a,b,c){return a.apply(b,H.bO(J.k(b)["$a"+H.b(c)],H.bo(b)))},
jP:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="u"||a.name==="B"||a===-1||a===-2||H.jP(u)}return!1},
iu:function(a,b){var u,t
if(a==null)return b==null||b.name==="u"||b.name==="B"||b===-1||b===-2||H.jP(b)
if(b==null||b===-1||b.name==="u"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.iu(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bn(a,b)}u=J.k(a).constructor
t=H.bo(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ai(u,null,b,null)},
n:function(a,b){if(a!=null&&!H.iu(a,b))throw H.h(H.aw(a,H.cn(b)))
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
q=H.bO(r,u?a.slice(1):l)
return H.ai(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.ju(a,b,c,d)
if('func' in a)return c.name==="ar"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.jE(H.bO(m,u),b,p,d)},
ju:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.lV(h,b,g,d)},
lV:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ai(c[s],d,a[s],b))return!1}return!0},
mG:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lT:function(a){var u,t,s,r,q=H.v($.jM.$1(a)),p=$.hM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hS[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.v($.jD.$2(a,q))
if(q!=null){p=$.hM[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hS[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.hT(u)
$.hM[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.hS[q]=u
return u}if(s==="-"){r=H.hT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jU(a,u)
if(s==="*")throw H.h(P.jf(q))
if(v.leafTags[q]===true){r=H.hT(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jU(a,u)},
jU:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iz(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hT:function(a){return J.iz(a,!1,null,!!a.$iaT)},
lU:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hT(u)
else return J.iz(u,c,null,null)},
lN:function(){if(!0===$.iy)return
$.iy=!0
H.lO()},
lO:function(){var u,t,s,r,q,p,o,n
$.hM=Object.create(null)
$.hS=Object.create(null)
H.lM()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jW.$1(q)
if(p!=null){o=H.lU(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lM:function(){var u,t,s,r,q,p,o=C.y()
o=H.bM(C.z,H.bM(C.A,H.bM(C.n,H.bM(C.n,H.bM(C.B,H.bM(C.C,H.bM(C.D(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jM=new H.hP(r)
$.jD=new H.hQ(q)
$.jW=new H.hR(p)},
bM:function(a,b){return a(b)||b},
kR:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(P.ed("Illegal RegExp pattern ("+String(p)+")",a))},
lH:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jX:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
hV:function(a,b,c){var u=H.m4(a,b,c)
return u},
m4:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jX(b),'g'),H.lH(c))},
dC:function dC(a,b){this.a=a
this.$ti=b},
dB:function dB(){},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fJ:function fJ(a,b){this.a=a
this.$ti=b},
ej:function ej(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eL:function eL(a,b){this.a=a
this.b=b},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.a=a},
hW:function hW(a){this.a=a},
dd:function dd(a){this.a=a
this.b=null},
bV:function bV(){},
ff:function ff(){},
f6:function f6(){},
bT:function bT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cT:function cT(a){this.a=a},
dv:function dv(a){this.a=a},
f_:function f_(a){this.a=a},
fy:function fy(a){this.a=a},
L:function L(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
el:function el(a){this.a=a},
es:function es(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aD:function aD(a,b){this.a=a
this.$ti=b},
et:function et(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
ek:function ek(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aM:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.b0(b,a))},
c6:function c6(){},
cC:function cC(){},
c5:function c5(){},
cD:function cD(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
cE:function cE(){},
eF:function eF(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
jO:function(a){var u=J.k(a)
return!!u.$ibu||!!u.$ii||!!u.$ic1||!!u.$ic_||!!u.$ir||!!u.$ibi||!!u.$iaZ},
lI:function(a){return J.kJ(a?Object.keys(a):[],null)},
m7:function(a){return v.mangledGlobalNames[a]},
m2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iz:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hO:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iy==null){H.lN()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.jf("Return interceptor for "+H.b(u(a,q))))}s=a.constructor
r=s==null?null:s[$.iE()]
if(r!=null)return r
r=H.lT(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.iE(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
kJ:function(a,b){return J.i7(H.C(a,[b]))},
i7:function(a){a.fixed$length=Array
return a},
iZ:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kP:function(a,b){var u,t
for(u=a.length;b<u;){t=C.e.aI(a,b)
if(t!==32&&t!==13&&!J.iZ(t))break;++b}return b},
kQ:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.e.cP(a,u)
if(t!==32&&t!==13&&!J.iZ(t))break}return b},
k:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cx.prototype
return J.cw.prototype}if(typeof a=="string")return J.bc.prototype
if(a==null)return J.cy.prototype
if(typeof a=="boolean")return J.eh.prototype
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.u)return a
return J.hO(a)},
K:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.u)return a
return J.hO(a)},
aN:function(a){if(a==null)return a
if(a.constructor==Array)return J.bb.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.u)return a
return J.hO(a)},
jK:function(a){if(typeof a=="number")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.u))return J.bh.prototype
return a},
jL:function(a){if(typeof a=="number")return J.bA.prototype
if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.u))return J.bh.prototype
return a},
iw:function(a){if(typeof a=="string")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.u))return J.bh.prototype
return a},
am:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bd.prototype
return a}if(a instanceof P.u)return a
return J.hO(a)},
Y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.k(a).P(a,b)},
iJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jK(a).C(a,b)},
iK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jL(a).m(a,b)},
Z:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.K(a).h(a,b)},
kb:function(a,b,c){return J.aN(a).i(a,b,c)},
kc:function(a,b,c,d){return J.am(a).dC(a,b,c,d)},
iL:function(a){return J.am(a).dF(a)},
kd:function(a,b,c,d){return J.am(a).e7(a,b,c,d)},
ke:function(a,b,c){return J.am(a).e8(a,b,c)},
aP:function(a,b){return J.aN(a).p(a,b)},
kf:function(a,b){return J.jL(a).b4(a,b)},
kg:function(a,b){return J.K(a).D(a,b)},
co:function(a,b){return J.aN(a).F(a,b)},
kh:function(a){return J.am(a).ger(a)},
ki:function(a){return J.am(a).gcN(a)},
iM:function(a){return J.am(a).gcO(a)},
aQ:function(a){return J.k(a).gv(a)},
kj:function(a){return J.K(a).gI(a)},
kk:function(a){return J.K(a).gbM(a)},
y:function(a){return J.aN(a).gu(a)},
ae:function(a){return J.K(a).gj(a)},
kl:function(a,b){return J.aN(a).O(a,b)},
km:function(a,b,c){return J.aN(a).E(a,b,c)},
kn:function(a,b){return J.k(a).bd(a,b)},
bQ:function(a){return J.aN(a).V(a)},
ko:function(a,b){return J.am(a).eQ(a,b)},
iN:function(a,b){return J.am(a).sH(a,b)},
hZ:function(a,b){return J.am(a).a6(a,b)},
kp:function(a){return J.aN(a).a_(a)},
kq:function(a){return J.iw(a).eT(a)},
I:function(a){return J.k(a).n(a)},
kr:function(a,b){return J.jK(a).eU(a,b)},
i_:function(a){return J.iw(a).d8(a)},
ks:function(a,b){return J.aN(a).ac(a,b)},
R:function R(){},
eh:function eh(){},
cy:function cy(){},
cz:function cz(){},
eS:function eS(){},
bh:function bh(){},
bd:function bd(){},
bb:function bb(a){this.$ti=a},
i8:function i8(a){this.$ti=a},
b2:function b2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bA:function bA(){},
cx:function cx(){},
cw:function cw(){},
bc:function bc(){}},P={
lf:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lA()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bN(new P.fA(s),1)).observe(u,{childList:true})
return new P.fz(s,u,t)}else if(self.setImmediate!=null)return P.lB()
return P.lC()},
lg:function(a){self.scheduleImmediate(H.bN(new P.fB(H.f(a,{func:1,ret:-1})),0))},
lh:function(a){self.setImmediate(H.bN(new P.fC(H.f(a,{func:1,ret:-1})),0))},
li:function(a){H.f(a,{func:1,ret:-1})
P.ln(0,a)},
ln:function(a,b){var u=new P.hz()
u.dA(a,b)
return u},
jk:function(a,b){var u,t,s
b.a=1
try{a.d5(new P.fX(b),new P.fY(b),null)}catch(s){u=H.P(s)
t=H.b1(s)
P.jY(new P.fZ(b,u,t))}},
fW:function(a,b){var u,t
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
if(b==null){if(t){s=H.d(g.c,"$ia4")
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
if(m){H.d(q,"$ia4")
P.bK(i,i,g.b,q.a,q.b)
return}l=$.G
if(l!==n)$.G=n
else l=i
g=b.c
if((g&15)===8)new P.h3(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.h2(u,b,q).$0()}else if((g&2)!==0)new P.h1(h,u,b).$0()
if(l!=null)$.G=l
g=u.b
if(!!J.k(g).$iaC){if(g.a>=4){k=H.d(o.c,"$iax")
o.c=null
b=o.aX(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.fW(g,o)
return}}j=b.b
k=H.d(j.c,"$iax")
j.c=null
b=j.aX(k)
g=u.a
p=u.b
if(!g){H.n(p,H.a(j,0))
j.a=4
j.c=p}else{H.d(p,"$ia4")
j.a=8
j.c=p}h.a=j
g=j}},
lw:function(a,b){if(H.bn(a,{func:1,args:[P.u,P.O]}))return b.d0(a,null,P.u,P.O)
if(H.bn(a,{func:1,args:[P.u]}))return H.f(a,{func:1,ret:null,args:[P.u]})
throw H.h(P.i0(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lt:function(){var u,t
for(;u=$.bJ,u!=null;){$.cm=null
t=u.b
$.bJ=t
if(t==null)$.cl=null
u.a.$0()}},
ly:function(){$.ip=!0
try{P.lt()}finally{$.cm=null
$.ip=!1
if($.bJ!=null)$.iF().$1(P.jG())}},
jA:function(a){var u=new P.cV(a)
if($.bJ==null){$.bJ=$.cl=u
if(!$.ip)$.iF().$1(P.jG())}else $.cl=$.cl.b=u},
lx:function(a){var u,t,s=$.bJ
if(s==null){P.jA(a)
$.cm=$.cl
return}u=new P.cV(a)
t=$.cm
if(t==null){u.b=s
$.bJ=$.cm=u}else{u.b=t.b
$.cm=t.b=u
if(u.b==null)$.cl=u}},
jY:function(a){var u=null,t=$.G
if(C.d===t){P.bL(u,u,C.d,a)
return}P.bL(u,u,t,H.f(t.cM(a),{func:1,ret:-1}))},
jz:function(a){var u,t,s
if(a==null)return
try{a.$0()}catch(s){u=H.P(s)
t=H.b1(s)
P.bK(null,null,$.G,u,H.d(t,"$iO"))}},
jv:function(a,b){P.bK(null,null,$.G,a,b)},
lu:function(){},
bK:function(a,b,c,d,e){var u={}
u.a=d
P.lx(new P.hI(u,e))},
jw:function(a,b,c,d,e){var u,t=$.G
if(t===c)return d.$0()
$.G=c
u=t
try{t=d.$0()
return t}finally{$.G=u}},
jy:function(a,b,c,d,e,f,g){var u,t=$.G
if(t===c)return d.$1(e)
$.G=c
u=t
try{t=d.$1(e)
return t}finally{$.G=u}},
jx:function(a,b,c,d,e,f,g,h,i){var u,t=$.G
if(t===c)return d.$2(e,f)
$.G=c
u=t
try{t=d.$2(e,f)
return t}finally{$.G=u}},
bL:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.cM(d):c.es(d,-1)
P.jA(d)},
fA:function fA(a){this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a){this.a=a},
fC:function fC(a){this.a=a},
hz:function hz(){},
hA:function hA(a,b){this.a=a
this.b=b},
fE:function fE(a,b){this.a=a
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
ht:function ht(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(a){this.a=a},
fI:function fI(){},
hw:function hw(a,b){this.a=a
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
fU:function fU(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
fX:function fX(a){this.a=a},
fY:function fY(a){this.a=a},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
fV:function fV(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
h3:function h3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h4:function h4(a){this.a=a},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a){this.a=a
this.b=null},
a_:function a_(){},
f8:function f8(a,b){this.a=a
this.b=b},
f9:function f9(a,b){this.a=a
this.b=b},
fa:function fa(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
a0:function a0(){},
f7:function f7(){},
cW:function cW(){},
cX:function cX(){},
T:function T(){},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a){this.a=a},
hq:function hq(){},
b_:function b_(){},
fL:function fL(a,b){this.b=a
this.a=null
this.$ti=b},
fN:function fN(a,b){this.b=a
this.c=b
this.a=null},
fM:function fM(){},
cj:function cj(){},
hh:function hh(a,b){this.a=a
this.b=b},
ck:function ck(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
d_:function d_(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
fT:function fT(){},
d1:function d1(a,b,c,d){var _=this
_.x=a
_.c=_.b=_.a=_.y=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
hg:function hg(a,b,c){this.b=a
this.a=b
this.$ti=c},
a4:function a4(a,b){this.a=a
this.b=b},
hD:function hD(){},
hI:function hI(a,b){this.a=a
this.b=b},
hi:function hi(){},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function(a,b){var u=a[b]
return u===a?null:u},
ij:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
jm:function(){var u=Object.create(null)
P.ij(u,"<non-identifier-key>",u)
delete u["<non-identifier-key>"]
return u},
ib:function(a,b,c){return H.x(H.jJ(a,new H.L([b,c])),"$ij1",[b,c],"$aj1")},
eu:function(a,b){return new H.L([a,b])},
ic:function(){return new H.L([null,null])},
id:function(a){return H.jJ(a,new H.L([null,null]))},
c2:function(a){return new P.hf([a])},
ik:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ce:function(a,b,c){var u=new P.d6(a,b,[c])
u.c=a.e
return u},
kH:function(a,b,c){var u,t
if(P.iq(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.C([],[P.j])
C.a.p($.ac,a)
try{P.ls(a,u)}finally{if(0>=$.ac.length)return H.e($.ac,-1)
$.ac.pop()}t=P.jc(b,H.S(u,"$ip"),", ")+c
return t.charCodeAt(0)==0?t:t},
eg:function(a,b,c){var u,t
if(P.iq(a))return b+"..."+c
u=new P.av(b)
C.a.p($.ac,a)
try{t=u
t.a=P.jc(t.a,a,", ")}finally{if(0>=$.ac.length)return H.e($.ac,-1)
$.ac.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iq:function(a){var u,t
for(u=$.ac.length,t=0;t<u;++t)if(a===$.ac[t])return!0
return!1},
ls:function(a,b){var u,t,s,r,q,p,o,n=a.gu(a),m=0,l=0
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
j2:function(a,b){var u,t,s=P.c2(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.W)(a),++t)s.p(0,H.n(a[t],b))
return s},
ex:function(a){var u,t={}
if(P.iq(a))return"{...}"
u=new P.av("")
try{C.a.p($.ac,a)
u.a+="{"
t.a=!0
a.w(0,new P.ey(t,u))
u.a+="}"}finally{if(0>=$.ac.length)return H.e($.ac,-1)
$.ac.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
h5:function h5(){},
h8:function h8(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
h6:function h6(a,b){this.a=a
this.$ti=b},
h7:function h7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
hf:function hf(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bI:function bI(a){this.a=a
this.c=this.b=null},
d6:function d6(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ev:function ev(){},
M:function M(){},
ew:function ew(){},
ey:function ey(a,b){this.a=a
this.b=b},
aF:function aF(){},
hB:function hB(){},
ez:function ez(){},
fq:function fq(){},
bE:function bE(){},
f4:function f4(){},
hn:function hn(){},
d7:function d7(){},
db:function db(){},
df:function df(){},
lv:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.h(H.ak(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.P(s)
r=P.ed(String(t),null)
throw H.h(r)}r=P.hE(u)
return r},
hE:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.ha(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.hE(a[u])
return a},
j0:function(a,b,c){return new P.cA(a,b)},
lp:function(a){return a.f1()},
lm:function(a,b,c){var u,t=new P.av(""),s=new P.hc(t,[],P.lF())
s.bg(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
ha:function ha(a,b){this.a=a
this.b=b
this.c=null},
hb:function hb(a){this.a=a},
dz:function dz(){},
bX:function bX(){},
cA:function cA(a,b){this.a=a
this.b=b},
ep:function ep(a,b){this.a=a
this.b=b},
eo:function eo(){},
er:function er(a){this.b=a},
eq:function eq(a){this.a=a},
hd:function hd(){},
he:function he(a,b){this.a=a
this.b=b},
hc:function hc(a,b,c){this.c=a
this.a=b
this.b=c},
lP:function(a){var u=H.j8(a,null)
if(u!=null)return u
throw H.h(P.ed(a,null))},
kF:function(a){if(a instanceof H.bV)return a.n(0)
return"Instance of '"+H.b(H.cI(a))+"'"},
aW:function(a,b,c){var u,t=[c],s=H.C([],t)
for(u=J.y(a);u.l();)C.a.p(s,H.n(u.gq(),c))
if(b)return s
return H.x(J.i7(s),"$io",t,"$ao")},
l3:function(a){return new H.ek(a,H.kR(a,!1,!0,!1,!1,!1))},
jc:function(a,b,c){var u=J.y(b)
if(!u.l())return a
if(c.length===0){do a+=H.b(u.gq())
while(u.l())}else{a+=H.b(u.gq())
for(;u.l();)a=a+c+H.b(u.gq())}return a},
j4:function(a,b,c,d){return new P.eH(a,b,c,d)},
kB:function(a,b){var u
if(Math.abs(a)<=864e13)u=!1
else u=!0
if(u)H.X(P.br("DateTime is outside valid range: "+a))
return new P.aA(a,!1)},
kC:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kD:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cs:function(a){if(a>=10)return""+a
return"0"+a},
aS:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.I(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kF(a)},
br:function(a){return new P.ay(!1,null,null,a)},
i0:function(a,b,c){return new P.ay(!0,a,b,c)},
cL:function(a,b){return new P.cJ(null,null,!0,a,b,"Value not in range")},
cK:function(a,b,c,d,e){return new P.cJ(b,c,!0,a,d,"Invalid value")},
c8:function(a,b){if(typeof a!=="number")return a.a0()
if(a<0)throw H.h(P.cK(a,0,null,b,null))},
bz:function(a,b,c,d,e){var u=H.z(e==null?J.ae(b):e)
return new P.ee(u,!0,a,c,"Index out of range")},
D:function(a){return new P.fr(a)},
jf:function(a){return new P.fo(a)},
ca:function(a){return new P.aX(a)},
aq:function(a){return new P.dA(a)},
ed:function(a,b){return new P.ec(a,b)},
jS:function(a,b){var u=J.i_(a),t=H.j8(u,null)
if(t==null)t=H.l2(u)
if(t!=null)return t
if(b==null)throw H.h(P.ed(a,null))
return b.$1(a)},
iA:function(a){H.m2(H.b(a))},
eI:function eI(a,b){this.a=a
this.b=b},
E:function E(){},
aA:function aA(a,b){this.a=a
this.b=b},
a7:function a7(){},
b7:function b7(){},
dp:function dp(){},
cG:function cG(){},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cJ:function cJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ee:function ee(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fr:function fr(a){this.a=a},
fo:function fo(a){this.a=a},
aX:function aX(a){this.a=a},
dA:function dA(a){this.a=a},
eM:function eM(){},
cO:function cO(){},
dJ:function dJ(a){this.a=a},
fS:function fS(a){this.a=a},
ec:function ec(a,b){this.a=a
this.b=b},
ar:function ar(){},
H:function H(){},
p:function p(){},
as:function as(){},
o:function o(){},
q:function q(){},
c4:function c4(){},
B:function B(){},
a2:function a2(){},
u:function u(){},
ah:function ah(){},
O:function O(){},
j:function j(){},
av:function av(a){this.a=a},
aI:function aI(){},
dG:function dG(){},
dH:function dH(a){this.a=a},
e7:function e7(a,b){this.a=a
this.b=b},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
c1:function c1(){},
lo:function(a,b,c,d){var u,t
H.it(b)
H.a8(d)
if(H.N(b)){u=[c]
C.a.K(u,d)
d=u}t=P.aW(J.km(d,P.lS(),null),!0,null)
H.d(a,"$iar")
return P.dj(H.kV(a,t,null))},
j_:function(a){return H.d(P.is(P.kS(a)),"$iaj")},
kS:function(a){return new P.en(new P.h8([null,null])).$1(a)},
il:function(a,b,c){var u
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(u){H.P(u)}return!1},
jt:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
dj:function(a){var u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
u=J.k(a)
if(!!u.$iaj)return a.a
if(H.jO(a))return a
if(!!u.$ije)return a
if(!!u.$iaA)return H.be(a)
if(!!u.$iar)return P.js(a,"$dart_jsFunction",new P.hG())
return P.js(a,"_$dart_jsObject",new P.hH($.iH()))},
js:function(a,b,c){var u=P.jt(a,b)
if(u==null){u=c.$1(a)
P.il(a,b,u)}return u},
hF:function(a){var u,t
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.jO(a))return a
else if(a instanceof Object&&!!J.k(a).$ije)return a
else if(a instanceof Date){u=H.z(a.getTime())
if(Math.abs(u)<=864e13)t=!1
else t=!0
if(t)H.X(P.br("DateTime is outside valid range: "+u))
return new P.aA(u,!1)}else if(a.constructor===$.iH())return a.o
else return P.is(a)},
is:function(a){if(typeof a=="function")return P.im(a,$.hY(),new P.hJ())
if(a instanceof Array)return P.im(a,$.iG(),new P.hK())
return P.im(a,$.iG(),new P.hL())},
im:function(a,b,c){var u=P.jt(a,b)
if(u==null||!(a instanceof Object)){u=c.$1(a)
P.il(a,b,u)}return u},
aj:function aj(a){this.a=a},
en:function en(a){this.a=a},
aU:function aU(a){this.a=a},
c0:function c0(a,b){this.a=a
this.$ti=b},
hG:function hG(){},
hH:function hH(a){this.a=a},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
d5:function d5(){},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aH:function aH(a,b,c){this.a=a
this.b=b
this.$ti=c},
c9:function c9(){},
dq:function dq(a){this.a=a},
l:function l(){}},W={
m8:function(){return window},
iO:function(a){var u=document.createElement("a")
if(a!=null)u.href=a
return u},
kE:function(a,b,c){var u=document.body,t=(u&&C.m).M(u,a,b,c)
t.toString
u=W.r
u=new H.aK(new W.a6(t),H.f(new W.dO(),{func:1,ret:P.E,args:[u]}),[u])
return H.d(u.gad(u),"$it")},
bZ:function(a){var u,t,s,r="element tag unavailable"
try{u=J.am(a)
t=u.gd3(a)
if(typeof t==="string")r=u.gd3(a)}catch(s){H.P(s)}return r},
kG:function(a){var u,t=document.createElement("input"),s=H.d(t,"$iba")
try{s.type=a}catch(u){H.P(u)}return s},
h9:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jp:function(a,b,c,d){var u=W.h9(W.h9(W.h9(W.h9(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Q:function(a,b,c,d,e){var u=W.jC(new W.fR(c),W.i)
u=new W.fQ(a,b,u,!1,[e])
u.cH()
return u},
jn:function(a){var u=W.iO(null),t=window.location
u=new W.bl(new W.hm(u,t))
u.dw(a)
return u},
lk:function(a,b,c,d){H.d(a,"$it")
H.v(b)
H.v(c)
H.d(d,"$ibl")
return!0},
ll:function(a,b,c,d){var u,t,s
H.d(a,"$it")
H.v(b)
H.v(c)
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
jq:function(){var u=P.j,t=P.j2(C.i,u),s=H.a(C.i,0),r=H.f(new W.hy(),{func:1,ret:u,args:[s]}),q=H.C(["TEMPLATE"],[u])
t=new W.hx(t,P.c2(u),P.c2(u),P.c2(u),null)
t.dz(null,new H.aG(C.i,r,[s,u]),q,null)
return t},
jr:function(a){var u
if("postMessage" in a){u=W.lj(a)
return u}else return H.d(a,"$ib8")},
lj:function(a){if(a===window)return H.d(a,"$ijj")
else return new W.fK()},
jC:function(a,b){var u=$.G
if(u===C.d)return a
return u.eu(a,b)},
m:function m(){},
bR:function bR(){},
dn:function dn(){},
bS:function bS(){},
bu:function bu(){},
b3:function b3(){},
b4:function b4(){},
b5:function b5(){},
b6:function b6(){},
bY:function bY(){},
dI:function dI(){},
bw:function bw(){},
dK:function dK(){},
ct:function ct(){},
dL:function dL(){},
fH:function fH(a,b){this.a=a
this.b=b},
ab:function ab(a,b){this.a=a
this.$ti=b},
t:function t(){},
dO:function dO(){},
i:function i(){},
b8:function b8(){},
eb:function eb(){},
by:function by(){},
c_:function c_(){},
ba:function ba(){},
aV:function aV(){},
cB:function cB(){},
A:function A(){},
a6:function a6(a){this.a=a},
r:function r(){},
c7:function c7(){},
f0:function f0(){},
cP:function cP(){},
fc:function fc(){},
fd:function fd(){},
cc:function cc(){},
aY:function aY(){},
bg:function bg(){},
bi:function bi(){},
fx:function fx(a){this.a=a},
aZ:function aZ(){},
cd:function cd(){},
cZ:function cZ(){},
d8:function d8(){},
fD:function fD(){},
fO:function fO(a){this.a=a},
fP:function fP(a){this.a=a},
d0:function d0(a,b,c,d){var _=this
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
fQ:function fQ(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fR:function fR(a){this.a=a},
de:function de(a,b){this.a=null
this.b=a
this.$ti=b},
hr:function hr(a,b){this.a=a
this.b=b},
bl:function bl(a){this.a=a},
af:function af(){},
cF:function cF(a){this.a=a},
eK:function eK(a){this.a=a},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
dc:function dc(){},
ho:function ho(){},
hp:function hp(){},
hx:function hx(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hy:function hy(){},
hs:function hs(){},
cv:function cv(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
fK:function fK(){},
aa:function aa(){},
hm:function hm(a,b){this.a=a
this.b=b},
dg:function dg(a){this.a=a},
hC:function hC(a){this.a=a},
cY:function cY(){},
d3:function d3(){},
d4:function d4(){},
d9:function d9(){},
da:function da(){},
dh:function dh(){},
di:function di(){}},U={
iQ:function(a,b,c){var u=P.H,t=U.at,s=$.ad()
if(typeof s!=="number")return H.c(s)
s=new U.ao(b,c,new H.L([u,t]),new H.L([u,t]),"400 "+H.b(14*s)+"px 'Poppins', sans-serif",a)
s.af(a,b,c)
return s},
iR:function(a,b){var u,t,s,r,q,p,o="clauses",n="type",m="properties",l=b.h(0,"action"),k=l==null?"":J.I(l),j=H.z(b.h(0,"id"))
if(!!J.k(b.h(0,o)).$io)u=U.iP(a,j,k)
else if(J.Y(b.h(0,n),"clause")){l=P.H
t=U.at
s=$.ad()
if(typeof s!=="number")return H.c(s)
u=new U.ap(j,k,new H.L([l,t]),new H.L([l,t]),"400 "+H.b(14*s)+"px 'Poppins', sans-serif",a)
u.af(a,j,k)
u.k1=!1}else u=U.iQ(a,j,k)
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
u.k1=!U.iB(b.h(0,"start"),!1)
u.go=U.iB(b.h(0,"required"),u.go)
if(!!J.k(b.h(0,"params")).$io)for(l=J.y(H.S(b.h(0,"params"),"$ip")),t=u.cy;l.l();){r=U.ie(u,H.d(l.gq(),"$iq"))
t.i(0,r.a,r)}if(!!J.k(b.h(0,m)).$io)for(l=J.y(H.S(b.h(0,m),"$ip")),t=u.db;l.l();){q=U.ie(u,H.d(l.gq(),"$iq"))
t.i(0,q.a,q)}l=u.db.a
t=$.w()
if(typeof t!=="number")return H.c(t)
u.y=(1+l)*t
l=!!u.$ibt
if(l&&!!J.k(b.h(0,o)).$io)for(t=J.y(H.S(b.h(0,o),"$ip"));t.l();){p=t.gq()
J.kb(p,n,"clause")
u.c6(H.jN(U.iR(a,H.d(p,"$iq")),"$iap"))}if(l&&b.h(0,"end")!=null){l=u.S
t=J.Z(b.h(0,"end"),"format")
l.e=t==null?null:J.I(t)}return u},
iP:function(a,b,c){var u,t,s="px 'Poppins', sans-serif",r=H.C([],[U.ap]),q=P.H,p=U.at,o=$.ad()
if(typeof o!=="number")return H.c(o)
u=new U.bt(r,b,c,new H.L([q,p]),new H.L([q,p]),"400 "+H.b(14*o)+s,a)
u.af(a,b,c)
t="end-"+H.b(c)
q=new U.cu(null,t,new H.L([q,p]),new H.L([q,p]),"400 "+H.b(14*o)+s,a)
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
kz:function(a,b,c,d){var u
if($.cq==null){u=new H.L([P.j,U.cp])
$.cq=u
u.i(0,"NetLogo",new U.eG())
$.cq.i(0,"plain",new U.eR())}if($.cq.t(a))return $.cq.h(0,a).cs(b,c,d)
else return C.h.bK(c,null)},
bv:function(a){var u,t,s,r,q,p=J.K(a),o=p.h(a,"children")
if(o==null||!J.k(o).$io)o=[]
u=p.h(a,"name")
t=u==null?"":J.I(u)
u=p.h(a,"format")
if(typeof u==="string"){s=H.v(p.h(a,"format"))
for(p=J.K(o),r=0;r<p.gj(o);++r){u="{"+r+"}"
q=U.bv(p.h(o,r))
s.toString
if(typeof q!=="string")H.X(H.ak(q))
s=H.hV(s,u,q)}return s}else{p=J.K(o)
if(p.gj(o)===1)return"("+H.b(t)+" "+H.b(U.bv(p.h(o,0)))+")"
else if(p.gj(o)===2)return"("+H.b(U.bv(p.h(o,0)))+" "+H.b(t)+" "+H.b(U.bv(p.h(o,1)))+")"
else return t}},
lE:function(a,b){var u,t="action",s=J.k(a)
if(!s.$io||s.gj(a)===0||J.Z(s.h(a,0),t)==null)return-1
u=J.k(b)
if(!u.$io||u.gj(b)===0||J.Z(u.h(b,0),t)==null)return 1
return J.kf(J.Z(s.h(a,0),t),J.Z(u.h(b,0),t))},
j6:function(a,b){var u=$.w()
if(typeof u!=="number")return u.m()
u=new U.at(a,u*0.6)
u.ao(a,b)
return u},
ie:function(a,b){var u=b.h(0,"type")
switch(u==null?"num":J.I(u)){case"int":u=$.w()
if(typeof u!=="number")return u.m()
u=new U.ef(a,u*0.6)
u.ao(a,b)
u.c2(a,b)
u.cy=1
return u
case"num":return U.i5(a,b)
case"bool":return U.i5(a,b)
case"range":u=$.w()
if(typeof u!=="number")return u.m()
u=new U.eV(a,u*0.6)
u.ao(a,b)
u.c2(a,b)
u.r1=U.aO(b.h(0,"min"),u.r1)
u.r2=U.aO(b.h(0,"max"),u.r2)
return u
case"select":return U.j9(a,b)
case"text":return U.j6(a,b)
default:return U.j6(a,b)}},
j9:function(a,b){var u,t="values",s=$.w()
if(typeof s!=="number")return s.m()
s=new U.f1([],a,s*0.6)
s.ao(a,b)
if(!!J.k(b.h(0,t)).$io&&J.iJ(J.ae(b.h(0,t)),0)){u=H.a8(b.h(0,t))
s.cx=u
s.cy=s.cb(J.Z(u,0))
s.c=J.Z(J.Z(s.cx,0),"actual")}return s},
i5:function(a,b){var u,t=$.w()
if(typeof t!=="number")return t.m()
t=new U.dQ(a,t*0.6)
t.ao(a,b)
u=new U.dP(a.id)
u.c=new U.aB(u,H.v(b.h(0,"type")),H.C([],[U.aB]))
t.cx=u
u.aA(t.c)
return t},
iV:function(a,b){var u=H.C([],[U.ao]),t=H.C([],[U.cS]),s=P.H,r=U.bF,q=H.C([],[r]),p=[P.a7]
p=new U.bW(2,a,u,b,[],[],new U.fg(t,new H.L([s,U.cR])),q,new H.L([s,r]),new U.bC(H.C([1,0,0,0,1,0,0,0,1],p)),new U.bC(H.C([1,0,0,0,1,0,0,0,1],p)),new P.aA(Date.now(),!1))
p.dv(a,b)
return p},
lr:function(a,b){var u,t="version"
H.x(b,"$iq",[P.j,P.u],"$aq")
u=H.z(H.N(b.t(t))?b.h(0,t):0)
if(typeof u!=="number")return u.C()
if(u>2)H.X("Somehow the given model version ("+u+") is greater than the supported NetTango version (2).")
if(u<1)U.jh(b)
if(u<2)U.ih(b,U.hU(),U.hU())
b.i(0,t,2)
$.a1.i(0,a,U.iV(a,b))
$.a1.h(0,a).L()},
kM:function(a,b){var u
H.v(a)
H.v(b)
if($.a1.h(0,a) instanceof U.bW)$.a1.h(0,a).eV()
u=C.h.cQ(0,b,null)
if(!!J.k(u).$iq)U.lr(a,u)},
kL:function(a){var u,t,s,r,q=C.h.cQ(0,H.v(a),null)
if(!!J.k(q).$iq)for(u=J.y(q.gA()),t=[P.j,P.u];u.l();){s=u.gq()
if($.a1.h(0,s) instanceof U.bW){r=$.a1.h(0,s)
C.a.sj(r.a,0)
C.a.sj(r.x,0)
C.a.G(r.fr.c,r)}if(!!J.k(q.h(0,s)).$iq){H.v(s)
r=H.d(q.h(0,s),"$iq")
U.le(H.x(r,"$iq",t,"$aq"))
$.a1.i(0,s,U.iV(s,r))
$.a1.h(0,s).L()}}},
kK:function(a,b,c){H.v(a)
H.v(b)
H.d(c,"$iaU")
if($.a1.t(a))return U.kz(b,a,$.a1.h(0,a).bL(),new U.ei(c))
return},
kO:function(a){var u
H.v(a)
if($.a1.t(a)){u=$.a1.h(0,a).Q
u.i(0,"program",$.a1.h(0,a).bL())
return C.h.bK(u,null)}},
kN:function(){var u,t,s,r=P.ic()
for(u=$.a1,u=new H.aD(u,[H.a(u,0)]),u=u.gu(u);u.l();){t=u.d
s=$.a1.h(0,t).Q
s.i(0,"program",$.a1.h(0,t).bL())
r.i(0,t,s)}return C.h.bK(r,null)},
jR:function(){var u=$.iI()
u.i(0,"NetTango_InitWorkspace",U.lZ())
u.i(0,"NetTango_InitAllWorkspaces",U.lY())
u.i(0,"NetTango_ExportCode",U.lX())
u.i(0,"NetTango_Save",U.m0())
u.i(0,"NetTango_SaveAll",U.m_())},
i2:function(a){var u,t,s=new U.cr()
s.a=-1
u=J.am(a)
t=u.gcY(a).a
t.toString
s.d=s.c=t
u=u.gcY(a).b
u.toString
s.f=s.e=u
s.Q=!0
return s},
iC:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{u=P.lP(a)
return u}catch(t){if(!!J.k(H.P(t)).$ii4)return b
else throw t}return b},
aO:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{u=P.jS(a,null)
return u}catch(t){if(!!J.k(H.P(t)).$ii4)return b
else throw t}return b},
iB:function(a,b){if(a==null)return b
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
jh:function(a){var u={},t=P.H,s=new H.L([P.j,t]),r=new H.L([t,t])
u.a=0
U.ih(a,new U.ft(u,s,r),new U.fu(s,r))},
jg:function(a,b){var u={}
u.a=a
U.ji(b,new U.fs(u))
return u.a},
la:function(a,b){var u,t
for(u=J.y(b),t=[P.j,P.u];u.l();){H.x(u.gq(),"$iq",t,"$aq").i(0,"id",a)
if(typeof a!=="number")return a.k();++a}return a},
l9:function(a,b,c){var u,t
if(!H.N(c.t("action")))return
u=H.v(c.h(0,"action"))
if(a.t(u)){t=a.h(0,u)
c.i(0,"id",t)
U.jg(b.h(0,t),H.x(c,"$iq",[P.j,P.u],"$aq"))}},
ld:function(a){U.ji(a,U.lW())},
lb:function(a){var u="values"
if(!H.N(a.t(u))||!J.k(a.h(0,u)).$io)return
a.i(0,u,J.kp(J.kl(a.h(0,u),new U.fv())))},
lc:function(a){var u,t,s
for(u=J.ks(a,new U.fw()),t=J.y(u.a),u=new H.cU(t,u.b,[H.a(u,0)]),s=[P.j,P.u];u.l();)U.lb(H.x(t.gq(),"$iq",s,"$aq"))},
le:function(a){var u="version",t=H.z(H.N(a.t(u))?a.h(0,u):0)
if(typeof t!=="number")return t.C()
if(t>2)throw H.h("Somehow the given model version ("+t+") is greater than the supported NetTango version (2).")
if(t<1)U.jh(a)
if(t<2)U.ih(a,U.hU(),U.hU())
a.i(0,u,2)},
ih:function(a,b,c){var u,t,s,r,q,p,o,n,m="blocks",l="children",k="clauses",j="program",i="chains"
if(!H.N(a.t(m))||!J.k(a.h(0,m)).$io)return
for(u=J.y(H.S(a.h(0,m),"$ip")),t=[P.j,P.u];u.l();)b.$1(H.x(u.gq(),"$iq",t,"$aq"))
for(u=J.y(H.S(a.h(0,m),"$ip"));u.l();){s=H.x(u.gq(),"$iq",t,"$aq")
if(H.N(s.t(l))&&!!J.k(s.h(0,l)).$io)for(r=J.y(H.S(s.h(0,l),"$ip"));r.l();){q=r.gq()
if(!!J.k(q).$iq)c.$1(q)}if(H.N(s.t(k))&&!!J.k(s.h(0,k)).$io)for(r=J.y(H.S(s.h(0,k),"$ip"));r.l();){p=r.gq()
o=J.k(p)
if(!!o.$iq&&H.N(p.t(l))&&!!J.k(p.h(0,l)).$io)for(o=J.y(H.S(o.h(p,l),"$ip"));o.l();)c.$1(H.d(o.gq(),"$iq"))}}if(!H.N(a.t(j))||!J.k(a.h(0,j)).$iq)return
n=H.d(a.h(0,j),"$iq")
if(!H.N(n.t(i))||!J.k(n.h(0,i)).$io)return
for(u=J.y(H.S(n.h(0,i),"$ip"));u.l();)for(t=J.y(H.a8(u.gq()));t.l();)c.$1(H.d(t.gq(),"$iq"))},
ji:function(a,b){var u="params",t="properties"
if(H.N(a.t(u))&&!!J.k(a.h(0,u)).$io)b.$1(H.a8(a.h(0,u)))
if(H.N(a.t(t))&&!!J.k(a.h(0,t)).$io)b.$1(H.a8(a.h(0,t)))},
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
dF:function dF(){},
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
cu:function cu(a,b,c,d,e,f){var _=this
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
aB:function aB(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c},
e0:function e0(a,b){this.a=a
this.b=b},
e1:function e1(a){this.a=a},
e2:function e2(a){this.a=a},
e_:function e_(a,b){this.a=a
this.b=b},
e3:function e3(){},
e6:function e6(a,b){this.a=a
this.b=b},
e4:function e4(){},
e5:function e5(a,b){this.a=a
this.b=b},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(a){this.a=a
this.c=this.b=null},
cp:function cp(){},
eR:function eR(){},
eG:function eG(){},
ds:function ds(a,b,c){this.a=a
this.b=b
this.d=c},
dt:function dt(a){this.a=a},
au:function au(a,b,c){var _=this
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
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a){this.a=a},
eP:function eP(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b){this.a=a
this.b=b},
cH:function cH(){},
ef:function ef(a,b){var _=this
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
eV:function eV(a,b){var _=this
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
eW:function eW(){},
eX:function eX(a){this.a=a},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a,b){this.a=a
this.b=b},
f1:function f1(a,b,c){var _=this
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
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
dQ:function dQ(a,b){var _=this
_.a=_.cx=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""
_.y=_.x=0
_.z=28
_.Q=b
_.ch=!1},
dU:function dU(a,b){this.a=a
this.b=b},
dV:function dV(){},
dT:function dT(){},
dW:function dW(){},
dS:function dS(){},
dX:function dX(a){this.a=a},
dY:function dY(){},
dR:function dR(){},
eU:function eU(){},
dr:function dr(a,b){this.b=a
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
dy:function dy(a){this.a=a},
dx:function dx(a){this.a=a},
dw:function dw(){},
ei:function ei(a){this.a=a},
bC:function bC(a){this.a=a},
fg:function fg(a,b){this.a=!1
this.c=a
this.d=b},
fh:function fh(a){this.a=a},
fi:function fi(a){this.a=a},
fj:function fj(a){this.a=a},
fk:function fk(a){this.a=a},
fl:function fl(){},
cS:function cS(){},
cR:function cR(a,b){this.a=a
this.b=b},
bF:function bF(){},
cr:function cr(){var _=this
_.a=null
_.b=-1
_.f=_.e=_.d=_.c=0
_.Q=_.z=_.y=_.x=!1},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a,b){this.a=a
this.b=b},
fs:function fs(a){this.a=a},
fv:function fv(){},
fw:function fw(){}}
var w=[C,H,J,P,W,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.i9.prototype={}
J.R.prototype={
P:function(a,b){return a===b},
gv:function(a){return H.bf(a)},
n:function(a){return"Instance of '"+H.b(H.cI(a))+"'"},
bd:function(a,b){H.d(b,"$ii6")
throw H.h(P.j4(a,b.gcW(),b.gd_(),b.gcX()))}}
J.eh.prototype={
n:function(a){return String(a)},
gv:function(a){return a?519018:218159},
$iE:1}
J.cy.prototype={
P:function(a,b){return null==b},
n:function(a){return"null"},
gv:function(a){return 0},
bd:function(a,b){return this.di(a,H.d(b,"$ii6"))},
$iB:1}
J.cz.prototype={
gv:function(a){return 0},
n:function(a){return String(a)}}
J.eS.prototype={}
J.bh.prototype={}
J.bd.prototype={
n:function(a){var u=a[$.hY()]
if(u==null)return this.dl(a)
return"JavaScript function for "+H.b(J.I(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iar:1}
J.bb.prototype={
p:function(a,b){H.n(b,H.a(a,0))
if(!!a.fixed$length)H.X(P.D("add"))
a.push(b)},
a5:function(a,b){var u
if(!!a.fixed$length)H.X(P.D("removeAt"))
u=a.length
if(b>=u)throw H.h(P.cL(b,null))
return a.splice(b,1)[0]},
G:function(a,b){var u
if(!!a.fixed$length)H.X(P.D("remove"))
for(u=0;u<a.length;++u)if(J.Y(a[u],b)){a.splice(u,1)
return!0}return!1},
ac:function(a,b){var u=H.a(a,0)
return new H.aK(a,H.f(b,{func:1,ret:P.E,args:[u]}),[u])},
K:function(a,b){var u
H.x(b,"$ip",[H.a(a,0)],"$ap")
if(!!a.fixed$length)H.X(P.D("addAll"))
for(u=J.y(b);u.l();)a.push(u.gq())},
w:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.a(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.aq(a))}},
E:function(a,b,c){var u=H.a(a,0)
return new H.aG(a,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
cK:function(a,b){var u,t
H.f(b,{func:1,ret:P.E,args:[H.a(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.N(b.$1(a[t])))return!0
if(a.length!==u)throw H.h(P.aq(a))}return!1},
a1:function(a,b){var u=H.a(a,0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
if(!!a.immutable$list)H.X(P.D("sort"))
H.ja(a,b,u)},
D:function(a,b){var u
for(u=0;u<a.length;++u)if(J.Y(a[u],b))return!0
return!1},
gI:function(a){return a.length===0},
gbM:function(a){return a.length!==0},
n:function(a){return P.eg(a,"[","]")},
J:function(a,b){var u=H.C(a.slice(0),[H.a(a,0)])
return u},
a_:function(a){return this.J(a,!0)},
gu:function(a){return new J.b2(a,a.length,[H.a(a,0)])},
gv:function(a){return H.bf(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.X(P.D("set length"))
if(b<0)throw H.h(P.cK(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.z(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.h(H.b0(a,b))
if(b>=a.length||b<0)throw H.h(H.b0(a,b))
return a[b]},
i:function(a,b,c){H.z(b)
H.n(c,H.a(a,0))
if(!!a.immutable$list)H.X(P.D("indexed set"))
if(b>=a.length||b<0)throw H.h(H.b0(a,b))
a[b]=c},
$iF:1,
$ip:1,
$io:1}
J.i8.prototype={}
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
H.dl(b)
if(typeof b!=="number")throw H.h(H.ak(b))
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
return u+0}throw H.h(P.D(""+a+".toInt()"))},
b8:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.D(""+a+".floor()"))},
d1:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.D(""+a+".round()"))},
eU:function(a,b){var u
if(b>20)throw H.h(P.cK(b,0,20,"fractionDigits",null))
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
k:function(a,b){if(typeof b!=="number")throw H.h(H.ak(b))
return a+b},
m:function(a,b){if(typeof b!=="number")throw H.h(H.ak(b))
return a*b},
cG:function(a,b){return(a|0)===a?a/b|0:this.ei(a,b)},
ei:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.D("Result of truncating division is "+H.b(u)+": "+H.b(a)+" ~/ "+b))},
bH:function(a,b){var u
if(a>0)u=this.eg(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eg:function(a,b){return b>31?0:a>>>b},
C:function(a,b){if(typeof b!=="number")throw H.h(H.ak(b))
return a>b},
$ia7:1,
$ia2:1}
J.cx.prototype={$iH:1}
J.cw.prototype={}
J.bc.prototype={
cP:function(a,b){if(b<0)throw H.h(H.b0(a,b))
if(b>=a.length)H.X(H.b0(a,b))
return a.charCodeAt(b)},
aI:function(a,b){if(b>=a.length)throw H.h(H.b0(a,b))
return a.charCodeAt(b)},
k:function(a,b){if(typeof b!=="string")throw H.h(P.i0(b,null,null))
return a+b},
eA:function(a,b){var u=b.length,t=a.length
if(u>t)return!1
return b===this.c0(a,t-u)},
df:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
ae:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.cL(b,null))
if(b>c)throw H.h(P.cL(b,null))
if(c>a.length)throw H.h(P.cL(c,null))
return a.substring(b,c)},
c0:function(a,b){return this.ae(a,b,null)},
eT:function(a){return a.toLowerCase()},
d8:function(a){var u,t,s,r=a.trim(),q=r.length
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
H.v(b)
if(typeof b!=="string")throw H.h(H.ak(b))
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
$ij7:1,
$ij:1}
H.F.prototype={}
H.aE.prototype={
gu:function(a){var u=this
return new H.c3(u,u.gj(u),[H.J(u,"aE",0)])},
gI:function(a){return this.gj(this)===0},
ac:function(a,b){return this.dk(0,H.f(b,{func:1,ret:P.E,args:[H.J(this,"aE",0)]}))},
E:function(a,b,c){var u=H.J(this,"aE",0)
return new H.aG(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
J:function(a,b){var u,t=this,s=H.C([],[H.J(t,"aE",0)])
C.a.sj(s,t.gj(t))
for(u=0;u<t.gj(t);++u)C.a.i(s,u,t.F(0,u))
return s},
a_:function(a){return this.J(a,!0)}}
H.c3.prototype={
gq:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=J.K(s),q=r.gj(s)
if(t.b!==q)throw H.h(P.aq(s))
u=t.c
if(u>=q){t.sap(null)
return!1}t.sap(r.F(s,u));++t.c
return!0},
sap:function(a){this.d=H.n(a,H.a(this,0))},
$ias:1}
H.bB.prototype={
gu:function(a){return new H.a5(J.y(this.a),this.b,this.$ti)},
gj:function(a){return J.ae(this.a)},
F:function(a,b){return this.b.$1(J.co(this.a,b))},
$ap:function(a,b){return[b]}}
H.bx.prototype={$iF:1,
$aF:function(a,b){return[b]}}
H.a5.prototype={
l:function(){var u=this,t=u.b
if(t.l()){u.sap(u.c.$1(t.gq()))
return!0}u.sap(null)
return!1},
gq:function(){return this.a},
sap:function(a){this.a=H.n(a,H.a(this,1))},
$aas:function(a,b){return[b]}}
H.aG.prototype={
gj:function(a){return J.ae(this.a)},
F:function(a,b){return this.b.$1(J.co(this.a,b))},
$aF:function(a,b){return[b]},
$aaE:function(a,b){return[b]},
$ap:function(a,b){return[b]}}
H.aK.prototype={
gu:function(a){return new H.cU(J.y(this.a),this.b,this.$ti)},
E:function(a,b,c){var u=H.a(this,0)
return new H.bB(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)}}
H.cU.prototype={
l:function(){var u,t
for(u=this.a,t=this.b;u.l();)if(H.N(t.$1(u.gq())))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cQ.prototype={
gu:function(a){return new H.fe(J.y(this.a),this.b,this.$ti)}}
H.dN.prototype={
gj:function(a){var u=J.ae(this.a),t=this.b
if(u>t)return t
return u},
$iF:1}
H.fe.prototype={
l:function(){if(--this.b>=0)return this.a.l()
this.b=-1
return!1},
gq:function(){if(this.b<0)return
return this.a.gq()}}
H.cM.prototype={
gu:function(a){return new H.f5(J.y(this.a),this.b,this.$ti)}}
H.dM.prototype={
gj:function(a){var u=J.ae(this.a)-this.b
if(u>=0)return u
return 0},
$iF:1}
H.f5.prototype={
l:function(){var u,t
for(u=this.a,t=0;t<this.b;++t)u.l()
this.b=0
return u.l()},
gq:function(){return this.a.gq()}}
H.b9.prototype={
sj:function(a,b){throw H.h(P.D("Cannot change the length of a fixed-length list"))},
p:function(a,b){H.n(b,H.an(this,a,"b9",0))
throw H.h(P.D("Cannot add to a fixed-length list"))},
a5:function(a,b){throw H.h(P.D("Cannot remove from a fixed-length list"))}}
H.cb.prototype={
gv:function(a){var u=this._hashCode
if(u!=null)return u
u=536870911&664597*J.aQ(this.a)
this._hashCode=u
return u},
n:function(a){return'Symbol("'+H.b(this.a)+'")'},
P:function(a,b){if(b==null)return!1
return b instanceof H.cb&&this.a==b.a},
$iaI:1}
H.dC.prototype={}
H.dB.prototype={
gI:function(a){return this.gj(this)===0},
n:function(a){return P.ex(this)},
i:function(a,b,c){H.n(b,H.a(this,0))
H.n(c,H.a(this,1))
return H.kA()},
ak:function(a,b,c,d){var u=this,t=P.eu(c,d)
u.w(0,new H.dD(u,H.f(b,{func:1,ret:[P.c4,c,d],args:[H.a(u,0),H.a(u,1)]}),t))
return t},
O:function(a,b){return this.ak(a,b,null,null)},
$iq:1}
H.dD.prototype={
$2:function(a,b){var u=this.a,t=this.b.$2(H.n(a,H.a(u,0)),H.n(b,H.a(u,1)))
this.c.i(0,C.t.geK(t),t.gH(t))},
$S:function(){var u=this.a
return{func:1,ret:P.B,args:[H.a(u,0),H.a(u,1)]}}}
H.dE.prototype={
gj:function(a){return this.a},
t:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.t(b))return
return this.cn(b)},
cn:function(a){return this.b[H.v(a)]},
w:function(a,b){var u,t,s,r,q=this,p=H.a(q,1)
H.f(b,{func:1,ret:-1,args:[H.a(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.n(q.cn(r),p))}},
gA:function(){return new H.fJ(this,[H.a(this,0)])}}
H.fJ.prototype={
gu:function(a){var u=this.a.c
return new J.b2(u,u.length,[H.a(u,0)])},
gj:function(a){return this.a.c.length}}
H.ej.prototype={
gcW:function(){var u=this.a
return u},
gd_:function(){var u,t,s,r,q=this
if(q.c===1)return C.u
u=q.d
t=u.length-q.e.length-q.f
if(t===0)return C.u
s=[]
for(r=0;r<t;++r){if(r>=u.length)return H.e(u,r)
s.push(u[r])}s.fixed$length=Array
s.immutable$list=Array
return s},
gcX:function(){var u,t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.v
u=l.e
t=u.length
s=l.d
r=s.length-t-l.f
if(t===0)return C.v
q=P.aI
p=new H.L([q,null])
for(o=0;o<t;++o){if(o>=u.length)return H.e(u,o)
n=u[o]
m=r+o
if(m<0||m>=s.length)return H.e(s,m)
p.i(0,new H.cb(n),s[m])}return new H.dC(p,[q,null])},
$ii6:1}
H.eT.prototype={
$2:function(a,b){var u
H.v(a)
u=this.a
u.b=u.b+"$"+H.b(a)
C.a.p(this.b,a)
C.a.p(this.c,b);++u.a},
$S:19}
H.fm.prototype={
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
H.eL.prototype={
n:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.em.prototype={
n:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.b(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.b(t.a)+")"
return s+r+"' on '"+u+"' ("+H.b(t.a)+")"}}
H.fp.prototype={
n:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hW.prototype={
$1:function(a){if(!!J.k(a).$ib7)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.dd.prototype={
n:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iO:1}
H.bV.prototype={
n:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$iar:1,
geZ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ff.prototype={}
H.f6.prototype={
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
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.cI(u))+"'")}}
H.cT.prototype={
n:function(a){return this.a}}
H.dv.prototype={
n:function(a){return this.a}}
H.f_.prototype={
n:function(a){return"RuntimeError: "+H.b(this.a)}}
H.fy.prototype={
n:function(a){return"Assertion failed: "+P.aS(this.a)}}
H.L.prototype={
gj:function(a){return this.a},
gI:function(a){return this.a===0},
gA:function(){return new H.aD(this,[H.a(this,0)])},
gW:function(a){var u=this,t=H.a(u,0)
return H.j3(new H.aD(u,[t]),new H.el(u),t,H.a(u,1))},
t:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.ck(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.ck(t,a)}else return s.eD(a)},
eD:function(a){var u=this.d
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
return s}else return q.eE(b)},
eE:function(a){var u,t,s=this.d
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
G:function(a,b){var u=this.eF(b)
return u},
eF:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=a.gv(a)&0x3ffffff
t=q.aN(p,u)
s=q.b9(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.ek(r)
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
bz:function(a,b){var u,t=this,s=new H.es(H.n(a,H.a(t,0)),H.n(b,H.a(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.bx()
return s},
ek:function(a){var u=this,t=a.d,s=a.c
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
n:function(a){return P.ex(this)},
aO:function(a,b){return a[b]},
aN:function(a,b){return a[b]},
bG:function(a,b,c){a[b]=c},
cm:function(a,b){delete a[b]},
ck:function(a,b){return this.aO(a,b)!=null},
by:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bG(t,u,t)
this.cm(t,u)
return t},
$ij1:1}
H.el.prototype={
$1:function(a){var u=this.a
return u.h(0,H.n(a,H.a(u,0)))},
$S:function(){var u=this.a
return{func:1,ret:H.a(u,1),args:[H.a(u,0)]}}}
H.es.prototype={}
H.aD.prototype={
gj:function(a){return this.a.a},
gI:function(a){return this.a.a===0},
gu:function(a){var u=this.a,t=new H.et(u,u.r,this.$ti)
t.c=u.e
return t},
D:function(a,b){return this.a.t(b)}}
H.et.prototype={
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
H.hP.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.hQ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.hR.prototype={
$1:function(a){return this.a(H.v(a))},
$S:32}
H.ek.prototype={
n:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ij7:1}
H.c6.prototype={$ije:1}
H.cC.prototype={
gj:function(a){return a.length},
$iaT:1,
$aaT:function(){}}
H.c5.prototype={
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]},
i:function(a,b,c){H.z(b)
H.lG(c)
H.aM(b,a,a.length)
a[b]=c},
$iF:1,
$aF:function(){return[P.a7]},
$ab9:function(){return[P.a7]},
$aM:function(){return[P.a7]},
$ip:1,
$ap:function(){return[P.a7]},
$io:1,
$ao:function(){return[P.a7]}}
H.cD.prototype={
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
H.eA.prototype={
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]}}
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
H.cE.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]}}
H.eF.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
H.aM(b,a,a.length)
return a[b]}}
H.cf.prototype={}
H.cg.prototype={}
H.ch.prototype={}
H.ci.prototype={}
P.fA.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:9}
P.fz.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.fB.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.fC.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.hz.prototype={
dA:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bN(new P.hA(this,b),0),a)
else throw H.h(P.D("`setTimeout()` not found."))}}
P.hA.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.fE.prototype={}
P.U.prototype={
a2:function(){},
a3:function(){},
saw:function(a){this.dy=H.x(a,"$iU",this.$ti,"$aU")},
saT:function(a){this.fr=H.x(a,"$iU",this.$ti,"$aU")}}
P.bG.prototype={
gaP:function(){return this.c<4},
dO:function(){var u=this.r
if(u!=null)return u
return this.r=new P.V($.G,[null])},
cB:function(a){var u,t
H.x(a,"$iU",this.$ti,"$aU")
u=a.fr
t=a.dy
if(u==null)this.scq(t)
else u.saw(t)
if(t==null)this.scu(u)
else t.saT(u)
a.saT(a)
a.saw(a)},
eh:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.a(p,0)
H.f(a,{func:1,ret:-1,args:[o]})
H.f(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.jF()
o=new P.d_($.G,c,p.$ti)
o.cC()
return o}u=$.G
t=d?1:0
s=p.$ti
r=new P.U(p,u,t,s)
r.c3(a,b,c,d,o)
r.saT(r)
r.saw(r)
H.x(r,"$iU",s,"$aU")
r.dx=p.c&1
q=p.e
p.scu(r)
r.saw(null)
r.saT(q)
if(q==null)p.scq(r)
else q.saw(r)
if(p.d==p.e)P.jz(p.a)
return r},
e4:function(a){var u=this,t=u.$ti
a=H.x(H.x(a,"$ia0",t,"$aa0"),"$iU",t,"$aU")
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
u=t.dO()
t.ah()
return u},
cr:function(a){var u,t,s,r,q=this
H.f(a,{func:1,ret:-1,args:[[P.T,H.a(q,0)]]})
u=q.c
if((u&2)!==0)throw H.h(P.ca("Cannot fire new event. Controller is already firing an event"))
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
P.jz(u.b)},
scq:function(a){this.d=H.x(a,"$iU",this.$ti,"$aU")},
scu:function(a){this.e=H.x(a,"$iU",this.$ti,"$aU")},
$ijb:1,
$imC:1,
$ibk:1,
$ibj:1}
P.ht.prototype={
gaP:function(){return P.bG.prototype.gaP.call(this)&&(this.c&2)===0},
aH:function(){if((this.c&2)!==0)return new P.aX("Cannot fire new event. Controller is already firing an event")
return this.dr()},
aY:function(a){var u,t=this
H.n(a,H.a(t,0))
u=t.d
if(u==null)return
if(u===t.e){t.c|=2
u.ar(a)
t.c&=4294967293
if(t.d==null)t.bm()
return}t.cr(new P.hu(t,a))},
ah:function(){var u=this
if(u.d!=null)u.cr(new P.hv(u))
else u.r.c9(null)}}
P.hu.prototype={
$1:function(a){H.x(a,"$iT",[H.a(this.a,0)],"$aT").ar(this.b)},
$S:function(){return{func:1,ret:P.B,args:[[P.T,H.a(this.a,0)]]}}}
P.hv.prototype={
$1:function(a){H.x(a,"$iT",[H.a(this.a,0)],"$aT").cc()},
$S:function(){return{func:1,ret:P.B,args:[[P.T,H.a(this.a,0)]]}}}
P.fI.prototype={}
P.hw.prototype={}
P.ax.prototype={
eL:function(a){if((this.c&15)!==6)return!0
return this.b.b.bT(H.f(this.d,{func:1,ret:P.E,args:[P.u]}),a.a,P.E,P.u)},
eC:function(a){var u=this.e,t=P.u,s={futureOr:1,type:H.a(this,1)},r=this.b.b
if(H.bn(u,{func:1,args:[P.u,P.O]}))return H.hN(r.eR(u,a.a,a.b,null,t,P.O),s)
else return H.hN(r.bT(H.f(u,{func:1,args:[P.u]}),a.a,null,t),s)}}
P.V.prototype={
ge_:function(){return this.a===8},
d5:function(a,b,c){var u,t,s,r=H.a(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.G
if(u!==C.d){H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.lw(b,u)}t=new P.V($.G,[c])
s=b==null?1:3
this.bk(new P.ax(t,s,a,b,[r,c]))
return t},
d4:function(a,b){return this.d5(a,null,b)},
d9:function(a){var u,t
H.f(a,{func:1})
u=$.G
t=new P.V(u,this.$ti)
if(u!==C.d)a=H.f(a,{func:1,ret:null})
u=H.a(this,0)
this.bk(new P.ax(t,8,a,null,[u,u]))
return t},
ef:function(a){H.n(a,H.a(this,0))
this.a=4
this.c=a},
bk:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.d(t.c,"$iax")
t.c=a}else{if(s===2){u=H.d(t.c,"$iV")
s=u.a
if(s<4){u.bk(a)
return}t.a=s
t.c=u.c}P.bL(null,null,t.b,H.f(new P.fU(t,a),{func:1,ret:-1}))}},
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
P.bL(null,null,p.b,H.f(new P.h0(o,p),{func:1,ret:-1}))}},
aU:function(){var u=H.d(this.c,"$iax")
this.c=null
return this.aX(u)},
aX:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aJ:function(a){var u,t,s=this,r=H.a(s,0)
H.hN(a,{futureOr:1,type:r})
u=s.$ti
if(H.dk(a,"$iaC",u,"$aaC"))if(H.dk(a,"$iV",u,null))P.fW(a,s)
else P.jk(a,s)
else{t=s.aU()
H.n(a,r)
s.a=4
s.c=a
P.bH(s,t)}},
aK:function(a,b){var u,t=this
H.d(b,"$iO")
u=t.aU()
t.a=8
t.c=new P.a4(a,b)
P.bH(t,u)},
dI:function(a){return this.aK(a,null)},
c9:function(a){var u=this
if(H.dk(a,"$iaC",u.$ti,"$aaC")){u.dE(a)
return}u.a=1
P.bL(null,null,u.b,H.f(new P.fV(u,a),{func:1,ret:-1}))},
dE:function(a){var u=this,t=u.$ti
H.x(a,"$iaC",t,"$aaC")
if(H.dk(a,"$iV",t,null)){if(a.ge_()){u.a=1
P.bL(null,null,u.b,H.f(new P.h_(u,a),{func:1,ret:-1}))}else P.fW(a,u)
return}P.jk(a,u)},
$iaC:1}
P.fU.prototype={
$0:function(){P.bH(this.a,this.b)},
$S:2}
P.h0.prototype={
$0:function(){P.bH(this.b,this.a.a)},
$S:2}
P.fX.prototype={
$1:function(a){var u=this.a
u.a=0
u.aJ(a)},
$S:9}
P.fY.prototype={
$2:function(a,b){H.d(b,"$iO")
this.a.aK(a,b)},
$1:function(a){return this.$2(a,null)},
$C:"$2",
$D:function(){return[null]},
$S:45}
P.fZ.prototype={
$0:function(){this.a.aK(this.b,this.c)},
$S:2}
P.fV.prototype={
$0:function(){var u=this.a,t=H.n(this.b,H.a(u,0)),s=u.aU()
u.a=4
u.c=t
P.bH(u,s)},
$S:2}
P.h_.prototype={
$0:function(){P.fW(this.b,this.a)},
$S:2}
P.h3.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.d2(H.f(s.d,{func:1}),null)}catch(r){u=H.P(r)
t=H.b1(r)
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
s.b=n.d4(new P.h4(p),null)
s.a=!1}},
$S:0}
P.h4.prototype={
$1:function(a){return this.a},
$S:40}
P.h2.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.a(s,0)
q=H.n(n.c,r)
p=H.a(s,1)
n.a.b=s.b.b.bT(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.P(o)
t=H.b1(o)
s=n.a
s.b=new P.a4(u,t)
s.a=!0}},
$S:0}
P.h1.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.d(m.a.a.c,"$ia4")
r=m.c
if(H.N(r.eL(u))&&r.e!=null){q=m.b
q.b=r.eC(u)
q.a=!1}}catch(p){t=H.P(p)
s=H.b1(p)
r=H.d(m.a.a.c,"$ia4")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a4(t,s)
n.a=!0}},
$S:0}
P.cV.prototype={}
P.a_.prototype={
O:function(a,b){var u=H.J(this,"a_",0)
return new P.hg(H.f(b,{func:1,ret:null,args:[u]}),this,[u,null])},
gj:function(a){var u={},t=new P.V($.G,[P.H])
u.a=0
this.T(new P.f8(u,this),!0,new P.f9(u,t),t.gcg())
return t},
a_:function(a){var u=H.J(this,"a_",0),t=H.C([],[u]),s=new P.V($.G,[[P.o,u]])
this.T(new P.fa(this,t),!0,new P.fb(s,t),s.gcg())
return s}}
P.f8.prototype={
$1:function(a){H.n(a,H.J(this.b,"a_",0));++this.a.a},
$S:function(){return{func:1,ret:P.B,args:[H.J(this.b,"a_",0)]}}}
P.f9.prototype={
$0:function(){this.b.aJ(this.a.a)},
$C:"$0",
$R:0,
$S:2}
P.fa.prototype={
$1:function(a){C.a.p(this.b,H.n(a,H.J(this.a,"a_",0)))},
$S:function(){return{func:1,ret:P.B,args:[H.J(this.a,"a_",0)]}}}
P.fb.prototype={
$0:function(){this.a.aJ(this.b)},
$C:"$0",
$R:0,
$S:2}
P.a0.prototype={}
P.f7.prototype={}
P.cW.prototype={
gv:function(a){return(H.bf(this.a)^892482866)>>>0},
P:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cW&&b.a===this.a}}
P.cX.prototype={
bA:function(){return this.x.e4(this)},
a2:function(){H.x(this,"$ia0",[H.a(this.x,0)],"$aa0")},
a3:function(){H.x(this,"$ia0",[H.a(this.x,0)],"$aa0")}}
P.T.prototype={
c3:function(a,b,c,d,e){var u,t,s=this,r=H.J(s,"T",0)
H.f(a,{func:1,ret:-1,args:[r]})
s.sdD(H.f(a,{func:1,ret:null,args:[r]}))
u=b==null?P.lD():b
if(H.bn(u,{func:1,ret:-1,args:[P.u,P.O]}))s.b=s.d.d0(u,null,P.u,P.O)
else if(H.bn(u,{func:1,ret:-1,args:[P.u]}))s.b=H.f(u,{func:1,ret:null,args:[P.u]})
else H.X(P.br("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.f(c,{func:1,ret:-1})
t=c==null?P.jF():c
s.se2(H.f(t,{func:1,ret:-1}))},
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
return t==null?$.dm():t},
bn:function(){var u,t=this,s=t.e=(t.e|8)>>>0
if((s&64)!==0){u=t.r
if(u.a===1)u.a=3}if((s&32)===0)t.sbD(null)
t.f=t.bA()},
ar:function(a){var u,t=this,s=H.J(t,"T",0)
H.n(a,s)
u=t.e
if((u&8)!==0)return
if(u<32)t.aY(a)
else t.bl(new P.fL(a,[s]))},
aG:function(a,b){var u=this.e
if((u&8)!==0)return
if(u<32)this.cD(a,b)
else this.bl(new P.fN(a,b))},
cc:function(){var u=this,t=u.e
if((t&8)!==0)return
t=(t|2)>>>0
u.e=t
if(t<32)u.ah()
else u.bl(C.F)},
a2:function(){},
a3:function(){},
bA:function(){return},
bl:function(a){var u=this,t=[H.J(u,"T",0)],s=H.x(u.r,"$ick",t,"$ack")
if(s==null){s=new P.ck(t)
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
cD:function(a,b){var u=this,t=u.e,s=new P.fG(u,a,b)
if((t&1)!==0){u.e=(t|16)>>>0
u.bn()
t=u.f
if(t!=null&&t!==$.dm())t.d9(s)
else s.$0()}else{s.$0()
u.bq((t&4)!==0)}},
ah:function(){var u,t=this,s=new P.fF(t)
t.bn()
t.e=(t.e|16)>>>0
u=t.f
if(u!=null&&u!==$.dm())u.d9(s)
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
se2:function(a){this.c=H.f(a,{func:1,ret:-1})},
sbD:function(a){this.r=H.x(a,"$icj",[H.J(this,"T",0)],"$acj")},
$ia0:1,
$ibk:1,
$ibj:1}
P.fG.prototype={
$0:function(){var u,t,s,r=this.a,q=r.e
if((q&8)!==0&&(q&16)===0)return
r.e=(q|32)>>>0
u=r.b
q=this.b
t=P.u
s=r.d
if(H.bn(u,{func:1,ret:-1,args:[P.u,P.O]}))s.eS(u,q,this.c,t,P.O)
else s.bU(H.f(r.b,{func:1,ret:-1,args:[P.u]}),q,t)
r.e=(r.e&4294967263)>>>0},
$S:0}
P.fF.prototype={
$0:function(){var u=this.a,t=u.e
if((t&16)===0)return
u.e=(t|42)>>>0
u.d.bS(u.c)
u.e=(u.e&4294967263)>>>0},
$S:0}
P.hq.prototype={
T:function(a,b,c,d){H.f(a,{func:1,ret:-1,args:[H.a(this,0)]})
H.f(c,{func:1,ret:-1})
return this.a.eh(H.f(a,{func:1,ret:-1,args:[H.a(this,0)]}),d,c,!0===b)},
bb:function(a,b,c){return this.T(a,null,b,c)}}
P.b_.prototype={
saC:function(a){this.a=H.d(a,"$ib_")},
gaC:function(){return this.a}}
P.fL.prototype={
bP:function(a){H.x(a,"$ibj",this.$ti,"$abj").aY(this.b)}}
P.fN.prototype={
bP:function(a){a.cD(this.b,this.c)},
$ab_:function(){}}
P.fM.prototype={
bP:function(a){a.ah()},
gaC:function(){return},
saC:function(a){throw H.h(P.ca("No events after a done."))},
$ib_:1,
$ab_:function(){}}
P.cj.prototype={
bh:function(a){var u,t=this
H.x(a,"$ibj",t.$ti,"$abj")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.jY(new P.hh(t,a))
t.a=1}}
P.hh.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.x(this.b,"$ibj",[H.a(r,0)],"$abj")
t=r.b
s=t.gaC()
r.b=s
if(s==null)r.c=null
t.bP(u)},
$S:2}
P.ck.prototype={
p:function(a,b){var u,t=this
H.d(b,"$ib_")
u=t.c
if(u==null)t.b=t.c=b
else{u.saC(b)
t.c=b}}}
P.d_.prototype={
cC:function(){var u=this
if((u.b&2)!==0)return
P.bL(null,null,u.a,H.f(u.gee(),{func:1,ret:-1}))
u.b=(u.b|2)>>>0},
bO:function(a){this.b+=4},
bR:function(){var u=this.b
if(u>=4){u=this.b=u-4
if(u<4&&(u&1)===0)this.cC()}},
az:function(){return $.dm()},
ah:function(){var u=this,t=u.b=(u.b&4294967293)>>>0
if(t>=4)return
u.b=(t|1)>>>0
u.a.bS(u.c)},
$ia0:1}
P.fT.prototype={
T:function(a,b,c,d){var u,t,s=this,r=H.a(s,1)
H.f(a,{func:1,ret:-1,args:[r]})
H.f(c,{func:1,ret:-1})
b=!0===b
u=$.G
t=b?1:0
t=new P.d1(s,u,t,s.$ti)
t.c3(a,d,c,b,r)
t.scF(s.a.bb(t.gdT(),t.gdW(),t.gdY()))
return t},
bb:function(a,b,c){return this.T(a,null,b,c)},
$aa_:function(a,b){return[b]}}
P.d1.prototype={
ar:function(a){H.n(a,H.a(this,1))
if((this.e&2)!==0)return
this.ds(a)},
aG:function(a,b){if((this.e&2)!==0)return
this.dt(a,b)},
a2:function(){var u=this.y
if(u==null)return
u.bO(0)},
a3:function(){var u=this.y
if(u==null)return
u.bR()},
bA:function(){var u=this.y
if(u!=null){this.scF(null)
return u.az()}return},
dU:function(a){this.x.dV(H.n(a,H.a(this,0)),this)},
dZ:function(a,b){H.d(b,"$iO")
H.x(this,"$ibk",[H.a(this.x,1)],"$abk").aG(a,b)},
dX:function(){H.x(this,"$ibk",[H.a(this.x,1)],"$abk").cc()},
scF:function(a){this.y=H.x(a,"$ia0",[H.a(this,0)],"$aa0")},
$aa0:function(a,b){return[b]},
$abk:function(a,b){return[b]},
$abj:function(a,b){return[b]},
$aT:function(a,b){return[b]}}
P.hg.prototype={
dV:function(a,b){var u,t,s,r
H.n(a,H.a(this,0))
H.x(b,"$ibk",[H.a(this,1)],"$abk")
u=null
try{u=this.b.$1(a)}catch(r){t=H.P(r)
s=H.b1(r)
b.aG(t,s)
return}b.ar(u)}}
P.a4.prototype={
n:function(a){return H.b(this.a)},
$ib7:1}
P.hD.prototype={$imy:1}
P.hI.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cG():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.n(0)
throw u},
$S:2}
P.hi.prototype={
bS:function(a){var u,t,s,r=null
H.f(a,{func:1,ret:-1})
try{if(C.d===$.G){a.$0()
return}P.jw(r,r,this,a,-1)}catch(s){u=H.P(s)
t=H.b1(s)
P.bK(r,r,this,u,H.d(t,"$iO"))}},
bU:function(a,b,c){var u,t,s,r=null
H.f(a,{func:1,ret:-1,args:[c]})
H.n(b,c)
try{if(C.d===$.G){a.$1(b)
return}P.jy(r,r,this,a,b,-1,c)}catch(s){u=H.P(s)
t=H.b1(s)
P.bK(r,r,this,u,H.d(t,"$iO"))}},
eS:function(a,b,c,d,e){var u,t,s,r=null
H.f(a,{func:1,ret:-1,args:[d,e]})
H.n(b,d)
H.n(c,e)
try{if(C.d===$.G){a.$2(b,c)
return}P.jx(r,r,this,a,b,c,-1,d,e)}catch(s){u=H.P(s)
t=H.b1(s)
P.bK(r,r,this,u,H.d(t,"$iO"))}},
es:function(a,b){return new P.hk(this,H.f(a,{func:1,ret:b}),b)},
cM:function(a){return new P.hj(this,H.f(a,{func:1,ret:-1}))},
eu:function(a,b){return new P.hl(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
d2:function(a,b){H.f(a,{func:1,ret:b})
if($.G===C.d)return a.$0()
return P.jw(null,null,this,a,b)},
bT:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.n(b,d)
if($.G===C.d)return a.$1(b)
return P.jy(null,null,this,a,b,c,d)},
eR:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.n(b,e)
H.n(c,f)
if($.G===C.d)return a.$2(b,c)
return P.jx(null,null,this,a,b,c,d,e,f)},
d0:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}}
P.hk.prototype={
$0:function(){return this.a.d2(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hj.prototype={
$0:function(){return this.a.bS(this.b)},
$S:0}
P.hl.prototype={
$1:function(a){var u=this.c
return this.a.bU(this.b,H.n(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.h5.prototype={
gj:function(a){return this.a},
gI:function(a){return this.a===0},
gA:function(){return new P.h6(this,[H.a(this,0)])},
t:function(a){var u,t
if(typeof a==="string"&&a!=="__proto__"){u=this.b
return u==null?!1:u[a]!=null}else if(typeof a==="number"&&(a&1073741823)===a){t=this.c
return t==null?!1:t[a]!=null}else return this.dK(a)},
dK:function(a){var u=this.d
if(u==null)return!1
return this.a7(this.av(u,a),a)>=0},
h:function(a,b){var u,t,s
if(typeof b==="string"&&b!=="__proto__"){u=this.b
t=u==null?null:P.jl(u,b)
return t}else if(typeof b==="number"&&(b&1073741823)===b){s=this.c
t=s==null?null:P.jl(s,b)
return t}else return this.dR(b)},
dR:function(a){var u,t,s=this.d
if(s==null)return
u=this.av(s,a)
t=this.a7(u,a)
return t<0?null:u[t+1]},
i:function(a,b,c){var u,t,s,r,q,p=this
H.n(b,H.a(p,0))
H.n(c,H.a(p,1))
if(typeof b==="string"&&b!=="__proto__"){u=p.b
p.dH(u==null?p.b=P.jm():u,b,c)}else{t=p.d
if(t==null)t=p.d=P.jm()
s=H.jT(b)&1073741823
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
dH:function(a,b,c){var u=this
H.n(b,H.a(u,0))
H.n(c,H.a(u,1))
if(a[b]==null){++u.a
u.e=null}P.ij(a,b,c)},
av:function(a,b){return a[H.jT(b)&1073741823]}}
P.h8.prototype={
a7:function(a,b){var u,t,s
if(a==null)return-1
u=a.length
for(t=0;t<u;t+=2){s=a[t]
if(s==null?b==null:s===b)return t}return-1}}
P.h6.prototype={
gj:function(a){return this.a.a},
gI:function(a){return this.a.a===0},
gu:function(a){var u=this.a
return new P.h7(u,u.cj(),this.$ti)},
D:function(a,b){return this.a.t(b)}}
P.h7.prototype={
gq:function(){return this.d},
l:function(){var u=this,t=u.b,s=u.c,r=u.a
if(t!==r.e)throw H.h(P.aq(r))
else if(s>=t.length){u.sas(null)
return!1}else{u.sas(t[s])
u.c=s+1
return!0}},
sas:function(a){this.d=H.n(a,H.a(this,0))},
$ias:1}
P.hf.prototype={
gu:function(a){var u=this,t=new P.d6(u,u.r,u.$ti)
t.c=u.e
return t},
gj:function(a){return this.a},
D:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.d(u[b],"$ibI")!=null}else{t=this.dJ(b)
return t}},
dJ:function(a){var u=this.d
if(u==null)return!1
return this.a7(this.av(u,a),a)>=0},
p:function(a,b){var u,t,s=this
H.n(b,H.a(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cd(u==null?s.b=P.ik():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cd(t==null?s.c=P.ik():t,b)}else return s.dB(b)},
dB:function(a){var u,t,s,r=this
H.n(a,H.a(r,0))
u=r.d
if(u==null)u=r.d=P.ik()
t=r.ci(a)
s=u[t]
if(s==null)u[t]=[r.br(a)]
else{if(r.a7(s,a)>=0)return!1
s.push(r.br(a))}return!0},
G:function(a,b){var u=this
if(typeof b==="string"&&b!=="__proto__")return u.cA(u.b,b)
else if(typeof b==="number"&&(b&1073741823)===b)return u.cA(u.c,b)
else return u.e5(b)},
e5:function(a){var u,t,s=this,r=s.d
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
P.d6.prototype={
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
P.ev.prototype={$iF:1,$ip:1,$io:1}
P.M.prototype={
gu:function(a){return new H.c3(a,this.gj(a),[H.an(this,a,"M",0)])},
F:function(a,b){return this.h(a,b)},
w:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.an(s,a,"M",0)]})
u=s.gj(a)
for(t=0;t<u;++t){b.$1(s.h(a,t))
if(u!==s.gj(a))throw H.h(P.aq(a))}},
gI:function(a){return this.gj(a)===0},
gbM:function(a){return!this.gI(a)},
ac:function(a,b){var u=H.an(this,a,"M",0)
return new H.aK(a,H.f(b,{func:1,ret:P.E,args:[u]}),[u])},
E:function(a,b,c){var u=H.an(this,a,"M",0)
return new H.aG(a,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
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
H.ja(a,b,u)},
a5:function(a,b){var u=this.h(a,b)
this.dG(a,b,b+1)
return u},
n:function(a){return P.eg(a,"[","]")}}
P.ew.prototype={}
P.ey.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.b(a)
t.a=u+": "
t.a+=H.b(b)},
$S:10}
P.aF.prototype={
w:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.J(s,"aF",0),H.J(s,"aF",1)]})
for(u=J.y(s.gA());u.l();){t=u.gq()
b.$2(t,s.h(0,t))}},
ak:function(a,b,c,d){var u,t,s,r,q=this
H.f(b,{func:1,ret:[P.c4,c,d],args:[H.J(q,"aF",0),H.J(q,"aF",1)]})
u=P.eu(c,d)
for(t=J.y(q.gA());t.l();){s=t.gq()
r=b.$2(s,q.h(0,s))
u.i(0,C.t.geK(r),r.gH(r))}return u},
O:function(a,b){return this.ak(a,b,null,null)},
t:function(a){return J.kg(this.gA(),a)},
gj:function(a){return J.ae(this.gA())},
gI:function(a){return J.kj(this.gA())},
n:function(a){return P.ex(this)},
$iq:1}
P.hB.prototype={
i:function(a,b,c){H.n(b,H.a(this,0))
H.n(c,H.a(this,1))
throw H.h(P.D("Cannot modify unmodifiable map"))}}
P.ez.prototype={
h:function(a,b){return this.a.h(0,b)},
i:function(a,b,c){this.a.i(0,H.n(b,H.a(this,0)),H.n(c,H.a(this,1)))},
t:function(a){return this.a.t(a)},
w:function(a,b){this.a.w(0,H.f(b,{func:1,ret:-1,args:[H.a(this,0),H.a(this,1)]}))},
gI:function(a){return this.a.a===0},
gj:function(a){return this.a.a},
gA:function(){var u=this.a
return new H.aD(u,[H.a(u,0)])},
n:function(a){return P.ex(this.a)},
ak:function(a,b,c,d){return this.a.ak(0,H.f(b,{func:1,ret:[P.c4,c,d],args:[H.a(this,0),H.a(this,1)]}),c,d)},
O:function(a,b){return this.ak(a,b,null,null)},
$iq:1}
P.fq.prototype={}
P.bE.prototype={
J:function(a,b){var u,t,s,r=this,q=H.C([],[H.J(r,"bE",0)])
C.a.sj(q,r.gj(r))
for(u=r.U(),u=P.ce(u,u.r,H.a(u,0)),t=0;u.l();t=s){s=t+1
C.a.i(q,t,u.d)}return q},
a_:function(a){return this.J(a,!0)},
E:function(a,b,c){var u=H.J(this,"bE",0)
return new H.bx(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
n:function(a){return P.eg(this,"{","}")},
F:function(a,b){var u,t,s
P.c8(b,"index")
for(u=this.U(),u=P.ce(u,u.r,H.a(u,0)),t=0;u.l();){s=u.d
if(b===t)return s;++t}throw H.h(P.bz(b,this,"index",null,t))}}
P.f4.prototype={$iF:1,$ip:1,$iah:1}
P.hn.prototype={
K:function(a,b){var u
for(u=J.y(H.x(b,"$ip",this.$ti,"$ap"));u.l();)this.p(0,u.gq())},
J:function(a,b){var u,t,s,r=this,q=H.C([],r.$ti)
C.a.sj(q,r.a)
for(u=P.ce(r,r.r,H.a(r,0)),t=0;u.l();t=s){s=t+1
C.a.i(q,t,u.d)}return q},
a_:function(a){return this.J(a,!0)},
E:function(a,b,c){var u=H.a(this,0)
return new H.bx(this,H.f(b,{func:1,ret:c,args:[u]}),[u,c])},
O:function(a,b){return this.E(a,b,null)},
n:function(a){return P.eg(this,"{","}")},
bN:function(a,b){var u,t=P.ce(this,this.r,H.a(this,0))
if(!t.l())return""
if(b===""){u=""
do u+=H.b(t.d)
while(t.l())}else{u=H.b(t.d)
for(;t.l();)u=u+b+H.b(t.d)}return u.charCodeAt(0)==0?u:u},
F:function(a,b){var u,t,s,r=this
P.c8(b,"index")
for(u=P.ce(r,r.r,H.a(r,0)),t=0;u.l();){s=u.d
if(b===t)return s;++t}throw H.h(P.bz(b,r,"index",null,t))},
$iF:1,
$ip:1,
$iah:1}
P.d7.prototype={}
P.db.prototype={}
P.df.prototype={}
P.ha.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.e3(b):u}},
gj:function(a){return this.b==null?this.c.a:this.at().length},
gI:function(a){return this.gj(this)===0},
gA:function(){if(this.b==null){var u=this.c
return new H.aD(u,[H.a(u,0)])}return new P.hb(this)},
i:function(a,b,c){var u,t,s=this
if(s.b==null)s.c.i(0,b,c)
else if(s.t(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.el().i(0,b,c)},
t:function(a){if(this.b==null)return this.c.t(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
w:function(a,b){var u,t,s,r,q=this
H.f(b,{func:1,ret:-1,args:[P.j,,]})
if(q.b==null)return q.c.w(0,b)
u=q.at()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.hE(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.h(P.aq(q))}},
at:function(){var u=H.a8(this.c)
if(u==null)u=this.c=H.C(Object.keys(this.a),[P.j])
return u},
el:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.eu(P.j,null)
t=p.at()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.i(0,q,p.h(0,q))}if(r===0)C.a.p(t,null)
else C.a.sj(t,0)
p.a=p.b=null
return p.c=u},
e3:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.hE(this.a[a])
return this.b[a]=u},
$aaF:function(){return[P.j,null]},
$aq:function(){return[P.j,null]}}
P.hb.prototype={
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
u=new J.b2(u,u.length,[H.a(u,0)])}return u},
D:function(a,b){return this.a.t(b)},
$aF:function(){return[P.j]},
$aaE:function(){return[P.j]},
$ap:function(){return[P.j]}}
P.dz.prototype={}
P.bX.prototype={}
P.cA.prototype={
n:function(a){var u=P.aS(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.ep.prototype={
n:function(a){return"Cyclic error in JSON stringify"}}
P.eo.prototype={
cQ:function(a,b,c){var u=P.lv(b,this.gey().a)
return u},
bK:function(a,b){var u=P.lm(a,this.gez().b,null)
return u},
gez:function(){return C.J},
gey:function(){return C.I}}
P.er.prototype={
$abX:function(){return[P.u,P.j]}}
P.eq.prototype={
$abX:function(){return[P.j,P.u]}}
P.hd.prototype={
dc:function(a){var u,t,s,r,q,p,o=a.length
for(u=J.iw(a),t=this.c,s=0,r=0;r<o;++r){q=u.aI(a,r)
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
t.a+=H.ag(q)}}if(s===0)t.a+=H.b(a)
else if(s<o)t.a+=u.ae(a,s,o)},
bo:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.h(new P.ep(a,null))}C.a.p(u,a)},
bg:function(a){var u,t,s,r,q=this
if(q.da(a))return
q.bo(a)
try{u=q.b.$1(a)
if(!q.da(u)){s=P.j0(a,null,q.gcw())
throw H.h(s)}s=q.a
if(0>=s.length)return H.e(s,-1)
s.pop()}catch(r){t=H.P(r)
s=P.j0(a,t,q.gcw())
throw H.h(s)}},
da:function(a){var u,t,s=this
if(typeof a==="number"){if(!isFinite(a))return!1
s.c.a+=C.c.n(a)
return!0}else if(a===!0){s.c.a+="true"
return!0}else if(a===!1){s.c.a+="false"
return!0}else if(a==null){s.c.a+="null"
return!0}else if(typeof a==="string"){u=s.c
u.a+='"'
s.dc(a)
u.a+='"'
return!0}else{u=J.k(a)
if(!!u.$io){s.bo(a)
s.eW(a)
u=s.a
if(0>=u.length)return H.e(u,-1)
u.pop()
return!0}else if(!!u.$iq){s.bo(a)
t=s.eX(a)
u=s.a
if(0>=u.length)return H.e(u,-1)
u.pop()
return t}else return!1}},
eW:function(a){var u,t,s=this.c
s.a+="["
u=J.K(a)
if(u.gbM(a)){this.bg(u.h(a,0))
for(t=1;t<u.gj(a);++t){s.a+=","
this.bg(u.h(a,t))}}s.a+="]"},
eX:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gI(a)){o.c.a+="{}"
return!0}u=a.gj(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.w(0,new P.he(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.dc(H.v(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.e(t,p)
o.bg(t[p])}r.a+="}"
return!0}}
P.he.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.i(u,t.a++,a)
C.a.i(u,t.a++,b)},
$S:10}
P.hc.prototype={
gcw:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.eI.prototype={
$2:function(a,b){var u,t,s
H.d(a,"$iaI")
u=this.b
t=this.a
u.a+=t.a
s=u.a+=H.b(a.a)
u.a=s+": "
u.a+=P.aS(b)
t.a=", "},
$S:30}
P.E.prototype={}
P.aA.prototype={
p:function(a,b){return P.kB(C.f.k(this.a,H.d(b,"$imh").gf0()),!1)},
P:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
b4:function(a,b){return C.f.b4(this.a,H.d(b,"$iaA").a)},
gv:function(a){var u=this.a
return(u^C.f.bH(u,30))&1073741823},
n:function(a){var u=this,t=P.kC(H.l1(u)),s=P.cs(H.l_(u)),r=P.cs(H.kW(u)),q=P.cs(H.kX(u)),p=P.cs(H.kZ(u)),o=P.cs(H.l0(u)),n=P.kD(H.kY(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.a7.prototype={}
P.b7.prototype={}
P.dp.prototype={
n:function(a){return"Assertion failed"}}
P.cG.prototype={
n:function(a){return"Throw of null."}}
P.ay.prototype={
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
P.cJ.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.b(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.b(s)
else if(t>s)u=": Not in range "+H.b(s)+".."+H.b(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.b(s)}return u}}
P.ee.prototype={
gbw:function(){return"RangeError"},
gbv:function(){var u,t=H.z(this.b)
if(typeof t!=="number")return t.a0()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.b(u)},
gj:function(a){return this.f}}
P.eH.prototype={
n:function(a){var u,t,s,r,q,p,o,n,m=this,l={},k=new P.av("")
l.a=""
for(u=m.c,t=u.length,s=0,r="",q="";s<t;++s,q=", "){p=u[s]
k.a=r+q
r=k.a+=P.aS(p)
l.a=", "}m.d.w(0,new P.eI(l,k))
o=P.aS(m.a)
n=k.n(0)
u="NoSuchMethodError: method not found: '"+H.b(m.b.a)+"'\nReceiver: "+o+"\nArguments: ["+n+"]"
return u}}
P.fr.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.fo.prototype={
n:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aX.prototype={
n:function(a){return"Bad state: "+this.a}}
P.dA.prototype={
n:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aS(u)+"."}}
P.eM.prototype={
n:function(a){return"Out of Memory"},
$ib7:1}
P.cO.prototype={
n:function(a){return"Stack Overflow"},
$ib7:1}
P.dJ.prototype={
n:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.fS.prototype={
n:function(a){return"Exception: "+this.a},
$ii4:1}
P.ec.prototype={
n:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.b(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.e.ae(r,0,75)+"...":r
return s+"\n"+u}else return s},
$ii4:1}
P.ar.prototype={}
P.H.prototype={}
P.p.prototype={
E:function(a,b,c){var u=H.J(this,"p",0)
return H.j3(this,H.f(b,{func:1,ret:c,args:[u]}),u,c)},
O:function(a,b){return this.E(a,b,null)},
ac:function(a,b){var u=H.J(this,"p",0)
return new H.aK(this,H.f(b,{func:1,ret:P.E,args:[u]}),[u])},
J:function(a,b){return P.aW(this,!0,H.J(this,"p",0))},
a_:function(a){return this.J(a,!0)},
gj:function(a){var u,t=this.gu(this)
for(u=0;t.l();)++u
return u},
geB:function(a){var u=this.gu(this)
if(!u.l())throw H.h(H.iY())
return u.gq()},
gad:function(a){var u,t=this.gu(this)
if(!t.l())throw H.h(H.iY())
u=t.gq()
if(t.l())throw H.h(H.kI())
return u},
F:function(a,b){var u,t,s
P.c8(b,"index")
for(u=this.gu(this),t=0;u.l();){s=u.gq()
if(b===t)return s;++t}throw H.h(P.bz(b,this,"index",null,t))},
n:function(a){return P.kH(this,"(",")")}}
P.as.prototype={}
P.o.prototype={$iF:1,$ip:1}
P.q.prototype={}
P.c4.prototype={}
P.B.prototype={
gv:function(a){return P.u.prototype.gv.call(this,this)},
n:function(a){return"null"}}
P.a2.prototype={}
P.u.prototype={constructor:P.u,$iu:1,
P:function(a,b){return this===b},
gv:function(a){return H.bf(this)},
n:function(a){return"Instance of '"+H.b(H.cI(this))+"'"},
bd:function(a,b){H.d(b,"$ii6")
throw H.h(P.j4(this,b.gcW(),b.gd_(),b.gcX()))},
toString:function(){return this.n(this)}}
P.ah.prototype={}
P.O.prototype={}
P.j.prototype={$ij7:1}
P.av.prototype={
gj:function(a){return this.a.length},
n:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$imm:1}
P.aI.prototype={}
W.m.prototype={$im:1}
W.bR.prototype={
n:function(a){return String(a)},
$ibR:1}
W.dn.prototype={
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
W.dI.prototype={}
W.bw.prototype={$ibw:1}
W.dK.prototype={
n:function(a){return String(a)}}
W.ct.prototype={
n:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
P:function(a,b){if(b==null)return!1
if(!J.k(b).$iig)return!1
return a.left===b.left&&a.top===b.top&&a.width===b.width&&a.height===b.height},
gv:function(a){return W.jp(C.c.gv(a.left),C.c.gv(a.top),C.c.gv(a.width),C.c.gv(a.height))},
$iig:1,
$aig:function(){return[P.a2]}}
W.dL.prototype={
p:function(a,b){return a.add(H.v(b))},
gj:function(a){return a.length}}
W.fH.prototype={
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
return new J.b2(u,u.length,[H.a(u,0)])},
a1:function(a,b){H.f(b,{func:1,ret:P.H,args:[W.t,W.t]})
throw H.h(P.D("Cannot sort element lists"))},
b1:function(a){J.iL(this.a)},
a5:function(a,b){var u,t=this.b
if(b>=t.length)return H.e(t,b)
u=H.d(t[b],"$it")
this.a.removeChild(u)
return u},
$aF:function(){return[W.t]},
$aM:function(){return[W.t]},
$ap:function(){return[W.t]},
$ao:function(){return[W.t]}}
W.ab.prototype={
gj:function(a){return this.a.length},
h:function(a,b){var u
H.z(b)
u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return H.n(u[b],H.a(this,0))},
i:function(a,b,c){H.z(b)
H.n(c,H.a(this,0))
throw H.h(P.D("Cannot modify list"))},
sj:function(a,b){throw H.h(P.D("Cannot modify list"))},
a1:function(a,b){var u=H.a(this,0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
throw H.h(P.D("Cannot sort list"))},
$ia9:1}
W.t.prototype={
ger:function(a){return new W.fO(a)},
gcN:function(a){return new W.fH(a,a.children)},
gcO:function(a){return new W.fP(a)},
aa:function(a,b){this.cU(a,"beforeend",b,null,null)},
n:function(a){return a.localName},
cU:function(a,b,c,d,e){var u,t=this.M(a,c,d,e)
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
M:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.iX
if(u==null){u=H.C([],[W.aa])
t=new W.cF(u)
C.a.p(u,W.jn(null))
C.a.p(u,W.jq())
$.iX=t
d=t}else d=u
u=$.iW
if(u==null){u=new W.dg(d)
$.iW=u
c=u}else{u.a=d
c=u}}if($.aR==null){u=document
t=u.implementation.createHTMLDocument("")
$.aR=t
$.i3=t.createRange()
t=$.aR.createElement("base")
H.d(t,"$ibS")
t.href=u.baseURI
$.aR.head.appendChild(t)}u=$.aR
if(u.body==null){t=u.createElement("body")
u.body=H.d(t,"$ib3")}u=$.aR
if(!!this.$ib3)s=u.body
else{s=u.createElement(a.tagName)
$.aR.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.L,a.tagName)){$.i3.selectNodeContents(s)
r=$.i3.createContextualFragment(b)}else{s.innerHTML=b
r=$.aR.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aR.body
if(s==null?u!=null:s!==u)J.bQ(s)
c.c_(r)
document.adoptNode(r)
return r},
ex:function(a,b,c){return this.M(a,b,c,null)},
a6:function(a,b){a.textContent=null
a.appendChild(this.M(a,b,null,null))},
$it:1,
gd3:function(a){return a.tagName}}
W.dO.prototype={
$1:function(a){return!!J.k(H.d(a,"$ir")).$it},
$S:11}
W.i.prototype={$ii:1}
W.b8.prototype={
dC:function(a,b,c,d){return a.addEventListener(b,H.bN(H.f(c,{func:1,args:[W.i]}),1),!1)},
e7:function(a,b,c,d){return a.removeEventListener(b,H.bN(H.f(c,{func:1,args:[W.i]}),1),!1)},
$ib8:1}
W.eb.prototype={
gj:function(a){return a.length}}
W.by.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.z(b)
H.d(c,"$ir")
throw H.h(P.D("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.h(P.D("Cannot resize immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
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
$aaf:function(){return[W.r]}}
W.c_.prototype={$ic_:1}
W.ba.prototype={$iba:1}
W.aV.prototype={$iaV:1}
W.cB.prototype={
n:function(a){return String(a)},
$icB:1}
W.A.prototype={
gcY:function(a){var u,t,s,r,q,p
if(!!a.offsetX)return new P.aH(a.offsetX,a.offsetY,[P.a2])
else{u=a.target
if(!J.k(W.jr(u)).$it)throw H.h(P.D("offsetX is only supported on elements"))
t=H.d(W.jr(u),"$it")
u=a.clientX
s=a.clientY
r=[P.a2]
q=t.getBoundingClientRect()
p=q.left
q=q.top
H.x(new P.aH(p,q,r),"$iaH",r,"$aaH")
if(typeof u!=="number")return u.R()
if(typeof s!=="number")return s.R()
return new P.aH(C.c.bf(u-p),C.c.bf(s-q),r)}},
$iA:1}
W.a6.prototype={
gad:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.h(P.ca("No elements"))
if(t>1)throw H.h(P.ca("More than one element"))
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
return new W.cv(u,u.length,[H.an(C.O,u,"af",0)])},
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
$aM:function(){return[W.r]},
$ap:function(){return[W.r]},
$ao:function(){return[W.r]}}
W.r.prototype={
V:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
eQ:function(a,b){var u,t
try{u=a.parentNode
J.ke(u,b,a)}catch(t){H.P(t)}return a},
dF:function(a){var u
for(;u=a.firstChild,u!=null;)a.removeChild(u)},
n:function(a){var u=a.nodeValue
return u==null?this.dj(a):u},
e8:function(a,b,c){return a.replaceChild(b,c)},
$ir:1}
W.c7.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.z(b)
H.d(c,"$ir")
throw H.h(P.D("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.h(P.D("Cannot resize immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
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
$aaf:function(){return[W.r]}}
W.f0.prototype={
gj:function(a){return a.length}}
W.cP.prototype={
M:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
u=W.kE("<table>"+H.b(b)+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a6(t).K(0,new W.a6(u))
return t}}
W.fc.prototype={
M:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
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
W.fd.prototype={
M:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bi(a,b,c,d)
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
W.cc.prototype={
a6:function(a,b){var u
a.textContent=null
u=this.M(a,b,null,null)
a.content.appendChild(u)},
$icc:1}
W.aY.prototype={$iaY:1}
W.bg.prototype={}
W.bi.prototype={
gep:function(a){var u=P.a2,t=new P.V($.G,[u]),s=H.f(new W.fx(new P.hw(t,[u])),{func:1,ret:-1,args:[P.a2]})
this.dP(a)
this.e9(a,W.jC(s,u))
return t},
e9:function(a,b){return a.requestAnimationFrame(H.bN(H.f(b,{func:1,ret:-1,args:[P.a2]}),1))},
dP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibi:1,
$ijj:1}
W.fx.prototype={
$1:function(a){var u=this.a
a=H.hN(H.dl(a),{futureOr:1,type:H.a(u,0)})
u=u.a
if(u.a!==0)H.X(P.ca("Future already completed"))
u.aJ(a)},
$S:20}
W.aZ.prototype={$iaZ:1}
W.cd.prototype={$icd:1}
W.cZ.prototype={
n:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
P:function(a,b){if(b==null)return!1
if(!J.k(b).$iig)return!1
return a.left===b.left&&a.top===b.top&&a.width===b.width&&a.height===b.height},
gv:function(a){return W.jp(C.c.gv(a.left),C.c.gv(a.top),C.c.gv(a.width),C.c.gv(a.height))}}
W.d8.prototype={
gj:function(a){return a.length},
h:function(a,b){H.z(b)
if(b>>>0!==b||b>=a.length)throw H.h(P.bz(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.z(b)
H.d(c,"$ir")
throw H.h(P.D("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.h(P.D("Cannot resize immutable List."))},
F:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
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
$aaf:function(){return[W.r]}}
W.fD.prototype={
w:function(a,b){var u,t,s,r,q
H.f(b,{func:1,ret:-1,args:[P.j,P.j]})
for(u=this.gA(),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.W)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gA:function(){var u,t,s,r=this.a.attributes,q=H.C([],[P.j])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=H.d(r[t],"$icd")
if(s.namespaceURI==null)C.a.p(q,s.name)}return q},
gI:function(a){return this.gA().length===0},
$aaF:function(){return[P.j,P.j]},
$aq:function(){return[P.j,P.j]}}
W.fO.prototype={
t:function(a){return this.a.hasAttribute(a)},
h:function(a,b){return this.a.getAttribute(H.v(b))},
i:function(a,b,c){this.a.setAttribute(b,H.v(c))},
gj:function(a){return this.gA().length}}
W.fP.prototype={
U:function(){var u,t,s,r,q=P.c2(P.j)
for(u=this.a.className.split(" "),t=u.length,s=0;s<t;++s){r=J.i_(u[s])
if(r.length!==0)q.p(0,r)}return q},
bY:function(a){this.a.className=H.x(a,"$iah",[P.j],"$aah").bN(0," ")},
gj:function(a){return this.a.classList.length},
p:function(a,b){var u,t
H.v(b)
u=this.a.classList
t=u.contains(b)
u.add(b)
return!t},
G:function(a,b){var u=this.a.classList,t=u.contains(b)
u.remove(b)
return t}}
W.d0.prototype={
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
t=new W.de(new H.L([[P.a_,q],[P.a0,q]]),u)
t.sdL(new P.ht(null,t.gew(t),u))
for(q=r.a,q=new H.c3(q,q.gj(q),[H.a(q,0)]),s=r.c;q.l();)t.p(0,new W.d0(q.d,s,!1,u))
q=t.a
q.toString
return new P.fE(q,[H.a(q,0)]).T(a,b,c,d)},
ab:function(a){return this.T(a,null,null,null)},
bb:function(a,b,c){return this.T(a,null,b,c)}}
W.fQ.prototype={
az:function(){var u=this
if(u.b==null)return
u.cI()
u.b=null
u.se1(null)
return},
bO:function(a){if(this.b==null)return;++this.a
this.cI()},
bR:function(){var u=this
if(u.b==null||u.a<=0)return;--u.a
u.cH()},
cH:function(){var u,t=this,s=t.d,r=s!=null
if(r&&t.a<=0){u=t.b
u.toString
H.f(s,{func:1,args:[W.i]})
if(r)J.kc(u,t.c,s,!1)}},
cI:function(){var u,t=this.d,s=t!=null
if(s){u=this.b
u.toString
H.f(t,{func:1,args:[W.i]})
if(s)J.kd(u,this.c,t,!1)}},
se1:function(a){this.d=H.f(a,{func:1,args:[W.i]})}}
W.fR.prototype={
$1:function(a){return this.a.$1(H.d(a,"$ii"))},
$S:26}
W.de.prototype={
p:function(a,b){var u,t,s,r=this
H.x(b,"$ia_",r.$ti,"$aa_")
u=r.b
if(u.t(b))return
t=r.a
s=H.a(b,0)
t=H.f(t.gem(t),{func:1,ret:-1,args:[s]})
H.f(new W.hr(r,b),{func:1,ret:-1})
u.i(0,b,W.Q(b.a,b.b,t,!1,s))},
bI:function(a){var u,t
for(u=this.b,t=u.gW(u),t=new H.a5(J.y(t.a),t.b,[H.a(t,0),H.a(t,1)]);t.l();)t.a.az()
u.b1(0)
this.a.bI(0)},
sdL:function(a){this.a=H.x(a,"$ijb",this.$ti,"$ajb")}}
W.hr.prototype={
$0:function(){var u=this.a,t=u.b.G(0,H.x(this.b,"$ia_",[H.a(u,0)],"$aa_"))
if(t!=null)t.az()
return},
$S:0}
W.bl.prototype={
dw:function(a){var u
if($.d2.a===0){for(u=0;u<262;++u)$.d2.i(0,C.K[u],W.lK())
for(u=0;u<12;++u)$.d2.i(0,C.j[u],W.lL())}},
ai:function(a){return $.ka().D(0,W.bZ(a))},
a4:function(a,b,c){var u=$.d2.h(0,H.b(W.bZ(a))+"::"+b)
if(u==null)u=$.d2.h(0,"*::"+b)
if(u==null)return!1
return H.it(u.$4(a,b,c,this))},
$iaa:1}
W.af.prototype={
gu:function(a){return new W.cv(a,this.gj(a),[H.an(this,a,"af",0)])},
p:function(a,b){H.n(b,H.an(this,a,"af",0))
throw H.h(P.D("Cannot add to immutable List."))},
a1:function(a,b){var u=H.an(this,a,"af",0)
H.f(b,{func:1,ret:P.H,args:[u,u]})
throw H.h(P.D("Cannot sort immutable List."))},
a5:function(a,b){throw H.h(P.D("Cannot remove from immutable List."))}}
W.cF.prototype={
p:function(a,b){C.a.p(this.a,H.d(b,"$iaa"))},
ai:function(a){return C.a.cK(this.a,new W.eK(a))},
a4:function(a,b,c){return C.a.cK(this.a,new W.eJ(a,b,c))},
$iaa:1}
W.eK.prototype={
$1:function(a){return H.d(a,"$iaa").ai(this.a)},
$S:12}
W.eJ.prototype={
$1:function(a){return H.d(a,"$iaa").a4(this.a,this.b,this.c)},
$S:12}
W.dc.prototype={
dz:function(a,b,c,d){var u,t,s
this.a.K(0,c)
u=b.ac(0,new W.ho())
t=b.ac(0,new W.hp())
this.b.K(0,u)
s=this.c
s.K(0,C.M)
s.K(0,t)},
ai:function(a){return this.a.D(0,W.bZ(a))},
a4:function(a,b,c){var u=this,t=W.bZ(a),s=u.c
if(s.D(0,H.b(t)+"::"+b))return u.d.en(c)
else if(s.D(0,"*::"+b))return u.d.en(c)
else{s=u.b
if(s.D(0,H.b(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.b(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1},
$iaa:1}
W.ho.prototype={
$1:function(a){return!C.a.D(C.j,H.v(a))},
$S:17}
W.hp.prototype={
$1:function(a){return C.a.D(C.j,H.v(a))},
$S:17}
W.hx.prototype={
a4:function(a,b,c){if(this.du(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.hy.prototype={
$1:function(a){return"TEMPLATE::"+H.b(H.v(a))},
$S:16}
W.hs.prototype={
ai:function(a){var u=J.k(a)
if(!!u.$ic9)return!1
u=!!u.$il
if(u&&W.bZ(a)==="foreignObject")return!1
if(u)return!0
return!1},
a4:function(a,b,c){if(b==="is"||C.e.df(b,"on"))return!1
return this.ai(a)},
$iaa:1}
W.cv.prototype={
l:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.scl(J.Z(u.a,t))
u.c=t
return!0}u.scl(null)
u.c=s
return!1},
gq:function(){return this.d},
scl:function(a){this.d=H.n(a,H.a(this,0))},
$ias:1}
W.fK.prototype={$ib8:1,$ijj:1}
W.aa.prototype={}
W.hm.prototype={$imx:1}
W.dg.prototype={
c_:function(a){new W.hC(this).$2(a,null)},
ax:function(a,b){if(b==null)J.bQ(a)
else b.removeChild(a)},
ed:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kh(a)
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
p=H.N(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.P(r)}t="element unprintable"
try{t=J.I(a)}catch(r){H.P(r)}try{s=W.bZ(a)
this.ec(H.d(a,"$it"),b,p,t,s,H.d(o,"$iq"),H.v(n))}catch(r){if(H.P(r) instanceof P.ay)throw r
else{this.ax(a,b)
window
q="Removing corrupted element "+H.b(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ec:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
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
return}u=f.gA()
t=H.C(u.slice(0),[H.a(u,0)])
for(s=f.gA().length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
q=o.a
p=J.kq(r)
H.v(r)
if(!q.a4(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.b(e)+" "+r+'="'+H.b(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.k(a).$icc)o.c_(a.content)},
$imk:1}
W.hC.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ed(a,b)
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
W.cY.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.dh.prototype={}
W.di.prototype={}
P.dG.prototype={
cJ:function(a){var u=$.k_().b
if(u.test(a))return a
throw H.h(P.i0(a,"value","Not a valid class token"))},
n:function(a){return this.U().bN(0," ")},
gu:function(a){var u=this.U()
return P.ce(u,u.r,H.a(u,0))},
E:function(a,b,c){var u,t
H.f(b,{func:1,ret:c,args:[P.j]})
u=this.U()
t=H.a(u,0)
return new H.bx(u,H.f(b,{func:1,ret:c,args:[t]}),[t,c])},
O:function(a,b){return this.E(a,b,null)},
gj:function(a){return this.U().a},
p:function(a,b){H.v(b)
this.cJ(b)
return H.it(this.eM(new P.dH(b)))},
G:function(a,b){var u,t
this.cJ(b)
u=this.U()
t=u.G(0,b)
this.bY(u)
return t},
J:function(a,b){return this.U().J(0,!0)},
a_:function(a){return this.J(a,!0)},
F:function(a,b){return this.U().F(0,b)},
eM:function(a){var u,t
H.f(a,{func:1,args:[[P.ah,P.j]]})
u=this.U()
t=a.$1(u)
this.bY(u)
return t},
$aF:function(){return[P.j]},
$abE:function(){return[P.j]},
$ap:function(){return[P.j]},
$aah:function(){return[P.j]}}
P.dH.prototype={
$1:function(a){return H.x(a,"$iah",[P.j],"$aah").p(0,this.a)},
$S:22}
P.e7.prototype={
ga9:function(){var u=this.b,t=H.J(u,"M",0),s=W.t
return new H.bB(new H.aK(u,H.f(new P.e8(),{func:1,ret:P.E,args:[t]}),[t]),H.f(new P.e9(),{func:1,ret:s,args:[t]}),[t,s])},
i:function(a,b,c){var u
H.z(b)
H.d(c,"$it")
u=this.ga9()
J.ko(u.b.$1(J.co(u.a,b)),c)},
sj:function(a,b){var u=J.ae(this.ga9().a)
if(b>=u)return
else if(b<0)throw H.h(P.br("Invalid list length"))
this.eP(0,b,u)},
p:function(a,b){this.b.a.appendChild(H.d(b,"$it"))},
a1:function(a,b){H.f(b,{func:1,ret:P.H,args:[W.t,W.t]})
throw H.h(P.D("Cannot sort filtered list"))},
eP:function(a,b,c){var u=this.ga9()
u=H.l5(u,b,H.J(u,"p",0))
C.a.w(P.aW(H.l8(u,c-b,H.J(u,"p",0)),!0,null),new P.ea())},
b1:function(a){J.iL(this.b.a)},
a5:function(a,b){var u=this.ga9()
u=u.b.$1(J.co(u.a,b))
J.bQ(u)
return u},
gj:function(a){return J.ae(this.ga9().a)},
h:function(a,b){var u
H.z(b)
u=this.ga9()
return u.b.$1(J.co(u.a,b))},
gu:function(a){var u=P.aW(this.ga9(),!1,W.t)
return new J.b2(u,u.length,[H.a(u,0)])},
$aF:function(){return[W.t]},
$aM:function(){return[W.t]},
$ap:function(){return[W.t]},
$ao:function(){return[W.t]}}
P.e8.prototype={
$1:function(a){return!!J.k(H.d(a,"$ir")).$it},
$S:11}
P.e9.prototype={
$1:function(a){return H.jN(H.d(a,"$ir"),"$it")},
$S:23}
P.ea.prototype={
$1:function(a){return J.bQ(a)},
$S:3}
P.c1.prototype={$ic1:1}
P.aj.prototype={
h:function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.h(P.br("property is not a String or num"))
return P.hF(this.a[b])},
i:function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.h(P.br("property is not a String or num"))
this.a[b]=P.dj(c)},
gv:function(a){return 0},
P:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a},
n:function(a){var u,t
try{u=String(this.a)
return u}catch(t){H.P(t)
u=this.dq(0)
return u}},
b0:function(a,b){var u,t=this.a
if(b==null)u=null
else{u=H.a(b,0)
u=P.aW(new H.aG(b,H.f(P.jQ(),{func:1,ret:null,args:[u]}),[u,null]),!0,null)}return P.hF(t[a].apply(t,u))}}
P.en.prototype={
$1:function(a){var u,t,s,r,q=this.a
if(q.t(a))return q.h(0,a)
u=J.k(a)
if(!!u.$iq){t={}
q.i(0,a,t)
for(q=J.y(a.gA());q.l();){s=q.gq()
t[s]=this.$1(a.h(0,s))}return t}else if(!!u.$ip){r=[]
q.i(0,a,r)
C.a.K(r,u.E(a,this,null))
return r}else return P.dj(a)},
$S:3}
P.aU.prototype={}
P.c0.prototype={
bp:function(a){var u=this,t=a<0||a>=u.gj(u)
if(t)throw H.h(P.cK(a,0,u.gj(u),null,null))},
h:function(a,b){if(typeof b==="number"&&b===C.f.bf(b))this.bp(H.z(b))
return H.n(this.dm(0,b),H.a(this,0))},
i:function(a,b,c){H.n(c,H.a(this,0))
if(typeof b==="number"&&b===C.f.bf(b))this.bp(H.z(b))
this.c1(0,b,c)},
gj:function(a){var u=this.a.length
if(typeof u==="number"&&u>>>0===u)return u
throw H.h(P.ca("Bad JsArray length"))},
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
P.hG.prototype={
$1:function(a){var u
H.d(a,"$iar")
u=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.lo,a,!1)
P.il(u,$.hY(),a)
return u},
$S:3}
P.hH.prototype={
$1:function(a){return new this.a(a)},
$S:3}
P.hJ.prototype={
$1:function(a){return new P.aU(a)},
$S:24}
P.hK.prototype={
$1:function(a){return new P.c0(a,[null])},
$S:25}
P.hL.prototype={
$1:function(a){return new P.aj(a)},
$S:53}
P.d5.prototype={}
P.aH.prototype={
n:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
P:function(a,b){if(b==null)return!1
return!!J.k(b).$iaH&&this.a==b.a&&this.b==b.b},
gv:function(a){var u,t=J.aQ(this.a),s=J.aQ(this.b)
s=P.jo(P.jo(0,t),s)
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
return new P.aH(r,H.n(t*b,u),s.$ti)}}
P.c9.prototype={$ic9:1}
P.dq.prototype={
U:function(){var u,t,s,r,q=this.a.getAttribute("class"),p=P.c2(P.j)
if(q==null)return p
for(u=q.split(" "),t=u.length,s=0;s<t;++s){r=J.i_(u[s])
if(r.length!==0)p.p(0,r)}return p},
bY:function(a){this.a.setAttribute("class",a.bN(0," "))}}
P.l.prototype={
gcO:function(a){return new P.dq(a)},
gcN:function(a){return new P.e7(a,new W.a6(a))},
M:function(a,b,c,d){var u,t,s,r,q,p=H.C([],[W.aa])
C.a.p(p,W.jn(null))
C.a.p(p,W.jq())
C.a.p(p,new W.hs())
c=new W.dg(new W.cF(p))
u='<svg version="1.1">'+H.b(b)+"</svg>"
p=document
t=p.body
s=(t&&C.m).ex(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a6(s)
q=p.gad(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
cU:function(a,b,c,d,e){throw H.h(P.D("Cannot invoke insertAdjacentHtml on SVG."))},
$il:1}
U.ao.prototype={
gaB:function(){return 0},
gaj:function(){return 0},
gay:function(){var u=this.z
return u!=null?u.gay():this},
gbc:function(){var u=this.z
if(!(u!=null)){u=this.cx
u=u!=null?u.x1:null}return u},
gcV:function(){return this.Q==null},
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
b2:function(a){var u=this,t=U.iQ(u.id,u.a,u.c)
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
for(u=q.cy,u=u.gW(u),u=new H.a5(J.y(u.a),u.b,[H.a(u,0),H.a(u,1)]),t=a.cy;u.l();){s=u.a.b3(0,a)
t.i(0,s.a,s)}for(u=q.db,u=u.gW(u),u=new H.a5(J.y(u.a),u.b,[H.a(u,0),H.a(u,1)]),t=a.db;u.l();){r=u.a.b3(0,a)
t.i(0,r.a,r)}},
B:function(){var u,t,s=this,r="properties",q=P.ic()
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
for(u=u.gW(u),u=new H.a5(J.y(u.a),u.b,[H.a(u,0),H.a(u,1)]);u.l();){t=u.a
J.aP(q.h(0,"params"),t.B())}}u=s.db
if(u.a!==0){q.i(0,r,[])
for(u=u.gW(u),u=new H.a5(J.y(u.a),u.b,[H.a(u,0),H.a(u,1)]);u.l();){t=u.a
J.aP(q.h(0,r),t.B())}}return q},
X:function(a){var u
J.aP(a,this.B())
u=this.z
if(u!=null)u.X(a)},
aW:function(a,b){var u,t,s,r,q,p=this,o=$.bq(),n=p.dS(a),m=$.a3()
if(typeof m!=="number")return m.m()
if(typeof n!=="number")return n.k()
p.x=Math.max(H.jH(o),n+m*2)
if(!p.rx&&p.cy.a!==0)for(o=p.cy,o=o.gW(o),o=new H.a5(J.y(o.a),o.b,[H.a(o,0),H.a(o,1)]),u=0;o.l();){n=o.a
n.aV(a)
u+=n.z+m}else u=0
if(!p.rx&&p.db.a!==0)for(o=p.db,o=o.gW(o),o=new H.a5(J.y(o.a),o.b,[H.a(o,0),H.a(o,1)]),t=0;o.l();){n=o.a
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
b=Math.max(H.jH(b),n)
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
dS:function(a){var u
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
q=$.w()
if(typeof q!=="number")return q.an()
if(typeof r!=="number")return r.k()
C.q.cT(a,u,t+s,r+q/2)
a.restore()},
bu:function(a){var u
a.save()
this.aS(a)
a.strokeStyle=this.fx
u=$.ad()
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
dM:function(a){var u,t,s=this.x,r=this.cy,q=H.a(r,0),p=P.aW(new H.aD(r,[q]),!0,q)
for(u=p.length-1;u>=0;--u){q=$.a3()
if(u>=p.length)return H.e(p,u)
t=r.h(0,p[u]).z
if(typeof q!=="number")return q.k()
if(typeof s!=="number")return s.R()
s-=q+t
if(u>=p.length)return H.e(p,u)
r.h(0,p[u]).bJ(a,s)}},
dN:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this.db,i=H.a(j,0),h=P.aW(new H.aD(j,[i]),!0,i)
for(u=0;u<h.length;u=t){i=$.w()
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
t=$.a3()
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
cv:function(a,b,c){var u,t,s=this,r=$.a3(),q=s.f,p=s.x
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
bC:function(a,b){var u,t,s,r=this,q=$.a3(),p=r.f
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
bB:function(a,b){var u,t,s,r,q,p,o=this,n=$.a3(),m=o.f
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
for(u=r.id,s=r;s!=null;){u.e6(s)
u.aq(s)
s=s.gbc()}return r},
bX:function(a){var u,t=this
t.ry=t.rx=t.k2=!1
u=t.id
if(!u.ej(t))u.cE(t)
u.aD(new U.dr(t.a,t.b))},
bV:function(a){this.k3=a.c
this.k4=a.e},
bW:function(a){},
$ibF:1}
U.dF.prototype={
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
gcV:function(){return!1},
b2:function(a){var u,t=this,s=t.id,r=t.a,q=t.c,p=P.H,o=U.at,n=$.ad()
if(typeof n!=="number")return H.c(n)
u=new U.ap(r,q,new H.L([p,o]),new H.L([p,o]),"400 "+H.b(14*n)+"px 'Poppins', sans-serif",s)
u.af(s,r,q)
u.k1=!1
t.aL(u)
return u},
X:function(a){var u,t="children",s=this.B()
s.i(0,t,[])
J.aP(a,s)
u=this.z
if(u!=null)u.X(H.a8(s.h(0,t)))},
bu:function(a){},
bs:function(a){},
al:function(a){return this.N.al(a)}}
U.cu.prototype={
gaB:function(){return 1},
gaj:function(){return 0},
Y:function(a,b){var u
this.ch=a
this.cx=b
u=this.z
if(u!=null)u.Y(a,b)},
X:function(a){J.aP(a,this.B())},
bt:function(a){}}
U.bt.prototype={
gaB:function(){return 0},
gaj:function(){return 1},
b2:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=U.iP(k.id,k.a,k.c)
k.aL(j)
for(u=k.N,t=u.length,s=[P.H,U.at],r=0;r<u.length;u.length===t||(0,H.W)(u),++r){q=u[r]
if(!q.$icu){p=q.id
o=q.a
n=q.c
m=$.ad()
if(typeof m!=="number")return H.c(m)
l=new U.ap(o,n,new H.L(s),new H.L(s),"400 "+H.b(14*m)+"px 'Poppins', sans-serif",p)
l.af(p,o,n)
l.k1=!1
q.aL(l)
j.c6(l)}}j.S.e=k.S.e
return j},
gay:function(){var u=this.S,t=u.z
return t!=null?t.gay():u},
X:function(a){var u,t,s,r=this,q="children",p=r.B()
p.i(0,q,[])
p.i(0,"clauses",[])
J.aP(a,p)
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
l.dh()
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
C.a.G(u,q.S)
C.a.p(u,a)
C.a.p(u,q.S)
for(t=0;s=u.length,t<s-1;t=r){r=t+1
u[t].x1=u[r]}if(0>=s)return H.e(u,0)
q.x1=u[0]},
aS:function(a){var u,t,s,r,q,p,o,n,m,l=this
if(l.rx){l.dg(a)
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
U.aB.prototype={
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
B:function(){var u,t,s,r=this,q="children",p=P.id(["name",r.b,"type",r.c]),o=r.e
if(o.length!==0){p.i(0,q,[])
for(u=o.length,t=0;t<o.length;o.length===u||(0,H.W)(o),++t){s=o[t]
J.aP(p.h(0,q),s.B())}}o=r.d
if(o!=null)p.i(0,"format",o)
return p},
aA:function(a){var u,t,s,r,q,p=this,o="children",n=a.h(0,"name")
p.b=n==null?"":J.I(n)
n=a.h(0,"type")
p.c=n==null?"num":J.I(n)
n=p.e
C.a.sj(n,0)
if(!!J.k(a.h(0,o)).$io)for(u=J.y(H.S(a.h(0,o),"$ip")),t=p.a,s=[U.aB];u.l();){r=u.gq()
q=new U.aB(t,H.v(J.Z(r,"type")),H.C([],s))
C.a.p(n,q)
q.aA(H.d(r,"$iq"))}},
ev:function(a){var u,t,s,r
if(a==null)return this.e.length!==0
u=this.e
t=J.K(a)
if(u.length!==t.gj(a))return!0
for(s=0;s<t.gj(a);++s){r=t.h(a,s)
if(s>=u.length)return H.e(u,s)
if(!J.Y(r,u[s].c))return!0}return!1},
de:function(a){var u,t,s,r,q,p=this,o=p.e,n=o.length===0
if(p.ev(a)){C.a.sj(o,0)
if(a!=null)for(u=J.K(a),t=p.a,s=[U.aB],r=0;r<u.gj(a);++r)if(r===0&&n&&J.Y(u.h(a,r),p.c)){q=new U.aB(t,H.v(u.h(a,r)),H.C([],s))
q.b=p.b
C.a.p(o,q)}else C.a.p(o,new U.aB(t,H.v(u.h(a,r)),H.C([],s)))}},
cL:function(a){var u,t=this,s=document.createElement("div")
C.b.a6(s,H.b(t.b))
s.classList.add("nt-expression-text")
s.classList.add("editable")
u=H.b(t.c)
s.classList.add(u)
u=W.A
W.Q(s,"click",H.f(new U.e0(t,s),{func:1,ret:-1,args:[u]}),!1,u)
t.cS(s,a)
a.appendChild(s)},
cS:function(a,b){var u=W.A,t={func:1,ret:-1,args:[u]}
W.Q(a,"mouseenter",H.f(new U.e1(b),t),!1,u)
W.Q(a,"mouseleave",H.f(new U.e2(b),t),!1,u)},
b_:function(a,b){var u=document.createElement("div")
C.b.a6(u,b?"(":")")
u.classList.add("nt-expression-text")
u.classList.add("parenthesis")
this.cS(u,a)
a.appendChild(u)},
eq:function(a){var u,t,s=this
s.b=J.I(U.aO(s.b,0))
u=W.kG("number")
u.className="nt-number-input"
u.value=s.b
u.step="1"
t=W.i
W.Q(u,"change",H.f(new U.e_(s,u),{func:1,ret:-1,args:[t]}),!1,t)
a.appendChild(u)},
geI:function(){var u=this.b
if(u!=null)return P.jS(u,new U.e3())!=null
return!1},
be:function(a){var u,t,s=this,r=document.createElement("div")
r.className="nt-expression"
if((s.geI()||s.b==null)&&s.c==="num")s.eq(r)
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
W.Q(r,"click",H.f(new U.e6(s,r),{func:1,ret:-1,args:[u]}),!1,u)}a.appendChild(r)},
cZ:function(a){var u,t,s=this,r=W.t,q=document
H.al(r,r,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
r=new W.ab(q.querySelectorAll(".nt-pulldown-menu"),[r])
r.w(r,new U.e4())
u=q.createElement("div")
u.classList.add("nt-pulldown-menu")
q=s.a.a
s.c8(u,q.dx)
if(J.kk(q.db))C.b.aa(u,"<hr>")
s.c8(u,q.db)
C.b.aa(u,"<hr>")
t=W.iO("#")
C.l.a6(t,"Clear")
t.className="clear"
u.appendChild(t)
r=W.A
W.Q(t,"click",H.f(new U.e5(s,u),{func:1,ret:-1,args:[r]}),!1,r)
a.appendChild(u)},
c8:function(a,b){var u,t,s,r,q,p
for(u=J.y(b),t=W.A,s={func:1,ret:-1,args:[t]};u.l();){r=u.gq()
q=J.K(r)
if(J.Y(q.h(r,"type"),this.c)){p=document.createElement("a")
p.href="#"
C.l.a6(p,H.b(q.h(r,"name")))
a.appendChild(p)
W.Q(p,"click",H.f(new U.dZ(this,a,r),s),!1,t)}}}}
U.e0.prototype={
$1:function(a){H.d(a,"$iA")
this.a.cZ(this.b)
a.stopPropagation()},
$S:1}
U.e1.prototype={
$1:function(a){H.d(a,"$iA")
this.a.classList.add("highlight")},
$S:1}
U.e2.prototype={
$1:function(a){H.d(a,"$iA")
this.a.classList.remove("highlight")},
$S:1}
U.e_.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.value
u.b=s
if(s==="")t.value=u.b="0"},
$S:4}
U.e3.prototype={
$1:function(a){return},
$S:29}
U.e6.prototype={
$1:function(a){H.d(a,"$iA")
this.a.cZ(this.b)
a.stopPropagation()},
$S:1}
U.e4.prototype={
$1:function(a){return J.bQ(H.d(a,"$it"))},
$S:14}
U.e5.prototype={
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
U.dZ.prototype={
$1:function(a){var u,t,s
H.d(a,"$iA")
C.b.V(this.b)
u=this.a
t=this.c
s=J.K(t)
u.de(H.a8(s.h(t,"arguments")))
u.b=H.v(s.h(t,"name"))
u.c=H.v(s.h(t,"type"))
u.d=H.v(s.h(t,"format"))
u.a.bQ()
a.stopPropagation()
a.preventDefault()},
$S:1}
U.dP.prototype={
n:function(a){var u,t=new P.av("")
this.c.b6(t)
u=t.a
return u.charCodeAt(0)==0?u:u},
aA:function(a){var u=J.k(a)
if(!!u.$iq)this.c.aA(a)
else if(a!=null)this.c.b=u.n(a)},
bQ:function(){var u=this,t=u.b
if(t!=null&&u.c!=null){J.ki(t).b1(0)
u.c.be(H.d(u.b,"$ibw"))}}}
U.cp.prototype={
au:function(a,b,c){var u,t,s
for(u="",t=0;t<b;++t)u+="  "
a.a+=u
s="\n"+u
a.a+=H.hV(c,"\n",s)+"\n"},
aM:function(a,b,c,d,e){var u,t=J.K(d),s=H.v(t.h(d,"format")),r=t.h(d,"params"),q=t.h(d,"properties"),p=J.k(r),o=!!p.$io?p.gj(r):0,n=J.k(q),m=!!n.$io?n.gj(q):0
if(typeof s!=="string"){s=H.b(t.h(d,"action"))
for(u=0;u<o;++u)s+=" {"+u+"}"
for(u=0;u<m;++u)s+=" {P"+u+"}"}for(u=0;u<o;++u)s=this.bE(a,s,"{"+u+"}",c,d,p.h(r,u))
for(u=0;u<m;++u)s=this.bE(a,s,"{P"+u+"}",c,d,n.h(q,u))
this.au(b,e,s)},
bE:function(a,b,c,d,e,f){var u=this.dQ(f)
if(typeof u!=="string")H.X(H.ak(u))
return H.hV(b,c,u)},
dQ:function(a){var u="value",t=J.K(a)
if(!!J.k(t.h(a,u)).$iq)return U.bv(t.h(a,u))
else{t=t.h(a,u)
return t==null?"":J.I(t)}}}
U.eR.prototype={
cs:function(a,b,c){var u,t=new P.av("")
for(u=J.y(H.S(b.h(0,"chains"),"$ip"));u.l();){this.a8(c,t,a,u.gq(),0)
t.a+="\n"}u=t.a
return u.charCodeAt(0)==0?u:u},
a8:function(a,b,c,d,e){var u,t,s,r,q,p,o="children"
for(u=J.y(H.S(d,"$ip")),t=e+1;u.l();){s=u.gq()
r=J.K(s)
if(!!J.k(r.h(s,o)).$io)this.a8(a,b,c,r.h(s,o),t)
if(!!J.k(r.h(s,"clauses")).$io)for(r=J.y(H.S(r.h(s,"clauses"),"$ip"));r.l();){q=r.gq()
this.aM(a,b,c,q,e)
p=J.K(q)
if(!!J.k(p.h(q,o)).$io)this.a8(a,b,c,p.h(q,o),t)}}}}
U.eG.prototype={
cs:function(a,b,c){var u,t,s,r,q="chains",p=new P.av("")
if(!J.k(b.h(0,q)).$io||J.ae(b.h(0,q))===0)return"".charCodeAt(0)==0?"":""
u=H.a8(b.h(0,q))
t=J.aN(u)
t.a1(u,U.m1())
for(t=t.gu(u);t.l();){s=t.gq()
r=J.K(s)
if(J.iJ(r.gj(s),0)&&J.Y(J.Z(r.h(s,0),"type"),"nlogo:procedure")){this.aM(c,p,a,r.a5(s,0),0)
this.a8(c,p,a,s,1)
r=p.a+="end\n"
p.a=r+"\n"}}t=p.a
return t.charCodeAt(0)==0?t:t},
a8:function(a,b,c,d,e){var u,t,s,r,q,p,o=this,n="children"
for(u=J.y(H.S(d,"$ip")),t=e+1;u.l();){s=u.gq()
o.aM(a,b,c,s,e)
r=J.K(s)
if(!!J.k(r.h(s,n)).$io){o.au(b,e,"[")
o.a8(a,b,c,r.h(s,n),t)
o.au(b,e,"]")}if(!!J.k(r.h(s,"clauses")).$io)for(r=J.y(H.S(r.h(s,"clauses"),"$ip"));r.l();){q=r.gq()
o.aM(a,b,c,q,e)
p=J.K(q)
if(!!J.k(p.h(q,n)).$io){o.au(b,e,"[")
o.a8(a,b,c,p.h(q,n),t)
o.au(b,e,"]")}}}},
bE:function(a,b,c,d,e,f){var u="expressionValue",t=J.K(f),s=t.h(f,u)==null?t.h(f,"value"):t.h(f,u),r=J.K(e),q=H.v(a.$5(d,r.h(e,"id"),r.h(e,"instanceId"),t.h(f,"id"),s))
if(typeof q!=="string")H.X(H.ak(q))
return H.hV(b,c,q)}}
U.ds.prototype={
eJ:function(a){var u,t
if(!a.rx)if(!a.ry){u=a.f
t=a.x
if(typeof t!=="number")return t.m()
if(typeof u!=="number")return u.k()
t=u+t*0.75>=this.a.ch-this.d
u=t}else u=!1
else u=!1
return u},
dd:function(a){var u=this.b,t=H.a(u,0),s=new H.aK(u,H.f(new U.dt(a),{func:1,ret:P.E,args:[t]}),[t])
if(s.gj(s)===1)return s.geB(s).a
return},
aV:function(a){var u,t,s,r,q,p,o=$.bq()
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
U.dt.prototype={
$1:function(a){return H.d(a,"$iau").a.a==this.a},
$S:31}
U.au.prototype={
eH:function(){var u=this.e,t=this.d.aF(this.a.a)
if(typeof u!=="number")return u.R()
return u<0||u-t>0},
b5:function(a){return this.a.b5(a)},
al:function(a){var u,t,s,r,q,p=this
if(p.eH()){u=p.a
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
u.aq(t)
if(!!t.$ibt)for(s=t.N,r=s.length,q=0;q<s.length;s.length===r||(0,H.W)(s),++q)u.aq(s[q])
return t.al(a)}return p},
bX:function(a){},
bV:function(a){},
bW:function(a){},
$ibF:1}
U.at.prototype={
gH:function(a){var u=this.c
return u==null?"":J.I(u)},
sH:function(a,b){this.c=b==null?"":J.I(b)},
gam:function(){return H.b(J.I(this.c))+H.b(this.r)},
ao:function(a,b){var u,t,s,r=this
if(H.N(b.t("id"))){u=H.z(b.h(0,"id"))
r.a=u
t=r.b
s=t.dx
if(typeof u!=="number")return u.f_()
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
b3:function(a,b){return U.ie(b,this.B())},
B:function(){var u=this
return P.id(["id",u.a,"type",u.e,"name",u.f,"unit",u.r,"value",u.gH(u),"default",u.d])},
aV:function(a){var u,t=this,s=$.a3()
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
this.b.id.L()},
al:function(a){this.ch=!0
this.b.id.L()
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
H.al(q,q,l,k,j)
p=[q]
o=[q]
n=[W.A]
new W.aL(H.x(new W.ab(i.querySelectorAll(".nt-param-confirm"),p),"$ia9",o,"$aa9"),!1,"click",n).ab(new U.eN(m,r,h))
H.al(q,q,l,k,j)
new W.aL(H.x(new W.ab(i.querySelectorAll(".nt-param-cancel"),p),"$ia9",o,"$aa9"),!1,"click",n).ab(new U.eO(h))
h.classList.add("show")
if(r!=null){r.focus()
if(s!=null){i=W.i
q={func:1,ret:-1,args:[i]}
W.Q(r,"change",H.f(new U.eP(s,r),q),!1,i)
W.Q(r,"input",H.f(new U.eQ(s,r),q),!1,i)}}},
ca:function(){return'      <input class="nt-param-input" id="nt-param-'+H.b(this.a)+'" type="text" value="'+this.gam()+'">\n      <span class="nt-param-unit">'+H.b(this.r)+"</span>\n    "},
$ibF:1}
U.eN.prototype={
$1:function(a){var u,t,s,r=this
H.d(a,"$iA")
u=r.b
if(u!=null)r.a.sH(0,u.value)
C.b.V(r.c)
u=r.a
t=u.b
s=t.id
s.L()
s.aD(new U.bs(t.a,t.b,u.a,u.gH(u)))},
$S:1}
U.eO.prototype={
$1:function(a){H.d(a,"$iA")
return C.b.V(this.a)},
$S:5}
U.eP.prototype={
$1:function(a){J.hZ(this.a,this.b.value)},
$S:4}
U.eQ.prototype={
$1:function(a){J.hZ(this.a,this.b.value)},
$S:4}
U.cH.prototype={
c2:function(a,b){this.cx=U.iB(b.h(0,"random"),!1)
this.cy=U.aO(b.h(0,"step"),this.cy)},
B:function(){var u=this.bj()
u.i(0,"random",this.cx)
u.i(0,"step",this.cy)
return u},
gH:function(a){return U.aO(this.c,0)},
sH:function(a,b){this.c=U.aO(b,0)},
gam:function(){var u=J.kr(this.gH(this),1)
if(C.e.eA(u,".0"))u=C.e.ae(u,0,u.length-2)
return u+H.b(this.r)},
ca:function(){var u=this
return'      <div class="nt-param-name">'+H.b(u.f)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+H.b(u.a)+'" type="number" step="'+H.b(u.cy)+'" value="'+H.b(u.gH(u))+'">\n        <span class="nt-param-unit">'+H.b(u.r)+"</span>\n      </div>\n    "}}
U.ef.prototype={
gH:function(a){return U.iC(this.c,0)},
sH:function(a,b){this.c=U.iC(b,0)}}
U.eV.prototype={
B:function(){var u=this.dn()
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
W.Q(u,"click",H.f(new U.eW(),s),!1,t)
l.appendChild(u)
W.Q(l,"click",H.f(new U.eX(l),s),!1,t)
q=H.d(m.querySelector("#"+H.b(n.b.id.r)).parentElement,"$im")
if(q!=null)q.appendChild(l)
p=H.d(m.querySelector("#nt-param-label-"+H.b(n.a)),"$im")
o=H.d(m.querySelector("#nt-param-"+H.b(n.a)),"$iba")
if(o!=null&&p!=null){m=W.i
t={func:1,ret:-1,args:[m]}
W.Q(o,"change",H.f(new U.eY(n,o,l),t),!1,m)
W.Q(o,"input",H.f(new U.eZ(p,o),t),!1,m)}l.classList.add("show")}}
U.eW.prototype={
$1:function(a){H.d(a,"$iA").stopPropagation()},
$S:1}
U.eX.prototype={
$1:function(a){H.d(a,"$iA")
C.b.V(this.a)},
$S:1}
U.eY.prototype={
$1:function(a){var u,t,s=this.a
s.c=U.aO(this.b.value,0)
C.b.V(this.c)
u=s.b
t=u.id
t.L()
t.aD(new U.bs(u.a,u.b,s.a,U.aO(s.c,0)))
a.stopPropagation()},
$S:4}
U.eZ.prototype={
$1:function(a){J.hZ(this.a,this.b.value)},
$S:4}
U.f1.prototype={
gam:function(){return H.b(J.I(this.cy))+H.b(this.r)+" \u25be"},
b3:function(a,b){return U.j9(b,this.B())},
B:function(){var u=this.bj()
u.i(0,"values",this.cx)
return u},
cb:function(a){var u="display",t=H.N(a.t(u))&&!J.Y(J.Z(a,u),""),s=J.K(a)
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
for(t=J.y(i.cx),s=W.A,q={func:1,ret:-1,args:[s]};t.l();){p=t.gq()
o=g.createElement("div")
o.className="nt-param-row"
n=H.N(p.t(h))&&!J.Y(J.Z(p,h),"")
m=J.K(p)
l=n?m.h(p,h):m.h(p,"actual")
k=g.createElement("div")
k.className="nt-select-option"
C.b.a6(k,H.v(l))
n=J.Z(p,"actual")
m=i.c
if(J.Y(n,m==null?"":J.I(m)))k.classList.add("selected")
W.Q(k,"click",H.f(new U.f2(i,p,f),q),!1,s)
o.appendChild(k)
r.appendChild(o)}u.appendChild(r)
f.appendChild(u)
W.Q(f,"click",H.f(new U.f3(f),q),!1,s)
j=H.d(g.querySelector("#"+H.b(i.b.id.r)).parentElement,"$im")
if(j!=null)j.appendChild(f)
f.classList.add("show")}}
U.f2.prototype={
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
s.L()
r=t.a
t=t.b
q=u.a
u=u.c
s.aD(new U.bs(r,t,q,u==null?"":J.I(u)))
a.stopPropagation()},
$S:1}
U.f3.prototype={
$1:function(a){H.d(a,"$iA")
C.b.V(this.a)},
$S:1}
U.dQ.prototype={
gam:function(){var u=this.cx
return u!=null?u.n(0):""},
gH:function(a){return this.c},
sH:function(a,b){var u
this.c=b
u=this.cx
if(u!=null)u.aA(b)},
B:function(){var u=this.bj()
if(!!J.k(u.h(0,"value")).$iq)u.i(0,"expressionValue",U.bv(u.h(0,"value")))
return u},
b3:function(a,b){return U.i5(b,this.B())},
aZ:function(a,b){var u,t,s,r,q,p,o,n=this,m=".nt-param-confirm",l="The type argument '",k="' is not a subtype of the type variable bound '",j="' of type variable 'T' in 'querySelectorAll'.",i="click",h=document,g=h.createElement("div")
g.className="backdrop"
C.b.aa(g,'      <div class="nt-param-dialog" style="top: '+b+';">\n        <div class="nt-param-table">\n          <div class="nt-param-row">\n            <div class="nt-param-label">'+H.b(n.f)+':</div>\n          </div>\n          <div class="nt-param-row">\n            <div id="nt-expression-'+H.b(n.a)+'" class="nt-expression-root"></div>\n          </div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>')
u=H.d(h.querySelector("#"+H.b(n.b.id.r)).parentElement,"$im")
if(u==null)return
u.appendChild(g)
t=W.t
H.al(t,t,l,k,j)
s=[t]
r=[t]
q=[W.A]
new W.aL(H.x(new W.ab(h.querySelectorAll(m),s),"$ia9",r,"$aa9"),!1,i,q).ab(new U.dU(n,g))
H.al(t,t,l,k,j)
new W.aL(H.x(new W.ab(h.querySelectorAll(m),s),"$ia9",r,"$aa9"),!1,"mousedown",q).ab(new U.dV())
H.al(t,t,l,k,j)
new W.aL(H.x(new W.ab(h.querySelectorAll(m),s),"$ia9",r,"$aa9"),!1,"mouseup",q).ab(new U.dW())
H.al(t,t,l,k,j)
new W.aL(H.x(new W.ab(h.querySelectorAll(".nt-param-cancel"),s),"$ia9",r,"$aa9"),!1,i,q).ab(new U.dX(g))
g.classList.add("show")
p=n.cx
o="#nt-expression-"+H.b(n.a)
p.toString
p.b=h.querySelector(o)
p.bQ()
H.al(t,t,l,k,j)
new W.aL(H.x(new W.ab(h.querySelectorAll(".nt-param-dialog"),s),"$ia9",r,"$aa9"),!1,i,q).ab(new U.dY())}}
U.dU.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iA")
u=W.t
t=document
H.al(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
if(t.querySelectorAll(".nt-expression.empty").length>0)return!1
u=this.a
u.c=u.cx.c.B()
C.b.V(this.b)
t=u.b
s=t.id
s.L()
r=U.bv(u.c)
s.aD(new U.bs(t.a,t.b,u.a,r))},
$S:33}
U.dV.prototype={
$1:function(a){var u,t
H.d(a,"$iA")
u=W.t
t=document
H.al(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.ab(t.querySelectorAll(".nt-expression.empty"),[u])
u.w(u,new U.dT())},
$S:1}
U.dT.prototype={
$1:function(a){return J.iM(H.d(a,"$it")).p(0,"warn")},
$S:18}
U.dW.prototype={
$1:function(a){var u,t
H.d(a,"$iA")
u=W.t
t=document
H.al(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.ab(t.querySelectorAll(".nt-expression.empty"),[u])
u.w(u,new U.dS())},
$S:1}
U.dS.prototype={
$1:function(a){return J.iM(H.d(a,"$it")).G(0,"warn")},
$S:18}
U.dX.prototype={
$1:function(a){H.d(a,"$iA")
C.b.V(this.a)},
$S:1}
U.dY.prototype={
$1:function(a){var u,t
H.d(a,"$iA")
u=W.t
t=document
H.al(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.ab(t.querySelectorAll(".nt-pulldown-menu"),[u])
u.w(u,new U.dR())},
$S:1}
U.dR.prototype={
$1:function(a){return J.bQ(H.d(a,"$it"))},
$S:14}
U.eU.prototype={}
U.dr.prototype={
d7:function(){return P.j_(P.ib(["type","block-changed","blockId",this.b,"instanceId",this.c],P.j,P.u))}}
U.bs.prototype={
d7:function(){var u=this
return P.j_(P.ib(["type","attribute-changed","blockId",u.b,"instanceId",u.c,"attributeId",u.d,"value",u.e],P.j,null))}}
U.bW.prototype={
dv:function(a,b){var u,t,s,r,q,p,o,n,m=this,l="variables",k="expressions",j=m.Q
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
t=$.ad()
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
r=[P.a7]
q=new U.bC(H.C([1,0,0,0,1,0,0,0,1],r))
q.seY(H.C([1/t,0,0,0,1/t,0,0,0,1],r))
u.eN(q)
m.d=u.eG()
u=m.fr
u.eO(s)
C.a.p(u.c,m)
u=H.C([],[U.au])
q=$.bq()
r=$.hX()
if(typeof r!=="number")return r.m()
if(typeof q!=="number")return q.k()
m.cy=new U.ds(m,u,q+r*2)
if(!!J.k(j.h(0,"blocks")).$io)for(u=J.y(H.S(j.h(0,"blocks"),"$ip"));u.l();){p=H.d(u.gq(),"$iq")
o=U.iR(m,p)
n=U.iC(p.h(0,"limit"),-1)
t=m.cy
r=t.b
t=t.a
q=new U.au(o,t,n)
o.rx=!0
C.a.p(t.a,q)
C.a.p(r,q)}if(!!J.k(j.h(0,l)).$io)m.db=H.a8(j.h(0,l))
if(!!J.k(j.h(0,k)).$io)m.dx=H.a8(j.h(0,k))
if(!!J.k(j.h(0,"program")).$iq)m.eb(H.d(j.h(0,"program"),"$iq"))
m.L()
m.d6()},
eV:function(){var u=this
C.a.sj(u.a,0)
C.a.sj(u.x,0)
C.a.G(u.fr.c,u)},
d6:function(){if(this.eo(0))this.L()
C.Q.gep(window).d4(new U.dy(this),-1)},
aD:function(a){var u
this.L()
try{$.iI().h(0,"NetTango").b0("_relayCallback",[this.r,a.d7()])}catch(u){H.P(u)
P.iA("Unable to relay program changed event to Javascript")}},
bL:function(){var u,t,s,r,q,p,o,n=P.id(["chains",[]])
for(u=this.x,t=u.length,s=0;s<u.length;u.length===t||(0,H.W)(u),++s){r=u[s]
if(r.gcV()){q=n.h(0,"chains")
p=[]
r.X(p)
J.aP(q,p)}}for(u=this.cy.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.W)(u),++s){q=u[s].a
if(q.go)if(this.aF(q.a)===0){o=n.h(0,"chains")
p=[]
q.X(p)
J.aP(o,p)}}return n},
aq:function(a){var u,t
C.a.p(this.x,a)
u=this.a
C.a.p(u,a)
for(t=a.cy,t=t.gW(t),t=new H.a5(J.y(t.a),t.b,[H.a(t,0),H.a(t,1)]);t.l();)C.a.p(u,t.a)
for(t=a.db,t=t.gW(t),t=new H.a5(J.y(t.a),t.b,[H.a(t,0),H.a(t,1)]);t.l();)C.a.p(u,t.a)},
e6:function(a){var u,t
C.a.G(this.x,a)
u=this.a
C.a.G(u,a)
for(t=a.cy,t=t.gW(t),t=new H.a5(J.y(t.a),t.b,[H.a(t,0),H.a(t,1)]);t.l();)C.a.G(u,t.a)
for(t=a.db,t=t.gW(t),t=new H.a5(J.y(t.a),t.b,[H.a(t,0),H.a(t,1)]);t.l();)C.a.G(u,t.a)
this.L()},
aF:function(a){var u=this.x,t=H.a(u,0)
t=new H.aK(u,H.f(new U.dx(a),{func:1,ret:P.E,args:[t]}),[t])
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
ej:function(a){var u,t
if(this.cy.eJ(a)){for(u=this.x,t=this.a;a!=null;){C.a.G(u,a)
C.a.G(t,a)
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
eo:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
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
t=$.ad()
if(typeof t!=="number")return H.c(t)
o=$.w()
if(typeof o!=="number")return o.m()
j=C.r.d1(u/t)
i=C.r.d1((r+o*3)/t)
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
g.L()}}return s},
L:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
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
k=$.a3()
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
m=$.a3()
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
p.dM(h.dy)
p.dN(h.dy)
p.bu(h.dy)}h.dy.restore()},
eb:function(a){var u,t,s,r
if(!!J.k(a.h(0,"chains")).$io)for(u=J.y(H.S(a.h(0,"chains"),"$ip"));u.l();){t=u.gq()
s=J.k(t)
if(!!s.$io)for(s=s.gu(t);s.l();){r=s.gq()
if(!!J.k(r).$iq)this.bF(r)}}},
bF:function(a){var u,t,s,r,q,p,o,n,m=this,l="children",k=m.cy.dd(H.z(a.h(0,"id")))
if(k==null){P.iA("No prototype block found for id: "+H.b(a.h(0,"id")))
u=m.cy.b
t=P.H
s=H.a(u,0)
P.iA(new H.aG(u,H.f(new U.dw(),{func:1,ret:t,args:[s]}),[s,t]))
return}r=k.b2(0)
u=a.h(0,"x")
if(typeof u==="number"){u=a.h(0,"y")
u=typeof u==="number"}else u=!1
if(u){u=a.h(0,"x")
t=$.iD()
r.f=H.dl(J.iK(u,t))
r.r=H.dl(J.iK(a.h(0,"y"),t))}m.aq(r)
if(!!r.$ibt)for(u=r.N,t=u.length,q=0;q<u.length;u.length===t||(0,H.W)(u),++q)m.aq(u[q])
m.cE(r)
for(u=m.x,t=u.length,q=0;q<u.length;u.length===t||(0,H.W)(u),++q){p=u[q]
if(p.Q==null&&!(p instanceof U.ap)){p.Y(0,null)
p.ag()
p.aW(m.dy,$.bq())}}m.ea(r,H.a8(a.h(0,"params")),H.a8(a.h(0,"properties")))
if(!!J.k(a.h(0,l)).$io)for(u=J.y(H.S(a.h(0,l),"$ip"));u.l();){o=u.gq()
if(!!J.k(o).$iq)m.bF(o)}if(!!J.k(a.h(0,"clauses")).$io)for(u=J.y(H.S(a.h(0,"clauses"),"$ip"));u.l();){n=u.gq()
t=J.k(n)
if(!!t.$iq&&!!J.k(n.h(0,l)).$io)for(t=J.y(H.S(t.h(n,l),"$ip"));t.l();)m.bF(H.d(t.gq(),"$iq"))}},
ea:function(a,b,c){var u,t,s,r,q="id",p="value",o=J.k(b)
if(!!o.$io)for(o=o.gu(b),u=a.cy;o.l();){t=o.gq()
s=J.k(t)
if(!!s.$iq&&H.N(t.t(q))&&H.N(t.t(p))&&u.t(t.h(0,q)))J.iN(u.h(0,s.h(t,q)),s.h(t,p))}o=J.k(c)
if(!!o.$io)for(o=o.gu(c),u=a.db;o.l();){r=o.gq()
s=J.k(r)
if(!!s.$iq&&H.N(r.t(q))&&H.N(r.t(p))&&u.t(r.h(0,q)))J.iN(u.h(0,s.h(r,q)),s.h(r,p))}}}
U.dy.prototype={
$1:function(a){H.dl(a)
return this.a.d6()},
$S:44}
U.dx.prototype={
$1:function(a){return H.d(a,"$iao").a==this.a},
$S:36}
U.dw.prototype={
$1:function(a){return H.d(a,"$iau").a.a},
$S:37}
U.ei.prototype={
$5:function(a,b,c,d,e){var u,t,s,r=this.a
if(r==null)return J.I(e)
else{u=[a,b,c,d,e]
r=r.a
t=P.dj(null)
s=H.a(u,0)
s=P.aW(new H.aG(u,H.f(P.jQ(),{func:1,ret:null,args:[s]}),[s,null]),!0,null)
return H.v(P.hF(r.apply(t,s)))}}}
U.bC.prototype={
eG:function(){var u,t,s,r,q,p,o,n,m,l,k,j=H.C([1,0,0,0,1,0,0,0,1],[P.a7]),i=new U.bC(j),h=this.a,g=h.length
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
eN:function(a){var u,t,s,r,q,p,o,n=this,m=H.C([1,0,0,0,1,0,0,0,1],[P.a7]),l=n.a,k=l.length
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
seY:function(a){this.a=H.x(a,"$io",[P.a7],"$ao")}}
U.fg.prototype={
b7:function(a){var u,t,s
for(u=this.c,t=0;t<u.length;++t){s=u[t].b7(a)
if(s!=null){if(t>=u.length)return H.e(u,t)
u[t].e=new P.aA(Date.now(),!1)
if(t>=u.length)return H.e(u,t)
return new U.cR(u[t],s)}else if(t>=u.length)return H.e(u,t)}return},
eO:function(a){var u=this,t=W.A,s={func:1,ret:-1,args:[t]}
W.Q(a,"mousedown",H.f(new U.fh(u),s),!1,t)
W.Q(a,"mouseup",H.f(new U.fi(u),s),!1,t)
W.Q(a,"mousemove",H.f(new U.fj(u),s),!1,t)
t=document
s=W.aV
W.Q(t,"keydown",H.f(new U.fk(u),{func:1,ret:-1,args:[s]}),!1,s)
s=W.aY
W.Q(t,"touchmove",H.f(new U.fl(),{func:1,ret:-1,args:[s]}),!1,s)},
e0:function(a){var u,t
for(u=this.c.length,t=0;t<u;++t);}}
U.fh.prototype={
$1:function(a){var u=this.a,t=U.i2(H.d(a,"$iA")),s=u.b7(t)
if(s!=null){s.a.d.aE(t)
s.b=s.b.al(t)
u.d.i(0,-1,s)}u.a=!0
return},
$S:5}
U.fi.prototype={
$1:function(a){var u,t,s,r
H.d(a,"$iA")
u=this.a
t=u.d
s=t.h(0,-1)
if(s!=null){r=U.i2(a)
s.a.d.aE(r)
s.b.bX(r)}t.i(0,-1,null)
u.a=!1
return},
$S:5}
U.fj.prototype={
$1:function(a){var u=this.a,t=U.i2(H.d(a,"$iA")),s=u.d.h(0,-1)
if(s!=null){s.a.d.aE(t)
s.b.bV(t)}else{s=u.b7(t)
if(s!=null)if(u.a){s.a.d.aE(t)
s.b.bW(t)}}return},
$S:5}
U.fk.prototype={
$1:function(a){return this.a.e0(H.d(a,"$iaV"))},
$S:38}
U.fl.prototype={
$1:function(a){return H.d(a,"$iaY").preventDefault()},
$S:39}
U.cS.prototype={
b7:function(a){var u,t,s=new U.cr()
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
U.cR.prototype={}
U.bF.prototype={}
U.cr.prototype={}
U.ft.prototype={
$1:function(a){var u,t
if(!H.N(a.t("action")))return
u=this.b
t=u.a
a.i(0,"id",t)
u.i(0,H.v(a.h(0,"action")),t)
u=this.a
this.c.i(0,t,u.a)
u.a=U.jg(u.a,H.x(a,"$iq",[P.j,P.u],"$aq"))},
$S:15}
U.fu.prototype={
$1:function(a){U.l9(this.a,this.b,a)},
$S:15}
U.fs.prototype={
$1:function(a){var u=this.a
u.a=U.la(u.a,a)},
$S:41}
U.fv.prototype={
$1:function(a){return P.ib(["actual",a],P.j,null)},
$S:42}
U.fw.prototype={
$1:function(a){return H.N(a.t("type"))&&J.Y(J.Z(a,"type"),"select")},
$S:43};(function aliases(){var u=J.R.prototype
u.dj=u.n
u.di=u.bd
u=J.cz.prototype
u.dl=u.n
u=P.bG.prototype
u.dr=u.aH
u=P.T.prototype
u.ds=u.ar
u.dt=u.aG
u=P.p.prototype
u.dk=u.ac
u=P.u.prototype
u.dq=u.n
u=W.t.prototype
u.bi=u.M
u=W.dc.prototype
u.du=u.a4
u=P.aj.prototype
u.dm=u.h
u.c1=u.i
u=U.ao.prototype
u.dh=u.ag
u.dg=u.aS
u=U.at.prototype
u.bj=u.B
u=U.cH.prototype
u.dn=u.B})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers._instance_0u,q=hunkHelpers._instance_1i,p=hunkHelpers.installInstanceTearOff,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_0i,l=hunkHelpers._static_2
u(P,"lA","lg",6)
u(P,"lB","lh",6)
u(P,"lC","li",6)
t(P,"jG","ly",0)
s(P,"lD",1,null,["$2","$1"],["jv",function(a){return P.jv(a,null)}],7,0)
t(P,"jF","lu",0)
var k
r(k=P.U.prototype,"gaQ","a2",0)
r(k,"gaR","a3",0)
q(P.bG.prototype,"gem","p",8)
p(P.V.prototype,"gcg",0,1,function(){return[null]},["$2","$1"],["aK","dI"],7,0)
r(k=P.cX.prototype,"gaQ","a2",0)
r(k,"gaR","a3",0)
r(k=P.T.prototype,"gaQ","a2",0)
r(k,"gaR","a3",0)
r(P.d_.prototype,"gee","ah",0)
r(k=P.d1.prototype,"gaQ","a2",0)
r(k,"gaR","a3",0)
o(k,"gdT","dU",8)
n(k,"gdY","dZ",34)
r(k,"gdW","dX",0)
u(P,"lF","lp",3)
s(W,"lK",4,null,["$4"],["lk"],13,0)
s(W,"lL",4,null,["$4"],["ll"],13,0)
m(W.de.prototype,"gew","bI",0)
u(P,"jQ","dj",3)
u(P,"lS","hF",46)
l(U,"m1","lE",47)
l(U,"lZ","kM",48)
u(U,"lY","kL",49)
s(U,"lX",3,null,["$3"],["kK"],50,0)
u(U,"m0","kO",16)
t(U,"m_","kN",51)
u(U,"hU","ld",52)
u(U,"lW","lc",35)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.u,null)
s(P.u,[H.i9,J.R,J.b2,P.p,H.c3,P.as,H.b9,H.cb,P.ez,H.dB,H.bV,H.ej,H.fm,P.b7,H.dd,P.aF,H.es,H.et,H.ek,P.hz,P.a_,P.T,P.bG,P.fI,P.ax,P.V,P.cV,P.a0,P.f7,P.b_,P.fM,P.cj,P.d_,P.a4,P.hD,P.h7,P.hn,P.bI,P.d6,P.d7,P.M,P.hB,P.bE,P.db,P.dz,P.hd,P.E,P.aA,P.a2,P.eM,P.cO,P.fS,P.ec,P.ar,P.o,P.q,P.c4,P.B,P.O,P.j,P.av,P.aI,W.dI,W.de,W.bl,W.af,W.cF,W.dc,W.hs,W.cv,W.fK,W.aa,W.hm,W.dg,P.aj,P.aH,U.ao,U.aB,U.dP,U.cp,U.ds,U.au,U.at,U.eU,U.cS,U.bC,U.fg,U.cR,U.bF,U.cr])
s(J.R,[J.eh,J.cy,J.cz,J.bb,J.bA,J.bc,H.c6,W.b8,W.bu,W.b5,W.cY,W.dK,W.ct,W.dL,W.i,W.d3,W.c_,W.cB,W.d9,W.dh,P.c1])
s(J.cz,[J.eS,J.bh,J.bd])
t(J.i8,J.bb)
s(J.bA,[J.cx,J.cw])
s(P.p,[H.F,H.bB,H.aK,H.cQ,H.cM,H.fJ])
s(H.F,[H.aE,H.aD,P.h6,P.ah])
t(H.bx,H.bB)
s(P.as,[H.a5,H.cU,H.fe,H.f5])
s(H.aE,[H.aG,P.hb])
t(H.dN,H.cQ)
t(H.dM,H.cM)
t(P.df,P.ez)
t(P.fq,P.df)
t(H.dC,P.fq)
s(H.bV,[H.dD,H.eT,H.hW,H.ff,H.el,H.hP,H.hQ,H.hR,P.fA,P.fz,P.fB,P.fC,P.hA,P.hu,P.hv,P.fU,P.h0,P.fX,P.fY,P.fZ,P.fV,P.h_,P.h3,P.h4,P.h2,P.h1,P.f8,P.f9,P.fa,P.fb,P.fG,P.fF,P.hh,P.hI,P.hk,P.hj,P.hl,P.ey,P.he,P.eI,W.dO,W.fx,W.fR,W.hr,W.eK,W.eJ,W.ho,W.hp,W.hy,W.hC,P.dH,P.e8,P.e9,P.ea,P.en,P.hG,P.hH,P.hJ,P.hK,P.hL,U.e0,U.e1,U.e2,U.e_,U.e3,U.e6,U.e4,U.e5,U.dZ,U.dt,U.eN,U.eO,U.eP,U.eQ,U.eW,U.eX,U.eY,U.eZ,U.f2,U.f3,U.dU,U.dV,U.dT,U.dW,U.dS,U.dX,U.dY,U.dR,U.dy,U.dx,U.dw,U.ei,U.fh,U.fi,U.fj,U.fk,U.fl,U.ft,U.fu,U.fs,U.fv,U.fw])
t(H.dE,H.dB)
s(P.b7,[H.eL,H.em,H.fp,H.cT,H.dv,H.f_,P.dp,P.cA,P.cG,P.ay,P.eH,P.fr,P.fo,P.aX,P.dA,P.dJ])
s(H.ff,[H.f6,H.bT])
t(H.fy,P.dp)
t(P.ew,P.aF)
s(P.ew,[H.L,P.h5,P.ha,W.fD])
t(H.cC,H.c6)
s(H.cC,[H.cf,H.ch])
t(H.cg,H.cf)
t(H.c5,H.cg)
t(H.ci,H.ch)
t(H.cD,H.ci)
s(H.cD,[H.eA,H.eB,H.eC,H.eD,H.eE,H.cE,H.eF])
s(P.a_,[P.hq,P.fT,W.d0,W.aL])
t(P.cW,P.hq)
t(P.fE,P.cW)
s(P.T,[P.cX,P.d1])
t(P.U,P.cX)
t(P.ht,P.bG)
t(P.hw,P.fI)
s(P.b_,[P.fL,P.fN])
t(P.ck,P.cj)
t(P.hg,P.fT)
t(P.hi,P.hD)
t(P.h8,P.h5)
t(P.hf,P.hn)
t(P.ev,P.d7)
t(P.f4,P.db)
t(P.bX,P.f7)
t(P.ep,P.cA)
t(P.eo,P.dz)
s(P.bX,[P.er,P.eq])
t(P.hc,P.hd)
s(P.a2,[P.a7,P.H])
s(P.ay,[P.cJ,P.ee])
s(W.b8,[W.r,W.bi,W.aZ])
s(W.r,[W.t,W.b6,W.cd])
s(W.t,[W.m,P.l])
s(W.m,[W.bR,W.dn,W.bS,W.b3,W.b4,W.bw,W.eb,W.ba,W.f0,W.cP,W.fc,W.fd,W.cc])
t(W.bY,W.cY)
s(P.ev,[W.fH,W.ab,W.a6,P.e7])
t(W.d4,W.d3)
t(W.by,W.d4)
t(W.bg,W.i)
s(W.bg,[W.aV,W.A,W.aY])
t(W.da,W.d9)
t(W.c7,W.da)
t(W.cZ,W.ct)
t(W.di,W.dh)
t(W.d8,W.di)
t(W.fO,W.fD)
t(P.dG,P.f4)
s(P.dG,[W.fP,P.dq])
t(W.ii,W.d0)
t(W.fQ,P.a0)
t(W.hx,W.dc)
s(P.aj,[P.aU,P.d5])
t(P.c0,P.d5)
t(P.c9,P.l)
t(U.dF,U.ao)
s(U.dF,[U.ap,U.bt])
t(U.cu,U.ap)
s(U.cp,[U.eR,U.eG])
s(U.at,[U.cH,U.f1,U.dQ])
s(U.cH,[U.ef,U.eV])
s(U.eU,[U.dr,U.bs])
t(U.bW,U.cS)
u(H.cf,P.M)
u(H.cg,H.b9)
u(H.ch,P.M)
u(H.ci,H.b9)
u(P.d7,P.M)
u(P.db,P.bE)
u(P.df,P.hB)
u(W.cY,W.dI)
u(W.d3,P.M)
u(W.d4,W.af)
u(W.d9,P.M)
u(W.da,W.af)
u(W.dh,P.M)
u(W.di,W.af)
u(P.d5,P.M)})()
var v={mangledGlobalNames:{H:"int",a7:"double",a2:"num",j:"String",E:"bool",B:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1},{func:1,ret:P.B,args:[W.A]},{func:1,ret:P.B},{func:1,args:[,]},{func:1,ret:P.B,args:[W.i]},{func:1,ret:-1,args:[W.A]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[P.u],opt:[P.O]},{func:1,ret:-1,args:[P.u]},{func:1,ret:P.B,args:[,]},{func:1,ret:P.B,args:[,,]},{func:1,ret:P.E,args:[W.r]},{func:1,ret:P.E,args:[W.aa]},{func:1,ret:P.E,args:[W.t,P.j,P.j,W.bl]},{func:1,ret:-1,args:[W.t]},{func:1,ret:P.B,args:[[P.q,,,]]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:P.E,args:[P.j]},{func:1,ret:P.E,args:[W.t]},{func:1,ret:P.B,args:[P.j,,]},{func:1,ret:P.B,args:[P.a2]},{func:1,ret:-1,args:[W.r,W.r]},{func:1,ret:P.E,args:[[P.ah,P.j]]},{func:1,ret:W.t,args:[W.r]},{func:1,ret:P.aU,args:[,]},{func:1,ret:[P.c0,,],args:[,]},{func:1,args:[W.i]},{func:1,ret:P.B,args:[{func:1,ret:-1}]},{func:1,args:[,P.j]},{func:1,ret:P.B,args:[P.j]},{func:1,ret:P.B,args:[P.aI,,]},{func:1,ret:P.E,args:[U.au]},{func:1,args:[P.j]},{func:1,ret:P.E,args:[W.A]},{func:1,ret:-1,args:[,P.O]},{func:1,ret:-1,args:[[P.o,,]]},{func:1,ret:P.E,args:[U.ao]},{func:1,ret:P.H,args:[U.au]},{func:1,ret:-1,args:[W.aV]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:[P.V,,],args:[,]},{func:1,ret:P.B,args:[[P.o,,]]},{func:1,ret:[P.q,P.j,,],args:[,]},{func:1,ret:P.E,args:[,]},{func:1,ret:-1,args:[P.a2]},{func:1,ret:P.B,args:[,],opt:[P.O]},{func:1,ret:P.u,args:[,]},{func:1,ret:P.H,args:[,,]},{func:1,ret:-1,args:[P.j,P.j]},{func:1,ret:-1,args:[P.j]},{func:1,ret:P.j,args:[P.j,P.j,P.aU]},{func:1,ret:P.j},{func:1,ret:-1,args:[[P.q,,,]]},{func:1,ret:P.aj,args:[,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bR.prototype
C.m=W.b3.prototype
C.p=W.b4.prototype
C.q=W.b5.prototype
C.b=W.bw.prototype
C.G=J.R.prototype
C.a=J.bb.prototype
C.r=J.cw.prototype
C.f=J.cx.prototype
C.t=J.cy.prototype
C.c=J.bA.prototype
C.e=J.bc.prototype
C.H=J.bd.prototype
C.O=W.c7.prototype
C.w=J.eS.prototype
C.x=W.cP.prototype
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

C.h=new P.eo()
C.E=new P.eM()
C.F=new P.fM()
C.d=new P.hi()
C.I=new P.eq(null)
C.J=new P.er(null)
C.K=H.C(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.L=H.C(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.M=H.C(u([]),[P.j])
C.u=u([])
C.i=H.C(u(["bind","if","ref","repeat","syntax"]),[P.j])
C.j=H.C(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])
C.N=H.C(u([]),[P.aI])
C.v=new H.dE(0,{},C.N,[P.aI,null])
C.P=new H.cb("call")})();(function staticFields(){$.az=0
$.bU=null
$.iS=null
$.io=!1
$.jM=null
$.jD=null
$.jW=null
$.hM=null
$.hS=null
$.iy=null
$.bJ=null
$.cl=null
$.cm=null
$.ip=!1
$.G=C.d
$.ac=[]
$.aR=null
$.i3=null
$.iX=null
$.iW=null
$.d2=P.eu(P.j,P.ar)
$.cq=null
$.a1=P.ic()})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mg","hY",function(){return H.ix("_$dart_dartClosure")})
u($,"mj","iE",function(){return H.ix("_$dart_js")})
u($,"mn","k0",function(){return H.aJ(H.fn({
toString:function(){return"$receiver$"}}))})
u($,"mo","k1",function(){return H.aJ(H.fn({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mp","k2",function(){return H.aJ(H.fn(null))})
u($,"mq","k3",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mt","k6",function(){return H.aJ(H.fn(void 0))})
u($,"mu","k7",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ms","k5",function(){return H.aJ(H.jd(null))})
u($,"mr","k4",function(){return H.aJ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mw","k9",function(){return H.aJ(H.jd(void 0))})
u($,"mv","k8",function(){return H.aJ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mz","iF",function(){return P.lf()})
u($,"mi","dm",function(){var t=new P.V(C.d,[P.B])
t.ef(null)
return t})
u($,"mB","ka",function(){return P.j2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)})
u($,"mf","k_",function(){return P.l3("^\\S+$")})
u($,"mF","iI",function(){return H.d(P.is(self),"$iaj")})
u($,"mA","iG",function(){return H.ix("_$dart_dartObject")})
u($,"mD","iH",function(){return function DartObject(a){this.o=a}})
u($,"ml","ad",function(){return W.m8().devicePixelRatio})
u($,"me","bq",function(){var t=$.ad()
if(typeof t!=="number")return H.c(t)
return 80*t})
u($,"ma","w",function(){var t=$.ad()
if(typeof t!=="number")return H.c(t)
return 34*t})
u($,"mc","a3",function(){var t=$.ad()
if(typeof t!=="number")return H.c(t)
return 10*t})
u($,"mb","bp",function(){var t=$.ad()
if(typeof t!=="number")return H.c(t)
return 25*t})
u($,"m9","hX",function(){var t=$.ad()
if(typeof t!=="number")return H.c(t)
return 10*t})
u($,"md","iD",function(){return $.a3()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.R,CanvasPattern:J.R,DOMError:J.R,DOMImplementation:J.R,MediaError:J.R,Navigator:J.R,NavigatorConcurrentHardware:J.R,NavigatorUserMediaError:J.R,OverconstrainedError:J.R,PositionError:J.R,Range:J.R,TextMetrics:J.R,WebGLRenderingContext:J.R,WebGL2RenderingContext:J.R,SQLError:J.R,DataView:H.c6,ArrayBufferView:H.c6,Float32Array:H.c5,Float64Array:H.c5,Int16Array:H.eA,Int32Array:H.eB,Int8Array:H.eC,Uint16Array:H.eD,Uint32Array:H.eE,Uint8ClampedArray:H.cE,CanvasPixelArray:H.cE,Uint8Array:H.eF,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.bR,HTMLAreaElement:W.dn,HTMLBaseElement:W.bS,Blob:W.bu,File:W.bu,HTMLBodyElement:W.b3,HTMLCanvasElement:W.b4,CanvasRenderingContext2D:W.b5,CDATASection:W.b6,CharacterData:W.b6,Comment:W.b6,ProcessingInstruction:W.b6,Text:W.b6,CSSStyleDeclaration:W.bY,MSStyleCSSProperties:W.bY,CSS2Properties:W.bY,HTMLDivElement:W.bw,DOMException:W.dK,DOMRectReadOnly:W.ct,DOMTokenList:W.dL,Element:W.t,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,EventTarget:W.b8,HTMLFormElement:W.eb,HTMLCollection:W.by,HTMLFormControlsCollection:W.by,HTMLOptionsCollection:W.by,ImageData:W.c_,HTMLInputElement:W.ba,KeyboardEvent:W.aV,Location:W.cB,MouseEvent:W.A,DragEvent:W.A,PointerEvent:W.A,WheelEvent:W.A,Document:W.r,DocumentFragment:W.r,HTMLDocument:W.r,ShadowRoot:W.r,XMLDocument:W.r,DocumentType:W.r,Node:W.r,NodeList:W.c7,RadioNodeList:W.c7,HTMLSelectElement:W.f0,HTMLTableElement:W.cP,HTMLTableRowElement:W.fc,HTMLTableSectionElement:W.fd,HTMLTemplateElement:W.cc,TouchEvent:W.aY,CompositionEvent:W.bg,FocusEvent:W.bg,TextEvent:W.bg,UIEvent:W.bg,Window:W.bi,DOMWindow:W.bi,DedicatedWorkerGlobalScope:W.aZ,ServiceWorkerGlobalScope:W.aZ,SharedWorkerGlobalScope:W.aZ,WorkerGlobalScope:W.aZ,Attr:W.cd,ClientRect:W.cZ,DOMRect:W.cZ,NamedNodeMap:W.d8,MozNamedAttrMap:W.d8,IDBKeyRange:P.c1,SVGScriptElement:P.c9,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,TextMetrics:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:true,File:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,IDBKeyRange:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.jR,[])
else U.jR([])})})()
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

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
a[c]=function(){a[c]=function(){H.lh(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.hX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.hX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.hX(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hE:function hE(){},
k9:function(a,b,c,d){H.u(a,"$io",[c],"$ao")
H.h(b,{func:1,ret:d,args:[c]})
if(!!J.k(a).$iD)return new H.dw(a,b,[c,d])
return new H.bX(a,b,[c,d])},
ko:function(a,b,c){H.u(a,"$io",[c],"$ao")
P.c1(b,"takeCount")
if(!!J.k(a).$iD)return new H.dy(a,b,[c])
return new H.cI(a,b,[c])},
kn:function(a,b,c){H.u(a,"$io",[c],"$ao")
if(!!J.k(a).$iD){P.c1(b,"count")
return new H.dx(a,b,[c])}P.c1(b,"count")
return new H.cF(a,b,[c])},
it:function(){return new P.aK("No element")},
k_:function(){return new P.aK("Too many elements")},
D:function D(){},
b2:function b2(){},
bW:function bW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bX:function bX(a,b,c){this.a=a
this.b=b
this.$ti=c},
dw:function dw(a,b,c){this.a=a
this.b=b
this.$ti=c},
a0:function a0(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
b4:function b4(a,b,c){this.a=a
this.b=b
this.$ti=c},
b8:function b8(a,b,c){this.a=a
this.b=b
this.$ti=c},
f8:function f8(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
dy:function dy(a,b,c){this.a=a
this.b=b
this.$ti=c},
eV:function eV(a,b,c){this.a=a
this.b=b
this.$ti=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
dx:function dx(a,b,c){this.a=a
this.b=b
this.$ti=c},
eO:function eO(a,b,c){this.a=a
this.b=b
this.$ti=c},
aY:function aY(){},
c4:function c4(a){this.a=a},
jS:function(){throw H.f(P.F("Cannot modify unmodifiable Map"))},
bF:function(a){var u,t=H.p(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
kW:function(a){return v.types[H.w(a)]},
l3:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.k(a).$iaI},
a:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.G(a)
if(typeof u!=="string")throw H.f(H.aC(a))
return u},
bs:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
iC:function(a,b){var u,t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return
if(3>=t.length)return H.c(t,3)
u=H.p(t[3])
if(u!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return},
kk:function(a){var u,t
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=C.e.cJ(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
c0:function(a){return H.kb(a)+H.hU(H.bf(a),0,null)},
kb:function(a){var u,t,s,r,q,p,o,n=J.k(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.F||!!n.$ib7){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bF(t.length>1&&C.e.av(t,0)===36?C.e.bC(t,1):t)},
a8:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.bk(u,10))>>>0,56320|u&1023)}throw H.f(P.cC(a,0,1114111,null,null))},
b5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kj:function(a){var u=H.b5(a).getFullYear()+0
return u},
kh:function(a){var u=H.b5(a).getMonth()+1
return u},
kd:function(a){var u=H.b5(a).getDate()+0
return u},
ke:function(a){var u=H.b5(a).getHours()+0
return u},
kg:function(a){var u=H.b5(a).getMinutes()+0
return u},
ki:function(a){var u=H.b5(a).getSeconds()+0
return u},
kf:function(a){var u=H.b5(a).getMilliseconds()+0
return u},
br:function(a,b,c){var u,t,s={}
H.u(c,"$ir",[P.i,null],"$ar")
s.a=0
u=[]
t=[]
s.a=b.length
C.a.I(u,b)
s.b=""
if(c!=null&&c.a!==0)c.w(0,new H.eC(s,t,u))
""+s.a
return J.jI(a,new H.e3(C.O,0,u,t,0))},
kc:function(a,b,c){var u,t,s,r
H.u(c,"$ir",[P.i,null],"$ar")
if(b instanceof Array)u=c==null||c.a===0
else u=!1
if(u){t=b
s=t.length
if(s===0){if(!!a.$0)return a.$0()}else if(s===1){if(!!a.$1)return a.$1(t[0])}else if(s===2){if(!!a.$2)return a.$2(t[0],t[1])}else if(s===3){if(!!a.$3)return a.$3(t[0],t[1],t[2])}else if(s===4){if(!!a.$4)return a.$4(t[0],t[1],t[2],t[3])}else if(s===5)if(!!a.$5)return a.$5(t[0],t[1],t[2],t[3],t[4])
r=a[""+"$"+s]
if(r!=null)return r.apply(a,t)}return H.ka(a,b,c)},
ka:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j
H.u(c,"$ir",[P.i,null],"$ar")
u=b instanceof Array?b:P.bp(b,!0,null)
t=u.length
s=a.$R
if(t<s)return H.br(a,u,c)
r=a.$D
q=r==null
p=!q?r():null
o=J.k(a)
n=o.$C
if(typeof n==="string")n=o[n]
if(q){if(c!=null&&c.a!==0)return H.br(a,u,c)
if(t===s)return n.apply(a,u)
return H.br(a,u,c)}if(p instanceof Array){if(c!=null&&c.a!==0)return H.br(a,u,c)
if(t>s+p.length)return H.br(a,u,null)
C.a.I(u,p.slice(t-s))
return n.apply(a,u)}else{if(t>s)return H.br(a,u,c)
m=Object.keys(p)
if(c==null)for(q=m.length,l=0;l<m.length;m.length===q||(0,H.S)(m),++l)C.a.p(u,p[H.p(m[l])])
else{for(q=m.length,k=0,l=0;l<m.length;m.length===q||(0,H.S)(m),++l){j=H.p(m[l])
if(c.t(j)){++k
C.a.p(u,c.h(0,j))}else C.a.p(u,p[j])}if(k!==c.a)return H.br(a,u,c)}return n.apply(a,u)}},
b:function(a){throw H.f(H.aC(a))},
c:function(a,b){if(a==null)J.af(a)
throw H.f(H.bd(a,b))},
bd:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aq(!0,b,s,null)
u=H.w(J.af(a))
if(!(b<0)){if(typeof u!=="number")return H.b(u)
t=b>=u}else t=!0
if(t)return P.bn(b,a,s,null,u)
return P.cD(b,s)},
aC:function(a){return new P.aq(!0,a,null,null)},
j7:function(a){if(typeof a!=="number")throw H.f(H.aC(a))
return a},
f:function(a){var u
if(a==null)a=new P.cz()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jl})
u.name=""}else u.toString=H.jl
return u},
jl:function(){return J.G(this.dartException)},
X:function(a){throw H.f(a)},
S:function(a){throw H.f(P.aE(a))},
ay:function(a){var u,t,s,r,q,p
a=H.jj(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.B([],[P.i])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.f2(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
f3:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
iG:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
iz:function(a,b){return new H.eu(a,b==null?null:b.method)},
hF:function(a,b){var u=b==null,t=u?null:b.method
return new H.e7(a,t,u?null:b.receiver)},
Q:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.hq(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.bk(t,16)&8191)===10)switch(s){case 438:return f.$1(H.hF(H.a(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.iz(H.a(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jn()
q=$.jo()
p=$.jp()
o=$.jq()
n=$.jt()
m=$.ju()
l=$.js()
$.jr()
k=$.jw()
j=$.jv()
i=r.T(u)
if(i!=null)return f.$1(H.hF(H.p(u),i))
else{i=q.T(u)
if(i!=null){i.method="call"
return f.$1(H.hF(H.p(u),i))}else{i=p.T(u)
if(i==null){i=o.T(u)
if(i==null){i=n.T(u)
if(i==null){i=m.T(u)
if(i==null){i=l.T(u)
if(i==null){i=o.T(u)
if(i==null){i=k.T(u)
if(i==null){i=j.T(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.iz(H.p(u),i))}}return f.$1(new H.f5(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cG()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aq(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cG()
return a},
bD:function(a){var u
if(a==null)return new H.d2(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.d2(a)},
kU:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.i(0,a[u],a[t])}return b},
l2:function(a,b,c,d,e,f){H.e(a,"$iai")
switch(H.w(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.ft("Unsupported number of arguments for wrapped closure"))},
bB:function(a,b){var u
H.w(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.l2)
a.$identity=u
return u},
jQ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.eP().constructor.prototype):Object.create(new H.bK(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ar
if(typeof t!=="number")return t.j()
$.ar=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}i.constructor=u
u.prototype=i
if(!e){s=H.ip(a,k,f)
s.$reflectionInfo=d}else{i.$static_name=g
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.kW,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.io:H.hw
r=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(d,q)}else throw H.f("Error in reflectionInfo.")
i.$S=r
i[j]=s
for(p=s,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.ip(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return u},
jN:function(a,b,c,d){var u=H.hw
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ip:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.jP(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.jN(t,!r,u,b)
if(t===0){r=$.ar
if(typeof r!=="number")return r.j()
$.ar=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bL
return new Function(r+H.a(q==null?$.bL=H.de("self"):q)+";return "+p+"."+H.a(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ar
if(typeof r!=="number")return r.j()
$.ar=r+1
o+=r
r="return function("+o+"){return this."
q=$.bL
return new Function(r+H.a(q==null?$.bL=H.de("self"):q)+"."+H.a(u)+"("+o+");}")()},
jO:function(a,b,c,d){var u=H.hw,t=H.io
switch(b?-1:a){case 0:throw H.f(H.km("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
jP:function(a,b){var u,t,s,r,q,p,o,n=$.bL
if(n==null)n=$.bL=H.de("self")
u=$.im
if(u==null)u=$.im=H.de("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.jO(s,!q,t,b)
if(s===1){n="return function(){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+");"
u=$.ar
if(typeof u!=="number")return u.j()
$.ar=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+", "+o+");"
u=$.ar
if(typeof u!=="number")return u.j()
$.ar=u+1
return new Function(n+u+"}")()},
hX:function(a,b,c,d,e,f,g){return H.jQ(a,b,H.w(c),d,!!e,!!f,g)},
hw:function(a){return a.a},
io:function(a){return a.c},
de:function(a){var u,t,s,r=new H.bK("self","target","receiver","name"),q=J.hC(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
L:function(a){if(a==null)H.kL("boolean expression must not be null")
return a},
p:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.an(a,"String"))},
kR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.an(a,"double"))},
hp:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.an(a,"num"))},
hV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.an(a,"bool"))},
w:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.an(a,"int"))},
jh:function(a,b){throw H.f(H.an(a,H.bF(H.p(b).substring(2))))},
lf:function(a,b){throw H.f(H.jM(a,H.bF(H.p(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.k(a)[b])return a
H.jh(a,b)},
jb:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.k(a)[b]
else u=!0
if(u)return a
H.lf(a,b)},
V:function(a){if(a==null)return a
if(!!J.k(a).$in)return a
throw H.f(H.an(a,"List<dynamic>"))},
P:function(a,b){var u
if(a==null)return a
u=J.k(a)
if(!!u.$in)return a
if(u[b])return a
H.jh(a,b)},
j8:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.w(u)]
else return a.$S()}return},
bC:function(a,b){var u
if(typeof a=="function")return!0
u=H.j8(J.k(a))
if(u==null)return!1
return H.iV(u,null,b,null)},
h:function(a,b){var u,t
if(a==null)return a
if($.hR)return a
$.hR=!0
try{if(H.bC(a,b))return a
u=H.ch(b)
t=H.an(a,u)
throw H.f(t)}finally{$.hR=!1}},
hi:function(a,b){if(a!=null&&!H.hW(a,b))H.X(H.an(a,H.ch(b)))
return a},
an:function(a,b){return new H.cL("TypeError: "+P.aH(a)+": type '"+H.j0(a)+"' is not a subtype of type '"+b+"'")},
jM:function(a,b){return new H.df("CastError: "+P.aH(a)+": type '"+H.j0(a)+"' is not a subtype of type '"+b+"'")},
j0:function(a){var u,t=J.k(a)
if(!!t.$ibM){u=H.j8(t)
if(u!=null)return H.ch(u)
return"Closure"}return H.c0(a)},
kL:function(a){throw H.f(new H.fa(a))},
lh:function(a){throw H.f(new P.dt(H.p(a)))},
km:function(a){return new H.eI(a)},
hZ:function(a){return v.getIsolateTag(a)},
B:function(a,b){a.$ti=b
return a},
bf:function(a){if(a==null)return
return a.$ti},
lS:function(a,b,c){return H.bE(a["$a"+H.a(c)],H.bf(b))},
aO:function(a,b,c,d){var u
H.p(c)
H.w(d)
u=H.bE(a["$a"+H.a(c)],H.bf(b))
return u==null?null:u[d]},
be:function(a,b,c){var u
H.p(b)
H.w(c)
u=H.bE(a["$a"+H.a(b)],H.bf(a))
return u==null?null:u[c]},
d:function(a,b){var u
H.w(b)
u=H.bf(a)
return u==null?null:u[b]},
ch:function(a){return H.bc(a,null)},
bc:function(a,b){var u,t
H.u(b,"$in",[P.i],"$an")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bF(a[0].name)+H.hU(a,1,b)
if(typeof a=="function")return H.bF(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.w(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.a(b[t])}if('func' in a)return H.kB(a,b)
if('futureOr' in a)return"FutureOr<"+H.bc("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
kB:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.i]
H.u(a0,"$in",b,"$an")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.B([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.p(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.c(a0,n)
p=C.e.j(p,a0[n])
m=u[q]
if(m!=null&&m!==P.y)p+=" extends "+H.bc(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bc(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bc(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bc(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.kT(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.p(b[h])
j=j+i+H.bc(e[d],a0)+(" "+H.a(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
hU:function(a,b,c){var u,t,s,r,q,p
H.u(c,"$in",[P.i],"$an")
if(a==null)return""
u=new P.am("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bc(p,c)}return"<"+u.n(0)+">"},
bE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
d8:function(a,b,c,d){var u,t
H.p(b)
H.V(c)
H.p(d)
if(a==null)return!1
u=H.bf(a)
t=J.k(a)
if(t[b]==null)return!1
return H.j4(H.bE(t[d],u),null,c,null)},
u:function(a,b,c,d){H.p(b)
H.V(c)
H.p(d)
if(a==null)return a
if(H.d8(a,b,c,d))return a
throw H.f(H.an(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.bF(b.substring(2))+H.hU(c,0,null),v.mangledGlobalNames)))},
ad:function(a,b,c,d,e){H.p(c)
H.p(d)
H.p(e)
if(!H.ab(a,null,b,null))H.li("TypeError: "+H.a(c)+H.ch(a)+H.a(d)+H.ch(b)+H.a(e))},
li:function(a){throw H.f(new H.cL(H.p(a)))},
j4:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ab(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ab(a[t],b,c[t],d))return!1
return!0},
lP:function(a,b,c){return a.apply(b,H.bE(J.k(b)["$a"+H.a(c)],H.bf(b)))},
jd:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="y"||a.name==="C"||a===-1||a===-2||H.jd(u)}return!1},
hW:function(a,b){var u,t
if(a==null)return b==null||b.name==="y"||b.name==="C"||b===-1||b===-2||H.jd(b)
if(b==null||b===-1||b.name==="y"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.hW(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bC(a,b)}u=J.k(a).constructor
t=H.bf(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ab(u,null,b,null)},
q:function(a,b){if(a!=null&&!H.hW(a,b))throw H.f(H.an(a,H.ch(b)))
return a},
ab:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="y"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="y"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ab(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="C")return!0
if('func' in c)return H.iV(a,b,c,d)
if('func' in a)return c.name==="ai"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ab("type" in a?a.type:l,b,s,d)
else if(H.ab(a,b,s,d))return!0
else{if(!('$i'+"at" in t.prototype))return!1
r=t.prototype["$a"+"at"]
q=H.bE(r,u?a.slice(1):l)
return H.ab(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.j4(H.bE(m,u),b,p,d)},
iV:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
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
return H.l8(h,b,g,d)},
l8:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ab(c[s],d,a[s],b))return!1}return!0},
lR:function(a,b,c){Object.defineProperty(a,H.p(b),{value:c,enumerable:false,writable:true,configurable:true})},
l6:function(a){var u,t,s,r,q=H.p($.ja.$1(a)),p=$.hh[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hn[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.p($.j3.$2(a,q))
if(q!=null){p=$.hh[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.hn[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ho(u)
$.hh[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.hn[q]=u
return u}if(s==="-"){r=H.ho(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jg(a,u)
if(s==="*")throw H.f(P.iI(q))
if(v.leafTags[q]===true){r=H.ho(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jg(a,u)},
jg:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.i0(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ho:function(a){return J.i0(a,!1,null,!!a.$iaI)},
l7:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ho(u)
else return J.i0(u,c,null,null)},
l_:function(){if(!0===$.i_)return
$.i_=!0
H.l0()},
l0:function(){var u,t,s,r,q,p,o,n
$.hh=Object.create(null)
$.hn=Object.create(null)
H.kZ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ji.$1(q)
if(p!=null){o=H.l7(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
kZ:function(){var u,t,s,r,q,p,o=C.x()
o=H.bA(C.y,H.bA(C.z,H.bA(C.o,H.bA(C.o,H.bA(C.A,H.bA(C.B,H.bA(C.C(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ja=new H.hk(r)
$.j3=new H.hl(q)
$.ji=new H.hm(p)},
bA:function(a,b){return a(b)||b},
k8:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.f(P.dZ("Illegal RegExp pattern ("+String(p)+")",a))},
kS:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jj:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
i2:function(a,b,c){var u=H.lg(a,b,c)
return u},
lg:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jj(b),'g'),H.kS(c))},
dm:function dm(a,b){this.a=a
this.$ti=b},
dl:function dl(){},
dn:function dn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fk:function fk(a,b){this.a=a
this.$ti=b},
e3:function e3(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
f2:function f2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eu:function eu(a,b){this.a=a
this.b=b},
e7:function e7(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a){this.a=a},
hq:function hq(a){this.a=a},
d2:function d2(a){this.a=a
this.b=null},
bM:function bM(){},
eW:function eW(){},
eP:function eP(){},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cL:function cL(a){this.a=a},
df:function df(a){this.a=a},
eI:function eI(a){this.a=a},
fa:function fa(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
e6:function e6(a){this.a=a},
ec:function ec(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
av:function av(a,b){this.a=a
this.$ti=b},
ed:function ed(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
e5:function e5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aB:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.bd(b,a))},
bZ:function bZ(){},
cv:function cv(){},
bY:function bY(){},
cw:function cw(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
cx:function cx(){},
eo:function eo(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
jc:function(a){var u=J.k(a)
return!!u.$ibk||!!u.$ij||!!u.$ibU||!!u.$ibR||!!u.$it||!!u.$ib9||!!u.$iaN},
kT:function(a){return J.k0(a?Object.keys(a):[],null)},
le:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
i0:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hj:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.i_==null){H.l_()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.f(P.iI("Return interceptor for "+H.a(u(a,q))))}s=a.constructor
r=s==null?null:s[$.i7()]
if(r!=null)return r
r=H.l6(a)
if(r!=null)return r
if(typeof a=="function")return C.G
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.i7(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
k0:function(a,b){return J.hC(H.B(a,[b]))},
hC:function(a){H.V(a)
a.fixed$length=Array
return a},
iu:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
k6:function(a,b){var u,t
for(u=a.length;b<u;){t=C.e.av(a,b)
if(t!==32&&t!==13&&!J.iu(t))break;++b}return b},
k7:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.e.cl(a,u)
if(t!==32&&t!==13&&!J.iu(t))break}return b},
k:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cr.prototype
return J.cq.prototype}if(typeof a=="string")return J.b0.prototype
if(a==null)return J.e4.prototype
if(typeof a=="boolean")return J.e2.prototype
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.y)return a
return J.hj(a)},
O:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.y)return a
return J.hj(a)},
cg:function(a){if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.y)return a
return J.hj(a)},
j9:function(a){if(typeof a=="number")return J.bo.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.b7.prototype
return a},
kV:function(a){if(typeof a=="number")return J.bo.prototype
if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.b7.prototype
return a},
hY:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.b7.prototype
return a},
ae:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.y)return a
return J.hj(a)},
ap:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.k(a).L(a,b)},
ic:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.j9(a).as(a,b)},
id:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kV(a).l(a,b)},
bG:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l3(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.O(a).h(a,b)},
jy:function(a,b,c){return J.cg(a).i(a,b,c)},
jz:function(a,b,c,d){return J.ae(a).d5(a,b,c,d)},
ie:function(a){return J.ae(a).d9(a)},
jA:function(a,b,c,d){return J.ae(a).dw(a,b,c,d)},
jB:function(a,b,c){return J.ae(a).dz(a,b,c)},
aD:function(a,b){return J.cg(a).p(a,b)},
jC:function(a,b){return J.O(a).B(a,b)},
ci:function(a,b){return J.cg(a).E(a,b)},
jD:function(a){return J.ae(a).gdT(a)},
jE:function(a){return J.ae(a).gcj(a)},
ig:function(a){return J.ae(a).gck(a)},
aQ:function(a){return J.k(a).gu(a)},
jF:function(a){return J.O(a).gG(a)},
jG:function(a){return J.O(a).gbq(a)},
z:function(a){return J.cg(a).gv(a)},
af:function(a){return J.O(a).gk(a)},
jH:function(a,b,c){return J.cg(a).cs(a,b,c)},
jI:function(a,b){return J.k(a).aU(a,b)},
bH:function(a){return J.cg(a).O(a)},
jJ:function(a,b){return J.ae(a).ef(a,b)},
ih:function(a,b){return J.ae(a).sH(a,b)},
ht:function(a,b){return J.ae(a).X(a,b)},
jK:function(a){return J.hY(a).ej(a)},
G:function(a){return J.k(a).n(a)},
jL:function(a,b){return J.j9(a).ek(a,b)},
hu:function(a){return J.hY(a).cJ(a)},
N:function N(){},
e2:function e2(){},
e4:function e4(){},
cs:function cs(){},
eB:function eB(){},
b7:function b7(){},
b1:function b1(){},
b_:function b_(a){this.$ti=a},
hD:function hD(a){this.$ti=a},
aR:function aR(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bo:function bo(){},
cr:function cr(){},
cq:function cq(){},
b0:function b0(){}},P={
kq:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.kM()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bB(new P.fc(s),1)).observe(u,{childList:true})
return new P.fb(s,u,t)}else if(self.setImmediate!=null)return P.kN()
return P.kO()},
kr:function(a){self.scheduleImmediate(H.bB(new P.fd(H.h(a,{func:1,ret:-1})),0))},
ks:function(a){self.setImmediate(H.bB(new P.fe(H.h(a,{func:1,ret:-1})),0))},
kt:function(a){H.h(a,{func:1,ret:-1})
P.ky(0,a)},
ky:function(a,b){var u=new P.h5()
u.d3(a,b)
return u},
iN:function(a,b){var u,t,s
b.a=1
try{a.cH(new P.fx(b),new P.fy(b),null)}catch(s){u=H.Q(s)
t=H.bD(s)
P.jk(new P.fz(b,u,t))}},
fw:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iU")
if(u>=4){t=b.aD()
b.a=a.a
b.c=a.c
P.bw(b,t)}else{t=H.e(b.c,"$iaA")
b.a=2
b.c=a
a.ca(t)}},
bw:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$ia_")
g=g.b
r=s.a
q=s.b
g.toString
P.cf(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.bw(h.a,b)}g=h.a
o=g.c
u.a=t
u.b=o
r=!t
if(r){q=b.c
q=(q&1)!==0||q===8}else q=!0
if(q){q=b.b
n=q.b
if(t){m=g.b
m.toString
m=m==n
if(!m)n.toString
else m=!0
m=!m}else m=!1
if(m){H.e(o,"$ia_")
g=g.b
r=o.a
q=o.b
g.toString
P.cf(i,i,g,r,q)
return}l=$.H
if(l!=n)$.H=n
else l=i
g=b.c
if(g===8)new P.fE(h,u,b,t).$0()
else if(r){if((g&1)!==0)new P.fD(u,b,o).$0()}else if((g&2)!==0)new P.fC(h,u,b).$0()
if(l!=null)$.H=l
g=u.b
if(!!J.k(g).$iat){if(g.a>=4){k=H.e(q.c,"$iaA")
q.c=null
b=q.aG(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.fw(g,q)
return}}j=b.b
k=H.e(j.c,"$iaA")
j.c=null
b=j.aG(k)
g=u.a
r=u.b
if(!g){H.q(r,H.d(j,0))
j.a=4
j.c=r}else{H.e(r,"$ia_")
j.a=8
j.c=r}h.a=j
g=j}},
kH:function(a,b){if(H.bC(a,{func:1,args:[P.y,P.R]}))return b.cB(a,null,P.y,P.R)
if(H.bC(a,{func:1,args:[P.y]}))return H.h(a,{func:1,ret:null,args:[P.y]})
throw H.f(P.hv(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kE:function(){var u,t
for(;u=$.by,u!=null;){$.ce=null
t=u.b
$.by=t
if(t==null)$.cd=null
u.a.$0()}},
kK:function(){$.hS=!0
try{P.kE()}finally{$.ce=null
$.hS=!1
if($.by!=null)$.i8().$1(P.j6())}},
j_:function(a){var u=new P.cM(H.h(a,{func:1,ret:-1}))
if($.by==null){$.by=$.cd=u
if(!$.hS)$.i8().$1(P.j6())}else $.cd=$.cd.b=u},
kJ:function(a){var u,t,s
H.h(a,{func:1,ret:-1})
u=$.by
if(u==null){P.j_(a)
$.ce=$.cd
return}t=new P.cM(a)
s=$.ce
if(s==null){t.b=u
$.by=$.ce=t}else{t.b=s.b
$.ce=s.b=t
if(t.b==null)$.cd=t}},
jk:function(a){var u,t=null,s={func:1,ret:-1}
H.h(a,s)
u=$.H
if(C.d===u){P.bz(t,t,C.d,a)
return}u.toString
P.bz(t,t,u,H.h(u.ci(a),s))},
iZ:function(a){var u,t,s,r
H.h(a,{func:1})
if(a==null)return
try{a.$0()}catch(s){u=H.Q(s)
t=H.bD(s)
r=$.H
r.toString
P.cf(null,null,r,u,H.e(t,"$iR"))}},
iW:function(a,b){var u=$.H
u.toString
P.cf(null,null,u,a,b)},
kF:function(){},
cf:function(a,b,c,d,e){var u={}
u.a=d
P.kJ(new P.hd(u,e))},
iX:function(a,b,c,d,e){var u,t
H.h(d,{func:1,ret:e})
t=$.H
if(t===c)return d.$0()
$.H=c
u=t
try{t=d.$0()
return t}finally{$.H=u}},
iY:function(a,b,c,d,e,f,g){var u,t
H.h(d,{func:1,ret:f,args:[g]})
H.q(e,g)
t=$.H
if(t===c)return d.$1(e)
$.H=c
u=t
try{t=d.$1(e)
return t}finally{$.H=u}},
kI:function(a,b,c,d,e,f,g,h,i){var u,t
H.h(d,{func:1,ret:g,args:[h,i]})
H.q(e,h)
H.q(f,i)
t=$.H
if(t===c)return d.$2(e,f)
$.H=c
u=t
try{t=d.$2(e,f)
return t}finally{$.H=u}},
bz:function(a,b,c,d){var u
H.h(d,{func:1,ret:-1})
u=C.d!==c
if(u)d=!(!u||!1)?c.ci(d):c.dU(d,-1)
P.j_(d)},
fc:function fc(a){this.a=a},
fb:function fb(a,b,c){this.a=a
this.b=b
this.c=c},
fd:function fd(a){this.a=a},
fe:function fe(a){this.a=a},
h5:function h5(){},
h6:function h6(a,b){this.a=a
this.b=b},
fg:function fg(a,b){this.a=a
this.$ti=b},
T:function T(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.c=_.b=_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
bu:function bu(){},
h_:function h_(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.e=_.d=null
_.$ti=c},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(a){this.a=a},
fj:function fj(){},
h2:function h2(a,b){this.a=a
this.$ti=b},
aA:function aA(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
U:function U(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
fu:function fu(a,b){this.a=a
this.b=b},
fB:function fB(a,b){this.a=a
this.b=b},
fx:function fx(a){this.a=a},
fy:function fy(a){this.a=a},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
fv:function fv(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fF:function fF(a){this.a=a},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a){this.a=a
this.b=null},
aL:function aL(){},
eR:function eR(a,b){this.a=a
this.b=b},
eS:function eS(a,b){this.a=a
this.b=b},
aa:function aa(){},
eQ:function eQ(){},
cN:function cN(){},
fl:function fl(){},
ao:function ao(){},
fh:function fh(a){this.a=a},
fX:function fX(){},
ba:function ba(){},
fn:function fn(a,b){this.b=a
this.a=null
this.$ti=b},
fo:function fo(){},
cb:function cb(){},
fO:function fO(a,b){this.a=a
this.b=b},
cc:function cc(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cQ:function cQ(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
a_:function a_(a,b){this.a=a
this.b=b},
h9:function h9(){},
hd:function hd(a,b){this.a=a
this.b=b},
fP:function fP(){},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function(a,b){return new H.I([a,b])},
hG:function(){return new H.I([null,null])},
hH:function(a){return H.kU(a,new H.I([null,null]))},
bV:function(a){return new P.fM([a])},
hM:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
fN:function(a,b,c){var u=new P.cW(a,b,[c])
u.c=a.e
return u},
jZ:function(a,b,c){var u,t
if(P.hT(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.B([],[P.i])
C.a.p($.a6,a)
try{P.kD(a,u)}finally{if(0>=$.a6.length)return H.c($.a6,-1)
$.a6.pop()}t=P.iF(b,H.P(u,"$io"),", ")+c
return t.charCodeAt(0)==0?t:t},
e1:function(a,b,c){var u,t
if(P.hT(a))return b+"..."+c
u=new P.am(b)
C.a.p($.a6,a)
try{t=u
t.a=P.iF(t.a,a,", ")}finally{if(0>=$.a6.length)return H.c($.a6,-1)
$.a6.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
hT:function(a){var u,t
for(u=$.a6.length,t=0;t<u;++t)if(a===$.a6[t])return!0
return!1},
kD:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.u(b,"$in",[P.i],"$an")
u=a.gv(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.m())return
r=H.a(u.gq())
C.a.p(b,r)
t+=r.length+2;++s}if(!u.m()){if(s<=5)return
if(0>=b.length)return H.c(b,-1)
q=b.pop()
if(0>=b.length)return H.c(b,-1)
p=b.pop()}else{o=u.gq();++s
if(!u.m()){if(s<=4){C.a.p(b,H.a(o))
return}q=H.a(o)
if(0>=b.length)return H.c(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gq();++s
for(;u.m();o=n,n=m){m=u.gq();++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2;--s}C.a.p(b,"...")
return}}p=H.a(o)
q=H.a(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.p(b,l)
C.a.p(b,p)
C.a.p(b,q)},
ix:function(a,b){var u,t,s=P.bV(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.S)(a),++t)s.p(0,H.q(a[t],b))
return s},
eg:function(a){var u,t={}
if(P.hT(a))return"{...}"
u=new P.am("")
try{C.a.p($.a6,a)
u.a+="{"
t.a=!0
a.w(0,new P.eh(t,u))
u.a+="}"}finally{if(0>=$.a6.length)return H.c($.a6,-1)
$.a6.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
fM:function fM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bx:function bx(a){this.a=a
this.c=this.b=null},
cW:function cW(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ee:function ee(){},
J:function J(){},
ef:function ef(){},
eh:function eh(a,b){this.a=a
this.b=b},
b3:function b3(){},
h7:function h7(){},
ei:function ei(){},
f6:function f6(){},
cE:function cE(){},
eN:function eN(){},
fU:function fU(){},
cX:function cX(){},
d0:function d0(){},
d4:function d4(){},
kG:function(a,b){var u,t,s,r
if(typeof a!=="string")throw H.f(H.aC(a))
u=null
try{u=JSON.parse(a)}catch(s){t=H.Q(s)
r=P.dZ(String(t),null)
throw H.f(r)}r=P.ha(u)
return r},
ha:function(a){var u
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.fH(a,Object.create(null))
for(u=0;u<a.length;++u)a[u]=P.ha(a[u])
return a},
iv:function(a,b,c){return new P.ct(a,b)},
kA:function(a){return a.eu()},
kx:function(a,b,c){var u,t=new P.am(""),s=new P.fJ(t,[],P.kQ())
s.aY(a)
u=t.a
return u.charCodeAt(0)==0?u:u},
fH:function fH(a,b){this.a=a
this.b=b
this.c=null},
fI:function fI(a){this.a=a},
dj:function dj(){},
bO:function bO(){},
ct:function ct(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
e8:function e8(){},
eb:function eb(a){this.b=a},
ea:function ea(a){this.a=a},
fK:function fK(){},
fL:function fL(a,b){this.a=a
this.b=b},
fJ:function fJ(a,b,c){this.c=a
this.a=b
this.b=c},
l1:function(a){var u=H.iC(a,null)
if(u!=null)return u
throw H.f(P.dZ(a,null))},
jX:function(a){if(a instanceof H.bM)return a.n(0)
return"Instance of '"+H.c0(a)+"'"},
bp:function(a,b,c){var u,t=[c],s=H.B([],t)
for(u=J.z(a);u.m();)C.a.p(s,H.q(u.gq(),c))
if(b)return s
return H.u(J.hC(s),"$in",t,"$an")},
kl:function(a){return new H.e5(a,H.k8(a,!1,!0,!1,!1,!1))},
iF:function(a,b,c){var u=J.z(b)
if(!u.m())return a
if(c.length===0){do a+=H.a(u.gq())
while(u.m())}else{a+=H.a(u.gq())
for(;u.m();)a=a+c+H.a(u.gq())}return a},
iy:function(a,b,c,d){return new P.eq(a,b,c,d)},
jT:function(a,b){var u
if(Math.abs(a)<=864e13)u=!1
else u=!0
if(u)H.X(P.bi("DateTime is outside valid range: "+a))
return new P.aF(a,!1)},
jU:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
jV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cm:function(a){if(a>=10)return""+a
return"0"+a},
aH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.G(a)
if(typeof a==="string")return JSON.stringify(a)
return P.jX(a)},
bi:function(a){return new P.aq(!1,null,null,a)},
hv:function(a,b,c){return new P.aq(!0,a,b,c)},
cD:function(a,b){return new P.cB(null,null,!0,a,b,"Value not in range")},
cC:function(a,b,c,d,e){return new P.cB(b,c,!0,a,d,"Invalid value")},
c1:function(a,b){if(typeof a!=="number")return a.at()
if(a<0)throw H.f(P.cC(a,0,null,b,null))},
bn:function(a,b,c,d,e){var u=H.w(e==null?J.af(b):e)
return new P.e_(u,!0,a,c,"Index out of range")},
F:function(a){return new P.f7(a)},
iI:function(a){return new P.f4(a)},
c3:function(a){return new P.aK(a)},
aE:function(a){return new P.dk(a)},
dZ:function(a,b){return new P.dY(a,b)},
jf:function(a,b){var u,t
H.h(b,{func:1,ret:P.W,args:[P.i]})
u=J.hu(a)
t=H.iC(u,null)
if(t==null)t=H.kk(u)
if(t!=null)return t
if(b==null)throw H.f(P.dZ(a,null))
return b.$1(a)},
i1:function(a){H.le(H.a(a))},
er:function er(a,b){this.a=a
this.b=b},
E:function E(){},
aF:function aF(a,b){this.a=a
this.b=b},
a2:function a2(){},
aW:function aW(){},
da:function da(){},
cz:function cz(){},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e_:function e_(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eq:function eq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f7:function f7(a){this.a=a},
f4:function f4(a){this.a=a},
aK:function aK(a){this.a=a},
dk:function dk(a){this.a=a},
ev:function ev(){},
cG:function cG(){},
dt:function dt(a){this.a=a},
ft:function ft(a){this.a=a},
dY:function dY(a,b){this.a=a
this.b=b},
ai:function ai(){},
M:function M(){},
o:function o(){},
au:function au(){},
n:function n(){},
C:function C(){},
W:function W(){},
y:function y(){},
a9:function a9(){},
R:function R(){},
i:function i(){},
am:function am(a){this.a=a},
ax:function ax(){},
dq:function dq(){},
dr:function dr(a){this.a=a},
dT:function dT(a,b){this.a=a
this.b=b},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
bU:function bU(){},
kz:function(a,b,c,d){var u,t
H.hV(b)
H.V(d)
if(H.L(b)){u=[c]
C.a.I(u,d)
d=u}t=P.bp(J.jH(d,P.l4(),null),!0,null)
H.e(a,"$iai")
return P.hO(H.kc(a,t,null))},
hP:function(a,b,c){var u
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(u){H.Q(u)}return!1},
iU:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
hO:function(a){var u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
u=J.k(a)
if(!!u.$iaj)return a.a
if(H.jc(a))return a
if(!!u.$iiH)return a
if(!!u.$iaF)return H.b5(a)
if(!!u.$iai)return P.iT(a,"$dart_jsFunction",new P.hb())
return P.iT(a,"_$dart_jsObject",new P.hc($.ia()))},
iT:function(a,b,c){var u
H.h(c,{func:1,args:[,]})
u=P.iU(a,b)
if(u==null){u=c.$1(a)
P.hP(a,b,u)}return u},
hN:function(a){var u,t
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.jc(a))return a
else if(a instanceof Object&&!!J.k(a).$iiH)return a
else if(a instanceof Date){u=H.w(a.getTime())
if(Math.abs(u)<=864e13)t=!1
else t=!0
if(t)H.X(P.bi("DateTime is outside valid range: "+u))
return new P.aF(u,!1)}else if(a.constructor===$.ia())return a.o
else return P.j1(a)},
j1:function(a){if(typeof a=="function")return P.hQ(a,$.hs(),new P.he())
if(a instanceof Array)return P.hQ(a,$.i9(),new P.hf())
return P.hQ(a,$.i9(),new P.hg())},
hQ:function(a,b,c){var u
H.h(c,{func:1,args:[,]})
u=P.iU(a,b)
if(u==null||!(a instanceof Object)){u=c.$1(a)
P.hP(a,b,u)}return u},
aj:function aj(a){this.a=a},
bT:function bT(a){this.a=a},
bS:function bS(a,b){this.a=a
this.$ti=b},
hb:function hb(){},
hc:function hc(a){this.a=a},
he:function he(){},
hf:function hf(){},
hg:function hg(){},
cV:function cV(){},
iP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aw:function aw(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(){},
db:function db(a){this.a=a},
l:function l(){}},W={
lj:function(){return window},
ii:function(a){var u=document.createElement("a")
if(a!=null)u.href=a
return u},
jW:function(a,b,c){var u=document.body,t=(u&&C.m).J(u,a,b,c)
t.toString
u=W.t
u=new H.b8(new W.a1(t),H.h(new W.dz(),{func:1,ret:P.E,args:[u]}),[u])
return H.e(u.ga1(u),"$iv")},
bQ:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ae(a)
t=u.gcF(a)
if(typeof t==="string")r=u.gcF(a)}catch(s){H.Q(s)}return r},
jY:function(a){var u,t=document.createElement("input"),s=H.e(t,"$iaZ")
try{s.type=a}catch(u){H.Q(u)}return s},
fG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iQ:function(a,b,c,d){var u=W.fG(W.fG(W.fG(W.fG(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
K:function(a,b,c,d,e){var u=W.j2(new W.fs(c),W.j),t=u!=null
if(t&&!0){a.toString
H.h(u,{func:1,args:[W.j]})
if(t)J.jz(a,b,u,!1)}return new W.fr(a,b,u,!1,[e])},
iO:function(a){var u=W.ii(null),t=window.location
u=new W.bb(new W.fT(u,t))
u.d1(a)
return u},
kv:function(a,b,c,d){H.e(a,"$iv")
H.p(b)
H.p(c)
H.e(d,"$ibb")
return!0},
kw:function(a,b,c,d){var u,t,s
H.e(a,"$iv")
H.p(b)
H.p(c)
u=H.e(d,"$ibb").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
iR:function(){var u=P.i,t=P.ix(C.i,u),s=H.d(C.i,0),r=H.h(new W.h4(),{func:1,ret:u,args:[s]}),q=H.B(["TEMPLATE"],[u])
t=new W.h3(t,P.bV(u),P.bV(u),P.bV(u),null)
t.d2(null,new H.b4(C.i,r,[s,u]),q,null)
return t},
iS:function(a){var u
if("postMessage" in a){u=W.ku(a)
return u}else return H.e(a,"$iaX")},
ku:function(a){if(a===window)return H.e(a,"$iiM")
else return new W.fm()},
j2:function(a,b){var u
H.h(a,{func:1,ret:-1,args:[b]})
u=$.H
if(u===C.d)return a
return u.dV(a,b)},
m:function m(){},
bI:function bI(){},
d9:function d9(){},
bJ:function bJ(){},
bk:function bk(){},
aS:function aS(){},
aT:function aT(){},
aU:function aU(){},
aV:function aV(){},
bP:function bP(){},
ds:function ds(){},
bl:function bl(){},
du:function du(){},
cn:function cn(){},
dv:function dv(){},
fi:function fi(a,b){this.a=a
this.b=b},
a5:function a5(a,b){this.a=a
this.$ti=b},
v:function v(){},
dz:function dz(){},
j:function j(){},
aX:function aX(){},
dX:function dX(){},
bm:function bm(){},
bR:function bR(){},
aZ:function aZ(){},
aJ:function aJ(){},
cu:function cu(){},
A:function A(){},
a1:function a1(a){this.a=a},
t:function t(){},
c_:function c_(){},
eJ:function eJ(){},
cH:function cH(){},
eT:function eT(){},
eU:function eU(){},
c5:function c5(){},
aM:function aM(){},
b6:function b6(){},
b9:function b9(){},
f9:function f9(a){this.a=a},
aN:function aN(){},
c6:function c6(){},
cP:function cP(){},
cY:function cY(){},
ff:function ff(){},
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
cR:function cR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fr:function fr(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fs:function fs(a){this.a=a},
d3:function d3(a,b){this.a=null
this.b=a
this.$ti=b},
fY:function fY(a,b){this.a=a
this.b=b},
bb:function bb(a){this.a=a},
ac:function ac(){},
cy:function cy(a){this.a=a},
et:function et(a){this.a=a},
es:function es(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(){},
fV:function fV(){},
fW:function fW(){},
h3:function h3(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
h4:function h4(){},
fZ:function fZ(){},
cp:function cp(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
fm:function fm(){},
a4:function a4(){},
fT:function fT(a,b){this.a=a
this.b=b},
d5:function d5(a){this.a=a},
h8:function h8(a){this.a=a},
cO:function cO(){},
cT:function cT(){},
cU:function cU(){},
cZ:function cZ(){},
d_:function d_(){},
d6:function d6(){},
d7:function d7(){}},U={
ik:function(a,b,c){var u=P.M,t=U.ak,s=$.a7()
if(typeof s!=="number")return H.b(s)
s=new U.ag(b,c,new H.I([u,t]),new H.I([u,t]),"400 "+H.a(14*s)+"px 'Poppins', sans-serif",a)
s.a3(a,b,c)
return s},
il:function(a,b){var u,t,s,r,q,p,o="clauses",n="type",m="properties",l=b.h(0,"action"),k=l==null?"":J.G(l),j=H.w(b.h(0,"id"))
if(!!J.k(b.h(0,o)).$in)u=U.ij(a,j,k)
else if(J.ap(b.h(0,n),"clause")){l=P.M
t=U.ak
s=$.a7()
if(typeof s!=="number")return H.b(s)
u=new U.ah(j,k,new H.I([l,t]),new H.I([l,t]),"400 "+H.a(14*s)+"px 'Poppins', sans-serif",a)
u.a3(a,j,k)
u.id=!1}else u=U.ik(a,j,k)
b.i(0,"id",u.a)
l=b.h(0,n)
u.c=l==null?"":J.G(l)
l=b.h(0,"format")
u.d=l==null?null:J.G(l)
l=b.h(0,"blockColor")
t=u.dx
u.dx=l==null?t:J.G(l)
l=b.h(0,"textColor")
t=u.dy
u.dy=l==null?t:J.G(l)
l=b.h(0,"borderColor")
t=u.fr
u.fr=l==null?t:J.G(l)
l=b.h(0,"font")
t=u.fx
u.fx=l==null?t:J.G(l)
u.id=!U.i3(b.h(0,"start"),!1)
u.fy=U.i3(b.h(0,"required"),u.fy)
if(!!J.k(b.h(0,"params")).$in)for(l=J.z(H.P(b.h(0,"params"),"$io")),t=u.cx;l.m();){r=U.hI(u,H.e(l.gq(),"$ir"))
t.i(0,r.a,r)}if(!!J.k(b.h(0,m)).$in)for(l=J.z(H.P(b.h(0,m),"$io")),t=u.cy;l.m();){q=U.hI(u,H.e(l.gq(),"$ir"))
t.i(0,q.a,q)}l=u.cy.a
t=$.x()
if(typeof t!=="number")return H.b(t)
u.x=(1+l)*t
l=!!u.$ibj
if(l&&!!J.k(b.h(0,o)).$in)for(t=J.z(H.P(b.h(0,o),"$io"));t.m();){p=t.gq()
J.jy(p,n,"clause")
u.bH(H.jb(U.il(a,H.e(p,"$ir")),"$iah"))}if(l&&b.h(0,"end")!=null){l=u.N
t=J.bG(b.h(0,"end"),"format")
l.d=t==null?null:J.G(t)}return u},
ij:function(a,b,c){var u,t,s="px 'Poppins', sans-serif",r=H.B([],[U.ah]),q=P.M,p=U.ak,o=$.a7()
if(typeof o!=="number")return H.b(o)
u=new U.bj(r,b,c,new H.I([q,p]),new H.I([q,p]),"400 "+H.a(14*o)+s,a)
u.a3(a,b,c)
t="end-"+H.a(c)
q=new U.co(null,t,new H.I([q,p]),new H.I([q,p]),"400 "+H.a(14*o)+s,a)
q.a3(a,null,t)
q.id=!1
t=$.x()
if(typeof t!=="number")return t.aa()
q.x=t/2
q.d=""
u.N=q
q.K=u
C.a.p(r,q)
u.ry=u.N
return u},
jR:function(a,b){var u
if($.ck==null){u=new H.I([P.i,U.cj])
$.ck=u
u.i(0,"NetLogo",new U.ep())
$.ck.i(0,"plain",new U.eA())}if($.ck.t(a))return $.ck.h(0,a).c2(b)
else return C.h.bo(b,null)},
iA:function(a,b){var u=$.x()
if(typeof u!=="number")return u.l()
u=new U.ak(a,u*0.6)
u.ab(a,b)
return u},
hI:function(a,b){var u=b.h(0,"type")
switch(u==null?"num":J.G(u)){case"int":u=$.x()
if(typeof u!=="number")return u.l()
u=new U.e0(a,u*0.6)
u.ab(a,b)
u.bF(a,b)
u.cy=1
return u
case"num":return U.hA(a,b)
case"bool":return U.hA(a,b)
case"range":u=$.x()
if(typeof u!=="number")return u.l()
u=new U.eD(a,u*0.6)
u.ab(a,b)
u.bF(a,b)
u.r1=U.aP(b.h(0,"min"),u.r1)
u.r2=U.aP(b.h(0,"max"),u.r2)
return u
case"select":return U.iD(a,b)
case"text":return U.iA(a,b)
default:return U.iA(a,b)}},
iD:function(a,b){var u,t="values",s=$.x()
if(typeof s!=="number")return s.l()
s=new U.eK([],a,s*0.6)
s.ab(a,b)
if(!!J.k(b.h(0,t)).$in&&J.ic(J.af(b.h(0,t)),0)){u=H.V(b.h(0,t))
s.cx=u
s.c=J.bG(u,0)}return s},
hA:function(a,b){var u,t=$.x()
if(typeof t!=="number")return t.l()
t=new U.dB(a,t*0.6)
t.ab(a,b)
u=new U.dA(a.go)
u.c=new U.as(u,H.p(b.h(0,"type")),H.B([],[U.as]))
t.cx=u
u.al(t.c)
return t},
kp:function(a){var u,t="version"
H.u(a,"$ir",[P.i,P.y],"$ar")
u=H.w(H.L(a.t(t))?a.h(0,t):0)
if(typeof u!=="number")return u.as()
if(u>1)throw H.f("Somehow the given model version ("+u+") is greater than the supported NetTango version (1).")
if(u<1)U.iL(a)
a.i(0,t,1)},
iK:function(a,b){var u="params",t="properties"
H.u(b,"$ir",[P.i,P.y],"$ar")
if(H.L(b.t(u))&&!!J.k(b.h(0,u)).$in)a=U.iJ(a,H.V(b.h(0,u)))
return H.L(b.t(t))&&!!J.k(b.h(0,t)).$in?U.iJ(a,H.V(b.h(0,t))):a},
iJ:function(a,b){var u,t
for(u=J.z(b),t=[P.i,P.y];u.m();){H.u(u.gq(),"$ir",t,"$ar").i(0,"id",a)
if(typeof a!=="number")return a.j();++a}return a},
iL:function(a){var u,t,s,r,q="blocks",p="program",o="chains",n=P.i,m=P.M,l=new H.I([n,m]),k=new H.I([m,m])
if(!H.L(a.t(q))||!J.k(a.h(0,q)).$in)return
for(m=J.z(H.P(a.h(0,q),"$io")),n=[n,P.y],u=0;m.m();){t=H.u(m.gq(),"$ir",n,"$ar")
if(!H.L(t.t("action")))continue
s=l.a
t.i(0,"id",s)
l.i(0,H.p(t.h(0,"action")),s)
k.i(0,s,u)
u=U.iK(u,t)}if(!H.L(a.t(p))||!J.k(a.h(0,p)).$ir)return
r=H.e(a.h(0,p),"$ir")
if(!H.L(r.t(o))||!J.k(r.h(0,o)).$in)return
for(n=J.z(H.P(r.h(0,o),"$io"));n.m();)for(m=J.z(H.V(n.gq()));m.m();)U.hK(l,k,H.e(m.gq(),"$ir"))},
hK:function(a,b,c){var u,t,s,r,q="children",p="clauses",o=P.i,n=P.M
H.u(a,"$ir",[o,n],"$ar")
H.u(b,"$ir",[n,n],"$ar")
if(H.L(c.t("action"))){u=H.p(c.h(0,"action"))
if(a.t(u)){t=a.h(0,u)
c.i(0,"id",t)
U.iK(b.h(0,t),H.u(c,"$ir",[o,P.y],"$ar"))}}if(H.L(c.t(q))&&!!J.k(c.h(0,q)).$in)for(o=J.z(H.P(c.h(0,q),"$io"));o.m();){s=o.gq()
if(!!J.k(s).$ir)U.hK(a,b,s)}if(H.L(c.t(p))&&!!J.k(c.h(0,p)).$in)for(o=J.z(H.P(c.h(0,p),"$io"));o.m();){r=o.gq()
n=J.k(r)
if(!!n.$ir&&H.L(r.t(q))&&!!J.k(r.h(0,q)).$in)for(n=J.z(H.P(n.h(r,q),"$io"));n.m();)U.hK(a,b,H.e(n.gq(),"$ir"))}},
iq:function(a,b){var u=H.B([],[U.ag]),t=H.B([],[U.cK]),s=P.M,r=U.bt,q=H.B([],[r]),p=[P.a2]
p=new U.bN(1,a,u,b,[],[],new U.eX(t,new H.I([s,U.cJ])),q,new H.I([s,r]),new U.bq(H.B([1,0,0,0,1,0,0,0,1],p)),new U.bq(H.B([1,0,0,0,1,0,0,0,1],p)),new P.aF(Date.now(),!1))
p.d_(a,b)
return p},
kC:function(a,b){var u,t="version"
H.u(b,"$ir",[P.i,P.y],"$ar")
u=H.w(H.L(b.t(t))?b.h(0,t):0)
if(typeof u!=="number")return u.as()
if(u>1)H.X("Somehow the given model version ("+u+") is greater than the supported NetTango version (1).")
if(u<1)U.iL(b)
b.i(0,t,1)
$.Y.i(0,a,U.iq(a,b))
$.Y.h(0,a).F()},
k3:function(a,b){var u
H.p(a)
H.p(b)
if($.Y.h(0,a) instanceof U.bN)$.Y.h(0,a).el()
u=C.h.cm(0,b,null)
if(!!J.k(u).$ir)U.kC(a,u)},
k2:function(a){var u,t,s,r,q=C.h.cm(0,H.p(a),null)
if(!!J.k(q).$ir)for(u=J.z(q.gC()),t=[P.i,P.y];u.m();){s=u.gq()
if($.Y.h(0,s) instanceof U.bN){r=$.Y.h(0,s)
C.a.sk(r.a,0)
C.a.sk(r.x,0)
C.a.D(r.dy.c,r)}if(!!J.k(q.h(0,s)).$ir){H.p(s)
r=H.e(q.h(0,s),"$ir")
U.kp(H.u(r,"$ir",t,"$ar"))
$.Y.i(0,s,U.iq(s,r))
$.Y.h(0,s).F()}}},
k1:function(a,b){H.p(a)
H.p(b)
if($.Y.t(a))return U.jR(b,$.Y.h(0,a).bp())
return},
k5:function(a){var u
H.p(a)
if($.Y.t(a)){u=$.Y.h(0,a).z
u.i(0,"program",$.Y.h(0,a).bp())
return C.h.bo(u,null)}},
k4:function(){var u,t,s,r=P.hG()
for(u=$.Y,u=new H.av(u,[H.d(u,0)]),u=u.gv(u);u.m();){t=u.d
s=$.Y.h(0,t).z
s.i(0,"program",$.Y.h(0,t).bp())
r.i(0,t,s)}return C.h.bo(r,null)},
je:function(){var u=$.ib()
u.i(0,"NetTango_InitWorkspace",U.lb())
u.i(0,"NetTango_InitAllWorkspaces",U.la())
u.i(0,"NetTango_ExportCode",U.l9())
u.i(0,"NetTango_Save",U.ld())
u.i(0,"NetTango_SaveAll",U.lc())},
hx:function(a){var u,t,s=new U.cl()
s.a=-1
u=J.ae(a)
t=u.gcv(a).a
t.toString
s.d=s.c=t
u=u.gcv(a).b
u.toString
s.f=s.e=u
s.Q=!0
return s},
i4:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{u=P.l1(a)
return u}catch(t){if(!!J.k(H.Q(t)).$ihz)return b
else throw t}return b},
aP:function(a,b){var u,t
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{u=P.jf(a,null)
return u}catch(t){if(!!J.k(H.Q(t)).$ihz)return b
else throw t}return b},
i3:function(a,b){if(a==null)return b
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
ag:function ag(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.x=_.r=_.f=_.e=0
_.z=_.y=null
_.Q=0
_.ch=null
_.cx=c
_.cy=d
_.db=0
_.dx="#6b9bc3"
_.dy="white"
_.fr="rgba(255, 255, 255, 0.6)"
_.fx=e
_.fy=!1
_.go=f
_.id=!0
_.k1=!1
_.r1=_.k4=_.k3=_.k2=null
_.r2=!1
_.rx=!0},
dp:function dp(){},
ah:function ah(a,b,c,d,e,f){var _=this
_.ry=_.K=null
_.a=a
_.b=b
_.d=_.c=null
_.x=_.r=_.f=_.e=0
_.z=_.y=null
_.Q=0
_.ch=null
_.cx=c
_.cy=d
_.db=0
_.dx="#6b9bc3"
_.dy="white"
_.fr="rgba(255, 255, 255, 0.6)"
_.fx=e
_.fy=!1
_.go=f
_.id=!0
_.k1=!1
_.r1=_.k4=_.k3=_.k2=null
_.r2=!1
_.rx=!0},
co:function co(a,b,c,d,e,f){var _=this
_.ry=_.K=null
_.a=a
_.b=b
_.d=_.c=null
_.x=_.r=_.f=_.e=0
_.z=_.y=null
_.Q=0
_.ch=null
_.cx=c
_.cy=d
_.db=0
_.dx="#6b9bc3"
_.dy="white"
_.fr="rgba(255, 255, 255, 0.6)"
_.fx=e
_.fy=!1
_.go=f
_.id=!0
_.k1=!1
_.r1=_.k4=_.k3=_.k2=null
_.r2=!1
_.rx=!0},
bj:function bj(a,b,c,d,e,f,g){var _=this
_.K=a
_.ry=_.N=null
_.a=b
_.b=c
_.d=_.c=null
_.x=_.r=_.f=_.e=0
_.z=_.y=null
_.Q=0
_.ch=null
_.cx=d
_.cy=e
_.db=0
_.dx="#6b9bc3"
_.dy="white"
_.fr="rgba(255, 255, 255, 0.6)"
_.fx=f
_.fy=!1
_.go=g
_.id=!0
_.k1=!1
_.r1=_.k4=_.k3=_.k2=null
_.r2=!1
_.rx=!0},
as:function as(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c},
dM:function dM(a,b){this.a=a
this.b=b},
dN:function dN(a){this.a=a},
dO:function dO(a){this.a=a},
dL:function dL(a,b){this.a=a
this.b=b},
dP:function dP(){},
dS:function dS(a,b){this.a=a
this.b=b},
dQ:function dQ(){},
dR:function dR(a,b){this.a=a
this.b=b},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a){this.a=a
this.c=this.b=null},
cj:function cj(){},
eA:function eA(){},
ep:function ep(){},
dc:function dc(a,b,c){this.a=a
this.b=b
this.d=c},
dd:function dd(a){this.a=a},
al:function al(a,b,c){var _=this
_.a=a
_.c=_.b=null
_.d=b
_.e=c},
ak:function ak(a,b){var _=this
_.a=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""
_.y=_.x=0
_.z=28
_.Q=b
_.ch=!1},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a){this.a=a},
ey:function ey(a,b){this.a=a
this.b=b},
ez:function ez(a,b){this.a=a
this.b=b},
cA:function cA(){},
e0:function e0(a,b){var _=this
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
eD:function eD(a,b){var _=this
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
eE:function eE(){},
eF:function eF(a){this.a=a},
eG:function eG(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){var _=this
_.cx=a
_.a=null
_.b=b
_.d=_.c=null
_.e="int"
_.r=_.f=""
_.y=_.x=0
_.z=28
_.Q=c
_.ch=!1},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(a){this.a=a},
dB:function dB(a,b){var _=this
_.a=_.cx=null
_.b=a
_.d=_.c=null
_.e="int"
_.r=_.f=""
_.y=_.x=0
_.z=28
_.Q=b
_.ch=!1},
dF:function dF(a,b){this.a=a
this.b=b},
dG:function dG(){},
dE:function dE(){},
dH:function dH(){},
dD:function dD(){},
dI:function dI(a){this.a=a},
dJ:function dJ(){},
dC:function dC(){},
bN:function bN(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.f=a
_.r=b
_.x=c
_.y=0
_.z=d
_.cx=_.ch=_.Q=null
_.cy=e
_.db=f
_.dx=null
_.dy=g
_.a=h
_.b=i
_.c=j
_.d=k
_.e=l},
di:function di(a){this.a=a},
dh:function dh(a){this.a=a},
dg:function dg(){},
bq:function bq(a){this.a=a},
eX:function eX(a,b){this.a=!1
this.c=a
this.d=b},
eY:function eY(a){this.a=a},
eZ:function eZ(a){this.a=a},
f_:function f_(a){this.a=a},
f0:function f0(a){this.a=a},
f1:function f1(){},
cK:function cK(){},
cJ:function cJ(a,b){this.a=a
this.b=b},
bt:function bt(){},
cl:function cl(){var _=this
_.a=null
_.b=-1
_.f=_.e=_.d=_.c=0
_.Q=_.z=_.y=_.x=!1}}
var w=[C,H,J,P,W,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hE.prototype={}
J.N.prototype={
L:function(a,b){return a===b},
gu:function(a){return H.bs(a)},
n:function(a){return"Instance of '"+H.c0(a)+"'"},
aU:function(a,b){H.e(b,"$ihB")
throw H.f(P.iy(a,b.gct(),b.gcA(),b.gcu()))}}
J.e2.prototype={
n:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$iE:1}
J.e4.prototype={
L:function(a,b){return null==b},
n:function(a){return"null"},
gu:function(a){return 0},
aU:function(a,b){return this.cR(a,H.e(b,"$ihB"))},
$iC:1}
J.cs.prototype={
gu:function(a){return 0},
n:function(a){return String(a)}}
J.eB.prototype={}
J.b7.prototype={}
J.b1.prototype={
n:function(a){var u=a[$.hs()]
if(u==null)return this.cU(a)
return"JavaScript function for "+H.a(J.G(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iai:1}
J.b_.prototype={
p:function(a,b){H.q(b,H.d(a,0))
if(!!a.fixed$length)H.X(P.F("add"))
a.push(b)},
W:function(a,b){var u
if(!!a.fixed$length)H.X(P.F("removeAt"))
u=a.length
if(b>=u)throw H.f(P.cD(b,null))
return a.splice(b,1)[0]},
D:function(a,b){var u
if(!!a.fixed$length)H.X(P.F("remove"))
for(u=0;u<a.length;++u)if(J.ap(a[u],b)){a.splice(u,1)
return!0}return!1},
I:function(a,b){var u
H.u(b,"$io",[H.d(a,0)],"$ao")
if(!!a.fixed$length)H.X(P.F("addAll"))
for(u=J.z(b);u.m();)a.push(u.gq())},
w:function(a,b){var u,t
H.h(b,{func:1,ret:-1,args:[H.d(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.f(P.aE(a))}},
cs:function(a,b,c){var u=H.d(a,0)
return new H.b4(a,H.h(b,{func:1,ret:c,args:[u]}),[u,c])},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
cf:function(a,b){var u,t
H.h(b,{func:1,ret:P.E,args:[H.d(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.L(b.$1(a[t])))return!0
if(a.length!==u)throw H.f(P.aE(a))}return!1},
B:function(a,b){var u
for(u=0;u<a.length;++u)if(J.ap(a[u],b))return!0
return!1},
gG:function(a){return a.length===0},
gbq:function(a){return a.length!==0},
n:function(a){return P.e1(a,"[","]")},
gv:function(a){return new J.aR(a,a.length,[H.d(a,0)])},
gu:function(a){return H.bs(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.X(P.F("set length"))
if(b<0)throw H.f(P.cC(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.w(b)
if(b>=a.length||b<0)throw H.f(H.bd(a,b))
return a[b]},
i:function(a,b,c){H.w(b)
H.q(c,H.d(a,0))
if(!!a.immutable$list)H.X(P.F("indexed set"))
if(b>=a.length||!1)throw H.f(H.bd(a,b))
a[b]=c},
$iD:1,
$io:1,
$in:1}
J.hD.prototype={}
J.aR.prototype={
gq:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.f(H.S(s))
u=t.c
if(u>=r){t.sbW(null)
return!1}t.sbW(s[u]);++t.c
return!0},
sbW:function(a){this.d=H.q(a,H.d(this,0))},
$iau:1}
J.bo.prototype={
aW:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.f(P.F(""+a+".toInt()"))},
aR:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.f(P.F(""+a+".floor()"))},
cC:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.F(""+a+".round()"))},
ek:function(a,b){var u,t
if(b>20)throw H.f(P.cC(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
n:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
j:function(a,b){if(typeof b!=="number")throw H.f(H.aC(b))
return a+b},
l:function(a,b){if(typeof b!=="number")throw H.f(H.aC(b))
return a*b},
er:function(a,b){return(a|0)===a?a/b|0:this.dK(a,b)},
dK:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.f(P.F("Result of truncating division is "+H.a(u)+": "+H.a(a)+" ~/ "+b))},
bk:function(a,b){var u
if(a>0)u=this.dI(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dI:function(a,b){return b>31?0:a>>>b},
as:function(a,b){if(typeof b!=="number")throw H.f(H.aC(b))
return a>b},
$ia2:1,
$iW:1}
J.cr.prototype={$iM:1}
J.cq.prototype={}
J.b0.prototype={
cl:function(a,b){if(b<0)throw H.f(H.bd(a,b))
if(b>=a.length)H.X(H.bd(a,b))
return a.charCodeAt(b)},
av:function(a,b){if(b>=a.length)throw H.f(H.bd(a,b))
return a.charCodeAt(b)},
j:function(a,b){if(typeof b!=="string")throw H.f(P.hv(b,null,null))
return a+b},
e0:function(a,b){var u=b.length,t=a.length
if(u>t)return!1
return b===this.bC(a,t-u)},
cO:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
a2:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.cD(b,null))
if(b>c)throw H.f(P.cD(b,null))
if(c>a.length)throw H.f(P.cD(c,null))
return a.substring(b,c)},
bC:function(a,b){return this.a2(a,b,null)},
ej:function(a){return a.toLowerCase()},
cJ:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.av(r,0)===133){u=J.k6(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.cl(r,t)===133?J.k7(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
l:function(a,b){var u,t
H.w(b)
if(typeof b!=="number")return H.b(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
n:function(a){return a},
gu:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
h:function(a,b){H.w(b)
if(b>=a.length||!1)throw H.f(H.bd(a,b))
return a[b]},
$iiB:1,
$ii:1}
H.D.prototype={}
H.b2.prototype={
gv:function(a){var u=this
return new H.bW(u,u.gk(u),[H.be(u,"b2",0)])},
gG:function(a){return this.gk(this)===0},
aX:function(a,b){return this.cT(0,H.h(b,{func:1,ret:P.E,args:[H.be(this,"b2",0)]}))}}
H.bW.prototype={
gq:function(){return this.d},
m:function(){var u,t=this,s=t.a,r=J.O(s),q=r.gk(s)
if(t.b!==q)throw H.f(P.aE(s))
u=t.c
if(u>=q){t.sac(null)
return!1}t.sac(r.E(s,u));++t.c
return!0},
sac:function(a){this.d=H.q(a,H.d(this,0))},
$iau:1}
H.bX.prototype={
gv:function(a){return new H.a0(J.z(this.a),this.b,this.$ti)},
gk:function(a){return J.af(this.a)},
E:function(a,b){return this.b.$1(J.ci(this.a,b))},
$ao:function(a,b){return[b]}}
H.dw.prototype={$iD:1,
$aD:function(a,b){return[b]}}
H.a0.prototype={
m:function(){var u=this,t=u.b
if(t.m()){u.sac(u.c.$1(t.gq()))
return!0}u.sac(null)
return!1},
gq:function(){return this.a},
sac:function(a){this.a=H.q(a,H.d(this,1))},
$aau:function(a,b){return[b]}}
H.b4.prototype={
gk:function(a){return J.af(this.a)},
E:function(a,b){return this.b.$1(J.ci(this.a,b))},
$aD:function(a,b){return[b]},
$ab2:function(a,b){return[b]},
$ao:function(a,b){return[b]}}
H.b8.prototype={
gv:function(a){return new H.f8(J.z(this.a),this.b,this.$ti)}}
H.f8.prototype={
m:function(){var u,t
for(u=this.a,t=this.b;u.m();)if(H.L(t.$1(u.gq())))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cI.prototype={
gv:function(a){return new H.eV(J.z(this.a),this.b,this.$ti)}}
H.dy.prototype={
gk:function(a){var u=J.af(this.a),t=this.b
if(u>t)return t
return u},
$iD:1}
H.eV.prototype={
m:function(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gq:function(){if(this.b<0)return
return this.a.gq()}}
H.cF.prototype={
gv:function(a){return new H.eO(J.z(this.a),this.b,this.$ti)}}
H.dx.prototype={
gk:function(a){var u=J.af(this.a)-this.b
if(u>=0)return u
return 0},
$iD:1}
H.eO.prototype={
m:function(){var u,t
for(u=this.a,t=0;t<this.b;++t)u.m()
this.b=0
return u.m()},
gq:function(){return this.a.gq()}}
H.aY.prototype={
sk:function(a,b){throw H.f(P.F("Cannot change the length of a fixed-length list"))},
p:function(a,b){H.q(b,H.aO(this,a,"aY",0))
throw H.f(P.F("Cannot add to a fixed-length list"))},
W:function(a,b){throw H.f(P.F("Cannot remove from a fixed-length list"))}}
H.c4.prototype={
gu:function(a){var u=this._hashCode
if(u!=null)return u
u=536870911&664597*J.aQ(this.a)
this._hashCode=u
return u},
n:function(a){return'Symbol("'+H.a(this.a)+'")'},
L:function(a,b){if(b==null)return!1
return b instanceof H.c4&&this.a==b.a},
$iax:1}
H.dm.prototype={}
H.dl.prototype={
gG:function(a){return this.gk(this)===0},
n:function(a){return P.eg(this)},
i:function(a,b,c){H.q(b,H.d(this,0))
H.q(c,H.d(this,1))
return H.jS()},
$ir:1}
H.dn.prototype={
gk:function(a){return this.a},
t:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.t(b))return
return this.bY(b)},
bY:function(a){return this.b[H.p(a)]},
w:function(a,b){var u,t,s,r,q=this,p=H.d(q,1)
H.h(b,{func:1,ret:-1,args:[H.d(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.q(q.bY(r),p))}},
gC:function(){return new H.fk(this,[H.d(this,0)])}}
H.fk.prototype={
gv:function(a){var u=this.a.c
return new J.aR(u,u.length,[H.d(u,0)])},
gk:function(a){return this.a.c.length}}
H.e3.prototype={
gct:function(){var u=this.a
return u},
gcA:function(){var u,t,s,r,q=this
if(q.c===1)return C.t
u=q.d
t=u.length-q.e.length-q.f
if(t===0)return C.t
s=[]
for(r=0;r<t;++r){if(r>=u.length)return H.c(u,r)
s.push(u[r])}s.fixed$length=Array
s.immutable$list=Array
return s},
gcu:function(){var u,t,s,r,q,p,o,n,m,l=this
if(l.c!==0)return C.u
u=l.e
t=u.length
s=l.d
r=s.length-t-l.f
if(t===0)return C.u
q=P.ax
p=new H.I([q,null])
for(o=0;o<t;++o){if(o>=u.length)return H.c(u,o)
n=u[o]
m=r+o
if(m<0||m>=s.length)return H.c(s,m)
p.i(0,new H.c4(n),s[m])}return new H.dm(p,[q,null])},
$ihB:1}
H.eC.prototype={
$2:function(a,b){var u
H.p(a)
u=this.a
u.b=u.b+"$"+H.a(a)
C.a.p(this.b,a)
C.a.p(this.c,b);++u.a},
$S:18}
H.f2.prototype={
T:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.eu.prototype={
n:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.a(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.e7.prototype={
n:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.a(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.a(t.a)+")"
return s+r+"' on '"+u+"' ("+H.a(t.a)+")"}}
H.f5.prototype={
n:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hq.prototype={
$1:function(a){if(!!J.k(a).$iaW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:3}
H.d2.prototype={
n:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iR:1}
H.bM.prototype={
n:function(a){return"Closure '"+H.c0(this).trim()+"'"},
$iai:1,
gep:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.eW.prototype={}
H.eP.prototype={
n:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bF(u)+"'"}}
H.bK.prototype={
L:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bK))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gu:function(a){var u,t=this.c
if(t==null)u=H.bs(this.a)
else u=typeof t!=="object"?J.aQ(t):H.bs(t)
return(u^H.bs(this.b))>>>0},
n:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.c0(u)+"'")}}
H.cL.prototype={
n:function(a){return this.a}}
H.df.prototype={
n:function(a){return this.a}}
H.eI.prototype={
n:function(a){return"RuntimeError: "+H.a(this.a)}}
H.fa.prototype={
n:function(a){return"Assertion failed: "+P.aH(this.a)}}
H.I.prototype={
gk:function(a){return this.a},
gG:function(a){return this.a===0},
gC:function(){return new H.av(this,[H.d(this,0)])},
gP:function(a){var u=this,t=H.d(u,0)
return H.k9(new H.av(u,[t]),new H.e6(u),t,H.d(u,1))},
t:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.bV(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.bV(t,a)}else return s.e3(a)},
e3:function(a){var u=this.d
if(u==null)return!1
return this.aS(this.ay(u,J.aQ(a)&0x3ffffff),a)>=0},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.az(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.az(r,b)
s=t==null?null:t.b
return s}else return q.e4(b)},
e4:function(a){var u,t,s=this.d
if(s==null)return
u=this.ay(s,J.aQ(a)&0x3ffffff)
t=this.aS(u,a)
if(t<0)return
return u[t].b},
i:function(a,b,c){var u,t,s,r,q,p,o=this
H.q(b,H.d(o,0))
H.q(c,H.d(o,1))
if(typeof b==="string"){u=o.b
o.bI(u==null?o.b=o.bb():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bI(t==null?o.c=o.bb():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bb()
r=J.aQ(b)&0x3ffffff
q=o.ay(s,r)
if(q==null)o.bj(s,r,[o.bc(b,c)])
else{p=o.aS(q,b)
if(p>=0)q[p].b=c
else q.push(o.bc(b,c))}}},
D:function(a,b){var u=this.e5(b)
return u},
e5:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=a.gu(a)&0x3ffffff
t=q.ay(p,u)
s=q.aS(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.dM(r)
if(t.length===0)q.bX(p,u)
return r.b},
aL:function(a){var u=this
if(u.a>0){u.b=u.c=u.d=u.e=u.f=null
u.a=0
u.ba()}},
w:function(a,b){var u,t,s=this
H.h(b,{func:1,ret:-1,args:[H.d(s,0),H.d(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.f(P.aE(s))
u=u.c}},
bI:function(a,b,c){var u,t=this
H.q(b,H.d(t,0))
H.q(c,H.d(t,1))
u=t.az(a,b)
if(u==null)t.bj(a,b,t.bc(b,c))
else u.b=c},
ba:function(){this.r=this.r+1&67108863},
bc:function(a,b){var u,t=this,s=new H.ec(H.q(a,H.d(t,0)),H.q(b,H.d(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.ba()
return s},
dM:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.ba()},
aS:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.ap(a[t].a,b))return t
return-1},
n:function(a){return P.eg(this)},
az:function(a,b){return a[b]},
ay:function(a,b){return a[b]},
bj:function(a,b,c){a[b]=c},
bX:function(a,b){delete a[b]},
bV:function(a,b){return this.az(a,b)!=null},
bb:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bj(t,u,t)
this.bX(t,u)
return t}}
H.e6.prototype={
$1:function(a){var u=this.a
return u.h(0,H.q(a,H.d(u,0)))},
$S:function(){var u=this.a
return{func:1,ret:H.d(u,1),args:[H.d(u,0)]}}}
H.ec.prototype={}
H.av.prototype={
gk:function(a){return this.a.a},
gG:function(a){return this.a.a===0},
gv:function(a){var u=this.a,t=new H.ed(u,u.r,this.$ti)
t.c=u.e
return t},
B:function(a,b){return this.a.t(b)}}
H.ed.prototype={
gq:function(){return this.d},
m:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aE(t))
else{t=u.c
if(t==null){u.sbG(null)
return!1}else{u.sbG(t.a)
u.c=u.c.c
return!0}}},
sbG:function(a){this.d=H.q(a,H.d(this,0))},
$iau:1}
H.hk.prototype={
$1:function(a){return this.a(a)},
$S:3}
H.hl.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.hm.prototype={
$1:function(a){return this.a(H.p(a))},
$S:39}
H.e5.prototype={
n:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$iiB:1}
H.bZ.prototype={$iiH:1}
H.cv.prototype={
gk:function(a){return a.length},
$iaI:1,
$aaI:function(){}}
H.bY.prototype={
h:function(a,b){H.w(b)
H.aB(b,a,a.length)
return a[b]},
i:function(a,b,c){H.w(b)
H.kR(c)
H.aB(b,a,a.length)
a[b]=c},
$iD:1,
$aD:function(){return[P.a2]},
$aaY:function(){return[P.a2]},
$aJ:function(){return[P.a2]},
$io:1,
$ao:function(){return[P.a2]},
$in:1,
$an:function(){return[P.a2]}}
H.cw.prototype={
i:function(a,b,c){H.w(b)
H.w(c)
H.aB(b,a,a.length)
a[b]=c},
$iD:1,
$aD:function(){return[P.M]},
$aaY:function(){return[P.M]},
$aJ:function(){return[P.M]},
$io:1,
$ao:function(){return[P.M]},
$in:1,
$an:function(){return[P.M]}}
H.ej.prototype={
h:function(a,b){H.w(b)
H.aB(b,a,a.length)
return a[b]}}
H.ek.prototype={
h:function(a,b){H.w(b)
H.aB(b,a,a.length)
return a[b]}}
H.el.prototype={
h:function(a,b){H.w(b)
H.aB(b,a,a.length)
return a[b]}}
H.em.prototype={
h:function(a,b){H.w(b)
H.aB(b,a,a.length)
return a[b]}}
H.en.prototype={
h:function(a,b){H.w(b)
H.aB(b,a,a.length)
return a[b]}}
H.cx.prototype={
gk:function(a){return a.length},
h:function(a,b){H.w(b)
H.aB(b,a,a.length)
return a[b]}}
H.eo.prototype={
gk:function(a){return a.length},
h:function(a,b){H.w(b)
H.aB(b,a,a.length)
return a[b]}}
H.c7.prototype={}
H.c8.prototype={}
H.c9.prototype={}
H.ca.prototype={}
P.fc.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:8}
P.fb.prototype={
$1:function(a){var u,t
this.a.a=H.h(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.fd.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.fe.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:2}
P.h5.prototype={
d3:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bB(new P.h6(this,b),0),a)
else throw H.f(P.F("`setTimeout()` not found."))}}
P.h6.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:1}
P.fg.prototype={}
P.T.prototype={
bd:function(){},
be:function(){},
sai:function(a){this.dy=H.u(a,"$iT",this.$ti,"$aT")},
saC:function(a){this.fr=H.u(a,"$iT",this.$ti,"$aT")}}
P.bu.prototype={
gaA:function(){return this.c<4},
dj:function(){var u=this.r
if(u!=null)return u
return this.r=new P.U($.H,[null])},
cc:function(a){var u,t
H.u(a,"$iT",this.$ti,"$aT")
u=a.fr
t=a.dy
if(u==null)this.sc0(t)
else u.sai(t)
if(t==null)this.sc6(u)
else t.saC(u)
a.saC(a)
a.sai(a)},
dJ:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.d(p,0)
H.h(a,{func:1,ret:-1,args:[o]})
H.h(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.j5()
o=new P.cQ($.H,c,p.$ti)
o.dF()
return o}u=$.H
t=d?1:0
s=p.$ti
r=new P.T(p,u,t,s)
r.d0(a,b,c,d,o)
r.saC(r)
r.sai(r)
H.u(r,"$iT",s,"$aT")
r.dx=p.c&1
q=p.e
p.sc6(r)
r.sai(null)
r.saC(q)
if(q==null)p.sc0(r)
else q.sai(r)
if(p.d==p.e)P.iZ(p.a)
return r},
dt:function(a){var u=this,t=u.$ti
a=H.u(H.u(a,"$iaa",t,"$aaa"),"$iT",t,"$aT")
if(a.dy===a)return
t=a.dx
if((t&2)!==0)a.dx=t|4
else{u.cc(a)
if((u.c&2)===0&&u.d==null)u.b_()}return},
au:function(){if((this.c&4)!==0)return new P.aK("Cannot add new events after calling close")
return new P.aK("Cannot add new events while doing an addStream")},
p:function(a,b){var u=this
H.q(b,H.d(u,0))
if(!u.gaA())throw H.f(u.au())
u.aH(b)},
bm:function(a){var u,t=this
if((t.c&4)!==0)return t.r
if(!t.gaA())throw H.f(t.au())
t.c|=4
u=t.dj()
t.a5()
return u},
c1:function(a){var u,t,s,r,q=this
H.h(a,{func:1,ret:-1,args:[[P.ao,H.d(q,0)]]})
u=q.c
if((u&2)!==0)throw H.f(P.c3("Cannot fire new event. Controller is already firing an event"))
t=q.d
if(t==null)return
s=u&1
q.c=u^3
for(;t!=null;){u=t.dx
if((u&1)===s){t.dx=u|2
a.$1(t)
u=t.dx^=1
r=t.dy
if((u&4)!==0)q.cc(t)
t.dx&=4294967293
t=r}else t=t.dy}q.c&=4294967293
if(q.d==null)q.b_()},
b_:function(){var u=this
if((u.c&4)!==0&&u.r.a===0)u.r.bN(null)
P.iZ(u.b)},
sc0:function(a){this.d=H.u(a,"$iT",this.$ti,"$aT")},
sc6:function(a){this.e=H.u(a,"$iT",this.$ti,"$aT")},
$iiE:1,
$ilN:1,
$ibv:1}
P.h_.prototype={
gaA:function(){return P.bu.prototype.gaA.call(this)&&(this.c&2)===0},
au:function(){if((this.c&2)!==0)return new P.aK("Cannot fire new event. Controller is already firing an event")
return this.cY()},
aH:function(a){var u,t=this
H.q(a,H.d(t,0))
u=t.d
if(u==null)return
if(u===t.e){t.c|=2
u.bM(a)
t.c&=4294967293
if(t.d==null)t.b_()
return}t.c1(new P.h0(t,a))},
a5:function(){var u=this
if(u.d!=null)u.c1(new P.h1(u))
else u.r.bN(null)}}
P.h0.prototype={
$1:function(a){H.u(a,"$iao",[H.d(this.a,0)],"$aao").bM(this.b)},
$S:function(){return{func:1,ret:P.C,args:[[P.ao,H.d(this.a,0)]]}}}
P.h1.prototype={
$1:function(a){H.u(a,"$iao",[H.d(this.a,0)],"$aao").da()},
$S:function(){return{func:1,ret:P.C,args:[[P.ao,H.d(this.a,0)]]}}}
P.fj.prototype={}
P.h2.prototype={}
P.aA.prototype={
ea:function(a){if(this.c!==6)return!0
return this.b.b.bu(H.h(this.d,{func:1,ret:P.E,args:[P.y]}),a.a,P.E,P.y)},
e2:function(a){var u=this.e,t=P.y,s={futureOr:1,type:H.d(this,1)},r=this.b.b
if(H.bC(u,{func:1,args:[P.y,P.R]}))return H.hi(r.eg(u,a.a,a.b,null,t,P.R),s)
else return H.hi(r.bu(H.h(u,{func:1,args:[P.y]}),a.a,null,t),s)}}
P.U.prototype={
gdm:function(){return this.a===8},
cH:function(a,b,c){var u,t,s,r=H.d(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.H
if(u!==C.d){u.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.kH(b,u)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.U($.H,[c])
s=b==null?1:3
this.bJ(new P.aA(t,s,a,b,[r,c]))
return t},
cG:function(a,b){return this.cH(a,null,b)},
dH:function(a){H.q(a,H.d(this,0))
this.a=4
this.c=a},
bJ:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$iaA")
t.c=a}else{if(s===2){u=H.e(t.c,"$iU")
s=u.a
if(s<4){u.bJ(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.bz(null,null,s,H.h(new P.fu(t,a),{func:1,ret:-1}))}},
ca:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$iaA")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iU")
u=q.a
if(u<4){q.ca(a)
return}p.a=u
p.c=q.c}o.a=p.aG(a)
u=p.b
u.toString
P.bz(null,null,u,H.h(new P.fB(o,p),{func:1,ret:-1}))}},
aD:function(){var u=H.e(this.c,"$iaA")
this.c=null
return this.aG(u)},
aG:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
b3:function(a){var u,t,s=this,r=H.d(s,0)
H.hi(a,{futureOr:1,type:r})
u=s.$ti
if(H.d8(a,"$iat",u,"$aat"))if(H.d8(a,"$iU",u,null))P.fw(a,s)
else P.iN(a,s)
else{t=s.aD()
H.q(a,r)
s.a=4
s.c=a
P.bw(s,t)}},
aw:function(a,b){var u,t=this
H.e(b,"$iR")
u=t.aD()
t.a=8
t.c=new P.a_(a,b)
P.bw(t,u)},
de:function(a){return this.aw(a,null)},
bN:function(a){var u,t=this
if(H.d8(a,"$iat",t.$ti,"$aat")){t.d7(a)
return}t.a=1
u=t.b
u.toString
P.bz(null,null,u,H.h(new P.fv(t,a),{func:1,ret:-1}))},
d7:function(a){var u=this,t=u.$ti
H.u(a,"$iat",t,"$aat")
if(H.d8(a,"$iU",t,null)){if(a.gdm()){u.a=1
t=u.b
t.toString
P.bz(null,null,t,H.h(new P.fA(u,a),{func:1,ret:-1}))}else P.fw(a,u)
return}P.iN(a,u)},
$iat:1}
P.fu.prototype={
$0:function(){P.bw(this.a,this.b)},
$S:2}
P.fB.prototype={
$0:function(){P.bw(this.b,this.a.a)},
$S:2}
P.fx.prototype={
$1:function(a){var u=this.a
u.a=0
u.b3(a)},
$S:8}
P.fy.prototype={
$2:function(a,b){H.e(b,"$iR")
this.a.aw(a,b)},
$1:function(a){return this.$2(a,null)},
$C:"$2",
$D:function(){return[null]},
$S:40}
P.fz.prototype={
$0:function(){this.a.aw(this.b,this.c)},
$S:2}
P.fv.prototype={
$0:function(){var u=this.a,t=H.q(this.b,H.d(u,0)),s=u.aD()
u.a=4
u.c=t
P.bw(u,s)},
$S:2}
P.fA.prototype={
$0:function(){P.fw(this.b,this.a)},
$S:2}
P.fE.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cD(H.h(s.d,{func:1}),null)}catch(r){u=H.Q(r)
t=H.bD(r)
if(o.d){s=H.e(o.a.a.c,"$ia_").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$ia_")
else q.b=new P.a_(u,t)
q.a=!0
return}if(!!J.k(n).$iat){if(n instanceof P.U&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$ia_")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.cG(new P.fF(p),null)
s.a=!1}},
$S:1}
P.fF.prototype={
$1:function(a){return this.a},
$S:33}
P.fD.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.d(s,0)
q=H.q(n.c,r)
p=H.d(s,1)
n.a.b=s.b.b.bu(H.h(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.Q(o)
t=H.bD(o)
s=n.a
s.b=new P.a_(u,t)
s.a=!0}},
$S:1}
P.fC.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$ia_")
r=m.c
if(H.L(r.ea(u))&&r.e!=null){q=m.b
q.b=r.e2(u)
q.a=!1}}catch(p){t=H.Q(p)
s=H.bD(p)
r=H.e(m.a.a.c,"$ia_")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.a_(t,s)
n.a=!0}},
$S:1}
P.cM.prototype={}
P.aL.prototype={
gk:function(a){var u={},t=new P.U($.H,[P.M])
u.a=0
this.an(new P.eR(u,this),!0,new P.eS(u,t),t.gdd())
return t}}
P.eR.prototype={
$1:function(a){H.q(a,H.d(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.d(this.b,0)]}}}
P.eS.prototype={
$0:function(){this.b.b3(this.a.a)},
$C:"$0",
$R:0,
$S:2}
P.aa.prototype={}
P.eQ.prototype={}
P.cN.prototype={
gu:function(a){return(H.bs(this.a)^892482866)>>>0},
L:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cN&&b.a===this.a}}
P.fl.prototype={
c7:function(){return this.x.dt(this)},
bd:function(){H.u(this,"$iaa",[H.d(this.x,0)],"$aaa")},
be:function(){H.u(this,"$iaa",[H.d(this.x,0)],"$aaa")}}
P.ao.prototype={
d0:function(a,b,c,d,e){var u,t,s,r=this,q=H.d(r,0)
H.h(a,{func:1,ret:-1,args:[q]})
u=r.d
u.toString
r.sd6(H.h(a,{func:1,ret:null,args:[q]}))
t=b==null?P.kP():b
if(H.bC(t,{func:1,ret:-1,args:[P.y,P.R]}))r.b=u.cB(t,null,P.y,P.R)
else if(H.bC(t,{func:1,ret:-1,args:[P.y]}))r.b=H.h(t,{func:1,ret:null,args:[P.y]})
else H.X(P.bi("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.h(c,{func:1,ret:-1})
s=c==null?P.j5():c
r.sdr(H.h(s,{func:1,ret:-1}))},
aK:function(){var u=this.e&=4294967279
if((u&8)===0)this.bP()
u=$.i6()
return u},
bP:function(){var u,t=this,s=t.e|=8
if((s&64)!==0){u=t.r
if(u.a===1)u.a=3}if((s&32)===0)t.sbh(null)
t.f=t.c7()},
bM:function(a){var u,t=this
H.q(a,H.d(t,0))
u=t.e
if((u&8)!==0)return
if(u<32)t.aH(a)
else t.bL(new P.fn(a,t.$ti))},
da:function(){var u=this,t=u.e
if((t&8)!==0)return
t|=2
u.e=t
if(t<32)u.a5()
else u.bL(C.E)},
bd:function(){},
be:function(){},
c7:function(){return},
bL:function(a){var u=this,t=u.$ti,s=H.u(u.r,"$icc",t,"$acc")
if(s==null){s=new P.cc(t)
u.sbh(s)}s.p(0,a)
t=u.e
if((t&64)===0){t|=64
u.e=t
if(t<128)u.r.bB(u)}},
aH:function(a){var u,t=this,s=H.d(t,0)
H.q(a,s)
u=t.e
t.e=u|32
t.d.cE(t.a,a,s)
t.e&=4294967263
t.d8((u&4)!==0)},
a5:function(){this.bP()
this.e|=16
new P.fh(this).$0()},
d8:function(a){var u,t,s=this,r=s.e
if((r&64)!==0&&s.r.c==null){r=s.e=r&4294967231
if((r&4)!==0)if(r<128){u=s.r
u=u==null||u.c==null}else u=!1
else u=!1
if(u){r&=4294967291
s.e=r}}for(;!0;a=t){if((r&8)!==0){s.sbh(null)
return}t=(r&4)!==0
if(a===t)break
s.e=r^32
if(t)s.bd()
else s.be()
r=s.e&=4294967263}if((r&64)!==0&&r<128)s.r.bB(s)},
sd6:function(a){this.a=H.h(a,{func:1,ret:-1,args:[H.d(this,0)]})},
sdr:function(a){this.c=H.h(a,{func:1,ret:-1})},
sbh:function(a){this.r=H.u(a,"$icb",this.$ti,"$acb")},
$iaa:1,
$ibv:1}
P.fh.prototype={
$0:function(){var u=this.a,t=u.e
if((t&16)===0)return
u.e=t|42
u.d.bt(u.c)
u.e&=4294967263},
$S:1}
P.fX.prototype={
an:function(a,b,c,d){H.h(a,{func:1,ret:-1,args:[H.d(this,0)]})
H.h(c,{func:1,ret:-1})
return this.a.dJ(H.h(a,{func:1,ret:-1,args:[H.d(this,0)]}),d,c,!0===b)}}
P.ba.prototype={
sao:function(a){this.a=H.e(a,"$iba")},
gao:function(){return this.a}}
P.fn.prototype={
cz:function(a){H.u(a,"$ibv",this.$ti,"$abv").aH(this.b)}}
P.fo.prototype={
cz:function(a){a.a5()},
gao:function(){return},
sao:function(a){throw H.f(P.c3("No events after a done."))},
$iba:1,
$aba:function(){}}
P.cb.prototype={
bB:function(a){var u,t=this
H.u(a,"$ibv",t.$ti,"$abv")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.jk(new P.fO(t,a))
t.a=1}}
P.fO.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.u(this.b,"$ibv",[H.d(r,0)],"$abv")
t=r.b
s=t.gao()
r.b=s
if(s==null)r.c=null
t.cz(u)},
$S:2}
P.cc.prototype={
p:function(a,b){var u,t=this
H.e(b,"$iba")
u=t.c
if(u==null)t.b=t.c=b
else{u.sao(b)
t.c=b}}}
P.cQ.prototype={
dF:function(){var u,t=this
if((t.b&2)!==0)return
u=t.a
u.toString
P.bz(null,null,u,H.h(t.gdG(),{func:1,ret:-1}))
t.b|=2},
aK:function(){return $.i6()},
a5:function(){var u=this,t=u.b&=4294967293
if(t>=4)return
u.b=t|1
u.a.bt(u.c)},
$iaa:1}
P.a_.prototype={
n:function(a){return H.a(this.a)},
$iaW:1}
P.h9.prototype={$ilJ:1}
P.hd.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cz():s
s=this.b
if(s==null)throw H.f(t)
u=H.f(t)
u.stack=s.n(0)
throw u},
$S:2}
P.fP.prototype={
bt:function(a){var u,t,s,r=null
H.h(a,{func:1,ret:-1})
try{if(C.d===$.H){a.$0()
return}P.iX(r,r,this,a,-1)}catch(s){u=H.Q(s)
t=H.bD(s)
P.cf(r,r,this,u,H.e(t,"$iR"))}},
cE:function(a,b,c){var u,t,s,r=null
H.h(a,{func:1,ret:-1,args:[c]})
H.q(b,c)
try{if(C.d===$.H){a.$1(b)
return}P.iY(r,r,this,a,b,-1,c)}catch(s){u=H.Q(s)
t=H.bD(s)
P.cf(r,r,this,u,H.e(t,"$iR"))}},
dU:function(a,b){return new P.fR(this,H.h(a,{func:1,ret:b}),b)},
ci:function(a){return new P.fQ(this,H.h(a,{func:1,ret:-1}))},
dV:function(a,b){return new P.fS(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
cD:function(a,b){H.h(a,{func:1,ret:b})
if($.H===C.d)return a.$0()
return P.iX(null,null,this,a,b)},
bu:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.q(b,d)
if($.H===C.d)return a.$1(b)
return P.iY(null,null,this,a,b,c,d)},
eg:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.q(b,e)
H.q(c,f)
if($.H===C.d)return a.$2(b,c)
return P.kI(null,null,this,a,b,c,d,e,f)},
cB:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}}
P.fR.prototype={
$0:function(){return this.a.cD(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.fQ.prototype={
$0:function(){return this.a.bt(this.b)},
$S:1}
P.fS.prototype={
$1:function(a){var u=this.c
return this.a.cE(this.b,H.q(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.fM.prototype={
gv:function(a){var u=this,t=new P.cW(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
B:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$ibx")!=null}else{t=this.df(b)
return t}},
df:function(a){var u=this.d
if(u==null)return!1
return this.b9(this.c4(u,a),a)>=0},
p:function(a,b){var u,t,s=this
H.q(b,H.d(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bQ(u==null?s.b=P.hM():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bQ(t==null?s.c=P.hM():t,b)}else return s.d4(b)},
d4:function(a){var u,t,s,r=this
H.q(a,H.d(r,0))
u=r.d
if(u==null)u=r.d=P.hM()
t=r.bU(a)
s=u[t]
if(s==null)u[t]=[r.b2(a)]
else{if(r.b9(s,a)>=0)return!1
s.push(r.b2(a))}return!0},
D:function(a,b){var u=this
if(typeof b==="string"&&b!=="__proto__")return u.cb(u.b,b)
else if(typeof b==="number"&&(b&1073741823)===b)return u.cb(u.c,b)
else return u.du(b)},
du:function(a){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.c4(r,a)
t=s.b9(u,a)
if(t<0)return!1
s.bT(u.splice(t,1)[0])
return!0},
bQ:function(a,b){H.q(b,H.d(this,0))
if(H.e(a[b],"$ibx")!=null)return!1
a[b]=this.b2(b)
return!0},
cb:function(a,b){var u
if(a==null)return!1
u=H.e(a[b],"$ibx")
if(u==null)return!1
this.bT(u)
delete a[b]
return!0},
bS:function(){this.r=1073741823&this.r+1},
b2:function(a){var u,t=this,s=new P.bx(H.q(a,H.d(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bS()
return s},
bT:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bS()},
bU:function(a){return J.aQ(a)&1073741823},
c4:function(a,b){return a[this.bU(b)]},
b9:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.ap(a[t].a,b))return t
return-1}}
P.bx.prototype={}
P.cW.prototype={
gq:function(){return this.d},
m:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.f(P.aE(t))
else{t=u.c
if(t==null){u.sbR(null)
return!1}else{u.sbR(H.q(t.a,H.d(u,0)))
u.c=u.c.b
return!0}}},
sbR:function(a){this.d=H.q(a,H.d(this,0))},
$iau:1}
P.ee.prototype={$iD:1,$io:1,$in:1}
P.J.prototype={
gv:function(a){return new H.bW(a,this.gk(a),[H.aO(this,a,"J",0)])},
E:function(a,b){return this.h(a,b)},
w:function(a,b){var u,t,s=this
H.h(b,{func:1,ret:-1,args:[H.aO(s,a,"J",0)]})
u=s.gk(a)
for(t=0;t<u;++t){b.$1(s.h(a,t))
if(u!==s.gk(a))throw H.f(P.aE(a))}},
gG:function(a){return this.gk(a)===0},
gbq:function(a){return!this.gG(a)},
cs:function(a,b,c){var u=H.aO(this,a,"J",0)
return new H.b4(a,H.h(b,{func:1,ret:c,args:[u]}),[u,c])},
ei:function(a,b){var u,t=this,s=H.B([],[H.aO(t,a,"J",0)])
C.a.sk(s,t.gk(a))
for(u=0;u<t.gk(a);++u)C.a.i(s,u,t.h(a,u))
return s},
eh:function(a){return this.ei(a,!0)},
p:function(a,b){var u,t=this
H.q(b,H.aO(t,a,"J",0))
u=t.gk(a)
t.sk(a,u+1)
t.i(a,u,b)},
dc:function(a,b,c){var u,t=this,s=t.gk(a),r=c-b
for(u=c;u<s;++u)t.i(a,u-r,t.h(a,u))
t.sk(a,s-r)},
W:function(a,b){var u=this.h(a,b)
this.dc(a,b,b+1)
return u},
n:function(a){return P.e1(a,"[","]")}}
P.ef.prototype={}
P.eh.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.a(a)
t.a=u+": "
t.a+=H.a(b)},
$S:10}
P.b3.prototype={
w:function(a,b){var u,t,s=this
H.h(b,{func:1,ret:-1,args:[H.be(s,"b3",0),H.be(s,"b3",1)]})
for(u=J.z(s.gC());u.m();){t=u.gq()
b.$2(t,s.h(0,t))}},
t:function(a){return J.jC(this.gC(),a)},
gk:function(a){return J.af(this.gC())},
gG:function(a){return J.jF(this.gC())},
n:function(a){return P.eg(this)},
$ir:1}
P.h7.prototype={
i:function(a,b,c){H.q(b,H.d(this,0))
H.q(c,H.d(this,1))
throw H.f(P.F("Cannot modify unmodifiable map"))}}
P.ei.prototype={
h:function(a,b){return this.a.h(0,b)},
i:function(a,b,c){this.a.i(0,H.q(b,H.d(this,0)),H.q(c,H.d(this,1)))},
t:function(a){return this.a.t(a)},
w:function(a,b){this.a.w(0,H.h(b,{func:1,ret:-1,args:[H.d(this,0),H.d(this,1)]}))},
gG:function(a){return this.a.a===0},
gk:function(a){return this.a.a},
gC:function(){var u=this.a
return new H.av(u,[H.d(u,0)])},
n:function(a){return P.eg(this.a)},
$ir:1}
P.f6.prototype={}
P.cE.prototype={
n:function(a){return P.e1(this,"{","}")},
E:function(a,b){var u,t,s
P.c1(b,"index")
for(u=this.V(),u=P.fN(u,u.r,H.d(u,0)),t=0;u.m();){s=u.d
if(b===t)return s;++t}throw H.f(P.bn(b,this,"index",null,t))}}
P.eN.prototype={$iD:1,$io:1,$ia9:1}
P.fU.prototype={
I:function(a,b){var u
for(u=J.z(H.u(b,"$io",this.$ti,"$ao"));u.m();)this.p(0,u.gq())},
n:function(a){return P.e1(this,"{","}")},
br:function(a,b){var u,t=P.fN(this,this.r,H.d(this,0))
if(!t.m())return""
if(b===""){u=""
do u+=H.a(t.d)
while(t.m())}else{u=H.a(t.d)
for(;t.m();)u=u+b+H.a(t.d)}return u.charCodeAt(0)==0?u:u},
E:function(a,b){var u,t,s,r=this
P.c1(b,"index")
for(u=P.fN(r,r.r,H.d(r,0)),t=0;u.m();){s=u.d
if(b===t)return s;++t}throw H.f(P.bn(b,r,"index",null,t))},
$iD:1,
$io:1,
$ia9:1}
P.cX.prototype={}
P.d0.prototype={}
P.d4.prototype={}
P.fH.prototype={
h:function(a,b){var u,t=this.b
if(t==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{u=t[b]
return typeof u=="undefined"?this.ds(b):u}},
gk:function(a){return this.b==null?this.c.a:this.ae().length},
gG:function(a){return this.gk(this)===0},
gC:function(){if(this.b==null){var u=this.c
return new H.av(u,[H.d(u,0)])}return new P.fI(this)},
i:function(a,b,c){var u,t,s=this
if(s.b==null)s.c.i(0,b,c)
else if(s.t(b)){u=s.b
u[b]=c
t=s.a
if(t==null?u!=null:t!==u)t[b]=null}else s.dN().i(0,b,c)},
t:function(a){if(this.b==null)return this.c.t(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
w:function(a,b){var u,t,s,r,q=this
H.h(b,{func:1,ret:-1,args:[P.i,,]})
if(q.b==null)return q.c.w(0,b)
u=q.ae()
for(t=0;t<u.length;++t){s=u[t]
r=q.b[s]
if(typeof r=="undefined"){r=P.ha(q.a[s])
q.b[s]=r}b.$2(s,r)
if(u!==q.c)throw H.f(P.aE(q))}},
ae:function(){var u=H.V(this.c)
if(u==null)u=this.c=H.B(Object.keys(this.a),[P.i])
return u},
dN:function(){var u,t,s,r,q,p=this
if(p.b==null)return p.c
u=P.iw(P.i,null)
t=p.ae()
for(s=0;r=t.length,s<r;++s){q=t[s]
u.i(0,q,p.h(0,q))}if(r===0)C.a.p(t,null)
else C.a.sk(t,0)
p.a=p.b=null
return p.c=u},
ds:function(a){var u
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
u=P.ha(this.a[a])
return this.b[a]=u},
$ab3:function(){return[P.i,null]},
$ar:function(){return[P.i,null]}}
P.fI.prototype={
gk:function(a){var u=this.a
return u.gk(u)},
E:function(a,b){var u=this.a
if(u.b==null)u=u.gC().E(0,b)
else{u=u.ae()
if(b<0||b>=u.length)return H.c(u,b)
u=u[b]}return u},
gv:function(a){var u=this.a
if(u.b==null){u=u.gC()
u=u.gv(u)}else{u=u.ae()
u=new J.aR(u,u.length,[H.d(u,0)])}return u},
B:function(a,b){return this.a.t(b)},
$aD:function(){return[P.i]},
$ab2:function(){return[P.i]},
$ao:function(){return[P.i]}}
P.dj.prototype={}
P.bO.prototype={}
P.ct.prototype={
n:function(a){var u=P.aH(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+u}}
P.e9.prototype={
n:function(a){return"Cyclic error in JSON stringify"}}
P.e8.prototype={
cm:function(a,b,c){var u=P.kG(b,this.gdZ().a)
return u},
bo:function(a,b){var u=P.kx(a,this.ge_().b,null)
return u},
ge_:function(){return C.I},
gdZ:function(){return C.H}}
P.eb.prototype={
$abO:function(){return[P.y,P.i]}}
P.ea.prototype={
$abO:function(){return[P.i,P.y]}}
P.fK.prototype={
cL:function(a){var u,t,s,r,q,p,o=a.length
for(u=J.hY(a),t=this.c,s=0,r=0;r<o;++r){q=u.av(a,r)
if(q>92)continue
if(q<32){if(r>s)t.a+=C.e.a2(a,s,r)
s=r+1
t.a+=H.a8(92)
switch(q){case 8:t.a+=H.a8(98)
break
case 9:t.a+=H.a8(116)
break
case 10:t.a+=H.a8(110)
break
case 12:t.a+=H.a8(102)
break
case 13:t.a+=H.a8(114)
break
default:t.a+=H.a8(117)
t.a+=H.a8(48)
t.a+=H.a8(48)
p=q>>>4&15
t.a+=H.a8(p<10?48+p:87+p)
p=q&15
t.a+=H.a8(p<10?48+p:87+p)
break}}else if(q===34||q===92){if(r>s)t.a+=C.e.a2(a,s,r)
s=r+1
t.a+=H.a8(92)
t.a+=H.a8(q)}}if(s===0)t.a+=H.a(a)
else if(s<o)t.a+=u.a2(a,s,o)},
b0:function(a){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(a==null?r==null:a===r)throw H.f(new P.e9(a,null))}C.a.p(u,a)},
aY:function(a){var u,t,s,r,q=this
if(q.cK(a))return
q.b0(a)
try{u=q.b.$1(a)
if(!q.cK(u)){s=P.iv(a,null,q.gc9())
throw H.f(s)}s=q.a
if(0>=s.length)return H.c(s,-1)
s.pop()}catch(r){t=H.Q(r)
s=P.iv(a,t,q.gc9())
throw H.f(s)}},
cK:function(a){var u,t,s=this
if(typeof a==="number"){if(!isFinite(a))return!1
s.c.a+=C.c.n(a)
return!0}else if(a===!0){s.c.a+="true"
return!0}else if(a===!1){s.c.a+="false"
return!0}else if(a==null){s.c.a+="null"
return!0}else if(typeof a==="string"){u=s.c
u.a+='"'
s.cL(a)
u.a+='"'
return!0}else{u=J.k(a)
if(!!u.$in){s.b0(a)
s.em(a)
u=s.a
if(0>=u.length)return H.c(u,-1)
u.pop()
return!0}else if(!!u.$ir){s.b0(a)
t=s.en(a)
u=s.a
if(0>=u.length)return H.c(u,-1)
u.pop()
return t}else return!1}},
em:function(a){var u,t,s=this.c
s.a+="["
u=J.O(a)
if(u.gbq(a)){this.aY(u.h(a,0))
for(t=1;t<u.gk(a);++t){s.a+=","
this.aY(u.h(a,t))}}s.a+="]"},
en:function(a){var u,t,s,r,q,p,o=this,n={}
if(a.gG(a)){o.c.a+="{}"
return!0}u=a.gk(a)*2
t=new Array(u)
t.fixed$length=Array
s=n.a=0
n.b=!0
a.w(0,new P.fL(n,t))
if(!n.b)return!1
r=o.c
r.a+="{"
for(q='"';s<u;s+=2,q=',"'){r.a+=q
o.cL(H.p(t[s]))
r.a+='":'
p=s+1
if(p>=u)return H.c(t,p)
o.aY(t[p])}r.a+="}"
return!0}}
P.fL.prototype={
$2:function(a,b){var u,t
if(typeof a!=="string")this.a.b=!1
u=this.b
t=this.a
C.a.i(u,t.a++,a)
C.a.i(u,t.a++,b)},
$S:10}
P.fJ.prototype={
gc9:function(){var u=this.c.a
return u.charCodeAt(0)==0?u:u}}
P.er.prototype={
$2:function(a,b){var u,t,s
H.e(a,"$iax")
u=this.b
t=this.a
u.a+=t.a
s=u.a+=H.a(a.a)
u.a=s+": "
u.a+=P.aH(b)
t.a=", "},
$S:19}
P.E.prototype={}
P.aF.prototype={
p:function(a,b){return P.jT(C.f.j(this.a,H.e(b,"$ils").ges()),!1)},
L:function(a,b){if(b==null)return!1
return b instanceof P.aF&&this.a===b.a&&!0},
gu:function(a){var u=this.a
return(u^C.f.bk(u,30))&1073741823},
n:function(a){var u=this,t=P.jU(H.kj(u)),s=P.cm(H.kh(u)),r=P.cm(H.kd(u)),q=P.cm(H.ke(u)),p=P.cm(H.kg(u)),o=P.cm(H.ki(u)),n=P.jV(H.kf(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.a2.prototype={}
P.aW.prototype={}
P.da.prototype={
n:function(a){return"Assertion failed"}}
P.cz.prototype={
n:function(a){return"Throw of null."}}
P.aq.prototype={
gb8:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb7:function(){return""},
n:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.a(p)
t=q.gb8()+o+u
if(!q.a)return t
s=q.gb7()
r=P.aH(q.b)
return t+s+": "+r}}
P.cB.prototype={
gb8:function(){return"RangeError"},
gb7:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.a(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.a(s)
else if(t>s)u=": Not in range "+H.a(s)+".."+H.a(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.a(s)}return u}}
P.e_.prototype={
gb8:function(){return"RangeError"},
gb7:function(){var u,t=H.w(this.b)
if(typeof t!=="number")return t.at()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.a(u)},
gk:function(a){return this.f}}
P.eq.prototype={
n:function(a){var u,t,s,r,q,p,o,n,m=this,l={},k=new P.am("")
l.a=""
for(u=m.c,t=u.length,s=0,r="",q="";s<t;++s,q=", "){p=u[s]
k.a=r+q
r=k.a+=P.aH(p)
l.a=", "}m.d.w(0,new P.er(l,k))
o=P.aH(m.a)
n=k.n(0)
u="NoSuchMethodError: method not found: '"+H.a(m.b.a)+"'\nReceiver: "+o+"\nArguments: ["+n+"]"
return u}}
P.f7.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.f4.prototype={
n:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.aK.prototype={
n:function(a){return"Bad state: "+this.a}}
P.dk.prototype={
n:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aH(u)+"."}}
P.ev.prototype={
n:function(a){return"Out of Memory"},
$iaW:1}
P.cG.prototype={
n:function(a){return"Stack Overflow"},
$iaW:1}
P.dt.prototype={
n:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ft.prototype={
n:function(a){return"Exception: "+this.a},
$ihz:1}
P.dY.prototype={
n:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.a(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.e.a2(r,0,75)+"...":r
return s+"\n"+u}else return s},
$ihz:1}
P.ai.prototype={}
P.M.prototype={}
P.o.prototype={
aX:function(a,b){var u=H.be(this,"o",0)
return new H.b8(this,H.h(b,{func:1,ret:P.E,args:[u]}),[u])},
gk:function(a){var u,t=this.gv(this)
for(u=0;t.m();)++u
return u},
ge1:function(a){var u=this.gv(this)
if(!u.m())throw H.f(H.it())
return u.gq()},
ga1:function(a){var u,t=this.gv(this)
if(!t.m())throw H.f(H.it())
u=t.gq()
if(t.m())throw H.f(H.k_())
return u},
E:function(a,b){var u,t,s
P.c1(b,"index")
for(u=this.gv(this),t=0;u.m();){s=u.gq()
if(b===t)return s;++t}throw H.f(P.bn(b,this,"index",null,t))},
n:function(a){return P.jZ(this,"(",")")}}
P.au.prototype={}
P.n.prototype={$iD:1,$io:1}
P.C.prototype={
gu:function(a){return P.y.prototype.gu.call(this,this)},
n:function(a){return"null"}}
P.W.prototype={}
P.y.prototype={constructor:P.y,$iy:1,
L:function(a,b){return this===b},
gu:function(a){return H.bs(this)},
n:function(a){return"Instance of '"+H.c0(this)+"'"},
aU:function(a,b){H.e(b,"$ihB")
throw H.f(P.iy(this,b.gct(),b.gcA(),b.gcu()))},
toString:function(){return this.n(this)}}
P.a9.prototype={}
P.R.prototype={}
P.i.prototype={$iiB:1}
P.am.prototype={
gk:function(a){return this.a.length},
n:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ilx:1}
P.ax.prototype={}
W.m.prototype={$im:1}
W.bI.prototype={
n:function(a){return String(a)},
$ibI:1}
W.d9.prototype={
n:function(a){return String(a)}}
W.bJ.prototype={$ibJ:1}
W.bk.prototype={$ibk:1}
W.aS.prototype={$iaS:1}
W.aT.prototype={
bz:function(a,b){return a.getContext(b)},
$iaT:1}
W.aU.prototype={
cp:function(a,b,c,d){a.fillText(b,c,d)},
$iaU:1}
W.aV.prototype={
gk:function(a){return a.length}}
W.bP.prototype={
gk:function(a){return a.length}}
W.ds.prototype={}
W.bl.prototype={$ibl:1}
W.du.prototype={
n:function(a){return String(a)}}
W.cn.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
L:function(a,b){if(b==null)return!1
if(!J.k(b).$ihJ)return!1
return a.left===b.left&&a.top===b.top&&a.width===b.width&&a.height===b.height},
gu:function(a){return W.iQ(C.c.gu(a.left),C.c.gu(a.top),C.c.gu(a.width),C.c.gu(a.height))},
$ihJ:1,
$ahJ:function(){return[P.W]}}
W.dv.prototype={
p:function(a,b){return a.add(H.p(b))},
gk:function(a){return a.length}}
W.fi.prototype={
gG:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){var u
H.w(b)
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
return H.e(u[b],"$iv")},
i:function(a,b,c){var u
H.w(b)
H.e(c,"$iv")
u=this.b
if(b<0||b>=u.length)return H.c(u,b)
this.a.replaceChild(c,u[b])},
sk:function(a,b){throw H.f(P.F("Cannot resize element lists"))},
p:function(a,b){H.e(b,"$iv")
this.a.appendChild(b)
return b},
gv:function(a){var u=this.eh(this)
return new J.aR(u,u.length,[H.d(u,0)])},
aL:function(a){J.ie(this.a)},
W:function(a,b){var u,t=this.b
if(b>=t.length)return H.c(t,b)
u=H.e(t[b],"$iv")
this.a.removeChild(u)
return u},
$aD:function(){return[W.v]},
$aJ:function(){return[W.v]},
$ao:function(){return[W.v]},
$an:function(){return[W.v]}}
W.a5.prototype={
gk:function(a){return this.a.length},
h:function(a,b){var u
H.w(b)
u=this.a
if(b<0||b>=u.length)return H.c(u,b)
return H.q(u[b],H.d(this,0))},
i:function(a,b,c){H.w(b)
H.q(c,H.d(this,0))
throw H.f(P.F("Cannot modify list"))},
sk:function(a,b){throw H.f(P.F("Cannot modify list"))},
$ia3:1}
W.v.prototype={
gdT:function(a){return new W.fp(a)},
gcj:function(a){return new W.fi(a,a.children)},
gck:function(a){return new W.fq(a)},
a_:function(a,b){this.cq(a,"beforeend",b,null,null)},
n:function(a){return a.localName},
cq:function(a,b,c,d,e){var u,t=this.J(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(t,a)
break
case"afterbegin":u=a.childNodes
a.insertBefore(t,u.length>0?u[0]:null)
break
case"beforeend":a.appendChild(t)
break
case"afterend":a.parentNode.insertBefore(t,a.nextSibling)
break
default:H.X(P.bi("Invalid position "+b))}},
J:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.is
if(u==null){u=H.B([],[W.a4])
t=new W.cy(u)
C.a.p(u,W.iO(null))
C.a.p(u,W.iR())
$.is=t
d=t}else d=u
u=$.ir
if(u==null){u=new W.d5(d)
$.ir=u
c=u}else{u.a=d
c=u}}if($.aG==null){u=document
t=u.implementation.createHTMLDocument("")
$.aG=t
$.hy=t.createRange()
t=$.aG.createElement("base")
H.e(t,"$ibJ")
t.href=u.baseURI
$.aG.head.appendChild(t)}u=$.aG
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$iaS")}u=$.aG
if(!!this.$iaS)s=u.body
else{s=u.createElement(a.tagName)
$.aG.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.K,a.tagName)){$.hy.selectNodeContents(s)
r=$.hy.createContextualFragment(b)}else{s.innerHTML=b
r=$.aG.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aG.body
if(s==null?u!=null:s!==u)J.bH(s)
c.bA(r)
document.adoptNode(r)
return r},
dY:function(a,b,c){return this.J(a,b,c,null)},
X:function(a,b){a.textContent=null
a.appendChild(this.J(a,b,null,null))},
$iv:1,
gcF:function(a){return a.tagName}}
W.dz.prototype={
$1:function(a){return!!J.k(H.e(a,"$it")).$iv},
$S:11}
W.j.prototype={$ij:1}
W.aX.prototype={
d5:function(a,b,c,d){return a.addEventListener(b,H.bB(H.h(c,{func:1,args:[W.j]}),1),!1)},
dw:function(a,b,c,d){return a.removeEventListener(b,H.bB(H.h(c,{func:1,args:[W.j]}),1),!1)},
$iaX:1}
W.dX.prototype={
gk:function(a){return a.length}}
W.bm.prototype={
gk:function(a){return a.length},
h:function(a,b){H.w(b)
if(b>>>0!==b||b>=a.length)throw H.f(P.bn(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(b)
H.e(c,"$it")
throw H.f(P.F("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.f(P.F("Cannot resize immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.t]},
$iaI:1,
$aaI:function(){return[W.t]},
$aJ:function(){return[W.t]},
$io:1,
$ao:function(){return[W.t]},
$in:1,
$an:function(){return[W.t]},
$ibm:1,
$aac:function(){return[W.t]}}
W.bR.prototype={$ibR:1}
W.aZ.prototype={$iaZ:1}
W.aJ.prototype={$iaJ:1}
W.cu.prototype={
n:function(a){return String(a)},
$icu:1}
W.A.prototype={
gcv:function(a){var u,t,s,r,q,p
if(!!a.offsetX)return new P.aw(a.offsetX,a.offsetY,[P.W])
else{u=a.target
if(!J.k(W.iS(u)).$iv)throw H.f(P.F("offsetX is only supported on elements"))
t=H.e(W.iS(u),"$iv")
u=a.clientX
s=a.clientY
r=[P.W]
q=t.getBoundingClientRect()
p=q.left
q=q.top
H.u(new P.aw(p,q,r),"$iaw",r,"$aaw")
if(typeof u!=="number")return u.M()
if(typeof s!=="number")return s.M()
return new P.aw(C.c.aW(u-p),C.c.aW(s-q),r)}},
$iA:1}
W.a1.prototype={
ga1:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.f(P.c3("No elements"))
if(t>1)throw H.f(P.c3("More than one element"))
return u.firstChild},
p:function(a,b){this.a.appendChild(H.e(b,"$it"))},
I:function(a,b){var u,t,s,r
H.u(b,"$io",[W.t],"$ao")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
W:function(a,b){var u,t=this.a,s=t.childNodes
if(b>=s.length)return H.c(s,b)
u=s[b]
t.removeChild(u)
return u},
i:function(a,b,c){var u,t
H.w(b)
H.e(c,"$it")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.c(t,b)
u.replaceChild(c,t[b])},
gv:function(a){var u=this.a.childNodes
return new W.cp(u,u.length,[H.aO(C.N,u,"ac",0)])},
gk:function(a){return this.a.childNodes.length},
sk:function(a,b){throw H.f(P.F("Cannot set length on immutable List."))},
h:function(a,b){var u
H.w(b)
u=this.a.childNodes
if(b<0||b>=u.length)return H.c(u,b)
return u[b]},
$aD:function(){return[W.t]},
$aJ:function(){return[W.t]},
$ao:function(){return[W.t]},
$an:function(){return[W.t]}}
W.t.prototype={
O:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ef:function(a,b){var u,t
try{u=a.parentNode
J.jB(u,b,a)}catch(t){H.Q(t)}return a},
d9:function(a){var u
for(;u=a.firstChild,u!=null;)a.removeChild(u)},
n:function(a){var u=a.nodeValue
return u==null?this.cS(a):u},
dz:function(a,b,c){return a.replaceChild(b,c)},
$it:1}
W.c_.prototype={
gk:function(a){return a.length},
h:function(a,b){H.w(b)
if(b>>>0!==b||b>=a.length)throw H.f(P.bn(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(b)
H.e(c,"$it")
throw H.f(P.F("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.f(P.F("Cannot resize immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.t]},
$iaI:1,
$aaI:function(){return[W.t]},
$aJ:function(){return[W.t]},
$io:1,
$ao:function(){return[W.t]},
$in:1,
$an:function(){return[W.t]},
$aac:function(){return[W.t]}}
W.eJ.prototype={
gk:function(a){return a.length}}
W.cH.prototype={
J:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
u=W.jW("<table>"+H.a(b)+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a1(t).I(0,new W.a1(u))
return t}}
W.eT.prototype={
J:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.J(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.ga1(u)
s.toString
u=new W.a1(s)
r=u.ga1(u)
t.toString
r.toString
new W.a1(t).I(0,new W.a1(r))
return t}}
W.eU.prototype={
J:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aZ(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.J(u.createElement("table"),b,c,d)
u.toString
u=new W.a1(u)
s=u.ga1(u)
t.toString
s.toString
new W.a1(t).I(0,new W.a1(s))
return t}}
W.c5.prototype={
X:function(a,b){var u
a.textContent=null
u=this.J(a,b,null,null)
a.content.appendChild(u)},
$ic5:1}
W.aM.prototype={$iaM:1}
W.b6.prototype={}
W.b9.prototype={
gdR:function(a){var u=P.W,t=new P.U($.H,[u]),s=H.h(new W.f9(new P.h2(t,[u])),{func:1,ret:-1,args:[P.W]})
this.dk(a)
this.dA(a,W.j2(s,u))
return t},
dA:function(a,b){return a.requestAnimationFrame(H.bB(H.h(b,{func:1,ret:-1,args:[P.W]}),1))},
dk:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ib9:1,
$iiM:1}
W.f9.prototype={
$1:function(a){var u=this.a
a=H.hi(H.hp(a),{futureOr:1,type:H.d(u,0)})
u=u.a
if(u.a!==0)H.X(P.c3("Future already completed"))
u.b3(a)},
$S:22}
W.aN.prototype={$iaN:1}
W.c6.prototype={$ic6:1}
W.cP.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
L:function(a,b){if(b==null)return!1
if(!J.k(b).$ihJ)return!1
return a.left===b.left&&a.top===b.top&&a.width===b.width&&a.height===b.height},
gu:function(a){return W.iQ(C.c.gu(a.left),C.c.gu(a.top),C.c.gu(a.width),C.c.gu(a.height))}}
W.cY.prototype={
gk:function(a){return a.length},
h:function(a,b){H.w(b)
if(b>>>0!==b||b>=a.length)throw H.f(P.bn(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(b)
H.e(c,"$it")
throw H.f(P.F("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.f(P.F("Cannot resize immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.t]},
$iaI:1,
$aaI:function(){return[W.t]},
$aJ:function(){return[W.t]},
$io:1,
$ao:function(){return[W.t]},
$in:1,
$an:function(){return[W.t]},
$aac:function(){return[W.t]}}
W.ff.prototype={
w:function(a,b){var u,t,s,r,q
H.h(b,{func:1,ret:-1,args:[P.i,P.i]})
for(u=this.gC(),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.S)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gC:function(){var u,t,s,r=this.a.attributes,q=H.B([],[P.i])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.c(r,t)
s=H.e(r[t],"$ic6")
if(s.namespaceURI==null)C.a.p(q,s.name)}return q},
gG:function(a){return this.gC().length===0},
$ab3:function(){return[P.i,P.i]},
$ar:function(){return[P.i,P.i]}}
W.fp.prototype={
t:function(a){return this.a.hasAttribute(a)},
h:function(a,b){return this.a.getAttribute(H.p(b))},
i:function(a,b,c){this.a.setAttribute(b,H.p(c))},
gk:function(a){return this.gC().length}}
W.fq.prototype={
V:function(){var u,t,s,r,q=P.bV(P.i)
for(u=this.a.className.split(" "),t=u.length,s=0;s<t;++s){r=J.hu(u[s])
if(r.length!==0)q.p(0,r)}return q},
by:function(a){this.a.className=H.u(a,"$ia9",[P.i],"$aa9").br(0," ")},
gk:function(a){return this.a.classList.length},
p:function(a,b){var u,t
H.p(b)
u=this.a.classList
t=u.contains(b)
u.add(b)
return!t},
D:function(a,b){var u=this.a.classList,t=u.contains(b)
u.remove(b)
return t}}
W.cR.prototype={
an:function(a,b,c,d){var u=H.d(this,0)
H.h(a,{func:1,ret:-1,args:[u]})
H.h(c,{func:1,ret:-1})
return W.K(this.a,this.b,a,!1,u)}}
W.hL.prototype={}
W.az.prototype={
an:function(a,b,c,d){var u,t,s,r=this,q=H.d(r,0)
H.h(a,{func:1,ret:-1,args:[q]})
H.h(c,{func:1,ret:-1})
u=r.$ti
t=new W.d3(new H.I([[P.aL,q],[P.aa,q]]),u)
t.sdg(new P.h_(null,t.gdX(t),u))
for(q=r.a,q=new H.bW(q,q.gk(q),[H.d(q,0)]),s=r.c;q.m();)t.p(0,new W.cR(q.d,s,!1,u))
q=t.a
q.toString
return new P.fg(q,[H.d(q,0)]).an(a,b,c,d)},
a0:function(a){return this.an(a,null,null,null)}}
W.fr.prototype={
aK:function(){var u,t,s=this,r=s.b
if(r==null)return
u=s.d
t=u!=null
if(t){H.h(u,{func:1,args:[W.j]})
if(t)J.jA(r,s.c,u,!1)}s.b=null
s.sdq(null)
return},
sdq:function(a){this.d=H.h(a,{func:1,args:[W.j]})}}
W.fs.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ij"))},
$S:17}
W.d3.prototype={
p:function(a,b){var u,t,s,r=this
H.u(b,"$iaL",r.$ti,"$aaL")
u=r.b
if(u.t(b))return
t=r.a
s=H.d(b,0)
t=H.h(t.gdO(t),{func:1,ret:-1,args:[s]})
H.h(new W.fY(r,b),{func:1,ret:-1})
u.i(0,b,W.K(b.a,b.b,t,!1,s))},
bm:function(a){var u,t
for(u=this.b,t=u.gP(u),t=new H.a0(J.z(t.a),t.b,[H.d(t,0),H.d(t,1)]);t.m();)t.a.aK()
u.aL(0)
this.a.bm(0)},
sdg:function(a){this.a=H.u(a,"$iiE",this.$ti,"$aiE")}}
W.fY.prototype={
$0:function(){var u=this.a,t=u.b.D(0,H.u(this.b,"$iaL",[H.d(u,0)],"$aaL"))
if(t!=null)t.aK()
return},
$S:1}
W.bb.prototype={
d1:function(a){var u
if($.cS.a===0){for(u=0;u<262;++u)$.cS.i(0,C.J[u],W.kX())
for(u=0;u<12;++u)$.cS.i(0,C.j[u],W.kY())}},
a6:function(a){return $.jx().B(0,W.bQ(a))},
U:function(a,b,c){var u=$.cS.h(0,H.a(W.bQ(a))+"::"+b)
if(u==null)u=$.cS.h(0,"*::"+b)
if(u==null)return!1
return H.hV(u.$4(a,b,c,this))},
$ia4:1}
W.ac.prototype={
gv:function(a){return new W.cp(a,this.gk(a),[H.aO(this,a,"ac",0)])},
p:function(a,b){H.q(b,H.aO(this,a,"ac",0))
throw H.f(P.F("Cannot add to immutable List."))},
W:function(a,b){throw H.f(P.F("Cannot remove from immutable List."))}}
W.cy.prototype={
p:function(a,b){C.a.p(this.a,H.e(b,"$ia4"))},
a6:function(a){return C.a.cf(this.a,new W.et(a))},
U:function(a,b,c){return C.a.cf(this.a,new W.es(a,b,c))},
$ia4:1}
W.et.prototype={
$1:function(a){return H.e(a,"$ia4").a6(this.a)},
$S:16}
W.es.prototype={
$1:function(a){return H.e(a,"$ia4").U(this.a,this.b,this.c)},
$S:16}
W.d1.prototype={
d2:function(a,b,c,d){var u,t,s
this.a.I(0,c)
u=b.aX(0,new W.fV())
t=b.aX(0,new W.fW())
this.b.I(0,u)
s=this.c
s.I(0,C.L)
s.I(0,t)},
a6:function(a){return this.a.B(0,W.bQ(a))},
U:function(a,b,c){var u=this,t=W.bQ(a),s=u.c
if(s.B(0,H.a(t)+"::"+b))return u.d.dP(c)
else if(s.B(0,"*::"+b))return u.d.dP(c)
else{s=u.b
if(s.B(0,H.a(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.a(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
$ia4:1}
W.fV.prototype={
$1:function(a){return!C.a.B(C.j,H.p(a))},
$S:15}
W.fW.prototype={
$1:function(a){return C.a.B(C.j,H.p(a))},
$S:15}
W.h3.prototype={
U:function(a,b,c){if(this.cZ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.B(0,b)
return!1}}
W.h4.prototype={
$1:function(a){return"TEMPLATE::"+H.a(H.p(a))},
$S:13}
W.fZ.prototype={
a6:function(a){var u=J.k(a)
if(!!u.$ic2)return!1
u=!!u.$il
if(u&&W.bQ(a)==="foreignObject")return!1
if(u)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.e.cO(b,"on"))return!1
return this.a6(a)},
$ia4:1}
W.cp.prototype={
m:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sc5(J.bG(u.a,t))
u.c=t
return!0}u.sc5(null)
u.c=s
return!1},
gq:function(){return this.d},
sc5:function(a){this.d=H.q(a,H.d(this,0))},
$iau:1}
W.fm.prototype={$iaX:1,$iiM:1}
W.a4.prototype={}
W.fT.prototype={$ilI:1}
W.d5.prototype={
bA:function(a){new W.h8(this).$2(a,null)},
aj:function(a,b){if(b==null)J.bH(a)
else b.removeChild(a)},
dE:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.jD(a)
n=o.a.getAttribute("is")
H.e(a,"$iv")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.L(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.Q(r)}t="element unprintable"
try{t=J.G(a)}catch(r){H.Q(r)}try{s=W.bQ(a)
this.dD(H.e(a,"$iv"),b,p,t,s,H.e(o,"$ir"),H.p(n))}catch(r){if(H.Q(r) instanceof P.aq)throw r
else{this.aj(a,b)
window
q="Removing corrupted element "+H.a(t)
if(typeof console!="undefined")window.console.warn(q)}}},
dD:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.aj(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.a6(a)){o.aj(a,b)
window
u="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.U(a,"is",g)){o.aj(a,b)
window
u="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gC()
t=H.B(u.slice(0),[H.d(u,0)])
for(s=f.gC().length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.c(t,s)
r=t[s]
q=o.a
p=J.jK(r)
H.p(r)
if(!q.U(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.a(e)+" "+r+'="'+H.a(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.k(a).$ic5)o.bA(a.content)},
$ilv:1}
W.h8.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.dE(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aj(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.Q(s)
r=H.e(u,"$it")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$it")}},
$S:26}
W.cO.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d6.prototype={}
W.d7.prototype={}
P.dq.prototype={
ce:function(a){var u=$.jm().b
if(u.test(a))return a
throw H.f(P.hv(a,"value","Not a valid class token"))},
n:function(a){return this.V().br(0," ")},
gv:function(a){var u=this.V()
return P.fN(u,u.r,H.d(u,0))},
gk:function(a){return this.V().a},
p:function(a,b){H.p(b)
this.ce(b)
return H.hV(this.eb(new P.dr(b)))},
D:function(a,b){var u,t
this.ce(b)
u=this.V()
t=u.D(0,b)
this.by(u)
return t},
E:function(a,b){return this.V().E(0,b)},
eb:function(a){var u,t
H.h(a,{func:1,args:[[P.a9,P.i]]})
u=this.V()
t=a.$1(u)
this.by(u)
return t},
$aD:function(){return[P.i]},
$acE:function(){return[P.i]},
$ao:function(){return[P.i]},
$aa9:function(){return[P.i]}}
P.dr.prototype={
$1:function(a){return H.u(a,"$ia9",[P.i],"$aa9").p(0,this.a)},
$S:21}
P.dT.prototype={
gZ:function(){var u=this.b,t=H.be(u,"J",0),s=W.v
return new H.bX(new H.b8(u,H.h(new P.dU(),{func:1,ret:P.E,args:[t]}),[t]),H.h(new P.dV(),{func:1,ret:s,args:[t]}),[t,s])},
i:function(a,b,c){var u
H.w(b)
H.e(c,"$iv")
u=this.gZ()
J.jJ(u.b.$1(J.ci(u.a,b)),c)},
sk:function(a,b){var u=J.af(this.gZ().a)
if(b>=u)return
else if(b<0)throw H.f(P.bi("Invalid list length"))
this.ee(0,b,u)},
p:function(a,b){this.b.a.appendChild(H.e(b,"$iv"))},
ee:function(a,b,c){var u=this.gZ()
u=H.kn(u,b,H.be(u,"o",0))
C.a.w(P.bp(H.ko(u,c-b,H.be(u,"o",0)),!0,null),new P.dW())},
aL:function(a){J.ie(this.b.a)},
W:function(a,b){var u=this.gZ()
u=u.b.$1(J.ci(u.a,b))
J.bH(u)
return u},
gk:function(a){return J.af(this.gZ().a)},
h:function(a,b){var u
H.w(b)
u=this.gZ()
return u.b.$1(J.ci(u.a,b))},
gv:function(a){var u=P.bp(this.gZ(),!1,W.v)
return new J.aR(u,u.length,[H.d(u,0)])},
$aD:function(){return[W.v]},
$aJ:function(){return[W.v]},
$ao:function(){return[W.v]},
$an:function(){return[W.v]}}
P.dU.prototype={
$1:function(a){return!!J.k(H.e(a,"$it")).$iv},
$S:11}
P.dV.prototype={
$1:function(a){return H.jb(H.e(a,"$it"),"$iv")},
$S:45}
P.dW.prototype={
$1:function(a){return J.bH(a)},
$S:3}
P.bU.prototype={$ibU:1}
P.aj.prototype={
h:function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.f(P.bi("property is not a String or num"))
return P.hN(this.a[b])},
i:function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.f(P.bi("property is not a String or num"))
this.a[b]=P.hO(c)},
gu:function(a){return 0},
L:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a},
n:function(a){var u,t
try{u=String(this.a)
return u}catch(t){H.Q(t)
u=this.cX(this)
return u}},
bl:function(a,b){var u,t=this.a
if(b==null)u=null
else{u=H.d(b,0)
u=P.bp(new H.b4(b,H.h(P.l5(),{func:1,ret:null,args:[u]}),[u,null]),!0,null)}return P.hN(t[a].apply(t,u))}}
P.bT.prototype={}
P.bS.prototype={
b1:function(a){var u=this,t=a<0||a>=u.gk(u)
if(t)throw H.f(P.cC(a,0,u.gk(u),null,null))},
h:function(a,b){if(typeof b==="number"&&b===C.f.aW(b))this.b1(H.w(b))
return H.q(this.cV(0,b),H.d(this,0))},
i:function(a,b,c){H.q(c,H.d(this,0))
if(typeof b==="number"&&b===C.f.aW(b))this.b1(H.w(b))
this.bD(0,b,c)},
gk:function(a){var u=this.a.length
if(typeof u==="number"&&u>>>0===u)return u
throw H.f(P.c3("Bad JsArray length"))},
sk:function(a,b){this.bD(0,"length",b)},
p:function(a,b){this.bl("push",[H.q(b,H.d(this,0))])},
W:function(a,b){this.b1(b)
return H.q(J.bG(this.bl("splice",[b,1]),0),H.d(this,0))},
$iD:1,
$io:1,
$in:1}
P.hb.prototype={
$1:function(a){var u
H.e(a,"$iai")
u=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.kz,a,!1)
P.hP(u,$.hs(),a)
return u},
$S:3}
P.hc.prototype={
$1:function(a){return new this.a(a)},
$S:3}
P.he.prototype={
$1:function(a){return new P.bT(a)},
$S:23}
P.hf.prototype={
$1:function(a){return new P.bS(a,[null])},
$S:24}
P.hg.prototype={
$1:function(a){return new P.aj(a)},
$S:25}
P.cV.prototype={}
P.aw.prototype={
n:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
L:function(a,b){if(b==null)return!1
return!!J.k(b).$iaw&&this.a==b.a&&this.b==b.b},
gu:function(a){var u,t=J.aQ(this.a),s=J.aQ(this.b)
s=P.iP(P.iP(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
l:function(a,b){var u,t,s=this,r=s.a
if(typeof r!=="number")return r.l()
if(typeof b!=="number")return H.b(b)
u=H.d(s,0)
r=H.q(r*b,u)
t=s.b
if(typeof t!=="number")return t.l()
return new P.aw(r,H.q(t*b,u),s.$ti)}}
P.c2.prototype={$ic2:1}
P.db.prototype={
V:function(){var u,t,s,r,q=this.a.getAttribute("class"),p=P.bV(P.i)
if(q==null)return p
for(u=q.split(" "),t=u.length,s=0;s<t;++s){r=J.hu(u[s])
if(r.length!==0)p.p(0,r)}return p},
by:function(a){this.a.setAttribute("class",a.br(0," "))}}
P.l.prototype={
gck:function(a){return new P.db(a)},
gcj:function(a){return new P.dT(a,new W.a1(a))},
J:function(a,b,c,d){var u,t,s,r,q,p=H.B([],[W.a4])
C.a.p(p,W.iO(null))
C.a.p(p,W.iR())
C.a.p(p,new W.fZ())
c=new W.d5(new W.cy(p))
u='<svg version="1.1">'+H.a(b)+"</svg>"
p=document
t=p.body
s=(t&&C.m).dY(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a1(s)
q=p.ga1(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
cq:function(a,b,c,d,e){throw H.f(P.F("Cannot invoke insertAdjacentHtml on SVG."))},
$il:1}
U.ag.prototype={
gam:function(){return 0},
ga7:function(){return 0},
gak:function(){var u=this.y
return u!=null?u.gak():this},
gaT:function(){var u=this.y
if(!(u!=null)){u=this.ch
u=u!=null?u.ry:null}return u},
gcr:function(){return this.z==null},
a3:function(a,b,c){var u,t=this,s=t.a
if(s==null){s=t.go
u=s.y
t.a=u
s.y=u+1}else{u=t.go
if(s>=u.y)u.y=s+1}t.r=$.bh()
t.x=$.x()},
aM:function(a){var u=this,t=U.ik(u.go,u.a,u.b)
u.ax(t)
return t},
ax:function(a){var u,t,s,r,q=this
a.b=q.b
a.c=q.c
a.d=q.d
a.dx=q.dx
a.dy=q.dy
a.fr=q.fr
a.fx=q.fx
a.fy=q.fy
a.r=q.r
a.x=q.x
a.id=q.id
for(u=q.cx,u=u.gP(u),u=new H.a0(J.z(u.a),u.b,[H.d(u,0),H.d(u,1)]),t=a.cx;u.m();){s=u.a.aN(0,a)
t.i(0,s.a,s)}for(u=q.cy,u=u.gP(u),u=new H.a0(J.z(u.a),u.b,[H.d(u,0),H.d(u,1)]),t=a.cy;u.m();){r=u.a.aN(0,a)
t.i(0,r.a,r)}},
A:function(){var u,t,s=this,r="properties",q=P.hG()
q.i(0,"id",s.a)
q.i(0,"action",s.b)
q.i(0,"type",s.c)
q.i(0,"format",s.d)
q.i(0,"start",s.id)
q.i(0,"required",s.fy)
u=s.e
t=$.i5()
if(typeof u!=="number")return u.aa()
if(typeof t!=="number")return H.b(t)
q.i(0,"x",u/t)
u=s.f
if(typeof u!=="number")return u.aa()
q.i(0,"y",u/t)
u=s.cx
if(u.a!==0){q.i(0,"params",[])
for(u=u.gP(u),u=new H.a0(J.z(u.a),u.b,[H.d(u,0),H.d(u,1)]);u.m();){t=u.a
J.aD(q.h(0,"params"),t.A())}}u=s.cy
if(u.a!==0){q.i(0,r,[])
for(u=u.gP(u),u=new H.a0(J.z(u.a),u.b,[H.d(u,0),H.d(u,1)]);u.m();){t=u.a
J.aD(q.h(0,r),t.A())}}return q},
R:function(a){var u
J.aD(a,this.A())
u=this.y
if(u!=null)u.R(a)},
aF:function(a,b){var u,t,s,r,q,p=this,o=$.bh(),n=p.dl(a),m=$.Z()
if(typeof m!=="number")return m.l()
if(typeof n!=="number")return n.j()
p.r=Math.max(H.j7(o),n+m*2)
if(!p.r2&&p.cx.a!==0)for(o=p.cx,o=o.gP(o),o=new H.a0(J.z(o.a),o.b,[H.d(o,0),H.d(o,1)]),u=0;o.m();){n=o.a
n.aE(a)
u+=n.z+m}else u=0
if(!p.r2&&p.cy.a!==0)for(o=p.cy,o=o.gP(o),o=new H.a0(J.z(o.a),o.b,[H.d(o,0),H.d(o,1)]),t=0;o.m();){n=o.a
n.aE(a)
s=n.z
a.save()
a.font=n.b.fx
r=$.bg()
n=a.measureText("\u25b8    "+H.a(n.f)).width
if(typeof r!=="number")return r.j()
if(typeof n!=="number")return H.b(n)
a.restore()
t=Math.max(t,s+(r+n+m*2))}else t=0
o=p.e
if(typeof o!=="number")return o.j()
n=p.r
if(typeof n!=="number")return H.b(n)
n=Math.max(o+t,o+n+u)
b=Math.max(H.j7(b),n)
q=p.gaT()
if(q!=null)b=q.aF(a,b)
o=p.e
if(typeof o!=="number")return H.b(o)
p.r=b-o
return b},
S:function(a,b){var u,t=this
t.Q=a
t.ch=b
u=t.y
if(u!=null)u.S(a+t.ga7(),b)},
a4:function(){var u,t,s,r,q=this,p=q.y
if(p!=null){u=q.f
t=q.r2?$.x():q.x
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.b(t)
p.f=u+t
t=q.e
u=p.Q
s=q.Q
r=$.bg()
if(typeof r!=="number")return H.b(r)
if(typeof t!=="number")return t.j()
p.e=t+(u-s)*r
p.a4()}},
dl:function(a){var u
a.save()
a.font=this.fx
u=a.measureText(this.b).width
a.restore()
return u},
b5:function(a){var u,t,s,r,q,p=this
a.save()
a.fillStyle=p.dy
a.font=p.fx
a.textAlign="left"
a.textBaseline="middle"
u=p.b
t=p.e
s=$.Z()
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.b(s)
r=p.f
q=$.x()
if(typeof q!=="number")return q.aa()
if(typeof r!=="number")return r.j()
C.q.cp(a,u,t+s,r+q/2)
a.restore()},
b6:function(a){var u
a.save()
this.aB(a)
a.strokeStyle=this.fr
u=$.a7()
if(typeof u!=="number")return H.b(u)
a.lineWidth=0.5*u
a.lineJoin="round"
a.stroke()
a.restore()},
b4:function(a){a.save()
this.aB(a)
a.fillStyle=this.dx
a.fill()
a.fillStyle="rgba(0, 0, 0, "+H.a(Math.min(1,0.075*this.Q))
a.fill()
a.restore()},
dh:function(a){var u,t,s=this.r,r=this.cx,q=H.d(r,0),p=P.bp(new H.av(r,[q]),!0,q)
for(u=p.length-1;u>=0;--u){q=$.Z()
if(u>=p.length)return H.c(p,u)
t=r.h(0,p[u]).z
if(typeof q!=="number")return q.j()
if(typeof s!=="number")return s.M()
s-=q+t
if(u>=p.length)return H.c(p,u)
r.h(0,p[u]).bn(a,s)}},
di:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this.cy,i=H.d(j,0),h=P.bp(new H.av(j,[i]),!0,i)
for(u=0;u<h.length;u=t){i=$.x()
t=u+1
if(typeof i!=="number")return i.l()
s=i*t
r=j.h(0,h[u])
q=r.b
p=q.r
o=$.Z()
n=r.z
if(typeof o!=="number")return o.j()
if(typeof p!=="number")return p.M()
m=q.f
if(typeof m!=="number")return m.j()
l=q.e
k=$.bg()
if(typeof l!=="number")return l.j()
if(typeof k!=="number")return H.b(k)
a.fillStyle=q.dy
a.font=q.fx
a.textAlign="left"
a.textBaseline="middle"
a.fillText("\u25b8    "+H.a(r.f),l+k,m+s+i/2)
r.cn(a,p-(o+n),s)}},
aB:function(a){var u,t,s,r,q,p=this
a.beginPath()
u=p.e
t=$.Z()
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.b(t)
a.moveTo(u+t,p.f)
p.bg(a,p.z==null&&p.id)
u=p.Q===0
s=u&&p.z==null
p.c8(a,s,u&&p.y==null)
p.bf(a,p.y==null&&p.Q===0)
if(p.Q<=0)u=p.z!=null&&p.y!=null
else u=!0
if(u){u=p.e
s=p.f
r=p.r2?$.x():p.x
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
a.lineTo(u,s+r)
a.lineTo(p.e,p.f)
r=p.e
if(typeof r!=="number")return r.j()
a.lineTo(r+t,p.f)}else if(p.y!=null){u=p.e
s=p.f
r=p.r2?$.x():p.x
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
a.lineTo(u,s+r)
r=p.e
s=p.f
if(typeof s!=="number")return s.j()
a.lineTo(r,s+t)
s=p.e
r=p.f
if(typeof s!=="number")return s.j()
a.quadraticCurveTo(s,r,s+t,r)}else{u=p.z
s=p.e
r=p.f
if(u!=null){u=p.r2
q=u?$.x():p.x
if(typeof r!=="number")return r.j()
if(typeof q!=="number")return H.b(q)
u=u?$.x():p.x
if(typeof u!=="number")return H.b(u)
a.quadraticCurveTo(s,r+q,s,r+u-t)
a.lineTo(p.e,p.f)
u=p.e
if(typeof u!=="number")return u.j()
a.lineTo(u+t,p.f)}else{u=p.r2
q=u?$.x():p.x
if(typeof r!=="number")return r.j()
if(typeof q!=="number")return H.b(q)
u=u?$.x():p.x
if(typeof u!=="number")return H.b(u)
a.quadraticCurveTo(s,r+q,s,r+u-t)
u=p.e
r=p.f
if(typeof r!=="number")return r.j()
a.lineTo(u,r+t)
r=p.e
u=p.f
if(typeof r!=="number")return r.j()
a.quadraticCurveTo(r,u,r+t,u)}}a.closePath()},
c8:function(a,b,c){var u,t,s=this,r=$.Z(),q=s.e,p=s.r
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
if(typeof r!=="number")return H.b(r)
a.lineTo(q+p-r,s.f)
if(b&&c){q=s.e
p=s.r
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
p=q+p
q=s.f
if(typeof q!=="number")return q.j()
a.quadraticCurveTo(p,q,p,q+r)
q=s.e
p=s.r
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
u=s.f
t=s.r2?$.x():s.x
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.b(t)
a.lineTo(q+p,u+t-r)
t=s.e
u=s.r
if(typeof t!=="number")return t.j()
if(typeof u!=="number")return H.b(u)
u=t+u
t=s.f
q=s.r2
p=q?$.x():s.x
if(typeof t!=="number")return t.j()
if(typeof p!=="number")return H.b(p)
q=q?$.x():s.x
if(typeof q!=="number")return H.b(q)
a.quadraticCurveTo(u,t+p,u-r,t+q)}else if(c){q=s.e
p=s.r
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
a.lineTo(q+p,s.f)
p=s.e
q=s.r
if(typeof p!=="number")return p.j()
if(typeof q!=="number")return H.b(q)
u=s.f
t=s.r2?$.x():s.x
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.b(t)
a.lineTo(p+q,u+t-r)
t=s.e
u=s.r
if(typeof t!=="number")return t.j()
if(typeof u!=="number")return H.b(u)
u=t+u
t=s.f
q=s.r2
p=q?$.x():s.x
if(typeof t!=="number")return t.j()
if(typeof p!=="number")return H.b(p)
q=q?$.x():s.x
if(typeof q!=="number")return H.b(q)
a.quadraticCurveTo(u,t+p,u-r,t+q)}else{q=s.e
p=s.r
u=s.f
if(b){if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
q+=p
if(typeof u!=="number")return u.j()
a.quadraticCurveTo(q,u,q,u+r)
u=s.e
q=s.r
if(typeof u!=="number")return u.j()
if(typeof q!=="number")return H.b(q)
p=s.f
t=s.r2?$.x():s.x
if(typeof p!=="number")return p.j()
if(typeof t!=="number")return H.b(t)
a.lineTo(u+q,p+t)
t=s.e
p=s.r
if(typeof t!=="number")return t.j()
if(typeof p!=="number")return H.b(p)
q=s.f
u=s.r2?$.x():s.x
if(typeof q!=="number")return q.j()
if(typeof u!=="number")return H.b(u)
a.lineTo(t+p-r,q+u)}else{if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
a.lineTo(q+p,u)
q=s.e
p=s.r
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.b(p)
u=s.f
t=s.r2?$.x():s.x
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.b(t)
a.lineTo(q+p,u+t)
t=s.e
u=s.r
if(typeof t!=="number")return t.j()
if(typeof u!=="number")return H.b(u)
p=s.f
q=s.r2?$.x():s.x
if(typeof p!=="number")return p.j()
if(typeof q!=="number")return H.b(q)
a.lineTo(t+u-r,p+q)}}},
bg:function(a,b){var u,t,s,r=this,q=$.Z(),p=r.e
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return p.j()
u=$.bg()
t=r.gam()
if(typeof u!=="number")return u.l()
s=p+q*2+u*t
if(b){a.lineTo(s,r.f)
p=r.f
if(typeof p!=="number")return p.j()
u=p+q/2
t=s+q
a.bezierCurveTo(s,u,t,u,t,p)}p=r.e
u=r.r
if(typeof p!=="number")return p.j()
if(typeof u!=="number")return H.b(u)
a.lineTo(p+u-q,r.f)},
bf:function(a,b){var u,t,s,r,q,p,o=this,n=$.Z(),m=o.e
if(typeof n!=="number")return n.l()
if(typeof m!=="number")return m.j()
u=m+n*2
if(!o.r2){m=$.bg()
t=o.ga7()
if(typeof m!=="number")return m.l()
u+=m*t}if(b){m=u+n
t=o.f
s=o.r2?$.x():o.x
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.b(s)
a.lineTo(m,t+s)
s=o.f
t=o.r2
r=t?$.x():o.x
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.b(r)
q=n/2
p=t?$.x():o.x
if(typeof p!=="number")return H.b(p)
t=t?$.x():o.x
if(typeof t!=="number")return H.b(t)
a.bezierCurveTo(m,s+r+q,u,s+p+q,u,s+t)}m=o.f
t=o.r2?$.x():o.x
if(typeof m!=="number")return m.j()
if(typeof t!=="number")return H.b(t)
a.lineTo(u-n,m+t)},
aO:function(a){var u,t,s=this,r=a.c,q=a.e,p=s.f,o=s.r2?$.x():s.x
if(typeof p!=="number")return p.j()
if(typeof o!=="number")return H.b(o)
u=s.e
if(typeof u!=="number")return H.b(u)
if(r>=u)if(q>=p){t=s.r
if(typeof t!=="number")return H.b(t)
o=r<=u+t&&q<=p+o}else o=!1
else o=!1
return o},
a8:function(a){var u,t,s,r=this
r.k1=!0
u=a.c
r.k2=u
t=a.e
r.k3=t
r.k4=u
r.r1=t
u=r.z
if(u!=null)r.z=u.y=null
for(u=r.go,s=r;s!=null;){u.dv(s)
u.ad(s)
s=s.gaT()}return r},
bx:function(a){var u,t=this
t.rx=t.r2=t.k1=!1
u=t.go
if(!u.dL(t))u.cd(t)
u.ap()},
bv:function(a){this.k2=a.c
this.k3=a.e},
bw:function(a){},
$ibt:1}
U.dp.prototype={
gaT:function(){var u=this.y
if(u!=null)return u
else{u=this.ry
if(u!=null)return u
else{u=this.ch
if(u!=null)return u.ry
else return}}},
S:function(a,b){var u,t=this
t.Q=a
t.ch=b
u=t.y
if(u!=null)u.S(a+t.ga7(),t)}}
U.ah.prototype={
gam:function(){return 1},
ga7:function(){return 1},
gcr:function(){return!1},
aM:function(a){var u,t=this,s=t.go,r=t.a,q=t.b,p=P.M,o=U.ak,n=$.a7()
if(typeof n!=="number")return H.b(n)
u=new U.ah(r,q,new H.I([p,o]),new H.I([p,o]),"400 "+H.a(14*n)+"px 'Poppins', sans-serif",s)
u.a3(s,r,q)
u.id=!1
t.ax(u)
return u},
R:function(a){var u,t="children",s=this.A()
s.i(0,t,[])
J.aD(a,s)
u=this.y
if(u!=null)u.R(H.V(s.h(0,t)))},
b6:function(a){},
b4:function(a){},
a8:function(a){return this.K.a8(a)}}
U.co.prototype={
gam:function(){return 1},
ga7:function(){return 0},
S:function(a,b){var u
this.Q=a
this.ch=b
u=this.y
if(u!=null)u.S(a,b)},
R:function(a){J.aD(a,this.A())},
b5:function(a){}}
U.bj.prototype={
gam:function(){return 0},
ga7:function(){return 1},
aM:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=U.ij(k.go,k.a,k.b)
k.ax(j)
for(u=k.K,t=u.length,s=[P.M,U.ak],r=0;r<u.length;u.length===t||(0,H.S)(u),++r){q=u[r]
if(!q.$ico){p=q.go
o=q.a
n=q.b
m=$.a7()
if(typeof m!=="number")return H.b(m)
l=new U.ah(o,n,new H.I(s),new H.I(s),"400 "+H.a(14*m)+"px 'Poppins', sans-serif",p)
l.a3(p,o,n)
l.id=!1
q.ax(l)
j.bH(l)}}j.N.d=k.N.d
return j},
gak:function(){var u=this.N,t=u.y
return t!=null?t.gak():u},
R:function(a){var u,t,s,r=this,q="children",p=r.A()
p.i(0,q,[])
p.i(0,"clauses",[])
J.aD(a,p)
u=r.y
if(u!=null)u.R(H.V(p.h(0,q)))
for(u=r.K,t=u.length,s=0;s<u.length;u.length===t||(0,H.S)(u),++s)u[s].R(H.V(p.h(0,"clauses")))
u=r.N.y
if(u!=null)u.R(a)},
S:function(a,b){var u,t,s,r=this
r.Q=a
r.ch=b
u=r.y
if(u!=null)u.S(a+1,r)
for(u=r.K,t=u.length,s=0;s<u.length;u.length===t||(0,H.S)(u),++s)u[s].S(a,b)},
a4:function(){var u,t,s,r,q,p,o,n,m,l=this
l.cQ()
for(u=l.K,t=u.length,s=l,r=0;r<u.length;u.length===t||(0,H.S)(u),++r,s=q){q=u[r]
p=s.y
if(p!=null){o=p.gak()
q.e=l.e
p=o.f
n=o.r2?$.x():o.x
if(typeof p!=="number")return p.j()
if(typeof n!=="number")return H.b(n)
q.f=p+n}else{q.e=l.e
p=s.f
n=s.r2?$.x():s.x
if(typeof p!=="number")return p.j()
if(typeof n!=="number")return H.b(n)
m=$.x()
if(typeof m!=="number")return H.b(m)
q.f=p+n+m}q.a4()}},
bH:function(a){var u,t,s,r,q=this
a.K=q
u=q.K
C.a.D(u,q.N)
C.a.p(u,a)
C.a.p(u,q.N)
for(t=0;s=u.length,t<s-1;t=r){r=t+1
u[t].ry=u[r]}if(0>=s)return H.c(u,0)
q.ry=u[0]},
aB:function(a){var u,t,s,r,q,p,o,n,m,l=this
if(l.r2){l.cP(a)
return}u=$.Z()
a.beginPath()
t=l.e
if(typeof t!=="number")return t.j()
if(typeof u!=="number")return H.b(u)
a.moveTo(t+u,l.f)
s=l.z==null&&l.id
for(r=l;r!=null;){if(r.y==null)q=r.ry!=null||l.Q===0
else q=!1
r.bg(a,s)
r.c8(a,s,q)
r.bf(a,q)
if(r.ry!=null){t=r.e
p=$.bg()
if(typeof t!=="number")return t.j()
if(typeof p!=="number")return H.b(p)
t+=p
o=r.f
n=r.r2
m=n?$.x():r.x
if(typeof o!=="number")return o.j()
if(typeof m!=="number")return H.b(m)
n=n?$.x():r.x
if(typeof n!=="number")return H.b(n)
a.quadraticCurveTo(t,o+m,t,o+n+u)
t=r.y
o=r.e
n=r.ry
if(t!=null){if(typeof o!=="number")return o.j()
a.lineTo(o+p,n.f)
t=r.e
if(typeof t!=="number")return t.j()
a.lineTo(t+p+u,r.ry.f)}else{if(typeof o!=="number")return o.j()
t=n.f
if(typeof t!=="number")return t.M()
a.lineTo(o+p,t-u)
t=r.e
if(typeof t!=="number")return t.j()
p=t+p
t=r.ry.f
a.quadraticCurveTo(p,t,p+u,t)}}s=r.y==null
r=r.ry}t=l.N
p=t.y!=null||l.Q>0
o=l.e
n=t.f
if(p){t=t.r2?$.x():t.x
if(typeof n!=="number")return n.j()
if(typeof t!=="number")return H.b(t)
a.lineTo(o,n+t)}else{if(typeof o!=="number")return o.j()
t=t.r2?$.x():t.x
if(typeof n!=="number")return n.j()
if(typeof t!=="number")return H.b(t)
a.lineTo(o+u,n+t)
t=l.e
n=l.N
o=n.f
p=n.r2
m=p?$.x():n.x
if(typeof o!=="number")return o.j()
if(typeof m!=="number")return H.b(m)
p=p?$.x():n.x
if(typeof p!=="number")return H.b(p)
a.quadraticCurveTo(t,o+m,t,o+p-u)}t=l.z
p=l.e
o=l.f
if(t!=null){a.lineTo(p,o)
t=l.e
if(typeof t!=="number")return t.j()
a.lineTo(t+u,l.f)}else{if(typeof o!=="number")return o.j()
a.lineTo(p,o+u)
t=l.e
p=l.f
if(typeof t!=="number")return t.j()
a.quadraticCurveTo(t,p,t+u,p)}a.closePath()}}
U.as.prototype={
aP:function(a){var u,t=this,s=t.e,r=s.length
if(r===1){r=t.a
if(r.c!==t)a.a+="("
a.a+=H.a(t.b)+" "
if(0>=s.length)return H.c(s,0)
s[0].aP(a)
if(r.c!==t)a.a+=")"}else if(r===2){u=t.a
if(u.c!==t)a.a+="("
if(0>=r)return H.c(s,0)
s[0].aP(a)
a.a+=" "+H.a(t.b)+" "
if(1>=s.length)return H.c(s,1)
s[1].aP(a)
if(u.c!==t)a.a+=")"}else{s=t.b
if(s!=null)a.a+=s}},
A:function(){var u,t,s,r=this,q="children",p=P.hH(["name",r.b,"type",r.c]),o=r.e
if(o.length!==0){p.i(0,q,[])
for(u=o.length,t=0;t<o.length;o.length===u||(0,H.S)(o),++t){s=o[t]
J.aD(p.h(0,q),s.A())}}o=r.d
if(o!=null)p.i(0,"format",o)
return p},
al:function(a){var u,t,s,r,q,p=this,o="children",n=a.h(0,"name")
p.b=n==null?"":J.G(n)
n=a.h(0,"type")
p.c=n==null?"num":J.G(n)
n=p.e
C.a.sk(n,0)
if(!!J.k(a.h(0,o)).$in)for(u=J.z(H.P(a.h(0,o),"$io")),t=p.a,s=[U.as];u.m();){r=u.gq()
q=new U.as(t,H.p(J.bG(r,"type")),H.B([],s))
C.a.p(n,q)
q.al(H.e(r,"$ir"))}},
dW:function(a){var u,t,s,r
if(a==null)return this.e.length!==0
u=this.e
t=J.O(a)
if(u.length!==t.gk(a))return!0
for(s=0;s<t.gk(a);++s){r=t.h(a,s)
if(s>=u.length)return H.c(u,s)
if(!J.ap(r,u[s].c))return!0}return!1},
cN:function(a){var u,t,s,r,q,p=this,o=p.e,n=o.length===0
if(p.dW(a)){C.a.sk(o,0)
if(a!=null)for(u=J.O(a),t=p.a,s=[U.as],r=0;r<u.gk(a);++r)if(r===0&&n&&J.ap(u.h(a,r),p.c)){q=new U.as(t,H.p(u.h(a,r)),H.B([],s))
q.b=p.b
C.a.p(o,q)}else C.a.p(o,new U.as(t,H.p(u.h(a,r)),H.B([],s)))}},
cg:function(a){var u,t=this,s=document.createElement("div")
C.b.X(s,H.a(t.b))
s.classList.add("nt-expression-text")
s.classList.add("editable")
u=H.a(t.c)
s.classList.add(u)
u=W.A
W.K(s,"click",H.h(new U.dM(t,s),{func:1,ret:-1,args:[u]}),!1,u)
t.co(s,a)
a.appendChild(s)},
co:function(a,b){var u=W.A,t={func:1,ret:-1,args:[u]}
W.K(a,"mouseenter",H.h(new U.dN(b),t),!1,u)
W.K(a,"mouseleave",H.h(new U.dO(b),t),!1,u)},
aJ:function(a,b){var u=document.createElement("div")
C.b.X(u,b?"(":")")
u.classList.add("nt-expression-text")
u.classList.add("parenthesis")
this.co(u,a)
a.appendChild(u)},
dS:function(a){var u,t,s=this
s.b=J.G(U.aP(s.b,0))
u=W.jY("number")
u.className="nt-number-input"
u.value=s.b
u.step="1"
t=W.j
W.K(u,"change",H.h(new U.dL(s,u),{func:1,ret:-1,args:[t]}),!1,t)
a.appendChild(u)},
ge8:function(){var u=this.b
if(u!=null)return P.jf(u,new U.dP())!=null
return!1},
aV:function(a){var u,t,s=this,r=document.createElement("div")
r.className="nt-expression"
if((s.ge8()||s.b==null)&&s.c==="num")s.dS(r)
else if(s.b==null){r.classList.add("empty")
C.b.a_(r,"<small>&#9660;</small>")}else{u=s.e
t=u.length
if(t===1){s.aJ(r,!0)
s.cg(r)
if(0>=u.length)return H.c(u,0)
u[0].aV(r)
s.aJ(r,!1)}else if(t===2){s.aJ(r,!0)
if(0>=u.length)return H.c(u,0)
u[0].aV(r)
s.cg(r)
if(1>=u.length)return H.c(u,1)
u[1].aV(r)
s.aJ(r,!1)}else C.b.a_(r,"<div class='nt-expression-text "+H.a(s.c)+"'>"+H.a(s.b)+"</div>")}if(s.e.length===0){r.classList.add("editable")
u=W.A
W.K(r,"click",H.h(new U.dS(s,r),{func:1,ret:-1,args:[u]}),!1,u)}a.appendChild(r)},
cw:function(a){var u,t,s=this,r=W.v,q=document
H.ad(r,r,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
r=new W.a5(q.querySelectorAll(".nt-pulldown-menu"),[r])
r.w(r,new U.dQ())
u=q.createElement("div")
u.classList.add("nt-pulldown-menu")
q=s.a.a
s.bK(u,q.db)
if(J.jG(q.cy))C.b.a_(u,"<hr>")
s.bK(u,q.cy)
C.b.a_(u,"<hr>")
t=W.ii("#")
C.l.X(t,"Clear")
t.className="clear"
u.appendChild(t)
r=W.A
W.K(t,"click",H.h(new U.dR(s,u),{func:1,ret:-1,args:[r]}),!1,r)
a.appendChild(u)},
bK:function(a,b){var u,t,s,r,q,p
for(u=J.z(b),t=W.A,s={func:1,ret:-1,args:[t]};u.m();){r=u.gq()
q=J.O(r)
if(J.ap(q.h(r,"type"),this.c)){p=document.createElement("a")
p.href="#"
C.l.X(p,H.a(q.h(r,"name")))
a.appendChild(p)
W.K(p,"click",H.h(new U.dK(this,a,r),s),!1,t)}}}}
U.dM.prototype={
$1:function(a){H.e(a,"$iA")
this.a.cw(this.b)
a.stopPropagation()},
$S:0}
U.dN.prototype={
$1:function(a){H.e(a,"$iA")
this.a.classList.add("highlight")},
$S:0}
U.dO.prototype={
$1:function(a){H.e(a,"$iA")
this.a.classList.remove("highlight")},
$S:0}
U.dL.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.value
u.b=s
if(s==="")t.value=u.b="0"},
$S:4}
U.dP.prototype={
$1:function(a){return},
$S:28}
U.dS.prototype={
$1:function(a){H.e(a,"$iA")
this.a.cw(this.b)
a.stopPropagation()},
$S:0}
U.dQ.prototype={
$1:function(a){return J.bH(H.e(a,"$iv"))},
$S:7}
U.dR.prototype={
$1:function(a){var u
H.e(a,"$iA")
C.b.O(this.b)
u=this.a
u.b=null
C.a.sk(u.e,0)
u.a.bs()
a.stopPropagation()
a.preventDefault()},
$S:0}
U.dK.prototype={
$1:function(a){var u,t,s
H.e(a,"$iA")
C.b.O(this.b)
u=this.a
t=this.c
s=J.O(t)
u.cN(H.V(s.h(t,"arguments")))
u.b=H.p(s.h(t,"name"))
u.c=H.p(s.h(t,"type"))
u.d=H.p(s.h(t,"format"))
u.a.bs()
a.stopPropagation()
a.preventDefault()},
$S:0}
U.dA.prototype={
n:function(a){var u,t=new P.am("")
this.c.aP(t)
u=t.a
return u.charCodeAt(0)==0?u:u},
al:function(a){var u=J.k(a)
if(!!u.$ir)this.c.al(a)
else if(a!=null)this.c.b=u.n(a)},
bs:function(){var u=this,t=u.b
if(t!=null&&u.c!=null){J.jE(t).aL(0)
u.c.aV(H.e(u.b,"$ibl"))}}}
U.cj.prototype={
ah:function(a,b,c){var u
for(u=0;u<b;++u)a.a+="  "
a.a+=c+"\n"},
af:function(a,b,c){var u,t,s=J.O(b),r=H.p(s.h(b,"format")),q=s.h(b,"params"),p=s.h(b,"properties"),o=J.k(q),n=!!o.$in?o.gk(q):0,m=J.k(p),l=!!m.$in?m.gk(p):0
if(typeof r!=="string"){r=H.a(s.h(b,"action"))
for(u=0;u<n;++u)r+=" {"+u+"}"
for(u=0;u<l;++u)r+=" {P"+u+"}"}for(u=0;u<n;++u){s="{"+u+"}"
t=this.c3(o.h(q,u))
if(typeof t!=="string")H.X(H.aC(t))
r=H.i2(r,s,t)}for(u=0;u<l;++u){s="{P"+u+"}"
o=this.c3(m.h(p,u))
if(typeof o!=="string")H.X(H.aC(o))
r=H.i2(r,s,o)}this.ah(a,c,r)},
c3:function(a){var u="value",t=J.O(a)
if(!!J.k(t.h(a,u)).$ir)return this.ag(t.h(a,u))
else{t=t.h(a,u)
return t==null?"":J.G(t)}},
ag:function(a){var u,t,s,r,q,p=this,o=J.O(a),n=o.h(a,"children")
if(n==null||!J.k(n).$in)n=[]
u=o.h(a,"name")
t=u==null?"":J.G(u)
u=o.h(a,"format")
if(typeof u==="string"){s=H.p(o.h(a,"format"))
for(o=J.O(n),r=0;r<o.gk(n);++r){u="{"+r+"}"
q=p.ag(o.h(n,r))
s.toString
if(typeof q!=="string")H.X(H.aC(q))
s=H.i2(s,u,q)}return s}else{o=J.O(n)
if(o.gk(n)===1)return"("+H.a(t)+" "+H.a(p.ag(o.h(n,0)))+")"
else if(o.gk(n)===2)return"("+H.a(p.ag(o.h(n,0)))+" "+H.a(t)+" "+H.a(p.ag(o.h(n,1)))+")"
else return t}}}
U.eA.prototype={
c2:function(a){var u,t=new P.am("")
for(u=J.z(H.P(a.h(0,"chains"),"$io"));u.m();){this.Y(t,u.gq(),0)
t.a+="\n"}u=t.a
return u.charCodeAt(0)==0?u:u},
Y:function(a,b,c){var u,t,s,r,q,p,o=this,n="children"
for(u=J.z(H.P(b,"$io")),t=c+1;u.m();){s=u.gq()
o.af(a,s,c)
r=J.O(s)
if(!!J.k(r.h(s,n)).$in)o.Y(a,r.h(s,n),t)
if(!!J.k(r.h(s,"clauses")).$in)for(r=J.z(H.P(r.h(s,"clauses"),"$io"));r.m();){q=r.gq()
o.af(a,q,c)
p=J.O(q)
if(!!J.k(p.h(q,n)).$in)o.Y(a,p.h(q,n),t)}}}}
U.ep.prototype={
c2:function(a){var u,t,s,r=new P.am("")
for(u=J.z(H.P(a.h(0,"chains"),"$io"));u.m();){t=u.gq()
s=J.O(t)
if(J.ic(s.gk(t),0)&&J.ap(J.bG(s.h(t,0),"type"),"nlogo:procedure")){this.af(r,s.W(t,0),0)
this.Y(r,t,1)
s=r.a+="end\n"
r.a=s+"\n"}}u=r.a
return u.charCodeAt(0)==0?u:u},
Y:function(a,b,c){var u,t,s,r,q,p,o=this,n="children"
for(u=J.z(H.P(b,"$io")),t=c+1;u.m();){s=u.gq()
o.af(a,s,c)
r=J.O(s)
if(!!J.k(r.h(s,n)).$in){o.ah(a,c,"[")
o.Y(a,r.h(s,n),t)
o.ah(a,c,"]")}if(!!J.k(r.h(s,"clauses")).$in)for(r=J.z(H.P(r.h(s,"clauses"),"$io"));r.m();){q=r.gq()
o.af(a,q,c)
p=J.O(q)
if(!!J.k(p.h(q,n)).$in){o.ah(a,c,"[")
o.Y(a,p.h(q,n),t)
o.ah(a,c,"]")}}}}}
U.dc.prototype={
e9:function(a){var u,t
if(!a.r2)if(!a.rx){u=a.e
t=a.r
if(typeof t!=="number")return t.l()
if(typeof u!=="number")return u.j()
t=u+t*0.75>=this.a.Q-this.d
u=t}else u=!1
else u=!1
return u},
cM:function(a){var u=this.b,t=H.d(u,0),s=new H.b8(u,H.h(new U.dd(a),{func:1,ret:P.E,args:[t]}),[t])
if(s.gk(s)===1)return s.ge1(s).a
return},
aE:function(a){var u,t,s,r,q,p,o=$.bh()
if(typeof o!=="number")return o.l()
o=this.d=o*1.5
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.S)(u),++s,o=p){r=u[s].a
a.save()
a.font=r.fx
q=a.measureText(r.b).width
a.restore()
r=$.Z()
if(typeof r!=="number")return r.l()
if(typeof q!=="number")return q.j()
p=$.hr()
if(typeof p!=="number")return p.l()
p=Math.max(o,q+r*2+p*2)
this.d=p}},
bn:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this
k.aE(a)
a.save()
a.fillStyle="rgba(0,0,0, 0.2)"
u=k.a
t=u.Q
s=k.d
a.fillRect(t-s,0,s,u.ch)
if(b){t=u.Q
s=k.d
a.fillRect(t-s,0,s,u.ch)}u=u.Q
t=k.d
s=$.hr()
if(typeof s!=="number")return H.b(s)
r=u-t+s
s=$.x()
if(typeof s!=="number")return s.aa()
q=0+s/2
for(u=k.b,t=u.length,p=0;p<u.length;u.length===t||(0,H.S)(u),++p){o=u[p]
o.b=r
o.c=q
n=o.e
m=o.d
l=o.a
m.ar(l.a)
if(typeof n!=="number")return n.M()
a.save()
m=m.ar(l.a)
if(!(n<0||n-m>0))a.globalAlpha=0.3
l.e=o.b
l.f=o.c
l.aF(a,$.bh())
l.b4(a)
l.b5(a)
l.b6(a)
a.restore()
q+=s*1.5}a.restore()}}
U.dd.prototype={
$1:function(a){return H.e(a,"$ial").a.a==this.a},
$S:30}
U.al.prototype={
e7:function(){var u=this.e,t=this.d.ar(this.a.a)
if(typeof u!=="number")return u.M()
return u<0||u-t>0},
aO:function(a){return this.a.aO(a)},
a8:function(a){var u,t,s,r,q,p=this
if(p.e7()){u=p.a
t=u.aM(0)
t.a=u.a
s=u.e
if(typeof s!=="number")return s.M()
t.e=s-5
u=u.f
if(typeof u!=="number")return u.M()
t.f=u-5
t.rx=!0
u=p.d
u.ad(t)
if(!!t.$ibj)for(s=t.K,r=s.length,q=0;q<s.length;s.length===r||(0,H.S)(s),++q)u.ad(s[q])
return t.a8(a)}return p},
bx:function(a){},
bv:function(a){},
bw:function(a){},
$ibt:1}
U.ak.prototype={
gH:function(a){var u=this.c
return u==null?"":J.G(u)},
sH:function(a,b){this.c=b==null?"":J.G(b)},
ga9:function(){return H.a(J.G(this.c))+H.a(this.r)},
ab:function(a,b){var u,t,s,r=this
if(H.L(b.t("id"))){u=H.w(b.h(0,"id"))
r.a=u
t=r.b
s=t.db
if(typeof u!=="number")return u.eq()
if(u>=s)t.db=u+1}else u=r.a=r.b.db++
b.i(0,"id",u)
u=b.h(0,"type")
r.e=u==null?"num":J.G(u)
u=b.h(0,"name")
r.f=u==null?"":J.G(u)
u=b.h(0,"unit")
r.r=u==null?"":J.G(u)
u=b.h(0,"default")
r.d=u
r.sH(0,u)},
aN:function(a,b){return U.hI(b,this.A())},
A:function(){var u=this
return P.hH(["id",u.a,"type",u.e,"name",u.f,"unit",u.r,"value",u.gH(u),"default",u.d])},
aE:function(a){var u,t=this,s=$.Z()
if(typeof s!=="number")return s.l()
t.z=s*2
a.save()
a.font=t.b.fx
s=t.z
u=a.measureText(t.ga9()).width
if(typeof u!=="number")return H.b(u)
t.z=s+u
a.restore()},
cn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=this
j.x=b
j.y=c
u=j.b
a.font=u.fx
a.textAlign="center"
a.textBaseline="middle"
t=u.e
if(typeof t!=="number")return t.j()
s=t+b
t=u.f
if(typeof t!=="number")return t.j()
r=$.x()
if(typeof r!=="number")return r.aa()
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
a.fillStyle=j.ch?u.dx:u.dy
a.fill()
a.fillStyle=j.ch?u.dy:u.dx
C.q.cp(a,j.ga9(),s+n/2,o+q*0.55)},
bn:function(a,b){return this.cn(a,b,0)},
aO:function(a){var u,t=this,s=a.c,r=t.b,q=r.e,p=t.x
if(typeof q!=="number")return q.j()
p=q+p
if(s>=p){q=a.e
r=r.f
u=t.y
if(typeof r!=="number")return r.j()
u=r+u
if(q>=u)if(s<=p+t.z){s=$.x()
if(typeof s!=="number")return H.b(s)
s=q<=u+s}else s=!1
else s=!1}else s=!1
return s},
bx:function(a){this.ch=!1
this.aI(H.w(a.d),H.w(a.f))
this.b.go.F()},
a8:function(a){this.ch=!0
this.b.go.F()
return this},
bv:function(a){},
bw:function(a){},
aI:function(a,b){var u,t,s,r,q,p,o,n,m=this,l="The type argument '",k="' is not a subtype of the type variable bound '",j="' of type variable 'T' in 'querySelectorAll'.",i=document,h=i.createElement("div")
h.className="backdrop"
u=m.bO()
C.b.a_(h,'      <div class="nt-param-dialog" style="top: '+b+';">\n        <div class="nt-param-table">\n          <div class="nt-param-row">'+u+'</div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>')
t=H.e(i.querySelector("#"+H.a(m.b.go.r)).parentElement,"$im")
if(t==null)return
t.appendChild(h)
s=H.e(i.querySelector("#nt-param-label-"+H.a(m.a)),"$im")
r=H.e(i.querySelector("#nt-param-"+H.a(m.a)),"$iaZ")
q=W.v
H.ad(q,q,l,k,j)
p=[q]
o=[q]
n=[W.A]
new W.az(H.u(new W.a5(i.querySelectorAll(".nt-param-confirm"),p),"$ia3",o,"$aa3"),!1,"click",n).a0(new U.ew(m,r,h))
H.ad(q,q,l,k,j)
new W.az(H.u(new W.a5(i.querySelectorAll(".nt-param-cancel"),p),"$ia3",o,"$aa3"),!1,"click",n).a0(new U.ex(h))
h.classList.add("show")
if(r!=null){r.focus()
if(s!=null){i=W.j
q={func:1,ret:-1,args:[i]}
W.K(r,"change",H.h(new U.ey(s,r),q),!1,i)
W.K(r,"input",H.h(new U.ez(s,r),q),!1,i)}}},
bO:function(){return'      <input class="nt-param-input" id="nt-param-'+H.a(this.a)+'" type="text" value="'+this.ga9()+'">\n      <span class="nt-param-unit">'+H.a(this.r)+"</span>\n    "},
$ibt:1}
U.ew.prototype={
$1:function(a){var u,t=this
H.e(a,"$iA")
u=t.b
if(u!=null)t.a.sH(0,u.value)
C.b.O(t.c)
u=t.a.b.go
u.F()
u.ap()},
$S:0}
U.ex.prototype={
$1:function(a){H.e(a,"$iA")
return C.b.O(this.a)},
$S:5}
U.ey.prototype={
$1:function(a){J.ht(this.a,this.b.value)},
$S:4}
U.ez.prototype={
$1:function(a){J.ht(this.a,this.b.value)},
$S:4}
U.cA.prototype={
bF:function(a,b){this.cx=U.i3(b.h(0,"random"),!1)
this.cy=U.aP(b.h(0,"step"),this.cy)},
A:function(){var u=this.bE()
u.i(0,"random",this.cx)
u.i(0,"step",this.cy)
return u},
gH:function(a){return U.aP(this.c,0)},
sH:function(a,b){this.c=U.aP(b,0)},
ga9:function(){var u=J.jL(this.gH(this),1)
if(C.e.e0(u,".0"))u=C.e.a2(u,0,u.length-2)
return u+H.a(this.r)},
bO:function(){var u=this
return'      <div class="nt-param-name">'+H.a(u.f)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+H.a(u.a)+'" type="number" step="'+H.a(u.cy)+'" value="'+H.a(u.gH(u))+'">\n        <span class="nt-param-unit">'+H.a(u.r)+"</span>\n      </div>\n    "}}
U.e0.prototype={
gH:function(a){return U.i4(this.c,0)},
sH:function(a,b){this.c=U.i4(b,0)}}
U.eD.prototype={
A:function(){var u=this.cW()
u.i(0,"min",this.r1)
u.i(0,"max",this.r2)
return u},
aI:function(a,b){var u,t,s,r,q,p,o,n=this,m=document,l=m.createElement("div")
l.className="backdrop"
u=m.createElement("div")
u.className="nt-param-dialog"
t=u.style
s=""+b+"px"
t.top=s
r=m.createElement("div")
r.className="nt-param-table"
C.b.a_(r,'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.a(n.f)+':\n            <label id="nt-param-label-'+H.a(n.a)+'" for="nt-param-'+H.a(n.a)+'">'+H.a(U.aP(n.c,0))+'</label>\n            <span class="nt-param-unit">'+H.a(n.r)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+H.a(n.a)+'" type="range" value="'+H.a(U.aP(n.c,0))+'" min="'+H.a(n.r1)+'" max="'+H.a(n.r2)+'" step="'+H.a(n.cy)+'">\n          </div>\n        </div>\n      ')
u.appendChild(r)
t=W.A
s={func:1,ret:-1,args:[t]}
W.K(u,"click",H.h(new U.eE(),s),!1,t)
l.appendChild(u)
W.K(l,"click",H.h(new U.eF(l),s),!1,t)
q=H.e(m.querySelector("#"+H.a(n.b.go.r)).parentElement,"$im")
if(q!=null)q.appendChild(l)
p=H.e(m.querySelector("#nt-param-label-"+H.a(n.a)),"$im")
o=H.e(m.querySelector("#nt-param-"+H.a(n.a)),"$iaZ")
if(o!=null&&p!=null){m=W.j
t={func:1,ret:-1,args:[m]}
W.K(o,"change",H.h(new U.eG(n,o,l),t),!1,m)
W.K(o,"input",H.h(new U.eH(p,o),t),!1,m)}l.classList.add("show")}}
U.eE.prototype={
$1:function(a){H.e(a,"$iA").stopPropagation()},
$S:0}
U.eF.prototype={
$1:function(a){H.e(a,"$iA")
C.b.O(this.a)},
$S:0}
U.eG.prototype={
$1:function(a){var u=this.a
u.c=U.aP(this.b.value,0)
C.b.O(this.c)
u=u.b.go
u.F()
u.ap()
a.stopPropagation()},
$S:4}
U.eH.prototype={
$1:function(a){J.ht(this.a,this.b.value)},
$S:4}
U.eK.prototype={
ga9:function(){return H.a(J.G(this.c))+H.a(this.r)+" \u25be"},
aN:function(a,b){return U.iD(b,this.A())},
A:function(){var u=this.bE()
u.i(0,"values",this.cx)
return u},
aI:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=document,i=j.createElement("div")
i.className="backdrop"
u=j.createElement("div")
u.className="nt-param-dialog small"
t=u.style
s=""+b+"px"
t.top=s
r=j.createElement("div")
r.className="nt-param-table"
for(t=J.z(k.cx),s=W.A,q={func:1,ret:-1,args:[s]};t.m();){p=t.gq()
o=j.createElement("div")
o.className="nt-param-row"
n=j.createElement("div")
n.className="nt-select-option"
H.p(p)
C.b.X(n,p)
m=k.c
if(p==(m==null?"":J.G(m)))n.classList.add("selected")
W.K(n,"click",H.h(new U.eL(k,p,i),q),!1,s)
o.appendChild(n)
r.appendChild(o)}u.appendChild(r)
i.appendChild(u)
W.K(i,"click",H.h(new U.eM(i),q),!1,s)
l=H.e(j.querySelector("#"+H.a(k.b.go.r)).parentElement,"$im")
if(l!=null)l.appendChild(i)
i.classList.add("show")}}
U.eL.prototype={
$1:function(a){var u,t
H.e(a,"$iA")
u=this.a
t=this.b
u.c=t==null?"":J.G(t)
C.b.O(this.c)
u=u.b.go
u.F()
u.ap()
a.stopPropagation()},
$S:0}
U.eM.prototype={
$1:function(a){H.e(a,"$iA")
C.b.O(this.a)},
$S:0}
U.dB.prototype={
ga9:function(){var u=this.cx
return u!=null?u.n(0):""},
gH:function(a){return this.c},
sH:function(a,b){var u
this.c=b
u=this.cx
if(u!=null)u.al(b)},
aN:function(a,b){return U.hA(b,this.A())},
aI:function(a,b){var u,t,s,r,q,p,o,n=this,m=".nt-param-confirm",l="The type argument '",k="' is not a subtype of the type variable bound '",j="' of type variable 'T' in 'querySelectorAll'.",i="click",h=document,g=h.createElement("div")
g.className="backdrop"
C.b.a_(g,'      <div class="nt-param-dialog" style="top: '+b+';">\n        <div class="nt-param-table">\n          <div class="nt-param-row">\n            <div class="nt-param-label">'+H.a(n.f)+':</div>\n          </div>\n          <div class="nt-param-row">\n            <div id="nt-expression-'+H.a(n.a)+'" class="nt-expression-root"></div>\n          </div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>')
u=H.e(h.querySelector("#"+H.a(n.b.go.r)).parentElement,"$im")
if(u==null)return
u.appendChild(g)
t=W.v
H.ad(t,t,l,k,j)
s=[t]
r=[t]
q=[W.A]
new W.az(H.u(new W.a5(h.querySelectorAll(m),s),"$ia3",r,"$aa3"),!1,i,q).a0(new U.dF(n,g))
H.ad(t,t,l,k,j)
new W.az(H.u(new W.a5(h.querySelectorAll(m),s),"$ia3",r,"$aa3"),!1,"mousedown",q).a0(new U.dG())
H.ad(t,t,l,k,j)
new W.az(H.u(new W.a5(h.querySelectorAll(m),s),"$ia3",r,"$aa3"),!1,"mouseup",q).a0(new U.dH())
H.ad(t,t,l,k,j)
new W.az(H.u(new W.a5(h.querySelectorAll(".nt-param-cancel"),s),"$ia3",r,"$aa3"),!1,i,q).a0(new U.dI(g))
g.classList.add("show")
p=n.cx
o="#nt-expression-"+H.a(n.a)
p.toString
p.b=h.querySelector(o)
p.bs()
H.ad(t,t,l,k,j)
new W.az(H.u(new W.a5(h.querySelectorAll(".nt-param-dialog"),s),"$ia3",r,"$aa3"),!1,i,q).a0(new U.dJ())}}
U.dF.prototype={
$1:function(a){var u,t
H.e(a,"$iA")
u=W.v
t=document
H.ad(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
if(t.querySelectorAll(".nt-expression.empty").length>0)return!1
u=this.a
u.c=u.cx.c.A()
C.b.O(this.b)
u=u.b.go
u.F()
u.ap()},
$S:44}
U.dG.prototype={
$1:function(a){var u,t
H.e(a,"$iA")
u=W.v
t=document
H.ad(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.a5(t.querySelectorAll(".nt-expression.empty"),[u])
u.w(u,new U.dE())},
$S:0}
U.dE.prototype={
$1:function(a){return J.ig(H.e(a,"$iv")).p(0,"warn")},
$S:14}
U.dH.prototype={
$1:function(a){var u,t
H.e(a,"$iA")
u=W.v
t=document
H.ad(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.a5(t.querySelectorAll(".nt-expression.empty"),[u])
u.w(u,new U.dD())},
$S:0}
U.dD.prototype={
$1:function(a){return J.ig(H.e(a,"$iv")).D(0,"warn")},
$S:14}
U.dI.prototype={
$1:function(a){H.e(a,"$iA")
C.b.O(this.a)},
$S:0}
U.dJ.prototype={
$1:function(a){var u,t
H.e(a,"$iA")
u=W.v
t=document
H.ad(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
u=new W.a5(t.querySelectorAll(".nt-pulldown-menu"),[u])
u.w(u,new U.dC())},
$S:0}
U.dC.prototype={
$1:function(a){return J.bH(H.e(a,"$iv"))},
$S:7}
U.bN.prototype={
d_:function(a,b){var u,t,s,r,q,p,o,n,m=this,l="variables",k="expressions",j=m.z
if(!J.ap(j.h(0,"version"),1))throw H.f("The supported NetTango version is 1, but the given definition version was "+H.a(j.h(0,"version"))+".")
u=m.r
t="#"+H.a(u)
s=H.e(document.querySelector(t),"$iaT")
if(s==null)throw H.f("No canvas element with ID "+H.a(u)+" found.")
m.dx=H.e(C.p.bz(s,"2d"),"$iaU")
u=s.style
t=H.a(s.width)+"px"
u.width=t
u=s.style
t=H.a(s.height)+"px"
u.height=t
u=s.width
t=$.a7()
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.b(t)
m.Q=C.c.aR(u*t)
u=s.height
if(typeof u!=="number")return u.l()
u=C.c.aR(u*t)
m.ch=u
s.width=m.Q
s.height=u
u=m.c
r=[P.a2]
q=new U.bq(H.B([1,0,0,0,1,0,0,0,1],r))
q.seo(H.B([1/t,0,0,0,1/t,0,0,0,1],r))
u.ec(q)
m.d=u.e6()
u=m.dy
u.ed(s)
C.a.p(u.c,m)
u=H.B([],[U.al])
q=$.bh()
r=$.hr()
if(typeof r!=="number")return r.l()
if(typeof q!=="number")return q.j()
m.cx=new U.dc(m,u,q+r*2)
if(!!J.k(j.h(0,"blocks")).$in)for(u=J.z(H.P(j.h(0,"blocks"),"$io"));u.m();){p=H.e(u.gq(),"$ir")
o=U.il(m,p)
n=U.i4(p.h(0,"limit"),-1)
t=m.cx
r=t.b
t=t.a
q=new U.al(o,t,n)
o.r2=!0
C.a.p(t.a,q)
C.a.p(r,q)}if(!!J.k(j.h(0,l)).$in)m.cy=H.V(j.h(0,l))
if(!!J.k(j.h(0,k)).$in)m.db=H.V(j.h(0,k))
if(!!J.k(j.h(0,"program")).$ir)m.dC(H.e(j.h(0,"program"),"$ir"))
m.F()
m.cI()},
el:function(){var u=this
C.a.sk(u.a,0)
C.a.sk(u.x,0)
C.a.D(u.dy.c,u)},
cI:function(){if(this.dQ(0))this.F()
C.P.gdR(window).cG(new U.di(this),-1)},
ap:function(){var u
this.F()
try{$.ib().h(0,"NetTango").bl("_relayCallback",H.B([this.r],[P.i]))}catch(u){H.Q(u)
P.i1("Unable to relay program changed event to Javascript")}},
bp:function(){var u,t,s,r,q,p,o,n=P.hH(["chains",[]])
for(u=this.x,t=u.length,s=0;s<u.length;u.length===t||(0,H.S)(u),++s){r=u[s]
if(r.gcr()){q=n.h(0,"chains")
p=[]
r.R(p)
J.aD(q,p)}}for(u=this.cx.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.S)(u),++s){q=u[s].a
if(q.fy)if(this.ar(q.a)===0){o=n.h(0,"chains")
p=[]
q.R(p)
J.aD(o,p)}}return n},
ad:function(a){var u,t
C.a.p(this.x,a)
u=this.a
C.a.p(u,a)
for(t=a.cx,t=t.gP(t),t=new H.a0(J.z(t.a),t.b,[H.d(t,0),H.d(t,1)]);t.m();)C.a.p(u,t.a)
for(t=a.cy,t=t.gP(t),t=new H.a0(J.z(t.a),t.b,[H.d(t,0),H.d(t,1)]);t.m();)C.a.p(u,t.a)},
dv:function(a){var u,t
C.a.D(this.x,a)
u=this.a
C.a.D(u,a)
for(t=a.cx,t=t.gP(t),t=new H.a0(J.z(t.a),t.b,[H.d(t,0),H.d(t,1)]);t.m();)C.a.D(u,t.a)
for(t=a.cy,t=t.gP(t),t=new H.a0(J.z(t.a),t.b,[H.d(t,0),H.d(t,1)]);t.m();)C.a.D(u,t.a)
this.F()},
ar:function(a){var u=this.x,t=H.d(u,0)
t=new H.b8(u,H.h(new U.dh(a),{func:1,ret:P.E,args:[t]}),[t])
return t.gk(t)},
cd:function(a){var u,t,s=this.c_(a)
if(s!=null){u=s.y
s.y=a
a.z=s
if(u!=null){t=a.gak()
u.z=t
t.y=u}return!0}s=this.bZ(a)
if(s!=null){s.z=a
a.y=s
return!0}return!1},
dL:function(a){var u,t
if(this.cx.e9(a)){for(u=this.x,t=this.a;a!=null;){C.a.D(u,a)
C.a.D(t,a)
a=a.gaT()}return!0}return!1},
c_:function(a){var u,t,s,r,q,p,o,n,m
if(a.z==null&&a.id)for(u=this.x,t=u.length,s=0;s<t;++s){r=u[s]
if(r!==a){q=a.e
p=r.e
o=r.r
if(typeof p!=="number")return p.j()
if(typeof o!=="number")return H.b(o)
if(typeof q!=="number")return q.at()
if(q<p+o){o=a.r
if(typeof o!=="number")return H.b(o)
p=q+o>p
q=p}else q=!1
if(q){n=r.f
q=r.r2?$.x():r.x
if(typeof n!=="number")return n.j()
if(typeof q!=="number")return H.b(q)
m=n+q
q=$.Z()
if(typeof q!=="number")return H.b(q)
p=r.y==null
if(!p){o=a.f
if(typeof o!=="number")return o.at()
o=o<m&&o>n}else o=!1
if(o)return r
else{if(p){p=a.f
if(typeof p!=="number")return p.as()
q=p>n&&p<m+q}else q=!1
if(q)return r}}}}return},
bZ:function(a){var u,t,s,r,q,p,o
if(a.y==null)for(u=this.x,t=u.length,s=0;s<t;++s){r=u[s]
if(r!==a&&r.z==null&&r.id){q=a.e
p=r.e
o=r.r
if(typeof p!=="number")return p.j()
if(typeof o!=="number")return H.b(o)
if(typeof q!=="number")return q.at()
if(q<p+o){o=a.r
if(typeof o!=="number")return H.b(o)
p=q+o>p
q=p}else q=!1
if(q){q=r.f
p=a.f
o=a.r2?$.x():a.x
if(typeof p!=="number")return p.j()
if(typeof o!=="number")return H.b(o)
if(typeof q!=="number")return q.M()
if(Math.abs(q-(p+o))<20)return r}}}return},
dQ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
g.cx.toString
for(u=g.x,t=u.length,s=!1,r=0,q=0;q<t;++q){p=u[q]
o=p.k1
if(o){n=p.e
m=p.k2
l=p.k4
if(typeof m!=="number")return m.M()
if(typeof l!=="number")return H.b(l)
if(typeof n!=="number")return n.j()
p.e=n+(m-l)
l=p.f
n=p.k3
k=p.r1
if(typeof n!=="number")return n.M()
if(typeof k!=="number")return H.b(k)
if(typeof l!=="number")return l.j()
p.f=l+(n-k)
p.k4=m
p.r1=n}if(o)s=!0
o=p.f
n=p.r2?$.x():p.x
if(typeof o!=="number")return o.j()
if(typeof n!=="number")return H.b(n)
r=Math.max(o+n,r)}if(r>g.ch)if(!s){u=g.Q
t=$.a7()
if(typeof t!=="number")return H.b(t)
o=$.x()
if(typeof o!=="number")return o.l()
j=C.r.cC(u/t)
i=C.r.cC((r+o*3)/t)
o="#"+H.a(g.r)
h=H.e(document.querySelector(o),"$iaT")
if(h!=null){u=h.style
o=""+j+"px"
u.width=o
u=h.style
o=""+i+"px"
u.height=o
g.Q=C.c.aR(j*t)
u=C.c.aR(i*t)
g.ch=u
h.width=g.Q
h.height=u
g.dx=H.e(C.p.bz(h,"2d"),"$iaU")
g.F()}}return s},
F:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this
h.dx.save()
h.dx.clearRect(0,0,h.Q,h.ch)
u=H.B([],[U.ag])
for(t=h.x,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.S)(t),++q){p=t[q]
if(p.z==null&&!(p instanceof U.ah)){p.S(0,null)
p.a4()
p.aF(h.dx,$.bh())}if(p.k1)C.a.p(u,p)
o=h.cx
o.toString
if(!p.r2)if(!p.rx){n=p.e
m=p.r
if(typeof m!=="number")return m.l()
if(typeof n!=="number")return n.j()
o=n+m*0.75>=o.a.Q-o.d}else o=!1
else o=!1
if(o)r=!0}h.cx.bn(h.dx,r)
for(s=t.length,q=0;q<t.length;t.length===s||(0,H.S)(t),++q){p=t[q]
if(p.k1){l=h.c_(p)
if(l!=null){o=h.dx
o.save()
o.lineWidth=5
o.strokeStyle="cyan"
o.beginPath()
n=l.e
m=l.r
if(typeof n!=="number")return n.j()
if(typeof m!=="number")return H.b(m)
k=$.Z()
if(typeof k!=="number")return H.b(k)
j=l.f
i=l.r2?$.x():l.x
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.b(i)
o.moveTo(n+m-k,j+i)
l.bf(o,l.y==null&&l.Q===0)
o.stroke()
o.restore()}else{l=h.bZ(p)
if(l!=null){o=h.dx
o.save()
o.lineWidth=5
o.strokeStyle="cyan"
o.beginPath()
n=l.e
m=$.Z()
if(typeof n!=="number")return n.j()
if(typeof m!=="number")return H.b(m)
k=$.bg()
j=l.gam()
if(typeof k!=="number")return k.l()
o.moveTo(n+m+k*j,l.f)
l.bg(o,l.z==null&&l.id)
o.stroke()
o.restore()}}}p.b4(h.dx)
p.b5(h.dx)
p.dh(h.dx)
p.di(h.dx)
p.b6(h.dx)}h.dx.restore()},
dC:function(a){var u,t,s,r
if(!!J.k(a.h(0,"chains")).$in)for(u=J.z(H.P(a.h(0,"chains"),"$io"));u.m();){t=u.gq()
s=J.k(t)
if(!!s.$in)for(s=s.gv(t);s.m();){r=s.gq()
if(!!J.k(r).$ir)this.bi(r)}}},
bi:function(a){var u,t,s,r,q,p,o,n,m=this,l="children",k=m.cx.cM(H.w(a.h(0,"id")))
if(k==null){P.i1("No prototype block found for id: "+H.a(a.h(0,"id")))
u=m.cx.b
t=P.M
s=H.d(u,0)
P.i1(new H.b4(u,H.h(new U.dg(),{func:1,ret:t,args:[s]}),[s,t]))
return}r=k.aM(0)
u=a.h(0,"x")
if(typeof u==="number"){u=a.h(0,"y")
u=typeof u==="number"}else u=!1
if(u){u=a.h(0,"x")
t=$.i5()
r.e=H.hp(J.id(u,t))
r.f=H.hp(J.id(a.h(0,"y"),t))}m.ad(r)
if(!!r.$ibj)for(u=r.K,t=u.length,q=0;q<u.length;u.length===t||(0,H.S)(u),++q)m.ad(u[q])
m.cd(r)
for(u=m.x,t=u.length,q=0;q<u.length;u.length===t||(0,H.S)(u),++q){p=u[q]
if(p.z==null&&!(p instanceof U.ah)){p.S(0,null)
p.a4()
p.aF(m.dx,$.bh())}}m.dB(r,H.V(a.h(0,"params")),H.V(a.h(0,"properties")))
if(!!J.k(a.h(0,l)).$in)for(u=J.z(H.P(a.h(0,l),"$io"));u.m();){o=u.gq()
if(!!J.k(o).$ir)m.bi(o)}if(!!J.k(a.h(0,"clauses")).$in)for(u=J.z(H.P(a.h(0,"clauses"),"$io"));u.m();){n=u.gq()
t=J.k(n)
if(!!t.$ir&&!!J.k(n.h(0,l)).$in)for(t=J.z(H.P(t.h(n,l),"$io"));t.m();)m.bi(H.e(t.gq(),"$ir"))}},
dB:function(a,b,c){var u,t,s,r,q="id",p="value",o=J.k(b)
if(!!o.$in)for(o=o.gv(b),u=a.cx;o.m();){t=o.gq()
s=J.k(t)
if(!!s.$ir&&H.L(t.t(q))&&H.L(t.t(p))&&u.t(t.h(0,q)))J.ih(u.h(0,s.h(t,q)),s.h(t,p))}o=J.k(c)
if(!!o.$in)for(o=o.gv(c),u=a.cy;o.m();){r=o.gq()
s=J.k(r)
if(!!s.$ir&&H.L(r.t(q))&&H.L(r.t(p))&&u.t(r.h(0,q)))J.ih(u.h(0,s.h(r,q)),s.h(r,p))}}}
U.di.prototype={
$1:function(a){H.hp(a)
return this.a.cI()},
$S:34}
U.dh.prototype={
$1:function(a){return H.e(a,"$iag").a==this.a},
$S:35}
U.dg.prototype={
$1:function(a){return H.e(a,"$ial").a.a},
$S:36}
U.bq.prototype={
e6:function(){var u,t,s,r,q,p,o,n,m,l,k,j=H.B([1,0,0,0,1,0,0,0,1],[P.a2]),i=new U.bq(j),h=this.a,g=h.length
if(0>=g)return H.c(h,0)
u=h[0]
if(4>=g)return H.c(h,4)
t=h[4]
if(8>=g)return H.c(h,8)
g=h[8]
if(typeof t!=="number")return t.l()
if(typeof g!=="number")return H.b(g)
s=h[7]
r=h[5]
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.b(r)
q=t*g-s*r
if(typeof u!=="number")return u.l()
p=h[3]
o=h[1]
if(typeof o!=="number")return o.l()
n=h[2]
if(typeof n!=="number")return H.b(n)
if(typeof p!=="number")return p.l()
m=h[6]
if(typeof m!=="number")return m.l()
l=u*q-p*(o*g-s*n)+m*(o*r-t*n)
if(l===0)return i
k=1/l
C.a.i(j,0,k*q)
g=h.length
if(6>=g)return H.c(h,6)
u=h[6]
t=h[5]
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.b(t)
s=h[3]
if(8>=g)return H.c(h,8)
g=h[8]
if(typeof s!=="number")return s.l()
if(typeof g!=="number")return H.b(g)
C.a.i(j,3,k*(u*t-s*g))
g=h.length
if(3>=g)return H.c(h,3)
s=h[3]
if(7>=g)return H.c(h,7)
g=h[7]
if(typeof s!=="number")return s.l()
if(typeof g!=="number")return H.b(g)
t=h[6]
u=h[4]
if(typeof t!=="number")return t.l()
if(typeof u!=="number")return H.b(u)
C.a.i(j,6,k*(s*g-t*u))
u=h.length
if(7>=u)return H.c(h,7)
t=h[7]
g=h[2]
if(typeof t!=="number")return t.l()
if(typeof g!=="number")return H.b(g)
s=h[1]
if(8>=u)return H.c(h,8)
u=h[8]
if(typeof s!=="number")return s.l()
if(typeof u!=="number")return H.b(u)
C.a.i(j,1,k*(t*g-s*u))
u=h.length
if(0>=u)return H.c(h,0)
s=h[0]
if(8>=u)return H.c(h,8)
u=h[8]
if(typeof s!=="number")return s.l()
if(typeof u!=="number")return H.b(u)
g=h[6]
t=h[2]
if(typeof g!=="number")return g.l()
if(typeof t!=="number")return H.b(t)
C.a.i(j,4,k*(s*u-g*t))
t=h.length
if(6>=t)return H.c(h,6)
g=h[6]
u=h[1]
if(typeof g!=="number")return g.l()
if(typeof u!=="number")return H.b(u)
s=h[0]
if(7>=t)return H.c(h,7)
t=h[7]
if(typeof s!=="number")return s.l()
if(typeof t!=="number")return H.b(t)
C.a.i(j,7,k*(g*u-s*t))
t=h.length
if(1>=t)return H.c(h,1)
s=h[1]
if(5>=t)return H.c(h,5)
t=h[5]
if(typeof s!=="number")return s.l()
if(typeof t!=="number")return H.b(t)
u=h[4]
g=h[2]
if(typeof u!=="number")return u.l()
if(typeof g!=="number")return H.b(g)
C.a.i(j,2,k*(s*t-u*g))
g=h.length
if(3>=g)return H.c(h,3)
u=h[3]
t=h[2]
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.b(t)
s=h[0]
if(5>=g)return H.c(h,5)
g=h[5]
if(typeof s!=="number")return s.l()
if(typeof g!=="number")return H.b(g)
C.a.i(j,5,k*(u*t-s*g))
g=h.length
if(0>=g)return H.c(h,0)
s=h[0]
if(4>=g)return H.c(h,4)
g=h[4]
if(typeof s!=="number")return s.l()
if(typeof g!=="number")return H.b(g)
t=h[3]
u=h[1]
if(typeof t!=="number")return t.l()
if(typeof u!=="number")return H.b(u)
C.a.i(j,8,k*(s*g-t*u))
return i},
ec:function(a){var u,t,s,r,q,p,o,n=this,m=H.B([1,0,0,0,1,0,0,0,1],[P.a2]),l=n.a,k=l.length
if(0>=k)return H.c(l,0)
u=l[0]
t=a.a
s=t.length
if(0>=s)return H.c(t,0)
r=t[0]
if(typeof u!=="number")return u.l()
if(typeof r!=="number")return H.b(r)
if(1>=k)return H.c(l,1)
q=l[1]
if(3>=s)return H.c(t,3)
p=t[3]
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.b(p)
if(2>=k)return H.c(l,2)
l=l[2]
if(6>=s)return H.c(t,6)
t=t[6]
if(typeof l!=="number")return l.l()
if(typeof t!=="number")return H.b(t)
C.a.i(m,0,u*r+q*p+l*t)
t=n.a
l=t.length
if(0>=l)return H.c(t,0)
p=t[0]
q=a.a
r=q.length
if(1>=r)return H.c(q,1)
u=q[1]
if(typeof p!=="number")return p.l()
if(typeof u!=="number")return H.b(u)
if(1>=l)return H.c(t,1)
s=t[1]
if(4>=r)return H.c(q,4)
k=q[4]
if(typeof s!=="number")return s.l()
if(typeof k!=="number")return H.b(k)
if(2>=l)return H.c(t,2)
t=t[2]
if(7>=r)return H.c(q,7)
q=q[7]
if(typeof t!=="number")return t.l()
if(typeof q!=="number")return H.b(q)
C.a.i(m,1,p*u+s*k+t*q)
q=n.a
t=q.length
if(0>=t)return H.c(q,0)
k=q[0]
s=a.a
u=s.length
if(2>=u)return H.c(s,2)
p=s[2]
if(typeof k!=="number")return k.l()
if(typeof p!=="number")return H.b(p)
if(1>=t)return H.c(q,1)
r=q[1]
if(5>=u)return H.c(s,5)
l=s[5]
if(typeof r!=="number")return r.l()
if(typeof l!=="number")return H.b(l)
if(2>=t)return H.c(q,2)
q=q[2]
if(8>=u)return H.c(s,8)
s=s[8]
if(typeof q!=="number")return q.l()
if(typeof s!=="number")return H.b(s)
C.a.i(m,2,k*p+r*l+q*s)
s=n.a
q=s.length
if(3>=q)return H.c(s,3)
l=s[3]
r=a.a
p=r.length
if(0>=p)return H.c(r,0)
k=r[0]
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.b(k)
if(4>=q)return H.c(s,4)
u=s[4]
if(3>=p)return H.c(r,3)
t=r[3]
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.b(t)
if(5>=q)return H.c(s,5)
s=s[5]
if(6>=p)return H.c(r,6)
r=r[6]
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.b(r)
C.a.i(m,3,l*k+u*t+s*r)
r=n.a
s=r.length
if(3>=s)return H.c(r,3)
t=r[3]
u=a.a
k=u.length
if(1>=k)return H.c(u,1)
l=u[1]
if(typeof t!=="number")return t.l()
if(typeof l!=="number")return H.b(l)
if(4>=s)return H.c(r,4)
p=r[4]
if(4>=k)return H.c(u,4)
q=u[4]
if(typeof p!=="number")return p.l()
if(typeof q!=="number")return H.b(q)
if(5>=s)return H.c(r,5)
r=r[5]
if(7>=k)return H.c(u,7)
u=u[7]
if(typeof r!=="number")return r.l()
if(typeof u!=="number")return H.b(u)
C.a.i(m,4,t*l+p*q+r*u)
u=n.a
r=u.length
if(3>=r)return H.c(u,3)
q=u[3]
p=a.a
l=p.length
if(2>=l)return H.c(p,2)
t=p[2]
if(typeof q!=="number")return q.l()
if(typeof t!=="number")return H.b(t)
if(4>=r)return H.c(u,4)
k=u[4]
if(5>=l)return H.c(p,5)
s=p[5]
if(typeof k!=="number")return k.l()
if(typeof s!=="number")return H.b(s)
if(5>=r)return H.c(u,5)
u=u[5]
if(8>=l)return H.c(p,8)
p=p[8]
if(typeof u!=="number")return u.l()
if(typeof p!=="number")return H.b(p)
C.a.i(m,5,q*t+k*s+u*p)
p=n.a
u=p.length
if(6>=u)return H.c(p,6)
s=p[6]
k=a.a
t=k.length
if(0>=t)return H.c(k,0)
q=k[0]
if(typeof s!=="number")return s.l()
if(typeof q!=="number")return H.b(q)
if(7>=u)return H.c(p,7)
l=p[7]
if(3>=t)return H.c(k,3)
r=k[3]
if(typeof l!=="number")return l.l()
if(typeof r!=="number")return H.b(r)
if(8>=u)return H.c(p,8)
p=p[8]
if(6>=t)return H.c(k,6)
k=k[6]
if(typeof p!=="number")return p.l()
if(typeof k!=="number")return H.b(k)
C.a.i(m,6,s*q+l*r+p*k)
k=n.a
p=k.length
if(6>=p)return H.c(k,6)
r=k[6]
l=a.a
q=l.length
if(1>=q)return H.c(l,1)
s=l[1]
if(typeof r!=="number")return r.l()
if(typeof s!=="number")return H.b(s)
if(7>=p)return H.c(k,7)
t=k[7]
if(4>=q)return H.c(l,4)
u=l[4]
if(typeof t!=="number")return t.l()
if(typeof u!=="number")return H.b(u)
if(8>=p)return H.c(k,8)
k=k[8]
if(7>=q)return H.c(l,7)
l=l[7]
if(typeof k!=="number")return k.l()
if(typeof l!=="number")return H.b(l)
C.a.i(m,7,r*s+t*u+k*l)
l=n.a
k=l.length
if(6>=k)return H.c(l,6)
u=l[6]
t=a.a
s=t.length
if(2>=s)return H.c(t,2)
r=t[2]
if(typeof u!=="number")return u.l()
if(typeof r!=="number")return H.b(r)
if(7>=k)return H.c(l,7)
q=l[7]
if(5>=s)return H.c(t,5)
p=t[5]
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.b(p)
if(8>=k)return H.c(l,8)
l=l[8]
if(8>=s)return H.c(t,8)
t=t[8]
if(typeof l!=="number")return l.l()
if(typeof t!=="number")return H.b(t)
C.a.i(m,8,u*r+q*p+l*t)
for(o=0;o<9;++o){l=n.a
if(o>=m.length)return H.c(m,o)
C.a.i(l,o,m[o])}},
aq:function(a){var u,t,s,r,q,p,o=a.c,n=this.a,m=n.length
if(0>=m)return H.c(n,0)
u=n[0]
if(typeof u!=="number")return H.b(u)
t=a.e
if(1>=m)return H.c(n,1)
s=n[1]
if(typeof s!=="number")return H.b(s)
if(2>=m)return H.c(n,2)
r=n[2]
if(typeof r!=="number")return H.b(r)
if(3>=m)return H.c(n,3)
q=n[3]
if(typeof q!=="number")return H.b(q)
if(4>=m)return H.c(n,4)
p=n[4]
if(typeof p!=="number")return H.b(p)
if(5>=m)return H.c(n,5)
n=n[5]
if(typeof n!=="number")return H.b(n)
a.c=o*u+t*s+r
a.e=o*q+t*p+n},
seo:function(a){this.a=H.u(a,"$in",[P.a2],"$an")}}
U.eX.prototype={
aQ:function(a){var u,t,s
for(u=this.c,t=0;t<u.length;++t){s=u[t].aQ(a)
if(s!=null){if(t>=u.length)return H.c(u,t)
u[t].e=new P.aF(Date.now(),!1)
if(t>=u.length)return H.c(u,t)
return new U.cJ(u[t],s)}else if(t>=u.length)return H.c(u,t)}return},
ed:function(a){var u=this,t=W.A,s={func:1,ret:-1,args:[t]}
W.K(a,"mousedown",H.h(new U.eY(u),s),!1,t)
W.K(a,"mouseup",H.h(new U.eZ(u),s),!1,t)
W.K(a,"mousemove",H.h(new U.f_(u),s),!1,t)
t=document
s=W.aJ
W.K(t,"keydown",H.h(new U.f0(u),{func:1,ret:-1,args:[s]}),!1,s)
s=W.aM
W.K(t,"touchmove",H.h(new U.f1(),{func:1,ret:-1,args:[s]}),!1,s)},
dn:function(a){var u,t
for(u=this.c.length,t=0;t<u;++t);}}
U.eY.prototype={
$1:function(a){var u=this.a,t=U.hx(H.e(a,"$iA")),s=u.aQ(t)
if(s!=null){s.a.d.aq(t)
s.b=s.b.a8(t)
u.d.i(0,-1,s)}u.a=!0
return},
$S:5}
U.eZ.prototype={
$1:function(a){var u,t,s,r
H.e(a,"$iA")
u=this.a
t=u.d
s=t.h(0,-1)
if(s!=null){r=U.hx(a)
s.a.d.aq(r)
s.b.bx(r)}t.i(0,-1,null)
u.a=!1
return},
$S:5}
U.f_.prototype={
$1:function(a){var u=this.a,t=U.hx(H.e(a,"$iA")),s=u.d.h(0,-1)
if(s!=null){s.a.d.aq(t)
s.b.bv(t)}else{s=u.aQ(t)
if(s!=null)if(u.a){s.a.d.aq(t)
s.b.bw(t)}}return},
$S:5}
U.f0.prototype={
$1:function(a){return this.a.dn(H.e(a,"$iaJ"))},
$S:37}
U.f1.prototype={
$1:function(a){return H.e(a,"$iaM").preventDefault()},
$S:38}
U.cK.prototype={
aQ:function(a){var u,t,s=new U.cl()
s.a=a.a
s.b=a.b
s.c=a.c
s.d=a.d
s.e=a.e
s.f=a.f
s.Q=a.Q
this.d.aq(s)
for(u=this.a,t=u.length-1;t>=0;--t){if(t>=u.length)return H.c(u,t)
if(u[t].aO(s)){if(t>=u.length)return H.c(u,t)
return u[t]}}return}}
U.cJ.prototype={}
U.bt.prototype={}
U.cl.prototype={};(function aliases(){var u=J.N.prototype
u.cS=u.n
u.cR=u.aU
u=J.cs.prototype
u.cU=u.n
u=P.bu.prototype
u.cY=u.au
u=P.o.prototype
u.cT=u.aX
u=P.y.prototype
u.cX=u.n
u=W.v.prototype
u.aZ=u.J
u=W.d1.prototype
u.cZ=u.U
u=P.aj.prototype
u.cV=u.h
u.bD=u.i
u=U.ag.prototype
u.cQ=u.a4
u.cP=u.aB
u=U.ak.prototype
u.bE=u.A
u=U.cA.prototype
u.cW=u.A})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers._instance_1i,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_0i,n=hunkHelpers._static_2
u(P,"kM","kr",6)
u(P,"kN","ks",6)
u(P,"kO","kt",6)
t(P,"j6","kK",1)
s(P,"kP",1,null,["$2","$1"],["iW",function(a){return P.iW(a,null)}],9,0)
t(P,"j5","kF",1)
r(P.bu.prototype,"gdO","p",20)
q(P.U.prototype,"gdd",0,1,function(){return[null]},["$2","$1"],["aw","de"],9,0)
p(P.cQ.prototype,"gdG","a5",1)
u(P,"kQ","kA",3)
s(W,"kX",4,null,["$4"],["kv"],12,0)
s(W,"kY",4,null,["$4"],["kw"],12,0)
o(W.d3.prototype,"gdX","bm",1)
u(P,"l5","hO",3)
u(P,"l4","hN",41)
n(U,"lb","k3",42)
u(U,"la","k2",43)
n(U,"l9","k1",32)
u(U,"ld","k5",13)
t(U,"lc","k4",29)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.y,null)
s(P.y,[H.hE,J.N,J.aR,P.o,H.bW,P.au,H.aY,H.c4,P.ei,H.dl,H.e3,H.bM,H.f2,P.aW,H.d2,P.b3,H.ec,H.ed,H.e5,P.h5,P.aL,P.ao,P.bu,P.fj,P.aA,P.U,P.cM,P.aa,P.eQ,P.ba,P.fo,P.cb,P.cQ,P.a_,P.h9,P.fU,P.bx,P.cW,P.cX,P.J,P.h7,P.cE,P.d0,P.dj,P.fK,P.E,P.aF,P.W,P.ev,P.cG,P.ft,P.dY,P.ai,P.n,P.C,P.R,P.i,P.am,P.ax,W.ds,W.d3,W.bb,W.ac,W.cy,W.d1,W.fZ,W.cp,W.fm,W.a4,W.fT,W.d5,P.aj,P.aw,U.ag,U.as,U.dA,U.cj,U.dc,U.al,U.ak,U.cK,U.bq,U.eX,U.cJ,U.bt,U.cl])
s(J.N,[J.e2,J.e4,J.cs,J.b_,J.bo,J.b0,H.bZ,W.aX,W.bk,W.aU,W.cO,W.du,W.cn,W.dv,W.j,W.cT,W.bR,W.cu,W.cZ,W.d6,P.bU])
s(J.cs,[J.eB,J.b7,J.b1])
t(J.hD,J.b_)
s(J.bo,[J.cr,J.cq])
s(P.o,[H.D,H.bX,H.b8,H.cI,H.cF,H.fk])
s(H.D,[H.b2,H.av,P.a9])
t(H.dw,H.bX)
s(P.au,[H.a0,H.f8,H.eV,H.eO])
s(H.b2,[H.b4,P.fI])
t(H.dy,H.cI)
t(H.dx,H.cF)
t(P.d4,P.ei)
t(P.f6,P.d4)
t(H.dm,P.f6)
t(H.dn,H.dl)
s(H.bM,[H.eC,H.hq,H.eW,H.e6,H.hk,H.hl,H.hm,P.fc,P.fb,P.fd,P.fe,P.h6,P.h0,P.h1,P.fu,P.fB,P.fx,P.fy,P.fz,P.fv,P.fA,P.fE,P.fF,P.fD,P.fC,P.eR,P.eS,P.fh,P.fO,P.hd,P.fR,P.fQ,P.fS,P.eh,P.fL,P.er,W.dz,W.f9,W.fs,W.fY,W.et,W.es,W.fV,W.fW,W.h4,W.h8,P.dr,P.dU,P.dV,P.dW,P.hb,P.hc,P.he,P.hf,P.hg,U.dM,U.dN,U.dO,U.dL,U.dP,U.dS,U.dQ,U.dR,U.dK,U.dd,U.ew,U.ex,U.ey,U.ez,U.eE,U.eF,U.eG,U.eH,U.eL,U.eM,U.dF,U.dG,U.dE,U.dH,U.dD,U.dI,U.dJ,U.dC,U.di,U.dh,U.dg,U.eY,U.eZ,U.f_,U.f0,U.f1])
s(P.aW,[H.eu,H.e7,H.f5,H.cL,H.df,H.eI,P.da,P.ct,P.cz,P.aq,P.eq,P.f7,P.f4,P.aK,P.dk,P.dt])
s(H.eW,[H.eP,H.bK])
t(H.fa,P.da)
t(P.ef,P.b3)
s(P.ef,[H.I,P.fH,W.ff])
t(H.cv,H.bZ)
s(H.cv,[H.c7,H.c9])
t(H.c8,H.c7)
t(H.bY,H.c8)
t(H.ca,H.c9)
t(H.cw,H.ca)
s(H.cw,[H.ej,H.ek,H.el,H.em,H.en,H.cx,H.eo])
s(P.aL,[P.fX,W.cR,W.az])
t(P.cN,P.fX)
t(P.fg,P.cN)
t(P.fl,P.ao)
t(P.T,P.fl)
t(P.h_,P.bu)
t(P.h2,P.fj)
t(P.fn,P.ba)
t(P.cc,P.cb)
t(P.fP,P.h9)
t(P.fM,P.fU)
t(P.ee,P.cX)
t(P.eN,P.d0)
t(P.bO,P.eQ)
t(P.e9,P.ct)
t(P.e8,P.dj)
s(P.bO,[P.eb,P.ea])
t(P.fJ,P.fK)
s(P.W,[P.a2,P.M])
s(P.aq,[P.cB,P.e_])
s(W.aX,[W.t,W.b9,W.aN])
s(W.t,[W.v,W.aV,W.c6])
s(W.v,[W.m,P.l])
s(W.m,[W.bI,W.d9,W.bJ,W.aS,W.aT,W.bl,W.dX,W.aZ,W.eJ,W.cH,W.eT,W.eU,W.c5])
t(W.bP,W.cO)
s(P.ee,[W.fi,W.a5,W.a1,P.dT])
t(W.cU,W.cT)
t(W.bm,W.cU)
t(W.b6,W.j)
s(W.b6,[W.aJ,W.A,W.aM])
t(W.d_,W.cZ)
t(W.c_,W.d_)
t(W.cP,W.cn)
t(W.d7,W.d6)
t(W.cY,W.d7)
t(W.fp,W.ff)
t(P.dq,P.eN)
s(P.dq,[W.fq,P.db])
t(W.hL,W.cR)
t(W.fr,P.aa)
t(W.h3,W.d1)
s(P.aj,[P.bT,P.cV])
t(P.bS,P.cV)
t(P.c2,P.l)
t(U.dp,U.ag)
s(U.dp,[U.ah,U.bj])
t(U.co,U.ah)
s(U.cj,[U.eA,U.ep])
s(U.ak,[U.cA,U.eK,U.dB])
s(U.cA,[U.e0,U.eD])
t(U.bN,U.cK)
u(H.c7,P.J)
u(H.c8,H.aY)
u(H.c9,P.J)
u(H.ca,H.aY)
u(P.cX,P.J)
u(P.d0,P.cE)
u(P.d4,P.h7)
u(W.cO,W.ds)
u(W.cT,P.J)
u(W.cU,W.ac)
u(W.cZ,P.J)
u(W.d_,W.ac)
u(W.d6,P.J)
u(W.d7,W.ac)
u(P.cV,P.J)})();(function constants(){var u=hunkHelpers.makeConstList
C.l=W.bI.prototype
C.m=W.aS.prototype
C.p=W.aT.prototype
C.q=W.aU.prototype
C.b=W.bl.prototype
C.F=J.N.prototype
C.a=J.b_.prototype
C.r=J.cq.prototype
C.f=J.cr.prototype
C.c=J.bo.prototype
C.e=J.b0.prototype
C.G=J.b1.prototype
C.N=W.c_.prototype
C.v=J.eB.prototype
C.w=W.cH.prototype
C.k=J.b7.prototype
C.P=W.b9.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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

C.h=new P.e8()
C.D=new P.ev()
C.E=new P.fo()
C.d=new P.fP()
C.H=new P.ea(null)
C.I=new P.eb(null)
C.J=H.B(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.i])
C.K=H.B(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.i])
C.L=H.B(u([]),[P.i])
C.t=u([])
C.i=H.B(u(["bind","if","ref","repeat","syntax"]),[P.i])
C.j=H.B(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.i])
C.M=H.B(u([]),[P.ax])
C.u=new H.dn(0,{},C.M,[P.ax,null])
C.O=new H.c4("call")})()
var v={mangledGlobalNames:{M:"int",a2:"double",W:"num",i:"String",E:"bool",C:"Null",n:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.C,args:[W.A]},{func:1,ret:-1},{func:1,ret:P.C},{func:1,args:[,]},{func:1,ret:P.C,args:[W.j]},{func:1,ret:-1,args:[W.A]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.v]},{func:1,ret:P.C,args:[,]},{func:1,ret:-1,args:[P.y],opt:[P.R]},{func:1,ret:P.C,args:[,,]},{func:1,ret:P.E,args:[W.t]},{func:1,ret:P.E,args:[W.v,P.i,P.i,W.bb]},{func:1,ret:P.i,args:[P.i]},{func:1,ret:P.E,args:[W.v]},{func:1,ret:P.E,args:[P.i]},{func:1,ret:P.E,args:[W.a4]},{func:1,args:[W.j]},{func:1,ret:P.C,args:[P.i,,]},{func:1,ret:P.C,args:[P.ax,,]},{func:1,ret:-1,args:[P.y]},{func:1,ret:P.E,args:[[P.a9,P.i]]},{func:1,ret:P.C,args:[P.W]},{func:1,ret:P.bT,args:[,]},{func:1,ret:[P.bS,,],args:[,]},{func:1,ret:P.aj,args:[,]},{func:1,ret:-1,args:[W.t,W.t]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,ret:P.C,args:[P.i]},{func:1,ret:P.i},{func:1,ret:P.E,args:[U.al]},{func:1,args:[,P.i]},{func:1,ret:P.i,args:[P.i,P.i]},{func:1,ret:[P.U,,],args:[,]},{func:1,ret:-1,args:[P.W]},{func:1,ret:P.E,args:[U.ag]},{func:1,ret:P.M,args:[U.al]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:-1,args:[W.aM]},{func:1,args:[P.i]},{func:1,ret:P.C,args:[,],opt:[P.R]},{func:1,ret:P.y,args:[,]},{func:1,ret:-1,args:[P.i,P.i]},{func:1,ret:-1,args:[P.i]},{func:1,ret:P.E,args:[W.A]},{func:1,ret:W.v,args:[W.t]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.ar=0
$.bL=null
$.im=null
$.hR=!1
$.ja=null
$.j3=null
$.ji=null
$.hh=null
$.hn=null
$.i_=null
$.by=null
$.cd=null
$.ce=null
$.hS=!1
$.H=C.d
$.a6=[]
$.aG=null
$.hy=null
$.is=null
$.ir=null
$.cS=P.iw(P.i,P.ai)
$.ck=null
$.Y=P.hG()})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lr","hs",function(){return H.hZ("_$dart_dartClosure")})
u($,"lu","i7",function(){return H.hZ("_$dart_js")})
u($,"ly","jn",function(){return H.ay(H.f3({
toString:function(){return"$receiver$"}}))})
u($,"lz","jo",function(){return H.ay(H.f3({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lA","jp",function(){return H.ay(H.f3(null))})
u($,"lB","jq",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lE","jt",function(){return H.ay(H.f3(void 0))})
u($,"lF","ju",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lD","js",function(){return H.ay(H.iG(null))})
u($,"lC","jr",function(){return H.ay(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lH","jw",function(){return H.ay(H.iG(void 0))})
u($,"lG","jv",function(){return H.ay(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"lK","i8",function(){return P.kq()})
u($,"lt","i6",function(){var t=new P.U(C.d,[P.C])
t.dH(null)
return t})
u($,"lM","jx",function(){return P.ix(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.i)})
u($,"lq","jm",function(){return P.kl("^\\S+$")})
u($,"lQ","ib",function(){return H.e(P.j1(self),"$iaj")})
u($,"lL","i9",function(){return H.hZ("_$dart_dartObject")})
u($,"lO","ia",function(){return function DartObject(a){this.o=a}})
u($,"lw","a7",function(){return W.lj().devicePixelRatio})
u($,"lp","bh",function(){var t=$.a7()
if(typeof t!=="number")return H.b(t)
return 80*t})
u($,"ll","x",function(){var t=$.a7()
if(typeof t!=="number")return H.b(t)
return 34*t})
u($,"ln","Z",function(){var t=$.a7()
if(typeof t!=="number")return H.b(t)
return 10*t})
u($,"lm","bg",function(){var t=$.a7()
if(typeof t!=="number")return H.b(t)
return 25*t})
u($,"lk","hr",function(){var t=$.a7()
if(typeof t!=="number")return H.b(t)
return 10*t})
u($,"lo","i5",function(){return $.Z()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.N,CanvasPattern:J.N,DOMError:J.N,DOMImplementation:J.N,MediaError:J.N,Navigator:J.N,NavigatorConcurrentHardware:J.N,NavigatorUserMediaError:J.N,OverconstrainedError:J.N,PositionError:J.N,Range:J.N,TextMetrics:J.N,WebGLRenderingContext:J.N,WebGL2RenderingContext:J.N,SQLError:J.N,DataView:H.bZ,ArrayBufferView:H.bZ,Float32Array:H.bY,Float64Array:H.bY,Int16Array:H.ej,Int32Array:H.ek,Int8Array:H.el,Uint16Array:H.em,Uint32Array:H.en,Uint8ClampedArray:H.cx,CanvasPixelArray:H.cx,Uint8Array:H.eo,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.bI,HTMLAreaElement:W.d9,HTMLBaseElement:W.bJ,Blob:W.bk,File:W.bk,HTMLBodyElement:W.aS,HTMLCanvasElement:W.aT,CanvasRenderingContext2D:W.aU,CDATASection:W.aV,CharacterData:W.aV,Comment:W.aV,ProcessingInstruction:W.aV,Text:W.aV,CSSStyleDeclaration:W.bP,MSStyleCSSProperties:W.bP,CSS2Properties:W.bP,HTMLDivElement:W.bl,DOMException:W.du,DOMRectReadOnly:W.cn,DOMTokenList:W.dv,Element:W.v,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,EventTarget:W.aX,HTMLFormElement:W.dX,HTMLCollection:W.bm,HTMLFormControlsCollection:W.bm,HTMLOptionsCollection:W.bm,ImageData:W.bR,HTMLInputElement:W.aZ,KeyboardEvent:W.aJ,Location:W.cu,MouseEvent:W.A,DragEvent:W.A,PointerEvent:W.A,WheelEvent:W.A,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,DocumentType:W.t,Node:W.t,NodeList:W.c_,RadioNodeList:W.c_,HTMLSelectElement:W.eJ,HTMLTableElement:W.cH,HTMLTableRowElement:W.eT,HTMLTableSectionElement:W.eU,HTMLTemplateElement:W.c5,TouchEvent:W.aM,CompositionEvent:W.b6,FocusEvent:W.b6,TextEvent:W.b6,UIEvent:W.b6,Window:W.b9,DOMWindow:W.b9,DedicatedWorkerGlobalScope:W.aN,ServiceWorkerGlobalScope:W.aN,SharedWorkerGlobalScope:W.aN,WorkerGlobalScope:W.aN,Attr:W.c6,ClientRect:W.cP,DOMRect:W.cP,NamedNodeMap:W.cY,MozNamedAttrMap:W.cY,IDBKeyRange:P.bU,SVGScriptElement:P.c2,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,TextMetrics:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:true,File:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,IDBKeyRange:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.bY.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.je,[])
else U.je([])})})()
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


  _relayCallback : function(canvasId) {
    if (canvasId in NetTango._callbacks) {
      NetTango._callbacks[canvasId](canvasId);
    }
  },

  _callbacks : { }
}

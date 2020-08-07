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
a[c]=function(){a[c]=function(){H.qs(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l1"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.l1(this,a,b,c,true,false,e).prototype
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
if(w[t][a])return w[t][a]}}var C={},H={kK:function kK(){},
am:function(a,b,c,d){P.aZ(b,"start")
if(c!=null){P.aZ(c,"end")
if(typeof b!=="number")return b.L()
if(b>c)H.D(P.ab(b,0,c,"start",null))}return new H.dA(a,b,c,d.i("dA<0>"))},
lT:function(a,b,c,d){if(u.X.b(a))return new H.aX(a,b,c.i("@<0>").q(d).i("aX<1,2>"))
return new H.aG(a,b,c.i("@<0>").q(d).i("aG<1,2>"))},
oA:function(a,b,c){var t="takeCount"
P.be(b,t,u.S)
P.aZ(b,t)
if(u.X.b(a))return new H.da(a,b,c.i("da<0>"))
return new H.c4(a,b,c.i("c4<0>"))},
ou:function(a,b,c){var t="count"
if(u.X.b(a)){P.be(b,t,u.S)
P.aZ(b,t)
return new H.d9(a,b,c.i("d9<0>"))}P.be(b,t,u.S)
P.aZ(b,t)
return new H.c3(a,b,c.i("c3<0>"))},
cl:function(){return new P.b6("No element")},
o4:function(){return new P.b6("Too many elements")},
lN:function(){return new P.b6("Too few elements")},
ox:function(a,b,c){H.f5(a,0,J.ae(a)-1,b,c)},
f5:function(a,b,c,d,e){if(c-b<=32)H.ow(a,b,c,d,e)
else H.ov(a,b,c,d,e)},
ow:function(a,b,c,d,e){var t,s,r,q,p,o
for(t=b+1,s=J.ap(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(q>b){p=d.$2(s.h(a,q-1),r)
if(typeof p!=="number")return p.L()
p=p>0}else p=!1
if(!p)break
o=q-1
s.j(a,q,s.h(a,o))
q=o}s.j(a,q,r)}},
ov:function(a4,a5,a6,a7,a8){var t,s,r,q,p,o,n,m,l,k,j,i=C.e.az(a6-a5+1,6),h=a5+i,g=a6-i,f=C.e.az(a5+a6,2),e=f-i,d=f+i,c=J.ap(a4),b=c.h(a4,h),a=c.h(a4,e),a0=c.h(a4,f),a1=c.h(a4,d),a2=c.h(a4,g),a3=a7.$2(b,a)
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
if(J.bd(a7.$2(a,a1),0)){for(q=s;q<=r;++q){p=c.h(a4,q)
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
H.f5(a4,a5,s-2,a7,a8)
H.f5(a4,r+2,a6,a7,a8)
if(l)return
if(s<h&&r>g){for(;J.bd(a7.$2(c.h(a4,s),a),0);)++s
for(;J.bd(a7.$2(c.h(a4,r),a1),0);)--r
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
break}}H.f5(a4,s,r,a7,a8)}else H.f5(a4,s,r,a7,a8)},
n:function n(){},
aa:function aa(){},
dA:function dA(a,b,c,d){var _=this
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
O:function O(a,b,c){this.a=a
this.b=b
this.$ti=c},
ag:function ag(a,b,c){this.a=a
this.b=b
this.$ti=c},
c5:function c5(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
dC:function dC(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(a,b,c){this.a=a
this.b=b
this.$ti=c},
d9:function d9(a,b,c){this.a=a
this.b=b
this.$ti=c},
dy:function dy(a,b,c){this.a=a
this.b=b
this.$ti=c},
bU:function bU(a){this.$ti=a},
dc:function dc(a){this.$ti=a},
R:function R(){},
cA:function cA(a){this.a=a},
nV:function(){throw H.b(P.x("Cannot modify unmodifiable Map"))},
n8:function(a){var t,s=H.n7(a)
if(typeof s=="string")return s
t="minified:"+a
return t},
q4:function(a,b){var t
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
c1:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
lZ:function(a,b){var t,s=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(s==null)return null
if(3>=s.length)return H.o(s,3)
t=H.r(s[3])
if(t!=null)return parseInt(a,10)
if(s[2]!=null)return parseInt(a,16)
return null},
oo:function(a){var t,s
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
t=parseFloat(a)
if(isNaN(t)){s=C.d.aG(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return null}return t},
iP:function(a){var t=H.of(a)
return t},
of:function(a){var t,s,r
if(a instanceof P.E)return H.aA(H.X(a),null)
if(J.bI(a)===C.H||u.bJ.b(a)){t=C.n(a)
if(H.lY(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.lY(r))return r}}return H.aA(H.X(a),null)},
lY:function(a){var t=a!=="Object"&&a!==""
return t},
aP:function(a){var t
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){t=a-65536
return String.fromCharCode((55296|C.e.bZ(t,10))>>>0,56320|t&1023)}throw H.b(P.ab(a,0,1114111,null,null))},
c0:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
on:function(a){var t=H.c0(a).getFullYear()+0
return t},
ol:function(a){var t=H.c0(a).getMonth()+1
return t},
oh:function(a){var t=H.c0(a).getDate()+0
return t},
oi:function(a){var t=H.c0(a).getHours()+0
return t},
ok:function(a){var t=H.c0(a).getMinutes()+0
return t},
om:function(a){var t=H.c0(a).getSeconds()+0
return t},
oj:function(a){var t=H.c0(a).getMilliseconds()+0
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
return J.nG(a,new H.eK(C.Q,0,t,s,0))},
og:function(a,b,c){var t,s,r,q
if(b instanceof Array)t=c==null||c.a===0
else t=!1
if(t){s=b
r=s.length
if(r===0){if(!!a.$0)return a.$0()}else if(r===1){if(!!a.$1)return a.$1(s[0])}else if(r===2){if(!!a.$2)return a.$2(s[0],s[1])}else if(r===3){if(!!a.$3)return a.$3(s[0],s[1],s[2])}else if(r===4){if(!!a.$4)return a.$4(s[0],s[1],s[2],s[3])}else if(r===5)if(!!a.$5)return a.$5(s[0],s[1],s[2],s[3],s[4])
q=a[""+"$"+r]
if(q!=null)return q.apply(a,s)}return H.oe(a,b,c)},
oe:function(a,b,c){var t,s,r,q,p,o,n,m,l,k=b instanceof Array?b:P.cm(b,!0,u.z),j=k.length,i=a.$R
if(j<i)return H.cs(a,k,c)
t=a.$D
s=t==null
r=!s?t():null
q=J.bI(a)
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
o:function(a,b){if(a==null)J.ae(a)
throw H.b(H.bH(a,b))},
bH:function(a,b){var t,s,r="index"
if(!H.cO(b))return new P.aK(!0,b,r,null)
t=H.q(J.ae(a))
if(!(b<0)){if(typeof t!=="number")return H.a0(t)
s=b>=t}else s=!0
if(s)return P.bg(b,a,r,null,t)
return P.cu(b,r)},
bb:function(a){return new P.aK(!0,a,null,null)},
b:function(a){var t
if(a==null)a=new P.f0()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.n6})
t.name=""}else t.toString=H.n6
return t},
n6:function(){return J.z(this.dartException)},
D:function(a){throw H.b(a)},
B:function(a){throw H.b(P.aN(a))},
bk:function(a){var t,s,r,q,p,o
a=H.mZ(a.replace(String({}),'$receiver$'))
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
m3:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
lX:function(a,b){return new H.f_(a,b==null?null:b.method)},
kL:function(a,b){var t=b==null,s=t?null:b.method
return new H.eM(a,s,t?null:b.receiver)},
L:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new H.ky(a)
if(a==null)return f
if(typeof a!=="object")return a
if("dartException" in a)return e.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.bZ(s,16)&8191)===10)switch(r){case 438:return e.$1(H.kL(H.a(t)+" (Error "+r+")",f))
case 445:case 5007:return e.$1(H.lX(H.a(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.nb()
p=$.nc()
o=$.nd()
n=$.ne()
m=$.nh()
l=$.ni()
k=$.ng()
$.nf()
j=$.nk()
i=$.nj()
h=q.a1(t)
if(h!=null)return e.$1(H.kL(H.r(t),h))
else{h=p.a1(t)
if(h!=null){h.method="call"
return e.$1(H.kL(H.r(t),h))}else{h=o.a1(t)
if(h==null){h=n.a1(t)
if(h==null){h=m.a1(t)
if(h==null){h=l.a1(t)
if(h==null){h=k.a1(t)
if(h==null){h=n.a1(t)
if(h==null){h=j.a1(t)
if(h==null){h=i.a1(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return e.$1(H.lX(H.r(t),h))}}return e.$1(new H.fh(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.dz()
t=function(b){try{return String(b)}catch(d){}return null}(a)
return e.$1(new P.aK(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.dz()
return a},
aV:function(a){var t
if(a==null)return new H.e0(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.e0(a)},
mW:function(a){if(a==null||typeof a!='object')return J.ad(a)
else return H.c1(a)},
pW:function(a,b){var t,s,r,q=a.length
for(t=0;t<q;t=r){s=t+1
r=s+1
b.j(0,a[t],a[s])}return b},
q3:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.q(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.b(P.bV("Unsupported number of arguments for wrapped closure"))},
cT:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.q3)
a.$identity=t
return t},
nU:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.f6().constructor.prototype):Object.create(new H.cd(l,l,l,l).constructor.prototype)
i.$initialize=i.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.bf
if(typeof s!=="number")return s.v()
$.bf=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}i.constructor=t
t.prototype=i
if(!e){r=H.lt(a,k,f)
r.$reflectionInfo=d}else{i.$static_name=g
r=k}q=H.nQ(d,e,f)
i.$S=q
i[j]=r
for(p=r,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lt(a,n,f)
i[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}i.$C=p
i.$R=k.$R
i.$D=k.$D
return t},
nQ:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mM,a)
if(typeof a=="string"){if(b)throw H.b("Cannot compute signature for static tearoff.")
t=c?H.nO:H.nN
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.b("Error in functionType of tearoff")},
nR:function(a,b,c,d){var t=H.lr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
lt:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.nT(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.nR(s,!q,t,b)
if(s===0){q=$.bf
if(typeof q!=="number")return q.v()
$.bf=q+1
o="self"+q
q="return function(){var "+o+" = this."
p=$.d_
return new Function(q+H.a(p==null?$.d_=H.ho("self"):p)+";return "+o+"."+H.a(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.bf
if(typeof q!=="number")return q.v()
$.bf=q+1
n+=q
q="return function("+n+"){return this."
p=$.d_
return new Function(q+H.a(p==null?$.d_=H.ho("self"):p)+"."+H.a(t)+"("+n+");}")()},
nS:function(a,b,c,d){var t=H.lr,s=H.nP
switch(b?-1:a){case 0:throw H.b(H.os("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
nT:function(a,b){var t,s,r,q,p,o,n,m=$.d_
if(m==null)m=$.d_=H.ho("self")
t=$.lq
if(t==null)t=$.lq=H.ho("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nS(r,!p,s,b)
if(r===1){m="return function(){return this."+H.a(m)+"."+H.a(s)+"(this."+H.a(t)+");"
t=$.bf
if(typeof t!=="number")return t.v()
$.bf=t+1
return new Function(m+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
m="return function("+n+"){return this."+H.a(m)+"."+H.a(s)+"(this."+H.a(t)+", "+n+");"
t=$.bf
if(typeof t!=="number")return t.v()
$.bf=t+1
return new Function(m+t+"}")()},
l1:function(a,b,c,d,e,f,g){return H.nU(a,b,c,d,!!e,!!f,g)},
nN:function(a,b){return H.fT(v.typeUniverse,H.X(a.a),b)},
nO:function(a,b){return H.fT(v.typeUniverse,H.X(a.c),b)},
lr:function(a){return a.a},
nP:function(a){return a.c},
ho:function(a){var t,s,r,q=new H.cd("self","target","receiver","name"),p=J.lO(Object.getOwnPropertyNames(q))
for(t=p.length,s=0;s<t;++s){r=p[s]
if(q[r]===a)return r}},
ac:function(a){if(a==null)H.pM("boolean expression must not be null")
return a},
pM:function(a){throw H.b(new H.fj(a))},
qs:function(a){throw H.b(new P.eu(a))},
os:function(a){return new H.f4(a)},
l4:function(a){return v.getIsolateTag(a)},
h:function(a,b){a[v.arrayRti]=b
return a},
mK:function(a){if(a==null)return null
return a.$ti},
rf:function(a,b,c){return H.n5(a["$a"+H.a(c)],H.mK(b))},
n5:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return null
if(Array.isArray(a))return a
if(typeof a=="function")return a.apply(null,b)
return b},
rd:function(a,b,c){return a.apply(b,H.n5(J.bI(b)["$a"+H.a(c)],H.mK(b)))},
re:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
q7:function(a){var t,s,r,q,p=H.r($.mL.$1(a)),o=$.km[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.ks[p]
if(t!=null)return t
s=v.interceptorsByTag[p]
if(s==null){p=H.r($.mD.$2(a,p))
if(p!=null){o=$.km[p]
if(o!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}t=$.ks[p]
if(t!=null)return t
s=v.interceptorsByTag[p]}}if(s==null)return null
t=s.prototype
r=p[0]
if(r==="!"){o=H.kv(t)
$.km[p]=o
Object.defineProperty(a,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(r==="~"){$.ks[p]=t
return t}if(r==="-"){q=H.kv(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}if(r==="+")return H.mX(a,t)
if(r==="*")throw H.b(P.j2(p))
if(v.leafTags[p]===true){q=H.kv(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:q,enumerable:false,writable:true,configurable:true})
return q.i}else return H.mX(a,t)},
mX:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.l6(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
kv:function(a){return J.l6(a,!1,null,!!a.$iZ)},
q8:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.kv(t)
else return J.l6(t,c,null,null)},
q0:function(){if(!0===$.l5)return
$.l5=!0
H.q1()},
q1:function(){var t,s,r,q,p,o,n,m
$.km=Object.create(null)
$.ks=Object.create(null)
H.q_()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.mY.$1(p)
if(o!=null){n=H.q8(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
q_:function(){var t,s,r,q,p,o,n=C.y()
n=H.cS(C.z,H.cS(C.A,H.cS(C.o,H.cS(C.o,H.cS(C.B,H.cS(C.C,H.cS(C.D(C.n),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.mL=new H.kp(q)
$.mD=new H.kq(p)
$.mY=new H.kr(o)},
cS:function(a,b){return a(b)||b},
oc:function(a,b,c,d,e,f){var t=b?"m":"",s=c?"":"i",r=d?"u":"",q=e?"s":"",p=f?"g":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,t+s+r+q+p)
if(o instanceof RegExp)return o
throw H.b(P.df("Illegal RegExp pattern ("+String(o)+")",a))},
qo:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
pV:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mZ:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
l8:function(a,b,c){var t=H.qp(a,b,c)
return t},
qp:function(a,b,c){var t,s,r,q
if(b===""){if(a==="")return c
t=a.length
for(s=c,r=0;r<t;++r)s=s+a[r]+c
return s.charCodeAt(0)==0?s:s}q=a.indexOf(b,0)
if(q<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mZ(b),'g'),H.pV(c))},
qq:function(a,b,c,d){var t=a.indexOf(b,d)
if(t<0)return a
return H.qr(a,t,t+b.length,c)},
qr:function(a,b,c,d){var t=a.substring(0,b),s=a.substring(c)
return t+d+s},
d3:function d3(a,b){this.a=a
this.$ti=b},
d2:function d2(){},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
d4:function d4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dE:function dE(a,b){this.a=a
this.$ti=b},
eK:function eK(a,b,c,d,e){var _=this
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
f_:function f_(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
fh:function fh(a){this.a=a},
ky:function ky(a){this.a=a},
e0:function e0(a){this.a=a
this.b=null},
bP:function bP(){},
fd:function fd(){},
f6:function f6(){},
cd:function cd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a){this.a=a},
fj:function fj(a){this.a=a},
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
ar:function ar(a,b){this.a=a
this.$ti=b},
dn:function dn(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kp:function kp(a){this.a=a},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
eL:function eL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f9:function f9(a,b){this.a=a
this.c=b},
k_:function k_(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bo:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.bH(b,a))},
bZ:function bZ(){},
aw:function aw(){},
bx:function bx(){},
aH:function aH(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
du:function du(){},
eY:function eY(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
or:function(a,b){var t=b.c
return t==null?b.c=H.kV(a,b.z,!0):t},
m0:function(a,b){var t=b.c
return t==null?b.c=H.e6(a,"aE",[b.z]):t},
m1:function(a){var t=a.y
if(t===6||t===7||t===8)return H.m1(a.z)
return t===11||t===12},
oq:function(a){return a.cy},
ee:function(a){return H.kW(v.typeUniverse,a,!1)},
bF:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.bF(a,t,c,a0)
if(s===t)return b
return H.mm(a,s,!0)
case 7:t=b.z
s=H.bF(a,t,c,a0)
if(s===t)return b
return H.kV(a,s,!0)
case 8:t=b.z
s=H.bF(a,t,c,a0)
if(s===t)return b
return H.ml(a,s,!0)
case 9:r=b.Q
q=H.ed(a,r,c,a0)
if(q===r)return b
return H.e6(a,b.z,q)
case 10:p=b.z
o=H.bF(a,p,c,a0)
n=b.Q
m=H.ed(a,n,c,a0)
if(o===p&&m===n)return b
return H.kT(a,o,m)
case 11:l=b.z
k=H.bF(a,l,c,a0)
j=b.Q
i=H.pJ(a,j,c,a0)
if(k===l&&i===j)return b
return H.mk(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.ed(a,h,c,a0)
p=b.z
o=H.bF(a,p,c,a0)
if(g===h&&o===p)return b
return H.kU(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.b(P.h4("Attempted to substitute unexpected RTI kind "+d))}},
ed:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.bF(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
pK:function(a,b,c,d){var t,s,r,q,p,o=b.length,n=[]
for(t=!1,s=0;s<o;s+=2){r=b[s]
q=b[s+1]
p=H.bF(a,q,c,d)
if(p!==q)t=!0
n.push(r)
n.push(p)}return t?n:b},
pJ:function(a,b,c,d){var t,s=b.a,r=H.ed(a,s,c,d),q=b.b,p=H.ed(a,q,c,d),o=b.c,n=H.pK(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.fx()
t.a=r
t.b=p
t.c=n
return t},
pR:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.mM(t)
return a.$S()}return null},
mN:function(a,b){var t
if(H.m1(b))if(a instanceof H.bP){t=H.pR(a)
if(t!=null)return t}return H.X(a)},
X:function(a){var t
if(a instanceof P.E){t=a.$ti
return t!=null?t:H.kZ(a)}if(Array.isArray(a))return H.C(a)
return H.kZ(J.bI(a))},
C:function(a){var t=a[v.arrayRti],s=u.cO
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
i:function(a){var t=a.$ti
return t!=null?t:H.kZ(a)},
kZ:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.pv(a,t)},
pv:function(a,b){var t=a instanceof H.bP?a.__proto__.__proto__.constructor:b,s=H.pk(v.typeUniverse,t.name)
b.$ccache=s
return s},
mM:function(a){var t,s=a,r=v.types,q=r[s]
if(typeof q=="string"){t=H.kW(v.typeUniverse,q,!1)
r[s]=t
return t}return q},
pu:function(a){var t=this,s=H.ps,r=u.K
if(t===r){s=H.px
t.a=H.pm}else if(H.bJ(t)||t===r){s=H.pA
t.a=H.pn}else if(t===u.S)s=H.cO
else if(t===u.gR)s=H.mv
else if(t===u.di)s=H.mv
else if(t===u.N)s=H.py
else if(t===u.y)s=H.kh
else if(t.y===9){r=t.z
if(t.Q.every(H.q5)){t.r="$i"+r
s=H.pz}}t.b=s
return t.b(a)},
ps:function(a){var t=this
return H.a7(v.typeUniverse,H.mN(a,t),null,t,null)},
pz:function(a){var t=this,s=t.r
if(a instanceof P.E)return!!a[s]
return!!J.bI(a)[s]},
pr:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
throw H.b(H.mj(H.m9(a,H.mN(a,t),H.aA(t,null))))},
aU:function(a,b,c,d){var t=null
if(H.a7(v.typeUniverse,a,t,b,t))return a
throw H.b(H.mj("The type argument '"+H.a(H.aA(a,t))+"' is not a subtype of the type variable bound '"+H.a(H.aA(b,t))+"' of type variable '"+c+"' in '"+H.a(d)+"'."))},
m9:function(a,b,c){var t=P.bs(a),s=H.aA(b==null?H.X(a):b,null)
return t+": type '"+H.a(s)+"' is not a subtype of type '"+H.a(c)+"'"},
mj:function(a){return new H.e5("TypeError: "+a)},
fR:function(a,b){return new H.e5("TypeError: "+H.m9(a,null,b))},
px:function(a){return!0},
pm:function(a){return a},
pA:function(a){return!0},
pn:function(a){return a},
kh:function(a){return!0===a||!1===a},
cN:function(a){if(!0===a||!1===a)return a
if(a==null)return a
throw H.b(H.fR(a,"bool"))},
pl:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.fR(a,"double"))},
cO:function(a){return typeof a=="number"&&Math.floor(a)===a},
q:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.b(H.fR(a,"int"))},
mv:function(a){return typeof a=="number"},
kb:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.b(H.fR(a,"num"))},
py:function(a){return typeof a=="string"},
r:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.b(H.fR(a,"String"))},
pG:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.d.v(s,H.aA(a[r],b))
return t},
mq:function(a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", "
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
if(!(H.bJ(k)||k===p))m=!(k===p)
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
return J.nr(r===11||r===12?C.d.v("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.a(H.aA(a.z,b))+">"
if(m===9){q=H.pL(a.z)
p=a.Q
return p.length!==0?q+("<"+H.pG(p,b)+">"):q}if(m===11)return H.mq(a,b,null)
if(m===12)return H.mq(a.z,b,a.Q)
if(m===13){o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.o(b,o)
return b[o]}return"?"},
pL:function(a){var t,s=H.n7(a)
if(s!=null)return s
t="minified:"+a
return t},
mo:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
pk:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.kW(a,b,!1)
else if(typeof n=="number"){t=n
s=H.e7(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.e6(a,b,r)
o[b]=p
return p}else return n},
pi:function(a,b){return H.mp(a.tR,b)},
ph:function(a,b){return H.mp(a.eT,b)},
kW:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.mn(a,null,b,c)
s.set(b,t)
return t},
fT:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.mn(a,b,c,!0)
r.set(c,s)
return s},
pj:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.kT(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
mn:function(a,b,c,d){var t=H.p8(H.p4(a,b,c,d))
if(t!=null)return t
throw H.b(P.j2('_Universe._parseRecipe("'+H.a(c)+'")'))},
bE:function(a,b){b.a=H.pr
b.b=H.pu
return b},
e7:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.aQ(null,null)
t.y=b
t.cy=c
s=H.bE(a,t)
a.eC.set(c,s)
return s},
mm:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.pf(a,b,s,c)
a.eC.set(s,t)
return t},
pf:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.bJ(b)||b===u.K||b===u.P||t===7||t===6)return b}s=new H.aQ(null,null)
s.y=6
s.z=b
s.cy=c
return H.bE(a,s)},
kV:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.pe(a,b,s,c)
a.eC.set(s,t)
return t},
pe:function(a,b,c,d){var t,s,r,q,p
if(d){t=b.y
if(!H.bJ(b))if(!(b===u.P))if(t!==7)s=t===8&&H.kt(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1)return u.P
else if(t===6){r=b.z
q=r.y
if(q===1)return u.P
else if(q===8&&H.kt(r.z))return r
else return H.or(a,b)}}p=new H.aQ(null,null)
p.y=7
p.z=b
p.cy=c
return H.bE(a,p)},
ml:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.pc(a,b,s,c)
a.eC.set(s,t)
return t},
pc:function(a,b,c,d){var t,s
if(d){t=b.y
if(H.bJ(b)||b===u.K||b===u.K)return b
else if(t===1)return H.e6(a,"aE",[b])
else if(b===u.P)return u.aQ}s=new H.aQ(null,null)
s.y=8
s.z=b
s.cy=c
return H.bE(a,s)},
pg:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.aQ(null,null)
t.y=13
t.z=b
t.cy=r
s=H.bE(a,t)
a.eC.set(r,s)
return s},
fS:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
pb:function(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=2,s=","){q=a[r]
p=a[r+1].cy
t+=s+q+":"+p}return t},
e6:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.fS(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.aQ(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.bE(a,s)
a.eC.set(q,r)
return r},
kT:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+";"+("<"+H.fS(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.aQ(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.bE(a,p)
a.eC.set(r,o)
return o},
mk:function(a,b,c){var t,s,r,q,p=b.cy,o=c.a,n=o.length,m=c.b,l=m.length,k=c.c,j=k.length,i="("+H.fS(o)
if(l>0)i+=(n>0?",":"")+"["+H.fS(m)+"]"
if(j>0)i+=(n>0?",":"")+"{"+H.pb(k)+"}"
t=p+(i+")")
s=a.eC.get(t)
if(s!=null)return s
r=new H.aQ(null,null)
r.y=11
r.z=b
r.Q=c
r.cy=t
q=H.bE(a,r)
a.eC.set(t,q)
return q},
kU:function(a,b,c,d){var t,s=b.cy+"<"+H.fS(c)+">",r=a.eC.get(s)
if(r!=null)return r
t=H.pd(a,b,c,s,d)
a.eC.set(s,t)
return t},
pd:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.bF(a,b,s,0)
n=H.ed(a,c,s,0)
return H.kU(a,o,n,c!==n)}}m=new H.aQ(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.bE(a,m)},
p4:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
p8:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.p5(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.mg(a,s,h,g,!1)
else if(r===46)s=H.mg(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:break
case 59:g.push(H.bD(a.u,a.e,g.pop()))
break
case 94:g.push(H.pg(a.u,g.pop()))
break
case 35:g.push(H.e7(a.u,5,"#"))
break
case 64:g.push(H.e7(a.u,2,"@"))
break
case 126:g.push(H.e7(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.kS(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.e6(q,o,p))
else{n=H.bD(q,a.e,o)
switch(n.y){case 11:g.push(H.kU(q,n,p,a.n))
break
default:g.push(H.kT(q,n,p))
break}}break
case 38:H.p6(a,g)
break
case 42:m=a.u
g.push(H.mm(m,H.bD(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.kV(m,H.bD(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.ml(m,H.bD(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.fx()
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
H.kS(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.mk(q,H.bD(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.kS(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.p9(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.bD(a.u,a.e,i)},
p5:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
mg:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.mo(t,p.z)[q]
if(o==null)H.D('No "'+q+'" in "'+H.oq(p)+'"')
d.push(H.fT(t,p,o))}else d.push(q)
return n},
p6:function(a,b){var t=b.pop()
if(0===t){b.push(H.e7(a.u,1,"0&"))
return}if(1===t){b.push(H.e7(a.u,4,"1&"))
return}throw H.b(P.h4("Unexpected extended operation "+H.a(t)))},
bD:function(a,b,c){if(typeof c=="string")return H.e6(a,c,a.sEA)
else if(typeof c=="number")return H.p7(a,b,c)
else return c},
kS:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.bD(a,b,c[t])},
p9:function(a,b,c){var t,s=c.length
for(t=1;t<s;t+=2)c[t]=H.bD(a,b,c[t])},
p7:function(a,b,c){var t,s,r=b.y
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
if(H.bJ(d)||d===u.K)return!0
t=b.y
if(t===4)return!0
if(H.bJ(b))return!1
if(b===u.P)return!0
s=t===13
if(s)if(H.a7(a,c[b.z],c,d,e))return!0
r=d.y
if(t===6)return H.a7(a,b.z,c,d,e)
if(r===6){q=d.z
return H.a7(a,b,c,q,e)}if(t===8){if(!H.a7(a,b.z,c,d,e))return!1
return H.a7(a,H.m0(a,b),c,d,e)}if(t===7){q=H.a7(a,b.z,c,d,e)
return q}if(r===8){if(H.a7(a,b,c,d.z,e))return!0
return H.a7(a,b,c,H.m0(a,d),e)}if(r===7){q=H.a7(a,b,c,d.z,e)
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
if(!H.a7(a,l,c,k,e)||!H.a7(a,k,e,l,c))return!1}return H.mu(a,b.z,c,d.z,e)}if(r===11){if(b===u.cj)return!0
if(q)return!1
return H.mu(a,b,c,d,e)}if(t===9){if(r!==9)return!1
return H.pw(a,b,c,d,e)}return!1},
mu:function(a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
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
pw:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.a7(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.mo(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.a7(a,H.fT(a,b,m[q]),c,s[q],e))return!1
return!0},
kt:function(a){var t,s=a.y
if(!(a===u.P))if(!H.bJ(a))if(s!==7)if(!(s===6&&H.kt(a.z)))t=s===8&&H.kt(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
q5:function(a){return H.bJ(a)||a===u.K},
bJ:function(a){var t,s=a.y,r=s
if(r!==2)if(r!==3)if(r!==4)if(r!==5){t=u.K
if(!(a===t))s=s===7&&a.z===t
else s=!0}else s=!0
else s=!0
else s=!0
else s=!0
return s},
mp:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aQ:function aQ(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fx:function fx(){this.c=this.b=this.a=null},
fv:function fv(){},
e5:function e5(a){this.a=a},
mO:function(a){return u.fK.b(a)||u.B.b(a)||u.dz.b(a)||u.gb.b(a)||u.F.b(a)||u.g4.b(a)||u.g2.b(a)},
n7:function(a){return v.mangledGlobalNames[a]},
qi:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fZ:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.l5==null){H.q0()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.b(P.j2("Return interceptor for "+H.a(t(a,p))))}r=a.constructor
q=r==null?null:r[$.lc()]
if(q!=null)return q
q=H.q7(a)
if(q!=null)return q
if(typeof a=="function")return C.I
t=Object.getPrototypeOf(a)
if(t==null)return C.v
if(t===Object.prototype)return C.v
if(typeof r=="function"){Object.defineProperty(r,$.lc(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
lO:function(a){a.fixed$length=Array
return a},
lP:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kJ:function(a,b){var t,s
for(t=a.length;b<t;){s=C.d.b2(a,b)
if(s!==32&&s!==13&&!J.lP(s))break;++b}return b},
ob:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.d.dw(a,t)
if(s!==32&&s!==13&&!J.lP(s))break}return b},
bI:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.di.prototype
return J.eJ.prototype}if(typeof a=="string")return J.bh.prototype
if(a==null)return J.dj.prototype
if(typeof a=="boolean")return J.eI.prototype
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.fZ(a)},
pX:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.fZ(a)},
ap:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.fZ(a)},
bc:function(a){if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.fZ(a)},
kn:function(a){if(typeof a=="number")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bz.prototype
return a},
mJ:function(a){if(typeof a=="number")return J.bv.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bz.prototype
return a},
ko:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.bz.prototype
return a},
W:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.E)return a
return J.fZ(a)},
nr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pX(a).v(a,b)},
bd:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bI(a).R(a,b)},
ns:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kn(a).L(a,b)},
lg:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mJ(a).at(a,b)},
bp:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.q4(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ap(a).h(a,b)},
kA:function(a,b,c){return J.bc(a).j(a,b,c)},
nt:function(a,b,c,d){return J.W(a).ew(a,b,c,d)},
kB:function(a){return J.W(a).eA(a)},
nu:function(a,b,c,d){return J.W(a).fb(a,b,c,d)},
nv:function(a,b,c){return J.W(a).fc(a,b,c)},
eh:function(a,b){return J.bc(a).l(a,b)},
lh:function(a,b){return J.mJ(a).dz(a,b)},
h1:function(a,b,c){return J.ap(a).fH(a,b,c)},
nw:function(a,b){return J.W(a).dC(a,b)},
aW:function(a,b){return J.bc(a).C(a,b)},
c9:function(a){return J.kn(a).c8(a)},
nx:function(a){return J.W(a).gfu(a)},
ny:function(a){return J.W(a).gdu(a)},
bM:function(a){return J.W(a).gdv(a)},
ad:function(a){return J.bI(a).gB(a)},
nz:function(a){return J.ap(a).gN(a)},
li:function(a){return J.ap(a).gcj(a)},
y:function(a){return J.bc(a).gA(a)},
ae:function(a){return J.ap(a).gk(a)},
nA:function(a){return J.W(a).gdL(a)},
nB:function(a){return J.W(a).gdO(a)},
nC:function(a){return J.W(a).gdP(a)},
lj:function(a,b,c){return J.bc(a).af(a,b,c)},
nD:function(a,b){return J.bc(a).T(a,b)},
kC:function(a,b,c){return J.bc(a).H(a,b,c)},
nE:function(a,b){return J.W(a).h0(a,b)},
nF:function(a,b){return J.W(a).h2(a,b)},
nG:function(a,b){return J.bI(a).bn(a,b)},
ei:function(a){return J.W(a).bp(a)},
nH:function(a,b){return J.W(a).hc(a,b)},
cU:function(a){return J.kn(a).D(a)},
ej:function(a,b){return J.W(a).G(a,b)},
lk:function(a,b,c){return J.W(a).cA(a,b,c)},
nI:function(a,b){return J.bc(a).aZ(a,b)},
nJ:function(a,b,c){return J.ko(a).aa(a,b,c)},
ll:function(a){return J.kn(a).bt(a)},
nK:function(a){return J.bc(a).aq(a)},
nL:function(a){return J.ko(a).hj(a)},
z:function(a){return J.bI(a).n(a)},
ek:function(a){return J.ko(a).aG(a)},
aj:function aj(){},
eI:function eI(){},
dj:function dj(){},
bw:function bw(){},
f3:function f3(){},
bz:function bz(){},
b5:function b5(){},
G:function G(a){this.$ti=a},
ix:function ix(a){this.$ti=a},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bv:function bv(){},
di:function di(){},
eJ:function eJ(){},
bh:function bh(){}},P={
oU:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.pN()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.cT(new P.ji(r),1)).observe(t,{childList:true})
return new P.jh(r,t,s)}else if(self.setImmediate!=null)return P.pO()
return P.pP()},
oV:function(a){self.scheduleImmediate(H.cT(new P.jj(u.M.a(a)),0))},
oW:function(a){self.setImmediate(H.cT(new P.jk(u.M.a(a)),0))},
oX:function(a){P.kN(C.p,u.M.a(a))},
kN:function(a,b){var t=C.e.az(a.a,1000)
return P.pa(t<0?0:t,b)},
pa:function(a,b){var t=new P.k3()
t.eu(a,b)
return t},
o1:function(a,b){var t=new P.a3($.H,b.i("a3<0>"))
P.oB(C.p,new P.it(t,a))
return t},
ma:function(a,b){var t,s,r
b.a=1
try{a.e_(new P.jw(b),new P.jx(b),u.P)}catch(r){t=H.L(r)
s=H.aV(r)
P.n4(new P.jy(b,t,s))}},
jv:function(a,b){var t,s,r
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
P.cQ(e,e,c.b,o.a,o.b)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
P.cQ(e,e,c.b,m.a,m.b)
return}h=$.H
if(h!==j)$.H=j
else h=e
c=b.c
if((c&15)===8)new P.jD(d,q,b,p).$0()
else if(l){if((c&1)!==0)new P.jC(q,b,m).$0()}else if((c&2)!==0)new P.jB(d,q,b).$0()
if(h!=null)$.H=h
c=q.b
if(r.b(c)){if(c.a>=4){g=s.a(k.c)
k.c=null
b=k.bb(g)
k.a=c.a
k.c=c.c
d.a=c
continue}else P.jv(c,k)
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
pF:function(a,b){var t
if(u.ag.b(a))return b.dS(a,u.z,u.K,u.l)
t=u.bI
if(t.b(a))return t.a(a)
throw H.b(P.cV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pC:function(){var t,s
for(;t=$.cP,t!=null;){$.ec=null
s=t.b
$.cP=s
if(s==null)$.eb=null
t.a.$0()}},
pI:function(){$.l_=!0
try{P.pC()}finally{$.ec=null
$.l_=!1
if($.cP!=null)$.ld().$1(P.mF())}},
mB:function(a){var t=new P.fk(a)
if($.cP==null){$.cP=$.eb=t
if(!$.l_)$.ld().$1(P.mF())}else $.eb=$.eb.b=t},
pH:function(a){var t,s,r=$.cP
if(r==null){P.mB(a)
$.ec=$.eb
return}t=new P.fk(a)
s=$.ec
if(s==null){t.b=r
$.cP=$.ec=t}else{t.b=s.b
$.ec=s.b=t
if(t.b==null)$.eb=t}},
n4:function(a){var t=null,s=$.H
if(C.f===s){P.cR(t,t,C.f,a)
return}P.cR(t,t,s,u.M.a(s.c1(a)))},
cy:function(a,b,c){return new P.e3(null,a,c.i("e3<0>"))},
mA:function(a){var t,s,r
if(a==null)return
try{a.$0()}catch(r){t=H.L(r)
s=H.aV(r)
P.cQ(null,null,$.H,t,u.l.a(s))}},
mw:function(a,b){P.cQ(null,null,$.H,a,b)},
pD:function(){},
oB:function(a,b){var t=$.H
if(t===C.f)return P.kN(a,u.M.a(b))
return P.kN(a,u.M.a(t.c1(b)))},
h5:function(a,b){var t=b==null?P.lo(a):b
P.be(a,"error",u.K)
return new P.cX(a,t)},
lo:function(a){var t
if(u.bU.b(a)){t=a.gb_()
if(t!=null)return t}return C.G},
cQ:function(a,b,c,d,e){var t={}
t.a=d
t.b=e
if(d==null){t.a=new P.aK(!1,null,"error","Must not be null")
t.b=P.oy()}P.pH(new P.ki(t))},
mx:function(a,b,c,d,e){var t,s=$.H
if(s===c)return d.$0()
$.H=c
t=s
try{s=d.$0()
return s}finally{$.H=t}},
mz:function(a,b,c,d,e,f,g){var t,s=$.H
if(s===c)return d.$1(e)
$.H=c
t=s
try{s=d.$1(e)
return s}finally{$.H=t}},
my:function(a,b,c,d,e,f,g,h,i){var t,s=$.H
if(s===c)return d.$2(e,f)
$.H=c
t=s
try{s=d.$2(e,f)
return s}finally{$.H=t}},
cR:function(a,b,c,d){var t
u.M.a(d)
t=C.f!==c
if(t)d=!(!t||!1)?c.c1(d):c.fv(d,u.o)
P.mB(d)},
ji:function ji(a){this.a=a},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
k3:function k3(){},
k4:function k4(a,b){this.a=a
this.b=b},
ah:function ah(a,b){this.a=a
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
bB:function bB(){},
e3:function e3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
k0:function k0(a,b){this.a=a
this.b=b},
k1:function k1(a){this.a=a},
aE:function aE(){},
it:function it(a,b){this.a=a
this.b=b},
fn:function fn(){},
e4:function e4(a,b){this.a=a
this.$ti=b},
c6:function c6(a,b,c,d,e){var _=this
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
jt:function jt(a,b){this.a=a
this.b=b},
jA:function jA(a,b){this.a=a
this.b=b},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a,b){this.a=a
this.b=b},
jz:function jz(a,b){this.a=a
this.b=b},
jD:function jD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jE:function jE(a){this.a=a},
jC:function jC(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a,b,c){this.a=a
this.b=b
this.c=c},
fk:function fk(a){this.a=a
this.b=null},
U:function U(){},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
a2:function a2(){},
f8:function f8(){},
cF:function cF(){},
cG:function cG(){},
P:function P(){},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
jl:function jl(a){this.a=a},
cL:function cL(){},
bC:function bC(){},
dF:function dF(a,b){this.b=a
this.a=null
this.$ti=b},
fs:function fs(a,b){this.b=a
this.c=b
this.a=null},
fr:function fr(){},
dX:function dX(){},
jO:function jO(a,b){this.a=a
this.b=b},
e1:function e1(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cH:function cH(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
dI:function dI(){},
cJ:function cJ(a,b,c,d){var _=this
_.x=a
_.c=_.b=_.a=_.y=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
dR:function dR(a,b,c){this.b=a
this.a=b
this.$ti=c},
cX:function cX(a,b){this.a=a
this.b=b},
fU:function fU(){},
ki:function ki(a){this.a=a},
fJ:function fJ(){},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b){this.a=a
this.b=b},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
mb:function(a,b){var t=a[b]
return t===a?null:t},
kQ:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
mc:function(){var t=Object.create(null)
P.kQ(t,"<non-identifier-key>",t)
delete t["<non-identifier-key>"]
return t},
a5:function(a,b,c){return b.i("@<0>").q(c).i("lR<1,2>").a(H.pW(a,new H.a9(b.i("@<0>").q(c).i("a9<1,2>"))))},
bY:function(a,b){return new H.a9(a.i("@<0>").q(b).i("a9<1,2>"))},
dp:function(a){return new P.dP(a.i("dP<0>"))},
kR:function(){var t=Object.create(null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
jJ:function(a,b,c){var t=new P.c8(a,b,c.i("c8<0>"))
t.c=a.e
return t},
o3:function(a,b,c){var t,s
if(P.l0(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=H.h([],u.s)
C.a.l($.aJ,a)
try{P.pB(a,t)}finally{if(0>=$.aJ.length)return H.o($.aJ,-1)
$.aJ.pop()}s=P.m2(b,u.R.a(t),", ")+c
return s.charCodeAt(0)==0?s:s},
iv:function(a,b,c){var t,s
if(P.l0(a))return b+"..."+c
t=new P.aS(b)
C.a.l($.aJ,a)
try{s=t
s.a=P.m2(s.a,a,", ")}finally{if(0>=$.aJ.length)return H.o($.aJ,-1)
$.aJ.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
l0:function(a){var t,s
for(t=$.aJ.length,s=0;s<t;++s)if(a===$.aJ[s])return!0
return!1},
pB:function(a,b){var t,s,r,q,p,o,n,m=a.gA(a),l=0,k=0
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
lS:function(a,b){var t,s,r=P.dp(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.B)(a),++s)r.l(0,b.a(a[s]))
return r},
iC:function(a){var t,s={}
if(P.l0(a))return"{...}"
t=new P.aS("")
try{C.a.l($.aJ,a)
t.a+="{"
s.a=!0
a.t(0,new P.iD(s,t))
t.a+="}"}finally{if(0>=$.aJ.length)return H.o($.aJ,-1)
$.aJ.pop()}s=t.a
return s.charCodeAt(0)==0?s:s},
dJ:function dJ(){},
dM:function dM(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dK:function dK(a,b){this.a=a
this.$ti=b},
dL:function dL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dP:function dP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fD:function fD(a){this.a=a
this.c=this.b=null},
c8:function c8(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dq:function dq(){},
k:function k(){},
dr:function dr(){},
iD:function iD(a,b){this.a=a
this.b=b},
T:function T(){},
e8:function e8(){},
co:function co(){},
dD:function dD(){},
b_:function b_(){},
dx:function dx(){},
dY:function dY(){},
dQ:function dQ(){},
dZ:function dZ(){},
cM:function cM(){},
pE:function(a,b){var t,s,r,q
if(typeof a!="string")throw H.b(H.bb(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.L(r)
q=P.df(String(s),null)
throw H.b(q)}q=P.kc(t)
return q},
kc:function(a){var t
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.fB(a,Object.create(null))
for(t=0;t<a.length;++t)a[t]=P.kc(a[t])
return a},
lQ:function(a,b,c){return new P.dl(a,b)},
pq:function(a){return a.hs()},
p3:function(a,b,c){var t,s=new P.aS(""),r=new P.jG(s,[],P.pT())
r.by(a)
t=s.a
return t.charCodeAt(0)==0?t:t},
fB:function fB(a,b){this.a=a
this.b=b
this.c=null},
fC:function fC(a){this.a=a},
er:function er(){},
cf:function cf(){},
iu:function iu(){},
cj:function cj(){},
dl:function dl(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b},
iA:function iA(){},
eP:function eP(a){this.b=a},
eO:function eO(a){this.a=a},
jH:function jH(){},
jI:function jI(a,b){this.a=a
this.b=b},
jG:function jG(a,b,c){this.c=a
this.a=b
this.b=c},
q2:function(a){var t=H.lZ(a,null)
if(t!=null)return t
throw H.b(P.df(a,null))},
o0:function(a){if(a instanceof H.bP)return a.n(0)
return"Instance of '"+H.a(H.iP(a))+"'"},
cm:function(a,b,c){var t,s=H.h([],c.i("G<0>"))
for(t=J.y(a);t.m();)C.a.l(s,c.a(t.gp()))
if(b)return s
return c.i("v<0>").a(J.lO(s))},
op:function(a){return new H.eL(a,H.oc(a,!1,!0,!1,!1,!1))},
m2:function(a,b,c){var t=J.y(b)
if(!t.m())return a
if(c.length===0){do a+=H.a(t.gp())
while(t.m())}else{a+=H.a(t.gp())
for(;t.m();)a=a+c+H.a(t.gp())}return a},
lU:function(a,b,c,d){return new P.eZ(a,b,c,d)},
oy:function(){var t,s
if(H.ac($.nq()))return H.aV(new Error())
try{throw H.b("")}catch(s){H.L(s)
t=H.aV(s)
return t}},
nW:function(a,b){var t
if(Math.abs(a)<=864e13)t=!1
else t=!0
if(t)H.D(P.b2("DateTime is outside valid range: "+a))
P.be(!1,"isUtc",u.y)
return new P.ch(a,!1)},
nX:function(a){var t=Math.abs(a),s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
nY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ev:function(a){if(a>=10)return""+a
return"0"+a},
bs:function(a){if(typeof a=="number"||H.kh(a)||null==a)return J.z(a)
if(typeof a=="string")return JSON.stringify(a)
return P.o0(a)},
h4:function(a){return new P.cW(a)},
b2:function(a){return new P.aK(!1,null,null,a)},
cV:function(a,b,c){return new P.aK(!0,a,b,c)},
kD:function(a){return new P.aK(!1,null,a,"Must not be null")},
be:function(a,b,c){if(a==null)throw H.b(P.kD(b))
return a},
cu:function(a,b){return new P.dw(null,null,!0,a,b,"Value not in range")},
ab:function(a,b,c,d,e){return new P.dw(b,c,!0,a,d,"Invalid value")},
kM:function(a,b,c,d){if(typeof a!=="number")return a.ai()
if(a<b||a>c)throw H.b(P.ab(a,b,c,d,null))
return a},
m_:function(a,b,c){if(0>a||a>c)throw H.b(P.ab(a,0,c,"start",null))
if(a>b||b>c)throw H.b(P.ab(b,a,c,"end",null))
return b},
aZ:function(a,b){if(typeof a!=="number")return a.ai()
if(a<0)throw H.b(P.ab(a,0,null,b,null))
return a},
bg:function(a,b,c,d,e){var t=H.q(e==null?J.ae(b):e)
return new P.eH(t,!0,a,c,"Index out of range")},
x:function(a){return new P.fi(a)},
j2:function(a){return new P.fg(a)},
ax:function(a){return new P.b6(a)},
aN:function(a){return new P.es(a)},
bV:function(a){return new P.fw(a)},
df:function(a,b){return new P.de(a,b)},
mV:function(a,b){var t=P.h_(a)
if(t!=null)return t
if(b==null)throw H.b(P.df(a,null))
return b.$1(a)},
h_:function(a){var t=J.ek(a),s=H.lZ(t,null)
return s==null?H.oo(t):s},
ef:function(a){H.qi(H.a(a))},
iE:function iE(a,b){this.a=a
this.b=b},
t:function t(){},
ch:function ch(a,b){this.a=a
this.b=b},
ai:function ai(){},
bT:function bT(a){this.a=a},
i_:function i_(){},
i0:function i0(){},
K:function K(){},
cW:function cW(a){this.a=a},
f0:function f0(){},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dw:function dw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eH:function eH(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
eZ:function eZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fi:function fi(a){this.a=a},
fg:function fg(a){this.a=a},
b6:function b6(a){this.a=a},
es:function es(a){this.a=a},
f1:function f1(){},
dz:function dz(){},
eu:function eu(a){this.a=a},
fw:function fw(a){this.a=a},
de:function de(a,b){this.a=a
this.b=b},
b4:function b4(){},
e:function e(){},
d:function d(){},
S:function S(){},
v:function v(){},
cn:function cn(){},
w:function w(){},
Y:function Y(){},
E:function E(){},
ds:function ds(){},
at:function at(){},
au:function au(){},
fL:function fL(){},
c:function c(){},
aS:function aS(a){this.a=a},
b0:function b0(){},
kH:function(){var t=$.lx
return t==null?$.lx=J.h1(window.navigator.userAgent,"Opera",0):t},
nZ:function(){var t,s=$.lu
if(s!=null)return s
t=$.lv
if(t==null?$.lv=J.h1(window.navigator.userAgent,"Firefox",0):t)s="-moz-"
else{t=$.lw
if(t==null)t=$.lw=!H.ac(P.kH())&&J.h1(window.navigator.userAgent,"Trident/",0)
if(t)s="-ms-"
else s=H.ac(P.kH())?"-o-":"-webkit-"}return $.lu=s},
et:function et(){},
hL:function hL(a){this.a=a},
eE:function eE(a,b){this.a=a
this.b=b},
iq:function iq(){},
ir:function ir(){},
is:function is(){},
dm:function dm(){},
po:function(a,b,c,d){var t,s,r
H.cN(b)
u.j.a(d)
if(H.ac(b)){t=[c]
C.a.M(t,d)
d=t}s=u.z
r=P.cm(J.kC(d,P.q6(),s),!0,s)
u.Z.a(a)
return P.ea(H.og(a,r,null))},
ak:function(a){if(!u.f.b(a)&&!u.R.b(a))throw H.b(P.b2("object must be a Map or Iterable"))
return u.b.a(P.bG(P.dk(a)))},
dk:function(a){return new P.iz(new P.dM(u.aH)).$1(a)},
aY:function(a,b){var t=[]
C.a.M(t,J.kC(a,P.ku(),u.z))
return new P.u(t,b.i("u<0>"))},
kX:function(a,b,c){var t
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(t){H.L(t)}return!1},
ms:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
ea:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.kh(a))return a
if(a instanceof P.Q)return a.a
if(H.mO(a))return a
if(u.ak.b(a))return a
if(a instanceof P.ch)return H.c0(a)
if(u.Z.b(a))return P.mr(a,"$dart_jsFunction",new P.ke())
return P.mr(a,"_$dart_jsObject",new P.kf($.lf()))},
mr:function(a,b,c){var t=P.ms(a,b)
if(t==null){t=c.$1(a)
P.kX(a,b,t)}return t},
kd:function(a){var t,s
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.mO(a))return a
else if(a instanceof Object&&u.ak.b(a))return a
else if(a instanceof Date){t=H.q(a.getTime())
if(Math.abs(t)<=864e13)s=!1
else s=!0
if(s)H.D(P.b2("DateTime is outside valid range: "+t))
P.be(!1,"isUtc",u.y)
return new P.ch(t,!1)}else if(a.constructor===$.lf())return a.o
else return P.bG(a)},
bG:function(a){if(typeof a=="function")return P.kY(a,$.kz(),new P.kj())
if(a instanceof Array)return P.kY(a,$.le(),new P.kk())
return P.kY(a,$.le(),new P.kl())},
kY:function(a,b,c){var t=P.ms(a,b)
if(t==null||!(a instanceof Object)){t=c.$1(a)
P.kX(a,b,t)}return t},
iz:function iz(a){this.a=a},
ke:function ke(){},
kf:function kf(a){this.a=a},
kj:function kj(){},
kk:function kk(){},
kl:function kl(){},
Q:function Q(a){this.a=a},
aF:function aF(a){this.a=a},
u:function u(a,b){this.a=a
this.$ti=b},
dO:function dO(){},
dN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
me:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
fI:function fI(){},
by:function by(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cv:function cv(){},
en:function en(a){this.a=a},
l:function l(){}},W={
lm:function(a){var t=document.createElement("a")
if(a!=null)t.href=a
return t},
o_:function(a,b,c){var t=document.body,s=(t&&C.m).W(t,a,b,c)
s.toString
t=u.ac
t=new H.ag(new W.an(s),t.i("t(k.E)").a(new W.i2()),t.i("ag<k.E>"))
return u.h.a(t.gaw(t))},
db:function(a){var t,s,r="element tag unavailable"
try{t=J.W(a)
if(typeof t.gdY(a)=="string")r=t.gdY(a)}catch(s){H.L(s)}return r},
o2:function(a){var t,s=document.createElement("input"),r=u.p.a(s)
try{r.type=a}catch(t){H.L(t)}return r},
dt:function(a,b){var t=window,s=u.V.a(document.createEvent("MouseEvent"))
s.toString
s.initMouseEvent(a,!0,!0,t,0,0,0,0,0,!1,!1,!1,!1,0,W.pp(b))
return s},
oC:function(a){return new TouchEvent(a)},
oD:function(){var t
try{W.oC("touches")
return!0}catch(t){H.L(t)}return!1},
jF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mf:function(a,b,c,d){var t=W.jF(W.jF(W.jF(W.jF(0,a),b),c),d),s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
kP:function(a,b){var t,s=a.classList
for(t=0;t<2;++t)s.add(b[t])},
p0:function(a,b){var t,s,r=a.classList
for(t=b.length,s=0;s<b.length;b.length===t||(0,H.B)(b),++s)r.remove(H.r(b[s]))},
i3:function(a,b){return new W.eD(a,b.i("eD<0>"))},
A:function(a,b,c,d,e){var t=W.mC(new W.js(c),u.B)
t=new W.dH(a,b,t,!1,e.i("dH<0>"))
t.dj()
return t},
md:function(a){var t=W.lm(null),s=window.location
t=new W.c7(new W.fK(t,s))
t.er(a)
return t},
p1:function(a,b,c,d){u.h.a(a)
H.r(b)
H.r(c)
u.cr.a(d)
return!0},
p2:function(a,b,c,d){var t,s,r
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
mi:function(){var t=u.N,s=P.lS(C.t,t),r=u.dG.a(new W.k2()),q=H.h(["TEMPLATE"],u.s)
t=new W.fN(s,P.dp(t),P.dp(t),P.dp(t),null)
t.es(null,new H.O(C.t,r,u.dv),q,null)
return t},
M:function(a){var t
if(a==null)return null
if("postMessage" in a){t=W.oY(a)
return t}else return u.aS.a(a)},
pp:function(a){return a},
oY:function(a){if(a===window)return u.ci.a(a)
else return new W.fq(a)},
mC:function(a,b){var t=$.H
if(t===C.f)return a
return t.fw(a,b)},
j:function j(){},
ca:function ca(){},
em:function em(){},
cb:function cb(){},
bN:function bN(){},
bO:function bO(){},
ce:function ce(){},
b3:function b3(){},
I:function I(){},
cg:function cg(){},
hM:function hM(){},
d5:function d5(){},
bR:function bR(){},
hN:function hN(){},
d6:function d6(){},
hO:function hO(){},
fm:function fm(a,b){this.a=a
this.b=b},
ao:function ao(a,b){this.a=a
this.$ti=b},
p:function p(){},
i2:function i2(){},
f:function f(){},
i4:function i4(){},
i1:function i1(a){this.a=a},
F:function F(){},
eF:function eF(){},
bu:function bu(){},
dg:function dg(){},
ck:function ck(){},
bi:function bi(){},
eQ:function eQ(){},
a1:function a1(){},
an:function an(a){this.a=a},
m:function m(){},
cp:function cp(){},
cq:function cq(){},
cr:function cr(){},
cx:function cx(){},
cz:function cz(){},
fa:function fa(){},
dB:function dB(){},
fb:function fb(){},
fc:function fc(){},
cB:function cB(){},
cC:function cC(){},
aI:function aI(){},
b7:function b7(){},
ff:function ff(){},
ay:function ay(){},
bA:function bA(){},
jg:function jg(a){this.a=a},
b8:function b8(){},
cE:function cE(){},
fo:function fo(){},
dG:function dG(){},
dS:function dS(){},
fl:function fl(){},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
eD:function eD(a,b){this.a=a
this.$ti=b},
bn:function bn(a,b,c,d){var _=this
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
dH:function dH(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
js:function js(a){this.a=a},
e2:function e2(a,b){this.a=null
this.b=a
this.$ti=b},
jZ:function jZ(a,b){this.a=a
this.b=b},
c7:function c7(a){this.a=a},
V:function V(){},
dv:function dv(a){this.a=a},
iG:function iG(a){this.a=a},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(){},
jX:function jX(){},
jY:function jY(){},
fN:function fN(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
k2:function k2(){},
fM:function fM(){},
bX:function bX(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
fq:function fq(a){this.a=a},
as:function as(){},
fK:function fK(a,b){this.a=a
this.b=b},
e9:function e9(a){this.a=a
this.b=!1},
ka:function ka(a){this.a=a},
fp:function fp(){},
fz:function fz(){},
fA:function fA(){},
fF:function fF(){},
fG:function fG(){},
fO:function fO(){},
fP:function fP(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){}},Z={
lD:function(a,b,c,d){var t,s,r=$.lF
$.lF=r+1
t=H.h([],u.f7)
r=new Z.hP(r,b,c,d,t)
s=u.j.b(a)?a:H.h([a],u.ge)
r.sbO(u.O.a(s))
s=window
if(u.b.a(P.bG(P.ea(s))).w("PointerEvent")){s=u.w
s=new Z.fH(H.h([],s),H.h([],s),r)
s.bF(r)
C.a.l(t,s)}else{if(W.oD()){s=u.w
s=new Z.fQ(H.h([],s),H.h([],s),r)
s.bF(r)
C.a.l(t,s)}s=u.w
s=new Z.fE(H.h([],s),H.h([],s),r)
s.bF(r)
C.a.l(t,s)}return r},
lE:function(a,b,c){return new Z.bS(b.b,b.c)},
nM:function(a){$.ln=a
if(!$.h2){C.R.gfs(window).dZ(new Z.h3(),u.o)
$.h2=!0}},
p_:function(a,b){var t,s,r="_customDragOver"
if(b==null)return
t=$.cI
if(t===b)b.dispatchEvent(W.dt(r,null))
else{b.dispatchEvent(W.dt("_customDragEnter",t))
if($.cI!=null){s=W.dt("_customDragLeave",b)
$.cI.dispatchEvent(s)}b.dispatchEvent(W.dt(r,null))
$.cI=b}},
oZ:function(a,b){J.nw(b,W.dt("_customDrop",null))
Z.m8()},
m8:function(){if($.cI!=null){var t=W.dt("_customDragLeave",null)
$.cI.dispatchEvent(t)
$.cI=null}},
ci:function(a,b){var t=new Z.eC(b,H.h([],u.w)),s=u.j.b(a)?a:H.h([a],u.ge)
t.sbO(u.O.a(s))
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
bS:function bS(a,b){this.a=a
this.d=b},
jn:function jn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e
_.x=f},
eo:function eo(){},
h8:function h8(a,b){this.a=a
this.b=b},
h3:function h3(){},
ba:function ba(){},
jo:function jo(){},
jp:function jp(a){this.a=a},
jq:function jq(a){this.a=a},
jr:function jr(){},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
k9:function k9(a){this.a=a},
k8:function k8(a){this.a=a},
k7:function k7(a){this.a=a},
k6:function k6(a){this.a=a},
k5:function k5(a){this.a=a},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
jN:function jN(a){this.a=a},
jM:function jM(a){this.a=a},
jL:function jL(a){this.a=a},
jK:function jK(a){this.a=a},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
jT:function jT(a){this.a=a},
jS:function jS(a){this.a=a},
jR:function jR(a){this.a=a},
jQ:function jQ(a){this.a=a},
jP:function jP(a){this.a=a},
eC:function eC(a,b){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=null
_.y=b},
hW:function hW(a){this.a=a},
hY:function hY(a){this.a=a},
hX:function hX(a){this.a=a},
hZ:function hZ(a){this.a=a},
hV:function hV(){},
av:function av(a){this.d=a},
el:function el(){}},U={
lL:function(a,b,c){var t=u.s,s=new U.bW(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t)),b,a)
s.ax(a,b)
if(!C.a.F(H.h(["num","bool"],t),c))H.D(P.cV(c,"type","The expression type can only be num or bool"))
t=new U.bt(a.id)
t.c=new U.af(t,c,H.h([],u.U))
s.r=t
s.f=c
return s},
ot:function(a,b,c){var t=new U.cw("smart-quote",H.h([],u.eD),new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,a)
t.aJ(a,b,c)
t.eq(a,b,c)
return t},
ha:function(a,b,c,d){var t=d?b.cloneNode(!0):b
u.d.a(t)
t.toString
W.p0(t,u.fP.a(["nt-block-first","nt-block-last","nt-block-standalone","nt-block-middle","nt-block-clause-first","nt-block-clause-last","nt-block-clause-standalone","nt-block-clause-middle"]))
t.classList.add(c)
a.appendChild(t)},
kE:function(a,b,c,d){var t,s=b.length
if(s===0)return
if(s===1)U.ha(a,C.a.gJ(b).r1,c+"-standalone",d)
else{U.ha(a,C.a.gJ(b).r1,c+"-first",d)
for(t=1;t<b.length-1;++t)U.ha(a,b[t].r1,c+"-middle",d)
U.ha(a,C.a.gaD(b).r1,c+"-last",d)}},
kF:function(){return new U.cZ("#9977aa","#ffffff","#ffffff")},
lp:function(a,b,c,d){var t=H.h(["id","action","required","isTerminal","placement","instanceId","type","format","closeClauses","closeStarter","limit","note","blockColor","textColor","borderColor","font","clauses","params","properties","propertiesDisplay"],u.s),s=u.by
t=new U.aq(new U.a4(t),b,c,new H.a9(s),new H.a9(s),H.h([],u.cA),"child",a)
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
kG:function(a,b,c){var t,s=Z.lD(b,a.k1,"input, textarea, button, select, option","nt-block-dragging")
s.gdN(s).u(a.gbC())
s.gdM(s).u(a.gc6())
t=Z.ci(b,a.id.r1)
t.gap(t).u(a.ga0())
t.gan(t).u(new U.hm(c))
t.gao(t).u(new U.hn(c))},
ls:function(a,b){var t,s,r,q=document.createElement("div")
q.classList.add("nt-cap")
t=b.ah()
W.kP(q,u.t.a(H.h([t,t+"-color"],u.s)))
U.hg(b,q)
s=b.db
if(s!=null){r=q.style
r.backgroundColor=s}if(a)q.classList.add("nt-cap-top")
else q.classList.add("nt-cap-bottom")
U.kG(b,q,new U.hp(b))
return q},
hs:function(a,b,c,d){var t
a.toString
C.b.G(a,"")
if(C.a.gJ(b).gaS()){a.classList.add("nt-chain-starter")
a.classList.remove("nt-chain-fragment")
a.appendChild(U.ls(!0,C.a.gJ(b)))}else{a.classList.remove("nt-chain-starter")
a.classList.add("nt-chain-fragment")
if(d!=null)a.appendChild(d)
a.appendChild(U.lV(!0,C.a.gJ(b)))}U.kE(a,b,"nt-block",c)
t=C.a.gaD(b).fy
if(t==null?!0:!t)a.appendChild(U.lV(!1,C.a.gaD(b)))
else a.appendChild(U.ls(!1,C.a.gaD(b)))},
pS:function(a,b){var t,s,r,q,p=u.Y
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
return J.lh(p,s[0].d)},
d0:function(a){var t=a.Z()
if(t==null)t=""
return a.aH()?'"'+t+'"':t},
d1:function(a){var t,s,r,q,p=a.d
if(p!=null){for(t=a.e,s=0;s<t.length;++s){r="{"+s+"}"
if(s>=t.length)return H.o(t,s)
q=U.d1(t[s])
if(typeof q!="string")H.D(H.bb(q))
p=H.l8(p,r,q)}return p}else{t=a.e
r=t.length
if(r===1){r="("+H.a(a.b)+" "
if(0>=t.length)return H.o(t,0)
return r+H.a(U.d1(t[0]))+")"}else if(r===2){if(0>=r)return H.o(t,0)
r="("+H.a(U.d1(t[0]))+" "+H.a(a.b)+" "
if(1>=t.length)return H.o(t,1)
return r+H.a(U.d1(t[1]))+")"}else return a.b}},
lC:function(a,b){var t
$.eA=a.id.c
$.lz=b.d.E(0,U.d8(b.a))
t=a.go
$.ew=t==="child"||t==="anywhere"
$.aO=!1},
d8:function(a){var t,s,r,q=J.W(a)
if(a.offsetParent==null){q=q.gaV(a)
return new P.J(q.a,q.b,q.$ti.i("J<1>"))}else{q=q.gaV(a)
t=q.$ti.i("J<1>")
s=t.a(U.d8(a.offsetParent))
r=s.a
if(typeof r!=="number")return H.a0(r)
s=s.b
if(typeof s!=="number")return H.a0(s)
return new P.J(q.a+r,q.b+s,t)}},
lK:function(a,b){var t=new U.af(a,"num",H.h([],u.U))
t.ep(a,b)
return t},
lV:function(a,b){var t,s,r=document.createElement("div")
r.classList.add("nt-notch")
t=b.ah()
r.classList.add(t)
U.hg(b,r)
if(a)r.classList.add("nt-notch-top")
else r.classList.add("nt-notch-bottom")
s=t+"-color"
C.a.t(H.h(["filler","left","middle","right"],u.s),new U.iI(s,a,b,r))
U.kG(b,r,new U.iJ(b))
return r},
lW:function(a,b){var t,s,r,q,p=document,o=p.createElement("div")
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
cc:function(a){var t=new U.ep()
t.b=a.b
t.c=a.c
return t},
mt:function(a,b,c,d){U.pt(a,new U.kg(b),c,d)},
pt:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k="version",j="blockStyles",i="variables",h="expressions",g=H.q(d.w(k)?d.h(0,k):0)
if(typeof g!=="number")return g.L()
if(g>5)H.D("Somehow the given model version ("+g+") is greater than the supported NetTango version (5).")
if(g<1)U.oH(d)
if(g<2)U.kO(d,U.mQ(),U.mQ())
if(g<3)U.oN(d)
if(g<4){U.oO(d)
U.je(d,U.mR(),U.mR())}if(g<5){U.je(d,U.mT(),U.mT())
U.je(d,U.mS(),U.mS())
U.je(d,U.mU(),U.mU())}d.j(0,k,5)
q=new U.hx(b,c)
switch(a){case"NetLogo":q.b=new U.eG("","end","[","]")
break
default:q.b=new U.eG("","","","")
break}t=q
try{if($.aB.I(c))$.aB.h(0,c).r2.fK()
if(!J.bd(d.h(0,k),5))H.D("The supported NetTango version is 5, but the given definition version was "+H.a(d.h(0,k))+".")
p=new U.a4(H.h(["version","height","width","blocks","program","chainOpen","chainClose","blockStyles","variables","expressions"],u.s))
o=new U.bQ(p,5,c,t,H.h([],u.cM),[],H.h([],u.ga),600,600,450)
n="#"+H.a(c)
n=u.d.a(document.querySelector(n))
o.d=n
if(n==null)H.D("No container element with ID "+H.a(c)+" found.");(n&&C.b).G(n,"")
n.classList.add("nt-container")
m=new U.d7(c,!0)
o.k4=m
o.r1=new U.d7(c,!1)
m=o.r2=Z.ci(n,m)
m.gap(m).u(o.gfF())
o.go=$.lb()
o.id=$.la()
o.k1=$.l9()
m=o.d.style
n=H.a(o.fr)+"px"
m.minHeight=n
n=o.d.style
m=H.a(o.fy)+"px"
n.minWidth=m
n=o.d.style
m=H.a(o.fy)+"px"
n.maxWidth=m
o.db=new U.eq(o,H.h([],u.dk))
p.b=d
p=H.q(H.cO(d.h(0,"height"))?d.h(0,"height"):600)
o.fr=p
n=o.d.style
p=H.a(p)+"px"
n.minHeight=p
p=H.q(H.cO(d.h(0,"width"))?d.h(0,"width"):450)
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
if(d.w(j)){p=u.b
o.go=U.l7(p.a(J.bp(d.h(0,j),"starterBlockStyle")),"#bb5555")
o.id=U.l7(p.a(J.bp(d.h(0,j),"containerBlockStyle")),"#8899aa")
o.k1=U.l7(p.a(J.bp(d.h(0,j),"commandBlockStyle")),"#9977aa")}if(d.h(0,"blocks") instanceof P.u)U.qm(o,u.A.a(d.h(0,"blocks")))
if(d.h(0,i) instanceof P.u)o.dx=u.j.a(d.h(0,i))
if(d.h(0,h) instanceof P.u)U.ql(o,u.A.a(d.h(0,h)))
if(d.h(0,"program") instanceof P.Q)U.qn(o,u.b.a(d.h(0,"program")))
s=o
$.aB.j(0,c,s)
s.fM()}catch(l){p=H.L(l)
if(p instanceof P.de){r=p
throw H.b(P.df("There was an error initializing the workspace with the given NetTango model JSON.",r))}else throw l}},
o8:function(a,b,c,d){H.r(a)
H.r(b)
H.r(c)
u.L.a(d)
if($.aB.h(0,b) instanceof U.bQ)C.a.sk($.aB.h(0,b).ch,0)
U.mt(a,d,b,P.ak(C.i.c4(0,c,null)))},
o7:function(a,b,c){var t,s,r,q,p,o
H.r(a)
H.r(b)
u.L.a(c)
t=C.i.c4(0,b,null)
s=u.f
if(s.b(t))for(r=J.y(t.gK()),q=u.b,p=u.R;r.m();){o=H.r(r.gp())
if($.aB.h(0,o) instanceof U.bQ)C.a.sk($.aB.h(0,o).ch,0)
t=C.i.c4(0,b,null)
if(!s.b(t)&&!p.b(t))H.D(P.b2("object must be a Map or Iterable"))
U.mt(a,c,o,q.a(P.bG(P.dk(t))))}},
o5:function(a,b){var t
H.r(a)
u.L.a(b)
if($.aB.I(a)){t=$.aB
if(b!=null){t=t.h(0,a)
return t.y.dI(t,!0,new U.iw(b))}else{t=t.h(0,a)
return t.y.dI(t,!0,null)}}return null},
o6:function(a,b,c){H.r(a)
H.q(b)
H.q(c)
if(!$.aB.I(a))throw H.b(P.bV("Unknown container ID: "+H.a(a)))
return U.d0($.aB.h(0,a).a3(b).e9(0,c))},
oa:function(a){var t
H.r(a)
if($.aB.I(a)){t=U.mI($.aB.h(0,a))
return H.r($.eg().h(0,"JSON").S("stringify",H.h([t],u.v)))}else return"{}"},
o9:function(){var t,s,r,q=u.z,p=P.bY(q,q)
for(q=$.aB,q=new H.ar(q,H.i(q).i("ar<1>")),q=q.gA(q),t=u.v;q.m();){s=q.d
r=U.mI($.aB.h(0,s))
p.j(0,s,$.eg().h(0,"JSON").S("stringify",H.h([r],t)))}return C.i.fP(C.i,null)},
mP:function(){var t=$.eg(),s=u.N
t.j(0,"NetTango_blockPlacementOptions",P.ak(P.a5(["starter","starter","child","child","anywhere","anywhere"],s,s)))
t.j(0,"NetTango_selectQuoteOptions",P.ak(P.a5(["always","always-quote","never","never-quote","smart","smart-quote"],s,s)))
t.j(0,"NetTango_InitWorkspace",U.qe())
t.j(0,"NetTango_InitAllWorkspaces",U.qd())
t.j(0,"NetTango_ExportCode",U.qb())
t.j(0,"NetTango_FormatAttributeValue",U.qc())
t.j(0,"NetTango_Save",U.qg())
t.j(0,"NetTango_SaveAll",U.qf())},
qm:function(a,b){var t,s,r,q,p,o,n,m
for(t=H.i(b).i("N<k.E>"),s=new H.N(b,b.gk(b),t),r=u.b;s.m();){q=H.q(r.a(s.d).h(0,"id"))
if(q!=null&&q>a.cx){if(typeof q!=="number")return q.v()
a.cx=q+1}}for(t=new H.N(b,b.gk(b),t);t.m();){p=r.a(t.d)
o=U.n3(a,p)
if(a.db.bz(o.b)!=null){o.b=null
o=o.bg(0,!0)
p.j(0,"id",o.b)}n=U.qt(p.h(0,"limit"),-1)
s=a.db
m=s.bz(o.b)
if(m!=null)H.D(P.df("Cannot add a block with the same ID as an existing block\n  Adding: ("+H.a(o.b)+": "+H.a(o.d)+")\n  Existing: ("+H.a(m.b)+": "+H.a(m.d)+")",null))
C.a.l(s.b,new U.aR(o,s.a,n))}},
n3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i=null,h="clauses",g="children",f="properties",e=b.h(0,"action"),d=e==null?"":J.z(e),c=U.lp(a,H.q(b.h(0,"id")),d,!0)
c.a.b=b
b.j(0,"id",c.b)
if(b.h(0,h) instanceof P.u){c.sfB(H.h([],u.cA))
e=u.s
t=u.u
s=u.b
r=u.A
q=0
while(!0){p=H.kb(J.ae(b.h(0,h)))
if(typeof p!=="number")return H.a0(p)
if(!(q<p))break
p=s.a(J.bp(b.h(0,h),q))
o=p.h(0,"open")
n=o==null?i:J.z(o)
o=p.h(0,"close")
m=o==null?i:J.z(o)
o=p.h(0,"action")
d=o==null?i:J.z(o)
o=new U.a4(H.h(["children","action","open","close"],e))
l=new U.aM(o,c,q,d,n,m,H.h([],t))
o.b=p
if(p.h(0,g) instanceof P.u)l.sc2(U.qj(a,r.a(p.h(0,g))))
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
c.fx=U.kx(b.h(0,"required"),c.fx)
c.fy=U.kx(b.h(0,"isTerminal"),c.fy)
e=b.h(0,"placement")
t=c.go
c.go=e==null?t:J.z(e)
if(b.h(0,"params") instanceof P.u)for(e=J.y(u.R.a(b.h(0,"params"))),t=c.z,s=u.b;e.m();){k=U.n_(c,s.a(e.gp()))
t.j(0,k.b,k)}if(b.h(0,f) instanceof P.u){for(e=J.y(u.R.a(b.h(0,f))),t=c.Q,s=u.b;e.m();){j=U.n_(c,s.a(e.gp()))
t.j(0,j.b,j)}e=b.h(0,"propertiesDisplay")
c.ch=e==null?"shown":J.z(e)}return c},
qj:function(a,b){var t,s,r=H.h([],u.u)
for(t=new H.N(b,b.gk(b),H.i(b).i("N<k.E>")),s=u.b;t.m();)C.a.l(r,U.n3(a,s.a(t.d)))
return r},
n_:function(a,b){var t,s,r,q,p="values",o=H.q(b.h(0,"id")),n=b.h(0,"type")
switch(n==null?"num":J.z(n)){case"int":t=new U.dh(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
t.y=1
t.x=U.kx(b.h(0,"random"),null)
t.y=U.bL(b.h(0,"step"),t.y)
break
case"num":t=U.lL(a,o,"num")
break
case"bool":t=U.lL(a,o,"bool")
break
case"range":t=new U.ct(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
t.x=U.kx(b.h(0,"random"),!1)
t.y=U.bL(b.h(0,"step"),t.y)
t.db=U.bL(b.h(0,"min"),t.db)
t.dx=U.bL(b.h(0,"max"),t.dx)
break
case"select":n=H.h([],u.eD)
t=new U.cw("smart-quote",n,new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),o,a)
t.ax(a,o)
s=b.h(0,"quoteValues")
t.x=s==null?null:J.z(s)
if(b.h(0,p) instanceof P.u&&J.ns(J.ae(b.h(0,p)),0))for(s=J.y(u.R.a(b.h(0,p)));s.m();){r=s.gp()
q=J.ap(r)
C.a.l(n,new U.bj(H.r(q.h(r,"actual")),H.r(q.h(r,"display"))))}break
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
ql:function(a,b){var t,s,r,q,p,o,n,m,l,k,j="type",i="arguments"
if(b==null||b.gk(b)===0)return
for(t=new H.N(b,b.gk(b),H.i(b).i("N<k.E>")),s=a.dy,r=u.s,q=u.b,p=u.R;t.m();){o=q.a(t.d)
n=H.r(o.h(0,"name"))
m=H.r(o.h(0,j))
l=H.h([],r)
k=new U.dd(n,m,l)
if(n==null)H.D(P.kD("name"))
if(m==null)H.D(P.kD(j))
if(!C.a.F(H.h(["num","bool"],r),m))H.D(P.cV(m,j,"Expression definition type can only be 'num' or 'bool'."))
k.d=H.r(o.h(0,"format"))
if("arguments" in o.a&&o.h(0,i) instanceof P.u)for(n=J.y(p.a(o.h(0,i)));n.m();)C.a.l(l,H.r(n.gp()))
C.a.l(s,k)}},
qn:function(a,b){var t,s
if(!(b.h(0,"chains") instanceof P.u))return
for(t=J.y(u.R.a(b.h(0,"chains"))),s=u.b;t.m();)U.qk(a,s.a(t.gp()))},
qk:function(a,b){var t,s,r=new U.a4(H.h(["x","y","blocks"],u.s)),q=new U.aD(r,a,H.h([],u.u))
r.b=b
if(typeof b.h(0,"x")=="number"&&typeof b.h(0,"y")=="number"){q.d=J.c9(b.h(0,"x"))
q.e=J.c9(b.h(0,"y"))}C.a.l(a.ch,q)
if(!(b.h(0,"blocks") instanceof P.u))return
for(r=J.y(u.R.a(b.h(0,"blocks"))),t=u.b;r.m();){s=U.n0(a,t.a(r.gp()))
if(s!=null)C.a.l(q.a,s)}},
n0:function(a,b){var t,s,r,q,p,o,n,m,l,k="children",j=a.db.bz(H.q(b.h(0,"id")))
if(j==null){P.ef("No prototype block found for id: "+H.a(b.h(0,"id")))
t=a.db.b
s=H.C(t)
P.ef(new H.O(t,s.i("e(1)").a(new U.kw()),s.i("O<1,e>")))
return null}r=j.bg(0,!1)
r.a.b=b
t=b.h(0,"propertiesDisplay")
r.ch=t==null?"shown":J.z(t)
t=u.A
U.n1(r.z,t.a(b.h(0,"params")))
U.n1(r.Q,t.a(b.h(0,"properties")))
if(b.h(0,"clauses") instanceof P.u)for(t=u.R,s=J.y(t.a(b.h(0,"clauses"))),q=u.b,p=0;s.m();){o=q.a(s.gp())
if(p>=r.cy.length)break
if(!(o.h(0,k) instanceof P.u))continue
n=r.cy
if(p>=n.length)return H.o(n,p)
m=n[p]
m.c.b=o
for(n=J.y(t.a(o.h(0,k)));n.m();){l=U.n0(a,q.a(n.gp()))
if(l!=null)C.a.l(m.a,l)}++p}return r},
n1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i="value"
if(b==null)return
for(t=new H.N(b,b.gk(b),b.$ti.i("N<k.E>")),s=u.s,r=u.b,q=u.U;t.m();){p=r.a(t.d)
if(!("id" in p.a)||!a.I(p.h(0,"id")))continue
o=a.h(0,p.h(0,"id"))
o.a.b=p
if(p.h(0,i)==null)continue
if(C.a.F(H.h(["bool","num"],s),o.ga2(o))){if(!(o instanceof U.bW))throw H.b(P.bV("A non-expression attribute cannot have a type of 'num' or 'bool'."))
n=p.h(0,i)
m=o.c
l=o.f
if(n instanceof P.Q){n=m.id
m=r.a(p.h(0,i))
k=new U.bt(n)
k.c=new U.af(k,l,H.h([],q))
if(m!=null)n=!0
else n=!1
if(n)k.c=U.n2(k,l,m)
o.r=k}else{n=m.id
m=J.z(p.h(0,i))
k=new U.bt(n)
k.c=new U.af(k,l,H.h([],q))
j=new U.af(k,l,H.h([],q))
j.b=m
k.c=j
o.r=k}}else if(p.h(0,i) instanceof P.Q){n=p.h(0,"defaultValue")
o.au(n==null?"":J.z(n))}else{n=p.h(0,i)
o.au(n==null?"":J.z(n))}}},
n2:function(a,b,c){var t,s="children",r=H.h([],u.U),q=new U.af(a,b,r),p=c.h(0,"name")
q.b=p==null?"":J.z(p)
if(c.h(0,"format")!=null)q.d=H.r(c.h(0,"format"))
if(c.h(0,s) instanceof P.u)for(p=J.y(u.R.a(c.h(0,s))),t=u.b;p.m();)C.a.l(r,U.n2(a,b,t.a(p.gp())))
return q},
l7:function(a,b){var t,s,r="#ffffff"
if(a==null){t=new U.cZ("#9977aa",r,r)
t.a=b
return t}t=new U.cZ("#9977aa",r,r)
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
mI:function(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="blockStyles",a=u.N,a0=u.K,a1=P.ak(P.a5(["version",a2.b,"height",a2.fr,"width",a2.fy,"blocks",[],"program",P.a5(["chains",[]],a,u.j)],a,a0))
a2.a.aW(a1)
U.bK(a1,"chainOpen",a2.z,a)
U.bK(a1,"chainClose",a2.Q,a)
if(a2.go!=$.lb()||a2.id!=$.la()||a2.k1!=$.l9()){t=u.z
a1.j(0,b,P.ak(P.bY(t,t)))
J.kA(a1.h(0,b),"starterBlockStyle",U.l3(a2.go))
J.kA(a1.h(0,b),"containerBlockStyle",U.l3(a2.id))
J.kA(a1.h(0,b),"commandBlockStyle",U.l3(a2.k1))}for(t=a2.db.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=t[r]
p=q.e
if(p===-1)p=null
o=U.l2(q.a,p)
J.eh(a1.h(0,"blocks"),o)}t=a2.dx
if(t!=null&&J.li(t))a1.j(0,"variables",P.aY([],u.z))
t=a2.dy
s=t.length
if(s!==0){s=u.z
n=P.aY([],s)
a1.j(0,"expressions",n)
for(p=t.length,m=n.$ti.c,l=u.b,k=u.gB,r=0;r<t.length;t.length===p||(0,H.B)(t),++r){j=t[r]
i=P.a5(["name",j.a,"type",j.b],a,a)
h=l.a(P.bG(P.dk(i)))
i=j.c
if(i.length>0){g=[]
C.a.M(g,C.a.H(i,P.ku(),s))
h.j(0,"arguments",new P.u(g,k))}i=j.d
if(i!=null)h.j(0,"format",i)
n.S("push",[m.a(h)])}}f=J.bp(a1.h(0,"program"),"chains")
for(t=a2.ch,s=t.length,p=J.bc(f),m=u.b,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){e=t[r]
l=P.a5(["x",e.d,"y",e.e,"blocks",[]],a,a0)
d=m.a(P.bG(P.dk(l)))
e.c.aW(d)
for(l=e.a,k=l.length,c=0;c<l.length;l.length===k||(0,H.B)(l),++c){o=U.l2(l[c],null)
J.eh(d.h(0,"blocks"),o)}p.l(f,d)}return a1},
l3:function(a){var t=u.N
return P.ak(P.a5(["blockColor",a.a,"textColor",a.b,"borderColor",a.c,"fontWeight",a.d,"fontSize",a.e,"fontFace",a.f],t,t))},
l2:function(a,b){var t,s,r,q,p,o,n,m="push",l=P.ak(P.a5(["id",a.b,"action",a.d,"required",a.fx,"placement",a.go],u.N,u.K))
a.a.aW(l)
t=u.S
U.bK(l,"instanceId",a.c,t)
U.a8(l,"type",a.e)
U.a8(l,"format",a.f)
U.bK(l,"isTerminal",a.fy,u.y)
U.a8(l,"closeClauses",a.r)
U.a8(l,"closeStarter",a.x)
U.bK(l,"limit",b,t)
U.a8(l,"note",a.y)
U.a8(l,"blockColor",a.db)
U.a8(l,"textColor",a.dx)
U.a8(l,"borderColor",a.dy)
U.a8(l,"font",a.fr)
if(a.cy.length!==0){s=P.aY([],u.z)
l.j(0,"clauses",s)
for(t=a.cy,r=t.length,q=s.$ti.c,p=0;p<t.length;t.length===r||(0,H.B)(t),++p)s.S(m,[q.a(U.pU(t[p]))])}t=a.z
if(t.a!==0){o=P.aY([],u.z)
l.j(0,"params",o)
for(t=t.gar(t),r=H.i(t),r=new H.a6(J.y(t.a),t.b,r.i("@<1>").q(r.Q[1]).i("a6<1,2>")),t=o.$ti.c;r.m();)o.S(m,[t.a(U.mG(r.a))])}t=a.Q
if(t.a!==0){n=P.aY([],u.z)
l.j(0,"properties",n)
for(t=t.gar(t),r=H.i(t),r=new H.a6(J.y(t.a),t.b,r.i("@<1>").q(r.Q[1]).i("a6<1,2>")),t=n.$ti.c;r.m();)n.S(m,[t.a(U.mG(r.a))])
l.j(0,"propertiesDisplay",a.ch)}return l},
pU:function(a){var t,s,r,q,p,o=P.ak(P.a5(["children",[]],u.N,u.j))
a.c.aW(o)
U.a8(o,"action",a.f)
U.a8(o,"open",a.r)
U.a8(o,"close",a.x)
t=o.h(0,"children")
for(s=a.a,r=s.length,q=J.bc(t),p=0;p<s.length;s.length===r||(0,H.B)(s),++p)q.l(t,U.l2(s[p],null))
return o},
bK:function(a,b,c,d){if(c!=null)a.j(0,b,c)},
a8:function(a,b,c){if(c!=null&&c!=="")a.j(0,b,c)},
mG:function(a){var t,s,r,q,p,o,n,m,l="value",k="default",j=u.N,i=P.ak(P.a5(["id",a.b,"type",a.ga2(a)],j,u.K))
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
t.S("push",[p.a(q.a(P.bG(P.dk(m))))])}break
case"int":case"range":u.cU.a(a)
i.j(0,"step",a.y)
U.bK(i,"random",a.x,u.y)
j=u.di
U.bK(i,l,a.f,j)
U.bK(i,k,a.r,j)
if(a instanceof U.ct){i.j(0,"min",a.db)
i.j(0,"max",a.dx)}break
case"num":case"bool":u.gs.a(a)
U.a8(i,k,a.as())
j=a.r.c
if(j!=null&&j.b!=null)if(j.e.length===0)i.j(0,l,a.Z())
else{i.j(0,l,U.mH(j))
i.j(0,"expressionValue",a.Z())}break
default:throw H.b(P.bV("Unknown attribute type "+a.ga2(a)))}return i},
mH:function(a){var t,s,r,q="children",p=u.N,o=P.ak(P.a5(["name",a.b,"type",a.c],p,p))
U.bK(o,"format",a.d,p)
p=a.e
if(p.length!==0){o.j(0,q,P.aY([],u.z))
for(t=p.length,s=0;s<p.length;p.length===t||(0,H.B)(p),++s){r=p[s]
J.eh(o.h(0,q),U.mH(r))}}return o},
qt:function(a,b){var t,s
if(a==null)return b
else if(H.cO(a))return a
else if(typeof a=="string")try{t=P.q2(a)
return t}catch(s){if(u.g8.b(H.L(s)))return b
else throw s}return b},
bL:function(a,b){var t,s
if(a==null)return b
else if(typeof a=="number")return a
else if(typeof a=="string")try{t=P.mV(a,null)
return t}catch(s){if(u.g8.b(H.L(s)))return b
else throw s}return b},
kx:function(a,b){if(a==null)return b
else if(H.kh(a))return a
else if(typeof a=="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
oH:function(a){var t={},s=new H.a9(u.bT),r=new H.a9(u.aI)
t.a=0
U.kO(a,new U.j4(t,s,r),new U.j5(s,r))},
m4:function(a,b){var t={}
t.a=a
U.m6(b,new U.j3(t))
return t.a},
oG:function(a,b){var t,s
for(t=new H.N(b,b.gk(b),H.i(b).i("N<k.E>")),s=u.b;t.m();){s.a(t.d).j(0,"id",a)
if(typeof a!=="number")return a.v();++a}return a},
oF:function(a,b,c){var t,s
if(!c.w("action"))return
t=H.r(c.h(0,"action"))
if(a.I(t)){s=a.h(0,t)
c.j(0,"id",s)
U.m4(b.h(0,s),c)}},
oK:function(a){U.m6(a,U.q9())},
oI:function(a){var t="values"
if(!a.w(t)||!(a.h(0,t) instanceof P.u))return
a.j(0,t,P.aY(u.R.a(J.nD(a.h(0,t),new U.j6())),u.z))},
oJ:function(a){var t,s,r
a.toString
t=a.$ti
s=t.i("t(k.E)").a(new U.j7())
r=a.gA(a)
t=new H.c5(r,s,t.i("c5<k.E>"))
s=u.b
for(;t.m();)U.oI(s.a(r.gp()))},
oN:function(a){var t,s,r="program"
U.kO(a,new U.j9(),U.qa())
if(!a.w(r)||!(a.h(0,r) instanceof P.Q))return
t=u.b
s=t.a(a.h(0,r))
if(!s.w("chains")||!(s.h(0,"chains") instanceof P.u))return
U.oL(t.a(a.h(0,r)))},
oL:function(a){var t,s=u.A.a(a.h(0,"chains"))
s.toString
t=s.$ti
a.j(0,"chains",P.aY(new H.ag(s,t.i("t(k.E)").a(new U.j8()),t.i("ag<k.E>")),u.z))},
oM:function(a){if(typeof a.h(0,"x")=="number")a.j(0,"x",J.lg(a.h(0,"x"),10))
if(typeof a.h(0,"y")=="number")a.j(0,"y",J.lg(a.h(0,"y"),10))},
oO:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g="program",f="chains"
if(!a.w(g)||!(a.h(0,g) instanceof P.Q))return
t=u.b
s=t.a(a.h(0,g))
if(!s.w(f)||!(s.h(0,f) instanceof P.u))return
r=P.aY([],u.z)
for(q=J.y(u.R.a(s.h(0,f))),p=r.$ti.c,o=u.N,n=u.K,m=u.A;q.m();){l=m.a(q.gp())
if(!l.gN(l)){k=C.e.bt(0)
if(0===k){k=0>=l.gk(l)
if(k)H.D(P.ab(0,0,l.gk(l),null,null))}j=H.i(l).c.a(l.cC(0,0))
k=J.ap(j)
if(typeof k.h(j,"x")=="number"&&typeof k.h(j,"y")=="number"){i=J.c9(k.h(j,"x"))
h=J.c9(k.h(j,"y"))}else{i=0
h=0}}else{i=0
h=0}k=P.a5(["blocks",l,"x",i,"y",h],o,n)
r.S("push",[p.a(t.a(P.bG(P.dk(k))))])}s.j(0,f,r)},
oP:function(a){a.c5("x")
a.c5("y")},
oT:function(a){var t,s,r="params",q="properties"
if(a.w(r))if(a.h(0,r) instanceof P.u){t=u.A.a(a.h(0,r))
t.t(t,new U.jc())}if(a.w(q))if(a.h(0,q) instanceof P.u){s=u.A.a(a.h(0,q))
s.t(s,new U.jd())}},
m5:function(a){var t,s,r="values"
if(!a.w(r))return
if(!(a.h(0,r) instanceof P.u))return
t=u.A.a(a.h(0,r))
t.toString
s=t.$ti
if(!H.ac(new H.O(t,s.i("t(k.E)").a(new U.ja()),s.i("O<k.E,t>")).bo(0,new U.jb())))return
a.j(0,"quoteValues","never-quote")},
oR:function(a){var t="required",s="placement"
if(a.w(t)&&H.ac(H.cN(a.h(0,t))))a.j(0,s,"starter")
else a.j(0,s,"child")},
oS:function(a){var t,s,r,q="children",p="clauses"
if(a.w(q)){t=a.h(0,q)
a.c5(q)
s=u.z
r=P.ak(P.bY(s,s))
r.j(0,q,t)
if(a.w(p))if(a.h(0,p) instanceof P.u)J.lj(a.h(0,p),0,r)
else{P.ef("Found a block with clauses that was not an array?  Block ID: "+H.a(a.h(0,"id"))+".  Replacing value.")
a.j(0,p,P.aY([],s))
J.eh(a.h(0,p),r)}else{a.j(0,p,P.aY([],s))
J.eh(a.h(0,p),r)}}else if(a.w(p)&&a.h(0,p) instanceof P.u){r=P.ak(P.a5(["children",[]],u.N,u.j))
J.lj(a.h(0,p),0,r)}},
je:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j="blocks",i="program",h="chains",g="children"
if(!a.w(j)||!(a.h(0,j) instanceof P.u))return
for(t=u.R,s=J.y(t.a(a.h(0,j))),r=u.b;s.m();)b.$1(r.a(s.gp()))
if(!a.w(i)||!(a.h(0,i) instanceof P.Q))return
q=r.a(a.h(0,i))
if(!q.w(h)||!(q.h(0,h) instanceof P.u))return
for(s=J.y(t.a(q.h(0,h)));s.m();){p=r.a(s.gp())
if("blocks" in p.a&&p.h(0,j) instanceof P.u)for(o=J.y(t.a(p.h(0,j)));o.m();){n=r.a(o.gp())
c.$1(n)
m=n.a
if("children" in m&&n.h(0,g) instanceof P.u)for(l=J.y(t.a(n.h(0,g)));l.m();)c.$1(r.a(l.gp()))
if("clauses" in m&&n.h(0,"clauses") instanceof P.u)for(m=J.y(t.a(n.h(0,"clauses")));m.m();){k=r.a(m.gp())
if("children" in k.a&&k.h(0,g) instanceof P.u)for(l=J.y(t.a(k.h(0,g)));l.m();)c.$1(r.a(l.gp()))}}}},
kO:function(a,b,c){var t,s,r,q,p,o,n,m,l,k="blocks",j="children",i="program",h="chains"
if(!a.w(k)||!(a.h(0,k) instanceof P.u))return
for(t=u.R,s=J.y(t.a(a.h(0,k))),r=u.b;s.m();)b.$1(r.a(s.gp()))
for(s=J.y(t.a(a.h(0,k)));s.m();){q=r.a(s.gp())
p=q.a
if("children" in p&&q.h(0,j) instanceof P.u)for(o=J.y(t.a(q.h(0,j)));o.m();)c.$1(r.a(o.gp()))
if("clauses" in p&&q.h(0,"clauses") instanceof P.u)for(p=J.y(t.a(q.h(0,"clauses")));p.m();){n=r.a(p.gp())
if("children" in n.a&&n.h(0,j) instanceof P.u)for(o=J.y(t.a(n.h(0,j)));o.m();)c.$1(r.a(o.gp()))}}if(!a.w(i)||!(a.h(0,i) instanceof P.Q))return
m=r.a(a.h(0,i))
if(!m.w(h)||!(m.h(0,h) instanceof P.u))return
for(t=J.y(t.a(m.h(0,h))),s=u.A;t.m();){l=s.a(t.gp())
for(p=new H.N(l,l.gk(l),H.i(l).i("N<k.E>"));p.m();)c.$1(r.a(p.d))}},
m6:function(a,b){var t="params",s="properties"
if(a.w(t)&&a.h(0,t) instanceof P.u)b.$1(u.A.a(a.h(0,t)))
if(a.w(s)&&a.h(0,s) instanceof P.u)b.$1(u.A.a(a.h(0,s)))},
aL:function aL(){},
h7:function h7(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
bW:function bW(a,b,c){var _=this
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
dh:function dh(a,b,c){var _=this
_.x=_.r=_.f=null
_.y=1
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
c_:function c_(){},
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
bj:function bj(a,b){this.a=a
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
cY:function cY(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=""},
aq:function aq(a,b,c,d,e,f,g,h){var _=this
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
eG:function eG(a,b,c,d){var _=this
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
d7:function d7(a,b){this.a=a
this.b=b},
eB:function eB(){var _=this
_.d=_.c=_.b=_.a=_.e=null},
dd:function dd(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
af:function af(a,b,c){var _=this
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
bt:function bt(a){this.a=a
this.c=this.b=null},
a4:function a4(a){this.a=a
this.b=null},
eq:function eq(a,b){this.a=a
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
c2:function c2(){},
ep:function ep(){this.c=this.b=null},
bq:function bq(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eR:function eR(a){this.b=a},
eS:function eS(a,b,c){this.b=a
this.c=b
this.d=c},
aR:function aR(a,b,c){var _=this
_.a=a
_.d=b
_.e=c
_.y=_.x=_.r=_.f=null},
fe:function fe(a,b){this.a=null
this.d=a
this.e=b},
bQ:function bQ(a,b,c,d,e,f,g,h,i,j){var _=this
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
kg:function kg(a){this.a=a},
iw:function iw(a){this.a=a},
kw:function kw(){},
j4:function j4(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(a,b){this.a=a
this.b=b},
j3:function j3(a){this.a=a},
j6:function j6(){},
j7:function j7(){},
j9:function j9(){},
j8:function j8(){},
jc:function jc(){},
jd:function jd(){},
ja:function ja(){},
jb:function jb(){}}
var w=[C,H,J,P,W,Z,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kK.prototype={}
J.aj.prototype={
R:function(a,b){return a===b},
gB:function(a){return H.c1(a)},
n:function(a){return"Instance of '"+H.a(H.iP(a))+"'"},
bn:function(a,b){u.m.a(b)
throw H.b(P.lU(a,b.gdJ(),b.gdR(),b.gdK()))}}
J.eI.prototype={
n:function(a){return String(a)},
gB:function(a){return a?519018:218159},
$it:1}
J.dj.prototype={
R:function(a,b){return null==b},
n:function(a){return"null"},
gB:function(a){return 0},
bn:function(a,b){return this.eg(a,u.m.a(b))},
$iw:1}
J.bw.prototype={
gB:function(a){return 0},
n:function(a){return String(a)}}
J.f3.prototype={}
J.bz.prototype={}
J.b5.prototype={
n:function(a){var t=a[$.kz()]
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
return new H.O(a,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("O<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
aZ:function(a,b){return H.am(a,b,null,H.C(a).c)},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(H.cl())},
gaD:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.b(H.cl())},
V:function(a,b,c,d,e){var t,s,r,q,p=H.C(a)
p.i("d<1>").a(d)
if(!!a.immutable$list)H.D(P.x("setRange"))
P.m_(b,c,a.length)
t=c-b
if(t===0)return
P.aZ(e,"skipCount")
if(u.j.b(d)){p.i("v<1>").a(d)
s=e
r=d}else{r=J.nI(d,e).ag(0,!1)
s=0}p=J.ap(r)
if(s+t>p.gk(r))throw H.b(H.lN())
if(s<b)for(q=t-1;q>=0;--q)a[b+q]=p.h(r,s+q)
else for(q=0;q<t;++q)a[b+q]=p.h(r,s+q)},
ec:function(a,b,c,d){return this.V(a,b,c,d,0)},
dn:function(a,b){var t,s
H.C(a).i("t(1)").a(b)
t=a.length
for(s=0;s<t;++s){if(H.ac(b.$1(a[s])))return!0
if(a.length!==t)throw H.b(P.aN(a))}return!1},
cB:function(a,b){var t=H.C(a)
t.i("e(1,1)").a(b)
if(!!a.immutable$list)H.D(P.x("sort"))
H.ox(a,b,t.c)},
F:function(a,b){var t
for(t=0;t<a.length;++t)if(J.bd(a[t],b))return!0
return!1},
gN:function(a){return a.length===0},
gcj:function(a){return a.length!==0},
n:function(a){return P.iv(a,"[","]")},
ag:function(a,b){var t=H.h(a.slice(0),H.C(a))
return t},
aq:function(a){return this.ag(a,!0)},
gA:function(a){return new J.aC(a,a.length,H.C(a).i("aC<1>"))},
gB:function(a){return H.c1(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.D(P.x("set length"))
if(b<0)throw H.b(P.ab(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.q(b)
if(!H.cO(b))throw H.b(H.bH(a,b))
if(b>=a.length||b<0)throw H.b(H.bH(a,b))
return a[b]},
j:function(a,b,c){H.q(b)
H.C(a).c.a(c)
if(!!a.immutable$list)H.D(P.x("indexed set"))
if(b>=a.length||b<0)throw H.b(H.bH(a,b))
a[b]=c},
$in:1,
$id:1,
$iv:1}
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
$iS:1}
J.bv.prototype={
dz:function(a,b){var t
H.kb(b)
if(typeof b!="number")throw H.b(H.bb(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gbk(b)
if(this.gbk(a)===t)return 0
if(this.gbk(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbk:function(a){return a===0?1/a<0:a<0},
bt:function(a){var t
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){t=a<0?Math.ceil(a):Math.floor(a)
return t+0}throw H.b(P.x(""+a+".toInt()"))},
fz:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.b(P.x(""+a+".ceil()"))},
c8:function(a){var t,s
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
gB:function(a){var t,s,r,q,p=a|0
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
bZ:function(a,b){var t
if(a>0)t=this.fj(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
fj:function(a,b){return b>31?0:a>>>b},
L:function(a,b){if(typeof b!="number")throw H.b(H.bb(b))
return a>b},
$iai:1,
$iY:1}
J.di.prototype={$ie:1}
J.eJ.prototype={}
J.bh.prototype={
dw:function(a,b){if(b<0)throw H.b(H.bH(a,b))
if(b>=a.length)H.D(H.bH(a,b))
return a.charCodeAt(b)},
b2:function(a,b){if(b>=a.length)throw H.b(H.bH(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!="string")throw H.b(P.cV(b,null,null))
return a+b},
fR:function(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.ef(a,s-t)},
dV:function(a,b,c){P.kM(0,0,a.length,"startIndex")
return H.qq(a,b,c,0)},
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
if(this.b2(q,0)===133){t=J.kJ(q,1)
if(t===p)return""}else t=0
s=p-1
r=this.dw(q,s)===133?J.ob(q,s):p
if(t===0&&r===p)return q
return q.substring(t,r)},
e0:function(a){var t,s
if(typeof a.trimLeft!="undefined"){t=a.trimLeft()
if(t.length===0)return t
s=this.b2(t,0)===133?J.kJ(t,1):0}else{s=J.kJ(a,0)
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
return H.qo(a,b,c)},
dz:function(a,b){var t
H.r(b)
if(typeof b!="string")throw H.b(H.bb(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
n:function(a){return a},
gB:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>=a.length||!1)throw H.b(H.bH(a,b))
return a[b]},
$if2:1,
$ic:1}
H.n.prototype={}
H.aa.prototype={
gA:function(a){var t=this
return new H.N(t,t.gk(t),H.i(t).i("N<aa.E>"))},
gN:function(a){return this.gk(this)===0},
gaD:function(a){var t=this
if(t.gk(t)===0)throw H.b(H.cl())
return t.C(0,t.gk(t)-1)},
bw:function(a,b){return this.ei(0,H.i(this).i("t(aa.E)").a(b))},
H:function(a,b,c){var t=H.i(this)
return new H.O(this,t.q(c).i("1(aa.E)").a(b),t.i("@<aa.E>").q(c).i("O<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
bo:function(a,b){var t,s,r,q=this
H.i(q).i("aa.E(aa.E,aa.E)").a(b)
t=q.gk(q)
if(t===0)throw H.b(H.cl())
s=q.C(0,0)
for(r=1;r<t;++r){s=b.$2(s,q.C(0,r))
if(t!==q.gk(q))throw H.b(P.aN(q))}return s}}
H.dA.prototype={
geJ:function(){var t=J.ae(this.a),s=this.c
if(s==null||s>t)return t
return s},
gfk:function(){var t=J.ae(this.a),s=this.b
if(typeof s!=="number")return s.L()
if(s>t)return t
return s},
gk:function(a){var t,s=J.ae(this.a),r=this.b
if(typeof r!=="number")return r.hp()
if(r>=s)return 0
t=this.c
if(t==null||t>=s)return s-r
if(typeof t!=="number")return t.E()
return t-r},
C:function(a,b){var t,s=this,r=s.gfk()
if(typeof r!=="number")return r.v()
t=r+b
if(b>=0){r=s.geJ()
if(typeof r!=="number")return H.a0(r)
r=t>=r}else r=!0
if(r)throw H.b(P.bg(b,s,"index",null,null))
return J.aW(s.a,t)},
aZ:function(a,b){var t,s,r=this
P.aZ(b,"count")
t=r.b
if(typeof t!=="number")return t.v()
s=t+b
t=r.c
if(t!=null&&s>=t)return new H.bU(r.$ti.i("bU<1>"))
return H.am(r.a,s,t,r.$ti.c)},
hi:function(a,b){var t,s,r,q=this
P.aZ(b,"count")
t=q.c
s=q.b
if(t==null){if(typeof s!=="number")return s.v()
return H.am(q.a,s,s+b,q.$ti.c)}else{if(typeof s!=="number")return s.v()
r=s+b
if(t<r)return q
return H.am(q.a,s,r,q.$ti.c)}},
ag:function(a,b){var t,s,r,q,p,o=this,n=o.b,m=o.a,l=J.ap(m),k=l.gk(m),j=o.c
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
if(l.gk(m)<k)throw H.b(P.aN(o))}return r},
aq:function(a){return this.ag(a,!0)}}
H.N.prototype={
gp:function(){return this.d},
m:function(){var t,s=this,r=s.a,q=J.ap(r),p=q.gk(r)
if(s.b!==p)throw H.b(P.aN(r))
t=s.c
if(t>=p){s.saK(null)
return!1}s.saK(q.C(r,t));++s.c
return!0},
saK:function(a){this.d=this.$ti.c.a(a)},
$iS:1}
H.aG.prototype={
gA:function(a){var t=H.i(this)
return new H.a6(J.y(this.a),this.b,t.i("@<1>").q(t.Q[1]).i("a6<1,2>"))},
gk:function(a){return J.ae(this.a)},
C:function(a,b){return this.b.$1(J.aW(this.a,b))}}
H.aX.prototype={$in:1}
H.a6.prototype={
m:function(){var t=this,s=t.b
if(s.m()){t.saK(t.c.$1(s.gp()))
return!0}t.saK(null)
return!1},
gp:function(){return this.a},
saK:function(a){this.a=this.$ti.Q[1].a(a)}}
H.O.prototype={
gk:function(a){return J.ae(this.a)},
C:function(a,b){return this.b.$1(J.aW(this.a,b))}}
H.ag.prototype={
gA:function(a){return new H.c5(J.y(this.a),this.b,this.$ti.i("c5<1>"))},
H:function(a,b,c){var t=this.$ti
return new H.aG(this,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("aG<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)}}
H.c5.prototype={
m:function(){var t,s
for(t=this.a,s=this.b;t.m();)if(H.ac(s.$1(t.gp())))return!0
return!1},
gp:function(){return this.a.gp()}}
H.c4.prototype={
gA:function(a){return new H.dC(J.y(this.a),this.b,H.i(this).i("dC<1>"))}}
H.da.prototype={
gk:function(a){var t=J.ae(this.a),s=this.b
if(t>s)return s
return t},
$in:1}
H.dC.prototype={
m:function(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gp:function(){if(this.b<0)return null
return this.a.gp()}}
H.c3.prototype={
gA:function(a){return new H.dy(J.y(this.a),this.b,H.i(this).i("dy<1>"))}}
H.d9.prototype={
gk:function(a){var t=J.ae(this.a)-this.b
if(t>=0)return t
return 0},
$in:1}
H.dy.prototype={
m:function(){var t,s
for(t=this.a,s=0;s<this.b;++s)t.m()
this.b=0
return t.m()},
gp:function(){return this.a.gp()}}
H.bU.prototype={
gA:function(a){return C.x},
gk:function(a){return 0},
C:function(a,b){throw H.b(P.ab(b,0,0,"index",null))},
H:function(a,b,c){this.$ti.q(c).i("1(2)").a(b)
return new H.bU(c.i("bU<0>"))},
T:function(a,b){return this.H(a,b,u.z)},
ag:function(a,b){var t=new Array(0)
t.fixed$length=Array
t=H.h(t,this.$ti.i("G<1>"))
return t}}
H.dc.prototype={
m:function(){return!1},
gp:function(){return null},
$iS:1}
H.R.prototype={
sk:function(a,b){throw H.b(P.x("Cannot change the length of a fixed-length list"))},
l:function(a,b){H.X(a).i("R.E").a(b)
throw H.b(P.x("Cannot add to a fixed-length list"))},
af:function(a,b,c){H.X(a).i("R.E").a(c)
throw H.b(P.x("Cannot add to a fixed-length list"))}}
H.cA.prototype={
gB:function(a){var t=this._hashCode
if(t!=null)return t
t=536870911&664597*J.ad(this.a)
this._hashCode=t
return t},
n:function(a){return'Symbol("'+H.a(this.a)+'")'},
R:function(a,b){if(b==null)return!1
return b instanceof H.cA&&this.a==b.a},
$ib0:1}
H.d3.prototype={}
H.d2.prototype={
gN:function(a){return this.gk(this)===0},
n:function(a){return P.iC(this)},
j:function(a,b,c){var t=H.i(this)
t.c.a(b)
t.Q[1].a(c)
return H.nV()},
aE:function(a,b,c,d){var t=P.bY(c,d)
this.t(0,new H.hK(this,H.i(this).q(c).q(d).i("cn<1,2>(3,4)").a(b),t))
return t},
T:function(a,b){return this.aE(a,b,u.z,u.z)},
$ial:1}
H.hK.prototype={
$2:function(a,b){var t=H.i(this.a),s=this.b.$2(t.c.a(a),t.Q[1].a(b))
this.c.j(0,C.q.gh_(s),s.ghl(s))},
$S:function(){return H.i(this.a).i("w(1,2)")}}
H.d4.prototype={
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
gK:function(){return new H.dE(this,H.i(this).i("dE<1>"))}}
H.dE.prototype={
gA:function(a){var t=this.a.c
return new J.aC(t,t.length,H.C(t).i("aC<1>"))},
gk:function(a){return this.a.c.length}}
H.eK.prototype={
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
p.j(0,new H.cA(n),r[m])}return new H.d3(p,u.gF)},
$ilM:1}
H.iO.prototype={
$2:function(a,b){var t
H.r(a)
t=this.a
t.b=t.b+"$"+H.a(a)
C.a.l(this.b,a)
C.a.l(this.c,b);++t.a},
$S:46}
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
H.f_.prototype={
n:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.a(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.eM.prototype={
n:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.a(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.a(s.a)+")"
return r+q+"' on '"+t+"' ("+H.a(s.a)+")"}}
H.fh.prototype={
n:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.ky.prototype={
$1:function(a){if(u.bU.b(a))if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.e0.prototype={
n:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iau:1}
H.bP.prototype={
n:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.n8(s==null?"unknown":s)+"'"},
$ib4:1,
gho:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fd.prototype={}
H.f6.prototype={
n:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.n8(t)+"'"}}
H.cd.prototype={
R:function(a,b){var t=this
if(b==null)return!1
if(t===b)return!0
if(!(b instanceof H.cd))return!1
return t.a===b.a&&t.b===b.b&&t.c===b.c},
gB:function(a){var t,s=this.c
if(s==null)t=H.c1(this.a)
else t=typeof s!=="object"?J.ad(s):H.c1(s)
return(t^H.c1(this.b))>>>0},
n:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.a(H.iP(t))+"'")}}
H.f4.prototype={
n:function(a){return"RuntimeError: "+H.a(this.a)}}
H.fj.prototype={
n:function(a){return"Assertion failed: "+P.bs(this.a)}}
H.a9.prototype={
gk:function(a){return this.a},
gN:function(a){return this.a===0},
gK:function(){return new H.ar(this,H.i(this).i("ar<1>"))},
gar:function(a){var t=H.i(this)
return H.lT(new H.ar(this,t.i("ar<1>")),new H.iy(this),t.c,t.Q[1])},
I:function(a){var t,s,r=this
if(typeof a=="string"){t=r.b
if(t==null)return!1
return r.cS(t,a)}else if(typeof a=="number"&&(a&0x3ffffff)===a){s=r.c
if(s==null)return!1
return r.cS(s,a)}else return r.fV(a)},
fV:function(a){var t=this.d
if(t==null)return!1
return this.bj(this.b4(t,J.ad(a)&0x3ffffff),a)>=0},
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
t=this.b4(r,J.ad(a)&0x3ffffff)
s=this.bj(t,a)
if(s<0)return null
return t[s].b},
j:function(a,b,c){var t,s,r,q,p,o,n=this,m=H.i(n)
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"){t=n.b
n.cJ(t==null?n.b=n.bT():t,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){s=n.c
n.cJ(s==null?n.c=n.bT():s,b,c)}else{r=n.d
if(r==null)r=n.d=n.bT()
q=J.ad(b)&0x3ffffff
p=n.b4(r,q)
if(p==null)n.bY(r,q,[n.bU(b,c)])
else{o=n.bj(p,b)
if(o>=0)p[o].b=c
else p.push(n.bU(b,c))}}},
a8:function(a,b){var t=this.fX(b)
return t},
fX:function(a){var t,s,r,q,p=this,o=p.d
if(o==null)return null
t=J.ad(a)&0x3ffffff
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
t.bS()}},
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
if(t==null)s.bY(a,b,s.bU(b,c))
else t.b=c},
bS:function(){this.r=this.r+1&67108863},
bU:function(a,b){var t,s=this,r=H.i(s),q=new H.iB(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{t=s.f
q.d=t
s.f=t.c=q}++s.a
s.bS()
return q},
ev:function(a){var t=this,s=a.d,r=a.c
if(s==null)t.e=r
else s.c=r
if(r==null)t.f=s
else r.d=s;--t.a
t.bS()},
bj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bd(a[s].a,b))return s
return-1},
n:function(a){return P.iC(this)},
b5:function(a,b){return a[b]},
b4:function(a,b){return a[b]},
bY:function(a,b,c){a[b]=c},
cV:function(a,b){delete a[b]},
cS:function(a,b){return this.b5(a,b)!=null},
bT:function(){var t="<non-identifier-key>",s=Object.create(null)
this.bY(s,t,s)
this.cV(s,t)
return s},
$ilR:1}
H.iy.prototype={
$1:function(a){var t=this.a
return t.h(0,H.i(t).c.a(a))},
$S:function(){return H.i(this.a).i("2(1)")}}
H.iB.prototype={}
H.ar.prototype={
gk:function(a){return this.a.a},
gN:function(a){return this.a.a===0},
gA:function(a){var t=this.a,s=new H.dn(t,t.r,this.$ti.i("dn<1>"))
s.c=t.e
return s}}
H.dn.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.aN(s))
else{s=t.c
if(s==null){t.scI(null)
return!1}else{t.scI(s.a)
t.c=t.c.c
return!0}}},
scI:function(a){this.d=this.$ti.c.a(a)},
$iS:1}
H.kp.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.kq.prototype={
$2:function(a,b){return this.a(a,b)},
$S:38}
H.kr.prototype={
$1:function(a){return this.a(H.r(a))},
$S:52}
H.eL.prototype={
n:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$if2:1}
H.f9.prototype={
h:function(a,b){H.q(b)
if(b!==0)H.D(P.cu(b,null))
return this.c},
$ids:1}
H.k_.prototype={
m:function(){var t,s,r=this,q=r.c,p=r.b,o=p.length,n=r.a,m=n.length
if(q+o>m){r.d=null
return!1}t=n.indexOf(p,q)
if(t<0){r.c=m+1
r.d=null
return!1}s=t+o
r.d=new H.f9(t,p)
r.c=s===r.c?s+1:s
return!0},
gp:function(){return this.d},
$iS:1}
H.bZ.prototype={
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
H.bx.prototype={
h:function(a,b){H.q(b)
H.bo(b,a,a.length)
return a[b]},
j:function(a,b,c){H.q(b)
H.pl(c)
H.bo(b,a,a.length)
a[b]=c},
V:function(a,b,c,d,e){u.bM.a(d)
if(u.d4.b(d)){this.dh(a,b,c,d,e)
return}this.cE(a,b,c,d,e)},
$in:1,
$id:1,
$iv:1}
H.aH.prototype={
j:function(a,b,c){H.q(b)
H.q(c)
H.bo(b,a,a.length)
a[b]=c},
V:function(a,b,c,d,e){u.gS.a(d)
if(u.bd.b(d)){this.dh(a,b,c,d,e)
return}this.cE(a,b,c,d,e)},
$in:1,
$id:1,
$iv:1}
H.eT.prototype={
h:function(a,b){H.q(b)
H.bo(b,a,a.length)
return a[b]}}
H.eU.prototype={
h:function(a,b){H.q(b)
H.bo(b,a,a.length)
return a[b]}}
H.eV.prototype={
h:function(a,b){H.q(b)
H.bo(b,a,a.length)
return a[b]}}
H.eW.prototype={
h:function(a,b){H.q(b)
H.bo(b,a,a.length)
return a[b]}}
H.eX.prototype={
h:function(a,b){H.q(b)
H.bo(b,a,a.length)
return a[b]}}
H.du.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
H.bo(b,a,a.length)
return a[b]}}
H.eY.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
H.bo(b,a,a.length)
return a[b]}}
H.dT.prototype={}
H.dU.prototype={}
H.dV.prototype={}
H.dW.prototype={}
H.aQ.prototype={
i:function(a){return H.fT(v.typeUniverse,this,a)},
q:function(a){return H.pj(v.typeUniverse,this,a)}}
H.fx.prototype={}
H.fv.prototype={
n:function(a){return this.a}}
H.e5.prototype={}
P.ji.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:11}
P.jh.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:39}
P.jj.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:1}
P.jk.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:1}
P.k3.prototype={
eu:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cT(new P.k4(this,b),0),a)
else throw H.b(P.x("`setTimeout()` not found."))}}
P.k4.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.ah.prototype={}
P.b9.prototype={
ac:function(){},
ad:function(){},
saQ:function(a){this.dy=this.$ti.a(a)},
sb9:function(a){this.fr=this.$ti.a(a)}}
P.bB.prototype={
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
c_:function(a,b,c,d){var t,s,r,q,p,o=this,n=H.i(o)
n.i("~(1)").a(a)
u.M.a(c)
if((o.c&4)!==0){if(c==null)c=P.mE()
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
if(o.d==o.e)P.mA(o.a)
return q},
f9:function(a){var t=this,s=H.i(t)
a=s.i("b9<1>").a(s.i("a2<1>").a(a))
if(a.dy===a)return null
s=a.dx
if((s&2)!==0)a.dx=s|4
else{t.de(a)
if((t.c&2)===0&&t.d==null)t.bI()}return null},
b1:function(){if((this.c&4)!==0)return new P.b6("Cannot add new events after calling close")
return new P.b6("Cannot add new events while doing an addStream")},
l:function(a,b){var t=this
H.i(t).c.a(b)
if(!t.gb6())throw H.b(t.b1())
t.bc(b)},
c3:function(a){var t,s=this
if((s.c&4)!==0)return s.r
if(!s.gb6())throw H.b(s.b1())
s.c|=4
t=s.eK()
s.ay()
return t},
cY:function(a){var t,s,r,q,p=this
H.i(p).i("~(P<1>)").a(a)
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
if(p.d==null)p.bI()},
bI:function(){var t=this
if((t.c&4)!==0&&t.r.a===0)t.r.cK(null)
P.mA(t.b)},
scX:function(a){this.d=H.i(this).i("b9<1>").a(a)},
sd2:function(a){this.e=H.i(this).i("b9<1>").a(a)},
$if7:1,
$imh:1,
$ibm:1,
$ibl:1}
P.e3.prototype={
gb6:function(){return P.bB.prototype.gb6.call(this)&&(this.c&2)===0},
b1:function(){if((this.c&2)!==0)return new P.b6("Cannot fire new event. Controller is already firing an event")
return this.el()},
bc:function(a){var t,s=this
s.$ti.c.a(a)
t=s.d
if(t==null)return
if(t===s.e){s.c|=2
t.aL(a)
s.c&=4294967293
if(s.d==null)s.bI()
return}s.cY(new P.k0(s,a))},
ay:function(){var t=this
if(t.d!=null)t.cY(new P.k1(t))
else t.r.cK(null)}}
P.k0.prototype={
$1:function(a){this.a.$ti.i("P<1>").a(a).aL(this.b)},
$S:function(){return this.a.$ti.i("w(P<1>)")}}
P.k1.prototype={
$1:function(a){this.a.$ti.i("P<1>").a(a).cN()},
$S:function(){return this.a.$ti.i("w(P<1>)")}}
P.aE.prototype={}
P.it.prototype={
$0:function(){var t,s,r,q,p
try{this.a.b3(this.b.$0())}catch(r){t=H.L(r)
s=H.aV(r)
q=t
p=s
if(p==null)p=P.lo(q)
this.a.aO(q,p)}},
$S:1}
P.fn.prototype={}
P.e4.prototype={}
P.c6.prototype={
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
if(b!=null)b=P.pF(b,t)}s=new P.a3($.H,c.i("a3<0>"))
r=b==null?1:3
this.bG(new P.c6(s,r,a,b,q.i("@<1>").q(c).i("c6<1,2>")))
return s},
dZ:function(a,b){return this.e_(a,null,b)},
e5:function(a){var t,s
u.fO.a(a)
t=this.$ti
s=new P.a3($.H,t)
this.bG(new P.c6(s,8,a,null,t.i("@<1>").q(t.c).i("c6<1,2>")))
return s},
fi:function(a){this.$ti.c.a(a)
this.a=4
this.c=a},
bG:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.x.a(s.c)
s.c=a}else{if(r===2){t=u._.a(s.c)
r=t.a
if(r<4){t.bG(a)
return}s.a=r
s.c=t.c}P.cR(null,null,s.b,u.M.a(new P.jt(s,a)))}},
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
P.cR(null,null,o.b,u.M.a(new P.jA(n,o)))}},
ba:function(){var t=u.x.a(this.c)
this.c=null
return this.bb(t)},
bb:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
b3:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("aE<1>").b(a))if(r.b(a))P.jv(a,s)
else P.ma(a,s)
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
P.cR(null,null,t.b,u.M.a(new P.ju(t,a)))},
ez:function(a){var t=this,s=t.$ti
s.i("aE<1>").a(a)
if(s.b(a)){if(a.ghq()){t.a=1
P.cR(null,null,t.b,u.M.a(new P.jz(t,a)))}else P.jv(a,t)
return}P.ma(a,t)},
$iaE:1}
P.jt.prototype={
$0:function(){P.cK(this.a,this.b)},
$S:1}
P.jA.prototype={
$0:function(){P.cK(this.b,this.a.a)},
$S:1}
P.jw.prototype={
$1:function(a){var t=this.a
t.a=0
t.b3(a)},
$S:11}
P.jx.prototype={
$2:function(a,b){u.l.a(b)
this.a.aO(a,b)},
$1:function(a){return this.$2(a,null)},
$C:"$2",
$D:function(){return[null]},
$S:63}
P.jy.prototype={
$0:function(){this.a.aO(this.b,this.c)},
$S:1}
P.ju.prototype={
$0:function(){var t=this.a,s=t.$ti.c.a(this.b),r=t.ba()
t.a=4
t.c=s
P.cK(t,r)},
$S:1}
P.jz.prototype={
$0:function(){P.jv(this.b,this.a)},
$S:1}
P.jD.prototype={
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
r.b=m.dZ(new P.jE(o),u.z)
r.a=!1}},
$S:0}
P.jE.prototype={
$1:function(a){return this.a},
$S:73}
P.jC.prototype={
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
P.jB.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.c
if(H.ac(q.h1(t))&&q.e!=null){p=l.b
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
P.fk.prototype={}
P.U.prototype={
T:function(a,b){var t=H.i(this)
return new P.dR(t.i("@(U.T)").a(b),this,t.i("dR<U.T,@>"))},
gk:function(a){var t={},s=new P.a3($.H,u.fJ)
t.a=0
this.Y(new P.iV(t,this),!0,new P.iW(t,s),s.geE())
return s}}
P.iV.prototype={
$1:function(a){H.i(this.b).i("U.T").a(a);++this.a.a},
$S:function(){return H.i(this.b).i("w(U.T)")}}
P.iW.prototype={
$0:function(){this.b.b3(this.a.a)},
$C:"$0",
$R:0,
$S:1}
P.a2.prototype={}
P.f8.prototype={}
P.cF.prototype={
gB:function(a){return(H.c1(this.a)^892482866)>>>0},
R:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cF&&b.a===this.a}}
P.cG.prototype={
bV:function(){return this.x.f9(this)},
ac:function(){H.i(this.x).i("a2<1>").a(this)},
ad:function(){H.i(this.x).i("a2<1>").a(this)}}
P.P.prototype={
cG:function(a,b,c,d,e){var t,s=this,r=H.i(s)
r.i("~(P.T)").a(a)
s.sey(u.gu.q(r.i("P.T")).i("1(2)").a(a))
t=b==null?P.pQ():b
if(u.da.b(t))s.b=s.d.dS(t,u.z,u.K,u.l)
else if(u.d5.b(t))s.b=u.bI.a(t)
else H.D(P.b2("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
r=u.M
r.a(c)
s.sf7(r.a(c==null?P.mE():c))},
cl:function(a){var t,s,r=this,q=r.e
if((q&8)!==0)return
t=(q+128|4)>>>0
r.e=t
if(q<128&&r.r!=null){s=r.r
if(s.a===1)s.a=3}if((q&4)===0&&(t&32)===0)r.d1(r.gb7())},
cq:function(){var t=this,s=t.e
if((s&8)!==0)return
if(s>=128){s=t.e=s-128
if(s<128)if((s&64)!==0&&t.r.c!=null)t.r.bB(t)
else{s=(s&4294967291)>>>0
t.e=s
if((s&32)===0)t.d1(t.gb8())}}},
a_:function(){var t=this,s=(t.e&4294967279)>>>0
t.e=s
if((s&8)===0)t.bJ()
s=t.f
return s==null?$.h0():s},
bJ:function(){var t,s=this,r=s.e=(s.e|8)>>>0
if((r&64)!==0){t=s.r
if(t.a===1)t.a=3}if((r&32)===0)s.sbW(null)
s.f=s.bV()},
aL:function(a){var t,s=this,r=H.i(s)
r.i("P.T").a(a)
t=s.e
if((t&8)!==0)return
if(t<32)s.bc(a)
else s.bH(new P.dF(a,r.i("dF<P.T>")))},
b0:function(a,b){var t=this.e
if((t&8)!==0)return
if(t<32)this.dg(a,b)
else this.bH(new P.fs(a,b))},
cN:function(){var t=this,s=t.e
if((s&8)!==0)return
s=(s|2)>>>0
t.e=s
if(s<32)t.ay()
else t.bH(C.F)},
ac:function(){},
ad:function(){},
bV:function(){return null},
bH:function(a){var t=this,s=H.i(t).i("e1<P.T>"),r=s.a(t.r)
if(r==null){r=new P.e1(s)
t.sbW(r)}r.l(0,a)
s=t.e
if((s&64)===0){s=(s|64)>>>0
t.e=s
if(s<128)t.r.bB(t)}},
bc:function(a){var t,s=this,r=H.i(s).i("P.T")
r.a(a)
t=s.e
s.e=(t|32)>>>0
s.d.ct(s.a,a,r)
s.e=(s.e&4294967263)>>>0
s.bL((t&4)!==0)},
dg:function(a,b){var t=this,s=t.e,r=new P.jm(t,a,b)
if((s&1)!==0){t.e=(s|16)>>>0
t.bJ()
s=t.f
if(s!=null&&s!==$.h0())s.e5(r)
else r.$0()}else{r.$0()
t.bL((s&4)!==0)}},
ay:function(){var t,s=this,r=new P.jl(s)
s.bJ()
s.e=(s.e|16)>>>0
t=s.f
if(t!=null&&t!==$.h0())t.e5(r)
else r.$0()},
d1:function(a){var t,s=this
u.M.a(a)
t=s.e
s.e=(t|32)>>>0
a.$0()
s.e=(s.e&4294967263)>>>0
s.bL((t&4)!==0)},
bL:function(a){var t,s,r=this,q=r.e
if((q&64)!==0&&r.r.c==null){q=r.e=(q&4294967231)>>>0
if((q&4)!==0)if(q<128){t=r.r
t=t==null||t.c==null}else t=!1
else t=!1
if(t){q=(q&4294967291)>>>0
r.e=q}}for(;!0;a=s){if((q&8)!==0){r.sbW(null)
return}s=(q&4)!==0
if(a===s)break
r.e=(q^32)>>>0
if(s)r.ac()
else r.ad()
q=(r.e&4294967263)>>>0
r.e=q}if((q&64)!==0&&q<128)r.r.bB(r)},
sey:function(a){this.a=H.i(this).i("~(P.T)").a(a)},
sf7:function(a){this.c=u.M.a(a)},
sbW:function(a){this.r=H.i(this).i("dX<P.T>").a(a)},
$ia2:1,
$ibm:1,
$ibl:1}
P.jm.prototype={
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
P.jl.prototype={
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
return this.a.c_(t.i("~(1)").a(a),d,c,!0===b)},
u:function(a){return this.Y(a,null,null,null)},
bm:function(a,b,c){return this.Y(a,null,b,c)}}
P.bC.prototype={
saU:function(a){this.a=u.gt.a(a)},
gaU:function(){return this.a}}
P.dF.prototype={
cm:function(a){this.$ti.i("bl<1>").a(a).bc(this.b)}}
P.fs.prototype={
cm:function(a){a.dg(this.b,this.c)}}
P.fr.prototype={
cm:function(a){a.ay()},
gaU:function(){return null},
saU:function(a){throw H.b(P.ax("No events after a done."))},
$ibC:1}
P.dX.prototype={
bB:function(a){var t,s=this
s.$ti.i("bl<1>").a(a)
t=s.a
if(t===1)return
if(t>=1){s.a=1
return}P.n4(new P.jO(s,a))
s.a=1}}
P.jO.prototype={
$0:function(){var t,s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
t=q.$ti.i("bl<1>").a(this.b)
s=q.b
r=s.gaU()
q.b=r
if(r==null)q.c=null
s.cm(t)},
$S:1}
P.e1.prototype={
l:function(a,b){var t,s=this
u.gt.a(b)
t=s.c
if(t==null)s.b=s.c=b
else{t.saU(b)
s.c=b}}}
P.cH.prototype={
df:function(){var t=this
if((t.b&2)!==0)return
P.cR(null,null,t.a,u.M.a(t.gfh()))
t.b=(t.b|2)>>>0},
cl:function(a){this.b+=4},
cq:function(){var t=this.b
if(t>=4){t=this.b=t-4
if(t<4&&(t&1)===0)this.df()}},
a_:function(){return $.h0()},
ay:function(){var t=this,s=t.b=(t.b&4294967293)>>>0
if(s>=4)return
t.b=(s|1)>>>0
t.a.cr(t.c)},
$ia2:1}
P.dI.prototype={
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
t.cl(0)},
ad:function(){var t=this.y
if(t==null)return
t.cq()},
bV:function(){var t=this.y
if(t!=null){this.sdi(null)
return t.a_()}return null},
eP:function(a){this.x.eQ(this.$ti.c.a(a),this)},
f2:function(a,b){u.l.a(b)
this.x.$ti.i("bm<2>").a(this).b0(a,b)},
eS:function(){this.x.$ti.i("bm<2>").a(this).cN()},
sdi:function(a){this.y=this.$ti.i("a2<1>").a(a)}}
P.dR.prototype={
eQ:function(a,b){var t,s,r,q,p=this.$ti
p.c.a(a)
p.i("bm<2>").a(b)
t=null
try{t=this.b.$1(a)}catch(q){s=H.L(q)
r=H.aV(q)
b.b0(s,r)
return}b.aL(t)}}
P.cX.prototype={
n:function(a){return H.a(this.a)},
$iK:1,
gb_:function(){return this.b}}
P.fU.prototype={$im7:1}
P.ki.prototype={
$0:function(){var t,s=this.a,r=s.b
if(r==null)throw H.b(s.a)
t=H.b(s.a)
t.stack=r.n(0)
throw t},
$S:1}
P.fJ.prototype={
cr:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.f===$.H){a.$0()
return}P.mx(q,q,this,a,u.o)}catch(r){t=H.L(r)
s=H.aV(r)
P.cQ(q,q,this,t,u.l.a(s))}},
ct:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.f===$.H){a.$1(b)
return}P.mz(q,q,this,a,b,u.o,c)}catch(r){t=H.L(r)
s=H.aV(r)
P.cQ(q,q,this,t,u.l.a(s))}},
hh:function(a,b,c,d,e){var t,s,r,q=null
d.i("@<0>").q(e).i("~(1,2)").a(a)
d.a(b)
e.a(c)
try{if(C.f===$.H){a.$2(b,c)
return}P.my(q,q,this,a,b,c,u.o,d,e)}catch(r){t=H.L(r)
s=H.aV(r)
P.cQ(q,q,this,t,u.l.a(s))}},
fv:function(a,b){return new P.jV(this,b.i("0()").a(a),b)},
c1:function(a){return new P.jU(this,u.M.a(a))},
fw:function(a,b){return new P.jW(this,b.i("~(0)").a(a),b)},
h:function(a,b){return null},
dX:function(a,b){b.i("0()").a(a)
if($.H===C.f)return a.$0()
return P.mx(null,null,this,a,b)},
cs:function(a,b,c,d){c.i("@<0>").q(d).i("1(2)").a(a)
d.a(b)
if($.H===C.f)return a.$1(b)
return P.mz(null,null,this,a,b,c,d)},
hg:function(a,b,c,d,e,f){d.i("@<0>").q(e).q(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.H===C.f)return a.$2(b,c)
return P.my(null,null,this,a,b,c,d,e,f)},
dS:function(a,b,c,d){return b.i("@<0>").q(c).q(d).i("1(2,3)").a(a)}}
P.jV.prototype={
$0:function(){return this.a.dX(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.jU.prototype={
$0:function(){return this.a.cr(this.b)},
$S:0}
P.jW.prototype={
$1:function(a){var t=this.c
return this.a.ct(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.dJ.prototype={
gk:function(a){return this.a},
gN:function(a){return this.a===0},
gK:function(){return new P.dK(this,this.$ti.i("dK<1>"))},
I:function(a){var t,s
if(typeof a=="string"&&a!=="__proto__"){t=this.b
return t==null?!1:t[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){s=this.c
return s==null?!1:s[a]!=null}else return this.eH(a)},
eH:function(a){var t=this.d
if(t==null)return!1
return this.aj(this.cZ(t,a),a)>=0},
h:function(a,b){var t,s,r
if(typeof b=="string"&&b!=="__proto__"){t=this.b
s=t==null?null:P.mb(t,b)
return s}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
s=r==null?null:P.mb(r,b)
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
o.eD(t==null?o.b=P.mc():t,b,c)}else{s=o.d
if(s==null)s=o.d=P.mc()
r=H.mW(b)&1073741823
q=s[r]
if(q==null){P.kQ(s,r,[b,c]);++o.a
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
this.e=null}P.kQ(a,b,c)},
cZ:function(a,b){return a[H.mW(b)&1073741823]}}
P.dM.prototype={
aj:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;s+=2){r=a[s]
if(r==null?b==null:r===b)return s}return-1}}
P.dK.prototype={
gk:function(a){return this.a.a},
gN:function(a){return this.a.a===0},
gA:function(a){var t=this.a
return new P.dL(t,t.cQ(),this.$ti.i("dL<1>"))}}
P.dL.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.b,r=t.c,q=t.a
if(s!==q.e)throw H.b(P.aN(q))
else if(r>=s.length){t.saN(null)
return!1}else{t.saN(s[r])
t.c=r+1
return!0}},
saN:function(a){this.d=this.$ti.c.a(a)},
$iS:1}
P.dP.prototype={
gA:function(a){var t=this,s=new P.c8(t,t.r,H.i(t).i("c8<1>"))
s.c=t.e
return s},
gk:function(a){return this.a},
F:function(a,b){var t,s
if(typeof b=="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return u.J.a(t[b])!=null}else{s=this.eG(b)
return s}},
eG:function(a){var t=this.d
if(t==null)return!1
return this.aj(t[this.bN(a)],a)>=0},
l:function(a,b){var t,s,r=this
H.i(r).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){t=r.b
return r.cO(t==null?r.b=P.kR():t,b)}else if(typeof b=="number"&&(b&1073741823)===b){s=r.c
return r.cO(s==null?r.c=P.kR():s,b)}else return r.eC(b)},
eC:function(a){var t,s,r,q=this
H.i(q).c.a(a)
t=q.d
if(t==null)t=q.d=P.kR()
s=q.bN(a)
r=t[s]
if(r==null)t[s]=[q.bM(a)]
else{if(q.aj(r,a)>=0)return!1
r.push(q.bM(a))}return!0},
a8:function(a,b){var t=this
if(typeof b=="string"&&b!=="__proto__")return t.dd(t.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return t.dd(t.c,b)
else return t.fa(b)},
fa:function(a){var t,s,r,q,p=this,o=p.d
if(o==null)return!1
t=p.bN(a)
s=o[t]
r=p.aj(s,a)
if(r<0)return!1
q=s.splice(r,1)[0]
if(0===s.length)delete o[t]
p.dk(q)
return!0},
cO:function(a,b){H.i(this).c.a(b)
if(u.J.a(a[b])!=null)return!1
a[b]=this.bM(b)
return!0},
dd:function(a,b){var t
if(a==null)return!1
t=u.J.a(a[b])
if(t==null)return!1
this.dk(t)
delete a[b]
return!0},
cP:function(){this.r=1073741823&this.r+1},
bM:function(a){var t,s=this,r=new P.fD(H.i(s).c.a(a))
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
bN:function(a){return J.ad(a)&1073741823},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.bd(a[s].a,b))return s
return-1}}
P.fD.prototype={}
P.c8.prototype={
gp:function(){return this.d},
m:function(){var t=this,s=t.a
if(t.b!==s.r)throw H.b(P.aN(s))
else{s=t.c
if(s==null){t.saN(null)
return!1}else{t.saN(t.$ti.c.a(s.a))
t.c=t.c.b
return!0}}},
saN:function(a){this.d=this.$ti.c.a(a)},
$iS:1}
P.dq.prototype={$in:1,$id:1,$iv:1}
P.k.prototype={
gA:function(a){return new H.N(a,this.gk(a),H.X(a).i("N<k.E>"))},
C:function(a,b){return this.h(a,b)},
t:function(a,b){var t,s
H.X(a).i("~(k.E)").a(b)
t=this.gk(a)
for(s=0;s<t;++s){b.$1(this.h(a,s))
if(t!==this.gk(a))throw H.b(P.aN(a))}},
gN:function(a){return this.gk(a)===0},
gcj:function(a){return!this.gN(a)},
gJ:function(a){if(this.gk(a)===0)throw H.b(H.cl())
return this.h(a,0)},
H:function(a,b,c){var t=H.X(a)
return new H.O(a,t.q(c).i("1(k.E)").a(b),t.i("@<k.E>").q(c).i("O<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
aZ:function(a,b){return H.am(a,b,null,H.X(a).i("k.E"))},
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
P.m_(b,c,this.gk(a))
t=c-b
if(t===0)return
P.aZ(e,"skipCount")
if(p.i("v<k.E>").b(d)){s=e
r=d}else{r=H.am(d,e,null,H.X(d).i("k.E")).ag(0,!1)
s=0}p=J.ap(r)
if(s+t>p.gk(r))throw H.b(H.lN())
if(s<b)for(q=t-1;q>=0;--q)this.j(a,b+q,p.h(r,s+q))
else for(q=0;q<t;++q)this.j(a,b+q,p.h(r,s+q))},
af:function(a,b,c){var t=this
H.X(a).i("k.E").a(c)
P.be(b,"index",u.S)
P.kM(b,0,t.gk(a),"index")
if(b===t.gk(a)){t.l(a,c)
return}t.sk(a,t.gk(a)+1)
t.V(a,b+1,t.gk(a),a,b)
t.j(a,b,c)},
n:function(a){return P.iv(a,"[","]")}}
P.dr.prototype={}
P.iD.prototype={
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
H.i(this).i("~(T.K,T.V)").a(b)
for(t=J.y(this.gK());t.m();){s=t.gp()
b.$2(s,this.h(0,s))}},
aE:function(a,b,c,d){var t,s,r,q
H.i(this).q(c).q(d).i("cn<1,2>(T.K,T.V)").a(b)
t=P.bY(c,d)
for(s=J.y(this.gK());s.m();){r=s.gp()
q=b.$2(r,this.h(0,r))
t.j(0,C.q.gh_(q),q.ghl(q))}return t},
T:function(a,b){return this.aE(a,b,u.z,u.z)},
gk:function(a){return J.ae(this.gK())},
gN:function(a){return J.nz(this.gK())},
n:function(a){return P.iC(this)},
$ial:1}
P.e8.prototype={
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
return new H.ar(t,H.i(t).i("ar<1>"))},
n:function(a){return P.iC(this.a)},
aE:function(a,b,c,d){return this.a.aE(0,this.$ti.q(c).q(d).i("cn<1,2>(3,4)").a(b),c,d)},
T:function(a,b){return this.aE(a,b,u.z,u.z)},
$ial:1}
P.dD.prototype={}
P.b_.prototype={
H:function(a,b,c){var t=H.i(this)
return new H.aX(this,t.q(c).i("1(b_.E)").a(b),t.i("@<b_.E>").q(c).i("aX<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
n:function(a){return P.iv(this,"{","}")},
C:function(a,b){var t,s,r,q="index"
P.be(b,q,u.S)
P.aZ(b,q)
for(t=this.a7(),t=P.jJ(t,t.r,H.i(t).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.b(P.bg(b,this,q,null,s))}}
P.dx.prototype={$in:1,$id:1,$iat:1}
P.dY.prototype={
M:function(a,b){var t
for(t=J.y(H.i(this).i("d<1>").a(b));t.m();)this.l(0,t.gp())},
H:function(a,b,c){var t=H.i(this)
return new H.aX(this,t.q(c).i("1(2)").a(b),t.i("@<1>").q(c).i("aX<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
n:function(a){return P.iv(this,"{","}")},
ck:function(a,b){var t,s=P.jJ(this,this.r,H.i(this).c)
if(!s.m())return""
if(b===""){t=""
do t+=H.a(s.d)
while(s.m())}else{t=H.a(s.d)
for(;s.m();)t=t+b+H.a(s.d)}return t.charCodeAt(0)==0?t:t},
C:function(a,b){var t,s,r,q=this,p="index"
P.be(b,p,u.S)
P.aZ(b,p)
for(t=P.jJ(q,q.r,H.i(q).c),s=0;t.m();){r=t.d
if(b===s)return r;++s}throw H.b(P.bg(b,q,p,null,s))},
$in:1,
$id:1,
$iat:1}
P.dQ.prototype={}
P.dZ.prototype={}
P.cM.prototype={}
P.fB.prototype={
h:function(a,b){var t,s=this.b
if(s==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{t=s[b]
return typeof t=="undefined"?this.f8(b):t}},
gk:function(a){return this.b==null?this.c.a:this.aP().length},
gN:function(a){return this.gk(this)===0},
gK:function(){if(this.b==null){var t=this.c
return new H.ar(t,H.i(t).i("ar<1>"))}return new P.fC(this)},
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
if(typeof q=="undefined"){q=P.kc(p.a[r])
p.b[r]=q}b.$2(r,q)
if(t!==p.c)throw H.b(P.aN(p))}},
aP:function(){var t=u.j.a(this.c)
if(t==null)t=this.c=H.h(Object.keys(this.a),u.s)
return t},
fo:function(){var t,s,r,q,p,o=this
if(o.b==null)return o.c
t=P.bY(u.N,u.z)
s=o.aP()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.j(0,p,o.h(0,p))}if(q===0)C.a.l(s,null)
else C.a.sk(s,0)
o.a=o.b=null
return o.c=t},
f8:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
t=P.kc(this.a[a])
return this.b[a]=t}}
P.fC.prototype={
gk:function(a){var t=this.a
return t.gk(t)},
C:function(a,b){var t=this.a
if(t.b==null)t=t.gK().C(0,b)
else{t=t.aP()
if(b<0||b>=t.length)return H.o(t,b)
t=t[b]}return t},
gA:function(a){var t=this.a
if(t.b==null){t=t.gK()
t=t.gA(t)}else{t=t.aP()
t=new J.aC(t,t.length,H.C(t).i("aC<1>"))}return t}}
P.er.prototype={}
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
if(c>b)s.a+=J.nJ(a,b,c)
q=s.a
return q.charCodeAt(0)==0?q:q}}
P.dl.prototype={
n:function(a){var t=P.bs(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+t}}
P.eN.prototype={
n:function(a){return"Cyclic error in JSON stringify"}}
P.iA.prototype={
c4:function(a,b,c){var t
u.ep.a(c)
t=P.pE(b,this.gfJ().a)
return t},
fP:function(a,b){var t
u.bc.a(b)
t=P.p3(a,this.gfQ().b,null)
return t},
gfQ:function(){return C.K},
gfJ:function(){return C.J}}
P.eP.prototype={}
P.eO.prototype={}
P.jH.prototype={
e8:function(a){var t,s,r,q,p,o,n=a.length
for(t=J.ko(a),s=this.c,r=0,q=0;q<n;++q){p=t.b2(a,q)
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
bK:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<s;++r){q=t[r]
if(a==null?q==null:a===q)throw H.b(new P.eN(a,null))}C.a.l(t,a)},
by:function(a){var t,s,r,q,p=this
if(p.e7(a))return
p.bK(a)
try{t=p.b.$1(a)
if(!p.e7(t)){r=P.lQ(a,null,p.gd9())
throw H.b(r)}r=p.a
if(0>=r.length)return H.o(r,-1)
r.pop()}catch(q){s=H.L(q)
r=P.lQ(a,s,p.gd9())
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
return!0}else if(u.j.b(a)){r.bK(a)
r.hm(a)
t=r.a
if(0>=t.length)return H.o(t,-1)
t.pop()
return!0}else if(u.f.b(a)){r.bK(a)
s=r.hn(a)
t=r.a
if(0>=t.length)return H.o(t,-1)
t.pop()
return s}else return!1},
hm:function(a){var t,s,r=this.c
r.a+="["
t=J.ap(a)
if(t.gcj(a)){this.by(t.h(a,0))
for(s=1;s<t.gk(a);++s){r.a+=","
this.by(t.h(a,s))}}r.a+="]"},
hn:function(a){var t,s,r,q,p,o,n=this,m={}
if(a.gN(a)){n.c.a+="{}"
return!0}t=a.gk(a)*2
s=new Array(t)
s.fixed$length=Array
r=m.a=0
m.b=!0
a.t(0,new P.jI(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<t;r+=2,p=',"'){q.a+=p
n.e8(H.r(s[r]))
q.a+='":'
o=r+1
if(o>=t)return H.o(s,o)
n.by(s[o])}q.a+="}"
return!0}}
P.jI.prototype={
$2:function(a,b){var t,s
if(typeof a!="string")this.a.b=!1
t=this.b
s=this.a
C.a.j(t,s.a++,a)
C.a.j(t,s.a++,b)},
$S:23}
P.jG.prototype={
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
t.a+=P.bs(b)
s.a=", "},
$S:51}
P.t.prototype={}
P.ch.prototype={
l:function(a,b){return P.nW(C.e.v(this.a,u.fu.a(b).ghr()),!1)},
R:function(a,b){if(b==null)return!1
return b instanceof P.ch&&this.a===b.a&&!0},
gB:function(a){var t=this.a
return(t^C.e.bZ(t,30))&1073741823},
n:function(a){var t=this,s=P.nX(H.on(t)),r=P.ev(H.ol(t)),q=P.ev(H.oh(t)),p=P.ev(H.oi(t)),o=P.ev(H.ok(t)),n=P.ev(H.om(t)),m=P.nY(H.oj(t)),l=s+"-"+r+"-"+q+" "+p+":"+o+":"+n+"."+m
return l}}
P.ai.prototype={}
P.bT.prototype={
at:function(a,b){return new P.bT(C.e.D(this.a*b))},
R:function(a,b){if(b==null)return!1
return b instanceof P.bT&&this.a===b.a},
gB:function(a){return C.e.gB(this.a)},
n:function(a){var t,s,r,q=new P.i0(),p=this.a
if(p<0)return"-"+new P.bT(0-p).n(0)
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
P.cW.prototype={
n:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.bs(t)
return"Assertion failed"}}
P.f0.prototype={
n:function(a){return"Throw of null."}}
P.aK.prototype={
gbQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbP:function(){return""},
n:function(a){var t,s,r,q,p=this,o=p.c,n=o!=null?" ("+o+")":""
o=p.d
t=o==null?"":": "+H.a(o)
s=p.gbQ()+n+t
if(!p.a)return s
r=p.gbP()
q=P.bs(p.b)
return s+r+": "+q}}
P.dw.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var t,s,r=this.e
if(r==null){r=this.f
t=r!=null?": Not less than or equal to "+H.a(r):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.a(r)
else if(s>r)t=": Not in range "+H.a(r)+".."+H.a(s)+", inclusive"
else t=s<r?": Valid value range is empty":": Only valid value is "+H.a(r)}return t}}
P.eH.prototype={
gbQ:function(){return"RangeError"},
gbP:function(){var t,s=H.q(this.b)
if(typeof s!=="number")return s.ai()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.a(t)},
gk:function(a){return this.f}}
P.eZ.prototype={
n:function(a){var t,s,r,q,p,o,n,m,l=this,k={},j=new P.aS("")
k.a=""
for(t=l.c,s=t.length,r=0,q="",p="";r<s;++r,p=", "){o=t[r]
j.a=q+p
q=j.a+=P.bs(o)
k.a=", "}l.d.t(0,new P.iE(k,j))
n=P.bs(l.a)
m=j.n(0)
t="NoSuchMethodError: method not found: '"+H.a(l.b.a)+"'\nReceiver: "+n+"\nArguments: ["+m+"]"
return t}}
P.fi.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.fg.prototype={
n:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b6.prototype={
n:function(a){return"Bad state: "+this.a}}
P.es.prototype={
n:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bs(t)+"."}}
P.f1.prototype={
n:function(a){return"Out of Memory"},
gb_:function(){return null},
$iK:1}
P.dz.prototype={
n:function(a){return"Stack Overflow"},
gb_:function(){return null},
$iK:1}
P.eu.prototype={
n:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.fw.prototype={
n:function(a){return"Exception: "+this.a},
$ii5:1}
P.de.prototype={
n:function(a){var t,s=this.a,r=s!=null&&""!==s?"FormatException: "+H.a(s):"FormatException",q=this.b
if(typeof q=="string"){t=q.length>78?C.d.aa(q,0,75)+"...":q
return r+"\n"+t}else return r},
$ii5:1}
P.b4.prototype={}
P.e.prototype={}
P.d.prototype={
H:function(a,b,c){var t=H.i(this)
return H.lT(this,t.q(c).i("1(d.E)").a(b),t.i("d.E"),c)},
T:function(a,b){return this.H(a,b,u.z)},
bw:function(a,b){var t=H.i(this)
return new H.ag(this,t.i("t(d.E)").a(b),t.i("ag<d.E>"))},
gk:function(a){var t,s=this.gA(this)
for(t=0;s.m();)++t
return t},
gJ:function(a){var t=this.gA(this)
if(!t.m())throw H.b(H.cl())
return t.gp()},
gaw:function(a){var t,s=this.gA(this)
if(!s.m())throw H.b(H.cl())
t=s.gp()
if(s.m())throw H.b(H.o4())
return t},
C:function(a,b){var t,s,r,q="index"
P.be(b,q,u.S)
P.aZ(b,q)
for(t=this.gA(this),s=0;t.m();){r=t.gp()
if(b===s)return r;++s}throw H.b(P.bg(b,this,q,null,s))},
n:function(a){return P.o3(this,"(",")")}}
P.S.prototype={}
P.v.prototype={$in:1,$id:1}
P.cn.prototype={}
P.w.prototype={
gB:function(a){return P.E.prototype.gB.call(this,this)},
n:function(a){return"null"}}
P.Y.prototype={}
P.E.prototype={constructor:P.E,$iE:1,
R:function(a,b){return this===b},
gB:function(a){return H.c1(this)},
n:function(a){return"Instance of '"+H.a(H.iP(this))+"'"},
bn:function(a,b){u.m.a(b)
throw H.b(P.lU(this,b.gdJ(),b.gdR(),b.gdK()))},
toString:function(){return this.n(this)}}
P.ds.prototype={}
P.at.prototype={}
P.au.prototype={}
P.fL.prototype={
n:function(a){return""},
$iau:1}
P.c.prototype={$if2:1}
P.aS.prototype={
gk:function(a){return this.a.length},
n:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
$ioz:1}
P.b0.prototype={}
W.j.prototype={$ij:1}
W.ca.prototype={
n:function(a){return String(a)},
$ica:1}
W.em.prototype={
n:function(a){return String(a)}}
W.cb.prototype={$icb:1}
W.bN.prototype={$ibN:1}
W.bO.prototype={$ibO:1}
W.ce.prototype={$ice:1}
W.b3.prototype={
gk:function(a){return a.length}}
W.I.prototype={$iI:1}
W.cg.prototype={
aM:function(a,b){var t=$.na(),s=t[b]
if(typeof s=="string")return s
s=this.fl(a,b)
t[b]=s
return s},
fl:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.nZ()+b
if(t in a)return t
return b},
bd:function(a,b,c,d){if(c==null)c=""
a.setProperty(b,c,d)},
gk:function(a){return a.length}}
W.hM.prototype={}
W.d5.prototype={$id5:1}
W.bR.prototype={$ibR:1}
W.hN.prototype={
n:function(a){return String(a)}}
W.d6.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
R:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.W(b)
t=a.left==t.gbl(b)&&a.top==t.gbv(b)&&a.width==t.gbx(b)&&a.height==t.gbi(b)}else t=!1
return t},
gB:function(a){return W.mf(J.ad(a.left),J.ad(a.top),J.ad(a.width),J.ad(a.height))},
gds:function(a){return a.bottom},
gbi:function(a){return a.height},
gbl:function(a){return a.left},
gdW:function(a){return a.right},
gbv:function(a){return a.top},
gbx:function(a){return a.width},
$iby:1}
W.hO.prototype={
gk:function(a){return a.length},
l:function(a,b){return a.add(H.r(b))}}
W.fm.prototype={
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
gA:function(a){var t=this.aq(this)
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
bf:function(a){J.kB(this.a)},
gJ:function(a){var t=this.a.firstElementChild
if(t==null)throw H.b(P.ax("No elements"))
return t}}
W.ao.prototype={
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
$ilH:1}
W.p.prototype={
gfu:function(a){return new W.ft(a)},
gdu:function(a){return new W.fm(a,a.children)},
gdv:function(a){return new W.fu(a)},
gaV:function(a){var t=C.c.D(a.offsetLeft),s=C.c.D(a.offsetTop),r=C.c.D(a.offsetWidth),q=C.c.D(a.offsetHeight)
if(r<0)r=-r*0
if(q<0)q=-q*0
return new P.by(t,s,r,q,u.q)},
a4:function(a,b){this.cd(a,"beforeend",b,null,null)},
n:function(a){return a.localName},
cd:function(a,b,c,d,e){var t,s=this.W(a,c,d,e)
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
do{if(J.nE(t,b))return!0
t=t.parentElement}while(t!=null)
return!1},
W:function(a,b,c,d){var t,s,r,q
if(c==null){t=$.lJ
if(t==null){t=H.h([],u.eO)
s=new W.dv(t)
C.a.l(t,W.md(null))
C.a.l(t,W.mi())
$.lJ=s
d=s}else d=t
t=$.lI
if(t==null){t=new W.e9(d)
$.lI=t
c=t}else{t.a=d
c=t}}if($.br==null){t=document
s=t.implementation.createHTMLDocument("")
$.br=s
$.kI=s.createRange()
s=$.br.createElement("base")
u.cR.a(s)
s.href=t.baseURI
$.br.head.appendChild(s)}t=$.br
if(t.body==null){s=t.createElement("body")
t.body=u.a4.a(s)}t=$.br
if(u.a4.b(a))r=t.body
else{r=t.createElement(a.tagName)
$.br.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.F(C.M,a.tagName)){$.kI.selectNodeContents(r)
q=$.kI.createContextualFragment(b)}else{r.innerHTML=b
q=$.br.createDocumentFragment()
for(;t=r.firstChild,t!=null;)q.appendChild(t)}t=$.br.body
if(r==null?t!=null:r!==t)J.ei(r)
c.cv(q)
document.adoptNode(q)
return q},
fI:function(a,b,c){return this.W(a,b,c,null)},
G:function(a,b){a.textContent=null
a.appendChild(this.W(a,b,null,null))},
gdY:function(a){return a.tagName},
gdL:function(a){return new W.az(a,"click",!1,u.C)},
gdO:function(a){return new W.az(a,"mousedown",!1,u.C)},
gdP:function(a){return new W.az(a,"touchstart",!1,u.du)},
$ip:1}
W.i2.prototype={
$1:function(a){return u.h.b(u.F.a(a))},
$S:25}
W.f.prototype={$if:1}
W.i4.prototype={
h:function(a,b){return new W.bn(this.a,H.r(b),!1,u.cw)}}
W.i1.prototype={
h:function(a,b){var t
H.r(b)
if($.lG.I(b.toLowerCase())){t=$.ly
if(t==null)t=$.ly=!H.ac(P.kH())&&J.h1(window.navigator.userAgent,"WebKit",0)
if(t)return new W.az(this.a,$.lG.h(0,b.toLowerCase()),!1,u.E)}return new W.az(this.a,b,!1,u.E)}}
W.F.prototype={
ew:function(a,b,c,d){return a.addEventListener(b,H.cT(u.G.a(c),1),!1)},
dC:function(a,b){return a.dispatchEvent(b)},
fb:function(a,b,c,d){return a.removeEventListener(b,H.cT(u.G.a(c),1),!1)},
$iF:1}
W.eF.prototype={
gk:function(a){return a.length}}
W.bu.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bg(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.F.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(P.ax("No elements"))},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$iv:1,
$ibu:1}
W.dg.prototype={$idg:1}
W.ck.prototype={
cA:function(a,b,c){return a.setSelectionRange(b,c)},
$ick:1}
W.bi.prototype={$ibi:1}
W.eQ.prototype={
n:function(a){return String(a)},
$ieQ:1}
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
return new P.J(J.ll(o.a),J.ll(o.b),q)}},
$ia1:1}
W.an.prototype={
gJ:function(a){var t=this.a.firstChild
if(t==null)throw H.b(P.ax("No elements"))
return t},
gaw:function(a){var t=this.a,s=t.childNodes.length
if(s===0)throw H.b(P.ax("No elements"))
if(s>1)throw H.b(P.ax("More than one element"))
return t.firstChild},
l:function(a,b){this.a.appendChild(u.F.a(b))},
M:function(a,b){var t,s,r,q
u.eh.a(b)
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=0;q<r;++q)s.appendChild(t.firstChild)
return},
af:function(a,b,c){var t,s,r
u.F.a(c)
t=this.a
s=t.childNodes
r=s.length
if(b>r)throw H.b(P.ab(b,0,this.gk(this),null,null))
if(b===r)t.appendChild(c)
else{if(b>=r)return H.o(s,b)
t.insertBefore(c,s[b])}},
j:function(a,b,c){var t,s
H.q(b)
u.F.a(c)
t=this.a
s=t.childNodes
if(b<0||b>=s.length)return H.o(s,b)
t.replaceChild(c,s[b])},
gA:function(a){var t=this.a.childNodes
return new W.bX(t,t.length,H.X(t).i("bX<V.E>"))},
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
bp:function(a){var t=a.parentNode
if(t!=null)t.removeChild(a)},
hc:function(a,b){var t,s
try{t=a.parentNode
J.nv(t,b,a)}catch(s){H.L(s)}return a},
eA:function(a){var t
for(;t=a.firstChild,t!=null;)a.removeChild(t)},
n:function(a){var t=a.nodeValue
return t==null?this.eh(a):t},
fc:function(a,b,c){return a.replaceChild(b,c)},
$im:1}
W.cp.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bg(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.F.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(P.ax("No elements"))},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$iv:1}
W.cq.prototype={$icq:1}
W.cr.prototype={$icr:1}
W.cx.prototype={
gk:function(a){return a.length},
$icx:1}
W.cz.prototype={$icz:1}
W.fa.prototype={}
W.dB.prototype={
W:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
t=W.o_("<table>"+H.a(b)+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.an(s).M(0,new W.an(t))
return s}}
W.fb.prototype={
W:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.W(t.createElement("table"),b,c,d)
t.toString
t=new W.an(t)
r=t.gaw(t)
r.toString
t=new W.an(r)
q=t.gaw(t)
s.toString
q.toString
new W.an(s).M(0,new W.an(q))
return s}}
W.fc.prototype={
W:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.W(t.createElement("table"),b,c,d)
t.toString
t=new W.an(t)
r=t.gaw(t)
s.toString
r.toString
new W.an(s).M(0,new W.an(r))
return s}}
W.cB.prototype={
G:function(a,b){var t,s
a.textContent=null
t=a.content
t.toString
J.kB(t)
s=this.W(a,b,null,null)
a.content.appendChild(s)},
$icB:1}
W.cC.prototype={
cA:function(a,b,c){return a.setSelectionRange(b,c)},
$icC:1}
W.aI.prototype={$iaI:1}
W.b7.prototype={$ib7:1}
W.ff.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bg(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.fY.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(P.ax("No elements"))},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$iv:1}
W.ay.prototype={$iay:1}
W.bA.prototype={
gfs:function(a){var t=new P.a3($.H,u.dL),s=u.c4.a(new W.jg(new P.e4(t,u.bi)))
this.eL(a)
this.fd(a,W.mC(s,u.di))
return t},
fd:function(a,b){return a.requestAnimationFrame(H.cT(u.c4.a(b),1))},
eL:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ibA:1,
$ijf:1}
W.jg.prototype={
$1:function(a){var t=this.a
a=t.$ti.i("1/").a(H.kb(a))
t=t.a
if(t.a!==0)H.D(P.ax("Future already completed"))
t.b3(a)},
$S:65}
W.b8.prototype={$ib8:1}
W.cE.prototype={$icE:1}
W.fo.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bg(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.g5.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(P.ax("No elements"))},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$iv:1}
W.dG.prototype={
n:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
R:function(a,b){var t
if(b==null)return!1
if(u.q.b(b)){t=J.W(b)
t=a.left==t.gbl(b)&&a.top==t.gbv(b)&&a.width==t.gbx(b)&&a.height==t.gbi(b)}else t=!1
return t},
gB:function(a){return W.mf(J.ad(a.left),J.ad(a.top),J.ad(a.width),J.ad(a.height))},
gbi:function(a){return a.height},
gbx:function(a){return a.width}}
W.dS.prototype={
gk:function(a){return a.length},
h:function(a,b){H.q(b)
if(b>>>0!==b||b>=a.length)throw H.b(P.bg(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.q(b)
u.F.a(c)
throw H.b(P.x("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.b(P.x("Cannot resize immutable List."))},
gJ:function(a){if(a.length>0)return a[0]
throw H.b(P.ax("No elements"))},
C:function(a,b){if(b<0||b>=a.length)return H.o(a,b)
return a[b]},
$in:1,
$iZ:1,
$id:1,
$iv:1}
W.fl.prototype={
t:function(a,b){var t,s,r,q,p
u.eA.a(b)
for(t=this.gK(),s=t.length,r=this.a,q=0;q<t.length;t.length===s||(0,H.B)(t),++q){p=t[q]
b.$2(p,r.getAttribute(p))}},
gK:function(){var t,s,r,q,p=this.a.attributes,o=H.h([],u.s)
for(t=p.length,s=u.h9,r=0;r<t;++r){if(r>=p.length)return H.o(p,r)
q=s.a(p[r])
if(q.namespaceURI==null)C.a.l(o,q.name)}return o},
gN:function(a){return this.gK().length===0}}
W.ft.prototype={
h:function(a,b){return this.a.getAttribute(H.r(b))},
j:function(a,b,c){this.a.setAttribute(b,H.r(c))},
gk:function(a){return this.gK().length}}
W.fu.prototype={
a7:function(){var t,s,r,q,p=P.dp(u.N)
for(t=this.a.className.split(" "),s=t.length,r=0;r<s;++r){q=J.ek(t[r])
if(q.length!==0)p.l(0,q)}return p},
cu:function(a){this.a.className=u.cq.a(a).ck(0," ")},
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
W.eD.prototype={}
W.bn.prototype={
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
t=new W.e2(new H.a9(q.i("@<U<1>>").q(q.i("a2<1>")).i("a9<1,2>")),q.i("e2<1>"))
t.seI(P.cy(t.gfE(t),!0,q.c))
for(s=this.a,s=new H.N(s,s.gk(s),s.$ti.i("N<k.E>")),r=this.c,q=q.i("bn<1>");s.m();)t.l(0,new W.bn(s.d,r,!1,q))
q=t.a
q.toString
return new P.ah(q,H.i(q).i("ah<1>")).Y(a,b,c,d)},
u:function(a){return this.Y(a,null,null,null)},
bm:function(a,b,c){return this.Y(a,null,b,c)}}
W.dH.prototype={
a_:function(){var t=this
if(t.b==null)return null
t.dl()
t.b=null
t.sf6(null)
return null},
cl:function(a){if(this.b==null)return;++this.a
this.dl()},
cq:function(){var t=this
if(t.b==null||t.a<=0)return;--t.a
t.dj()},
dj:function(){var t,s=this,r=s.d,q=r!=null
if(q&&s.a<=0){t=s.b
t.toString
u.G.a(r)
if(q)J.nt(t,s.c,r,!1)}},
dl:function(){var t,s=this.d,r=s!=null
if(r){t=this.b
t.toString
u.G.a(s)
if(r)J.nu(t,this.c,s,!1)}},
sf6:function(a){this.d=u.G.a(a)}}
W.js.prototype={
$1:function(a){return this.a.$1(u.B.a(a))},
$S:66}
W.e2.prototype={
l:function(a,b){var t,s,r,q=this
q.$ti.i("U<1>").a(b)
t=q.b
if(t.I(b))return
s=q.a
s=s.gfp(s)
b.toString
r=b.$ti
r.i("~(1)").a(s)
u.M.a(new W.jZ(q,b))
t.j(0,b,W.A(b.a,b.b,s,!1,r.c))},
c3:function(a){var t,s,r
for(t=this.b,s=t.gar(t),r=H.i(s),r=new H.a6(J.y(s.a),s.b,r.i("@<1>").q(r.Q[1]).i("a6<1,2>"));r.m();)r.a.a_()
t.bf(0)
this.a.c3(0)},
seI:function(a){this.a=this.$ti.i("f7<1>").a(a)}}
W.jZ.prototype={
$0:function(){var t=this.a,s=t.b.a8(0,t.$ti.i("U<1>").a(this.b))
if(s!=null)s.a_()
return null},
$S:0}
W.c7.prototype={
er:function(a){var t
if($.fy.a===0){for(t=0;t<262;++t)$.fy.j(0,C.L[t],W.pY())
for(t=0;t<12;++t)$.fy.j(0,C.j[t],W.pZ())}},
aA:function(a){return $.np().F(0,W.db(a))},
ae:function(a,b,c){var t=$.fy.h(0,H.a(W.db(a))+"::"+b)
if(t==null)t=$.fy.h(0,"*::"+b)
if(t==null)return!1
return H.cN(t.$4(a,b,c,this))},
$ias:1}
W.V.prototype={
gA:function(a){return new W.bX(a,this.gk(a),H.X(a).i("bX<V.E>"))},
l:function(a,b){H.X(a).i("V.E").a(b)
throw H.b(P.x("Cannot add to immutable List."))},
af:function(a,b,c){H.X(a).i("V.E").a(c)
throw H.b(P.x("Cannot add to immutable List."))},
V:function(a,b,c,d,e){H.X(a).i("d<V.E>").a(d)
throw H.b(P.x("Cannot setRange on immutable List."))}}
W.dv.prototype={
l:function(a,b){C.a.l(this.a,u.e.a(b))},
aA:function(a){return C.a.dn(this.a,new W.iG(a))},
ae:function(a,b,c){return C.a.dn(this.a,new W.iF(a,b,c))},
$ias:1}
W.iG.prototype={
$1:function(a){return u.e.a(a).aA(this.a)},
$S:32}
W.iF.prototype={
$1:function(a){return u.e.a(a).ae(this.a,this.b,this.c)},
$S:32}
W.e_.prototype={
es:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.bw(0,new W.jX())
s=b.bw(0,new W.jY())
this.b.M(0,t)
r=this.c
r.M(0,C.N)
r.M(0,s)},
aA:function(a){return this.a.F(0,W.db(a))},
ae:function(a,b,c){var t=this,s=W.db(a),r=t.c
if(r.F(0,H.a(s)+"::"+b))return t.d.fq(c)
else if(r.F(0,"*::"+b))return t.d.fq(c)
else{r=t.b
if(r.F(0,H.a(s)+"::"+b))return!0
else if(r.F(0,"*::"+b))return!0
else if(r.F(0,H.a(s)+"::*"))return!0
else if(r.F(0,"*::*"))return!0}return!1},
$ias:1}
W.jX.prototype={
$1:function(a){return!C.a.F(C.j,H.r(a))},
$S:29}
W.jY.prototype={
$1:function(a){return C.a.F(C.j,H.r(a))},
$S:29}
W.fN.prototype={
ae:function(a,b,c){if(this.eo(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.F(0,b)
return!1}}
W.k2.prototype={
$1:function(a){return"TEMPLATE::"+H.a(H.r(a))},
$S:30}
W.fM.prototype={
aA:function(a){var t
if(u.ew.b(a))return!1
t=u.g7.b(a)
if(t&&W.db(a)==="foreignObject")return!1
if(t)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.d.ee(b,"on"))return!1
return this.aA(a)},
$ias:1}
W.bX.prototype={
m:function(){var t=this,s=t.c+1,r=t.b
if(s<r){t.scU(J.bp(t.a,s))
t.c=s
return!0}t.scU(null)
t.c=r
return!1},
gp:function(){return this.d},
scU:function(a){this.d=this.$ti.c.a(a)},
$iS:1}
W.fq.prototype={
dC:function(a,b){return H.D(P.x("You can only attach EventListeners to your own window."))},
$iF:1,
$ijf:1}
W.as.prototype={}
W.fK.prototype={$ioE:1}
W.e9.prototype={
cv:function(a){var t=this,s=new W.ka(t)
t.b=!1
s.$2(a,null)
for(;t.b;){t.b=!1
s.$2(a,null)}},
aR:function(a,b){var t=this.b=!0
if(b!=null?b!==a.parentNode:t)J.ei(a)
else b.removeChild(a)},
fg:function(a,b){var t,s,r,q,p,o=!0,n=null,m=null
try{n=J.nx(a)
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
o=H.ac(t)?!0:!(a.attributes instanceof NamedNodeMap)}catch(q){H.L(q)}s="element unprintable"
try{s=J.z(a)}catch(q){H.L(q)}try{r=W.db(a)
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
o=J.nL(q)
H.r(q)
if(!p.ae(a,o,t.getAttribute(q))){window
p="Removing disallowed attribute <"+H.a(e)+" "+q+'="'+H.a(t.getAttribute(q))+'">'
if(typeof console!="undefined")window.console.warn(p)
t.removeAttribute(q)}}if(u.aW.b(a))n.cv(a.content)},
$iod:1}
W.ka.prototype={
$2:function(a,b){var t,s,r,q,p,o,n=this.a
switch(a.nodeType){case 1:n.fg(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aR(a,b)}t=a.lastChild
for(r=u.F;null!=t;){s=null
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
$S:40}
W.fp.prototype={}
W.fz.prototype={}
W.fA.prototype={}
W.fF.prototype={}
W.fG.prototype={}
W.fO.prototype={}
W.fP.prototype={}
W.fV.prototype={}
W.fW.prototype={}
W.fX.prototype={}
W.fY.prototype={}
P.et.prototype={
dm:function(a){var t=$.n9().b
if(typeof a!="string")H.D(H.bb(a))
if(t.test(a))return a
throw H.b(P.cV(a,"value","Not a valid class token"))},
n:function(a){return this.a7().ck(0," ")},
gA:function(a){var t=this.a7()
return P.jJ(t,t.r,H.i(t).c)},
H:function(a,b,c){var t,s
c.i("0(c)").a(b)
t=this.a7()
s=H.i(t)
return new H.aX(t,s.q(c).i("1(2)").a(b),s.i("@<1>").q(c).i("aX<1,2>"))},
T:function(a,b){return this.H(a,b,u.z)},
gk:function(a){return this.a7().a},
l:function(a,b){H.r(b)
this.dm(b)
return H.cN(this.h3(0,new P.hL(b)))},
a8:function(a,b){var t,s
this.dm(b)
t=this.a7()
s=t.a8(0,b)
this.cu(t)
return s},
C:function(a,b){return this.a7().C(0,b)},
h3:function(a,b){var t,s
u.ch.a(b)
t=this.a7()
s=b.$1(t)
this.cu(t)
return s}}
P.hL.prototype={
$1:function(a){return u.cq.a(a).l(0,this.a)},
$S:44}
P.eE.prototype={
gab:function(){var t=this.b,s=H.i(t)
return new H.aG(new H.ag(t,s.i("t(k.E)").a(new P.iq()),s.i("ag<k.E>")),s.i("p(k.E)").a(new P.ir()),s.i("aG<k.E,p>"))},
j:function(a,b,c){var t
H.q(b)
u.h.a(c)
t=this.gab()
J.nH(t.b.$1(J.aW(t.a,b)),c)},
sk:function(a,b){var t=J.ae(this.gab().a)
if(b>=t)return
else if(b<0)throw H.b(P.b2("Invalid list length"))
this.hb(0,b,t)},
l:function(a,b){this.b.a.appendChild(u.h.a(b))},
V:function(a,b,c,d,e){u.bq.a(d)
throw H.b(P.x("Cannot setRange on filtered list"))},
hb:function(a,b,c){var t=this.gab()
t=H.ou(t,b,t.$ti.i("d.E"))
C.a.t(P.cm(H.oA(t,c-b,H.i(t).i("d.E")),!0,u.z),new P.is())},
bf:function(a){J.kB(this.b.a)},
af:function(a,b,c){var t,s
u.h.a(c)
if(b===J.ae(this.gab().a))this.b.a.appendChild(c)
else{t=this.gab()
s=t.b.$1(J.aW(t.a,b))
s.parentNode.insertBefore(c,s)}},
gk:function(a){return J.ae(this.gab().a)},
h:function(a,b){var t
H.q(b)
t=this.gab()
return t.b.$1(J.aW(t.a,b))},
gA:function(a){var t=P.cm(this.gab(),!1,u.h)
return new J.aC(t,t.length,H.C(t).i("aC<1>"))}}
P.iq.prototype={
$1:function(a){return u.h.b(u.F.a(a))},
$S:25}
P.ir.prototype={
$1:function(a){return u.h.a(u.F.a(a))},
$S:45}
P.is.prototype={
$1:function(a){return J.ei(a)},
$S:5}
P.dm.prototype={$idm:1}
P.iz.prototype={
$1:function(a){var t,s,r,q=this.a
if(q.I(a))return q.h(0,a)
if(u.f.b(a)){t={}
q.j(0,a,t)
for(q=J.y(a.gK());q.m();){s=q.gp()
t[s]=this.$1(a.h(0,s))}return t}else if(u.R.b(a)){r=[]
q.j(0,a,r)
C.a.M(r,J.kC(a,this,u.z))
return r}else return P.ea(a)},
$S:5}
P.ke.prototype={
$1:function(a){var t
u.Z.a(a)
t=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.po,a,!1)
P.kX(t,$.kz(),a)
return t},
$S:5}
P.kf.prototype={
$1:function(a){return new this.a(a)},
$S:5}
P.kj.prototype={
$1:function(a){return new P.aF(a)},
$S:36}
P.kk.prototype={
$1:function(a){return new P.u(a,u.A)},
$S:50}
P.kl.prototype={
$1:function(a){return new P.Q(a)},
$S:33}
P.Q.prototype={
h:function(a,b){if(typeof b!="string"&&typeof b!="number")throw H.b(P.b2("property is not a String or num"))
return P.kd(this.a[b])},
j:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.b(P.b2("property is not a String or num"))
this.a[b]=P.ea(c)},
R:function(a,b){if(b==null)return!1
return b instanceof P.Q&&this.a===b.a},
w:function(a){if(typeof a!="string"&&!0)throw H.b(P.b2("property is not a String or num"))
return a in this.a},
c5:function(a){delete this.a[a]},
n:function(a){var t,s
try{t=String(this.a)
return t}catch(s){H.L(s)
t=this.ek(0)
return t}},
S:function(a,b){var t,s=this.a
if(b==null)t=null
else{t=H.C(b)
t=P.cm(new H.O(b,t.i("@(1)").a(P.ku()),t.i("O<1,@>")),!0,u.z)}return P.kd(s[a].apply(s,t))},
gB:function(a){return 0}}
P.aF.prototype={
dr:function(a){var t=P.ea(null),s=H.C(a)
s=P.cm(new H.O(a,s.i("@(1)").a(P.ku()),s.i("O<1,@>")),!0,u.z)
return P.kd(this.a.apply(t,s))}}
P.u.prototype={
cL:function(a){var t=this,s=a<0||a>=t.gk(t)
if(s)throw H.b(P.ab(a,0,t.gk(t),null,null))},
h:function(a,b){if(typeof b=="number"&&b===C.e.bt(b))this.cL(H.q(b))
return this.$ti.c.a(this.cC(0,b))},
j:function(a,b,c){this.$ti.c.a(c)
if(typeof b=="number"&&b===C.e.bt(b))this.cL(H.q(b))
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
C.a.M(r,H.am(d,e,p,H.X(d).i("k.E")).hi(0,s))
q.S("splice",r)},
$in:1,
$id:1,
$iv:1}
P.dO.prototype={}
P.J.prototype={
n:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
R:function(a,b){if(b==null)return!1
return b instanceof P.J&&this.a==b.a&&this.b==b.b},
gB:function(a){var t=J.ad(this.a),s=J.ad(this.b)
return P.me(P.dN(P.dN(0,t),s))},
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
P.fI.prototype={
gdW:function(a){return this.a+this.c},
gds:function(a){return this.b+this.d},
n:function(a){var t=this
return"Rectangle ("+t.a+", "+t.b+") "+t.c+" x "+t.d},
R:function(a,b){var t,s,r,q=this
if(b==null)return!1
if(u.q.b(b)){t=q.a
s=J.W(b)
if(t===s.gbl(b)){r=q.b
t=r===s.gbv(b)&&t+q.c===s.gdW(b)&&r+q.d===s.gds(b)}else t=!1}else t=!1
return t},
gB:function(a){var t=this,s=t.a,r=C.e.gB(s),q=t.b,p=C.e.gB(q)
s=C.e.gB(s+t.c)
q=C.e.gB(q+t.d)
return P.me(P.dN(P.dN(P.dN(P.dN(0,r),p),s),q))}}
P.by.prototype={
gbl:function(a){return this.a},
gbv:function(a){return this.b},
gbx:function(a){return this.c},
gbi:function(a){return this.d}}
P.cv.prototype={$icv:1}
P.en.prototype={
a7:function(){var t,s,r,q,p=this.a.getAttribute("class"),o=P.dp(u.N)
if(p==null)return o
for(t=p.split(" "),s=t.length,r=0;r<s;++r){q=J.ek(t[r])
if(q.length!==0)o.l(0,q)}return o},
cu:function(a){this.a.setAttribute("class",a.ck(0," "))}}
P.l.prototype={
gdv:function(a){return new P.en(a)},
gdu:function(a){return new P.eE(a,new W.an(a))},
W:function(a,b,c,d){var t,s,r,q,p,o=H.h([],u.eO)
C.a.l(o,W.md(null))
C.a.l(o,W.mi())
C.a.l(o,new W.fM())
c=new W.e9(new W.dv(o))
t='<svg version="1.1">'+H.a(b)+"</svg>"
o=document
s=o.body
r=(s&&C.m).fI(s,t,c)
q=o.createDocumentFragment()
r.toString
o=new W.an(r)
p=o.gaw(o)
for(;o=p.firstChild,o!=null;)q.appendChild(o)
return q},
cd:function(a,b,c,d,e){throw H.b(P.x("Cannot invoke insertAdjacentHtml on SVG."))},
gdL:function(a){return new W.az(a,"click",!1,u.C)},
gdO:function(a){return new W.az(a,"mousedown",!1,u.C)},
gdP:function(a){return new W.az(a,"touchstart",!1,u.du)},
$il:1}
Z.hP.prototype={
gdN:function(a){var t,s=this
if(s.z==null)s.sd7(P.cy(new Z.hU(s),!0,u.D))
t=s.z
t.toString
return new P.ah(t,H.i(t).i("ah<1>"))},
gdM:function(a){var t,s=this
if(s.ch==null)s.sd3(P.cy(new Z.hT(s),!0,u.D))
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
C.h.bd(p,C.h.aM(p,"pointer-events"),s,"")
t.c=t.b=t.a=t.d=null}if(!c&&b!=null)Z.oZ(q,b)
p=q.ch
if(p!=null)p.l(0,Z.lE(a,$.a_,c))
if(a!=null)a.preventDefault()
if(u.V.b(a))q.fm($.a_.b)
p=$.a_
J.bM(p.b).a8(0,q.r)
p=document.body
p.classList.remove("dnd-drag-occurring")}q.fe()},
eT:function(a,b){return this.ak(a,b,!1)},
fm:function(a){var t=J.nA(a),s=t.$ti,r=s.i("~(1)").a(new Z.hR())
u.M.a(null)
P.o1(new Z.hS(W.A(t.a,t.b,r,!1,s.c)),u.P)},
fe:function(){C.a.t(this.cy,new Z.hQ())
Z.m8()
$.a_=null},
eB:function(){var t,s
window.getSelection().removeAllRanges()
try{t=document.activeElement
if(u.cJ.b(t))J.lk(t,0,0)
else if(u.p.b(t))J.lk(t,0,0)}catch(s){H.L(s)}},
sd7:function(a){this.z=u.c6.a(a)},
sd3:function(a){this.ch=u.c6.a(a)},
sbO:function(a){this.cx=u.O.a(a)}}
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
$S:55}
Z.bS.prototype={}
Z.jn.prototype={
cR:function(a){u.H.a(a)
return a},
sbX:function(a,b){this.e=u.H.a(b)}}
Z.eo.prototype={
ed:function(a){Z.nM(new Z.h8(this,u.H.a(a)))},
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
s=P.h_(C.d.dV(t.marginLeft,"px",""))
this.c=s==null?0:s
s=P.h_(C.d.dV(t.marginTop,"px",""))
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
$1:function(a){H.kb(a)
if($.h2){$.ln.$0()
$.h2=!1}return null},
$S:56}
Z.ba.prototype={
bF:function(a){this.ci()
C.a.t(this.c.cx,new Z.jo())},
fU:function(){var t=this.b,s=window,r=u.dj.a(new Z.jp(this))
u.M.a(null)
C.a.l(t,W.A(s,"keydown",r,!1,u.cf))
C.a.l(t,W.A(window,"blur",u.Q.a(new Z.jq(this)),!1,u.B))},
cc:function(a,b){var t,s=this
u.H.a(b)
t=s.c
t=new Z.jn(t.a,u.h.a(W.M(a.currentTarget)),b,t.b,!1,!1)
t.sbX(0,b)
$.a_=t
s.cg()
s.cf()
s.ce()
s.fU()},
cb:function(a,b,c){var t,s,r,q,p,o,n,m,l="pointer-events",k=u.H
k.a(b)
k.a(c)
t=$.a_
t.sbX(0,t.cR(b))
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
n=U.d8(r.a)
r.cz(U.d8(q).E(0,n))
q=r.a.style
q.toString
r.d=q.getPropertyValue(C.h.aM(q,l))
r=r.a.style
r.toString
C.h.bd(r,C.h.aM(r,l),"none","")}k=t.z
if(k!=null)k.l(0,Z.lE(a,$.a_,!1))
k=$.a_
J.bM(k.b).l(0,t.r)
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
s.visibility="visible"}Z.p_(t,m)}},
ca:function(a,b,c,d){var t=u.H
t.a(c)
t.a(d)
t=$.a_
t.sbX(0,t.cR(c))
this.c.eT(a,this.d_(d,b))},
hd:function(a){var t=this.b
C.a.t(t,new Z.jr())
C.a.sk(t,0)},
d0:function(a){var t,s
u.H.a(a)
t=document
s=t.elementFromPoint(J.cU(a.a),J.cU(a.b))
return s==null?t.body:s},
d_:function(a,b){var t,s,r=this
u.H.a(a)
if(b==null)b=r.d0(a)
t=r.c.b
if(t!=null){s=t.a
s=s!=null&&H.ac(s.contains(u.F.a(b)))}else s=!1
if(s){s=t.a.style
s.visibility="hidden"
b=r.d0(a)
t=t.a.style
t.visibility="visible"}return r.dc(a,b)},
eN:function(a){return this.d_(a,null)},
dc:function(a,b){u.H.a(a)
return u.h.b(b)&&(b.shadowRoot||b.webkitShadowRoot)!=null&&H.ac(b.hasAttribute("dnd-retarget"))?this.dc(a,(b.shadowRoot||b.webkitShadowRoot).elementFromPoint(J.cU(a.a),J.cU(a.b))):b},
bR:function(a){var t=u.h.b(a)&&J.nF(a,this.c.f)
if(t)return!1
return!0}}
Z.jo.prototype={
$1:function(a){var t=u.h.a(a).style
t.toString
C.h.bd(t,C.h.aM(t,"touch-action"),"none","")
return"none"},
$S:59}
Z.jp.prototype={
$1:function(a){u.cf.a(a)
if(a.keyCode===27)this.a.c.ak(a,null,!0)},
$S:61}
Z.jq.prototype={
$1:function(a){this.a.c.ak(a,null,!0)},
$S:3}
Z.jr.prototype={
$1:function(a){return u.b_.a(a).a_()},
$S:22}
Z.fQ.prototype={
ci:function(){C.a.t(this.c.cx,new Z.k9(this))},
cg:function(){var t=document,s=u.gn.a(new Z.k7(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"touchmove",s,!1,u.T))},
cf:function(){var t=document,s=u.gn.a(new Z.k6(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"touchend",s,!1,u.T))},
ce:function(){var t=document,s=u.gn.a(new Z.k5(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"touchcancel",s,!1,u.T))},
fZ:function(a){u.H.a(a).E(0,$.a_.c)
return!1}}
Z.k9.prototype={
$1:function(a){var t=this.a,s=J.nC(u.h.a(a)),r=s.$ti,q=r.i("~(1)").a(new Z.k8(t))
u.M.a(null)
C.a.l(t.a,W.A(s.a,s.b,q,!1,r.c))},
$S:17}
Z.k8.prototype={
$1:function(a){var t,s
u.T.a(a)
if($.a_!=null)return
t=a.touches
if(t.length>1)return
s=this.a
if(!s.bR(W.M(t[0].target)))return
t=a.touches
if(0>=t.length)return H.o(t,0)
t=t[0]
s.cc(a,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),u.H))},
$S:12}
Z.k7.prototype={
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
r.a.cb(a,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),s),new P.J(C.c.D(t.clientX),C.c.D(t.clientY),s))
a.preventDefault()},
$S:12}
Z.k6.prototype={
$1:function(a){var t,s
u.T.a(a)
t=a.changedTouches
if(0>=t.length)return H.o(t,0)
t=t[0]
s=u.H
this.a.ca(a,null,new P.J(C.c.D(t.pageX),C.c.D(t.pageY),s),new P.J(C.c.D(t.clientX),C.c.D(t.clientY),s))},
$S:12}
Z.k5.prototype={
$1:function(a){this.a.c.ak(u.T.a(a),null,!0)},
$S:12}
Z.fE.prototype={
ci:function(){C.a.t(this.c.cx,new Z.jN(this))},
cg:function(){var t=document,s=u.a6.a(new Z.jL(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"mousemove",s,!1,u.V))},
cf:function(){var t=document,s=u.a6.a(new Z.jK(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"mouseup",s,!1,u.V))},
ce:function(){}}
Z.jN.prototype={
$1:function(a){var t=this.a,s=J.nB(u.h.a(a)),r=s.$ti,q=r.i("~(1)").a(new Z.jM(t))
u.M.a(null)
C.a.l(t.a,W.A(s.a,s.b,q,!1,r.c))},
$S:17}
Z.jM.prototype={
$1:function(a){var t,s
u.V.a(a)
if($.a_!=null)return
if(a.button!==0)return
t=this.a
if(!t.bR(W.M(a.target)))return
s=u.h.a(W.M(a.target))
if(!(u.d2.b(s)||u.p.b(s)||u.cJ.b(s)||u.hb.b(s)||u.fW.b(s)))a.preventDefault()
t.cc(a,new P.J(a.pageX,a.pageY,u.H))},
$S:2}
Z.jL.prototype={
$1:function(a){var t
u.V.a(a)
t=u.H
this.a.cb(a,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:2}
Z.jK.prototype={
$1:function(a){var t
u.V.a(a)
t=u.H
this.a.ca(a,W.M(a.target),new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:2}
Z.fH.prototype={
ci:function(){C.a.t(this.c.cx,new Z.jT(this))},
cg:function(){var t=document,s=u.Q.a(new Z.jR(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"pointermove",s,!1,u.B))},
cf:function(){var t=document,s=u.Q.a(new Z.jQ(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"pointerup",s,!1,u.B))},
ce:function(){var t=document,s=u.Q.a(new Z.jP(this))
u.M.a(null)
C.a.l(this.b,W.A(t,"pointercancel",s,!1,u.B))}}
Z.jT.prototype={
$1:function(a){var t,s,r,q
u.h.a(a)
t=this.a
a.toString
s=new W.i1(a).h(0,"pointerdown")
r=s.$ti
q=r.i("~(1)").a(new Z.jS(t))
u.M.a(null)
C.a.l(t.a,W.A(s.a,s.b,q,!1,r.c))},
$S:17}
Z.jS.prototype={
$1:function(a){var t,s
u.et.a(a)
if($.a_!=null)return
if(a.button!==0)return
t=this.a
if(!t.bR(W.M(a.target)))return
s=u.h.a(W.M(a.target))
if(!(u.d2.b(s)||u.p.b(s)||u.cJ.b(s)||u.hb.b(s)||u.fW.b(s)))a.preventDefault()
t.cc(a,new P.J(a.pageX,a.pageY,u.H))},
$S:3}
Z.jR.prototype={
$1:function(a){var t
u.et.a(a)
t=u.H
this.a.cb(a,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:3}
Z.jQ.prototype={
$1:function(a){var t
u.et.a(a)
t=u.H
this.a.ca(a,null,new P.J(a.pageX,a.pageY,t),new P.J(a.clientX,a.clientY,t))},
$S:3}
Z.jP.prototype={
$1:function(a){this.a.c.ak(a,null,!0)},
$S:3}
Z.eC.prototype={
gan:function(a){var t,s=this
if(s.d==null)s.sd4(P.cy(new Z.hW(s),!0,u.k))
t=s.d
t.toString
return new P.ah(t,H.i(t).i("ah<1>"))},
gh4:function(a){var t,s=this
if(s.e==null)s.sd6(P.cy(new Z.hY(s),!0,u.k))
t=s.e
t.toString
return new P.ah(t,H.i(t).i("ah<1>"))},
gao:function(a){var t,s=this
if(s.f==null)s.sd5(P.cy(new Z.hX(s),!0,u.k))
t=s.f
t.toString
return new P.ah(t,H.i(t).i("ah<1>"))},
gap:function(a){var t,s=this
if(s.r==null)s.sd8(P.cy(new Z.hZ(s),!0,u.k))
t=s.r
t.toString
return new P.ah(t,H.i(t).i("ah<1>"))},
f4:function(a){var t,s,r,q,p=this
u.h.a(a)
t=p.y
s=$.nm()
r=s.a
s=H.i(s)
q=s.i("~(1)").a(p.geU())
u.M.a(null)
C.a.l(t,W.A(a,r,q,!1,s.c))
s=$.no()
q=H.i(s)
C.a.l(t,W.A(a,s.a,q.i("~(1)").a(p.geY()),!1,q.c))
q=$.nn()
s=H.i(q)
C.a.l(t,W.A(a,q.a,s.i("~(1)").a(p.geW()),!1,s.c))
s=$.nl()
q=H.i(s)
C.a.l(t,W.A(a,s.a,q.i("~(1)").a(p.gf_()),!1,q.c))},
eV:function(a){var t,s
u.V.a(a)
t=a.relatedTarget
if(W.M(t)!=null&&H.ac(u.h.a(W.M(a.currentTarget)).contains(u.F.a(W.M(t)))))return
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aO)if(t.a==$.eA)t=t.b||$.ew
else t=!1
else t=!1
if(t){t=this.d
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.av(s.e))}J.bM(u.h.a(W.M(a.currentTarget))).l(0,"dnd-over")}else J.bM(u.h.a(W.M(a.currentTarget))).l(0,"dnd-invalid")},
eZ:function(a){var t,s
u.V.a(a)
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aO)if(t.a==$.eA)t=t.b||$.ew
else t=!1
else t=!1
if(t){t=this.e
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.av(s.e))}}},
eX:function(a){var t,s
u.V.a(a)
t=a.relatedTarget
if(W.M(t)!=null&&H.ac(u.h.a(W.M(a.currentTarget)).contains(u.F.a(W.M(t)))))return
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aO)if(t.a==$.eA)t=t.b||$.ew
else t=!1
else t=!1
if(t){t=this.f
if(t!=null){u.h.a(W.M(a.currentTarget))
t.l(0,new Z.av(s.e))}J.bM(u.h.a(W.M(a.currentTarget))).a8(0,"dnd-over")}else J.bM(u.h.a(W.M(a.currentTarget))).a8(0,"dnd-invalid")},
f0:function(a){var t,s
u.V.a(a)
t=this.a
s=$.a_
s.toString
u.h.a(W.M(a.currentTarget))
if(!$.aO)if(t.a==$.eA)t=t.b||$.ew
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
sbO:function(a){this.x=u.O.a(a)}}
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
Z.el.prototype={}
U.aL.prototype={
gU:function(){var t=this.c
return H.a(t.id.c)+"-"+H.a(t.b)+"-"+H.a(this.b)},
bA:function(){return H.a(this.Z())+H.a(this.e)},
ax:function(a,b){var t,s=this,r=s.b
if(r!=null){t=s.c
if(r>=t.cx)t.cx=r+1}else s.b=s.c.cx++},
aJ:function(a,b,c){this.b=b.b
this.d=b.d
this.e=b.e},
dE:function(){var t,s,r,q=this,p=document.createElement("div")
p.innerText=q.bA()
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
$0:function(){this.b.innerText=this.a.bA()},
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
this.a.aI(C.c.c8(r+q+o),C.c.c8(n+m+p),this.b)},
$S:2}
U.bW.prototype={
ga2:function(a){return this.f},
Z:function(){return U.d1(this.r.c)},
au:function(a){var t,s,r,q=this
if(a==null){t=new U.bt(q.c.id)
t.c=new U.af(t,q.f,H.h([],u.U))
q.r=t}if(P.h_(a)==null&&!C.a.F(H.h(["true","false"],u.s),a))throw H.b(P.cV(a,"valueString","Expression values can only be set to numbers or booleans."))
t=new U.bt(q.c.id)
s=u.U
t.c=new U.af(t,q.f,H.h([],s))
q.r=t
r=new U.af(t,q.f,H.h([],s))
r.b=a
q.r.c=r},
as:function(){return this.x},
aY:function(a){this.x=a},
aB:function(a,b,c){var t,s,r=this,q=new U.bW(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,b)
q.aJ(b,r,c)
q.x=r.x
q.f=r.f
t=r.r
s=new U.bt(null)
s.a=t.a
t=t.c
if(t!=null)s.c=U.lK(s,t)
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
C.b.G(t,"")
C.b.a4(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">\n          <div class="nt-param-label">'+H.a(n.d)+':</div>\n        </div>\n        <div class="nt-param-row">\n          <div id="nt-expression-'+n.gU()+'" class="nt-expression-root"></div>\n        </div>\n      </div>\n      <button class="nt-param-confirm" type="button">OK</button>\n      <button class="nt-param-cancel" type="button">Cancel</button>\n    ')
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
new W.aT(p.a(new W.ao(s.querySelectorAll(m),q)),!1,k,o).u(new U.ib(n,r,i,c))
H.aU(j,j,"T",l)
new W.aT(p.a(new W.ao(s.querySelectorAll(m),q)),!1,"mousedown",o).u(new U.ic())
H.aU(j,j,"T",l)
new W.aT(p.a(new W.ao(s.querySelectorAll(m),q)),!1,"mouseup",o).u(new U.id())
H.aU(j,j,"T",l)
new W.aT(p.a(new W.ao(s.querySelectorAll(".nt-param-cancel"),q)),!1,k,o).u(new U.ie(r,i))
o=n.r
o.b=s.querySelector("#nt-expression-"+n.gU())
o.co()}}
U.ia.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aU(t,t,"T","querySelectorAll")
s=new W.ao(s.querySelectorAll(".nt-pulldown-menu"),u.W)
s.t(s,new U.i9())},
$S:2}
U.i9.prototype={
$1:function(a){return J.ei(u.h.a(a))},
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
r=U.d0(t)
s=t.c
s.id.P(new U.bq(s.b,s.c,t.b,t.f,U.d1(t.r.c),r))
return!1},
$S:10}
U.ic.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aU(t,t,"T","querySelectorAll")
s=new W.ao(s.querySelectorAll(".nt-expression.empty"),u.W)
s.t(s,new U.i8())},
$S:2}
U.i8.prototype={
$1:function(a){return J.bM(u.h.a(a)).l(0,"warn")},
$S:26}
U.id.prototype={
$1:function(a){var t,s
u.V.a(a)
t=u.h
s=document
H.aU(t,t,"T","querySelectorAll")
s=new W.ao(s.querySelectorAll(".nt-expression.empty"),u.W)
s.t(s,new U.i7())},
$S:2}
U.i7.prototype={
$1:function(a){return J.bM(u.h.a(a)).a8(0,"warn")},
$S:26}
U.ie.prototype={
$1:function(a){u.V.a(a)
this.a.a_()
this.b.classList.remove("show")},
$S:2}
U.dh.prototype={
ga2:function(a){return"int"},
aB:function(a,b,c){var t=new U.dh(new U.a4(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],u.s)),null,b)
t.aJ(b,this,c)
t.cF(b,this,c)
return t}}
U.c_.prototype={
Z:function(){var t,s=this.f
if(s==null)return""
t=C.c.hk(s,1)
return C.d.fR(t,".0")?C.d.aa(t,0,t.length-2):t},
au:function(a){return this.f=U.bL(a,0)},
as:function(){var t=this.r
return t==null?"":C.c.n(t)},
aY:function(a){return this.r=U.bL(a,null)},
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
C.b.G(t,"")
C.b.a4(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">'+('      <div class="nt-param-name">'+H.a(m.d)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+m.gU()+'" type="number" step="'+H.a(m.y)+'" value="'+H.a(m.f)+'">\n        <span class="nt-param-unit">'+H.a(m.e)+"</span>\n      </div>\n    ")+'</div>\n      </div>\n      <button class="nt-param-confirm" type="button">OK</button>\n      <button class="nt-param-cancel" type="button">Cancel</button>\n    ')
k="#nt-param-label-"+m.gU()
s=document
r=u.a.a(s.querySelector(k))
q=u.p.a(s.querySelector("#nt-param-"+m.gU()))
k=u.h
H.aU(k,k,"T",l)
p=u.W
o=u.r
n=u.I
new W.aT(o.a(new W.ao(s.querySelectorAll(".nt-param-confirm"),p)),!1,"click",n).u(new U.iK(m,q,j,c))
H.aU(k,k,"T",l)
new W.aT(o.a(new W.ao(s.querySelectorAll(".nt-param-cancel"),p)),!1,"click",n).u(new U.iL(j))
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
if(t!=null)q.a.f=U.bL(t.value,0)
q.c.classList.remove("show")
q.d.$0()
t=q.a
s=U.d0(t)
r=t.c
r.id.P(new U.bq(r.b,r.c,t.b,t.ga2(t),t.f,s))},
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
$1:function(a){J.ej(this.a,this.b.value)},
$S:3}
U.iN.prototype={
$1:function(a){J.ej(this.a,this.b.value)},
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
C.b.G(t,"")
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
q.f=U.bL(r.b.value,0)
r.c.classList.remove("show")
r.d.$0()
t=U.d0(q)
s=q.c
s.id.P(new U.bq(s.b,s.c,q.b,"range",q.f,t))
a.stopPropagation()},
$S:3}
U.iR.prototype={
$1:function(a){J.ej(this.a,this.b.value)},
$S:3}
U.bj.prototype={
gfL:function(){var t=this.b
return t==null||t===""?this.a:t}}
U.cw.prototype={
ga2:function(a){return"select"},
Z:function(){var t=this.f
return t==null?"":t},
au:function(a){this.f=a},
as:function(){return this.r},
aY:function(a){this.r=a},
bA:function(){return H.a(this.gea())+H.a(this.e)+" \u25be"},
gea:function(){var t=this.y,s=H.C(t),r=new H.ag(t,s.i("t(1)").a(new U.iT(this)),s.i("ag<1>"))
if(r.gk(r)===1)return r.C(0,0).gfL()
else return this.f},
eq:function(a,b,c){var t,s=this
s.r=b.r
s.x=b.x
C.a.t(b.y,new U.iS(s))
if(!c){t=b.f
s.f=t==null?s.r:t}},
aB:function(a,b,c){return U.ot(b,this,c)},
aH:function(){switch(this.x){case"always-quote":return!0
case"never-quote":return!1
case"smart-quote":default:return P.h_(this.f)==null&&!C.a.F(H.h(["true","false"],u.s),this.f)}},
aI:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c.id,f=g.r
f.classList.add("show")
t=g.x
g=t.style
s=""+b+"px"
g.top=s
t.classList.add("small")
C.b.G(t,"")
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
C.b.G(j,i==null||i===""?l.a:i)
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
s=U.d0(t)
r=t.c
r.id.P(new U.bq(r.b,r.c,t.b,"select",t.f,s))
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
C.b.G(t,"")
j=l.f
if(j==null)j=""
r=new P.cj().dA(j)
C.b.a4(t,'      <div class="nt-param-table">\n        <div class="nt-param-row">'+('      <input class="nt-param-input" id="nt-param-'+l.gU()+'" type="text" value="'+r+'">\n      <span class="nt-param-unit">'+H.a(l.e)+"</span>\n    ")+'</div>\n      </div>\n      <button class="nt-param-confirm" type="button">OK</button>\n      <button class="nt-param-cancel" type="button">Cancel</button>\n    ')
j="#nt-param-label-"+l.gU()
s=document
q=u.a.a(s.querySelector(j))
p=u.p.a(s.querySelector("#nt-param-"+l.gU()))
j=u.h
H.aU(j,j,"T",k)
o=u.W
n=u.r
m=u.I
new W.aT(n.a(new W.ao(s.querySelectorAll(".nt-param-confirm"),o)),!1,"click",m).u(new U.iX(l,p,i,c))
H.aU(j,j,"T",k)
new W.aT(n.a(new W.ao(s.querySelectorAll(".nt-param-cancel"),o)),!1,"click",m).u(new U.iY(i))
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
s=U.d0(t)
r=t.c
r.id.P(new U.bq(r.b,r.c,t.b,"text",t.f,s))},
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
$1:function(a){J.ej(this.a,this.b.value)},
$S:3}
U.j_.prototype={
$1:function(a){J.ej(this.a,this.b.value)},
$S:3}
U.h9.prototype={
a9:function(a){var t,s,r,q
try{s=this.a
if(s.length===0)return 0
r=H.C(s)
r=new H.O(s,r.i("e(1)").a(new U.hb(a)),r.i("O<1,e>")).bo(0,new U.hc())
return r}catch(q){t=H.L(q)
P.ef("here is the fail "+H.a(J.z(t)))
throw q}},
a3:function(a){var t,s,r,q
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=t[r].a3(a)
if(q!=null)return q}return null},
am:function(a,b){var t,s,r,q,p,o=this
u.i.a(b)
t=o.a
H.C(t).i("d<1>").a(b)
if(!!t.fixed$length)H.D(P.x("insertAll"))
P.kM(a,0,t.length,"index")
s=!u.X.b(b)?J.nK(b):b
r=J.ae(s)
C.a.sk(t,t.length+r)
if(typeof a!=="number")return a.v()
q=a+r
C.a.V(t,q,t.length,t,a)
C.a.ec(t,a,q,s)
t=J.ap(b)
if(t.gk(b)>0){p=t.gaD(b).fy
p=!(p==null?!0:!p)}else p=!1
if(p){p=o.a
o.sc2(H.am(p,0,a+t.gk(b),H.C(p).c).aq(0))}o.cn()},
dT:function(a){var t=this.a,s=H.C(t).c,r=H.am(t,a,null,s)
this.sc2(H.am(t,0,a,s).aq(0))
this.cn()
return r},
sc2:function(a){this.a=u.cG.a(a)}}
U.hb.prototype={
$1:function(a){u.bz.a(a)
return a.a9(this.a)},
$S:43}
U.hc.prototype={
$2:function(a,b){var t,s
H.q(a)
H.q(b)
t=a
s=b
if(typeof t!=="number")return t.v()
if(typeof s!=="number")return H.a0(s)
return t+s},
$S:15}
U.cY.prototype={
sav:function(a){this.r=u.i.a(a)}}
U.cZ.prototype={
c0:function(a,b){var t,s,r,q,p,o,n=this
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
U.aq.prototype={
gaS:function(){var t=this.go
return t==="starter"||t==="anywhere"},
bg:function(a,b){var t,s,r,q,p=this,o=U.lp(p.id,p.b,p.d,b)
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
t=new H.O(r,t.i("e(1)").a(new U.hk(a)),t.i("O<1,e>")).bo(0,new U.hl())
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
throw H.b(P.bV("Attribute with given ID not found on block: "+H.a(b)))},
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
m=new U.fe(p,new U.hi(d,n))
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
for(s=d.cy,s=H.am(s,1,null,H.C(s).c),s=new H.N(s,s.gk(s),s.$ti.i("N<aa.E>"));s.m();){f=s.d.dD(d.k1,d,null)
d.r1.appendChild(f)}e=t.createElement("div")
e.classList.add("nt-clause-footer")
t=r+"-color"
e.classList.add(t)
t=d.db
if(t!=null){s=e.style
s.backgroundColor=t}d.r1.appendChild(e)}U.kG(d,d.r1,new U.hj(d))
return d.r1},
e1:function(){var t,s,r,q,p=this,o=new P.aS(""),n=p.y
if(n!=null&&C.d.e0(n).length!==0){n=H.a(p.y)+"\n"
o.a=n
o.a=n+"\n"}n=p.k2
t=n.b==="workspace-chain"&&n.e===0
s=p.id
if(t){r=C.a.h(s.ch,n.a)
n=s.y
n.c9(o,0,r.a)
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
bD:function(a){var t,s,r=this
U.lC(r,u.D.a(a))
t=H.h([],u.u)
C.a.l(t,r)
C.a.M(t,r.k2.r)
U.hs(r.k1.e,t,!0,null)
s=r.id
s.dU(r.k2)
s.dG()},
c7:function(a){var t,s,r,q=this
u.D.a(a)
$.aO=!0
$.ez=$.ex=$.ey=!1
t=q.id
t.al()
t.a5()
s=t.k3
if(s==null)return
t.sX(u.i.a(null))
r=q.k2
switch(r.b){case"workspace-chain":if(r.e===0)t.dB(s,$.lA,$.lB)
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
bs:function(){var t,s,r
for(t=this.cy,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)t[r].hf()},
br:function(){var t,s,r,q,p,o=this,n=o.r2
n.toString
C.b.G(n,"")
o.e1()
n=o.rx
if(n!=null)o.r2.appendChild(n.a)
for(n=o.cy,t=n.length,s=0;s<n.length;n.length===t||(0,H.B)(n),++s)for(r=n[s].a,q=r.length,p=0;p<r.length;r.length===q||(0,H.B)(r),++p)r[p].br()},
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
$S:48}
U.hl.prototype={
$2:function(a,b){H.q(a)
H.q(b)
if(typeof a!=="number")return a.v()
if(typeof b!=="number")return H.a0(b)
return a+b},
$S:15}
U.hi.prototype={
$1:function(a){var t=this.a
t.ch=a?"shown":"hidden"
this.b.classList.toggle("nt-block-properties-hidden")
t.id.P(U.cc(t))},
$S:74}
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
m=new U.cY()
s=t.a(H.am(s,n,null,H.C(s).c))
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
r=H.am(r,n,null,H.C(r).c)
p.toString
t.a(r)
p.f=p.e=p.d=p.c=p.b=p.a=null
p.a=o
p.b="workspace-chain"
p.e=s
p.sav(r)
q.bs()}},
O:function(){var t,s,r,q,p,o=this
o.x.classList.remove("nt-drag-over")
for(t=o.a,s=t.length,r=!1,q=0;q<t.length;t.length===s||(0,H.B)(t),++q){p=t[q].O()
r=r||p}if(o.y&&!r){o.x.classList.add("nt-drag-over")
r=!0}return r},
a5:function(){var t,s,r
this.x.classList.remove("nt-drag-over")
this.y=!1
for(t=this.a,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)t[r].a5()},
cn:function(){var t,s,r,q,p,o,n,m=this
for(t=u.i,s=0;r=m.a,s<r.length;s=n){q=r[s]
p=q.k2
o=m.r
n=s+1
r=H.am(r,n,null,H.C(r).c)
p.toString
t.a(r)
p.f=p.e=p.d=p.c=p.b=p.a=null
p.a=o
p.b="workspace-chain"
p.e=s
p.sav(r)
q.bs()}U.hs(m.b,r,!1,m.x)},
fO:function(){var t=this,s=t.a,r=s.length
if(r!==0){if(0>=r)return H.o(s,0)
s=!s[0].gaS()}else s=!0
if(!s)return
t.x.classList.add("show")
s=J.cU(t.e)
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
q=U.d8(n.b)
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
$S:9}
U.hr.prototype={
$1:function(a){u.k.a(a)
return this.a.y=!1},
$S:9}
U.aM.prototype={
dD:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=document,f=g.createElement("div")
h.b=f
f.classList.add("nt-clause")
if(c!=null){t=Z.ci(c,h.d.id.r1)
t.gap(t).u(h.ga0())
t.gan(t).u(new U.ht(h))
t.gao(t).u(new U.hu(h))}s=b.ah()
f=g.createElement("div")
h.ch=f
f.classList.add("nt-clause-left-bar")
f=h.ch
r=s+"-color"
f.classList.add(r)
r=b.db
f=h.ch
if(r!=null){f=f.style
f.backgroundColor=r}h.b.appendChild(h.ch)
f=g.createElement("div")
h.Q=f
f.classList.add("nt-clause-divider")
f=h.Q
r=s+"-color"
f.classList.add(r)
r=b.db
f=h.Q
if(r!=null){f=f.style
f.backgroundColor=r}h.b.appendChild(h.Q)
g=g.createElement("div")
h.cx=g
g.classList.add("nt-clause-blocks")
q=h.f
if(q==null||q==="")q=""
g=J.ek(q)
if(g!==""){g=h.Q
g.toString
C.b.G(g,q)}g=h.d
p=Z.ci(h.b,g.id.r1)
p.gap(p).u(h.ga0())
p.gan(p).u(new U.hv(h))
p.gao(p).u(new U.hw(h))
if(h.a.length===0){h.cw()
return h.b}h.b.appendChild(h.cx)
for(f=h.e,r=u.i,o=0;n=h.a,o<n.length;o=l){m=n[o]
l=o+1
k=H.am(n,l,null,H.C(n).c)
n=g.k2.a
j=g.c
i=new U.cY()
r.a(k)
i.a=n
i.b="block-clause"
i.c=j
i.e=o
i.d=f
i.sav(k)
m.aC(a,i)}U.kE(h.cx,n,"nt-block-clause",!1)
return h.b},
cw:function(){var t,s=this
s.b.classList.add("nt-clause-empty")
s.b.appendChild(U.lW(!1,s))
t=document.createElement("div")
t.className="nt-clause-drop"
s.b.appendChild(t)
s.b.appendChild(U.lW(!0,s))},
hf:function(){var t,s,r,q,p,o,n,m,l,k
for(t=this.d,s=this.e,r=u.i,q=0;p=this.a,q<p.length;q=k){o=p[q]
n=o.k2
m=t.k2.a
l=t.c
k=q+1
p=H.am(p,k,null,H.C(p).c)
n.toString
r.a(p)
n.f=n.e=n.d=n.c=n.b=n.a=null
n.a=m
n.b="block-clause"
n.c=l
n.e=q
n.d=s
n.sav(p)
o.bs()}},
cn:function(){var t,s,r,q,p,o,n,m,l,k=this,j=k.b
j.toString
C.b.G(j,"")
j=k.cx
j.toString
C.b.G(j,"")
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
q=H.am(q,l,null,H.C(q).c)
o.toString
s.a(q)
o.f=o.e=o.d=o.c=o.b=o.a=null
o.a=n
o.b="block-clause"
o.c=m
o.e=r
o.d=t
o.sav(q)
p.bs()}U.kE(k.cx,q,"nt-block-clause",!1)},
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
$S:9}
U.hu.prototype={
$1:function(a){u.k.a(a)
return this.a.z=!1},
$S:9}
U.hv.prototype={
$1:function(a){u.k.a(a)
return this.a.y=!0},
$S:9}
U.hw.prototype={
$1:function(a){u.k.a(a)
return this.a.y=!1},
$S:9}
U.eG.prototype={}
U.hx.prototype={
dI:function(a,b,c){var t,s,r,q,p=this,o=p.c
if(c!=null)p.c=c
t=a.db.b
s=H.C(t)
r=s.i("aG<1,v<aq>>")
q=p.fS(a,P.cm(new H.aG(new H.ag(t,s.i("t(1)").a(new U.hy(!0,a)),s.i("ag<1>")),s.i("v<aq>(1)").a(new U.hz()),r),!0,r.i("d.E")))
p.c=o
return q},
fS:function(a,b){var t,s,r,q
u.eB.a(b)
t=new P.aS("")
s=a.ch
r=H.h(s.slice(0),H.C(s).i("G<1>"))
C.a.cB(r,U.qh())
for(s=r.length,q=0;q<r.length;r.length===s||(0,H.B)(r),++q)this.dH(t,r[q].a,a.z,a.Q)
for(s=b.length,q=0;q<b.length;b.length===s||(0,H.B)(b),++q)this.dH(t,b[q],a.z,a.Q)
s=t.a
return s.charCodeAt(0)==0?s:s},
dH:function(a,b,c,d){var t,s,r,q=this
u.cG.a(b)
t=J.ap(b)
if(t.gN(b))return
s=t.h(b,0)
if(!s.gaS())return
q.e6(a,null,0,q.b.a,c)
q.aT(a,0,s)
q.c9(a,1,t.aZ(b,1).aq(0))
r=t.gJ(b).x
if(r==null||r==="")r=d
q.e6(a,null,0,q.b.b,r)
a.a+="\n"},
c9:function(a,b,c){var t,s
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
j.aX(a,b,i)}j.c9(a,q,m.a)
l=j.b.d
k=m.x
l=k==null?l:k
if(l!==""){i=j.aF(j.aF(l,c,p,""),c,o,"P")
j.aX(a,b,i)}}t=c.r
if(!(t==null||t===""))j.aX(a,b,j.cp(t,c))},
cp:function(a,b){return this.aF(this.aF(a,b,b.z,""),b,b.Q,"P")},
aF:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
u.dm.a(c)
for(t=new H.ar(c,H.i(c).i("ar<1>")),t=t.gA(t),s=this.d,r=u.a3,q=0;t.m();){p=t.d
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
a=H.l8(a,o,p);++q}return a},
aX:function(a,b,c){var t,s,r
for(t="",s=0;s<b;++s)t+="  "
a.a+=t
r="\n"+t
c.toString
a.a+=H.l8(c,"\n",r)+"\n"},
e6:function(a,b,c,d,e){var t=e==null?d:e
if(t!=="")this.aX(a,c,b==null?t:this.cp(t,b))}}
U.hy.prototype={
$1:function(a){var t
u.c.a(a)
if(this.a){t=a.a
t=H.ac(t.fx)&&t.gaS()&&this.b.a9(t.b)===0}else t=!1
return t},
$S:31}
U.hz.prototype={
$1:function(a){var t
u.c.a(a)
t=H.h([],u.u)
C.a.l(t,a.a)
return t},
$S:53}
U.d7.prototype={}
U.eB.prototype={}
U.dd.prototype={}
U.af.prototype={
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
for(r=n.a,q=u.U,p=0;p<a.length;++p)if(p===0&&s&&a[p]==n.c){o=new U.af(r,a[p],H.h([],q))
o.b=n.b
C.a.l(t,o)}else C.a.l(t,new U.af(r,a[p],H.h([],q)))}},
dq:function(a){var t,s,r=this,q=document.createElement("div")
C.b.G(q,H.a(r.b))
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
C.b.G(t,b?"(":")")
t.classList.add("nt-expression-text")
t.classList.add("parenthesis")
this.dF(t,a)
a.appendChild(t)},
ft:function(a){var t,s,r,q=this
q.b=J.z(U.bL(q.b,0))
t=W.o2("number")
t.className="nt-number-input"
t.value=q.b
t.step="1"
s=u.E
r=s.i("~(1)").a(new U.ih(q,t))
u.M.a(null)
W.A(t,"change",r,!1,s.c)
a.appendChild(t)},
gfY:function(){var t=this.b
if(t!=null)return P.mV(t,new U.il())!=null
return!1},
bq:function(a){var t,s,r=this,q=document.createElement("div")
q.className="nt-expression"
if((r.gfY()||r.b==null)&&r.c==="num")r.ft(q)
else if(r.b==null){q.classList.add("empty")
C.b.a4(q,"<small>&#9660;</small>")}else{t=r.e
s=t.length
if(s===1){r.be(q,!0)
r.dq(q)
if(0>=t.length)return H.o(t,0)
t[0].bq(q)
r.be(q,!1)}else if(s===2){r.be(q,!0)
if(0>=t.length)return H.o(t,0)
t[0].bq(q)
r.dq(q)
if(1>=t.length)return H.o(t,1)
t[1].bq(q)
r.be(q,!1)}else C.b.a4(q,"<div class='nt-expression-text "+H.a(r.c)+"'>"+H.a(r.b)+"</div>")}if(r.e.length===0){q.classList.add("editable")
t=u.C
s=t.i("~(1)").a(new U.ip(r,q))
u.M.a(null)
W.A(q,"click",s,!1,t.c)}a.appendChild(q)},
dQ:function(a){var t,s,r=u.h,q=document
H.aU(r,r,"T","querySelectorAll")
r=new W.ao(q.querySelectorAll(".nt-pulldown-menu"),u.W)
r.t(r,new U.im())
t=q.createElement("div")
t.classList.add("nt-pulldown-menu")
q=this.a
this.ex(t,q.a.dy)
if(J.li(q.a.dx))C.b.a4(t,"<hr>")
C.b.a4(t,"<hr>")
s=W.lm("#")
C.l.G(s,"Clear")
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
C.l.G(n,H.a(o.a))
a.appendChild(n)
m=r.a(new U.ig(this,a,o))
q.a(null)
W.A(n,"click",m,!1,s)}}}}
U.i6.prototype={
$1:function(a){var t=this.a
return C.a.l(t.e,U.lK(t.a,u.gI.a(a)))},
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
$S:14}
U.ip.prototype={
$1:function(a){u.V.a(a)
this.a.dQ(this.b)
a.stopPropagation()},
$S:2}
U.im.prototype={
$1:function(a){return J.ei(u.h.a(a))},
$S:16}
U.io.prototype={
$1:function(a){var t
u.V.a(a)
C.b.bp(this.b)
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
C.b.bp(this.b)
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
U.bt.prototype={
n:function(a){var t,s=new P.aS("")
this.c.bh(s)
t=s.a
return t.charCodeAt(0)==0?t:t},
co:function(){var t=this,s=t.b
if(s!=null&&t.c!=null){J.ny(s).bf(0)
t.c.bq(u.d.a(t.b))}}}
U.a4.prototype={
aW:function(a){var t,s,r=this.b
if(r==null)return
for(r=u.A.a($.eg().h(0,"Object").S("keys",H.h([r],u.v))),r=new H.N(r,r.gk(r),H.i(r).i("N<k.E>")),t=this.a;r.m();){s=H.r(r.d)
if(!C.a.F(t,s)){a.toString
if(typeof s!="string"&&!0)H.D(P.b2("property is not a String or num"))
if(s in a.a)throw H.b(P.bV("Found existing property when restoring external data for export: "+H.a(s)))
a.j(0,s,this.b.h(0,s))}}}}
U.eq.prototype={
bz:function(a){var t=this.b,s=H.C(t),r=new H.ag(t,s.i("t(1)").a(new U.hf(a)),s.i("ag<1>"))
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
C.b.cd(i,"beforeend",c,a3,a3)
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
i.lineHeight=b}a=Z.lD(n.x,n.y,".nt-menu-slot-at-limit","nt-block-dragging")
i=a.gdN(a)
c=i.$ti
a0=c.i("~(1)").a(n.gbC())
t.a(null)
i.a.c_(c.i("~(1)").a(a0),a3,null,!1)
a0=a.gdM(a)
c=a0.$ti
a0.a.c_(c.i("~(1)").a(c.i("~(1)").a(n.gc6())),a3,null,!1)
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
if(!$.ey)t=$.ex&&!$.ez
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
$.ey=!0
this.a.O()},
$S:6}
U.he.prototype={
$1:function(a){u.k.a(a)
$.ey=!1
this.a.O()},
$S:6}
U.iI.prototype={
$1:function(a){var t,s,r,q=this
H.r(a)
t=document.createElement("div")
W.kP(t,u.t.a(H.h(["nt-notch-"+H.a(a),q.a],u.s)))
if(!q.b||a!=="middle"){s=q.c.db
if(s!=null){r=t.style
r.backgroundColor=s}}q.d.appendChild(t)},
$S:14}
U.iJ.prototype={
$1:function(a){return this.a.k4=a},
$S:18}
U.iH.prototype={
$1:function(a){var t,s,r,q=this
H.r(a)
t=document.createElement("div")
W.kP(t,u.t.a(H.h(["nt-notch-"+H.a(a),q.a],u.s)))
if(!q.b||a!=="middle"){s=q.c.d.db
if(s!=null){r=t.style
r.backgroundColor=s}}q.d.appendChild(t)},
$S:14}
U.c2.prototype={}
U.ep.prototype={
bu:function(){return P.ak(P.a5(["type","block-changed","blockId",this.b,"instanceId",this.c],u.N,u.K))}}
U.bq.prototype={
bu:function(){var t=this
return P.ak(P.a5(["type","attribute-changed","blockId",t.b,"instanceId",t.c,"attributeId",t.d,"attributeType",t.e,"value",t.f,"formattedValue",t.r],u.N,u.z))}}
U.eR.prototype={
bu:function(){return P.ak(P.a5(["type","menu-item-clicked","blockId",this.b],u.N,u.K))}}
U.eS.prototype={
bu:function(){return P.ak(P.a5(["type","menu-item-context-menu","blockId",this.b,"x",this.c,"y",this.d],u.N,u.K))}}
U.aR.prototype={
bD:function(a){var t,s,r,q=this
u.D.a(a)
t=q.a.bg(0,!1)
q.r=t
s=q.f
r=new U.cY()
r.b="new-block"
r.f=s
t.aC(q.y,r)
U.lC(q.r,a)
U.hs(q.y.e,H.h([q.r],u.u),!1,null)
t=q.d
t.dU(r)
t.dG()},
c7:function(a){var t
u.D.a(a)
$.aO=!0
$.ez=$.ex=$.ey=!1
this.r=null
t=this.d
t.al()
t.a5()},
h8:function(a){this.d.P(new U.eR(this.a.b))},
h6:function(a){var t,s,r
u.V.a(a)
a.preventDefault()
a.stopPropagation()
t=this.a.b
s=a.pageX
r=a.pageY
this.d.P(new U.eS(t,H.q(s),H.q(r)))
return!1}}
U.fe.prototype={
fD:function(a,b){var t,s,r=this
u.V.a(b).stopPropagation()
t=!r.d
r.d=t
s=r.a
s.innerText=t?"\u25b2":"\u25bc"
s=r.d
r.e.$1(s)}}
U.bQ.prototype={
P:function(a){var t,s,r=this
try{r.e4()
r.br()
r.db.e2()
$.eg().h(0,"NetTango").S("_relayCallback",[r.c,a.bu()])}catch(s){t=H.L(s)
P.ef("Unable to relay program changed event to Javascript")
P.ef(t)}},
a9:function(a){var t,s=this.ch
if(s.length===0)return 0
t=H.C(s)
return new H.O(s,t.i("e(1)").a(new U.hH(a)),t.i("O<1,e>")).bo(0,new U.hI())},
a3:function(a){var t,s,r,q
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=t[r].a3(a)
if(q!=null)return q}throw H.b(P.bV("Block with given instance ID not found in workspace: "+H.a(a)))},
fM:function(){var t,s,r,q,p,o,n,m,l,k,j=this,i=j.c,h=H.a(i)+"-styles",g=document,f=u.bg.a(g.getElementById(h))
if(f==null){f=g.createElement("style")
f.id=h
j.d.appendChild(f)}t=u.af.a(f.sheet)
for(;t.cssRules.length>0;)t.removeRule(0)
j.go.c0(t,H.a(i)+"-block-starter")
j.id.c0(t,H.a(i)+"-block-container")
j.k1.c0(t,H.a(i)+"-block-command")
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
p=new U.eB()
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
s=U.d8(q.f)
r=a.d.E(0,s).E(0,$.lz)
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
$.lA=p.d
$.lB=p.e
t=p.a
if(!!q.fixed$length)H.D(P.x("removeAt"))
if(!H.cO(a))H.D(H.bb(a))
if(typeof a!=="number")return a.ai()
s=q.length
if(a>=s)H.D(P.cu(a,null))
q.splice(a,1)[0]
s=p.b;(s&&C.b).bp(s)
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
case"default":throw H.b(P.bV("Unknown block removal type: "+H.a(p)))}},
h9:function(){var t,s,r=this.ch,q=H.h(r.slice(0),H.C(r).i("G<1>"))
C.a.cB(q,new U.hJ())
r=this.f
r.toString
C.b.G(r,"")
for(r=q.length,t=0;t<q.length;q.length===r||(0,H.B)(q),++t){s=q[t]
this.f.appendChild(s.b)}},
dG:function(){var t,s,r
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)t[r].fO()},
al:function(){var t,s,r,q,p,o,n
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r){q=t[r]
q.x.classList.remove("show")
p=J.cU(q.e)
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
br:function(){var t,s,r,q,p,o
for(t=this.ch,s=t.length,r=0;r<t.length;t.length===s||(0,H.B)(t),++r)for(q=t[r].a,p=q.length,o=0;o<q.length;q.length===p||(0,H.B)(q),++o)q[o].br()},
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
$S:15}
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
$S:8}
U.hC.prototype={
$1:function(a){u.k.a(a)
$.ez=!0
this.a.db.O()},
$S:6}
U.hD.prototype={
$1:function(a){u.k.a(a)
return this.a.O()},
$S:4}
U.hE.prototype={
$1:function(a){var t
u.k.a(a)
$.ez=!1
t=this.a
t.O()
t.db.O()},
$S:6}
U.hF.prototype={
$1:function(a){u.k.a(a)
$.ex=!0
this.a.db.O()},
$S:6}
U.hG.prototype={
$1:function(a){u.k.a(a)
$.ex=!1
this.a.db.O()},
$S:6}
U.hJ.prototype={
$2:function(a,b){var t=u.Y
t.a(a)
t.a(b)
return J.lh(a.e,b.e)},
$S:34}
U.kg.prototype={
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
U.kw.prototype={
$1:function(a){return u.c.a(a).a.b},
$S:60}
U.j4.prototype={
$1:function(a){var t,s
if(!a.w("action"))return
t=this.b
s=t.a
a.j(0,"id",s)
t.j(0,H.r(a.h(0,"action")),s)
t=this.a
this.c.j(0,s,t.a)
t.a=U.m4(t.a,a)},
$S:19}
U.j5.prototype={
$1:function(a){U.oF(this.a,this.b,a)},
$S:19}
U.j3.prototype={
$1:function(a){var t=this.a
t.a=U.oG(t.a,a)},
$S:62}
U.j6.prototype={
$1:function(a){return P.ak(P.a5(["actual",a],u.N,u.z))},
$S:33}
U.j7.prototype={
$1:function(a){return a.w("type")&&J.bd(J.bp(a,"type"),"select")},
$S:20}
U.j9.prototype={
$1:function(a){},
$S:19}
U.j8.prototype={
$1:function(a){var t,s="required"
if(!(a instanceof P.u))return!1
if(a.gk(a)===0)return!1
if(a.gk(a)>1)return!0
t=u.b.a(a.h(0,0))
if(t.w(s)&&H.ac(H.cN(t.h(0,s))))return!1
return!0},
$S:20}
U.jc.prototype={
$1:function(a){if(J.bd(J.bp(a,"type"),"select"))U.m5(u.b.a(a))},
$S:11}
U.jd.prototype={
$1:function(a){if(J.bd(J.bp(a,"type"),"select"))U.m5(u.b.a(a))},
$S:11}
U.ja.prototype={
$1:function(a){var t,s="actual"
if(a.w(s)){t=J.ap(a)
t=typeof t.h(a,s)=="string"&&C.a.F($.oQ,J.ek(t.h(a,s)).toLowerCase())}else t=!1
return t},
$S:20}
U.jb.prototype={
$2:function(a,b){H.cN(a)
H.cN(b)
return H.ac(a)&&H.ac(b)},
$S:64};(function aliases(){var t=J.aj.prototype
t.eh=t.n
t.eg=t.bn
t=J.bw.prototype
t.ej=t.n
t=P.bB.prototype
t.el=t.b1
t=P.P.prototype
t.em=t.aL
t.en=t.b0
t=P.k.prototype
t.cE=t.V
t=P.d.prototype
t.ei=t.bw
t=P.E.prototype
t.ek=t.n
t=W.p.prototype
t.bE=t.W
t=W.e_.prototype
t.eo=t.ae
t=P.Q.prototype
t.cC=t.h
t.cD=t.j})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1i,o=hunkHelpers.installInstanceTearOff,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_2u,l=hunkHelpers._instance_0i,k=hunkHelpers._static_2
t(P,"pN","oV",21)
t(P,"pO","oW",21)
t(P,"pP","oX",21)
s(P,"mF","pI",0)
r(P,"pQ",1,null,["$2","$1"],["mw",function(a){return P.mw(a,null)}],35,0)
s(P,"mE","pD",0)
var j
q(j=P.b9.prototype,"gb7","ac",0)
q(j,"gb8","ad",0)
p(P.bB.prototype,"gfp","l",28)
o(P.a3.prototype,"geE",0,1,function(){return[null]},["$2","$1"],["aO","eF"],35,0)
q(j=P.cG.prototype,"gb7","ac",0)
q(j,"gb8","ad",0)
q(j=P.P.prototype,"gb7","ac",0)
q(j,"gb8","ad",0)
q(P.cH.prototype,"gfh","ay",0)
q(j=P.cJ.prototype,"gb7","ac",0)
q(j,"gb8","ad",0)
n(j,"geO","eP",28)
m(j,"gf1","f2",37)
q(j,"geR","eS",0)
t(P,"pT","pq",5)
r(W,"pY",4,null,["$4"],["p1"],27,0)
r(W,"pZ",4,null,["$4"],["p2"],27,0)
l(W.e2.prototype,"gfE","c3",0)
t(P,"ku","ea",5)
t(P,"q6","kd",67)
n(j=Z.eC.prototype,"gf3","f4",16)
n(j,"geU","eV",8)
n(j,"geY","eZ",8)
n(j,"geW","eX",8)
n(j,"gf_","f0",8)
k(U,"qh","pS",34)
r(U,"qe",4,null,["$4"],["o8"],68,0)
r(U,"qd",3,null,["$3"],["o7"],69,0)
k(U,"qb","o5",70)
r(U,"qc",3,null,["$3"],["o6"],71,0)
t(U,"qg","oa",30)
s(U,"qf","o9",72)
t(U,"mQ","oK",7)
t(U,"q9","oJ",49)
t(U,"qa","oM",7)
t(U,"mR","oP",7)
t(U,"mU","oT",7)
t(U,"mS","oR",7)
t(U,"mT","oS",7)
n(j=U.aq.prototype,"gbC","bD",13)
n(j,"gc6","c7",13)
n(j,"ga0","a6",4)
n(U.aD.prototype,"ga0","a6",4)
n(U.aM.prototype,"ga0","a6",4)
n(U.eq.prototype,"ga0","a6",4)
n(j=U.aR.prototype,"gbC","bD",13)
n(j,"gc6","c7",13)
n(j,"gh7","h8",57)
n(j,"gh5","h6",10)
p(U.fe.prototype,"gfC","fD",8)
n(j=U.bQ.prototype,"ga0","a6",4)
n(j,"gfF","fG",4)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.E,null)
r(P.E,[H.kK,J.aj,J.aC,P.d,H.N,P.S,H.dc,H.R,H.cA,P.co,H.d2,H.bP,H.eK,H.j0,P.K,H.e0,P.T,H.iB,H.dn,H.eL,H.f9,H.k_,H.aQ,H.fx,P.k3,P.U,P.P,P.bB,P.aE,P.fn,P.c6,P.a3,P.fk,P.a2,P.f8,P.bC,P.fr,P.dX,P.cH,P.cX,P.fU,P.dL,P.dY,P.fD,P.c8,P.dQ,P.k,P.e8,P.b_,P.dZ,P.er,P.iu,P.jH,P.t,P.ch,P.Y,P.bT,P.f1,P.dz,P.fw,P.de,P.b4,P.v,P.cn,P.w,P.ds,P.au,P.fL,P.c,P.aS,P.b0,W.hM,W.i4,W.eD,W.e2,W.c7,W.V,W.dv,W.e_,W.fM,W.bX,W.fq,W.as,W.fK,W.e9,P.Q,P.J,P.fI,Z.hP,Z.bS,Z.jn,Z.eo,Z.ba,Z.eC,Z.av,Z.el,U.aL,U.bj,U.h9,U.cY,U.cZ,U.aq,U.eG,U.hx,U.dd,U.af,U.bt,U.a4,U.eq,U.c2,U.aR,U.fe,U.bQ])
r(J.aj,[J.eI,J.dj,J.bw,J.G,J.bv,J.bh,H.bZ,W.F,W.bN,W.I,W.fp,W.fa,W.hN,W.d6,W.hO,W.f,W.fz,W.dg,W.eQ,W.fF,W.aI,W.fO,W.fV,W.fX,P.dm])
r(J.bw,[J.f3,J.bz,J.b5])
s(J.ix,J.G)
r(J.bv,[J.di,J.eJ])
r(P.d,[H.n,H.aG,H.ag,H.c4,H.c3,H.dE])
r(H.n,[H.aa,H.bU,H.ar,P.dK,P.at])
r(H.aa,[H.dA,H.O,P.fC])
s(H.aX,H.aG)
r(P.S,[H.a6,H.c5,H.dC,H.dy])
s(H.da,H.c4)
s(H.d9,H.c3)
s(P.cM,P.co)
s(P.dD,P.cM)
s(H.d3,P.dD)
r(H.bP,[H.hK,H.iO,H.ky,H.fd,H.iy,H.kp,H.kq,H.kr,P.ji,P.jh,P.jj,P.jk,P.k4,P.k0,P.k1,P.it,P.jt,P.jA,P.jw,P.jx,P.jy,P.ju,P.jz,P.jD,P.jE,P.jC,P.jB,P.iV,P.iW,P.jm,P.jl,P.jO,P.ki,P.jV,P.jU,P.jW,P.iD,P.jI,P.iE,P.i_,P.i0,W.i2,W.jg,W.js,W.jZ,W.iG,W.iF,W.jX,W.jY,W.k2,W.ka,P.hL,P.iq,P.ir,P.is,P.iz,P.ke,P.kf,P.kj,P.kk,P.kl,Z.hU,Z.hT,Z.hR,Z.hS,Z.hQ,Z.h8,Z.h3,Z.jo,Z.jp,Z.jq,Z.jr,Z.k9,Z.k8,Z.k7,Z.k6,Z.k5,Z.jN,Z.jM,Z.jL,Z.jK,Z.jT,Z.jS,Z.jR,Z.jQ,Z.jP,Z.hW,Z.hY,Z.hX,Z.hZ,Z.hV,U.h7,U.h6,U.ia,U.i9,U.ib,U.ic,U.i8,U.id,U.i7,U.ie,U.iK,U.iL,U.iM,U.iN,U.iQ,U.iR,U.iT,U.iS,U.iU,U.iX,U.iY,U.iZ,U.j_,U.hb,U.hc,U.hh,U.hk,U.hl,U.hi,U.hj,U.hm,U.hn,U.hp,U.hq,U.hr,U.ht,U.hu,U.hv,U.hw,U.hy,U.hz,U.i6,U.ii,U.ij,U.ik,U.ih,U.il,U.ip,U.im,U.io,U.ig,U.hf,U.hd,U.he,U.iI,U.iJ,U.iH,U.hH,U.hI,U.hA,U.hB,U.hC,U.hD,U.hE,U.hF,U.hG,U.hJ,U.kg,U.iw,U.kw,U.j4,U.j5,U.j3,U.j6,U.j7,U.j9,U.j8,U.jc,U.jd,U.ja,U.jb])
s(H.d4,H.d2)
r(P.K,[H.f_,H.eM,H.fh,H.f4,P.cW,H.fv,P.dl,P.f0,P.aK,P.eZ,P.fi,P.fg,P.b6,P.es,P.eu])
r(H.fd,[H.f6,H.cd])
s(H.fj,P.cW)
s(P.dr,P.T)
r(P.dr,[H.a9,P.dJ,P.fB,W.fl])
s(H.aw,H.bZ)
r(H.aw,[H.dT,H.dV])
s(H.dU,H.dT)
s(H.bx,H.dU)
s(H.dW,H.dV)
s(H.aH,H.dW)
r(H.aH,[H.eT,H.eU,H.eV,H.eW,H.eX,H.du,H.eY])
s(H.e5,H.fv)
r(P.U,[P.cL,P.dI,W.bn,W.aT])
s(P.cF,P.cL)
s(P.ah,P.cF)
r(P.P,[P.cG,P.cJ])
s(P.b9,P.cG)
s(P.e3,P.bB)
s(P.e4,P.fn)
r(P.bC,[P.dF,P.fs])
s(P.e1,P.dX)
s(P.dR,P.dI)
s(P.fJ,P.fU)
s(P.dM,P.dJ)
s(P.dP,P.dY)
s(P.dq,P.dQ)
s(P.dx,P.dZ)
s(P.cf,P.f8)
r(P.cf,[P.cj,P.eP,P.eO])
s(P.eN,P.dl)
s(P.iA,P.er)
s(P.jG,P.jH)
r(P.Y,[P.ai,P.e])
r(P.aK,[P.dw,P.eH])
r(W.F,[W.m,W.bA,W.b8])
r(W.m,[W.p,W.b3,W.cE])
r(W.p,[W.j,P.l])
r(W.j,[W.ca,W.em,W.cb,W.bO,W.ce,W.bR,W.eF,W.ck,W.cq,W.cx,W.cz,W.dB,W.fb,W.fc,W.cB,W.cC])
s(W.cg,W.fp)
s(W.d5,W.fa)
r(P.dq,[W.fm,W.ao,W.an,P.eE])
s(W.i1,W.i4)
s(W.fA,W.fz)
s(W.bu,W.fA)
s(W.ay,W.f)
r(W.ay,[W.bi,W.a1,W.b7])
s(W.fG,W.fF)
s(W.cp,W.fG)
s(W.cr,W.a1)
s(W.fP,W.fO)
s(W.ff,W.fP)
s(W.fW,W.fV)
s(W.fo,W.fW)
s(W.dG,W.d6)
s(W.fY,W.fX)
s(W.dS,W.fY)
s(W.ft,W.fl)
s(P.et,P.dx)
r(P.et,[W.fu,P.en])
s(W.az,W.bn)
s(W.dH,P.a2)
s(W.fN,W.e_)
r(P.Q,[P.aF,P.dO])
s(P.u,P.dO)
s(P.by,P.fI)
s(P.cv,P.l)
r(Z.ba,[Z.fQ,Z.fE,Z.fH])
r(U.aL,[U.bW,U.c_,U.cw,U.cD])
r(U.c_,[U.dh,U.ct])
r(U.h9,[U.aD,U.aM])
s(U.d7,Z.el)
s(U.eB,Z.eo)
r(U.c2,[U.ep,U.bq,U.eR,U.eS])
t(H.dT,P.k)
t(H.dU,H.R)
t(H.dV,P.k)
t(H.dW,H.R)
t(P.dQ,P.k)
t(P.dZ,P.b_)
t(P.cM,P.e8)
t(W.fp,W.hM)
t(W.fz,P.k)
t(W.fA,W.V)
t(W.fF,P.k)
t(W.fG,W.V)
t(W.fO,P.k)
t(W.fP,W.V)
t(W.fV,P.k)
t(W.fW,W.V)
t(W.fX,P.k)
t(W.fY,W.V)
t(P.dO,P.k)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{e:"int",ai:"double",Y:"num",c:"String",t:"bool",w:"Null",v:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","w()","w(a1)","w(f)","~(av)","@(@)","w(av)","~(Q)","~(a1)","t(av)","t(a1)","w(@)","w(b7)","~(bS)","w(c)","e(e,e)","~(p)","w(p)","t(t)","w(Q)","t(@)","~(~())","aE<~>(a2<@>)","w(@,@)","c(e)","t(m)","t(p)","t(p,c,c,c7)","~(E)","t(c)","c(c)","t(aR)","t(as)","Q(@)","e(aD,aD)","~(E[au])","aF(@)","~(@,au)","@(@,c)","w(~())","~(m,m)","t(bj)","~(bj)","e(aq)","t(at<c>)","p(m)","w(c,@)","~(aM)","e(aM)","~(u<@>)","u<@>(@)","w(b0,@)","@(c)","v<aq>(aR)","~(af)","~(ba)","~(Y)","~(f)","e(aD)","c(p)","e(aR)","w(bi)","w(u<@>)","w(@[au])","t(t,t)","w(Y)","@(f)","E(@)","~(c,c,c,aF)","~(c,c,aF)","c(c,aF)","c(c,e,e)","c()","a3<@>(@)","w(t)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pi(v.typeUniverse,JSON.parse('{"b5":"bw","f3":"bw","bz":"bw","qv":"f","qI":"f","qu":"l","qL":"l","qw":"j","qP":"j","qM":"m","qH":"m","r2":"a1","qB":"ay","qG":"b8","qA":"b3","qS":"b3","qN":"bu","qJ":"bN","qC":"I","qR":"bx","qQ":"bZ","eI":{"t":[]},"dj":{"w":[]},"bw":{"b4":[]},"G":{"v":["1"],"n":["1"],"d":["1"]},"ix":{"G":["1"],"v":["1"],"n":["1"],"d":["1"]},"aC":{"S":["1"]},"bv":{"ai":[],"Y":[]},"di":{"e":[],"ai":[],"Y":[]},"eJ":{"ai":[],"Y":[]},"bh":{"c":[],"f2":[]},"n":{"d":["1"]},"aa":{"n":["1"],"d":["1"]},"dA":{"aa":["1"],"n":["1"],"d":["1"],"aa.E":"1","d.E":"1"},"N":{"S":["1"]},"aG":{"d":["2"],"d.E":"2"},"aX":{"aG":["1","2"],"n":["2"],"d":["2"],"d.E":"2"},"a6":{"S":["2"]},"O":{"aa":["2"],"n":["2"],"d":["2"],"aa.E":"2","d.E":"2"},"ag":{"d":["1"],"d.E":"1"},"c5":{"S":["1"]},"c4":{"d":["1"],"d.E":"1"},"da":{"c4":["1"],"n":["1"],"d":["1"],"d.E":"1"},"dC":{"S":["1"]},"c3":{"d":["1"],"d.E":"1"},"d9":{"c3":["1"],"n":["1"],"d":["1"],"d.E":"1"},"dy":{"S":["1"]},"bU":{"n":["1"],"d":["1"],"d.E":"1"},"dc":{"S":["1"]},"cA":{"b0":[]},"d3":{"dD":["1","2"],"cM":["1","2"],"co":["1","2"],"e8":["1","2"],"al":["1","2"]},"d2":{"al":["1","2"]},"d4":{"d2":["1","2"],"al":["1","2"]},"dE":{"d":["1"],"d.E":"1"},"eK":{"lM":[]},"f_":{"K":[]},"eM":{"K":[]},"fh":{"K":[]},"e0":{"au":[]},"bP":{"b4":[]},"fd":{"b4":[]},"f6":{"b4":[]},"cd":{"b4":[]},"f4":{"K":[]},"fj":{"K":[]},"a9":{"lR":["1","2"],"T":["1","2"],"al":["1","2"],"T.K":"1","T.V":"2"},"ar":{"n":["1"],"d":["1"],"d.E":"1"},"dn":{"S":["1"]},"eL":{"f2":[]},"f9":{"ds":[]},"k_":{"S":["ds"]},"bZ":{"b1":[]},"aw":{"Z":["@"],"b1":[]},"bx":{"aw":[],"k":["ai"],"Z":["@"],"v":["ai"],"n":["ai"],"R":["ai"],"b1":[],"d":["ai"],"k.E":"ai","R.E":"ai"},"aH":{"aw":[],"k":["e"],"v":["e"],"Z":["@"],"n":["e"],"R":["e"],"b1":[],"d":["e"]},"eT":{"aH":[],"aw":[],"k":["e"],"v":["e"],"Z":["@"],"n":["e"],"R":["e"],"b1":[],"d":["e"],"k.E":"e","R.E":"e"},"eU":{"aH":[],"aw":[],"k":["e"],"v":["e"],"Z":["@"],"n":["e"],"R":["e"],"b1":[],"d":["e"],"k.E":"e","R.E":"e"},"eV":{"aH":[],"aw":[],"k":["e"],"v":["e"],"Z":["@"],"n":["e"],"R":["e"],"b1":[],"d":["e"],"k.E":"e","R.E":"e"},"eW":{"aH":[],"aw":[],"k":["e"],"v":["e"],"Z":["@"],"n":["e"],"R":["e"],"b1":[],"d":["e"],"k.E":"e","R.E":"e"},"eX":{"aH":[],"aw":[],"k":["e"],"v":["e"],"Z":["@"],"n":["e"],"R":["e"],"b1":[],"d":["e"],"k.E":"e","R.E":"e"},"du":{"aH":[],"aw":[],"k":["e"],"v":["e"],"Z":["@"],"n":["e"],"R":["e"],"b1":[],"d":["e"],"k.E":"e","R.E":"e"},"eY":{"aH":[],"aw":[],"k":["e"],"v":["e"],"Z":["@"],"n":["e"],"R":["e"],"b1":[],"d":["e"],"k.E":"e","R.E":"e"},"fv":{"K":[]},"e5":{"K":[]},"ah":{"cF":["1"],"cL":["1"],"U":["1"],"U.T":"1"},"b9":{"cG":["1"],"P":["1"],"bl":["1"],"bm":["1"],"a2":["1"],"P.T":"1"},"bB":{"f7":["1"],"bl":["1"],"bm":["1"],"mh":["1"]},"e3":{"bB":["1"],"f7":["1"],"bl":["1"],"bm":["1"],"mh":["1"]},"e4":{"fn":["1"]},"a3":{"aE":["1"]},"cF":{"cL":["1"],"U":["1"]},"cG":{"P":["1"],"bl":["1"],"bm":["1"],"a2":["1"]},"P":{"bl":["1"],"bm":["1"],"a2":["1"],"P.T":"1"},"cL":{"U":["1"]},"dF":{"bC":["1"]},"fs":{"bC":["@"]},"fr":{"bC":["@"]},"e1":{"dX":["1"]},"cH":{"a2":["1"]},"dI":{"U":["2"]},"cJ":{"P":["2"],"bl":["2"],"bm":["2"],"a2":["2"],"P.T":"2"},"dR":{"dI":["1","2"],"U":["2"],"U.T":"2"},"cX":{"K":[]},"fU":{"m7":[]},"fJ":{"m7":[]},"dJ":{"T":["1","2"],"al":["1","2"]},"dM":{"dJ":["1","2"],"T":["1","2"],"al":["1","2"],"T.K":"1","T.V":"2"},"dK":{"n":["1"],"d":["1"],"d.E":"1"},"dL":{"S":["1"]},"dP":{"dY":["1"],"at":["1"],"n":["1"],"d":["1"]},"c8":{"S":["1"]},"dq":{"k":["1"],"v":["1"],"n":["1"],"d":["1"]},"dr":{"T":["1","2"],"al":["1","2"]},"T":{"al":["1","2"]},"co":{"al":["1","2"]},"dD":{"cM":["1","2"],"co":["1","2"],"e8":["1","2"],"al":["1","2"]},"dx":{"b_":["1"],"at":["1"],"n":["1"],"d":["1"]},"dY":{"at":["1"],"n":["1"],"d":["1"]},"fB":{"T":["c","@"],"al":["c","@"],"T.K":"c","T.V":"@"},"fC":{"aa":["c"],"n":["c"],"d":["c"],"aa.E":"c","d.E":"c"},"cj":{"cf":["c","c"]},"dl":{"K":[]},"eN":{"K":[]},"eP":{"cf":["E","c"]},"eO":{"cf":["c","E"]},"ai":{"Y":[]},"cW":{"K":[]},"f0":{"K":[]},"aK":{"K":[]},"dw":{"K":[]},"eH":{"K":[]},"eZ":{"K":[]},"fi":{"K":[]},"fg":{"K":[]},"b6":{"K":[]},"es":{"K":[]},"f1":{"K":[]},"dz":{"K":[]},"eu":{"K":[]},"fw":{"i5":[]},"de":{"i5":[]},"e":{"Y":[]},"v":{"n":["1"],"d":["1"]},"at":{"n":["1"],"d":["1"]},"fL":{"au":[]},"c":{"f2":[]},"aS":{"oz":[]},"j":{"p":[],"m":[],"F":[]},"ca":{"j":[],"p":[],"m":[],"F":[]},"em":{"j":[],"p":[],"m":[],"F":[]},"cb":{"j":[],"p":[],"m":[],"F":[]},"bO":{"j":[],"p":[],"m":[],"F":[]},"ce":{"j":[],"p":[],"m":[],"F":[]},"b3":{"m":[],"F":[]},"bR":{"j":[],"p":[],"m":[],"F":[]},"d6":{"by":["Y"]},"fm":{"k":["p"],"v":["p"],"n":["p"],"d":["p"],"k.E":"p"},"ao":{"lH":["1"],"k":["1"],"v":["1"],"n":["1"],"d":["1"],"k.E":"1"},"p":{"m":[],"F":[]},"eF":{"j":[],"p":[],"m":[],"F":[]},"bu":{"V":["m"],"k":["m"],"v":["m"],"Z":["m"],"n":["m"],"d":["m"],"V.E":"m","k.E":"m"},"ck":{"j":[],"p":[],"m":[],"F":[]},"bi":{"ay":[],"f":[]},"a1":{"ay":[],"f":[]},"an":{"k":["m"],"v":["m"],"n":["m"],"d":["m"],"k.E":"m"},"m":{"F":[]},"cp":{"V":["m"],"k":["m"],"v":["m"],"Z":["m"],"n":["m"],"d":["m"],"V.E":"m","k.E":"m"},"cq":{"j":[],"p":[],"m":[],"F":[]},"cr":{"a1":[],"ay":[],"f":[]},"cx":{"j":[],"p":[],"m":[],"F":[]},"cz":{"j":[],"p":[],"m":[],"F":[]},"dB":{"j":[],"p":[],"m":[],"F":[]},"fb":{"j":[],"p":[],"m":[],"F":[]},"fc":{"j":[],"p":[],"m":[],"F":[]},"cB":{"j":[],"p":[],"m":[],"F":[]},"cC":{"j":[],"p":[],"m":[],"F":[]},"b7":{"ay":[],"f":[]},"ff":{"V":["aI"],"k":["aI"],"v":["aI"],"Z":["aI"],"n":["aI"],"d":["aI"],"V.E":"aI","k.E":"aI"},"ay":{"f":[]},"bA":{"jf":[],"F":[]},"b8":{"F":[]},"cE":{"m":[],"F":[]},"fo":{"V":["I"],"k":["I"],"v":["I"],"Z":["I"],"n":["I"],"d":["I"],"V.E":"I","k.E":"I"},"dG":{"by":["Y"]},"dS":{"V":["m"],"k":["m"],"v":["m"],"Z":["m"],"n":["m"],"d":["m"],"V.E":"m","k.E":"m"},"fl":{"T":["c","c"],"al":["c","c"]},"ft":{"T":["c","c"],"al":["c","c"],"T.K":"c","T.V":"c"},"fu":{"b_":["c"],"at":["c"],"n":["c"],"d":["c"],"b_.E":"c"},"bn":{"U":["1"],"U.T":"1"},"az":{"bn":["1"],"U":["1"],"U.T":"1"},"aT":{"U":["1"],"U.T":"1"},"dH":{"a2":["1"]},"c7":{"as":[]},"dv":{"as":[]},"e_":{"as":[]},"fN":{"as":[]},"fM":{"as":[]},"bX":{"S":["1"]},"fq":{"jf":[],"F":[]},"fK":{"oE":[]},"e9":{"od":[]},"et":{"b_":["c"],"at":["c"],"n":["c"],"d":["c"]},"eE":{"k":["p"],"v":["p"],"n":["p"],"d":["p"],"k.E":"p"},"aF":{"Q":[]},"u":{"k":["1"],"v":["1"],"n":["1"],"Q":[],"d":["1"],"k.E":"1"},"by":{"fI":["1"]},"cv":{"l":[],"p":[],"m":[],"F":[]},"en":{"b_":["c"],"at":["c"],"n":["c"],"d":["c"],"b_.E":"c"},"l":{"p":[],"m":[],"F":[]},"fQ":{"ba":[]},"fE":{"ba":[]},"fH":{"ba":[]},"bW":{"aL":[]},"dh":{"c_":[],"aL":[]},"c_":{"aL":[]},"ct":{"c_":[],"aL":[]},"cw":{"aL":[]},"cD":{"aL":[]},"d7":{"el":[]},"eB":{"eo":[]},"ep":{"c2":[]},"bq":{"c2":[]},"eR":{"c2":[]},"eS":{"c2":[]}}'))
H.ph(v.typeUniverse,JSON.parse('{"n":1,"f8":2,"dq":1,"dr":2,"dx":1,"dQ":1,"dZ":1,"er":2,"cn":2,"dO":1}'))
var u=(function rtii(){var t=H.ee
return{gu:t("@<@>"),n:t("cX"),a3:t("aL"),cR:t("cb"),fK:t("bN"),bz:t("aq"),a4:t("bO"),hb:t("ce"),Y:t("aD"),ds:t("aM"),gF:t("d3<b0,@>"),g5:t("I"),af:t("d5"),d:t("bR"),D:t("bS"),k:t("av"),fu:t("bT"),X:t("n<@>"),h:t("p"),r:t("lH<p>"),bU:t("K"),B:t("f"),aS:t("F"),g8:t("i5"),gI:t("af"),gs:t("bW"),Z:t("b4"),aQ:t("aE<w>"),b9:t("aE<@>"),a:t("j"),gb:t("dg"),p:t("ck"),m:t("lM"),i:t("d<aq>"),bq:t("d<p>"),eh:t("d<m>"),fP:t("d<E>"),t:t("d<c>"),bM:t("d<ai>"),R:t("d<@>"),gS:t("d<e>"),u:t("G<aq>"),cM:t("G<aD>"),cA:t("G<aM>"),ge:t("G<p>"),U:t("G<af>"),ga:t("G<dd>"),v:t("G<Q>"),eO:t("G<as>"),eD:t("G<bj>"),dk:t("G<aR>"),w:t("G<a2<@>>"),s:t("G<c>"),f7:t("G<ba>"),cO:t("G<@>"),cj:t("b5"),aU:t("Z<@>"),gB:t("u<c>"),A:t("u<@>"),L:t("aF"),bT:t("a9<c,e>"),eo:t("a9<b0,@>"),by:t("a9<e,aL>"),aI:t("a9<e,e>"),b:t("Q"),dz:t("dm"),cf:t("bi"),cG:t("v<aq>"),al:t("v<aM>"),O:t("v<p>"),gp:t("v<dd>"),eB:t("v<v<aq>>"),dy:t("v<c>"),j:t("v<@>"),f:t("al<@,@>"),dm:t("al<e,aL>"),dv:t("O<c,c>"),V:t("a1"),d4:t("bx"),bd:t("aH"),F:t("m"),e:t("as"),P:t("w"),cU:t("c_"),K:t("E"),fn:t("bj"),fW:t("cq"),H:t("J<Y>"),et:t("cr"),q:t("by<Y>"),av:t("aQ"),ew:t("cv"),fs:t("cw"),d2:t("cx"),cq:t("at<c>"),c:t("aR"),l:t("au"),c6:t("f7<bS>"),g:t("f7<av>"),b_:t("a2<@>"),N:t("c"),dG:t("c(c)"),bg:t("cz"),g7:t("l"),fo:t("b0"),aW:t("cB"),cJ:t("cC"),fY:t("aI"),T:t("b7"),ak:t("b1"),bJ:t("bz"),g4:t("bA"),ci:t("jf"),g2:t("b8"),h9:t("cE"),ac:t("an"),gt:t("bC<@>"),E:t("az<f>"),C:t("az<a1>"),du:t("az<b7>"),I:t("aT<a1>"),a1:t("ba"),cw:t("bn<f>"),W:t("ao<p>"),x:t("c6<@,@>"),_:t("a3<@>"),fJ:t("a3<e>"),dL:t("a3<Y>"),cr:t("c7"),aH:t("dM<@,@>"),J:t("fD"),bi:t("e4<Y>"),y:t("t"),bN:t("t(E)"),gR:t("ai"),z:t("@"),fO:t("@()"),G:t("@(f)"),bI:t("@(E)"),ep:t("@(E,E)"),ag:t("@(E,au)"),ch:t("@(at<c>)"),bc:t("@(@)"),S:t("e"),di:t("Y"),o:t("~"),M:t("~()"),Q:t("~(f)"),dj:t("~(bi)"),a6:t("~(a1)"),d5:t("~(E)"),da:t("~(E,au)"),eA:t("~(c,c)"),fH:t("~(c,@)"),gn:t("~(b7)"),c4:t("~(Y)")}})();(function constants(){var t=hunkHelpers.makeConstList
C.l=W.ca.prototype
C.m=W.bO.prototype
C.h=W.cg.prototype
C.b=W.bR.prototype
C.H=J.aj.prototype
C.a=J.G.prototype
C.e=J.di.prototype
C.q=J.dj.prototype
C.c=J.bv.prototype
C.d=J.bh.prototype
C.I=J.b5.prototype
C.P=W.cp.prototype
C.v=J.f3.prototype
C.w=W.dB.prototype
C.k=J.bz.prototype
C.R=W.bA.prototype
C.x=new H.dc(H.ee("dc<w>"))
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
C.E=new P.f1()
C.F=new P.fr()
C.f=new P.fJ()
C.G=new P.fL()
C.p=new P.bT(0)
C.J=new P.eO(null)
C.K=new P.eP(null)
C.L=H.h(t(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),u.s)
C.M=H.h(t(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),u.s)
C.N=H.h(t([]),u.s)
C.r=H.h(t([]),u.cO)
C.t=H.h(t(["bind","if","ref","repeat","syntax"]),u.s)
C.j=H.h(t(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),u.s)
C.O=H.h(t([]),H.ee("G<b0>"))
C.u=new H.d4(0,{},C.O,H.ee("d4<b0,@>"))
C.Q=new H.cA("call")})();(function staticFields(){$.bf=0
$.d_=null
$.lq=null
$.mL=null
$.mD=null
$.mY=null
$.km=null
$.ks=null
$.l5=null
$.cP=null
$.eb=null
$.ec=null
$.l_=!1
$.H=C.f
$.aJ=[]
$.br=null
$.kI=null
$.lJ=null
$.lI=null
$.lG=function(){var t=u.N
return P.a5(["animationend","webkitAnimationEnd","animationiteration","webkitAnimationIteration","animationstart","webkitAnimationStart","fullscreenchange","webkitfullscreenchange","fullscreenerror","webkitfullscreenerror","keyadded","webkitkeyadded","keyerror","webkitkeyerror","keymessage","webkitkeymessage","needkey","webkitneedkey","pointerlockchange","webkitpointerlockchange","pointerlockerror","webkitpointerlockerror","resourcetimingbufferfull","webkitresourcetimingbufferfull","transitionend","webkitTransitionEnd","speechchange","webkitSpeechChange"],t,t)}()
$.fy=P.bY(u.N,u.Z)
$.lx=null
$.lw=null
$.lv=null
$.ly=null
$.lu=null
$.a_=null
$.lF=0
$.ln=null
$.h2=!1
$.cI=null
$.eA=null
$.lz=null
$.ew=!1
$.aO=!1
$.ey=!1
$.ez=!1
$.ex=!1
$.lA=null
$.lB=null
$.aB=P.bY(u.N,H.ee("bQ"))
$.oQ=H.h(["gray","red","orange","brown","yellow","green","lime","turquoise","cyan","sky","blue","violet","magenta","pink"],u.s)})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"qF","kz",function(){return H.l4("_$dart_dartClosure")})
t($,"qO","lc",function(){return H.l4("_$dart_js")})
t($,"qT","nb",function(){return H.bk(H.j1({
toString:function(){return"$receiver$"}}))})
t($,"qU","nc",function(){return H.bk(H.j1({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"qV","nd",function(){return H.bk(H.j1(null))})
t($,"qW","ne",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"qZ","nh",function(){return H.bk(H.j1(void 0))})
t($,"r_","ni",function(){return H.bk(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(s){return s.message}}())})
t($,"qY","ng",function(){return H.bk(H.m3(null))})
t($,"qX","nf",function(){return H.bk(function(){try{null.$method$}catch(s){return s.message}}())})
t($,"r1","nk",function(){return H.bk(H.m3(void 0))})
t($,"r0","nj",function(){return H.bk(function(){try{(void 0).$method$}catch(s){return s.message}}())})
t($,"r3","ld",function(){return P.oU()})
t($,"qK","h0",function(){var s=new P.a3(C.f,H.ee("a3<w>"))
s.fi(null)
return s})
t($,"rc","nq",function(){return new Error().stack!=void 0})
t($,"qE","na",function(){return{}})
t($,"r9","np",function(){return P.lS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],u.N)})
t($,"qD","n9",function(){return P.op("^\\S+$")})
t($,"ra","eg",function(){return u.b.a(P.bG(self))})
t($,"r4","le",function(){return H.l4("_$dart_dartObject")})
t($,"rb","lf",function(){return function DartObject(a){this.o=a}})
t($,"r6","nm",function(){return W.i3("_customDragEnter",u.V)})
t($,"r8","no",function(){return W.i3("_customDragOver",u.V)})
t($,"r7","nn",function(){return W.i3("_customDragLeave",u.V)})
t($,"r5","nl",function(){return W.i3("_customDrop",u.V)})
t($,"qz","lb",function(){var s=U.kF()
s.a="#bb5555"
return s})
t($,"qy","la",function(){var s=U.kF()
s.a="#8899aa"
return s})
t($,"qx","l9",function(){var s=U.kF()
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.aj,DOMImplementation:J.aj,MediaError:J.aj,Navigator:J.aj,NavigatorConcurrentHardware:J.aj,NavigatorUserMediaError:J.aj,OverconstrainedError:J.aj,PositionError:J.aj,Range:J.aj,Selection:J.aj,SQLError:J.aj,DataView:H.bZ,ArrayBufferView:H.bZ,Float32Array:H.bx,Float64Array:H.bx,Int16Array:H.eT,Int32Array:H.eU,Int8Array:H.eV,Uint16Array:H.eW,Uint32Array:H.eX,Uint8ClampedArray:H.du,CanvasPixelArray:H.du,Uint8Array:H.eY,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLCanvasElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.ca,HTMLAreaElement:W.em,HTMLBaseElement:W.cb,Blob:W.bN,File:W.bN,HTMLBodyElement:W.bO,HTMLButtonElement:W.ce,CDATASection:W.b3,CharacterData:W.b3,Comment:W.b3,ProcessingInstruction:W.b3,Text:W.b3,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.cg,MSStyleCSSProperties:W.cg,CSS2Properties:W.cg,CSSStyleSheet:W.d5,HTMLDivElement:W.bR,DOMException:W.hN,DOMRectReadOnly:W.d6,DOMTokenList:W.hO,Element:W.p,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,EventTarget:W.F,HTMLFormElement:W.eF,HTMLCollection:W.bu,HTMLFormControlsCollection:W.bu,HTMLOptionsCollection:W.bu,ImageData:W.dg,HTMLInputElement:W.ck,KeyboardEvent:W.bi,Location:W.eQ,WheelEvent:W.a1,MouseEvent:W.a1,DragEvent:W.a1,Document:W.m,DocumentFragment:W.m,HTMLDocument:W.m,ShadowRoot:W.m,XMLDocument:W.m,DocumentType:W.m,Node:W.m,NodeList:W.cp,RadioNodeList:W.cp,HTMLOptionElement:W.cq,PointerEvent:W.cr,HTMLSelectElement:W.cx,HTMLStyleElement:W.cz,StyleSheet:W.fa,HTMLTableElement:W.dB,HTMLTableRowElement:W.fb,HTMLTableSectionElement:W.fc,HTMLTemplateElement:W.cB,HTMLTextAreaElement:W.cC,Touch:W.aI,TouchEvent:W.b7,TouchList:W.ff,CompositionEvent:W.ay,FocusEvent:W.ay,TextEvent:W.ay,UIEvent:W.ay,Window:W.bA,DOMWindow:W.bA,DedicatedWorkerGlobalScope:W.b8,ServiceWorkerGlobalScope:W.b8,SharedWorkerGlobalScope:W.b8,WorkerGlobalScope:W.b8,Attr:W.cE,CSSRuleList:W.fo,ClientRect:W.dG,DOMRect:W.dG,NamedNodeMap:W.dS,MozNamedAttrMap:W.dS,IDBKeyRange:P.dm,SVGScriptElement:P.cv,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,DOMImplementation:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,Selection:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:true,File:true,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleSheet:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,WheelEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLOptionElement:true,PointerEvent:true,HTMLSelectElement:true,HTMLStyleElement:true,StyleSheet:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,IDBKeyRange:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})
H.aw.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
H.dU.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.dV.$nativeSuperclassTag="ArrayBufferView"
H.dW.$nativeSuperclassTag="ArrayBufferView"
H.aH.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.mP,[])
else U.mP([])})})()
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

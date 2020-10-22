(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=='function')n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){H.r7(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lj"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lj"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var s=null
return d?function(){if(s===null)s=H.lj(this,a,b,c,true,false,e).prototype
return s}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var s=[]
for(var r=0;r<h.length;r++){var q=h[r]
if(typeof q=='string')q=a[q]
q.$callName=g[r]
s.push(q)}var q=s[0]
q.$R=e
q.$D=f
var p=i
if(typeof p=="number")p+=x
var o=h[0]
q.$stubName=o
var n=tearOff(s,j||0,p,c,o,d)
a[b]=n
if(c)q.$tearOff=n}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var s=0;s<w.length;s++){if(w[s]==C)continue
if(w[s][a])return w[s][a]}}var C={},H={kZ:function kZ(){},
bm:function(a,b,c,d){P.aH(b,"start")
if(c!=null){P.aH(c,"end")
if(typeof b!=="number")return b.J()
if(b>c)H.E(P.a8(b,0,c,"start",null))}return new H.ak(a,b,c,d.i("ak<0>"))},
ma:function(a,b,c,d){if(t.j.b(a))return new H.aX(a,b,c.i("@<0>").q(d).i("aX<1,2>"))
return new H.aF(a,b,c.i("@<0>").q(d).i("aF<1,2>"))},
p2:function(a,b,c){var s="takeCount"
P.bu(b,s,t.S)
P.aH(b,s)
if(t.j.b(a))return new H.di(a,b,c.i("di<0>"))
return new H.cf(a,b,c.i("cf<0>"))},
oY:function(a,b,c){var s="count"
if(t.j.b(a)){P.bu(b,s,t.S)
P.aH(b,s)
return new H.dh(a,b,c.i("dh<0>"))}P.bu(b,s,t.S)
P.aH(b,s)
return new H.cd(a,b,c.i("cd<0>"))},
bC:function(){return new P.b6("No element")},
ow:function(){return new P.b6("Too many elements")},
m4:function(){return new P.b6("Too few elements")},
p0:function(a,b,c){H.fc(a,0,J.af(a)-1,b,c)},
fc:function(a,b,c,d,e){if(c-b<=32)H.p_(a,b,c,d,e)
else H.oZ(a,b,c,d,e)},
p_:function(a,b,c,d,e){var s,r,q,p,o,n
for(s=b+1,r=J.ap(a);s<=c;++s){q=r.h(a,s)
p=s
while(!0){if(p>b){o=d.$2(r.h(a,p-1),q)
if(typeof o!=="number")return o.J()
o=o>0}else o=!1
if(!o)break
n=p-1
r.j(a,p,r.h(a,n))
p=n}r.j(a,p,q)}},
oZ:function(a5,a6,a7,a8,a9){var s,r,q,p,o,n,m,l,k,j,i,h=C.e.aF(a7-a6+1,6),g=a6+h,f=a7-h,e=C.e.aF(a6+a7,2),d=e-h,c=e+h,b=J.ap(a5),a=b.h(a5,g),a0=b.h(a5,d),a1=b.h(a5,e),a2=b.h(a5,c),a3=b.h(a5,f),a4=a8.$2(a,a0)
if(typeof a4!=="number")return a4.J()
if(a4>0){s=a0
a0=a
a=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.J()
if(a4>0){s=a3
a3=a2
a2=s}a4=a8.$2(a,a1)
if(typeof a4!=="number")return a4.J()
if(a4>0){s=a1
a1=a
a=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.J()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a,a2)
if(typeof a4!=="number")return a4.J()
if(a4>0){s=a2
a2=a
a=s}a4=a8.$2(a1,a2)
if(typeof a4!=="number")return a4.J()
if(a4>0){s=a2
a2=a1
a1=s}a4=a8.$2(a0,a3)
if(typeof a4!=="number")return a4.J()
if(a4>0){s=a3
a3=a0
a0=s}a4=a8.$2(a0,a1)
if(typeof a4!=="number")return a4.J()
if(a4>0){s=a1
a1=a0
a0=s}a4=a8.$2(a2,a3)
if(typeof a4!=="number")return a4.J()
if(a4>0){s=a3
a3=a2
a2=s}b.j(a5,g,a)
b.j(a5,e,a1)
b.j(a5,f,a3)
b.j(a5,d,b.h(a5,a6))
b.j(a5,c,b.h(a5,a7))
r=a6+1
q=a7-1
if(J.bd(a8.$2(a0,a2),0)){for(p=r;p<=q;++p){o=b.h(a5,p)
n=a8.$2(o,a0)
if(n===0)continue
if(typeof n!=="number")return n.am()
if(n<0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else for(;!0;){n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.J()
if(n>0){--q
continue}else{m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
q=m
r=l
break}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)
q=m
break}}}}k=!0}else{for(p=r;p<=q;++p){o=b.h(a5,p)
j=a8.$2(o,a0)
if(typeof j!=="number")return j.am()
if(j<0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else{i=a8.$2(o,a2)
if(typeof i!=="number")return i.J()
if(i>0)for(;!0;){n=a8.$2(b.h(a5,q),a2)
if(typeof n!=="number")return n.J()
if(n>0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.am()
m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
r=l}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)}q=m
break}}}}k=!1}a4=r-1
b.j(a5,a6,b.h(a5,a4))
b.j(a5,a4,a0)
a4=q+1
b.j(a5,a7,b.h(a5,a4))
b.j(a5,a4,a2)
H.fc(a5,a6,r-2,a8,a9)
H.fc(a5,q+2,a7,a8,a9)
if(k)return
if(r<g&&q>f){for(;J.bd(a8.$2(b.h(a5,r),a0),0);)++r
for(;J.bd(a8.$2(b.h(a5,q),a2),0);)--q
for(p=r;p<=q;++p){o=b.h(a5,p)
if(a8.$2(o,a0)===0){if(p!==r){b.j(a5,p,b.h(a5,r))
b.j(a5,r,o)}++r}else if(a8.$2(o,a2)===0)for(;!0;)if(a8.$2(b.h(a5,q),a2)===0){--q
if(q<p)break
continue}else{n=a8.$2(b.h(a5,q),a0)
if(typeof n!=="number")return n.am()
m=q-1
if(n<0){b.j(a5,p,b.h(a5,r))
l=r+1
b.j(a5,r,b.h(a5,q))
b.j(a5,q,o)
r=l}else{b.j(a5,p,b.h(a5,q))
b.j(a5,q,o)}q=m
break}}H.fc(a5,r,q,a8,a9)}else H.fc(a5,r,q,a8,a9)},
n:function n(){},
ac:function ac(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
Q:function Q(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aF:function aF(a,b,c){this.a=a
this.b=b
this.$ti=c},
aX:function aX(a,b,c){this.a=a
this.b=b
this.$ti=c},
a7:function a7(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
L:function L(a,b,c){this.a=a
this.b=b
this.$ti=c},
al:function al(a,b,c){this.a=a
this.b=b
this.$ti=c},
cg:function cg(a,b,c){this.a=a
this.b=b
this.$ti=c},
cf:function cf(a,b,c){this.a=a
this.b=b
this.$ti=c},
di:function di(a,b,c){this.a=a
this.b=b
this.$ti=c},
dJ:function dJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cd:function cd(a,b,c){this.a=a
this.b=b
this.$ti=c},
dh:function dh(a,b,c){this.a=a
this.b=b
this.$ti=c},
dG:function dG(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(a){this.$ti=a},
dk:function dk(a){this.$ti=a},
T:function T(){},
cM:function cM(a){this.a=a},
on:function(){throw H.a(P.A("Cannot modify unmodifiable Map"))},
nu:function(a){var s,r=H.nt(a)
if(r!=null)return r
s="minified:"+a
return s},
qJ:function(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.dX.b(a)},
b:function(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.z(a)
if(typeof s!="string")throw H.a(H.bb(a))
return s},
cb:function(a){var s=a.$identityHash
if(s==null){s=Math.random()*0x3fffffff|0
a.$identityHash=s}return s},
mh:function(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return H.w(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
oT:function(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=C.d.ax(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
j_:function(a){return H.oK(a)},
oK:function(a){var s,r,q
if(a instanceof P.t)return H.aA(H.Y(a),null)
if(J.ck(a)===C.N||t.cx.b(a)){s=C.q(a)
if(H.mg(s))return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&H.mg(q))return q}}return H.aA(H.Y(a),null)},
mg:function(a){var s=a!=="Object"&&a!==""
return s},
ad:function(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((55296|C.e.c2(s,10))>>>0,56320|s&1023)}throw H.a(P.a8(a,0,1114111,null,null))},
ca:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oS:function(a){var s=H.ca(a).getFullYear()+0
return s},
oQ:function(a){var s=H.ca(a).getMonth()+1
return s},
oM:function(a){var s=H.ca(a).getDate()+0
return s},
oN:function(a){var s=H.ca(a).getHours()+0
return s},
oP:function(a){var s=H.ca(a).getMinutes()+0
return s},
oR:function(a){var s=H.ca(a).getSeconds()+0
return s},
oO:function(a){var s=H.ca(a).getMilliseconds()+0
return s},
bH:function(a,b,c){var s,r,q={}
q.a=0
s=[]
r=[]
q.a=b.length
C.a.H(s,b)
q.b=""
if(c!=null&&c.a!==0)c.t(0,new H.iZ(q,r,s))
""+q.a
return J.o4(a,new H.eR(C.W,0,s,r,0))},
oL:function(a,b,c){var s,r,q,p
if(b instanceof Array)s=c==null||c.a===0
else s=!1
if(s){r=b
q=r.length
if(q===0){if(!!a.$0)return a.$0()}else if(q===1){if(!!a.$1)return a.$1(r[0])}else if(q===2){if(!!a.$2)return a.$2(r[0],r[1])}else if(q===3){if(!!a.$3)return a.$3(r[0],r[1],r[2])}else if(q===4){if(!!a.$4)return a.$4(r[0],r[1],r[2],r[3])}else if(q===5)if(!!a.$5)return a.$5(r[0],r[1],r[2],r[3],r[4])
p=a[""+"$"+q]
if(p!=null)return p.apply(a,r)}return H.oJ(a,b,c)},
oJ:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i=b instanceof Array?b:P.cA(b,!0,t.z),h=i.length,g=a.$R
if(h<g)return H.bH(a,i,c)
s=a.$D
r=s==null
q=!r?s():null
p=J.ck(a)
o=p.$C
if(typeof o=="string")o=p[o]
if(r){if(c!=null&&c.a!==0)return H.bH(a,i,c)
if(h===g)return o.apply(a,i)
return H.bH(a,i,c)}if(q instanceof Array){if(c!=null&&c.a!==0)return H.bH(a,i,c)
if(h>g+q.length)return H.bH(a,i,null)
C.a.H(i,q.slice(h-g))
return o.apply(a,i)}else{if(h>g)return H.bH(a,i,c)
n=Object.keys(q)
if(c==null)for(r=n.length,m=0;m<n.length;n.length===r||(0,H.y)(n),++m){l=q[H.r(n[m])]
if(C.t===l)return H.bH(a,i,c)
C.a.l(i,l)}else{for(r=n.length,k=0,m=0;m<n.length;n.length===r||(0,H.y)(n),++m){j=H.r(n[m])
if(c.L(j)){++k
C.a.l(i,c.h(0,j))}else{l=q[j]
if(C.t===l)return H.bH(a,i,c)
C.a.l(i,l)}}if(k!==c.a)return H.bH(a,i,c)}return o.apply(a,i)}},
ae:function(a){throw H.a(H.bb(a))},
w:function(a,b){if(a==null)J.af(a)
throw H.a(H.bR(a,b))},
bR:function(a,b){var s,r,q="index"
if(!H.bO(b))return new P.aV(!0,b,q,null)
s=H.u(J.af(a))
if(!(b<0)){if(typeof s!=="number")return H.ae(s)
r=b>=s}else r=!0
if(r)return P.bh(b,a,q,null,s)
return P.cG(b,q)},
bb:function(a){return new P.aV(!0,a,null,null)},
a:function(a){var s,r
if(a==null)a=new P.f7()
s=new Error()
s.dartException=a
r=H.r8
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
r8:function(){return J.z(this.dartException)},
E:function(a){throw H.a(a)},
y:function(a){throw H.a(P.aO(a))},
bn:function(a){var s,r,q,p,o,n
a=H.nl(a.replace(String({}),'$receiver$'))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=H.h([],t.U)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new H.jb(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),r,q,p,o,n)},
jc:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
mn:function(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
mf:function(a,b){return new H.f6(a,b==null?null:b.method)},
l_:function(a,b){var s=b==null,r=s?null:b.method
return new H.eT(a,r,s?null:b.receiver)},
O:function(a){if(a==null)return new H.f8(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.cl(a,a.dartException)
return H.qo(a)},
cl:function(a,b){if(t.fz.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
qo:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.e.c2(r,16)&8191)===10)switch(q){case 438:return H.cl(a,H.l_(H.b(s)+" (Error "+q+")",e))
case 445:case 5007:return H.cl(a,H.mf(H.b(s)+" (Error "+q+")",e))}}if(a instanceof TypeError){p=$.nC()
o=$.nD()
n=$.nE()
m=$.nF()
l=$.nI()
k=$.nJ()
j=$.nH()
$.nG()
i=$.nL()
h=$.nK()
g=p.a2(s)
if(g!=null)return H.cl(a,H.l_(H.r(s),g))
else{g=o.a2(s)
if(g!=null){g.method="call"
return H.cl(a,H.l_(H.r(s),g))}else{g=n.a2(s)
if(g==null){g=m.a2(s)
if(g==null){g=l.a2(s)
if(g==null){g=k.a2(s)
if(g==null){g=j.a2(s)
if(g==null){g=m.a2(s)
if(g==null){g=i.a2(s)
if(g==null){g=h.a2(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return H.cl(a,H.mf(H.r(s),g))}}return H.cl(a,new H.fp(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new P.dH()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return H.cl(a,new P.aV(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new P.dH()
return a},
bc:function(a){var s
if(a==null)return new H.e8(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new H.e8(a)},
ni:function(a){if(a==null||typeof a!='object')return J.bf(a)
else return H.cb(a)},
qA:function(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.j(0,a[s],a[r])}return b},
qI:function(a,b,c,d,e,f){t.b.a(a)
switch(H.u(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.a(P.aq("Unsupported number of arguments for wrapped closure"))},
d2:function(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.qI)
a.$identity=s
return s},
om:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=b[0],k=l.$callName,j=e?Object.create(new H.fd().constructor.prototype):Object.create(new H.cq(null,null,null,"").constructor.prototype)
j.$initialize=j.constructor
if(e)s=function static_tear_off(){this.$initialize()}
else{r=$.bg
if(typeof r!=="number")return r.C()
$.bg=r+1
r=new Function("a,b,c,d"+r,"this.$initialize(a,b,c,d"+r+")")
s=r}j.constructor=s
s.prototype=j
if(!e){q=H.lT(a,l,f)
q.$reflectionInfo=d}else{j.$static_name=g
q=l}j.$S=H.oi(d,e,f)
j[k]=q
for(p=q,o=1;o<b.length;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.lT(a,n,f)
j[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}j.$C=p
j.$R=l.$R
j.$D=l.$D
return s},
oi:function(a,b,c){var s
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n8,a)
if(typeof a=="string"){if(b)throw H.a("Cannot compute signature for static tearoff.")
s=c?H.of:H.oe
return function(d,e){return function(){return e(this,d)}}(a,s)}throw H.a("Error in functionType of tearoff")},
oj:function(a,b,c,d){var s=H.lO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
lT:function(a,b,c){var s,r,q,p,o,n,m
if(c)return H.ol(a,b)
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=27
if(o)return H.oj(r,!p,s,b)
if(r===0){p=$.bg
if(typeof p!=="number")return p.C()
$.bg=p+1
n="self"+p
return new Function("return function(){var "+n+" = this."+H.b(H.kS())+";return "+n+"."+H.b(s)+"();}")()}m="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r).join(",")
p=$.bg
if(typeof p!=="number")return p.C()
$.bg=p+1
m+=p
return new Function("return function("+m+"){return this."+H.b(H.kS())+"."+H.b(s)+"("+m+");}")()},
ok:function(a,b,c,d){var s=H.lO,r=H.og
switch(b?-1:a){case 0:throw H.a(new H.fb("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,r)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,r)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,r)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,r)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,r)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,r)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,s,r)}},
ol:function(a,b){var s,r,q,p,o,n,m=H.kS(),l=$.lM
if(l==null)l=$.lM=H.lL("receiver")
s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.ok(r,!p,s,b)
if(r===1){p="return function(){return this."+H.b(m)+"."+H.b(s)+"(this."+l+");"
o=$.bg
if(typeof o!=="number")return o.C()
$.bg=o+1
return new Function(p+o+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
p="return function("+n+"){return this."+H.b(m)+"."+H.b(s)+"(this."+l+", "+n+");"
o=$.bg
if(typeof o!=="number")return o.C()
$.bg=o+1
return new Function(p+o+"}")()},
lj:function(a,b,c,d,e,f,g){return H.om(a,b,c,d,!!e,!!f,g)},
oe:function(a,b){return H.h0(v.typeUniverse,H.Y(a.a),b)},
of:function(a,b){return H.h0(v.typeUniverse,H.Y(a.c),b)},
lO:function(a){return a.a},
og:function(a){return a.c},
kS:function(){var s=$.lN
return s==null?$.lN=H.lL("self"):s},
lL:function(a){var s,r,q,p=new H.cq("self","target","receiver","name"),o=J.kX(Object.getOwnPropertyNames(p),t.r)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw H.a(P.aL("Field name "+a+" not found."))},
a3:function(a){if(a==null)H.qp("boolean expression must not be null")
return a},
qp:function(a){throw H.a(new H.fs(a))},
r7:function(a){throw H.a(new P.eF(a))},
n6:function(a){return v.getIsolateTag(a)},
t7:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
qM:function(a){var s,r,q,p,o,n=H.r($.n7.$1(a)),m=$.ku[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kA[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=H.mN($.n_.$2(a,n))
if(q!=null){m=$.ku[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.kA[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=H.kD(s)
$.ku[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.kA[n]=s
return s}if(p==="-"){o=H.kD(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.nj(a,s)
if(p==="*")throw H.a(P.l4(n))
if(v.leafTags[n]===true){o=H.kD(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.nj(a,s)},
nj:function(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.ln(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
kD:function(a){return J.ln(a,!1,null,!!a.$ia0)},
qN:function(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return H.kD(s)
else return J.ln(s,c,null,null)},
qF:function(){if(!0===$.lm)return
$.lm=!0
H.qG()},
qG:function(){var s,r,q,p,o,n,m,l
$.ku=Object.create(null)
$.kA=Object.create(null)
H.qE()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.nk.$1(o)
if(n!=null){m=H.qN(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
qE:function(){var s,r,q,p,o,n,m=C.C()
m=H.d1(C.D,H.d1(C.E,H.d1(C.r,H.d1(C.r,H.d1(C.F,H.d1(C.G,H.d1(C.H(C.q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.n7=new H.kx(p)
$.n_=new H.ky(o)
$.nk=new H.kz(n)},
d1:function(a,b){return a(b)||b},
oF:function(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw H.a(P.dp("Illegal RegExp pattern ("+String(n)+")",a))},
r3:function(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qz:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
nl:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lp:function(a,b,c){var s=H.r4(a,b,c)
return s},
r4:function(a,b,c){var s,r,q,p
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}p=a.indexOf(b,0)
if(p<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.nl(b),'g'),H.qz(c))},
r5:function(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return H.r6(a,s,s+b.length,c)},
r6:function(a,b,c,d){var s=a.substring(0,b),r=a.substring(c)
return s+d+r},
dd:function dd(a,b){this.a=a
this.$ti=b},
dc:function dc(){},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
de:function de(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dM:function dM(a,b){this.a=a
this.$ti=b},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.c=b
_.d=c
_.e=d
_.f=e},
iZ:function iZ(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f6:function f6(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.a=a},
f8:function f8(a){this.a=a},
e8:function e8(a){this.a=a
this.b=null},
bY:function bY(){},
fk:function fk(){},
fd:function fd(){},
cq:function cq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fb:function fb(a){this.a=a},
fs:function fs(a){this.a=a},
k0:function k0(){},
ab:function ab(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iG:function iG(a){this.a=a},
iJ:function iJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
as:function as(a,b){this.a=a
this.$ti=b},
dx:function dx(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
eS:function eS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fg:function fg(a,b){this.a=a
this.c=b},
k7:function k7(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bs:function(a,b,c){if(a>>>0!==a||a>=c)throw H.a(H.bR(b,a))},
c8:function c8(){},
at:function at(){},
bF:function bF(){},
aG:function aG(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
dC:function dC(){},
f4:function f4(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
oW:function(a,b){var s=b.c
return s==null?b.c=H.lc(a,b.z,!0):s},
mj:function(a,b){var s=b.c
return s==null?b.c=H.ed(a,"c6",[b.z]):s},
mk:function(a){var s=a.y
if(s===6||s===7||s===8)return H.mk(a.z)
return s===11||s===12},
oV:function(a){return a.cy},
d3:function(a){return H.ld(v.typeUniverse,a,!1)},
bP:function(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=H.bP(a,s,a0,a1)
if(r===s)return b
return H.mK(a,r,!0)
case 7:s=b.z
r=H.bP(a,s,a0,a1)
if(r===s)return b
return H.lc(a,r,!0)
case 8:s=b.z
r=H.bP(a,s,a0,a1)
if(r===s)return b
return H.mJ(a,r,!0)
case 9:q=b.Q
p=H.en(a,q,a0,a1)
if(p===q)return b
return H.ed(a,b.z,p)
case 10:o=b.z
n=H.bP(a,o,a0,a1)
m=b.Q
l=H.en(a,m,a0,a1)
if(n===o&&l===m)return b
return H.la(a,n,l)
case 11:k=b.z
j=H.bP(a,k,a0,a1)
i=b.Q
h=H.ql(a,i,a0,a1)
if(j===k&&h===i)return b
return H.mI(a,j,h)
case 12:g=b.Q
a1+=g.length
f=H.en(a,g,a0,a1)
o=b.z
n=H.bP(a,o,a0,a1)
if(f===g&&n===o)return b
return H.lb(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw H.a(P.hd("Attempted to substitute unexpected RTI kind "+c))}},
en:function(a,b,c,d){var s,r,q,p,o=b.length,n=[]
for(s=!1,r=0;r<o;++r){q=b[r]
p=H.bP(a,q,c,d)
if(p!==q)s=!0
n.push(p)}return s?n:b},
qm:function(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=[]
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=H.bP(a,o,c,d)
if(n!==o)s=!0
l.push(q)
l.push(p)
l.push(n)}return s?l:b},
ql:function(a,b,c,d){var s,r=b.a,q=H.en(a,r,c,d),p=b.b,o=H.en(a,p,c,d),n=b.c,m=H.qm(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new H.fG()
s.a=q
s.b=o
s.c=m
return s},
h:function(a,b){a[v.arrayRti]=b
return a},
qv:function(a){var s=a.$S
if(s!=null){if(typeof s=="number")return H.n8(s)
return a.$S()}return null},
n9:function(a,b){var s
if(H.mk(b))if(a instanceof H.bY){s=H.qv(a)
if(s!=null)return s}return H.Y(a)},
Y:function(a){var s
if(a instanceof P.t){s=a.$ti
return s!=null?s:H.lg(a)}if(Array.isArray(a))return H.D(a)
return H.lg(J.ck(a))},
D:function(a){var s=a[v.arrayRti],r=t.dG
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
j:function(a){var s=a.$ti
return s!=null?s:H.lg(a)},
lg:function(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return H.q4(a,s)},
q4:function(a,b){var s=a instanceof H.bY?a.__proto__.__proto__.constructor:b,r=H.pR(v.typeUniverse,s.name)
b.$ccache=r
return r},
n8:function(a){var s,r,q
H.u(a)
s=v.types
r=s[a]
if(typeof r=="string"){q=H.ld(v.typeUniverse,r,!1)
s[a]=q
return q}return r},
q3:function(a){var s,r,q=this,p=t.K
if(q===p)return H.ej(q,a,H.q7)
if(!H.bt(q))if(!(q===t._))p=q===p
else p=!0
else p=!0
if(p)return H.ej(q,a,H.qa)
p=q.y
s=p===6?q.z:q
if(s===t.S)r=H.bO
else if(s===t.dx||s===t.cZ)r=H.q6
else if(s===t.R)r=H.q8
else r=s===t.y?H.kp:null
if(r!=null)return H.ej(q,a,r)
if(s.y===9){p=s.z
if(s.Q.every(H.qK)){q.r="$i"+p
return H.ej(q,a,H.q9)}}else if(p===7)return H.ej(q,a,H.q0)
return H.ej(q,a,H.pZ)},
ej:function(a,b,c){a.b=c
return a.b(b)},
q2:function(a){var s,r,q=this
if(!H.bt(q))if(!(q===t._))s=q===t.K
else s=!0
else s=!0
if(s)r=H.pU
else if(q===t.K)r=H.pT
else r=H.q_
q.a=r
return q.a(a)},
qf:function(a){var s,r=a.y
if(!H.bt(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s||a===t.eK||r===7||a===t.a||a===t.T},
pZ:function(a){var s=this
if(a==null)return H.qf(s)
return H.a9(v.typeUniverse,H.n9(a,s),null,s,null)},
q0:function(a){if(a==null)return!0
return this.z.b(a)},
q9:function(a){var s=this,r=s.r
if(a instanceof P.t)return!!a[r]
return!!J.ck(a)[r]},
t6:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mO(a,s)},
q_:function(a){var s=this
if(a==null)return a
else if(s.b(a))return a
H.mO(a,s)},
mO:function(a,b){throw H.a(H.mH(H.mu(a,H.n9(a,b),H.aA(b,null))))},
aS:function(a,b,c,d){var s=null
if(H.a9(v.typeUniverse,a,s,b,s))return a
throw H.a(H.mH("The type argument '"+H.b(H.aA(a,s))+"' is not a subtype of the type variable bound '"+H.b(H.aA(b,s))+"' of type variable '"+H.b(c)+"' in '"+H.b(d)+"'."))},
mu:function(a,b,c){var s=P.by(a),r=H.aA(b==null?H.Y(a):b,null)
return s+": type '"+H.b(r)+"' is not a subtype of type '"+H.b(c)+"'"},
mH:function(a){return new H.ec("TypeError: "+a)},
az:function(a,b){return new H.ec("TypeError: "+H.mu(a,null,b))},
q7:function(a){return a!=null},
pT:function(a){return a},
qa:function(a){return!0},
pU:function(a){return a},
kp:function(a){return!0===a||!1===a},
rW:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.a(H.az(a,"bool"))},
cZ:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.a(H.az(a,"bool"))},
rX:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.a(H.az(a,"bool?"))},
rY:function(a){if(typeof a=="number")return a
throw H.a(H.az(a,"double"))},
pS:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.az(a,"double"))},
rZ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.az(a,"double?"))},
bO:function(a){return typeof a=="number"&&Math.floor(a)===a},
t_:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.a(H.az(a,"int"))},
u:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.a(H.az(a,"int"))},
t0:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.a(H.az(a,"int?"))},
q6:function(a){return typeof a=="number"},
t1:function(a){if(typeof a=="number")return a
throw H.a(H.az(a,"num"))},
kj:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.az(a,"num"))},
t2:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.az(a,"num?"))},
q8:function(a){return typeof a=="string"},
t3:function(a){if(typeof a=="string")return a
throw H.a(H.az(a,"String"))},
r:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.a(H.az(a,"String"))},
mN:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.a(H.az(a,"String?"))},
qi:function(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=C.d.C(r,H.aA(a[q],b))
return s},
mP:function(a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=", "
if(a7!=null){s=a7.length
if(a6==null){a6=H.h([],t.U)
r=null}else r=a6.length
q=a6.length
for(p=s;p>0;--p)C.a.l(a6,"T"+(q+p))
for(o=t.r,n=t._,m=t.K,l="<",k="",p=0;p<s;++p,k=a4){l+=k
j=a6.length
i=j-1-p
if(i<0)return H.w(a6,i)
l=C.d.C(l,a6[i])
h=a7[p]
g=h.y
if(!(g===2||g===3||g===4||g===5||h===o))if(!(h===n))j=h===m
else j=!0
else j=!0
if(!j)l+=C.d.C(" extends ",H.aA(h,a6))}l+=">"}else{l=""
r=null}o=a5.z
f=a5.Q
e=f.a
d=e.length
c=f.b
b=c.length
a=f.c
a0=a.length
a1=H.aA(o,a6)
for(a2="",a3="",p=0;p<d;++p,a3=a4)a2+=C.d.C(a3,H.aA(e[p],a6))
if(b>0){a2+=a3+"["
for(a3="",p=0;p<b;++p,a3=a4)a2+=C.d.C(a3,H.aA(c[p],a6))
a2+="]"}if(a0>0){a2+=a3+"{"
for(a3="",p=0;p<a0;p+=3,a3=a4){a2+=a3
if(a[p+1])a2+="required "
a2+=J.lw(H.aA(a[p+2],a6)," ")+a[p]}a2+="}"}if(r!=null){a6.toString
a6.length=r}return l+"("+a2+") => "+H.b(a1)},
aA:function(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=H.aA(a.z,b)
return s}if(l===7){r=a.z
s=H.aA(r,b)
q=r.y
return J.lw(q===11||q===12?C.d.C("(",s)+")":s,"?")}if(l===8)return"FutureOr<"+H.b(H.aA(a.z,b))+">"
if(l===9){p=H.qn(a.z)
o=a.Q
return o.length!==0?p+("<"+H.qi(o,b)+">"):p}if(l===11)return H.mP(a,b,null)
if(l===12)return H.mP(a.z,b,a.Q)
if(l===13){b.toString
n=a.z
m=b.length
n=m-1-n
if(n<0||n>=m)return H.w(b,n)
return b[n]}return"?"},
qn:function(a){var s,r=H.nt(a)
if(r!=null)return r
s="minified:"+a
return s},
mL:function(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
pR:function(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return H.ld(a,b,!1)
else if(typeof m=="number"){s=m
r=H.ee(a,5,"#")
q=[]
for(p=0;p<s;++p)q.push(r)
o=H.ed(a,b,q)
n[b]=o
return o}else return m},
pP:function(a,b){return H.mM(a.tR,b)},
pO:function(a,b){return H.mM(a.eT,b)},
ld:function(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=H.mE(H.mC(a,null,b,c))
r.set(b,s)
return s},
h0:function(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=H.mE(H.mC(a,b,c,!0))
q.set(c,r)
return r},
pQ:function(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=H.la(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
bN:function(a,b){b.a=H.q2
b.b=H.q3
return b},
ee:function(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new H.aZ(null,null)
s.y=b
s.cy=c
r=H.bN(a,s)
a.eC.set(c,r)
return r},
mK:function(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=H.pM(a,b,r,c)
a.eC.set(r,s)
return s},
pM:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.bt(b))r=b===t.a||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new H.aZ(null,null)
q.y=6
q.z=b
q.cy=c
return H.bN(a,q)},
lc:function(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=H.pL(a,b,r,c)
a.eC.set(r,s)
return s},
pL:function(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!H.bt(b))if(!(b===t.a||b===t.T))if(s!==7)r=s===8&&H.kB(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.eK)return t.a
else if(s===6){q=b.z
if(q.y===8&&H.kB(q.z))return q
else return H.oW(a,b)}}p=new H.aZ(null,null)
p.y=7
p.z=b
p.cy=c
return H.bN(a,p)},
mJ:function(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=H.pJ(a,b,r,c)
a.eC.set(r,s)
return s},
pJ:function(a,b,c,d){var s,r,q
if(d){s=b.y
if(!H.bt(b))if(!(b===t._))r=b===t.K
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return H.ed(a,"c6",[b])
else if(b===t.a||b===t.T)return t.gK}q=new H.aZ(null,null)
q.y=8
q.z=b
q.cy=c
return H.bN(a,q)},
pN:function(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new H.aZ(null,null)
s.y=13
s.z=b
s.cy=q
r=H.bN(a,s)
a.eC.set(q,r)
return r},
h_:function(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
pI:function(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
ed:function(a,b,c){var s,r,q,p=b
if(c.length!==0)p+="<"+H.h_(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new H.aZ(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=H.bN(a,r)
a.eC.set(p,q)
return q},
la:function(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+H.h_(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aZ(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=H.bN(a,o)
a.eC.set(q,n)
return n},
mI:function(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+H.h_(m)
if(j>0){s=l>0?",":""
r=H.h_(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=H.pI(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new H.aZ(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=H.bN(a,o)
a.eC.set(q,r)
return r},
lb:function(a,b,c,d){var s,r=b.cy+("<"+H.h_(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=H.pK(a,b,c,r,d)
a.eC.set(r,s)
return s},
pK:function(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=new Array(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=H.bP(a,b,r,0)
m=H.en(a,c,r,0)
return H.lb(a,n,m,c!==m)}}l=new H.aZ(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return H.bN(a,l)},
mC:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
mE:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=a.r,f=a.s
for(s=g.length,r=0;r<s;){q=g.charCodeAt(r)
if(q>=48&&q<=57)r=H.pB(r+1,q,g,f)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=H.mD(a,r,g,f,!1)
else if(q===46)r=H.mD(a,r,g,f,!0)
else{++r
switch(q){case 44:break
case 58:f.push(!1)
break
case 33:f.push(!0)
break
case 59:f.push(H.bM(a.u,a.e,f.pop()))
break
case 94:f.push(H.pN(a.u,f.pop()))
break
case 35:f.push(H.ee(a.u,5,"#"))
break
case 64:f.push(H.ee(a.u,2,"@"))
break
case 126:f.push(H.ee(a.u,3,"~"))
break
case 60:f.push(a.p)
a.p=f.length
break
case 62:p=a.u
o=f.splice(a.p)
H.l9(a.u,a.e,o)
a.p=f.pop()
n=f.pop()
if(typeof n=="string")f.push(H.ed(p,n,o))
else{m=H.bM(p,a.e,n)
switch(m.y){case 11:f.push(H.lb(p,m,o,a.n))
break
default:f.push(H.la(p,m,o))
break}}break
case 38:H.pC(a,f)
break
case 42:l=a.u
f.push(H.mK(l,H.bM(l,a.e,f.pop()),a.n))
break
case 63:l=a.u
f.push(H.lc(l,H.bM(l,a.e,f.pop()),a.n))
break
case 47:l=a.u
f.push(H.mJ(l,H.bM(l,a.e,f.pop()),a.n))
break
case 40:f.push(a.p)
a.p=f.length
break
case 41:p=a.u
k=new H.fG()
j=p.sEA
i=p.sEA
n=f.pop()
if(typeof n=="number")switch(n){case-1:j=f.pop()
break
case-2:i=f.pop()
break
default:f.push(n)
break}else f.push(n)
o=f.splice(a.p)
H.l9(a.u,a.e,o)
a.p=f.pop()
k.a=o
k.b=j
k.c=i
f.push(H.mI(p,H.bM(p,a.e,f.pop()),k))
break
case 91:f.push(a.p)
a.p=f.length
break
case 93:o=f.splice(a.p)
H.l9(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-1)
break
case 123:f.push(a.p)
a.p=f.length
break
case 125:o=f.splice(a.p)
H.pE(a.u,a.e,o)
a.p=f.pop()
f.push(o)
f.push(-2)
break
default:throw"Bad character "+q}}}h=f.pop()
return H.bM(a.u,a.e,h)},
pB:function(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
mD:function(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=H.mL(s,o.z)[p]
if(n==null)H.E('No "'+p+'" in "'+H.oV(o)+'"')
d.push(H.h0(s,o,n))}else d.push(p)
return m},
pC:function(a,b){var s=b.pop()
if(0===s){b.push(H.ee(a.u,1,"0&"))
return}if(1===s){b.push(H.ee(a.u,4,"1&"))
return}throw H.a(P.hd("Unexpected extended operation "+H.b(s)))},
bM:function(a,b,c){if(typeof c=="string")return H.ed(a,c,a.sEA)
else if(typeof c=="number")return H.pD(a,b,c)
else return c},
l9:function(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=H.bM(a,b,c[s])},
pE:function(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=H.bM(a,b,c[s])},
pD:function(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw H.a(P.hd("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw H.a(P.hd("Bad index "+c+" for "+b.n(0)))},
a9:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!H.bt(d))if(!(d===t._))s=d===t.K
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(H.bt(b))return!1
if(b.y!==1)s=b===t.a||b===t.T
else s=!0
if(s)return!0
q=r===13
if(q)if(H.a9(a,c[b.z],c,d,e))return!0
p=d.y
if(r===6)return H.a9(a,b.z,c,d,e)
if(p===6){s=d.z
return H.a9(a,b,c,s,e)}if(r===8){if(!H.a9(a,b.z,c,d,e))return!1
return H.a9(a,H.mj(a,b),c,d,e)}if(r===7){s=H.a9(a,b.z,c,d,e)
return s}if(p===8){if(H.a9(a,b,c,d.z,e))return!0
return H.a9(a,b,c,H.mj(a,d),e)}if(p===7){s=H.a9(a,b,c,d.z,e)
return s}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.b)return!0
if(p===12){if(b===t.dY)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!H.a9(a,k,c,j,e)||!H.a9(a,j,e,k,c))return!1}return H.mT(a,b.z,c,d.z,e)}if(p===11){if(b===t.dY)return!0
if(s)return!1
return H.mT(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return H.q5(a,b,c,d,e)}return!1},
mT:function(a2,a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.a9(a2,a3.z,a4,a5.z,a6))return!1
s=a3.Q
r=a5.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!H.a9(a2,p[h],a6,g,a4))return!1}for(h=0;h<m;++h){g=l[h]
if(!H.a9(a2,p[o+h],a6,g,a4))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!H.a9(a2,k[h],a6,g,a4))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
if(a1<a0)continue
g=f[b-1]
if(!H.a9(a2,e[a+2],a6,g,a4))return!1
break}}return!0},
q5:function(a,b,c,d,e){var s,r,q,p,o,n,m,l,k=b.z,j=d.z
if(k===j){s=b.Q
r=d.Q
q=s.length
for(p=0;p<q;++p){o=s[p]
n=r[p]
if(!H.a9(a,o,c,n,e))return!1}return!0}if(d===t.K)return!0
m=H.mL(a,k)
if(m==null)return!1
l=m[j]
if(l==null)return!1
q=l.length
r=d.Q
for(p=0;p<q;++p)if(!H.a9(a,H.h0(a,b,l[p]),c,r[p],e))return!1
return!0},
kB:function(a){var s,r=a.y
if(!(a===t.a||a===t.T))if(!H.bt(a))if(r!==7)if(!(r===6&&H.kB(a.z)))s=r===8&&H.kB(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
qK:function(a){var s
if(!H.bt(a))if(!(a===t._))s=a===t.K
else s=!0
else s=!0
return s},
bt:function(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.r},
mM:function(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
aZ:function aZ(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
fG:function fG(){this.c=this.b=this.a=null},
fE:function fE(){},
ec:function ec(a){this.a=a},
na:function(a){return t.fj.b(a)||t.B.b(a)||t.mz.b(a)||t.ad.b(a)||t.A.b(a)||t.hE.b(a)||t.f5.b(a)},
nt:function(a){return v.mangledGlobalNames[a]},
qX:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
ln:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h5:function(a){var s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.lm==null){H.qF()
o=a[v.dispatchPropertyName]}if(o!=null){s=o.p
if(!1===s)return o.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return o.i
if(o.e===r)throw H.a(P.l4("Return interceptor for "+H.b(s(a,o))))}q=a.constructor
p=q==null?null:q[J.m6()]
if(p!=null)return p
p=H.qM(a)
if(p!=null)return p
if(typeof a=="function")return C.P
s=Object.getPrototypeOf(a)
if(s==null)return C.y
if(s===Object.prototype)return C.y
if(typeof q=="function"){Object.defineProperty(q,J.m6(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
m6:function(){var s=$.mz
return s==null?$.mz=v.getIsolateTag("_$dart_js"):s},
kV:function(a,b){if(a<0||a>4294967295)throw H.a(P.a8(a,0,4294967295,"length",null))
return J.ox(new Array(a),b)},
kW:function(a,b){if(a<0)throw H.a(P.aL("Length must be a non-negative integer: "+a))
return H.h(new Array(a),b.i("G<0>"))},
ox:function(a,b){return J.kX(H.h(a,b.i("G<0>")),b)},
kX:function(a,b){a.fixed$length=Array
return a},
m5:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
kY:function(a,b){var s,r
for(s=a.length;b<s;){r=C.d.aU(a,b)
if(r!==32&&r!==13&&!J.m5(r))break;++b}return b},
oE:function(a,b){var s,r
for(;b>0;b=s){s=b-1
r=C.d.c8(a,s)
if(r!==32&&r!==13&&!J.m5(r))break}return b},
ck:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dt.prototype
return J.eQ.prototype}if(typeof a=="string")return J.bj.prototype
if(a==null)return J.cz.prototype
if(typeof a=="boolean")return J.eP.prototype
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.t)return a
return J.h5(a)},
qB:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.t)return a
return J.h5(a)},
ap:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.t)return a
return J.h5(a)},
aT:function(a){if(a==null)return a
if(a.constructor==Array)return J.G.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.t)return a
return J.h5(a)},
kv:function(a){if(typeof a=="number")return J.bD.prototype
if(a==null)return a
if(!(a instanceof P.t))return J.bJ.prototype
return a},
n5:function(a){if(typeof a=="number")return J.bD.prototype
if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.t))return J.bJ.prototype
return a},
kw:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.t))return J.bJ.prototype
return a},
R:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b5.prototype
return a}if(a instanceof P.t)return a
return J.h5(a)},
lw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.qB(a).C(a,b)},
bd:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.ck(a).R(a,b)},
nR:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kv(a).J(a,b)},
lx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.n5(a).aA(a,b)},
be:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.qJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ap(a).h(a,b)},
kI:function(a,b,c){return J.aT(a).j(a,b,c)},
nS:function(a,b,c,d){return J.R(a).eH(a,b,c,d)},
kJ:function(a){return J.R(a).eK(a)},
nT:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return J.R(a).fc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
nU:function(a,b,c,d){return J.R(a).fl(a,b,c,d)},
nV:function(a,b,c){return J.R(a).fm(a,b,c)},
eq:function(a,b){return J.aT(a).l(a,b)},
ly:function(a,b){return J.n5(a).dH(a,b)},
lz:function(a,b){return J.ap(a).D(a,b)},
h8:function(a,b,c){return J.ap(a).fU(a,b,c)},
nW:function(a,b){return J.R(a).dK(a,b)},
aU:function(a,b){return J.aT(a).B(a,b)},
cm:function(a){return J.kv(a).cd(a)},
nX:function(a){return J.R(a).gfG(a)},
nY:function(a){return J.R(a).gdF(a)},
bT:function(a){return J.R(a).gdG(a)},
kK:function(a){return J.aT(a).gE(a)},
bf:function(a){return J.ck(a).gu(a)},
lA:function(a){return J.ap(a).gM(a)},
lB:function(a){return J.ap(a).gcq(a)},
B:function(a){return J.aT(a).gA(a)},
kL:function(a){return J.aT(a).gaK(a)},
af:function(a){return J.ap(a).gk(a)},
nZ:function(a){return J.R(a).gdU(a)},
o_:function(a){return J.R(a).gdX(a)},
o0:function(a){return J.R(a).gdY(a)},
lC:function(a,b,c){return J.aT(a).ai(a,b,c)},
er:function(a,b,c){return J.R(a).dR(a,b,c)},
o1:function(a,b){return J.aT(a).T(a,b)},
h9:function(a,b,c){return J.aT(a).I(a,b,c)},
o2:function(a,b){return J.R(a).hf(a,b)},
o3:function(a,b){return J.R(a).hh(a,b)},
o4:function(a,b){return J.ck(a).br(a,b)},
es:function(a){return J.R(a).bs(a)},
o5:function(a,b){return J.R(a).ht(a,b)},
d4:function(a){return J.kv(a).F(a)},
o6:function(a,b){return J.R(a).sfd(a,b)},
o7:function(a,b){return J.R(a).sX(a,b)},
et:function(a,b){return J.R(a).K(a,b)},
lD:function(a,b,c){return J.R(a).cH(a,b,c)},
o8:function(a,b){return J.aT(a).b3(a,b)},
o9:function(a,b,c){return J.kw(a).a3(a,b,c)},
lE:function(a){return J.kv(a).hz(a)},
oa:function(a){return J.aT(a).aM(a)},
ob:function(a){return J.kw(a).hA(a)},
z:function(a){return J.ck(a).n(a)},
eu:function(a){return J.kw(a).ax(a)},
ar:function ar(){},
eP:function eP(){},
cz:function cz(){},
bE:function bE(){},
fa:function fa(){},
bJ:function bJ(){},
b5:function b5(){},
G:function G(a){this.$ti=a},
iF:function iF(a){this.$ti=a},
aC:function aC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bD:function bD(){},
dt:function dt(){},
eQ:function eQ(){},
bj:function bj(){}},P={
pm:function(){var s,r,q={}
if(self.scheduleImmediate!=null)return P.qq()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(H.d2(new P.jr(q),1)).observe(s,{childList:true})
return new P.jq(q,s,r)}else if(self.setImmediate!=null)return P.qr()
return P.qs()},
pn:function(a){self.scheduleImmediate(H.d2(new P.js(t.M.a(a)),0))},
po:function(a){self.setImmediate(H.d2(new P.jt(t.M.a(a)),0))},
pp:function(a){P.l3(C.u,t.M.a(a))},
l3:function(a,b){var s=C.e.aF(a.a,1000)
return P.pG(s<0?0:s,b)},
pG:function(a,b){var s=new P.kb()
s.eF(a,b)
return s},
ot:function(a,b){var s=new P.a2($.I,b.i("a2<0>"))
P.p3(C.u,new P.iB(s,a))
return s},
pv:function(a,b){var s,r,q
b.a=1
try{a.ea(new P.jE(b),new P.jF(b),t.a)}catch(q){s=H.O(q)
r=H.bc(q)
P.ns(new P.jG(b,s,r))}},
mv:function(a,b){var s,r,q
for(s=t.j_;r=a.a,r===2;)a=s.a(a.c)
if(r>=4){q=b.bf()
b.a=a.a
b.c=a.c
P.cV(b,q)}else{q=t.F.a(b.c)
b.a=2
b.c=a
a.di(q)}},
cV:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=null,b={},a=b.a=a0
for(s=t.n,r=t.F,q=t.g7;!0;){p={}
o=a.a===8
if(a1==null){if(o){n=s.a(a.c)
P.d0(c,c,a.b,n.a,n.b)}return}p.a=a1
m=a1.a
for(a=a1;m!=null;a=m,m=l){a.a=null
P.cV(b.a,a)
p.a=m
l=m.a}k=b.a
j=k.c
p.b=o
p.c=j
i=!o
if(i){h=a.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=a.b.b
if(o){h=k.b===g
h=!(h||h)}else h=!1
if(h){s.a(j)
P.d0(c,c,k.b,j.a,j.b)
return}f=$.I
if(f!==g)$.I=g
else f=c
a=a.c
if((a&15)===8)new P.jK(p,b,o).$0()
else if(i){if((a&1)!==0)new P.jJ(p,j).$0()}else if((a&2)!==0)new P.jI(b,p).$0()
if(f!=null)$.I=f
a=p.c
if(q.b(a)){e=p.a.b
if(a.a>=4){d=r.a(e.c)
e.c=null
a1=e.bg(d)
e.a=a.a
e.c=a.c
b.a=a
continue}else P.mv(a,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a1=e.bg(d)
a=p.b
k=p.c
if(!a){e.$ti.c.a(k)
e.a=4
e.c=k}else{s.a(k)
e.a=8
e.c=k}b.a=e
a=e}},
qh:function(a,b){var s
if(t.ng.b(a))return b.e1(a,t.z,t.K,t.l)
s=t.mq
if(s.b(a))return s.a(a)
throw H.a(P.d5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
qc:function(){var s,r
for(s=$.d_;s!=null;s=$.d_){$.el=null
r=s.b
$.d_=r
if(r==null)$.ek=null
s.a.$0()}},
qk:function(){$.lh=!0
try{P.qc()}finally{$.el=null
$.lh=!1
if($.d_!=null)$.lt().$1(P.n0())}},
mY:function(a){var s=new P.ft(a),r=$.ek
if(r==null){$.d_=$.ek=s
if(!$.lh)$.lt().$1(P.n0())}else $.ek=r.b=s},
qj:function(a){var s,r,q,p=$.d_
if(p==null){P.mY(a)
$.el=$.ek
return}s=new P.ft(a)
r=$.el
if(r==null){s.b=p
$.d_=$.el=s}else{q=r.b
s.b=q
$.el=r.b=s
if(q==null)$.ek=s}},
ns:function(a){var s=null,r=$.I
if(C.f===r){P.em(s,s,C.f,a)
return}P.em(s,s,r,t.M.a(r.c5(a)))},
cK:function(a,b,c){return new P.ea(null,a,c.i("ea<0>"))},
mX:function(a){var s,r,q
if(a==null)return
try{a.$0()}catch(q){s=H.O(q)
r=H.bc(q)
P.d0(null,null,$.I,s,t.l.a(r))}},
ms:function(a,b){if(b==null)b=P.qu()
if(t.b9.b(b))return a.e1(b,t.z,t.K,t.l)
if(t.i6.b(b))return t.mq.a(b)
throw H.a(P.aL("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))},
qe:function(a,b){P.d0(null,null,$.I,a,b)},
qd:function(){},
p3:function(a,b){var s=$.I
if(s===C.f)return P.l3(a,t.M.a(b))
return P.l3(a,t.M.a(s.c5(b)))},
he:function(a,b){var s=b==null?P.lI(a):b
P.bu(a,"error",t.K)
return new P.d7(a,s)},
lI:function(a){var s
if(t.fz.b(a)){s=a.gb4()
if(s!=null)return s}return C.K},
d0:function(a,b,c,d,e){P.qj(new P.kq(d,e))},
mU:function(a,b,c,d,e){var s,r=$.I
if(r===c)return d.$0()
$.I=c
s=r
try{r=d.$0()
return r}finally{$.I=s}},
mW:function(a,b,c,d,e,f,g){var s,r=$.I
if(r===c)return d.$1(e)
$.I=c
s=r
try{r=d.$1(e)
return r}finally{$.I=s}},
mV:function(a,b,c,d,e,f,g,h,i){var s,r=$.I
if(r===c)return d.$2(e,f)
$.I=c
s=r
try{r=d.$2(e,f)
return r}finally{$.I=s}},
em:function(a,b,c,d){var s
t.M.a(d)
s=C.f!==c
if(s)d=!(!s||!1)?c.c5(d):c.fH(d,t.p)
P.mY(d)},
jr:function jr(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
kb:function kb(){},
kc:function kc(a,b){this.a=a
this.b=b},
am:function am(a,b){this.a=a
this.$ti=b},
aJ:function aJ(a,b,c,d,e,f,g){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
bL:function bL(){},
ea:function ea(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.f=_.e=_.d=null
_.$ti=c},
k8:function k8(a,b){this.a=a
this.b=b},
k9:function k9(a){this.a=a},
iB:function iB(a,b){this.a=a
this.b=b},
fw:function fw(){},
eb:function eb(a,b){this.a=a
this.$ti=b},
ch:function ch(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
a2:function a2(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jC:function jC(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jD:function jD(a,b){this.a=a
this.b=b},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a){this.a=a},
jJ:function jJ(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
ft:function ft(a){this.a=a
this.b=null},
W:function W(){},
j5:function j5(a,b){this.a=a
this.b=b},
j6:function j6(a,b){this.a=a
this.b=b},
a4:function a4(){},
ff:function ff(){},
cQ:function cQ(){},
cR:function cR(){},
X:function X(){},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
ju:function ju(a){this.a=a},
cW:function cW(){},
bo:function bo(){},
dN:function dN(a,b){this.b=a
this.a=null
this.$ti=b},
fB:function fB(a,b){this.b=a
this.c=b
this.a=null},
fA:function fA(){},
e4:function e4(){},
jV:function jV(a,b){this.a=a
this.b=b},
cX:function cX(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cS:function cS(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
dQ:function dQ(){},
cU:function cU(a,b,c,d,e,f,g){var _=this
_.x=a
_.y=null
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
dZ:function dZ(a,b,c){this.b=a
this.a=b
this.$ti=c},
d7:function d7(a,b){this.a=a
this.b=b},
eh:function eh(){},
kq:function kq(a,b){this.a=a
this.b=b},
fS:function fS(){},
k2:function k2(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(a,b){this.a=a
this.b=b},
k3:function k3(a,b,c){this.a=a
this.b=b
this.c=c},
mw:function(a,b){var s=a[b]
return s===a?null:s},
l7:function(a,b,c){if(c==null)a[b]=a
else a[b]=c},
mx:function(){var s=Object.create(null)
P.l7(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
a_:function(a,b,c){return b.i("@<0>").q(c).i("m8<1,2>").a(H.qA(a,new H.ab(b.i("@<0>").q(c).i("ab<1,2>"))))},
c7:function(a,b){return new H.ab(a.i("@<0>").q(b).i("ab<1,2>"))},
dy:function(a){return new P.dX(a.i("dX<0>"))},
l8:function(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
jQ:function(a,b,c){var s=new P.cj(a,b,c.i("cj<0>"))
s.c=a.e
return s},
ov:function(a,b,c){var s,r
if(P.li(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=H.h([],t.U)
C.a.l($.aK,a)
try{P.qb(a,s)}finally{if(0>=$.aK.length)return H.w($.aK,-1)
$.aK.pop()}r=P.ml(b,t.d.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
iD:function(a,b,c){var s,r
if(P.li(a))return b+"..."+c
s=new P.aQ(b)
C.a.l($.aK,a)
try{r=s
r.a=P.ml(r.a,a,", ")}finally{if(0>=$.aK.length)return H.w($.aK,-1)
$.aK.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
li:function(a){var s,r
for(s=$.aK.length,r=0;r<s;++r)if(a===$.aK[r])return!0
return!1},
qb:function(a,b){var s,r,q,p,o,n,m,l=a.gA(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.m())return
s=H.b(l.gp())
C.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return H.w(b,-1)
r=b.pop()
if(0>=b.length)return H.w(b,-1)
q=b.pop()}else{p=l.gp();++j
if(!l.m()){if(j<=4){C.a.l(b,H.b(p))
return}r=H.b(p)
if(0>=b.length)return H.w(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp();++j
for(;l.m();p=o,o=n){n=l.gp();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return H.w(b,-1)
k-=b.pop().length+2;--j}C.a.l(b,"...")
return}}q=H.b(p)
r=H.b(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return H.w(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)C.a.l(b,m)
C.a.l(b,q)
C.a.l(b,r)},
m9:function(a,b){var s,r,q=P.dy(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,H.y)(a),++r)q.l(0,b.a(a[r]))
return q},
iL:function(a){var s,r={}
if(P.li(a))return"{...}"
s=new P.aQ("")
try{C.a.l($.aK,a)
s.a+="{"
r.a=!0
a.t(0,new P.iM(r,s))
s.a+="}"}finally{if(0>=$.aK.length)return H.w($.aK,-1)
$.aK.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
dR:function dR(){},
dU:function dU(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dS:function dS(a,b){this.a=a
this.$ti=b},
dT:function dT(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dX:function dX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fM:function fM(a){this.a=a
this.c=this.b=null},
cj:function cj(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
dz:function dz(){},
i:function i(){},
dA:function dA(){},
iM:function iM(a,b){this.a=a
this.b=b},
V:function V(){},
ef:function ef(){},
cB:function cB(){},
dL:function dL(){},
b0:function b0(){},
dF:function dF(){},
e5:function e5(){},
dY:function dY(){},
e6:function e6(){},
cY:function cY(){},
qg:function(a,b){var s,r,q,p
if(typeof a!="string")throw H.a(H.bb(a))
s=null
try{s=JSON.parse(a)}catch(q){r=H.O(q)
p=P.dp(String(r),null)
throw H.a(p)}p=P.kk(s)
return p},
kk:function(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.fK(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=P.kk(a[s])
return a},
m7:function(a,b,c){return new P.dv(a,b)},
pY:function(a){return a.hH()},
py:function(a,b){return new P.jN(a,[],P.qx())},
pz:function(a,b,c){var s,r=new P.aQ(""),q=P.py(r,b)
q.bC(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
fK:function fK(a,b){this.a=a
this.b=b
this.c=null},
fL:function fL(a){this.a=a},
eC:function eC(){},
cs:function cs(){},
iC:function iC(){},
cy:function cy(){},
dv:function dv(a,b){this.a=a
this.b=b},
eU:function eU(a,b){this.a=a
this.b=b},
iI:function iI(){},
eW:function eW(a){this.b=a},
eV:function eV(a){this.a=a},
jO:function jO(){},
jP:function jP(a,b){this.a=a
this.b=b},
jN:function jN(a,b,c){this.c=a
this.a=b
this.b=c},
qH:function(a){var s=H.mh(a,null)
if(s!=null)return s
throw H.a(P.dp(a,null))},
os:function(a){if(a instanceof H.bY)return a.n(0)
return"Instance of '"+H.b(H.j_(a))+"'"},
iK:function(a,b,c,d){var s,r=c?J.kW(a,d):J.kV(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
cA:function(a,b,c){var s,r=H.h([],c.i("G<0>"))
for(s=J.B(a);s.m();)C.a.l(r,c.a(s.gp()))
if(b)return r
return J.kX(r,c)},
oU:function(a){return new H.eS(a,H.oF(a,!1,!0,!1,!1,!1))},
ml:function(a,b,c){var s=J.B(b)
if(!s.m())return a
if(c.length===0){do a+=H.b(s.gp())
while(s.m())}else{a+=H.b(s.gp())
for(;s.m();)a=a+c+H.b(s.gp())}return a},
mc:function(a,b,c,d){return new P.f5(a,b,c,d)},
oo:function(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)H.E(P.aL("DateTime is outside valid range: "+a))
P.bu(!1,"isUtc",t.y)
return new P.cv(a,!1)},
op:function(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
oq:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
eG:function(a){if(a>=10)return""+a
return"0"+a},
by:function(a){if(typeof a=="number"||H.kp(a)||null==a)return J.z(a)
if(typeof a=="string")return JSON.stringify(a)
return P.os(a)},
hd:function(a){return new P.d6(a)},
aL:function(a){return new P.aV(!1,null,null,a)},
d5:function(a,b,c){return new P.aV(!0,a,b,c)},
kM:function(a){return new P.aV(!1,null,a,"Must not be null")},
bu:function(a,b,c){if(a==null)throw H.a(P.kM(b))
return a},
cG:function(a,b){return new P.dE(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.dE(b,c,!0,a,d,"Invalid value")},
l2:function(a,b,c,d){if(typeof a!=="number")return a.am()
if(a<b||a>c)throw H.a(P.a8(a,b,c,d,null))
return a},
mi:function(a,b,c){if(0>a||a>c)throw H.a(P.a8(a,0,c,"start",null))
if(a>b||b>c)throw H.a(P.a8(b,a,c,"end",null))
return b},
aH:function(a,b){if(typeof a!=="number")return a.am()
if(a<0)throw H.a(P.a8(a,0,null,b,null))
return a},
bh:function(a,b,c,d,e){var s=H.u(e==null?J.af(b):e)
return new P.eO(s,!0,a,c,"Index out of range")},
A:function(a){return new P.fq(a)},
l4:function(a){return new P.fo(a)},
ax:function(a){return new P.b6(a)},
aO:function(a){return new P.eD(a)},
aq:function(a){return new P.fF(a)},
dp:function(a,b){return new P.dn(a,b)},
nh:function(a,b){var s=P.h6(a)
if(s!=null)return s
if(b==null)throw H.a(P.dp(a,null))
return b.$1(a)},
h6:function(a){var s=J.eu(a),r=H.mh(s,null)
return r==null?H.oT(s):r},
eo:function(a){H.qX(H.b(J.z(a)))},
iN:function iN(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
c2:function c2(a){this.a=a},
i8:function i8(){},
i9:function i9(){},
K:function K(){},
d6:function d6(a){this.a=a},
fn:function fn(){},
f7:function f7(){},
aV:function aV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dE:function dE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eO:function eO(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fq:function fq(a){this.a=a},
fo:function fo(a){this.a=a},
b6:function b6(a){this.a=a},
eD:function eD(a){this.a=a},
f9:function f9(){},
dH:function dH(){},
eF:function eF(a){this.a=a},
fF:function fF(a){this.a=a},
dn:function dn(a,b){this.a=a
this.b=b},
e:function e(){},
U:function U(){},
v:function v(){},
t:function t(){},
fU:function fU(){},
aQ:function aQ(a){this.a=a},
hT:function(){return window.navigator.userAgent},
eE:function eE(){},
hR:function hR(a){this.a=a},
eL:function eL(a,b){this.a=a
this.b=b},
iy:function iy(){},
iz:function iz(){},
iA:function iA(){},
dw:function dw(){},
pV:function(a,b,c,d){var s,r,q
H.cZ(b)
t.gs.a(d)
if(H.a3(b)){s=[c]
C.a.H(s,d)
d=s}r=t.z
q=P.cA(J.h9(d,P.qL(),r),!0,r)
t.b.a(a)
return P.ei(H.oL(a,q,null))},
a6:function(a){if(!t.f.b(a)&&!t.d.b(a))throw H.a(P.aL("object must be a Map or Iterable"))
return P.bQ(P.du(a))},
du:function(a){return new P.iH(new P.dU(t.mp)).$1(a)},
aD:function(a,b){var s=[]
C.a.H(s,J.h9(a,P.kC(),t.z))
return new P.q(s,b.i("q<0>"))},
pW:function(a){return a},
le:function(a,b,c){var s
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(s){H.O(s)}return!1},
mR:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return null},
ei:function(a){if(a==null||typeof a=="string"||typeof a=="number"||H.kp(a))return a
if(a instanceof P.P)return a.a
if(H.na(a))return a
if(t.jv.b(a))return a
if(a instanceof P.cv)return H.ca(a)
if(t.b.b(a))return P.mQ(a,"$dart_jsFunction",new P.km())
return P.mQ(a,"_$dart_jsObject",new P.kn($.lv()))},
mQ:function(a,b,c){var s=P.mR(a,b)
if(s==null){s=c.$1(a)
P.le(a,b,s)}return s},
kl:function(a){var s,r
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.na(a))return a
else if(a instanceof Object&&t.jv.b(a))return a
else if(a instanceof Date){s=H.u(a.getTime())
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)H.E(P.aL("DateTime is outside valid range: "+s))
P.bu(!1,"isUtc",t.y)
return new P.cv(s,!1)}else if(a.constructor===$.lv())return a.o
else return P.bQ(a)},
bQ:function(a){if(typeof a=="function")return P.lf(a,$.kG(),new P.kr())
if(a instanceof Array)return P.lf(a,$.lu(),new P.ks())
return P.lf(a,$.lu(),new P.kt())},
lf:function(a,b,c){var s=P.mR(a,b)
if(s==null||!(a instanceof Object)){s=c.$1(a)
P.le(a,b,s)}return s},
iH:function iH(a){this.a=a},
km:function km(){},
kn:function kn(a){this.a=a},
kr:function kr(){},
ks:function ks(){},
kt:function kt(){},
P:function P(a){this.a=a},
aE:function aE(a){this.a=a},
q:function q(a,b){this.a=a
this.$ti=b},
dW:function dW(){},
dV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
H:function H(a,b,c){this.a=a
this.b=b
this.$ti=c},
fR:function fR(){},
bI:function bI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cH:function cH(){},
ew:function ew(a){this.a=a},
l:function l(){}},W={
lF:function(a){var s=document.createElement("a")
if(a!=null)C.i.scj(s,a)
return s},
pq:function(a){var s=a.firstElementChild
if(s==null)throw H.a(P.ax("No elements"))
return s},
or:function(a,b,c){var s,r=document.body
r.toString
s=C.p.W(r,a,b,c)
s.toString
r=t.aN
r=new H.al(new W.an(s),r.i("p(i.E)").a(new W.ib()),r.i("al<i.E>"))
return t.h.a(r.gaC(r))},
dj:function(a){var s,r,q="element tag unavailable"
try{s=J.R(a)
if(typeof s.ge7(a)=="string")q=s.ge7(a)}catch(r){H.O(r)}return q},
ou:function(a){var s,r=document.createElement("input"),q=t.fY.a(r)
try{J.o7(q,a)}catch(s){H.O(s)}return q},
dB:function(a,b){var s=window,r=t.gD.a(document.createEvent("MouseEvent"))
r.toString
J.nT(r,a,!0,!0,s,0,0,0,0,0,!1,!1,!1,!1,0,W.pX(b))
return r},
p4:function(a){return new TouchEvent(a)},
p5:function(){var s
try{W.p4("touches")
return!0}catch(s){H.O(s)}return!1},
jM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mB:function(a,b,c,d){var s=W.jM(W.jM(W.jM(W.jM(0,a),b),c),d),r=536870911&s+((67108863&s)<<3)
r^=r>>>11
return 536870911&r+((16383&r)<<15)},
l6:function(a,b){var s,r=a.classList
for(s=0;s<2;++s)r.add(b[s])},
pu:function(a,b){var s,r,q=a.classList
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.y)(b),++r)q.remove(H.r(b[r]))},
ic:function(a,b){return new W.eK(a,b.i("eK<0>"))},
C:function(a,b,c,d,e){var s=W.mZ(new W.jB(c),t.B)
s=new W.dP(a,b,s,!1,e.i("dP<0>"))
s.ds()
return s},
my:function(a){var s=W.lF(null),r=window.location
s=new W.ci(new W.fT(s,r))
s.eD(a)
return s},
pw:function(a,b,c,d){t.h.a(a)
H.r(b)
H.r(c)
t.dl.a(d)
return!0},
px:function(a,b,c,d){var s,r,q
t.h.a(a)
H.r(b)
H.r(c)
s=t.dl.a(d).a
r=s.a
C.i.scj(r,c)
q=r.hostname
s=s.b
if(!(q==s.hostname&&r.port==s.port&&r.protocol==s.protocol))if(q==="")if(r.port===""){s=r.protocol
s=s===":"||s===""}else s=!1
else s=!1
else s=!0
return s},
mG:function(){var s=t.R,r=P.m9(C.w,s),q=t.hP.a(new W.ka()),p=H.h(["TEMPLATE"],t.U)
s=new W.fW(r,P.dy(s),P.dy(s),P.dy(s),null)
s.eE(null,new H.L(C.w,q,t.hb),p,null)
return s},
N:function(a){var s
if(a==null)return null
if("postMessage" in a){s=W.pr(a)
return s}else return t.iB.a(a)},
pX:function(a){return a},
pr:function(a){if(a===window)return t.kg.a(a)
else return new W.fz(a)},
mZ:function(a,b){var s=$.I
if(s===C.f)return a
return s.fI(a,b)},
k:function k(){},
cn:function cn(){},
ev:function ev(){},
cp:function cp(){},
bW:function bW(){},
bX:function bX(){},
cr:function cr(){},
b4:function b4(){},
J:function J(){},
ct:function ct(){},
hS:function hS(){},
cu:function cu(){},
c_:function c_(){},
c0:function c0(){},
hU:function hU(){},
eH:function eH(){},
df:function df(){},
hV:function hV(){},
fv:function fv(a,b){this.a=a
this.b=b},
ao:function ao(a,b){this.a=a
this.$ti=b},
o:function o(){},
ib:function ib(){},
f:function f(){},
id:function id(){},
ia:function ia(a){this.a=a},
F:function F(){},
eM:function eM(){},
bA:function bA(){},
dq:function dq(){},
dr:function dr(){},
bB:function bB(){},
bk:function bk(){},
eX:function eX(){},
a1:function a1(){},
an:function an(a){this.a=a},
m:function m(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cJ:function cJ(){},
cL:function cL(){},
fh:function fh(){},
dI:function dI(){},
fi:function fi(){},
fj:function fj(){},
cN:function cN(){},
cO:function cO(){},
aI:function aI(){},
b7:function b7(){},
fm:function fm(){},
ay:function ay(){},
bK:function bK(){},
jp:function jp(a){this.a=a},
b9:function b9(){},
cP:function cP(){},
fx:function fx(){},
dO:function dO(){},
e_:function e_(){},
fu:function fu(){},
fC:function fC(a){this.a=a},
fD:function fD(a){this.a=a},
eK:function eK(a,b){this.a=a
this.$ti=b},
br:function br(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
au:function au(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dP:function dP(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jB:function jB(a){this.a=a},
e9:function e9(a,b){this.a=null
this.b=a
this.$ti=b},
k6:function k6(a,b){this.a=a
this.b=b},
ci:function ci(a){this.a=a},
Z:function Z(){},
dD:function dD(a){this.a=a},
iP:function iP(a){this.a=a},
iO:function iO(a,b,c){this.a=a
this.b=b
this.c=c},
e7:function e7(){},
k4:function k4(){},
k5:function k5(){},
fW:function fW(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ka:function ka(){},
fV:function fV(){},
c5:function c5(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
fz:function fz(a){this.a=a},
fT:function fT(a,b){this.a=a
this.b=b},
eg:function eg(a){this.a=a
this.b=!1},
ki:function ki(a){this.a=a},
fy:function fy(){},
fI:function fI(){},
fJ:function fJ(){},
fO:function fO(){},
fP:function fP(){},
fX:function fX(){},
fY:function fY(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){}},Z={
lU:function(a,b,c,d){var s,r,q=$.lW
$.lW=q+1
s=H.h([],t.lv)
q=new Z.hX(q,b,c,d,s)
r=H.h([a],t.or)
q.sbS(t.u.a(r))
r=window
if(P.bQ(P.ei(r)).w("PointerEvent"))C.a.l(s,Z.pF(q))
else{if(W.p5())C.a.l(s,Z.pH(q))
C.a.l(s,Z.pA(q))}return q},
lV:function(a,b,c){return new Z.c1(b.b,b.c)},
oc:function(a){$.lG=a
if(!$.ha){C.A.gfE(window).e9(new Z.hb(),t.p)
$.ha=!0}},
pt:function(a,b){var s,r,q="_customDragOver"
if(b==null)return
s=$.cT
if(s===b)b.dispatchEvent(W.dB(q,null))
else{b.dispatchEvent(W.dB("_customDragEnter",s))
if($.cT!=null){r=W.dB("_customDragLeave",b)
$.cT.dispatchEvent(r)}b.dispatchEvent(W.dB(q,null))
$.cT=b}},
ps:function(a,b){J.nW(b,W.dB("_customDrop",null))
Z.mt()},
mt:function(){if($.cT!=null){var s=W.dB("_customDragLeave",null)
$.cT.dispatchEvent(s)
$.cT=null}},
pH:function(a){var s=t.e
s=new Z.fZ(H.h([],s),H.h([],s),a)
s.bJ(a)
return s},
pA:function(a){var s=t.e
s=new Z.fN(H.h([],s),H.h([],s),a)
s.bJ(a)
return s},
pF:function(a){var s=t.e
s=new Z.fQ(H.h([],s),H.h([],s),a)
s.bJ(a)
return s},
cw:function(a,b){var s=new Z.eJ(b,H.h([],t.e)),r=H.h([a],t.or)
s.sbS(t.u.a(r))
C.a.t(s.x,s.gfe())
return s},
i2:function(a,b){return new Z.aW(b.e)},
hX:function hX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.f=c
_.r=d
_.cx=_.ch=_.z=null
_.cy=e},
i1:function i1(a){this.a=a},
i0:function i0(a){this.a=a},
hZ:function hZ(){},
i_:function i_(a){this.a=a},
hY:function hY(){},
c1:function c1(a,b){this.a=a
this.d=b},
jw:function jw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.r=e
_.x=f},
ex:function ex(){},
hh:function hh(a,b){this.a=a
this.b=b},
hb:function hb(){},
ba:function ba(){},
jx:function jx(){},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
jA:function jA(){},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
kh:function kh(a){this.a=a},
kg:function kg(a){this.a=a},
kf:function kf(a){this.a=a},
ke:function ke(a){this.a=a},
kd:function kd(a){this.a=a},
fN:function fN(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a){this.a=a},
jT:function jT(a){this.a=a},
jS:function jS(a){this.a=a},
jR:function jR(a){this.a=a},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a){this.a=a},
jZ:function jZ(a){this.a=a},
jY:function jY(a){this.a=a},
jX:function jX(a){this.a=a},
jW:function jW(a){this.a=a},
eJ:function eJ(a,b){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=null
_.y=b},
i4:function i4(a){this.a=a},
i6:function i6(a){this.a=a},
i5:function i5(a){this.a=a},
i7:function i7(a){this.a=a},
i3:function i3(){},
aW:function aW(a){this.d=a},
bU:function bU(){}},U={
m1:function(a,b,c){var s=t.i,r=new U.c4(new U.ai(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],s)),b,a)
r.aP(a,b)
if(!C.a.D(H.h(["num","bool"],s),c))H.E(P.d5(c,"type","The expression type can only be num or bool"))
s=new U.bz(a.k2)
s.c=new U.ah(s,c,H.h([],t.C))
r.r=s
r.f=c
return r},
oX:function(a,b,c){var s=new U.cI("smart-quote",H.h([],t.aA),new U.ai(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t.i)),null,a)
s.aQ(a,b,c)
s.eC(a,b,c)
return s},
mm:function(a,b){var s=new U.dK(new U.ai(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t.i)),b,a)
s.aP(a,b)
return s},
kN:function(){var s=document.createElement("div")
s.innerText="\u2794"
s.classList.add("nt-arrow")
return s},
lP:function(a,b){var s,r,q,p=document.createElement("div")
p.classList.add("nt-cap")
s=b.al()
W.l6(p,t.bq.a(H.h([s,s+"-color"],t.i)))
U.ho(b,p)
r=b.db
if(r!=null){q=p.style
q.backgroundColor=r}if(a)p.classList.add("nt-cap-top")
else p.classList.add("nt-cap-bottom")
U.kQ(b,p,new U.hx(b))
return p},
md:function(a,b){var s,r,q=document.createElement("div")
q.classList.add("nt-notch")
s=b.al()
q.classList.add(s)
U.ho(b,q)
if(a)q.classList.add("nt-notch-top")
else q.classList.add("nt-notch-bottom")
r=s+"-color"
C.a.t(H.h(["filler","left","middle","right"],t.i),new U.iR(r,a,b,q))
U.kQ(b,q,new U.iS(b))
return q},
me:function(a,b){var s,r,q,p,o=document,n=o.createElement("div")
n.classList.add("nt-notch")
s=b.d
r=s.al()
n.classList.add(r)
U.ho(s,n)
if(a)n.classList.add("nt-notch-top")
else n.classList.add("nt-notch-bottom")
q=r+"-color"
C.a.t(H.h(["filler","left","middle","right"],t.i),new U.iQ(q,a,b,n))
if(!a){p=o.createElement("div")
p.className="nt-notch-clause-filler"
n.appendChild(p)}return n},
hj:function(a,b,c,d){var s=d?(b&&C.c).aH(b,!0):b
t.D.a(s)
s.toString
W.pu(s,H.h(["nt-block-first","nt-block-last","nt-block-standalone","nt-block-middle","nt-block-clause-first","nt-block-clause-last","nt-block-clause-standalone","nt-block-clause-middle"],t.cm))
s.classList.add(c)
a.appendChild(s)},
kO:function(a,b,c,d){var s,r=b.length
if(r===0)return
if(r===1)U.hj(a,C.a.gE(b).ry,c+"-standalone",d)
else{U.hj(a,C.a.gE(b).ry,c+"-first",d)
for(s=1;s<b.length-1;++s)U.hj(a,b[s].ry,c+"-middle",d)
U.hj(a,C.a.gaK(b).ry,c+"-last",d)}},
kP:function(){return new U.d9("#9977aa","#ffffff","#ffffff")},
lJ:function(a,b,c,d){var s=t.i,r=H.h(["id","action","required","isTerminal","placement","allowedTags","tags","instanceId","type","format","closeClauses","closeStarter","limit","note","blockColor","textColor","borderColor","font","clauses","params","properties","propertiesDisplay"],s),q=t.bj
s=new U.ag(new U.ai(r),b,c,new H.ab(q),new H.ab(q),H.h([],t.km),"child",new U.b8(),H.h([],s),a)
if(b==null){r=a.cx
s.b=r
a.cx=r+1}else if(b>=a.cx)a.cx=b+1
if(!d){r=a.cy
s.c=r
a.cy=r+1}return s},
ho:function(a,b){var s,r,q=a.dy
if(q!=null){s=b.style
s.borderColor=q}q=a.dx
if(q!=null){s=b.style
s.color=q}q=a.fr
if(q!=null){s=b.style
r=s.lineHeight
s.font=q
q=b.style
q.lineHeight=r}},
kQ:function(a,b,c){var s,r=Z.lU(b,a.k3,"input, textarea, button, select, option","nt-block-dragging")
r.gdW(r).v(a.gbG())
r.gdV(r).v(a.gcb())
s=Z.cw(b,a.k4)
s.gaw(s).v(a.ga1())
s.gau(s).v(new U.ht(c))
s.gav(s).v(new U.hu(c))},
lQ:function(a){return new U.aN(new U.ai(H.h(["x","y","blocks"],t.i)),a,H.h([],t.s))},
kT:function(a,b,c,d){var s
a.toString
C.c.K(a,"")
if(C.a.gE(b).gar()){a.classList.add("nt-chain-starter")
a.classList.remove("nt-chain-fragment")
a.appendChild(U.lP(!0,C.a.gE(b)))}else{a.classList.remove("nt-chain-starter")
a.classList.add("nt-chain-fragment")
if(d!=null)a.appendChild(d)
a.appendChild(U.md(!0,C.a.gE(b)))
a.appendChild(U.kN())}U.kO(a,b,"nt-block",c)
s=C.a.gaK(b).fy
if(s==null?!0:!s)a.appendChild(U.md(!1,C.a.gaK(b)))
else a.appendChild(U.lP(!1,C.a.gaK(b)))},
oh:function(a,b,c,d,e){return new U.aw(new U.ai(H.h(["children","action","open","close","allowedTags"],t.i)),a,b,c,d,e,new U.b8(),H.h([],t.s))},
qw:function(a,b){var s,r,q,p,o=t.pg
o.a(a)
o.a(b)
o=a.a
s=o.length
if(s!==0){if(0>=s)return H.w(o,0)
r=o[0].d==null}else r=!0
if(r)return-1
r=b.a
q=r.length
if(q!==0){if(0>=q)return H.w(r,0)
p=r[0].d==null}else p=!0
if(p)return 1
if(0>=s)return H.w(o,0)
o=o[0].d
if(0>=q)return H.w(r,0)
return J.ly(o,r[0].d)},
da:function(a){var s=a.a_()
if(s==null)s=""
return a.aN()?'"'+s+'"':s},
db:function(a){var s,r,q,p,o=a.d
if(o!=null){for(s=a.e,r=0;r<s.length;++r){q="{"+r+"}"
if(r>=s.length)return H.w(s,r)
p=U.db(s[r])
if(typeof p!="string")H.E(H.bb(p))
o=H.lp(o,q,p)}return o}else{s=a.e
q=s.length
if(q===1){q="("+H.b(a.b)+" "
if(0>=s.length)return H.w(s,0)
return q+H.b(U.db(s[0]))+")"}else if(q===2){if(0>=q)return H.w(s,0)
q="("+H.b(U.db(s[0]))+" "+H.b(a.b)+" "
if(1>=s.length)return H.w(s,1)
return q+H.b(U.db(s[1]))+")"}else return a.b}},
lK:function(a){var s=a.k2.c,r=$.M
if(s==r.a.c)if(J.kK(r.Q).gdE()){s=a.fy
if(s==null?!0:!s)if(H.a3(U.od(a).as($.M.Q)))if(!a.r1.ghb()){s=J.kL($.M.Q).fy
s=s==null?!0:!s}else s=!0
else s=!1
else s=!1}else s=!1
else s=!1
return s},
od:function(a){var s=a.r1,r=s.b
switch(r){case"new-block":throw H.a(P.aq("Should not have a new block accepting drags, they are unplaced blocks from menu slots."))
case"workspace-chain":return C.a.gE(C.a.h(a.k2.ch,s.a).a).id
case"block-clause":return C.a.h(a.k2.Y(s.c).cy,a.r1.d).y
default:throw H.a(P.aq("Unknown block removal type: "+H.b(r)))}},
lR:function(a){var s
if(a.f.c==$.M.a.c)if(!C.a.gE(a.a).gar()){s=J.kL($.M.Q).fy
s=(s==null?!0:!s)&&H.a3(J.kK($.M.Q).id.as(a.a))}else s=!1
else s=!1
return s},
lS:function(a){var s=a.d.k2.c,r=$.M
if(s==r.a.c)if(J.kK(r.Q).gdE())if(H.a3(a.y.as($.M.Q)))if(a.a.length!==0){s=J.kL($.M.Q).fy
s=s==null?!0:!s}else s=!0
else s=!1
else s=!1
else s=!1
return s},
dg:function(a){var s,r,q,p,o=J.R(a)
if(a.offsetParent==null){o=o.gb0(a)
return new P.H(o.a,o.b,o.$ti.i("H<1>"))}else{o=o.gb0(a)
s=o.$ti
r=s.i("H<1>")
q=r.a(U.dg(a.offsetParent))
p=q.a
if(typeof p!=="number")return H.ae(p)
s=s.c
p=s.a(o.a+p)
q=q.b
if(typeof q!=="number")return H.ae(q)
return new P.H(p,s.a(o.b+q),r)}},
m0:function(a,b){var s=new U.ah(a,"num",H.h([],t.C))
s.eB(a,b)
return s},
lH:function(a){var s=H.h([],t.i)
C.a.H(s,a)
return new U.co(s)},
m2:function(a){var s,r,q=a.d,p=q.r1,o=p.b
switch(o){case"workspace-chain":s=C.a.gE(C.a.h(q.k2.ch,p.a).a)
return s.gar()?s.id:null
case"block-clause":r=C.a.h(q.k2.Y(p.c).cy,q.r1.d)
q=r.y
if(q instanceof U.bi)return U.m2(r)
return t.b1.a(q)
case"new-block":return null
default:throw H.a(P.aq("Unknown block parent type: "+H.b(o)))}},
mS:function(a,b,c,d){U.q1(a,new U.ko(b),c,d)},
q1:function(a,b,c,a0){var s,r,q,p,o,n,m,l,k,j,i,h="version",g="blockStyles",f="variables",e="expressions",d=H.u(a0.w(h)?a0.h(0,h):0)
if(typeof d!=="number")return d.J()
if(d>5)H.E("Somehow the given model version ("+d+") is greater than the supported NetTango version (5).")
if(d<1)U.p9(a0)
if(d<2)U.l5(a0,U.nc(),U.nc())
if(d<3)U.pf(a0)
if(d<4){U.pg(a0)
U.jn(a0,U.nd(),U.nd())}if(d<5){U.jn(a0,U.nf(),U.nf())
U.jn(a0,U.ne(),U.ne())
U.jn(a0,U.ng(),U.ng())}a0.j(0,h,5)
p=new U.hE(b,c)
switch(a){case"NetLogo":p.b=new U.eN("","end","[","]")
break
default:p.b=new U.eN("","","","")
break}s=p
try{if($.aB.L(c))$.aB.h(0,c).r1.fY()
if(!J.bd(a0.h(0,h),5))H.E("The supported NetTango version is 5, but the given definition version was "+H.b(a0.h(0,h))+".")
o=new U.ai(H.h(["version","height","width","blocks","program","chainOpen","chainClose","blockStyles","variables","expressions"],t.i))
n=H.h([],t.dP)
m=H.h([],t.jM)
l=document
k=new U.eI(l.createElement("div"))
j=new U.bZ(o,5,c,s,n,[],m,600,600,450,k)
l=t.D.a(l.querySelector("#"+H.b(c)))
j.d=l
if(l==null)H.E("No container element with ID "+H.b(c)+" found.");(l&&C.c).K(l,"")
l.classList.add("nt-container")
j.k3=new U.hW(j,k)
n=new U.fr(c)
j.k4=n
n=j.r1=Z.cw(l,n)
n.gaw(n).v(j.gfS())
j.go=$.ls()
j.id=$.lr()
j.k1=$.lq()
n=j.d.style
l=H.b(j.fr)+"px"
n.minHeight=l
n=j.d.style
m=H.b(j.fy)+"px"
n.minWidth=m
n=j.d.style
m=H.b(j.fy)+"px"
n.maxWidth=m
j.db=new U.ez(j,H.h([],t.ij))
o.b=a0
o=H.u(H.bO(a0.h(0,"height"))?a0.h(0,"height"):600)
j.fr=o
n=j.d.style
o=H.b(o)+"px"
n.minHeight=o
o=H.u(H.bO(a0.h(0,"width"))?a0.h(0,"width"):450)
j.fy=o
n=j.d.style
o=H.b(o)+"px"
n.minWidth=o
o=j.d.style
n=H.b(j.fy)+"px"
o.maxWidth=n
o=a0.h(0,"chainOpen")
j.z=o==null?null:J.z(o)
o=a0.h(0,"chainClose")
j.Q=o==null?null:J.z(o)
if(a0.w(g)){o=t.V
j.go=U.lo(o.a(J.be(a0.h(0,g),"starterBlockStyle")),"#bb5555")
j.id=U.lo(o.a(J.be(a0.h(0,g),"containerBlockStyle")),"#8899aa")
j.k1=U.lo(o.a(J.be(a0.h(0,g),"commandBlockStyle")),"#9977aa")}if(a0.h(0,"blocks") instanceof P.q)U.r1(j,t.N.a(a0.h(0,"blocks")))
if(a0.h(0,f) instanceof P.q)j.dx=t.w.a(a0.h(0,f))
if(a0.h(0,e) instanceof P.q)U.r0(j,t.N.a(a0.h(0,e)))
if(a0.h(0,"program") instanceof P.P)U.r2(j,t.V.a(a0.h(0,"program")))
r=j
$.aB.j(0,c,r)
r.h0()}catch(i){o=H.O(i)
if(o instanceof P.dn){q=o
throw H.a(P.dp("There was an error initializing the workspace with the given NetTango model JSON.",q))}else throw i}},
oB:function(a,b,c,d){H.r(a)
H.r(b)
H.r(c)
t.jz.a(d)
if($.aB.h(0,b) instanceof U.bZ)C.a.sk($.aB.h(0,b).ch,0)
U.mS(a,d,b,P.a6(C.j.c9(0,c,null)))},
oA:function(a,b,c){var s,r,q,p,o
H.r(a)
H.r(b)
t.jz.a(c)
s=C.j.c9(0,b,null)
if(t.e7.b(s))for(r=J.B(s.gN()),q=t.f,p=t.d;r.m();){o=H.r(r.gp())
if($.aB.h(0,o) instanceof U.bZ)C.a.sk($.aB.h(0,o).ch,0)
s=C.j.c9(0,b,null)
if(!q.b(s)&&!p.b(s))H.E(P.aL("object must be a Map or Iterable"))
U.mS(a,c,o,P.bQ(P.du(s)))}},
oy:function(a,b){var s
H.r(a)
t.jz.a(b)
if($.aB.L(a)){s=$.aB
if(b!=null){s=s.h(0,a)
return s.y.dQ(s,!0,new U.iE(b))}else{s=s.h(0,a)
return s.y.dQ(s,!0,null)}}return null},
oz:function(a,b,c){H.r(a)
H.u(b)
H.u(c)
if(!$.aB.L(a))throw H.a(P.aq("Unknown container ID: "+H.b(a)))
return U.da($.aB.h(0,a).Y(b).ej(0,c))},
oD:function(a){var s
H.r(a)
if($.aB.L(a)){s=U.n4($.aB.h(0,a))
return H.r($.ep().h(0,"JSON").S("stringify",H.h([s],t.hV)))}else return"{}"},
oC:function(){var s,r,q,p=t.z,o=P.c7(p,p)
for(p=$.aB,p=new H.as(p,H.j(p).i("as<1>")),p=p.gA(p),s=t.hV;p.m();){r=p.d
q=U.n4($.aB.h(0,r))
o.j(0,r,$.ep().h(0,"JSON").S("stringify",H.h([q],s)))}return C.j.h2(C.j,null)},
nb:function(){var s=$.ep(),r=t.O
s.j(0,"NetTango_blockPlacementOptions",P.a6(P.a_(["starter","starter","child","child","anywhere","anywhere"],r,r)))
s.j(0,"NetTango_selectQuoteOptions",P.a6(P.a_(["always","always-quote","never","never-quote","smart","smart-quote"],r,r)))
s.j(0,"NetTango_InitWorkspace",U.qT())
s.j(0,"NetTango_InitAllWorkspaces",U.qS())
s.j(0,"NetTango_ExportCode",U.qQ())
s.j(0,"NetTango_FormatAttributeValue",U.qR())
s.j(0,"NetTango_Save",U.qV())
s.j(0,"NetTango_SaveAll",U.qU())},
r1:function(a,b){var s,r,q,p,o,n,m,l
for(s=H.j(b).i("Q<i.E>"),r=new H.Q(b,b.gk(b),s),q=t.V;r.m();){p=r.d
o=H.u(q.a(p).h(0,"id"))
if(o!=null&&o>a.cx){if(typeof o!=="number")return o.C()
a.cx=o+1}}for(s=new H.Q(b,b.gk(b),s);s.m();){p=s.d
q.a(p)
n=U.nr(a,p)
if(a.db.bD(n.b)!=null){n.b=null
n=n.aH(0,!0)
p.j(0,"id",n.b)}m=U.oI(p.h(0,"limit"),-1)
r=a.db
l=r.bD(n.b)
if(l!=null)H.E(P.dp("Cannot add a block with the same ID as an existing block\n  Adding: ("+H.b(n.b)+": "+H.b(n.d)+")\n  Existing: ("+H.b(l.b)+": "+H.b(l.d)+")",null))
C.a.l(r.b,new U.aP(n,r.a,m))}},
nr:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h=null,g="clauses",f="children",e="allowedTags",d="properties",c=a1.h(0,"action"),b=c==null?"":J.z(c),a=U.lJ(a0,H.u(a1.h(0,"id")),b,!0)
a.a.b=a1
a1.j(0,"id",a.b)
if(a1.h(0,g) instanceof P.q){a.sfO(H.h([],t.km))
c=t.i
s=t.s
r=t.V
q=t.N
p=0
while(!0){o=H.kj(J.af(a1.h(0,g)))
if(typeof o!=="number")return H.ae(o)
if(!(p<o))break
o=r.a(J.be(a1.h(0,g),p))
n=o.h(0,"open")
m=n==null?h:J.z(n)
n=o.h(0,"close")
l=n==null?h:J.z(n)
n=o.h(0,"action")
b=n==null?h:J.z(n)
n=new U.ai(H.h(["children","action","open","close","allowedTags"],c))
k=new U.aw(n,a,p,b,m,l,new U.b8(),H.h([],s))
n.b=o
if(o.h(0,e)!=null)k.y=U.qY(k,r.a(o.h(0,e)))
if(o.h(0,f) instanceof P.q)k.sdB(U.qZ(a0,q.a(o.h(0,f))))
C.a.l(a.cy,k);++p}}c=a1.h(0,"type")
a.e=c==null?"":J.z(c)
c=a1.h(0,"format")
a.f=c==null?h:J.z(c)
c=a1.h(0,"closeClauses")
a.r=c==null?h:J.z(c)
c=a1.h(0,"closeStarter")
a.x=c==null?h:J.z(c)
c=a1.h(0,"note")
a.y=c==null?h:J.z(c)
c=a1.h(0,"blockColor")
a.db=c==null?h:J.z(c)
c=a1.h(0,"textColor")
a.dx=c==null?h:J.z(c)
c=a1.h(0,"borderColor")
a.dy=c==null?h:J.z(c)
c=a1.h(0,"font")
a.fr=c==null?h:J.z(c)
a.fx=U.hw(a1.h(0,"required"),a.fx)
a.fy=U.hw(a1.h(0,"isTerminal"),a.fy)
c=a1.h(0,"placement")
s=a.go
a.go=c==null?s:J.z(c)
if(a1.h(0,e)!=null)a.id=U.np(t.V.a(a1.h(0,e)))
if(a1.h(0,"tags") instanceof P.q)for(c=J.B(t.Y.a(a1.h(0,"tags"))),s=a.k1;c.m();)C.a.l(s,H.r(c.gp()))
if(a1.h(0,"params") instanceof P.q)for(c=J.B(t.Y.a(a1.h(0,"params"))),s=a.z,r=t.V;c.m();){j=U.nm(a,r.a(c.gp()))
s.j(0,j.b,j)}if(a1.h(0,d) instanceof P.q){for(c=J.B(t.Y.a(a1.h(0,d))),s=a.Q,r=t.V;c.m();){i=U.nm(a,r.a(c.gp()))
s.j(0,i.b,i)}c=a1.h(0,"propertiesDisplay")
a.ch=c==null?"shown":J.z(c)}return a},
qZ:function(a,b){var s,r,q,p=H.h([],t.s)
for(s=new H.Q(b,b.gk(b),H.j(b).i("Q<i.E>")),r=t.V;s.m();){q=s.d
C.a.l(p,U.nr(a,r.a(q)))}return p},
nm:function(a,b){var s,r,q,p,o="values",n=H.u(b.h(0,"id")),m=b.h(0,"type")
switch(m==null?"num":J.z(m)){case"int":s=new U.ds(new U.ai(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t.i)),n,a)
s.aP(a,n)
s.y=1
s.x=U.hw(b.h(0,"random"),null)
s.y=U.bG(b.h(0,"step"),s.y)
break
case"num":s=U.m1(a,n,"num")
break
case"bool":s=U.m1(a,n,"bool")
break
case"range":s=new U.cF(new U.ai(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t.i)),n,a)
s.aP(a,n)
s.x=U.hw(b.h(0,"random"),!1)
s.y=U.bG(b.h(0,"step"),s.y)
s.db=U.bG(b.h(0,"min"),s.db)
s.dx=U.bG(b.h(0,"max"),s.dx)
break
case"select":m=H.h([],t.aA)
s=new U.cI("smart-quote",m,new U.ai(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t.i)),n,a)
s.aP(a,n)
r=b.h(0,"quoteValues")
s.x=r==null?null:J.z(r)
if(b.h(0,o) instanceof P.q&&J.nR(J.af(b.h(0,o)),0))for(r=J.B(t.Y.a(b.h(0,o)));r.m();){q=r.gp()
p=J.ap(q)
C.a.l(m,new U.bl(H.r(p.h(q,"actual")),H.r(p.h(q,"display"))))}break
case"text":s=U.mm(a,n)
break
default:s=U.mm(a,n)
break}m=b.h(0,"name")
s.d=m==null?"":J.z(m)
m=b.h(0,"unit")
s.e=m==null?"":J.z(m)
m=b.h(0,"default")
s.b2(m==null?"":J.z(m))
s.a.b=b
return s},
r0:function(a,b){var s,r,q,p,o,n,m,l,k,j,i="type",h="arguments"
if(b==null||b.gk(b)===0)return
for(s=new H.Q(b,b.gk(b),H.j(b).i("Q<i.E>")),r=a.dy,q=t.i,p=t.V,o=t.Y;s.m();){n=s.d
p.a(n)
m=H.r(n.h(0,"name"))
l=H.r(n.h(0,i))
k=H.h([],q)
j=new U.dm(m,l,k)
if(m==null)H.E(P.kM("name"))
if(l==null)H.E(P.kM(i))
if(!C.a.D(H.h(["num","bool"],q),l))H.E(P.d5(l,i,"Expression definition type can only be 'num' or 'bool'."))
j.d=H.r(n.h(0,"format"))
if("arguments" in n.a&&n.h(0,h) instanceof P.q)for(m=J.B(o.a(n.h(0,h)));m.m();)C.a.l(k,H.r(m.gp()))
C.a.l(r,j)}},
r2:function(a,b){var s,r
if(!(b.h(0,"chains") instanceof P.q))return
for(s=J.B(t.Y.a(b.h(0,"chains"))),r=t.V;s.m();)U.r_(a,r.a(s.gp()))},
r_:function(a,b){var s,r,q,p=U.lQ(a)
p.c.b=b
if(typeof b.h(0,"x")=="number"&&typeof b.h(0,"y")=="number"){p.d=J.cm(b.h(0,"x"))
p.e=J.cm(b.h(0,"y"))}C.a.l(a.ch,p)
if(!(b.h(0,"blocks") instanceof P.q))return
for(s=J.B(t.Y.a(b.h(0,"blocks"))),r=t.V;s.m();){q=U.nn(a,r.a(s.gp()))
if(q!=null)C.a.l(p.a,q)}},
nn:function(a,b){var s,r,q,p,o,n,m,l,k,j="children",i=a.db.bD(H.u(b.h(0,"id")))
if(i==null){P.eo("No prototype block found for id: "+H.b(b.h(0,"id")))
s=a.db.b
r=H.D(s)
P.eo(new H.L(s,r.i("c*(1)").a(new U.kE()),r.i("L<1,c*>")))
return null}q=i.aH(0,!1)
q.a.b=b
s=b.h(0,"propertiesDisplay")
q.ch=s==null?"shown":J.z(s)
s=t.N
U.no(q.z,s.a(b.h(0,"params")))
U.no(q.Q,s.a(b.h(0,"properties")))
if(b.h(0,"clauses") instanceof P.q)for(s=t.Y,r=J.B(s.a(b.h(0,"clauses"))),p=t.V,o=0;r.m();){n=p.a(r.gp())
if(o>=q.cy.length)break
if(!(n.h(0,j) instanceof P.q))continue
m=q.cy
if(o>=m.length)return H.w(m,o)
l=m[o]
l.c.b=n
for(m=J.B(s.a(n.h(0,j)));m.m();){k=U.nn(a,p.a(m.gp()))
if(k!=null)C.a.l(l.a,k)}++o}return q},
no:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h="value"
if(b==null)return
for(s=new H.Q(b,b.gk(b),b.$ti.i("Q<i.E>")),r=t.i,q=t.V,p=t.C;s.m();){o=s.d
q.a(o)
if(!("id" in o.a)||!a.L(o.h(0,"id")))continue
n=a.h(0,o.h(0,"id"))
n.a.b=o
if(o.h(0,h)==null)continue
if(C.a.D(H.h(["bool","num"],r),n.gX(n))){if(!(n instanceof U.c4))throw H.a(P.aq("A non-expression attribute cannot have a type of 'num' or 'bool'."))
m=o.h(0,h)
l=n.c
k=n.f
if(m instanceof P.P){m=l.k2
l=q.a(o.h(0,h))
j=new U.bz(m)
j.c=new U.ah(j,k,H.h([],p))
if(l!=null)m=!0
else m=!1
if(m)j.c=U.nq(j,k,l)
n.r=j}else{m=l.k2
l=J.z(o.h(0,h))
j=new U.bz(m)
j.c=new U.ah(j,k,H.h([],p))
i=new U.ah(j,k,H.h([],p))
i.b=l
j.c=i
n.r=j}}else if(o.h(0,h) instanceof P.P){m=o.h(0,"defaultValue")
n.aB(m==null?"":J.z(m))}else{m=o.h(0,h)
n.aB(m==null?"":J.z(m))}}},
nq:function(a,b,c){var s,r="children",q=H.h([],t.C),p=new U.ah(a,b,q),o=c.h(0,"name")
p.b=o==null?"":J.z(o)
if(c.h(0,"format")!=null)p.d=H.r(c.h(0,"format"))
if(c.h(0,r) instanceof P.q)for(o=J.B(t.Y.a(c.h(0,r))),s=t.V;o.m();)C.a.l(q,U.nq(a,b,s.a(o.gp())))
return p},
lo:function(a,b){var s,r,q="#ffffff"
if(a==null){s=new U.d9("#9977aa",q,q)
s.a=b
return s}s=new U.d9("#9977aa",q,q)
r=a.h(0,"blockColor")
s.a=r==null?b:J.z(r)
r=a.h(0,"textColor")
s.b=r==null?q:J.z(r)
r=a.h(0,"borderColor")
s.c=r==null?q:J.z(r)
r=a.h(0,"fontWeight")
s.d=r==null?"":J.z(r)
r=a.h(0,"fontSize")
s.e=r==null?"":J.z(r)
r=a.h(0,"fontFace")
s.f=r==null?"":J.z(r)
return s},
qY:function(a,b){var s,r=H.r(b.h(0,"type"))
switch(r){case"inherit":s=new U.bi()
s.a=a
return s
case"any-of":case"unrestricted":return U.np(b)
default:throw H.a(P.aq("Unknown AllowedTags type: "+H.b(r)+", cannot restore."))}},
np:function(a){var s,r,q="tags"
if(a.h(0,q)==null||!(a.h(0,q) instanceof P.q))return new U.b8()
s=t.N.a(a.h(0,q))
s.toString
r=s.$ti
return U.lH(new H.L(s,r.i("d*(i.E)").a(new U.kF()),r.i("L<i.E,d*>")))},
n4:function(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="blockStyles",a=t.O,a0=t._,a1=P.a6(P.a_(["version",a2.b,"height",a2.fr,"width",a2.fy,"blocks",[],"program",P.a_(["chains",[]],a,t.w)],a,a0))
a2.a.b1(a1)
U.bS(a1,"chainOpen",a2.z,a)
U.bS(a1,"chainClose",a2.Q,a)
if(a2.go!=$.ls()||a2.id!=$.lr()||a2.k1!=$.lq()){s=t.z
a1.j(0,b,P.a6(P.c7(s,s)))
J.kI(a1.h(0,b),"starterBlockStyle",U.ll(a2.go))
J.kI(a1.h(0,b),"containerBlockStyle",U.ll(a2.id))
J.kI(a1.h(0,b),"commandBlockStyle",U.ll(a2.k1))}for(s=a2.db.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
o=p.e
if(o===-1)o=null
n=U.lk(p.a,o)
J.eq(a1.h(0,"blocks"),n)}s=a2.dx
if(s!=null&&J.lB(s))a1.j(0,"variables",P.aD([],t.z))
s=a2.dy
r=s.length
if(r!==0){r=t.z
m=P.aD([],r)
a1.j(0,"expressions",m)
for(o=s.length,l=m.$ti.c,k=t.eF,q=0;q<s.length;s.length===o||(0,H.y)(s),++q){j=s[q]
i=P.a_(["name",j.a,"type",j.b],a,a)
h=P.bQ(P.du(i))
i=j.c
if(i.length>0){g=[]
C.a.H(g,C.a.I(i,P.kC(),r))
h.j(0,"arguments",new P.q(g,k))}i=j.d
if(i!=null)h.j(0,"format",i)
m.S("push",[l.a(h)])}}f=J.be(a1.h(0,"program"),"chains")
for(s=a2.ch,r=s.length,o=J.aT(f),q=0;q<s.length;s.length===r||(0,H.y)(s),++q){e=s[q]
l=P.a_(["x",e.d,"y",e.e,"blocks",[]],a,a0)
d=P.bQ(P.du(l))
e.c.b1(d)
for(l=e.a,k=l.length,c=0;c<l.length;l.length===k||(0,H.y)(l),++c){n=U.lk(l[c],null)
J.eq(d.h(0,"blocks"),n)}o.l(f,d)}return a1},
ll:function(a){var s=t.O
return P.a6(P.a_(["blockColor",a.a,"textColor",a.b,"borderColor",a.c,"fontWeight",a.d,"fontSize",a.e,"fontFace",a.f],s,s))},
lk:function(a,b){var s,r,q,p,o,n,m,l="push",k=t.O,j=P.a6(P.a_(["id",a.b,"action",a.d,"required",a.fx,"placement",a.go],k,t._))
a.a.b1(j)
s=t.co
U.bS(j,"instanceId",a.c,s)
U.aa(j,"type",a.e)
U.aa(j,"format",a.f)
U.bS(j,"isTerminal",a.fy,t.iD)
U.aa(j,"closeClauses",a.r)
U.aa(j,"closeStarter",a.x)
U.bS(j,"limit",b,s)
U.aa(j,"note",a.y)
U.aa(j,"blockColor",a.db)
U.aa(j,"textColor",a.dx)
U.aa(j,"borderColor",a.dy)
U.aa(j,"font",a.fr)
s=a.id
if(!(s instanceof U.b8))j.j(0,"allowedTags",U.n1(s))
s=a.k1
if(s.length!==0)j.j(0,"tags",P.aD(s,k))
if(a.cy.length!==0){r=P.aD([],t.z)
j.j(0,"clauses",r)
for(k=a.cy,s=k.length,q=r.$ti.c,p=0;p<k.length;k.length===s||(0,H.y)(k),++p)r.S(l,[q.a(U.qy(k[p]))])}k=a.z
if(k.a!==0){o=P.aD([],t.z)
j.j(0,"params",o)
for(k=k.gay(k),s=H.j(k),s=new H.a7(J.B(k.a),k.b,s.i("@<1>").q(s.Q[1]).i("a7<1,2>")),k=o.$ti.c;s.m();){n=s.a
o.S(l,[k.a(U.n2(n))])}}k=a.Q
if(k.a!==0){m=P.aD([],t.z)
j.j(0,"properties",m)
for(k=k.gay(k),s=H.j(k),s=new H.a7(J.B(k.a),k.b,s.i("@<1>").q(s.Q[1]).i("a7<1,2>")),k=m.$ti.c;s.m();){n=s.a
m.S(l,[k.a(U.n2(n))])}j.j(0,"propertiesDisplay",a.ch)}return j},
qy:function(a){var s,r,q,p,o,n=P.a6(P.a_(["children",[]],t.O,t.w))
a.c.b1(n)
U.aa(n,"action",a.f)
U.aa(n,"open",a.r)
U.aa(n,"close",a.x)
s=a.y
if(!(s instanceof U.b8))n.j(0,"allowedTags",U.n1(s))
r=n.h(0,"children")
for(s=a.a,q=s.length,p=J.aT(r),o=0;o<s.length;s.length===q||(0,H.y)(s),++o)p.l(r,U.lk(s[o],null))
return n},
bS:function(a,b,c,d){if(c!=null)a.j(0,b,c)},
aa:function(a,b,c){if(c!=null&&c!=="")a.j(0,b,c)},
n2:function(a){var s,r,q,p,o,n,m,l="value",k="default",j=t.O,i=P.a6(P.a_(["id",a.b,"type",a.gX(a)],j,t._))
a.a.b1(i)
U.aa(i,"name",a.d)
U.aa(i,"unit",a.e)
switch(a.gX(a)){case"text":U.aa(i,l,a.a_())
U.aa(i,k,a.az())
break
case"select":t.ac.a(a)
U.aa(i,"quoteValues",a.x)
U.aa(i,l,a.a_())
U.aa(i,k,a.az())
s=P.aD([],t.z)
i.j(0,"values",s)
for(r=a.y,q=r.length,p=s.$ti.c,o=0;o<r.length;r.length===q||(0,H.y)(r),++o){n=r[o]
m=P.a_(["actual",n.a,"display",n.b],j,j)
s.S("push",[p.a(P.bQ(P.du(m)))])}break
case"int":case"range":t.k4.a(a)
i.j(0,"step",a.y)
U.bS(i,"random",a.x,t.iD)
j=t.jk
U.bS(i,l,a.f,j)
U.bS(i,k,a.r,j)
if(a instanceof U.cF){i.j(0,"min",a.db)
i.j(0,"max",a.dx)}break
case"num":case"bool":t.gf.a(a)
U.aa(i,k,a.az())
j=a.r.c
if(j!=null&&j.b!=null)if(j.e.length===0)i.j(0,l,a.a_())
else{i.j(0,l,U.n3(j))
i.j(0,"expressionValue",a.a_())}break
default:throw H.a(P.aq("Unknown attribute type "+a.gX(a)))}return i},
n3:function(a){var s,r,q,p="children",o=t.O,n=P.a6(P.a_(["name",a.b,"type",a.c],o,o))
U.bS(n,"format",a.d,o)
o=a.e
if(o.length!==0){n.j(0,p,P.aD([],t.z))
for(s=o.length,r=0;r<o.length;o.length===s||(0,H.y)(o),++r){q=o[r]
J.eq(n.h(0,p),U.n3(q))}}return n},
n1:function(a){var s,r
if(a instanceof U.bi){s=t.O
return P.a6(P.a_(["type","inherit"],s,s))}if(a instanceof U.b8){s=t.O
return P.a6(P.a_(["type","unrestricted"],s,s))}if(a instanceof U.co){s=t.O
r=P.a6(P.a_(["type","any-of"],s,s))
r.j(0,"tags",P.aD(a.a,s))
return r}throw H.a(P.aq("Unknown AllowedTags type, cannot encode it."))},
hw:function(a,b){if(a==null)return b
else if(H.kp(a))return a
else if(typeof a=="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
kR:function(a){return a.e0(0,new U.hv())},
oG:function(a,b,c){var s,r
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.y)(b),++r)if(C.a.D(a,b[r]))return!0
return!1},
oI:function(a,b){var s,r
if(a==null)return b
else if(H.bO(a))return a
else if(typeof a=="string")try{s=P.qH(a)
return s}catch(r){if(t.oO.b(H.O(r)))return b
else throw r}return b},
bG:function(a,b){var s,r
if(a==null)return b
else if(typeof a=="number")return a
else if(typeof a=="string")try{s=P.nh(a,null)
return s}catch(r){if(t.oO.b(H.O(r)))return b
else throw r}return b},
l1:function(a){return a.e0(0,new U.iX())},
p9:function(a){var s={},r=new H.ab(t.nm),q=new H.ab(t.h6)
s.a=0
U.l5(a,new U.je(s,r,q),new U.jf(r,q))},
mo:function(a,b){var s={}
s.a=a
U.mq(b,new U.jd(s))
return s.a},
p8:function(a,b){var s,r,q
for(s=new H.Q(b,b.gk(b),H.j(b).i("Q<i.E>")),r=t.V;s.m();){q=s.d
r.a(q).j(0,"id",a)
if(typeof a!=="number")return a.C();++a}return a},
p7:function(a,b,c){var s,r
if(!c.w("action"))return
s=H.r(c.h(0,"action"))
if(a.L(s)){r=a.h(0,s)
c.j(0,"id",r)
U.mo(b.h(0,r),c)}},
pc:function(a){U.mq(a,U.qO())},
pa:function(a){var s="values"
if(!a.w(s)||!(a.h(0,s) instanceof P.q))return
a.j(0,s,P.aD(t.d.a(J.o1(a.h(0,s),new U.jg())),t.z))},
pb:function(a){var s,r,q
a.toString
s=a.$ti
r=s.i("p(i.E)").a(new U.jh())
q=a.gA(a)
s=new H.cg(q,r,s.i("cg<i.E>"))
r=t.V
for(;s.m();)U.pa(r.a(q.gp()))},
pf:function(a){var s,r,q="program"
U.l5(a,new U.jj(),U.qP())
if(!a.w(q)||!(a.h(0,q) instanceof P.P))return
s=t.V
r=s.a(a.h(0,q))
if(!r.w("chains")||!(r.h(0,"chains") instanceof P.q))return
U.pd(s.a(a.h(0,q)))},
pd:function(a){var s,r=t.N.a(a.h(0,"chains"))
r.toString
s=r.$ti
a.j(0,"chains",P.aD(new H.al(r,s.i("p(i.E)").a(new U.ji()),s.i("al<i.E>")),t.z))},
pe:function(a){if(typeof a.h(0,"x")=="number")a.j(0,"x",J.lx(a.h(0,"x"),10))
if(typeof a.h(0,"y")=="number")a.j(0,"y",J.lx(a.h(0,"y"),10))},
pg:function(a){var s,r,q,p,o,n,m,l,k,j,i,h,g="program",f="chains"
if(!a.w(g)||!(a.h(0,g) instanceof P.P))return
s=t.V.a(a.h(0,g))
if(!s.w(f)||!(s.h(0,f) instanceof P.q))return
r=P.aD([],t.z)
for(q=J.B(t.Y.a(s.h(0,f))),p=r.$ti.c,o=t.O,n=t._,m=t.N;q.m();){l=m.a(q.gp())
if(!l.gM(l)){k=0>=l.gk(l)
if(k)H.E(P.a8(0,0,l.gk(l),null,null))
j=H.j(l).c.a(l.cK(0,0))
k=J.ap(j)
if(typeof k.h(j,"x")=="number"&&typeof k.h(j,"y")=="number"){i=J.cm(k.h(j,"x"))
h=J.cm(k.h(j,"y"))}else{i=0
h=0}}else{i=0
h=0}k=P.a_(["blocks",l,"x",i,"y",h],o,n)
r.S("push",[p.a(P.bQ(P.du(k)))])}s.j(0,f,r)},
ph:function(a){a.ca("x")
a.ca("y")},
pl:function(a){var s,r,q="params",p="properties"
if(a.w(q))if(a.h(0,q) instanceof P.q){s=t.N.a(a.h(0,q))
s.t(s,new U.jl())}if(a.w(p))if(a.h(0,p) instanceof P.q){r=t.N.a(a.h(0,p))
r.t(r,new U.jm())}},
mp:function(a){var s,r,q="values"
if(!a.w(q))return
if(!(a.h(0,q) instanceof P.q))return
s=t.N.a(a.h(0,q))
s.toString
r=s.$ti
if(!H.a3(U.kR(new H.L(s,r.i("p*(i.E)").a(new U.jk()),r.i("L<i.E,p*>")))))return
a.j(0,"quoteValues","never-quote")},
pj:function(a){var s="required",r="placement"
if(a.w(s)&&H.a3(H.cZ(a.h(0,s))))a.j(0,r,"starter")
else a.j(0,r,"child")},
pk:function(a){var s,r,q,p="children",o="clauses"
if(a.w(p)){s=a.h(0,p)
a.ca(p)
r=t.z
q=P.a6(P.c7(r,r))
q.j(0,p,s)
if(a.w(o))if(a.h(0,o) instanceof P.q)J.lC(a.h(0,o),0,q)
else{P.eo("Found a block with clauses that was not an array?  Block ID: "+H.b(a.h(0,"id"))+".  Replacing value.")
a.j(0,o,P.aD([],r))
J.eq(a.h(0,o),q)}else{a.j(0,o,P.aD([],r))
J.eq(a.h(0,o),q)}}else if(a.w(o)&&a.h(0,o) instanceof P.q){q=P.a6(P.a_(["children",[]],t.O,t.w))
J.lC(a.h(0,o),0,q)}},
jn:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i="blocks",h="program",g="chains",f="children"
if(!a.w(i)||!(a.h(0,i) instanceof P.q))return
for(s=t.Y,r=J.B(s.a(a.h(0,i))),q=t.V;r.m();)b.$1(q.a(r.gp()))
if(!a.w(h)||!(a.h(0,h) instanceof P.P))return
p=q.a(a.h(0,h))
if(!p.w(g)||!(p.h(0,g) instanceof P.q))return
for(r=J.B(s.a(p.h(0,g)));r.m();){o=q.a(r.gp())
if("blocks" in o.a&&o.h(0,i) instanceof P.q)for(n=J.B(s.a(o.h(0,i)));n.m();){m=q.a(n.gp())
c.$1(m)
l=m.a
if("children" in l&&m.h(0,f) instanceof P.q)for(k=J.B(s.a(m.h(0,f)));k.m();)c.$1(q.a(k.gp()))
if("clauses" in l&&m.h(0,"clauses") instanceof P.q)for(l=J.B(s.a(m.h(0,"clauses")));l.m();){j=q.a(l.gp())
if("children" in j.a&&j.h(0,f) instanceof P.q)for(k=J.B(s.a(j.h(0,f)));k.m();)c.$1(q.a(k.gp()))}}}},
l5:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i="blocks",h="children",g="program",f="chains"
if(!a.w(i)||!(a.h(0,i) instanceof P.q))return
for(s=t.Y,r=J.B(s.a(a.h(0,i))),q=t.V;r.m();)b.$1(q.a(r.gp()))
for(r=J.B(s.a(a.h(0,i)));r.m();){p=q.a(r.gp())
o=p.a
if("children" in o&&p.h(0,h) instanceof P.q)for(n=J.B(s.a(p.h(0,h)));n.m();)c.$1(q.a(n.gp()))
if("clauses" in o&&p.h(0,"clauses") instanceof P.q)for(o=J.B(s.a(p.h(0,"clauses")));o.m();){m=q.a(o.gp())
if("children" in m.a&&m.h(0,h) instanceof P.q)for(n=J.B(s.a(m.h(0,h)));n.m();)c.$1(q.a(n.gp()))}}if(!a.w(g)||!(a.h(0,g) instanceof P.P))return
l=q.a(a.h(0,g))
if(!l.w(f)||!(l.h(0,f) instanceof P.q))return
for(s=J.B(s.a(l.h(0,f))),r=t.N;s.m();){k=r.a(s.gp())
for(o=new H.Q(k,k.gk(k),H.j(k).i("Q<i.E>"));o.m();){j=o.d
c.$1(q.a(j))}}},
mq:function(a,b){var s="params",r="properties"
if(a.w(s)&&a.h(0,s) instanceof P.q)b.$1(t.N.a(a.h(0,s)))
if(a.w(r)&&a.h(0,r) instanceof P.q)b.$1(t.N.a(a.h(0,r)))},
aM:function aM(){},
hg:function hg(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
c4:function c4(a,b,c){var _=this
_.r=_.f=null
_.x=""
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
ij:function ij(){},
ii:function ii(){},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(){},
ih:function ih(){},
im:function im(){},
ig:function ig(){},
io:function io(a,b){this.a=a
this.b=b},
ds:function ds(a,b,c){var _=this
_.x=_.r=_.f=null
_.y=1
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
c9:function c9(){},
iT:function iT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iU:function iU(a){this.a=a},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b){this.a=a
this.b=b},
cF:function cF(a,b,c){var _=this
_.db=0
_.dx=10
_.x=_.r=_.f=null
_.y=1
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a,b){this.a=a
this.b=b},
bl:function bl(a,b){this.a=a
this.b=b},
cI:function cI(a,b,c,d,e){var _=this
_.f=null
_.r=""
_.x=a
_.y=b
_.a=c
_.b=d
_.c=e
_.e=_.d=""},
j3:function j3(a){this.a=a},
j2:function j2(a){this.a=a},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dK:function dK(a,b,c){var _=this
_.r=_.f=""
_.a=a
_.b=b
_.c=c
_.e=_.d=""},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j8:function j8(a){this.a=a},
j9:function j9(a,b){this.a=a
this.b=b},
ja:function ja(a,b){this.a=a
this.b=b},
hx:function hx(a){this.a=a},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iS:function iS(a){this.a=a},
iQ:function iQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(){},
hk:function hk(a){this.a=a},
d9:function d9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=""},
ag:function ag(a,b,c,d,e,f,g,h,i,j){var _=this
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
_.k1=i
_.k2=j
_.r1=_.k4=_.k3=null
_.rx=_.r2=!1
_.x2=_.x1=_.ry=null},
hp:function hp(a){this.a=a},
hs:function hs(a){this.a=a},
hq:function hq(a,b){this.a=a
this.b=b},
hr:function hr(a){this.a=a},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
aN:function aN(a,b,c){var _=this
_.c=a
_.e=_.d=0
_.f=b
_.x=_.r=null
_.y=!1
_.a=c
_.b=null},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
aw:function aw(a,b,c,d,e,f,g,h){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.x=f
_.y=g
_.Q=_.z=!1
_.cy=_.cx=_.ch=null
_.a=h
_.b=null},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hE:function hE(a,b){this.b=null
this.c=a
this.d=b},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(){},
ey:function ey(a){this.a=a},
d8:function d8(a){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null
_.x=a},
eA:function eA(a){this.a=a},
eB:function eB(a){this.a=a},
eI:function eI(a){var _=this
_.e=a
_.d=_.c=_.b=_.a=null},
hW:function hW(a,b){var _=this
_.a=a
_.b=b
_.c=!1
_.e=_.d=null
_.x=_.r=_.f=!1
_.Q=_.z=_.y=null},
fr:function fr(a){this.a=a},
dm:function dm(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
ah:function ah(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=null
_.e=c},
ie:function ie(a){this.a=a},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
iq:function iq(a,b){this.a=a
this.b=b},
iu:function iu(){},
ix:function ix(a,b){this.a=a
this.b=b},
iv:function iv(){},
iw:function iw(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a){this.a=a
this.c=this.b=null},
ai:function ai(a){this.a=a
this.b=null},
ez:function ez(a,b){this.a=a
this.b=b
this.d=null},
hn:function hn(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
cc:function cc(){},
b3:function b3(){this.c=this.b=null},
bv:function bv(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
eY:function eY(a){this.b=a},
eZ:function eZ(a,b,c){this.b=a
this.c=b
this.d=c},
aP:function aP(a,b,c){var _=this
_.a=a
_.d=b
_.e=c
_.x=_.r=_.f=null},
bV:function bV(){},
co:function co(a){this.a=a},
hc:function hc(a){this.a=a},
bw:function bw(){},
bi:function bi(){this.a=null},
b8:function b8(){},
fl:function fl(a,b){this.a=null
this.d=a
this.e=b},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
_.k1=_.id=_.go=null
_.k2=k
_.r1=_.k4=_.k3=null},
hO:function hO(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(){},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(a){this.a=a},
hM:function hM(a){this.a=a},
hN:function hN(a){this.a=a},
hP:function hP(){},
ko:function ko(a){this.a=a},
iE:function iE(a){this.a=a},
kE:function kE(){},
kF:function kF(){},
hv:function hv(){},
iX:function iX(){},
je:function je(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a,b){this.a=a
this.b=b},
jd:function jd(a){this.a=a},
jg:function jg(){},
jh:function jh(){},
jj:function jj(){},
ji:function ji(){},
jl:function jl(){},
jm:function jm(){},
jk:function jk(){}}
var w=[C,H,J,P,W,Z,U]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kZ.prototype={}
J.ar.prototype={
R:function(a,b){return a===b},
gu:function(a){return H.cb(a)},
n:function(a){return"Instance of '"+H.b(H.j_(a))+"'"},
br:function(a,b){t.E.a(b)
throw H.a(P.mc(a,b.gdS(),b.ge_(),b.gdT()))}}
J.eP.prototype={
n:function(a){return String(a)},
gu:function(a){return a?519018:218159},
$ip:1}
J.cz.prototype={
R:function(a,b){return null==b},
n:function(a){return"null"},
gu:function(a){return 0},
br:function(a,b){return this.er(a,t.E.a(b))},
$iv:1}
J.bE.prototype={
gu:function(a){return 0},
n:function(a){return String(a)}}
J.fa.prototype={}
J.bJ.prototype={}
J.b5.prototype={
n:function(a){var s=a[$.kG()]
if(s==null)return this.ev(a)
return"JavaScript function for "+H.b(J.z(s))},
$icx:1}
J.G.prototype={
l:function(a,b){H.D(a).c.a(b)
if(!!a.fixed$length)H.E(P.A("add"))
a.push(b)},
ai:function(a,b,c){var s
H.D(a).c.a(c)
if(!!a.fixed$length)H.E(P.A("insert"))
s=a.length
if(b>s)throw H.a(P.cG(b,null))
a.splice(b,0,c)},
at:function(a,b,c){var s,r
H.D(a).i("e<1>").a(c)
if(!!a.fixed$length)H.E(P.A("insertAll"))
P.l2(b,0,a.length,"index")
if(!t.j.b(c))c=J.oa(c)
s=J.af(c)
a.length=a.length+s
if(typeof b!=="number")return b.C()
r=b+s
this.V(a,r,a.length,a,b)
this.em(a,b,r,c)},
H:function(a,b){var s
H.D(a).i("e<1>").a(b)
if(!!a.fixed$length)H.E(P.A("addAll"))
for(s=J.B(b);s.m();)a.push(s.gp())},
t:function(a,b){var s,r
H.D(a).i("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw H.a(P.aO(a))}},
I:function(a,b,c){var s=H.D(a)
return new H.L(a,s.q(c).i("1(2)").a(b),s.i("@<1>").q(c).i("L<1,2>"))},
T:function(a,b){return this.I(a,b,t.z)},
b3:function(a,b){return H.bm(a,b,null,H.D(a).c)},
B:function(a,b){return this.h(a,b)},
gE:function(a){if(a.length>0)return a[0]
throw H.a(H.bC())},
gaK:function(a){var s=a.length
if(s>0)return a[s-1]
throw H.a(H.bC())},
V:function(a,b,c,d,e){var s,r,q,p,o
H.D(a).i("e<1>").a(d)
if(!!a.immutable$list)H.E(P.A("setRange"))
P.mi(b,c,a.length)
s=c-b
if(s===0)return
P.aH(e,"skipCount")
if(t.gs.b(d)){r=d
q=e}else{r=J.o8(d,e).ak(0,!1)
q=0}p=J.ap(r)
if(q+s>p.gk(r))throw H.a(H.m4())
if(q<b)for(o=s-1;o>=0;--o)a[b+o]=p.h(r,q+o)
else for(o=0;o<s;++o)a[b+o]=p.h(r,q+o)},
em:function(a,b,c,d){return this.V(a,b,c,d,0)},
dw:function(a,b){var s,r
H.D(a).i("p(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(H.a3(b.$1(a[r])))return!0
if(a.length!==s)throw H.a(P.aO(a))}return!1},
cI:function(a,b){var s=H.D(a)
s.i("c(1,1)?").a(b)
if(!!a.immutable$list)H.E(P.A("sort"))
H.p0(a,b,s.c)},
D:function(a,b){var s
for(s=0;s<a.length;++s)if(J.bd(a[s],b))return!0
return!1},
gM:function(a){return a.length===0},
gcq:function(a){return a.length!==0},
n:function(a){return P.iD(a,"[","]")},
ak:function(a,b){var s=H.h(a.slice(0),H.D(a))
return s},
aM:function(a){return this.ak(a,!0)},
gA:function(a){return new J.aC(a,a.length,H.D(a).i("aC<1>"))},
gu:function(a){return H.cb(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.E(P.A("set length"))
a.length=b},
h:function(a,b){H.u(b)
if(!H.bO(b))throw H.a(H.bR(a,b))
if(b>=a.length||b<0)throw H.a(H.bR(a,b))
return a[b]},
j:function(a,b,c){H.u(b)
H.D(a).c.a(c)
if(!!a.immutable$list)H.E(P.A("indexed set"))
if(b>=a.length||b<0)throw H.a(H.bR(a,b))
a[b]=c},
$in:1,
$ie:1,
$ix:1}
J.iF.prototype={}
J.aC.prototype={
gp:function(){return this.d},
m:function(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw H.a(H.y(q))
s=r.c
if(s>=p){r.scO(null)
return!1}r.scO(q[s]);++r.c
return!0},
scO:function(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
J.bD.prototype={
dH:function(a,b){var s
H.kj(b)
if(typeof b!="number")throw H.a(H.bb(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.gbo(b)
if(this.gbo(a)===s)return 0
if(this.gbo(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbo:function(a){return a===0?1/a<0:a<0},
hz:function(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw H.a(P.A(""+a+".toInt()"))},
fK:function(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw H.a(P.A(""+a+".ceil()"))},
cd:function(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw H.a(P.A(""+a+".floor()"))},
F:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.a(P.A(""+a+".round()"))},
hB:function(a,b){var s
if(b>20)throw H.a(P.a8(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.gbo(a))return"-"+s
return s},
n:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){var s,r,q,p,o=a|0
if(a===o)return 536870911&o
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return 536870911&((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259},
C:function(a,b){if(typeof b!="number")throw H.a(H.bb(b))
return a+b},
aA:function(a,b){return a*b},
aF:function(a,b){return(a|0)===a?a/b|0:this.fA(a,b)},
fA:function(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw H.a(P.A("Result of truncating division is "+H.b(s)+": "+H.b(a)+" ~/ "+b))},
c2:function(a,b){var s
if(a>0)s=this.fu(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
fu:function(a,b){return b>31?0:a>>>b},
J:function(a,b){if(typeof b!="number")throw H.a(H.bb(b))
return a>b},
$iav:1,
$ia5:1}
J.dt.prototype={$ic:1}
J.eQ.prototype={}
J.bj.prototype={
c8:function(a,b){if(b<0)throw H.a(H.bR(a,b))
if(b>=a.length)H.E(H.bR(a,b))
return a.charCodeAt(b)},
aU:function(a,b){if(b>=a.length)throw H.a(H.bR(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!="string")throw H.a(P.d5(b,null,null))
return a+b},
h4:function(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.eq(a,r-s)},
e4:function(a,b,c){P.l2(0,0,a.length,"startIndex")
return H.r5(a,b,c,0)},
eo:function(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
a3:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.a(P.cG(b,null))
if(b>c)throw H.a(P.cG(b,null))
if(c>a.length)throw H.a(P.cG(c,null))
return a.substring(b,c)},
eq:function(a,b){return this.a3(a,b,null)},
hA:function(a){return a.toLowerCase()},
ax:function(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.aU(p,0)===133){s=J.kY(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.c8(p,r)===133?J.oE(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
eb:function(a){var s,r
if(typeof a.trimLeft!="undefined"){s=a.trimLeft()
if(s.length===0)return s
r=this.aU(s,0)===133?J.kY(s,1):0}else{r=J.kY(a,0)
s=a}if(r===0)return s
if(r===s.length)return""
return s.substring(r)},
aA:function(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.a(C.I)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
fU:function(a,b,c){var s=a.length
if(c>s)throw H.a(P.a8(c,0,s,null,null))
return H.r3(a,b,c)},
dH:function(a,b){var s
H.r(b)
if(typeof b!="string")throw H.a(H.bb(b))
if(a===b)s=0
else s=a<b?-1:1
return s},
n:function(a){return a},
gu:function(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=536870911&r+a.charCodeAt(q)
r=536870911&r+((524287&r)<<10)
r^=r>>6}r=536870911&r+((67108863&r)<<3)
r^=r>>11
return 536870911&r+((16383&r)<<15)},
gk:function(a){return a.length},
h:function(a,b){H.u(b)
if(b>=a.length||!1)throw H.a(H.bR(a,b))
return a[b]},
$iiY:1,
$id:1}
H.n.prototype={}
H.ac.prototype={
gA:function(a){var s=this
return new H.Q(s,s.gk(s),H.j(s).i("Q<ac.E>"))},
gM:function(a){return this.gk(this)===0},
gE:function(a){if(this.gk(this)===0)throw H.a(H.bC())
return this.B(0,0)},
gaK:function(a){var s=this
if(s.gk(s)===0)throw H.a(H.bC())
return s.B(0,s.gk(s)-1)},
bz:function(a,b){return this.eu(0,H.j(this).i("p(ac.E)").a(b))},
I:function(a,b,c){var s=H.j(this)
return new H.L(this,s.q(c).i("1(ac.E)").a(b),s.i("@<ac.E>").q(c).i("L<1,2>"))},
T:function(a,b){return this.I(a,b,t.z)},
e0:function(a,b){var s,r,q,p=this
H.j(p).i("ac.E(ac.E,ac.E)").a(b)
s=p.gk(p)
if(s===0)throw H.a(H.bC())
r=p.B(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.B(0,q))
if(s!==p.gk(p))throw H.a(P.aO(p))}return r}}
H.ak.prototype={
aD:function(a,b,c,d){var s,r=this.b
P.aH(r,"start")
s=this.c
if(s!=null){P.aH(s,"end")
if(typeof r!=="number")return r.J()
if(r>s)throw H.a(P.a8(r,0,s,"start",null))}},
geS:function(){var s=J.af(this.a),r=this.c
if(r==null||r>s)return s
return r},
gfv:function(){var s=J.af(this.a),r=this.b
if(typeof r!=="number")return r.J()
if(r>s)return s
return r},
gk:function(a){var s,r=J.af(this.a),q=this.b
if(typeof q!=="number")return q.hF()
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
if(typeof s!=="number")return s.G()
return s-q},
B:function(a,b){var s,r=this,q=r.gfv()
if(typeof q!=="number")return q.C()
if(typeof b!=="number")return H.ae(b)
s=q+b
if(b<0||s>=r.geS())throw H.a(P.bh(b,r,"index",null,null))
return J.aU(r.a,s)},
b3:function(a,b){var s,r,q,p=this
P.aH(b,"count")
s=p.b
if(typeof s!=="number")return s.C()
r=s+b
q=p.c
if(q!=null&&r>=q)return new H.c3(p.$ti.i("c3<1>"))
return H.bm(p.a,r,q,p.$ti.c)},
hy:function(a,b){var s,r,q,p=this
P.aH(b,"count")
s=p.c
r=p.b
if(s==null){if(typeof r!=="number")return r.C()
return H.bm(p.a,r,r+b,p.$ti.c)}else{if(typeof r!=="number")return r.C()
q=r+b
if(s<q)return p
return H.bm(p.a,r,q,p.$ti.c)}},
ak:function(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ap(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
if(typeof l!=="number")return l.G()
if(typeof o!=="number")return H.ae(o)
s=l-o
if(s<=0){n=p.$ti.c
return b?J.kW(0,n):J.kV(0,n)}r=P.iK(s,m.B(n,o),b,p.$ti.c)
for(q=1;q<s;++q){C.a.j(r,q,m.B(n,o+q))
if(m.gk(n)<l)throw H.a(P.aO(p))}return r},
aM:function(a){return this.ak(a,!0)}}
H.Q.prototype={
gp:function(){var s=this.d
return s},
m:function(){var s,r=this,q=r.a,p=J.ap(q),o=p.gk(q)
if(r.b!==o)throw H.a(P.aO(q))
s=r.c
if(s>=o){r.saR(null)
return!1}r.saR(p.B(q,s));++r.c
return!0},
saR:function(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
H.aF.prototype={
gA:function(a){var s=H.j(this)
return new H.a7(J.B(this.a),this.b,s.i("@<1>").q(s.Q[1]).i("a7<1,2>"))},
gk:function(a){return J.af(this.a)},
B:function(a,b){return this.b.$1(J.aU(this.a,b))}}
H.aX.prototype={$in:1}
H.a7.prototype={
m:function(){var s=this,r=s.b
if(r.m()){s.saR(s.c.$1(r.gp()))
return!0}s.saR(null)
return!1},
gp:function(){var s=this.a
return s},
saR:function(a){this.a=this.$ti.i("2?").a(a)}}
H.L.prototype={
gk:function(a){return J.af(this.a)},
B:function(a,b){return this.b.$1(J.aU(this.a,b))}}
H.al.prototype={
gA:function(a){return new H.cg(J.B(this.a),this.b,this.$ti.i("cg<1>"))},
I:function(a,b,c){var s=this.$ti
return new H.aF(this,s.q(c).i("1(2)").a(b),s.i("@<1>").q(c).i("aF<1,2>"))},
T:function(a,b){return this.I(a,b,t.z)}}
H.cg.prototype={
m:function(){var s,r
for(s=this.a,r=this.b;s.m();)if(H.a3(r.$1(s.gp())))return!0
return!1},
gp:function(){return this.a.gp()}}
H.cf.prototype={
gA:function(a){return new H.dJ(J.B(this.a),this.b,H.j(this).i("dJ<1>"))}}
H.di.prototype={
gk:function(a){var s=J.af(this.a),r=this.b
if(s>r)return r
return s},
$in:1}
H.dJ.prototype={
m:function(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gp:function(){if(this.b<0)return null
return this.a.gp()}}
H.cd.prototype={
gA:function(a){return new H.dG(J.B(this.a),this.b,H.j(this).i("dG<1>"))}}
H.dh.prototype={
gk:function(a){var s=J.af(this.a)-this.b
if(s>=0)return s
return 0},
$in:1}
H.dG.prototype={
m:function(){var s,r
for(s=this.a,r=0;r<this.b;++r)s.m()
this.b=0
return s.m()},
gp:function(){return this.a.gp()}}
H.c3.prototype={
gA:function(a){return C.B},
gk:function(a){return 0},
B:function(a,b){throw H.a(P.a8(b,0,0,"index",null))},
I:function(a,b,c){this.$ti.q(c).i("1(2)").a(b)
return new H.c3(c.i("c3<0>"))},
T:function(a,b){return this.I(a,b,t.z)},
ak:function(a,b){var s=J.kV(0,this.$ti.c)
return s}}
H.dk.prototype={
m:function(){return!1},
gp:function(){throw H.a(H.bC())},
$iU:1}
H.T.prototype={
sk:function(a,b){throw H.a(P.A("Cannot change the length of a fixed-length list"))},
l:function(a,b){H.Y(a).i("T.E").a(b)
throw H.a(P.A("Cannot add to a fixed-length list"))},
ai:function(a,b,c){H.Y(a).i("T.E").a(c)
throw H.a(P.A("Cannot add to a fixed-length list"))}}
H.cM.prototype={
gu:function(a){var s=this._hashCode
if(s!=null)return s
s=536870911&664597*J.bf(this.a)
this._hashCode=s
return s},
n:function(a){return'Symbol("'+H.b(this.a)+'")'},
R:function(a,b){if(b==null)return!1
return b instanceof H.cM&&this.a==b.a},
$ice:1}
H.dd.prototype={}
H.dc.prototype={
gM:function(a){return this.gk(this)===0},
n:function(a){return P.iL(this)},
j:function(a,b,c){var s=H.j(this)
s.c.a(b)
s.Q[1].a(c)
H.on()},
aL:function(a,b,c,d){var s=P.c7(c,d)
this.t(0,new H.hQ(this,H.j(this).q(c).q(d).i("l0<1,2>(3,4)").a(b),s))
return s},
T:function(a,b){return this.aL(a,b,t.z,t.z)},
$iaj:1}
H.hQ.prototype={
$2:function(a,b){var s=H.j(this.a),r=this.b.$2(s.c.a(a),s.Q[1].a(b))
this.c.j(0,r.ghe(r),r.gby(r))},
$S:function(){return H.j(this.a).i("v(1,2)")}}
H.de.prototype={
gk:function(a){return this.a},
L:function(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.L(b))return null
return this.d2(b)},
d2:function(a){return this.b[H.r(a)]},
t:function(a,b){var s,r,q,p,o=H.j(this)
o.i("~(1,2)").a(b)
s=this.c
for(r=s.length,o=o.Q[1],q=0;q<r;++q){p=s[q]
b.$2(p,o.a(this.d2(p)))}},
gN:function(){return new H.dM(this,H.j(this).i("dM<1>"))}}
H.dM.prototype={
gA:function(a){var s=this.a.c
return new J.aC(s,s.length,H.D(s).i("aC<1>"))},
gk:function(a){return this.a.c.length}}
H.eR.prototype={
gdS:function(){var s=this.a
return s},
ge_:function(){var s,r,q,p,o=this
if(o.c===1)return C.v
s=o.d
r=s.length-o.e.length-o.f
if(r===0)return C.v
q=[]
for(p=0;p<r;++p){if(p>=s.length)return H.w(s,p)
q.push(s[p])}q.fixed$length=Array
q.immutable$list=Array
return q},
gdT:function(){var s,r,q,p,o,n,m,l,k=this
if(k.c!==0)return C.x
s=k.e
r=s.length
q=k.d
p=q.length-r-k.f
if(r===0)return C.x
o=new H.ab(t.bX)
for(n=0;n<r;++n){if(n>=s.length)return H.w(s,n)
m=s[n]
l=p+n
if(l<0||l>=q.length)return H.w(q,l)
o.j(0,new H.cM(m),q[l])}return new H.dd(o,t.i9)},
$im3:1}
H.iZ.prototype={
$2:function(a,b){var s
H.r(a)
s=this.a
s.b=s.b+"$"+H.b(a)
C.a.l(this.b,a)
C.a.l(this.c,b);++s.a},
$S:48}
H.jb.prototype={
a2:function(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
H.f6.prototype={
n:function(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
H.eT.prototype={
n:function(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+H.b(r.a)
s=r.c
if(s==null)return q+p+"' ("+H.b(r.a)+")"
return q+p+"' on '"+s+"' ("+H.b(r.a)+")"}}
H.fp.prototype={
n:function(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
H.f8.prototype={
n:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"},
$idl:1}
H.e8.prototype={
n:function(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$ib1:1}
H.bY.prototype={
n:function(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+H.nu(r==null?"unknown":r)+"'"},
$icx:1,
ghE:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fk.prototype={}
H.fd.prototype={
n:function(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+H.nu(s)+"'"}}
H.cq.prototype={
R:function(a,b){var s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof H.cq))return!1
return s.a===b.a&&s.b===b.b&&s.c===b.c},
gu:function(a){var s,r=this.c
if(r==null)s=H.cb(this.a)
else s=typeof r!=="object"?J.bf(r):H.cb(r)
return(s^H.cb(this.b))>>>0},
n:function(a){var s=this.c
if(s==null)s=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.j_(s))+"'")}}
H.fb.prototype={
n:function(a){return"RuntimeError: "+this.a}}
H.fs.prototype={
n:function(a){return"Assertion failed: "+P.by(this.a)}}
H.k0.prototype={}
H.ab.prototype={
gk:function(a){return this.a},
gM:function(a){return this.a===0},
gN:function(){return new H.as(this,H.j(this).i("as<1>"))},
gay:function(a){var s=H.j(this)
return H.ma(new H.as(this,s.i("as<1>")),new H.iG(this),s.c,s.Q[1])},
L:function(a){var s,r,q=this
if(typeof a=="string"){s=q.b
if(s==null)return!1
return q.cZ(s,a)}else if(typeof a=="number"&&(a&0x3ffffff)===a){r=q.c
if(r==null)return!1
return q.cZ(r,a)}else return q.h8(a)},
h8:function(a){var s=this.d
if(s==null)return!1
return this.bn(this.b9(s,J.bf(a)&0x3ffffff),a)>=0},
h:function(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.ba(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.ba(p,b)
q=r==null?n:r.b
return q}else return o.h9(b)},
h9:function(a){var s,r,q=this.d
if(q==null)return null
s=this.b9(q,J.bf(a)&0x3ffffff)
r=this.bn(s,a)
if(r<0)return null
return s[r].b},
j:function(a,b,c){var s,r,q,p,o,n,m=this,l=H.j(m)
l.c.a(b)
l.Q[1].a(c)
if(typeof b=="string"){s=m.b
m.cQ(s==null?m.b=m.bX():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.cQ(r==null?m.c=m.bX():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bX()
p=J.bf(b)&0x3ffffff
o=m.b9(q,p)
if(o==null)m.c1(q,p,[m.bY(b,c)])
else{n=m.bn(o,b)
if(n>=0)o[n].b=c
else o.push(m.bY(b,c))}}},
a8:function(a,b){var s=this.ha(b)
return s},
ha:function(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=J.bf(a)&0x3ffffff
r=o.b9(n,s)
q=o.bn(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.eG(p)
if(r.length===0)o.d1(n,s)
return p.b},
bk:function(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.bW()}},
t:function(a,b){var s,r,q=this
H.j(q).i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw H.a(P.aO(q))
s=s.c}},
cQ:function(a,b,c){var s,r=this,q=H.j(r)
q.c.a(b)
q.Q[1].a(c)
s=r.ba(a,b)
if(s==null)r.c1(a,b,r.bY(b,c))
else s.b=c},
bW:function(){this.r=this.r+1&67108863},
bY:function(a,b){var s=this,r=H.j(s),q=new H.iJ(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.bW()
return q},
eG:function(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.bW()},
bn:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bd(a[r].a,b))return r
return-1},
n:function(a){return P.iL(this)},
ba:function(a,b){return a[b]},
b9:function(a,b){return a[b]},
c1:function(a,b,c){a[b]=c},
d1:function(a,b){delete a[b]},
cZ:function(a,b){return this.ba(a,b)!=null},
bX:function(){var s="<non-identifier-key>",r=Object.create(null)
this.c1(r,s,r)
this.d1(r,s)
return r},
$im8:1}
H.iG.prototype={
$1:function(a){var s=this.a
return s.h(0,H.j(s).c.a(a))},
$S:function(){return H.j(this.a).i("2(1)")}}
H.iJ.prototype={}
H.as.prototype={
gk:function(a){return this.a.a},
gM:function(a){return this.a.a===0},
gA:function(a){var s=this.a,r=new H.dx(s,s.r,this.$ti.i("dx<1>"))
r.c=s.e
return r}}
H.dx.prototype={
gp:function(){return this.d},
m:function(){var s,r=this,q=r.a
if(r.b!==q.r)throw H.a(P.aO(q))
s=r.c
if(s==null){r.scP(null)
return!1}else{r.scP(s.a)
r.c=s.c
return!0}},
scP:function(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
H.kx.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.ky.prototype={
$2:function(a,b){return this.a(a,b)},
$S:36}
H.kz.prototype={
$1:function(a){return this.a(H.r(a))},
$S:34}
H.eS.prototype={
n:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$iiY:1}
H.fg.prototype={
h:function(a,b){H.u(b)
if(b!==0)H.E(P.cG(b,null))
return this.c},
$imb:1}
H.k7.prototype={
m:function(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new H.fg(s,o)
q.c=r===q.c?r+1:r
return!0},
gp:function(){var s=this.d
s.toString
return s},
$iU:1}
H.c8.prototype={
fg:function(a,b,c,d){var s=P.a8(b,0,c,d,null)
throw H.a(s)},
cT:function(a,b,c,d){if(b>>>0!==b||b>c)this.fg(a,b,c,d)},
$ib2:1}
H.at.prototype={
gk:function(a){return a.length},
dq:function(a,b,c,d,e){var s,r,q=a.length
this.cT(a,b,q,"start")
this.cT(a,c,q,"end")
if(b>c)throw H.a(P.a8(b,0,c,null,null))
s=c-b
r=d.length
if(r-e<s)throw H.a(P.ax("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ia0:1}
H.bF.prototype={
h:function(a,b){H.u(b)
H.bs(b,a,a.length)
return a[b]},
j:function(a,b,c){H.u(b)
H.pS(c)
H.bs(b,a,a.length)
a[b]=c},
V:function(a,b,c,d,e){t.id.a(d)
if(t.dQ.b(d)){this.dq(a,b,c,d,e)
return}this.cM(a,b,c,d,e)},
$in:1,
$ie:1,
$ix:1}
H.aG.prototype={
j:function(a,b,c){H.u(b)
H.u(c)
H.bs(b,a,a.length)
a[b]=c},
V:function(a,b,c,d,e){t.fm.a(d)
if(t.aj.b(d)){this.dq(a,b,c,d,e)
return}this.cM(a,b,c,d,e)},
$in:1,
$ie:1,
$ix:1}
H.f_.prototype={
h:function(a,b){H.u(b)
H.bs(b,a,a.length)
return a[b]}}
H.f0.prototype={
h:function(a,b){H.u(b)
H.bs(b,a,a.length)
return a[b]}}
H.f1.prototype={
h:function(a,b){H.u(b)
H.bs(b,a,a.length)
return a[b]}}
H.f2.prototype={
h:function(a,b){H.u(b)
H.bs(b,a,a.length)
return a[b]}}
H.f3.prototype={
h:function(a,b){H.u(b)
H.bs(b,a,a.length)
return a[b]}}
H.dC.prototype={
gk:function(a){return a.length},
h:function(a,b){H.u(b)
H.bs(b,a,a.length)
return a[b]}}
H.f4.prototype={
gk:function(a){return a.length},
h:function(a,b){H.u(b)
H.bs(b,a,a.length)
return a[b]}}
H.e0.prototype={}
H.e1.prototype={}
H.e2.prototype={}
H.e3.prototype={}
H.aZ.prototype={
i:function(a){return H.h0(v.typeUniverse,this,a)},
q:function(a){return H.pQ(v.typeUniverse,this,a)}}
H.fG.prototype={}
H.fE.prototype={
n:function(a){return this.a}}
H.ec.prototype={}
P.jr.prototype={
$1:function(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:11}
P.jq.prototype={
$1:function(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:45}
P.js.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:1}
P.jt.prototype={
$0:function(){this.a.$0()},
$C:"$0",
$R:0,
$S:1}
P.kb.prototype={
eF:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.d2(new P.kc(this,b),0),a)
else throw H.a(P.A("`setTimeout()` not found."))}}
P.kc.prototype={
$0:function(){this.b.$0()},
$C:"$0",
$R:0,
$S:0}
P.am.prototype={}
P.aJ.prototype={
ac:function(){},
ad:function(){},
saX:function(a){this.dy=this.$ti.i("aJ<1>?").a(a)},
sbe:function(a){this.fr=this.$ti.i("aJ<1>?").a(a)}}
P.bL.prototype={
gbb:function(){return this.c<4},
dl:function(a){var s,r
H.j(this).i("aJ<1>").a(a)
s=a.fr
r=a.dy
if(s==null)this.sd3(r)
else s.saX(r)
if(r==null)this.sd9(s)
else r.sbe(s)
a.sbe(a)
a.saX(a)},
c3:function(a,b,c,d){var s,r,q,p,o,n,m=this,l=H.j(m)
l.i("~(1)?").a(a)
t.Z.a(c)
if((m.c&4)!==0){l=new P.cS($.I,c,l.i("cS<1>"))
l.dm()
return l}s=$.I
r=d?1:0
t.bm.q(l.c).i("1(2)").a(a)
q=P.ms(s,b)
p=c==null?P.qt():c
l=l.i("aJ<1>")
o=new P.aJ(m,a,q,t.M.a(p),s,r,l)
o.sbe(o)
o.saX(o)
l.a(o)
o.dx=m.c&1
n=m.e
m.sd9(o)
o.saX(null)
o.sbe(n)
if(n==null)m.sd3(o)
else n.saX(o)
if(m.d==m.e)P.mX(m.a)
return o},
fj:function(a){var s=this,r=H.j(s)
a=r.i("aJ<1>").a(r.i("a4<1>").a(a))
if(a.dy===a)return null
r=a.dx
if((r&2)!==0)a.dx=r|4
else{s.dl(a)
if((s.c&2)===0&&s.d==null)s.bM()}return null},
b6:function(){if((this.c&4)!==0)return new P.b6("Cannot add new events after calling close")
return new P.b6("Cannot add new events while doing an addStream")},
l:function(a,b){var s=this
H.j(s).c.a(b)
if(!s.gbb())throw H.a(s.b6())
s.bh(b)},
c7:function(a){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gbb())throw H.a(q.b6())
q.c|=4
r=q.r
if(r==null)r=q.r=new P.a2($.I,t.cU)
q.aE()
return r},
d4:function(a){var s,r,q,p,o=this
H.j(o).i("~(X<1>)").a(a)
s=o.c
if((s&2)!==0)throw H.a(P.ax(u.o))
r=o.d
if(r==null)return
q=s&1
o.c=s^3
for(;r!=null;){s=r.dx
if((s&1)===q){r.dx=s|2
a.$1(r)
s=r.dx^=1
p=r.dy
if((s&4)!==0)o.dl(r)
r.dx&=4294967293
r=p}else r=r.dy}o.c&=4294967293
if(o.d==null)o.bM()},
bM:function(){if((this.c&4)!==0){var s=this.r
if(s.a===0)s.cR(null)}P.mX(this.b)},
sd3:function(a){this.d=H.j(this).i("aJ<1>?").a(a)},
sd9:function(a){this.e=H.j(this).i("aJ<1>?").a(a)},
$ife:1,
$imF:1,
$ibq:1,
$ibp:1}
P.ea.prototype={
gbb:function(){return P.bL.prototype.gbb.call(this)&&(this.c&2)===0},
b6:function(){if((this.c&2)!==0)return new P.b6(u.o)
return this.ex()},
bh:function(a){var s,r=this,q=r.$ti
q.c.a(a)
s=r.d
if(s==null)return
if(s===r.e){r.c|=2
q.i("aJ<1>").a(s).aS(a)
r.c&=4294967293
if(r.d==null)r.bM()
return}r.d4(new P.k8(r,a))},
aE:function(){var s=this
if(s.d!=null)s.d4(new P.k9(s))
else s.r.cR(null)}}
P.k8.prototype={
$1:function(a){this.a.$ti.i("X<1>").a(a).aS(this.b)},
$S:function(){return this.a.$ti.i("v(X<1>)")}}
P.k9.prototype={
$1:function(a){this.a.$ti.i("X<1>").a(a).cU()},
$S:function(){return this.a.$ti.i("v(X<1>)")}}
P.iB.prototype={
$0:function(){var s,r,q,p,o
try{this.a.b7(this.b.$0())}catch(q){s=H.O(q)
r=H.bc(q)
p=s
o=r
if(o==null)o=P.lI(p)
this.a.b8(p,o)}},
$S:1}
P.fw.prototype={}
P.eb.prototype={}
P.ch.prototype={
hg:function(a){if((this.c&15)!==6)return!0
return this.b.b.cA(t.iW.a(this.d),a.a,t.y,t.K)},
h6:function(a){var s=this.e,r=t.z,q=t.K,p=this.$ti.i("2/"),o=this.b.b
if(t.ng.b(s))return p.a(o.hw(s,a.a,a.b,r,q,t.l))
else return p.a(o.cA(t.mq.a(s),a.a,r,q))}}
P.a2.prototype={
ea:function(a,b,c){var s,r,q,p=this.$ti
p.q(c).i("1/(2)").a(a)
s=$.I
if(s!==C.f){c.i("@<0/>").q(p.c).i("1(2)").a(a)
if(b!=null)b=P.qh(b,s)}r=new P.a2($.I,c.i("a2<0>"))
q=b==null?1:3
this.bK(new P.ch(r,q,a,b,p.i("@<1>").q(c).i("ch<1,2>")))
return r},
e9:function(a,b){return this.ea(a,null,b)},
eg:function(a){var s,r
t.mY.a(a)
s=this.$ti
r=new P.a2($.I,s)
this.bK(new P.ch(r,8,a,null,s.i("@<1>").q(s.c).i("ch<1,2>")))
return r},
ft:function(a){this.$ti.c.a(a)
this.a=4
this.c=a},
bK:function(a){var s,r=this,q=r.a
if(q<=1){a.a=t.F.a(r.c)
r.c=a}else{if(q===2){s=t.j_.a(r.c)
q=s.a
if(q<4){s.bK(a)
return}r.a=q
r.c=s.c}P.em(null,null,r.b,t.M.a(new P.jC(r,a)))}},
di:function(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=1){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if(s===2){n=t.j_.a(m.c)
s=n.a
if(s<4){n.di(a)
return}m.a=s
m.c=n.c}l.a=m.bg(a)
P.em(null,null,m.b,t.M.a(new P.jH(l,m)))}},
bf:function(){var s=t.F.a(this.c)
this.c=null
return this.bg(s)},
bg:function(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
b7:function(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
if(q.i("c6<1>").b(a))if(q.b(a))P.mv(a,r)
else P.pv(a,r)
else{s=r.bf()
q.c.a(a)
r.a=4
r.c=a
P.cV(r,s)}},
b8:function(a,b){var s,r,q=this
t.l.a(b)
s=q.bf()
r=P.he(a,b)
q.a=8
q.c=r
P.cV(q,s)},
cR:function(a){var s=this.$ti
s.i("1/").a(a)
this.eJ(s.c.a(a))},
eJ:function(a){var s=this
s.$ti.c.a(a)
s.a=1
P.em(null,null,s.b,t.M.a(new P.jD(s,a)))},
$ic6:1}
P.jC.prototype={
$0:function(){P.cV(this.a,this.b)},
$S:1}
P.jH.prototype={
$0:function(){P.cV(this.b,this.a.a)},
$S:1}
P.jE.prototype={
$1:function(a){var s=this.a
s.a=0
s.b7(a)},
$S:11}
P.jF.prototype={
$2:function(a,b){this.a.b8(a,t.l.a(b))},
$C:"$2",
$R:2,
$S:39}
P.jG.prototype={
$0:function(){this.a.b8(this.b,this.c)},
$S:1}
P.jD.prototype={
$0:function(){var s=this.a,r=s.$ti.c.a(this.b),q=s.bf()
s.a=4
s.c=r
P.cV(s,q)},
$S:1}
P.jK.prototype={
$0:function(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.e6(t.mY.a(q.d),t.z)}catch(p){s=H.O(p)
r=H.bc(p)
if(m.c){q=t.n.a(m.b.a.c).a
o=s
o=q==null?o==null:q===o
q=o}else q=!1
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=P.he(s,r)
o.b=!0
return}if(l instanceof P.a2&&l.a>=4){if(l.a===8){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.g7.b(l)){n=m.b.a
q=m.a
q.c=l.e9(new P.jL(n),t.z)
q.b=!1}},
$S:0}
P.jL.prototype={
$1:function(a){return this.a},
$S:40}
P.jJ.prototype={
$0:function(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cA(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=H.O(l)
r=H.bc(l)
q=this.a
q.c=P.he(s,r)
q.b=!0}},
$S:0}
P.jI.prototype={
$0:function(){var s,r,q,p,o,n,m,l,k=this
try{s=t.n.a(k.a.a.c)
p=k.b
if(H.a3(p.a.hg(s))&&p.a.e!=null){p.c=p.a.h6(s)
p.b=!1}}catch(o){r=H.O(o)
q=H.bc(o)
p=t.n.a(k.a.a.c)
n=p.a
m=r
l=k.b
if(n==null?m==null:n===m)l.c=p
else l.c=P.he(r,q)
l.b=!0}},
$S:0}
P.ft.prototype={}
P.W.prototype={
T:function(a,b){var s=H.j(this)
return new P.dZ(s.i("@(W.T)").a(b),this,s.i("dZ<W.T,@>"))},
gk:function(a){var s={},r=new P.a2($.I,t.hy)
s.a=0
this.Z(new P.j5(s,this),!0,new P.j6(s,r),r.geO())
return r}}
P.j5.prototype={
$1:function(a){H.j(this.b).i("W.T").a(a);++this.a.a},
$S:function(){return H.j(this.b).i("v(W.T)")}}
P.j6.prototype={
$0:function(){this.b.b7(this.a.a)},
$C:"$0",
$R:0,
$S:1}
P.a4.prototype={}
P.ff.prototype={}
P.cQ.prototype={
gu:function(a){return(H.cb(this.a)^892482866)>>>0},
R:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cQ&&b.a===this.a}}
P.cR.prototype={
bZ:function(){return this.x.fj(this)},
ac:function(){H.j(this.x).i("a4<1>").a(this)},
ad:function(){H.j(this.x).i("a4<1>").a(this)}}
P.X.prototype={
cs:function(a){var s,r,q=this,p=q.e
if((p&8)!==0)return
s=(p+128|4)>>>0
q.e=s
if(p<128){r=q.r
if(r!=null)if(r.a===1)r.a=3}if((p&4)===0&&(s&32)===0)q.d8(q.gbc())},
cw:function(){var s=this,r=s.e
if((r&8)!==0)return
if(r>=128){r=s.e=r-128
if(r<128)if((r&64)!==0&&s.r.c!=null)s.r.bF(s)
else{r=(r&4294967291)>>>0
s.e=r
if((r&32)===0)s.d8(s.gbd())}}},
a0:function(){var s=this,r=(s.e&4294967279)>>>0
s.e=r
if((r&8)===0)s.bN()
r=s.f
return r==null?$.h7():r},
bN:function(){var s,r=this,q=r.e=(r.e|8)>>>0
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.sc_(null)
r.f=r.bZ()},
aS:function(a){var s,r=this,q=H.j(r)
q.i("X.T").a(a)
s=r.e
if((s&8)!==0)return
if(s<32)r.bh(a)
else r.bL(new P.dN(a,q.i("dN<X.T>")))},
b5:function(a,b){var s=this.e
if((s&8)!==0)return
if(s<32)this.dn(a,b)
else this.bL(new P.fB(a,b))},
cU:function(){var s=this,r=s.e
if((r&8)!==0)return
r=(r|2)>>>0
s.e=r
if(r<32)s.aE()
else s.bL(C.J)},
ac:function(){},
ad:function(){},
bZ:function(){return null},
bL:function(a){var s=this,r=H.j(s),q=r.i("cX<X.T>?").a(s.r)
if(q==null)q=new P.cX(r.i("cX<X.T>"))
s.sc_(q)
q.l(0,a)
r=s.e
if((r&64)===0){r=(r|64)>>>0
s.e=r
if(r<128)q.bF(s)}},
bh:function(a){var s,r=this,q=H.j(r).i("X.T")
q.a(a)
s=r.e
r.e=(s|32)>>>0
r.d.cB(r.a,a,q)
r.e=(r.e&4294967263)>>>0
r.bP((s&4)!==0)},
dn:function(a,b){var s,r=this,q=r.e,p=new P.jv(r,a,b)
if((q&1)!==0){r.e=(q|16)>>>0
r.bN()
s=r.f
if(s!=null&&s!==$.h7())s.eg(p)
else p.$0()}else{p.$0()
r.bP((q&4)!==0)}},
aE:function(){var s,r=this,q=new P.ju(r)
r.bN()
r.e=(r.e|16)>>>0
s=r.f
if(s!=null&&s!==$.h7())s.eg(q)
else q.$0()},
d8:function(a){var s,r=this
t.M.a(a)
s=r.e
r.e=(s|32)>>>0
a.$0()
r.e=(r.e&4294967263)>>>0
r.bP((s&4)!==0)},
bP:function(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=(p&4294967231)>>>0
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p=(p&4294967291)>>>0
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.sc_(null)
return}r=(p&4)!==0
if(a===r)break
q.e=(p^32)>>>0
if(r)q.ac()
else q.ad()
p=(q.e&4294967263)>>>0
q.e=p}if((p&64)!==0&&p<128)q.r.bF(q)},
sc_:function(a){this.r=H.j(this).i("e4<X.T>?").a(a)},
$ia4:1,
$ibq:1,
$ibp:1}
P.jv.prototype={
$0:function(){var s,r,q,p=this.a,o=p.e
if((o&8)!==0&&(o&16)===0)return
p.e=(o|32)>>>0
s=p.b
o=this.b
r=t.K
q=p.d
if(t.b9.b(s))q.hx(s,o,this.c,r,t.l)
else q.cB(t.i6.a(s),o,r)
p.e=(p.e&4294967263)>>>0},
$S:0}
P.ju.prototype={
$0:function(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=(r|42)>>>0
s.d.cz(s.c)
s.e=(s.e&4294967263)>>>0},
$S:0}
P.cW.prototype={
Z:function(a,b,c,d){var s=this.$ti
s.i("~(1)?").a(a)
t.Z.a(c)
return this.a.c3(s.i("~(1)?").a(a),d,c,b===!0)},
v:function(a){return this.Z(a,null,null,null)},
bq:function(a,b,c){return this.Z(a,null,b,c)}}
P.bo.prototype={
sb_:function(a){this.a=t.lT.a(a)},
gb_:function(){return this.a}}
P.dN.prototype={
ct:function(a){this.$ti.i("bp<1>").a(a).bh(this.b)}}
P.fB.prototype={
ct:function(a){a.dn(this.b,this.c)}}
P.fA.prototype={
ct:function(a){a.aE()},
gb_:function(){return null},
sb_:function(a){throw H.a(P.ax("No events after a done."))},
$ibo:1}
P.e4.prototype={
bF:function(a){var s,r=this
r.$ti.i("bp<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}P.ns(new P.jV(r,a))
r.a=1}}
P.jV.prototype={
$0:function(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.i("bp<1>").a(this.b)
r=p.b
q=r.gb_()
p.b=q
if(q==null)p.c=null
r.ct(s)},
$S:1}
P.cX.prototype={
l:function(a,b){var s,r=this
t.oK.a(b)
s=r.c
if(s==null)r.b=r.c=b
else{s.sb_(b)
r.c=b}}}
P.cS.prototype={
dm:function(){var s=this
if((s.b&2)!==0)return
P.em(null,null,s.a,t.M.a(s.gfs()))
s.b=(s.b|2)>>>0},
cs:function(a){this.b+=4},
cw:function(){var s=this.b
if(s>=4){s=this.b=s-4
if(s<4&&(s&1)===0)this.dm()}},
a0:function(){return $.h7()},
aE:function(){var s,r=this,q=r.b=(r.b&4294967293)>>>0
if(q>=4)return
r.b=(q|1)>>>0
s=r.c
if(s!=null)r.a.cz(s)},
$ia4:1}
P.dQ.prototype={
Z:function(a,b,c,d){var s,r,q,p,o=this.$ti
o.i("~(2)?").a(a)
t.Z.a(c)
s=o.Q[1]
r=$.I
q=b===!0?1:0
t.bm.q(s).i("1(2)").a(a)
p=P.ms(r,d)
o=new P.cU(this,a,p,t.M.a(c),r,q,o.i("@<1>").q(s).i("cU<1,2>"))
o.sdr(this.a.bq(o.geX(),o.gf_(),o.gfa()))
return o},
bq:function(a,b,c){return this.Z(a,null,b,c)}}
P.cU.prototype={
aS:function(a){this.$ti.Q[1].a(a)
if((this.e&2)!==0)return
this.ey(a)},
b5:function(a,b){if((this.e&2)!==0)return
this.ez(a,b)},
ac:function(){var s=this.y
if(s!=null)s.cs(0)},
ad:function(){var s=this.y
if(s!=null)s.cw()},
bZ:function(){var s=this.y
if(s!=null){this.sdr(null)
return s.a0()}return null},
eY:function(a){this.x.eZ(this.$ti.c.a(a),this)},
fb:function(a,b){t.l.a(b)
this.x.$ti.i("bq<2>").a(this).b5(a,b)},
f0:function(){this.x.$ti.i("bq<2>").a(this).cU()},
sdr:function(a){this.y=this.$ti.i("a4<1>?").a(a)}}
P.dZ.prototype={
eZ:function(a,b){var s,r,q,p,o=this.$ti
o.c.a(a)
o.i("bq<2>").a(b)
s=null
try{s=this.b.$1(a)}catch(p){r=H.O(p)
q=H.bc(p)
b.b5(r,q)
return}b.aS(s)}}
P.d7.prototype={
n:function(a){return H.b(this.a)},
$iK:1,
gb4:function(){return this.b}}
P.eh.prototype={$imr:1}
P.kq.prototype={
$0:function(){var s=H.a(this.a)
s.stack=J.z(this.b)
throw s},
$S:1}
P.fS.prototype={
cz:function(a){var s,r,q,p=null
t.M.a(a)
try{if(C.f===$.I){a.$0()
return}P.mU(p,p,this,a,t.p)}catch(q){s=H.O(q)
r=H.bc(q)
P.d0(p,p,this,s,t.l.a(r))}},
cB:function(a,b,c){var s,r,q,p=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.f===$.I){a.$1(b)
return}P.mW(p,p,this,a,b,t.p,c)}catch(q){s=H.O(q)
r=H.bc(q)
P.d0(p,p,this,s,t.l.a(r))}},
hx:function(a,b,c,d,e){var s,r,q,p=null
d.i("@<0>").q(e).i("~(1,2)").a(a)
d.a(b)
e.a(c)
try{if(C.f===$.I){a.$2(b,c)
return}P.mV(p,p,this,a,b,c,t.p,d,e)}catch(q){s=H.O(q)
r=H.bc(q)
P.d0(p,p,this,s,t.l.a(r))}},
fH:function(a,b){return new P.k2(this,b.i("0()").a(a),b)},
c5:function(a){return new P.k1(this,t.M.a(a))},
fI:function(a,b){return new P.k3(this,b.i("~(0)").a(a),b)},
h:function(a,b){return null},
e6:function(a,b){b.i("0()").a(a)
if($.I===C.f)return a.$0()
return P.mU(null,null,this,a,b)},
cA:function(a,b,c,d){c.i("@<0>").q(d).i("1(2)").a(a)
d.a(b)
if($.I===C.f)return a.$1(b)
return P.mW(null,null,this,a,b,c,d)},
hw:function(a,b,c,d,e,f){d.i("@<0>").q(e).q(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.I===C.f)return a.$2(b,c)
return P.mV(null,null,this,a,b,c,d,e,f)},
e1:function(a,b,c,d){return b.i("@<0>").q(c).q(d).i("1(2,3)").a(a)}}
P.k2.prototype={
$0:function(){return this.a.e6(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.k1.prototype={
$0:function(){return this.a.cz(this.b)},
$S:0}
P.k3.prototype={
$1:function(a){var s=this.c
return this.a.cB(this.b,s.a(a),s)},
$S:function(){return this.c.i("~(0)")}}
P.dR.prototype={
gk:function(a){return this.a},
gM:function(a){return this.a===0},
gN:function(){return new P.dS(this,this.$ti.i("dS<1>"))},
L:function(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.eQ(a)},
eQ:function(a){var s=this.d
if(s==null)return!1
return this.ao(this.d5(s,a),a)>=0},
h:function(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:P.mw(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:P.mw(q,b)
return r}else return this.eU(b)},
eU:function(a){var s,r,q=this.d
if(q==null)return null
s=this.d5(q,a)
r=this.ao(s,a)
return r<0?null:s[r+1]},
j:function(a,b,c){var s,r,q,p,o,n=this,m=n.$ti
m.c.a(b)
m.Q[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=n.b
n.eN(s==null?n.b=P.mx():s,b,c)}else{r=n.d
if(r==null)r=n.d=P.mx()
q=H.ni(b)&1073741823
p=r[q]
if(p==null){P.l7(r,q,[b,c]);++n.a
n.e=null}else{o=n.ao(p,b)
if(o>=0)p[o+1]=c
else{p.push(b,c);++n.a
n.e=null}}}},
t:function(a,b){var s,r,q,p,o=this,n=o.$ti
n.i("~(1,2)").a(b)
s=o.cX()
for(r=s.length,n=n.c,q=0;q<r;++q){p=s[q]
b.$2(n.a(p),o.h(0,p))
if(s!==o.e)throw H.a(P.aO(o))}},
cX:function(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=P.iK(i.a,null,!1,t.z)
s=i.b
if(s!=null){r=Object.getOwnPropertyNames(s)
q=r.length
for(p=0,o=0;o<q;++o){h[p]=r[o];++p}}else p=0
n=i.c
if(n!=null){r=Object.getOwnPropertyNames(n)
q=r.length
for(o=0;o<q;++o){h[p]=+r[o];++p}}m=i.d
if(m!=null){r=Object.getOwnPropertyNames(m)
q=r.length
for(o=0;o<q;++o){l=m[r[o]]
k=l.length
for(j=0;j<k;j+=2){h[p]=l[j];++p}}}return i.e=h},
eN:function(a,b,c){var s=this.$ti
s.c.a(b)
s.Q[1].a(c)
if(a[b]==null){++this.a
this.e=null}P.l7(a,b,c)},
d5:function(a,b){return a[H.ni(b)&1073741823]}}
P.dU.prototype={
ao:function(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
P.dS.prototype={
gk:function(a){return this.a.a},
gM:function(a){return this.a.a===0},
gA:function(a){var s=this.a
return new P.dT(s,s.cX(),this.$ti.i("dT<1>"))}}
P.dT.prototype={
gp:function(){return this.d},
m:function(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw H.a(P.aO(p))
else if(q>=r.length){s.saV(null)
return!1}else{s.saV(r[q])
s.c=q+1
return!0}},
saV:function(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
P.dX.prototype={
gA:function(a){var s=this,r=new P.cj(s,s.r,H.j(s).i("cj<1>"))
r.c=s.e
return r},
gk:function(a){return this.a},
D:function(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.nF.a(s[b])!=null}else{r=this.eP(b)
return r}},
eP:function(a){var s=this.d
if(s==null)return!1
return this.ao(s[this.bR(a)],a)>=0},
l:function(a,b){var s,r,q=this
H.j(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.cV(s==null?q.b=P.l8():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.cV(r==null?q.c=P.l8():r,b)}else return q.eM(b)},
eM:function(a){var s,r,q,p=this
H.j(p).c.a(a)
s=p.d
if(s==null)s=p.d=P.l8()
r=p.bR(a)
q=s[r]
if(q==null)s[r]=[p.bQ(a)]
else{if(p.ao(q,a)>=0)return!1
q.push(p.bQ(a))}return!0},
a8:function(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.dk(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.dk(s.c,b)
else return s.fk(b)},
fk:function(a){var s,r,q,p,o=this,n=o.d
if(n==null)return!1
s=o.bR(a)
r=n[s]
q=o.ao(r,a)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete n[s]
o.dt(p)
return!0},
cV:function(a,b){H.j(this).c.a(b)
if(t.nF.a(a[b])!=null)return!1
a[b]=this.bQ(b)
return!0},
dk:function(a,b){var s
if(a==null)return!1
s=t.nF.a(a[b])
if(s==null)return!1
this.dt(s)
delete a[b]
return!0},
cW:function(){this.r=1073741823&this.r+1},
bQ:function(a){var s,r=this,q=new P.fM(H.j(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cW()
return q},
dt:function(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.cW()},
bR:function(a){return J.bf(a)&1073741823},
ao:function(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.bd(a[r].a,b))return r
return-1}}
P.fM.prototype={}
P.cj.prototype={
gp:function(){return this.d},
m:function(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw H.a(P.aO(q))
else if(r==null){s.saV(null)
return!1}else{s.saV(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
saV:function(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
P.dz.prototype={$in:1,$ie:1,$ix:1}
P.i.prototype={
gA:function(a){return new H.Q(a,this.gk(a),H.Y(a).i("Q<i.E>"))},
B:function(a,b){return this.h(a,b)},
t:function(a,b){var s,r
H.Y(a).i("~(i.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){b.$1(this.h(a,r))
if(s!==this.gk(a))throw H.a(P.aO(a))}},
gM:function(a){return this.gk(a)===0},
gcq:function(a){return!this.gM(a)},
gE:function(a){if(this.gk(a)===0)throw H.a(H.bC())
return this.h(a,0)},
I:function(a,b,c){var s=H.Y(a)
return new H.L(a,s.q(c).i("1(i.E)").a(b),s.i("@<i.E>").q(c).i("L<1,2>"))},
T:function(a,b){return this.I(a,b,t.z)},
b3:function(a,b){return H.bm(a,b,null,H.Y(a).i("i.E"))},
ak:function(a,b){var s,r,q,p,o=this
if(o.gM(a)){s=J.kW(0,H.Y(a).i("i.E"))
return s}r=o.h(a,0)
q=P.iK(o.gk(a),r,!0,H.Y(a).i("i.E"))
for(p=1;p<o.gk(a);++p)C.a.j(q,p,o.h(a,p))
return q},
aM:function(a){return this.ak(a,!0)},
l:function(a,b){var s
H.Y(a).i("i.E").a(b)
s=this.gk(a)
this.sk(a,s+1)
this.j(a,s,b)},
V:function(a,b,c,d,e){var s,r,q,p,o=H.Y(a)
o.i("e<i.E>").a(d)
P.mi(b,c,this.gk(a))
s=c-b
if(s===0)return
P.aH(e,"skipCount")
if(o.i("x<i.E>").b(d)){r=e
q=d}else{q=H.bm(d,e,null,H.Y(d).i("i.E")).ak(0,!1)
r=0}o=J.ap(q)
if(r+s>o.gk(q))throw H.a(H.m4())
if(r<b)for(p=s-1;p>=0;--p)this.j(a,b+p,o.h(q,r+p))
else for(p=0;p<s;++p)this.j(a,b+p,o.h(q,r+p))},
ai:function(a,b,c){var s,r=this
H.Y(a).i("i.E").a(c)
P.bu(b,"index",t.S)
s=r.gk(a)
P.l2(b,0,s,"index")
r.l(a,c)
if(b!==s){r.V(a,b+1,s+1,a,b)
r.j(a,b,c)}},
n:function(a){return P.iD(a,"[","]")}}
P.dA.prototype={}
P.iM.prototype={
$2:function(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=H.b(a)
r.a=s+": "
r.a+=H.b(b)},
$S:29}
P.V.prototype={
t:function(a,b){var s,r
H.j(this).i("~(V.K,V.V)").a(b)
for(s=J.B(this.gN());s.m();){r=s.gp()
b.$2(r,this.h(0,r))}},
aL:function(a,b,c,d){var s,r,q,p
H.j(this).q(c).q(d).i("l0<1,2>(V.K,V.V)").a(b)
s=P.c7(c,d)
for(r=J.B(this.gN());r.m();){q=r.gp()
p=b.$2(q,this.h(0,q))
s.j(0,p.ghe(p),p.gby(p))}return s},
T:function(a,b){return this.aL(a,b,t.z,t.z)},
gk:function(a){return J.af(this.gN())},
gM:function(a){return J.lA(this.gN())},
n:function(a){return P.iL(this)},
$iaj:1}
P.ef.prototype={
j:function(a,b,c){var s=this.$ti
s.c.a(b)
s.Q[1].a(c)
throw H.a(P.A("Cannot modify unmodifiable map"))}}
P.cB.prototype={
h:function(a,b){return this.a.h(0,b)},
j:function(a,b,c){var s=this.$ti
this.a.j(0,s.c.a(b),s.Q[1].a(c))},
t:function(a,b){this.a.t(0,this.$ti.i("~(1,2)").a(b))},
gM:function(a){return this.a.a===0},
gk:function(a){return this.a.a},
gN:function(){var s=this.a
return new H.as(s,H.j(s).i("as<1>"))},
n:function(a){return P.iL(this.a)},
aL:function(a,b,c,d){return this.a.aL(0,this.$ti.q(c).q(d).i("l0<1,2>(3,4)").a(b),c,d)},
T:function(a,b){return this.aL(a,b,t.z,t.z)},
$iaj:1}
P.dL.prototype={}
P.b0.prototype={
I:function(a,b,c){var s=H.j(this)
return new H.aX(this,s.q(c).i("1(b0.E)").a(b),s.i("@<b0.E>").q(c).i("aX<1,2>"))},
T:function(a,b){return this.I(a,b,t.z)},
n:function(a){return P.iD(this,"{","}")},
B:function(a,b){var s,r,q,p="index"
P.bu(b,p,t.S)
P.aH(b,p)
for(s=this.a6(),s=P.jQ(s,s.r,H.j(s).c),r=0;s.m();){q=s.d
if(b===r)return q;++r}throw H.a(P.bh(b,this,p,null,r))}}
P.dF.prototype={$in:1,$ie:1,$ib_:1}
P.e5.prototype={
H:function(a,b){var s
for(s=J.B(H.j(this).i("e<1>").a(b));s.m();)this.l(0,s.gp())},
I:function(a,b,c){var s=H.j(this)
return new H.aX(this,s.q(c).i("1(2)").a(b),s.i("@<1>").q(c).i("aX<1,2>"))},
T:function(a,b){return this.I(a,b,t.z)},
n:function(a){return P.iD(this,"{","}")},
cr:function(a,b){var s,r=P.jQ(this,this.r,H.j(this).c)
if(!r.m())return""
if(b===""){s=""
do s+=H.b(r.d)
while(r.m())}else{s=H.b(r.d)
for(;r.m();)s=s+b+H.b(r.d)}return s.charCodeAt(0)==0?s:s},
B:function(a,b){var s,r,q,p=this,o="index"
P.bu(b,o,t.S)
P.aH(b,o)
for(s=P.jQ(p,p.r,H.j(p).c),r=0;s.m();){q=s.d
if(b===r)return q;++r}throw H.a(P.bh(b,p,o,null,r))},
$in:1,
$ie:1,
$ib_:1}
P.dY.prototype={}
P.e6.prototype={}
P.cY.prototype={}
P.fK.prototype={
h:function(a,b){var s,r=this.b
if(r==null)return this.c.h(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.fi(b):s}},
gk:function(a){return this.b==null?this.c.a:this.aW().length},
gM:function(a){return this.gk(this)===0},
gN:function(){if(this.b==null){var s=this.c
return new H.as(s,H.j(s).i("as<1>"))}return new P.fL(this)},
j:function(a,b,c){var s,r,q=this
if(q.b==null)q.c.j(0,b,c)
else if(q.L(b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.fB().j(0,b,c)},
L:function(a){if(this.b==null)return this.c.L(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
t:function(a,b){var s,r,q,p,o=this
t.lc.a(b)
if(o.b==null)return o.c.t(0,b)
s=o.aW()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=P.kk(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw H.a(P.aO(o))}},
aW:function(){var s=t.lH.a(this.c)
if(s==null)s=this.c=H.h(Object.keys(this.a),t.U)
return s},
fB:function(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=P.c7(t.R,t.z)
r=n.aW()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.j(0,o,n.h(0,o))}if(p===0)C.a.l(r,"")
else C.a.sk(r,0)
n.a=n.b=null
return n.c=s},
fi:function(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=P.kk(this.a[a])
return this.b[a]=s}}
P.fL.prototype={
gk:function(a){var s=this.a
return s.gk(s)},
B:function(a,b){var s=this.a
return s.b==null?s.gN().B(0,b):C.a.h(s.aW(),b)},
gA:function(a){var s=this.a
if(s.b==null){s=s.gN()
s=s.gA(s)}else{s=s.aW()
s=new J.aC(s,s.length,H.D(s).i("aC<1>"))}return s}}
P.eC.prototype={}
P.cs.prototype={}
P.iC.prototype={
n:function(a){return"unknown"}}
P.cy.prototype={
dI:function(a){var s=this.d_(a,0,a.length)
return s==null?a:s},
d_:function(a,b,c){var s,r,q,p
for(s=b,r=null;s<c;++s){if(s>=a.length)return H.w(a,s)
switch(a[s]){case"&":q="&amp;"
break
case'"':q="&quot;"
break
case"'":q="&#39;"
break
case"<":q="&lt;"
break
case">":q="&gt;"
break
case"/":q="&#47;"
break
default:q=null}if(q!=null){if(r==null)r=new P.aQ("")
if(s>b)r.a+=C.d.a3(a,b,s)
r.a+=q
b=s+1}}if(r==null)return null
if(c>b)r.a+=J.o9(a,b,c)
p=r.a
return p.charCodeAt(0)==0?p:p}}
P.dv.prototype={
n:function(a){var s=P.by(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
P.eU.prototype={
n:function(a){return"Cyclic error in JSON stringify"}}
P.iI.prototype={
c9:function(a,b,c){var s
t.fs.a(c)
s=P.qg(b,this.gfX().a)
return s},
h2:function(a,b){var s
t.mN.a(b)
s=P.pz(a,this.gh3().b,null)
return s},
gh3:function(){return C.R},
gfX:function(){return C.Q}}
P.eW.prototype={}
P.eV.prototype={}
P.jO.prototype={
ei:function(a){var s,r,q,p,o,n,m,l=a.length
for(s=J.kw(a),r=this.c,q=0,p=0;p<l;++p){o=s.aU(a,p)
if(o>92){if(o>=55296){n=o&64512
if(n===55296){m=p+1
m=!(m<l&&(C.d.aU(a,m)&64512)===56320)}else m=!1
if(!m)if(n===56320){n=p-1
n=!(n>=0&&(C.d.c8(a,n)&64512)===55296)}else n=!1
else n=!0
if(n){if(p>q)r.a+=C.d.a3(a,q,p)
q=p+1
r.a+=H.ad(92)
r.a+=H.ad(117)
r.a+=H.ad(100)
n=o>>>8&15
r.a+=H.ad(n<10?48+n:87+n)
n=o>>>4&15
r.a+=H.ad(n<10?48+n:87+n)
n=o&15
r.a+=H.ad(n<10?48+n:87+n)}}continue}if(o<32){if(p>q)r.a+=C.d.a3(a,q,p)
q=p+1
r.a+=H.ad(92)
switch(o){case 8:r.a+=H.ad(98)
break
case 9:r.a+=H.ad(116)
break
case 10:r.a+=H.ad(110)
break
case 12:r.a+=H.ad(102)
break
case 13:r.a+=H.ad(114)
break
default:r.a+=H.ad(117)
r.a+=H.ad(48)
r.a+=H.ad(48)
n=o>>>4&15
r.a+=H.ad(n<10?48+n:87+n)
n=o&15
r.a+=H.ad(n<10?48+n:87+n)
break}}else if(o===34||o===92){if(p>q)r.a+=C.d.a3(a,q,p)
q=p+1
r.a+=H.ad(92)
r.a+=H.ad(o)}}if(q===0)r.a+=H.b(a)
else if(q<l)r.a+=s.a3(a,q,l)},
bO:function(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw H.a(new P.eU(a,null))}C.a.l(s,a)},
bC:function(a){var s,r,q,p,o=this
if(o.eh(a))return
o.bO(a)
try{s=o.b.$1(a)
if(!o.eh(s)){q=P.m7(a,null,o.gdh())
throw H.a(q)}q=o.a
if(0>=q.length)return H.w(q,-1)
q.pop()}catch(p){r=H.O(p)
q=P.m7(a,r,o.gdh())
throw H.a(q)}},
eh:function(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=C.b.n(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.ei(a)
s.a+='"'
return!0}else if(t.gs.b(a)){q.bO(a)
q.hC(a)
s=q.a
if(0>=s.length)return H.w(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.bO(a)
r=q.hD(a)
s=q.a
if(0>=s.length)return H.w(s,-1)
s.pop()
return r}else return!1},
hC:function(a){var s,r,q=this.c
q.a+="["
s=J.ap(a)
if(s.gcq(a)){this.bC(s.h(a,0))
for(r=1;r<s.gk(a);++r){q.a+=","
this.bC(s.h(a,r))}}q.a+="]"},
hD:function(a){var s,r,q,p,o,n=this,m={}
if(a.gM(a)){n.c.a+="{}"
return!0}s=P.iK(a.gk(a)*2,null,!1,t.r)
r=m.a=0
m.b=!0
a.t(0,new P.jP(m,s))
if(!m.b)return!1
q=n.c
q.a+="{"
for(p='"';r<s.length;r+=2,p=',"'){q.a+=p
n.ei(H.r(s[r]))
q.a+='":'
o=r+1
if(o>=s.length)return H.w(s,o)
n.bC(s[o])}q.a+="}"
return!0}}
P.jP.prototype={
$2:function(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
C.a.j(s,r.a++,a)
C.a.j(s,r.a++,b)},
$S:29}
P.jN.prototype={
gdh:function(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
P.iN.prototype={
$2:function(a,b){var s,r,q
t.bR.a(a)
s=this.b
r=this.a
s.a+=r.a
q=s.a+=H.b(a.a)
s.a=q+": "
s.a+=P.by(b)
r.a=", "},
$S:47}
P.cv.prototype={
l:function(a,b){return P.oo(C.e.C(this.a,t.jS.a(b).ghG()),!1)},
R:function(a,b){if(b==null)return!1
return b instanceof P.cv&&this.a===b.a&&!0},
gu:function(a){var s=this.a
return(s^C.e.c2(s,30))&1073741823},
n:function(a){var s=this,r=P.op(H.oS(s)),q=P.eG(H.oQ(s)),p=P.eG(H.oM(s)),o=P.eG(H.oN(s)),n=P.eG(H.oP(s)),m=P.eG(H.oR(s)),l=P.oq(H.oO(s)),k=r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l
return k}}
P.c2.prototype={
aA:function(a,b){return new P.c2(C.e.F(this.a*b))},
R:function(a,b){if(b==null)return!1
return b instanceof P.c2&&this.a===b.a},
gu:function(a){return C.e.gu(this.a)},
n:function(a){var s,r,q,p=new P.i9(),o=this.a
if(o<0)return"-"+new P.c2(0-o).n(0)
s=p.$1(C.e.aF(o,6e7)%60)
r=p.$1(C.e.aF(o,1e6)%60)
q=new P.i8().$1(o%1e6)
return""+C.e.aF(o,36e8)+":"+H.b(s)+":"+H.b(r)+"."+H.b(q)}}
P.i8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:28}
P.i9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:28}
P.K.prototype={
gb4:function(){return H.bc(this.$thrownJsError)}}
P.d6.prototype={
n:function(a){var s=this.a
if(s!=null)return"Assertion failed: "+P.by(s)
return"Assertion failed"}}
P.fn.prototype={}
P.f7.prototype={
n:function(a){return"Throw of null."}}
P.aV.prototype={
gbU:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbT:function(){return""},
n:function(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+H.b(n),l=q.gbU()+o+m
if(!q.a)return l
s=q.gbT()
r=P.by(q.b)
return l+s+": "+r}}
P.dE.prototype={
gbU:function(){return"RangeError"},
gbT:function(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+H.b(q):""
else if(q==null)s=": Not greater than or equal to "+H.b(r)
else if(q>r)s=": Not in inclusive range "+H.b(r)+".."+H.b(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+H.b(r)
return s}}
P.eO.prototype={
gbU:function(){return"RangeError"},
gbT:function(){var s,r=H.u(this.b)
if(typeof r!=="number")return r.am()
if(r<0)return": index must not be negative"
s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+H.b(s)},
gk:function(a){return this.f}}
P.f5.prototype={
n:function(a){var s,r,q,p,o,n,m,l,k=this,j={},i=new P.aQ("")
j.a=""
s=k.c
for(r=s.length,q=0,p="",o="";q<r;++q,o=", "){n=s[q]
i.a=p+o
p=i.a+=P.by(n)
j.a=", "}k.d.t(0,new P.iN(j,i))
m=P.by(k.a)
l=i.n(0)
r="NoSuchMethodError: method not found: '"+H.b(k.b.a)+"'\nReceiver: "+m+"\nArguments: ["+l+"]"
return r}}
P.fq.prototype={
n:function(a){return"Unsupported operation: "+this.a}}
P.fo.prototype={
n:function(a){var s=this.a
return s!=null?"UnimplementedError: "+s:"UnimplementedError"}}
P.b6.prototype={
n:function(a){return"Bad state: "+this.a}}
P.eD.prototype={
n:function(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.by(s)+"."}}
P.f9.prototype={
n:function(a){return"Out of Memory"},
gb4:function(){return null},
$iK:1}
P.dH.prototype={
n:function(a){return"Stack Overflow"},
gb4:function(){return null},
$iK:1}
P.eF.prototype={
n:function(a){var s=this.a
return s==null?"Reading static variable during its initialization":"Reading static variable '"+s+"' during its initialization"}}
P.fF.prototype={
n:function(a){return"Exception: "+this.a},
$idl:1}
P.dn.prototype={
n:function(a){var s=this.a,r=s!=null&&""!==s?"FormatException: "+H.b(s):"FormatException",q=this.b
if(typeof q=="string"){if(q.length>78)q=C.d.a3(q,0,75)+"..."
return r+"\n"+q}else return r},
$idl:1}
P.e.prototype={
I:function(a,b,c){var s=H.j(this)
return H.ma(this,s.q(c).i("1(e.E)").a(b),s.i("e.E"),c)},
T:function(a,b){return this.I(a,b,t.z)},
bz:function(a,b){var s=H.j(this)
return new H.al(this,s.i("p(e.E)").a(b),s.i("al<e.E>"))},
gk:function(a){var s,r=this.gA(this)
for(s=0;r.m();)++s
return s},
gE:function(a){var s=this.gA(this)
if(!s.m())throw H.a(H.bC())
return s.gp()},
gaC:function(a){var s,r=this.gA(this)
if(!r.m())throw H.a(H.bC())
s=r.gp()
if(r.m())throw H.a(H.ow())
return s},
B:function(a,b){var s,r,q
P.aH(b,"index")
for(s=this.gA(this),r=0;s.m();){q=s.gp()
if(b===r)return q;++r}throw H.a(P.bh(b,this,"index",null,r))},
n:function(a){return P.ov(this,"(",")")}}
P.U.prototype={}
P.v.prototype={
gu:function(a){return P.t.prototype.gu.call(C.O,this)},
n:function(a){return"null"}}
P.t.prototype={constructor:P.t,$it:1,
R:function(a,b){return this===b},
gu:function(a){return H.cb(this)},
n:function(a){return"Instance of '"+H.b(H.j_(this))+"'"},
br:function(a,b){t.E.a(b)
throw H.a(P.mc(this,b.gdS(),b.ge_(),b.gdT()))},
toString:function(){return this.n(this)}}
P.fU.prototype={
n:function(a){return""},
$ib1:1}
P.aQ.prototype={
gk:function(a){return this.a.length},
n:function(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ip1:1}
W.k.prototype={$ik:1}
W.cn.prototype={
scj:function(a,b){a.href=b},
n:function(a){return String(a)},
$icn:1}
W.ev.prototype={
n:function(a){return String(a)}}
W.cp.prototype={$icp:1}
W.bW.prototype={$ibW:1}
W.bX.prototype={$ibX:1}
W.cr.prototype={$icr:1}
W.b4.prototype={
gk:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.ct.prototype={
aT:function(a,b){var s=$.nw(),r=s[b]
if(typeof r=="string")return r
r=this.fw(a,b)
s[b]=r
return r},
fw:function(a,b){var s
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
s=$.nx()+b
if(s in a)return s
return b},
bi:function(a,b,c,d){if(c==null)c=""
a.setProperty(b,c,d)},
gk:function(a){return a.length}}
W.hS.prototype={}
W.cu.prototype={
cl:function(a,b,c){return a.insertRule(b,c)},
hs:function(a,b){return a.removeRule(b)},
$icu:1}
W.c_.prototype={$ic_:1}
W.c0.prototype={}
W.hU.prototype={
n:function(a){return String(a)}}
W.eH.prototype={
fW:function(a,b){return a.createHTMLDocument(b)}}
W.df.prototype={
n:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.b(r)+", "
s=a.top
s.toString
s=r+H.b(s)+") "
r=a.width
r.toString
r=s+H.b(r)+" x "
s=a.height
s.toString
return r+H.b(s)},
R:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.R(b)
if(s===r.gbp(b)){s=a.top
s.toString
if(s===r.gbx(b)){s=a.width
s.toString
if(s===r.gbA(b)){s=a.height
s.toString
r=s===r.gbm(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gu:function(a){var s,r,q,p=a.left
p.toString
p=C.b.gu(p)
s=a.top
s.toString
s=C.b.gu(s)
r=a.width
r.toString
r=C.b.gu(r)
q=a.height
q.toString
return W.mB(p,s,r,C.b.gu(q))},
gdC:function(a){var s=a.bottom
s.toString
return s},
gbm:function(a){var s=a.height
s.toString
return s},
gbp:function(a){var s=a.left
s.toString
return s},
ge5:function(a){var s=a.right
s.toString
return s},
gbx:function(a){var s=a.top
s.toString
return s},
gbA:function(a){var s=a.width
s.toString
return s},
$ibI:1}
W.hV.prototype={
gk:function(a){return a.length},
l:function(a,b){return a.add(H.r(b))}}
W.fv.prototype={
gM:function(a){return this.a.firstElementChild==null},
gk:function(a){return this.b.length},
h:function(a,b){return t.h.a(J.be(this.b,H.u(b)))},
j:function(a,b,c){var s
H.u(b)
t.h.a(c)
s=this.b
if(b<0||b>=s.length)return H.w(s,b)
this.a.replaceChild(c,s[b])},
sk:function(a,b){throw H.a(P.A("Cannot resize element lists"))},
l:function(a,b){t.h.a(b)
this.a.appendChild(b)
return b},
gA:function(a){var s=this.aM(this)
return new J.aC(s,s.length,H.D(s).i("aC<1>"))},
V:function(a,b,c,d,e){t.cj.a(d)
throw H.a(P.l4(null))},
ai:function(a,b,c){var s,r,q,p=this,o=t.h
o.a(c)
s=p.b
r=s.length
if(b>r)throw H.a(P.a8(b,0,p.gk(p),null,null))
q=p.a
if(b===r)q.appendChild(c)
else{if(b>=r)return H.w(s,b)
J.er(q,c,o.a(s[b]))}},
bk:function(a){J.kJ(this.a)},
gE:function(a){return W.pq(this.a)}}
W.ao.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return this.$ti.c.a(C.n.h(this.a,H.u(b)))},
j:function(a,b,c){H.u(b)
this.$ti.c.a(c)
throw H.a(P.A("Cannot modify list"))},
sk:function(a,b){throw H.a(P.A("Cannot modify list"))},
gE:function(a){return this.$ti.c.a(C.n.gE(this.a))},
$ilY:1}
W.o.prototype={
gfG:function(a){return new W.fC(a)},
gdF:function(a){return new W.fv(a,a.children)},
gdG:function(a){return new W.fD(a)},
gb0:function(a){var s=C.b.F(a.offsetLeft),r=C.b.F(a.offsetTop),q=C.b.F(a.offsetWidth),p=C.b.F(a.offsetHeight)
if(q<0)q=-q*0
if(p<0)p=-p*0
return new P.bI(s,r,q,p,t.q)},
a4:function(a,b){this.ck(a,"beforeend",b,null,null)},
n:function(a){return a.localName},
ck:function(a,b,c,d,e){var s,r=this.W(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":s=a.parentNode
s.toString
J.er(s,r,a)
break
case"afterbegin":s=a.childNodes
this.dR(a,r,s.length>0?s[0]:null)
break
case"beforeend":a.appendChild(r)
break
case"afterend":s=a.parentNode
s.toString
J.er(s,r,a.nextSibling)
break
default:H.E(P.aL("Invalid position "+b))}},
hf:function(a,b){if(!!a.matches)return a.matches(b)
else if(!!a.webkitMatchesSelector)return a.webkitMatchesSelector(b)
else if(!!a.mozMatchesSelector)return a.mozMatchesSelector(b)
else if(!!a.msMatchesSelector)return a.msMatchesSelector(b)
else if(!!a.oMatchesSelector)return a.oMatchesSelector(b)
else throw H.a(P.A("Not supported on this platform"))},
hh:function(a,b){var s=a
do{if(J.o2(s,b))return!0
s=s.parentElement}while(s!=null)
return!1},
W:function(a,b,c,d){var s,r,q,p
if(c==null){s=$.m_
if(s==null){s=H.h([],t.lN)
r=new W.dD(s)
C.a.l(s,W.my(null))
C.a.l(s,W.mG())
$.m_=r
d=r}else d=s
s=$.lZ
if(s==null){s=new W.eg(d)
$.lZ=s
c=s}else{s.a=d
c=s}}if($.bx==null){s=document
r=s.implementation
r.toString
r=C.L.fW(r,"")
$.bx=r
$.kU=r.createRange()
r=$.bx.createElement("base")
t.az.a(r)
s=s.baseURI
s.toString
r.href=s
$.bx.head.appendChild(r)}s=$.bx
if(s.body==null){r=s.createElement("body")
C.M.sfJ(s,t.hp.a(r))}s=$.bx
if(t.hp.b(a)){s=s.body
s.toString
q=s}else{s.toString
q=s.createElement(a.tagName)
$.bx.body.appendChild(q)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.T,a.tagName)){$.kU.selectNodeContents(q)
s=$.kU
s.toString
p=s.createContextualFragment(b==null?"null":b)}else{J.o6(q,b)
p=$.bx.createDocumentFragment()
for(;s=q.firstChild,s!=null;)p.appendChild(s)}if(q!==$.bx.body)J.es(q)
c.cE(p)
document.adoptNode(p)
return p},
fV:function(a,b,c){return this.W(a,b,c,null)},
K:function(a,b){this.se8(a,null)
a.appendChild(this.W(a,b,null,null))},
sfd:function(a,b){a.innerHTML=b},
ge7:function(a){return a.tagName},
gdU:function(a){return new W.au(a,"click",!1,t.G)},
gdX:function(a){return new W.au(a,"mousedown",!1,t.G)},
gdY:function(a){return new W.au(a,"touchstart",!1,t.el)},
$io:1}
W.ib.prototype={
$1:function(a){return t.h.b(t.A.a(a))},
$S:27}
W.f.prototype={$if:1}
W.id.prototype={
h:function(a,b){return new W.br(this.a,H.r(b),!1,t.ko)}}
W.ia.prototype={
h:function(a,b){H.r(b)
if($.lX.L(b.toLowerCase()))if($.nA())return new W.au(this.a,$.lX.h(0,b.toLowerCase()),!1,t.bz)
return new W.au(this.a,b,!1,t.bz)}}
W.F.prototype={
eH:function(a,b,c,d){return a.addEventListener(b,H.d2(t.o.a(c),1),!1)},
dK:function(a,b){return a.dispatchEvent(b)},
fl:function(a,b,c,d){return a.removeEventListener(b,H.d2(t.o.a(c),1),!1)},
$iF:1}
W.eM.prototype={
gk:function(a){return a.length}}
W.bA.prototype={
gk:function(a){return a.length},
h:function(a,b){H.u(b)
if(b>>>0!==b||b>=a.length)throw H.a(P.bh(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.u(b)
t.A.a(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.a(P.A("Cannot resize immutable List."))},
gE:function(a){if(a.length>0)return a[0]
throw H.a(P.ax("No elements"))},
B:function(a,b){return this.h(a,b)},
$in:1,
$ia0:1,
$ie:1,
$ix:1,
$ibA:1}
W.dq.prototype={
sfJ:function(a,b){a.body=b}}
W.dr.prototype={$idr:1}
W.bB.prototype={
sep:function(a,b){a.step=b},
sX:function(a,b){a.type=b},
sby:function(a,b){a.value=b},
cH:function(a,b,c){return a.setSelectionRange(b,c)},
$ibB:1}
W.bk.prototype={$ibk:1}
W.eX.prototype={
n:function(a){return String(a)},
$ieX:1}
W.a1.prototype={
fc:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return a.initMouseEvent(b,!0,!0,e,f,g,h,i,j,!1,!1,!1,!1,o,p)},
gb0:function(a){var s,r,q,p,o,n,m
if(!!a.offsetX)return new P.H(a.offsetX,a.offsetY,t.H)
else{s=a.target
r=t.h
if(!r.b(W.N(s)))throw H.a(P.A("offsetX is only supported on elements"))
q=r.a(W.N(s))
s=a.clientX
r=a.clientY
p=t.H
o=q.getBoundingClientRect()
n=o.left
n.toString
o=o.top
o.toString
m=new P.H(s,r,p).G(0,new P.H(n,o,p))
return new P.H(J.lE(m.a),J.lE(m.b),p)}},
$ia1:1}
W.an.prototype={
gE:function(a){var s=this.a.firstChild
if(s==null)throw H.a(P.ax("No elements"))
return s},
gaC:function(a){var s=this.a,r=s.childNodes.length
if(r===0)throw H.a(P.ax("No elements"))
if(r>1)throw H.a(P.ax("More than one element"))
s=s.firstChild
s.toString
return s},
l:function(a,b){this.a.appendChild(t.A.a(b))},
H:function(a,b){var s,r,q,p,o
t.hl.a(b)
s=b.a
r=this.a
if(s!==r)for(q=s.childNodes.length,p=0;p<q;++p){o=s.firstChild
o.toString
r.appendChild(o)}return},
ai:function(a,b,c){var s,r,q
t.A.a(c)
s=this.a
r=s.childNodes
q=r.length
if(b>q)throw H.a(P.a8(b,0,this.gk(this),null,null))
if(b===q)s.appendChild(c)
else{if(b>=q)return H.w(r,b)
J.er(s,c,r[b])}},
j:function(a,b,c){var s,r
H.u(b)
t.A.a(c)
s=this.a
r=s.childNodes
if(b<0||b>=r.length)return H.w(r,b)
s.replaceChild(c,r[b])},
gA:function(a){var s=this.a.childNodes
return new W.c5(s,s.length,H.Y(s).i("c5<Z.E>"))},
V:function(a,b,c,d,e){t.hl.a(d)
throw H.a(P.A("Cannot setRange on Node list"))},
gk:function(a){return this.a.childNodes.length},
sk:function(a,b){throw H.a(P.A("Cannot set length on immutable List."))},
h:function(a,b){H.u(b)
return C.n.h(this.a.childNodes,b)}}
W.m.prototype={
bs:function(a){var s=a.parentNode
if(s!=null)s.removeChild(a)},
ht:function(a,b){var s,r,q
try{r=a.parentNode
r.toString
s=r
J.nV(s,b,a)}catch(q){H.O(q)}return a},
eK:function(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s)},
n:function(a){var s=a.nodeValue
return s==null?this.es(a):s},
se8:function(a,b){a.textContent=b},
aH:function(a,b){return a.cloneNode(!0)},
D:function(a,b){return a.contains(b)},
dR:function(a,b,c){return a.insertBefore(b,c)},
fm:function(a,b,c){return a.replaceChild(b,c)},
$im:1}
W.cC.prototype={
gk:function(a){return a.length},
h:function(a,b){H.u(b)
if(b>>>0!==b||b>=a.length)throw H.a(P.bh(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.u(b)
t.A.a(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.a(P.A("Cannot resize immutable List."))},
gE:function(a){if(a.length>0)return a[0]
throw H.a(P.ax("No elements"))},
B:function(a,b){return this.h(a,b)},
$in:1,
$ia0:1,
$ie:1,
$ix:1}
W.cD.prototype={$icD:1}
W.cE.prototype={$icE:1}
W.cJ.prototype={
gk:function(a){return a.length},
$icJ:1}
W.cL.prototype={$icL:1}
W.fh.prototype={}
W.dI.prototype={
W:function(a,b,c,d){var s,r
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
s=W.or("<table>"+H.b(b)+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
s.toString
new W.an(r).H(0,new W.an(s))
return r}}
W.fi.prototype={
W:function(a,b,c,d){var s,r,q,p
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.z.W(s.createElement("table"),b,c,d)
s.toString
s=new W.an(s)
q=s.gaC(s)
q.toString
s=new W.an(q)
p=s.gaC(s)
r.toString
p.toString
new W.an(r).H(0,new W.an(p))
return r}}
W.fj.prototype={
W:function(a,b,c,d){var s,r,q
if("createContextualFragment" in window.Range.prototype)return this.bI(a,b,c,d)
s=document
r=s.createDocumentFragment()
s=C.z.W(s.createElement("table"),b,c,d)
s.toString
s=new W.an(s)
q=s.gaC(s)
r.toString
q.toString
new W.an(r).H(0,new W.an(q))
return r}}
W.cN.prototype={
K:function(a,b){var s,r
this.se8(a,null)
s=a.content
s.toString
J.kJ(s)
r=this.W(a,b,null,null)
a.content.appendChild(r)},
$icN:1}
W.cO.prototype={
cH:function(a,b,c){return a.setSelectionRange(b,c)},
$icO:1}
W.aI.prototype={$iaI:1}
W.b7.prototype={$ib7:1}
W.fm.prototype={
gk:function(a){return a.length},
h:function(a,b){H.u(b)
if(b>>>0!==b||b>=a.length)throw H.a(P.bh(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.u(b)
t.ki.a(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.a(P.A("Cannot resize immutable List."))},
gE:function(a){if(a.length>0)return a[0]
throw H.a(P.ax("No elements"))},
B:function(a,b){return this.h(a,b)},
$in:1,
$ia0:1,
$ie:1,
$ix:1}
W.ay.prototype={$iay:1}
W.bK.prototype={
gfE:function(a){var s=new P.a2($.I,t.iS),r=t.hv.a(new W.jp(new P.eb(s,t.fE)))
this.eT(a)
r=W.mZ(r,t.cZ)
r.toString
this.fn(a,r)
return s},
fn:function(a,b){return a.requestAnimationFrame(H.d2(t.hv.a(b),1))},
eT:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var s=['ms','moz','webkit','o']
for(var r=0;r<s.length&&!b.requestAnimationFrame;++r){b.requestAnimationFrame=b[s[r]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[s[r]+'CancelAnimationFrame']||b[s[r]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
eV:function(a,b,c){return a.getComputedStyle(b,c)},
$ibK:1,
$ijo:1}
W.jp.prototype={
$1:function(a){var s=this.a,r=s.$ti
a=r.i("1/?").a(H.kj(a))
s=s.a
if(s.a!==0)H.E(P.ax("Future already completed"))
s.b7(r.i("1/").a(a))},
$S:56}
W.b9.prototype={$ib9:1}
W.cP.prototype={$icP:1}
W.fx.prototype={
gk:function(a){return a.length},
h:function(a,b){H.u(b)
if(b>>>0!==b||b>=a.length)throw H.a(P.bh(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.u(b)
t.d5.a(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.a(P.A("Cannot resize immutable List."))},
gE:function(a){if(a.length>0)return a[0]
throw H.a(P.ax("No elements"))},
B:function(a,b){return this.h(a,b)},
$in:1,
$ia0:1,
$ie:1,
$ix:1}
W.dO.prototype={
n:function(a){var s,r=a.left
r.toString
r="Rectangle ("+H.b(r)+", "
s=a.top
s.toString
s=r+H.b(s)+") "
r=a.width
r.toString
r=s+H.b(r)+" x "
s=a.height
s.toString
return r+H.b(s)},
R:function(a,b){var s,r
if(b==null)return!1
if(t.q.b(b)){s=a.left
s.toString
r=J.R(b)
if(s===r.gbp(b)){s=a.top
s.toString
if(s===r.gbx(b)){s=a.width
s.toString
if(s===r.gbA(b)){s=a.height
s.toString
r=s===r.gbm(b)
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gu:function(a){var s,r,q,p=a.left
p.toString
p=C.b.gu(p)
s=a.top
s.toString
s=C.b.gu(s)
r=a.width
r.toString
r=C.b.gu(r)
q=a.height
q.toString
return W.mB(p,s,r,C.b.gu(q))},
gbm:function(a){var s=a.height
s.toString
return s},
gbA:function(a){var s=a.width
s.toString
return s}}
W.e_.prototype={
gk:function(a){return a.length},
h:function(a,b){H.u(b)
if(b>>>0!==b||b>=a.length)throw H.a(P.bh(b,a,null,null,null))
return a[b]},
j:function(a,b,c){H.u(b)
t.A.a(c)
throw H.a(P.A("Cannot assign element of immutable List."))},
sk:function(a,b){throw H.a(P.A("Cannot resize immutable List."))},
gE:function(a){if(a.length>0)return a[0]
throw H.a(P.ax("No elements"))},
B:function(a,b){return this.h(a,b)},
$in:1,
$ia0:1,
$ie:1,
$ix:1}
W.fu.prototype={
t:function(a,b){var s,r,q,p,o
t.gS.a(b)
for(s=this.gN(),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,H.y)(s),++p){o=s[p]
b.$2(o,q.getAttribute(o))}},
gN:function(){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=H.h([],t.U)
for(r=m.length,q=t.nD,p=0;p<r;++p){if(p>=m.length)return H.w(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
C.a.l(s,n)}}return s},
gM:function(a){return this.gN().length===0}}
W.fC.prototype={
h:function(a,b){return this.a.getAttribute(H.r(b))},
j:function(a,b,c){this.a.setAttribute(b,H.r(c))},
gk:function(a){return this.gN().length}}
W.fD.prototype={
a6:function(){var s,r,q,p,o=P.dy(t.R)
for(s=this.a.className.split(" "),r=s.length,q=0;q<r;++q){p=J.eu(s[q])
if(p.length!==0)o.l(0,p)}return o},
cC:function(a){this.a.className=t.gi.a(a).cr(0," ")},
gk:function(a){return this.a.classList.length},
l:function(a,b){var s,r
H.r(b)
s=this.a.classList
r=s.contains(b)
s.add(b)
return!r},
a8:function(a,b){var s=this.a.classList,r=s.contains(b)
s.remove(b)
return r}}
W.eK.prototype={}
W.br.prototype={
Z:function(a,b,c,d){var s=H.j(this)
s.i("~(1)?").a(a)
t.Z.a(c)
return W.C(this.a,this.b,a,!1,s.c)},
bq:function(a,b,c){return this.Z(a,null,b,c)}}
W.au.prototype={}
W.aR.prototype={
Z:function(a,b,c,d){var s,r,q,p,o=this.$ti
o.i("~(1)?").a(a)
t.Z.a(c)
s=new W.e9(new H.ab(o.i("@<W<1>>").q(o.i("a4<1>")).i("ab<1,2>")),o.i("e9<1>"))
s.seR(P.cK(s.gfR(s),!0,o.c))
for(r=this.a,r=new H.Q(r,r.gk(r),r.$ti.i("Q<i.E>")),q=this.c,o=o.i("br<1>");r.m();){p=r.d
s.l(0,new W.br(p,q,!1,o))}o=s.a
o.toString
return new P.am(o,H.j(o).i("am<1>")).Z(a,b,c,d)},
v:function(a){return this.Z(a,null,null,null)},
bq:function(a,b,c){return this.Z(a,null,b,c)}}
W.dP.prototype={
a0:function(){var s=this
if(s.b==null)return null
s.du()
s.b=null
s.sfh(null)
return null},
cs:function(a){if(this.b==null)return;++this.a
this.du()},
cw:function(){var s=this
if(s.b==null||s.a<=0)return;--s.a
s.ds()},
ds:function(){var s,r=this,q=r.d,p=q!=null
if(p&&r.a<=0){s=r.b
s.toString
t.o.a(q)
if(p)J.nS(s,r.c,q,!1)}},
du:function(){var s,r=this.d,q=r!=null
if(q){s=this.b
s.toString
t.o.a(r)
if(q)J.nU(s,this.c,r,!1)}},
sfh:function(a){this.d=t.o.a(a)}}
W.jB.prototype={
$1:function(a){return this.a.$1(t.B.a(a))},
$S:67}
W.e9.prototype={
l:function(a,b){var s,r,q,p=this
p.$ti.i("W<1>").a(b)
s=p.b
if(s.L(b))return
r=p.a
r=r.gfC(r)
b.toString
q=b.$ti
q.i("~(1)?").a(r)
t.Z.a(new W.k6(p,b))
s.j(0,b,W.C(b.a,b.b,r,!1,q.c))},
c7:function(a){var s,r,q,p
for(s=this.b,r=s.gay(s),q=H.j(r),q=new H.a7(J.B(r.a),r.b,q.i("@<1>").q(q.Q[1]).i("a7<1,2>"));q.m();){p=q.a
p.a0()}s.bk(0)
this.a.c7(0)},
seR:function(a){this.a=this.$ti.i("fe<1>?").a(a)}}
W.k6.prototype={
$0:function(){var s=this.a,r=s.b.a8(0,s.$ti.i("W<1>").a(this.b))
if(r!=null)r.a0()
return null},
$S:0}
W.ci.prototype={
eD:function(a){var s
if($.fH.a===0){for(s=0;s<262;++s)$.fH.j(0,C.S[s],W.qC())
for(s=0;s<12;++s)$.fH.j(0,C.m[s],W.qD())}},
aG:function(a){return $.nQ().D(0,W.dj(a))},
ae:function(a,b,c){var s=$.fH.h(0,H.b(W.dj(a))+"::"+b)
if(s==null)s=$.fH.h(0,"*::"+b)
if(s==null)return!1
return H.cZ(s.$4(a,b,c,this))},
$iaY:1}
W.Z.prototype={
gA:function(a){return new W.c5(a,this.gk(a),H.Y(a).i("c5<Z.E>"))},
l:function(a,b){H.Y(a).i("Z.E").a(b)
throw H.a(P.A("Cannot add to immutable List."))},
ai:function(a,b,c){H.Y(a).i("Z.E").a(c)
throw H.a(P.A("Cannot add to immutable List."))},
V:function(a,b,c,d,e){H.Y(a).i("e<Z.E>").a(d)
throw H.a(P.A("Cannot setRange on immutable List."))}}
W.dD.prototype={
l:function(a,b){C.a.l(this.a,t.hU.a(b))},
aG:function(a){return C.a.dw(this.a,new W.iP(a))},
ae:function(a,b,c){return C.a.dw(this.a,new W.iO(a,b,c))},
$iaY:1}
W.iP.prototype={
$1:function(a){return t.hU.a(a).aG(this.a)},
$S:24}
W.iO.prototype={
$1:function(a){return t.hU.a(a).ae(this.a,this.b,this.c)},
$S:24}
W.e7.prototype={
eE:function(a,b,c,d){var s,r,q
this.a.H(0,c)
s=b.bz(0,new W.k4())
r=b.bz(0,new W.k5())
this.b.H(0,s)
q=this.c
q.H(0,C.U)
q.H(0,r)},
aG:function(a){return this.a.D(0,W.dj(a))},
ae:function(a,b,c){var s=this,r=W.dj(a),q=s.c
if(q.D(0,H.b(r)+"::"+b))return s.d.fD(c)
else if(q.D(0,"*::"+b))return s.d.fD(c)
else{q=s.b
if(q.D(0,H.b(r)+"::"+b))return!0
else if(q.D(0,"*::"+b))return!0
else if(q.D(0,H.b(r)+"::*"))return!0
else if(q.D(0,"*::*"))return!0}return!1},
$iaY:1}
W.k4.prototype={
$1:function(a){return!C.a.D(C.m,H.r(a))},
$S:22}
W.k5.prototype={
$1:function(a){return C.a.D(C.m,H.r(a))},
$S:22}
W.fW.prototype={
ae:function(a,b,c){if(this.eA(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.D(0,b)
return!1}}
W.ka.prototype={
$1:function(a){return"TEMPLATE::"+H.b(H.r(a))},
$S:61}
W.fV.prototype={
aG:function(a){var s
if(t.ik.b(a))return!1
s=t.bC.b(a)
if(s&&W.dj(a)==="foreignObject")return!1
if(s)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.d.eo(b,"on"))return!1
return this.aG(a)},
$iaY:1}
W.c5.prototype={
m:function(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sd0(J.be(s.a,r))
s.c=r
return!0}s.sd0(null)
s.c=q
return!1},
gp:function(){return this.d},
sd0:function(a){this.d=this.$ti.i("1?").a(a)},
$iU:1}
W.fz.prototype={
dK:function(a,b){return H.E(P.A("You can only attach EventListeners to your own window."))},
$iF:1,
$ijo:1}
W.fT.prototype={$ip6:1}
W.eg.prototype={
cE:function(a){var s=this,r=new W.ki(s)
s.b=!1
r.$2(a,null)
for(;s.b;){s.b=!1
r.$2(a,null)}},
aY:function(a,b){var s=this.b=!0
if(b!=null?b!==a.parentNode:s)J.es(a)
else b.removeChild(a)},
fq:function(a,b){var s,r,q,p,o,n=!0,m=null,l=null
try{m=J.nX(a)
l=m.a.getAttribute("is")
t.h.a(a)
s=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
if(c.id=='lastChild'||c.name=='lastChild'||c.id=='previousSibling'||c.name=='previousSibling'||c.id=='children'||c.name=='children')return true
var k=c.childNodes
if(c.lastChild&&c.lastChild!==k[k.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var j=0
if(c.children)j=c.children.length
for(var i=0;i<j;i++){var h=c.children[i]
if(h.id=='attributes'||h.name=='attributes'||h.id=='lastChild'||h.name=='lastChild'||h.id=='previousSibling'||h.name=='previousSibling'||h.id=='children'||h.name=='children')return true}return false}(a)
n=H.a3(s)?!0:!(a.attributes instanceof NamedNodeMap)}catch(p){H.O(p)}r="element unprintable"
try{r=J.z(a)}catch(p){H.O(p)}try{q=W.dj(a)
this.fp(t.h.a(a),b,n,r,q,t.f.a(m),H.mN(l))}catch(p){if(H.O(p) instanceof P.aV)throw p
else{this.aY(a,b)
window
o="Removing corrupted element "+H.b(r)
if(typeof console!="undefined")window.console.warn(o)}}},
fp:function(a,b,c,d,e,f,g){var s,r,q,p,o,n,m=this
if(c){m.aY(a,b)
window
s="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(s)
return}if(!m.a.aG(a)){m.aY(a,b)
window
s="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(s)
return}if(g!=null)if(!m.a.ae(a,"is",g)){m.aY(a,b)
window
s="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(s)
return}s=f.gN()
r=H.h(s.slice(0),H.D(s).i("G<1>"))
for(q=f.gN().length-1,s=f.a;q>=0;--q){if(q>=r.length)return H.w(r,q)
p=r[q]
o=m.a
n=J.ob(p)
H.r(p)
if(!o.ae(a,n,s.getAttribute(p))){window
o="Removing disallowed attribute <"+H.b(e)+" "+p+'="'+H.b(s.getAttribute(p))+'">'
if(typeof console!="undefined")window.console.warn(o)
s.removeAttribute(p)}}if(t.fD.b(a)){s=a.content
s.toString
m.cE(s)}},
$ioH:1}
W.ki.prototype={
$2:function(a,b){var s,r,q,p,o,n,m=this.a
switch(a.nodeType){case 1:m.fq(a,b)
break
case 8:case 11:case 3:case 4:break
default:m.aY(a,b)}s=a.lastChild
for(q=t.A;null!=s;){r=null
try{r=s.previousSibling
if(r!=null){p=r.nextSibling
o=s
o=p==null?o!=null:p!==o
p=o}else p=!1
if(p){p=P.ax("Corrupt HTML")
throw H.a(p)}}catch(n){H.O(n)
p=q.a(s)
m.b=!0
o=p.parentNode
o=a==null?o!=null:a!==o
if(o){o=p.parentNode
if(o!=null)o.removeChild(p)}else a.removeChild(p)
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:41}
W.fy.prototype={}
W.fI.prototype={}
W.fJ.prototype={}
W.fO.prototype={}
W.fP.prototype={}
W.fX.prototype={}
W.fY.prototype={}
W.h1.prototype={}
W.h2.prototype={}
W.h3.prototype={}
W.h4.prototype={}
P.eE.prototype={
dv:function(a){var s=$.nv().b
if(typeof a!="string")H.E(H.bb(a))
if(s.test(a))return a
throw H.a(P.d5(a,"value","Not a valid class token"))},
n:function(a){return this.a6().cr(0," ")},
gA:function(a){var s=this.a6()
return P.jQ(s,s.r,H.j(s).c)},
I:function(a,b,c){var s,r
c.i("0(d)").a(b)
s=this.a6()
r=H.j(s)
return new H.aX(s,r.q(c).i("1(2)").a(b),r.i("@<1>").q(c).i("aX<1,2>"))},
T:function(a,b){return this.I(a,b,t.z)},
gk:function(a){return this.a6().a},
l:function(a,b){var s
H.r(b)
this.dv(b)
s=this.hi(0,new P.hR(b))
return H.cZ(s==null?!1:s)},
a8:function(a,b){var s,r
this.dv(b)
s=this.a6()
r=s.a8(0,b)
this.cC(s)
return r},
B:function(a,b){return this.a6().B(0,b)},
hi:function(a,b){var s,r
t.gA.a(b)
s=this.a6()
r=b.$1(s)
this.cC(s)
return r}}
P.hR.prototype={
$1:function(a){return t.gi.a(a).l(0,this.a)},
$S:72}
P.eL.prototype={
gab:function(){var s=this.b,r=H.j(s)
return new H.aF(new H.al(s,r.i("p(i.E)").a(new P.iy()),r.i("al<i.E>")),r.i("o(i.E)").a(new P.iz()),r.i("aF<i.E,o>"))},
j:function(a,b,c){var s
H.u(b)
t.h.a(c)
s=this.gab()
J.o5(s.b.$1(J.aU(s.a,b)),c)},
sk:function(a,b){var s=J.af(this.gab().a)
if(b>=s)return
else if(b<0)throw H.a(P.aL("Invalid list length"))
this.hr(0,b,s)},
l:function(a,b){this.b.a.appendChild(t.h.a(b))},
V:function(a,b,c,d,e){t.cj.a(d)
throw H.a(P.A("Cannot setRange on filtered list"))},
hr:function(a,b,c){var s=this.gab()
s=H.oY(s,b,s.$ti.i("e.E"))
C.a.t(P.cA(H.p2(s,c-b,H.j(s).i("e.E")),!0,t.z),new P.iA())},
bk:function(a){J.kJ(this.b.a)},
ai:function(a,b,c){var s,r
t.h.a(c)
if(b===J.af(this.gab().a))this.b.a.appendChild(c)
else{s=this.gab()
r=s.b.$1(J.aU(s.a,b))
s=r.parentNode
s.toString
J.er(s,c,r)}},
gk:function(a){return J.af(this.gab().a)},
h:function(a,b){var s
H.u(b)
s=this.gab()
return s.b.$1(J.aU(s.a,b))},
gA:function(a){var s=P.cA(this.gab(),!1,t.h)
return new J.aC(s,s.length,H.D(s).i("aC<1>"))}}
P.iy.prototype={
$1:function(a){return t.h.b(t.A.a(a))},
$S:27}
P.iz.prototype={
$1:function(a){return t.h.a(t.A.a(a))},
$S:70}
P.iA.prototype={
$1:function(a){return J.es(a)},
$S:9}
P.dw.prototype={$idw:1}
P.iH.prototype={
$1:function(a){var s,r,q,p=this.a
if(p.L(a))return p.h(0,a)
if(t.f.b(a)){s={}
p.j(0,a,s)
for(p=J.B(a.gN());p.m();){r=p.gp()
s[r]=this.$1(a.h(0,r))}return s}else if(t.d.b(a)){q=[]
p.j(0,a,q)
C.a.H(q,J.h9(a,this,t.z))
return q}else return P.ei(a)},
$S:62}
P.km.prototype={
$1:function(a){var s
t.b.a(a)
s=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.pV,a,!1)
P.le(s,$.kG(),a)
return s},
$S:9}
P.kn.prototype={
$1:function(a){return new this.a(a)},
$S:9}
P.kr.prototype={
$1:function(a){return new P.aE(a)},
$S:53}
P.ks.prototype={
$1:function(a){return new P.q(a,t.gq)},
$S:52}
P.kt.prototype={
$1:function(a){return new P.P(a)},
$S:71}
P.P.prototype={
h:function(a,b){if(typeof b!="string"&&typeof b!="number")throw H.a(P.aL("property is not a String or num"))
return P.kl(this.a[b])},
j:function(a,b,c){if(typeof b!="string"&&typeof b!="number")throw H.a(P.aL("property is not a String or num"))
this.a[b]=P.ei(c)},
R:function(a,b){if(b==null)return!1
return b instanceof P.P&&this.a===b.a},
w:function(a){if(typeof a!="string"&&!0)throw H.a(P.aL("property is not a String or num"))
return a in this.a},
ca:function(a){delete this.a[a]},
n:function(a){var s,r
try{s=String(this.a)
return s}catch(r){H.O(r)
s=this.ew(0)
return s}},
S:function(a,b){var s,r=this.a
if(b==null)s=null
else{s=H.D(b)
s=P.cA(new H.L(b,s.i("@(1)").a(P.kC()),s.i("L<1,@>")),!0,t.z)}return P.kl(r[a].apply(r,s))},
gu:function(a){return 0}}
P.aE.prototype={
dA:function(a){var s=P.ei(null),r=H.D(a)
r=P.cA(new H.L(a,r.i("@(1)").a(P.kC()),r.i("L<1,@>")),!0,t.z)
return P.kl(this.a.apply(s,r))}}
P.q.prototype={
cS:function(a){var s=this,r=a<0||a>=s.gk(s)
if(r)throw H.a(P.a8(a,0,s.gk(s),null,null))},
h:function(a,b){if(H.bO(b))this.cS(b)
return this.$ti.c.a(this.cK(0,b))},
j:function(a,b,c){if(H.bO(b))this.cS(b)
this.cL(0,b,c)},
gk:function(a){var s=this.a.length
if(typeof s==="number"&&s>>>0===s)return s
throw H.a(P.ax("Bad JsArray length"))},
sk:function(a,b){this.cL(0,"length",b)},
l:function(a,b){this.S("push",[this.$ti.c.a(b)])},
ai:function(a,b,c){var s,r=this
r.$ti.c.a(c)
s=b>=r.gk(r)+1
if(s)H.E(P.a8(b,0,r.gk(r),null,null))
r.S("splice",[b,0,c])},
V:function(a,b,c,d,e){var s,r,q,p=this,o=null
p.$ti.i("e<1>").a(d)
s=p.gk(p)
if(b>s)H.E(P.a8(b,0,s,o,o))
if(c<b||c>s)H.E(P.a8(c,b,s,o,o))
r=c-b
if(r===0)return
q=[b,r]
C.a.H(q,H.bm(d,e,o,H.Y(d).i("i.E")).hy(0,r))
p.S("splice",q)},
$in:1,
$ie:1,
$ix:1}
P.dW.prototype={}
P.H.prototype={
n:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
R:function(a,b){if(b==null)return!1
return b instanceof P.H&&this.a==b.a&&this.b==b.b},
gu:function(a){var s=J.bf(this.a),r=J.bf(this.b)
return P.mA(P.dV(P.dV(0,s),r))},
G:function(a,b){var s,r,q,p,o=this.$ti
o.a(b)
s=this.a
r=b.a
if(typeof s!=="number")return s.G()
if(typeof r!=="number")return H.ae(r)
q=o.c
r=q.a(s-r)
s=this.b
p=b.b
if(typeof s!=="number")return s.G()
if(typeof p!=="number")return H.ae(p)
return new P.H(r,q.a(s-p),o)},
aA:function(a,b){var s,r,q,p=this.a
if(typeof p!=="number")return p.aA()
s=this.$ti
r=s.c
p=r.a(p*b)
q=this.b
if(typeof q!=="number")return q.aA()
return new P.H(p,r.a(q*b),s)}}
P.fR.prototype={
ge5:function(a){return this.$ti.c.a(this.a+this.c)},
gdC:function(a){return this.$ti.c.a(this.b+this.d)},
n:function(a){var s=this
return"Rectangle ("+s.a+", "+s.b+") "+s.c+" x "+s.d},
R:function(a,b){var s,r,q,p,o=this
if(b==null)return!1
if(t.q.b(b)){s=o.a
r=J.R(b)
if(s===r.gbp(b)){q=o.b
if(q===r.gbx(b)){p=o.$ti.c
s=p.a(s+o.c)===r.ge5(b)&&p.a(q+o.d)===r.gdC(b)}else s=!1}else s=!1}else s=!1
return s},
gu:function(a){var s=this,r=s.a,q=C.e.gu(r),p=s.b,o=C.e.gu(p),n=s.$ti.c
r=C.e.gu(n.a(r+s.c))
p=C.e.gu(n.a(p+s.d))
return P.mA(P.dV(P.dV(P.dV(P.dV(0,q),o),r),p))}}
P.bI.prototype={
gbp:function(a){return this.a},
gbx:function(a){return this.b},
gbA:function(a){return this.c},
gbm:function(a){return this.d}}
P.cH.prototype={$icH:1}
P.ew.prototype={
a6:function(){var s,r,q,p,o=this.a.getAttribute("class"),n=P.dy(t.R)
if(o==null)return n
for(s=o.split(" "),r=s.length,q=0;q<r;++q){p=J.eu(s[q])
if(p.length!==0)n.l(0,p)}return n},
cC:function(a){this.a.setAttribute("class",a.cr(0," "))}}
P.l.prototype={
gdG:function(a){return new P.ew(a)},
gdF:function(a){return new P.eL(a,new W.an(a))},
W:function(a,b,c,d){var s,r,q,p,o,n=H.h([],t.lN)
C.a.l(n,W.my(null))
C.a.l(n,W.mG())
C.a.l(n,new W.fV())
c=new W.eg(new W.dD(n))
s='<svg version="1.1">'+H.b(b)+"</svg>"
n=document
r=n.body
r.toString
q=C.p.fV(r,s,c)
p=n.createDocumentFragment()
q.toString
n=new W.an(q)
o=n.gaC(n)
for(;n=o.firstChild,n!=null;)p.appendChild(n)
return p},
ck:function(a,b,c,d,e){throw H.a(P.A("Cannot invoke insertAdjacentHtml on SVG."))},
gdU:function(a){return new W.au(a,"click",!1,t.G)},
gdX:function(a){return new W.au(a,"mousedown",!1,t.G)},
gdY:function(a){return new W.au(a,"touchstart",!1,t.el)},
$il:1}
Z.hX.prototype={
gdW:function(a){var s,r=this
if(r.z==null)r.sdf(P.cK(new Z.i1(r),!0,t.I))
s=r.z
s.toString
return new P.am(s,H.j(s).i("am<1>"))},
gdV:function(a){var s,r=this
if(r.ch==null)r.sda(P.cK(new Z.i0(r),!0,t.I))
s=r.ch
s.toString
return new P.am(s,H.j(s).i("am<1>"))},
ap:function(a,b,c){var s,r,q,p=this,o=$.S
if(o.f){s=p.b
if(s!=null){r=o.c
o=o.e
q=t.W
q.a(r)
q.a(o)
o=s.e
o.classList.remove("nt-chain-starter")
o.classList.remove("nt-chain-fragment")
o=o.style
o.visibility=""
o=s.a.style
r=s.d
o.toString
C.h.bi(o,C.h.aT(o,"pointer-events"),r,"")
s.c=s.b=s.a=s.d=null}if(!c&&b!=null)Z.ps(p,b)
o=p.ch
if(o!=null)o.l(0,Z.lV(a,$.S,c))
if(a!=null)a.preventDefault()
if(t.X.b(a))p.fz($.S.b)
o=$.S
J.bT(o.b).a8(0,p.r)
o=document.body
o.classList.remove("dnd-drag-occurring")}p.fo()},
f1:function(a,b){return this.ap(a,b,!1)},
fz:function(a){var s=J.nZ(a),r=s.$ti,q=r.i("~(1)?").a(new Z.hZ())
t.Z.a(null)
P.ot(new Z.i_(W.C(s.a,s.b,q,!1,r.c)),t.a)},
fo:function(){C.a.t(this.cy,new Z.hY())
Z.mt()
$.S=null},
eL:function(){var s,r
window.getSelection().removeAllRanges()
try{s=document.activeElement
if(t.bD.b(s))J.lD(s,0,0)
else if(t.J.b(s))J.lD(s,0,0)}catch(r){H.O(r)}},
sdf:function(a){this.z=t.eS.a(a)},
sda:function(a){this.ch=t.eS.a(a)},
sbS:function(a){this.cx=t.u.a(a)}}
Z.i1.prototype={
$0:function(){this.a.sdf(null)
return null},
$S:1}
Z.i0.prototype={
$0:function(){this.a.sda(null)
return null},
$S:1}
Z.hZ.prototype={
$1:function(a){t.X.a(a)
a.stopPropagation()
a.preventDefault()},
$S:2}
Z.i_.prototype={
$0:function(){this.a.a0()},
$S:1}
Z.hY.prototype={
$1:function(a){return t.nh.a(a).aj(0)},
$S:38}
Z.c1.prototype={}
Z.jw.prototype={
cY:function(a){t.W.a(a)
return a},
sc0:function(a,b){this.e=t.W.a(b)}}
Z.ex.prototype={
en:function(a){Z.oc(new Z.hh(this,t.W.a(a)))},
cG:function(a){var s,r,q,p=this
t.W.a(a)
s=p.a.style
r=a.a
if(p.c==null)p.dD()
q=p.c
if(typeof r!=="number")return r.G()
if(typeof q!=="number")return H.ae(q)
q=H.b(r-q)+"px"
s.left=q
s=p.a.style
r=a.b
if(p.b==null)p.dD()
q=p.b
if(typeof r!=="number")return r.G()
if(typeof q!=="number")return H.ae(q)
q=H.b(r-q)+"px"
s.top=q},
dD:function(){var s,r=this.a
r.toString
s=C.A.eV(window,r,"")
r=P.h6(C.d.e4(s.marginLeft,"px",""))
this.c=r==null?0:r
r=P.h6(C.d.e4(s.marginTop,"px",""))
this.b=r==null?0:r}}
Z.hh.prototype={
$0:function(){var s,r=this.a.a
if(r!=null){r=r.style
s=this.b
s="translate3d("+H.b(s.a)+"px, "+H.b(s.b)+"px, 0)"
r.toString
C.h.bi(r,C.h.aT(r,"transform"),s,"")}},
$S:1}
Z.hb.prototype={
$1:function(a){H.kj(a)
if($.ha){$.lG.$0()
$.ha=!1}return null},
$S:37}
Z.ba.prototype={
bJ:function(a){this.cp()
C.a.t(this.c.cx,new Z.jx())},
h7:function(){var s=this.b,r=window,q=t.kB.a(new Z.jy(this))
t.Z.a(null)
C.a.l(s,W.C(r,"keydown",q,!1,t.gh))
C.a.l(s,W.C(window,"blur",t.m6.a(new Z.jz(this)),!1,t.iE))},
ci:function(a,b){var s,r=this
t.W.a(b)
s=r.c
s=new Z.jw(s.a,t.g.a(W.N(a.currentTarget)),b,s.b,!1,!1)
s.sc0(0,b)
$.S=s
r.co()
r.cn()
r.cm()
r.h7()},
cg:function(a,b,c){var s,r,q,p,o,n,m,l,k="pointer-events",j=t.W
j.a(b)
j.a(c)
s=$.S
s.sc0(0,s.cY(b))
s=$.S
if(!s.f){r=s.c
s=r.$ti.a(s.e)
q=r.a
p=s.a
if(typeof q!=="number")return q.G()
if(typeof p!=="number")return H.ae(p)
o=q-p
r=r.b
s=s.b
if(typeof r!=="number")return r.G()
if(typeof s!=="number")return H.ae(s)
n=r-s
if(Math.sqrt(o*o+n*n)>=4){s=this.c
r=$.S
r.f=!0
q=s.b
if(q!=null){p=r.b
j.a(r.e)
q.a=q.e
q.cG(new P.H(0,0,t.k5))
m=U.dg(q.a)
q.cG(U.dg(p).G(0,m))
p=q.a.style
p.toString
q.d=p.getPropertyValue(C.h.aT(p,k))
q=q.a.style
q.toString
C.h.bi(q,C.h.aT(q,k),"none","")}j=s.z
if(j!=null)j.l(0,Z.lV(a,$.S,!1))
j=$.S
J.bT(j.b).l(0,s.r)
j=document.body
j.classList.add("dnd-drag-occurring")
s.eL()}}else{l=t.g.a(this.eW(c))
s=this.c
r=s.b
if(r!=null){q=$.S
p=q.c
q=q.e
j.a(p)
r.en(j.a(q).G(0,p))
r=r.a.style
r.visibility="visible"}Z.pt(s,l)}},
cf:function(a,b,c,d){var s=t.W
s.a(c)
s.a(d)
s=$.S
s.sc0(0,s.cY(c))
this.c.f1(a,this.d6(d,b))},
aj:function(a){var s=this.b
C.a.t(s,new Z.jA())
C.a.sk(s,0)},
d7:function(a){var s,r
t.W.a(a)
s=document
r=s.elementFromPoint(J.d4(a.a),J.d4(a.b))
return r==null?s.body:r},
d6:function(a,b){var s,r,q=this
t.W.a(a)
if(b==null)b=q.d7(a)
s=q.c.b
if(s!=null){r=s.a
r=r!=null&&H.a3(C.c.D(r,t.e1.a(b)))}else r=!1
if(r){r=s.a.style
r.visibility="hidden"
b=q.d7(a)
s=s.a.style
s.visibility="visible"}return q.dj(a,b)},
eW:function(a){return this.d6(a,null)},
dj:function(a,b){var s
t.W.a(a)
if(t.g.b(b))if((b.shadowRoot||b.webkitShadowRoot)!=null)s=H.a3(b.hasAttribute("dnd-retarget"))
else s=!1
else s=!1
return s?this.dj(a,(b.shadowRoot||b.webkitShadowRoot).elementFromPoint(J.d4(a.a),J.d4(a.b))):b},
bV:function(a){var s=t.g.b(a)&&J.o3(a,this.c.f)
if(s)return!1
return!0}}
Z.jx.prototype={
$1:function(a){var s=t.g.a(a).style
s.toString
C.h.bi(s,C.h.aT(s,"touch-action"),"none","")
return"none"},
$S:81}
Z.jy.prototype={
$1:function(a){t.gh.a(a)
if(a.keyCode===27)this.a.c.ap(a,null,!0)},
$S:35}
Z.jz.prototype={
$1:function(a){this.a.c.ap(a,null,!0)},
$S:3}
Z.jA.prototype={
$1:function(a){return t.kO.a(a).a0()},
$S:33}
Z.fZ.prototype={
cp:function(){C.a.t(this.c.cx,new Z.kh(this))},
co:function(){var s=document,r=t.oI.a(new Z.kf(this))
t.Z.a(null)
C.a.l(this.b,W.C(s,"touchmove",r,!1,t.c))},
cn:function(){var s=document,r=t.oI.a(new Z.ke(this))
t.Z.a(null)
C.a.l(this.b,W.C(s,"touchend",r,!1,t.c))},
cm:function(){var s=document,r=t.oI.a(new Z.kd(this))
t.Z.a(null)
C.a.l(this.b,W.C(s,"touchcancel",r,!1,t.c))},
hd:function(a){t.W.a(a).G(0,$.S.c)
return!1}}
Z.kh.prototype={
$1:function(a){var s=this.a,r=J.o0(t.g.a(a)),q=r.$ti,p=q.i("~(1)?").a(new Z.kg(s))
t.Z.a(null)
C.a.l(s.a,W.C(r.a,r.b,p,!1,q.c))},
$S:14}
Z.kg.prototype={
$1:function(a){var s,r
t.c.a(a)
if($.S!=null)return
s=a.touches
if(s.length>1)return
r=this.a
if(!r.bV(W.N(s[0].target)))return
s=a.touches
if(0>=s.length)return H.w(s,0)
s=s[0]
r.ci(a,new P.H(C.b.F(s.pageX),C.b.F(s.pageY),t.H))},
$S:12}
Z.kf.prototype={
$1:function(a){var s,r,q=this
t.c.a(a)
if(a.touches.length>1){q.a.c.ap(a,null,!0)
return}if(!$.S.f){s=a.changedTouches
if(0>=s.length)return H.w(s,0)
s=s[0]
s=q.a.hd(new P.H(C.b.F(s.pageX),C.b.F(s.pageY),t.H))}else s=!1
if(s){q.a.c.ap(a,null,!0)
return}s=a.changedTouches
if(0>=s.length)return H.w(s,0)
s=s[0]
r=t.H
q.a.cg(a,new P.H(C.b.F(s.pageX),C.b.F(s.pageY),r),new P.H(C.b.F(s.clientX),C.b.F(s.clientY),r))
a.preventDefault()},
$S:12}
Z.ke.prototype={
$1:function(a){var s,r
t.c.a(a)
s=a.changedTouches
if(0>=s.length)return H.w(s,0)
s=s[0]
r=t.H
this.a.cf(a,null,new P.H(C.b.F(s.pageX),C.b.F(s.pageY),r),new P.H(C.b.F(s.clientX),C.b.F(s.clientY),r))},
$S:12}
Z.kd.prototype={
$1:function(a){this.a.c.ap(t.c.a(a),null,!0)},
$S:12}
Z.fN.prototype={
cp:function(){C.a.t(this.c.cx,new Z.jU(this))},
co:function(){var s=document,r=t.j1.a(new Z.jS(this))
t.Z.a(null)
C.a.l(this.b,W.C(s,"mousemove",r,!1,t.X))},
cn:function(){var s=document,r=t.j1.a(new Z.jR(this))
t.Z.a(null)
C.a.l(this.b,W.C(s,"mouseup",r,!1,t.X))},
cm:function(){}}
Z.jU.prototype={
$1:function(a){var s=this.a,r=J.o_(t.g.a(a)),q=r.$ti,p=q.i("~(1)?").a(new Z.jT(s))
t.Z.a(null)
C.a.l(s.a,W.C(r.a,r.b,p,!1,q.c))},
$S:14}
Z.jT.prototype={
$1:function(a){var s,r,q,p
t.X.a(a)
if($.S!=null)return
if(a.button!==0)return
s=this.a
if(!s.bV(W.N(a.target)))return
r=t.g.a(W.N(a.target))
if(!(t.lb.b(r)||t.J.b(r)||t.bD.b(r)||t.lr.b(r)||t.oQ.b(r)))a.preventDefault()
q=a.pageX
q.toString
p=a.pageY
p.toString
s.ci(a,new P.H(q,p,t.H))},
$S:2}
Z.jS.prototype={
$1:function(a){var s,r,q
t.X.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
q=t.H
this.a.cg(a,new P.H(s,r,q),new P.H(a.clientX,a.clientY,q))},
$S:2}
Z.jR.prototype={
$1:function(a){var s,r,q,p
t.X.a(a)
s=W.N(a.target)
r=a.pageX
r.toString
q=a.pageY
q.toString
p=t.H
this.a.cf(a,s,new P.H(r,q,p),new P.H(a.clientX,a.clientY,p))},
$S:2}
Z.fQ.prototype={
cp:function(){C.a.t(this.c.cx,new Z.k_(this))},
co:function(){var s=document,r=t.t.a(new Z.jY(this))
t.Z.a(null)
C.a.l(this.b,W.C(s,"pointermove",r,!1,t.B))},
cn:function(){var s=document,r=t.t.a(new Z.jX(this))
t.Z.a(null)
C.a.l(this.b,W.C(s,"pointerup",r,!1,t.B))},
cm:function(){var s=document,r=t.t.a(new Z.jW(this))
t.Z.a(null)
C.a.l(this.b,W.C(s,"pointercancel",r,!1,t.B))}}
Z.k_.prototype={
$1:function(a){var s,r,q,p
t.g.a(a)
s=this.a
a.toString
r=new W.ia(a).h(0,"pointerdown")
q=r.$ti
p=q.i("~(1)?").a(new Z.jZ(s))
t.Z.a(null)
C.a.l(s.a,W.C(r.a,r.b,p,!1,q.c))},
$S:14}
Z.jZ.prototype={
$1:function(a){var s,r,q,p
t.b2.a(a)
if($.S!=null)return
if(a.button!==0)return
s=this.a
if(!s.bV(W.N(a.target)))return
r=t.g.a(W.N(a.target))
if(!(t.lb.b(r)||t.J.b(r)||t.bD.b(r)||t.lr.b(r)||t.oQ.b(r)))a.preventDefault()
q=a.pageX
q.toString
p=a.pageY
p.toString
s.ci(a,new P.H(q,p,t.H))},
$S:3}
Z.jY.prototype={
$1:function(a){var s,r,q
t.b2.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
q=t.H
this.a.cg(a,new P.H(s,r,q),new P.H(a.clientX,a.clientY,q))},
$S:3}
Z.jX.prototype={
$1:function(a){var s,r,q
t.b2.a(a)
s=a.pageX
s.toString
r=a.pageY
r.toString
q=t.H
this.a.cf(a,null,new P.H(s,r,q),new P.H(a.clientX,a.clientY,q))},
$S:3}
Z.jW.prototype={
$1:function(a){this.a.c.ap(a,null,!0)},
$S:3}
Z.eJ.prototype={
gau:function(a){var s,r=this
if(r.d==null)r.sdc(P.cK(new Z.i4(r),!0,t.v))
s=r.d
s.toString
return new P.am(s,H.j(s).i("am<1>"))},
ghj:function(a){var s,r=this
if(r.e==null)r.sde(P.cK(new Z.i6(r),!0,t.v))
s=r.e
s.toString
return new P.am(s,H.j(s).i("am<1>"))},
gav:function(a){var s,r=this
if(r.f==null)r.sdd(P.cK(new Z.i5(r),!0,t.v))
s=r.f
s.toString
return new P.am(s,H.j(s).i("am<1>"))},
gaw:function(a){var s,r=this
if(r.r==null)r.sdg(P.cK(new Z.i7(r),!0,t.v))
s=r.r
s.toString
return new P.am(s,H.j(s).i("am<1>"))},
ff:function(a){var s,r,q,p,o=this
t.g.a(a)
s=o.y
r=$.nN()
q=r.a
r=H.j(r)
p=r.i("~(1)?").a(o.gf2())
t.Z.a(null)
C.a.l(s,W.C(a,q,p,!1,r.c))
r=$.nP()
p=H.j(r)
C.a.l(s,W.C(a,r.a,p.i("~(1)?").a(o.gf6()),!1,p.c))
p=$.nO()
r=H.j(p)
C.a.l(s,W.C(a,p.a,r.i("~(1)?").a(o.gf4()),!1,r.c))
r=$.nM()
p=H.j(r)
C.a.l(s,W.C(a,r.a,p.i("~(1)?").a(o.gf8()),!1,p.c))},
f3:function(a){var s,r
t.X.a(a)
s=a.relatedTarget
if(W.N(s)!=null&&H.a3(J.lz(t.g.a(W.N(a.currentTarget)),t.e1.a(W.N(s)))))return
s=this.a
if(s!=null){r=$.S
r=s.aq(r.b,r.a,t.g.a(W.N(a.currentTarget)))
s=r}else s=!0
if(s){s=this.d
if(s!=null)s.l(0,Z.i2(t.g.a(W.N(a.currentTarget)),$.S))
J.bT(t.g.a(W.N(a.currentTarget))).l(0,"dnd-over")}else J.bT(t.g.a(W.N(a.currentTarget))).l(0,"dnd-invalid")},
f7:function(a){var s,r
t.X.a(a)
s=this.a
if(s!=null){r=$.S
r=s.aq(r.b,r.a,t.g.a(W.N(a.currentTarget)))
s=r}else s=!0
if(s){s=this.e
if(s!=null)s.l(0,Z.i2(t.g.a(W.N(a.currentTarget)),$.S))}},
f5:function(a){var s,r
t.X.a(a)
s=a.relatedTarget
if(W.N(s)!=null&&H.a3(J.lz(t.g.a(W.N(a.currentTarget)),t.e1.a(W.N(s)))))return
s=this.a
if(s!=null){r=$.S
r=s.aq(r.b,r.a,t.g.a(W.N(a.currentTarget)))
s=r}else s=!0
if(s){s=this.f
if(s!=null)s.l(0,Z.i2(t.g.a(W.N(a.currentTarget)),$.S))
J.bT(t.g.a(W.N(a.currentTarget))).a8(0,"dnd-over")}else J.bT(t.g.a(W.N(a.currentTarget))).a8(0,"dnd-invalid")},
f9:function(a){var s,r
t.X.a(a)
s=this.a
if(s!=null){r=$.S
r=s.aq(r.b,r.a,t.g.a(W.N(a.currentTarget)))
s=r}else s=!0
if(s){s=this.r
if(s!=null)s.l(0,Z.i2(t.g.a(W.N(a.currentTarget)),$.S))}},
fY:function(){var s=this.y
C.a.t(s,new Z.i3())
C.a.sk(s,0)},
sdc:function(a){this.d=t.m.a(a)},
sde:function(a){this.e=t.m.a(a)},
sdd:function(a){this.f=t.m.a(a)},
sdg:function(a){this.r=t.m.a(a)},
sbS:function(a){this.x=t.u.a(a)}}
Z.i4.prototype={
$0:function(){this.a.sdc(null)
return null},
$S:1}
Z.i6.prototype={
$0:function(){this.a.sde(null)
return null},
$S:1}
Z.i5.prototype={
$0:function(){this.a.sdd(null)
return null},
$S:1}
Z.i7.prototype={
$0:function(){this.a.sdg(null)
return null},
$S:1}
Z.i3.prototype={
$1:function(a){return t.kO.a(a).a0()},
$S:33}
Z.aW.prototype={}
Z.bU.prototype={}
U.aM.prototype={
gU:function(){var s=this.c
return H.b(s.k2.c)+"-"+H.b(s.b)+"-"+H.b(this.b)},
bE:function(){return H.b(this.a_())+H.b(this.e)},
aP:function(a,b){var s,r=this,q=r.b
if(q!=null){s=r.c
if(q>=s.cx)s.cx=q+1}else r.b=r.c.cx++},
aQ:function(a,b,c){this.b=b.b
this.d=b.d
this.e=b.e},
dM:function(){var s,r,q,p=this,o=document.createElement("div")
o.innerText=p.bE()
o.classList.add("nt-attribute-value")
s=p.c
r=s.al()+"-attribute"
o.classList.add(r)
r=s.db
if(r!=null){q=o.style
q.color=r}s=s.dx
if(s!=null){r=o.style
r.backgroundColor=s}s=t.G
r=s.i("~(1)?").a(new U.hf(p,new U.hg(p,o)))
t.Z.a(null)
W.C(o,"click",r,!1,s.c)
return o}}
U.hg.prototype={
$0:function(){this.b.innerText=this.a.bE()},
$S:1}
U.hf.prototype={
$1:function(a){var s,r,q,p,o,n,m,l
t.X.a(a)
s=t.D.a(W.N(a.target))
r=s.offsetParent
q=C.b.F(r.offsetLeft)
p=C.b.F(s.offsetLeft)
o=J.R(a)
n=o.gb0(a).a
if(typeof n!=="number")return H.ae(n)
m=C.b.F(r.offsetTop)
l=C.b.F(s.offsetTop)
o=o.gb0(a).b
if(typeof o!=="number")return H.ae(o)
this.a.aO(C.b.cd(q+p+n),C.b.cd(m+l+o),this.b)},
$S:2}
U.c4.prototype={
gX:function(a){return this.f},
a_:function(){return U.db(this.r.c)},
aB:function(a){var s,r,q,p=this
if(a==null){s=new U.bz(p.c.k2)
s.c=new U.ah(s,p.f,H.h([],t.C))
p.r=s}if(P.h6(a)==null&&!C.a.D(H.h(["true","false"],t.i),a))throw H.a(P.d5(a,"valueString","Expression values can only be set to numbers or booleans."))
s=new U.bz(p.c.k2)
r=t.C
s.c=new U.ah(s,p.f,H.h([],r))
p.r=s
q=new U.ah(s,p.f,H.h([],r))
q.b=a
p.r.c=q},
az:function(){return this.x},
b2:function(a){this.x=a},
aI:function(a,b,c){var s,r,q=this,p=new U.c4(new U.ai(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t.i)),null,b)
p.aQ(b,q,c)
p.x=q.x
p.f=q.f
s=q.r
r=new U.bz(null)
r.a=s.a
s=s.c
if(s!=null)r.c=U.m0(r,s)
p.r=r
if(!c)p.aB(p.x)
return p},
aN:function(){return!1},
aO:function(a,b,c){var s,r,q,p,o,n,m,l=this,k=".nt-param-confirm",j="querySelectorAll",i="click",h=l.c.k2,g=h.r
g.classList.add("show")
s=h.x
h=s.style
r=""+b+"px"
h.top=r
s.classList.remove("small")
C.c.K(s,"")
C.c.a4(s,'      <div class="nt-param-table">\n        <div class="nt-param-row">\n          <div class="nt-param-label">'+H.b(l.d)+':</div>\n        </div>\n        <div class="nt-param-row">\n          <div id="nt-expression-'+l.gU()+'" class="nt-expression-root"></div>\n        </div>\n      </div>\n      <button class="nt-param-confirm" type="button">OK</button>\n      <button class="nt-param-cancel" type="button">Cancel</button>\n    ')
h=t.G
r=h.i("~(1)?").a(new U.ij())
t.Z.a(null)
q=W.C(s,i,r,!1,h.c)
h=t.g
r=document
p=t.h
H.aS(h,p,"T",j)
o=t.Q
n=t.x
m=t.iy
new W.aR(n.a(new W.ao(r.querySelectorAll(k),o)),!1,i,m).v(new U.ik(l,q,g,c))
H.aS(h,p,"T",j)
new W.aR(n.a(new W.ao(r.querySelectorAll(k),o)),!1,"mousedown",m).v(new U.il())
H.aS(h,p,"T",j)
new W.aR(n.a(new W.ao(r.querySelectorAll(k),o)),!1,"mouseup",m).v(new U.im())
H.aS(h,p,"T",j)
new W.aR(n.a(new W.ao(r.querySelectorAll(".nt-param-cancel"),o)),!1,i,m).v(new U.io(q,g))
m=l.r
m.b=r.querySelector("#nt-expression-"+l.gU())
m.cu()}}
U.ij.prototype={
$1:function(a){var s
t.X.a(a)
s=document
H.aS(t.g,t.h,"T","querySelectorAll")
s=new W.ao(s.querySelectorAll(".nt-pulldown-menu"),t.Q)
s.t(s,new U.ii())},
$S:2}
U.ii.prototype={
$1:function(a){return J.es(t.g.a(a))},
$S:15}
U.ik.prototype={
$1:function(a){var s,r,q,p=this
t.X.a(a)
s=document
H.aS(t.g,t.h,"T","querySelectorAll")
if(s.querySelectorAll(".nt-expression.empty").length>0)return!1
p.b.a0()
p.c.classList.remove("show")
p.d.$0()
s=p.a
r=U.da(s)
q=s.c
q.k2.P(new U.bv(q.b,q.c,s.b,s.f,U.db(s.r.c),r))
return!1},
$S:10}
U.il.prototype={
$1:function(a){var s
t.X.a(a)
s=document
H.aS(t.g,t.h,"T","querySelectorAll")
s=new W.ao(s.querySelectorAll(".nt-expression.empty"),t.Q)
s.t(s,new U.ih())},
$S:2}
U.ih.prototype={
$1:function(a){return J.bT(t.g.a(a)).l(0,"warn")},
$S:21}
U.im.prototype={
$1:function(a){var s
t.X.a(a)
s=document
H.aS(t.g,t.h,"T","querySelectorAll")
s=new W.ao(s.querySelectorAll(".nt-expression.empty"),t.Q)
s.t(s,new U.ig())},
$S:2}
U.ig.prototype={
$1:function(a){return J.bT(t.g.a(a)).a8(0,"warn")},
$S:21}
U.io.prototype={
$1:function(a){t.X.a(a)
this.a.a0()
this.b.classList.remove("show")},
$S:2}
U.ds.prototype={
gX:function(a){return"int"},
aI:function(a,b,c){var s=new U.ds(new U.ai(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t.i)),null,b)
s.aQ(b,this,c)
s.cN(b,this,c)
return s}}
U.c9.prototype={
a_:function(){var s,r=this.f
if(r==null)return""
s=C.b.hB(r,1)
return C.d.h4(s,".0")?C.d.a3(s,0,s.length-2):s},
aB:function(a){return this.f=U.bG(a,0)},
az:function(){var s=this.r
return s==null?"":C.b.n(s)},
b2:function(a){return this.r=U.bG(a,null)},
cN:function(a,b,c){var s,r,q=this
q.x=b.x
q.y=b.y
s=q.r=b.r
if(!c){r=b.f
q.f=r==null?s:r}},
aN:function(){return!1},
aO:function(a,b,c){var s,r,q,p,o,n,m,l,k=this,j="querySelectorAll",i=k.c.k2,h=i.r
h.classList.add("show")
s=i.x
i=s.style
r=""+b+"px"
i.top=r
s.classList.remove("small")
C.c.K(s,"")
C.c.a4(s,u.c+('      <div class="nt-param-name">'+H.b(k.d)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+k.gU()+'" type="number" step="'+H.b(k.y)+'" value="'+H.b(k.f)+'">\n        <span class="nt-param-unit">'+H.b(k.e)+"</span>\n      </div>\n    ")+u.f)
i="#nt-param-label-"+k.gU()
r=document
q=t.hw.a(r.querySelector(i))
p=t.J.a(r.querySelector("#nt-param-"+k.gU()))
i=t.g
o=t.h
H.aS(i,o,"T",j)
n=t.Q
m=t.x
l=t.iy
new W.aR(m.a(new W.ao(r.querySelectorAll(".nt-param-confirm"),n)),!1,"click",l).v(new U.iT(k,p,h,c))
H.aS(i,o,"T",j)
new W.aR(m.a(new W.ao(r.querySelectorAll(".nt-param-cancel"),n)),!1,"click",l).v(new U.iU(h))
if(p!=null){p.focus()
if(q!=null){i=t.L
r=i.i("~(1)?")
o=r.a(new U.iV(q,p))
t.Z.a(null)
i=i.c
W.C(p,"change",o,!1,i)
W.C(p,"input",r.a(new U.iW(q,p)),!1,i)}}}}
U.iT.prototype={
$1:function(a){var s,r,q,p=this
t.X.a(a)
s=p.b
if(s!=null)p.a.f=U.bG(s.value,0)
p.c.classList.remove("show")
p.d.$0()
s=p.a
r=U.da(s)
q=s.c
q.k2.P(new U.bv(q.b,q.c,s.b,s.gX(s),s.f,r))},
$S:2}
U.iU.prototype={
$1:function(a){var s,r
t.X.a(a)
s=this.a.classList
r=s.contains("show")
s.remove("show")
return r},
$S:10}
U.iV.prototype={
$1:function(a){J.et(this.a,this.b.value)},
$S:3}
U.iW.prototype={
$1:function(a){J.et(this.a,this.b.value)},
$S:3}
U.cF.prototype={
gX:function(a){return"range"},
aI:function(a,b,c){var s=this,r=new U.cF(new U.ai(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t.i)),null,b)
r.aQ(b,s,c)
r.cN(b,s,c)
r.db=s.db
r.dx=s.dx
return r},
aO:function(a,b,c){var s,r,q,p,o,n,m=this,l=m.c.k2,k=l.r
k.classList.add("show")
s=l.x
l=s.style
r=""+b+"px"
l.top=r
s.classList.remove("small")
C.c.K(s,"")
l=document
q=l.createElement("div")
q.className="nt-param-table"
s.appendChild(q)
C.c.a4(q,'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.b(m.d)+':\n            <label id="nt-param-label-'+m.gU()+'" for="nt-param-'+m.gU()+'">'+H.b(m.f)+'</label>\n            <span class="nt-param-unit">'+H.b(m.e)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+m.gU()+'" type="range" value="'+H.b(m.f)+'" min="'+H.b(m.db)+'" max="'+H.b(m.dx)+'" step="'+H.b(m.y)+'">\n          </div>\n        </div>\n      ')
p=t.hw.a(l.querySelector("#nt-param-label-"+m.gU()))
o=t.J.a(l.querySelector("#nt-param-"+m.gU()))
if(o!=null&&p!=null){l=t.L
r=l.i("~(1)?")
n=r.a(new U.j0(m,o,k,c))
t.Z.a(null)
l=l.c
W.C(o,"change",n,!1,l)
W.C(o,"input",r.a(new U.j1(p,o)),!1,l)}}}
U.j0.prototype={
$1:function(a){var s,r,q=this,p=q.a
p.f=U.bG(q.b.value,0)
q.c.classList.remove("show")
q.d.$0()
s=U.da(p)
r=p.c
r.k2.P(new U.bv(r.b,r.c,p.b,"range",p.f,s))
a.stopPropagation()},
$S:3}
U.j1.prototype={
$1:function(a){J.et(this.a,this.b.value)},
$S:3}
U.bl.prototype={
gfZ:function(){var s=this.b
return s==null||s===""?this.a:s}}
U.cI.prototype={
gX:function(a){return"select"},
a_:function(){var s=this.f
return s==null?"":s},
aB:function(a){this.f=a},
az:function(){return this.r},
b2:function(a){this.r=a},
bE:function(){return H.b(this.gek())+H.b(this.e)+" \u25be"},
gek:function(){var s=this.y,r=H.D(s),q=new H.al(s,r.i("p(1)").a(new U.j3(this)),r.i("al<1>"))
if(q.gk(q)===1)return q.B(0,0).gfZ()
else return this.f},
eC:function(a,b,c){var s,r=this
r.r=b.r
r.x=b.x
C.a.t(b.y,new U.j2(r))
if(!c){s=b.f
r.f=s==null?r.r:s}},
aI:function(a,b,c){return U.oX(b,this,c)},
aN:function(){switch(this.x){case"always-quote":return!0
case"never-quote":return!1
case"smart-quote":default:return P.h6(this.f)==null&&!C.a.D(H.h(["true","false"],t.i),this.f)}},
aO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c.k2,e=f.r
e.classList.add("show")
s=f.x
f=s.style
r=""+b+"px"
f.top=r
s.classList.add("small")
C.c.K(s,"")
f=document
q=f.createElement("div")
q.className="nt-param-table"
s.appendChild(q)
for(r=g.y,p=r.length,o=t.G,n=o.i("~(1)?"),m=t.Z,o=o.c,l=0;l<r.length;r.length===p||(0,H.y)(r),++l){k=r[l]
j=f.createElement("div")
j.className="nt-param-row"
i=f.createElement("div")
i.className="nt-select-option"
h=k.b
C.c.K(i,h==null||h===""?k.a:h)
if(k.a==g.f)i.classList.add("selected")
h=n.a(new U.j4(g,k,e,c))
m.a(null)
W.C(i,"click",h,!1,o)
j.appendChild(i)
q.appendChild(j)}}}
U.j3.prototype={
$1:function(a){var s
t.nT.a(a)
if(a.a==this.a.f){s=a.b
s=s!=null&&s!==""}else s=!1
return s},
$S:42}
U.j2.prototype={
$1:function(a){return C.a.l(this.a.y,t.nT.a(a))},
$S:43}
U.j4.prototype={
$1:function(a){var s,r,q,p=this
t.X.a(a)
s=p.a
s.f=p.b.a
p.c.classList.remove("show")
p.d.$0()
r=U.da(s)
q=s.c
q.k2.P(new U.bv(q.b,q.c,s.b,"select",s.f,r))
a.stopPropagation()},
$S:2}
U.dK.prototype={
gX:function(a){return"text"},
a_:function(){var s=this.f
return s==null?"":s},
aB:function(a){this.f=a},
az:function(){return this.r},
b2:function(a){this.r=a},
aI:function(a,b,c){var s,r,q=new U.dK(new U.ai(H.h(["id","type","name","unit","value","default","quoteValues","values","step","random","min","max","expressionValue"],t.i)),null,b)
q.aQ(b,this,c)
s=q.r=this.r
if(!c){r=this.f
q.f=r==null||r===""?s:r}return q},
aN:function(){return!0},
aO:function(a,b,c){var s,r,q,p,o,n,m,l,k,j=this,i="querySelectorAll",h=j.c.k2,g=h.r
g.classList.add("show")
s=h.x
h=s.style
r=""+b+"px"
h.top=r
s.classList.remove("small")
C.c.K(s,"")
h=j.f
if(h==null)h=""
q=new P.cy().dI(h)
C.c.a4(s,u.c+('      <input class="nt-param-input" id="nt-param-'+j.gU()+'" type="text" value="'+q+'">\n      <span class="nt-param-unit">'+H.b(j.e)+"</span>\n    ")+u.f)
h="#nt-param-label-"+j.gU()
r=document
p=t.hw.a(r.querySelector(h))
o=t.J.a(r.querySelector("#nt-param-"+j.gU()))
h=t.g
n=t.h
H.aS(h,n,"T",i)
m=t.Q
l=t.x
k=t.iy
new W.aR(l.a(new W.ao(r.querySelectorAll(".nt-param-confirm"),m)),!1,"click",k).v(new U.j7(j,o,g,c))
H.aS(h,n,"T",i)
new W.aR(l.a(new W.ao(r.querySelectorAll(".nt-param-cancel"),m)),!1,"click",k).v(new U.j8(g))
if(o!=null){o.focus()
if(p!=null){h=t.L
r=h.i("~(1)?")
n=r.a(new U.j9(p,o))
t.Z.a(null)
h=h.c
W.C(o,"change",n,!1,h)
W.C(o,"input",r.a(new U.ja(p,o)),!1,h)}}}}
U.j7.prototype={
$1:function(a){var s,r,q,p=this
t.X.a(a)
s=p.b
if(s!=null)p.a.f=s.value
p.c.classList.remove("show")
p.d.$0()
s=p.a
r=U.da(s)
q=s.c
q.k2.P(new U.bv(q.b,q.c,s.b,"text",s.f,r))},
$S:2}
U.j8.prototype={
$1:function(a){var s,r
t.X.a(a)
s=this.a.classList
r=s.contains("show")
s.remove("show")
return r},
$S:10}
U.j9.prototype={
$1:function(a){J.et(this.a,this.b.value)},
$S:3}
U.ja.prototype={
$1:function(a){J.et(this.a,this.b.value)},
$S:3}
U.hx.prototype={
$1:function(a){return this.a.rx=a},
$S:16}
U.iR.prototype={
$1:function(a){var s,r,q,p=this
H.r(a)
s=document.createElement("div")
W.l6(s,t.bq.a(H.h(["nt-notch-"+H.b(a),p.a],t.i)))
if(!p.b||a!=="middle"){r=p.c.db
if(r!=null){q=s.style
q.backgroundColor=r}}p.d.appendChild(s)},
$S:17}
U.iS.prototype={
$1:function(a){return this.a.rx=a},
$S:16}
U.iQ.prototype={
$1:function(a){var s,r,q,p=this
H.r(a)
s=document.createElement("div")
W.l6(s,t.bq.a(H.h(["nt-notch-"+H.b(a),p.a],t.i)))
if(!p.b||a!=="middle"){r=p.c.d.db
if(r!=null){q=s.style
q.backgroundColor=r}}p.d.appendChild(s)},
$S:17}
U.hi.prototype={
a9:function(a){var s,r,q,p
try{r=this.a
if(r.length===0)return 0
q=H.D(r)
q=U.l1(new H.L(r,q.i("c*(1)").a(new U.hk(a)),q.i("L<1,c*>")))
return q}catch(p){s=H.O(p)
P.eo("here is the fail "+H.b(J.z(s)))
throw p}},
Y:function(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q].Y(a)
if(p!=null)return p}return null},
e2:function(a){var s=this.a,r=H.D(s).c,q=H.bm(s,a,null,r)
this.sdB(H.bm(s,0,a,r).aM(0))
this.a7()
return q},
sdB:function(a){this.a=t.jr.a(a)}}
U.hk.prototype={
$1:function(a){return t.kn.a(a).a9(this.a)},
$S:46}
U.d9.prototype={
c4:function(a,b){var s,r,q,p,o,n,m=this;(a&&C.k).cl(a,"."+b+"-color { background-color: "+H.b(m.a)+"; }",0)
C.k.cl(a,"."+b+"-attribute { color: "+H.b(m.a)+"; background-color: "+H.b(m.b)+"; }",0)
s="."+b+" { "
r="color: "+H.b(m.b)+"; border-color: "+H.b(m.c)+"; "
q=m.d
p=q===""?"":"font-weight: "+H.b(q)+";"
q=m.e
o=q===""?"":"font-size: "+H.b(q)+";"
q=m.f
n="font-family: "+H.b(q===""?"Poppins, sans-serif":q)+";"
C.k.cl(a,s+C.d.ax(r+C.d.ax(p+" "+o+" "+n))+" }",0)}}
U.ag.prototype={
gdE:function(){var s=this.go
return s==="child"||s==="anywhere"},
gar:function(){var s=this.go
return s==="starter"||s==="anywhere"},
aH:function(a,b){var s,r,q,p,o,n=this,m=U.lJ(n.k2,n.b,n.d,b)
m.d=n.d
m.e=n.e
m.f=n.f
m.r=n.r
m.x=n.x
m.y=n.y
m.db=n.db
m.dx=n.dx
m.dy=n.dy
m.fr=n.fr
m.fx=n.fx
m.fy=n.fy
m.go=n.go
m.id=n.id.c6(0)
C.a.H(m.k1,n.k1)
C.a.t(n.cy,new U.hp(m))
for(s=n.z,s=s.gay(s),r=H.j(s),r=new H.a7(J.B(s.a),s.b,r.i("@<1>").q(r.Q[1]).i("a7<1,2>")),s=m.z;r.m();){q=r.a
p=q.aI(0,m,b)
s.j(0,p.b,p)}for(s=n.Q,s=s.gay(s),r=H.j(s),r=new H.a7(J.B(s.a),s.b,r.i("@<1>").q(r.Q[1]).i("a7<1,2>")),s=m.Q;r.m();){q=r.a
o=q.aI(0,m,b)
s.j(0,o.b,o)}return m},
a9:function(a){var s,r=this.b==a?1:0,q=this.cy
if(q.length!==0){s=H.D(q)
s=U.l1(new H.L(q,s.i("c*(1)").a(new U.hs(a)),s.i("L<1,c*>")))
if(typeof s!=="number")return H.ae(s)
r+=s}return r},
Y:function(a){var s,r,q,p
if(this.c==a)return this
for(s=this.cy,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q].Y(a)
if(p!=null)return p}return null},
ej:function(a,b){var s=this.z
if(s.L(b))return s.h(0,b)
s=this.Q
if(s.L(b))return s.h(0,b)
throw H.a(P.aq("Attribute with given ID not found on block: "+H.b(b)))},
al:function(){var s=this
if(s.gar())return H.b(s.k2.c)+"-block-starter"
if(s.cy.length!==0)return H.b(s.k2.c)+"-block-container"
return H.b(s.k2.c)+"-block-command"},
aJ:function(a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this
a.k3=a0
a.r1=a1
a.k4=new U.ey(a)
s=document
r=s.createElement("div")
a.ry=r
r.classList.add("nt-block")
q=a.al()
a.ry.classList.add(q)
if(a.cy.length!==0)a.ry.classList.add("nt-block-with-clauses")
U.ho(a,a.ry)
p=s.createElement("div")
r=q+"-color"
p.classList.add(r)
r=a.db
if(r!=null){o=p.style
o.backgroundColor=r}p.classList.add("nt-block-header")
a.ry.appendChild(p)
a.x1=s.createElement("div")
a.ec()
a.x1.classList.add("nt-block-action")
p.appendChild(a.x1)
n=s.createElement("div")
n.classList.add("nt-block-params")
p.appendChild(n)
for(r=a.z,r=r.gay(r),o=H.j(r),o=new H.a7(J.B(r.a),r.b,o.i("@<1>").q(o.Q[1]).i("a7<1,2>"));o.m();){m=o.a
n.appendChild(m.dM())}l=s.createElement("div")
l.classList.add("nt-block-properties")
p.appendChild(l)
r=a.Q
if(r.a>0){o=a.ch!=="hidden"
k=new U.fl(o,new U.hq(a,l))
j=k.a=s.createElement("div")
j.classList.add("nt-toggle")
j.innerText=o?"\u25b2":"\u25bc"
i=t.G
h=i.i("~(1)?").a(k.gfP(k))
t.Z.a(null)
W.C(j,"click",h,!1,i.c)
a.x2=k
if(a.ch==="hidden")l.classList.add("nt-block-properties-hidden")
a.x1.appendChild(a.x2.a)}for(r=r.gay(r),o=H.j(r),o=new H.a7(J.B(r.a),r.b,o.i("@<1>").q(o.Q[1]).i("a7<1,2>"));o.m();){m=o.a
m.toString
g=s.createElement("div")
g.classList.add("nt-property")
f=s.createElement("div")
f.classList.add("nt-property-name")
f.innerText="\u2022 "+H.b(m.d)
g.appendChild(f)
g.appendChild(m.dM())
r=q+"-color"
g.classList.add(r)
r=a.db
if(r!=null){k=g.style
k.backgroundColor=r}l.appendChild(g)}r=a.cy
o=r.length
if(o!==0){if(0>=o)return H.w(r,0)
e=r[0].dL(a0,a,p)
a.ry.appendChild(e)
for(r=a.cy,r=H.bm(r,1,null,H.D(r).c),r=new H.Q(r,r.gk(r),r.$ti.i("Q<ac.E>"));r.m();){m=r.d
d=m.dL(a0,a,null)
a.ry.appendChild(d)}c=s.createElement("div")
c.classList.add("nt-clause-footer")
s=q+"-color"
c.classList.add(s)
s=a.db
if(s!=null){r=c.style
r.backgroundColor=s}a.ry.appendChild(c)}s=a.fy
if(s==null?!0:!s){b=U.kN()
a.ry.appendChild(b)}U.kQ(a,a.ry,new U.hr(a))
return a.ry},
ec:function(){var s,r,q,p,o=this,n=new P.aQ(""),m=o.y
if(m!=null&&C.d.eb(m).length!==0){m=H.b(o.y)+"\n"
n.a=m
n.a=m+"\n"}m=o.r1
s=m.b==="workspace-chain"&&m.e===0
r=o.k2
if(s){q=C.a.h(r.ch,m.a)
m=r.y
m.ce(n,0,q.a)
if(n.a.length===0)m.aZ(n,0,o)}else r.y.aZ(n,0,o)
m=n.a
p=new P.cy().dI(C.d.ax(m.charCodeAt(0)==0?m:m))
m=o.x1;(m&&C.c).a4(m,'<span title="'+p+'">'+H.b(o.d)+"</span>")},
O:function(){var s,r,q,p,o,n=this
n.ry.classList.remove("nt-drag-over")
n.ry.classList.remove("nt-block-clause-drag-over")
for(s=n.cy,r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.y)(s),++p){o=s[p].O()
q=q||o}if((n.r2||n.rx)&&!q){n.ry.classList.add("nt-drag-over")
q=!0}return q},
af:function(){var s,r,q,p=this
p.ry.classList.remove("nt-drag-over")
p.ry.classList.remove("nt-block-clause-drag-over")
p.rx=p.r2=!1
for(s=p.cy,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].af()},
bH:function(a){t.I.a(a)
this.k2.k3.cJ(this,this.r1,a,!0)},
cc:function(a){t.I.a(a)
this.k2.k3.dO()},
a5:function(a){var s,r,q,p,o,n,m=this
t.v.a(a)
$.M.c=!0
s=m.k2
r=s.k3
q=r.Q
p=t.P
r.saa(p.a(null))
r=m.r1
switch(r.b){case"workspace-chain":r=C.a.h(s.ch,r.a)
o=m.r1.e
if(typeof o!=="number")return o.C()
r.toString
p.a(q)
C.a.at(r.a,o+1,q)
r.a7()
break
case"block-clause":r=C.a.h(C.a.h(s.ch,r.a).Y(m.r1.c).cy,m.r1.d)
o=m.r1.e
if(typeof o!=="number")return o.C()
p.a(q)
C.a.at(r.a,o+1,q)
r.a7()
break}n=J.aU(q,0)
r=new U.b3()
r.b=n.b
r.c=n.c
s.P(r)},
ah:function(){var s,r,q
if(U.lK(this))this.ry.classList.add("nt-allowed-drop")
for(s=this.cy,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].ah()},
ag:function(){var s,r,q
this.ry.classList.remove("nt-allowed-drop")
for(s=this.cy,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].ag()},
bv:function(){var s,r,q
for(s=this.cy,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].hv()},
bu:function(){var s,r,q,p,o,n=this,m=n.x1
m.toString
C.c.K(m,"")
n.ec()
m=n.x2
if(m!=null)n.x1.appendChild(m.a)
for(m=n.cy,s=m.length,r=0;r<m.length;m.length===s||(0,H.y)(m),++r)for(q=m[r].a,p=q.length,o=0;o<q.length;q.length===p||(0,H.y)(q),++o)q[o].bu()},
sfO:function(a){this.cy=t.k8.a(a)}}
U.hp.prototype={
$1:function(a){var s,r,q
t.oq.a(a)
s=this.a
r=s.cy
q=U.oh(s,a.e,a.f,a.r,a.x)
s=a.y
if(s instanceof U.bw)q.y=s.c6(0)
else if(s instanceof U.bi){s=new U.bi()
s.a=q
q.y=s}else H.E(P.aq("Unknown AllowedTags type for clause cloning"))
return C.a.l(r,q)},
$S:49}
U.hs.prototype={
$1:function(a){return t.oq.a(a).a9(this.a)},
$S:50}
U.hq.prototype={
$1:function(a){var s,r=this.a
r.ch=a?"shown":"hidden"
this.b.classList.toggle("nt-block-properties-hidden")
s=new U.b3()
s.b=r.b
s.c=r.c
r.k2.P(s)},
$S:51}
U.hr.prototype={
$1:function(a){return this.a.r2=a},
$S:16}
U.ht.prototype={
$1:function(a){t.v.a(a)
return this.a.$1(!0)},
$S:4}
U.hu.prototype={
$1:function(a){t.v.a(a)
return this.a.$1(!1)},
$S:4}
U.aN.prototype={
aJ:function(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this
h.r=b
s=document
r=s.createElement("div")
h.x=r
r.classList.add("nt-fragment")
q=Z.cw(h.x,new U.eA(h))
q.gaw(q).v(h.ga1())
q.gau(q).v(new U.hy(h))
q.gav(q).v(new U.hz(h))
s=s.createElement("div")
h.b=s
s.classList.add("nt-chain")
if(h.a.length===0)return h.b
for(s=t.s,r=t.P,p=0;o=h.a,p<o.length;p=l){n=o[p]
m=h.r
l=p+1
k=H.D(o)
j=new H.ak(o,l,null,k.i("ak<1>"))
j.aD(o,l,null,k.c)
i=new U.d8(H.h([],s))
r.a(j)
i.aj(0)
i.a=m
i.b="workspace-chain"
i.e=p
i.san(j)
n.aJ(a,i)}U.kT(h.b,o,!1,h.x)
h.ee(h.d,h.e)
return h.b},
ee:function(a,b){var s,r,q=this
q.d=a
q.e=b
s=q.b.style
r=H.b(a)+"px"
s.left=r
s=q.b.style
r=H.b(b)+"px"
s.top=r},
hu:function(a){var s,r,q,p,o,n,m,l,k
this.r=a
for(s=t.P,r=0;q=this.a,r<q.length;r=m){p=q[r]
o=p.r1
n=this.r
m=r+1
l=H.D(q)
k=new H.ak(q,m,null,l.i("ak<1>"))
k.aD(q,m,null,l.c)
o.toString
s.a(k)
o.aj(0)
o.a=n
o.b="workspace-chain"
o.e=r
o.san(k)
p.bv()}},
O:function(){var s,r,q,p,o,n=this
n.x.classList.remove("nt-drag-over")
for(s=n.a,r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.y)(s),++p){o=s[p].O()
q=q||o}if(n.y&&!q){n.x.classList.add("nt-drag-over")
q=!0}return q},
af:function(){var s,r,q
this.x.classList.remove("nt-drag-over")
this.y=!1
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].af()},
a7:function(){var s,r,q,p,o,n,m,l,k,j=this
for(s=t.P,r=0;q=j.a,r<q.length;r=m){p=q[r]
o=p.r1
n=j.r
m=r+1
l=H.D(q)
k=new H.ak(q,m,null,l.i("ak<1>"))
k.aD(q,m,null,l.c)
o.toString
s.a(k)
o.aj(0)
o.a=n
o.b="workspace-chain"
o.e=r
o.san(k)
p.bv()}U.kT(j.b,q,!1,j.x)},
ah:function(){var s,r,q,p=this
if(U.lR(p))p.b.classList.add("nt-allowed-drop")
s=p.a
r=s.length
if(r!==0){if(0>=r)return H.w(s,0)
s=!s[0].gar()}else s=!0
if(s){p.x.classList.add("show")
s=J.d4(p.e)
r=p.b.style
s=""+(s-40)+"px"
r.top=s}for(s=p.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].ah()},
ag:function(){var s,r,q,p,o=this
o.b.classList.remove("nt-allowed-drop")
o.x.classList.remove("show")
s=J.d4(o.e)
r=o.b.style
q=""+s+"px"
r.top=q
for(r=o.a,q=r.length,p=0;p<r.length;r.length===q||(0,H.y)(r),++p)r[p].ag()},
a5:function(a){var s,r,q,p,o,n,m,l=this
t.v.a(a)
$.M.c=!0
s=l.f
r=s.k3
q=r.Q
p=t.P
r.saa(p.a(null))
o=J.aU(q,0)
n=U.dg(l.b)
m=a.d.G(0,n)
r=l.e
if(typeof r!=="number")return r.G()
l.e=r-40+J.cm(m.b)
p.a(q)
C.a.at(l.a,0,q)
l.a7()
p=new U.b3()
p.b=o.b
p.c=o.c
s.P(p)}}
U.hy.prototype={
$1:function(a){t.v.a(a)
return this.a.y=!0},
$S:7}
U.hz.prototype={
$1:function(a){t.v.a(a)
return this.a.y=!1},
$S:7}
U.aw.prototype={
dL:function(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this,c=new U.eB(d),b=document,a=b.createElement("div")
d.b=a
a.classList.add("nt-clause")
if(a2!=null){s=Z.cw(a2,c)
s.gaw(s).v(d.ga1())
s.gau(s).v(new U.hA(d))
s.gav(s).v(new U.hB(d))}r=a1.al()
a=b.createElement("div")
d.cx=a
a.classList.add("nt-clause-left-bar")
a=d.cx
q=r+"-color"
a.classList.add(q)
q=a1.db
a=d.cx
if(q!=null){a=a.style
a.backgroundColor=q}d.b.appendChild(d.cx)
a=b.createElement("div")
d.ch=a
a.classList.add("nt-clause-divider")
a=d.ch
q=r+"-color"
a.classList.add(q)
q=a1.db
a=d.ch
if(q!=null){a=a.style
a.backgroundColor=q}d.b.appendChild(d.ch)
p=d.f
if(p==null||p==="")p=""
a=J.eu(p)
if(a!==""){o=b.createElement("div")
o.classList.add("nt-clause-divider-text")
o.innerText=p
d.ch.appendChild(o)}n=U.kN()
d.ch.appendChild(n)
m=Z.cw(d.b,c)
m.gaw(m).v(d.ga1())
m.gau(m).v(new U.hC(d))
m.gav(m).v(new U.hD(d))
b=b.createElement("div")
d.cy=b
b.classList.add("nt-clause-blocks")
if(d.a.length===0){d.cF()
return d.b}d.b.appendChild(d.cy)
for(b=d.d,a=d.e,q=t.s,l=t.P,k=0;j=d.a,k<j.length;k=h){i=j[k]
h=k+1
g=H.D(j)
f=new H.ak(j,h,null,g.i("ak<1>"))
f.aD(j,h,null,g.c)
g=b.r1.a
j=b.c
e=new U.d8(H.h([],q))
l.a(f)
e.aj(0)
e.a=g
e.b="block-clause"
e.c=j
e.e=k
e.d=a
e.san(f)
i.aJ(a0,e)}U.kO(d.cy,j,"nt-block-clause",!1)
return d.b},
cF:function(){var s,r=this
r.b.classList.add("nt-clause-empty")
r.b.appendChild(U.me(!1,r))
s=document.createElement("div")
s.className="nt-clause-drop"
r.b.appendChild(s)
r.b.appendChild(U.me(!0,r))},
hv:function(){var s,r,q,p,o,n,m,l,k,j,i,h
for(s=this.d,r=this.e,q=t.P,p=0;o=this.a,p<o.length;p=j){n=o[p]
m=n.r1
l=s.r1.a
k=s.c
j=p+1
i=H.D(o)
h=new H.ak(o,j,null,i.i("ak<1>"))
h.aD(o,j,null,i.c)
m.toString
q.a(h)
m.aj(0)
m.a=l
m.b="block-clause"
m.c=k
m.e=p
m.d=r
m.san(h)
n.bv()}},
a7:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.b
g.toString
C.c.K(g,"")
g=h.cy
g.toString
C.c.K(g,"")
h.b.appendChild(h.cx)
h.b.appendChild(h.ch)
if(h.a.length===0){h.cF()
return}h.b.classList.remove("nt-clause-empty")
h.b.appendChild(h.cy)
for(g=h.d,s=h.e,r=t.P,q=0;p=h.a,q<p.length;q=k){o=p[q]
n=o.r1
m=g.r1.a
l=g.c
k=q+1
j=H.D(p)
i=new H.ak(p,k,null,j.i("ak<1>"))
i.aD(p,k,null,j.c)
n.toString
r.a(i)
n.aj(0)
n.a=m
n.b="block-clause"
n.c=l
n.e=q
n.d=s
n.san(i)
o.bv()}U.kO(h.cy,p,"nt-block-clause",!1)},
ah:function(){var s,r,q
if(U.lS(this))this.b.classList.add("nt-allowed-drop")
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].ah()},
ag:function(){var s,r,q
this.b.classList.remove("nt-allowed-drop")
for(s=this.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].ag()},
O:function(){var s,r,q,p,o,n=this
n.b.classList.remove("nt-block-clause-drag-over")
s=n.a
r=s.length
if(r!==0){if(0>=r)return H.w(s,0)
s[0].ry.classList.remove("nt-block-clause-drag-over")}for(s=n.a,r=s.length,q=!1,p=0;p<s.length;s.length===r||(0,H.y)(s),++p){o=s[p].O()
q=q||o}if((n.z||n.Q)&&!q){s=n.a
r=s.length
if(r===0)n.b.classList.add("nt-block-clause-drag-over")
else{if(0>=r)return H.w(s,0)
s[0].ry.classList.add("nt-block-clause-drag-over")}q=!0}return q},
af:function(){var s,r,q,p=this
p.b.classList.remove("nt-block-clause-drag-over")
s=p.a
r=s.length
if(r!==0){if(0>=r)return H.w(s,0)
s[0].ry.classList.remove("nt-block-clause-drag-over")}p.Q=p.z=!1
for(s=p.a,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].af()},
a5:function(a){var s,r,q,p,o,n=this
t.v.a(a)
$.M.c=!0
s=n.d.k2
r=s.k3
q=r.Q
p=t.P
r.saa(p.a(null))
p.a(q)
C.a.at(n.a,0,q)
n.a7()
n.b.classList.remove("nt-clause-empty")
o=J.aU(q,0)
r=new U.b3()
r.b=o.b
r.c=o.c
s.P(r)}}
U.hA.prototype={
$1:function(a){t.v.a(a)
return this.a.Q=!0},
$S:7}
U.hB.prototype={
$1:function(a){t.v.a(a)
return this.a.Q=!1},
$S:7}
U.hC.prototype={
$1:function(a){t.v.a(a)
return this.a.z=!0},
$S:7}
U.hD.prototype={
$1:function(a){t.v.a(a)
return this.a.z=!1},
$S:7}
U.eN.prototype={}
U.hE.prototype={
dQ:function(a,b,c){var s,r,q,p,o=this,n=o.c
if(c!=null)o.c=c
s=a.db.b
r=H.D(s)
q=r.i("aF<1,x<ag*>*>")
p=o.h5(a,P.cA(new H.aF(new H.al(s,r.i("p(1)").a(new U.hF(!0,a)),r.i("al<1>")),r.i("x<ag*>*(1)").a(new U.hG()),q),!0,q.i("e.E")))
o.c=n
return p},
h5:function(a,b){var s,r,q,p
t.f9.a(b)
s=new P.aQ("")
r=a.ch
q=H.h(r.slice(0),H.D(r).i("G<1>"))
C.a.cI(q,U.qW())
for(r=q.length,p=0;p<q.length;q.length===r||(0,H.y)(q),++p)this.dP(s,q[p].a,a.z,a.Q)
for(r=b.length,p=0;p<b.length;b.length===r||(0,H.y)(b),++p)this.dP(s,b[p],a.z,a.Q)
r=s.a
return r.charCodeAt(0)==0?r:r},
dP:function(a,b,c,d){var s,r,q,p=this
t.jr.a(b)
s=J.ap(b)
if(s.gM(b))return
r=s.h(b,0)
if(!r.gar())return
p.bB(a,null,0,p.b.a,c)
p.aZ(a,0,r)
p.ce(a,1,s.b3(b,1).aM(0))
q=s.gE(b).x
if(q==null||q==="")q=d
p.bB(a,null,0,p.b.b,q)
a.a+="\n"},
ce:function(a,b,c){var s,r
t.jr.a(c)
s=c.length
if(s===0)return
for(r=0;r<c.length;c.length===s||(0,H.y)(c),++r)this.aZ(a,b,c[r])},
aZ:function(a,b,c){var s,r,q,p,o,n,m=this,l=c.f
if(l==null){l=H.b(c.d)
for(s=c.z,r=0;r<s.a;++r)l+=" {"+r+"}"
for(s=c.Q,r=0;r<s.a;++r)l+=" {P"+r+"}"}m.cD(a,b,m.cv(l,c))
for(s=c.cy,q=s.length,p=b+1,o=0;o<s.length;s.length===q||(0,H.y)(s),++o){n=s[o]
m.bB(a,c,b,m.b.c,n.r)
m.ce(a,p,n.a)
m.bB(a,c,b,m.b.d,n.x)}s=c.r
if(!(s==null||s===""))m.cD(a,b,m.cv(s,c))},
cv:function(a,b){return this.e3(this.e3(a,b,b.z,""),b,b.Q,"P")},
e3:function(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i
t.mM.a(c)
for(s=new H.as(c,H.j(c).i("as<1>")),s=s.gA(s),r=this.d,q=t.gI,p=0;s.m();){o=s.d
n="{"+d+p+"}"
o=q.a(c.h(0,o))
m=o.a_()
if(m==null)m=""
l=o.aN()?'"'+m+'"':m
k=b.b
j=b.c
i=o.b
o=o.gX(o)
o=H.r(this.c.$6(r,k,j,i,l,o))
a.toString
if(typeof o!="string")H.E(H.bb(o))
a=H.lp(a,n,o);++p}return a},
cD:function(a,b,c){var s,r,q
for(s="",r=0;r<b;++r)s+="  "
a.a+=s
q="\n"+s
c.toString
a.a+=H.lp(c,"\n",q)+"\n"},
bB:function(a,b,c,d,e){var s=e==null?d:e
if(s!==""&&C.d.ax(s)!=="")this.cD(a,c,b==null?s:this.cv(s,b))}}
U.hF.prototype={
$1:function(a){var s
t.k.a(a)
s=a.a
s=H.a3(s.fx)&&s.gar()&&this.b.a9(s.b)===0
return s},
$S:26}
U.hG.prototype={
$1:function(a){var s
t.k.a(a)
s=H.h([],t.s)
C.a.l(s,a.a)
return s},
$S:82}
U.ey.prototype={
aq:function(a,b,c){return!$.M.c&&U.lK(this.a)}}
U.d8.prototype={
ghb:function(){var s=this.b
switch(s){case"new-block":return!0
case"workspace-chain":case"block-clause":return J.lA(this.x)
default:throw H.a(P.aq("Unknown block removal type: "+H.b(s)))}},
aj:function(a){var s=this
s.r=s.f=s.e=s.d=s.c=s.b=s.a=null
s.san(H.h([],t.s))},
san:function(a){this.x=t.P.a(a)}}
U.eA.prototype={
aq:function(a,b,c){return!$.M.c&&U.lR(this.a)}}
U.eB.prototype={
aq:function(a,b,c){return!$.M.c&&U.lS(this.a)}}
U.eI.prototype={}
U.hW.prototype={
cJ:function(a,b,c,d){var s,r=this
$.M=r
r.c=!1
r.d=b
r.sh_(c.d.G(0,U.dg(c.a)))
r.saa(t.P.a(r.hp()))
r.a.ah()
s=H.h([],t.s)
C.a.l(s,a)
C.a.H(s,r.d.x)
U.kT(r.b.e,s,d,null)},
dO:function(){var s,r,q,p,o,n=this
$.M=null
n.c=!0
n.r=n.x=n.f=!1
s=n.a
s.ag()
s.af()
r=n.d
n.d=null
q=n.Q
if(q==null)return
p=t.P
n.saa(p.a(null))
o=r.b
switch(o){case"new-block":break
case"workspace-chain":if(r.e===0)s.dJ(q,n.y,n.z)
else{s=C.a.h(s.ch,r.a)
o=r.e
s.toString
p.a(q)
C.a.at(s.a,o,q)
s.a7()}break
case"block-clause":s=C.a.h(C.a.h(s.ch,r.a).Y(r.c).cy,r.d)
o=r.e
p.a(q)
C.a.at(s.a,o,q)
s.a7()
break
default:throw H.a(P.aq("Unknown block removal type: "+H.b(o)))}},
hp:function(){var s,r,q,p,o=this,n=o.d,m=n.b
switch(m){case"new-block":C.a.h(o.a.db.b,n.f).r.classList.remove("nt-block-dragging")
return H.h([o.d.r],t.s)
case"workspace-chain":m=n.e
n=n.a
s=o.a
r=s.ch
if(m===0){q=C.a.h(r,n)
o.y=q.d
o.z=q.e
p=q.a
s.hq(n)
n=p}else n=C.a.h(r,n).e2(o.d.e)
return n
case"block-clause":return C.a.h(C.a.h(o.a.ch,n.a).Y(o.d.c).cy,o.d.d).e2(o.d.e)
default:throw H.a(P.aq("Unknown block removal type: "+H.b(m)))}},
sh_:function(a){this.e=t.W.a(a)},
saa:function(a){this.Q=t.P.a(a)}}
U.fr.prototype={
aq:function(a,b,c){var s=$.M
return!s.c&&this.a==s.a.c}}
U.dm.prototype={}
U.ah.prototype={
eB:function(a,b){var s=this
s.b=b.b
s.c=b.c
s.d=b.d
C.a.t(b.e,new U.ie(s))},
bl:function(a){var s,r=this,q=r.e,p=q.length
if(p===1){p=r.a
if(p.c!==r)a.a+="("
a.a+=H.b(r.b)+" "
if(0>=q.length)return H.w(q,0)
q[0].bl(a)
if(p.c!==r)a.a+=")"}else if(p===2){s=r.a
if(s.c!==r)a.a+="("
if(0>=p)return H.w(q,0)
q[0].bl(a)
a.a+=" "+H.b(r.b)+" "
if(1>=q.length)return H.w(q,1)
q[1].bl(a)
if(s.c!==r)a.a+=")"}else{q=r.b
if(q!=null)a.a+=q}},
fN:function(a){var s,r,q,p,o
t.nZ.a(a)
s=this.e
r=s.length
q=a.length
if(r!==q)return!0
for(p=0;p<q;++p){o=a[p]
if(p>=r)return H.w(s,p)
if(o!=s[p].c)return!0}return!1},
el:function(a){var s,r,q,p,o,n,m=this
t.nZ.a(a)
s=m.e
r=s.length===0
if(m.fN(a)){C.a.sk(s,0)
for(q=m.a,p=t.C,o=0;o<a.length;++o)if(o===0&&r&&a[o]==m.c){n=new U.ah(q,a[o],H.h([],p))
n.b=m.b
C.a.l(s,n)}else C.a.l(s,new U.ah(q,a[o],H.h([],p)))}},
dz:function(a){var s,r,q=this,p=document.createElement("div")
C.c.K(p,H.b(q.b))
p.classList.add("nt-expression-text")
p.classList.add("editable")
s=H.b(q.c)
p.classList.add(s)
s=t.G
r=s.i("~(1)?").a(new U.ir(q,p))
t.Z.a(null)
W.C(p,"click",r,!1,s.c)
q.dN(p,a)
a.appendChild(p)},
dN:function(a,b){var s=t.G,r=s.i("~(1)?"),q=r.a(new U.is(b))
t.Z.a(null)
s=s.c
W.C(a,"mouseenter",q,!1,s)
W.C(a,"mouseleave",r.a(new U.it(b)),!1,s)},
bj:function(a,b){var s=document.createElement("div")
C.c.K(s,b?"(":")")
s.classList.add("nt-expression-text")
s.classList.add("parenthesis")
this.dN(s,a)
a.appendChild(s)},
fF:function(a){var s,r,q,p=this
p.b=J.z(U.bG(p.b,0))
s=W.ou("number")
s.className="nt-number-input"
C.l.sby(s,p.b)
C.l.sep(s,"1")
r=t.L
q=r.i("~(1)?").a(new U.iq(p,s))
t.Z.a(null)
W.C(s,"change",q,!1,r.c)
a.appendChild(s)},
ghc:function(){var s=this.b
if(s!=null)return P.nh(s,new U.iu())!=null
return!1},
bt:function(a){var s,r,q=this,p=document.createElement("div")
p.className="nt-expression"
if((q.ghc()||q.b==null)&&q.c==="num")q.fF(p)
else if(q.b==null){p.classList.add("empty")
C.c.a4(p,"<small>&#9660;</small>")}else{s=q.e
r=s.length
if(r===1){q.bj(p,!0)
q.dz(p)
if(0>=s.length)return H.w(s,0)
s[0].bt(p)
q.bj(p,!1)}else if(r===2){q.bj(p,!0)
if(0>=s.length)return H.w(s,0)
s[0].bt(p)
q.dz(p)
if(1>=s.length)return H.w(s,1)
s[1].bt(p)
q.bj(p,!1)}else C.c.a4(p,"<div class='nt-expression-text "+H.b(q.c)+"'>"+H.b(q.b)+"</div>")}if(q.e.length===0){p.classList.add("editable")
s=t.G
r=s.i("~(1)?").a(new U.ix(q,p))
t.Z.a(null)
W.C(p,"click",r,!1,s.c)}a.appendChild(p)},
dZ:function(a){var s,r,q,p=document
H.aS(t.g,t.h,"T","querySelectorAll")
s=new W.ao(p.querySelectorAll(".nt-pulldown-menu"),t.Q)
s.t(s,new U.iv())
r=p.createElement("div")
r.classList.add("nt-pulldown-menu")
p=this.a
this.eI(r,p.a.dy)
if(J.lB(p.a.dx))C.c.a4(r,"<hr>")
C.c.a4(r,"<hr>")
q=W.lF("#")
C.i.K(q,"Clear")
q.className="clear"
r.appendChild(q)
p=t.G
s=p.i("~(1)?").a(new U.iw(this,r))
t.Z.a(null)
W.C(q,"click",s,!1,p.c)
a.appendChild(r)},
eI:function(a,b){var s,r,q,p,o,n,m,l
t.gv.a(b)
for(s=b.length,r=t.G,q=r.i("~(1)?"),p=t.Z,r=r.c,o=0;o<b.length;b.length===s||(0,H.y)(b),++o){n=b[o]
if(n.b==this.c){m=document.createElement("a")
C.i.scj(m,"#")
C.i.K(m,H.b(n.a))
a.appendChild(m)
l=q.a(new U.ip(this,a,n))
p.a(null)
W.C(m,"click",l,!1,r)}}}}
U.ie.prototype={
$1:function(a){var s=this.a
return C.a.l(s.e,U.m0(s.a,t.oa.a(a)))},
$S:55}
U.ir.prototype={
$1:function(a){t.X.a(a)
this.a.dZ(this.b)
a.stopPropagation()},
$S:2}
U.is.prototype={
$1:function(a){t.X.a(a)
this.a.classList.add("highlight")},
$S:2}
U.it.prototype={
$1:function(a){t.X.a(a)
this.a.classList.remove("highlight")},
$S:2}
U.iq.prototype={
$1:function(a){var s=this.a,r=this.b,q=r.value
s.b=q
if(q===""){s.b="0"
C.l.sby(r,"0")}},
$S:3}
U.iu.prototype={
$1:function(a){return null},
$S:17}
U.ix.prototype={
$1:function(a){t.X.a(a)
this.a.dZ(this.b)
a.stopPropagation()},
$S:2}
U.iv.prototype={
$1:function(a){return J.es(t.g.a(a))},
$S:15}
U.iw.prototype={
$1:function(a){var s
t.X.a(a)
C.c.bs(this.b)
s=this.a
s.b=null
C.a.sk(s.e,0)
s.d=null
s.a.cu()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.ip.prototype={
$1:function(a){var s,r
t.X.a(a)
C.c.bs(this.b)
s=this.a
r=this.c
s.el(r.c)
s.b=r.a
s.c=r.b
s.d=r.d
s.a.cu()
a.stopPropagation()
a.preventDefault()},
$S:2}
U.bz.prototype={
n:function(a){var s,r=new P.aQ("")
this.c.bl(r)
s=r.a
return s.charCodeAt(0)==0?s:s},
cu:function(){var s=this,r=s.b
if(r!=null&&s.c!=null){J.nY(r).bk(0)
s.c.bt(t.D.a(s.b))}}}
U.ai.prototype={
b1:function(a){var s,r,q=this.b
if(q==null)return
for(q=t.N.a($.ep().h(0,"Object").S("keys",H.h([q],t.hV))),q=new H.Q(q,q.gk(q),H.j(q).i("Q<i.E>")),s=this.a;q.m();){r=q.d
H.r(r)
if(!C.a.D(s,r)){a.toString
if(typeof r!="string"&&!0)H.E(P.aL("property is not a String or num"))
if(r in a.a)throw H.a(P.aq("Found existing property when restoring external data for export: "+H.b(r)))
a.j(0,r,this.b.h(0,r))}}}}
U.ez.prototype={
bD:function(a){var s=this.b,r=H.D(s),q=new H.al(s,r.i("p(1)").a(new U.hn(a)),r.i("al<1>"))
if(q.gk(q)===1)return q.gE(q).a
return null},
h1:function(a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=null,a5=document,a6=a5.createElement("div"),a7=a3.a
a6.id=H.b(a7.c)+"-menu"
a3.d=a6
a6.classList.add("nt-menu")
for(a6=a3.b,s=t.Z,r=t.L,q=r.i("~(1)?"),r=r.c,p=t.G,o=p.i("~(1)?"),p=p.c,n=0;n<a6.length;++n){m=a6[n]
l=a3.d
m.x=a8
m.f=n
k=a5.createElement("div")
m.r=k
k.classList.add("nt-menu-slot")
k=m.a
j=k.al()
m.r.classList.add(j)
i=m.r
h=j+"-color"
i.classList.add(h)
g=k.aH(0,!1)
f=new P.aQ("")
i=k.y
if(i!=null&&C.d.eb(i).length!==0){i=H.b(k.y)+"\n"
f.a=i
f.a=i+"\n"}i=m.d
i.y.aZ(f,0,g)
h=f.a
e=C.d.ax(h.charCodeAt(0)==0?h:h)
d=new P.cy().d_(e,0,e.length)
c=d==null?e:d
h=m.r
b='<span title="'+c+'">'+H.b(k.d)+"</span>"
h.toString
C.c.ck(h,"beforeend",b,a4,a4)
h=k.db
if(h!=null){b=m.r.style
b.backgroundColor=h}h=k.dy
if(h!=null){b=m.r.style
b.borderColor=h}h=k.dx
if(h!=null){b=m.r.style
b.color=h}h=k.fr
if(h!=null){b=m.r.style
a=b.lineHeight
b.font=h
h=m.r.style
h.lineHeight=a}a0=Z.lU(m.r,a8,".nt-menu-slot-at-limit","nt-block-dragging")
h=a0.gdW(a0)
b=h.$ti
a1=b.i("~(1)?").a(m.gbG())
s.a(null)
h.a.c3(b.i("~(1)?").a(a1),a4,null,!1)
h=a0.gdV(a0)
b=h.$ti
a1=b.i("~(1)?").a(m.gcb())
h.a.c3(b.i("~(1)?").a(a1),a4,null,!1)
h=m.r
h.toString
W.C(h,"dblclick",q.a(m.ghm()),!1,r)
h=m.r
h.toString
W.C(h,"contextmenu",o.a(m.ghk()),!1,p)
h=m.e
k=i.a9(k.b)
if(typeof h!=="number")return h.G()
if(typeof k!=="number")return H.ae(k)
k=h<=0||h-k>0
i=m.r
if(k)i.classList.remove("nt-menu-slot-at-limit")
else i.classList.add("nt-menu-slot-at-limit")
l.appendChild(m.r)}a2=Z.cw(a3.d,a7.k4)
a2.gau(a2).v(new U.hl(a3))
a2.gav(a2).v(new U.hm(a3))
a2.gaw(a2).v(a3.ga1())
a3.ed()
return a3.d},
ed:function(){var s,r,q,p,o,n
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q]
o=p.e
n=p.d.a9(p.a.b)
if(typeof o!=="number")return o.G()
if(typeof n!=="number")return H.ae(n)
o=o<=0||o-n>0
n=p.r
if(o)n.classList.remove("nt-menu-slot-at-limit")
else n.classList.add("nt-menu-slot-at-limit")}},
O:function(){var s,r=$.M
if(r!=null)if(!r.f)r=r.x&&!r.r
else r=!0
else r=!1
s=this.d
if(r)s.classList.add("nt-menu-drag-over")
else s.classList.remove("nt-menu-drag-over")},
a5:function(a){var s,r,q,p
t.v.a(a)
$.M.c=!0
s=this.a
r=s.k3
q=r.Q
r.saa(t.P.a(null))
p=J.aU(q,0)
r=new U.b3()
r.b=p.b
r.c=p.c
s.P(r)}}
U.hn.prototype={
$1:function(a){return t.k.a(a).a.b==this.a},
$S:26}
U.hl.prototype={
$1:function(a){t.v.a(a)
$.M.f=!0
this.a.O()},
$S:8}
U.hm.prototype={
$1:function(a){t.v.a(a)
$.M.f=!1
this.a.O()},
$S:8}
U.cc.prototype={}
U.b3.prototype={
bw:function(){return P.a6(P.a_(["type","block-changed","blockId",this.b,"instanceId",this.c],t.O,t._))}}
U.bv.prototype={
bw:function(){var s=this
return P.a6(P.a_(["type","attribute-changed","blockId",s.b,"instanceId",s.c,"attributeId",s.d,"attributeType",s.e,"value",s.f,"formattedValue",s.r],t.O,t.z))}}
U.eY.prototype={
bw:function(){return P.a6(P.a_(["type","menu-item-clicked","blockId",this.b],t.O,t._))}}
U.eZ.prototype={
bw:function(){return P.a6(P.a_(["type","menu-item-context-menu","blockId",this.b,"x",this.c,"y",this.d],t.O,t._))}}
U.aP.prototype={
bH:function(a){var s,r,q,p=this
t.I.a(a)
s=p.a.aH(0,!1)
r=p.f
q=new U.d8(H.h([],t.s))
q.b="new-block"
q.f=r
q.r=s
s.aJ(p.x,q)
p.d.k3.cJ(s,q,a,!1)},
cc:function(a){t.I.a(a)
this.d.k3.dO()},
hn:function(a){this.d.P(new U.eY(this.a.b))},
hl:function(a){var s,r,q
t.X.a(a)
a.preventDefault()
a.stopPropagation()
s=this.a.b
r=a.pageX
r.toString
q=a.pageY
q.toString
this.d.P(new U.eZ(s,H.u(r),H.u(q)))
return!1}}
U.bV.prototype={}
U.co.prototype={
c6:function(a){return U.lH(this.a)},
as:function(a){return U.kR(J.h9(t.P.a(a),this.gfL(),t.iD))},
fM:function(a){var s,r
t.kn.a(a)
if(!U.oG(this.a,a.k1,t.O))return!1
s=a.cy
if(s.length===0)return!0
r=H.D(s)
return U.kR(new H.L(s,r.i("p*(1)").a(new U.hc(this)),r.i("L<1,p*>")))}}
U.hc.prototype={
$1:function(a){t.oq.a(a)
if(!(a.y instanceof U.bi)||a.a.length===0)return!0
return this.a.as(a.a)},
$S:59}
U.bw.prototype={}
U.bi.prototype={
as:function(a){var s
t.P.a(a)
s=U.m2(this.a)
if(s==null)return!0
return s.as(a)}}
U.b8.prototype={
c6:function(a){return this},
as:function(a){t.P.a(a)
return!0}}
U.fl.prototype={
fQ:function(a,b){var s,r,q=this
t.X.a(b).stopPropagation()
s=!q.d
q.d=s
r=q.a
r.innerText=s?"\u25b2":"\u25bc"
r=q.d
q.e.$1(r)}}
U.bZ.prototype={
P:function(a){var s,r,q=this
try{q.ef()
q.bu()
q.db.ed()
$.ep().h(0,"NetTango").S("_relayCallback",[q.c,a.bw()])}catch(r){s=H.O(r)
P.eo("Unable to relay program changed event to Javascript")
P.eo(s)}},
a9:function(a){var s,r=this.ch
if(r.length===0)return 0
s=H.D(r)
return U.l1(new H.L(r,s.i("c*(1)").a(new U.hO(a)),s.i("L<1,c*>")))},
Y:function(a){var s,r,q,p
for(s=this.ch,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q].Y(a)
if(p!=null)return p}throw H.a(P.aq("Block with given instance ID not found in workspace: "+H.b(a)))},
h0:function(){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c,f=H.b(g)+"-styles",e=document,d=t.dR.a(e.getElementById(f))
if(d==null){d=e.createElement("style")
d.id=f
h.d.appendChild(d)}s=t.gV.a(d.sheet)
for(;s.cssRules.length>0;)C.k.hs(s,0)
h.go.c4(s,H.b(g)+"-block-starter")
h.id.c4(s,H.b(g)+"-block-container")
h.k1.c4(s,H.b(g)+"-block-command")
r=e.createElement("div")
r.classList.add("nt-workspace-wrapper")
h.d.appendChild(r)
q=h.k2
p=q.e
p.classList.add("nt-block-drag")
p.classList.add("nt-chain")
r.appendChild(p)
o=e.createElement("div")
o.className="nt-attribute-backdrop"
h.r=o
n=t.G
m=n.i("~(1)?")
l=m.a(new U.hH(h))
t.Z.a(null)
n=n.c
W.C(o,"click",l,!1,n)
l=e.createElement("div")
l.className="nt-attribute-dialog"
h.x=l
W.C(l,"click",m.a(new U.hI()),!1,n)
h.r.appendChild(h.x)
h.d.appendChild(h.r)
n=e.createElement("div")
n.id=H.b(g)+"-space"
h.e=n
n.classList.add("nt-workspace")
r.appendChild(h.e)
e=e.createElement("div")
h.f=e
h.e.appendChild(e)
for(g=h.ch,k=0;k<g.length;++k)g[k].aJ(q,k)
h.ho()
j=h.db.h1(q)
g=j.style
e=H.b(h.fr)+"px"
g.maxHeight=e
r.appendChild(j)
i=Z.cw(h.e,h.k4)
i.gau(i).v(new U.hJ(h))
i.ghj(i).v(new U.hK(h))
i.gav(i).v(new U.hL(h))
i.gaw(i).v(h.ga1())
g=h.r1
g.gau(g).v(new U.hM(h))
g=h.r1
g.gav(g).v(new U.hN(h))
h.ef()},
a5:function(a){var s,r,q,p,o,n=this
t.v.a(a)
$.M.c=!0
s=n.k3
r=s.Q
s.saa(t.P.a(null))
q=U.dg(n.f)
p=a.d.G(0,q).G(0,$.M.e)
n.dJ(r,Math.max(0,J.cm(p.a)),Math.max(0,J.cm(p.b)))
o=J.aU(r,0)
s=new U.b3()
s.b=o.b
s.c=o.c
n.P(s)},
fT:function(a){var s,r,q
t.v.a(a)
$.M.c=!0
s=this.k3
r=s.Q
s.saa(t.P.a(null))
q=J.aU(r,0)
s=new U.b3()
s.b=q.b
s.c=q.c
this.P(s)},
dJ:function(a,b,c){var s,r,q,p,o=this
t.P.a(a)
s=U.lQ(o)
r=o.ch
q=r.length
C.a.l(r,s)
p=s.aJ(o.k2,q)
o.e.appendChild(p)
r=s.a
C.a.at(r,r.length,a)
s.a7()
s.ee(b,c)},
hq:function(a){var s,r,q=this.ch,p=C.a.h(q,a)
if(!!q.fixed$length)H.E(P.A("removeAt"))
if(!H.bO(a))H.E(H.bb(a))
if(typeof a!=="number")return a.am()
s=q.length
if(a>=s)H.E(P.cG(a,null))
q.splice(a,1)[0]
s=p.b;(s&&C.c).bs(s)
for(r=0;r<q.length;++r)q[r].hu(r)},
ho:function(){var s,r,q=this.ch,p=H.h(q.slice(0),H.D(q).i("G<1>"))
C.a.cI(p,new U.hP())
q=this.f
q.toString
C.c.K(q,"")
for(q=p.length,s=0;s<p.length;p.length===q||(0,H.y)(p),++s){r=p[s]
this.f.appendChild(r.b)}},
ah:function(){var s,r,q
for(s=this.ch,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].ah()},
ag:function(){var s,r,q
for(s=this.ch,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].ag()},
O:function(){var s,r,q
for(s=this.ch,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].O()},
af:function(){var s,r,q
for(s=this.ch,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)s[q].af()
this.db.O()},
ef:function(){var s,r,q,p,o,n,m,l=this,k=l.fr,j=l.d.getBoundingClientRect()
for(s=l.ch,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q){p=s[q].b.getBoundingClientRect().bottom
p.toString
o=j.top
o.toString
n=C.b.fK(p-o)
if(typeof k!=="number")return H.ae(k)
if(n>k)k=n}if(typeof k!=="number")return k.C()
s=k+1
l.fx=s
m=""+s+"px"
s=l.e.style
s.minHeight=m
s=l.db.d.style
s.maxHeight=m},
bu:function(){var s,r,q,p,o,n
for(s=this.ch,r=s.length,q=0;q<s.length;s.length===r||(0,H.y)(s),++q)for(p=s[q].a,o=p.length,n=0;n<p.length;p.length===o||(0,H.y)(p),++n)p[n].bu()}}
U.hO.prototype={
$1:function(a){return t.pg.a(a).a9(this.a)},
$S:60}
U.hH.prototype={
$1:function(a){var s,r
t.X.a(a)
s=this.a.r.classList
r=s.contains("show")
s.remove("show")
return r},
$S:10}
U.hI.prototype={
$1:function(a){return t.X.a(a).stopPropagation()},
$S:6}
U.hJ.prototype={
$1:function(a){t.v.a(a)
$.M.r=!0
this.a.db.O()},
$S:8}
U.hK.prototype={
$1:function(a){t.v.a(a)
return this.a.O()},
$S:4}
U.hL.prototype={
$1:function(a){var s
t.v.a(a)
$.M.r=!1
s=this.a
s.O()
s.db.O()},
$S:8}
U.hM.prototype={
$1:function(a){t.v.a(a)
$.M.x=!0
this.a.db.O()},
$S:8}
U.hN.prototype={
$1:function(a){t.v.a(a)
$.M.x=!1
this.a.db.O()},
$S:8}
U.hP.prototype={
$2:function(a,b){var s=t.pg
s.a(a)
s.a(b)
return J.ly(a.e,b.e)},
$S:23}
U.ko.prototype={
$6:function(a,b,c,d,e,f){var s=this.a
if(s==null)return J.z(e)
else return H.r(s.dA([a,b,c,d,e,f]))},
$C:"$6",
$R:6,
$S:25}
U.iE.prototype={
$6:function(a,b,c,d,e,f){var s=H.r(this.a.dA([a,b,c,d,e,f]))
return s},
$C:"$6",
$R:6,
$S:25}
U.kE.prototype={
$1:function(a){return t.k.a(a).a.b},
$S:63}
U.kF.prototype={
$1:function(a){return H.r(a)},
$S:64}
U.hv.prototype={
$2:function(a,b){H.cZ(a)
H.cZ(b)
return H.a3(a)&&H.a3(b)},
$S:65}
U.iX.prototype={
$2:function(a,b){H.u(a)
H.u(b)
if(typeof a!=="number")return a.C()
if(typeof b!=="number")return H.ae(b)
return a+b},
$S:66}
U.je.prototype={
$1:function(a){var s,r
if(!a.w("action"))return
s=this.b
r=s.a
a.j(0,"id",r)
s.j(0,H.r(a.h(0,"action")),r)
s=this.a
this.c.j(0,r,s.a)
s.a=U.mo(s.a,a)},
$S:18}
U.jf.prototype={
$1:function(a){U.p7(this.a,this.b,a)},
$S:18}
U.jd.prototype={
$1:function(a){var s=this.a
s.a=U.p8(s.a,a)},
$S:68}
U.jg.prototype={
$1:function(a){return P.a6(P.a_(["actual",a],t.O,t.z))},
$S:69}
U.jh.prototype={
$1:function(a){return a.w("type")&&J.bd(J.be(a,"type"),"select")},
$S:19}
U.jj.prototype={
$1:function(a){},
$S:18}
U.ji.prototype={
$1:function(a){var s,r="required"
if(!(a instanceof P.q))return!1
if(a.gk(a)===0)return!1
if(a.gk(a)>1)return!0
s=t.V.a(a.h(0,0))
if(s.w(r)&&H.a3(H.cZ(s.h(0,r))))return!1
return!0},
$S:19}
U.jl.prototype={
$1:function(a){if(J.bd(J.be(a,"type"),"select"))U.mp(t.V.a(a))},
$S:11}
U.jm.prototype={
$1:function(a){if(J.bd(J.be(a,"type"),"select"))U.mp(t.V.a(a))},
$S:11}
U.jk.prototype={
$1:function(a){var s,r="actual"
if(a.w(r)){s=J.ap(a)
s=typeof s.h(a,r)=="string"&&C.a.D($.pi,J.eu(s.h(a,r)).toLowerCase())}else s=!1
return s},
$S:19};(function aliases(){var s=J.ar.prototype
s.es=s.n
s.er=s.br
s=J.bE.prototype
s.ev=s.n
s=P.bL.prototype
s.ex=s.b6
s=P.X.prototype
s.ey=s.aS
s.ez=s.b5
s=P.i.prototype
s.cM=s.V
s=P.e.prototype
s.eu=s.bz
s=P.t.prototype
s.ew=s.n
s=W.o.prototype
s.bI=s.W
s=W.e7.prototype
s.eA=s.ae
s=P.P.prototype
s.cK=s.h
s.cL=s.j})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1i,n=hunkHelpers._instance_2u,m=hunkHelpers._instance_1u,l=hunkHelpers.installStaticTearOff,k=hunkHelpers._instance_0i
s(P,"qq","pn",20)
s(P,"qr","po",20)
s(P,"qs","pp",20)
r(P,"n0","qk",0)
q(P,"qu","qe",30)
r(P,"qt","qd",0)
var j
p(j=P.aJ.prototype,"gbc","ac",0)
p(j,"gbd","ad",0)
o(P.bL.prototype,"gfC","l",31)
n(P.a2.prototype,"geO","b8",30)
p(j=P.cR.prototype,"gbc","ac",0)
p(j,"gbd","ad",0)
p(j=P.X.prototype,"gbc","ac",0)
p(j,"gbd","ad",0)
p(P.cS.prototype,"gfs","aE",0)
p(j=P.cU.prototype,"gbc","ac",0)
p(j,"gbd","ad",0)
m(j,"geX","eY",31)
n(j,"gfa","fb",44)
p(j,"gf_","f0",0)
s(P,"qx","pY",9)
l(W,"qC",4,null,["$4"],["pw"],32,0)
l(W,"qD",4,null,["$4"],["px"],32,0)
k(W.e9.prototype,"gfR","c7",0)
s(P,"kC","ei",73)
s(P,"qL","kl",74)
m(j=Z.eJ.prototype,"gfe","ff",15)
m(j,"gf2","f3",6)
m(j,"gf6","f7",6)
m(j,"gf4","f5",6)
m(j,"gf8","f9",6)
q(U,"qW","qw",23)
l(U,"qT",4,null,["$4"],["oB"],75,0)
l(U,"qS",3,null,["$3"],["oA"],76,0)
q(U,"qQ","oy",77)
l(U,"qR",3,null,["$3"],["oz"],78,0)
s(U,"qV","oD",79)
r(U,"qU","oC",80)
s(U,"nc","pc",5)
s(U,"qO","pb",54)
s(U,"qP","pe",5)
s(U,"nd","ph",5)
s(U,"ng","pl",5)
s(U,"ne","pj",5)
s(U,"nf","pk",5)
m(j=U.ag.prototype,"gbG","bH",13)
m(j,"gcb","cc",13)
m(j,"ga1","a5",4)
m(U.aN.prototype,"ga1","a5",4)
m(U.aw.prototype,"ga1","a5",4)
m(U.ez.prototype,"ga1","a5",4)
m(j=U.aP.prototype,"gbG","bH",13)
m(j,"gcb","cc",13)
m(j,"ghm","hn",57)
m(j,"ghk","hl",10)
m(U.co.prototype,"gfL","fM",58)
o(U.fl.prototype,"gfP","fQ",6)
m(j=U.bZ.prototype,"ga1","a5",4)
m(j,"gfS","fT",4)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(P.t,null)
q(P.t,[H.kZ,J.ar,J.aC,P.e,H.Q,P.U,H.dk,H.T,H.cM,P.cB,H.dc,H.bY,H.eR,H.jb,P.K,H.f8,H.e8,H.k0,P.V,H.iJ,H.dx,H.eS,H.fg,H.k7,H.aZ,H.fG,P.kb,P.W,P.X,P.bL,P.fw,P.ch,P.a2,P.ft,P.a4,P.ff,P.bo,P.fA,P.e4,P.cS,P.d7,P.eh,P.dT,P.e5,P.fM,P.cj,P.dY,P.i,P.ef,P.b0,P.e6,P.eC,P.iC,P.jO,P.cv,P.c2,P.f9,P.dH,P.fF,P.dn,P.v,P.fU,P.aQ,W.hS,W.id,W.eK,W.e9,W.ci,W.Z,W.dD,W.e7,W.fV,W.c5,W.fz,W.fT,W.eg,P.P,P.H,P.fR,Z.hX,Z.c1,Z.jw,Z.ex,Z.ba,Z.eJ,Z.aW,Z.bU,U.aM,U.bl,U.hi,U.d9,U.ag,U.eN,U.hE,U.d8,U.hW,U.dm,U.ah,U.bz,U.ai,U.ez,U.cc,U.aP,U.bV,U.fl,U.bZ])
q(J.ar,[J.eP,J.cz,J.bE,J.G,J.bD,J.bj,H.c8,W.F,W.bW,W.J,W.fy,W.fh,W.hU,W.eH,W.df,W.hV,W.f,W.fI,W.dr,W.eX,W.fO,W.aI,W.fX,W.h1,W.h3,P.dw])
q(J.bE,[J.fa,J.bJ,J.b5])
r(J.iF,J.G)
q(J.bD,[J.dt,J.eQ])
q(P.e,[H.n,H.aF,H.al,H.cf,H.cd,H.dM])
q(H.n,[H.ac,H.c3,H.as,P.dS])
q(H.ac,[H.ak,H.L,P.fL])
r(H.aX,H.aF)
q(P.U,[H.a7,H.cg,H.dJ,H.dG])
r(H.di,H.cf)
r(H.dh,H.cd)
r(P.cY,P.cB)
r(P.dL,P.cY)
r(H.dd,P.dL)
q(H.bY,[H.hQ,H.iZ,H.fk,H.iG,H.kx,H.ky,H.kz,P.jr,P.jq,P.js,P.jt,P.kc,P.k8,P.k9,P.iB,P.jC,P.jH,P.jE,P.jF,P.jG,P.jD,P.jK,P.jL,P.jJ,P.jI,P.j5,P.j6,P.jv,P.ju,P.jV,P.kq,P.k2,P.k1,P.k3,P.iM,P.jP,P.iN,P.i8,P.i9,W.ib,W.jp,W.jB,W.k6,W.iP,W.iO,W.k4,W.k5,W.ka,W.ki,P.hR,P.iy,P.iz,P.iA,P.iH,P.km,P.kn,P.kr,P.ks,P.kt,Z.i1,Z.i0,Z.hZ,Z.i_,Z.hY,Z.hh,Z.hb,Z.jx,Z.jy,Z.jz,Z.jA,Z.kh,Z.kg,Z.kf,Z.ke,Z.kd,Z.jU,Z.jT,Z.jS,Z.jR,Z.k_,Z.jZ,Z.jY,Z.jX,Z.jW,Z.i4,Z.i6,Z.i5,Z.i7,Z.i3,U.hg,U.hf,U.ij,U.ii,U.ik,U.il,U.ih,U.im,U.ig,U.io,U.iT,U.iU,U.iV,U.iW,U.j0,U.j1,U.j3,U.j2,U.j4,U.j7,U.j8,U.j9,U.ja,U.hx,U.iR,U.iS,U.iQ,U.hk,U.hp,U.hs,U.hq,U.hr,U.ht,U.hu,U.hy,U.hz,U.hA,U.hB,U.hC,U.hD,U.hF,U.hG,U.ie,U.ir,U.is,U.it,U.iq,U.iu,U.ix,U.iv,U.iw,U.ip,U.hn,U.hl,U.hm,U.hc,U.hO,U.hH,U.hI,U.hJ,U.hK,U.hL,U.hM,U.hN,U.hP,U.ko,U.iE,U.kE,U.kF,U.hv,U.iX,U.je,U.jf,U.jd,U.jg,U.jh,U.jj,U.ji,U.jl,U.jm,U.jk])
r(H.de,H.dc)
q(P.K,[P.fn,H.eT,H.fp,H.fb,P.d6,H.fE,P.dv,P.f7,P.aV,P.f5,P.fq,P.fo,P.b6,P.eD,P.eF])
r(H.f6,P.fn)
q(H.fk,[H.fd,H.cq])
r(H.fs,P.d6)
r(P.dA,P.V)
q(P.dA,[H.ab,P.dR,P.fK,W.fu])
r(H.at,H.c8)
q(H.at,[H.e0,H.e2])
r(H.e1,H.e0)
r(H.bF,H.e1)
r(H.e3,H.e2)
r(H.aG,H.e3)
q(H.aG,[H.f_,H.f0,H.f1,H.f2,H.f3,H.dC,H.f4])
r(H.ec,H.fE)
q(P.W,[P.cW,P.dQ,W.br,W.aR])
r(P.cQ,P.cW)
r(P.am,P.cQ)
q(P.X,[P.cR,P.cU])
r(P.aJ,P.cR)
r(P.ea,P.bL)
r(P.eb,P.fw)
q(P.bo,[P.dN,P.fB])
r(P.cX,P.e4)
r(P.dZ,P.dQ)
r(P.fS,P.eh)
r(P.dU,P.dR)
r(P.dX,P.e5)
r(P.dz,P.dY)
r(P.dF,P.e6)
r(P.cs,P.ff)
q(P.cs,[P.cy,P.eW,P.eV])
r(P.eU,P.dv)
r(P.iI,P.eC)
r(P.jN,P.jO)
q(P.aV,[P.dE,P.eO])
q(W.F,[W.m,W.bK,W.b9])
q(W.m,[W.o,W.b4,W.c0,W.cP])
q(W.o,[W.k,P.l])
q(W.k,[W.cn,W.ev,W.cp,W.bX,W.cr,W.c_,W.eM,W.bB,W.cD,W.cJ,W.cL,W.dI,W.fi,W.fj,W.cN,W.cO])
r(W.ct,W.fy)
r(W.cu,W.fh)
q(P.dz,[W.fv,W.ao,W.an,P.eL])
r(W.ia,W.id)
r(W.fJ,W.fI)
r(W.bA,W.fJ)
r(W.dq,W.c0)
r(W.ay,W.f)
q(W.ay,[W.bk,W.a1,W.b7])
r(W.fP,W.fO)
r(W.cC,W.fP)
r(W.cE,W.a1)
r(W.fY,W.fX)
r(W.fm,W.fY)
r(W.h2,W.h1)
r(W.fx,W.h2)
r(W.dO,W.df)
r(W.h4,W.h3)
r(W.e_,W.h4)
r(W.fC,W.fu)
r(P.eE,P.dF)
q(P.eE,[W.fD,P.ew])
r(W.au,W.br)
r(W.dP,P.a4)
r(W.fW,W.e7)
q(P.P,[P.aE,P.dW])
r(P.q,P.dW)
r(P.bI,P.fR)
r(P.cH,P.l)
q(Z.ba,[Z.fZ,Z.fN,Z.fQ])
q(U.aM,[U.c4,U.c9,U.cI,U.dK])
q(U.c9,[U.ds,U.cF])
q(U.hi,[U.aN,U.aw])
q(Z.bU,[U.ey,U.eA,U.eB,U.fr])
r(U.eI,Z.ex)
q(U.cc,[U.b3,U.bv,U.eY,U.eZ])
q(U.bV,[U.bw,U.bi])
q(U.bw,[U.co,U.b8])
s(H.e0,P.i)
s(H.e1,H.T)
s(H.e2,P.i)
s(H.e3,H.T)
s(P.dY,P.i)
s(P.e6,P.b0)
s(P.cY,P.ef)
s(W.fy,W.hS)
s(W.fI,P.i)
s(W.fJ,W.Z)
s(W.fO,P.i)
s(W.fP,W.Z)
s(W.fX,P.i)
s(W.fY,W.Z)
s(W.h1,P.i)
s(W.h2,W.Z)
s(W.h3,P.i)
s(W.h4,W.Z)
s(P.dW,P.i)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{c:"int",av:"double",a5:"num",d:"String",p:"bool",v:"Null",x:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["~()","v()","v(a1*)","v(f*)","~(aW*)","~(P*)","~(a1*)","p*(aW*)","v(aW*)","@(@)","p*(a1*)","v(@)","v(b7*)","~(c1*)","v(o*)","~(o*)","p*(p*)","v(d*)","v(P*)","p*(@)","~(~())","p*(o*)","p(d)","c*(aN*,aN*)","p(aY)","d*(@,@,@,@,@,@)","p*(aP*)","p(m)","d(c)","v(t?,t?)","~(t,b1)","~(t?)","p(o,d,d,ci)","c6<~>*(a4<@>*)","@(d)","v(bk*)","@(@,d)","~(a5*)","~(ba*)","v(t,b1)","a2<@>(@)","~(m,m?)","p*(bl*)","~(bl*)","~(@,b1)","v(~())","c*(ag*)","v(ce,@)","v(d,@)","~(aw*)","c*(aw*)","v(p*)","q<@>(@)","aE(@)","~(q<@>*)","~(ah*)","v(a5)","~(f*)","p*(ag*)","p*(aw*)","c*(aN*)","d(d)","@(t?)","c*(aP*)","d*(@)","p*(p*,p*)","c*(c*,c*)","@(f)","v(q<@>*)","P*(@)","o(m)","P(@)","p(b_<d>)","t?(t?)","t?(@)","~(d*,d*,d*,aE*)","~(d*,d*,aE*)","d*(d*,aE*)","d*(d*,c*,c*)","d*(d*)","d*()","d*(o*)","x<ag*>*(aP*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.pP(v.typeUniverse,JSON.parse('{"b5":"bE","fa":"bE","bJ":"bE","ra":"f","rt":"f","r9":"l","rw":"l","rb":"k","ry":"k","rB":"m","rs":"m","rO":"c0","rN":"a1","rg":"ay","rl":"b9","rf":"b4","rC":"b4","rx":"bA","ru":"bW","rh":"J","rA":"bF","rz":"c8","eP":{"p":[]},"cz":{"v":[]},"bE":{"cx":[]},"G":{"x":["1"],"n":["1"],"e":["1"]},"iF":{"G":["1"],"x":["1"],"n":["1"],"e":["1"]},"aC":{"U":["1"]},"bD":{"av":[],"a5":[]},"dt":{"av":[],"c":[],"a5":[]},"eQ":{"av":[],"a5":[]},"bj":{"d":[],"iY":[]},"n":{"e":["1"]},"ac":{"n":["1"],"e":["1"]},"ak":{"ac":["1"],"n":["1"],"e":["1"],"ac.E":"1","e.E":"1"},"Q":{"U":["1"]},"aF":{"e":["2"],"e.E":"2"},"aX":{"aF":["1","2"],"n":["2"],"e":["2"],"e.E":"2"},"a7":{"U":["2"]},"L":{"ac":["2"],"n":["2"],"e":["2"],"ac.E":"2","e.E":"2"},"al":{"e":["1"],"e.E":"1"},"cg":{"U":["1"]},"cf":{"e":["1"],"e.E":"1"},"di":{"cf":["1"],"n":["1"],"e":["1"],"e.E":"1"},"dJ":{"U":["1"]},"cd":{"e":["1"],"e.E":"1"},"dh":{"cd":["1"],"n":["1"],"e":["1"],"e.E":"1"},"dG":{"U":["1"]},"c3":{"n":["1"],"e":["1"],"e.E":"1"},"dk":{"U":["1"]},"cM":{"ce":[]},"dd":{"dL":["1","2"],"cY":["1","2"],"cB":["1","2"],"ef":["1","2"],"aj":["1","2"]},"dc":{"aj":["1","2"]},"de":{"dc":["1","2"],"aj":["1","2"]},"dM":{"e":["1"],"e.E":"1"},"eR":{"m3":[]},"f6":{"K":[]},"eT":{"K":[]},"fp":{"K":[]},"f8":{"dl":[]},"e8":{"b1":[]},"bY":{"cx":[]},"fk":{"cx":[]},"fd":{"cx":[]},"cq":{"cx":[]},"fb":{"K":[]},"fs":{"K":[]},"ab":{"V":["1","2"],"m8":["1","2"],"aj":["1","2"],"V.K":"1","V.V":"2"},"as":{"n":["1"],"e":["1"],"e.E":"1"},"dx":{"U":["1"]},"eS":{"iY":[]},"fg":{"mb":[]},"k7":{"U":["mb"]},"c8":{"b2":[]},"at":{"a0":["1"],"b2":[]},"bF":{"at":["av"],"i":["av"],"a0":["av"],"x":["av"],"n":["av"],"b2":[],"e":["av"],"T":["av"],"i.E":"av","T.E":"av"},"aG":{"at":["c"],"i":["c"],"a0":["c"],"x":["c"],"n":["c"],"b2":[],"e":["c"],"T":["c"]},"f_":{"aG":[],"at":["c"],"i":["c"],"a0":["c"],"x":["c"],"n":["c"],"b2":[],"e":["c"],"T":["c"],"i.E":"c","T.E":"c"},"f0":{"aG":[],"at":["c"],"i":["c"],"a0":["c"],"x":["c"],"n":["c"],"b2":[],"e":["c"],"T":["c"],"i.E":"c","T.E":"c"},"f1":{"aG":[],"at":["c"],"i":["c"],"a0":["c"],"x":["c"],"n":["c"],"b2":[],"e":["c"],"T":["c"],"i.E":"c","T.E":"c"},"f2":{"aG":[],"at":["c"],"i":["c"],"a0":["c"],"x":["c"],"n":["c"],"b2":[],"e":["c"],"T":["c"],"i.E":"c","T.E":"c"},"f3":{"aG":[],"at":["c"],"i":["c"],"a0":["c"],"x":["c"],"n":["c"],"b2":[],"e":["c"],"T":["c"],"i.E":"c","T.E":"c"},"dC":{"aG":[],"at":["c"],"i":["c"],"a0":["c"],"x":["c"],"n":["c"],"b2":[],"e":["c"],"T":["c"],"i.E":"c","T.E":"c"},"f4":{"aG":[],"at":["c"],"i":["c"],"a0":["c"],"x":["c"],"n":["c"],"b2":[],"e":["c"],"T":["c"],"i.E":"c","T.E":"c"},"fE":{"K":[]},"ec":{"K":[]},"am":{"cQ":["1"],"cW":["1"],"W":["1"],"W.T":"1"},"aJ":{"cR":["1"],"X":["1"],"a4":["1"],"bq":["1"],"bp":["1"],"X.T":"1"},"bL":{"fe":["1"],"mF":["1"],"bq":["1"],"bp":["1"]},"ea":{"bL":["1"],"fe":["1"],"mF":["1"],"bq":["1"],"bp":["1"]},"eb":{"fw":["1"]},"a2":{"c6":["1"]},"cQ":{"cW":["1"],"W":["1"]},"cR":{"X":["1"],"a4":["1"],"bq":["1"],"bp":["1"]},"X":{"a4":["1"],"bq":["1"],"bp":["1"],"X.T":"1"},"cW":{"W":["1"]},"dN":{"bo":["1"]},"fB":{"bo":["@"]},"fA":{"bo":["@"]},"cX":{"e4":["1"]},"cS":{"a4":["1"]},"dQ":{"W":["2"]},"cU":{"X":["2"],"a4":["2"],"bq":["2"],"bp":["2"],"X.T":"2"},"dZ":{"dQ":["1","2"],"W":["2"],"W.T":"2"},"d7":{"K":[]},"eh":{"mr":[]},"fS":{"eh":[],"mr":[]},"dR":{"V":["1","2"],"aj":["1","2"]},"dU":{"dR":["1","2"],"V":["1","2"],"aj":["1","2"],"V.K":"1","V.V":"2"},"dS":{"n":["1"],"e":["1"],"e.E":"1"},"dT":{"U":["1"]},"dX":{"e5":["1"],"b_":["1"],"n":["1"],"e":["1"]},"cj":{"U":["1"]},"dz":{"i":["1"],"x":["1"],"n":["1"],"e":["1"]},"dA":{"V":["1","2"],"aj":["1","2"]},"V":{"aj":["1","2"]},"cB":{"aj":["1","2"]},"dL":{"cY":["1","2"],"cB":["1","2"],"ef":["1","2"],"aj":["1","2"]},"dF":{"b0":["1"],"b_":["1"],"n":["1"],"e":["1"]},"e5":{"b_":["1"],"n":["1"],"e":["1"]},"fK":{"V":["d","@"],"aj":["d","@"],"V.K":"d","V.V":"@"},"fL":{"ac":["d"],"n":["d"],"e":["d"],"ac.E":"d","e.E":"d"},"cy":{"cs":["d","d"]},"dv":{"K":[]},"eU":{"K":[]},"eW":{"cs":["t?","d"]},"eV":{"cs":["d","t?"]},"av":{"a5":[]},"c":{"a5":[]},"x":{"n":["1"],"e":["1"]},"b_":{"n":["1"],"e":["1"]},"d":{"iY":[]},"d6":{"K":[]},"fn":{"K":[]},"f7":{"K":[]},"aV":{"K":[]},"dE":{"K":[]},"eO":{"K":[]},"f5":{"K":[]},"fq":{"K":[]},"fo":{"K":[]},"b6":{"K":[]},"eD":{"K":[]},"f9":{"K":[]},"dH":{"K":[]},"eF":{"K":[]},"fF":{"dl":[]},"dn":{"dl":[]},"fU":{"b1":[]},"aQ":{"p1":[]},"k":{"o":[],"m":[],"F":[]},"cn":{"k":[],"o":[],"m":[],"F":[]},"ev":{"k":[],"o":[],"m":[],"F":[]},"cp":{"k":[],"o":[],"m":[],"F":[]},"bX":{"k":[],"o":[],"m":[],"F":[]},"cr":{"k":[],"o":[],"m":[],"F":[]},"b4":{"m":[],"F":[]},"c_":{"k":[],"o":[],"m":[],"F":[]},"c0":{"m":[],"F":[]},"df":{"bI":["a5"]},"fv":{"i":["o"],"x":["o"],"n":["o"],"e":["o"],"i.E":"o"},"ao":{"lY":["1"],"i":["1"],"x":["1"],"n":["1"],"e":["1"],"i.E":"1"},"o":{"m":[],"F":[]},"eM":{"k":[],"o":[],"m":[],"F":[]},"bA":{"i":["m"],"Z":["m"],"x":["m"],"a0":["m"],"n":["m"],"e":["m"],"Z.E":"m","i.E":"m"},"dq":{"m":[],"F":[]},"bB":{"k":[],"o":[],"m":[],"F":[]},"bk":{"ay":[],"f":[]},"a1":{"ay":[],"f":[]},"an":{"i":["m"],"x":["m"],"n":["m"],"e":["m"],"i.E":"m"},"m":{"F":[]},"cC":{"i":["m"],"Z":["m"],"x":["m"],"a0":["m"],"n":["m"],"e":["m"],"Z.E":"m","i.E":"m"},"cD":{"k":[],"o":[],"m":[],"F":[]},"cE":{"a1":[],"ay":[],"f":[]},"cJ":{"k":[],"o":[],"m":[],"F":[]},"cL":{"k":[],"o":[],"m":[],"F":[]},"dI":{"k":[],"o":[],"m":[],"F":[]},"fi":{"k":[],"o":[],"m":[],"F":[]},"fj":{"k":[],"o":[],"m":[],"F":[]},"cN":{"k":[],"o":[],"m":[],"F":[]},"cO":{"k":[],"o":[],"m":[],"F":[]},"b7":{"ay":[],"f":[]},"fm":{"i":["aI"],"Z":["aI"],"x":["aI"],"a0":["aI"],"n":["aI"],"e":["aI"],"Z.E":"aI","i.E":"aI"},"ay":{"f":[]},"bK":{"jo":[],"F":[]},"b9":{"F":[]},"cP":{"m":[],"F":[]},"fx":{"i":["J"],"Z":["J"],"x":["J"],"a0":["J"],"n":["J"],"e":["J"],"Z.E":"J","i.E":"J"},"dO":{"bI":["a5"]},"e_":{"i":["m"],"Z":["m"],"x":["m"],"a0":["m"],"n":["m"],"e":["m"],"Z.E":"m","i.E":"m"},"fu":{"V":["d","d"],"aj":["d","d"]},"fC":{"V":["d","d"],"aj":["d","d"],"V.K":"d","V.V":"d"},"fD":{"b0":["d"],"b_":["d"],"n":["d"],"e":["d"],"b0.E":"d"},"br":{"W":["1"],"W.T":"1"},"au":{"br":["1"],"W":["1"],"W.T":"1"},"aR":{"W":["1"],"W.T":"1"},"dP":{"a4":["1"]},"ci":{"aY":[]},"dD":{"aY":[]},"e7":{"aY":[]},"fW":{"aY":[]},"fV":{"aY":[]},"c5":{"U":["1"]},"fz":{"jo":[],"F":[]},"fT":{"p6":[]},"eg":{"oH":[]},"eE":{"b0":["d"],"b_":["d"],"n":["d"],"e":["d"]},"eL":{"i":["o"],"x":["o"],"n":["o"],"e":["o"],"i.E":"o"},"aE":{"P":[]},"q":{"i":["1"],"x":["1"],"n":["1"],"P":[],"e":["1"],"i.E":"1"},"bI":{"fR":["1"]},"cH":{"l":[],"o":[],"m":[],"F":[]},"ew":{"b0":["d"],"b_":["d"],"n":["d"],"e":["d"],"b0.E":"d"},"l":{"o":[],"m":[],"F":[]},"fZ":{"ba":[]},"fN":{"ba":[]},"fQ":{"ba":[]},"c4":{"aM":[]},"ds":{"c9":[],"aM":[]},"c9":{"aM":[]},"cF":{"c9":[],"aM":[]},"cI":{"aM":[]},"dK":{"aM":[]},"ey":{"bU":[]},"eA":{"bU":[]},"eB":{"bU":[]},"eI":{"ex":[]},"fr":{"bU":[]},"b3":{"cc":[]},"bv":{"cc":[]},"eY":{"cc":[]},"eZ":{"cc":[]},"co":{"bw":[],"bV":[]},"bw":{"bV":[]},"bi":{"bV":[]},"b8":{"bw":[],"bV":[]}}'))
H.pO(v.typeUniverse,JSON.parse('{"n":1,"at":1,"ff":2,"dz":1,"dA":2,"dF":1,"dY":1,"e6":1,"eC":2,"l0":2,"dW":1}'))
var u={c:'      <div class="nt-param-table">\n        <div class="nt-param-row">',f:'</div>\n      </div>\n      <button class="nt-param-confirm" type="button">OK</button>\n      <button class="nt-param-cancel" type="button">Cancel</button>\n    ',o:"Cannot fire new event. Controller is already firing an event"}
var t=(function rtii(){var s=H.d3
return{bm:s("@<~>"),n:s("d7"),az:s("cp"),fj:s("bW"),hp:s("bX"),i9:s("dd<ce,@>"),d5:s("J"),jS:s("c2"),j:s("n<@>"),h:s("o"),x:s("lY<o>"),fz:s("K"),B:s("f"),b:s("cx"),g7:s("c6<@>"),ad:s("dr"),fY:s("bB"),E:s("m3"),cj:s("e<o>"),hl:s("e<m>"),bq:s("e<d>"),id:s("e<av>"),d:s("e<@>"),fm:s("e<c>"),lN:s("G<aY>"),U:s("G<d>"),dG:s("G<@>"),s:s("G<ag*>"),dP:s("G<aN*>"),km:s("G<aw*>"),or:s("G<o*>"),C:s("G<ah*>"),jM:s("G<dm*>"),hV:s("G<P*>"),cm:s("G<t*>"),aA:s("G<bl*>"),ij:s("G<aP*>"),e:s("G<a4<@>*>"),i:s("G<d*>"),lv:s("G<ba*>"),T:s("cz"),dY:s("b5"),dX:s("a0<@>"),gq:s("q<@>"),eF:s("q<d*>"),bX:s("ab<ce,@>"),nm:s("ab<d*,c*>"),bj:s("ab<c*,aM*>"),h6:s("ab<c*,c*>"),mz:s("dw"),gs:s("x<@>"),f:s("aj<@,@>"),hb:s("L<d*,d>"),gD:s("a1"),dQ:s("bF"),aj:s("aG"),A:s("m"),hU:s("aY"),a:s("v"),K:s("t"),k5:s("H<a5*>"),H:s("H<a5>"),q:s("bI<a5>"),ik:s("cH"),gi:s("b_<d>"),l:s("b1"),R:s("d"),hP:s("d(d*)"),bC:s("l"),bR:s("ce"),fD:s("cN"),ki:s("aI"),jv:s("b2"),cx:s("bJ"),hE:s("bK"),kg:s("jo"),f5:s("b9"),nD:s("cP"),aN:s("an"),oK:s("bo<@>"),bz:s("au<f>"),L:s("au<f*>"),G:s("au<a1*>"),el:s("au<b7*>"),iy:s("aR<a1*>"),ko:s("br<f>"),Q:s("ao<o*>"),j_:s("a2<@>"),hy:s("a2<c>"),iS:s("a2<a5>"),cU:s("a2<~>"),dl:s("ci"),mp:s("dU<@,@>"),fE:s("eb<a5>"),y:s("p"),iW:s("p(t)"),dx:s("av"),z:s("@"),mY:s("@()"),mq:s("@(t)"),ng:s("@(t,b1)"),gA:s("@(b_<d>)"),S:s("c"),gI:s("aM*"),kn:s("ag*"),lr:s("cr*"),pg:s("aN*"),oq:s("aw*"),b1:s("bw*"),gV:s("cu*"),D:s("c_*"),I:s("c1*"),v:s("aW*"),g:s("o*"),iE:s("f*"),oO:s("dl*"),oa:s("ah*"),gf:s("c4*"),hw:s("k*"),J:s("bB*"),Y:s("e<@>*"),P:s("e<ag*>*"),N:s("q<@>*"),jz:s("aE*"),V:s("P*"),gh:s("bk*"),w:s("x<@>*"),jr:s("x<ag*>*"),k8:s("x<aw*>*"),u:s("x<o*>*"),gv:s("x<dm*>*"),f9:s("x<x<ag*>*>*"),nZ:s("x<d*>*"),e7:s("aj<@,@>*"),mM:s("aj<c*,aM*>*"),X:s("a1*"),eK:s("0&*"),k4:s("c9*"),_:s("t*"),nT:s("bl*"),oQ:s("cD*"),W:s("H<a5>*"),b2:s("cE*"),ac:s("cI*"),lb:s("cJ*"),k:s("aP*"),eS:s("fe<c1*>*"),m:s("fe<aW*>*"),kO:s("a4<@>*"),O:s("d*"),dR:s("cL*"),bD:s("cO*"),c:s("b7*"),nh:s("ba*"),iD:s("p*"),co:s("c*"),jk:s("a5*"),iB:s("F?"),gK:s("c6<v>?"),lH:s("x<@>?"),e1:s("m?"),r:s("t?"),lT:s("bo<@>?"),F:s("ch<@,@>?"),nF:s("fM?"),o:s("@(f)?"),fs:s("t?(t?,t?)?"),mN:s("t?(@)?"),Z:s("~()?"),t:s("~(f)?"),m6:s("~(f*)?"),kB:s("~(bk*)?"),j1:s("~(a1*)?"),oI:s("~(b7*)?"),cZ:s("a5"),p:s("~"),M:s("~()"),i6:s("~(t)"),b9:s("~(t,b1)"),gS:s("~(d,d)"),lc:s("~(d,@)"),hv:s("~(a5)")}})();(function constants(){var s=hunkHelpers.makeConstList
C.i=W.cn.prototype
C.p=W.bX.prototype
C.h=W.ct.prototype
C.k=W.cu.prototype
C.c=W.c_.prototype
C.L=W.eH.prototype
C.M=W.dq.prototype
C.l=W.bB.prototype
C.N=J.ar.prototype
C.a=J.G.prototype
C.e=J.dt.prototype
C.O=J.cz.prototype
C.b=J.bD.prototype
C.d=J.bj.prototype
C.P=J.b5.prototype
C.n=W.cC.prototype
C.y=J.fa.prototype
C.z=W.dI.prototype
C.o=J.bJ.prototype
C.A=W.bK.prototype
C.B=new H.dk(H.d3("dk<v>"))
C.X=new P.iC()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=function() {
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
C.H=function(getTagFallback) {
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
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.G=function(hooks) {
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
C.F=function(hooks) {
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

C.j=new P.iI()
C.I=new P.f9()
C.J=new P.fA()
C.t=new H.k0()
C.f=new P.fS()
C.K=new P.fU()
C.u=new P.c2(0)
C.Q=new P.eV(null)
C.R=new P.eW(null)
C.S=H.h(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.i)
C.T=H.h(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.i)
C.v=H.h(s([]),t.dG)
C.U=H.h(s([]),t.i)
C.w=H.h(s(["bind","if","ref","repeat","syntax"]),t.i)
C.m=H.h(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.i)
C.V=H.h(s([]),H.d3("G<ce*>"))
C.x=new H.de(0,{},C.V,H.d3("de<ce*,@>"))
C.W=new H.cM("call")})();(function staticFields(){$.mz=null
$.bg=0
$.lN=null
$.lM=null
$.n7=null
$.n_=null
$.nk=null
$.ku=null
$.kA=null
$.lm=null
$.d_=null
$.ek=null
$.el=null
$.lh=!1
$.I=C.f
$.aK=H.h([],H.d3("G<t>"))
$.bx=null
$.kU=null
$.m_=null
$.lZ=null
$.lX=function(){var s=t.R
return P.a_(["animationend","webkitAnimationEnd","animationiteration","webkitAnimationIteration","animationstart","webkitAnimationStart","fullscreenchange","webkitfullscreenchange","fullscreenerror","webkitfullscreenerror","keyadded","webkitkeyadded","keyerror","webkitkeyerror","keymessage","webkitkeymessage","needkey","webkitneedkey","pointerlockchange","webkitpointerlockchange","pointerlockerror","webkitpointerlockerror","resourcetimingbufferfull","webkitresourcetimingbufferfull","transitionend","webkitTransitionEnd","speechchange","webkitSpeechChange"],s,s)}()
$.fH=P.c7(t.R,t.b)
$.S=null
$.lW=0
$.lG=null
$.ha=!1
$.cT=null
$.M=null
$.aB=P.c7(t.O,H.d3("bZ*"))
$.pi=H.h(["gray","red","orange","brown","yellow","green","lime","turquoise","cyan","sky","blue","violet","magenta","pink"],t.i)})();(function lazyInitializers(){var s=hunkHelpers.lazy,r=hunkHelpers.lazyOld
s($,"rk","kG",function(){return H.n6("_$dart_dartClosure")})
s($,"rD","nC",function(){return H.bn(H.jc({
toString:function(){return"$receiver$"}}))})
s($,"rE","nD",function(){return H.bn(H.jc({$method$:null,
toString:function(){return"$receiver$"}}))})
s($,"rF","nE",function(){return H.bn(H.jc(null))})
s($,"rG","nF",function(){return H.bn(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rJ","nI",function(){return H.bn(H.jc(void 0))})
s($,"rK","nJ",function(){return H.bn(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}())})
s($,"rI","nH",function(){return H.bn(H.mn(null))})
s($,"rH","nG",function(){return H.bn(function(){try{null.$method$}catch(q){return q.message}}())})
s($,"rM","nL",function(){return H.bn(H.mn(void 0))})
s($,"rL","nK",function(){return H.bn(function(){try{(void 0).$method$}catch(q){return q.message}}())})
s($,"rP","lt",function(){return P.pm()})
s($,"rv","h7",function(){var q=new P.a2(C.f,H.d3("a2<v>"))
q.ft(null)
return q})
s($,"rj","nw",function(){return{}})
s($,"rV","nQ",function(){return P.m9(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.R)})
s($,"ri","nv",function(){return P.oU("^\\S+$")})
s($,"rp","kH",function(){return J.h8(P.hT(),"Opera",0)})
s($,"ro","nz",function(){return!H.a3($.kH())&&J.h8(P.hT(),"Trident/",0)})
s($,"rn","ny",function(){return J.h8(P.hT(),"Firefox",0)})
s($,"rq","nA",function(){return!H.a3($.kH())&&J.h8(P.hT(),"WebKit",0)})
s($,"rm","nx",function(){return"-"+$.nB()+"-"})
s($,"rr","nB",function(){if(H.a3($.ny()))var q="moz"
else if($.nz())q="ms"
else q=H.a3($.kH())?"o":"webkit"
return q})
s($,"t4","ep",function(){return P.pW(P.bQ(self))})
s($,"rQ","lu",function(){return H.n6("_$dart_dartObject")})
s($,"t5","lv",function(){return function DartObject(a){this.o=a}})
r($,"rS","nN",function(){return W.ic("_customDragEnter",t.X)})
r($,"rU","nP",function(){return W.ic("_customDragOver",t.X)})
r($,"rT","nO",function(){return W.ic("_customDragLeave",t.X)})
r($,"rR","nM",function(){return W.ic("_customDrop",t.X)})
r($,"re","ls",function(){var q=U.kP()
q.a="#bb5555"
return q})
r($,"rd","lr",function(){var q=U.kP()
q.a="#8899aa"
return q})
r($,"rc","lq",function(){var q=U.kP()
q.a="#9977aa"
return q})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.ar,MediaError:J.ar,Navigator:J.ar,NavigatorConcurrentHardware:J.ar,NavigatorUserMediaError:J.ar,OverconstrainedError:J.ar,PositionError:J.ar,Range:J.ar,Selection:J.ar,SQLError:J.ar,DataView:H.c8,ArrayBufferView:H.c8,Float32Array:H.bF,Float64Array:H.bF,Int16Array:H.f_,Int32Array:H.f0,Int8Array:H.f1,Uint16Array:H.f2,Uint32Array:H.f3,Uint8ClampedArray:H.dC,CanvasPixelArray:H.dC,Uint8Array:H.f4,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLCanvasElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.cn,HTMLAreaElement:W.ev,HTMLBaseElement:W.cp,Blob:W.bW,File:W.bW,HTMLBodyElement:W.bX,HTMLButtonElement:W.cr,CDATASection:W.b4,CharacterData:W.b4,Comment:W.b4,ProcessingInstruction:W.b4,Text:W.b4,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.ct,MSStyleCSSProperties:W.ct,CSS2Properties:W.ct,CSSStyleSheet:W.cu,HTMLDivElement:W.c_,XMLDocument:W.c0,Document:W.c0,DOMException:W.hU,DOMImplementation:W.eH,DOMRectReadOnly:W.df,DOMTokenList:W.hV,Element:W.o,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,SubmitEvent:W.f,EventTarget:W.F,HTMLFormElement:W.eM,HTMLCollection:W.bA,HTMLFormControlsCollection:W.bA,HTMLOptionsCollection:W.bA,HTMLDocument:W.dq,ImageData:W.dr,HTMLInputElement:W.bB,KeyboardEvent:W.bk,Location:W.eX,WheelEvent:W.a1,MouseEvent:W.a1,DragEvent:W.a1,DocumentFragment:W.m,ShadowRoot:W.m,DocumentType:W.m,Node:W.m,NodeList:W.cC,RadioNodeList:W.cC,HTMLOptionElement:W.cD,PointerEvent:W.cE,HTMLSelectElement:W.cJ,HTMLStyleElement:W.cL,StyleSheet:W.fh,HTMLTableElement:W.dI,HTMLTableRowElement:W.fi,HTMLTableSectionElement:W.fj,HTMLTemplateElement:W.cN,HTMLTextAreaElement:W.cO,Touch:W.aI,TouchEvent:W.b7,TouchList:W.fm,CompositionEvent:W.ay,FocusEvent:W.ay,TextEvent:W.ay,UIEvent:W.ay,Window:W.bK,DOMWindow:W.bK,DedicatedWorkerGlobalScope:W.b9,ServiceWorkerGlobalScope:W.b9,SharedWorkerGlobalScope:W.b9,WorkerGlobalScope:W.b9,Attr:W.cP,CSSRuleList:W.fx,ClientRect:W.dO,DOMRect:W.dO,NamedNodeMap:W.e_,MozNamedAttrMap:W.e_,IDBKeyRange:P.dw,SVGScriptElement:P.cH,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,Selection:true,SQLError:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:true,File:true,HTMLBodyElement:true,HTMLButtonElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSStyleSheet:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,WheelEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLOptionElement:true,PointerEvent:true,HTMLSelectElement:true,HTMLStyleElement:true,StyleSheet:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,IDBKeyRange:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})
H.at.$nativeSuperclassTag="ArrayBufferView"
H.e0.$nativeSuperclassTag="ArrayBufferView"
H.e1.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.e2.$nativeSuperclassTag="ArrayBufferView"
H.e3.$nativeSuperclassTag="ArrayBufferView"
H.aG.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.nb,[])
else U.nb([])})})()
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

(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
if(!(y.__proto__&&y.__proto__.p===z.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var x=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(x))return true}}catch(w){}return false}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b,c){"use strict"
function generateAccessor(b0,b1,b2){var g=b0.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var a0
if(g.length>1)a0=true
else a0=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a1=d&3
var a2=d>>2
var a3=f=f.substring(0,e-1)
var a4=f.indexOf(":")
if(a4>0){a3=f.substring(0,a4)
f=f.substring(a4+1)}if(a1){var a5=a1&2?"r":""
var a6=a1&1?"this":"r"
var a7="return "+a6+"."+f
var a8=b2+".prototype.g"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}if(a2){var a5=a2&2?"r,v":"v"
var a6=a2&1?"this":"r"
var a7=a6+"."+f+"=v"
var a8=b2+".prototype.s"+a3+"="
var a9="function("+a5+"){"+a7+"}"
if(a0)b1.push(a8+"$reflectable("+a9+");\n")
else b1.push(a8+a9+";\n")}}return f}function defineClass(a4,a5){var g=[]
var f="function "+a4+"("
var e="",d=""
for(var a0=0;a0<a5.length;a0++){var a1=a5[a0]
if(a1.charCodeAt(0)==48){a1=a1.substring(1)
var a2=generateAccessor(a1,g,a4)
d+="this."+a2+" = null;\n"}else{var a2=generateAccessor(a1,g,a4)
var a3="p_"+a2
f+=e
e=", "
f+=a3
d+="this."+a2+" = "+a3+";\n"}}if(supportsDirectProtoAccess)d+="this."+"$deferredAction"+"();"
f+=") {\n"+d+"}\n"
f+=a4+".builtin$cls=\""+a4+"\";\n"
f+="$desc=$collectedClasses."+a4+"[1];\n"
f+=a4+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a4+".name=\""+a4+"\";\n"
f+=g.join("")
return f}var z=supportsDirectProtoAccess?function(d,e){var g=d.prototype
g.__proto__=e.prototype
g.constructor=d
g["$is"+d.name]=d
return convertToFastObject(g)}:function(){function tmp(){}return function(a1,a2){tmp.prototype=a2.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a1.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var a0=e[d]
g[a0]=f[a0]}g["$is"+a1.name]=a1
g.constructor=a1
a1.prototype=g
return g}}()
function finishClasses(a5){var g=init.allClasses
a5.combinedConstructorFunction+="return [\n"+a5.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a5.combinedConstructorFunction)(a5.collected)
a5.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.name
var a1=a5.collected[a0]
var a2=a1[0]
a1=a1[1]
g[a0]=d
a2[a0]=d}f=null
var a3=init.finishedClasses
function finishClass(c2){if(a3[c2])return
a3[c2]=true
var a6=a5.pending[c2]
if(a6&&a6.indexOf("+")>0){var a7=a6.split("+")
a6=a7[0]
var a8=a7[1]
finishClass(a8)
var a9=g[a8]
var b0=a9.prototype
var b1=g[c2].prototype
var b2=Object.keys(b0)
for(var b3=0;b3<b2.length;b3++){var b4=b2[b3]
if(!u.call(b1,b4))b1[b4]=b0[b4]}}if(!a6||typeof a6!="string"){var b5=g[c2]
var b6=b5.prototype
b6.constructor=b5
b6.$isc=b5
b6.$deferredAction=function(){}
return}finishClass(a6)
var b7=g[a6]
if(!b7)b7=existingIsolateProperties[a6]
var b5=g[c2]
var b6=z(b5,b7)
if(b0)b6.$deferredAction=mixinDeferredActionHelper(b0,b6)
if(Object.prototype.hasOwnProperty.call(b6,"%")){var b8=b6["%"].split(";")
if(b8[0]){var b9=b8[0].split("|")
for(var b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=true}}if(b8[1]){b9=b8[1].split("|")
if(b8[2]){var c0=b8[2].split("|")
for(var b3=0;b3<c0.length;b3++){var c1=g[c0[b3]]
c1.$nativeSuperclassTag=b9[0]}}for(b3=0;b3<b9.length;b3++){init.interceptorsByTag[b9[b3]]=b5
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isD)b6.$deferredAction()}var a4=Object.keys(a5.pending)
for(var e=0;e<a4.length;e++)finishClass(a4[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var a0=d.charCodeAt(0)
var a1
if(d!=="^"&&d!=="$reflectable"&&a0!==43&&a0!==42&&(a1=g[d])!=null&&a1.constructor===Array&&d!=="<>")addStubs(g,a1,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function mixinDeferredActionHelper(d,e){var g
if(e.hasOwnProperty("$deferredAction"))g=e.$deferredAction
return function foo(){if(!supportsDirectProtoAccess)return
var f=this
while(!f.hasOwnProperty("$deferredAction"))f=f.__proto__
if(g)f.$deferredAction=g
else{delete f.$deferredAction
convertToFastObject(f)}d.$deferredAction()
f.$deferredAction()}}function processClassData(b2,b3,b4){b3=convertToSlowObject(b3)
var g
var f=Object.keys(b3)
var e=false
var d=supportsDirectProtoAccess&&b2!="c"
for(var a0=0;a0<f.length;a0++){var a1=f[a0]
var a2=a1.charCodeAt(0)
if(a1==="q"){processStatics(init.statics[b2]=b3.q,b4)
delete b3.q}else if(a2===43){w[g]=a1.substring(1)
var a3=b3[a1]
if(a3>0)b3[g].$reflectable=a3}else if(a2===42){b3[g].$D=b3[a1]
var a4=b3.$methodsWithOptionalArguments
if(!a4)b3.$methodsWithOptionalArguments=a4={}
a4[a1]=g}else{var a5=b3[a1]
if(a1!=="^"&&a5!=null&&a5.constructor===Array&&a1!=="<>")if(d)e=true
else addStubs(b3,a5,a1,false,[])
else g=a1}}if(e)b3.$deferredAction=finishAddStubsHelper
var a6=b3["^"],a7,a8,a9=a6
var b0=a9.split(";")
a9=b0[1]?b0[1].split(","):[]
a8=b0[0]
a7=a8.split(":")
if(a7.length==2){a8=a7[0]
var b1=a7[1]
if(b1)b3.$S=function(b5){return function(){return init.types[b5]}}(b1)}if(a8)b4.pending[b2]=a8
b4.combinedConstructorFunction+=defineClass(b2,a9)
b4.constructorsList.push(b2)
b4.collected[b2]=[m,b3]
i.push(b2)}function processStatics(a4,a5){var g=Object.keys(a4)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a4[e]
var a0=e.charCodeAt(0)
var a1
if(a0===43){v[a1]=e.substring(1)
var a2=a4[e]
if(a2>0)a4[a1].$reflectable=a2
if(d&&d.length)init.typeInformation[a1]=d}else if(a0===42){m[a1].$D=d
var a3=a4.$methodsWithOptionalArguments
if(!a3)a4.$methodsWithOptionalArguments=a3={}
a3[e]=a1}else if(typeof d==="function"){m[a1=e]=d
h.push(e)}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a1=e
processClassData(e,d,a5)}}}function addStubs(c0,c1,c2,c3,c4){var g=0,f=g,e=c1[g],d
if(typeof e=="string")d=c1[++g]
else{d=e
e=c2}if(typeof d=="number"){f=d
d=c1[++g]}c0[c2]=c0[e]=d
var a0=[d]
d.$stubName=c2
c4.push(c2)
for(g++;g<c1.length;g++){d=c1[g]
if(typeof d!="function")break
if(!c3)d.$stubName=c1[++g]
a0.push(d)
if(d.$stubName){c0[d.$stubName]=d
c4.push(d.$stubName)}}for(var a1=0;a1<a0.length;g++,a1++)a0[a1].$callName=c1[g]
var a2=c1[g]
c1=c1.slice(++g)
var a3=c1[0]
var a4=(a3&1)===1
a3=a3>>1
var a5=a3>>1
var a6=(a3&1)===1
var a7=a3===3
var a8=a3===1
var a9=c1[1]
var b0=a9>>1
var b1=(a9&1)===1
var b2=a5+b0
var b3=c1[2]
if(typeof b3=="number")c1[2]=b3+c
if(b>0){var b4=3
for(var a1=0;a1<b0;a1++){if(typeof c1[b4]=="number")c1[b4]=c1[b4]+b
b4++}for(var a1=0;a1<b2;a1++){c1[b4]=c1[b4]+b
b4++}}var b5=2*b0+a5+3
if(a2){d=tearOff(a0,f,c1,c3,c2,a4)
c0[c2].$getter=d
d.$getterStub=true
if(c3)c4.push(a2)
c0[a2]=d
a0.push(d)
d.$stubName=a2
d.$callName=null}var b6=c1.length>b5
if(b6){a0[0].$reflectable=1
a0[0].$reflectionInfo=c1
for(var a1=1;a1<a0.length;a1++){a0[a1].$reflectable=2
a0[a1].$reflectionInfo=c1}var b7=c3?init.mangledGlobalNames:init.mangledNames
var b8=c1[b5]
var b9=b8
if(a2)b7[a2]=b9
if(a7)b9+="="
else if(!a8)b9+=":"+(a5+b0)
b7[c2]=b9
a0[0].$reflectionName=b9
for(var a1=b5+1;a1<c1.length;a1++)c1[a1]=c1[a1]+b
a0[0].$metadataIndex=b5+1
if(b0)c0[b8+"*"]=a0[f]}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(receiver) {"+"if (c === null) c = "+"H.d3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d3"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g=null
return a0?function(){if(g===null)g=H.d3(this,d,e,f,true,false,a1).prototype
return g}:tearOffGetter(d,e,f,a1,a2)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cc=function(){}
var dart=[["","",,H,{"^":"",lv:{"^":"c;a"}}],["","",,J,{"^":"",
d8:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bO:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d7==null){H.kD()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.f(P.en("Return interceptor for "+H.b(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cy()]
if(v!=null)return v
v=H.kK(a)
if(v!=null)return v
if(typeof a=="function")return C.K
y=Object.getPrototypeOf(a)
if(y==null)return C.v
if(y===Object.prototype)return C.v
if(typeof w=="function"){Object.defineProperty(w,$.$get$cy(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
D:{"^":"c;",
S:function(a,b){return a===b},
gC:function(a){return H.aX(a)},
m:["dc",function(a){return"Instance of '"+H.bq(a)+"'"}],
bA:["da",function(a,b){H.d(b,"$iscw")
throw H.f(P.dM(a,b.gcK(),b.gcP(),b.gcL(),null))}],
"%":"CanvasGradient|CanvasPattern|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|SQLError|TextMetrics|WebGL2RenderingContext|WebGLRenderingContext"},
hy:{"^":"D;",
m:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$isL:1},
hA:{"^":"D;",
S:function(a,b){return null==b},
m:function(a){return"null"},
gC:function(a){return 0},
bA:function(a,b){return this.da(a,H.d(b,"$iscw"))},
$isA:1},
cz:{"^":"D;",
gC:function(a){return 0},
m:["de",function(a){return String(a)}]},
i5:{"^":"cz;"},
bK:{"^":"cz;"},
bm:{"^":"cz;",
m:function(a){var z=a[$.$get$bY()]
if(z==null)return this.de(a)
return"JavaScript function for "+H.b(J.C(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isaI:1},
bj:{"^":"D;$ti",
l:function(a,b){H.n(b,H.i(a,0))
if(!!a.fixed$length)H.P(P.E("add"))
a.push(b)},
a1:function(a,b){var z
if(!!a.fixed$length)H.P(P.E("removeAt"))
z=a.length
if(b>=z)throw H.f(P.bH(b,null,null))
return a.splice(b,1)[0]},
I:function(a,b){var z
if(!!a.fixed$length)H.P(P.E("remove"))
for(z=0;z<a.length;++z)if(J.am(a[z],b)){a.splice(z,1)
return!0}return!1},
U:function(a,b){var z
H.x(b,"$iso",[H.i(a,0)],"$aso")
if(!!a.fixed$length)H.P(P.E("addAll"))
for(z=J.B(b);z.n();)a.push(z.gp())},
D:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.i(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.f(P.ap(a))}},
cJ:function(a,b,c){var z=H.i(a,0)
return new H.c3(a,H.h(b,{func:1,ret:c,args:[z]}),[z,c])},
L:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
cr:function(a,b){var z,y
H.h(b,{func:1,ret:P.L,args:[H.i(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.f(P.ap(a))}return!1},
F:function(a,b){var z
for(z=0;z<a.length;++z)if(J.am(a[z],b))return!0
return!1},
gO:function(a){return a.length===0},
gcH:function(a){return a.length!==0},
m:function(a){return P.cx(a,"[","]")},
gA:function(a){return new J.bA(a,a.length,0,[H.i(a,0)])},
gC:function(a){return H.aX(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.P(P.E("set length"))
if(b<0)throw H.f(P.aN(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.t(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.av(a,b))
if(b>=a.length||b<0)throw H.f(H.av(a,b))
return a[b]},
k:function(a,b,c){H.t(b)
H.n(c,H.i(a,0))
if(!!a.immutable$list)H.P(P.E("indexed set"))
if(b>=a.length||b<0)throw H.f(H.av(a,b))
a[b]=c},
$isz:1,
$iso:1,
$isq:1,
q:{
hx:function(a,b){return J.c0(H.w(a,[b]))},
c0:function(a){H.a2(a)
a.fixed$length=Array
return a}}},
lu:{"^":"bj;$ti"},
bA:{"^":"c;a,b,c,0d,$ti",
sc5:function(a){this.d=H.n(a,H.i(this,0))},
gp:function(){return this.d},
n:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.f(H.H(z))
x=this.c
if(x>=y){this.sc5(null)
return!1}this.sc5(z[x]);++this.c
return!0},
$isai:1},
bk:{"^":"D;",
geD:function(a){return a===0?1/a<0:a<0},
bE:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.f(P.E(""+a+".toInt()"))},
cR:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(P.E(""+a+".round()"))},
eR:function(a,b){var z
if(b>20)throw H.f(P.aN(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.geD(a))return"-"+z
return z},
m:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
i:function(a,b){H.az(b)
if(typeof b!=="number")throw H.f(H.a1(b))
return a+b},
K:function(a,b){H.az(b)
if(typeof b!=="number")throw H.f(H.a1(b))
return a-b},
w:function(a,b){H.az(b)
if(typeof b!=="number")throw H.f(H.a1(b))
return a*b},
eY:function(a,b){return(a|0)===a?a/b|0:this.e9(a,b)},
e9:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.f(P.E("Result of truncating division is "+H.b(z)+": "+H.b(a)+" ~/ "+b))},
bu:function(a,b){var z
if(a>0)z=this.e7(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
e7:function(a,b){return b>31?0:a>>>b},
ai:function(a,b){if(typeof b!=="number")throw H.f(H.a1(b))
return a<b},
bL:function(a,b){if(typeof b!=="number")throw H.f(H.a1(b))
return a>b},
$isaf:1,
$isV:1},
dE:{"^":"bk;",$isaU:1},
dD:{"^":"bk;"},
bl:{"^":"D;",
cA:function(a,b){if(b<0)throw H.f(H.av(a,b))
if(b>=a.length)H.P(H.av(a,b))
return a.charCodeAt(b)},
aE:function(a,b){if(b>=a.length)throw H.f(H.av(a,b))
return a.charCodeAt(b)},
i:function(a,b){H.m(b)
if(typeof b!=="string")throw H.f(P.ck(b,null,null))
return a+b},
ev:function(a,b){var z,y
z=b.length
y=a.length
if(z>y)return!1
return b===this.bO(a,y-z)},
d7:function(a,b,c){var z
if(c>a.length)throw H.f(P.aN(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
d6:function(a,b){return this.d7(a,b,0)},
aa:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.bH(b,null,null))
if(b>c)throw H.f(P.bH(b,null,null))
if(c>a.length)throw H.f(P.bH(c,null,null))
return a.substring(b,c)},
bO:function(a,b){return this.aa(a,b,null)},
eQ:function(a){return a.toLowerCase()},
cY:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aE(z,0)===133){x=J.hB(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.cA(z,w)===133?J.hC(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
w:function(a,b){var z,y
H.t(b)
if(typeof b!=="number")return H.e(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.f(C.y)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
m:function(a){return a},
gC:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){H.t(b)
if(b>=a.length||!1)throw H.f(H.av(a,b))
return a[b]},
$isdT:1,
$isk:1,
q:{
dF:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hB:function(a,b){var z,y
for(z=a.length;b<z;){y=C.f.aE(a,b)
if(y!==32&&y!==13&&!J.dF(y))break;++b}return b},
hC:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.f.cA(a,z)
if(y!==32&&y!==13&&!J.dF(y))break}return b}}}}],["","",,H,{"^":"",
eI:function(a){if(a<0)H.P(P.aN(a,0,null,"count",null))
return a},
hv:function(){return new P.br("No element")},
hw:function(){return new P.br("Too many elements")},
z:{"^":"o;"},
bo:{"^":"z;$ti",
gA:function(a){return new H.cF(this,this.gj(this),0,[H.aw(this,"bo",0)])},
gO:function(a){return this.gj(this)===0},
bI:function(a,b){return this.dd(0,H.h(b,{func:1,ret:P.L,args:[H.aw(this,"bo",0)]}))}},
cF:{"^":"c;a,b,c,0d,$ti",
sal:function(a){this.d=H.n(a,H.i(this,0))},
gp:function(){return this.d},
n:function(){var z,y,x,w
z=this.a
y=J.O(z)
x=y.gj(z)
if(this.b!==x)throw H.f(P.ap(z))
w=this.c
if(w>=x){this.sal(null)
return!1}this.sal(y.L(z,w));++this.c
return!0},
$isai:1},
cH:{"^":"o;a,b,$ti",
gA:function(a){return new H.dL(J.B(this.a),this.b,this.$ti)},
gj:function(a){return J.ab(this.a)},
L:function(a,b){return this.b.$1(J.bz(this.a,b))},
$aso:function(a,b){return[b]},
q:{
hQ:function(a,b,c,d){H.x(a,"$iso",[c],"$aso")
H.h(b,{func:1,ret:d,args:[c]})
if(!!J.l(a).$isz)return new H.fU(a,b,[c,d])
return new H.cH(a,b,[c,d])}}},
fU:{"^":"cH;a,b,$ti",$isz:1,
$asz:function(a,b){return[b]}},
dL:{"^":"ai;0a,b,c,$ti",
sal:function(a){this.a=H.n(a,H.i(this,1))},
n:function(){var z=this.b
if(z.n()){this.sal(this.c.$1(z.gp()))
return!0}this.sal(null)
return!1},
gp:function(){return this.a},
$asai:function(a,b){return[b]}},
c3:{"^":"bo;a,b,$ti",
gj:function(a){return J.ab(this.a)},
L:function(a,b){return this.b.$1(J.bz(this.a,b))},
$asz:function(a,b){return[b]},
$asbo:function(a,b){return[b]},
$aso:function(a,b){return[b]}},
cN:{"^":"o;a,b,$ti",
gA:function(a){return new H.iS(J.B(this.a),this.b,this.$ti)}},
iS:{"^":"ai;a,b,$ti",
n:function(){var z,y
for(z=this.a,y=this.b;z.n();)if(y.$1(z.gp()))return!0
return!1},
gp:function(){return this.a.gp()}},
e5:{"^":"o;a,b,$ti",
gA:function(a){return new H.iF(J.B(this.a),this.b,this.$ti)},
q:{
iE:function(a,b,c){H.x(a,"$iso",[c],"$aso")
if(b<0)throw H.f(P.aE(b))
if(!!J.l(a).$isz)return new H.fW(a,b,[c])
return new H.e5(a,b,[c])}}},
fW:{"^":"e5;a,b,$ti",
gj:function(a){var z,y
z=J.ab(this.a)
y=this.b
if(z>y)return y
return z},
$isz:1},
iF:{"^":"ai;a,b,$ti",
n:function(){if(--this.b>=0)return this.a.n()
this.b=-1
return!1},
gp:function(){if(this.b<0)return
return this.a.gp()}},
e0:{"^":"o;a,b,$ti",
gA:function(a){return new H.iy(J.B(this.a),this.b,this.$ti)},
q:{
ix:function(a,b,c){H.x(a,"$iso",[c],"$aso")
if(!!J.l(a).$isz)return new H.fV(a,H.eI(b),[c])
return new H.e0(a,H.eI(b),[c])}}},
fV:{"^":"e0;a,b,$ti",
gj:function(a){var z=J.ab(this.a)-this.b
if(z>=0)return z
return 0},
$isz:1},
iy:{"^":"ai;a,b,$ti",
n:function(){var z,y
for(z=this.a,y=0;y<this.b;++y)z.n()
this.b=0
return z.n()},
gp:function(){return this.a.gp()}},
bD:{"^":"c;$ti",
sj:function(a,b){throw H.f(P.E("Cannot change the length of a fixed-length list"))},
l:function(a,b){H.n(b,H.ax(this,a,"bD",0))
throw H.f(P.E("Cannot add to a fixed-length list"))},
a1:function(a,b){throw H.f(P.E("Cannot remove from a fixed-length list"))}},
cL:{"^":"c;a",
gC:function(a){var z=this._hashCode
if(z!=null)return z
z=536870911&664597*J.aC(this.a)
this._hashCode=z
return z},
m:function(a){return'Symbol("'+H.b(this.a)+'")'},
S:function(a,b){if(b==null)return!1
return b instanceof H.cL&&this.a==b.a},
$isaY:1}}],["","",,H,{"^":"",
f2:function(a){var z=J.l(a)
return!!z.$isdm||!!z.$isT||!!z.$isdI||!!z.$isdC||!!z.$isv||!!z.$iscO||!!z.$isep}}],["","",,H,{"^":"",
fJ:function(){throw H.f(P.E("Cannot modify unmodifiable Map"))},
b9:function(a){var z,y
z=H.m(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kw:[function(a){return init.types[H.t(a)]},null,null,4,0,null,12],
kH:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.l(a).$isas},
b:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.C(a)
if(typeof z!=="string")throw H.f(H.a1(a))
return z},
aX:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
dV:function(a,b){var z,y
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.a(z,3)
y=H.m(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
ii:function(a){var z,y
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=C.f.cY(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bq:function(a){return H.i7(a)+H.d0(H.aT(a),0,null)},
i7:function(a){var z,y,x,w,v,u,t,s,r
z=J.l(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.C||!!z.$isbK){u=C.r(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.b9(w.length>1&&C.f.aE(w,0)===36?C.f.bO(w,1):w)},
a3:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bu(z,10))>>>0,56320|z&1023)}throw H.f(P.aN(a,0,1114111,null,null))},
aM:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ih:function(a){var z=H.aM(a).getFullYear()+0
return z},
ie:function(a){var z=H.aM(a).getMonth()+1
return z},
ia:function(a){var z=H.aM(a).getDate()+0
return z},
ib:function(a){var z=H.aM(a).getHours()+0
return z},
id:function(a){var z=H.aM(a).getMinutes()+0
return z},
ig:function(a){var z=H.aM(a).getSeconds()+0
return z},
ic:function(a){var z=H.aM(a).getMilliseconds()+0
return z},
dU:function(a,b,c){var z,y,x
z={}
H.x(c,"$isG",[P.k,null],"$asG")
z.a=0
y=[]
x=[]
z.a=b.length
C.a.U(y,b)
z.b=""
if(c!=null&&c.a!==0)c.D(0,new H.i9(z,x,y))
return J.fn(a,new H.hz(C.S,""+"$"+z.a+z.b,0,y,x,0))},
i8:function(a,b){var z,y
z=b instanceof Array?b:P.bp(b,!0,null)
y=z.length
if(y===0){if(!!a.$0)return a.$0()}else if(y===1){if(!!a.$1)return a.$1(z[0])}else if(y===2){if(!!a.$2)return a.$2(z[0],z[1])}else if(y===3){if(!!a.$3)return a.$3(z[0],z[1],z[2])}else if(y===4){if(!!a.$4)return a.$4(z[0],z[1],z[2],z[3])}else if(y===5)if(!!a.$5)return a.$5(z[0],z[1],z[2],z[3],z[4])
return H.i6(a,z)},
i6:function(a,b){var z,y,x,w,v,u
z=b.length
y=a[""+"$"+z]
if(y==null){y=J.l(a)["call*"]
if(y==null)return H.dU(a,b,null)
x=H.dX(y)
w=x.d
v=w+x.e
if(x.f||w>z||v<z)return H.dU(a,b,null)
b=P.bp(b,!0,null)
for(u=z;u<v;++u)C.a.l(b,init.metadata[x.es(0,u)])}return y.apply(a,b)},
e:function(a){throw H.f(H.a1(a))},
a:function(a,b){if(a==null)J.ab(a)
throw H.f(H.av(a,b))},
av:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aD(!0,b,"index",null)
z=H.t(J.ab(a))
if(!(b<0)){if(typeof z!=="number")return H.e(z)
y=b>=z}else y=!0
if(y)return P.bi(b,a,"index",null,z)
return P.bH(b,"index",null)},
a1:function(a){return new P.aD(!0,a,null,null)},
f_:function(a){if(typeof a!=="number")throw H.f(H.a1(a))
return a},
f:function(a){var z
if(a==null)a=new P.dP()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fa})
z.name=""}else z.toString=H.fa
return z},
fa:[function(){return J.C(this.dartException)},null,null,0,0,null],
P:function(a){throw H.f(a)},
H:function(a){throw H.f(P.ap(a))},
Q:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.kW(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bu(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cC(H.b(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dO(H.b(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$ea()
u=$.$get$eb()
t=$.$get$ec()
s=$.$get$ed()
r=$.$get$eh()
q=$.$get$ei()
p=$.$get$ef()
$.$get$ee()
o=$.$get$ek()
n=$.$get$ej()
m=v.a0(y)
if(m!=null)return z.$1(H.cC(H.m(y),m))
else{m=u.a0(y)
if(m!=null){m.method="call"
return z.$1(H.cC(H.m(y),m))}else{m=t.a0(y)
if(m==null){m=s.a0(y)
if(m==null){m=r.a0(y)
if(m==null){m=q.a0(y)
if(m==null){m=p.a0(y)
if(m==null){m=s.a0(y)
if(m==null){m=o.a0(y)
if(m==null){m=n.a0(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dO(H.m(y),m))}}return z.$1(new H.iP(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.e2()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.aD(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.e2()
return a},
b7:function(a){var z
if(a==null)return new H.eF(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eF(a)},
kt:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.k(0,a[y],a[x])}return b},
kG:[function(a,b,c,d,e,f){H.d(a,"$isaI")
switch(H.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.f(new P.jf("Unsupported number of arguments for wrapped closure"))},null,null,24,0,null,13,14,15,16,17,18],
b5:function(a,b){var z
H.t(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kG)
a.$identity=z
return z},
fC:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=b[0]
y=z.$callName
if(!!J.l(d).$isq){z.$reflectionInfo=d
x=H.dX(z).r}else x=d
w=e?Object.create(new H.iz().constructor.prototype):Object.create(new H.cm(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.ag
if(typeof u!=="number")return u.i()
$.ag=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=H.ds(a,z,f)
t.$reflectionInfo=d}else{w.$static_name=g
t=z}if(typeof x=="number")s=function(h,i){return function(){return h(i)}}(H.kw,x)
else if(typeof x=="function")if(e)s=x
else{r=f?H.dr:H.cn
s=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,r)}else throw H.f("Error in reflectionInfo.")
w.$S=s
w[y]=t
for(q=t,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ds(a,o,f)
w[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}w["call*"]=q
w.$R=z.$R
w.$D=z.$D
return v},
fz:function(a,b,c,d){var z=H.cn
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ds:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fB(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fz(y,!w,z,b)
if(y===0){w=$.ag
if(typeof w!=="number")return w.i()
$.ag=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.be
if(v==null){v=H.bU("self")
$.be=v}return new Function(w+H.b(v)+";return "+u+"."+H.b(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ag
if(typeof w!=="number")return w.i()
$.ag=w+1
t+=w
w="return function("+t+"){return this."
v=$.be
if(v==null){v=H.bU("self")
$.be=v}return new Function(w+H.b(v)+"."+H.b(z)+"("+t+");}")()},
fA:function(a,b,c,d){var z,y
z=H.cn
y=H.dr
switch(b?-1:a){case 0:throw H.f(H.it("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fB:function(a,b){var z,y,x,w,v,u,t,s
z=$.be
if(z==null){z=H.bU("self")
$.be=z}y=$.dq
if(y==null){y=H.bU("receiver")
$.dq=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fA(w,!u,x,b)
if(w===1){z="return function(){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+");"
y=$.ag
if(typeof y!=="number")return y.i()
$.ag=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.b(z)+"."+H.b(x)+"(this."+H.b(y)+", "+s+");"
y=$.ag
if(typeof y!=="number")return y.i()
$.ag=y+1
return new Function(z+y+"}")()},
d3:function(a,b,c,d,e,f,g){return H.fC(a,b,H.t(c),d,!!e,!!f,g)},
m:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.ad(a,"String"))},
kr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ad(a,"double"))},
az:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ad(a,"num"))},
d1:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.ad(a,"bool"))},
t:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.ad(a,"int"))},
f7:function(a,b){throw H.f(H.ad(a,H.b9(H.m(b).substring(3))))},
kT:function(a,b){throw H.f(H.fy(a,H.b9(H.m(b).substring(3))))},
d:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.l(a)[b])return a
H.f7(a,b)},
ce:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.l(a)[b]
else z=!0
if(z)return a
H.kT(a,b)},
a2:function(a){if(a==null)return a
if(!!J.l(a).$isq)return a
throw H.f(H.ad(a,"List<dynamic>"))},
X:function(a,b){var z
if(a==null)return a
z=J.l(a)
if(!!z.$isq)return a
if(z[b])return a
H.f7(a,b)},
f0:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.t(z)]
else return a.$S()}return},
b6:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.f0(J.l(a))
if(z==null)return!1
return H.eO(z,null,b,null)},
h:function(a,b){var z,y
if(a==null)return a
if($.cY)return a
$.cY=!0
try{if(H.b6(a,b))return a
z=H.by(b)
y=H.ad(a,z)
throw H.f(y)}finally{$.cY=!1}},
cd:function(a,b){if(a!=null&&!H.d2(a,b))H.P(H.ad(a,H.by(b)))
return a},
eT:function(a){var z,y
z=J.l(a)
if(!!z.$isj){y=H.f0(z)
if(y!=null)return H.by(y)
return"Closure"}return H.bq(a)},
kU:function(a){throw H.f(new P.fN(H.m(a)))},
d6:function(a){return init.getIsolateTag(a)},
w:function(a,b){a.$ti=b
return a},
aT:function(a){if(a==null)return
return a.$ti},
m3:function(a,b,c){return H.b8(a["$as"+H.b(c)],H.aT(b))},
ax:function(a,b,c,d){var z
H.m(c)
H.t(d)
z=H.b8(a["$as"+H.b(c)],H.aT(b))
return z==null?null:z[d]},
aw:function(a,b,c){var z
H.m(b)
H.t(c)
z=H.b8(a["$as"+H.b(b)],H.aT(a))
return z==null?null:z[c]},
i:function(a,b){var z
H.t(b)
z=H.aT(a)
return z==null?null:z[b]},
by:function(a){return H.aR(a,null)},
aR:function(a,b){var z,y
H.x(b,"$isq",[P.k],"$asq")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.b9(a[0].builtin$cls)+H.d0(a,1,b)
if(typeof a=="function")return H.b9(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.t(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.a(b,y)
return H.b(b[y])}if('func' in a)return H.ka(a,b)
if('futureOr' in a)return"FutureOr<"+H.aR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ka:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.x(b,"$isq",z,"$asq")
if("bounds" in a){y=a.bounds
if(b==null){b=H.w([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.a(b,r)
t=C.f.i(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aR(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aR(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aR(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aR(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.ks(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.m(z[l])
n=n+m+H.aR(i[h],b)+(" "+H.b(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d0:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isq",[P.k],"$asq")
if(a==null)return""
z=new P.aP("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aR(u,c)}return"<"+z.m(0)+">"},
b8:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aS:function(a,b,c,d){var z,y
H.m(b)
H.a2(c)
H.m(d)
if(a==null)return!1
z=H.aT(a)
y=J.l(a)
if(y[b]==null)return!1
return H.eX(H.b8(y[d],z),null,c,null)},
x:function(a,b,c,d){H.m(b)
H.a2(c)
H.m(d)
if(a==null)return a
if(H.aS(a,b,c,d))return a
throw H.f(H.ad(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.b9(b.substring(3))+H.d0(c,0,null),init.mangledGlobalNames)))},
aa:function(a,b,c,d,e){H.m(c)
H.m(d)
H.m(e)
if(!H.a5(a,null,b,null))H.kV("TypeError: "+H.b(c)+H.by(a)+H.b(d)+H.by(b)+H.b(e))},
kV:function(a){throw H.f(new H.el(H.m(a)))},
eX:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a5(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a5(a[y],b,c[y],d))return!1
return!0},
m1:function(a,b,c){return a.apply(b,H.b8(J.l(b)["$as"+H.b(c)],H.aT(b)))},
f3:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="A"||a===-1||a===-2||H.f3(z)}return!1},
d2:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="A"||b===-1||b===-2||H.f3(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.d2(a,"type" in b?b.type:null))return!0
if('func' in b)return H.b6(a,b)}z=J.l(a).constructor
y=H.aT(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a5(z,null,b,null)},
n:function(a,b){if(a!=null&&!H.d2(a,b))throw H.f(H.ad(a,H.by(b)))
return a},
a5:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a5(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="A")return!0
if('func' in c)return H.eO(a,b,c,d)
if('func' in a)return c.builtin$cls==="aI"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a5("type" in a?a.type:null,b,x,d)
else if(H.a5(a,b,x,d))return!0
else{if(!('$is'+"ah" in y.prototype))return!1
w=y.prototype["$as"+"ah"]
v=H.b8(w,z?a.slice(1):null)
return H.a5(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.eX(H.b8(r,z),b,u,d)},
eO:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a5(a.ret,b,c.ret,d))return!1
x=a.args
w=c.args
v=a.opt
u=c.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
for(p=0;p<t;++p)if(!H.a5(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a5(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a5(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.kM(m,b,l,d)},
kM:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a5(c[w],d,a[w],b))return!1}return!0},
m2:function(a,b,c){Object.defineProperty(a,H.m(b),{value:c,enumerable:false,writable:true,configurable:true})},
kK:function(a){var z,y,x,w,v,u
z=H.m($.f1.$1(a))
y=$.cb[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cf[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.m($.eW.$2(a,z))
if(z!=null){y=$.cb[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cf[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.cg(x)
$.cb[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cf[z]=x
return x}if(v==="-"){u=H.cg(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.f6(a,x)
if(v==="*")throw H.f(P.en(z))
if(init.leafTags[z]===true){u=H.cg(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.f6(a,x)},
f6:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.d8(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
cg:function(a){return J.d8(a,!1,null,!!a.$isas)},
kL:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.cg(z)
else return J.d8(z,c,null,null)},
kD:function(){if(!0===$.d7)return
$.d7=!0
H.kE()},
kE:function(){var z,y,x,w,v,u,t,s
$.cb=Object.create(null)
$.cf=Object.create(null)
H.kz()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.f8.$1(v)
if(u!=null){t=H.kL(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kz:function(){var z,y,x,w,v,u,t
z=C.H()
z=H.b4(C.E,H.b4(C.J,H.b4(C.q,H.b4(C.q,H.b4(C.I,H.b4(C.F,H.b4(C.G(C.r),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.f1=new H.kA(v)
$.eW=new H.kB(u)
$.f8=new H.kC(t)},
b4:function(a,b){return a(b)||b},
d9:function(a,b,c){var z,y,x
if(typeof c!=="string")H.P(H.a1(c))
if(b==="")if(a==="")return c
else{z=a.length
y=H.b(c)
for(x=0;x<z;++x)y=y+a[x]+H.b(c)
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fI:{"^":"iQ;a,$ti"},
fH:{"^":"c;$ti",
gO:function(a){return this.gj(this)===0},
m:function(a){return P.c2(this)},
k:function(a,b,c){H.n(b,H.i(this,0))
H.n(c,H.i(this,1))
return H.fJ()},
$isG:1},
fK:{"^":"fH;a,b,c,$ti",
gj:function(a){return this.a},
E:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.E(b))return
return this.c6(b)},
c6:function(a){return this.b[H.m(a)]},
D:function(a,b){var z,y,x,w,v
z=H.i(this,1)
H.h(b,{func:1,ret:-1,args:[H.i(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.n(this.c6(v),z))}},
gG:function(){return new H.j3(this,[H.i(this,0)])}},
j3:{"^":"o;a,$ti",
gA:function(a){var z=this.a.c
return new J.bA(z,z.length,0,[H.i(z,0)])},
gj:function(a){return this.a.c.length}},
hz:{"^":"c;a,b,c,d,e,f",
gcK:function(){var z=this.a
return z},
gcP:function(){var z,y,x,w
if(this.c===1)return C.t
z=this.d
y=z.length-this.e.length-this.f
if(y===0)return C.t
x=[]
for(w=0;w<y;++w){if(w>=z.length)return H.a(z,w)
x.push(z[w])}x.fixed$length=Array
x.immutable$list=Array
return x},
gcL:function(){var z,y,x,w,v,u,t,s,r
if(this.c!==0)return C.u
z=this.e
y=z.length
x=this.d
w=x.length-y-this.f
if(y===0)return C.u
v=P.aY
u=new H.aJ(0,0,[v,null])
for(t=0;t<y;++t){if(t>=z.length)return H.a(z,t)
s=z[t]
r=w+t
if(r<0||r>=x.length)return H.a(x,r)
u.k(0,new H.cL(s),x[r])}return new H.fI(u,[v,null])},
$iscw:1},
iq:{"^":"c;a,b,c,d,e,f,r,0x",
es:function(a,b){var z=this.d
if(typeof b!=="number")return b.ai()
if(b<z)return
return this.b[3+b-z]},
q:{
dX:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.c0(z)
y=z[0]
x=z[1]
return new H.iq(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
i9:{"^":"j:26;a,b,c",
$2:function(a,b){var z
H.m(a)
z=this.a
z.b=z.b+"$"+H.b(a)
C.a.l(this.b,a)
C.a.l(this.c,b);++z.a}},
iN:{"^":"c;a,b,c,d,e,f",
a0:function(a){var z,y,x
z=new RegExp(this.a).exec(a)
if(z==null)return
y=Object.create(null)
x=this.b
if(x!==-1)y.arguments=z[x+1]
x=this.c
if(x!==-1)y.argumentsExpr=z[x+1]
x=this.d
if(x!==-1)y.expr=z[x+1]
x=this.e
if(x!==-1)y.method=z[x+1]
x=this.f
if(x!==-1)y.receiver=z[x+1]
return y},
q:{
ak:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.w([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.iN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eg:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
hZ:{"^":"R;a,b",
m:function(a){var z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+z+"' on null"},
q:{
dO:function(a,b){return new H.hZ(a,b==null?null:b.method)}}},
hG:{"^":"R;a,b,c",
m:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.b(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.b(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.b(this.a)+")"},
q:{
cC:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hG(a,y,z?null:b.receiver)}}},
iP:{"^":"R;a",
m:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
kW:{"^":"j:3;a",
$1:function(a){if(!!J.l(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eF:{"^":"c;a,0b",
m:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa0:1},
j:{"^":"c;",
m:function(a){return"Closure '"+H.bq(this).trim()+"'"},
gd0:function(){return this},
$isaI:1,
gd0:function(){return this}},
e6:{"^":"j;"},
iz:{"^":"e6;",
m:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.b9(z)+"'"}},
cm:{"^":"e6;a,b,c,d",
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cm))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.aX(this.a)
else y=typeof z!=="object"?J.aC(z):H.aX(z)
return(y^H.aX(this.b))>>>0},
m:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.bq(z)+"'")},
q:{
cn:function(a){return a.a},
dr:function(a){return a.c},
bU:function(a){var z,y,x,w,v
z=new H.cm("self","target","receiver","name")
y=J.c0(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
el:{"^":"R;a",
m:function(a){return this.a},
q:{
ad:function(a,b){return new H.el("TypeError: "+H.b(P.aH(a))+": type '"+H.eT(a)+"' is not a subtype of type '"+b+"'")}}},
fx:{"^":"R;a",
m:function(a){return this.a},
q:{
fy:function(a,b){return new H.fx("CastError: "+H.b(P.aH(a))+": type '"+H.eT(a)+"' is not a subtype of type '"+b+"'")}}},
is:{"^":"R;a",
m:function(a){return"RuntimeError: "+H.b(this.a)},
q:{
it:function(a){return new H.is(a)}}},
aJ:{"^":"cG;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gO:function(a){return this.a===0},
gG:function(){return new H.bF(this,[H.i(this,0)])},
geT:function(a){var z=H.i(this,0)
return H.hQ(new H.bF(this,[z]),new H.hF(this),z,H.i(this,1))},
E:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dE(z,a)}else{y=this.ey(a)
return y}},
ey:function(a){var z=this.d
if(z==null)return!1
return this.aY(this.aG(z,J.aC(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aH(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aH(w,b)
x=y==null?null:y.b
return x}else return this.ez(b)},
ez:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aG(z,J.aC(a)&0x3ffffff)
x=this.aY(y,a)
if(x<0)return
return y[x].b},
k:function(a,b,c){var z,y,x,w,v,u
H.n(b,H.i(this,0))
H.n(c,H.i(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.bk()
this.b=z}this.bU(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bk()
this.c=y}this.bU(y,b,c)}else{x=this.d
if(x==null){x=this.bk()
this.d=x}w=J.aC(b)&0x3ffffff
v=this.aG(x,w)
if(v==null)this.bt(x,w,[this.bl(b,c)])
else{u=this.aY(v,b)
if(u>=0)v[u].b=c
else v.push(this.bl(b,c))}}},
I:function(a,b){var z=this.eA(b)
return z},
eA:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.aG(z,a.gC(a)&0x3ffffff)
x=this.aY(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.dr(w)
return w.b},
aS:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.bj()}},
D:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.i(this,0),H.i(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.f(P.ap(this))
z=z.c}},
bU:function(a,b,c){var z
H.n(b,H.i(this,0))
H.n(c,H.i(this,1))
z=this.aH(a,b)
if(z==null)this.bt(a,b,this.bl(b,c))
else z.b=c},
bj:function(){this.r=this.r+1&67108863},
bl:function(a,b){var z,y
z=new H.hL(H.n(a,H.i(this,0)),H.n(b,H.i(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bj()
return z},
dr:function(a){var z,y
z=a.d
y=a.c
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.bj()},
aY:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.am(a[y].a,b))return y
return-1},
m:function(a){return P.c2(this)},
aH:function(a,b){return a[b]},
aG:function(a,b){return a[b]},
bt:function(a,b,c){a[b]=c},
dG:function(a,b){delete a[b]},
dE:function(a,b){return this.aH(a,b)!=null},
bk:function(){var z=Object.create(null)
this.bt(z,"<non-identifier-key>",z)
this.dG(z,"<non-identifier-key>")
return z}},
hF:{"^":"j;a",
$1:[function(a){var z=this.a
return z.h(0,H.n(a,H.i(z,0)))},null,null,4,0,null,19,"call"],
$S:function(){var z=this.a
return{func:1,ret:H.i(z,1),args:[H.i(z,0)]}}},
hL:{"^":"c;a,b,0c,0d"},
bF:{"^":"z;a,$ti",
gj:function(a){return this.a.a},
gO:function(a){return this.a.a===0},
gA:function(a){var z,y
z=this.a
y=new H.hM(z,z.r,this.$ti)
y.c=z.e
return y},
F:function(a,b){return this.a.E(b)}},
hM:{"^":"c;a,b,0c,0d,$ti",
sbS:function(a){this.d=H.n(a,H.i(this,0))},
gp:function(){return this.d},
n:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.ap(z))
else{z=this.c
if(z==null){this.sbS(null)
return!1}else{this.sbS(z.a)
this.c=this.c.c
return!0}}},
$isai:1},
kA:{"^":"j:3;a",
$1:function(a){return this.a(a)}},
kB:{"^":"j:30;a",
$2:function(a,b){return this.a(a,b)}},
kC:{"^":"j:36;a",
$1:function(a){return this.a(H.m(a))}},
hD:{"^":"c;a,b,0c,0d",
m:function(a){return"RegExp/"+this.a+"/"},
$isdT:1,
q:{
hE:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.f(P.bZ("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
ks:function(a){return J.hx(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
kS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
al:function(a,b,c){if(a>>>0!==a||a>=c)throw H.f(H.av(b,a))},
hS:{"^":"D;",$isem:1,"%":"DataView;ArrayBufferView;cI|eB|eC|hR|eD|eE|aL"},
cI:{"^":"hS;",
gj:function(a){return a.length},
$isas:1,
$asas:I.cc},
hR:{"^":"eC;",
h:function(a,b){H.t(b)
H.al(b,a,a.length)
return a[b]},
k:function(a,b,c){H.t(b)
H.kr(c)
H.al(b,a,a.length)
a[b]=c},
$isz:1,
$asz:function(){return[P.af]},
$asbD:function(){return[P.af]},
$asN:function(){return[P.af]},
$iso:1,
$aso:function(){return[P.af]},
$isq:1,
$asq:function(){return[P.af]},
"%":"Float32Array|Float64Array"},
aL:{"^":"eE;",
k:function(a,b,c){H.t(b)
H.t(c)
H.al(b,a,a.length)
a[b]=c},
$isz:1,
$asz:function(){return[P.aU]},
$asbD:function(){return[P.aU]},
$asN:function(){return[P.aU]},
$iso:1,
$aso:function(){return[P.aU]},
$isq:1,
$asq:function(){return[P.aU]}},
lx:{"^":"aL;",
h:function(a,b){H.t(b)
H.al(b,a,a.length)
return a[b]},
"%":"Int16Array"},
ly:{"^":"aL;",
h:function(a,b){H.t(b)
H.al(b,a,a.length)
return a[b]},
"%":"Int32Array"},
lz:{"^":"aL;",
h:function(a,b){H.t(b)
H.al(b,a,a.length)
return a[b]},
"%":"Int8Array"},
lA:{"^":"aL;",
h:function(a,b){H.t(b)
H.al(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
lB:{"^":"aL;",
h:function(a,b){H.t(b)
H.al(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
lC:{"^":"aL;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
H.al(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
lD:{"^":"aL;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
H.al(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eB:{"^":"cI+N;"},
eC:{"^":"eB+bD;"},
eD:{"^":"cI+N;"},
eE:{"^":"eD+bD;"}}],["","",,P,{"^":"",
iU:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.km()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b5(new P.iW(z),1)).observe(y,{childList:true})
return new P.iV(z,y,x)}else if(self.setImmediate!=null)return P.kn()
return P.ko()},
lQ:[function(a){self.scheduleImmediate(H.b5(new P.iX(H.h(a,{func:1,ret:-1})),0))},"$1","km",4,0,6],
lR:[function(a){self.setImmediate(H.b5(new P.iY(H.h(a,{func:1,ret:-1})),0))},"$1","kn",4,0,6],
lS:[function(a){H.h(a,{func:1,ret:-1})
P.k_(0,a)},"$1","ko",4,0,6],
kf:function(a,b){if(H.b6(a,{func:1,args:[P.c,P.a0]}))return b.cQ(a,null,P.c,P.a0)
if(H.b6(a,{func:1,args:[P.c]})){b.toString
return H.h(a,{func:1,ret:null,args:[P.c]})}throw H.f(P.ck(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
kc:function(){var z,y
for(;z=$.b2,z!=null;){$.bu=null
y=z.b
$.b2=y
if(y==null)$.bt=null
z.a.$0()}},
m0:[function(){$.cZ=!0
try{P.kc()}finally{$.bu=null
$.cZ=!1
if($.b2!=null)$.$get$cP().$1(P.eZ())}},"$0","eZ",0,0,1],
eS:function(a){var z=new P.eq(H.h(a,{func:1,ret:-1}))
if($.b2==null){$.bt=z
$.b2=z
if(!$.cZ)$.$get$cP().$1(P.eZ())}else{$.bt.b=z
$.bt=z}},
ki:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.b2
if(z==null){P.eS(a)
$.bu=$.bt
return}y=new P.eq(a)
x=$.bu
if(x==null){y.b=z
$.bu=y
$.b2=y}else{y.b=x.b
x.b=y
$.bu=y
if(y.b==null)$.bt=y}},
f9:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.F
if(C.e===y){P.b3(null,null,C.e,a)
return}y.toString
P.b3(null,null,y,H.h(y.cu(a),z))},
eR:function(a){var z,y,x,w
H.h(a,{func:1})
if(a==null)return
try{a.$0()}catch(x){z=H.Q(x)
y=H.b7(x)
w=$.F
w.toString
P.bv(null,null,w,z,H.d(y,"$isa0"))}},
kd:[function(a,b){var z=$.F
z.toString
P.bv(null,null,z,a,b)},function(a){return P.kd(a,null)},"$2","$1","kp",4,2,9],
m_:[function(){},"$0","eY",0,0,1],
bv:function(a,b,c,d,e){var z={}
z.a=d
P.ki(new P.kg(z,e))},
eP:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
eQ:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.n(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
kh:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.n(e,h)
H.n(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
b3:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.e!==c
if(z){if(z){c.toString
z=!1}else z=!0
d=!z?c.cu(d):c.ej(d,-1)}P.eS(d)},
iW:{"^":"j:14;a",
$1:[function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()},null,null,4,0,null,2,"call"]},
iV:{"^":"j:27;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
iX:{"^":"j:2;a",
$0:[function(){this.a.$0()},null,null,0,0,null,"call"]},
iY:{"^":"j:2;a",
$0:[function(){this.a.$0()},null,null,0,0,null,"call"]},
jZ:{"^":"c;a,0b,c",
dq:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b5(new P.k0(this,b),0),a)
else throw H.f(P.E("`setTimeout()` not found."))},
q:{
k_:function(a,b){var z=new P.jZ(!0,0)
z.dq(a,b)
return z}}},
k0:{"^":"j:1;a,b",
$0:[function(){var z=this.a
z.b=null
z.c=1
this.b.$0()},null,null,0,0,null,"call"]},
j_:{"^":"et;a,$ti"},
Y:{"^":"j4;dx,0dy,0fr,x,0a,0b,0c,d,e,0f,0r,$ti",
sar:function(a){this.dy=H.x(a,"$isY",this.$ti,"$asY")},
saJ:function(a){this.fr=H.x(a,"$isY",this.$ti,"$asY")},
bm:function(){},
bn:function(){}},
es:{"^":"c;ab:c<,0d,0e,$ti",
sc9:function(a){this.d=H.x(a,"$isY",this.$ti,"$asY")},
scf:function(a){this.e=H.x(a,"$isY",this.$ti,"$asY")},
gaI:function(){return this.c<4},
dJ:function(){var z=this.r
if(z!=null)return z
z=new P.a4(0,$.F,[null])
this.r=z
return z},
cn:function(a){var z,y
H.x(a,"$isY",this.$ti,"$asY")
z=a.fr
y=a.dy
if(z==null)this.sc9(y)
else z.sar(y)
if(y==null)this.scf(z)
else y.saJ(z)
a.saJ(a)
a.sar(a)},
e8:function(a,b,c,d){var z,y,x,w,v,u
z=H.i(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
if((this.c&4)!==0){if(c==null)c=P.eY()
z=new P.ja($.F,0,c,this.$ti)
z.e4()
return z}y=$.F
x=d?1:0
w=this.$ti
v=new P.Y(0,this,y,x,w)
v.dl(a,b,c,d,z)
v.saJ(v)
v.sar(v)
H.x(v,"$isY",w,"$asY")
v.dx=this.c&1
u=this.e
this.scf(v)
v.sar(null)
v.saJ(u)
if(u==null)this.sc9(v)
else u.sar(v)
z=this.d
y=this.e
if(z==null?y==null:z===y)P.eR(this.a)
return v},
dT:function(a){var z=this.$ti
a=H.x(H.x(a,"$isaj",z,"$asaj"),"$isY",z,"$asY")
if(a.dy===a)return
z=a.dx
if((z&2)!==0)a.dx=z|4
else{this.cn(a)
if((this.c&2)===0&&this.d==null)this.b6()}return},
b5:["di",function(){if((this.c&4)!==0)return new P.br("Cannot add new events after calling close")
return new P.br("Cannot add new events while doing an addStream")}],
l:[function(a,b){H.n(b,H.i(this,0))
if(!this.gaI())throw H.f(this.b5())
this.aO(b)},"$1","gec",5,0,19],
cz:function(a){var z
if((this.c&4)!==0)return this.r
if(!this.gaI())throw H.f(this.b5())
this.c|=4
z=this.dJ()
this.au()
return z},
ca:function(a){var z,y,x,w
H.h(a,{func:1,ret:-1,args:[[P.aQ,H.i(this,0)]]})
z=this.c
if((z&2)!==0)throw H.f(P.bs("Cannot fire new event. Controller is already firing an event"))
y=this.d
if(y==null)return
x=z&1
this.c=z^3
for(;y!=null;){z=y.dx
if((z&1)===x){y.dx=z|2
a.$1(y)
z=y.dx^=1
w=y.dy
if((z&4)!==0)this.cn(y)
y.dx&=4294967293
y=w}else y=y.dy}this.c&=4294967293
if(this.d==null)this.b6()},
b6:function(){if((this.c&4)!==0&&this.r.a===0)this.r.bZ(null)
P.eR(this.b)},
$ise3:1,
$islY:1,
$isb_:1},
jT:{"^":"es;a,b,c,0d,0e,0f,0r,$ti",
gaI:function(){return P.es.prototype.gaI.call(this)&&(this.c&2)===0},
b5:function(){if((this.c&2)!==0)return new P.br("Cannot fire new event. Controller is already firing an event")
return this.di()},
aO:function(a){var z
H.n(a,H.i(this,0))
z=this.d
if(z==null)return
if(z===this.e){this.c|=2
z.bY(a)
this.c&=4294967293
if(this.d==null)this.b6()
return}this.ca(new P.jU(this,a))},
au:function(){if(this.d!=null)this.ca(new P.jV(this))
else this.r.bZ(null)}},
jU:{"^":"j;a,b",
$1:function(a){H.x(a,"$isaQ",[H.i(this.a,0)],"$asaQ").bY(this.b)},
$S:function(){return{func:1,ret:P.A,args:[[P.aQ,H.i(this.a,0)]]}}},
jV:{"^":"j;a",
$1:function(a){H.x(a,"$isaQ",[H.i(this.a,0)],"$asaQ").dA()},
$S:function(){return{func:1,ret:P.A,args:[[P.aQ,H.i(this.a,0)]]}}},
j2:{"^":"c;$ti"},
jW:{"^":"j2;a,$ti"},
b0:{"^":"c;0a,b,c,d,e,$ti",
eG:function(a){if(this.c!==6)return!0
return this.b.b.bD(H.h(this.d,{func:1,ret:P.L,args:[P.c]}),a.a,P.L,P.c)},
ex:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.i(this,1)}
w=this.b.b
if(H.b6(z,{func:1,args:[P.c,P.a0]}))return H.cd(w.eN(z,a.a,a.b,null,y,P.a0),x)
else return H.cd(w.bD(H.h(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
a4:{"^":"c;ab:a<,b,0e1:c<,$ti",
gdO:function(){return this.a===8},
cW:function(a,b,c){var z,y,x,w
z=H.i(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.e){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kf(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a4(0,$.F,[c])
w=b==null?1:3
this.bV(new P.b0(x,w,a,b,[z,c]))
return x},
cV:function(a,b){return this.cW(a,null,b)},
e6:function(a){H.n(a,H.i(this,0))
this.a=4
this.c=a},
bV:function(a){var z,y
z=this.a
if(z<=1){a.a=H.d(this.c,"$isb0")
this.c=a}else{if(z===2){y=H.d(this.c,"$isa4")
z=y.a
if(z<4){y.bV(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.b3(null,null,z,H.h(new P.jg(this,a),{func:1,ret:-1}))}},
ck:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.d(this.c,"$isb0")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.d(this.c,"$isa4")
y=u.a
if(y<4){u.ck(a)
return}this.a=y
this.c=u.c}z.a=this.aN(a)
y=this.b
y.toString
P.b3(null,null,y,H.h(new P.jm(z,this),{func:1,ret:-1}))}},
aK:function(){var z=H.d(this.c,"$isb0")
this.c=null
return this.aN(z)},
aN:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
ba:function(a){var z,y,x
z=H.i(this,0)
H.cd(a,{futureOr:1,type:z})
y=this.$ti
if(H.aS(a,"$isah",y,"$asah"))if(H.aS(a,"$isa4",y,null))P.c7(a,this)
else P.ev(a,this)
else{x=this.aK()
H.n(a,z)
this.a=4
this.c=a
P.b1(this,x)}},
bb:[function(a,b){var z
H.d(b,"$isa0")
z=this.aK()
this.a=8
this.c=new P.a7(a,b)
P.b1(this,z)},function(a){return this.bb(a,null)},"eX","$2","$1","gdC",4,2,9,3,4,5],
bZ:function(a){var z
if(H.aS(a,"$isah",this.$ti,"$asah")){this.dv(a)
return}this.a=1
z=this.b
z.toString
P.b3(null,null,z,H.h(new P.jh(this,a),{func:1,ret:-1}))},
dv:function(a){var z=this.$ti
H.x(a,"$isah",z,"$asah")
if(H.aS(a,"$isa4",z,null)){if(a.gdO()){this.a=1
z=this.b
z.toString
P.b3(null,null,z,H.h(new P.jl(this,a),{func:1,ret:-1}))}else P.c7(a,this)
return}P.ev(a,this)},
$isah:1,
q:{
ev:function(a,b){var z,y,x
b.a=1
try{a.cW(new P.ji(b),new P.jj(b),null)}catch(x){z=H.Q(x)
y=H.b7(x)
P.f9(new P.jk(b,z,y))}},
c7:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.d(a.c,"$isa4")
if(z>=4){y=b.aK()
b.a=a.a
b.c=a.c
P.b1(b,y)}else{y=H.d(b.c,"$isb0")
b.a=2
b.c=a
a.ck(y)}},
b1:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.d(y.c,"$isa7")
y=y.b
u=v.a
t=v.b
y.toString
P.bv(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b1(z.a,b)}y=z.a
r=y.c
x.a=w
x.b=r
u=!w
if(u){t=b.c
t=(t&1)!==0||t===8}else t=!0
if(t){t=b.b
q=t.b
if(w){p=y.b
p.toString
p=p==null?q==null:p===q
if(!p)q.toString
else p=!0
p=!p}else p=!1
if(p){H.d(r,"$isa7")
y=y.b
u=r.a
t=r.b
y.toString
P.bv(null,null,y,u,t)
return}o=$.F
if(o==null?q!=null:o!==q)$.F=q
else o=null
y=b.c
if(y===8)new P.jp(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jo(x,b,r).$0()}else if((y&2)!==0)new P.jn(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.l(y).$isah){if(y.a>=4){n=H.d(t.c,"$isb0")
t.c=null
b=t.aN(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.c7(y,t)
return}}m=b.b
n=H.d(m.c,"$isb0")
m.c=null
b=m.aN(n)
y=x.a
u=x.b
if(!y){H.n(u,H.i(m,0))
m.a=4
m.c=u}else{H.d(u,"$isa7")
m.a=8
m.c=u}z.a=m
y=m}}}},
jg:{"^":"j:2;a,b",
$0:function(){P.b1(this.a,this.b)}},
jm:{"^":"j:2;a,b",
$0:function(){P.b1(this.b,this.a.a)}},
ji:{"^":"j:14;a",
$1:function(a){var z=this.a
z.a=0
z.ba(a)}},
jj:{"^":"j:37;a",
$2:[function(a,b){this.a.bb(a,H.d(b,"$isa0"))},function(a){return this.$2(a,null)},"$1",null,null,null,4,2,null,3,4,5,"call"]},
jk:{"^":"j:2;a,b,c",
$0:function(){this.a.bb(this.b,this.c)}},
jh:{"^":"j:2;a,b",
$0:function(){var z,y,x
z=this.a
y=H.n(this.b,H.i(z,0))
x=z.aK()
z.a=4
z.c=y
P.b1(z,x)}},
jl:{"^":"j:2;a,b",
$0:function(){P.c7(this.b,this.a)}},
jp:{"^":"j:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.cS(H.h(w.d,{func:1}),null)}catch(v){y=H.Q(v)
x=H.b7(v)
if(this.d){w=H.d(this.a.a.c,"$isa7").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.d(this.a.a.c,"$isa7")
else u.b=new P.a7(y,x)
u.a=!0
return}if(!!J.l(z).$isah){if(z instanceof P.a4&&z.gab()>=4){if(z.gab()===8){w=this.b
w.b=H.d(z.ge1(),"$isa7")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.cV(new P.jq(t),null)
w.a=!1}}},
jq:{"^":"j:32;a",
$1:function(a){return this.a}},
jo:{"^":"j:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
x.toString
w=H.i(x,0)
v=H.n(this.c,w)
u=H.i(x,1)
this.a.b=x.b.b.bD(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.Q(t)
y=H.b7(t)
x=this.a
x.b=new P.a7(z,y)
x.a=!0}}},
jn:{"^":"j:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.d(this.a.a.c,"$isa7")
w=this.c
if(w.eG(z)&&w.e!=null){v=this.b
v.b=w.ex(z)
v.a=!1}}catch(u){y=H.Q(u)
x=H.b7(u)
w=H.d(this.a.a.c,"$isa7")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.a7(y,x)
s.a=!0}}},
eq:{"^":"c;a,0b"},
aO:{"^":"c;$ti",
gj:function(a){var z,y
z={}
y=new P.a4(0,$.F,[P.aU])
z.a=0
this.ay(new P.iB(z,this),!0,new P.iC(z,y),y.gdC())
return y}},
iB:{"^":"j;a,b",
$1:[function(a){H.n(a,H.i(this.b,0));++this.a.a},null,null,4,0,null,2,"call"],
$S:function(){return{func:1,ret:P.A,args:[H.i(this.b,0)]}}},
iC:{"^":"j:2;a,b",
$0:[function(){this.b.ba(this.a.a)},null,null,0,0,null,"call"]},
aj:{"^":"c;$ti"},
iA:{"^":"c;"},
et:{"^":"jP;$ti",
gC:function(a){return(H.aX(this.a)^892482866)>>>0},
S:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.et))return!1
return b.a===this.a}},
j4:{"^":"aQ;$ti",
cg:function(){return this.x.dT(this)},
bm:function(){H.x(this,"$isaj",[H.i(this.x,0)],"$asaj")},
bn:function(){H.x(this,"$isaj",[H.i(this.x,0)],"$asaj")}},
aQ:{"^":"c;0a,0c,ab:e<,0r,$ti",
sdu:function(a){this.a=H.h(a,{func:1,ret:-1,args:[H.i(this,0)]})},
sdR:function(a){this.c=H.h(a,{func:1,ret:-1})},
sbr:function(a){this.r=H.x(a,"$iscT",this.$ti,"$ascT")},
dl:function(a,b,c,d,e){var z,y,x,w
z=H.i(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
y=this.d
y.toString
this.sdu(H.h(a,{func:1,ret:null,args:[z]}))
x=b==null?P.kp():b
if(H.b6(x,{func:1,ret:-1,args:[P.c,P.a0]}))this.b=y.cQ(x,null,P.c,P.a0)
else if(H.b6(x,{func:1,ret:-1,args:[P.c]}))this.b=H.h(x,{func:1,ret:null,args:[P.c]})
else H.P(P.aE("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.h(c,{func:1,ret:-1})
w=c==null?P.eY():c
this.sdR(H.h(w,{func:1,ret:-1}))},
aR:function(){var z=this.e&=4294967279
if((z&8)===0)this.c0()
z=$.$get$cv()
return z},
c0:function(){var z,y
z=this.e|=8
if((z&64)!==0){y=this.r
if(y.a===1)y.a=3}if((z&32)===0)this.sbr(null)
this.f=this.cg()},
bY:function(a){var z
H.n(a,H.i(this,0))
z=this.e
if((z&8)!==0)return
if(z<32)this.aO(a)
else this.bX(new P.j8(a,this.$ti))},
dA:function(){var z=this.e
if((z&8)!==0)return
z|=2
this.e=z
if(z<32)this.au()
else this.bX(C.z)},
bm:function(){},
bn:function(){},
cg:function(){return},
bX:function(a){var z,y
z=this.$ti
y=H.x(this.r,"$iscU",z,"$ascU")
if(y==null){y=new P.cU(0,z)
this.sbr(y)}y.l(0,a)
z=this.e
if((z&64)===0){z|=64
this.e=z
if(z<128)this.r.bN(this)}},
aO:function(a){var z,y
z=H.i(this,0)
H.n(a,z)
y=this.e
this.e=y|32
this.d.cT(this.a,a,z)
this.e&=4294967263
this.dw((y&4)!==0)},
au:function(){this.c0()
this.e|=16
new P.j0(this).$0()},
dw:function(a){var z,y,x
z=this.e
if((z&64)!==0&&this.r.c==null){z&=4294967231
this.e=z
if((z&4)!==0)if(z<128){y=this.r
y=y==null||y.c==null}else y=!1
else y=!1
if(y){z&=4294967291
this.e=z}}for(;!0;a=x){if((z&8)!==0){this.sbr(null)
return}x=(z&4)!==0
if(a===x)break
this.e=z^32
if(x)this.bm()
else this.bn()
z=this.e&=4294967263}if((z&64)!==0&&z<128)this.r.bN(this)},
$isaj:1,
$isb_:1},
j0:{"^":"j:1;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=y|42
z.d.bC(z.c)
z.e&=4294967263}},
jP:{"^":"aO;$ti",
ay:function(a,b,c,d){H.h(a,{func:1,ret:-1,args:[H.i(this,0)]})
H.h(c,{func:1,ret:-1})
return this.a.e8(H.h(a,{func:1,ret:-1,args:[H.i(this,0)]}),d,c,!0===b)}},
bL:{"^":"c;0aA:a<,$ti",
saA:function(a){this.a=H.d(a,"$isbL")}},
j8:{"^":"bL;b,0a,$ti",
cO:function(a){H.x(a,"$isb_",this.$ti,"$asb_").aO(this.b)}},
j9:{"^":"c;",
cO:function(a){a.au()},
gaA:function(){return},
saA:function(a){throw H.f(P.bs("No events after a done."))},
$isbL:1,
$asbL:I.cc},
cT:{"^":"c;ab:a<,$ti",
bN:function(a){var z
H.x(a,"$isb_",this.$ti,"$asb_")
z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.f9(new P.jG(this,a))
this.a=1}},
jG:{"^":"j:2;a,b",
$0:function(){var z,y,x,w,v
z=this.a
y=z.a
z.a=0
if(y===3)return
x=H.x(this.b,"$isb_",[H.i(z,0)],"$asb_")
w=z.b
v=w.gaA()
z.b=v
if(v==null)z.c=null
w.cO(x)}},
cU:{"^":"cT;0b,0c,a,$ti",
l:function(a,b){var z
H.d(b,"$isbL")
z=this.c
if(z==null){this.c=b
this.b=b}else{z.saA(b)
this.c=b}}},
ja:{"^":"c;a,ab:b<,c,$ti",
e4:function(){if((this.b&2)!==0)return
var z=this.a
z.toString
P.b3(null,null,z,H.h(this.ge5(),{func:1,ret:-1}))
this.b|=2},
aR:function(){return $.$get$cv()},
au:[function(){var z=this.b&=4294967293
if(z>=4)return
this.b=z|1
this.a.bC(this.c)},"$0","ge5",0,0,1],
$isaj:1},
a7:{"^":"c;a,b",
m:function(a){return H.b(this.a)},
$isR:1},
k4:{"^":"c;",$islP:1},
kg:{"^":"j:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.dP()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.f(z)
x=H.f(z)
x.stack=y.m(0)
throw x}},
jH:{"^":"k4;",
bC:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.e===$.F){a.$0()
return}P.eP(null,null,this,a,-1)}catch(x){z=H.Q(x)
y=H.b7(x)
P.bv(null,null,this,z,H.d(y,"$isa0"))}},
cT:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.n(b,c)
try{if(C.e===$.F){a.$1(b)
return}P.eQ(null,null,this,a,b,-1,c)}catch(x){z=H.Q(x)
y=H.b7(x)
P.bv(null,null,this,z,H.d(y,"$isa0"))}},
ej:function(a,b){return new P.jJ(this,H.h(a,{func:1,ret:b}),b)},
cu:function(a){return new P.jI(this,H.h(a,{func:1,ret:-1}))},
ek:function(a,b){return new P.jK(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
cS:function(a,b){H.h(a,{func:1,ret:b})
if($.F===C.e)return a.$0()
return P.eP(null,null,this,a,b)},
bD:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.n(b,d)
if($.F===C.e)return a.$1(b)
return P.eQ(null,null,this,a,b,c,d)},
eN:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.n(b,e)
H.n(c,f)
if($.F===C.e)return a.$2(b,c)
return P.kh(null,null,this,a,b,c,d,e,f)},
cQ:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
jJ:{"^":"j;a,b,c",
$0:function(){return this.a.cS(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jI:{"^":"j:1;a,b",
$0:function(){return this.a.bC(this.b)}},
jK:{"^":"j;a,b,c",
$1:[function(a){var z=this.c
return this.a.cT(this.b,H.n(a,z),z)},null,null,4,0,null,20,"call"],
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dJ:function(a,b){return new H.aJ(0,0,[a,b])},
cD:function(){return new H.aJ(0,0,[null,null])},
cE:function(a){return H.kt(a,new H.aJ(0,0,[null,null]))},
bn:function(a,b,c,d){return new P.jB(0,0,[d])},
hu:function(a,b,c){var z,y
if(P.d_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bw()
C.a.l(y,a)
try{P.kb(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.e4(b,H.X(z,"$iso"),", ")+c
return y.charCodeAt(0)==0?y:y},
cx:function(a,b,c){var z,y,x
if(P.d_(a))return b+"..."+c
z=new P.aP(b)
y=$.$get$bw()
C.a.l(y,a)
try{x=z
x.sT(P.e4(x.gT(),a,", "))}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.sT(y.gT()+c)
y=z.gT()
return y.charCodeAt(0)==0?y:y},
d_:function(a){var z,y
for(z=0;y=$.$get$bw(),z<y.length;++z)if(a===y[z])return!0
return!1},
kb:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gA(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.n())return
w=H.b(z.gp())
C.a.l(b,w)
y+=w.length+2;++x}if(!z.n()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gp();++x
if(!z.n()){if(x<=4){C.a.l(b,H.b(t))
return}v=H.b(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gp();++x
for(;z.n();t=s,s=r){r=z.gp();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.b(t)
v=H.b(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
dK:function(a,b){var z,y,x
z=P.bn(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.H)(a),++x)z.l(0,H.n(a[x],b))
return z},
c2:function(a){var z,y,x
z={}
if(P.d_(a))return"{...}"
y=new P.aP("")
try{C.a.l($.$get$bw(),a)
x=y
x.sT(x.gT()+"{")
z.a=!0
a.D(0,new P.hO(z,y))
z=y
z.sT(z.gT()+"}")}finally{z=$.$get$bw()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.gT()
return z.charCodeAt(0)==0?z:z},
jB:{"^":"jr;a,0b,0c,0d,0e,0f,r,$ti",
gA:function(a){var z=new P.eA(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
F:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.d(z[b],"$isc9")!=null}else{y=this.dD(b)
return y}},
dD:function(a){var z=this.d
if(z==null)return!1
return this.bi(this.cd(z,a),a)>=0},
l:function(a,b){var z,y
H.n(b,H.i(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cS()
this.b=z}return this.c1(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cS()
this.c=y}return this.c1(y,b)}else return this.ds(b)},
ds:function(a){var z,y,x
H.n(a,H.i(this,0))
z=this.d
if(z==null){z=P.cS()
this.d=z}y=this.c4(a)
x=z[y]
if(x==null)z[y]=[this.b9(a)]
else{if(this.bi(x,a)>=0)return!1
x.push(this.b9(a))}return!0},
I:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cm(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cm(this.c,b)
else return this.dU(b)},
dU:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.cd(z,a)
x=this.bi(y,a)
if(x<0)return!1
this.cp(y.splice(x,1)[0])
return!0},
c1:function(a,b){H.n(b,H.i(this,0))
if(H.d(a[b],"$isc9")!=null)return!1
a[b]=this.b9(b)
return!0},
cm:function(a,b){var z
if(a==null)return!1
z=H.d(a[b],"$isc9")
if(z==null)return!1
this.cp(z)
delete a[b]
return!0},
c3:function(){this.r=this.r+1&67108863},
b9:function(a){var z,y
z=new P.c9(H.n(a,H.i(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.c3()
return z},
cp:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.c3()},
c4:function(a){return J.aC(a)&0x3ffffff},
cd:function(a,b){return a[this.c4(b)]},
bi:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.am(a[y].a,b))return y
return-1},
q:{
cS:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
c9:{"^":"c;a,0b,0c"},
eA:{"^":"c;a,b,0c,0d,$ti",
sc2:function(a){this.d=H.n(a,H.i(this,0))},
gp:function(){return this.d},
n:function(){var z=this.a
if(this.b!==z.r)throw H.f(P.ap(z))
else{z=this.c
if(z==null){this.sc2(null)
return!1}else{this.sc2(H.n(z.a,H.i(this,0)))
this.c=this.c.b
return!0}}},
$isai:1,
q:{
jC:function(a,b,c){var z=new P.eA(a,b,[c])
z.c=a.e
return z}}},
jr:{"^":"e_;"},
c1:{"^":"jD;",$isz:1,$iso:1,$isq:1},
N:{"^":"c;$ti",
gA:function(a){return new H.cF(a,this.gj(a),0,[H.ax(this,a,"N",0)])},
L:function(a,b){return this.h(a,b)},
D:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.ax(this,a,"N",0)]})
z=this.gj(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.f(P.ap(a))}},
gO:function(a){return this.gj(a)===0},
gcH:function(a){return!this.gO(a)},
cJ:function(a,b,c){var z=H.ax(this,a,"N",0)
return new H.c3(a,H.h(b,{func:1,ret:c,args:[z]}),[z,c])},
eP:function(a,b){var z,y
z=H.w([],[H.ax(this,a,"N",0)])
C.a.sj(z,this.gj(a))
for(y=0;y<this.gj(a);++y)C.a.k(z,y,this.h(a,y))
return z},
eO:function(a){return this.eP(a,!0)},
l:function(a,b){var z
H.n(b,H.ax(this,a,"N",0))
z=this.gj(a)
this.sj(a,z+1)
this.k(a,z,b)},
dB:function(a,b,c){var z,y,x
z=this.gj(a)
y=c-b
for(x=c;x<z;++x)this.k(a,x-y,this.h(a,x))
this.sj(a,z-y)},
a1:function(a,b){var z=this.h(a,b)
this.dB(a,b,b+1)
return z},
m:function(a){return P.cx(a,"[","]")}},
cG:{"^":"bG;"},
hO:{"^":"j:10;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.b(a)
z.a=y+": "
z.a+=H.b(b)}},
bG:{"^":"c;$ti",
D:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aw(this,"bG",0),H.aw(this,"bG",1)]})
for(z=J.B(this.gG());z.n();){y=z.gp()
b.$2(y,this.h(0,y))}},
E:function(a){return J.fg(this.gG(),a)},
gj:function(a){return J.ab(this.gG())},
gO:function(a){return J.fj(this.gG())},
m:function(a){return P.c2(this)},
$isG:1},
k1:{"^":"c;$ti",
k:function(a,b,c){H.n(b,H.i(this,0))
H.n(c,H.i(this,1))
throw H.f(P.E("Cannot modify unmodifiable map"))}},
hP:{"^":"c;$ti",
h:function(a,b){return this.a.h(0,b)},
k:function(a,b,c){this.a.k(0,H.n(b,H.i(this,0)),H.n(c,H.i(this,1)))},
E:function(a){return this.a.E(a)},
D:function(a,b){this.a.D(0,H.h(b,{func:1,ret:-1,args:[H.i(this,0),H.i(this,1)]}))},
gO:function(a){return this.a.a===0},
gj:function(a){return this.a.a},
gG:function(){var z=this.a
return new H.bF(z,[H.i(z,0)])},
m:function(a){return P.c2(this.a)},
$isG:1},
iQ:{"^":"k2;$ti"},
cK:{"^":"c;$ti",
U:function(a,b){var z
for(z=J.B(H.x(b,"$iso",[H.aw(this,"cK",0)],"$aso"));z.n();)this.l(0,z.gp())},
m:function(a){return P.cx(this,"{","}")},
bz:function(a,b){var z,y
z=this.gA(this)
if(!z.n())return""
if(b===""){y=""
do y+=H.b(z.d)
while(z.n())}else{y=H.b(z.d)
for(;z.n();)y=y+b+H.b(z.d)}return y.charCodeAt(0)==0?y:y},
L:function(a,b){var z,y,x
if(b<0)H.P(P.aN(b,0,null,"index",null))
for(z=this.gA(this),y=0;z.n();){x=z.d
if(b===y)return x;++y}throw H.f(P.bi(b,this,"index",null,y))},
$isz:1,
$iso:1,
$isau:1},
e_:{"^":"cK;"},
jD:{"^":"c+N;"},
k2:{"^":"hP+k1;$ti"}}],["","",,P,{"^":"",
ke:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.f(H.a1(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.Q(x)
w=P.bZ(String(y),null,null)
throw H.f(w)}w=P.ca(z)
return w},
ca:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.jv(a,Object.create(null))
for(z=0;z<a.length;++z)a[z]=P.ca(a[z])
return a},
lZ:[function(a){return a.f0()},"$1","kq",4,0,3,21],
jv:{"^":"cG;a,b,0c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.dS(b):y}},
gj:function(a){return this.b==null?this.c.a:this.an().length},
gO:function(a){return this.gj(this)===0},
gG:function(){if(this.b==null){var z=this.c
return new H.bF(z,[H.i(z,0)])}return new P.jw(this)},
k:function(a,b,c){var z,y
if(this.b==null)this.c.k(0,b,c)
else if(this.E(b)){z=this.b
z[b]=c
y=this.a
if(y==null?z!=null:y!==z)y[b]=null}else this.eb().k(0,b,c)},
E:function(a){if(this.b==null)return this.c.E(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
D:function(a,b){var z,y,x,w
H.h(b,{func:1,ret:-1,args:[P.k,,]})
if(this.b==null)return this.c.D(0,b)
z=this.an()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.ca(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.f(P.ap(this))}},
an:function(){var z=H.a2(this.c)
if(z==null){z=H.w(Object.keys(this.a),[P.k])
this.c=z}return z},
eb:function(){var z,y,x,w,v
if(this.b==null)return this.c
z=P.dJ(P.k,null)
y=this.an()
for(x=0;w=y.length,x<w;++x){v=y[x]
z.k(0,v,this.h(0,v))}if(w===0)C.a.l(y,null)
else C.a.sj(y,0)
this.b=null
this.a=null
this.c=z
return z},
dS:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.ca(this.a[a])
return this.b[a]=z},
$asbG:function(){return[P.k,null]},
$asG:function(){return[P.k,null]}},
jw:{"^":"bo;a",
gj:function(a){var z=this.a
return z.gj(z)},
L:function(a,b){var z=this.a
if(z.b==null)z=z.gG().L(0,b)
else{z=z.an()
if(b<0||b>=z.length)return H.a(z,b)
z=z[b]}return z},
gA:function(a){var z=this.a
if(z.b==null){z=z.gG()
z=z.gA(z)}else{z=z.an()
z=new J.bA(z,z.length,0,[H.i(z,0)])}return z},
F:function(a,b){return this.a.E(b)},
$asz:function(){return[P.k]},
$asbo:function(){return[P.k]},
$aso:function(){return[P.k]}},
fF:{"^":"c;"},
bX:{"^":"iA;$ti"},
dG:{"^":"R;a,b,c",
m:function(a){var z=P.aH(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+H.b(z)},
q:{
dH:function(a,b,c){return new P.dG(a,b,c)}}},
hI:{"^":"dG;a,b,c",
m:function(a){return"Cyclic error in JSON stringify"}},
hH:{"^":"fF;a,b",
cB:function(a,b,c){var z=P.ke(b,this.ger().a)
return z},
bx:function(a,b){var z=this.geu()
z=P.jy(a,z.b,z.a)
return z},
geu:function(){return C.M},
ger:function(){return C.L}},
hK:{"^":"bX;a,b",
$asbX:function(){return[P.c,P.k]}},
hJ:{"^":"bX;a",
$asbX:function(){return[P.k,P.c]}},
jz:{"^":"c;",
d_:function(a){var z,y,x,w,v,u,t
z=a.length
for(y=J.d5(a),x=this.c,w=0,v=0;v<z;++v){u=y.aE(a,v)
if(u>92)continue
if(u<32){if(v>w)x.a+=C.f.aa(a,w,v)
w=v+1
x.a+=H.a3(92)
switch(u){case 8:x.a+=H.a3(98)
break
case 9:x.a+=H.a3(116)
break
case 10:x.a+=H.a3(110)
break
case 12:x.a+=H.a3(102)
break
case 13:x.a+=H.a3(114)
break
default:x.a+=H.a3(117)
x.a+=H.a3(48)
x.a+=H.a3(48)
t=u>>>4&15
x.a+=H.a3(t<10?48+t:87+t)
t=u&15
x.a+=H.a3(t<10?48+t:87+t)
break}}else if(u===34||u===92){if(v>w)x.a+=C.f.aa(a,w,v)
w=v+1
x.a+=H.a3(92)
x.a+=H.a3(u)}}if(w===0)x.a+=H.b(a)
else if(w<z)x.a+=y.aa(a,w,z)},
b7:function(a){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(a==null?w==null:a===w)throw H.f(new P.hI(a,null,null))}C.a.l(z,a)},
b2:function(a){var z,y,x,w
if(this.cZ(a))return
this.b7(a)
try{z=this.b.$1(a)
if(!this.cZ(z)){x=P.dH(a,null,this.gcj())
throw H.f(x)}x=this.a
if(0>=x.length)return H.a(x,-1)
x.pop()}catch(w){y=H.Q(w)
x=P.dH(a,y,this.gcj())
throw H.f(x)}},
cZ:function(a){var z,y
if(typeof a==="number"){if(!isFinite(a))return!1
this.c.a+=C.D.m(a)
return!0}else if(a===!0){this.c.a+="true"
return!0}else if(a===!1){this.c.a+="false"
return!0}else if(a==null){this.c.a+="null"
return!0}else if(typeof a==="string"){z=this.c
z.a+='"'
this.d_(a)
z.a+='"'
return!0}else{z=J.l(a)
if(!!z.$isq){this.b7(a)
this.eU(a)
z=this.a
if(0>=z.length)return H.a(z,-1)
z.pop()
return!0}else if(!!z.$isG){this.b7(a)
y=this.eV(a)
z=this.a
if(0>=z.length)return H.a(z,-1)
z.pop()
return y}else return!1}},
eU:function(a){var z,y,x
z=this.c
z.a+="["
y=J.O(a)
if(y.gj(a)>0){this.b2(y.h(a,0))
for(x=1;x<y.gj(a);++x){z.a+=","
this.b2(y.h(a,x))}}z.a+="]"},
eV:function(a){var z,y,x,w,v,u,t
z={}
if(a.gO(a)){this.c.a+="{}"
return!0}y=a.gj(a)*2
x=new Array(y)
x.fixed$length=Array
z.a=0
z.b=!0
a.D(0,new P.jA(z,x))
if(!z.b)return!1
w=this.c
w.a+="{"
for(v='"',u=0;u<y;u+=2,v=',"'){w.a+=v
this.d_(H.m(x[u]))
w.a+='":'
t=u+1
if(t>=y)return H.a(x,t)
this.b2(x[t])}w.a+="}"
return!0}},
jA:{"^":"j:10;a,b",
$2:function(a,b){var z,y
if(typeof a!=="string")this.a.b=!1
z=this.b
y=this.a
C.a.k(z,y.a++,a)
C.a.k(z,y.a++,b)}},
jx:{"^":"jz;c,a,b",
gcj:function(){var z=this.c.a
return z.charCodeAt(0)==0?z:z},
q:{
jy:function(a,b,c){var z,y,x
z=new P.aP("")
y=new P.jx(z,[],P.kq())
y.b2(a)
x=z.a
return x.charCodeAt(0)==0?x:x}}}}],["","",,P,{"^":"",
kF:function(a,b,c){var z=H.dV(a,c)
if(z!=null)return z
throw H.f(P.bZ(a,null,null))},
fZ:function(a){if(a instanceof H.j)return a.m(0)
return"Instance of '"+H.bq(a)+"'"},
bp:function(a,b,c){var z,y,x
z=[c]
y=H.w([],z)
for(x=J.B(a);x.n();)C.a.l(y,H.n(x.gp(),c))
if(b)return y
return H.x(J.c0(y),"$isq",z,"$asq")},
ir:function(a,b,c){return new H.hD(a,H.hE(a,!1,!0,!1))},
aH:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.C(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fZ(a)},
f5:function(a,b){var z,y
H.h(b,{func:1,ret:P.V,args:[P.k]})
z=J.cj(a)
y=H.dV(z,null)
if(y==null)y=H.ii(z)
if(y!=null)return y
if(b==null)throw H.f(P.bZ(a,null,null))
return b.$1(a)},
hV:{"^":"j:24;a,b",
$2:function(a,b){var z,y,x
H.d(a,"$isaY")
z=this.b
y=this.a
z.a+=y.a
x=z.a+=H.b(a.a)
z.a=x+": "
z.a+=H.b(P.aH(b))
y.a=", "}},
L:{"^":"c;"},
"+bool":0,
bf:{"^":"c;a,b",
l:function(a,b){return P.fO(C.h.i(this.a,H.d(b,"$isl2").gf_()),!1)},
S:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a&&!0},
gC:function(a){var z=this.a
return(z^C.h.bu(z,30))&1073741823},
m:function(a){var z,y,x,w,v,u,t,s
z=P.fP(H.ih(this))
y=P.bC(H.ie(this))
x=P.bC(H.ia(this))
w=P.bC(H.ib(this))
v=P.bC(H.id(this))
u=P.bC(H.ig(this))
t=P.fQ(H.ic(this))
s=z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t
return s},
q:{
fO:function(a,b){var z
if(Math.abs(a)<=864e13)z=!1
else z=!0
if(z)H.P(P.aE("DateTime is outside valid range: "+a))
return new P.bf(a,!1)},
fP:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
fQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bC:function(a){if(a>=10)return""+a
return"0"+a}}},
af:{"^":"V;"},
"+double":0,
R:{"^":"c;"},
dP:{"^":"R;",
m:function(a){return"Throw of null."}},
aD:{"^":"R;a,b,c,d",
gbh:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbg:function(){return""},
m:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.b(z)
w=this.gbh()+y+x
if(!this.a)return w
v=this.gbg()
u=P.aH(this.b)
return w+v+": "+H.b(u)},
q:{
aE:function(a){return new P.aD(!1,null,null,a)},
ck:function(a,b,c){return new P.aD(!0,a,b,c)}}},
dW:{"^":"aD;e,f,a,b,c,d",
gbh:function(){return"RangeError"},
gbg:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.b(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.b(z)
else if(x>z)y=": Not in range "+H.b(z)+".."+H.b(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.b(z)}return y},
q:{
bH:function(a,b,c){return new P.dW(null,null,!0,a,b,"Value not in range")},
aN:function(a,b,c,d,e){return new P.dW(b,c,!0,a,d,"Invalid value")}}},
hr:{"^":"aD;e,j:f>,a,b,c,d",
gbh:function(){return"RangeError"},
gbg:function(){if(J.fb(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.b(z)},
q:{
bi:function(a,b,c,d,e){var z=H.t(e!=null?e:J.ab(b))
return new P.hr(b,z,!0,a,c,"Index out of range")}}},
hU:{"^":"R;a,b,c,d,e",
m:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
y=new P.aP("")
z.a=""
for(x=this.c,w=x.length,v=0,u="",t="";v<w;++v,t=", "){s=x[v]
y.a=u+t
u=y.a+=H.b(P.aH(s))
z.a=", "}this.d.D(0,new P.hV(z,y))
r=P.aH(this.a)
q=y.m(0)
x="NoSuchMethodError: method not found: '"+H.b(this.b.a)+"'\nReceiver: "+H.b(r)+"\nArguments: ["+q+"]"
return x},
q:{
dM:function(a,b,c,d,e){return new P.hU(a,b,c,d,e)}}},
iR:{"^":"R;a",
m:function(a){return"Unsupported operation: "+this.a},
q:{
E:function(a){return new P.iR(a)}}},
iO:{"^":"R;a",
m:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
en:function(a){return new P.iO(a)}}},
br:{"^":"R;a",
m:function(a){return"Bad state: "+this.a},
q:{
bs:function(a){return new P.br(a)}}},
fG:{"^":"R;a",
m:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.b(P.aH(z))+"."},
q:{
ap:function(a){return new P.fG(a)}}},
i_:{"^":"c;",
m:function(a){return"Out of Memory"},
$isR:1},
e2:{"^":"c;",
m:function(a){return"Stack Overflow"},
$isR:1},
fN:{"^":"R;a",
m:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jf:{"^":"c;a",
m:function(a){return"Exception: "+this.a},
$isct:1},
hm:{"^":"c;a,b,c",
m:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.b(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.f.aa(x,0,75)+"..."
return y+"\n"+x},
$isct:1,
q:{
bZ:function(a,b,c){return new P.hm(a,b,c)}}},
aI:{"^":"c;"},
aU:{"^":"V;"},
"+int":0,
o:{"^":"c;$ti",
bI:["dd",function(a,b){var z=H.aw(this,"o",0)
return new H.cN(this,H.h(b,{func:1,ret:P.L,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gA(this)
for(y=0;z.n();)++y
return y},
ga9:function(a){var z,y
z=this.gA(this)
if(!z.n())throw H.f(H.hv())
y=z.gp()
if(z.n())throw H.f(H.hw())
return y},
L:function(a,b){var z,y,x
if(b<0)H.P(P.aN(b,0,null,"index",null))
for(z=this.gA(this),y=0;z.n();){x=z.gp()
if(b===y)return x;++y}throw H.f(P.bi(b,this,"index",null,y))},
m:function(a){return P.hu(this,"(",")")}},
ai:{"^":"c;$ti"},
q:{"^":"c;$ti",$isz:1,$iso:1},
"+List":0,
A:{"^":"c;",
gC:function(a){return P.c.prototype.gC.call(this,this)},
m:function(a){return"null"}},
"+Null":0,
V:{"^":"c;"},
"+num":0,
c:{"^":";",
S:function(a,b){return this===b},
gC:function(a){return H.aX(this)},
m:["dh",function(a){return"Instance of '"+H.bq(this)+"'"}],
bA:function(a,b){H.d(b,"$iscw")
throw H.f(P.dM(this,b.gcK(),b.gcP(),b.gcL(),null))},
toString:function(){return this.m(this)}},
au:{"^":"z;$ti"},
a0:{"^":"c;"},
k:{"^":"c;",$isdT:1},
"+String":0,
aP:{"^":"c;T:a<",
sT:function(a){this.a=H.m(a)},
gj:function(a){return this.a.length},
m:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$islI:1,
q:{
e4:function(a,b,c){var z=J.B(b)
if(!z.n())return a
if(c.length===0){do a+=H.b(z.gp())
while(z.n())}else{a+=H.b(z.gp())
for(;z.n();)a=a+c+H.b(z.gp())}return a}}},
aY:{"^":"c;"}}],["","",,W,{"^":"",
kX:function(){return window},
dj:function(a){var z=document.createElement("a")
if(a!=null)z.href=a
return z},
fX:function(a,b,c){var z,y
z=document.body
y=(z&&C.j).V(z,a,b,c)
y.toString
z=W.v
z=new H.cN(new W.a9(y),H.h(new W.fY(),{func:1,ret:P.L,args:[z]}),[z])
return H.d(z.ga9(z),"$isu")},
bg:function(a){var z,y,x,w
z="element tag unavailable"
try{y=J.J(a)
x=y.gcU(a)
if(typeof x==="string")z=y.gcU(a)}catch(w){H.Q(w)}return z},
hs:function(a){var z,y,x
y=document.createElement("input")
z=H.d(y,"$isc_")
try{J.fp(z,a)}catch(x){H.Q(x)}return z},
c8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ez:function(a,b,c,d){var z,y
z=W.c8(W.c8(W.c8(W.c8(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
eJ:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.j7(a)
if(!!J.l(z).$isaV)return z
return}else return H.d(a,"$isaV")},
eV:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.e)return a
return z.ek(a,b)},
M:{"^":"u;",$isM:1,"%":"HTMLAudioElement|HTMLBRElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLEmbedElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLIFrameElement|HTMLImageElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMediaElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLObjectElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSlotElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement|HTMLVideoElement;HTMLElement"},
di:{"^":"M;",
m:function(a){return String(a)},
$isdi:1,
"%":"HTMLAnchorElement"},
kY:{"^":"M;",
m:function(a){return String(a)},
"%":"HTMLAreaElement"},
dk:{"^":"M;",$isdk:1,"%":"HTMLBaseElement"},
dm:{"^":"D;",$isdm:1,"%":"Blob|File"},
bT:{"^":"M;",$isbT:1,"%":"HTMLBodyElement"},
bV:{"^":"M;",
d2:function(a,b,c){return this.dL(a,b)},
bK:function(a,b){return this.d2(a,b,null)},
dL:function(a,b){return a.getContext(b)},
$isbV:1,
"%":"HTMLCanvasElement"},
bW:{"^":"D;",
em:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
cE:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aZ:function(a,b){return a.measureText(b)},
ct:function(a,b,c,d,e,f,g){return a.bezierCurveTo(b,c,d,e,f,g)},
t:function(a,b,c){return a.lineTo(b,c)},
az:function(a,b,c){return a.moveTo(b,c)},
H:function(a,b,c,d,e){return a.quadraticCurveTo(b,c,d,e)},
ew:function(a,b,c,d,e){a.fillText(b,c,d)},
cF:function(a,b,c,d){return this.ew(a,b,c,d,null)},
$isbW:1,
"%":"CanvasRenderingContext2D"},
kZ:{"^":"v;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
l_:{"^":"j5;0j:length=","%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fM:{"^":"c;"},
cr:{"^":"M;",$iscr:1,"%":"HTMLDivElement"},
fR:{"^":"v;",
ed:function(a,b){return a.adoptNode(b)},
X:function(a,b){return a.querySelector(b)},
P:function(a,b){return a.querySelectorAll(b)},
"%":"XMLDocument;Document"},
l0:{"^":"D;",
m:function(a){return String(a)},
"%":"DOMException"},
fS:{"^":"D;",
eq:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
fT:{"^":"D;",
m:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
S:function(a,b){if(b==null)return!1
if(!H.aS(b,"$isbI",[P.V],"$asbI"))return!1
return a.left===b.left&&a.top===b.top&&a.width===b.width&&a.height===b.height},
gC:function(a){return W.ez(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gu:function(a){return a.x},
gv:function(a){return a.y},
$isbI:1,
$asbI:function(){return[P.V]},
"%":";DOMRectReadOnly"},
l1:{"^":"D;0j:length=",
l:function(a,b){return a.add(H.m(b))},
"%":"DOMTokenList"},
j1:{"^":"c1;bf:a<,b",
gO:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){var z
H.t(b)
z=this.b
if(b<0||b>=z.length)return H.a(z,b)
return H.d(z[b],"$isu")},
k:function(a,b,c){var z
H.t(b)
H.d(c,"$isu")
z=this.b
if(b<0||b>=z.length)return H.a(z,b)
J.ch(this.a,c,z[b])},
sj:function(a,b){throw H.f(P.E("Cannot resize element lists"))},
l:function(a,b){H.d(b,"$isu")
J.aB(this.a,b)
return b},
gA:function(a){var z=this.eO(this)
return new J.bA(z,z.length,0,[H.i(z,0)])},
aS:function(a){J.dd(this.a)},
a1:function(a,b){var z,y
z=this.b
if(b>=z.length)return H.a(z,b)
y=H.d(z[b],"$isu")
J.bb(this.a,y)
return y},
$asz:function(){return[W.u]},
$asN:function(){return[W.u]},
$aso:function(){return[W.u]},
$asq:function(){return[W.u]}},
ae:{"^":"c1;a,$ti",
gj:function(a){return this.a.length},
h:function(a,b){var z
H.t(b)
z=this.a
if(b<0||b>=z.length)return H.a(z,b)
return H.n(z[b],H.i(this,0))},
k:function(a,b,c){H.t(b)
H.n(c,H.i(this,0))
throw H.f(P.E("Cannot modify list"))},
sj:function(a,b){throw H.f(P.E("Cannot modify list"))},
$isZ:1},
u:{"^":"v;0cU:tagName=",
gei:function(a){return new W.jb(a)},
gcv:function(a){return new W.j1(a,a.children)},
gcw:function(a){return new W.jc(a)},
m:function(a){return a.localName},
a6:function(a,b,c,d,e){var z,y
z=this.V(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":J.df(a.parentNode,z,a)
break
case"afterbegin":y=a.childNodes
this.cG(a,z,y.length>0?y[0]:null)
break
case"beforeend":this.B(a,z)
break
case"afterend":J.df(a.parentNode,z,a.nextSibling)
break
default:H.P(P.aE("Invalid position "+b))}},
V:["b4",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dz
if(z==null){z=H.w([],[W.ac])
y=new W.dN(z)
C.a.l(z,W.ew(null))
C.a.l(z,W.eG())
$.dz=y
d=y}else d=z
z=$.dy
if(z==null){z=new W.eH(d)
$.dy=z
c=z}else{z.a=d
c=z}}if($.aq==null){z=document
y=z.implementation
y=(y&&C.A).eq(y,"")
$.aq=y
$.cs=y.createRange()
y=$.aq
y.toString
y=y.createElement("base")
H.d(y,"$isdk")
y.href=z.baseURI
z=$.aq.head;(z&&C.B).B(z,y)}z=$.aq
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.d(y,"$isbT")}z=$.aq
if(!!this.$isbT)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.aq.body;(z&&C.j).B(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.F(C.O,a.tagName)){z=$.cs;(z&&C.w).d3(z,x)
z=$.cs
w=(z&&C.w).eo(z,b)}else{x.innerHTML=b
w=$.aq.createDocumentFragment()
for(z=J.J(w);y=x.firstChild,y!=null;)z.B(w,y)}z=$.aq.body
if(x==null?z!=null:x!==z)J.bc(x)
c.bM(w)
C.d.ed(document,w)
return w},function(a,b,c){return this.V(a,b,c,null)},"ep",null,null,"geZ",5,5,null],
b3:function(a,b,c,d){a.textContent=null
this.B(a,this.V(a,b,c,d))},
a2:function(a,b){return this.b3(a,b,null,null)},
ah:function(a,b){return a.getAttribute(b)},
dN:function(a,b){return a.hasAttribute(b)},
dV:function(a,b){return a.removeAttribute(b)},
d4:function(a,b,c){return a.setAttribute(b,c)},
$isu:1,
"%":";Element"},
fY:{"^":"j:7;",
$1:function(a){return!!J.l(H.d(a,"$isv")).$isu}},
T:{"^":"D;",$isT:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
aV:{"^":"D;",
dt:function(a,b,c,d){return a.addEventListener(b,H.b5(H.h(c,{func:1,args:[W.T]}),1),!1)},
dX:function(a,b,c,d){return a.removeEventListener(b,H.b5(H.h(c,{func:1,args:[W.T]}),1),!1)},
$isaV:1,
"%":";EventTarget"},
ln:{"^":"M;0j:length=","%":"HTMLFormElement"},
ho:{"^":"M;","%":"HTMLHeadElement"},
hp:{"^":"jt;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
if(b>>>0!==b||b>=a.length)throw H.f(P.bi(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.t(b)
H.d(c,"$isv")
throw H.f(P.E("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.f(P.E("Cannot resize immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.v]},
$isas:1,
$asas:function(){return[W.v]},
$asN:function(){return[W.v]},
$iso:1,
$aso:function(){return[W.v]},
$isq:1,
$asq:function(){return[W.v]},
$ishp:1,
$asar:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hq:{"^":"fR;","%":"HTMLDocument"},
dC:{"^":"D;",$isdC:1,"%":"ImageData"},
c_:{"^":"M;0type",
sb1:function(a,b){a.type=H.m(b)},
$isc_:1,
"%":"HTMLInputElement"},
bE:{"^":"cM;",$isbE:1,"%":"KeyboardEvent"},
hN:{"^":"D;",
m:function(a){return String(a)},
$ishN:1,
"%":"Location"},
y:{"^":"cM;",
gcM:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.a8(a.offsetX,a.offsetY,[P.V])
else{z=a.target
if(!J.l(W.eJ(z)).$isu)throw H.f(P.E("offsetX is only supported on elements"))
y=H.d(W.eJ(z),"$isu")
z=a.clientX
x=a.clientY
w=[P.V]
v=y.getBoundingClientRect()
u=new P.a8(z,x,w).K(0,new P.a8(v.left,v.top,w))
return new P.a8(J.dh(u.a),J.dh(u.b),w)}},
$isy:1,
"%":"DragEvent|MouseEvent|PointerEvent|WheelEvent"},
a9:{"^":"c1;a",
ga9:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.f(P.bs("No elements"))
if(y>1)throw H.f(P.bs("More than one element"))
return z.firstChild},
l:function(a,b){J.aB(this.a,H.d(b,"$isv"))},
U:function(a,b){var z,y,x,w,v
H.x(b,"$iso",[W.v],"$aso")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.J(y),v=0;v<x;++v)w.B(y,z.firstChild)
return},
a1:function(a,b){var z,y,x
z=this.a
y=z.childNodes
if(b>=y.length)return H.a(y,b)
x=y[b]
J.bb(z,x)
return x},
k:function(a,b,c){var z,y
H.t(b)
H.d(c,"$isv")
z=this.a
y=z.childNodes
if(b<0||b>=y.length)return H.a(y,b)
J.ch(z,c,y[b])},
gA:function(a){var z=this.a.childNodes
return new W.dB(z,z.length,-1,[H.ax(C.R,z,"ar",0)])},
gj:function(a){return this.a.childNodes.length},
sj:function(a,b){throw H.f(P.E("Cannot set length on immutable List."))},
h:function(a,b){var z
H.t(b)
z=this.a.childNodes
if(b<0||b>=z.length)return H.a(z,b)
return z[b]},
$asz:function(){return[W.v]},
$asN:function(){return[W.v]},
$aso:function(){return[W.v]},
$asq:function(){return[W.v]}},
v:{"^":"aV;0eJ:previousSibling=",
Y:function(a){var z=a.parentNode
if(z!=null)J.bb(z,a)},
eM:function(a,b){var z,y
try{z=a.parentNode
J.ch(z,b,a)}catch(y){H.Q(y)}return a},
dz:function(a){var z
for(;z=a.firstChild,z!=null;)this.cl(a,z)},
m:function(a){var z=a.nodeValue
return z==null?this.dc(a):z},
B:function(a,b){return a.appendChild(b)},
cG:function(a,b,c){return a.insertBefore(b,c)},
cl:function(a,b){return a.removeChild(b)},
dY:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
hW:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
if(b>>>0!==b||b>=a.length)throw H.f(P.bi(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.t(b)
H.d(c,"$isv")
throw H.f(P.E("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.f(P.E("Cannot resize immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.v]},
$isas:1,
$asas:function(){return[W.v]},
$asN:function(){return[W.v]},
$iso:1,
$aso:function(){return[W.v]},
$isq:1,
$asq:function(){return[W.v]},
$asar:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
ij:{"^":"D;",
eo:function(a,b){return a.createContextualFragment(b)},
d3:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
lH:{"^":"M;0j:length=","%":"HTMLSelectElement"},
iD:{"^":"M;",
V:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.b4(a,b,c,d)
z=W.fX("<table>"+H.b(b)+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.a9(y).U(0,new W.a9(z))
return y},
"%":"HTMLTableElement"},
lK:{"^":"M;",
V:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.b4(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.x.V(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.ga9(z)
x.toString
z=new W.a9(x)
w=z.ga9(z)
y.toString
w.toString
new W.a9(y).U(0,new W.a9(w))
return y},
"%":"HTMLTableRowElement"},
lL:{"^":"M;",
V:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.b4(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.x.V(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.ga9(z)
y.toString
x.toString
new W.a9(y).U(0,new W.a9(x))
return y},
"%":"HTMLTableSectionElement"},
e7:{"^":"M;",
b3:function(a,b,c,d){var z
a.textContent=null
z=this.V(a,b,c,d)
J.aB(a.content,z)},
a2:function(a,b){return this.b3(a,b,null,null)},
$ise7:1,
"%":"HTMLTemplateElement"},
bJ:{"^":"cM;",$isbJ:1,"%":"TouchEvent"},
cM:{"^":"T;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
cO:{"^":"aV;",
geg:function(a){var z,y,x
z=P.V
y=new P.a4(0,$.F,[z])
x=H.h(new W.iT(new P.jW(y,[z])),{func:1,ret:-1,args:[P.V]})
this.dK(a)
this.dZ(a,W.eV(x,z))
return y},
dZ:function(a,b){return a.requestAnimationFrame(H.b5(H.h(b,{func:1,ret:-1,args:[P.V]}),1))},
dK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$iscO:1,
$iseo:1,
"%":"DOMWindow|Window"},
iT:{"^":"j:18;a",
$1:[function(a){var z=this.a
a=H.cd(H.az(a),{futureOr:1,type:H.i(z,0)})
z=z.a
if(z.a!==0)H.P(P.bs("Future already completed"))
z.ba(a)},null,null,4,0,null,22,"call"]},
ep:{"^":"aV;",$isep:1,"%":"DedicatedWorkerGlobalScope|ServiceWorkerGlobalScope|SharedWorkerGlobalScope|WorkerGlobalScope"},
er:{"^":"v;",$iser:1,"%":"Attr"},
lT:{"^":"fT;",
m:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
S:function(a,b){if(b==null)return!1
if(!H.aS(b,"$isbI",[P.V],"$asbI"))return!1
return a.left===b.left&&a.top===b.top&&a.width===b.width&&a.height===b.height},
gC:function(a){return W.ez(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gu:function(a){return a.x},
gv:function(a){return a.y},
"%":"ClientRect|DOMRect"},
lX:{"^":"k6;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
if(b>>>0!==b||b>=a.length)throw H.f(P.bi(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.t(b)
H.d(c,"$isv")
throw H.f(P.E("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.f(P.E("Cannot resize immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isz:1,
$asz:function(){return[W.v]},
$isas:1,
$asas:function(){return[W.v]},
$asN:function(){return[W.v]},
$iso:1,
$aso:function(){return[W.v]},
$isq:1,
$asq:function(){return[W.v]},
$asar:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
iZ:{"^":"cG;bf:a<",
D:function(a,b){var z,y,x,w,v,u
H.h(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=this.gG(),y=z.length,x=this.a,w=J.J(x),v=0;v<z.length;z.length===y||(0,H.H)(z),++v){u=z[v]
b.$2(u,w.ah(x,u))}},
gG:function(){var z,y,x,w,v
z=this.a.attributes
y=H.w([],[P.k])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=H.d(z[w],"$iser")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
gO:function(a){return this.gG().length===0},
$asbG:function(){return[P.k,P.k]},
$asG:function(){return[P.k,P.k]}},
jb:{"^":"iZ;a",
E:function(a){return J.fe(this.a,a)},
h:function(a,b){return J.bP(this.a,H.m(b))},
k:function(a,b,c){J.dg(this.a,b,H.m(c))},
gj:function(a){return this.gG().length}},
jc:{"^":"dw;bf:a<",
a8:function(){var z,y,x,w,v
z=P.bn(null,null,null,P.k)
for(y=this.a.className.split(" "),x=y.length,w=0;w<x;++w){v=J.cj(y[w])
if(v.length!==0)z.l(0,v)}return z},
bJ:function(a){this.a.className=H.x(a,"$isau",[P.k],"$asau").bz(0," ")},
gj:function(a){return this.a.classList.length},
l:function(a,b){var z,y
H.m(b)
z=this.a.classList
y=z.contains(b)
z.add(b)
return!y},
I:function(a,b){var z,y,x
if(typeof b==="string"){z=this.a.classList
y=z.contains(b)
z.remove(b)
x=y}else x=!1
return x}},
eu:{"^":"aO;a,b,c,$ti",
ay:function(a,b,c,d){var z=H.i(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.K(this.a,this.b,a,!1,z)}},
lU:{"^":"eu;a,b,c,$ti"},
aZ:{"^":"aO;a,b,c,$ti",
ay:function(a,b,c,d){var z,y,x,w
z=H.i(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
y=this.$ti
x=new W.jQ(new H.aJ(0,0,[[P.aO,z],[P.aj,z]]),y)
x.sdF(new P.jT(null,x.gen(x),0,y))
for(z=this.a,z=new H.cF(z,z.gj(z),0,[H.i(z,0)]),w=this.c;z.n();)x.l(0,new W.eu(z.d,w,!1,y))
z=x.a
z.toString
return new P.j_(z,[H.i(z,0)]).ay(a,b,c,d)},
a7:function(a){return this.ay(a,null,null,null)}},
jd:{"^":"aj;a,b,c,d,e,$ti",
sdQ:function(a){this.d=H.h(a,{func:1,args:[W.T]})},
aR:function(){var z,y,x
z=this.b
if(z==null)return
y=this.d
x=y!=null
if(x){H.h(y,{func:1,args:[W.T]})
if(x)J.ff(z,this.c,y,!1)}this.b=null
this.sdQ(null)
return},
q:{
K:function(a,b,c,d,e){var z,y
z=W.eV(new W.je(c),W.T)
y=z!=null
if(y&&!0){a.toString
H.h(z,{func:1,args:[W.T]})
if(y)J.fd(a,b,z,!1)}return new W.jd(0,a,b,z,!1,[e])}}},
je:{"^":"j:17;a",
$1:[function(a){return this.a.$1(H.d(a,"$isT"))},null,null,4,0,null,0,"call"]},
jQ:{"^":"c;0a,b,$ti",
sdF:function(a){this.a=H.x(a,"$ise3",this.$ti,"$ase3")},
l:function(a,b){var z,y,x
H.x(b,"$isaO",this.$ti,"$asaO")
z=this.b
if(z.E(b))return
y=this.a
x=H.i(b,0)
y=H.h(y.gec(y),{func:1,ret:-1,args:[x]})
H.h(new W.jR(this,b),{func:1,ret:-1})
z.k(0,b,W.K(b.a,b.b,y,!1,x))},
cz:[function(a){var z,y
for(z=this.b,y=z.geT(z),y=new H.dL(J.B(y.a),y.b,[H.i(y,0),H.i(y,1)]);y.n();)y.a.aR()
z.aS(0)
this.a.cz(0)},"$0","gen",1,0,1]},
jR:{"^":"j:1;a,b",
$0:function(){var z,y
z=this.a
y=z.b.I(0,H.x(this.b,"$isaO",[H.i(z,0)],"$asaO"))
if(y!=null)y.aR()
return}},
bM:{"^":"c;a",
dm:function(a){var z,y
z=$.$get$cR()
if(z.a===0){for(y=0;y<262;++y)z.k(0,C.N[y],W.kx())
for(y=0;y<12;++y)z.k(0,C.l[y],W.ky())}},
ac:function(a){return $.$get$ex().F(0,W.bg(a))},
a5:function(a,b,c){var z,y,x
z=W.bg(a)
y=$.$get$cR()
x=y.h(0,H.b(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.d1(x.$4(a,b,c,this))},
$isac:1,
q:{
ew:function(a){var z,y
z=W.dj(null)
y=window.location
z=new W.bM(new W.jL(z,y))
z.dm(a)
return z},
lV:[function(a,b,c,d){H.d(a,"$isu")
H.m(b)
H.m(c)
H.d(d,"$isbM")
return!0},"$4","kx",16,0,12,6,7,8,9],
lW:[function(a,b,c,d){var z,y,x
H.d(a,"$isu")
H.m(b)
H.m(c)
z=H.d(d,"$isbM").a
y=z.a
y.href=c
x=y.hostname
z=z.b
if(!(x==z.hostname&&y.port==z.port&&y.protocol==z.protocol))if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","ky",16,0,12,6,7,8,9]}},
ar:{"^":"c;$ti",
gA:function(a){return new W.dB(a,this.gj(a),-1,[H.ax(this,a,"ar",0)])},
l:function(a,b){H.n(b,H.ax(this,a,"ar",0))
throw H.f(P.E("Cannot add to immutable List."))},
a1:function(a,b){throw H.f(P.E("Cannot remove from immutable List."))}},
dN:{"^":"c;a",
l:function(a,b){C.a.l(this.a,H.d(b,"$isac"))},
ac:function(a){return C.a.cr(this.a,new W.hY(a))},
a5:function(a,b,c){return C.a.cr(this.a,new W.hX(a,b,c))},
$isac:1},
hY:{"^":"j:16;a",
$1:function(a){return H.d(a,"$isac").ac(this.a)}},
hX:{"^":"j:16;a,b,c",
$1:function(a){return H.d(a,"$isac").a5(this.a,this.b,this.c)}},
jM:{"^":"c;",
dn:function(a,b,c,d){var z,y,x
this.a.U(0,c)
z=b.bI(0,new W.jN())
y=b.bI(0,new W.jO())
this.b.U(0,z)
x=this.c
x.U(0,C.P)
x.U(0,y)},
ac:function(a){return this.a.F(0,W.bg(a))},
a5:["dj",function(a,b,c){var z,y
z=W.bg(a)
y=this.c
if(y.F(0,H.b(z)+"::"+b))return this.d.ee(c)
else if(y.F(0,"*::"+b))return this.d.ee(c)
else{y=this.b
if(y.F(0,H.b(z)+"::"+b))return!0
else if(y.F(0,"*::"+b))return!0
else if(y.F(0,H.b(z)+"::*"))return!0
else if(y.F(0,"*::*"))return!0}return!1}],
$isac:1},
jN:{"^":"j:15;",
$1:function(a){return!C.a.F(C.l,H.m(a))}},
jO:{"^":"j:15;",
$1:function(a){return C.a.F(C.l,H.m(a))}},
jX:{"^":"jM;e,a,b,c,d",
a5:function(a,b,c){if(this.dj(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bP(a,"template")==="")return this.e.F(0,b)
return!1},
q:{
eG:function(){var z,y,x,w,v
z=P.k
y=P.dK(C.k,z)
x=H.i(C.k,0)
w=H.h(new W.jY(),{func:1,ret:z,args:[x]})
v=H.w(["TEMPLATE"],[z])
y=new W.jX(y,P.bn(null,null,null,z),P.bn(null,null,null,z),P.bn(null,null,null,z),null)
y.dn(null,new H.c3(C.k,w,[x,z]),v,null)
return y}}},
jY:{"^":"j:11;",
$1:[function(a){return"TEMPLATE::"+H.b(H.m(a))},null,null,4,0,null,23,"call"]},
jS:{"^":"c;",
ac:function(a){var z=J.l(a)
if(!!z.$isdY)return!1
z=!!z.$isI
if(z&&W.bg(a)==="foreignObject")return!1
if(z)return!0
return!1},
a5:function(a,b,c){if(b==="is"||C.f.d6(b,"on"))return!1
return this.ac(a)},
$isac:1},
dB:{"^":"c;a,b,c,0d,$ti",
sce:function(a){this.d=H.n(a,H.i(this,0))},
n:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.sce(J.ba(this.a,z))
this.c=z
return!0}this.sce(null)
this.c=y
return!1},
gp:function(){return this.d},
$isai:1},
j6:{"^":"c;a",$isaV:1,$iseo:1,q:{
j7:function(a){if(a===window)return H.d(a,"$iseo")
else return new W.j6(a)}}},
ac:{"^":"c;"},
jL:{"^":"c;a,b",$islN:1},
eH:{"^":"c;a",
bM:function(a){new W.k3(this).$2(a,null)},
as:function(a,b){if(b==null)J.bc(a)
else J.bb(b,a)},
e3:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fh(a)
x=J.bP(y.gbf(),"is")
H.d(a,"$isu")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.Q(t)}v="element unprintable"
try{v=J.C(a)}catch(t){H.Q(t)}try{u=W.bg(a)
this.e2(H.d(a,"$isu"),b,z,v,u,H.d(y,"$isG"),H.m(x))}catch(t){if(H.Q(t) instanceof P.aD)throw t
else{this.as(a,b)
window
s="Removing corrupted element "+H.b(v)
if(typeof console!="undefined")window.console.warn(s)}}},
e2:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t
if(c){this.as(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.ac(a)){this.as(a,b)
window
z="Removing disallowed element <"+H.b(e)+"> from "+H.b(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a5(a,"is",g)){this.as(a,b)
window
z="Removing disallowed type extension <"+H.b(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gG()
y=H.w(z.slice(0),[H.i(z,0)])
for(x=f.gG().length-1,z=f.a,w=J.J(z);x>=0;--x){if(x>=y.length)return H.a(y,x)
v=y[x]
u=this.a
t=J.fq(v)
H.m(v)
if(!u.a5(a,t,w.ah(z,v))){window
u="Removing disallowed attribute <"+H.b(e)+" "+H.b(v)+'="'+H.b(w.ah(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.ah(z,v)
w.dV(z,v)}}if(!!J.l(a).$ise7)this.bM(a.content)},
$islE:1},
k3:{"^":"j:20;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.e3(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.as(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fl(z)}catch(w){H.Q(w)
v=H.d(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bb(u,v)}else J.bb(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.d(y,"$isv")}}},
j5:{"^":"D+fM;"},
js:{"^":"D+N;"},
jt:{"^":"js+ar;"},
jE:{"^":"D+N;"},
jF:{"^":"jE+ar;"},
k5:{"^":"D+N;"},
k6:{"^":"k5+ar;"}}],["","",,P,{"^":"",dw:{"^":"e_;",
cq:function(a){var z=$.$get$dx().b
if(typeof a!=="string")H.P(H.a1(a))
if(z.test(a))return a
throw H.f(P.ck(a,"value","Not a valid class token"))},
m:function(a){return this.a8().bz(0," ")},
gA:function(a){var z=this.a8()
return P.jC(z,z.r,H.i(z,0))},
gj:function(a){return this.a8().a},
l:function(a,b){H.m(b)
this.cq(b)
return H.d1(this.eH(new P.fL(b)))},
I:function(a,b){var z,y
H.m(b)
this.cq(b)
if(typeof b!=="string")return!1
z=this.a8()
y=z.I(0,b)
this.bJ(z)
return y},
L:function(a,b){return this.a8().L(0,b)},
eH:function(a){var z,y
H.h(a,{func:1,args:[[P.au,P.k]]})
z=this.a8()
y=a.$1(z)
this.bJ(z)
return y},
$asz:function(){return[P.k]},
$ascK:function(){return[P.k]},
$aso:function(){return[P.k]},
$asau:function(){return[P.k]}},fL:{"^":"j:21;a",
$1:function(a){return H.x(a,"$isau",[P.k],"$asau").l(0,this.a)}},hi:{"^":"c1;a,b",
ga4:function(){var z,y,x
z=this.b
y=H.aw(z,"N",0)
x=W.u
return new H.cH(new H.cN(z,H.h(new P.hj(),{func:1,ret:P.L,args:[y]}),[y]),H.h(new P.hk(),{func:1,ret:x,args:[y]}),[y,x])},
k:function(a,b,c){var z
H.t(b)
H.d(c,"$isu")
z=this.ga4()
J.fo(z.b.$1(J.bz(z.a,b)),c)},
sj:function(a,b){var z=J.ab(this.ga4().a)
if(b>=z)return
else if(b<0)throw H.f(P.aE("Invalid list length"))
this.eL(0,b,z)},
l:function(a,b){J.aB(this.b.a,H.d(b,"$isu"))},
eL:function(a,b,c){var z=this.ga4()
z=H.ix(z,b,H.aw(z,"o",0))
C.a.D(P.bp(H.iE(z,c-b,H.aw(z,"o",0)),!0,null),new P.hl())},
aS:function(a){J.dd(this.b.a)},
a1:function(a,b){var z=this.ga4()
z=z.b.$1(J.bz(z.a,b))
J.bc(z)
return z},
gj:function(a){return J.ab(this.ga4().a)},
h:function(a,b){var z
H.t(b)
z=this.ga4()
return z.b.$1(J.bz(z.a,b))},
gA:function(a){var z=P.bp(this.ga4(),!1,W.u)
return new J.bA(z,z.length,0,[H.i(z,0)])},
$asz:function(){return[W.u]},
$asN:function(){return[W.u]},
$aso:function(){return[W.u]},
$asq:function(){return[W.u]}},hj:{"^":"j:7;",
$1:function(a){return!!J.l(H.d(a,"$isv")).$isu}},hk:{"^":"j:22;",
$1:[function(a){return H.ce(H.d(a,"$isv"),"$isu")},null,null,4,0,null,24,"call"]},hl:{"^":"j:3;",
$1:function(a){return J.bc(a)}}}],["","",,P,{"^":"",dI:{"^":"D;",$isdI:1,"%":"IDBKeyRange"}}],["","",,P,{"^":"",
k7:[function(a,b,c,d){var z,y,x
H.d1(b)
H.a2(d)
if(b){z=[c]
C.a.U(z,d)
d=z}y=P.bp(J.fm(d,P.kI(),null),!0,null)
H.d(a,"$isaI")
x=H.i8(a,y)
return P.eL(x)},null,null,16,0,null,25,26,27,28],
cW:function(a,b,c){var z
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(z){H.Q(z)}return!1},
eN:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
eL:[function(a){var z
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=J.l(a)
if(!!z.$isaK)return a.a
if(H.f2(a))return a
if(!!z.$isem)return a
if(!!z.$isbf)return H.aM(a)
if(!!z.$isaI)return P.eM(a,"$dart_jsFunction",new P.k8())
return P.eM(a,"_$dart_jsObject",new P.k9($.$get$cV()))},"$1","kJ",4,0,3,10],
eM:function(a,b,c){var z
H.h(c,{func:1,args:[,]})
z=P.eN(a,b)
if(z==null){z=c.$1(a)
P.cW(a,b,z)}return z},
eK:[function(a){var z,y
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.f2(a))return a
else if(a instanceof Object&&!!J.l(a).$isem)return a
else if(a instanceof Date){z=H.t(a.getTime())
if(Math.abs(z)<=864e13)y=!1
else y=!0
if(y)H.P(P.aE("DateTime is outside valid range: "+z))
return new P.bf(z,!1)}else if(a.constructor===$.$get$cV())return a.o
else return P.eU(a)},"$1","kI",4,0,38,10],
eU:function(a){if(typeof a=="function")return P.cX(a,$.$get$bY(),new P.kj())
if(a instanceof Array)return P.cX(a,$.$get$cQ(),new P.kk())
return P.cX(a,$.$get$cQ(),new P.kl())},
cX:function(a,b,c){var z
H.h(c,{func:1,args:[,]})
z=P.eN(a,b)
if(z==null||!(a instanceof Object)){z=c.$1(a)
P.cW(a,b,z)}return z},
aK:{"^":"c;a",
h:["df",function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.f(P.aE("property is not a String or num"))
return P.eK(this.a[b])}],
k:["bP",function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.f(P.aE("property is not a String or num"))
this.a[b]=P.eL(c)}],
gC:function(a){return 0},
S:function(a,b){if(b==null)return!1
return b instanceof P.aK&&this.a===b.a},
m:function(a){var z,y
try{z=String(this.a)
return z}catch(y){H.Q(y)
z=this.dh(this)
return z}},
bv:function(a,b){var z,y
z=this.a
if(b==null)y=null
else{y=H.i(b,0)
y=P.bp(new H.c3(b,H.h(P.kJ(),{func:1,ret:null,args:[y]}),[y,null]),!0,null)}return P.eK(z[a].apply(z,y))}},
cB:{"^":"aK;a"},
cA:{"^":"ju;a,$ti",
b8:function(a){var z=a<0||a>=this.gj(this)
if(z)throw H.f(P.aN(a,0,this.gj(this),null,null))},
h:function(a,b){if(typeof b==="number"&&b===C.h.bE(b))this.b8(H.t(b))
return H.n(this.df(0,b),H.i(this,0))},
k:function(a,b,c){H.n(c,H.i(this,0))
if(typeof b==="number"&&b===C.h.bE(b))this.b8(H.t(b))
this.bP(0,b,c)},
gj:function(a){var z=this.a.length
if(typeof z==="number"&&z>>>0===z)return z
throw H.f(P.bs("Bad JsArray length"))},
sj:function(a,b){this.bP(0,"length",b)},
l:function(a,b){this.bv("push",[H.n(b,H.i(this,0))])},
a1:function(a,b){this.b8(b)
return H.n(J.ba(this.bv("splice",[b,1]),0),H.i(this,0))},
$isz:1,
$iso:1,
$isq:1},
k8:{"^":"j:3;",
$1:function(a){var z
H.d(a,"$isaI")
z=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.k7,a,!1)
P.cW(z,$.$get$bY(),a)
return z}},
k9:{"^":"j:3;a",
$1:function(a){return new this.a(a)}},
kj:{"^":"j:23;",
$1:function(a){return new P.cB(a)}},
kk:{"^":"j:41;",
$1:function(a){return new P.cA(a,[null])}},
kl:{"^":"j:25;",
$1:function(a){return new P.aK(a)}},
ju:{"^":"aK+N;"}}],["","",,P,{"^":"",
ey:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
a8:{"^":"c;u:a>,v:b>,$ti",
m:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
S:function(a,b){var z,y,x
if(b==null)return!1
if(!H.aS(b,"$isa8",[P.V],null))return!1
z=this.a
y=J.J(b)
x=y.gu(b)
if(z==null?x==null:z===x){z=this.b
y=y.gv(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gC:function(a){var z,y,x
z=J.aC(this.a)
y=J.aC(this.b)
y=P.ey(P.ey(0,z),y)
x=536870911&y+((67108863&y)<<3)
x^=x>>>11
return 536870911&x+((16383&x)<<15)},
i:function(a,b){var z,y,x,w,v
z=this.$ti
H.x(b,"$isa8",z,"$asa8")
y=this.a
x=b.a
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.e(x)
w=H.i(this,0)
x=H.n(y+x,w)
y=this.b
v=b.b
if(typeof y!=="number")return y.i()
if(typeof v!=="number")return H.e(v)
return new P.a8(x,H.n(y+v,w),z)},
K:function(a,b){var z,y,x,w,v
z=this.$ti
H.x(b,"$isa8",z,"$asa8")
y=this.a
x=b.a
if(typeof y!=="number")return y.K()
if(typeof x!=="number")return H.e(x)
w=H.i(this,0)
x=H.n(y-x,w)
y=this.b
v=b.b
if(typeof y!=="number")return y.K()
if(typeof v!=="number")return H.e(v)
return new P.a8(x,H.n(y-v,w),z)},
w:function(a,b){var z,y,x
H.az(b)
z=this.a
if(typeof z!=="number")return z.w()
if(typeof b!=="number")return H.e(b)
y=H.i(this,0)
z=H.n(z*b,y)
x=this.b
if(typeof x!=="number")return x.w()
return new P.a8(z,H.n(x*b,y),this.$ti)}}}],["","",,P,{"^":"",fs:{"^":"D;",$isfs:1,"%":"SVGAnimatedLength"},ft:{"^":"D;",$isft:1,"%":"SVGAnimatedLengthList"},fu:{"^":"D;",$isfu:1,"%":"SVGAnimatedNumber"},l3:{"^":"I;0u:x=,0v:y=","%":"SVGFEBlendElement"},l4:{"^":"I;0u:x=,0v:y=","%":"SVGFEColorMatrixElement"},l5:{"^":"I;0u:x=,0v:y=","%":"SVGFEComponentTransferElement"},l6:{"^":"I;0u:x=,0v:y=","%":"SVGFECompositeElement"},l7:{"^":"I;0u:x=,0v:y=","%":"SVGFEConvolveMatrixElement"},l8:{"^":"I;0u:x=,0v:y=","%":"SVGFEDiffuseLightingElement"},l9:{"^":"I;0u:x=,0v:y=","%":"SVGFEDisplacementMapElement"},la:{"^":"I;0u:x=,0v:y=","%":"SVGFEFloodElement"},lb:{"^":"I;0u:x=,0v:y=","%":"SVGFEGaussianBlurElement"},lc:{"^":"I;0u:x=,0v:y=","%":"SVGFEImageElement"},ld:{"^":"I;0u:x=,0v:y=","%":"SVGFEMergeElement"},le:{"^":"I;0u:x=,0v:y=","%":"SVGFEMorphologyElement"},lf:{"^":"I;0u:x=,0v:y=","%":"SVGFEOffsetElement"},lg:{"^":"I;0u:x=,0v:y=","%":"SVGFEPointLightElement"},lh:{"^":"I;0u:x=,0v:y=","%":"SVGFESpecularLightingElement"},li:{"^":"I;0u:x=,0v:y=","%":"SVGFESpotLightElement"},lj:{"^":"I;0u:x=,0v:y=","%":"SVGFETileElement"},lk:{"^":"I;0u:x=,0v:y=","%":"SVGFETurbulenceElement"},ll:{"^":"I;0u:x=,0v:y=","%":"SVGFilterElement"},lm:{"^":"bh;0u:x=,0v:y=","%":"SVGForeignObjectElement"},hn:{"^":"bh;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bh:{"^":"I;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lo:{"^":"bh;0u:x=,0v:y=","%":"SVGImageElement"},lw:{"^":"I;0u:x=,0v:y=","%":"SVGMaskElement"},lF:{"^":"I;0u:x=,0v:y=","%":"SVGPatternElement"},lG:{"^":"hn;0u:x=,0v:y=","%":"SVGRectElement"},dY:{"^":"I;",$isdY:1,"%":"SVGScriptElement"},fv:{"^":"dw;a",
a8:function(){var z,y,x,w,v,u
z=J.bP(this.a,"class")
y=P.bn(null,null,null,P.k)
if(z==null)return y
for(x=z.split(" "),w=x.length,v=0;v<w;++v){u=J.cj(x[v])
if(u.length!==0)y.l(0,u)}return y},
bJ:function(a){J.dg(this.a,"class",a.bz(0," "))}},I:{"^":"u;",
gcw:function(a){return new P.fv(a)},
gcv:function(a){return new P.hi(a,new W.a9(a))},
V:function(a,b,c,d){var z,y,x,w,v,u
z=H.w([],[W.ac])
C.a.l(z,W.ew(null))
C.a.l(z,W.eG())
C.a.l(z,new W.jS())
c=new W.eH(new W.dN(z))
y='<svg version="1.1">'+H.b(b)+"</svg>"
z=document
x=z.body
w=(x&&C.j).ep(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a9(w)
u=z.ga9(z)
for(z=J.J(v);x=u.firstChild,x!=null;)z.B(v,x)
return v},
$isI:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},lJ:{"^":"bh;0u:x=,0v:y=","%":"SVGSVGElement"},iG:{"^":"bh;","%":"SVGTextPathElement;SVGTextContentElement"},lM:{"^":"iG;0u:x=,0v:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},lO:{"^":"bh;0u:x=,0v:y=","%":"SVGUseElement"}}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,U,{"^":"",
fD:function(a,b){var z
if($.bB==null){z=new H.aJ(0,0,[P.k,U.co])
$.bB=z
z.k(0,"NetLogo",new U.hT("  "))
$.bB.k(0,"plain",new U.i4("  "))}if($.bB.E(a))return $.bB.h(0,a).cb(b)
else return C.i.bx(b,null)},
lr:[function(a,b){var z
H.m(a)
H.m(b)
if($.$get$U().h(0,a) instanceof U.cp)$.$get$U().h(0,a).eS()
z=C.i.cB(0,b,null)
if(!!J.l(z).$isG){$.$get$U().k(0,a,U.dt(a,z))
$.$get$U().h(0,a).N()}},"$2","kP",8,0,39,1,11],
lq:[function(a){var z,y,x,w
z=C.i.cB(0,H.m(a),null)
if(!!J.l(z).$isG)for(y=J.B(z.gG());y.n();){x=y.gp()
if($.$get$U().h(0,x) instanceof U.cp){w=$.$get$U().h(0,x)
C.a.sj(w.a,0)
C.a.sj(w.r,0)
C.a.I(w.db.c,w)}if(!!J.l(z.h(0,x)).$isG){w=$.$get$U()
H.m(x)
w.k(0,x,U.dt(x,H.d(z.h(0,x),"$isG")))
$.$get$U().h(0,x).N()}}},"$1","kO",4,0,40,11],
lp:[function(a,b){H.m(a)
H.m(b)
if($.$get$U().E(a))return U.fD(b,$.$get$U().h(0,a).by())
return},"$2","kN",8,0,29,1,29],
lt:[function(a){var z
H.m(a)
if($.$get$U().E(a)){z=$.$get$U().h(0,a).x
z.k(0,"program",$.$get$U().h(0,a).by())
return C.i.bx(z,null)}},"$1","kR",4,0,11,1],
ls:[function(){var z,y,x,w
z=P.cD()
for(y=$.$get$U(),y=new H.bF(y,[H.i(y,0)]),y=y.gA(y);y.n();){x=y.d
w=$.$get$U().h(0,x).x
w.k(0,"program",$.$get$U().h(0,x).by())
z.k(0,x,w)}return C.i.bx(z,null)},"$0","kQ",0,0,28],
f4:function(){var z=$.$get$d4()
z.k(0,"NetTango_InitWorkspace",U.kP())
z.k(0,"NetTango_InitAllWorkspaces",U.kO())
z.k(0,"NetTango_ExportCode",U.kN())
z.k(0,"NetTango_Save",U.kR())
z.k(0,"NetTango_SaveAll",U.kQ())},
db:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{z=P.kF(a,null,null)
return z}catch(y){if(!!J.l(H.Q(y)).$isct)return b
else throw y}return b},
aA:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{z=P.f5(a,null)
return z}catch(y){if(!!J.l(H.Q(y)).$isct)return b
else throw y}return b},
da:function(a,b){if(a==null)return b
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
bR:{"^":"c;0a,b,0b1:c',0d,u:e>,v:f>,r,x,0y,0z,Q,0ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,0k1,0k2,0k3,0k4,r1,r2",
gax:function(){return 0},
gad:function(){return 0},
gav:function(){var z=this.y
return z!=null?z.gav():this},
gb_:function(){var z=this.y
if(!(z!=null)){z=this.ch
z=z!=null?z.rx:null}return z},
gcI:function(){return this.z==null},
aj:function(a,b){var z=$.bS
$.bS=z+1
this.a=z
this.r=$.$get$ao()
this.x=$.$get$r()},
aT:function(a){var z=U.dn(this.fy,this.b)
this.aF(z)
return z},
aF:function(a){var z,y,x,w
a.b=this.b
a.c=this.c
a.d=this.d
a.db=this.db
a.dx=this.dx
a.dy=this.dy
a.fr=this.fr
a.fx=this.fx
a.r=this.r
a.x=this.x
a.go=this.go
for(z=this.cx,y=z.length,x=a.cx,w=0;w<z.length;z.length===y||(0,H.H)(z),++w)C.a.l(x,z[w].aU(0,a))
for(z=this.cy,y=z.length,x=a.cy,w=0;w<z.length;z.length===y||(0,H.H)(z),++w)C.a.l(x,z[w].aU(0,a))},
J:function(){var z,y,x,w,v,u
z=P.cD()
z.k(0,"id",this.a)
z.k(0,"action",this.b)
z.k(0,"type",this.c)
z.k(0,"format",this.d)
z.k(0,"start",this.go)
z.k(0,"required",this.fx)
y=this.e
x=$.$get$cl()
if(typeof y!=="number")return y.ag()
if(typeof x!=="number")return H.e(x)
z.k(0,"x",y/x)
y=this.f
if(typeof y!=="number")return y.ag()
z.k(0,"y",y/x)
y=this.cx
if(y.length!==0){z.k(0,"params",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){v=y[w]
J.an(z.h(0,"params"),v.J())}}y=this.cy
if(y.length!==0){z.k(0,"properties",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){u=y[w]
J.an(z.h(0,"properties"),u.J())}}return z},
Z:function(a){var z
J.an(a,this.J())
z=this.y
if(z!=null)z.Z(a)},
aM:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$ao()
y=this.dM(a)
x=$.$get$W()
if(typeof x!=="number")return x.w()
if(typeof y!=="number")return y.i()
this.r=Math.max(H.f_(z),y+x*2)
if(!this.r1&&this.cx.length!==0)for(z=this.cx,y=z.length,w=0,v=0;v<z.length;z.length===y||(0,H.H)(z),++v){u=z[v]
u.aL(a)
w+=u.z+x}else w=0
if(!this.r1&&this.cy.length!==0)for(z=this.cy,y=z.length,t=0,v=0;v<z.length;z.length===y||(0,H.H)(z),++v){s=z[v]
s.aL(a)
r=s.z
a.save()
a.font=s.b.fr
q=$.$get$aF()
p=C.b.aZ(a,"\u25b8    "+H.b(s.f)).width
if(typeof q!=="number")return q.i()
if(typeof p!=="number")return H.e(p)
a.restore()
t=Math.max(t,r+(q+p+x*2))}else t=0
z=this.e
if(typeof z!=="number")return z.i()
y=this.r
if(typeof y!=="number")return H.e(y)
y=Math.max(z+t,z+y+w)
b=Math.max(H.f_(b),y)
o=this.gb_()
if(o!=null)b=o.aM(a,b)
z=this.e
if(typeof z!=="number")return H.e(z)
this.r=b-z
return b},
a_:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a_(a+this.gad(),b)},
at:["d9",function(){var z,y,x,w,v
z=this.y
if(z!=null){y=this.f
x=this.r1?$.$get$r():this.x
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.e(x)
z.f=y+x
x=this.e
y=z.Q
w=this.Q
v=$.$get$aF()
if(typeof v!=="number")return H.e(v)
if(typeof x!=="number")return x.i()
z.e=x+(y-w)*v
z.at()}}],
dM:function(a){var z
a.save()
a.font=this.fr
z=C.b.aZ(a,this.b).width
a.restore()
return z},
bd:function(a){var z,y,x,w,v
a.save()
a.fillStyle=this.dx
a.font=this.fr
a.textAlign="left"
a.textBaseline="middle"
z=this.b
y=this.e
x=$.$get$W()
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.e(x)
w=this.f
v=$.$get$r()
if(typeof v!=="number")return v.ag()
if(typeof w!=="number")return w.i()
C.b.cF(a,z,y+x,w+v/2)
a.restore()},
be:function(a){var z
a.save()
this.bo(a)
a.strokeStyle=this.dy
z=$.$get$a_()
if(typeof z!=="number")return H.e(z)
a.lineWidth=0.5*z
a.lineJoin="round"
a.stroke()
a.restore()},
bc:function(a){a.save()
this.bo(a)
a.fillStyle=this.db
a.fill()
a.fillStyle="rgba(0, 0, 0, "+H.b(Math.min(1,0.075*this.Q))
a.fill()
a.restore()},
dH:function(a){var z,y,x,w,v,u
z=this.r
for(y=this.cx,x=y.length-1;x>=0;--x){w=$.$get$W()
if(x>=y.length)return H.a(y,x)
v=y[x]
u=v.z
if(typeof w!=="number")return w.i()
if(typeof z!=="number")return z.K()
z-=w+u
v.bw(a,z)}},
dI:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
for(z=this.cy,y=0;y<z.length;y=w){x=$.$get$r()
w=y+1
if(typeof x!=="number")return x.w()
v=x*w
u=z[y]
t=u.b
s=t.r
r=$.$get$W()
q=u.z
if(typeof r!=="number")return r.i()
if(typeof s!=="number")return s.K()
p=t.f
if(typeof p!=="number")return p.i()
o=t.e
n=$.$get$aF()
if(typeof o!=="number")return o.i()
if(typeof n!=="number")return H.e(n)
a.fillStyle=t.dx
a.font=t.fr
a.textAlign="left"
a.textBaseline="middle"
t="\u25b8    "+H.b(u.f)
a.toString
a.fillText(t,o+n,p+v+x/2)
u.cC(a,s-(r+q),v)}},
bo:["d8",function(a){var z,y,x,w,v
a.beginPath()
z=this.e
y=$.$get$W()
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.e(y)
C.b.az(a,z+y,this.f)
this.bq(a,this.z==null&&this.go)
z=this.Q===0
x=z&&this.z==null
this.ci(a,x,z&&this.y==null)
this.bp(a,this.y==null&&this.Q===0)
if(this.Q<=0)z=this.z!=null&&this.y!=null
else z=!0
if(z){z=this.e
x=this.f
w=this.r1?$.$get$r():this.x
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.e(w)
C.b.t(a,z,x+w)
C.b.t(a,this.e,this.f)
w=this.e
if(typeof w!=="number")return w.i()
C.b.t(a,w+y,this.f)}else if(this.y!=null){z=this.e
x=this.f
w=this.r1?$.$get$r():this.x
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.e(w)
C.b.t(a,z,x+w)
w=this.e
x=this.f
if(typeof x!=="number")return x.i()
C.b.t(a,w,x+y)
x=this.e
w=this.f
if(typeof x!=="number")return x.i()
C.b.H(a,x,w,x+y,w)}else{z=this.z
x=this.e
w=this.f
if(z!=null){z=this.r1
v=z?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.e(v)
z=z?$.$get$r():this.x
if(typeof z!=="number")return H.e(z)
C.b.H(a,x,w+v,x,w+z-y)
C.b.t(a,this.e,this.f)
z=this.e
if(typeof z!=="number")return z.i()
C.b.t(a,z+y,this.f)}else{z=this.r1
v=z?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.e(v)
z=z?$.$get$r():this.x
if(typeof z!=="number")return H.e(z)
C.b.H(a,x,w+v,x,w+z-y)
z=this.e
w=this.f
if(typeof w!=="number")return w.i()
C.b.t(a,z,w+y)
w=this.e
z=this.f
if(typeof w!=="number")return w.i()
C.b.H(a,w,z,w+y,z)}}a.closePath()}],
ci:function(a,b,c){var z,y,x,w,v
z=$.$get$W()
y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.e(x)
if(typeof z!=="number")return H.e(z);(a&&C.b).t(a,y+x-z,this.f)
if(b&&c){y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.e(x)
x=y+x
y=this.f
if(typeof y!=="number")return y.i()
C.b.H(a,x,y,x,y+z)
y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.e(x)
w=this.f
v=this.r1?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.e(v)
C.b.t(a,y+x,w+v-z)
v=this.e
w=this.r
if(typeof v!=="number")return v.i()
if(typeof w!=="number")return H.e(w)
w=v+w
v=this.f
y=this.r1
x=y?$.$get$r():this.x
if(typeof v!=="number")return v.i()
if(typeof x!=="number")return H.e(x)
y=y?$.$get$r():this.x
if(typeof y!=="number")return H.e(y)
C.b.H(a,w,v+x,w-z,v+y)}else if(c){y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.e(x)
C.b.t(a,y+x,this.f)
x=this.e
y=this.r
if(typeof x!=="number")return x.i()
if(typeof y!=="number")return H.e(y)
w=this.f
v=this.r1?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.e(v)
C.b.t(a,x+y,w+v-z)
v=this.e
w=this.r
if(typeof v!=="number")return v.i()
if(typeof w!=="number")return H.e(w)
w=v+w
v=this.f
y=this.r1
x=y?$.$get$r():this.x
if(typeof v!=="number")return v.i()
if(typeof x!=="number")return H.e(x)
y=y?$.$get$r():this.x
if(typeof y!=="number")return H.e(y)
C.b.H(a,w,v+x,w-z,v+y)}else{y=this.e
x=this.r
w=this.f
if(b){if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.e(x)
y+=x
if(typeof w!=="number")return w.i()
C.b.H(a,y,w,y,w+z)
w=this.e
y=this.r
if(typeof w!=="number")return w.i()
if(typeof y!=="number")return H.e(y)
x=this.f
v=this.r1?$.$get$r():this.x
if(typeof x!=="number")return x.i()
if(typeof v!=="number")return H.e(v)
C.b.t(a,w+y,x+v)
v=this.e
x=this.r
if(typeof v!=="number")return v.i()
if(typeof x!=="number")return H.e(x)
y=this.f
w=this.r1?$.$get$r():this.x
if(typeof y!=="number")return y.i()
if(typeof w!=="number")return H.e(w)
C.b.t(a,v+x-z,y+w)}else{if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.e(x)
C.b.t(a,y+x,w)
y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.e(x)
w=this.f
v=this.r1?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.e(v)
C.b.t(a,y+x,w+v)
v=this.e
w=this.r
if(typeof v!=="number")return v.i()
if(typeof w!=="number")return H.e(w)
x=this.f
y=this.r1?$.$get$r():this.x
if(typeof x!=="number")return x.i()
if(typeof y!=="number")return H.e(y)
C.b.t(a,v+w-z,x+y)}}},
bq:function(a,b){var z,y,x,w,v
z=$.$get$W()
y=this.e
if(typeof z!=="number")return z.w()
if(typeof y!=="number")return y.i()
x=$.$get$aF()
w=this.gax()
if(typeof x!=="number")return x.w()
v=y+z*2+x*w
if(b){(a&&C.b).t(a,v,this.f)
y=this.f
if(typeof y!=="number")return y.i()
x=y+z/2
w=v+z
C.b.ct(a,v,x,w,x,w,y)}y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.e(x);(a&&C.b).t(a,y+x-z,this.f)},
bp:function(a,b){var z,y,x,w,v,u,t,s
z=$.$get$W()
y=this.e
if(typeof z!=="number")return z.w()
if(typeof y!=="number")return y.i()
x=y+z*2
if(!this.r1){y=$.$get$aF()
w=this.gad()
if(typeof y!=="number")return y.w()
x+=y*w}if(b){y=x+z
w=this.f
v=this.r1?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.e(v);(a&&C.b).t(a,y,w+v)
v=this.f
w=this.r1
u=w?$.$get$r():this.x
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.e(u)
t=z/2
s=w?$.$get$r():this.x
if(typeof s!=="number")return H.e(s)
w=w?$.$get$r():this.x
if(typeof w!=="number")return H.e(w)
C.b.ct(a,y,v+u+t,x,v+s+t,x,v+w)}y=this.f
w=this.r1?$.$get$r():this.x
if(typeof y!=="number")return y.i()
if(typeof w!=="number")return H.e(w);(a&&C.b).t(a,x-z,y+w)},
aV:function(a){var z,y,x,w,v,u
z=a.c
y=a.e
x=this.f
w=this.r1?$.$get$r():this.x
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.e(w)
v=this.e
if(typeof v!=="number")return H.e(v)
if(z>=v)if(y>=x){u=this.r
if(typeof u!=="number")return H.e(u)
w=z<=v+u&&y<=x+w}else w=!1
else w=!1
return w},
ae:function(a){var z,y,x
this.id=!0
z=a.c
this.k1=z
y=a.e
this.k2=y
this.k3=z
this.k4=y
z=this.z
if(z!=null){z.y=null
this.z=null}for(z=this.fy,x=this;x!=null;){z.dW(x)
z.am(x)
x=x.gb_()}return this},
bH:function(a){var z
this.id=!1
this.r1=!1
this.r2=!1
z=this.fy
if(!z.ea(this))z.co(this)
z.aB()},
bF:function(a){this.k1=a.c
this.k2=a.e},
bG:function(a){},
$isc5:1,
q:{
dn:function(a,b){var z,y,x
z=[U.at]
y=H.w([],z)
z=H.w([],z)
x=$.$get$a_()
if(typeof x!=="number")return H.e(x)
x=new U.bR(b,0,0,0,0,0,y,z,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.b(14*x)+"px 'Poppins', sans-serif",!1,a,!0,!1,!1,!0)
x.aj(a,b)
return x},
dp:function(a,b){var z,y,x,w,v,u,t
z=b.h(0,"action")
y=z==null?"":J.C(z)
if(!!J.l(b.h(0,"clauses")).$isq)x=U.dl(a,y)
else if(J.am(b.h(0,"type"),"clause")){z=[U.at]
w=H.w([],z)
z=H.w([],z)
v=$.$get$a_()
if(typeof v!=="number")return H.e(v)
x=new U.aG(y,0,0,0,0,0,w,z,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.b(14*v)+"px 'Poppins', sans-serif",!1,a,!0,!1,!1,!0)
x.aj(a,y)
x.go=!1}else x=U.dn(a,y)
z=b.h(0,"type")
x.c=z==null?"":J.C(z)
z=b.h(0,"format")
x.d=z==null?null:J.C(z)
z=b.h(0,"blockColor")
w=x.db
x.db=z==null?w:J.C(z)
z=b.h(0,"textColor")
w=x.dx
x.dx=z==null?w:J.C(z)
z=b.h(0,"borderColor")
w=x.dy
x.dy=z==null?w:J.C(z)
z=b.h(0,"font")
w=x.fr
x.fr=z==null?w:J.C(z)
x.go=!U.da(b.h(0,"start"),!1)
x.fx=U.da(b.h(0,"required"),x.fx)
if(!!J.l(b.h(0,"params")).$isq)for(z=J.B(H.X(b.h(0,"params"),"$iso")),w=x.cx;z.n();)C.a.l(w,U.cJ(x,H.d(z.gp(),"$isG")))
if(!!J.l(b.h(0,"properties")).$isq)for(z=J.B(H.X(b.h(0,"properties"),"$iso")),w=x.cy;z.n();)C.a.l(w,U.cJ(x,H.d(z.gp(),"$isG")))
z=x.cy.length
w=$.$get$r()
if(typeof w!=="number")return H.e(w)
x.x=(1+z)*w
z=!!x.$isbd
if(z&&!!J.l(b.h(0,"clauses")).$isq)for(w=J.B(H.X(b.h(0,"clauses"),"$iso"));w.n();){u=w.gp()
J.fc(u,"type","clause")
t=H.ce(U.dp(a,H.d(u,"$isG")),"$isaG")
H.ce(x,"$isbd").bT(t)}if(z&&b.h(0,"end")!=null){z=H.ce(x,"$isbd").W
w=J.ba(b.h(0,"end"),"format")
z.d=w==null?null:J.C(w)}return x}}},
dv:{"^":"bR;",
gb_:function(){var z=this.y
if(z!=null)return z
else{z=this.rx
if(z!=null)return z
else{z=this.ch
if(z!=null)return z.rx
else return}}},
a_:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a_(a+this.gad(),this)}},
aG:{"^":"dv;0R,0rx,0a,b,0c,0d,e,f,r,x,0y,0z,Q,0ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,0k1,0k2,0k3,0k4,r1,r2",
gax:function(){return 1},
gad:function(){return 1},
gcI:function(){return!1},
aT:function(a){var z,y,x,w,v,u
z=this.fy
y=this.b
x=[U.at]
w=H.w([],x)
x=H.w([],x)
v=$.$get$a_()
if(typeof v!=="number")return H.e(v)
u=new U.aG(y,0,0,0,0,0,w,x,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.b(14*v)+"px 'Poppins', sans-serif",!1,z,!0,!1,!1,!0)
u.aj(z,y)
u.go=!1
this.aF(u)
return u},
Z:function(a){var z,y
z=this.J()
z.k(0,"children",[])
J.an(a,z)
y=this.y
if(y!=null)y.Z(H.a2(z.h(0,"children")))},
be:function(a){},
bc:function(a){},
ae:function(a){return this.R.ae(a)}},
dA:{"^":"aG;0R,0rx,0a,b,0c,0d,e,f,r,x,0y,0z,Q,0ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,0k1,0k2,0k3,0k4,r1,r2",
gax:function(){return 1},
gad:function(){return 0},
a_:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a_(a,b)},
Z:function(a){J.an(a,this.J())},
bd:function(a){}},
bd:{"^":"dv;R,0W,0rx,0a,b,0c,0d,e,f,r,x,0y,0z,Q,0ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,0k1,0k2,0k3,0k4,r1,r2",
gax:function(){return 0},
gad:function(){return 1},
aT:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=U.dl(this.fy,this.b)
this.aF(z)
for(y=this.R,x=y.length,w=[U.at],v=0;v<y.length;y.length===x||(0,H.H)(y),++v){u=y[v]
if(!u.$isdA){t=u.b
s=H.w([],w)
r=H.w([],w)
q=$.$get$a_()
if(typeof q!=="number")return H.e(q)
p=new U.aG(t,0,0,0,0,0,s,r,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.b(14*q)+"px 'Poppins', sans-serif",!1,u.fy,!0,!1,!1,!0)
q=$.bS
$.bS=q+1
p.a=q
p.r=$.$get$ao()
p.x=$.$get$r()
p.go=!1
u.aF(p)
z.bT(p)}}z.W.d=this.W.d
return z},
gav:function(){var z,y
z=this.W
y=z.y
return y!=null?y.gav():z},
Z:function(a){var z,y,x,w
z=this.J()
z.k(0,"children",[])
z.k(0,"clauses",[])
J.an(a,z)
y=this.y
if(y!=null)y.Z(H.a2(z.h(0,"children")))
for(y=this.R,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)y[w].Z(H.a2(z.h(0,"clauses")))
y=this.W.y
if(y!=null)y.Z(a)},
a_:function(a,b){var z,y,x
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a_(a+1,this)
for(z=this.R,y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x)z[x].a_(a,b)},
at:function(){var z,y,x,w,v,u,t,s,r
this.d9()
for(z=this.R,y=z.length,x=this,w=0;w<z.length;z.length===y||(0,H.H)(z),++w,x=v){v=z[w]
u=x.y
if(u!=null){t=u.gav()
v.e=this.e
u=t.f
s=t.r1?$.$get$r():t.x
if(typeof u!=="number")return u.i()
if(typeof s!=="number")return H.e(s)
v.f=u+s}else{v.e=this.e
u=x.f
s=x.r1?$.$get$r():x.x
if(typeof u!=="number")return u.i()
if(typeof s!=="number")return H.e(s)
r=$.$get$r()
if(typeof r!=="number")return H.e(r)
v.f=u+s+r}v.at()}},
bT:function(a){var z,y,x,w
a.R=this
z=this.R
C.a.I(z,this.W)
C.a.l(z,a)
C.a.l(z,this.W)
for(y=0;x=z.length,y<x-1;y=w){w=y+1
z[y].rx=z[w]}if(0>=x)return H.a(z,0)
this.rx=z[0]},
bo:function(a){var z,y,x,w,v,u,t,s,r
if(this.r1){this.d8(a)
return}z=$.$get$W()
a.beginPath()
y=this.e
if(typeof y!=="number")return y.i()
if(typeof z!=="number")return H.e(z)
C.b.az(a,y+z,this.f)
x=this.z==null&&this.go
for(w=this;w!=null;){if(w.y==null)v=w.rx!=null||this.Q===0
else v=!1
w.bq(a,x)
w.ci(a,x,v)
w.bp(a,v)
if(w.rx!=null){y=w.e
u=$.$get$aF()
if(typeof y!=="number")return y.i()
if(typeof u!=="number")return H.e(u)
y+=u
t=w.f
s=w.r1
r=s?$.$get$r():w.x
if(typeof t!=="number")return t.i()
if(typeof r!=="number")return H.e(r)
s=s?$.$get$r():w.x
if(typeof s!=="number")return H.e(s)
C.b.H(a,y,t+r,y,t+s+z)
y=w.y
t=w.e
s=w.rx
if(y!=null){if(typeof t!=="number")return t.i()
C.b.t(a,t+u,s.f)
y=w.e
if(typeof y!=="number")return y.i()
C.b.t(a,y+u+z,w.rx.f)}else{if(typeof t!=="number")return t.i()
y=s.f
if(typeof y!=="number")return y.K()
C.b.t(a,t+u,y-z)
y=w.e
if(typeof y!=="number")return y.i()
u=y+u
y=w.rx.f
C.b.H(a,u,y,u+z,y)}}x=w.y==null
w=w.rx}y=this.W
u=y.y!=null||this.Q>0
t=this.e
s=y.f
if(u){y=y.r1?$.$get$r():y.x
if(typeof s!=="number")return s.i()
if(typeof y!=="number")return H.e(y)
C.b.t(a,t,s+y)}else{if(typeof t!=="number")return t.i()
y=y.r1?$.$get$r():y.x
if(typeof s!=="number")return s.i()
if(typeof y!=="number")return H.e(y)
C.b.t(a,t+z,s+y)
y=this.e
s=this.W
t=s.f
u=s.r1
r=u?$.$get$r():s.x
if(typeof t!=="number")return t.i()
if(typeof r!=="number")return H.e(r)
u=u?$.$get$r():s.x
if(typeof u!=="number")return H.e(u)
C.b.H(a,y,t+r,y,t+u-z)}y=this.z
u=this.e
t=this.f
if(y!=null){C.b.t(a,u,t)
y=this.e
if(typeof y!=="number")return y.i()
C.b.t(a,y+z,this.f)}else{if(typeof t!=="number")return t.i()
C.b.t(a,u,t+z)
y=this.e
u=this.f
if(typeof y!=="number")return y.i()
C.b.H(a,y,u,y+z,u)}a.closePath()},
q:{
dl:function(a,b){var z,y,x,w,v
z=H.w([],[U.aG])
y=[U.at]
x=H.w([],y)
w=H.w([],y)
v=$.$get$a_()
if(typeof v!=="number")return H.e(v)
w=new U.bd(z,b,0,0,0,0,0,x,w,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.b(14*v)+"px 'Poppins', sans-serif",!1,a,!0,!1,!1,!0)
w.aj(a,b)
x="end-"+H.b(b)
v=new U.dA(x,0,0,0,0,0,H.w([],y),H.w([],y),"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.b(14*v)+"px 'Poppins', sans-serif",!1,a,!0,!1,!1,!0)
v.aj(a,x)
v.go=!1
x=$.$get$r()
if(typeof x!=="number")return x.ag()
v.x=x/2
v.d=""
w.W=v
v.R=w
C.a.l(z,v)
w.rx=w.W
return w}}},
aW:{"^":"c;a,0b,c,0d,e",
sb1:function(a,b){this.c=H.m(b)},
aW:function(a){var z,y,x
z=this.e
y=z.length
if(y===1){y=this.a
if(y.c!==this)a.a+="("
a.a+=H.b(this.b)+" "
if(0>=z.length)return H.a(z,0)
z[0].aW(a)
if(y.c!==this)a.a+=")"}else if(y===2){x=this.a
if(x.c!==this)a.a+="("
if(0>=y)return H.a(z,0)
z[0].aW(a)
a.a+=" "+H.b(this.b)+" "
if(1>=z.length)return H.a(z,1)
z[1].aW(a)
if(x.c!==this)a.a+=")"}else{z=this.b
if(z!=null)a.a+=z}},
J:function(){var z,y,x,w,v
z=P.cE(["name",this.b,"type",this.c])
y=this.e
if(y.length!==0){z.k(0,"children",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){v=y[w]
J.an(z.h(0,"children"),v.J())}}y=this.d
if(y!=null)z.k(0,"format",y)
return z},
aw:function(a){var z,y,x,w,v,u
z=a.h(0,"name")
this.b=z==null?"":J.C(z)
z=a.h(0,"type")
this.c=z==null?"num":J.C(z)
z=this.e
C.a.sj(z,0)
if(!!J.l(a.h(0,"children")).$isq)for(y=J.B(H.X(a.h(0,"children"),"$iso")),x=this.a,w=[U.aW];y.n();){v=y.gp()
u=new U.aW(x,H.m(J.ba(v,"type")),H.w([],w))
C.a.l(z,u)
u.aw(H.d(v,"$isG"))}},
el:function(a){var z,y,x,w
if(a==null)return this.e.length!==0
z=this.e
y=J.O(a)
if(z.length!==y.gj(a))return!0
for(x=0;x<y.gj(a);++x){w=y.h(a,x)
if(x>=z.length)return H.a(z,x)
if(!J.am(w,z[x].c))return!0}return!1},
d5:function(a){var z,y,x,w,v,u,t
z=this.e
y=z.length===0
if(this.el(a)){C.a.sj(z,0)
if(a!=null)for(x=J.O(a),w=this.a,v=[U.aW],u=0;u<x.gj(a);++u)if(u===0&&y&&J.am(x.h(a,u),this.c)){t=new U.aW(w,H.m(x.h(a,u)),H.w([],v))
t.b=this.b
C.a.l(z,t)}else C.a.l(z,new U.aW(w,H.m(x.h(a,u)),H.w([],v)))}},
cs:function(a){var z,y
z=document.createElement("div")
C.c.a2(z,H.b(this.b))
z.classList.add("nt-expression-text")
z.classList.add("editable")
y=H.b(this.c)
z.classList.add(y)
y=W.y
W.K(z,"click",H.h(new U.hb(this,z),{func:1,ret:-1,args:[y]}),!1,y)
this.cD(z,a)
C.c.B(a,z)},
cD:function(a,b){var z,y
z=W.y
y={func:1,ret:-1,args:[z]}
W.K(a,"mouseenter",H.h(new U.hc(b),y),!1,z)
W.K(a,"mouseleave",H.h(new U.hd(b),y),!1,z)},
aQ:function(a,b){var z=document.createElement("div")
C.c.a2(z,b?"(":")")
z.classList.add("nt-expression-text")
z.classList.add("parenthesis")
this.cD(z,a)
C.c.B(a,z)},
eh:function(a){var z,y
this.b=J.C(U.aA(this.b,0))
z=W.hs("number")
z.className="nt-number-input"
z.value=this.b
z.step="1"
z.toString
y=W.T
W.K(z,"change",H.h(new U.ha(this,z),{func:1,ret:-1,args:[y]}),!1,y)
C.c.B(a,z)},
geE:function(){var z=this.b
if(z!=null)return P.f5(z,new U.he())!=null
return!1},
b0:function(a){var z,y,x
z=document.createElement("div")
z.className="nt-expression"
if((this.geE()||this.b==null)&&this.c==="num")this.eh(z)
else if(this.b==null){z.classList.add("empty")
C.c.a6(z,"beforeend","<small>&#9660;</small>",null,null)}else{y=this.e
x=y.length
if(x===1){this.aQ(z,!0)
this.cs(z)
if(0>=y.length)return H.a(y,0)
y[0].b0(z)
this.aQ(z,!1)}else if(x===2){this.aQ(z,!0)
if(0>=y.length)return H.a(y,0)
y[0].b0(z)
this.cs(z)
if(1>=y.length)return H.a(y,1)
y[1].b0(z)
this.aQ(z,!1)}else C.c.a6(z,"beforeend","<div class='nt-expression-text "+H.b(this.c)+"'>"+H.b(this.b)+"</div>",null,null)}if(this.e.length===0){z.classList.add("editable")
y=W.y
W.K(z,"click",H.h(new U.hh(this,z),{func:1,ret:-1,args:[y]}),!1,y)}(a&&C.c).B(a,z)},
cN:function(a){var z,y,x,w
z=W.u
y=document
H.aa(z,z,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
z=new W.ae(C.d.P(y,".nt-pulldown-menu"),[z])
z.D(z,new U.hf())
x=y.createElement("div")
x.classList.add("nt-pulldown-menu")
y=this.a.a
this.bW(x,y.cx)
if(J.fk(y.ch))C.c.a6(x,"beforeend","<hr>",null,null)
this.bW(x,y.ch)
C.c.a6(x,"beforeend","<hr>",null,null)
w=W.dj("#")
C.n.a2(w,"Clear")
w.className="clear"
C.c.B(x,w)
z=W.y
W.K(w,"click",H.h(new U.hg(this,x),{func:1,ret:-1,args:[z]}),!1,z)
C.c.B(a,x)},
bW:function(a,b){var z,y,x,w,v,u
for(z=J.B(b),y=W.y,x={func:1,ret:-1,args:[y]};z.n();){w=z.gp()
v=J.O(w)
if(J.am(v.h(w,"type"),this.c)){u=document.createElement("a")
u.href="#"
C.n.a2(u,H.b(v.h(w,"name")))
C.c.B(a,u)
W.K(u,"click",H.h(new U.h9(this,a,w),x),!1,y)}}}},
hb:{"^":"j:0;a,b",
$1:function(a){H.d(a,"$isy")
this.a.cN(this.b)
a.stopPropagation()}},
hc:{"^":"j:0;a",
$1:function(a){H.d(a,"$isy")
this.a.classList.add("highlight")}},
hd:{"^":"j:0;a",
$1:function(a){H.d(a,"$isy")
this.a.classList.remove("highlight")}},
ha:{"^":"j:4;a,b",
$1:function(a){var z,y,x
z=this.a
y=this.b
x=y.value
z.b=x
if(x===""){z.b="0"
y.value="0"}}},
he:{"^":"j:42;",
$1:function(a){return}},
hh:{"^":"j:0;a,b",
$1:function(a){H.d(a,"$isy")
this.a.cN(this.b)
a.stopPropagation()}},
hf:{"^":"j:8;",
$1:function(a){return J.bc(H.d(a,"$isu"))}},
hg:{"^":"j:0;a,b",
$1:function(a){var z
H.d(a,"$isy")
C.c.Y(this.b)
z=this.a
z.b=null
C.a.sj(z.e,0)
z.a.bB()
a.stopPropagation()
a.preventDefault()}},
h9:{"^":"j:0;a,b,c",
$1:function(a){var z,y,x
H.d(a,"$isy")
C.c.Y(this.b)
z=this.a
y=this.c
x=J.O(y)
z.d5(H.a2(x.h(y,"arguments")))
z.b=H.m(x.h(y,"name"))
z.c=H.m(x.h(y,"type"))
z.d=H.m(x.h(y,"format"))
z.a.bB()
a.stopPropagation()
a.preventDefault()}},
h_:{"^":"c;a,0b,0c",
m:function(a){var z,y
z=new P.aP("")
this.c.aW(z)
y=z.a
return y.charCodeAt(0)==0?y:y},
aw:function(a){var z=J.l(a)
if(!!z.$isG)this.c.aw(a)
else if(a!=null)this.c.b=z.m(a)},
bB:function(){var z=this.b
if(z!=null&&this.c!=null){J.fi(z).aS(0)
this.c.b0(H.d(this.b,"$iscr"))}}},
co:{"^":"c;",
aq:function(a,b,c){var z,y
for(z=this.a,y=0;y<b;++y)a.a+=z
a.a+=c+"\n"},
ao:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=J.O(b)
y=H.m(z.h(b,"format"))
x=z.h(b,"params")
w=z.h(b,"properties")
v=J.l(x)
u=!!v.$isq?v.gj(x):0
t=J.l(w)
s=!!t.$isq?t.gj(w):0
if(typeof y!=="string"){y=H.b(z.h(b,"action"))
for(r=0;r<u;++r)y+=" {"+r+"}"
for(r=0;r<s;++r)y+=" {P"+r+"}"}for(r=0;r<u;++r){z="{"+r+"}"
q=this.cc(v.h(x,r))
if(typeof q!=="string")H.P(H.a1(q))
y=H.d9(y,z,q)}for(r=0;r<s;++r){z="{P"+r+"}"
v=this.cc(t.h(w,r))
if(typeof v!=="string")H.P(H.a1(v))
y=H.d9(y,z,v)}this.aq(a,c,y)},
cc:function(a){var z=J.O(a)
if(!!J.l(z.h(a,"value")).$isG)return this.ap(z.h(a,"value"))
else{z=z.h(a,"value")
return z==null?"":J.C(z)}},
ap:function(a){var z,y,x,w,v,u,t
z=J.O(a)
y=z.h(a,"children")
if(y==null||!J.l(y).$isq)y=[]
x=z.h(a,"name")
w=x==null?"":J.C(x)
x=z.h(a,"format")
if(typeof x==="string"){v=H.m(z.h(a,"format"))
z=J.O(y)
u=0
while(!0){x=H.az(z.gj(y))
if(typeof x!=="number")return H.e(x)
if(!(u<x))break
x="{"+u+"}"
t=this.ap(z.h(y,u))
v.toString
if(typeof t!=="string")H.P(H.a1(t))
v=H.d9(v,x,t);++u}return v}else{z=J.O(y)
if(z.gj(y)===1)return"("+H.b(w)+" "+H.b(this.ap(z.h(y,0)))+")"
else if(z.gj(y)===2)return"("+H.b(this.ap(z.h(y,0)))+" "+H.b(w)+" "+H.b(this.ap(z.h(y,1)))+")"
else return w}}},
i4:{"^":"co;a",
cb:function(a){var z,y
z=new P.aP("")
for(y=J.B(H.X(a.h(0,"chains"),"$iso"));y.n();){this.a3(z,y.gp(),0)
z.a+="\n"}y=z.a
return y.charCodeAt(0)==0?y:y},
a3:function(a,b,c){var z,y,x,w,v,u
for(z=J.B(H.X(b,"$iso")),y=c+1;z.n();){x=z.gp()
this.ao(a,x,c)
w=J.O(x)
if(!!J.l(w.h(x,"children")).$isq)this.a3(a,w.h(x,"children"),y)
if(!!J.l(w.h(x,"clauses")).$isq)for(w=J.B(H.X(w.h(x,"clauses"),"$iso"));w.n();){v=w.gp()
this.ao(a,v,c)
u=J.O(v)
if(!!J.l(u.h(v,"children")).$isq)this.a3(a,u.h(v,"children"),y)}}}},
hT:{"^":"co;a",
cb:function(a){var z,y,x,w
z=new P.aP("")
for(y=J.B(H.X(a.h(0,"chains"),"$iso"));y.n();){x=y.gp()
w=J.O(x)
if(J.dc(w.gj(x),0)&&J.am(J.ba(w.h(x,0),"type"),"nlogo:procedure")){this.ao(z,w.a1(x,0),0)
this.a3(z,x,1)
w=z.a+="end\n"
z.a=w+"\n"}}y=z.a
return y.charCodeAt(0)==0?y:y},
a3:function(a,b,c){var z,y,x,w,v,u
for(z=J.B(H.X(b,"$iso")),y=c+1;z.n();){x=z.gp()
this.ao(a,x,c)
w=J.O(x)
if(!!J.l(w.h(x,"children")).$isq){this.aq(a,c,"[")
this.a3(a,w.h(x,"children"),y)
this.aq(a,c,"]")}if(!!J.l(w.h(x,"clauses")).$isq)for(w=J.B(H.X(w.h(x,"clauses"),"$iso"));w.n();){v=w.gp()
this.ao(a,v,c)
u=J.O(v)
if(!!J.l(u.h(v,"children")).$isq){this.aq(a,c,"[")
this.a3(a,u.h(v,"children"),y)
this.aq(a,c,"]")}}}}},
fw:{"^":"c;a,b,c,d",
gu:function(a){return this.a.y-this.d},
gv:function(a){return 0},
eF:function(a){var z,y
if(!a.r1)if(!a.r2){z=a.e
y=a.r
if(typeof y!=="number")return y.w()
if(typeof z!=="number")return z.i()
y=z+y*0.75>=this.a.y-this.d
z=y}else z=!1
else z=!1
return z},
d1:function(a){var z,y,x,w
for(z=this.b,y=z.length,x=0;x<y;++x){w=z[x].a
if(w.b==a)return w}return},
aL:function(a){var z,y,x,w,v,u,t
z=$.$get$ao()
if(typeof z!=="number")return z.w()
z*=1.5
this.d=z
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w,z=t){v=y[w].a
a.save()
a.font=v.fr
u=C.b.aZ(a,v.b).width
a.restore()
v=$.$get$W()
if(typeof v!=="number")return v.w()
if(typeof u!=="number")return u.i()
t=$.$get$bQ()
if(typeof t!=="number")return t.w()
t=Math.max(z,u+v*2+t*2)
this.d=t}},
bw:function(a,b){var z,y,x,w,v,u,t,s,r,q
this.aL(a)
a.save()
a.fillStyle=this.c
z=this.a
y=z.y
x=this.d
C.b.cE(a,y-x,0,x,z.z)
if(b){y=z.y
x=this.d
C.b.cE(a,y-x,0,x,z.z)}z=z.y
y=this.d
x=$.$get$bQ()
if(typeof x!=="number")return H.e(x)
w=z-y+x
x=$.$get$r()
if(typeof x!=="number")return x.ag()
v=0+x/2
for(z=this.b,y=z.length,u=0;u<z.length;z.length===y||(0,H.H)(z),++u){t=z[u]
t.b=w
t.c=v
s=t.e
r=t.d
q=t.a
r.aD(q.b)
if(typeof s!=="number")return s.K()
a.save()
r=r.aD(q.b)
if(!(s<0||s-r>0))a.globalAlpha=0.3
q.e=t.b
q.f=t.c
q.aM(a,$.$get$ao())
q.bc(a)
q.bd(a)
q.be(a)
a.restore()
v+=x*1.5}a.restore()}},
e1:{"^":"c;a,0u:b>,0v:c>,d,e",
eC:function(){var z,y
z=this.e
y=this.d.aD(this.a.b)
if(typeof z!=="number")return z.K()
return z<0||z-y>0},
aV:function(a){return this.a.aV(a)},
ae:function(a){var z,y,x,w,v
if(this.eC()){z=this.a
y=z.aT(0)
x=z.e
if(typeof x!=="number")return x.K()
y.e=x-5
z=z.f
if(typeof z!=="number")return z.K()
y.f=z-5
y.r2=!0
z=this.d
z.am(y)
if(!!y.$isbd)for(x=y.R,w=x.length,v=0;v<x.length;x.length===w||(0,H.H)(x),++v)z.am(x[v])
return y.ae(a)}return this},
bH:function(a){},
bF:function(a){},
bG:function(a){},
$isc5:1},
at:{"^":"c;0a,b,0c,0d,e,f,r,x,y,z,Q,ch",
sb1:function(a,b){this.e=H.m(b)},
gM:function(a){var z=this.c
return z==null?"":J.C(z)},
sM:function(a,b){var z=b==null?"":J.C(b)
this.c=z
return z},
gaf:function(){return H.b(J.C(this.c))+H.b(this.r)},
ak:function(a,b){var z=$.dS
$.dS=z+1
this.a=z
z=b.h(0,"type")
this.e=z==null?"num":J.C(z)
z=b.h(0,"name")
this.f=z==null?"":J.C(z)
z=b.h(0,"unit")
this.r=z==null?"":J.C(z)
z=b.h(0,"default")
this.d=z
this.sM(0,z)},
aU:function(a,b){return U.cJ(b,this.J())},
J:["bQ",function(){return P.cE(["type",this.e,"name",this.f,"unit",this.r,"value",this.gM(this),"default",this.d])}],
aL:function(a){var z,y
z=$.$get$W()
if(typeof z!=="number")return z.w()
this.z=z*2
a.save()
a.font=this.b.fr
z=this.z
y=C.b.aZ(a,this.gaf()).width
if(typeof y!=="number")return H.e(y)
this.z=z+y
a.restore()},
cC:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
this.x=b
this.y=c
z=this.b
a.font=z.fr
a.textAlign="center"
a.textBaseline="middle"
y=z.e
if(typeof y!=="number")return y.i()
x=y+b
y=z.f
if(typeof y!=="number")return y.i()
w=$.$get$r()
if(typeof w!=="number")return w.ag()
v=this.Q
u=v/2
t=y+c+w/2-u
s=this.z
a.beginPath()
a.beginPath()
w=x+u
C.b.az(a,w,t)
y=x+s
r=y-u
C.b.t(a,r,t)
q=t+u
C.b.H(a,y,t,y,q)
p=t+v
u=p-u
C.b.t(a,y,u)
C.b.H(a,y,p,r,p)
C.b.t(a,w,p)
C.b.H(a,x,p,x,u)
C.b.t(a,x,q)
C.b.H(a,x,t,w,t)
a.closePath()
a.fillStyle=this.ch?z.db:z.dx
a.fill()
a.fillStyle=this.ch?z.dx:z.db
C.b.cF(a,this.gaf(),x+s/2,t+v*0.55)},
bw:function(a,b){return this.cC(a,b,0)},
aV:function(a){var z,y,x,w,v
z=a.c
y=this.b
x=y.e
w=this.x
if(typeof x!=="number")return x.i()
w=x+w
if(z>=w){x=a.e
y=y.f
v=this.y
if(typeof y!=="number")return y.i()
v=y+v
if(x>=v)if(z<=w+this.z){z=$.$get$r()
if(typeof z!=="number")return H.e(z)
z=x<=v+z}else z=!1
else z=!1}else z=!1
return z},
bH:function(a){this.ch=!1
this.aP(H.t(a.d),H.t(a.f))
this.b.fy.N()},
ae:function(a){this.ch=!0
this.b.fy.N()
return this},
bF:function(a){},
bG:function(a){},
aP:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=document
y=z.createElement("div")
y.className="backdrop"
x=this.c_()
C.c.a6(y,"beforeend",'      <div class="nt-param-dialog" style="top: '+b+';">\n        <div class="nt-param-table">\n          <div class="nt-param-row">'+x+'</div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>',null,null)
w=H.d(C.d.X(z,"#"+H.b(this.b.fy.f)).parentElement,"$isM")
if(w==null)return
J.aB(w,y)
v=H.d(C.d.X(z,"#nt-param-label-"+this.a),"$isM")
u=H.d(C.d.X(z,"#nt-param-"+this.a),"$isc_")
t=W.u
H.aa(t,t,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
s=[t]
r=[t]
q=[W.y]
new W.aZ(H.x(new W.ae(C.d.P(z,".nt-param-confirm"),s),"$isZ",r,"$asZ"),!1,"click",q).a7(new U.i0(this,u,y))
H.aa(t,t,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
new W.aZ(H.x(new W.ae(C.d.P(z,".nt-param-cancel"),s),"$isZ",r,"$asZ"),!1,"click",q).a7(new U.i1(y))
y.classList.add("show")
if(u!=null){u.focus()
if(v!=null){z=W.T
t={func:1,ret:-1,args:[z]}
W.K(u,"change",H.h(new U.i2(v,u),t),!1,z)
W.K(u,"input",H.h(new U.i3(v,u),t),!1,z)}}},
c_:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="text" value="'+this.gaf()+'">\n      <span class="nt-param-unit">'+H.b(this.r)+"</span>\n    "},
$isc5:1,
q:{
dR:function(a,b){var z=$.$get$r()
if(typeof z!=="number")return z.w()
z=new U.at(a,"int","","",0,0,28,z*0.6,!1)
z.ak(a,b)
return z},
cJ:function(a,b){var z=b.h(0,"type")
switch(z==null?"num":J.C(z)){case"int":z=$.$get$r()
if(typeof z!=="number")return z.w()
z=new U.ht(!1,1,a,"int","","",0,0,28,z*0.6,!1)
z.ak(a,b)
z.bR(a,b)
z.cy=1
return z
case"num":return U.cu(a,b)
case"bool":return U.cu(a,b)
case"range":z=$.$get$r()
if(typeof z!=="number")return z.w()
z=new U.ik(0,10,!1,1,a,"int","","",0,0,28,z*0.6,!1)
z.ak(a,b)
z.bR(a,b)
z.r1=U.aA(b.h(0,"min"),z.r1)
z.r2=U.aA(b.h(0,"max"),z.r2)
return z
case"select":return U.dZ(a,b)
case"text":return U.dR(a,b)
default:return U.dR(a,b)}}}},
i0:{"^":"j:0;a,b,c",
$1:[function(a){var z
H.d(a,"$isy")
z=this.b
if(z!=null)this.a.sM(0,z.value)
C.c.Y(this.c)
z=this.a.b.fy
z.N()
z.aB()},null,null,4,0,null,0,"call"]},
i1:{"^":"j:5;a",
$1:[function(a){H.d(a,"$isy")
return C.c.Y(this.a)},null,null,4,0,null,0,"call"]},
i2:{"^":"j:4;a,b",
$1:function(a){J.ci(this.a,this.b.value)}},
i3:{"^":"j:4;a,b",
$1:function(a){J.ci(this.a,this.b.value)}},
dQ:{"^":"at;",
bR:function(a,b){this.cx=U.da(b.h(0,"random"),!1)
this.cy=U.aA(b.h(0,"step"),this.cy)},
J:["dg",function(){var z=this.bQ()
z.k(0,"random",this.cx)
z.k(0,"step",this.cy)
return z}],
gM:function(a){return U.aA(this.c,0)},
sM:function(a,b){var z=U.aA(b,0)
this.c=z
return z},
gaf:function(){var z=J.fr(this.gM(this),1)
if(C.f.ev(z,".0"))z=C.f.aa(z,0,z.length-2)
return z+H.b(this.r)},
c_:function(){return'      <div class="nt-param-name">'+H.b(this.f)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+this.a+'" type="number" step="'+H.b(this.cy)+'" value="'+H.b(this.gM(this))+'">\n        <span class="nt-param-unit">'+H.b(this.r)+"</span>\n      </div>\n    "}},
ht:{"^":"dQ;cx,cy,0a,b,0c,0d,e,f,r,x,y,z,Q,ch",
gM:function(a){return U.db(this.c,0)},
sM:function(a,b){var z=U.db(b,0)
this.c=z
return z}},
ik:{"^":"dQ;r1,r2,cx,cy,0a,b,0c,0d,e,f,r,x,y,z,Q,ch",
J:function(){var z=this.dg()
z.k(0,"min",this.r1)
z.k(0,"max",this.r2)
return z},
aP:function(a,b){var z,y,x,w,v,u,t,s,r
z=document
y=z.createElement("div")
y.className="backdrop"
x=z.createElement("div")
x.className="nt-param-dialog"
w=x.style
v=""+b+"px"
w.top=v
u=z.createElement("div")
u.className="nt-param-table"
C.c.a6(u,"beforeend",'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.b(this.f)+':\n            <label id="nt-param-label-'+this.a+'" for="nt-param-'+this.a+'">'+H.b(U.aA(this.c,0))+'</label>\n            <span class="nt-param-unit">'+H.b(this.r)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+this.a+'" type="range" value="'+H.b(U.aA(this.c,0))+'" min="'+H.b(this.r1)+'" max="'+H.b(this.r2)+'" step="'+H.b(this.cy)+'">\n          </div>\n        </div>\n      ',null,null)
C.c.B(x,u)
w=W.y
v={func:1,ret:-1,args:[w]}
W.K(x,"click",H.h(new U.il(),v),!1,w)
C.c.B(y,x)
W.K(y,"click",H.h(new U.im(y),v),!1,w)
t=H.d(C.d.X(z,"#"+H.b(this.b.fy.f)).parentElement,"$isM")
if(t!=null)J.aB(t,y)
s=H.d(C.d.X(z,"#nt-param-label-"+this.a),"$isM")
r=H.d(C.d.X(z,"#nt-param-"+this.a),"$isc_")
if(r!=null&&s!=null){z=W.T
w={func:1,ret:-1,args:[z]}
W.K(r,"change",H.h(new U.io(this,r,y),w),!1,z)
W.K(r,"input",H.h(new U.ip(s,r),w),!1,z)}y.classList.add("show")}},
il:{"^":"j:0;",
$1:function(a){H.d(a,"$isy").stopPropagation()}},
im:{"^":"j:0;a",
$1:function(a){H.d(a,"$isy")
C.c.Y(this.a)}},
io:{"^":"j:4;a,b,c",
$1:function(a){var z=this.a
z.c=U.aA(this.b.value,0)
C.c.Y(this.c)
z=z.b.fy
z.N()
z.aB()
a.stopPropagation()}},
ip:{"^":"j:4;a,b",
$1:function(a){J.ci(this.a,this.b.value)}},
iu:{"^":"at;cx,0a,b,0c,0d,e,f,r,x,y,z,Q,ch",
gaf:function(){return H.b(J.C(this.c))+H.b(this.r)+" \u25be"},
aU:function(a,b){return U.dZ(b,this.J())},
J:function(){var z=this.bQ()
z.k(0,"values",this.cx)
return z},
aP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=document
y=z.createElement("div")
y.className="backdrop"
x=z.createElement("div")
x.className="nt-param-dialog small"
w=x.style
v=""+b+"px"
w.top=v
u=z.createElement("div")
u.className="nt-param-table"
for(w=J.B(this.cx),v=W.y,t={func:1,ret:-1,args:[v]};w.n();){s=w.gp()
r=z.createElement("div")
r.className="nt-param-row"
q=z.createElement("div")
q.className="nt-select-option"
H.m(s)
C.c.a2(q,s)
p=this.c
if(s==(p==null?"":J.C(p)))q.classList.add("selected")
W.K(q,"click",H.h(new U.iv(this,s,y),t),!1,v)
C.c.B(r,q)
C.c.B(u,r)}C.c.B(x,u)
C.c.B(y,x)
W.K(y,"click",H.h(new U.iw(y),t),!1,v)
o=H.d(C.d.X(z,"#"+H.b(this.b.fy.f)).parentElement,"$isM")
if(o!=null)J.aB(o,y)
y.classList.add("show")},
q:{
dZ:function(a,b){var z,y
z=$.$get$r()
if(typeof z!=="number")return z.w()
z=new U.iu([],a,"int","","",0,0,28,z*0.6,!1)
z.ak(a,b)
if(!!J.l(b.h(0,"values")).$isq&&J.dc(J.ab(b.h(0,"values")),0)){y=H.a2(b.h(0,"values"))
z.cx=y
z.c=J.ba(y,0)}return z}}},
iv:{"^":"j:0;a,b,c",
$1:function(a){var z,y
H.d(a,"$isy")
z=this.a
y=this.b
z.c=y==null?"":J.C(y)
C.c.Y(this.c)
z=z.b.fy
z.N()
z.aB()
a.stopPropagation()}},
iw:{"^":"j:0;a",
$1:function(a){H.d(a,"$isy")
C.c.Y(this.a)}},
h0:{"^":"at;0cx,0a,b,0c,0d,e,f,r,x,y,z,Q,ch",
gaf:function(){var z=this.cx
return z!=null?z.m(0):""},
gM:function(a){return this.c},
sM:function(a,b){var z
this.c=b
z=this.cx
if(z!=null)z.aw(b)},
aU:function(a,b){return U.cu(b,this.J())},
aP:function(a,b){var z,y,x,w,v,u,t,s,r
z=document
y=z.createElement("div")
y.className="backdrop"
C.c.a6(y,"beforeend",'      <div class="nt-param-dialog" style="top: '+b+';">\n        <div class="nt-param-table">\n          <div class="nt-param-row">\n            <div class="nt-param-label">'+H.b(this.f)+':</div>\n          </div>\n          <div class="nt-param-row">\n            <div id="nt-expression-'+this.a+'" class="nt-expression-root"></div>\n          </div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>',null,null)
x=H.d(C.d.X(z,"#"+H.b(this.b.fy.f)).parentElement,"$isM")
if(x==null)return
J.aB(x,y)
w=W.u
H.aa(w,w,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
v=[w]
u=[w]
t=[W.y]
new W.aZ(H.x(new W.ae(C.d.P(z,".nt-param-confirm"),v),"$isZ",u,"$asZ"),!1,"click",t).a7(new U.h4(this,y))
H.aa(w,w,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
new W.aZ(H.x(new W.ae(C.d.P(z,".nt-param-confirm"),v),"$isZ",u,"$asZ"),!1,"mousedown",t).a7(new U.h5())
H.aa(w,w,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
new W.aZ(H.x(new W.ae(C.d.P(z,".nt-param-confirm"),v),"$isZ",u,"$asZ"),!1,"mouseup",t).a7(new U.h6())
H.aa(w,w,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
new W.aZ(H.x(new W.ae(C.d.P(z,".nt-param-cancel"),v),"$isZ",u,"$asZ"),!1,"click",t).a7(new U.h7(y))
y.classList.add("show")
s=this.cx
r="#nt-expression-"+this.a
s.toString
s.b=C.d.X(z,r)
s.bB()
H.aa(w,w,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
new W.aZ(H.x(new W.ae(C.d.P(z,".nt-param-dialog"),v),"$isZ",u,"$asZ"),!1,"click",t).a7(new U.h8())},
q:{
cu:function(a,b){var z,y
z=$.$get$r()
if(typeof z!=="number")return z.w()
z=new U.h0(a,"int","","",0,0,28,z*0.6,!1)
z.ak(a,b)
y=new U.h_(a.fy)
y.c=new U.aW(y,H.m(b.h(0,"type")),H.w([],[U.aW]))
z.cx=y
y.aw(z.c)
return z}}},
h4:{"^":"j:31;a,b",
$1:[function(a){var z,y
H.d(a,"$isy")
z=W.u
y=document
H.aa(z,z,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
if(C.d.P(y,".nt-expression.empty").length>0)return!1
z=this.a
z.c=z.cx.c.J()
C.c.Y(this.b)
z=z.b.fy
z.N()
z.aB()},null,null,4,0,null,0,"call"]},
h5:{"^":"j:0;",
$1:[function(a){var z,y
H.d(a,"$isy")
z=W.u
y=document
H.aa(z,z,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
z=new W.ae(C.d.P(y,".nt-expression.empty"),[z])
z.D(z,new U.h3())},null,null,4,0,null,0,"call"]},
h3:{"^":"j:13;",
$1:function(a){return J.de(H.d(a,"$isu")).l(0,"warn")}},
h6:{"^":"j:0;",
$1:[function(a){var z,y
H.d(a,"$isy")
z=W.u
y=document
H.aa(z,z,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
z=new W.ae(C.d.P(y,".nt-expression.empty"),[z])
z.D(z,new U.h2())},null,null,4,0,null,0,"call"]},
h2:{"^":"j:13;",
$1:function(a){return J.de(H.d(a,"$isu")).I(0,"warn")}},
h7:{"^":"j:0;a",
$1:[function(a){H.d(a,"$isy")
C.c.Y(this.a)},null,null,4,0,null,0,"call"]},
h8:{"^":"j:0;",
$1:[function(a){var z,y
H.d(a,"$isy")
z=W.u
y=document
H.aa(z,z,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
z=new W.ae(C.d.P(y,".nt-pulldown-menu"),[z])
z.D(z,new U.h1())},null,null,4,0,null,0,"call"]},
h1:{"^":"j:8;",
$1:function(a){return J.bc(H.d(a,"$isu"))}},
cp:{"^":"e9;f,r,x,0y,0z,0Q,ch,cx,0cy,db,a,b,c,d,e",
dk:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.f
y="#"+H.b(z)
x=H.d(C.d.X(document,y),"$isbV")
if(x==null)throw H.f("No canvas element with ID "+H.b(z)+" found.")
this.cy=H.d(C.o.bK(x,"2d"),"$isbW")
z=x.style
y=H.b(x.width)+"px"
z.width=y
z=x.style
y=H.b(x.height)+"px"
z.height=y
z=x.width
y=$.$get$a_()
if(typeof z!=="number")return z.w()
if(typeof y!=="number")return H.e(y)
z=H.t(z*y)
this.y=z
w=x.height
if(typeof w!=="number")return w.w()
w=H.t(w*y)
this.z=w
x.width=z
x.height=w
w=this.c
z=[P.af]
v=new U.c4(H.w([1,0,0,0,1,0,0,0,1],z))
v.seW(H.w([1/y,0,0,0,1/y,0,0,0,1],z))
w.eI(v)
this.d=w.eB()
w=this.db
w.eK(x)
C.a.l(w.c,this)
w=H.w([],[U.e1])
v=$.$get$ao()
z=$.$get$bQ()
if(typeof z!=="number")return z.w()
if(typeof v!=="number")return v.i()
this.Q=new U.fw(this,w,"rgba(0,0,0, 0.2)",v+z*2)
z=this.x
if(!!J.l(z.h(0,"blocks")).$isq)for(y=J.B(H.X(z.h(0,"blocks"),"$iso"));y.n();){u=H.d(y.gp(),"$isG")
t=U.dp(this,u)
s=U.db(u.h(0,"limit"),-1)
w=this.Q
v=w.b
w=w.a
r=new U.e1(t,w,s)
t.r1=!0
C.a.l(w.a,r)
C.a.l(v,r)}if(!!J.l(z.h(0,"variables")).$isq)this.ch=H.a2(z.h(0,"variables"))
if(!!J.l(z.h(0,"expressions")).$isq)this.cx=H.a2(z.h(0,"expressions"))
if(!!J.l(z.h(0,"program")).$isG)this.e0(H.d(z.h(0,"program"),"$isG"))
this.N()
this.cX()},
eS:function(){C.a.sj(this.a,0)
C.a.sj(this.r,0)
C.a.I(this.db.c,this)},
cX:function(){if(this.ef(0))this.N()
C.T.geg(window).cV(new U.fE(this),-1)},
aB:function(){var z
this.N()
try{$.$get$d4().h(0,"NetTango").bv("_relayCallback",H.w([this.f],[P.k]))}catch(z){H.Q(z)
H.kS("Unable to relay program changed event to Javascript")}},
by:function(){var z,y,x,w,v,u,t,s
z=P.cE(["chains",[]])
for(y=this.r,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){v=y[w]
if(v.gcI()){u=z.h(0,"chains")
t=[]
v.Z(t)
J.an(u,t)}}for(y=this.Q.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){u=y[w].a
if(u.fx)if(this.aD(u.b)===0){s=z.h(0,"chains")
t=[]
u.Z(t)
J.an(s,t)}}return z},
am:function(a){var z,y,x,w
C.a.l(this.r,a)
z=this.a
C.a.l(z,a)
for(y=a.cx,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.l(z,y[w])
for(y=a.cy,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.l(z,y[w])},
dW:function(a){var z,y,x,w
C.a.I(this.r,a)
z=this.a
C.a.I(z,a)
for(y=a.cx,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.I(z,y[w])
for(y=a.cy,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.I(z,y[w])
this.N()},
aD:function(a){var z,y,x,w
for(z=this.r,y=z.length,x=0,w=0;w<y;++w)if(z[w].b==a)++x
return x},
co:function(a){var z,y,x
z=this.c8(a)
if(z!=null){y=z.y
z.y=a
a.z=z
if(y!=null){x=a.gav()
y.z=x
x.y=y}return!0}z=this.c7(a)
if(z!=null){z.z=a
a.y=z
return!0}return!1},
ea:function(a){var z,y
if(this.Q.eF(a)){for(z=this.r,y=this.a;a!=null;){C.a.I(z,a)
C.a.I(y,a)
a=a.gb_()}return!0}return!1},
c8:function(a){var z,y,x,w,v,u,t,s,r
if(a.z==null&&a.go)for(z=this.r,y=z.length,x=0;x<y;++x){w=z[x]
if(w==null?a!=null:w!==a){v=a.e
u=w.e
t=w.r
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.e(t)
if(typeof v!=="number")return v.ai()
if(v<u+t){t=a.r
if(typeof t!=="number")return H.e(t)
u=v+t>u
v=u}else v=!1
if(v){s=w.f
v=w.r1?$.$get$r():w.x
if(typeof s!=="number")return s.i()
if(typeof v!=="number")return H.e(v)
r=s+v
v=$.$get$W()
if(typeof v!=="number")return H.e(v)
u=w.y==null
if(!u){t=a.f
if(typeof t!=="number")return t.ai()
t=t<r&&t>s}else t=!1
if(t)return w
else{if(u){u=a.f
if(typeof u!=="number")return u.bL()
v=u>s&&u<r+v}else v=!1
if(v)return w}}}}return},
c7:function(a){var z,y,x,w,v,u,t
if(a.y==null)for(z=this.r,y=z.length,x=0;x<y;++x){w=z[x]
if((w==null?a!=null:w!==a)&&w.z==null&&w.go){v=a.e
u=w.e
t=w.r
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.e(t)
if(typeof v!=="number")return v.ai()
if(v<u+t){t=a.r
if(typeof t!=="number")return H.e(t)
u=v+t>u
v=u}else v=!1
if(v){v=w.f
u=a.f
t=a.r1?$.$get$r():a.x
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.e(t)
if(typeof v!=="number")return v.K()
if(Math.abs(v-(u+t))<20)return w}}}return},
ef:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
this.Q.toString
for(z=this.r,y=z.length,x=!1,w=0,v=0;v<y;++v){u=z[v]
t=u.id
if(t){s=u.e
r=u.k1
q=u.k3
if(typeof r!=="number")return r.K()
if(typeof q!=="number")return H.e(q)
if(typeof s!=="number")return s.i()
u.e=s+(r-q)
q=u.f
s=u.k2
p=u.k4
if(typeof s!=="number")return s.K()
if(typeof p!=="number")return H.e(p)
if(typeof q!=="number")return q.i()
u.f=q+(s-p)
u.k3=r
u.k4=s}if(t)x=!0
t=u.f
s=u.r1?$.$get$r():u.x
if(typeof t!=="number")return t.i()
if(typeof s!=="number")return H.e(s)
w=Math.max(t+s,w)}if(w>this.z)if(!x){z=this.y
y=$.$get$a_()
if(typeof y!=="number")return H.e(y)
t=$.$get$r()
if(typeof t!=="number")return t.w()
o=C.p.cR(z/y)
n=C.p.cR((w+t*3)/y)
t="#"+H.b(this.f)
m=H.d(C.d.X(document,t),"$isbV")
if(m!=null){z=m.style
t=""+o+"px"
z.width=t
z=m.style
t=""+n+"px"
z.height=t
z=H.t(o*y)
this.y=z
y=H.t(n*y)
this.z=y
m.width=z
m.height=y
this.cy=H.d(C.o.bK(m,"2d"),"$isbW")
this.N()}}return x},
N:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n
this.cy.save()
z=this.cy;(z&&C.b).em(z,0,0,this.y,this.z)
y=H.w([],[U.bR])
for(z=this.r,x=z.length,w=!1,v=0;v<z.length;z.length===x||(0,H.H)(z),++v){u=z[v]
if(u.z==null&&!(u instanceof U.aG)){u.a_(0,null)
u.at()
u.aM(this.cy,$.$get$ao())}if(u.id)C.a.l(y,u)
t=this.Q
t.toString
if(!u.r1)if(!u.r2){s=u.e
r=u.r
if(typeof r!=="number")return r.w()
if(typeof s!=="number")return s.i()
t=s+r*0.75>=t.a.y-t.d}else t=!1
else t=!1
if(t)w=!0}this.Q.bw(this.cy,w)
for(x=z.length,v=0;v<z.length;z.length===x||(0,H.H)(z),++v){u=z[v]
if(u.id){q=this.c8(u)
if(q!=null){t=this.cy
t.save()
t.lineWidth=5
t.strokeStyle="cyan"
t.beginPath()
s=q.e
r=q.r
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.e(r)
p=$.$get$W()
if(typeof p!=="number")return H.e(p)
o=q.f
n=q.r1?$.$get$r():q.x
if(typeof o!=="number")return o.i()
if(typeof n!=="number")return H.e(n)
C.b.az(t,s+r-p,o+n)
q.bp(t,q.y==null&&q.Q===0)
t.stroke()
t.restore()}else{q=this.c7(u)
if(q!=null){t=this.cy
t.save()
t.lineWidth=5
t.strokeStyle="cyan"
t.beginPath()
s=q.e
r=$.$get$W()
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.e(r)
p=$.$get$aF()
o=q.gax()
if(typeof p!=="number")return p.w()
C.b.az(t,s+r+p*o,q.f)
q.bq(t,q.z==null&&q.go)
t.stroke()
t.restore()}}}u.bc(this.cy)
u.bd(this.cy)
u.dH(this.cy)
u.dI(this.cy)
u.be(this.cy)}this.cy.restore()},
e0:function(a){var z,y,x,w
if(!!J.l(a.h(0,"chains")).$isq)for(z=J.B(H.X(a.h(0,"chains"),"$iso"));z.n();){y=z.gp()
x=J.l(y)
if(!!x.$isq)for(x=x.gA(y);x.n();){w=x.gp()
if(!!J.l(w).$isG)this.bs(w)}}},
bs:function(a){var z,y,x,w,v,u,t,s
z=this.Q.d1(H.m(a.h(0,"action")))
if(z!=null){y=z.aT(0)
x=a.h(0,"x")
if(typeof x==="number"){x=a.h(0,"y")
x=typeof x==="number"}else x=!1
if(x){x=a.h(0,"x")
w=$.$get$cl()
y.e=H.az(J.p(x,w))
y.f=H.az(J.p(a.h(0,"y"),w))}this.am(y)
if(!!y.$isbd)for(x=y.R,w=x.length,v=0;v<x.length;x.length===w||(0,H.H)(x),++v)this.am(x[v])
this.co(y)
for(x=this.r,w=x.length,v=0;v<x.length;x.length===w||(0,H.H)(x),++v){u=x[v]
if(u.z==null&&!(u instanceof U.aG)){u.a_(0,null)
u.at()
u.aM(this.cy,$.$get$ao())}}this.e_(y,H.a2(a.h(0,"params")),H.a2(a.h(0,"properties")))
if(!!J.l(a.h(0,"children")).$isq)for(x=J.B(H.X(a.h(0,"children"),"$iso"));x.n();){t=x.gp()
if(!!J.l(t).$isG)this.bs(t)}if(!!J.l(a.h(0,"clauses")).$isq)for(x=J.B(H.X(a.h(0,"clauses"),"$iso"));x.n();){s=x.gp()
w=J.l(s)
if(!!w.$isG&&!!J.l(s.h(0,"children")).$isq)for(w=J.B(H.X(w.h(s,"children"),"$iso"));w.n();)this.bs(H.d(w.gp(),"$isG"))}}},
e_:function(a,b,c){var z,y,x,w,v,u
z=J.l(b)
if(!!z.$isq)for(z=z.gA(b),y=a.cx,x=0;z.n();){w=z.gp()
v=J.l(w)
if(!!v.$isG&&w.E("value")){if(x>=y.length)return H.a(y,x)
y[x].sM(0,v.h(w,"value"))}++x}z=J.l(c)
if(!!z.$isq)for(z=z.gA(c),y=a.cy,x=0;z.n();){u=z.gp()
v=J.l(u)
if(!!v.$isG&&u.E("value")){if(x>=y.length)return H.a(y,x)
y[x].sM(0,v.h(u,"value"))}++x}},
q:{
dt:function(a,b){var z,y,x,w,v,u
z=H.w([],[U.bR])
y=H.w([],[U.e9])
x=P.aU
w=U.c5
v=H.w([],[w])
u=[P.af]
u=new U.cp(a,z,b,[],[],new U.iH(!1,y,new H.aJ(0,0,[x,U.e8])),v,new H.aJ(0,0,[x,w]),new U.c4(H.w([1,0,0,0,1,0,0,0,1],u)),new U.c4(H.w([1,0,0,0,1,0,0,0,1],u)),new P.bf(Date.now(),!1))
u.dk(a,b)
return u}}},
fE:{"^":"j:33;a",
$1:function(a){H.az(a)
return this.a.cX()}},
c4:{"^":"c;a",
seW:function(a){this.a=H.x(a,"$isq",[P.af],"$asq")},
eB:function(){var z,y,x,w,v,u,t,s,r,q,p
z=H.w([1,0,0,0,1,0,0,0,1],[P.af])
y=new U.c4(z)
x=this.a
w=x.length
if(0>=w)return H.a(x,0)
v=x[0]
if(4>=w)return H.a(x,4)
u=x[4]
if(8>=w)return H.a(x,8)
u=J.p(u,x[8])
w=this.a
if(7>=w.length)return H.a(w,7)
t=J.p(v,J.a6(u,J.p(w[7],w[5])))
w=this.a
u=w.length
if(3>=u)return H.a(w,3)
v=w[3]
s=w[1]
if(8>=u)return H.a(w,8)
w=J.p(s,w[8])
s=this.a
if(7>=s.length)return H.a(s,7)
r=J.p(v,J.a6(w,J.p(s[7],s[2])))
s=this.a
if(6>=s.length)return H.a(s,6)
w=s[6]
s=J.p(s[1],s[5])
v=this.a
if(4>=v.length)return H.a(v,4)
q=t-r+J.p(w,J.a6(s,J.p(v[4],v[2])))
if(q===0)return y
p=1/q
w=x.length
if(4>=w)return H.a(x,4)
v=x[4]
if(8>=w)return H.a(x,8)
v=J.p(v,x[8])
if(7>=x.length)return H.a(x,7)
v=J.a6(v,J.p(x[7],x[5]))
if(typeof v!=="number")return H.e(v)
C.a.k(z,0,p*v)
if(6>=x.length)return H.a(x,6)
v=J.p(x[6],x[5])
w=x.length
if(3>=w)return H.a(x,3)
u=x[3]
if(8>=w)return H.a(x,8)
u=J.a6(v,J.p(u,x[8]))
if(typeof u!=="number")return H.e(u)
C.a.k(z,3,p*u)
u=x.length
if(3>=u)return H.a(x,3)
v=x[3]
if(7>=u)return H.a(x,7)
v=J.p(v,x[7])
if(6>=x.length)return H.a(x,6)
v=J.a6(v,J.p(x[6],x[4]))
if(typeof v!=="number")return H.e(v)
C.a.k(z,6,p*v)
if(7>=x.length)return H.a(x,7)
v=J.p(x[7],x[2])
u=x.length
if(1>=u)return H.a(x,1)
w=x[1]
if(8>=u)return H.a(x,8)
w=J.a6(v,J.p(w,x[8]))
if(typeof w!=="number")return H.e(w)
C.a.k(z,1,p*w)
w=x.length
if(0>=w)return H.a(x,0)
v=x[0]
if(8>=w)return H.a(x,8)
v=J.p(v,x[8])
if(6>=x.length)return H.a(x,6)
v=J.a6(v,J.p(x[6],x[2]))
if(typeof v!=="number")return H.e(v)
C.a.k(z,4,p*v)
if(6>=x.length)return H.a(x,6)
v=J.p(x[6],x[1])
w=x.length
if(0>=w)return H.a(x,0)
u=x[0]
if(7>=w)return H.a(x,7)
u=J.a6(v,J.p(u,x[7]))
if(typeof u!=="number")return H.e(u)
C.a.k(z,7,p*u)
u=x.length
if(1>=u)return H.a(x,1)
v=x[1]
if(5>=u)return H.a(x,5)
v=J.p(v,x[5])
if(4>=x.length)return H.a(x,4)
v=J.a6(v,J.p(x[4],x[2]))
if(typeof v!=="number")return H.e(v)
C.a.k(z,2,p*v)
if(3>=x.length)return H.a(x,3)
v=J.p(x[3],x[2])
u=x.length
if(0>=u)return H.a(x,0)
w=x[0]
if(5>=u)return H.a(x,5)
w=J.a6(v,J.p(w,x[5]))
if(typeof w!=="number")return H.e(w)
C.a.k(z,5,p*w)
w=x.length
if(0>=w)return H.a(x,0)
v=x[0]
if(4>=w)return H.a(x,4)
v=J.p(v,x[4])
if(3>=x.length)return H.a(x,3)
v=J.a6(v,J.p(x[3],x[1]))
if(typeof v!=="number")return H.e(v)
C.a.k(z,8,p*v)
return y},
eI:function(a){var z,y,x,w,v
z=H.w([1,0,0,0,1,0,0,0,1],[P.af])
y=this.a
if(0>=y.length)return H.a(y,0)
y=y[0]
x=a.a
if(0>=x.length)return H.a(x,0)
x=J.p(y,x[0])
y=this.a
if(1>=y.length)return H.a(y,1)
y=y[1]
w=a.a
if(3>=w.length)return H.a(w,3)
w=J.S(x,J.p(y,w[3]))
y=this.a
if(2>=y.length)return H.a(y,2)
y=y[2]
x=a.a
if(6>=x.length)return H.a(x,6)
C.a.k(z,0,J.S(w,J.p(y,x[6])))
x=this.a
if(0>=x.length)return H.a(x,0)
x=x[0]
y=a.a
if(1>=y.length)return H.a(y,1)
y=J.p(x,y[1])
x=this.a
if(1>=x.length)return H.a(x,1)
x=x[1]
w=a.a
if(4>=w.length)return H.a(w,4)
w=J.S(y,J.p(x,w[4]))
x=this.a
if(2>=x.length)return H.a(x,2)
x=x[2]
y=a.a
if(7>=y.length)return H.a(y,7)
C.a.k(z,1,J.S(w,J.p(x,y[7])))
y=this.a
if(0>=y.length)return H.a(y,0)
y=y[0]
x=a.a
if(2>=x.length)return H.a(x,2)
x=J.p(y,x[2])
y=this.a
if(1>=y.length)return H.a(y,1)
y=y[1]
w=a.a
if(5>=w.length)return H.a(w,5)
w=J.S(x,J.p(y,w[5]))
y=this.a
if(2>=y.length)return H.a(y,2)
y=y[2]
x=a.a
if(8>=x.length)return H.a(x,8)
C.a.k(z,2,J.S(w,J.p(y,x[8])))
x=this.a
if(3>=x.length)return H.a(x,3)
x=x[3]
y=a.a
if(0>=y.length)return H.a(y,0)
y=J.p(x,y[0])
x=this.a
if(4>=x.length)return H.a(x,4)
x=x[4]
w=a.a
if(3>=w.length)return H.a(w,3)
w=J.S(y,J.p(x,w[3]))
x=this.a
if(5>=x.length)return H.a(x,5)
x=x[5]
y=a.a
if(6>=y.length)return H.a(y,6)
C.a.k(z,3,J.S(w,J.p(x,y[6])))
y=this.a
if(3>=y.length)return H.a(y,3)
y=y[3]
x=a.a
if(1>=x.length)return H.a(x,1)
x=J.p(y,x[1])
y=this.a
if(4>=y.length)return H.a(y,4)
y=y[4]
w=a.a
if(4>=w.length)return H.a(w,4)
w=J.S(x,J.p(y,w[4]))
y=this.a
if(5>=y.length)return H.a(y,5)
y=y[5]
x=a.a
if(7>=x.length)return H.a(x,7)
C.a.k(z,4,J.S(w,J.p(y,x[7])))
x=this.a
if(3>=x.length)return H.a(x,3)
x=x[3]
y=a.a
if(2>=y.length)return H.a(y,2)
y=J.p(x,y[2])
x=this.a
if(4>=x.length)return H.a(x,4)
x=x[4]
w=a.a
if(5>=w.length)return H.a(w,5)
w=J.S(y,J.p(x,w[5]))
x=this.a
if(5>=x.length)return H.a(x,5)
x=x[5]
y=a.a
if(8>=y.length)return H.a(y,8)
C.a.k(z,5,J.S(w,J.p(x,y[8])))
y=this.a
if(6>=y.length)return H.a(y,6)
y=y[6]
x=a.a
if(0>=x.length)return H.a(x,0)
x=J.p(y,x[0])
y=this.a
if(7>=y.length)return H.a(y,7)
y=y[7]
w=a.a
if(3>=w.length)return H.a(w,3)
w=J.S(x,J.p(y,w[3]))
y=this.a
if(8>=y.length)return H.a(y,8)
y=y[8]
x=a.a
if(6>=x.length)return H.a(x,6)
C.a.k(z,6,J.S(w,J.p(y,x[6])))
x=this.a
if(6>=x.length)return H.a(x,6)
x=x[6]
y=a.a
if(1>=y.length)return H.a(y,1)
y=J.p(x,y[1])
x=this.a
if(7>=x.length)return H.a(x,7)
x=x[7]
w=a.a
if(4>=w.length)return H.a(w,4)
w=J.S(y,J.p(x,w[4]))
x=this.a
if(8>=x.length)return H.a(x,8)
x=x[8]
y=a.a
if(7>=y.length)return H.a(y,7)
C.a.k(z,7,J.S(w,J.p(x,y[7])))
y=this.a
if(6>=y.length)return H.a(y,6)
y=y[6]
x=a.a
if(2>=x.length)return H.a(x,2)
x=J.p(y,x[2])
y=this.a
if(7>=y.length)return H.a(y,7)
y=y[7]
w=a.a
if(5>=w.length)return H.a(w,5)
w=J.S(x,J.p(y,w[5]))
y=this.a
if(8>=y.length)return H.a(y,8)
y=y[8]
x=a.a
if(8>=x.length)return H.a(x,8)
C.a.k(z,8,J.S(w,J.p(y,x[8])))
for(v=0;v<9;++v){y=this.a
if(v>=z.length)return H.a(z,v)
C.a.k(y,v,z[v])}},
aC:function(a){var z,y,x,w,v,u,t,s,r
z=a.c
y=this.a
x=y.length
if(0>=x)return H.a(y,0)
w=y[0]
if(typeof w!=="number")return H.e(w)
v=a.e
if(1>=x)return H.a(y,1)
u=y[1]
if(typeof u!=="number")return H.e(u)
if(2>=x)return H.a(y,2)
t=y[2]
if(typeof t!=="number")return H.e(t)
if(3>=x)return H.a(y,3)
s=y[3]
if(typeof s!=="number")return H.e(s)
if(4>=x)return H.a(y,4)
r=y[4]
if(typeof r!=="number")return H.e(r)
if(5>=x)return H.a(y,5)
y=y[5]
if(typeof y!=="number")return H.e(y)
a.c=z*w+v*u+t
a.e=z*s+v*r+y}},
iH:{"^":"c;a,0b,c,d",
aX:function(a){var z,y,x
for(z=this.c,y=0;y<z.length;++y){x=z[y].aX(a)
if(x!=null){if(y>=z.length)return H.a(z,y)
z[y].e=new P.bf(Date.now(),!1)
if(y>=z.length)return H.a(z,y)
return new U.e8(z[y],x)}else if(y>=z.length)return H.a(z,y)}return},
eK:function(a){var z,y
this.b=a
z=W.y
y={func:1,ret:-1,args:[z]}
W.K(a,"mousedown",H.h(new U.iI(this),y),!1,z)
W.K(a,"mouseup",H.h(new U.iJ(this),y),!1,z)
W.K(a,"mousemove",H.h(new U.iK(this),y),!1,z)
z=document
y=W.bE
W.K(z,"keydown",H.h(new U.iL(this),{func:1,ret:-1,args:[y]}),!1,y)
y=W.bJ
W.K(z,"touchmove",H.h(new U.iM(),{func:1,ret:-1,args:[y]}),!1,y)},
dP:function(a){var z,y
for(z=this.c.length,y=0;y<z;++y);}},
iI:{"^":"j:5;a",
$1:function(a){var z,y,x
z=this.a
y=U.cq(H.d(a,"$isy"))
x=z.aX(y)
if(x!=null){x.a.d.aC(y)
x.b=x.b.ae(y)
z.d.k(0,-1,x)}z.a=!0
return}},
iJ:{"^":"j:5;a",
$1:function(a){var z,y,x,w
H.d(a,"$isy")
z=this.a
y=z.d
x=y.h(0,-1)
if(x!=null){w=U.cq(a)
x.a.d.aC(w)
x.b.bH(w)}y.k(0,-1,null)
z.a=!1
return}},
iK:{"^":"j:5;a",
$1:function(a){var z,y,x
z=this.a
y=U.cq(H.d(a,"$isy"))
x=z.d.h(0,-1)
if(x!=null){x.a.d.aC(y)
x.b.bF(y)}else{x=z.aX(y)
if(x!=null)if(z.a){x.a.d.aC(y)
x.b.bG(y)}}return}},
iL:{"^":"j:34;a",
$1:function(a){return this.a.dP(H.d(a,"$isbE"))}},
iM:{"^":"j:35;",
$1:function(a){return H.d(a,"$isbJ").preventDefault()}},
e9:{"^":"c;",
aX:function(a){var z,y,x
z=new U.du(null,-1,0,0,0,0,!1,!1,!1,!1,!1)
z.a=a.a
z.b=a.b
z.c=a.c
z.d=a.d
z.e=a.e
z.f=a.f
z.Q=a.Q
this.d.aC(z)
for(y=this.a,x=y.length-1;x>=0;--x){if(x>=y.length)return H.a(y,x)
if(y[x].aV(z)){if(x>=y.length)return H.a(y,x)
return y[x]}}return}},
e8:{"^":"c;a,b"},
c5:{"^":"c;"},
du:{"^":"c;a,b,c,d,e,f,r,x,y,z,Q",q:{
cq:function(a){var z,y,x
z=new U.du(null,-1,0,0,0,0,!1,!1,!1,!1,!1)
z.a=-1
y=J.J(a)
x=y.gcM(a).a
x.toString
z.c=x
z.d=x
y=y.gcM(a).b
y.toString
z.e=y
z.f=y
z.Q=!0
return z}}}},1]]
setupProgram(dart,0,0)
J.l=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dE.prototype
return J.dD.prototype}if(typeof a=="string")return J.bl.prototype
if(a==null)return J.hA.prototype
if(typeof a=="boolean")return J.hy.prototype
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.ku=function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.O=function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.bx=function(a){if(a==null)return a
if(a.constructor==Array)return J.bj.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.bN=function(a){if(typeof a=="number")return J.bk.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bK.prototype
return a}
J.kv=function(a){if(typeof a=="number")return J.bk.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bK.prototype
return a}
J.d5=function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bK.prototype
return a}
J.J=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.c)return a
return J.bO(a)}
J.S=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ku(a).i(a,b)}
J.am=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.l(a).S(a,b)}
J.dc=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.bN(a).bL(a,b)}
J.fb=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.bN(a).ai(a,b)}
J.p=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kv(a).w(a,b)}
J.a6=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.bN(a).K(a,b)}
J.ba=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.kH(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.O(a).h(a,b)}
J.fc=function(a,b,c){return J.bx(a).k(a,b,c)}
J.fd=function(a,b,c,d){return J.J(a).dt(a,b,c,d)}
J.dd=function(a){return J.J(a).dz(a)}
J.fe=function(a,b){return J.J(a).dN(a,b)}
J.bb=function(a,b){return J.J(a).cl(a,b)}
J.ff=function(a,b,c,d){return J.J(a).dX(a,b,c,d)}
J.ch=function(a,b,c){return J.J(a).dY(a,b,c)}
J.an=function(a,b){return J.bx(a).l(a,b)}
J.aB=function(a,b){return J.J(a).B(a,b)}
J.fg=function(a,b){return J.O(a).F(a,b)}
J.bz=function(a,b){return J.bx(a).L(a,b)}
J.fh=function(a){return J.J(a).gei(a)}
J.fi=function(a){return J.J(a).gcv(a)}
J.de=function(a){return J.J(a).gcw(a)}
J.aC=function(a){return J.l(a).gC(a)}
J.fj=function(a){return J.O(a).gO(a)}
J.fk=function(a){return J.O(a).gcH(a)}
J.B=function(a){return J.bx(a).gA(a)}
J.ab=function(a){return J.O(a).gj(a)}
J.fl=function(a){return J.J(a).geJ(a)}
J.bP=function(a,b){return J.J(a).ah(a,b)}
J.df=function(a,b,c){return J.J(a).cG(a,b,c)}
J.fm=function(a,b,c){return J.bx(a).cJ(a,b,c)}
J.fn=function(a,b){return J.l(a).bA(a,b)}
J.bc=function(a){return J.bx(a).Y(a)}
J.fo=function(a,b){return J.J(a).eM(a,b)}
J.fp=function(a,b){return J.J(a).sb1(a,b)}
J.dg=function(a,b,c){return J.J(a).d4(a,b,c)}
J.ci=function(a,b){return J.J(a).a2(a,b)}
J.dh=function(a){return J.bN(a).bE(a)}
J.fq=function(a){return J.d5(a).eQ(a)}
J.C=function(a){return J.l(a).m(a)}
J.fr=function(a,b){return J.bN(a).eR(a,b)}
J.cj=function(a){return J.d5(a).cY(a)}
I.ay=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.di.prototype
C.j=W.bT.prototype
C.o=W.bV.prototype
C.b=W.bW.prototype
C.c=W.cr.prototype
C.A=W.fS.prototype
C.B=W.ho.prototype
C.d=W.hq.prototype
C.C=J.D.prototype
C.a=J.bj.prototype
C.p=J.dD.prototype
C.h=J.dE.prototype
C.D=J.bk.prototype
C.f=J.bl.prototype
C.K=J.bm.prototype
C.R=W.hW.prototype
C.v=J.i5.prototype
C.w=W.ij.prototype
C.x=W.iD.prototype
C.m=J.bK.prototype
C.T=W.cO.prototype
C.y=new P.i_()
C.z=new P.j9()
C.e=new P.jH()
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
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
C.q=function(hooks) { return hooks; }

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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.i=new P.hH(null,null)
C.L=new P.hJ(null)
C.M=new P.hK(null,null)
C.N=H.w(I.ay(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.O=H.w(I.ay(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.P=H.w(I.ay([]),[P.k])
C.t=I.ay([])
C.k=H.w(I.ay(["bind","if","ref","repeat","syntax"]),[P.k])
C.l=H.w(I.ay(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.Q=H.w(I.ay([]),[P.aY])
C.u=new H.fK(0,{},C.Q,[P.aY,null])
C.S=new H.cL("call")
$.ag=0
$.be=null
$.dq=null
$.cY=!1
$.f1=null
$.eW=null
$.f8=null
$.cb=null
$.cf=null
$.d7=null
$.b2=null
$.bt=null
$.bu=null
$.cZ=!1
$.F=C.e
$.aq=null
$.cs=null
$.dz=null
$.dy=null
$.bS=0
$.bB=null
$.dS=0
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){var z=$dart_deferred_initializers$[a]
if(z==null)throw"DeferredLoading state error: code with hash '"+a+"' was not loaded"
z($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryParts={}
init.deferredPartUris=[]
init.deferredPartHashes=[];(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["bY","$get$bY",function(){return H.d6("_$dart_dartClosure")},"cy","$get$cy",function(){return H.d6("_$dart_js")},"ea","$get$ea",function(){return H.ak(H.c6({
toString:function(){return"$receiver$"}}))},"eb","$get$eb",function(){return H.ak(H.c6({$method$:null,
toString:function(){return"$receiver$"}}))},"ec","$get$ec",function(){return H.ak(H.c6(null))},"ed","$get$ed",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eh","$get$eh",function(){return H.ak(H.c6(void 0))},"ei","$get$ei",function(){return H.ak(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ef","$get$ef",function(){return H.ak(H.eg(null))},"ee","$get$ee",function(){return H.ak(function(){try{null.$method$}catch(z){return z.message}}())},"ek","$get$ek",function(){return H.ak(H.eg(void 0))},"ej","$get$ej",function(){return H.ak(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cP","$get$cP",function(){return P.iU()},"cv","$get$cv",function(){var z=new P.a4(0,C.e,[P.A])
z.e6(null)
return z},"bw","$get$bw",function(){return[]},"ex","$get$ex",function(){return P.dK(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)},"cR","$get$cR",function(){return P.dJ(P.k,P.aI)},"dx","$get$dx",function(){return P.ir("^\\S+$",!0,!1)},"d4","$get$d4",function(){return H.d(P.eU(self),"$isaK")},"cQ","$get$cQ",function(){return H.d6("_$dart_dartObject")},"cV","$get$cV",function(){return function DartObject(a){this.o=a}},"a_","$get$a_",function(){return W.kX().devicePixelRatio},"ao","$get$ao",function(){var z=$.$get$a_()
if(typeof z!=="number")return H.e(z)
return 80*z},"r","$get$r",function(){var z=$.$get$a_()
if(typeof z!=="number")return H.e(z)
return 34*z},"W","$get$W",function(){var z=$.$get$a_()
if(typeof z!=="number")return H.e(z)
return 10*z},"aF","$get$aF",function(){var z=$.$get$a_()
if(typeof z!=="number")return H.e(z)
return 25*z},"bQ","$get$bQ",function(){var z=$.$get$a_()
if(typeof z!=="number")return H.e(z)
return 10*z},"cl","$get$cl",function(){return $.$get$W()},"U","$get$U",function(){return P.cD()}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=["e","canvasId","_",null,"error","stackTrace","element","attributeName","value","context","o","jsonString","index","closure","numberOfArguments","arg1","arg2","arg3","arg4","each","arg","object","time","attr","n","callback","captureThis","self","arguments","language"]
init.types=[{func:1,ret:P.A,args:[W.y]},{func:1,ret:-1},{func:1,ret:P.A},{func:1,args:[,]},{func:1,ret:P.A,args:[W.T]},{func:1,ret:-1,args:[W.y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.L,args:[W.v]},{func:1,ret:-1,args:[W.u]},{func:1,ret:-1,args:[P.c],opt:[P.a0]},{func:1,ret:P.A,args:[,,]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:P.L,args:[W.u,P.k,P.k,W.bM]},{func:1,ret:P.L,args:[W.u]},{func:1,ret:P.A,args:[,]},{func:1,ret:P.L,args:[P.k]},{func:1,ret:P.L,args:[W.ac]},{func:1,args:[W.T]},{func:1,ret:P.A,args:[P.V]},{func:1,ret:-1,args:[P.c]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:P.L,args:[[P.au,P.k]]},{func:1,ret:W.u,args:[W.v]},{func:1,ret:P.cB,args:[,]},{func:1,ret:P.A,args:[P.aY,,]},{func:1,ret:P.aK,args:[,]},{func:1,ret:P.A,args:[P.k,,]},{func:1,ret:P.A,args:[{func:1,ret:-1}]},{func:1,ret:P.k},{func:1,ret:P.k,args:[P.k,P.k]},{func:1,args:[,P.k]},{func:1,ret:P.L,args:[W.y]},{func:1,ret:[P.a4,,],args:[,]},{func:1,ret:-1,args:[P.V]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:-1,args:[W.bJ]},{func:1,args:[P.k]},{func:1,ret:P.A,args:[,],opt:[,]},{func:1,ret:P.c,args:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[P.k]},{func:1,ret:[P.cA,,],args:[,]},{func:1,ret:P.A,args:[P.k]}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
if(x==y)H.kU(d||a)
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.ay=a.ay
Isolate.cc=a.cc
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.f4,[])
else U.f4([])})})()
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
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
init.leafTags[b9[b3]]=false}}b6.$deferredAction()}if(b6.$isA)b6.$deferredAction()}var a4=Object.keys(a5.pending)
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
if(b0)c0[b8+"*"]=a0[f]}}function tearOffGetter(d,e,f,g,a0){return a0?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"(x) {"+"if (c === null) c = "+"H.d7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(d,e,f,g,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+g+y+++"() {"+"if (c === null) c = "+"H.d7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(d,e,f,g,H,null)}function tearOff(d,e,f,a0,a1,a2){var g
return a0?function(){if(g===void 0)g=H.d7(this,d,e,f,true,[],a1).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.cf=function(){}
var dart=[["","",,H,{"^":"",lT:{"^":"c;a"}}],["","",,J,{"^":"",
dc:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bR:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.db==null){H.kW()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.d(P.ey("Return interceptor for "+H.a(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cB()]
if(v!=null)return v
v=H.l2(a)
if(v!=null)return v
if(typeof a=="function")return C.L
y=Object.getPrototypeOf(a)
if(y==null)return C.x
if(y===Object.prototype)return C.x
if(typeof w=="function"){Object.defineProperty(w,$.$get$cB(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
A:{"^":"c;",
V:function(a,b){return a===b},
gE:function(a){return H.b1(a)},
m:["dl",function(a){return"Instance of '"+H.bs(a)+"'"}],
bH:["dk",function(a,b){H.e(b,"$iscz")
throw H.d(P.dX(a,b.gcR(),b.gcX(),b.gcT(),null))}],
"%":"ArrayBuffer|CanvasGradient|CanvasPattern|Client|DOMError|MediaError|Navigator|NavigatorConcurrentHardware|NavigatorUserMediaError|OverconstrainedError|PositionError|PushMessageData|SQLError|SVGAnimatedEnumeration|SVGAnimatedNumberList|SVGAnimatedString|WebGL2RenderingContext|WebGLRenderingContext|WindowClient|WorkerLocation|WorkerNavigator"},
hK:{"^":"A;",
m:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$isO:1},
hM:{"^":"A;",
V:function(a,b){return null==b},
m:function(a){return"null"},
gE:function(a){return 0},
bH:function(a,b){return this.dk(a,H.e(b,"$iscz"))},
$isD:1},
cC:{"^":"A;",
gE:function(a){return 0},
m:["dn",function(a){return String(a)}]},
ij:{"^":"cC;"},
bM:{"^":"cC;"},
bo:{"^":"cC;",
m:function(a){var z=a[$.$get$c0()]
if(z==null)return this.dn(a)
return"JavaScript function for "+H.a(J.E(z))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isaO:1},
bk:{"^":"A;$ti",
l:function(a,b){H.o(b,H.i(a,0))
if(!!a.fixed$length)H.Q(P.C("add"))
a.push(b)},
a4:function(a,b){var z
if(!!a.fixed$length)H.Q(P.C("removeAt"))
z=a.length
if(b>=z)throw H.d(P.bJ(b,null,null))
return a.splice(b,1)[0]},
L:function(a,b){var z
if(!!a.fixed$length)H.Q(P.C("remove"))
for(z=0;z<a.length;++z)if(J.as(a[z],b)){a.splice(z,1)
return!0}return!1},
X:function(a,b){var z
H.x(b,"$isn",[H.i(a,0)],"$asn")
if(!!a.fixed$length)H.Q(P.C("addAll"))
for(z=J.G(b);z.n();)a.push(z.gp())},
F:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.i(a,0)]})
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.d(P.aw(a))}},
cQ:function(a,b,c){var z=H.i(a,0)
return new H.c6(a,H.h(b,{func:1,ret:c,args:[z]}),[z,c])},
I:function(a,b){return this.h(a,b)},
cA:function(a,b){var z,y
H.h(b,{func:1,ret:P.O,args:[H.i(a,0)]})
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y]))return!0
if(a.length!==z)throw H.d(P.aw(a))}return!1},
H:function(a,b){var z
for(z=0;z<a.length;++z)if(J.as(a[z],b))return!0
return!1},
gS:function(a){return a.length===0},
gcO:function(a){return a.length!==0},
m:function(a){return P.cA(a,"[","]")},
gC:function(a){return new J.bC(a,a.length,0,[H.i(a,0)])},
gE:function(a){return H.b1(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.Q(P.C("set length"))
if(b<0)throw H.d(P.aA(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){H.t(b)
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.ar(a,b))
if(b>=a.length||b<0)throw H.d(H.ar(a,b))
return a[b]},
k:function(a,b,c){H.t(b)
H.o(c,H.i(a,0))
if(!!a.immutable$list)H.Q(P.C("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(H.ar(a,b))
if(b>=a.length||b<0)throw H.d(H.ar(a,b))
a[b]=c},
$isz:1,
$isn:1,
$isp:1,
q:{
hJ:function(a,b){return J.bl(H.w(a,[b]))},
bl:function(a){H.a0(a)
a.fixed$length=Array
return a}}},
lS:{"^":"bk;$ti"},
bC:{"^":"c;a,b,c,0d,$ti",
sbZ:function(a){this.d=H.o(a,H.i(this,0))},
gp:function(){return this.d},
n:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.d(H.J(z))
x=this.c
if(x>=y){this.sbZ(null)
return!1}this.sbZ(z[x]);++this.c
return!0},
$isam:1},
bm:{"^":"A;",
geS:function(a){return a===0?1/a<0:a<0},
bL:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.d(P.C(""+a+".toInt()"))},
cZ:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.C(""+a+".round()"))},
f5:function(a,b){var z
if(b>20)throw H.d(P.aA(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.geS(a))return"-"+z
return z},
m:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){return a&0x1FFFFFFF},
i:function(a,b){H.aE(b)
if(typeof b!=="number")throw H.d(H.a6(b))
return a+b},
N:function(a,b){H.aE(b)
if(typeof b!=="number")throw H.d(H.a6(b))
return a-b},
B:function(a,b){H.aE(b)
if(typeof b!=="number")throw H.d(H.a6(b))
return a*b},
fd:function(a,b){return(a|0)===a?a/b|0:this.el(a,b)},
el:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.d(P.C("Result of truncating division is "+H.a(z)+": "+H.a(a)+" ~/ "+b))},
bB:function(a,b){var z
if(a>0)z=this.ei(a,b)
else{z=b>31?31:b
z=a>>z>>>0}return z},
ei:function(a,b){return b>31?0:a>>>b},
am:function(a,b){if(typeof b!=="number")throw H.d(H.a6(b))
return a<b},
bS:function(a,b){if(typeof b!=="number")throw H.d(H.a6(b))
return a>b},
$isak:1,
$isW:1},
dP:{"^":"bm;",$isaY:1},
dO:{"^":"bm;"},
bn:{"^":"A;",
cH:function(a,b){if(b<0)throw H.d(H.ar(a,b))
if(b>=a.length)H.Q(H.ar(a,b))
return a.charCodeAt(b)},
aJ:function(a,b){if(b>=a.length)throw H.d(H.ar(a,b))
return a.charCodeAt(b)},
i:function(a,b){H.l(b)
if(typeof b!=="string")throw H.d(P.co(b,null,null))
return a+b},
eK:function(a,b){var z,y
z=b.length
y=a.length
if(z>y)return!1
return b===this.bV(a,y-z)},
dg:function(a,b,c){var z
if(c>a.length)throw H.d(P.aA(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
df:function(a,b){return this.dg(a,b,0)},
a6:function(a,b,c){H.t(c)
if(c==null)c=a.length
if(b<0)throw H.d(P.bJ(b,null,null))
if(b>c)throw H.d(P.bJ(b,null,null))
if(c>a.length)throw H.d(P.bJ(c,null,null))
return a.substring(b,c)},
bV:function(a,b){return this.a6(a,b,null)},
f4:function(a){return a.toLowerCase()},
d5:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aJ(z,0)===133){x=J.hN(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.cH(z,w)===133?J.hO(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
B:function(a,b){var z,y
H.t(b)
if(typeof b!=="number")return H.f(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.A)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
eD:function(a,b,c){if(c>a.length)throw H.d(P.aA(c,0,a.length,null,null))
return H.lc(a,b,c)},
m:function(a){return a},
gE:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gj:function(a){return a.length},
h:function(a,b){H.t(b)
if(b>=a.length||!1)throw H.d(H.ar(a,b))
return a[b]},
$ise3:1,
$isk:1,
q:{
dQ:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
hN:function(a,b){var z,y
for(z=a.length;b<z;){y=C.f.aJ(a,b)
if(y!==32&&y!==13&&!J.dQ(y))break;++b}return b},
hO:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.f.cH(a,z)
if(y!==32&&y!==13&&!J.dQ(y))break}return b}}}}],["","",,H,{"^":"",
eT:function(a){if(a<0)H.Q(P.aA(a,0,null,"count",null))
return a},
hH:function(){return new P.bt("No element")},
hI:function(){return new P.bt("Too many elements")},
z:{"^":"n;"},
bq:{"^":"z;$ti",
gC:function(a){return new H.cI(this,this.gj(this),0,[H.V(this,"bq",0)])},
gS:function(a){return this.gj(this)===0},
bP:function(a,b){return this.dm(0,H.h(b,{func:1,ret:P.O,args:[H.V(this,"bq",0)]}))}},
cI:{"^":"c;a,b,c,0d,$ti",
sap:function(a){this.d=H.o(a,H.i(this,0))},
gp:function(){return this.d},
n:function(){var z,y,x,w
z=this.a
y=J.M(z)
x=y.gj(z)
if(this.b!==x)throw H.d(P.aw(z))
w=this.c
if(w>=x){this.sap(null)
return!1}this.sap(y.I(z,w));++this.c
return!0},
$isam:1},
cK:{"^":"n;a,b,$ti",
gC:function(a){return new H.dW(J.G(this.a),this.b,this.$ti)},
gj:function(a){return J.af(this.a)},
I:function(a,b){return this.b.$1(J.bB(this.a,b))},
$asn:function(a,b){return[b]},
q:{
i1:function(a,b,c,d){H.x(a,"$isn",[c],"$asn")
H.h(b,{func:1,ret:d,args:[c]})
if(!!J.m(a).$isz)return new H.h5(a,b,[c,d])
return new H.cK(a,b,[c,d])}}},
h5:{"^":"cK;a,b,$ti",$isz:1,
$asz:function(a,b){return[b]}},
dW:{"^":"am;0a,b,c,$ti",
sap:function(a){this.a=H.o(a,H.i(this,1))},
n:function(){var z=this.b
if(z.n()){this.sap(this.c.$1(z.gp()))
return!0}this.sap(null)
return!1},
gp:function(){return this.a},
$asam:function(a,b){return[b]}},
c6:{"^":"bq;a,b,$ti",
gj:function(a){return J.af(this.a)},
I:function(a,b){return this.b.$1(J.bB(this.a,b))},
$asz:function(a,b){return[b]},
$asbq:function(a,b){return[b]},
$asn:function(a,b){return[b]}},
cQ:{"^":"n;a,b,$ti",
gC:function(a){return new H.j4(J.G(this.a),this.b,this.$ti)}},
j4:{"^":"am;a,b,$ti",
n:function(){var z,y
for(z=this.a,y=this.b;z.n();)if(y.$1(z.gp()))return!0
return!1},
gp:function(){return this.a.gp()}},
eg:{"^":"n;a,b,$ti",
gC:function(a){return new H.iS(J.G(this.a),this.b,this.$ti)},
q:{
iR:function(a,b,c){H.x(a,"$isn",[c],"$asn")
if(b<0)throw H.d(P.aJ(b))
if(!!J.m(a).$isz)return new H.h7(a,b,[c])
return new H.eg(a,b,[c])}}},
h7:{"^":"eg;a,b,$ti",
gj:function(a){var z,y
z=J.af(this.a)
y=this.b
if(z>y)return y
return z},
$isz:1},
iS:{"^":"am;a,b,$ti",
n:function(){if(--this.b>=0)return this.a.n()
this.b=-1
return!1},
gp:function(){if(this.b<0)return
return this.a.gp()}},
eb:{"^":"n;a,b,$ti",
gC:function(a){return new H.iL(J.G(this.a),this.b,this.$ti)},
q:{
iK:function(a,b,c){H.x(a,"$isn",[c],"$asn")
if(!!J.m(a).$isz)return new H.h6(a,H.eT(b),[c])
return new H.eb(a,H.eT(b),[c])}}},
h6:{"^":"eb;a,b,$ti",
gj:function(a){var z=J.af(this.a)-this.b
if(z>=0)return z
return 0},
$isz:1},
iL:{"^":"am;a,b,$ti",
n:function(){var z,y
for(z=this.a,y=0;y<this.b;++y)z.n()
this.b=0
return z.n()},
gp:function(){return this.a.gp()}},
bF:{"^":"c;$ti",
sj:function(a,b){throw H.d(P.C("Cannot change the length of a fixed-length list"))},
l:function(a,b){H.o(b,H.aC(this,a,"bF",0))
throw H.d(P.C("Cannot add to a fixed-length list"))},
a4:function(a,b){throw H.d(P.C("Cannot remove from a fixed-length list"))}},
cO:{"^":"c;a",
gE:function(a){var z=this._hashCode
if(z!=null)return z
z=536870911&664597*J.aI(this.a)
this._hashCode=z
return z},
m:function(a){return'Symbol("'+H.a(this.a)+'")'},
V:function(a,b){var z,y
if(b==null)return!1
if(b instanceof H.cO){z=this.a
y=b.a
y=z==null?y==null:z===y
z=y}else z=!1
return z},
$isb2:1}}],["","",,H,{"^":"",
fd:function(a){var z=J.m(a)
return!!z.$isds||!!z.$isT||!!z.$isdT||!!z.$isdN||!!z.$isv||!!z.$iscR||!!z.$iseA}}],["","",,H,{"^":"",
fU:function(){throw H.d(P.C("Cannot modify unmodifiable Map"))},
cj:function(a){var z,y
z=H.l(init.mangledGlobalNames[a])
if(typeof z==="string")return z
y="minified:"+a
return y},
kP:[function(a){return init.types[H.t(a)]},null,null,4,0,null,12],
l_:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.m(a).$isay},
a:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.E(a)
if(typeof z!=="string")throw H.d(H.a6(a))
return z},
b1:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
e5:function(a,b){var z,y
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return
if(3>=z.length)return H.b(z,3)
y=H.l(z[3])
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return},
iw:function(a){var z,y
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
z=parseFloat(a)
if(isNaN(z)){y=C.f.d5(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return}return z},
bs:function(a){return H.il(a)+H.d4(H.aX(a),0,null)},
il:function(a){var z,y,x,w,v,u,t,s,r
z=J.m(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
v=w==null
if(v||z===C.E||!!z.$isbM){u=C.u(a)
if(v)w=u
if(u==="Object"){t=a.constructor
if(typeof t=="function"){s=String(t).match(/^\s*function\s*([\w$]*)\s*\(/)
r=s==null?null:s[1]
if(typeof r==="string"&&/^\w+$/.test(r))w=r}}return w}w=w
return H.cj(w.length>1&&C.f.aJ(w,0)===36?C.f.bV(w,1):w)},
a8:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.h.bB(z,10))>>>0,56320|z&1023)}throw H.d(P.aA(a,0,1114111,null,null))},
Z:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iv:function(a){return a.b?H.Z(a).getUTCFullYear()+0:H.Z(a).getFullYear()+0},
it:function(a){return a.b?H.Z(a).getUTCMonth()+1:H.Z(a).getMonth()+1},
ip:function(a){return a.b?H.Z(a).getUTCDate()+0:H.Z(a).getDate()+0},
iq:function(a){return a.b?H.Z(a).getUTCHours()+0:H.Z(a).getHours()+0},
is:function(a){return a.b?H.Z(a).getUTCMinutes()+0:H.Z(a).getMinutes()+0},
iu:function(a){return a.b?H.Z(a).getUTCSeconds()+0:H.Z(a).getSeconds()+0},
ir:function(a){return a.b?H.Z(a).getUTCMilliseconds()+0:H.Z(a).getMilliseconds()+0},
e4:function(a,b,c){var z,y,x
z={}
H.x(c,"$isH",[P.k,null],"$asH")
z.a=0
y=[]
x=[]
z.a=b.length
C.a.X(y,b)
z.b=""
if(c!=null&&c.a!==0)c.F(0,new H.io(z,x,y))
return J.fy(a,new H.hL(C.S,""+"$"+z.a+z.b,0,y,x,0))},
im:function(a,b){var z,y
z=b instanceof Array?b:P.br(b,!0,null)
y=z.length
if(y===0){if(!!a.$0)return a.$0()}else if(y===1){if(!!a.$1)return a.$1(z[0])}else if(y===2){if(!!a.$2)return a.$2(z[0],z[1])}else if(y===3){if(!!a.$3)return a.$3(z[0],z[1],z[2])}else if(y===4){if(!!a.$4)return a.$4(z[0],z[1],z[2],z[3])}else if(y===5)if(!!a.$5)return a.$5(z[0],z[1],z[2],z[3],z[4])
return H.ik(a,z)},
ik:function(a,b){var z,y,x,w,v,u
z=b.length
y=a[""+"$"+z]
if(y==null){y=J.m(a)["call*"]
if(y==null)return H.e4(a,b,null)
x=H.e7(y)
w=x.d
v=w+x.e
if(x.f||w>z||v<z)return H.e4(a,b,null)
b=P.br(b,!0,null)
for(u=z;u<v;++u)C.a.l(b,init.metadata[x.eI(0,u)])}return y.apply(a,b)},
f:function(a){throw H.d(H.a6(a))},
b:function(a,b){if(a==null)J.af(a)
throw H.d(H.ar(a,b))},
ar:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.au(!0,b,"index",null)
z=H.t(J.af(a))
if(!(b<0)){if(typeof z!=="number")return H.f(z)
y=b>=z}else y=!0
if(y)return P.aP(b,a,"index",null,z)
return P.bJ(b,"index",null)},
a6:function(a){return new P.au(!0,a,null,null)},
fa:function(a){if(typeof a!=="number")throw H.d(H.a6(a))
return a},
d:function(a){var z
if(a==null)a=new P.e_()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fl})
z.name=""}else z.toString=H.fl
return z},
fl:[function(){return J.E(this.dartException)},null,null,0,0,null],
Q:function(a){throw H.d(a)},
J:function(a){throw H.d(P.aw(a))},
P:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.lf(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.h.bB(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cF(H.a(y)+" (Error "+w+")",null))
case 445:case 5007:return z.$1(H.dZ(H.a(y)+" (Error "+w+")",null))}}if(a instanceof TypeError){v=$.$get$el()
u=$.$get$em()
t=$.$get$en()
s=$.$get$eo()
r=$.$get$es()
q=$.$get$et()
p=$.$get$eq()
$.$get$ep()
o=$.$get$ev()
n=$.$get$eu()
m=v.a3(y)
if(m!=null)return z.$1(H.cF(H.l(y),m))
else{m=u.a3(y)
if(m!=null){m.method="call"
return z.$1(H.cF(H.l(y),m))}else{m=t.a3(y)
if(m==null){m=s.a3(y)
if(m==null){m=r.a3(y)
if(m==null){m=q.a3(y)
if(m==null){m=p.a3(y)
if(m==null){m=s.a3(y)
if(m==null){m=o.a3(y)
if(m==null){m=n.a3(y)
l=m!=null}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0}else l=!0
if(l)return z.$1(H.dZ(H.l(y),m))}}return z.$1(new H.j1(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ed()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.au(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ed()
return a},
bb:function(a){var z
if(a==null)return new H.eQ(a)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eQ(a)},
kM:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.k(0,a[y],a[x])}return b},
kZ:[function(a,b,c,d,e,f){H.e(a,"$isaO")
switch(H.t(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(new P.jr("Unsupported number of arguments for wrapped closure"))},null,null,24,0,null,13,14,15,16,17,18],
b9:function(a,b){var z
H.t(b)
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.kZ)
a.$identity=z
return z},
fN:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.m(d).$isp){z.$reflectionInfo=d
x=H.e7(z).r}else x=d
w=e?Object.create(new H.iM().constructor.prototype):Object.create(new H.cq(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(e)v=function static_tear_off(){this.$initialize()}
else{u=$.al
if(typeof u!=="number")return u.i()
$.al=u+1
u=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")
v=u}w.constructor=v
v.prototype=w
if(!e){t=f.length==1&&!0
s=H.dx(a,z,t)
s.$reflectionInfo=d}else{w.$static_name=g
s=z
t=!1}if(typeof x=="number")r=function(h,i){return function(){return h(i)}}(H.kP,x)
else if(typeof x=="function")if(e)r=x
else{q=t?H.dw:H.cr
r=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(x,q)}else throw H.d("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=s,o=1;o<u;++o){n=b[o]
m=n.$callName
if(m!=null){n=e?n:H.dx(a,n,t)
w[m]=n}if(o===c){n.$reflectionInfo=d
p=n}}w["call*"]=p
w.$R=z.$R
w.$D=z.$D
return v},
fK:function(a,b,c,d){var z=H.cr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dx:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.fM(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fK(y,!w,z,b)
if(y===0){w=$.al
if(typeof w!=="number")return w.i()
$.al=w+1
u="self"+w
w="return function(){var "+u+" = this."
v=$.bg
if(v==null){v=H.bX("self")
$.bg=v}return new Function(w+H.a(v)+";return "+u+"."+H.a(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.al
if(typeof w!=="number")return w.i()
$.al=w+1
t+=w
w="return function("+t+"){return this."
v=$.bg
if(v==null){v=H.bX("self")
$.bg=v}return new Function(w+H.a(v)+"."+H.a(z)+"("+t+");}")()},
fL:function(a,b,c,d){var z,y
z=H.cr
y=H.dw
switch(b?-1:a){case 0:throw H.d(H.iG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
fM:function(a,b){var z,y,x,w,v,u,t,s
z=$.bg
if(z==null){z=H.bX("self")
$.bg=z}y=$.dv
if(y==null){y=H.bX("receiver")
$.dv=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fL(w,!u,x,b)
if(w===1){z="return function(){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+");"
y=$.al
if(typeof y!=="number")return y.i()
$.al=y+1
return new Function(z+y+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
z="return function("+s+"){return this."+H.a(z)+"."+H.a(x)+"(this."+H.a(y)+", "+s+");"
y=$.al
if(typeof y!=="number")return y.i()
$.al=y+1
return new Function(z+y+"}")()},
d7:function(a,b,c,d,e,f,g){var z,y
z=J.bl(H.a0(b))
H.t(c)
y=!!J.m(d).$isp?J.bl(d):d
return H.fN(a,z,c,y,!!e,f,g)},
l:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.d(H.ai(a,"String"))},
kK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ai(a,"double"))},
aE:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.d(H.ai(a,"num"))},
d5:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.d(H.ai(a,"bool"))},
t:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.d(H.ai(a,"int"))},
fi:function(a,b){throw H.d(H.ai(a,H.l(b).substring(3)))},
lb:function(a,b){var z=J.M(b)
throw H.d(H.fJ(a,z.a6(b,3,z.gj(b))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.m(a)[b])return a
H.fi(a,b)},
cg:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.m(a)[b]
else z=!0
if(z)return a
H.lb(a,b)},
a0:function(a){if(a==null)return a
if(!!J.m(a).$isp)return a
throw H.d(H.ai(a,"List"))},
Y:function(a,b){var z
if(a==null)return a
z=J.m(a)
if(!!z.$isp)return a
if(z[b])return a
H.fi(a,b)},
fb:function(a){var z
if("$S" in a){z=a.$S
if(typeof z=="number")return init.types[H.t(z)]
else return a.$S()}return},
ba:function(a,b){var z
if(a==null)return!1
if(typeof a=="function")return!0
z=H.fb(J.m(a))
if(z==null)return!1
return H.eZ(z,null,b,null)},
h:function(a,b){var z,y
if(a==null)return a
if($.d1)return a
$.d1=!0
try{if(H.ba(a,b))return a
z=H.bA(b)
y=H.ai(a,z)
throw H.d(y)}finally{$.d1=!1}},
bP:function(a,b){if(a!=null&&!H.d6(a,b))H.Q(H.ai(a,H.bA(b)))
return a},
f3:function(a){var z,y
z=J.m(a)
if(!!z.$isj){y=H.fb(z)
if(y!=null)return H.bA(y)
return"Closure"}return H.bs(a)},
ld:function(a){throw H.d(new P.fY(H.l(a)))},
da:function(a){return init.getIsolateTag(a)},
w:function(a,b){a.$ti=b
return a},
aX:function(a){if(a==null)return
return a.$ti},
mF:function(a,b,c){return H.bc(a["$as"+H.a(c)],H.aX(b))},
aC:function(a,b,c,d){var z
H.l(c)
H.t(d)
z=H.bc(a["$as"+H.a(c)],H.aX(b))
return z==null?null:z[d]},
V:function(a,b,c){var z
H.l(b)
H.t(c)
z=H.bc(a["$as"+H.a(b)],H.aX(a))
return z==null?null:z[c]},
i:function(a,b){var z
H.t(b)
z=H.aX(a)
return z==null?null:z[b]},
bA:function(a){return H.aV(a,null)},
aV:function(a,b){var z,y
H.x(b,"$isp",[P.k],"$asp")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cj(a[0].builtin$cls)+H.d4(a,1,b)
if(typeof a=="function")return H.cj(a.builtin$cls)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.t(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
z=b.length
y=z-a-1
if(y<0||y>=z)return H.b(b,y)
return H.a(b[y])}if('func' in a)return H.ks(a,b)
if('futureOr' in a)return"FutureOr<"+H.aV("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ks:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=[P.k]
H.x(b,"$isp",z,"$asp")
if("bounds" in a){y=a.bounds
if(b==null){b=H.w([],z)
x=null}else x=b.length
w=b.length
for(v=y.length,u=v;u>0;--u)C.a.l(b,"T"+(w+u))
for(t="<",s="",u=0;u<v;++u,s=", "){t+=s
z=b.length
r=z-u-1
if(r<0)return H.b(b,r)
t=C.f.i(t,b[r])
q=y[u]
if(q!=null&&q!==P.c)t+=" extends "+H.aV(q,b)}t+=">"}else{t=""
x=null}p=!!a.v?"void":H.aV(a.ret,b)
if("args" in a){o=a.args
for(z=o.length,n="",m="",l=0;l<z;++l,m=", "){k=o[l]
n=n+m+H.aV(k,b)}}else{n=""
m=""}if("opt" in a){j=a.opt
n+=m+"["
for(z=j.length,m="",l=0;l<z;++l,m=", "){k=j[l]
n=n+m+H.aV(k,b)}n+="]"}if("named" in a){i=a.named
n+=m+"{"
for(z=H.kL(i),r=z.length,m="",l=0;l<r;++l,m=", "){h=H.l(z[l])
n=n+m+H.aV(i[h],b)+(" "+H.a(h))}n+="}"}if(x!=null)b.length=x
return t+"("+n+") => "+p},
d4:function(a,b,c){var z,y,x,w,v,u
H.x(c,"$isp",[P.k],"$asp")
if(a==null)return""
z=new P.aT("")
for(y=b,x="",w=!0,v="";y<a.length;++y,x=", "){z.a=v+x
u=a[y]
if(u!=null)w=!1
v=z.a+=H.aV(u,c)}return"<"+z.m(0)+">"},
bc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aW:function(a,b,c,d){var z,y
H.l(b)
H.a0(c)
H.l(d)
if(a==null)return!1
z=H.aX(a)
y=J.m(a)
if(y[b]==null)return!1
return H.f7(H.bc(y[d],z),null,c,null)},
x:function(a,b,c,d){H.l(b)
H.a0(c)
H.l(d)
if(a==null)return a
if(H.aW(a,b,c,d))return a
throw H.d(H.ai(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.d4(c,0,null),init.mangledGlobalNames)))},
ae:function(a,b,c,d,e){H.l(c)
H.l(d)
H.l(e)
if(!H.a9(a,null,b,null))H.le("TypeError: "+H.a(c)+H.bA(a)+H.a(d)+H.bA(b)+H.a(e))},
le:function(a){throw H.d(new H.ew(H.l(a)))},
f7:function(a,b,c,d){var z,y
if(c==null)return!0
if(a==null){z=c.length
for(y=0;y<z;++y)if(!H.a9(null,null,c[y],d))return!1
return!0}z=a.length
for(y=0;y<z;++y)if(!H.a9(a[y],b,c[y],d))return!1
return!0},
mD:function(a,b,c){return a.apply(b,H.bc(J.m(b)["$as"+H.a(c)],H.aX(b)))},
fe:function(a){var z
if(typeof a==="number")return!1
if('futureOr' in a){z="type" in a?a.type:null
return a==null||a.builtin$cls==="c"||a.builtin$cls==="D"||a===-1||a===-2||H.fe(z)}return!1},
d6:function(a,b){var z,y
if(a==null)return b==null||b.builtin$cls==="c"||b.builtin$cls==="D"||b===-1||b===-2||H.fe(b)
if(b==null||b===-1||b.builtin$cls==="c"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.d6(a,"type" in b?b.type:null))return!0
if('func' in b)return H.ba(a,b)}z=J.m(a).constructor
y=H.aX(a)
if(y!=null){y=y.slice()
y.splice(0,0,z)
z=y}return H.a9(z,null,b,null)},
o:function(a,b){if(a!=null&&!H.d6(a,b))throw H.d(H.ai(a,H.bA(b)))
return a},
a9:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
if(a===c)return!0
if(c==null||c===-1||c.builtin$cls==="c"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.builtin$cls==="c"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.a9(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.builtin$cls==="D")return!0
if('func' in c)return H.eZ(a,b,c,d)
if('func' in a)return c.builtin$cls==="aO"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
if('futureOr' in c){x="type" in c?c.type:null
if('futureOr' in a)return H.a9("type" in a?a.type:null,b,x,d)
else if(H.a9(a,b,x,d))return!0
else{if(!('$is'+"ag" in y.prototype))return!1
w=y.prototype["$as"+"ag"]
v=H.bc(w,z?a.slice(1):null)
return H.a9(typeof v==="object"&&v!==null&&v.constructor===Array?v[0]:null,b,x,d)}}u=typeof c==="object"&&c!==null&&c.constructor===Array
t=u?c[0]:c
if(t!==y){s=t.builtin$cls
if(!('$is'+s in y.prototype))return!1
r=y.prototype["$as"+s]}else r=null
if(!u)return!0
z=z?a.slice(1):null
u=c.slice(1)
return H.f7(H.bc(r,z),b,u,d)},
eZ:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
z=a.bounds
y=c.bounds
if(z.length!==y.length)return!1}else if("bounds" in c)return!1
if(!H.a9(a.ret,b,c.ret,d))return!1
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
for(p=0;p<t;++p)if(!H.a9(w[p],d,x[p],b))return!1
for(o=p,n=0;o<s;++n,++o)if(!H.a9(w[o],d,v[n],b))return!1
for(o=0;o<q;++n,++o)if(!H.a9(u[o],d,v[n],b))return!1
m=a.named
l=c.named
if(l==null)return!0
if(m==null)return!1
return H.l4(m,b,l,d)},
l4:function(a,b,c,d){var z,y,x,w
z=Object.getOwnPropertyNames(c)
for(y=z.length,x=0;x<y;++x){w=z[x]
if(!Object.hasOwnProperty.call(a,w))return!1
if(!H.a9(c[w],d,a[w],b))return!1}return!0},
mE:function(a,b,c){Object.defineProperty(a,H.l(b),{value:c,enumerable:false,writable:true,configurable:true})},
l2:function(a){var z,y,x,w,v,u
z=H.l($.fc.$1(a))
y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ch[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=H.l($.f6.$2(a,z))
if(z!=null){y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ch[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ci(x)
$.ce[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ch[z]=x
return x}if(v==="-"){u=H.ci(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fh(a,x)
if(v==="*")throw H.d(P.ey(z))
if(init.leafTags[z]===true){u=H.ci(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fh(a,x)},
fh:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.dc(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ci:function(a){return J.dc(a,!1,null,!!a.$isay)},
l3:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return H.ci(z)
else return J.dc(z,c,null,null)},
kW:function(){if(!0===$.db)return
$.db=!0
H.kX()},
kX:function(){var z,y,x,w,v,u,t,s
$.ce=Object.create(null)
$.ch=Object.create(null)
H.kS()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fj.$1(v)
if(u!=null){t=H.l3(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
kS:function(){var z,y,x,w,v,u,t
z=C.I()
z=H.b8(C.F,H.b8(C.K,H.b8(C.t,H.b8(C.t,H.b8(C.J,H.b8(C.G,H.b8(C.H(C.u),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.fc=new H.kT(v)
$.f6=new H.kU(u)
$.fj=new H.kV(t)},
b8:function(a,b){return a(b)||b},
lc:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
dd:function(a,b,c){var z,y,x
if(typeof c!=="string")H.Q(H.a6(c))
if(b==="")if(a==="")return c
else{z=a.length
y=H.a(c)
for(x=0;x<z;++x)y=y+a[x]+H.a(c)
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fT:{"^":"j2;a,$ti"},
fS:{"^":"c;$ti",
gS:function(a){return this.gj(this)===0},
m:function(a){return P.c5(this)},
k:function(a,b,c){H.o(b,H.i(this,0))
H.o(c,H.i(this,1))
return H.fU()},
$isH:1},
fV:{"^":"fS;a,b,c,$ti",
gj:function(a){return this.a},
G:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.G(b))return
return this.cd(b)},
cd:function(a){return this.b[H.l(a)]},
F:function(a,b){var z,y,x,w,v
z=H.i(this,1)
H.h(b,{func:1,ret:-1,args:[H.i(this,0),z]})
y=this.c
for(x=y.length,w=0;w<x;++w){v=y[w]
b.$2(v,H.o(this.cd(v),z))}},
gJ:function(){return new H.jg(this,[H.i(this,0)])}},
jg:{"^":"n;a,$ti",
gC:function(a){var z=this.a.c
return new J.bC(z,z.length,0,[H.i(z,0)])},
gj:function(a){return this.a.c.length}},
hL:{"^":"c;a,b,c,d,e,f",
gcR:function(){var z=this.a
return z},
gcX:function(){var z,y,x,w
if(this.c===1)return C.v
z=this.d
y=z.length-this.e.length-this.f
if(y===0)return C.v
x=[]
for(w=0;w<y;++w){if(w>=z.length)return H.b(z,w)
x.push(z[w])}x.fixed$length=Array
x.immutable$list=Array
return x},
gcT:function(){var z,y,x,w,v,u,t,s,r
if(this.c!==0)return C.w
z=this.e
y=z.length
x=this.d
w=x.length-y-this.f
if(y===0)return C.w
v=P.b2
u=new H.aQ(0,0,[v,null])
for(t=0;t<y;++t){if(t>=z.length)return H.b(z,t)
s=z[t]
r=w+t
if(r<0||r>=x.length)return H.b(x,r)
u.k(0,new H.cO(s),x[r])}return new H.fT(u,[v,null])},
$iscz:1},
iD:{"^":"c;a,b,c,d,e,f,r,0x",
eI:function(a,b){var z=this.d
if(typeof b!=="number")return b.am()
if(b<z)return
return this.b[3+b-z]},
q:{
e7:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z=J.bl(z)
y=z[0]
x=z[1]
return new H.iD(a,z,(y&2)===2,y>>2,x>>1,(x&1)===1,z[2])}}},
io:{"^":"j:26;a,b,c",
$2:function(a,b){var z
H.l(a)
z=this.a
z.b=z.b+"$"+H.a(a)
C.a.l(this.b,a)
C.a.l(this.c,b);++z.a}},
j_:{"^":"c;a,b,c,d,e,f",
a3:function(a){var z,y,x
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
ap:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=H.w([],[P.k])
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.j_(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c9:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
er:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
ib:{"^":"R;a,b",
m:function(a){var z=this.b
if(z==null)return"NullError: "+H.a(this.a)
return"NullError: method not found: '"+z+"' on null"},
q:{
dZ:function(a,b){return new H.ib(a,b==null?null:b.method)}}},
hS:{"^":"R;a,b,c",
m:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.a(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.a(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.a(this.a)+")"},
q:{
cF:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.hS(a,y,z?null:b.receiver)}}},
j1:{"^":"R;a",
m:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
lf:{"^":"j:3;a",
$1:function(a){if(!!J.m(a).$isR)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eQ:{"^":"c;a,0b",
m:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z},
$isa3:1},
j:{"^":"c;",
m:function(a){return"Closure '"+H.bs(this).trim()+"'"},
gd8:function(){return this},
$isaO:1,
gd8:function(){return this}},
eh:{"^":"j;"},
iM:{"^":"eh;",
m:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+H.cj(z)+"'"}},
cq:{"^":"eh;a,b,c,d",
V:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cq))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gE:function(a){var z,y
z=this.c
if(z==null)y=H.b1(this.a)
else y=typeof z!=="object"?J.aI(z):H.b1(z)
return(y^H.b1(this.b))>>>0},
m:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.bs(z)+"'")},
q:{
cr:function(a){return a.a},
dw:function(a){return a.c},
bX:function(a){var z,y,x,w,v
z=new H.cq("self","target","receiver","name")
y=J.bl(Object.getOwnPropertyNames(z))
for(x=y.length,w=0;w<x;++w){v=y[w]
if(z[v]===a)return v}}}},
ew:{"^":"R;a",
m:function(a){return this.a},
q:{
ai:function(a,b){return new H.ew("TypeError: "+H.a(P.aM(a))+": type '"+H.f3(a)+"' is not a subtype of type '"+b+"'")}}},
fI:{"^":"R;a",
m:function(a){return this.a},
q:{
fJ:function(a,b){return new H.fI("CastError: "+H.a(P.aM(a))+": type '"+H.f3(a)+"' is not a subtype of type '"+b+"'")}}},
iF:{"^":"R;a",
m:function(a){return"RuntimeError: "+H.a(this.a)},
q:{
iG:function(a){return new H.iF(a)}}},
aQ:{"^":"cJ;a,0b,0c,0d,0e,0f,r,$ti",
gj:function(a){return this.a},
gS:function(a){return this.a===0},
gJ:function(){return new H.bH(this,[H.i(this,0)])},
gf7:function(a){var z=H.i(this,0)
return H.i1(new H.bH(this,[z]),new H.hR(this),z,H.i(this,1))},
G:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dP(z,a)}else{y=this.eN(a)
return y}},
eN:function(a){var z=this.d
if(z==null)return!1
return this.b2(this.aL(z,J.aI(a)&0x3ffffff),a)>=0},
h:function(a,b){var z,y,x,w
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aM(z,b)
x=y==null?null:y.b
return x}else if(typeof b==="number"&&(b&0x3ffffff)===b){w=this.c
if(w==null)return
y=this.aM(w,b)
x=y==null?null:y.b
return x}else return this.eO(b)},
eO:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.aL(z,J.aI(a)&0x3ffffff)
x=this.b2(y,a)
if(x<0)return
return y[x].b},
k:function(a,b,c){var z,y,x,w,v,u
H.o(b,H.i(this,0))
H.o(c,H.i(this,1))
if(typeof b==="string"){z=this.b
if(z==null){z=this.br()
this.b=z}this.c1(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.br()
this.c=y}this.c1(y,b,c)}else{x=this.d
if(x==null){x=this.br()
this.d=x}w=J.aI(b)&0x3ffffff
v=this.aL(x,w)
if(v==null)this.bA(x,w,[this.bs(b,c)])
else{u=this.b2(v,b)
if(u>=0)v[u].b=c
else v.push(this.bs(b,c))}}},
L:function(a,b){var z=this.eP(b)
return z},
eP:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.aL(z,a.gE(a)&0x3ffffff)
x=this.b2(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.dD(w)
return w.b},
aX:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.bq()}},
F:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.i(this,0),H.i(this,1)]})
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.d(P.aw(this))
z=z.c}},
c1:function(a,b,c){var z
H.o(b,H.i(this,0))
H.o(c,H.i(this,1))
z=this.aM(a,b)
if(z==null)this.bA(a,b,this.bs(b,c))
else z.b=c},
bq:function(){this.r=this.r+1&67108863},
bs:function(a,b){var z,y
z=new H.hX(H.o(a,H.i(this,0)),H.o(b,H.i(this,1)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.bq()
return z},
dD:function(a){var z,y
z=a.d
y=a.c
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.bq()},
b2:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.as(a[y].a,b))return y
return-1},
m:function(a){return P.c5(this)},
aM:function(a,b){return a[b]},
aL:function(a,b){return a[b]},
bA:function(a,b,c){a[b]=c},
dR:function(a,b){delete a[b]},
dP:function(a,b){return this.aM(a,b)!=null},
br:function(){var z=Object.create(null)
this.bA(z,"<non-identifier-key>",z)
this.dR(z,"<non-identifier-key>")
return z}},
hR:{"^":"j;a",
$1:[function(a){var z=this.a
return z.h(0,H.o(a,H.i(z,0)))},null,null,4,0,null,19,"call"],
$S:function(){var z=this.a
return{func:1,ret:H.i(z,1),args:[H.i(z,0)]}}},
hX:{"^":"c;a,b,0c,0d"},
bH:{"^":"z;a,$ti",
gj:function(a){return this.a.a},
gS:function(a){return this.a.a===0},
gC:function(a){var z,y
z=this.a
y=new H.hY(z,z.r,this.$ti)
y.c=z.e
return y},
H:function(a,b){return this.a.G(b)}},
hY:{"^":"c;a,b,0c,0d,$ti",
sc_:function(a){this.d=H.o(a,H.i(this,0))},
gp:function(){return this.d},
n:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aw(z))
else{z=this.c
if(z==null){this.sc_(null)
return!1}else{this.sc_(z.a)
this.c=this.c.c
return!0}}},
$isam:1},
kT:{"^":"j:3;a",
$1:function(a){return this.a(a)}},
kU:{"^":"j:30;a",
$2:function(a,b){return this.a(a,b)}},
kV:{"^":"j:36;a",
$1:function(a){return this.a(H.l(a))}},
hP:{"^":"c;a,b,0c,0d",
m:function(a){return"RegExp/"+this.a+"/"},
$ise3:1,
q:{
hQ:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.d(P.c1("Illegal RegExp pattern ("+String(w)+")",a,null))}}}}],["","",,H,{"^":"",
kL:function(a){return J.hJ(a?Object.keys(a):[],null)}}],["","",,H,{"^":"",
la:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",
aq:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.ar(b,a))},
i4:{"^":"A;",$isex:1,"%":"DataView;ArrayBufferView;cL|eM|eN|i3|eO|eP|aS"},
cL:{"^":"i4;",
gj:function(a){return a.length},
$isay:1,
$asay:I.cf},
i3:{"^":"eN;",
h:function(a,b){H.t(b)
H.aq(b,a,a.length)
return a[b]},
k:function(a,b,c){H.t(b)
H.kK(c)
H.aq(b,a,a.length)
a[b]=c},
$isz:1,
$asz:function(){return[P.ak]},
$asbF:function(){return[P.ak]},
$asL:function(){return[P.ak]},
$isn:1,
$asn:function(){return[P.ak]},
$isp:1,
$asp:function(){return[P.ak]},
"%":"Float32Array|Float64Array"},
aS:{"^":"eP;",
k:function(a,b,c){H.t(b)
H.t(c)
H.aq(b,a,a.length)
a[b]=c},
$isz:1,
$asz:function(){return[P.aY]},
$asbF:function(){return[P.aY]},
$asL:function(){return[P.aY]},
$isn:1,
$asn:function(){return[P.aY]},
$isp:1,
$asp:function(){return[P.aY]}},
lY:{"^":"aS;",
h:function(a,b){H.t(b)
H.aq(b,a,a.length)
return a[b]},
"%":"Int16Array"},
lZ:{"^":"aS;",
h:function(a,b){H.t(b)
H.aq(b,a,a.length)
return a[b]},
"%":"Int32Array"},
m_:{"^":"aS;",
h:function(a,b){H.t(b)
H.aq(b,a,a.length)
return a[b]},
"%":"Int8Array"},
m0:{"^":"aS;",
h:function(a,b){H.t(b)
H.aq(b,a,a.length)
return a[b]},
"%":"Uint16Array"},
m1:{"^":"aS;",
h:function(a,b){H.t(b)
H.aq(b,a,a.length)
return a[b]},
"%":"Uint32Array"},
m2:{"^":"aS;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
H.aq(b,a,a.length)
return a[b]},
"%":"CanvasPixelArray|Uint8ClampedArray"},
m3:{"^":"aS;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
H.aq(b,a,a.length)
return a[b]},
"%":";Uint8Array"},
eM:{"^":"cL+L;"},
eN:{"^":"eM+bF;"},
eO:{"^":"cL+L;"},
eP:{"^":"eO+bF;"}}],["","",,P,{"^":"",
j6:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.kE()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.b9(new P.j8(z),1)).observe(y,{childList:true})
return new P.j7(z,y,x)}else if(self.setImmediate!=null)return P.kF()
return P.kG()},
mq:[function(a){self.scheduleImmediate(H.b9(new P.j9(H.h(a,{func:1,ret:-1})),0))},"$1","kE",4,0,6],
mr:[function(a){self.setImmediate(H.b9(new P.ja(H.h(a,{func:1,ret:-1})),0))},"$1","kF",4,0,6],
ms:[function(a){H.h(a,{func:1,ret:-1})
P.kg(0,a)},"$1","kG",4,0,6],
kx:function(a,b){if(H.ba(a,{func:1,args:[P.c,P.a3]}))return b.cY(a,null,P.c,P.a3)
if(H.ba(a,{func:1,args:[P.c]})){b.toString
return H.h(a,{func:1,ret:null,args:[P.c]})}throw H.d(P.co(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ku:function(){var z,y
for(;z=$.b6,z!=null;){$.bw=null
y=z.b
$.b6=y
if(y==null)$.bv=null
z.a.$0()}},
mC:[function(){$.d2=!0
try{P.ku()}finally{$.bw=null
$.d2=!1
if($.b6!=null)$.$get$cS().$1(P.f9())}},"$0","f9",0,0,1],
f2:function(a){var z=new P.eB(H.h(a,{func:1,ret:-1}))
if($.b6==null){$.bv=z
$.b6=z
if(!$.d2)$.$get$cS().$1(P.f9())}else{$.bv.b=z
$.bv=z}},
kA:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
z=$.b6
if(z==null){P.f2(a)
$.bw=$.bv
return}y=new P.eB(a)
x=$.bw
if(x==null){y.b=z
$.bw=y
$.b6=y}else{y.b=x.b
x.b=y
$.bw=y
if(y.b==null)$.bv=y}},
fk:function(a){var z,y
z={func:1,ret:-1}
H.h(a,z)
y=$.F
if(C.e===y){P.b7(null,null,C.e,a)
return}y.toString
P.b7(null,null,y,H.h(y.cD(a),z))},
f1:function(a){var z,y,x,w
H.h(a,{func:1})
if(a==null)return
try{a.$0()}catch(x){z=H.P(x)
y=H.bb(x)
w=$.F
w.toString
P.bx(null,null,w,z,H.e(y,"$isa3"))}},
mA:[function(a){},"$1","kH",4,0,15],
kv:[function(a,b){var z=$.F
z.toString
P.bx(null,null,z,a,b)},function(a){return P.kv(a,null)},"$2","$1","kI",4,2,9],
mB:[function(){},"$0","f8",0,0,1],
bx:function(a,b,c,d,e){var z={}
z.a=d
P.kA(new P.ky(z,e))},
f_:function(a,b,c,d,e){var z,y
H.h(d,{func:1,ret:e})
y=$.F
if(y===c)return d.$0()
$.F=c
z=y
try{y=d.$0()
return y}finally{$.F=z}},
f0:function(a,b,c,d,e,f,g){var z,y
H.h(d,{func:1,ret:f,args:[g]})
H.o(e,g)
y=$.F
if(y===c)return d.$1(e)
$.F=c
z=y
try{y=d.$1(e)
return y}finally{$.F=z}},
kz:function(a,b,c,d,e,f,g,h,i){var z,y
H.h(d,{func:1,ret:g,args:[h,i]})
H.o(e,h)
H.o(f,i)
y=$.F
if(y===c)return d.$2(e,f)
$.F=c
z=y
try{y=d.$2(e,f)
return y}finally{$.F=z}},
b7:function(a,b,c,d){var z
H.h(d,{func:1,ret:-1})
z=C.e!==c
if(z){if(z){c.toString
z=!1}else z=!0
d=!z?c.cD(d):c.ey(d,-1)}P.f2(d)},
j8:{"^":"j:14;a",
$1:[function(a){var z,y
z=this.a
y=z.a
z.a=null
y.$0()},null,null,4,0,null,2,"call"]},
j7:{"^":"j:27;a,b,c",
$1:function(a){var z,y
this.a.a=H.h(a,{func:1,ret:-1})
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
j9:{"^":"j:2;a",
$0:[function(){this.a.$0()},null,null,0,0,null,"call"]},
ja:{"^":"j:2;a",
$0:[function(){this.a.$0()},null,null,0,0,null,"call"]},
kf:{"^":"c;a,0b,c",
dC:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.b9(new P.kh(this,b),0),a)
else throw H.d(P.C("`setTimeout()` not found."))},
q:{
kg:function(a,b){var z=new P.kf(!0,0)
z.dC(a,b)
return z}}},
kh:{"^":"j:1;a,b",
$0:[function(){var z=this.a
z.b=null
z.c=1
this.b.$0()},null,null,0,0,null,"call"]},
jc:{"^":"eE;a,$ti"},
a_:{"^":"jh;dx,0dy,0fr,x,0a,0b,0c,d,e,0f,0r,$ti",
sav:function(a){this.dy=H.x(a,"$isa_",this.$ti,"$asa_")},
saO:function(a){this.fr=H.x(a,"$isa_",this.$ti,"$asa_")},
bt:function(){},
bu:function(){}},
eD:{"^":"c;ae:c<,0d,0e,$ti",
scg:function(a){this.d=H.x(a,"$isa_",this.$ti,"$asa_")},
scm:function(a){this.e=H.x(a,"$isa_",this.$ti,"$asa_")},
gaN:function(){return this.c<4},
dU:function(){var z=this.r
if(z!=null)return z
z=new P.a5(0,$.F,[null])
this.r=z
return z},
ct:function(a){var z,y
H.x(a,"$isa_",this.$ti,"$asa_")
z=a.fr
y=a.dy
if(z==null)this.scg(y)
else z.sav(y)
if(y==null)this.scm(z)
else y.saO(z)
a.saO(a)
a.sav(a)},
ej:function(a,b,c,d){var z,y,x,w,v,u
z=H.i(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
if((this.c&4)!==0){if(c==null)c=P.f8()
z=new P.jm($.F,0,c,this.$ti)
z.ef()
return z}y=$.F
x=d?1:0
w=this.$ti
v=new P.a_(0,this,y,x,w)
v.dz(a,b,c,d,z)
v.saO(v)
v.sav(v)
H.x(v,"$isa_",w,"$asa_")
v.dx=this.c&1
u=this.e
this.scm(v)
v.sav(null)
v.saO(u)
if(u==null)this.scg(v)
else u.sav(v)
z=this.d
y=this.e
if(z==null?y==null:z===y)P.f1(this.a)
return v},
e3:function(a){var z=this.$ti
a=H.x(H.x(a,"$isao",z,"$asao"),"$isa_",z,"$asa_")
if(a.dy===a)return
z=a.dx
if((z&2)!==0)a.dx=z|4
else{this.ct(a)
if((this.c&2)===0&&this.d==null)this.bd()}return},
bb:["dt",function(){if((this.c&4)!==0)return new P.bt("Cannot add new events after calling close")
return new P.bt("Cannot add new events while doing an addStream")}],
l:[function(a,b){H.o(b,H.i(this,0))
if(!this.gaN())throw H.d(this.bb())
this.aT(b)},"$1","geq",5,0,15],
cG:function(a){var z
if((this.c&4)!==0)return this.r
if(!this.gaN())throw H.d(this.bb())
this.c|=4
z=this.dU()
this.ay()
return z},
ci:function(a){var z,y,x,w
H.h(a,{func:1,ret:-1,args:[[P.a4,H.i(this,0)]]})
z=this.c
if((z&2)!==0)throw H.d(P.bu("Cannot fire new event. Controller is already firing an event"))
y=this.d
if(y==null)return
x=z&1
this.c=z^3
for(;y!=null;){z=y.dx
if((z&1)===x){y.dx=z|2
a.$1(y)
z=y.dx^=1
w=y.dy
if((z&4)!==0)this.ct(y)
y.dx&=4294967293
y=w}else y=y.dy}this.c&=4294967293
if(this.d==null)this.bd()},
bd:function(){if((this.c&4)!==0&&this.r.a===0)this.r.c5(null)
P.f1(this.b)},
$isee:1,
$ismy:1,
$isb4:1},
k9:{"^":"eD;a,b,c,0d,0e,0f,0r,$ti",
gaN:function(){return P.eD.prototype.gaN.call(this)&&(this.c&2)===0},
bb:function(){if((this.c&2)!==0)return new P.bt("Cannot fire new event. Controller is already firing an event")
return this.dt()},
aT:function(a){var z
H.o(a,H.i(this,0))
z=this.d
if(z==null)return
if(z===this.e){this.c|=2
z.c4(a)
this.c&=4294967293
if(this.d==null)this.bd()
return}this.ci(new P.ka(this,a))},
ay:function(){if(this.d!=null)this.ci(new P.kb(this))
else this.r.c5(null)}},
ka:{"^":"j;a,b",
$1:function(a){H.x(a,"$isa4",[H.i(this.a,0)],"$asa4").c4(this.b)},
$S:function(){return{func:1,ret:P.D,args:[[P.a4,H.i(this.a,0)]]}}},
kb:{"^":"j;a",
$1:function(a){H.x(a,"$isa4",[H.i(this.a,0)],"$asa4").dL()},
$S:function(){return{func:1,ret:P.D,args:[[P.a4,H.i(this.a,0)]]}}},
jf:{"^":"c;$ti"},
kc:{"^":"jf;a,$ti"},
aU:{"^":"c;0a,b,c,d,e,$ti",
eV:function(a){if(this.c!==6)return!0
return this.b.b.bK(H.h(this.d,{func:1,ret:P.O,args:[P.c]}),a.a,P.O,P.c)},
eM:function(a){var z,y,x,w
z=this.e
y=P.c
x={futureOr:1,type:H.i(this,1)}
w=this.b.b
if(H.ba(z,{func:1,args:[P.c,P.a3]}))return H.bP(w.f1(z,a.a,a.b,null,y,P.a3),x)
else return H.bP(w.bK(H.h(z,{func:1,args:[P.c]}),a.a,null,y),x)}},
a5:{"^":"c;ae:a<,b,0ec:c<,$ti",
d3:function(a,b,c){var z,y,x,w
z=H.i(this,0)
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
y=$.F
if(y!==C.e){y.toString
H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
if(b!=null)b=P.kx(b,y)}H.h(a,{func:1,ret:{futureOr:1,type:c},args:[z]})
x=new P.a5(0,$.F,[c])
w=b==null?1:3
this.bc(new P.aU(x,w,a,b,[z,c]))
return x},
d2:function(a,b){return this.d3(a,null,b)},
f8:function(a){var z,y
H.h(a,{func:1})
z=$.F
y=new P.a5(0,z,this.$ti)
if(z!==C.e){z.toString
H.h(a,{func:1,ret:null})}z=H.i(this,0)
this.bc(new P.aU(y,8,a,null,[z,z]))
return y},
eh:function(a){H.o(a,H.i(this,0))
this.a=4
this.c=a},
bc:function(a){var z,y
z=this.a
if(z<=1){a.a=H.e(this.c,"$isaU")
this.c=a}else{if(z===2){y=H.e(this.c,"$isa5")
z=y.a
if(z<4){y.bc(a)
return}this.a=z
this.c=y.c}z=this.b
z.toString
P.b7(null,null,z,H.h(new P.js(this,a),{func:1,ret:-1}))}},
cq:function(a){var z,y,x,w,v,u
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=H.e(this.c,"$isaU")
this.c=a
if(x!=null){for(w=a;v=w.a,v!=null;w=v);w.a=x}}else{if(y===2){u=H.e(this.c,"$isa5")
y=u.a
if(y<4){u.cq(a)
return}this.a=y
this.c=u.c}z.a=this.aS(a)
y=this.b
y.toString
P.b7(null,null,y,H.h(new P.jy(z,this),{func:1,ret:-1}))}},
aP:function(){var z=H.e(this.c,"$isaU")
this.c=null
return this.aS(z)},
aS:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.a
z.a=y}return y},
bh:function(a){var z,y,x
z=H.i(this,0)
H.bP(a,{futureOr:1,type:z})
y=this.$ti
if(H.aW(a,"$isag",y,"$asag"))if(H.aW(a,"$isa5",y,null))P.ca(a,this)
else P.eG(a,this)
else{x=this.aP()
H.o(a,z)
this.a=4
this.c=a
P.b5(this,x)}},
bi:[function(a,b){var z
H.e(b,"$isa3")
z=this.aP()
this.a=8
this.c=new P.ab(a,b)
P.b5(this,z)},function(a){return this.bi(a,null)},"fc","$2","$1","gdN",4,2,9,3,4,5],
c5:function(a){var z
H.bP(a,{futureOr:1,type:H.i(this,0)})
if(H.aW(a,"$isag",this.$ti,"$asag")){this.dI(a)
return}this.a=1
z=this.b
z.toString
P.b7(null,null,z,H.h(new P.jt(this,a),{func:1,ret:-1}))},
dI:function(a){var z=this.$ti
H.x(a,"$isag",z,"$asag")
if(H.aW(a,"$isa5",z,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.b7(null,null,z,H.h(new P.jx(this,a),{func:1,ret:-1}))}else P.ca(a,this)
return}P.eG(a,this)},
$isag:1,
q:{
eG:function(a,b){var z,y,x
b.a=1
try{a.d3(new P.ju(b),new P.jv(b),null)}catch(x){z=H.P(x)
y=H.bb(x)
P.fk(new P.jw(b,z,y))}},
ca:function(a,b){var z,y
for(;z=a.a,z===2;)a=H.e(a.c,"$isa5")
if(z>=4){y=b.aP()
b.a=a.a
b.c=a.c
P.b5(b,y)}else{y=H.e(b.c,"$isaU")
b.a=2
b.c=a
a.cq(y)}},
b5:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z={}
z.a=a
for(y=a;!0;){x={}
w=y.a===8
if(b==null){if(w){v=H.e(y.c,"$isab")
y=y.b
u=v.a
t=v.b
y.toString
P.bx(null,null,y,u,t)}return}for(;s=b.a,s!=null;b=s){b.a=null
P.b5(z.a,b)}y=z.a
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
if(p){H.e(r,"$isab")
y=y.b
u=r.a
t=r.b
y.toString
P.bx(null,null,y,u,t)
return}o=$.F
if(o==null?q!=null:o!==q)$.F=q
else o=null
y=b.c
if(y===8)new P.jB(z,x,b,w).$0()
else if(u){if((y&1)!==0)new P.jA(x,b,r).$0()}else if((y&2)!==0)new P.jz(z,x,b).$0()
if(o!=null)$.F=o
y=x.b
if(!!J.m(y).$isag){if(y.a>=4){n=H.e(t.c,"$isaU")
t.c=null
b=t.aS(n)
t.a=y.a
t.c=y.c
z.a=y
continue}else P.ca(y,t)
return}}m=b.b
n=H.e(m.c,"$isaU")
m.c=null
b=m.aS(n)
y=x.a
u=x.b
if(!y){H.o(u,H.i(m,0))
m.a=4
m.c=u}else{H.e(u,"$isab")
m.a=8
m.c=u}z.a=m
y=m}}}},
js:{"^":"j:2;a,b",
$0:function(){P.b5(this.a,this.b)}},
jy:{"^":"j:2;a,b",
$0:function(){P.b5(this.b,this.a.a)}},
ju:{"^":"j:14;a",
$1:function(a){var z=this.a
z.a=0
z.bh(a)}},
jv:{"^":"j:37;a",
$2:[function(a,b){this.a.bi(a,H.e(b,"$isa3"))},function(a){return this.$2(a,null)},"$1",null,null,null,4,2,null,3,4,5,"call"]},
jw:{"^":"j:2;a,b,c",
$0:function(){this.a.bi(this.b,this.c)}},
jt:{"^":"j:2;a,b",
$0:function(){var z,y,x
z=this.a
y=H.o(this.b,H.i(z,0))
x=z.aP()
z.a=4
z.c=y
P.b5(z,x)}},
jx:{"^":"j:2;a,b",
$0:function(){P.ca(this.b,this.a)}},
jB:{"^":"j:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{w=this.c
z=w.b.b.d_(H.h(w.d,{func:1}),null)}catch(v){y=H.P(v)
x=H.bb(v)
if(this.d){w=H.e(this.a.a.c,"$isab").a
u=y
u=w==null?u==null:w===u
w=u}else w=!1
u=this.b
if(w)u.b=H.e(this.a.a.c,"$isab")
else u.b=new P.ab(y,x)
u.a=!0
return}if(!!J.m(z).$isag){if(z instanceof P.a5&&z.gae()>=4){if(z.gae()===8){w=this.b
w.b=H.e(z.gec(),"$isab")
w.a=!0}return}t=this.a.a
w=this.b
w.b=z.d2(new P.jC(t),null)
w.a=!1}}},
jC:{"^":"j:32;a",
$1:function(a){return this.a}},
jA:{"^":"j:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t
try{x=this.b
x.toString
w=H.i(x,0)
v=H.o(this.c,w)
u=H.i(x,1)
this.a.b=x.b.b.bK(H.h(x.d,{func:1,ret:{futureOr:1,type:u},args:[w]}),v,{futureOr:1,type:u},w)}catch(t){z=H.P(t)
y=H.bb(t)
x=this.a
x.b=new P.ab(z,y)
x.a=!0}}},
jz:{"^":"j:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=H.e(this.a.a.c,"$isab")
w=this.c
if(w.eV(z)&&w.e!=null){v=this.b
v.b=w.eM(z)
v.a=!1}}catch(u){y=H.P(u)
x=H.bb(u)
w=H.e(this.a.a.c,"$isab")
v=w.a
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w
else s.b=new P.ab(y,x)
s.a=!0}}},
eB:{"^":"c;a,0b"},
an:{"^":"c;$ti",
gj:function(a){var z,y
z={}
y=new P.a5(0,$.F,[P.aY])
z.a=0
this.aC(new P.iO(z,this),!0,new P.iP(z,y),y.gdN())
return y}},
iO:{"^":"j;a,b",
$1:[function(a){H.o(a,H.V(this.b,"an",0));++this.a.a},null,null,4,0,null,2,"call"],
$S:function(){return{func:1,ret:P.D,args:[H.V(this.b,"an",0)]}}},
iP:{"^":"j:2;a,b",
$0:[function(){this.b.bh(this.a.a)},null,null,0,0,null,"call"]},
ao:{"^":"c;$ti"},
iN:{"^":"c;"},
eE:{"^":"k5;$ti",
gE:function(a){return(H.b1(this.a)^892482866)>>>0},
V:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.eE))return!1
return b.a===this.a}},
jh:{"^":"a4;$ti",
cn:function(){return this.x.e3(this)},
bt:function(){H.x(this,"$isao",[H.i(this.x,0)],"$asao")},
bu:function(){H.x(this,"$isao",[H.i(this.x,0)],"$asao")}},
a4:{"^":"c;0a,0c,ae:e<,0r,$ti",
sdG:function(a){this.a=H.h(a,{func:1,ret:-1,args:[H.V(this,"a4",0)]})},
se1:function(a){this.c=H.h(a,{func:1,ret:-1})},
sby:function(a){this.r=H.x(a,"$iscX",[H.V(this,"a4",0)],"$ascX")},
dz:function(a,b,c,d,e){var z,y,x,w,v
z=H.V(this,"a4",0)
H.h(a,{func:1,ret:-1,args:[z]})
y=a==null?P.kH():a
x=this.d
x.toString
this.sdG(H.h(y,{func:1,ret:null,args:[z]}))
w=b==null?P.kI():b
if(H.ba(w,{func:1,ret:-1,args:[P.c,P.a3]}))this.b=x.cY(w,null,P.c,P.a3)
else if(H.ba(w,{func:1,ret:-1,args:[P.c]}))this.b=H.h(w,{func:1,ret:null,args:[P.c]})
else H.Q(P.aJ("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.h(c,{func:1,ret:-1})
v=c==null?P.f8():c
this.se1(H.h(v,{func:1,ret:-1}))},
aW:function(){var z=(this.e&4294967279)>>>0
this.e=z
if((z&8)===0)this.c7()
z=this.f
return z==null?$.$get$c2():z},
c7:function(){var z,y
z=(this.e|8)>>>0
this.e=z
if((z&64)!==0){y=this.r
if(y.a===1)y.a=3}if((z&32)===0)this.sby(null)
this.f=this.cn()},
c4:function(a){var z,y
z=H.V(this,"a4",0)
H.o(a,z)
y=this.e
if((y&8)!==0)return
if(y<32)this.aT(a)
else this.c3(new P.jk(a,[z]))},
dL:function(){var z=this.e
if((z&8)!==0)return
z=(z|2)>>>0
this.e=z
if(z<32)this.ay()
else this.c3(C.B)},
bt:function(){},
bu:function(){},
cn:function(){return},
c3:function(a){var z,y
z=[H.V(this,"a4",0)]
y=H.x(this.r,"$iscY",z,"$ascY")
if(y==null){y=new P.cY(0,z)
this.sby(y)}y.l(0,a)
z=this.e
if((z&64)===0){z=(z|64)>>>0
this.e=z
if(z<128)this.r.bU(this)}},
aT:function(a){var z,y
z=H.V(this,"a4",0)
H.o(a,z)
y=this.e
this.e=(y|32)>>>0
this.d.d0(this.a,a,z)
this.e=(this.e&4294967263)>>>0
this.dJ((y&4)!==0)},
ay:function(){var z,y
z=new P.jd(this)
this.c7()
this.e=(this.e|16)>>>0
y=this.f
if(!!J.m(y).$isag&&y!==$.$get$c2())y.f8(z)
else z.$0()},
dJ:function(a){var z,y,x
z=this.e
if((z&64)!==0&&this.r.c==null){z=(z&4294967231)>>>0
this.e=z
if((z&4)!==0)if(z<128){y=this.r
y=y==null||y.c==null}else y=!1
else y=!1
if(y){z=(z&4294967291)>>>0
this.e=z}}for(;!0;a=x){if((z&8)!==0){this.sby(null)
return}x=(z&4)!==0
if(a===x)break
this.e=(z^32)>>>0
if(x)this.bt()
else this.bu()
z=(this.e&4294967263)>>>0
this.e=z}if((z&64)!==0&&z<128)this.r.bU(this)},
$isao:1,
$isb4:1},
jd:{"^":"j:1;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=(y|42)>>>0
z.d.bJ(z.c)
z.e=(z.e&4294967263)>>>0}},
k5:{"^":"an;$ti",
aC:function(a,b,c,d){H.h(a,{func:1,ret:-1,args:[H.i(this,0)]})
H.h(c,{func:1,ret:-1})
return this.a.ej(H.h(a,{func:1,ret:-1,args:[H.i(this,0)]}),d,c,!0===b)}},
bN:{"^":"c;0aE:a<,$ti",
saE:function(a){this.a=H.e(a,"$isbN")}},
jk:{"^":"bN;b,0a,$ti",
cW:function(a){H.x(a,"$isb4",this.$ti,"$asb4").aT(this.b)}},
jl:{"^":"c;",
cW:function(a){a.ay()},
gaE:function(){return},
saE:function(a){throw H.d(P.bu("No events after a done."))},
$isbN:1,
$asbN:I.cf},
cX:{"^":"c;ae:a<,$ti",
bU:function(a){var z
H.x(a,"$isb4",this.$ti,"$asb4")
z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.fk(new P.jX(this,a))
this.a=1}},
jX:{"^":"j:2;a,b",
$0:function(){var z,y,x,w,v
z=this.a
y=z.a
z.a=0
if(y===3)return
x=H.x(this.b,"$isb4",[H.i(z,0)],"$asb4")
w=z.b
v=w.gaE()
z.b=v
if(v==null)z.c=null
w.cW(x)}},
cY:{"^":"cX;0b,0c,a,$ti",
l:function(a,b){var z
H.e(b,"$isbN")
z=this.c
if(z==null){this.c=b
this.b=b}else{z.saE(b)
this.c=b}}},
jm:{"^":"c;a,ae:b<,c,$ti",
ef:function(){if((this.b&2)!==0)return
var z=this.a
z.toString
P.b7(null,null,z,H.h(this.geg(),{func:1,ret:-1}))
this.b=(this.b|2)>>>0},
aW:function(){return $.$get$c2()},
ay:[function(){var z=(this.b&4294967293)>>>0
this.b=z
if(z>=4)return
this.b=(z|1)>>>0
z=this.c
if(z!=null)this.a.bJ(z)},"$0","geg",0,0,1],
$isao:1},
ab:{"^":"c;a,b",
m:function(a){return H.a(this.a)},
$isR:1},
kl:{"^":"c;",$ismp:1},
ky:{"^":"j:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e_()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.d(z)
x=H.d(z)
x.stack=y.m(0)
throw x}},
jY:{"^":"kl;",
bJ:function(a){var z,y,x
H.h(a,{func:1,ret:-1})
try{if(C.e===$.F){a.$0()
return}P.f_(null,null,this,a,-1)}catch(x){z=H.P(x)
y=H.bb(x)
P.bx(null,null,this,z,H.e(y,"$isa3"))}},
d0:function(a,b,c){var z,y,x
H.h(a,{func:1,ret:-1,args:[c]})
H.o(b,c)
try{if(C.e===$.F){a.$1(b)
return}P.f0(null,null,this,a,b,-1,c)}catch(x){z=H.P(x)
y=H.bb(x)
P.bx(null,null,this,z,H.e(y,"$isa3"))}},
ey:function(a,b){return new P.k_(this,H.h(a,{func:1,ret:b}),b)},
cD:function(a){return new P.jZ(this,H.h(a,{func:1,ret:-1}))},
ez:function(a,b){return new P.k0(this,H.h(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
d_:function(a,b){H.h(a,{func:1,ret:b})
if($.F===C.e)return a.$0()
return P.f_(null,null,this,a,b)},
bK:function(a,b,c,d){H.h(a,{func:1,ret:c,args:[d]})
H.o(b,d)
if($.F===C.e)return a.$1(b)
return P.f0(null,null,this,a,b,c,d)},
f1:function(a,b,c,d,e,f){H.h(a,{func:1,ret:d,args:[e,f]})
H.o(b,e)
H.o(c,f)
if($.F===C.e)return a.$2(b,c)
return P.kz(null,null,this,a,b,c,d,e,f)},
cY:function(a,b,c,d){return H.h(a,{func:1,ret:b,args:[c,d]})}},
k_:{"^":"j;a,b,c",
$0:function(){return this.a.d_(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}},
jZ:{"^":"j:1;a,b",
$0:function(){return this.a.bJ(this.b)}},
k0:{"^":"j;a,b,c",
$1:[function(a){var z=this.c
return this.a.d0(this.b,H.o(a,z),z)},null,null,4,0,null,20,"call"],
$S:function(){return{func:1,ret:-1,args:[this.c]}}}}],["","",,P,{"^":"",
dU:function(a,b){return new H.aQ(0,0,[a,b])},
cG:function(){return new H.aQ(0,0,[null,null])},
cH:function(a){return H.kM(a,new H.aQ(0,0,[null,null]))},
bp:function(a,b,c,d){return new P.jQ(0,0,[d])},
hG:function(a,b,c){var z,y
if(P.d3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$by()
C.a.l(y,a)
try{P.kt(a,z)}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=P.ef(b,H.Y(z,"$isn"),", ")+c
return y.charCodeAt(0)==0?y:y},
cA:function(a,b,c){var z,y,x
if(P.d3(a))return b+"..."+c
z=new P.aT(b)
y=$.$get$by()
C.a.l(y,a)
try{x=z
x.sW(P.ef(x.gW(),a,", "))}finally{if(0>=y.length)return H.b(y,-1)
y.pop()}y=z
y.sW(y.gW()+c)
y=z.gW()
return y.charCodeAt(0)==0?y:y},
d3:function(a){var z,y
for(z=0;y=$.$get$by(),z<y.length;++z)if(a===y[z])return!0
return!1},
kt:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gC(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.n())return
w=H.a(z.gp())
C.a.l(b,w)
y+=w.length+2;++x}if(!z.n()){if(x<=5)return
if(0>=b.length)return H.b(b,-1)
v=b.pop()
if(0>=b.length)return H.b(b,-1)
u=b.pop()}else{t=z.gp();++x
if(!z.n()){if(x<=4){C.a.l(b,H.a(t))
return}v=H.a(t)
if(0>=b.length)return H.b(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gp();++x
for(;z.n();t=s,s=r){r=z.gp();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2;--x}C.a.l(b,"...")
return}}u=H.a(t)
v=H.a(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)C.a.l(b,q)
C.a.l(b,u)
C.a.l(b,v)},
dV:function(a,b){var z,y,x
z=P.bp(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.J)(a),++x)z.l(0,H.o(a[x],b))
return z},
c5:function(a){var z,y,x
z={}
if(P.d3(a))return"{...}"
y=new P.aT("")
try{C.a.l($.$get$by(),a)
x=y
x.sW(x.gW()+"{")
z.a=!0
a.F(0,new P.i_(z,y))
z=y
z.sW(z.gW()+"}")}finally{z=$.$get$by()
if(0>=z.length)return H.b(z,-1)
z.pop()}z=y.gW()
return z.charCodeAt(0)==0?z:z},
jQ:{"^":"jD;a,0b,0c,0d,0e,0f,r,$ti",
gC:function(a){var z=new P.eL(this,this.r,this.$ti)
z.c=this.e
return z},
gj:function(a){return this.a},
H:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return H.e(z[b],"$iscc")!=null}else{y=this.dO(b)
return y}},
dO:function(a){var z=this.d
if(z==null)return!1
return this.bp(this.cl(z,a),a)>=0},
l:function(a,b){var z,y
H.o(b,H.i(this,0))
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){z=P.cW()
this.b=z}return this.c8(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=P.cW()
this.c=y}return this.c8(y,b)}else return this.dE(b)},
dE:function(a){var z,y,x
H.o(a,H.i(this,0))
z=this.d
if(z==null){z=P.cW()
this.d=z}y=this.cb(a)
x=z[y]
if(x==null)z[y]=[this.bg(a)]
else{if(this.bp(x,a)>=0)return!1
x.push(this.bg(a))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.cs(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.cs(this.c,b)
else return this.e4(b)},
e4:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=this.cl(z,a)
x=this.bp(y,a)
if(x<0)return!1
this.cv(y.splice(x,1)[0])
return!0},
c8:function(a,b){H.o(b,H.i(this,0))
if(H.e(a[b],"$iscc")!=null)return!1
a[b]=this.bg(b)
return!0},
cs:function(a,b){var z
if(a==null)return!1
z=H.e(a[b],"$iscc")
if(z==null)return!1
this.cv(z)
delete a[b]
return!0},
ca:function(){this.r=this.r+1&67108863},
bg:function(a){var z,y
z=new P.cc(H.o(a,H.i(this,0)))
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.ca()
return z},
cv:function(a){var z,y
z=a.c
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.ca()},
cb:function(a){return J.aI(a)&0x3ffffff},
cl:function(a,b){return a[this.cb(b)]},
bp:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.as(a[y].a,b))return y
return-1},
q:{
cW:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
cc:{"^":"c;a,0b,0c"},
eL:{"^":"c;a,b,0c,0d,$ti",
sc9:function(a){this.d=H.o(a,H.i(this,0))},
gp:function(){return this.d},
n:function(){var z=this.a
if(this.b!==z.r)throw H.d(P.aw(z))
else{z=this.c
if(z==null){this.sc9(null)
return!1}else{this.sc9(H.o(z.a,H.i(this,0)))
this.c=this.c.b
return!0}}},
$isam:1,
q:{
jR:function(a,b,c){var z=new P.eL(a,b,[c])
z.c=a.e
return z}}},
jD:{"^":"ea;"},
c4:{"^":"jS;",$isz:1,$isn:1,$isp:1},
L:{"^":"c;$ti",
gC:function(a){return new H.cI(a,this.gj(a),0,[H.aC(this,a,"L",0)])},
I:function(a,b){return this.h(a,b)},
F:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.aC(this,a,"L",0)]})
z=this.gj(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gj(a))throw H.d(P.aw(a))}},
gS:function(a){return this.gj(a)===0},
gcO:function(a){return!this.gS(a)},
cQ:function(a,b,c){var z=H.aC(this,a,"L",0)
return new H.c6(a,H.h(b,{func:1,ret:c,args:[z]}),[z,c])},
f3:function(a,b){var z,y
z=H.w([],[H.aC(this,a,"L",0)])
C.a.sj(z,this.gj(a))
for(y=0;y<this.gj(a);++y)C.a.k(z,y,this.h(a,y))
return z},
f2:function(a){return this.f3(a,!0)},
l:function(a,b){var z
H.o(b,H.aC(this,a,"L",0))
z=this.gj(a)
this.sj(a,z+1)
this.k(a,z,b)},
dM:function(a,b,c){var z,y,x
z=this.gj(a)
y=c-b
for(x=c;x<z;++x)this.k(a,x-y,this.h(a,x))
this.sj(a,z-y)},
a4:function(a,b){var z=this.h(a,b)
this.dM(a,b,b+1)
return z},
m:function(a){return P.cA(a,"[","]")}},
cJ:{"^":"bI;"},
i_:{"^":"j:10;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.a(a)
z.a=y+": "
z.a+=H.a(b)}},
bI:{"^":"c;$ti",
F:function(a,b){var z,y
H.h(b,{func:1,ret:-1,args:[H.V(this,"bI",0),H.V(this,"bI",1)]})
for(z=J.G(this.gJ());z.n();){y=z.gp()
b.$2(y,this.h(0,y))}},
G:function(a){return J.fr(this.gJ(),a)},
gj:function(a){return J.af(this.gJ())},
gS:function(a){return J.fu(this.gJ())},
m:function(a){return P.c5(this)},
$isH:1},
ki:{"^":"c;$ti",
k:function(a,b,c){H.o(b,H.i(this,0))
H.o(c,H.i(this,1))
throw H.d(P.C("Cannot modify unmodifiable map"))}},
i0:{"^":"c;$ti",
h:function(a,b){return this.a.h(0,b)},
k:function(a,b,c){this.a.k(0,H.o(b,H.i(this,0)),H.o(c,H.i(this,1)))},
G:function(a){return this.a.G(a)},
F:function(a,b){this.a.F(0,H.h(b,{func:1,ret:-1,args:[H.i(this,0),H.i(this,1)]}))},
gS:function(a){return this.a.a===0},
gj:function(a){return this.a.a},
gJ:function(){var z=this.a
return new H.bH(z,[H.i(z,0)])},
m:function(a){return P.c5(this.a)},
$isH:1},
j2:{"^":"kj;$ti"},
cN:{"^":"c;$ti",
X:function(a,b){var z
for(z=J.G(H.x(b,"$isn",[H.V(this,"cN",0)],"$asn"));z.n();)this.l(0,z.gp())},
m:function(a){return P.cA(this,"{","}")},
bG:function(a,b){var z,y
z=this.gC(this)
if(!z.n())return""
if(b===""){y=""
do y+=H.a(z.d)
while(z.n())}else{y=H.a(z.d)
for(;z.n();)y=y+b+H.a(z.d)}return y.charCodeAt(0)==0?y:y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.dp("index"))
if(b<0)H.Q(P.aA(b,0,null,"index",null))
for(z=this.gC(this),y=0;z.n();){x=z.d
if(b===y)return x;++y}throw H.d(P.aP(b,this,"index",null,y))},
$isz:1,
$isn:1,
$isaB:1},
ea:{"^":"cN;"},
jS:{"^":"c+L;"},
kj:{"^":"i0+ki;$ti"}}],["","",,P,{"^":"",
kw:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.d(H.a6(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.P(x)
w=P.c1(String(y),null,null)
throw H.d(w)}w=P.cd(z)
return w},
cd:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.jI(a,Object.create(null))
for(z=0;z<a.length;++z)a[z]=P.cd(a[z])
return a},
mz:[function(a){return a.fg()},"$1","kJ",4,0,3,21],
jI:{"^":"cJ;a,b,0c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.e2(b):y}},
gj:function(a){return this.b==null?this.c.a:this.ar().length},
gS:function(a){return this.gj(this)===0},
gJ:function(){if(this.b==null){var z=this.c
return new H.bH(z,[H.i(z,0)])}return new P.jJ(this)},
k:function(a,b,c){var z,y
if(this.b==null)this.c.k(0,b,c)
else if(this.G(b)){z=this.b
z[b]=c
y=this.a
if(y==null?z!=null:y!==z)y[b]=null}else this.ep().k(0,b,c)},
G:function(a){if(this.b==null)return this.c.G(a)
return Object.prototype.hasOwnProperty.call(this.a,a)},
F:function(a,b){var z,y,x,w
H.h(b,{func:1,ret:-1,args:[P.k,,]})
if(this.b==null)return this.c.F(0,b)
z=this.ar()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.cd(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.d(P.aw(this))}},
ar:function(){var z=H.a0(this.c)
if(z==null){z=H.w(Object.keys(this.a),[P.k])
this.c=z}return z},
ep:function(){var z,y,x,w,v
if(this.b==null)return this.c
z=P.dU(P.k,null)
y=this.ar()
for(x=0;w=y.length,x<w;++x){v=y[x]
z.k(0,v,this.h(0,v))}if(w===0)C.a.l(y,null)
else C.a.sj(y,0)
this.b=null
this.a=null
this.c=z
return z},
e2:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.cd(this.a[a])
return this.b[a]=z},
$asbI:function(){return[P.k,null]},
$asH:function(){return[P.k,null]}},
jJ:{"^":"bq;a",
gj:function(a){var z=this.a
return z.gj(z)},
I:function(a,b){var z=this.a
return z.b==null?z.gJ().I(0,b):C.a.h(z.ar(),b)},
gC:function(a){var z=this.a
if(z.b==null){z=z.gJ()
z=z.gC(z)}else{z=z.ar()
z=new J.bC(z,z.length,0,[H.i(z,0)])}return z},
H:function(a,b){return this.a.G(b)},
$asz:function(){return[P.k]},
$asbq:function(){return[P.k]},
$asn:function(){return[P.k]}},
fQ:{"^":"c;"},
c_:{"^":"iN;$ti"},
dR:{"^":"R;a,b,c",
m:function(a){var z=P.aM(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+H.a(z)},
q:{
dS:function(a,b,c){return new P.dR(a,b,c)}}},
hU:{"^":"dR;a,b,c",
m:function(a){return"Cyclic error in JSON stringify"}},
hT:{"^":"fQ;a,b",
cI:function(a,b,c){var z=P.kw(b,this.geH().a)
return z},
bE:function(a,b){var z=this.geJ()
z=P.jL(a,z.b,z.a)
return z},
geJ:function(){return C.N},
geH:function(){return C.M}},
hW:{"^":"c_;a,b",
$asc_:function(){return[P.c,P.k]}},
hV:{"^":"c_;a",
$asc_:function(){return[P.k,P.c]}},
jM:{"^":"c;",
d7:function(a){var z,y,x,w,v,u,t
z=a.length
for(y=J.d9(a),x=this.c,w=0,v=0;v<z;++v){u=y.aJ(a,v)
if(u>92)continue
if(u<32){if(v>w)x.a+=C.f.a6(a,w,v)
w=v+1
x.a+=H.a8(92)
switch(u){case 8:x.a+=H.a8(98)
break
case 9:x.a+=H.a8(116)
break
case 10:x.a+=H.a8(110)
break
case 12:x.a+=H.a8(102)
break
case 13:x.a+=H.a8(114)
break
default:x.a+=H.a8(117)
x.a+=H.a8(48)
x.a+=H.a8(48)
t=u>>>4&15
x.a+=H.a8(t<10?48+t:87+t)
t=u&15
x.a+=H.a8(t<10?48+t:87+t)
break}}else if(u===34||u===92){if(v>w)x.a+=C.f.a6(a,w,v)
w=v+1
x.a+=H.a8(92)
x.a+=H.a8(u)}}if(w===0)x.a+=H.a(a)
else if(w<z)x.a+=y.a6(a,w,z)},
be:function(a){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(a==null?w==null:a===w)throw H.d(new P.hU(a,null,null))}C.a.l(z,a)},
b7:function(a){var z,y,x,w
if(this.d6(a))return
this.be(a)
try{z=this.b.$1(a)
if(!this.d6(z)){x=P.dS(a,null,this.gcp())
throw H.d(x)}x=this.a
if(0>=x.length)return H.b(x,-1)
x.pop()}catch(w){y=H.P(w)
x=P.dS(a,y,this.gcp())
throw H.d(x)}},
d6:function(a){var z,y
if(typeof a==="number"){if(!isFinite(a))return!1
this.c.a+=C.r.m(a)
return!0}else if(a===!0){this.c.a+="true"
return!0}else if(a===!1){this.c.a+="false"
return!0}else if(a==null){this.c.a+="null"
return!0}else if(typeof a==="string"){z=this.c
z.a+='"'
this.d7(a)
z.a+='"'
return!0}else{z=J.m(a)
if(!!z.$isp){this.be(a)
this.f9(a)
z=this.a
if(0>=z.length)return H.b(z,-1)
z.pop()
return!0}else if(!!z.$isH){this.be(a)
y=this.fa(a)
z=this.a
if(0>=z.length)return H.b(z,-1)
z.pop()
return y}else return!1}},
f9:function(a){var z,y,x
z=this.c
z.a+="["
y=J.M(a)
if(y.gj(a)>0){this.b7(y.h(a,0))
for(x=1;x<y.gj(a);++x){z.a+=","
this.b7(y.h(a,x))}}z.a+="]"},
fa:function(a){var z,y,x,w,v,u,t
z={}
if(a.gS(a)){this.c.a+="{}"
return!0}y=a.gj(a)*2
x=new Array(y)
x.fixed$length=Array
z.a=0
z.b=!0
a.F(0,new P.jN(z,x))
if(!z.b)return!1
w=this.c
w.a+="{"
for(v='"',u=0;u<y;u+=2,v=',"'){w.a+=v
this.d7(H.l(x[u]))
w.a+='":'
t=u+1
if(t>=y)return H.b(x,t)
this.b7(x[t])}w.a+="}"
return!0}},
jN:{"^":"j:10;a,b",
$2:function(a,b){var z,y
if(typeof a!=="string")this.a.b=!1
z=this.b
y=this.a
C.a.k(z,y.a++,a)
C.a.k(z,y.a++,b)}},
jK:{"^":"jM;c,a,b",
gcp:function(){var z=this.c.a
return z.charCodeAt(0)==0?z:z},
q:{
jL:function(a,b,c){var z,y,x
z=new P.aT("")
y=new P.jK(z,[],P.kJ())
y.b7(a)
x=z.a
return x.charCodeAt(0)==0?x:x}}}}],["","",,P,{"^":"",
kY:function(a,b,c){var z=H.e5(a,c)
if(z!=null)return z
throw H.d(P.c1(a,null,null))},
ha:function(a){if(a instanceof H.j)return a.m(0)
return"Instance of '"+H.bs(a)+"'"},
br:function(a,b,c){var z,y,x
z=[c]
y=H.w([],z)
for(x=J.G(a);x.n();)C.a.l(y,H.o(x.gp(),c))
if(b)return y
return H.x(J.bl(y),"$isp",z,"$asp")},
iE:function(a,b,c){return new H.hP(a,H.hQ(a,!1,!0,!1))},
aM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.E(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ha(a)},
fg:function(a,b){var z,y
H.h(b,{func:1,ret:P.W,args:[P.k]})
z=J.cn(a)
y=H.e5(z,null)
if(y==null)y=H.iw(z)
if(y!=null)return y
if(b==null)throw H.d(P.c1(a,null,null))
return b.$1(a)},
i7:{"^":"j:24;a,b",
$2:function(a,b){var z,y,x
H.e(a,"$isb2")
z=this.b
y=this.a
z.a+=y.a
x=z.a+=H.a(a.a)
z.a=x+": "
z.a+=H.a(P.aM(b))
y.a=", "}},
O:{"^":"c;"},
"+bool":0,
bh:{"^":"c;a,b",
l:function(a,b){return P.fZ(C.h.i(this.a,H.e(b,"$isln").gff()),this.b)},
gcS:function(){return this.a},
dw:function(a,b){var z
if(Math.abs(this.a)<=864e13)z=!1
else z=!0
if(z)throw H.d(P.aJ("DateTime is outside valid range: "+this.gcS()))},
V:function(a,b){if(b==null)return!1
if(!(b instanceof P.bh))return!1
return this.a===b.a&&this.b===b.b},
gE:function(a){var z=this.a
return(z^C.h.bB(z,30))&1073741823},
m:function(a){var z,y,x,w,v,u,t
z=P.h_(H.iv(this))
y=P.bE(H.it(this))
x=P.bE(H.ip(this))
w=P.bE(H.iq(this))
v=P.bE(H.is(this))
u=P.bE(H.iu(this))
t=P.h0(H.ir(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
q:{
fZ:function(a,b){var z,y
z=new P.bh(a,b)
if(Math.abs(a)<=864e13)y=!1
else y=!0
if(y)H.Q(P.aJ("DateTime is outside valid range: "+z.gcS()))
return z},
h_:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+z
if(z>=10)return y+"00"+z
return y+"000"+z},
h0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bE:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"W;"},
"+double":0,
R:{"^":"c;"},
e_:{"^":"R;",
m:function(a){return"Throw of null."}},
au:{"^":"R;a,b,c,d",
gbo:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbn:function(){return""},
m:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.a(z)
w=this.gbo()+y+x
if(!this.a)return w
v=this.gbn()
u=P.aM(this.b)
return w+v+": "+H.a(u)},
q:{
aJ:function(a){return new P.au(!1,null,null,a)},
co:function(a,b,c){return new P.au(!0,a,b,c)},
dp:function(a){return new P.au(!1,null,a,"Must not be null")}}},
e6:{"^":"au;e,f,a,b,c,d",
gbo:function(){return"RangeError"},
gbn:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.a(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.a(z)
else if(x>z)y=": Not in range "+H.a(z)+".."+H.a(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.a(z)}return y},
q:{
bJ:function(a,b,c){return new P.e6(null,null,!0,a,b,"Value not in range")},
aA:function(a,b,c,d,e){return new P.e6(b,c,!0,a,d,"Invalid value")}}},
hD:{"^":"au;e,j:f>,a,b,c,d",
gbo:function(){return"RangeError"},
gbn:function(){if(J.fm(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.a(z)},
q:{
aP:function(a,b,c,d,e){var z=H.t(e!=null?e:J.af(b))
return new P.hD(b,z,!0,a,c,"Index out of range")}}},
i6:{"^":"R;a,b,c,d,e",
m:function(a){var z,y,x,w,v,u,t,s,r,q
z={}
y=new P.aT("")
z.a=""
for(x=this.c,w=x.length,v=0,u="",t="";v<w;++v,t=", "){s=x[v]
y.a=u+t
u=y.a+=H.a(P.aM(s))
z.a=", "}this.d.F(0,new P.i7(z,y))
r=P.aM(this.a)
q=y.m(0)
x="NoSuchMethodError: method not found: '"+H.a(this.b.a)+"'\nReceiver: "+H.a(r)+"\nArguments: ["+q+"]"
return x},
q:{
dX:function(a,b,c,d,e){return new P.i6(a,b,c,d,e)}}},
j3:{"^":"R;a",
m:function(a){return"Unsupported operation: "+this.a},
q:{
C:function(a){return new P.j3(a)}}},
j0:{"^":"R;a",
m:function(a){var z=this.a
return z!=null?"UnimplementedError: "+z:"UnimplementedError"},
q:{
ey:function(a){return new P.j0(a)}}},
bt:{"^":"R;a",
m:function(a){return"Bad state: "+this.a},
q:{
bu:function(a){return new P.bt(a)}}},
fR:{"^":"R;a",
m:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.a(P.aM(z))+"."},
q:{
aw:function(a){return new P.fR(a)}}},
ic:{"^":"c;",
m:function(a){return"Out of Memory"},
$isR:1},
ed:{"^":"c;",
m:function(a){return"Stack Overflow"},
$isR:1},
fY:{"^":"R;a",
m:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+z+"' during its initialization"}},
jr:{"^":"c;a",
m:function(a){return"Exception: "+this.a},
$iscx:1},
hy:{"^":"c;a,b,c",
m:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.a(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.f.a6(x,0,75)+"..."
return y+"\n"+x},
$iscx:1,
q:{
c1:function(a,b,c){return new P.hy(a,b,c)}}},
aO:{"^":"c;"},
aY:{"^":"W;"},
"+int":0,
n:{"^":"c;$ti",
bP:["dm",function(a,b){var z=H.V(this,"n",0)
return new H.cQ(this,H.h(b,{func:1,ret:P.O,args:[z]}),[z])}],
gj:function(a){var z,y
z=this.gC(this)
for(y=0;z.n();)++y
return y},
gad:function(a){var z,y
z=this.gC(this)
if(!z.n())throw H.d(H.hH())
y=z.gp()
if(z.n())throw H.d(H.hI())
return y},
I:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.dp("index"))
if(b<0)H.Q(P.aA(b,0,null,"index",null))
for(z=this.gC(this),y=0;z.n();){x=z.gp()
if(b===y)return x;++y}throw H.d(P.aP(b,this,"index",null,y))},
m:function(a){return P.hG(this,"(",")")}},
am:{"^":"c;$ti"},
p:{"^":"c;$ti",$isz:1,$isn:1},
"+List":0,
D:{"^":"c;",
gE:function(a){return P.c.prototype.gE.call(this,this)},
m:function(a){return"null"}},
"+Null":0,
W:{"^":"c;"},
"+num":0,
c:{"^":";",
V:function(a,b){return this===b},
gE:function(a){return H.b1(this)},
m:["ds",function(a){return"Instance of '"+H.bs(this)+"'"}],
bH:function(a,b){H.e(b,"$iscz")
throw H.d(P.dX(this,b.gcR(),b.gcX(),b.gcT(),null))},
toString:function(){return this.m(this)}},
aB:{"^":"z;$ti"},
a3:{"^":"c;"},
k:{"^":"c;",$ise3:1},
"+String":0,
aT:{"^":"c;W:a<",
sW:function(a){this.a=H.l(a)},
gj:function(a){return this.a.length},
m:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
$isme:1,
q:{
ef:function(a,b,c){var z=J.G(b)
if(!z.n())return a
if(c.length===0){do a+=H.a(z.gp())
while(z.n())}else{a+=H.a(z.gp())
for(;z.n();)a=a+c+H.a(z.gp())}return a}}},
b2:{"^":"c;"}}],["","",,W,{"^":"",
lg:function(){return window},
dn:function(a){var z=document.createElement("a")
if(a!=null)z.href=a
return z},
h8:function(a,b,c){var z,y
z=document.body
y=(z&&C.k).Y(z,a,b,c)
y.toString
z=W.v
z=new H.cQ(new W.ad(y),H.h(new W.h9(),{func:1,ret:P.O,args:[z]}),[z])
return H.e(z.gad(z),"$isu")},
bi:function(a){var z,y,x,w
z="element tag unavailable"
try{y=J.I(a)
x=y.gd1(a)
if(typeof x==="string")z=y.gd1(a)}catch(w){H.P(w)}return z},
hE:function(a){var z,y,x
y=document.createElement("input")
z=H.e(y,"$isc3")
try{J.fA(z,a)}catch(x){H.P(x)}return z},
cb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eK:function(a,b,c,d){var z,y
z=W.cb(W.cb(W.cb(W.cb(0,a),b),c),d)
y=536870911&z+((67108863&z)<<3)
y^=y>>>11
return 536870911&y+((16383&y)<<15)},
kp:function(a){if(a==null)return
return W.cU(a)},
eU:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.cU(a)
if(!!J.m(z).$isaN)return z
return}else return H.e(a,"$isaN")},
f5:function(a,b){var z
H.h(a,{func:1,ret:-1,args:[b]})
z=$.F
if(z===C.e)return a
return z.ez(a,b)},
B:{"^":"u;",$isB:1,"%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFieldSetElement|HTMLFontElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLShadowElement|HTMLSlotElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTextAreaElement|HTMLTimeElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
dm:{"^":"B;0type",
sO:function(a,b){a.type=H.l(b)},
m:function(a){return String(a)},
$isdm:1,
"%":"HTMLAnchorElement"},
lh:{"^":"B;",
m:function(a){return String(a)},
"%":"HTMLAreaElement"},
dq:{"^":"B;",$isdq:1,"%":"HTMLBaseElement"},
ds:{"^":"A;",$isds:1,"%":"Blob|File"},
bW:{"^":"B;",$isbW:1,"%":"HTMLBodyElement"},
li:{"^":"B;0type",
sO:function(a,b){a.type=H.l(b)},
"%":"HTMLButtonElement"},
bY:{"^":"B;0u:height=,0t:width=",
da:function(a,b,c){return this.dW(a,b)},
bR:function(a,b){return this.da(a,b,null)},
dW:function(a,b){return a.getContext(b)},
$isbY:1,
"%":"HTMLCanvasElement"},
bZ:{"^":"A;",
eB:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
cL:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
b4:function(a,b){return a.measureText(b)},
cC:function(a,b,c,d,e,f,g){return a.bezierCurveTo(b,c,d,e,f,g)},
v:function(a,b,c){return a.lineTo(b,c)},
aD:function(a,b,c){return a.moveTo(b,c)},
K:function(a,b,c,d,e){return a.quadraticCurveTo(b,c,d,e)},
eL:function(a,b,c,d,e){a.fillText(b,c,d)},
cM:function(a,b,c,d){return this.eL(a,b,c,d,null)},
$isbZ:1,
"%":"CanvasRenderingContext2D"},
lj:{"^":"v;0j:length=","%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
lk:{"^":"ji;0j:length=",
aI:function(a,b){var z=this.dX(a,this.dH(a,b))
return z==null?"":z},
dH:function(a,b){var z,y
z=$.$get$dD()
y=z[b]
if(typeof y==="string")return y
y=this.ek(a,b)
z[b]=y
return y},
ek:function(a,b){var z
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
z=P.h1()+b
if(z in a)return z
return b},
dX:function(a,b){return a.getPropertyValue(b)},
gu:function(a){return a.height},
gb3:function(a){return a.left},
gah:function(a){return a.top},
gt:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fX:{"^":"c;",
gu:function(a){return this.aI(a,"height")},
gb3:function(a){return this.aI(a,"left")},
gah:function(a){return this.aI(a,"top")},
gt:function(a){return this.aI(a,"width")}},
cv:{"^":"B;",$iscv:1,"%":"HTMLDivElement"},
h2:{"^":"v;",
er:function(a,b){return a.adoptNode(b)},
a_:function(a,b){return a.querySelector(b)},
T:function(a,b){return a.querySelectorAll(b)},
"%":"XMLDocument;Document"},
ll:{"^":"A;",
m:function(a){return String(a)},
"%":"DOMException"},
h3:{"^":"A;",
eG:function(a,b){return a.createHTMLDocument(b)},
"%":"DOMImplementation"},
h4:{"^":"A;",
m:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
V:function(a,b){var z
if(b==null)return!1
if(!H.aW(b,"$isbK",[P.W],"$asbK"))return!1
z=J.I(b)
return a.left===z.gb3(b)&&a.top===z.gah(b)&&a.width===z.gt(b)&&a.height===z.gu(b)},
gE:function(a){return W.eK(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gu:function(a){return a.height},
gb3:function(a){return a.left},
gah:function(a){return a.top},
gt:function(a){return a.width},
gw:function(a){return a.x},
gA:function(a){return a.y},
$isbK:1,
$asbK:function(){return[P.W]},
"%":";DOMRectReadOnly"},
lm:{"^":"A;0j:length=",
l:function(a,b){return a.add(H.l(b))},
"%":"DOMTokenList"},
je:{"^":"c4;bm:a<,b",
gS:function(a){return this.a.firstElementChild==null},
gj:function(a){return this.b.length},
h:function(a,b){return H.e(J.aG(this.b,H.t(b)),"$isu")},
k:function(a,b,c){H.t(b)
J.ck(this.a,H.e(c,"$isu"),J.aG(this.b,b))},
sj:function(a,b){throw H.d(P.C("Cannot resize element lists"))},
l:function(a,b){H.e(b,"$isu")
J.aH(this.a,b)
return b},
gC:function(a){var z=this.f2(this)
return new J.bC(z,z.length,0,[H.i(z,0)])},
aX:function(a){J.dh(this.a)},
a4:function(a,b){var z,y
z=this.b
if(b>=z.length)return H.b(z,b)
y=H.e(z[b],"$isu")
J.bd(this.a,y)
return y},
$asz:function(){return[W.u]},
$asL:function(){return[W.u]},
$asn:function(){return[W.u]},
$asp:function(){return[W.u]}},
aj:{"^":"c4;a,$ti",
gj:function(a){return this.a.length},
h:function(a,b){return H.o(C.j.h(this.a,H.t(b)),H.i(this,0))},
k:function(a,b,c){H.t(b)
H.o(c,H.i(this,0))
throw H.d(P.C("Cannot modify list"))},
sj:function(a,b){throw H.d(P.C("Cannot modify list"))},
$isa1:1},
u:{"^":"v;0d1:tagName=",
gex:function(a){return new W.jn(a)},
gcE:function(a){return new W.je(a,a.children)},
gcF:function(a){return new W.jo(a)},
m:function(a){return a.localName},
aa:function(a,b,c,d,e){var z,y
z=this.Y(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":J.dj(a.parentNode,z,a)
break
case"afterbegin":y=a.childNodes
this.cN(a,z,y.length>0?y[0]:null)
break
case"beforeend":this.D(a,z)
break
case"afterend":J.dj(a.parentNode,z,a.nextSibling)
break
default:H.Q(P.aJ("Invalid position "+b))}},
Y:["ba",function(a,b,c,d){var z,y,x,w
if(c==null){z=$.dK
if(z==null){z=H.w([],[W.ah])
y=new W.dY(z)
C.a.l(z,W.eH(null))
C.a.l(z,W.eR())
$.dK=y
d=y}else d=z
z=$.dJ
if(z==null){z=new W.eS(d)
$.dJ=z
c=z}else{z.a=d
c=z}}if($.ax==null){z=document
y=z.implementation
y=(y&&C.C).eG(y,"")
$.ax=y
$.cw=y.createRange()
y=$.ax
y.toString
y=y.createElement("base")
H.e(y,"$isdq")
y.href=z.baseURI
z=$.ax.head;(z&&C.D).D(z,y)}z=$.ax
if(z.body==null){z.toString
y=z.createElement("body")
z.body=H.e(y,"$isbW")}z=$.ax
if(!!this.$isbW)x=z.body
else{y=a.tagName
z.toString
x=z.createElement(y)
z=$.ax.body;(z&&C.k).D(z,x)}if("createContextualFragment" in window.Range.prototype&&!C.a.H(C.P,a.tagName)){z=$.cw;(z&&C.y).dc(z,x)
z=$.cw
w=(z&&C.y).eE(z,b)}else{x.innerHTML=b
w=$.ax.createDocumentFragment()
for(z=J.I(w);y=x.firstChild,y!=null;)z.D(w,y)}z=$.ax.body
if(x==null?z!=null:x!==z)J.be(x)
c.bT(w)
C.d.er(document,w)
return w},function(a,b,c){return this.Y(a,b,c,null)},"eF",null,null,"gfe",5,5,null],
b9:function(a,b,c,d){a.textContent=null
this.D(a,this.Y(a,b,c,d))},
a5:function(a,b){return this.b9(a,b,null,null)},
al:function(a,b){return a.getAttribute(b)},
dZ:function(a,b){return a.hasAttribute(b)},
e5:function(a,b){return a.removeAttribute(b)},
dd:function(a,b,c){return a.setAttribute(b,c)},
$isu:1,
"%":";Element"},
h9:{"^":"j:7;",
$1:function(a){return!!J.m(H.e(a,"$isv")).$isu}},
lo:{"^":"B;0u:height=,0type,0t:width=",
sO:function(a,b){a.type=H.l(b)},
"%":"HTMLEmbedElement"},
T:{"^":"A;",$isT:1,"%":"AbortPaymentEvent|AnimationEvent|AnimationPlaybackEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|BackgroundFetchClickEvent|BackgroundFetchEvent|BackgroundFetchFailEvent|BackgroundFetchedEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|CanMakePaymentEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceMotionEvent|DeviceOrientationEvent|ErrorEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|ForeignFetchEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MojoInterfaceRequestEvent|MutationEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PaymentRequestEvent|PaymentRequestUpdateEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCPeerConnectionIceEvent|RTCTrackEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SensorErrorEvent|SpeechRecognitionError|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|VRDeviceEvent|VRDisplayEvent|VRSessionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
aN:{"^":"A;",
cz:["dj",function(a,b,c,d){H.h(c,{func:1,args:[W.T]})
if(c!=null)this.dF(a,b,c,!1)}],
dF:function(a,b,c,d){return a.addEventListener(b,H.b9(H.h(c,{func:1,args:[W.T]}),1),!1)},
e7:function(a,b,c,d){return a.removeEventListener(b,H.b9(H.h(c,{func:1,args:[W.T]}),1),!1)},
$isaN:1,
"%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest|MIDIInput|MIDIOutput|MIDIPort|MediaStream|ServiceWorker;EventTarget"},
lJ:{"^":"B;0j:length=","%":"HTMLFormElement"},
hA:{"^":"B;","%":"HTMLHeadElement"},
hB:{"^":"jF;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.aP(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.t(b)
H.e(c,"$isv")
throw H.d(P.C("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.d(P.C("Cannot resize immutable List."))},
I:function(a,b){return this.h(a,b)},
$isz:1,
$asz:function(){return[W.v]},
$isay:1,
$asay:function(){return[W.v]},
$asL:function(){return[W.v]},
$isn:1,
$asn:function(){return[W.v]},
$isp:1,
$asp:function(){return[W.v]},
$ishB:1,
$asa7:function(){return[W.v]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hC:{"^":"h2;","%":"HTMLDocument"},
lK:{"^":"B;0u:height=,0t:width=","%":"HTMLIFrameElement"},
dN:{"^":"A;0u:height=,0t:width=",$isdN:1,"%":"ImageData"},
lL:{"^":"B;0u:height=,0t:width=","%":"HTMLImageElement"},
c3:{"^":"B;0u:height=,0type,0t:width=",
sO:function(a,b){a.type=H.l(b)},
$isc3:1,
"%":"HTMLInputElement"},
bG:{"^":"cP;",$isbG:1,"%":"KeyboardEvent"},
lV:{"^":"B;0type",
sO:function(a,b){a.type=H.l(b)},
"%":"HTMLLinkElement"},
hZ:{"^":"A;",
m:function(a){return String(a)},
$ishZ:1,
"%":"Location"},
i2:{"^":"B;","%":"HTMLAudioElement;HTMLMediaElement"},
lX:{"^":"aN;",
cz:function(a,b,c,d){H.h(c,{func:1,args:[W.T]})
if(b==="message")a.start()
this.dj(a,b,c,!1)},
"%":"MessagePort"},
y:{"^":"cP;",
gcU:function(a){var z,y,x,w,v,u
if(!!a.offsetX)return new P.ac(a.offsetX,a.offsetY,[P.W])
else{z=a.target
if(!J.m(W.eU(z)).$isu)throw H.d(P.C("offsetX is only supported on elements"))
y=H.e(W.eU(z),"$isu")
z=a.clientX
x=a.clientY
w=[P.W]
v=y.getBoundingClientRect()
u=new P.ac(z,x,w).N(0,new P.ac(v.left,v.top,w))
return new P.ac(J.dl(u.a),J.dl(u.b),w)}},
$isy:1,
"%":"WheelEvent;DragEvent|MouseEvent"},
ad:{"^":"c4;a",
gad:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.d(P.bu("No elements"))
if(y>1)throw H.d(P.bu("More than one element"))
return z.firstChild},
l:function(a,b){J.aH(this.a,H.e(b,"$isv"))},
X:function(a,b){var z,y,x,w,v
H.x(b,"$isn",[W.v],"$asn")
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=J.I(y),v=0;v<x;++v)w.D(y,z.firstChild)
return},
a4:function(a,b){var z,y,x
z=this.a
y=z.childNodes
if(b>=y.length)return H.b(y,b)
x=y[b]
J.bd(z,x)
return x},
k:function(a,b,c){var z
H.t(b)
z=this.a
J.ck(z,H.e(c,"$isv"),C.j.h(z.childNodes,b))},
gC:function(a){var z=this.a.childNodes
return new W.dM(z,z.length,-1,[H.aC(C.j,z,"a7",0)])},
gj:function(a){return this.a.childNodes.length},
sj:function(a,b){throw H.d(P.C("Cannot set length on immutable List."))},
h:function(a,b){H.t(b)
return C.j.h(this.a.childNodes,b)},
$asz:function(){return[W.v]},
$asL:function(){return[W.v]},
$asn:function(){return[W.v]},
$asp:function(){return[W.v]}},
v:{"^":"aN;0eY:previousSibling=",
a0:function(a){var z=a.parentNode
if(z!=null)J.bd(z,a)},
f0:function(a,b){var z,y
try{z=a.parentNode
J.ck(z,b,a)}catch(y){H.P(y)}return a},
dK:function(a){var z
for(;z=a.firstChild,z!=null;)this.cr(a,z)},
m:function(a){var z=a.nodeValue
return z==null?this.dl(a):z},
D:function(a,b){return a.appendChild(b)},
cN:function(a,b,c){return a.insertBefore(b,c)},
cr:function(a,b){return a.removeChild(b)},
e8:function(a,b,c){return a.replaceChild(b,c)},
$isv:1,
"%":"DocumentFragment|DocumentType|ShadowRoot;Node"},
i8:{"^":"jU;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.aP(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.t(b)
H.e(c,"$isv")
throw H.d(P.C("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.d(P.C("Cannot resize immutable List."))},
I:function(a,b){return this.h(a,b)},
$isz:1,
$asz:function(){return[W.v]},
$isay:1,
$asay:function(){return[W.v]},
$asL:function(){return[W.v]},
$isn:1,
$asn:function(){return[W.v]},
$isp:1,
$asp:function(){return[W.v]},
$asa7:function(){return[W.v]},
"%":"NodeList|RadioNodeList"},
m6:{"^":"B;0type",
sO:function(a,b){a.type=H.l(b)},
"%":"HTMLOListElement"},
m7:{"^":"B;0u:height=,0type,0t:width=",
sO:function(a,b){a.type=H.l(b)},
"%":"HTMLObjectElement"},
m9:{"^":"y;0u:height=,0t:width=","%":"PointerEvent"},
ix:{"^":"A;",
eE:function(a,b){return a.createContextualFragment(b)},
dc:function(a,b){return a.selectNodeContents(b)},
"%":"Range"},
mb:{"^":"B;0type",
sO:function(a,b){a.type=H.l(b)},
"%":"HTMLScriptElement"},
mc:{"^":"B;0j:length=","%":"HTMLSelectElement"},
md:{"^":"B;0type",
sO:function(a,b){a.type=H.l(b)},
"%":"HTMLSourceElement"},
mf:{"^":"B;0type",
sO:function(a,b){a.type=H.l(b)},
"%":"HTMLStyleElement"},
iQ:{"^":"B;",
Y:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.ba(a,b,c,d)
z=W.h8("<table>"+H.a(b)+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
z.toString
new W.ad(y).X(0,new W.ad(z))
return y},
"%":"HTMLTableElement"},
mi:{"^":"B;",
Y:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.ba(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.z.Y(z.createElement("table"),b,c,d)
z.toString
z=new W.ad(z)
x=z.gad(z)
x.toString
z=new W.ad(x)
w=z.gad(z)
y.toString
w.toString
new W.ad(y).X(0,new W.ad(w))
return y},
"%":"HTMLTableRowElement"},
mj:{"^":"B;",
Y:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.ba(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.z.Y(z.createElement("table"),b,c,d)
z.toString
z=new W.ad(z)
x=z.gad(z)
y.toString
x.toString
new W.ad(y).X(0,new W.ad(x))
return y},
"%":"HTMLTableSectionElement"},
ei:{"^":"B;",
b9:function(a,b,c,d){var z
a.textContent=null
z=this.Y(a,b,c,d)
J.aH(a.content,z)},
a5:function(a,b){return this.b9(a,b,null,null)},
$isei:1,
"%":"HTMLTemplateElement"},
mk:{"^":"A;0t:width=","%":"TextMetrics"},
bL:{"^":"cP;",$isbL:1,"%":"TouchEvent"},
cP:{"^":"T;","%":"CompositionEvent|FocusEvent|TextEvent;UIEvent"},
mo:{"^":"i2;0u:height=,0t:width=","%":"HTMLVideoElement"},
cR:{"^":"aN;",
gev:function(a){var z,y,x
z=P.W
y=new P.a5(0,$.F,[z])
x=H.h(new W.j5(new P.kc(y,[z])),{func:1,ret:-1,args:[P.W]})
this.dV(a)
this.e9(a,W.f5(x,z))
return y},
e9:function(a,b){return a.requestAnimationFrame(H.b9(H.h(b,{func:1,ret:-1,args:[P.W]}),1))},
dV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
gah:function(a){return W.kp(a.top)},
$iscR:1,
$isez:1,
"%":"DOMWindow|Window"},
j5:{"^":"j:19;a",
$1:[function(a){var z=this.a
a=H.bP(H.aE(a),{futureOr:1,type:H.i(z,0)})
z=z.a
if(z.a!==0)H.Q(P.bu("Future already completed"))
z.bh(a)},null,null,4,0,null,22,"call"]},
eA:{"^":"aN;",$iseA:1,"%":"DedicatedWorkerGlobalScope|ServiceWorkerGlobalScope|SharedWorkerGlobalScope|WorkerGlobalScope"},
eC:{"^":"v;",$iseC:1,"%":"Attr"},
mt:{"^":"h4;",
m:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
V:function(a,b){var z
if(b==null)return!1
if(!H.aW(b,"$isbK",[P.W],"$asbK"))return!1
z=J.I(b)
return a.left===z.gb3(b)&&a.top===z.gah(b)&&a.width===z.gt(b)&&a.height===z.gu(b)},
gE:function(a){return W.eK(a.left&0x1FFFFFFF,a.top&0x1FFFFFFF,a.width&0x1FFFFFFF,a.height&0x1FFFFFFF)},
gu:function(a){return a.height},
gt:function(a){return a.width},
gw:function(a){return a.x},
gA:function(a){return a.y},
"%":"ClientRect|DOMRect"},
mx:{"^":"kn;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.aP(b,a,null,null,null))
return a[b]},
k:function(a,b,c){H.t(b)
H.e(c,"$isv")
throw H.d(P.C("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.d(P.C("Cannot resize immutable List."))},
I:function(a,b){return this.h(a,b)},
$isz:1,
$asz:function(){return[W.v]},
$isay:1,
$asay:function(){return[W.v]},
$asL:function(){return[W.v]},
$isn:1,
$asn:function(){return[W.v]},
$isp:1,
$asp:function(){return[W.v]},
$asa7:function(){return[W.v]},
"%":"MozNamedAttrMap|NamedNodeMap"},
jb:{"^":"cJ;bm:a<",
F:function(a,b){var z,y,x,w,v,u
H.h(b,{func:1,ret:-1,args:[P.k,P.k]})
for(z=this.gJ(),y=z.length,x=this.a,w=J.I(x),v=0;v<z.length;z.length===y||(0,H.J)(z),++v){u=z[v]
b.$2(u,w.al(x,u))}},
gJ:function(){var z,y,x,w,v
z=this.a.attributes
y=H.w([],[P.k])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.b(z,w)
v=H.e(z[w],"$iseC")
if(v.namespaceURI==null)C.a.l(y,v.name)}return y},
gS:function(a){return this.gJ().length===0},
$asbI:function(){return[P.k,P.k]},
$asH:function(){return[P.k,P.k]}},
jn:{"^":"jb;a",
G:function(a){return J.fo(this.a,a)},
h:function(a,b){return J.bS(this.a,H.l(b))},
k:function(a,b,c){J.dk(this.a,b,H.l(c))},
gj:function(a){return this.gJ().length}},
jo:{"^":"dB;bm:a<",
ac:function(){var z,y,x,w,v
z=P.bp(null,null,null,P.k)
for(y=this.a.className.split(" "),x=y.length,w=0;w<x;++w){v=J.cn(y[w])
if(v.length!==0)z.l(0,v)}return z},
bQ:function(a){this.a.className=H.x(a,"$isaB",[P.k],"$asaB").bG(0," ")},
gj:function(a){return this.a.classList.length},
l:function(a,b){var z,y
H.l(b)
z=this.a.classList
y=z.contains(b)
z.add(b)
return!y},
L:function(a,b){var z,y,x
if(typeof b==="string"){z=this.a.classList
y=z.contains(b)
z.remove(b)
x=y}else x=!1
return x}},
eF:{"^":"an;a,b,c,$ti",
aC:function(a,b,c,d){var z=H.i(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
return W.N(this.a,this.b,a,!1,z)}},
mu:{"^":"eF;a,b,c,$ti"},
b3:{"^":"an;a,b,c,$ti",
aC:function(a,b,c,d){var z,y,x,w
z=H.i(this,0)
H.h(a,{func:1,ret:-1,args:[z]})
H.h(c,{func:1,ret:-1})
y=this.$ti
x=new W.k6(new H.aQ(0,0,[[P.an,z],[P.ao,z]]),y)
x.sdQ(new P.k9(null,x.geC(x),0,y))
for(z=this.a,z=new H.cI(z,z.gj(z),0,[H.i(z,0)]),w=this.c;z.n();)x.l(0,new W.eF(z.d,w,!1,y))
z=x.a
z.toString
return new P.jc(z,[H.i(z,0)]).aC(a,b,c,d)},
ab:function(a){return this.aC(a,null,null,null)}},
jp:{"^":"ao;a,b,c,d,e,$ti",
se0:function(a){this.d=H.h(a,{func:1,args:[W.T]})},
aW:function(){if(this.b==null)return
this.eo()
this.b=null
this.se0(null)
return},
en:function(){var z=this.d
if(z!=null&&this.a<=0)J.fq(this.b,this.c,z,!1)},
eo:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
H.h(z,{func:1,args:[W.T]})
if(y)J.fp(x,this.c,z,!1)}},
q:{
N:function(a,b,c,d,e){var z=c==null?null:W.f5(new W.jq(c),W.T)
z=new W.jp(0,a,b,z,!1,[e])
z.en()
return z}}},
jq:{"^":"j:18;a",
$1:[function(a){return this.a.$1(H.e(a,"$isT"))},null,null,4,0,null,0,"call"]},
k6:{"^":"c;0a,b,$ti",
sdQ:function(a){this.a=H.x(a,"$isee",this.$ti,"$asee")},
l:function(a,b){var z,y,x
H.x(b,"$isan",this.$ti,"$asan")
z=this.b
if(z.G(b))return
y=this.a
x=H.i(b,0)
y=H.h(y.geq(y),{func:1,ret:-1,args:[x]})
H.h(new W.k7(this,b),{func:1,ret:-1})
z.k(0,b,W.N(b.a,b.b,y,!1,x))},
cG:[function(a){var z,y
for(z=this.b,y=z.gf7(z),y=new H.dW(J.G(y.a),y.b,[H.i(y,0),H.i(y,1)]);y.n();)y.a.aW()
z.aX(0)
this.a.cG(0)},"$0","geC",1,0,1]},
k7:{"^":"j:1;a,b",
$0:function(){var z,y
z=this.a
y=z.b.L(0,H.x(this.b,"$isan",[H.i(z,0)],"$asan"))
if(y!=null)y.aW()
return}},
bO:{"^":"c;a",
dA:function(a){var z,y
z=$.$get$cV()
if(z.a===0){for(y=0;y<262;++y)z.k(0,C.O[y],W.kQ())
for(y=0;y<12;++y)z.k(0,C.m[y],W.kR())}},
af:function(a){return $.$get$eI().H(0,W.bi(a))},
a9:function(a,b,c){var z,y,x
z=W.bi(a)
y=$.$get$cV()
x=y.h(0,H.a(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return H.d5(x.$4(a,b,c,this))},
$isah:1,
q:{
eH:function(a){var z,y
z=W.dn(null)
y=window.location
z=new W.bO(new W.k1(z,y))
z.dA(a)
return z},
mv:[function(a,b,c,d){H.e(a,"$isu")
H.l(b)
H.l(c)
H.e(d,"$isbO")
return!0},"$4","kQ",16,0,17,6,7,8,9],
mw:[function(a,b,c,d){var z,y,x,w,v
H.e(a,"$isu")
H.l(b)
H.l(c)
z=H.e(d,"$isbO").a
y=z.a
y.href=c
x=y.hostname
z=z.b
w=z.hostname
if(x==null?w==null:x===w){w=y.port
v=z.port
if(w==null?v==null:w===v){w=y.protocol
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x==="")if(y.port===""){z=y.protocol
z=z===":"||z===""}else z=!1
else z=!1
else z=!0
return z},"$4","kR",16,0,17,6,7,8,9]}},
a7:{"^":"c;$ti",
gC:function(a){return new W.dM(a,this.gj(a),-1,[H.aC(this,a,"a7",0)])},
l:function(a,b){H.o(b,H.aC(this,a,"a7",0))
throw H.d(P.C("Cannot add to immutable List."))},
a4:function(a,b){throw H.d(P.C("Cannot remove from immutable List."))}},
dY:{"^":"c;a",
l:function(a,b){C.a.l(this.a,H.e(b,"$isah"))},
af:function(a){return C.a.cA(this.a,new W.ia(a))},
a9:function(a,b,c){return C.a.cA(this.a,new W.i9(a,b,c))},
$isah:1},
ia:{"^":"j:12;a",
$1:function(a){return H.e(a,"$isah").af(this.a)}},
i9:{"^":"j:12;a,b,c",
$1:function(a){return H.e(a,"$isah").a9(this.a,this.b,this.c)}},
k2:{"^":"c;",
dB:function(a,b,c,d){var z,y,x
this.a.X(0,c)
z=b.bP(0,new W.k3())
y=b.bP(0,new W.k4())
this.b.X(0,z)
x=this.c
x.X(0,C.Q)
x.X(0,y)},
af:function(a){return this.a.H(0,W.bi(a))},
a9:["du",function(a,b,c){var z,y
z=W.bi(a)
y=this.c
if(y.H(0,H.a(z)+"::"+b))return this.d.es(c)
else if(y.H(0,"*::"+b))return this.d.es(c)
else{y=this.b
if(y.H(0,H.a(z)+"::"+b))return!0
else if(y.H(0,"*::"+b))return!0
else if(y.H(0,H.a(z)+"::*"))return!0
else if(y.H(0,"*::*"))return!0}return!1}],
$isah:1},
k3:{"^":"j:16;",
$1:function(a){return!C.a.H(C.m,H.l(a))}},
k4:{"^":"j:16;",
$1:function(a){return C.a.H(C.m,H.l(a))}},
kd:{"^":"k2;e,a,b,c,d",
a9:function(a,b,c){if(this.du(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.bS(a,"template")==="")return this.e.H(0,b)
return!1},
q:{
eR:function(){var z,y,x,w,v
z=P.k
y=P.dV(C.l,z)
x=H.i(C.l,0)
w=H.h(new W.ke(),{func:1,ret:z,args:[x]})
v=H.w(["TEMPLATE"],[z])
y=new W.kd(y,P.bp(null,null,null,z),P.bp(null,null,null,z),P.bp(null,null,null,z),null)
y.dB(null,new H.c6(C.l,w,[x,z]),v,null)
return y}}},
ke:{"^":"j:11;",
$1:[function(a){return"TEMPLATE::"+H.a(H.l(a))},null,null,4,0,null,23,"call"]},
k8:{"^":"c;",
af:function(a){var z=J.m(a)
if(!!z.$ise8)return!1
z=!!z.$isK
if(z&&W.bi(a)==="foreignObject")return!1
if(z)return!0
return!1},
a9:function(a,b,c){if(b==="is"||C.f.df(b,"on"))return!1
return this.af(a)},
$isah:1},
dM:{"^":"c;a,b,c,0d,$ti",
scc:function(a){this.d=H.o(a,H.i(this,0))},
n:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.scc(J.aG(this.a,z))
this.c=z
return!0}this.scc(null)
this.c=y
return!1},
gp:function(){return this.d},
$isam:1},
jj:{"^":"c;a",
gah:function(a){return W.cU(this.a.top)},
$isaN:1,
$isez:1,
q:{
cU:function(a){if(a===window)return H.e(a,"$isez")
else return new W.jj(a)}}},
ah:{"^":"c;"},
k1:{"^":"c;a,b",$ismm:1},
eS:{"^":"c;a",
bT:function(a){new W.kk(this).$2(a,null)},
aw:function(a,b){if(b==null)J.be(a)
else J.bd(b,a)},
ee:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.fs(a)
x=J.bS(y.gbm(),"is")
H.e(a,"$isu")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.P(t)}v="element unprintable"
try{v=J.E(a)}catch(t){H.P(t)}try{u=W.bi(a)
this.ed(H.e(a,"$isu"),b,z,v,u,H.e(y,"$isH"),H.l(x))}catch(t){if(H.P(t) instanceof P.au)throw t
else{this.aw(a,b)
window
s="Removing corrupted element "+H.a(v)
if(typeof console!="undefined")window.console.warn(s)}}},
ed:function(a,b,c,d,e,f,g){var z,y,x,w,v,u,t
if(c){this.aw(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(z)
return}if(!this.a.af(a)){this.aw(a,b)
window
z="Removing disallowed element <"+H.a(e)+"> from "+H.a(b)
if(typeof console!="undefined")window.console.warn(z)
return}if(g!=null)if(!this.a.a9(a,"is",g)){this.aw(a,b)
window
z="Removing disallowed type extension <"+H.a(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(z)
return}z=f.gJ()
y=H.w(z.slice(0),[H.i(z,0)])
for(x=f.gJ().length-1,z=f.a,w=J.I(z);x>=0;--x){if(x>=y.length)return H.b(y,x)
v=y[x]
u=this.a
t=J.fB(v)
H.l(v)
if(!u.a9(a,t,w.al(z,v))){window
u="Removing disallowed attribute <"+H.a(e)+" "+H.a(v)+'="'+H.a(w.al(z,v))+'">'
if(typeof console!="undefined")window.console.warn(u)
w.al(z,v)
w.e5(z,v)}}if(!!J.m(a).$isei)this.bT(a.content)},
$ism4:1},
kk:{"^":"j:20;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.ee(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aw(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fw(z)}catch(w){H.P(w)
v=H.e(z,"$isv")
if(x){u=v.parentNode
if(u!=null)J.bd(u,v)}else J.bd(a,v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=H.e(y,"$isv")}}},
ji:{"^":"A+fX;"},
jE:{"^":"A+L;"},
jF:{"^":"jE+a7;"},
jT:{"^":"A+L;"},
jU:{"^":"jT+a7;"},
km:{"^":"A+L;"},
kn:{"^":"km+a7;"}}],["","",,P,{"^":"",
dI:function(){var z=$.dH
if(z==null){z=J.cl(window.navigator.userAgent,"Opera",0)
$.dH=z}return z},
h1:function(){var z,y
z=$.dE
if(z!=null)return z
y=$.dF
if(y==null){y=J.cl(window.navigator.userAgent,"Firefox",0)
$.dF=y}if(y)z="-moz-"
else{y=$.dG
if(y==null){y=!P.dI()&&J.cl(window.navigator.userAgent,"Trident/",0)
$.dG=y}if(y)z="-ms-"
else z=P.dI()?"-o-":"-webkit-"}$.dE=z
return z},
dB:{"^":"ea;",
cw:function(a){var z=$.$get$dC().b
if(typeof a!=="string")H.Q(H.a6(a))
if(z.test(a))return a
throw H.d(P.co(a,"value","Not a valid class token"))},
m:function(a){return this.ac().bG(0," ")},
gC:function(a){var z=this.ac()
return P.jR(z,z.r,H.i(z,0))},
gj:function(a){return this.ac().a},
l:function(a,b){H.l(b)
this.cw(b)
return H.d5(this.eW(new P.fW(b)))},
L:function(a,b){var z,y
H.l(b)
this.cw(b)
if(typeof b!=="string")return!1
z=this.ac()
y=z.L(0,b)
this.bQ(z)
return y},
I:function(a,b){return this.ac().I(0,b)},
eW:function(a){var z,y
H.h(a,{func:1,args:[[P.aB,P.k]]})
z=this.ac()
y=a.$1(z)
this.bQ(z)
return y},
$asz:function(){return[P.k]},
$ascN:function(){return[P.k]},
$asn:function(){return[P.k]},
$asaB:function(){return[P.k]}},
fW:{"^":"j:21;a",
$1:function(a){return H.x(a,"$isaB",[P.k],"$asaB").l(0,this.a)}},
hu:{"^":"c4;a,b",
ga8:function(){var z,y,x
z=this.b
y=H.V(z,"L",0)
x=W.u
return new H.cK(new H.cQ(z,H.h(new P.hv(),{func:1,ret:P.O,args:[y]}),[y]),H.h(new P.hw(),{func:1,ret:x,args:[y]}),[y,x])},
k:function(a,b,c){var z
H.t(b)
H.e(c,"$isu")
z=this.ga8()
J.fz(z.b.$1(J.bB(z.a,b)),c)},
sj:function(a,b){var z=J.af(this.ga8().a)
if(b>=z)return
else if(b<0)throw H.d(P.aJ("Invalid list length"))
this.f_(0,b,z)},
l:function(a,b){J.aH(this.b.a,H.e(b,"$isu"))},
f_:function(a,b,c){var z=this.ga8()
z=H.iK(z,b,H.V(z,"n",0))
C.a.F(P.br(H.iR(z,c-b,H.V(z,"n",0)),!0,null),new P.hx())},
aX:function(a){J.dh(this.b.a)},
a4:function(a,b){var z=this.ga8()
z=z.b.$1(J.bB(z.a,b))
J.be(z)
return z},
gj:function(a){return J.af(this.ga8().a)},
h:function(a,b){var z
H.t(b)
z=this.ga8()
return z.b.$1(J.bB(z.a,b))},
gC:function(a){var z=P.br(this.ga8(),!1,W.u)
return new J.bC(z,z.length,0,[H.i(z,0)])},
$asz:function(){return[W.u]},
$asL:function(){return[W.u]},
$asn:function(){return[W.u]},
$asp:function(){return[W.u]}},
hv:{"^":"j:7;",
$1:function(a){return!!J.m(H.e(a,"$isv")).$isu}},
hw:{"^":"j:22;",
$1:[function(a){return H.cg(H.e(a,"$isv"),"$isu")},null,null,4,0,null,24,"call"]},
hx:{"^":"j:3;",
$1:function(a){return J.be(a)}}}],["","",,P,{"^":"",dT:{"^":"A;",$isdT:1,"%":"IDBKeyRange"}}],["","",,P,{"^":"",
ko:[function(a,b,c,d){var z,y,x
H.d5(b)
H.a0(d)
if(b){z=[c]
C.a.X(z,d)
d=z}y=P.br(J.fx(d,P.l0(),null),!0,null)
H.e(a,"$isaO")
x=H.im(a,y)
return P.eW(x)},null,null,16,0,null,25,26,27,28],
d_:function(a,b,c){var z
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(z){H.P(z)}return!1},
eY:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
eW:[function(a){var z
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=J.m(a)
if(!!z.$isaR)return a.a
if(H.fd(a))return a
if(!!z.$isex)return a
if(!!z.$isbh)return H.Z(a)
if(!!z.$isaO)return P.eX(a,"$dart_jsFunction",new P.kq())
return P.eX(a,"_$dart_jsObject",new P.kr($.$get$cZ()))},"$1","l1",4,0,3,10],
eX:function(a,b,c){var z
H.h(c,{func:1,args:[,]})
z=P.eY(a,b)
if(z==null){z=c.$1(a)
P.d_(a,b,z)}return z},
eV:[function(a){var z,y
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else if(a instanceof Object&&H.fd(a))return a
else if(a instanceof Object&&!!J.m(a).$isex)return a
else if(a instanceof Date){z=H.t(a.getTime())
y=new P.bh(z,!1)
y.dw(z,!1)
return y}else if(a.constructor===$.$get$cZ())return a.o
else return P.f4(a)},"$1","l0",4,0,38,10],
f4:function(a){if(typeof a=="function")return P.d0(a,$.$get$c0(),new P.kB())
if(a instanceof Array)return P.d0(a,$.$get$cT(),new P.kC())
return P.d0(a,$.$get$cT(),new P.kD())},
d0:function(a,b,c){var z
H.h(c,{func:1,args:[,]})
z=P.eY(a,b)
if(z==null||!(a instanceof Object)){z=c.$1(a)
P.d_(a,b,z)}return z},
aR:{"^":"c;a",
h:["dq",function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.d(P.aJ("property is not a String or num"))
return P.eV(this.a[b])}],
k:["bW",function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.d(P.aJ("property is not a String or num"))
this.a[b]=P.eW(c)}],
gE:function(a){return 0},
V:function(a,b){if(b==null)return!1
return b instanceof P.aR&&this.a===b.a},
m:function(a){var z,y
try{z=String(this.a)
return z}catch(y){H.P(y)
z=this.ds(this)
return z}},
bC:function(a,b){var z,y
z=this.a
if(b==null)y=null
else{y=H.i(b,0)
y=P.br(new H.c6(b,H.h(P.l1(),{func:1,ret:null,args:[y]}),[y,null]),!0,null)}return P.eV(z[a].apply(z,y))}},
cE:{"^":"aR;a"},
cD:{"^":"jH;a,$ti",
bf:function(a){var z=a<0||a>=this.gj(this)
if(z)throw H.d(P.aA(a,0,this.gj(this),null,null))},
h:function(a,b){if(typeof b==="number"&&b===C.h.bL(b))this.bf(H.t(b))
return H.o(this.dq(0,b),H.i(this,0))},
k:function(a,b,c){H.o(c,H.i(this,0))
if(typeof b==="number"&&b===C.r.bL(b))this.bf(H.t(b))
this.bW(0,b,c)},
gj:function(a){var z=this.a.length
if(typeof z==="number"&&z>>>0===z)return z
throw H.d(P.bu("Bad JsArray length"))},
sj:function(a,b){this.bW(0,"length",b)},
l:function(a,b){this.bC("push",[H.o(b,H.i(this,0))])},
a4:function(a,b){this.bf(b)
return H.o(J.aG(this.bC("splice",[b,1]),0),H.i(this,0))},
$isz:1,
$isn:1,
$isp:1},
kq:{"^":"j:3;",
$1:function(a){var z
H.e(a,"$isaO")
z=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.ko,a,!1)
P.d_(z,$.$get$c0(),a)
return z}},
kr:{"^":"j:3;a",
$1:function(a){return new this.a(a)}},
kB:{"^":"j:23;",
$1:function(a){return new P.cE(a)}},
kC:{"^":"j:41;",
$1:function(a){return new P.cD(a,[null])}},
kD:{"^":"j:25;",
$1:function(a){return new P.aR(a)}},
jH:{"^":"aR+L;"}}],["","",,P,{"^":"",
eJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ac:{"^":"c;w:a>,A:b>,$ti",
m:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
V:function(a,b){var z,y,x
if(b==null)return!1
if(!H.aW(b,"$isac",[P.W],null))return!1
z=this.a
y=J.I(b)
x=y.gw(b)
if(z==null?x==null:z===x){z=this.b
y=y.gA(b)
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gE:function(a){var z,y
z=J.aI(this.a)
y=J.aI(this.b)
return P.jG(P.eJ(P.eJ(0,z),y))},
i:function(a,b){var z,y,x,w,v
z=this.$ti
H.x(b,"$isac",z,"$asac")
y=this.a
x=b.a
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.f(x)
w=H.i(this,0)
x=H.o(y+x,w)
y=this.b
v=b.b
if(typeof y!=="number")return y.i()
if(typeof v!=="number")return H.f(v)
return new P.ac(x,H.o(y+v,w),z)},
N:function(a,b){var z,y,x,w,v
z=this.$ti
H.x(b,"$isac",z,"$asac")
y=this.a
x=b.a
if(typeof y!=="number")return y.N()
if(typeof x!=="number")return H.f(x)
w=H.i(this,0)
x=H.o(y-x,w)
y=this.b
v=b.b
if(typeof y!=="number")return y.N()
if(typeof v!=="number")return H.f(v)
return new P.ac(x,H.o(y-v,w),z)},
B:function(a,b){var z,y,x
H.aE(b)
z=this.a
if(typeof z!=="number")return z.B()
if(typeof b!=="number")return H.f(b)
y=H.i(this,0)
z=H.o(z*b,y)
x=this.b
if(typeof x!=="number")return x.B()
return new P.ac(z,H.o(x*b,y),this.$ti)}}}],["","",,P,{"^":"",fD:{"^":"A;",$isfD:1,"%":"SVGAnimatedLength"},fE:{"^":"A;",$isfE:1,"%":"SVGAnimatedLengthList"},fF:{"^":"A;",$isfF:1,"%":"SVGAnimatedNumber"},lp:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEBlendElement"},lq:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEColorMatrixElement"},lr:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEComponentTransferElement"},ls:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFECompositeElement"},lt:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEConvolveMatrixElement"},lu:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEDiffuseLightingElement"},lv:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEDisplacementMapElement"},lw:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEFloodElement"},lx:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEGaussianBlurElement"},ly:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEImageElement"},lz:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEMergeElement"},lA:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEMorphologyElement"},lB:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFEOffsetElement"},lC:{"^":"K;0w:x=,0A:y=","%":"SVGFEPointLightElement"},lD:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFESpecularLightingElement"},lE:{"^":"K;0w:x=,0A:y=","%":"SVGFESpotLightElement"},lF:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFETileElement"},lG:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFETurbulenceElement"},lH:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGFilterElement"},lI:{"^":"bj;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGForeignObjectElement"},hz:{"^":"bj;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},bj:{"^":"K;","%":"SVGAElement|SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},lM:{"^":"bj;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGImageElement"},b_:{"^":"A;",$isb_:1,"%":"SVGLength"},lU:{"^":"jP;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.aP(b,a,null,null,null))
return this.b8(a,b)},
k:function(a,b,c){H.t(b)
H.e(c,"$isb_")
throw H.d(P.C("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.d(P.C("Cannot resize immutable List."))},
I:function(a,b){return this.h(a,b)},
b8:function(a,b){return a.getItem(b)},
$isz:1,
$asz:function(){return[P.b_]},
$asL:function(){return[P.b_]},
$isn:1,
$asn:function(){return[P.b_]},
$isp:1,
$asp:function(){return[P.b_]},
$asa7:function(){return[P.b_]},
"%":"SVGLengthList"},lW:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGMaskElement"},b0:{"^":"A;",$isb0:1,"%":"SVGNumber"},m5:{"^":"jW;",
gj:function(a){return a.length},
h:function(a,b){H.t(b)
if(b>>>0!==b||b>=a.length)throw H.d(P.aP(b,a,null,null,null))
return this.b8(a,b)},
k:function(a,b,c){H.t(b)
H.e(c,"$isb0")
throw H.d(P.C("Cannot assign element of immutable List."))},
sj:function(a,b){throw H.d(P.C("Cannot resize immutable List."))},
I:function(a,b){return this.h(a,b)},
b8:function(a,b){return a.getItem(b)},
$isz:1,
$asz:function(){return[P.b0]},
$asL:function(){return[P.b0]},
$isn:1,
$asn:function(){return[P.b0]},
$isp:1,
$asp:function(){return[P.b0]},
$asa7:function(){return[P.b0]},
"%":"SVGNumberList"},m8:{"^":"K;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGPatternElement"},ma:{"^":"hz;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGRectElement"},e8:{"^":"K;0type",
sO:function(a,b){a.type=H.l(b)},
$ise8:1,
"%":"SVGScriptElement"},mg:{"^":"K;0type",
sO:function(a,b){a.type=H.l(b)},
"%":"SVGStyleElement"},fG:{"^":"dB;a",
ac:function(){var z,y,x,w,v,u
z=J.bS(this.a,"class")
y=P.bp(null,null,null,P.k)
if(z==null)return y
for(x=z.split(" "),w=x.length,v=0;v<w;++v){u=J.cn(x[v])
if(u.length!==0)y.l(0,u)}return y},
bQ:function(a){J.dk(this.a,"class",a.bG(0," "))}},K:{"^":"u;",
gcF:function(a){return new P.fG(a)},
gcE:function(a){return new P.hu(a,new W.ad(a))},
Y:function(a,b,c,d){var z,y,x,w,v,u
z=H.w([],[W.ah])
C.a.l(z,W.eH(null))
C.a.l(z,W.eR())
C.a.l(z,new W.k8())
c=new W.eS(new W.dY(z))
y='<svg version="1.1">'+H.a(b)+"</svg>"
z=document
x=z.body
w=(x&&C.k).eF(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.ad(w)
u=z.gad(z)
for(z=J.I(v);x=u.firstChild,x!=null;)z.D(v,x)
return v},
$isK:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGGradientElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMetadataElement|SVGRadialGradientElement|SVGSetElement|SVGStopElement|SVGSymbolElement|SVGTitleElement|SVGViewElement;SVGElement"},mh:{"^":"bj;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGSVGElement"},iT:{"^":"bj;","%":"SVGTextPathElement;SVGTextContentElement"},ml:{"^":"iT;0w:x=,0A:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},mn:{"^":"bj;0u:height=,0t:width=,0w:x=,0A:y=","%":"SVGUseElement"},jO:{"^":"A+L;"},jP:{"^":"jO+a7;"},jV:{"^":"A+L;"},jW:{"^":"jV+a7;"}}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,P,{"^":""}],["","",,U,{"^":"",
fO:function(a,b){var z
if($.bD==null){z=new H.aQ(0,0,[P.k,U.cs])
$.bD=z
z.k(0,"NetLogo",new U.i5("  "))
$.bD.k(0,"plain",new U.ii("  "))}if($.bD.G(a))return $.bD.h(0,a).cj(b)
else return C.i.bE(b,null)},
lP:[function(a,b){var z
H.l(a)
H.l(b)
if($.$get$U().h(0,a) instanceof U.ct)$.$get$U().h(0,a).f6()
z=C.i.cI(0,b,null)
if(!!J.m(z).$isH){$.$get$U().k(0,a,U.dy(a,z))
$.$get$U().h(0,a).R()}},"$2","l7",8,0,39,1,11],
lO:[function(a){var z,y,x,w
z=C.i.cI(0,H.l(a),null)
if(!!J.m(z).$isH)for(y=J.G(z.gJ());y.n();){x=y.gp()
if($.$get$U().h(0,x) instanceof U.ct){w=$.$get$U().h(0,x)
C.a.sj(w.a,0)
C.a.sj(w.r,0)
C.a.L(w.db.c,w)}if(!!J.m(z.h(0,x)).$isH){w=$.$get$U()
H.l(x)
w.k(0,x,U.dy(x,H.e(z.h(0,x),"$isH")))
$.$get$U().h(0,x).R()}}},"$1","l6",4,0,40,11],
lN:[function(a,b){H.l(a)
H.l(b)
if($.$get$U().G(a))return U.fO(b,$.$get$U().h(0,a).bF())
return},"$2","l5",8,0,29,1,29],
lR:[function(a){var z
H.l(a)
if($.$get$U().G(a)){z=$.$get$U().h(0,a).x
z.k(0,"program",$.$get$U().h(0,a).bF())
return C.i.bE(z,null)}},"$1","l9",4,0,11,1],
lQ:[function(){var z,y,x,w
z=P.cG()
for(y=$.$get$U(),y=new H.bH(y,[H.i(y,0)]),y=y.gC(y);y.n();){x=y.d
w=$.$get$U().h(0,x).x
w.k(0,"program",$.$get$U().h(0,x).bF())
z.k(0,x,w)}return C.i.bE(z,null)},"$0","l8",0,0,28],
ff:function(){var z=$.$get$d8()
z.k(0,"NetTango_InitWorkspace",U.l7())
z.k(0,"NetTango_InitAllWorkspaces",U.l6())
z.k(0,"NetTango_ExportCode",U.l5())
z.k(0,"NetTango_Save",U.l9())
z.k(0,"NetTango_SaveAll",U.l8())},
df:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{z=P.kY(a,null,null)
return z}catch(y){if(!!J.m(H.P(y)).$iscx)return b
else throw y}return b},
aF:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{z=P.fg(a,null)
return z}catch(y){if(!!J.m(H.P(y)).$iscx)return b
else throw y}return b},
de:function(a,b){if(a==null)return b
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
bU:{"^":"c;0a,b,0O:c',0d,w:e>,A:f>,t:r>,x,0y,0z,Q,0ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,0k1,0k2,0k3,0k4,r1,r2",
gu:function(a){return this.r1?$.$get$r():this.x},
gaB:function(){return 0},
gag:function(){return 0},
gaz:function(){var z=this.y
return z!=null?z.gaz():this},
gb5:function(){var z=this.y
if(!(z!=null)){z=this.ch
z=z!=null?z.rx:null}return z},
gcP:function(){return this.z==null},
an:function(a,b){var z=$.bV
$.bV=z+1
this.a=z
this.r=$.$get$av()
this.x=$.$get$r()},
aY:function(a){var z=U.dt(this.fy,this.b)
this.aK(z)
return z},
aK:function(a){var z,y,x,w
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
for(z=this.cx,y=z.length,x=a.cx,w=0;w<z.length;z.length===y||(0,H.J)(z),++w)C.a.l(x,z[w].aZ(0,a))
for(z=this.cy,y=z.length,x=a.cy,w=0;w<z.length;z.length===y||(0,H.J)(z),++w)C.a.l(x,z[w].aZ(0,a))},
M:function(){var z,y,x,w,v,u
z=P.cG()
z.k(0,"id",this.a)
z.k(0,"action",this.b)
z.k(0,"type",this.c)
z.k(0,"format",this.d)
z.k(0,"start",this.go)
z.k(0,"required",this.fx)
y=this.e
x=$.$get$cp()
if(typeof y!=="number")return y.ak()
if(typeof x!=="number")return H.f(x)
z.k(0,"x",y/x)
y=this.f
if(typeof y!=="number")return y.ak()
z.k(0,"y",y/x)
y=this.cx
if(y.length!==0){z.k(0,"params",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){v=y[w]
J.at(z.h(0,"params"),v.M())}}y=this.cy
if(y.length!==0){z.k(0,"properties",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){u=y[w]
J.at(z.h(0,"properties"),u.M())}}return z},
a1:function(a){var z
J.at(a,this.M())
z=this.y
if(z!=null)z.a1(a)},
aR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z=$.$get$av()
y=this.dY(a)
x=$.$get$X()
if(typeof x!=="number")return x.B()
if(typeof y!=="number")return y.i()
this.r=Math.max(H.fa(z),y+x*2)
if(!this.r1&&this.cx.length!==0)for(z=this.cx,y=z.length,w=0,v=0;v<z.length;z.length===y||(0,H.J)(z),++v){u=z[v]
u.aQ(a)
w+=u.z+x}else w=0
if(!this.r1&&this.cy.length!==0)for(z=this.cy,y=z.length,t=0,v=0;v<z.length;z.length===y||(0,H.J)(z),++v){s=z[v]
s.aQ(a)
r=s.z
a.save()
a.font=s.b.fr
q=$.$get$aK()
p=C.b.b4(a,"\u25b8    "+H.a(s.f)).width
if(typeof q!=="number")return q.i()
if(typeof p!=="number")return H.f(p)
a.restore()
t=Math.max(t,r+(q+p+x*2))}else t=0
z=this.e
if(typeof z!=="number")return z.i()
y=this.r
if(typeof y!=="number")return H.f(y)
y=Math.max(z+t,z+y+w)
b=Math.max(H.fa(b),y)
o=this.gb5()
if(o!=null)b=o.aR(a,b)
z=this.e
if(typeof z!=="number")return H.f(z)
this.r=b-z
return b},
a2:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a2(a+this.gag(),b)},
ax:["di",function(){var z,y,x,w,v
z=this.y
if(z!=null){y=this.f
x=this.r1?$.$get$r():this.x
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.f(x)
z.f=y+x
x=this.e
y=z.Q
w=this.Q
v=$.$get$aK()
if(typeof v!=="number")return H.f(v)
if(typeof x!=="number")return x.i()
z.e=x+(y-w)*v
z.ax()}}],
dY:function(a){var z
a.save()
a.font=this.fr
z=C.b.b4(a,this.b).width
a.restore()
return z},
bk:function(a){var z,y,x,w,v
a.save()
a.fillStyle=this.dx
a.font=this.fr
a.textAlign="left"
a.textBaseline="middle"
z=this.b
y=this.e
x=$.$get$X()
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.f(x)
w=this.f
v=$.$get$r()
if(typeof v!=="number")return v.ak()
if(typeof w!=="number")return w.i()
C.b.cM(a,z,y+x,w+v/2)
a.restore()},
bl:function(a){var z
a.save()
this.bv(a)
a.strokeStyle=this.dy
z=$.$get$a2()
if(typeof z!=="number")return H.f(z)
a.lineWidth=0.5*z
a.lineJoin="round"
a.stroke()
a.restore()},
bj:function(a){a.save()
this.bv(a)
a.fillStyle=this.db
a.fill()
a.fillStyle="rgba(0, 0, 0, "+H.a(Math.min(1,0.075*this.Q))
a.fill()
a.restore()},
dS:function(a){var z,y,x,w,v,u
z=this.r
for(y=this.cx,x=y.length-1;x>=0;--x){w=$.$get$X()
if(x>=y.length)return H.b(y,x)
v=y[x]
u=v.z
if(typeof w!=="number")return w.i()
if(typeof z!=="number")return z.N()
z-=w+u
v.bD(a,z)}},
dT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
for(z=this.cy,y=0;y<z.length;y=w){x=$.$get$r()
w=y+1
if(typeof x!=="number")return x.B()
v=x*w
u=z[y]
t=u.b
s=t.r
r=$.$get$X()
q=u.z
if(typeof r!=="number")return r.i()
if(typeof s!=="number")return s.N()
p=t.f
if(typeof p!=="number")return p.i()
o=t.e
n=$.$get$aK()
if(typeof o!=="number")return o.i()
if(typeof n!=="number")return H.f(n)
a.fillStyle=t.dx
a.font=t.fr
a.textAlign="left"
a.textBaseline="middle"
t="\u25b8    "+H.a(u.f)
a.toString
a.fillText(t,o+n,p+v+x/2)
u.cJ(a,s-(r+q),v)}},
bv:["dh",function(a){var z,y,x,w,v
a.beginPath()
z=this.e
y=$.$get$X()
if(typeof z!=="number")return z.i()
if(typeof y!=="number")return H.f(y)
C.b.aD(a,z+y,this.f)
this.bx(a,this.z==null&&this.go)
z=this.Q===0
x=z&&this.z==null
this.co(a,x,z&&this.y==null)
this.bw(a,this.y==null&&this.Q===0)
if(this.Q<=0)z=this.z!=null&&this.y!=null
else z=!0
if(z){z=this.e
x=this.f
w=this.r1?$.$get$r():this.x
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.f(w)
C.b.v(a,z,x+w)
C.b.v(a,this.e,this.f)
w=this.e
if(typeof w!=="number")return w.i()
C.b.v(a,w+y,this.f)}else if(this.y!=null){z=this.e
x=this.f
w=this.r1?$.$get$r():this.x
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.f(w)
C.b.v(a,z,x+w)
w=this.e
x=this.f
if(typeof x!=="number")return x.i()
C.b.v(a,w,x+y)
x=this.e
w=this.f
if(typeof x!=="number")return x.i()
C.b.K(a,x,w,x+y,w)}else{z=this.z
x=this.e
w=this.f
if(z!=null){z=this.r1
v=z?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.f(v)
z=z?$.$get$r():this.x
if(typeof z!=="number")return H.f(z)
C.b.K(a,x,w+v,x,w+z-y)
C.b.v(a,this.e,this.f)
z=this.e
if(typeof z!=="number")return z.i()
C.b.v(a,z+y,this.f)}else{z=this.r1
v=z?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.f(v)
z=z?$.$get$r():this.x
if(typeof z!=="number")return H.f(z)
C.b.K(a,x,w+v,x,w+z-y)
z=this.e
w=this.f
if(typeof w!=="number")return w.i()
C.b.v(a,z,w+y)
w=this.e
z=this.f
if(typeof w!=="number")return w.i()
C.b.K(a,w,z,w+y,z)}}a.closePath()}],
co:function(a,b,c){var z,y,x,w,v
z=$.$get$X()
y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.f(x)
if(typeof z!=="number")return H.f(z);(a&&C.b).v(a,y+x-z,this.f)
if(b&&c){y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.f(x)
x=y+x
y=this.f
if(typeof y!=="number")return y.i()
C.b.K(a,x,y,x,y+z)
y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.f(x)
w=this.f
v=this.r1?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.f(v)
C.b.v(a,y+x,w+v-z)
v=this.e
w=this.r
if(typeof v!=="number")return v.i()
if(typeof w!=="number")return H.f(w)
w=v+w
v=this.f
y=this.r1
x=y?$.$get$r():this.x
if(typeof v!=="number")return v.i()
if(typeof x!=="number")return H.f(x)
y=y?$.$get$r():this.x
if(typeof y!=="number")return H.f(y)
C.b.K(a,w,v+x,w-z,v+y)}else if(c){y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.f(x)
C.b.v(a,y+x,this.f)
x=this.e
y=this.r
if(typeof x!=="number")return x.i()
if(typeof y!=="number")return H.f(y)
w=this.f
v=this.r1?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.f(v)
C.b.v(a,x+y,w+v-z)
v=this.e
w=this.r
if(typeof v!=="number")return v.i()
if(typeof w!=="number")return H.f(w)
w=v+w
v=this.f
y=this.r1
x=y?$.$get$r():this.x
if(typeof v!=="number")return v.i()
if(typeof x!=="number")return H.f(x)
y=y?$.$get$r():this.x
if(typeof y!=="number")return H.f(y)
C.b.K(a,w,v+x,w-z,v+y)}else{y=this.e
x=this.r
w=this.f
if(b){if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.f(x)
y+=x
if(typeof w!=="number")return w.i()
C.b.K(a,y,w,y,w+z)
w=this.e
y=this.r
if(typeof w!=="number")return w.i()
if(typeof y!=="number")return H.f(y)
x=this.f
v=this.r1?$.$get$r():this.x
if(typeof x!=="number")return x.i()
if(typeof v!=="number")return H.f(v)
C.b.v(a,w+y,x+v)
v=this.e
x=this.r
if(typeof v!=="number")return v.i()
if(typeof x!=="number")return H.f(x)
y=this.f
w=this.r1?$.$get$r():this.x
if(typeof y!=="number")return y.i()
if(typeof w!=="number")return H.f(w)
C.b.v(a,v+x-z,y+w)}else{if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.f(x)
C.b.v(a,y+x,w)
y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.f(x)
w=this.f
v=this.r1?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.f(v)
C.b.v(a,y+x,w+v)
v=this.e
w=this.r
if(typeof v!=="number")return v.i()
if(typeof w!=="number")return H.f(w)
x=this.f
y=this.r1?$.$get$r():this.x
if(typeof x!=="number")return x.i()
if(typeof y!=="number")return H.f(y)
C.b.v(a,v+w-z,x+y)}}},
bx:function(a,b){var z,y,x,w,v
z=$.$get$X()
y=this.e
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return y.i()
x=$.$get$aK()
w=this.gaB()
if(typeof x!=="number")return x.B()
v=y+z*2+x*w
if(b){(a&&C.b).v(a,v,this.f)
y=this.f
if(typeof y!=="number")return y.i()
x=y+z/2
w=v+z
C.b.cC(a,v,x,w,x,w,y)}y=this.e
x=this.r
if(typeof y!=="number")return y.i()
if(typeof x!=="number")return H.f(x);(a&&C.b).v(a,y+x-z,this.f)},
bw:function(a,b){var z,y,x,w,v,u,t,s
z=$.$get$X()
y=this.e
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return y.i()
x=y+z*2
if(!this.r1){y=$.$get$aK()
w=this.gag()
if(typeof y!=="number")return y.B()
x+=y*w}if(b){y=x+z
w=this.f
v=this.r1?$.$get$r():this.x
if(typeof w!=="number")return w.i()
if(typeof v!=="number")return H.f(v);(a&&C.b).v(a,y,w+v)
v=this.f
w=this.r1
u=w?$.$get$r():this.x
if(typeof v!=="number")return v.i()
if(typeof u!=="number")return H.f(u)
t=z/2
s=w?$.$get$r():this.x
if(typeof s!=="number")return H.f(s)
w=w?$.$get$r():this.x
if(typeof w!=="number")return H.f(w)
C.b.cC(a,y,v+u+t,x,v+s+t,x,v+w)}y=this.f
w=this.r1?$.$get$r():this.x
if(typeof y!=="number")return y.i()
if(typeof w!=="number")return H.f(w);(a&&C.b).v(a,x-z,y+w)},
b_:function(a){var z,y,x,w,v,u
z=a.c
y=a.d
x=this.f
w=this.r1?$.$get$r():this.x
if(typeof x!=="number")return x.i()
if(typeof w!=="number")return H.f(w)
v=this.e
if(typeof v!=="number")return H.f(v)
if(z>=v)if(y>=x){u=this.r
if(typeof u!=="number")return H.f(u)
w=z<=v+u&&y<=x+w}else w=!1
else w=!1
return w},
ai:function(a){var z,y,x
this.id=!0
z=a.c
this.k1=z
y=a.d
this.k2=y
this.k3=z
this.k4=y
z=this.z
if(z!=null){z.y=null
this.z=null}for(z=this.fy,x=this;x!=null;){z.e6(x)
z.aq(x)
x=x.gb5()}return this},
bO:function(a){var z
this.id=!1
this.r1=!1
this.r2=!1
z=this.fy
if(!z.em(this))z.cu(this)
z.aF()},
bM:function(a){this.k1=a.c
this.k2=a.d},
bN:function(a){},
$isc8:1,
q:{
dt:function(a,b){var z,y,x
z=[U.az]
y=H.w([],z)
z=H.w([],z)
x=$.$get$a2()
if(typeof x!=="number")return H.f(x)
x=new U.bU(b,0,0,0,0,0,y,z,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.a(14*x)+"px 'Poppins', sans-serif",!1,a,!0,!1,!1,!0)
x.an(a,b)
return x},
du:function(a,b){var z,y,x,w,v,u,t
z=b.h(0,"action")
y=z==null?"":J.E(z)
if(!!J.m(b.h(0,"clauses")).$isp)x=U.dr(a,y)
else if(J.as(b.h(0,"type"),"clause")){z=[U.az]
w=H.w([],z)
z=H.w([],z)
v=$.$get$a2()
if(typeof v!=="number")return H.f(v)
x=new U.aL(y,0,0,0,0,0,w,z,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.a(14*v)+"px 'Poppins', sans-serif",!1,a,!0,!1,!1,!0)
x.an(a,y)
x.go=!1}else x=U.dt(a,y)
z=b.h(0,"type")
x.c=z==null?"":J.E(z)
z=b.h(0,"format")
x.d=z==null?null:J.E(z)
z=b.h(0,"blockColor")
w=x.db
x.db=z==null?w:J.E(z)
z=b.h(0,"textColor")
w=x.dx
x.dx=z==null?w:J.E(z)
z=b.h(0,"borderColor")
w=x.dy
x.dy=z==null?w:J.E(z)
z=b.h(0,"font")
w=x.fr
x.fr=z==null?w:J.E(z)
x.go=!U.de(b.h(0,"start"),!1)
x.fx=U.de(b.h(0,"required"),x.fx)
if(!!J.m(b.h(0,"params")).$isp)for(z=J.G(H.Y(b.h(0,"params"),"$isn")),w=x.cx;z.n();)C.a.l(w,U.cM(x,H.e(z.gp(),"$isH")))
if(!!J.m(b.h(0,"properties")).$isp)for(z=J.G(H.Y(b.h(0,"properties"),"$isn")),w=x.cy;z.n();)C.a.l(w,U.cM(x,H.e(z.gp(),"$isH")))
z=x.cy.length
w=$.$get$r()
if(typeof w!=="number")return H.f(w)
x.x=(1+z)*w
z=!!x.$isbf
if(z&&!!J.m(b.h(0,"clauses")).$isp)for(w=J.G(H.Y(b.h(0,"clauses"),"$isn"));w.n();){u=w.gp()
J.fn(u,"type","clause")
t=H.cg(U.du(a,H.e(u,"$isH")),"$isaL")
H.cg(x,"$isbf").c0(t)}if(z&&b.h(0,"end")!=null){z=H.cg(x,"$isbf").Z
w=J.aG(b.h(0,"end"),"format")
z.d=w==null?null:J.E(w)}return x}}},
dA:{"^":"bU;",
gb5:function(){var z=this.y
if(z!=null)return z
else{z=this.rx
if(z!=null)return z
else{z=this.ch
if(z!=null)return z.rx
else return}}},
a2:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a2(a+this.gag(),this)}},
aL:{"^":"dA;0U,0rx,0a,b,0c,0d,e,f,r,x,0y,0z,Q,0ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,0k1,0k2,0k3,0k4,r1,r2",
gaB:function(){return 1},
gag:function(){return 1},
gcP:function(){return!1},
aY:function(a){var z,y,x,w,v,u
z=this.fy
y=this.b
x=[U.az]
w=H.w([],x)
x=H.w([],x)
v=$.$get$a2()
if(typeof v!=="number")return H.f(v)
u=new U.aL(y,0,0,0,0,0,w,x,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.a(14*v)+"px 'Poppins', sans-serif",!1,z,!0,!1,!1,!0)
u.an(z,y)
u.go=!1
this.aK(u)
return u},
a1:function(a){var z,y
z=this.M()
z.k(0,"children",[])
J.at(a,z)
y=this.y
if(y!=null)y.a1(H.a0(z.h(0,"children")))},
bl:function(a){},
bj:function(a){},
ai:function(a){return this.U.ai(a)}},
dL:{"^":"aL;0U,0rx,0a,b,0c,0d,e,f,r,x,0y,0z,Q,0ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,0k1,0k2,0k3,0k4,r1,r2",
gaB:function(){return 1},
gag:function(){return 0},
a2:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a2(a,b)},
a1:function(a){J.at(a,this.M())},
bk:function(a){}},
bf:{"^":"dA;U,0Z,0rx,0a,b,0c,0d,e,f,r,x,0y,0z,Q,0ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,0k1,0k2,0k3,0k4,r1,r2",
gaB:function(){return 0},
gag:function(){return 1},
aY:function(a){var z,y,x,w,v,u,t,s,r,q,p
z=U.dr(this.fy,this.b)
this.aK(z)
for(y=this.U,x=y.length,w=[U.az],v=0;v<y.length;y.length===x||(0,H.J)(y),++v){u=y[v]
if(!u.$isdL){t=u.b
s=H.w([],w)
r=H.w([],w)
q=$.$get$a2()
if(typeof q!=="number")return H.f(q)
p=new U.aL(t,0,0,0,0,0,s,r,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.a(14*q)+"px 'Poppins', sans-serif",!1,u.fy,!0,!1,!1,!0)
q=$.bV
$.bV=q+1
p.a=q
p.r=$.$get$av()
p.x=$.$get$r()
p.go=!1
u.aK(p)
z.c0(p)}}z.Z.d=this.Z.d
return z},
gaz:function(){var z,y
z=this.Z
y=z.y
return y!=null?y.gaz():z},
a1:function(a){var z,y,x,w
z=this.M()
z.k(0,"children",[])
z.k(0,"clauses",[])
J.at(a,z)
y=this.y
if(y!=null)y.a1(H.a0(z.h(0,"children")))
for(y=this.U,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)y[w].a1(H.a0(z.h(0,"clauses")))
y=this.Z.y
if(y!=null)y.a1(a)},
a2:function(a,b){var z,y,x
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a2(a+1,this)
for(z=this.U,y=z.length,x=0;x<z.length;z.length===y||(0,H.J)(z),++x)z[x].a2(a,b)},
ax:function(){var z,y,x,w,v,u,t,s,r
this.di()
for(z=this.U,y=z.length,x=this,w=0;w<z.length;z.length===y||(0,H.J)(z),++w,x=v){v=z[w]
u=x.y
if(u!=null){t=u.gaz()
v.e=this.e
u=t.f
s=t.r1?$.$get$r():t.x
if(typeof u!=="number")return u.i()
if(typeof s!=="number")return H.f(s)
v.f=u+s}else{v.e=this.e
u=x.f
s=x.r1?$.$get$r():x.x
if(typeof u!=="number")return u.i()
if(typeof s!=="number")return H.f(s)
r=$.$get$r()
if(typeof r!=="number")return H.f(r)
v.f=u+s+r}v.ax()}},
c0:function(a){var z,y,x,w
a.U=this
z=this.U
C.a.L(z,this.Z)
C.a.l(z,a)
C.a.l(z,this.Z)
for(y=0;x=z.length,y<x-1;y=w){w=y+1
z[y].rx=z[w]}if(0>=x)return H.b(z,0)
this.rx=z[0]},
bv:function(a){var z,y,x,w,v,u,t,s,r
if(this.r1){this.dh(a)
return}z=$.$get$X()
a.beginPath()
y=this.e
if(typeof y!=="number")return y.i()
if(typeof z!=="number")return H.f(z)
C.b.aD(a,y+z,this.f)
x=this.z==null&&this.go
for(w=this;w!=null;){if(w.y==null)v=w.rx!=null||this.Q===0
else v=!1
w.bx(a,x)
w.co(a,x,v)
w.bw(a,v)
if(w.rx!=null){y=w.e
u=$.$get$aK()
if(typeof y!=="number")return y.i()
if(typeof u!=="number")return H.f(u)
y+=u
t=w.f
s=w.r1
r=s?$.$get$r():w.x
if(typeof t!=="number")return t.i()
if(typeof r!=="number")return H.f(r)
s=s?$.$get$r():w.x
if(typeof s!=="number")return H.f(s)
C.b.K(a,y,t+r,y,t+s+z)
y=w.y
t=w.e
s=w.rx
if(y!=null){if(typeof t!=="number")return t.i()
C.b.v(a,t+u,s.f)
y=w.e
if(typeof y!=="number")return y.i()
C.b.v(a,y+u+z,w.rx.f)}else{if(typeof t!=="number")return t.i()
y=s.f
if(typeof y!=="number")return y.N()
C.b.v(a,t+u,y-z)
y=w.e
if(typeof y!=="number")return y.i()
u=y+u
y=w.rx.f
C.b.K(a,u,y,u+z,y)}}x=w.y==null
w=w.rx}y=this.Z
u=y.y!=null||this.Q>0
t=y.f
s=this.e
if(u){y=y.r1?$.$get$r():y.x
if(typeof t!=="number")return t.i()
if(typeof y!=="number")return H.f(y)
C.b.v(a,s,t+y)}else{if(typeof s!=="number")return s.i()
y=y.r1?$.$get$r():y.x
if(typeof t!=="number")return t.i()
if(typeof y!=="number")return H.f(y)
C.b.v(a,s+z,t+y)
y=this.e
t=this.Z
s=t.f
u=t.r1
r=u?$.$get$r():t.x
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.f(r)
u=u?$.$get$r():t.x
if(typeof u!=="number")return H.f(u)
C.b.K(a,y,s+r,y,s+u-z)}y=this.z
u=this.e
t=this.f
if(y!=null){C.b.v(a,u,t)
y=this.e
if(typeof y!=="number")return y.i()
C.b.v(a,y+z,this.f)}else{if(typeof t!=="number")return t.i()
C.b.v(a,u,t+z)
y=this.e
u=this.f
if(typeof y!=="number")return y.i()
C.b.K(a,y,u,y+z,u)}a.closePath()},
q:{
dr:function(a,b){var z,y,x,w,v
z=H.w([],[U.aL])
y=[U.az]
x=H.w([],y)
w=H.w([],y)
v=$.$get$a2()
if(typeof v!=="number")return H.f(v)
w=new U.bf(z,b,0,0,0,0,0,x,w,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.a(14*v)+"px 'Poppins', sans-serif",!1,a,!0,!1,!1,!0)
w.an(a,b)
x="end-"+H.a(b)
v=new U.dL(x,0,0,0,0,0,H.w([],y),H.w([],y),"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.a(14*v)+"px 'Poppins', sans-serif",!1,a,!0,!1,!1,!0)
v.an(a,x)
v.go=!1
x=$.$get$r()
if(typeof x!=="number")return x.ak()
v.x=x/2
v.d=""
w.Z=v
v.U=w
C.a.l(z,v)
w.rx=w.Z
return w}}},
aZ:{"^":"c;a,0b,c,0d,e",
sO:function(a,b){this.c=H.l(b)},
b0:function(a){var z,y
z=this.e
y=z.length
if(y===1){if(this.a.c!==this)a.a+="("
a.a+=H.a(this.b)+" "
if(0>=z.length)return H.b(z,0)
z[0].b0(a)
if(this.a.c!==this)a.a+=")"}else if(y===2){if(this.a.c!==this)a.a+="("
if(0>=y)return H.b(z,0)
z[0].b0(a)
a.a+=" "+H.a(this.b)+" "
if(1>=z.length)return H.b(z,1)
z[1].b0(a)
if(this.a.c!==this)a.a+=")"}else{z=this.b
if(z!=null)a.a+=z}},
M:function(){var z,y,x,w,v
z=P.cH(["name",this.b,"type",this.c])
y=this.e
if(y.length!==0){z.k(0,"children",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){v=y[w]
J.at(z.h(0,"children"),v.M())}}y=this.d
if(y!=null)z.k(0,"format",y)
return z},
aA:function(a){var z,y,x,w,v
z=a.h(0,"name")
this.b=z==null?"":J.E(z)
z=a.h(0,"type")
this.c=z==null?"num":J.E(z)
z=this.e
C.a.sj(z,0)
if(!!J.m(a.h(0,"children")).$isp)for(y=J.G(H.Y(a.h(0,"children"),"$isn")),x=[U.aZ];y.n();){w=y.gp()
v=new U.aZ(this.a,H.l(J.aG(w,"type")),H.w([],x))
C.a.l(z,v)
v.aA(H.e(w,"$isH"))}},
eA:function(a){var z,y,x,w
if(a==null)return this.e.length!==0
z=this.e
y=J.M(a)
if(z.length!==y.gj(a))return!0
for(x=0;x<y.gj(a);++x){w=y.h(a,x)
if(x>=z.length)return H.b(z,x)
if(!J.as(w,z[x].c))return!0}return!1},
de:function(a){var z,y,x,w,v,u,t
z=this.e
y=z.length===0
if(this.eA(a)){C.a.sj(z,0)
if(a!=null)for(x=J.M(a),w=[U.aZ],v=0;v<x.gj(a);++v){u=v===0&&y&&J.as(x.h(a,v),this.c)
t=this.a
if(u){u=new U.aZ(t,H.l(x.h(a,v)),H.w([],w))
u.b=this.b
C.a.l(z,u)}else C.a.l(z,new U.aZ(t,H.l(x.h(a,v)),H.w([],w)))}}},
cB:function(a){var z,y
z=document.createElement("div")
C.c.a5(z,H.a(this.b))
z.classList.add("nt-expression-text")
z.classList.add("editable")
y=H.a(this.c)
z.classList.add(y)
y=W.y
W.N(z,"click",H.h(new U.hn(this,z),{func:1,ret:-1,args:[y]}),!1,y)
this.cK(z,a)
C.c.D(a,z)},
cK:function(a,b){var z,y
z=W.y
y={func:1,ret:-1,args:[z]}
W.N(a,"mouseenter",H.h(new U.ho(b),y),!1,z)
W.N(a,"mouseleave",H.h(new U.hp(b),y),!1,z)},
aV:function(a,b){var z=document.createElement("div")
C.c.a5(z,b?"(":")")
z.classList.add("nt-expression-text")
z.classList.add("parenthesis")
this.cK(z,a)
C.c.D(a,z)},
ew:function(a){var z,y
this.b=J.E(U.aF(this.b,0))
z=W.hE("number")
z.className="nt-number-input"
z.value=this.b
z.step="1"
z.toString
y=W.T
W.N(z,"change",H.h(new U.hm(this,z),{func:1,ret:-1,args:[y]}),!1,y)
C.c.D(a,z)},
geT:function(){var z=this.b
if(z!=null)return P.fg(z,new U.hq())!=null
return!1},
b6:function(a){var z,y,x
z=document.createElement("div")
z.className="nt-expression"
if((this.geT()||this.b==null)&&this.c==="num")this.ew(z)
else if(this.b==null){z.classList.add("empty")
C.c.aa(z,"beforeend","<small>&#9660;</small>",null,null)}else{y=this.e
x=y.length
if(x===1){this.aV(z,!0)
this.cB(z)
if(0>=y.length)return H.b(y,0)
y[0].b6(z)
this.aV(z,!1)}else if(x===2){this.aV(z,!0)
if(0>=y.length)return H.b(y,0)
y[0].b6(z)
this.cB(z)
if(1>=y.length)return H.b(y,1)
y[1].b6(z)
this.aV(z,!1)}else C.c.aa(z,"beforeend","<div class='nt-expression-text "+H.a(this.c)+"'>"+H.a(this.b)+"</div>",null,null)}if(this.e.length===0){z.classList.add("editable")
y=W.y
W.N(z,"click",H.h(new U.ht(this,z),{func:1,ret:-1,args:[y]}),!1,y)}(a&&C.c).D(a,z)},
cV:function(a){var z,y,x,w
z=W.u
y=document
H.ae(z,z,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
z=new W.aj(C.d.T(y,".nt-pulldown-menu"),[z])
z.F(z,new U.hr())
x=y.createElement("div")
x.classList.add("nt-pulldown-menu")
this.c2(x,this.a.a.cx)
if(J.fv(this.a.a.ch))C.c.aa(x,"beforeend","<hr>",null,null)
this.c2(x,this.a.a.ch)
C.c.aa(x,"beforeend","<hr>",null,null)
w=W.dn("#")
C.o.a5(w,"Clear")
w.className="clear"
C.c.D(x,w)
z=W.y
W.N(w,"click",H.h(new U.hs(this,x),{func:1,ret:-1,args:[z]}),!1,z)
C.c.D(a,x)},
c2:function(a,b){var z,y,x,w,v,u
for(z=J.G(b),y=W.y,x={func:1,ret:-1,args:[y]};z.n();){w=z.gp()
v=J.M(w)
if(J.as(v.h(w,"type"),this.c)){u=document.createElement("a")
u.href="#"
C.o.a5(u,H.a(v.h(w,"name")))
C.c.D(a,u)
W.N(u,"click",H.h(new U.hl(this,a,w),x),!1,y)}}}},
hn:{"^":"j:0;a,b",
$1:function(a){H.e(a,"$isy")
this.a.cV(this.b)
a.stopPropagation()}},
ho:{"^":"j:0;a",
$1:function(a){H.e(a,"$isy")
this.a.classList.add("highlight")}},
hp:{"^":"j:0;a",
$1:function(a){H.e(a,"$isy")
this.a.classList.remove("highlight")}},
hm:{"^":"j:4;a,b",
$1:function(a){var z,y,x
z=this.a
y=this.b
x=y.value
z.b=x
if(x===""){z.b="0"
y.value="0"}}},
hq:{"^":"j:42;",
$1:function(a){return}},
ht:{"^":"j:0;a,b",
$1:function(a){H.e(a,"$isy")
this.a.cV(this.b)
a.stopPropagation()}},
hr:{"^":"j:8;",
$1:function(a){return J.be(H.e(a,"$isu"))}},
hs:{"^":"j:0;a,b",
$1:function(a){var z
H.e(a,"$isy")
C.c.a0(this.b)
z=this.a
z.b=null
C.a.sj(z.e,0)
z.a.bI()
a.stopPropagation()
a.preventDefault()}},
hl:{"^":"j:0;a,b,c",
$1:function(a){var z,y,x
H.e(a,"$isy")
C.c.a0(this.b)
z=this.a
y=this.c
x=J.M(y)
z.de(H.a0(x.h(y,"arguments")))
z.b=H.l(x.h(y,"name"))
z.c=H.l(x.h(y,"type"))
z.d=H.l(x.h(y,"format"))
z.a.bI()
a.stopPropagation()
a.preventDefault()}},
hb:{"^":"c;a,0b,0c",
m:function(a){var z,y
z=new P.aT("")
this.c.b0(z)
y=z.a
return y.charCodeAt(0)==0?y:y},
aA:function(a){var z=J.m(a)
if(!!z.$isH)this.c.aA(a)
else if(a!=null)this.c.b=z.m(a)},
bI:function(){var z=this.b
if(z!=null&&this.c!=null){J.ft(z).aX(0)
this.c.b6(H.e(this.b,"$iscv"))}}},
cs:{"^":"c;",
au:function(a,b,c){var z,y
for(z=this.a,y=0;y<b;++y)a.a+=z
a.a+=c+"\n"},
as:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=J.M(b)
y=H.l(z.h(b,"format"))
x=z.h(b,"params")
w=z.h(b,"properties")
v=J.m(x)
u=!!v.$isp?v.gj(x):0
t=J.m(w)
s=!!t.$isp?t.gj(w):0
if(typeof y!=="string"){y=H.a(z.h(b,"action"))
for(r=0;r<u;++r)y+=" {"+r+"}"
for(r=0;r<s;++r)y+=" {P"+r+"}"}for(r=0;r<u;++r){z="{"+r+"}"
q=this.ck(v.h(x,r))
if(typeof q!=="string")H.Q(H.a6(q))
y=H.dd(y,z,q)}for(r=0;r<s;++r){z="{P"+r+"}"
v=this.ck(t.h(w,r))
if(typeof v!=="string")H.Q(H.a6(v))
y=H.dd(y,z,v)}this.au(a,c,y)},
ck:function(a){var z=J.M(a)
if(!!J.m(z.h(a,"value")).$isH)return this.at(z.h(a,"value"))
else{z=z.h(a,"value")
return z==null?"":J.E(z)}},
at:function(a){var z,y,x,w,v,u,t
z=J.M(a)
y=z.h(a,"children")
if(y==null||!J.m(y).$isp)y=[]
x=z.h(a,"name")
w=x==null?"":J.E(x)
x=z.h(a,"format")
if(typeof x==="string"){v=H.l(z.h(a,"format"))
z=J.M(y)
u=0
while(!0){x=H.aE(z.gj(y))
if(typeof x!=="number")return H.f(x)
if(!(u<x))break
x="{"+u+"}"
t=this.at(z.h(y,u))
v.toString
if(typeof t!=="string")H.Q(H.a6(t))
v=H.dd(v,x,t);++u}return v}else{z=J.M(y)
if(z.gj(y)===1)return"("+H.a(w)+" "+H.a(this.at(z.h(y,0)))+")"
else if(z.gj(y)===2)return"("+H.a(this.at(z.h(y,0)))+" "+H.a(w)+" "+H.a(this.at(z.h(y,1)))+")"
else return w}}},
ii:{"^":"cs;a",
cj:function(a){var z,y
z=new P.aT("")
for(y=J.G(H.Y(a.h(0,"chains"),"$isn"));y.n();){this.a7(z,y.gp(),0)
z.a+="\n"}y=z.a
return y.charCodeAt(0)==0?y:y},
a7:function(a,b,c){var z,y,x,w,v,u
for(z=J.G(H.Y(b,"$isn")),y=c+1;z.n();){x=z.gp()
this.as(a,x,c)
w=J.M(x)
if(!!J.m(w.h(x,"children")).$isp)this.a7(a,w.h(x,"children"),y)
if(!!J.m(w.h(x,"clauses")).$isp)for(w=J.G(H.Y(w.h(x,"clauses"),"$isn"));w.n();){v=w.gp()
this.as(a,v,c)
u=J.M(v)
if(!!J.m(u.h(v,"children")).$isp)this.a7(a,u.h(v,"children"),y)}}}},
i5:{"^":"cs;a",
cj:function(a){var z,y,x,w
z=new P.aT("")
for(y=J.G(H.Y(a.h(0,"chains"),"$isn"));y.n();){x=y.gp()
w=J.M(x)
if(J.dg(w.gj(x),0)&&J.as(J.aG(w.h(x,0),"type"),"nlogo:procedure")){this.as(z,w.a4(x,0),0)
this.a7(z,x,1)
w=z.a+="end\n"
z.a=w+"\n"}}y=z.a
return y.charCodeAt(0)==0?y:y},
a7:function(a,b,c){var z,y,x,w,v,u
for(z=J.G(H.Y(b,"$isn")),y=c+1;z.n();){x=z.gp()
this.as(a,x,c)
w=J.M(x)
if(!!J.m(w.h(x,"children")).$isp){this.au(a,c,"[")
this.a7(a,w.h(x,"children"),y)
this.au(a,c,"]")}if(!!J.m(w.h(x,"clauses")).$isp)for(w=J.G(H.Y(w.h(x,"clauses"),"$isn"));w.n();){v=w.gp()
this.as(a,v,c)
u=J.M(v)
if(!!J.m(u.h(v,"children")).$isp){this.au(a,c,"[")
this.a7(a,u.h(v,"children"),y)
this.au(a,c,"]")}}}}},
fH:{"^":"c;a,b,c,t:d>",
gw:function(a){return this.a.y-this.d},
gA:function(a){return 0},
gu:function(a){return this.a.z},
eU:function(a){var z,y
if(!a.r1)if(!a.r2){z=a.e
y=a.r
if(typeof y!=="number")return y.B()
if(typeof z!=="number")return z.i()
y=z+y*0.75>=this.a.y-this.d
z=y}else z=!1
else z=!1
return z},
d9:function(a){var z,y,x,w,v
for(z=this.b,y=z.length,x=0;x<y;++x){w=z[x].a
v=w.b
if(v==null?a==null:v===a)return w}return},
aQ:function(a){var z,y,x,w,v,u,t
z=$.$get$av()
if(typeof z!=="number")return z.B()
z*=1.5
this.d=z
for(y=this.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w,z=t){v=y[w].a
a.save()
a.font=v.fr
u=C.b.b4(a,v.b).width
a.restore()
v=$.$get$X()
if(typeof v!=="number")return v.B()
if(typeof u!=="number")return u.i()
t=$.$get$bT()
if(typeof t!=="number")return t.B()
t=Math.max(z,u+v*2+t*2)
this.d=t}},
bD:function(a,b){var z,y,x,w,v,u,t,s,r,q
this.aQ(a)
a.save()
a.fillStyle=this.c
z=this.a
y=z.y
x=this.d
C.b.cL(a,y-x,0,x,z.z)
if(b){y=z.y
x=this.d
C.b.cL(a,y-x,0,x,z.z)}z=z.y
y=this.d
x=$.$get$bT()
if(typeof x!=="number")return H.f(x)
w=z-y+x
x=$.$get$r()
if(typeof x!=="number")return x.ak()
v=0+x/2
for(z=this.b,y=z.length,u=0;u<z.length;z.length===y||(0,H.J)(z),++u){t=z[u]
t.b=w
t.c=v
s=t.e
r=t.d
q=t.a
r.aH(q.b)
if(typeof s!=="number")return s.N()
a.save()
r=r.aH(q.b)
if(!(s<0||s-r>0))a.globalAlpha=0.3
q.e=t.b
q.f=t.c
q.aR(a,$.$get$av())
q.bj(a)
q.bk(a)
q.bl(a)
a.restore()
v+=x*1.5}a.restore()}},
ec:{"^":"c;a,0w:b>,0A:c>,d,e",
eR:function(){var z,y
z=this.e
y=this.d.aH(this.a.b)
if(typeof z!=="number")return z.N()
return z<0||z-y>0},
gt:function(a){return this.a.r},
gu:function(a){var z=this.a
return z.r1?$.$get$r():z.x},
b_:function(a){return this.a.b_(a)},
ai:function(a){var z,y,x,w,v
if(this.eR()){z=this.a
y=z.aY(0)
x=z.e
if(typeof x!=="number")return x.N()
y.e=x-5
z=z.f
if(typeof z!=="number")return z.N()
y.f=z-5
y.r2=!0
z=this.d
z.aq(y)
if(!!y.$isbf)for(x=y.U,w=x.length,v=0;v<x.length;x.length===w||(0,H.J)(x),++v)z.aq(x[v])
return y.ai(a)}return this},
bO:function(a){},
bM:function(a){},
bN:function(a){},
$isc8:1},
az:{"^":"c;0a,b,0c,0d,e,f,r,x,y,t:z>,u:Q>,ch",
sO:function(a,b){this.e=H.l(b)},
gP:function(a){var z=this.c
return z==null?"":J.E(z)},
sP:function(a,b){var z=b==null?"":J.E(b)
this.c=z
return z},
gaj:function(a){return H.a(J.E(this.c))+H.a(this.r)},
ao:function(a,b){var z=$.e2
$.e2=z+1
this.a=z
z=b.h(0,"type")
this.e=z==null?"num":J.E(z)
z=b.h(0,"name")
this.f=z==null?"":J.E(z)
z=b.h(0,"unit")
this.r=z==null?"":J.E(z)
z=b.h(0,"default")
this.d=z
this.sP(0,z)},
aZ:function(a,b){return U.cM(b,this.M())},
M:["bX",function(){return P.cH(["type",this.e,"name",this.f,"unit",this.r,"value",this.gP(this),"default",this.d])}],
aQ:function(a){var z,y
z=$.$get$X()
if(typeof z!=="number")return z.B()
this.z=z*2
a.save()
a.font=this.b.fr
z=this.z
y=C.b.b4(a,this.gaj(this)).width
if(typeof y!=="number")return H.f(y)
this.z=z+y
a.restore()},
cJ:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p
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
if(typeof w!=="number")return w.ak()
v=this.Q
u=v/2
t=y+c+w/2-u
s=this.z
a.beginPath()
a.beginPath()
w=x+u
C.b.aD(a,w,t)
y=x+s
r=y-u
C.b.v(a,r,t)
q=t+u
C.b.K(a,y,t,y,q)
p=t+v
u=p-u
C.b.v(a,y,u)
C.b.K(a,y,p,r,p)
C.b.v(a,w,p)
C.b.K(a,x,p,x,u)
C.b.v(a,x,q)
C.b.K(a,x,t,w,t)
a.closePath()
a.fillStyle=this.ch?z.db:z.dx
a.fill()
a.fillStyle=this.ch?z.dx:z.db
C.b.cM(a,this.gaj(this),x+s/2,t+v*0.55)},
bD:function(a,b){return this.cJ(a,b,0)},
b_:function(a){var z,y,x,w,v
z=a.c
y=this.b
x=y.e
w=this.x
if(typeof x!=="number")return x.i()
w=x+w
if(z>=w){x=a.d
y=y.f
v=this.y
if(typeof y!=="number")return y.i()
v=y+v
if(x>=v)if(z<=w+this.z){z=$.$get$r()
if(typeof z!=="number")return H.f(z)
z=x<=v+z}else z=!1
else z=!1}else z=!1
return z},
bO:function(a){this.ch=!1
this.aU()
this.b.fy.R()},
ai:function(a){this.ch=!0
this.b.fy.R()
return this},
bM:function(a){},
bN:function(a){},
aU:function(){var z,y,x,w,v,u,t,s,r
z=document
y=z.createElement("div")
y.className="backdrop"
C.c.aa(y,"beforeend",'      <div class="nt-param-dialog">\n        <div class="nt-param-table">\n          <div class="nt-param-row">'+this.c6()+'</div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>',null,null)
x=H.e(C.d.a_(z,"#"+H.a(this.b.fy.f)).parentElement,"$isB")
if(x==null)return
J.aH(x,y)
w=H.e(C.d.a_(z,"#nt-param-label-"+this.a),"$isB")
v=H.e(C.d.a_(z,"#nt-param-"+this.a),"$isc3")
u=W.u
H.ae(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
t=[u]
s=[u]
r=[W.y]
new W.b3(H.x(new W.aj(C.d.T(z,".nt-param-confirm"),t),"$isa1",s,"$asa1"),!1,"click",r).ab(new U.id(this,v,y))
H.ae(u,u,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
new W.b3(H.x(new W.aj(C.d.T(z,".nt-param-cancel"),t),"$isa1",s,"$asa1"),!1,"click",r).ab(new U.ie(y))
y.classList.add("show")
if(v!=null){v.focus()
if(w!=null){z=W.T
u={func:1,ret:-1,args:[z]}
W.N(v,"change",H.h(new U.ig(w,v),u),!1,z)
W.N(v,"input",H.h(new U.ih(w,v),u),!1,z)}}},
c6:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="text" value="'+this.gaj(this)+'">\n      <span class="nt-param-unit">'+H.a(this.r)+"</span>\n    "},
$isc8:1,
q:{
e1:function(a,b){var z=$.$get$r()
if(typeof z!=="number")return z.B()
z=new U.az(a,"int","","",0,0,28,z*0.6,!1)
z.ao(a,b)
return z},
cM:function(a,b){var z=b.h(0,"type")
switch(z==null?"num":J.E(z)){case"int":z=$.$get$r()
if(typeof z!=="number")return z.B()
z=new U.hF(!1,1,a,"int","","",0,0,28,z*0.6,!1)
z.ao(a,b)
z.bY(a,b)
z.cy=1
return z
case"num":return U.cy(a,b)
case"bool":return U.cy(a,b)
case"range":z=$.$get$r()
if(typeof z!=="number")return z.B()
z=new U.iy(0,10,!1,1,a,"int","","",0,0,28,z*0.6,!1)
z.ao(a,b)
z.bY(a,b)
z.r1=U.aF(b.h(0,"min"),z.r1)
z.r2=U.aF(b.h(0,"max"),z.r2)
return z
case"select":return U.e9(a,b)
case"text":return U.e1(a,b)
default:return U.e1(a,b)}}}},
id:{"^":"j:0;a,b,c",
$1:[function(a){var z
H.e(a,"$isy")
z=this.b
if(z!=null)this.a.sP(0,z.value)
C.c.a0(this.c)
z=this.a.b.fy
z.R()
z.aF()},null,null,4,0,null,0,"call"]},
ie:{"^":"j:5;a",
$1:[function(a){H.e(a,"$isy")
return C.c.a0(this.a)},null,null,4,0,null,0,"call"]},
ig:{"^":"j:4;a,b",
$1:function(a){J.cm(this.a,this.b.value)}},
ih:{"^":"j:4;a,b",
$1:function(a){J.cm(this.a,this.b.value)}},
e0:{"^":"az;",
bY:function(a,b){this.cx=U.de(b.h(0,"random"),!1)
this.cy=U.aF(b.h(0,"step"),this.cy)},
M:["dr",function(){var z=this.bX()
z.k(0,"random",this.cx)
z.k(0,"step",this.cy)
return z}],
gP:function(a){return U.aF(this.c,0)},
sP:function(a,b){var z=U.aF(b,0)
this.c=z
return z},
gaj:function(a){var z=J.fC(this.gP(this),1)
if(C.f.eK(z,".0"))z=C.f.a6(z,0,z.length-2)
return z+H.a(this.r)},
c6:function(){return'      <div class="nt-param-name">'+H.a(this.f)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+this.a+'" type="number" step="'+H.a(this.cy)+'" value="'+H.a(this.gP(this))+'">\n        <span class="nt-param-unit">'+H.a(this.r)+"</span>\n      </div>\n    "}},
hF:{"^":"e0;cx,cy,0a,b,0c,0d,e,f,r,x,y,z,Q,ch",
gP:function(a){return U.df(this.c,0)},
sP:function(a,b){var z=U.df(b,0)
this.c=z
return z}},
iy:{"^":"e0;r1,r2,cx,cy,0a,b,0c,0d,e,f,r,x,y,z,Q,ch",
M:function(){var z=this.dr()
z.k(0,"min",this.r1)
z.k(0,"max",this.r2)
return z},
aU:function(){var z,y,x,w,v,u,t,s,r
z=document
y=z.createElement("div")
y.className="backdrop"
x=z.createElement("div")
x.className="nt-param-dialog"
w=z.createElement("div")
w.className="nt-param-table"
C.c.aa(w,"beforeend",'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.a(this.f)+':\n            <label id="nt-param-label-'+this.a+'" for="nt-param-'+this.a+'">'+H.a(U.aF(this.c,0))+'</label>\n            <span class="nt-param-unit">'+H.a(this.r)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+this.a+'" type="range" value="'+H.a(U.aF(this.c,0))+'" min="'+H.a(this.r1)+'" max="'+H.a(this.r2)+'" step="'+H.a(this.cy)+'">\n          </div>\n        </div>\n      ',null,null)
C.c.D(x,w)
v=W.y
u={func:1,ret:-1,args:[v]}
W.N(x,"click",H.h(new U.iz(),u),!1,v)
C.c.D(y,x)
W.N(y,"click",H.h(new U.iA(y),u),!1,v)
t=H.e(C.d.a_(z,"#"+H.a(this.b.fy.f)).parentElement,"$isB")
if(t!=null)J.aH(t,y)
s=H.e(C.d.a_(z,"#nt-param-label-"+this.a),"$isB")
r=H.e(C.d.a_(z,"#nt-param-"+this.a),"$isc3")
if(r!=null&&s!=null){z=W.T
v={func:1,ret:-1,args:[z]}
W.N(r,"change",H.h(new U.iB(this,r,y),v),!1,z)
W.N(r,"input",H.h(new U.iC(s,r),v),!1,z)}y.classList.add("show")}},
iz:{"^":"j:0;",
$1:function(a){H.e(a,"$isy").stopPropagation()}},
iA:{"^":"j:0;a",
$1:function(a){H.e(a,"$isy")
C.c.a0(this.a)}},
iB:{"^":"j:4;a,b,c",
$1:function(a){var z=this.a
z.c=U.aF(this.b.value,0)
C.c.a0(this.c)
z=z.b.fy
z.R()
z.aF()
a.stopPropagation()}},
iC:{"^":"j:4;a,b",
$1:function(a){J.cm(this.a,this.b.value)}},
iH:{"^":"az;cx,0a,b,0c,0d,e,f,r,x,y,z,Q,ch",
gaj:function(a){return H.a(J.E(this.c))+H.a(this.r)+" \u25be"},
aZ:function(a,b){return U.e9(b,this.M())},
M:function(){var z=this.bX()
z.k(0,"values",this.cx)
return z},
aU:function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=document
y=z.createElement("div")
y.className="backdrop"
x=z.createElement("div")
x.className="nt-param-dialog small"
w=z.createElement("div")
w.className="nt-param-table"
for(v=J.G(this.cx),u=W.y,t={func:1,ret:-1,args:[u]};v.n();){s=v.gp()
r=z.createElement("div")
r.className="nt-param-row"
q=z.createElement("div")
q.className="nt-select-option"
H.l(s)
C.c.a5(q,s)
p=this.c
if(s==null?(p==null?"":J.E(p))==null:s===(p==null?"":J.E(p)))q.classList.add("selected")
W.N(q,"click",H.h(new U.iI(this,s,y),t),!1,u)
C.c.D(r,q)
C.c.D(w,r)}C.c.D(x,w)
C.c.D(y,x)
W.N(y,"click",H.h(new U.iJ(y),t),!1,u)
o=H.e(C.d.a_(z,"#"+H.a(this.b.fy.f)).parentElement,"$isB")
if(o!=null)J.aH(o,y)
y.classList.add("show")},
q:{
e9:function(a,b){var z,y
z=$.$get$r()
if(typeof z!=="number")return z.B()
z=new U.iH([],a,"int","","",0,0,28,z*0.6,!1)
z.ao(a,b)
if(!!J.m(b.h(0,"values")).$isp&&J.dg(J.af(b.h(0,"values")),0)){y=H.a0(b.h(0,"values"))
z.cx=y
z.c=J.aG(y,0)}return z}}},
iI:{"^":"j:0;a,b,c",
$1:function(a){var z,y
H.e(a,"$isy")
z=this.a
y=this.b
z.c=y==null?"":J.E(y)
C.c.a0(this.c)
z=z.b.fy
z.R()
z.aF()
a.stopPropagation()}},
iJ:{"^":"j:0;a",
$1:function(a){H.e(a,"$isy")
C.c.a0(this.a)}},
hc:{"^":"az;0cx,0a,b,0c,0d,e,f,r,x,y,z,Q,ch",
gaj:function(a){var z=this.cx
return z!=null?z.m(0):""},
gP:function(a){return this.c},
sP:function(a,b){var z
this.c=b
z=this.cx
if(z!=null)z.aA(b)},
aZ:function(a,b){return U.cy(b,this.M())},
aU:function(){var z,y,x,w,v,u,t,s,r
z=document
y=z.createElement("div")
y.className="backdrop"
C.c.aa(y,"beforeend",'      <div class="nt-param-dialog">\n        <div class="nt-param-table">\n          <div class="nt-param-row">\n            <div class="nt-param-label">'+H.a(this.f)+':</div>\n          </div>\n          <div class="nt-param-row">\n            <div id="nt-expression-'+this.a+'" class="nt-expression-root"></div>\n          </div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>',null,null)
x=H.e(C.d.a_(z,"#"+H.a(this.b.fy.f)).parentElement,"$isB")
if(x==null)return
J.aH(x,y)
w=W.u
H.ae(w,w,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
v=[w]
u=[w]
t=[W.y]
new W.b3(H.x(new W.aj(C.d.T(z,".nt-param-confirm"),v),"$isa1",u,"$asa1"),!1,"click",t).ab(new U.hg(this,y))
H.ae(w,w,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
new W.b3(H.x(new W.aj(C.d.T(z,".nt-param-confirm"),v),"$isa1",u,"$asa1"),!1,"mousedown",t).ab(new U.hh())
H.ae(w,w,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
new W.b3(H.x(new W.aj(C.d.T(z,".nt-param-confirm"),v),"$isa1",u,"$asa1"),!1,"mouseup",t).ab(new U.hi())
H.ae(w,w,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
new W.b3(H.x(new W.aj(C.d.T(z,".nt-param-cancel"),v),"$isa1",u,"$asa1"),!1,"click",t).ab(new U.hj(y))
y.classList.add("show")
s=this.cx
r="#nt-expression-"+this.a
s.toString
s.b=C.d.a_(z,r)
s.bI()
H.ae(w,w,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
new W.b3(H.x(new W.aj(C.d.T(z,".nt-param-dialog"),v),"$isa1",u,"$asa1"),!1,"click",t).ab(new U.hk())},
q:{
cy:function(a,b){var z,y
z=$.$get$r()
if(typeof z!=="number")return z.B()
z=new U.hc(a,"int","","",0,0,28,z*0.6,!1)
z.ao(a,b)
y=new U.hb(a.fy)
y.c=new U.aZ(y,H.l(b.h(0,"type")),H.w([],[U.aZ]))
z.cx=y
y.aA(z.c)
return z}}},
hg:{"^":"j:31;a,b",
$1:[function(a){var z,y
H.e(a,"$isy")
z=W.u
y=document
H.ae(z,z,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
if(C.d.T(y,".nt-expression.empty").length>0)return!1
z=this.a
z.c=z.cx.c.M()
C.c.a0(this.b)
z=z.b.fy
z.R()
z.aF()},null,null,4,0,null,0,"call"]},
hh:{"^":"j:0;",
$1:[function(a){var z,y
H.e(a,"$isy")
z=W.u
y=document
H.ae(z,z,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
z=new W.aj(C.d.T(y,".nt-expression.empty"),[z])
z.F(z,new U.hf())},null,null,4,0,null,0,"call"]},
hf:{"^":"j:13;",
$1:function(a){return J.di(H.e(a,"$isu")).l(0,"warn")}},
hi:{"^":"j:0;",
$1:[function(a){var z,y
H.e(a,"$isy")
z=W.u
y=document
H.ae(z,z,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
z=new W.aj(C.d.T(y,".nt-expression.empty"),[z])
z.F(z,new U.he())},null,null,4,0,null,0,"call"]},
he:{"^":"j:13;",
$1:function(a){return J.di(H.e(a,"$isu")).L(0,"warn")}},
hj:{"^":"j:0;a",
$1:[function(a){H.e(a,"$isy")
C.c.a0(this.a)},null,null,4,0,null,0,"call"]},
hk:{"^":"j:0;",
$1:[function(a){var z,y
H.e(a,"$isy")
z=W.u
y=document
H.ae(z,z,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'querySelectorAll'.")
z=new W.aj(C.d.T(y,".nt-pulldown-menu"),[z])
z.F(z,new U.hd())},null,null,4,0,null,0,"call"]},
hd:{"^":"j:8;",
$1:function(a){return J.be(H.e(a,"$isu"))}},
ct:{"^":"ek;f,r,x,0t:y>,0u:z>,0Q,ch,cx,0cy,db,a,b,c,d,e",
dv:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.f
y="#"+H.a(z)
x=H.e(C.d.a_(document,y),"$isbY")
if(x==null)throw H.d("No canvas element with ID "+H.a(z)+" found.")
this.cy=H.e(C.p.bR(x,"2d"),"$isbZ")
z=x.style
y=H.a(x.width)+"px"
z.width=y
z=x.style
y=H.a(x.height)+"px"
z.height=y
z=x.width
y=$.$get$a2()
if(typeof z!=="number")return z.B()
if(typeof y!=="number")return H.f(y)
z=H.t(z*y)
this.y=z
w=x.height
if(typeof w!=="number")return w.B()
w=H.t(w*y)
this.z=w
x.width=z
x.height=w
w=this.c
z=[P.ak]
v=new U.c7(H.w([1,0,0,0,1,0,0,0,1],z))
v.sfb(H.w([1/y,0,0,0,1/y,0,0,0,1],z))
w.eX(v)
this.d=this.c.eQ()
v=this.db
v.eZ(x)
C.a.l(v.c,this)
v=H.w([],[U.ec])
w=$.$get$av()
z=$.$get$bT()
if(typeof z!=="number")return z.B()
if(typeof w!=="number")return w.i()
this.Q=new U.fH(this,v,"rgba(0,0,0, 0.2)",w+z*2)
z=this.x
if(!!J.m(z.h(0,"blocks")).$isp)for(y=J.G(H.Y(z.h(0,"blocks"),"$isn"));y.n();){u=H.e(y.gp(),"$isH")
t=U.du(this,u)
s=U.df(u.h(0,"limit"),-1)
w=this.Q
v=w.b
w=w.a
r=new U.ec(t,w,s)
t.r1=!0
C.a.l(w.a,r)
C.a.l(v,r)}if(!!J.m(z.h(0,"variables")).$isp)this.ch=H.a0(z.h(0,"variables"))
if(!!J.m(z.h(0,"expressions")).$isp)this.cx=H.a0(z.h(0,"expressions"))
if(!!J.m(z.h(0,"program")).$isH)this.eb(H.e(z.h(0,"program"),"$isH"))
this.R()
this.d4()},
f6:function(){C.a.sj(this.a,0)
C.a.sj(this.r,0)
C.a.L(this.db.c,this)},
d4:function(){if(this.eu(0))this.R()
C.T.gev(window).d2(new U.fP(this),-1)},
aF:function(){var z
this.R()
try{$.$get$d8().h(0,"NetTango").bC("_relayCallback",H.w([this.f],[P.k]))}catch(z){H.P(z)
H.la("Unable to relay program changed event to Javascript")}},
bF:function(){var z,y,x,w,v,u,t,s
z=P.cH(["chains",[]])
for(y=this.r,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){v=y[w]
if(v.gcP()){u=z.h(0,"chains")
t=[]
v.a1(t)
J.at(u,t)}}for(y=this.Q.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w){u=y[w].a
if(u.fx)if(this.aH(u.b)===0){s=z.h(0,"chains")
t=[]
u.a1(t)
J.at(s,t)}}return z},
aq:function(a){var z,y,x,w
C.a.l(this.r,a)
z=this.a
C.a.l(z,a)
for(y=a.cx,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)C.a.l(z,y[w])
for(y=a.cy,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)C.a.l(z,y[w])},
e6:function(a){var z,y,x,w
C.a.L(this.r,a)
z=this.a
C.a.L(z,a)
for(y=a.cx,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)C.a.L(z,y[w])
for(y=a.cy,x=y.length,w=0;w<y.length;y.length===x||(0,H.J)(y),++w)C.a.L(z,y[w])
this.R()},
aH:function(a){var z,y,x,w,v
for(z=this.r,y=z.length,x=0,w=0;w<y;++w){v=z[w].b
if(v==null?a==null:v===a)++x}return x},
cu:function(a){var z,y,x
z=this.cf(a)
if(z!=null){y=z.y
z.y=a
a.z=z
if(y!=null){x=a.gaz()
y.z=x
x.y=y}return!0}z=this.ce(a)
if(z!=null){z.z=a
a.y=z
return!0}return!1},
em:function(a){var z,y
if(this.Q.eU(a)){for(z=this.r,y=this.a;a!=null;){C.a.L(z,a)
C.a.L(y,a)
a=a.gb5()}return!0}return!1},
cf:function(a){var z,y,x,w,v,u,t,s,r
if(a.z==null&&a.go)for(z=this.r,y=z.length,x=0;x<y;++x){w=z[x]
if(w==null?a!=null:w!==a){v=a.e
u=w.e
t=w.r
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.f(t)
if(typeof v!=="number")return v.am()
if(v<u+t){t=a.r
if(typeof t!=="number")return H.f(t)
u=v+t>u
v=u}else v=!1
if(v){s=w.f
v=w.r1?$.$get$r():w.x
if(typeof s!=="number")return s.i()
if(typeof v!=="number")return H.f(v)
r=s+v
v=$.$get$X()
if(typeof v!=="number")return H.f(v)
u=w.y==null
if(!u){t=a.f
if(typeof t!=="number")return t.am()
t=t<r&&t>s}else t=!1
if(t)return w
else{if(u){u=a.f
if(typeof u!=="number")return u.bS()
v=u>s&&u<r+v}else v=!1
if(v)return w}}}}return},
ce:function(a){var z,y,x,w,v,u,t
if(a.y==null)for(z=this.r,y=z.length,x=0;x<y;++x){w=z[x]
if((w==null?a!=null:w!==a)&&w.z==null&&w.go){v=a.e
u=w.e
t=w.r
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.f(t)
if(typeof v!=="number")return v.am()
if(v<u+t){t=a.r
if(typeof t!=="number")return H.f(t)
u=v+t>u
v=u}else v=!1
if(v){v=w.f
u=a.f
t=a.r1?$.$get$r():a.x
if(typeof u!=="number")return u.i()
if(typeof t!=="number")return H.f(t)
if(typeof v!=="number")return v.N()
if(Math.abs(v-(u+t))<20)return w}}}return},
eu:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
this.Q.toString
for(z=this.r,y=z.length,x=!1,w=0,v=0;v<y;++v){u=z[v]
t=u.id
if(t){s=u.e
r=u.k1
q=u.k3
if(typeof r!=="number")return r.N()
if(typeof q!=="number")return H.f(q)
if(typeof s!=="number")return s.i()
u.e=s+(r-q)
q=u.f
s=u.k2
p=u.k4
if(typeof s!=="number")return s.N()
if(typeof p!=="number")return H.f(p)
if(typeof q!=="number")return q.i()
u.f=q+(s-p)
u.k3=r
u.k4=s}if(t)x=!0
t=u.f
s=u.r1?$.$get$r():u.x
if(typeof t!=="number")return t.i()
if(typeof s!=="number")return H.f(s)
w=Math.max(t+s,w)}if(w>this.z)if(!x){z=this.y
y=$.$get$a2()
if(typeof y!=="number")return H.f(y)
t=$.$get$r()
if(typeof t!=="number")return t.B()
o=C.q.cZ(z/y)
n=C.q.cZ((w+t*3)/y)
t="#"+H.a(this.f)
m=H.e(C.d.a_(document,t),"$isbY")
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
this.cy=H.e(C.p.bR(m,"2d"),"$isbZ")
this.R()}}return x},
R:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n
this.cy.save()
z=this.cy;(z&&C.b).eB(z,0,0,this.y,this.z)
y=H.w([],[U.bU])
for(z=this.r,x=z.length,w=!1,v=0;v<z.length;z.length===x||(0,H.J)(z),++v){u=z[v]
if(u.z==null&&!(u instanceof U.aL)){u.a2(0,null)
u.ax()
u.aR(this.cy,$.$get$av())}if(u.id)C.a.l(y,u)
t=this.Q
t.toString
if(!u.r1)if(!u.r2){s=u.e
r=u.r
if(typeof r!=="number")return r.B()
if(typeof s!=="number")return s.i()
t=s+r*0.75>=t.a.y-t.d}else t=!1
else t=!1
if(t)w=!0}this.Q.bD(this.cy,w)
for(x=z.length,v=0;v<z.length;z.length===x||(0,H.J)(z),++v){u=z[v]
if(u.id){q=this.cf(u)
if(q!=null){t=this.cy
t.save()
t.lineWidth=5
t.strokeStyle="cyan"
t.beginPath()
s=q.e
r=q.r
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.f(r)
p=$.$get$X()
if(typeof p!=="number")return H.f(p)
o=q.f
n=q.r1?$.$get$r():q.x
if(typeof o!=="number")return o.i()
if(typeof n!=="number")return H.f(n)
C.b.aD(t,s+r-p,o+n)
q.bw(t,q.y==null&&q.Q===0)
t.stroke()
t.restore()}else{q=this.ce(u)
if(q!=null){t=this.cy
t.save()
t.lineWidth=5
t.strokeStyle="cyan"
t.beginPath()
s=q.e
r=$.$get$X()
if(typeof s!=="number")return s.i()
if(typeof r!=="number")return H.f(r)
p=$.$get$aK()
o=q.gaB()
if(typeof p!=="number")return p.B()
C.b.aD(t,s+r+p*o,q.f)
q.bx(t,q.z==null&&q.go)
t.stroke()
t.restore()}}}u.bj(this.cy)
u.bk(this.cy)
u.dS(this.cy)
u.dT(this.cy)
u.bl(this.cy)}this.cy.restore()},
eb:function(a){var z,y,x,w
if(!!J.m(a.h(0,"chains")).$isp)for(z=J.G(H.Y(a.h(0,"chains"),"$isn"));z.n();){y=z.gp()
x=J.m(y)
if(!!x.$isp)for(x=x.gC(y);x.n();){w=x.gp()
if(!!J.m(w).$isH)this.bz(w)}}},
bz:function(a){var z,y,x,w,v,u,t,s
z=this.Q.d9(H.l(a.h(0,"action")))
if(z!=null){y=z.aY(0)
x=a.h(0,"x")
if(typeof x==="number"){x=a.h(0,"y")
x=typeof x==="number"}else x=!1
if(x){x=a.h(0,"x")
w=$.$get$cp()
y.e=H.aE(J.q(x,w))
y.f=H.aE(J.q(a.h(0,"y"),w))}this.aq(y)
if(!!y.$isbf)for(x=y.U,w=x.length,v=0;v<x.length;x.length===w||(0,H.J)(x),++v)this.aq(x[v])
this.cu(y)
for(x=this.r,w=x.length,v=0;v<x.length;x.length===w||(0,H.J)(x),++v){u=x[v]
if(u.z==null&&!(u instanceof U.aL)){u.a2(0,null)
u.ax()
u.aR(this.cy,$.$get$av())}}this.ea(y,H.a0(a.h(0,"params")),H.a0(a.h(0,"properties")))
if(!!J.m(a.h(0,"children")).$isp)for(x=J.G(H.Y(a.h(0,"children"),"$isn"));x.n();){t=x.gp()
if(!!J.m(t).$isH)this.bz(t)}if(!!J.m(a.h(0,"clauses")).$isp)for(x=J.G(H.Y(a.h(0,"clauses"),"$isn"));x.n();){s=x.gp()
w=J.m(s)
if(!!w.$isH&&!!J.m(s.h(0,"children")).$isp)for(w=J.G(H.Y(w.h(s,"children"),"$isn"));w.n();)this.bz(H.e(w.gp(),"$isH"))}}},
ea:function(a,b,c){var z,y,x,w,v,u
z=J.m(b)
if(!!z.$isp)for(z=z.gC(b),y=a.cx,x=0;z.n();){w=z.gp()
v=J.m(w)
if(!!v.$isH&&w.G("value")){if(x>=y.length)return H.b(y,x)
y[x].sP(0,v.h(w,"value"))}++x}z=J.m(c)
if(!!z.$isp)for(z=z.gC(c),y=a.cy,x=0;z.n();){u=z.gp()
v=J.m(u)
if(!!v.$isH&&u.G("value")){if(x>=y.length)return H.b(y,x)
y[x].sP(0,v.h(u,"value"))}++x}},
q:{
dy:function(a,b){var z,y,x,w,v,u
z=H.w([],[U.bU])
y=H.w([],[U.ek])
x=P.aY
w=U.c8
v=H.w([],[w])
u=[P.ak]
u=new U.ct(a,z,b,[],[],new U.iU(!1,y,new H.aQ(0,0,[x,U.ej])),v,new H.aQ(0,0,[x,w]),new U.c7(H.w([1,0,0,0,1,0,0,0,1],u)),new U.c7(H.w([1,0,0,0,1,0,0,0,1],u)),new P.bh(Date.now(),!1))
u.dv(a,b)
return u}}},
fP:{"^":"j:33;a",
$1:function(a){H.aE(a)
return this.a.d4()}},
c7:{"^":"c;a",
sfb:function(a){this.a=H.x(a,"$isp",[P.ak],"$asp")},
eQ:function(){var z,y,x,w,v,u,t,s,r,q,p
z=H.w([1,0,0,0,1,0,0,0,1],[P.ak])
y=new U.c7(z)
x=this.a
w=x.length
if(0>=w)return H.b(x,0)
v=x[0]
if(4>=w)return H.b(x,4)
u=x[4]
if(8>=w)return H.b(x,8)
u=J.q(u,x[8])
w=this.a
if(7>=w.length)return H.b(w,7)
t=J.q(v,J.aa(u,J.q(w[7],w[5])))
w=this.a
u=w.length
if(3>=u)return H.b(w,3)
v=w[3]
s=w[1]
if(8>=u)return H.b(w,8)
w=J.q(s,w[8])
s=this.a
if(7>=s.length)return H.b(s,7)
r=J.q(v,J.aa(w,J.q(s[7],s[2])))
s=this.a
if(6>=s.length)return H.b(s,6)
w=s[6]
s=J.q(s[1],s[5])
v=this.a
if(4>=v.length)return H.b(v,4)
q=t-r+J.q(w,J.aa(s,J.q(v[4],v[2])))
if(q===0)return y
p=1/q
w=x.length
if(4>=w)return H.b(x,4)
v=x[4]
if(8>=w)return H.b(x,8)
v=J.q(v,x[8])
if(7>=x.length)return H.b(x,7)
v=J.aa(v,J.q(x[7],x[5]))
if(typeof v!=="number")return H.f(v)
C.a.k(z,0,p*v)
if(6>=x.length)return H.b(x,6)
v=J.q(x[6],x[5])
w=x.length
if(3>=w)return H.b(x,3)
u=x[3]
if(8>=w)return H.b(x,8)
u=J.aa(v,J.q(u,x[8]))
if(typeof u!=="number")return H.f(u)
C.a.k(z,3,p*u)
u=x.length
if(3>=u)return H.b(x,3)
v=x[3]
if(7>=u)return H.b(x,7)
v=J.q(v,x[7])
if(6>=x.length)return H.b(x,6)
v=J.aa(v,J.q(x[6],x[4]))
if(typeof v!=="number")return H.f(v)
C.a.k(z,6,p*v)
if(7>=x.length)return H.b(x,7)
v=J.q(x[7],x[2])
u=x.length
if(1>=u)return H.b(x,1)
w=x[1]
if(8>=u)return H.b(x,8)
w=J.aa(v,J.q(w,x[8]))
if(typeof w!=="number")return H.f(w)
C.a.k(z,1,p*w)
w=x.length
if(0>=w)return H.b(x,0)
v=x[0]
if(8>=w)return H.b(x,8)
v=J.q(v,x[8])
if(6>=x.length)return H.b(x,6)
v=J.aa(v,J.q(x[6],x[2]))
if(typeof v!=="number")return H.f(v)
C.a.k(z,4,p*v)
if(6>=x.length)return H.b(x,6)
v=J.q(x[6],x[1])
w=x.length
if(0>=w)return H.b(x,0)
u=x[0]
if(7>=w)return H.b(x,7)
u=J.aa(v,J.q(u,x[7]))
if(typeof u!=="number")return H.f(u)
C.a.k(z,7,p*u)
u=x.length
if(1>=u)return H.b(x,1)
v=x[1]
if(5>=u)return H.b(x,5)
v=J.q(v,x[5])
if(4>=x.length)return H.b(x,4)
v=J.aa(v,J.q(x[4],x[2]))
if(typeof v!=="number")return H.f(v)
C.a.k(z,2,p*v)
if(3>=x.length)return H.b(x,3)
v=J.q(x[3],x[2])
u=x.length
if(0>=u)return H.b(x,0)
w=x[0]
if(5>=u)return H.b(x,5)
w=J.aa(v,J.q(w,x[5]))
if(typeof w!=="number")return H.f(w)
C.a.k(z,5,p*w)
w=x.length
if(0>=w)return H.b(x,0)
v=x[0]
if(4>=w)return H.b(x,4)
v=J.q(v,x[4])
if(3>=x.length)return H.b(x,3)
v=J.aa(v,J.q(x[3],x[1]))
if(typeof v!=="number")return H.f(v)
C.a.k(z,8,p*v)
return y},
eX:function(a){var z,y,x,w,v
z=H.w([1,0,0,0,1,0,0,0,1],[P.ak])
y=this.a
if(0>=y.length)return H.b(y,0)
y=y[0]
x=a.a
if(0>=x.length)return H.b(x,0)
x=J.q(y,x[0])
y=this.a
if(1>=y.length)return H.b(y,1)
y=y[1]
w=a.a
if(3>=w.length)return H.b(w,3)
w=J.S(x,J.q(y,w[3]))
y=this.a
if(2>=y.length)return H.b(y,2)
y=y[2]
x=a.a
if(6>=x.length)return H.b(x,6)
C.a.k(z,0,J.S(w,J.q(y,x[6])))
x=this.a
if(0>=x.length)return H.b(x,0)
x=x[0]
y=a.a
if(1>=y.length)return H.b(y,1)
y=J.q(x,y[1])
x=this.a
if(1>=x.length)return H.b(x,1)
x=x[1]
w=a.a
if(4>=w.length)return H.b(w,4)
w=J.S(y,J.q(x,w[4]))
x=this.a
if(2>=x.length)return H.b(x,2)
x=x[2]
y=a.a
if(7>=y.length)return H.b(y,7)
C.a.k(z,1,J.S(w,J.q(x,y[7])))
y=this.a
if(0>=y.length)return H.b(y,0)
y=y[0]
x=a.a
if(2>=x.length)return H.b(x,2)
x=J.q(y,x[2])
y=this.a
if(1>=y.length)return H.b(y,1)
y=y[1]
w=a.a
if(5>=w.length)return H.b(w,5)
w=J.S(x,J.q(y,w[5]))
y=this.a
if(2>=y.length)return H.b(y,2)
y=y[2]
x=a.a
if(8>=x.length)return H.b(x,8)
C.a.k(z,2,J.S(w,J.q(y,x[8])))
x=this.a
if(3>=x.length)return H.b(x,3)
x=x[3]
y=a.a
if(0>=y.length)return H.b(y,0)
y=J.q(x,y[0])
x=this.a
if(4>=x.length)return H.b(x,4)
x=x[4]
w=a.a
if(3>=w.length)return H.b(w,3)
w=J.S(y,J.q(x,w[3]))
x=this.a
if(5>=x.length)return H.b(x,5)
x=x[5]
y=a.a
if(6>=y.length)return H.b(y,6)
C.a.k(z,3,J.S(w,J.q(x,y[6])))
y=this.a
if(3>=y.length)return H.b(y,3)
y=y[3]
x=a.a
if(1>=x.length)return H.b(x,1)
x=J.q(y,x[1])
y=this.a
if(4>=y.length)return H.b(y,4)
y=y[4]
w=a.a
if(4>=w.length)return H.b(w,4)
w=J.S(x,J.q(y,w[4]))
y=this.a
if(5>=y.length)return H.b(y,5)
y=y[5]
x=a.a
if(7>=x.length)return H.b(x,7)
C.a.k(z,4,J.S(w,J.q(y,x[7])))
x=this.a
if(3>=x.length)return H.b(x,3)
x=x[3]
y=a.a
if(2>=y.length)return H.b(y,2)
y=J.q(x,y[2])
x=this.a
if(4>=x.length)return H.b(x,4)
x=x[4]
w=a.a
if(5>=w.length)return H.b(w,5)
w=J.S(y,J.q(x,w[5]))
x=this.a
if(5>=x.length)return H.b(x,5)
x=x[5]
y=a.a
if(8>=y.length)return H.b(y,8)
C.a.k(z,5,J.S(w,J.q(x,y[8])))
y=this.a
if(6>=y.length)return H.b(y,6)
y=y[6]
x=a.a
if(0>=x.length)return H.b(x,0)
x=J.q(y,x[0])
y=this.a
if(7>=y.length)return H.b(y,7)
y=y[7]
w=a.a
if(3>=w.length)return H.b(w,3)
w=J.S(x,J.q(y,w[3]))
y=this.a
if(8>=y.length)return H.b(y,8)
y=y[8]
x=a.a
if(6>=x.length)return H.b(x,6)
C.a.k(z,6,J.S(w,J.q(y,x[6])))
x=this.a
if(6>=x.length)return H.b(x,6)
x=x[6]
y=a.a
if(1>=y.length)return H.b(y,1)
y=J.q(x,y[1])
x=this.a
if(7>=x.length)return H.b(x,7)
x=x[7]
w=a.a
if(4>=w.length)return H.b(w,4)
w=J.S(y,J.q(x,w[4]))
x=this.a
if(8>=x.length)return H.b(x,8)
x=x[8]
y=a.a
if(7>=y.length)return H.b(y,7)
C.a.k(z,7,J.S(w,J.q(x,y[7])))
y=this.a
if(6>=y.length)return H.b(y,6)
y=y[6]
x=a.a
if(2>=x.length)return H.b(x,2)
x=J.q(y,x[2])
y=this.a
if(7>=y.length)return H.b(y,7)
y=y[7]
w=a.a
if(5>=w.length)return H.b(w,5)
w=J.S(x,J.q(y,w[5]))
y=this.a
if(8>=y.length)return H.b(y,8)
y=y[8]
x=a.a
if(8>=x.length)return H.b(x,8)
C.a.k(z,8,J.S(w,J.q(y,x[8])))
for(v=0;v<9;++v){y=this.a
if(v>=z.length)return H.b(z,v)
C.a.k(y,v,z[v])}},
aG:function(a){var z,y,x,w,v,u,t,s,r
z=a.c
y=this.a
x=y.length
if(0>=x)return H.b(y,0)
w=y[0]
if(typeof w!=="number")return H.f(w)
v=a.d
if(1>=x)return H.b(y,1)
u=y[1]
if(typeof u!=="number")return H.f(u)
if(2>=x)return H.b(y,2)
t=y[2]
if(typeof t!=="number")return H.f(t)
if(3>=x)return H.b(y,3)
s=y[3]
if(typeof s!=="number")return H.f(s)
if(4>=x)return H.b(y,4)
r=y[4]
if(typeof r!=="number")return H.f(r)
if(5>=x)return H.b(y,5)
y=y[5]
if(typeof y!=="number")return H.f(y)
a.c=z*w+v*u+t
a.d=z*s+v*r+y}},
iU:{"^":"c;a,0b,c,d",
b1:function(a){var z,y,x
for(z=this.c,y=0;y<z.length;++y){x=z[y].b1(a)
if(x!=null){if(y>=z.length)return H.b(z,y)
z[y].e=new P.bh(Date.now(),!1)
if(y>=z.length)return H.b(z,y)
return new U.ej(z[y],x)}else if(y>=z.length)return H.b(z,y)}return},
eZ:function(a){var z,y
this.b=a
z=W.y
y={func:1,ret:-1,args:[z]}
W.N(a,"mousedown",H.h(new U.iV(this),y),!1,z)
W.N(a,"mouseup",H.h(new U.iW(this),y),!1,z)
W.N(a,"mousemove",H.h(new U.iX(this),y),!1,z)
z=document
y=W.bG
W.N(z,"keydown",H.h(new U.iY(this),{func:1,ret:-1,args:[y]}),!1,y)
y=W.bL
W.N(z,"touchmove",H.h(new U.iZ(),{func:1,ret:-1,args:[y]}),!1,y)},
e_:function(a){var z,y
for(z=this.c.length,y=0;y<z;++y);}},
iV:{"^":"j:5;a",
$1:function(a){var z,y,x
z=this.a
y=U.cu(H.e(a,"$isy"))
x=z.b1(y)
if(x!=null){x.a.d.aG(y)
x.b=x.b.ai(y)
z.d.k(0,-1,x)}z.a=!0
return}},
iW:{"^":"j:5;a",
$1:function(a){var z,y,x,w
H.e(a,"$isy")
z=this.a
y=z.d
x=y.h(0,-1)
if(x!=null){w=U.cu(a)
x.a.d.aG(w)
x.b.bO(w)}y.k(0,-1,null)
z.a=!1
return}},
iX:{"^":"j:5;a",
$1:function(a){var z,y,x
z=this.a
y=U.cu(H.e(a,"$isy"))
x=z.d.h(0,-1)
if(x!=null){x.a.d.aG(y)
x.b.bM(y)}else{x=z.b1(y)
if(x!=null)if(z.a){x.a.d.aG(y)
x.b.bN(y)}}return}},
iY:{"^":"j:34;a",
$1:function(a){return this.a.e_(H.e(a,"$isbG"))}},
iZ:{"^":"j:35;",
$1:function(a){return H.e(a,"$isbL").preventDefault()}},
ek:{"^":"c;",
b1:function(a){var z,y,x
z=new U.dz(null,-1,0,0,!1,!1,!1,!1,!1)
z.a=a.a
z.b=a.b
z.c=a.c
z.d=a.d
z.y=a.y
this.d.aG(z)
for(y=this.a,x=y.length-1;x>=0;--x){if(x>=y.length)return H.b(y,x)
if(y[x].b_(z)){if(x>=y.length)return H.b(y,x)
return y[x]}}return}},
ej:{"^":"c;a,b"},
c8:{"^":"c;"},
dz:{"^":"c;a,b,c,d,e,f,r,x,y",q:{
cu:function(a){var z,y,x
z=new U.dz(null,-1,0,0,!1,!1,!1,!1,!1)
z.a=-1
y=J.I(a)
x=y.gcU(a).a
x.toString
z.c=x
y=y.gcU(a).b
y.toString
z.d=y
z.y=!0
return z}}}},1]]
setupProgram(dart,0,0)
J.m=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dP.prototype
return J.dO.prototype}if(typeof a=="string")return J.bn.prototype
if(a==null)return J.hM.prototype
if(typeof a=="boolean")return J.hK.prototype
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.c)return a
return J.bR(a)}
J.kN=function(a){if(typeof a=="number")return J.bm.prototype
if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.c)return a
return J.bR(a)}
J.M=function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.c)return a
return J.bR(a)}
J.bz=function(a){if(a==null)return a
if(a.constructor==Array)return J.bk.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.c)return a
return J.bR(a)}
J.bQ=function(a){if(typeof a=="number")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bM.prototype
return a}
J.kO=function(a){if(typeof a=="number")return J.bm.prototype
if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bM.prototype
return a}
J.d9=function(a){if(typeof a=="string")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.bM.prototype
return a}
J.I=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bo.prototype
return a}if(a instanceof P.c)return a
return J.bR(a)}
J.S=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.kN(a).i(a,b)}
J.as=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.m(a).V(a,b)}
J.dg=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.bQ(a).bS(a,b)}
J.fm=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.bQ(a).am(a,b)}
J.q=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kO(a).B(a,b)}
J.aa=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.bQ(a).N(a,b)}
J.aG=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.l_(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.M(a).h(a,b)}
J.fn=function(a,b,c){return J.bz(a).k(a,b,c)}
J.dh=function(a){return J.I(a).dK(a)}
J.fo=function(a,b){return J.I(a).dZ(a,b)}
J.bd=function(a,b){return J.I(a).cr(a,b)}
J.fp=function(a,b,c,d){return J.I(a).e7(a,b,c,d)}
J.ck=function(a,b,c){return J.I(a).e8(a,b,c)}
J.at=function(a,b){return J.bz(a).l(a,b)}
J.fq=function(a,b,c,d){return J.I(a).cz(a,b,c,d)}
J.aH=function(a,b){return J.I(a).D(a,b)}
J.fr=function(a,b){return J.M(a).H(a,b)}
J.cl=function(a,b,c){return J.M(a).eD(a,b,c)}
J.bB=function(a,b){return J.bz(a).I(a,b)}
J.fs=function(a){return J.I(a).gex(a)}
J.ft=function(a){return J.I(a).gcE(a)}
J.di=function(a){return J.I(a).gcF(a)}
J.aI=function(a){return J.m(a).gE(a)}
J.fu=function(a){return J.M(a).gS(a)}
J.fv=function(a){return J.M(a).gcO(a)}
J.G=function(a){return J.bz(a).gC(a)}
J.af=function(a){return J.M(a).gj(a)}
J.fw=function(a){return J.I(a).geY(a)}
J.bS=function(a,b){return J.I(a).al(a,b)}
J.dj=function(a,b,c){return J.I(a).cN(a,b,c)}
J.fx=function(a,b,c){return J.bz(a).cQ(a,b,c)}
J.fy=function(a,b){return J.m(a).bH(a,b)}
J.be=function(a){return J.bz(a).a0(a)}
J.fz=function(a,b){return J.I(a).f0(a,b)}
J.fA=function(a,b){return J.I(a).sO(a,b)}
J.dk=function(a,b,c){return J.I(a).dd(a,b,c)}
J.cm=function(a,b){return J.I(a).a5(a,b)}
J.dl=function(a){return J.bQ(a).bL(a)}
J.fB=function(a){return J.d9(a).f4(a)}
J.E=function(a){return J.m(a).m(a)}
J.fC=function(a,b){return J.bQ(a).f5(a,b)}
J.cn=function(a){return J.d9(a).d5(a)}
I.aD=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.o=W.dm.prototype
C.k=W.bW.prototype
C.p=W.bY.prototype
C.b=W.bZ.prototype
C.c=W.cv.prototype
C.C=W.h3.prototype
C.D=W.hA.prototype
C.d=W.hC.prototype
C.E=J.A.prototype
C.a=J.bk.prototype
C.q=J.dO.prototype
C.h=J.dP.prototype
C.r=J.bm.prototype
C.f=J.bn.prototype
C.L=J.bo.prototype
C.j=W.i8.prototype
C.x=J.ij.prototype
C.y=W.ix.prototype
C.z=W.iQ.prototype
C.n=J.bM.prototype
C.T=W.cR.prototype
C.A=new P.ic()
C.B=new P.jl()
C.e=new P.jY()
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
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
C.t=function(hooks) { return hooks; }

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
C.I=function() {
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
C.J=function(hooks) {
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
C.K=function(hooks) {
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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.i=new P.hT(null,null)
C.M=new P.hV(null)
C.N=new P.hW(null,null)
C.O=H.w(I.aD(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.k])
C.P=H.w(I.aD(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.k])
C.Q=H.w(I.aD([]),[P.k])
C.v=I.aD([])
C.l=H.w(I.aD(["bind","if","ref","repeat","syntax"]),[P.k])
C.m=H.w(I.aD(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.k])
C.R=H.w(I.aD([]),[P.b2])
C.w=new H.fV(0,{},C.R,[P.b2,null])
C.S=new H.cO("call")
$.al=0
$.bg=null
$.dv=null
$.d1=!1
$.fc=null
$.f6=null
$.fj=null
$.ce=null
$.ch=null
$.db=null
$.b6=null
$.bv=null
$.bw=null
$.d2=!1
$.F=C.e
$.ax=null
$.cw=null
$.dK=null
$.dJ=null
$.dH=null
$.dG=null
$.dF=null
$.dE=null
$.bV=0
$.bD=null
$.e2=0
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
I.$lazy(y,x,w)}})(["c0","$get$c0",function(){return H.da("_$dart_dartClosure")},"cB","$get$cB",function(){return H.da("_$dart_js")},"el","$get$el",function(){return H.ap(H.c9({
toString:function(){return"$receiver$"}}))},"em","$get$em",function(){return H.ap(H.c9({$method$:null,
toString:function(){return"$receiver$"}}))},"en","$get$en",function(){return H.ap(H.c9(null))},"eo","$get$eo",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"es","$get$es",function(){return H.ap(H.c9(void 0))},"et","$get$et",function(){return H.ap(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eq","$get$eq",function(){return H.ap(H.er(null))},"ep","$get$ep",function(){return H.ap(function(){try{null.$method$}catch(z){return z.message}}())},"ev","$get$ev",function(){return H.ap(H.er(void 0))},"eu","$get$eu",function(){return H.ap(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cS","$get$cS",function(){return P.j6()},"c2","$get$c2",function(){var z=new P.a5(0,C.e,[P.D])
z.eh(null)
return z},"by","$get$by",function(){return[]},"dD","$get$dD",function(){return{}},"eI","$get$eI",function(){return P.dV(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.k)},"cV","$get$cV",function(){return P.dU(P.k,P.aO)},"dC","$get$dC",function(){return P.iE("^\\S+$",!0,!1)},"d8","$get$d8",function(){return H.e(P.f4(self),"$isaR")},"cT","$get$cT",function(){return H.da("_$dart_dartObject")},"cZ","$get$cZ",function(){return function DartObject(a){this.o=a}},"a2","$get$a2",function(){return W.lg().devicePixelRatio},"av","$get$av",function(){var z=$.$get$a2()
if(typeof z!=="number")return H.f(z)
return 80*z},"r","$get$r",function(){var z=$.$get$a2()
if(typeof z!=="number")return H.f(z)
return 34*z},"X","$get$X",function(){var z=$.$get$a2()
if(typeof z!=="number")return H.f(z)
return 10*z},"aK","$get$aK",function(){var z=$.$get$a2()
if(typeof z!=="number")return H.f(z)
return 25*z},"bT","$get$bT",function(){var z=$.$get$a2()
if(typeof z!=="number")return H.f(z)
return 10*z},"cp","$get$cp",function(){return $.$get$X()},"U","$get$U",function(){return P.cG()}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=["e","canvasId","_",null,"error","stackTrace","element","attributeName","value","context","o","jsonString","index","closure","numberOfArguments","arg1","arg2","arg3","arg4","each","arg","object","time","attr","n","callback","captureThis","self","arguments","language"]
init.types=[{func:1,ret:P.D,args:[W.y]},{func:1,ret:-1},{func:1,ret:P.D},{func:1,args:[,]},{func:1,ret:P.D,args:[W.T]},{func:1,ret:-1,args:[W.y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.O,args:[W.v]},{func:1,ret:-1,args:[W.u]},{func:1,ret:-1,args:[P.c],opt:[P.a3]},{func:1,ret:P.D,args:[,,]},{func:1,ret:P.k,args:[P.k]},{func:1,ret:P.O,args:[W.ah]},{func:1,ret:P.O,args:[W.u]},{func:1,ret:P.D,args:[,]},{func:1,ret:-1,args:[P.c]},{func:1,ret:P.O,args:[P.k]},{func:1,ret:P.O,args:[W.u,P.k,P.k,W.bO]},{func:1,args:[W.T]},{func:1,ret:P.D,args:[P.W]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:P.O,args:[[P.aB,P.k]]},{func:1,ret:W.u,args:[W.v]},{func:1,ret:P.cE,args:[,]},{func:1,ret:P.D,args:[P.b2,,]},{func:1,ret:P.aR,args:[,]},{func:1,ret:P.D,args:[P.k,,]},{func:1,ret:P.D,args:[{func:1,ret:-1}]},{func:1,ret:P.k},{func:1,ret:P.k,args:[P.k,P.k]},{func:1,args:[,P.k]},{func:1,ret:P.O,args:[W.y]},{func:1,ret:[P.a5,,],args:[,]},{func:1,ret:-1,args:[P.W]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:-1,args:[W.bL]},{func:1,args:[P.k]},{func:1,ret:P.D,args:[,],opt:[,]},{func:1,ret:P.c,args:[,]},{func:1,ret:-1,args:[P.k,P.k]},{func:1,ret:-1,args:[P.k]},{func:1,ret:[P.cD,,],args:[,]},{func:1,ret:P.D,args:[P.k]}]
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
if(x==y)H.ld(d||a)
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
Isolate.aD=a.aD
Isolate.cf=a.cf
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
if(typeof dartMainRunner==="function")dartMainRunner(U.ff,[])
else U.ff([])})})()
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
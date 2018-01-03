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
function setupProgram(a,b){"use strict"
function generateAccessor(a9,b0,b1){var g=a9.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var c
if(g.length>1)c=true
else c=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a0=d&3
var a1=d>>2
var a2=f=f.substring(0,e-1)
var a3=f.indexOf(":")
if(a3>0){a2=f.substring(0,a3)
f=f.substring(a3+1)}if(a0){var a4=a0&2?"r":""
var a5=a0&1?"this":"r"
var a6="return "+a5+"."+f
var a7=b1+".prototype.g"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}if(a1){var a4=a1&2?"r,v":"v"
var a5=a1&1?"this":"r"
var a6=a5+"."+f+"=v"
var a7=b1+".prototype.s"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}}return f}function defineClass(a2,a3){var g=[]
var f="function "+a2+"("
var e=""
var d=""
for(var c=0;c<a3.length;c++){if(c!=0)f+=", "
var a0=generateAccessor(a3[c],g,a2)
d+="'"+a0+"',"
var a1="p_"+a0
f+=a1
e+="this."+a0+" = "+a1+";\n"}if(supportsDirectProtoAccess)e+="this."+"$deferredAction"+"();"
f+=") {\n"+e+"}\n"
f+=a2+".builtin$cls=\""+a2+"\";\n"
f+="$desc=$collectedClasses."+a2+"[1];\n"
f+=a2+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a2+".name=\""+a2+"\";\n"
f+=a2+"."+"$__fields__"+"=["+d+"];\n"
f+=g.join("")
return f}init.createNewIsolate=function(){return new I()}
init.classIdExtractor=function(c){return c.constructor.name}
init.classFieldsExtractor=function(c){var g=c.constructor.$__fields__
if(!g)return[]
var f=[]
f.length=g.length
for(var e=0;e<g.length;e++)f[e]=c[g[e]]
return f}
init.instanceFromClassId=function(c){return new init.allClasses[c]()}
init.initializeEmptyInstance=function(c,d,e){init.allClasses[c].apply(d,e)
return d}
var z=supportsDirectProtoAccess?function(c,d){var g=c.prototype
g.__proto__=d.prototype
g.constructor=c
g["$is"+c.name]=c
return convertToFastObject(g)}:function(){function tmp(){}return function(a0,a1){tmp.prototype=a1.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a0.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var c=e[d]
g[c]=f[c]}g["$is"+a0.name]=a0
g.constructor=a0
a0.prototype=g
return g}}()
function finishClasses(a4){var g=init.allClasses
a4.combinedConstructorFunction+="return [\n"+a4.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a4.combinedConstructorFunction)(a4.collected)
a4.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.name
var a0=a4.collected[c]
var a1=a0[0]
a0=a0[1]
g[c]=d
a1[c]=d}f=null
var a2=init.finishedClasses
function finishClass(c1){if(a2[c1])return
a2[c1]=true
var a5=a4.pending[c1]
if(a5&&a5.indexOf("+")>0){var a6=a5.split("+")
a5=a6[0]
var a7=a6[1]
finishClass(a7)
var a8=g[a7]
var a9=a8.prototype
var b0=g[c1].prototype
var b1=Object.keys(a9)
for(var b2=0;b2<b1.length;b2++){var b3=b1[b2]
if(!u.call(b0,b3))b0[b3]=a9[b3]}}if(!a5||typeof a5!="string"){var b4=g[c1]
var b5=b4.prototype
b5.constructor=b4
b5.$ise=b4
b5.$deferredAction=function(){}
return}finishClass(a5)
var b6=g[a5]
if(!b6)b6=existingIsolateProperties[a5]
var b4=g[c1]
var b5=z(b4,b6)
if(a9)b5.$deferredAction=mixinDeferredActionHelper(a9,b5)
if(Object.prototype.hasOwnProperty.call(b5,"%")){var b7=b5["%"].split(";")
if(b7[0]){var b8=b7[0].split("|")
for(var b2=0;b2<b8.length;b2++){init.interceptorsByTag[b8[b2]]=b4
init.leafTags[b8[b2]]=true}}if(b7[1]){b8=b7[1].split("|")
if(b7[2]){var b9=b7[2].split("|")
for(var b2=0;b2<b9.length;b2++){var c0=g[b9[b2]]
c0.$nativeSuperclassTag=b8[0]}}for(b2=0;b2<b8.length;b2++){init.interceptorsByTag[b8[b2]]=b4
init.leafTags[b8[b2]]=false}}b5.$deferredAction()}if(b5.$isj)b5.$deferredAction()}var a3=Object.keys(a4.pending)
for(var e=0;e<a3.length;e++)finishClass(a3[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.charCodeAt(0)
var a0
if(d!=="^"&&d!=="$reflectable"&&c!==43&&c!==42&&(a0=g[d])!=null&&a0.constructor===Array&&d!=="<>")addStubs(g,a0,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function mixinDeferredActionHelper(c,d){var g
if(d.hasOwnProperty("$deferredAction"))g=d.$deferredAction
return function foo(){if(!supportsDirectProtoAccess)return
var f=this
while(!f.hasOwnProperty("$deferredAction"))f=f.__proto__
if(g)f.$deferredAction=g
else{delete f.$deferredAction
convertToFastObject(f)}c.$deferredAction()
f.$deferredAction()}}function processClassData(b1,b2,b3){b2=convertToSlowObject(b2)
var g
var f=Object.keys(b2)
var e=false
var d=supportsDirectProtoAccess&&b1!="e"
for(var c=0;c<f.length;c++){var a0=f[c]
var a1=a0.charCodeAt(0)
if(a0==="w"){processStatics(init.statics[b1]=b2.w,b3)
delete b2.w}else if(a1===43){w[g]=a0.substring(1)
var a2=b2[a0]
if(a2>0)b2[g].$reflectable=a2}else if(a1===42){b2[g].$D=b2[a0]
var a3=b2.$methodsWithOptionalArguments
if(!a3)b2.$methodsWithOptionalArguments=a3={}
a3[a0]=g}else{var a4=b2[a0]
if(a0!=="^"&&a4!=null&&a4.constructor===Array&&a0!=="<>")if(d)e=true
else addStubs(b2,a4,a0,false,[])
else g=a0}}if(e)b2.$deferredAction=finishAddStubsHelper
var a5=b2["^"],a6,a7,a8=a5
var a9=a8.split(";")
a8=a9[1]?a9[1].split(","):[]
a7=a9[0]
a6=a7.split(":")
if(a6.length==2){a7=a6[0]
var b0=a6[1]
if(b0)b2.$S=function(b4){return function(){return init.types[b4]}}(b0)}if(a7)b3.pending[b1]=a7
b3.combinedConstructorFunction+=defineClass(b1,a8)
b3.constructorsList.push(b1)
b3.collected[b1]=[m,b2]
i.push(b1)}function processStatics(a3,a4){var g=Object.keys(a3)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a3[e]
var c=e.charCodeAt(0)
var a0
if(c===43){v[a0]=e.substring(1)
var a1=a3[e]
if(a1>0)a3[a0].$reflectable=a1
if(d&&d.length)init.typeInformation[a0]=d}else if(c===42){m[a0].$D=d
var a2=a3.$methodsWithOptionalArguments
if(!a2)a3.$methodsWithOptionalArguments=a2={}
a2[e]=a0}else if(typeof d==="function"){m[a0=e]=d
h.push(e)
init.globalFunctions[e]=d}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a0=e
processClassData(e,d,a4)}}}function addStubs(b6,b7,b8,b9,c0){var g=0,f=b7[g],e
if(typeof f=="string")e=b7[++g]
else{e=f
f=b8}var d=[b6[b8]=b6[f]=e]
e.$stubName=b8
c0.push(b8)
for(g++;g<b7.length;g++){e=b7[g]
if(typeof e!="function")break
if(!b9)e.$stubName=b7[++g]
d.push(e)
if(e.$stubName){b6[e.$stubName]=e
c0.push(e.$stubName)}}for(var c=0;c<d.length;g++,c++)d[c].$callName=b7[g]
var a0=b7[g]
b7=b7.slice(++g)
var a1=b7[0]
var a2=a1>>1
var a3=(a1&1)===1
var a4=a1===3
var a5=a1===1
var a6=b7[1]
var a7=a6>>1
var a8=(a6&1)===1
var a9=a2+a7!=d[0].length
var b0=b7[2]
if(typeof b0=="number")b7[2]=b0+b
var b1=2*a7+a2+3
if(a0){e=tearOff(d,b7,b9,b8,a9)
b6[b8].$getter=e
e.$getterStub=true
if(b9){init.globalFunctions[b8]=e
c0.push(a0)}b6[a0]=e
d.push(e)
e.$stubName=a0
e.$callName=null}var b2=b7.length>b1
if(b2){d[0].$reflectable=1
d[0].$reflectionInfo=b7
for(var c=1;c<d.length;c++){d[c].$reflectable=2
d[c].$reflectionInfo=b7}var b3=b9?init.mangledGlobalNames:init.mangledNames
var b4=b7[b1]
var b5=b4
if(a0)b3[a0]=b5
if(a4)b5+="="
else if(!a5)b5+=":"+(a2+a7)
b3[b8]=b5
d[0].$reflectionName=b5
d[0].$metadataIndex=b1+1
if(a7)b6[b4+"*"]=d[0]}}function tearOffGetter(c,d,e,f){return f?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"(x) {"+"if (c === null) c = "+"H.d4"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(c,d,e,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"() {"+"if (c === null) c = "+"H.d4"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(c,d,e,H,null)}function tearOff(c,d,e,f,a0){var g
return e?function(){if(g===void 0)g=H.d4(this,c,d,true,[],f).prototype
return g}:tearOffGetter(c,d,f,a0)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
if(!init.globalFunctions)init.globalFunctions=map()
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.Q=function(){}
var dart=[["","",,H,{"^":"",mP:{"^":"e;a"}}],["","",,J,{"^":"",
k:function(a){return void 0},
cd:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c9:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d9==null){H.lJ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(new P.cR("Return interceptor for "+H.c(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cD()]
if(v!=null)return v
v=H.lT(a)
if(v!=null)return v
if(typeof a=="function")return C.F
y=Object.getPrototypeOf(a)
if(y==null)return C.t
if(y===Object.prototype)return C.t
if(typeof w=="function"){Object.defineProperty(w,$.$get$cD(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
j:{"^":"e;",
F:function(a,b){return a===b},
gI:function(a){return H.ax(a)},
j:["ff",function(a){return H.bZ(a)}],
cQ:["fe",function(a,b){throw H.b(P.dZ(a,b.gey(),b.geF(),b.gez(),null))},null,"giA",2,0,null,8],
"%":"CanvasGradient|CanvasPattern|Client|DOMError|DOMImplementation|FileError|MediaError|NavigatorUserMediaError|PositionError|PushMessageData|SQLError|SVGAnimatedEnumeration|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedString|WebGLRenderingContext|WindowClient"},
ig:{"^":"j;",
j:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$isbF:1},
ii:{"^":"j;",
F:function(a,b){return null==b},
j:function(a){return"null"},
gI:function(a){return 0},
cQ:[function(a,b){return this.fe(a,b)},null,"giA",2,0,null,8]},
cE:{"^":"j;",
gI:function(a){return 0},
j:["fh",function(a){return String(a)}],
$isij:1},
iU:{"^":"cE;"},
bA:{"^":"cE;"},
bw:{"^":"cE;",
j:function(a){var z=a[$.$get$bM()]
return z==null?this.fh(a):J.C(z)},
$iscA:1,
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
bt:{"^":"j;$ti",
ee:function(a,b){if(!!a.immutable$list)throw H.b(new P.u(b))},
b2:function(a,b){if(!!a.fixed$length)throw H.b(new P.u(b))},
C:function(a,b){this.b2(a,"add")
a.push(b)},
ag:function(a,b){var z
this.b2(a,"removeAt")
z=a.length
if(b>=z)throw H.b(P.b9(b,null,null))
return a.splice(b,1)[0]},
A:function(a,b){var z
this.b2(a,"remove")
for(z=0;z<a.length;++z)if(J.J(a[z],b)){a.splice(z,1)
return!0}return!1},
V:function(a,b){var z
this.b2(a,"addAll")
for(z=J.E(b);z.n();)a.push(z.gt())},
J:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.b(new P.a8(a))}},
af:function(a,b){return new H.b6(a,b,[H.F(a,0),null])},
i9:function(a,b,c){var z,y,x
z=a.length
for(y=!1,x=0;x<z;++x){y=c.$2(y,a[x])
if(a.length!==z)throw H.b(new P.a8(a))}return y},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
gi8:function(a){if(a.length>0)return a[0]
throw H.b(H.cC())},
X:function(a,b,c,d,e){var z,y,x
this.ee(a,"setRange")
P.cN(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
if(e<0)H.B(P.G(e,0,null,"skipCount",null))
if(e+z>d.length)throw H.b(H.dO())
if(e<b)for(y=z-1;y>=0;--y){x=e+y
if(x<0||x>=d.length)return H.a(d,x)
a[b+y]=d[x]}else for(y=0;y<z;++y){x=e+y
if(x<0||x>=d.length)return H.a(d,x)
a[b+y]=d[x]}},
e8:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.b(new P.a8(a))}return!1},
K:function(a,b){var z
for(z=0;z<a.length;++z)if(J.J(a[z],b))return!0
return!1},
gD:function(a){return a.length===0},
gT:function(a){return a.length!==0},
j:function(a){return P.bQ(a,"[","]")},
gH:function(a){return new J.cn(a,a.length,0,null)},
gI:function(a){return H.ax(a)},
gi:function(a){return a.length},
si:function(a,b){this.b2(a,"set length")
if(b<0)throw H.b(P.G(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.M(a,b))
if(b>=a.length||b<0)throw H.b(H.M(a,b))
return a[b]},
l:function(a,b,c){this.ee(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.M(a,b))
if(b>=a.length||b<0)throw H.b(H.M(a,b))
a[b]=c},
$isS:1,
$asS:I.Q,
$ish:1,
$ash:null,
$isi:1,
$asi:null},
mO:{"^":"bt;$ti"},
cn:{"^":"e;a,b,c,d",
gt:function(){return this.d},
n:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.A(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bu:{"^":"j;",
gir:function(a){return a===0?1/a<0:a<0},
e5:function(a){return Math.abs(a)},
d3:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(new P.u(""+a+".toInt()"))},
aA:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(new P.u(""+a+".round()"))},
iN:function(a,b){var z
if(b>20)throw H.b(P.G(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gir(a))return"-"+z
return z},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){return a&0x1FFFFFFF},
v:function(a,b){if(typeof b!=="number")throw H.b(H.L(b))
return a+b},
U:function(a,b){if(typeof b!=="number")throw H.b(H.L(b))
return a-b},
ai:function(a,b){if(typeof b!=="number")throw H.b(H.L(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.b(H.L(b))
return a*b},
c3:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.e_(a,b)},
bD:function(a,b){return(a|0)===a?a/b|0:this.e_(a,b)},
e_:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(new P.u("Result of truncating division is "+H.c(z)+": "+H.c(a)+" ~/ "+b))},
f7:function(a,b){if(b<0)throw H.b(H.L(b))
return b>31?0:a<<b>>>0},
f8:function(a,b){var z
if(b<0)throw H.b(H.L(b))
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
cw:function(a,b){var z
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
fp:function(a,b){if(typeof b!=="number")throw H.b(H.L(b))
return(a^b)>>>0},
aj:function(a,b){if(typeof b!=="number")throw H.b(H.L(b))
return a<b},
bW:function(a,b){if(typeof b!=="number")throw H.b(H.L(b))
return a>b},
bU:function(a,b){if(typeof b!=="number")throw H.b(H.L(b))
return a>=b},
$isbh:1},
dQ:{"^":"bu;",$isbh:1,$isx:1},
dP:{"^":"bu;",$isbh:1},
bv:{"^":"j;",
cG:function(a,b){if(b<0)throw H.b(H.M(a,b))
if(b>=a.length)H.B(H.M(a,b))
return a.charCodeAt(b)},
aR:function(a,b){if(b>=a.length)throw H.b(H.M(a,b))
return a.charCodeAt(b)},
ex:function(a,b,c){var z,y
if(c>b.length)throw H.b(P.G(c,0,b.length,null,null))
z=a.length
if(c+z>b.length)return
for(y=0;y<z;++y)if(this.aR(b,c+y)!==this.aR(a,y))return
return new H.jr(c,b,a)},
v:function(a,b){if(typeof b!=="string")throw H.b(P.cm(b,null,null))
return a+b},
i5:function(a,b){var z,y
z=b.length
y=a.length
if(z>y)return!1
return b===this.dc(a,y-z)},
fa:function(a,b,c){var z
if(c>a.length)throw H.b(P.G(c,0,a.length,null,null))
if(typeof b==="string"){z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)}return J.fF(b,a,c)!=null},
f9:function(a,b){return this.fa(a,b,0)},
al:function(a,b,c){var z
if(typeof b!=="number"||Math.floor(b)!==b)H.B(H.L(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.B(H.L(c))
z=J.a5(b)
if(z.aj(b,0))throw H.b(P.b9(b,null,null))
if(z.bW(b,c))throw H.b(P.b9(b,null,null))
if(J.az(c,a.length))throw H.b(P.b9(c,null,null))
return a.substring(b,c)},
dc:function(a,b){return this.al(a,b,null)},
iM:function(a){return a.toLowerCase()},
eP:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aR(z,0)===133){x=J.ik(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.cG(z,w)===133?J.il(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
G:function(a,b){var z,y
if(typeof b!=="number")return H.l(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hP:function(a,b,c){if(c>a.length)throw H.b(P.G(c,0,a.length,null,null))
return H.m3(a,b,c)},
gT:function(a){return a.length!==0},
j:function(a){return a},
gI:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.M(a,b))
if(b>=a.length||b<0)throw H.b(H.M(a,b))
return a[b]},
$isS:1,
$asS:I.Q,
$isq:1,
w:{
dR:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ik:function(a,b){var z,y
for(z=a.length;b<z;){y=C.e.aR(a,b)
if(y!==32&&y!==13&&!J.dR(y))break;++b}return b},
il:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.e.cG(a,z)
if(y!==32&&y!==13&&!J.dR(y))break}return b}}}}],["","",,H,{"^":"",
eW:function(a){if(a<0)H.B(P.G(a,0,null,"count",null))
return a},
cC:function(){return new P.a4("No element")},
ie:function(){return new P.a4("Too many elements")},
dO:function(){return new P.a4("Too few elements")},
i:{"^":"R;$ti",$asi:null},
b5:{"^":"i;$ti",
gH:function(a){return new H.bT(this,this.gi(this),0,null)},
gD:function(a){return this.gi(this)===0},
d6:function(a,b){return this.fg(0,b)},
af:function(a,b){return new H.b6(this,b,[H.H(this,"b5",0),null])},
aB:function(a,b){var z,y,x
z=H.p([],[H.H(this,"b5",0)])
C.a.si(z,this.gi(this))
for(y=0;y<this.gi(this);++y){x=this.L(0,y)
if(y>=z.length)return H.a(z,y)
z[y]=x}return z},
aL:function(a){return this.aB(a,!0)}},
cO:{"^":"b5;a,b,c,$ti",
gfU:function(){var z,y
z=J.a0(this.a)
y=this.c
if(y==null||y>z)return z
return y},
ghx:function(){var z,y
z=J.a0(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y,x
z=J.a0(this.a)
y=this.b
if(y>=z)return 0
x=this.c
if(x==null||x>=z)return z-y
if(typeof x!=="number")return x.U()
return x-y},
L:function(a,b){var z,y
z=this.ghx()
if(typeof b!=="number")return H.l(b)
y=z+b
if(!(b<0)){z=this.gfU()
if(typeof z!=="number")return H.l(z)
z=y>=z}else z=!0
if(z)throw H.b(P.ai(b,this,"index",null,null))
return J.b_(this.a,y)},
iL:function(a,b){var z,y,x
if(b<0)H.B(P.G(b,0,null,"count",null))
z=this.c
y=this.b
x=y+b
if(z==null)return H.em(this.a,y,x,H.F(this,0))
else{if(z<x)return this
return H.em(this.a,y,x,H.F(this,0))}},
aB:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.a
x=J.y(y)
w=x.gi(y)
v=this.c
if(v!=null&&v<w)w=v
if(typeof w!=="number")return w.U()
u=w-z
if(u<0)u=0
t=H.p(new Array(u),this.$ti)
for(s=0;s<u;++s){r=x.L(y,z+s)
if(s>=t.length)return H.a(t,s)
t[s]=r
if(x.gi(y)<w)throw H.b(new P.a8(this))}return t},
fz:function(a,b,c,d){var z,y
z=this.b
if(z<0)H.B(P.G(z,0,null,"start",null))
y=this.c
if(y!=null){if(y<0)H.B(P.G(y,0,null,"end",null))
if(z>y)throw H.b(P.G(z,0,y,"start",null))}},
w:{
em:function(a,b,c,d){var z=new H.cO(a,b,c,[d])
z.fz(a,b,c,d)
return z}}},
bT:{"^":"e;a,b,c,d",
gt:function(){return this.d},
n:function(){var z,y,x,w
z=this.a
y=J.y(z)
x=y.gi(z)
if(this.b!==x)throw H.b(new P.a8(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.L(z,w);++this.c
return!0}},
bU:{"^":"R;a,b,$ti",
gH:function(a){return new H.iE(null,J.E(this.a),this.b,this.$ti)},
gi:function(a){return J.a0(this.a)},
gD:function(a){return J.fz(this.a)},
L:function(a,b){return this.b.$1(J.b_(this.a,b))},
$asR:function(a,b){return[b]},
w:{
bV:function(a,b,c,d){if(!!J.k(a).$isi)return new H.cv(a,b,[c,d])
return new H.bU(a,b,[c,d])}}},
cv:{"^":"bU;a,b,$ti",$isi:1,
$asi:function(a,b){return[b]}},
iE:{"^":"bR;a,b,c,$ti",
n:function(){var z=this.b
if(z.n()){this.a=this.c.$1(z.gt())
return!0}this.a=null
return!1},
gt:function(){return this.a}},
b6:{"^":"b5;a,b,$ti",
gi:function(a){return J.a0(this.a)},
L:function(a,b){return this.b.$1(J.b_(this.a,b))},
$asb5:function(a,b){return[b]},
$asi:function(a,b){return[b]},
$asR:function(a,b){return[b]}},
cS:{"^":"R;a,b,$ti",
gH:function(a){return new H.jK(J.E(this.a),this.b,this.$ti)},
af:function(a,b){return new H.bU(this,b,[H.F(this,0),null])}},
jK:{"^":"bR;a,b,$ti",
n:function(){var z,y
for(z=this.a,y=this.b;z.n();)if(y.$1(z.gt())===!0)return!0
return!1},
gt:function(){return this.a.gt()}},
en:{"^":"R;a,b,$ti",
gH:function(a){return new H.ju(J.E(this.a),this.b,this.$ti)},
w:{
jt:function(a,b,c){if(b<0)throw H.b(P.aA(b))
if(!!J.k(a).$isi)return new H.hp(a,b,[c])
return new H.en(a,b,[c])}}},
hp:{"^":"en;a,b,$ti",
gi:function(a){var z,y
z=J.a0(this.a)
y=this.b
if(z>y)return y
return z},
$isi:1,
$asi:null},
ju:{"^":"bR;a,b,$ti",
n:function(){if(--this.b>=0)return this.a.n()
this.b=-1
return!1},
gt:function(){if(this.b<0)return
return this.a.gt()}},
eh:{"^":"R;a,b,$ti",
gH:function(a){return new H.jl(J.E(this.a),this.b,this.$ti)},
w:{
jk:function(a,b,c){if(!!J.k(a).$isi)return new H.ho(a,H.eW(b),[c])
return new H.eh(a,H.eW(b),[c])}}},
ho:{"^":"eh;a,b,$ti",
gi:function(a){var z=J.a0(this.a)-this.b
if(z>=0)return z
return 0},
$isi:1,
$asi:null},
jl:{"^":"bR;a,b,$ti",
n:function(){var z,y
for(z=this.a,y=0;y<this.b;++y)z.n()
this.b=0
return z.n()},
gt:function(){return this.a.gt()}},
dK:{"^":"e;$ti",
si:function(a,b){throw H.b(new P.u("Cannot change the length of a fixed-length list"))},
C:function(a,b){throw H.b(new P.u("Cannot add to a fixed-length list"))},
A:function(a,b){throw H.b(new P.u("Cannot remove from a fixed-length list"))},
ag:function(a,b){throw H.b(new P.u("Cannot remove from a fixed-length list"))}},
cP:{"^":"e;h8:a<",
F:function(a,b){if(b==null)return!1
return b instanceof H.cP&&J.J(this.a,b.a)},
gI:function(a){var z,y
z=this._hashCode
if(z!=null)return z
y=J.a_(this.a)
if(typeof y!=="number")return H.l(y)
z=536870911&664597*y
this._hashCode=z
return z},
j:function(a){return'Symbol("'+H.c(this.a)+'")'}}}],["","",,H,{"^":"",
bE:function(a,b){var z=a.b5(b)
if(!init.globalState.d.cy)init.globalState.f.bg()
return z},
fo:function(a,b){var z,y,x,w,v,u
z={}
z.a=b
if(b==null){b=[]
z.a=b
y=b}else y=b
if(!J.k(y).$ish)throw H.b(P.aA("Arguments to main must be a List: "+H.c(y)))
init.globalState=new H.kB(0,0,1,null,null,null,null,null,null,null,null,null,a)
y=init.globalState
x=self.window==null
w=self.Worker
v=x&&!!self.postMessage
y.x=v
v=!v
if(v)w=w!=null&&$.$get$dM()!=null
else w=!0
y.y=w
y.r=x&&v
y.f=new H.k7(P.cI(null,H.bC),0)
x=P.x
y.z=new H.a1(0,null,null,null,null,null,0,[x,H.cY])
y.ch=new H.a1(0,null,null,null,null,null,0,[x,null])
if(y.x===!0){w=new H.kA()
y.Q=w
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.i7,w)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.kC)}if(init.globalState.x===!0)return
y=init.globalState.a++
w=P.a2(null,null,null,x)
v=new H.c0(0,null,!1)
u=new H.cY(y,new H.a1(0,null,null,null,null,null,0,[x,H.c0]),w,init.createNewIsolate(),v,new H.aL(H.cf()),new H.aL(H.cf()),!1,!1,[],P.a2(null,null,null,null),null,null,!1,!0,P.a2(null,null,null,null))
w.C(0,0)
u.dl(0,v)
init.globalState.e=u
init.globalState.d=u
if(H.aI(a,{func:1,args:[,]}))u.b5(new H.m1(z,a))
else if(H.aI(a,{func:1,args:[,,]}))u.b5(new H.m2(z,a))
else u.b5(a)
init.globalState.f.bg()},
ib:function(){var z=init.currentScript
if(z!=null)return String(z.src)
if(init.globalState.x===!0)return H.ic()
return},
ic:function(){var z,y
z=new Error().stack
if(z==null){z=function(){try{throw new Error()}catch(x){return x.stack}}()
if(z==null)throw H.b(new P.u("No stack trace"))}y=z.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(y!=null)return y[1]
y=z.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(y!=null)return y[1]
throw H.b(new P.u('Cannot extract URI from "'+z+'"'))},
i7:[function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new H.c3(!0,[]).at(b.data)
y=J.y(z)
switch(y.h(z,"command")){case"start":init.globalState.b=y.h(z,"id")
x=y.h(z,"functionName")
w=x==null?init.globalState.cx:init.globalFunctions[x]()
v=y.h(z,"args")
u=new H.c3(!0,[]).at(y.h(z,"msg"))
t=y.h(z,"isSpawnUri")
s=y.h(z,"startPaused")
r=new H.c3(!0,[]).at(y.h(z,"replyTo"))
y=init.globalState.a++
q=P.x
p=P.a2(null,null,null,q)
o=new H.c0(0,null,!1)
n=new H.cY(y,new H.a1(0,null,null,null,null,null,0,[q,H.c0]),p,init.createNewIsolate(),o,new H.aL(H.cf()),new H.aL(H.cf()),!1,!1,[],P.a2(null,null,null,null),null,null,!1,!0,P.a2(null,null,null,null))
p.C(0,0)
n.dl(0,o)
init.globalState.f.a.a9(new H.bC(n,new H.i8(w,v,u,t,s,r),"worker-start"))
init.globalState.d=n
init.globalState.f.bg()
break
case"spawn-worker":break
case"message":if(y.h(z,"port")!=null)J.b0(y.h(z,"port"),y.h(z,"msg"))
init.globalState.f.bg()
break
case"close":init.globalState.ch.A(0,$.$get$dN().h(0,a))
a.terminate()
init.globalState.f.bg()
break
case"log":H.i6(y.h(z,"msg"))
break
case"print":if(init.globalState.x===!0){y=init.globalState.Q
q=P.au(["command","print","msg",z])
q=new H.aR(!0,P.bb(null,P.x)).a4(q)
y.toString
self.postMessage(q)}else P.ce(y.h(z,"msg"))
break
case"error":throw H.b(y.h(z,"msg"))}},null,null,4,0,null,19,0],
i6:function(a){var z,y,x,w
if(init.globalState.x===!0){y=init.globalState.Q
x=P.au(["command","log","msg",a])
x=new H.aR(!0,P.bb(null,P.x)).a4(x)
y.toString
self.postMessage(x)}else try{self.console.log(a)}catch(w){H.D(w)
z=H.Z(w)
y=P.bO(z)
throw H.b(y)}},
i9:function(a,b,c,d,e,f){var z,y,x,w
z=init.globalState.d
y=z.a
$.e9=$.e9+("_"+y)
$.ea=$.ea+("_"+y)
y=z.e
x=init.globalState.d.a
w=z.f
J.b0(f,["spawned",new H.c5(y,x),w,z.r])
x=new H.ia(a,b,c,d,z)
if(e===!0){z.e7(w,w)
init.globalState.f.a.a9(new H.bC(z,x,"start isolate"))}else x.$0()},
la:function(a){return new H.c3(!0,[]).at(new H.aR(!1,P.bb(null,P.x)).a4(a))},
m1:{"^":"f:2;a,b",
$0:function(){this.b.$1(this.a.a)}},
m2:{"^":"f:2;a,b",
$0:function(){this.b.$2(this.a.a,null)}},
kB:{"^":"e;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",w:{
kC:[function(a){var z=P.au(["command","print","msg",a])
return new H.aR(!0,P.bb(null,P.x)).a4(z)},null,null,2,0,null,9]}},
cY:{"^":"e;a,b,c,iu:d<,hQ:e<,f,r,il:x?,ba:y<,hW:z<,Q,ch,cx,cy,db,dx",
e7:function(a,b){if(!this.f.F(0,a))return
if(this.Q.C(0,b)&&!this.y)this.y=!0
this.cz()},
iG:function(a){var z,y,x,w,v,u
if(!this.y)return
z=this.Q
z.A(0,a)
if(z.a===0){for(z=this.z;y=z.length,y!==0;){if(0>=y)return H.a(z,-1)
x=z.pop()
y=init.globalState.f.a
w=y.b
v=y.a
u=v.length
w=(w-1&u-1)>>>0
y.b=w
if(w<0||w>=u)return H.a(v,w)
v[w]=x
if(w===y.c)y.dJ();++y.d}this.y=!1}this.cz()},
hC:function(a,b){var z,y,x
if(this.ch==null)this.ch=[]
for(z=J.k(a),y=0;x=this.ch,y<x.length;y+=2)if(z.F(a,x[y])){z=this.ch
x=y+1
if(x>=z.length)return H.a(z,x)
z[x]=b
return}x.push(a)
this.ch.push(b)},
iF:function(a){var z,y,x
if(this.ch==null)return
for(z=J.k(a),y=0;x=this.ch,y<x.length;y+=2)if(z.F(a,x[y])){z=this.ch
x=y+2
z.toString
if(typeof z!=="object"||z===null||!!z.fixed$length)H.B(new P.u("removeRange"))
P.cN(y,x,z.length,null,null,null)
z.splice(y,x-y)
return}},
f6:function(a,b){if(!this.r.F(0,a))return
this.db=b},
ie:function(a,b,c){var z=J.k(b)
if(!z.F(b,0))z=z.F(b,1)&&!this.cy
else z=!0
if(z){J.b0(a,c)
return}z=this.cx
if(z==null){z=P.cI(null,null)
this.cx=z}z.a9(new H.kq(a,c))},
ic:function(a,b){var z
if(!this.r.F(0,a))return
z=J.k(b)
if(!z.F(b,0))z=z.F(b,1)&&!this.cy
else z=!0
if(z){this.cK()
return}z=this.cx
if(z==null){z=P.cI(null,null)
this.cx=z}z.a9(this.giv())},
ig:function(a,b){var z,y,x
z=this.dx
if(z.a===0){if(this.db===!0&&this===init.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ce(a)
if(b!=null)P.ce(b)}return}y=new Array(2)
y.fixed$length=Array
y[0]=J.C(a)
y[1]=b==null?null:J.C(b)
for(x=new P.bD(z,z.r,null,null),x.c=z.e;x.n();)J.b0(x.d,y)},
b5:function(a){var z,y,x,w,v,u,t
z=init.globalState.d
init.globalState.d=this
$=this.d
y=null
x=this.cy
this.cy=!0
try{y=a.$0()}catch(u){w=H.D(u)
v=H.Z(u)
this.ig(w,v)
if(this.db===!0){this.cK()
if(this===init.globalState.e)throw u}}finally{this.cy=x
init.globalState.d=z
if(z!=null)$=z.giu()
if(this.cx!=null)for(;t=this.cx,!t.gD(t);)this.cx.eI().$0()}return y},
ia:function(a){var z=J.y(a)
switch(z.h(a,0)){case"pause":this.e7(z.h(a,1),z.h(a,2))
break
case"resume":this.iG(z.h(a,1))
break
case"add-ondone":this.hC(z.h(a,1),z.h(a,2))
break
case"remove-ondone":this.iF(z.h(a,1))
break
case"set-errors-fatal":this.f6(z.h(a,1),z.h(a,2))
break
case"ping":this.ie(z.h(a,1),z.h(a,2),z.h(a,3))
break
case"kill":this.ic(z.h(a,1),z.h(a,2))
break
case"getErrors":this.dx.C(0,z.h(a,1))
break
case"stopErrors":this.dx.A(0,z.h(a,1))
break}},
cM:function(a){return this.b.h(0,a)},
dl:function(a,b){var z=this.b
if(z.M(a))throw H.b(P.bO("Registry: ports must be registered only once."))
z.l(0,a,b)},
cz:function(){var z=this.b
if(z.gi(z)-this.c.a>0||this.y||!this.x)init.globalState.z.l(0,this.a,this)
else this.cK()},
cK:[function(){var z,y,x,w,v
z=this.cx
if(z!=null)z.a7(0)
for(z=this.b,y=z.gd5(z),y=y.gH(y);y.n();)y.gt().fN()
z.a7(0)
this.c.a7(0)
init.globalState.z.A(0,this.a)
this.dx.a7(0)
if(this.ch!=null){for(x=0;z=this.ch,y=z.length,x<y;x+=2){w=z[x]
v=x+1
if(v>=y)return H.a(z,v)
J.b0(w,z[v])}this.ch=null}},"$0","giv",0,0,1]},
kq:{"^":"f:1;a,b",
$0:[function(){J.b0(this.a,this.b)},null,null,0,0,null,"call"]},
k7:{"^":"e;a,b",
hX:function(){var z=this.a
if(z.b===z.c)return
return z.eI()},
eK:function(){var z,y,x
z=this.hX()
if(z==null){if(init.globalState.e!=null)if(init.globalState.z.M(init.globalState.e.a))if(init.globalState.r===!0){y=init.globalState.e.b
y=y.gD(y)}else y=!1
else y=!1
else y=!1
if(y)H.B(P.bO("Program exited with open ReceivePorts."))
y=init.globalState
if(y.x===!0){x=y.z
x=x.gD(x)&&y.f.b===0}else x=!1
if(x){y=y.Q
x=P.au(["command","close"])
x=new H.aR(!0,new P.eR(0,null,null,null,null,null,0,[null,P.x])).a4(x)
y.toString
self.postMessage(x)}return!1}z.iD()
return!0},
dW:function(){if(self.window!=null)new H.k8(this).$0()
else for(;this.eK(););},
bg:function(){var z,y,x,w,v
if(init.globalState.x!==!0)this.dW()
else try{this.dW()}catch(x){z=H.D(x)
y=H.Z(x)
w=init.globalState.Q
v=P.au(["command","error","msg",H.c(z)+"\n"+H.c(y)])
v=new H.aR(!0,P.bb(null,P.x)).a4(v)
w.toString
self.postMessage(v)}}},
k8:{"^":"f:1;a",
$0:function(){if(!this.a.eK())return
P.jz(C.o,this)}},
bC:{"^":"e;a,b,c",
iD:function(){var z=this.a
if(z.gba()){z.ghW().push(this)
return}z.b5(this.b)}},
kA:{"^":"e;"},
i8:{"^":"f:2;a,b,c,d,e,f",
$0:function(){H.i9(this.a,this.b,this.c,this.d,this.e,this.f)}},
ia:{"^":"f:1;a,b,c,d,e",
$0:function(){var z,y
z=this.e
z.sil(!0)
if(this.d!==!0)this.a.$1(this.c)
else{y=this.a
if(H.aI(y,{func:1,args:[,,]}))y.$2(this.b,this.c)
else if(H.aI(y,{func:1,args:[,]}))y.$1(this.b)
else y.$0()}z.cz()}},
eG:{"^":"e;"},
c5:{"^":"eG;b,a",
bY:function(a,b){var z,y,x
z=init.globalState.z.h(0,this.a)
if(z==null)return
y=this.b
if(y.gdO())return
x=H.la(b)
if(z.ghQ()===y){z.ia(x)
return}init.globalState.f.a.a9(new H.bC(z,new H.kK(this,x),"receive"))},
F:function(a,b){if(b==null)return!1
return b instanceof H.c5&&J.J(this.b,b.b)},
gI:function(a){return this.b.gcl()}},
kK:{"^":"f:2;a,b",
$0:function(){var z=this.a.b
if(!z.gdO())z.fG(this.b)}},
cZ:{"^":"eG;b,c,a",
bY:function(a,b){var z,y,x
z=P.au(["command","message","port",this,"msg",b])
y=new H.aR(!0,P.bb(null,P.x)).a4(z)
if(init.globalState.x===!0){init.globalState.Q.toString
self.postMessage(y)}else{x=init.globalState.ch.h(0,this.b)
if(x!=null)x.postMessage(y)}},
F:function(a,b){if(b==null)return!1
return b instanceof H.cZ&&J.J(this.b,b.b)&&J.J(this.a,b.a)&&J.J(this.c,b.c)},
gI:function(a){var z,y,x
z=J.de(this.b,16)
y=J.de(this.a,8)
x=this.c
if(typeof x!=="number")return H.l(x)
return(z^y^x)>>>0}},
c0:{"^":"e;cl:a<,b,dO:c<",
fN:function(){this.c=!0
this.b=null},
fG:function(a){if(this.c)return
this.b.$1(a)},
$isja:1},
jv:{"^":"e;a,b,c",
aI:function(){if(self.setTimeout!=null){if(this.b)throw H.b(new P.u("Timer in event loop cannot be canceled."))
var z=this.c
if(z==null)return;--init.globalState.f.b
self.clearTimeout(z)
this.c=null}else throw H.b(new P.u("Canceling a timer."))},
fA:function(a,b){var z,y
if(a===0)z=self.setTimeout==null||init.globalState.x===!0
else z=!1
if(z){this.c=1
z=init.globalState.f
y=init.globalState.d
z.a.a9(new H.bC(y,new H.jx(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++init.globalState.f.b
this.c=self.setTimeout(H.aW(new H.jy(this,b),0),a)}else throw H.b(new P.u("Timer greater than 0."))},
w:{
jw:function(a,b){var z=new H.jv(!0,!1,null)
z.fA(a,b)
return z}}},
jx:{"^":"f:1;a,b",
$0:function(){this.a.c=null
this.b.$0()}},
jy:{"^":"f:1;a,b",
$0:[function(){this.a.c=null;--init.globalState.f.b
this.b.$0()},null,null,0,0,null,"call"]},
aL:{"^":"e;cl:a<",
gI:function(a){var z,y,x
z=this.a
y=J.a5(z)
x=y.f8(z,0)
y=y.c3(z,4294967296)
if(typeof y!=="number")return H.l(y)
z=x^y
z=(~z>>>0)+(z<<15>>>0)&4294967295
z=((z^z>>>12)>>>0)*5&4294967295
z=((z^z>>>4)>>>0)*2057&4294967295
return(z^z>>>16)>>>0},
F:function(a,b){var z,y
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aL){z=this.a
y=b.a
return z==null?y==null:z===y}return!1}},
aR:{"^":"e;a,b",
a4:[function(a){var z,y,x,w,v
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=this.b
y=z.h(0,a)
if(y!=null)return["ref",y]
z.l(0,a,z.gi(z))
z=J.k(a)
if(!!z.$isdU)return["buffer",a]
if(!!z.$isbY)return["typed",a]
if(!!z.$isS)return this.f1(a)
if(!!z.$isi5){x=this.geZ()
w=a.gab()
w=H.bV(w,x,H.H(w,"R",0),null)
w=P.av(w,!0,H.H(w,"R",0))
z=z.gd5(a)
z=H.bV(z,x,H.H(z,"R",0),null)
return["map",w,P.av(z,!0,H.H(z,"R",0))]}if(!!z.$isij)return this.f2(a)
if(!!z.$isj)this.eQ(a)
if(!!z.$isja)this.bm(a,"RawReceivePorts can't be transmitted:")
if(!!z.$isc5)return this.f3(a)
if(!!z.$iscZ)return this.f4(a)
if(!!z.$isf){v=a.$static_name
if(v==null)this.bm(a,"Closures can't be transmitted:")
return["function",v]}if(!!z.$isaL)return["capability",a.a]
if(!(a instanceof P.e))this.eQ(a)
return["dart",init.classIdExtractor(a),this.f0(init.classFieldsExtractor(a))]},"$1","geZ",2,0,0,10],
bm:function(a,b){throw H.b(new P.u((b==null?"Can't transmit:":b)+" "+H.c(a)))},
eQ:function(a){return this.bm(a,null)},
f1:function(a){var z=this.f_(a)
if(!!a.fixed$length)return["fixed",z]
if(!a.fixed$length)return["extendable",z]
if(!a.immutable$list)return["mutable",z]
if(a.constructor===Array)return["const",z]
this.bm(a,"Can't serialize indexable: ")},
f_:function(a){var z,y,x
z=[]
C.a.si(z,a.length)
for(y=0;y<a.length;++y){x=this.a4(a[y])
if(y>=z.length)return H.a(z,y)
z[y]=x}return z},
f0:function(a){var z
for(z=0;z<a.length;++z)C.a.l(a,z,this.a4(a[z]))
return a},
f2:function(a){var z,y,x,w
if(!!a.constructor&&a.constructor!==Object)this.bm(a,"Only plain JS Objects are supported:")
z=Object.keys(a)
y=[]
C.a.si(y,z.length)
for(x=0;x<z.length;++x){w=this.a4(a[z[x]])
if(x>=y.length)return H.a(y,x)
y[x]=w}return["js-object",z,y]},
f4:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
f3:function(a){if(this.a)return["sendport",init.globalState.b,a.a,a.b.gcl()]
return["raw sendport",a]}},
c3:{"^":"e;a,b",
at:[function(a){var z,y,x,w,v,u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.b(P.aA("Bad serialized message: "+H.c(a)))
switch(C.a.gi8(a)){case"ref":if(1>=a.length)return H.a(a,1)
z=a[1]
y=this.b
if(z>>>0!==z||z>=y.length)return H.a(y,z)
return y[z]
case"buffer":if(1>=a.length)return H.a(a,1)
x=a[1]
this.b.push(x)
return x
case"typed":if(1>=a.length)return H.a(a,1)
x=a[1]
this.b.push(x)
return x
case"fixed":if(1>=a.length)return H.a(a,1)
x=a[1]
this.b.push(x)
y=H.p(this.b4(x),[null])
y.fixed$length=Array
return y
case"extendable":if(1>=a.length)return H.a(a,1)
x=a[1]
this.b.push(x)
return H.p(this.b4(x),[null])
case"mutable":if(1>=a.length)return H.a(a,1)
x=a[1]
this.b.push(x)
return this.b4(x)
case"const":if(1>=a.length)return H.a(a,1)
x=a[1]
this.b.push(x)
y=H.p(this.b4(x),[null])
y.fixed$length=Array
return y
case"map":return this.i_(a)
case"sendport":return this.i0(a)
case"raw sendport":if(1>=a.length)return H.a(a,1)
x=a[1]
this.b.push(x)
return x
case"js-object":return this.hZ(a)
case"function":if(1>=a.length)return H.a(a,1)
x=init.globalFunctions[a[1]]()
this.b.push(x)
return x
case"capability":if(1>=a.length)return H.a(a,1)
return new H.aL(a[1])
case"dart":y=a.length
if(1>=y)return H.a(a,1)
w=a[1]
if(2>=y)return H.a(a,2)
v=a[2]
u=init.instanceFromClassId(w)
this.b.push(u)
this.b4(v)
return init.initializeEmptyInstance(w,u,v)
default:throw H.b("couldn't deserialize: "+H.c(a))}},"$1","ghY",2,0,0,10],
b4:function(a){var z,y,x
z=J.y(a)
y=0
while(!0){x=z.gi(a)
if(typeof x!=="number")return H.l(x)
if(!(y<x))break
z.l(a,y,this.at(z.h(a,y)));++y}return a},
i_:function(a){var z,y,x,w,v,u
z=a.length
if(1>=z)return H.a(a,1)
y=a[1]
if(2>=z)return H.a(a,2)
x=a[2]
w=P.bS()
this.b.push(w)
y=J.dl(y,this.ghY()).aL(0)
for(z=J.y(y),v=J.y(x),u=0;u<z.gi(y);++u)w.l(0,z.h(y,u),this.at(v.h(x,u)))
return w},
i0:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.a(a,1)
y=a[1]
if(2>=z)return H.a(a,2)
x=a[2]
if(3>=z)return H.a(a,3)
w=a[3]
if(J.J(y,init.globalState.b)){v=init.globalState.z.h(0,x)
if(v==null)return
u=v.cM(w)
if(u==null)return
t=new H.c5(u,x)}else t=new H.cZ(y,w,x)
this.b.push(t)
return t},
hZ:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.a(a,1)
y=a[1]
if(2>=z)return H.a(a,2)
x=a[2]
w={}
this.b.push(w)
z=J.y(y)
v=J.y(x)
u=0
while(!0){t=z.gi(y)
if(typeof t!=="number")return H.l(t)
if(!(u<t))break
w[z.h(y,u)]=this.at(v.h(x,u));++u}return w}}}],["","",,H,{"^":"",
dx:function(){throw H.b(new P.u("Cannot modify unmodifiable Map"))},
lC:function(a){return init.types[a]},
fh:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.k(a).$isY},
c:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.C(a)
if(typeof z!=="string")throw H.b(H.L(a))
return z},
ax:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
e7:function(a,b){if(b==null)throw H.b(new P.bP(a,null,null))
return b.$1(a)},
eb:function(a,b,c){var z,y
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return H.e7(a,c)
if(3>=z.length)return H.a(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return H.e7(a,c)},
e6:function(a,b){return b.$1(a)},
j4:function(a,b){var z,y
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.e6(a,b)
z=parseFloat(a)
if(isNaN(z)){y=C.e.eP(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return H.e6(a,b)}return z},
c_:function(a){var z,y,x,w,v,u,t,s
z=J.k(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.k(a).$isbA){v=C.q(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.e.aR(w,0)===36)w=C.e.dc(w,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+H.fi(H.ca(a),0,null),init.mangledGlobalNames)},
bZ:function(a){return"Instance of '"+H.c_(a)+"'"},
a3:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.f.cw(z,10))>>>0,56320|z&1023)}throw H.b(P.G(a,0,1114111,null,null))},
X:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
j3:function(a){return a.b?H.X(a).getUTCFullYear()+0:H.X(a).getFullYear()+0},
j1:function(a){return a.b?H.X(a).getUTCMonth()+1:H.X(a).getMonth()+1},
iY:function(a){return a.b?H.X(a).getUTCDate()+0:H.X(a).getDate()+0},
iZ:function(a){return a.b?H.X(a).getUTCHours()+0:H.X(a).getHours()+0},
j0:function(a){return a.b?H.X(a).getUTCMinutes()+0:H.X(a).getMinutes()+0},
j2:function(a){return a.b?H.X(a).getUTCSeconds()+0:H.X(a).getSeconds()+0},
j_:function(a){return a.b?H.X(a).getUTCMilliseconds()+0:H.X(a).getMilliseconds()+0},
cM:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.b(H.L(a))
return a[b]},
ec:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.b(H.L(a))
a[b]=c},
e8:function(a,b,c){var z,y,x
z={}
z.a=0
y=[]
x=[]
z.a=b.length
C.a.V(y,b)
z.b=""
if(c!=null&&!c.gD(c))c.J(0,new H.iX(z,y,x))
return J.fG(a,new H.ih(C.L,""+"$"+z.a+z.b,0,y,x,null))},
iW:function(a,b){var z,y
z=b instanceof Array?b:P.av(b,!0,null)
y=z.length
if(y===0){if(!!a.$0)return a.$0()}else if(y===1){if(!!a.$1)return a.$1(z[0])}else if(y===2){if(!!a.$2)return a.$2(z[0],z[1])}else if(y===3){if(!!a.$3)return a.$3(z[0],z[1],z[2])}else if(y===4){if(!!a.$4)return a.$4(z[0],z[1],z[2],z[3])}else if(y===5)if(!!a.$5)return a.$5(z[0],z[1],z[2],z[3],z[4])
return H.iV(a,z)},
iV:function(a,b){var z,y,x,w,v,u
z=b.length
y=a[""+"$"+z]
if(y==null){y=J.k(a)["call*"]
if(y==null)return H.e8(a,b,null)
x=H.ee(y)
w=x.d
v=w+x.e
if(x.f||w>z||v<z)return H.e8(a,b,null)
b=P.av(b,!0,null)
for(u=z;u<v;++u)C.a.C(b,init.metadata[x.hV(0,u)])}return y.apply(a,b)},
l:function(a){throw H.b(H.L(a))},
a:function(a,b){if(a==null)J.a0(a)
throw H.b(H.M(a,b))},
M:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.as(!0,b,"index",null)
z=J.a0(a)
if(!(b<0)){if(typeof z!=="number")return H.l(z)
y=b>=z}else y=!0
if(y)return P.ai(b,a,"index",null,z)
return P.b9(b,"index",null)},
L:function(a){return new P.as(!0,a,null,null)},
bG:function(a){if(typeof a!=="number")throw H.b(H.L(a))
return a},
fe:function(a){if(typeof a!=="string")throw H.b(H.L(a))
return a},
b:function(a){var z
if(a==null)a=new P.e2()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fq})
z.name=""}else z.toString=H.fq
return z},
fq:[function(){return J.C(this.dartException)},null,null,0,0,null],
B:function(a){throw H.b(a)},
A:function(a){throw H.b(new P.a8(a))},
D:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.m5(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.f.cw(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cF(H.c(y)+" (Error "+w+")",null))
case 445:case 5007:v=H.c(y)+" (Error "+w+")"
return z.$1(new H.e1(v,null))}}if(a instanceof TypeError){u=$.$get$et()
t=$.$get$eu()
s=$.$get$ev()
r=$.$get$ew()
q=$.$get$eA()
p=$.$get$eB()
o=$.$get$ey()
$.$get$ex()
n=$.$get$eD()
m=$.$get$eC()
l=u.a8(y)
if(l!=null)return z.$1(H.cF(y,l))
else{l=t.a8(y)
if(l!=null){l.method="call"
return z.$1(H.cF(y,l))}else{l=s.a8(y)
if(l==null){l=r.a8(y)
if(l==null){l=q.a8(y)
if(l==null){l=p.a8(y)
if(l==null){l=o.a8(y)
if(l==null){l=r.a8(y)
if(l==null){l=n.a8(y)
if(l==null){l=m.a8(y)
v=l!=null}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0
if(v)return z.$1(new H.e1(y,l==null?null:l.method))}}return z.$1(new H.jJ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ej()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.as(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ej()
return a},
Z:function(a){var z
if(a==null)return new H.eS(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eS(a,null)},
lZ:function(a){if(a==null||typeof a!='object')return J.a_(a)
else return H.ax(a)},
lB:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.l(0,a[y],a[x])}return b},
lL:[function(a,b,c,d,e,f,g){switch(c){case 0:return H.bE(b,new H.lM(a))
case 1:return H.bE(b,new H.lN(a,d))
case 2:return H.bE(b,new H.lO(a,d,e))
case 3:return H.bE(b,new H.lP(a,d,e,f))
case 4:return H.bE(b,new H.lQ(a,d,e,f,g))}throw H.b(P.bO("Unsupported number of arguments for wrapped closure"))},null,null,14,0,null,33,21,31,15,16,17,20],
aW:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,init.globalState.d,H.lL)
a.$identity=z
return z},
h3:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.k(c).$ish){z.$reflectionInfo=c
x=H.ee(z).r}else x=c
w=d?Object.create(new H.jm().constructor.prototype):Object.create(new H.cr(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.ag
$.ag=J.d(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.dv(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.lC,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.dt:H.cs
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.dv(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
h0:function(a,b,c,d){var z=H.cs
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dv:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h2(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h0(y,!w,z,b)
if(y===0){w=$.ag
$.ag=J.d(w,1)
u="self"+H.c(w)
w="return function(){var "+u+" = this."
v=$.b1
if(v==null){v=H.bL("self")
$.b1=v}return new Function(w+H.c(v)+";return "+u+"."+H.c(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ag
$.ag=J.d(w,1)
t+=H.c(w)
w="return function("+t+"){return this."
v=$.b1
if(v==null){v=H.bL("self")
$.b1=v}return new Function(w+H.c(v)+"."+H.c(z)+"("+t+");}")()},
h1:function(a,b,c,d){var z,y
z=H.cs
y=H.dt
switch(b?-1:a){case 0:throw H.b(new H.je("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h2:function(a,b){var z,y,x,w,v,u,t,s
z=H.fZ()
y=$.ds
if(y==null){y=H.bL("receiver")
$.ds=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h1(w,!u,x,b)
if(w===1){y="return function(){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+");"
u=$.ag
$.ag=J.d(u,1)
return new Function(y+H.c(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.c(z)+"."+H.c(x)+"(this."+H.c(y)+", "+s+");"
u=$.ag
$.ag=J.d(u,1)
return new Function(y+H.c(u)+"}")()},
d4:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.k(c).$ish){c.fixed$length=Array
z=c}else z=c
return H.h3(a,b,z,!!d,e,f)},
lY:function(a){if(typeof a==="number"||a==null)return a
throw H.b(H.du(H.c_(a),"num"))},
m0:function(a,b){var z=J.y(b)
throw H.b(H.du(H.c_(a),z.al(b,3,z.gi(b))))},
cb:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.k(a)[b]
else z=!0
if(z)return a
H.m0(a,b)},
lz:function(a){var z=J.k(a)
return"$S" in z?z.$S():null},
aI:function(a,b){var z
if(a==null)return!1
z=H.lz(a)
return z==null?!1:H.fg(z,b)},
m4:function(a){throw H.b(new P.he(a))},
cf:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
d7:function(a){return init.getIsolateTag(a)},
p:function(a,b){a.$ti=b
return a},
ca:function(a){if(a==null)return
return a.$ti},
ff:function(a,b){return H.db(a["$as"+H.c(b)],H.ca(a))},
H:function(a,b,c){var z=H.ff(a,b)
return z==null?null:z[c]},
F:function(a,b){var z=H.ca(a)
return z==null?null:z[b]},
aY:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.fi(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.c(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aY(z,b)
return H.ld(a,b)}return"unknown-reified-type"},
ld:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aY(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aY(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aY(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.lA(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aY(r[p],b)+(" "+H.c(p))}w+="}"}return"("+w+") => "+z},
fi:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.aF("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.k=v+", "
u=a[y]
if(u!=null)w=!1
v=z.k+=H.aY(u,c)}return w?"":"<"+z.j(0)+">"},
db:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bH:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.ca(a)
y=J.k(a)
if(y[b]==null)return!1
return H.fb(H.db(y[d],z),c)},
fb:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.a6(a[y],b[y]))return!1
return!0},
bf:function(a,b,c){return a.apply(b,H.ff(b,c))},
a6:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="b7")return!0
if('func' in b)return H.fg(a,b)
if('func' in a)return b.builtin$cls==="cA"||b.builtin$cls==="e"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.aY(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.fb(H.db(u,z),x)},
fa:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.a6(z,v)||H.a6(v,z)))return!1}return!0},
lo:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=Object.getOwnPropertyNames(b)
z.fixed$length=Array
y=z
for(z=y.length,x=0;x<z;++x){w=y[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.a6(v,u)||H.a6(u,v)))return!1}return!0},
fg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.a6(z,y)||H.a6(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.fa(x,w,!1))return!1
if(!H.fa(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.a6(o,n)||H.a6(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.a6(o,n)||H.a6(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.a6(o,n)||H.a6(n,o)))return!1}}return H.lo(a.named,b.named)},
ob:function(a){var z=$.d8
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
o7:function(a){return H.ax(a)},
o6:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lT:function(a){var z,y,x,w,v,u
z=$.d8.$1(a)
y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cc[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.f9.$2(a,z)
if(z!=null){y=$.c8[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.cc[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.da(x)
$.c8[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.cc[z]=x
return x}if(v==="-"){u=H.da(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fl(a,x)
if(v==="*")throw H.b(new P.cR(z))
if(init.leafTags[z]===true){u=H.da(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fl(a,x)},
fl:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.cd(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
da:function(a){return J.cd(a,!1,null,!!a.$isY)},
lU:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.cd(z,!1,null,!!z.$isY)
else return J.cd(z,c,null,null)},
lJ:function(){if(!0===$.d9)return
$.d9=!0
H.lK()},
lK:function(){var z,y,x,w,v,u,t,s
$.c8=Object.create(null)
$.cc=Object.create(null)
H.lF()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fm.$1(v)
if(u!=null){t=H.lU(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lF:function(){var z,y,x,w,v,u,t
z=C.C()
z=H.aV(C.z,H.aV(C.E,H.aV(C.p,H.aV(C.p,H.aV(C.D,H.aV(C.A,H.aV(C.B(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.d8=new H.lG(v)
$.f9=new H.lH(u)
$.fm=new H.lI(t)},
aV:function(a,b){return a(b)||b},
m3:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fp:function(a,b,c){var z,y,x
H.fe(c)
if(b==="")if(a==="")return c
else{z=a.length
y=H.c(c)
for(x=0;x<z;++x)y=y+a[x]+H.c(c)
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
h9:{"^":"eE;a,$ti",$aseE:I.Q,$asI:I.Q,$isI:1},
h8:{"^":"e;",
gD:function(a){return this.gi(this)===0},
gT:function(a){return this.gi(this)!==0},
j:function(a){return P.cJ(this)},
l:function(a,b,c){return H.dx()},
A:function(a,b){return H.dx()},
$isI:1},
ha:{"^":"h8;a,b,c,$ti",
gi:function(a){return this.a},
M:function(a){if(typeof a!=="string")return!1
if("__proto__"===a)return!1
return this.b.hasOwnProperty(a)},
h:function(a,b){if(!this.M(b))return
return this.dE(b)},
dE:function(a){return this.b[a]},
J:function(a,b){var z,y,x,w
z=this.c
for(y=z.length,x=0;x<y;++x){w=z[x]
b.$2(w,this.dE(w))}}},
ih:{"^":"e;a,b,c,d,e,f",
gey:function(){var z=this.a
return z},
geF:function(){var z,y,x,w
if(this.c===1)return C.i
z=this.d
y=z.length-this.e.length
if(y===0)return C.i
x=[]
for(w=0;w<y;++w){if(w>=z.length)return H.a(z,w)
x.push(z[w])}x.fixed$length=Array
x.immutable$list=Array
return x},
gez:function(){var z,y,x,w,v,u,t,s,r
if(this.c!==0)return C.r
z=this.e
y=z.length
x=this.d
w=x.length-y
if(y===0)return C.r
v=P.bz
u=new H.a1(0,null,null,null,null,null,0,[v,null])
for(t=0;t<y;++t){if(t>=z.length)return H.a(z,t)
s=z[t]
r=w+t
if(r<0||r>=x.length)return H.a(x,r)
u.l(0,new H.cP(s),x[r])}return new H.h9(u,[v,null])}},
jc:{"^":"e;a,b,c,d,e,f,r,x",
hV:function(a,b){var z=this.d
if(typeof b!=="number")return b.aj()
if(b<z)return
return this.b[3+b-z]},
w:{
ee:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.jc(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
iX:{"^":"f:9;a,b,c",
$2:function(a,b){var z=this.a
z.b=z.b+"$"+H.c(a)
this.c.push(a)
this.b.push(b);++z.a}},
jH:{"^":"e;a,b,c,d,e,f",
a8:function(a){var z,y,x
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
w:{
al:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c1:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
ez:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
e1:{"^":"P;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.c(this.a)
return"NullError: method not found: '"+H.c(z)+"' on null"}},
is:{"^":"P;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.c(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.c(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.c(this.a)+")"},
w:{
cF:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.is(a,y,z?null:b.receiver)}}},
jJ:{"^":"P;a",
j:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
m5:{"^":"f:0;a",
$1:function(a){if(!!J.k(a).$isP)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eS:{"^":"e;a,b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z}},
lM:{"^":"f:2;a",
$0:function(){return this.a.$0()}},
lN:{"^":"f:2;a,b",
$0:function(){return this.a.$1(this.b)}},
lO:{"^":"f:2;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
lP:{"^":"f:2;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
lQ:{"^":"f:2;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
f:{"^":"e;",
j:function(a){return"Closure '"+H.c_(this).trim()+"'"},
geV:function(){return this},
$iscA:1,
geV:function(){return this}},
eo:{"^":"f;"},
jm:{"^":"eo;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cr:{"^":"eo;a,b,c,d",
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cr))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gI:function(a){var z,y
z=this.c
if(z==null)y=H.ax(this.a)
else y=typeof z!=="object"?J.a_(z):H.ax(z)
return J.fr(y,H.ax(this.b))},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.c(this.d)+"' of "+H.bZ(z)},
w:{
cs:function(a){return a.a},
dt:function(a){return a.c},
fZ:function(){var z=$.b1
if(z==null){z=H.bL("self")
$.b1=z}return z},
bL:function(a){var z,y,x,w,v
z=new H.cr("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
h_:{"^":"P;a",
j:function(a){return this.a},
w:{
du:function(a,b){return new H.h_("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")}}},
je:{"^":"P;a",
j:function(a){return"RuntimeError: "+H.c(this.a)}},
a1:{"^":"e;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gD:function(a){return this.a===0},
gT:function(a){return!this.gD(this)},
gab:function(){return new H.iz(this,[H.F(this,0)])},
gd5:function(a){return H.bV(this.gab(),new H.ir(this),H.F(this,0),H.F(this,1))},
M:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.dB(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.dB(y,a)}else return this.im(a)},
im:function(a){var z=this.d
if(z==null)return!1
return this.b9(this.bt(z,this.b8(a)),a)>=0},
h:function(a,b){var z,y,x
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aX(z,b)
return y==null?null:y.gax()}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null)return
y=this.aX(x,b)
return y==null?null:y.gax()}else return this.io(b)},
io:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bt(z,this.b8(a))
x=this.b9(y,a)
if(x<0)return
return y[x].gax()},
l:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.cn()
this.b=z}this.dj(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.cn()
this.c=y}this.dj(y,b,c)}else{x=this.d
if(x==null){x=this.cn()
this.d=x}w=this.b8(b)
v=this.bt(x,w)
if(v==null)this.cv(x,w,[this.co(b,c)])
else{u=this.b9(v,b)
if(u>=0)v[u].sax(c)
else v.push(this.co(b,c))}}},
A:function(a,b){if(typeof b==="string")return this.dT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dT(this.c,b)
else return this.ip(b)},
ip:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.bt(z,this.b8(a))
x=this.b9(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.e1(w)
return w.gax()},
a7:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
J:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(new P.a8(this))
z=z.c}},
dj:function(a,b,c){var z=this.aX(a,b)
if(z==null)this.cv(a,b,this.co(b,c))
else z.sax(c)},
dT:function(a,b){var z
if(a==null)return
z=this.aX(a,b)
if(z==null)return
this.e1(z)
this.dC(a,b)
return z.gax()},
co:function(a,b){var z,y
z=new H.iy(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
e1:function(a){var z,y
z=a.ghc()
y=a.gha()
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.r=this.r+1&67108863},
b8:function(a){return J.a_(a)&0x3ffffff},
b9:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].ger(),b))return y
return-1},
j:function(a){return P.cJ(this)},
aX:function(a,b){return a[b]},
bt:function(a,b){return a[b]},
cv:function(a,b,c){a[b]=c},
dC:function(a,b){delete a[b]},
dB:function(a,b){return this.aX(a,b)!=null},
cn:function(){var z=Object.create(null)
this.cv(z,"<non-identifier-key>",z)
this.dC(z,"<non-identifier-key>")
return z},
$isi5:1,
$isI:1},
ir:{"^":"f:0;a",
$1:[function(a){return this.a.h(0,a)},null,null,2,0,null,18,"call"]},
iy:{"^":"e;er:a<,ax:b@,ha:c<,hc:d<"},
iz:{"^":"i;a,$ti",
gi:function(a){return this.a.a},
gD:function(a){return this.a.a===0},
gH:function(a){var z,y
z=this.a
y=new H.iA(z,z.r,null,null)
y.c=z.e
return y}},
iA:{"^":"e;a,b,c,d",
gt:function(){return this.d},
n:function(){var z=this.a
if(this.b!==z.r)throw H.b(new P.a8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lG:{"^":"f:0;a",
$1:function(a){return this.a(a)}},
lH:{"^":"f:10;a",
$2:function(a,b){return this.a(a,b)}},
lI:{"^":"f:11;a",
$1:function(a){return this.a(a)}},
im:{"^":"e;a,b,c,d",
j:function(a){return"RegExp/"+this.a+"/"},
gh9:function(){var z=this.d
if(z!=null)return z
z=this.b
z=H.dS(this.a+"|()",z.multiline,!z.ignoreCase,!0)
this.d=z
return z},
fX:function(a,b){var z,y
z=this.gh9()
z.lastIndex=b
y=z.exec(a)
if(y==null)return
if(0>=y.length)return H.a(y,-1)
if(y.pop()!=null)return
return new H.kE(this,y)},
ex:function(a,b,c){if(c>b.length)throw H.b(P.G(c,0,b.length,null,null))
return this.fX(b,c)},
w:{
dS:function(a,b,c,d){var z,y,x,w
z=b?"m":""
y=c?"":"i"
x=d?"g":""
w=function(e,f){try{return new RegExp(e,f)}catch(v){return v}}(a,z+y+x)
if(w instanceof RegExp)return w
throw H.b(new P.bP("Illegal RegExp pattern ("+String(w)+")",a,null))}}},
kE:{"^":"e;a,b",
h:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]}},
jr:{"^":"e;a,b,c",
h:function(a,b){if(b!==0)H.B(P.b9(b,null,null))
return this.c}}}],["","",,H,{"^":"",
lA:function(a){var z=H.p(a?Object.keys(a):[],[null])
z.fixed$length=Array
return z}}],["","",,H,{"^":"",
m_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",dU:{"^":"j;",$isdU:1,"%":"ArrayBuffer"},bY:{"^":"j;",
h3:function(a,b,c,d){var z=P.G(b,0,c,d,null)
throw H.b(z)},
dr:function(a,b,c,d){if(b>>>0!==b||b>c)this.h3(a,b,c,d)},
$isbY:1,
$isa9:1,
"%":";ArrayBufferView;cK|dV|dX|bX|dW|dY|aw"},n4:{"^":"bY;",$isa9:1,"%":"DataView"},cK:{"^":"bY;",
gi:function(a){return a.length},
dY:function(a,b,c,d,e){var z,y,x
z=a.length
this.dr(a,b,z,"start")
this.dr(a,c,z,"end")
if(b>c)throw H.b(P.G(b,0,c,null,null))
y=c-b
x=d.length
if(x-e<y)throw H.b(new P.a4("Not enough elements"))
if(e!==0||x!==y)d=d.subarray(e,e+y)
a.set(d,b)},
$isY:1,
$asY:I.Q,
$isS:1,
$asS:I.Q},bX:{"^":"dX;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.M(a,b))
return a[b]},
l:function(a,b,c){if(b>>>0!==b||b>=a.length)H.B(H.M(a,b))
a[b]=c},
X:function(a,b,c,d,e){if(!!J.k(d).$isbX){this.dY(a,b,c,d,e)
return}this.de(a,b,c,d,e)}},dV:{"^":"cK+W;",$asY:I.Q,$asS:I.Q,
$ash:function(){return[P.ap]},
$asi:function(){return[P.ap]},
$ish:1,
$isi:1},dX:{"^":"dV+dK;",$asY:I.Q,$asS:I.Q,
$ash:function(){return[P.ap]},
$asi:function(){return[P.ap]}},aw:{"^":"dY;",
l:function(a,b,c){if(b>>>0!==b||b>=a.length)H.B(H.M(a,b))
a[b]=c},
X:function(a,b,c,d,e){if(!!J.k(d).$isaw){this.dY(a,b,c,d,e)
return}this.de(a,b,c,d,e)},
$ish:1,
$ash:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]}},dW:{"^":"cK+W;",$asY:I.Q,$asS:I.Q,
$ash:function(){return[P.x]},
$asi:function(){return[P.x]},
$ish:1,
$isi:1},dY:{"^":"dW+dK;",$asY:I.Q,$asS:I.Q,
$ash:function(){return[P.x]},
$asi:function(){return[P.x]}},n5:{"^":"bX;",$isa9:1,$ish:1,
$ash:function(){return[P.ap]},
$isi:1,
$asi:function(){return[P.ap]},
"%":"Float32Array"},n6:{"^":"bX;",$isa9:1,$ish:1,
$ash:function(){return[P.ap]},
$isi:1,
$asi:function(){return[P.ap]},
"%":"Float64Array"},n7:{"^":"aw;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.M(a,b))
return a[b]},
$isa9:1,
$ish:1,
$ash:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
"%":"Int16Array"},n8:{"^":"aw;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.M(a,b))
return a[b]},
$isa9:1,
$ish:1,
$ash:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
"%":"Int32Array"},n9:{"^":"aw;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.M(a,b))
return a[b]},
$isa9:1,
$ish:1,
$ash:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
"%":"Int8Array"},na:{"^":"aw;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.M(a,b))
return a[b]},
$isa9:1,
$ish:1,
$ash:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
"%":"Uint16Array"},nb:{"^":"aw;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.M(a,b))
return a[b]},
$isa9:1,
$ish:1,
$ash:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
"%":"Uint32Array"},nc:{"^":"aw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.M(a,b))
return a[b]},
$isa9:1,
$ish:1,
$ash:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
"%":"CanvasPixelArray|Uint8ClampedArray"},nd:{"^":"aw;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.M(a,b))
return a[b]},
$isa9:1,
$ish:1,
$ash:function(){return[P.x]},
$isi:1,
$asi:function(){return[P.x]},
"%":";Uint8Array"}}],["","",,P,{"^":"",
jN:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lp()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aW(new P.jP(z),1)).observe(y,{childList:true})
return new P.jO(z,y,x)}else if(self.setImmediate!=null)return P.lq()
return P.lr()},
nN:[function(a){++init.globalState.f.b
self.scheduleImmediate(H.aW(new P.jQ(a),0))},"$1","lp",2,0,4],
nO:[function(a){++init.globalState.f.b
self.setImmediate(H.aW(new P.jR(a),0))},"$1","lq",2,0,4],
nP:[function(a){P.cQ(C.o,a)},"$1","lr",2,0,4],
le:function(a,b,c){if(H.aI(a,{func:1,args:[P.b7,P.b7]}))return a.$2(b,c)
else return a.$1(b)},
f1:function(a,b){if(H.aI(a,{func:1,args:[P.b7,P.b7]})){b.toString
return a}else{b.toString
return a}},
lg:function(){var z,y
for(;z=$.aS,z!=null;){$.bd=null
y=z.gZ()
$.aS=y
if(y==null)$.bc=null
z.gec().$0()}},
o5:[function(){$.d2=!0
try{P.lg()}finally{$.bd=null
$.d2=!1
if($.aS!=null)$.$get$cT().$1(P.fd())}},"$0","fd",0,0,1],
f6:function(a){var z=new P.eF(a,null)
if($.aS==null){$.bc=z
$.aS=z
if(!$.d2)$.$get$cT().$1(P.fd())}else{$.bc.b=z
$.bc=z}},
lk:function(a){var z,y,x
z=$.aS
if(z==null){P.f6(a)
$.bd=$.bc
return}y=new P.eF(a,null)
x=$.bd
if(x==null){y.b=z
$.bd=y
$.aS=y}else{y.b=x.b
x.b=y
$.bd=y
if(y.b==null)$.bc=y}},
fn:function(a){var z=$.w
if(C.c===z){P.aU(null,null,C.c,a)
return}z.toString
P.aU(null,null,z,z.cC(a,!0))},
f5:function(a){var z,y,x,w
if(a==null)return
try{a.$0()}catch(x){z=H.D(x)
y=H.Z(x)
w=$.w
w.toString
P.aT(null,null,w,z,y)}},
o3:[function(a){},"$1","ls",2,0,19,2],
lh:[function(a,b){var z=$.w
z.toString
P.aT(null,null,z,a,b)},function(a){return P.lh(a,null)},"$2","$1","lt",2,2,3,1],
o4:[function(){},"$0","fc",0,0,1],
eV:function(a,b,c){$.w.toString
a.aD(b,c)},
jz:function(a,b){var z=$.w
if(z===C.c){z.toString
return P.cQ(a,b)}return P.cQ(a,z.cC(b,!0))},
cQ:function(a,b){var z=C.f.bD(a.a,1000)
return H.jw(z<0?0:z,b)},
jM:function(){return $.w},
aT:function(a,b,c,d,e){var z={}
z.a=d
P.lk(new P.lj(z,e))},
f2:function(a,b,c,d){var z,y
y=$.w
if(y===c)return d.$0()
$.w=c
z=y
try{y=d.$0()
return y}finally{$.w=z}},
f4:function(a,b,c,d,e){var z,y
y=$.w
if(y===c)return d.$1(e)
$.w=c
z=y
try{y=d.$1(e)
return y}finally{$.w=z}},
f3:function(a,b,c,d,e,f){var z,y
y=$.w
if(y===c)return d.$2(e,f)
$.w=c
z=y
try{y=d.$2(e,f)
return y}finally{$.w=z}},
aU:function(a,b,c,d){var z=C.c!==c
if(z)d=c.cC(d,!(!z||!1))
P.f6(d)},
jP:{"^":"f:0;a",
$1:[function(a){var z,y;--init.globalState.f.b
z=this.a
y=z.a
z.a=null
y.$0()},null,null,2,0,null,5,"call"]},
jO:{"^":"f:12;a,b,c",
$1:function(a){var z,y;++init.globalState.f.b
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jQ:{"^":"f:2;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
jR:{"^":"f:2;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
jT:{"^":"eH;a,$ti"},
jU:{"^":"jZ;aU:y@,ad:z@,bp:Q@,x,a,b,c,d,e,f,r,$ti",
fY:function(a){return(this.y&1)===a},
hz:function(){this.y^=1},
gh5:function(){return(this.y&2)!==0},
hv:function(){this.y|=4},
ghh:function(){return(this.y&4)!==0},
bv:[function(){},"$0","gbu",0,0,1],
bx:[function(){},"$0","gbw",0,0,1]},
cU:{"^":"e;aa:c<,$ti",
gba:function(){return!1},
gaY:function(){return this.c<4},
fV:function(){var z=this.r
if(z!=null)return z
z=new P.an(0,$.w,null,[null])
this.r=z
return z},
aP:function(a){var z
a.saU(this.c&1)
z=this.e
this.e=a
a.sad(null)
a.sbp(z)
if(z==null)this.d=a
else z.sad(a)},
dU:function(a){var z,y
z=a.gbp()
y=a.gad()
if(z==null)this.d=y
else z.sad(y)
if(y==null)this.e=z
else y.sbp(z)
a.sbp(a)
a.sad(a)},
hy:function(a,b,c,d){var z,y,x
if((this.c&4)!==0){if(c==null)c=P.fc()
z=new P.k4($.w,0,c,this.$ti)
z.dX()
return z}z=$.w
y=d?1:0
x=new P.jU(0,null,null,this,null,null,null,z,y,null,null,this.$ti)
x.dh(a,b,c,d,H.F(this,0))
x.Q=x
x.z=x
this.aP(x)
z=this.d
y=this.e
if(z==null?y==null:z===y)P.f5(this.a)
return x},
he:function(a){if(a.gad()===a)return
if(a.gh5())a.hv()
else{this.dU(a)
if((this.c&2)===0&&this.d==null)this.c5()}return},
hf:function(a){},
hg:function(a){},
bo:["fl",function(){if((this.c&4)!==0)return new P.a4("Cannot add new events after calling close")
return new P.a4("Cannot add new events while doing an addStream")}],
C:[function(a,b){if(!this.gaY())throw H.b(this.bo())
this.bA(b)},"$1","ghB",2,0,function(){return H.bf(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"cU")}],
hE:[function(a,b){if(!this.gaY())throw H.b(this.bo())
$.w.toString
this.bB(a,b)},function(a){return this.hE(a,null)},"iW","$2","$1","ghD",2,2,3,1],
eg:function(a){var z
if((this.c&4)!==0)return this.r
if(!this.gaY())throw H.b(this.bo())
this.c|=4
z=this.fV()
this.b0()
return z},
cj:function(a){var z,y,x,w
z=this.c
if((z&2)!==0)throw H.b(new P.a4("Cannot fire new event. Controller is already firing an event"))
y=this.d
if(y==null)return
x=z&1
this.c=z^3
for(;y!=null;)if(y.fY(x)){y.saU(y.gaU()|2)
a.$1(y)
y.hz()
w=y.gad()
if(y.ghh())this.dU(y)
y.saU(y.gaU()&4294967293)
y=w}else y=y.gad()
this.c&=4294967293
if(this.d==null)this.c5()},
c5:function(){if((this.c&4)!==0&&this.r.a===0)this.r.dn(null)
P.f5(this.b)}},
c6:{"^":"cU;a,b,c,d,e,f,r,$ti",
gaY:function(){return P.cU.prototype.gaY.call(this)===!0&&(this.c&2)===0},
bo:function(){if((this.c&2)!==0)return new P.a4("Cannot fire new event. Controller is already firing an event")
return this.fl()},
bA:function(a){var z=this.d
if(z==null)return
if(z===this.e){this.c|=2
z.aQ(a)
this.c&=4294967293
if(this.d==null)this.c5()
return}this.cj(new P.l0(this,a))},
bB:function(a,b){if(this.d==null)return
this.cj(new P.l2(this,a,b))},
b0:function(){if(this.d!=null)this.cj(new P.l1(this))
else this.r.dn(null)}},
l0:{"^":"f;a,b",
$1:function(a){a.aQ(this.b)},
$S:function(){return H.bf(function(a){return{func:1,args:[[P.aG,a]]}},this.a,"c6")}},
l2:{"^":"f;a,b,c",
$1:function(a){a.aD(this.b,this.c)},
$S:function(){return H.bf(function(a){return{func:1,args:[[P.aG,a]]}},this.a,"c6")}},
l1:{"^":"f;a",
$1:function(a){a.dm()},
$S:function(){return H.bf(function(a){return{func:1,args:[[P.aG,a]]}},this.a,"c6")}},
jY:{"^":"e;$ti"},
l3:{"^":"jY;a,$ti"},
eL:{"^":"e;ae:a@,N:b>,c,ec:d<,e",
gaq:function(){return this.b.b},
geo:function(){return(this.c&1)!==0},
gij:function(){return(this.c&2)!==0},
gen:function(){return this.c===8},
gik:function(){return this.e!=null},
ih:function(a){return this.b.b.d_(this.d,a)},
ix:function(a){if(this.c!==6)return!0
return this.b.b.d_(this.d,J.bi(a))},
em:function(a){var z,y,x
z=this.e
y=J.m(a)
x=this.b.b
if(H.aI(z,{func:1,args:[,,]}))return x.iJ(z,y.gau(a),a.gak())
else return x.d_(z,y.gau(a))},
ii:function(){return this.b.b.eJ(this.d)}},
an:{"^":"e;aa:a<,aq:b<,aF:c<,$ti",
gh4:function(){return this.a===2},
gcm:function(){return this.a>=4},
gh2:function(){return this.a===8},
hs:function(a){this.a=2
this.c=a},
eN:function(a,b){var z,y
z=$.w
if(z!==C.c){z.toString
if(b!=null)b=P.f1(b,z)}y=new P.an(0,$.w,null,[null])
this.aP(new P.eL(null,y,b==null?1:3,a,b))
return y},
eM:function(a){return this.eN(a,null)},
eS:function(a){var z,y
z=$.w
y=new P.an(0,z,null,this.$ti)
if(z!==C.c)z.toString
this.aP(new P.eL(null,y,8,a,null))
return y},
hu:function(){this.a=1},
fM:function(){this.a=0},
gan:function(){return this.c},
gfJ:function(){return this.c},
hw:function(a){this.a=4
this.c=a},
ht:function(a){this.a=8
this.c=a},
ds:function(a){this.a=a.gaa()
this.c=a.gaF()},
aP:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gcm()){y.aP(a)
return}this.a=y.gaa()
this.c=y.gaF()}z=this.b
z.toString
P.aU(null,null,z,new P.kd(this,a))}},
dS:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gae()!=null;)w=w.gae()
w.sae(x)}}else{if(y===2){v=this.c
if(!v.gcm()){v.dS(a)
return}this.a=v.gaa()
this.c=v.gaF()}z.a=this.dV(a)
y=this.b
y.toString
P.aU(null,null,y,new P.kj(z,this))}},
aE:function(){var z=this.c
this.c=null
return this.dV(z)},
dV:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gae()
z.sae(y)}return y},
bq:function(a){var z,y
z=this.$ti
if(H.bH(a,"$isaE",z,"$asaE"))if(H.bH(a,"$isan",z,null))P.c4(a,this)
else P.eM(a,this)
else{y=this.aE()
this.a=4
this.c=a
P.aQ(this,y)}},
ca:[function(a,b){var z=this.aE()
this.a=8
this.c=new P.bJ(a,b)
P.aQ(this,z)},function(a){return this.ca(a,null)},"iS","$2","$1","gdA",2,2,3,1,4,6],
dn:function(a){var z
if(H.bH(a,"$isaE",this.$ti,"$asaE")){this.fI(a)
return}this.a=1
z=this.b
z.toString
P.aU(null,null,z,new P.ke(this,a))},
fI:function(a){var z
if(H.bH(a,"$isan",this.$ti,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aU(null,null,z,new P.ki(this,a))}else P.c4(a,this)
return}P.eM(a,this)},
fD:function(a,b){this.a=4
this.c=a},
$isaE:1,
w:{
eM:function(a,b){var z,y,x
b.hu()
try{a.eN(new P.kf(b),new P.kg(b))}catch(x){z=H.D(x)
y=H.Z(x)
P.fn(new P.kh(b,z,y))}},
c4:function(a,b){var z
for(;a.gh4();)a=a.gfJ()
if(a.gcm()){z=b.aE()
b.ds(a)
P.aQ(b,z)}else{z=b.gaF()
b.hs(a)
a.dS(z)}},
aQ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z={}
z.a=a
for(y=a;!0;){x={}
w=y.gh2()
if(b==null){if(w){v=z.a.gan()
y=z.a.gaq()
u=J.bi(v)
t=v.gak()
y.toString
P.aT(null,null,y,u,t)}return}for(;b.gae()!=null;b=s){s=b.gae()
b.sae(null)
P.aQ(z.a,b)}r=z.a.gaF()
x.a=w
x.b=r
y=!w
if(!y||b.geo()||b.gen()){q=b.gaq()
if(w){u=z.a.gaq()
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){v=z.a.gan()
y=z.a.gaq()
u=J.bi(v)
t=v.gak()
y.toString
P.aT(null,null,y,u,t)
return}p=$.w
if(p==null?q!=null:p!==q)$.w=q
else p=null
if(b.gen())new P.km(z,x,w,b).$0()
else if(y){if(b.geo())new P.kl(x,b,r).$0()}else if(b.gij())new P.kk(z,x,b).$0()
if(p!=null)$.w=p
y=x.b
if(!!J.k(y).$isaE){o=J.di(b)
if(y.a>=4){b=o.aE()
o.ds(y)
z.a=y
continue}else P.c4(y,o)
return}}o=J.di(b)
b=o.aE()
y=x.a
u=x.b
if(!y)o.hw(u)
else o.ht(u)
z.a=o
y=o}}}},
kd:{"^":"f:2;a,b",
$0:function(){P.aQ(this.a,this.b)}},
kj:{"^":"f:2;a,b",
$0:function(){P.aQ(this.b,this.a.a)}},
kf:{"^":"f:0;a",
$1:[function(a){var z=this.a
z.fM()
z.bq(a)},null,null,2,0,null,2,"call"]},
kg:{"^":"f:13;a",
$2:[function(a,b){this.a.ca(a,b)},function(a){return this.$2(a,null)},"$1",null,null,null,2,2,null,1,4,6,"call"]},
kh:{"^":"f:2;a,b,c",
$0:function(){this.a.ca(this.b,this.c)}},
ke:{"^":"f:2;a,b",
$0:function(){var z,y
z=this.a
y=z.aE()
z.a=4
z.c=this.b
P.aQ(z,y)}},
ki:{"^":"f:2;a,b",
$0:function(){P.c4(this.b,this.a)}},
km:{"^":"f:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.d.ii()}catch(w){y=H.D(w)
x=H.Z(w)
if(this.c){v=J.bi(this.a.a.gan())
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.gan()
else u.b=new P.bJ(y,x)
u.a=!0
return}if(!!J.k(z).$isaE){if(z instanceof P.an&&z.gaa()>=4){if(z.gaa()===8){v=this.b
v.b=z.gaF()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.eM(new P.kn(t))
v.a=!1}}},
kn:{"^":"f:0;a",
$1:[function(a){return this.a},null,null,2,0,null,5,"call"]},
kl:{"^":"f:1;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.ih(this.c)}catch(x){z=H.D(x)
y=H.Z(x)
w=this.a
w.b=new P.bJ(z,y)
w.a=!0}}},
kk:{"^":"f:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.gan()
w=this.c
if(w.ix(z)===!0&&w.gik()){v=this.b
v.b=w.em(z)
v.a=!1}}catch(u){y=H.D(u)
x=H.Z(u)
w=this.a
v=J.bi(w.a.gan())
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.gan()
else s.b=new P.bJ(y,x)
s.a=!0}}},
eF:{"^":"e;ec:a<,Z:b@"},
ad:{"^":"e;$ti",
af:function(a,b){return new P.kD(b,this,[H.H(this,"ad",0),null])},
ib:function(a,b){return new P.ko(a,b,this,[H.H(this,"ad",0)])},
em:function(a){return this.ib(a,null)},
gi:function(a){var z,y
z={}
y=new P.an(0,$.w,null,[P.x])
z.a=0
this.a1(new P.jn(z),!0,new P.jo(z,y),y.gdA())
return y},
aL:function(a){var z,y,x
z=H.H(this,"ad",0)
y=H.p([],[z])
x=new P.an(0,$.w,null,[[P.h,z]])
this.a1(new P.jp(this,y),!0,new P.jq(y,x),x.gdA())
return x}},
jn:{"^":"f:0;a",
$1:[function(a){++this.a.a},null,null,2,0,null,5,"call"]},
jo:{"^":"f:2;a,b",
$0:[function(){this.b.bq(this.a.a)},null,null,0,0,null,"call"]},
jp:{"^":"f;a,b",
$1:[function(a){this.b.push(a)},null,null,2,0,null,11,"call"],
$S:function(){return H.bf(function(a){return{func:1,args:[a]}},this.a,"ad")}},
jq:{"^":"f:2;a,b",
$0:[function(){this.b.bq(this.a)},null,null,0,0,null,"call"]},
ek:{"^":"e;$ti"},
eH:{"^":"kW;a,$ti",
gI:function(a){return(H.ax(this.a)^892482866)>>>0},
F:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.eH))return!1
return b.a===this.a}},
jZ:{"^":"aG;$ti",
cp:function(){return this.x.he(this)},
bv:[function(){this.x.hf(this)},"$0","gbu",0,0,1],
bx:[function(){this.x.hg(this)},"$0","gbw",0,0,1]},
aG:{"^":"e;aq:d<,aa:e<,$ti",
be:function(a,b){var z=this.e
if((z&8)!==0)return
this.e=(z+128|4)>>>0
if(z<128&&this.r!=null)this.r.ed()
if((z&4)===0&&(this.e&32)===0)this.dK(this.gbu())},
cT:function(a){return this.be(a,null)},
cX:function(){var z=this.e
if((z&8)!==0)return
if(z>=128){z-=128
this.e=z
if(z<128){if((z&64)!==0){z=this.r
z=!z.gD(z)}else z=!1
if(z)this.r.bX(this)
else{z=(this.e&4294967291)>>>0
this.e=z
if((z&32)===0)this.dK(this.gbw())}}}},
aI:function(){var z=(this.e&4294967279)>>>0
this.e=z
if((z&8)===0)this.c6()
z=this.f
return z==null?$.$get$br():z},
gba:function(){return this.e>=128},
c6:function(){var z=(this.e|8)>>>0
this.e=z
if((z&64)!==0)this.r.ed()
if((this.e&32)===0)this.r=null
this.f=this.cp()},
aQ:["fm",function(a){var z=this.e
if((z&8)!==0)return
if(z<32)this.bA(a)
else this.c4(new P.k1(a,null,[H.H(this,"aG",0)]))}],
aD:["fn",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.bB(a,b)
else this.c4(new P.k3(a,b,null))}],
dm:function(){var z=this.e
if((z&8)!==0)return
z=(z|2)>>>0
this.e=z
if(z<32)this.b0()
else this.c4(C.w)},
bv:[function(){},"$0","gbu",0,0,1],
bx:[function(){},"$0","gbw",0,0,1],
cp:function(){return},
c4:function(a){var z,y
z=this.r
if(z==null){z=new P.kX(null,null,0,[H.H(this,"aG",0)])
this.r=z}z.C(0,a)
y=this.e
if((y&64)===0){y=(y|64)>>>0
this.e=y
if(y<128)this.r.bX(this)}},
bA:function(a){var z=this.e
this.e=(z|32)>>>0
this.d.d0(this.a,a)
this.e=(this.e&4294967263)>>>0
this.c8((z&4)!==0)},
bB:function(a,b){var z,y
z=this.e
y=new P.jW(this,a,b)
if((z&1)!==0){this.e=(z|16)>>>0
this.c6()
z=this.f
if(!!J.k(z).$isaE&&z!==$.$get$br())z.eS(y)
else y.$0()}else{y.$0()
this.c8((z&4)!==0)}},
b0:function(){var z,y
z=new P.jV(this)
this.c6()
this.e=(this.e|16)>>>0
y=this.f
if(!!J.k(y).$isaE&&y!==$.$get$br())y.eS(z)
else z.$0()},
dK:function(a){var z=this.e
this.e=(z|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.c8((z&4)!==0)},
c8:function(a){var z,y
if((this.e&64)!==0){z=this.r
z=z.gD(z)}else z=!1
if(z){z=(this.e&4294967231)>>>0
this.e=z
if((z&4)!==0)if(z<128){z=this.r
z=z==null||z.gD(z)}else z=!1
else z=!1
if(z)this.e=(this.e&4294967291)>>>0}for(;!0;a=y){z=this.e
if((z&8)!==0){this.r=null
return}y=(z&4)!==0
if(a===y)break
this.e=(z^32)>>>0
if(y)this.bv()
else this.bx()
this.e=(this.e&4294967263)>>>0}z=this.e
if((z&64)!==0&&z<128)this.r.bX(this)},
dh:function(a,b,c,d,e){var z,y
z=a==null?P.ls():a
y=this.d
y.toString
this.a=z
this.b=P.f1(b==null?P.lt():b,y)
this.c=c==null?P.fc():c}},
jW:{"^":"f:1;a,b,c",
$0:function(){var z,y,x,w,v,u
z=this.a
y=z.e
if((y&8)!==0&&(y&16)===0)return
z.e=(y|32)>>>0
y=z.b
x=H.aI(y,{func:1,args:[P.e,P.by]})
w=z.d
v=this.b
u=z.b
if(x)w.iK(u,v,this.c)
else w.d0(u,v)
z.e=(z.e&4294967263)>>>0}},
jV:{"^":"f:1;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=(y|42)>>>0
z.d.cZ(z.c)
z.e=(z.e&4294967263)>>>0}},
kW:{"^":"ad;$ti",
a1:function(a,b,c,d){return this.a.hy(a,d,c,!0===b)},
bc:function(a,b,c){return this.a1(a,null,b,c)}},
eI:{"^":"e;Z:a@"},
k1:{"^":"eI;b,a,$ti",
cU:function(a){a.bA(this.b)}},
k3:{"^":"eI;au:b>,ak:c<,a",
cU:function(a){a.bB(this.b,this.c)}},
k2:{"^":"e;",
cU:function(a){a.b0()},
gZ:function(){return},
sZ:function(a){throw H.b(new P.a4("No events after a done."))}},
kL:{"^":"e;aa:a<",
bX:function(a){var z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.fn(new P.kM(this,a))
this.a=1},
ed:function(){if(this.a===1)this.a=3}},
kM:{"^":"f:2;a,b",
$0:function(){var z,y,x,w
z=this.a
y=z.a
z.a=0
if(y===3)return
x=z.b
w=x.gZ()
z.b=w
if(w==null)z.c=null
x.cU(this.b)}},
kX:{"^":"kL;b,c,a,$ti",
gD:function(a){return this.c==null},
C:function(a,b){var z=this.c
if(z==null){this.c=b
this.b=b}else{z.sZ(b)
this.c=b}}},
k4:{"^":"e;aq:a<,aa:b<,c,$ti",
gba:function(){return this.b>=4},
dX:function(){if((this.b&2)!==0)return
var z=this.a
z.toString
P.aU(null,null,z,this.ghr())
this.b=(this.b|2)>>>0},
be:function(a,b){this.b+=4},
cT:function(a){return this.be(a,null)},
cX:function(){var z=this.b
if(z>=4){z-=4
this.b=z
if(z<4&&(z&1)===0)this.dX()}},
aI:function(){return $.$get$br()},
b0:[function(){var z=(this.b&4294967293)>>>0
this.b=z
if(z>=4)return
this.b=(z|1)>>>0
z=this.c
if(z!=null)this.a.cZ(z)},"$0","ghr",0,0,1]},
bB:{"^":"ad;$ti",
a1:function(a,b,c,d){return this.fP(a,d,c,!0===b)},
bc:function(a,b,c){return this.a1(a,null,b,c)},
fP:function(a,b,c,d){return P.kc(this,a,b,c,d,H.H(this,"bB",0),H.H(this,"bB",1))},
dL:function(a,b){b.aQ(a)},
dM:function(a,b,c){c.aD(a,b)},
$asad:function(a,b){return[b]}},
eK:{"^":"aG;x,y,a,b,c,d,e,f,r,$ti",
aQ:function(a){if((this.e&2)!==0)return
this.fm(a)},
aD:function(a,b){if((this.e&2)!==0)return
this.fn(a,b)},
bv:[function(){var z=this.y
if(z==null)return
z.cT(0)},"$0","gbu",0,0,1],
bx:[function(){var z=this.y
if(z==null)return
z.cX()},"$0","gbw",0,0,1],
cp:function(){var z=this.y
if(z!=null){this.y=null
return z.aI()}return},
iT:[function(a){this.x.dL(a,this)},"$1","gh_",2,0,function(){return H.bf(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"eK")},11],
iV:[function(a,b){this.x.dM(a,b,this)},"$2","gh1",4,0,14,4,6],
iU:[function(){this.dm()},"$0","gh0",0,0,1],
fC:function(a,b,c,d,e,f,g){this.y=this.x.a.bc(this.gh_(),this.gh0(),this.gh1())},
$asaG:function(a,b){return[b]},
w:{
kc:function(a,b,c,d,e,f,g){var z,y
z=$.w
y=e?1:0
y=new P.eK(a,null,null,null,null,z,y,null,null,[f,g])
y.dh(b,c,d,e,g)
y.fC(a,b,c,d,e,f,g)
return y}}},
kD:{"^":"bB;b,a,$ti",
dL:function(a,b){var z,y,x,w
z=null
try{z=this.b.$1(a)}catch(w){y=H.D(w)
x=H.Z(w)
P.eV(b,y,x)
return}b.aQ(z)}},
ko:{"^":"bB;b,c,a,$ti",
dM:function(a,b,c){var z,y,x,w,v
z=!0
if(z===!0)try{P.le(this.b,a,b)}catch(w){y=H.D(w)
x=H.Z(w)
v=y
if(v==null?a==null:v===a)c.aD(a,b)
else P.eV(c,y,x)
return}else c.aD(a,b)},
$asbB:function(a){return[a,a]},
$asad:null},
bJ:{"^":"e;au:a>,ak:b<",
j:function(a){return H.c(this.a)},
$isP:1},
l8:{"^":"e;"},
lj:{"^":"f:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.e2()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=J.C(y)
throw x}},
kO:{"^":"l8;",
cZ:function(a){var z,y,x,w
try{if(C.c===$.w){x=a.$0()
return x}x=P.f2(null,null,this,a)
return x}catch(w){z=H.D(w)
y=H.Z(w)
x=P.aT(null,null,this,z,y)
return x}},
d0:function(a,b){var z,y,x,w
try{if(C.c===$.w){x=a.$1(b)
return x}x=P.f4(null,null,this,a,b)
return x}catch(w){z=H.D(w)
y=H.Z(w)
x=P.aT(null,null,this,z,y)
return x}},
iK:function(a,b,c){var z,y,x,w
try{if(C.c===$.w){x=a.$2(b,c)
return x}x=P.f3(null,null,this,a,b,c)
return x}catch(w){z=H.D(w)
y=H.Z(w)
x=P.aT(null,null,this,z,y)
return x}},
cC:function(a,b){if(b)return new P.kP(this,a)
else return new P.kQ(this,a)},
hK:function(a,b){return new P.kR(this,a)},
h:function(a,b){return},
eJ:function(a){if($.w===C.c)return a.$0()
return P.f2(null,null,this,a)},
d_:function(a,b){if($.w===C.c)return a.$1(b)
return P.f4(null,null,this,a,b)},
iJ:function(a,b,c){if($.w===C.c)return a.$2(b,c)
return P.f3(null,null,this,a,b,c)}},
kP:{"^":"f:2;a,b",
$0:function(){return this.a.cZ(this.b)}},
kQ:{"^":"f:2;a,b",
$0:function(){return this.a.eJ(this.b)}},
kR:{"^":"f:0;a,b",
$1:[function(a){return this.a.d0(this.b,a)},null,null,2,0,null,22,"call"]}}],["","",,P,{"^":"",
iB:function(a,b){return new H.a1(0,null,null,null,null,null,0,[a,b])},
bS:function(){return new H.a1(0,null,null,null,null,null,0,[null,null])},
au:function(a){return H.lB(a,new H.a1(0,null,null,null,null,null,0,[null,null]))},
id:function(a,b,c){var z,y
if(P.d3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$be()
y.push(a)
try{P.lf(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.el(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bQ:function(a,b,c){var z,y,x
if(P.d3(a))return b+"..."+c
z=new P.aF(b)
y=$.$get$be()
y.push(a)
try{x=z
x.sk(P.el(x.gk(),a,", "))}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.sk(y.gk()+c)
y=z.gk()
return y.charCodeAt(0)==0?y:y},
d3:function(a){var z,y
for(z=0;y=$.$get$be(),z<y.length;++z)if(a===y[z])return!0
return!1},
lf:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gH(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.n())return
w=H.c(z.gt())
b.push(w)
y+=w.length+2;++x}if(!z.n()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gt();++x
if(!z.n()){if(x<=4){b.push(H.c(t))
return}v=H.c(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gt();++x
for(;z.n();t=s,s=r){r=z.gt();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.c(t)
v=H.c(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
a2:function(a,b,c,d){return new P.kw(0,null,null,null,null,null,0,[d])},
dT:function(a,b){var z,y,x
z=P.a2(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.A)(a),++x)z.C(0,a[x])
return z},
cJ:function(a){var z,y,x
z={}
if(P.d3(a))return"{...}"
y=new P.aF("")
try{$.$get$be().push(a)
x=y
x.sk(x.gk()+"{")
z.a=!0
a.J(0,new P.iF(z,y))
z=y
z.sk(z.gk()+"}")}finally{z=$.$get$be()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.gk()
return z.charCodeAt(0)==0?z:z},
eR:{"^":"a1;a,b,c,d,e,f,r,$ti",
b8:function(a){return H.lZ(a)&0x3ffffff},
b9:function(a,b){var z,y,x
if(a==null)return-1
z=a.length
for(y=0;y<z;++y){x=a[y].ger()
if(x==null?b==null:x===b)return y}return-1},
w:{
bb:function(a,b){return new P.eR(0,null,null,null,null,null,0,[a,b])}}},
kw:{"^":"kp;a,b,c,d,e,f,r,$ti",
gH:function(a){var z=new P.bD(this,this.r,null,null)
z.c=this.e
return z},
gi:function(a){return this.a},
gD:function(a){return this.a===0},
gT:function(a){return this.a!==0},
K:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.fO(b)},
fO:function(a){var z=this.d
if(z==null)return!1
return this.bs(z[this.br(a)],a)>=0},
cM:function(a){var z
if(!(typeof a==="string"&&a!=="__proto__"))z=typeof a==="number"&&(a&0x3ffffff)===a
else z=!0
if(z)return this.K(0,a)?a:null
else return this.h7(a)},
h7:function(a){var z,y,x
z=this.d
if(z==null)return
y=z[this.br(a)]
x=this.bs(y,a)
if(x<0)return
return J.a7(y,x).gcf()},
C:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.b=y
z=y}return this.dt(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.c=y
x=y}return this.dt(x,b)}else return this.a9(b)},
a9:function(a){var z,y,x
z=this.d
if(z==null){z=P.ky()
this.d=z}y=this.br(a)
x=z[y]
if(x==null)z[y]=[this.c9(a)]
else{if(this.bs(x,a)>=0)return!1
x.push(this.c9(a))}return!0},
A:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.dw(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dw(this.c,b)
else return this.ct(b)},
ct:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.br(a)]
x=this.bs(y,a)
if(x<0)return!1
this.dz(y.splice(x,1)[0])
return!0},
a7:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
dt:function(a,b){if(a[b]!=null)return!1
a[b]=this.c9(b)
return!0},
dw:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.dz(z)
delete a[b]
return!0},
c9:function(a){var z,y
z=new P.kx(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
dz:function(a){var z,y
z=a.gdv()
y=a.gdu()
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.sdv(z);--this.a
this.r=this.r+1&67108863},
br:function(a){return J.a_(a)&0x3ffffff},
bs:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.J(a[y].gcf(),b))return y
return-1},
$isi:1,
$asi:null,
w:{
ky:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
kx:{"^":"e;cf:a<,du:b<,dv:c@"},
bD:{"^":"e;a,b,c,d",
gt:function(){return this.d},
n:function(){var z=this.a
if(this.b!==z.r)throw H.b(new P.a8(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.gcf()
this.c=this.c.gdu()
return!0}}}},
kp:{"^":"ji;$ti"},
aO:{"^":"iN;$ti"},
iN:{"^":"e+W;",$ash:null,$asi:null,$ish:1,$isi:1},
W:{"^":"e;$ti",
gH:function(a){return new H.bT(a,this.gi(a),0,null)},
L:function(a,b){return this.h(a,b)},
J:function(a,b){var z,y
z=this.gi(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gi(a))throw H.b(new P.a8(a))}},
gD:function(a){return this.gi(a)===0},
gT:function(a){return!this.gD(a)},
af:function(a,b){return new H.b6(a,b,[H.H(a,"W",0),null])},
aB:function(a,b){var z,y,x
z=H.p([],[H.H(a,"W",0)])
C.a.si(z,this.gi(a))
for(y=0;y<this.gi(a);++y){x=this.h(a,y)
if(y>=z.length)return H.a(z,y)
z[y]=x}return z},
aL:function(a){return this.aB(a,!0)},
C:function(a,b){var z=this.gi(a)
this.si(a,z+1)
this.l(a,z,b)},
A:function(a,b){var z
for(z=0;z<this.gi(a);++z)if(J.J(this.h(a,z),b)){this.X(a,z,this.gi(a)-1,a,z+1)
this.si(a,this.gi(a)-1)
return!0}return!1},
X:["de",function(a,b,c,d,e){var z,y,x,w,v
P.cN(b,c,this.gi(a),null,null,null)
z=c-b
if(z===0)return
if(H.bH(d,"$ish",[H.H(a,"W",0)],"$ash")){y=e
x=d}else{x=new H.cO(d,e,null,[H.H(d,"W",0)]).aB(0,!1)
y=0}w=J.y(x)
if(y+z>w.gi(x))throw H.b(H.dO())
if(y<b)for(v=z-1;v>=0;--v)this.l(a,b+v,w.h(x,y+v))
else for(v=0;v<z;++v)this.l(a,b+v,w.h(x,y+v))}],
ag:function(a,b){var z=this.h(a,b)
this.X(a,b,this.gi(a)-1,a,b+1)
this.si(a,this.gi(a)-1)
return z},
j:function(a){return P.bQ(a,"[","]")},
$ish:1,
$ash:null,
$isi:1,
$asi:null},
l6:{"^":"e;",
l:function(a,b,c){throw H.b(new P.u("Cannot modify unmodifiable map"))},
A:function(a,b){throw H.b(new P.u("Cannot modify unmodifiable map"))},
$isI:1},
iD:{"^":"e;",
h:function(a,b){return this.a.h(0,b)},
l:function(a,b,c){this.a.l(0,b,c)},
M:function(a){return this.a.M(a)},
J:function(a,b){this.a.J(0,b)},
gD:function(a){var z=this.a
return z.gD(z)},
gT:function(a){var z=this.a
return z.gT(z)},
gi:function(a){var z=this.a
return z.gi(z)},
A:function(a,b){return this.a.A(0,b)},
j:function(a){return this.a.j(0)},
$isI:1},
eE:{"^":"iD+l6;$ti",$asI:null,$isI:1},
iF:{"^":"f:5;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.k+=", "
z.a=!1
z=this.b
y=z.k+=H.c(a)
z.k=y+": "
z.k+=H.c(b)}},
iC:{"^":"b5;a,b,c,d,$ti",
gH:function(a){return new P.kz(this,this.c,this.d,this.b,null)},
gD:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
L:function(a,b){var z,y,x,w
z=(this.c-this.b&this.a.length-1)>>>0
if(typeof b!=="number")return H.l(b)
if(0>b||b>=z)H.B(P.ai(b,this,"index",null,z))
y=this.a
x=y.length
w=(this.b+b&x-1)>>>0
if(w<0||w>=x)return H.a(y,w)
return y[w]},
C:function(a,b){this.a9(b)},
A:function(a,b){var z,y
for(z=this.b;z!==this.c;z=(z+1&this.a.length-1)>>>0){y=this.a
if(z<0||z>=y.length)return H.a(y,z)
if(J.J(y[z],b)){this.ct(z);++this.d
return!0}}return!1},
a7:function(a){var z,y,x,w,v
z=this.b
y=this.c
if(z!==y){for(x=this.a,w=x.length,v=w-1;z!==y;z=(z+1&v)>>>0){if(z<0||z>=w)return H.a(x,z)
x[z]=null}this.c=0
this.b=0;++this.d}},
j:function(a){return P.bQ(this,"{","}")},
eI:function(){var z,y,x,w
z=this.b
if(z===this.c)throw H.b(H.cC());++this.d
y=this.a
x=y.length
if(z>=x)return H.a(y,z)
w=y[z]
y[z]=null
this.b=(z+1&x-1)>>>0
return w},
a9:function(a){var z,y,x
z=this.a
y=this.c
x=z.length
if(y<0||y>=x)return H.a(z,y)
z[y]=a
x=(y+1&x-1)>>>0
this.c=x
if(this.b===x)this.dJ();++this.d},
ct:function(a){var z,y,x,w,v,u,t,s
z=this.a
y=z.length
x=y-1
w=this.b
v=this.c
if((a-w&x)>>>0<(v-a&x)>>>0){for(u=a;u!==w;u=t){t=(u-1&x)>>>0
if(t<0||t>=y)return H.a(z,t)
v=z[t]
if(u<0||u>=y)return H.a(z,u)
z[u]=v}if(w>=y)return H.a(z,w)
z[w]=null
this.b=(w+1&x)>>>0
return(a+1&x)>>>0}else{w=(v-1&x)>>>0
this.c=w
for(u=a;u!==w;u=s){s=(u+1&x)>>>0
if(s<0||s>=y)return H.a(z,s)
v=z[s]
if(u<0||u>=y)return H.a(z,u)
z[u]=v}if(w<0||w>=y)return H.a(z,w)
z[w]=null
return a}},
dJ:function(){var z,y,x,w
z=new Array(this.a.length*2)
z.fixed$length=Array
y=H.p(z,this.$ti)
z=this.a
x=this.b
w=z.length-x
C.a.X(y,0,w,z,x)
C.a.X(y,w,w+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=y},
fv:function(a,b){var z=new Array(8)
z.fixed$length=Array
this.a=H.p(z,[b])},
$asi:null,
w:{
cI:function(a,b){var z=new P.iC(null,0,0,0,[b])
z.fv(a,b)
return z}}},
kz:{"^":"e;a,b,c,d,e",
gt:function(){return this.e},
n:function(){var z,y,x
z=this.a
if(this.c!==z.d)H.B(new P.a8(z))
y=this.d
if(y===this.b){this.e=null
return!1}z=z.a
x=z.length
if(y>=x)return H.a(z,y)
this.e=z[y]
this.d=(y+1&x-1)>>>0
return!0}},
jj:{"^":"e;$ti",
gD:function(a){return this.a===0},
gT:function(a){return this.a!==0},
V:function(a,b){var z
for(z=J.E(b);z.n();)this.C(0,z.gt())},
af:function(a,b){return new H.cv(this,b,[H.F(this,0),null])},
j:function(a){return P.bQ(this,"{","}")},
bM:function(a,b){var z,y
z=new P.bD(this,this.r,null,null)
z.c=this.e
if(!z.n())return""
if(b===""){y=""
do y+=H.c(z.d)
while(z.n())}else{y=H.c(z.d)
for(;z.n();)y=y+b+H.c(z.d)}return y.charCodeAt(0)==0?y:y},
L:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.dq("index"))
if(b<0)H.B(P.G(b,0,null,"index",null))
for(z=new P.bD(this,this.r,null,null),z.c=this.e,y=0;z.n();){x=z.d
if(b===y)return x;++y}throw H.b(P.ai(b,this,"index",null,y))},
$isi:1,
$asi:null},
ji:{"^":"jj;$ti"}}],["","",,P,{"^":"",
c7:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.kr(a,Object.create(null),null)
for(z=0;z<a.length;++z)a[z]=P.c7(a[z])
return a},
li:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.b(H.L(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.D(x)
w=String(y)
throw H.b(new P.bP(w,null,null))}w=P.c7(z)
return w},
o2:[function(a){return a.iZ()},"$1","lw",2,0,0,9],
kr:{"^":"e;a,b,c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.hd(b):y}},
gi:function(a){var z
if(this.b==null){z=this.c
z=z.gi(z)}else z=this.aS().length
return z},
gD:function(a){var z
if(this.b==null){z=this.c
z=z.gi(z)}else z=this.aS().length
return z===0},
gT:function(a){var z
if(this.b==null){z=this.c
z=z.gi(z)}else z=this.aS().length
return z>0},
l:function(a,b,c){var z,y
if(this.b==null)this.c.l(0,b,c)
else if(this.M(b)){z=this.b
z[b]=c
y=this.a
if(y==null?z!=null:y!==z)y[b]=null}else this.e3().l(0,b,c)},
M:function(a){if(this.b==null)return this.c.M(a)
if(typeof a!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,a)},
A:function(a,b){if(this.b!=null&&!this.M(b))return
return this.e3().A(0,b)},
J:function(a,b){var z,y,x,w
if(this.b==null)return this.c.J(0,b)
z=this.aS()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.c7(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.b(new P.a8(this))}},
j:function(a){return P.cJ(this)},
aS:function(){var z=this.c
if(z==null){z=Object.keys(this.a)
this.c=z}return z},
e3:function(){var z,y,x,w,v
if(this.b==null)return this.c
z=P.iB(P.q,null)
y=this.aS()
for(x=0;w=y.length,x<w;++x){v=y[x]
z.l(0,v,this.h(0,v))}if(w===0)y.push(null)
else C.a.si(y,0)
this.b=null
this.a=null
this.c=z
return z},
hd:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.c7(this.a[a])
return this.b[a]=z},
$isI:1,
$asI:function(){return[P.q,null]}},
h7:{"^":"e;"},
dA:{"^":"e;"},
cG:{"^":"P;a,b",
j:function(a){if(this.b!=null)return"Converting object to an encodable object failed."
else return"Converting object did not return an encodable object."}},
iv:{"^":"cG;a,b",
j:function(a){return"Cyclic error in JSON stringify"}},
iu:{"^":"h7;a,b",
hT:function(a,b){var z=P.li(a,this.ghU().a)
return z},
hS:function(a){return this.hT(a,null)},
i3:function(a,b){var z=this.gi4()
z=P.kt(a,z.b,z.a)
return z},
ej:function(a){return this.i3(a,null)},
gi4:function(){return C.H},
ghU:function(){return C.G}},
ix:{"^":"dA;es:a<,b"},
iw:{"^":"dA;a"},
ku:{"^":"e;",
eU:function(a){var z,y,x,w,v,u,t
z=J.y(a)
y=z.gi(a)
if(typeof y!=="number")return H.l(y)
x=this.c
w=0
v=0
for(;v<y;++v){u=z.cG(a,v)
if(u>92)continue
if(u<32){if(v>w)x.k+=z.al(a,w,v)
w=v+1
x.k+=H.a3(92)
switch(u){case 8:x.k+=H.a3(98)
break
case 9:x.k+=H.a3(116)
break
case 10:x.k+=H.a3(110)
break
case 12:x.k+=H.a3(102)
break
case 13:x.k+=H.a3(114)
break
default:x.k+=H.a3(117)
x.k+=H.a3(48)
x.k+=H.a3(48)
t=u>>>4&15
x.k+=H.a3(t<10?48+t:87+t)
t=u&15
x.k+=H.a3(t<10?48+t:87+t)
break}}else if(u===34||u===92){if(v>w)x.k+=z.al(a,w,v)
w=v+1
x.k+=H.a3(92)
x.k+=H.a3(u)}}if(w===0)x.k+=H.c(a)
else if(w<y)x.k+=z.al(a,w,y)},
c7:function(a){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(a==null?w==null:a===w)throw H.b(new P.iv(a,null))}z.push(a)},
bT:function(a){var z,y,x,w
if(this.eT(a))return
this.c7(a)
try{z=this.b.$1(a)
if(!this.eT(z))throw H.b(new P.cG(a,null))
x=this.a
if(0>=x.length)return H.a(x,-1)
x.pop()}catch(w){y=H.D(w)
throw H.b(new P.cG(a,y))}},
eT:function(a){var z,y
if(typeof a==="number"){if(!isFinite(a))return!1
this.c.k+=C.d.j(a)
return!0}else if(a===!0){this.c.k+="true"
return!0}else if(a===!1){this.c.k+="false"
return!0}else if(a==null){this.c.k+="null"
return!0}else if(typeof a==="string"){z=this.c
z.k+='"'
this.eU(a)
z.k+='"'
return!0}else{z=J.k(a)
if(!!z.$ish){this.c7(a)
this.iO(a)
z=this.a
if(0>=z.length)return H.a(z,-1)
z.pop()
return!0}else if(!!z.$isI){this.c7(a)
y=this.iP(a)
z=this.a
if(0>=z.length)return H.a(z,-1)
z.pop()
return y}else return!1}},
iO:function(a){var z,y,x
z=this.c
z.k+="["
y=J.y(a)
if(y.gi(a)>0){this.bT(y.h(a,0))
for(x=1;x<y.gi(a);++x){z.k+=","
this.bT(y.h(a,x))}}z.k+="]"},
iP:function(a){var z,y,x,w,v,u,t
z={}
if(a.gD(a)){this.c.k+="{}"
return!0}y=a.gi(a)*2
x=new Array(y)
z.a=0
z.b=!0
a.J(0,new P.kv(z,x))
if(!z.b)return!1
w=this.c
w.k+="{"
for(v='"',u=0;u<y;u+=2,v=',"'){w.k+=v
this.eU(x[u])
w.k+='":'
t=u+1
if(t>=y)return H.a(x,t)
this.bT(x[t])}w.k+="}"
return!0}},
kv:{"^":"f:5;a,b",
$2:function(a,b){var z,y,x,w,v
if(typeof a!=="string")this.a.b=!1
z=this.b
y=this.a
x=y.a
w=x+1
y.a=w
v=z.length
if(x>=v)return H.a(z,x)
z[x]=a
y.a=w+1
if(w>=v)return H.a(z,w)
z[w]=b}},
ks:{"^":"ku;c,a,b",w:{
kt:function(a,b,c){var z,y,x
z=new P.aF("")
y=new P.ks(z,[],P.lw())
y.bT(a)
x=z.k
return x.charCodeAt(0)==0?x:x}}}}],["","",,P,{"^":"",
bq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.C(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hr(a)},
hr:function(a){var z=J.k(a)
if(!!z.$isf)return z.j(a)
return H.bZ(a)},
bO:function(a){return new P.kb(a)},
av:function(a,b,c){var z,y
z=H.p([],[c])
for(y=J.E(a);y.n();)z.push(y.gt())
if(b)return z
z.fixed$length=Array
return z},
fk:function(a,b){var z,y
z=J.cl(a)
y=H.eb(z,null,P.ly())
if(y!=null)return y
y=H.j4(z,P.lx())
if(y!=null)return y
if(b==null)throw H.b(new P.bP(a,null,null))
return b.$1(a)},
oa:[function(a){return},"$1","ly",2,0,20],
o9:[function(a){return},"$1","lx",2,0,21],
ce:function(a){H.m_(H.c(a))},
jd:function(a,b,c){return new H.im(a,H.dS(a,!1,!0,!1),null,null)},
iK:{"^":"f:15;a,b",
$2:function(a,b){var z,y,x
z=this.b
y=this.a
z.k+=y.a
x=z.k+=H.c(a.gh8())
z.k=x+": "
z.k+=H.c(P.bq(b))
y.a=", "}},
bF:{"^":"e;"},
"+bool":0,
b2:{"^":"e;a,b",
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.b2))return!1
return this.a===b.a&&this.b===b.b},
gI:function(a){var z=this.a
return(z^C.d.cw(z,30))&1073741823},
j:function(a){var z,y,x,w,v,u,t
z=P.hg(H.j3(this))
y=P.bp(H.j1(this))
x=P.bp(H.iY(this))
w=P.bp(H.iZ(this))
v=P.bp(H.j0(this))
u=P.bp(H.j2(this))
t=P.hh(H.j_(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
C:function(a,b){return P.hf(C.d.v(this.a,b.giY()),this.b)},
giy:function(){return this.a},
dg:function(a,b){var z
if(!(Math.abs(this.a)>864e13))z=!1
else z=!0
if(z)throw H.b(P.aA(this.giy()))},
w:{
hf:function(a,b){var z=new P.b2(a,b)
z.dg(a,b)
return z},
hg:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+H.c(z)
if(z>=10)return y+"00"+H.c(z)
return y+"000"+H.c(z)},
hh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bp:function(a){if(a>=10)return""+a
return"0"+a}}},
ap:{"^":"bh;"},
"+double":0,
aD:{"^":"e;aT:a<",
v:function(a,b){return new P.aD(this.a+b.gaT())},
U:function(a,b){return new P.aD(this.a-b.gaT())},
G:function(a,b){if(typeof b!=="number")return H.l(b)
return new P.aD(C.d.aA(this.a*b))},
c3:function(a,b){if(b===0)throw H.b(new P.hU())
return new P.aD(C.f.c3(this.a,b))},
aj:function(a,b){return this.a<b.gaT()},
bW:function(a,b){return this.a>b.gaT()},
bU:function(a,b){return C.f.bU(this.a,b.gaT())},
F:function(a,b){if(b==null)return!1
if(!(b instanceof P.aD))return!1
return this.a===b.a},
gI:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.hn()
y=this.a
if(y<0)return"-"+new P.aD(0-y).j(0)
x=z.$1(C.f.bD(y,6e7)%60)
w=z.$1(C.f.bD(y,1e6)%60)
v=new P.hm().$1(y%1e6)
return""+C.f.bD(y,36e8)+":"+H.c(x)+":"+H.c(w)+"."+H.c(v)},
e5:function(a){return new P.aD(Math.abs(this.a))}},
hm:{"^":"f:6;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hn:{"^":"f:6;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
P:{"^":"e;",
gak:function(){return H.Z(this.$thrownJsError)}},
e2:{"^":"P;",
j:function(a){return"Throw of null."}},
as:{"^":"P;a,b,c,d",
gci:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcg:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.c(z)
w=this.gci()+y+x
if(!this.a)return w
v=this.gcg()
u=P.bq(this.b)
return w+v+": "+H.c(u)},
w:{
aA:function(a){return new P.as(!1,null,null,a)},
cm:function(a,b,c){return new P.as(!0,a,b,c)},
dq:function(a){return new P.as(!1,null,a,"Must not be null")}}},
ed:{"^":"as;e,f,a,b,c,d",
gci:function(){return"RangeError"},
gcg:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.c(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.c(z)
else if(x>z)y=": Not in range "+H.c(z)+".."+H.c(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.c(z)}return y},
w:{
b9:function(a,b,c){return new P.ed(null,null,!0,a,b,"Value not in range")},
G:function(a,b,c,d,e){return new P.ed(b,c,!0,a,d,"Invalid value")},
cN:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.G(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.G(b,a,c,"end",f))
return b}}},
hR:{"^":"as;e,i:f>,a,b,c,d",
gci:function(){return"RangeError"},
gcg:function(){if(J.aZ(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.c(z)},
w:{
ai:function(a,b,c,d,e){var z=e!=null?e:J.a0(b)
return new P.hR(b,z,!0,a,c,"Index out of range")}}},
iJ:{"^":"P;a,b,c,d,e",
j:function(a){var z,y,x,w,v,u,t,s
z={}
y=new P.aF("")
z.a=""
for(x=this.c,w=x.length,v=0;v<w;++v){u=x[v]
y.k+=z.a
y.k+=H.c(P.bq(u))
z.a=", "}this.d.J(0,new P.iK(z,y))
t=P.bq(this.a)
s=y.j(0)
x="NoSuchMethodError: method not found: '"+H.c(this.b.a)+"'\nReceiver: "+H.c(t)+"\nArguments: ["+s+"]"
return x},
w:{
dZ:function(a,b,c,d,e){return new P.iJ(a,b,c,d,e)}}},
u:{"^":"P;a",
j:function(a){return"Unsupported operation: "+this.a}},
cR:{"^":"P;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.c(z):"UnimplementedError"}},
a4:{"^":"P;a",
j:function(a){return"Bad state: "+this.a}},
a8:{"^":"P;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.c(P.bq(z))+"."}},
iO:{"^":"e;",
j:function(a){return"Out of Memory"},
gak:function(){return},
$isP:1},
ej:{"^":"e;",
j:function(a){return"Stack Overflow"},
gak:function(){return},
$isP:1},
he:{"^":"P;a",
j:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.c(z)+"' during its initialization"}},
kb:{"^":"e;a",
j:function(a){var z=this.a
if(z==null)return"Exception"
return"Exception: "+H.c(z)},
$isbN:1},
bP:{"^":"e;a,b,bO:c>",
j:function(a){var z,y,x
z=this.a
y=z!=null&&""!==z?"FormatException: "+H.c(z):"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.e.al(x,0,75)+"..."
return y+"\n"+x},
$isbN:1},
hU:{"^":"e;",
j:function(a){return"IntegerDivisionByZeroException"},
$isbN:1},
hs:{"^":"e;a,dP",
j:function(a){return"Expando:"+H.c(this.a)},
h:function(a,b){var z,y
z=this.dP
if(typeof z!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.B(P.cm(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return z.get(b)}y=H.cM(b,"expando$values")
return y==null?null:H.cM(y,z)},
l:function(a,b,c){var z,y
z=this.dP
if(typeof z!=="string")z.set(b,c)
else{y=H.cM(b,"expando$values")
if(y==null){y=new P.e()
H.ec(b,"expando$values",y)}H.ec(y,z,c)}}},
x:{"^":"bh;"},
"+int":0,
R:{"^":"e;$ti",
af:function(a,b){return H.bV(this,b,H.H(this,"R",0),null)},
d6:["fg",function(a,b){return new H.cS(this,b,[H.H(this,"R",0)])}],
aB:function(a,b){return P.av(this,!0,H.H(this,"R",0))},
aL:function(a){return this.aB(a,!0)},
gi:function(a){var z,y
z=this.gH(this)
for(y=0;z.n();)++y
return y},
gD:function(a){return!this.gH(this).n()},
gT:function(a){return!this.gD(this)},
gaC:function(a){var z,y
z=this.gH(this)
if(!z.n())throw H.b(H.cC())
y=z.gt()
if(z.n())throw H.b(H.ie())
return y},
L:function(a,b){var z,y,x
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.dq("index"))
if(b<0)H.B(P.G(b,0,null,"index",null))
for(z=this.gH(this),y=0;z.n();){x=z.gt()
if(b===y)return x;++y}throw H.b(P.ai(b,this,"index",null,y))},
j:function(a){return P.id(this,"(",")")}},
bR:{"^":"e;"},
h:{"^":"e;$ti",$ash:null,$isi:1,$asi:null},
"+List":0,
b7:{"^":"e;",
gI:function(a){return P.e.prototype.gI.call(this,this)},
j:function(a){return"null"}},
"+Null":0,
bh:{"^":"e;"},
"+num":0,
e:{"^":";",
F:function(a,b){return this===b},
gI:function(a){return H.ax(this)},
j:["fk",function(a){return H.bZ(this)}],
cQ:function(a,b){throw H.b(P.dZ(this,b.gey(),b.geF(),b.gez(),null))},
toString:function(){return this.j(this)}},
by:{"^":"e;"},
q:{"^":"e;"},
"+String":0,
aF:{"^":"e;k@",
gi:function(a){return this.k.length},
gT:function(a){return this.k.length!==0},
j:function(a){var z=this.k
return z.charCodeAt(0)==0?z:z},
w:{
el:function(a,b,c){var z=J.E(b)
if(!z.n())return a
if(c.length===0){do a+=H.c(z.gt())
while(z.n())}else{a+=H.c(z.gt())
for(;z.n();)a=a+c+H.c(z.gt())}return a}}},
bz:{"^":"e;"}}],["","",,W,{"^":"",
m6:function(){return window},
dp:function(a){var z=document.createElement("a")
if(a!=null)z.href=a
return z},
hd:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
hq:function(a,b,c){var z,y
z=document.body
y=(z&&C.n).a0(z,a,b,c)
y.toString
z=new H.cS(new W.aa(y),new W.lu(),[W.t])
return z.gaC(z)},
b3:function(a){var z,y,x,w
z="element tag unavailable"
try{y=J.m(a)
x=y.geL(a)
if(typeof x==="string")z=y.geL(a)}catch(w){H.D(w)}return z},
hS:function(a){var z,y,x
y=document.createElement("input")
z=y
try{J.fP(z,a)}catch(x){H.D(x)}return z},
aH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eP:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eX:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.k0(a)
if(!!J.k(z).$isV)return z
return}else return a},
f8:function(a){var z=$.w
if(z===C.c)return a
return z.hK(a,!0)},
v:{"^":"N;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLModElement|HTMLOptGroupElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLQuoteElement|HTMLShadowElement|HTMLSpanElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
fU:{"^":"v;O:type},bL:href}",
j:function(a){return String(a)},
$isj:1,
"%":"HTMLAnchorElement"},
m9:{"^":"v;bL:href}",
j:function(a){return String(a)},
$isj:1,
"%":"HTMLAreaElement"},
ma:{"^":"v;bL:href}","%":"HTMLBaseElement"},
cp:{"^":"j;",$iscp:1,"%":"Blob|File"},
cq:{"^":"v;",$iscq:1,$isV:1,$isj:1,"%":"HTMLBodyElement"},
mb:{"^":"v;P:name=,O:type},E:value%","%":"HTMLButtonElement"},
mc:{"^":"v;p:height%,m:width%",
eX:function(a,b,c){return a.getContext(b)},
d8:function(a,b){return this.eX(a,b,null)},
"%":"HTMLCanvasElement"},
md:{"^":"j;av:fillStyle},aJ:font},eY:globalAlpha},iw:lineJoin},cL:lineWidth},c1:strokeStyle},d1:textAlign},d2:textBaseline}",
aH:function(a){return a.beginPath()},
hN:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
ek:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
cN:function(a,b){return a.measureText(b)},
a3:function(a){return a.restore()},
a_:function(a){return a.save()},
iR:function(a,b){return a.stroke(b)},
c0:function(a){return a.stroke()},
ea:function(a,b,c,d,e,f,g){return a.bezierCurveTo(b,c,d,e,f,g)},
cF:function(a){return a.closePath()},
B:function(a,b,c){return a.lineTo(b,c)},
bd:function(a,b,c){return a.moveTo(b,c)},
R:function(a,b,c,d,e){return a.quadraticCurveTo(b,c,d,e)},
i7:function(a,b,c,d,e){a.fillText(b,c,d)},
cJ:function(a,b,c,d){return this.i7(a,b,c,d,null)},
i6:function(a,b){a.fill(b)},
cI:function(a){return this.i6(a,"nonzero")},
"%":"CanvasRenderingContext2D"},
me:{"^":"t;i:length=",$isj:1,"%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mf:{"^":"hV;i:length=",
d9:function(a,b){var z=this.fZ(a,b)
return z!=null?z:""},
fZ:function(a,b){if(W.hd(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.hi()+b)},
gp:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hV:{"^":"j+hc;"},
hc:{"^":"e;",
gp:function(a){return this.d9(a,"height")},
gm:function(a){return this.d9(a,"width")}},
hj:{"^":"v;","%":"HTMLDivElement"},
hk:{"^":"t;",$isj:1,"%":";DocumentFragment"},
mg:{"^":"j;",
j:function(a){return String(a)},
"%":"DOMException"},
hl:{"^":"j;",
j:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gm(a))+" x "+H.c(this.gp(a))},
F:function(a,b){var z
if(b==null)return!1
z=J.k(b)
if(!z.$isay)return!1
return a.left===z.gbb(b)&&a.top===z.gbh(b)&&this.gm(a)===z.gm(b)&&this.gp(a)===z.gp(b)},
gI:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gm(a)
w=this.gp(a)
return W.eP(W.aH(W.aH(W.aH(W.aH(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gd4:function(a){return new P.ak(a.left,a.top,[null])},
gcD:function(a){return a.bottom},
gp:function(a){return a.height},
gbb:function(a){return a.left},
gcY:function(a){return a.right},
gbh:function(a){return a.top},
gm:function(a){return a.width},
gq:function(a){return a.x},
gu:function(a){return a.y},
$isay:1,
$asay:I.Q,
"%":";DOMRectReadOnly"},
mh:{"^":"j;i:length=",
C:function(a,b){return a.add(b)},
A:function(a,b){return a.remove(b)},
"%":"DOMTokenList"},
jX:{"^":"aO;ck:a<,b",
gD:function(a){return this.a.firstElementChild==null},
gi:function(a){return this.b.length},
h:function(a,b){var z=this.b
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
l:function(a,b,c){var z=this.b
if(b>>>0!==b||b>=z.length)return H.a(z,b)
this.a.replaceChild(c,z[b])},
si:function(a,b){throw H.b(new P.u("Cannot resize element lists"))},
C:function(a,b){this.a.appendChild(b)
return b},
gH:function(a){var z=this.aL(this)
return new J.cn(z,z.length,0,null)},
X:function(a,b,c,d,e){throw H.b(new P.cR(null))},
A:function(a,b){return!1},
a7:function(a){J.df(this.a)},
ag:function(a,b){var z,y
z=this.b
if(b>=z.length)return H.a(z,b)
y=z[b]
this.a.removeChild(y)
return y},
$asaO:function(){return[W.N]},
$ash:function(){return[W.N]},
$asi:function(){return[W.N]}},
ae:{"^":"aO;a,$ti",
gi:function(a){return this.a.length},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
l:function(a,b,c){throw H.b(new P.u("Cannot modify list"))},
si:function(a,b){throw H.b(new P.u("Cannot modify list"))},
gcE:function(a){return W.kG(this)},
$ish:1,
$ash:null,
$isi:1,
$asi:null},
N:{"^":"t;hM:className},dQ:namespaceURI=,eL:tagName=",
ghI:function(a){return new W.k5(a)},
gef:function(a){return new W.jX(a,a.children)},
gcE:function(a){return new W.k6(a)},
gbO:function(a){return P.jb(C.d.aA(a.offsetLeft),C.d.aA(a.offsetTop),C.d.aA(a.offsetWidth),C.d.aA(a.offsetHeight),null)},
j:function(a){return a.localName},
ay:function(a,b,c,d,e){var z,y
z=this.a0(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(z,a)
break
case"afterbegin":y=a.childNodes
a.insertBefore(z,y.length>0?y[0]:null)
break
case"beforeend":a.appendChild(z)
break
case"afterend":a.parentNode.insertBefore(z,a.nextSibling)
break
default:H.B(P.aA("Invalid position "+b))}},
a0:["c2",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dI
if(z==null){z=H.p([],[W.e_])
y=new W.e0(z)
z.push(W.eN(null))
z.push(W.eT())
$.dI=y
d=y}else d=z
z=$.dH
if(z==null){z=new W.eU(d)
$.dH=z
c=z}else{z.a=d
c=z}}if($.at==null){z=document
y=z.implementation.createHTMLDocument("")
$.at=y
$.cw=y.createRange()
y=$.at
y.toString
x=y.createElement("base")
J.fO(x,z.baseURI)
$.at.head.appendChild(x)}z=$.at
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.at
if(!!this.$iscq)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.at.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.a.K(C.J,a.tagName)){$.cw.selectNodeContents(w)
v=$.cw.createContextualFragment(b)}else{w.innerHTML=b
v=$.at.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.at.body
if(w==null?z!=null:w!==z)J.bl(w)
c.da(v)
document.adoptNode(v)
return v},function(a,b,c){return this.a0(a,b,c,null)},"hR",null,null,"giX",2,5,null,1,1],
seu:function(a,b){this.ac(a,b)},
bZ:function(a,b,c,d){a.textContent=null
a.appendChild(this.a0(a,b,c,d))},
ac:function(a,b){return this.bZ(a,b,null,null)},
el:function(a){return a.focus()},
d7:function(a){return a.getBoundingClientRect()},
gbP:function(a){return new W.am(a,"change",!1,[W.ac])},
gcR:function(a){return new W.am(a,"input",!1,[W.ac])},
geA:function(a){return new W.am(a,"mousedown",!1,[W.T])},
geB:function(a){return new W.am(a,"mousemove",!1,[W.T])},
geC:function(a){return new W.am(a,"mouseup",!1,[W.T])},
$isN:1,
$ist:1,
$ise:1,
$isj:1,
$isV:1,
"%":";Element"},
lu:{"^":"f:0;",
$1:function(a){return!!J.k(a).$isN}},
mi:{"^":"v;p:height%,P:name=,O:type},m:width%","%":"HTMLEmbedElement"},
mj:{"^":"ac;au:error=","%":"ErrorEvent"},
ac:{"^":"j;",
cV:function(a){return a.preventDefault()},
c_:function(a){return a.stopPropagation()},
$isac:1,
"%":"AnimationEvent|AnimationPlayerEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|AutocompleteErrorEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceLightEvent|DeviceMotionEvent|DeviceOrientationEvent|FontFaceSetLoadEvent|GamepadEvent|GeofencingEvent|HashChangeEvent|IDBVersionChangeEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCIceCandidateEvent|RTCPeerConnectionIceEvent|RelatedEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|ServiceWorkerMessageEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|TrackEvent|TransitionEvent|USBConnectionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
V:{"^":"j;",
e6:function(a,b,c,d){if(c!=null)this.fH(a,b,c,!1)},
eH:function(a,b,c,d){if(c!=null)this.hj(a,b,c,!1)},
fH:function(a,b,c,d){return a.addEventListener(b,H.aW(c,1),!1)},
hj:function(a,b,c,d){return a.removeEventListener(b,H.aW(c,1),!1)},
$isV:1,
"%":"MessagePort;EventTarget"},
hL:{"^":"ac;","%":"ExtendableMessageEvent|FetchEvent|InstallEvent|PushEvent|ServicePortConnectEvent|SyncEvent;ExtendableEvent"},
mC:{"^":"v;P:name=","%":"HTMLFieldSetElement"},
mF:{"^":"v;cB:action=,i:length=,P:name=","%":"HTMLFormElement"},
mG:{"^":"i0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.ai(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(new P.u("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.u("Cannot resize immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$ish:1,
$ash:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$isY:1,
$asY:function(){return[W.t]},
$isS:1,
$asS:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hW:{"^":"j+W;",
$ash:function(){return[W.t]},
$asi:function(){return[W.t]},
$ish:1,
$isi:1},
i0:{"^":"hW+bs;",
$ash:function(){return[W.t]},
$asi:function(){return[W.t]},
$ish:1,
$isi:1},
mH:{"^":"v;p:height%,P:name=,m:width%","%":"HTMLIFrameElement"},
cB:{"^":"j;p:height=,m:width=",$iscB:1,"%":"ImageData"},
mI:{"^":"v;p:height%,m:width%","%":"HTMLImageElement"},
mK:{"^":"v;p:height%,P:name=,fb:step},O:type},E:value%,m:width%",$isN:1,$isj:1,$isV:1,$ist:1,"%":"HTMLInputElement"},
mR:{"^":"v;P:name=","%":"HTMLKeygenElement"},
mS:{"^":"v;E:value%","%":"HTMLLIElement"},
mU:{"^":"v;bL:href},O:type}","%":"HTMLLinkElement"},
mV:{"^":"j;",
j:function(a){return String(a)},
"%":"Location"},
mW:{"^":"v;P:name=","%":"HTMLMapElement"},
iG:{"^":"v;au:error=","%":"HTMLAudioElement;HTMLMediaElement"},
mZ:{"^":"V;",
as:function(a){return a.clone()},
"%":"MediaStream"},
n_:{"^":"v;O:type}","%":"HTMLMenuElement"},
n0:{"^":"v;O:type}","%":"HTMLMenuItemElement"},
n1:{"^":"v;P:name=","%":"HTMLMetaElement"},
n2:{"^":"v;E:value%","%":"HTMLMeterElement"},
n3:{"^":"iH;",
iQ:function(a,b,c){return a.send(b,c)},
bY:function(a,b){return a.send(b)},
"%":"MIDIOutput"},
iH:{"^":"V;","%":"MIDIInput;MIDIPort"},
T:{"^":"jI;",
gbO:function(a){var z,y,x
if(!!a.offsetX)return new P.ak(a.offsetX,a.offsetY,[null])
else{if(!J.k(W.eX(a.target)).$isN)throw H.b(new P.u("offsetX is only supported on elements"))
z=W.eX(a.target)
y=[null]
x=new P.ak(a.clientX,a.clientY,y).U(0,J.fD(J.fE(z)))
return new P.ak(J.dn(x.a),J.dn(x.b),y)}},
"%":"WheelEvent;DragEvent|MouseEvent"},
ne:{"^":"j;",$isj:1,"%":"Navigator"},
aa:{"^":"aO;a",
gaC:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(new P.a4("No elements"))
if(y>1)throw H.b(new P.a4("More than one element"))
return z.firstChild},
C:function(a,b){this.a.appendChild(b)},
V:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
ag:function(a,b){var z,y,x
z=this.a
y=z.childNodes
if(b>=y.length)return H.a(y,b)
x=y[b]
z.removeChild(x)
return x},
A:function(a,b){return!1},
l:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.a(y,b)
z.replaceChild(c,y[b])},
gH:function(a){var z=this.a.childNodes
return new W.dL(z,z.length,-1,null)},
X:function(a,b,c,d,e){throw H.b(new P.u("Cannot setRange on Node list"))},
gi:function(a){return this.a.childNodes.length},
si:function(a,b){throw H.b(new P.u("Cannot set length on immutable List."))},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
$asaO:function(){return[W.t]},
$ash:function(){return[W.t]},
$asi:function(){return[W.t]}},
t:{"^":"V;cS:parentNode=,iC:previousSibling=",
giB:function(a){return new W.aa(a)},
a2:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
iI:function(a,b){var z,y
try{z=a.parentNode
J.fs(z,b,a)}catch(y){H.D(y)}return a},
fL:function(a){var z
for(;z=a.firstChild,z!=null;)a.removeChild(z)},
j:function(a){var z=a.nodeValue
return z==null?this.ff(a):z},
b3:function(a,b){return a.cloneNode(b)},
hk:function(a,b,c){return a.replaceChild(b,c)},
$ist:1,
$ise:1,
"%":"Document|HTMLDocument|XMLDocument;Node"},
nf:{"^":"i1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.ai(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(new P.u("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.u("Cannot resize immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$ish:1,
$ash:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$isY:1,
$asY:function(){return[W.t]},
$isS:1,
$asS:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
hX:{"^":"j+W;",
$ash:function(){return[W.t]},
$asi:function(){return[W.t]},
$ish:1,
$isi:1},
i1:{"^":"hX+bs;",
$ash:function(){return[W.t]},
$asi:function(){return[W.t]},
$ish:1,
$isi:1},
ng:{"^":"hL;cB:action=","%":"NotificationEvent"},
ni:{"^":"v;O:type}","%":"HTMLOListElement"},
nj:{"^":"v;p:height%,P:name=,O:type},m:width%","%":"HTMLObjectElement"},
nk:{"^":"v;E:value%","%":"HTMLOptionElement"},
nl:{"^":"v;P:name=,E:value%","%":"HTMLOutputElement"},
nm:{"^":"v;P:name=,E:value%","%":"HTMLParamElement"},
no:{"^":"T;p:height=,m:width=","%":"PointerEvent"},
np:{"^":"v;E:value%","%":"HTMLProgressElement"},
nq:{"^":"j;",
d7:function(a){return a.getBoundingClientRect()},
"%":"Range"},
nt:{"^":"v;O:type}","%":"HTMLScriptElement"},
nu:{"^":"v;i:length=,P:name=,E:value%","%":"HTMLSelectElement"},
nv:{"^":"hk;",
b3:function(a,b){return a.cloneNode(b)},
as:function(a){return a.cloneNode()},
"%":"ShadowRoot"},
nw:{"^":"v;P:name=","%":"HTMLSlotElement"},
nx:{"^":"v;O:type}","%":"HTMLSourceElement"},
ny:{"^":"ac;au:error=","%":"SpeechRecognitionError"},
nz:{"^":"v;O:type}","%":"HTMLStyleElement"},
js:{"^":"v;",
a0:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
z=W.hq("<table>"+H.c(b)+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.aa(y).V(0,J.fB(z))
return y},
"%":"HTMLTableElement"},
nD:{"^":"v;",
a0:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.u.a0(z.createElement("table"),b,c,d)
z.toString
z=new W.aa(z)
x=z.gaC(z)
x.toString
z=new W.aa(x)
w=z.gaC(z)
y.toString
w.toString
new W.aa(y).V(0,new W.aa(w))
return y},
"%":"HTMLTableRowElement"},
nE:{"^":"v;",
a0:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.c2(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.u.a0(z.createElement("table"),b,c,d)
z.toString
z=new W.aa(z)
x=z.gaC(z)
y.toString
x.toString
new W.aa(y).V(0,new W.aa(x))
return y},
"%":"HTMLTableSectionElement"},
ep:{"^":"v;",
bZ:function(a,b,c,d){var z
a.textContent=null
z=this.a0(a,b,c,d)
a.content.appendChild(z)},
ac:function(a,b){return this.bZ(a,b,null,null)},
$isep:1,
"%":"HTMLTemplateElement"},
nF:{"^":"v;P:name=,E:value%","%":"HTMLTextAreaElement"},
nG:{"^":"j;m:width=","%":"TextMetrics"},
jI:{"^":"ac;","%":"CompositionEvent|FocusEvent|KeyboardEvent|SVGZoomEvent|TextEvent|TouchEvent;UIEvent"},
nL:{"^":"iG;p:height%,m:width%","%":"HTMLVideoElement"},
c2:{"^":"V;",
ghG:function(a){var z,y
z=P.bh
y=new P.an(0,$.w,null,[z])
this.fW(a)
this.hl(a,W.f8(new W.jL(new P.l3(y,[z]))))
return y},
hl:function(a,b){return a.requestAnimationFrame(H.aW(b,1))},
fW:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isc2:1,
$isj:1,
$isV:1,
"%":"DOMWindow|Window"},
jL:{"^":"f:0;a",
$1:[function(a){var z=this.a.a
if(z.a!==0)H.B(new P.a4("Future already completed"))
z.bq(a)},null,null,2,0,null,24,"call"]},
nQ:{"^":"t;P:name=,dQ:namespaceURI=,E:value}","%":"Attr"},
nR:{"^":"j;cD:bottom=,p:height=,bb:left=,cY:right=,bh:top=,m:width=",
j:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
F:function(a,b){var z,y,x
if(b==null)return!1
z=J.k(b)
if(!z.$isay)return!1
y=a.left
x=z.gbb(b)
if(y==null?x==null:y===x){y=a.top
x=z.gbh(b)
if(y==null?x==null:y===x){y=a.width
x=z.gm(b)
if(y==null?x==null:y===x){y=a.height
z=z.gp(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gI:function(a){var z,y,x,w
z=J.a_(a.left)
y=J.a_(a.top)
x=J.a_(a.width)
w=J.a_(a.height)
return W.eP(W.aH(W.aH(W.aH(W.aH(0,z),y),x),w))},
gd4:function(a){return new P.ak(a.left,a.top,[null])},
$isay:1,
$asay:I.Q,
"%":"ClientRect"},
nS:{"^":"t;",$isj:1,"%":"DocumentType"},
nT:{"^":"hl;",
gp:function(a){return a.height},
gm:function(a){return a.width},
gq:function(a){return a.x},
sq:function(a,b){a.x=b},
gu:function(a){return a.y},
su:function(a,b){a.y=b},
"%":"DOMRect"},
nV:{"^":"v;",$isV:1,$isj:1,"%":"HTMLFrameSetElement"},
nY:{"^":"i2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.ai(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.b(new P.u("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.u("Cannot resize immutable List."))},
L:function(a,b){if(b>>>0!==b||b>=a.length)return H.a(a,b)
return a[b]},
$ish:1,
$ash:function(){return[W.t]},
$isi:1,
$asi:function(){return[W.t]},
$isY:1,
$asY:function(){return[W.t]},
$isS:1,
$asS:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
hY:{"^":"j+W;",
$ash:function(){return[W.t]},
$asi:function(){return[W.t]},
$ish:1,
$isi:1},
i2:{"^":"hY+bs;",
$ash:function(){return[W.t]},
$asi:function(){return[W.t]},
$ish:1,
$isi:1},
o1:{"^":"V;",$isV:1,$isj:1,"%":"ServiceWorker"},
jS:{"^":"e;ck:a<",
J:function(a,b){var z,y,x,w,v
for(z=this.gab(),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gab:function(){var z,y,x,w,v,u
z=this.a.attributes
y=H.p([],[P.q])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=z[w]
u=J.m(v)
if(u.gdQ(v)==null)y.push(u.gP(v))}return y},
gD:function(a){return this.gab().length===0},
gT:function(a){return this.gab().length!==0},
$isI:1,
$asI:function(){return[P.q,P.q]}},
k5:{"^":"jS;a",
M:function(a){return this.a.hasAttribute(a)},
h:function(a,b){return this.a.getAttribute(b)},
l:function(a,b,c){this.a.setAttribute(b,c)},
A:function(a,b){var z,y
z=this.a
y=z.getAttribute(b)
z.removeAttribute(b)
return y},
gi:function(a){return this.gab().length}},
kF:{"^":"aM;a,b",
W:function(){var z=P.a2(null,null,null,P.q)
C.a.J(this.b,new W.kI(z))
return z},
bS:function(a){var z,y
z=a.bM(0," ")
for(y=this.a,y=new H.bT(y,y.gi(y),0,null);y.n();)J.fN(y.d,z)},
cO:function(a){C.a.J(this.b,new W.kH(a))},
A:function(a,b){return C.a.i9(this.b,!1,new W.kJ(b))},
w:{
kG:function(a){return new W.kF(a,new H.b6(a,new W.lv(),[H.F(a,0),null]).aL(0))}}},
lv:{"^":"f:16;",
$1:[function(a){return J.cj(a)},null,null,2,0,null,0,"call"]},
kI:{"^":"f:7;a",
$1:function(a){return this.a.V(0,a.W())}},
kH:{"^":"f:7;a",
$1:function(a){return a.cO(this.a)}},
kJ:{"^":"f:17;a",
$2:function(a,b){return J.fI(b,this.a)===!0||a===!0}},
k6:{"^":"aM;ck:a<",
W:function(){var z,y,x,w,v
z=P.a2(null,null,null,P.q)
for(y=this.a.className.split(" "),x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=J.cl(y[w])
if(v.length!==0)z.C(0,v)}return z},
bS:function(a){this.a.className=a.bM(0," ")},
gi:function(a){return this.a.classList.length},
gD:function(a){return this.a.classList.length===0},
gT:function(a){return this.a.classList.length!==0},
K:function(a,b){return typeof b==="string"&&this.a.classList.contains(b)},
C:function(a,b){var z,y
z=this.a.classList
y=z.contains(b)
z.add(b)
return!y},
A:function(a,b){var z,y
z=this.a.classList
y=z.contains(b)
z.remove(b)
return y}},
eJ:{"^":"ad;a,b,c,$ti",
a1:function(a,b,c,d){return W.K(this.a,this.b,a,!1,H.F(this,0))},
bc:function(a,b,c){return this.a1(a,null,b,c)}},
am:{"^":"eJ;a,b,c,$ti"},
aP:{"^":"ad;a,b,c,$ti",
a1:function(a,b,c,d){var z,y,x,w
z=H.F(this,0)
y=this.$ti
x=new W.kY(null,new H.a1(0,null,null,null,null,null,0,[[P.ad,z],[P.ek,z]]),y)
x.a=new P.c6(null,x.ghO(x),0,null,null,null,null,y)
for(z=this.a,z=new H.bT(z,z.gi(z),0,null),w=this.c;z.n();)x.C(0,new W.eJ(z.d,w,!1,y))
z=x.a
z.toString
return new P.jT(z,[H.F(z,0)]).a1(a,b,c,d)},
az:function(a){return this.a1(a,null,null,null)},
bc:function(a,b,c){return this.a1(a,null,b,c)}},
k9:{"^":"ek;a,b,c,d,e,$ti",
aI:function(){if(this.b==null)return
this.e2()
this.b=null
this.d=null
return},
be:function(a,b){if(this.b==null)return;++this.a
this.e2()},
cT:function(a){return this.be(a,null)},
gba:function(){return this.a>0},
cX:function(){if(this.b==null||this.a<=0)return;--this.a
this.e0()},
e0:function(){var z=this.d
if(z!=null&&this.a<=0)J.fu(this.b,this.c,z,!1)},
e2:function(){var z=this.d
if(z!=null)J.fJ(this.b,this.c,z,!1)},
fB:function(a,b,c,d,e){this.e0()},
w:{
K:function(a,b,c,d,e){var z=c==null?null:W.f8(new W.ka(c))
z=new W.k9(0,a,b,z,!1,[e])
z.fB(a,b,c,!1,e)
return z}}},
ka:{"^":"f:0;a",
$1:[function(a){return this.a.$1(a)},null,null,2,0,null,0,"call"]},
kY:{"^":"e;a,b,$ti",
C:function(a,b){var z,y
z=this.b
if(z.M(b))return
y=this.a
z.l(0,b,b.bc(y.ghB(y),new W.kZ(this,b),y.ghD()))},
A:function(a,b){var z=this.b.A(0,b)
if(z!=null)z.aI()},
eg:[function(a){var z,y
for(z=this.b,y=z.gd5(z),y=y.gH(y);y.n();)y.gt().aI()
z.a7(0)
this.a.eg(0)},"$0","ghO",0,0,1]},
kZ:{"^":"f:2;a,b",
$0:function(){return this.a.A(0,this.b)}},
cW:{"^":"e;eR:a<",
aG:function(a){return $.$get$eO().K(0,W.b3(a))},
ar:function(a,b,c){var z,y,x
z=W.b3(a)
y=$.$get$cX()
x=y.h(0,H.c(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
fE:function(a){var z,y
z=$.$get$cX()
if(z.gD(z)){for(y=0;y<262;++y)z.l(0,C.I[y],W.lD())
for(y=0;y<12;++y)z.l(0,C.k[y],W.lE())}},
w:{
eN:function(a){var z,y
z=W.dp(null)
y=window.location
z=new W.cW(new W.kS(z,y))
z.fE(a)
return z},
nW:[function(a,b,c,d){return!0},"$4","lD",8,0,8,12,7,2,13],
nX:[function(a,b,c,d){var z,y,x,w,v
z=d.geR()
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
return z},"$4","lE",8,0,8,12,7,2,13]}},
bs:{"^":"e;$ti",
gH:function(a){return new W.dL(a,this.gi(a),-1,null)},
C:function(a,b){throw H.b(new P.u("Cannot add to immutable List."))},
ag:function(a,b){throw H.b(new P.u("Cannot remove from immutable List."))},
A:function(a,b){throw H.b(new P.u("Cannot remove from immutable List."))},
X:function(a,b,c,d,e){throw H.b(new P.u("Cannot setRange on immutable List."))},
$ish:1,
$ash:null,
$isi:1,
$asi:null},
e0:{"^":"e;a",
C:function(a,b){this.a.push(b)},
aG:function(a){return C.a.e8(this.a,new W.iM(a))},
ar:function(a,b,c){return C.a.e8(this.a,new W.iL(a,b,c))}},
iM:{"^":"f:0;a",
$1:function(a){return a.aG(this.a)}},
iL:{"^":"f:0;a,b,c",
$1:function(a){return a.ar(this.a,this.b,this.c)}},
kT:{"^":"e;eR:d<",
aG:function(a){return this.a.K(0,W.b3(a))},
ar:["fo",function(a,b,c){var z,y
z=W.b3(a)
y=this.c
if(y.K(0,H.c(z)+"::"+b))return this.d.hF(c)
else if(y.K(0,"*::"+b))return this.d.hF(c)
else{y=this.b
if(y.K(0,H.c(z)+"::"+b))return!0
else if(y.K(0,"*::"+b))return!0
else if(y.K(0,H.c(z)+"::*"))return!0
else if(y.K(0,"*::*"))return!0}return!1}],
fF:function(a,b,c,d){var z,y,x
this.a.V(0,c)
z=b.d6(0,new W.kU())
y=b.d6(0,new W.kV())
this.b.V(0,z)
x=this.c
x.V(0,C.i)
x.V(0,y)}},
kU:{"^":"f:0;",
$1:function(a){return!C.a.K(C.k,a)}},
kV:{"^":"f:0;",
$1:function(a){return C.a.K(C.k,a)}},
l4:{"^":"kT;e,a,b,c,d",
ar:function(a,b,c){if(this.fo(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.dh(a).a.getAttribute("template")==="")return this.e.K(0,b)
return!1},
w:{
eT:function(){var z=P.q
z=new W.l4(P.dT(C.j,z),P.a2(null,null,null,z),P.a2(null,null,null,z),P.a2(null,null,null,z),null)
z.fF(null,new H.b6(C.j,new W.l5(),[H.F(C.j,0),null]),["TEMPLATE"],null)
return z}}},
l5:{"^":"f:0;",
$1:[function(a){return"TEMPLATE::"+H.c(a)},null,null,2,0,null,25,"call"]},
l_:{"^":"e;",
aG:function(a){var z=J.k(a)
if(!!z.$isef)return!1
z=!!z.$isz
if(z&&W.b3(a)==="foreignObject")return!1
if(z)return!0
return!1},
ar:function(a,b,c){if(b==="is"||C.e.f9(b,"on"))return!1
return this.aG(a)}},
dL:{"^":"e;a,b,c,d",
n:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.a7(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gt:function(){return this.d}},
k_:{"^":"e;a",
e6:function(a,b,c,d){return H.B(new P.u("You can only attach EventListeners to your own window."))},
eH:function(a,b,c,d){return H.B(new P.u("You can only attach EventListeners to your own window."))},
$isV:1,
$isj:1,
w:{
k0:function(a){if(a===window)return a
else return new W.k_(a)}}},
e_:{"^":"e;"},
kS:{"^":"e;a,b"},
eU:{"^":"e;a",
da:function(a){new W.l7(this).$2(a,null)},
aZ:function(a,b){var z
if(b==null){z=a.parentNode
if(z!=null)z.removeChild(a)}else b.removeChild(a)},
hq:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.dh(a)
x=y.gck().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.D(t)}v="element unprintable"
try{v=J.C(a)}catch(t){H.D(t)}try{u=W.b3(a)
this.hp(a,b,z,v,u,y,x)}catch(t){if(H.D(t) instanceof P.as)throw t
else{this.aZ(a,b)
window
s="Removing corrupted element "+H.c(v)
if(typeof console!="undefined")console.warn(s)}}},
hp:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aZ(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(z)
return}if(!this.a.aG(a)){this.aZ(a,b)
window
z="Removing disallowed element <"+H.c(e)+"> from "+J.C(b)
if(typeof console!="undefined")console.warn(z)
return}if(g!=null)if(!this.a.ar(a,"is",g)){this.aZ(a,b)
window
z="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(z)
return}z=f.gab()
y=H.p(z.slice(0),[H.F(z,0)])
for(x=f.gab().length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.a(y,x)
w=y[x]
if(!this.a.ar(a,J.fS(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.c(e)+" "+H.c(w)+'="'+H.c(z.getAttribute(w))+'">'
if(typeof console!="undefined")console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.k(a).$isep)this.da(a.content)}},
l7:{"^":"f:18;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.hq(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aZ(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fC(z)}catch(w){H.D(w)
v=z
if(x){u=J.m(v)
if(u.gcS(v)!=null){u.gcS(v)
u.gcS(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}}}],["","",,P,{"^":"",
dG:function(){var z=$.dF
if(z==null){z=J.ci(window.navigator.userAgent,"Opera",0)
$.dF=z}return z},
hi:function(){var z,y
z=$.dC
if(z!=null)return z
y=$.dD
if(y==null){y=J.ci(window.navigator.userAgent,"Firefox",0)
$.dD=y}if(y)z="-moz-"
else{y=$.dE
if(y==null){y=P.dG()!==!0&&J.ci(window.navigator.userAgent,"Trident/",0)
$.dE=y}if(y)z="-ms-"
else z=P.dG()===!0?"-o-":"-webkit-"}$.dC=z
return z},
aM:{"^":"e;",
cA:function(a){if($.$get$dB().b.test(H.fe(a)))return a
throw H.b(P.cm(a,"value","Not a valid class token"))},
j:function(a){return this.W().bM(0," ")},
gH:function(a){var z,y
z=this.W()
y=new P.bD(z,z.r,null,null)
y.c=z.e
return y},
af:function(a,b){var z=this.W()
return new H.cv(z,b,[H.F(z,0),null])},
gD:function(a){return this.W().a===0},
gT:function(a){return this.W().a!==0},
gi:function(a){return this.W().a},
K:function(a,b){if(typeof b!=="string")return!1
this.cA(b)
return this.W().K(0,b)},
cM:function(a){return this.K(0,a)?a:null},
C:function(a,b){this.cA(b)
return this.cO(new P.hb(b))},
A:function(a,b){var z,y
this.cA(b)
z=this.W()
y=z.A(0,b)
this.bS(z)
return y},
L:function(a,b){return this.W().L(0,b)},
cO:function(a){var z,y
z=this.W()
y=a.$1(z)
this.bS(z)
return y},
$isi:1,
$asi:function(){return[P.q]}},
hb:{"^":"f:0;a",
$1:function(a){return a.C(0,this.a)}},
hM:{"^":"aO;a,b",
gap:function(){var z,y
z=this.b
y=H.H(z,"W",0)
return new H.bU(new H.cS(z,new P.hN(),[y]),new P.hO(),[y,null])},
l:function(a,b,c){var z=this.gap()
J.fK(z.b.$1(J.b_(z.a,b)),c)},
si:function(a,b){var z=J.a0(this.gap().a)
if(b>=z)return
else if(b<0)throw H.b(P.aA("Invalid list length"))
this.iH(0,b,z)},
C:function(a,b){this.b.a.appendChild(b)},
X:function(a,b,c,d,e){throw H.b(new P.u("Cannot setRange on filtered list"))},
iH:function(a,b,c){var z=this.gap()
z=H.jk(z,b,H.H(z,"R",0))
C.a.J(P.av(H.jt(z,c-b,H.H(z,"R",0)),!0,null),new P.hP())},
a7:function(a){J.df(this.b.a)},
ag:function(a,b){var z,y
z=this.gap()
y=z.b.$1(J.b_(z.a,b))
J.bl(y)
return y},
A:function(a,b){return!1},
gi:function(a){return J.a0(this.gap().a)},
h:function(a,b){var z=this.gap()
return z.b.$1(J.b_(z.a,b))},
gH:function(a){var z=P.av(this.gap(),!1,W.N)
return new J.cn(z,z.length,0,null)},
$asaO:function(){return[W.N]},
$ash:function(){return[W.N]},
$asi:function(){return[W.N]}},
hN:{"^":"f:0;",
$1:function(a){return!!J.k(a).$isN}},
hO:{"^":"f:0;",
$1:[function(a){return H.cb(a,"$isN")},null,null,2,0,null,26,"call"]},
hP:{"^":"f:0;",
$1:function(a){return J.bl(a)}}}],["","",,P,{"^":"",cH:{"^":"j;",$iscH:1,"%":"IDBKeyRange"}}],["","",,P,{"^":"",
l9:[function(a,b,c,d){var z,y,x
if(b===!0){z=[c]
C.a.V(z,d)
d=z}y=P.av(J.dl(d,P.lR()),!0,null)
x=H.iW(a,y)
return P.eZ(x)},null,null,8,0,null,27,28,29,30],
d0:function(a,b,c){var z
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(z){H.D(z)}return!1},
f0:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
eZ:[function(a){var z
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=J.k(a)
if(!!z.$isbx)return a.a
if(!!z.$iscp||!!z.$isac||!!z.$iscH||!!z.$iscB||!!z.$ist||!!z.$isa9||!!z.$isc2)return a
if(!!z.$isb2)return H.X(a)
if(!!z.$iscA)return P.f_(a,"$dart_jsFunction",new P.lb())
return P.f_(a,"_$dart_jsObject",new P.lc($.$get$d_()))},"$1","lS",2,0,0,14],
f_:function(a,b,c){var z=P.f0(a,b)
if(z==null){z=c.$1(a)
P.d0(a,b,z)}return z},
eY:[function(a){var z,y
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else{if(a instanceof Object){z=J.k(a)
z=!!z.$iscp||!!z.$isac||!!z.$iscH||!!z.$iscB||!!z.$ist||!!z.$isa9||!!z.$isc2}else z=!1
if(z)return a
else if(a instanceof Date){z=0+a.getTime()
y=new P.b2(z,!1)
y.dg(z,!1)
return y}else if(a.constructor===$.$get$d_())return a.o
else return P.f7(a)}},"$1","lR",2,0,22,14],
f7:function(a){if(typeof a=="function")return P.d1(a,$.$get$bM(),new P.ll())
if(a instanceof Array)return P.d1(a,$.$get$cV(),new P.lm())
return P.d1(a,$.$get$cV(),new P.ln())},
d1:function(a,b,c){var z=P.f0(a,b)
if(z==null||!(a instanceof Object)){z=c.$1(a)
P.d0(a,b,z)}return z},
bx:{"^":"e;a",
h:["fi",function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.b(P.aA("property is not a String or num"))
return P.eY(this.a[b])}],
l:["dd",function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.b(P.aA("property is not a String or num"))
this.a[b]=P.eZ(c)}],
gI:function(a){return 0},
F:function(a,b){if(b==null)return!1
return b instanceof P.bx&&this.a===b.a},
j:function(a){var z,y
try{z=String(this.a)
return z}catch(y){H.D(y)
z=this.fk(this)
return z}},
bG:function(a,b){var z,y
z=this.a
y=b==null?null:P.av(new H.b6(b,P.lS(),[H.F(b,0),null]),!0,null)
return P.eY(z[a].apply(z,y))}},
iq:{"^":"bx;a"},
io:{"^":"it;a,$ti",
fK:function(a){var z
if(typeof a==="number"&&Math.floor(a)===a)z=a<0||a>=this.gi(this)
else z=!1
if(z)throw H.b(P.G(a,0,this.gi(this),null,null))},
h:function(a,b){var z
if(typeof b==="number"&&b===C.d.d3(b)){if(typeof b==="number"&&Math.floor(b)===b)z=b<0||b>=this.gi(this)
else z=!1
if(z)H.B(P.G(b,0,this.gi(this),null,null))}return this.fi(0,b)},
l:function(a,b,c){var z
if(typeof b==="number"&&b===C.d.d3(b)){if(typeof b==="number"&&Math.floor(b)===b)z=b<0||b>=this.gi(this)
else z=!1
if(z)H.B(P.G(b,0,this.gi(this),null,null))}this.dd(0,b,c)},
gi:function(a){var z=this.a.length
if(typeof z==="number"&&z>>>0===z)return z
throw H.b(new P.a4("Bad JsArray length"))},
si:function(a,b){this.dd(0,"length",b)},
C:function(a,b){this.bG("push",[b])},
ag:function(a,b){this.fK(b)
return J.a7(this.bG("splice",[b,1]),0)},
X:function(a,b,c,d,e){var z,y
P.ip(b,c,this.gi(this))
z=c-b
if(z===0)return
y=[b,z]
C.a.V(y,new H.cO(d,e,null,[H.H(d,"W",0)]).iL(0,z))
this.bG("splice",y)},
w:{
ip:function(a,b,c){if(a>c)throw H.b(P.G(a,0,c,null,null))
if(b<a||b>c)throw H.b(P.G(b,a,c,null,null))}}},
it:{"^":"bx+W;",$ash:null,$asi:null,$ish:1,$isi:1},
lb:{"^":"f:0;",
$1:function(a){var z=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.l9,a,!1)
P.d0(z,$.$get$bM(),a)
return z}},
lc:{"^":"f:0;a",
$1:function(a){return new this.a(a)}},
ll:{"^":"f:0;",
$1:function(a){return new P.iq(a)}},
lm:{"^":"f:0;",
$1:function(a){return new P.io(a,[null])}},
ln:{"^":"f:0;",
$1:function(a){return new P.bx(a)}}}],["","",,P,{"^":"",
ba:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eQ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ak:{"^":"e;q:a>,u:b>,$ti",
j:function(a){return"Point("+H.c(this.a)+", "+H.c(this.b)+")"},
F:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ak))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gI:function(a){var z,y
z=J.a_(this.a)
y=J.a_(this.b)
return P.eQ(P.ba(P.ba(0,z),y))},
v:function(a,b){var z,y,x,w
z=this.a
y=J.m(b)
x=y.gq(b)
if(typeof z!=="number")return z.v()
if(typeof x!=="number")return H.l(x)
w=this.b
y=y.gu(b)
if(typeof w!=="number")return w.v()
if(typeof y!=="number")return H.l(y)
return new P.ak(z+x,w+y,this.$ti)},
U:function(a,b){var z,y,x,w
z=this.a
y=J.m(b)
x=y.gq(b)
if(typeof z!=="number")return z.U()
if(typeof x!=="number")return H.l(x)
w=this.b
y=y.gu(b)
if(typeof w!=="number")return w.U()
if(typeof y!=="number")return H.l(y)
return new P.ak(z-x,w-y,this.$ti)},
G:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.G()
if(typeof b!=="number")return H.l(b)
y=this.b
if(typeof y!=="number")return y.G()
return new P.ak(z*b,y*b,this.$ti)}},
kN:{"^":"e;$ti",
gcY:function(a){var z,y
z=this.a
y=this.c
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.l(y)
return z+y},
gcD:function(a){var z,y
z=this.b
y=this.d
if(typeof z!=="number")return z.v()
if(typeof y!=="number")return H.l(y)
return z+y},
j:function(a){return"Rectangle ("+H.c(this.a)+", "+H.c(this.b)+") "+H.c(this.c)+" x "+H.c(this.d)},
F:function(a,b){var z,y,x,w
if(b==null)return!1
z=J.k(b)
if(!z.$isay)return!1
y=this.a
x=z.gbb(b)
if(y==null?x==null:y===x){x=this.b
w=z.gbh(b)
if(x==null?w==null:x===w){w=this.c
if(typeof y!=="number")return y.v()
if(typeof w!=="number")return H.l(w)
if(y+w===z.gcY(b)){y=this.d
if(typeof x!=="number")return x.v()
if(typeof y!=="number")return H.l(y)
z=x+y===z.gcD(b)}else z=!1}else z=!1}else z=!1
return z},
gI:function(a){var z,y,x,w,v,u
z=this.a
y=J.a_(z)
x=this.b
w=J.a_(x)
v=this.c
if(typeof z!=="number")return z.v()
if(typeof v!=="number")return H.l(v)
u=this.d
if(typeof x!=="number")return x.v()
if(typeof u!=="number")return H.l(u)
return P.eQ(P.ba(P.ba(P.ba(P.ba(0,y),w),z+v&0x1FFFFFFF),x+u&0x1FFFFFFF))},
gd4:function(a){return new P.ak(this.a,this.b,this.$ti)}},
ay:{"^":"kN;bb:a>,bh:b>,m:c>,p:d>,$ti",$asay:null,w:{
jb:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.aj()
if(c<0)z=-c*0
else z=c
if(typeof d!=="number")return d.aj()
if(d<0)y=-d*0
else y=d
return new P.ay(a,b,z,y,[e])}}}}],["","",,P,{"^":"",m7:{"^":"aN;",$isj:1,"%":"SVGAElement"},m8:{"^":"z;",$isj:1,"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGSetElement"},mk:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEBlendElement"},ml:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEColorMatrixElement"},mm:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEComponentTransferElement"},mn:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFECompositeElement"},mo:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEConvolveMatrixElement"},mp:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEDiffuseLightingElement"},mq:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEDisplacementMapElement"},mr:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEFloodElement"},ms:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEGaussianBlurElement"},mt:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEImageElement"},mu:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEMergeElement"},mv:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEMorphologyElement"},mw:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFEOffsetElement"},mx:{"^":"z;q:x=,u:y=","%":"SVGFEPointLightElement"},my:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFESpecularLightingElement"},mz:{"^":"z;q:x=,u:y=","%":"SVGFESpotLightElement"},mA:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFETileElement"},mB:{"^":"z;p:height=,N:result=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFETurbulenceElement"},mD:{"^":"z;p:height=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGFilterElement"},mE:{"^":"aN;p:height=,m:width=,q:x=,u:y=","%":"SVGForeignObjectElement"},hQ:{"^":"aN;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aN:{"^":"z;",$isj:1,"%":"SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},mJ:{"^":"aN;p:height=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGImageElement"},b4:{"^":"j;",$ise:1,"%":"SVGLength"},mT:{"^":"i3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.ai(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(new P.u("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.u("Cannot resize immutable List."))},
L:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.b4]},
$isi:1,
$asi:function(){return[P.b4]},
"%":"SVGLengthList"},hZ:{"^":"j+W;",
$ash:function(){return[P.b4]},
$asi:function(){return[P.b4]},
$ish:1,
$isi:1},i3:{"^":"hZ+bs;",
$ash:function(){return[P.b4]},
$asi:function(){return[P.b4]},
$ish:1,
$isi:1},mX:{"^":"z;",$isj:1,"%":"SVGMarkerElement"},mY:{"^":"z;p:height=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGMaskElement"},b8:{"^":"j;",$ise:1,"%":"SVGNumber"},nh:{"^":"i4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.ai(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.b(new P.u("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.u("Cannot resize immutable List."))},
L:function(a,b){return this.h(a,b)},
$ish:1,
$ash:function(){return[P.b8]},
$isi:1,
$asi:function(){return[P.b8]},
"%":"SVGNumberList"},i_:{"^":"j+W;",
$ash:function(){return[P.b8]},
$asi:function(){return[P.b8]},
$ish:1,
$isi:1},i4:{"^":"i_+bs;",
$ash:function(){return[P.b8]},
$asi:function(){return[P.b8]},
$ish:1,
$isi:1},nn:{"^":"z;p:height=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGPatternElement"},nr:{"^":"hQ;p:height=,m:width=,q:x=,u:y=","%":"SVGRectElement"},ef:{"^":"z;O:type}",$isef:1,$isj:1,"%":"SVGScriptElement"},nA:{"^":"z;O:type}","%":"SVGStyleElement"},fV:{"^":"aM;a",
W:function(){var z,y,x,w,v,u
z=this.a.getAttribute("class")
y=P.a2(null,null,null,P.q)
if(z==null)return y
for(x=z.split(" "),w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v){u=J.cl(x[v])
if(u.length!==0)y.C(0,u)}return y},
bS:function(a){this.a.setAttribute("class",a.bM(0," "))}},z:{"^":"N;",
gcE:function(a){return new P.fV(a)},
gef:function(a){return new P.hM(a,new W.aa(a))},
seu:function(a,b){this.ac(a,b)},
a0:function(a,b,c,d){var z,y,x,w,v,u
z=H.p([],[W.e_])
z.push(W.eN(null))
z.push(W.eT())
z.push(new W.l_())
c=new W.eU(new W.e0(z))
y='<svg version="1.1">'+H.c(b)+"</svg>"
z=document
x=z.body
w=(x&&C.n).hR(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.aa(w)
u=z.gaC(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
el:function(a){return a.focus()},
gbP:function(a){return new W.am(a,"change",!1,[W.ac])},
gcR:function(a){return new W.am(a,"input",!1,[W.ac])},
geA:function(a){return new W.am(a,"mousedown",!1,[W.T])},
geB:function(a){return new W.am(a,"mousemove",!1,[W.T])},
geC:function(a){return new W.am(a,"mouseup",!1,[W.T])},
$isz:1,
$isV:1,
$isj:1,
"%":"SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGMetadataElement|SVGStopElement|SVGTitleElement;SVGElement"},nB:{"^":"aN;p:height=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGSVGElement"},nC:{"^":"z;",$isj:1,"%":"SVGSymbolElement"},eq:{"^":"aN;","%":";SVGTextContentElement"},nH:{"^":"eq;",$isj:1,"%":"SVGTextPathElement"},nI:{"^":"eq;q:x=,u:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},nK:{"^":"aN;p:height=,m:width=,q:x=,u:y=",$isj:1,"%":"SVGUseElement"},nM:{"^":"z;",$isj:1,"%":"SVGViewElement"},nU:{"^":"z;",$isj:1,"%":"SVGGradientElement|SVGLinearGradientElement|SVGRadialGradientElement"},nZ:{"^":"z;",$isj:1,"%":"SVGCursorElement"},o_:{"^":"z;",$isj:1,"%":"SVGFEDropShadowElement"},o0:{"^":"z;",$isj:1,"%":"SVGMPathElement"}}],["","",,P,{"^":""}],["","",,P,{"^":"",ns:{"^":"j;",$isj:1,"%":"WebGL2RenderingContext"}}],["","",,P,{"^":""}],["","",,U,{"^":"",
h4:function(a,b){var z
if($.bo==null){z=new H.a1(0,null,null,null,null,null,0,[P.q,U.ct])
$.bo=z
z.l(0,"NetLogo",new U.iI("  "))
$.bo.l(0,"plain",new U.iT("  "))}if($.bo.M(a))return $.bo.h(0,a).dH(b)
else return C.h.ej(b)},
mM:[function(a,b){var z,y
if($.$get$ao().h(0,a) instanceof U.dw){z=$.$get$ao().h(0,a)
C.a.si(z.a,0)
C.a.si(z.r,0)
C.a.A(z.db.c,z)}y=C.h.hS(b)
if(!!J.k(y).$isI){$.$get$ao().l(0,a,U.h5(a,y))
$.$get$ao().h(0,a).Y()}},"$2","lW",4,0,23,3,32],
mL:[function(a,b){if($.$get$ao().M(a))return U.h4(b,$.$get$ao().h(0,a).bI())
return},"$2","lV",4,0,24,3,23],
mN:[function(a){var z
if($.$get$ao().M(a)){z=$.$get$ao().h(0,a).x
z.l(0,"program",$.$get$ao().h(0,a).bI())
return C.h.ej(z)}},"$1","lX",2,0,25,3],
o8:[function(){var z=$.$get$d5()
J.bI(z,"NetTango_InitWorkspace",U.lW())
J.bI(z,"NetTango_ExportCode",U.lV())
J.bI(z,"NetTango_Save",U.lX())},"$0","fj",0,0,1],
dc:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{z=H.eb(a,null,null)
return z}catch(y){if(!!J.k(H.D(y)).$isbN)return b
else throw y}return b},
aq:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{z=P.fk(a,null)
return z}catch(y){if(!!J.k(H.D(y)).$isbN)return b
else throw y}return b},
cg:function(a,b){if(a==null)return b
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
bn:{"^":"e;a,cB:b>,O:c',d,q:e*,u:f*,m:r>,x,Z:y@,bQ:z@,es:Q<,ch,eE:cx<,eG:cy<,db,dx,dy,fr,fx,fy,eq:go<,dD:id<,k1,k2,k3,k4,dN:r1<,e4:r2<",
gp:function(a){return this.r1?$.$get$o():this.x},
gb7:function(){return 0},
gaK:function(){return 0},
gb6:function(){return this.y!=null},
gep:function(){return this.z!=null},
gbi:function(){return this.f},
geb:function(){var z=this.f
return J.d(z,this.r1?$.$get$o():this.x)},
gb1:function(){var z=this.y
return z!=null?z.gb1():this},
gbN:function(){var z=this.y
if(!(z!=null)){z=this.ch
z=z!=null?z.rx:null}return z},
gew:function(){return this.z==null},
as:function(a){var z=U.fX(this.fy,this.b)
this.cb(z)
return z},
cb:function(a){var z,y,x,w
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
for(z=this.cx,y=z.length,x=a.cx,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x.push(J.dg(z[w],a))
for(z=this.cy,y=z.length,x=a.cy,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)x.push(J.dg(z[w],a))},
S:function(){var z,y,x,w,v,u
z=P.bS()
z.l(0,"id",this.a)
z.l(0,"action",this.b)
z.l(0,"type",this.c)
z.l(0,"format",this.d)
z.l(0,"start",this.go)
z.l(0,"required",this.fx)
y=this.e
x=$.$get$co()
z.l(0,"x",J.ch(y,x))
z.l(0,"y",J.ch(this.f,x))
y=this.cx
if(y.length!==0){z.l(0,"params",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=y[w]
J.ar(z.h(0,"params"),v.S())}}y=this.cy
if(y.length!==0){z.l(0,"properties",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){u=y[w]
J.ar(z.h(0,"properties"),u.S())}}return z},
bI:function(){var z=[]
this.a5(z)
return z},
a5:function(a){var z
J.ar(a,this.S())
z=this.y
if(z!=null)z.a5(a)},
bz:function(a,b){var z,y,x,w,v,u,t,s,r
z=$.$get$ab()
y=this.dI(a)
x=$.$get$O()
if(typeof x!=="number")return x.G()
if(typeof y!=="number")return y.v()
this.r=Math.max(H.bG(z),y+x*2)
if(!this.r1&&this.cx.length!==0)for(z=this.cx,y=z.length,w=0,v=0;v<z.length;z.length===y||(0,H.A)(z),++v){u=z[v]
u.by(a)
t=J.d(J.dj(u),x)
if(typeof t!=="number")return H.l(t)
w+=t}else w=0
if(!this.r1&&this.cy.length!==0)for(z=this.cy,y=z.length,s=0,v=0;v<z.length;z.length===y||(0,H.A)(z),++v)s=Math.max(s,z[v].hm(a))
else s=0
z=J.d(this.e,s)
y=J.d(J.d(this.e,this.r),w)
y=Math.max(H.bG(z),H.bG(y))
b=Math.max(H.bG(b),y)
r=this.gbN()
if(r!=null)b=r.bz(a,b)
z=this.e
if(typeof z!=="number")return H.l(z)
this.r=b-z
return b},
a6:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a6(a+this.gaK(),b)},
b_:["fd",function(){var z,y,x,w,v
z=this.y
if(z!=null){y=this.f
J.fR(z,J.d(y,this.r1?$.$get$o():this.x))
z=this.y
y=this.e
x=z.ges()
w=this.Q
if(typeof x!=="number")return x.U()
v=$.$get$aB()
if(typeof v!=="number")return H.l(v)
J.fQ(z,J.d(y,(x-w)*v))
this.y.b_()}}],
dI:function(a){var z,y
z=J.m(a)
z.a_(a)
z.saJ(a,this.fr)
y=z.cN(a,this.b).width
z.a3(a)
return y},
bE:function(a){var z,y,x
if(this.id){z=this.e
y=this.k1
x=this.k3
if(typeof y!=="number")return y.U()
if(typeof x!=="number")return H.l(x)
this.e=J.d(z,y-x)
x=this.f
y=this.k2
z=this.k4
if(typeof y!=="number")return y.U()
if(typeof z!=="number")return H.l(z)
this.f=J.d(x,y-z)
this.k3=this.k1
this.k4=this.k2}return this.id},
cd:function(a){var z,y,x,w,v
z=J.m(a)
z.a_(a)
z.sav(a,this.dx)
z.saJ(a,this.fr)
z.sd1(a,"left")
z.sd2(a,"middle")
y=this.b
x=J.d(this.e,$.$get$O())
w=this.f
v=$.$get$o()
if(typeof v!=="number")return v.ai()
z.cJ(a,y,x,J.d(w,v/2))
z.a3(a)},
ce:function(a){var z,y
z=J.m(a)
z.a_(a)
this.cq(a)
z.sc1(a,this.dy)
y=$.$get$U()
if(typeof y!=="number")return H.l(y)
z.scL(a,0.5*y)
z.siw(a,"round")
z.c0(a)
z.a3(a)},
cc:function(a){var z=J.m(a)
z.a_(a)
this.cq(a)
z.sav(a,this.db)
z.cI(a)
z.sav(a,"rgba(0, 0, 0, "+H.c(Math.min(1,0.075*this.Q)))
z.cI(a)
z.a3(a)},
fT:function(a){var z,y,x,w
z=J.m(a)
z.a_(a)
z.scL(a,5)
z.sc1(a,"cyan")
z.aH(a)
y=J.d(this.e,$.$get$O())
x=$.$get$aB()
w=this.gb7()
if(typeof x!=="number")return x.G()
z.bd(a,J.d(y,x*w),this.f)
this.cs(a,this.z==null&&this.go)
z.c0(a)
z.a3(a)},
fQ:function(a){var z,y,x
z=J.m(a)
z.a_(a)
z.scL(a,5)
z.sc1(a,"cyan")
z.aH(a)
y=J.r(J.d(this.e,this.r),$.$get$O())
x=this.f
z.bd(a,y,J.d(x,this.r1?$.$get$o():this.x))
this.cr(a,this.y==null&&this.Q===0)
z.c0(a)
z.a3(a)},
fR:function(a){var z,y,x,w,v
z=this.r
for(y=this.cx,x=y.length-1;x>=0;--x){w=$.$get$O()
if(x>=y.length)return H.a(y,x)
v=J.dj(y[x])
if(typeof w!=="number")return w.v()
if(typeof v!=="number")return H.l(v)
if(typeof z!=="number")return z.U()
z-=w+v
if(x>=y.length)return H.a(y,x)
y[x].cH(a,z)}},
fS:function(a){var z,y,x,w
for(z=this.cy,y=0;y<z.length;y=w){x=$.$get$o()
w=y+1
if(typeof x!=="number")return x.G()
z[y].i2(a,x*w)}},
cq:["fc",function(a){var z,y,x,w,v,u
z=J.m(a)
z.aH(a)
y=this.e
x=$.$get$O()
z.bd(a,J.d(y,x),this.f)
this.cs(a,this.z==null&&this.go)
y=this.Q===0
w=y&&this.z==null
this.dR(a,w,y&&this.y==null)
this.cr(a,this.y==null&&this.Q===0)
if(this.Q<=0)y=this.z!=null&&this.y!=null
else y=!0
if(y){y=this.e
w=this.f
z.B(a,y,J.d(w,this.r1?$.$get$o():this.x))
z.B(a,this.e,this.f)
z.B(a,J.d(this.e,x),this.f)}else if(this.y!=null){y=this.e
w=this.f
z.B(a,y,J.d(w,this.r1?$.$get$o():this.x))
z.B(a,this.e,J.d(this.f,x))
y=this.e
z.R(a,y,this.f,J.d(y,x),this.f)}else{y=this.z
w=this.e
v=this.f
if(y!=null){y=J.d(v,this.r1?$.$get$o():this.x)
v=this.e
u=this.f
z.R(a,w,y,v,J.r(J.d(u,this.r1?$.$get$o():this.x),x))
z.B(a,this.e,this.f)
z.B(a,J.d(this.e,x),this.f)}else{y=J.d(v,this.r1?$.$get$o():this.x)
v=this.e
u=this.f
z.R(a,w,y,v,J.r(J.d(u,this.r1?$.$get$o():this.x),x))
z.B(a,this.e,J.d(this.f,x))
y=this.e
z.R(a,y,this.f,J.d(y,x),this.f)}}z.cF(a)}],
dR:function(a,b,c){var z,y,x,w,v,u
z=$.$get$O()
y=J.m(a)
y.B(a,J.r(J.d(this.e,this.r),z),this.f)
if(b&&c){y.R(a,J.d(this.e,this.r),this.f,J.d(this.e,this.r),J.d(this.f,z))
x=J.d(this.e,this.r)
w=this.f
y.B(a,x,J.r(J.d(w,this.r1?$.$get$o():this.x),z))
x=J.d(this.e,this.r)
w=this.f
w=J.d(w,this.r1?$.$get$o():this.x)
v=J.r(J.d(this.e,this.r),z)
u=this.f
y.R(a,x,w,v,J.d(u,this.r1?$.$get$o():this.x))}else if(c){y.B(a,J.d(this.e,this.r),this.f)
x=J.d(this.e,this.r)
w=this.f
y.B(a,x,J.r(J.d(w,this.r1?$.$get$o():this.x),z))
x=J.d(this.e,this.r)
w=this.f
w=J.d(w,this.r1?$.$get$o():this.x)
v=J.r(J.d(this.e,this.r),z)
u=this.f
y.R(a,x,w,v,J.d(u,this.r1?$.$get$o():this.x))}else{x=this.e
w=this.r
if(b){y.R(a,J.d(x,w),this.f,J.d(this.e,this.r),J.d(this.f,z))
x=J.d(this.e,this.r)
w=this.f
y.B(a,x,J.d(w,this.r1?$.$get$o():this.x))
x=J.r(J.d(this.e,this.r),z)
w=this.f
y.B(a,x,J.d(w,this.r1?$.$get$o():this.x))}else{y.B(a,J.d(x,w),this.f)
x=J.d(this.e,this.r)
w=this.f
y.B(a,x,J.d(w,this.r1?$.$get$o():this.x))
x=J.r(J.d(this.e,this.r),z)
w=this.f
y.B(a,x,J.d(w,this.r1?$.$get$o():this.x))}}},
cs:function(a,b){var z,y,x,w,v
z=$.$get$O()
y=this.e
if(typeof z!=="number")return z.G()
y=J.d(y,z*2)
x=$.$get$aB()
w=this.gb7()
if(typeof x!=="number")return x.G()
v=J.d(y,x*w)
if(b){y=J.m(a)
y.B(a,v,this.f)
x=z/2
w=J.bg(v)
y.ea(a,v,J.d(this.f,x),w.v(v,z),J.d(this.f,x),w.v(v,z),this.f)}J.dk(a,J.r(J.d(this.e,this.r),z),this.f)},
cr:function(a,b){var z,y,x,w,v,u,t
z=$.$get$O()
y=this.e
if(typeof z!=="number")return z.G()
x=J.d(y,z*2)
if(!this.r1){y=$.$get$aB()
w=this.gaK()
if(typeof y!=="number")return y.G()
x=J.d(x,y*w)}if(b){y=J.bg(x)
w=y.v(x,z)
v=this.f
u=J.m(a)
u.B(a,w,J.d(v,this.r1?$.$get$o():this.x))
y=y.v(x,z)
v=this.f
w=z/2
v=J.d(J.d(v,this.r1?$.$get$o():this.x),w)
t=this.f
w=J.d(J.d(t,this.r1?$.$get$o():this.x),w)
t=this.f
u.ea(a,y,v,x,w,x,J.d(t,this.r1?$.$get$o():this.x))}y=J.r(x,z)
w=this.f
J.dk(a,y,J.d(w,this.r1?$.$get$o():this.x))},
bH:function(a){var z,y,x,w,v,u
z=a.c
y=a.d
x=this.f
w=J.d(x,this.r1?$.$get$o():this.x)
v=this.e
if(typeof v!=="number")return H.l(v)
if(z>=v){if(typeof x!=="number")return H.l(x)
if(y>=x){u=this.r
if(typeof u!=="number")return H.l(u)
if(z<=v+u){if(typeof w!=="number")return H.l(w)
v=y<=w}else v=!1}else v=!1}else v=!1
return v},
ah:function(a){var z,y,x
this.id=!0
z=a.c
this.k1=z
y=a.d
this.k2=y
this.k3=z
this.k4=y
z=this.z
if(z!=null){z.sZ(null)
this.z=null}for(z=this.fy,x=this;x!=null;){z.hi(x)
z.aO(x)
x=x.gbN()}return this},
bl:function(a){var z
this.id=!1
this.r1=!1
this.r2=!1
z=this.fy
z.hA(this)
z.dZ(this)
z.bf()},
bj:function(a){this.k1=a.c
this.k2=a.d},
bk:function(a){},
bn:function(a,b){var z=$.af
$.af=z+1
this.a=z
this.r=$.$get$ab()
this.x=$.$get$o()},
w:{
fX:function(a,b){var z,y,x
z=[U.aj]
y=H.p([],z)
z=H.p([],z)
x=$.$get$U()
if(typeof x!=="number")return H.l(x)
x=new U.bn(null,b,null,null,0,0,0,0,null,null,0,null,y,z,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.c(14*x)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
x.bn(a,b)
return x},
dr:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=J.y(b)
y=z.h(b,"action")
x=y==null?"":J.C(y)
if(!!J.k(z.h(b,"clauses")).$ish){y=H.p([],[U.aC])
w=[U.aj]
v=H.p([],w)
u=H.p([],w)
t=$.$get$U()
if(typeof t!=="number")return H.l(t)
t=14*t
s=new U.aK(y,null,null,null,x,null,null,0,0,0,0,null,null,0,null,v,u,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.c(t)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
u=$.af
$.af=u+1
s.a=u
u=$.$get$ab()
s.r=u
v=$.$get$o()
s.x=v
t=new U.cx(null,null,null,"end-"+H.c(x),null,null,0,0,0,0,null,null,0,null,H.p([],w),H.p([],w),"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.c(t)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
w=$.af
$.af=w+1
t.a=w
t.r=u
t.x=v
t.go=!1
if(typeof v!=="number")return v.ai()
t.x=v/2
t.d=""
s.x1=t
t.ry=s
y.push(t)
s.rx=s.x1}else{y=[U.aj]
if(J.J(z.h(b,"type"),"clause")){w=H.p([],y)
y=H.p([],y)
v=$.$get$U()
if(typeof v!=="number")return H.l(v)
s=new U.aC(null,null,null,x,null,null,0,0,0,0,null,null,0,null,w,y,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.c(14*v)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
v=$.af
$.af=v+1
s.a=v
s.r=$.$get$ab()
s.x=$.$get$o()
s.go=!1}else{w=H.p([],y)
y=H.p([],y)
v=$.$get$U()
if(typeof v!=="number")return H.l(v)
s=new U.bn(null,x,null,null,0,0,0,0,null,null,0,null,w,y,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.c(14*v)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
v=$.af
$.af=v+1
s.a=v
s.r=$.$get$ab()
s.x=$.$get$o()}}y=z.h(b,"type")
s.c=y==null?"":J.C(y)
y=z.h(b,"format")
s.d=y==null?null:J.C(y)
y=z.h(b,"blockColor")
w=s.db
s.db=y==null?w:J.C(y)
y=z.h(b,"textColor")
w=s.dx
s.dx=y==null?w:J.C(y)
y=z.h(b,"borderColor")
w=s.dy
s.dy=y==null?w:J.C(y)
y=z.h(b,"font")
w=s.fr
s.fr=y==null?w:J.C(y)
s.go=!U.cg(z.h(b,"start"),!1)
s.fx=U.cg(z.h(b,"required"),s.fx)
if(!!J.k(z.h(b,"params")).$ish)for(y=J.E(z.h(b,"params")),w=s.cx;y.n();)w.push(U.cL(s,y.gt()))
if(!!J.k(z.h(b,"properties")).$ish)for(y=J.E(z.h(b,"properties")),w=s.cy;y.n();)w.push(U.cL(s,y.gt()))
y=s.cy.length
w=$.$get$o()
if(typeof w!=="number")return H.l(w)
s.x=(1+y)*w
y=!!s.$isaK
if(y&&!!J.k(z.h(b,"clauses")).$ish)for(w=J.E(z.h(b,"clauses"));w.n();){r=w.gt()
J.bI(r,"type","clause")
q=H.cb(U.dr(a,r),"$isaC")
H.cb(s,"$isaK").di(q)}if(y&&z.h(b,"end")!=null){y=H.cb(s,"$isaK").x1
z=J.a7(z.h(b,"end"),"format")
y.d=z==null?null:J.C(z)}return s}}},
dz:{"^":"bn;cP:rx@",
gbN:function(){var z=this.y
if(z!=null)return z
else{z=this.rx
if(z!=null)return z
else{z=this.ch
if(z!=null)return z.rx
else return}}},
a6:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a6(a+this.gaK(),this)},
hb:function(a){var z,y,x,w,v,u,t
z=$.$get$O()
if(this.rx!=null){y=this.e
x=$.$get$aB()
y=J.d(y,x)
w=this.f
w=J.d(w,this.r1?$.$get$o():this.x)
v=J.d(this.e,x)
u=this.f
t=J.m(a)
t.R(a,y,w,v,J.d(J.d(u,this.r1?$.$get$o():this.x),z))
y=this.y
w=this.e
if(y!=null){t.B(a,J.d(w,x),J.bk(this.rx))
t.B(a,J.d(J.d(this.e,x),z),J.bk(this.rx))}else{t.B(a,J.d(w,x),J.r(J.bk(this.rx),z))
t.R(a,J.d(this.e,x),J.bk(this.rx),J.d(J.d(this.e,x),z),J.bk(this.rx))}}}},
aC:{"^":"dz;hJ:ry?,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2",
gb7:function(){return 1},
gaK:function(){return 1},
gew:function(){return!1},
as:function(a){var z,y,x,w,v,u
z=this.fy
y=this.b
x=[U.aj]
w=H.p([],x)
x=H.p([],x)
v=$.$get$U()
if(typeof v!=="number")return H.l(v)
u=new U.aC(null,null,null,y,null,null,0,0,0,0,null,null,0,null,w,x,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.c(14*v)+"px 'Poppins', sans-serif",!1,z,!0,!1,null,null,null,null,!1,!0)
u.bn(z,y)
u.go=!1
this.cb(u)
return u},
a5:function(a){var z,y
z=this.S()
z.l(0,"children",[])
J.ar(a,z)
y=this.y
if(y!=null)y.a5(z.h(0,"children"))},
ce:function(a){},
cc:function(a){},
ah:function(a){return this.ry.ah(a)}},
cx:{"^":"aC;ry,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2",
gb7:function(){return 1},
gaK:function(){return 0},
a6:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a6(a,b)},
a5:function(a){J.ar(a,this.S())},
cd:function(a){}},
aK:{"^":"dz;ry,x1,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2",
gb7:function(){return 0},
gaK:function(){return 1},
as:function(a){var z,y,x,w,v,u
z=U.fW(this.fy,this.b)
this.cb(z)
for(y=this.ry,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=y[w]
u=J.k(v)
if(!u.$iscx)z.di(u.as(v))}z.x1.d=this.x1.d
return z},
gb1:function(){var z,y
z=this.x1
y=z.y
return y!=null?y.gb1():z},
a5:function(a){var z,y,x,w
z=this.S()
z.l(0,"children",[])
z.l(0,"clauses",[])
J.ar(a,z)
y=this.y
if(y!=null)y.a5(z.h(0,"children"))
for(y=this.ry,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)y[w].a5(z.h(0,"clauses"))
y=this.x1.y
if(y!=null)y.a5(a)},
a6:function(a,b){var z,y,x
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a6(a+1,this)
for(z=this.ry,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x)z[x].a6(a,b)},
b_:function(){var z,y,x,w,v,u,t,s
this.fd()
for(z=this.ry,y=z.length,x=this,w=0;w<z.length;z.length===y||(0,H.A)(z),++w,x=v){v=z[w]
u=J.m(v)
if(x.gb6()){t=x.gZ().gb1()
u.sq(v,this.e)
s=t.f
u.su(v,J.d(s,t.r1?$.$get$o():t.x))}else{u.sq(v,this.e)
s=J.m(x)
u.su(v,J.d(J.d(s.gu(x),s.gp(x)),$.$get$o()))}v.b_()}},
di:function(a){var z,y,x,w
a.shJ(this)
z=this.ry
C.a.A(z,this.x1)
z.push(a)
z.push(this.x1)
for(y=0;x=z.length,y<x-1;y=w){w=y+1
z[y].scP(z[w])}if(0>=x)return H.a(z,0)
this.rx=z[0]},
cq:function(a){var z,y,x,w,v,u,t,s,r,q
if(this.r1){this.fc(a)
return}z=$.$get$O()
y=J.m(a)
y.aH(a)
y.bd(a,J.d(this.e,z),this.f)
x=this.z==null&&this.go
for(w=this;w!=null;){if(!w.gb6())v=w.gcP()!=null||this.Q===0
else v=!1
w.cs(a,x)
w.dR(a,x,v)
w.cr(a,v)
w.hb(a)
x=!w.gb6()
w=w.gcP()}u=this.x1
t=u.y!=null||this.Q>0
s=this.e
if(t){t=u.f
y.B(a,s,J.d(t,u.r1?$.$get$o():u.x))}else{u=J.d(s,z)
t=this.x1
s=t.f
y.B(a,u,J.d(s,t.r1?$.$get$o():t.x))
u=this.e
t=this.x1
s=t.f
t=J.d(s,t.r1?$.$get$o():t.x)
s=this.e
r=this.x1
q=r.f
y.R(a,u,t,s,J.r(J.d(q,r.r1?$.$get$o():r.x),z))}u=this.z
t=this.e
s=this.f
if(u!=null){y.B(a,t,s)
y.B(a,J.d(this.e,z),this.f)}else{y.B(a,t,J.d(s,z))
u=this.e
y.R(a,u,this.f,J.d(u,z),this.f)}y.cF(a)},
fq:function(a,b){var z,y,x,w
z="end-"+H.c(b)
y=[U.aj]
x=H.p([],y)
y=H.p([],y)
w=$.$get$U()
if(typeof w!=="number")return H.l(w)
w=new U.cx(null,null,null,z,null,null,0,0,0,0,null,null,0,null,x,y,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.c(14*w)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
w.bn(a,z)
w.go=!1
z=$.$get$o()
if(typeof z!=="number")return z.ai()
w.x=z/2
w.d=""
this.x1=w
w.ry=this
this.ry.push(w)
this.rx=this.x1},
w:{
fW:function(a,b){var z,y,x,w
z=H.p([],[U.aC])
y=[U.aj]
x=H.p([],y)
y=H.p([],y)
w=$.$get$U()
if(typeof w!=="number")return H.l(w)
w=new U.aK(z,null,null,null,b,null,null,0,0,0,0,null,null,0,null,x,y,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.c(14*w)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
w.bn(a,b)
w.fq(a,b)
return w}}},
ah:{"^":"e;a,b,O:c',d",
bK:function(a){var z,y
z=this.d
y=z.length
if(y===1){if(this.a.c!==this)a.k+="("
a.k+=H.c(this.b)+" "
if(0>=z.length)return H.a(z,0)
z[0].bK(a)
if(this.a.c!==this)a.k+=")"}else if(y===2){if(this.a.c!==this)a.k+="("
if(0>=y)return H.a(z,0)
z[0].bK(a)
a.k+=" "+H.c(this.b)+" "
if(1>=z.length)return H.a(z,1)
z[1].bK(a)
if(this.a.c!==this)a.k+=")"}else{z=this.b
if(z!=null)a.k+=H.c(z)}},
S:function(){var z,y,x,w,v
z=P.au(["name",this.b,"type",this.c])
y=this.d
if(y.length!==0){z.l(0,"children",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=y[w]
J.ar(z.h(0,"children"),v.S())}}return z},
aw:function(a){var z,y,x,w,v
z=J.y(a)
y=z.h(a,"name")
this.b=y==null?"":J.C(y)
y=z.h(a,"type")
this.c=y==null?"num":J.C(y)
y=this.d
C.a.si(y,0)
if(!!J.k(z.h(a,"children")).$ish)for(z=J.E(z.h(a,"children")),x=[U.ah];z.n();){w=z.gt()
v=new U.ah(this.a,null,J.a7(w,"type"),H.p([],x))
y.push(v)
v.aw(w)}},
hL:function(a){var z,y,x,w
if(a==null)return this.d.length!==0
z=this.d
y=J.y(a)
if(z.length!==y.gi(a))return!0
x=0
while(!0){w=y.gi(a)
if(typeof w!=="number")return H.l(w)
if(!(x<w))break
w=y.h(a,x)
if(x>=z.length)return H.a(z,x)
if(!J.J(w,z[x].c))return!0;++x}return!1},
f5:function(a){var z,y,x,w,v
if(this.hL(a)){z=this.d
C.a.si(z,0)
if(a!=null){y=J.y(a)
x=[U.ah]
w=0
while(!0){v=y.gi(a)
if(typeof v!=="number")return H.l(v)
if(!(w<v))break
z.push(new U.ah(this.a,null,y.h(a,w),H.p([],x)));++w}}}},
e9:function(a){var z,y
z=document.createElement("div")
C.b.ac(z,H.c(this.b))
z.classList.add("nt-expression-text")
z.classList.add("editable")
y=H.c(this.c)
z.classList.add(y)
W.K(z,"click",new U.hE(this,z),!1,W.T)
this.ei(z,a)
a.appendChild(z)},
ei:function(a,b){var z=W.T
W.K(a,"mouseenter",new U.hF(b),!1,z)
W.K(a,"mouseleave",new U.hG(b),!1,z)},
bF:function(a,b){var z=document.createElement("div")
C.b.ac(z,b?"(":")")
z.classList.add("nt-expression-text")
z.classList.add("parenthesis")
this.ei(z,a)
a.appendChild(z)},
hH:function(a){var z,y
this.b=J.C(U.aq(this.b,0))
z=W.hS("number")
z.className="nt-number-input"
y=J.m(z)
y.sE(z,this.b)
y.sfb(z,"1")
y=y.gbP(z)
W.K(y.a,y.b,new U.hD(this,z),!1,H.F(y,0))
a.appendChild(z)},
gis:function(){var z=this.b
if(z!=null)return P.fk(z,new U.hH())!=null
return!1},
bR:function(a){var z,y,x
z=document.createElement("div")
z.className="nt-expression"
if((this.gis()||this.b==null)&&J.J(this.c,"num"))this.hH(z)
else if(this.b==null){z.classList.add("empty")
C.b.ay(z,"beforeend","<small>&#9660;</small>",null,null)}else{y=this.d
x=y.length
if(x===1){this.bF(z,!0)
this.e9(z)
if(0>=y.length)return H.a(y,0)
y[0].bR(z)
this.bF(z,!1)}else if(x===2){this.bF(z,!0)
if(0>=y.length)return H.a(y,0)
y[0].bR(z)
this.e9(z)
if(1>=y.length)return H.a(y,1)
y[1].bR(z)
this.bF(z,!1)}else C.b.ay(z,"beforeend","<div class='nt-expression-text "+H.c(this.c)+"'>"+H.c(this.b)+"</div>",null,null)}if(this.d.length===0){z.classList.add("editable")
W.K(z,"click",new U.hK(this,z),!1,W.T)}a.appendChild(z)},
eD:function(a){var z,y,x,w
z=document
y=new W.ae(z.querySelectorAll(".nt-pulldown-menu"),[null])
y.J(y,new U.hI())
x=z.createElement("div")
x.classList.add("nt-pulldown-menu")
this.dk(x,this.a.a.cx)
if(J.fA(this.a.a.ch))C.b.ay(x,"beforeend","<hr>",null,null)
this.dk(x,this.a.a.ch)
C.b.ay(x,"beforeend","<hr>",null,null)
w=W.dp("#")
C.m.ac(w,"Clear")
w.className="clear"
x.appendChild(w)
W.K(w,"click",new U.hJ(this,x),!1,W.T)
a.appendChild(x)},
dk:function(a,b){var z,y,x,w,v
for(z=J.E(b),y=W.T;z.n();){x=z.gt()
w=J.y(x)
if(J.J(w.h(x,"type"),this.c)){v=document.createElement("a")
v.href="#"
C.m.ac(v,H.c(w.h(x,"name")))
a.appendChild(v)
W.K(v,"click",new U.hC(this,a,x),!1,y)}}}},
hE:{"^":"f:0;a,b",
$1:function(a){this.a.eD(this.b)
J.bm(a)}},
hF:{"^":"f:0;a",
$1:function(a){this.a.classList.add("highlight")}},
hG:{"^":"f:0;a",
$1:function(a){this.a.classList.remove("highlight")}},
hD:{"^":"f:0;a,b",
$1:function(a){var z,y,x,w
z=this.a
y=this.b
x=J.m(y)
w=x.gE(y)
z.b=w
if(w===""){z.b="0"
x.sE(y,"0")}}},
hH:{"^":"f:0;",
$1:function(a){return}},
hK:{"^":"f:0;a,b",
$1:function(a){this.a.eD(this.b)
J.bm(a)}},
hI:{"^":"f:0;",
$1:function(a){return J.bl(a)}},
hJ:{"^":"f:0;a,b",
$1:function(a){var z
C.b.a2(this.b)
z=this.a
z.b=null
C.a.si(z.d,0)
z.a.cW()
z=J.m(a)
z.c_(a)
z.cV(a)}},
hC:{"^":"f:0;a,b,c",
$1:function(a){var z,y,x
C.b.a2(this.b)
z=this.a
y=this.c
x=J.y(y)
z.b=x.h(y,"name")
z.c=x.h(y,"type")
z.f5(x.h(y,"arguments"))
z.a.cW()
z=J.m(a)
z.c_(a)
z.cV(a)}},
cy:{"^":"e;a,b,c",
j:function(a){var z,y
z=new P.aF("")
this.c.bK(z)
y=z.k
return y.charCodeAt(0)==0?y:y},
aw:function(a){var z=J.k(a)
if(!!z.$isI)this.c.aw(a)
else if(a!=null)this.c.b=z.j(a)},
cW:function(){var z=this.b
if(z!=null&&this.c!=null){J.fy(z).a7(0)
this.c.bR(this.b)}}},
ct:{"^":"e;",
aW:function(a,b,c){var z,y
for(z=this.a,y=0;y<b;++y)a.k+=z
a.k+=c+"\n"},
aV:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=J.y(b)
y=z.h(b,"format")
x=z.h(b,"params")
w=z.h(b,"properties")
v=J.k(x)
u=!!v.$ish?v.gi(x):0
t=J.k(w)
s=!!t.$ish?t.gi(w):0
if(typeof y!=="string"){y=H.c(z.h(b,"action"))
for(r=0;r<u;++r)y+=" {"+r+"}"
for(r=0;r<s;++r)y+=" {P"+r+"}"}for(r=0;r<u;++r){z="{"+r+"}"
q=J.a7(v.h(x,r),"value")
q=q==null?"":J.C(q)
if(typeof q!=="string")H.B(H.L(q))
y=H.fp(y,z,q)}for(r=0;r<s;++r){z="{P"+r+"}"
v=J.a7(t.h(w,r),"value")
v=v==null?"":J.C(v)
if(typeof v!=="string")H.B(H.L(v))
y=H.fp(y,z,v)}this.aW(a,c,y)}},
iT:{"^":"ct;a",
dH:function(a){var z,y
z=new P.aF("")
for(y=J.E(a.h(0,"chains"));y.n();){this.ao(z,y.gt(),0)
z.k+="\n"}y=z.k
return y.charCodeAt(0)==0?y:y},
ao:function(a,b,c){var z,y,x,w,v,u
for(z=J.E(b),y=c+1;z.n();){x=z.gt()
this.aV(a,x,c)
w=J.y(x)
if(!!J.k(w.h(x,"children")).$ish)this.ao(a,w.h(x,"children"),y)
if(!!J.k(w.h(x,"clauses")).$ish)for(w=J.E(w.h(x,"clauses"));w.n();){v=w.gt()
this.aV(a,v,c)
u=J.y(v)
if(!!J.k(u.h(v,"children")).$ish)this.ao(a,u.h(v,"children"),y)}}}},
iI:{"^":"ct;a",
dH:function(a){var z,y,x,w
z=new P.aF("")
for(y=J.E(a.h(0,"chains"));y.n();){x=y.gt()
w=J.y(x)
if(J.az(w.gi(x),0)&&J.J(J.a7(w.h(x,0),"type"),"nlogo:procedure")){this.aV(z,w.ag(x,0),0)
this.ao(z,x,1)
w=z.k+="end\n"
z.k=w+"\n"}}y=z.k
return y.charCodeAt(0)==0?y:y},
ao:function(a,b,c){var z,y,x,w,v,u
for(z=J.E(b),y=c+1;z.n();){x=z.gt()
this.aV(a,x,c)
w=J.y(x)
if(!!J.k(w.h(x,"children")).$ish){this.aW(a,c,"[")
this.ao(a,w.h(x,"children"),y)
this.aW(a,c,"]")}if(!!J.k(w.h(x,"clauses")).$ish)for(w=J.E(w.h(x,"clauses"));w.n();){v=w.gt()
this.aV(a,v,c)
u=J.y(v)
if(!!J.k(u.h(v,"children")).$ish){this.aW(a,c,"[")
this.ao(a,u.h(v,"children"),y)
this.aW(a,c,"]")}}}}},
fY:{"^":"e;a,b,c,m:d>",
gq:function(a){return J.r(this.a.y,this.d)},
gu:function(a){return 0},
gp:function(a){return this.a.z},
bE:function(a){return!1},
it:function(a){var z
if(!a.gdN())if(!a.ge4()){z=J.m(a)
z=J.dd(J.d(z.gq(a),J.n(z.gm(a),0.75)),J.r(this.a.y,this.d))}else z=!1
else z=!1
return z},
eW:function(a){var z,y,x,w
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x].a
if(J.J(w.b,a))return w}return},
by:function(a){var z,y,x,w,v,u,t,s
z=$.$get$ab()
if(typeof z!=="number")return z.G()
this.d=z*1.5
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.A)(z),++x){w=z[x]
v=this.d
u=w.a.dI(a)
t=$.$get$O()
if(typeof t!=="number")return t.G()
if(typeof u!=="number")return u.v()
s=$.$get$bK()
if(typeof s!=="number")return s.G()
this.d=Math.max(v,u+t*2+s*2)}},
cH:function(a,b){var z,y,x,w,v,u,t,s
this.by(a)
z=J.m(a)
z.a_(a)
z.sav(a,this.c)
y=this.a
z.ek(a,J.r(y.y,this.d),0,this.d,y.z)
if(b)z.ek(a,J.r(y.y,this.d),0,this.d,y.z)
y=J.r(y.y,this.d)
x=$.$get$bK()
if(typeof x!=="number")return H.l(x)
w=y+x
x=$.$get$o()
if(typeof x!=="number")return x.ai()
v=0+x/2
for(y=this.b,u=y.length,t=0;t<y.length;y.length===u||(0,H.A)(y),++t){s=y[t]
s.b=w
s.c=v
s.i1(a)
v+=x*1.5}z.a3(a)}},
ei:{"^":"e;a,q:b*,u:c*,d,e",
ev:function(){var z,y,x
z=this.e
y=J.a5(z)
x=y.U(z,this.d.bV(this.a.b))
return y.aj(z,0)||J.az(x,0)},
gm:function(a){return this.a.r},
gp:function(a){var z=this.a
return z.r1?$.$get$o():z.x},
i1:function(a){var z,y
z=this.a
J.r(this.e,this.d.bV(z.b))
y=J.m(a)
y.a_(a)
if(!this.ev())y.seY(a,0.3)
z.e=this.b
z.f=this.c
z.bz(a,$.$get$ab())
z.cc(a)
z.cd(a)
z.ce(a)
y.a3(a)},
bH:function(a){return this.a.bH(a)},
ah:function(a){var z,y,x,w,v
if(this.ev()){z=this.a
y=z.as(0)
y.e=J.r(z.e,5)
y.f=J.r(z.f,5)
y.r2=!0
z=this.d
z.aO(y)
if(!!y.$isaK)for(x=y.ry,w=x.length,v=0;v<x.length;x.length===w||(0,H.A)(x),++v)z.aO(x[v])
return y.ah(a)}return this},
bl:function(a){},
bj:function(a){},
bk:function(a){}},
aj:{"^":"e;a,b,c,d,O:e',f,r,x,y,m:z>,p:Q>,ch",
gE:function(a){var z=this.c
return z==null?"":J.C(z)},
sE:function(a,b){var z=b==null?"":J.C(b)
this.c=z
return z},
gaN:function(a){return H.c(J.C(this.c))+H.c(this.r)},
b3:function(a,b){return U.cL(b,this.S())},
S:["df",function(){return P.au(["type",this.e,"name",this.f,"unit",this.r,"value",this.gE(this),"default",this.d])}],
by:function(a){var z,y,x
z=$.$get$O()
if(typeof z!=="number")return z.G()
this.z=z*2
z=J.m(a)
z.a_(a)
z.saJ(a,this.b.fr)
y=this.z
x=z.cN(a,this.gaN(this)).width
if(typeof x!=="number")return H.l(x)
this.z=y+x
z.a3(a)},
hm:function(a){var z,y,x,w,v
this.by(a)
z=this.z
y=J.m(a)
y.a_(a)
y.saJ(a,this.b.fr)
x=$.$get$aB()
w=y.cN(a,"\u25b8    "+H.c(this.f)).width
if(typeof x!=="number")return x.v()
if(typeof w!=="number")return H.l(w)
v=$.$get$O()
if(typeof v!=="number")return v.G()
y.a3(a)
return z+(x+w+v*2)},
eh:function(a,b,c){var z,y,x,w,v,u,t,s,r
this.x=b
this.y=c
z=this.b
y=J.m(a)
y.saJ(a,z.fr)
y.sd1(a,"center")
y.sd2(a,"middle")
x=J.d(z.e,this.x)
w=J.d(z.f,this.y)
v=$.$get$o()
if(typeof v!=="number")return v.ai()
u=J.r(J.d(w,v/2),this.Q/2)
t=this.z
s=this.Q
y.aH(a)
v=s/2
y.aH(a)
w=J.bg(x)
y.bd(a,w.v(x,v),u)
y.B(a,J.r(w.v(x,t),v),u)
r=J.bg(u)
y.R(a,w.v(x,t),u,w.v(x,t),r.v(u,v))
y.B(a,w.v(x,t),J.r(r.v(u,s),v))
y.R(a,w.v(x,t),r.v(u,s),J.r(w.v(x,t),v),r.v(u,s))
y.B(a,w.v(x,v),r.v(u,s))
y.R(a,x,r.v(u,s),x,J.r(r.v(u,s),v))
y.B(a,x,r.v(u,v))
y.R(a,x,u,w.v(x,v),u)
y.cF(a)
y.sav(a,this.ch?z.db:z.dx)
y.cI(a)
y.sav(a,this.ch?z.dx:z.db)
y.cJ(a,this.gaN(this),w.v(x,t/2),r.v(u,v))},
cH:function(a,b){return this.eh(a,b,0)},
i2:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=z.r
x=$.$get$O()
w=this.z
if(typeof x!=="number")return x.v()
if(typeof y!=="number")return y.U()
v=J.d(z.f,b)
u=$.$get$o()
if(typeof u!=="number")return u.ai()
t=J.d(v,u/2)
s=J.d(z.e,$.$get$aB())
u=J.m(a)
u.sav(a,z.dx)
u.saJ(a,z.fr)
u.sd1(a,"left")
u.sd2(a,"middle")
u.cJ(a,"\u25b8    "+H.c(this.f),s,t)
this.eh(a,y-(x+w),b)},
bH:function(a){var z,y,x
z=a.c
y=this.b
x=J.d(y.e,this.x)
if(typeof x!=="number")return H.l(x)
if(z>=x){z=a.d
x=J.d(y.f,this.y)
if(typeof x!=="number")return H.l(x)
if(z>=x){z=a.c
x=J.d(J.d(y.e,this.x),this.z)
if(typeof x!=="number")return H.l(x)
if(z<=x){z=a.d
y=J.d(J.d(y.f,this.y),$.$get$o())
if(typeof y!=="number")return H.l(y)
y=z<=y
z=y}else z=!1}else z=!1}else z=!1
return z},
bl:function(a){this.ch=!1
this.bC()
this.b.fy.Y()},
ah:function(a){this.ch=!0
this.b.fy.Y()
return this},
bj:function(a){},
bk:function(a){},
bC:function(){var z,y,x,w,v,u,t
z=document
y=z.createElement("div")
y.className="backdrop"
C.b.ay(y,"beforeend",'      <div class="nt-param-dialog">\n        <div class="nt-param-table">\n          <div class="nt-param-row">'+this.dq()+'</div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>',null,null)
x=z.querySelector("#"+H.c(this.b.fy.f)).parentElement
if(x==null)return
x.appendChild(y)
w=z.querySelector("#nt-param-label-"+this.a)
v=z.querySelector("#nt-param-"+this.a)
u=[null]
t=[W.T]
new W.aP(new W.ae(z.querySelectorAll(".nt-param-confirm"),u),!1,"click",t).az(new U.iP(this,y,v))
new W.aP(new W.ae(z.querySelectorAll(".nt-param-cancel"),u),!1,"click",t).az(new U.iQ(y))
y.classList.add("show")
if(v!=null){z=J.m(v)
z.el(v)
if(w!=null){u=z.gbP(v)
W.K(u.a,u.b,new U.iR(w,v),!1,H.F(u,0))
z=z.gcR(v)
W.K(z.a,z.b,new U.iS(w,v),!1,H.F(z,0))}}},
dq:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="text" value="'+this.gaN(this)+'">\n      <span class="nt-param-unit">'+H.c(this.r)+"</span>\n    "},
am:function(a,b){var z,y
z=$.e5
$.e5=z+1
this.a=z
z=J.y(b)
y=z.h(b,"type")
this.e=y==null?"num":J.C(y)
y=z.h(b,"name")
this.f=y==null?"":J.C(y)
y=z.h(b,"unit")
this.r=y==null?"":J.C(y)
z=z.h(b,"default")
this.d=z
this.sE(0,z)},
w:{
e4:function(a,b){var z=$.$get$o()
if(typeof z!=="number")return z.G()
z=new U.aj(null,a,null,null,"int","","",0,0,28,z*0.6,!1)
z.am(a,b)
return z},
cL:function(a,b){var z,y,x,w
z=J.y(b)
y=z.h(b,"type")
switch(y==null?"num":J.C(y)){case"int":y=$.$get$o()
if(typeof y!=="number")return y.G()
y=new U.hT(!1,1,null,a,null,null,"int","","",0,0,28,y*0.6,!1)
y.am(a,b)
y.cx=U.cg(z.h(b,"random"),!1)
y.cy=U.aq(z.h(b,"step"),y.cy)
y.cy=1
return y
case"num":y=$.$get$o()
if(typeof y!=="number")return y.G()
y=new U.cz(null,null,a,null,null,"int","","",0,0,28,y*0.6,!1)
y.am(a,b)
x=new U.cy(a.fy,null,null)
z=new U.ah(x,null,z.h(b,"type"),H.p([],[U.ah]))
x.c=z
y.cx=x
x=y.c
w=J.k(x)
if(!!w.$isI)z.aw(x)
else if(x!=null)z.b=w.j(x)
return y
case"bool":y=$.$get$o()
if(typeof y!=="number")return y.G()
y=new U.cz(null,null,a,null,null,"int","","",0,0,28,y*0.6,!1)
y.am(a,b)
x=new U.cy(a.fy,null,null)
z=new U.ah(x,null,z.h(b,"type"),H.p([],[U.ah]))
x.c=z
y.cx=x
x=y.c
w=J.k(x)
if(!!w.$isI)z.aw(x)
else if(x!=null)z.b=w.j(x)
return y
case"range":y=$.$get$o()
if(typeof y!=="number")return y.G()
y=new U.j5(0,10,!1,1,null,a,null,null,"int","","",0,0,28,y*0.6,!1)
y.am(a,b)
y.cx=U.cg(z.h(b,"random"),!1)
y.cy=U.aq(z.h(b,"step"),y.cy)
y.db=U.aq(z.h(b,"min"),y.db)
y.dx=U.aq(z.h(b,"max"),y.dx)
return y
case"select":return U.eg(a,b)
case"text":return U.e4(a,b)
default:return U.e4(a,b)}}}},
iP:{"^":"f:0;a,b,c",
$1:[function(a){var z=this.c
if(z!=null)this.a.sE(0,J.bj(z))
C.b.a2(this.b)
z=this.a.b.fy
z.Y()
z.bf()},null,null,2,0,null,0,"call"]},
iQ:{"^":"f:0;a",
$1:[function(a){return C.b.a2(this.a)},null,null,2,0,null,0,"call"]},
iR:{"^":"f:0;a,b",
$1:function(a){J.ck(this.a,J.bj(this.b))}},
iS:{"^":"f:0;a,b",
$1:function(a){J.ck(this.a,J.bj(this.b))}},
e3:{"^":"aj;",
S:["fj",function(){var z=this.df()
z.l(0,"random",this.cx)
z.l(0,"step",this.cy)
return z}],
gE:function(a){return U.aq(this.c,0)},
sE:function(a,b){var z=U.aq(b,0)
this.c=z
return z},
gaN:function(a){var z=J.fT(H.lY(this.gE(this)),1)
if(C.e.i5(z,".0"))z=C.e.al(z,0,z.length-2)
return z+H.c(this.r)},
dq:function(){return'      <div class="nt-param-name">'+H.c(this.f)+'</div>\n      <div class="nt-param-value">\n        <input class="nt-param-input" id="nt-param-'+this.a+'" type="number" step="'+H.c(this.cy)+'" value="'+H.c(this.gE(this))+'">\n        <span class="nt-param-unit">'+H.c(this.r)+"</span>\n      </div>\n    "}},
hT:{"^":"e3;cx,cy,a,b,c,d,e,f,r,x,y,z,Q,ch",
gE:function(a){return U.dc(this.c,0)},
sE:function(a,b){var z=U.dc(b,0)
this.c=z
return z}},
j5:{"^":"e3;db,dx,cx,cy,a,b,c,d,e,f,r,x,y,z,Q,ch",
S:function(){var z=this.fj()
z.l(0,"min",this.db)
z.l(0,"max",this.dx)
return z},
bC:function(){var z,y,x,w,v,u,t,s
z=document
y=z.createElement("div")
y.className="backdrop"
x=z.createElement("div")
x.className="nt-param-dialog"
w=z.createElement("div")
w.className="nt-param-table"
C.b.ay(w,"beforeend",'        <div class="nt-param-row">\n          <div class="nt-param-label">\n            '+H.c(this.f)+':\n            <label id="nt-param-label-'+this.a+'" for="nt-param-'+this.a+'">'+H.c(U.aq(this.c,0))+'</label>\n            <span class="nt-param-unit">'+H.c(this.r)+'</span>\n          </div>\n        </div>\n        <div class="nt-param-row">\n          <div class="nt-param-value">\n            <input class="nt-param-input" id="nt-param-'+this.a+'" type="range" value="'+H.c(U.aq(this.c,0))+'" min="'+H.c(this.db)+'" max="'+H.c(this.dx)+'" step="'+H.c(this.cy)+'">\n          </div>\n        </div>\n      ',null,null)
x.appendChild(w)
v=W.T
W.K(x,"click",new U.j6(),!1,v)
y.appendChild(x)
W.K(y,"click",new U.j7(y),!1,v)
u=z.querySelector("#"+H.c(this.b.fy.f)).parentElement
if(u!=null)u.appendChild(y)
t=z.querySelector("#nt-param-label-"+this.a)
s=z.querySelector("#nt-param-"+this.a)
if(s!=null&&t!=null){z=J.m(s)
v=z.gbP(s)
W.K(v.a,v.b,new U.j8(this,y,s),!1,H.F(v,0))
z=z.gcR(s)
W.K(z.a,z.b,new U.j9(t,s),!1,H.F(z,0))}y.classList.add("show")}},
j6:{"^":"f:0;",
$1:function(a){J.bm(a)}},
j7:{"^":"f:0;a",
$1:function(a){C.b.a2(this.a)}},
j8:{"^":"f:0;a,b,c",
$1:function(a){var z=this.a
z.c=U.aq(J.bj(this.c),0)
C.b.a2(this.b)
z=z.b.fy
z.Y()
z.bf()
J.bm(a)}},
j9:{"^":"f:0;a,b",
$1:function(a){J.ck(this.a,J.bj(this.b))}},
jf:{"^":"aj;cx,a,b,c,d,e,f,r,x,y,z,Q,ch",
gaN:function(a){return H.c(J.C(this.c))+H.c(this.r)+" \u25be"},
b3:function(a,b){return U.eg(b,this.S())},
S:function(){var z=this.df()
z.l(0,"values",this.cx)
return z},
bC:function(){var z,y,x,w,v,u,t,s,r,q,p
z=document
y=z.createElement("div")
y.className="backdrop"
x=z.createElement("div")
x.className="nt-param-dialog small"
w=z.createElement("div")
w.className="nt-param-table"
for(v=J.E(this.cx),u=W.T;v.n();){t=v.gt()
s=z.createElement("div")
s.className="nt-param-row"
r=z.createElement("div")
r.className="nt-select-option"
C.b.ac(r,t)
q=this.c
if(J.J(t,q==null?"":J.C(q)))r.classList.add("selected")
W.K(r,"click",new U.jg(this,y,t),!1,u)
s.appendChild(r)
w.appendChild(s)}x.appendChild(w)
y.appendChild(x)
W.K(y,"click",new U.jh(y),!1,u)
p=z.querySelector("#"+H.c(this.b.fy.f)).parentElement
if(p!=null)p.appendChild(y)
y.classList.add("show")},
fw:function(a,b){var z=J.y(b)
if(!!J.k(z.h(b,"values")).$ish&&J.az(J.a0(z.h(b,"values")),0)){z=z.h(b,"values")
this.cx=z
this.c=J.a7(z,0)}},
w:{
eg:function(a,b){var z=$.$get$o()
if(typeof z!=="number")return z.G()
z=new U.jf([],null,a,null,null,"int","","",0,0,28,z*0.6,!1)
z.am(a,b)
z.fw(a,b)
return z}}},
jg:{"^":"f:0;a,b,c",
$1:function(a){var z,y
z=this.a
y=this.c
z.c=y==null?"":J.C(y)
C.b.a2(this.b)
z=z.b.fy
z.Y()
z.bf()
J.bm(a)}},
jh:{"^":"f:0;a",
$1:function(a){C.b.a2(this.a)}},
cz:{"^":"aj;cx,a,b,c,d,e,f,r,x,y,z,Q,ch",
gaN:function(a){var z=this.cx
return z!=null?z.j(0):""},
gE:function(a){return this.c},
sE:function(a,b){var z
this.c=b
z=this.cx
if(z!=null)z.aw(b)},
b3:function(a,b){return U.ht(b,this.S())},
bC:function(){var z,y,x,w,v,u,t
z=document
y=z.createElement("div")
y.className="backdrop"
C.b.ay(y,"beforeend",'      <div class="nt-param-dialog">\n        <div class="nt-param-table">\n          <div class="nt-param-row">\n            <div class="nt-param-label">'+H.c(this.f)+':</div>\n          </div>\n          <div class="nt-param-row">\n            <div id="nt-expression-'+this.a+'" class="nt-expression-root"></div>\n          </div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>',null,null)
x=z.querySelector("#"+H.c(this.b.fy.f)).parentElement
if(x==null)return
x.appendChild(y)
w=[null]
v=[W.T]
new W.aP(new W.ae(z.querySelectorAll(".nt-param-confirm"),w),!1,"click",v).az(new U.hx(this,y))
new W.aP(new W.ae(z.querySelectorAll(".nt-param-confirm"),w),!1,"mousedown",v).az(new U.hy())
new W.aP(new W.ae(z.querySelectorAll(".nt-param-confirm"),w),!1,"mouseup",v).az(new U.hz())
new W.aP(new W.ae(z.querySelectorAll(".nt-param-cancel"),w),!1,"click",v).az(new U.hA(y))
y.classList.add("show")
u=this.cx
t="#nt-expression-"+this.a
u.toString
u.b=z.querySelector(t)
u.cW()
new W.aP(new W.ae(z.querySelectorAll(".nt-param-dialog"),w),!1,"click",v).az(new U.hB())},
fu:function(a,b){var z=new U.cy(a.fy,null,null)
z.c=new U.ah(z,null,J.a7(b,"type"),H.p([],[U.ah]))
this.cx=z
z.aw(this.c)},
w:{
ht:function(a,b){var z=$.$get$o()
if(typeof z!=="number")return z.G()
z=new U.cz(null,null,a,null,null,"int","","",0,0,28,z*0.6,!1)
z.am(a,b)
z.fu(a,b)
return z}}},
hx:{"^":"f:0;a,b",
$1:[function(a){var z,y
if(document.querySelectorAll(".nt-expression.empty").length>0)return!1
C.b.a2(this.b)
z=this.a
y=z.b.fy
y.Y()
y.bf()
z.sE(0,z.cx.c.S())},null,null,2,0,null,0,"call"]},
hy:{"^":"f:0;",
$1:[function(a){var z=new W.ae(document.querySelectorAll(".nt-expression.empty"),[null])
z.J(z,new U.hw())},null,null,2,0,null,0,"call"]},
hw:{"^":"f:0;",
$1:function(a){return J.cj(a).C(0,"warn")}},
hz:{"^":"f:0;",
$1:[function(a){var z=new W.ae(document.querySelectorAll(".nt-expression.empty"),[null])
z.J(z,new U.hv())},null,null,2,0,null,0,"call"]},
hv:{"^":"f:0;",
$1:function(a){return J.cj(a).A(0,"warn")}},
hA:{"^":"f:0;a",
$1:[function(a){C.b.a2(this.a)},null,null,2,0,null,0,"call"]},
hB:{"^":"f:0;",
$1:[function(a){var z=new W.ae(document.querySelectorAll(".nt-pulldown-menu"),[null])
z.J(z,new U.hu())},null,null,2,0,null,0,"call"]},
hu:{"^":"f:0;",
$1:function(a){return J.bl(a)}},
dw:{"^":"es;f,r,x,m:y>,p:z>,Q,ch,cx,cy,db,a,b,c,d,e",
eO:function(){if(this.bE(0))this.Y()
C.M.ghG(window).eM(new U.h6(this))},
bf:function(){var z
this.Y()
try{J.a7($.$get$d5(),"NetTango").bG("_relayCallback",[this.f])}catch(z){H.D(z)
P.ce("Unable to relay program changed event to Javascript")}},
bI:function(){var z,y,x,w,v,u,t,s
z=P.au(["chains",[]])
for(y=this.r,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){v=y[w]
if(v.gew())J.ar(z.h(0,"chains"),v.bI())}for(y=this.Q.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w){u=y[w].a
if(u.fx)if(this.bV(u.b)===0){t=z.h(0,"chains")
s=[]
u.a5(s)
J.ar(t,s)}}return z},
aO:function(a){var z,y,x,w
this.r.push(a)
z=this.a
z.push(a)
for(y=a.geE(),x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)z.push(y[w])
for(y=a.geG(),x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)z.push(y[w])},
hi:function(a){var z,y,x,w
C.a.A(this.r,a)
z=this.a
C.a.A(z,a)
for(y=a.geE(),x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.A(z,y[w])
for(y=a.geG(),x=y.length,w=0;w<y.length;y.length===x||(0,H.A)(y),++w)C.a.A(z,y[w])
this.Y()},
bV:function(a){var z,y,x,w
for(z=this.r,y=z.length,x=0,w=0;w<z.length;z.length===y||(0,H.A)(z),++w)if(J.J(J.fx(z[w]),a))++x
return x},
dZ:function(a){var z,y,x
z=this.dG(a)
if(z!=null){y=z.gZ()
z.sZ(a)
a.z=z
if(y!=null){x=a.gb1()
y.sbQ(x)
x.y=y}return!0}z=this.dF(a)
if(z!=null){z.sbQ(a)
a.y=z
return!0}return!1},
hA:function(a){var z,y
if(this.Q.it(a))for(z=this.r,y=this.a;a!=null;){C.a.A(z,a)
C.a.A(y,a)
a=a.gbN()}},
dG:function(a){var z,y,x,w,v,u,t,s,r
if(a.gbQ()==null&&a.geq())for(z=this.r,y=z.length,x=J.m(a),w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
u=J.k(v)
if(!u.F(v,a))if(J.aZ(x.gq(a),J.d(u.gq(v),u.gm(v)))&&J.az(J.d(x.gq(a),x.gm(a)),u.gq(v))){t=u.gu(v)
s=J.d(u.gu(v),u.gp(v))
r=J.d(s,$.$get$O())
if(v.gb6()&&J.aZ(a.gbi(),s)&&J.az(a.gbi(),t))return v
else if(!v.gb6()&&J.az(a.gbi(),t)&&J.aZ(a.gbi(),r))return v}}return},
dF:function(a){var z,y,x,w,v,u
if(a.gZ()==null)for(z=this.r,y=z.length,x=J.m(a),w=0;w<z.length;z.length===y||(0,H.A)(z),++w){v=z[w]
u=J.k(v)
if(!u.F(v,a)&&v.gbQ()==null&&v.geq())if(J.aZ(x.gq(a),J.d(u.gq(v),u.gm(v)))&&J.az(J.d(x.gq(a),x.gm(a)),u.gq(v)))if(J.aZ(J.ft(J.r(v.gbi(),a.geb())),20))return v}return},
bE:function(a){var z,y,x,w,v,u,t,s,r,q
this.Q.toString
for(z=this.r,y=z.length,x=!1,w=0,v=0;v<z.length;z.length===y||(0,H.A)(z),++v){u=z[v]
if(J.fv(u))x=!0
w=Math.max(H.bG(u.geb()),w)}z=this.z
if(typeof z!=="number")return H.l(z)
if(w>z)if(!x){z=this.y
y=$.$get$U()
z=J.ch(z,y)
t=$.$get$o()
if(typeof t!=="number")return t.G()
if(typeof y!=="number")return H.l(y)
s=C.d.aA(z)
r=C.y.aA((w+t*3)/y)
t="#"+H.c(this.f)
q=document.querySelector(t)
if(q!=null){z=q.style
t=""+s+"px"
z.width=t
z=q.style
t=""+r+"px"
z.height=t
z=s*y
this.y=z
this.z=r*y
y=J.m(q)
y.sm(q,z)
y.sp(q,this.z)
this.cy=y.d8(q,"2d")
this.Y()}}return x},
Y:function(){var z,y,x,w,v,u,t,s,r
J.fM(this.cy)
J.fw(this.cy,0,0,this.y,this.z)
z=H.p([],[U.bn])
for(y=this.r,x=y.length,w=!1,v=0;v<y.length;y.length===x||(0,H.A)(y),++v){u=y[v]
if(!u.gep()&&!(u instanceof U.aC)){u.a6(0,null)
u.b_()
u.bz(this.cy,$.$get$ab())}if(u.gdD())z.push(u)
t=this.Q
t.toString
if(!u.gdN())if(!u.ge4()){s=J.m(u)
t=J.dd(J.d(s.gq(u),J.n(s.gm(u),0.75)),J.r(t.a.y,t.d))}else t=!1
else t=!1
if(t)w=!0}this.Q.cH(this.cy,w)
for(x=y.length,v=0;v<y.length;y.length===x||(0,H.A)(y),++v){u=y[v]
if(u.gdD()){r=this.dG(u)
if(r!=null)r.fQ(this.cy)
else{r=this.dF(u)
if(r!=null)r.fT(this.cy)}}u.cc(this.cy)
u.cd(this.cy)
u.fR(this.cy)
u.fS(this.cy)
u.ce(this.cy)}J.fL(this.cy)},
ho:function(a){var z,y,x,w
z=J.y(a)
if(!!J.k(z.h(a,"chains")).$ish)for(z=J.E(z.h(a,"chains"));z.n();){y=z.gt()
x=J.k(y)
if(!!x.$ish)for(x=x.gH(y);x.n();){w=x.gt()
if(!!J.k(w).$isI)this.cu(w)}}},
cu:function(a){var z,y,x,w,v,u,t,s,r
z=J.y(a)
y=this.Q.eW(z.h(a,"action"))
if(y!=null){x=y.as(0)
w=z.h(a,"x")
if(typeof w==="number"){w=z.h(a,"y")
w=typeof w==="number"}else w=!1
if(w){w=z.h(a,"x")
v=$.$get$co()
x.e=J.n(w,v)
x.f=J.n(z.h(a,"y"),v)}this.aO(x)
if(!!x.$isaK)for(w=x.ry,v=w.length,u=0;u<w.length;w.length===v||(0,H.A)(w),++u)this.aO(w[u])
this.dZ(x)
for(w=this.r,v=w.length,u=0;u<w.length;w.length===v||(0,H.A)(w),++u){t=w[u]
if(!t.gep()&&!(t instanceof U.aC)){t.a6(0,null)
t.b_()
t.bz(this.cy,$.$get$ab())}}this.hn(x,z.h(a,"params"),z.h(a,"properties"))
if(!!J.k(z.h(a,"children")).$ish)for(w=J.E(z.h(a,"children"));w.n();){s=w.gt()
if(!!J.k(s).$isI)this.cu(s)}if(!!J.k(z.h(a,"clauses")).$ish)for(z=J.E(z.h(a,"clauses"));z.n();){r=z.gt()
w=J.k(r)
if(!!w.$isI&&!!J.k(w.h(r,"children")).$ish)for(w=J.E(w.h(r,"children"));w.n();)this.cu(w.gt())}}},
hn:function(a,b,c){var z,y,x,w,v,u
z=J.k(b)
if(!!z.$ish)for(z=z.gH(b),y=a.cx,x=0;z.n();){w=z.gt()
v=J.k(w)
if(!!v.$isI&&w.M("value")===!0){if(x>=y.length)return H.a(y,x)
J.dm(y[x],v.h(w,"value"))}++x}z=J.k(c)
if(!!z.$ish)for(z=z.gH(c),y=a.cy,x=0;z.n();){u=z.gt()
v=J.k(u)
if(!!v.$isI&&u.M("value")===!0){if(x>=y.length)return H.a(y,x)
J.dm(y[x],v.h(u,"value"))}++x}},
fs:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.f
y="#"+H.c(z)
x=document.querySelector(y)
if(x==null)throw H.b("No canvas element with ID "+H.c(z)+" found.")
z=J.m(x)
this.cy=z.d8(x,"2d")
y=x.style
w=H.c(z.gm(x))+"px"
y.width=w
y=x.style
w=H.c(z.gp(x))+"px"
y.height=w
y=z.gm(x)
w=$.$get$U()
this.y=J.n(y,w)
this.z=J.n(z.gp(x),w)
z.sm(x,this.y)
z.sp(x,this.z)
if(typeof w!=="number")return H.l(w)
z=this.c
y=new U.bW([1,0,0,0,1,0,0,0,1])
y.a=[1/w,0,0,0,1/w,0,0,0,1]
z.iz(y)
this.d=this.c.iq()
y=this.db
y.iE(x)
y.c.push(this)
y=H.p([],[U.ei])
z=$.$get$ab()
w=$.$get$bK()
if(typeof w!=="number")return w.G()
if(typeof z!=="number")return z.v()
this.Q=new U.fY(this,y,"rgba(0,0,0, 0.2)",z+w*2)
z=this.x
if(!!J.k(z.h(0,"blocks")).$ish)for(y=J.E(z.h(0,"blocks"));y.n();){v=y.gt()
u=U.dr(this,v)
t=U.dc(J.a7(v,"limit"),-1)
w=this.Q
s=w.b
w=w.a
r=new U.ei(u,null,null,w,t)
u.r1=!0
w.a.push(r)
s.push(r)}if(!!J.k(z.h(0,"variables")).$ish)this.ch=z.h(0,"variables")
if(!!J.k(z.h(0,"expressions")).$ish)this.cx=z.h(0,"expressions")
if(!!J.k(z.h(0,"program")).$isI)this.ho(z.h(0,"program"))
this.Y()
this.eO()},
w:{
h5:function(a,b){var z,y,x,w,v
z=H.p([],[U.bn])
y=H.p([],[U.es])
x=P.x
w=U.jG
v=H.p([],[w])
z=new U.dw(a,z,b,null,null,null,[],[],null,new U.jA(!1,null,y,new H.a1(0,null,null,null,null,null,0,[x,U.er])),v,new H.a1(0,null,null,null,null,null,0,[x,w]),new U.bW([1,0,0,0,1,0,0,0,1]),new U.bW([1,0,0,0,1,0,0,0,1]),new P.b2(Date.now(),!1))
z.fs(a,b)
return z}}},
h6:{"^":"f:0;a",
$1:function(a){return this.a.eO()}},
bW:{"^":"e;a",
iq:function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=[1,0,0,0,1,0,0,0,1]
y=new U.bW(z)
x=this.a
w=x.length
if(0>=w)return H.a(x,0)
v=x[0]
if(4>=w)return H.a(x,4)
u=x[4]
if(8>=w)return H.a(x,8)
u=J.n(u,x[8])
w=this.a
if(7>=w.length)return H.a(w,7)
t=J.n(v,J.r(u,J.n(w[7],w[5])))
w=this.a
u=w.length
if(3>=u)return H.a(w,3)
v=w[3]
s=w[1]
if(8>=u)return H.a(w,8)
w=J.n(s,w[8])
s=this.a
if(7>=s.length)return H.a(s,7)
r=J.n(v,J.r(w,J.n(s[7],s[2])))
s=this.a
if(6>=s.length)return H.a(s,6)
w=s[6]
s=J.n(s[1],s[5])
v=this.a
if(4>=v.length)return H.a(v,4)
q=J.n(w,J.r(s,J.n(v[4],v[2])))
p=J.d(J.r(t,r),q)
if(J.J(p,0))return y
if(typeof p!=="number")return H.l(p)
o=1/p
w=x.length
if(4>=w)return H.a(x,4)
v=x[4]
if(8>=w)return H.a(x,8)
v=J.n(v,x[8])
if(7>=x.length)return H.a(x,7)
v=J.r(v,J.n(x[7],x[5]))
if(typeof v!=="number")return H.l(v)
if(0>=z.length)return H.a(z,0)
z[0]=o*v
if(6>=x.length)return H.a(x,6)
v=J.n(x[6],x[5])
w=x.length
if(3>=w)return H.a(x,3)
u=x[3]
if(8>=w)return H.a(x,8)
u=J.r(v,J.n(u,x[8]))
if(typeof u!=="number")return H.l(u)
if(3>=z.length)return H.a(z,3)
z[3]=o*u
u=x.length
if(3>=u)return H.a(x,3)
v=x[3]
if(7>=u)return H.a(x,7)
v=J.n(v,x[7])
if(6>=x.length)return H.a(x,6)
v=J.r(v,J.n(x[6],x[4]))
if(typeof v!=="number")return H.l(v)
if(6>=z.length)return H.a(z,6)
z[6]=o*v
if(7>=x.length)return H.a(x,7)
v=J.n(x[7],x[2])
u=x.length
if(1>=u)return H.a(x,1)
w=x[1]
if(8>=u)return H.a(x,8)
w=J.r(v,J.n(w,x[8]))
if(typeof w!=="number")return H.l(w)
if(1>=z.length)return H.a(z,1)
z[1]=o*w
w=x.length
if(0>=w)return H.a(x,0)
v=x[0]
if(8>=w)return H.a(x,8)
v=J.n(v,x[8])
if(6>=x.length)return H.a(x,6)
v=J.r(v,J.n(x[6],x[2]))
if(typeof v!=="number")return H.l(v)
if(4>=z.length)return H.a(z,4)
z[4]=o*v
if(6>=x.length)return H.a(x,6)
v=J.n(x[6],x[1])
w=x.length
if(0>=w)return H.a(x,0)
u=x[0]
if(7>=w)return H.a(x,7)
u=J.r(v,J.n(u,x[7]))
if(typeof u!=="number")return H.l(u)
if(7>=z.length)return H.a(z,7)
z[7]=o*u
u=x.length
if(1>=u)return H.a(x,1)
v=x[1]
if(5>=u)return H.a(x,5)
v=J.n(v,x[5])
if(4>=x.length)return H.a(x,4)
v=J.r(v,J.n(x[4],x[2]))
if(typeof v!=="number")return H.l(v)
if(2>=z.length)return H.a(z,2)
z[2]=o*v
if(3>=x.length)return H.a(x,3)
v=J.n(x[3],x[2])
u=x.length
if(0>=u)return H.a(x,0)
w=x[0]
if(5>=u)return H.a(x,5)
w=J.r(v,J.n(w,x[5]))
if(typeof w!=="number")return H.l(w)
if(5>=z.length)return H.a(z,5)
z[5]=o*w
w=x.length
if(0>=w)return H.a(x,0)
v=x[0]
if(4>=w)return H.a(x,4)
v=J.n(v,x[4])
if(3>=x.length)return H.a(x,3)
v=J.r(v,J.n(x[3],x[1]))
if(typeof v!=="number")return H.l(v)
if(8>=z.length)return H.a(z,8)
z[8]=o*v
return y},
iz:function(a){var z,y,x,w,v,u
z=[1,0,0,0,1,0,0,0,1]
y=this.a
if(0>=y.length)return H.a(y,0)
y=y[0]
x=a.a
if(0>=x.length)return H.a(x,0)
x=J.n(y,x[0])
y=this.a
if(1>=y.length)return H.a(y,1)
y=y[1]
w=a.a
if(3>=w.length)return H.a(w,3)
w=J.d(x,J.n(y,w[3]))
y=this.a
if(2>=y.length)return H.a(y,2)
y=y[2]
x=a.a
if(6>=x.length)return H.a(x,6)
x=J.d(w,J.n(y,x[6]))
if(0>=z.length)return H.a(z,0)
z[0]=x
x=this.a
if(0>=x.length)return H.a(x,0)
x=x[0]
y=a.a
if(1>=y.length)return H.a(y,1)
y=J.n(x,y[1])
x=this.a
if(1>=x.length)return H.a(x,1)
x=x[1]
w=a.a
if(4>=w.length)return H.a(w,4)
w=J.d(y,J.n(x,w[4]))
x=this.a
if(2>=x.length)return H.a(x,2)
x=x[2]
y=a.a
if(7>=y.length)return H.a(y,7)
y=J.d(w,J.n(x,y[7]))
if(1>=z.length)return H.a(z,1)
z[1]=y
y=this.a
if(0>=y.length)return H.a(y,0)
y=y[0]
x=a.a
if(2>=x.length)return H.a(x,2)
x=J.n(y,x[2])
y=this.a
if(1>=y.length)return H.a(y,1)
y=y[1]
w=a.a
if(5>=w.length)return H.a(w,5)
w=J.d(x,J.n(y,w[5]))
y=this.a
if(2>=y.length)return H.a(y,2)
y=y[2]
x=a.a
if(8>=x.length)return H.a(x,8)
x=J.d(w,J.n(y,x[8]))
if(2>=z.length)return H.a(z,2)
z[2]=x
x=this.a
if(3>=x.length)return H.a(x,3)
x=x[3]
y=a.a
if(0>=y.length)return H.a(y,0)
y=J.n(x,y[0])
x=this.a
if(4>=x.length)return H.a(x,4)
x=x[4]
w=a.a
if(3>=w.length)return H.a(w,3)
w=J.d(y,J.n(x,w[3]))
x=this.a
if(5>=x.length)return H.a(x,5)
x=x[5]
y=a.a
if(6>=y.length)return H.a(y,6)
y=J.d(w,J.n(x,y[6]))
if(3>=z.length)return H.a(z,3)
z[3]=y
y=this.a
if(3>=y.length)return H.a(y,3)
y=y[3]
x=a.a
if(1>=x.length)return H.a(x,1)
x=J.n(y,x[1])
y=this.a
if(4>=y.length)return H.a(y,4)
y=y[4]
w=a.a
if(4>=w.length)return H.a(w,4)
w=J.d(x,J.n(y,w[4]))
y=this.a
if(5>=y.length)return H.a(y,5)
y=y[5]
x=a.a
if(7>=x.length)return H.a(x,7)
x=J.d(w,J.n(y,x[7]))
if(4>=z.length)return H.a(z,4)
z[4]=x
x=this.a
if(3>=x.length)return H.a(x,3)
x=x[3]
y=a.a
if(2>=y.length)return H.a(y,2)
y=J.n(x,y[2])
x=this.a
if(4>=x.length)return H.a(x,4)
x=x[4]
w=a.a
if(5>=w.length)return H.a(w,5)
w=J.d(y,J.n(x,w[5]))
x=this.a
if(5>=x.length)return H.a(x,5)
x=x[5]
y=a.a
if(8>=y.length)return H.a(y,8)
y=J.d(w,J.n(x,y[8]))
if(5>=z.length)return H.a(z,5)
z[5]=y
y=this.a
if(6>=y.length)return H.a(y,6)
y=y[6]
x=a.a
if(0>=x.length)return H.a(x,0)
x=J.n(y,x[0])
y=this.a
if(7>=y.length)return H.a(y,7)
y=y[7]
w=a.a
if(3>=w.length)return H.a(w,3)
w=J.d(x,J.n(y,w[3]))
y=this.a
if(8>=y.length)return H.a(y,8)
y=y[8]
x=a.a
if(6>=x.length)return H.a(x,6)
x=J.d(w,J.n(y,x[6]))
if(6>=z.length)return H.a(z,6)
z[6]=x
x=this.a
if(6>=x.length)return H.a(x,6)
x=x[6]
y=a.a
if(1>=y.length)return H.a(y,1)
y=J.n(x,y[1])
x=this.a
if(7>=x.length)return H.a(x,7)
x=x[7]
w=a.a
if(4>=w.length)return H.a(w,4)
w=J.d(y,J.n(x,w[4]))
x=this.a
if(8>=x.length)return H.a(x,8)
x=x[8]
y=a.a
if(7>=y.length)return H.a(y,7)
y=J.d(w,J.n(x,y[7]))
if(7>=z.length)return H.a(z,7)
z[7]=y
y=this.a
if(6>=y.length)return H.a(y,6)
y=y[6]
x=a.a
if(2>=x.length)return H.a(x,2)
x=J.n(y,x[2])
y=this.a
if(7>=y.length)return H.a(y,7)
y=y[7]
w=a.a
if(5>=w.length)return H.a(w,5)
w=J.d(x,J.n(y,w[5]))
y=this.a
if(8>=y.length)return H.a(y,8)
y=y[8]
x=a.a
if(8>=x.length)return H.a(x,8)
x=J.d(w,J.n(y,x[8]))
y=z.length
if(8>=y)return H.a(z,8)
z[8]=x
for(x=this.a,w=x.length,v=0;v<9;++v){if(v>=y)return H.a(z,v)
u=z[v]
if(v>=w)return H.a(x,v)
x[v]=u}},
aM:function(a){var z,y,x,w,v,u,t,s,r
z=a.c
y=this.a
x=y.length
if(0>=x)return H.a(y,0)
w=y[0]
if(typeof w!=="number")return H.l(w)
v=a.d
if(1>=x)return H.a(y,1)
u=y[1]
if(typeof u!=="number")return H.l(u)
if(2>=x)return H.a(y,2)
t=y[2]
if(typeof t!=="number")return H.l(t)
if(3>=x)return H.a(y,3)
s=y[3]
if(typeof s!=="number")return H.l(s)
if(4>=x)return H.a(y,4)
r=y[4]
if(typeof r!=="number")return H.l(r)
if(5>=x)return H.a(y,5)
y=y[5]
if(typeof y!=="number")return H.l(y)
a.c=z*w+v*u+t
a.d=z*s+v*r+y}},
jA:{"^":"e;a,b,c,d",
bJ:function(a){var z,y,x
for(z=this.c,y=0;y<z.length;++y){x=z[y].bJ(a)
if(x!=null){if(y>=z.length)return H.a(z,y)
z[y].e=new P.b2(Date.now(),!1)
if(y>=z.length)return H.a(z,y)
return new U.er(z[y],x)}else if(y>=z.length)return H.a(z,y)}return},
iE:function(a){var z,y
this.b=a
z=J.m(a)
y=z.geA(a)
W.K(y.a,y.b,new U.jB(this),!1,H.F(y,0))
y=z.geC(a)
W.K(y.a,y.b,new U.jC(this),!1,H.F(y,0))
z=z.geB(a)
W.K(z.a,z.b,new U.jD(this),!1,H.F(z,0))
z=document
W.K(z,"keydown",new U.jE(this),!1,W.mQ)
W.K(z,"touchmove",new U.jF(),!1,W.nJ)},
h6:function(a){var z,y
for(z=this.c.length,y=0;y<z;++y);}},
jB:{"^":"f:0;a",
$1:function(a){var z,y,x
z=this.a
y=U.cu(a)
x=z.bJ(y)
if(x!=null)if(x.ah(y))z.d.l(0,-1,x)
z.a=!0
return}},
jC:{"^":"f:0;a",
$1:function(a){var z,y,x
z=this.a
y=z.d
x=y.h(0,-1)
if(x!=null)x.bl(U.cu(a))
y.l(0,-1,null)
z.a=!1
return}},
jD:{"^":"f:0;a",
$1:function(a){var z,y,x
z=this.a
y=U.cu(a)
x=z.d.h(0,-1)
if(x!=null)x.bj(y)
else{x=z.bJ(y)
if(x!=null)if(z.a){x.a.d.aM(y)
x.b.bk(y)}}return}},
jE:{"^":"f:0;a",
$1:function(a){return this.a.h6(a)}},
jF:{"^":"f:0;",
$1:function(a){return J.fH(a)}},
es:{"^":"e;",
bJ:function(a){var z,y,x
z=new U.dy(null,-1,0,0,!1,!1,!1,!1,!1)
z.a=a.a
z.b=a.b
z.c=a.c
z.d=a.d
z.y=a.y
this.d.aM(z)
for(y=this.a,x=y.length-1;x>=0;--x){if(x>=y.length)return H.a(y,x)
if(y[x].bH(z)){if(x>=y.length)return H.a(y,x)
return y[x]}}return}},
er:{"^":"e;a,b",
ah:function(a){this.a.d.aM(a)
this.b=this.b.ah(a)
return!0},
bl:function(a){this.a.d.aM(a)
this.b.bl(a)},
bj:function(a){this.a.d.aM(a)
this.b.bj(a)},
bk:function(a){this.a.d.aM(a)
this.b.bk(a)}},
jG:{"^":"e;"},
dy:{"^":"e;a,b,c,d,e,f,r,x,y",
ft:function(a){var z,y
this.a=-1
z=J.m(a)
y=z.gbO(a)
y=y.gq(y)
y.toString
this.c=y
z=z.gbO(a)
z=z.gu(z)
z.toString
this.d=z
this.y=!0},
w:{
cu:function(a){var z=new U.dy(null,-1,0,0,!1,!1,!1,!1,!1)
z.ft(a)
return z}}}},1]]
setupProgram(dart,0)
J.k=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dQ.prototype
return J.dP.prototype}if(typeof a=="string")return J.bv.prototype
if(a==null)return J.ii.prototype
if(typeof a=="boolean")return J.ig.prototype
if(a.constructor==Array)return J.bt.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.e)return a
return J.c9(a)}
J.y=function(a){if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(a.constructor==Array)return J.bt.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.e)return a
return J.c9(a)}
J.aX=function(a){if(a==null)return a
if(a.constructor==Array)return J.bt.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.e)return a
return J.c9(a)}
J.a5=function(a){if(typeof a=="number")return J.bu.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bA.prototype
return a}
J.bg=function(a){if(typeof a=="number")return J.bu.prototype
if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bA.prototype
return a}
J.d6=function(a){if(typeof a=="string")return J.bv.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bA.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bw.prototype
return a}if(a instanceof P.e)return a
return J.c9(a)}
J.d=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.bg(a).v(a,b)}
J.ch=function(a,b){if(typeof a=="number"&&typeof b=="number")return a/b
return J.a5(a).ai(a,b)}
J.J=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.k(a).F(a,b)}
J.dd=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.a5(a).bU(a,b)}
J.az=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.a5(a).bW(a,b)}
J.aZ=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.a5(a).aj(a,b)}
J.n=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.bg(a).G(a,b)}
J.de=function(a,b){return J.a5(a).f7(a,b)}
J.r=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.a5(a).U(a,b)}
J.fr=function(a,b){if(typeof a=="number"&&typeof b=="number")return(a^b)>>>0
return J.a5(a).fp(a,b)}
J.a7=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fh(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.y(a).h(a,b)}
J.bI=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fh(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.aX(a).l(a,b,c)}
J.df=function(a){return J.m(a).fL(a)}
J.fs=function(a,b,c){return J.m(a).hk(a,b,c)}
J.ft=function(a){return J.a5(a).e5(a)}
J.ar=function(a,b){return J.aX(a).C(a,b)}
J.fu=function(a,b,c,d){return J.m(a).e6(a,b,c,d)}
J.fv=function(a){return J.m(a).bE(a)}
J.fw=function(a,b,c,d,e){return J.m(a).hN(a,b,c,d,e)}
J.dg=function(a,b){return J.m(a).b3(a,b)}
J.ci=function(a,b,c){return J.y(a).hP(a,b,c)}
J.b_=function(a,b){return J.aX(a).L(a,b)}
J.fx=function(a){return J.m(a).gcB(a)}
J.dh=function(a){return J.m(a).ghI(a)}
J.fy=function(a){return J.m(a).gef(a)}
J.cj=function(a){return J.m(a).gcE(a)}
J.bi=function(a){return J.m(a).gau(a)}
J.a_=function(a){return J.k(a).gI(a)}
J.fz=function(a){return J.y(a).gD(a)}
J.fA=function(a){return J.y(a).gT(a)}
J.E=function(a){return J.aX(a).gH(a)}
J.a0=function(a){return J.y(a).gi(a)}
J.fB=function(a){return J.m(a).giB(a)}
J.fC=function(a){return J.m(a).giC(a)}
J.di=function(a){return J.m(a).gN(a)}
J.fD=function(a){return J.m(a).gd4(a)}
J.bj=function(a){return J.m(a).gE(a)}
J.dj=function(a){return J.m(a).gm(a)}
J.bk=function(a){return J.m(a).gu(a)}
J.fE=function(a){return J.m(a).d7(a)}
J.dk=function(a,b,c){return J.m(a).B(a,b,c)}
J.dl=function(a,b){return J.aX(a).af(a,b)}
J.fF=function(a,b,c){return J.d6(a).ex(a,b,c)}
J.fG=function(a,b){return J.k(a).cQ(a,b)}
J.fH=function(a){return J.m(a).cV(a)}
J.bl=function(a){return J.aX(a).a2(a)}
J.fI=function(a,b){return J.aX(a).A(a,b)}
J.fJ=function(a,b,c,d){return J.m(a).eH(a,b,c,d)}
J.fK=function(a,b){return J.m(a).iI(a,b)}
J.fL=function(a){return J.m(a).a3(a)}
J.fM=function(a){return J.m(a).a_(a)}
J.b0=function(a,b){return J.m(a).bY(a,b)}
J.fN=function(a,b){return J.m(a).shM(a,b)}
J.fO=function(a,b){return J.m(a).sbL(a,b)}
J.ck=function(a,b){return J.m(a).seu(a,b)}
J.fP=function(a,b){return J.m(a).sO(a,b)}
J.dm=function(a,b){return J.m(a).sE(a,b)}
J.fQ=function(a,b){return J.m(a).sq(a,b)}
J.fR=function(a,b){return J.m(a).su(a,b)}
J.bm=function(a){return J.m(a).c_(a)}
J.dn=function(a){return J.a5(a).d3(a)}
J.fS=function(a){return J.d6(a).iM(a)}
J.C=function(a){return J.k(a).j(a)}
J.fT=function(a,b){return J.a5(a).iN(a,b)}
J.cl=function(a){return J.d6(a).eP(a)}
I.aJ=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.m=W.fU.prototype
C.n=W.cq.prototype
C.b=W.hj.prototype
C.x=J.j.prototype
C.a=J.bt.prototype
C.y=J.dP.prototype
C.f=J.dQ.prototype
C.d=J.bu.prototype
C.e=J.bv.prototype
C.F=J.bw.prototype
C.t=J.iU.prototype
C.u=W.js.prototype
C.l=J.bA.prototype
C.M=W.c2.prototype
C.v=new P.iO()
C.w=new P.k2()
C.c=new P.kO()
C.o=new P.aD(0)
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.B=function(getTagFallback) {
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
C.D=function(hooks) {
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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.h=new P.iu(null,null)
C.G=new P.iw(null)
C.H=new P.ix(null,null)
C.I=H.p(I.aJ(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.J=I.aJ(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.i=I.aJ([])
C.j=H.p(I.aJ(["bind","if","ref","repeat","syntax"]),[P.q])
C.k=H.p(I.aJ(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.K=H.p(I.aJ([]),[P.bz])
C.r=new H.ha(0,{},C.K,[P.bz,null])
C.L=new H.cP("call")
$.e9="$cachedFunction"
$.ea="$cachedInvocation"
$.ag=0
$.b1=null
$.ds=null
$.d8=null
$.f9=null
$.fm=null
$.c8=null
$.cc=null
$.d9=null
$.aS=null
$.bc=null
$.bd=null
$.d2=!1
$.w=C.c
$.dJ=0
$.at=null
$.cw=null
$.dI=null
$.dH=null
$.dF=null
$.dE=null
$.dD=null
$.dC=null
$.af=0
$.bo=null
$.e5=0
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){$dart_deferred_initializers$[a]($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryUris={}
init.deferredLibraryHashes={};(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["bM","$get$bM",function(){return H.d7("_$dart_dartClosure")},"cD","$get$cD",function(){return H.d7("_$dart_js")},"dM","$get$dM",function(){return H.ib()},"dN","$get$dN",function(){if(typeof WeakMap=="function")var z=new WeakMap()
else{z=$.dJ
$.dJ=z+1
z="expando$key$"+z}return new P.hs(null,z)},"et","$get$et",function(){return H.al(H.c1({
toString:function(){return"$receiver$"}}))},"eu","$get$eu",function(){return H.al(H.c1({$method$:null,
toString:function(){return"$receiver$"}}))},"ev","$get$ev",function(){return H.al(H.c1(null))},"ew","$get$ew",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eA","$get$eA",function(){return H.al(H.c1(void 0))},"eB","$get$eB",function(){return H.al(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"ey","$get$ey",function(){return H.al(H.ez(null))},"ex","$get$ex",function(){return H.al(function(){try{null.$method$}catch(z){return z.message}}())},"eD","$get$eD",function(){return H.al(H.ez(void 0))},"eC","$get$eC",function(){return H.al(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cT","$get$cT",function(){return P.jN()},"br","$get$br",function(){var z,y
z=P.b7
y=new P.an(0,P.jM(),null,[z])
y.fD(null,z)
return y},"be","$get$be",function(){return[]},"eO","$get$eO",function(){return P.dT(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cX","$get$cX",function(){return P.bS()},"dB","$get$dB",function(){return P.jd("^\\S+$",!0,!1)},"d5","$get$d5",function(){return P.f7(self)},"cV","$get$cV",function(){return H.d7("_$dart_dartObject")},"d_","$get$d_",function(){return function DartObject(a){this.o=a}},"U","$get$U",function(){return W.m6().devicePixelRatio},"ab","$get$ab",function(){var z=$.$get$U()
if(typeof z!=="number")return H.l(z)
return 80*z},"o","$get$o",function(){var z=$.$get$U()
if(typeof z!=="number")return H.l(z)
return 34*z},"O","$get$O",function(){var z=$.$get$U()
if(typeof z!=="number")return H.l(z)
return 10*z},"aB","$get$aB",function(){var z=$.$get$U()
if(typeof z!=="number")return H.l(z)
return 25*z},"bK","$get$bK",function(){var z=$.$get$U()
if(typeof z!=="number")return H.l(z)
return 10*z},"co","$get$co",function(){return $.$get$O()},"ao","$get$ao",function(){return P.bS()}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=["e",null,"value","canvasId","error","_","stackTrace","attributeName","invocation","object","x","data","element","context","o","arg1","arg2","arg3","each","sender","arg4","isolate","arg","language","time","attr","n","callback","captureThis","self","arguments","numberOfArguments","jsonString","closure"]
init.types=[{func:1,args:[,]},{func:1,v:true},{func:1},{func:1,v:true,args:[P.e],opt:[P.by]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,,]},{func:1,ret:P.q,args:[P.x]},{func:1,args:[P.aM]},{func:1,ret:P.bF,args:[W.N,P.q,P.q,W.cW]},{func:1,args:[P.q,,]},{func:1,args:[,P.q]},{func:1,args:[P.q]},{func:1,args:[{func:1,v:true}]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[,P.by]},{func:1,args:[P.bz,,]},{func:1,args:[W.N]},{func:1,args:[P.bF,P.aM]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,args:[P.e]},{func:1,ret:P.x,args:[P.q]},{func:1,ret:P.ap,args:[P.q]},{func:1,ret:P.e,args:[,]},{func:1,v:true,args:[P.q,P.q]},{func:1,ret:P.q,args:[P.q,P.q]},{func:1,ret:P.q,args:[P.q]}]
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
if(x==y)H.m4(d||a)
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
Isolate.aJ=a.aJ
Isolate.Q=a.Q
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.fo(U.fj(),b)},[])
else (function(b){H.fo(U.fj(),b)})([])})})()/*
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
    return NetTango_Save(canvasId);
  },


  /// Restores a workspace to a previously saved state (json object). 
  /// Note, for now this is just an alias of the NetTango.init function.
  restore : function(canvasId, json) {
    NetTango_InitWorkspace(canvasId, JSON.stringify(json));
  },


  _relayCallback : function(canvasId) {
    if (canvasId in NetTango._callbacks) {
      NetTango._callbacks[canvasId](canvasId);
    }
  },

  _callbacks : { }
}
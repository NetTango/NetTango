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
b5.$isf=b4
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
init.leafTags[b8[b2]]=false}}b5.$deferredAction()}if(b5.$ise)b5.$deferredAction()}var a3=Object.keys(a4.pending)
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
var d=supportsDirectProtoAccess&&b1!="f"
for(var c=0;c<f.length;c++){var a0=f[c]
var a1=a0.charCodeAt(0)
if(a0==="v"){processStatics(init.statics[b1]=b2.v,b3)
delete b2.v}else if(a1===43){w[g]=a0.substring(1)
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.R=function(){}
var dart=[["","",,H,{"^":"",nj:{"^":"f;a"}}],["","",,J,{"^":"",
n:function(a){return void 0},
ci:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cf:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d8==null){H.lZ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.c(new P.bI("Return interceptor for "+H.h(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cw()]
if(v!=null)return v
v=H.m8(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.r
if(y===Object.prototype)return C.r
if(typeof w=="function"){Object.defineProperty(w,$.$get$cw(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
e:{"^":"f;",
C:function(a,b){return a===b},
gF:function(a){return H.ar(a)},
k:["eP",function(a){return H.c3(a)}],
cw:["eO",function(a,b){throw H.c(P.e4(a,b.ge5(),b.gee(),b.ge6(),null))},null,"gie",2,0,null,9],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationTimeline|AppBannerPromptResult|AudioListener|AudioParam|BarProp|Bluetooth|BluetoothAdvertisingData|BluetoothCharacteristicProperties|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|CHROMIUMSubscribeUniform|CHROMIUMValuebuffer|CSS|Cache|CacheStorage|CanvasGradient|CanvasPattern|CircularGeofencingRegion|Client|Clients|CompositorProxy|ConsoleBase|Coordinates|Credential|CredentialsContainer|Crypto|CryptoKey|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|EXTBlendMinMax|EXTColorBufferFloat|EXTDisjointTimerQuery|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|EffectModel|Entry|EntrySync|FederatedCredential|FileEntry|FileEntrySync|FileError|FileReaderSync|FileWriterSync|FontFace|FormData|GamepadButton|Geofencing|GeofencingRegion|Geolocation|Geoposition|HMDVRDevice|HTMLAllCollection|Headers|IDBFactory|IDBIndex|IdleDeadline|ImageBitmapRenderingContext|InjectedScriptHost|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|KeyframeEffect|MIDIInputMap|MIDIOutputMap|MediaDeviceInfo|MediaDevices|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaMetadata|MediaSession|MemoryInfo|MessageChannel|Metadata|MutationObserver|MutationRecord|NFC|NavigatorStorageUtils|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|PagePopupController|PasswordCredential|PerformanceCompositeTiming|PerformanceEntry|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceObserver|PerformanceObserverEntryList|PerformanceRenderTiming|PerformanceResourceTiming|PerformanceTiming|PeriodicWave|Permissions|PositionError|PositionSensorVRDevice|Presentation|PushManager|PushMessageData|PushSubscription|RTCCertificate|RTCIceCandidate|RTCSessionDescription|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|Selection|ServicePort|SharedArrayBuffer|SourceInfo|SpeechRecognitionAlternative|SpeechSynthesisVoice|StorageInfo|StorageManager|StorageQuota|Stream|StyleMedia|StylePropertyMap|SubtleCrypto|SyncManager|TrackDefault|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRDevice|VREyeParameters|VRFieldOfView|VRPositionState|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGLActiveInfo|WebGLBuffer|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLRenderingContext|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSMatrix|WebKitMutationObserver|WindowClient|WorkerConsole|Worklet|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ix:{"^":"e;",
k:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$isd3:1},
iA:{"^":"e;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gF:function(a){return 0},
cw:[function(a,b){return this.eO(a,b)},null,"gie",2,0,null,9]},
cx:{"^":"e;",
gF:function(a){return 0},
k:["eR",function(a){return String(a)}],
$isiB:1},
jb:{"^":"cx;"},
bJ:{"^":"cx;"},
bB:{"^":"cx;",
k:function(a){var z=a[$.$get$bV()]
return z==null?this.eR(a):J.H(z)},
$iscu:1,
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
by:{"^":"e;$ti",
dQ:function(a,b){if(!!a.immutable$list)throw H.c(new P.l(b))},
aP:function(a,b){if(!!a.fixed$length)throw H.c(new P.l(b))},
D:function(a,b){this.aP(a,"add")
a.push(b)},
aA:function(a,b){var z
this.aP(a,"removeAt")
z=a.length
if(b>=z)throw H.c(P.bf(b,null,null))
return a.splice(b,1)[0]},
J:function(a,b){var z
this.aP(a,"remove")
for(z=0;z<a.length;++z)if(J.V(a[z],b)){a.splice(z,1)
return!0}return!1},
P:function(a,b){var z
this.aP(a,"addAll")
for(z=J.S(b);z.u();)a.push(z.gw())},
ar:function(a,b){return new H.bD(a,b,[H.P(a,0),null])},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
ghM:function(a){if(a.length>0)return a[0]
throw H.c(H.cv())},
a3:function(a,b,c,d,e){var z,y,x
this.dQ(a,"setRange")
P.cL(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
if(e<0)H.C(P.L(e,0,null,"skipCount",null))
if(e+z>d.length)throw H.c(H.dW())
if(e<b)for(y=z-1;y>=0;--y){x=e+y
if(x<0||x>=d.length)return H.a(d,x)
a[b+y]=d[x]}else for(y=0;y<z;++y){x=e+y
if(x<0||x>=d.length)return H.a(d,x)
a[b+y]=d[x]}},
dL:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.c(new P.an(a))}return!1},
O:function(a,b){var z
for(z=0;z<a.length;++z)if(J.V(a[z],b))return!0
return!1},
k:function(a){return P.bZ(a,"[","]")},
gK:function(a){return new J.fY(a,a.length,0,null)},
gF:function(a){return H.ar(a)},
gi:function(a){return a.length},
si:function(a,b){this.aP(a,"set length")
if(b<0)throw H.c(P.L(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.N(a,b))
if(b>=a.length||b<0)throw H.c(H.N(a,b))
return a[b]},
j:function(a,b,c){this.dQ(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.N(a,b))
if(b>=a.length||b<0)throw H.c(H.N(a,b))
a[b]=c},
$isr:1,
$asr:I.R,
$isb:1,
$asb:null,
$isd:1,
$asd:null},
ni:{"^":"by;$ti"},
fY:{"^":"f;a,b,c,d",
gw:function(){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.c(H.E(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bz:{"^":"e;",
gi3:function(a){return a===0?1/a<0:a<0},
cL:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.c(new P.l(""+a+".toInt()"))},
b2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(new P.l(""+a+".round()"))},
it:function(a,b){var z
if(b>20)throw H.c(P.L(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gi3(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a+b},
N:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a-b},
E:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a*b},
bO:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.dD(a,b)},
bv:function(a,b){return(a|0)===a?a/b|0:this.dD(a,b)},
dD:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.c(new P.l("Result of truncating division is "+H.h(z)+": "+H.h(a)+" ~/ "+b))},
eI:function(a,b){if(b<0)throw H.c(H.M(b))
return b>31?0:a<<b>>>0},
eJ:function(a,b){var z
if(b<0)throw H.c(H.M(b))
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
cf:function(a,b){var z
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
eZ:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return(a^b)>>>0},
a8:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a<b},
bc:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>b},
ew:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>=b},
$isbn:1},
dY:{"^":"bz;",$isbn:1,$isy:1},
iy:{"^":"bz;",$isbn:1},
bA:{"^":"e;",
cm:function(a,b){if(b<0)throw H.c(H.N(a,b))
if(b>=a.length)H.C(H.N(a,b))
return a.charCodeAt(b)},
aG:function(a,b){if(b>=a.length)throw H.c(H.N(a,b))
return a.charCodeAt(b)},
i8:function(a,b,c){var z,y
if(c>b.length)throw H.c(P.L(c,0,b.length,null,null))
z=a.length
if(c+z>b.length)return
for(y=0;y<z;++y)if(this.aG(b,c+y)!==this.aG(a,y))return
return new H.jG(c,b,a)},
n:function(a,b){if(typeof b!=="string")throw H.c(P.dr(b,null,null))
return a+b},
hJ:function(a,b){var z,y
z=b.length
y=a.length
if(z>y)return!1
return b===this.cT(a,y-z)},
eL:function(a,b,c){var z
if(c>a.length)throw H.c(P.L(c,0,a.length,null,null))
if(typeof b==="string"){z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)}return J.fM(b,a,c)!=null},
eK:function(a,b){return this.eL(a,b,0)},
ai:function(a,b,c){var z
if(typeof b!=="number"||Math.floor(b)!==b)H.C(H.M(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.C(H.M(c))
z=J.ab(b)
if(z.a8(b,0))throw H.c(P.bf(b,null,null))
if(z.bc(b,c))throw H.c(P.bf(b,null,null))
if(J.at(c,a.length))throw H.c(P.bf(c,null,null))
return a.substring(b,c)},
cT:function(a,b){return this.ai(a,b,null)},
is:function(a){return a.toLowerCase()},
eo:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aG(z,0)===133){x=J.iC(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.cm(z,w)===133?J.iD(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
E:function(a,b){var z,y
if(typeof b!=="number")return H.i(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hp:function(a,b,c){if(c>a.length)throw H.c(P.L(c,0,a.length,null,null))
return H.mj(a,b,c)},
k:function(a){return a},
gF:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.N(a,b))
if(b>=a.length||b<0)throw H.c(H.N(a,b))
return a[b]},
$isr:1,
$asr:I.R,
$isq:1,
v:{
dZ:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
iC:function(a,b){var z,y
for(z=a.length;b<z;){y=C.d.aG(a,b)
if(y!==32&&y!==13&&!J.dZ(y))break;++b}return b},
iD:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.d.cm(a,z)
if(y!==32&&y!==13&&!J.dZ(y))break}return b}}}}],["","",,H,{"^":"",
cv:function(){return new P.Y("No element")},
iw:function(){return new P.Y("Too many elements")},
dW:function(){return new P.Y("Too few elements")},
d:{"^":"a5;$ti",$asd:null},
bc:{"^":"d;$ti",
gK:function(a){return new H.cC(this,this.gi(this),0,null)},
cP:function(a,b){return this.eQ(0,b)},
ar:function(a,b){return new H.bD(this,b,[H.O(this,"bc",0),null])},
b4:function(a,b){var z,y,x
z=H.x([],[H.O(this,"bc",0)])
C.a.si(z,this.gi(this))
for(y=0;y<this.gi(this);++y){x=this.A(0,y)
if(y>=z.length)return H.a(z,y)
z[y]=x}return z},
cM:function(a){return this.b4(a,!0)}},
cN:{"^":"bc;a,b,c,$ti",
gfp:function(){var z,y
z=J.am(this.a)
y=this.c
if(y==null||y>z)return z
return y},
gh6:function(){var z,y
z=J.am(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y,x
z=J.am(this.a)
y=this.b
if(y>=z)return 0
x=this.c
if(x==null||x>=z)return z-y
if(typeof x!=="number")return x.N()
return x-y},
A:function(a,b){var z,y
z=this.gh6()+b
if(b>=0){y=this.gfp()
if(typeof y!=="number")return H.i(y)
y=z>=y}else y=!0
if(y)throw H.c(P.I(b,this,"index",null,null))
return J.dg(this.a,z)},
ir:function(a,b){var z,y,x
if(b<0)H.C(P.L(b,0,null,"count",null))
z=this.c
y=this.b
x=y+b
if(z==null)return H.ep(this.a,y,x,H.P(this,0))
else{if(z<x)return this
return H.ep(this.a,y,x,H.P(this,0))}},
b4:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.a
x=J.D(y)
w=x.gi(y)
v=this.c
if(v!=null&&v<w)w=v
if(typeof w!=="number")return w.N()
u=w-z
if(u<0)u=0
t=H.x(new Array(u),this.$ti)
for(s=0;s<u;++s){r=x.A(y,z+s)
if(s>=t.length)return H.a(t,s)
t[s]=r
if(x.gi(y)<w)throw H.c(new P.an(this))}return t},
f4:function(a,b,c,d){var z,y
z=this.b
if(z<0)H.C(P.L(z,0,null,"start",null))
y=this.c
if(y!=null){if(y<0)H.C(P.L(y,0,null,"end",null))
if(z>y)throw H.c(P.L(z,0,y,"start",null))}},
v:{
ep:function(a,b,c,d){var z=new H.cN(a,b,c,[d])
z.f4(a,b,c,d)
return z}}},
cC:{"^":"f;a,b,c,d",
gw:function(){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.D(z)
x=y.gi(z)
if(this.b!==x)throw H.c(new P.an(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.A(z,w);++this.c
return!0}},
cE:{"^":"a5;a,b,$ti",
gK:function(a){return new H.iV(null,J.S(this.a),this.b,this.$ti)},
gi:function(a){return J.am(this.a)},
$asa5:function(a,b){return[b]},
v:{
c_:function(a,b,c,d){if(!!J.n(a).$isd)return new H.dH(a,b,[c,d])
return new H.cE(a,b,[c,d])}}},
dH:{"^":"cE;a,b,$ti",$isd:1,
$asd:function(a,b){return[b]}},
iV:{"^":"dX;a,b,c,$ti",
u:function(){var z=this.b
if(z.u()){this.a=this.c.$1(z.gw())
return!0}this.a=null
return!1},
gw:function(){return this.a}},
bD:{"^":"bc;a,b,$ti",
gi:function(a){return J.am(this.a)},
A:function(a,b){return this.b.$1(J.dg(this.a,b))},
$asbc:function(a,b){return[b]},
$asd:function(a,b){return[b]},
$asa5:function(a,b){return[b]}},
eH:{"^":"a5;a,b,$ti",
gK:function(a){return new H.jX(J.S(this.a),this.b,this.$ti)},
ar:function(a,b){return new H.cE(this,b,[H.P(this,0),null])}},
jX:{"^":"dX;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gw())===!0)return!0
return!1},
gw:function(){return this.a.gw()}},
dS:{"^":"f;$ti",
si:function(a,b){throw H.c(new P.l("Cannot change the length of a fixed-length list"))},
D:function(a,b){throw H.c(new P.l("Cannot add to a fixed-length list"))},
aA:function(a,b){throw H.c(new P.l("Cannot remove from a fixed-length list"))}},
cO:{"^":"f;fJ:a<",
C:function(a,b){if(b==null)return!1
return b instanceof H.cO&&J.V(this.a,b.a)},
gF:function(a){var z,y
z=this._hashCode
if(z!=null)return z
y=J.a1(this.a)
if(typeof y!=="number")return H.i(y)
z=536870911&664597*y
this._hashCode=z
return z},
k:function(a){return'Symbol("'+H.h(this.a)+'")'}}}],["","",,H,{"^":"",
bM:function(a,b){var z=a.aS(b)
if(!init.globalState.d.cy)init.globalState.f.b3()
return z},
fy:function(a,b){var z,y,x,w,v,u
z={}
z.a=b
if(b==null){b=[]
z.a=b
y=b}else y=b
if(!J.n(y).$isb)throw H.c(P.b7("Arguments to main must be a List: "+H.h(y)))
init.globalState=new H.kO(0,0,1,null,null,null,null,null,null,null,null,null,a)
y=init.globalState
x=self.window==null
w=self.Worker
v=x&&!!self.postMessage
y.x=v
v=!v
if(v)w=w!=null&&$.$get$dU()!=null
else w=!0
y.y=w
y.r=x&&v
y.f=new H.kj(P.cD(null,H.bL),0)
x=P.y
y.z=new H.a_(0,null,null,null,null,null,0,[x,H.cX])
y.ch=new H.a_(0,null,null,null,null,null,0,[x,null])
if(y.x===!0){w=new H.kN()
y.Q=w
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.ip,w)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.kP)}if(init.globalState.x===!0)return
y=init.globalState.a++
w=P.ag(null,null,null,x)
v=new H.c5(0,null,!1)
u=new H.cX(y,new H.a_(0,null,null,null,null,null,0,[x,H.c5]),w,init.createNewIsolate(),v,new H.aT(H.cj()),new H.aT(H.cj()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
w.D(0,0)
u.d_(0,v)
init.globalState.e=u
init.globalState.d=u
if(H.aQ(a,{func:1,args:[,]}))u.aS(new H.mh(z,a))
else if(H.aQ(a,{func:1,args:[,,]}))u.aS(new H.mi(z,a))
else u.aS(a)
init.globalState.f.b3()},
it:function(){var z=init.currentScript
if(z!=null)return String(z.src)
if(init.globalState.x===!0)return H.iu()
return},
iu:function(){var z,y
z=new Error().stack
if(z==null){z=function(){try{throw new Error()}catch(x){return x.stack}}()
if(z==null)throw H.c(new P.l("No stack trace"))}y=z.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(y!=null)return y[1]
y=z.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(y!=null)return y[1]
throw H.c(new P.l('Cannot extract URI from "'+z+'"'))},
ip:[function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new H.c9(!0,[]).ao(b.data)
y=J.D(z)
switch(y.h(z,"command")){case"start":init.globalState.b=y.h(z,"id")
x=y.h(z,"functionName")
w=x==null?init.globalState.cx:init.globalFunctions[x]()
v=y.h(z,"args")
u=new H.c9(!0,[]).ao(y.h(z,"msg"))
t=y.h(z,"isSpawnUri")
s=y.h(z,"startPaused")
r=new H.c9(!0,[]).ao(y.h(z,"replyTo"))
y=init.globalState.a++
q=P.y
p=P.ag(null,null,null,q)
o=new H.c5(0,null,!1)
n=new H.cX(y,new H.a_(0,null,null,null,null,null,0,[q,H.c5]),p,init.createNewIsolate(),o,new H.aT(H.cj()),new H.aT(H.cj()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
p.D(0,0)
n.d_(0,o)
init.globalState.f.a.a4(0,new H.bL(n,new H.iq(w,v,u,t,s,r),"worker-start"))
init.globalState.d=n
init.globalState.f.b3()
break
case"spawn-worker":break
case"message":if(y.h(z,"port")!=null)J.b6(y.h(z,"port"),y.h(z,"msg"))
init.globalState.f.b3()
break
case"close":init.globalState.ch.J(0,$.$get$dV().h(0,a))
a.terminate()
init.globalState.f.b3()
break
case"log":H.io(y.h(z,"msg"))
break
case"print":if(init.globalState.x===!0){y=init.globalState.Q
q=P.aC(["command","print","msg",z])
q=new H.b_(!0,P.bi(null,P.y)).a_(q)
y.toString
self.postMessage(q)}else P.bO(y.h(z,"msg"))
break
case"error":throw H.c(y.h(z,"msg"))}},null,null,4,0,null,22,2],
io:function(a){var z,y,x,w
if(init.globalState.x===!0){y=init.globalState.Q
x=P.aC(["command","log","msg",a])
x=new H.b_(!0,P.bi(null,P.y)).a_(x)
y.toString
self.postMessage(x)}else try{self.console.log(a)}catch(w){H.J(w)
z=H.Z(w)
y=P.bX(z)
throw H.c(y)}},
ir:function(a,b,c,d,e,f){var z,y,x,w
z=init.globalState.d
y=z.a
$.ec=$.ec+("_"+y)
$.ed=$.ed+("_"+y)
y=z.e
x=init.globalState.d.a
w=z.f
J.b6(f,["spawned",new H.cb(y,x),w,z.r])
x=new H.is(a,b,c,d,z)
if(e===!0){z.dK(w,w)
init.globalState.f.a.a4(0,new H.bL(z,x,"start isolate"))}else x.$0()},
lj:function(a){return new H.c9(!0,[]).ao(new H.b_(!1,P.bi(null,P.y)).a_(a))},
mh:{"^":"j:2;a,b",
$0:function(){this.b.$1(this.a.a)}},
mi:{"^":"j:2;a,b",
$0:function(){this.b.$2(this.a.a,null)}},
kO:{"^":"f;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",v:{
kP:[function(a){var z=P.aC(["command","print","msg",a])
return new H.b_(!0,P.bi(null,P.y)).a_(z)},null,null,2,0,null,7]}},
cX:{"^":"f;a,b,c,i5:d<,hq:e<,f,r,hY:x?,aY:y<,hy:z<,Q,ch,cx,cy,db,dx",
dK:function(a,b){if(!this.f.C(0,a))return
if(this.Q.D(0,b)&&!this.y)this.y=!0
this.cg()},
io:function(a){var z,y,x,w,v,u
if(!this.y)return
z=this.Q
z.J(0,a)
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
if(w===y.c)y.dj();++y.d}this.y=!1}this.cg()},
hc:function(a,b){var z,y,x
if(this.ch==null)this.ch=[]
for(z=J.n(a),y=0;x=this.ch,y<x.length;y+=2)if(z.C(a,x[y])){z=this.ch
x=y+1
if(x>=z.length)return H.a(z,x)
z[x]=b
return}x.push(a)
this.ch.push(b)},
im:function(a){var z,y,x
if(this.ch==null)return
for(z=J.n(a),y=0;x=this.ch,y<x.length;y+=2)if(z.C(a,x[y])){z=this.ch
x=y+2
z.toString
if(typeof z!=="object"||z===null||!!z.fixed$length)H.C(new P.l("removeRange"))
P.cL(y,x,z.length,null,null,null)
z.splice(y,x-y)
return}},
eH:function(a,b){if(!this.r.C(0,a))return
this.db=b},
hR:function(a,b,c){var z=J.n(b)
if(!z.C(b,0))z=z.C(b,1)&&!this.cy
else z=!0
if(z){J.b6(a,c)
return}z=this.cx
if(z==null){z=P.cD(null,null)
this.cx=z}z.a4(0,new H.kD(a,c))},
hQ:function(a,b){var z
if(!this.r.C(0,a))return
z=J.n(b)
if(!z.C(b,0))z=z.C(b,1)&&!this.cy
else z=!0
if(z){this.cs()
return}z=this.cx
if(z==null){z=P.cD(null,null)
this.cx=z}z.a4(0,this.gi6())},
hS:function(a,b){var z,y,x
z=this.dx
if(z.a===0){if(this.db===!0&&this===init.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.bO(a)
if(b!=null)P.bO(b)}return}y=new Array(2)
y.fixed$length=Array
y[0]=J.H(a)
y[1]=b==null?null:J.H(b)
for(x=new P.eY(z,z.r,null,null),x.c=z.e;x.u();)J.b6(x.d,y)},
aS:function(a){var z,y,x,w,v,u,t
z=init.globalState.d
init.globalState.d=this
$=this.d
y=null
x=this.cy
this.cy=!0
try{y=a.$0()}catch(u){w=H.J(u)
v=H.Z(u)
this.hS(w,v)
if(this.db===!0){this.cs()
if(this===init.globalState.e)throw u}}finally{this.cy=x
init.globalState.d=z
if(z!=null)$=z.gi5()
if(this.cx!=null)for(;t=this.cx,!t.gI(t);)this.cx.ei().$0()}return y},
hO:function(a){var z=J.D(a)
switch(z.h(a,0)){case"pause":this.dK(z.h(a,1),z.h(a,2))
break
case"resume":this.io(z.h(a,1))
break
case"add-ondone":this.hc(z.h(a,1),z.h(a,2))
break
case"remove-ondone":this.im(z.h(a,1))
break
case"set-errors-fatal":this.eH(z.h(a,1),z.h(a,2))
break
case"ping":this.hR(z.h(a,1),z.h(a,2),z.h(a,3))
break
case"kill":this.hQ(z.h(a,1),z.h(a,2))
break
case"getErrors":this.dx.D(0,z.h(a,1))
break
case"stopErrors":this.dx.J(0,z.h(a,1))
break}},
e4:function(a){return this.b.h(0,a)},
d_:function(a,b){var z=this.b
if(z.U(0,a))throw H.c(P.bX("Registry: ports must be registered only once."))
z.j(0,a,b)},
cg:function(){var z=this.b
if(z.gi(z)-this.c.a>0||this.y||!this.x)init.globalState.z.j(0,this.a,this)
else this.cs()},
cs:[function(){var z,y,x,w,v
z=this.cx
if(z!=null)z.an(0)
for(z=this.b,y=z.gcO(z),y=y.gK(y);y.u();)y.gw().fh()
z.an(0)
this.c.an(0)
init.globalState.z.J(0,this.a)
this.dx.an(0)
if(this.ch!=null){for(x=0;z=this.ch,y=z.length,x<y;x+=2){w=z[x]
v=x+1
if(v>=y)return H.a(z,v)
J.b6(w,z[v])}this.ch=null}},"$0","gi6",0,0,1]},
kD:{"^":"j:1;a,b",
$0:[function(){J.b6(this.a,this.b)},null,null,0,0,null,"call"]},
kj:{"^":"f;a,b",
hz:function(){var z=this.a
if(z.b===z.c)return
return z.ei()},
ek:function(){var z,y,x
z=this.hz()
if(z==null){if(init.globalState.e!=null)if(init.globalState.z.U(0,init.globalState.e.a))if(init.globalState.r===!0){y=init.globalState.e.b
y=y.gI(y)}else y=!1
else y=!1
else y=!1
if(y)H.C(P.bX("Program exited with open ReceivePorts."))
y=init.globalState
if(y.x===!0){x=y.z
x=x.gI(x)&&y.f.b===0}else x=!1
if(x){y=y.Q
x=P.aC(["command","close"])
x=new H.b_(!0,new P.eZ(0,null,null,null,null,null,0,[null,P.y])).a_(x)
y.toString
self.postMessage(x)}return!1}z.ik()
return!0},
dA:function(){if(self.window!=null)new H.kk(this).$0()
else for(;this.ek(););},
b3:function(){var z,y,x,w,v
if(init.globalState.x!==!0)this.dA()
else try{this.dA()}catch(x){z=H.J(x)
y=H.Z(x)
w=init.globalState.Q
v=P.aC(["command","error","msg",H.h(z)+"\n"+H.h(y)])
v=new H.b_(!0,P.bi(null,P.y)).a_(v)
w.toString
self.postMessage(v)}}},
kk:{"^":"j:1;a",
$0:function(){if(!this.a.ek())return
P.jM(C.m,this)}},
bL:{"^":"f;a,b,c",
ik:function(){var z=this.a
if(z.gaY()){z.ghy().push(this)
return}z.aS(this.b)}},
kN:{"^":"f;"},
iq:{"^":"j:2;a,b,c,d,e,f",
$0:function(){H.ir(this.a,this.b,this.c,this.d,this.e,this.f)}},
is:{"^":"j:1;a,b,c,d,e",
$0:function(){var z,y
z=this.e
z.shY(!0)
if(this.d!==!0)this.a.$1(this.c)
else{y=this.a
if(H.aQ(y,{func:1,args:[,,]}))y.$2(this.b,this.c)
else if(H.aQ(y,{func:1,args:[,]}))y.$1(this.b)
else y.$0()}z.cg()}},
eK:{"^":"f;"},
cb:{"^":"eK;b,a",
ag:function(a,b){var z,y,x
z=init.globalState.z.h(0,this.a)
if(z==null)return
y=this.b
if(y.gdq())return
x=H.lj(b)
if(z.ghq()===y){z.hO(x)
return}init.globalState.f.a.a4(0,new H.bL(z,new H.kR(this,x),"receive"))},
C:function(a,b){if(b==null)return!1
return b instanceof H.cb&&J.V(this.b,b.b)},
gF:function(a){return this.b.gc5()}},
kR:{"^":"j:2;a,b",
$0:function(){var z=this.a.b
if(!z.gdq())J.fC(z,this.b)}},
cY:{"^":"eK;b,c,a",
ag:function(a,b){var z,y,x
z=P.aC(["command","message","port",this,"msg",b])
y=new H.b_(!0,P.bi(null,P.y)).a_(z)
if(init.globalState.x===!0){init.globalState.Q.toString
self.postMessage(y)}else{x=init.globalState.ch.h(0,this.b)
if(x!=null)x.postMessage(y)}},
C:function(a,b){if(b==null)return!1
return b instanceof H.cY&&J.V(this.b,b.b)&&J.V(this.a,b.a)&&J.V(this.c,b.c)},
gF:function(a){var z,y,x
z=J.dd(this.b,16)
y=J.dd(this.a,8)
x=this.c
if(typeof x!=="number")return H.i(x)
return(z^y^x)>>>0}},
c5:{"^":"f;c5:a<,b,dq:c<",
fh:function(){this.c=!0
this.b=null},
fb:function(a,b){if(this.c)return
this.b.$1(b)},
$isjo:1},
jI:{"^":"f;a,b,c",
a1:function(a){var z
if(self.setTimeout!=null){if(this.b)throw H.c(new P.l("Timer in event loop cannot be canceled."))
z=this.c
if(z==null)return;--init.globalState.f.b
self.clearTimeout(z)
this.c=null}else throw H.c(new P.l("Canceling a timer."))},
f5:function(a,b){var z,y
if(a===0)z=self.setTimeout==null||init.globalState.x===!0
else z=!1
if(z){this.c=1
z=init.globalState.f
y=init.globalState.d
z.a.a4(0,new H.bL(y,new H.jK(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++init.globalState.f.b
this.c=self.setTimeout(H.aa(new H.jL(this,b),0),a)}else throw H.c(new P.l("Timer greater than 0."))},
v:{
jJ:function(a,b){var z=new H.jI(!0,!1,null)
z.f5(a,b)
return z}}},
jK:{"^":"j:1;a,b",
$0:function(){this.a.c=null
this.b.$0()}},
jL:{"^":"j:1;a,b",
$0:[function(){this.a.c=null;--init.globalState.f.b
this.b.$0()},null,null,0,0,null,"call"]},
aT:{"^":"f;c5:a<",
gF:function(a){var z,y,x
z=this.a
y=J.ab(z)
x=y.eJ(z,0)
y=y.bO(z,4294967296)
if(typeof y!=="number")return H.i(y)
z=x^y
z=(~z>>>0)+(z<<15>>>0)&4294967295
z=((z^z>>>12)>>>0)*5&4294967295
z=((z^z>>>4)>>>0)*2057&4294967295
return(z^z>>>16)>>>0},
C:function(a,b){var z,y
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aT){z=this.a
y=b.a
return z==null?y==null:z===y}return!1}},
b_:{"^":"f;a,b",
a_:[function(a){var z,y,x,w,v
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=this.b
y=z.h(0,a)
if(y!=null)return["ref",y]
z.j(0,a,z.gi(z))
z=J.n(a)
if(!!z.$iscG)return["buffer",a]
if(!!z.$isbE)return["typed",a]
if(!!z.$isr)return this.eD(a)
if(!!z.$isim){x=this.geA()
w=z.gae(a)
w=H.c_(w,x,H.O(w,"a5",0),null)
w=P.aX(w,!0,H.O(w,"a5",0))
z=z.gcO(a)
z=H.c_(z,x,H.O(z,"a5",0),null)
return["map",w,P.aX(z,!0,H.O(z,"a5",0))]}if(!!z.$isiB)return this.eE(a)
if(!!z.$ise)this.ep(a)
if(!!z.$isjo)this.ba(a,"RawReceivePorts can't be transmitted:")
if(!!z.$iscb)return this.eF(a)
if(!!z.$iscY)return this.eG(a)
if(!!z.$isj){v=a.$static_name
if(v==null)this.ba(a,"Closures can't be transmitted:")
return["function",v]}if(!!z.$isaT)return["capability",a.a]
if(!(a instanceof P.f))this.ep(a)
return["dart",init.classIdExtractor(a),this.eC(init.classFieldsExtractor(a))]},"$1","geA",2,0,0,8],
ba:function(a,b){throw H.c(new P.l((b==null?"Can't transmit:":b)+" "+H.h(a)))},
ep:function(a){return this.ba(a,null)},
eD:function(a){var z=this.eB(a)
if(!!a.fixed$length)return["fixed",z]
if(!a.fixed$length)return["extendable",z]
if(!a.immutable$list)return["mutable",z]
if(a.constructor===Array)return["const",z]
this.ba(a,"Can't serialize indexable: ")},
eB:function(a){var z,y,x
z=[]
C.a.si(z,a.length)
for(y=0;y<a.length;++y){x=this.a_(a[y])
if(y>=z.length)return H.a(z,y)
z[y]=x}return z},
eC:function(a){var z
for(z=0;z<a.length;++z)C.a.j(a,z,this.a_(a[z]))
return a},
eE:function(a){var z,y,x,w
if(!!a.constructor&&a.constructor!==Object)this.ba(a,"Only plain JS Objects are supported:")
z=Object.keys(a)
y=[]
C.a.si(y,z.length)
for(x=0;x<z.length;++x){w=this.a_(a[z[x]])
if(x>=y.length)return H.a(y,x)
y[x]=w}return["js-object",z,y]},
eG:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eF:function(a){if(this.a)return["sendport",init.globalState.b,a.a,a.b.gc5()]
return["raw sendport",a]}},
c9:{"^":"f;a,b",
ao:[function(a){var z,y,x,w,v,u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.b7("Bad serialized message: "+H.h(a)))
switch(C.a.ghM(a)){case"ref":if(1>=a.length)return H.a(a,1)
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
y=H.x(this.aR(x),[null])
y.fixed$length=Array
return y
case"extendable":if(1>=a.length)return H.a(a,1)
x=a[1]
this.b.push(x)
return H.x(this.aR(x),[null])
case"mutable":if(1>=a.length)return H.a(a,1)
x=a[1]
this.b.push(x)
return this.aR(x)
case"const":if(1>=a.length)return H.a(a,1)
x=a[1]
this.b.push(x)
y=H.x(this.aR(x),[null])
y.fixed$length=Array
return y
case"map":return this.hC(a)
case"sendport":return this.hD(a)
case"raw sendport":if(1>=a.length)return H.a(a,1)
x=a[1]
this.b.push(x)
return x
case"js-object":return this.hB(a)
case"function":if(1>=a.length)return H.a(a,1)
x=init.globalFunctions[a[1]]()
this.b.push(x)
return x
case"capability":if(1>=a.length)return H.a(a,1)
return new H.aT(a[1])
case"dart":y=a.length
if(1>=y)return H.a(a,1)
w=a[1]
if(2>=y)return H.a(a,2)
v=a[2]
u=init.instanceFromClassId(w)
this.b.push(u)
this.aR(v)
return init.initializeEmptyInstance(w,u,v)
default:throw H.c("couldn't deserialize: "+H.h(a))}},"$1","ghA",2,0,0,8],
aR:function(a){var z,y,x
z=J.D(a)
y=0
while(!0){x=z.gi(a)
if(typeof x!=="number")return H.i(x)
if(!(y<x))break
z.j(a,y,this.ao(z.h(a,y)));++y}return a},
hC:function(a){var z,y,x,w,v,u
z=a.length
if(1>=z)return H.a(a,1)
y=a[1]
if(2>=z)return H.a(a,2)
x=a[2]
w=P.bb()
this.b.push(w)
y=J.dm(y,this.ghA()).cM(0)
for(z=J.D(y),v=J.D(x),u=0;u<z.gi(y);++u)w.j(0,z.h(y,u),this.ao(v.h(x,u)))
return w},
hD:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.a(a,1)
y=a[1]
if(2>=z)return H.a(a,2)
x=a[2]
if(3>=z)return H.a(a,3)
w=a[3]
if(J.V(y,init.globalState.b)){v=init.globalState.z.h(0,x)
if(v==null)return
u=v.e4(w)
if(u==null)return
t=new H.cb(u,x)}else t=new H.cY(y,w,x)
this.b.push(t)
return t},
hB:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.a(a,1)
y=a[1]
if(2>=z)return H.a(a,2)
x=a[2]
w={}
this.b.push(w)
z=J.D(y)
v=J.D(x)
u=0
while(!0){t=z.gi(y)
if(typeof t!=="number")return H.i(t)
if(!(u<t))break
w[z.h(y,u)]=this.ao(v.h(x,u));++u}return w}}}],["","",,H,{"^":"",
hh:function(){throw H.c(new P.l("Cannot modify unmodifiable Map"))},
lS:function(a){return init.types[a]},
fs:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.n(a).$isu},
h:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.H(a)
if(typeof z!=="string")throw H.c(H.M(a))
return z},
ar:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
ea:function(a,b){if(b==null)throw H.c(new P.ct(a,null,null))
return b.$1(a)},
ee:function(a,b,c){var z,y
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return H.ea(a,c)
if(3>=z.length)return H.a(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return H.ea(a,c)},
e9:function(a,b){return b.$1(a)},
jm:function(a,b){var z,y
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.e9(a,b)
z=parseFloat(a)
if(isNaN(z)){y=C.d.eo(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return H.e9(a,b)}return z},
c4:function(a){var z,y,x,w,v,u,t,s
z=J.n(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.n(a).$isbJ){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.d.aG(w,0)===36)w=C.d.cT(w,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+H.ft(H.cg(a),0,null),init.mangledGlobalNames)},
c3:function(a){return"Instance of '"+H.c4(a)+"'"},
a2:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.cf(z,10))>>>0,56320|z&1023)}throw H.c(P.L(a,0,1114111,null,null))},
W:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jl:function(a){return a.b?H.W(a).getUTCFullYear()+0:H.W(a).getFullYear()+0},
jj:function(a){return a.b?H.W(a).getUTCMonth()+1:H.W(a).getMonth()+1},
jf:function(a){return a.b?H.W(a).getUTCDate()+0:H.W(a).getDate()+0},
jg:function(a){return a.b?H.W(a).getUTCHours()+0:H.W(a).getHours()+0},
ji:function(a){return a.b?H.W(a).getUTCMinutes()+0:H.W(a).getMinutes()+0},
jk:function(a){return a.b?H.W(a).getUTCSeconds()+0:H.W(a).getSeconds()+0},
jh:function(a){return a.b?H.W(a).getUTCMilliseconds()+0:H.W(a).getMilliseconds()+0},
cK:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.M(a))
return a[b]},
ef:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.M(a))
a[b]=c},
eb:function(a,b,c){var z,y,x
z={}
z.a=0
y=[]
x=[]
z.a=b.length
C.a.P(y,b)
z.b=""
if(c!=null&&!c.gI(c))c.R(0,new H.je(z,y,x))
return J.fN(a,new H.iz(C.K,""+"$"+z.a+z.b,0,y,x,null))},
jd:function(a,b){var z,y
z=b instanceof Array?b:P.aX(b,!0,null)
y=z.length
if(y===0){if(!!a.$0)return a.$0()}else if(y===1){if(!!a.$1)return a.$1(z[0])}else if(y===2){if(!!a.$2)return a.$2(z[0],z[1])}else if(y===3){if(!!a.$3)return a.$3(z[0],z[1],z[2])}else if(y===4){if(!!a.$4)return a.$4(z[0],z[1],z[2],z[3])}else if(y===5)if(!!a.$5)return a.$5(z[0],z[1],z[2],z[3],z[4])
return H.jc(a,z)},
jc:function(a,b){var z,y,x,w,v,u
z=b.length
y=a[""+"$"+z]
if(y==null){y=J.n(a)["call*"]
if(y==null)return H.eb(a,b,null)
x=H.eh(y)
w=x.d
v=w+x.e
if(x.f||w>z||v<z)return H.eb(a,b,null)
b=P.aX(b,!0,null)
for(u=z;u<v;++u)C.a.D(b,init.metadata[x.hx(0,u)])}return y.apply(a,b)},
i:function(a){throw H.c(H.M(a))},
a:function(a,b){if(a==null)J.am(a)
throw H.c(H.N(a,b))},
N:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.au(!0,b,"index",null)
z=J.am(a)
if(!(b<0)){if(typeof z!=="number")return H.i(z)
y=b>=z}else y=!0
if(y)return P.I(b,a,"index",null,z)
return P.bf(b,"index",null)},
M:function(a){return new P.au(!0,a,null,null)},
fm:function(a){if(typeof a!=="number")throw H.c(H.M(a))
return a},
lG:function(a){if(typeof a!=="string")throw H.c(H.M(a))
return a},
c:function(a){var z
if(a==null)a=new P.c2()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fA})
z.name=""}else z.toString=H.fA
return z},
fA:[function(){return J.H(this.dartException)},null,null,0,0,null],
C:function(a){throw H.c(a)},
E:function(a){throw H.c(new P.an(a))},
J:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.ml(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.cf(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cy(H.h(y)+" (Error "+w+")",null))
case 445:case 5007:v=H.h(y)+" (Error "+w+")"
return z.$1(new H.e7(v,null))}}if(a instanceof TypeError){u=$.$get$ev()
t=$.$get$ew()
s=$.$get$ex()
r=$.$get$ey()
q=$.$get$eC()
p=$.$get$eD()
o=$.$get$eA()
$.$get$ez()
n=$.$get$eF()
m=$.$get$eE()
l=u.a2(y)
if(l!=null)return z.$1(H.cy(y,l))
else{l=t.a2(y)
if(l!=null){l.method="call"
return z.$1(H.cy(y,l))}else{l=s.a2(y)
if(l==null){l=r.a2(y)
if(l==null){l=q.a2(y)
if(l==null){l=p.a2(y)
if(l==null){l=o.a2(y)
if(l==null){l=r.a2(y)
if(l==null){l=n.a2(y)
if(l==null){l=m.a2(y)
v=l!=null}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0
if(v)return z.$1(new H.e7(y,l==null?null:l.method))}}return z.$1(new H.jW(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.el()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.au(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.el()
return a},
Z:function(a){var z
if(a==null)return new H.f_(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.f_(a,null)},
me:function(a){if(a==null||typeof a!='object')return J.a1(a)
else return H.ar(a)},
lR:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
m0:[function(a,b,c,d,e,f,g){switch(c){case 0:return H.bM(b,new H.m1(a))
case 1:return H.bM(b,new H.m2(a,d))
case 2:return H.bM(b,new H.m3(a,d,e))
case 3:return H.bM(b,new H.m4(a,d,e,f))
case 4:return H.bM(b,new H.m5(a,d,e,f,g))}throw H.c(P.bX("Unsupported number of arguments for wrapped closure"))},null,null,14,0,null,20,17,25,31,32,18,16],
aa:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,init.globalState.d,H.m0)
a.$identity=z
return z},
ha:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.n(c).$isb){z.$reflectionInfo=c
x=H.eh(z).r}else x=c
w=d?Object.create(new H.jB().constructor.prototype):Object.create(new H.cn(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.ae
$.ae=J.k(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.dw(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.lS,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.du:H.co
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.c("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.dw(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
h7:function(a,b,c,d){var z=H.co
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dw:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h9(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h7(y,!w,z,b)
if(y===0){w=$.ae
$.ae=J.k(w,1)
u="self"+H.h(w)
w="return function(){var "+u+" = this."
v=$.b8
if(v==null){v=H.bU("self")
$.b8=v}return new Function(w+H.h(v)+";return "+u+"."+H.h(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.ae
$.ae=J.k(w,1)
t+=H.h(w)
w="return function("+t+"){return this."
v=$.b8
if(v==null){v=H.bU("self")
$.b8=v}return new Function(w+H.h(v)+"."+H.h(z)+"("+t+");}")()},
h8:function(a,b,c,d){var z,y
z=H.co
y=H.du
switch(b?-1:a){case 0:throw H.c(new H.jr("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h9:function(a,b){var z,y,x,w,v,u,t,s
z=H.h4()
y=$.dt
if(y==null){y=H.bU("receiver")
$.dt=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h8(w,!u,x,b)
if(w===1){y="return function(){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+");"
u=$.ae
$.ae=J.k(u,1)
return new Function(y+H.h(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.h(z)+"."+H.h(x)+"(this."+H.h(y)+", "+s+");"
u=$.ae
$.ae=J.k(u,1)
return new Function(y+H.h(u)+"}")()},
d4:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.n(c).$isb){c.fixed$length=Array
z=c}else z=c
return H.ha(a,b,z,!!d,e,f)},
mc:function(a){if(typeof a==="number"||a==null)return a
throw H.c(H.dv(H.c4(a),"num"))},
mg:function(a,b){var z=J.D(b)
throw H.c(H.dv(H.c4(a),z.ai(b,3,z.gi(b))))},
fq:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.n(a)[b]
else z=!0
if(z)return a
H.mg(a,b)},
lP:function(a){var z=J.n(a)
return"$S" in z?z.$S():null},
aQ:function(a,b){var z
if(a==null)return!1
z=H.lP(a)
return z==null?!1:H.fr(z,b)},
mk:function(a){throw H.c(new P.hl(a))},
cj:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
d6:function(a){return init.getIsolateTag(a)},
x:function(a,b){a.$ti=b
return a},
cg:function(a){if(a==null)return
return a.$ti},
fp:function(a,b){return H.da(a["$as"+H.h(b)],H.cg(a))},
O:function(a,b,c){var z=H.fp(a,b)
return z==null?null:z[c]},
P:function(a,b){var z=H.cg(a)
return z==null?null:z[b]},
b5:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ft(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.h(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.b5(z,b)
return H.lp(a,b)}return"unknown-reified-type"},
lp:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.b5(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.b5(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.b5(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.lQ(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.b5(r[p],b)+(" "+H.h(p))}w+="}"}return"("+w+") => "+z},
ft:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.aY("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.l=v+", "
u=a[y]
if(u!=null)w=!1
v=z.l+=H.b5(u,c)}return w?"":"<"+z.k(0)+">"},
da:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bN:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.cg(a)
y=J.n(a)
if(y[b]==null)return!1
return H.fj(H.da(y[d],z),c)},
fj:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.a3(a[y],b[y]))return!1
return!0},
bm:function(a,b,c){return a.apply(b,H.fp(b,c))},
a3:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="bd")return!0
if('func' in b)return H.fr(a,b)
if('func' in a)return b.builtin$cls==="cu"||b.builtin$cls==="f"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.b5(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.fj(H.da(u,z),x)},
fi:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.a3(z,v)||H.a3(v,z)))return!1}return!0},
lA:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=Object.getOwnPropertyNames(b)
z.fixed$length=Array
y=z
for(z=y.length,x=0;x<z;++x){w=y[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.a3(v,u)||H.a3(u,v)))return!1}return!0},
fr:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.a3(z,y)||H.a3(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.fi(x,w,!1))return!1
if(!H.fi(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.a3(o,n)||H.a3(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.a3(o,n)||H.a3(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.a3(o,n)||H.a3(n,o)))return!1}}return H.lA(a.named,b.named)},
pu:function(a){var z=$.d7
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
pq:function(a){return H.ar(a)},
pp:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
m8:function(a){var z,y,x,w,v,u
z=$.d7.$1(a)
y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ch[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.fh.$2(a,z)
if(z!=null){y=$.ce[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.ch[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d9(x)
$.ce[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.ch[z]=x
return x}if(v==="-"){u=H.d9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fv(a,x)
if(v==="*")throw H.c(new P.bI(z))
if(init.leafTags[z]===true){u=H.d9(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fv(a,x)},
fv:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.ci(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d9:function(a){return J.ci(a,!1,null,!!a.$isu)},
m9:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.ci(z,!1,null,!!z.$isu)
else return J.ci(z,c,null,null)},
lZ:function(){if(!0===$.d8)return
$.d8=!0
H.m_()},
m_:function(){var z,y,x,w,v,u,t,s
$.ce=Object.create(null)
$.ch=Object.create(null)
H.lV()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fw.$1(v)
if(u!=null){t=H.m9(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lV:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.b3(C.y,H.b3(C.D,H.b3(C.n,H.b3(C.n,H.b3(C.C,H.b3(C.z,H.b3(C.A(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.d7=new H.lW(v)
$.fh=new H.lX(u)
$.fw=new H.lY(t)},
b3:function(a,b){return a(b)||b},
mj:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fz:function(a,b,c){var z,y,x
H.lG(c)
if(b==="")if(a==="")return c
else{z=a.length
y=H.h(c)
for(x=0;x<z;++x)y=y+a[x]+H.h(c)
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hg:{"^":"eG;a,$ti",$aseG:I.R,$asG:I.R,$isG:1},
hf:{"^":"f;",
gI:function(a){return this.gi(this)===0},
k:function(a){return P.cF(this)},
j:function(a,b,c){return H.hh()},
$isG:1,
$asG:null},
hi:{"^":"hf;a,b,c,$ti",
gi:function(a){return this.a},
U:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.U(0,b))return
return this.de(b)},
de:function(a){return this.b[a]},
R:function(a,b){var z,y,x,w
z=this.c
for(y=z.length,x=0;x<y;++x){w=z[x]
b.$2(w,this.de(w))}}},
iz:{"^":"f;a,b,c,d,e,f",
ge5:function(){var z=this.a
return z},
gee:function(){var z,y,x,w
if(this.c===1)return C.h
z=this.d
y=z.length-this.e.length
if(y===0)return C.h
x=[]
for(w=0;w<y;++w){if(w>=z.length)return H.a(z,w)
x.push(z[w])}x.fixed$length=Array
x.immutable$list=Array
return x},
ge6:function(){var z,y,x,w,v,u,t,s,r
if(this.c!==0)return C.q
z=this.e
y=z.length
x=this.d
w=x.length-y
if(y===0)return C.q
v=P.bH
u=new H.a_(0,null,null,null,null,null,0,[v,null])
for(t=0;t<y;++t){if(t>=z.length)return H.a(z,t)
s=z[t]
r=w+t
if(r<0||r>=x.length)return H.a(x,r)
u.j(0,new H.cO(s),x[r])}return new H.hg(u,[v,null])}},
jq:{"^":"f;a,b,c,d,e,f,r,x",
hx:function(a,b){var z=this.d
if(typeof b!=="number")return b.a8()
if(b<z)return
return this.b[3+b-z]},
v:{
eh:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.jq(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
je:{"^":"j:9;a,b,c",
$2:function(a,b){var z=this.a
z.b=z.b+"$"+H.h(a)
this.c.push(a)
this.b.push(b);++z.a}},
jU:{"^":"f;a,b,c,d,e,f",
a2:function(a){var z,y,x
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
v:{
ai:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jU(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
c7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eB:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
e7:{"^":"Q;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+H.h(z)+"' on null"}},
iJ:{"^":"Q;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.h(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.h(this.a)+")"},
v:{
cy:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iJ(a,y,z?null:b.receiver)}}},
jW:{"^":"Q;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
ml:{"^":"j:0;a",
$1:function(a){if(!!J.n(a).$isQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
f_:{"^":"f;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z}},
m1:{"^":"j:2;a",
$0:function(){return this.a.$0()}},
m2:{"^":"j:2;a,b",
$0:function(){return this.a.$1(this.b)}},
m3:{"^":"j:2;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
m4:{"^":"j:2;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
m5:{"^":"j:2;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
j:{"^":"f;",
k:function(a){return"Closure '"+H.c4(this).trim()+"'"},
gev:function(){return this},
$iscu:1,
gev:function(){return this}},
eq:{"^":"j;"},
jB:{"^":"eq;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cn:{"^":"eq;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gF:function(a){var z,y
z=this.c
if(z==null)y=H.ar(this.a)
else y=typeof z!=="object"?J.a1(z):H.ar(z)
return J.fB(y,H.ar(this.b))},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.h(this.d)+"' of "+H.c3(z)},
v:{
co:function(a){return a.a},
du:function(a){return a.c},
h4:function(){var z=$.b8
if(z==null){z=H.bU("self")
$.b8=z}return z},
bU:function(a){var z,y,x,w,v
z=new H.cn("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
h6:{"^":"Q;a",
k:function(a){return this.a},
v:{
dv:function(a,b){return new H.h6("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")}}},
jr:{"^":"Q;a",
k:function(a){return"RuntimeError: "+H.h(this.a)}},
a_:{"^":"f;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gI:function(a){return this.a===0},
gae:function(a){return new H.iQ(this,[H.P(this,0)])},
gcO:function(a){return H.c_(this.gae(this),new H.iI(this),H.P(this,0),H.P(this,1))},
U:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.da(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.da(y,b)}else return this.i_(b)},
i_:function(a){var z=this.d
if(z==null)return!1
return this.aX(this.bm(z,this.aW(a)),a)>=0},
h:function(a,b){var z,y,x
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aK(z,b)
return y==null?null:y.gaq()}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null)return
y=this.aK(x,b)
return y==null?null:y.gaq()}else return this.i0(b)},
i0:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bm(z,this.aW(a))
x=this.aX(y,a)
if(x<0)return
return y[x].gaq()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.c7()
this.b=z}this.cZ(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c7()
this.c=y}this.cZ(y,b,c)}else{x=this.d
if(x==null){x=this.c7()
this.d=x}w=this.aW(b)
v=this.bm(x,w)
if(v==null)this.ce(x,w,[this.c8(b,c)])
else{u=this.aX(v,b)
if(u>=0)v[u].saq(c)
else v.push(this.c8(b,c))}}},
J:function(a,b){if(typeof b==="string")return this.dv(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dv(this.c,b)
else return this.i1(b)},
i1:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.bm(z,this.aW(a))
x=this.aX(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.dF(w)
return w.gaq()},
an:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
R:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.c(new P.an(this))
z=z.c}},
cZ:function(a,b,c){var z=this.aK(a,b)
if(z==null)this.ce(a,b,this.c8(b,c))
else z.saq(c)},
dv:function(a,b){var z
if(a==null)return
z=this.aK(a,b)
if(z==null)return
this.dF(z)
this.dc(a,b)
return z.gaq()},
c8:function(a,b){var z,y
z=new H.iP(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
dF:function(a){var z,y
z=a.gfM()
y=a.gfK()
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.r=this.r+1&67108863},
aW:function(a){return J.a1(a)&0x3ffffff},
aX:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].gdZ(),b))return y
return-1},
k:function(a){return P.cF(this)},
aK:function(a,b){return a[b]},
bm:function(a,b){return a[b]},
ce:function(a,b,c){a[b]=c},
dc:function(a,b){delete a[b]},
da:function(a,b){return this.aK(a,b)!=null},
c7:function(){var z=Object.create(null)
this.ce(z,"<non-identifier-key>",z)
this.dc(z,"<non-identifier-key>")
return z},
$isim:1,
$isG:1,
$asG:null,
v:{
iH:function(a,b){return new H.a_(0,null,null,null,null,null,0,[a,b])}}},
iI:{"^":"j:0;a",
$1:[function(a){return this.a.h(0,a)},null,null,2,0,null,21,"call"]},
iP:{"^":"f;dZ:a<,aq:b@,fK:c<,fM:d<"},
iQ:{"^":"d;a,$ti",
gi:function(a){return this.a.a},
gK:function(a){var z,y
z=this.a
y=new H.iR(z,z.r,null,null)
y.c=z.e
return y}},
iR:{"^":"f;a,b,c,d",
gw:function(){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(new P.an(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lW:{"^":"j:0;a",
$1:function(a){return this.a(a)}},
lX:{"^":"j:10;a",
$2:function(a,b){return this.a(a,b)}},
lY:{"^":"j:11;a",
$1:function(a){return this.a(a)}},
jG:{"^":"f;a,b,c",
h:function(a,b){if(b!==0)H.C(P.bf(b,null,null))
return this.c}}}],["","",,H,{"^":"",
lQ:function(a){var z=H.x(a?Object.keys(a):[],[null])
z.fixed$length=Array
return z}}],["","",,H,{"^":"",
mf:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",cG:{"^":"e;",$iscG:1,$ish5:1,"%":"ArrayBuffer"},bE:{"^":"e;",
fE:function(a,b,c,d){var z=P.L(b,0,c,d,null)
throw H.c(z)},
d2:function(a,b,c,d){if(b>>>0!==b||b>c)this.fE(a,b,c,d)},
$isbE:1,
$isa6:1,
"%":";ArrayBufferView;cH|e0|e2|c1|e1|e3|ap"},nB:{"^":"bE;",$isa6:1,"%":"DataView"},cH:{"^":"bE;",
gi:function(a){return a.length},
dC:function(a,b,c,d,e){var z,y,x
z=a.length
this.d2(a,b,z,"start")
this.d2(a,c,z,"end")
if(b>c)throw H.c(P.L(b,0,c,null,null))
y=c-b
x=d.length
if(x-e<y)throw H.c(new P.Y("Not enough elements"))
if(e!==0||x!==y)d=d.subarray(e,e+y)
a.set(d,b)},
$isu:1,
$asu:I.R,
$isr:1,
$asr:I.R},c1:{"^":"e2;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
a[b]=c},
a3:function(a,b,c,d,e){if(!!J.n(d).$isc1){this.dC(a,b,c,d,e)
return}this.cV(a,b,c,d,e)}},e0:{"^":"cH+B;",$asu:I.R,$asr:I.R,
$asb:function(){return[P.ak]},
$asd:function(){return[P.ak]},
$isb:1,
$isd:1},e2:{"^":"e0+dS;",$asu:I.R,$asr:I.R,
$asb:function(){return[P.ak]},
$asd:function(){return[P.ak]}},ap:{"^":"e3;",
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
a[b]=c},
a3:function(a,b,c,d,e){if(!!J.n(d).$isap){this.dC(a,b,c,d,e)
return}this.cV(a,b,c,d,e)},
$isb:1,
$asb:function(){return[P.y]},
$isd:1,
$asd:function(){return[P.y]}},e1:{"^":"cH+B;",$asu:I.R,$asr:I.R,
$asb:function(){return[P.y]},
$asd:function(){return[P.y]},
$isb:1,
$isd:1},e3:{"^":"e1+dS;",$asu:I.R,$asr:I.R,
$asb:function(){return[P.y]},
$asd:function(){return[P.y]}},nC:{"^":"c1;",$isa6:1,$isb:1,
$asb:function(){return[P.ak]},
$isd:1,
$asd:function(){return[P.ak]},
"%":"Float32Array"},nD:{"^":"c1;",$isa6:1,$isb:1,
$asb:function(){return[P.ak]},
$isd:1,
$asd:function(){return[P.ak]},
"%":"Float64Array"},nE:{"^":"ap;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isa6:1,
$isb:1,
$asb:function(){return[P.y]},
$isd:1,
$asd:function(){return[P.y]},
"%":"Int16Array"},nF:{"^":"ap;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isa6:1,
$isb:1,
$asb:function(){return[P.y]},
$isd:1,
$asd:function(){return[P.y]},
"%":"Int32Array"},nG:{"^":"ap;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isa6:1,
$isb:1,
$asb:function(){return[P.y]},
$isd:1,
$asd:function(){return[P.y]},
"%":"Int8Array"},nH:{"^":"ap;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isa6:1,
$isb:1,
$asb:function(){return[P.y]},
$isd:1,
$asd:function(){return[P.y]},
"%":"Uint16Array"},nI:{"^":"ap;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isa6:1,
$isb:1,
$asb:function(){return[P.y]},
$isd:1,
$asd:function(){return[P.y]},
"%":"Uint32Array"},nJ:{"^":"ap;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isa6:1,
$isb:1,
$asb:function(){return[P.y]},
$isd:1,
$asd:function(){return[P.y]},
"%":"CanvasPixelArray|Uint8ClampedArray"},nK:{"^":"ap;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.C(H.N(a,b))
return a[b]},
$isa6:1,
$isb:1,
$asb:function(){return[P.y]},
$isd:1,
$asd:function(){return[P.y]},
"%":";Uint8Array"}}],["","",,P,{"^":"",
k1:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lB()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.aa(new P.k3(z),1)).observe(y,{childList:true})
return new P.k2(z,y,x)}else if(self.setImmediate!=null)return P.lC()
return P.lD()},
oX:[function(a){++init.globalState.f.b
self.scheduleImmediate(H.aa(new P.k4(a),0))},"$1","lB",2,0,6],
oY:[function(a){++init.globalState.f.b
self.setImmediate(H.aa(new P.k5(a),0))},"$1","lC",2,0,6],
oZ:[function(a){P.cP(C.m,a)},"$1","lD",2,0,6],
lq:function(a,b,c){if(H.aQ(a,{func:1,args:[P.bd,P.bd]}))return a.$2(b,c)
else return a.$1(b)},
f9:function(a,b){if(H.aQ(a,{func:1,args:[P.bd,P.bd]})){b.toString
return a}else{b.toString
return a}},
hA:function(a,b,c){var z
if(a==null)a=new P.c2()
z=$.w
if(z!==C.b)z.toString
z=new P.a0(0,z,null,[c])
z.d1(a,b)
return z},
ls:function(){var z,y
for(;z=$.b0,z!=null;){$.bk=null
y=J.di(z)
$.b0=y
if(y==null)$.bj=null
z.gdN().$0()}},
po:[function(){$.d1=!0
try{P.ls()}finally{$.bk=null
$.d1=!1
if($.b0!=null)$.$get$cS().$1(P.fl())}},"$0","fl",0,0,1],
fe:function(a){var z=new P.eI(a,null)
if($.b0==null){$.bj=z
$.b0=z
if(!$.d1)$.$get$cS().$1(P.fl())}else{$.bj.b=z
$.bj=z}},
lw:function(a){var z,y,x
z=$.b0
if(z==null){P.fe(a)
$.bk=$.bj
return}y=new P.eI(a,null)
x=$.bk
if(x==null){y.b=z
$.bk=y
$.b0=y}else{y.b=x.b
x.b=y
$.bk=y
if(y.b==null)$.bj=y}},
fx:function(a){var z=$.w
if(C.b===z){P.aP(null,null,C.b,a)
return}z.toString
P.aP(null,null,z,z.cj(a,!0))},
fd:function(a){var z,y,x,w
if(a==null)return
try{a.$0()}catch(x){z=H.J(x)
y=H.Z(x)
w=$.w
w.toString
P.b1(null,null,w,z,y)}},
pm:[function(a){},"$1","lE",2,0,21,1],
lt:[function(a,b){var z=$.w
z.toString
P.b1(null,null,z,a,b)},function(a){return P.lt(a,null)},"$2","$1","lF",2,2,3,0],
pn:[function(){},"$0","fk",0,0,1],
f3:function(a,b,c){$.w.toString
a.at(b,c)},
jM:function(a,b){var z=$.w
if(z===C.b){z.toString
return P.cP(a,b)}return P.cP(a,z.cj(b,!0))},
cP:function(a,b){var z=C.c.bv(a.a,1000)
return H.jJ(z<0?0:z,b)},
jZ:function(){return $.w},
b1:function(a,b,c,d,e){var z={}
z.a=d
P.lw(new P.lv(z,e))},
fa:function(a,b,c,d){var z,y
y=$.w
if(y===c)return d.$0()
$.w=c
z=y
try{y=d.$0()
return y}finally{$.w=z}},
fc:function(a,b,c,d,e){var z,y
y=$.w
if(y===c)return d.$1(e)
$.w=c
z=y
try{y=d.$1(e)
return y}finally{$.w=z}},
fb:function(a,b,c,d,e,f){var z,y
y=$.w
if(y===c)return d.$2(e,f)
$.w=c
z=y
try{y=d.$2(e,f)
return y}finally{$.w=z}},
aP:function(a,b,c,d){var z=C.b!==c
if(z)d=c.cj(d,!(!z||!1))
P.fe(d)},
k3:{"^":"j:0;a",
$1:[function(a){var z,y;--init.globalState.f.b
z=this.a
y=z.a
z.a=null
y.$0()},null,null,2,0,null,5,"call"]},
k2:{"^":"j:12;a,b,c",
$1:function(a){var z,y;++init.globalState.f.b
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
k4:{"^":"j:2;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
k5:{"^":"j:2;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
k7:{"^":"eM;a,$ti"},
k8:{"^":"kb;aH:y@,a9:z@,bf:Q@,x,a,b,c,d,e,f,r,$ti",
ft:function(a){return(this.y&1)===a},
h8:function(){this.y^=1},
gfG:function(){return(this.y&2)!==0},
h2:function(){this.y|=4},
gfS:function(){return(this.y&4)!==0},
bo:[function(){},"$0","gbn",0,0,1],
bq:[function(){},"$0","gbp",0,0,1]},
cT:{"^":"f;a6:c<,$ti",
gaY:function(){return!1},
gaL:function(){return this.c<4},
fq:function(){var z=this.r
if(z!=null)return z
z=new P.a0(0,$.w,null,[null])
this.r=z
return z},
aE:function(a){var z
a.saH(this.c&1)
z=this.e
this.e=a
a.sa9(null)
a.sbf(z)
if(z==null)this.d=a
else z.sa9(a)},
dw:function(a){var z,y
z=a.gbf()
y=a.ga9()
if(z==null)this.d=y
else z.sa9(y)
if(y==null)this.e=z
else y.sbf(z)
a.sbf(a)
a.sa9(a)},
h7:function(a,b,c,d){var z,y,x
if((this.c&4)!==0){if(c==null)c=P.fk()
z=new P.kh($.w,0,c,this.$ti)
z.dB()
return z}z=$.w
y=d?1:0
x=new P.k8(0,null,null,this,null,null,null,z,y,null,null,this.$ti)
x.cX(a,b,c,d,H.P(this,0))
x.Q=x
x.z=x
this.aE(x)
z=this.d
y=this.e
if(z==null?y==null:z===y)P.fd(this.a)
return x},
fO:function(a){if(a.ga9()===a)return
if(a.gfG())a.h2()
else{this.dw(a)
if((this.c&2)===0&&this.d==null)this.bT()}return},
fP:function(a){},
fQ:function(a){},
be:["eV",function(){if((this.c&4)!==0)return new P.Y("Cannot add new events after calling close")
return new P.Y("Cannot add new events while doing an addStream")}],
D:[function(a,b){if(!this.gaL())throw H.c(this.be())
this.bt(b)},"$1","ghb",2,0,function(){return H.bm(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"cT")}],
he:[function(a,b){if(!this.gaL())throw H.c(this.be())
$.w.toString
this.bu(a,b)},function(a){return this.he(a,null)},"iC","$2","$1","ghd",2,2,3,0],
dR:function(a){var z
if((this.c&4)!==0)return this.r
if(!this.gaL())throw H.c(this.be())
this.c|=4
z=this.fq()
this.aN()
return z},
c4:function(a){var z,y,x,w
z=this.c
if((z&2)!==0)throw H.c(new P.Y("Cannot fire new event. Controller is already firing an event"))
y=this.d
if(y==null)return
x=z&1
this.c=z^3
for(;y!=null;)if(y.ft(x)){y.saH(y.gaH()|2)
a.$1(y)
y.h8()
w=y.ga9()
if(y.gfS())this.dw(y)
y.saH(y.gaH()&4294967293)
y=w}else y=y.ga9()
this.c&=4294967293
if(this.d==null)this.bT()},
bT:function(){if((this.c&4)!==0&&this.r.a===0)this.r.bS(null)
P.fd(this.b)}},
cc:{"^":"cT;a,b,c,d,e,f,r,$ti",
gaL:function(){return P.cT.prototype.gaL.call(this)===!0&&(this.c&2)===0},
be:function(){if((this.c&2)!==0)return new P.Y("Cannot fire new event. Controller is already firing an event")
return this.eV()},
bt:function(a){var z=this.d
if(z==null)return
if(z===this.e){this.c|=2
z.aF(0,a)
this.c&=4294967293
if(this.d==null)this.bT()
return}this.c4(new P.la(this,a))},
bu:function(a,b){if(this.d==null)return
this.c4(new P.lc(this,a,b))},
aN:function(){if(this.d!=null)this.c4(new P.lb(this))
else this.r.bS(null)}},
la:{"^":"j;a,b",
$1:function(a){a.aF(0,this.b)},
$S:function(){return H.bm(function(a){return{func:1,args:[[P.aN,a]]}},this.a,"cc")}},
lc:{"^":"j;a,b,c",
$1:function(a){a.at(this.b,this.c)},
$S:function(){return H.bm(function(a){return{func:1,args:[[P.aN,a]]}},this.a,"cc")}},
lb:{"^":"j;a",
$1:function(a){a.d0()},
$S:function(){return H.bm(function(a){return{func:1,args:[[P.aN,a]]}},this.a,"cc")}},
eL:{"^":"f;$ti",
ho:[function(a,b){if(a==null)a=new P.c2()
if(this.a.a!==0)throw H.c(new P.Y("Future already completed"))
$.w.toString
this.aa(a,b)},function(a){return this.ho(a,null)},"cn","$2","$1","ghn",2,2,3,0]},
eJ:{"^":"eL;a,$ti",
aQ:function(a,b){var z=this.a
if(z.a!==0)throw H.c(new P.Y("Future already completed"))
z.bS(b)},
aa:function(a,b){this.a.d1(a,b)}},
f0:{"^":"eL;a,$ti",
aQ:function(a,b){var z=this.a
if(z.a!==0)throw H.c(new P.Y("Future already completed"))
z.bh(b)},
aa:function(a,b){this.a.aa(a,b)}},
eS:{"^":"f;ab:a@,H:b>,c,dN:d<,e",
gal:function(){return this.b.b},
gdX:function(){return(this.c&1)!==0},
ghV:function(){return(this.c&2)!==0},
gdW:function(){return this.c===8},
ghW:function(){return this.e!=null},
hT:function(a){return this.b.b.cG(this.d,a)},
i9:function(a){if(this.c!==6)return!0
return this.b.b.cG(this.d,J.bp(a))},
dV:function(a){var z,y,x
z=this.e
y=J.m(a)
x=this.b.b
if(H.aQ(z,{func:1,args:[,,]}))return x.ip(z,y.gW(a),a.gah())
else return x.cG(z,y.gW(a))},
hU:function(){return this.b.b.ej(this.d)}},
a0:{"^":"f;a6:a<,al:b<,av:c<,$ti",
gfF:function(){return this.a===2},
gc6:function(){return this.a>=4},
gfA:function(){return this.a===8},
h_:function(a){this.a=2
this.c=a},
em:function(a,b){var z,y
z=$.w
if(z!==C.b){z.toString
if(b!=null)b=P.f9(b,z)}y=new P.a0(0,$.w,null,[null])
this.aE(new P.eS(null,y,b==null?1:3,a,b))
return y},
cK:function(a){return this.em(a,null)},
er:function(a){var z,y
z=$.w
y=new P.a0(0,z,null,this.$ti)
if(z!==C.b)z.toString
this.aE(new P.eS(null,y,8,a,null))
return y},
h1:function(){this.a=1},
fg:function(){this.a=0},
gaj:function(){return this.c},
gfe:function(){return this.c},
h3:function(a){this.a=4
this.c=a},
h0:function(a){this.a=8
this.c=a},
d3:function(a){this.a=a.ga6()
this.c=a.gav()},
aE:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gc6()){y.aE(a)
return}this.a=y.ga6()
this.c=y.gav()}z=this.b
z.toString
P.aP(null,null,z,new P.kp(this,a))}},
du:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gab()!=null;)w=w.gab()
w.sab(x)}}else{if(y===2){v=this.c
if(!v.gc6()){v.du(a)
return}this.a=v.ga6()
this.c=v.gav()}z.a=this.dz(a)
y=this.b
y.toString
P.aP(null,null,y,new P.kw(z,this))}},
au:function(){var z=this.c
this.c=null
return this.dz(z)},
dz:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gab()
z.sab(y)}return y},
bh:function(a){var z,y
z=this.$ti
if(H.bN(a,"$isaA",z,"$asaA"))if(H.bN(a,"$isa0",z,null))P.ca(a,this)
else P.eT(a,this)
else{y=this.au()
this.a=4
this.c=a
P.aZ(this,y)}},
aa:[function(a,b){var z=this.au()
this.a=8
this.c=new P.bR(a,b)
P.aZ(this,z)},function(a){return this.aa(a,null)},"iy","$2","$1","gd9",2,2,3,0,3,4],
bS:function(a){var z
if(H.bN(a,"$isaA",this.$ti,"$asaA")){this.fd(a)
return}this.a=1
z=this.b
z.toString
P.aP(null,null,z,new P.kr(this,a))},
fd:function(a){var z
if(H.bN(a,"$isa0",this.$ti,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aP(null,null,z,new P.kv(this,a))}else P.ca(a,this)
return}P.eT(a,this)},
d1:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aP(null,null,z,new P.kq(this,a,b))},
f8:function(a,b){this.a=4
this.c=a},
$isaA:1,
v:{
eT:function(a,b){var z,y,x
b.h1()
try{a.em(new P.ks(b),new P.kt(b))}catch(x){z=H.J(x)
y=H.Z(x)
P.fx(new P.ku(b,z,y))}},
ca:function(a,b){var z
for(;a.gfF();)a=a.gfe()
if(a.gc6()){z=b.au()
b.d3(a)
P.aZ(b,z)}else{z=b.gav()
b.h_(a)
a.du(z)}},
aZ:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z={}
z.a=a
for(y=a;!0;){x={}
w=y.gfA()
if(b==null){if(w){v=z.a.gaj()
y=z.a.gal()
u=J.bp(v)
t=v.gah()
y.toString
P.b1(null,null,y,u,t)}return}for(;b.gab()!=null;b=s){s=b.gab()
b.sab(null)
P.aZ(z.a,b)}r=z.a.gav()
x.a=w
x.b=r
y=!w
if(!y||b.gdX()||b.gdW()){q=b.gal()
if(w){u=z.a.gal()
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){v=z.a.gaj()
y=z.a.gal()
u=J.bp(v)
t=v.gah()
y.toString
P.b1(null,null,y,u,t)
return}p=$.w
if(p==null?q!=null:p!==q)$.w=q
else p=null
if(b.gdW())new P.kz(z,x,w,b).$0()
else if(y){if(b.gdX())new P.ky(x,b,r).$0()}else if(b.ghV())new P.kx(z,x,b).$0()
if(p!=null)$.w=p
y=x.b
if(!!J.n(y).$isaA){o=J.dj(b)
if(y.a>=4){b=o.au()
o.d3(y)
z.a=y
continue}else P.ca(y,o)
return}}o=J.dj(b)
b=o.au()
y=x.a
u=x.b
if(!y)o.h3(u)
else o.h0(u)
z.a=o
y=o}}}},
kp:{"^":"j:2;a,b",
$0:function(){P.aZ(this.a,this.b)}},
kw:{"^":"j:2;a,b",
$0:function(){P.aZ(this.b,this.a.a)}},
ks:{"^":"j:0;a",
$1:[function(a){var z=this.a
z.fg()
z.bh(a)},null,null,2,0,null,1,"call"]},
kt:{"^":"j:13;a",
$2:[function(a,b){this.a.aa(a,b)},function(a){return this.$2(a,null)},"$1",null,null,null,2,2,null,0,3,4,"call"]},
ku:{"^":"j:2;a,b,c",
$0:function(){this.a.aa(this.b,this.c)}},
kr:{"^":"j:2;a,b",
$0:function(){var z,y
z=this.a
y=z.au()
z.a=4
z.c=this.b
P.aZ(z,y)}},
kv:{"^":"j:2;a,b",
$0:function(){P.ca(this.b,this.a)}},
kq:{"^":"j:2;a,b,c",
$0:function(){this.a.aa(this.b,this.c)}},
kz:{"^":"j:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.d.hU()}catch(w){y=H.J(w)
x=H.Z(w)
if(this.c){v=J.bp(this.a.a.gaj())
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.gaj()
else u.b=new P.bR(y,x)
u.a=!0
return}if(!!J.n(z).$isaA){if(z instanceof P.a0&&z.ga6()>=4){if(z.ga6()===8){v=this.b
v.b=z.gav()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.cK(new P.kA(t))
v.a=!1}}},
kA:{"^":"j:0;a",
$1:[function(a){return this.a},null,null,2,0,null,5,"call"]},
ky:{"^":"j:1;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.hT(this.c)}catch(x){z=H.J(x)
y=H.Z(x)
w=this.a
w.b=new P.bR(z,y)
w.a=!0}}},
kx:{"^":"j:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.gaj()
w=this.c
if(w.i9(z)===!0&&w.ghW()){v=this.b
v.b=w.dV(z)
v.a=!1}}catch(u){y=H.J(u)
x=H.Z(u)
w=this.a
v=J.bp(w.a.gaj())
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.gaj()
else s.b=new P.bR(y,x)
s.a=!0}}},
eI:{"^":"f;dN:a<,S:b*"},
a8:{"^":"f;$ti",
ar:function(a,b){return new P.kQ(b,this,[H.O(this,"a8",0),null])},
hP:function(a,b){return new P.kB(a,b,this,[H.O(this,"a8",0)])},
dV:function(a){return this.hP(a,null)},
gi:function(a){var z,y
z={}
y=new P.a0(0,$.w,null,[P.y])
z.a=0
this.X(new P.jC(z),!0,new P.jD(z,y),y.gd9())
return y},
cM:function(a){var z,y,x
z=H.O(this,"a8",0)
y=H.x([],[z])
x=new P.a0(0,$.w,null,[[P.b,z]])
this.X(new P.jE(this,y),!0,new P.jF(y,x),x.gd9())
return x}},
jC:{"^":"j:0;a",
$1:[function(a){++this.a.a},null,null,2,0,null,5,"call"]},
jD:{"^":"j:2;a,b",
$0:[function(){this.b.bh(this.a.a)},null,null,0,0,null,"call"]},
jE:{"^":"j;a,b",
$1:[function(a){this.b.push(a)},null,null,2,0,null,10,"call"],
$S:function(){return H.bm(function(a){return{func:1,args:[a]}},this.a,"a8")}},
jF:{"^":"j:2;a,b",
$0:[function(){this.b.bh(this.a)},null,null,0,0,null,"call"]},
em:{"^":"f;$ti"},
eM:{"^":"l2;a,$ti",
gF:function(a){return(H.ar(this.a)^892482866)>>>0},
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.eM))return!1
return b.a===this.a}},
kb:{"^":"aN;$ti",
c9:function(){return this.x.fO(this)},
bo:[function(){this.x.fP(this)},"$0","gbn",0,0,1],
bq:[function(){this.x.fQ(this)},"$0","gbp",0,0,1]},
aN:{"^":"f;al:d<,a6:e<,$ti",
b1:function(a,b){var z=this.e
if((z&8)!==0)return
this.e=(z+128|4)>>>0
if(z<128&&this.r!=null)this.r.dP()
if((z&4)===0&&(this.e&32)===0)this.dk(this.gbn())},
cz:function(a){return this.b1(a,null)},
cD:function(a){var z=this.e
if((z&8)!==0)return
if(z>=128){z-=128
this.e=z
if(z<128){if((z&64)!==0){z=this.r
z=!z.gI(z)}else z=!1
if(z)this.r.bI(this)
else{z=(this.e&4294967291)>>>0
this.e=z
if((z&32)===0)this.dk(this.gbp())}}}},
a1:function(a){var z=(this.e&4294967279)>>>0
this.e=z
if((z&8)===0)this.bU()
z=this.f
return z==null?$.$get$bx():z},
gaY:function(){return this.e>=128},
bU:function(){var z=(this.e|8)>>>0
this.e=z
if((z&64)!==0)this.r.dP()
if((this.e&32)===0)this.r=null
this.f=this.c9()},
aF:["eW",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.bt(b)
else this.bR(new P.ke(b,null,[H.O(this,"aN",0)]))}],
at:["eX",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.bu(a,b)
else this.bR(new P.kg(a,b,null))}],
d0:function(){var z=this.e
if((z&8)!==0)return
z=(z|2)>>>0
this.e=z
if(z<32)this.aN()
else this.bR(C.v)},
bo:[function(){},"$0","gbn",0,0,1],
bq:[function(){},"$0","gbp",0,0,1],
c9:function(){return},
bR:function(a){var z,y
z=this.r
if(z==null){z=new P.l3(null,null,0,[H.O(this,"aN",0)])
this.r=z}z.D(0,a)
y=this.e
if((y&64)===0){y=(y|64)>>>0
this.e=y
if(y<128)this.r.bI(this)}},
bt:function(a){var z=this.e
this.e=(z|32)>>>0
this.d.cH(this.a,a)
this.e=(this.e&4294967263)>>>0
this.bW((z&4)!==0)},
bu:function(a,b){var z,y
z=this.e
y=new P.ka(this,a,b)
if((z&1)!==0){this.e=(z|16)>>>0
this.bU()
z=this.f
if(!!J.n(z).$isaA&&z!==$.$get$bx())z.er(y)
else y.$0()}else{y.$0()
this.bW((z&4)!==0)}},
aN:function(){var z,y
z=new P.k9(this)
this.bU()
this.e=(this.e|16)>>>0
y=this.f
if(!!J.n(y).$isaA&&y!==$.$get$bx())y.er(z)
else z.$0()},
dk:function(a){var z=this.e
this.e=(z|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.bW((z&4)!==0)},
bW:function(a){var z,y
if((this.e&64)!==0){z=this.r
z=z.gI(z)}else z=!1
if(z){z=(this.e&4294967231)>>>0
this.e=z
if((z&4)!==0)if(z<128){z=this.r
z=z==null||z.gI(z)}else z=!1
else z=!1
if(z)this.e=(this.e&4294967291)>>>0}for(;!0;a=y){z=this.e
if((z&8)!==0){this.r=null
return}y=(z&4)!==0
if(a===y)break
this.e=(z^32)>>>0
if(y)this.bo()
else this.bq()
this.e=(this.e&4294967263)>>>0}z=this.e
if((z&64)!==0&&z<128)this.r.bI(this)},
cX:function(a,b,c,d,e){var z,y
z=a==null?P.lE():a
y=this.d
y.toString
this.a=z
this.b=P.f9(b==null?P.lF():b,y)
this.c=c==null?P.fk():c}},
ka:{"^":"j:1;a,b,c",
$0:function(){var z,y,x,w,v,u
z=this.a
y=z.e
if((y&8)!==0&&(y&16)===0)return
z.e=(y|32)>>>0
y=z.b
x=H.aQ(y,{func:1,args:[P.f,P.bG]})
w=z.d
v=this.b
u=z.b
if(x)w.iq(u,v,this.c)
else w.cH(u,v)
z.e=(z.e&4294967263)>>>0}},
k9:{"^":"j:1;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=(y|42)>>>0
z.d.cF(z.c)
z.e=(z.e&4294967263)>>>0}},
l2:{"^":"a8;$ti",
X:function(a,b,c,d){return this.a.h7(a,d,c,!0===b)},
b_:function(a,b,c){return this.X(a,null,b,c)}},
eN:{"^":"f;S:a*"},
ke:{"^":"eN;b,a,$ti",
cA:function(a){a.bt(this.b)}},
kg:{"^":"eN;W:b>,ah:c<,a",
cA:function(a){a.bu(this.b,this.c)}},
kf:{"^":"f;",
cA:function(a){a.aN()},
gS:function(a){return},
sS:function(a,b){throw H.c(new P.Y("No events after a done."))}},
kS:{"^":"f;a6:a<",
bI:function(a){var z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.fx(new P.kT(this,a))
this.a=1},
dP:function(){if(this.a===1)this.a=3}},
kT:{"^":"j:2;a,b",
$0:function(){var z,y,x,w
z=this.a
y=z.a
z.a=0
if(y===3)return
x=z.b
w=J.di(x)
z.b=w
if(w==null)z.c=null
x.cA(this.b)}},
l3:{"^":"kS;b,c,a,$ti",
gI:function(a){return this.c==null},
D:function(a,b){var z=this.c
if(z==null){this.c=b
this.b=b}else{J.dp(z,b)
this.c=b}}},
kh:{"^":"f;al:a<,a6:b<,c,$ti",
gaY:function(){return this.b>=4},
dB:function(){if((this.b&2)!==0)return
var z=this.a
z.toString
P.aP(null,null,z,this.gfZ())
this.b=(this.b|2)>>>0},
b1:function(a,b){this.b+=4},
cz:function(a){return this.b1(a,null)},
cD:function(a){var z=this.b
if(z>=4){z-=4
this.b=z
if(z<4&&(z&1)===0)this.dB()}},
a1:function(a){return $.$get$bx()},
aN:[function(){var z=(this.b&4294967293)>>>0
this.b=z
if(z>=4)return
this.b=(z|1)>>>0
z=this.c
if(z!=null)this.a.cF(z)},"$0","gfZ",0,0,1]},
bK:{"^":"a8;$ti",
X:function(a,b,c,d){return this.fj(a,d,c,!0===b)},
b_:function(a,b,c){return this.X(a,null,b,c)},
fj:function(a,b,c,d){return P.ko(this,a,b,c,d,H.O(this,"bK",0),H.O(this,"bK",1))},
dl:function(a,b){b.aF(0,a)},
dm:function(a,b,c){c.at(a,b)},
$asa8:function(a,b){return[b]}},
eQ:{"^":"aN;x,y,a,b,c,d,e,f,r,$ti",
aF:function(a,b){if((this.e&2)!==0)return
this.eW(0,b)},
at:function(a,b){if((this.e&2)!==0)return
this.eX(a,b)},
bo:[function(){var z=this.y
if(z==null)return
z.cz(0)},"$0","gbn",0,0,1],
bq:[function(){var z=this.y
if(z==null)return
z.cD(0)},"$0","gbp",0,0,1],
c9:function(){var z=this.y
if(z!=null){this.y=null
return z.a1(0)}return},
iz:[function(a){this.x.dl(a,this)},"$1","gfv",2,0,function(){return H.bm(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"eQ")},10],
iB:[function(a,b){this.x.dm(a,b,this)},"$2","gfz",4,0,14,3,4],
iA:[function(){this.d0()},"$0","gfw",0,0,1],
f7:function(a,b,c,d,e,f,g){this.y=this.x.a.b_(this.gfv(),this.gfw(),this.gfz())},
$asaN:function(a,b){return[b]},
v:{
ko:function(a,b,c,d,e,f,g){var z,y
z=$.w
y=e?1:0
y=new P.eQ(a,null,null,null,null,z,y,null,null,[f,g])
y.cX(b,c,d,e,g)
y.f7(a,b,c,d,e,f,g)
return y}}},
kQ:{"^":"bK;b,a,$ti",
dl:function(a,b){var z,y,x,w
z=null
try{z=this.b.$1(a)}catch(w){y=H.J(w)
x=H.Z(w)
P.f3(b,y,x)
return}b.aF(0,z)}},
kB:{"^":"bK;b,c,a,$ti",
dm:function(a,b,c){var z,y,x,w,v
z=!0
if(z===!0)try{P.lq(this.b,a,b)}catch(w){y=H.J(w)
x=H.Z(w)
v=y
if(v==null?a==null:v===a)c.at(a,b)
else P.f3(c,y,x)
return}else c.at(a,b)},
$asbK:function(a){return[a,a]},
$asa8:null},
bR:{"^":"f;W:a>,ah:b<",
k:function(a){return H.h(this.a)},
$isQ:1},
lh:{"^":"f;"},
lv:{"^":"j:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.c2()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.c(z)
x=H.c(z)
x.stack=J.H(y)
throw x}},
kV:{"^":"lh;",
cF:function(a){var z,y,x,w
try{if(C.b===$.w){x=a.$0()
return x}x=P.fa(null,null,this,a)
return x}catch(w){z=H.J(w)
y=H.Z(w)
x=P.b1(null,null,this,z,y)
return x}},
cH:function(a,b){var z,y,x,w
try{if(C.b===$.w){x=a.$1(b)
return x}x=P.fc(null,null,this,a,b)
return x}catch(w){z=H.J(w)
y=H.Z(w)
x=P.b1(null,null,this,z,y)
return x}},
iq:function(a,b,c){var z,y,x,w
try{if(C.b===$.w){x=a.$2(b,c)
return x}x=P.fb(null,null,this,a,b,c)
return x}catch(w){z=H.J(w)
y=H.Z(w)
x=P.b1(null,null,this,z,y)
return x}},
cj:function(a,b){if(b)return new P.kW(this,a)
else return new P.kX(this,a)},
hj:function(a,b){return new P.kY(this,a)},
h:function(a,b){return},
ej:function(a){if($.w===C.b)return a.$0()
return P.fa(null,null,this,a)},
cG:function(a,b){if($.w===C.b)return a.$1(b)
return P.fc(null,null,this,a,b)},
ip:function(a,b,c){if($.w===C.b)return a.$2(b,c)
return P.fb(null,null,this,a,b,c)}},
kW:{"^":"j:2;a,b",
$0:function(){return this.a.cF(this.b)}},
kX:{"^":"j:2;a,b",
$0:function(){return this.a.ej(this.b)}},
kY:{"^":"j:0;a,b",
$1:[function(a){return this.a.cH(this.b,a)},null,null,2,0,null,19,"call"]}}],["","",,P,{"^":"",
iS:function(a,b){return new H.a_(0,null,null,null,null,null,0,[a,b])},
bb:function(){return new H.a_(0,null,null,null,null,null,0,[null,null])},
aC:function(a){return H.lR(a,new H.a_(0,null,null,null,null,null,0,[null,null]))},
iv:function(a,b,c){var z,y
if(P.d2(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bl()
y.push(a)
try{P.lr(a,z)}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=P.en(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bZ:function(a,b,c){var z,y,x
if(P.d2(a))return b+"..."+c
z=new P.aY(b)
y=$.$get$bl()
y.push(a)
try{x=z
x.sl(P.en(x.gl(),a,", "))}finally{if(0>=y.length)return H.a(y,-1)
y.pop()}y=z
y.sl(y.gl()+c)
y=z.gl()
return y.charCodeAt(0)==0?y:y},
d2:function(a){var z,y
for(z=0;y=$.$get$bl(),z<y.length;++z)if(a===y[z])return!0
return!1},
lr:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gK(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.h(z.gw())
b.push(w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.a(b,-1)
v=b.pop()
if(0>=b.length)return H.a(b,-1)
u=b.pop()}else{t=z.gw();++x
if(!z.u()){if(x<=4){b.push(H.h(t))
return}v=H.h(t)
if(0>=b.length)return H.a(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gw();++x
for(;z.u();t=s,s=r){r=z.gw();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.h(t)
v=H.h(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
ag:function(a,b,c,d){return new P.kJ(0,null,null,null,null,null,0,[d])},
e_:function(a,b){var z,y,x
z=P.ag(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.E)(a),++x)z.D(0,a[x])
return z},
cF:function(a){var z,y,x
z={}
if(P.d2(a))return"{...}"
y=new P.aY("")
try{$.$get$bl().push(a)
x=y
x.sl(x.gl()+"{")
z.a=!0
a.R(0,new P.iW(z,y))
z=y
z.sl(z.gl()+"}")}finally{z=$.$get$bl()
if(0>=z.length)return H.a(z,-1)
z.pop()}z=y.gl()
return z.charCodeAt(0)==0?z:z},
eZ:{"^":"a_;a,b,c,d,e,f,r,$ti",
aW:function(a){return H.me(a)&0x3ffffff},
aX:function(a,b){var z,y,x
if(a==null)return-1
z=a.length
for(y=0;y<z;++y){x=a[y].gdZ()
if(x==null?b==null:x===b)return y}return-1},
v:{
bi:function(a,b){return new P.eZ(0,null,null,null,null,null,0,[a,b])}}},
kJ:{"^":"kC;a,b,c,d,e,f,r,$ti",
gK:function(a){var z=new P.eY(this,this.r,null,null)
z.c=this.e
return z},
gi:function(a){return this.a},
O:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.fi(b)},
fi:function(a){var z=this.d
if(z==null)return!1
return this.bl(z[this.bi(a)],a)>=0},
e4:function(a){var z
if(!(typeof a==="string"&&a!=="__proto__"))z=typeof a==="number"&&(a&0x3ffffff)===a
else z=!0
if(z)return this.O(0,a)?a:null
else return this.fI(a)},
fI:function(a){var z,y,x
z=this.d
if(z==null)return
y=z[this.bi(a)]
x=this.bl(y,a)
if(x<0)return
return J.al(y,x).gc1()},
D:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.b=y
z=y}return this.d4(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.c=y
x=y}return this.d4(x,b)}else return this.a4(0,b)},
a4:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.kL()
this.d=z}y=this.bi(b)
x=z[y]
if(x==null)z[y]=[this.bX(b)]
else{if(this.bl(x,b)>=0)return!1
x.push(this.bX(b))}return!0},
J:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d7(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d7(this.c,b)
else return this.fR(0,b)},
fR:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.bi(b)]
x=this.bl(y,b)
if(x<0)return!1
this.d8(y.splice(x,1)[0])
return!0},
an:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
d4:function(a,b){if(a[b]!=null)return!1
a[b]=this.bX(b)
return!0},
d7:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.d8(z)
delete a[b]
return!0},
bX:function(a){var z,y
z=new P.kK(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
d8:function(a){var z,y
z=a.gd6()
y=a.gd5()
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.sd6(z);--this.a
this.r=this.r+1&67108863},
bi:function(a){return J.a1(a)&0x3ffffff},
bl:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].gc1(),b))return y
return-1},
$isd:1,
$asd:null,
v:{
kL:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
kK:{"^":"f;c1:a<,d5:b<,d6:c@"},
eY:{"^":"f;a,b,c,d",
gw:function(){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.c(new P.an(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.gc1()
this.c=this.c.gd5()
return!0}}}},
kC:{"^":"jt;$ti"},
cB:{"^":"j3;$ti"},
j3:{"^":"f+B;",$asb:null,$asd:null,$isb:1,$isd:1},
B:{"^":"f;$ti",
gK:function(a){return new H.cC(a,this.gi(a),0,null)},
A:function(a,b){return this.h(a,b)},
ar:function(a,b){return new H.bD(a,b,[H.O(a,"B",0),null])},
D:function(a,b){var z=this.gi(a)
this.si(a,z+1)
this.j(a,z,b)},
a3:["cV",function(a,b,c,d,e){var z,y,x,w,v
P.cL(b,c,this.gi(a),null,null,null)
z=c-b
if(z===0)return
if(H.bN(d,"$isb",[H.O(a,"B",0)],"$asb")){y=e
x=d}else{x=new H.cN(d,e,null,[H.O(d,"B",0)]).b4(0,!1)
y=0}w=J.D(x)
if(y+z>w.gi(x))throw H.c(H.dW())
if(y<b)for(v=z-1;v>=0;--v)this.j(a,b+v,w.h(x,y+v))
else for(v=0;v<z;++v)this.j(a,b+v,w.h(x,y+v))}],
aA:function(a,b){var z=this.h(a,b)
this.a3(a,b,this.gi(a)-1,a,b+1)
this.si(a,this.gi(a)-1)
return z},
k:function(a){return P.bZ(a,"[","]")},
$isb:1,
$asb:null,
$isd:1,
$asd:null},
lf:{"^":"f;",
j:function(a,b,c){throw H.c(new P.l("Cannot modify unmodifiable map"))},
$isG:1,
$asG:null},
iU:{"^":"f;",
h:function(a,b){return this.a.h(0,b)},
j:function(a,b,c){this.a.j(0,b,c)},
R:function(a,b){this.a.R(0,b)},
gI:function(a){var z=this.a
return z.gI(z)},
gi:function(a){var z=this.a
return z.gi(z)},
k:function(a){return this.a.k(0)},
$isG:1,
$asG:null},
eG:{"^":"iU+lf;$ti",$asG:null,$isG:1},
iW:{"^":"j:4;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.l+=", "
z.a=!1
z=this.b
y=z.l+=H.h(a)
z.l=y+": "
z.l+=H.h(b)}},
iT:{"^":"bc;a,b,c,d,$ti",
gK:function(a){return new P.kM(this,this.c,this.d,this.b,null)},
gI:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
A:function(a,b){var z,y,x,w
z=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=z)H.C(P.I(b,this,"index",null,z))
y=this.a
x=y.length
w=(this.b+b&x-1)>>>0
if(w<0||w>=x)return H.a(y,w)
return y[w]},
D:function(a,b){this.a4(0,b)},
an:function(a){var z,y,x,w,v
z=this.b
y=this.c
if(z!==y){for(x=this.a,w=x.length,v=w-1;z!==y;z=(z+1&v)>>>0){if(z<0||z>=w)return H.a(x,z)
x[z]=null}this.c=0
this.b=0;++this.d}},
k:function(a){return P.bZ(this,"{","}")},
ei:function(){var z,y,x,w
z=this.b
if(z===this.c)throw H.c(H.cv());++this.d
y=this.a
x=y.length
if(z>=x)return H.a(y,z)
w=y[z]
y[z]=null
this.b=(z+1&x-1)>>>0
return w},
a4:function(a,b){var z,y,x
z=this.a
y=this.c
x=z.length
if(y<0||y>=x)return H.a(z,y)
z[y]=b
x=(y+1&x-1)>>>0
this.c=x
if(this.b===x)this.dj();++this.d},
dj:function(){var z,y,x,w
z=new Array(this.a.length*2)
z.fixed$length=Array
y=H.x(z,this.$ti)
z=this.a
x=this.b
w=z.length-x
C.a.a3(y,0,w,z,x)
C.a.a3(y,w,w+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=y},
f2:function(a,b){var z=new Array(8)
z.fixed$length=Array
this.a=H.x(z,[b])},
$asd:null,
v:{
cD:function(a,b){var z=new P.iT(null,0,0,0,[b])
z.f2(a,b)
return z}}},
kM:{"^":"f;a,b,c,d,e",
gw:function(){return this.e},
u:function(){var z,y,x
z=this.a
if(this.c!==z.d)H.C(new P.an(z))
y=this.d
if(y===this.b){this.e=null
return!1}z=z.a
x=z.length
if(y>=x)return H.a(z,y)
this.e=z[y]
this.d=(y+1&x-1)>>>0
return!0}},
ju:{"^":"f;$ti",
P:function(a,b){var z
for(z=J.S(b);z.u();)this.D(0,z.gw())},
ar:function(a,b){return new H.dH(this,b,[H.P(this,0),null])},
k:function(a){return P.bZ(this,"{","}")},
$isd:1,
$asd:null},
jt:{"^":"ju;$ti"}}],["","",,P,{"^":"",
cd:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.kE(a,Object.create(null),null)
for(z=0;z<a.length;++z)a[z]=P.cd(a[z])
return a},
lu:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.c(H.M(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.J(x)
w=String(y)
throw H.c(new P.ct(w,null,null))}w=P.cd(z)
return w},
pl:[function(a){return a.iI()},"$1","lM",2,0,0,7],
kE:{"^":"f;a,b,c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.fN(b):y}},
gi:function(a){var z
if(this.b==null){z=this.c
z=z.gi(z)}else z=this.bj().length
return z},
gI:function(a){var z
if(this.b==null){z=this.c
z=z.gi(z)}else z=this.bj().length
return z===0},
j:function(a,b,c){var z,y
if(this.b==null)this.c.j(0,b,c)
else if(this.U(0,b)){z=this.b
z[b]=c
y=this.a
if(y==null?z!=null:y!==z)y[b]=null}else this.ha().j(0,b,c)},
U:function(a,b){if(this.b==null)return this.c.U(0,b)
if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
R:function(a,b){var z,y,x,w
if(this.b==null)return this.c.R(0,b)
z=this.bj()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.cd(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.c(new P.an(this))}},
k:function(a){return P.cF(this)},
bj:function(){var z=this.c
if(z==null){z=Object.keys(this.a)
this.c=z}return z},
ha:function(){var z,y,x,w,v
if(this.b==null)return this.c
z=P.iS(P.q,null)
y=this.bj()
for(x=0;w=y.length,x<w;++x){v=y[x]
z.j(0,v,this.h(0,v))}if(w===0)y.push(null)
else C.a.si(y,0)
this.b=null
this.a=null
this.c=z
return z},
fN:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.cd(this.a[a])
return this.b[a]=z},
$isG:1,
$asG:function(){return[P.q,null]}},
he:{"^":"f;"},
dA:{"^":"f;"},
cz:{"^":"Q;a,b",
k:function(a){if(this.b!=null)return"Converting object to an encodable object failed."
else return"Converting object did not return an encodable object."}},
iM:{"^":"cz;a,b",
k:function(a){return"Cyclic error in JSON stringify"}},
iL:{"^":"he;a,b",
hu:function(a,b){var z=P.lu(a,this.ghw().a)
return z},
ht:function(a){return this.hu(a,null)},
hH:function(a,b){var z=this.ghI()
z=P.kG(a,z.b,z.a)
return z},
hG:function(a){return this.hH(a,null)},
ghI:function(){return C.G},
ghw:function(){return C.F}},
iO:{"^":"dA;e_:a<,b"},
iN:{"^":"dA;a"},
kH:{"^":"f;",
eu:function(a){var z,y,x,w,v,u,t
z=J.D(a)
y=z.gi(a)
if(typeof y!=="number")return H.i(y)
x=this.c
w=0
v=0
for(;v<y;++v){u=z.cm(a,v)
if(u>92)continue
if(u<32){if(v>w)x.l+=z.ai(a,w,v)
w=v+1
x.l+=H.a2(92)
switch(u){case 8:x.l+=H.a2(98)
break
case 9:x.l+=H.a2(116)
break
case 10:x.l+=H.a2(110)
break
case 12:x.l+=H.a2(102)
break
case 13:x.l+=H.a2(114)
break
default:x.l+=H.a2(117)
x.l+=H.a2(48)
x.l+=H.a2(48)
t=u>>>4&15
x.l+=H.a2(t<10?48+t:87+t)
t=u&15
x.l+=H.a2(t<10?48+t:87+t)
break}}else if(u===34||u===92){if(v>w)x.l+=z.ai(a,w,v)
w=v+1
x.l+=H.a2(92)
x.l+=H.a2(u)}}if(w===0)x.l+=H.h(a)
else if(w<y)x.l+=z.ai(a,w,y)},
bV:function(a){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(a==null?w==null:a===w)throw H.c(new P.iM(a,null))}z.push(a)},
bG:function(a){var z,y,x,w
if(this.es(a))return
this.bV(a)
try{z=this.b.$1(a)
if(!this.es(z))throw H.c(new P.cz(a,null))
x=this.a
if(0>=x.length)return H.a(x,-1)
x.pop()}catch(w){y=H.J(w)
throw H.c(new P.cz(a,y))}},
es:function(a){var z,y
if(typeof a==="number"){if(!isFinite(a))return!1
this.c.l+=C.e.k(a)
return!0}else if(a===!0){this.c.l+="true"
return!0}else if(a===!1){this.c.l+="false"
return!0}else if(a==null){this.c.l+="null"
return!0}else if(typeof a==="string"){z=this.c
z.l+='"'
this.eu(a)
z.l+='"'
return!0}else{z=J.n(a)
if(!!z.$isb){this.bV(a)
this.iu(a)
z=this.a
if(0>=z.length)return H.a(z,-1)
z.pop()
return!0}else if(!!z.$isG){this.bV(a)
y=this.iv(a)
z=this.a
if(0>=z.length)return H.a(z,-1)
z.pop()
return y}else return!1}},
iu:function(a){var z,y,x
z=this.c
z.l+="["
y=J.D(a)
if(y.gi(a)>0){this.bG(y.h(a,0))
for(x=1;x<y.gi(a);++x){z.l+=","
this.bG(y.h(a,x))}}z.l+="]"},
iv:function(a){var z,y,x,w,v,u,t
z={}
y=J.D(a)
if(y.gI(a)){this.c.l+="{}"
return!0}x=y.gi(a)
if(typeof x!=="number")return x.E()
x*=2
w=new Array(x)
z.a=0
z.b=!0
y.R(a,new P.kI(z,w))
if(!z.b)return!1
y=this.c
y.l+="{"
for(v='"',u=0;u<x;u+=2,v=',"'){y.l+=v
this.eu(w[u])
y.l+='":'
t=u+1
if(t>=x)return H.a(w,t)
this.bG(w[t])}y.l+="}"
return!0}},
kI:{"^":"j:4;a,b",
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
kF:{"^":"kH;c,a,b",v:{
kG:function(a,b,c){var z,y,x
z=new P.aY("")
y=new P.kF(z,[],P.lM())
y.bG(a)
x=z.l
return x.charCodeAt(0)==0?x:x}}}}],["","",,P,{"^":"",
bw:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.H(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hx(a)},
hx:function(a){var z=J.n(a)
if(!!z.$isj)return z.k(a)
return H.c3(a)},
bX:function(a){return new P.kn(a)},
aX:function(a,b,c){var z,y
z=H.x([],[c])
for(y=J.S(a);y.u();)z.push(y.gw())
return z},
md:function(a,b){var z,y
z=C.d.eo(a)
y=H.ee(z,null,P.lO())
if(y!=null)return y
y=H.jm(z,P.lN())
if(y!=null)return y
throw H.c(new P.ct(a,null,null))},
pt:[function(a){return},"$1","lO",2,0,22],
ps:[function(a){return},"$1","lN",2,0,23],
bO:function(a){H.mf(H.h(a))},
j0:{"^":"j:15;a,b",
$2:function(a,b){var z,y,x
z=this.b
y=this.a
z.l+=y.a
x=z.l+=H.h(a.gfJ())
z.l=x+": "
z.l+=H.h(P.bw(b))
y.a=", "}},
d3:{"^":"f;"},
"+bool":0,
ay:{"^":"f;a,b",
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.ay))return!1
return this.a===b.a&&this.b===b.b},
gF:function(a){var z=this.a
return(z^C.e.cf(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.hn(H.jl(this))
y=P.bv(H.jj(this))
x=P.bv(H.jf(this))
w=P.bv(H.jg(this))
v=P.bv(H.ji(this))
u=P.bv(H.jk(this))
t=P.ho(H.jh(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
D:function(a,b){return P.hm(C.e.n(this.a,b.giE()),this.b)},
gia:function(){return this.a},
bP:function(a,b){var z
if(!(Math.abs(this.a)>864e13))z=!1
else z=!0
if(z)throw H.c(P.b7(this.gia()))},
v:{
hm:function(a,b){var z=new P.ay(a,b)
z.bP(a,b)
return z},
hn:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+H.h(z)
if(z>=10)return y+"00"+H.h(z)
return y+"000"+H.h(z)},
ho:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bv:function(a){if(a>=10)return""+a
return"0"+a}}},
ak:{"^":"bn;"},
"+double":0,
aV:{"^":"f;bk:a<",
n:function(a,b){return new P.aV(this.a+b.gbk())},
N:function(a,b){return new P.aV(this.a-b.gbk())},
E:function(a,b){if(typeof b!=="number")return H.i(b)
return new P.aV(C.e.b2(this.a*b))},
bO:function(a,b){if(b===0)throw H.c(new P.hG())
return new P.aV(C.c.bO(this.a,b))},
a8:function(a,b){return C.c.a8(this.a,b.gbk())},
bc:function(a,b){return C.c.bc(this.a,b.gbk())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.aV))return!1
return this.a===b.a},
gF:function(a){return this.a&0x1FFFFFFF},
k:function(a){var z,y,x,w,v
z=new P.hv()
y=this.a
if(y<0)return"-"+new P.aV(0-y).k(0)
x=z.$1(C.c.bv(y,6e7)%60)
w=z.$1(C.c.bv(y,1e6)%60)
v=new P.hu().$1(y%1e6)
return""+C.c.bv(y,36e8)+":"+H.h(x)+":"+H.h(w)+"."+H.h(v)}},
hu:{"^":"j:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hv:{"^":"j:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
Q:{"^":"f;",
gah:function(){return H.Z(this.$thrownJsError)}},
c2:{"^":"Q;",
k:function(a){return"Throw of null."}},
au:{"^":"Q;a,b,c,d",
gc3:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc2:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.h(z)
w=this.gc3()+y+x
if(!this.a)return w
v=this.gc2()
u=P.bw(this.b)
return w+v+": "+H.h(u)},
v:{
b7:function(a){return new P.au(!1,null,null,a)},
dr:function(a,b,c){return new P.au(!0,a,b,c)}}},
eg:{"^":"au;e,f,a,b,c,d",
gc3:function(){return"RangeError"},
gc2:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.h(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.h(z)
else if(x>z)y=": Not in range "+H.h(z)+".."+H.h(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.h(z)}return y},
v:{
bf:function(a,b,c){return new P.eg(null,null,!0,a,b,"Value not in range")},
L:function(a,b,c,d,e){return new P.eg(b,c,!0,a,d,"Invalid value")},
cL:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.L(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.L(b,a,c,"end",f))
return b}}},
hE:{"^":"au;e,i:f>,a,b,c,d",
gc3:function(){return"RangeError"},
gc2:function(){if(J.bo(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.h(z)},
v:{
I:function(a,b,c,d,e){var z=e!=null?e:J.am(b)
return new P.hE(b,z,!0,a,c,"Index out of range")}}},
j_:{"^":"Q;a,b,c,d,e",
k:function(a){var z,y,x,w,v,u,t,s
z={}
y=new P.aY("")
z.a=""
for(x=this.c,w=x.length,v=0;v<w;++v){u=x[v]
y.l+=z.a
y.l+=H.h(P.bw(u))
z.a=", "}this.d.R(0,new P.j0(z,y))
t=P.bw(this.a)
s=y.k(0)
x="NoSuchMethodError: method not found: '"+H.h(this.b.a)+"'\nReceiver: "+H.h(t)+"\nArguments: ["+s+"]"
return x},
v:{
e4:function(a,b,c,d,e){return new P.j_(a,b,c,d,e)}}},
l:{"^":"Q;a",
k:function(a){return"Unsupported operation: "+this.a}},
bI:{"^":"Q;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.h(z):"UnimplementedError"}},
Y:{"^":"Q;a",
k:function(a){return"Bad state: "+this.a}},
an:{"^":"Q;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.bw(z))+"."}},
j4:{"^":"f;",
k:function(a){return"Out of Memory"},
gah:function(){return},
$isQ:1},
el:{"^":"f;",
k:function(a){return"Stack Overflow"},
gah:function(){return},
$isQ:1},
hl:{"^":"Q;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.h(z)+"' during its initialization"}},
kn:{"^":"f;a",
k:function(a){var z=this.a
if(z==null)return"Exception"
return"Exception: "+H.h(z)},
$isbW:1},
ct:{"^":"f;a,b,bD:c>",
k:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.d.ai(x,0,75)+"..."
return y+"\n"+x},
$isbW:1},
hG:{"^":"f;",
k:function(a){return"IntegerDivisionByZeroException"},
$isbW:1},
hy:{"^":"f;a,dr",
k:function(a){return"Expando:"+H.h(this.a)},
h:function(a,b){var z,y
z=this.dr
if(typeof z!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.C(P.dr(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return z.get(b)}y=H.cK(b,"expando$values")
return y==null?null:H.cK(y,z)},
j:function(a,b,c){var z,y
z=this.dr
if(typeof z!=="string")z.set(b,c)
else{y=H.cK(b,"expando$values")
if(y==null){y=new P.f()
H.ef(b,"expando$values",y)}H.ef(y,z,c)}}},
y:{"^":"bn;"},
"+int":0,
a5:{"^":"f;$ti",
ar:function(a,b){return H.c_(this,b,H.O(this,"a5",0),null)},
cP:["eQ",function(a,b){return new H.eH(this,b,[H.O(this,"a5",0)])}],
b4:function(a,b){return P.aX(this,!0,H.O(this,"a5",0))},
cM:function(a){return this.b4(a,!0)},
gi:function(a){var z,y
z=this.gK(this)
for(y=0;z.u();)++y
return y},
gas:function(a){var z,y
z=this.gK(this)
if(!z.u())throw H.c(H.cv())
y=z.gw()
if(z.u())throw H.c(H.iw())
return y},
A:function(a,b){var z,y,x
if(b<0)H.C(P.L(b,0,null,"index",null))
for(z=this.gK(this),y=0;z.u();){x=z.gw()
if(b===y)return x;++y}throw H.c(P.I(b,this,"index",null,y))},
k:function(a){return P.iv(this,"(",")")}},
dX:{"^":"f;"},
b:{"^":"f;$ti",$asb:null,$isd:1,$asd:null},
"+List":0,
G:{"^":"f;$ti",$asG:null},
bd:{"^":"f;",
gF:function(a){return P.f.prototype.gF.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
bn:{"^":"f;"},
"+num":0,
f:{"^":";",
C:function(a,b){return this===b},
gF:function(a){return H.ar(this)},
k:["eU",function(a){return H.c3(this)}],
cw:function(a,b){throw H.c(P.e4(this,b.ge5(),b.gee(),b.ge6(),null))},
toString:function(){return this.k(this)}},
bG:{"^":"f;"},
q:{"^":"f;"},
"+String":0,
aY:{"^":"f;l@",
gi:function(a){return this.l.length},
k:function(a){var z=this.l
return z.charCodeAt(0)==0?z:z},
v:{
en:function(a,b,c){var z=J.S(b)
if(!z.u())return a
if(c.length===0){do a+=H.h(z.gw())
while(z.u())}else{a+=H.h(z.gw())
for(;z.u();)a=a+c+H.h(z.gw())}return a}}},
bH:{"^":"f;"}}],["","",,W,{"^":"",
mm:function(){return window},
hk:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
hw:function(a,b,c){var z,y
z=document.body
y=(z&&C.l).V(z,a,b,c)
y.toString
z=new H.eH(new W.a9(y),new W.lH(),[W.t])
return z.gas(z)},
b9:function(a){var z,y,x,w
z="element tag unavailable"
try{y=J.m(a)
x=y.gel(a)
if(typeof x==="string")z=y.gel(a)}catch(w){H.J(w)}return z},
aO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
f4:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.kd(a)
if(!!J.n(z).$isv)return z
return}else return a},
lm:function(a){var z
if(!!J.n(a).$isdG)return a
z=new P.cR([],[],!1)
z.c=!0
return z.a7(a)},
fg:function(a){var z=$.w
if(z===C.b)return a
return z.hj(a,!0)},
z:{"^":"az;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMenuItemElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
mo:{"^":"z;bB:href}",
k:function(a){return String(a)},
$ise:1,
"%":"HTMLAnchorElement"},
mp:{"^":"v;",
a1:function(a){return a.cancel()},
"%":"Animation"},
mr:{"^":"z;bB:href}",
k:function(a){return String(a)},
$ise:1,
"%":"HTMLAreaElement"},
av:{"^":"e;",$isf:1,"%":"AudioTrack"},
mt:{"^":"dN;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isb:1,
$asb:function(){return[W.av]},
$isd:1,
$asd:function(){return[W.av]},
$isu:1,
$asu:function(){return[W.av]},
$isr:1,
$asr:function(){return[W.av]},
"%":"AudioTrackList"},
dK:{"^":"v+B;",
$asb:function(){return[W.av]},
$asd:function(){return[W.av]},
$isb:1,
$isd:1},
dN:{"^":"dK+K;",
$asb:function(){return[W.av]},
$asd:function(){return[W.av]},
$isb:1,
$isd:1},
mu:{"^":"z;bB:href}","%":"HTMLBaseElement"},
bs:{"^":"e;",$isbs:1,"%":";Blob"},
h3:{"^":"e;","%":"Response;Body"},
cm:{"^":"z;",$iscm:1,$isv:1,$ise:1,"%":"HTMLBodyElement"},
mv:{"^":"z;L:name=,G:value=","%":"HTMLButtonElement"},
mw:{"^":"z;p:height%,m:width%",
ey:function(a,b,c){return a.getContext(b)},
ex:function(a,b){return this.ey(a,b,null)},
"%":"HTMLCanvasElement"},
mx:{"^":"e;ap:fillStyle},ay:font},ez:globalAlpha},i7:lineJoin},ct:lineWidth},bM:strokeStyle},cI:textAlign},cJ:textBaseline}",
ax:function(a){return a.beginPath()},
hl:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
dT:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
cu:function(a,b){return a.measureText(b)},
Y:function(a){return a.restore()},
T:function(a){return a.save()},
ix:function(a,b){return a.stroke(b)},
bL:function(a){return a.stroke()},
dM:function(a,b,c,d,e,f,g){return a.bezierCurveTo(b,c,d,e,f,g)},
cl:function(a){return a.closePath()},
B:function(a,b,c){return a.lineTo(b,c)},
b0:function(a,b,c){return a.moveTo(b,c)},
M:function(a,b,c,d,e){return a.quadraticCurveTo(b,c,d,e)},
hL:function(a,b,c,d,e){a.fillText(b,c,d)},
cr:function(a,b,c,d){return this.hL(a,b,c,d,null)},
hK:function(a,b){a.fill(b)},
cq:function(a){return this.hK(a,"nonzero")},
"%":"CanvasRenderingContext2D"},
my:{"^":"t;i:length=",$ise:1,"%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mz:{"^":"v;",$isv:1,$ise:1,"%":"CompositorWorker"},
ax:{"^":"e;",$isf:1,"%":"CSSCharsetRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
mA:{"^":"hH;i:length=",
cR:function(a,b){var z=this.fu(a,b)
return z!=null?z:""},
fu:function(a,b){if(W.hk(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.hp()+b)},
gp:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hH:{"^":"e+hj;"},
hj:{"^":"f;",
gp:function(a){return this.cR(a,"height")},
gm:function(a){return this.cR(a,"width")}},
mC:{"^":"e;i:length=",
dI:function(a,b,c){return a.add(b,c)},
D:function(a,b){return a.add(b)},
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
mD:{"^":"e;q:x=,t:y=","%":"DeviceAcceleration"},
hq:{"^":"z;","%":"HTMLDivElement"},
dG:{"^":"t;",$isdG:1,"%":"Document|HTMLDocument|XMLDocument"},
hr:{"^":"t;",$ise:1,"%":";DocumentFragment"},
mE:{"^":"e;",
k:function(a){return String(a)},
"%":"DOMException"},
mF:{"^":"e;",
e7:[function(a,b){return a.next(b)},function(a){return a.next()},"ic","$1","$0","gS",0,2,16,0,1],
"%":"Iterator"},
mG:{"^":"hs;",
gq:function(a){return a.x},
sq:function(a,b){a.x=b},
gt:function(a){return a.y},
st:function(a,b){a.y=b},
"%":"DOMPoint"},
hs:{"^":"e;",
gq:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
ht:{"^":"e;",
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gm(a))+" x "+H.h(this.gp(a))},
C:function(a,b){var z
if(b==null)return!1
z=J.n(b)
if(!z.$isT)return!1
return a.left===z.gaZ(b)&&a.top===z.gb5(b)&&this.gm(a)===z.gm(b)&&this.gp(a)===z.gp(b)},
gF:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gm(a)
w=this.gp(a)
return W.eW(W.aO(W.aO(W.aO(W.aO(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcN:function(a){return new P.ah(a.left,a.top,[null])},
gck:function(a){return a.bottom},
gp:function(a){return a.height},
gaZ:function(a){return a.left},
gcE:function(a){return a.right},
gb5:function(a){return a.top},
gm:function(a){return a.width},
gq:function(a){return a.x},
gt:function(a){return a.y},
$isT:1,
$asT:I.R,
"%":";DOMRectReadOnly"},
mH:{"^":"i1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isb:1,
$asb:function(){return[P.q]},
$isd:1,
$asd:function(){return[P.q]},
$isu:1,
$asu:function(){return[P.q]},
$isr:1,
$asr:function(){return[P.q]},
"%":"DOMStringList"},
hI:{"^":"e+B;",
$asb:function(){return[P.q]},
$asd:function(){return[P.q]},
$isb:1,
$isd:1},
i1:{"^":"hI+K;",
$asb:function(){return[P.q]},
$asd:function(){return[P.q]},
$isb:1,
$isd:1},
mI:{"^":"e;i:length=",
D:function(a,b){return a.add(b)},
"%":"DOMTokenList"},
eR:{"^":"cB;a,$ti",
gi:function(a){return this.a.length},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot modify list"))},
si:function(a,b){throw H.c(new P.l("Cannot modify list"))},
$isb:1,
$asb:null,
$isd:1,
$asd:null},
az:{"^":"t;ds:namespaceURI=,el:tagName=",
ghh:function(a){return new W.ki(a)},
gbD:function(a){return P.jp(C.e.b2(a.offsetLeft),C.e.b2(a.offsetTop),C.e.b2(a.offsetWidth),C.e.b2(a.offsetHeight),null)},
k:function(a){return a.localName},
hZ:function(a,b,c,d,e){var z,y
z=this.V(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(z,a)
break
case"afterbegin":y=a.childNodes
a.insertBefore(z,y.length>0?y[0]:null)
break
case"beforeend":a.appendChild(z)
break
case"afterend":a.parentNode.insertBefore(z,a.nextSibling)
break
default:H.C(P.b7("Invalid position "+b))}},
V:["bN",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dJ
if(z==null){z=H.x([],[W.e5])
y=new W.e6(z)
z.push(W.eU(null))
z.push(W.f1())
$.dJ=y
d=y}else d=z
z=$.dI
if(z==null){z=new W.f2(d)
$.dI=z
c=z}else{z.a=d
c=z}}if($.ao==null){z=document
y=z.implementation.createHTMLDocument("")
$.ao=y
$.cr=y.createRange()
y=$.ao
y.toString
x=y.createElement("base")
J.fT(x,z.baseURI)
$.ao.head.appendChild(x)}z=$.ao
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.ao
if(!!this.$iscm)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.ao.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.a.O(C.I,a.tagName)){$.cr.selectNodeContents(w)
v=$.cr.createContextualFragment(b)}else{w.innerHTML=b
v=$.ao.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.ao.body
if(w==null?z!=null:w!==z)J.fP(w)
c.cS(v)
document.adoptNode(v)
return v},function(a,b,c){return this.V(a,b,c,null)},"hs",null,null,"giD",2,5,null,0,0],
se0:function(a,b){this.bJ(a,b)},
bK:function(a,b,c,d){a.textContent=null
a.appendChild(this.V(a,b,c,d))},
bJ:function(a,b){return this.bK(a,b,null,null)},
dU:function(a){return a.focus()},
cQ:function(a){return a.getBoundingClientRect()},
ge8:function(a){return new W.aj(a,"change",!1,[W.a4])},
ge9:function(a){return new W.aj(a,"input",!1,[W.a4])},
gea:function(a){return new W.aj(a,"mousedown",!1,[W.aE])},
geb:function(a){return new W.aj(a,"mousemove",!1,[W.aE])},
gec:function(a){return new W.aj(a,"mouseup",!1,[W.aE])},
$isaz:1,
$ist:1,
$isf:1,
$ise:1,
$isv:1,
"%":";Element"},
lH:{"^":"j:0;",
$1:function(a){return!!J.n(a).$isaz}},
mJ:{"^":"z;p:height%,L:name=,m:width%","%":"HTMLEmbedElement"},
mK:{"^":"a4;W:error=","%":"ErrorEvent"},
a4:{"^":"e;",
ii:function(a){return a.preventDefault()},
$isa4:1,
"%":"AnimationEvent|AnimationPlayerEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|AutocompleteErrorEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceLightEvent|DeviceMotionEvent|DeviceOrientationEvent|FontFaceSetLoadEvent|GamepadEvent|GeofencingEvent|HashChangeEvent|IDBVersionChangeEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCIceCandidateEvent|RTCPeerConnectionIceEvent|RelatedEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|ServiceWorkerMessageEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|TrackEvent|TransitionEvent|USBConnectionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
v:{"^":"e;",
dJ:function(a,b,c,d){if(c!=null)this.fc(a,b,c,!1)},
eh:function(a,b,c,d){if(c!=null)this.fU(a,b,c,!1)},
fc:function(a,b,c,d){return a.addEventListener(b,H.aa(c,1),!1)},
fU:function(a,b,c,d){return a.removeEventListener(b,H.aa(c,1),!1)},
$isv:1,
"%":"AnalyserNode|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioSourceNode|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|CrossOriginServiceWorkerClient|DOMApplicationCache|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MessagePort|NetworkInformation|Notification|OfflineResourceList|Oscillator|OscillatorNode|PannerNode|Performance|PermissionStatus|PresentationAvailability|PresentationReceiver|PresentationRequest|RTCDTMFSender|RTCPeerConnection|RealtimeAnalyserNode|ScreenOrientation|ScriptProcessorNode|ServicePortCollection|ServiceWorkerContainer|ServiceWorkerRegistration|SpeechRecognition|SpeechSynthesisUtterance|StereoPannerNode|USB|WaveShaperNode|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dK|dN|dL|dO|dM|dP"},
hz:{"^":"a4;","%":"ExtendableMessageEvent|FetchEvent|InstallEvent|PushEvent|ServicePortConnectEvent|SyncEvent;ExtendableEvent"},
n2:{"^":"z;L:name=","%":"HTMLFieldSetElement"},
af:{"^":"bs;",$isaf:1,$isf:1,"%":"File"},
dR:{"^":"i2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isdR:1,
$isu:1,
$asu:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]},
$isd:1,
$asd:function(){return[W.af]},
"%":"FileList"},
hJ:{"^":"e+B;",
$asb:function(){return[W.af]},
$asd:function(){return[W.af]},
$isb:1,
$isd:1},
i2:{"^":"hJ+K;",
$asb:function(){return[W.af]},
$asd:function(){return[W.af]},
$isb:1,
$isd:1},
n3:{"^":"v;W:error=",
gH:function(a){var z,y
z=a.result
if(!!J.n(z).$ish5){y=new Uint8Array(z,0)
return y}return z},
"%":"FileReader"},
n4:{"^":"v;W:error=,i:length=","%":"FileWriter"},
n6:{"^":"v;",
D:function(a,b){return a.add(b)},
"%":"FontFaceSet"},
n8:{"^":"z;ci:action=,i:length=,L:name=","%":"HTMLFormElement"},
aB:{"^":"e;",$isf:1,"%":"Gamepad"},
n9:{"^":"e;i:length=","%":"History"},
na:{"^":"i3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isb:1,
$asb:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isu:1,
$asu:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hK:{"^":"e+B;",
$asb:function(){return[W.t]},
$asd:function(){return[W.t]},
$isb:1,
$isd:1},
i3:{"^":"hK+K;",
$asb:function(){return[W.t]},
$asd:function(){return[W.t]},
$isb:1,
$isd:1},
hC:{"^":"hD;",
iF:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
ih:function(a,b,c,d){return a.open(b,c,d)},
ag:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hD:{"^":"v;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
nb:{"^":"z;p:height%,L:name=,m:width%","%":"HTMLIFrameElement"},
nc:{"^":"e;p:height=,m:width=","%":"ImageBitmap"},
bY:{"^":"e;p:height=,m:width=",$isbY:1,"%":"ImageData"},
nd:{"^":"z;p:height%,m:width%","%":"HTMLImageElement"},
nf:{"^":"z;p:height%,L:name=,G:value=,m:width%",$isaz:1,$ise:1,$isv:1,$ist:1,"%":"HTMLInputElement"},
nl:{"^":"z;L:name=","%":"HTMLKeygenElement"},
nm:{"^":"z;G:value=","%":"HTMLLIElement"},
no:{"^":"eo;",
D:function(a,b){return a.add(b)},
"%":"CalcLength|LengthValue|SimpleLength"},
np:{"^":"z;bB:href}","%":"HTMLLinkElement"},
nq:{"^":"e;",
k:function(a){return String(a)},
"%":"Location"},
nr:{"^":"z;L:name=","%":"HTMLMapElement"},
iX:{"^":"z;W:error=","%":"HTMLAudioElement;HTMLMediaElement"},
nu:{"^":"e;i:length=","%":"MediaList"},
nv:{"^":"v;",
ac:function(a){return a.clone()},
"%":"MediaStream"},
nw:{"^":"v;",
ac:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
nx:{"^":"z;L:name=","%":"HTMLMetaElement"},
ny:{"^":"z;G:value=","%":"HTMLMeterElement"},
nz:{"^":"iY;",
iw:function(a,b,c){return a.send(b,c)},
ag:function(a,b){return a.send(b)},
"%":"MIDIOutput"},
iY:{"^":"v;","%":"MIDIInput;MIDIPort"},
aD:{"^":"e;",$isf:1,"%":"MimeType"},
nA:{"^":"id;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aD]},
$isr:1,
$asr:function(){return[W.aD]},
$isb:1,
$asb:function(){return[W.aD]},
$isd:1,
$asd:function(){return[W.aD]},
"%":"MimeTypeArray"},
hU:{"^":"e+B;",
$asb:function(){return[W.aD]},
$asd:function(){return[W.aD]},
$isb:1,
$isd:1},
id:{"^":"hU+K;",
$asb:function(){return[W.aD]},
$asd:function(){return[W.aD]},
$isb:1,
$isd:1},
aE:{"^":"jV;",
gbD:function(a){var z,y,x
if(!!a.offsetX)return new P.ah(a.offsetX,a.offsetY,[null])
else{if(!J.n(W.f4(a.target)).$isaz)throw H.c(new P.l("offsetX is only supported on elements"))
z=W.f4(a.target)
y=[null]
x=new P.ah(a.clientX,a.clientY,y).N(0,J.fK(J.fL(z)))
return new P.ah(J.dq(x.a),J.dq(x.b),y)}},
"%":"WheelEvent;DragEvent|MouseEvent"},
nL:{"^":"e;",$ise:1,"%":"Navigator"},
a9:{"^":"cB;a",
gas:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.c(new P.Y("No elements"))
if(y>1)throw H.c(new P.Y("More than one element"))
return z.firstChild},
D:function(a,b){this.a.appendChild(b)},
P:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
aA:function(a,b){var z,y,x
z=this.a
y=z.childNodes
if(b>=y.length)return H.a(y,b)
x=y[b]
z.removeChild(x)
return x},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.a(y,b)
z.replaceChild(c,y[b])},
gK:function(a){var z=this.a.childNodes
return new W.dT(z,z.length,-1,null)},
a3:function(a,b,c,d,e){throw H.c(new P.l("Cannot setRange on Node list"))},
gi:function(a){return this.a.childNodes.length},
si:function(a,b){throw H.c(new P.l("Cannot set length on immutable List."))},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.a(z,b)
return z[b]},
$ascB:function(){return[W.t]},
$asb:function(){return[W.t]},
$asd:function(){return[W.t]}},
t:{"^":"v;bE:parentNode=,cB:previousSibling=",
gig:function(a){return new W.a9(a)},
cC:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.eP(a):z},
by:function(a,b){return a.cloneNode(b)},
$ist:1,
$isf:1,
"%":";Node"},
nM:{"^":"e;",
ij:[function(a){return a.previousNode()},"$0","gcB",0,0,5],
"%":"NodeIterator"},
nN:{"^":"ie;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isb:1,
$asb:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isu:1,
$asu:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
"%":"NodeList|RadioNodeList"},
hV:{"^":"e+B;",
$asb:function(){return[W.t]},
$asd:function(){return[W.t]},
$isb:1,
$isd:1},
ie:{"^":"hV+K;",
$asb:function(){return[W.t]},
$asd:function(){return[W.t]},
$isb:1,
$isd:1},
nO:{"^":"hz;ci:action=","%":"NotificationEvent"},
nQ:{"^":"z;p:height%,L:name=,m:width%","%":"HTMLObjectElement"},
nS:{"^":"e;p:height=,m:width=","%":"OffscreenCanvas"},
nT:{"^":"z;G:value=","%":"HTMLOptionElement"},
nU:{"^":"z;L:name=,G:value=","%":"HTMLOutputElement"},
nV:{"^":"z;L:name=,G:value=","%":"HTMLParamElement"},
nW:{"^":"e;",$ise:1,"%":"Path2D"},
nY:{"^":"cQ;i:length=","%":"Perspective"},
aF:{"^":"e;i:length=",$isf:1,"%":"Plugin"},
nZ:{"^":"ig;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isb:1,
$asb:function(){return[W.aF]},
$isd:1,
$asd:function(){return[W.aF]},
$isu:1,
$asu:function(){return[W.aF]},
$isr:1,
$asr:function(){return[W.aF]},
"%":"PluginArray"},
hW:{"^":"e+B;",
$asb:function(){return[W.aF]},
$asd:function(){return[W.aF]},
$isb:1,
$isd:1},
ig:{"^":"hW+K;",
$asb:function(){return[W.aF]},
$asd:function(){return[W.aF]},
$isb:1,
$isd:1},
o1:{"^":"aE;p:height=,m:width=","%":"PointerEvent"},
o2:{"^":"eo;q:x=,t:y=","%":"PositionValue"},
o3:{"^":"v;",
ag:function(a,b){return a.send(b)},
"%":"PresentationConnection"},
o4:{"^":"z;G:value=","%":"HTMLProgressElement"},
o6:{"^":"e;",
cQ:function(a){return a.getBoundingClientRect()},
"%":"Range"},
o7:{"^":"e;",
dO:function(a,b){return a.cancel(b)},
a1:function(a){return a.cancel()},
"%":"ReadableByteStream"},
o8:{"^":"e;",
dO:function(a,b){return a.cancel(b)},
a1:function(a){return a.cancel()},
"%":"ReadableByteStreamReader"},
o9:{"^":"e;",
dO:function(a,b){return a.cancel(b)},
a1:function(a){return a.cancel()},
"%":"ReadableStreamReader"},
of:{"^":"cQ;q:x=,t:y=","%":"Rotation"},
og:{"^":"v;",
ag:function(a,b){return a.send(b)},
"%":"DataChannel|RTCDataChannel"},
cM:{"^":"e;",$iscM:1,$isf:1,"%":"RTCStatsReport"},
oh:{"^":"e;",
iH:[function(a){return a.result()},"$0","gH",0,0,17],
"%":"RTCStatsResponse"},
oi:{"^":"e;p:height=,m:width=","%":"Screen"},
oj:{"^":"z;i:length=,L:name=,G:value=","%":"HTMLSelectElement"},
ok:{"^":"hr;",
by:function(a,b){return a.cloneNode(b)},
ac:function(a){return a.cloneNode()},
"%":"ShadowRoot"},
ol:{"^":"v;",$isv:1,$ise:1,"%":"SharedWorker"},
om:{"^":"z;L:name=","%":"HTMLSlotElement"},
aG:{"^":"v;",$isf:1,"%":"SourceBuffer"},
on:{"^":"dO;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isb:1,
$asb:function(){return[W.aG]},
$isd:1,
$asd:function(){return[W.aG]},
$isu:1,
$asu:function(){return[W.aG]},
$isr:1,
$asr:function(){return[W.aG]},
"%":"SourceBufferList"},
dL:{"^":"v+B;",
$asb:function(){return[W.aG]},
$asd:function(){return[W.aG]},
$isb:1,
$isd:1},
dO:{"^":"dL+K;",
$asb:function(){return[W.aG]},
$asd:function(){return[W.aG]},
$isb:1,
$isd:1},
aH:{"^":"e;",$isf:1,"%":"SpeechGrammar"},
oo:{"^":"ih;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isb:1,
$asb:function(){return[W.aH]},
$isd:1,
$asd:function(){return[W.aH]},
$isu:1,
$asu:function(){return[W.aH]},
$isr:1,
$asr:function(){return[W.aH]},
"%":"SpeechGrammarList"},
hX:{"^":"e+B;",
$asb:function(){return[W.aH]},
$asd:function(){return[W.aH]},
$isb:1,
$isd:1},
ih:{"^":"hX+K;",
$asb:function(){return[W.aH]},
$asd:function(){return[W.aH]},
$isb:1,
$isd:1},
op:{"^":"a4;W:error=","%":"SpeechRecognitionError"},
aI:{"^":"e;i:length=",$isf:1,"%":"SpeechRecognitionResult"},
oq:{"^":"v;",
a1:function(a){return a.cancel()},
"%":"SpeechSynthesis"},
os:{"^":"e;",
h:function(a,b){return a.getItem(b)},
j:function(a,b,c){a.setItem(b,c)},
R:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gi:function(a){return a.length},
gI:function(a){return a.key(0)==null},
$isG:1,
$asG:function(){return[P.q,P.q]},
"%":"Storage"},
aJ:{"^":"e;",$isf:1,"%":"CSSStyleSheet|StyleSheet"},
eo:{"^":"e;","%":"KeywordValue|NumberValue|TransformValue;StyleValue"},
jH:{"^":"z;",
V:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bN(a,b,c,d)
z=W.hw("<table>"+H.h(b)+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.a9(y).P(0,J.fI(z))
return y},
"%":"HTMLTableElement"},
ow:{"^":"z;",
V:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bN(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.t.V(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gas(z)
x.toString
z=new W.a9(x)
w=z.gas(z)
y.toString
w.toString
new W.a9(y).P(0,new W.a9(w))
return y},
"%":"HTMLTableRowElement"},
ox:{"^":"z;",
V:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bN(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.t.V(z.createElement("table"),b,c,d)
z.toString
z=new W.a9(z)
x=z.gas(z)
y.toString
x.toString
new W.a9(y).P(0,new W.a9(x))
return y},
"%":"HTMLTableSectionElement"},
er:{"^":"z;",
bK:function(a,b,c,d){var z
a.textContent=null
z=this.V(a,b,c,d)
a.content.appendChild(z)},
bJ:function(a,b){return this.bK(a,b,null,null)},
$iser:1,
"%":"HTMLTemplateElement"},
oy:{"^":"z;L:name=,G:value=","%":"HTMLTextAreaElement"},
oz:{"^":"e;m:width=","%":"TextMetrics"},
aK:{"^":"v;",$isf:1,"%":"TextTrack"},
aL:{"^":"v;",$isf:1,"%":"TextTrackCue|VTTCue"},
oC:{"^":"ii;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aL]},
$isr:1,
$asr:function(){return[W.aL]},
$isb:1,
$asb:function(){return[W.aL]},
$isd:1,
$asd:function(){return[W.aL]},
"%":"TextTrackCueList"},
hY:{"^":"e+B;",
$asb:function(){return[W.aL]},
$asd:function(){return[W.aL]},
$isb:1,
$isd:1},
ii:{"^":"hY+K;",
$asb:function(){return[W.aL]},
$asd:function(){return[W.aL]},
$isb:1,
$isd:1},
oD:{"^":"dP;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aK]},
$isr:1,
$asr:function(){return[W.aK]},
$isb:1,
$asb:function(){return[W.aK]},
$isd:1,
$asd:function(){return[W.aK]},
"%":"TextTrackList"},
dM:{"^":"v+B;",
$asb:function(){return[W.aK]},
$asd:function(){return[W.aK]},
$isb:1,
$isd:1},
dP:{"^":"dM+K;",
$asb:function(){return[W.aK]},
$asd:function(){return[W.aK]},
$isb:1,
$isd:1},
oE:{"^":"e;i:length=","%":"TimeRanges"},
aM:{"^":"e;",$isf:1,"%":"Touch"},
oG:{"^":"ij;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isb:1,
$asb:function(){return[W.aM]},
$isd:1,
$asd:function(){return[W.aM]},
$isu:1,
$asu:function(){return[W.aM]},
$isr:1,
$asr:function(){return[W.aM]},
"%":"TouchList"},
hZ:{"^":"e+B;",
$asb:function(){return[W.aM]},
$asd:function(){return[W.aM]},
$isb:1,
$isd:1},
ij:{"^":"hZ+K;",
$asb:function(){return[W.aM]},
$asd:function(){return[W.aM]},
$isb:1,
$isd:1},
oH:{"^":"e;i:length=","%":"TrackDefaultList"},
cQ:{"^":"e;","%":"Matrix|Skew;TransformComponent"},
oK:{"^":"cQ;q:x=,t:y=","%":"Translation"},
oL:{"^":"e;",
iG:[function(a){return a.parentNode()},"$0","gbE",0,0,5],
ij:[function(a){return a.previousNode()},"$0","gcB",0,0,5],
"%":"TreeWalker"},
jV:{"^":"a4;","%":"CompositionEvent|FocusEvent|KeyboardEvent|SVGZoomEvent|TextEvent|TouchEvent;UIEvent"},
oM:{"^":"e;",
k:function(a){return String(a)},
$ise:1,
"%":"URL"},
oO:{"^":"iX;p:height%,m:width%","%":"HTMLVideoElement"},
oP:{"^":"v;i:length=","%":"VideoTrackList"},
oS:{"^":"e;p:height=,m:width=","%":"VTTRegion"},
oT:{"^":"e;i:length=","%":"VTTRegionList"},
oU:{"^":"v;",
ag:function(a,b){return a.send(b)},
"%":"WebSocket"},
c8:{"^":"v;",
ghg:function(a){var z,y
z=P.bn
y=new P.a0(0,$.w,null,[z])
this.fs(a)
this.fV(a,W.fg(new W.jY(new P.f0(y,[z]))))
return y},
fV:function(a,b){return a.requestAnimationFrame(H.aa(b,1))},
fs:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isc8:1,
$ise:1,
$isv:1,
"%":"DOMWindow|Window"},
jY:{"^":"j:0;a",
$1:[function(a){this.a.aQ(0,a)},null,null,2,0,null,35,"call"]},
oV:{"^":"v;",$isv:1,$ise:1,"%":"Worker"},
oW:{"^":"v;",$ise:1,"%":"CompositorWorkerGlobalScope|DedicatedWorkerGlobalScope|ServiceWorkerGlobalScope|SharedWorkerGlobalScope|WorkerGlobalScope"},
p_:{"^":"t;L:name=,ds:namespaceURI=","%":"Attr"},
p0:{"^":"e;ck:bottom=,p:height=,aZ:left=,cE:right=,b5:top=,m:width=",
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
C:function(a,b){var z,y,x
if(b==null)return!1
z=J.n(b)
if(!z.$isT)return!1
y=a.left
x=z.gaZ(b)
if(y==null?x==null:y===x){y=a.top
x=z.gb5(b)
if(y==null?x==null:y===x){y=a.width
x=z.gm(b)
if(y==null?x==null:y===x){y=a.height
z=z.gp(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gF:function(a){var z,y,x,w
z=J.a1(a.left)
y=J.a1(a.top)
x=J.a1(a.width)
w=J.a1(a.height)
return W.eW(W.aO(W.aO(W.aO(W.aO(0,z),y),x),w))},
gcN:function(a){return new P.ah(a.left,a.top,[null])},
$isT:1,
$asT:I.R,
"%":"ClientRect"},
p1:{"^":"ik;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isu:1,
$asu:function(){return[P.T]},
$isr:1,
$asr:function(){return[P.T]},
$isb:1,
$asb:function(){return[P.T]},
$isd:1,
$asd:function(){return[P.T]},
"%":"ClientRectList|DOMRectList"},
i_:{"^":"e+B;",
$asb:function(){return[P.T]},
$asd:function(){return[P.T]},
$isb:1,
$isd:1},
ik:{"^":"i_+K;",
$asb:function(){return[P.T]},
$asd:function(){return[P.T]},
$isb:1,
$isd:1},
p2:{"^":"il;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isb:1,
$asb:function(){return[W.ax]},
$isd:1,
$asd:function(){return[W.ax]},
$isu:1,
$asu:function(){return[W.ax]},
$isr:1,
$asr:function(){return[W.ax]},
"%":"CSSRuleList"},
i0:{"^":"e+B;",
$asb:function(){return[W.ax]},
$asd:function(){return[W.ax]},
$isb:1,
$isd:1},
il:{"^":"i0+K;",
$asb:function(){return[W.ax]},
$asd:function(){return[W.ax]},
$isb:1,
$isd:1},
p3:{"^":"t;",$ise:1,"%":"DocumentType"},
p4:{"^":"ht;",
gp:function(a){return a.height},
gm:function(a){return a.width},
gq:function(a){return a.x},
sq:function(a,b){a.x=b},
gt:function(a){return a.y},
st:function(a,b){a.y=b},
"%":"DOMRect"},
p5:{"^":"i4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aB]},
$isr:1,
$asr:function(){return[W.aB]},
$isb:1,
$asb:function(){return[W.aB]},
$isd:1,
$asd:function(){return[W.aB]},
"%":"GamepadList"},
hL:{"^":"e+B;",
$asb:function(){return[W.aB]},
$asd:function(){return[W.aB]},
$isb:1,
$isd:1},
i4:{"^":"hL+K;",
$asb:function(){return[W.aB]},
$asd:function(){return[W.aB]},
$isb:1,
$isd:1},
p7:{"^":"z;",$isv:1,$ise:1,"%":"HTMLFrameSetElement"},
pa:{"^":"i5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isb:1,
$asb:function(){return[W.t]},
$isd:1,
$asd:function(){return[W.t]},
$isu:1,
$asu:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
"%":"MozNamedAttrMap|NamedNodeMap"},
hM:{"^":"e+B;",
$asb:function(){return[W.t]},
$asd:function(){return[W.t]},
$isb:1,
$isd:1},
i5:{"^":"hM+K;",
$asb:function(){return[W.t]},
$asd:function(){return[W.t]},
$isb:1,
$isd:1},
pb:{"^":"h3;",
ac:function(a){return a.clone()},
"%":"Request"},
pf:{"^":"v;",$isv:1,$ise:1,"%":"ServiceWorker"},
pg:{"^":"i6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isb:1,
$asb:function(){return[W.aI]},
$isd:1,
$asd:function(){return[W.aI]},
$isu:1,
$asu:function(){return[W.aI]},
$isr:1,
$asr:function(){return[W.aI]},
"%":"SpeechRecognitionResultList"},
hN:{"^":"e+B;",
$asb:function(){return[W.aI]},
$asd:function(){return[W.aI]},
$isb:1,
$isd:1},
i6:{"^":"hN+K;",
$asb:function(){return[W.aI]},
$asd:function(){return[W.aI]},
$isb:1,
$isd:1},
ph:{"^":"i7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$isu:1,
$asu:function(){return[W.aJ]},
$isr:1,
$asr:function(){return[W.aJ]},
$isb:1,
$asb:function(){return[W.aJ]},
$isd:1,
$asd:function(){return[W.aJ]},
"%":"StyleSheetList"},
hO:{"^":"e+B;",
$asb:function(){return[W.aJ]},
$asd:function(){return[W.aJ]},
$isb:1,
$isd:1},
i7:{"^":"hO+K;",
$asb:function(){return[W.aJ]},
$asd:function(){return[W.aJ]},
$isb:1,
$isd:1},
pj:{"^":"e;",$ise:1,"%":"WorkerLocation"},
pk:{"^":"e;",$ise:1,"%":"WorkerNavigator"},
k6:{"^":"f;fB:a<",
R:function(a,b){var z,y,x,w,v
for(z=this.gae(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.E)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gae:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.x([],[P.q])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.a(z,w)
v=z[w]
u=J.m(v)
if(u.gds(v)==null)y.push(u.gL(v))}return y},
gI:function(a){return this.gae(this).length===0},
$isG:1,
$asG:function(){return[P.q,P.q]}},
ki:{"^":"k6;a",
h:function(a,b){return this.a.getAttribute(b)},
j:function(a,b,c){this.a.setAttribute(b,c)},
gi:function(a){return this.gae(this).length}},
eP:{"^":"a8;a,b,c,$ti",
X:function(a,b,c,d){return W.a7(this.a,this.b,a,!1,H.P(this,0))},
b_:function(a,b,c){return this.X(a,null,b,c)}},
aj:{"^":"eP;a,b,c,$ti"},
eO:{"^":"a8;a,b,c,$ti",
X:function(a,b,c,d){var z,y,x,w
z=H.P(this,0)
y=this.$ti
x=new W.l4(null,new H.a_(0,null,null,null,null,null,0,[[P.a8,z],[P.em,z]]),y)
x.a=new P.cc(null,x.ghm(x),0,null,null,null,null,y)
for(z=this.a,z=new H.cC(z,z.gi(z),0,null),w=this.c;z.u();)x.D(0,new W.eP(z.d,w,!1,y))
z=x.a
z.toString
return new P.k7(z,[H.P(z,0)]).X(a,b,c,d)},
b_:function(a,b,c){return this.X(a,null,b,c)},
e3:function(a){return this.X(a,null,null,null)}},
kl:{"^":"em;a,b,c,d,e,$ti",
a1:function(a){if(this.b==null)return
this.dG()
this.b=null
this.d=null
return},
b1:function(a,b){if(this.b==null)return;++this.a
this.dG()},
cz:function(a){return this.b1(a,null)},
gaY:function(){return this.a>0},
cD:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dE()},
dE:function(){var z=this.d
if(z!=null&&this.a<=0)J.fD(this.b,this.c,z,!1)},
dG:function(){var z=this.d
if(z!=null)J.fQ(this.b,this.c,z,!1)},
f6:function(a,b,c,d,e){this.dE()},
v:{
a7:function(a,b,c,d,e){var z=c==null?null:W.fg(new W.km(c))
z=new W.kl(0,a,b,z,!1,[e])
z.f6(a,b,c,!1,e)
return z}}},
km:{"^":"j:0;a",
$1:[function(a){return this.a.$1(a)},null,null,2,0,null,2,"call"]},
l4:{"^":"f;a,b,$ti",
D:function(a,b){var z,y
z=this.b
if(z.U(0,b))return
y=this.a
z.j(0,b,b.b_(y.ghb(y),new W.l5(this,b),y.ghd()))},
J:function(a,b){var z=this.b.J(0,b)
if(z!=null)J.de(z)},
dR:[function(a){var z,y
for(z=this.b,y=z.gcO(z),y=y.gK(y);y.u();)J.de(y.gw())
z.an(0)
this.a.dR(0)},"$0","ghm",0,0,1]},
l5:{"^":"j:2;a,b",
$0:function(){return this.a.J(0,this.b)}},
cV:{"^":"f;eq:a<",
aw:function(a){return $.$get$eV().O(0,W.b9(a))},
am:function(a,b,c){var z,y,x
z=W.b9(a)
y=$.$get$cW()
x=y.h(0,H.h(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
f9:function(a){var z,y
z=$.$get$cW()
if(z.gI(z)){for(y=0;y<262;++y)z.j(0,C.H[y],W.lT())
for(y=0;y<12;++y)z.j(0,C.j[y],W.lU())}},
v:{
eU:function(a){var z,y
z=document.createElement("a")
y=new W.kZ(z,window.location)
y=new W.cV(y)
y.f9(a)
return y},
p8:[function(a,b,c,d){return!0},"$4","lT",8,0,8,11,12,1,13],
p9:[function(a,b,c,d){var z,y,x,w,v
z=d.geq()
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
return z},"$4","lU",8,0,8,11,12,1,13]}},
K:{"^":"f;$ti",
gK:function(a){return new W.dT(a,this.gi(a),-1,null)},
D:function(a,b){throw H.c(new P.l("Cannot add to immutable List."))},
aA:function(a,b){throw H.c(new P.l("Cannot remove from immutable List."))},
a3:function(a,b,c,d,e){throw H.c(new P.l("Cannot setRange on immutable List."))},
$isb:1,
$asb:null,
$isd:1,
$asd:null},
e6:{"^":"f;a",
D:function(a,b){this.a.push(b)},
aw:function(a){return C.a.dL(this.a,new W.j2(a))},
am:function(a,b,c){return C.a.dL(this.a,new W.j1(a,b,c))}},
j2:{"^":"j:0;a",
$1:function(a){return a.aw(this.a)}},
j1:{"^":"j:0;a,b,c",
$1:function(a){return a.am(this.a,this.b,this.c)}},
l_:{"^":"f;eq:d<",
aw:function(a){return this.a.O(0,W.b9(a))},
am:["eY",function(a,b,c){var z,y
z=W.b9(a)
y=this.c
if(y.O(0,H.h(z)+"::"+b))return this.d.hf(c)
else if(y.O(0,"*::"+b))return this.d.hf(c)
else{y=this.b
if(y.O(0,H.h(z)+"::"+b))return!0
else if(y.O(0,"*::"+b))return!0
else if(y.O(0,H.h(z)+"::*"))return!0
else if(y.O(0,"*::*"))return!0}return!1}],
fa:function(a,b,c,d){var z,y,x
this.a.P(0,c)
z=b.cP(0,new W.l0())
y=b.cP(0,new W.l1())
this.b.P(0,z)
x=this.c
x.P(0,C.h)
x.P(0,y)}},
l0:{"^":"j:0;",
$1:function(a){return!C.a.O(C.j,a)}},
l1:{"^":"j:0;",
$1:function(a){return C.a.O(C.j,a)}},
ld:{"^":"l_;e,a,b,c,d",
am:function(a,b,c){if(this.eY(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.dh(a).a.getAttribute("template")==="")return this.e.O(0,b)
return!1},
v:{
f1:function(){var z=P.q
z=new W.ld(P.e_(C.i,z),P.ag(null,null,null,z),P.ag(null,null,null,z),P.ag(null,null,null,z),null)
z.fa(null,new H.bD(C.i,new W.le(),[H.P(C.i,0),null]),["TEMPLATE"],null)
return z}}},
le:{"^":"j:0;",
$1:[function(a){return"TEMPLATE::"+H.h(a)},null,null,2,0,null,24,"call"]},
l9:{"^":"f;",
aw:function(a){var z=J.n(a)
if(!!z.$isei)return!1
z=!!z.$isA
if(z&&W.b9(a)==="foreignObject")return!1
if(z)return!0
return!1},
am:function(a,b,c){if(b==="is"||C.d.eK(b,"on"))return!1
return this.aw(a)}},
dT:{"^":"f;a,b,c,d",
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.al(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gw:function(){return this.d}},
kc:{"^":"f;a",
dJ:function(a,b,c,d){return H.C(new P.l("You can only attach EventListeners to your own window."))},
eh:function(a,b,c,d){return H.C(new P.l("You can only attach EventListeners to your own window."))},
$isv:1,
$ise:1,
v:{
kd:function(a){if(a===window)return a
else return new W.kc(a)}}},
e5:{"^":"f;"},
kZ:{"^":"f;a,b"},
f2:{"^":"f;a",
cS:function(a){new W.lg(this).$2(a,null)},
aM:function(a,b){var z
if(b==null){z=a.parentNode
if(z!=null)z.removeChild(a)}else b.removeChild(a)},
fY:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.dh(a)
x=y.gfB().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.J(t)}v="element unprintable"
try{v=J.H(a)}catch(t){H.J(t)}try{u=W.b9(a)
this.fX(a,b,z,v,u,y,x)}catch(t){if(H.J(t) instanceof P.au)throw t
else{this.aM(a,b)
window
s="Removing corrupted element "+H.h(v)
if(typeof console!="undefined")console.warn(s)}}},
fX:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aM(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(z)
return}if(!this.a.aw(a)){this.aM(a,b)
window
z="Removing disallowed element <"+H.h(e)+"> from "+J.H(b)
if(typeof console!="undefined")console.warn(z)
return}if(g!=null)if(!this.a.am(a,"is",g)){this.aM(a,b)
window
z="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(z)
return}z=f.gae(f)
y=H.x(z.slice(0),[H.P(z,0)])
for(x=f.gae(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.a(y,x)
w=y[x]
if(!this.a.am(a,J.fW(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.h(e)+" "+H.h(w)+'="'+H.h(z.getAttribute(w))+'">'
if(typeof console!="undefined")console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.n(a).$iser)this.cS(a.content)}},
lg:{"^":"j:18;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fY(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aM(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fJ(z)}catch(w){H.J(w)
v=z
if(x){u=J.m(v)
if(u.gbE(v)!=null){u.gbE(v)
u.gbE(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}}}],["","",,P,{"^":"",
lL:function(a){var z,y,x,w,v
if(a==null)return
z=P.bb()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
lI:function(a){var z,y
z=new P.a0(0,$.w,null,[null])
y=new P.eJ(z,[null])
a.then(H.aa(new P.lJ(y),1))["catch"](H.aa(new P.lK(y),1))
return z},
dF:function(){var z=$.dE
if(z==null){z=J.ck(window.navigator.userAgent,"Opera",0)
$.dE=z}return z},
hp:function(){var z,y
z=$.dB
if(z!=null)return z
y=$.dC
if(y==null){y=J.ck(window.navigator.userAgent,"Firefox",0)
$.dC=y}if(y)z="-moz-"
else{y=$.dD
if(y==null){y=P.dF()!==!0&&J.ck(window.navigator.userAgent,"Trident/",0)
$.dD=y}if(y)z="-ms-"
else z=P.dF()===!0?"-o-":"-webkit-"}$.dB=z
return z},
l6:{"^":"f;",
aT:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
z.push(a)
this.b.push(null)
return y},
a7:function(a){var z,y,x,w,v,u
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.n(a)
if(!!y.$isay)return new Date(a.a)
if(!!y.$isoc)throw H.c(new P.bI("structured clone of RegExp"))
if(!!y.$isaf)return a
if(!!y.$isbs)return a
if(!!y.$isdR)return a
if(!!y.$isbY)return a
if(!!y.$iscG||!!y.$isbE)return a
if(!!y.$isG){x=this.aT(a)
w=this.b
v=w.length
if(x>=v)return H.a(w,x)
u=w[x]
z.a=u
if(u!=null)return u
u={}
z.a=u
if(x>=v)return H.a(w,x)
w[x]=u
y.R(a,new P.l8(z,this))
return z.a}if(!!y.$isb){x=this.aT(a)
z=this.b
if(x>=z.length)return H.a(z,x)
u=z[x]
if(u!=null)return u
return this.hr(a,x)}throw H.c(new P.bI("structured clone of other type"))},
hr:function(a,b){var z,y,x,w,v
z=J.D(a)
y=z.gi(a)
x=new Array(y)
w=this.b
if(b>=w.length)return H.a(w,b)
w[b]=x
for(v=0;v<y;++v){w=this.a7(z.h(a,v))
if(v>=x.length)return H.a(x,v)
x[v]=w}return x}},
l8:{"^":"j:4;a,b",
$2:function(a,b){this.a.a[a]=this.b.a7(b)}},
k_:{"^":"f;",
aT:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
a7:function(a){var z,y,x,w,v,u,t,s,r
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.ay(y,!0)
x.bP(y,!0)
return x}if(a instanceof RegExp)throw H.c(new P.bI("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.lI(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.aT(a)
x=this.b
u=x.length
if(v>=u)return H.a(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.bb()
z.a=t
if(v>=u)return H.a(x,v)
x[v]=t
this.hN(a,new P.k0(z,this))
return z.a}if(a instanceof Array){v=this.aT(a)
x=this.b
if(v>=x.length)return H.a(x,v)
t=x[v]
if(t!=null)return t
u=J.D(a)
s=u.gi(a)
t=this.c?new Array(s):a
if(v>=x.length)return H.a(x,v)
x[v]=t
if(typeof s!=="number")return H.i(s)
x=J.b4(t)
r=0
for(;r<s;++r)x.j(t,r,this.a7(u.h(a,r)))
return t}return a}},
k0:{"^":"j:4;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.a7(b)
J.bQ(z,a,y)
return y}},
l7:{"^":"l6;a,b"},
cR:{"^":"k_;a,b,c",
hN:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
b.$2(w,a[w])}}},
lJ:{"^":"j:0;a",
$1:[function(a){return this.a.aQ(0,a)},null,null,2,0,null,14,"call"]},
lK:{"^":"j:0;a",
$1:[function(a){return this.a.cn(a)},null,null,2,0,null,14,"call"]}}],["","",,P,{"^":"",
lk:function(a){var z,y,x
z=new P.a0(0,$.w,null,[null])
y=new P.f0(z,[null])
a.toString
x=W.a4
W.a7(a,"success",new P.ll(a,y),!1,x)
W.a7(a,"error",y.ghn(),!1,x)
return z},
mB:{"^":"e;",
e7:[function(a,b){if(b==null)a.continue()
else a.continue(b)},function(a){return this.e7(a,null)},"ic","$1","$0","gS",0,2,19,0,26],
"%":"IDBCursor|IDBCursorWithValue"},
ll:{"^":"j:0;a,b",
$1:function(a){this.b.aQ(0,new P.cR([],[],!1).a7(this.a.result))}},
cA:{"^":"e;",$iscA:1,"%":"IDBKeyRange"},
nR:{"^":"e;",
dI:function(a,b,c){var z,y,x,w,v
try{z=null
z=this.fC(a,b)
w=P.lk(z)
return w}catch(v){y=H.J(v)
x=H.Z(v)
w=P.hA(y,x,null)
return w}},
D:function(a,b){return this.dI(a,b,null)},
fD:function(a,b,c){return a.add(new P.l7([],[]).a7(b))},
fC:function(a,b){return this.fD(a,b,null)},
"%":"IDBObjectStore"},
oe:{"^":"v;W:error=",
gH:function(a){return new P.cR([],[],!1).a7(a.result)},
"%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},
oI:{"^":"v;W:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
li:[function(a,b,c,d){var z,y,x
if(b===!0){z=[c]
C.a.P(z,d)
d=z}y=P.aX(J.dm(d,P.m6()),!0,null)
x=H.jd(a,y)
return P.f6(x)},null,null,8,0,null,27,28,29,30],
d_:function(a,b,c){var z
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(z){H.J(z)}return!1},
f8:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
f6:[function(a){var z
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=J.n(a)
if(!!z.$isbC)return a.a
if(!!z.$isbs||!!z.$isa4||!!z.$iscA||!!z.$isbY||!!z.$ist||!!z.$isa6||!!z.$isc8)return a
if(!!z.$isay)return H.W(a)
if(!!z.$iscu)return P.f7(a,"$dart_jsFunction",new P.ln())
return P.f7(a,"_$dart_jsObject",new P.lo($.$get$cZ()))},"$1","m7",2,0,0,15],
f7:function(a,b,c){var z=P.f8(a,b)
if(z==null){z=c.$1(a)
P.d_(a,b,z)}return z},
f5:[function(a){var z,y
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else{if(a instanceof Object){z=J.n(a)
z=!!z.$isbs||!!z.$isa4||!!z.$iscA||!!z.$isbY||!!z.$ist||!!z.$isa6||!!z.$isc8}else z=!1
if(z)return a
else if(a instanceof Date){z=0+a.getTime()
y=new P.ay(z,!1)
y.bP(z,!1)
return y}else if(a.constructor===$.$get$cZ())return a.o
else return P.ff(a)}},"$1","m6",2,0,24,15],
ff:function(a){if(typeof a=="function")return P.d0(a,$.$get$bV(),new P.lx())
if(a instanceof Array)return P.d0(a,$.$get$cU(),new P.ly())
return P.d0(a,$.$get$cU(),new P.lz())},
d0:function(a,b,c){var z=P.f8(a,b)
if(z==null||!(a instanceof Object)){z=c.$1(a)
P.d_(a,b,z)}return z},
bC:{"^":"f;a",
h:["eS",function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.c(P.b7("property is not a String or num"))
return P.f5(this.a[b])}],
j:["cU",function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.c(P.b7("property is not a String or num"))
this.a[b]=P.f6(c)}],
gF:function(a){return 0},
C:function(a,b){if(b==null)return!1
return b instanceof P.bC&&this.a===b.a},
k:function(a){var z,y
try{z=String(this.a)
return z}catch(y){H.J(y)
z=this.eU(this)
return z}},
bx:function(a,b){var z,y
z=this.a
y=b==null?null:P.aX(new H.bD(b,P.m7(),[H.P(b,0),null]),!0,null)
return P.f5(z[a].apply(z,y))}},
iG:{"^":"bC;a"},
iE:{"^":"iK;a,$ti",
ff:function(a){var z
if(typeof a==="number"&&Math.floor(a)===a)z=a<0||a>=this.gi(this)
else z=!1
if(z)throw H.c(P.L(a,0,this.gi(this),null,null))},
h:function(a,b){var z
if(typeof b==="number"&&b===C.c.cL(b)){if(typeof b==="number"&&Math.floor(b)===b)z=b<0||b>=this.gi(this)
else z=!1
if(z)H.C(P.L(b,0,this.gi(this),null,null))}return this.eS(0,b)},
j:function(a,b,c){var z
if(typeof b==="number"&&b===C.e.cL(b)){if(typeof b==="number"&&Math.floor(b)===b)z=b<0||b>=this.gi(this)
else z=!1
if(z)H.C(P.L(b,0,this.gi(this),null,null))}this.cU(0,b,c)},
gi:function(a){var z=this.a.length
if(typeof z==="number"&&z>>>0===z)return z
throw H.c(new P.Y("Bad JsArray length"))},
si:function(a,b){this.cU(0,"length",b)},
D:function(a,b){this.bx("push",[b])},
aA:function(a,b){this.ff(b)
return J.al(this.bx("splice",[b,1]),0)},
a3:function(a,b,c,d,e){var z,y
P.iF(b,c,this.gi(this))
z=c-b
if(z===0)return
y=[b,z]
C.a.P(y,new H.cN(d,e,null,[H.O(d,"B",0)]).ir(0,z))
this.bx("splice",y)},
v:{
iF:function(a,b,c){if(a>c)throw H.c(P.L(a,0,c,null,null))
if(b<a||b>c)throw H.c(P.L(b,a,c,null,null))}}},
iK:{"^":"bC+B;",$asb:null,$asd:null,$isb:1,$isd:1},
ln:{"^":"j:0;",
$1:function(a){var z=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.li,a,!1)
P.d_(z,$.$get$bV(),a)
return z}},
lo:{"^":"j:0;a",
$1:function(a){return new this.a(a)}},
lx:{"^":"j:0;",
$1:function(a){return new P.iG(a)}},
ly:{"^":"j:0;",
$1:function(a){return new P.iE(a,[null])}},
lz:{"^":"j:0;",
$1:function(a){return new P.bC(a)}}}],["","",,P,{"^":"",
bh:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ah:{"^":"f;q:a>,t:b>,$ti",
k:function(a){return"Point("+H.h(this.a)+", "+H.h(this.b)+")"},
C:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.ah))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gF:function(a){var z,y
z=J.a1(this.a)
y=J.a1(this.b)
return P.eX(P.bh(P.bh(0,z),y))},
n:function(a,b){var z,y,x,w
z=this.a
y=J.m(b)
x=y.gq(b)
if(typeof z!=="number")return z.n()
if(typeof x!=="number")return H.i(x)
w=this.b
y=y.gt(b)
if(typeof w!=="number")return w.n()
if(typeof y!=="number")return H.i(y)
return new P.ah(z+x,w+y,this.$ti)},
N:function(a,b){var z,y,x,w
z=this.a
y=J.m(b)
x=y.gq(b)
if(typeof z!=="number")return z.N()
if(typeof x!=="number")return H.i(x)
w=this.b
y=y.gt(b)
if(typeof w!=="number")return w.N()
if(typeof y!=="number")return H.i(y)
return new P.ah(z-x,w-y,this.$ti)},
E:function(a,b){var z,y
z=this.a
if(typeof z!=="number")return z.E()
if(typeof b!=="number")return H.i(b)
y=this.b
if(typeof y!=="number")return y.E()
return new P.ah(z*b,y*b,this.$ti)}},
kU:{"^":"f;$ti",
gcE:function(a){var z,y
z=this.a
y=this.c
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.i(y)
return z+y},
gck:function(a){var z,y
z=this.b
y=this.d
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.i(y)
return z+y},
k:function(a){return"Rectangle ("+H.h(this.a)+", "+H.h(this.b)+") "+H.h(this.c)+" x "+H.h(this.d)},
C:function(a,b){var z,y,x,w
if(b==null)return!1
z=J.n(b)
if(!z.$isT)return!1
y=this.a
x=z.gaZ(b)
if(y==null?x==null:y===x){x=this.b
w=z.gb5(b)
if(x==null?w==null:x===w){w=this.c
if(typeof y!=="number")return y.n()
if(typeof w!=="number")return H.i(w)
if(y+w===z.gcE(b)){y=this.d
if(typeof x!=="number")return x.n()
if(typeof y!=="number")return H.i(y)
z=x+y===z.gck(b)}else z=!1}else z=!1}else z=!1
return z},
gF:function(a){var z,y,x,w,v,u
z=this.a
y=J.a1(z)
x=this.b
w=J.a1(x)
v=this.c
if(typeof z!=="number")return z.n()
if(typeof v!=="number")return H.i(v)
u=this.d
if(typeof x!=="number")return x.n()
if(typeof u!=="number")return H.i(u)
return P.eX(P.bh(P.bh(P.bh(P.bh(0,y),w),z+v&0x1FFFFFFF),x+u&0x1FFFFFFF))},
gcN:function(a){return new P.ah(this.a,this.b,this.$ti)}},
T:{"^":"kU;aZ:a>,b5:b>,m:c>,p:d>,$ti",$asT:null,v:{
jp:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a8()
if(c<0)z=-c*0
else z=c
if(typeof d!=="number")return d.a8()
if(d<0)y=-d*0
else y=d
return new P.T(a,b,z,y,[e])}}}}],["","",,P,{"^":"",mn:{"^":"aW;",$ise:1,"%":"SVGAElement"},mq:{"^":"A;",$ise:1,"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGSetElement"},mL:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEBlendElement"},mM:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEColorMatrixElement"},mN:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEComponentTransferElement"},mO:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFECompositeElement"},mP:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEConvolveMatrixElement"},mQ:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEDiffuseLightingElement"},mR:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEDisplacementMapElement"},mS:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEFloodElement"},mT:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEGaussianBlurElement"},mU:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEImageElement"},mV:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEMergeElement"},mW:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEMorphologyElement"},mX:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFEOffsetElement"},mY:{"^":"A;q:x=,t:y=","%":"SVGFEPointLightElement"},mZ:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFESpecularLightingElement"},n_:{"^":"A;q:x=,t:y=","%":"SVGFESpotLightElement"},n0:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFETileElement"},n1:{"^":"A;p:height=,H:result=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFETurbulenceElement"},n5:{"^":"A;p:height=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGFilterElement"},n7:{"^":"aW;p:height=,m:width=,q:x=,t:y=","%":"SVGForeignObjectElement"},hB:{"^":"aW;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aW:{"^":"A;",$ise:1,"%":"SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},ne:{"^":"aW;p:height=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGImageElement"},ba:{"^":"e;",$isf:1,"%":"SVGLength"},nn:{"^":"i8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isb:1,
$asb:function(){return[P.ba]},
$isd:1,
$asd:function(){return[P.ba]},
"%":"SVGLengthList"},hP:{"^":"e+B;",
$asb:function(){return[P.ba]},
$asd:function(){return[P.ba]},
$isb:1,
$isd:1},i8:{"^":"hP+K;",
$asb:function(){return[P.ba]},
$asd:function(){return[P.ba]},
$isb:1,
$isd:1},ns:{"^":"A;",$ise:1,"%":"SVGMarkerElement"},nt:{"^":"A;p:height=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGMaskElement"},be:{"^":"e;",$isf:1,"%":"SVGNumber"},nP:{"^":"i9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isb:1,
$asb:function(){return[P.be]},
$isd:1,
$asd:function(){return[P.be]},
"%":"SVGNumberList"},hQ:{"^":"e+B;",
$asb:function(){return[P.be]},
$asd:function(){return[P.be]},
$isb:1,
$isd:1},i9:{"^":"hQ+K;",
$asb:function(){return[P.be]},
$asd:function(){return[P.be]},
$isb:1,
$isd:1},nX:{"^":"A;p:height=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGPatternElement"},o_:{"^":"e;q:x%,t:y%","%":"SVGPoint"},o0:{"^":"e;i:length=","%":"SVGPointList"},oa:{"^":"e;p:height=,m:width=,q:x%,t:y%","%":"SVGRect"},ob:{"^":"hB;p:height=,m:width=,q:x=,t:y=","%":"SVGRectElement"},ei:{"^":"A;",$isei:1,$ise:1,"%":"SVGScriptElement"},ot:{"^":"ia;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isb:1,
$asb:function(){return[P.q]},
$isd:1,
$asd:function(){return[P.q]},
"%":"SVGStringList"},hR:{"^":"e+B;",
$asb:function(){return[P.q]},
$asd:function(){return[P.q]},
$isb:1,
$isd:1},ia:{"^":"hR+K;",
$asb:function(){return[P.q]},
$asd:function(){return[P.q]},
$isb:1,
$isd:1},A:{"^":"az;",
se0:function(a,b){this.bJ(a,b)},
V:function(a,b,c,d){var z,y,x,w,v,u
z=H.x([],[W.e5])
z.push(W.eU(null))
z.push(W.f1())
z.push(new W.l9())
c=new W.f2(new W.e6(z))
y='<svg version="1.1">'+H.h(b)+"</svg>"
z=document
x=z.body
w=(x&&C.l).hs(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a9(w)
u=z.gas(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
dU:function(a){return a.focus()},
ge8:function(a){return new W.aj(a,"change",!1,[W.a4])},
ge9:function(a){return new W.aj(a,"input",!1,[W.a4])},
gea:function(a){return new W.aj(a,"mousedown",!1,[W.aE])},
geb:function(a){return new W.aj(a,"mousemove",!1,[W.aE])},
gec:function(a){return new W.aj(a,"mouseup",!1,[W.aE])},
$isA:1,
$isv:1,
$ise:1,
"%":"SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGMetadataElement|SVGStopElement|SVGStyleElement|SVGTitleElement;SVGElement"},ou:{"^":"aW;p:height=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGSVGElement"},ov:{"^":"A;",$ise:1,"%":"SVGSymbolElement"},es:{"^":"aW;","%":";SVGTextContentElement"},oA:{"^":"es;",$ise:1,"%":"SVGTextPathElement"},oB:{"^":"es;q:x=,t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},bg:{"^":"e;",$isf:1,"%":"SVGTransform"},oJ:{"^":"ib;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isb:1,
$asb:function(){return[P.bg]},
$isd:1,
$asd:function(){return[P.bg]},
"%":"SVGTransformList"},hS:{"^":"e+B;",
$asb:function(){return[P.bg]},
$asd:function(){return[P.bg]},
$isb:1,
$isd:1},ib:{"^":"hS+K;",
$asb:function(){return[P.bg]},
$asd:function(){return[P.bg]},
$isb:1,
$isd:1},oN:{"^":"aW;p:height=,m:width=,q:x=,t:y=",$ise:1,"%":"SVGUseElement"},oQ:{"^":"A;",$ise:1,"%":"SVGViewElement"},oR:{"^":"e;",$ise:1,"%":"SVGViewSpec"},p6:{"^":"A;",$ise:1,"%":"SVGGradientElement|SVGLinearGradientElement|SVGRadialGradientElement"},pc:{"^":"A;",$ise:1,"%":"SVGCursorElement"},pd:{"^":"A;",$ise:1,"%":"SVGFEDropShadowElement"},pe:{"^":"A;",$ise:1,"%":"SVGMPathElement"}}],["","",,P,{"^":"",bS:{"^":"e;i:length=",$isbS:1,$isf:1,"%":"AudioBuffer"},ms:{"^":"v;",
fk:function(a,b,c,d){return a.decodeAudioData(b,H.aa(c,1),H.aa(d,1))},
hv:function(a,b){var z,y,x
z=P.bS
y=new P.a0(0,$.w,null,[z])
x=new P.eJ(y,[z])
this.fk(a,b,new P.fZ(x),new P.h_(x))
return y},
"%":"AudioContext|OfflineAudioContext|webkitAudioContext"},fZ:{"^":"j:0;a",
$1:[function(a){this.a.aQ(0,a)},null,null,2,0,null,1,"call"]},h_:{"^":"j:0;a",
$1:[function(a){var z=this.a
if(a==null)z.cn("")
else z.cn(a)},null,null,2,0,null,3,"call"]}}],["","",,P,{"^":"",od:{"^":"e;",$ise:1,"%":"WebGL2RenderingContext"},pi:{"^":"e;",$ise:1,"%":"WebGL2RenderingContextBase"}}],["","",,P,{"^":"",or:{"^":"ic;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return P.lL(a.item(b))},
j:function(a,b,c){throw H.c(new P.l("Cannot assign element of immutable List."))},
si:function(a,b){throw H.c(new P.l("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isb:1,
$asb:function(){return[P.G]},
$isd:1,
$asd:function(){return[P.G]},
"%":"SQLResultSetRowList"},hT:{"^":"e+B;",
$asb:function(){return[P.G]},
$asd:function(){return[P.G]},
$isb:1,
$isd:1},ic:{"^":"hT+K;",
$asb:function(){return[P.G]},
$asd:function(){return[P.G]},
$isb:1,
$isd:1}}],["","",,U,{"^":"",
hb:function(a,b){var z
if($.bu==null){z=new H.a_(0,null,null,null,null,null,0,[P.q,U.cp])
$.bu=z
z.j(0,"NetLogo",new U.iZ("  "))
$.bu.j(0,"plain",new U.ja("  "))}if($.bu.U(0,a))return $.bu.h(0,a).dh(b)
else return C.p.hG(b)},
nh:[function(a,b){var z,y
if($.$get$b2().h(0,a) instanceof U.dx){z=$.$get$b2().h(0,a)
C.a.si(z.a,0)
C.a.si(z.r,0)
C.a.J(z.ch.c,z)}y=C.p.ht(b)
if(!!J.n(y).$isG){$.$get$b2().j(0,a,U.hc(a,y))
$.$get$b2().h(0,a).ad()}},"$2","mb",4,0,25,6,33],
ng:[function(a,b){if($.$get$b2().U(0,a))return U.hb(b,$.$get$b2().h(0,a).cp())
return},"$2","ma",4,0,26,6,34],
pr:[function(){var z=$.$get$d5()
J.bQ(z,"NetTango_InitWorkspace",U.mb())
J.bQ(z,"NetTango_ExportCode",U.ma())},"$0","fu",0,0,1],
jv:function(a,b){var z,y
if(!$.$get$bF().U(0,a)){z=new XMLHttpRequest()
C.w.ih(z,"GET",b,!0)
z.responseType="arraybuffer"
y=W.o5
W.a7(z,"load",new U.jx(a,z),!1,y)
W.a7(z,"error",new U.jy(),!1,y)
z.send()}},
jA:function(a){var z
if($.$get$bF().h(0,a)!=null&&!$.jz){z=$.$get$c6().createBufferSource()
z.buffer=$.$get$bF().h(0,a)
z.connect($.$get$c6().destination,0,0)
z.loop=!1
z.playbackRate.value=1
if(!!z.start)z.start(0)
else z.noteOn(0)}},
db:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{z=H.ee(a,null,null)
return z}catch(y){if(!!J.n(H.J(y)).$isbW)return b
else throw y}return b},
as:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{z=P.md(a,null)
return z}catch(y){if(!!J.n(H.J(y)).$isbW)return b
else throw y}return b},
bP:function(a,b){if(a==null)return b
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return b},
bt:{"^":"f;a,ci:b>,c,d,q:e*,t:f*,m:r>,x,S:y*,bF:z@,e_:Q<,ch,ed:cx<,eg:cy<,db,dx,dy,fr,fx,fy,dY:go<,dd:id<,k1,k2,k3,k4,dn:r1<,dH:r2<",
gp:function(a){return this.r1?$.$get$p():this.x},
gaV:function(){return 0},
gaz:function(){return 0},
gaU:function(){return this.y!=null},
ghX:function(){return this.z!=null},
gb6:function(){return this.f},
ghk:function(){var z=this.f
return J.k(z,this.r1?$.$get$p():this.x)},
gaO:function(){var z=this.y
return z!=null?z.gaO():this},
gbC:function(){var z=this.y
if(!(z!=null)){z=this.ch
z=z!=null?z.rx:null}return z},
ge2:function(){return this.z==null},
ac:function(a){var z=U.h1(this.fy,this.b)
this.bY(0,z)
return z},
bY:function(a,b){var z,y,x,w
b.b=this.b
b.c=this.c
b.d=this.d
b.db=this.db
b.dx=this.dx
b.dy=this.dy
b.fr=this.fr
b.fx=this.fx
b.r=this.r
b.x=this.x
b.go=this.go
for(z=this.cx,y=z.length,x=b.cx,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)x.push(J.df(z[w],b))
for(z=this.cy,y=z.length,x=b.cy,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)x.push(J.df(z[w],b))},
Z:function(){var z,y,x,w,v,u
z=P.bb()
z.j(0,"id",this.a)
z.j(0,"action",this.b)
z.j(0,"type",this.c)
z.j(0,"format",this.d)
z.j(0,"start",this.go)
z.j(0,"required",this.fx)
y=this.cx
if(y.length!==0){z.j(0,"params",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=y[w]
J.aS(z.h(0,"params"),v.Z())}}y=this.cy
if(y.length!==0){z.j(0,"properties",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){u=y[w]
J.aS(z.h(0,"properties"),u.Z())}}return z},
cp:function(){var z=[]
this.a0(z)
return z},
a0:function(a){var z
J.aS(a,this.Z())
z=this.y
if(z!=null)z.a0(a)},
cd:function(a,b){var z,y,x,w,v,u,t,s,r
z=$.$get$ac()
y=this.di(a)
x=$.$get$U()
if(typeof x!=="number")return x.E()
if(typeof y!=="number")return y.n()
this.r=Math.max(H.fm(z),y+x*2)
if(!this.r1&&this.cx.length!==0)for(z=this.cx,y=z.length,w=0,v=0;v<z.length;z.length===y||(0,H.E)(z),++v){u=z[v]
u.bs(a)
t=J.k(J.dk(u),x)
if(typeof t!=="number")return H.i(t)
w+=t}else w=0
if(!this.r1&&this.cy.length!==0)for(z=this.cy,y=z.length,s=0,v=0;v<z.length;z.length===y||(0,H.E)(z),++v)s=Math.max(s,z[v].fW(a))
else s=0
z=this.e
if(typeof z!=="number")return z.n()
y=this.r
if(typeof y!=="number")return H.i(y)
y=Math.max(z+s,z+y+w)
b=Math.max(H.fm(b),y)
r=this.gbC()
if(r!=null)b=r.cd(a,b)
z=this.e
if(typeof z!=="number")return H.i(z)
this.r=b-z
return b},
a5:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a5(a+this.gaz(),b)},
br:["eN",function(){var z,y,x,w,v
z=this.y
if(z!=null){y=this.f
J.fV(z,J.k(y,this.r1?$.$get$p():this.x))
z=this.y
y=this.e
x=z.ge_()
w=this.Q
if(typeof x!=="number")return x.N()
v=$.$get$aw()
if(typeof v!=="number")return H.i(v)
if(typeof y!=="number")return y.n()
J.fU(z,y+(x-w)*v)
this.y.br()}}],
di:function(a){var z,y
z=J.m(a)
z.T(a)
z.say(a,this.fr)
y=z.cu(a,this.b).width
z.Y(a)
return y},
bw:function(a){var z,y,x
if(this.id){z=this.e
y=this.k1
x=this.k3
if(typeof y!=="number")return y.N()
if(typeof x!=="number")return H.i(x)
if(typeof z!=="number")return z.n()
this.e=z+(y-x)
x=this.f
y=this.k2
z=this.k4
if(typeof y!=="number")return y.N()
if(typeof z!=="number")return H.i(z)
this.f=J.k(x,y-z)
this.k3=this.k1
this.k4=this.k2}return this.id},
c_:function(a){var z,y,x,w,v,u
z=J.m(a)
z.T(a)
z.sap(a,this.dx)
z.say(a,this.fr)
z.scI(a,"left")
z.scJ(a,"middle")
y=this.b
x=this.e
w=$.$get$U()
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.i(w)
v=this.f
u=$.$get$p()
if(typeof u!=="number")return u.aC()
z.cr(a,y,x+w,J.k(v,u/2))
z.Y(a)},
c0:function(a){var z,y
z=J.m(a)
z.T(a)
this.ca(a)
z.sbM(a,this.dy)
y=$.$get$X()
if(typeof y!=="number")return H.i(y)
z.sct(a,0.5*y)
z.si7(a,"round")
z.bL(a)
z.Y(a)},
bZ:function(a){var z=J.m(a)
z.T(a)
this.ca(a)
z.sap(a,this.db)
z.cq(a)
z.sap(a,"rgba(0, 0, 0, "+H.h(Math.min(1,0.075*this.Q)))
z.cq(a)
z.Y(a)},
fo:function(a){var z,y,x,w,v
z=J.m(a)
z.T(a)
z.sct(a,5)
z.sbM(a,this.dy)
z.ax(a)
y=this.e
x=$.$get$U()
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
w=$.$get$aw()
v=this.gaV()
if(typeof w!=="number")return w.E()
z.b0(a,y+x+w*v,this.f)
this.cc(a,this.z==null&&this.go)
z.bL(a)
z.Y(a)},
fl:function(a){var z,y,x,w,v
z=J.m(a)
z.T(a)
z.sct(a,5)
z.sbM(a,this.dy)
z.ax(a)
y=this.e
x=this.r
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
w=$.$get$U()
if(typeof w!=="number")return H.i(w)
v=this.f
z.b0(a,y+x-w,J.k(v,this.r1?$.$get$p():this.x))
this.cb(a,this.y==null&&this.Q===0)
z.bL(a)
z.Y(a)},
fm:function(a){var z,y,x,w,v
z=this.r
for(y=this.cx,x=y.length-1;x>=0;--x){w=$.$get$U()
if(x>=y.length)return H.a(y,x)
v=J.dk(y[x])
if(typeof w!=="number")return w.n()
if(typeof v!=="number")return H.i(v)
if(typeof z!=="number")return z.N()
z-=w+v
if(x>=y.length)return H.a(y,x)
y[x].co(a,z)}},
fn:function(a){var z,y,x,w
for(z=this.cy,y=0;y<z.length;y=w){x=$.$get$p()
w=y+1
if(typeof x!=="number")return x.E()
z[y].hF(a,x*w)}},
ca:["eM",function(a){var z,y,x,w,v,u
z=J.m(a)
z.ax(a)
y=this.e
x=$.$get$U()
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
z.b0(a,y+x,this.f)
this.cc(a,this.z==null&&this.go)
y=this.Q===0
w=y&&this.z==null
this.dt(a,w,y&&this.y==null)
this.cb(a,this.y==null&&this.Q===0)
if(this.Q<=0)y=this.z!=null&&this.y!=null
else y=!0
if(y){y=this.e
w=this.f
z.B(a,y,J.k(w,this.r1?$.$get$p():this.x))
z.B(a,this.e,this.f)
y=this.e
if(typeof y!=="number")return y.n()
z.B(a,y+x,this.f)}else if(this.y!=null){y=this.e
w=this.f
z.B(a,y,J.k(w,this.r1?$.$get$p():this.x))
z.B(a,this.e,J.k(this.f,x))
y=this.e
w=this.f
if(typeof y!=="number")return y.n()
z.M(a,y,w,y+x,w)}else{y=this.z
w=this.e
v=this.f
if(y!=null){y=J.k(v,this.r1?$.$get$p():this.x)
v=this.e
u=this.f
z.M(a,w,y,v,J.F(J.k(u,this.r1?$.$get$p():this.x),x))
z.B(a,this.e,this.f)
y=this.e
if(typeof y!=="number")return y.n()
z.B(a,y+x,this.f)}else{y=J.k(v,this.r1?$.$get$p():this.x)
v=this.e
u=this.f
z.M(a,w,y,v,J.F(J.k(u,this.r1?$.$get$p():this.x),x))
z.B(a,this.e,J.k(this.f,x))
y=this.e
w=this.f
if(typeof y!=="number")return y.n()
z.M(a,y,w,y+x,w)}}z.cl(a)}],
dt:function(a,b,c){var z,y,x,w,v,u,t,s
z=$.$get$U()
y=this.e
x=this.r
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
if(typeof z!=="number")return H.i(z)
w=J.m(a)
w.B(a,y+x-z,this.f)
if(b&&c){y=this.e
x=this.r
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
x=y+x
y=this.f
w.M(a,x,y,x,J.k(y,z))
y=this.e
x=this.r
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
v=this.f
w.B(a,y+x,J.F(J.k(v,this.r1?$.$get$p():this.x),z))
y=this.e
x=this.r
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
v=this.f
v=J.k(v,this.r1?$.$get$p():this.x)
u=this.e
t=this.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=this.f
w.M(a,y+x,v,u+t-z,J.k(s,this.r1?$.$get$p():this.x))}else if(c){y=this.e
x=this.r
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
w.B(a,y+x,this.f)
x=this.e
y=this.r
if(typeof x!=="number")return x.n()
if(typeof y!=="number")return H.i(y)
v=this.f
w.B(a,x+y,J.F(J.k(v,this.r1?$.$get$p():this.x),z))
y=this.e
x=this.r
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
v=this.f
v=J.k(v,this.r1?$.$get$p():this.x)
u=this.e
t=this.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.i(t)
s=this.f
w.M(a,y+x,v,u+t-z,J.k(s,this.r1?$.$get$p():this.x))}else{y=this.e
x=this.r
v=this.f
if(b){if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
y+=x
w.M(a,y,v,y,J.k(v,z))
v=this.e
y=this.r
if(typeof v!=="number")return v.n()
if(typeof y!=="number")return H.i(y)
x=this.f
w.B(a,v+y,J.k(x,this.r1?$.$get$p():this.x))
y=this.e
x=this.r
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
v=this.f
w.B(a,y+x-z,J.k(v,this.r1?$.$get$p():this.x))}else{if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
w.B(a,y+x,v)
y=this.e
x=this.r
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
v=this.f
w.B(a,y+x,J.k(v,this.r1?$.$get$p():this.x))
y=this.e
x=this.r
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
v=this.f
w.B(a,y+x-z,J.k(v,this.r1?$.$get$p():this.x))}}},
cc:function(a,b){var z,y,x,w,v
z=$.$get$U()
y=this.e
if(typeof z!=="number")return z.E()
if(typeof y!=="number")return y.n()
x=$.$get$aw()
w=this.gaV()
if(typeof x!=="number")return x.E()
v=y+z*2+x*w
if(b){y=J.m(a)
y.B(a,v,this.f)
x=z/2
w=v+z
y.dM(a,v,J.k(this.f,x),w,J.k(this.f,x),w,this.f)}y=this.e
x=this.r
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
J.dl(a,y+x-z,this.f)},
cb:function(a,b){var z,y,x,w,v,u,t
z=$.$get$U()
y=this.e
if(typeof z!=="number")return z.E()
if(typeof y!=="number")return y.n()
x=y+z*2
if(!this.r1){y=$.$get$aw()
w=this.gaz()
if(typeof y!=="number")return y.E()
x+=y*w}if(b){y=x+z
w=this.f
v=J.m(a)
v.B(a,y,J.k(w,this.r1?$.$get$p():this.x))
w=this.f
u=z/2
w=J.k(J.k(w,this.r1?$.$get$p():this.x),u)
t=this.f
u=J.k(J.k(t,this.r1?$.$get$p():this.x),u)
t=this.f
v.dM(a,y,w,x,u,x,J.k(t,this.r1?$.$get$p():this.x))}y=this.f
J.dl(a,x-z,J.k(y,this.r1?$.$get$p():this.x))},
bz:function(a){var z,y,x,w,v,u
z=a.c
y=a.d
x=this.f
w=J.k(x,this.r1?$.$get$p():this.x)
v=this.e
if(typeof v!=="number")return H.i(v)
if(z>=v){if(typeof x!=="number")return H.i(x)
if(y>=x){u=this.r
if(typeof u!=="number")return H.i(u)
if(z<=v+u){if(typeof w!=="number")return H.i(w)
v=y<=w}else v=!1}else v=!1}else v=!1
return v},
af:function(a){var z,y,x
this.id=!0
z=a.c
this.k1=z
y=a.d
this.k2=y
this.k3=z
this.k4=y
z=this.z
if(z!=null){J.dp(z,null)
this.z=null}for(z=this.fy,x=this;x!=null;){z.fT(x)
z.bQ(x)
x=x.gbC()}return this},
b9:function(a){var z
this.id=!1
this.r1=!1
this.r2=!1
z=this.fy
z.h9(this)
if(z.h5(this))U.jA("click")
z.ef()},
b7:function(a){this.k1=a.c
this.k2=a.d},
b8:function(a){},
bd:function(a,b){var z=$.ad
$.ad=z+1
this.a=z
this.r=$.$get$ac()
this.x=$.$get$p()},
v:{
h1:function(a,b){var z,y,x
z=[U.aq]
y=H.x([],z)
z=H.x([],z)
x=$.$get$X()
if(typeof x!=="number")return H.i(x)
x=new U.bt(null,b,null,null,0,0,0,0,null,null,0,null,y,z,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.h(14*x)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
x.bd(a,b)
return x},
ds:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=J.D(b)
y=z.h(b,"action")
x=y==null?"":J.H(y)
if(!!J.n(z.h(b,"clauses")).$isb){y=H.x([],[U.aU])
w=[U.aq]
v=H.x([],w)
u=H.x([],w)
t=$.$get$X()
if(typeof t!=="number")return H.i(t)
t=14*t
s=new U.br(y,null,null,null,x,null,null,0,0,0,0,null,null,0,null,v,u,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.h(t)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
u=$.ad
$.ad=u+1
s.a=u
u=$.$get$ac()
s.r=u
v=$.$get$p()
s.x=v
t=new U.cs(null,null,null,"end-"+H.h(x),null,null,0,0,0,0,null,null,0,null,H.x([],w),H.x([],w),"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.h(t)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
w=$.ad
$.ad=w+1
t.a=w
t.r=u
t.x=v
t.go=!1
if(typeof v!=="number")return v.aC()
t.x=v/2
s.x1=t
t.ry=s
y.push(t)
s.rx=s.x1}else{y=[U.aq]
if(J.V(z.h(b,"type"),"clause")){w=H.x([],y)
y=H.x([],y)
v=$.$get$X()
if(typeof v!=="number")return H.i(v)
s=new U.aU(null,null,null,x,null,null,0,0,0,0,null,null,0,null,w,y,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.h(14*v)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
v=$.ad
$.ad=v+1
s.a=v
s.r=$.$get$ac()
s.x=$.$get$p()
s.go=!1}else{w=H.x([],y)
y=H.x([],y)
v=$.$get$X()
if(typeof v!=="number")return H.i(v)
s=new U.bt(null,x,null,null,0,0,0,0,null,null,0,null,w,y,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.h(14*v)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
v=$.ad
$.ad=v+1
s.a=v
s.r=$.$get$ac()
s.x=$.$get$p()}}y=z.h(b,"type")
s.c=y==null?"":J.H(y)
y=z.h(b,"format")
s.d=y==null?null:J.H(y)
y=z.h(b,"blockColor")
w=s.db
s.db=y==null?w:J.H(y)
y=z.h(b,"textColor")
w=s.dx
s.dx=y==null?w:J.H(y)
y=z.h(b,"borderColor")
w=s.dy
s.dy=y==null?w:J.H(y)
y=z.h(b,"font")
w=s.fr
s.fr=y==null?w:J.H(y)
s.go=!U.bP(z.h(b,"start"),!1)
s.fx=U.bP(z.h(b,"required"),s.fx)
if(!!J.n(z.h(b,"params")).$isb)for(y=J.S(z.h(b,"params")),w=s.cx;y.u();)w.push(U.cJ(s,y.gw()))
if(!!J.n(z.h(b,"properties")).$isb)for(y=J.S(z.h(b,"properties")),w=s.cy;y.u();)w.push(U.cJ(s,y.gw()))
y=s.cy.length
w=$.$get$p()
if(typeof w!=="number")return H.i(w)
s.x=(1+y)*w
if(!!s.$isbr&&!!J.n(z.h(b,"clauses")).$isb)for(z=J.S(z.h(b,"clauses"));z.u();){r=z.gw()
J.bQ(r,"type","clause")
q=H.fq(U.ds(a,r),"$isaU")
H.fq(s,"$isbr").cY(q)}return s}}},
dz:{"^":"bt;cv:rx@",
gbC:function(){var z=this.y
if(z!=null)return z
else{z=this.rx
if(z!=null)return z
else{z=this.ch
if(z!=null)return z.rx
else return}}},
a5:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a5(a+this.gaz(),this)},
fL:function(a){var z,y,x,w,v,u,t
z=$.$get$U()
if(this.rx!=null){y=this.e
x=$.$get$aw()
if(typeof y!=="number")return y.n()
if(typeof x!=="number")return H.i(x)
w=this.f
w=J.k(w,this.r1?$.$get$p():this.x)
v=this.e
if(typeof v!=="number")return v.n()
u=this.f
t=J.m(a)
t.M(a,y+x,w,v+x,J.k(J.k(u,this.r1?$.$get$p():this.x),z))
y=this.y
w=this.e
v=this.rx
if(y!=null){if(typeof w!=="number")return w.n()
t.B(a,w+x,J.bq(v))
y=this.e
if(typeof y!=="number")return y.n()
if(typeof z!=="number")return H.i(z)
t.B(a,y+x+z,J.bq(this.rx))}else{if(typeof w!=="number")return w.n()
t.B(a,w+x,J.F(J.bq(v),z))
y=this.e
if(typeof y!=="number")return y.n()
w=J.bq(this.rx)
v=this.e
if(typeof v!=="number")return v.n()
if(typeof z!=="number")return H.i(z)
t.M(a,y+x,w,v+x+z,J.bq(this.rx))}}}},
aU:{"^":"dz;hi:ry?,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2",
gaV:function(){return 1},
gaz:function(){return 1},
ge2:function(){return!1},
ac:function(a){var z,y,x,w,v,u
z=this.fy
y=this.b
x=[U.aq]
w=H.x([],x)
x=H.x([],x)
v=$.$get$X()
if(typeof v!=="number")return H.i(v)
u=new U.aU(null,null,null,y,null,null,0,0,0,0,null,null,0,null,w,x,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.h(14*v)+"px 'Poppins', sans-serif",!1,z,!0,!1,null,null,null,null,!1,!0)
u.bd(z,y)
u.go=!1
this.bY(0,u)
return u},
a0:function(a){var z,y
z=this.Z()
z.j(0,"children",[])
J.aS(a,z)
y=this.y
if(y!=null)y.a0(z.h(0,"children"))},
c0:function(a){},
bZ:function(a){},
af:function(a){return this.ry.af(a)}},
cs:{"^":"aU;ry,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2",
gaV:function(){return 1},
gaz:function(){return 0},
a5:function(a,b){var z
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a5(a,b)},
a0:function(a){},
c_:function(a){}},
br:{"^":"dz;ry,x1,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2",
gaV:function(){return 0},
gaz:function(){return 1},
ac:function(a){var z,y,x,w,v,u
z=U.h0(this.fy,this.b)
this.bY(0,z)
for(y=this.ry,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=y[w]
u=J.n(v)
if(!u.$iscs)z.cY(u.ac(v))}return z},
gaO:function(){var z,y
z=this.x1
y=z.y
return y!=null?y.gaO():z},
a0:function(a){var z,y,x,w
z=this.Z()
z.j(0,"children",[])
z.j(0,"clauses",[])
J.aS(a,z)
y=this.y
if(y!=null)y.a0(z.h(0,"children"))
for(y=this.ry,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)y[w].a0(z.h(0,"clauses"))
y=this.x1.y
if(y!=null)y.a0(a)},
a5:function(a,b){var z,y,x
this.Q=a
this.ch=b
z=this.y
if(z!=null)z.a5(a+1,this)
for(z=this.ry,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x)z[x].a5(a,b)},
br:function(){var z,y,x,w,v,u,t,s
this.eN()
for(z=this.ry,y=z.length,x=this,w=0;w<z.length;z.length===y||(0,H.E)(z),++w,x=v){v=z[w]
u=J.m(v)
t=J.m(x)
if(x.gaU()){s=t.gS(x).gaO()
u.sq(v,this.e)
t=s.f
u.st(v,J.k(t,s.r1?$.$get$p():s.x))}else{u.sq(v,this.e)
u.st(v,J.k(J.k(t.gt(x),t.gp(x)),$.$get$p()))}v.br()}},
cY:function(a){var z,y,x,w
a.shi(this)
z=this.ry
C.a.J(z,this.x1)
z.push(a)
z.push(this.x1)
for(y=0;x=z.length,y<x-1;y=w){w=y+1
z[y].scv(z[w])}if(0>=x)return H.a(z,0)
this.rx=z[0]},
ca:function(a){var z,y,x,w,v,u,t,s,r,q
if(this.r1){this.eM(a)
return}z=$.$get$U()
y=J.m(a)
y.ax(a)
x=this.e
if(typeof x!=="number")return x.n()
if(typeof z!=="number")return H.i(z)
y.b0(a,x+z,this.f)
w=this.z==null&&this.go
for(v=this;v!=null;){if(!v.gaU())u=v.gcv()!=null||this.Q===0
else u=!1
v.cc(a,w)
v.dt(a,w,u)
v.cb(a,u)
v.fL(a)
w=!v.gaU()
v=v.gcv()}x=this.x1
t=x.y!=null||this.Q>0
s=x.f
r=this.e
if(t)y.B(a,r,J.k(s,x.r1?$.$get$p():x.x))
else{if(typeof r!=="number")return r.n()
y.B(a,r+z,J.k(s,x.r1?$.$get$p():x.x))
x=this.e
t=this.x1
s=t.f
t=J.k(s,t.r1?$.$get$p():t.x)
s=this.e
r=this.x1
q=r.f
y.M(a,x,t,s,J.F(J.k(q,r.r1?$.$get$p():r.x),z))}x=this.z
t=this.e
s=this.f
if(x!=null){y.B(a,t,s)
x=this.e
if(typeof x!=="number")return x.n()
y.B(a,x+z,this.f)}else{y.B(a,t,J.k(s,z))
x=this.e
t=this.f
if(typeof x!=="number")return x.n()
y.M(a,x,t,x+z,t)}y.cl(a)},
f_:function(a,b){var z,y,x,w
z="end-"+H.h(b)
y=[U.aq]
x=H.x([],y)
y=H.x([],y)
w=$.$get$X()
if(typeof w!=="number")return H.i(w)
w=new U.cs(null,null,null,z,null,null,0,0,0,0,null,null,0,null,x,y,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.h(14*w)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
w.bd(a,z)
w.go=!1
z=$.$get$p()
if(typeof z!=="number")return z.aC()
w.x=z/2
this.x1=w
w.ry=this
this.ry.push(w)
this.rx=this.x1},
v:{
h0:function(a,b){var z,y,x,w
z=H.x([],[U.aU])
y=[U.aq]
x=H.x([],y)
y=H.x([],y)
w=$.$get$X()
if(typeof w!=="number")return H.i(w)
w=new U.br(z,null,null,null,b,null,null,0,0,0,0,null,null,0,null,x,y,"#6b9bc3","white","rgba(255, 255, 255, 0.6)","400 "+H.h(14*w)+"px 'Poppins', sans-serif",!1,a,!0,!1,null,null,null,null,!1,!0)
w.bd(a,b)
w.f_(a,b)
return w}}},
cp:{"^":"f;",
aJ:function(a,b,c){var z,y
for(z=this.a,y=0;y<b;++y)a.l+=z
a.l+=c+"\n"},
aI:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=J.D(b)
y=z.h(b,"format")
x=z.h(b,"params")
w=z.h(b,"properties")
v=J.n(x)
u=!!v.$isb?v.gi(x):0
t=J.n(w)
s=!!t.$isb?t.gi(w):0
if(typeof y!=="string"){y=H.h(z.h(b,"action"))
for(r=0;r<u;++r)y+=" {"+r+"}"
for(r=0;r<s;++r)y+=" {P"+r+"}"}for(r=0;r<u;++r){z="{"+r+"}"
q=J.al(v.h(x,r),"value")
q=q==null?"":J.H(q)
if(typeof q!=="string")H.C(H.M(q))
y=H.fz(y,z,q)}for(r=0;r<s;++r){z="{P"+r+"}"
v=J.al(t.h(w,r),"value")
v=v==null?"":J.H(v)
if(typeof v!=="string")H.C(H.M(v))
y=H.fz(y,z,v)}this.aJ(a,c,y)}},
ja:{"^":"cp;a",
dh:function(a){var z,y
z=new P.aY("")
for(y=J.S(a.h(0,"chains"));y.u();){this.ak(z,y.gw(),0)
z.l+="\n"}y=z.l
return y.charCodeAt(0)==0?y:y},
ak:function(a,b,c){var z,y,x,w,v,u
for(z=J.S(b),y=c+1;z.u();){x=z.gw()
this.aI(a,x,c)
w=J.D(x)
if(!!J.n(w.h(x,"children")).$isb)this.ak(a,w.h(x,"children"),y)
if(!!J.n(w.h(x,"clauses")).$isb)for(w=J.S(w.h(x,"clauses"));w.u();){v=w.gw()
this.aI(a,v,c)
u=J.D(v)
if(!!J.n(u.h(v,"children")).$isb)this.ak(a,u.h(v,"children"),y)}}}},
iZ:{"^":"cp;a",
dh:function(a){var z,y,x,w
z=new P.aY("")
z.l="; --- NETTANGO BEGIN ---\n"
for(y=J.S(a.h(0,"chains"));y.u();){x=y.gw()
w=J.D(x)
if(J.at(w.gi(x),0)&&J.V(J.al(w.h(x,0),"type"),"nlogo:procedure")){this.aI(z,w.aA(x,0),0)
this.ak(z,x,1)
w=z.l+="end\n"
z.l=w+"\n"}}y=z.l+="; --- NETTANGO END ---\n"
return y.charCodeAt(0)==0?y:y},
ak:function(a,b,c){var z,y,x,w,v,u
for(z=J.S(b),y=c+1;z.u();){x=z.gw()
this.aI(a,x,c)
w=J.D(x)
if(!!J.n(w.h(x,"children")).$isb){this.aJ(a,c,"[")
this.ak(a,w.h(x,"children"),y)
this.aJ(a,c,"]")}if(!!J.n(w.h(x,"clauses")).$isb)for(w=J.S(w.h(x,"clauses"));w.u();){v=w.gw()
this.aI(a,v,c)
u=J.D(v)
if(!!J.n(u.h(v,"children")).$isb){this.aJ(a,c,"[")
this.ak(a,u.h(v,"children"),y)
this.aJ(a,c,"]")}}}}},
h2:{"^":"f;a,b,c,m:d>",
gq:function(a){return J.F(this.a.x,this.d)},
gt:function(a){return 0},
gp:function(a){return this.a.y},
bw:function(a){return!1},
i4:function(a){var z
if(!a.gdn())if(!a.gdH()){z=J.m(a)
z=J.dc(J.k(z.gq(a),J.o(z.gm(a),0.75)),J.F(this.a.x,this.d))}else z=!1
else z=!1
return z},
bs:function(a){var z,y,x,w,v,u,t,s
z=$.$get$ac()
if(typeof z!=="number")return z.E()
this.d=z*1.5
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.E)(z),++x){w=z[x]
v=this.d
u=w.a.di(a)
t=$.$get$U()
if(typeof t!=="number")return t.E()
if(typeof u!=="number")return u.n()
s=$.$get$bT()
if(typeof s!=="number")return s.E()
this.d=Math.max(v,u+t*2+s*2)}},
co:function(a,b){var z,y,x,w,v,u,t,s
this.bs(a)
z=J.m(a)
z.T(a)
z.sap(a,this.c)
y=this.a
z.dT(a,J.F(y.x,this.d),0,this.d,y.y)
if(b)z.dT(a,J.F(y.x,this.d),0,this.d,y.y)
y=J.F(y.x,this.d)
x=$.$get$bT()
if(typeof x!=="number")return H.i(x)
w=y+x
x=$.$get$p()
if(typeof x!=="number")return x.aC()
v=0+x/2
for(y=this.b,u=y.length,t=0;t<y.length;y.length===u||(0,H.E)(y),++t){s=y[t]
s.b=w
s.c=v
s.hE(a)
v+=x*1.5}z.Y(a)}},
ek:{"^":"f;a,q:b*,t:c*,d,e",
e1:function(){var z,y,x
z=this.e
y=J.ab(z)
x=y.N(z,this.d.bH(this.a.b))
return y.a8(z,0)||J.at(x,0)},
gm:function(a){return this.a.r},
gp:function(a){var z=this.a
return z.r1?$.$get$p():z.x},
hE:function(a){var z,y
z=this.a
J.F(this.e,this.d.bH(z.b))
y=J.m(a)
y.T(a)
if(!this.e1())y.sez(a,0.3)
z.e=this.b
z.f=this.c
z.cd(a,$.$get$ac())
z.bZ(a)
z.c_(a)
z.c0(a)
y.Y(a)},
bz:function(a){return this.a.bz(a)},
af:function(a){var z,y,x,w,v
if(this.e1()){z=this.a
y=z.ac(0)
x=z.e
if(typeof x!=="number")return x.N()
y.e=x-5
y.f=J.F(z.f,5)
y.r2=!0
z=this.d
z.bQ(y)
if(!!y.$isbr)for(x=y.ry,w=x.length,v=0;v<x.length;x.length===w||(0,H.E)(x),++v)z.bQ(x[v])
return y.af(a)}return this},
b9:function(a){},
b7:function(a){},
b8:function(a){}},
aq:{"^":"f;a,b,c,d,e,f,r,x,y,m:z>,p:Q>,ch",
gG:function(a){var z=this.c
return z==null?"":J.H(z)},
sG:function(a,b){var z=b==null?"":J.H(b)
this.c=z
return z},
gbb:function(a){return H.h(J.H(this.c))+H.h(this.r)},
by:function(a,b){return U.cJ(b,this.Z())},
Z:["cW",function(){return P.aC(["type",this.e,"name",this.f,"unit",this.r,"value",this.gG(this),"default",this.d])}],
bs:function(a){var z,y,x
z=$.$get$U()
if(typeof z!=="number")return z.E()
this.z=z*2
z=J.m(a)
z.T(a)
z.say(a,this.b.fr)
y=this.z
x=z.cu(a,this.gbb(this)).width
if(typeof x!=="number")return H.i(x)
this.z=y+x
z.Y(a)},
fW:function(a){var z,y,x,w,v
this.bs(a)
z=this.z
y=J.m(a)
y.T(a)
y.say(a,this.b.fr)
x=$.$get$aw()
w=y.cu(a,"\u25b8    "+H.h(this.f)).width
if(typeof x!=="number")return x.n()
if(typeof w!=="number")return H.i(w)
v=$.$get$U()
if(typeof v!=="number")return v.E()
y.Y(a)
return z+(x+w+v*2)},
dS:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o
this.x=b
this.y=c
z=this.b
y=J.m(a)
y.say(a,z.fr)
y.scI(a,"center")
y.scJ(a,"middle")
x=z.e
w=this.x
if(typeof x!=="number")return x.n()
v=x+w
w=J.k(z.f,this.y)
x=$.$get$p()
if(typeof x!=="number")return x.aC()
u=J.F(J.k(w,x/2),this.Q/2)
t=this.z
s=this.Q
y.ax(a)
x=s/2
y.ax(a)
w=v+x
y.b0(a,w,u)
r=v+t
q=r-x
y.B(a,q,u)
p=u+x
y.M(a,r,u,r,p)
o=u+s
x=o-x
y.B(a,r,x)
y.M(a,r,o,q,o)
y.B(a,w,o)
y.M(a,v,o,v,x)
y.B(a,v,p)
y.M(a,v,u,w,u)
y.cl(a)
y.sap(a,this.ch?z.db:z.dx)
y.cq(a)
y.sap(a,this.ch?z.dx:z.db)
y.cr(a,this.gbb(this),v+t/2,p)},
co:function(a,b){return this.dS(a,b,0)},
hF:function(a,b){var z,y,x,w,v,u,t,s
z=this.b
y=z.r
x=$.$get$U()
w=this.z
if(typeof x!=="number")return x.n()
if(typeof y!=="number")return y.N()
v=J.k(z.f,b)
u=$.$get$p()
if(typeof u!=="number")return u.aC()
t=J.k(v,u/2)
u=z.e
v=$.$get$aw()
if(typeof u!=="number")return u.n()
if(typeof v!=="number")return H.i(v)
s=J.m(a)
s.sap(a,z.dx)
s.say(a,z.fr)
s.scI(a,"left")
s.scJ(a,"middle")
s.cr(a,"\u25b8    "+H.h(this.f),u+v,t)
this.dS(a,y-(x+w),b)},
bz:function(a){var z,y,x,w
z=a.c
y=this.b
x=y.e
w=this.x
if(typeof x!=="number")return x.n()
if(z>=x+w){z=a.d
x=J.k(y.f,this.y)
if(typeof x!=="number")return H.i(x)
if(z>=x){z=a.c
x=y.e
w=this.x
if(typeof x!=="number")return x.n()
if(z<=x+w+this.z){z=a.d
y=J.k(J.k(y.f,this.y),$.$get$p())
if(typeof y!=="number")return H.i(y)
y=z<=y
z=y}else z=!1}else z=!1}else z=!1
return z},
b9:function(a){this.ch=!1
this.h4()
this.b.fy.ad()},
af:function(a){this.ch=!0
this.b.fy.ad()
return this},
b7:function(a){},
b8:function(a){},
h4:function(){var z,y,x,w,v,u,t,s
z=document
y=z.createElement("div")
y.className="backdrop"
x=this.bg()
C.f.hZ(y,"beforeend",'      <div class="nt-param-dialog">\n        <div class="nt-param-table">\n          <div class="nt-param-row">\n            <div class="nt-param-name">'+H.h(this.f)+'</div>\n            <div class="nt-param-value">'+x+'</div>\n          </div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>',null,null)
w=z.querySelector("#"+H.h(this.b.fy.f)).parentElement
if(w==null)return
w.appendChild(y)
v=z.querySelector("#nt-param-label-"+this.a)
u=z.querySelector("#nt-param-"+this.a)
t=[null]
s=[W.aE]
new W.eO(new W.eR(z.querySelectorAll(".nt-param-confirm"),t),!1,"click",s).e3(new U.j6(this,y,u))
new W.eO(new W.eR(z.querySelectorAll(".nt-param-cancel"),t),!1,"click",s).e3(new U.j7(y))
y.classList.add("show")
if(u!=null){z=J.m(u)
z.dU(u)
if(v!=null){t=z.ge8(u)
W.a7(t.a,t.b,new U.j8(v,u),!1,H.P(t,0))
z=z.ge9(u)
W.a7(z.a,z.b,new U.j9(v,u),!1,H.P(z,0))}}},
bg:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="text" value="'+this.gbb(this)+'">\n      <span class="nt-param-unit">'+H.h(this.r)+"</span>\n    "},
aD:function(a,b){var z,y
z=$.e8
$.e8=z+1
this.a=z
z=J.D(b)
y=z.h(b,"type")
this.e=y==null?"number":J.H(y)
y=z.h(b,"name")
this.f=y==null?"":J.H(y)
y=z.h(b,"unit")
this.r=y==null?"":J.H(y)
z=z.h(b,"default")
this.d=z
this.sG(0,z)},
v:{
j5:function(a,b){var z=$.$get$p()
if(typeof z!=="number")return z.E()
z=new U.aq(null,a,null,null,"int","","",0,0,28,z*0.6,!1)
z.aD(a,b)
return z},
cJ:function(a,b){var z,y
z=J.D(b)
y=z.h(b,"type")
switch(y==null?"number":J.H(y)){case"int":y=$.$get$p()
if(typeof y!=="number")return y.E()
y=new U.hF(!1,1,null,a,null,null,"int","","",0,0,28,y*0.6,!1)
y.aD(a,b)
y.cx=U.bP(z.h(b,"random"),!1)
y.cy=U.as(z.h(b,"step"),y.cy)
y.cy=1
return y
case"num":case"number":y=$.$get$p()
if(typeof y!=="number")return y.E()
y=new U.cI(!1,1,null,a,null,null,"int","","",0,0,28,y*0.6,!1)
y.aD(a,b)
y.cx=U.bP(z.h(b,"random"),!1)
y.cy=U.as(z.h(b,"step"),y.cy)
return y
case"range":y=$.$get$p()
if(typeof y!=="number")return y.E()
y=new U.jn(0,10,!1,1,null,a,null,null,"int","","",0,0,28,y*0.6,!1)
y.aD(a,b)
y.cx=U.bP(z.h(b,"random"),!1)
y.cy=U.as(z.h(b,"step"),y.cy)
y.db=U.as(z.h(b,"min"),y.db)
y.dx=U.as(z.h(b,"max"),y.dx)
return y
case"select":return U.ej(a,b)
case"text":default:return U.j5(a,b)}}}},
j6:{"^":"j:0;a,b,c",
$1:[function(a){var z=this.c
if(z!=null)this.a.sG(0,J.cl(z))
C.f.cC(this.b)
z=this.a.b.fy
z.ad()
z.ef()},null,null,2,0,null,2,"call"]},
j7:{"^":"j:0;a",
$1:[function(a){return C.f.cC(this.a)},null,null,2,0,null,2,"call"]},
j8:{"^":"j:0;a,b",
$1:function(a){J.dn(this.a,J.cl(this.b))}},
j9:{"^":"j:0;a,b",
$1:function(a){J.dn(this.a,J.cl(this.b))}},
cI:{"^":"aq;cx,cy,a,b,c,d,e,f,r,x,y,z,Q,ch",
Z:["eT",function(){var z=this.cW()
z.j(0,"random",this.cx)
z.j(0,"step",this.cy)
return z}],
gG:function(a){return U.as(this.c,0)},
sG:function(a,b){var z=U.as(b,0)
this.c=z
return z},
gbb:function(a){var z=J.fX(H.mc(this.gG(this)),1)
if(C.d.hJ(z,".0"))z=C.d.ai(z,0,z.length-2)
return z+H.h(this.r)},
bg:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="number" step="'+H.h(this.cy)+'" value="'+H.h(this.gG(this))+'">\n      <span class="nt-param-unit">'+H.h(this.r)+"</span>\n    "}},
hF:{"^":"cI;cx,cy,a,b,c,d,e,f,r,x,y,z,Q,ch",
gG:function(a){return U.db(this.c,0)},
sG:function(a,b){var z=U.db(b,0)
this.c=z
return z}},
jn:{"^":"cI;db,dx,cx,cy,a,b,c,d,e,f,r,x,y,z,Q,ch",
Z:function(){var z=this.eT()
z.j(0,"min",this.db)
z.j(0,"max",this.dx)
return z},
bg:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="range" value="'+H.h(U.as(this.c,0))+'" min="'+H.h(this.db)+'" max="'+H.h(this.dx)+'" step="'+H.h(this.cy)+'">\n      <label class="nt-param-label" id="nt-param-label-'+this.a+'" for="nt-param-'+this.a+'">'+H.h(U.as(this.c,0))+'</label>\n      <span class="nt-param-unit">'+H.h(this.r)+"</span>\n    "}},
js:{"^":"aq;cx,a,b,c,d,e,f,r,x,y,z,Q,ch",
gbb:function(a){return H.h(J.H(this.c))+H.h(this.r)+" \u25be"},
by:function(a,b){return U.ej(b,this.Z())},
Z:function(){var z=this.cW()
z.j(0,"values",this.cx)
return z},
bg:function(){var z,y,x,w,v
z="<select id='nt-param-"+this.a+"'>"
for(y=J.S(this.cx);y.u();){x=y.gw()
w="<option value='"+H.h(x)+"' "
v=this.c
z+=w+(J.V(x,v==null?"":J.H(v))?"selected":"")+">"+H.h(x)+"</option>"}return z+"</select>"},
f3:function(a,b){var z=J.D(b)
if(!!J.n(z.h(b,"values")).$isb&&J.at(J.am(z.h(b,"values")),0)){z=z.h(b,"values")
this.cx=z
this.c=J.al(z,0)}},
v:{
ej:function(a,b){var z=$.$get$p()
if(typeof z!=="number")return z.E()
z=new U.js([],null,a,null,null,"int","","",0,0,28,z*0.6,!1)
z.aD(a,b)
z.f3(a,b)
return z}}},
dx:{"^":"eu;f,r,m:x>,p:y>,z,Q,ch,a,b,c,d,e",
en:function(){if(this.bw(0))this.ad()
C.L.ghg(window).cK(new U.hd(this))},
ef:function(){var z
this.ad()
try{J.al($.$get$d5(),"NetTango").bx("_relayCallback",[this.f])}catch(z){H.J(z)
P.bO("Unable to relay program changed event to Javascript")}},
cp:function(){var z,y,x,w,v,u,t,s
z=P.aC(["chains",[]])
for(y=this.r,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=y[w]
if(v.ge2())J.aS(z.h(0,"chains"),v.cp())}for(y=this.z.b,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){u=y[w].a
if(u.fx)if(this.bH(u.b)===0){t=z.h(0,"chains")
s=[]
u.a0(s)
J.aS(t,s)}}return z},
bQ:function(a){var z,y,x,w
this.r.push(a)
z=this.a
z.push(a)
for(y=a.ged(),x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)z.push(y[w])
for(y=a.geg(),x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)z.push(y[w])},
fT:function(a){var z,y,x,w
C.a.J(this.r,a)
z=this.a
C.a.J(z,a)
for(y=a.ged(),x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.J(z,y[w])
for(y=a.geg(),x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w)C.a.J(z,y[w])
this.ad()},
bH:function(a){var z,y,x,w
for(z=this.r,y=z.length,x=0,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(J.V(J.fH(z[w]),a))++x
return x},
h5:function(a){var z,y,x,w
z=this.dg(a)
if(z!=null){y=J.m(z)
x=y.gS(z)
y.sS(z,a)
a.z=z
if(x!=null){w=a.gaO()
x.sbF(w)
w.y=x}return!0}z=this.df(a)
if(z!=null){z.sbF(a)
a.y=z
return!0}return!1},
h9:function(a){var z,y
if(this.z.i4(a))for(z=this.r,y=this.a;a!=null;){C.a.J(z,a)
C.a.J(y,a)
a=a.gbC()}},
dg:function(a){var z,y,x,w,v,u,t,s,r
if(a.gbF()==null&&a.gdY())for(z=this.r,y=z.length,x=J.m(a),w=0;w<z.length;z.length===y||(0,H.E)(z),++w){v=z[w]
u=J.n(v)
if(!u.C(v,a))if(J.bo(x.gq(a),J.k(u.gq(v),u.gm(v)))&&J.at(J.k(x.gq(a),x.gm(a)),u.gq(v))){t=u.gt(v)
s=J.k(u.gt(v),u.gp(v))
r=J.k(s,J.o(u.gp(v),0.8))
if(v.gaU()&&J.bo(a.gb6(),s)&&J.at(a.gb6(),t))return v
else if(!v.gaU()&&J.at(a.gb6(),t)&&J.bo(a.gb6(),r))return v}}return},
df:function(a){var z,y,x,w,v,u
z=J.m(a)
if(z.gS(a)==null)for(y=this.r,x=y.length,w=0;w<y.length;y.length===x||(0,H.E)(y),++w){v=y[w]
u=J.n(v)
if(!u.C(v,a)&&v.gbF()==null&&v.gdY())if(J.bo(z.gq(a),J.k(u.gq(v),u.gm(v)))&&J.at(J.k(z.gq(a),z.gm(a)),u.gq(v)))if(Math.abs(J.F(v.gb6(),a.ghk()))<20)return v}return},
bw:function(a){var z,y,x,w
this.z.toString
for(z=this.r,y=z.length,x=!1,w=0;w<z.length;z.length===y||(0,H.E)(z),++w)if(J.fE(z[w]))x=!0
return x},
ad:function(){var z,y,x,w,v,u,t,s,r
J.fS(this.Q)
J.fF(this.Q,0,0,this.x,this.y)
z=H.x([],[U.bt])
for(y=this.r,x=y.length,w=!1,v=0;v<y.length;y.length===x||(0,H.E)(y),++v){u=y[v]
if(!u.ghX()&&!(u instanceof U.aU)){u.a5(0,null)
u.br()
u.cd(this.Q,$.$get$ac())}if(u.gdd())z.push(u)
t=this.z
t.toString
if(!u.gdn())if(!u.gdH()){s=J.m(u)
t=J.dc(J.k(s.gq(u),J.o(s.gm(u),0.75)),J.F(t.a.x,t.d))}else t=!1
else t=!1
if(t)w=!0}this.z.co(this.Q,w)
for(x=y.length,v=0;v<y.length;y.length===x||(0,H.E)(y),++v){u=y[v]
if(u.gdd()){r=this.dg(u)
if(r!=null)r.fl(this.Q)
else{r=this.df(u)
if(r!=null)r.fo(this.Q)}}u.bZ(this.Q)
u.c_(this.Q)
u.fm(this.Q)
u.fn(this.Q)
u.c0(this.Q)}J.fR(this.Q)},
f0:function(a,b){var z,y,x,w,v,u,t,s
z=this.f
y="#"+H.h(z)
x=document.querySelector(y)
if(x==null)throw H.c("No canvas element with ID "+H.h(z)+" found.")
z=J.m(x)
this.Q=z.ex(x,"2d")
y=x.style
w=H.h(z.gm(x))+"px"
y.width=w
y=x.style
w=H.h(z.gp(x))+"px"
y.height=w
y=z.gm(x)
w=$.$get$X()
this.x=J.o(y,w)
this.y=J.o(z.gp(x),w)
z.sm(x,this.x)
z.sp(x,this.y)
if(typeof w!=="number")return H.i(w)
z=this.c
y=new U.c0([1,0,0,0,1,0,0,0,1])
y.a=[1/w,0,0,0,1/w,0,0,0,1]
z.ib(0,y)
this.d=this.c.i2()
y=this.ch
y.il(x)
y.c.push(this)
y=H.x([],[U.ek])
z=$.$get$ac()
w=$.$get$bT()
if(typeof w!=="number")return w.E()
if(typeof z!=="number")return z.n()
this.z=new U.h2(this,y,"rgba(0,0,0, 0.2)",z+w*2)
z=J.D(b)
if(!!J.n(z.h(b,"blocks")).$isb)for(z=J.S(z.h(b,"blocks"));z.u();){v=z.gw()
u=U.ds(this,v)
t=U.db(J.al(v,"limit"),-1)
y=this.z
w=y.b
y=y.a
s=new U.ek(u,null,null,y,t)
u.r1=!0
y.a.push(s)
w.push(s)}U.jv("click","sounds/click.wav")
this.ad()
this.en()},
v:{
hc:function(a,b){var z,y,x,w,v
z=H.x([],[U.bt])
y=H.x([],[U.eu])
x=P.y
w=U.jT
v=H.x([],[w])
z=new U.dx(a,z,null,null,null,null,new U.jN(!1,null,y,new H.a_(0,null,null,null,null,null,0,[x,U.et])),v,new H.a_(0,null,null,null,null,null,0,[x,w]),new U.c0([1,0,0,0,1,0,0,0,1]),new U.c0([1,0,0,0,1,0,0,0,1]),new P.ay(Date.now(),!1))
z.f0(a,b)
return z}}},
hd:{"^":"j:0;a",
$1:function(a){return this.a.en()}},
c0:{"^":"f;a",
i2:function(){var z,y,x,w,v,u,t,s,r,q,p,o
z=[1,0,0,0,1,0,0,0,1]
y=new U.c0(z)
x=this.a
w=x.length
if(0>=w)return H.a(x,0)
v=x[0]
if(4>=w)return H.a(x,4)
u=x[4]
if(8>=w)return H.a(x,8)
u=J.o(u,x[8])
w=this.a
if(7>=w.length)return H.a(w,7)
t=J.o(v,J.F(u,J.o(w[7],w[5])))
w=this.a
u=w.length
if(3>=u)return H.a(w,3)
v=w[3]
s=w[1]
if(8>=u)return H.a(w,8)
w=J.o(s,w[8])
s=this.a
if(7>=s.length)return H.a(s,7)
r=J.o(v,J.F(w,J.o(s[7],s[2])))
s=this.a
if(6>=s.length)return H.a(s,6)
w=s[6]
s=J.o(s[1],s[5])
v=this.a
if(4>=v.length)return H.a(v,4)
q=J.o(w,J.F(s,J.o(v[4],v[2])))
p=J.k(J.F(t,r),q)
if(J.V(p,0))return y
if(typeof p!=="number")return H.i(p)
o=1/p
w=x.length
if(4>=w)return H.a(x,4)
v=x[4]
if(8>=w)return H.a(x,8)
v=J.o(v,x[8])
if(7>=x.length)return H.a(x,7)
v=J.F(v,J.o(x[7],x[5]))
if(typeof v!=="number")return H.i(v)
if(0>=z.length)return H.a(z,0)
z[0]=o*v
if(6>=x.length)return H.a(x,6)
v=J.o(x[6],x[5])
w=x.length
if(3>=w)return H.a(x,3)
u=x[3]
if(8>=w)return H.a(x,8)
u=J.F(v,J.o(u,x[8]))
if(typeof u!=="number")return H.i(u)
if(3>=z.length)return H.a(z,3)
z[3]=o*u
u=x.length
if(3>=u)return H.a(x,3)
v=x[3]
if(7>=u)return H.a(x,7)
v=J.o(v,x[7])
if(6>=x.length)return H.a(x,6)
v=J.F(v,J.o(x[6],x[4]))
if(typeof v!=="number")return H.i(v)
if(6>=z.length)return H.a(z,6)
z[6]=o*v
if(7>=x.length)return H.a(x,7)
v=J.o(x[7],x[2])
u=x.length
if(1>=u)return H.a(x,1)
w=x[1]
if(8>=u)return H.a(x,8)
w=J.F(v,J.o(w,x[8]))
if(typeof w!=="number")return H.i(w)
if(1>=z.length)return H.a(z,1)
z[1]=o*w
w=x.length
if(0>=w)return H.a(x,0)
v=x[0]
if(8>=w)return H.a(x,8)
v=J.o(v,x[8])
if(6>=x.length)return H.a(x,6)
v=J.F(v,J.o(x[6],x[2]))
if(typeof v!=="number")return H.i(v)
if(4>=z.length)return H.a(z,4)
z[4]=o*v
if(6>=x.length)return H.a(x,6)
v=J.o(x[6],x[1])
w=x.length
if(0>=w)return H.a(x,0)
u=x[0]
if(7>=w)return H.a(x,7)
u=J.F(v,J.o(u,x[7]))
if(typeof u!=="number")return H.i(u)
if(7>=z.length)return H.a(z,7)
z[7]=o*u
u=x.length
if(1>=u)return H.a(x,1)
v=x[1]
if(5>=u)return H.a(x,5)
v=J.o(v,x[5])
if(4>=x.length)return H.a(x,4)
v=J.F(v,J.o(x[4],x[2]))
if(typeof v!=="number")return H.i(v)
if(2>=z.length)return H.a(z,2)
z[2]=o*v
if(3>=x.length)return H.a(x,3)
v=J.o(x[3],x[2])
u=x.length
if(0>=u)return H.a(x,0)
w=x[0]
if(5>=u)return H.a(x,5)
w=J.F(v,J.o(w,x[5]))
if(typeof w!=="number")return H.i(w)
if(5>=z.length)return H.a(z,5)
z[5]=o*w
w=x.length
if(0>=w)return H.a(x,0)
v=x[0]
if(4>=w)return H.a(x,4)
v=J.o(v,x[4])
if(3>=x.length)return H.a(x,3)
v=J.F(v,J.o(x[3],x[1]))
if(typeof v!=="number")return H.i(v)
if(8>=z.length)return H.a(z,8)
z[8]=o*v
return y},
ib:function(a,b){var z,y,x,w,v,u
z=[1,0,0,0,1,0,0,0,1]
y=this.a
if(0>=y.length)return H.a(y,0)
y=y[0]
x=b.a
if(0>=x.length)return H.a(x,0)
x=J.o(y,x[0])
y=this.a
if(1>=y.length)return H.a(y,1)
y=y[1]
w=b.a
if(3>=w.length)return H.a(w,3)
w=J.k(x,J.o(y,w[3]))
y=this.a
if(2>=y.length)return H.a(y,2)
y=y[2]
x=b.a
if(6>=x.length)return H.a(x,6)
x=J.k(w,J.o(y,x[6]))
if(0>=z.length)return H.a(z,0)
z[0]=x
x=this.a
if(0>=x.length)return H.a(x,0)
x=x[0]
y=b.a
if(1>=y.length)return H.a(y,1)
y=J.o(x,y[1])
x=this.a
if(1>=x.length)return H.a(x,1)
x=x[1]
w=b.a
if(4>=w.length)return H.a(w,4)
w=J.k(y,J.o(x,w[4]))
x=this.a
if(2>=x.length)return H.a(x,2)
x=x[2]
y=b.a
if(7>=y.length)return H.a(y,7)
y=J.k(w,J.o(x,y[7]))
if(1>=z.length)return H.a(z,1)
z[1]=y
y=this.a
if(0>=y.length)return H.a(y,0)
y=y[0]
x=b.a
if(2>=x.length)return H.a(x,2)
x=J.o(y,x[2])
y=this.a
if(1>=y.length)return H.a(y,1)
y=y[1]
w=b.a
if(5>=w.length)return H.a(w,5)
w=J.k(x,J.o(y,w[5]))
y=this.a
if(2>=y.length)return H.a(y,2)
y=y[2]
x=b.a
if(8>=x.length)return H.a(x,8)
x=J.k(w,J.o(y,x[8]))
if(2>=z.length)return H.a(z,2)
z[2]=x
x=this.a
if(3>=x.length)return H.a(x,3)
x=x[3]
y=b.a
if(0>=y.length)return H.a(y,0)
y=J.o(x,y[0])
x=this.a
if(4>=x.length)return H.a(x,4)
x=x[4]
w=b.a
if(3>=w.length)return H.a(w,3)
w=J.k(y,J.o(x,w[3]))
x=this.a
if(5>=x.length)return H.a(x,5)
x=x[5]
y=b.a
if(6>=y.length)return H.a(y,6)
y=J.k(w,J.o(x,y[6]))
if(3>=z.length)return H.a(z,3)
z[3]=y
y=this.a
if(3>=y.length)return H.a(y,3)
y=y[3]
x=b.a
if(1>=x.length)return H.a(x,1)
x=J.o(y,x[1])
y=this.a
if(4>=y.length)return H.a(y,4)
y=y[4]
w=b.a
if(4>=w.length)return H.a(w,4)
w=J.k(x,J.o(y,w[4]))
y=this.a
if(5>=y.length)return H.a(y,5)
y=y[5]
x=b.a
if(7>=x.length)return H.a(x,7)
x=J.k(w,J.o(y,x[7]))
if(4>=z.length)return H.a(z,4)
z[4]=x
x=this.a
if(3>=x.length)return H.a(x,3)
x=x[3]
y=b.a
if(2>=y.length)return H.a(y,2)
y=J.o(x,y[2])
x=this.a
if(4>=x.length)return H.a(x,4)
x=x[4]
w=b.a
if(5>=w.length)return H.a(w,5)
w=J.k(y,J.o(x,w[5]))
x=this.a
if(5>=x.length)return H.a(x,5)
x=x[5]
y=b.a
if(8>=y.length)return H.a(y,8)
y=J.k(w,J.o(x,y[8]))
if(5>=z.length)return H.a(z,5)
z[5]=y
y=this.a
if(6>=y.length)return H.a(y,6)
y=y[6]
x=b.a
if(0>=x.length)return H.a(x,0)
x=J.o(y,x[0])
y=this.a
if(7>=y.length)return H.a(y,7)
y=y[7]
w=b.a
if(3>=w.length)return H.a(w,3)
w=J.k(x,J.o(y,w[3]))
y=this.a
if(8>=y.length)return H.a(y,8)
y=y[8]
x=b.a
if(6>=x.length)return H.a(x,6)
x=J.k(w,J.o(y,x[6]))
if(6>=z.length)return H.a(z,6)
z[6]=x
x=this.a
if(6>=x.length)return H.a(x,6)
x=x[6]
y=b.a
if(1>=y.length)return H.a(y,1)
y=J.o(x,y[1])
x=this.a
if(7>=x.length)return H.a(x,7)
x=x[7]
w=b.a
if(4>=w.length)return H.a(w,4)
w=J.k(y,J.o(x,w[4]))
x=this.a
if(8>=x.length)return H.a(x,8)
x=x[8]
y=b.a
if(7>=y.length)return H.a(y,7)
y=J.k(w,J.o(x,y[7]))
if(7>=z.length)return H.a(z,7)
z[7]=y
y=this.a
if(6>=y.length)return H.a(y,6)
y=y[6]
x=b.a
if(2>=x.length)return H.a(x,2)
x=J.o(y,x[2])
y=this.a
if(7>=y.length)return H.a(y,7)
y=y[7]
w=b.a
if(5>=w.length)return H.a(w,5)
w=J.k(x,J.o(y,w[5]))
y=this.a
if(8>=y.length)return H.a(y,8)
y=y[8]
x=b.a
if(8>=x.length)return H.a(x,8)
x=J.k(w,J.o(y,x[8]))
y=z.length
if(8>=y)return H.a(z,8)
z[8]=x
for(x=this.a,w=x.length,v=0;v<9;++v){if(v>=y)return H.a(z,v)
u=z[v]
if(v>=w)return H.a(x,v)
x[v]=u}},
aB:function(a){var z,y,x,w,v,u,t,s,r
z=a.c
y=this.a
x=y.length
if(0>=x)return H.a(y,0)
w=y[0]
if(typeof w!=="number")return H.i(w)
v=a.d
if(1>=x)return H.a(y,1)
u=y[1]
if(typeof u!=="number")return H.i(u)
if(2>=x)return H.a(y,2)
t=y[2]
if(typeof t!=="number")return H.i(t)
if(3>=x)return H.a(y,3)
s=y[3]
if(typeof s!=="number")return H.i(s)
if(4>=x)return H.a(y,4)
r=y[4]
if(typeof r!=="number")return H.i(r)
if(5>=x)return H.a(y,5)
y=y[5]
if(typeof y!=="number")return H.i(y)
a.c=z*w+v*u+t
a.d=z*s+v*r+y}},
jx:{"^":"j:0;a,b",
$1:function(a){var z
try{J.fG($.$get$c6(),W.lm(this.b.response)).cK(new U.jw(this.a))}catch(z){H.J(z)}}},
jw:{"^":"j:20;a",
$1:[function(a){if(a!=null)$.$get$bF().j(0,this.a,a)},null,null,2,0,null,23,"call"]},
jy:{"^":"j:0;",
$1:function(a){return P.bO("BufferLoader: XHR error")}},
jN:{"^":"f;a,b,c,d",
bA:function(a){var z,y,x
for(z=this.c,y=0;y<z.length;++y){x=z[y].bA(a)
if(x!=null){if(y>=z.length)return H.a(z,y)
z[y].e=new P.ay(Date.now(),!1)
if(y>=z.length)return H.a(z,y)
return new U.et(z[y],x)}else if(y>=z.length)return H.a(z,y)}return},
il:function(a){var z,y
this.b=a
z=J.m(a)
y=z.gea(a)
W.a7(y.a,y.b,new U.jO(this),!1,H.P(y,0))
y=z.gec(a)
W.a7(y.a,y.b,new U.jP(this),!1,H.P(y,0))
z=z.geb(a)
W.a7(z.a,z.b,new U.jQ(this),!1,H.P(z,0))
z=document
W.a7(z,"keydown",new U.jR(this),!1,W.nk)
W.a7(z,"touchmove",new U.jS(),!1,W.oF)},
fH:function(a){var z,y
for(z=this.c.length,y=0;y<z;++y);}},
jO:{"^":"j:0;a",
$1:function(a){var z,y,x
z=this.a
y=U.cq(a)
x=z.bA(y)
if(x!=null)if(x.af(y))z.d.j(0,-1,x)
z.a=!0
return}},
jP:{"^":"j:0;a",
$1:function(a){var z,y,x
z=this.a
y=z.d
x=y.h(0,-1)
if(x!=null)x.b9(U.cq(a))
y.j(0,-1,null)
z.a=!1
return}},
jQ:{"^":"j:0;a",
$1:function(a){var z,y,x
z=this.a
y=U.cq(a)
x=z.d.h(0,-1)
if(x!=null)x.b7(y)
else{x=z.bA(y)
if(x!=null)if(z.a){x.a.d.aB(y)
x.b.b8(y)}}return}},
jR:{"^":"j:0;a",
$1:function(a){return this.a.fH(a)}},
jS:{"^":"j:0;",
$1:function(a){return J.fO(a)}},
eu:{"^":"f;",
bA:function(a){var z,y,x
z=new U.dy(null,-1,0,0,!1,!1,!1,!1,!1)
z.a=a.a
z.b=a.b
z.c=a.c
z.d=a.d
z.y=a.y
this.d.aB(z)
for(y=this.a,x=y.length-1;x>=0;--x){if(x>=y.length)return H.a(y,x)
if(y[x].bz(z)){if(x>=y.length)return H.a(y,x)
return y[x]}}return}},
et:{"^":"f;a,b",
af:function(a){this.a.d.aB(a)
this.b=this.b.af(a)
return!0},
b9:function(a){this.a.d.aB(a)
this.b.b9(a)},
b7:function(a){this.a.d.aB(a)
this.b.b7(a)},
b8:function(a){this.a.d.aB(a)
this.b.b8(a)}},
jT:{"^":"f;"},
dy:{"^":"f;a,b,c,d,e,f,r,x,y",
f1:function(a){var z,y
this.a=-1
z=J.m(a)
y=z.gbD(a)
y=y.gq(y)
y.toString
this.c=y
z=z.gbD(a)
z=z.gt(z)
z.toString
this.d=z
this.y=!0},
v:{
cq:function(a){var z=new U.dy(null,-1,0,0,!1,!1,!1,!1,!1)
z.f1(a)
return z}}}},1]]
setupProgram(dart,0)
J.n=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dY.prototype
return J.iy.prototype}if(typeof a=="string")return J.bA.prototype
if(a==null)return J.iA.prototype
if(typeof a=="boolean")return J.ix.prototype
if(a.constructor==Array)return J.by.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.f)return a
return J.cf(a)}
J.D=function(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(a.constructor==Array)return J.by.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.f)return a
return J.cf(a)}
J.b4=function(a){if(a==null)return a
if(a.constructor==Array)return J.by.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.f)return a
return J.cf(a)}
J.ab=function(a){if(typeof a=="number")return J.bz.prototype
if(a==null)return a
if(!(a instanceof P.f))return J.bJ.prototype
return a}
J.fn=function(a){if(typeof a=="number")return J.bz.prototype
if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.f))return J.bJ.prototype
return a}
J.fo=function(a){if(typeof a=="string")return J.bA.prototype
if(a==null)return a
if(!(a instanceof P.f))return J.bJ.prototype
return a}
J.m=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bB.prototype
return a}if(a instanceof P.f)return a
return J.cf(a)}
J.k=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.fn(a).n(a,b)}
J.V=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.n(a).C(a,b)}
J.dc=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.ab(a).ew(a,b)}
J.at=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ab(a).bc(a,b)}
J.bo=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ab(a).a8(a,b)}
J.o=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.fn(a).E(a,b)}
J.dd=function(a,b){return J.ab(a).eI(a,b)}
J.F=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ab(a).N(a,b)}
J.fB=function(a,b){if(typeof a=="number"&&typeof b=="number")return(a^b)>>>0
return J.ab(a).eZ(a,b)}
J.al=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fs(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.D(a).h(a,b)}
J.bQ=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fs(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.b4(a).j(a,b,c)}
J.fC=function(a,b){return J.m(a).fb(a,b)}
J.aS=function(a,b){return J.b4(a).D(a,b)}
J.fD=function(a,b,c,d){return J.m(a).dJ(a,b,c,d)}
J.fE=function(a){return J.m(a).bw(a)}
J.de=function(a){return J.m(a).a1(a)}
J.fF=function(a,b,c,d,e){return J.m(a).hl(a,b,c,d,e)}
J.df=function(a,b){return J.m(a).by(a,b)}
J.ck=function(a,b,c){return J.D(a).hp(a,b,c)}
J.fG=function(a,b){return J.m(a).hv(a,b)}
J.dg=function(a,b){return J.b4(a).A(a,b)}
J.fH=function(a){return J.m(a).gci(a)}
J.dh=function(a){return J.m(a).ghh(a)}
J.bp=function(a){return J.m(a).gW(a)}
J.a1=function(a){return J.n(a).gF(a)}
J.S=function(a){return J.b4(a).gK(a)}
J.am=function(a){return J.D(a).gi(a)}
J.di=function(a){return J.m(a).gS(a)}
J.fI=function(a){return J.m(a).gig(a)}
J.fJ=function(a){return J.m(a).gcB(a)}
J.dj=function(a){return J.m(a).gH(a)}
J.fK=function(a){return J.m(a).gcN(a)}
J.cl=function(a){return J.m(a).gG(a)}
J.dk=function(a){return J.m(a).gm(a)}
J.bq=function(a){return J.m(a).gt(a)}
J.fL=function(a){return J.m(a).cQ(a)}
J.dl=function(a,b,c){return J.m(a).B(a,b,c)}
J.dm=function(a,b){return J.b4(a).ar(a,b)}
J.fM=function(a,b,c){return J.fo(a).i8(a,b,c)}
J.fN=function(a,b){return J.n(a).cw(a,b)}
J.fO=function(a){return J.m(a).ii(a)}
J.fP=function(a){return J.b4(a).cC(a)}
J.fQ=function(a,b,c,d){return J.m(a).eh(a,b,c,d)}
J.fR=function(a){return J.m(a).Y(a)}
J.fS=function(a){return J.m(a).T(a)}
J.b6=function(a,b){return J.m(a).ag(a,b)}
J.fT=function(a,b){return J.m(a).sbB(a,b)}
J.dn=function(a,b){return J.m(a).se0(a,b)}
J.dp=function(a,b){return J.m(a).sS(a,b)}
J.fU=function(a,b){return J.m(a).sq(a,b)}
J.fV=function(a,b){return J.m(a).st(a,b)}
J.dq=function(a){return J.ab(a).cL(a)}
J.fW=function(a){return J.fo(a).is(a)}
J.H=function(a){return J.n(a).k(a)}
J.fX=function(a,b){return J.ab(a).it(a,b)}
I.aR=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cm.prototype
C.f=W.hq.prototype
C.w=W.hC.prototype
C.x=J.e.prototype
C.a=J.by.prototype
C.c=J.dY.prototype
C.e=J.bz.prototype
C.d=J.bA.prototype
C.E=J.bB.prototype
C.r=J.jb.prototype
C.t=W.jH.prototype
C.k=J.bJ.prototype
C.L=W.c8.prototype
C.u=new P.j4()
C.v=new P.kf()
C.b=new P.kV()
C.m=new P.aV(0)
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.A=function(getTagFallback) {
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
C.B=function() {
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
C.C=function(hooks) {
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
C.D=function(hooks) {
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
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.p=new P.iL(null,null)
C.F=new P.iN(null)
C.G=new P.iO(null,null)
C.H=H.x(I.aR(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.I=I.aR(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.h=I.aR([])
C.i=H.x(I.aR(["bind","if","ref","repeat","syntax"]),[P.q])
C.j=H.x(I.aR(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.J=H.x(I.aR([]),[P.bH])
C.q=new H.hi(0,{},C.J,[P.bH,null])
C.K=new H.cO("call")
$.ec="$cachedFunction"
$.ed="$cachedInvocation"
$.ae=0
$.b8=null
$.dt=null
$.d7=null
$.fh=null
$.fw=null
$.ce=null
$.ch=null
$.d8=null
$.b0=null
$.bj=null
$.bk=null
$.d1=!1
$.w=C.b
$.dQ=0
$.ao=null
$.cr=null
$.dJ=null
$.dI=null
$.dE=null
$.dD=null
$.dC=null
$.dB=null
$.ad=0
$.bu=null
$.e8=0
$.jz=!1
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
I.$lazy(y,x,w)}})(["bV","$get$bV",function(){return H.d6("_$dart_dartClosure")},"cw","$get$cw",function(){return H.d6("_$dart_js")},"dU","$get$dU",function(){return H.it()},"dV","$get$dV",function(){if(typeof WeakMap=="function")var z=new WeakMap()
else{z=$.dQ
$.dQ=z+1
z="expando$key$"+z}return new P.hy(null,z)},"ev","$get$ev",function(){return H.ai(H.c7({
toString:function(){return"$receiver$"}}))},"ew","$get$ew",function(){return H.ai(H.c7({$method$:null,
toString:function(){return"$receiver$"}}))},"ex","$get$ex",function(){return H.ai(H.c7(null))},"ey","$get$ey",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"eC","$get$eC",function(){return H.ai(H.c7(void 0))},"eD","$get$eD",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"eA","$get$eA",function(){return H.ai(H.eB(null))},"ez","$get$ez",function(){return H.ai(function(){try{null.$method$}catch(z){return z.message}}())},"eF","$get$eF",function(){return H.ai(H.eB(void 0))},"eE","$get$eE",function(){return H.ai(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cS","$get$cS",function(){return P.k1()},"bx","$get$bx",function(){var z,y
z=P.bd
y=new P.a0(0,P.jZ(),null,[z])
y.f8(null,z)
return y},"bl","$get$bl",function(){return[]},"eV","$get$eV",function(){return P.e_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cW","$get$cW",function(){return P.bb()},"d5","$get$d5",function(){return P.ff(self)},"cU","$get$cU",function(){return H.d6("_$dart_dartObject")},"cZ","$get$cZ",function(){return function DartObject(a){this.o=a}},"X","$get$X",function(){return W.mm().devicePixelRatio},"ac","$get$ac",function(){var z=$.$get$X()
if(typeof z!=="number")return H.i(z)
return 80*z},"p","$get$p",function(){var z=$.$get$X()
if(typeof z!=="number")return H.i(z)
return 34*z},"U","$get$U",function(){var z=$.$get$X()
if(typeof z!=="number")return H.i(z)
return 10*z},"aw","$get$aw",function(){var z=$.$get$X()
if(typeof z!=="number")return H.i(z)
return 25*z},"bT","$get$bT",function(){var z=$.$get$X()
if(typeof z!=="number")return H.i(z)
return 10*z},"b2","$get$b2",function(){return P.bb()},"c6","$get$c6",function(){return new (window.AudioContext||window.webkitAudioContext)()},"bF","$get$bF",function(){return H.iH(null,null)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[null,"value","e","error","stackTrace","_","canvasId","object","x","invocation","data","element","attributeName","context","result","o","arg4","isolate","arg3","arg","closure","each","sender","buffer","attr","numberOfArguments","key","callback","captureThis","self","arguments","arg1","arg2","jsonString","language","time"]
init.types=[{func:1,args:[,]},{func:1,v:true},{func:1},{func:1,v:true,args:[P.f],opt:[P.bG]},{func:1,args:[,,]},{func:1,ret:W.t},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.q,args:[P.y]},{func:1,ret:P.d3,args:[W.az,P.q,P.q,W.cV]},{func:1,args:[P.q,,]},{func:1,args:[,P.q]},{func:1,args:[P.q]},{func:1,args:[{func:1,v:true}]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[,P.bG]},{func:1,args:[P.bH,,]},{func:1,ret:P.f,opt:[P.f]},{func:1,ret:[P.b,W.cM]},{func:1,v:true,args:[W.t,W.t]},{func:1,v:true,opt:[P.f]},{func:1,args:[P.bS]},{func:1,v:true,args:[P.f]},{func:1,ret:P.y,args:[P.q]},{func:1,ret:P.ak,args:[P.q]},{func:1,ret:P.f,args:[,]},{func:1,v:true,args:[P.q,P.q]},{func:1,ret:P.q,args:[P.q,P.q]}]
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
if(x==y)H.mk(d||a)
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
Isolate.aR=a.aR
Isolate.R=a.R
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.fy(U.fu(),b)},[])
else (function(b){H.fy(U.fu(),b)})([])})})()
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
  addProgramChangedCallback : function(canvasId, callback) {
    NetTango._callbacks[canvasId] = callback;
  },


  /// Exports the code for a workspace in a given target language. 
  /// The only language supported now is "NetLogo".
  exportCode : function(canvasId, language) {
    return NetTango_ExportCode(canvasId, language);
  },




  _relayCallback : function(canvasId) {
    if (canvasId in NetTango._callbacks) {
      NetTango._callbacks[canvasId](canvasId);
    }
  },

  _callbacks : { }
}
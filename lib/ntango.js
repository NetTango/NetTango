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
init.leafTags[b8[b2]]=false}}b5.$deferredAction()}if(b5.$isd)b5.$deferredAction()}var a3=Object.keys(a4.pending)
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
if(a0==="u"){processStatics(init.statics[b1]=b2.u,b3)
delete b2.u}else if(a1===43){w[g]=a0.substring(1)
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
if(a7)b6[b4+"*"]=d[0]}}function tearOffGetter(c,d,e,f){return f?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"(x) {"+"if (c === null) c = "+"H.cX"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(c,d,e,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"() {"+"if (c === null) c = "+"H.cX"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(c,d,e,H,null)}function tearOff(c,d,e,f,a0){var g
return e?function(){if(g===void 0)g=H.cX(this,c,d,true,[],f).prototype
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
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.O=function(){}
var dart=[["","",,H,{"^":"",na:{"^":"e;a"}}],["","",,J,{"^":"",
k:function(a){return void 0},
c9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c6:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d0==null){H.lQ()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(new P.bC("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cp()]
if(v!=null)return v
v=H.m_(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.r
if(y===Object.prototype)return C.r
if(typeof w=="function"){Object.defineProperty(w,$.$get$cp(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
d:{"^":"e;",
C:function(a,b){return a===b},
gE:function(a){return H.ak(a)},
k:["eI",function(a){return H.bV(a)}],
cp:["eH",function(a,b){throw H.b(P.dV(a,b.gdZ(),b.ge7(),b.ge_(),null))},null,"gi1",2,0,null,9],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationTimeline|AppBannerPromptResult|AudioListener|AudioParam|BarProp|Bluetooth|BluetoothAdvertisingData|BluetoothCharacteristicProperties|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|CHROMIUMSubscribeUniform|CHROMIUMValuebuffer|CSS|Cache|CacheStorage|CanvasGradient|CanvasPattern|CircularGeofencingRegion|Client|Clients|CompositorProxy|ConsoleBase|Coordinates|Credential|CredentialsContainer|Crypto|CryptoKey|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|EXTBlendMinMax|EXTColorBufferFloat|EXTDisjointTimerQuery|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|EffectModel|Entry|EntrySync|FederatedCredential|FileEntry|FileEntrySync|FileError|FileReaderSync|FileWriterSync|FontFace|FormData|GamepadButton|Geofencing|GeofencingRegion|Geolocation|Geoposition|HMDVRDevice|HTMLAllCollection|Headers|IDBFactory|IDBIndex|IdleDeadline|ImageBitmapRenderingContext|InjectedScriptHost|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|KeyframeEffect|MIDIInputMap|MIDIOutputMap|MediaDeviceInfo|MediaDevices|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaMetadata|MediaSession|MemoryInfo|MessageChannel|Metadata|MutationObserver|MutationRecord|NFC|NavigatorStorageUtils|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|PagePopupController|PasswordCredential|PerformanceCompositeTiming|PerformanceEntry|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceObserver|PerformanceObserverEntryList|PerformanceRenderTiming|PerformanceResourceTiming|PerformanceTiming|PeriodicWave|Permissions|PositionError|PositionSensorVRDevice|Presentation|PushManager|PushMessageData|PushSubscription|RTCCertificate|RTCIceCandidate|RTCSessionDescription|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|Selection|ServicePort|SharedArrayBuffer|SourceInfo|SpeechRecognitionAlternative|SpeechSynthesisVoice|StorageInfo|StorageManager|StorageQuota|Stream|StyleMedia|StylePropertyMap|SubtleCrypto|SyncManager|TrackDefault|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRDevice|VREyeParameters|VRFieldOfView|VRPositionState|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGLActiveInfo|WebGLBuffer|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLRenderingContext|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSMatrix|WebKitMutationObserver|WindowClient|WorkerConsole|Worklet|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
io:{"^":"d;",
k:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iscW:1},
ir:{"^":"d;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gE:function(a){return 0},
cp:[function(a,b){return this.eH(a,b)},null,"gi1",2,0,null,9]},
cq:{"^":"d;",
gE:function(a){return 0},
k:["eK",function(a){return String(a)}],
$isis:1},
j2:{"^":"cq;"},
bD:{"^":"cq;"},
bv:{"^":"cq;",
k:function(a){var z=a[$.$get$bN()]
return z==null?this.eK(a):J.F(z)},
$iscn:1,
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
bs:{"^":"d;$ti",
dJ:function(a,b){if(!!a.immutable$list)throw H.b(new P.j(b))},
aN:function(a,b){if(!!a.fixed$length)throw H.b(new P.j(b))},
D:function(a,b){this.aN(a,"add")
a.push(b)},
az:function(a,b){var z
this.aN(a,"removeAt")
z=a.length
if(b>=z)throw H.b(P.b6(b,null,null))
return a.splice(b,1)[0]},
L:function(a,b){var z
this.aN(a,"remove")
for(z=0;z<a.length;++z)if(J.a_(a[z],b)){a.splice(z,1)
return!0}return!1},
N:function(a,b){var z
this.aN(a,"addAll")
for(z=J.R(b);z.v();)a.push(z.gw())},
ap:function(a,b){return new H.bx(a,b,[H.L(a,0),null])},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
ghC:function(a){if(a.length>0)return a[0]
throw H.b(H.co())},
a0:function(a,b,c,d,e){var z,y,x
this.dJ(a,"setRange")
P.cD(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
if(e<0)H.B(P.I(e,0,null,"skipCount",null))
if(e+z>d.length)throw H.b(H.dL())
if(e<b)for(y=z-1;y>=0;--y){x=e+y
if(x<0||x>=d.length)return H.h(d,x)
a[b+y]=d[x]}else for(y=0;y<z;++y){x=e+y
if(x<0||x>=d.length)return H.h(d,x)
a[b+y]=d[x]}},
dE:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.b(new P.af(a))}return!1},
M:function(a,b){var z
for(z=0;z<a.length;++z)if(J.a_(a[z],b))return!0
return!1},
k:function(a){return P.bR(a,"[","]")},
gI:function(a){return new J.fP(a,a.length,0,null)},
gE:function(a){return H.ak(a)},
gi:function(a){return a.length},
si:function(a,b){this.aN(a,"set length")
if(b<0)throw H.b(P.I(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.J(a,b))
if(b>=a.length||b<0)throw H.b(H.J(a,b))
return a[b]},
j:function(a,b,c){this.dJ(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.J(a,b))
if(b>=a.length||b<0)throw H.b(H.J(a,b))
a[b]=c},
$iso:1,
$aso:I.O,
$isa:1,
$asa:null,
$isc:1,
$asc:null},
n9:{"^":"bs;$ti"},
fP:{"^":"e;a,b,c,d",
gw:function(){return this.d},
v:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.H(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bt:{"^":"d;",
ghT:function(a){return a===0?1/a<0:a<0},
cC:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(new P.j(""+a+".toInt()"))},
bz:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(new P.j(""+a+".round()"))},
ig:function(a,b){var z
if(b>20)throw H.b(P.I(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.ghT(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){return a&0x1FFFFFFF},
p:function(a,b){if(typeof b!=="number")throw H.b(H.N(b))
return a+b},
R:function(a,b){if(typeof b!=="number")throw H.b(H.N(b))
return a-b},
bB:function(a,b){if(typeof b!=="number")throw H.b(H.N(b))
return a*b},
bI:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.du(a,b)},
bn:function(a,b){return(a|0)===a?a/b|0:this.du(a,b)},
du:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(new P.j("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
eB:function(a,b){if(b<0)throw H.b(H.N(b))
return b>31?0:a<<b>>>0},
eC:function(a,b){var z
if(b<0)throw H.b(H.N(b))
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
cb:function(a,b){var z
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
eS:function(a,b){if(typeof b!=="number")throw H.b(H.N(b))
return(a^b)>>>0},
ae:function(a,b){if(typeof b!=="number")throw H.b(H.N(b))
return a<b},
cJ:function(a,b){if(typeof b!=="number")throw H.b(H.N(b))
return a>b},
ep:function(a,b){if(typeof b!=="number")throw H.b(H.N(b))
return a>=b},
$isbe:1},
dN:{"^":"bt;",$isbe:1,$isv:1},
ip:{"^":"bt;",$isbe:1},
bu:{"^":"d;",
cg:function(a,b){if(b<0)throw H.b(H.J(a,b))
if(b>=a.length)H.B(H.J(a,b))
return a.charCodeAt(b)},
aE:function(a,b){if(b>=a.length)throw H.b(H.J(a,b))
return a.charCodeAt(b)},
hY:function(a,b,c){var z,y
if(c>b.length)throw H.b(P.I(c,0,b.length,null,null))
z=a.length
if(c+z>b.length)return
for(y=0;y<z;++y)if(this.aE(b,c+y)!==this.aE(a,y))return
return new H.jx(c,b,a)},
p:function(a,b){if(typeof b!=="string")throw H.b(P.dg(b,null,null))
return a+b},
hz:function(a,b){var z,y
z=b.length
y=a.length
if(z>y)return!1
return b===this.cL(a,y-z)},
eE:function(a,b,c){var z
if(c>a.length)throw H.b(P.I(c,0,a.length,null,null))
if(typeof b==="string"){z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)}return J.fC(b,a,c)!=null},
eD:function(a,b){return this.eE(a,b,0)},
ah:function(a,b,c){var z
if(typeof b!=="number"||Math.floor(b)!==b)H.B(H.N(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.B(H.N(c))
z=J.ae(b)
if(z.ae(b,0))throw H.b(P.b6(b,null,null))
if(z.cJ(b,c))throw H.b(P.b6(b,null,null))
if(J.aW(c,a.length))throw H.b(P.b6(c,null,null))
return a.substring(b,c)},
cL:function(a,b){return this.ah(a,b,null)},
ie:function(a){return a.toLowerCase()},
ei:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aE(z,0)===133){x=J.it(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.cg(z,w)===133?J.iu(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
bB:function(a,b){var z,y
if(typeof b!=="number")return H.u(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
hg:function(a,b,c){if(c>a.length)throw H.b(P.I(c,0,a.length,null,null))
return H.ma(a,b,c)},
k:function(a){return a},
gE:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10)
y^=y>>6}y=536870911&y+((67108863&y)<<3)
y^=y>>11
return 536870911&y+((16383&y)<<15)},
gi:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.J(a,b))
if(b>=a.length||b<0)throw H.b(H.J(a,b))
return a[b]},
$iso:1,
$aso:I.O,
$isn:1,
u:{
dO:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
it:function(a,b){var z,y
for(z=a.length;b<z;){y=C.c.aE(a,b)
if(y!==32&&y!==13&&!J.dO(y))break;++b}return b},
iu:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.c.cg(a,z)
if(y!==32&&y!==13&&!J.dO(y))break}return b}}}}],["","",,H,{"^":"",
co:function(){return new P.T("No element")},
im:function(){return new P.T("Too many elements")},
dL:function(){return new P.T("Too few elements")},
c:{"^":"a0;$ti",$asc:null},
b3:{"^":"c;$ti",
gI:function(a){return new H.cv(this,this.gi(this),0,null)},
cG:function(a,b){return this.eJ(0,b)},
ap:function(a,b){return new H.bx(this,b,[H.K(this,"b3",0),null])},
b1:function(a,b){var z,y,x
z=H.y([],[H.K(this,"b3",0)])
C.a.si(z,this.gi(this))
for(y=0;y<this.gi(this);++y){x=this.A(0,y)
if(y>=z.length)return H.h(z,y)
z[y]=x}return z},
cD:function(a){return this.b1(a,!0)}},
cF:{"^":"b3;a,b,c,$ti",
gfh:function(){var z,y
z=J.al(this.a)
y=this.c
if(y==null||y>z)return z
return y},
gfY:function(){var z,y
z=J.al(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y,x
z=J.al(this.a)
y=this.b
if(y>=z)return 0
x=this.c
if(x==null||x>=z)return z-y
if(typeof x!=="number")return x.R()
return x-y},
A:function(a,b){var z,y
z=this.gfY()+b
if(b>=0){y=this.gfh()
if(typeof y!=="number")return H.u(y)
y=z>=y}else y=!0
if(y)throw H.b(P.D(b,this,"index",null,null))
return J.d6(this.a,z)},
ic:function(a,b){var z,y,x
if(b<0)H.B(P.I(b,0,null,"count",null))
z=this.c
y=this.b
x=y+b
if(z==null)return H.eg(this.a,y,x,H.L(this,0))
else{if(z<x)return this
return H.eg(this.a,y,x,H.L(this,0))}},
b1:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.a
x=J.A(y)
w=x.gi(y)
v=this.c
if(v!=null&&v<w)w=v
if(typeof w!=="number")return w.R()
u=w-z
if(u<0)u=0
t=H.y(new Array(u),this.$ti)
for(s=0;s<u;++s){r=x.A(y,z+s)
if(s>=t.length)return H.h(t,s)
t[s]=r
if(x.gi(y)<w)throw H.b(new P.af(this))}return t},
eY:function(a,b,c,d){var z,y
z=this.b
if(z<0)H.B(P.I(z,0,null,"start",null))
y=this.c
if(y!=null){if(y<0)H.B(P.I(y,0,null,"end",null))
if(z>y)throw H.b(P.I(z,0,y,"start",null))}},
u:{
eg:function(a,b,c,d){var z=new H.cF(a,b,c,[d])
z.eY(a,b,c,d)
return z}}},
cv:{"^":"e;a,b,c,d",
gw:function(){return this.d},
v:function(){var z,y,x,w
z=this.a
y=J.A(z)
x=y.gi(z)
if(this.b!==x)throw H.b(new P.af(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.A(z,w);++this.c
return!0}},
cx:{"^":"a0;a,b,$ti",
gI:function(a){return new H.iM(null,J.R(this.a),this.b,this.$ti)},
gi:function(a){return J.al(this.a)},
$asa0:function(a,b){return[b]},
u:{
bS:function(a,b,c,d){if(!!J.k(a).$isc)return new H.dw(a,b,[c,d])
return new H.cx(a,b,[c,d])}}},
dw:{"^":"cx;a,b,$ti",$isc:1,
$asc:function(a,b){return[b]}},
iM:{"^":"dM;a,b,c,$ti",
v:function(){var z=this.b
if(z.v()){this.a=this.c.$1(z.gw())
return!0}this.a=null
return!1},
gw:function(){return this.a}},
bx:{"^":"b3;a,b,$ti",
gi:function(a){return J.al(this.a)},
A:function(a,b){return this.b.$1(J.d6(this.a,b))},
$asb3:function(a,b){return[b]},
$asc:function(a,b){return[b]},
$asa0:function(a,b){return[b]}},
ey:{"^":"a0;a,b,$ti",
gI:function(a){return new H.jO(J.R(this.a),this.b,this.$ti)},
ap:function(a,b){return new H.cx(this,b,[H.L(this,0),null])}},
jO:{"^":"dM;a,b,$ti",
v:function(){var z,y
for(z=this.a,y=this.b;z.v();)if(y.$1(z.gw())===!0)return!0
return!1},
gw:function(){return this.a.gw()}},
dH:{"^":"e;$ti",
si:function(a,b){throw H.b(new P.j("Cannot change the length of a fixed-length list"))},
D:function(a,b){throw H.b(new P.j("Cannot add to a fixed-length list"))},
az:function(a,b){throw H.b(new P.j("Cannot remove from a fixed-length list"))}},
cG:{"^":"e;fB:a<",
C:function(a,b){if(b==null)return!1
return b instanceof H.cG&&J.a_(this.a,b.a)},
gE:function(a){var z,y
z=this._hashCode
if(z!=null)return z
y=J.X(this.a)
if(typeof y!=="number")return H.u(y)
z=536870911&664597*y
this._hashCode=z
return z},
k:function(a){return'Symbol("'+H.f(this.a)+'")'}}}],["","",,H,{"^":"",
bG:function(a,b){var z=a.aQ(b)
if(!init.globalState.d.cy)init.globalState.f.b0()
return z},
fo:function(a,b){var z,y,x,w,v,u
z={}
z.a=b
if(b==null){b=[]
z.a=b
y=b}else y=b
if(!J.k(y).$isa)throw H.b(P.aZ("Arguments to main must be a List: "+H.f(y)))
init.globalState=new H.kF(0,0,1,null,null,null,null,null,null,null,null,null,a)
y=init.globalState
x=self.window==null
w=self.Worker
v=x&&!!self.postMessage
y.x=v
v=!v
if(v)w=w!=null&&$.$get$dJ()!=null
else w=!0
y.y=w
y.r=x&&v
y.f=new H.ka(P.cw(null,H.bF),0)
x=P.v
y.z=new H.V(0,null,null,null,null,null,0,[x,H.cP])
y.ch=new H.V(0,null,null,null,null,null,0,[x,null])
if(y.x===!0){w=new H.kE()
y.Q=w
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.ie,w)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.kG)}if(init.globalState.x===!0)return
y=init.globalState.a++
w=P.aa(null,null,null,x)
v=new H.bX(0,null,!1)
u=new H.cP(y,new H.V(0,null,null,null,null,null,0,[x,H.bX]),w,init.createNewIsolate(),v,new H.aK(H.ca()),new H.aK(H.ca()),!1,!1,[],P.aa(null,null,null,null),null,null,!1,!0,P.aa(null,null,null,null))
w.D(0,0)
u.cS(0,v)
init.globalState.e=u
init.globalState.d=u
if(H.aH(a,{func:1,args:[,]}))u.aQ(new H.m8(z,a))
else if(H.aH(a,{func:1,args:[,,]}))u.aQ(new H.m9(z,a))
else u.aQ(a)
init.globalState.f.b0()},
ij:function(){var z=init.currentScript
if(z!=null)return String(z.src)
if(init.globalState.x===!0)return H.ik()
return},
ik:function(){var z,y
z=new Error().stack
if(z==null){z=function(){try{throw new Error()}catch(x){return x.stack}}()
if(z==null)throw H.b(new P.j("No stack trace"))}y=z.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(y!=null)return y[1]
y=z.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(y!=null)return y[1]
throw H.b(new P.j('Cannot extract URI from "'+z+'"'))},
ie:[function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new H.c0(!0,[]).an(b.data)
y=J.A(z)
switch(y.h(z,"command")){case"start":init.globalState.b=y.h(z,"id")
x=y.h(z,"functionName")
w=x==null?init.globalState.cx:init.globalFunctions[x]()
v=y.h(z,"args")
u=new H.c0(!0,[]).an(y.h(z,"msg"))
t=y.h(z,"isSpawnUri")
s=y.h(z,"startPaused")
r=new H.c0(!0,[]).an(y.h(z,"replyTo"))
y=init.globalState.a++
q=P.v
p=P.aa(null,null,null,q)
o=new H.bX(0,null,!1)
n=new H.cP(y,new H.V(0,null,null,null,null,null,0,[q,H.bX]),p,init.createNewIsolate(),o,new H.aK(H.ca()),new H.aK(H.ca()),!1,!1,[],P.aa(null,null,null,null),null,null,!1,!0,P.aa(null,null,null,null))
p.D(0,0)
n.cS(0,o)
init.globalState.f.a.a1(0,new H.bF(n,new H.ig(w,v,u,t,s,r),"worker-start"))
init.globalState.d=n
init.globalState.f.b0()
break
case"spawn-worker":break
case"message":if(y.h(z,"port")!=null)J.aY(y.h(z,"port"),y.h(z,"msg"))
init.globalState.f.b0()
break
case"close":init.globalState.ch.L(0,$.$get$dK().h(0,a))
a.terminate()
init.globalState.f.b0()
break
case"log":H.id(y.h(z,"msg"))
break
case"print":if(init.globalState.x===!0){y=init.globalState.Q
q=P.at(["command","print","msg",z])
q=new H.aQ(!0,P.b9(null,P.v)).W(q)
y.toString
self.postMessage(q)}else P.bf(y.h(z,"msg"))
break
case"error":throw H.b(y.h(z,"msg"))}},null,null,4,0,null,22,2],
id:function(a){var z,y,x,w
if(init.globalState.x===!0){y=init.globalState.Q
x=P.at(["command","log","msg",a])
x=new H.aQ(!0,P.b9(null,P.v)).W(x)
y.toString
self.postMessage(x)}else try{self.console.log(a)}catch(w){H.E(w)
z=H.U(w)
y=P.bP(z)
throw H.b(y)}},
ih:function(a,b,c,d,e,f){var z,y,x,w
z=init.globalState.d
y=z.a
$.e3=$.e3+("_"+y)
$.e4=$.e4+("_"+y)
y=z.e
x=init.globalState.d.a
w=z.f
J.aY(f,["spawned",new H.c2(y,x),w,z.r])
x=new H.ii(a,b,c,d,z)
if(e===!0){z.dD(w,w)
init.globalState.f.a.a1(0,new H.bF(z,x,"start isolate"))}else x.$0()},
la:function(a){return new H.c0(!0,[]).an(new H.aQ(!1,P.b9(null,P.v)).W(a))},
m8:{"^":"i:2;a,b",
$0:function(){this.b.$1(this.a.a)}},
m9:{"^":"i:2;a,b",
$0:function(){this.b.$2(this.a.a,null)}},
kF:{"^":"e;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",u:{
kG:[function(a){var z=P.at(["command","print","msg",a])
return new H.aQ(!0,P.b9(null,P.v)).W(z)},null,null,2,0,null,7]}},
cP:{"^":"e;a,b,c,hV:d<,hh:e<,f,r,hO:x?,aW:y<,hp:z<,Q,ch,cx,cy,db,dx",
dD:function(a,b){if(!this.f.C(0,a))return
if(this.Q.D(0,b)&&!this.y)this.y=!0
this.cc()},
i9:function(a){var z,y,x,w,v,u
if(!this.y)return
z=this.Q
z.L(0,a)
if(z.a===0){for(z=this.z;y=z.length,y!==0;){if(0>=y)return H.h(z,-1)
x=z.pop()
y=init.globalState.f.a
w=y.b
v=y.a
u=v.length
w=(w-1&u-1)>>>0
y.b=w
if(w<0||w>=u)return H.h(v,w)
v[w]=x
if(w===y.c)y.dc();++y.d}this.y=!1}this.cc()},
h3:function(a,b){var z,y,x
if(this.ch==null)this.ch=[]
for(z=J.k(a),y=0;x=this.ch,y<x.length;y+=2)if(z.C(a,x[y])){z=this.ch
x=y+1
if(x>=z.length)return H.h(z,x)
z[x]=b
return}x.push(a)
this.ch.push(b)},
i8:function(a){var z,y,x
if(this.ch==null)return
for(z=J.k(a),y=0;x=this.ch,y<x.length;y+=2)if(z.C(a,x[y])){z=this.ch
x=y+2
z.toString
if(typeof z!=="object"||z===null||!!z.fixed$length)H.B(new P.j("removeRange"))
P.cD(y,x,z.length,null,null,null)
z.splice(y,x-y)
return}},
eA:function(a,b){if(!this.r.C(0,a))return
this.db=b},
hH:function(a,b,c){var z=J.k(b)
if(!z.C(b,0))z=z.C(b,1)&&!this.cy
else z=!0
if(z){J.aY(a,c)
return}z=this.cx
if(z==null){z=P.cw(null,null)
this.cx=z}z.a1(0,new H.ku(a,c))},
hG:function(a,b){var z
if(!this.r.C(0,a))return
z=J.k(b)
if(!z.C(b,0))z=z.C(b,1)&&!this.cy
else z=!0
if(z){this.cm()
return}z=this.cx
if(z==null){z=P.cw(null,null)
this.cx=z}z.a1(0,this.ghW())},
hI:function(a,b){var z,y,x
z=this.dx
if(z.a===0){if(this.db===!0&&this===init.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.bf(a)
if(b!=null)P.bf(b)}return}y=new Array(2)
y.fixed$length=Array
y[0]=J.F(a)
y[1]=b==null?null:J.F(b)
for(x=new P.eP(z,z.r,null,null),x.c=z.e;x.v();)J.aY(x.d,y)},
aQ:function(a){var z,y,x,w,v,u,t
z=init.globalState.d
init.globalState.d=this
$=this.d
y=null
x=this.cy
this.cy=!0
try{y=a.$0()}catch(u){w=H.E(u)
v=H.U(u)
this.hI(w,v)
if(this.db===!0){this.cm()
if(this===init.globalState.e)throw u}}finally{this.cy=x
init.globalState.d=z
if(z!=null)$=z.ghV()
if(this.cx!=null)for(;t=this.cx,!t.gH(t);)this.cx.ea().$0()}return y},
hE:function(a){var z=J.A(a)
switch(z.h(a,0)){case"pause":this.dD(z.h(a,1),z.h(a,2))
break
case"resume":this.i9(z.h(a,1))
break
case"add-ondone":this.h3(z.h(a,1),z.h(a,2))
break
case"remove-ondone":this.i8(z.h(a,1))
break
case"set-errors-fatal":this.eA(z.h(a,1),z.h(a,2))
break
case"ping":this.hH(z.h(a,1),z.h(a,2),z.h(a,3))
break
case"kill":this.hG(z.h(a,1),z.h(a,2))
break
case"getErrors":this.dx.D(0,z.h(a,1))
break
case"stopErrors":this.dx.L(0,z.h(a,1))
break}},
dX:function(a){return this.b.h(0,a)},
cS:function(a,b){var z=this.b
if(z.S(0,a))throw H.b(P.bP("Registry: ports must be registered only once."))
z.j(0,a,b)},
cc:function(){var z=this.b
if(z.gi(z)-this.c.a>0||this.y||!this.x)init.globalState.z.j(0,this.a,this)
else this.cm()},
cm:[function(){var z,y,x,w,v
z=this.cx
if(z!=null)z.am(0)
for(z=this.b,y=z.gcF(z),y=y.gI(y);y.v();)y.gw().fa()
z.am(0)
this.c.am(0)
init.globalState.z.L(0,this.a)
this.dx.am(0)
if(this.ch!=null){for(x=0;z=this.ch,y=z.length,x<y;x+=2){w=z[x]
v=x+1
if(v>=y)return H.h(z,v)
J.aY(w,z[v])}this.ch=null}},"$0","ghW",0,0,1]},
ku:{"^":"i:1;a,b",
$0:[function(){J.aY(this.a,this.b)},null,null,0,0,null,"call"]},
ka:{"^":"e;a,b",
hq:function(){var z=this.a
if(z.b===z.c)return
return z.ea()},
ec:function(){var z,y,x
z=this.hq()
if(z==null){if(init.globalState.e!=null)if(init.globalState.z.S(0,init.globalState.e.a))if(init.globalState.r===!0){y=init.globalState.e.b
y=y.gH(y)}else y=!1
else y=!1
else y=!1
if(y)H.B(P.bP("Program exited with open ReceivePorts."))
y=init.globalState
if(y.x===!0){x=y.z
x=x.gH(x)&&y.f.b===0}else x=!1
if(x){y=y.Q
x=P.at(["command","close"])
x=new H.aQ(!0,new P.eQ(0,null,null,null,null,null,0,[null,P.v])).W(x)
y.toString
self.postMessage(x)}return!1}z.i6()
return!0},
dr:function(){if(self.window!=null)new H.kb(this).$0()
else for(;this.ec(););},
b0:function(){var z,y,x,w,v
if(init.globalState.x!==!0)this.dr()
else try{this.dr()}catch(x){z=H.E(x)
y=H.U(x)
w=init.globalState.Q
v=P.at(["command","error","msg",H.f(z)+"\n"+H.f(y)])
v=new H.aQ(!0,P.b9(null,P.v)).W(v)
w.toString
self.postMessage(v)}}},
kb:{"^":"i:1;a",
$0:function(){if(!this.a.ec())return
P.jD(C.m,this)}},
bF:{"^":"e;a,b,c",
i6:function(){var z=this.a
if(z.gaW()){z.ghp().push(this)
return}z.aQ(this.b)}},
kE:{"^":"e;"},
ig:{"^":"i:2;a,b,c,d,e,f",
$0:function(){H.ih(this.a,this.b,this.c,this.d,this.e,this.f)}},
ii:{"^":"i:1;a,b,c,d,e",
$0:function(){var z,y
z=this.e
z.shO(!0)
if(this.d!==!0)this.a.$1(this.c)
else{y=this.a
if(H.aH(y,{func:1,args:[,,]}))y.$2(this.b,this.c)
else if(H.aH(y,{func:1,args:[,]}))y.$1(this.b)
else y.$0()}z.cc()}},
eB:{"^":"e;"},
c2:{"^":"eB;b,a",
af:function(a,b){var z,y,x
z=init.globalState.z.h(0,this.a)
if(z==null)return
y=this.b
if(y.gdh())return
x=H.la(b)
if(z.ghh()===y){z.hE(x)
return}init.globalState.f.a.a1(0,new H.bF(z,new H.kI(this,x),"receive"))},
C:function(a,b){if(b==null)return!1
return b instanceof H.c2&&J.a_(this.b,b.b)},
gE:function(a){return this.b.gc0()}},
kI:{"^":"i:2;a,b",
$0:function(){var z=this.a.b
if(!z.gdh())J.fs(z,this.b)}},
cQ:{"^":"eB;b,c,a",
af:function(a,b){var z,y,x
z=P.at(["command","message","port",this,"msg",b])
y=new H.aQ(!0,P.b9(null,P.v)).W(z)
if(init.globalState.x===!0){init.globalState.Q.toString
self.postMessage(y)}else{x=init.globalState.ch.h(0,this.b)
if(x!=null)x.postMessage(y)}},
C:function(a,b){if(b==null)return!1
return b instanceof H.cQ&&J.a_(this.b,b.b)&&J.a_(this.a,b.a)&&J.a_(this.c,b.c)},
gE:function(a){var z,y,x
z=J.d4(this.b,16)
y=J.d4(this.a,8)
x=this.c
if(typeof x!=="number")return H.u(x)
return(z^y^x)>>>0}},
bX:{"^":"e;c0:a<,b,dh:c<",
fa:function(){this.c=!0
this.b=null},
f4:function(a,b){if(this.c)return
this.b.$1(b)},
$isjf:1},
jz:{"^":"e;a,b,c",
X:function(a){var z
if(self.setTimeout!=null){if(this.b)throw H.b(new P.j("Timer in event loop cannot be canceled."))
z=this.c
if(z==null)return;--init.globalState.f.b
self.clearTimeout(z)
this.c=null}else throw H.b(new P.j("Canceling a timer."))},
eZ:function(a,b){var z,y
if(a===0)z=self.setTimeout==null||init.globalState.x===!0
else z=!1
if(z){this.c=1
z=init.globalState.f
y=init.globalState.d
z.a.a1(0,new H.bF(y,new H.jB(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++init.globalState.f.b
this.c=self.setTimeout(H.a6(new H.jC(this,b),0),a)}else throw H.b(new P.j("Timer greater than 0."))},
u:{
jA:function(a,b){var z=new H.jz(!0,!1,null)
z.eZ(a,b)
return z}}},
jB:{"^":"i:1;a,b",
$0:function(){this.a.c=null
this.b.$0()}},
jC:{"^":"i:1;a,b",
$0:[function(){this.a.c=null;--init.globalState.f.b
this.b.$0()},null,null,0,0,null,"call"]},
aK:{"^":"e;c0:a<",
gE:function(a){var z,y,x
z=this.a
y=J.ae(z)
x=y.eC(z,0)
y=y.bI(z,4294967296)
if(typeof y!=="number")return H.u(y)
z=x^y
z=(~z>>>0)+(z<<15>>>0)&4294967295
z=((z^z>>>12)>>>0)*5&4294967295
z=((z^z>>>4)>>>0)*2057&4294967295
return(z^z>>>16)>>>0},
C:function(a,b){var z,y
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aK){z=this.a
y=b.a
return z==null?y==null:z===y}return!1}},
aQ:{"^":"e;a,b",
W:[function(a){var z,y,x,w,v
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=this.b
y=z.h(0,a)
if(y!=null)return["ref",y]
z.j(0,a,z.gi(z))
z=J.k(a)
if(!!z.$iscz)return["buffer",a]
if(!!z.$isby)return["typed",a]
if(!!z.$iso)return this.ew(a)
if(!!z.$isic){x=this.ges()
w=z.gab(a)
w=H.bS(w,x,H.K(w,"a0",0),null)
w=P.aN(w,!0,H.K(w,"a0",0))
z=z.gcF(a)
z=H.bS(z,x,H.K(z,"a0",0),null)
return["map",w,P.aN(z,!0,H.K(z,"a0",0))]}if(!!z.$isis)return this.ex(a)
if(!!z.$isd)this.ej(a)
if(!!z.$isjf)this.b7(a,"RawReceivePorts can't be transmitted:")
if(!!z.$isc2)return this.ey(a)
if(!!z.$iscQ)return this.ez(a)
if(!!z.$isi){v=a.$static_name
if(v==null)this.b7(a,"Closures can't be transmitted:")
return["function",v]}if(!!z.$isaK)return["capability",a.a]
if(!(a instanceof P.e))this.ej(a)
return["dart",init.classIdExtractor(a),this.ev(init.classFieldsExtractor(a))]},"$1","ges",2,0,0,8],
b7:function(a,b){throw H.b(new P.j((b==null?"Can't transmit:":b)+" "+H.f(a)))},
ej:function(a){return this.b7(a,null)},
ew:function(a){var z=this.eu(a)
if(!!a.fixed$length)return["fixed",z]
if(!a.fixed$length)return["extendable",z]
if(!a.immutable$list)return["mutable",z]
if(a.constructor===Array)return["const",z]
this.b7(a,"Can't serialize indexable: ")},
eu:function(a){var z,y,x
z=[]
C.a.si(z,a.length)
for(y=0;y<a.length;++y){x=this.W(a[y])
if(y>=z.length)return H.h(z,y)
z[y]=x}return z},
ev:function(a){var z
for(z=0;z<a.length;++z)C.a.j(a,z,this.W(a[z]))
return a},
ex:function(a){var z,y,x,w
if(!!a.constructor&&a.constructor!==Object)this.b7(a,"Only plain JS Objects are supported:")
z=Object.keys(a)
y=[]
C.a.si(y,z.length)
for(x=0;x<z.length;++x){w=this.W(a[z[x]])
if(x>=y.length)return H.h(y,x)
y[x]=w}return["js-object",z,y]},
ez:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
ey:function(a){if(this.a)return["sendport",init.globalState.b,a.a,a.b.gc0()]
return["raw sendport",a]}},
c0:{"^":"e;a,b",
an:[function(a){var z,y,x,w,v,u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.b(P.aZ("Bad serialized message: "+H.f(a)))
switch(C.a.ghC(a)){case"ref":if(1>=a.length)return H.h(a,1)
z=a[1]
y=this.b
if(z>>>0!==z||z>=y.length)return H.h(y,z)
return y[z]
case"buffer":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return x
case"typed":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return x
case"fixed":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
y=H.y(this.aP(x),[null])
y.fixed$length=Array
return y
case"extendable":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return H.y(this.aP(x),[null])
case"mutable":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return this.aP(x)
case"const":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
y=H.y(this.aP(x),[null])
y.fixed$length=Array
return y
case"map":return this.ht(a)
case"sendport":return this.hu(a)
case"raw sendport":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return x
case"js-object":return this.hs(a)
case"function":if(1>=a.length)return H.h(a,1)
x=init.globalFunctions[a[1]]()
this.b.push(x)
return x
case"capability":if(1>=a.length)return H.h(a,1)
return new H.aK(a[1])
case"dart":y=a.length
if(1>=y)return H.h(a,1)
w=a[1]
if(2>=y)return H.h(a,2)
v=a[2]
u=init.instanceFromClassId(w)
this.b.push(u)
this.aP(v)
return init.initializeEmptyInstance(w,u,v)
default:throw H.b("couldn't deserialize: "+H.f(a))}},"$1","ghr",2,0,0,8],
aP:function(a){var z,y,x
z=J.A(a)
y=0
while(!0){x=z.gi(a)
if(typeof x!=="number")return H.u(x)
if(!(y<x))break
z.j(a,y,this.an(z.h(a,y)));++y}return a},
ht:function(a){var z,y,x,w,v,u
z=a.length
if(1>=z)return H.h(a,1)
y=a[1]
if(2>=z)return H.h(a,2)
x=a[2]
w=P.b2()
this.b.push(w)
y=J.dc(y,this.ghr()).cD(0)
for(z=J.A(y),v=J.A(x),u=0;u<z.gi(y);++u)w.j(0,z.h(y,u),this.an(v.h(x,u)))
return w},
hu:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.h(a,1)
y=a[1]
if(2>=z)return H.h(a,2)
x=a[2]
if(3>=z)return H.h(a,3)
w=a[3]
if(J.a_(y,init.globalState.b)){v=init.globalState.z.h(0,x)
if(v==null)return
u=v.dX(w)
if(u==null)return
t=new H.c2(u,x)}else t=new H.cQ(y,w,x)
this.b.push(t)
return t},
hs:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.h(a,1)
y=a[1]
if(2>=z)return H.h(a,2)
x=a[2]
w={}
this.b.push(w)
z=J.A(y)
v=J.A(x)
u=0
while(!0){t=z.gi(y)
if(typeof t!=="number")return H.u(t)
if(!(u<t))break
w[z.h(y,u)]=this.an(v.h(x,u));++u}return w}}}],["","",,H,{"^":"",
h9:function(){throw H.b(new P.j("Cannot modify unmodifiable Map"))},
lJ:function(a){return init.types[a]},
fi:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.k(a).$isq},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.F(a)
if(typeof z!=="string")throw H.b(H.N(a))
return z},
ak:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
e1:function(a,b){if(b==null)throw H.b(new P.cm(a,null,null))
return b.$1(a)},
e5:function(a,b,c){var z,y
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return H.e1(a,c)
if(3>=z.length)return H.h(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return H.e1(a,c)},
e0:function(a,b){return b.$1(a)},
jd:function(a,b){var z,y
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.e0(a,b)
z=parseFloat(a)
if(isNaN(z)){y=C.c.ei(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return H.e0(a,b)}return z},
bW:function(a){var z,y,x,w,v,u,t,s
z=J.k(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.k(a).$isbD){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.c.aE(w,0)===36)w=C.c.cL(w,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+H.fj(H.c7(a),0,null),init.mangledGlobalNames)},
bV:function(a){return"Instance of '"+H.bW(a)+"'"},
Y:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.d.cb(z,10))>>>0,56320|z&1023)}throw H.b(P.I(a,0,1114111,null,null))},
S:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jc:function(a){return a.b?H.S(a).getUTCFullYear()+0:H.S(a).getFullYear()+0},
ja:function(a){return a.b?H.S(a).getUTCMonth()+1:H.S(a).getMonth()+1},
j6:function(a){return a.b?H.S(a).getUTCDate()+0:H.S(a).getDate()+0},
j7:function(a){return a.b?H.S(a).getUTCHours()+0:H.S(a).getHours()+0},
j9:function(a){return a.b?H.S(a).getUTCMinutes()+0:H.S(a).getMinutes()+0},
jb:function(a){return a.b?H.S(a).getUTCSeconds()+0:H.S(a).getSeconds()+0},
j8:function(a){return a.b?H.S(a).getUTCMilliseconds()+0:H.S(a).getMilliseconds()+0},
cC:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.b(H.N(a))
return a[b]},
e6:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.b(H.N(a))
a[b]=c},
e2:function(a,b,c){var z,y,x
z={}
z.a=0
y=[]
x=[]
z.a=b.length
C.a.N(y,b)
z.b=""
if(c!=null&&!c.gH(c))c.O(0,new H.j5(z,y,x))
return J.fD(a,new H.iq(C.K,""+"$"+z.a+z.b,0,y,x,null))},
j4:function(a,b){var z,y
z=b instanceof Array?b:P.aN(b,!0,null)
y=z.length
if(y===0){if(!!a.$0)return a.$0()}else if(y===1){if(!!a.$1)return a.$1(z[0])}else if(y===2){if(!!a.$2)return a.$2(z[0],z[1])}else if(y===3){if(!!a.$3)return a.$3(z[0],z[1],z[2])}else if(y===4){if(!!a.$4)return a.$4(z[0],z[1],z[2],z[3])}else if(y===5)if(!!a.$5)return a.$5(z[0],z[1],z[2],z[3],z[4])
return H.j3(a,z)},
j3:function(a,b){var z,y,x,w,v,u
z=b.length
y=a[""+"$"+z]
if(y==null){y=J.k(a)["call*"]
if(y==null)return H.e2(a,b,null)
x=H.e8(y)
w=x.d
v=w+x.e
if(x.f||w>z||v<z)return H.e2(a,b,null)
b=P.aN(b,!0,null)
for(u=z;u<v;++u)C.a.D(b,init.metadata[x.ho(0,u)])}return y.apply(a,b)},
u:function(a){throw H.b(H.N(a))},
h:function(a,b){if(a==null)J.al(a)
throw H.b(H.J(a,b))},
J:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,"index",null)
z=J.al(a)
if(!(b<0)){if(typeof z!=="number")return H.u(z)
y=b>=z}else y=!0
if(y)return P.D(b,a,"index",null,z)
return P.b6(b,"index",null)},
N:function(a){return new P.am(!0,a,null,null)},
lx:function(a){if(typeof a!=="string")throw H.b(H.N(a))
return a},
b:function(a){var z
if(a==null)a=new P.bU()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fq})
z.name=""}else z.toString=H.fq
return z},
fq:[function(){return J.F(this.dartException)},null,null,0,0,null],
B:function(a){throw H.b(a)},
H:function(a){throw H.b(new P.af(a))},
E:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.md(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.d.cb(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cr(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:v=H.f(y)+" (Error "+w+")"
return z.$1(new H.dY(v,null))}}if(a instanceof TypeError){u=$.$get$em()
t=$.$get$en()
s=$.$get$eo()
r=$.$get$ep()
q=$.$get$et()
p=$.$get$eu()
o=$.$get$er()
$.$get$eq()
n=$.$get$ew()
m=$.$get$ev()
l=u.Y(y)
if(l!=null)return z.$1(H.cr(y,l))
else{l=t.Y(y)
if(l!=null){l.method="call"
return z.$1(H.cr(y,l))}else{l=s.Y(y)
if(l==null){l=r.Y(y)
if(l==null){l=q.Y(y)
if(l==null){l=p.Y(y)
if(l==null){l=o.Y(y)
if(l==null){l=r.Y(y)
if(l==null){l=n.Y(y)
if(l==null){l=m.Y(y)
v=l!=null}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0
if(v)return z.$1(new H.dY(y,l==null?null:l.method))}}return z.$1(new H.jN(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ec()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.am(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ec()
return a},
U:function(a){var z
if(a==null)return new H.eR(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eR(a,null)},
m5:function(a){if(a==null||typeof a!='object')return J.X(a)
else return H.ak(a)},
lI:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
lS:[function(a,b,c,d,e,f,g){switch(c){case 0:return H.bG(b,new H.lT(a))
case 1:return H.bG(b,new H.lU(a,d))
case 2:return H.bG(b,new H.lV(a,d,e))
case 3:return H.bG(b,new H.lW(a,d,e,f))
case 4:return H.bG(b,new H.lX(a,d,e,f,g))}throw H.b(P.bP("Unsupported number of arguments for wrapped closure"))},null,null,14,0,null,20,17,25,31,32,18,16],
a6:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,init.globalState.d,H.lS)
a.$identity=z
return z},
h1:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.k(c).$isa){z.$reflectionInfo=c
x=H.e8(z).r}else x=c
w=d?Object.create(new H.js().constructor.prototype):Object.create(new H.cg(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a8
$.a8=J.m(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.dl(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.lJ,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.dj:H.ch
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.dl(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
fZ:function(a,b,c,d){var z=H.ch
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dl:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h0(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fZ(y,!w,z,b)
if(y===0){w=$.a8
$.a8=J.m(w,1)
u="self"+H.f(w)
w="return function(){var "+u+" = this."
v=$.b_
if(v==null){v=H.bM("self")
$.b_=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a8
$.a8=J.m(w,1)
t+=H.f(w)
w="return function("+t+"){return this."
v=$.b_
if(v==null){v=H.bM("self")
$.b_=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
h_:function(a,b,c,d){var z,y
z=H.ch
y=H.dj
switch(b?-1:a){case 0:throw H.b(new H.ji("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
h0:function(a,b){var z,y,x,w,v,u,t,s
z=H.fW()
y=$.di
if(y==null){y=H.bM("receiver")
$.di=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h_(w,!u,x,b)
if(w===1){y="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
u=$.a8
$.a8=J.m(u,1)
return new Function(y+H.f(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
u=$.a8
$.a8=J.m(u,1)
return new Function(y+H.f(u)+"}")()},
cX:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.k(c).$isa){c.fixed$length=Array
z=c}else z=c
return H.h1(a,b,z,!!d,e,f)},
m3:function(a){if(typeof a==="number"||a==null)return a
throw H.b(H.dk(H.bW(a),"num"))},
m7:function(a,b){var z=J.A(b)
throw H.b(H.dk(H.bW(a),z.ah(b,3,z.gi(b))))},
fg:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.k(a)[b]
else z=!0
if(z)return a
H.m7(a,b)},
lG:function(a){var z=J.k(a)
return"$S" in z?z.$S():null},
aH:function(a,b){var z
if(a==null)return!1
z=H.lG(a)
return z==null?!1:H.fh(z,b)},
mc:function(a){throw H.b(new P.hd(a))},
ca:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
cZ:function(a){return init.getIsolateTag(a)},
y:function(a,b){a.$ti=b
return a},
c7:function(a){if(a==null)return
return a.$ti},
ff:function(a,b){return H.d2(a["$as"+H.f(b)],H.c7(a))},
K:function(a,b,c){var z=H.ff(a,b)
return z==null?null:z[c]},
L:function(a,b){var z=H.c7(a)
return z==null?null:z[b]},
aV:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.fj(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aV(z,b)
return H.lg(a,b)}return"unknown-reified-type"},
lg:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aV(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aV(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aV(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.lH(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aV(r[p],b)+(" "+H.f(p))}w+="}"}return"("+w+") => "+z},
fj:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.aO("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.l=v+", "
u=a[y]
if(u!=null)w=!1
v=z.l+=H.aV(u,c)}return w?"":"<"+z.k(0)+">"},
d2:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bI:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.c7(a)
y=J.k(a)
if(y[b]==null)return!1
return H.fa(H.d2(y[d],z),c)},
fa:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.Z(a[y],b[y]))return!1
return!0},
bd:function(a,b,c){return a.apply(b,H.ff(b,c))},
Z:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="b4")return!0
if('func' in b)return H.fh(a,b)
if('func' in a)return b.builtin$cls==="cn"||b.builtin$cls==="e"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.aV(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.fa(H.d2(u,z),x)},
f9:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.Z(z,v)||H.Z(v,z)))return!1}return!0},
lr:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=Object.getOwnPropertyNames(b)
z.fixed$length=Array
y=z
for(z=y.length,x=0;x<z;++x){w=y[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.Z(v,u)||H.Z(u,v)))return!1}return!0},
fh:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.Z(z,y)||H.Z(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.f9(x,w,!1))return!1
if(!H.f9(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.Z(o,n)||H.Z(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.Z(o,n)||H.Z(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.Z(o,n)||H.Z(n,o)))return!1}}return H.lr(a.named,b.named)},
pk:function(a){var z=$.d_
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
pg:function(a){return H.ak(a)},
pf:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
m_:function(a){var z,y,x,w,v,u
z=$.d_.$1(a)
y=$.c5[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.f8.$2(a,z)
if(z!=null){y=$.c5[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d1(x)
$.c5[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c8[z]=x
return x}if(v==="-"){u=H.d1(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fl(a,x)
if(v==="*")throw H.b(new P.bC(z))
if(init.leafTags[z]===true){u=H.d1(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fl(a,x)},
fl:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.c9(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d1:function(a){return J.c9(a,!1,null,!!a.$isq)},
m0:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.c9(z,!1,null,!!z.$isq)
else return J.c9(z,c,null,null)},
lQ:function(){if(!0===$.d0)return
$.d0=!0
H.lR()},
lR:function(){var z,y,x,w,v,u,t,s
$.c5=Object.create(null)
$.c8=Object.create(null)
H.lM()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fm.$1(v)
if(u!=null){t=H.m0(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lM:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.aT(C.y,H.aT(C.D,H.aT(C.n,H.aT(C.n,H.aT(C.C,H.aT(C.z,H.aT(C.A(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.d_=new H.lN(v)
$.f8=new H.lO(u)
$.fm=new H.lP(t)},
aT:function(a,b){return a(b)||b},
ma:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
mb:function(a,b,c){var z,y,x
H.lx(c)
if(b==="")if(a==="")return c
else{z=a.length
y=H.f(c)
for(x=0;x<z;++x)y=y+a[x]+H.f(c)
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
h8:{"^":"ex;a,$ti",$asex:I.O,$asC:I.O,$isC:1},
h7:{"^":"e;",
gH:function(a){return this.gi(this)===0},
k:function(a){return P.cy(this)},
j:function(a,b,c){return H.h9()},
$isC:1,
$asC:null},
ha:{"^":"h7;a,b,c,$ti",
gi:function(a){return this.a},
S:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.S(0,b))return
return this.d6(b)},
d6:function(a){return this.b[a]},
O:function(a,b){var z,y,x,w
z=this.c
for(y=z.length,x=0;x<y;++x){w=z[x]
b.$2(w,this.d6(w))}}},
iq:{"^":"e;a,b,c,d,e,f",
gdZ:function(){var z=this.a
return z},
ge7:function(){var z,y,x,w
if(this.c===1)return C.h
z=this.d
y=z.length-this.e.length
if(y===0)return C.h
x=[]
for(w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
x.push(z[w])}x.fixed$length=Array
x.immutable$list=Array
return x},
ge_:function(){var z,y,x,w,v,u,t,s,r
if(this.c!==0)return C.q
z=this.e
y=z.length
x=this.d
w=x.length-y
if(y===0)return C.q
v=P.bB
u=new H.V(0,null,null,null,null,null,0,[v,null])
for(t=0;t<y;++t){if(t>=z.length)return H.h(z,t)
s=z[t]
r=w+t
if(r<0||r>=x.length)return H.h(x,r)
u.j(0,new H.cG(s),x[r])}return new H.h8(u,[v,null])}},
jh:{"^":"e;a,b,c,d,e,f,r,x",
ho:function(a,b){var z=this.d
if(typeof b!=="number")return b.ae()
if(b<z)return
return this.b[3+b-z]},
u:{
e8:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.jh(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
j5:{"^":"i:9;a,b,c",
$2:function(a,b){var z=this.a
z.b=z.b+"$"+H.f(a)
this.c.push(a)
this.b.push(b);++z.a}},
jL:{"^":"e;a,b,c,d,e,f",
Y:function(a){var z,y,x
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
u:{
ab:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
es:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
dY:{"^":"M;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+H.f(z)+"' on null"}},
iA:{"^":"M;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
u:{
cr:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iA(a,y,z?null:b.receiver)}}},
jN:{"^":"M;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
md:{"^":"i:0;a",
$1:function(a){if(!!J.k(a).$isM)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eR:{"^":"e;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z}},
lT:{"^":"i:2;a",
$0:function(){return this.a.$0()}},
lU:{"^":"i:2;a,b",
$0:function(){return this.a.$1(this.b)}},
lV:{"^":"i:2;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
lW:{"^":"i:2;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
lX:{"^":"i:2;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
i:{"^":"e;",
k:function(a){return"Closure '"+H.bW(this).trim()+"'"},
geo:function(){return this},
$iscn:1,
geo:function(){return this}},
eh:{"^":"i;"},
js:{"^":"eh;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cg:{"^":"eh;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cg))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gE:function(a){var z,y
z=this.c
if(z==null)y=H.ak(this.a)
else y=typeof z!=="object"?J.X(z):H.ak(z)
return J.fr(y,H.ak(this.b))},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+H.bV(z)},
u:{
ch:function(a){return a.a},
dj:function(a){return a.c},
fW:function(){var z=$.b_
if(z==null){z=H.bM("self")
$.b_=z}return z},
bM:function(a){var z,y,x,w,v
z=new H.cg("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
fY:{"^":"M;a",
k:function(a){return this.a},
u:{
dk:function(a,b){return new H.fY("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")}}},
ji:{"^":"M;a",
k:function(a){return"RuntimeError: "+H.f(this.a)}},
V:{"^":"e;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gH:function(a){return this.a===0},
gab:function(a){return new H.iH(this,[H.L(this,0)])},
gcF:function(a){return H.bS(this.gab(this),new H.iz(this),H.L(this,0),H.L(this,1))},
S:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d2(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d2(y,b)}else return this.hQ(b)},
hQ:function(a){var z=this.d
if(z==null)return!1
return this.aV(this.bf(z,this.aU(a)),a)>=0},
h:function(a,b){var z,y,x
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aI(z,b)
return y==null?null:y.gao()}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null)return
y=this.aI(x,b)
return y==null?null:y.gao()}else return this.hR(b)},
hR:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bf(z,this.aU(a))
x=this.aV(y,a)
if(x<0)return
return y[x].gao()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.c2()
this.b=z}this.cR(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c2()
this.c=y}this.cR(y,b,c)}else{x=this.d
if(x==null){x=this.c2()
this.d=x}w=this.aU(b)
v=this.bf(x,w)
if(v==null)this.ca(x,w,[this.c3(b,c)])
else{u=this.aV(v,b)
if(u>=0)v[u].sao(c)
else v.push(this.c3(b,c))}}},
L:function(a,b){if(typeof b==="string")return this.dm(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dm(this.c,b)
else return this.hS(b)},
hS:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.bf(z,this.aU(a))
x=this.aV(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.dw(w)
return w.gao()},
am:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
O:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(new P.af(this))
z=z.c}},
cR:function(a,b,c){var z=this.aI(a,b)
if(z==null)this.ca(a,b,this.c3(b,c))
else z.sao(c)},
dm:function(a,b){var z
if(a==null)return
z=this.aI(a,b)
if(z==null)return
this.dw(z)
this.d3(a,b)
return z.gao()},
c3:function(a,b){var z,y
z=new H.iG(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
dw:function(a){var z,y
z=a.gfE()
y=a.gfC()
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.r=this.r+1&67108863},
aU:function(a){return J.X(a)&0x3ffffff},
aV:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a_(a[y].gdS(),b))return y
return-1},
k:function(a){return P.cy(this)},
aI:function(a,b){return a[b]},
bf:function(a,b){return a[b]},
ca:function(a,b,c){a[b]=c},
d3:function(a,b){delete a[b]},
d2:function(a,b){return this.aI(a,b)!=null},
c2:function(){var z=Object.create(null)
this.ca(z,"<non-identifier-key>",z)
this.d3(z,"<non-identifier-key>")
return z},
$isic:1,
$isC:1,
$asC:null,
u:{
iy:function(a,b){return new H.V(0,null,null,null,null,null,0,[a,b])}}},
iz:{"^":"i:0;a",
$1:[function(a){return this.a.h(0,a)},null,null,2,0,null,21,"call"]},
iG:{"^":"e;dS:a<,ao:b@,fC:c<,fE:d<"},
iH:{"^":"c;a,$ti",
gi:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.iI(z,z.r,null,null)
y.c=z.e
return y}},
iI:{"^":"e;a,b,c,d",
gw:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.b(new P.af(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lN:{"^":"i:0;a",
$1:function(a){return this.a(a)}},
lO:{"^":"i:10;a",
$2:function(a,b){return this.a(a,b)}},
lP:{"^":"i:11;a",
$1:function(a){return this.a(a)}},
jx:{"^":"e;a,b,c",
h:function(a,b){if(b!==0)H.B(P.b6(b,null,null))
return this.c}}}],["","",,H,{"^":"",
lH:function(a){var z=H.y(a?Object.keys(a):[],[null])
z.fixed$length=Array
return z}}],["","",,H,{"^":"",
m6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",cz:{"^":"d;",$iscz:1,$isfX:1,"%":"ArrayBuffer"},by:{"^":"d;",
fu:function(a,b,c,d){var z=P.I(b,0,c,d,null)
throw H.b(z)},
cV:function(a,b,c,d){if(b>>>0!==b||b>c)this.fu(a,b,c,d)},
$isby:1,
$isa1:1,
"%":";ArrayBufferView;cA|dR|dT|bT|dS|dU|ah"},ns:{"^":"by;",$isa1:1,"%":"DataView"},cA:{"^":"by;",
gi:function(a){return a.length},
dt:function(a,b,c,d,e){var z,y,x
z=a.length
this.cV(a,b,z,"start")
this.cV(a,c,z,"end")
if(b>c)throw H.b(P.I(b,0,c,null,null))
y=c-b
x=d.length
if(x-e<y)throw H.b(new P.T("Not enough elements"))
if(e!==0||x!==y)d=d.subarray(e,e+y)
a.set(d,b)},
$isq:1,
$asq:I.O,
$iso:1,
$aso:I.O},bT:{"^":"dT;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.J(a,b))
return a[b]},
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.B(H.J(a,b))
a[b]=c},
a0:function(a,b,c,d,e){if(!!J.k(d).$isbT){this.dt(a,b,c,d,e)
return}this.cN(a,b,c,d,e)}},dR:{"^":"cA+z;",$asq:I.O,$aso:I.O,
$asa:function(){return[P.ad]},
$asc:function(){return[P.ad]},
$isa:1,
$isc:1},dT:{"^":"dR+dH;",$asq:I.O,$aso:I.O,
$asa:function(){return[P.ad]},
$asc:function(){return[P.ad]}},ah:{"^":"dU;",
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.B(H.J(a,b))
a[b]=c},
a0:function(a,b,c,d,e){if(!!J.k(d).$isah){this.dt(a,b,c,d,e)
return}this.cN(a,b,c,d,e)},
$isa:1,
$asa:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]}},dS:{"^":"cA+z;",$asq:I.O,$aso:I.O,
$asa:function(){return[P.v]},
$asc:function(){return[P.v]},
$isa:1,
$isc:1},dU:{"^":"dS+dH;",$asq:I.O,$aso:I.O,
$asa:function(){return[P.v]},
$asc:function(){return[P.v]}},nt:{"^":"bT;",$isa1:1,$isa:1,
$asa:function(){return[P.ad]},
$isc:1,
$asc:function(){return[P.ad]},
"%":"Float32Array"},nu:{"^":"bT;",$isa1:1,$isa:1,
$asa:function(){return[P.ad]},
$isc:1,
$asc:function(){return[P.ad]},
"%":"Float64Array"},nv:{"^":"ah;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.J(a,b))
return a[b]},
$isa1:1,
$isa:1,
$asa:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":"Int16Array"},nw:{"^":"ah;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.J(a,b))
return a[b]},
$isa1:1,
$isa:1,
$asa:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":"Int32Array"},nx:{"^":"ah;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.J(a,b))
return a[b]},
$isa1:1,
$isa:1,
$asa:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":"Int8Array"},ny:{"^":"ah;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.J(a,b))
return a[b]},
$isa1:1,
$isa:1,
$asa:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":"Uint16Array"},nz:{"^":"ah;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.J(a,b))
return a[b]},
$isa1:1,
$isa:1,
$asa:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":"Uint32Array"},nA:{"^":"ah;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.J(a,b))
return a[b]},
$isa1:1,
$isa:1,
$asa:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":"CanvasPixelArray|Uint8ClampedArray"},nB:{"^":"ah;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.B(H.J(a,b))
return a[b]},
$isa1:1,
$isa:1,
$asa:function(){return[P.v]},
$isc:1,
$asc:function(){return[P.v]},
"%":";Uint8Array"}}],["","",,P,{"^":"",
jT:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.ls()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a6(new P.jV(z),1)).observe(y,{childList:true})
return new P.jU(z,y,x)}else if(self.setImmediate!=null)return P.lt()
return P.lu()},
oN:[function(a){++init.globalState.f.b
self.scheduleImmediate(H.a6(new P.jW(a),0))},"$1","ls",2,0,6],
oO:[function(a){++init.globalState.f.b
self.setImmediate(H.a6(new P.jX(a),0))},"$1","lt",2,0,6],
oP:[function(a){P.cH(C.m,a)},"$1","lu",2,0,6],
lh:function(a,b,c){if(H.aH(a,{func:1,args:[P.b4,P.b4]}))return a.$2(b,c)
else return a.$1(b)},
f0:function(a,b){if(H.aH(a,{func:1,args:[P.b4,P.b4]})){b.toString
return a}else{b.toString
return a}},
hr:function(a,b,c){var z
if(a==null)a=new P.bU()
z=$.t
if(z!==C.b)z.toString
z=new P.W(0,z,null,[c])
z.cU(a,b)
return z},
lj:function(){var z,y
for(;z=$.aR,z!=null;){$.bb=null
y=J.d8(z)
$.aR=y
if(y==null)$.ba=null
z.gdG().$0()}},
pe:[function(){$.cU=!0
try{P.lj()}finally{$.bb=null
$.cU=!1
if($.aR!=null)$.$get$cK().$1(P.fc())}},"$0","fc",0,0,1],
f5:function(a){var z=new P.ez(a,null)
if($.aR==null){$.ba=z
$.aR=z
if(!$.cU)$.$get$cK().$1(P.fc())}else{$.ba.b=z
$.ba=z}},
ln:function(a){var z,y,x
z=$.aR
if(z==null){P.f5(a)
$.bb=$.ba
return}y=new P.ez(a,null)
x=$.bb
if(x==null){y.b=z
$.bb=y
$.aR=y}else{y.b=x.b
x.b=y
$.bb=y
if(y.b==null)$.ba=y}},
fn:function(a){var z=$.t
if(C.b===z){P.aG(null,null,C.b,a)
return}z.toString
P.aG(null,null,z,z.cd(a,!0))},
f4:function(a){var z,y,x,w
if(a==null)return
try{a.$0()}catch(x){z=H.E(x)
y=H.U(x)
w=$.t
w.toString
P.aS(null,null,w,z,y)}},
pc:[function(a){},"$1","lv",2,0,21,1],
lk:[function(a,b){var z=$.t
z.toString
P.aS(null,null,z,a,b)},function(a){return P.lk(a,null)},"$2","$1","lw",2,2,3,0],
pd:[function(){},"$0","fb",0,0,1],
eV:function(a,b,c){$.t.toString
a.as(b,c)},
jD:function(a,b){var z=$.t
if(z===C.b){z.toString
return P.cH(a,b)}return P.cH(a,z.cd(b,!0))},
cH:function(a,b){var z=C.d.bn(a.a,1000)
return H.jA(z<0?0:z,b)},
jQ:function(){return $.t},
aS:function(a,b,c,d,e){var z={}
z.a=d
P.ln(new P.lm(z,e))},
f1:function(a,b,c,d){var z,y
y=$.t
if(y===c)return d.$0()
$.t=c
z=y
try{y=d.$0()
return y}finally{$.t=z}},
f3:function(a,b,c,d,e){var z,y
y=$.t
if(y===c)return d.$1(e)
$.t=c
z=y
try{y=d.$1(e)
return y}finally{$.t=z}},
f2:function(a,b,c,d,e,f){var z,y
y=$.t
if(y===c)return d.$2(e,f)
$.t=c
z=y
try{y=d.$2(e,f)
return y}finally{$.t=z}},
aG:function(a,b,c,d){var z=C.b!==c
if(z)d=c.cd(d,!(!z||!1))
P.f5(d)},
jV:{"^":"i:0;a",
$1:[function(a){var z,y;--init.globalState.f.b
z=this.a
y=z.a
z.a=null
y.$0()},null,null,2,0,null,5,"call"]},
jU:{"^":"i:12;a,b,c",
$1:function(a){var z,y;++init.globalState.f.b
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jW:{"^":"i:2;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
jX:{"^":"i:2;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
jZ:{"^":"eD;a,$ti"},
k_:{"^":"k2;aF:y@,a6:z@,ba:Q@,x,a,b,c,d,e,f,r,$ti",
fk:function(a){return(this.y&1)===a},
h_:function(){this.y^=1},
gfw:function(){return(this.y&2)!==0},
fU:function(){this.y|=4},
gfK:function(){return(this.y&4)!==0},
bh:[function(){},"$0","gbg",0,0,1],
bj:[function(){},"$0","gbi",0,0,1]},
cL:{"^":"e;a4:c<,$ti",
gaW:function(){return!1},
gaJ:function(){return this.c<4},
fi:function(){var z=this.r
if(z!=null)return z
z=new P.W(0,$.t,null,[null])
this.r=z
return z},
aC:function(a){var z
a.saF(this.c&1)
z=this.e
this.e=a
a.sa6(null)
a.sba(z)
if(z==null)this.d=a
else z.sa6(a)},
dn:function(a){var z,y
z=a.gba()
y=a.ga6()
if(z==null)this.d=y
else z.sa6(y)
if(y==null)this.e=z
else y.sba(z)
a.sba(a)
a.sa6(a)},
fZ:function(a,b,c,d){var z,y,x
if((this.c&4)!==0){if(c==null)c=P.fb()
z=new P.k8($.t,0,c,this.$ti)
z.ds()
return z}z=$.t
y=d?1:0
x=new P.k_(0,null,null,this,null,null,null,z,y,null,null,this.$ti)
x.cP(a,b,c,d,H.L(this,0))
x.Q=x
x.z=x
this.aC(x)
z=this.d
y=this.e
if(z==null?y==null:z===y)P.f4(this.a)
return x},
fG:function(a){if(a.ga6()===a)return
if(a.gfw())a.fU()
else{this.dn(a)
if((this.c&2)===0&&this.d==null)this.bO()}return},
fH:function(a){},
fI:function(a){},
b9:["eO",function(){if((this.c&4)!==0)return new P.T("Cannot add new events after calling close")
return new P.T("Cannot add new events while doing an addStream")}],
D:[function(a,b){if(!this.gaJ())throw H.b(this.b9())
this.bl(b)},"$1","gh2",2,0,function(){return H.bd(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"cL")}],
h5:[function(a,b){if(!this.gaJ())throw H.b(this.b9())
$.t.toString
this.bm(a,b)},function(a){return this.h5(a,null)},"is","$2","$1","gh4",2,2,3,0],
dK:function(a){var z
if((this.c&4)!==0)return this.r
if(!this.gaJ())throw H.b(this.b9())
this.c|=4
z=this.fi()
this.aL()
return z},
c_:function(a){var z,y,x,w
z=this.c
if((z&2)!==0)throw H.b(new P.T("Cannot fire new event. Controller is already firing an event"))
y=this.d
if(y==null)return
x=z&1
this.c=z^3
for(;y!=null;)if(y.fk(x)){y.saF(y.gaF()|2)
a.$1(y)
y.h_()
w=y.ga6()
if(y.gfK())this.dn(y)
y.saF(y.gaF()&4294967293)
y=w}else y=y.ga6()
this.c&=4294967293
if(this.d==null)this.bO()},
bO:function(){if((this.c&4)!==0&&this.r.a===0)this.r.bM(null)
P.f4(this.b)}},
c3:{"^":"cL;a,b,c,d,e,f,r,$ti",
gaJ:function(){return P.cL.prototype.gaJ.call(this)===!0&&(this.c&2)===0},
b9:function(){if((this.c&2)!==0)return new P.T("Cannot fire new event. Controller is already firing an event")
return this.eO()},
bl:function(a){var z=this.d
if(z==null)return
if(z===this.e){this.c|=2
z.aD(0,a)
this.c&=4294967293
if(this.d==null)this.bO()
return}this.c_(new P.l1(this,a))},
bm:function(a,b){if(this.d==null)return
this.c_(new P.l3(this,a,b))},
aL:function(){if(this.d!=null)this.c_(new P.l2(this))
else this.r.bM(null)}},
l1:{"^":"i;a,b",
$1:function(a){a.aD(0,this.b)},
$S:function(){return H.bd(function(a){return{func:1,args:[[P.aE,a]]}},this.a,"c3")}},
l3:{"^":"i;a,b,c",
$1:function(a){a.as(this.b,this.c)},
$S:function(){return H.bd(function(a){return{func:1,args:[[P.aE,a]]}},this.a,"c3")}},
l2:{"^":"i;a",
$1:function(a){a.cT()},
$S:function(){return H.bd(function(a){return{func:1,args:[[P.aE,a]]}},this.a,"c3")}},
eC:{"^":"e;$ti",
hf:[function(a,b){if(a==null)a=new P.bU()
if(this.a.a!==0)throw H.b(new P.T("Future already completed"))
$.t.toString
this.a7(a,b)},function(a){return this.hf(a,null)},"ci","$2","$1","ghe",2,2,3,0]},
eA:{"^":"eC;a,$ti",
aO:function(a,b){var z=this.a
if(z.a!==0)throw H.b(new P.T("Future already completed"))
z.bM(b)},
a7:function(a,b){this.a.cU(a,b)}},
eS:{"^":"eC;a,$ti",
aO:function(a,b){var z=this.a
if(z.a!==0)throw H.b(new P.T("Future already completed"))
z.bb(b)},
a7:function(a,b){this.a.a7(a,b)}},
eJ:{"^":"e;a8:a@,F:b>,c,dG:d<,e",
gak:function(){return this.b.b},
gdQ:function(){return(this.c&1)!==0},
ghL:function(){return(this.c&2)!==0},
gdP:function(){return this.c===8},
ghM:function(){return this.e!=null},
hJ:function(a){return this.b.b.cz(this.d,a)},
hZ:function(a){if(this.c!==6)return!0
return this.b.b.cz(this.d,J.bi(a))},
dO:function(a){var z,y,x
z=this.e
y=J.l(a)
x=this.b.b
if(H.aH(z,{func:1,args:[,,]}))return x.ia(z,y.gU(a),a.gag())
else return x.cz(z,y.gU(a))},
hK:function(){return this.b.b.eb(this.d)}},
W:{"^":"e;a4:a<,ak:b<,au:c<,$ti",
gfv:function(){return this.a===2},
gc1:function(){return this.a>=4},
gfp:function(){return this.a===8},
fR:function(a){this.a=2
this.c=a},
eg:function(a,b){var z,y
z=$.t
if(z!==C.b){z.toString
if(b!=null)b=P.f0(b,z)}y=new P.W(0,$.t,null,[null])
this.aC(new P.eJ(null,y,b==null?1:3,a,b))
return y},
cB:function(a){return this.eg(a,null)},
el:function(a){var z,y
z=$.t
y=new P.W(0,z,null,this.$ti)
if(z!==C.b)z.toString
this.aC(new P.eJ(null,y,8,a,null))
return y},
fT:function(){this.a=1},
f9:function(){this.a=0},
gai:function(){return this.c},
gf7:function(){return this.c},
fV:function(a){this.a=4
this.c=a},
fS:function(a){this.a=8
this.c=a},
cW:function(a){this.a=a.ga4()
this.c=a.gau()},
aC:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gc1()){y.aC(a)
return}this.a=y.ga4()
this.c=y.gau()}z=this.b
z.toString
P.aG(null,null,z,new P.kg(this,a))}},
dl:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.ga8()!=null;)w=w.ga8()
w.sa8(x)}}else{if(y===2){v=this.c
if(!v.gc1()){v.dl(a)
return}this.a=v.ga4()
this.c=v.gau()}z.a=this.dq(a)
y=this.b
y.toString
P.aG(null,null,y,new P.kn(z,this))}},
at:function(){var z=this.c
this.c=null
return this.dq(z)},
dq:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.ga8()
z.sa8(y)}return y},
bb:function(a){var z,y
z=this.$ti
if(H.bI(a,"$isar",z,"$asar"))if(H.bI(a,"$isW",z,null))P.c1(a,this)
else P.eK(a,this)
else{y=this.at()
this.a=4
this.c=a
P.aP(this,y)}},
a7:[function(a,b){var z=this.at()
this.a=8
this.c=new P.bK(a,b)
P.aP(this,z)},function(a){return this.a7(a,null)},"io","$2","$1","gd1",2,2,3,0,3,4],
bM:function(a){var z
if(H.bI(a,"$isar",this.$ti,"$asar")){this.f6(a)
return}this.a=1
z=this.b
z.toString
P.aG(null,null,z,new P.ki(this,a))},
f6:function(a){var z
if(H.bI(a,"$isW",this.$ti,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aG(null,null,z,new P.km(this,a))}else P.c1(a,this)
return}P.eK(a,this)},
cU:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aG(null,null,z,new P.kh(this,a,b))},
f1:function(a,b){this.a=4
this.c=a},
$isar:1,
u:{
eK:function(a,b){var z,y,x
b.fT()
try{a.eg(new P.kj(b),new P.kk(b))}catch(x){z=H.E(x)
y=H.U(x)
P.fn(new P.kl(b,z,y))}},
c1:function(a,b){var z
for(;a.gfv();)a=a.gf7()
if(a.gc1()){z=b.at()
b.cW(a)
P.aP(b,z)}else{z=b.gau()
b.fR(a)
a.dl(z)}},
aP:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z={}
z.a=a
for(y=a;!0;){x={}
w=y.gfp()
if(b==null){if(w){v=z.a.gai()
y=z.a.gak()
u=J.bi(v)
t=v.gag()
y.toString
P.aS(null,null,y,u,t)}return}for(;b.ga8()!=null;b=s){s=b.ga8()
b.sa8(null)
P.aP(z.a,b)}r=z.a.gau()
x.a=w
x.b=r
y=!w
if(!y||b.gdQ()||b.gdP()){q=b.gak()
if(w){u=z.a.gak()
u.toString
u=u==null?q==null:u===q
if(!u)q.toString
else u=!0
u=!u}else u=!1
if(u){v=z.a.gai()
y=z.a.gak()
u=J.bi(v)
t=v.gag()
y.toString
P.aS(null,null,y,u,t)
return}p=$.t
if(p==null?q!=null:p!==q)$.t=q
else p=null
if(b.gdP())new P.kq(z,x,w,b).$0()
else if(y){if(b.gdQ())new P.kp(x,b,r).$0()}else if(b.ghL())new P.ko(z,x,b).$0()
if(p!=null)$.t=p
y=x.b
if(!!J.k(y).$isar){o=J.d9(b)
if(y.a>=4){b=o.at()
o.cW(y)
z.a=y
continue}else P.c1(y,o)
return}}o=J.d9(b)
b=o.at()
y=x.a
u=x.b
if(!y)o.fV(u)
else o.fS(u)
z.a=o
y=o}}}},
kg:{"^":"i:2;a,b",
$0:function(){P.aP(this.a,this.b)}},
kn:{"^":"i:2;a,b",
$0:function(){P.aP(this.b,this.a.a)}},
kj:{"^":"i:0;a",
$1:[function(a){var z=this.a
z.f9()
z.bb(a)},null,null,2,0,null,1,"call"]},
kk:{"^":"i:13;a",
$2:[function(a,b){this.a.a7(a,b)},function(a){return this.$2(a,null)},"$1",null,null,null,2,2,null,0,3,4,"call"]},
kl:{"^":"i:2;a,b,c",
$0:function(){this.a.a7(this.b,this.c)}},
ki:{"^":"i:2;a,b",
$0:function(){var z,y
z=this.a
y=z.at()
z.a=4
z.c=this.b
P.aP(z,y)}},
km:{"^":"i:2;a,b",
$0:function(){P.c1(this.b,this.a)}},
kh:{"^":"i:2;a,b,c",
$0:function(){this.a.a7(this.b,this.c)}},
kq:{"^":"i:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.d.hK()}catch(w){y=H.E(w)
x=H.U(w)
if(this.c){v=J.bi(this.a.a.gai())
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.gai()
else u.b=new P.bK(y,x)
u.a=!0
return}if(!!J.k(z).$isar){if(z instanceof P.W&&z.ga4()>=4){if(z.ga4()===8){v=this.b
v.b=z.gau()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.cB(new P.kr(t))
v.a=!1}}},
kr:{"^":"i:0;a",
$1:[function(a){return this.a},null,null,2,0,null,5,"call"]},
kp:{"^":"i:1;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.hJ(this.c)}catch(x){z=H.E(x)
y=H.U(x)
w=this.a
w.b=new P.bK(z,y)
w.a=!0}}},
ko:{"^":"i:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.gai()
w=this.c
if(w.hZ(z)===!0&&w.ghM()){v=this.b
v.b=w.dO(z)
v.a=!1}}catch(u){y=H.E(u)
x=H.U(u)
w=this.a
v=J.bi(w.a.gai())
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.gai()
else s.b=new P.bK(y,x)
s.a=!0}}},
ez:{"^":"e;dG:a<,P:b*"},
a4:{"^":"e;$ti",
ap:function(a,b){return new P.kH(b,this,[H.K(this,"a4",0),null])},
hF:function(a,b){return new P.ks(a,b,this,[H.K(this,"a4",0)])},
dO:function(a){return this.hF(a,null)},
gi:function(a){var z,y
z={}
y=new P.W(0,$.t,null,[P.v])
z.a=0
this.V(new P.jt(z),!0,new P.ju(z,y),y.gd1())
return y},
cD:function(a){var z,y,x
z=H.K(this,"a4",0)
y=H.y([],[z])
x=new P.W(0,$.t,null,[[P.a,z]])
this.V(new P.jv(this,y),!0,new P.jw(y,x),x.gd1())
return x}},
jt:{"^":"i:0;a",
$1:[function(a){++this.a.a},null,null,2,0,null,5,"call"]},
ju:{"^":"i:2;a,b",
$0:[function(){this.b.bb(this.a.a)},null,null,0,0,null,"call"]},
jv:{"^":"i;a,b",
$1:[function(a){this.b.push(a)},null,null,2,0,null,10,"call"],
$S:function(){return H.bd(function(a){return{func:1,args:[a]}},this.a,"a4")}},
jw:{"^":"i:2;a,b",
$0:[function(){this.b.bb(this.a)},null,null,0,0,null,"call"]},
ed:{"^":"e;$ti"},
eD:{"^":"kU;a,$ti",
gE:function(a){return(H.ak(this.a)^892482866)>>>0},
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.eD))return!1
return b.a===this.a}},
k2:{"^":"aE;$ti",
c4:function(){return this.x.fG(this)},
bh:[function(){this.x.fH(this)},"$0","gbg",0,0,1],
bj:[function(){this.x.fI(this)},"$0","gbi",0,0,1]},
aE:{"^":"e;ak:d<,a4:e<,$ti",
b_:function(a,b){var z=this.e
if((z&8)!==0)return
this.e=(z+128|4)>>>0
if(z<128&&this.r!=null)this.r.dI()
if((z&4)===0&&(this.e&32)===0)this.dd(this.gbg())},
cq:function(a){return this.b_(a,null)},
cu:function(a){var z=this.e
if((z&8)!==0)return
if(z>=128){z-=128
this.e=z
if(z<128){if((z&64)!==0){z=this.r
z=!z.gH(z)}else z=!1
if(z)this.r.bC(this)
else{z=(this.e&4294967291)>>>0
this.e=z
if((z&32)===0)this.dd(this.gbi())}}}},
X:function(a){var z=(this.e&4294967279)>>>0
this.e=z
if((z&8)===0)this.bP()
z=this.f
return z==null?$.$get$br():z},
gaW:function(){return this.e>=128},
bP:function(){var z=(this.e|8)>>>0
this.e=z
if((z&64)!==0)this.r.dI()
if((this.e&32)===0)this.r=null
this.f=this.c4()},
aD:["eP",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.bl(b)
else this.bL(new P.k5(b,null,[H.K(this,"aE",0)]))}],
as:["eQ",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.bm(a,b)
else this.bL(new P.k7(a,b,null))}],
cT:function(){var z=this.e
if((z&8)!==0)return
z=(z|2)>>>0
this.e=z
if(z<32)this.aL()
else this.bL(C.v)},
bh:[function(){},"$0","gbg",0,0,1],
bj:[function(){},"$0","gbi",0,0,1],
c4:function(){return},
bL:function(a){var z,y
z=this.r
if(z==null){z=new P.kV(null,null,0,[H.K(this,"aE",0)])
this.r=z}z.D(0,a)
y=this.e
if((y&64)===0){y=(y|64)>>>0
this.e=y
if(y<128)this.r.bC(this)}},
bl:function(a){var z=this.e
this.e=(z|32)>>>0
this.d.cA(this.a,a)
this.e=(this.e&4294967263)>>>0
this.bR((z&4)!==0)},
bm:function(a,b){var z,y
z=this.e
y=new P.k1(this,a,b)
if((z&1)!==0){this.e=(z|16)>>>0
this.bP()
z=this.f
if(!!J.k(z).$isar&&z!==$.$get$br())z.el(y)
else y.$0()}else{y.$0()
this.bR((z&4)!==0)}},
aL:function(){var z,y
z=new P.k0(this)
this.bP()
this.e=(this.e|16)>>>0
y=this.f
if(!!J.k(y).$isar&&y!==$.$get$br())y.el(z)
else z.$0()},
dd:function(a){var z=this.e
this.e=(z|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.bR((z&4)!==0)},
bR:function(a){var z,y
if((this.e&64)!==0){z=this.r
z=z.gH(z)}else z=!1
if(z){z=(this.e&4294967231)>>>0
this.e=z
if((z&4)!==0)if(z<128){z=this.r
z=z==null||z.gH(z)}else z=!1
else z=!1
if(z)this.e=(this.e&4294967291)>>>0}for(;!0;a=y){z=this.e
if((z&8)!==0){this.r=null
return}y=(z&4)!==0
if(a===y)break
this.e=(z^32)>>>0
if(y)this.bh()
else this.bj()
this.e=(this.e&4294967263)>>>0}z=this.e
if((z&64)!==0&&z<128)this.r.bC(this)},
cP:function(a,b,c,d,e){var z,y
z=a==null?P.lv():a
y=this.d
y.toString
this.a=z
this.b=P.f0(b==null?P.lw():b,y)
this.c=c==null?P.fb():c}},
k1:{"^":"i:1;a,b,c",
$0:function(){var z,y,x,w,v,u
z=this.a
y=z.e
if((y&8)!==0&&(y&16)===0)return
z.e=(y|32)>>>0
y=z.b
x=H.aH(y,{func:1,args:[P.e,P.bA]})
w=z.d
v=this.b
u=z.b
if(x)w.ib(u,v,this.c)
else w.cA(u,v)
z.e=(z.e&4294967263)>>>0}},
k0:{"^":"i:1;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=(y|42)>>>0
z.d.cw(z.c)
z.e=(z.e&4294967263)>>>0}},
kU:{"^":"a4;$ti",
V:function(a,b,c,d){return this.a.fZ(a,d,c,!0===b)},
aY:function(a,b,c){return this.V(a,null,b,c)}},
eE:{"^":"e;P:a*"},
k5:{"^":"eE;b,a,$ti",
cr:function(a){a.bl(this.b)}},
k7:{"^":"eE;U:b>,ag:c<,a",
cr:function(a){a.bm(this.b,this.c)}},
k6:{"^":"e;",
cr:function(a){a.aL()},
gP:function(a){return},
sP:function(a,b){throw H.b(new P.T("No events after a done."))}},
kJ:{"^":"e;a4:a<",
bC:function(a){var z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.fn(new P.kK(this,a))
this.a=1},
dI:function(){if(this.a===1)this.a=3}},
kK:{"^":"i:2;a,b",
$0:function(){var z,y,x,w
z=this.a
y=z.a
z.a=0
if(y===3)return
x=z.b
w=J.d8(x)
z.b=w
if(w==null)z.c=null
x.cr(this.b)}},
kV:{"^":"kJ;b,c,a,$ti",
gH:function(a){return this.c==null},
D:function(a,b){var z=this.c
if(z==null){this.c=b
this.b=b}else{J.de(z,b)
this.c=b}}},
k8:{"^":"e;ak:a<,a4:b<,c,$ti",
gaW:function(){return this.b>=4},
ds:function(){if((this.b&2)!==0)return
var z=this.a
z.toString
P.aG(null,null,z,this.gfQ())
this.b=(this.b|2)>>>0},
b_:function(a,b){this.b+=4},
cq:function(a){return this.b_(a,null)},
cu:function(a){var z=this.b
if(z>=4){z-=4
this.b=z
if(z<4&&(z&1)===0)this.ds()}},
X:function(a){return $.$get$br()},
aL:[function(){var z=(this.b&4294967293)>>>0
this.b=z
if(z>=4)return
this.b=(z|1)>>>0
z=this.c
if(z!=null)this.a.cw(z)},"$0","gfQ",0,0,1]},
bE:{"^":"a4;$ti",
V:function(a,b,c,d){return this.fc(a,d,c,!0===b)},
aY:function(a,b,c){return this.V(a,null,b,c)},
fc:function(a,b,c,d){return P.kf(this,a,b,c,d,H.K(this,"bE",0),H.K(this,"bE",1))},
de:function(a,b){b.aD(0,a)},
df:function(a,b,c){c.as(a,b)},
$asa4:function(a,b){return[b]}},
eH:{"^":"aE;x,y,a,b,c,d,e,f,r,$ti",
aD:function(a,b){if((this.e&2)!==0)return
this.eP(0,b)},
as:function(a,b){if((this.e&2)!==0)return
this.eQ(a,b)},
bh:[function(){var z=this.y
if(z==null)return
z.cq(0)},"$0","gbg",0,0,1],
bj:[function(){var z=this.y
if(z==null)return
z.cu(0)},"$0","gbi",0,0,1],
c4:function(){var z=this.y
if(z!=null){this.y=null
return z.X(0)}return},
ip:[function(a){this.x.de(a,this)},"$1","gfm",2,0,function(){return H.bd(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"eH")},10],
ir:[function(a,b){this.x.df(a,b,this)},"$2","gfo",4,0,14,3,4],
iq:[function(){this.cT()},"$0","gfn",0,0,1],
f0:function(a,b,c,d,e,f,g){this.y=this.x.a.aY(this.gfm(),this.gfn(),this.gfo())},
$asaE:function(a,b){return[b]},
u:{
kf:function(a,b,c,d,e,f,g){var z,y
z=$.t
y=e?1:0
y=new P.eH(a,null,null,null,null,z,y,null,null,[f,g])
y.cP(b,c,d,e,g)
y.f0(a,b,c,d,e,f,g)
return y}}},
kH:{"^":"bE;b,a,$ti",
de:function(a,b){var z,y,x,w
z=null
try{z=this.b.$1(a)}catch(w){y=H.E(w)
x=H.U(w)
P.eV(b,y,x)
return}b.aD(0,z)}},
ks:{"^":"bE;b,c,a,$ti",
df:function(a,b,c){var z,y,x,w,v
z=!0
if(z===!0)try{P.lh(this.b,a,b)}catch(w){y=H.E(w)
x=H.U(w)
v=y
if(v==null?a==null:v===a)c.as(a,b)
else P.eV(c,y,x)
return}else c.as(a,b)},
$asbE:function(a){return[a,a]},
$asa4:null},
bK:{"^":"e;U:a>,ag:b<",
k:function(a){return H.f(this.a)},
$isM:1},
l8:{"^":"e;"},
lm:{"^":"i:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bU()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=J.F(y)
throw x}},
kM:{"^":"l8;",
cw:function(a){var z,y,x,w
try{if(C.b===$.t){x=a.$0()
return x}x=P.f1(null,null,this,a)
return x}catch(w){z=H.E(w)
y=H.U(w)
x=P.aS(null,null,this,z,y)
return x}},
cA:function(a,b){var z,y,x,w
try{if(C.b===$.t){x=a.$1(b)
return x}x=P.f3(null,null,this,a,b)
return x}catch(w){z=H.E(w)
y=H.U(w)
x=P.aS(null,null,this,z,y)
return x}},
ib:function(a,b,c){var z,y,x,w
try{if(C.b===$.t){x=a.$2(b,c)
return x}x=P.f2(null,null,this,a,b,c)
return x}catch(w){z=H.E(w)
y=H.U(w)
x=P.aS(null,null,this,z,y)
return x}},
cd:function(a,b){if(b)return new P.kN(this,a)
else return new P.kO(this,a)},
ha:function(a,b){return new P.kP(this,a)},
h:function(a,b){return},
eb:function(a){if($.t===C.b)return a.$0()
return P.f1(null,null,this,a)},
cz:function(a,b){if($.t===C.b)return a.$1(b)
return P.f3(null,null,this,a,b)},
ia:function(a,b,c){if($.t===C.b)return a.$2(b,c)
return P.f2(null,null,this,a,b,c)}},
kN:{"^":"i:2;a,b",
$0:function(){return this.a.cw(this.b)}},
kO:{"^":"i:2;a,b",
$0:function(){return this.a.eb(this.b)}},
kP:{"^":"i:0;a,b",
$1:[function(a){return this.a.cA(this.b,a)},null,null,2,0,null,19,"call"]}}],["","",,P,{"^":"",
iJ:function(a,b){return new H.V(0,null,null,null,null,null,0,[a,b])},
b2:function(){return new H.V(0,null,null,null,null,null,0,[null,null])},
at:function(a){return H.lI(a,new H.V(0,null,null,null,null,null,0,[null,null]))},
il:function(a,b,c){var z,y
if(P.cV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$bc()
y.push(a)
try{P.li(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.ee(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bR:function(a,b,c){var z,y,x
if(P.cV(a))return b+"..."+c
z=new P.aO(b)
y=$.$get$bc()
y.push(a)
try{x=z
x.sl(P.ee(x.gl(),a,", "))}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.sl(y.gl()+c)
y=z.gl()
return y.charCodeAt(0)==0?y:y},
cV:function(a){var z,y
for(z=0;y=$.$get$bc(),z<y.length;++z)if(a===y[z])return!0
return!1},
li:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.v())return
w=H.f(z.gw())
b.push(w)
y+=w.length+2;++x}if(!z.v()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gw();++x
if(!z.v()){if(x<=4){b.push(H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gw();++x
for(;z.v();t=s,s=r){r=z.gw();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.f(t)
v=H.f(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
aa:function(a,b,c,d){return new P.kA(0,null,null,null,null,null,0,[d])},
dP:function(a,b){var z,y,x
z=P.aa(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.H)(a),++x)z.D(0,a[x])
return z},
cy:function(a){var z,y,x
z={}
if(P.cV(a))return"{...}"
y=new P.aO("")
try{$.$get$bc().push(a)
x=y
x.sl(x.gl()+"{")
z.a=!0
a.O(0,new P.iN(z,y))
z=y
z.sl(z.gl()+"}")}finally{z=$.$get$bc()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gl()
return z.charCodeAt(0)==0?z:z},
eQ:{"^":"V;a,b,c,d,e,f,r,$ti",
aU:function(a){return H.m5(a)&0x3ffffff},
aV:function(a,b){var z,y,x
if(a==null)return-1
z=a.length
for(y=0;y<z;++y){x=a[y].gdS()
if(x==null?b==null:x===b)return y}return-1},
u:{
b9:function(a,b){return new P.eQ(0,null,null,null,null,null,0,[a,b])}}},
kA:{"^":"kt;a,b,c,d,e,f,r,$ti",
gI:function(a){var z=new P.eP(this,this.r,null,null)
z.c=this.e
return z},
gi:function(a){return this.a},
M:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.fb(b)},
fb:function(a){var z=this.d
if(z==null)return!1
return this.be(z[this.bc(a)],a)>=0},
dX:function(a){var z
if(!(typeof a==="string"&&a!=="__proto__"))z=typeof a==="number"&&(a&0x3ffffff)===a
else z=!0
if(z)return this.M(0,a)?a:null
else return this.fA(a)},
fA:function(a){var z,y,x
z=this.d
if(z==null)return
y=z[this.bc(a)]
x=this.be(y,a)
if(x<0)return
return J.aX(y,x).gbX()},
D:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.b=y
z=y}return this.cX(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.c=y
x=y}return this.cX(x,b)}else return this.a1(0,b)},
a1:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.kC()
this.d=z}y=this.bc(b)
x=z[y]
if(x==null)z[y]=[this.bS(b)]
else{if(this.be(x,b)>=0)return!1
x.push(this.bS(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d_(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d_(this.c,b)
else return this.fJ(0,b)},
fJ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.bc(b)]
x=this.be(y,b)
if(x<0)return!1
this.d0(y.splice(x,1)[0])
return!0},
am:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
cX:function(a,b){if(a[b]!=null)return!1
a[b]=this.bS(b)
return!0},
d_:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.d0(z)
delete a[b]
return!0},
bS:function(a){var z,y
z=new P.kB(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
d0:function(a){var z,y
z=a.gcZ()
y=a.gcY()
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.scZ(z);--this.a
this.r=this.r+1&67108863},
bc:function(a){return J.X(a)&0x3ffffff},
be:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.a_(a[y].gbX(),b))return y
return-1},
$isc:1,
$asc:null,
u:{
kC:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
kB:{"^":"e;bX:a<,cY:b<,cZ:c@"},
eP:{"^":"e;a,b,c,d",
gw:function(){return this.d},
v:function(){var z=this.a
if(this.b!==z.r)throw H.b(new P.af(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.gbX()
this.c=this.c.gcY()
return!0}}}},
kt:{"^":"jk;$ti"},
cu:{"^":"iV;$ti"},
iV:{"^":"e+z;",$asa:null,$asc:null,$isa:1,$isc:1},
z:{"^":"e;$ti",
gI:function(a){return new H.cv(a,this.gi(a),0,null)},
A:function(a,b){return this.h(a,b)},
ap:function(a,b){return new H.bx(a,b,[H.K(a,"z",0),null])},
D:function(a,b){var z=this.gi(a)
this.si(a,z+1)
this.j(a,z,b)},
a0:["cN",function(a,b,c,d,e){var z,y,x,w,v
P.cD(b,c,this.gi(a),null,null,null)
z=c-b
if(z===0)return
if(H.bI(d,"$isa",[H.K(a,"z",0)],"$asa")){y=e
x=d}else{x=new H.cF(d,e,null,[H.K(d,"z",0)]).b1(0,!1)
y=0}w=J.A(x)
if(y+z>w.gi(x))throw H.b(H.dL())
if(y<b)for(v=z-1;v>=0;--v)this.j(a,b+v,w.h(x,y+v))
else for(v=0;v<z;++v)this.j(a,b+v,w.h(x,y+v))}],
az:function(a,b){var z=this.h(a,b)
this.a0(a,b,this.gi(a)-1,a,b+1)
this.si(a,this.gi(a)-1)
return z},
k:function(a){return P.bR(a,"[","]")},
$isa:1,
$asa:null,
$isc:1,
$asc:null},
l6:{"^":"e;",
j:function(a,b,c){throw H.b(new P.j("Cannot modify unmodifiable map"))},
$isC:1,
$asC:null},
iL:{"^":"e;",
h:function(a,b){return this.a.h(0,b)},
j:function(a,b,c){this.a.j(0,b,c)},
O:function(a,b){this.a.O(0,b)},
gH:function(a){var z=this.a
return z.gH(z)},
gi:function(a){var z=this.a
return z.gi(z)},
k:function(a){return this.a.k(0)},
$isC:1,
$asC:null},
ex:{"^":"iL+l6;$ti",$asC:null,$isC:1},
iN:{"^":"i:4;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.l+=", "
z.a=!1
z=this.b
y=z.l+=H.f(a)
z.l=y+": "
z.l+=H.f(b)}},
iK:{"^":"b3;a,b,c,d,$ti",
gI:function(a){return new P.kD(this,this.c,this.d,this.b,null)},
gH:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
A:function(a,b){var z,y,x,w
z=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=z)H.B(P.D(b,this,"index",null,z))
y=this.a
x=y.length
w=(this.b+b&x-1)>>>0
if(w<0||w>=x)return H.h(y,w)
return y[w]},
D:function(a,b){this.a1(0,b)},
am:function(a){var z,y,x,w,v
z=this.b
y=this.c
if(z!==y){for(x=this.a,w=x.length,v=w-1;z!==y;z=(z+1&v)>>>0){if(z<0||z>=w)return H.h(x,z)
x[z]=null}this.c=0
this.b=0;++this.d}},
k:function(a){return P.bR(this,"{","}")},
ea:function(){var z,y,x,w
z=this.b
if(z===this.c)throw H.b(H.co());++this.d
y=this.a
x=y.length
if(z>=x)return H.h(y,z)
w=y[z]
y[z]=null
this.b=(z+1&x-1)>>>0
return w},
a1:function(a,b){var z,y,x
z=this.a
y=this.c
x=z.length
if(y<0||y>=x)return H.h(z,y)
z[y]=b
x=(y+1&x-1)>>>0
this.c=x
if(this.b===x)this.dc();++this.d},
dc:function(){var z,y,x,w
z=new Array(this.a.length*2)
z.fixed$length=Array
y=H.y(z,this.$ti)
z=this.a
x=this.b
w=z.length-x
C.a.a0(y,0,w,z,x)
C.a.a0(y,w,w+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=y},
eW:function(a,b){var z=new Array(8)
z.fixed$length=Array
this.a=H.y(z,[b])},
$asc:null,
u:{
cw:function(a,b){var z=new P.iK(null,0,0,0,[b])
z.eW(a,b)
return z}}},
kD:{"^":"e;a,b,c,d,e",
gw:function(){return this.e},
v:function(){var z,y,x
z=this.a
if(this.c!==z.d)H.B(new P.af(z))
y=this.d
if(y===this.b){this.e=null
return!1}z=z.a
x=z.length
if(y>=x)return H.h(z,y)
this.e=z[y]
this.d=(y+1&x-1)>>>0
return!0}},
jl:{"^":"e;$ti",
N:function(a,b){var z
for(z=J.R(b);z.v();)this.D(0,z.gw())},
ap:function(a,b){return new H.dw(this,b,[H.L(this,0),null])},
k:function(a){return P.bR(this,"{","}")},
$isc:1,
$asc:null},
jk:{"^":"jl;$ti"}}],["","",,P,{"^":"",
c4:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.kv(a,Object.create(null),null)
for(z=0;z<a.length;++z)a[z]=P.c4(a[z])
return a},
ll:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.b(H.N(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.E(x)
w=String(y)
throw H.b(new P.cm(w,null,null))}w=P.c4(z)
return w},
pb:[function(a){return a.iy()},"$1","lD",2,0,0,7],
kv:{"^":"e;a,b,c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.fF(b):y}},
gi:function(a){var z
if(this.b==null){z=this.c
z=z.gi(z)}else z=this.bd().length
return z},
gH:function(a){var z
if(this.b==null){z=this.c
z=z.gi(z)}else z=this.bd().length
return z===0},
j:function(a,b,c){var z,y
if(this.b==null)this.c.j(0,b,c)
else if(this.S(0,b)){z=this.b
z[b]=c
y=this.a
if(y==null?z!=null:y!==z)y[b]=null}else this.h1().j(0,b,c)},
S:function(a,b){if(this.b==null)return this.c.S(0,b)
if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
O:function(a,b){var z,y,x,w
if(this.b==null)return this.c.O(0,b)
z=this.bd()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.c4(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.b(new P.af(this))}},
k:function(a){return P.cy(this)},
bd:function(){var z=this.c
if(z==null){z=Object.keys(this.a)
this.c=z}return z},
h1:function(){var z,y,x,w,v
if(this.b==null)return this.c
z=P.iJ(P.n,null)
y=this.bd()
for(x=0;w=y.length,x<w;++x){v=y[x]
z.j(0,v,this.h(0,v))}if(w===0)y.push(null)
else C.a.si(y,0)
this.b=null
this.a=null
this.c=z
return z},
fF:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.c4(this.a[a])
return this.b[a]=z},
$isC:1,
$asC:function(){return[P.n,null]}},
h6:{"^":"e;"},
dp:{"^":"e;"},
cs:{"^":"M;a,b",
k:function(a){if(this.b!=null)return"Converting object to an encodable object failed."
else return"Converting object did not return an encodable object."}},
iD:{"^":"cs;a,b",
k:function(a){return"Cyclic error in JSON stringify"}},
iC:{"^":"h6;a,b",
hl:function(a,b){var z=P.ll(a,this.ghn().a)
return z},
hk:function(a){return this.hl(a,null)},
hx:function(a,b){var z=this.ghy()
z=P.kx(a,z.b,z.a)
return z},
hw:function(a){return this.hx(a,null)},
ghy:function(){return C.G},
ghn:function(){return C.F}},
iF:{"^":"dp;dT:a<,b"},
iE:{"^":"dp;a"},
ky:{"^":"e;",
en:function(a){var z,y,x,w,v,u,t
z=J.A(a)
y=z.gi(a)
if(typeof y!=="number")return H.u(y)
x=this.c
w=0
v=0
for(;v<y;++v){u=z.cg(a,v)
if(u>92)continue
if(u<32){if(v>w)x.l+=z.ah(a,w,v)
w=v+1
x.l+=H.Y(92)
switch(u){case 8:x.l+=H.Y(98)
break
case 9:x.l+=H.Y(116)
break
case 10:x.l+=H.Y(110)
break
case 12:x.l+=H.Y(102)
break
case 13:x.l+=H.Y(114)
break
default:x.l+=H.Y(117)
x.l+=H.Y(48)
x.l+=H.Y(48)
t=u>>>4&15
x.l+=H.Y(t<10?48+t:87+t)
t=u&15
x.l+=H.Y(t<10?48+t:87+t)
break}}else if(u===34||u===92){if(v>w)x.l+=z.ah(a,w,v)
w=v+1
x.l+=H.Y(92)
x.l+=H.Y(u)}}if(w===0)x.l+=H.f(a)
else if(w<y)x.l+=z.ah(a,w,y)},
bQ:function(a){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(a==null?w==null:a===w)throw H.b(new P.iD(a,null))}z.push(a)},
bA:function(a){var z,y,x,w
if(this.em(a))return
this.bQ(a)
try{z=this.b.$1(a)
if(!this.em(z))throw H.b(new P.cs(a,null))
x=this.a
if(0>=x.length)return H.h(x,-1)
x.pop()}catch(w){y=H.E(w)
throw H.b(new P.cs(a,y))}},
em:function(a){var z,y
if(typeof a==="number"){if(!isFinite(a))return!1
this.c.l+=C.e.k(a)
return!0}else if(a===!0){this.c.l+="true"
return!0}else if(a===!1){this.c.l+="false"
return!0}else if(a==null){this.c.l+="null"
return!0}else if(typeof a==="string"){z=this.c
z.l+='"'
this.en(a)
z.l+='"'
return!0}else{z=J.k(a)
if(!!z.$isa){this.bQ(a)
this.ij(a)
z=this.a
if(0>=z.length)return H.h(z,-1)
z.pop()
return!0}else if(!!z.$isC){this.bQ(a)
y=this.ik(a)
z=this.a
if(0>=z.length)return H.h(z,-1)
z.pop()
return y}else return!1}},
ij:function(a){var z,y,x
z=this.c
z.l+="["
y=J.A(a)
if(y.gi(a)>0){this.bA(y.h(a,0))
for(x=1;x<y.gi(a);++x){z.l+=","
this.bA(y.h(a,x))}}z.l+="]"},
ik:function(a){var z,y,x,w,v,u,t
z={}
y=J.A(a)
if(y.gH(a)){this.c.l+="{}"
return!0}x=y.gi(a)
if(typeof x!=="number")return x.bB()
x*=2
w=new Array(x)
z.a=0
z.b=!0
y.O(a,new P.kz(z,w))
if(!z.b)return!1
y=this.c
y.l+="{"
for(v='"',u=0;u<x;u+=2,v=',"'){y.l+=v
this.en(w[u])
y.l+='":'
t=u+1
if(t>=x)return H.h(w,t)
this.bA(w[t])}y.l+="}"
return!0}},
kz:{"^":"i:4;a,b",
$2:function(a,b){var z,y,x,w,v
if(typeof a!=="string")this.a.b=!1
z=this.b
y=this.a
x=y.a
w=x+1
y.a=w
v=z.length
if(x>=v)return H.h(z,x)
z[x]=a
y.a=w+1
if(w>=v)return H.h(z,w)
z[w]=b}},
kw:{"^":"ky;c,a,b",u:{
kx:function(a,b,c){var z,y,x
z=new P.aO("")
y=new P.kw(z,[],P.lD())
y.bA(a)
x=z.l
return x.charCodeAt(0)==0?x:x}}}}],["","",,P,{"^":"",
bq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.F(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hp(a)},
hp:function(a){var z=J.k(a)
if(!!z.$isi)return z.k(a)
return H.bV(a)},
bP:function(a){return new P.ke(a)},
aN:function(a,b,c){var z,y
z=H.y([],[c])
for(y=J.R(a);y.v();)z.push(y.gw())
return z},
m4:function(a,b){var z,y
z=C.c.ei(a)
y=H.e5(z,null,P.lF())
if(y!=null)return y
y=H.jd(z,P.lE())
if(y!=null)return y
throw H.b(new P.cm(a,null,null))},
pj:[function(a){return},"$1","lF",2,0,22],
pi:[function(a){return},"$1","lE",2,0,23],
bf:function(a){H.m6(H.f(a))},
iS:{"^":"i:15;a,b",
$2:function(a,b){var z,y,x
z=this.b
y=this.a
z.l+=y.a
x=z.l+=H.f(a.gfB())
z.l=x+": "
z.l+=H.f(P.bq(b))
y.a=", "}},
cW:{"^":"e;"},
"+bool":0,
ap:{"^":"e;a,b",
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.ap))return!1
return this.a===b.a&&this.b===b.b},
gE:function(a){var z=this.a
return(z^C.e.cb(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.hf(H.jc(this))
y=P.bo(H.ja(this))
x=P.bo(H.j6(this))
w=P.bo(H.j7(this))
v=P.bo(H.j9(this))
u=P.bo(H.jb(this))
t=P.hg(H.j8(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
D:function(a,b){return P.he(C.e.p(this.a,b.giu()),this.b)},
gi_:function(){return this.a},
bJ:function(a,b){var z
if(!(Math.abs(this.a)>864e13))z=!1
else z=!0
if(z)throw H.b(P.aZ(this.gi_()))},
u:{
he:function(a,b){var z=new P.ap(a,b)
z.bJ(a,b)
return z},
hf:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+H.f(z)
if(z>=10)return y+"00"+H.f(z)
return y+"000"+H.f(z)},
hg:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bo:function(a){if(a>=10)return""+a
return"0"+a}}},
ad:{"^":"be;"},
"+double":0,
bp:{"^":"e;d5:a<",
p:function(a,b){return new P.bp(this.a+b.gd5())},
bI:function(a,b){if(b===0)throw H.b(new P.hx())
return new P.bp(C.d.bI(this.a,b))},
ae:function(a,b){return C.d.ae(this.a,b.gd5())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.bp))return!1
return this.a===b.a},
gE:function(a){return this.a&0x1FFFFFFF},
k:function(a){var z,y,x,w,v
z=new P.hn()
y=this.a
if(y<0)return"-"+new P.bp(0-y).k(0)
x=z.$1(C.d.bn(y,6e7)%60)
w=z.$1(C.d.bn(y,1e6)%60)
v=new P.hm().$1(y%1e6)
return""+C.d.bn(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)}},
hm:{"^":"i:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hn:{"^":"i:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
M:{"^":"e;",
gag:function(){return H.U(this.$thrownJsError)}},
bU:{"^":"M;",
k:function(a){return"Throw of null."}},
am:{"^":"M;a,b,c,d",
gbZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbY:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gbZ()+y+x
if(!this.a)return w
v=this.gbY()
u=P.bq(this.b)
return w+v+": "+H.f(u)},
u:{
aZ:function(a){return new P.am(!1,null,null,a)},
dg:function(a,b,c){return new P.am(!0,a,b,c)}}},
e7:{"^":"am;e,f,a,b,c,d",
gbZ:function(){return"RangeError"},
gbY:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
u:{
b6:function(a,b,c){return new P.e7(null,null,!0,a,b,"Value not in range")},
I:function(a,b,c,d,e){return new P.e7(b,c,!0,a,d,"Invalid value")},
cD:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.I(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.I(b,a,c,"end",f))
return b}}},
hv:{"^":"am;e,i:f>,a,b,c,d",
gbZ:function(){return"RangeError"},
gbY:function(){if(J.bg(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
u:{
D:function(a,b,c,d,e){var z=e!=null?e:J.al(b)
return new P.hv(b,z,!0,a,c,"Index out of range")}}},
iR:{"^":"M;a,b,c,d,e",
k:function(a){var z,y,x,w,v,u,t,s
z={}
y=new P.aO("")
z.a=""
for(x=this.c,w=x.length,v=0;v<w;++v){u=x[v]
y.l+=z.a
y.l+=H.f(P.bq(u))
z.a=", "}this.d.O(0,new P.iS(z,y))
t=P.bq(this.a)
s=y.k(0)
x="NoSuchMethodError: method not found: '"+H.f(this.b.a)+"'\nReceiver: "+H.f(t)+"\nArguments: ["+s+"]"
return x},
u:{
dV:function(a,b,c,d,e){return new P.iR(a,b,c,d,e)}}},
j:{"^":"M;a",
k:function(a){return"Unsupported operation: "+this.a}},
bC:{"^":"M;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.f(z):"UnimplementedError"}},
T:{"^":"M;a",
k:function(a){return"Bad state: "+this.a}},
af:{"^":"M;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bq(z))+"."}},
iW:{"^":"e;",
k:function(a){return"Out of Memory"},
gag:function(){return},
$isM:1},
ec:{"^":"e;",
k:function(a){return"Stack Overflow"},
gag:function(){return},
$isM:1},
hd:{"^":"M;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.f(z)+"' during its initialization"}},
ke:{"^":"e;a",
k:function(a){var z=this.a
if(z==null)return"Exception"
return"Exception: "+H.f(z)},
$isbO:1},
cm:{"^":"e;a,b,bw:c>",
k:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.c.ah(x,0,75)+"..."
return y+"\n"+x},
$isbO:1},
hx:{"^":"e;",
k:function(a){return"IntegerDivisionByZeroException"},
$isbO:1},
hq:{"^":"e;a,di",
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var z,y
z=this.di
if(typeof z!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.B(P.dg(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return z.get(b)}y=H.cC(b,"expando$values")
return y==null?null:H.cC(y,z)},
j:function(a,b,c){var z,y
z=this.di
if(typeof z!=="string")z.set(b,c)
else{y=H.cC(b,"expando$values")
if(y==null){y=new P.e()
H.e6(b,"expando$values",y)}H.e6(y,z,c)}}},
v:{"^":"be;"},
"+int":0,
a0:{"^":"e;$ti",
ap:function(a,b){return H.bS(this,b,H.K(this,"a0",0),null)},
cG:["eJ",function(a,b){return new H.ey(this,b,[H.K(this,"a0",0)])}],
b1:function(a,b){return P.aN(this,!0,H.K(this,"a0",0))},
cD:function(a){return this.b1(a,!0)},
gi:function(a){var z,y
z=this.gI(this)
for(y=0;z.v();)++y
return y},
gaq:function(a){var z,y
z=this.gI(this)
if(!z.v())throw H.b(H.co())
y=z.gw()
if(z.v())throw H.b(H.im())
return y},
A:function(a,b){var z,y,x
if(b<0)H.B(P.I(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.v();){x=z.gw()
if(b===y)return x;++y}throw H.b(P.D(b,this,"index",null,y))},
k:function(a){return P.il(this,"(",")")}},
dM:{"^":"e;"},
a:{"^":"e;$ti",$asa:null,$isc:1,$asc:null},
"+List":0,
C:{"^":"e;$ti",$asC:null},
b4:{"^":"e;",
gE:function(a){return P.e.prototype.gE.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
be:{"^":"e;"},
"+num":0,
e:{"^":";",
C:function(a,b){return this===b},
gE:function(a){return H.ak(this)},
k:["eN",function(a){return H.bV(this)}],
cp:function(a,b){throw H.b(P.dV(this,b.gdZ(),b.ge7(),b.ge_(),null))},
toString:function(){return this.k(this)}},
bA:{"^":"e;"},
n:{"^":"e;"},
"+String":0,
aO:{"^":"e;l@",
gi:function(a){return this.l.length},
k:function(a){var z=this.l
return z.charCodeAt(0)==0?z:z},
u:{
ee:function(a,b,c){var z=J.R(b)
if(!z.v())return a
if(c.length===0){do a+=H.f(z.gw())
while(z.v())}else{a+=H.f(z.gw())
for(;z.v();)a=a+c+H.f(z.gw())}return a}}},
bB:{"^":"e;"}}],["","",,W,{"^":"",
hc:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
ho:function(a,b,c){var z,y
z=document.body
y=(z&&C.l).T(z,a,b,c)
y.toString
z=new H.ey(new W.a5(y),new W.ly(),[W.p])
return z.gaq(z)},
b0:function(a){var z,y,x,w
z="element tag unavailable"
try{y=J.l(a)
x=y.ged(a)
if(typeof x==="string")z=y.ged(a)}catch(w){H.E(w)}return z},
aF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eW:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.k4(a)
if(!!J.k(z).$isr)return z
return}else return a},
ld:function(a){var z
if(!!J.k(a).$isdv)return a
z=new P.cJ([],[],!1)
z.c=!0
return z.a5(a)},
f7:function(a){var z=$.t
if(z===C.b)return a
return z.ha(a,!0)},
w:{"^":"aq;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMenuItemElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
mf:{"^":"w;bu:href}",
k:function(a){return String(a)},
$isd:1,
"%":"HTMLAnchorElement"},
mg:{"^":"r;",
X:function(a){return a.cancel()},
"%":"Animation"},
mi:{"^":"w;bu:href}",
k:function(a){return String(a)},
$isd:1,
"%":"HTMLAreaElement"},
an:{"^":"d;",$ise:1,"%":"AudioTrack"},
mk:{"^":"dC;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.an]},
$isc:1,
$asc:function(){return[W.an]},
$isq:1,
$asq:function(){return[W.an]},
$iso:1,
$aso:function(){return[W.an]},
"%":"AudioTrackList"},
dz:{"^":"r+z;",
$asa:function(){return[W.an]},
$asc:function(){return[W.an]},
$isa:1,
$isc:1},
dC:{"^":"dz+G;",
$asa:function(){return[W.an]},
$asc:function(){return[W.an]},
$isa:1,
$isc:1},
ml:{"^":"w;bu:href}","%":"HTMLBaseElement"},
bl:{"^":"d;",$isbl:1,"%":";Blob"},
fV:{"^":"d;","%":"Response;Body"},
cf:{"^":"w;",$iscf:1,$isr:1,$isd:1,"%":"HTMLBodyElement"},
mm:{"^":"w;J:name=,G:value=","%":"HTMLButtonElement"},
mn:{"^":"w;q:height=,m:width=",
er:function(a,b,c){return a.getContext(b)},
eq:function(a,b){return this.er(a,b,null)},
"%":"HTMLCanvasElement"},
mo:{"^":"d;ax:fillStyle},bt:font},hX:lineJoin},cn:lineWidth},bG:strokeStyle},ee:textAlign},ef:textBaseline}",
aw:function(a){return a.beginPath()},
hc:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
dL:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
dY:function(a,b){return a.measureText(b)},
ac:function(a){return a.restore()},
a_:function(a){return a.save()},
im:function(a,b){return a.stroke(b)},
bF:function(a){return a.stroke()},
ih:function(a,b,c,d,e,f,g){return a.transform(b,c,d,e,f,g)},
dF:function(a,b,c,d,e,f,g){return a.bezierCurveTo(b,c,d,e,f,g)},
cf:function(a){return a.closePath()},
B:function(a,b,c){return a.lineTo(b,c)},
aZ:function(a,b,c){return a.moveTo(b,c)},
K:function(a,b,c,d,e){return a.quadraticCurveTo(b,c,d,e)},
hB:function(a,b,c,d,e){a.fillText(b,c,d)},
dM:function(a,b,c,d){return this.hB(a,b,c,d,null)},
hA:function(a,b){a.fill(b)},
cl:function(a){return this.hA(a,"nonzero")},
"%":"CanvasRenderingContext2D"},
mp:{"^":"p;i:length=",$isd:1,"%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
mq:{"^":"r;",$isr:1,$isd:1,"%":"CompositorWorker"},
ao:{"^":"d;",$ise:1,"%":"CSSCharsetRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
mr:{"^":"hy;i:length=",
cI:function(a,b){var z=this.fl(a,b)
return z!=null?z:""},
fl:function(a,b){if(W.hc(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.hh()+b)},
gq:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hy:{"^":"d+hb;"},
hb:{"^":"e;",
gq:function(a){return this.cI(a,"height")},
gm:function(a){return this.cI(a,"width")}},
mt:{"^":"d;i:length=",
dB:function(a,b,c){return a.add(b,c)},
D:function(a,b){return a.add(b)},
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
mu:{"^":"d;n:x=,t:y=","%":"DeviceAcceleration"},
hi:{"^":"w;","%":"HTMLDivElement"},
dv:{"^":"p;",$isdv:1,"%":"Document|HTMLDocument|XMLDocument"},
hj:{"^":"p;",$isd:1,"%":";DocumentFragment"},
mv:{"^":"d;",
k:function(a){return String(a)},
"%":"DOMException"},
mw:{"^":"d;",
e0:[function(a,b){return a.next(b)},function(a){return a.next()},"i0","$1","$0","gP",0,2,16,0,1],
"%":"Iterator"},
mx:{"^":"hk;",
gn:function(a){return a.x},
sn:function(a,b){a.x=b},
gt:function(a){return a.y},
st:function(a,b){a.y=b},
"%":"DOMPoint"},
hk:{"^":"d;",
gn:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
hl:{"^":"d;",
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gm(a))+" x "+H.f(this.gq(a))},
C:function(a,b){var z
if(b==null)return!1
z=J.k(b)
if(!z.$isP)return!1
return a.left===z.gaX(b)&&a.top===z.gb2(b)&&this.gm(a)===z.gm(b)&&this.gq(a)===z.gq(b)},
gE:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gm(a)
w=this.gq(a)
return W.eN(W.aF(W.aF(W.aF(W.aF(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcE:function(a){return new P.aj(a.left,a.top,[null])},
gce:function(a){return a.bottom},
gq:function(a){return a.height},
gaX:function(a){return a.left},
gcv:function(a){return a.right},
gb2:function(a){return a.top},
gm:function(a){return a.width},
gn:function(a){return a.x},
gt:function(a){return a.y},
$isP:1,
$asP:I.O,
"%":";DOMRectReadOnly"},
my:{"^":"hT;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
$isq:1,
$asq:function(){return[P.n]},
$iso:1,
$aso:function(){return[P.n]},
"%":"DOMStringList"},
hz:{"^":"d+z;",
$asa:function(){return[P.n]},
$asc:function(){return[P.n]},
$isa:1,
$isc:1},
hT:{"^":"hz+G;",
$asa:function(){return[P.n]},
$asc:function(){return[P.n]},
$isa:1,
$isc:1},
mz:{"^":"d;i:length=",
D:function(a,b){return a.add(b)},
"%":"DOMTokenList"},
eI:{"^":"cu;a,$ti",
gi:function(a){return this.a.length},
h:function(a,b){var z=this.a
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot modify list"))},
si:function(a,b){throw H.b(new P.j("Cannot modify list"))},
$isa:1,
$asa:null,
$isc:1,
$asc:null},
aq:{"^":"p;dj:namespaceURI=,ed:tagName=",
gh8:function(a){return new W.k9(a)},
gbw:function(a){return P.jg(C.e.bz(a.offsetLeft),C.e.bz(a.offsetTop),C.e.bz(a.offsetWidth),C.e.bz(a.offsetHeight),null)},
k:function(a){return a.localName},
hP:function(a,b,c,d,e){var z,y
z=this.T(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(z,a)
break
case"afterbegin":y=a.childNodes
a.insertBefore(z,y.length>0?y[0]:null)
break
case"beforeend":a.appendChild(z)
break
case"afterend":a.parentNode.insertBefore(z,a.nextSibling)
break
default:H.B(P.aZ("Invalid position "+b))}},
T:["bH",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dy
if(z==null){z=H.y([],[W.dW])
y=new W.dX(z)
z.push(W.eL(null))
z.push(W.eT())
$.dy=y
d=y}else d=z
z=$.dx
if(z==null){z=new W.eU(d)
$.dx=z
c=z}else{z.a=d
c=z}}if($.ag==null){z=document
y=z.implementation.createHTMLDocument("")
$.ag=y
$.ck=y.createRange()
y=$.ag
y.toString
x=y.createElement("base")
J.fJ(x,z.baseURI)
$.ag.head.appendChild(x)}z=$.ag
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.ag
if(!!this.$iscf)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.ag.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.a.M(C.I,a.tagName)){$.ck.selectNodeContents(w)
v=$.ck.createContextualFragment(b)}else{w.innerHTML=b
v=$.ag.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.ag.body
if(w==null?z!=null:w!==z)J.fF(w)
c.cK(v)
document.adoptNode(v)
return v},function(a,b,c){return this.T(a,b,c,null)},"hj",null,null,"git",2,5,null,0,0],
sdU:function(a,b){this.bD(a,b)},
bE:function(a,b,c,d){a.textContent=null
a.appendChild(this.T(a,b,c,d))},
bD:function(a,b){return this.bE(a,b,null,null)},
dN:function(a){return a.focus()},
cH:function(a){return a.getBoundingClientRect()},
ge1:function(a){return new W.ac(a,"change",!1,[W.a3])},
ge2:function(a){return new W.ac(a,"input",!1,[W.a3])},
ge3:function(a){return new W.ac(a,"mousedown",!1,[W.av])},
ge4:function(a){return new W.ac(a,"mousemove",!1,[W.av])},
ge5:function(a){return new W.ac(a,"mouseup",!1,[W.av])},
$isaq:1,
$isp:1,
$ise:1,
$isd:1,
$isr:1,
"%":";Element"},
ly:{"^":"i:0;",
$1:function(a){return!!J.k(a).$isaq}},
mA:{"^":"w;q:height=,J:name=,m:width=","%":"HTMLEmbedElement"},
mB:{"^":"a3;U:error=","%":"ErrorEvent"},
a3:{"^":"d;",
i4:function(a){return a.preventDefault()},
$isa3:1,
"%":"AnimationEvent|AnimationPlayerEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|AutocompleteErrorEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceLightEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|ExtendableMessageEvent|FetchEvent|FontFaceSetLoadEvent|GamepadEvent|GeofencingEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|NotificationEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCIceCandidateEvent|RTCPeerConnectionIceEvent|RelatedEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|ServicePortConnectEvent|ServiceWorkerMessageEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|SyncEvent|TrackEvent|TransitionEvent|USBConnectionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
r:{"^":"d;",
dC:function(a,b,c,d){if(c!=null)this.f5(a,b,c,!1)},
e9:function(a,b,c,d){if(c!=null)this.fM(a,b,c,!1)},
f5:function(a,b,c,d){return a.addEventListener(b,H.a6(c,1),!1)},
fM:function(a,b,c,d){return a.removeEventListener(b,H.a6(c,1),!1)},
$isr:1,
"%":"AnalyserNode|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioSourceNode|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|CrossOriginServiceWorkerClient|DOMApplicationCache|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MessagePort|NetworkInformation|Notification|OfflineResourceList|Oscillator|OscillatorNode|PannerNode|Performance|PermissionStatus|PresentationAvailability|PresentationReceiver|PresentationRequest|RTCDTMFSender|RTCPeerConnection|RealtimeAnalyserNode|ScreenOrientation|ScriptProcessorNode|ServicePortCollection|ServiceWorkerContainer|ServiceWorkerRegistration|SpeechRecognition|SpeechSynthesisUtterance|StereoPannerNode|USB|WaveShaperNode|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dz|dC|dA|dD|dB|dE"},
mU:{"^":"w;J:name=","%":"HTMLFieldSetElement"},
a9:{"^":"bl;",$isa9:1,$ise:1,"%":"File"},
dG:{"^":"hU;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isdG:1,
$isq:1,
$asq:function(){return[W.a9]},
$iso:1,
$aso:function(){return[W.a9]},
$isa:1,
$asa:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
"%":"FileList"},
hA:{"^":"d+z;",
$asa:function(){return[W.a9]},
$asc:function(){return[W.a9]},
$isa:1,
$isc:1},
hU:{"^":"hA+G;",
$asa:function(){return[W.a9]},
$asc:function(){return[W.a9]},
$isa:1,
$isc:1},
mV:{"^":"r;U:error=",
gF:function(a){var z,y
z=a.result
if(!!J.k(z).$isfX){y=new Uint8Array(z,0)
return y}return z},
"%":"FileReader"},
mW:{"^":"r;U:error=,i:length=","%":"FileWriter"},
mY:{"^":"r;",
D:function(a,b){return a.add(b)},
"%":"FontFaceSet"},
n_:{"^":"w;i:length=,J:name=","%":"HTMLFormElement"},
as:{"^":"d;",$ise:1,"%":"Gamepad"},
n0:{"^":"d;i:length=","%":"History"},
n1:{"^":"hV;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
"%":"HTMLCollection|HTMLFormControlsCollection|HTMLOptionsCollection"},
hB:{"^":"d+z;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
hV:{"^":"hB+G;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
ht:{"^":"hu;",
iv:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
i3:function(a,b,c,d){return a.open(b,c,d)},
af:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hu:{"^":"r;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
n2:{"^":"w;q:height=,J:name=,m:width=","%":"HTMLIFrameElement"},
n3:{"^":"d;q:height=,m:width=","%":"ImageBitmap"},
bQ:{"^":"d;q:height=,m:width=",$isbQ:1,"%":"ImageData"},
n4:{"^":"w;q:height=,m:width=","%":"HTMLImageElement"},
n6:{"^":"w;q:height=,J:name=,G:value=,m:width=",$isaq:1,$isd:1,$isr:1,$isp:1,"%":"HTMLInputElement"},
nc:{"^":"w;J:name=","%":"HTMLKeygenElement"},
nd:{"^":"w;G:value=","%":"HTMLLIElement"},
nf:{"^":"ef;",
D:function(a,b){return a.add(b)},
"%":"CalcLength|LengthValue|SimpleLength"},
ng:{"^":"w;bu:href}","%":"HTMLLinkElement"},
nh:{"^":"d;",
k:function(a){return String(a)},
"%":"Location"},
ni:{"^":"w;J:name=","%":"HTMLMapElement"},
iO:{"^":"w;U:error=","%":"HTMLAudioElement;HTMLMediaElement"},
nl:{"^":"d;i:length=","%":"MediaList"},
nm:{"^":"r;",
a9:function(a){return a.clone()},
"%":"MediaStream"},
nn:{"^":"r;",
a9:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
no:{"^":"w;J:name=","%":"HTMLMetaElement"},
np:{"^":"w;G:value=","%":"HTMLMeterElement"},
nq:{"^":"iP;",
il:function(a,b,c){return a.send(b,c)},
af:function(a,b){return a.send(b)},
"%":"MIDIOutput"},
iP:{"^":"r;","%":"MIDIInput;MIDIPort"},
au:{"^":"d;",$ise:1,"%":"MimeType"},
nr:{"^":"i4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.au]},
$iso:1,
$aso:function(){return[W.au]},
$isa:1,
$asa:function(){return[W.au]},
$isc:1,
$asc:function(){return[W.au]},
"%":"MimeTypeArray"},
hL:{"^":"d+z;",
$asa:function(){return[W.au]},
$asc:function(){return[W.au]},
$isa:1,
$isc:1},
i4:{"^":"hL+G;",
$asa:function(){return[W.au]},
$asc:function(){return[W.au]},
$isa:1,
$isc:1},
av:{"^":"jM;",
gbw:function(a){var z,y,x
if(!!a.offsetX)return new P.aj(a.offsetX,a.offsetY,[null])
else{if(!J.k(W.eW(a.target)).$isaq)throw H.b(new P.j("offsetX is only supported on elements"))
z=W.eW(a.target)
y=[null]
x=new P.aj(a.clientX,a.clientY,y).R(0,J.fA(J.fB(z)))
return new P.aj(J.df(x.a),J.df(x.b),y)}},
"%":"WheelEvent;DragEvent|MouseEvent"},
nC:{"^":"d;",$isd:1,"%":"Navigator"},
a5:{"^":"cu;a",
gaq:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(new P.T("No elements"))
if(y>1)throw H.b(new P.T("More than one element"))
return z.firstChild},
D:function(a,b){this.a.appendChild(b)},
N:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
az:function(a,b){var z,y,x
z=this.a
y=z.childNodes
if(b>=y.length)return H.h(y,b)
x=y[b]
z.removeChild(x)
return x},
j:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
gI:function(a){var z=this.a.childNodes
return new W.dI(z,z.length,-1,null)},
a0:function(a,b,c,d,e){throw H.b(new P.j("Cannot setRange on Node list"))},
gi:function(a){return this.a.childNodes.length},
si:function(a,b){throw H.b(new P.j("Cannot set length on immutable List."))},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$ascu:function(){return[W.p]},
$asa:function(){return[W.p]},
$asc:function(){return[W.p]}},
p:{"^":"r;bx:parentNode=,cs:previousSibling=",
gi2:function(a){return new W.a5(a)},
ct:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.eI(a):z},
bq:function(a,b){return a.cloneNode(b)},
$isp:1,
$ise:1,
"%":";Node"},
nD:{"^":"d;",
i5:[function(a){return a.previousNode()},"$0","gcs",0,0,5],
"%":"NodeIterator"},
nE:{"^":"i5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
"%":"NodeList|RadioNodeList"},
hM:{"^":"d+z;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
i5:{"^":"hM+G;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
nG:{"^":"w;q:height=,J:name=,m:width=","%":"HTMLObjectElement"},
nI:{"^":"d;q:height=,m:width=","%":"OffscreenCanvas"},
nJ:{"^":"w;G:value=","%":"HTMLOptionElement"},
nK:{"^":"w;J:name=,G:value=","%":"HTMLOutputElement"},
nL:{"^":"w;J:name=,G:value=","%":"HTMLParamElement"},
nM:{"^":"d;",$isd:1,"%":"Path2D"},
nO:{"^":"cI;i:length=","%":"Perspective"},
aw:{"^":"d;i:length=",$ise:1,"%":"Plugin"},
nP:{"^":"i6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.aw]},
$isc:1,
$asc:function(){return[W.aw]},
$isq:1,
$asq:function(){return[W.aw]},
$iso:1,
$aso:function(){return[W.aw]},
"%":"PluginArray"},
hN:{"^":"d+z;",
$asa:function(){return[W.aw]},
$asc:function(){return[W.aw]},
$isa:1,
$isc:1},
i6:{"^":"hN+G;",
$asa:function(){return[W.aw]},
$asc:function(){return[W.aw]},
$isa:1,
$isc:1},
nS:{"^":"av;q:height=,m:width=","%":"PointerEvent"},
nT:{"^":"ef;n:x=,t:y=","%":"PositionValue"},
nU:{"^":"r;",
af:function(a,b){return a.send(b)},
"%":"PresentationConnection"},
nV:{"^":"w;G:value=","%":"HTMLProgressElement"},
nX:{"^":"d;",
cH:function(a){return a.getBoundingClientRect()},
"%":"Range"},
nY:{"^":"d;",
dH:function(a,b){return a.cancel(b)},
X:function(a){return a.cancel()},
"%":"ReadableByteStream"},
nZ:{"^":"d;",
dH:function(a,b){return a.cancel(b)},
X:function(a){return a.cancel()},
"%":"ReadableByteStreamReader"},
o_:{"^":"d;",
dH:function(a,b){return a.cancel(b)},
X:function(a){return a.cancel()},
"%":"ReadableStreamReader"},
o5:{"^":"cI;n:x=,t:y=","%":"Rotation"},
o6:{"^":"r;",
af:function(a,b){return a.send(b)},
"%":"DataChannel|RTCDataChannel"},
cE:{"^":"d;",$iscE:1,$ise:1,"%":"RTCStatsReport"},
o7:{"^":"d;",
ix:[function(a){return a.result()},"$0","gF",0,0,17],
"%":"RTCStatsResponse"},
o8:{"^":"d;q:height=,m:width=","%":"Screen"},
o9:{"^":"w;i:length=,J:name=,G:value=","%":"HTMLSelectElement"},
oa:{"^":"hj;",
bq:function(a,b){return a.cloneNode(b)},
a9:function(a){return a.cloneNode()},
"%":"ShadowRoot"},
ob:{"^":"r;",$isr:1,$isd:1,"%":"SharedWorker"},
oc:{"^":"w;J:name=","%":"HTMLSlotElement"},
ax:{"^":"r;",$ise:1,"%":"SourceBuffer"},
od:{"^":"dD;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.ax]},
$isc:1,
$asc:function(){return[W.ax]},
$isq:1,
$asq:function(){return[W.ax]},
$iso:1,
$aso:function(){return[W.ax]},
"%":"SourceBufferList"},
dA:{"^":"r+z;",
$asa:function(){return[W.ax]},
$asc:function(){return[W.ax]},
$isa:1,
$isc:1},
dD:{"^":"dA+G;",
$asa:function(){return[W.ax]},
$asc:function(){return[W.ax]},
$isa:1,
$isc:1},
ay:{"^":"d;",$ise:1,"%":"SpeechGrammar"},
oe:{"^":"i7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.ay]},
$isc:1,
$asc:function(){return[W.ay]},
$isq:1,
$asq:function(){return[W.ay]},
$iso:1,
$aso:function(){return[W.ay]},
"%":"SpeechGrammarList"},
hO:{"^":"d+z;",
$asa:function(){return[W.ay]},
$asc:function(){return[W.ay]},
$isa:1,
$isc:1},
i7:{"^":"hO+G;",
$asa:function(){return[W.ay]},
$asc:function(){return[W.ay]},
$isa:1,
$isc:1},
of:{"^":"a3;U:error=","%":"SpeechRecognitionError"},
az:{"^":"d;i:length=",$ise:1,"%":"SpeechRecognitionResult"},
og:{"^":"r;",
X:function(a){return a.cancel()},
"%":"SpeechSynthesis"},
oi:{"^":"d;",
h:function(a,b){return a.getItem(b)},
j:function(a,b,c){a.setItem(b,c)},
O:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gi:function(a){return a.length},
gH:function(a){return a.key(0)==null},
$isC:1,
$asC:function(){return[P.n,P.n]},
"%":"Storage"},
aA:{"^":"d;",$ise:1,"%":"CSSStyleSheet|StyleSheet"},
ef:{"^":"d;","%":"KeywordValue|NumberValue|TransformValue;StyleValue"},
jy:{"^":"w;",
T:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bH(a,b,c,d)
z=W.ho("<table>"+H.f(b)+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.a5(y).N(0,J.fy(z))
return y},
"%":"HTMLTableElement"},
om:{"^":"w;",
T:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bH(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.t.T(z.createElement("table"),b,c,d)
z.toString
z=new W.a5(z)
x=z.gaq(z)
x.toString
z=new W.a5(x)
w=z.gaq(z)
y.toString
w.toString
new W.a5(y).N(0,new W.a5(w))
return y},
"%":"HTMLTableRowElement"},
on:{"^":"w;",
T:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bH(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.t.T(z.createElement("table"),b,c,d)
z.toString
z=new W.a5(z)
x=z.gaq(z)
y.toString
x.toString
new W.a5(y).N(0,new W.a5(x))
return y},
"%":"HTMLTableSectionElement"},
ei:{"^":"w;",
bE:function(a,b,c,d){var z
a.textContent=null
z=this.T(a,b,c,d)
a.content.appendChild(z)},
bD:function(a,b){return this.bE(a,b,null,null)},
$isei:1,
"%":"HTMLTemplateElement"},
oo:{"^":"w;J:name=,G:value=","%":"HTMLTextAreaElement"},
op:{"^":"d;m:width=","%":"TextMetrics"},
aB:{"^":"r;",$ise:1,"%":"TextTrack"},
aC:{"^":"r;",$ise:1,"%":"TextTrackCue|VTTCue"},
os:{"^":"i8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.aC]},
$iso:1,
$aso:function(){return[W.aC]},
$isa:1,
$asa:function(){return[W.aC]},
$isc:1,
$asc:function(){return[W.aC]},
"%":"TextTrackCueList"},
hP:{"^":"d+z;",
$asa:function(){return[W.aC]},
$asc:function(){return[W.aC]},
$isa:1,
$isc:1},
i8:{"^":"hP+G;",
$asa:function(){return[W.aC]},
$asc:function(){return[W.aC]},
$isa:1,
$isc:1},
ot:{"^":"dE;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.aB]},
$iso:1,
$aso:function(){return[W.aB]},
$isa:1,
$asa:function(){return[W.aB]},
$isc:1,
$asc:function(){return[W.aB]},
"%":"TextTrackList"},
dB:{"^":"r+z;",
$asa:function(){return[W.aB]},
$asc:function(){return[W.aB]},
$isa:1,
$isc:1},
dE:{"^":"dB+G;",
$asa:function(){return[W.aB]},
$asc:function(){return[W.aB]},
$isa:1,
$isc:1},
ou:{"^":"d;i:length=","%":"TimeRanges"},
aD:{"^":"d;",$ise:1,"%":"Touch"},
ow:{"^":"i9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.aD]},
$isc:1,
$asc:function(){return[W.aD]},
$isq:1,
$asq:function(){return[W.aD]},
$iso:1,
$aso:function(){return[W.aD]},
"%":"TouchList"},
hQ:{"^":"d+z;",
$asa:function(){return[W.aD]},
$asc:function(){return[W.aD]},
$isa:1,
$isc:1},
i9:{"^":"hQ+G;",
$asa:function(){return[W.aD]},
$asc:function(){return[W.aD]},
$isa:1,
$isc:1},
ox:{"^":"d;i:length=","%":"TrackDefaultList"},
cI:{"^":"d;","%":"Matrix|Skew;TransformComponent"},
oA:{"^":"cI;n:x=,t:y=","%":"Translation"},
oB:{"^":"d;",
iw:[function(a){return a.parentNode()},"$0","gbx",0,0,5],
i5:[function(a){return a.previousNode()},"$0","gcs",0,0,5],
"%":"TreeWalker"},
jM:{"^":"a3;","%":"CompositionEvent|FocusEvent|KeyboardEvent|SVGZoomEvent|TextEvent|TouchEvent;UIEvent"},
oC:{"^":"d;",
k:function(a){return String(a)},
$isd:1,
"%":"URL"},
oE:{"^":"iO;q:height=,m:width=","%":"HTMLVideoElement"},
oF:{"^":"r;i:length=","%":"VideoTrackList"},
oI:{"^":"d;q:height=,m:width=","%":"VTTRegion"},
oJ:{"^":"d;i:length=","%":"VTTRegionList"},
oK:{"^":"r;",
af:function(a,b){return a.send(b)},
"%":"WebSocket"},
c_:{"^":"r;",
gh7:function(a){var z,y
z=P.be
y=new P.W(0,$.t,null,[z])
this.fj(a)
this.fN(a,W.f7(new W.jP(new P.eS(y,[z]))))
return y},
fN:function(a,b){return a.requestAnimationFrame(H.a6(b,1))},
fj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isc_:1,
$isd:1,
$isr:1,
"%":"DOMWindow|Window"},
jP:{"^":"i:0;a",
$1:[function(a){this.a.aO(0,a)},null,null,2,0,null,35,"call"]},
oL:{"^":"r;",$isr:1,$isd:1,"%":"Worker"},
oM:{"^":"r;",$isd:1,"%":"CompositorWorkerGlobalScope|DedicatedWorkerGlobalScope|ServiceWorkerGlobalScope|SharedWorkerGlobalScope|WorkerGlobalScope"},
oQ:{"^":"p;J:name=,dj:namespaceURI=","%":"Attr"},
oR:{"^":"d;ce:bottom=,q:height=,aX:left=,cv:right=,b2:top=,m:width=",
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
C:function(a,b){var z,y,x
if(b==null)return!1
z=J.k(b)
if(!z.$isP)return!1
y=a.left
x=z.gaX(b)
if(y==null?x==null:y===x){y=a.top
x=z.gb2(b)
if(y==null?x==null:y===x){y=a.width
x=z.gm(b)
if(y==null?x==null:y===x){y=a.height
z=z.gq(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gE:function(a){var z,y,x,w
z=J.X(a.left)
y=J.X(a.top)
x=J.X(a.width)
w=J.X(a.height)
return W.eN(W.aF(W.aF(W.aF(W.aF(0,z),y),x),w))},
gcE:function(a){return new P.aj(a.left,a.top,[null])},
$isP:1,
$asP:I.O,
"%":"ClientRect"},
oS:{"^":"ia;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isq:1,
$asq:function(){return[P.P]},
$iso:1,
$aso:function(){return[P.P]},
$isa:1,
$asa:function(){return[P.P]},
$isc:1,
$asc:function(){return[P.P]},
"%":"ClientRectList|DOMRectList"},
hR:{"^":"d+z;",
$asa:function(){return[P.P]},
$asc:function(){return[P.P]},
$isa:1,
$isc:1},
ia:{"^":"hR+G;",
$asa:function(){return[P.P]},
$asc:function(){return[P.P]},
$isa:1,
$isc:1},
oT:{"^":"ib;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.ao]},
$isc:1,
$asc:function(){return[W.ao]},
$isq:1,
$asq:function(){return[W.ao]},
$iso:1,
$aso:function(){return[W.ao]},
"%":"CSSRuleList"},
hS:{"^":"d+z;",
$asa:function(){return[W.ao]},
$asc:function(){return[W.ao]},
$isa:1,
$isc:1},
ib:{"^":"hS+G;",
$asa:function(){return[W.ao]},
$asc:function(){return[W.ao]},
$isa:1,
$isc:1},
oU:{"^":"p;",$isd:1,"%":"DocumentType"},
oV:{"^":"hl;",
gq:function(a){return a.height},
gm:function(a){return a.width},
gn:function(a){return a.x},
sn:function(a,b){a.x=b},
gt:function(a){return a.y},
st:function(a,b){a.y=b},
"%":"DOMRect"},
oW:{"^":"hW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.as]},
$iso:1,
$aso:function(){return[W.as]},
$isa:1,
$asa:function(){return[W.as]},
$isc:1,
$asc:function(){return[W.as]},
"%":"GamepadList"},
hC:{"^":"d+z;",
$asa:function(){return[W.as]},
$asc:function(){return[W.as]},
$isa:1,
$isc:1},
hW:{"^":"hC+G;",
$asa:function(){return[W.as]},
$asc:function(){return[W.as]},
$isa:1,
$isc:1},
oY:{"^":"w;",$isr:1,$isd:1,"%":"HTMLFrameSetElement"},
p0:{"^":"hX;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
"%":"MozNamedAttrMap|NamedNodeMap"},
hD:{"^":"d+z;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
hX:{"^":"hD+G;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
p1:{"^":"fV;",
a9:function(a){return a.clone()},
"%":"Request"},
p5:{"^":"r;",$isr:1,$isd:1,"%":"ServiceWorker"},
p6:{"^":"hY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.az]},
$isc:1,
$asc:function(){return[W.az]},
$isq:1,
$asq:function(){return[W.az]},
$iso:1,
$aso:function(){return[W.az]},
"%":"SpeechRecognitionResultList"},
hE:{"^":"d+z;",
$asa:function(){return[W.az]},
$asc:function(){return[W.az]},
$isa:1,
$isc:1},
hY:{"^":"hE+G;",
$asa:function(){return[W.az]},
$asc:function(){return[W.az]},
$isa:1,
$isc:1},
p7:{"^":"hZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.aA]},
$iso:1,
$aso:function(){return[W.aA]},
$isa:1,
$asa:function(){return[W.aA]},
$isc:1,
$asc:function(){return[W.aA]},
"%":"StyleSheetList"},
hF:{"^":"d+z;",
$asa:function(){return[W.aA]},
$asc:function(){return[W.aA]},
$isa:1,
$isc:1},
hZ:{"^":"hF+G;",
$asa:function(){return[W.aA]},
$asc:function(){return[W.aA]},
$isa:1,
$isc:1},
p9:{"^":"d;",$isd:1,"%":"WorkerLocation"},
pa:{"^":"d;",$isd:1,"%":"WorkerNavigator"},
jY:{"^":"e;fq:a<",
O:function(a,b){var z,y,x,w,v
for(z=this.gab(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.H)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gab:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.y([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=z[w]
u=J.l(v)
if(u.gdj(v)==null)y.push(u.gJ(v))}return y},
gH:function(a){return this.gab(this).length===0},
$isC:1,
$asC:function(){return[P.n,P.n]}},
k9:{"^":"jY;a",
h:function(a,b){return this.a.getAttribute(b)},
j:function(a,b,c){this.a.setAttribute(b,c)},
gi:function(a){return this.gab(this).length}},
eG:{"^":"a4;a,b,c,$ti",
V:function(a,b,c,d){return W.a2(this.a,this.b,a,!1,H.L(this,0))},
aY:function(a,b,c){return this.V(a,null,b,c)}},
ac:{"^":"eG;a,b,c,$ti"},
eF:{"^":"a4;a,b,c,$ti",
V:function(a,b,c,d){var z,y,x,w
z=H.L(this,0)
y=this.$ti
x=new W.kW(null,new H.V(0,null,null,null,null,null,0,[[P.a4,z],[P.ed,z]]),y)
x.a=new P.c3(null,x.ghd(x),0,null,null,null,null,y)
for(z=this.a,z=new H.cv(z,z.gi(z),0,null),w=this.c;z.v();)x.D(0,new W.eG(z.d,w,!1,y))
z=x.a
z.toString
return new P.jZ(z,[H.L(z,0)]).V(a,b,c,d)},
aY:function(a,b,c){return this.V(a,null,b,c)},
dW:function(a){return this.V(a,null,null,null)}},
kc:{"^":"ed;a,b,c,d,e,$ti",
X:function(a){if(this.b==null)return
this.dz()
this.b=null
this.d=null
return},
b_:function(a,b){if(this.b==null)return;++this.a
this.dz()},
cq:function(a){return this.b_(a,null)},
gaW:function(){return this.a>0},
cu:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dv()},
dv:function(){var z=this.d
if(z!=null&&this.a<=0)J.ft(this.b,this.c,z,!1)},
dz:function(){var z=this.d
if(z!=null)J.fG(this.b,this.c,z,!1)},
f_:function(a,b,c,d,e){this.dv()},
u:{
a2:function(a,b,c,d,e){var z=c==null?null:W.f7(new W.kd(c))
z=new W.kc(0,a,b,z,!1,[e])
z.f_(a,b,c,!1,e)
return z}}},
kd:{"^":"i:0;a",
$1:[function(a){return this.a.$1(a)},null,null,2,0,null,2,"call"]},
kW:{"^":"e;a,b,$ti",
D:function(a,b){var z,y
z=this.b
if(z.S(0,b))return
y=this.a
z.j(0,b,b.aY(y.gh2(y),new W.kX(this,b),y.gh4()))},
L:function(a,b){var z=this.b.L(0,b)
if(z!=null)J.d5(z)},
dK:[function(a){var z,y
for(z=this.b,y=z.gcF(z),y=y.gI(y);y.v();)J.d5(y.gw())
z.am(0)
this.a.dK(0)},"$0","ghd",0,0,1]},
kX:{"^":"i:2;a,b",
$0:function(){return this.a.L(0,this.b)}},
cN:{"^":"e;ek:a<",
av:function(a){return $.$get$eM().M(0,W.b0(a))},
al:function(a,b,c){var z,y,x
z=W.b0(a)
y=$.$get$cO()
x=y.h(0,H.f(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
f2:function(a){var z,y
z=$.$get$cO()
if(z.gH(z)){for(y=0;y<262;++y)z.j(0,C.H[y],W.lK())
for(y=0;y<12;++y)z.j(0,C.j[y],W.lL())}},
u:{
eL:function(a){var z,y
z=document.createElement("a")
y=new W.kQ(z,window.location)
y=new W.cN(y)
y.f2(a)
return y},
oZ:[function(a,b,c,d){return!0},"$4","lK",8,0,8,11,12,1,13],
p_:[function(a,b,c,d){var z,y,x,w,v
z=d.gek()
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
return z},"$4","lL",8,0,8,11,12,1,13]}},
G:{"^":"e;$ti",
gI:function(a){return new W.dI(a,this.gi(a),-1,null)},
D:function(a,b){throw H.b(new P.j("Cannot add to immutable List."))},
az:function(a,b){throw H.b(new P.j("Cannot remove from immutable List."))},
a0:function(a,b,c,d,e){throw H.b(new P.j("Cannot setRange on immutable List."))},
$isa:1,
$asa:null,
$isc:1,
$asc:null},
dX:{"^":"e;a",
D:function(a,b){this.a.push(b)},
av:function(a){return C.a.dE(this.a,new W.iU(a))},
al:function(a,b,c){return C.a.dE(this.a,new W.iT(a,b,c))}},
iU:{"^":"i:0;a",
$1:function(a){return a.av(this.a)}},
iT:{"^":"i:0;a,b,c",
$1:function(a){return a.al(this.a,this.b,this.c)}},
kR:{"^":"e;ek:d<",
av:function(a){return this.a.M(0,W.b0(a))},
al:["eR",function(a,b,c){var z,y
z=W.b0(a)
y=this.c
if(y.M(0,H.f(z)+"::"+b))return this.d.h6(c)
else if(y.M(0,"*::"+b))return this.d.h6(c)
else{y=this.b
if(y.M(0,H.f(z)+"::"+b))return!0
else if(y.M(0,"*::"+b))return!0
else if(y.M(0,H.f(z)+"::*"))return!0
else if(y.M(0,"*::*"))return!0}return!1}],
f3:function(a,b,c,d){var z,y,x
this.a.N(0,c)
z=b.cG(0,new W.kS())
y=b.cG(0,new W.kT())
this.b.N(0,z)
x=this.c
x.N(0,C.h)
x.N(0,y)}},
kS:{"^":"i:0;",
$1:function(a){return!C.a.M(C.j,a)}},
kT:{"^":"i:0;",
$1:function(a){return C.a.M(C.j,a)}},
l4:{"^":"kR;e,a,b,c,d",
al:function(a,b,c){if(this.eR(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.d7(a).a.getAttribute("template")==="")return this.e.M(0,b)
return!1},
u:{
eT:function(){var z=P.n
z=new W.l4(P.dP(C.i,z),P.aa(null,null,null,z),P.aa(null,null,null,z),P.aa(null,null,null,z),null)
z.f3(null,new H.bx(C.i,new W.l5(),[H.L(C.i,0),null]),["TEMPLATE"],null)
return z}}},
l5:{"^":"i:0;",
$1:[function(a){return"TEMPLATE::"+H.f(a)},null,null,2,0,null,24,"call"]},
l0:{"^":"e;",
av:function(a){var z=J.k(a)
if(!!z.$ise9)return!1
z=!!z.$isx
if(z&&W.b0(a)==="foreignObject")return!1
if(z)return!0
return!1},
al:function(a,b,c){if(b==="is"||C.c.eD(b,"on"))return!1
return this.av(a)}},
dI:{"^":"e;a,b,c,d",
v:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.aX(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gw:function(){return this.d}},
k3:{"^":"e;a",
dC:function(a,b,c,d){return H.B(new P.j("You can only attach EventListeners to your own window."))},
e9:function(a,b,c,d){return H.B(new P.j("You can only attach EventListeners to your own window."))},
$isr:1,
$isd:1,
u:{
k4:function(a){if(a===window)return a
else return new W.k3(a)}}},
dW:{"^":"e;"},
kQ:{"^":"e;a,b"},
eU:{"^":"e;a",
cK:function(a){new W.l7(this).$2(a,null)},
aK:function(a,b){var z
if(b==null){z=a.parentNode
if(z!=null)z.removeChild(a)}else b.removeChild(a)},
fP:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.d7(a)
x=y.gfq().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.E(t)}v="element unprintable"
try{v=J.F(a)}catch(t){H.E(t)}try{u=W.b0(a)
this.fO(a,b,z,v,u,y,x)}catch(t){if(H.E(t) instanceof P.am)throw t
else{this.aK(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")console.warn(s)}}},
fO:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aK(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(z)
return}if(!this.a.av(a)){this.aK(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+J.F(b)
if(typeof console!="undefined")console.warn(z)
return}if(g!=null)if(!this.a.al(a,"is",g)){this.aK(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(z)
return}z=f.gab(f)
y=H.y(z.slice(0),[H.L(z,0)])
for(x=f.gab(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=y[x]
if(!this.a.al(a,J.fM(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.f(e)+" "+H.f(w)+'="'+H.f(z.getAttribute(w))+'">'
if(typeof console!="undefined")console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.k(a).$isei)this.cK(a.content)}},
l7:{"^":"i:18;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fP(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aK(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fz(z)}catch(w){H.E(w)
v=z
if(x){u=J.l(v)
if(u.gbx(v)!=null){u.gbx(v)
u.gbx(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}}}],["","",,P,{"^":"",
lC:function(a){var z,y,x,w,v
if(a==null)return
z=P.b2()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
lz:function(a){var z,y
z=new P.W(0,$.t,null,[null])
y=new P.eA(z,[null])
a.then(H.a6(new P.lA(y),1))["catch"](H.a6(new P.lB(y),1))
return z},
du:function(){var z=$.dt
if(z==null){z=J.cd(window.navigator.userAgent,"Opera",0)
$.dt=z}return z},
hh:function(){var z,y
z=$.dq
if(z!=null)return z
y=$.dr
if(y==null){y=J.cd(window.navigator.userAgent,"Firefox",0)
$.dr=y}if(y)z="-moz-"
else{y=$.ds
if(y==null){y=P.du()!==!0&&J.cd(window.navigator.userAgent,"Trident/",0)
$.ds=y}if(y)z="-ms-"
else z=P.du()===!0?"-o-":"-webkit-"}$.dq=z
return z},
kY:{"^":"e;",
aR:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
z.push(a)
this.b.push(null)
return y},
a5:function(a){var z,y,x,w,v,u
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.k(a)
if(!!y.$isap)return new Date(a.a)
if(!!y.$iso2)throw H.b(new P.bC("structured clone of RegExp"))
if(!!y.$isa9)return a
if(!!y.$isbl)return a
if(!!y.$isdG)return a
if(!!y.$isbQ)return a
if(!!y.$iscz||!!y.$isby)return a
if(!!y.$isC){x=this.aR(a)
w=this.b
v=w.length
if(x>=v)return H.h(w,x)
u=w[x]
z.a=u
if(u!=null)return u
u={}
z.a=u
if(x>=v)return H.h(w,x)
w[x]=u
y.O(a,new P.l_(z,this))
return z.a}if(!!y.$isa){x=this.aR(a)
z=this.b
if(x>=z.length)return H.h(z,x)
u=z[x]
if(u!=null)return u
return this.hi(a,x)}throw H.b(new P.bC("structured clone of other type"))},
hi:function(a,b){var z,y,x,w,v
z=J.A(a)
y=z.gi(a)
x=new Array(y)
w=this.b
if(b>=w.length)return H.h(w,b)
w[b]=x
for(v=0;v<y;++v){w=this.a5(z.h(a,v))
if(v>=x.length)return H.h(x,v)
x[v]=w}return x}},
l_:{"^":"i:4;a,b",
$2:function(a,b){this.a.a[a]=this.b.a5(b)}},
jR:{"^":"e;",
aR:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
a5:function(a){var z,y,x,w,v,u,t,s,r
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.ap(y,!0)
x.bJ(y,!0)
return x}if(a instanceof RegExp)throw H.b(new P.bC("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.lz(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.aR(a)
x=this.b
u=x.length
if(v>=u)return H.h(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.b2()
z.a=t
if(v>=u)return H.h(x,v)
x[v]=t
this.hD(a,new P.jS(z,this))
return z.a}if(a instanceof Array){v=this.aR(a)
x=this.b
if(v>=x.length)return H.h(x,v)
t=x[v]
if(t!=null)return t
u=J.A(a)
s=u.gi(a)
t=this.c?new Array(s):a
if(v>=x.length)return H.h(x,v)
x[v]=t
if(typeof s!=="number")return H.u(s)
x=J.aU(t)
r=0
for(;r<s;++r)x.j(t,r,this.a5(u.h(a,r)))
return t}return a}},
jS:{"^":"i:4;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.a5(b)
J.bJ(z,a,y)
return y}},
kZ:{"^":"kY;a,b"},
cJ:{"^":"jR;a,b,c",
hD:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x){w=z[x]
b.$2(w,a[w])}}},
lA:{"^":"i:0;a",
$1:[function(a){return this.a.aO(0,a)},null,null,2,0,null,14,"call"]},
lB:{"^":"i:0;a",
$1:[function(a){return this.a.ci(a)},null,null,2,0,null,14,"call"]}}],["","",,P,{"^":"",
lb:function(a){var z,y,x
z=new P.W(0,$.t,null,[null])
y=new P.eS(z,[null])
a.toString
x=W.a3
W.a2(a,"success",new P.lc(a,y),!1,x)
W.a2(a,"error",y.ghe(),!1,x)
return z},
ms:{"^":"d;",
e0:[function(a,b){if(b==null)a.continue()
else a.continue(b)},function(a){return this.e0(a,null)},"i0","$1","$0","gP",0,2,19,0,26],
"%":"IDBCursor|IDBCursorWithValue"},
lc:{"^":"i:0;a,b",
$1:function(a){this.b.aO(0,new P.cJ([],[],!1).a5(this.a.result))}},
ct:{"^":"d;",$isct:1,"%":"IDBKeyRange"},
nH:{"^":"d;",
dB:function(a,b,c){var z,y,x,w,v
try{z=null
z=this.fs(a,b)
w=P.lb(z)
return w}catch(v){y=H.E(v)
x=H.U(v)
w=P.hr(y,x,null)
return w}},
D:function(a,b){return this.dB(a,b,null)},
ft:function(a,b,c){return a.add(new P.kZ([],[]).a5(b))},
fs:function(a,b){return this.ft(a,b,null)},
"%":"IDBObjectStore"},
o4:{"^":"r;U:error=",
gF:function(a){return new P.cJ([],[],!1).a5(a.result)},
"%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},
oy:{"^":"r;U:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
l9:[function(a,b,c,d){var z,y,x
if(b===!0){z=[c]
C.a.N(z,d)
d=z}y=P.aN(J.dc(d,P.lY()),!0,null)
x=H.j4(a,y)
return P.eY(x)},null,null,8,0,null,27,28,29,30],
cS:function(a,b,c){var z
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(z){H.E(z)}return!1},
f_:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
eY:[function(a){var z
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=J.k(a)
if(!!z.$isbw)return a.a
if(!!z.$isbl||!!z.$isa3||!!z.$isct||!!z.$isbQ||!!z.$isp||!!z.$isa1||!!z.$isc_)return a
if(!!z.$isap)return H.S(a)
if(!!z.$iscn)return P.eZ(a,"$dart_jsFunction",new P.le())
return P.eZ(a,"_$dart_jsObject",new P.lf($.$get$cR()))},"$1","lZ",2,0,0,15],
eZ:function(a,b,c){var z=P.f_(a,b)
if(z==null){z=c.$1(a)
P.cS(a,b,z)}return z},
eX:[function(a){var z,y
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else{if(a instanceof Object){z=J.k(a)
z=!!z.$isbl||!!z.$isa3||!!z.$isct||!!z.$isbQ||!!z.$isp||!!z.$isa1||!!z.$isc_}else z=!1
if(z)return a
else if(a instanceof Date){z=0+a.getTime()
y=new P.ap(z,!1)
y.bJ(z,!1)
return y}else if(a.constructor===$.$get$cR())return a.o
else return P.f6(a)}},"$1","lY",2,0,24,15],
f6:function(a){if(typeof a=="function")return P.cT(a,$.$get$bN(),new P.lo())
if(a instanceof Array)return P.cT(a,$.$get$cM(),new P.lp())
return P.cT(a,$.$get$cM(),new P.lq())},
cT:function(a,b,c){var z=P.f_(a,b)
if(z==null||!(a instanceof Object)){z=c.$1(a)
P.cS(a,b,z)}return z},
bw:{"^":"e;a",
h:["eL",function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.b(P.aZ("property is not a String or num"))
return P.eX(this.a[b])}],
j:["cM",function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.b(P.aZ("property is not a String or num"))
this.a[b]=P.eY(c)}],
gE:function(a){return 0},
C:function(a,b){if(b==null)return!1
return b instanceof P.bw&&this.a===b.a},
k:function(a){var z,y
try{z=String(this.a)
return z}catch(y){H.E(y)
z=this.eN(this)
return z}},
bp:function(a,b){var z,y
z=this.a
y=b==null?null:P.aN(new H.bx(b,P.lZ(),[H.L(b,0),null]),!0,null)
return P.eX(z[a].apply(z,y))}},
ix:{"^":"bw;a"},
iv:{"^":"iB;a,$ti",
f8:function(a){var z
if(typeof a==="number"&&Math.floor(a)===a)z=a<0||a>=this.gi(this)
else z=!1
if(z)throw H.b(P.I(a,0,this.gi(this),null,null))},
h:function(a,b){var z
if(typeof b==="number"&&b===C.d.cC(b)){if(typeof b==="number"&&Math.floor(b)===b)z=b<0||b>=this.gi(this)
else z=!1
if(z)H.B(P.I(b,0,this.gi(this),null,null))}return this.eL(0,b)},
j:function(a,b,c){var z
if(typeof b==="number"&&b===C.e.cC(b)){if(typeof b==="number"&&Math.floor(b)===b)z=b<0||b>=this.gi(this)
else z=!1
if(z)H.B(P.I(b,0,this.gi(this),null,null))}this.cM(0,b,c)},
gi:function(a){var z=this.a.length
if(typeof z==="number"&&z>>>0===z)return z
throw H.b(new P.T("Bad JsArray length"))},
si:function(a,b){this.cM(0,"length",b)},
D:function(a,b){this.bp("push",[b])},
az:function(a,b){this.f8(b)
return J.aX(this.bp("splice",[b,1]),0)},
a0:function(a,b,c,d,e){var z,y
P.iw(b,c,this.gi(this))
z=c-b
if(z===0)return
y=[b,z]
C.a.N(y,new H.cF(d,e,null,[H.K(d,"z",0)]).ic(0,z))
this.bp("splice",y)},
u:{
iw:function(a,b,c){if(a>c)throw H.b(P.I(a,0,c,null,null))
if(b<a||b>c)throw H.b(P.I(b,a,c,null,null))}}},
iB:{"^":"bw+z;",$asa:null,$asc:null,$isa:1,$isc:1},
le:{"^":"i:0;",
$1:function(a){var z=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.l9,a,!1)
P.cS(z,$.$get$bN(),a)
return z}},
lf:{"^":"i:0;a",
$1:function(a){return new this.a(a)}},
lo:{"^":"i:0;",
$1:function(a){return new P.ix(a)}},
lp:{"^":"i:0;",
$1:function(a){return new P.iv(a,[null])}},
lq:{"^":"i:0;",
$1:function(a){return new P.bw(a)}}}],["","",,P,{"^":"",
b8:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
aj:{"^":"e;n:a>,t:b>,$ti",
k:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
C:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.aj))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gE:function(a){var z,y
z=J.X(this.a)
y=J.X(this.b)
return P.eO(P.b8(P.b8(0,z),y))},
p:function(a,b){var z,y,x,w
z=this.a
y=J.l(b)
x=y.gn(b)
if(typeof z!=="number")return z.p()
if(typeof x!=="number")return H.u(x)
w=this.b
y=y.gt(b)
if(typeof w!=="number")return w.p()
if(typeof y!=="number")return H.u(y)
return new P.aj(z+x,w+y,this.$ti)},
R:function(a,b){var z,y,x,w
z=this.a
y=J.l(b)
x=y.gn(b)
if(typeof z!=="number")return z.R()
if(typeof x!=="number")return H.u(x)
w=this.b
y=y.gt(b)
if(typeof w!=="number")return w.R()
if(typeof y!=="number")return H.u(y)
return new P.aj(z-x,w-y,this.$ti)}},
kL:{"^":"e;$ti",
gcv:function(a){var z,y
z=this.a
y=this.c
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.u(y)
return z+y},
gce:function(a){var z,y
z=this.b
y=this.d
if(typeof z!=="number")return z.p()
if(typeof y!=="number")return H.u(y)
return z+y},
k:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+H.f(this.c)+" x "+H.f(this.d)},
C:function(a,b){var z,y,x,w
if(b==null)return!1
z=J.k(b)
if(!z.$isP)return!1
y=this.a
x=z.gaX(b)
if(y==null?x==null:y===x){x=this.b
w=z.gb2(b)
if(x==null?w==null:x===w){w=this.c
if(typeof y!=="number")return y.p()
if(typeof w!=="number")return H.u(w)
if(y+w===z.gcv(b)){y=this.d
if(typeof x!=="number")return x.p()
if(typeof y!=="number")return H.u(y)
z=x+y===z.gce(b)}else z=!1}else z=!1}else z=!1
return z},
gE:function(a){var z,y,x,w,v,u
z=this.a
y=J.X(z)
x=this.b
w=J.X(x)
v=this.c
if(typeof z!=="number")return z.p()
if(typeof v!=="number")return H.u(v)
u=this.d
if(typeof x!=="number")return x.p()
if(typeof u!=="number")return H.u(u)
return P.eO(P.b8(P.b8(P.b8(P.b8(0,y),w),z+v&0x1FFFFFFF),x+u&0x1FFFFFFF))},
gcE:function(a){return new P.aj(this.a,this.b,this.$ti)}},
P:{"^":"kL;aX:a>,b2:b>,m:c>,q:d>,$ti",$asP:null,u:{
jg:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.ae()
if(c<0)z=-c*0
else z=c
if(typeof d!=="number")return d.ae()
if(d<0)y=-d*0
else y=d
return new P.P(a,b,z,y,[e])}}}}],["","",,P,{"^":"",me:{"^":"aM;",$isd:1,"%":"SVGAElement"},mh:{"^":"x;",$isd:1,"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGSetElement"},mC:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEBlendElement"},mD:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEColorMatrixElement"},mE:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEComponentTransferElement"},mF:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFECompositeElement"},mG:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEConvolveMatrixElement"},mH:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEDiffuseLightingElement"},mI:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEDisplacementMapElement"},mJ:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEFloodElement"},mK:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEGaussianBlurElement"},mL:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEImageElement"},mM:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEMergeElement"},mN:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEMorphologyElement"},mO:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFEOffsetElement"},mP:{"^":"x;n:x=,t:y=","%":"SVGFEPointLightElement"},mQ:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFESpecularLightingElement"},mR:{"^":"x;n:x=,t:y=","%":"SVGFESpotLightElement"},mS:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFETileElement"},mT:{"^":"x;q:height=,F:result=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFETurbulenceElement"},mX:{"^":"x;q:height=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGFilterElement"},mZ:{"^":"aM;q:height=,m:width=,n:x=,t:y=","%":"SVGForeignObjectElement"},hs:{"^":"aM;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aM:{"^":"x;",$isd:1,"%":"SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},n5:{"^":"aM;q:height=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGImageElement"},b1:{"^":"d;",$ise:1,"%":"SVGLength"},ne:{"^":"i_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isa:1,
$asa:function(){return[P.b1]},
$isc:1,
$asc:function(){return[P.b1]},
"%":"SVGLengthList"},hG:{"^":"d+z;",
$asa:function(){return[P.b1]},
$asc:function(){return[P.b1]},
$isa:1,
$isc:1},i_:{"^":"hG+G;",
$asa:function(){return[P.b1]},
$asc:function(){return[P.b1]},
$isa:1,
$isc:1},nj:{"^":"x;",$isd:1,"%":"SVGMarkerElement"},nk:{"^":"x;q:height=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGMaskElement"},b5:{"^":"d;",$ise:1,"%":"SVGNumber"},nF:{"^":"i0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isa:1,
$asa:function(){return[P.b5]},
$isc:1,
$asc:function(){return[P.b5]},
"%":"SVGNumberList"},hH:{"^":"d+z;",
$asa:function(){return[P.b5]},
$asc:function(){return[P.b5]},
$isa:1,
$isc:1},i0:{"^":"hH+G;",
$asa:function(){return[P.b5]},
$asc:function(){return[P.b5]},
$isa:1,
$isc:1},nN:{"^":"x;q:height=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGPatternElement"},nQ:{"^":"d;n:x%,t:y%","%":"SVGPoint"},nR:{"^":"d;i:length=","%":"SVGPointList"},o0:{"^":"d;q:height=,m:width=,n:x%,t:y%","%":"SVGRect"},o1:{"^":"hs;q:height=,m:width=,n:x=,t:y=","%":"SVGRectElement"},e9:{"^":"x;",$ise9:1,$isd:1,"%":"SVGScriptElement"},oj:{"^":"i1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isa:1,
$asa:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
"%":"SVGStringList"},hI:{"^":"d+z;",
$asa:function(){return[P.n]},
$asc:function(){return[P.n]},
$isa:1,
$isc:1},i1:{"^":"hI+G;",
$asa:function(){return[P.n]},
$asc:function(){return[P.n]},
$isa:1,
$isc:1},x:{"^":"aq;",
sdU:function(a,b){this.bD(a,b)},
T:function(a,b,c,d){var z,y,x,w,v,u
z=H.y([],[W.dW])
z.push(W.eL(null))
z.push(W.eT())
z.push(new W.l0())
c=new W.eU(new W.dX(z))
y='<svg version="1.1">'+H.f(b)+"</svg>"
z=document
x=z.body
w=(x&&C.l).hj(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a5(w)
u=z.gaq(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
dN:function(a){return a.focus()},
ge1:function(a){return new W.ac(a,"change",!1,[W.a3])},
ge2:function(a){return new W.ac(a,"input",!1,[W.a3])},
ge3:function(a){return new W.ac(a,"mousedown",!1,[W.av])},
ge4:function(a){return new W.ac(a,"mousemove",!1,[W.av])},
ge5:function(a){return new W.ac(a,"mouseup",!1,[W.av])},
$isx:1,
$isr:1,
$isd:1,
"%":"SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGMetadataElement|SVGStopElement|SVGStyleElement|SVGTitleElement;SVGElement"},ok:{"^":"aM;q:height=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGSVGElement"},ol:{"^":"x;",$isd:1,"%":"SVGSymbolElement"},ej:{"^":"aM;","%":";SVGTextContentElement"},oq:{"^":"ej;",$isd:1,"%":"SVGTextPathElement"},or:{"^":"ej;n:x=,t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},b7:{"^":"d;",$ise:1,"%":"SVGTransform"},oz:{"^":"i2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isa:1,
$asa:function(){return[P.b7]},
$isc:1,
$asc:function(){return[P.b7]},
"%":"SVGTransformList"},hJ:{"^":"d+z;",
$asa:function(){return[P.b7]},
$asc:function(){return[P.b7]},
$isa:1,
$isc:1},i2:{"^":"hJ+G;",
$asa:function(){return[P.b7]},
$asc:function(){return[P.b7]},
$isa:1,
$isc:1},oD:{"^":"aM;q:height=,m:width=,n:x=,t:y=",$isd:1,"%":"SVGUseElement"},oG:{"^":"x;",$isd:1,"%":"SVGViewElement"},oH:{"^":"d;",$isd:1,"%":"SVGViewSpec"},oX:{"^":"x;",$isd:1,"%":"SVGGradientElement|SVGLinearGradientElement|SVGRadialGradientElement"},p2:{"^":"x;",$isd:1,"%":"SVGCursorElement"},p3:{"^":"x;",$isd:1,"%":"SVGFEDropShadowElement"},p4:{"^":"x;",$isd:1,"%":"SVGMPathElement"}}],["","",,P,{"^":"",bL:{"^":"d;i:length=",$isbL:1,$ise:1,"%":"AudioBuffer"},mj:{"^":"r;",
fd:function(a,b,c,d){return a.decodeAudioData(b,H.a6(c,1),H.a6(d,1))},
hm:function(a,b){var z,y,x
z=P.bL
y=new P.W(0,$.t,null,[z])
x=new P.eA(y,[z])
this.fd(a,b,new P.fQ(x),new P.fR(x))
return y},
"%":"AudioContext|OfflineAudioContext|webkitAudioContext"},fQ:{"^":"i:0;a",
$1:[function(a){this.a.aO(0,a)},null,null,2,0,null,1,"call"]},fR:{"^":"i:0;a",
$1:[function(a){var z=this.a
if(a==null)z.ci("")
else z.ci(a)},null,null,2,0,null,3,"call"]}}],["","",,P,{"^":"",o3:{"^":"d;",$isd:1,"%":"WebGL2RenderingContext"},p8:{"^":"d;",$isd:1,"%":"WebGL2RenderingContextBase"}}],["","",,P,{"^":"",oh:{"^":"i3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.D(b,a,null,null,null))
return P.lC(a.item(b))},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isa:1,
$asa:function(){return[P.C]},
$isc:1,
$asc:function(){return[P.C]},
"%":"SQLResultSetRowList"},hK:{"^":"d+z;",
$asa:function(){return[P.C]},
$asc:function(){return[P.C]},
$isa:1,
$isc:1},i3:{"^":"hK+G;",
$asa:function(){return[P.C]},
$asc:function(){return[P.C]},
$isa:1,
$isc:1}}],["","",,U,{"^":"",
h2:function(a,b){var z
if($.bn==null){z=new H.V(0,null,null,null,null,null,0,[P.n,U.ci])
$.bn=z
z.j(0,"NetLogo",new U.iQ("  "))
$.bn.j(0,"plain",new U.j1("  "))}if($.bn.S(0,a))return $.bn.h(0,a).d9(b)
else return C.p.hw(b)},
n8:[function(a,b){var z=C.p.hk(b)
if(!!J.k(z).$isC){$.$get$bH().j(0,a,U.h4(a,z))
$.$get$bH().h(0,a).aa()}},"$2","m2",4,0,25,6,33],
n7:[function(a,b){if($.$get$bH().S(0,a))return U.h2(b,$.$get$bH().h(0,a).ck())
return},"$2","m1",4,0,26,6,34],
ph:[function(){var z=$.$get$cY()
J.bJ(z,"NetTango_InitWorkspace",U.m2())
J.bJ(z,"NetTango_ExportCode",U.m1())},"$0","fk",0,0,1],
jm:function(a,b){var z,y
if(!$.$get$bz().S(0,a)){z=new XMLHttpRequest()
C.w.i3(z,"GET",b,!0)
z.responseType="arraybuffer"
y=W.nW
W.a2(z,"load",new U.jo(a,z),!1,y)
W.a2(z,"error",new U.jp(),!1,y)
z.send()}},
jr:function(a){var z
if($.$get$bz().h(0,a)!=null&&!$.jq){z=$.$get$bY().createBufferSource()
z.buffer=$.$get$bz().h(0,a)
z.connect($.$get$bY().destination,0,0)
z.loop=!1
z.playbackRate.value=1
if(!!z.start)z.start(0)
else z.noteOn(0)}},
fp:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{z=H.e5(a,null,null)
return z}catch(y){if(!!J.k(H.E(y)).$isbO)return b
else throw y}return b},
aJ:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{z=P.m4(a,null)
return z}catch(y){if(!!J.k(H.E(y)).$isbO)return b
else throw y}return b},
cb:function(a,b){if(a==null)return!1
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return!1},
bm:{"^":"e;a,b,c,d,e,n:f*,t:r*,m:x>,q:y>,P:z*,by:Q@,dT:ch<,cx,e6:cy<,db,dx,dy,fr,fx,dR:fy<,d4:go<,id,k1,k2,k3,dg:k4<,dA:r1<",
gaT:function(){return 0},
gay:function(){return 0},
gaS:function(){return this.z!=null},
ghN:function(){return this.Q!=null},
gb3:function(){return this.r},
ghb:function(){return J.m(this.r,this.y)},
gaM:function(){var z=this.z
return z!=null?z.gaM():this},
gbv:function(){var z=this.z
if(!(z!=null)){z=this.cx
z=z!=null?z.r2:null}return z},
gdV:function(){return this.Q==null},
a9:function(a){var z=U.fT(this.fx,this.c)
this.bT(0,z)
return z},
bT:function(a,b){var z,y,x,w
b.b=this.b
b.d=this.d
b.e=this.e
b.db=this.db
b.dx=this.dx
b.fr=this.fr
b.x=this.x
b.y=this.y
b.fy=this.fy
for(z=this.cy,y=z.length,x=b.cy,w=0;w<z.length;z.length===y||(0,H.H)(z),++w)x.push(J.fw(z[w],b))},
Z:function(){var z,y,x,w,v
z=P.b2()
z.j(0,"id",this.a)
z.j(0,"name",this.b)
z.j(0,"action",this.c)
z.j(0,"type",this.d)
z.j(0,"format",this.e)
z.j(0,"start",this.fy)
y=this.cy
if(y.length!==0){z.j(0,"params",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){v=y[w]
J.bh(z.h(0,"params"),v.Z())}}return z},
ck:function(){var z=[]
this.a2(z)
return z},
a2:function(a){var z
J.bh(a,this.Z())
z=this.z
if(z!=null)z.a2(a)},
c9:function(a,b){var z,y,x,w,v,u,t
z=this.da(a)
if(typeof z!=="number")return z.p()
this.x=Math.max(80,z+20)
if(!this.k4&&this.cy.length!==0)for(z=this.cy,y=z.length,x=0,w=0;w<z.length;z.length===y||(0,H.H)(z),++w){v=z[w]
v.c8(a)
u=J.m(J.da(v),10)
if(typeof u!=="number")return H.u(u)
x+=u}else x=0
z=this.f
y=this.x
if(typeof z!=="number")return z.p()
b=Math.max(b,z+y+x)
t=this.gbv()
if(t!=null)b=t.c9(a,b)
z=this.f
if(typeof z!=="number")return H.u(z)
this.x=b-z
return b},
a3:function(a,b){var z
this.ch=a
this.cx=b
z=this.z
if(z!=null)z.a3(a+this.gay(),b)},
bk:["eG",function(){var z,y,x,w
z=this.z
if(z!=null){J.fL(z,J.m(this.r,this.y))
z=this.z
y=this.f
x=z.gdT()
w=this.ch
if(typeof x!=="number")return x.R()
if(typeof y!=="number")return y.p()
J.fK(z,y+(x-w)*25)
this.z.bk()}}],
da:function(a){var z,y
z=J.l(a)
z.a_(a)
z.sbt(a,this.fr)
y=z.dY(a,this.b).width
z.ac(a)
return y},
bo:function(a){var z,y,x
if(this.go){z=this.f
y=this.id
x=this.k2
if(typeof y!=="number")return y.R()
if(typeof x!=="number")return H.u(x)
if(typeof z!=="number")return z.p()
this.f=z+(y-x)
x=this.r
y=this.k1
z=this.k3
if(typeof y!=="number")return y.R()
if(typeof z!=="number")return H.u(z)
this.r=J.m(x,y-z)
this.k2=this.id
this.k3=this.k1}return this.go},
bV:function(a){var z,y,x
z=J.l(a)
z.a_(a)
z.sax(a,this.dx)
z.sbt(a,this.fr)
z.see(a,"left")
z.sef(a,"middle")
y=this.b
x=this.f
if(typeof x!=="number")return x.p()
z.dM(a,y,x+10,J.m(this.r,this.y/2))
z.ac(a)},
bW:function(a){var z=J.l(a)
z.a_(a)
this.c5(a)
z.sbG(a,this.dy)
z.scn(a,1.5)
z.shX(a,"round")
z.bF(a)
z.ac(a)},
bU:function(a){var z=J.l(a)
z.a_(a)
this.c5(a)
z.sax(a,this.db)
z.cl(a)
z.sax(a,"rgba(0, 0, 0, "+H.f(Math.min(1,0.075*this.ch)))
z.cl(a)
z.ac(a)},
fg:function(a){var z,y
z=J.l(a)
z.a_(a)
z.scn(a,5)
z.sbG(a,this.dy)
z.aw(a)
y=this.f
if(typeof y!=="number")return y.p()
z.aZ(a,y+10+25*this.gaT(),this.r)
this.c7(a,this.Q==null&&this.fy)
z.bF(a)
z.ac(a)},
fe:function(a){var z,y,x
z=J.l(a)
z.a_(a)
z.scn(a,5)
z.sbG(a,this.dy)
z.aw(a)
y=this.f
x=this.x
if(typeof y!=="number")return y.p()
z.aZ(a,y+x-10,J.m(this.r,this.y))
this.c6(a,this.z==null&&this.ch===0)
z.bF(a)
z.ac(a)},
ff:function(a){var z,y,x,w
z=this.x
for(y=this.cy,x=y.length-1;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=J.da(y[x])
if(typeof w!=="number")return H.u(w)
z-=10+w
if(x>=y.length)return H.h(y,x)
y[x].cj(a,z)}},
c5:["eF",function(a){var z,y,x,w,v
z=J.l(a)
z.aw(a)
y=this.f
if(typeof y!=="number")return y.p()
z.aZ(a,y+10,this.r)
this.c7(a,this.Q==null&&this.fy)
y=this.ch===0
x=y&&this.Q==null
this.dk(a,x,y&&this.z==null)
this.c6(a,this.z==null&&this.ch===0)
if(this.ch<=0)y=this.Q!=null&&this.z!=null
else y=!0
if(y){z.B(a,this.f,J.m(this.r,this.y))
z.B(a,this.f,this.r)
y=this.f
if(typeof y!=="number")return y.p()
z.B(a,y+10,this.r)}else if(this.z!=null){z.B(a,this.f,J.m(this.r,this.y))
z.B(a,this.f,J.m(this.r,10))
y=this.f
x=this.r
if(typeof y!=="number")return y.p()
z.K(a,y,x,y+10,x)}else{y=this.Q
x=this.f
w=this.r
v=this.y
if(y!=null){z.K(a,x,J.m(w,v),this.f,J.Q(J.m(this.r,this.y),10))
z.B(a,this.f,this.r)
y=this.f
if(typeof y!=="number")return y.p()
z.B(a,y+10,this.r)}else{z.K(a,x,J.m(w,v),this.f,J.Q(J.m(this.r,this.y),10))
z.B(a,this.f,J.m(this.r,10))
y=this.f
x=this.r
if(typeof y!=="number")return y.p()
z.K(a,y,x,y+10,x)}}z.cf(a)}],
dk:function(a,b,c){var z,y,x,w,v,u
z=this.f
y=this.x
if(typeof z!=="number")return z.p()
x=J.l(a)
x.B(a,z+y-10,this.r)
if(b&&c){z=this.f
y=this.x
if(typeof z!=="number")return z.p()
y=z+y
z=this.r
x.K(a,y,z,y,J.m(z,10))
z=this.f
y=this.x
if(typeof z!=="number")return z.p()
x.B(a,z+y,J.Q(J.m(this.r,this.y),10))
y=this.f
z=this.x
if(typeof y!=="number")return y.p()
w=J.m(this.r,this.y)
v=this.f
u=this.x
if(typeof v!=="number")return v.p()
x.K(a,y+z,w,v+u-10,J.m(this.r,this.y))}else if(c){z=this.f
y=this.x
if(typeof z!=="number")return z.p()
x.B(a,z+y,this.r)
y=this.f
z=this.x
if(typeof y!=="number")return y.p()
x.B(a,y+z,J.Q(J.m(this.r,this.y),10))
z=this.f
y=this.x
if(typeof z!=="number")return z.p()
w=J.m(this.r,this.y)
v=this.f
u=this.x
if(typeof v!=="number")return v.p()
x.K(a,z+y,w,v+u-10,J.m(this.r,this.y))}else{z=this.f
y=this.x
w=this.r
if(b){if(typeof z!=="number")return z.p()
z+=y
x.K(a,z,w,z,J.m(w,10))
w=this.f
z=this.x
if(typeof w!=="number")return w.p()
x.B(a,w+z,J.m(this.r,this.y))
z=this.f
w=this.x
if(typeof z!=="number")return z.p()
x.B(a,z+w-10,J.m(this.r,this.y))}else{if(typeof z!=="number")return z.p()
x.B(a,z+y,w)
z=this.f
y=this.x
if(typeof z!=="number")return z.p()
x.B(a,z+y,J.m(this.r,this.y))
y=this.f
z=this.x
if(typeof y!=="number")return y.p()
x.B(a,y+z-10,J.m(this.r,this.y))}}},
c7:function(a,b){var z,y,x
z=this.f
if(typeof z!=="number")return z.p()
y=z+20+25*this.gaT()
if(b){z=J.l(a)
z.B(a,y,this.r)
x=y+10
z.dF(a,y,J.m(this.r,5),x,J.m(this.r,5),x,this.r)}z=this.f
x=this.x
if(typeof z!=="number")return z.p()
J.db(a,z+x-10,this.r)},
c6:function(a,b){var z,y,x
z=this.f
if(typeof z!=="number")return z.p()
y=z+20
if(!this.k4)y+=25*this.gay()
if(b){z=y+10
x=J.l(a)
x.B(a,z,J.m(this.r,this.y))
x.dF(a,z,J.m(J.m(this.r,this.y),5),y,J.m(J.m(this.r,this.y),5),y,J.m(this.r,this.y))}J.db(a,y-10,J.m(this.r,this.y))},
br:function(a){var z,y,x,w,v
z=a.c
y=a.d
x=this.r
w=J.m(x,this.y)
v=this.f
if(typeof v!=="number")return H.u(v)
if(z>=v){if(typeof x!=="number")return H.u(x)
if(y>=x)if(z<=v+this.x){if(typeof w!=="number")return H.u(w)
v=y<=w}else v=!1
else v=!1}else v=!1
return v},
ad:function(a){var z,y,x
this.go=!0
z=a.c
this.id=z
y=a.d
this.k1=y
this.k2=z
this.k3=y
z=this.Q
if(z!=null){J.de(z,null)
this.Q=null}for(z=this.fx,x=this;x!=null;){z.fL(x)
z.bK(x)
x=x.gbv()}return this},
b6:function(a){var z
this.go=!1
this.k4=!1
this.r1=!1
z=this.fx
z.h0(this)
if(z.fX(this))U.jr("click")
z.e8()},
b4:function(a){this.id=a.c
this.k1=a.d},
b5:function(a){P.bf("slide")},
b8:function(a,b){var z=$.a7
$.a7=z+1
this.a=z
this.x=80
this.y=34
this.b=this.c},
u:{
fT:function(a,b){var z=new U.bm(null,null,b,null,null,0,0,0,0,null,null,0,null,H.y([],[U.ai]),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
z.b8(a,b)
return z},
dh:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=J.A(b)
y=z.h(b,"action")
x=y==null?"":J.F(y)
y=z.h(b,"name")
w=y==null?x:J.F(y)
if(!!J.k(z.h(b,"clauses")).$isa){y=H.y([],[U.aL])
v=[U.ai]
u=new U.bk(y,null,null,null,null,x,null,null,0,0,0,0,null,null,0,null,H.y([],v),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
t=$.a7
$.a7=t+1
u.a=t
u.x=80
u.y=34
u.b=x
t="end-"+H.f(x)
v=new U.cl(null,null,null,null,t,null,null,0,0,0,0,null,null,0,null,H.y([],v),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
s=$.a7
$.a7=s+1
v.a=s
v.x=80
v.y=34
v.b=t
v.fy=!1
v.y=17
u.ry=v
v.rx=u
y.push(v)
u.r2=u.ry}else{y=[U.ai]
if(J.a_(z.h(b,"type"),"clause")){u=new U.aL(null,null,null,null,x,null,null,0,0,0,0,null,null,0,null,H.y([],y),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
y=$.a7
$.a7=y+1
u.a=y
u.x=80
u.y=34
u.b=x
u.fy=!1}else{u=new U.bm(null,null,x,null,null,0,0,0,0,null,null,0,null,H.y([],y),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
y=$.a7
$.a7=y+1
u.a=y
u.x=80
u.y=34
u.b=x}}u.b=w
y=z.h(b,"type")
u.d=y==null?"":J.F(y)
y=z.h(b,"format")
u.e=y==null?null:J.F(y)
y=z.h(b,"blockColor")
v=u.db
u.db=y==null?v:J.F(y)
y=z.h(b,"textColor")
v=u.dx
u.dx=y==null?v:J.F(y)
y=z.h(b,"font")
v=u.fr
u.fr=y==null?v:J.F(y)
u.fy=!U.cb(z.h(b,"start"),!1)
if(!!J.k(z.h(b,"params")).$isa)for(y=J.R(z.h(b,"params")),v=u.cy;y.v();)v.push(U.dZ(u,y.gw()))
if(!!u.$isbk&&!!J.k(z.h(b,"clauses")).$isa)for(z=J.R(z.h(b,"clauses"));z.v();){r=z.gw()
J.bJ(r,"type","clause")
q=H.fg(U.dh(a,r),"$isaL")
H.fg(u,"$isbk").cQ(q)}return u}}},
dn:{"^":"bm;co:r2@",
gbv:function(){var z=this.z
if(z!=null)return z
else{z=this.r2
if(z!=null)return z
else{z=this.cx
if(z!=null)return z.r2
else return}}},
a3:function(a,b){var z
this.ch=a
this.cx=b
z=this.z
if(z!=null)z.a3(a+this.gay(),this)},
fD:function(a){var z,y,x,w
if(this.r2!=null){z=this.f
if(typeof z!=="number")return z.p()
y=J.m(this.r,this.y)
x=this.f
if(typeof x!=="number")return x.p()
w=J.l(a)
w.K(a,z+25,y,x+25,J.m(J.m(this.r,this.y),10))
z=this.z
y=this.f
x=this.r2
if(z!=null){if(typeof y!=="number")return y.p()
w.B(a,y+25,J.bj(x))
z=this.f
if(typeof z!=="number")return z.p()
w.B(a,z+25+10,J.bj(this.r2))}else{if(typeof y!=="number")return y.p()
w.B(a,y+25,J.Q(J.bj(x),10))
z=this.f
if(typeof z!=="number")return z.p()
y=J.bj(this.r2)
x=this.f
if(typeof x!=="number")return x.p()
w.K(a,z+25,y,x+25+10,J.bj(this.r2))}}}},
aL:{"^":"dn;h9:rx?,r2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1",
gaT:function(){return 1},
gay:function(){return 1},
gdV:function(){return!1},
a9:function(a){var z,y,x
z=this.fx
y=this.c
x=new U.aL(null,null,null,null,y,null,null,0,0,0,0,null,null,0,null,H.y([],[U.ai]),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",z,!0,!1,null,null,null,null,!1,!0)
x.b8(z,y)
x.fy=!1
this.bT(0,x)
return x},
a2:function(a){var z,y
z=this.Z()
z.j(0,"children",[])
J.bh(a,z)
y=this.z
if(y!=null)y.a2(z.h(0,"children"))},
bW:function(a){},
bU:function(a){},
ad:function(a){return this.rx.ad(a)}},
cl:{"^":"aL;rx,r2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1",
gaT:function(){return 1},
gay:function(){return 0},
a3:function(a,b){var z
this.ch=a
this.cx=b
z=this.z
if(z!=null)z.a3(a,b)},
a2:function(a){},
bV:function(a){}},
bk:{"^":"dn;rx,ry,r2,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1",
gaT:function(){return 0},
gay:function(){return 1},
a9:function(a){var z,y,x,w,v,u
z=U.fS(this.fx,this.c)
this.bT(0,z)
for(y=this.rx,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){v=y[w]
u=J.k(v)
if(!u.$iscl)z.cQ(u.a9(v))}return z},
gaM:function(){var z,y
z=this.ry
y=z.z
return y!=null?y.gaM():z},
a2:function(a){var z,y,x,w
z=this.Z()
z.j(0,"children",[])
z.j(0,"clauses",[])
J.bh(a,z)
y=this.z
if(y!=null)y.a2(z.h(0,"children"))
for(y=this.rx,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)y[w].a2(z.h(0,"clauses"))
y=this.ry.z
if(y!=null)y.a2(a)},
a3:function(a,b){var z,y,x
this.ch=a
this.cx=b
z=this.z
if(z!=null)z.a3(a+1,this)
for(z=this.rx,y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x)z[x].a3(a,b)},
bk:function(){var z,y,x,w,v,u,t,s
this.eG()
for(z=this.rx,y=z.length,x=this,w=0;w<z.length;z.length===y||(0,H.H)(z),++w,x=v){v=z[w]
u=J.l(v)
t=J.l(x)
if(x.gaS()){s=t.gP(x).gaM()
u.sn(v,this.f)
u.st(v,J.m(s.r,s.y))}else{u.sn(v,this.f)
u.st(v,J.m(J.m(t.gt(x),t.gq(x)),34))}v.bk()}},
cQ:function(a){var z,y,x,w
a.sh9(this)
z=this.rx
C.a.L(z,this.ry)
z.push(a)
z.push(this.ry)
for(y=0;x=z.length,y<x-1;y=w){w=y+1
z[y].sco(z[w])}if(0>=x)return H.h(z,0)
this.r2=z[0]},
c5:function(a){var z,y,x,w,v,u,t,s
if(this.k4){this.eF(a)
return}z=J.l(a)
z.aw(a)
y=this.f
if(typeof y!=="number")return y.p()
z.aZ(a,y+10,this.r)
x=this.Q==null&&this.fy
for(w=this;w!=null;){if(!w.gaS())v=w.gco()!=null||this.ch===0
else v=!1
w.c7(a,x)
w.dk(a,x,v)
w.c6(a,v)
w.fD(a)
x=!w.gaS()
w=w.gco()}y=this.ry
u=y.z!=null||this.ch>0
t=y.r
s=this.f
y=y.y
if(u)z.B(a,s,J.m(t,y))
else{if(typeof s!=="number")return s.p()
z.B(a,s+10,J.m(t,y))
y=this.f
u=this.ry
u=J.m(u.r,u.y)
t=this.f
s=this.ry
z.K(a,y,u,t,J.Q(J.m(s.r,s.y),10))}y=this.Q
u=this.f
t=this.r
if(y!=null){z.B(a,u,t)
y=this.f
if(typeof y!=="number")return y.p()
z.B(a,y+10,this.r)}else{z.B(a,u,J.m(t,10))
y=this.f
u=this.r
if(typeof y!=="number")return y.p()
z.K(a,y,u,y+10,u)}z.cf(a)},
eT:function(a,b){var z,y
z="end-"+H.f(b)
y=new U.cl(null,null,null,null,z,null,null,0,0,0,0,null,null,0,null,H.y([],[U.ai]),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
y.b8(a,z)
y.fy=!1
y.y=17
this.ry=y
y.rx=this
this.rx.push(y)
this.r2=this.ry},
u:{
fS:function(a,b){var z=new U.bk(H.y([],[U.aL]),null,null,null,null,b,null,null,0,0,0,0,null,null,0,null,H.y([],[U.ai]),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
z.b8(a,b)
z.eT(a,b)
return z}}},
ci:{"^":"e;",
aH:function(a,b,c){var z,y
for(z=this.a,y=0;y<b;++y)a.l+=z
a.l+=c+"\n"},
aG:function(a,b,c){var z,y,x,w,v,u
z=J.A(b)
y=z.h(b,"format")
x=z.h(b,"params")
w=J.k(x)
v=!!w.$isa?w.gi(x):0
if(typeof y!=="string"){y=H.f(z.h(b,"action"))
for(u=0;u<v;++u)y+=" {"+u+"}"}for(u=0;u<v;++u){z=J.aX(w.h(x,u),"value")
z=z==null?"":J.F(z)
if(typeof z!=="string")H.B(H.N(z))
y=H.mb(y,"{0}",z)}this.aH(a,c,y)}},
j1:{"^":"ci;a",
d9:function(a){var z,y
z=new P.aO("")
for(y=J.R(a.h(0,"chains"));y.v();){this.aj(z,y.gw(),0)
z.l+="\n"}y=z.l
return y.charCodeAt(0)==0?y:y},
aj:function(a,b,c){var z,y,x,w,v,u
for(z=J.R(b),y=c+1;z.v();){x=z.gw()
this.aG(a,x,c)
w=J.A(x)
if(!!J.k(w.h(x,"children")).$isa)this.aj(a,w.h(x,"children"),y)
if(!!J.k(w.h(x,"clauses")).$isa)for(w=J.R(w.h(x,"clauses"));w.v();){v=w.gw()
this.aG(a,v,c)
u=J.A(v)
if(!!J.k(u.h(v,"children")).$isa)this.aj(a,u.h(v,"children"),y)}}}},
iQ:{"^":"ci;a",
d9:function(a){var z,y,x,w
z=new P.aO("")
for(y=J.R(a.h(0,"chains"));y.v();){x=y.gw()
w=J.A(x)
if(J.aW(w.gi(x),0)&&J.a_(J.aX(w.h(x,0),"type"),"nlogo:procedure")){this.aG(z,w.az(x,0),0)
this.aj(z,x,1)
w=z.l+="end\n"
z.l=w+"\n"}}y=z.l
return y.charCodeAt(0)==0?y:y},
aj:function(a,b,c){var z,y,x,w,v,u
for(z=J.R(b),y=c+1;z.v();){x=z.gw()
this.aG(a,x,c)
w=J.A(x)
if(!!J.k(w.h(x,"children")).$isa){this.aH(a,c,"[")
this.aj(a,w.h(x,"children"),y)
this.aH(a,c,"]")}if(!!J.k(w.h(x,"clauses")).$isa)for(w=J.R(w.h(x,"clauses"));w.v();){v=w.gw()
this.aG(a,v,c)
u=J.A(v)
if(!!J.k(u.h(v,"children")).$isa){this.aH(a,c,"[")
this.aj(a,u.h(v,"children"),y)
this.aH(a,c,"]")}}}}},
fU:{"^":"e;a,b,c,m:d>",
gn:function(a){return J.Q(this.a.x,this.d)},
gt:function(a){return 0},
gq:function(a){return this.a.y},
bo:function(a){return!1},
hU:function(a){var z
if(!a.gdg())if(!a.gdA()){z=J.l(a)
z=J.d3(J.m(z.gn(a),J.cc(z.gm(a),0.75)),J.Q(this.a.x,this.d))}else z=!1
else z=!1
return z},
c8:function(a){var z,y,x,w,v,u
this.d=120
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.H)(z),++x){w=z[x]
v=this.d
u=w.a.da(a)
if(typeof u!=="number")return u.p()
this.d=Math.max(v,u+20+20)}},
cj:function(a,b){var z,y,x,w,v,u,t
this.c8(a)
z=J.l(a)
z.a_(a)
z.sax(a,this.c)
y=this.a
z.dL(a,J.Q(y.x,this.d),0,this.d,y.y)
if(b)z.dL(a,J.Q(y.x,this.d),0,this.d,y.y)
x=J.Q(y.x,this.d)+10
for(y=this.b,w=y.length,v=17,u=0;u<y.length;y.length===w||(0,H.H)(y),++u){t=y[u]
t.b=x
t.c=v
t.hv(a)
v+=51}z.ac(a)}},
eb:{"^":"e;a,n:b*,t:c*,d,e",
gm:function(a){return this.a.x},
gq:function(a){return this.a.y},
hv:function(a){var z=this.a
z.f=this.b
z.r=this.c
z.c9(a,80)
z.bU(a)
z.bV(a)
z.bW(a)},
br:function(a){return this.a.br(a)},
ad:function(a){var z,y,x,w,v
z=this.a
y=z.a9(0)
x=z.f
if(typeof x!=="number")return x.R()
y.f=x-5
y.r=J.Q(z.r,5)
y.r1=!0
z=this.d
z.bK(y)
if(!!y.$isbk)for(x=y.rx,w=x.length,v=0;v<x.length;x.length===w||(0,H.H)(x),++v)z.bK(x[v])
return y.ad(a)},
b6:function(a){},
b4:function(a){},
b5:function(a){}},
ai:{"^":"e;a,b,c,d,e,f,r,x,m:y>,q:z>,Q",
gG:function(a){var z=this.c
return z==null?"":J.F(z)},
sG:function(a,b){var z=b==null?"":J.F(b)
this.c=z
return z},
gaB:function(a){return H.f(J.F(this.c))+H.f(this.r)},
bq:function(a,b){return U.dZ(b,this.Z())},
Z:["cO",function(){return P.at(["type",this.e,"name",this.f,"unit",this.r,"value",this.gG(this),"default",this.d])}],
c8:function(a){var z,y
this.y=20
z=J.l(a)
z.a_(a)
z.sbt(a,this.b.fr)
y=this.y
z=z.dY(a,this.gaB(this)).width
if(typeof z!=="number")return H.u(z)
this.y=y+z},
cj:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
this.x=b
z=this.b
y=J.l(a)
y.sbt(a,z.fr)
y.see(a,"center")
y.sef(a,"middle")
x=z.f
w=this.x
if(typeof x!=="number")return x.p()
v=x+w
u=J.m(z.r,z.y/2)
t=this.y
s=this.z
y.aw(a)
w=s/2
x=J.Q(u,w)
y.aw(a)
r=v+w
y.aZ(a,r,x)
q=v+t
p=q-w
y.B(a,p,x)
o=x+w
y.K(a,q,x,q,o)
n=x+s
w=n-w
y.B(a,q,w)
y.K(a,q,n,p,n)
y.B(a,r,n)
y.K(a,v,n,v,w)
y.B(a,v,o)
y.K(a,v,x,r,x)
y.cf(a)
y.sax(a,this.Q?z.db:z.dy)
y.cl(a)
y.sax(a,this.Q?z.dy:z.db)
y.dM(a,this.gaB(this),v+t/2,u)},
br:function(a){var z,y,x,w,v
z=a.c
y=this.b
x=y.f
w=this.x
if(typeof x!=="number")return x.p()
w=x+w
if(z>=w){x=a.d
v=y.r
if(typeof v!=="number")return H.u(v)
z=x>=v&&z<=w+this.y&&x<=v+y.y}else z=!1
return z},
b6:function(a){this.Q=!1
this.fW()
this.b.fx.aa()},
ad:function(a){this.Q=!0
this.b.fx.aa()
return this},
b4:function(a){},
b5:function(a){},
fW:function(){var z,y,x,w,v,u,t
z=document
y=z.createElement("div")
y.className="backdrop"
x=this.bN()
C.f.hP(y,"beforeend",'      <div class="nt-param-dialog">\n        <div class="nt-param-table">\n          <div class="nt-param-row">\n            <div class="nt-param-name">'+H.f(this.f)+'</div>\n            <div class="nt-param-value">'+x+'</div>\n          </div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>',null,null)
z.querySelector("#wrapper").appendChild(y)
w=z.querySelector("#nt-param-label-"+this.a)
v=z.querySelector("#nt-param-"+this.a)
u=[null]
t=[W.av]
new W.eF(new W.eI(z.querySelectorAll(".nt-param-confirm"),u),!1,"click",t).dW(new U.iY(this,y,v))
new W.eF(new W.eI(z.querySelectorAll(".nt-param-cancel"),u),!1,"click",t).dW(new U.iZ(y))
y.classList.add("show")
if(v!=null){z=J.l(v)
z.dN(v)
if(w!=null){u=z.ge1(v)
W.a2(u.a,u.b,new U.j_(w,v),!1,H.L(u,0))
z=z.ge2(v)
W.a2(z.a,z.b,new U.j0(w,v),!1,H.L(z,0))}}},
bN:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="text" value="'+this.gaB(this)+'">\n      <span class="nt-param-unit">'+H.f(this.r)+"</span>\n    "},
ar:function(a,b){var z,y
z=$.e_
$.e_=z+1
this.a=z
z=J.A(b)
y=z.h(b,"type")
this.e=y==null?"number":J.F(y)
y=z.h(b,"name")
this.f=y==null?"":J.F(y)
y=z.h(b,"unit")
this.r=y==null?"":J.F(y)
z=z.h(b,"default")
this.d=z
this.sG(0,z)},
u:{
iX:function(a,b){var z=new U.ai(null,a,null,null,"int","","",0,28,20.4,!1)
z.ar(a,b)
return z},
dZ:function(a,b){var z,y
z=J.A(b)
y=z.h(b,"type")
switch(y==null?"number":J.F(y)){case"int":y=new U.hw(!1,1,null,a,null,null,"int","","",0,28,20.4,!1)
y.ar(a,b)
y.ch=U.cb(z.h(b,"random"),!1)
y.cx=U.aJ(z.h(b,"step"),y.cx)
y.cx=1
return y
case"num":case"number":y=new U.cB(!1,1,null,a,null,null,"int","","",0,28,20.4,!1)
y.ar(a,b)
y.ch=U.cb(z.h(b,"random"),!1)
y.cx=U.aJ(z.h(b,"step"),y.cx)
return y
case"range":y=new U.je(0,10,!1,1,null,a,null,null,"int","","",0,28,20.4,!1)
y.ar(a,b)
y.ch=U.cb(z.h(b,"random"),!1)
y.cx=U.aJ(z.h(b,"step"),y.cx)
y.cy=U.aJ(z.h(b,"min"),y.cy)
y.db=U.aJ(z.h(b,"max"),y.db)
return y
case"selection":y=new U.ea([],null,a,null,null,"int","","",0,28,20.4,!1)
y.ar(a,b)
if(!!J.k(z.h(b,"values")).$isa)y.ch=z.h(b,"values")
return y
case"text":default:return U.iX(a,b)}}}},
iY:{"^":"i:0;a,b,c",
$1:[function(a){var z=this.c
if(z!=null)this.a.sG(0,J.ce(z))
C.f.ct(this.b)
z=this.a.b.fx
z.aa()
z.e8()},null,null,2,0,null,2,"call"]},
iZ:{"^":"i:0;a",
$1:[function(a){return C.f.ct(this.a)},null,null,2,0,null,2,"call"]},
j_:{"^":"i:0;a,b",
$1:function(a){J.dd(this.a,J.ce(this.b))}},
j0:{"^":"i:0;a,b",
$1:function(a){J.dd(this.a,J.ce(this.b))}},
cB:{"^":"ai;ch,cx,a,b,c,d,e,f,r,x,y,z,Q",
Z:["eM",function(){var z=this.cO()
z.j(0,"random",this.ch)
z.j(0,"step",this.cx)
return z}],
gG:function(a){return U.aJ(this.c,0)},
sG:function(a,b){var z=U.aJ(b,0)
this.c=z
return z},
gaB:function(a){var z=J.fN(H.m3(this.gG(this)),1)
if(C.c.hz(z,".0"))z=C.c.ah(z,0,z.length-2)
return z+H.f(this.r)},
bN:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="number" step="'+H.f(this.cx)+' value="'+this.gaB(this)+'">\n      <span class="nt-param-unit">'+H.f(this.r)+"</span>\n    "}},
hw:{"^":"cB;ch,cx,a,b,c,d,e,f,r,x,y,z,Q",
gG:function(a){return U.fp(this.c,0)},
sG:function(a,b){var z=U.fp(b,0)
this.c=z
return z}},
je:{"^":"cB;cy,db,ch,cx,a,b,c,d,e,f,r,x,y,z,Q",
Z:function(){var z=this.eM()
z.j(0,"min",this.cy)
z.j(0,"max",this.db)
return z},
bN:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="range" value="'+this.gaB(this)+'" min="'+H.f(this.cy)+'" max="'+H.f(this.db)+'" step="'+H.f(this.cx)+'">\n      <label class="nt-param-label" id="nt-param-label-'+this.a+'" for="nt-param-'+this.a+'">'+H.f(U.aJ(this.c,0))+'</label>\n      <span class="nt-param-unit">'+H.f(this.r)+"</span>\n    "}},
ea:{"^":"ai;ch,a,b,c,d,e,f,r,x,y,z,Q",
bq:function(a,b){return U.jj(b,this.Z())},
Z:function(){var z=this.cO()
z.j(0,"values",this.ch)
return z},
eX:function(a,b){var z=J.A(b)
if(!!J.k(z.h(b,"values")).$isa)this.ch=z.h(b,"values")},
u:{
jj:function(a,b){var z=new U.ea([],null,a,null,null,"int","","",0,28,20.4,!1)
z.ar(a,b)
z.eX(a,b)
return z}}},
h3:{"^":"el;f,r,m:x>,q:y>,z,Q,ch,a,b,c,d,e",
eh:function(){if(this.bo(0))this.aa()
C.L.gh7(window).cB(new U.h5(this))},
e8:function(){var z
this.aa()
try{J.aX($.$get$cY(),"NetTango").bp("_relayCallback",[this.f])}catch(z){H.E(z)
P.bf("Unable to relay program changed event to Javascript")}},
ck:function(){var z,y,x,w,v
z=P.at(["chains",[]])
for(y=this.r,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){v=y[w]
if(v.gdV())J.bh(z.h(0,"chains"),v.ck())}return z},
bK:function(a){var z,y,x,w
this.r.push(a)
z=this.a
z.push(a)
for(y=a.ge6(),x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)z.push(y[w])},
fL:function(a){var z,y,x,w
C.a.L(this.r,a)
z=this.a
C.a.L(z,a)
for(y=a.ge6(),x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w)C.a.L(z,y[w])
this.aa()},
fX:function(a){var z,y,x,w
z=this.d8(a)
if(z!=null){y=J.l(z)
x=y.gP(z)
y.sP(z,a)
a.Q=z
if(x!=null){w=a.gaM()
x.sby(w)
w.z=x}return!0}z=this.d7(a)
if(z!=null){z.sby(a)
a.z=z
return!0}return!1},
h0:function(a){var z,y
if(this.z.hU(a))for(z=this.r,y=this.a;a!=null;){C.a.L(z,a)
C.a.L(y,a)
a=a.gbv()}},
d8:function(a){var z,y,x,w,v,u,t,s,r
if(a.gby()==null&&a.gdR())for(z=this.r,y=z.length,x=J.l(a),w=0;w<z.length;z.length===y||(0,H.H)(z),++w){v=z[w]
u=J.k(v)
if(!u.C(v,a))if(J.bg(x.gn(a),J.m(u.gn(v),u.gm(v)))&&J.aW(J.m(x.gn(a),x.gm(a)),u.gn(v))){t=u.gt(v)
s=J.m(u.gt(v),u.gq(v))
r=J.m(s,J.cc(u.gq(v),0.8))
if(v.gaS()&&J.bg(a.gb3(),s)&&J.aW(a.gb3(),t))return v
else if(!v.gaS()&&J.aW(a.gb3(),t)&&J.bg(a.gb3(),r))return v}}return},
d7:function(a){var z,y,x,w,v,u
z=J.l(a)
if(z.gP(a)==null)for(y=this.r,x=y.length,w=0;w<y.length;y.length===x||(0,H.H)(y),++w){v=y[w]
u=J.k(v)
if(!u.C(v,a)&&v.gby()==null&&v.gdR())if(J.bg(z.gn(a),J.m(u.gn(v),u.gm(v)))&&J.aW(J.m(z.gn(a),z.gm(a)),u.gn(v)))if(Math.abs(J.Q(v.gb3(),a.ghb()))<20)return v}return},
bo:function(a){var z,y,x,w
this.z.toString
for(z=this.r,y=z.length,x=!1,w=0;w<z.length;z.length===y||(0,H.H)(z),++w)if(J.fu(z[w]))x=!0
return x},
aa:function(){var z,y,x,w,v,u,t,s,r
J.fI(this.Q)
this.c.ii(this.Q)
J.fv(this.Q,0,0,this.x,this.y)
z=H.y([],[U.bm])
for(y=this.r,x=y.length,w=!1,v=0;v<y.length;y.length===x||(0,H.H)(y),++v){u=y[v]
if(!u.ghN()&&!(u instanceof U.aL)){u.a3(0,null)
u.bk()
u.c9(this.Q,80)}if(u.gd4())z.push(u)
t=this.z
t.toString
if(!u.gdg())if(!u.gdA()){s=J.l(u)
t=J.d3(J.m(s.gn(u),J.cc(s.gm(u),0.75)),J.Q(t.a.x,t.d))}else t=!1
else t=!1
if(t)w=!0}this.z.cj(this.Q,w)
for(x=y.length,v=0;v<y.length;y.length===x||(0,H.H)(y),++v){u=y[v]
if(u.gd4()){r=this.d8(u)
if(r!=null)r.fe(this.Q)
else{r=this.d7(u)
if(r!=null)r.fg(this.Q)}}u.bU(this.Q)
u.bV(this.Q)
u.ff(this.Q)
if(z.length!==0)u.bW(this.Q)}J.fH(this.Q)},
eU:function(a,b){var z,y,x,w,v,u
z=this.f
y="#"+H.f(z)
x=document.querySelector(y)
if(x==null)throw H.b("No canvas element with ID "+H.f(z)+" found.")
z=J.l(x)
this.Q=z.eq(x,"2d")
this.x=z.gm(x)
this.y=z.gq(x)
z=this.ch
z.i7(x)
z.c.push(this)
this.z=new U.fU(this,H.y([],[U.eb]),"rgba(0,0,0, 0.2)",100)
z=J.A(b)
if(!!J.k(z.h(b,"blocks")).$isa)for(z=J.R(z.h(b,"blocks"));z.v();){w=U.dh(this,z.gw())
w.f=100
w.r=100
w.fr="14px 'Poppins', sans-serif"
y=this.z
v=y.b
y=y.a
u=new U.eb(w,null,null,y,2)
w.k4=!0
y.a.push(u)
v.push(u)}U.jm("click","sounds/click.wav")
this.aa()
this.eh()},
u:{
h4:function(a,b){var z,y,x,w,v
z=H.y([],[U.bm])
y=H.y([],[U.el])
x=P.v
w=U.jK
v=H.y([],[w])
z=new U.h3(a,z,null,null,null,null,new U.jE(!1,null,y,new H.V(0,null,null,null,null,null,0,[x,U.ek])),v,new H.V(0,null,null,null,null,null,0,[x,w]),new U.dQ([1,0,0,0,1,0,0,0,1]),new U.dQ([1,0,0,0,1,0,0,0,1]),new P.ap(Date.now(),!1))
z.eU(a,b)
return z}}},
h5:{"^":"i:0;a",
$1:function(a){return this.a.eh()}},
dQ:{"^":"e;a",
aA:function(a){var z,y,x,w,v,u,t,s,r
z=a.c
y=this.a
x=y.length
if(0>=x)return H.h(y,0)
w=y[0]
if(typeof w!=="number")return H.u(w)
v=a.d
if(1>=x)return H.h(y,1)
u=y[1]
if(typeof u!=="number")return H.u(u)
if(2>=x)return H.h(y,2)
t=y[2]
if(typeof t!=="number")return H.u(t)
if(3>=x)return H.h(y,3)
s=y[3]
if(typeof s!=="number")return H.u(s)
if(4>=x)return H.h(y,4)
r=y[4]
if(typeof r!=="number")return H.u(r)
if(5>=x)return H.h(y,5)
y=y[5]
if(typeof y!=="number")return H.u(y)
a.c=z*w+v*u+t
a.d=z*s+v*r+y},
ii:function(a){var z,y,x,w,v,u,t
z=this.a
y=z.length
if(0>=y)return H.h(z,0)
x=z[0]
if(3>=y)return H.h(z,3)
w=z[3]
v=z[1]
if(4>=y)return H.h(z,4)
u=z[4]
t=z[2]
if(5>=y)return H.h(z,5)
J.fO(a,x,w,v,u,t,z[5])}},
jo:{"^":"i:0;a,b",
$1:function(a){J.fx($.$get$bY(),W.ld(this.b.response)).cB(new U.jn(this.a))}},
jn:{"^":"i:20;a",
$1:[function(a){if(a!=null)$.$get$bz().j(0,this.a,a)},null,null,2,0,null,23,"call"]},
jp:{"^":"i:0;",
$1:function(a){return P.bf("BufferLoader: XHR error")}},
jE:{"^":"e;a,b,c,d",
bs:function(a){var z,y,x
for(z=this.c,y=0;y<z.length;++y){x=z[y].bs(a)
if(x!=null){if(y>=z.length)return H.h(z,y)
z[y].e=new P.ap(Date.now(),!1)
if(y>=z.length)return H.h(z,y)
return new U.ek(z[y],x)}else if(y>=z.length)return H.h(z,y)}return},
i7:function(a){var z,y
this.b=a
z=J.l(a)
y=z.ge3(a)
W.a2(y.a,y.b,new U.jF(this),!1,H.L(y,0))
y=z.ge5(a)
W.a2(y.a,y.b,new U.jG(this),!1,H.L(y,0))
z=z.ge4(a)
W.a2(z.a,z.b,new U.jH(this),!1,H.L(z,0))
z=document
W.a2(z,"keydown",new U.jI(this),!1,W.nb)
W.a2(z,"touchmove",new U.jJ(),!1,W.ov)},
fz:function(a){var z,y
for(z=this.c.length,y=0;y<z;++y);}},
jF:{"^":"i:0;a",
$1:function(a){var z,y,x
z=this.a
y=U.cj(a)
x=z.bs(y)
if(x!=null)if(x.ad(y))z.d.j(0,-1,x)
z.a=!0
return}},
jG:{"^":"i:0;a",
$1:function(a){var z,y,x
z=this.a
y=z.d
x=y.h(0,-1)
if(x!=null)x.b6(U.cj(a))
y.j(0,-1,null)
z.a=!1
return}},
jH:{"^":"i:0;a",
$1:function(a){var z,y,x
z=this.a
y=U.cj(a)
x=z.d.h(0,-1)
if(x!=null)x.b4(y)
else{x=z.bs(y)
if(x!=null)if(z.a){x.a.d.aA(y)
x.b.b5(y)}}return}},
jI:{"^":"i:0;a",
$1:function(a){return this.a.fz(a)}},
jJ:{"^":"i:0;",
$1:function(a){return J.fE(a)}},
el:{"^":"e;",
bs:function(a){var z,y,x
z=new U.dm(null,-1,0,0,!1,!1,!1,!1,!1)
z.a=a.a
z.b=a.b
z.c=a.c
z.d=a.d
z.y=a.y
this.d.aA(z)
for(y=this.a,x=y.length-1;x>=0;--x){if(x>=y.length)return H.h(y,x)
if(y[x].br(z)){if(x>=y.length)return H.h(y,x)
return y[x]}}return}},
ek:{"^":"e;a,b",
ad:function(a){this.a.d.aA(a)
this.b=this.b.ad(a)
return!0},
b6:function(a){this.a.d.aA(a)
this.b.b6(a)},
b4:function(a){this.a.d.aA(a)
this.b.b4(a)},
b5:function(a){this.a.d.aA(a)
this.b.b5(a)}},
jK:{"^":"e;"},
dm:{"^":"e;a,b,c,d,e,f,r,x,y",
eV:function(a){var z,y
this.a=-1
z=J.l(a)
y=z.gbw(a)
y=y.gn(y)
y.toString
this.c=y
z=z.gbw(a)
z=z.gt(z)
z.toString
this.d=z
this.y=!0},
u:{
cj:function(a){var z=new U.dm(null,-1,0,0,!1,!1,!1,!1,!1)
z.eV(a)
return z}}}},1]]
setupProgram(dart,0)
J.k=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dN.prototype
return J.ip.prototype}if(typeof a=="string")return J.bu.prototype
if(a==null)return J.ir.prototype
if(typeof a=="boolean")return J.io.prototype
if(a.constructor==Array)return J.bs.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.e)return a
return J.c6(a)}
J.A=function(a){if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(a.constructor==Array)return J.bs.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.e)return a
return J.c6(a)}
J.aU=function(a){if(a==null)return a
if(a.constructor==Array)return J.bs.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.e)return a
return J.c6(a)}
J.ae=function(a){if(typeof a=="number")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bD.prototype
return a}
J.fd=function(a){if(typeof a=="number")return J.bt.prototype
if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bD.prototype
return a}
J.fe=function(a){if(typeof a=="string")return J.bu.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bD.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bv.prototype
return a}if(a instanceof P.e)return a
return J.c6(a)}
J.m=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.fd(a).p(a,b)}
J.a_=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.k(a).C(a,b)}
J.d3=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.ae(a).ep(a,b)}
J.aW=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ae(a).cJ(a,b)}
J.bg=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ae(a).ae(a,b)}
J.cc=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.fd(a).bB(a,b)}
J.d4=function(a,b){return J.ae(a).eB(a,b)}
J.Q=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.ae(a).R(a,b)}
J.fr=function(a,b){if(typeof a=="number"&&typeof b=="number")return(a^b)>>>0
return J.ae(a).eS(a,b)}
J.aX=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fi(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.A(a).h(a,b)}
J.bJ=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fi(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.aU(a).j(a,b,c)}
J.fs=function(a,b){return J.l(a).f4(a,b)}
J.bh=function(a,b){return J.aU(a).D(a,b)}
J.ft=function(a,b,c,d){return J.l(a).dC(a,b,c,d)}
J.fu=function(a){return J.l(a).bo(a)}
J.d5=function(a){return J.l(a).X(a)}
J.fv=function(a,b,c,d,e){return J.l(a).hc(a,b,c,d,e)}
J.fw=function(a,b){return J.l(a).bq(a,b)}
J.cd=function(a,b,c){return J.A(a).hg(a,b,c)}
J.fx=function(a,b){return J.l(a).hm(a,b)}
J.d6=function(a,b){return J.aU(a).A(a,b)}
J.d7=function(a){return J.l(a).gh8(a)}
J.bi=function(a){return J.l(a).gU(a)}
J.X=function(a){return J.k(a).gE(a)}
J.R=function(a){return J.aU(a).gI(a)}
J.al=function(a){return J.A(a).gi(a)}
J.d8=function(a){return J.l(a).gP(a)}
J.fy=function(a){return J.l(a).gi2(a)}
J.fz=function(a){return J.l(a).gcs(a)}
J.d9=function(a){return J.l(a).gF(a)}
J.fA=function(a){return J.l(a).gcE(a)}
J.ce=function(a){return J.l(a).gG(a)}
J.da=function(a){return J.l(a).gm(a)}
J.bj=function(a){return J.l(a).gt(a)}
J.fB=function(a){return J.l(a).cH(a)}
J.db=function(a,b,c){return J.l(a).B(a,b,c)}
J.dc=function(a,b){return J.aU(a).ap(a,b)}
J.fC=function(a,b,c){return J.fe(a).hY(a,b,c)}
J.fD=function(a,b){return J.k(a).cp(a,b)}
J.fE=function(a){return J.l(a).i4(a)}
J.fF=function(a){return J.aU(a).ct(a)}
J.fG=function(a,b,c,d){return J.l(a).e9(a,b,c,d)}
J.fH=function(a){return J.l(a).ac(a)}
J.fI=function(a){return J.l(a).a_(a)}
J.aY=function(a,b){return J.l(a).af(a,b)}
J.fJ=function(a,b){return J.l(a).sbu(a,b)}
J.dd=function(a,b){return J.l(a).sdU(a,b)}
J.de=function(a,b){return J.l(a).sP(a,b)}
J.fK=function(a,b){return J.l(a).sn(a,b)}
J.fL=function(a,b){return J.l(a).st(a,b)}
J.df=function(a){return J.ae(a).cC(a)}
J.fM=function(a){return J.fe(a).ie(a)}
J.F=function(a){return J.k(a).k(a)}
J.fN=function(a,b){return J.ae(a).ig(a,b)}
J.fO=function(a,b,c,d,e,f,g){return J.l(a).ih(a,b,c,d,e,f,g)}
I.aI=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cf.prototype
C.f=W.hi.prototype
C.w=W.ht.prototype
C.x=J.d.prototype
C.a=J.bs.prototype
C.d=J.dN.prototype
C.e=J.bt.prototype
C.c=J.bu.prototype
C.E=J.bv.prototype
C.r=J.j2.prototype
C.t=W.jy.prototype
C.k=J.bD.prototype
C.L=W.c_.prototype
C.u=new P.iW()
C.v=new P.k6()
C.b=new P.kM()
C.m=new P.bp(0)
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
C.p=new P.iC(null,null)
C.F=new P.iE(null)
C.G=new P.iF(null,null)
C.H=H.y(I.aI(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.I=I.aI(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.h=I.aI([])
C.i=H.y(I.aI(["bind","if","ref","repeat","syntax"]),[P.n])
C.j=H.y(I.aI(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.J=H.y(I.aI([]),[P.bB])
C.q=new H.ha(0,{},C.J,[P.bB,null])
C.K=new H.cG("call")
$.e3="$cachedFunction"
$.e4="$cachedInvocation"
$.a8=0
$.b_=null
$.di=null
$.d_=null
$.f8=null
$.fm=null
$.c5=null
$.c8=null
$.d0=null
$.aR=null
$.ba=null
$.bb=null
$.cU=!1
$.t=C.b
$.dF=0
$.ag=null
$.ck=null
$.dy=null
$.dx=null
$.dt=null
$.ds=null
$.dr=null
$.dq=null
$.a7=0
$.bn=null
$.e_=0
$.jq=!1
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
I.$lazy(y,x,w)}})(["bN","$get$bN",function(){return H.cZ("_$dart_dartClosure")},"cp","$get$cp",function(){return H.cZ("_$dart_js")},"dJ","$get$dJ",function(){return H.ij()},"dK","$get$dK",function(){if(typeof WeakMap=="function")var z=new WeakMap()
else{z=$.dF
$.dF=z+1
z="expando$key$"+z}return new P.hq(null,z)},"em","$get$em",function(){return H.ab(H.bZ({
toString:function(){return"$receiver$"}}))},"en","$get$en",function(){return H.ab(H.bZ({$method$:null,
toString:function(){return"$receiver$"}}))},"eo","$get$eo",function(){return H.ab(H.bZ(null))},"ep","$get$ep",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"et","$get$et",function(){return H.ab(H.bZ(void 0))},"eu","$get$eu",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"er","$get$er",function(){return H.ab(H.es(null))},"eq","$get$eq",function(){return H.ab(function(){try{null.$method$}catch(z){return z.message}}())},"ew","$get$ew",function(){return H.ab(H.es(void 0))},"ev","$get$ev",function(){return H.ab(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cK","$get$cK",function(){return P.jT()},"br","$get$br",function(){var z,y
z=P.b4
y=new P.W(0,P.jQ(),null,[z])
y.f1(null,z)
return y},"bc","$get$bc",function(){return[]},"eM","$get$eM",function(){return P.dP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cO","$get$cO",function(){return P.b2()},"cY","$get$cY",function(){return P.f6(self)},"cM","$get$cM",function(){return H.cZ("_$dart_dartObject")},"cR","$get$cR",function(){return function DartObject(a){this.o=a}},"bH","$get$bH",function(){return P.b2()},"bY","$get$bY",function(){return new (window.AudioContext||window.webkitAudioContext)()},"bz","$get$bz",function(){return H.iy(null,null)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[null,"value","e","error","stackTrace","_","canvasId","object","x","invocation","data","element","attributeName","context","result","o","arg4","isolate","arg3","arg","closure","each","sender","buffer","attr","numberOfArguments","key","callback","captureThis","self","arguments","arg1","arg2","jsonString","language","time"]
init.types=[{func:1,args:[,]},{func:1,v:true},{func:1},{func:1,v:true,args:[P.e],opt:[P.bA]},{func:1,args:[,,]},{func:1,ret:W.p},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.n,args:[P.v]},{func:1,ret:P.cW,args:[W.aq,P.n,P.n,W.cN]},{func:1,args:[P.n,,]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,args:[{func:1,v:true}]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[,P.bA]},{func:1,args:[P.bB,,]},{func:1,ret:P.e,opt:[P.e]},{func:1,ret:[P.a,W.cE]},{func:1,v:true,args:[W.p,W.p]},{func:1,v:true,opt:[P.e]},{func:1,args:[P.bL]},{func:1,v:true,args:[P.e]},{func:1,ret:P.v,args:[P.n]},{func:1,ret:P.ad,args:[P.n]},{func:1,ret:P.e,args:[,]},{func:1,v:true,args:[P.n,P.n]},{func:1,ret:P.n,args:[P.n,P.n]}]
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
if(x==y)H.mc(d||a)
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
Isolate.aI=a.aI
Isolate.O=a.O
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.fo(U.fk(),b)},[])
else (function(b){H.fo(U.fk(),b)})([])})})()
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
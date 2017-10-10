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
if(a7)b6[b4+"*"]=d[0]}}function tearOffGetter(c,d,e,f){return f?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"(x) {"+"if (c === null) c = "+"H.cY"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(c,d,e,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"() {"+"if (c === null) c = "+"H.cY"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(c,d,e,H,null)}function tearOff(c,d,e,f,a0){var g
return e?function(){if(g===void 0)g=H.cY(this,c,d,true,[],f).prototype
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
var dart=[["","",,H,{"^":"",nc:{"^":"e;a"}}],["","",,J,{"^":"",
m:function(a){return void 0},
c9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
c6:function(a){var z,y,x,w,v
z=a[init.dispatchPropertyName]
if(z==null)if($.d1==null){H.lT()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.b(new P.bB("Return interceptor for "+H.f(y(a,z))))}w=a.constructor
v=w==null?null:w[$.$get$cp()]
if(v!=null)return v
v=H.m2(a)
if(v!=null)return v
if(typeof a=="function")return C.E
y=Object.getPrototypeOf(a)
if(y==null)return C.r
if(y===Object.prototype)return C.r
if(typeof w=="function"){Object.defineProperty(w,$.$get$cp(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
d:{"^":"e;",
C:function(a,b){return a===b},
gE:function(a){return H.am(a)},
k:["eO",function(a){return H.bV(a)}],
cu:["eN",function(a,b){throw H.b(P.dY(a,b.ge4(),b.ged(),b.ge5(),null))},null,"gia",2,0,null,9],
"%":"ANGLEInstancedArrays|ANGLE_instanced_arrays|AnimationEffectReadOnly|AnimationEffectTiming|AnimationTimeline|AppBannerPromptResult|AudioListener|AudioParam|BarProp|Bluetooth|BluetoothAdvertisingData|BluetoothCharacteristicProperties|BluetoothRemoteGATTServer|BluetoothRemoteGATTService|BluetoothUUID|CHROMIUMSubscribeUniform|CHROMIUMValuebuffer|CSS|Cache|CacheStorage|CanvasGradient|CanvasPattern|CircularGeofencingRegion|Client|Clients|CompositorProxy|ConsoleBase|Coordinates|Credential|CredentialsContainer|Crypto|CryptoKey|DOMError|DOMFileSystem|DOMFileSystemSync|DOMImplementation|DOMMatrix|DOMMatrixReadOnly|DOMParser|DOMStringMap|DataTransfer|DataTransferItem|Database|DeprecatedStorageInfo|DeprecatedStorageQuota|DeviceRotationRate|DirectoryEntry|DirectoryEntrySync|DirectoryReader|DirectoryReaderSync|EXTBlendMinMax|EXTColorBufferFloat|EXTDisjointTimerQuery|EXTFragDepth|EXTShaderTextureLOD|EXTTextureFilterAnisotropic|EXT_blend_minmax|EXT_frag_depth|EXT_sRGB|EXT_shader_texture_lod|EXT_texture_filter_anisotropic|EXTsRGB|EffectModel|Entry|EntrySync|FederatedCredential|FileEntry|FileEntrySync|FileError|FileReaderSync|FileWriterSync|FontFace|FormData|GamepadButton|Geofencing|GeofencingRegion|Geolocation|Geoposition|HMDVRDevice|HTMLAllCollection|Headers|IDBFactory|IDBIndex|IdleDeadline|ImageBitmapRenderingContext|InjectedScriptHost|InputDeviceCapabilities|IntersectionObserver|IntersectionObserverEntry|KeyframeEffect|MIDIInputMap|MIDIOutputMap|MediaDeviceInfo|MediaDevices|MediaError|MediaKeyStatusMap|MediaKeySystemAccess|MediaKeys|MediaMetadata|MediaSession|MemoryInfo|MessageChannel|Metadata|MutationObserver|MutationRecord|NFC|NavigatorStorageUtils|NavigatorUserMediaError|NodeFilter|NonDocumentTypeChildNode|NonElementParentNode|OESElementIndexUint|OESStandardDerivatives|OESTextureFloat|OESTextureFloatLinear|OESTextureHalfFloat|OESTextureHalfFloatLinear|OESVertexArrayObject|OES_element_index_uint|OES_standard_derivatives|OES_texture_float|OES_texture_float_linear|OES_texture_half_float|OES_texture_half_float_linear|OES_vertex_array_object|PagePopupController|PasswordCredential|PerformanceCompositeTiming|PerformanceEntry|PerformanceMark|PerformanceMeasure|PerformanceNavigation|PerformanceObserver|PerformanceObserverEntryList|PerformanceRenderTiming|PerformanceResourceTiming|PerformanceTiming|PeriodicWave|Permissions|PositionError|PositionSensorVRDevice|Presentation|PushManager|PushMessageData|PushSubscription|RTCCertificate|RTCIceCandidate|RTCSessionDescription|SQLError|SQLResultSet|SQLTransaction|SVGAngle|SVGAnimatedAngle|SVGAnimatedBoolean|SVGAnimatedEnumeration|SVGAnimatedInteger|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedPreserveAspectRatio|SVGAnimatedRect|SVGAnimatedString|SVGAnimatedTransformList|SVGMatrix|SVGPreserveAspectRatio|SVGUnitTypes|ScrollState|Selection|ServicePort|SharedArrayBuffer|SourceInfo|SpeechRecognitionAlternative|SpeechSynthesisVoice|StorageInfo|StorageManager|StorageQuota|Stream|StyleMedia|StylePropertyMap|SubtleCrypto|SyncManager|TrackDefault|URLSearchParams|USBAlternateInterface|USBConfiguration|USBDevice|USBEndpoint|USBInTransferResult|USBInterface|USBIsochronousInTransferPacket|USBIsochronousInTransferResult|USBIsochronousOutTransferPacket|USBIsochronousOutTransferResult|USBOutTransferResult|UnderlyingSourceBase|VRDevice|VREyeParameters|VRFieldOfView|VRPositionState|ValidityState|VideoPlaybackQuality|VideoTrack|WEBGL_compressed_texture_atc|WEBGL_compressed_texture_etc1|WEBGL_compressed_texture_pvrtc|WEBGL_compressed_texture_s3tc|WEBGL_debug_renderer_info|WEBGL_debug_shaders|WEBGL_depth_texture|WEBGL_draw_buffers|WEBGL_lose_context|WebGLActiveInfo|WebGLBuffer|WebGLCompressedTextureASTC|WebGLCompressedTextureATC|WebGLCompressedTextureETC1|WebGLCompressedTexturePVRTC|WebGLCompressedTextureS3TC|WebGLDebugRendererInfo|WebGLDebugShaders|WebGLDepthTexture|WebGLDrawBuffers|WebGLExtensionLoseContext|WebGLFramebuffer|WebGLLoseContext|WebGLProgram|WebGLQuery|WebGLRenderbuffer|WebGLRenderingContext|WebGLSampler|WebGLShader|WebGLShaderPrecisionFormat|WebGLSync|WebGLTexture|WebGLTimerQueryEXT|WebGLTransformFeedback|WebGLUniformLocation|WebGLVertexArrayObject|WebGLVertexArrayObjectOES|WebKitCSSMatrix|WebKitMutationObserver|WindowClient|WorkerConsole|Worklet|WorkletGlobalScope|XMLSerializer|XPathEvaluator|XPathExpression|XPathNSResolver|XPathResult|XSLTProcessor|mozRTCIceCandidate|mozRTCSessionDescription"},
ir:{"^":"d;",
k:function(a){return String(a)},
gE:function(a){return a?519018:218159},
$iscX:1},
iu:{"^":"d;",
C:function(a,b){return null==b},
k:function(a){return"null"},
gE:function(a){return 0},
cu:[function(a,b){return this.eN(a,b)},null,"gia",2,0,null,9]},
cq:{"^":"d;",
gE:function(a){return 0},
k:["eQ",function(a){return String(a)}],
$isiv:1},
j5:{"^":"cq;"},
bC:{"^":"cq;"},
bu:{"^":"cq;",
k:function(a){var z=a[$.$get$bN()]
return z==null?this.eQ(a):J.E(z)},
$iscn:1,
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}},
br:{"^":"d;$ti",
dP:function(a,b){if(!!a.immutable$list)throw H.b(new P.j(b))},
aO:function(a,b){if(!!a.fixed$length)throw H.b(new P.j(b))},
D:function(a,b){this.aO(a,"add")
a.push(b)},
aA:function(a,b){var z
this.aO(a,"removeAt")
z=a.length
if(b>=z)throw H.b(P.b8(b,null,null))
return a.splice(b,1)[0]},
L:function(a,b){var z
this.aO(a,"remove")
for(z=0;z<a.length;++z)if(J.V(a[z],b)){a.splice(z,1)
return!0}return!1},
O:function(a,b){var z
this.aO(a,"addAll")
for(z=J.P(b);z.u();)a.push(z.gw())},
aq:function(a,b){return new H.bw(a,b,[H.L(a,0),null])},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
ghL:function(a){if(a.length>0)return a[0]
throw H.b(H.co())},
a1:function(a,b,c,d,e){var z,y,x
this.dP(a,"setRange")
P.cE(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
if(e<0)H.A(P.I(e,0,null,"skipCount",null))
if(e+z>d.length)throw H.b(H.dO())
if(e<b)for(y=z-1;y>=0;--y){x=e+y
if(x<0||x>=d.length)return H.h(d,x)
a[b+y]=d[x]}else for(y=0;y<z;++y){x=e+y
if(x<0||x>=d.length)return H.h(d,x)
a[b+y]=d[x]}},
dK:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.b(new P.ah(a))}return!1},
M:function(a,b){var z
for(z=0;z<a.length;++z)if(J.V(a[z],b))return!0
return!1},
k:function(a){return P.bR(a,"[","]")},
gI:function(a){return new J.fR(a,a.length,0,null)},
gE:function(a){return H.am(a)},
gi:function(a){return a.length},
si:function(a,b){this.aO(a,"set length")
if(b<0)throw H.b(P.I(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.J(a,b))
if(b>=a.length||b<0)throw H.b(H.J(a,b))
return a[b]},
j:function(a,b,c){this.dP(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.J(a,b))
if(b>=a.length||b<0)throw H.b(H.J(a,b))
a[b]=c},
$iso:1,
$aso:I.O,
$isa:1,
$asa:null,
$isc:1,
$asc:null},
nb:{"^":"br;$ti"},
fR:{"^":"e;a,b,c,d",
gw:function(){return this.d},
u:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.b(H.C(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
bs:{"^":"d;",
gi1:function(a){return a===0?1/a<0:a<0},
cJ:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.b(new P.j(""+a+".toInt()"))},
bD:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.b(new P.j(""+a+".round()"))},
iq:function(a,b){var z
if(b>20)throw H.b(P.I(b,0,20,"fractionDigits",null))
z=a.toFixed(b)
if(a===0&&this.gi1(a))return"-"+z
return z},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gE:function(a){return a&0x1FFFFFFF},
n:function(a,b){if(typeof b!=="number")throw H.b(H.M(b))
return a+b},
N:function(a,b){if(typeof b!=="number")throw H.b(H.M(b))
return a-b},
bF:function(a,b){if(typeof b!=="number")throw H.b(H.M(b))
return a*b},
bM:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.dC(a,b)},
bs:function(a,b){return(a|0)===a?a/b|0:this.dC(a,b)},
dC:function(a,b){var z=a/b
if(z>=-2147483648&&z<=2147483647)return z|0
if(z>0){if(z!==1/0)return Math.floor(z)}else if(z>-1/0)return Math.ceil(z)
throw H.b(new P.j("Result of truncating division is "+H.f(z)+": "+H.f(a)+" ~/ "+b))},
eH:function(a,b){if(b<0)throw H.b(H.M(b))
return b>31?0:a<<b>>>0},
eI:function(a,b){var z
if(b<0)throw H.b(H.M(b))
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
cd:function(a,b){var z
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
eY:function(a,b){if(typeof b!=="number")throw H.b(H.M(b))
return(a^b)>>>0},
a7:function(a,b){if(typeof b!=="number")throw H.b(H.M(b))
return a<b},
b9:function(a,b){if(typeof b!=="number")throw H.b(H.M(b))
return a>b},
ev:function(a,b){if(typeof b!=="number")throw H.b(H.M(b))
return a>=b},
$isbg:1},
dQ:{"^":"bs;",$isbg:1,$isw:1},
is:{"^":"bs;",$isbg:1},
bt:{"^":"d;",
ck:function(a,b){if(b<0)throw H.b(H.J(a,b))
if(b>=a.length)H.A(H.J(a,b))
return a.charCodeAt(b)},
aF:function(a,b){if(b>=a.length)throw H.b(H.J(a,b))
return a.charCodeAt(b)},
i6:function(a,b,c){var z,y
if(c>b.length)throw H.b(P.I(c,0,b.length,null,null))
z=a.length
if(c+z>b.length)return
for(y=0;y<z;++y)if(this.aF(b,c+y)!==this.aF(a,y))return
return new H.jA(c,b,a)},
n:function(a,b){if(typeof b!=="string")throw H.b(P.dj(b,null,null))
return a+b},
hI:function(a,b){var z,y
z=b.length
y=a.length
if(z>y)return!1
return b===this.cS(a,y-z)},
eK:function(a,b,c){var z
if(c>a.length)throw H.b(P.I(c,0,a.length,null,null))
if(typeof b==="string"){z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)}return J.fE(b,a,c)!=null},
eJ:function(a,b){return this.eK(a,b,0)},
ah:function(a,b,c){var z
if(typeof b!=="number"||Math.floor(b)!==b)H.A(H.M(b))
if(c==null)c=a.length
if(typeof c!=="number"||Math.floor(c)!==c)H.A(H.M(c))
z=J.a7(b)
if(z.a7(b,0))throw H.b(P.b8(b,null,null))
if(z.b9(b,c))throw H.b(P.b8(b,null,null))
if(J.an(c,a.length))throw H.b(P.b8(c,null,null))
return a.substring(b,c)},
cS:function(a,b){return this.ah(a,b,null)},
ip:function(a){return a.toLowerCase()},
en:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aF(z,0)===133){x=J.iw(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.ck(z,w)===133?J.ix(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
bF:function(a,b){var z,y
if(typeof b!=="number")return H.v(b)
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.b(C.u)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
ho:function(a,b,c){if(c>a.length)throw H.b(P.I(c,0,a.length,null,null))
return H.md(a,b,c)},
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
v:{
dR:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
iw:function(a,b){var z,y
for(z=a.length;b<z;){y=C.d.aF(a,b)
if(y!==32&&y!==13&&!J.dR(y))break;++b}return b},
ix:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.d.ck(a,z)
if(y!==32&&y!==13&&!J.dR(y))break}return b}}}}],["","",,H,{"^":"",
co:function(){return new P.T("No element")},
iq:function(){return new P.T("Too many elements")},
dO:function(){return new P.T("Too few elements")},
c:{"^":"a1;$ti",$asc:null},
b5:{"^":"c;$ti",
gI:function(a){return new H.cv(this,this.gi(this),0,null)},
cN:function(a,b){return this.eP(0,b)},
aq:function(a,b){return new H.bw(this,b,[H.K(this,"b5",0),null])},
b2:function(a,b){var z,y,x
z=H.u([],[H.K(this,"b5",0)])
C.a.si(z,this.gi(this))
for(y=0;y<this.gi(this);++y){x=this.A(0,y)
if(y>=z.length)return H.h(z,y)
z[y]=x}return z},
cK:function(a){return this.b2(a,!0)}},
cG:{"^":"b5;a,b,c,$ti",
gfo:function(){var z,y
z=J.ag(this.a)
y=this.c
if(y==null||y>z)return z
return y},
gh5:function(){var z,y
z=J.ag(this.a)
y=this.b
if(y>z)return z
return y},
gi:function(a){var z,y,x
z=J.ag(this.a)
y=this.b
if(y>=z)return 0
x=this.c
if(x==null||x>=z)return z-y
if(typeof x!=="number")return x.N()
return x-y},
A:function(a,b){var z,y
z=this.gh5()+b
if(b>=0){y=this.gfo()
if(typeof y!=="number")return H.v(y)
y=z>=y}else y=!0
if(y)throw H.b(P.F(b,this,"index",null,null))
return J.d9(this.a,z)},
io:function(a,b){var z,y,x
if(b<0)H.A(P.I(b,0,null,"count",null))
z=this.c
y=this.b
x=y+b
if(z==null)return H.ei(this.a,y,x,H.L(this,0))
else{if(z<x)return this
return H.ei(this.a,y,x,H.L(this,0))}},
b2:function(a,b){var z,y,x,w,v,u,t,s,r
z=this.b
y=this.a
x=J.B(y)
w=x.gi(y)
v=this.c
if(v!=null&&v<w)w=v
if(typeof w!=="number")return w.N()
u=w-z
if(u<0)u=0
t=H.u(new Array(u),this.$ti)
for(s=0;s<u;++s){r=x.A(y,z+s)
if(s>=t.length)return H.h(t,s)
t[s]=r
if(x.gi(y)<w)throw H.b(new P.ah(this))}return t},
f3:function(a,b,c,d){var z,y
z=this.b
if(z<0)H.A(P.I(z,0,null,"start",null))
y=this.c
if(y!=null){if(y<0)H.A(P.I(y,0,null,"end",null))
if(z>y)throw H.b(P.I(z,0,y,"start",null))}},
v:{
ei:function(a,b,c,d){var z=new H.cG(a,b,c,[d])
z.f3(a,b,c,d)
return z}}},
cv:{"^":"e;a,b,c,d",
gw:function(){return this.d},
u:function(){var z,y,x,w
z=this.a
y=J.B(z)
x=y.gi(z)
if(this.b!==x)throw H.b(new P.ah(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.A(z,w);++this.c
return!0}},
cx:{"^":"a1;a,b,$ti",
gI:function(a){return new H.iP(null,J.P(this.a),this.b,this.$ti)},
gi:function(a){return J.ag(this.a)},
$asa1:function(a,b){return[b]},
v:{
bS:function(a,b,c,d){if(!!J.m(a).$isc)return new H.dz(a,b,[c,d])
return new H.cx(a,b,[c,d])}}},
dz:{"^":"cx;a,b,$ti",$isc:1,
$asc:function(a,b){return[b]}},
iP:{"^":"dP;a,b,c,$ti",
u:function(){var z=this.b
if(z.u()){this.a=this.c.$1(z.gw())
return!0}this.a=null
return!1},
gw:function(){return this.a}},
bw:{"^":"b5;a,b,$ti",
gi:function(a){return J.ag(this.a)},
A:function(a,b){return this.b.$1(J.d9(this.a,b))},
$asb5:function(a,b){return[b]},
$asc:function(a,b){return[b]},
$asa1:function(a,b){return[b]}},
eA:{"^":"a1;a,b,$ti",
gI:function(a){return new H.jR(J.P(this.a),this.b,this.$ti)},
aq:function(a,b){return new H.cx(this,b,[H.L(this,0),null])}},
jR:{"^":"dP;a,b,$ti",
u:function(){var z,y
for(z=this.a,y=this.b;z.u();)if(y.$1(z.gw())===!0)return!0
return!1},
gw:function(){return this.a.gw()}},
dK:{"^":"e;$ti",
si:function(a,b){throw H.b(new P.j("Cannot change the length of a fixed-length list"))},
D:function(a,b){throw H.b(new P.j("Cannot add to a fixed-length list"))},
aA:function(a,b){throw H.b(new P.j("Cannot remove from a fixed-length list"))}},
cH:{"^":"e;fI:a<",
C:function(a,b){if(b==null)return!1
return b instanceof H.cH&&J.V(this.a,b.a)},
gE:function(a){var z,y
z=this._hashCode
if(z!=null)return z
y=J.Y(this.a)
if(typeof y!=="number")return H.v(y)
z=536870911&664597*y
this._hashCode=z
return z},
k:function(a){return'Symbol("'+H.f(this.a)+'")'}}}],["","",,H,{"^":"",
bF:function(a,b){var z=a.aR(b)
if(!init.globalState.d.cy)init.globalState.f.b1()
return z},
fq:function(a,b){var z,y,x,w,v,u
z={}
z.a=b
if(b==null){b=[]
z.a=b
y=b}else y=b
if(!J.m(y).$isa)throw H.b(P.b_("Arguments to main must be a List: "+H.f(y)))
init.globalState=new H.kI(0,0,1,null,null,null,null,null,null,null,null,null,a)
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
y.f=new H.kd(P.cw(null,H.bE),0)
x=P.w
y.z=new H.W(0,null,null,null,null,null,0,[x,H.cQ])
y.ch=new H.W(0,null,null,null,null,null,0,[x,null])
if(y.x===!0){w=new H.kH()
y.Q=w
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.ii,w)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.kJ)}if(init.globalState.x===!0)return
y=init.globalState.a++
w=P.ab(null,null,null,x)
v=new H.bX(0,null,!1)
u=new H.cQ(y,new H.W(0,null,null,null,null,null,0,[x,H.bX]),w,init.createNewIsolate(),v,new H.aM(H.ca()),new H.aM(H.ca()),!1,!1,[],P.ab(null,null,null,null),null,null,!1,!0,P.ab(null,null,null,null))
w.D(0,0)
u.cZ(0,v)
init.globalState.e=u
init.globalState.d=u
if(H.aJ(a,{func:1,args:[,]}))u.aR(new H.mb(z,a))
else if(H.aJ(a,{func:1,args:[,,]}))u.aR(new H.mc(z,a))
else u.aR(a)
init.globalState.f.b1()},
im:function(){var z=init.currentScript
if(z!=null)return String(z.src)
if(init.globalState.x===!0)return H.io()
return},
io:function(){var z,y
z=new Error().stack
if(z==null){z=function(){try{throw new Error()}catch(x){return x.stack}}()
if(z==null)throw H.b(new P.j("No stack trace"))}y=z.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(y!=null)return y[1]
y=z.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(y!=null)return y[1]
throw H.b(new P.j('Cannot extract URI from "'+z+'"'))},
ii:[function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new H.c0(!0,[]).an(b.data)
y=J.B(z)
switch(y.h(z,"command")){case"start":init.globalState.b=y.h(z,"id")
x=y.h(z,"functionName")
w=x==null?init.globalState.cx:init.globalFunctions[x]()
v=y.h(z,"args")
u=new H.c0(!0,[]).an(y.h(z,"msg"))
t=y.h(z,"isSpawnUri")
s=y.h(z,"startPaused")
r=new H.c0(!0,[]).an(y.h(z,"replyTo"))
y=init.globalState.a++
q=P.w
p=P.ab(null,null,null,q)
o=new H.bX(0,null,!1)
n=new H.cQ(y,new H.W(0,null,null,null,null,null,0,[q,H.bX]),p,init.createNewIsolate(),o,new H.aM(H.ca()),new H.aM(H.ca()),!1,!1,[],P.ab(null,null,null,null),null,null,!1,!0,P.ab(null,null,null,null))
p.D(0,0)
n.cZ(0,o)
init.globalState.f.a.a2(0,new H.bE(n,new H.ij(w,v,u,t,s,r),"worker-start"))
init.globalState.d=n
init.globalState.f.b1()
break
case"spawn-worker":break
case"message":if(y.h(z,"port")!=null)J.aZ(y.h(z,"port"),y.h(z,"msg"))
init.globalState.f.b1()
break
case"close":init.globalState.ch.L(0,$.$get$dN().h(0,a))
a.terminate()
init.globalState.f.b1()
break
case"log":H.ih(y.h(z,"msg"))
break
case"print":if(init.globalState.x===!0){y=init.globalState.Q
q=P.av(["command","print","msg",z])
q=new H.aS(!0,P.bb(null,P.w)).Z(q)
y.toString
self.postMessage(q)}else P.bI(y.h(z,"msg"))
break
case"error":throw H.b(y.h(z,"msg"))}},null,null,4,0,null,22,2],
ih:function(a){var z,y,x,w
if(init.globalState.x===!0){y=init.globalState.Q
x=P.av(["command","log","msg",a])
x=new H.aS(!0,P.bb(null,P.w)).Z(x)
y.toString
self.postMessage(x)}else try{self.console.log(a)}catch(w){H.G(w)
z=H.U(w)
y=P.bP(z)
throw H.b(y)}},
ik:function(a,b,c,d,e,f){var z,y,x,w
z=init.globalState.d
y=z.a
$.e5=$.e5+("_"+y)
$.e6=$.e6+("_"+y)
y=z.e
x=init.globalState.d.a
w=z.f
J.aZ(f,["spawned",new H.c2(y,x),w,z.r])
x=new H.il(a,b,c,d,z)
if(e===!0){z.dJ(w,w)
init.globalState.f.a.a2(0,new H.bE(z,x,"start isolate"))}else x.$0()},
ld:function(a){return new H.c0(!0,[]).an(new H.aS(!1,P.bb(null,P.w)).Z(a))},
mb:{"^":"i:2;a,b",
$0:function(){this.b.$1(this.a.a)}},
mc:{"^":"i:2;a,b",
$0:function(){this.b.$2(this.a.a,null)}},
kI:{"^":"e;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",v:{
kJ:[function(a){var z=P.av(["command","print","msg",a])
return new H.aS(!0,P.bb(null,P.w)).Z(z)},null,null,2,0,null,7]}},
cQ:{"^":"e;a,b,c,i3:d<,hp:e<,f,r,hX:x?,aX:y<,hx:z<,Q,ch,cx,cy,db,dx",
dJ:function(a,b){if(!this.f.C(0,a))return
if(this.Q.D(0,b)&&!this.y)this.y=!0
this.ce()},
ik:function(a){var z,y,x,w,v,u
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
if(w===y.c)y.di();++y.d}this.y=!1}this.ce()},
hb:function(a,b){var z,y,x
if(this.ch==null)this.ch=[]
for(z=J.m(a),y=0;x=this.ch,y<x.length;y+=2)if(z.C(a,x[y])){z=this.ch
x=y+1
if(x>=z.length)return H.h(z,x)
z[x]=b
return}x.push(a)
this.ch.push(b)},
ij:function(a){var z,y,x
if(this.ch==null)return
for(z=J.m(a),y=0;x=this.ch,y<x.length;y+=2)if(z.C(a,x[y])){z=this.ch
x=y+2
z.toString
if(typeof z!=="object"||z===null||!!z.fixed$length)H.A(new P.j("removeRange"))
P.cE(y,x,z.length,null,null,null)
z.splice(y,x-y)
return}},
eG:function(a,b){if(!this.r.C(0,a))return
this.db=b},
hQ:function(a,b,c){var z=J.m(b)
if(!z.C(b,0))z=z.C(b,1)&&!this.cy
else z=!0
if(z){J.aZ(a,c)
return}z=this.cx
if(z==null){z=P.cw(null,null)
this.cx=z}z.a2(0,new H.kx(a,c))},
hP:function(a,b){var z
if(!this.r.C(0,a))return
z=J.m(b)
if(!z.C(b,0))z=z.C(b,1)&&!this.cy
else z=!0
if(z){this.cq()
return}z=this.cx
if(z==null){z=P.cw(null,null)
this.cx=z}z.a2(0,this.gi4())},
hR:function(a,b){var z,y,x
z=this.dx
if(z.a===0){if(this.db===!0&&this===init.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.bI(a)
if(b!=null)P.bI(b)}return}y=new Array(2)
y.fixed$length=Array
y[0]=J.E(a)
y[1]=b==null?null:J.E(b)
for(x=new P.eR(z,z.r,null,null),x.c=z.e;x.u();)J.aZ(x.d,y)},
aR:function(a){var z,y,x,w,v,u,t
z=init.globalState.d
init.globalState.d=this
$=this.d
y=null
x=this.cy
this.cy=!0
try{y=a.$0()}catch(u){w=H.G(u)
v=H.U(u)
this.hR(w,v)
if(this.db===!0){this.cq()
if(this===init.globalState.e)throw u}}finally{this.cy=x
init.globalState.d=z
if(z!=null)$=z.gi3()
if(this.cx!=null)for(;t=this.cx,!t.gH(t);)this.cx.eh().$0()}return y},
hN:function(a){var z=J.B(a)
switch(z.h(a,0)){case"pause":this.dJ(z.h(a,1),z.h(a,2))
break
case"resume":this.ik(z.h(a,1))
break
case"add-ondone":this.hb(z.h(a,1),z.h(a,2))
break
case"remove-ondone":this.ij(z.h(a,1))
break
case"set-errors-fatal":this.eG(z.h(a,1),z.h(a,2))
break
case"ping":this.hQ(z.h(a,1),z.h(a,2),z.h(a,3))
break
case"kill":this.hP(z.h(a,1),z.h(a,2))
break
case"getErrors":this.dx.D(0,z.h(a,1))
break
case"stopErrors":this.dx.L(0,z.h(a,1))
break}},
e3:function(a){return this.b.h(0,a)},
cZ:function(a,b){var z=this.b
if(z.T(0,a))throw H.b(P.bP("Registry: ports must be registered only once."))
z.j(0,a,b)},
ce:function(){var z=this.b
if(z.gi(z)-this.c.a>0||this.y||!this.x)init.globalState.z.j(0,this.a,this)
else this.cq()},
cq:[function(){var z,y,x,w,v
z=this.cx
if(z!=null)z.am(0)
for(z=this.b,y=z.gcM(z),y=y.gI(y);y.u();)y.gw().fg()
z.am(0)
this.c.am(0)
init.globalState.z.L(0,this.a)
this.dx.am(0)
if(this.ch!=null){for(x=0;z=this.ch,y=z.length,x<y;x+=2){w=z[x]
v=x+1
if(v>=y)return H.h(z,v)
J.aZ(w,z[v])}this.ch=null}},"$0","gi4",0,0,1]},
kx:{"^":"i:1;a,b",
$0:[function(){J.aZ(this.a,this.b)},null,null,0,0,null,"call"]},
kd:{"^":"e;a,b",
hy:function(){var z=this.a
if(z.b===z.c)return
return z.eh()},
ej:function(){var z,y,x
z=this.hy()
if(z==null){if(init.globalState.e!=null)if(init.globalState.z.T(0,init.globalState.e.a))if(init.globalState.r===!0){y=init.globalState.e.b
y=y.gH(y)}else y=!1
else y=!1
else y=!1
if(y)H.A(P.bP("Program exited with open ReceivePorts."))
y=init.globalState
if(y.x===!0){x=y.z
x=x.gH(x)&&y.f.b===0}else x=!1
if(x){y=y.Q
x=P.av(["command","close"])
x=new H.aS(!0,new P.eS(0,null,null,null,null,null,0,[null,P.w])).Z(x)
y.toString
self.postMessage(x)}return!1}z.ih()
return!0},
dz:function(){if(self.window!=null)new H.ke(this).$0()
else for(;this.ej(););},
b1:function(){var z,y,x,w,v
if(init.globalState.x!==!0)this.dz()
else try{this.dz()}catch(x){z=H.G(x)
y=H.U(x)
w=init.globalState.Q
v=P.av(["command","error","msg",H.f(z)+"\n"+H.f(y)])
v=new H.aS(!0,P.bb(null,P.w)).Z(v)
w.toString
self.postMessage(v)}}},
ke:{"^":"i:1;a",
$0:function(){if(!this.a.ej())return
P.jG(C.m,this)}},
bE:{"^":"e;a,b,c",
ih:function(){var z=this.a
if(z.gaX()){z.ghx().push(this)
return}z.aR(this.b)}},
kH:{"^":"e;"},
ij:{"^":"i:2;a,b,c,d,e,f",
$0:function(){H.ik(this.a,this.b,this.c,this.d,this.e,this.f)}},
il:{"^":"i:1;a,b,c,d,e",
$0:function(){var z,y
z=this.e
z.shX(!0)
if(this.d!==!0)this.a.$1(this.c)
else{y=this.a
if(H.aJ(y,{func:1,args:[,,]}))y.$2(this.b,this.c)
else if(H.aJ(y,{func:1,args:[,]}))y.$1(this.b)
else y.$0()}z.ce()}},
eD:{"^":"e;"},
c2:{"^":"eD;b,a",
af:function(a,b){var z,y,x
z=init.globalState.z.h(0,this.a)
if(z==null)return
y=this.b
if(y.gdn())return
x=H.ld(b)
if(z.ghp()===y){z.hN(x)
return}init.globalState.f.a.a2(0,new H.bE(z,new H.kL(this,x),"receive"))},
C:function(a,b){if(b==null)return!1
return b instanceof H.c2&&J.V(this.b,b.b)},
gE:function(a){return this.b.gc3()}},
kL:{"^":"i:2;a,b",
$0:function(){var z=this.a.b
if(!z.gdn())J.fu(z,this.b)}},
cR:{"^":"eD;b,c,a",
af:function(a,b){var z,y,x
z=P.av(["command","message","port",this,"msg",b])
y=new H.aS(!0,P.bb(null,P.w)).Z(z)
if(init.globalState.x===!0){init.globalState.Q.toString
self.postMessage(y)}else{x=init.globalState.ch.h(0,this.b)
if(x!=null)x.postMessage(y)}},
C:function(a,b){if(b==null)return!1
return b instanceof H.cR&&J.V(this.b,b.b)&&J.V(this.a,b.a)&&J.V(this.c,b.c)},
gE:function(a){var z,y,x
z=J.d6(this.b,16)
y=J.d6(this.a,8)
x=this.c
if(typeof x!=="number")return H.v(x)
return(z^y^x)>>>0}},
bX:{"^":"e;c3:a<,b,dn:c<",
fg:function(){this.c=!0
this.b=null},
fa:function(a,b){if(this.c)return
this.b.$1(b)},
$isji:1},
jC:{"^":"e;a,b,c",
a_:function(a){var z
if(self.setTimeout!=null){if(this.b)throw H.b(new P.j("Timer in event loop cannot be canceled."))
z=this.c
if(z==null)return;--init.globalState.f.b
self.clearTimeout(z)
this.c=null}else throw H.b(new P.j("Canceling a timer."))},
f4:function(a,b){var z,y
if(a===0)z=self.setTimeout==null||init.globalState.x===!0
else z=!1
if(z){this.c=1
z=init.globalState.f
y=init.globalState.d
z.a.a2(0,new H.bE(y,new H.jE(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++init.globalState.f.b
this.c=self.setTimeout(H.a6(new H.jF(this,b),0),a)}else throw H.b(new P.j("Timer greater than 0."))},
v:{
jD:function(a,b){var z=new H.jC(!0,!1,null)
z.f4(a,b)
return z}}},
jE:{"^":"i:1;a,b",
$0:function(){this.a.c=null
this.b.$0()}},
jF:{"^":"i:1;a,b",
$0:[function(){this.a.c=null;--init.globalState.f.b
this.b.$0()},null,null,0,0,null,"call"]},
aM:{"^":"e;c3:a<",
gE:function(a){var z,y,x
z=this.a
y=J.a7(z)
x=y.eI(z,0)
y=y.bM(z,4294967296)
if(typeof y!=="number")return H.v(y)
z=x^y
z=(~z>>>0)+(z<<15>>>0)&4294967295
z=((z^z>>>12)>>>0)*5&4294967295
z=((z^z>>>4)>>>0)*2057&4294967295
return(z^z>>>16)>>>0},
C:function(a,b){var z,y
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aM){z=this.a
y=b.a
return z==null?y==null:z===y}return!1}},
aS:{"^":"e;a,b",
Z:[function(a){var z,y,x,w,v
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=this.b
y=z.h(0,a)
if(y!=null)return["ref",y]
z.j(0,a,z.gi(z))
z=J.m(a)
if(!!z.$iscz)return["buffer",a]
if(!!z.$isbx)return["typed",a]
if(!!z.$iso)return this.eC(a)
if(!!z.$isig){x=this.gez()
w=z.gad(a)
w=H.bS(w,x,H.K(w,"a1",0),null)
w=P.aP(w,!0,H.K(w,"a1",0))
z=z.gcM(a)
z=H.bS(z,x,H.K(z,"a1",0),null)
return["map",w,P.aP(z,!0,H.K(z,"a1",0))]}if(!!z.$isiv)return this.eD(a)
if(!!z.$isd)this.eo(a)
if(!!z.$isji)this.b8(a,"RawReceivePorts can't be transmitted:")
if(!!z.$isc2)return this.eE(a)
if(!!z.$iscR)return this.eF(a)
if(!!z.$isi){v=a.$static_name
if(v==null)this.b8(a,"Closures can't be transmitted:")
return["function",v]}if(!!z.$isaM)return["capability",a.a]
if(!(a instanceof P.e))this.eo(a)
return["dart",init.classIdExtractor(a),this.eB(init.classFieldsExtractor(a))]},"$1","gez",2,0,0,8],
b8:function(a,b){throw H.b(new P.j((b==null?"Can't transmit:":b)+" "+H.f(a)))},
eo:function(a){return this.b8(a,null)},
eC:function(a){var z=this.eA(a)
if(!!a.fixed$length)return["fixed",z]
if(!a.fixed$length)return["extendable",z]
if(!a.immutable$list)return["mutable",z]
if(a.constructor===Array)return["const",z]
this.b8(a,"Can't serialize indexable: ")},
eA:function(a){var z,y,x
z=[]
C.a.si(z,a.length)
for(y=0;y<a.length;++y){x=this.Z(a[y])
if(y>=z.length)return H.h(z,y)
z[y]=x}return z},
eB:function(a){var z
for(z=0;z<a.length;++z)C.a.j(a,z,this.Z(a[z]))
return a},
eD:function(a){var z,y,x,w
if(!!a.constructor&&a.constructor!==Object)this.b8(a,"Only plain JS Objects are supported:")
z=Object.keys(a)
y=[]
C.a.si(y,z.length)
for(x=0;x<z.length;++x){w=this.Z(a[z[x]])
if(x>=y.length)return H.h(y,x)
y[x]=w}return["js-object",z,y]},
eF:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
eE:function(a){if(this.a)return["sendport",init.globalState.b,a.a,a.b.gc3()]
return["raw sendport",a]}},
c0:{"^":"e;a,b",
an:[function(a){var z,y,x,w,v,u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.b(P.b_("Bad serialized message: "+H.f(a)))
switch(C.a.ghL(a)){case"ref":if(1>=a.length)return H.h(a,1)
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
y=H.u(this.aQ(x),[null])
y.fixed$length=Array
return y
case"extendable":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return H.u(this.aQ(x),[null])
case"mutable":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return this.aQ(x)
case"const":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
y=H.u(this.aQ(x),[null])
y.fixed$length=Array
return y
case"map":return this.hB(a)
case"sendport":return this.hC(a)
case"raw sendport":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return x
case"js-object":return this.hA(a)
case"function":if(1>=a.length)return H.h(a,1)
x=init.globalFunctions[a[1]]()
this.b.push(x)
return x
case"capability":if(1>=a.length)return H.h(a,1)
return new H.aM(a[1])
case"dart":y=a.length
if(1>=y)return H.h(a,1)
w=a[1]
if(2>=y)return H.h(a,2)
v=a[2]
u=init.instanceFromClassId(w)
this.b.push(u)
this.aQ(v)
return init.initializeEmptyInstance(w,u,v)
default:throw H.b("couldn't deserialize: "+H.f(a))}},"$1","ghz",2,0,0,8],
aQ:function(a){var z,y,x
z=J.B(a)
y=0
while(!0){x=z.gi(a)
if(typeof x!=="number")return H.v(x)
if(!(y<x))break
z.j(a,y,this.an(z.h(a,y)));++y}return a},
hB:function(a){var z,y,x,w,v,u
z=a.length
if(1>=z)return H.h(a,1)
y=a[1]
if(2>=z)return H.h(a,2)
x=a[2]
w=P.b4()
this.b.push(w)
y=J.df(y,this.ghz()).cK(0)
for(z=J.B(y),v=J.B(x),u=0;u<z.gi(y);++u)w.j(0,z.h(y,u),this.an(v.h(x,u)))
return w},
hC:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.h(a,1)
y=a[1]
if(2>=z)return H.h(a,2)
x=a[2]
if(3>=z)return H.h(a,3)
w=a[3]
if(J.V(y,init.globalState.b)){v=init.globalState.z.h(0,x)
if(v==null)return
u=v.e3(w)
if(u==null)return
t=new H.c2(u,x)}else t=new H.cR(y,w,x)
this.b.push(t)
return t},
hA:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.h(a,1)
y=a[1]
if(2>=z)return H.h(a,2)
x=a[2]
w={}
this.b.push(w)
z=J.B(y)
v=J.B(x)
u=0
while(!0){t=z.gi(y)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
w[z.h(y,u)]=this.an(v.h(x,u));++u}return w}}}],["","",,H,{"^":"",
hb:function(){throw H.b(new P.j("Cannot modify unmodifiable Map"))},
lM:function(a){return init.types[a]},
fk:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.m(a).$isq},
f:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.E(a)
if(typeof z!=="string")throw H.b(H.M(a))
return z},
am:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
e3:function(a,b){if(b==null)throw H.b(new P.cm(a,null,null))
return b.$1(a)},
e7:function(a,b,c){var z,y
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return H.e3(a,c)
if(3>=z.length)return H.h(z,3)
y=z[3]
if(y!=null)return parseInt(a,10)
if(z[2]!=null)return parseInt(a,16)
return H.e3(a,c)},
e2:function(a,b){return b.$1(a)},
jg:function(a,b){var z,y
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.e2(a,b)
z=parseFloat(a)
if(isNaN(z)){y=C.d.en(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return H.e2(a,b)}return z},
bW:function(a){var z,y,x,w,v,u,t,s
z=J.m(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.x||!!J.m(a).$isbC){v=C.o(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)
s=t==null?null:t[1]
if(typeof s==="string"&&/^\w+$/.test(s))w=s}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.d.aF(w,0)===36)w=C.d.cS(w,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(w+H.fl(H.c7(a),0,null),init.mangledGlobalNames)},
bV:function(a){return"Instance of '"+H.bW(a)+"'"},
Z:function(a){var z
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){z=a-65536
return String.fromCharCode((55296|C.c.cd(z,10))>>>0,56320|z&1023)}throw H.b(P.I(a,0,1114111,null,null))},
S:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
jf:function(a){return a.b?H.S(a).getUTCFullYear()+0:H.S(a).getFullYear()+0},
jd:function(a){return a.b?H.S(a).getUTCMonth()+1:H.S(a).getMonth()+1},
j9:function(a){return a.b?H.S(a).getUTCDate()+0:H.S(a).getDate()+0},
ja:function(a){return a.b?H.S(a).getUTCHours()+0:H.S(a).getHours()+0},
jc:function(a){return a.b?H.S(a).getUTCMinutes()+0:H.S(a).getMinutes()+0},
je:function(a){return a.b?H.S(a).getUTCSeconds()+0:H.S(a).getSeconds()+0},
jb:function(a){return a.b?H.S(a).getUTCMilliseconds()+0:H.S(a).getMilliseconds()+0},
cD:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.b(H.M(a))
return a[b]},
e8:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.b(H.M(a))
a[b]=c},
e4:function(a,b,c){var z,y,x
z={}
z.a=0
y=[]
x=[]
z.a=b.length
C.a.O(y,b)
z.b=""
if(c!=null&&!c.gH(c))c.P(0,new H.j8(z,y,x))
return J.fF(a,new H.it(C.K,""+"$"+z.a+z.b,0,y,x,null))},
j7:function(a,b){var z,y
z=b instanceof Array?b:P.aP(b,!0,null)
y=z.length
if(y===0){if(!!a.$0)return a.$0()}else if(y===1){if(!!a.$1)return a.$1(z[0])}else if(y===2){if(!!a.$2)return a.$2(z[0],z[1])}else if(y===3){if(!!a.$3)return a.$3(z[0],z[1],z[2])}else if(y===4){if(!!a.$4)return a.$4(z[0],z[1],z[2],z[3])}else if(y===5)if(!!a.$5)return a.$5(z[0],z[1],z[2],z[3],z[4])
return H.j6(a,z)},
j6:function(a,b){var z,y,x,w,v,u
z=b.length
y=a[""+"$"+z]
if(y==null){y=J.m(a)["call*"]
if(y==null)return H.e4(a,b,null)
x=H.ea(y)
w=x.d
v=w+x.e
if(x.f||w>z||v<z)return H.e4(a,b,null)
b=P.aP(b,!0,null)
for(u=z;u<v;++u)C.a.D(b,init.metadata[x.hw(0,u)])}return y.apply(a,b)},
v:function(a){throw H.b(H.M(a))},
h:function(a,b){if(a==null)J.ag(a)
throw H.b(H.J(a,b))},
J:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,"index",null)
z=J.ag(a)
if(!(b<0)){if(typeof z!=="number")return H.v(z)
y=b>=z}else y=!0
if(y)return P.F(b,a,"index",null,z)
return P.b8(b,"index",null)},
M:function(a){return new P.ao(!0,a,null,null)},
lA:function(a){if(typeof a!=="string")throw H.b(H.M(a))
return a},
b:function(a){var z
if(a==null)a=new P.bU()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.fs})
z.name=""}else z.toString=H.fs
return z},
fs:[function(){return J.E(this.dartException)},null,null,0,0,null],
A:function(a){throw H.b(a)},
C:function(a){throw H.b(new P.ah(a))},
G:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.mf(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.c.cd(x,16)&8191)===10)switch(w){case 438:return z.$1(H.cr(H.f(y)+" (Error "+w+")",null))
case 445:case 5007:v=H.f(y)+" (Error "+w+")"
return z.$1(new H.e0(v,null))}}if(a instanceof TypeError){u=$.$get$eo()
t=$.$get$ep()
s=$.$get$eq()
r=$.$get$er()
q=$.$get$ev()
p=$.$get$ew()
o=$.$get$et()
$.$get$es()
n=$.$get$ey()
m=$.$get$ex()
l=u.a0(y)
if(l!=null)return z.$1(H.cr(y,l))
else{l=t.a0(y)
if(l!=null){l.method="call"
return z.$1(H.cr(y,l))}else{l=s.a0(y)
if(l==null){l=r.a0(y)
if(l==null){l=q.a0(y)
if(l==null){l=p.a0(y)
if(l==null){l=o.a0(y)
if(l==null){l=r.a0(y)
if(l==null){l=n.a0(y)
if(l==null){l=m.a0(y)
v=l!=null}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0
if(v)return z.$1(new H.e0(y,l==null?null:l.method))}}return z.$1(new H.jQ(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.ee()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.ao(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.ee()
return a},
U:function(a){var z
if(a==null)return new H.eT(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.eT(a,null)},
m8:function(a){if(a==null||typeof a!='object')return J.Y(a)
else return H.am(a)},
lL:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.j(0,a[y],a[x])}return b},
lV:[function(a,b,c,d,e,f,g){switch(c){case 0:return H.bF(b,new H.lW(a))
case 1:return H.bF(b,new H.lX(a,d))
case 2:return H.bF(b,new H.lY(a,d,e))
case 3:return H.bF(b,new H.lZ(a,d,e,f))
case 4:return H.bF(b,new H.m_(a,d,e,f,g))}throw H.b(P.bP("Unsupported number of arguments for wrapped closure"))},null,null,14,0,null,20,17,25,31,32,18,16],
a6:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,init.globalState.d,H.lV)
a.$identity=z
return z},
h3:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.m(c).$isa){z.$reflectionInfo=c
x=H.ea(z).r}else x=c
w=d?Object.create(new H.jv().constructor.prototype):Object.create(new H.cg(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.a9
$.a9=J.k(u,1)
v=new Function("a,b,c,d"+u,"this.$initialize(a,b,c,d"+u+")")}w.constructor=v
v.prototype=w
if(!d){t=e.length==1&&!0
s=H.dp(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g,h){return function(){return g(h)}}(H.lM,x)
else if(typeof x=="function")if(d)r=x
else{q=t?H.dm:H.ch
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.b("Error in reflectionInfo.")
w.$S=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.dp(a,o,t)
w[n]=m}}w["call*"]=s
w.$R=z.$R
w.$D=z.$D
return v},
h0:function(a,b,c,d){var z=H.ch
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
dp:function(a,b,c){var z,y,x,w,v,u,t
if(c)return H.h2(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.h0(y,!w,z,b)
if(y===0){w=$.a9
$.a9=J.k(w,1)
u="self"+H.f(w)
w="return function(){var "+u+" = this."
v=$.b0
if(v==null){v=H.bM("self")
$.b0=v}return new Function(w+H.f(v)+";return "+u+"."+H.f(z)+"();}")()}t="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w=$.a9
$.a9=J.k(w,1)
t+=H.f(w)
w="return function("+t+"){return this."
v=$.b0
if(v==null){v=H.bM("self")
$.b0=v}return new Function(w+H.f(v)+"."+H.f(z)+"("+t+");}")()},
h1:function(a,b,c,d){var z,y
z=H.ch
y=H.dm
switch(b?-1:a){case 0:throw H.b(new H.jl("Intercepted function with no arguments."))
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
z=H.fY()
y=$.dl
if(y==null){y=H.bM("receiver")
$.dl=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.h1(w,!u,x,b)
if(w===1){y="return function(){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+");"
u=$.a9
$.a9=J.k(u,1)
return new Function(y+H.f(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.f(z)+"."+H.f(x)+"(this."+H.f(y)+", "+s+");"
u=$.a9
$.a9=J.k(u,1)
return new Function(y+H.f(u)+"}")()},
cY:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.m(c).$isa){c.fixed$length=Array
z=c}else z=c
return H.h3(a,b,z,!!d,e,f)},
m6:function(a){if(typeof a==="number"||a==null)return a
throw H.b(H.dn(H.bW(a),"num"))},
ma:function(a,b){var z=J.B(b)
throw H.b(H.dn(H.bW(a),z.ah(b,3,z.gi(b))))},
fi:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.m(a)[b]
else z=!0
if(z)return a
H.ma(a,b)},
lJ:function(a){var z=J.m(a)
return"$S" in z?z.$S():null},
aJ:function(a,b){var z
if(a==null)return!1
z=H.lJ(a)
return z==null?!1:H.fj(z,b)},
me:function(a){throw H.b(new P.hf(a))},
ca:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
d_:function(a){return init.getIsolateTag(a)},
u:function(a,b){a.$ti=b
return a},
c7:function(a){if(a==null)return
return a.$ti},
fh:function(a,b){return H.d3(a["$as"+H.f(b)],H.c7(a))},
K:function(a,b,c){var z=H.fh(a,b)
return z==null?null:z[c]},
L:function(a,b){var z=H.c7(a)
return z==null?null:z[b]},
aX:function(a,b){var z
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.fl(a,1,b)
if(typeof a=="function")return a.builtin$cls
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){z=a.typedef
if(z!=null)return H.aX(z,b)
return H.lj(a,b)}return"unknown-reified-type"},
lj:function(a,b){var z,y,x,w,v,u,t,s,r,q,p
z=!!a.v?"void":H.aX(a.ret,b)
if("args" in a){y=a.args
for(x=y.length,w="",v="",u=0;u<x;++u,v=", "){t=y[u]
w=w+v+H.aX(t,b)}}else{w=""
v=""}if("opt" in a){s=a.opt
w+=v+"["
for(x=s.length,v="",u=0;u<x;++u,v=", "){t=s[u]
w=w+v+H.aX(t,b)}w+="]"}if("named" in a){r=a.named
w+=v+"{"
for(x=H.lK(r),q=x.length,v="",u=0;u<q;++u,v=", "){p=x[u]
w=w+v+H.aX(r[p],b)+(" "+H.f(p))}w+="}"}return"("+w+") => "+z},
fl:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.aQ("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.l=v+", "
u=a[y]
if(u!=null)w=!1
v=z.l+=H.aX(u,c)}return w?"":"<"+z.k(0)+">"},
d3:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
bH:function(a,b,c,d){var z,y
if(a==null)return!1
z=H.c7(a)
y=J.m(a)
if(y[b]==null)return!1
return H.fc(H.d3(y[d],z),c)},
fc:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.a_(a[y],b[y]))return!1
return!0},
bf:function(a,b,c){return a.apply(b,H.fh(b,c))},
a_:function(a,b){var z,y,x,w,v,u
if(a===b)return!0
if(a==null||b==null)return!0
if(a.builtin$cls==="b6")return!0
if('func' in b)return H.fj(a,b)
if('func' in a)return b.builtin$cls==="cn"||b.builtin$cls==="e"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){v=H.aX(w,null)
if(!('$is'+v in y.prototype))return!1
u=y.prototype["$as"+v]}else u=null
if(!z&&u==null||!x)return!0
z=z?a.slice(1):null
x=b.slice(1)
return H.fc(H.d3(u,z),x)},
fb:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.a_(z,v)||H.a_(v,z)))return!1}return!0},
lu:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=Object.getOwnPropertyNames(b)
z.fixed$length=Array
y=z
for(z=y.length,x=0;x<z;++x){w=y[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.a_(v,u)||H.a_(u,v)))return!1}return!0},
fj:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.a_(z,y)||H.a_(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.fb(x,w,!1))return!1
if(!H.fb(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.a_(o,n)||H.a_(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.a_(o,n)||H.a_(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.a_(o,n)||H.a_(n,o)))return!1}}return H.lu(a.named,b.named)},
pn:function(a){var z=$.d0
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
pj:function(a){return H.am(a)},
pi:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
m2:function(a){var z,y,x,w,v,u
z=$.d0.$1(a)
y=$.c5[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.fa.$2(a,z)
if(z!=null){y=$.c5[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.c8[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.d2(x)
$.c5[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.c8[z]=x
return x}if(v==="-"){u=H.d2(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.fn(a,x)
if(v==="*")throw H.b(new P.bB(z))
if(init.leafTags[z]===true){u=H.d2(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.fn(a,x)},
fn:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.c9(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
d2:function(a){return J.c9(a,!1,null,!!a.$isq)},
m3:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.c9(z,!1,null,!!z.$isq)
else return J.c9(z,c,null,null)},
lT:function(){if(!0===$.d1)return
$.d1=!0
H.lU()},
lU:function(){var z,y,x,w,v,u,t,s
$.c5=Object.create(null)
$.c8=Object.create(null)
H.lP()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.fo.$1(v)
if(u!=null){t=H.m3(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
lP:function(){var z,y,x,w,v,u,t
z=C.B()
z=H.aV(C.y,H.aV(C.D,H.aV(C.n,H.aV(C.n,H.aV(C.C,H.aV(C.z,H.aV(C.A(C.o),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.d0=new H.lQ(v)
$.fa=new H.lR(u)
$.fo=new H.lS(t)},
aV:function(a,b){return a(b)||b},
md:function(a,b,c){var z=a.indexOf(b,c)
return z>=0},
fr:function(a,b,c){var z,y,x
H.lA(c)
if(b==="")if(a==="")return c
else{z=a.length
y=H.f(c)
for(x=0;x<z;++x)y=y+a[x]+H.f(c)
return y.charCodeAt(0)==0?y:y}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
ha:{"^":"ez;a,$ti",$asez:I.O,$asD:I.O,$isD:1},
h9:{"^":"e;",
gH:function(a){return this.gi(this)===0},
k:function(a){return P.cy(this)},
j:function(a,b,c){return H.hb()},
$isD:1,
$asD:null},
hc:{"^":"h9;a,b,c,$ti",
gi:function(a){return this.a},
T:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.T(0,b))return
return this.dd(b)},
dd:function(a){return this.b[a]},
P:function(a,b){var z,y,x,w
z=this.c
for(y=z.length,x=0;x<y;++x){w=z[x]
b.$2(w,this.dd(w))}}},
it:{"^":"e;a,b,c,d,e,f",
ge4:function(){var z=this.a
return z},
ged:function(){var z,y,x,w
if(this.c===1)return C.h
z=this.d
y=z.length-this.e.length
if(y===0)return C.h
x=[]
for(w=0;w<y;++w){if(w>=z.length)return H.h(z,w)
x.push(z[w])}x.fixed$length=Array
x.immutable$list=Array
return x},
ge5:function(){var z,y,x,w,v,u,t,s,r
if(this.c!==0)return C.q
z=this.e
y=z.length
x=this.d
w=x.length-y
if(y===0)return C.q
v=P.bA
u=new H.W(0,null,null,null,null,null,0,[v,null])
for(t=0;t<y;++t){if(t>=z.length)return H.h(z,t)
s=z[t]
r=w+t
if(r<0||r>=x.length)return H.h(x,r)
u.j(0,new H.cH(s),x[r])}return new H.ha(u,[v,null])}},
jk:{"^":"e;a,b,c,d,e,f,r,x",
hw:function(a,b){var z=this.d
if(typeof b!=="number")return b.a7()
if(b<z)return
return this.b[3+b-z]},
v:{
ea:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.jk(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
j8:{"^":"i:9;a,b,c",
$2:function(a,b){var z=this.a
z.b=z.b+"$"+H.f(a)
this.c.push(a)
this.b.push(b);++z.a}},
jO:{"^":"e;a,b,c,d,e,f",
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
v:{
ac:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.jO(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),y,x,w,v,u)},
bZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},
eu:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
e0:{"^":"N;a,b",
k:function(a){var z=this.b
if(z==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+H.f(z)+"' on null"}},
iD:{"^":"N;a,b,c",
k:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.f(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+z+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+z+"' on '"+y+"' ("+H.f(this.a)+")"},
v:{
cr:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.iD(a,y,z?null:b.receiver)}}},
jQ:{"^":"N;a",
k:function(a){var z=this.a
return z.length===0?"Error":"Error: "+z}},
mf:{"^":"i:0;a",
$1:function(a){if(!!J.m(a).$isN)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
eT:{"^":"e;a,b",
k:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z}},
lW:{"^":"i:2;a",
$0:function(){return this.a.$0()}},
lX:{"^":"i:2;a,b",
$0:function(){return this.a.$1(this.b)}},
lY:{"^":"i:2;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
lZ:{"^":"i:2;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
m_:{"^":"i:2;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
i:{"^":"e;",
k:function(a){return"Closure '"+H.bW(this).trim()+"'"},
geu:function(){return this},
$iscn:1,
geu:function(){return this}},
ej:{"^":"i;"},
jv:{"^":"ej;",
k:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
cg:{"^":"ej;a,b,c,d",
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cg))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gE:function(a){var z,y
z=this.c
if(z==null)y=H.am(this.a)
else y=typeof z!=="object"?J.Y(z):H.am(z)
return J.ft(y,H.am(this.b))},
k:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.f(this.d)+"' of "+H.bV(z)},
v:{
ch:function(a){return a.a},
dm:function(a){return a.c},
fY:function(){var z=$.b0
if(z==null){z=H.bM("self")
$.b0=z}return z},
bM:function(a){var z,y,x,w,v
z=new H.cg("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
h_:{"^":"N;a",
k:function(a){return this.a},
v:{
dn:function(a,b){return new H.h_("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")}}},
jl:{"^":"N;a",
k:function(a){return"RuntimeError: "+H.f(this.a)}},
W:{"^":"e;a,b,c,d,e,f,r,$ti",
gi:function(a){return this.a},
gH:function(a){return this.a===0},
gad:function(a){return new H.iK(this,[H.L(this,0)])},
gcM:function(a){return H.bS(this.gad(this),new H.iC(this),H.L(this,0),H.L(this,1))},
T:function(a,b){var z,y
if(typeof b==="string"){z=this.b
if(z==null)return!1
return this.d9(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return this.d9(y,b)}else return this.hZ(b)},
hZ:function(a){var z=this.d
if(z==null)return!1
return this.aW(this.bj(z,this.aV(a)),a)>=0},
h:function(a,b){var z,y,x
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.aJ(z,b)
return y==null?null:y.gap()}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null)return
y=this.aJ(x,b)
return y==null?null:y.gap()}else return this.i_(b)},
i_:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.bj(z,this.aV(a))
x=this.aW(y,a)
if(x<0)return
return y[x].gap()},
j:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.c5()
this.b=z}this.cY(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.c5()
this.c=y}this.cY(y,b,c)}else{x=this.d
if(x==null){x=this.c5()
this.d=x}w=this.aV(b)
v=this.bj(x,w)
if(v==null)this.cc(x,w,[this.c6(b,c)])
else{u=this.aW(v,b)
if(u>=0)v[u].sap(c)
else v.push(this.c6(b,c))}}},
L:function(a,b){if(typeof b==="string")return this.du(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.du(this.c,b)
else return this.i0(b)},
i0:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.bj(z,this.aV(a))
x=this.aW(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.dE(w)
return w.gap()},
am:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
P:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.b(new P.ah(this))
z=z.c}},
cY:function(a,b,c){var z=this.aJ(a,b)
if(z==null)this.cc(a,b,this.c6(b,c))
else z.sap(c)},
du:function(a,b){var z
if(a==null)return
z=this.aJ(a,b)
if(z==null)return
this.dE(z)
this.da(a,b)
return z.gap()},
c6:function(a,b){var z,y
z=new H.iJ(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
dE:function(a){var z,y
z=a.gfL()
y=a.gfJ()
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.r=this.r+1&67108863},
aV:function(a){return J.Y(a)&0x3ffffff},
aW:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].gdY(),b))return y
return-1},
k:function(a){return P.cy(this)},
aJ:function(a,b){return a[b]},
bj:function(a,b){return a[b]},
cc:function(a,b,c){a[b]=c},
da:function(a,b){delete a[b]},
d9:function(a,b){return this.aJ(a,b)!=null},
c5:function(){var z=Object.create(null)
this.cc(z,"<non-identifier-key>",z)
this.da(z,"<non-identifier-key>")
return z},
$isig:1,
$isD:1,
$asD:null,
v:{
iB:function(a,b){return new H.W(0,null,null,null,null,null,0,[a,b])}}},
iC:{"^":"i:0;a",
$1:[function(a){return this.a.h(0,a)},null,null,2,0,null,21,"call"]},
iJ:{"^":"e;dY:a<,ap:b@,fJ:c<,fL:d<"},
iK:{"^":"c;a,$ti",
gi:function(a){return this.a.a},
gI:function(a){var z,y
z=this.a
y=new H.iL(z,z.r,null,null)
y.c=z.e
return y}},
iL:{"^":"e;a,b,c,d",
gw:function(){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.b(new P.ah(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
lQ:{"^":"i:0;a",
$1:function(a){return this.a(a)}},
lR:{"^":"i:10;a",
$2:function(a,b){return this.a(a,b)}},
lS:{"^":"i:11;a",
$1:function(a){return this.a(a)}},
jA:{"^":"e;a,b,c",
h:function(a,b){if(b!==0)H.A(P.b8(b,null,null))
return this.c}}}],["","",,H,{"^":"",
lK:function(a){var z=H.u(a?Object.keys(a):[],[null])
z.fixed$length=Array
return z}}],["","",,H,{"^":"",
m9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,H,{"^":"",cz:{"^":"d;",$iscz:1,$isfZ:1,"%":"ArrayBuffer"},bx:{"^":"d;",
fD:function(a,b,c,d){var z=P.I(b,0,c,d,null)
throw H.b(z)},
d1:function(a,b,c,d){if(b>>>0!==b||b>c)this.fD(a,b,c,d)},
$isbx:1,
$isa2:1,
"%":";ArrayBufferView;cA|dU|dW|bT|dV|dX|aj"},nu:{"^":"bx;",$isa2:1,"%":"DataView"},cA:{"^":"bx;",
gi:function(a){return a.length},
dB:function(a,b,c,d,e){var z,y,x
z=a.length
this.d1(a,b,z,"start")
this.d1(a,c,z,"end")
if(b>c)throw H.b(P.I(b,0,c,null,null))
y=c-b
x=d.length
if(x-e<y)throw H.b(new P.T("Not enough elements"))
if(e!==0||x!==y)d=d.subarray(e,e+y)
a.set(d,b)},
$isq:1,
$asq:I.O,
$iso:1,
$aso:I.O},bT:{"^":"dW;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.J(a,b))
return a[b]},
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.A(H.J(a,b))
a[b]=c},
a1:function(a,b,c,d,e){if(!!J.m(d).$isbT){this.dB(a,b,c,d,e)
return}this.cU(a,b,c,d,e)}},dU:{"^":"cA+z;",$asq:I.O,$aso:I.O,
$asa:function(){return[P.ae]},
$asc:function(){return[P.ae]},
$isa:1,
$isc:1},dW:{"^":"dU+dK;",$asq:I.O,$aso:I.O,
$asa:function(){return[P.ae]},
$asc:function(){return[P.ae]}},aj:{"^":"dX;",
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.A(H.J(a,b))
a[b]=c},
a1:function(a,b,c,d,e){if(!!J.m(d).$isaj){this.dB(a,b,c,d,e)
return}this.cU(a,b,c,d,e)},
$isa:1,
$asa:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]}},dV:{"^":"cA+z;",$asq:I.O,$aso:I.O,
$asa:function(){return[P.w]},
$asc:function(){return[P.w]},
$isa:1,
$isc:1},dX:{"^":"dV+dK;",$asq:I.O,$aso:I.O,
$asa:function(){return[P.w]},
$asc:function(){return[P.w]}},nv:{"^":"bT;",$isa2:1,$isa:1,
$asa:function(){return[P.ae]},
$isc:1,
$asc:function(){return[P.ae]},
"%":"Float32Array"},nw:{"^":"bT;",$isa2:1,$isa:1,
$asa:function(){return[P.ae]},
$isc:1,
$asc:function(){return[P.ae]},
"%":"Float64Array"},nx:{"^":"aj;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.J(a,b))
return a[b]},
$isa2:1,
$isa:1,
$asa:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
"%":"Int16Array"},ny:{"^":"aj;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.J(a,b))
return a[b]},
$isa2:1,
$isa:1,
$asa:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
"%":"Int32Array"},nz:{"^":"aj;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.J(a,b))
return a[b]},
$isa2:1,
$isa:1,
$asa:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
"%":"Int8Array"},nA:{"^":"aj;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.J(a,b))
return a[b]},
$isa2:1,
$isa:1,
$asa:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
"%":"Uint16Array"},nB:{"^":"aj;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.J(a,b))
return a[b]},
$isa2:1,
$isa:1,
$asa:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
"%":"Uint32Array"},nC:{"^":"aj;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.J(a,b))
return a[b]},
$isa2:1,
$isa:1,
$asa:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
"%":"CanvasPixelArray|Uint8ClampedArray"},nD:{"^":"aj;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.A(H.J(a,b))
return a[b]},
$isa2:1,
$isa:1,
$asa:function(){return[P.w]},
$isc:1,
$asc:function(){return[P.w]},
"%":";Uint8Array"}}],["","",,P,{"^":"",
jW:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.lv()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a6(new P.jY(z),1)).observe(y,{childList:true})
return new P.jX(z,y,x)}else if(self.setImmediate!=null)return P.lw()
return P.lx()},
oQ:[function(a){++init.globalState.f.b
self.scheduleImmediate(H.a6(new P.jZ(a),0))},"$1","lv",2,0,6],
oR:[function(a){++init.globalState.f.b
self.setImmediate(H.a6(new P.k_(a),0))},"$1","lw",2,0,6],
oS:[function(a){P.cI(C.m,a)},"$1","lx",2,0,6],
lk:function(a,b,c){if(H.aJ(a,{func:1,args:[P.b6,P.b6]}))return a.$2(b,c)
else return a.$1(b)},
f2:function(a,b){if(H.aJ(a,{func:1,args:[P.b6,P.b6]})){b.toString
return a}else{b.toString
return a}},
hu:function(a,b,c){var z
if(a==null)a=new P.bU()
z=$.t
if(z!==C.b)z.toString
z=new P.X(0,z,null,[c])
z.d0(a,b)
return z},
lm:function(){var z,y
for(;z=$.aT,z!=null;){$.bd=null
y=J.db(z)
$.aT=y
if(y==null)$.bc=null
z.gdM().$0()}},
ph:[function(){$.cV=!0
try{P.lm()}finally{$.bd=null
$.cV=!1
if($.aT!=null)$.$get$cL().$1(P.fe())}},"$0","fe",0,0,1],
f7:function(a){var z=new P.eB(a,null)
if($.aT==null){$.bc=z
$.aT=z
if(!$.cV)$.$get$cL().$1(P.fe())}else{$.bc.b=z
$.bc=z}},
lq:function(a){var z,y,x
z=$.aT
if(z==null){P.f7(a)
$.bd=$.bc
return}y=new P.eB(a,null)
x=$.bd
if(x==null){y.b=z
$.bd=y
$.aT=y}else{y.b=x.b
x.b=y
$.bd=y
if(y.b==null)$.bc=y}},
fp:function(a){var z=$.t
if(C.b===z){P.aI(null,null,C.b,a)
return}z.toString
P.aI(null,null,z,z.cg(a,!0))},
f6:function(a){var z,y,x,w
if(a==null)return
try{a.$0()}catch(x){z=H.G(x)
y=H.U(x)
w=$.t
w.toString
P.aU(null,null,w,z,y)}},
pf:[function(a){},"$1","ly",2,0,21,1],
ln:[function(a,b){var z=$.t
z.toString
P.aU(null,null,z,a,b)},function(a){return P.ln(a,null)},"$2","$1","lz",2,2,3,0],
pg:[function(){},"$0","fd",0,0,1],
eX:function(a,b,c){$.t.toString
a.at(b,c)},
jG:function(a,b){var z=$.t
if(z===C.b){z.toString
return P.cI(a,b)}return P.cI(a,z.cg(b,!0))},
cI:function(a,b){var z=C.c.bs(a.a,1000)
return H.jD(z<0?0:z,b)},
jT:function(){return $.t},
aU:function(a,b,c,d,e){var z={}
z.a=d
P.lq(new P.lp(z,e))},
f3:function(a,b,c,d){var z,y
y=$.t
if(y===c)return d.$0()
$.t=c
z=y
try{y=d.$0()
return y}finally{$.t=z}},
f5:function(a,b,c,d,e){var z,y
y=$.t
if(y===c)return d.$1(e)
$.t=c
z=y
try{y=d.$1(e)
return y}finally{$.t=z}},
f4:function(a,b,c,d,e,f){var z,y
y=$.t
if(y===c)return d.$2(e,f)
$.t=c
z=y
try{y=d.$2(e,f)
return y}finally{$.t=z}},
aI:function(a,b,c,d){var z=C.b!==c
if(z)d=c.cg(d,!(!z||!1))
P.f7(d)},
jY:{"^":"i:0;a",
$1:[function(a){var z,y;--init.globalState.f.b
z=this.a
y=z.a
z.a=null
y.$0()},null,null,2,0,null,5,"call"]},
jX:{"^":"i:12;a,b,c",
$1:function(a){var z,y;++init.globalState.f.b
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
jZ:{"^":"i:2;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
k_:{"^":"i:2;a",
$0:[function(){--init.globalState.f.b
this.a.$0()},null,null,0,0,null,"call"]},
k1:{"^":"eF;a,$ti"},
k2:{"^":"k5;aG:y@,a8:z@,bc:Q@,x,a,b,c,d,e,f,r,$ti",
fs:function(a){return(this.y&1)===a},
h7:function(){this.y^=1},
gfF:function(){return(this.y&2)!==0},
h1:function(){this.y|=4},
gfR:function(){return(this.y&4)!==0},
bl:[function(){},"$0","gbk",0,0,1],
bn:[function(){},"$0","gbm",0,0,1]},
cM:{"^":"e;a5:c<,$ti",
gaX:function(){return!1},
gaK:function(){return this.c<4},
fp:function(){var z=this.r
if(z!=null)return z
z=new P.X(0,$.t,null,[null])
this.r=z
return z},
aD:function(a){var z
a.saG(this.c&1)
z=this.e
this.e=a
a.sa8(null)
a.sbc(z)
if(z==null)this.d=a
else z.sa8(a)},
dv:function(a){var z,y
z=a.gbc()
y=a.ga8()
if(z==null)this.d=y
else z.sa8(y)
if(y==null)this.e=z
else y.sbc(z)
a.sbc(a)
a.sa8(a)},
h6:function(a,b,c,d){var z,y,x
if((this.c&4)!==0){if(c==null)c=P.fd()
z=new P.kb($.t,0,c,this.$ti)
z.dA()
return z}z=$.t
y=d?1:0
x=new P.k2(0,null,null,this,null,null,null,z,y,null,null,this.$ti)
x.cW(a,b,c,d,H.L(this,0))
x.Q=x
x.z=x
this.aD(x)
z=this.d
y=this.e
if(z==null?y==null:z===y)P.f6(this.a)
return x},
fN:function(a){if(a.ga8()===a)return
if(a.gfF())a.h1()
else{this.dv(a)
if((this.c&2)===0&&this.d==null)this.bR()}return},
fO:function(a){},
fP:function(a){},
bb:["eU",function(){if((this.c&4)!==0)return new P.T("Cannot add new events after calling close")
return new P.T("Cannot add new events while doing an addStream")}],
D:[function(a,b){if(!this.gaK())throw H.b(this.bb())
this.bq(b)},"$1","gha",2,0,function(){return H.bf(function(a){return{func:1,v:true,args:[a]}},this.$receiver,"cM")}],
hd:[function(a,b){if(!this.gaK())throw H.b(this.bb())
$.t.toString
this.br(a,b)},function(a){return this.hd(a,null)},"iB","$2","$1","ghc",2,2,3,0],
dQ:function(a){var z
if((this.c&4)!==0)return this.r
if(!this.gaK())throw H.b(this.bb())
this.c|=4
z=this.fp()
this.aM()
return z},
c2:function(a){var z,y,x,w
z=this.c
if((z&2)!==0)throw H.b(new P.T("Cannot fire new event. Controller is already firing an event"))
y=this.d
if(y==null)return
x=z&1
this.c=z^3
for(;y!=null;)if(y.fs(x)){y.saG(y.gaG()|2)
a.$1(y)
y.h7()
w=y.ga8()
if(y.gfR())this.dv(y)
y.saG(y.gaG()&4294967293)
y=w}else y=y.ga8()
this.c&=4294967293
if(this.d==null)this.bR()},
bR:function(){if((this.c&4)!==0&&this.r.a===0)this.r.bQ(null)
P.f6(this.b)}},
c3:{"^":"cM;a,b,c,d,e,f,r,$ti",
gaK:function(){return P.cM.prototype.gaK.call(this)===!0&&(this.c&2)===0},
bb:function(){if((this.c&2)!==0)return new P.T("Cannot fire new event. Controller is already firing an event")
return this.eU()},
bq:function(a){var z=this.d
if(z==null)return
if(z===this.e){this.c|=2
z.aE(0,a)
this.c&=4294967293
if(this.d==null)this.bR()
return}this.c2(new P.l4(this,a))},
br:function(a,b){if(this.d==null)return
this.c2(new P.l6(this,a,b))},
aM:function(){if(this.d!=null)this.c2(new P.l5(this))
else this.r.bQ(null)}},
l4:{"^":"i;a,b",
$1:function(a){a.aE(0,this.b)},
$S:function(){return H.bf(function(a){return{func:1,args:[[P.aG,a]]}},this.a,"c3")}},
l6:{"^":"i;a,b,c",
$1:function(a){a.at(this.b,this.c)},
$S:function(){return H.bf(function(a){return{func:1,args:[[P.aG,a]]}},this.a,"c3")}},
l5:{"^":"i;a",
$1:function(a){a.d_()},
$S:function(){return H.bf(function(a){return{func:1,args:[[P.aG,a]]}},this.a,"c3")}},
eE:{"^":"e;$ti",
hn:[function(a,b){if(a==null)a=new P.bU()
if(this.a.a!==0)throw H.b(new P.T("Future already completed"))
$.t.toString
this.a9(a,b)},function(a){return this.hn(a,null)},"cl","$2","$1","ghm",2,2,3,0]},
eC:{"^":"eE;a,$ti",
aP:function(a,b){var z=this.a
if(z.a!==0)throw H.b(new P.T("Future already completed"))
z.bQ(b)},
a9:function(a,b){this.a.d0(a,b)}},
eU:{"^":"eE;a,$ti",
aP:function(a,b){var z=this.a
if(z.a!==0)throw H.b(new P.T("Future already completed"))
z.be(b)},
a9:function(a,b){this.a.a9(a,b)}},
eL:{"^":"e;aa:a@,F:b>,c,dM:d<,e",
gak:function(){return this.b.b},
gdW:function(){return(this.c&1)!==0},
ghU:function(){return(this.c&2)!==0},
gdV:function(){return this.c===8},
ghV:function(){return this.e!=null},
hS:function(a){return this.b.b.cE(this.d,a)},
i7:function(a){if(this.c!==6)return!0
return this.b.b.cE(this.d,J.bi(a))},
dU:function(a){var z,y,x
z=this.e
y=J.l(a)
x=this.b.b
if(H.aJ(z,{func:1,args:[,,]}))return x.il(z,y.gV(a),a.gag())
else return x.cE(z,y.gV(a))},
hT:function(){return this.b.b.ei(this.d)}},
X:{"^":"e;a5:a<,ak:b<,av:c<,$ti",
gfE:function(){return this.a===2},
gc4:function(){return this.a>=4},
gfz:function(){return this.a===8},
fZ:function(a){this.a=2
this.c=a},
el:function(a,b){var z,y
z=$.t
if(z!==C.b){z.toString
if(b!=null)b=P.f2(b,z)}y=new P.X(0,$.t,null,[null])
this.aD(new P.eL(null,y,b==null?1:3,a,b))
return y},
cI:function(a){return this.el(a,null)},
eq:function(a){var z,y
z=$.t
y=new P.X(0,z,null,this.$ti)
if(z!==C.b)z.toString
this.aD(new P.eL(null,y,8,a,null))
return y},
h0:function(){this.a=1},
ff:function(){this.a=0},
gai:function(){return this.c},
gfd:function(){return this.c},
h2:function(a){this.a=4
this.c=a},
h_:function(a){this.a=8
this.c=a},
d2:function(a){this.a=a.ga5()
this.c=a.gav()},
aD:function(a){var z,y
z=this.a
if(z<=1){a.a=this.c
this.c=a}else{if(z===2){y=this.c
if(!y.gc4()){y.aD(a)
return}this.a=y.ga5()
this.c=y.gav()}z=this.b
z.toString
P.aI(null,null,z,new P.kj(this,a))}},
dt:function(a){var z,y,x,w,v
z={}
z.a=a
if(a==null)return
y=this.a
if(y<=1){x=this.c
this.c=a
if(x!=null){for(w=a;w.gaa()!=null;)w=w.gaa()
w.saa(x)}}else{if(y===2){v=this.c
if(!v.gc4()){v.dt(a)
return}this.a=v.ga5()
this.c=v.gav()}z.a=this.dw(a)
y=this.b
y.toString
P.aI(null,null,y,new P.kq(z,this))}},
au:function(){var z=this.c
this.c=null
return this.dw(z)},
dw:function(a){var z,y,x
for(z=a,y=null;z!=null;y=z,z=x){x=z.gaa()
z.saa(y)}return y},
be:function(a){var z,y
z=this.$ti
if(H.bH(a,"$isat",z,"$asat"))if(H.bH(a,"$isX",z,null))P.c1(a,this)
else P.eM(a,this)
else{y=this.au()
this.a=4
this.c=a
P.aR(this,y)}},
a9:[function(a,b){var z=this.au()
this.a=8
this.c=new P.bK(a,b)
P.aR(this,z)},function(a){return this.a9(a,null)},"ix","$2","$1","gd8",2,2,3,0,3,4],
bQ:function(a){var z
if(H.bH(a,"$isat",this.$ti,"$asat")){this.fc(a)
return}this.a=1
z=this.b
z.toString
P.aI(null,null,z,new P.kl(this,a))},
fc:function(a){var z
if(H.bH(a,"$isX",this.$ti,null)){if(a.a===8){this.a=1
z=this.b
z.toString
P.aI(null,null,z,new P.kp(this,a))}else P.c1(a,this)
return}P.eM(a,this)},
d0:function(a,b){var z
this.a=1
z=this.b
z.toString
P.aI(null,null,z,new P.kk(this,a,b))},
f7:function(a,b){this.a=4
this.c=a},
$isat:1,
v:{
eM:function(a,b){var z,y,x
b.h0()
try{a.el(new P.km(b),new P.kn(b))}catch(x){z=H.G(x)
y=H.U(x)
P.fp(new P.ko(b,z,y))}},
c1:function(a,b){var z
for(;a.gfE();)a=a.gfd()
if(a.gc4()){z=b.au()
b.d2(a)
P.aR(b,z)}else{z=b.gav()
b.fZ(a)
a.dt(z)}},
aR:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z={}
z.a=a
for(y=a;!0;){x={}
w=y.gfz()
if(b==null){if(w){v=z.a.gai()
y=z.a.gak()
u=J.bi(v)
t=v.gag()
y.toString
P.aU(null,null,y,u,t)}return}for(;b.gaa()!=null;b=s){s=b.gaa()
b.saa(null)
P.aR(z.a,b)}r=z.a.gav()
x.a=w
x.b=r
y=!w
if(!y||b.gdW()||b.gdV()){q=b.gak()
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
P.aU(null,null,y,u,t)
return}p=$.t
if(p==null?q!=null:p!==q)$.t=q
else p=null
if(b.gdV())new P.kt(z,x,w,b).$0()
else if(y){if(b.gdW())new P.ks(x,b,r).$0()}else if(b.ghU())new P.kr(z,x,b).$0()
if(p!=null)$.t=p
y=x.b
if(!!J.m(y).$isat){o=J.dc(b)
if(y.a>=4){b=o.au()
o.d2(y)
z.a=y
continue}else P.c1(y,o)
return}}o=J.dc(b)
b=o.au()
y=x.a
u=x.b
if(!y)o.h2(u)
else o.h_(u)
z.a=o
y=o}}}},
kj:{"^":"i:2;a,b",
$0:function(){P.aR(this.a,this.b)}},
kq:{"^":"i:2;a,b",
$0:function(){P.aR(this.b,this.a.a)}},
km:{"^":"i:0;a",
$1:[function(a){var z=this.a
z.ff()
z.be(a)},null,null,2,0,null,1,"call"]},
kn:{"^":"i:13;a",
$2:[function(a,b){this.a.a9(a,b)},function(a){return this.$2(a,null)},"$1",null,null,null,2,2,null,0,3,4,"call"]},
ko:{"^":"i:2;a,b,c",
$0:function(){this.a.a9(this.b,this.c)}},
kl:{"^":"i:2;a,b",
$0:function(){var z,y
z=this.a
y=z.au()
z.a=4
z.c=this.b
P.aR(z,y)}},
kp:{"^":"i:2;a,b",
$0:function(){P.c1(this.b,this.a)}},
kk:{"^":"i:2;a,b,c",
$0:function(){this.a.a9(this.b,this.c)}},
kt:{"^":"i:1;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t
z=null
try{z=this.d.hT()}catch(w){y=H.G(w)
x=H.U(w)
if(this.c){v=J.bi(this.a.a.gai())
u=y
u=v==null?u==null:v===u
v=u}else v=!1
u=this.b
if(v)u.b=this.a.a.gai()
else u.b=new P.bK(y,x)
u.a=!0
return}if(!!J.m(z).$isat){if(z instanceof P.X&&z.ga5()>=4){if(z.ga5()===8){v=this.b
v.b=z.gav()
v.a=!0}return}t=this.a.a
v=this.b
v.b=z.cI(new P.ku(t))
v.a=!1}}},
ku:{"^":"i:0;a",
$1:[function(a){return this.a},null,null,2,0,null,5,"call"]},
ks:{"^":"i:1;a,b,c",
$0:function(){var z,y,x,w
try{this.a.b=this.b.hS(this.c)}catch(x){z=H.G(x)
y=H.U(x)
w=this.a
w.b=new P.bK(z,y)
w.a=!0}}},
kr:{"^":"i:1;a,b,c",
$0:function(){var z,y,x,w,v,u,t,s
try{z=this.a.a.gai()
w=this.c
if(w.i7(z)===!0&&w.ghV()){v=this.b
v.b=w.dU(z)
v.a=!1}}catch(u){y=H.G(u)
x=H.U(u)
w=this.a
v=J.bi(w.a.gai())
t=y
s=this.b
if(v==null?t==null:v===t)s.b=w.a.gai()
else s.b=new P.bK(y,x)
s.a=!0}}},
eB:{"^":"e;dM:a<,R:b*"},
a4:{"^":"e;$ti",
aq:function(a,b){return new P.kK(b,this,[H.K(this,"a4",0),null])},
hO:function(a,b){return new P.kv(a,b,this,[H.K(this,"a4",0)])},
dU:function(a){return this.hO(a,null)},
gi:function(a){var z,y
z={}
y=new P.X(0,$.t,null,[P.w])
z.a=0
this.W(new P.jw(z),!0,new P.jx(z,y),y.gd8())
return y},
cK:function(a){var z,y,x
z=H.K(this,"a4",0)
y=H.u([],[z])
x=new P.X(0,$.t,null,[[P.a,z]])
this.W(new P.jy(this,y),!0,new P.jz(y,x),x.gd8())
return x}},
jw:{"^":"i:0;a",
$1:[function(a){++this.a.a},null,null,2,0,null,5,"call"]},
jx:{"^":"i:2;a,b",
$0:[function(){this.b.be(this.a.a)},null,null,0,0,null,"call"]},
jy:{"^":"i;a,b",
$1:[function(a){this.b.push(a)},null,null,2,0,null,10,"call"],
$S:function(){return H.bf(function(a){return{func:1,args:[a]}},this.a,"a4")}},
jz:{"^":"i:2;a,b",
$0:[function(){this.b.be(this.a)},null,null,0,0,null,"call"]},
ef:{"^":"e;$ti"},
eF:{"^":"kX;a,$ti",
gE:function(a){return(H.am(this.a)^892482866)>>>0},
C:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof P.eF))return!1
return b.a===this.a}},
k5:{"^":"aG;$ti",
c7:function(){return this.x.fN(this)},
bl:[function(){this.x.fO(this)},"$0","gbk",0,0,1],
bn:[function(){this.x.fP(this)},"$0","gbm",0,0,1]},
aG:{"^":"e;ak:d<,a5:e<,$ti",
b0:function(a,b){var z=this.e
if((z&8)!==0)return
this.e=(z+128|4)>>>0
if(z<128&&this.r!=null)this.r.dO()
if((z&4)===0&&(this.e&32)===0)this.dj(this.gbk())},
cv:function(a){return this.b0(a,null)},
cB:function(a){var z=this.e
if((z&8)!==0)return
if(z>=128){z-=128
this.e=z
if(z<128){if((z&64)!==0){z=this.r
z=!z.gH(z)}else z=!1
if(z)this.r.bG(this)
else{z=(this.e&4294967291)>>>0
this.e=z
if((z&32)===0)this.dj(this.gbm())}}}},
a_:function(a){var z=(this.e&4294967279)>>>0
this.e=z
if((z&8)===0)this.bS()
z=this.f
return z==null?$.$get$bq():z},
gaX:function(){return this.e>=128},
bS:function(){var z=(this.e|8)>>>0
this.e=z
if((z&64)!==0)this.r.dO()
if((this.e&32)===0)this.r=null
this.f=this.c7()},
aE:["eV",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.bq(b)
else this.bP(new P.k8(b,null,[H.K(this,"aG",0)]))}],
at:["eW",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.br(a,b)
else this.bP(new P.ka(a,b,null))}],
d_:function(){var z=this.e
if((z&8)!==0)return
z=(z|2)>>>0
this.e=z
if(z<32)this.aM()
else this.bP(C.v)},
bl:[function(){},"$0","gbk",0,0,1],
bn:[function(){},"$0","gbm",0,0,1],
c7:function(){return},
bP:function(a){var z,y
z=this.r
if(z==null){z=new P.kY(null,null,0,[H.K(this,"aG",0)])
this.r=z}z.D(0,a)
y=this.e
if((y&64)===0){y=(y|64)>>>0
this.e=y
if(y<128)this.r.bG(this)}},
bq:function(a){var z=this.e
this.e=(z|32)>>>0
this.d.cF(this.a,a)
this.e=(this.e&4294967263)>>>0
this.bU((z&4)!==0)},
br:function(a,b){var z,y
z=this.e
y=new P.k4(this,a,b)
if((z&1)!==0){this.e=(z|16)>>>0
this.bS()
z=this.f
if(!!J.m(z).$isat&&z!==$.$get$bq())z.eq(y)
else y.$0()}else{y.$0()
this.bU((z&4)!==0)}},
aM:function(){var z,y
z=new P.k3(this)
this.bS()
this.e=(this.e|16)>>>0
y=this.f
if(!!J.m(y).$isat&&y!==$.$get$bq())y.eq(z)
else z.$0()},
dj:function(a){var z=this.e
this.e=(z|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.bU((z&4)!==0)},
bU:function(a){var z,y
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
if(y)this.bl()
else this.bn()
this.e=(this.e&4294967263)>>>0}z=this.e
if((z&64)!==0&&z<128)this.r.bG(this)},
cW:function(a,b,c,d,e){var z,y
z=a==null?P.ly():a
y=this.d
y.toString
this.a=z
this.b=P.f2(b==null?P.lz():b,y)
this.c=c==null?P.fd():c}},
k4:{"^":"i:1;a,b,c",
$0:function(){var z,y,x,w,v,u
z=this.a
y=z.e
if((y&8)!==0&&(y&16)===0)return
z.e=(y|32)>>>0
y=z.b
x=H.aJ(y,{func:1,args:[P.e,P.bz]})
w=z.d
v=this.b
u=z.b
if(x)w.im(u,v,this.c)
else w.cF(u,v)
z.e=(z.e&4294967263)>>>0}},
k3:{"^":"i:1;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=(y|42)>>>0
z.d.cD(z.c)
z.e=(z.e&4294967263)>>>0}},
kX:{"^":"a4;$ti",
W:function(a,b,c,d){return this.a.h6(a,d,c,!0===b)},
aZ:function(a,b,c){return this.W(a,null,b,c)}},
eG:{"^":"e;R:a*"},
k8:{"^":"eG;b,a,$ti",
cw:function(a){a.bq(this.b)}},
ka:{"^":"eG;V:b>,ag:c<,a",
cw:function(a){a.br(this.b,this.c)}},
k9:{"^":"e;",
cw:function(a){a.aM()},
gR:function(a){return},
sR:function(a,b){throw H.b(new P.T("No events after a done."))}},
kM:{"^":"e;a5:a<",
bG:function(a){var z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.fp(new P.kN(this,a))
this.a=1},
dO:function(){if(this.a===1)this.a=3}},
kN:{"^":"i:2;a,b",
$0:function(){var z,y,x,w
z=this.a
y=z.a
z.a=0
if(y===3)return
x=z.b
w=J.db(x)
z.b=w
if(w==null)z.c=null
x.cw(this.b)}},
kY:{"^":"kM;b,c,a,$ti",
gH:function(a){return this.c==null},
D:function(a,b){var z=this.c
if(z==null){this.c=b
this.b=b}else{J.dh(z,b)
this.c=b}}},
kb:{"^":"e;ak:a<,a5:b<,c,$ti",
gaX:function(){return this.b>=4},
dA:function(){if((this.b&2)!==0)return
var z=this.a
z.toString
P.aI(null,null,z,this.gfY())
this.b=(this.b|2)>>>0},
b0:function(a,b){this.b+=4},
cv:function(a){return this.b0(a,null)},
cB:function(a){var z=this.b
if(z>=4){z-=4
this.b=z
if(z<4&&(z&1)===0)this.dA()}},
a_:function(a){return $.$get$bq()},
aM:[function(){var z=(this.b&4294967293)>>>0
this.b=z
if(z>=4)return
this.b=(z|1)>>>0
z=this.c
if(z!=null)this.a.cD(z)},"$0","gfY",0,0,1]},
bD:{"^":"a4;$ti",
W:function(a,b,c,d){return this.fi(a,d,c,!0===b)},
aZ:function(a,b,c){return this.W(a,null,b,c)},
fi:function(a,b,c,d){return P.ki(this,a,b,c,d,H.K(this,"bD",0),H.K(this,"bD",1))},
dk:function(a,b){b.aE(0,a)},
dl:function(a,b,c){c.at(a,b)},
$asa4:function(a,b){return[b]}},
eJ:{"^":"aG;x,y,a,b,c,d,e,f,r,$ti",
aE:function(a,b){if((this.e&2)!==0)return
this.eV(0,b)},
at:function(a,b){if((this.e&2)!==0)return
this.eW(a,b)},
bl:[function(){var z=this.y
if(z==null)return
z.cv(0)},"$0","gbk",0,0,1],
bn:[function(){var z=this.y
if(z==null)return
z.cB(0)},"$0","gbm",0,0,1],
c7:function(){var z=this.y
if(z!=null){this.y=null
return z.a_(0)}return},
iy:[function(a){this.x.dk(a,this)},"$1","gfu",2,0,function(){return H.bf(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"eJ")},10],
iA:[function(a,b){this.x.dl(a,b,this)},"$2","gfw",4,0,14,3,4],
iz:[function(){this.d_()},"$0","gfv",0,0,1],
f6:function(a,b,c,d,e,f,g){this.y=this.x.a.aZ(this.gfu(),this.gfv(),this.gfw())},
$asaG:function(a,b){return[b]},
v:{
ki:function(a,b,c,d,e,f,g){var z,y
z=$.t
y=e?1:0
y=new P.eJ(a,null,null,null,null,z,y,null,null,[f,g])
y.cW(b,c,d,e,g)
y.f6(a,b,c,d,e,f,g)
return y}}},
kK:{"^":"bD;b,a,$ti",
dk:function(a,b){var z,y,x,w
z=null
try{z=this.b.$1(a)}catch(w){y=H.G(w)
x=H.U(w)
P.eX(b,y,x)
return}b.aE(0,z)}},
kv:{"^":"bD;b,c,a,$ti",
dl:function(a,b,c){var z,y,x,w,v
z=!0
if(z===!0)try{P.lk(this.b,a,b)}catch(w){y=H.G(w)
x=H.U(w)
v=y
if(v==null?a==null:v===a)c.at(a,b)
else P.eX(c,y,x)
return}else c.at(a,b)},
$asbD:function(a){return[a,a]},
$asa4:null},
bK:{"^":"e;V:a>,ag:b<",
k:function(a){return H.f(this.a)},
$isN:1},
lb:{"^":"e;"},
lp:{"^":"i:2;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bU()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.b(z)
x=H.b(z)
x.stack=J.E(y)
throw x}},
kP:{"^":"lb;",
cD:function(a){var z,y,x,w
try{if(C.b===$.t){x=a.$0()
return x}x=P.f3(null,null,this,a)
return x}catch(w){z=H.G(w)
y=H.U(w)
x=P.aU(null,null,this,z,y)
return x}},
cF:function(a,b){var z,y,x,w
try{if(C.b===$.t){x=a.$1(b)
return x}x=P.f5(null,null,this,a,b)
return x}catch(w){z=H.G(w)
y=H.U(w)
x=P.aU(null,null,this,z,y)
return x}},
im:function(a,b,c){var z,y,x,w
try{if(C.b===$.t){x=a.$2(b,c)
return x}x=P.f4(null,null,this,a,b,c)
return x}catch(w){z=H.G(w)
y=H.U(w)
x=P.aU(null,null,this,z,y)
return x}},
cg:function(a,b){if(b)return new P.kQ(this,a)
else return new P.kR(this,a)},
hi:function(a,b){return new P.kS(this,a)},
h:function(a,b){return},
ei:function(a){if($.t===C.b)return a.$0()
return P.f3(null,null,this,a)},
cE:function(a,b){if($.t===C.b)return a.$1(b)
return P.f5(null,null,this,a,b)},
il:function(a,b,c){if($.t===C.b)return a.$2(b,c)
return P.f4(null,null,this,a,b,c)}},
kQ:{"^":"i:2;a,b",
$0:function(){return this.a.cD(this.b)}},
kR:{"^":"i:2;a,b",
$0:function(){return this.a.ei(this.b)}},
kS:{"^":"i:0;a,b",
$1:[function(a){return this.a.cF(this.b,a)},null,null,2,0,null,19,"call"]}}],["","",,P,{"^":"",
iM:function(a,b){return new H.W(0,null,null,null,null,null,0,[a,b])},
b4:function(){return new H.W(0,null,null,null,null,null,0,[null,null])},
av:function(a){return H.lL(a,new H.W(0,null,null,null,null,null,0,[null,null]))},
ip:function(a,b,c){var z,y
if(P.cW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$be()
y.push(a)
try{P.ll(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.eg(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bR:function(a,b,c){var z,y,x
if(P.cW(a))return b+"..."+c
z=new P.aQ(b)
y=$.$get$be()
y.push(a)
try{x=z
x.sl(P.eg(x.gl(),a,", "))}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.sl(y.gl()+c)
y=z.gl()
return y.charCodeAt(0)==0?y:y},
cW:function(a){var z,y
for(z=0;y=$.$get$be(),z<y.length;++z)if(a===y[z])return!0
return!1},
ll:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gI(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.u())return
w=H.f(z.gw())
b.push(w)
y+=w.length+2;++x}if(!z.u()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gw();++x
if(!z.u()){if(x<=4){b.push(H.f(t))
return}v=H.f(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gw();++x
for(;z.u();t=s,s=r){r=z.gw();++x
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
ab:function(a,b,c,d){return new P.kD(0,null,null,null,null,null,0,[d])},
dS:function(a,b){var z,y,x
z=P.ab(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.C)(a),++x)z.D(0,a[x])
return z},
cy:function(a){var z,y,x
z={}
if(P.cW(a))return"{...}"
y=new P.aQ("")
try{$.$get$be().push(a)
x=y
x.sl(x.gl()+"{")
z.a=!0
a.P(0,new P.iQ(z,y))
z=y
z.sl(z.gl()+"}")}finally{z=$.$get$be()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gl()
return z.charCodeAt(0)==0?z:z},
eS:{"^":"W;a,b,c,d,e,f,r,$ti",
aV:function(a){return H.m8(a)&0x3ffffff},
aW:function(a,b){var z,y,x
if(a==null)return-1
z=a.length
for(y=0;y<z;++y){x=a[y].gdY()
if(x==null?b==null:x===b)return y}return-1},
v:{
bb:function(a,b){return new P.eS(0,null,null,null,null,null,0,[a,b])}}},
kD:{"^":"kw;a,b,c,d,e,f,r,$ti",
gI:function(a){var z=new P.eR(this,this.r,null,null)
z.c=this.e
return z},
gi:function(a){return this.a},
M:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.fh(b)},
fh:function(a){var z=this.d
if(z==null)return!1
return this.bi(z[this.bf(a)],a)>=0},
e3:function(a){var z
if(!(typeof a==="string"&&a!=="__proto__"))z=typeof a==="number"&&(a&0x3ffffff)===a
else z=!0
if(z)return this.M(0,a)?a:null
else return this.fH(a)},
fH:function(a){var z,y,x
z=this.d
if(z==null)return
y=z[this.bf(a)]
x=this.bi(y,a)
if(x<0)return
return J.af(y,x).gc_()},
D:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.b=y
z=y}return this.d3(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.c=y
x=y}return this.d3(x,b)}else return this.a2(0,b)},
a2:function(a,b){var z,y,x
z=this.d
if(z==null){z=P.kF()
this.d=z}y=this.bf(b)
x=z[y]
if(x==null)z[y]=[this.bV(b)]
else{if(this.bi(x,b)>=0)return!1
x.push(this.bV(b))}return!0},
L:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.d6(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.d6(this.c,b)
else return this.fQ(0,b)},
fQ:function(a,b){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.bf(b)]
x=this.bi(y,b)
if(x<0)return!1
this.d7(y.splice(x,1)[0])
return!0},
am:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
d3:function(a,b){if(a[b]!=null)return!1
a[b]=this.bV(b)
return!0},
d6:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.d7(z)
delete a[b]
return!0},
bV:function(a){var z,y
z=new P.kE(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
d7:function(a){var z,y
z=a.gd5()
y=a.gd4()
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.sd5(z);--this.a
this.r=this.r+1&67108863},
bf:function(a){return J.Y(a)&0x3ffffff},
bi:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.V(a[y].gc_(),b))return y
return-1},
$isc:1,
$asc:null,
v:{
kF:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
kE:{"^":"e;c_:a<,d4:b<,d5:c@"},
eR:{"^":"e;a,b,c,d",
gw:function(){return this.d},
u:function(){var z=this.a
if(this.b!==z.r)throw H.b(new P.ah(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.gc_()
this.c=this.c.gd4()
return!0}}}},
kw:{"^":"jn;$ti"},
cu:{"^":"iY;$ti"},
iY:{"^":"e+z;",$asa:null,$asc:null,$isa:1,$isc:1},
z:{"^":"e;$ti",
gI:function(a){return new H.cv(a,this.gi(a),0,null)},
A:function(a,b){return this.h(a,b)},
aq:function(a,b){return new H.bw(a,b,[H.K(a,"z",0),null])},
D:function(a,b){var z=this.gi(a)
this.si(a,z+1)
this.j(a,z,b)},
a1:["cU",function(a,b,c,d,e){var z,y,x,w,v
P.cE(b,c,this.gi(a),null,null,null)
z=c-b
if(z===0)return
if(H.bH(d,"$isa",[H.K(a,"z",0)],"$asa")){y=e
x=d}else{x=new H.cG(d,e,null,[H.K(d,"z",0)]).b2(0,!1)
y=0}w=J.B(x)
if(y+z>w.gi(x))throw H.b(H.dO())
if(y<b)for(v=z-1;v>=0;--v)this.j(a,b+v,w.h(x,y+v))
else for(v=0;v<z;++v)this.j(a,b+v,w.h(x,y+v))}],
aA:function(a,b){var z=this.h(a,b)
this.a1(a,b,this.gi(a)-1,a,b+1)
this.si(a,this.gi(a)-1)
return z},
k:function(a){return P.bR(a,"[","]")},
$isa:1,
$asa:null,
$isc:1,
$asc:null},
l9:{"^":"e;",
j:function(a,b,c){throw H.b(new P.j("Cannot modify unmodifiable map"))},
$isD:1,
$asD:null},
iO:{"^":"e;",
h:function(a,b){return this.a.h(0,b)},
j:function(a,b,c){this.a.j(0,b,c)},
P:function(a,b){this.a.P(0,b)},
gH:function(a){var z=this.a
return z.gH(z)},
gi:function(a){var z=this.a
return z.gi(z)},
k:function(a){return this.a.k(0)},
$isD:1,
$asD:null},
ez:{"^":"iO+l9;$ti",$asD:null,$isD:1},
iQ:{"^":"i:4;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.l+=", "
z.a=!1
z=this.b
y=z.l+=H.f(a)
z.l=y+": "
z.l+=H.f(b)}},
iN:{"^":"b5;a,b,c,d,$ti",
gI:function(a){return new P.kG(this,this.c,this.d,this.b,null)},
gH:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
A:function(a,b){var z,y,x,w
z=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=z)H.A(P.F(b,this,"index",null,z))
y=this.a
x=y.length
w=(this.b+b&x-1)>>>0
if(w<0||w>=x)return H.h(y,w)
return y[w]},
D:function(a,b){this.a2(0,b)},
am:function(a){var z,y,x,w,v
z=this.b
y=this.c
if(z!==y){for(x=this.a,w=x.length,v=w-1;z!==y;z=(z+1&v)>>>0){if(z<0||z>=w)return H.h(x,z)
x[z]=null}this.c=0
this.b=0;++this.d}},
k:function(a){return P.bR(this,"{","}")},
eh:function(){var z,y,x,w
z=this.b
if(z===this.c)throw H.b(H.co());++this.d
y=this.a
x=y.length
if(z>=x)return H.h(y,z)
w=y[z]
y[z]=null
this.b=(z+1&x-1)>>>0
return w},
a2:function(a,b){var z,y,x
z=this.a
y=this.c
x=z.length
if(y<0||y>=x)return H.h(z,y)
z[y]=b
x=(y+1&x-1)>>>0
this.c=x
if(this.b===x)this.di();++this.d},
di:function(){var z,y,x,w
z=new Array(this.a.length*2)
z.fixed$length=Array
y=H.u(z,this.$ti)
z=this.a
x=this.b
w=z.length-x
C.a.a1(y,0,w,z,x)
C.a.a1(y,w,w+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=y},
f1:function(a,b){var z=new Array(8)
z.fixed$length=Array
this.a=H.u(z,[b])},
$asc:null,
v:{
cw:function(a,b){var z=new P.iN(null,0,0,0,[b])
z.f1(a,b)
return z}}},
kG:{"^":"e;a,b,c,d,e",
gw:function(){return this.e},
u:function(){var z,y,x
z=this.a
if(this.c!==z.d)H.A(new P.ah(z))
y=this.d
if(y===this.b){this.e=null
return!1}z=z.a
x=z.length
if(y>=x)return H.h(z,y)
this.e=z[y]
this.d=(y+1&x-1)>>>0
return!0}},
jo:{"^":"e;$ti",
O:function(a,b){var z
for(z=J.P(b);z.u();)this.D(0,z.gw())},
aq:function(a,b){return new H.dz(this,b,[H.L(this,0),null])},
k:function(a){return P.bR(this,"{","}")},
$isc:1,
$asc:null},
jn:{"^":"jo;$ti"}}],["","",,P,{"^":"",
c4:function(a){var z
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.ky(a,Object.create(null),null)
for(z=0;z<a.length;++z)a[z]=P.c4(a[z])
return a},
lo:function(a,b){var z,y,x,w
if(typeof a!=="string")throw H.b(H.M(a))
z=null
try{z=JSON.parse(a)}catch(x){y=H.G(x)
w=String(y)
throw H.b(new P.cm(w,null,null))}w=P.c4(z)
return w},
pe:[function(a){return a.iH()},"$1","lG",2,0,0,7],
ky:{"^":"e;a,b,c",
h:function(a,b){var z,y
z=this.b
if(z==null)return this.c.h(0,b)
else if(typeof b!=="string")return
else{y=z[b]
return typeof y=="undefined"?this.fM(b):y}},
gi:function(a){var z
if(this.b==null){z=this.c
z=z.gi(z)}else z=this.bg().length
return z},
gH:function(a){var z
if(this.b==null){z=this.c
z=z.gi(z)}else z=this.bg().length
return z===0},
j:function(a,b,c){var z,y
if(this.b==null)this.c.j(0,b,c)
else if(this.T(0,b)){z=this.b
z[b]=c
y=this.a
if(y==null?z!=null:y!==z)y[b]=null}else this.h9().j(0,b,c)},
T:function(a,b){if(this.b==null)return this.c.T(0,b)
if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
P:function(a,b){var z,y,x,w
if(this.b==null)return this.c.P(0,b)
z=this.bg()
for(y=0;y<z.length;++y){x=z[y]
w=this.b[x]
if(typeof w=="undefined"){w=P.c4(this.a[x])
this.b[x]=w}b.$2(x,w)
if(z!==this.c)throw H.b(new P.ah(this))}},
k:function(a){return P.cy(this)},
bg:function(){var z=this.c
if(z==null){z=Object.keys(this.a)
this.c=z}return z},
h9:function(){var z,y,x,w,v
if(this.b==null)return this.c
z=P.iM(P.n,null)
y=this.bg()
for(x=0;w=y.length,x<w;++x){v=y[x]
z.j(0,v,this.h(0,v))}if(w===0)y.push(null)
else C.a.si(y,0)
this.b=null
this.a=null
this.c=z
return z},
fM:function(a){var z
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
z=P.c4(this.a[a])
return this.b[a]=z},
$isD:1,
$asD:function(){return[P.n,null]}},
h8:{"^":"e;"},
ds:{"^":"e;"},
cs:{"^":"N;a,b",
k:function(a){if(this.b!=null)return"Converting object to an encodable object failed."
else return"Converting object did not return an encodable object."}},
iG:{"^":"cs;a,b",
k:function(a){return"Cyclic error in JSON stringify"}},
iF:{"^":"h8;a,b",
ht:function(a,b){var z=P.lo(a,this.ghv().a)
return z},
hs:function(a){return this.ht(a,null)},
hG:function(a,b){var z=this.ghH()
z=P.kA(a,z.b,z.a)
return z},
hF:function(a){return this.hG(a,null)},
ghH:function(){return C.G},
ghv:function(){return C.F}},
iI:{"^":"ds;dZ:a<,b"},
iH:{"^":"ds;a"},
kB:{"^":"e;",
es:function(a){var z,y,x,w,v,u,t
z=J.B(a)
y=z.gi(a)
if(typeof y!=="number")return H.v(y)
x=this.c
w=0
v=0
for(;v<y;++v){u=z.ck(a,v)
if(u>92)continue
if(u<32){if(v>w)x.l+=z.ah(a,w,v)
w=v+1
x.l+=H.Z(92)
switch(u){case 8:x.l+=H.Z(98)
break
case 9:x.l+=H.Z(116)
break
case 10:x.l+=H.Z(110)
break
case 12:x.l+=H.Z(102)
break
case 13:x.l+=H.Z(114)
break
default:x.l+=H.Z(117)
x.l+=H.Z(48)
x.l+=H.Z(48)
t=u>>>4&15
x.l+=H.Z(t<10?48+t:87+t)
t=u&15
x.l+=H.Z(t<10?48+t:87+t)
break}}else if(u===34||u===92){if(v>w)x.l+=z.ah(a,w,v)
w=v+1
x.l+=H.Z(92)
x.l+=H.Z(u)}}if(w===0)x.l+=H.f(a)
else if(w<y)x.l+=z.ah(a,w,y)},
bT:function(a){var z,y,x,w
for(z=this.a,y=z.length,x=0;x<y;++x){w=z[x]
if(a==null?w==null:a===w)throw H.b(new P.iG(a,null))}z.push(a)},
bE:function(a){var z,y,x,w
if(this.er(a))return
this.bT(a)
try{z=this.b.$1(a)
if(!this.er(z))throw H.b(new P.cs(a,null))
x=this.a
if(0>=x.length)return H.h(x,-1)
x.pop()}catch(w){y=H.G(w)
throw H.b(new P.cs(a,y))}},
er:function(a){var z,y
if(typeof a==="number"){if(!isFinite(a))return!1
this.c.l+=C.e.k(a)
return!0}else if(a===!0){this.c.l+="true"
return!0}else if(a===!1){this.c.l+="false"
return!0}else if(a==null){this.c.l+="null"
return!0}else if(typeof a==="string"){z=this.c
z.l+='"'
this.es(a)
z.l+='"'
return!0}else{z=J.m(a)
if(!!z.$isa){this.bT(a)
this.it(a)
z=this.a
if(0>=z.length)return H.h(z,-1)
z.pop()
return!0}else if(!!z.$isD){this.bT(a)
y=this.iu(a)
z=this.a
if(0>=z.length)return H.h(z,-1)
z.pop()
return y}else return!1}},
it:function(a){var z,y,x
z=this.c
z.l+="["
y=J.B(a)
if(y.gi(a)>0){this.bE(y.h(a,0))
for(x=1;x<y.gi(a);++x){z.l+=","
this.bE(y.h(a,x))}}z.l+="]"},
iu:function(a){var z,y,x,w,v,u,t
z={}
y=J.B(a)
if(y.gH(a)){this.c.l+="{}"
return!0}x=y.gi(a)
if(typeof x!=="number")return x.bF()
x*=2
w=new Array(x)
z.a=0
z.b=!0
y.P(a,new P.kC(z,w))
if(!z.b)return!1
y=this.c
y.l+="{"
for(v='"',u=0;u<x;u+=2,v=',"'){y.l+=v
this.es(w[u])
y.l+='":'
t=u+1
if(t>=x)return H.h(w,t)
this.bE(w[t])}y.l+="}"
return!0}},
kC:{"^":"i:4;a,b",
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
kz:{"^":"kB;c,a,b",v:{
kA:function(a,b,c){var z,y,x
z=new P.aQ("")
y=new P.kz(z,[],P.lG())
y.bE(a)
x=z.l
return x.charCodeAt(0)==0?x:x}}}}],["","",,P,{"^":"",
bp:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.E(a)
if(typeof a==="string")return JSON.stringify(a)
return P.hr(a)},
hr:function(a){var z=J.m(a)
if(!!z.$isi)return z.k(a)
return H.bV(a)},
bP:function(a){return new P.kh(a)},
aP:function(a,b,c){var z,y
z=H.u([],[c])
for(y=J.P(a);y.u();)z.push(y.gw())
return z},
m7:function(a,b){var z,y
z=C.d.en(a)
y=H.e7(z,null,P.lI())
if(y!=null)return y
y=H.jg(z,P.lH())
if(y!=null)return y
throw H.b(new P.cm(a,null,null))},
pm:[function(a){return},"$1","lI",2,0,22],
pl:[function(a){return},"$1","lH",2,0,23],
bI:function(a){H.m9(H.f(a))},
iV:{"^":"i:15;a,b",
$2:function(a,b){var z,y,x
z=this.b
y=this.a
z.l+=y.a
x=z.l+=H.f(a.gfI())
z.l=x+": "
z.l+=H.f(P.bp(b))
y.a=", "}},
cX:{"^":"e;"},
"+bool":0,
ar:{"^":"e;a,b",
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.ar))return!1
return this.a===b.a&&this.b===b.b},
gE:function(a){var z=this.a
return(z^C.e.cd(z,30))&1073741823},
k:function(a){var z,y,x,w,v,u,t
z=P.hh(H.jf(this))
y=P.bo(H.jd(this))
x=P.bo(H.j9(this))
w=P.bo(H.ja(this))
v=P.bo(H.jc(this))
u=P.bo(H.je(this))
t=P.hi(H.jb(this))
if(this.b)return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t+"Z"
else return z+"-"+y+"-"+x+" "+w+":"+v+":"+u+"."+t},
D:function(a,b){return P.hg(C.e.n(this.a,b.giD()),this.b)},
gi8:function(){return this.a},
bN:function(a,b){var z
if(!(Math.abs(this.a)>864e13))z=!1
else z=!0
if(z)throw H.b(P.b_(this.gi8()))},
v:{
hg:function(a,b){var z=new P.ar(a,b)
z.bN(a,b)
return z},
hh:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+H.f(z)
if(z>=10)return y+"00"+H.f(z)
return y+"000"+H.f(z)},
hi:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bo:function(a){if(a>=10)return""+a
return"0"+a}}},
ae:{"^":"bg;"},
"+double":0,
b1:{"^":"e;bh:a<",
n:function(a,b){return new P.b1(this.a+b.gbh())},
N:function(a,b){return new P.b1(this.a-b.gbh())},
bM:function(a,b){if(b===0)throw H.b(new P.hA())
return new P.b1(C.c.bM(this.a,b))},
a7:function(a,b){return C.c.a7(this.a,b.gbh())},
b9:function(a,b){return C.c.b9(this.a,b.gbh())},
C:function(a,b){if(b==null)return!1
if(!(b instanceof P.b1))return!1
return this.a===b.a},
gE:function(a){return this.a&0x1FFFFFFF},
k:function(a){var z,y,x,w,v
z=new P.hp()
y=this.a
if(y<0)return"-"+new P.b1(0-y).k(0)
x=z.$1(C.c.bs(y,6e7)%60)
w=z.$1(C.c.bs(y,1e6)%60)
v=new P.ho().$1(y%1e6)
return""+C.c.bs(y,36e8)+":"+H.f(x)+":"+H.f(w)+"."+H.f(v)}},
ho:{"^":"i:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
hp:{"^":"i:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
N:{"^":"e;",
gag:function(){return H.U(this.$thrownJsError)}},
bU:{"^":"N;",
k:function(a){return"Throw of null."}},
ao:{"^":"N;a,b,c,d",
gc1:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc0:function(){return""},
k:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+z+")":""
z=this.d
x=z==null?"":": "+H.f(z)
w=this.gc1()+y+x
if(!this.a)return w
v=this.gc0()
u=P.bp(this.b)
return w+v+": "+H.f(u)},
v:{
b_:function(a){return new P.ao(!1,null,null,a)},
dj:function(a,b,c){return new P.ao(!0,a,b,c)}}},
e9:{"^":"ao;e,f,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.f(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.f(z)
else if(x>z)y=": Not in range "+H.f(z)+".."+H.f(x)+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+H.f(z)}return y},
v:{
b8:function(a,b,c){return new P.e9(null,null,!0,a,b,"Value not in range")},
I:function(a,b,c,d,e){return new P.e9(b,c,!0,a,d,"Invalid value")},
cE:function(a,b,c,d,e,f){if(0>a||a>c)throw H.b(P.I(a,0,c,"start",f))
if(a>b||b>c)throw H.b(P.I(b,a,c,"end",f))
return b}}},
hy:{"^":"ao;e,i:f>,a,b,c,d",
gc1:function(){return"RangeError"},
gc0:function(){if(J.bh(this.b,0))return": index must not be negative"
var z=this.f
if(z===0)return": no indices are valid"
return": index should be less than "+H.f(z)},
v:{
F:function(a,b,c,d,e){var z=e!=null?e:J.ag(b)
return new P.hy(b,z,!0,a,c,"Index out of range")}}},
iU:{"^":"N;a,b,c,d,e",
k:function(a){var z,y,x,w,v,u,t,s
z={}
y=new P.aQ("")
z.a=""
for(x=this.c,w=x.length,v=0;v<w;++v){u=x[v]
y.l+=z.a
y.l+=H.f(P.bp(u))
z.a=", "}this.d.P(0,new P.iV(z,y))
t=P.bp(this.a)
s=y.k(0)
x="NoSuchMethodError: method not found: '"+H.f(this.b.a)+"'\nReceiver: "+H.f(t)+"\nArguments: ["+s+"]"
return x},
v:{
dY:function(a,b,c,d,e){return new P.iU(a,b,c,d,e)}}},
j:{"^":"N;a",
k:function(a){return"Unsupported operation: "+this.a}},
bB:{"^":"N;a",
k:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.f(z):"UnimplementedError"}},
T:{"^":"N;a",
k:function(a){return"Bad state: "+this.a}},
ah:{"^":"N;a",
k:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.bp(z))+"."}},
iZ:{"^":"e;",
k:function(a){return"Out of Memory"},
gag:function(){return},
$isN:1},
ee:{"^":"e;",
k:function(a){return"Stack Overflow"},
gag:function(){return},
$isN:1},
hf:{"^":"N;a",
k:function(a){var z=this.a
return z==null?"Reading static variable during its initialization":"Reading static variable '"+H.f(z)+"' during its initialization"}},
kh:{"^":"e;a",
k:function(a){var z=this.a
if(z==null)return"Exception"
return"Exception: "+H.f(z)},
$isbO:1},
cm:{"^":"e;a,b,bA:c>",
k:function(a){var z,y,x
z=this.a
y=""!==z?"FormatException: "+z:"FormatException"
x=this.b
if(typeof x!=="string")return y
if(x.length>78)x=C.d.ah(x,0,75)+"..."
return y+"\n"+x},
$isbO:1},
hA:{"^":"e;",
k:function(a){return"IntegerDivisionByZeroException"},
$isbO:1},
hs:{"^":"e;a,dq",
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var z,y
z=this.dq
if(typeof z!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.A(P.dj(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return z.get(b)}y=H.cD(b,"expando$values")
return y==null?null:H.cD(y,z)},
j:function(a,b,c){var z,y
z=this.dq
if(typeof z!=="string")z.set(b,c)
else{y=H.cD(b,"expando$values")
if(y==null){y=new P.e()
H.e8(b,"expando$values",y)}H.e8(y,z,c)}}},
w:{"^":"bg;"},
"+int":0,
a1:{"^":"e;$ti",
aq:function(a,b){return H.bS(this,b,H.K(this,"a1",0),null)},
cN:["eP",function(a,b){return new H.eA(this,b,[H.K(this,"a1",0)])}],
b2:function(a,b){return P.aP(this,!0,H.K(this,"a1",0))},
cK:function(a){return this.b2(a,!0)},
gi:function(a){var z,y
z=this.gI(this)
for(y=0;z.u();)++y
return y},
gas:function(a){var z,y
z=this.gI(this)
if(!z.u())throw H.b(H.co())
y=z.gw()
if(z.u())throw H.b(H.iq())
return y},
A:function(a,b){var z,y,x
if(b<0)H.A(P.I(b,0,null,"index",null))
for(z=this.gI(this),y=0;z.u();){x=z.gw()
if(b===y)return x;++y}throw H.b(P.F(b,this,"index",null,y))},
k:function(a){return P.ip(this,"(",")")}},
dP:{"^":"e;"},
a:{"^":"e;$ti",$asa:null,$isc:1,$asc:null},
"+List":0,
D:{"^":"e;$ti",$asD:null},
b6:{"^":"e;",
gE:function(a){return P.e.prototype.gE.call(this,this)},
k:function(a){return"null"}},
"+Null":0,
bg:{"^":"e;"},
"+num":0,
e:{"^":";",
C:function(a,b){return this===b},
gE:function(a){return H.am(this)},
k:["eT",function(a){return H.bV(this)}],
cu:function(a,b){throw H.b(P.dY(this,b.ge4(),b.ged(),b.ge5(),null))},
toString:function(){return this.k(this)}},
bz:{"^":"e;"},
n:{"^":"e;"},
"+String":0,
aQ:{"^":"e;l@",
gi:function(a){return this.l.length},
k:function(a){var z=this.l
return z.charCodeAt(0)==0?z:z},
v:{
eg:function(a,b,c){var z=J.P(b)
if(!z.u())return a
if(c.length===0){do a+=H.f(z.gw())
while(z.u())}else{a+=H.f(z.gw())
for(;z.u();)a=a+c+H.f(z.gw())}return a}}},
bA:{"^":"e;"}}],["","",,W,{"^":"",
he:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(b,c){return c.toUpperCase()})},
hq:function(a,b,c){var z,y
z=document.body
y=(z&&C.l).U(z,a,b,c)
y.toString
z=new H.eA(new W.a5(y),new W.lB(),[W.p])
return z.gas(z)},
b2:function(a){var z,y,x,w
z="element tag unavailable"
try{y=J.l(a)
x=y.gek(a)
if(typeof x==="string")z=y.gek(a)}catch(w){H.G(w)}return z},
aH:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eP:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
eY:function(a){var z
if(a==null)return
if("postMessage" in a){z=W.k7(a)
if(!!J.m(z).$isr)return z
return}else return a},
lg:function(a){var z
if(!!J.m(a).$isdy)return a
z=new P.cK([],[],!1)
z.c=!0
return z.a6(a)},
f9:function(a){var z=$.t
if(z===C.b)return a
return z.hi(a,!0)},
x:{"^":"as;","%":"HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLabelElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMenuItemElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
mh:{"^":"x;by:href}",
k:function(a){return String(a)},
$isd:1,
"%":"HTMLAnchorElement"},
mi:{"^":"r;",
a_:function(a){return a.cancel()},
"%":"Animation"},
mk:{"^":"x;by:href}",
k:function(a){return String(a)},
$isd:1,
"%":"HTMLAreaElement"},
ap:{"^":"d;",$ise:1,"%":"AudioTrack"},
mm:{"^":"dF;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.ap]},
$isc:1,
$asc:function(){return[W.ap]},
$isq:1,
$asq:function(){return[W.ap]},
$iso:1,
$aso:function(){return[W.ap]},
"%":"AudioTrackList"},
dC:{"^":"r+z;",
$asa:function(){return[W.ap]},
$asc:function(){return[W.ap]},
$isa:1,
$isc:1},
dF:{"^":"dC+H;",
$asa:function(){return[W.ap]},
$asc:function(){return[W.ap]},
$isa:1,
$isc:1},
mn:{"^":"x;by:href}","%":"HTMLBaseElement"},
bl:{"^":"d;",$isbl:1,"%":";Blob"},
fX:{"^":"d;","%":"Response;Body"},
cf:{"^":"x;",$iscf:1,$isr:1,$isd:1,"%":"HTMLBodyElement"},
mo:{"^":"x;J:name=,G:value=","%":"HTMLButtonElement"},
mp:{"^":"x;q:height=,m:width=",
ex:function(a,b,c){return a.getContext(b)},
ew:function(a,b){return this.ex(a,b,null)},
"%":"HTMLCanvasElement"},
mq:{"^":"d;ao:fillStyle},ay:font},ey:globalAlpha},i5:lineJoin},cr:lineWidth},bK:strokeStyle},cG:textAlign},cH:textBaseline}",
ax:function(a){return a.beginPath()},
hk:function(a,b,c,d,e){return a.clearRect(b,c,d,e)},
dS:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
cs:function(a,b){return a.measureText(b)},
X:function(a){return a.restore()},
S:function(a){return a.save()},
iw:function(a,b){return a.stroke(b)},
bJ:function(a){return a.stroke()},
ir:function(a,b,c,d,e,f,g){return a.transform(b,c,d,e,f,g)},
dL:function(a,b,c,d,e,f,g){return a.bezierCurveTo(b,c,d,e,f,g)},
cj:function(a){return a.closePath()},
B:function(a,b,c){return a.lineTo(b,c)},
b_:function(a,b,c){return a.moveTo(b,c)},
K:function(a,b,c,d,e){return a.quadraticCurveTo(b,c,d,e)},
hK:function(a,b,c,d,e){a.fillText(b,c,d)},
cp:function(a,b,c,d){return this.hK(a,b,c,d,null)},
hJ:function(a,b){a.fill(b)},
co:function(a){return this.hJ(a,"nonzero")},
"%":"CanvasRenderingContext2D"},
mr:{"^":"p;i:length=",$isd:1,"%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
ms:{"^":"r;",$isr:1,$isd:1,"%":"CompositorWorker"},
aq:{"^":"d;",$ise:1,"%":"CSSCharsetRule|CSSFontFaceRule|CSSGroupingRule|CSSImportRule|CSSKeyframeRule|CSSKeyframesRule|CSSMediaRule|CSSNamespaceRule|CSSPageRule|CSSRule|CSSStyleRule|CSSSupportsRule|CSSViewportRule|MozCSSKeyframeRule|MozCSSKeyframesRule|WebKitCSSKeyframeRule|WebKitCSSKeyframesRule"},
mt:{"^":"hB;i:length=",
cQ:function(a,b){var z=this.ft(a,b)
return z!=null?z:""},
ft:function(a,b){if(W.he(b) in a)return a.getPropertyValue(b)
else return a.getPropertyValue(P.hj()+b)},
gq:function(a){return a.height},
gm:function(a){return a.width},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
hB:{"^":"d+hd;"},
hd:{"^":"e;",
gq:function(a){return this.cQ(a,"height")},
gm:function(a){return this.cQ(a,"width")}},
mv:{"^":"d;i:length=",
dH:function(a,b,c){return a.add(b,c)},
D:function(a,b){return a.add(b)},
h:function(a,b){return a[b]},
"%":"DataTransferItemList"},
mw:{"^":"d;p:x=,t:y=","%":"DeviceAcceleration"},
hk:{"^":"x;","%":"HTMLDivElement"},
dy:{"^":"p;",$isdy:1,"%":"Document|HTMLDocument|XMLDocument"},
hl:{"^":"p;",$isd:1,"%":";DocumentFragment"},
mx:{"^":"d;",
k:function(a){return String(a)},
"%":"DOMException"},
my:{"^":"d;",
e6:[function(a,b){return a.next(b)},function(a){return a.next()},"i9","$1","$0","gR",0,2,16,0,1],
"%":"Iterator"},
mz:{"^":"hm;",
gp:function(a){return a.x},
sp:function(a,b){a.x=b},
gt:function(a){return a.y},
st:function(a,b){a.y=b},
"%":"DOMPoint"},
hm:{"^":"d;",
gp:function(a){return a.x},
gt:function(a){return a.y},
"%":";DOMPointReadOnly"},
hn:{"^":"d;",
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gm(a))+" x "+H.f(this.gq(a))},
C:function(a,b){var z
if(b==null)return!1
z=J.m(b)
if(!z.$isQ)return!1
return a.left===z.gaY(b)&&a.top===z.gb3(b)&&this.gm(a)===z.gm(b)&&this.gq(a)===z.gq(b)},
gE:function(a){var z,y,x,w
z=a.left
y=a.top
x=this.gm(a)
w=this.gq(a)
return W.eP(W.aH(W.aH(W.aH(W.aH(0,z&0x1FFFFFFF),y&0x1FFFFFFF),x&0x1FFFFFFF),w&0x1FFFFFFF))},
gcL:function(a){return new P.al(a.left,a.top,[null])},
gci:function(a){return a.bottom},
gq:function(a){return a.height},
gaY:function(a){return a.left},
gcC:function(a){return a.right},
gb3:function(a){return a.top},
gm:function(a){return a.width},
gp:function(a){return a.x},
gt:function(a){return a.y},
$isQ:1,
$asQ:I.O,
"%":";DOMRectReadOnly"},
mA:{"^":"hW;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
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
hC:{"^":"d+z;",
$asa:function(){return[P.n]},
$asc:function(){return[P.n]},
$isa:1,
$isc:1},
hW:{"^":"hC+H;",
$asa:function(){return[P.n]},
$asc:function(){return[P.n]},
$isa:1,
$isc:1},
mB:{"^":"d;i:length=",
D:function(a,b){return a.add(b)},
"%":"DOMTokenList"},
eK:{"^":"cu;a,$ti",
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
as:{"^":"p;dr:namespaceURI=,ek:tagName=",
ghg:function(a){return new W.kc(a)},
gbA:function(a){return P.jj(C.e.bD(a.offsetLeft),C.e.bD(a.offsetTop),C.e.bD(a.offsetWidth),C.e.bD(a.offsetHeight),null)},
k:function(a){return a.localName},
hY:function(a,b,c,d,e){var z,y
z=this.U(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(z,a)
break
case"afterbegin":y=a.childNodes
a.insertBefore(z,y.length>0?y[0]:null)
break
case"beforeend":a.appendChild(z)
break
case"afterend":a.parentNode.insertBefore(z,a.nextSibling)
break
default:H.A(P.b_("Invalid position "+b))}},
U:["bL",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.dB
if(z==null){z=H.u([],[W.dZ])
y=new W.e_(z)
z.push(W.eN(null))
z.push(W.eV())
$.dB=y
d=y}else d=z
z=$.dA
if(z==null){z=new W.eW(d)
$.dA=z
c=z}else{z.a=d
c=z}}if($.ai==null){z=document
y=z.implementation.createHTMLDocument("")
$.ai=y
$.ck=y.createRange()
y=$.ai
y.toString
x=y.createElement("base")
J.fL(x,z.baseURI)
$.ai.head.appendChild(x)}z=$.ai
if(z.body==null){z.toString
y=z.createElement("body")
z.body=y}z=$.ai
if(!!this.$iscf)w=z.body
else{y=a.tagName
z.toString
w=z.createElement(y)
$.ai.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.a.M(C.I,a.tagName)){$.ck.selectNodeContents(w)
v=$.ck.createContextualFragment(b)}else{w.innerHTML=b
v=$.ai.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=$.ai.body
if(w==null?z!=null:w!==z)J.fH(w)
c.cR(v)
document.adoptNode(v)
return v},function(a,b,c){return this.U(a,b,c,null)},"hr",null,null,"giC",2,5,null,0,0],
se_:function(a,b){this.bH(a,b)},
bI:function(a,b,c,d){a.textContent=null
a.appendChild(this.U(a,b,c,d))},
bH:function(a,b){return this.bI(a,b,null,null)},
dT:function(a){return a.focus()},
cP:function(a){return a.getBoundingClientRect()},
ge7:function(a){return new W.ad(a,"change",!1,[W.a0])},
ge8:function(a){return new W.ad(a,"input",!1,[W.a0])},
ge9:function(a){return new W.ad(a,"mousedown",!1,[W.ax])},
gea:function(a){return new W.ad(a,"mousemove",!1,[W.ax])},
geb:function(a){return new W.ad(a,"mouseup",!1,[W.ax])},
$isas:1,
$isp:1,
$ise:1,
$isd:1,
$isr:1,
"%":";Element"},
lB:{"^":"i:0;",
$1:function(a){return!!J.m(a).$isas}},
mC:{"^":"x;q:height=,J:name=,m:width=","%":"HTMLEmbedElement"},
mD:{"^":"a0;V:error=","%":"ErrorEvent"},
a0:{"^":"d;",
ie:function(a){return a.preventDefault()},
$isa0:1,
"%":"AnimationEvent|AnimationPlayerEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|AutocompleteErrorEvent|BeforeInstallPromptEvent|BeforeUnloadEvent|BlobEvent|ClipboardEvent|CloseEvent|CustomEvent|DeviceLightEvent|DeviceMotionEvent|DeviceOrientationEvent|FontFaceSetLoadEvent|GamepadEvent|GeofencingEvent|HashChangeEvent|IDBVersionChangeEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaEncryptedEvent|MediaKeyMessageEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|OfflineAudioCompletionEvent|PageTransitionEvent|PopStateEvent|PresentationConnectionAvailableEvent|PresentationConnectionCloseEvent|ProgressEvent|PromiseRejectionEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCIceCandidateEvent|RTCPeerConnectionIceEvent|RelatedEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|ServiceWorkerMessageEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|TrackEvent|TransitionEvent|USBConnectionEvent|WebGLContextEvent|WebKitTransitionEvent;Event|InputEvent"},
r:{"^":"d;",
dI:function(a,b,c,d){if(c!=null)this.fb(a,b,c,!1)},
eg:function(a,b,c,d){if(c!=null)this.fT(a,b,c,!1)},
fb:function(a,b,c,d){return a.addEventListener(b,H.a6(c,1),!1)},
fT:function(a,b,c,d){return a.removeEventListener(b,H.a6(c,1),!1)},
$isr:1,
"%":"AnalyserNode|ApplicationCache|AudioBufferSourceNode|AudioChannelMerger|AudioChannelSplitter|AudioDestinationNode|AudioGainNode|AudioNode|AudioPannerNode|AudioSourceNode|BatteryManager|BiquadFilterNode|BluetoothDevice|BluetoothRemoteGATTCharacteristic|ChannelMergerNode|ChannelSplitterNode|ConvolverNode|CrossOriginServiceWorkerClient|DOMApplicationCache|DelayNode|DynamicsCompressorNode|EventSource|GainNode|IDBDatabase|IIRFilterNode|JavaScriptAudioNode|MIDIAccess|MediaElementAudioSourceNode|MediaKeySession|MediaQueryList|MediaRecorder|MediaSource|MediaStreamAudioDestinationNode|MediaStreamAudioSourceNode|MessagePort|NetworkInformation|Notification|OfflineResourceList|Oscillator|OscillatorNode|PannerNode|Performance|PermissionStatus|PresentationAvailability|PresentationReceiver|PresentationRequest|RTCDTMFSender|RTCPeerConnection|RealtimeAnalyserNode|ScreenOrientation|ScriptProcessorNode|ServicePortCollection|ServiceWorkerContainer|ServiceWorkerRegistration|SpeechRecognition|SpeechSynthesisUtterance|StereoPannerNode|USB|WaveShaperNode|WorkerPerformance|mozRTCPeerConnection|webkitAudioPannerNode|webkitRTCPeerConnection;EventTarget;dC|dF|dD|dG|dE|dH"},
ht:{"^":"a0;","%":"ExtendableMessageEvent|FetchEvent|InstallEvent|PushEvent|ServicePortConnectEvent|SyncEvent;ExtendableEvent"},
mW:{"^":"x;J:name=","%":"HTMLFieldSetElement"},
aa:{"^":"bl;",$isaa:1,$ise:1,"%":"File"},
dJ:{"^":"hX;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isdJ:1,
$isq:1,
$asq:function(){return[W.aa]},
$iso:1,
$aso:function(){return[W.aa]},
$isa:1,
$asa:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
"%":"FileList"},
hD:{"^":"d+z;",
$asa:function(){return[W.aa]},
$asc:function(){return[W.aa]},
$isa:1,
$isc:1},
hX:{"^":"hD+H;",
$asa:function(){return[W.aa]},
$asc:function(){return[W.aa]},
$isa:1,
$isc:1},
mX:{"^":"r;V:error=",
gF:function(a){var z,y
z=a.result
if(!!J.m(z).$isfZ){y=new Uint8Array(z,0)
return y}return z},
"%":"FileReader"},
mY:{"^":"r;V:error=,i:length=","%":"FileWriter"},
n_:{"^":"r;",
D:function(a,b){return a.add(b)},
"%":"FontFaceSet"},
n1:{"^":"x;cf:action=,i:length=,J:name=","%":"HTMLFormElement"},
au:{"^":"d;",$ise:1,"%":"Gamepad"},
n2:{"^":"d;i:length=","%":"History"},
n3:{"^":"hY;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
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
hE:{"^":"d+z;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
hY:{"^":"hE+H;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
hw:{"^":"hx;",
iE:function(a,b,c,d,e,f){return a.open(b,c,!0,f,e)},
ic:function(a,b,c,d){return a.open(b,c,d)},
af:function(a,b){return a.send(b)},
"%":"XMLHttpRequest"},
hx:{"^":"r;","%":"XMLHttpRequestUpload;XMLHttpRequestEventTarget"},
n4:{"^":"x;q:height=,J:name=,m:width=","%":"HTMLIFrameElement"},
n5:{"^":"d;q:height=,m:width=","%":"ImageBitmap"},
bQ:{"^":"d;q:height=,m:width=",$isbQ:1,"%":"ImageData"},
n6:{"^":"x;q:height=,m:width=","%":"HTMLImageElement"},
n8:{"^":"x;q:height=,J:name=,G:value=,m:width=",$isas:1,$isd:1,$isr:1,$isp:1,"%":"HTMLInputElement"},
ne:{"^":"x;J:name=","%":"HTMLKeygenElement"},
nf:{"^":"x;G:value=","%":"HTMLLIElement"},
nh:{"^":"eh;",
D:function(a,b){return a.add(b)},
"%":"CalcLength|LengthValue|SimpleLength"},
ni:{"^":"x;by:href}","%":"HTMLLinkElement"},
nj:{"^":"d;",
k:function(a){return String(a)},
"%":"Location"},
nk:{"^":"x;J:name=","%":"HTMLMapElement"},
iR:{"^":"x;V:error=","%":"HTMLAudioElement;HTMLMediaElement"},
nn:{"^":"d;i:length=","%":"MediaList"},
no:{"^":"r;",
ab:function(a){return a.clone()},
"%":"MediaStream"},
np:{"^":"r;",
ab:function(a){return a.clone()},
"%":"CanvasCaptureMediaStreamTrack|MediaStreamTrack"},
nq:{"^":"x;J:name=","%":"HTMLMetaElement"},
nr:{"^":"x;G:value=","%":"HTMLMeterElement"},
ns:{"^":"iS;",
iv:function(a,b,c){return a.send(b,c)},
af:function(a,b){return a.send(b)},
"%":"MIDIOutput"},
iS:{"^":"r;","%":"MIDIInput;MIDIPort"},
aw:{"^":"d;",$ise:1,"%":"MimeType"},
nt:{"^":"i7;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.aw]},
$iso:1,
$aso:function(){return[W.aw]},
$isa:1,
$asa:function(){return[W.aw]},
$isc:1,
$asc:function(){return[W.aw]},
"%":"MimeTypeArray"},
hO:{"^":"d+z;",
$asa:function(){return[W.aw]},
$asc:function(){return[W.aw]},
$isa:1,
$isc:1},
i7:{"^":"hO+H;",
$asa:function(){return[W.aw]},
$asc:function(){return[W.aw]},
$isa:1,
$isc:1},
ax:{"^":"jP;",
gbA:function(a){var z,y,x
if(!!a.offsetX)return new P.al(a.offsetX,a.offsetY,[null])
else{if(!J.m(W.eY(a.target)).$isas)throw H.b(new P.j("offsetX is only supported on elements"))
z=W.eY(a.target)
y=[null]
x=new P.al(a.clientX,a.clientY,y).N(0,J.fC(J.fD(z)))
return new P.al(J.di(x.a),J.di(x.b),y)}},
"%":"WheelEvent;DragEvent|MouseEvent"},
nE:{"^":"d;",$isd:1,"%":"Navigator"},
a5:{"^":"cu;a",
gas:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.b(new P.T("No elements"))
if(y>1)throw H.b(new P.T("More than one element"))
return z.firstChild},
D:function(a,b){this.a.appendChild(b)},
O:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
aA:function(a,b){var z,y,x
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
return new W.dL(z,z.length,-1,null)},
a1:function(a,b,c,d,e){throw H.b(new P.j("Cannot setRange on Node list"))},
gi:function(a){return this.a.childNodes.length},
si:function(a,b){throw H.b(new P.j("Cannot set length on immutable List."))},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$ascu:function(){return[W.p]},
$asa:function(){return[W.p]},
$asc:function(){return[W.p]}},
p:{"^":"r;bB:parentNode=,cz:previousSibling=",
gib:function(a){return new W.a5(a)},
cA:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
k:function(a){var z=a.nodeValue
return z==null?this.eO(a):z},
bv:function(a,b){return a.cloneNode(b)},
$isp:1,
$ise:1,
"%":";Node"},
nF:{"^":"d;",
ig:[function(a){return a.previousNode()},"$0","gcz",0,0,5],
"%":"NodeIterator"},
nG:{"^":"i8;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
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
hP:{"^":"d+z;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
i8:{"^":"hP+H;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
nH:{"^":"ht;cf:action=","%":"NotificationEvent"},
nJ:{"^":"x;q:height=,J:name=,m:width=","%":"HTMLObjectElement"},
nL:{"^":"d;q:height=,m:width=","%":"OffscreenCanvas"},
nM:{"^":"x;G:value=","%":"HTMLOptionElement"},
nN:{"^":"x;J:name=,G:value=","%":"HTMLOutputElement"},
nO:{"^":"x;J:name=,G:value=","%":"HTMLParamElement"},
nP:{"^":"d;",$isd:1,"%":"Path2D"},
nR:{"^":"cJ;i:length=","%":"Perspective"},
ay:{"^":"d;i:length=",$ise:1,"%":"Plugin"},
nS:{"^":"i9;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
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
"%":"PluginArray"},
hQ:{"^":"d+z;",
$asa:function(){return[W.ay]},
$asc:function(){return[W.ay]},
$isa:1,
$isc:1},
i9:{"^":"hQ+H;",
$asa:function(){return[W.ay]},
$asc:function(){return[W.ay]},
$isa:1,
$isc:1},
nV:{"^":"ax;q:height=,m:width=","%":"PointerEvent"},
nW:{"^":"eh;p:x=,t:y=","%":"PositionValue"},
nX:{"^":"r;",
af:function(a,b){return a.send(b)},
"%":"PresentationConnection"},
nY:{"^":"x;G:value=","%":"HTMLProgressElement"},
o_:{"^":"d;",
cP:function(a){return a.getBoundingClientRect()},
"%":"Range"},
o0:{"^":"d;",
dN:function(a,b){return a.cancel(b)},
a_:function(a){return a.cancel()},
"%":"ReadableByteStream"},
o1:{"^":"d;",
dN:function(a,b){return a.cancel(b)},
a_:function(a){return a.cancel()},
"%":"ReadableByteStreamReader"},
o2:{"^":"d;",
dN:function(a,b){return a.cancel(b)},
a_:function(a){return a.cancel()},
"%":"ReadableStreamReader"},
o8:{"^":"cJ;p:x=,t:y=","%":"Rotation"},
o9:{"^":"r;",
af:function(a,b){return a.send(b)},
"%":"DataChannel|RTCDataChannel"},
cF:{"^":"d;",$iscF:1,$ise:1,"%":"RTCStatsReport"},
oa:{"^":"d;",
iG:[function(a){return a.result()},"$0","gF",0,0,17],
"%":"RTCStatsResponse"},
ob:{"^":"d;q:height=,m:width=","%":"Screen"},
oc:{"^":"x;i:length=,J:name=,G:value=","%":"HTMLSelectElement"},
od:{"^":"hl;",
bv:function(a,b){return a.cloneNode(b)},
ab:function(a){return a.cloneNode()},
"%":"ShadowRoot"},
oe:{"^":"r;",$isr:1,$isd:1,"%":"SharedWorker"},
of:{"^":"x;J:name=","%":"HTMLSlotElement"},
az:{"^":"r;",$ise:1,"%":"SourceBuffer"},
og:{"^":"dG;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
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
"%":"SourceBufferList"},
dD:{"^":"r+z;",
$asa:function(){return[W.az]},
$asc:function(){return[W.az]},
$isa:1,
$isc:1},
dG:{"^":"dD+H;",
$asa:function(){return[W.az]},
$asc:function(){return[W.az]},
$isa:1,
$isc:1},
aA:{"^":"d;",$ise:1,"%":"SpeechGrammar"},
oh:{"^":"ia;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.aA]},
$isc:1,
$asc:function(){return[W.aA]},
$isq:1,
$asq:function(){return[W.aA]},
$iso:1,
$aso:function(){return[W.aA]},
"%":"SpeechGrammarList"},
hR:{"^":"d+z;",
$asa:function(){return[W.aA]},
$asc:function(){return[W.aA]},
$isa:1,
$isc:1},
ia:{"^":"hR+H;",
$asa:function(){return[W.aA]},
$asc:function(){return[W.aA]},
$isa:1,
$isc:1},
oi:{"^":"a0;V:error=","%":"SpeechRecognitionError"},
aB:{"^":"d;i:length=",$ise:1,"%":"SpeechRecognitionResult"},
oj:{"^":"r;",
a_:function(a){return a.cancel()},
"%":"SpeechSynthesis"},
ol:{"^":"d;",
h:function(a,b){return a.getItem(b)},
j:function(a,b,c){a.setItem(b,c)},
P:function(a,b){var z,y
for(z=0;!0;++z){y=a.key(z)
if(y==null)return
b.$2(y,a.getItem(y))}},
gi:function(a){return a.length},
gH:function(a){return a.key(0)==null},
$isD:1,
$asD:function(){return[P.n,P.n]},
"%":"Storage"},
aC:{"^":"d;",$ise:1,"%":"CSSStyleSheet|StyleSheet"},
eh:{"^":"d;","%":"KeywordValue|NumberValue|TransformValue;StyleValue"},
jB:{"^":"x;",
U:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.bL(a,b,c,d)
z=W.hq("<table>"+H.f(b)+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.a5(y).O(0,J.fA(z))
return y},
"%":"HTMLTableElement"},
op:{"^":"x;",
U:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.bL(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.t.U(z.createElement("table"),b,c,d)
z.toString
z=new W.a5(z)
x=z.gas(z)
x.toString
z=new W.a5(x)
w=z.gas(z)
y.toString
w.toString
new W.a5(y).O(0,new W.a5(w))
return y},
"%":"HTMLTableRowElement"},
oq:{"^":"x;",
U:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.bL(a,b,c,d)
z=document
y=z.createDocumentFragment()
z=C.t.U(z.createElement("table"),b,c,d)
z.toString
z=new W.a5(z)
x=z.gas(z)
y.toString
x.toString
new W.a5(y).O(0,new W.a5(x))
return y},
"%":"HTMLTableSectionElement"},
ek:{"^":"x;",
bI:function(a,b,c,d){var z
a.textContent=null
z=this.U(a,b,c,d)
a.content.appendChild(z)},
bH:function(a,b){return this.bI(a,b,null,null)},
$isek:1,
"%":"HTMLTemplateElement"},
or:{"^":"x;J:name=,G:value=","%":"HTMLTextAreaElement"},
os:{"^":"d;m:width=","%":"TextMetrics"},
aD:{"^":"r;",$ise:1,"%":"TextTrack"},
aE:{"^":"r;",$ise:1,"%":"TextTrackCue|VTTCue"},
ov:{"^":"ib;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.aE]},
$iso:1,
$aso:function(){return[W.aE]},
$isa:1,
$asa:function(){return[W.aE]},
$isc:1,
$asc:function(){return[W.aE]},
"%":"TextTrackCueList"},
hS:{"^":"d+z;",
$asa:function(){return[W.aE]},
$asc:function(){return[W.aE]},
$isa:1,
$isc:1},
ib:{"^":"hS+H;",
$asa:function(){return[W.aE]},
$asc:function(){return[W.aE]},
$isa:1,
$isc:1},
ow:{"^":"dH;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isq:1,
$asq:function(){return[W.aD]},
$iso:1,
$aso:function(){return[W.aD]},
$isa:1,
$asa:function(){return[W.aD]},
$isc:1,
$asc:function(){return[W.aD]},
"%":"TextTrackList"},
dE:{"^":"r+z;",
$asa:function(){return[W.aD]},
$asc:function(){return[W.aD]},
$isa:1,
$isc:1},
dH:{"^":"dE+H;",
$asa:function(){return[W.aD]},
$asc:function(){return[W.aD]},
$isa:1,
$isc:1},
ox:{"^":"d;i:length=","%":"TimeRanges"},
aF:{"^":"d;",$ise:1,"%":"Touch"},
oz:{"^":"ic;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.aF]},
$isc:1,
$asc:function(){return[W.aF]},
$isq:1,
$asq:function(){return[W.aF]},
$iso:1,
$aso:function(){return[W.aF]},
"%":"TouchList"},
hT:{"^":"d+z;",
$asa:function(){return[W.aF]},
$asc:function(){return[W.aF]},
$isa:1,
$isc:1},
ic:{"^":"hT+H;",
$asa:function(){return[W.aF]},
$asc:function(){return[W.aF]},
$isa:1,
$isc:1},
oA:{"^":"d;i:length=","%":"TrackDefaultList"},
cJ:{"^":"d;","%":"Matrix|Skew;TransformComponent"},
oD:{"^":"cJ;p:x=,t:y=","%":"Translation"},
oE:{"^":"d;",
iF:[function(a){return a.parentNode()},"$0","gbB",0,0,5],
ig:[function(a){return a.previousNode()},"$0","gcz",0,0,5],
"%":"TreeWalker"},
jP:{"^":"a0;","%":"CompositionEvent|FocusEvent|KeyboardEvent|SVGZoomEvent|TextEvent|TouchEvent;UIEvent"},
oF:{"^":"d;",
k:function(a){return String(a)},
$isd:1,
"%":"URL"},
oH:{"^":"iR;q:height=,m:width=","%":"HTMLVideoElement"},
oI:{"^":"r;i:length=","%":"VideoTrackList"},
oL:{"^":"d;q:height=,m:width=","%":"VTTRegion"},
oM:{"^":"d;i:length=","%":"VTTRegionList"},
oN:{"^":"r;",
af:function(a,b){return a.send(b)},
"%":"WebSocket"},
c_:{"^":"r;",
ghf:function(a){var z,y
z=P.bg
y=new P.X(0,$.t,null,[z])
this.fq(a)
this.fU(a,W.f9(new W.jS(new P.eU(y,[z]))))
return y},
fU:function(a,b){return a.requestAnimationFrame(H.a6(b,1))},
fq:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isc_:1,
$isd:1,
$isr:1,
"%":"DOMWindow|Window"},
jS:{"^":"i:0;a",
$1:[function(a){this.a.aP(0,a)},null,null,2,0,null,35,"call"]},
oO:{"^":"r;",$isr:1,$isd:1,"%":"Worker"},
oP:{"^":"r;",$isd:1,"%":"CompositorWorkerGlobalScope|DedicatedWorkerGlobalScope|ServiceWorkerGlobalScope|SharedWorkerGlobalScope|WorkerGlobalScope"},
oT:{"^":"p;J:name=,dr:namespaceURI=","%":"Attr"},
oU:{"^":"d;ci:bottom=,q:height=,aY:left=,cC:right=,b3:top=,m:width=",
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
C:function(a,b){var z,y,x
if(b==null)return!1
z=J.m(b)
if(!z.$isQ)return!1
y=a.left
x=z.gaY(b)
if(y==null?x==null:y===x){y=a.top
x=z.gb3(b)
if(y==null?x==null:y===x){y=a.width
x=z.gm(b)
if(y==null?x==null:y===x){y=a.height
z=z.gq(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gE:function(a){var z,y,x,w
z=J.Y(a.left)
y=J.Y(a.top)
x=J.Y(a.width)
w=J.Y(a.height)
return W.eP(W.aH(W.aH(W.aH(W.aH(0,z),y),x),w))},
gcL:function(a){return new P.al(a.left,a.top,[null])},
$isQ:1,
$asQ:I.O,
"%":"ClientRect"},
oV:{"^":"id;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isq:1,
$asq:function(){return[P.Q]},
$iso:1,
$aso:function(){return[P.Q]},
$isa:1,
$asa:function(){return[P.Q]},
$isc:1,
$asc:function(){return[P.Q]},
"%":"ClientRectList|DOMRectList"},
hU:{"^":"d+z;",
$asa:function(){return[P.Q]},
$asc:function(){return[P.Q]},
$isa:1,
$isc:1},
id:{"^":"hU+H;",
$asa:function(){return[P.Q]},
$asc:function(){return[P.Q]},
$isa:1,
$isc:1},
oW:{"^":"ie;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.aq]},
$isc:1,
$asc:function(){return[W.aq]},
$isq:1,
$asq:function(){return[W.aq]},
$iso:1,
$aso:function(){return[W.aq]},
"%":"CSSRuleList"},
hV:{"^":"d+z;",
$asa:function(){return[W.aq]},
$asc:function(){return[W.aq]},
$isa:1,
$isc:1},
ie:{"^":"hV+H;",
$asa:function(){return[W.aq]},
$asc:function(){return[W.aq]},
$isa:1,
$isc:1},
oX:{"^":"p;",$isd:1,"%":"DocumentType"},
oY:{"^":"hn;",
gq:function(a){return a.height},
gm:function(a){return a.width},
gp:function(a){return a.x},
sp:function(a,b){a.x=b},
gt:function(a){return a.y},
st:function(a,b){a.y=b},
"%":"DOMRect"},
oZ:{"^":"hZ;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
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
"%":"GamepadList"},
hF:{"^":"d+z;",
$asa:function(){return[W.au]},
$asc:function(){return[W.au]},
$isa:1,
$isc:1},
hZ:{"^":"hF+H;",
$asa:function(){return[W.au]},
$asc:function(){return[W.au]},
$isa:1,
$isc:1},
p0:{"^":"x;",$isr:1,$isd:1,"%":"HTMLFrameSetElement"},
p3:{"^":"i_;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
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
hG:{"^":"d+z;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
i_:{"^":"hG+H;",
$asa:function(){return[W.p]},
$asc:function(){return[W.p]},
$isa:1,
$isc:1},
p4:{"^":"fX;",
ab:function(a){return a.clone()},
"%":"Request"},
p8:{"^":"r;",$isr:1,$isd:1,"%":"ServiceWorker"},
p9:{"^":"i0;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isa:1,
$asa:function(){return[W.aB]},
$isc:1,
$asc:function(){return[W.aB]},
$isq:1,
$asq:function(){return[W.aB]},
$iso:1,
$aso:function(){return[W.aB]},
"%":"SpeechRecognitionResultList"},
hH:{"^":"d+z;",
$asa:function(){return[W.aB]},
$asc:function(){return[W.aB]},
$isa:1,
$isc:1},
i0:{"^":"hH+H;",
$asa:function(){return[W.aB]},
$asc:function(){return[W.aB]},
$isa:1,
$isc:1},
pa:{"^":"i1;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
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
"%":"StyleSheetList"},
hI:{"^":"d+z;",
$asa:function(){return[W.aC]},
$asc:function(){return[W.aC]},
$isa:1,
$isc:1},
i1:{"^":"hI+H;",
$asa:function(){return[W.aC]},
$asc:function(){return[W.aC]},
$isa:1,
$isc:1},
pc:{"^":"d;",$isd:1,"%":"WorkerLocation"},
pd:{"^":"d;",$isd:1,"%":"WorkerNavigator"},
k0:{"^":"e;fA:a<",
P:function(a,b){var z,y,x,w,v
for(z=this.gad(this),y=z.length,x=this.a,w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
b.$2(v,x.getAttribute(v))}},
gad:function(a){var z,y,x,w,v,u
z=this.a.attributes
y=H.u([],[P.n])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
v=z[w]
u=J.l(v)
if(u.gdr(v)==null)y.push(u.gJ(v))}return y},
gH:function(a){return this.gad(this).length===0},
$isD:1,
$asD:function(){return[P.n,P.n]}},
kc:{"^":"k0;a",
h:function(a,b){return this.a.getAttribute(b)},
j:function(a,b,c){this.a.setAttribute(b,c)},
gi:function(a){return this.gad(this).length}},
eI:{"^":"a4;a,b,c,$ti",
W:function(a,b,c,d){return W.a3(this.a,this.b,a,!1,H.L(this,0))},
aZ:function(a,b,c){return this.W(a,null,b,c)}},
ad:{"^":"eI;a,b,c,$ti"},
eH:{"^":"a4;a,b,c,$ti",
W:function(a,b,c,d){var z,y,x,w
z=H.L(this,0)
y=this.$ti
x=new W.kZ(null,new H.W(0,null,null,null,null,null,0,[[P.a4,z],[P.ef,z]]),y)
x.a=new P.c3(null,x.ghl(x),0,null,null,null,null,y)
for(z=this.a,z=new H.cv(z,z.gi(z),0,null),w=this.c;z.u();)x.D(0,new W.eI(z.d,w,!1,y))
z=x.a
z.toString
return new P.k1(z,[H.L(z,0)]).W(a,b,c,d)},
aZ:function(a,b,c){return this.W(a,null,b,c)},
e2:function(a){return this.W(a,null,null,null)}},
kf:{"^":"ef;a,b,c,d,e,$ti",
a_:function(a){if(this.b==null)return
this.dF()
this.b=null
this.d=null
return},
b0:function(a,b){if(this.b==null)return;++this.a
this.dF()},
cv:function(a){return this.b0(a,null)},
gaX:function(){return this.a>0},
cB:function(a){if(this.b==null||this.a<=0)return;--this.a
this.dD()},
dD:function(){var z=this.d
if(z!=null&&this.a<=0)J.fv(this.b,this.c,z,!1)},
dF:function(){var z=this.d
if(z!=null)J.fI(this.b,this.c,z,!1)},
f5:function(a,b,c,d,e){this.dD()},
v:{
a3:function(a,b,c,d,e){var z=c==null?null:W.f9(new W.kg(c))
z=new W.kf(0,a,b,z,!1,[e])
z.f5(a,b,c,!1,e)
return z}}},
kg:{"^":"i:0;a",
$1:[function(a){return this.a.$1(a)},null,null,2,0,null,2,"call"]},
kZ:{"^":"e;a,b,$ti",
D:function(a,b){var z,y
z=this.b
if(z.T(0,b))return
y=this.a
z.j(0,b,b.aZ(y.gha(y),new W.l_(this,b),y.ghc()))},
L:function(a,b){var z=this.b.L(0,b)
if(z!=null)J.d7(z)},
dQ:[function(a){var z,y
for(z=this.b,y=z.gcM(z),y=y.gI(y);y.u();)J.d7(y.gw())
z.am(0)
this.a.dQ(0)},"$0","ghl",0,0,1]},
l_:{"^":"i:2;a,b",
$0:function(){return this.a.L(0,this.b)}},
cO:{"^":"e;ep:a<",
aw:function(a){return $.$get$eO().M(0,W.b2(a))},
al:function(a,b,c){var z,y,x
z=W.b2(a)
y=$.$get$cP()
x=y.h(0,H.f(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
f8:function(a){var z,y
z=$.$get$cP()
if(z.gH(z)){for(y=0;y<262;++y)z.j(0,C.H[y],W.lN())
for(y=0;y<12;++y)z.j(0,C.j[y],W.lO())}},
v:{
eN:function(a){var z,y
z=document.createElement("a")
y=new W.kT(z,window.location)
y=new W.cO(y)
y.f8(a)
return y},
p1:[function(a,b,c,d){return!0},"$4","lN",8,0,8,11,12,1,13],
p2:[function(a,b,c,d){var z,y,x,w,v
z=d.gep()
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
return z},"$4","lO",8,0,8,11,12,1,13]}},
H:{"^":"e;$ti",
gI:function(a){return new W.dL(a,this.gi(a),-1,null)},
D:function(a,b){throw H.b(new P.j("Cannot add to immutable List."))},
aA:function(a,b){throw H.b(new P.j("Cannot remove from immutable List."))},
a1:function(a,b,c,d,e){throw H.b(new P.j("Cannot setRange on immutable List."))},
$isa:1,
$asa:null,
$isc:1,
$asc:null},
e_:{"^":"e;a",
D:function(a,b){this.a.push(b)},
aw:function(a){return C.a.dK(this.a,new W.iX(a))},
al:function(a,b,c){return C.a.dK(this.a,new W.iW(a,b,c))}},
iX:{"^":"i:0;a",
$1:function(a){return a.aw(this.a)}},
iW:{"^":"i:0;a,b,c",
$1:function(a){return a.al(this.a,this.b,this.c)}},
kU:{"^":"e;ep:d<",
aw:function(a){return this.a.M(0,W.b2(a))},
al:["eX",function(a,b,c){var z,y
z=W.b2(a)
y=this.c
if(y.M(0,H.f(z)+"::"+b))return this.d.he(c)
else if(y.M(0,"*::"+b))return this.d.he(c)
else{y=this.b
if(y.M(0,H.f(z)+"::"+b))return!0
else if(y.M(0,"*::"+b))return!0
else if(y.M(0,H.f(z)+"::*"))return!0
else if(y.M(0,"*::*"))return!0}return!1}],
f9:function(a,b,c,d){var z,y,x
this.a.O(0,c)
z=b.cN(0,new W.kV())
y=b.cN(0,new W.kW())
this.b.O(0,z)
x=this.c
x.O(0,C.h)
x.O(0,y)}},
kV:{"^":"i:0;",
$1:function(a){return!C.a.M(C.j,a)}},
kW:{"^":"i:0;",
$1:function(a){return C.a.M(C.j,a)}},
l7:{"^":"kU;e,a,b,c,d",
al:function(a,b,c){if(this.eX(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.da(a).a.getAttribute("template")==="")return this.e.M(0,b)
return!1},
v:{
eV:function(){var z=P.n
z=new W.l7(P.dS(C.i,z),P.ab(null,null,null,z),P.ab(null,null,null,z),P.ab(null,null,null,z),null)
z.f9(null,new H.bw(C.i,new W.l8(),[H.L(C.i,0),null]),["TEMPLATE"],null)
return z}}},
l8:{"^":"i:0;",
$1:[function(a){return"TEMPLATE::"+H.f(a)},null,null,2,0,null,24,"call"]},
l3:{"^":"e;",
aw:function(a){var z=J.m(a)
if(!!z.$iseb)return!1
z=!!z.$isy
if(z&&W.b2(a)==="foreignObject")return!1
if(z)return!0
return!1},
al:function(a,b,c){if(b==="is"||C.d.eJ(b,"on"))return!1
return this.aw(a)}},
dL:{"^":"e;a,b,c,d",
u:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.af(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gw:function(){return this.d}},
k6:{"^":"e;a",
dI:function(a,b,c,d){return H.A(new P.j("You can only attach EventListeners to your own window."))},
eg:function(a,b,c,d){return H.A(new P.j("You can only attach EventListeners to your own window."))},
$isr:1,
$isd:1,
v:{
k7:function(a){if(a===window)return a
else return new W.k6(a)}}},
dZ:{"^":"e;"},
kT:{"^":"e;a,b"},
eW:{"^":"e;a",
cR:function(a){new W.la(this).$2(a,null)},
aL:function(a,b){var z
if(b==null){z=a.parentNode
if(z!=null)z.removeChild(a)}else b.removeChild(a)},
fX:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.da(a)
x=y.gfA().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.G(t)}v="element unprintable"
try{v=J.E(a)}catch(t){H.G(t)}try{u=W.b2(a)
this.fW(a,b,z,v,u,y,x)}catch(t){if(H.G(t) instanceof P.ao)throw t
else{this.aL(a,b)
window
s="Removing corrupted element "+H.f(v)
if(typeof console!="undefined")console.warn(s)}}},
fW:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aL(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(z)
return}if(!this.a.aw(a)){this.aL(a,b)
window
z="Removing disallowed element <"+H.f(e)+"> from "+J.E(b)
if(typeof console!="undefined")console.warn(z)
return}if(g!=null)if(!this.a.al(a,"is",g)){this.aL(a,b)
window
z="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(z)
return}z=f.gad(f)
y=H.u(z.slice(0),[H.L(z,0)])
for(x=f.gad(f).length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=y[x]
if(!this.a.al(a,J.fO(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.f(e)+" "+H.f(w)+'="'+H.f(z.getAttribute(w))+'">'
if(typeof console!="undefined")console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.m(a).$isek)this.cR(a.content)}},
la:{"^":"i:18;a",
$2:function(a,b){var z,y,x,w,v,u
x=this.a
switch(a.nodeType){case 1:x.fX(a,b)
break
case 8:case 11:case 3:case 4:break
default:x.aL(a,b)}z=a.lastChild
for(x=a==null;null!=z;){y=null
try{y=J.fB(z)}catch(w){H.G(w)
v=z
if(x){u=J.l(v)
if(u.gbB(v)!=null){u.gbB(v)
u.gbB(v).removeChild(v)}}else a.removeChild(v)
z=null
y=a.lastChild}if(z!=null)this.$2(z,a)
z=y}}}}],["","",,P,{"^":"",
lF:function(a){var z,y,x,w,v
if(a==null)return
z=P.b4()
y=Object.getOwnPropertyNames(a)
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=y[w]
z.j(0,v,a[v])}return z},
lC:function(a){var z,y
z=new P.X(0,$.t,null,[null])
y=new P.eC(z,[null])
a.then(H.a6(new P.lD(y),1))["catch"](H.a6(new P.lE(y),1))
return z},
dx:function(){var z=$.dw
if(z==null){z=J.cd(window.navigator.userAgent,"Opera",0)
$.dw=z}return z},
hj:function(){var z,y
z=$.dt
if(z!=null)return z
y=$.du
if(y==null){y=J.cd(window.navigator.userAgent,"Firefox",0)
$.du=y}if(y)z="-moz-"
else{y=$.dv
if(y==null){y=P.dx()!==!0&&J.cd(window.navigator.userAgent,"Trident/",0)
$.dv=y}if(y)z="-ms-"
else z=P.dx()===!0?"-o-":"-webkit-"}$.dt=z
return z},
l0:{"^":"e;",
aS:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
z.push(a)
this.b.push(null)
return y},
a6:function(a){var z,y,x,w,v,u
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.m(a)
if(!!y.$isar)return new Date(a.a)
if(!!y.$iso5)throw H.b(new P.bB("structured clone of RegExp"))
if(!!y.$isaa)return a
if(!!y.$isbl)return a
if(!!y.$isdJ)return a
if(!!y.$isbQ)return a
if(!!y.$iscz||!!y.$isbx)return a
if(!!y.$isD){x=this.aS(a)
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
y.P(a,new P.l2(z,this))
return z.a}if(!!y.$isa){x=this.aS(a)
z=this.b
if(x>=z.length)return H.h(z,x)
u=z[x]
if(u!=null)return u
return this.hq(a,x)}throw H.b(new P.bB("structured clone of other type"))},
hq:function(a,b){var z,y,x,w,v
z=J.B(a)
y=z.gi(a)
x=new Array(y)
w=this.b
if(b>=w.length)return H.h(w,b)
w[b]=x
for(v=0;v<y;++v){w=this.a6(z.h(a,v))
if(v>=x.length)return H.h(x,v)
x[v]=w}return x}},
l2:{"^":"i:4;a,b",
$2:function(a,b){this.a.a[a]=this.b.a6(b)}},
jU:{"^":"e;",
aS:function(a){var z,y,x,w
z=this.a
y=z.length
for(x=0;x<y;++x){w=z[x]
if(w==null?a==null:w===a)return x}z.push(a)
this.b.push(null)
return y},
a6:function(a){var z,y,x,w,v,u,t,s,r
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){y=a.getTime()
x=new P.ar(y,!0)
x.bN(y,!0)
return x}if(a instanceof RegExp)throw H.b(new P.bB("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.lC(a)
w=Object.getPrototypeOf(a)
if(w===Object.prototype||w===null){v=this.aS(a)
x=this.b
u=x.length
if(v>=u)return H.h(x,v)
t=x[v]
z.a=t
if(t!=null)return t
t=P.b4()
z.a=t
if(v>=u)return H.h(x,v)
x[v]=t
this.hM(a,new P.jV(z,this))
return z.a}if(a instanceof Array){v=this.aS(a)
x=this.b
if(v>=x.length)return H.h(x,v)
t=x[v]
if(t!=null)return t
u=J.B(a)
s=u.gi(a)
t=this.c?new Array(s):a
if(v>=x.length)return H.h(x,v)
x[v]=t
if(typeof s!=="number")return H.v(s)
x=J.aW(t)
r=0
for(;r<s;++r)x.j(t,r,this.a6(u.h(a,r)))
return t}return a}},
jV:{"^":"i:4;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.a6(b)
J.bJ(z,a,y)
return y}},
l1:{"^":"l0;a,b"},
cK:{"^":"jU;a,b,c",
hM:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
b.$2(w,a[w])}}},
lD:{"^":"i:0;a",
$1:[function(a){return this.a.aP(0,a)},null,null,2,0,null,14,"call"]},
lE:{"^":"i:0;a",
$1:[function(a){return this.a.cl(a)},null,null,2,0,null,14,"call"]}}],["","",,P,{"^":"",
le:function(a){var z,y,x
z=new P.X(0,$.t,null,[null])
y=new P.eU(z,[null])
a.toString
x=W.a0
W.a3(a,"success",new P.lf(a,y),!1,x)
W.a3(a,"error",y.ghm(),!1,x)
return z},
mu:{"^":"d;",
e6:[function(a,b){if(b==null)a.continue()
else a.continue(b)},function(a){return this.e6(a,null)},"i9","$1","$0","gR",0,2,19,0,26],
"%":"IDBCursor|IDBCursorWithValue"},
lf:{"^":"i:0;a,b",
$1:function(a){this.b.aP(0,new P.cK([],[],!1).a6(this.a.result))}},
ct:{"^":"d;",$isct:1,"%":"IDBKeyRange"},
nK:{"^":"d;",
dH:function(a,b,c){var z,y,x,w,v
try{z=null
z=this.fB(a,b)
w=P.le(z)
return w}catch(v){y=H.G(v)
x=H.U(v)
w=P.hu(y,x,null)
return w}},
D:function(a,b){return this.dH(a,b,null)},
fC:function(a,b,c){return a.add(new P.l1([],[]).a6(b))},
fB:function(a,b){return this.fC(a,b,null)},
"%":"IDBObjectStore"},
o7:{"^":"r;V:error=",
gF:function(a){return new P.cK([],[],!1).a6(a.result)},
"%":"IDBOpenDBRequest|IDBRequest|IDBVersionChangeRequest"},
oB:{"^":"r;V:error=","%":"IDBTransaction"}}],["","",,P,{"^":"",
lc:[function(a,b,c,d){var z,y,x
if(b===!0){z=[c]
C.a.O(z,d)
d=z}y=P.aP(J.df(d,P.m0()),!0,null)
x=H.j7(a,y)
return P.f_(x)},null,null,8,0,null,27,28,29,30],
cT:function(a,b,c){var z
try{if(Object.isExtensible(a)&&!Object.prototype.hasOwnProperty.call(a,b)){Object.defineProperty(a,b,{value:c})
return!0}}catch(z){H.G(z)}return!1},
f1:function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]
return},
f_:[function(a){var z
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=J.m(a)
if(!!z.$isbv)return a.a
if(!!z.$isbl||!!z.$isa0||!!z.$isct||!!z.$isbQ||!!z.$isp||!!z.$isa2||!!z.$isc_)return a
if(!!z.$isar)return H.S(a)
if(!!z.$iscn)return P.f0(a,"$dart_jsFunction",new P.lh())
return P.f0(a,"_$dart_jsObject",new P.li($.$get$cS()))},"$1","m1",2,0,0,15],
f0:function(a,b,c){var z=P.f1(a,b)
if(z==null){z=c.$1(a)
P.cT(a,b,z)}return z},
eZ:[function(a){var z,y
if(a==null||typeof a=="string"||typeof a=="number"||typeof a=="boolean")return a
else{if(a instanceof Object){z=J.m(a)
z=!!z.$isbl||!!z.$isa0||!!z.$isct||!!z.$isbQ||!!z.$isp||!!z.$isa2||!!z.$isc_}else z=!1
if(z)return a
else if(a instanceof Date){z=0+a.getTime()
y=new P.ar(z,!1)
y.bN(z,!1)
return y}else if(a.constructor===$.$get$cS())return a.o
else return P.f8(a)}},"$1","m0",2,0,24,15],
f8:function(a){if(typeof a=="function")return P.cU(a,$.$get$bN(),new P.lr())
if(a instanceof Array)return P.cU(a,$.$get$cN(),new P.ls())
return P.cU(a,$.$get$cN(),new P.lt())},
cU:function(a,b,c){var z=P.f1(a,b)
if(z==null||!(a instanceof Object)){z=c.$1(a)
P.cT(a,b,z)}return z},
bv:{"^":"e;a",
h:["eR",function(a,b){if(typeof b!=="string"&&typeof b!=="number")throw H.b(P.b_("property is not a String or num"))
return P.eZ(this.a[b])}],
j:["cT",function(a,b,c){if(typeof b!=="string"&&typeof b!=="number")throw H.b(P.b_("property is not a String or num"))
this.a[b]=P.f_(c)}],
gE:function(a){return 0},
C:function(a,b){if(b==null)return!1
return b instanceof P.bv&&this.a===b.a},
k:function(a){var z,y
try{z=String(this.a)
return z}catch(y){H.G(y)
z=this.eT(this)
return z}},
bu:function(a,b){var z,y
z=this.a
y=b==null?null:P.aP(new H.bw(b,P.m1(),[H.L(b,0),null]),!0,null)
return P.eZ(z[a].apply(z,y))}},
iA:{"^":"bv;a"},
iy:{"^":"iE;a,$ti",
fe:function(a){var z
if(typeof a==="number"&&Math.floor(a)===a)z=a<0||a>=this.gi(this)
else z=!1
if(z)throw H.b(P.I(a,0,this.gi(this),null,null))},
h:function(a,b){var z
if(typeof b==="number"&&b===C.c.cJ(b)){if(typeof b==="number"&&Math.floor(b)===b)z=b<0||b>=this.gi(this)
else z=!1
if(z)H.A(P.I(b,0,this.gi(this),null,null))}return this.eR(0,b)},
j:function(a,b,c){var z
if(typeof b==="number"&&b===C.e.cJ(b)){if(typeof b==="number"&&Math.floor(b)===b)z=b<0||b>=this.gi(this)
else z=!1
if(z)H.A(P.I(b,0,this.gi(this),null,null))}this.cT(0,b,c)},
gi:function(a){var z=this.a.length
if(typeof z==="number"&&z>>>0===z)return z
throw H.b(new P.T("Bad JsArray length"))},
si:function(a,b){this.cT(0,"length",b)},
D:function(a,b){this.bu("push",[b])},
aA:function(a,b){this.fe(b)
return J.af(this.bu("splice",[b,1]),0)},
a1:function(a,b,c,d,e){var z,y
P.iz(b,c,this.gi(this))
z=c-b
if(z===0)return
y=[b,z]
C.a.O(y,new H.cG(d,e,null,[H.K(d,"z",0)]).io(0,z))
this.bu("splice",y)},
v:{
iz:function(a,b,c){if(a>c)throw H.b(P.I(a,0,c,null,null))
if(b<a||b>c)throw H.b(P.I(b,a,c,null,null))}}},
iE:{"^":"bv+z;",$asa:null,$asc:null,$isa:1,$isc:1},
lh:{"^":"i:0;",
$1:function(a){var z=function(b,c,d){return function(){return b(c,d,this,Array.prototype.slice.apply(arguments))}}(P.lc,a,!1)
P.cT(z,$.$get$bN(),a)
return z}},
li:{"^":"i:0;a",
$1:function(a){return new this.a(a)}},
lr:{"^":"i:0;",
$1:function(a){return new P.iA(a)}},
ls:{"^":"i:0;",
$1:function(a){return new P.iy(a,[null])}},
lt:{"^":"i:0;",
$1:function(a){return new P.bv(a)}}}],["","",,P,{"^":"",
ba:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eQ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
al:{"^":"e;p:a>,t:b>,$ti",
k:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
C:function(a,b){var z,y
if(b==null)return!1
if(!(b instanceof P.al))return!1
z=this.a
y=b.a
if(z==null?y==null:z===y){z=this.b
y=b.b
y=z==null?y==null:z===y
z=y}else z=!1
return z},
gE:function(a){var z,y
z=J.Y(this.a)
y=J.Y(this.b)
return P.eQ(P.ba(P.ba(0,z),y))},
n:function(a,b){var z,y,x,w
z=this.a
y=J.l(b)
x=y.gp(b)
if(typeof z!=="number")return z.n()
if(typeof x!=="number")return H.v(x)
w=this.b
y=y.gt(b)
if(typeof w!=="number")return w.n()
if(typeof y!=="number")return H.v(y)
return new P.al(z+x,w+y,this.$ti)},
N:function(a,b){var z,y,x,w
z=this.a
y=J.l(b)
x=y.gp(b)
if(typeof z!=="number")return z.N()
if(typeof x!=="number")return H.v(x)
w=this.b
y=y.gt(b)
if(typeof w!=="number")return w.N()
if(typeof y!=="number")return H.v(y)
return new P.al(z-x,w-y,this.$ti)}},
kO:{"^":"e;$ti",
gcC:function(a){var z,y
z=this.a
y=this.c
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.v(y)
return z+y},
gci:function(a){var z,y
z=this.b
y=this.d
if(typeof z!=="number")return z.n()
if(typeof y!=="number")return H.v(y)
return z+y},
k:function(a){return"Rectangle ("+H.f(this.a)+", "+H.f(this.b)+") "+H.f(this.c)+" x "+H.f(this.d)},
C:function(a,b){var z,y,x,w
if(b==null)return!1
z=J.m(b)
if(!z.$isQ)return!1
y=this.a
x=z.gaY(b)
if(y==null?x==null:y===x){x=this.b
w=z.gb3(b)
if(x==null?w==null:x===w){w=this.c
if(typeof y!=="number")return y.n()
if(typeof w!=="number")return H.v(w)
if(y+w===z.gcC(b)){y=this.d
if(typeof x!=="number")return x.n()
if(typeof y!=="number")return H.v(y)
z=x+y===z.gci(b)}else z=!1}else z=!1}else z=!1
return z},
gE:function(a){var z,y,x,w,v,u
z=this.a
y=J.Y(z)
x=this.b
w=J.Y(x)
v=this.c
if(typeof z!=="number")return z.n()
if(typeof v!=="number")return H.v(v)
u=this.d
if(typeof x!=="number")return x.n()
if(typeof u!=="number")return H.v(u)
return P.eQ(P.ba(P.ba(P.ba(P.ba(0,y),w),z+v&0x1FFFFFFF),x+u&0x1FFFFFFF))},
gcL:function(a){return new P.al(this.a,this.b,this.$ti)}},
Q:{"^":"kO;aY:a>,b3:b>,m:c>,q:d>,$ti",$asQ:null,v:{
jj:function(a,b,c,d,e){var z,y
if(typeof c!=="number")return c.a7()
if(c<0)z=-c*0
else z=c
if(typeof d!=="number")return d.a7()
if(d<0)y=-d*0
else y=d
return new P.Q(a,b,z,y,[e])}}}}],["","",,P,{"^":"",mg:{"^":"aO;",$isd:1,"%":"SVGAElement"},mj:{"^":"y;",$isd:1,"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGSetElement"},mE:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEBlendElement"},mF:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEColorMatrixElement"},mG:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEComponentTransferElement"},mH:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFECompositeElement"},mI:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEConvolveMatrixElement"},mJ:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEDiffuseLightingElement"},mK:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEDisplacementMapElement"},mL:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEFloodElement"},mM:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEGaussianBlurElement"},mN:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEImageElement"},mO:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEMergeElement"},mP:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEMorphologyElement"},mQ:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFEOffsetElement"},mR:{"^":"y;p:x=,t:y=","%":"SVGFEPointLightElement"},mS:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFESpecularLightingElement"},mT:{"^":"y;p:x=,t:y=","%":"SVGFESpotLightElement"},mU:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFETileElement"},mV:{"^":"y;q:height=,F:result=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFETurbulenceElement"},mZ:{"^":"y;q:height=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGFilterElement"},n0:{"^":"aO;q:height=,m:width=,p:x=,t:y=","%":"SVGForeignObjectElement"},hv:{"^":"aO;","%":"SVGCircleElement|SVGEllipseElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement;SVGGeometryElement"},aO:{"^":"y;",$isd:1,"%":"SVGClipPathElement|SVGDefsElement|SVGGElement|SVGSwitchElement;SVGGraphicsElement"},n7:{"^":"aO;q:height=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGImageElement"},b3:{"^":"d;",$ise:1,"%":"SVGLength"},ng:{"^":"i2;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isa:1,
$asa:function(){return[P.b3]},
$isc:1,
$asc:function(){return[P.b3]},
"%":"SVGLengthList"},hJ:{"^":"d+z;",
$asa:function(){return[P.b3]},
$asc:function(){return[P.b3]},
$isa:1,
$isc:1},i2:{"^":"hJ+H;",
$asa:function(){return[P.b3]},
$asc:function(){return[P.b3]},
$isa:1,
$isc:1},nl:{"^":"y;",$isd:1,"%":"SVGMarkerElement"},nm:{"^":"y;q:height=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGMaskElement"},b7:{"^":"d;",$ise:1,"%":"SVGNumber"},nI:{"^":"i3;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isa:1,
$asa:function(){return[P.b7]},
$isc:1,
$asc:function(){return[P.b7]},
"%":"SVGNumberList"},hK:{"^":"d+z;",
$asa:function(){return[P.b7]},
$asc:function(){return[P.b7]},
$isa:1,
$isc:1},i3:{"^":"hK+H;",
$asa:function(){return[P.b7]},
$asc:function(){return[P.b7]},
$isa:1,
$isc:1},nQ:{"^":"y;q:height=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGPatternElement"},nT:{"^":"d;p:x%,t:y%","%":"SVGPoint"},nU:{"^":"d;i:length=","%":"SVGPointList"},o3:{"^":"d;q:height=,m:width=,p:x%,t:y%","%":"SVGRect"},o4:{"^":"hv;q:height=,m:width=,p:x=,t:y=","%":"SVGRectElement"},eb:{"^":"y;",$iseb:1,$isd:1,"%":"SVGScriptElement"},om:{"^":"i4;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isa:1,
$asa:function(){return[P.n]},
$isc:1,
$asc:function(){return[P.n]},
"%":"SVGStringList"},hL:{"^":"d+z;",
$asa:function(){return[P.n]},
$asc:function(){return[P.n]},
$isa:1,
$isc:1},i4:{"^":"hL+H;",
$asa:function(){return[P.n]},
$asc:function(){return[P.n]},
$isa:1,
$isc:1},y:{"^":"as;",
se_:function(a,b){this.bH(a,b)},
U:function(a,b,c,d){var z,y,x,w,v,u
z=H.u([],[W.dZ])
z.push(W.eN(null))
z.push(W.eV())
z.push(new W.l3())
c=new W.eW(new W.e_(z))
y='<svg version="1.1">'+H.f(b)+"</svg>"
z=document
x=z.body
w=(x&&C.l).hr(x,y,c)
v=z.createDocumentFragment()
w.toString
z=new W.a5(w)
u=z.gas(z)
for(;z=u.firstChild,z!=null;)v.appendChild(z)
return v},
dT:function(a){return a.focus()},
ge7:function(a){return new W.ad(a,"change",!1,[W.a0])},
ge8:function(a){return new W.ad(a,"input",!1,[W.a0])},
ge9:function(a){return new W.ad(a,"mousedown",!1,[W.ax])},
gea:function(a){return new W.ad(a,"mousemove",!1,[W.ax])},
geb:function(a){return new W.ad(a,"mouseup",!1,[W.ax])},
$isy:1,
$isr:1,
$isd:1,
"%":"SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGMetadataElement|SVGStopElement|SVGStyleElement|SVGTitleElement;SVGElement"},on:{"^":"aO;q:height=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGSVGElement"},oo:{"^":"y;",$isd:1,"%":"SVGSymbolElement"},el:{"^":"aO;","%":";SVGTextContentElement"},ot:{"^":"el;",$isd:1,"%":"SVGTextPathElement"},ou:{"^":"el;p:x=,t:y=","%":"SVGTSpanElement|SVGTextElement|SVGTextPositioningElement"},b9:{"^":"d;",$ise:1,"%":"SVGTransform"},oC:{"^":"i5;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isa:1,
$asa:function(){return[P.b9]},
$isc:1,
$asc:function(){return[P.b9]},
"%":"SVGTransformList"},hM:{"^":"d+z;",
$asa:function(){return[P.b9]},
$asc:function(){return[P.b9]},
$isa:1,
$isc:1},i5:{"^":"hM+H;",
$asa:function(){return[P.b9]},
$asc:function(){return[P.b9]},
$isa:1,
$isc:1},oG:{"^":"aO;q:height=,m:width=,p:x=,t:y=",$isd:1,"%":"SVGUseElement"},oJ:{"^":"y;",$isd:1,"%":"SVGViewElement"},oK:{"^":"d;",$isd:1,"%":"SVGViewSpec"},p_:{"^":"y;",$isd:1,"%":"SVGGradientElement|SVGLinearGradientElement|SVGRadialGradientElement"},p5:{"^":"y;",$isd:1,"%":"SVGCursorElement"},p6:{"^":"y;",$isd:1,"%":"SVGFEDropShadowElement"},p7:{"^":"y;",$isd:1,"%":"SVGMPathElement"}}],["","",,P,{"^":"",bL:{"^":"d;i:length=",$isbL:1,$ise:1,"%":"AudioBuffer"},ml:{"^":"r;",
fj:function(a,b,c,d){return a.decodeAudioData(b,H.a6(c,1),H.a6(d,1))},
hu:function(a,b){var z,y,x
z=P.bL
y=new P.X(0,$.t,null,[z])
x=new P.eC(y,[z])
this.fj(a,b,new P.fS(x),new P.fT(x))
return y},
"%":"AudioContext|OfflineAudioContext|webkitAudioContext"},fS:{"^":"i:0;a",
$1:[function(a){this.a.aP(0,a)},null,null,2,0,null,1,"call"]},fT:{"^":"i:0;a",
$1:[function(a){var z=this.a
if(a==null)z.cl("")
else z.cl(a)},null,null,2,0,null,3,"call"]}}],["","",,P,{"^":"",o6:{"^":"d;",$isd:1,"%":"WebGL2RenderingContext"},pb:{"^":"d;",$isd:1,"%":"WebGL2RenderingContextBase"}}],["","",,P,{"^":"",ok:{"^":"i6;",
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.F(b,a,null,null,null))
return P.lF(a.item(b))},
j:function(a,b,c){throw H.b(new P.j("Cannot assign element of immutable List."))},
si:function(a,b){throw H.b(new P.j("Cannot resize immutable List."))},
A:function(a,b){return this.h(a,b)},
$isa:1,
$asa:function(){return[P.D]},
$isc:1,
$asc:function(){return[P.D]},
"%":"SQLResultSetRowList"},hN:{"^":"d+z;",
$asa:function(){return[P.D]},
$asc:function(){return[P.D]},
$isa:1,
$isc:1},i6:{"^":"hN+H;",
$asa:function(){return[P.D]},
$asc:function(){return[P.D]},
$isa:1,
$isc:1}}],["","",,U,{"^":"",
h4:function(a,b){var z
if($.bn==null){z=new H.W(0,null,null,null,null,null,0,[P.n,U.ci])
$.bn=z
z.j(0,"NetLogo",new U.iT("  "))
$.bn.j(0,"plain",new U.j4("  "))}if($.bn.T(0,a))return $.bn.h(0,a).dg(b)
else return C.p.hF(b)},
na:[function(a,b){var z=C.p.hs(b)
if(!!J.m(z).$isD){$.$get$bG().j(0,a,U.h6(a,z))
$.$get$bG().h(0,a).ac()}},"$2","m5",4,0,25,6,33],
n9:[function(a,b){if($.$get$bG().T(0,a))return U.h4(b,$.$get$bG().h(0,a).cn())
return},"$2","m4",4,0,26,6,34],
pk:[function(){var z=$.$get$cZ()
J.bJ(z,"NetTango_InitWorkspace",U.m5())
J.bJ(z,"NetTango_ExportCode",U.m4())},"$0","fm",0,0,1],
jp:function(a,b){var z,y
if(!$.$get$by().T(0,a)){z=new XMLHttpRequest()
C.w.ic(z,"GET",b,!0)
z.responseType="arraybuffer"
y=W.nZ
W.a3(z,"load",new U.jr(a,z),!1,y)
W.a3(z,"error",new U.js(),!1,y)
z.send()}},
ju:function(a){var z
if($.$get$by().h(0,a)!=null&&!$.jt){z=$.$get$bY().createBufferSource()
z.buffer=$.$get$by().h(0,a)
z.connect($.$get$bY().destination,0,0)
z.loop=!1
z.playbackRate.value=1
if(!!z.start)z.start(0)
else z.noteOn(0)}},
d4:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number"&&Math.floor(a)===a)return a
else if(typeof a==="string")try{z=H.e7(a,null,null)
return z}catch(y){if(!!J.m(H.G(y)).$isbO)return b
else throw y}return b},
aL:function(a,b){var z,y
if(a==null)return b
else if(typeof a==="number")return a
else if(typeof a==="string")try{z=P.m7(a,null)
return z}catch(y){if(!!J.m(H.G(y)).$isbO)return b
else throw y}return b},
cb:function(a,b){if(a==null)return!1
else if(typeof a==="boolean")return a
else if(typeof a==="string")if(a.toLowerCase()==="true"||a.toLowerCase()==="t")return!0
else if(a.toLowerCase()==="false"||a.toLowerCase()==="f")return!1
return!1},
bm:{"^":"e;a,b,cf:c>,d,e,p:f*,t:r*,m:x>,y,R:z*,bC:Q@,dZ:ch<,cx,ec:cy<,ef:db<,dx,dy,fr,fx,fy,dX:go<,dc:id<,k1,k2,k3,k4,dm:r1<,dG:r2<",
gq:function(a){return this.r1?34:this.y},
gaU:function(){return 0},
gaz:function(){return 0},
gaT:function(){return this.z!=null},
ghW:function(){return this.Q!=null},
gb4:function(){return this.r},
ghj:function(){var z=this.r
return J.k(z,this.r1?34:this.y)},
gaN:function(){var z=this.z
return z!=null?z.gaN():this},
gbz:function(){var z=this.z
if(!(z!=null)){z=this.cx
z=z!=null?z.rx:null}return z},
ge1:function(){return this.Q==null},
ab:function(a){var z=U.fV(this.fy,this.c)
this.bW(0,z)
return z},
bW:function(a,b){var z,y,x,w
b.b=this.b
b.d=this.d
b.e=this.e
b.dx=this.dx
b.dy=this.dy
b.fx=this.fx
b.x=this.x
b.y=this.y
b.go=this.go
for(z=this.cy,y=z.length,x=b.cy,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x.push(J.d8(z[w],b))
for(z=this.db,y=z.length,x=b.db,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)x.push(J.d8(z[w],b))},
Y:function(){var z,y,x,w,v,u
z=P.b4()
z.j(0,"id",this.a)
z.j(0,"name",this.b)
z.j(0,"action",this.c)
z.j(0,"type",this.d)
z.j(0,"format",this.e)
z.j(0,"start",this.go)
y=this.cy
if(y.length!==0){z.j(0,"params",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=y[w]
J.aY(z.h(0,"params"),v.Y())}}y=this.db
if(y.length!==0){z.j(0,"properties",[])
for(x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){u=y[w]
J.aY(z.h(0,"properties"),u.Y())}}return z},
cn:function(){var z=[]
this.a3(z)
return z},
a3:function(a){var z
J.aY(a,this.Y())
z=this.z
if(z!=null)z.a3(a)},
cb:function(a,b){var z,y,x,w,v,u,t,s
z=this.dh(a)
if(typeof z!=="number")return z.n()
this.x=Math.max(80,z+20)
if(!this.r1&&this.cy.length!==0)for(z=this.cy,y=z.length,x=0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
v.bp(a)
u=J.k(J.dd(v),10)
if(typeof u!=="number")return H.v(u)
x+=u}else x=0
if(!this.r1&&this.db.length!==0)for(z=this.db,y=z.length,t=0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)t=Math.max(t,z[w].fV(a))
else t=0
z=this.f
if(typeof z!=="number")return z.n()
b=Math.max(b,Math.max(z+t,z+this.x+x))
s=this.gbz()
if(s!=null)b=s.cb(a,b)
z=this.f
if(typeof z!=="number")return H.v(z)
this.x=b-z
return b},
a4:function(a,b){var z
this.ch=a
this.cx=b
z=this.z
if(z!=null)z.a4(a+this.gaz(),b)},
bo:["eM",function(){var z,y,x,w
z=this.z
if(z!=null){y=this.r
J.fN(z,J.k(y,this.r1?34:this.y))
z=this.z
y=this.f
x=z.gdZ()
w=this.ch
if(typeof x!=="number")return x.N()
if(typeof y!=="number")return y.n()
J.fM(z,y+(x-w)*25)
this.z.bo()}}],
dh:function(a){var z,y
z=J.l(a)
z.S(a)
z.say(a,this.fx)
y=z.cs(a,this.b).width
z.X(a)
return y},
bt:function(a){var z,y,x
if(this.id){z=this.f
y=this.k1
x=this.k3
if(typeof y!=="number")return y.N()
if(typeof x!=="number")return H.v(x)
if(typeof z!=="number")return z.n()
this.f=z+(y-x)
x=this.r
y=this.k2
z=this.k4
if(typeof y!=="number")return y.N()
if(typeof z!=="number")return H.v(z)
this.r=J.k(x,y-z)
this.k3=this.k1
this.k4=this.k2}return this.id},
bY:function(a){var z,y,x
z=J.l(a)
z.S(a)
z.sao(a,this.dy)
z.say(a,this.fx)
z.scG(a,"left")
z.scH(a,"middle")
y=this.b
x=this.f
if(typeof x!=="number")return x.n()
z.cp(a,y,x+10,J.k(this.r,17))
z.X(a)},
bZ:function(a){var z=J.l(a)
z.S(a)
this.c8(a)
z.sbK(a,this.fr)
z.scr(a,1.5)
z.si5(a,"round")
z.bJ(a)
z.X(a)},
bX:function(a){var z=J.l(a)
z.S(a)
this.c8(a)
z.sao(a,this.dx)
z.co(a)
z.sao(a,"rgba(0, 0, 0, "+H.f(Math.min(1,0.075*this.ch)))
z.co(a)
z.X(a)},
fn:function(a){var z,y
z=J.l(a)
z.S(a)
z.scr(a,5)
z.sbK(a,this.fr)
z.ax(a)
y=this.f
if(typeof y!=="number")return y.n()
z.b_(a,y+10+25*this.gaU(),this.r)
this.ca(a,this.Q==null&&this.go)
z.bJ(a)
z.X(a)},
fk:function(a){var z,y,x,w
z=J.l(a)
z.S(a)
z.scr(a,5)
z.sbK(a,this.fr)
z.ax(a)
y=this.f
x=this.x
if(typeof y!=="number")return y.n()
w=this.r
z.b_(a,y+x-10,J.k(w,this.r1?34:this.y))
this.c9(a,this.z==null&&this.ch===0)
z.bJ(a)
z.X(a)},
fl:function(a){var z,y,x,w
z=this.x
for(y=this.cy,x=y.length-1;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=J.dd(y[x])
if(typeof w!=="number")return H.v(w)
z-=10+w
if(x>=y.length)return H.h(y,x)
y[x].cm(a,z)}},
fm:function(a){var z,y,x
for(z=this.db,y=0;y<z.length;y=x){x=y+1
z[y].hE(a,34*x)}},
c8:["eL",function(a){var z,y,x,w,v
z=J.l(a)
z.ax(a)
y=this.f
if(typeof y!=="number")return y.n()
z.b_(a,y+10,this.r)
this.ca(a,this.Q==null&&this.go)
y=this.ch===0
x=y&&this.Q==null
this.ds(a,x,y&&this.z==null)
this.c9(a,this.z==null&&this.ch===0)
if(this.ch<=0)y=this.Q!=null&&this.z!=null
else y=!0
if(y){y=this.f
x=this.r
z.B(a,y,J.k(x,this.r1?34:this.y))
z.B(a,this.f,this.r)
y=this.f
if(typeof y!=="number")return y.n()
z.B(a,y+10,this.r)}else if(this.z!=null){y=this.f
x=this.r
z.B(a,y,J.k(x,this.r1?34:this.y))
z.B(a,this.f,J.k(this.r,10))
y=this.f
x=this.r
if(typeof y!=="number")return y.n()
z.K(a,y,x,y+10,x)}else{y=this.Q
x=this.f
w=this.r
if(y!=null){y=J.k(w,this.r1?34:this.y)
w=this.f
v=this.r
z.K(a,x,y,w,J.R(J.k(v,this.r1?34:this.y),10))
z.B(a,this.f,this.r)
y=this.f
if(typeof y!=="number")return y.n()
z.B(a,y+10,this.r)}else{y=J.k(w,this.r1?34:this.y)
w=this.f
v=this.r
z.K(a,x,y,w,J.R(J.k(v,this.r1?34:this.y),10))
z.B(a,this.f,J.k(this.r,10))
y=this.f
x=this.r
if(typeof y!=="number")return y.n()
z.K(a,y,x,y+10,x)}}z.cj(a)}],
ds:function(a,b,c){var z,y,x,w,v,u,t
z=this.f
y=this.x
if(typeof z!=="number")return z.n()
x=J.l(a)
x.B(a,z+y-10,this.r)
if(b&&c){z=this.f
y=this.x
if(typeof z!=="number")return z.n()
y=z+y
z=this.r
x.K(a,y,z,y,J.k(z,10))
z=this.f
y=this.x
if(typeof z!=="number")return z.n()
w=this.r
x.B(a,z+y,J.R(J.k(w,this.r1?34:this.y),10))
z=this.f
y=this.x
if(typeof z!=="number")return z.n()
w=this.r
w=J.k(w,this.r1?34:this.y)
v=this.f
u=this.x
if(typeof v!=="number")return v.n()
t=this.r
x.K(a,z+y,w,v+u-10,J.k(t,this.r1?34:this.y))}else if(c){z=this.f
y=this.x
if(typeof z!=="number")return z.n()
x.B(a,z+y,this.r)
y=this.f
z=this.x
if(typeof y!=="number")return y.n()
w=this.r
x.B(a,y+z,J.R(J.k(w,this.r1?34:this.y),10))
z=this.f
y=this.x
if(typeof z!=="number")return z.n()
w=this.r
w=J.k(w,this.r1?34:this.y)
v=this.f
u=this.x
if(typeof v!=="number")return v.n()
t=this.r
x.K(a,z+y,w,v+u-10,J.k(t,this.r1?34:this.y))}else{z=this.f
y=this.x
w=this.r
if(b){if(typeof z!=="number")return z.n()
z+=y
x.K(a,z,w,z,J.k(w,10))
w=this.f
z=this.x
if(typeof w!=="number")return w.n()
y=this.r
x.B(a,w+z,J.k(y,this.r1?34:this.y))
z=this.f
y=this.x
if(typeof z!=="number")return z.n()
w=this.r
x.B(a,z+y-10,J.k(w,this.r1?34:this.y))}else{if(typeof z!=="number")return z.n()
x.B(a,z+y,w)
z=this.f
y=this.x
if(typeof z!=="number")return z.n()
w=this.r
x.B(a,z+y,J.k(w,this.r1?34:this.y))
z=this.f
y=this.x
if(typeof z!=="number")return z.n()
w=this.r
x.B(a,z+y-10,J.k(w,this.r1?34:this.y))}}},
ca:function(a,b){var z,y,x
z=this.f
if(typeof z!=="number")return z.n()
y=z+20+25*this.gaU()
if(b){z=J.l(a)
z.B(a,y,this.r)
x=y+10
z.dL(a,y,J.k(this.r,5),x,J.k(this.r,5),x,this.r)}z=this.f
x=this.x
if(typeof z!=="number")return z.n()
J.de(a,z+x-10,this.r)},
c9:function(a,b){var z,y,x,w,v,u
z=this.f
if(typeof z!=="number")return z.n()
y=z+20
if(!this.r1)y+=25*this.gaz()
if(b){z=y+10
x=this.r
w=J.l(a)
w.B(a,z,J.k(x,this.r1?34:this.y))
x=this.r
x=J.k(J.k(x,this.r1?34:this.y),5)
v=this.r
v=J.k(J.k(v,this.r1?34:this.y),5)
u=this.r
w.dL(a,z,x,y,v,y,J.k(u,this.r1?34:this.y))}z=this.r
J.de(a,y-10,J.k(z,this.r1?34:this.y))},
bw:function(a){var z,y,x,w,v
z=a.c
y=a.d
x=this.r
w=J.k(x,this.r1?34:this.y)
v=this.f
if(typeof v!=="number")return H.v(v)
if(z>=v){if(typeof x!=="number")return H.v(x)
if(y>=x)if(z<=v+this.x){if(typeof w!=="number")return H.v(w)
v=y<=w}else v=!1
else v=!1}else v=!1
return v},
ae:function(a){var z,y,x
this.id=!0
z=a.c
this.k1=z
y=a.d
this.k2=y
this.k3=z
this.k4=y
z=this.Q
if(z!=null){J.dh(z,null)
this.Q=null}for(z=this.fy,x=this;x!=null;){z.fS(x)
z.bO(x)
x=x.gbz()}return this},
b7:function(a){var z
this.id=!1
this.r1=!1
this.r2=!1
z=this.fy
z.h8(this)
if(z.h4(this))U.ju("click")
z.ee()},
b5:function(a){this.k1=a.c
this.k2=a.d},
b6:function(a){},
ba:function(a,b){var z=$.a8
$.a8=z+1
this.a=z
this.x=80
this.y=34
this.b=this.c},
v:{
fV:function(a,b){var z=[U.ak]
z=new U.bm(null,null,b,null,null,0,0,0,0,null,null,0,null,H.u([],z),H.u([],z),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
z.ba(a,b)
return z},
dk:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=J.B(b)
y=z.h(b,"action")
x=y==null?"":J.E(y)
y=z.h(b,"name")
w=y==null?x:J.E(y)
if(!!J.m(z.h(b,"clauses")).$isa){y=H.u([],[U.aN])
v=[U.ak]
u=new U.bk(y,null,null,null,null,x,null,null,0,0,0,0,null,null,0,null,H.u([],v),H.u([],v),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
t=$.a8
$.a8=t+1
u.a=t
u.x=80
u.y=34
u.b=x
t="end-"+H.f(x)
v=new U.cl(null,null,null,null,t,null,null,0,0,0,0,null,null,0,null,H.u([],v),H.u([],v),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
s=$.a8
$.a8=s+1
v.a=s
v.x=80
v.y=34
v.b=t
v.go=!1
v.y=17
u.x1=v
v.ry=u
y.push(v)
u.rx=u.x1}else{y=[U.ak]
if(J.V(z.h(b,"type"),"clause")){u=new U.aN(null,null,null,null,x,null,null,0,0,0,0,null,null,0,null,H.u([],y),H.u([],y),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
y=$.a8
$.a8=y+1
u.a=y
u.x=80
u.y=34
u.b=x
u.go=!1}else{u=new U.bm(null,null,x,null,null,0,0,0,0,null,null,0,null,H.u([],y),H.u([],y),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
y=$.a8
$.a8=y+1
u.a=y
u.x=80
u.y=34
u.b=x}}u.b=w
y=z.h(b,"type")
u.d=y==null?"":J.E(y)
y=z.h(b,"format")
u.e=y==null?null:J.E(y)
y=z.h(b,"blockColor")
v=u.dx
u.dx=y==null?v:J.E(y)
y=z.h(b,"textColor")
v=u.dy
u.dy=y==null?v:J.E(y)
y=z.h(b,"font")
v=u.fx
u.fx=y==null?v:J.E(y)
u.go=!U.cb(z.h(b,"start"),!1)
if(!!J.m(z.h(b,"params")).$isa)for(y=J.P(z.h(b,"params")),v=u.cy;y.u();)v.push(U.cC(u,y.gw()))
if(!!J.m(z.h(b,"properties")).$isa)for(y=J.P(z.h(b,"properties")),v=u.db;y.u();)v.push(U.cC(u,y.gw()))
u.y=(1+u.db.length)*34
if(!!u.$isbk&&!!J.m(z.h(b,"clauses")).$isa)for(z=J.P(z.h(b,"clauses"));z.u();){r=z.gw()
J.bJ(r,"type","clause")
q=H.fi(U.dk(a,r),"$isaN")
H.fi(u,"$isbk").cX(q)}return u}}},
dr:{"^":"bm;ct:rx@",
gbz:function(){var z=this.z
if(z!=null)return z
else{z=this.rx
if(z!=null)return z
else{z=this.cx
if(z!=null)return z.rx
else return}}},
a4:function(a,b){var z
this.ch=a
this.cx=b
z=this.z
if(z!=null)z.a4(a+this.gaz(),this)},
fK:function(a){var z,y,x,w,v
if(this.rx!=null){z=this.f
if(typeof z!=="number")return z.n()
y=this.r
y=J.k(y,this.r1?34:this.y)
x=this.f
if(typeof x!=="number")return x.n()
w=this.r
v=J.l(a)
v.K(a,z+25,y,x+25,J.k(J.k(w,this.r1?34:this.y),10))
z=this.z
y=this.f
x=this.rx
if(z!=null){if(typeof y!=="number")return y.n()
v.B(a,y+25,J.bj(x))
z=this.f
if(typeof z!=="number")return z.n()
v.B(a,z+25+10,J.bj(this.rx))}else{if(typeof y!=="number")return y.n()
v.B(a,y+25,J.R(J.bj(x),10))
z=this.f
if(typeof z!=="number")return z.n()
y=J.bj(this.rx)
x=this.f
if(typeof x!=="number")return x.n()
v.K(a,z+25,y,x+25+10,J.bj(this.rx))}}}},
aN:{"^":"dr;hh:ry?,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2",
gaU:function(){return 1},
gaz:function(){return 1},
ge1:function(){return!1},
ab:function(a){var z,y,x,w
z=this.fy
y=this.c
x=[U.ak]
w=new U.aN(null,null,null,null,y,null,null,0,0,0,0,null,null,0,null,H.u([],x),H.u([],x),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",z,!0,!1,null,null,null,null,!1,!0)
w.ba(z,y)
w.go=!1
this.bW(0,w)
return w},
a3:function(a){var z,y
z=this.Y()
z.j(0,"children",[])
J.aY(a,z)
y=this.z
if(y!=null)y.a3(z.h(0,"children"))},
bZ:function(a){},
bX:function(a){},
ae:function(a){return this.ry.ae(a)}},
cl:{"^":"aN;ry,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2",
gaU:function(){return 1},
gaz:function(){return 0},
a4:function(a,b){var z
this.ch=a
this.cx=b
z=this.z
if(z!=null)z.a4(a,b)},
a3:function(a){},
bY:function(a){}},
bk:{"^":"dr;ry,x1,rx,a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2",
gaU:function(){return 0},
gaz:function(){return 1},
ab:function(a){var z,y,x,w,v,u
z=U.fU(this.fy,this.c)
this.bW(0,z)
for(y=this.ry,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=y[w]
u=J.m(v)
if(!u.$iscl)z.cX(u.ab(v))}return z},
gaN:function(){var z,y
z=this.x1
y=z.z
return y!=null?y.gaN():z},
a3:function(a){var z,y,x,w
z=this.Y()
z.j(0,"children",[])
z.j(0,"clauses",[])
J.aY(a,z)
y=this.z
if(y!=null)y.a3(z.h(0,"children"))
for(y=this.ry,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)y[w].a3(z.h(0,"clauses"))
y=this.x1.z
if(y!=null)y.a3(a)},
a4:function(a,b){var z,y,x
this.ch=a
this.cx=b
z=this.z
if(z!=null)z.a4(a+1,this)
for(z=this.ry,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x)z[x].a4(a,b)},
bo:function(){var z,y,x,w,v,u,t,s
this.eM()
for(z=this.ry,y=z.length,x=this,w=0;w<z.length;z.length===y||(0,H.C)(z),++w,x=v){v=z[w]
u=J.l(v)
t=J.l(x)
if(x.gaT()){s=t.gR(x).gaN()
u.sp(v,this.f)
t=s.r
u.st(v,J.k(t,s.r1?34:s.y))}else{u.sp(v,this.f)
u.st(v,J.k(J.k(t.gt(x),t.gq(x)),34))}v.bo()}},
cX:function(a){var z,y,x,w
a.shh(this)
z=this.ry
C.a.L(z,this.x1)
z.push(a)
z.push(this.x1)
for(y=0;x=z.length,y<x-1;y=w){w=y+1
z[y].sct(z[w])}if(0>=x)return H.h(z,0)
this.rx=z[0]},
c8:function(a){var z,y,x,w,v,u,t,s,r
if(this.r1){this.eL(a)
return}z=J.l(a)
z.ax(a)
y=this.f
if(typeof y!=="number")return y.n()
z.b_(a,y+10,this.r)
x=this.Q==null&&this.go
for(w=this;w!=null;){if(!w.gaT())v=w.gct()!=null||this.ch===0
else v=!1
w.ca(a,x)
w.ds(a,x,v)
w.c9(a,v)
w.fK(a)
x=!w.gaT()
w=w.gct()}y=this.x1
u=y.z!=null||this.ch>0
t=this.f
s=y.r
if(u)z.B(a,t,J.k(s,y.r1?34:y.y))
else{if(typeof t!=="number")return t.n()
z.B(a,t+10,J.k(s,y.r1?34:y.y))
y=this.f
u=this.x1
t=u.r
u=J.k(t,u.r1?34:u.y)
t=this.f
s=this.x1
r=s.r
z.K(a,y,u,t,J.R(J.k(r,s.r1?34:s.y),10))}y=this.Q
u=this.f
t=this.r
if(y!=null){z.B(a,u,t)
y=this.f
if(typeof y!=="number")return y.n()
z.B(a,y+10,this.r)}else{z.B(a,u,J.k(t,10))
y=this.f
u=this.r
if(typeof y!=="number")return y.n()
z.K(a,y,u,y+10,u)}z.cj(a)},
eZ:function(a,b){var z,y
z="end-"+H.f(b)
y=[U.ak]
y=new U.cl(null,null,null,null,z,null,null,0,0,0,0,null,null,0,null,H.u([],y),H.u([],y),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
y.ba(a,z)
y.go=!1
y.y=17
this.x1=y
y.ry=this
this.ry.push(y)
this.rx=this.x1},
v:{
fU:function(a,b){var z=[U.ak]
z=new U.bk(H.u([],[U.aN]),null,null,null,null,b,null,null,0,0,0,0,null,null,0,null,H.u([],z),H.u([],z),"#6b9bc3","white","rgba(255, 255, 255, 0.8)","400 14px 'Poppins', sans-serif",a,!0,!1,null,null,null,null,!1,!0)
z.ba(a,b)
z.eZ(a,b)
return z}}},
ci:{"^":"e;",
aI:function(a,b,c){var z,y
for(z=this.a,y=0;y<b;++y)a.l+=z
a.l+=c+"\n"},
aH:function(a,b,c){var z,y,x,w,v,u,t,s,r,q
z=J.B(b)
y=z.h(b,"format")
x=z.h(b,"params")
w=z.h(b,"properties")
v=J.m(x)
u=!!v.$isa?v.gi(x):0
t=J.m(w)
s=!!t.$isa?t.gi(w):0
if(typeof y!=="string"){y=H.f(z.h(b,"action"))
for(r=0;r<u;++r)y+=" {"+r+"}"
for(r=0;r<s;++r)y+=" {P"+r+"}"}for(r=0;r<u;++r){z="{"+r+"}"
q=J.af(v.h(x,r),"value")
q=q==null?"":J.E(q)
if(typeof q!=="string")H.A(H.M(q))
y=H.fr(y,z,q)}for(r=0;r<s;++r){z="{P"+r+"}"
v=J.af(t.h(w,r),"value")
v=v==null?"":J.E(v)
if(typeof v!=="string")H.A(H.M(v))
y=H.fr(y,z,v)}this.aI(a,c,y)}},
j4:{"^":"ci;a",
dg:function(a){var z,y
z=new P.aQ("")
for(y=J.P(a.h(0,"chains"));y.u();){this.aj(z,y.gw(),0)
z.l+="\n"}y=z.l
return y.charCodeAt(0)==0?y:y},
aj:function(a,b,c){var z,y,x,w,v,u
for(z=J.P(b),y=c+1;z.u();){x=z.gw()
this.aH(a,x,c)
w=J.B(x)
if(!!J.m(w.h(x,"children")).$isa)this.aj(a,w.h(x,"children"),y)
if(!!J.m(w.h(x,"clauses")).$isa)for(w=J.P(w.h(x,"clauses"));w.u();){v=w.gw()
this.aH(a,v,c)
u=J.B(v)
if(!!J.m(u.h(v,"children")).$isa)this.aj(a,u.h(v,"children"),y)}}}},
iT:{"^":"ci;a",
dg:function(a){var z,y,x,w
z=new P.aQ("")
for(y=J.P(a.h(0,"chains"));y.u();){x=y.gw()
w=J.B(x)
if(J.an(w.gi(x),0)&&J.V(J.af(w.h(x,0),"type"),"nlogo:procedure")){this.aH(z,w.aA(x,0),0)
this.aj(z,x,1)
w=z.l+="end\n"
z.l=w+"\n"}}y=z.l
return y.charCodeAt(0)==0?y:y},
aj:function(a,b,c){var z,y,x,w,v,u
for(z=J.P(b),y=c+1;z.u();){x=z.gw()
this.aH(a,x,c)
w=J.B(x)
if(!!J.m(w.h(x,"children")).$isa){this.aI(a,c,"[")
this.aj(a,w.h(x,"children"),y)
this.aI(a,c,"]")}if(!!J.m(w.h(x,"clauses")).$isa)for(w=J.P(w.h(x,"clauses"));w.u();){v=w.gw()
this.aH(a,v,c)
u=J.B(v)
if(!!J.m(u.h(v,"children")).$isa){this.aI(a,c,"[")
this.aj(a,u.h(v,"children"),y)
this.aI(a,c,"]")}}}}},
fW:{"^":"e;a,b,c,m:d>",
gp:function(a){return J.R(this.a.x,this.d)},
gt:function(a){return 0},
gq:function(a){return this.a.y},
bt:function(a){return!1},
i2:function(a){var z
if(!a.gdm())if(!a.gdG()){z=J.l(a)
z=J.d5(J.k(z.gp(a),J.cc(z.gm(a),0.75)),J.R(this.a.x,this.d))}else z=!1
else z=!1
return z},
bp:function(a){var z,y,x,w,v,u
this.d=120
for(z=this.b,y=z.length,x=0;x<z.length;z.length===y||(0,H.C)(z),++x){w=z[x]
v=this.d
u=w.a.dh(a)
if(typeof u!=="number")return u.n()
this.d=Math.max(v,u+20+20)}},
cm:function(a,b){var z,y,x,w,v,u,t
this.bp(a)
z=J.l(a)
z.S(a)
z.sao(a,this.c)
y=this.a
z.dS(a,J.R(y.x,this.d),0,this.d,y.y)
if(b)z.dS(a,J.R(y.x,this.d),0,this.d,y.y)
x=J.R(y.x,this.d)+10
for(y=this.b,w=y.length,v=17,u=0;u<y.length;y.length===w||(0,H.C)(y),++u){t=y[u]
t.b=x
t.c=v
t.hD(a)
v+=51}z.X(a)}},
ed:{"^":"e;a,p:b*,t:c*,d,e",
e0:function(){var z,y,x
z=this.e
y=J.a7(z)
x=y.N(z,this.d.cO(this.a.c))
return y.a7(z,0)||J.an(x,0)},
gm:function(a){return this.a.x},
gq:function(a){var z=this.a
return z.r1?34:z.y},
hD:function(a){var z,y
z=this.a
J.R(this.e,this.d.cO(z.c))
y=J.l(a)
y.S(a)
if(!this.e0())y.sey(a,0.3)
z.f=this.b
z.r=this.c
z.cb(a,80)
z.bX(a)
z.bY(a)
z.bZ(a)
y.X(a)},
bw:function(a){return this.a.bw(a)},
ae:function(a){var z,y,x,w,v
if(this.e0()){z=this.a
y=z.ab(0)
x=z.f
if(typeof x!=="number")return x.N()
y.f=x-5
y.r=J.R(z.r,5)
y.r2=!0
z=this.d
z.bO(y)
if(!!y.$isbk)for(x=y.ry,w=x.length,v=0;v<x.length;x.length===w||(0,H.C)(x),++v)z.bO(x[v])
return y.ae(a)}return this},
b7:function(a){},
b5:function(a){},
b6:function(a){}},
ak:{"^":"e;a,b,c,d,e,f,r,x,y,m:z>,q:Q>,ch",
gG:function(a){var z=this.c
return z==null?"":J.E(z)},
sG:function(a,b){var z=b==null?"":J.E(b)
this.c=z
return z},
gar:function(a){return H.f(J.E(this.c))+H.f(this.r)},
bv:function(a,b){return U.cC(b,this.Y())},
Y:["cV",function(){return P.av(["type",this.e,"name",this.f,"unit",this.r,"value",this.gG(this),"default",this.d])}],
bp:function(a){var z,y,x
this.z=20
z=J.l(a)
z.S(a)
z.say(a,this.b.fx)
y=this.z
x=z.cs(a,this.gar(this)).width
if(typeof x!=="number")return H.v(x)
this.z=y+x
z.X(a)},
fV:function(a){var z,y,x
this.bp(a)
z=this.z
y=J.l(a)
y.S(a)
y.say(a,this.b.fx)
x=y.cs(a,"\u25b8    "+H.f(this.f)).width
if(typeof x!=="number")return H.v(x)
y.X(a)
return z+(25+x+20)},
dR:function(a,b,c){var z,y,x,w,v,u,t,s,r,q,p,o
this.x=b
this.y=c
z=this.b
y=J.l(a)
y.say(a,z.fx)
y.scG(a,"center")
y.scH(a,"middle")
x=z.f
w=this.x
if(typeof x!=="number")return x.n()
v=x+w
u=J.R(J.k(J.k(z.r,this.y),17),this.Q/2)
t=this.z
s=this.Q
y.ax(a)
w=s/2
y.ax(a)
x=v+w
y.b_(a,x,u)
r=v+t
q=r-w
y.B(a,q,u)
p=u+w
y.K(a,r,u,r,p)
o=u+s
w=o-w
y.B(a,r,w)
y.K(a,r,o,q,o)
y.B(a,x,o)
y.K(a,v,o,v,w)
y.B(a,v,p)
y.K(a,v,u,x,u)
y.cj(a)
y.sao(a,this.ch?z.dx:z.fr)
y.co(a)
y.sao(a,this.ch?z.fr:z.dx)
y.cp(a,this.gar(this),v+t/2,p)},
cm:function(a,b){return this.dR(a,b,0)},
hE:function(a,b){var z,y,x,w,v,u
z=this.b
y=z.x
x=this.z
w=J.k(J.k(z.r,b),17)
v=z.f
if(typeof v!=="number")return v.n()
u=J.l(a)
u.sao(a,z.dy)
u.say(a,z.fx)
u.scG(a,"left")
u.scH(a,"middle")
u.cp(a,"\u25b8    "+H.f(this.f),v+25,w)
this.dR(a,y-(10+x),b)},
bw:function(a){var z,y,x,w
z=a.c
y=this.b
x=y.f
w=this.x
if(typeof x!=="number")return x.n()
if(z>=x+w){z=a.d
x=J.k(y.r,this.y)
if(typeof x!=="number")return H.v(x)
if(z>=x){z=a.c
x=y.f
w=this.x
if(typeof x!=="number")return x.n()
if(z<=x+w+this.z){z=a.d
y=J.k(J.k(y.r,this.y),34)
if(typeof y!=="number")return H.v(y)
y=z<=y
z=y}else z=!1}else z=!1}else z=!1
return z},
b7:function(a){this.ch=!1
this.h3()
this.b.fy.ac()},
ae:function(a){this.ch=!0
this.b.fy.ac()
return this},
b5:function(a){},
b6:function(a){},
h3:function(){var z,y,x,w,v,u,t
z=document
y=z.createElement("div")
y.className="backdrop"
x=this.bd()
C.f.hY(y,"beforeend",'      <div class="nt-param-dialog">\n        <div class="nt-param-table">\n          <div class="nt-param-row">\n            <div class="nt-param-name">'+H.f(this.f)+'</div>\n            <div class="nt-param-value">'+x+'</div>\n          </div>\n        </div>\n        <button class="nt-param-confirm">OK</button>\n        <button class="nt-param-cancel">Cancel</button>\n      </div>',null,null)
z.querySelector("#nt-container").appendChild(y)
w=z.querySelector("#nt-param-label-"+this.a)
v=z.querySelector("#nt-param-"+this.a)
u=[null]
t=[W.ax]
new W.eH(new W.eK(z.querySelectorAll(".nt-param-confirm"),u),!1,"click",t).e2(new U.j0(this,y,v))
new W.eH(new W.eK(z.querySelectorAll(".nt-param-cancel"),u),!1,"click",t).e2(new U.j1(y))
y.classList.add("show")
if(v!=null){z=J.l(v)
z.dT(v)
if(w!=null){u=z.ge7(v)
W.a3(u.a,u.b,new U.j2(w,v),!1,H.L(u,0))
z=z.ge8(v)
W.a3(z.a,z.b,new U.j3(w,v),!1,H.L(z,0))}}},
bd:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="text" value="'+this.gar(this)+'">\n      <span class="nt-param-unit">'+H.f(this.r)+"</span>\n    "},
aC:function(a,b){var z,y
z=$.e1
$.e1=z+1
this.a=z
z=J.B(b)
y=z.h(b,"type")
this.e=y==null?"number":J.E(y)
y=z.h(b,"name")
this.f=y==null?"":J.E(y)
y=z.h(b,"unit")
this.r=y==null?"":J.E(y)
z=z.h(b,"default")
this.d=z
this.sG(0,z)},
v:{
j_:function(a,b){var z=new U.ak(null,a,null,null,"int","","",0,0,28,20.4,!1)
z.aC(a,b)
return z},
cC:function(a,b){var z,y
z=J.B(b)
y=z.h(b,"type")
switch(y==null?"number":J.E(y)){case"int":y=new U.hz(!1,1,null,a,null,null,"int","","",0,0,28,20.4,!1)
y.aC(a,b)
y.cx=U.cb(z.h(b,"random"),!1)
y.cy=U.aL(z.h(b,"step"),y.cy)
y.cy=1
return y
case"num":case"number":y=new U.cB(!1,1,null,a,null,null,"int","","",0,0,28,20.4,!1)
y.aC(a,b)
y.cx=U.cb(z.h(b,"random"),!1)
y.cy=U.aL(z.h(b,"step"),y.cy)
return y
case"range":y=new U.jh(0,10,!1,1,null,a,null,null,"int","","",0,0,28,20.4,!1)
y.aC(a,b)
y.cx=U.cb(z.h(b,"random"),!1)
y.cy=U.aL(z.h(b,"step"),y.cy)
y.db=U.aL(z.h(b,"min"),y.db)
y.dx=U.aL(z.h(b,"max"),y.dx)
return y
case"select":return U.ec(a,b)
case"text":default:return U.j_(a,b)}}}},
j0:{"^":"i:0;a,b,c",
$1:[function(a){var z=this.c
if(z!=null)this.a.sG(0,J.ce(z))
C.f.cA(this.b)
z=this.a.b.fy
z.ac()
z.ee()},null,null,2,0,null,2,"call"]},
j1:{"^":"i:0;a",
$1:[function(a){return C.f.cA(this.a)},null,null,2,0,null,2,"call"]},
j2:{"^":"i:0;a,b",
$1:function(a){J.dg(this.a,J.ce(this.b))}},
j3:{"^":"i:0;a,b",
$1:function(a){J.dg(this.a,J.ce(this.b))}},
cB:{"^":"ak;cx,cy,a,b,c,d,e,f,r,x,y,z,Q,ch",
Y:["eS",function(){var z=this.cV()
z.j(0,"random",this.cx)
z.j(0,"step",this.cy)
return z}],
gG:function(a){return U.aL(this.c,0)},
sG:function(a,b){var z=U.aL(b,0)
this.c=z
return z},
gar:function(a){var z=J.fP(H.m6(this.gG(this)),1)
if(C.d.hI(z,".0"))z=C.d.ah(z,0,z.length-2)
return z+H.f(this.r)},
bd:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="number" step="'+H.f(this.cy)+' value="'+this.gar(this)+'">\n      <span class="nt-param-unit">'+H.f(this.r)+"</span>\n    "}},
hz:{"^":"cB;cx,cy,a,b,c,d,e,f,r,x,y,z,Q,ch",
gG:function(a){return U.d4(this.c,0)},
sG:function(a,b){var z=U.d4(b,0)
this.c=z
return z}},
jh:{"^":"cB;db,dx,cx,cy,a,b,c,d,e,f,r,x,y,z,Q,ch",
Y:function(){var z=this.eS()
z.j(0,"min",this.db)
z.j(0,"max",this.dx)
return z},
bd:function(){return'      <input class="nt-param-input" id="nt-param-'+this.a+'" type="range" value="'+this.gar(this)+'" min="'+H.f(this.db)+'" max="'+H.f(this.dx)+'" step="'+H.f(this.cy)+'">\n      <label class="nt-param-label" id="nt-param-label-'+this.a+'" for="nt-param-'+this.a+'">'+H.f(U.aL(this.c,0))+'</label>\n      <span class="nt-param-unit">'+H.f(this.r)+"</span>\n    "}},
jm:{"^":"ak;cx,a,b,c,d,e,f,r,x,y,z,Q,ch",
gar:function(a){return H.f(J.E(this.c))+H.f(this.r)+" \u25be"},
bv:function(a,b){return U.ec(b,this.Y())},
Y:function(){var z=this.cV()
z.j(0,"values",this.cx)
return z},
bd:function(){var z,y,x,w,v
z="<select id='nt-param-"+this.a+"'>"
for(y=J.P(this.cx);y.u();){x=y.gw()
w="<option value='"+H.f(x)+"' "
v=this.c
z+=w+(J.V(x,v==null?"":J.E(v))?"selected":"")+">"+H.f(x)+"</option>"}return z+"</select>"},
f2:function(a,b){var z=J.B(b)
if(!!J.m(z.h(b,"values")).$isa&&J.an(J.ag(z.h(b,"values")),0)){z=z.h(b,"values")
this.cx=z
this.c=J.af(z,0)}},
v:{
ec:function(a,b){var z=new U.jm([],null,a,null,null,"int","","",0,0,28,20.4,!1)
z.aC(a,b)
z.f2(a,b)
return z}}},
h5:{"^":"en;f,r,m:x>,q:y>,z,Q,ch,a,b,c,d,e",
em:function(){if(this.bt(0))this.ac()
C.L.ghf(window).cI(new U.h7(this))},
ee:function(){var z
this.ac()
try{J.af($.$get$cZ(),"NetTango").bu("_relayCallback",[this.f])}catch(z){H.G(z)
P.bI("Unable to relay program changed event to Javascript")}},
cn:function(){var z,y,x,w,v
z=P.av(["chains",[]])
for(y=this.r,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=y[w]
if(v.ge1())J.aY(z.h(0,"chains"),v.cn())}return z},
bO:function(a){var z,y,x,w
this.r.push(a)
z=this.a
z.push(a)
for(y=a.gec(),x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)z.push(y[w])
for(y=a.gef(),x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)z.push(y[w])},
fS:function(a){var z,y,x,w
C.a.L(this.r,a)
z=this.a
C.a.L(z,a)
for(y=a.gec(),x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.L(z,y[w])
for(y=a.gef(),x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w)C.a.L(z,y[w])
this.ac()},
cO:function(a){var z,y,x,w
for(z=this.r,y=z.length,x=0,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(J.V(J.fz(z[w]),a))++x
return x},
h4:function(a){var z,y,x,w
z=this.df(a)
if(z!=null){y=J.l(z)
x=y.gR(z)
y.sR(z,a)
a.Q=z
if(x!=null){w=a.gaN()
x.sbC(w)
w.z=x}return!0}z=this.de(a)
if(z!=null){z.sbC(a)
a.z=z
return!0}return!1},
h8:function(a){var z,y
if(this.z.i2(a))for(z=this.r,y=this.a;a!=null;){C.a.L(z,a)
C.a.L(y,a)
a=a.gbz()}},
df:function(a){var z,y,x,w,v,u,t,s,r
if(a.gbC()==null&&a.gdX())for(z=this.r,y=z.length,x=J.l(a),w=0;w<z.length;z.length===y||(0,H.C)(z),++w){v=z[w]
u=J.m(v)
if(!u.C(v,a))if(J.bh(x.gp(a),J.k(u.gp(v),u.gm(v)))&&J.an(J.k(x.gp(a),x.gm(a)),u.gp(v))){t=u.gt(v)
s=J.k(u.gt(v),u.gq(v))
r=J.k(s,J.cc(u.gq(v),0.8))
if(v.gaT()&&J.bh(a.gb4(),s)&&J.an(a.gb4(),t))return v
else if(!v.gaT()&&J.an(a.gb4(),t)&&J.bh(a.gb4(),r))return v}}return},
de:function(a){var z,y,x,w,v,u
z=J.l(a)
if(z.gR(a)==null)for(y=this.r,x=y.length,w=0;w<y.length;y.length===x||(0,H.C)(y),++w){v=y[w]
u=J.m(v)
if(!u.C(v,a)&&v.gbC()==null&&v.gdX())if(J.bh(z.gp(a),J.k(u.gp(v),u.gm(v)))&&J.an(J.k(z.gp(a),z.gm(a)),u.gp(v)))if(Math.abs(J.R(v.gb4(),a.ghj()))<20)return v}return},
bt:function(a){var z,y,x,w
this.z.toString
for(z=this.r,y=z.length,x=!1,w=0;w<z.length;z.length===y||(0,H.C)(z),++w)if(J.fw(z[w]))x=!0
return x},
ac:function(){var z,y,x,w,v,u,t,s,r
J.fK(this.Q)
this.c.is(this.Q)
J.fx(this.Q,0,0,this.x,this.y)
z=H.u([],[U.bm])
for(y=this.r,x=y.length,w=!1,v=0;v<y.length;y.length===x||(0,H.C)(y),++v){u=y[v]
if(!u.ghW()&&!(u instanceof U.aN)){u.a4(0,null)
u.bo()
u.cb(this.Q,80)}if(u.gdc())z.push(u)
t=this.z
t.toString
if(!u.gdm())if(!u.gdG()){s=J.l(u)
t=J.d5(J.k(s.gp(u),J.cc(s.gm(u),0.75)),J.R(t.a.x,t.d))}else t=!1
else t=!1
if(t)w=!0}this.z.cm(this.Q,w)
for(x=y.length,v=0;v<y.length;y.length===x||(0,H.C)(y),++v){u=y[v]
if(u.gdc()){r=this.df(u)
if(r!=null)r.fk(this.Q)
else{r=this.de(u)
if(r!=null)r.fn(this.Q)}}u.bX(this.Q)
u.bY(this.Q)
u.fl(this.Q)
u.fm(this.Q)
if(z.length!==0)u.bZ(this.Q)}J.fJ(this.Q)},
f_:function(a,b){var z,y,x,w,v,u,t,s
z=this.f
y="#"+H.f(z)
x=document.querySelector(y)
if(x==null)throw H.b("No canvas element with ID "+H.f(z)+" found.")
z=J.l(x)
this.Q=z.ew(x,"2d")
this.x=z.gm(x)
this.y=z.gq(x)
z=this.ch
z.ii(x)
z.c.push(this)
this.z=new U.fW(this,H.u([],[U.ed]),"rgba(0,0,0, 0.2)",100)
z=J.B(b)
if(!!J.m(z.h(b,"blocks")).$isa)for(z=J.P(z.h(b,"blocks"));z.u();){w=z.gw()
v=U.dk(this,w)
v.f=100
v.r=100
v.fx="14px 'Poppins', sans-serif"
u=U.d4(J.af(w,"limit"),-1)
y=this.z
t=y.b
y=y.a
s=new U.ed(v,null,null,y,u)
v.r1=!0
y.a.push(s)
t.push(s)}U.jp("click","sounds/click.wav")
this.ac()
this.em()},
v:{
h6:function(a,b){var z,y,x,w,v
z=H.u([],[U.bm])
y=H.u([],[U.en])
x=P.w
w=U.jN
v=H.u([],[w])
z=new U.h5(a,z,null,null,null,null,new U.jH(!1,null,y,new H.W(0,null,null,null,null,null,0,[x,U.em])),v,new H.W(0,null,null,null,null,null,0,[x,w]),new U.dT([1,0,0,0,1,0,0,0,1]),new U.dT([1,0,0,0,1,0,0,0,1]),new P.ar(Date.now(),!1))
z.f_(a,b)
return z}}},
h7:{"^":"i:0;a",
$1:function(a){return this.a.em()}},
dT:{"^":"e;a",
aB:function(a){var z,y,x,w,v,u,t,s,r
z=a.c
y=this.a
x=y.length
if(0>=x)return H.h(y,0)
w=y[0]
if(typeof w!=="number")return H.v(w)
v=a.d
if(1>=x)return H.h(y,1)
u=y[1]
if(typeof u!=="number")return H.v(u)
if(2>=x)return H.h(y,2)
t=y[2]
if(typeof t!=="number")return H.v(t)
if(3>=x)return H.h(y,3)
s=y[3]
if(typeof s!=="number")return H.v(s)
if(4>=x)return H.h(y,4)
r=y[4]
if(typeof r!=="number")return H.v(r)
if(5>=x)return H.h(y,5)
y=y[5]
if(typeof y!=="number")return H.v(y)
a.c=z*w+v*u+t
a.d=z*s+v*r+y},
is:function(a){var z,y,x,w,v,u,t
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
J.fQ(a,x,w,v,u,t,z[5])}},
jr:{"^":"i:0;a,b",
$1:function(a){J.fy($.$get$bY(),W.lg(this.b.response)).cI(new U.jq(this.a))}},
jq:{"^":"i:20;a",
$1:[function(a){if(a!=null)$.$get$by().j(0,this.a,a)},null,null,2,0,null,23,"call"]},
js:{"^":"i:0;",
$1:function(a){return P.bI("BufferLoader: XHR error")}},
jH:{"^":"e;a,b,c,d",
bx:function(a){var z,y,x
for(z=this.c,y=0;y<z.length;++y){x=z[y].bx(a)
if(x!=null){if(y>=z.length)return H.h(z,y)
z[y].e=new P.ar(Date.now(),!1)
if(y>=z.length)return H.h(z,y)
return new U.em(z[y],x)}else if(y>=z.length)return H.h(z,y)}return},
ii:function(a){var z,y
this.b=a
z=J.l(a)
y=z.ge9(a)
W.a3(y.a,y.b,new U.jI(this),!1,H.L(y,0))
y=z.geb(a)
W.a3(y.a,y.b,new U.jJ(this),!1,H.L(y,0))
z=z.gea(a)
W.a3(z.a,z.b,new U.jK(this),!1,H.L(z,0))
z=document
W.a3(z,"keydown",new U.jL(this),!1,W.nd)
W.a3(z,"touchmove",new U.jM(),!1,W.oy)},
fG:function(a){var z,y
for(z=this.c.length,y=0;y<z;++y);}},
jI:{"^":"i:0;a",
$1:function(a){var z,y,x
z=this.a
y=U.cj(a)
x=z.bx(y)
if(x!=null)if(x.ae(y))z.d.j(0,-1,x)
z.a=!0
return}},
jJ:{"^":"i:0;a",
$1:function(a){var z,y,x
z=this.a
y=z.d
x=y.h(0,-1)
if(x!=null)x.b7(U.cj(a))
y.j(0,-1,null)
z.a=!1
return}},
jK:{"^":"i:0;a",
$1:function(a){var z,y,x
z=this.a
y=U.cj(a)
x=z.d.h(0,-1)
if(x!=null)x.b5(y)
else{x=z.bx(y)
if(x!=null)if(z.a){x.a.d.aB(y)
x.b.b6(y)}}return}},
jL:{"^":"i:0;a",
$1:function(a){return this.a.fG(a)}},
jM:{"^":"i:0;",
$1:function(a){return J.fG(a)}},
en:{"^":"e;",
bx:function(a){var z,y,x
z=new U.dq(null,-1,0,0,!1,!1,!1,!1,!1)
z.a=a.a
z.b=a.b
z.c=a.c
z.d=a.d
z.y=a.y
this.d.aB(z)
for(y=this.a,x=y.length-1;x>=0;--x){if(x>=y.length)return H.h(y,x)
if(y[x].bw(z)){if(x>=y.length)return H.h(y,x)
return y[x]}}return}},
em:{"^":"e;a,b",
ae:function(a){this.a.d.aB(a)
this.b=this.b.ae(a)
return!0},
b7:function(a){this.a.d.aB(a)
this.b.b7(a)},
b5:function(a){this.a.d.aB(a)
this.b.b5(a)},
b6:function(a){this.a.d.aB(a)
this.b.b6(a)}},
jN:{"^":"e;"},
dq:{"^":"e;a,b,c,d,e,f,r,x,y",
f0:function(a){var z,y
this.a=-1
z=J.l(a)
y=z.gbA(a)
y=y.gp(y)
y.toString
this.c=y
z=z.gbA(a)
z=z.gt(z)
z.toString
this.d=z
this.y=!0},
v:{
cj:function(a){var z=new U.dq(null,-1,0,0,!1,!1,!1,!1,!1)
z.f0(a)
return z}}}},1]]
setupProgram(dart,0)
J.m=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dQ.prototype
return J.is.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.iu.prototype
if(typeof a=="boolean")return J.ir.prototype
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.e)return a
return J.c6(a)}
J.B=function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.e)return a
return J.c6(a)}
J.aW=function(a){if(a==null)return a
if(a.constructor==Array)return J.br.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.e)return a
return J.c6(a)}
J.a7=function(a){if(typeof a=="number")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bC.prototype
return a}
J.ff=function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bC.prototype
return a}
J.fg=function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.bC.prototype
return a}
J.l=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.e)return a
return J.c6(a)}
J.k=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.ff(a).n(a,b)}
J.V=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.m(a).C(a,b)}
J.d5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>=b
return J.a7(a).ev(a,b)}
J.an=function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.a7(a).b9(a,b)}
J.bh=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.a7(a).a7(a,b)}
J.cc=function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ff(a).bF(a,b)}
J.d6=function(a,b){return J.a7(a).eH(a,b)}
J.R=function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.a7(a).N(a,b)}
J.ft=function(a,b){if(typeof a=="number"&&typeof b=="number")return(a^b)>>>0
return J.a7(a).eY(a,b)}
J.af=function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fk(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.B(a).h(a,b)}
J.bJ=function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.fk(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.aW(a).j(a,b,c)}
J.fu=function(a,b){return J.l(a).fa(a,b)}
J.aY=function(a,b){return J.aW(a).D(a,b)}
J.fv=function(a,b,c,d){return J.l(a).dI(a,b,c,d)}
J.fw=function(a){return J.l(a).bt(a)}
J.d7=function(a){return J.l(a).a_(a)}
J.fx=function(a,b,c,d,e){return J.l(a).hk(a,b,c,d,e)}
J.d8=function(a,b){return J.l(a).bv(a,b)}
J.cd=function(a,b,c){return J.B(a).ho(a,b,c)}
J.fy=function(a,b){return J.l(a).hu(a,b)}
J.d9=function(a,b){return J.aW(a).A(a,b)}
J.fz=function(a){return J.l(a).gcf(a)}
J.da=function(a){return J.l(a).ghg(a)}
J.bi=function(a){return J.l(a).gV(a)}
J.Y=function(a){return J.m(a).gE(a)}
J.P=function(a){return J.aW(a).gI(a)}
J.ag=function(a){return J.B(a).gi(a)}
J.db=function(a){return J.l(a).gR(a)}
J.fA=function(a){return J.l(a).gib(a)}
J.fB=function(a){return J.l(a).gcz(a)}
J.dc=function(a){return J.l(a).gF(a)}
J.fC=function(a){return J.l(a).gcL(a)}
J.ce=function(a){return J.l(a).gG(a)}
J.dd=function(a){return J.l(a).gm(a)}
J.bj=function(a){return J.l(a).gt(a)}
J.fD=function(a){return J.l(a).cP(a)}
J.de=function(a,b,c){return J.l(a).B(a,b,c)}
J.df=function(a,b){return J.aW(a).aq(a,b)}
J.fE=function(a,b,c){return J.fg(a).i6(a,b,c)}
J.fF=function(a,b){return J.m(a).cu(a,b)}
J.fG=function(a){return J.l(a).ie(a)}
J.fH=function(a){return J.aW(a).cA(a)}
J.fI=function(a,b,c,d){return J.l(a).eg(a,b,c,d)}
J.fJ=function(a){return J.l(a).X(a)}
J.fK=function(a){return J.l(a).S(a)}
J.aZ=function(a,b){return J.l(a).af(a,b)}
J.fL=function(a,b){return J.l(a).sby(a,b)}
J.dg=function(a,b){return J.l(a).se_(a,b)}
J.dh=function(a,b){return J.l(a).sR(a,b)}
J.fM=function(a,b){return J.l(a).sp(a,b)}
J.fN=function(a,b){return J.l(a).st(a,b)}
J.di=function(a){return J.a7(a).cJ(a)}
J.fO=function(a){return J.fg(a).ip(a)}
J.E=function(a){return J.m(a).k(a)}
J.fP=function(a,b){return J.a7(a).iq(a,b)}
J.fQ=function(a,b,c,d,e,f,g){return J.l(a).ir(a,b,c,d,e,f,g)}
I.aK=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.l=W.cf.prototype
C.f=W.hk.prototype
C.w=W.hw.prototype
C.x=J.d.prototype
C.a=J.br.prototype
C.c=J.dQ.prototype
C.e=J.bs.prototype
C.d=J.bt.prototype
C.E=J.bu.prototype
C.r=J.j5.prototype
C.t=W.jB.prototype
C.k=J.bC.prototype
C.L=W.c_.prototype
C.u=new P.iZ()
C.v=new P.k9()
C.b=new P.kP()
C.m=new P.b1(0)
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
C.p=new P.iF(null,null)
C.F=new P.iH(null)
C.G=new P.iI(null,null)
C.H=H.u(I.aK(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.I=I.aK(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.h=I.aK([])
C.i=H.u(I.aK(["bind","if","ref","repeat","syntax"]),[P.n])
C.j=H.u(I.aK(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.J=H.u(I.aK([]),[P.bA])
C.q=new H.hc(0,{},C.J,[P.bA,null])
C.K=new H.cH("call")
$.e5="$cachedFunction"
$.e6="$cachedInvocation"
$.a9=0
$.b0=null
$.dl=null
$.d0=null
$.fa=null
$.fo=null
$.c5=null
$.c8=null
$.d1=null
$.aT=null
$.bc=null
$.bd=null
$.cV=!1
$.t=C.b
$.dI=0
$.ai=null
$.ck=null
$.dB=null
$.dA=null
$.dw=null
$.dv=null
$.du=null
$.dt=null
$.a8=0
$.bn=null
$.e1=0
$.jt=!1
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
I.$lazy(y,x,w)}})(["bN","$get$bN",function(){return H.d_("_$dart_dartClosure")},"cp","$get$cp",function(){return H.d_("_$dart_js")},"dM","$get$dM",function(){return H.im()},"dN","$get$dN",function(){if(typeof WeakMap=="function")var z=new WeakMap()
else{z=$.dI
$.dI=z+1
z="expando$key$"+z}return new P.hs(null,z)},"eo","$get$eo",function(){return H.ac(H.bZ({
toString:function(){return"$receiver$"}}))},"ep","$get$ep",function(){return H.ac(H.bZ({$method$:null,
toString:function(){return"$receiver$"}}))},"eq","$get$eq",function(){return H.ac(H.bZ(null))},"er","$get$er",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"ev","$get$ev",function(){return H.ac(H.bZ(void 0))},"ew","$get$ew",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"et","$get$et",function(){return H.ac(H.eu(null))},"es","$get$es",function(){return H.ac(function(){try{null.$method$}catch(z){return z.message}}())},"ey","$get$ey",function(){return H.ac(H.eu(void 0))},"ex","$get$ex",function(){return H.ac(function(){try{(void 0).$method$}catch(z){return z.message}}())},"cL","$get$cL",function(){return P.jW()},"bq","$get$bq",function(){var z,y
z=P.b6
y=new P.X(0,P.jT(),null,[z])
y.f7(null,z)
return y},"be","$get$be",function(){return[]},"eO","$get$eO",function(){return P.dS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"cP","$get$cP",function(){return P.b4()},"cZ","$get$cZ",function(){return P.f8(self)},"cN","$get$cN",function(){return H.d_("_$dart_dartObject")},"cS","$get$cS",function(){return function DartObject(a){this.o=a}},"bG","$get$bG",function(){return P.b4()},"bY","$get$bY",function(){return new (window.AudioContext||window.webkitAudioContext)()},"by","$get$by",function(){return H.iB(null,null)}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[null,"value","e","error","stackTrace","_","canvasId","object","x","invocation","data","element","attributeName","context","result","o","arg4","isolate","arg3","arg","closure","each","sender","buffer","attr","numberOfArguments","key","callback","captureThis","self","arguments","arg1","arg2","jsonString","language","time"]
init.types=[{func:1,args:[,]},{func:1,v:true},{func:1},{func:1,v:true,args:[P.e],opt:[P.bz]},{func:1,args:[,,]},{func:1,ret:W.p},{func:1,v:true,args:[{func:1,v:true}]},{func:1,ret:P.n,args:[P.w]},{func:1,ret:P.cX,args:[W.as,P.n,P.n,W.cO]},{func:1,args:[P.n,,]},{func:1,args:[,P.n]},{func:1,args:[P.n]},{func:1,args:[{func:1,v:true}]},{func:1,args:[,],opt:[,]},{func:1,v:true,args:[,P.bz]},{func:1,args:[P.bA,,]},{func:1,ret:P.e,opt:[P.e]},{func:1,ret:[P.a,W.cF]},{func:1,v:true,args:[W.p,W.p]},{func:1,v:true,opt:[P.e]},{func:1,args:[P.bL]},{func:1,v:true,args:[P.e]},{func:1,ret:P.w,args:[P.n]},{func:1,ret:P.ae,args:[P.n]},{func:1,ret:P.e,args:[,]},{func:1,v:true,args:[P.n,P.n]},{func:1,ret:P.n,args:[P.n,P.n]}]
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
if(x==y)H.me(d||a)
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
Isolate.aK=a.aK
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.fq(U.fm(),b)},[])
else (function(b){H.fq(U.fm(),b)})([])})})()
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
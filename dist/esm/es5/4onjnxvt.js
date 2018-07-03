/*! Built with http://stenciljs.com */
import{h}from"./filesquash.core.js";function listCacheClear(){this.__data__=[],this.size=0}var _listCacheClear=listCacheClear;function eq(e,t){return e===t||e!=e&&t!=t}var eq_1=eq;function assocIndexOf(e,t){for(var a=e.length;a--;)if(eq_1(e[a][0],t))return a;return-1}var _assocIndexOf=assocIndexOf,arrayProto=Array.prototype,splice=arrayProto.splice;function listCacheDelete(e){var t=this.__data__,a=_assocIndexOf(t,e);return!(a<0||(a==t.length-1?t.pop():splice.call(t,a,1),--this.size,0))}var _listCacheDelete=listCacheDelete;function listCacheGet(e){var t=this.__data__,a=_assocIndexOf(t,e);return a<0?void 0:t[a][1]}var _listCacheGet=listCacheGet;function listCacheHas(e){return _assocIndexOf(this.__data__,e)>-1}var _listCacheHas=listCacheHas;function listCacheSet(e,t){var a=this.__data__,r=_assocIndexOf(a,e);return r<0?(++this.size,a.push([e,t])):a[r][1]=t,this}var _listCacheSet=listCacheSet;function ListCache(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}ListCache.prototype.clear=_listCacheClear,ListCache.prototype.delete=_listCacheDelete,ListCache.prototype.get=_listCacheGet,ListCache.prototype.has=_listCacheHas,ListCache.prototype.set=_listCacheSet;var _ListCache=ListCache;function stackClear(){this.__data__=new _ListCache,this.size=0}var _stackClear=stackClear;function stackDelete(e){var t=this.__data__,a=t.delete(e);return this.size=t.size,a}var _stackDelete=stackDelete;function stackGet(e){return this.__data__.get(e)}var _stackGet=stackGet;function stackHas(e){return this.__data__.has(e)}var _stackHas=stackHas,commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var freeGlobal="object"==typeof commonjsGlobal&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal,freeSelf="object"==typeof self&&self&&self.Object===Object&&self,root=_freeGlobal||freeSelf||Function("return this")(),_root=root,Symbol=_root.Symbol,_Symbol=Symbol,objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,nativeObjectToString=objectProto.toString,symToStringTag=_Symbol?_Symbol.toStringTag:void 0;function getRawTag(e){var t=hasOwnProperty.call(e,symToStringTag),a=e[symToStringTag];try{e[symToStringTag]=void 0}catch(e){}var r=nativeObjectToString.call(e);return t?e[symToStringTag]=a:delete e[symToStringTag],r}var _getRawTag=getRawTag,objectProto$1=Object.prototype,nativeObjectToString$1=objectProto$1.toString;function objectToString(e){return nativeObjectToString$1.call(e)}var _objectToString=objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag$1=_Symbol?_Symbol.toStringTag:void 0;function baseGetTag(e){return null==e?void 0===e?undefinedTag:nullTag:symToStringTag$1&&symToStringTag$1 in Object(e)?_getRawTag(e):_objectToString(e)}var _baseGetTag=baseGetTag;function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}var isObject_1=isObject,asyncTag="[object AsyncFunction]",funcTag="[object Function]",genTag="[object GeneratorFunction]",proxyTag="[object Proxy]";function isFunction(e){if(!isObject_1(e))return!1;var t=_baseGetTag(e);return t==funcTag||t==genTag||t==asyncTag||t==proxyTag}var isFunction_1=isFunction,coreJsData=_root["__core-js_shared__"],_coreJsData=coreJsData,maskSrcKey=function(){var e=/[^.]+$/.exec(_coreJsData&&_coreJsData.keys&&_coreJsData.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function isMasked(e){return!!maskSrcKey&&maskSrcKey in e}var _isMasked=isMasked,funcProto=Function.prototype,funcToString=funcProto.toString;function toSource(e){if(null!=e){try{return funcToString.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var _toSource=toSource,reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reIsHostCtor=/^\[object .+?Constructor\]$/,funcProto$1=Function.prototype,objectProto$2=Object.prototype,funcToString$1=funcProto$1.toString,hasOwnProperty$1=objectProto$2.hasOwnProperty,reIsNative=RegExp("^"+funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function baseIsNative(e){return!(!isObject_1(e)||_isMasked(e))&&(isFunction_1(e)?reIsNative:reIsHostCtor).test(_toSource(e))}var _baseIsNative=baseIsNative;function getValue(e,t){return null==e?void 0:e[t]}var _getValue=getValue;function getNative(e,t){var a=_getValue(e,t);return _baseIsNative(a)?a:void 0}var _getNative=getNative,Map=_getNative(_root,"Map"),_Map=Map,nativeCreate=_getNative(Object,"create"),_nativeCreate=nativeCreate;function hashClear(){this.__data__=_nativeCreate?_nativeCreate(null):{},this.size=0}var _hashClear=hashClear;function hashDelete(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var _hashDelete=hashDelete,HASH_UNDEFINED="__lodash_hash_undefined__",objectProto$3=Object.prototype,hasOwnProperty$2=objectProto$3.hasOwnProperty;function hashGet(e){var t=this.__data__;if(_nativeCreate){var a=t[e];return a===HASH_UNDEFINED?void 0:a}return hasOwnProperty$2.call(t,e)?t[e]:void 0}var _hashGet=hashGet,objectProto$4=Object.prototype,hasOwnProperty$3=objectProto$4.hasOwnProperty;function hashHas(e){var t=this.__data__;return _nativeCreate?void 0!==t[e]:hasOwnProperty$3.call(t,e)}var _hashHas=hashHas,HASH_UNDEFINED$1="__lodash_hash_undefined__";function hashSet(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=_nativeCreate&&void 0===t?HASH_UNDEFINED$1:t,this}var _hashSet=hashSet;function Hash(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}Hash.prototype.clear=_hashClear,Hash.prototype.delete=_hashDelete,Hash.prototype.get=_hashGet,Hash.prototype.has=_hashHas,Hash.prototype.set=_hashSet;var _Hash=Hash;function mapCacheClear(){this.size=0,this.__data__={hash:new _Hash,map:new(_Map||_ListCache),string:new _Hash}}var _mapCacheClear=mapCacheClear;function isKeyable(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}var _isKeyable=isKeyable;function getMapData(e,t){var a=e.__data__;return _isKeyable(t)?a["string"==typeof t?"string":"hash"]:a.map}var _getMapData=getMapData;function mapCacheDelete(e){var t=_getMapData(this,e).delete(e);return this.size-=t?1:0,t}var _mapCacheDelete=mapCacheDelete;function mapCacheGet(e){return _getMapData(this,e).get(e)}var _mapCacheGet=mapCacheGet;function mapCacheHas(e){return _getMapData(this,e).has(e)}var _mapCacheHas=mapCacheHas;function mapCacheSet(e,t){var a=_getMapData(this,e),r=a.size;return a.set(e,t),this.size+=a.size==r?0:1,this}var _mapCacheSet=mapCacheSet;function MapCache(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var r=e[t];this.set(r[0],r[1])}}MapCache.prototype.clear=_mapCacheClear,MapCache.prototype.delete=_mapCacheDelete,MapCache.prototype.get=_mapCacheGet,MapCache.prototype.has=_mapCacheHas,MapCache.prototype.set=_mapCacheSet;var _MapCache=MapCache,LARGE_ARRAY_SIZE=200;function stackSet(e,t){var a=this.__data__;if(a instanceof _ListCache){var r=a.__data__;if(!_Map||r.length<LARGE_ARRAY_SIZE-1)return r.push([e,t]),this.size=++a.size,this;a=this.__data__=new _MapCache(r)}return a.set(e,t),this.size=a.size,this}var _stackSet=stackSet;function Stack(e){var t=this.__data__=new _ListCache(e);this.size=t.size}Stack.prototype.clear=_stackClear,Stack.prototype.delete=_stackDelete,Stack.prototype.get=_stackGet,Stack.prototype.has=_stackHas,Stack.prototype.set=_stackSet;var _Stack=Stack,HASH_UNDEFINED$2="__lodash_hash_undefined__";function setCacheAdd(e){return this.__data__.set(e,HASH_UNDEFINED$2),this}var _setCacheAdd=setCacheAdd;function setCacheHas(e){return this.__data__.has(e)}var _setCacheHas=setCacheHas;function SetCache(e){var t=-1,a=null==e?0:e.length;for(this.__data__=new _MapCache;++t<a;)this.add(e[t])}SetCache.prototype.add=SetCache.prototype.push=_setCacheAdd,SetCache.prototype.has=_setCacheHas;var _SetCache=SetCache;function arraySome(e,t){for(var a=-1,r=null==e?0:e.length;++a<r;)if(t(e[a],a,e))return!0;return!1}var _arraySome=arraySome;function cacheHas(e,t){return e.has(t)}var _cacheHas=cacheHas,COMPARE_PARTIAL_FLAG=1,COMPARE_UNORDERED_FLAG=2;function equalArrays(e,t,a,r,o,n){var s=a&COMPARE_PARTIAL_FLAG,i=e.length,c=t.length;if(i!=c&&!(s&&c>i))return!1;var _=n.get(e);if(_&&n.get(t))return _==t;var u=-1,l=!0,y=a&COMPARE_UNORDERED_FLAG?new _SetCache:void 0;for(n.set(e,t),n.set(t,e);++u<i;){var p=e[u],g=t[u];if(r)var h=s?r(g,p,u,t,e,n):r(p,g,u,e,t,n);if(void 0!==h){if(h)continue;l=!1;break}if(y){if(!_arraySome(t,function(e,t){if(!_cacheHas(y,t)&&(p===e||o(p,e,a,r,n)))return y.push(t)})){l=!1;break}}else if(p!==g&&!o(p,g,a,r,n)){l=!1;break}}return n.delete(e),n.delete(t),l}var _equalArrays=equalArrays,Uint8Array=_root.Uint8Array,_Uint8Array=Uint8Array;function mapToArray(e){var t=-1,a=Array(e.size);return e.forEach(function(e,r){a[++t]=[r,e]}),a}var _mapToArray=mapToArray;function setToArray(e){var t=-1,a=Array(e.size);return e.forEach(function(e){a[++t]=e}),a}var _setToArray=setToArray,COMPARE_PARTIAL_FLAG$1=1,COMPARE_UNORDERED_FLAG$1=2,boolTag="[object Boolean]",dateTag="[object Date]",errorTag="[object Error]",mapTag="[object Map]",numberTag="[object Number]",regexpTag="[object RegExp]",setTag="[object Set]",stringTag="[object String]",symbolTag="[object Symbol]",arrayBufferTag="[object ArrayBuffer]",dataViewTag="[object DataView]",symbolProto=_Symbol?_Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;function equalByTag(e,t,a,r,o,n,s){switch(a){case dataViewTag:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case arrayBufferTag:return!(e.byteLength!=t.byteLength||!n(new _Uint8Array(e),new _Uint8Array(t)));case boolTag:case dateTag:case numberTag:return eq_1(+e,+t);case errorTag:return e.name==t.name&&e.message==t.message;case regexpTag:case stringTag:return e==t+"";case mapTag:var i=_mapToArray;case setTag:var c=r&COMPARE_PARTIAL_FLAG$1;if(i||(i=_setToArray),e.size!=t.size&&!c)return!1;var _=s.get(e);if(_)return _==t;r|=COMPARE_UNORDERED_FLAG$1,s.set(e,t);var u=_equalArrays(i(e),i(t),r,o,n,s);return s.delete(e),u;case symbolTag:if(symbolValueOf)return symbolValueOf.call(e)==symbolValueOf.call(t)}return!1}var _equalByTag=equalByTag;function arrayPush(e,t){for(var a=-1,r=t.length,o=e.length;++a<r;)e[o+a]=t[a];return e}var _arrayPush=arrayPush,isArray=Array.isArray,isArray_1=isArray;function baseGetAllKeys(e,t,a){var r=t(e);return isArray_1(e)?r:_arrayPush(r,a(e))}var _baseGetAllKeys=baseGetAllKeys;function arrayFilter(e,t){for(var a=-1,r=null==e?0:e.length,o=0,n=[];++a<r;){var s=e[a];t(s,a,e)&&(n[o++]=s)}return n}var _arrayFilter=arrayFilter;function stubArray(){return[]}var stubArray_1=stubArray,objectProto$5=Object.prototype,propertyIsEnumerable=objectProto$5.propertyIsEnumerable,nativeGetSymbols=Object.getOwnPropertySymbols,getSymbols=nativeGetSymbols?function(e){return null==e?[]:(e=Object(e),_arrayFilter(nativeGetSymbols(e),function(t){return propertyIsEnumerable.call(e,t)}))}:stubArray_1,_getSymbols=getSymbols;function baseTimes(e,t){for(var a=-1,r=Array(e);++a<e;)r[a]=t(a);return r}var _baseTimes=baseTimes;function isObjectLike(e){return null!=e&&"object"==typeof e}var isObjectLike_1=isObjectLike,argsTag="[object Arguments]";function baseIsArguments(e){return isObjectLike_1(e)&&_baseGetTag(e)==argsTag}var _baseIsArguments=baseIsArguments,objectProto$6=Object.prototype,hasOwnProperty$4=objectProto$6.hasOwnProperty,propertyIsEnumerable$1=objectProto$6.propertyIsEnumerable,isArguments=_baseIsArguments(function(){return arguments}())?_baseIsArguments:function(e){return isObjectLike_1(e)&&hasOwnProperty$4.call(e,"callee")&&!propertyIsEnumerable$1.call(e,"callee")},isArguments_1=isArguments;function stubFalse(){return!1}var stubFalse_1=stubFalse,isBuffer_1=createCommonjsModule(function(e,t){var a=t&&!t.nodeType&&t,r=a&&e&&!e.nodeType&&e,o=r&&r.exports===a?_root.Buffer:void 0,n=(o?o.isBuffer:void 0)||stubFalse_1;e.exports=n}),MAX_SAFE_INTEGER=9007199254740991,reIsUint=/^(?:0|[1-9]\d*)$/;function isIndex(e,t){var a=typeof e;return!!(t=null==t?MAX_SAFE_INTEGER:t)&&("number"==a||"symbol"!=a&&reIsUint.test(e))&&e>-1&&e%1==0&&e<t}var _isIndex=isIndex,MAX_SAFE_INTEGER$1=9007199254740991;function isLength(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=MAX_SAFE_INTEGER$1}var isLength_1=isLength,argsTag$1="[object Arguments]",arrayTag="[object Array]",boolTag$1="[object Boolean]",dateTag$1="[object Date]",errorTag$1="[object Error]",funcTag$1="[object Function]",mapTag$1="[object Map]",numberTag$1="[object Number]",objectTag="[object Object]",regexpTag$1="[object RegExp]",setTag$1="[object Set]",stringTag$1="[object String]",weakMapTag="[object WeakMap]",arrayBufferTag$1="[object ArrayBuffer]",dataViewTag$1="[object DataView]",float32Tag="[object Float32Array]",float64Tag="[object Float64Array]",int8Tag="[object Int8Array]",int16Tag="[object Int16Array]",int32Tag="[object Int32Array]",uint8Tag="[object Uint8Array]",uint8ClampedTag="[object Uint8ClampedArray]",uint16Tag="[object Uint16Array]",uint32Tag="[object Uint32Array]",typedArrayTags={};function baseIsTypedArray(e){return isObjectLike_1(e)&&isLength_1(e.length)&&!!typedArrayTags[_baseGetTag(e)]}typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=!0,typedArrayTags[argsTag$1]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag$1]=typedArrayTags[boolTag$1]=typedArrayTags[dataViewTag$1]=typedArrayTags[dateTag$1]=typedArrayTags[errorTag$1]=typedArrayTags[funcTag$1]=typedArrayTags[mapTag$1]=typedArrayTags[numberTag$1]=typedArrayTags[objectTag]=typedArrayTags[regexpTag$1]=typedArrayTags[setTag$1]=typedArrayTags[stringTag$1]=typedArrayTags[weakMapTag]=!1;var _baseIsTypedArray=baseIsTypedArray;function baseUnary(e){return function(t){return e(t)}}var _baseUnary=baseUnary,_nodeUtil=createCommonjsModule(function(e,t){var a=t&&!t.nodeType&&t,r=a&&e&&!e.nodeType&&e,o=r&&r.exports===a&&_freeGlobal.process,n=function(){try{return r&&r.require&&r.require("util").types||o&&o.binding&&o.binding("util")}catch(e){}}();e.exports=n}),nodeIsTypedArray=_nodeUtil&&_nodeUtil.isTypedArray,isTypedArray=nodeIsTypedArray?_baseUnary(nodeIsTypedArray):_baseIsTypedArray,isTypedArray_1=isTypedArray,objectProto$7=Object.prototype,hasOwnProperty$5=objectProto$7.hasOwnProperty;function arrayLikeKeys(e,t){var a=isArray_1(e),r=!a&&isArguments_1(e),o=!a&&!r&&isBuffer_1(e),n=!a&&!r&&!o&&isTypedArray_1(e),s=a||r||o||n,i=s?_baseTimes(e.length,String):[],c=i.length;for(var _ in e)!t&&!hasOwnProperty$5.call(e,_)||s&&("length"==_||o&&("offset"==_||"parent"==_)||n&&("buffer"==_||"byteLength"==_||"byteOffset"==_)||_isIndex(_,c))||i.push(_);return i}var _arrayLikeKeys=arrayLikeKeys,objectProto$8=Object.prototype;function isPrototype(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||objectProto$8)}var _isPrototype=isPrototype;function overArg(e,t){return function(a){return e(t(a))}}var _overArg=overArg,nativeKeys=_overArg(Object.keys,Object),_nativeKeys=nativeKeys,objectProto$9=Object.prototype,hasOwnProperty$6=objectProto$9.hasOwnProperty;function baseKeys(e){if(!_isPrototype(e))return _nativeKeys(e);var t=[];for(var a in Object(e))hasOwnProperty$6.call(e,a)&&"constructor"!=a&&t.push(a);return t}var _baseKeys=baseKeys;function isArrayLike(e){return null!=e&&isLength_1(e.length)&&!isFunction_1(e)}var isArrayLike_1=isArrayLike;function keys(e){return isArrayLike_1(e)?_arrayLikeKeys(e):_baseKeys(e)}var keys_1=keys;function getAllKeys(e){return _baseGetAllKeys(e,keys_1,_getSymbols)}var _getAllKeys=getAllKeys,COMPARE_PARTIAL_FLAG$2=1,objectProto$a=Object.prototype,hasOwnProperty$7=objectProto$a.hasOwnProperty;function equalObjects(e,t,a,r,o,n){var s=a&COMPARE_PARTIAL_FLAG$2,i=_getAllKeys(e),c=i.length;if(c!=_getAllKeys(t).length&&!s)return!1;for(var _=c;_--;){var u=i[_];if(!(s?u in t:hasOwnProperty$7.call(t,u)))return!1}var l=n.get(e);if(l&&n.get(t))return l==t;var y=!0;n.set(e,t),n.set(t,e);for(var p=s;++_<c;){var g=e[u=i[_]],h=t[u];if(r)var b=s?r(h,g,u,t,e,n):r(g,h,u,e,t,n);if(!(void 0===b?g===h||o(g,h,a,r,n):b)){y=!1;break}p||(p="constructor"==u)}if(y&&!p){var f=e.constructor,v=t.constructor;f!=v&&"constructor"in e&&"constructor"in t&&!("function"==typeof f&&f instanceof f&&"function"==typeof v&&v instanceof v)&&(y=!1)}return n.delete(e),n.delete(t),y}var _equalObjects=equalObjects,DataView=_getNative(_root,"DataView"),_DataView=DataView,Promise$1=_getNative(_root,"Promise"),_Promise=Promise$1,Set=_getNative(_root,"Set"),_Set=Set,WeakMap=_getNative(_root,"WeakMap"),_WeakMap=WeakMap,mapTag$2="[object Map]",objectTag$1="[object Object]",promiseTag="[object Promise]",setTag$2="[object Set]",weakMapTag$1="[object WeakMap]",dataViewTag$2="[object DataView]",dataViewCtorString=_toSource(_DataView),mapCtorString=_toSource(_Map),promiseCtorString=_toSource(_Promise),setCtorString=_toSource(_Set),weakMapCtorString=_toSource(_WeakMap),getTag=_baseGetTag;(_DataView&&getTag(new _DataView(new ArrayBuffer(1)))!=dataViewTag$2||_Map&&getTag(new _Map)!=mapTag$2||_Promise&&getTag(_Promise.resolve())!=promiseTag||_Set&&getTag(new _Set)!=setTag$2||_WeakMap&&getTag(new _WeakMap)!=weakMapTag$1)&&(getTag=function(e){var t=_baseGetTag(e),a=t==objectTag$1?e.constructor:void 0,r=a?_toSource(a):"";if(r)switch(r){case dataViewCtorString:return dataViewTag$2;case mapCtorString:return mapTag$2;case promiseCtorString:return promiseTag;case setCtorString:return setTag$2;case weakMapCtorString:return weakMapTag$1}return t});var _getTag=getTag,COMPARE_PARTIAL_FLAG$3=1,argsTag$2="[object Arguments]",arrayTag$1="[object Array]",objectTag$2="[object Object]",objectProto$b=Object.prototype,hasOwnProperty$8=objectProto$b.hasOwnProperty;function baseIsEqualDeep(e,t,a,r,o,n){var s=isArray_1(e),i=isArray_1(t),c=s?arrayTag$1:_getTag(e),_=i?arrayTag$1:_getTag(t),u=(c=c==argsTag$2?objectTag$2:c)==objectTag$2,l=(_=_==argsTag$2?objectTag$2:_)==objectTag$2,y=c==_;if(y&&isBuffer_1(e)){if(!isBuffer_1(t))return!1;s=!0,u=!1}if(y&&!u)return n||(n=new _Stack),s||isTypedArray_1(e)?_equalArrays(e,t,a,r,o,n):_equalByTag(e,t,c,a,r,o,n);if(!(a&COMPARE_PARTIAL_FLAG$3)){var p=u&&hasOwnProperty$8.call(e,"__wrapped__"),g=l&&hasOwnProperty$8.call(t,"__wrapped__");if(p||g){var h=p?e.value():e,b=g?t.value():t;return n||(n=new _Stack),o(h,b,a,r,n)}}return!!y&&(n||(n=new _Stack),_equalObjects(e,t,a,r,o,n))}var _baseIsEqualDeep=baseIsEqualDeep;function baseIsEqual(e,t,a,r,o){return e===t||(null==e||null==t||!isObjectLike_1(e)&&!isObjectLike_1(t)?e!=e&&t!=t:_baseIsEqualDeep(e,t,a,r,baseIsEqual,o))}var _baseIsEqual=baseIsEqual,COMPARE_PARTIAL_FLAG$4=1,COMPARE_UNORDERED_FLAG$2=2;function baseIsMatch(e,t,a,r){var o=a.length,n=o,s=!r;if(null==e)return!n;for(e=Object(e);o--;){var i=a[o];if(s&&i[2]?i[1]!==e[i[0]]:!(i[0]in e))return!1}for(;++o<n;){var c=(i=a[o])[0],_=e[c],u=i[1];if(s&&i[2]){if(void 0===_&&!(c in e))return!1}else{var l=new _Stack;if(r)var y=r(_,u,c,e,t,l);if(!(void 0===y?_baseIsEqual(u,_,COMPARE_PARTIAL_FLAG$4|COMPARE_UNORDERED_FLAG$2,r,l):y))return!1}}return!0}var _baseIsMatch=baseIsMatch;function isStrictComparable(e){return e==e&&!isObject_1(e)}var _isStrictComparable=isStrictComparable;function getMatchData(e){for(var t=keys_1(e),a=t.length;a--;){var r=t[a],o=e[r];t[a]=[r,o,_isStrictComparable(o)]}return t}var _getMatchData=getMatchData;function matchesStrictComparable(e,t){return function(a){return null!=a&&a[e]===t&&(void 0!==t||e in Object(a))}}var _matchesStrictComparable=matchesStrictComparable;function baseMatches(e){var t=_getMatchData(e);return 1==t.length&&t[0][2]?_matchesStrictComparable(t[0][0],t[0][1]):function(a){return a===e||_baseIsMatch(a,e,t)}}var _baseMatches=baseMatches,symbolTag$1="[object Symbol]";function isSymbol(e){return"symbol"==typeof e||isObjectLike_1(e)&&_baseGetTag(e)==symbolTag$1}var isSymbol_1=isSymbol,reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;function isKey(e,t){if(isArray_1(e))return!1;var a=typeof e;return!("number"!=a&&"symbol"!=a&&"boolean"!=a&&null!=e&&!isSymbol_1(e))||reIsPlainProp.test(e)||!reIsDeepProp.test(e)||null!=t&&e in Object(t)}var _isKey=isKey,FUNC_ERROR_TEXT="Expected a function";function memoize(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(FUNC_ERROR_TEXT);var a=function(){var r=arguments,o=t?t.apply(this,r):r[0],n=a.cache;if(n.has(o))return n.get(o);var s=e.apply(this,r);return a.cache=n.set(o,s)||n,s};return a.cache=new(memoize.Cache||_MapCache),a}memoize.Cache=_MapCache;var memoize_1=memoize,MAX_MEMOIZE_SIZE=500;function memoizeCapped(e){var t=memoize_1(e,function(e){return a.size===MAX_MEMOIZE_SIZE&&a.clear(),e}),a=t.cache;return t}var _memoizeCapped=memoizeCapped,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,reEscapeChar=/\\(\\)?/g,stringToPath=_memoizeCapped(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rePropName,function(e,a,r,o){t.push(r?o.replace(reEscapeChar,"$1"):a||e)}),t}),_stringToPath=stringToPath;function arrayMap(e,t){for(var a=-1,r=null==e?0:e.length,o=Array(r);++a<r;)o[a]=t(e[a],a,e);return o}var _arrayMap=arrayMap,INFINITY=1/0,symbolProto$1=_Symbol?_Symbol.prototype:void 0,symbolToString=symbolProto$1?symbolProto$1.toString:void 0;function baseToString(e){if("string"==typeof e)return e;if(isArray_1(e))return _arrayMap(e,baseToString)+"";if(isSymbol_1(e))return symbolToString?symbolToString.call(e):"";var t=e+"";return"0"==t&&1/e==-INFINITY?"-0":t}var _baseToString=baseToString;function toString(e){return null==e?"":_baseToString(e)}var toString_1=toString;function castPath(e,t){return isArray_1(e)?e:_isKey(e,t)?[e]:_stringToPath(toString_1(e))}var _castPath=castPath,INFINITY$1=1/0;function toKey(e){if("string"==typeof e||isSymbol_1(e))return e;var t=e+"";return"0"==t&&1/e==-INFINITY$1?"-0":t}var _toKey=toKey;function baseGet(e,t){for(var a=0,r=(t=_castPath(t,e)).length;null!=e&&a<r;)e=e[_toKey(t[a++])];return a&&a==r?e:void 0}var _baseGet=baseGet;function get(e,t,a){var r=null==e?void 0:_baseGet(e,t);return void 0===r?a:r}var get_1=get;function baseHasIn(e,t){return null!=e&&t in Object(e)}var _baseHasIn=baseHasIn;function hasPath(e,t,a){for(var r=-1,o=(t=_castPath(t,e)).length,n=!1;++r<o;){var s=_toKey(t[r]);if(!(n=null!=e&&a(e,s)))break;e=e[s]}return n||++r!=o?n:!!(o=null==e?0:e.length)&&isLength_1(o)&&_isIndex(s,o)&&(isArray_1(e)||isArguments_1(e))}var _hasPath=hasPath;function hasIn(e,t){return null!=e&&_hasPath(e,t,_baseHasIn)}var hasIn_1=hasIn,COMPARE_PARTIAL_FLAG$5=1,COMPARE_UNORDERED_FLAG$3=2;function baseMatchesProperty(e,t){return _isKey(e)&&_isStrictComparable(t)?_matchesStrictComparable(_toKey(e),t):function(a){var r=get_1(a,e);return void 0===r&&r===t?hasIn_1(a,e):_baseIsEqual(t,r,COMPARE_PARTIAL_FLAG$5|COMPARE_UNORDERED_FLAG$3)}}var _baseMatchesProperty=baseMatchesProperty;function identity(e){return e}var identity_1=identity;function baseProperty(e){return function(t){return null==t?void 0:t[e]}}var _baseProperty=baseProperty;function basePropertyDeep(e){return function(t){return _baseGet(t,e)}}var _basePropertyDeep=basePropertyDeep;function property(e){return _isKey(e)?_baseProperty(_toKey(e)):_basePropertyDeep(e)}var property_1=property;function baseIteratee(e){return"function"==typeof e?e:null==e?identity_1:"object"==typeof e?isArray_1(e)?_baseMatchesProperty(e[0],e[1]):_baseMatches(e):property_1(e)}var _baseIteratee=baseIteratee;function baseFindIndex(e,t,a,r){for(var o=e.length,n=a+(r?1:-1);r?n--:++n<o;)if(t(e[n],n,e))return n;return-1}var _baseFindIndex=baseFindIndex;function baseIsNaN(e){return e!=e}var _baseIsNaN=baseIsNaN;function strictIndexOf(e,t,a){for(var r=a-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}var _strictIndexOf=strictIndexOf;function baseIndexOf(e,t,a){return t==t?_strictIndexOf(e,t,a):_baseFindIndex(e,_baseIsNaN,a)}var _baseIndexOf=baseIndexOf;function arrayIncludes(e,t){return!(null==e||!e.length)&&_baseIndexOf(e,t,0)>-1}var _arrayIncludes=arrayIncludes;function arrayIncludesWith(e,t,a){for(var r=-1,o=null==e?0:e.length;++r<o;)if(a(t,e[r]))return!0;return!1}var _arrayIncludesWith=arrayIncludesWith;function noop(){}var noop_1=noop,INFINITY$2=1/0,createSet=_Set&&1/_setToArray(new _Set([,-0]))[1]==INFINITY$2?function(e){return new _Set(e)}:noop_1,_createSet=createSet,LARGE_ARRAY_SIZE$1=200;function baseUniq(e,t,a){var r=-1,o=_arrayIncludes,n=e.length,s=!0,i=[],c=i;if(a)s=!1,o=_arrayIncludesWith;else if(n>=LARGE_ARRAY_SIZE$1){var _=t?null:_createSet(e);if(_)return _setToArray(_);s=!1,o=_cacheHas,c=new _SetCache}else c=t?[]:i;e:for(;++r<n;){var u=e[r],l=t?t(u):u;if(u=a||0!==u?u:0,s&&l==l){for(var y=c.length;y--;)if(c[y]===l)continue e;t&&c.push(l),i.push(u)}else o(c,l,a)||(c!==i&&c.push(l),i.push(u))}return i}var _baseUniq=baseUniq;function uniqBy(e,t){return e&&e.length?_baseUniq(e,_baseIteratee(t,2)):[]}var uniqBy_1=uniqBy,MyComponent=function(){function e(){}return e.prototype.validateName=function(e){if(null==typeof e)throw new Error("src: required")},e.prototype.validateProjectId=function(e){var t=null==typeof e,a="string"==typeof e&&8===e.length;if(t)throw new Error("projectId: required");if(!a)throw new Error("projectId: invalid")},e.prototype.getFilters=function(e,t){var a=["grayscale"],r=e.split(";"),o="filters",n="",s="";return uniqBy_1(r.concat(["quality=keep"]),function(e){return e.replace(/=.*$/,"")}).forEach(function(e){var t=e.split("="),r=t[0],i=t[1];"mirror"===r?s=i?"-":"":"crop"===r?n=i||"":o+=":"+r+"("+(-1===a.indexOf(r)?i:"")+")"}),(t?n+s+t+"/":"")+o},e.prototype.processExternalImage=function(e,t,a,r){return"https://filesquash.io/v1/"+t+"/process/"+this.getFilters(r,a)+"/"+encodeURIComponent(e)},e.prototype.processHostedImage=function(e,t,a,r,o){return o?"https://filesquash.io/v1/"+t+"/assets/"+e+"/"+this.getFilters(r,a):e+"/"+this.getFilters(r,a)+"/"+encodeURIComponent(e)},e.prototype.getImage=function(e,t,a,r){var o=new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}/i),n=new RegExp(/^(http|https):\/\/filesquash\.io\/[0-9A-Z]{8}\/assets\//i),s=o.test(e);return n.test(e)||s?this.processHostedImage(e,t,a,r,s):this.processExternalImage(e,t,a,r)},e.prototype.render=function(){return h("img",{src:this.getImage(this.src,this.projectId,this.size,this.filters),alt:this.alt})},Object.defineProperty(e,"is",{get:function(){return"filesquash-img"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},filters:{type:String,attr:"filters"},projectId:{type:String,attr:"project-id",watchCallbacks:["validateProjectId"]},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["validateName"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"filesquash-img{display:inline-block}"},enumerable:!0,configurable:!0}),e}();export{MyComponent as FilesquashImg};
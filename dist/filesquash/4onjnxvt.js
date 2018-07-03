/*! Built with http://stenciljs.com */
const{h:t}=window.filesquash;var e=function(t,e){return t===e||t!=t&&e!=e},r=function(t,r){for(var n=t.length;n--;)if(e(t[n][0],r))return n;return-1},n=Array.prototype.splice;function o(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}o.prototype.clear=function(){this.__data__=[],this.size=0},o.prototype.delete=function(t){var e=this.__data__,o=r(e,t);return!(o<0||(o==e.length-1?e.pop():n.call(e,o,1),--this.size,0))},o.prototype.get=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]},o.prototype.has=function(t){return r(this.__data__,t)>-1},o.prototype.set=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this};var i=o,u="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(t,e){return t(e={exports:{}},e.exports),e.exports}var c,s="object"==typeof u&&u&&u.Object===Object&&u,f="object"==typeof self&&self&&self.Object===Object&&self,l=s||f||Function("return this")(),p=l.Symbol,h=Object.prototype,v=h.hasOwnProperty,y=h.toString,b=p?p.toStringTag:void 0,_=Object.prototype.toString,d=p?p.toStringTag:void 0,g=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?function(t){var e=v.call(t,b),r=t[b];try{t[b]=void 0}catch(t){}var n=y.call(t);return e?t[b]=r:delete t[b],n}(t):function(t){return _.call(t)}(t)},j=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)},w=function(t){if(!j(t))return!1;var e=g(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},O=l["__core-js_shared__"],m=(c=/[^.]+$/.exec(O&&O.keys&&O.keys.IE_PROTO||""))?"Symbol(src)_1."+c:"",A=Function.prototype.toString,z=function(t){if(null!=t){try{return A.call(t)}catch(t){}try{return t+""}catch(t){}}return""},S=/^\[object .+?Constructor\]$/,$=Function.prototype,I=Object.prototype,E=$.toString,x=I.hasOwnProperty,F=RegExp("^"+E.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),P=function(t){return!(!j(t)||(e=t,m&&m in e))&&(w(t)?F:S).test(z(t));var e},k=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return P(r)?r:void 0},q=k(l,"Map"),C=k(Object,"create"),M=Object.prototype.hasOwnProperty,R=Object.prototype.hasOwnProperty;function T(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}T.prototype.clear=function(){this.__data__=C?C(null):{},this.size=0},T.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},T.prototype.get=function(t){var e=this.__data__;if(C){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return M.call(e,t)?e[t]:void 0},T.prototype.has=function(t){var e=this.__data__;return C?void 0!==e[t]:R.call(e,t)},T.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=C&&void 0===e?"__lodash_hash_undefined__":e,this};var B=T,U=function(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map};function D(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}D.prototype.clear=function(){this.size=0,this.__data__={hash:new B,map:new(q||i),string:new B}},D.prototype.delete=function(t){var e=U(this,t).delete(t);return this.size-=e?1:0,e},D.prototype.get=function(t){return U(this,t).get(t)},D.prototype.has=function(t){return U(this,t).has(t)},D.prototype.set=function(t,e){var r=U(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var L=D;function N(t){var e=this.__data__=new i(t);this.size=e.size}N.prototype.clear=function(){this.__data__=new i,this.size=0},N.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},N.prototype.get=function(t){return this.__data__.get(t)},N.prototype.has=function(t){return this.__data__.has(t)},N.prototype.set=function(t,e){var r=this.__data__;if(r instanceof i){var n=r.__data__;if(!q||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new L(n)}return r.set(t,e),this.size=r.size,this};var V=N;function W(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new L;++e<r;)this.add(t[e])}W.prototype.add=W.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},W.prototype.has=function(t){return this.__data__.has(t)};var H=W,G=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1},Z=function(t,e){return t.has(e)},J=function(t,e,r,n,o,i){var u=1&r,a=t.length,c=e.length;if(a!=c&&!(u&&c>a))return!1;var s=i.get(t);if(s&&i.get(e))return s==e;var f=-1,l=!0,p=2&r?new H:void 0;for(i.set(t,e),i.set(e,t);++f<a;){var h=t[f],v=e[f];if(n)var y=u?n(v,h,f,e,t,i):n(h,v,f,t,e,i);if(void 0!==y){if(y)continue;l=!1;break}if(p){if(!G(e,function(t,e){if(!Z(p,e)&&(h===t||o(h,t,r,n,i)))return p.push(e)})){l=!1;break}}else if(h!==v&&!o(h,v,r,n,i)){l=!1;break}}return i.delete(t),i.delete(e),l},K=l.Uint8Array,Q=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r},X=function(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r},Y=p?p.prototype:void 0,tt=Y?Y.valueOf:void 0,et=Array.isArray,rt=Object.prototype.propertyIsEnumerable,nt=Object.getOwnPropertySymbols,ot=nt?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var u=t[r];e(u,r,t)&&(i[o++]=u)}return i}(nt(t),function(e){return rt.call(t,e)}))}:function(){return[]},it=function(t){return null!=t&&"object"==typeof t},ut=function(t){return it(t)&&"[object Arguments]"==g(t)},at=Object.prototype,ct=at.hasOwnProperty,st=at.propertyIsEnumerable,ft=ut(function(){return arguments}())?ut:function(t){return it(t)&&ct.call(t,"callee")&&!st.call(t,"callee")},lt=function(){return!1},pt=a(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?l.Buffer:void 0,i=(o?o.isBuffer:void 0)||lt;t.exports=i}),ht=/^(?:0|[1-9]\d*)$/,vt=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&ht.test(t))&&t>-1&&t%1==0&&t<e},yt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},bt={};bt["[object Float32Array]"]=bt["[object Float64Array]"]=bt["[object Int8Array]"]=bt["[object Int16Array]"]=bt["[object Int32Array]"]=bt["[object Uint8Array]"]=bt["[object Uint8ClampedArray]"]=bt["[object Uint16Array]"]=bt["[object Uint32Array]"]=!0,bt["[object Arguments]"]=bt["[object Array]"]=bt["[object ArrayBuffer]"]=bt["[object Boolean]"]=bt["[object DataView]"]=bt["[object Date]"]=bt["[object Error]"]=bt["[object Function]"]=bt["[object Map]"]=bt["[object Number]"]=bt["[object Object]"]=bt["[object RegExp]"]=bt["[object Set]"]=bt["[object String]"]=bt["[object WeakMap]"]=!1;var _t,dt=a(function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&s.process,i=function(){try{return n&&n.require&&n.require("util").types||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i}),gt=dt&&dt.isTypedArray,jt=gt?(_t=gt,function(t){return _t(t)}):function(t){return it(t)&&yt(t.length)&&!!bt[g(t)]},wt=Object.prototype.hasOwnProperty,Ot=function(t,e){var r=et(t),n=!r&&ft(t),o=!r&&!n&&pt(t),i=!r&&!n&&!o&&jt(t),u=r||n||o||i,a=u?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=a.length;for(var s in t)!e&&!wt.call(t,s)||u&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||vt(s,c))||a.push(s);return a},mt=Object.prototype,At=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),zt=Object.prototype.hasOwnProperty,St=function(t){if(r=(e=t)&&e.constructor,e!==("function"==typeof r&&r.prototype||mt))return At(t);var e,r,n=[];for(var o in Object(t))zt.call(t,o)&&"constructor"!=o&&n.push(o);return n},$t=function(t){return null!=(e=t)&&yt(e.length)&&!w(e)?Ot(t):St(t);var e},It=function(t){return function(t,e,r){var n=e(t);return et(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,$t,ot)},Et=Object.prototype.hasOwnProperty,xt=k(l,"DataView"),Ft=k(l,"Promise"),Pt=k(l,"Set"),kt=k(l,"WeakMap"),qt=z(xt),Ct=z(q),Mt=z(Ft),Rt=z(Pt),Tt=z(kt),Bt=g;(xt&&"[object DataView]"!=Bt(new xt(new ArrayBuffer(1)))||q&&"[object Map]"!=Bt(new q)||Ft&&"[object Promise]"!=Bt(Ft.resolve())||Pt&&"[object Set]"!=Bt(new Pt)||kt&&"[object WeakMap]"!=Bt(new kt))&&(Bt=function(t){var e=g(t),r="[object Object]"==e?t.constructor:void 0,n=r?z(r):"";if(n)switch(n){case qt:return"[object DataView]";case Ct:return"[object Map]";case Mt:return"[object Promise]";case Rt:return"[object Set]";case Tt:return"[object WeakMap]"}return e});var Ut=Bt,Dt=Object.prototype.hasOwnProperty,Lt=function(t,r,n,o,i,u){var a=et(t),c=et(r),s=a?"[object Array]":Ut(t),f=c?"[object Array]":Ut(r),l="[object Object]"==(s="[object Arguments]"==s?"[object Object]":s),p="[object Object]"==(f="[object Arguments]"==f?"[object Object]":f),h=s==f;if(h&&pt(t)){if(!pt(r))return!1;a=!0,l=!1}if(h&&!l)return u||(u=new V),a||jt(t)?J(t,r,n,o,i,u):function(t,r,n,o,i,u,a){switch(n){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!u(new K(t),new K(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return e(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var c=Q;case"[object Set]":var s=1&o;if(c||(c=X),t.size!=r.size&&!s)return!1;var f=a.get(t);if(f)return f==r;o|=2,a.set(t,r);var l=J(c(t),c(r),o,i,u,a);return a.delete(t),l;case"[object Symbol]":if(tt)return tt.call(t)==tt.call(r)}return!1}(t,r,s,n,o,i,u);if(!(1&n)){var v=l&&Dt.call(t,"__wrapped__"),y=p&&Dt.call(r,"__wrapped__");if(v||y){var b=v?t.value():t,_=y?r.value():r;return u||(u=new V),i(b,_,n,o,u)}}return!!h&&(u||(u=new V),function(t,e,r,n,o,i){var u=1&r,a=It(t),c=a.length;if(c!=It(e).length&&!u)return!1;for(var s=c;s--;){var f=a[s];if(!(u?f in e:Et.call(e,f)))return!1}var l=i.get(t);if(l&&i.get(e))return l==e;var p=!0;i.set(t,e),i.set(e,t);for(var h=u;++s<c;){var v=t[f=a[s]],y=e[f];if(n)var b=u?n(y,v,f,e,t,i):n(v,y,f,t,e,i);if(!(void 0===b?v===y||o(v,y,r,n,i):b)){p=!1;break}h||(h="constructor"==f)}if(p&&!h){var _=t.constructor,d=e.constructor;_!=d&&"constructor"in t&&"constructor"in e&&!("function"==typeof _&&_ instanceof _&&"function"==typeof d&&d instanceof d)&&(p=!1)}return i.delete(t),i.delete(e),p}(t,r,n,o,i,u))},Nt=function t(e,r,n,o,i){return e===r||(null==e||null==r||!it(e)&&!it(r)?e!=e&&r!=r:Lt(e,r,n,o,t,i))},Vt=function(t){return t==t&&!j(t)},Wt=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}},Ht=function(t){var e=function(t){for(var e=$t(t),r=e.length;r--;){var n=e[r],o=t[n];e[r]=[n,o,Vt(o)]}return e}(t);return 1==e.length&&e[0][2]?Wt(e[0][0],e[0][1]):function(r){return r===t||function(t,e,r,n){var o=r.length,i=o,u=!n;if(null==t)return!i;for(t=Object(t);o--;){var a=r[o];if(u&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++o<i;){var c=(a=r[o])[0],s=t[c],f=a[1];if(u&&a[2]){if(void 0===s&&!(c in t))return!1}else{var l=new V;if(n)var p=n(s,f,c,t,e,l);if(!(void 0===p?Nt(f,s,3,n,l):p))return!1}}return!0}(r,t,e)}},Gt=function(t){return"symbol"==typeof t||it(t)&&"[object Symbol]"==g(t)},Zt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Jt=/^\w*$/,Kt=function(t,e){if(et(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Gt(t))||Jt.test(t)||!Zt.test(t)||null!=e&&t in Object(e)},Qt="Expected a function";function Xt(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError(Qt);var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var u=t.apply(this,n);return r.cache=i.set(o,u)||i,u};return r.cache=new(Xt.Cache||L),r}Xt.Cache=L;var Yt,te,ee=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,re=/\\(\\)?/g,ne=(Yt=Xt(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(ee,function(t,r,n,o){e.push(n?o.replace(re,"$1"):r||t)}),e},function(t){return 500===te.size&&te.clear(),t}),te=Yt.cache,Yt),oe=p?p.prototype:void 0,ie=oe?oe.toString:void 0,ue=function t(e){if("string"==typeof e)return e;if(et(e))return function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,t)+"";if(Gt(e))return ie?ie.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r},ae=function(t,e){return et(t)?t:Kt(t,e)?[t]:ne(function(t){return null==t?"":ue(t)}(t))},ce=function(t){if("string"==typeof t||Gt(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e},se=function(t,e){for(var r=0,n=(e=ae(e,t)).length;null!=t&&r<n;)t=t[ce(e[r++])];return r&&r==n?t:void 0},fe=function(t,e){return null!=t&&e in Object(t)},le=function(t,e){return null!=t&&function(t,e,r){for(var n=-1,o=(e=ae(e,t)).length,i=!1;++n<o;){var u=ce(e[n]);if(!(i=null!=t&&r(t,u)))break;t=t[u]}return i||++n!=o?i:!!(o=null==t?0:t.length)&&yt(o)&&vt(u,o)&&(et(t)||ft(t))}(t,e,fe)},pe=function(t,e){return Kt(t)&&Vt(e)?Wt(ce(t),e):function(r){var n=function(t,e,r){var n=null==t?void 0:se(t,e);return void 0===n?r:n}(r,t);return void 0===n&&n===e?le(r,t):Nt(e,n,3)}},he=function(t){return t},ve=function(t){return Kt(t)?(e=ce(t),function(t){return null==t?void 0:t[e]}):function(t){return function(e){return se(e,t)}}(t);var e},ye=function(t){return t!=t},be=function(t,e){return!(null==t||!t.length)&&function(t,e,r){return e==e?function(t,e,r){for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}(t,e,r):function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,ye,r)}(t,e,0)>-1},_e=function(t,e,r){for(var n=-1,o=null==t?0:t.length;++n<o;)if(r(e,t[n]))return!0;return!1},de=Pt&&1/X(new Pt([,-0]))[1]==1/0?function(t){return new Pt(t)}:function(){},ge=function(t,e){return t&&t.length?function(t,e,r){var n=-1,o=be,i=t.length,u=!0,a=[],c=a;if(r)u=!1,o=_e;else if(i>=200){var s=e?null:de(t);if(s)return X(s);u=!1,o=Z,c=new H}else c=e?[]:a;t:for(;++n<i;){var f=t[n],l=e?e(f):f;if(f=r||0!==f?f:0,u&&l==l){for(var p=c.length;p--;)if(c[p]===l)continue t;e&&c.push(l),a.push(f)}else o(c,l,r)||(c!==a&&c.push(l),a.push(f))}return a}(t,"function"==typeof(r=e)?r:null==r?he:"object"==typeof r?et(r)?pe(r[0],r[1]):Ht(r):ve(r)):[];var r};class je{validateName(t){if(null==typeof t)throw new Error("src: required")}validateProjectId(t){const e=null==typeof t,r="string"==typeof t&&8===t.length;if(e)throw new Error("projectId: required");if(!r)throw new Error("projectId: invalid")}getFilters(t,e){const r=["grayscale"],n=t.split(";");let o="filters",i="",u="";return ge([...n,...["quality=keep"]],t=>t.replace(/=.*$/,"")).forEach(t=>{const[e,n]=t.split("=");"mirror"===e?u=n?"-":"":"crop"===e?i=n||"":o+=`:${e}(${-1===r.indexOf(e)?n:""})`}),`${e?i+u+e+"/":""}${o}`}processExternalImage(t,e,r,n){return`https://filesquash.io/v1/${e}/process/${this.getFilters(n,r)}/${encodeURIComponent(t)}`}processHostedImage(t,e,r,n,o){return o?`https://filesquash.io/v1/${e}/assets/${t}/${this.getFilters(n,r)}`:`${t}/${this.getFilters(n,r)}/${encodeURIComponent(t)}`}getImage(t,e,r,n){const o=new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}/i),i=new RegExp(/^(http|https):\/\/filesquash\.io\/[0-9A-Z]{8}\/assets\//i),u=o.test(t);return i.test(t)||u?this.processHostedImage(t,e,r,n,u):this.processExternalImage(t,e,r,n)}render(){return t("img",{src:this.getImage(this.src,this.projectId,this.size,this.filters),alt:this.alt})}static get is(){return"filesquash-img"}static get properties(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},filters:{type:String,attr:"filters"},projectId:{type:String,attr:"project-id",watchCallbacks:["validateProjectId"]},size:{type:String,attr:"size"},src:{type:String,attr:"src",watchCallbacks:["validateName"]}}}static get style(){return"filesquash-img{display:inline-block}"}}export{je as FilesquashImg};